import { Component, h, Prop, State, Watch, Host } from '@stencil/core';

import { X509Certificate } from '../../utils/crypto';

export interface ICertificate {
  value: string;
  name?: string;
  tests?: {
    valid?: string;
    revoked?: string;
    expired?: string;
  };
}

interface ICertificateDecoded extends X509Certificate {
  tests?: ICertificate['tests'];
}

@Component({
  tag: 'peculiar-certificates-viewer',
  styleUrl: 'certificates-viewer.scss',
  scoped: true,
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
  @State() expandedRow: X509Certificate['serialNumber'] | null;
  @State() certificateSelectedForDetails: string | null;
  @State() isDecodeInProcess: boolean = true;

  private isHasTests: boolean = false;
  private isHasRoots: boolean = false;

  componentWillLoad() {
    this.certificatesDecodeAndSet();
  }

  @Watch('certificates')
  watchCertificates() {
    this.certificatesDecodeAndSet();
  }

  async certificatesDecodeAndSet() {
    const timeStart = performance.now();

    this.isHasTests = false;
    this.isHasRoots = false;

    if (!Array.isArray(this.certificates)) {
      return [];
    }

    const data: ICertificateDecoded[] = [];

    for (const certificate of this.certificates) {
      try {
        const cert = new X509Certificate(certificate.value, certificate.name);

        await cert.getFingerprint('SHA-1');

        data.push(Object.assign(
          cert,
          { tests: certificate.tests },
        ));

        if (!this.isHasRoots && cert.isRoot) {
          this.isHasRoots = true;
        }

        if (!this.isHasTests) {
          if (
            certificate.tests &&
            (certificate.tests.expired || certificate.tests.revoked || certificate.tests.valid)
          ) {
            this.isHasTests = true;
          }
        }
      } catch (error) {
        console.error(error);
      }
    }

    const timeEnd = performance.now();
    const timeDuration = timeEnd - timeStart;
    const minimumTimeDuration = 800;

    /**
     * Check decode time duration and change `isDecodeInProcess` to `false`
     * only after `minimumTimeDuration` time for prevent quickly hide loading state
     */
    if (timeDuration < minimumTimeDuration) {
      setTimeout(
        () => this.isDecodeInProcess = false,
        minimumTimeDuration - timeDuration,
      );
    } else {
      this.isDecodeInProcess = false;
    }

    this.certificatesDecoded = data;
  }

  onClickDownload(certificate: X509Certificate, downloadType: 'PEM' | 'DER', event: MouseEvent) {
    event.stopPropagation();

    if (downloadType === 'PEM') {
      return certificate.downloadAsPEM();
    }

    return certificate.downloadAsDER();
  }

  onClickDetails = (value: string, event: MouseEvent) => {
    event.stopPropagation();

    this.certificateSelectedForDetails = value;
  }

  onClickModalClose = () => {
    this.certificateSelectedForDetails = null;
  }

  onClickRow(serialNumber: X509Certificate['serialNumber']) {
    const isExpandedRowClicked = this.expandedRow === serialNumber;

    this.expandedRow = isExpandedRowClicked
      ? null
      : serialNumber;
  }

  renderExpandedRow(certificate: X509Certificate) {
    let colSpan = 4;

    if (this.isHasTests) {
      colSpan += 1;
    }

    if (!this.isHasRoots) {
      colSpan += 1;
    }

    return (
      <tr class="expanded_summary peculiar_stroke_grey_3">
        <td colSpan={colSpan} class="peculiar_stroke_grey_3">
          <peculiar-certificate-summary
            certificate={certificate}
            showIssuer={!certificate.isRoot}
          />
        </td>
      </tr>
    );
  }

  renderCertificateTests(tests: ICertificateDecoded['tests']) {
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
          Valid
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
          Revoked
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
          Expired
        </peculiar-button>
      ));
    }

    return elems;
  }

  renderContentState() {
    const searchHighlight = this.highlightWithSearch
      ? this.search
      : '';
    const content = [];

    this.certificatesDecoded.forEach((certificate) => {
      const isExpandedRow = certificate.serialNumber === this.expandedRow;
      const publicKeyValue = `${certificate.publicKey.algorithm.name} ${certificate.publicKey.algorithm.modulusBits || certificate.publicKey.algorithm.namedCurve}`;
      const issuerValue = certificate.issuer && certificate.issuer.CN
        ? certificate.issuer.CN.value.join(', ')
        : '';

      if (this.filterWithSearch && this.search) {
        const certificateStringForSearch = [
          publicKeyValue,
          issuerValue,
          certificate.commonName,
          certificate.fingerprints['SHA-1'],
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
            peculiar_stroke_grey_3: true,
            expanded: isExpandedRow,
          }}
          onClick={this.onClickRow.bind(this, certificate.serialNumber)}
          key={certificate.serialNumber}
        >
          {!this.isHasRoots && (
            <td class="peculiar_stroke_grey_3">
              <peculiar-typography
                class="mobile_title"
                color="grey_5"
              >
                Issuer:
              </peculiar-typography>
              <peculiar-typography class="content">
                <peculiar-highlight-words search={searchHighlight}>
                  {issuerValue}
                </peculiar-highlight-words>
              </peculiar-typography>
            </td>
          )}
          <td class="peculiar_stroke_grey_3">
            <peculiar-typography
              class="mobile_title"
              color="grey_5"
            >
              Name:
            </peculiar-typography>
            <peculiar-typography class="content">
              <peculiar-highlight-words search={searchHighlight}>
                {certificate.commonName}
              </peculiar-highlight-words>
            </peculiar-typography>
          </td>
          <td class="peculiar_stroke_grey_3">
            <peculiar-typography
              class="mobile_title"
              color="grey_5"
            >
              Public Key:
            </peculiar-typography>
            <peculiar-typography class="content">
              <peculiar-highlight-words search={searchHighlight}>
                {publicKeyValue}
              </peculiar-highlight-words>
            </peculiar-typography>
          </td>
          <td class="peculiar_stroke_grey_3">
            <peculiar-typography
              class="mobile_title"
              color="grey_5"
            >
              Fingerprint (SHA-1):
            </peculiar-typography>
            <peculiar-typography class="content" monospace={true}>
              <peculiar-highlight-words search={searchHighlight}>
              {certificate.fingerprints['SHA-1']}
              </peculiar-highlight-words>
            </peculiar-typography>
          </td>
          <td class="align_center peculiar_stroke_grey_3">
            <peculiar-typography
              class="mobile_title"
              color="grey_5"
            >
              Actions:
            </peculiar-typography>
            <span class="content">
              <peculiar-button
                onClick={this.onClickDetails.bind(this, certificate.base64)}
                class="button_table_action"
              >
                Details
              </peculiar-button>
              <peculiar-button-split
                onClick={this.onClickDownload.bind(this, certificate, 'PEM')}
                actions={[{
                  text: 'Download DER',
                  onClick: this.onClickDownload.bind(this, certificate, 'DER'),
                }]}
                class="button_table_action"
              >
                Download PEM
              </peculiar-button-split>
            </span>
          </td>
          {this.isHasTests && (
            <td class="align_center peculiar_stroke_grey_3">
              <peculiar-typography
                class="mobile_title"
                color="grey_5"
              >
                Test URLs:
              </peculiar-typography>
              <span class="content">
                {this.renderCertificateTests(certificate.tests)}
              </span>
            </td>
          )}
        </tr>,
        isExpandedRow && this.renderExpandedRow(certificate),
      ]);
    });

    return content;
  }

  renderCertificateDetailsModal() {
    if (!this.certificateSelectedForDetails) {
      return null;
    }

    return  (
      <div class="modal_wrapper">
        <div class="modal_content peculiar_fill_light">
          <div class="modal_title peculiar_stroke_grey_3">
            <peculiar-typography
              type="h4"
            >
              Certificate details
            </peculiar-typography>
            <button
              class="modal_close"
              onClick={this.onClickModalClose}
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
          </div>
          <peculiar-certificate-viewer
            certificate={this.certificateSelectedForDetails}
          />
        </div>
      </div>
    );
  }

  renderSearch() {
    if (!this.filterWithSearch && !this.highlightWithSearch) {
      return null;
    }

    return (
      <div class="search_section peculiar_stroke_grey_3">
        <input
          onInput={this.onSearchChange}
          type="search"
          value=""
          class="input_search peculiar_fill_light peculiar_stroke_grey_3 peculiar_color_dark"
          disabled={!this.certificatesDecoded.length}
          placeholder="Search"
        />
      </div>
    );
  }

  renderEmptyState() {
    return (
      <tr class="peculiar_stroke_grey_3">
        <td
          class="peculiar_stroke_grey_3 status_wrapper"
          colSpan={5}
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

  renderEmptySearchState() {
    return (
      <tr class="peculiar_stroke_grey_3">
        <td
          class="peculiar_stroke_grey_3 status_wrapper"
          colSpan={5}
        >
          <peculiar-typography
            type="b1"
            align="center"
          >
            No results found for "{this.search}"
          </peculiar-typography>
        </td>
      </tr>
    );
  }

  renderLoadingState() {
    return (
      <div class="loading_container">
        <peculiar-circular-progress />
      </div>
    );
  }

  renderBody() {
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

  onSearchChange = (e: any) => {
    this.search = e.target.value
      .trim();
  }

  render() {
    return (
      <Host>
        {this.renderSearch()}
        <table
          class={{
            peculiar_color_dark: true,
            m_extra: this.isHasTests || !this.isHasRoots,
          }}
        >
          <thead>
            <tr class="peculiar_stroke_grey_3">
              {!this.isHasRoots && (
                <th class="peculiar_stroke_grey_3 col_issuer">
                  <peculiar-typography
                    type="h7"
                    align="left"
                  >
                    Issuer
                  </peculiar-typography>
                </th>
              )}
              <th class="peculiar_stroke_grey_3 col_name">
                <peculiar-typography
                  type="h7"
                  align="left"
                >
                  Name
                </peculiar-typography>
              </th>
              <th class="peculiar_stroke_grey_3 col_public_key">
                <peculiar-typography
                  type="h7"
                  align="left"
                >
                  Public Key
                </peculiar-typography>
              </th>
              <th class="peculiar_stroke_grey_3 col_fingerprint">
                <peculiar-typography
                  type="h7"
                  align="left"
                >
                  Fingerprint (SHA-1)
                </peculiar-typography>
              </th>
              <th class="peculiar_stroke_grey_3 col_actions">
                <peculiar-typography
                  type="h7"
                  align="center"
                >
                  Actions
                </peculiar-typography>
              </th>
              {this.isHasTests && (
                <th class="peculiar_stroke_grey_3 col_tests">
                  <peculiar-typography
                    type="h7"
                    align="center"
                  >
                    Test URLs
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
