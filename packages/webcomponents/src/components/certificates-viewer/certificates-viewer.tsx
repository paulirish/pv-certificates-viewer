/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  h,
  Prop,
  State,
  Watch,
  Host,
  Event,
  EventEmitter,
} from '@stencil/core';

import { X509Certificate } from '../../crypto';
import { OIDs } from '../../constants/oids';
import { Download } from '../../utils/download';
import { l10n } from '../../utils';

export interface ICertificate {
  value: string;
  name?: string;
  tests?: {
    valid?: string;
    revoked?: string;
    expired?: string;
  };
}

interface ICertificateDecoded {
  body: X509Certificate;
  tests?: ICertificate['tests'];
  name?: string;
}

@Component({
  tag: 'peculiar-certificates-viewer',
  styleUrl: 'certificates-viewer.scss',
  shadow: true,
})
export class CertificatesViewer {
  /**
   * List of certificates values for decode and show in the list.
   * <br />
   * **NOTE**: If you do not provide a `name` value when
   * invocing the component it will take the first Subject CN value.
   * <br />
   * **NOTE**: If you do not provide a `tests` this column will be ommited from the rendered page.
   * <br />
   * **NOTE**: If the supplied certificates are self-signed the issuer column will be ommited.
   */
  @Prop() certificates: ICertificate[] = [];

  /**
   * Use filter in the list when search is changed.
   */
  @Prop() filterWithSearch: boolean = true;

  /**
   * Use highlight chapters in the list when search is changed.
   */
  @Prop() highlightWithSearch: boolean = true;

  @State() search: string = '';

  @State() certificatesDecoded: ICertificateDecoded[] = [];

  @State() expandedRow?: number;

  @State() certificateSelectedForDetails?: X509Certificate;

  @State() isDecodeInProcess: boolean = true;

  /**
   * Emitted when the user open certificate details modal.
   */
  @Event() detailsOpen!: EventEmitter<X509Certificate>;

  /**
   * Emitted when the user close certificate details modal.
   */
  @Event() detailsClose!: EventEmitter<void>;

  private isHasTests: boolean = false;

  private isHasRoots: boolean = false;

  componentWillLoad() {
    this.certificatesDecodeAndSet();
  }

