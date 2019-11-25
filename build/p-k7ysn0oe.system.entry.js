var __awaiter=this&&this.__awaiter||function(e,t,s,r){function i(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,n){function a(e){try{l(r.next(e))}catch(t){n(t)}}function o(e){try{l(r["throw"](e))}catch(t){n(t)}}function l(e){e.done?s(e.value):i(e.value).then(a,o)}l((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var s={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,i,n,a;return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(e){return function(t){return l([e,t])}}function l(a){if(r)throw new TypeError("Generator is already executing.");while(s)try{if(r=1,i&&(n=a[0]&2?i["return"]:a[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;if(i=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:s.label++;return{value:a[1],done:false};case 5:s.label++;i=a[1];a=[0];continue;case 7:a=s.ops.pop();s.trys.pop();continue;default:if(!(n=s.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){s=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){s.label=a[1];break}if(a[0]===6&&s.label<n[1]){s.label=n[1];n=a;break}if(n&&s.label<n[2]){s.label=n[2];s.ops.push(a);break}if(n[2])s.ops.pop();s.trys.pop();continue}a=t.call(e,s)}catch(o){a=[6,o];i=0}finally{r=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-7a43e955.system.js","./p-ac22bdd7.system.js","./p-f6fed2b0.system.js"],(function(e){"use strict";var t,s,r,i;return{setters:[function(e){t=e.r;s=e.h;r=e.H},function(e){i=e.C},function(){}],execute:function(){var n=e("pv_certificates_viewer",function(){function e(e){var s=this;t(this,e);this.certificates=[];this.certificatesDecoded=[];this.isHasTests=false;this.isHasRoots=false;this.onClickDetails=function(e,t){t.stopPropagation();s.certificateSelectedForDetails=e};this.onClickModalClose=function(){s.certificateSelectedForDetails=null}}e.prototype.componentWillLoad=function(){this.certificatesDecodeAndSet()};e.prototype.watchCertificates=function(){this.certificatesDecodeAndSet()};e.prototype.certificatesDecodeAndSet=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,s,r,n;return __generator(this,(function(a){switch(a.label){case 0:this.isHasTests=false;this.isHasRoots=false;if(!Array.isArray(this.certificates)){return[2,[]]}e=[];t=0,s=this.certificates;a.label=1;case 1:if(!(t<s.length))return[3,4];r=s[t];n=new i(r.value,r.name);return[4,n.getFingerprint()];case 2:a.sent();try{e.push(Object.assign(n,{tests:r.tests}));if(!this.isHasRoots&&n.isRoot){this.isHasRoots=true}if(!this.isHasTests){if(r.tests&&(r.tests.expired||r.tests.revoked||r.tests.valid)){this.isHasTests=true}}}catch(o){console.error(o)}a.label=3;case 3:t++;return[3,1];case 4:this.certificatesDecoded=e;return[2]}}))}))};e.prototype.onClickDownload=function(e,t,s){s.stopPropagation();if(t==="PEM"){return e.downloadAsPEM()}return e.downloadAsDER()};e.prototype.onClickRow=function(e){var t=this.expandedRow===e;this.expandedRow=t?null:e};e.prototype.renderExpandedRow=function(e){var t=4;if(this.isHasTests){t+=1}if(!this.isHasRoots){t+=1}return s("tr",{class:"expanded_summary fill_grey_1_opacity"},s("td",{colSpan:t,class:"stroke_grey_3_border"},s("pv-certificate-summary",{certificate:e,showIssuer:!e.isRoot})))};e.prototype.renderCertificateTests=function(e){if(!e){return null}var t=[];if(e.valid){t.push(s("pv-button",{class:"button_table_action",href:e.valid,target:"_blank"},"Valid"))}if(e.revoked){t.push(s("pv-button",{class:"button_table_action",href:e.revoked,target:"_blank"},"Revoked"))}if(e.expired){t.push(s("pv-button",{class:"button_table_action",href:e.expired,target:"_blank"},"Expired"))}return t};e.prototype.renderCertificates=function(){var e=this;return this.certificatesDecoded.map((function(t){var r=t.serialNumber===e.expandedRow;return[s("tr",{class:r&&"expanded fill_grey_1_opacity",onClick:e.onClickRow.bind(e,t.serialNumber),key:t.serialNumber},!e.isHasRoots&&s("td",{class:"b3 stroke_grey_3_border"},s("span",{class:"mobile_title text_grey_5 align-left b3"},"Issuer:"),s("span",{class:"content"},t.issuer&&t.issuer.CN?t.issuer.CN.value:"")),s("td",{class:"b3 stroke_grey_3_border"},s("span",{class:"mobile_title text_grey_5 align-left b3"},"Name:"),s("span",{class:"content"},t.commonName)),s("td",{class:"b3 stroke_grey_3_border"},s("span",{class:"mobile_title text_grey_5 align-left b3"},"Public Key:"),s("span",{class:"content"},t.publicKey.algorithm.name," ",t.publicKey.algorithm.modulusBits||t.publicKey.algorithm.namedCurve)),s("td",{class:"b3 stroke_grey_3_border"},s("span",{class:"mobile_title text_grey_5 align-left b3"},"Fingerprint (SHA-1):"),s("span",{class:"content monospace"},t.fingerprint)),s("td",{class:"align-center stroke_grey_3_border"},s("span",{class:"mobile_title text_grey_5 align-left b3"},"Actions:"),s("span",{class:"content"},s("pv-button",{onClick:e.onClickDetails.bind(e,t.base64),class:"button_table_action"},"Details"),s("pv-button-split",{onClick:e.onClickDownload.bind(e,t,"PEM"),actions:[{text:"Download DER",onClick:e.onClickDownload.bind(e,t,"DER")}],class:"button_table_action"},"Download PEM"))),e.isHasTests&&s("td",{class:"align-center stroke_grey_3_border"},s("span",{class:"mobile_title text_grey_5 align-left b3"},"Test URLs:"),s("span",{class:"content"},e.renderCertificateTests(t.tests)))),r&&e.renderExpandedRow(t)]}))};e.prototype.renderCertificateDetailsModal=function(){if(!this.certificateSelectedForDetails){return null}return s("div",{class:"modal_wrapper"},s("div",{class:"modal_content"},s("div",{class:"fill_grey_2 modal_title stroke_grey_3_border"},s("h4",{class:"h4 text_black"},"Certificate details"),s("button",{class:"modal_close",onClick:this.onClickModalClose},s("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.7204 14.375L21.0654 19.7185C21.3115 19.9658 21.3115 20.3693 21.0654 20.6154L20.615 21.0645C20.3689 21.3118 19.9667 21.3118 19.7181 21.0645L14.3744 15.721L9.03194 21.0645C8.78327 21.3118 8.3811 21.3118 8.13371 21.0645L7.68459 20.6154C7.43847 20.3693 7.43847 19.9658 7.68459 19.7185L13.0296 14.375L7.68459 9.03155C7.43847 8.78417 7.43847 8.38074 7.68459 8.13463L8.13371 7.68554C8.3811 7.43815 8.78327 7.43815 9.03194 7.68554L14.3744 13.029L19.7181 7.68554C19.9667 7.43815 20.3689 7.43815 20.615 7.68554L21.0654 8.13463C21.3115 8.38074 21.3115 8.78417 21.0654 9.03155L15.7204 14.375Z",fill:"#2A3134"})))),s("div",{class:"fill_white"},s("pv-certificate-viewer",{certificate:this.certificateSelectedForDetails}))))};e.prototype.render=function(){return s(r,null,s("table",{class:{text_black:true,m_extra:this.isHasTests||!this.isHasRoots}},s("thead",{class:"fill_grey_2"},s("tr",null,!this.isHasRoots&&s("th",{class:"h7 stroke_grey_3_border col_issuer"},"Issuer"),s("th",{class:"h7 stroke_grey_3_border col_name"},"Name"),s("th",{class:"h7 stroke_grey_3_border col_public_key"},"Public Key"),s("th",{class:"h7 stroke_grey_3_border col_fingerprint"},"Fingerprint (SHA-1)"),s("th",{class:"align-center h7 stroke_grey_3_border col_actions"},"Actions"),this.isHasTests&&s("th",{class:"align-center h7 stroke_grey_3_border col_tests"},"Test URLs"))),s("tbody",null,this.renderCertificates())),this.renderCertificateDetailsModal())};Object.defineProperty(e,"watchers",{get:function(){return{certificates:["watchCertificates"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"*{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:transparent;word-break:break-word}:focus:not(:active):not(:hover){outline-width:2px;outline-style:solid;outline-offset:-1px}:active,:hover,input:focus,textarea:focus{outline:none!important}a{text-decoration:none}textarea{resize:none}input,textarea{-webkit-appearance:none!important;-moz-appearance:none;-ms-appearance:none;appearance:none!important;font-family:inherit}table{cellspacing:0!important;border-spacing:0!important}.b3{font-size:13px;line-height:1.53;letter-spacing:.5px;font-weight:400}.b3,.h4{font-family:inherit}.h4{font-style:normal;font-weight:700;font-size:18px;line-height:25px}.h6{font-size:15px;line-height:20px;letter-spacing:.3px}.h6,.h7{font-family:inherit;font-weight:600}.h7{font-size:14px;line-height:1.35}.text_black{color:#2a3134}.text_white{color:#fff}.text_grey_5{color:#869196}.text_secondary{color:#3584f7}.align-center{text-align:center}.align-left{text-align:left}.fill_grey_2{background-color:#f4f7fc}.fill_grey_1_opacity{background-color:rgba(251,252,253,.8)}.fill_grey_3_opacity_border{background-color:rgba(209,213,217,.5)}.fill_grey_5{background-color:#869196}.fill_white{background-color:#fff}.fill_secondary{background-color:#3584f7}.stroke_grey_3_border{border-color:#d1d5d9}.stroke_grey_3_opcity_border{border-color:rgba(209,213,217,.5)}.stroke_secondary_border{border-color:rgba(50,124,232,.3)}.monospace{font-family:monospace}:host{display:block;width:100%;word-wrap:break-word;background:#fff;min-width:300px;min-height:400px;overflow:auto}table{width:100%;table-layout:fixed;border-collapse:collapse}table tr td{vertical-align:middle}table tr:not(.expanded_summary) td{cursor:pointer}table tr:hover td{background-color:rgba(251,252,253,.8)}table th{padding:15px 10px}table td,table th{text-align:left;border-width:1px;border-style:solid}table td{padding:8px 10px}table .col_issuer,table .col_name,table .col_public_key{width:16%}table .col_actions,table .col_tests{width:18%}table.m_extra .col_issuer,table.m_extra .col_name,table.m_extra .col_public_key{width:12%}table.m_extra .col_actions,table.m_extra .col_tests{width:17%}table tr.expanded td:not(:last-child){border-right-color:transparent}table tr.expanded td{border-bottom-color:transparent}table tr.expanded_summary td{vertical-align:top;padding:10px 20px 26px}\@-webkit-keyframes fadeIn{0%{opacity:.001}to{opacity:1}}\@keyframes fadeIn{0%{opacity:.001}to{opacity:1}}.modal_wrapper{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:auto;padding:10px;text-align:center;background:rgba(42,49,52,.9);-webkit-animation:fadeIn .3s;animation:fadeIn .3s}.modal_wrapper:before{width:0;height:100%;content:\"\"}.modal_content,.modal_wrapper:before{display:inline-block;vertical-align:middle}.modal_content{width:100%;max-width:900px;text-align:left;border-radius:3px}.modal_content,.modal_title{position:relative;overflow:hidden}.modal_title{border-bottom-width:1px;border-bottom-style:solid;padding:17px 60px 17px 20px;text-overflow:ellipsis;white-space:nowrap}.modal_close{cursor:pointer;border:none;background-color:transparent;position:absolute;top:0;bottom:0;right:0;padding:0 12px;-webkit-transition:opacity .1s;transition:opacity .1s}.modal_close:hover{opacity:.6}.button_table_action{margin:2px}.mobile_title{display:none}\@media (max-width:900px){pv-button,pv-button-split{--pv-button-padding-start:8px;--pv-button-padding-end:8px}table,tbody,td,tr{display:block}thead{display:none}tr{padding:0 15px;border:1px solid #d1d5d9}tr:not(:first-child){margin-top:-1px}tr:not(.expanded_summary) td:first-child{border:none!important}table td{padding-left:0;padding-right:0;border-width:1px 0 0 0!important;border-color:rgba(209,213,217,.5)!important}table tr.expanded_summary td{padding:15px 0}.mobile_title{display:inline-block;width:90px;vertical-align:middle}.modal_title{padding:17px 60px 17px 15px}.content{display:inline-block;width:calc(100% - 90px);vertical-align:middle;text-align:left}.expanded{border-bottom-color:transparent}.expanded_summary{border-top-color:transparent;padding-bottom:10px}.expanded_summary td:before{content:none}}"},enumerable:true,configurable:true});return e}())}}}));