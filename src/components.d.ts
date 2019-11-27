/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IAction,
} from './components/button-split/button-split';
import {
  Certificate,
} from './utils/crypto';
import {
  ICertificate,
} from './components/certificates-viewer/certificates-viewer';

export namespace Components {
  interface PvButton {
    'disabled'?: boolean;
    'fill'?: 'stroke' | 'fill';
    'href'?: string;
    'target'?: string;
  }
  interface PvButtonSplit {
    'actions': IAction[];
    'fill': 'stroke' | 'fill';
    'onClick': (event: MouseEvent) => void;
  }
  interface PvCertificateSummary {
    'certificate': Certificate;
    'showIssuer': boolean;
  }
  interface PvCertificateViewer {
    /**
    * The certificate value for decode and show details. Use PEM or DER format.
    */
    'certificate': string;
  }
  interface PvCertificatesViewer {
    /**
    * List of certificates values for decode and show in the list.
    */
    'certificates': ICertificate[];
  }
  interface PvHighlightWords {
    'search': string;
  }
  interface PvTextHider {
    'opened': boolean;
  }
}

declare global {


  interface HTMLPvButtonElement extends Components.PvButton, HTMLStencilElement {}
  var HTMLPvButtonElement: {
    prototype: HTMLPvButtonElement;
    new (): HTMLPvButtonElement;
  };

  interface HTMLPvButtonSplitElement extends Components.PvButtonSplit, HTMLStencilElement {}
  var HTMLPvButtonSplitElement: {
    prototype: HTMLPvButtonSplitElement;
    new (): HTMLPvButtonSplitElement;
  };

  interface HTMLPvCertificateSummaryElement extends Components.PvCertificateSummary, HTMLStencilElement {}
  var HTMLPvCertificateSummaryElement: {
    prototype: HTMLPvCertificateSummaryElement;
    new (): HTMLPvCertificateSummaryElement;
  };

  interface HTMLPvCertificateViewerElement extends Components.PvCertificateViewer, HTMLStencilElement {}
  var HTMLPvCertificateViewerElement: {
    prototype: HTMLPvCertificateViewerElement;
    new (): HTMLPvCertificateViewerElement;
  };

  interface HTMLPvCertificatesViewerElement extends Components.PvCertificatesViewer, HTMLStencilElement {}
  var HTMLPvCertificatesViewerElement: {
    prototype: HTMLPvCertificatesViewerElement;
    new (): HTMLPvCertificatesViewerElement;
  };

  interface HTMLPvHighlightWordsElement extends Components.PvHighlightWords, HTMLStencilElement {}
  var HTMLPvHighlightWordsElement: {
    prototype: HTMLPvHighlightWordsElement;
    new (): HTMLPvHighlightWordsElement;
  };

  interface HTMLPvTextHiderElement extends Components.PvTextHider, HTMLStencilElement {}
  var HTMLPvTextHiderElement: {
    prototype: HTMLPvTextHiderElement;
    new (): HTMLPvTextHiderElement;
  };
  interface HTMLElementTagNameMap {
    'pv-button': HTMLPvButtonElement;
    'pv-button-split': HTMLPvButtonSplitElement;
    'pv-certificate-summary': HTMLPvCertificateSummaryElement;
    'pv-certificate-viewer': HTMLPvCertificateViewerElement;
    'pv-certificates-viewer': HTMLPvCertificatesViewerElement;
    'pv-highlight-words': HTMLPvHighlightWordsElement;
    'pv-text-hider': HTMLPvTextHiderElement;
  }
}

declare namespace LocalJSX {
  interface PvButton {
    'disabled'?: boolean;
    'fill'?: 'stroke' | 'fill';
    'href'?: string;
    'target'?: string;
  }
  interface PvButtonSplit {
    'actions'?: IAction[];
    'fill'?: 'stroke' | 'fill';
    'onClick'?: (event: MouseEvent) => void;
  }
  interface PvCertificateSummary {
    'certificate'?: Certificate;
    'showIssuer'?: boolean;
  }
  interface PvCertificateViewer {
    /**
    * The certificate value for decode and show details. Use PEM or DER format.
    */
    'certificate'?: string;
  }
  interface PvCertificatesViewer {
    /**
    * List of certificates values for decode and show in the list.
    */
    'certificates'?: ICertificate[];
  }
  interface PvHighlightWords {
    'search'?: string;
  }
  interface PvTextHider {
    'onTextExpand'?: (event: CustomEvent<any>) => void;
    'opened'?: boolean;
  }

  interface IntrinsicElements {
    'pv-button': PvButton;
    'pv-button-split': PvButtonSplit;
    'pv-certificate-summary': PvCertificateSummary;
    'pv-certificate-viewer': PvCertificateViewer;
    'pv-certificates-viewer': PvCertificatesViewer;
    'pv-highlight-words': PvHighlightWords;
    'pv-text-hider': PvTextHider;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pv-button': LocalJSX.PvButton & JSXBase.HTMLAttributes<HTMLPvButtonElement>;
      'pv-button-split': LocalJSX.PvButtonSplit & JSXBase.HTMLAttributes<HTMLPvButtonSplitElement>;
      'pv-certificate-summary': LocalJSX.PvCertificateSummary & JSXBase.HTMLAttributes<HTMLPvCertificateSummaryElement>;
      'pv-certificate-viewer': LocalJSX.PvCertificateViewer & JSXBase.HTMLAttributes<HTMLPvCertificateViewerElement>;
      'pv-certificates-viewer': LocalJSX.PvCertificatesViewer & JSXBase.HTMLAttributes<HTMLPvCertificatesViewerElement>;
      'pv-highlight-words': LocalJSX.PvHighlightWords & JSXBase.HTMLAttributes<HTMLPvHighlightWordsElement>;
      'pv-text-hider': LocalJSX.PvTextHider & JSXBase.HTMLAttributes<HTMLPvTextHiderElement>;
    }
  }
}


