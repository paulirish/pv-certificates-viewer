import{r as t,h as r,H as e}from"./p-13a3df43.js";import{am as a,ah as o,O as i}from"./p-b919cdb5.js";import"./p-c086e54d.js";const l=class{constructor(r){t(this,r),this.certificates=[],this.filterWithSearch=!0,this.highlightWithSearch=!0,this.search="",this.certificatesDecoded=[],this.isDecodeInProcess=!0,this.isHasTests=!1,this.isHasRoots=!1,this.onClickDetails=(t,r)=>{r.stopPropagation(),this.certificateSelectedForDetails=t},this.onClickModalClose=()=>{this.certificateSelectedForDetails=void 0},this.onSearchChange=t=>{this.search=t.target.value.trim()}}componentWillLoad(){this.certificatesDecodeAndSet()}watchCertificates(){this.certificatesDecodeAndSet()}async certificatesDecodeAndSet(){const t=performance.now();if(this.isHasTests=!1,this.isHasRoots=!1,!Array.isArray(this.certificates))return;const r=[];for(const i of this.certificates)try{const t=new a(i.value);await t.getThumbprint("SHA-1"),r.push({body:t,tests:i.tests,name:i.name}),!this.isHasRoots&&t.isRoot&&(this.isHasRoots=!0),this.isHasTests||i.tests&&(i.tests.expired||i.tests.revoked||i.tests.valid)&&(this.isHasTests=!0)}catch(o){console.error("Error certificate parse:",o)}const e=performance.now()-t;e<800?setTimeout(()=>{this.isDecodeInProcess=!1},800-e):this.isDecodeInProcess=!1,this.certificatesDecoded=r}onClickDownloadAsPem(t,r){r.stopPropagation(),o.certificate.asPEM(t.body.exportAsPemFormatted(),t.name||t.body.commonName)}onClickDownloadAsDer(t,r){r.stopPropagation(),o.certificate.asPEM(t.body.exportAsHexFormatted(),t.name||t.body.commonName)}onClickRow(t){this.expandedRow=this.expandedRow===t?void 0:t}renderExpandedRow(t){let e=4;return this.isHasTests&&(e+=1),this.isHasRoots||(e+=1),r("tr",{class:"expanded_summary"},r("td",{colSpan:e},r("peculiar-certificate-summary",{certificate:t,showIssuer:!t.isRoot})))}renderCertificateTests(t){if(!t)return null;const e=[];return t.valid&&e.push(r("peculiar-button",{class:"button_table_action",href:t.valid,target:"_blank"},"Valid")),t.revoked&&e.push(r("peculiar-button",{class:"button_table_action",href:t.revoked,target:"_blank"},"Revoked")),t.expired&&e.push(r("peculiar-button",{class:"button_table_action",href:t.expired,target:"_blank"},"Expired")),e}renderContentState(){const t=this.highlightWithSearch?this.search:"",e=[];return this.certificatesDecoded.forEach(a=>{const o=a.body.serialNumber===this.expandedRow,l=i[a.body.signature.algorithm]||a.body.signature.algorithm;this.filterWithSearch&&this.search&&-1===[l,a.body.issuerCommonName,a.name,a.body.commonName,a.body.thumbprints["SHA-1"]].join(" ").toLowerCase().indexOf(this.search.toLowerCase())||e.push([r("tr",{class:{expanded:o},onClick:this.onClickRow.bind(this,a.body.serialNumber),key:a.body.serialNumber},!this.isHasRoots&&r("td",null,r("peculiar-typography",{class:"mobile_title",color:"grey_5"},"Issuer:"),r("peculiar-typography",{class:"content"},r("peculiar-highlight-words",{search:t},a.body.issuerCommonName))),r("td",null,r("peculiar-typography",{class:"mobile_title",color:"grey_5"},"Name:"),r("peculiar-typography",{class:"content"},r("peculiar-highlight-words",{search:t},a.name||a.body.commonName))),r("td",null,r("peculiar-typography",{class:"mobile_title",color:"grey_5"},"Public Key:"),r("peculiar-typography",{class:"content"},r("peculiar-highlight-words",{search:t},l))),r("td",null,r("peculiar-typography",{class:"mobile_title",color:"grey_5"},"Fingerprint (SHA-1):"),r("peculiar-typography",{class:"content",monospace:!0},r("peculiar-highlight-words",{search:t},a.body.thumbprints["SHA-1"]))),r("td",{class:"align_center"},r("peculiar-typography",{class:"mobile_title",color:"grey_5"},"Actions:"),r("span",{class:"content"},r("peculiar-button",{onClick:this.onClickDetails.bind(this,a.body),class:"button_table_action"},"Details"),r("peculiar-button-split",{onClick:this.onClickDownloadAsPem.bind(this,a),actions:[{text:"Download DER",onClick:this.onClickDownloadAsDer.bind(this,a)}],class:"button_table_action"},"Download PEM"))),this.isHasTests&&r("td",{class:"align_center"},r("peculiar-typography",{class:"mobile_title",color:"grey_5"},"Test URLs:"),r("span",{class:"content"},this.renderCertificateTests(a.tests)))),o&&this.renderExpandedRow(a.body)])}),e}renderCertificateDetailsModal(){return this.certificateSelectedForDetails?r("div",{class:"modal_wrapper"},r("div",{class:"modal_content"},r("div",{class:"modal_title"},r("peculiar-typography",{type:"h4"},"Certificate details"),r("button",{class:"modal_close",onClick:this.onClickModalClose,type:"button"},r("svg",{width:"30",height:"30",viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg"},r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.7204 14.375L21.0654 19.7185C21.3115 19.9658 21.3115 20.3693 21.0654 20.6154L20.615 21.0645C20.3689 21.3118 19.9667 21.3118 19.7181 21.0645L14.3744 15.721L9.03194 21.0645C8.78327 21.3118 8.3811 21.3118 8.13371 21.0645L7.68459 20.6154C7.43847 20.3693 7.43847 19.9658 7.68459 19.7185L13.0296 14.375L7.68459 9.03155C7.43847 8.78417 7.43847 8.38074 7.68459 8.13463L8.13371 7.68554C8.3811 7.43815 8.78327 7.43815 9.03194 7.68554L14.3744 13.029L19.7181 7.68554C19.9667 7.43815 20.3689 7.43815 20.615 7.68554L21.0654 8.13463C21.3115 8.38074 21.3115 8.78417 21.0654 9.03155L15.7204 14.375Z"})))),r("peculiar-certificate-viewer",{certificate:this.certificateSelectedForDetails}))):null}renderSearch(){return this.filterWithSearch||this.highlightWithSearch?r("div",{class:"search_section"},r("input",{onInput:this.onSearchChange,type:"search",value:"",class:"input_search",disabled:!this.certificatesDecoded.length,placeholder:"Search"})):null}renderEmptyState(){return r("tr",null,r("td",{class:"status_wrapper",colSpan:5},r("peculiar-typography",{type:"b1",align:"center"},"There are no certificates available.")))}renderEmptySearchState(){return r("tr",null,r("td",{class:"status_wrapper",colSpan:5},r("peculiar-typography",{type:"b1",align:"center"},"No results found for “",this.search,"“")))}renderLoadingState(){return r("div",{class:"loading_container"},r("peculiar-circular-progress",null))}renderBody(){if(this.isDecodeInProcess)return null;if(!this.certificatesDecoded.length)return this.renderEmptyState();const t=this.renderContentState();return this.search&&!t.length?this.renderEmptySearchState():t}render(){return r(e,null,this.renderSearch(),r("table",{class:{m_extra:this.isHasTests||!this.isHasRoots}},r("thead",null,r("tr",null,!this.isHasRoots&&r("th",{class:"col_issuer"},r("peculiar-typography",{type:"h7",align:"left"},"Issuer")),r("th",{class:"col_name"},r("peculiar-typography",{type:"h7",align:"left"},"Name")),r("th",{class:"col_public_key"},r("peculiar-typography",{type:"h7",align:"left"},"Public Key")),r("th",{class:"col_fingerprint"},r("peculiar-typography",{type:"h7",align:"left"},"Fingerprint (SHA-1)")),r("th",{class:"col_actions"},r("peculiar-typography",{type:"h7",align:"center"},"Actions")),this.isHasTests&&r("th",{class:"col_tests"},r("peculiar-typography",{type:"h7",align:"center"},"Test URLs")))),r("tbody",null,this.renderBody())),this.renderCertificateDetailsModal(),this.isDecodeInProcess&&this.renderLoadingState())}static get watchers(){return{certificates:["watchCertificates"]}}};l.style=':host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%;word-wrap:break-word;min-width:280px;overflow:auto;position:relative;background:rgb(var(--pv-color-light-rgb))}table{width:100%;table-layout:fixed;border-collapse:collapse}table thead{background-color:rgba(var(--pv-color-primary-rgb), 0.07)}table tr td{vertical-align:middle}table tbody tr:not(.expanded_summary){cursor:pointer}table tr{border-color:rgb(var(--pv-color-grey_3-rgb))}table th{padding:15px 10px;border-width:1px;border-style:solid;border-color:rgb(var(--pv-color-grey_3-rgb))}table td{padding:8px 10px;border-width:1px;border-style:solid;border-color:rgb(var(--pv-color-grey_3-rgb))}table .col_issuer,table .col_name,table .col_public_key{width:16%}table .col_actions,table .col_tests{width:18%}table.m_extra .col_issuer,table.m_extra .col_name,table.m_extra .col_public_key{width:12%}table.m_extra .col_actions,table.m_extra .col_tests{width:17%}table tr.expanded td:not(:last-child){border-right-color:transparent}table tr.expanded td{border-bottom-color:transparent}.expanded{border-bottom-color:transparent;background-color:rgba(var(--pv-color-primary-rgb), 0.04)}table tr.expanded_summary{background-color:rgba(var(--pv-color-primary-rgb), 0.04)}table tr.expanded_summary td{vertical-align:top;padding:10px 20px 26px}@-webkit-keyframes fadeIn{0%{opacity:0.001}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0.001}100%{opacity:1}}.modal_wrapper{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:auto;padding:10px;text-align:center;background:rgba(var(--pv-color-dark-rgb), 0.9);-webkit-animation:fadeIn 300ms;animation:fadeIn 300ms}.modal_wrapper:before{display:inline-block;vertical-align:middle;width:0;height:100%;content:""}.modal_content{position:relative;display:inline-block;vertical-align:middle;width:100%;max-width:900px;text-align:left;border-radius:3px;overflow:hidden;background-color:rgb(var(--pv-color-light-rgb))}.modal_title{background-color:rgba(var(--pv-color-primary-rgb), 0.07);border-color:rgb(var(--pv-color-grey_3-rgb));border-bottom-width:1px;border-bottom-style:solid;padding:17px 60px 17px 20px;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.modal_close{cursor:pointer;border:none;background-color:transparent;position:absolute;top:0;bottom:0;right:0;padding:0 12px;-webkit-transition:opacity 100ms;transition:opacity 100ms;outline:none}.modal_close:hover{opacity:0.6}.modal_close svg{fill:rgb(var(--pv-color-dark-rgb))}.button_table_action{margin:2px}.mobile_title{display:none}.status_wrapper{height:85px;text-align:center;pointer-events:none}.search_section{background-color:rgba(var(--pv-color-primary-rgb), 0.07);height:50px;padding:10px;border-width:1px 1px 0 1px;border-style:solid;border-color:rgb(var(--pv-color-grey_3-rgb))}.input_search{height:100%;width:100%;border-radius:3px;border-width:1px;border-style:solid;padding:0 14px;font-size:12px;outline:none;border-color:rgb(var(--pv-color-grey_3-rgb));color:rgb(var(--pv-color-dark-rgb))}.input_search::-moz-placeholder{color:rgb(var(--pv-color-grey_3-rgb))}.input_search:-ms-input-placeholder{color:rgb(var(--pv-color-grey_3-rgb))}.input_search::-ms-input-placeholder{color:rgb(var(--pv-color-grey_3-rgb))}.input_search::-webkit-input-placeholder{color:rgb(var(--pv-color-grey_3-rgb))}.input_search::placeholder{color:rgb(var(--pv-color-grey_3-rgb))}.loading_container{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(var(--pv-color-dark-rgb), 0.3);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.align_center{text-align:center}@media (hover: hover){table tbody tr:not(.expanded_summary):hover{background-color:rgba(var(--pv-color-primary-rgb), 0.04)}}@media (max-width: 900px){table,tbody,tr,td{display:block}thead{display:none}tr{padding:0 15px;border-width:1px;border-style:solid}tr:not(:first-child){margin-top:-1px}tr:not(.expanded_summary) td:first-child{border:none !important}table td{padding-left:0;padding-right:0;border-width:1px 0 0 0 !important;border-color:rgba(var(--pv-color-grey_3-rgb), 0.5) !important}table tr.expanded_summary td{padding:15px 0}.mobile_title{display:inline-block;width:90px;vertical-align:middle}.modal_title{padding:17px 60px 17px 15px}.content{display:inline-block;width:calc(100% - 90px);vertical-align:middle;text-align:left}.expanded_summary{border-top-color:transparent;padding-bottom:10px}.expanded_summary td:before{content:none}.status_wrapper{height:266px;display:table-cell}.search_section{height:60px;padding:15px}.align_center{text-align:inherit}}';export{l as peculiar_certificates_viewer}