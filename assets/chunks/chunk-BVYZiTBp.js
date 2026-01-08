import{r as o,j as h,R as x}from"./chunk-BNVGILX8.js";const y=o.forwardRef((t,e)=>h.jsx("div",{...t,ref:e,style:{display:t.children?"contents":"block"}}));y.displayName="Slot";const N=o.forwardRef((t,e)=>h.jsx("div",{...t,ref:e,style:{display:"contents"}}));N.displayName="Fragment";var S=[16,32,48,64,96,128,256,384],u=[640,750,828,1080,1200,1920,2048,3840],c=[...S,...u],z=(t,e)=>{if(e){const a=/(^|\s)(1?\d?\d)vw/g,r=[];for(let s;s=a.exec(e);s)r.push(Number.parseInt(s[2],10));if(r.length){const s=Math.min(...r)*.01;return{widths:c.filter(d=>d>=u[0]*s),kind:"w"}}return{widths:c,kind:"w"}}if(t==null)return{widths:u,kind:"w"};const n=2;let i=c.findIndex(a=>a>=n*t);return i=i<0?c.length:i,{widths:c.slice(0,i+1),kind:"w"}},I=({src:t,width:e,quality:n,sizes:i,loader:a})=>{const{widths:r,kind:s}=z(e,i);return{sizes:!i&&s==="w"?"100vw":i,srcSet:r.map((d,l)=>`${a({src:t,quality:n,width:d})} ${s==="w"?d:l+1}${s}`).join(", "),src:a({src:t,quality:n,width:r[r.length-1]})}},m=t=>{if(typeof t=="number")return Math.round(t);if(typeof t=="string"){const e=Number.parseFloat(t);if(!Number.isNaN(e))return Math.round(e)}},b="(min-width: 1280px) 50vw, 100vw",R=80,E=t=>{try{return new URL(t),!0}catch{return!1}},L=t=>{const e=m(t.width),n=Math.max(Math.min(m(t.quality)??R,100),0);if(t.src!=null&&t.src!==""){if(t.srcSet==null&&t.optimize){const a=t.sizes??(t.width==null?b:void 0);return I({src:t.src,width:e,quality:n,sizes:a,loader:t.loader})}const i={src:E(t.src)?t.src:t.loader({src:t.src,format:"raw"})};return t.srcSet!=null&&(i.srcSet=t.srcSet),t.sizes!=null&&(i.sizes=t.sizes),i}},v=o.forwardRef(({quality:t,loader:e,optimize:n=!0,loading:i="lazy",decoding:a="async",...r},s)=>{const d=L({src:r.src,srcSet:r.srcSet,sizes:r.sizes,width:r.width,quality:t,loader:e,optimize:n})??{src:M};return h.jsx("img",{alt:"",...r,...d,decoding:a,loading:i,ref:s})});v.displayName="Image";var M=`data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#DFE3E6" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`;const A=o.forwardRef(({loading:t="lazy",width:e,height:n,optimize:i=!0,decoding:a,$webstudio$canvasOnly$assetId:r,...s},d)=>{const l=String(s.src??""),{imageLoader:g,renderer:C}=o.useContext(x);let w=a,f=l;return C==="canvas"&&(t="eager",w="sync",f=r??l,e!==void 0&&n!==void 0&&Number.isNaN(e)&&Number.isNaN(n)&&(i=!1,e=void 0,n=void 0)),h.jsx(v,{loading:t,decoding:w,optimize:i,width:e,height:n,...s,loader:g,src:l,ref:d},f)});A.displayName="Image";export{y as l,N as m,A as y};
