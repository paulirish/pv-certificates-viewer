import{C as e,p as o,w as s,a as t,d as n,N as r}from"./p-003ca303.js";const a="undefined"!=typeof Deno,p=!(a||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),c=(a&&Deno,p?process:a&&Deno,p?process:a&&Deno,()=>e&&e.supports&&e.supports("color","var(--c)")?t():__sc_import_peculiar("./p-9fd956ed.js").then(()=>(o.o=s.__cssshim)?(!1).i():0)),i=()=>{o.o=s.__cssshim;const e=Array.from(n.querySelectorAll("script")).find(e=>RegExp(`/${r}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===r),a=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(a.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,s.location.href)).href,l(a.resourcesUrl,e),s.customElements?t(a):__sc_import_peculiar("./p-87e7fdb7.js").then(()=>a))},l=(e,o)=>{const t="__sc_import_"+r.replace(/\s|-/g,"_");try{s[t]=Function("w","return import(w);//"+Math.random())}catch(a){const r=new Map;s[t]=a=>{const p=new URL(a,e).href;let c=r.get(p);if(!c){const e=n.createElement("script");e.type="module",e.crossOrigin=o.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${p}'; window.${t}.m = m;`],{type:"application/javascript"})),c=new Promise(o=>{e.onload=()=>{o(s[t].m),e.remove()}}),r.set(p,c),n.head.appendChild(e)}return c}}};export{c as a,i as p}