  @Watch('certificates')
  watchCertificates(newValue: ICertificate[], oldValue: ICertificate[]) {
    /**
     * Prevent rerender after set the same `certificates` prop.
     */
    if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
      this.certificatesDecodeAndSet();
    }
  }

  async certificatesDecodeAndSet() {
    let hasTests = false;
    let hasRoots = false;

    if (!Array.isArray(this.certificates)) {
      return;
    }

    const data: ICertificateDecoded[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const certificate of this.certificates) {
      try {
        const decoded = new X509Certificate(certificate.value);

        await decoded.getThumbprint('SHA-1');

        data.push({
          body: decoded,
          tests: certificate.tests,
          name: certificate.name,
        });

        if (!hasRoots && decoded.isRoot) {
          hasRoots = true;
        }

        if (!hasTests) {
          if (
            certificate.tests
            && (certificate.tests.expired || certificate.tests.revoked || certificate.tests.valid)
          ) {
            hasTests = true;
          }
        }
      } catch (error) {
        console.error('Error certificate parse:', error);
      }
    }

    this.isHasTests = hasTests;
    this.isHasRoots = hasRoots;
    this.isDecodeInProcess = false;
    this.certificatesDecoded = data;
  }

  // eslint-disable-next-line class-methods-use-this
  private handleClickDownloadAsPem(certificate: ICertificateDecoded, e: MouseEvent) {
    e.stopPropagation();

    Download.certificate.asPEM(
      certificate.body.exportAsPemFormatted(),
      certificate.name || certificate.body.commonName,
    );
  }

  // eslint-disable-next-line class-methods-use-this
  private handleClickDownloadAsDer(certificate: ICertificateDecoded, e: MouseEvent) {
    e.stopPropagation();

    Download.certificate.asPEM(
      certificate.body.exportAsHexFormatted(),
      certificate.name || certificate.body.commonName,
    );
  }

  private handleClickDetails = (certificate: X509Certificate, e: MouseEvent) => {
    e.stopPropagation();

    this.certificateSelectedForDetails = certificate;
    this.detailsOpen.emit(certificate);
  };

  private handleModalClose = () => {
    this.certificateSelectedForDetails = undefined;

    this.detailsClose.emit();
  };

  private handleClickRow(index: number) {
    const isExpandedRowClicked = this.expandedRow === index;

    this.expandedRow = isExpandedRowClicked
      ? undefined
      : index;
  }

  private getMaxColSpanValue() {
    let colSpan = 4;

    if (this.isHasTests) {
      colSpan += 1;
    }

    if (!this.isHasRoots) {
      colSpan += 1;
    }

    return colSpan;
  }

  private renderExpandedRow(certificate: X509Certificate) {
    const colSpan = this.getMaxColSpanValue();

    return (
      <tr class="expanded_summary">
        <td colSpan={colSpan}>
          <peculiar-certificate-summary
            certificate={certificate}
            showIssuer={!certificate.isRoot}
          />
        </td>
      </tr>
    );
  }

  // eslint-disable-next-line class-methods-use-this
  private renderCertificateTests(tests: ICertificateDecoded['tests']) {
    if (!tests) {
      return null;
    }

    const elems = [];

    if (tests.valid) {
      elems.push((
        <peculiar-button
          class="button_table_action"
          href={tests.valid}
          target="_blank"
        >
          {l10n.getString('valid')}
        </peculiar-button>
      ));
    }

    if (tests.revoked) {
      elems.push((
        <peculiar-button
          class="button_table_action"
          href={tests.revoked}
          target="_blank"
        >
          {l10n.getString('revoked')}
        </peculiar-button>
      ));
    }

    if (tests.expired) {
      elems.push((
        <peculiar-button
          class="button_table_action"
          href={tests.expired}
          target="_blank"
        >
          {l10n.getString('expired')}
        </peculiar-button>
      ));
    }

    return elems;
  }

  private renderContentState() {
    const searchHighlight = this.highlightWithSearch
      ? this.search
      : '';
    const content = [];

    this.certificatesDecoded.forEach((certificate, index) => {
      const isExpandedRow = index === this.expandedRow;
      const publicKeyValue = OIDs[certificate.body.signature.algorithm]
        || certificate.body.signature.algorithm;

      if (this.filterWithSearch && this.search) {
        const certificateStringForSearch = [
          publicKeyValue,
          certificate.body.issuerCommonName,
          certificate.name,
          certificate.body.commonName,
          certificate.body.thumbprints['SHA-1'],
        ]
          .join(' ')
          .toLowerCase();

        if (certificateStringForSearch.indexOf(this.search.toLowerCase()) === -1) {
          return;
        }
      }

      content.push([
        <tr
          class={{
            expanded: isExpandedRow,
          }}
          onClick={this.handleClickRow.bind(this, index)}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          {!this.isHasRoots && (
            <td>
              <peculiar-typography
                class="mobile_title"
                color="grey_5"
              >
                {l10n.getString('issuer')}
                :
              </peculiar-typography>
              <peculiar-typography class="content">
                <peculiar-highlight-words search={searchHighlight}>
                  {certificate.body.issuerCommonName}
                </peculiar-highlight-words>
              </peculiar-typography>
            </td>
          )}
          <td>
            <peculiar-typography
              class="mobile_title"
              color="grey_5"
            >
              {l10n.getString('name')}
              :
            </peculiar-typography>
            <peculiar-typography class="content">
              <peculiar-highlight-words search={searchHighlight}>
                {certificate.name || certificate.body.commonName}
              </peculiar-highlight-words>
            </peculiar-typography>
          </td>
          <td>
            <peculiar-typography
              class="mobile_title"
              color="grey_5"
            >
              {l10n.getString('publicKey')}
              :
            </peculiar-typography>
            <peculiar-typography class="content">
              <peculiar-highlight-words search={searchHighlight}>
                {publicKeyValue}
              </peculiar-highlight-words>
            </peculiar-typography>
          </td>
          <td>
            <peculiar-typography
              class="mobile_title"
              color="grey_5"
            >
              {l10n.getString('fingerprint')}
              &nbsp; (SHA-1):
            </peculiar-typography>
            <peculiar-typography class="content" monospace>
              <peculiar-highlight-words search={searchHighlight}>
                {certificate.body.thumbprints['SHA-1']}
              </peculiar-highlight-words>
            </peculiar-typography>
          </td>
          <td class="align_center">
            <peculiar-typography
              class="mobile_title"
              color="grey_5"
            >
              {l10n.getString('actions')}
              :
            </peculiar-typography>
            <span class="content">
              <peculiar-button
                onClick={this.handleClickDetails.bind(this, certificate.body)}
                class="button_table_action"
              >
                {l10n.getString('details')}
              </peculiar-button>
              <peculiar-button-split
                onClick={this.handleClickDownloadAsPem.bind(this, certificate)}
                actions={[{
                  text: l10n.getString('download.der'),
                  onClick: this.handleClickDownloadAsDer.bind(this, certificate),
                }]}
                class="button_table_action"
              >
                {l10n.getString('download.pem')}
              </peculiar-button-split>
            </span>
          </td>
          {this.isHasTests && (
            <td class="align_center">
              <peculiar-typography
                class="mobile_title"
                color="grey_5"
              >
                {l10n.getString('testURLs')}
                :
              </peculiar-typography>
              <span class="content">
                {this.renderCertificateTests(certificate.tests)}
              </span>
            </td>
          )}
        </tr>,
        isExpandedRow && this.renderExpandedRow(certificate.body),
      ]);
    });

    return content;
  }

  private renderCertificateDetailsModal() {
    if (!this.certificateSelectedForDetails) {
      return null;
    }

    return (
      <div
        class="modal_wrapper"
        role="presentation"
        aria-hidden="false"
        part="presentation"
      >
        <div
          class="modal_backdrop"
          onClick={this.handleModalClose}
          aria-hidden="true"
        />
        <div
          class="modal_container"
          role="dialog"
          part="presentation_container"
        >
          <header class="modal_title">
            <peculiar-typography
              type="h4"
            >
              {l10n.getString('certificateDetails')}
            </peculiar-typography>
            <button
              class="modal_close"
              onClick={this.handleModalClose}
              type="button"
              aria-label="Close"
              title="Close"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.7204 14.375L21.0654 19.7185C21.3115 19.9658 21.3115 20.3693 21.0654 20.6154L20.615 21.0645C20.3689 21.3118 19.9667 21.3118 19.7181 21.0645L14.3744 15.721L9.03194 21.0645C8.78327 21.3118 8.3811 21.3118 8.13371 21.0645L7.68459 20.6154C7.43847 20.3693 7.43847 19.9658 7.68459 19.7185L13.0296 14.375L7.68459 9.03155C7.43847 8.78417 7.43847 8.38074 7.68459 8.13463L8.13371 7.68554C8.3811 7.43815 8.78327 7.43815 9.03194 7.68554L14.3744 13.029L19.7181 7.68554C19.9667 7.43815 20.3689 7.43815 20.615 7.68554L21.0654 8.13463C21.3115 8.38074 21.3115 8.78417 21.0654 9.03155L15.7204 14.375Z"
                />
              </svg>
            </button>
          </header>
          <div class="modal_content">
            <peculiar-certificate-viewer
              certificate={this.certificateSelectedForDetails}
            />
          </div>
        </div>
      </div>
    );
  }

  private renderSearch() {
    if (!this.filterWithSearch && !this.highlightWithSearch) {
      return null;
    }

    return (
      <div class="search_section">
        <input
          onInput={this.handleSearch}
          type="search"
          value=""
          class="input_search"
          disabled={!this.certificatesDecoded.length}
          placeholder="Search"
        />
      </div>
    );
  }

  private renderEmptyState() {
    const colSpan = this.getMaxColSpanValue();

    return (
      <tr>
        <td
          class="status_wrapper"
          colSpan={colSpan}
        >
          <peculiar-typography
            type="b1"
            align="center"
          >
            There are no certificates available.
          </peculiar-typography>
        </td>
      </tr>
    );
  }

  private renderEmptySearchState() {
    const colSpan = this.getMaxColSpanValue();

    return (
      <tr>
        <td
          class="status_wrapper"
          colSpan={colSpan}
        >
          <peculiar-typography
            type="b1"
            align="center"
          >
            No results found for &ldquo;
            {this.search}
            &ldquo;
          </peculiar-typography>
        </td>
      </tr>
    );
  }

  // eslint-disable-next-line class-methods-use-this
  private renderLoadingState() {
    return (
      <div class="loading_container">
        <peculiar-circular-progress />
      </div>
    );
  }

  private renderBody() {
    if (this.isDecodeInProcess) {
      return null;
    }

    if (!this.certificatesDecoded.length) {
      return this.renderEmptyState();
    }

    const contentState = this.renderContentState();

    if (this.search && !contentState.length) {
      return this.renderEmptySearchState();
    }

    return contentState;
  }

  private handleSearch = (e: any) => {
    this.search = e.target.value.trim();
  };

  render() {
    return (
      <Host>
        {this.renderSearch()}
        <table
          class={{
            m_extra: this.isHasTests || !this.isHasRoots,
          }}
        >
          <thead>
            <tr>
              {!this.isHasRoots && (
                <th class="col_issuer">
                  <peculiar-typography
                    type="h7"
                    align="left"
                  >
                    {l10n.getString('issuer')}
                  </peculiar-typography>
                </th>
              )}
              <th class="col_name">
                <peculiar-typography
                  type="h7"
                  align="left"
                >
                  {l10n.getString('name')}
                </peculiar-typography>
              </th>
              <th class="col_public_key">
                <peculiar-typography
                  type="h7"
                  align="left"
                >
                  {l10n.getString('publicKey')}
                </peculiar-typography>
              </th>
              <th class="col_fingerprint">
                <peculiar-typography
                  type="h7"
                  align="left"
                >
                  {l10n.getString('fingerprint')}
                  &nbsp; (SHA-1)
                </peculiar-typography>
              </th>
              <th class="col_actions">
                <peculiar-typography
                  type="h7"
                  align="center"
                >
                  {l10n.getString('actions')}
                </peculiar-typography>
              </th>
              {this.isHasTests && (
                <th class="col_tests">
                  <peculiar-typography
                    type="h7"
                    align="center"
                  >
                    {l10n.getString('testURLs')}
                  </peculiar-typography>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {this.renderBody()}
          </tbody>
        </table>
        {this.renderCertificateDetailsModal()}
        {this.isDecodeInProcess && this.renderLoadingState()}
      </Host>
    );
  }
}
