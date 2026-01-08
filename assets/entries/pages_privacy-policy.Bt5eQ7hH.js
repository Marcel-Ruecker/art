import{r as a,d as k,j as e,g as Y,R as ve,a as N,i as B,P as De,b as Ee,c as Se}from"../chunks/chunk-BNVGILX8.js";import{l as V,m as P,y as Ie}from"../chunks/chunk-BVYZiTBp.js";import{P as H}from"../chunks/chunk-CldwJJ1n.js";import{i as ze}from"../chunks/chunk-b83nhERu.js";import{c as O,u as U,a as L,b as q,P as T,d as S,e as J,f as ke}from"../chunks/chunk-BaFvRAuh.js";/* empty css                      */function Ae(n){const r=a.useRef(n);return a.useEffect(()=>{r.current=n}),a.useMemo(()=>(...i)=>{var t;return(t=r.current)==null?void 0:t.call(r,...i)},[])}function ye(n){const r=n+"CollectionProvider",[i,t]=O(r),[d,u]=i(r,{collectionRef:{current:null},itemMap:new Map}),l=v=>{const{scope:o,children:b}=v,D=k.useRef(null),h=k.useRef(new Map).current;return e.jsx(d,{scope:o,itemMap:h,collectionRef:D,children:b})};l.displayName=r;const g=n+"CollectionSlot",E=L(g),f=k.forwardRef((v,o)=>{const{scope:b,children:D}=v,h=u(g,b),p=U(o,h.collectionRef);return e.jsx(E,{ref:p,children:D})});f.displayName=g;const s=n+"CollectionItemSlot",c="data-radix-collection-item",m=L(s),I=k.forwardRef((v,o)=>{const{scope:b,children:D,...h}=v,p=k.useRef(null),y=U(o,p),R=u(s,b);return k.useEffect(()=>(R.itemMap.set(p,{ref:p,...h}),()=>void R.itemMap.delete(p))),e.jsx(m,{[c]:"",ref:y,children:D})});I.displayName=s;function A(v){const o=u(n+"CollectionConsumer",v);return k.useCallback(()=>{const D=o.collectionRef.current;if(!D)return[];const h=Array.from(D.querySelectorAll(`[${c}]`));return Array.from(o.itemMap.values()).sort((R,x)=>h.indexOf(R.ref.current)-h.indexOf(x.ref.current))},[o.collectionRef,o.itemMap])}return[{Provider:l,Slot:f,ItemSlot:I},A,t]}var Re=a.createContext(void 0);function $(n){const r=a.useContext(Re);return n||r||"ltr"}var F="rovingFocusGroup.onEntryFocus",Te={bubbles:!1,cancelable:!0},G="RovingFocusGroup",[j,Q,Ne]=ye(G),[Ge,X]=O(G,[Ne]),[xe,We]=Ge(G),ee=a.forwardRef((n,r)=>e.jsx(j.Provider,{scope:n.__scopeRovingFocusGroup,children:e.jsx(j.Slot,{scope:n.__scopeRovingFocusGroup,children:e.jsx(Ce,{...n,ref:r})})}));ee.displayName=G;var Ce=a.forwardRef((n,r)=>{const{__scopeRovingFocusGroup:i,orientation:t,loop:d=!1,dir:u,currentTabStopId:l,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:E,onEntryFocus:f,preventScrollOnEntryFocus:s=!1,...c}=n,m=a.useRef(null),I=U(r,m),A=$(u),[v,o]=q({prop:l,defaultProp:g??null,onChange:E,caller:G}),[b,D]=a.useState(!1),h=Ae(f),p=Q(i),y=a.useRef(!1),[R,x]=a.useState(0);return a.useEffect(()=>{const w=m.current;if(w)return w.addEventListener(F,h),()=>w.removeEventListener(F,h)},[h]),e.jsx(xe,{scope:i,orientation:t,dir:A,loop:d,currentTabStopId:v,onItemFocus:a.useCallback(w=>o(w),[o]),onItemShiftTab:a.useCallback(()=>D(!0),[]),onFocusableItemAdd:a.useCallback(()=>x(w=>w+1),[]),onFocusableItemRemove:a.useCallback(()=>x(w=>w-1),[]),children:e.jsx(T.div,{tabIndex:b||R===0?-1:0,"data-orientation":t,...c,ref:I,style:{outline:"none",...n.style},onMouseDown:S(n.onMouseDown,()=>{y.current=!0}),onFocus:S(n.onFocus,w=>{const fe=!y.current;if(w.target===w.currentTarget&&fe&&!b){const M=new CustomEvent(F,Te);if(w.currentTarget.dispatchEvent(M),!M.defaultPrevented){const C=p().filter(z=>z.focusable),be=C.find(z=>z.active),me=C.find(z=>z.id===v),we=[be,me,...C].filter(Boolean).map(z=>z.ref.current);te(we,s)}}y.current=!1}),onBlur:S(n.onBlur,()=>D(!1))})})}),ne="RovingFocusGroupItem",re=a.forwardRef((n,r)=>{const{__scopeRovingFocusGroup:i,focusable:t=!0,active:d=!1,tabStopId:u,children:l,...g}=n,E=J(),f=u||E,s=We(ne,i),c=s.currentTabStopId===f,m=Q(i),{onFocusableItemAdd:I,onFocusableItemRemove:A,currentTabStopId:v}=s;return a.useEffect(()=>{if(t)return I(),()=>A()},[t,I,A]),e.jsx(j.ItemSlot,{scope:i,id:f,focusable:t,active:d,children:e.jsx(T.span,{tabIndex:c?0:-1,"data-orientation":s.orientation,...g,ref:r,onMouseDown:S(n.onMouseDown,o=>{t?s.onItemFocus(f):o.preventDefault()}),onFocus:S(n.onFocus,()=>s.onItemFocus(f)),onKeyDown:S(n.onKeyDown,o=>{if(o.key==="Tab"&&o.shiftKey){s.onItemShiftTab();return}if(o.target!==o.currentTarget)return;const b=Fe(o,s.orientation,s.dir);if(b!==void 0){if(o.metaKey||o.ctrlKey||o.altKey||o.shiftKey)return;o.preventDefault();let h=m().filter(p=>p.focusable).map(p=>p.ref.current);if(b==="last")h.reverse();else if(b==="prev"||b==="next"){b==="prev"&&h.reverse();const p=h.indexOf(o.currentTarget);h=s.loop?Be(h,p+1):h.slice(p+1)}setTimeout(()=>te(h))}}),children:typeof l=="function"?l({isCurrentTabStop:c,hasTabStop:v!=null}):l})})});re.displayName=ne;var Ve={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Pe(n,r){return r!=="rtl"?n:n==="ArrowLeft"?"ArrowRight":n==="ArrowRight"?"ArrowLeft":n}function Fe(n,r,i){const t=Pe(n.key,i);if(!(r==="vertical"&&["ArrowLeft","ArrowRight"].includes(t))&&!(r==="horizontal"&&["ArrowUp","ArrowDown"].includes(t)))return Ve[t]}function te(n,r=!1){const i=document.activeElement;for(const t of n)if(t===i||(t.focus({preventScroll:r}),document.activeElement!==i))return}function Be(n,r){return n.map((i,t)=>n[(r+t)%n.length])}var Ue=ee,je=re,W="Tabs",[Oe,hn]=O(W,[X]),ie=X(),[_e,_]=Oe(W),ae=a.forwardRef((n,r)=>{const{__scopeTabs:i,value:t,onValueChange:d,defaultValue:u,orientation:l="horizontal",dir:g,activationMode:E="automatic",...f}=n,s=$(g),[c,m]=q({prop:t,onChange:d,defaultProp:u??"",caller:W});return e.jsx(_e,{scope:i,baseId:J(),value:c,onValueChange:m,orientation:l,dir:s,activationMode:E,children:e.jsx(T.div,{dir:s,"data-orientation":l,...f,ref:r})})});ae.displayName=W;var se="TabsList",oe=a.forwardRef((n,r)=>{const{__scopeTabs:i,loop:t=!0,...d}=n,u=_(se,i),l=ie(i);return e.jsx(Ue,{asChild:!0,...l,orientation:u.orientation,dir:u.dir,loop:t,children:e.jsx(T.div,{role:"tablist","aria-orientation":u.orientation,...d,ref:r})})});oe.displayName=se;var le="TabsTrigger",de=a.forwardRef((n,r)=>{const{__scopeTabs:i,value:t,disabled:d=!1,...u}=n,l=_(le,i),g=ie(i),E=he(l.baseId,t),f=ge(l.baseId,t),s=t===l.value;return e.jsx(je,{asChild:!0,...g,focusable:!d,active:s,children:e.jsx(T.button,{type:"button",role:"tab","aria-selected":s,"aria-controls":f,"data-state":s?"active":"inactive","data-disabled":d?"":void 0,disabled:d,id:E,...u,ref:r,onMouseDown:S(n.onMouseDown,c=>{!d&&c.button===0&&c.ctrlKey===!1?l.onValueChange(t):c.preventDefault()}),onKeyDown:S(n.onKeyDown,c=>{[" ","Enter"].includes(c.key)&&l.onValueChange(t)}),onFocus:S(n.onFocus,()=>{const c=l.activationMode!=="manual";!s&&!d&&c&&l.onValueChange(t)})})})});de.displayName=le;var ue="TabsContent",ce=a.forwardRef((n,r)=>{const{__scopeTabs:i,value:t,forceMount:d,children:u,...l}=n,g=_(ue,i),E=he(g.baseId,t),f=ge(g.baseId,t),s=t===g.value,c=a.useRef(s);return a.useEffect(()=>{const m=requestAnimationFrame(()=>c.current=!1);return()=>cancelAnimationFrame(m)},[]),e.jsx(ke,{present:d||s,children:({present:m})=>e.jsx(T.div,{"data-state":s?"active":"inactive","data-orientation":g.orientation,role:"tabpanel","aria-labelledby":E,hidden:!m,id:f,tabIndex:0,...l,ref:r,style:{...n.style,animationDuration:c.current?"0s":void 0},children:m&&u})})});ce.displayName=ue;function he(n,r){return`${n}-trigger-${r}`}function ge(n,r){return`${n}-content-${r}`}var Me=ae,He=oe,Le=de,Ze=ce;const Ke=a.forwardRef(({defaultValue:n,...r},i)=>{const t=r.value??n??"",[d,u]=a.useState(t);a.useEffect(()=>u(t),[t]);const l=a.useCallback(async g=>{await ze(),u(g)},[]);return e.jsx(Me,{ref:i,...r,value:d,onValueChange:l})}),Ye=He,Z=a.forwardRef(({value:n,...r},i)=>{const t=Y(r);return e.jsx(Le,{ref:i,value:n??t??"",...r})}),K=a.forwardRef(({value:n,...r},i)=>{const t=Y(r);return e.jsx(Ze,{ref:i,value:n??t??"",...r})}),pe=void 0,qe=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],Je="logo_r1qaJQiri6sK3rPyq-Sar.svg",$e=["OpenSans-ExtraBoldItalic_XWDxhVGX3UIyP1_SBhKRH.ttf","OpenSans-ExtraBold_Vm8wCOMRHs-JNp5ZxL7Ju.ttf","OpenSans-SemiboldItalic_3uMcVa9LMLBFQ2e5ddGU6.ttf","OpenSans-BoldItalic_PIxeEUIoe52Ake4GOYkZp.ttf","OpenSans-LightItalic__gJQObS3RVADe6dXpz76S.ttf","OpenSans-Bold_K4pUwy_ixGuyBdMGnXUuG.ttf","OpenSans-Italic_Ln-FcaFDUW0pZf-yIoLxR.ttf","OpenSans-Semibold_9U4pQOYgO6t9S5-S6v-ni.ttf","OpenSans-Light_euls2YDcDFPbhqKAdUWcW.ttf","OpenSans-Regular_xgbNTDF25zTfZIyrbNY0i.ttf"],Qe=[],Xe=n=>e.jsx("body",{className:"w-element",children:e.jsxs("div",{className:"w-element w-page-wrapper-7",children:[e.jsx(V,{children:e.jsx(P,{children:e.jsx("div",{className:"w-element w-header-13",children:e.jsx("h1",{className:"w-element w-element-2",children:"Marcel Rücker"})})})}),e.jsx(V,{children:e.jsx(P,{children:e.jsxs("nav",{className:"w-element w-navigator",children:[e.jsx("div",{className:"w-element w-avatar-wrapper",children:e.jsx(Ie,{src:"/assets/Lara_Project_-_Mechanic-1_SlGU9vZt0x40EVQ7LI9AJ.png",width:600,height:600,alt:"",className:"w-image w-image-4"})}),e.jsx("div",{className:"w-element",children:e.jsxs("div",{className:"w-element w-nav-buttons",children:[e.jsx("a",{href:"/",className:"w-element w-portfolio-link",children:"Portfolio"}),e.jsx("a",{href:"/animation-reel",className:"w-element w-nav-link-animation-reel",children:"Animation Reel"}),e.jsx("a",{href:"/storyboards",className:"w-element w-nav-link-storyboards",children:"Storyboards"}),e.jsx("a",{href:"/character-design",className:"w-element w-nav-link",children:"Character Design"}),e.jsx("a",{href:"/sketchbook",className:"w-element w-nav-link-1",children:"Sketchbook"}),e.jsx("a",{href:"/illustration",className:"w-element w-nav-link-2",children:"Illustration"}),e.jsx("a",{href:"/resume",className:"w-element w-nav-link-3",children:"Resume"})]})})]})})}),e.jsx("div",{className:"w-element w-content-box-7",children:e.jsx("div",{className:"w-element w-datenschutzerklärung-box",children:e.jsxs(Ke,{value:"0",className:"w-tabs",children:[e.jsxs(Ye,{className:"w-tabs-list w-tabs-list-1",children:[e.jsx(Z,{"data-ws-index":"0",className:"w-tab-trigger w-tab-trigger-1",children:"English"}),e.jsx(Z,{"data-ws-index":"1",className:"w-tab-trigger w-tab-trigger-2",children:"Deutsch"})]}),e.jsxs(K,{"data-ws-index":"0",className:"w-tab-content w-tab-content-1",children:[e.jsx(H,{code:`<h1>Privacy Policy</h1>

<h2>1. Data Protection at a Glance</h2>

<h3>General Information</h3>
<p>The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you can be personally identified. Detailed information on the subject of data protection can be found in the privacy policy listed below this text.</p>

<h3>Data Collection on This Website</h3>

<h4>Who is responsible for data collection on this website?</h4>
<p>Data processing on this website is carried out by the website operator. You can find their contact details in the section “Information on the Responsible Entity” in this privacy policy.</p>

<h4>How do we collect your data?</h4>
<p>Your data is collected, on the one hand, when you provide it to us. This may include, for example, data that you enter into a contact form.</p>

<p>Other data is collected automatically or with your consent when you visit the website by our IT systems. This mainly includes technical data (e.g. internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.</p>

<h4>What do we use your data for?</h4>
<p>Some of the data is collected to ensure the error-free provision of the website. Other data may be used to analyze your user behavior. If contracts can be concluded or initiated via the website, the transmitted data is also processed for contract offers, orders, or other service inquiries.</p>

<h4>What rights do you have regarding your data?</h4>
<p>You have the right at any time to obtain information free of charge about the origin, recipient, and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. Furthermore, you have the right, under certain circumstances, to request the restriction of the processing of your personal data. You also have the right to lodge a complaint with the competent supervisory authority.</p>

<p>You can contact us at any time regarding this or any other questions on the topic of data protection.</p>

<h2>2. Hosting</h2>

<p>We host the contents of our website with the following provider:</p>

<h3>External Hosting</h3>
<p>This website is hosted externally. The personal data collected on this website is stored on the servers of the host(s). This may include IP addresses, contact inquiries, metadata and communication data, contract data, contact details, names, website accesses, and other data generated via a website.</p>

<p>External hosting is carried out for the purpose of fulfilling contracts with our potential and existing customers (Art. 6(1)(b) GDPR) and in the interest of secure, fast, and efficient provision of our online services by a professional provider (Art. 6(1)(f) GDPR). If corresponding consent has been requested, processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25(1) TDDDG, insofar as the consent includes the storage of cookies or access to information on the user's device (e.g. device fingerprinting). Consent can be revoked at any time.</p>

<p>Our host(s) will only process your data to the extent necessary to fulfill their service obligations and will follow our instructions with regard to this data.</p>

<p>We use the following host:</p>
<p>https://github.com/</p>

<h2>3. General Information and Mandatory Disclosures</h2>

<h3>Data Protection</h3>
<p>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.</p>

<p>When you use this website, various personal data is collected. Personal data is data that can be used to personally identify you. This privacy policy explains which data we collect and what we use it for. It also explains how and for what purpose this is done.</p>

<p>We point out that data transmission over the Internet (e.g. communication by email) may have security gaps. Complete protection of data against access by third parties is not possible.</p>

<h3>Information on the Responsible Entity</h3>
<p>The responsible entity for data processing on this website is:</p>

<p>Marcel Rücker<br>
76530 Baden-Baden<br>
Beethovenstraße 9</p>

<p>Phone: 07221396544<br>
Email: Marcel-Ruecker1@web.de</p>

<p>The responsible entity is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, email addresses, etc.).</p>

<h3>Storage Duration</h3>
<p>Unless a more specific storage period has been specified in this privacy policy, your personal data will remain with us until the purpose for data processing ceases. If you assert a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g. tax or commercial retention periods); in the latter case, deletion will take place after these reasons cease to apply.</p>

<h3>General Information on the Legal Bases for Data Processing on This Website</h3>
<p>If you have consented to data processing, we process your personal data on the basis of Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR. If your data is required for contract fulfillment or pre-contractual measures, processing is carried out on the basis of Art. 6(1)(b) GDPR. Processing may also be carried out on the basis of a legal obligation (Art. 6(1)(c) GDPR) or our legitimate interest (Art. 6(1)(f) GDPR).</p>

<h3>Recipients of Personal Data</h3>
<p>As part of our business activities, we work with various external parties. Personal data is only passed on if this is necessary for contract fulfillment, if required by law, or if a legitimate interest exists.</p>

<h3>Revocation of Your Consent to Data Processing</h3>
<p>You can revoke any consent you have already given at any time. The legality of the data processing carried out up to the time of revocation remains unaffected.</p>

<h3>Right to Object (Art. 21 GDPR)</h3>
<p>You have the right to object at any time to the processing of your personal data based on Art. 6(1)(e) or (f) GDPR for reasons arising from your particular situation.</p>

<h3>Right to Lodge a Complaint</h3>
<p>You have the right to lodge a complaint with a supervisory authority if you believe that the processing of your personal data violates the GDPR.</p>

<h3>Right to Data Portability</h3>
<p>You have the right to receive the data that we process automatically based on your consent or a contract in a common, machine-readable format.</p>

<h3>Information, Correction, and Deletion</h3>
<p>You have the right to free information about your stored personal data as well as the right to correction or deletion.</p>

<h3>Right to Restriction of Processing</h3>
<p>You have the right to request the restriction of processing of your personal data under certain conditions.</p>

<h3>Objection to Advertising Emails</h3>
<p>The use of contact data published as part of the legal notice obligation for sending unsolicited advertising is hereby rejected.</p>

<h2>4. Data Collection on This Website</h2>

<h3>Cookies</h3>
<p>This website uses cookies. Cookies are small data packages and do not cause any damage to your device. They may be stored temporarily (session cookies) or permanently.</p>

<p>You can configure your browser to inform you about cookies and allow them only in individual cases.</p>

<h3>Contact via Email, Phone, or Fax</h3>
<p>If you contact us by email, phone, or fax, your inquiry will be stored and processed for the purpose of handling your request.</p>

<h2>5. Social Media</h2>

<h3>Instagram</h3>
<p>This website includes functions of the Instagram service provided by Meta Platforms Ireland Limited.</p>

<p>Further information can be found at:
<a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer">
https://privacycenter.instagram.com/policy/
</a>
</p>

<h2>6. Plugins and Tools</h2>

<h3>YouTube (Enhanced Privacy Mode)</h3>
<p>This website embeds videos from YouTube, operated by Google Ireland Limited.</p>

<p>More information:
<a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">
https://policies.google.com/privacy?hl=de
</a>
</p>

<h3>Vimeo</h3>
<p>This website uses plugins from Vimeo Inc.</p>

<p>More information:
<a href="https://vimeo.com/privacy" target="_blank" rel="noopener noreferrer">
https://vimeo.com/privacy
</a>
</p>

<h2>7. Own Services</h2>

<h3>Google Drive</h3>
<p>This website integrates Google Drive, provided by Google Ireland Limited.</p>

<p>More information:
<a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank" rel="noopener noreferrer">
https://www.dataprivacyframework.gov/participant/5780
</a>
</p>
`,className:"w-html-embed w-html-embed-3"}),e.jsx("span",{className:"w-element",children:""})]}),e.jsxs(K,{"data-ws-index":"1",className:"w-tab-content w-tab-content-2",children:[e.jsx(H,{code:`<h1>Datenschutz­erklärung</h1>
<h2>1. Datenschutz auf einen Blick</h2>
<h3>Allgemeine Hinweise</h3> <p>Die folgenden Hinweise geben einen einfachen Überblick darüber,
was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind
alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum
Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
Datenschutzerklärung.</p>
<h3>Datenerfassung auf dieser Website</h3> <h4>Wer ist verantwortlich für die Datenerfassung auf dieser
Website?</h4> <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser
Datenschutzerklärung entnehmen.</p> <h4>Wie erfassen wir Ihre Daten?</h4> <p>Ihre Daten werden zum
einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein
Kontaktformular eingeben.</p> <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
Website betreten.</p> <h4>Wofür nutzen wir Ihre Daten?</h4> <p>Ein Teil der Daten wird erhoben, um eine
fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt
werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder
sonstige Auftragsanfragen verarbeitet.</p> <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
<p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde
zu.</p> <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns
wenden.</p>
<h2>2. Hosting</h2>
<p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
<h3>Externes Hosting</h3> <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich
v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p> <p>Das
externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern
eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von
Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder
den Zugriff auf Informationen im Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des
TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p> <p>Unser(e) Hoster wird bzw. werden Ihre Daten
nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere
Weisungen in Bezug auf diese Daten befolgen.</p> <p>Wir setzen folgende(n) Hoster ein:</p>
<p>https://github.com/</p>
<h2>3. Allgemeine Hinweise und Pflicht­informationen</h2>
<h3>Datenschutz</h3> <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr
ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p> <p>Wenn Sie diese Website benutzen,
werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert,
welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
geschieht.</p> <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der
Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor
dem Zugriff durch Dritte ist nicht möglich.</p>
<h3>Hinweis zur verantwortlichen Stelle</h3> <p>Die verantwortliche Stelle für die Datenverarbeitung auf
dieser Website ist:</p> <p>Marcel Rücker<br>
76530 Baden-Baden<br>
Beethovenstraße 9</p>
<p>Telefon: 07221396544<br>
E-Mail: Marcel-Ruecker1@web.de</p>
 <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-
Adressen o. Ä.) entscheidet.</p>
<h3>Speicherdauer</h3> <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer-
oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall
dieser Gründe.</p>
<h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3> <p>Sofern Sie
in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art.
6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener
Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.
Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z.&nbsp;B. via
Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von §
25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur
Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des
Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer
rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung
kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die
jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser
Datenschutzerklärung informiert.</p>
<h3>Empfänger von personenbezogenen Daten</h3> <p>Im Rahmen unserer Geschäftstätigkeit
arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von
personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich
hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes
Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die
Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer
Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer
gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.</p>
<h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3> <p>Viele Datenverarbeitungsvorgänge sind
nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
Widerruf unberührt.</p>
<h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21
DSGVO)</h3> <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F
DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER
BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN
SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE
BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR
KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p> <p>WERDEN IHRE
PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS
RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER
DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING,
SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN,
WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER
DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
<h3>Beschwerde­recht bei der zuständigen Aufsichts­behörde</h3> <p>Im Falle von
Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
<h3>Recht auf Daten­übertrag­barkeit</h3> <p>Sie haben das Recht, Daten, die wir auf Grundlage
Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte
Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
machbar ist.</p>
<h3>Auskunft, Berichtigung und Löschung</h3> <p>Sie haben im Rahmen der geltenden gesetzlichen
Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
Daten können Sie sich jederzeit an uns wenden.</p>
<h3>Recht auf Einschränkung der Verarbeitung</h3> <p>Sie haben das Recht, die Einschränkung der
Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden.
Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p> <ul> <li>Wenn Sie die
Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit,
um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn die
Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt
der Löschung die Einschränkung der Datenverarbeitung verlangen.</li> <li>Wenn wir Ihre
personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die
Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn Sie einen
Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren
Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das
Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> </ul>
<p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese
Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der
Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
<h3>Widerspruch gegen Werbe-E-Mails</h3> <p>Der Nutzung von im Rahmen der Impressumspflicht
veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung
und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails,
vor.</p>
<h2>4. Datenerfassung auf dieser Website</h2>
<h3>Cookies</h3> <p>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine
Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend
für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät
gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies
bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische
Löschung durch Ihren Webbrowser erfolgt.</p> <p>Cookies können von uns (First-Party-Cookies) oder
von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung
bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.&nbsp;B. Cookies zur Abwicklung
von Zahlungsdienstleistungen).</p> <p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch
notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z.&nbsp;B. die
Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des
Nutzerverhaltens oder zu Werbezwecken verwendet werden.</p> <p>Cookies, die zur Durchführung des
elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen
(z.&nbsp;B. für die Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung
des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes
Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung
seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren
Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser
Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.</p>
<p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>
<p>Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser
Datenschutzerklärung entnehmen.</p>
<h3>Anfrage per E-Mail, Telefon oder Telefax</h3> <p>Wenn Sie uns per E-Mail, Telefon oder Telefax
kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage)
zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
Ihre Einwilligung weiter.</p> <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht
die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
wurde; die Einwilligung ist jederzeit widerrufbar.</p> <p>Die von Ihnen an uns per Kontaktanfragen
übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach
abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere
gesetzliche Aufbewahrungsfristen – bleiben unberührt.</p>
<h2>5. Soziale Medien</h2>
<h3>Instagram</h3> <p>Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese
Funktionen werden angeboten durch die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5,
Irland.</p> <p>Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem
Endgerät und dem Instagram-Server hergestellt. Instagram erhält dadurch Informationen über
den Besuch dieser Website durch Sie.</p> <p>Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können
Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken.
Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass
wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch
Instagram erhalten.</p> <p>Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1
lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.</p> <p>Soweit mit Hilfe des
hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook bzw. Instagram
weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal
Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die
gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung der Daten und
deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung erfolgende Verarbeitung durch
Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden
Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut
der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener noreferrer">https://www.facebook.com/legal/controller_addendum</a>. Laut
dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook-
bzw. Instagram-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer
Website verantwortlich. Für die Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook
verantwortlich. Betroffenenrechte (z.&nbsp;B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram
verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns
geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.</p> <p>Die Datenübertragung in die
USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener
noreferrer">https://www.facebook.com/legal/EU_data_transfer_addendum</a>, <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener
noreferrer">https://privacycenter.instagram.com/policy/</a> und <a href="https://de-
de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer">https://de-
de.facebook.com/help/566994660333381</a>.</p> <p>Weitere Informationen hierzu finden Sie in der
Datenschutzerklärung von Instagram: <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer">https://privacycenter.instagram.com/policy/</a>.</p>
<p>Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy
Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den
USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA
gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
<a href="https://www.dataprivacyframework.gov/participant/4452" target="_blank" rel="noopener
noreferrer">https://www.dataprivacyframework.gov/participant/4452</a>.</p>
<h2>6. Plugins und Tools</h2>
<h3>YouTube mit erweitertem Datenschutz</h3> <p>Diese Website bindet Videos der Website YouTube ein.
Betreiber der Website ist die Google Ireland Limited („Google”), Gordon House, Barrow Street,
Dublin 4, Irland.</p> <p>Wenn Sie eine dieser Website besuchen, auf denen YouTube eingebunden ist, wird eine
Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer
Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr
Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich
aus Ihrem YouTube-Account ausloggen.</p> <p>Wir nutzen YouTube im erweiterten Datenschutzmodus. Videos,
die im erweiterten Datenschutzmodus abgespielt werden, werden nach Aussage von YouTube nicht zur
Personalisierung des Surfens auf YouTube eingesetzt. Anzeigen, die im erweiterten Datenschutzmodus ausgespielt
werden, sind ebenfalls nicht personalisiert. Im erweiterten Datenschutzmodus werden keine Cookies gesetzt.
Stattdessen werden jedoch sogenannte Local Storage Elemente im Browser des Users gespeichert, die ähnlich
wie Cookies personenbezogene Daten beinhalten und zur Wiedererkennung eingesetzt werden können.
Details zum erweiterten Datenschutzmodus finden Sie hier: <a href="https://support.google.com/youtube/answer/171780" target="_blank" rel="noopener
noreferrer">https://support.google.com/youtube/answer/171780</a>.</p> <p>Gegebenenfalls können nach
der Aktivierung eines YouTube-Videos weitere Datenverarbeitungsvorgänge ausgelöst werden, auf die
wir keinen Einfluss haben.</p> <p>Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung
unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern
eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von
Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder
den Zugriff auf Informationen im Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des
TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p> <p>Weitere Informationen über Datenschutz
bei YouTube finden Sie in deren Datenschutzerklärung unter: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener
noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
<p>Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy
Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den
USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA
gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
<a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank" rel="noopener
noreferrer">https://www.dataprivacyframework.gov/participant/5780</a>.</p>
<h3>Vimeo</h3> <p>Diese Website nutzt Plugins des Videoportals Vimeo. Anbieter ist die Vimeo Inc., 555 West
18th Street, New York, New York 10011, USA.</p> <p>Wenn Sie eine unserer mit einem Vimeo-Video
ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von Vimeo hergestellt. Dabei wird dem
Vimeo-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Zudem erlangt Vimeo Ihre IP-Adresse. Dies gilt
auch dann, wenn Sie nicht bei Vimeo eingeloggt sind oder keinen Account bei Vimeo besitzen. Die von Vimeo
erfassten Informationen werden an den Vimeo-Server in den USA übermittelt.</p> <p>Wenn Sie in Ihrem
Vimeo-Account eingeloggt sind, ermöglichen Sie Vimeo, Ihr Surfverhalten direkt Ihrem persönlichen
Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem Vimeo-Account ausloggen.</p>
<p>Zur Wiedererkennung der Websitebesucher verwendet Vimeo Cookies bzw. vergleichbare
Wiedererkennungstechnologien (z.&nbsp;B. Device-Fingerprinting).</p> <p>Die Nutzung von Vimeo erfolgt im
Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne
des Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die
Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers
(z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
<p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission sowie nach
Aussage von Vimeo auf „berechtigte Geschäftsinteressen“ gestützt. Details finden Sie
hier: <a href="https://vimeo.com/privacy" target="_blank" rel="noopener
noreferrer">https://vimeo.com/privacy</a>.</p> <p>Weitere Informationen zum Umgang mit Nutzerdaten finden
Sie in der Datenschutzerklärung von Vimeo unter: <a href="https://vimeo.com/privacy" target="_blank" rel="noopener noreferrer">https://vimeo.com/privacy</a>.</p>
<p>Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy
Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den
USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA
gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
<a href="https://www.dataprivacyframework.gov/participant/5711" target="_blank" rel="noopener
noreferrer">https://www.dataprivacyframework.gov/participant/5711</a>.</p>
<h2>7. Eigene Dienste</h2>
<h3>Google Drive</h3> <p>Wir haben Google Drive auf dieser Website eingebunden. Anbieter ist die Google
Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p> <p>Google Drive
ermöglicht es uns, einen Uploadbereich auf unserer Website einzubinden, in dem Sie Inhalte hochladen
können. Wenn Sie Inhalte hochladen, werden diese auf den Servern von Google Drive gespeichert. Wenn Sie
unsere Website betreten, wird außerdem eine Verbindung zu Google Drive aufgebaut, sodass Google Drive
feststellen kann, dass Sie unsere Website besucht haben.</p> <p>Die Verwendung von Google Drive erfolgt auf
Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einem
zuverlässigen Uploadbereich auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde,
erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
jederzeit widerrufbar.</p>
<p>Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy
Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den
USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA
gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
<a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank" rel="noopener
noreferrer">https://www.dataprivacyframework.gov/participant/5780</a>.</p>`,className:"w-html-embed w-html-embed-2"}),e.jsx("span",{className:"w-element",children:""})]})]})})}),e.jsx(V,{children:e.jsx(P,{children:e.jsx("footer",{className:"w-element w-footer-1",children:e.jsxs("div",{className:"w-element w-impressum-stuff",children:[e.jsx("div",{className:"w-element",children:e.jsx("a",{href:"/legal-notice",className:"w-element w-element-3",children:"Legal Notice"})}),e.jsx("div",{className:"w-element",children:e.jsx("a",{href:"/privacy-policy",className:"w-element w-element-4",children:"Privacy Policy"})}),e.jsx("div",{className:"w-element w-credits-license",children:e.jsx("a",{href:"/credits-and-license",className:"w-element w-element-5",children:"Credits & License"})})]})})})})]})}),en=({data:n})=>{const{system:r,resources:i,url:t,pageMeta:d}=n;return e.jsxs(ve.Provider,{value:{imageLoader:B,assetBaseUrl:N,resources:i,breakpoints:qe,onError:console.error},children:[e.jsx(Xe,{system:r},t),e.jsx(De,{url:t,pageMeta:d,siteName:pe,imageLoader:B,assetBaseUrl:N}),e.jsx(Ee,{children:d.title})]})},nn=Object.freeze(Object.defineProperty({__proto__:null,default:en},Symbol.toStringTag,{value:"Module"})),rn=({})=>e.jsxs(e.Fragment,{children:[pe,e.jsx("link",{rel:"icon",href:B({src:`${N}${Je}`})}),$e.map(n=>e.jsx("link",{rel:"preload",href:`${N}${n}`,as:"font",crossOrigin:"anonymous"},n)),Qe.map(n=>e.jsx("link",{rel:"preload",href:`${N}${n}`,as:"image"},n))]}),tn=Object.freeze(Object.defineProperty({__proto__:null,Head:rn},Symbol.toStringTag,{value:"Module"})),gn={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Se}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/privacy-policy/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:nn}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/privacy-policy/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:tn}}};export{gn as configValuesSerialized};
