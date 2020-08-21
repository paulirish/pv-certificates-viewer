import{h as e,r as t,H as i}from"./p-e465b76b.js";import{A as a,J as r,C as s,M as c,h as n,V as l,P as u,W as o,X as d,Y as p,Z as b,_ as h,$ as v,a0 as g,a1 as m,a2 as f,a3 as w,a4 as k,a5 as x,a6 as y,a7 as N,a8 as L,a9 as S,d as A,v as I,E as D,b as _,e as E,O as P,f as C,s as j}from"./p-25d7ff48.js";import{g as K,a as T,G as V,R as H,S as B,T as O,E as $}from"./p-9c35feaf.js";class R extends a{constructor(e){super(e,r);const t=this.getAsnExtnValue();switch(this.asn.type){case N:this.value=n.parse(t,L);break;case x:this.value=n.parse(t,y);break;case w:this.value=n.parse(t,k);break;case m:this.value=n.parse(t,f);break;case v:this.value=n.parse(t,g);break;case b:this.value=n.parse(t,h);break;case d:this.value=n.parse(t,p);break;case u:this.value=n.parse(t,o);break;case c:this.value=n.parse(t,l);break;default:this.value=s.ToHex(t)}}getAsnExtnValue(){return this.asn.values[0]}}class W extends a{constructor(e){var t;super(W.rawClarify(e),S),this.thumbprints={};const{acinfo:i}=this.asn;this.serialNumber=s.ToHex(i.serialNumber),this.version=i.version;const a=i.attrCertValidityPeriod.notBeforeTime;if(!a)throw new Error("Cannot get 'notBefore' value");this.notBefore=a;const r=i.attrCertValidityPeriod.notAfterTime;if(!r)throw new Error("Cannot get 'notAfter' value");this.notAfter=r,this.validity=A(this.notBefore,this.notAfter),this.issuer=i.issuer.v1Form||(null===(t=i.issuer.v2Form)||void 0===t?void 0:t.issuerName),this.holder=i.holder}static base64Clear(e){return e.replace(/.*base64,/,"").replace(/-----.+-----/g,"").replace(/[\s\r\n]/g,"")}static rawClarify(e){const t=W.base64Clear(e);let i;return i=I.isHex(t)?s.FromHex(t):I.isBase64(t)||I.isPem(t)?s.FromBase64(t):s.FromBinary(e),i}get signature(){const{signatureValue:e,signatureAlgorithm:t}=this.asn;return{value:e,algorithm:t.algorithm}}parseExtensions(){const{acinfo:e}=this.asn;e.extensions&&(this.extensions=e.extensions.map(e=>new D(_.serialize(e))))}parseAttributes(){const{acinfo:e}=this.asn;e.attributes&&(this.attributes=e.attributes.map(e=>new R(_.serialize(e))))}async getThumbprint(e="SHA-1"){try{const t=E.get(),i=await t.subtle.digest(e,this.raw);this.thumbprints[e.name||e]=s.ToHex(i)}catch(t){console.error("Error thumbprint get:",t)}}}const G=(t,i)=>{const{attribute:a}=t;return[e(T,{name:"Name",value:K(a.asn.type)}),i,e("tr",null,e("td",{colSpan:2,class:"divider"},e("span",{class:"bg_fill"})))]},J=t=>{const{name:i}=t;return i?i.map(t=>t.map(t=>e(T,{name:P[t.type]||t.type,value:t.value.toString()}))):null},M=t=>{const{attribute:i}=t;return e(G,{attribute:i},e(J,{name:i.value}))},X=t=>{const{attribute:i}=t;return e(G,{attribute:i},e(T,{name:"Code Authority",value:""}),e(V,{generalName:i.value.codeAuthority,getDNSNameLink:()=>"",getIPAddressLink:()=>""}),e(T,{name:"Code Id",value:""}),e(V,{generalName:i.value.codeId,getDNSNameLink:()=>"",getIPAddressLink:()=>""}),e(T,{name:"Short Name",value:i.value.shortName}),e(T,{name:"Short Description",value:i.value.shortDescription}))},Y=t=>{const{attribute:i}=t;return e(G,{attribute:i},e(T,{name:"Assessment Authority",value:""}),e(V,{generalName:i.value.assessmentAuthority,getDNSNameLink:()=>"",getIPAddressLink:()=>""}),e(T,{name:"Assessment Location",value:""}),e(V,{generalName:i.value.assessmentLocation,getDNSNameLink:()=>"",getIPAddressLink:()=>""}),e(T,{name:"Assessment Ref",value:""}),e(V,{generalName:i.value.assessmentRef,getDNSNameLink:()=>"",getIPAddressLink:()=>""}),e(T,{name:"Data Storage Territory",value:i.value.dataStorageTerritory}),e(T,{name:"Description",value:i.value.description}))},Z=t=>{const{attribute:i}=t;return e(G,{attribute:i},e(T,{name:"Value",value:`${i.value.base} * 10^${i.value.degree} ${i.value.location}`}))},q=t=>{const{attribute:i}=t;return e(G,{attribute:i},e(T,{name:"DNBvsDNO",value:s.ToHex(i.value.DNBvsDNO.toNumber())}),e(T,{name:"DNBvsDNT",value:s.ToHex(i.value.DNBvsDNT.toNumber())}),e(T,{name:"DNOvsDNT",value:s.ToHex(i.value.DNOvsDNT.toNumber())}))},z=t=>{const{attribute:i}=t;return e(G,{attribute:i},Object.keys(i.value).map(t=>e(T,{name:t,value:i.value[t]})))},F=t=>{const{attributes:i}=t;return i&&i.length?[e(H,{value:"Attributes"}),i.map(t=>{try{return t.value instanceof C?e(M,{attribute:t}):t.value instanceof h?e(X,{attribute:t}):t.value instanceof p?e(Y,{attribute:t}):t.value instanceof o?e(Z,{attribute:t}):t.value instanceof g?e(q,{attribute:t}):t.value instanceof l?e(z,{attribute:t}):null}catch(i){return console.error("Error render extension:",t.asn.type),null}})]:null},Q=class{constructor(e){t(this,e),this.isDecodeInProcess=!0}componentWillLoad(){this.decodeCertificate(this.certificate)}async decodeCertificate(e){this.isDecodeInProcess=!0;try{this.certificateDecoded=new W(e),this.certificateDecoded.parseExtensions(),this.certificateDecoded.parseAttributes(),await this.certificateDecoded.getThumbprint("SHA-1"),await this.certificateDecoded.getThumbprint("SHA-256")}catch(t){this.certificateDecodeError=t,console.error("Error certificate parse:",t)}this.isDecodeInProcess=!1}renderErrorState(){return e("div",{class:"status_wrapper"},e("peculiar-typography",{type:"b1",class:"interaction_text"},"There is error for certificate decode."))}renderEmptyState(){return e("div",{class:"status_wrapper"},e("peculiar-typography",{type:"b1",class:"interaction_text"},"There is no certificate available."))}render(){var t,a,r,c,n;return this.certificateDecodeError?this.renderErrorState():this.certificateDecoded?e(i,null,e("table",null,e(H,{value:"Basic Information"}),e(T,{name:"Serial number",value:this.certificateDecoded.serialNumber}),e(T,{name:"Version",value:this.certificateDecoded.version}),e(T,{name:"Validity",value:this.certificateDecoded.validity}),e(T,{name:"Issued",value:j(this.certificateDecoded.notBefore)}),e(T,{name:"Expired",value:j(this.certificateDecoded.notBefore)}),e(H,{value:"Issuer"}),this.certificateDecoded.issuer.map(t=>e(V,{generalName:t,getDNSNameLink:()=>"",getIPAddressLink:()=>""})),e(H,{value:"Holder"}),null===(t=this.certificateDecoded.holder)||void 0===t?void 0:t.baseCertificateID.issuer.map(t=>e(V,{generalName:t,getDNSNameLink:()=>"",getIPAddressLink:()=>""})),e("tr",null,e("td",null),e("td",null)),e(T,{name:"Serial",value:s.ToHex(null===(a=this.certificateDecoded.holder)||void 0===a?void 0:a.baseCertificateID.serial),monospace:!0}),e("tr",null,e("td",null),e("td",null)),e(T,{name:"Digest Info",value:""}),e(T,{name:"Algorithm",value:K(null===(r=this.certificateDecoded.holder)||void 0===r?void 0:r.objectDigestInfo.digestAlgorithm.algorithm)}),e(T,{name:"Value",value:s.ToHex(null===(c=this.certificateDecoded.holder)||void 0===c?void 0:c.objectDigestInfo.objectDigest),monospace:!0}),e(T,{name:"Type",value:null===(n=this.certificateDecoded.holder)||void 0===n?void 0:n.objectDigestInfo.digestedObjectType}),e(B,{signature:this.certificateDecoded.signature}),e(O,{thumbprints:this.certificateDecoded.thumbprints}),e(F,{attributes:this.certificateDecoded.attributes,getLEILink:()=>"",getDNSNameLink:()=>"",getIPAddressLink:()=>"",getAuthKeyIdParentLink:()=>"",getAuthKeyIdSiblingsLink:()=>"",getSubjectKeyIdChildrenLink:()=>"",getSubjectKeyIdSiblingsLink:()=>""}),e($,{extensions:this.certificateDecoded.extensions,getLEILink:()=>"",getDNSNameLink:()=>"",getIPAddressLink:()=>"",getAuthKeyIdParentLink:()=>"",getAuthKeyIdSiblingsLink:()=>"",getSubjectKeyIdChildrenLink:()=>"",getSubjectKeyIdSiblingsLink:()=>""}))):this.renderEmptyState()}};Q.style=".sc-peculiar-attribute-certificate-viewer-h{display:block;width:100%;word-wrap:break-word;position:relative;min-width:280px;min-height:300px;background:rgb(var(--peculiar-color-light-rgb))}th.sc-peculiar-attribute-certificate-viewer,td.sc-peculiar-attribute-certificate-viewer{border:none}table.sc-peculiar-attribute-certificate-viewer{width:100%;margin-bottom:30px}table.sc-peculiar-attribute-certificate-viewer .title.sc-peculiar-attribute-certificate-viewer td.sc-peculiar-attribute-certificate-viewer{border-color:rgba(var(--peculiar-color-grey_3-rgb), 0.5);padding-top:60px;padding-bottom:15px;border-bottom-width:1px;border-bottom-style:solid}table.sc-peculiar-attribute-certificate-viewer td.sc-peculiar-attribute-certificate-viewer:first-child{padding-left:30px;width:130px;padding-right:10px}table.sc-peculiar-attribute-certificate-viewer td.sc-peculiar-attribute-certificate-viewer:last-child{padding-right:30px;width:calc(100% - 130px)}table.sc-peculiar-attribute-certificate-viewer td.sc-peculiar-attribute-certificate-viewer{vertical-align:top;padding-top:5px;padding-bottom:5px}table.sc-peculiar-attribute-certificate-viewer td.vertical_align_middle.sc-peculiar-attribute-certificate-viewer{vertical-align:middle}table.sc-peculiar-attribute-certificate-viewer .title.sc-peculiar-attribute-certificate-viewer:first-child td.sc-peculiar-attribute-certificate-viewer{padding-top:15px}table.sc-peculiar-attribute-certificate-viewer .title.sc-peculiar-attribute-certificate-viewer+tr.sc-peculiar-attribute-certificate-viewer td.sc-peculiar-attribute-certificate-viewer{padding-top:15px}table.sc-peculiar-attribute-certificate-viewer td.monospace.sc-peculiar-attribute-certificate-viewer{max-width:0}table.sc-peculiar-attribute-certificate-viewer .divider.sc-peculiar-attribute-certificate-viewer{padding-top:15px;padding-bottom:15px}.divider.sc-peculiar-attribute-certificate-viewer .bg_fill.sc-peculiar-attribute-certificate-viewer{background-color:rgba(var(--peculiar-color-grey_3-rgb), 0.5)}table.sc-peculiar-attribute-certificate-viewer tr.sc-peculiar-attribute-certificate-viewer:last-child .divider.sc-peculiar-attribute-certificate-viewer{padding-top:0;opacity:0}.divider.sc-peculiar-attribute-certificate-viewer span.sc-peculiar-attribute-certificate-viewer{display:block;height:1px}.status_wrapper.sc-peculiar-attribute-certificate-viewer{min-height:inherit;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.interaction_text.sc-peculiar-attribute-certificate-viewer{padding:15px 0;width:300px;margin:auto;text-align:center}";export{Q as peculiar_attribute_certificate_viewer}