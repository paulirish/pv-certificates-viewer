const e="peculiar";let t,l,n,o=!1,s=!1,i=!1,r=!1,c=0,f=!1;const a="undefined"!=typeof window?window:{},u=a.CSS,p=a.document||{head:{}},d={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,n)=>e.addEventListener(t,l,n),rel:(e,t,l,n)=>e.removeEventListener(t,l,n),ce:(e,t)=>new CustomEvent(e,t)},$=(()=>(p.head.attachShadow+"").indexOf("[native")>-1)(),y=e=>Promise.resolve(e),h=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),m=(e,t,l)=>{l&&l.map(([l,n,o])=>{const s=e,i=b(t,o),r=w(l);d.ael(s,n,i,r),(t.o=t.o||[]).push(()=>d.rel(s,n,i,r))})},b=(e,t)=>l=>{256&e.t?e.s[t](l):(e.i=e.i||[]).push([t,l])},w=e=>0!=(2&e),g="http://www.w3.org/1999/xlink",v=new WeakMap,k=e=>"sc-"+e.u,j={},_=e=>"object"==(e=typeof e)||"function"===e,O="undefined"!=typeof Deno,M=!(O||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),S=(O&&Deno,M?process:O&&Deno,M?process:O&&Deno,(e,t,...l)=>{let n=null,o=null,s=null,i=!1,r=!1,c=[];const f=t=>{for(let l=0;l<t.length;l++)n=t[l],Array.isArray(n)?f(n):null!=n&&"boolean"!=typeof n&&((i="function"!=typeof e&&!_(n))&&(n+=""),i&&r?c[c.length-1].p+=n:c.push(i?x(null,n):n),r=i)};if(f(l),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,D);const a=x(e,null);return a.$=t,c.length>0&&(a.h=c),a.m=o,a.g=s,a}),x=(e,t)=>({t:0,v:e,p:t,k:null,h:null,$:null,m:null,g:null}),C={},D={forEach:(e,t)=>e.map(R).forEach(t),map:(e,t)=>e.map(R).map(t).map(T)},R=e=>({vattrs:e.$,vchildren:e.h,vkey:e.m,vname:e.g,vtag:e.v,vtext:e.p}),T=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),S(e.vtag,t,...e.vchildren||[])}const t=x(e.vtag,e.vtext);return t.$=e.vattrs,t.h=e.vchildren,t.m=e.vkey,t.g=e.vname,t},E=(e,t,l,n,o,s)=>{if(l!==n){let r=ye(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=P(l),s=P(n);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in l)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)l&&n[t]===l[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(r||"o"!==t[0]||"n"!==t[1]){const f=_(n);if((r||f&&null!==n)&&!o)try{if(e.tagName.includes("-"))e[t]=n;else{let o=null==n?"":n;"list"===t?r=!1:null!=l&&e[t]==o||(e[t]=o)}}catch(i){}let a=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,a=!0),null==n||!1===n?!1===n&&""!==e.getAttribute(t)||(a?e.removeAttributeNS(g,t):e.removeAttribute(t)):(!r||4&s||o)&&!f&&(n=!0===n?"":n,a?e.setAttributeNS(g,t,n):e.setAttribute(t,n))}else t="-"===t[2]?t.slice(3):ye(a,c)?c.slice(2):c[2]+t.slice(3),l&&d.rel(e,t,l,!1),n&&d.ael(e,t,n,!1)}},L=/\s/,P=e=>e?e.split(L):[],U=(e,t,l,n)=>{const o=11===t.k.nodeType&&t.k.host?t.k.host:t.k,s=e&&e.$||j,i=t.$||j;for(n in s)n in i||E(o,n,s[n],void 0,l,t.t);for(n in i)E(o,n,s[n],i[n],l,t.t)},N=(e,s,c,f)=>{let a,u,d,$=s.h[c],y=0;if(o||(i=!0,"slot"===$.v&&(t&&f.classList.add(t+"-s"),$.t|=$.h?2:1)),null!==$.p)a=$.k=p.createTextNode($.p);else if(1&$.t)a=$.k=p.createTextNode("");else{if(r||(r="svg"===$.v),a=$.k=p.createElementNS(r?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&$.t?"slot-fb":$.v),r&&"foreignObject"===$.v&&(r=!1),U(null,$,r),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),$.h)for(y=0;y<$.h.length;++y)u=N(e,$,y,a),u&&a.appendChild(u);"svg"===$.v?r=!1:"foreignObject"===a.tagName&&(r=!0)}return a["s-hn"]=n,3&$.t&&(a["s-sr"]=!0,a["s-cr"]=l,a["s-sn"]=$.g||"",d=e&&e.h&&e.h[c],d&&d.v===$.v&&e.k&&W(e.k,!1)),a},W=(e,t)=>{d.t|=1;const l=e.childNodes;for(let o=l.length-1;o>=0;o--){const e=l[o];e["s-hn"]!==n&&e["s-ol"]&&(V(e).insertBefore(e,H(e)),e["s-ol"].remove(),e["s-ol"]=void 0,i=!0),t&&W(e,t)}d.t&=-2},q=(e,t,l,o,s,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=i;++s)o[s]&&(r=N(null,l,s,e),r&&(o[s].k=r,c.insertBefore(r,H(t))))},A=(e,t,l,n,o)=>{for(;t<=l;++t)(n=e[t])&&(o=n.k,K(n),s=!0,o["s-ol"]?o["s-ol"].remove():W(o,!0),o.remove())},F=(e,t)=>e.v===t.v&&("slot"===e.v?e.g===t.g:e.m===t.m),H=e=>e&&e["s-ol"]||e,V=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,z=(e,t)=>{const l=t.k=e.k,n=e.h,o=t.h,s=t.v,i=t.p;let c;null===i?(r="svg"===s||"foreignObject"!==s&&r,"slot"===s||U(e,t,r),null!==n&&null!==o?((e,t,l,n)=>{let o,s,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],p=t[a],d=n.length-1,$=n[0],y=n[d];for(;i<=a&&r<=d;)if(null==u)u=t[++i];else if(null==p)p=t[--a];else if(null==$)$=n[++r];else if(null==y)y=n[--d];else if(F(u,$))z(u,$),u=t[++i],$=n[++r];else if(F(p,y))z(p,y),p=t[--a],y=n[--d];else if(F(u,y))"slot"!==u.v&&"slot"!==y.v||W(u.k.parentNode,!1),z(u,y),e.insertBefore(u.k,p.k.nextSibling),u=t[++i],y=n[--d];else if(F(p,$))"slot"!==u.v&&"slot"!==y.v||W(p.k.parentNode,!1),z(p,$),e.insertBefore(p.k,u.k),p=t[--a],$=n[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].m&&t[f].m===$.m){c=f;break}c>=0?(s=t[c],s.v!==$.v?o=N(t&&t[r],l,c,e):(z(s,$),t[c]=void 0,o=s.k),$=n[++r]):(o=N(t&&t[r],l,r,e),$=n[++r]),o&&V(u.k).insertBefore(o,H(u.k))}i>a?q(e,null==n[d+1]?null:n[d+1].k,l,n,r,d):r>d&&A(t,i,a)})(l,n,t,o):null!==o?(null!==e.p&&(l.textContent=""),q(l,null,t,o,0,o.length-1)):null!==n&&A(n,0,n.length-1),r&&"svg"===s&&(r=!1)):(c=l["s-cr"])?c.parentNode.textContent=i:e.p!==i&&(l.data=i)},B=e=>{let t,l,n,o,s,i,r=e.childNodes;for(l=0,n=r.length;l<n;l++)if(t=r[l],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<n;o++)if(r[o]["s-hn"]!==t["s-hn"])if(i=r[o].nodeType,""!==s){if(1===i&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){t.hidden=!0;break}B(t)}},G=[],I=e=>{let t,l,n,o,i,r,c=0,f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(l=t["s-cr"]))for(n=l.parentNode.childNodes,o=t["s-sn"],r=n.length-1;r>=0;r--)l=n[r],l["s-cn"]||l["s-nr"]||l["s-hn"]===t["s-hn"]||(J(l,o)?(i=G.find(e=>e.j===l),s=!0,l["s-sn"]=l["s-sn"]||o,i?i._=t:G.push({_:t,j:l}),l["s-sr"]&&G.map(e=>{J(e.j,l["s-sn"])&&(i=G.find(e=>e.j===l),i&&!e._&&(e._=i._))})):G.some(e=>e.j===l)||G.push({j:l}));1===t.nodeType&&I(t)}},J=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,K=e=>{e.$&&e.$.ref&&e.$.ref(null),e.h&&e.h.map(K)},Q=e=>pe(e).O,X=(e,t,l)=>{const n=Q(e);return{emit:e=>Y(n,t,{bubbles:!!(4&l),composed:!!(2&l),cancelable:!!(1&l),detail:e})}},Y=(e,t,l)=>{const n=d.ce(t,l);return e.dispatchEvent(n),n},Z=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.M=t))},ee=(e,t)=>{if(e.t|=16,!(4&e.t))return Z(e,e.S),Se(()=>te(e,t));e.t|=512},te=(e,t)=>{const l=e.s;let n;return t&&(e.t|=256,e.i&&(e.i.map(([e,t])=>ie(l,e,t)),e.i=null),n=ie(l,"componentWillLoad")),re(n,()=>le(e,l,t))},le=(e,r,c)=>{const f=e.O,a=f["s-rc"];c&&(e=>{const t=e.C,l=e.O,n=t.t,o=((e,t)=>{let l=k(t),n=we.get(l);if(e=11===e.nodeType?e:p,n)if("string"==typeof n){let t,o=v.get(e=e.head||e);o||v.set(e,o=new Set),o.has(l)||(t=p.createElement("style"),t.innerHTML=n,e.insertBefore(t,e.querySelector("link")),o&&o.add(l))}else e.adoptedStyleSheets.includes(n)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]);return l})($&&l.shadowRoot?l.shadowRoot:l.getRootNode(),t);10&n&&(l["s-sc"]=o,l.classList.add(o+"-h"),2&n&&l.classList.add(o+"-s"))})(e);((e,r)=>{const c=e.O,f=e.C,a=e.D||x(null,null),u=(e=>e&&e.v===C)(r)?r:S(null,null,r);if(n=c.tagName,f.R&&(u.$=u.$||{},f.R.map(([e,t])=>u.$[t]=c[e])),u.v=null,u.t|=4,e.D=u,u.k=a.k=c.shadowRoot||c,t=c["s-sc"],l=c["s-cr"],o=$&&0!=(1&f.t),s=!1,z(a,u),d.t|=1,i){let e,t,l,n,o,s;I(u.k);let i=0;for(;i<G.length;i++)e=G[i],t=e.j,t["s-ol"]||(l=p.createTextNode(""),l["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=l,t));for(i=0;i<G.length;i++)if(e=G[i],t=e.j,e._){for(n=e._.parentNode,o=e._.nextSibling,l=t["s-ol"];l=l.previousSibling;)if(s=l["s-nr"],s&&s["s-sn"]===t["s-sn"]&&n===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&n!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),n.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}s&&B(u.k),d.t&=-2,G.length=0})(e,ne(e,r)),a&&(a.map(e=>e()),f["s-rc"]=void 0);{const t=f["s-p"],l=()=>oe(e);0===t.length?l():(Promise.all(t).then(l),e.t|=4,t.length=0)}},ne=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(l){he(l)}return t},oe=e=>{const t=e.O,l=e.s,n=e.S;64&e.t?ie(l,"componentDidUpdate"):(e.t|=64,ce(t),ie(l,"componentDidLoad"),e.T(t),n||se()),e.M&&(e.M(),e.M=void 0),512&e.t&&Me(()=>ee(e,!1)),e.t&=-517},se=()=>{ce(p.documentElement),d.t|=2,Me(()=>Y(a,"appload",{detail:{namespace:"peculiar"}}))},ie=(e,t,l)=>{if(e&&e[t])try{return e[t](l)}catch(n){he(n)}},re=(e,t)=>e&&e.then?e.then(t):t(),ce=e=>e.classList.add("hydrated"),fe=(e,t,l)=>{if(t.L){e.watchers&&(t.P=e.watchers);const n=Object.entries(t.L),o=e.prototype;if(n.map(([e,[n]])=>{(31&n||2&l&&32&n)&&Object.defineProperty(o,e,{get(){return((e,t)=>pe(this).U.get(t))(0,e)},set(l){((e,t,l,n)=>{const o=pe(e),s=o.U.get(t),i=o.t,r=o.s;if(l=((e,t)=>null==e||_(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(l,n.L[t][0]),!(8&i&&void 0!==s||l===s)&&(o.U.set(t,l),r)){if(n.P&&128&i){const e=n.P[t];e&&e.map(e=>{try{r[e](l,s,t)}catch(n){he(n)}})}2==(18&i)&&ee(o,!1)}})(this,e,l,t)},configurable:!0,enumerable:!0})}),1&l){const l=new Map;o.attributeChangedCallback=function(e,t,n){d.jmp(()=>{const t=l.get(e);this[t]=(null!==n||"boolean"!=typeof this[t])&&n})},e.observedAttributes=n.filter(([e,t])=>15&t[0]).map(([e,n])=>{const o=n[1]||e;return l.set(o,e),512&n[0]&&t.R.push([e,o]),o})}}return e},ae=(e,t={})=>{const l=[],n=t.exclude||[],o=a.customElements,s=p.head,i=s.querySelector("meta[charset]"),r=p.createElement("style"),c=[];let f,u=!0;Object.assign(d,t),d.l=new URL(t.resourcesUrl||"./",p.baseURI).href,t.syncQueue&&(d.t|=4),e.map(e=>e[1].map(t=>{const s={t:t[0],u:t[1],L:t[2],N:t[3]};s.L=t[2],s.N=t[3],s.R=[],s.P={},!$&&1&s.t&&(s.t|=8);const i=s.u,r=class extends HTMLElement{constructor(e){super(e),$e(e=this,s),1&s.t&&($?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){f&&(clearTimeout(f),f=null),u?c.push(this):d.jmp(()=>(e=>{if(0==(1&d.t)){const t=pe(e),l=t.C,n=()=>{};if(1&t.t)m(e,t,l.N);else{t.t|=1,12&l.t&&(e=>{const t=e["s-cr"]=p.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let l=e;for(;l=l.parentNode||l.host;)if(l["s-p"]){Z(t,t.S=l);break}}l.L&&Object.entries(l.L).map(([t,[l]])=>{if(31&l&&e.hasOwnProperty(t)){const l=e[t];delete e[t],e[t]=l}}),Me(()=>(async(e,t,l,n,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=be(l)).then){const e=()=>{};o=await o,e()}o.isProxied||(l.P=o.watchers,fe(o,l,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(r){he(r)}t.t&=-9,t.t|=128,e()}if(o.style){let e=o.style;const t=k(l);if(!we.has(t)){const n=()=>{};8&l.t&&(e=await __sc_import_peculiar("./p-4325c096.js").then(l=>l.scopeCss(e,t,!1))),((e,t,l)=>{let n=we.get(e);h&&l?(n=n||new CSSStyleSheet,n.replace(t)):n=t,we.set(e,n)})(t,e,!!(1&l.t)),n()}}}const s=t.S,i=()=>ee(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,l))}n()}})(this))}disconnectedCallback(){d.jmp(()=>(()=>{if(0==(1&d.t)){const e=pe(this);e.o&&(e.o.map(e=>e()),e.o=void 0)}})())}forceUpdate(){(()=>{{const e=pe(this);e.O.isConnected&&2==(18&e.t)&&ee(e,!1)}})()}componentOnReady(){return pe(this).W}};s.q=e[0],n.includes(i)||o.get(i)||(l.push(i),o.define(i,fe(r,s,1)))})),r.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,i?i.nextSibling:s.firstChild),u=!1,c.length?c.map(e=>e.connectedCallback()):d.jmp(()=>f=setTimeout(se,30))},ue=new WeakMap,pe=e=>ue.get(e),de=(e,t)=>ue.set(t.s=e,t),$e=(e,t)=>{const l={t:0,O:e,C:t,U:new Map};return l.W=new Promise(e=>l.T=e),e["s-p"]=[],e["s-rc"]=[],m(e,l,t.N),ue.set(e,l)},ye=(e,t)=>t in e,he=e=>console.error(e),me=new Map,be=e=>{const t=e.u.replace(/-/g,"_"),l=e.q,n=me.get(l);return n?n[t]:__sc_import_peculiar(`./${l}.entry.js`).then(e=>(me.set(l,e),e[t]),he)},we=new Map,ge=[],ve=[],ke=[],je=(e,t)=>l=>{e.push(l),f||(f=!0,t&&4&d.t?Me(Oe):d.raf(Oe))},_e=(e,t)=>{let l=0,n=0;for(;l<e.length&&(n=performance.now())<t;)try{e[l++](n)}catch(o){he(o)}l===e.length?e.length=0:0!==l&&e.splice(0,l)},Oe=()=>{c++,(e=>{for(let l=0;l<e.length;l++)try{e[l](performance.now())}catch(t){he(t)}e.length=0})(ge);{const e=2==(6&d.t)?performance.now()+14*Math.ceil(.1*c):1/0;_e(ve,e),_e(ke,e),ve.length>0&&(ke.push(...ve),ve.length=0),(f=ge.length+ve.length+ke.length>0)?d.raf(Oe):c=0}},Me=e=>y().then(e),Se=je(ve,!0);export{u as C,C as H,e as N,y as a,ae as b,X as c,p as d,Q as g,S as h,d as p,de as r,a as w}