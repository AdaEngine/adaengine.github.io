const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/store-BVbJnx0R.js","assets/store-2FOLT5Bp.css","assets/cloud-BFLXML1D.js","assets/cloud-Uqlj-_7j.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const kt="modulepreload",Tt=function(e){return"/"+e},gn={},fn=function(n,t,a){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),i=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(t.map(c=>{if(c=Tt(c),c in gn)return;gn[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":kt,l||(p.as="script"),p.crossOrigin="",p.href=c,i&&p.setAttribute("nonce",i),document.head.appendChild(p),l)return new Promise((b,y)=>{p.addEventListener("load",b),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(s){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s}return o.then(s=>{for(const i of s||[])i.status==="rejected"&&r(i.reason);return n().catch(r)})},sn="https://apps.apple.com/app/id6809145006",ie={version:"1.0.0",url:"https://github.com/AdaEngine/Ada/releases/tag/editor-v1.0.0-20261010",assets:[{name:"AdaEngine-1.0.0-20261011-macOS.zip",url:"https://github.com/AdaEngine/Ada/releases/download/editor-v1.0.0-20261010/AdaEngine-1.0.0-20261011-macOS.zip"}]};function bn(e){if(typeof e=="string")try{const n=new URL(e);return n.protocol==="https:"&&n.hostname==="github.com"&&!n.username&&!n.password&&["/AdaEngine/Ada/releases/","/AdaEngine/AdaEngine/releases/"].some(t=>n.pathname.startsWith(t))?n.href:void 0}catch{return}}function xt(e){var s;if(!e||typeof e!="object")return;const n=e,t=bn(n.html_url);if(n.draft||n.prerelease||typeof n.tag_name!="string"||!t)return;const o=((s=n.tag_name.match(/^editor-v(\d+\.\d+(?:\.\d+)?)-\d+$/))==null?void 0:s[1])??n.tag_name.replace(/^(?:editor-)?v/,"");if(!/^\d+\.\d+(?:\.\d+)?(?:[-.][a-zA-Z0-9]+)*$/.test(o))return;const r=[];if(Array.isArray(n.assets))for(const i of n.assets){if(!i||typeof i!="object")continue;const c=bn(i.browser_download_url);typeof i.name=="string"&&c&&r.push({name:i.name,url:c})}return{version:o,url:t,assets:r}}function On(e,n){return n.assets.filter(({name:t})=>/\.(?:sha\d*|sig|asc|blockmap)$/i.test(t)?!1:e==="windows"?/\.(?:exe|msi)$/i.test(t)||/(?:windows|win32|win64).*\.zip$/i.test(t):e==="macos"?/\.(?:dmg|pkg)$/i.test(t)||/(?:macos|mac|darwin|osx).*\.zip$/i.test(t):/\.appimage$/i.test(t)||/linux.*\.(?:zip|tar\.gz|tar\.xz|deb|rpm)$/i.test(t))}function It(e){return/(?:arm64|aarch64|apple-silicon)/i.test(e.name)?"Download · ARM64":/(?:x86_64|amd64|x64|intel)/i.test(e.name)?"Download · Intel / AMD":"Download"}function _t(e){if(!Array.isArray(e))return ie;const n=e.map(xt).filter(t=>t!==void 0);return n.find(t=>["macos","windows","linux"].some(a=>On(a,t).length>0))??(ie.assets.length?ie:n[0]??ie)}async function Ct(){try{const e=await fetch("https://api.github.com/repos/AdaEngine/Ada/releases?per_page=20",{headers:{Accept:"application/vnd.github+json"},signal:AbortSignal.timeout(5e3)});if(!e.ok)return ie;const n=await e.json();return _t(n)}catch{}return ie}function V(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${{desktop:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 21h8m-4-5v5"/>',phone:'<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',scene:'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',code:'<path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18"/>',agent:'<path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Z"/>',arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>'}[e]}</svg>`}function Mt(e,n){return`
    <main class="studio-page">
      <section class="studio-hero container content-restriction" aria-labelledby="studio-title">
        <p class="studio-eyebrow"><img src="${n("images/ae_logo~dark.svg")}" alt="" width="22" height="22" /> Ada Studio</p>
        <h1 id="studio-title">Your next game.<br /><span>Starts here.</span></h1>
        <p class="studio-lead">A home for your ideas, scenes, and code.<br class="studio-desktop-break" /> Create with Ada on your desktop, iPad, or phone.</p>
        <nav class="studio-platform-links" aria-label="Explore Ada Studio platforms">
          <a href="#desktop-ipad">${V("desktop")}<span>Desktop / iPad</span>${V("arrow")}</a>
          <a href="#mobile">${V("phone")}<span>Mobile</span>${V("arrow")}</a>
        </nav>
        <figure class="studio-hero-media">
          <div class="studio-editor-frame">
            <img src="${n("images/studio/desktop-device.png")}" alt="Ada Studio desktop scene workspace, entity hierarchy, and component inspector in a MacBook frame" width="1662" height="848" fetchpriority="high" />
          </div>
          <div class="studio-hero-phone studio-phone-frame">
            <img src="${n("images/studio/mobile-projects-device.png")}" alt="Ada Studio mobile project library with a Medieval Arena preview in an iPhone frame" width="851" height="1849" />
          </div>
          <figcaption><span>More room to build. More ways to create.</span><span>Powered by Ada</span></figcaption>
        </figure>
      </section>

      <section id="desktop-ipad" class="studio-section container content-restriction" aria-labelledby="studio-desktop-title">
        <div class="studio-section-heading">
          <p class="studio-eyebrow">${V("desktop")} Desktop / iPad</p>
          <h2 id="studio-desktop-title">Space for your<br /><span>big ideas.</span></h2>
          <p>A focused workspace for the whole picture. Shape your scene, find the right file, and keep your code close to the world you’re building.</p>
          <div class="studio-actions">
            <a class="studio-button studio-button-primary" href="${e("/download")}">Get Ada Studio ${V("arrow")}</a>
            <a class="studio-text-link" href="${sn}">Get it for iPad ${V("arrow")}</a>
          </div>
        </div>
        <div class="studio-workspace-grid">
          <article class="studio-scene-card">
            <div class="studio-card-copy"><span class="studio-feature-icon">${V("scene")}</span><h3>Build a world. Make it yours.</h3><p>Work with scenes, entities, and components. Turn a collection of assets into the start of something playable.</p></div>
            <div class="studio-scene-art"><img src="${n("images/studio/skeletal-garden.png")}" alt="Skeletal Garden: animated robots, textured props, and a wooded landscape rendered by AdaEngine" width="2200" height="1520" loading="lazy" /></div>
            <span class="studio-media-label">Skeletal Garden · Made with Ada</span>
          </article>
          <div class="studio-workspace-details">
            <article class="studio-code-card">
              <div class="studio-card-copy"><span class="studio-feature-icon">${V("code")}</span><h3>Your code. Your creative flow.</h3><p>Write in Swift and AdaScript. Keep gameplay logic, project files, and tools together.</p></div>
              <div class="studio-file-tabs" aria-hidden="true"><span>Player.swift</span><span>game.ada</span></div>
              <pre class="studio-code-sample" aria-label="Swift component example"><code><span class="studio-code-purple">@Component</span>
<span class="studio-code-blue">struct</span> Player {
    <span class="studio-code-blue">var</span> speed: <span class="studio-code-mint">Float</span> = <span class="studio-code-peach">240</span>
}</code></pre>
            </article>
            <article class="studio-agent-card"><span class="studio-feature-icon">${V("agent")}</span><div><h3>A little help. A lot of possibility.</h3><p>Work with an AI agent inside your project. Explore an idea, ask about code, and shape your next change.</p></div></article>
          </div>
        </div>
        <div class="studio-ipad-note">${V("desktop")}<p><strong>A bigger canvas. A familiar workspace.</strong> Desktop and iPad put your project at the center, with room for scenes, code, and the tools around them.</p></div>
      </section>

      <section id="mobile" class="studio-section studio-mobile-section container content-restriction" aria-labelledby="studio-mobile-title">
        <div class="studio-mobile-copy">
          <p class="studio-eyebrow">${V("phone")} Mobile</p>
          <h2 id="studio-mobile-title">Small screen.<br /><span>Big imagination.</span></h2>
          <p class="studio-section-lead">An idea can happen anywhere. Give it a place to grow, right on your phone.</p>
          <ol class="studio-mobile-steps">
            <li><span>01</span><div><h3>Start with an idea.</h3><p>Describe the game you have in mind. Work with an agent to build it into an Ada project.</p></div></li>
            <li><span>02</span><div><h3>Go from build to play.</h3><p>Open your game on the same device. Try it, feel it, and find your next idea.</p></div></li>
            <li><span>03</span><div><h3>Show what you mean.</h3><p>Capture a game frame, mark the part you want to change, and send your feedback to the agent.</p></div></li>
          </ol>
          <a class="studio-button studio-button-primary" href="${sn}">Get Ada for iPhone ${V("arrow")}</a>
        </div>
        <figure class="studio-mobile-media">
          <div class="studio-phone-pair">
            <div class="studio-phone-frame studio-phone-build"><img src="${n("images/studio/mobile-build-device.png")}" alt="Ada Studio Mobile Build workspace for Medieval Arena in an iPhone frame" width="851" height="1849" loading="lazy" /><span class="studio-phone-caption">Build</span></div>
            <div class="studio-phone-frame studio-phone-play"><img src="${n("images/studio/mobile-play-device.png")}" alt="Medieval Arena running in Ada Studio Mobile Play in an iPhone frame" width="851" height="1849" loading="lazy" /><span class="studio-phone-caption">Play</span></div>
          </div>
          <figcaption>Build and Play in Ada Studio Mobile</figcaption>
        </figure>
      </section>

      <section class="studio-final container content-restriction" aria-labelledby="studio-final-title">
        <div class="studio-final-inner">
          <img class="studio-final-logo" src="${n("images/ae_logo~dark.svg")}" alt="" width="64" height="64" loading="lazy" />
          <p class="studio-eyebrow">Make something only you could make.</p>
          <h2 id="studio-final-title">An idea is a great start.<br />Let’s make it a game.</h2>
          <div class="studio-actions">
            <a class="studio-button studio-button-primary" href="${e("/download")}">Get Ada Studio ${V("arrow")}</a>
            <a class="studio-button studio-button-secondary" href="${e("/demos")}">Explore Ada demos ${V("arrow")}</a>
          </div>
          <a class="studio-source-link" href="https://github.com/AdaEngine/AdaEngine/tree/main/Editor">Explore the editor on GitHub ↗</a>
        </div>
      </section>
    </main>
  `}function Rt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Dn(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const t=e[n],a=typeof t;(a==="object"||a==="function")&&!Object.isFrozen(t)&&Dn(t)}),e}class yn{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Pn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function he(e,...n){const t=Object.create(null);for(const a in e)t[a]=e[a];return n.forEach(function(a){for(const o in a)t[o]=a[o]}),t}const $t="</span>",wn=e=>!!e.scope,Lt=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((a,o)=>`${a}${"_".repeat(o+1)}`)].join(" ")}return`${n}${e}`};class Nt{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Pn(n)}openNode(n){if(!wn(n))return;const t=Lt(n.scope,{prefix:this.classPrefix});this.span(t)}closeNode(n){wn(n)&&(this.buffer+=$t)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const vn=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class rn{constructor(){this.rootNode=vn(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=vn({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(a=>this._walk(n,a)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{rn._collapse(t)}))}}class Ot extends rn{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,t){const a=n.root;t&&(a.scope=`language:${t}`),this.add(a)}toHTML(){return new Nt(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Me(e){return e?typeof e=="string"?e:e.source:null}function Bn(e){return ve("(?=",e,")")}function Dt(e){return ve("(?:",e,")*")}function Pt(e){return ve("(?:",e,")?")}function ve(...e){return e.map(t=>Me(t)).join("")}function Bt(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function cn(...e){return"("+(Bt(e).capture?"":"?:")+e.map(a=>Me(a)).join("|")+")"}function Un(e){return new RegExp(e.toString()+"|").exec("").length-1}function Ut(e,n){const t=e&&e.exec(n);return t&&t.index===0}const Ft=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ln(e,{joinWith:n}){let t=0;return e.map(a=>{t+=1;const o=t;let r=Me(a),s="";for(;r.length>0;){const i=Ft.exec(r);if(!i){s+=r;break}s+=r.substring(0,i.index),r=r.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?s+="\\"+String(Number(i[1])+o):(s+=i[0],i[0]==="("&&t++)}return s}).map(a=>`(${a})`).join(n)}const Gt=/\b\B/,Fn="[a-zA-Z]\\w*",dn="[a-zA-Z_]\\w*",Gn="\\b\\d+(\\.\\d+)?",Hn="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",jn="\\b(0b[01]+)",Ht="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",jt=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=ve(n,/.*\b/,e.binary,/\b.*/)),he({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,a)=>{t.index!==0&&a.ignoreMatch()}},e)},Re={begin:"\\\\[\\s\\S]",relevance:0},Wt={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Re]},zt={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Re]},qt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},We=function(e,n,t={}){const a=he({scope:"comment",begin:e,end:n,contains:[]},t);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=cn("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:ve(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},Vt=We("//","$"),Kt=We("/\\*","\\*/"),Yt=We("#","$"),Zt={scope:"number",begin:Gn,relevance:0},Xt={scope:"number",begin:Hn,relevance:0},Jt={scope:"number",begin:jn,relevance:0},Qt={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Re,{begin:/\[/,end:/\]/,relevance:0,contains:[Re]}]},ea={scope:"title",begin:Fn,relevance:0},na={scope:"title",begin:dn,relevance:0},ta={begin:"\\.\\s*"+dn,relevance:0},aa=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var De=Object.freeze({__proto__:null,APOS_STRING_MODE:Wt,BACKSLASH_ESCAPE:Re,BINARY_NUMBER_MODE:Jt,BINARY_NUMBER_RE:jn,COMMENT:We,C_BLOCK_COMMENT_MODE:Kt,C_LINE_COMMENT_MODE:Vt,C_NUMBER_MODE:Xt,C_NUMBER_RE:Hn,END_SAME_AS_BEGIN:aa,HASH_COMMENT_MODE:Yt,IDENT_RE:Fn,MATCH_NOTHING_RE:Gt,METHOD_GUARD:ta,NUMBER_MODE:Zt,NUMBER_RE:Gn,PHRASAL_WORDS_MODE:qt,QUOTE_STRING_MODE:zt,REGEXP_MODE:Qt,RE_STARTERS_RE:Ht,SHEBANG:jt,TITLE_MODE:ea,UNDERSCORE_IDENT_RE:dn,UNDERSCORE_TITLE_MODE:na});function sa(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function ia(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function oa(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=sa,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function ra(e,n){Array.isArray(e.illegal)&&(e.illegal=cn(...e.illegal))}function ca(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function la(e,n){e.relevance===void 0&&(e.relevance=1)}const da=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=t.keywords,e.begin=ve(t.beforeMatch,Bn(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},ua=["of","and","for","in","not","or","if","then","parent","list","value"],pa="keyword";function Wn(e,n,t=pa){const a=Object.create(null);return typeof e=="string"?o(t,e.split(" ")):Array.isArray(e)?o(t,e):Object.keys(e).forEach(function(r){Object.assign(a,Wn(e[r],n,r))}),a;function o(r,s){n&&(s=s.map(i=>i.toLowerCase())),s.forEach(function(i){const c=i.split("|");a[c[0]]=[r,ma(c[0],c[1])]})}}function ma(e,n){return n?Number(n):ha(e)?0:1}function ha(e){return ua.includes(e.toLowerCase())}const An={},we=e=>{console.error(e)},Sn=(e,...n)=>{console.log(`WARN: ${e}`,...n)},Ee=(e,n)=>{An[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),An[`${e}/${n}`]=!0)},Ge=new Error;function zn(e,n,{key:t}){let a=0;const o=e[t],r={},s={};for(let i=1;i<=n.length;i++)s[i+a]=o[i],r[i+a]=!0,a+=Un(n[i-1]);e[t]=s,e[t]._emit=r,e[t]._multi=!0}function ga(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw we("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ge;if(typeof e.beginScope!="object"||e.beginScope===null)throw we("beginScope must be object"),Ge;zn(e,e.begin,{key:"beginScope"}),e.begin=ln(e.begin,{joinWith:""})}}function fa(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw we("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ge;if(typeof e.endScope!="object"||e.endScope===null)throw we("endScope must be object"),Ge;zn(e,e.end,{key:"endScope"}),e.end=ln(e.end,{joinWith:""})}}function ba(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function ya(e){ba(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),ga(e),fa(e)}function wa(e){function n(s,i){return new RegExp(Me(s),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(i?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,i]),this.matchAt+=Un(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(c=>c[1]);this.matcherRe=n(ln(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(i);if(!c)return null;const l=c.findIndex((p,b)=>b>0&&p!==void 0),d=this.matchIndexes[l];return c.splice(0,l),Object.assign(c,d)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const c=new t;return this.rules.slice(i).forEach(([l,d])=>c.addRule(l,d)),c.compile(),this.multiRegexes[i]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,c){this.rules.push([i,c]),c.type==="begin"&&this.count++}exec(i){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let l=c.exec(i);if(this.resumingScanAtSamePosition()&&!(l&&l.index===this.lastIndex)){const d=this.getMatcher(0);d.lastIndex=this.lastIndex+1,l=d.exec(i)}return l&&(this.regexIndex+=l.position+1,this.regexIndex===this.count&&this.considerAll()),l}}function o(s){const i=new a;return s.contains.forEach(c=>i.addRule(c.begin,{rule:c,type:"begin"})),s.terminatorEnd&&i.addRule(s.terminatorEnd,{type:"end"}),s.illegal&&i.addRule(s.illegal,{type:"illegal"}),i}function r(s,i){const c=s;if(s.isCompiled)return c;[ia,ca,ya,da].forEach(d=>d(s,i)),e.compilerExtensions.forEach(d=>d(s,i)),s.__beforeBegin=null,[oa,ra,la].forEach(d=>d(s,i)),s.isCompiled=!0;let l=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),l=s.keywords.$pattern,delete s.keywords.$pattern),l=l||/\w+/,s.keywords&&(s.keywords=Wn(s.keywords,e.case_insensitive)),c.keywordPatternRe=n(l,!0),i&&(s.begin||(s.begin=/\B|\b/),c.beginRe=n(c.begin),!s.end&&!s.endsWithParent&&(s.end=/\B|\b/),s.end&&(c.endRe=n(c.end)),c.terminatorEnd=Me(c.end)||"",s.endsWithParent&&i.terminatorEnd&&(c.terminatorEnd+=(s.end?"|":"")+i.terminatorEnd)),s.illegal&&(c.illegalRe=n(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(d){return va(d==="self"?s:d)})),s.contains.forEach(function(d){r(d,c)}),s.starts&&r(s.starts,i),c.matcher=o(c),c}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=he(e.classNameAliases||{}),r(e)}function qn(e){return e?e.endsWithParent||qn(e.starts):!1}function va(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return he(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:qn(e)?he(e,{starts:e.starts?he(e.starts):null}):Object.isFrozen(e)?he(e):e}var Aa="11.11.1";class Sa extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const Je=Pn,En=he,kn=Symbol("nomatch"),Ea=7,Vn=function(e){const n=Object.create(null),t=Object.create(null),a=[];let o=!0;const r="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Ot};function c(u){return i.noHighlightRe.test(u)}function l(u){let g=u.className+" ";g+=u.parentNode?u.parentNode.className:"";const h=i.languageDetectRe.exec(g);if(h){const k=G(h[1]);return k||(Sn(r.replace("{}",h[1])),Sn("Falling back to no-highlight mode for this block.",u)),k?h[1]:"no-highlight"}return g.split(/\s+/).find(k=>c(k)||G(k))}function d(u,g,h){let k="",I="";typeof g=="object"?(k=u,h=g.ignoreIllegals,I=g.language):(Ee("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ee("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),I=u,k=g),h===void 0&&(h=!0);const D={code:k,language:I};se("before:highlight",D);const F=D.result?D.result:p(D.language,D.code,h);return F.code=D.code,se("after:highlight",F),F}function p(u,g,h,k){const I=Object.create(null);function D(m,f){return m.keywords[f]}function F(){if(!A.keywords){j.addText(P);return}let m=0;A.keywordPatternRe.lastIndex=0;let f=A.keywordPatternRe.exec(P),x="";for(;f;){x+=P.substring(m,f.index);const M=te.case_insensitive?f[0].toLowerCase():f[0],z=D(A,M);if(z){const[ue,St]=z;if(j.addText(x),x="",I[M]=(I[M]||0)+1,I[M]<=Ea&&(Oe+=St),ue.startsWith("_"))x+=f[0];else{const Et=te.classNameAliases[ue]||ue;J(f[0],Et)}}else x+=f[0];m=A.keywordPatternRe.lastIndex,f=A.keywordPatternRe.exec(P)}x+=P.substring(m),j.addText(x)}function ne(){if(P==="")return;let m=null;if(typeof A.subLanguage=="string"){if(!n[A.subLanguage]){j.addText(P);return}m=p(A.subLanguage,P,!0,Ne[A.subLanguage]),Ne[A.subLanguage]=m._top}else m=y(P,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(Oe+=m.relevance),j.__addSublanguage(m._emitter,m.language)}function q(){A.subLanguage!=null?ne():F(),P=""}function J(m,f){m!==""&&(j.startScope(f),j.addText(m),j.endScope())}function Ae(m,f){let x=1;const M=f.length-1;for(;x<=M;){if(!m._emit[x]){x++;continue}const z=te.classNameAliases[m[x]]||m[x],ue=f[x];z?J(ue,z):(P=ue,F(),P=""),x++}}function $e(m,f){return m.scope&&typeof m.scope=="string"&&j.openNode(te.classNameAliases[m.scope]||m.scope),m.beginScope&&(m.beginScope._wrap?(J(P,te.classNameAliases[m.beginScope._wrap]||m.beginScope._wrap),P=""):m.beginScope._multi&&(Ae(m.beginScope,f),P="")),A=Object.create(m,{parent:{value:A}}),A}function Ie(m,f,x){let M=Ut(m.endRe,x);if(M){if(m["on:end"]){const z=new yn(m);m["on:end"](f,z),z.isMatchIgnored&&(M=!1)}if(M){for(;m.endsParent&&m.parent;)m=m.parent;return m}}if(m.endsWithParent)return Ie(m.parent,f,x)}function qe(m){return A.matcher.regexIndex===0?(P+=m[0],1):(Xe=!0,0)}function Ve(m){const f=m[0],x=m.rule,M=new yn(x),z=[x.__beforeBegin,x["on:begin"]];for(const ue of z)if(ue&&(ue(m,M),M.isMatchIgnored))return qe(f);return x.skip?P+=f:(x.excludeBegin&&(P+=f),q(),!x.returnBegin&&!x.excludeBegin&&(P=f)),$e(x,m),x.returnBegin?0:f.length}function Ke(m){const f=m[0],x=g.substring(m.index),M=Ie(A,m,x);if(!M)return kn;const z=A;A.endScope&&A.endScope._wrap?(q(),J(f,A.endScope._wrap)):A.endScope&&A.endScope._multi?(q(),Ae(A.endScope,m)):z.skip?P+=f:(z.returnEnd||z.excludeEnd||(P+=f),q(),z.excludeEnd&&(P=f));do A.scope&&j.closeNode(),!A.skip&&!A.subLanguage&&(Oe+=A.relevance),A=A.parent;while(A!==M.parent);return M.starts&&$e(M.starts,m),z.returnEnd?0:f.length}function Ye(){const m=[];for(let f=A;f!==te;f=f.parent)f.scope&&m.unshift(f.scope);m.forEach(f=>j.openNode(f))}let Se={};function Le(m,f){const x=f&&f[0];if(P+=m,x==null)return q(),0;if(Se.type==="begin"&&f.type==="end"&&Se.index===f.index&&x===""){if(P+=g.slice(f.index,f.index+1),!o){const M=new Error(`0 width match regex (${u})`);throw M.languageName=u,M.badRule=Se.rule,M}return 1}if(Se=f,f.type==="begin")return Ve(f);if(f.type==="illegal"&&!h){const M=new Error('Illegal lexeme "'+x+'" for mode "'+(A.scope||"<unnamed>")+'"');throw M.mode=A,M}else if(f.type==="end"){const M=Ke(f);if(M!==kn)return M}if(f.type==="illegal"&&x==="")return P+=`
`,1;if(Ze>1e5&&Ze>f.index*3)throw new Error("potential infinite loop, way more iterations than matches");return P+=x,x.length}const te=G(u);if(!te)throw we(r.replace("{}",u)),new Error('Unknown language: "'+u+'"');const $=wa(te);let me="",A=k||$;const Ne={},j=new i.__emitter(i);Ye();let P="",Oe=0,ye=0,Ze=0,Xe=!1;try{if(te.__emitTokens)te.__emitTokens(g,j);else{for(A.matcher.considerAll();;){Ze++,Xe?Xe=!1:A.matcher.considerAll(),A.matcher.lastIndex=ye;const m=A.matcher.exec(g);if(!m)break;const f=g.substring(ye,m.index),x=Le(f,m);ye=m.index+x}Le(g.substring(ye))}return j.finalize(),me=j.toHTML(),{language:u,value:me,relevance:Oe,illegal:!1,_emitter:j,_top:A}}catch(m){if(m.message&&m.message.includes("Illegal"))return{language:u,value:Je(g),illegal:!0,relevance:0,_illegalBy:{message:m.message,index:ye,context:g.slice(ye-100,ye+100),mode:m.mode,resultSoFar:me},_emitter:j};if(o)return{language:u,value:Je(g),illegal:!1,relevance:0,errorRaised:m,_emitter:j,_top:A};throw m}}function b(u){const g={value:Je(u),illegal:!1,relevance:0,_top:s,_emitter:new i.__emitter(i)};return g._emitter.addText(u),g}function y(u,g){g=g||i.languages||Object.keys(n);const h=b(u),k=g.filter(G).filter(X).map(q=>p(q,u,!1));k.unshift(h);const I=k.sort((q,J)=>{if(q.relevance!==J.relevance)return J.relevance-q.relevance;if(q.language&&J.language){if(G(q.language).supersetOf===J.language)return 1;if(G(J.language).supersetOf===q.language)return-1}return 0}),[D,F]=I,ne=D;return ne.secondBest=F,ne}function w(u,g,h){const k=g&&t[g]||h;u.classList.add("hljs"),u.classList.add(`language-${k}`)}function v(u){let g=null;const h=l(u);if(c(h))return;if(se("before:highlightElement",{el:u,language:h}),u.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",u);return}if(u.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(u)),i.throwUnescapedHTML))throw new Sa("One of your code blocks includes unescaped HTML.",u.innerHTML);g=u;const k=g.textContent,I=h?d(k,{language:h,ignoreIllegals:!0}):y(k);u.innerHTML=I.value,u.dataset.highlighted="yes",w(u,h,I.language),u.result={language:I.language,re:I.relevance,relevance:I.relevance},I.secondBest&&(u.secondBest={language:I.secondBest.language,relevance:I.secondBest.relevance}),se("after:highlightElement",{el:u,result:I,text:k})}function S(u){i=En(i,u)}const E=()=>{U(),Ee("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function T(){U(),Ee("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let _=!1;function U(){function u(){U()}if(document.readyState==="loading"){_||window.addEventListener("DOMContentLoaded",u,!1),_=!0;return}document.querySelectorAll(i.cssSelector).forEach(v)}function R(u,g){let h=null;try{h=g(e)}catch(k){if(we("Language definition for '{}' could not be registered.".replace("{}",u)),o)we(k);else throw k;h=s}h.name||(h.name=u),n[u]=h,h.rawDefinition=g.bind(null,e),h.aliases&&O(h.aliases,{languageName:u})}function N(u){delete n[u];for(const g of Object.keys(t))t[g]===u&&delete t[g]}function ee(){return Object.keys(n)}function G(u){return u=(u||"").toLowerCase(),n[u]||n[t[u]]}function O(u,{languageName:g}){typeof u=="string"&&(u=[u]),u.forEach(h=>{t[h.toLowerCase()]=g})}function X(u){const g=G(u);return g&&!g.disableAutodetect}function fe(u){u["before:highlightBlock"]&&!u["before:highlightElement"]&&(u["before:highlightElement"]=g=>{u["before:highlightBlock"](Object.assign({block:g.el},g))}),u["after:highlightBlock"]&&!u["after:highlightElement"]&&(u["after:highlightElement"]=g=>{u["after:highlightBlock"](Object.assign({block:g.el},g))})}function de(u){fe(u),a.push(u)}function pe(u){const g=a.indexOf(u);g!==-1&&a.splice(g,1)}function se(u,g){const h=u;a.forEach(function(k){k[h]&&k[h](g)})}function be(u){return Ee("10.7.0","highlightBlock will be removed entirely in v12.0"),Ee("10.7.0","Please use highlightElement now."),v(u)}Object.assign(e,{highlight:d,highlightAuto:y,highlightAll:U,highlightElement:v,highlightBlock:be,configure:S,initHighlighting:E,initHighlightingOnLoad:T,registerLanguage:R,unregisterLanguage:N,listLanguages:ee,getLanguage:G,registerAliases:O,autoDetection:X,inherit:En,addPlugin:de,removePlugin:pe}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=Aa,e.regex={concat:ve,lookahead:Bn,either:cn,optional:Pt,anyNumberOfTimes:Dt};for(const u in De)typeof De[u]=="object"&&Dn(De[u]);return Object.assign(e,De),e},xe=Vn({});xe.newInstance=()=>Vn({});var ka=xe;xe.HighlightJS=xe;xe.default=xe;const oe=Rt(ka);function Ta(e){const n=e.regex,t={},a={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},a]});const o={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},r=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),s={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},i={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,o]};o.contains.push(i);const c={match:/\\"/},l={className:"string",begin:/'/,end:/'/},d={match:/\\'/},p={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]},b=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],y=e.SHEBANG({binary:`(${b.join("|")})`,relevance:10}),w={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},v=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],S=["true","false"],E={match:/(\/[a-z._-]+)+/},T=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],_=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],U=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],R=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:v,literal:S,built_in:[...T,..._,"set","shopt",...U,...R]},contains:[y,e.SHEBANG(),w,p,r,s,E,i,c,l,d,t]}}const Tn="[A-Za-z$_][0-9A-Za-z$_]*",xa=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Ia=["true","false","null","undefined","NaN","Infinity"],Kn=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Yn=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Zn=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],_a=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ca=[].concat(Zn,Kn,Yn);function Ma(e){const n=e.regex,t=(h,{after:k})=>{const I="</"+h[0].slice(1);return h.input.indexOf(I,k)!==-1},a=Tn,o={begin:"<>",end:"</>"},r=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(h,k)=>{const I=h[0].length+h.index,D=h.input[I];if(D==="<"||D===","){k.ignoreMatch();return}D===">"&&(t(h,{after:I})||k.ignoreMatch());let F;const ne=h.input.substring(I);if(F=ne.match(/^\s*=/)){k.ignoreMatch();return}if((F=ne.match(/^\s+extends\s+/))&&F.index===0){k.ignoreMatch();return}}},i={$pattern:Tn,keyword:xa,literal:Ia,built_in:Ca,"variable.language":_a},c="[0-9](_?[0-9])*",l=`\\.(${c})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${d})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},b={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},y={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"xml"}},w={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"css"}},v={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"graphql"}},S={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,b]},T={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},_=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,v,S,{match:/\$\d+/},p];b.contains=_.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(_)});const U=[].concat(T,b.contains),R=U.concat([{begin:/(\s*)\(/,end:/\)/,keywords:i,contains:["self"].concat(U)}]),N={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R},ee={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},G={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Kn,...Yn]}},O={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},X={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[N],illegal:/%/},fe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function de(h){return n.concat("(?!",h.join("|"),")")}const pe={match:n.concat(/\b/,de([...Zn,"super","import"].map(h=>`${h}\\s*\\(`)),a,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},se={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},be={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},N]},u="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",g={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(u)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[N]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:G},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),O,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,v,S,T,{match:/\$\d+/},p,G,{scope:"attr",match:a+n.lookahead(":"),relevance:0},g,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,e.REGEXP_MODE,{className:"function",begin:u,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:r},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},X,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[N,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},se,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[N]},pe,fe,ee,be,{match:/\$[(.]/}]}}function Ra(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},a=["true","false","null"],o={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:a},contains:[n,t,e.QUOTE_STRING_MODE,o,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function $a(e){const n=e.regex,t={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},a={begin:"^[-\\*]{3,}",end:"$"},o={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},r={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},s={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},i=/[A-Za-z][A-Za-z0-9+.-]*/,c={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:n.concat(/\[.+?\]\(/,i,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},l={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},d={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},p=e.inherit(l,{contains:[]}),b=e.inherit(d,{contains:[]});l.contains.push(b),d.contains.push(p);let y=[t,c];return[l,d,p,b].forEach(E=>{E.contains=E.contains.concat(y)}),y=y.concat(l,d),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:y},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:y}]}]},t,r,l,d,{className:"quote",begin:"^>\\s+",contains:y,end:"$"},o,a,c,s,{scope:"literal",match:/&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/}]}}function Xn(e){return e?typeof e=="string"?e:e.source:null}function _e(e){return L("(?=",e,")")}function L(...e){return e.map(t=>Xn(t)).join("")}function La(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function K(...e){return"("+(La(e).capture?"":"?:")+e.map(a=>Xn(a)).join("|")+")"}const un=e=>L(/\b/,e,/\w$/.test(e)?/\b/:/\B/),Na=["Protocol","Type"].map(un),xn=["init","self"].map(un),Oa=["Any","Self"],Qe=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","package","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],In=["false","nil","true"],Da=["assignment","associativity","higherThan","left","lowerThan","none","right"],Pa=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],_n=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],Jn=K(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),Qn=K(Jn,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),en=L(Jn,Qn,"*"),et=K(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),He=K(et,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),ce=L(et,He,"*"),Pe=L(/[A-Z]/,He,"*"),Ba=["attached","autoclosure",L(/convention\(/,K("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",L(/objc\(/,ce,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],Ua=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function Fa(e){const n={match:/\s+/,relevance:0},t=e.COMMENT("/\\*","\\*/",{contains:["self"]}),a=[e.C_LINE_COMMENT_MODE,t],o={match:[/\./,K(...Na,...xn)],className:{2:"keyword"}},r={match:L(/\./,K(...Qe)),relevance:0},s=Qe.filter($=>typeof $=="string").concat(["_|0"]),i=Qe.filter($=>typeof $!="string").concat(Oa).map(un),c={variants:[{className:"keyword",match:K(...i,...xn)}]},l={$pattern:K(/\b\w+/,/#\w+/),keyword:s.concat(Pa),literal:In},d=[o,r,c],p={match:L(/\./,K(..._n)),relevance:0},b={className:"built_in",match:L(/\b/,K(..._n),/(?=\()/)},y=[p,b],w={match:/->/,relevance:0},v={className:"operator",relevance:0,variants:[{match:en},{match:`\\.(\\.|${Qn})+`}]},S=[w,v],E="([0-9]_*)+",T="([0-9a-fA-F]_*)+",_={className:"number",relevance:0,variants:[{match:`\\b(${E})(\\.(${E}))?([eE][+-]?(${E}))?\\b`},{match:`\\b0x(${T})(\\.(${T}))?([pP][+-]?(${E}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},U=($="")=>({className:"subst",variants:[{match:L(/\\/,$,/[0\\tnr"']/)},{match:L(/\\/,$,/u\{[0-9a-fA-F]{1,8}\}/)}]}),R=($="")=>({className:"subst",match:L(/\\/,$,/[\t ]*(?:[\r\n]|\r\n)/)}),N=($="")=>({className:"subst",label:"interpol",begin:L(/\\/,$,/\(/),end:/\)/}),ee=($="")=>({begin:L($,/"""/),end:L(/"""/,$),contains:[U($),R($),N($)]}),G=($="")=>({begin:L($,/"/),end:L(/"/,$),contains:[U($),N($)]}),O={className:"string",variants:[ee(),ee("#"),ee("##"),ee("###"),G(),G("#"),G("##"),G("###")]},X=[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}],fe={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:X},de=$=>{const me=L($,/\//),A=L(/\//,$);return{begin:me,end:A,contains:[...X,{scope:"comment",begin:`#(?!.*${A})`,end:/$/}]}},pe={scope:"regexp",variants:[de("###"),de("##"),de("#"),fe]},se={match:L(/`/,ce,/`/)},be={className:"variable",match:/\$\d+/},u={className:"variable",match:`\\$${He}+`},g=[se,be,u],h={match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:Ua,contains:[...S,_,O]}]}},k={scope:"keyword",match:L(/@/,K(...Ba),_e(K(/\(/,/\s+/)))},I={scope:"meta",match:L(/@/,ce)},D=[h,k,I],F={match:_e(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:L(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,He,"+")},{className:"type",match:Pe,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:L(/\s+&\s+/,_e(Pe)),relevance:0}]},ne={begin:/</,end:/>/,keywords:l,contains:[...a,...d,...D,w,F]};F.contains.push(ne);const q={match:L(ce,/\s*:/),keywords:"_|0",relevance:0},J={begin:/\(/,end:/\)/,relevance:0,keywords:l,contains:["self",q,...a,pe,...d,...y,...S,_,O,...g,...D,F]},Ae={begin:/</,end:/>/,keywords:"repeat each",contains:[...a,F]},$e={begin:K(_e(L(ce,/\s*:/)),_e(L(ce,/\s+/,ce,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:ce}]},Ie={begin:/\(/,end:/\)/,keywords:l,contains:[$e,...a,...d,...S,_,O,...D,F,J],endsParent:!0,illegal:/["']/},qe={match:[/(func|macro)/,/\s+/,K(se.match,ce,en)],className:{1:"keyword",3:"title.function"},contains:[Ae,Ie,n],illegal:[/\[/,/%/]},Ve={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[Ae,Ie,n],illegal:/\[|%/},Ke={match:[/operator/,/\s+/,en],className:{1:"keyword",3:"title"}},Ye={begin:[/precedencegroup/,/\s+/,Pe],className:{1:"keyword",3:"title"},contains:[F],keywords:[...Da,...In],end:/}/},Se={match:[/class\b/,/\s+/,/func\b/,/\s+/,/\b[A-Za-z_][A-Za-z0-9_]*\b/],scope:{1:"keyword",3:"keyword",5:"title.function"}},Le={match:[/class\b/,/\s+/,/var\b/],scope:{1:"keyword",3:"keyword"}},te={begin:[/(struct|protocol|class|extension|enum|actor)/,/\s+/,ce,/\s*/],beginScope:{1:"keyword",3:"title.class"},keywords:l,contains:[Ae,...d,{begin:/:/,end:/\{/,keywords:l,contains:[{scope:"title.class.inherited",match:Pe},...d],relevance:0}]};for(const $ of O.variants){const me=$.contains.find(Ne=>Ne.label==="interpol");me.keywords=l;const A=[...d,...y,...S,_,O,...g];me.contains=[...A,{begin:/\(/,end:/\)/,contains:["self",...A]}]}return{name:"Swift",keywords:l,contains:[...a,qe,Ve,Se,Le,te,Ke,Ye,{beginKeywords:"import",end:/$/,contains:[...a],relevance:0},pe,...d,...y,...S,_,O,...g,...D,F,J]}}const je="[A-Za-z$_][0-9A-Za-z$_]*",nt=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],tt=["true","false","null","undefined","NaN","Infinity"],at=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],st=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],it=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ot=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],rt=[].concat(it,at,st);function Ga(e){const n=e.regex,t=(h,{after:k})=>{const I="</"+h[0].slice(1);return h.input.indexOf(I,k)!==-1},a=je,o={begin:"<>",end:"</>"},r=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(h,k)=>{const I=h[0].length+h.index,D=h.input[I];if(D==="<"||D===","){k.ignoreMatch();return}D===">"&&(t(h,{after:I})||k.ignoreMatch());let F;const ne=h.input.substring(I);if(F=ne.match(/^\s*=/)){k.ignoreMatch();return}if((F=ne.match(/^\s+extends\s+/))&&F.index===0){k.ignoreMatch();return}}},i={$pattern:je,keyword:nt,literal:tt,built_in:rt,"variable.language":ot},c="[0-9](_?[0-9])*",l=`\\.(${c})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${d})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},b={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},y={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"xml"}},w={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"css"}},v={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"graphql"}},S={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,b]},T={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},_=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,v,S,{match:/\$\d+/},p];b.contains=_.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(_)});const U=[].concat(T,b.contains),R=U.concat([{begin:/(\s*)\(/,end:/\)/,keywords:i,contains:["self"].concat(U)}]),N={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R},ee={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},G={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...at,...st]}},O={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},X={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[N],illegal:/%/},fe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function de(h){return n.concat("(?!",h.join("|"),")")}const pe={match:n.concat(/\b/,de([...it,"super","import"].map(h=>`${h}\\s*\\(`)),a,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},se={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},be={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},N]},u="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",g={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(u)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[N]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:G},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),O,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,v,S,T,{match:/\$\d+/},p,G,{scope:"attr",match:a+n.lookahead(":"),relevance:0},g,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,e.REGEXP_MODE,{className:"function",begin:u,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:r},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},X,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[N,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},se,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[N]},pe,fe,ee,be,{match:/\$[(.]/}]}}function Ha(e){const n=e.regex,t=Ga(e),a=je,o=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],r={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},s={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:o},contains:[t.exports.CLASS_REFERENCE]},i={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},c=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],l={$pattern:je,keyword:nt.concat(c),literal:tt,built_in:rt.concat(o),"variable.language":ot},d={className:"meta",begin:"@"+a},p=(v,S,E)=>{const T=v.contains.findIndex(_=>_.label===S);if(T===-1)throw new Error("can not find mode to replace");v.contains.splice(T,1,E)};Object.assign(t.keywords,l),t.exports.PARAMS_CONTAINS.push(d);const b=t.contains.find(v=>v.scope==="attr"),y=Object.assign({},b,{match:n.concat(a,n.lookahead(/\s*\?:/))});t.exports.PARAMS_CONTAINS.push([t.exports.CLASS_REFERENCE,b,y]),t.contains=t.contains.concat([d,r,s,y]),p(t,"shebang",e.SHEBANG()),p(t,"use_strict",i);const w=t.contains.find(v=>v.label==="func.def");return w.relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),t}function ja(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a=/[\p{L}0-9._:-]+/u,o={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},s=e.inherit(r,{begin:/\(/,end:/\)/}),i=e.inherit(e.APOS_STRING_MODE,{className:"string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:a,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[o]},{begin:/'/,end:/'/,contains:[o]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,c,i,s,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,s,c,i]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},o,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:l}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function Wa(e){const n="true false yes no null",t="[\\w#;/?:@&=+$,.~*'()[\\]]+",a={className:"attr",variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},o={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},r={className:"string",relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:"char.escape",relevance:0}]},s={className:"string",relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,o]},i=e.inherit(s,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),b={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},y={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},w={begin:/\{/,end:/\}/,contains:[y],illegal:"\\n",relevance:0},v={begin:"\\[",end:"\\]",contains:[y],illegal:"\\n",relevance:0},S=[a,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+t},{className:"type",begin:"!<"+t+">"},{className:"type",begin:"!"+t},{className:"type",begin:"!!"+t},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},b,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},w,v,r,s],E=[...S];return E.pop(),E.push(i),y.contains=E,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:S}}oe.registerLanguage("bash",Ta);oe.registerLanguage("adascript",e=>({name:"AdaScript",keywords:{keyword:"var const func class struct enum import from if else for in while repeat switch case default break continue return async await",literal:"true false null",type:"Any Bool Int Float String List Map Range"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{scope:"meta",begin:/@[A-Za-z_]\w*/},{scope:"property",begin:/\.[A-Za-z_]\w*/},e.C_NUMBER_MODE]}));oe.registerLanguage("javascript",Ma);oe.registerLanguage("json",Ra);oe.registerLanguage("markdown",$a);oe.registerLanguage("swift",e=>{const n=Fa(e);return n.contains=[{scope:"property",begin:/\.[A-Za-z_]\w*/},...n.contains??[]],n});oe.registerLanguage("typescript",Ha);oe.registerLanguage("xml",ja);oe.registerLanguage("yaml",Wa);const za={ada:"adascript",html:"xml",js:"javascript",md:"markdown",sh:"bash",shell:"bash",ts:"typescript",txt:"plaintext",yml:"yaml"};function ct(e){const n=e.trim().toLowerCase();return za[n]??n}function lt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function dt(e){const n=ct(e);return n?`language-${lt(n)}`:"language-plaintext"}function ut(e,n){const t=ct(n);return!t||t==="plaintext"||!oe.getLanguage(t)?lt(e):oe.highlight(e,{language:t,ignoreIllegals:!0}).value}function qa(e,n){const t=e.replace(/\r\n?/g,`
`).split(`
`);return t.length>1&&t[t.length-1]===""&&t.pop(),t.map((a,o)=>`<span class="code-line"><span class="code-line-number" aria-hidden="true">${o+1}</span><span class="code-line-content">${ut(a,n)}</span></span>`).join("")}const Va=`---
title: "Introducing Ada 0.1.0"
slug: "introducing-adaengine-0-1-0"
description: "Ada 0.1.0 is the first public milestone for a Swift-first, data-driven game engine and app framework."
date: "2026-06-1 13:36"
author: "SpectralDragon"
tags:
  - release
image: images/main/tilemap.png
published: true
featured: true
---

# Introducing Ada 0.1.0

![Ada Editor workspace](images/main/ada-editor.png "Ada Editor workspace with Swift source, scene preview, SwiftPM commands, and the output console.")

After a long road, I am excited to introduce **Ada 0.1.0**: a free and open source game engine and app framework written in Swift.

Ada is built around a simple idea: Swift should be a great language for making games, interactive apps, tools, and creative software — not only apps for Apple platforms. Swift is expressive, safe, fast, and comfortable to write. Ada tries to bring those strengths into game development with a modular engine, a data-driven architecture, and APIs that feel natural to Swift developers.

Ada is available on GitHub under the [MIT license](https://github.com/AdaEngine/AdaEngine). This first release is still early, but it is already a real milestone: the engine can open windows, run an ECS-driven game loop, render sprites and UI, load assets and scenes, play audio, handle input, run physics, and build examples across the engine modules.

:::warning Early release
Ada 0.1.0 is an early release. APIs will change, some features are incomplete, documentation is still growing, and you should expect rough edges. I do not recommend using it for serious production projects yet unless you are comfortable with instability and want to help shape the engine.
:::

If that sounds exciting, you can jump straight into the [tutorials](https://docs.adaengine.org/tutorials/adaengine/) or explore the [GitHub repository](https://github.com/AdaEngine/AdaEngine).

:::info
This article includes links to Ada documentation and source code where possible. The docs are generated from the codebase, so they will continue improving together with the engine.
:::

## What is Ada?

Ada is a data-driven game engine and app framework for Swift. Its core design goals are:

- **Simple**: easy to learn for newcomers, but still flexible enough for experienced users.
- **Modular**: most engine features are delivered as plugins, so you can choose what your app needs.
- **Data-driven**: the heart of Ada is an Entity Component System.
- **Fast iteration**: the engine is designed for quick builds and quick feedback.
- **Capable**: the first focus is a complete 2D workflow, with 3D support already present and planned to grow.
- **Cross-platform by design**: Ada currently targets Apple platforms and is actively moving toward broader support including Windows, Linux, Android, and WebAssembly/WebGPU.

The current feature set includes:

- **Sprites**: render many textures with batching; use individual textures, sprite sheets, and animated textures.
- **Scenes**: save and load ECS worlds from human-readable scene files.
- **Tilemaps**: build levels with [LDtk](https://ldtk.io) or integrate another editor with the provided APIs.
- **2D physics**: built-in support powered by [Box2D v3](https://box2d.io).
- **Assets**: load and save game assets, with async loading and asset handles.
- **Hot asset reloading**: reload changed assets at runtime and stay in the flow.
- **Audio**: load and play sound resources, including spatial playback attached to entities.
- **Plugins**: rendering, audio, input, UI, events, physics, scenes, sprites, and other systems are composed through plugins.
- **Events and observation**: communicate across your game with global events or ECS-style frame events.
- **Parent/child relationships**: build entity hierarchies and propagate transforms through them.
- **Multiple render backends**: Metal on Apple platforms and WebGPU/Dawn where enabled.
- **Render graphs**: control how rendering work is scheduled and composed.
- **AdaUI**: build game and app UI with a SwiftUI-inspired API.
- **Gamepads**: access connected gamepads on supported platforms.
- **Examples**: a growing set of demos for sprites, UI, input, events, scenes, tilemaps, and 3D.

## A Swift-native app entry point

Ada apps start with an API that should feel familiar if you have used SwiftUI:

\`\`\`swift
import AdaEngine

@main
struct AdaApp: App {
    var body: some AppScene {
        DefaultAppWindow()
            .windowMode(.windowed)
            .windowTitle("Ada App")
    }
}
\`\`\`

That is enough to create a window and install the default engine plugins.

The core philosophy is customization through plugins. Rendering, audio, input, events, UI, physics, scenes, sprites, and other features are added to an application through plugin composition. You can start with sensible defaults or build a smaller runtime by selecting only the parts you need.

For more control, use [\`EmptyWindow\`](https://docs.adaengine.org/documentation/adaapp/emptywindow) and add plugins manually:

\`\`\`swift
import AdaEngine

@main
struct AdaApp: App {
    var body: some AppScene {
        EmptyWindow()
            .addPlugins(DefaultPlugins())
            .windowMode(.windowed)
            .windowTitle("Ada App")
    }
}
\`\`\`

[\`DefaultPlugins\`](https://docs.adaengine.org/documentation/adaengine/defaultplugins/) is the bundle most users should start with. When you need a lighter runtime, you can disable parts of the bundle with [\`disable(_:)\`](https://docs.adaengine.org/documentation/adaengine/defaultplugins/disable(_:)).

## Entity Component System

Ada's heart is its ECS framework. It is inspired by engines and frameworks such as Bevy and RealityKit, but it is designed to feel natural in Swift.

In an Entity Component System:

- **Entities** are unique identifiers.
- **Components** are pieces of data attached to entities.
- **Systems** are logic that reads and writes components.
- **Resources** are unique world-level values.

This approach keeps game data separate from game logic. It also makes it easier to scale a game from a few objects to many systems and many entities.

AdaECS uses normal Swift types and adds macros to reduce boilerplate:

\`\`\`swift
import AdaEngine

@Component
struct Position {
    var value: Float
}

@Component
struct Velocity {
    var value: Float
}

@System
func Movement(
    _ query: Query<
        Ref<Position>, // read-write access
        Velocity       // read-only access
    >
) {
    query.forEach { position, velocity in
        position.value += velocity.value
    }
}

struct ExamplePlugin: Plugin {
    func setup(in app: AppWorlds) {
        app.spawn {
            Position(value: 0)
            Velocity(value: 1)
        }

        app.spawn {
            Position(value: 1)
            Velocity(value: 2)
        }

        app.addSystem(MovementSystem.self, on: .update)
    }
}

@main
struct AdaApp: App {
    var body: some AppScene {
        DefaultAppWindow()
            .addPlugins(ExamplePlugin())
    }
}
\`\`\`

The \`@System\` macro generates the concrete system type for you. You write the logic as a Swift function; Ada turns it into a registered ECS system.

### Queries

Queries fetch components from the world:

\`\`\`swift
@System
func Movement(_ query: Query<Entity, Transform>) {
    query.forEach { entity, transform in
        // Iterate over every entity with a Transform.
    }
}
\`\`\`

### Filter queries

Filters restrict the set of matching entities:

\`\`\`swift
@System
func PlayerMovement(
    _ query: FilterQuery<Entity, Transform, With<Player>>
) {
    query.forEach { entity, transform in
        // Iterate only over entities that also have Player.
    }
}
\`\`\`

### Change detection

Change detection lets a system react only when relevant data changes:

\`\`\`swift
@System
func EnemyHealthBar(
    _ query: FilterQuery<Enemy, Changed<Health>>
) {
    query.forEach { enemy in
        // Run when Health has been added or changed.
    }
}
\`\`\`

### Resources

Resources store unique world-level data:

\`\`\`swift
struct GameScore: Resource {
    var score: Int
    var bulletFireCount: Int
}

world.insertResource(GameScore(score: 0, bulletFireCount: 0))

@System
func UpdateScore(score: ResMut<GameScore>) {
    score.score += 1
}
\`\`\`

Delta time is also exposed as a resource:

\`\`\`swift
@System
func Movement(
    time: Res<DeltaTime>,
    query: Query<Ref<Position>>
) {
    query.forEach {
        $0.value += 20 * time.deltaTime
    }
}
\`\`\`

### Commands

When a system needs to spawn or delete entities, or insert components, it can use [\`Commands\`](https://docs.adaengine.org/documentation/adaecs/commands). Commands are collected and then applied after the system finishes, which keeps system execution safe.

\`\`\`swift
@System
func GameStartup(_ commands: Commands) {
    commands.spawn("Player") {
        Player()
        Transform()
    }
}
\`\`\`

### Local values

Systems can keep local state with [\`Local\`](https://docs.adaengine.org/documentation/adaecs/local):

\`\`\`swift
@System
func UpdateData(isUpdated: Local<Bool> = false) {
    if !isUpdated.wrappedValue {
        // Perform one-time work.
        isUpdated.wrappedValue = true
    }
}
\`\`\`

### Struct systems

For more control, AdaECS also supports struct-based systems with [\`@PlainSystem\`](https://docs.adaengine.org/documentation/adaecs/plainsystem(dependencies:)):

\`\`\`swift
@PlainSystem(dependencies: [
    .after(EnemyMovement.self),
    .before(PhysicsSystem.self)
])
struct MovementSystem {
    @Query<Player, Transform>
    private var playerQuery

    init(world: World) {}

    func update(context: UpdateContext) {
        playerQuery.forEach {
            // Update player movement here.
        }
    }
}
\`\`\`

### Schedulers

Systems run in schedulers. Ada includes common stages such as startup, pre-update, update, fixed update, and others:

\`\`\`swift
world
    .addSystem(StartupSystem.self, on: .startup)
    .addSystem(MovementSystem.self, on: .fixedUpdate)
    .addSystem(UpdateEnemySystem.self, on: .preUpdate)
    .addSystem(UpdateScoreSystem.self, on: .update)
\`\`\`

\`.startup\` runs once when the app launches. You can also build custom schedulers when your game needs its own execution model.

:::warning Early release
Be careful with system dependencies. If a system depends on another system that is not registered in the same scheduler, the app can fail at runtime.
:::

### Bundles

Bundles combine several components into one reusable unit. The \`@Bundle\` macro generates the code needed to unpack the bundle into components:

\`\`\`swift
@Bundle
struct EnemyBundle {
    let enemy = Enemy()
    let transform: Transform
    let health: Health
}

world.spawn(
    "Enemy",
    bundle: EnemyBundle(
        transform: Transform(),
        health: Health(30)
    )
)
\`\`\`

### Scriptable objects

If you prefer a Unity-like workflow for some gameplay code, Ada provides [\`ScriptableObject\`](https://docs.adaengine.org/documentation/adascene/scriptableobject) and [\`ScriptableComponents\`](https://docs.adaengine.org/documentation/adascene/scriptablecomponents):

\`\`\`swift
final class Player: ScriptableObject {
    func update(_ deltaTime: TimeInterval) {
        if input.isKeyPressed(.w) {
            // Move player.
        }
    }
}

world.spawn("Player") {
    ScriptableComponents(
        components: [
            Player()
        ]
    )
}
\`\`\`

This gives you a familiar object-style escape hatch while the engine remains ECS-first.

## AdaUI

Ada includes a UI framework called AdaUI. It is inspired by SwiftUI and is designed for both games and editor-like tools.

SwiftUI proved how productive declarative UI can be. AdaUI brings a similar style into the engine, so UI code can be written directly in Swift and rendered inside an Ada scene.

![AdaUI and SwiftUI layout diff for a media card stack](images/main/adaui_example_1.jpg "AdaUI and SwiftUI layout comparison for a media review card stack.")

![AdaUI and SwiftUI layout diff for a chat composer shell](images/main/adaui_example_2.jpg "AdaUI and SwiftUI layout comparison for a chat composer shell.")

### Views

A view implements the [\`View\`](https://docs.adaengine.org/documentation/adaui/view) protocol:

\`\`\`swift
struct GameOverView: View {
    var body: some View {
        Text("Game Over")
    }
}
\`\`\`

### Layout

AdaUI includes familiar stack layout primitives:

\`\`\`swift
struct GameOverView: View {
    var body: some View {
        VStack(spacing: 20) {
            Text("Game Over")
            Text("Try again")
        }
    }
}
\`\`\`

### Interactive elements

Buttons and other interactive controls can be composed in the same style:

\`\`\`swift
struct MenuView: View {
    var body: some View {
        Button("Start Game") {
            // Start game.
        }

        Button(action: {
            // Open settings.
        }, label: {
            Text("Settings")
                .foregroundColor(.red)
        })
    }
}
\`\`\`

### Modifiers

Modifiers apply style and behavior:

\`\`\`swift
struct GameOverView: View {
    var body: some View {
        VStack(spacing: 20) {
            Text("Game Over")
                .font(.system(size: 50))
                .foregroundColor(.red)
        }
    }
}
\`\`\`

### State and bindings

Views can store state and update when that state changes:

\`\`\`swift
struct GameOverView: View {
    @State private var isDead = false

    var body: some View {
        VStack(spacing: 20) {
            if isDead {
                Text("Game Over")
                    .font(.system(size: 50))
                    .foregroundColor(.red)
            }
        }
        .onEvent(YourGameEvent.UserDied) {
            self.isDead = true
        }
    }
}
\`\`\`

Bindings pass state between views:

\`\`\`swift
struct ParentView: View {
    @State private var isDead = false

    var body: some View {
        SubView(isDead: $isDead)
    }
}

struct SubView: View {
    @Binding var isDead: Bool

    var body: some View {
        if isDead {
            Text("Game Over")
        }
    }
}
\`\`\`

### Attaching UI to an entity

To show a view in the world, attach it with [\`UIComponent\`](https://docs.adaengine.org/documentation/adaui/uicomponent):

\`\`\`swift
let gameOverView = GameOverView()

world.spawn("GameOverView") {
    UIComponent(view: gameOverView)
}
\`\`\`

### Environment access

AdaUI views can read values from the environment. For example, a view attached to an entity can access the ECS world:

\`\`\`swift
struct DebugView: View {
    @Environment(\\.world)
    private var world

    var body: some View {
        Button("Spawn Enemy") {
            world.spawn("Enemy", bundle: EnemyBundle())
        }
    }
}
\`\`\`

### Images

Images can be used directly in UI:

\`\`\`swift
struct UserAvatarView: View {
    var body: some View {
        Image("@res://avatar.png")
    }
}
\`\`\`

AdaUI is especially important for the future of Ada because the editor is planned to be built on top of the same UI system that games can use.

![Ada Editor UI](images/main/ada-editor.png "The editor is planned around the same AdaUI foundations available to games and tools.")

## 2D features

Ada 0.1.0 is focused on building a strong 2D foundation.

### Sprites

Sprites are a core building block for many 2D games. Ada can render sprites from [\`Texture2D\`](https://docs.adaengine.org/documentation/adarender/texture2d) and other texture resources:

\`\`\`swift
let texture = try await AssetsManager.load(Texture2D.self, at: "@res://sprite.png")

world.spawn {
    Sprite(texture: texture)
    Transform()
}
\`\`\`

### Texture atlases and sprite sheets

Texture atlases can be used for animation, tile sets, and optimized rendering:

\`\`\`swift
let image = try await AssetsManager.load(Image.self, at: "@res://characters.png")
let textureAtlas = TextureAtlas(from: image, size: Vector2(16, 16))

world.spawn {
    Sprite(
        texture: textureAtlas[0, 1],
        size: Size(width: 16, height: 16)
    )
    Transform()
}
\`\`\`

If sprite size is not specified, Ada can infer it from the texture.

### Tilemaps

Ada includes a dedicated \`AdaTilemap\` module. The built-in demos include both custom tilemap examples and LDtk-based tilemap loading. This makes it possible to build levels visually and then load them into an ECS world.

The goal is to support practical 2D workflows: draw levels in an editor, load them as data, attach physics, and iterate quickly.

![Tilemap demo](images/main/tilemap.png "A tilemap scene rendered by Ada.")

### 2D physics

Ada includes \`AdaPhysics\`, backed by Box2D. You can attach collision components to entities and receive collision events through the event system.

Physics is integrated into the ECS world, so gameplay code can combine transforms, sprites, collision components, and systems in the same data-driven model.

## Scenes

A scene is a collection of entities, components, and resources that can be saved, loaded, and spawned into a world.

You can think about a scene as a prefab or level file: it describes a piece of your game that can be loaded when needed.

### Scene files

Scenes are saved as human-readable YAML. A scene file can include entities, component data, transforms, sprites, physics components, and resources:

\`\`\`yaml
version: 1.0.0
scene: Scene
world:
  entities:
  - name: Ground
    id: 122210699653662020
    components:
      AdaSprite.Sprite:
        tintColor:
          red: 1.0
          green: 1.0
          blue: 1.0
          alpha: 1.0
        flipX: false
        flipY: false
      AdaTransform.Transform:
        rotation:
          x: 0.0
          y: 0.0
          z: 0.0
          w: 1.0
        scale:
          x: 3.0
          y: 0.19
          z: 0.19
        position:
          x: 0.0
          y: -1.0
          z: 0.0
      AdaPhysics.Collision2DComponent:
        shapes:
        - fixture:
            box:
              _0:
                halfWidth: 0.5
                halfHeight: 0.5
                offset:
                  x: 0.0
                  y: 0.0
        mode:
          default: {}
  resources: {}
\`\`\`

### Loading scenes

Scenes are assets, so they can be loaded through the asset system:

\`\`\`swift
let scene = try await AssetsManager.load(Scene.self, at: "@res://game_scene.ascn")

world.spawn("Spawned scene") {
    DynamicScene(scene: scene)
}
\`\`\`

The spawned scene can attach its entities and resources under a parent entity.

### Hot reloading scenes

Scene hot reloading is one of the most important iteration features. When a scene file changes, Ada can apply those changes to a running scene without requiring a restart or a full rebuild. This makes level editing and gameplay tuning much faster.

:::info
Hot reload is an early feature, but the direction is clear: edit data, see the result immediately, and stay focused on the game instead of the build loop.
:::

## Events

Games and apps need to communicate constantly: collisions begin, buttons are pressed, UI opens, enemies spawn, players connect, and systems need to react.

Ada supports both global event-style messaging and ECS frame events.

### EventManager

You can subscribe to an event and store the cancellable token:

\`\`\`swift
let cancellable = world.subscribe(
    on: CollisionEvents.Began.self
) { payload in
    // Handle collision.
}

world.eventManager.sendEvent(SomeEvent())

// Or send globally:
EventManager.default.sendEvent(SomeEvent())
\`\`\`

### ECS events

For ECS-native workflows, Ada provides \`Events\` and \`EventSender\`:

\`\`\`swift
@System
func HostConnection(_ events: Events<OnConnect>) {
    for event in events {
        print("User connected", event.userId)
    }
}

@System
func ConnectionUpdate(_ sender: EventSender<OnConnect>) {
    sender(OnConnect(userId: "player#123"))
}
\`\`\`

:::note
ECS events are frame events: they are stored only for the current frame.
:::

## Assets

The asset system lets you load and save game data. Assets are referenced through handles, which makes hot reloading possible.

For example, loading a texture looks like this:

\`\`\`swift
let texture: AssetHandle<Texture2D> = try await AssetsManager.load(
    Texture2D.self,
    at: "@res://my_texture.png"
)
\`\`\`

The \`@res://\` prefix points to your app resource directory. By default, Ada looks for an \`Assets\` or \`Resources\` folder in your target. You can also set the resource directory manually.

To load from a specific bundle:

\`\`\`swift
let texture: AssetHandle<Texture2D> = try await AssetsManager.load(
    Texture2D.self,
    at: "my_texture.png",
    from: Foundation.Bundle(path: "")
)
\`\`\`

To enable hot reloading for an asset, pass \`handleChanges: true\`:

\`\`\`swift
let texture: AssetHandle<Texture2D> = try await AssetsManager.load(
    Texture2D.self,
    at: "@res://my_texture.png",
    handleChanges: true
)
\`\`\`

### Adding a new asset type

You can add support for custom assets by implementing the [\`Asset\`](https://docs.adaengine.org/documentation/adaassets/asset) protocol:

\`\`\`swift
struct MyAsset: Asset {
    init(asset decoder: AssetDecoder) async throws {
        // Decode asset contents.
    }

    func encodeContents(with encoder: AssetEncoder) async throws {
        // Encode asset contents.
    }

    static func extensions() -> [String] {
        ["txt"]
    }
}
\`\`\`

This makes the asset available to the same loading pipeline as built-in textures, sounds, scenes, and other resources.

## Audio

Ada includes an \`AdaAudio\` module backed by miniaudio. You can load an audio resource and play it from an entity:

\`\`\`swift
let backgroundSound = try await AssetsManager.load(
    AudioResource.self,
    at: "@res://background.wav"
)

let player = world.spawn {
    Player()
}

player.prepareAudio(backgroundSound)
    .setLoop(true)
    .play()
\`\`\`

Audio can be attached to entities, which opens the door for spatial sound and gameplay-driven playback.

## Rendering

Rendering in Ada is split into modules and plugins. The current codebase includes:

- \`AdaRender\` for render abstractions, cameras, materials, meshes, textures, render pipelines, and render graphs.
- \`AdaSprite\` for 2D sprite rendering.
- \`AdaCorePipelines\` for built-in rendering pipelines and shaders.
- Metal support on Apple platforms.
- WebGPU support through Dawn/Swan where enabled.
- Shader compilation and transpilation infrastructure built around SPIR-V tooling.

This release already includes the foundation for both 2D and 3D rendering. The 2D path is the most mature today. 3D exists — including meshes, cameras, materials, and a cube demo — but it needs more work before it feels complete.

Render graphs are an important part of the future direction. They make rendering work explicit and composable, which should help the engine grow from simple sprite scenes to more advanced pipelines.

## Platforms and tooling

Ada is a Swift Package using Swift 6.2. The package currently declares Apple platform targets such as macOS 15, iOS 18, tvOS 18, and visionOS 2. It also contains conditional compilation and platform backends for Linux, Windows, Android, WASI/WebAssembly, Metal, WebGPU, X11, and browser runtimes.

Not every platform is equally mature yet. Apple platforms are the most ready today, while Windows, Linux, Android, and Web are part of the active cross-platform direction.

The repository also includes SwiftPM plugins and tools, including:

- an Ada web export plugin,
- WebGPU/Tint related build tooling,
- a texture atlas builder tool and plugins,
- shader transpilation tooling,
- generated documentation support through DocC.

## Examples

The repository includes examples under [\`Demos\`](https://github.com/AdaEngine/AdaEngine/tree/main/Demos), including:

- sprite rendering,
- many sprites / stress examples,
- custom materials,
- 2D lighting,
- transparency,
- text rendering,
- gamepad input,
- scene loading,
- LDtk tilemaps,
- scriptable components,
- collision events,
- UI examples such as buttons, text fields, scene views, animated text, and a Kanban board,
- a simple 3D cube example,
- small game demos such as Snowman Attacks.

Examples are important because they show what the engine can already do and also act as practical tests for engine workflows.

![Duck Hunt demo](images/main/duck_hunt.png "A small Duck Hunt style demo running with Ada.")

![Space Invaders demo](images/main/space_invaders.jpeg "A Space Invaders style demo from the Ada examples.")

## Why I built Ada

Making games was my childhood dream. I started learning Java because I wanted to make Minecraft mods. Later I became an iOS engineer, but the dream of building games never disappeared.

I spent a lot of free time learning Godot, exploring the game development community, and trying to understand how engines work internally. I started with a small Metal project, kept experimenting, and after years of work reached this milestone: the first Ada release.

I love open source. I love Swift. I have built many open source Swift projects, and I wanted to see what would happen if Swift was used not only for apps, but also for a full game engine.

Swift has a lot to offer: value types, protocol-oriented design, macros, structured concurrency, memory safety, strong tooling, and a syntax that is pleasant to write. The biggest problem is not the language — it is the idea that Swift belongs only to macOS and iOS development.

I do not believe that is true. Swift can be more than that. Ada is my attempt to help prove it.

## What's next?

Ada 0.1.0 is a beginning, not a finish line. The next phase is about expanding the engine, polishing the experience, and growing the community.

### More platforms

The long-term goal is to support as many platforms as possible. Swift is a safe and powerful language, and I believe it can be a great fit for cross-platform game development.

The next important platform work includes WebAssembly/WebGPU, Linux, Android, and continued Windows support.

### The editor

Game developers want to prototype faster and write less boilerplate. AdaUI gives us the foundation to build an editor with the same UI framework that games can use.

Building the Ada Editor in AdaUI is an important goal: it will improve the UI framework, validate the engine tooling, and make Ada more approachable for users who prefer visual workflows.

### 3D rendering and polish

The 2D feature set is the main focus of this release, but 3D support is already present and will continue improving. There is a lot of work to do: better materials, more complete rendering features, MSAA, richer scene tooling, model workflows, and more.

The engine also needs polish across many systems: asset workflows, hot reloading, editor integration, diagnostics, examples, and API design.

### Documentation and tutorials

The API is still unstable and documentation is sparse in places. In the near future, Ada needs more tutorials, better guides, and more examples that show complete workflows from project setup to finished game mechanics.

Good documentation is not optional. It is part of the engine.

## Join Ada

If any of this sounds interesting, please check out [Ada on GitHub](https://github.com/AdaEngine/AdaEngine), read the [tutorial series](https://docs.adaengine.org/tutorials/adaengine/), explore the examples, and join the discussion.

Ada is currently built by volunteers. If you want to help build a Swift game engine — with code, documentation, examples, testing, design feedback, or ideas — you are very welcome.

This is only version 0.1.0, but it is the start of something I have wanted to build for a long time.

Let's make games with Swift.
`,Ka=`---
title: "AdaEngine 1.0.0: From an Engine to a Game Development Environment"
slug: "introducing-adaengine-1-0-0"
description: "A new Ada Studio with AI agents and A2UI, AdaScript with AOT, native Android support, multiplayer, expanded 3D rendering, and Ada Cloud — what is new in AdaEngine 1.0.0."
date: "2026-10-11"
author: "SpectralDragon"
tags:
  - release
image: images/articles/ada-engine-release-1-0-0-visionos-designed.png
published: true
featured: true
---

![AdaEngine 1.0.0 release cover](images/articles/ada-engine-release-1-0-0-visionos-designed.png "AdaEngine 1.0.0 — Ada Studio in a spatial workspace.")

We are introducing **AdaEngine 1.0.0**, a major update to our open-source game engine built with Swift.

Our first public release established the foundation: ECS, rendering, scenes, assets, physics, audio, and AdaUI. Since then, we have been working to bring these capabilities together into a practical game development workflow.

Version 1.0.0 introduces a new Ada Studio with AI agents and interactive A2UI tools, significantly expands AdaScript, and adds native Android support, multiplayer, more advanced 3D rendering, and cloud infrastructure for sharing user-created games.

The journey from a first scene to a game you can share now runs through a connected set of tools.

## The new Ada Studio

The biggest addition is **Ada Studio**, a development environment for AdaEngine. It brings together project management, code, scenes, assets, interfaces, and game execution.

Studio supports both Swift and AdaScript projects. Its shared interface is built with AdaUI: we use our own UI framework for an everyday development tool and improve it through real workloads.

![Ada Studio desktop](images/studio/desktop.png "Ada Studio brings code, scenes, and development tools into one workspace.")

### Editor Mode

Editor Mode provides a workspace with a project navigator, document tabs, a scene viewport, and an Inspector.

You can create and edit 2D and 3D scenes, manage entity hierarchies, add components, and configure cameras, lighting, physics, and materials. Move, Scale, and Rotate tools let you work directly in the viewport, while Undo and Redo make experimentation easier.

The workspace can be split into two panes: keep code beside a scene, or edit several documents at once.

### Agent Mode

Desktop Studio now includes **Agent Mode**, a dedicated interface for developing with an AI agent.

Conversations and their results sit at the center of this mode. You can switch sessions, share selected code and images with an agent, open changed files, and return to the regular editor.

Both modes share the same documents and project state, making it easy to move between discussing a task and editing it yourself.

On macOS, Studio connects to external agents through the **Agent Client Protocol (ACP)**. Its catalog discovers installed agents and offers compatible adapters for Codex and Claude Code; it also recognizes Gemini CLI, OpenCode, GitHub Copilot, and Sloppy ACP. Compatible distributions can be installed and connected from Studio. Authentication stays with the selected agent.

Conversations are saved with the project. Switching sessions preserves drafts, attachments, and selected context, while a running task remains associated with its original conversation. An agent's changes can be opened in the regular editor and reviewed as a diff. Each project window runs one agent task at a time.

Agent Mode and the regular chat in Editor Mode share the same tools. The interface changes how the workspace is organized; available actions depend on the capabilities of the current host.

![Agent Mode in Ada Studio](showcases/adaengine-1-0-0/agent-mode.png "Agent Mode: project sessions, context, and a document workspace.")

### Tilemap Editor and assets

Studio now has a built-in tilemap editor with painting, erasing, layers, a tile palette, zoom, and panning.

The tileset editor configures tile sources and their geometry. For 2D lighting, you can define light-occlusion polygons and override them for individual map cells.

Studio also includes a texture atlas editor, image previews, and GLB/glTF import. A model can be opened in a 3D preview, an animation clip selected, and the model placed in a scene.

![Tilemap Editor](showcases/adaengine-1-0-0/tilemap-editor.png "Editing the Medieval Arena map: canvas, layers, and tile palette.")

### Code Editor and debugging

The code editor supports syntax highlighting for Swift, AdaScript, YAML, and GLSL, along with completion, hints, definition navigation, and diagnostics. Search works within a file or across the project.

Swift projects on macOS have integrated **LLDB** support: breakpoints, stepping, threads, call stacks, variables, watches, and a command console.

AdaScript supports diagnostics, execution in Play, and hot reload. Full execution debugging for AdaScript remains a future step.

## AI agents: from an idea to a working scene

Studio agents work with the project itself: code, scenes, assets, settings, and execution results. On desktop, these capabilities are exposed through editor tools and MCP; on mobile, they are provided by the embedded agent runtime.

### Project context and engine knowledge

An agent can read the project structure, retrieve exact API and component descriptions, find documentation, and open examples. Reference material ships with Studio and is available offline.

This helps the agent use existing engine features and work with actual component fields. Scene tools support reading and structured changes, with document revision checks and Undo.

### Images, tiles, and 3D assets

Images can be attached to a conversation as visual references. Mobile Studio also supports pasting images and annotating screenshots to communicate a desired result or a problem more precisely.

Agent tools cover several parts of asset preparation:

- Creating procedural textures: solid colors, gradients, checkerboards, noise, and flat normal maps.
- Generating and editing images when an image provider is configured.
- Reading, editing, and packing texture atlases.
- Creating tilesets and editing tilemap layers and cells.
- Validating and importing GLB/glTF files, and inspecting model structure, materials, skeletons, and animation clips.
- Changing PBR parameters and assigning textures to model materials.
- Searching online reference material and downloading assets into the project for subsequent validation.

The available tools depend on the platform. Importing and configuring an existing 3D model is supported; rig creation and skeletal keyframe editing require separate tools.

### Game development harness

We added the built-in **\`ada-game-builder\`** workflow to help an agent move through the full development cycle, from a game mechanic to a result that can be checked.

It covers scenes and scripts, assets, desktop and touch controls, HUDs, restarting the game, and verification. For longer tasks, the workflow uses project notes about design and progress to preserve decisions between sessions.

Studio ships with skills for 3D assets, materials, animations, and UI forms. An agent can find and read the relevant instructions as it works. Mobile Studio can also import custom Markdown skills and store persistent instructions.

### Checking results and fixing errors

An agent can start builds, read diagnostics and logs, validate scenes, and run isolated simulations. Mobile simulation lets it supply keyboard input, advance a game by several frames, and inspect entity positions and component values.

Visible Play and completed GPU-frame capture are available for visual checks. On mobile, the agent can send a captured frame to a configured vision model for analysis. Desktop tools also expose CPU metrics and profiler recordings for embedded game sessions.

Builds, simulation, and visible execution check different aspects of a project. Logic checks help find behavioral errors; rendering, audio, networking, and touch interaction need to be checked in Play.

### Mobile agents and background tasks

On iPhone and iPad, the agent runs inside Studio and uses tools scoped to the current project. You can select a provider and model, configure step limits and repair attempts after a failed check, and choose whether Play opens automatically.

On iOS/iPadOS 26, user-started tasks can continue in the background through the system's continued processing mechanism. An activity shows the current phase, duration, and errors. The system controls available background time; Play rendering and frame capture require the app to be open.

## A2UI: interactive tools inside the chat

**A2UI** lets an agent respond with an interactive interface. The agent describes a form declaratively, and Studio renders it with native AdaUI components inside the conversation. Elements can appear incrementally as the response arrives.

Our forms catalog includes text, rows, columns, buttons, input fields, toggles, selectors, and numeric sliders. Values are bound to the form's data model. Required fields and allowed ranges are validated locally: errors appear beside the inputs, and an invalid form cannot be submitted.

::video[Native A2UI controls](showcases/adaengine-1-0-0/a2ui-controls.mp4 "A2UI in Studio: an NPC role selector, dialog toggle, and slider. The form uses demonstration data; the video shows local controls." poster="showcases/adaengine-1-0-0/a2ui-controls.png")

### From a form to a game interface

For example, you can ask an agent to prepare an NPC configuration form with a name, behavior parameters, and dialog options. When you submit the form, its values return to the original session, and the agent continues with your choices.

A generated UI preview can be opened with **Open in UI Designer**. Studio creates a regular \`.ui\` project asset that you can edit visually or in YAML, save, and include in your game. Export preserves native components, bindings, current values, and form validation. Button actions connect to application logic through the usual AdaUI mechanisms.

On iPhone, **Open UI Source** opens the exported asset in the file editor. This hands the interface over to the project; later manual Designer changes are not automatically sent back to the agent.

![An A2UI form in UI Designer](showcases/adaengine-1-0-0/ui-designer-npc.png "NPCProfile.ui: a form exported from A2UI and opened in the regular UI Designer.")

### Scene tools

A chat card can become a small editor tool. An agent might create an NPC placement card with a copy count and spacing, or a color card with a system color picker and an Apply button.

Supported local actions run directly in Studio without another model request. Cards can duplicate an entity subtree, change a registered color field, or apply several scene edits in one transaction.

Studio checks the scene revision before applying an edit. If the document changed independently, a stale card asks for refreshed data. Desktop changes enter the regular Undo/Redo history; an iPhone card stores the information needed to undo its latest application. These changes affect the scene being edited; an already running Play session must be restarted.

### Native UI on desktop and iPhone

The same cards are available in macOS ACP chat and embedded iPhone chat. Their state and entered values are saved with the session. Form submissions return to the conversation that created them and preserve the current message draft.

Inside the engine, the integration is provided by **\`AdaA2UI\`**, an A2UI v0.9.1 adapter with its own forms catalog. It can be added to AdaUI applications and connected to an agent through event callbacks. Interactive responses can therefore become part of your own development tools as well as Studio.

## Studio on desktop and mobile

Desktop Studio provides a workspace with multiple panes, build tools, debugging, and Git integration.

Mobile Studio is adapted for iPhone and iPad. On iPhone, project navigation, files, code, scenes, Play, and chat have dedicated screens. iPad offers a wider workspace.

AdaScript projects can be edited and run in the embedded runtime on a mobile device, making phones and tablets useful for prototyping and testing touch controls.

![Ada Studio mobile](images/studio/mobile-play-device.png "Checking a game in Play on iPhone.")

### Ada Player

**Ada Player** lets you send a supported project from Studio to another device for testing.

Studio discovers Players on the local network, connects through a pairing code, transfers the project, and receives execution messages. This shortens the path between changing a game and checking it on a device.

### visionOS and spatial applications

Version 1.0.0 introduces a foundation for immersive visionOS applications.

AdaEngine can render a world in a fully immersive space, use separate projections for each eye, and support spatial interaction with objects. Compatible devices can use foveated rendering.

AdaUI panels can be placed in spatial windows through the native host. The [Immersive Garden](https://github.com/AdaEngine/Ada/tree/main/Demos/ImmersiveGarden) example combines a game world with control tools. This is a foundation for spatial applications; a full Studio port to visionOS and a general XR export path are still ahead.

## AdaScript: a language for game logic

**AdaScript** is a scripting language integrated with AdaEngine and Ada Studio. It lets you write game logic, define components and systems, attach behavior to entities, and use engine APIs.

The language uses \`.ada\` files and supports functions, classes, structs, collections, and asynchronous operations. It is dynamically typed by default; strict type checking can be enabled for individual files or an entire project.

### Project structure and the .ada directory

An AdaScript project is a regular directory containing source files, assets, and configuration. Scripts with the \`.ada\` extension live in \`Sources/\`, while the hidden \`.ada/\` directory stores project settings and Studio's working data.

A small game project might look like this:

\`\`\`text title="MyGame/"
MyGame/
├── .ada/
│   └── project.json
├── Sources/
│   ├── PlayerController.ada
│   ├── Health.ada
│   ├── GameRules.ada
│   └── HealthRegeneration.ada
└── Assets/
    ├── Scenes/
    │   └── Main.ascn
    ├── Maps/
    │   └── Level.tilemap
    ├── Tiles/
    │   └── Level.tileset
    ├── Textures/
    │   └── Player.png
    └── UI/
        └── HUD.ui
\`\`\`

\`Sources/\` contains game logic: systems, components, resources, and scriptable behavior. \`Assets/\` contains scenes, images, models, audio, tilemaps, and UI assets. These directory paths can be changed in project settings.

The main configuration file is **\`.ada/project.json\`**. It defines the project name, build system, file locations, entry point, runtime plugins, and other settings. Here is a configuration for a 2D game:

\`\`\`json title=".ada/project.json"
{
  "schemaVersion": 3,
  "project": {
    "name": "MyGame"
  },
  "build": {
    "system": "adascript"
  },
  "paths": {
    "sources": "Sources",
    "assets": "Assets",
    "resourceRoots": ["Assets"]
  },
  "runtime": {
    "moduleName": "MyGame",
    "entry": {
      "scene": "Assets/Scenes/Main.ascn"
    },
    "plugins": {
      "preset": "game2d",
      "presetVersion": 1
    }
  },
  "editor": {
    "startupScene": "Assets/Scenes/Main.ascn"
  }
}
\`\`\`

\`build.system\` selects the AdaScript path. \`paths\` defines source and asset locations, \`runtime.entry.scene\` selects the game's initial scene, and \`runtime.plugins\` controls the available engine features. The \`game2d\` and \`game3d\` presets can be extended through \`enable\` and \`disable\`. \`editor.startupScene\` specifies a fallback scene for execution inside the editor.

The same file stores named input actions in \`inputActions\`, launch parameters, and runtime window settings. The main fields are available through **Project Settings**, so everyday configuration can be done in Studio's interface.

Additional files and directories appear inside \`.ada/\` as you work:

- \`workspace/\` — open-document state and project agent sessions.
- \`chat-ui/\` — additional A2UI card state and undo data in mobile Studio.
- \`libraries.lock.json\` — AdaScript dependencies pinned to exact Git commits.
- \`libraries/\` — the installed source files of those libraries.
- \`cli-build/\` — the build cache created by the CLI.
- \`android-signing/\` — development-signing keys for Android APKs, created during export.
- \`publication-images/\` — the cover and screenshots selected for publishing from Studio.

The relevant tools create these directories as needed. \`project.json\` describes the game, while \`workspace/\` and \`cli-build/\` support editing and builds. A library lockfile can be saved to restore pinned versions on another computer; keeping \`libraries/\` alongside it lets you share a project with dependencies already installed for offline work.

In a portable AdaScript project, Studio's host provides the application lifecycle, so a separate \`main()\` and \`Package.swift\` are not needed. Swift projects additionally use \`Package.swift\` and connect AdaScript through a build plugin. Exports go to \`Exports/macOS\`, \`Exports/Web\`, or \`Exports/Android\` by default.

### Annotations

Annotations connect AdaScript declarations to the engine:

- \`@system\` registers an ECS system.
- \`@component\` and \`@resource\` describe game data.
- \`@query\` and \`@res\` provide access to components and resources.
- \`@scriptable\` attaches behavior to an entity.
- \`@export\` makes behavior fields persistent and editable in the Inspector.
- \`@tool\` declares a Studio tool with its own \`.ui\` panel and editor actions.
- Network annotations describe commands, RPCs, and replicated components.

### What id means in annotations

\`id\` is a declaration's stable name in the engine. In \`@component(id: "game.health")\`, for example, \`game.health\` identifies the Health component type. That type can be attached to many entities, each with its own health values and numeric \`entity.id\`.

Identifiers are used for registration, Swift-side data lookup, scriptable behavior persistence, system ordering, and network schemas. An explicit \`id\` lets you rename a class in source code while keeping its external identity. Changing the ID itself requires updating references and accounting for previously saved data.

The \`game.\` prefix is a useful naming convention. It does not create a language namespace. A library can choose its own prefix, such as \`combat.health\`, to avoid collisions with game declarations.

A \`@system\` ID defaults to the class name; an explicit ID is useful for \`@after\` and \`@before\`. An ID is required for \`@scriptable\`, \`@tool\`, and network declarations such as \`@network_command\`, \`@rpc\`, and \`@replicated_component\`. Where supported, \`version\` separately describes the declaration or schema version. Identifiers must be unique within their respective registry.

### Entity data: @component

A component stores data for an individual entity. Each character can have its own current and maximum health:

\`\`\`adascript title="Health.ada"
@component(id: "game.health")
struct Health {
    @export var current = 100.0;
    @export var maximum = 100.0;
}
\`\`\`

### Entity behavior: @scriptable

\`@scriptable\` describes behavior that can be attached to an entity in a scene. This example moves a character horizontally, with \`speed\` exposed in Studio's Inspector:

\`\`\`adascript title="PlayerController.ada"
@scriptable(id: "game.player-controller")
class PlayerController {
    @export var speed = 5.0;

    @component(required: true)
    var transform: Transform;

    @res
    var input: Input;

    func update(context) {
        var right = input.getActionStrength("MoveRight");
        var left = input.getActionStrength("MoveLeft");
        var direction = right - left;
        var distance = direction * speed * context.deltaTime;

        var position = transform.position;
        position[0] += distance;
        transform.position = position;
    }
}
\`\`\`

\`@component(required: true)\` binds the property to the Transform of the entity the script is attached to. \`@res\` provides the current world's Input resource. The \`MoveLeft\` and \`MoveRight\` actions are configured in **Project Settings → Input Bindings**; this example requires the Input plugin to be enabled.

\`@scriptable\` supports \`ready(context)\`, \`update(context)\`, \`fixedUpdate(context)\`, \`event(events, context)\`, and \`destroy(context)\`. \`ready\` runs when behavior is attached, and \`destroy\` runs when it is removed. Asynchronous tasks can wait for asset loading, the next frame, or a timer while remaining associated with the game object's lifecycle.

### Shared world settings: @resource and @res

A resource stores shared world data. For example, health regeneration speed can be moved from individual characters into game rules:

\`\`\`adascript title="GameRules.ada"
@resource(id: "game.rules", autoInsert: true)
struct GameRules {
    @export var healthRegenPerSecond = 5.0;
}
\`\`\`

In a SwiftPM project, \`AdaScriptBuildPlugin\` generates backing types for components and resources. \`autoInsert: true\` inserts the resource into the world before systems are installed. A system or scriptable behavior can then access it with \`@res var rules: GameRules;\`.

### Systems and scheduling: @system

\`@system\` registers a class as an ECS system. Its \`update(context)\` method is called by the selected **scheduler**, a stage in the world's system execution cycle. The \`scheduler\` parameter selects that stage, and \`context.deltaTime\` provides its current time step.

The standard cycle includes:

- \`startup\` — initialization once on the scheduler runner's first update; it runs again when the world is restarted.
- \`preUpdate\` — the stage before the main update.
- \`update\` — the main game logic stage and the default when \`scheduler\` is omitted.
- \`postUpdate\` — the stage after the main update.

A startup system can create an entity with components from our project:

\`\`\`adascript title="GameSetup.ada"
@system(scheduler: "startup", id: "game.setup")
class GameSetup {
    func update(context) {
        context.world.spawn([Transform(), Health()]);
    }
}
\`\`\`

Even in \`startup\`, the system entry point is named \`update(context)\`. The class constructor creates the script instance; the startup system gets access to the game world and performs initial setup. The HealthRegeneration system below uses \`update\` and executes its logic whenever that stage runs.

Ordering can be expressed with \`@after\` and \`@before\`, using another system's ID:

\`\`\`adascript title="System ordering"
@after(id: "game.health-regeneration")
@system(scheduler: "update", id: "game.health-observer")
class HealthObserver {
    func update(context) {
        // Logic that runs after HealthRegeneration.
    }
}
\`\`\`

Both systems must belong to the same AdaScript module and scheduler. Unknown IDs, self-dependencies, and cycles are rejected during validation. Additional schedulers can be set up on the Swift side of the host. The \`fixedUpdate(context)\` callback on \`@scriptable\` belongs to the behavior lifecycle; it is a separate mechanism from these standard stages.

### Working with many entities: @query

A system accesses matching entities through \`@query\`. Here it updates every Health component using the shared GameRules resource from the previous example:

\`\`\`adascript title="HealthRegeneration.ada"
@system(scheduler: "update", id: "game.health-regeneration")
class HealthRegeneration {
    @query(Health)
    var characters;

    @res
    var rules: GameRules;

    func update(context) {
        var amount = rules.healthRegenPerSecond
            * context.deltaTime;

        for (var entity in characters) {
            if (entity.health.current < entity.health.maximum) {
                var next = entity.health.current + amount;

                if (next > entity.health.maximum) {
                    next = entity.health.maximum;
                }

                entity.health.current = next;
            }
        }
    }
}
\`\`\`

\`@system\` registers the system with the scheduler, while \`@query(Health)\` selects active entities with a Health component. Inside the loop, the component is available as \`entity.health\`; writing a field updates ECS storage. This is useful for shared logic that processes many objects.

A query can fetch several components and apply filters. If the project registers Player and Frozen components, a system can declare this query:

\`\`\`adascript title="A query with filters"
@query(Health, Transform, with: Player, without: Frozen)
var players;
\`\`\`

Its rows expose \`entity.health\` and \`entity.transform\`. Filters check component presence: the query includes entities with Player that do not have Frozen. Query row data is valid during the current iteration; keep the values you need between system updates rather than retaining row references.

### Asynchronous logic: async/await

AdaScript can express a sequence of operations with **\`async func\`** and **\`await\`**. Waiting suspends that task while the game continues updating. A regular callback starts such a function with \`Tasks.start(...)\`:

\`\`\`adascript title="DelayedAnnouncement.ada"
async func announceLater() {
    await Time.sleep(1.0);
    System.print("One game-time second passed");

    await Tasks.nextFrame();
    System.print("The next frame is ready");
}

@system(id: "game.announcement")
class AnnouncementSystem {
    var started = false;

    func update(context) {
        if (!started) {
            started = true;
            Tasks.start(announceLater());
        }
    }
}
\`\`\`

\`Time.sleep\` uses scheduler game time and stops advancing when the scheduler is paused. \`Time.sleepRealTime\` uses a monotonic clock; the task still resumes at a dispatch point in the scripting runtime. \`Tasks.nextFrame\` waits for the next frame. \`Tasks.start\` returns a handle with \`status()\` and \`cancel()\`.

Asynchronous operations are also available for assets. Loading an image returns a result that can be checked after \`await\`:

\`\`\`adascript title="Asynchronous asset loading"
async func loadPlayerTexture() {
    var result = await Assets.loadAsync(
        "@res://Textures/Player.png"
    );

    if (result.isSuccess()) {
        System.print("Player texture is ready");
    } else {
        System.print(result.message());
    }
}
\`\`\`

Start this function with \`Tasks.start(loadPlayerTexture())\` as well. Operations that can fail expose \`isSuccess()\`, \`value()\`, \`errorCode()\`, and \`message()\`. Saves provides asynchronous persistence operations, and \`Tasks.promise()\` can connect a wait to the result of another callback.

The \`update(context)\` methods and \`@scriptable\` callbacks remain synchronous; they start a separate async function. Contexts, query rows, resource views, and commands are valid only within the callback. Pass independent values into a task, such as a number, a string, or a copy of the data you need. Types whose lifetime is tied to a callback can be marked \`@nonsendable\`; the runtime also checks transferred values. Continuations execute in the serialized scripting runtime, rather than on a background I/O thread.

### Accessing AdaScript data from Swift

In a SwiftPM project, \`AdaScriptBuildPlugin\` generates backing types for AdaScript components and resources, and the generated plugin registers them with the engine. The names of those Swift types are an internal generation detail. Integrations should use the declaration name or its stable ID, such as \`Health\` or \`game.health\`.

After installing \`AdaScriptPluginsGenerated()\`, a component can be retrieved from the same world by ID and its reflected fields read. Here, \`world\` is the game World and \`playerID\` identifies an existing entity with Health:

\`\`\`swift title="Reading Health from Swift"
import AdaECS

if let component = world.getComponent(
    named: "game.health", from: playerID
), let descriptor = ComponentReflectionRegistry.descriptor(
    named: String(reflecting: type(of: component))
) {
    let fields = descriptor.readPayload(from: component)
    if case .double(let current)? = fields["current"] {
        print("Health:", current)
    }
}
\`\`\`

Similarly, \`world.getResource(named: "game.rules")\` returns a registered resource as \`any Resource\`. The scripting bridge provides an SPI for reading a specific field of a generated resource:

\`\`\`swift title="Reading GameRules from Swift — SPI"
@_spi(Scripting) import AdaECS

if let resourceType = RuntimeTypeRegistry.resourceType(
    named: "game.rules"
), let descriptor = RuntimeResourceReflectionRegistry
    .descriptor(for: resourceType),
   let field = descriptor.fields.first(where: {
       $0.key == "healthRegenPerSecond"
   }),
   case .double(let rate)? = world.readResourceField(
       type: resourceType, field: field
   ) {
    print("Regeneration per second:", rate)
}
\`\`\`

The SPI supports scripting bridge integrations and can change separately from the public API. Read data during a coordinated world access phase, such as a Swift system that declares access to the relevant data. The resulting values can be passed to Swift UI code or other game logic.

Runtime-defined components in the portable runtime and AOT use a world-local schema and payload. They can be read without knowing the generated Swift type:

\`\`\`swift title="A runtime component from Swift"
import AdaECS

if let schema = world.runtimeComponentDescriptor(
    named: "game.health"
), let health = world.getRuntimeComponent(
    schema.componentID, from: playerID
), let index = schema.fields.firstIndex(where: {
    $0.key == "current"
}) {
    print(health.values[index])
}
\`\`\`

In native AOT, scalar resources declared by the compiled module are stored in the public \`AdaScriptNativeResources\` resource container. Its \`values\` is indexed first by resource ID, then by field name:

\`\`\`swift title="A native AOT resource from Swift"
import AdaECS
import AdaScripting

let rules = world.getResource(AdaScriptNativeResources.self)
let rate = rules?.values["game.rules"]?["healthRegenPerSecond"]
print(rate as Any)
\`\`\`

This last path applies to builds with native AOT support. If data is originally declared in Swift, it can be retrieved through regular typed ECS APIs, while AdaScript binds the same data with \`@query\`, \`@component\`, and \`@res\`. Choose the API that matches how your project registers its data.

### Studio tools: @tool

Studio on macOS lets you create **custom tools in AdaScript**: add a panel to the right sidebar, bind its controls to script fields, and perform actions on the open scene. \`@tool\` describes the tool, \`.ui\` defines its interface, and AdaScript methods implement its behavior.

Tools live beside the game in a dedicated project directory:

\`\`\`text title="Tool module"
Tools/
└── LevelHelper/
    ├── LevelHelper.ada
    └── LevelHelper.ui
\`\`\`

Each directory directly inside \`Tools/\` forms a module. Its \`.ada\` files and relative imports are compiled together. The reserved \`Tools/\` directory is excluded from game script loading: the tool runs in the editor rather than becoming a game system.

For example, **Level Helper** creates a row of entities with Transform. Its annotation defines a stable ID, name, version, API version, and document permissions; \`activate(editor)\` registers the panel:

\`\`\`adascript title="LevelHelper.ada"
@tool(
    id: "studio.level-helper",
    name: "Level Helper",
    version: "1.0.0",
    api: 1,
    platforms: ["macos"],
    permissions: [
        "editor.documents.read",
        "editor.documents.write"
    ]
)
class LevelHelper {
    @export var count = 3.0;
    @export var status = "Open a scene, then Generate.";

    func activate(editor) {
        editor.addPanel(
            id: "level-helper",
            title: "Level Helper",
            location: "right",
            ui: "LevelHelper.ui"
        );
    }

    func generate(editor) {
        if (editor.scenePath == "") {
            status = "Open a scene first.";
            return;
        }

        var total = Math.clamp(count, 1.0, 32.0);
        var i = 0;
        while (i < total) {
            editor.createEntity(
                name: "Generated " + (i + 1),
                x: i * 48.0,
                y: 0.0
            );
            i += 1;
        }
        status = "Generated " + total + " entities.";
    }
}
\`\`\`

The \`LevelHelper.ui\` path is resolved relative to the declaring \`.ada\` file and must remain inside the module. In Studio API 1, a tool can register up to eight right-sidebar panels with unique IDs. The host removes them when the tool is disabled or its project closes; the script can additionally implement \`deactivate()\` if needed.

The interface uses the regular \`.ui\` format and can be edited in UI Designer. Our example needs a slider, a button, and a result label:

\`\`\`yaml title="LevelHelper.ui"
format: ada.ui
schemaVersion: 1
inputs:
  - name: count
    type: number
    defaultValue: 3
  - name: status
    type: string
    defaultValue: Ready
actions:
  - name: generate
root:
  id: level-helper
  type: VStack
  arguments:
    spacing: {value: 12}
  children:
    - id: count
      type: Slider
      arguments:
        value: {binding: count}
        min: {value: 1}
        max: {value: 32}
        step: {value: 1}
    - id: generate
      type: Button
      arguments:
        title: {value: Generate}
      actions:
        action: generate
    - id: status
      type: Text
      arguments:
        text: {binding: status}
\`\`\`

Each input binds to an \`@export\` field with the same name and a compatible type. Strings, booleans, integers, and floating-point numbers are supported. The panel starts with the script instance's values; \`.ui\` \`defaultValue\` fields are used for Designer previews. Before an action, control values are copied to the tool's fields, and after it finishes, values are copied back to the interface. The \`generate\` action calls \`func generate(editor)\`; tool callbacks are synchronous.

**Scene changes are applied as one batch.** \`editor.createEntity(...)\` stages entities, and Studio applies them only after the callback succeeds. In this example, one Generate creates the entire row, one Undo removes it, Redo restores it, and regular Save persists the scene. If the callback fails or the original scene has changed, the staged batch is not applied. \`editor.scenePath\`, \`editor.sceneRevision\`, and \`editor.entityCount\` are also available; an action can create up to 256 entities.

**Studio manages enablement and access.** Tools are disabled by default. The wrench button opens Studio Tools; before running code or displaying \`.ui\`, Studio asks you to review permissions and choose **Allow and Enable**. Versions, enablement, and access settings live in **Settings → Project → Studio Tools**. **Revoke Access** immediately removes panels and cancels pending actions. Consent is stored locally for each project; changes to the source location, API, platforms, or requested permissions require consent again.

The current runtime implements \`editor.documents.read\` and \`editor.documents.write\`. The static schema can describe a wider permission set, but this host does not yet expose network, process, clipboard, or workspace file APIs.

**Reload lets you refine a tool without closing the project.** A valid \`.ui\` reload preserves entered values. A successful script reload replaces its instance and registrations; an invalid script or interface keeps the previous working version active and reports diagnostics. The runtime bounds callback execution time, loops, memory, and recursion.

This layer is available **on macOS**. iPadOS support, command, menu, and formatter registration, async callbacks, and marketplace distribution remain future steps. Panels use \`.ui\`.

The [Studio Tools documentation](https://github.com/AdaEngine/Ada/blob/main/Editor/Documentation/StudioTools.md) covers lifecycle, bindings, scene access, and reload. You can copy the [complete Level Helper example](https://github.com/AdaEngine/Ada/tree/main/Editor/Documentation/Examples/StudioTools/LevelHelper) into your project's \`Tools/LevelHelper/\` directory.

### AdaScript addons: reusable libraries

Game logic can be packaged as an **AdaScript addon**, a library of functions, ECS systems, and scriptable behavior. Shared damage logic, inventory systems, or a character controller can be reused across games.

A library lives in a separate repository. Its root contains \`ada-library.json\`, which describes its identifier, version, source files, and dependencies:

\`\`\`text title="CombatAddon/"
CombatAddon/
├── ada-library.json
└── Sources/
    └── Damage.ada
\`\`\`

\`\`\`json title="ada-library.json"
{
  "schemaVersion": 1,
  "id": "example.combat",
  "version": "1.0.0",
  "api": 1,
  "sources": ["Sources/Damage.ada"],
  "dependencies": []
}
\`\`\`

\`sources\` lists all library source files, including imported helper files. For example, \`Damage.ada\` might contain this function:

\`\`\`adascript title="CombatAddon/Sources/Damage.ada"
func applyDamage(current, damage) {
    var remaining = current - damage;
    if (remaining < 0) {
        return 0;
    }
    return remaining;
}
\`\`\`

In Studio, open **Settings → Project → AdaScript Libraries**, enter a public GitHub repository and a tag or commit, then select **Install / Update**. Rebuild the game or restart Play after installation. The current provider supports public GitHub repositories.

A function from an installed addon can be imported by library ID, independently of where the game script is located:

\`\`\`adascript title="Importing into a game"
import { applyDamage }
    from "@example.combat/Sources/Damage";

var health = applyDamage(100.0, 25.0); // 75
\`\`\`

Library \`@system\` and \`@scriptable\` declarations participate in normal game module registration. Required engine features are enabled through Runtime Settings. Libraries share the game's module, so their classes, functions, and annotation IDs must have unique names.

Installation stores source files in \`.ada/libraries/\` and exact Git commits in \`.ada/libraries.lock.json\`. Libraries can have their own dependencies, also pinned to specific commits. **Restore Locked Libraries** restores the same set on another computer. Builds and execution use installed sources and do not download libraries automatically.

For a fully offline project, keep both the lockfile and \`.ada/libraries/\`. In a SwiftPM game, \`AdaScriptBuildPlugin\` includes addon sources in the build alongside game scripts. Libraries make it easier to share reusable logic while keeping dependencies reproducible.

### Hot reload

Studio can update supported AdaScript game logic during execution. If a new script version contains an error, the previous version continues running.

This shortens the feedback loop for behavior changes. Data schema changes and other incompatible edits may require restarting the game.

### The new AOT compiler

The release includes an **experimental AOT path** for AdaScript.

Supported code is compiled ahead of time into native code. The path covers ECS integration, scriptable object lifecycles, and asynchronous coroutine tasks.

Studio uses it to export AdaScript projects to macOS, Web, and Android. AOT is currently limited to a supported subset of the language; unsupported constructs produce explicit errors.

## Native Android support

AdaEngine now has a native Android host. Game code runs in Swift, and rendering uses WebGPU through Swan/Dawn over Vulkan.

Standalone Studio on macOS can select Android as a run target, discover a device or emulator, build an APK, install it, and launch the game. Studio can also start a configured Android Virtual Device.

Export supports AdaScript AOT and compatible Swift AdaEngine projects. The current workflow creates development-signed APKs; producing an AAB and publishing to Google Play require a separate process.

![Android Build & Export](showcases/adaengine-1-0-0/android-build-export.png "Configuring the Android SDK, NDK, and JDK in Studio before export and launch.")

## Networking and multiplayer

The new **AdaMultiplayer** module provides infrastructure for local and internet multiplayer.

It includes a host-authoritative model, replication of registered ECS components, typed commands and RPCs, and interpolation of received state.

Transport is separate from game logic. You can use a local connection, the Ada Cloud relay, or a custom transport implementation. AdaScript provides annotations for network data and commands.

This keeps the game model in ECS while making the data shared between participants explicit.

### A replicated component: player state

In AdaScript, a network component is declared with \`@replicated_component\`. It already acts as an ECS component, so an additional \`@component\` annotation is unnecessary. Here is a small example of movement along one axis:

\`\`\`adascript
@replicated_component(
    id: "game.network-player",
    version: 1,
    authority: "host",
    visibility: "all_peers"
)
struct NetworkPlayer {
    @network_field(1) var peer = "";
    @network_field(2, interpolate: "linear") var x = 0.0;
    @network_field(3) var health = 100;
    @local var animationTime = 0.0;
}
\`\`\`

The host stores authoritative state and sends \`peer\`, \`x\`, and \`health\` to participants. Linear interpolation is enabled for the numeric \`x\` coordinate. \`animationTime\` stays local, so each client can use it for its own character animation.

\`id\` identifies the component's network schema. The numbers in \`@network_field(1)\`, \`(2)\`, and \`(3)\` identify fields within that schema. They are stable protocol tags, rather than array indices: preserve a field's tag when renaming it. Compatible builds must agree on \`id\`, \`version\`, field tags, and types.

On the host, a component can be created with a regular ECS command inside a system callback, passing the ID of the participant who owns the player:

\`\`\`adascript
context.world.spawn([
    NetworkPlayer(peer: session.localPeerID)
]);
\`\`\`

Here, \`session\` is the \`AdaScriptMultiplayerState\` resource. For a remote player, the host passes that participant's peer ID instead of \`session.localPeerID\`. The generated creation path for the replicated component adds a replication marker to the entity; no manually assembled snapshot is needed.

### Working with a component and declaring an RPC

A peer sends movement intent, and the host calculates the new coordinate. The \`receiveMove\` method is declared as an RPC. Its body records input separately for each sender, which is then applied to the corresponding component through \`@query\`:

\`\`\`adascript
@system(scheduler: "update", id: "game.network-movement")
class NetworkMovementSystem {
    @res var input: Input;
    @res var multiplayer: Multiplayer;
    @res var session: AdaScriptMultiplayerState;
    @query(NetworkPlayer) var players;

    var movementByPeer = [:];

    @rpc(
        id: "game.move-player",
        version: 1,
        direction: "peer_to_host",
        delivery: "unreliable_sequenced",
        channel: "input"
    )
    func receiveMove(@network_field(1) moveX = 0.0) {
        // The transport provides source; the sender cannot supply it.
        if (moveX < -1.0) moveX = -1.0;
        if (moveX > 1.0) moveX = 1.0;
        movementByPeer[source] = moveX;
    }

    func update(context) {
        var moveX = input.getActionStrength("MoveRight")
            - input.getActionStrength("MoveLeft");

        if (session.role == "peer") {
            multiplayer.send(receiveMove(moveX));
            return;
        }
        if (session.role != "host") return;

        // Apply the host player's local input directly.
        movementByPeer[session.localPeerID] = moveX;

        for (var row in players) {
            var movement = movementByPeer[row.networkPlayer.peer];
            if (movement == null) continue;

            // A regular write to the ECS component on the host.
            row.networkPlayer.x += movement * 175.0 * context.deltaTime;
        }
    }
}
\`\`\`

Calling \`receiveMove(moveX)\` constructs a typed command; \`multiplayer.send(...)\` queues it for transmission. The body of \`receiveMove\` executes **on the receiver before \`update\`**, with \`source\` holding the sender ID supplied by the transport. The body is not automatically called on the sending client. The example therefore handles the host's own input directly.

We match \`source\` to the \`NetworkPlayer.peer\` assigned by the host when creating the player. A client controls its own character without selecting someone else's entity through the payload. Input is clamped to −1 through 1; speed and the resulting coordinate are determined by the host. Once \`row.networkPlayer.x\` is updated, replication delivers the state to participants.

\`peer_to_host\` specifies the RPC direction. \`unreliable_sequenced\` suits continuously refreshed input: the next packet replaces a lost one, and stale packets are discarded. Commands that require guaranteed delivery and ordering use \`reliable_ordered\`. Like components, RPCs have stable \`id\`, \`version\`, and parameter tags.

The example assumes the multiplayer runtime is enabled, \`MoveRight\` / \`MoveLeft\` actions are configured, and the host creates players as they join the session. It is a foundation for movement logic; a game also needs to clear input on disconnects or timeouts and remove players who leave.

Read more in the documentation:

- [AdaScript: multiplayer schemas and RPCs](https://github.com/AdaEngine/Ada/blob/main/Sources/AdaScripting/AdaScripting.docc/AdaScriptLanguage.md#multiplayer-schemas) — declarations, command transmission, and receiver-side method execution.
- [AdaMultiplayer: runtime setup and transports](https://github.com/AdaEngine/Ada/blob/main/Sources/AdaMultiplayer/AdaMultiplayer.docc/AdaMultiplayer.md) — plugin configuration, entity replication, and network sessions in Swift.

![Medieval Arena](showcases/adaengine-1-0-0/medieval-arena.png "Medieval Arena: a 2D AdaScript game with network gameplay logic.")

## New AdaUI features

AdaUI has grown alongside Studio.

The animation system now includes transactions, \`withAnimation\`, binding animation, and selected-value changes. Navigation, tabs, sheets, and full-screen presentations have built-in transitions.

We also improved text handling, selection, writing directions, clipping, and interface updates.

A major addition is the **visual UI Designer**. Interfaces can be built as \`.ui\` assets, with editable hierarchies, properties, and modifiers, plus inputs, actions, and bindings. UI elements can bind to exported fields of gameplay behavior.

AdaUI is used in both games and Studio itself, continuously testing the framework against complex interfaces.

::video[AdaUI Kanban](showcases/adaengine-1-0-0/adaui-kanban.mp4 "AdaUI in practice: an interactive Kanban board. Recording from the engine's demo gallery." poster="showcases/adaengine-1-0-0/adaui-kanban.png")

## 2D improvements

Our 2D work focused on level creation and rendering correctness.

Tilemaps now have a complete workflow in Studio: tilesets, palettes, layers, map editing, and geometry configuration for lighting and shadows.

For sprites, we improved batching, size handling, and culling updates. Texture atlas tools are now part of the editor's asset workflow, making graphics easier to prepare and use.

::video[Sprite rendering](showcases/adaengine-1-0-0/sprite-rendering.mp4 "A 2D example from the engine's demo gallery, with many sprites in one game world." poster="showcases/adaengine-1-0-0/sprite-rendering.png")

## A major 3D update

AdaEngine's 3D capabilities have expanded substantially.

![Skeletal Garden](images/studio/skeletal-garden.png "Skeletal Garden: animated characters, materials, lighting, and a 3D game world.")

![Skeletal Garden overview](showcases/adaengine-1-0-0/garden-overview.png "Skeletal Garden: terrain, vegetation, and the central character area.")

### Box3D physics

We added integration with [Box3D](https://github.com/erincatto/box3d), a library for three-dimensional rigid-body physics.

The engine now has 3D bodies, collision shapes, and a character controller. Skeletal Garden uses them for movement, collisions, jumping, and terrain traversal.

::video[3D physics demonstration](showcases/adaengine-1-0-0/physics-3d.mp4 "Interacting 3D objects: a recording from the engine's archived demo gallery." poster="showcases/adaengine-1-0-0/physics-3d.png")

### Models and animation

GLB/glTF support covers model hierarchies, PBR materials, skeletons, and animation clips. GPU skinning and independent animation playback for model instances have been added.

Animation graphs support clip blending, additive layers, bone masks, and animation events. They can be edited and previewed in Studio.

### Lighting and effects

PBR rendering, image-based lighting, local lights, and shadows continue to develop.

We added cascaded directional shadows, **SSAO**, FXAA, and per-camera environment settings. SSAO adds depth where objects meet, while IBL uses the environment for lighting and reflections.

Move the slider to compare actual frames of the same scene with SSAO disabled and enabled.

::compare[SSAO: contact shadows in Skeletal Garden](showcases/adaengine-1-0-0/garden-no-ssao.png showcases/adaengine-1-0-0/garden-ssao.png "Without SSAO" "SSAO")

### MetalFX

Supported Metal devices can use spatial upscaling and temporal reconstruction through **MetalFX**.

The temporal path uses frame history and motion vectors from the camera, objects, and skeletal animation. UI is composited after image reconstruction and retains the output resolution.

::compare[MetalFX: spatial and temporal reconstruction, macOS / Metal](showcases/adaengine-1-0-0/garden-metalfx-spatial.png showcases/adaengine-1-0-0/garden-metalfx-temporal.png "Spatial" "Temporal")

These static frames are useful for inspecting detail. Temporal reconstruction quality in motion and rendering cost require separate measurements.

### WebGPU

WebGPU continues to develop as a portable graphics backend for AdaEngine. It is used for Web targets and by the native Android host over Vulkan.

Effect availability depends on the platform and backend capabilities.

![Skeletal Garden on WebGPU](showcases/adaengine-1-0-0/garden-webgpu.png "A Skeletal Garden frame from a native WebGPU run.")

## Performance

We reworked important ECS paths: entity creation, component composition changes, and query iteration. This included reducing unnecessary copies, ARC operations, and allocations, as well as correcting component lifetimes.

A local Release benchmark operating on **4,000 entities** produced these median CPU times:

- **Entity creation:** 179.18 ms → 4.43 ms.
- **Component insertion and removal:** 592.45 ms → 20.23 ms.
- **InsertCoW workload:** 299.37 ms → 10.13 ms.

These are before-and-after measurements of a specific ECS storage optimization. They were taken on Apple arm64 with Swift 6.2.4 in Release, using three warmups and 30 measured samples. They describe those workloads, rather than an overall FPS improvement or a comparison of every feature across releases. [Methodology and full results](https://github.com/AdaEngine/Ada/blob/main/Documentation/Performance/ECSStorageInPlace.md).

Studio also gained a **Performance panel and Timeline**: CPU update time, entity count, process memory, ECS system durations, and an event history with Chrome Trace export. This helps locate causes of delays while developing a game.

![Performance Timeline](showcases/adaengine-1-0-0/performance-timeline.png "A recorded CPU Timeline: world updates, ECS, and render graph nodes.")

## Ada Cloud and user-created games

**Ada Cloud** expands the ways games can be distributed.

UGC supports persistent versions, fixed files and metadata, moderation, and publication history. Each new version is reviewed separately, while the currently approved game remains available until its update is approved.

Community in Studio lets you discover games, read descriptions, view screenshots, and run supported AdaScript publications in the embedded player. Compatible multiplayer games offer Solo, Host, and room-code joining.

[Ada Store](https://store.adaengine.org/store) is also growing as a catalog of assets, scripts, templates, and tools. It complements the game library with materials for building your own projects.

## Automation through the CLI

Standalone Studio on macOS includes the **\`adastudio\` CLI**.

This is an important part of working with **AI agents**. An agent needs a way to check its changes: read project configuration, find script errors, and produce a build. The CLI provides that path through the terminal without opening a Studio window or connecting to its embedded chat. The same commands work for manual use and CI.

The CLI uses Studio's own project validator, AdaScript builder, and exporter. An agent works with saved files and receives results in a format suited to automation:

- \`doctor\` checks for the Build SDK and build tools.
- \`project inspect\` reads project configuration and structure without rewriting metadata.
- \`validate\` checks AdaScript, the entry scene, and runtime bindings.
- \`build\` packages an AdaScript game as a macOS application.
- \`export\` creates a supported build for macOS, Web, or Android.

For example, an agent can check a project and build it after making corrections:

\`\`\`bash title="Validating and building an AdaScript project"
STUDIO="/Applications/Ada Studio.app/Contents/MacOS/adastudio"

"$STUDIO" doctor --format json
"$STUDIO" project inspect --project ./MyGame --format json
"$STUDIO" validate --project ./MyGame --format json

"$STUDIO" build --project ./MyGame \\
  --target macos --configuration release \\
  --output ./Build/MyGame --format json
\`\`\`

With \`--format json\`, stdout contains one report with \`ok\`, \`exitCode\`, \`diagnostics\`, and paths to \`artifacts\`. Tool logs go separately to stderr. Diagnostics include an error code, message, and, when the compiler supplies them, a file, line, and column. An agent can locate the problem, make a correction, and repeat the check. Exit codes distinguish an invalid project from a missing toolchain or a build failure.

This creates a repeatable **edit → validate → fix → build** cycle. In CI, it helps check changes before human review and preserve artifacts for later execution. A successful \`validate\` checks code and configuration; gameplay, rendering, and controls are checked separately in simulation and visible Play. For SwiftPM projects, this command validates metadata and layout; the actual scope is reported in \`details.validationScope\`.

### Comparison with Unity CLI

The approach will be familiar to Unity developers: the editor supports batch-mode automation, and the modern **Unity CLI** offers \`unity build\`, \`unity test\`, and \`unity run\`, along with JSON output. A macOS game build can be expressed like this:

\`\`\`bash title="Unity CLI example"
unity build ./MyUnityGame --target StandaloneOSX \\
  --output-path ./Build/MyUnityGame.app --format json
\`\`\`

Unity CLI launches the required editor in batch mode; builds can use the built-in path, a Build Profile, or a custom C# method. In Ada Studio, validation and export commands are bundled with the standalone app and use its project pipeline without starting the windowed runtime. In both cases, agents benefit from explicit commands, structured results, and repeatable operations. [Unity CLI documentation](https://github.com/Unity-Technologies/skills/blob/main/skills/unity-cli/references/build-run-test.md), [Unity batch mode](https://docs.unity.com/en-us/engine/6000.3/manual/building-and-publishing/build-command-line).

Commands and current capabilities are described in the [Ada Studio CLI documentation](https://github.com/AdaEngine/Ada/blob/main/Editor/Documentation/CLI.md). Builds require the relevant platform tools; Web export additionally uses a compatible Swift WebAssembly SDK.

## Let's make games

AdaEngine remains an open-source Swift project under the MIT license.

Version 1.0.0 brings together the engine, visual tools, scripting language, AI workflows, and distribution infrastructure. For us, it is a significant step toward an environment where it is easy to experiment, build games, and share them.

Explore the [examples](/demos), try [Studio](/studio), and join [AdaEngine on GitHub](https://github.com/AdaEngine/Ada) through code, documentation, games, and feedback.

**Let's make games with Swift and AdaScript.**
`,Ya=[{name:"Vladislav Prusakov",description:"AdaEngine Founder, iOS Engineer",username:"SpectralDragon",avatar:"authors/spectraldragon.jpg",socials:[{username:"SpectralDragon",social:"github"},{username:"SpectralDragon_",social:"twitter"}]}],Za={},Xa=Ya,Ja=Za?Object.assign({"./content/articles/introducing-adaengine-0-1-0.md":Va,"./content/articles/introducing-adaengine-1-0-0.md":Ka}):{};function Qa(e){const n=e.replace(/\r\n/g,`
`);if(!n.startsWith(`---
`))return{frontmatter:{},body:n.trim()};const t=n.indexOf(`
---
`,4);if(t===-1)return{frontmatter:{},body:n.trim()};const a=n.slice(4,t),o=n.slice(t+5).trim(),r={};let s=null;for(const i of a.split(`
`)){const c=i.trim();if(!c){s=null;continue}if(c.startsWith("- ")&&s){const b=r[s],y=Cn(c.slice(2).trim()),w=Array.isArray(b)?b:[];w.push(y),r[s]=w;continue}const l=i.indexOf(":");if(l===-1){s=null;continue}const d=i.slice(0,l).trim(),p=i.slice(l+1).trim();if(!p){r[d]=[],s=d;continue}r[d]=Cn(p),s=null}return{frontmatter:r,body:o}}function Cn(e){return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1).split(",").map(n=>n.trim().replace(/^['"]|['"]$/g,"")).filter(Boolean):e==="true"?!0:e==="false"?!1:e.replace(/^['"]|['"]$/g,"")}function H(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Be(e){return/^(https?:|data:|blob:|\/)/.test(e)?e:`${"/".endsWith("/")?"/":"//"}${e.replace(/^\/+/,"")}`}function pt(e){return/^https?:\/\//.test(e)}function nn(e){return e.trim().replace(/^@/,"").toLowerCase()}function es(e){var t;if(typeof e.url=="string")return e.url;if(typeof e.profileUrl=="string")return e.profileUrl;const n=(t=e.socials)==null?void 0:t.find(a=>a.social==="github");if(typeof(n==null?void 0:n.url)=="string")return n.url;if(typeof(n==null?void 0:n.username)=="string")return`https://github.com/${n.username.replace(/^@/,"")}`;if(typeof e.username=="string")return`https://github.com/${e.username.replace(/^@/,"")}`}function ns(e,n){if(typeof e!="string"||!e.trim())throw new Error(`Invalid article author in ${n}`);const t=nn(e),a=Xa.find(o=>nn(o.username??o.name)===t||nn(o.name)===t);return a?{name:a.name,url:es(a),avatar:typeof a.avatar=="string"?a.avatar:void 0}:pt(e)?{name:e,url:e}:{name:e}}function ts(e,n){if(!/^(https?:\/\/|\/|\.\/|\.\.\/|[A-Za-z0-9/_-])/.test(n))return ke(e);const t=H(n),a=pt(n)?' target="_blank" rel="noreferrer"':"";return`<a href="${t}"${a}>${ke(e)}</a>`}function ke(e){return H(e).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>")}function as(e,n){let t=0;for(let a=n;a<e.length;a+=1){const o=e[a];if(o==="("){t+=1;continue}if(o===")"){if(t===0)return a;t-=1}}return-1}function le(e){let n="",t=0;for(;t<e.length;){const a=e.indexOf("[",t);if(a===-1){n+=ke(e.slice(t));break}const o=e.indexOf("]",a+1);if(o===-1||e[o+1]!=="("){n+=ke(e.slice(t,a+1)),t=a+1;continue}const r=o+2,s=as(e,r);if(s===-1){n+=ke(e.slice(t,a+1)),t=a+1;continue}n+=ke(e.slice(t,a)),n+=ts(e.slice(a+1,o),e.slice(r,s)),t=s+1}return n}function ss(e){const n=e.toLowerCase();return{ada:"AdaScript",adascript:"AdaScript",js:"JavaScript",javascript:"JavaScript",json:"JSON",md:"Markdown",markdown:"Markdown",sh:"Shell",shell:"Shell",swift:"Swift",ts:"TypeScript",typescript:"TypeScript",yaml:"YAML",yml:"YAML"}[n]??(e?e[0].toUpperCase()+e.slice(1):"Code")}function is(e){var o;const n=e.match(/(?:^|\s)(?:title|filename)=["']([^"']+)["']/),t=((o=e.split(/\s+/)[0])==null?void 0:o.replace(/[^\w#+-]/g,""))??"",a=(n==null?void 0:n[1])??e.replace(t,"").trim().replace(/^["']|["']$/g,"");return{language:t,title:a}}function os(e,n,t){const a=ss(n);return`
    <figure class="article-code-block">
      <figcaption>
        <span>${H(t)}</span>
        <span>${H(a)}</span>
      </figcaption>
      <pre><code class="${dt(n)}">${ut(e,n)}</code></pre>
    </figure>
  `}function rs(e){const n=e.match(/^::compare\[([^\]]+)\]\(([^\s)]+)\s+([^\s)]+)\s+"([^"]+)"\s+"([^"]+)"\)$/);if(n){const[,y,w,v,S,E]=n;return`
      <figure class="article-media article-comparison" data-article-comparison>
        <div class="article-comparison-frame" style="--comparison-position:50%">
          <img src="${H(Be(v))}" alt="${H(E)}" loading="lazy" />
          <img class="article-comparison-before" src="${H(Be(w))}" alt="${H(S)}" loading="lazy" />
          <span class="article-comparison-label article-comparison-label-before">${H(S)}</span>
          <span class="article-comparison-label article-comparison-label-after">${H(E)}</span>
        </div>
        <input type="range" min="0" max="100" value="50" aria-label="${H(y)}" aria-valuetext="50% ${H(S)}" data-article-comparison-range data-before-label="${H(S)}" />
        <figcaption>${le(y)}</figcaption>
      </figure>
    `}const t=e.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/),a=e.match(/^::video\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?(?:\s+poster="([^"]+)")?\)$/),o=t??a;if(!o)return null;const[,r,s,i,c]=o,l=Be(s),d=i||r,p=!!a||/\.(mp4|webm|ogg|mov)$/i.test(s),b=p?`<video controls playsinline preload="metadata"${c?` poster="${H(Be(c))}"`:""} src="${H(l)}">${H(r)}</video>`:`<img src="${H(l)}" alt="${H(r)}" loading="lazy" role="button" tabindex="0" aria-label="Open image fullscreen" data-article-lightbox-image />`;return`
    <figure class="article-media ${p?"article-media-video":"article-media-image"}">
      ${b}
      ${d?`<figcaption>${le(d)}</figcaption>`:""}
    </figure>
  `}function cs(e){const n=[];let t=!1;const a=()=>{t&&(n.push("</ul>"),t=!1)};for(const o of e){const r=o.trim();if(!r){a();continue}if(r.startsWith("- ")){t||(n.push("<ul>"),t=!0),n.push(`<li>${le(r.slice(2))}</li>`);continue}a(),n.push(`<p>${le(r)}</p>`)}return a(),n.join(`
`)}function ls(e,n,t){const a=["note","tip","warning","danger","info"].includes(e)?e:"note";return`
    <aside class="article-callout article-callout-${a}">
      <span class="article-callout-icon" aria-hidden="true">!</span>
      <div>
        <p class="article-callout-title">${le(n||{danger:"Important",info:"Info",note:"Note",tip:"Tip",warning:"Warning"}[a])}</p>
        ${cs(t)}
      </div>
    </aside>
  `}function Mn(e,n){const t=e.toLowerCase().replace(/`([^`]+)`/g,"$1").replace(/&[a-z]+;/gi,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"section",a=n.get(t)??0;return n.set(t,a+1),a===0?t:`${t}-${a+1}`}function ds(e){const n=e.split(`
`),t=[],a=[],o=new Map;let r=!1,s=!1,i="",c="",l=[],d=!1,p="note",b="",y=[];const w=()=>{r&&(t.push("</ul>"),r=!1)},v=()=>{s&&(t.push(os(l.join(`
`),i,c)),s=!1,i="",c="",l=[])},S=()=>{d&&(t.push(ls(p,b,y)),d=!1,p="note",b="",y=[])};for(const E of n){if(E.startsWith("```")){if(w(),S(),s)v();else{const R=is(E.slice(3).trim());i=R.language,c=R.title,s=!0}continue}if(s){l.push(E);continue}if(E.trim()===":::"){w(),S();continue}if(d){y.push(E);continue}const T=E.trim();if(!T){w();continue}if(T.startsWith("- ")){r||(t.push("<ul>"),r=!0),t.push(`<li>${le(T.slice(2))}</li>`);continue}w();const _=T.match(/^:::(note|tip|warning|danger|info)(?:\s+(.+))?$/i);if(_){p=_[1].toLowerCase(),b=_[2]??"",y=[],d=!0;continue}const U=rs(T);if(U){t.push(U);continue}if(T.startsWith("### ")){const R=T.slice(4),N=Mn(R,o);a.push({id:N,title:R,level:3}),t.push(`<h3 id="${H(N)}">${le(R)}</h3>`);continue}if(T.startsWith("## ")){const R=T.slice(3),N=Mn(R,o);a.push({id:N,title:R,level:2}),t.push(`<h2 id="${H(N)}">${le(R)}</h2>`);continue}if(T.startsWith("# ")){t.push(`<h1>${le(T.slice(2))}</h1>`);continue}t.push(`<p>${le(T)}</p>`)}return w(),v(),S(),{html:t.join(`
`),toc:a}}function mt(e){return e.replace(/^#.*$/gm,"").replace(/```[\s\S]*?```/g,"").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/[*`_>#-]/g,"").replace(/\s+/g," ").trim()}function us(e){return mt(e).slice(0,180)}function ps(e){const n=mt(e).split(" ").filter(Boolean).length;return Math.max(1,Math.ceil(n/180))}function ms(e,n){const t=e.title,a=e.slug,o=e.description,r=e.date,s=e.author,i=e.tags,c=e.image,l=e.published,d=e.draft,p=e.featured;if(typeof t!="string"||typeof a!="string"||typeof o!="string"||typeof r!="string")throw new Error(`Invalid article frontmatter in ${n}`);return{title:t,slug:a,description:o,date:r,author:ns(s,n),tags:Array.isArray(i)?i.filter(b=>typeof b=="string"):[],image:typeof c=="string"?c:void 0,published:typeof l=="boolean"?l:!0,draft:typeof d=="boolean"?d:!1,featured:typeof p=="boolean"?p:!1}}const ge=Object.entries(Ja).map(([e,n])=>{const{frontmatter:t,body:a}=Qa(n),o=ms(t,e),r=ds(a);return{...o,excerpt:us(a),html:r.html,readingTime:ps(a),toc:r.toc}}).filter(e=>e.published&&!e.draft).sort((e,n)=>new Date(n.date).getTime()-new Date(e.date).getTime());ge.filter(e=>e.featured);function hs(e){return ge.find(n=>n.slug===e)}const tn={schemaVersion:1,generatedAt:"",repository:"AdaEngine/AdaEngine",commit:null,demos:[]};let Rn=null;const an=new Map;function ht(e){return/^(https?:|data:|blob:|\/)/.test(e)?e:`${"/".endsWith("/")?"/":"//"}${e.replace(/^\/+/,"")}`}async function gt(){return Rn??(Rn=fetch(ht("demos/manifest.json"),{headers:{Accept:"application/json"}}).then(e=>e.ok?e.json():tn).then(e=>({...tn,...e,demos:[...e.demos??[]].sort((n,t)=>n.tag.localeCompare(t.tag)||n.title.localeCompare(t.title))})).catch(()=>tn)),Rn}async function gs(e){const n=ht(e.source);return an.set(n,an.get(n)??fetch(n).then(t=>{if(!t.ok)throw new Error(`Failed to load ${e.source}`);return t.text()}).catch(()=>"")),an.get(n)??""}function fs(e,n){return e.demos.find(t=>t.slug===n)}function bs(e){const n=new Map;for(const t of e){const a=n.get(t.tag)??{tag:t.tag,title:t.tagTitle,demos:[]};a.demos.push(t),n.set(t.tag,a)}return[...n.values()]}function ft(e){const n=e.trim().replace(/\/$/,"");return!n||n==="."||n==="/"?"":n.startsWith("/")?n:`/${n}`}function ys(e,n){const t=ft(n);let a=e||"/";return a.startsWith("/")||(a=`/${a}`),t&&(a===t||a.startsWith(`${t}/`))&&(a=a.slice(t.length)||"/"),a=a.replace(/\/$/,"")||"/",a.startsWith("/")?a:`/${a}`}function ws(e,n){const t=ft(n),a=e.startsWith("/")?e:`/${e}`;return t?`${t}${a==="/"?"/":a}`:a}const vs=["learn","community","donate"];function bt(e,n){const t=ys(e,n);if(t==="/")return{name:"home"};if(t==="/download")return{name:"download"};if(t==="/studio")return{name:"studio"};if(t==="/blog")return{name:"blog"};if(t==="/demos")return{name:"demos"};const a=t.match(/^\/demos\/([^/]+)$/);if(a)return{name:"demo",slug:decodeURIComponent(a[1])};const o=vs.find(s=>t===`/${s}`);if(o)return{name:"static-page",page:o};const r=t.match(/^\/articles\/([^/]+)$/);return r?{name:"article",slug:decodeURIComponent(r[1])}:{name:"not-found",path:t}}const Te="https://adaengine.org",Ce="Ada",ae=`${Te}/images/social/ada-preview-v2.png`,As={learn:{title:"Learn Ada - Swift Game Engine Tutorials and Examples",description:"Learn Ada with Swift game development guides, ECS fundamentals, rendering notes, physics examples, and links to source code.",path:"/learn",image:ae,type:"website"},community:{title:"Ada Community - Swift Game Development Contributors",description:"Join the Ada community, follow development, discuss Swift game engine ideas, and contribute to the open-source project.",path:"/community",image:ae,type:"website"},donate:{title:"Support Ada - Open-Source Swift Game Engine",description:"Support Ada development through donations, code contributions, examples, bug reports, and documentation improvements.",path:"/donate",image:ae,type:"website"}};function pn(e){if(/^https?:\/\//.test(e))return e;const n=e.startsWith("/")?e:`/${e}`;return`${Te}${n==="/"?"/":n.replace(/\/$/,"")}`}function Ss(e){return e.name==="home"?{title:"Ada - Open-Source Swift Game Engine",description:"Ada is an open-source game engine for Swift developers, with ECS, 2D and 3D rendering, physics, UI, editor tooling, and WebAssembly demos.",path:"/",image:ae,type:"website"}:e.name==="download"?{title:"Download Ada — Mac, Windows, Linux and iOS",description:"Download Ada for your platform. Find desktop releases, source code and the iOS app on the App Store.",path:"/download",image:ae,type:"website"}:e.name==="studio"?{title:"Ada Studio - Game Creation on Desktop, iPad and Mobile",description:"Meet Ada Studio. Build scenes, write Swift and AdaScript, and work with an AI agent on desktop and iPad. Bring your game ideas to life on mobile.",path:"/studio",image:`${Te}/images/studio/desktop.png`,type:"website"}:e.name==="blog"?{title:"Ada News - Swift Game Engine Updates",description:"Read Ada updates, release notes, engineering deep dives, and Swift game development articles from the project team.",path:"/blog",image:ae,type:"website"}:e.name==="demos"?{title:"Ada Demos - Swift WebAssembly Game Examples",description:"Explore Ada WebAssembly demos built from Swift source files, including 2D rendering, UI, physics, and scene examples.",path:"/demos",image:ae,type:"website"}:e.name==="static-page"?As[e.page]:e.name==="demo"?{title:"Ada Demo - Swift WebAssembly Example",description:"This Ada demo page lists a Swift WebAssembly example when the demo is available.",path:`/demos/${e.slug}`,image:ae,type:"website",robots:"noindex, follow"}:e.name==="article"?{title:"Ada Article",description:"This Ada article page is available when the requested article has been published.",path:`/articles/${e.slug}`,image:ae,type:"article",robots:"noindex, follow"}:{title:"Page Not Found - Ada",description:"This Ada page could not be found. Return to the open-source Swift game engine homepage.",path:e.name==="not-found"?e.path:"/",image:ae,type:"website",robots:"noindex, follow"}}function Es(e){return{title:`${e.title} - Ada News`,description:e.description,path:`/articles/${e.slug}`,image:e.image?pn(e.image):ae,type:"article"}}function ks(e){return{title:`${e.title} - Ada WebAssembly Demo`,description:`${e.description} View the Swift source and run the WebAssembly build for this Ada demo.`,path:`/demos/${e.slug}`,image:ae,type:"website"}}function Ts(e){const n=pn(e.path),t={"@context":"https://schema.org","@type":"WebSite",name:Ce,url:Te,description:"Ada is an open-source Swift game engine for 2D and 3D games, ECS architecture, rendering, physics, UI, and demos."};return e.path==="/"?[t,{"@context":"https://schema.org","@type":"SoftwareSourceCode",name:Ce,codeRepository:"https://github.com/AdaEngine/AdaEngine",programmingLanguage:"Swift",license:"https://github.com/AdaEngine/AdaEngine/blob/main/LICENSE",url:n,description:e.description}]:e.type==="article"?[t,{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,image:e.image,mainEntityOfPage:n,publisher:{"@type":"Organization",name:Ce,url:Te}}]:[t,{"@context":"https://schema.org","@type":"WebPage",name:e.title,description:e.description,url:n,isPartOf:{"@type":"WebSite",name:Ce,url:Te}}]}const Z=document.querySelector("#app")??xs(),Ue="/";function xs(){throw new Error("Root app container #app was not found")}const Is="Ada",yt="images/main/tilemap.png",$n=["images/main/tilemap.png","images/main/space_invaders.jpeg","images/main/duck_hunt.png"],wt="AdaEngine/AdaEngine",_s={learn:{title:"Learn Ada",lead:"Master game development in Swift. From your first sprite to advanced Metal rendering techniques.",sections:[{title:"Documentation",body:"Read guides, API notes and examples for the engine core, ECS, renderer, physics and UI systems.",links:[{label:"Open documentation",href:"https://docs.adaengine.org/"}]},{title:"Examples",body:"Explore sample projects such as tilemaps, arcade games and Swift-first game prototypes.",links:[{label:"Browse examples",href:"https://github.com/AdaEngine/AdaEngine/tree/main/Examples"}]},{title:"Features",body:"Return to the home page feature overview for a quick summary of what Ada can do.",links:[{label:"View features",href:`${B("/")}#features`}]}]}},Cs=[{title:"Getting Started",cards:[{title:"Get Started",body:"Install the engine and create your first window in under 5 minutes.",href:"https://docs.adaengine.org/tutorials/adaengine",icon:"book"},{title:"ECS",body:"Understand the Entity-Component-System architecture that powers Ada.",href:"https://docs.adaengine.org/documentation/adaecs/",icon:"play"},{title:"2D Physics Tutorial",body:"Add rigid bodies, collision shapes, and handle physics callbacks.",href:"https://docs.adaengine.org/documentation/adaphysics/",icon:"layout"}]},{title:"API Reference & Documentation",cards:[{title:"Core Framework",body:"Math, Collections, and basic Engine systems.",href:"https://docs.adaengine.org/documentation/adaengine/"},{title:"Rendering Pipeline",body:"Materials, Shaders, Render Graphs, and Metal integration.",href:"https://docs.adaengine.org/documentation/adarender/"},{title:"Audio System",body:"Spatial audio, sound effects, and music streaming.",href:"https://docs.adaengine.org/documentation/adaaudio/"}]}],Ms=[{title:"GitHub",subtitle:"Contribute to source code",href:"https://github.com/AdaEngine/AdaEngine",icon:"images/socials/github.svg"},{title:"Discord",subtitle:"Live chat & support",href:"https://discord.gg/JkEPE7nwDu",icon:"images/socials/discord.svg"},{title:"Reddit",subtitle:"r/AdaEngine discussions",href:"https://www.reddit.com/r/AdaEngine/",icon:"images/socials/reddit.svg"},{title:"Telegram",subtitle:"Announcements channel",href:"https://t.me/adaengine",iconClass:"community-link-icon-telegram",iconMarkup:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M42.2 8.7 35.8 39c-.5 2.1-1.8 2.6-3.6 1.6l-9.9-7.3-4.8 4.6c-.5.5-1 .9-2 .9l.7-10.1L34.6 12c.8-.7-.2-1.1-1.2-.4L10.6 25.9.8 22.8c-2.1-.7-2.2-2.1.4-3.1L39.5 4.9c1.8-.7 3.4.4 2.7 3.8Z"/></svg>'},{title:"X (Twitter)",subtitle:"Follow @ada_engine",href:"https://x.com/ada_engine",iconClass:"community-link-icon-x",iconMarkup:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M28.4 20.6 43.1 4h-3.5L26.9 18.4 16.7 4H5l15.5 21.9L5 43.4h3.5L22 28.1l10.8 15.3h11.7L28.4 20.6Zm-4.8 5.4-1.6-2.2L9.6 6.5H15l10 14 1.6 2.2 13 18.2h-5.4L23.6 26Z"/></svg>'}],Rs=[{title:"Boosty",subtitle:"Monthly Sponsorship",body:"Become a backer on Boosty to get early access to updates, exclusive tutorials, and your name in the engine credits.",href:"https://boosty.to/adaengine",action:"Support on Boosty",icon:"images/icons/ic_boosty.svg",tone:"boosty"},{title:"DonationAlerts",subtitle:"One-time Donation",body:"Prefer to make a one-time contribution? You can support us via DonationAlerts with various payment methods.",href:"https://www.donationalerts.com/r/adaengine",action:"Donate via DA",icon:"images/donation_alerts_logo.svg",tone:"donation-alerts"}],Fe=[{title:"Data Driven",description:"Ada build around custom Entity Component System. Simple to use, fast and cache-friendly for your game architecture.",details:"Ada is built around a custom, data-oriented Entity Component System inspired by modern Swift APIs. Components keep game state small and explicit, while systems operate through typed queries, resources, schedules and macros such as @Component and @System. This makes gameplay code modular, cache-friendly and easier to scale from a tiny prototype to a full scene with input, animation, physics and rendering working together.",code:`@Component
struct Player: Entity { }

struct PlayerSystem: System {
    func update(context: UpdateSceneContext) { }
}`,gif:"images/features/data-driven.gif"},{title:"2D Renderer",description:"Supports real-time 2D rendering for your games and apps. Write custom shaders, materials and render pipelines.",details:"Ada ships with a high-level 2D rendering stack for sprites, text, tilemaps, cameras and custom materials. The demos cover sprite animation, transparency, lighting, text rendering, WGSL experiments and stress scenes, while the renderer still leaves room for lower-level control when you need custom shaders or pipeline work. It is designed for Swift-first game code where drawing a scene should feel direct, but not boxed in.",image:"images/icons/ic_duck.png",gif:"images/features/2d-renderer.gif"},{title:"2D Physics",description:"Ada supports Box2D v3 physics with parallel calculations, lightweight memory usage and fast simulation.",details:"The Physics2D plugin integrates Box2D with Ada entities through components such as PhysicsBody2DComponent and Collision2DComponent. Simulation runs on the fixed-update schedule, then syncs transforms back into the scene so gameplay systems can react through the same ECS flow as the rest of the engine. It includes collision events, debug drawing support and world resources for direct access when a game needs deeper physics control.",image:"images/icons/ic_box2d.svg",gif:"images/features/2d-physics.gif"},{title:"Render Graphs",description:"Construct your own render pipeline using powerful render graphs.",details:"Rendering is organized around RenderGraph resources, nodes, slots, subgraphs and an executor that runs the graph each frame. Core 2D and 3D pipelines are assembled as graphs, and cameras can point at specific render subgraphs for flexible composition. Diagnostics can snapshot nodes, edges, subgraphs and frame records, which makes custom pipelines easier to reason about when you add post-processing, offscreen passes or specialized rendering stages.",image:"images/icons/ic_render_graph.svg",gif:"images/features/render-graphs.gif"},{title:"Custom UI Engine",description:"Create your own UI using a SwiftUI-like approach that fits naturally into Ada scenes.",details:"AdaUI brings a SwiftUI-like declarative layer into Ada with views, result builders, environment values, layout containers, gestures, animation, text fields, scroll views and navigation primitives. UI can live naturally beside game scenes, and the engine includes tooling such as a 3D AdaUI debug view for inspecting live UI trees. The goal is to make editor panels, HUDs and in-game interfaces feel native to the same Swift codebase as your gameplay.",code:`struct MainView: View {
    @Environment(\\.scene) var scene

    var body: some View {
        Text("Hello, World!")
    }
}`,gif:"images/features/custom-ui.gif"},{title:"Free and Open Source",description:"Ada is 100% free for you. Licensed by MIT. Learn, modify or use without royalties or runtime fees.",details:"Ada is MIT licensed and developed in the open, with source, tutorials, generated API documentation, demos and build guides available from the repository. You can study the engine internals, modify them for your project, ship without royalties or runtime fees, and contribute fixes, examples or documentation back to the community. The project is still evolving, so the roadmap is visible where the code actually lives.",image:"images/icons/ic_opensource.svg",gif:"images/features/open-source.gif"},{title:"AdaScript",description:"Write gameplay scripts with AdaScript, powered by the Gravity language runtime and integrated with Ada ECS.",details:"AdaScript brings the Gravity scripting runtime into Ada for fast gameplay iteration. Scripts declare their component queries and use capability-scoped access to read or update reflected ECS fields, so scripted systems participate in the same scheduling and access rules as native Swift systems. Keep performance-critical code in Swift and move tuning, behaviours and gameplay logic into reloadable scripts.",gif:"images/features/adascript.gif"},{title:"3D Rendering",description:"Build 3D scenes with cameras, materials, lighting, skyboxes and extensible render pipelines.",details:"Ada’s 3D stack is built around the same render-graph architecture as its core renderer. Compose camera views, materials, meshes, lights, environment settings and skyboxes into a Swift-first scene, then extend the pipeline with your own passes and subgraphs when a project needs custom post-processing or rendering techniques.",gif:"images/features/3d-rendering.gif"},{title:"3D Physics",description:"Simulate rigid bodies, collisions and constraints in 3D with the integrated Box3D physics engine.",details:"Ada includes a Box3D-backed 3D physics path for rigid body simulation, collision queries and joint constraints. It is designed to work alongside Ada entities and transforms, with a dedicated example target for validating 3D physics scenes. Box3D brings a C17 rigid-body simulation core while Ada keeps the scene-facing API in Swift.",gif:"images/features/3d-physics.gif"}];function C(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function $s(e){return/^https?:\/\//.test(e)}function Ls(e){return e.details}function mn(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(new Date(e))}function B(e){if(/^store(?:-test)?\./.test(window.location.hostname)&&/^\/cloud(\/|$)/.test(e))return new URL(e,window.location.hostname.startsWith("store-test.")?"https://cloud-test.adaengine.org":"https://cloud.adaengine.org").href;const n=/^store(?:-test)?\./.test(window.location.hostname)?"https://adaengine.org":void 0;return n&&!/^\/(cloud|games|legal|store)(\/|$)/.test(e)?new URL(e,n).href:ws(e,Ue)}function W(e){const n=Ue.endsWith("/")?Ue:`${Ue}/`,t=e.replace(/^\/+/,"");return`${n}${t}`}function Y(e,n,t){let a=document.head.querySelector(`meta[${e}="${n}"]`);a||(a=document.createElement("meta"),a.setAttribute(e,n),document.head.appendChild(a)),a.content=t}function Ns(e,n){var t;(t=document.head.querySelector(`meta[${e}="${n}"]`))==null||t.remove()}function hn(e){const n=pn(e.path);let t=document.head.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.rel="canonical",document.head.appendChild(t)),document.title=e.title,t.href=n,Y("name","description",e.description),Y("property","og:site_name",Ce),Y("property","og:title",e.title),Y("property","og:description",e.description),Y("property","og:type",e.type),Y("property","og:url",n),Y("property","og:image",e.image),Y("property","og:image:alt",e.title),Y("name","twitter:card","summary_large_image"),Y("name","twitter:title",e.title),Y("name","twitter:description",e.description),Y("name","twitter:image",e.image),Y("name","twitter:image:alt",e.title),e.robots?Y("name","robots",e.robots):Ns("name","robots");for(const a of document.head.querySelectorAll("script[data-seo-structured-data]"))a.remove();for(const a of Ts(e)){const o=document.createElement("script");o.type="application/ld+json",o.dataset.seoStructuredData="true",o.textContent=JSON.stringify(a),document.head.appendChild(o)}}function Os(e){return e<1e3?String(e):e<1e6?`${(e/1e3).toFixed(e<1e4?1:0)}k`:`${(e/1e6).toFixed(1)}m`}async function Ds(){const e=document.querySelector("[data-github-stars]"),n=document.querySelector("[data-github-stars-value]");if(n)try{const t=await fetch(`https://api.github.com/repos/${wt}`,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)return;const a=await t.json();if(typeof a.stargazers_count!="number")return;const o=Os(a.stargazers_count);n.textContent=o,e==null||e.setAttribute("aria-label",`${o} GitHub stars`)}catch{}}function Q(){const e=bt(window.location.pathname,"/"),n=/^\/store(\/|$)/.test(window.location.pathname)||/^store(?:-test)?\./.test(window.location.hostname)&&window.location.pathname==="/",t=n?"store":e.name==="static-page"?e.page:e.name==="demo"?"demos":e.name,a=[{label:"Home",href:B("/"),active:t==="home"},{label:"Studio",href:B("/studio"),active:t==="studio"},...ge.length?[{label:"News",href:B("/blog"),active:t==="blog"}]:[],{label:"Demos",href:B("/demos"),active:t==="demos"},{label:"Learn",href:B("/learn"),active:t==="learn"},{label:"Socials",href:B("/community"),active:t==="community",secondary:!0},{label:"Store",href:n?B("/store"):"https://store.adaengine.org",active:n,secondary:!0},{label:"Cloud",href:B("/cloud"),active:/^\/(cloud|games|legal)(\/|$)/.test(window.location.pathname),secondary:!0},{label:"Donate",href:B("/donate"),active:t==="donate",secondary:!0}];return`
    <header class="header${t==="learn"?" header-learn":""}">
      <section class="container content-restriction header-container">
        <a class="header-logo" href="${B("/")}" aria-label="Ada home">
          <picture class="header-logo-picture">
            <source srcset="${W("images/ae_logo~dark.svg")}" media="(prefers-color-scheme: dark)" />
            <img src="${W("images/ae_logo.svg")}" alt="Ada" />
          </picture>
          <h2>${Is}</h2>
        </a>
        <button class="burger-container" type="button" aria-label="Open menu" aria-expanded="false">
          <span id="burger" aria-hidden="true"><span class="bar topBar"></span><span class="bar bottomBar"></span></span>
        </button>
        <nav aria-label="Main navigation">
          <ul class="navigation">
            ${a.map(r=>`<li class="navigation-item${"secondary"in r&&r.secondary?" navigation-item-secondary":""}"><a class="navigation-item-link${r.active?" is-active":""}"${r.active?' aria-current="page"':""} href="${r.href}">${r.label}</a></li>`).join("")}
            <li class="navigation-item download-button"><a class="navigation-item-link" href="${B("/download")}">Download <span class="download-version" data-download-version>v${ie.version}</span></a></li>
          </ul>
        </nav>
      </section>
    </header>
  `}function Ps(){return`
    <section class="hero-section safe-area-insets">
      <div class="hero-copy">
        <p class="hero-eyebrow">Swift Game Engine is here</p>
        <h1 class="ae-header-title">The Open-Source Engine for Swift Developers</h1>
        <p class="hero-subtitle">Build high-performance 2D and 3D games using modern Swift. Clean architecture, native feeling, and developer-first tooling.</p>
        <div class="hero-actions">
          <a class="header-buttons" href="${B("/download")}">Download <span class="download-version" data-download-version>v${ie.version}</span></a>
          <a class="header-buttons-github" href="https://github.com/${wt}" aria-label="Ada on GitHub">
            <span class="github-button-label">
              <svg class="github-button-icon" viewBox="0 0 438.549 438.549" aria-hidden="true" focusable="false"><path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"/></svg>
              GitHub
            </span>
            <span class="github-stars" data-github-stars aria-label="Loading GitHub stars">
              <svg class="github-star-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m12 2.6 2.92 5.92 6.53.95-4.72 4.6 1.11 6.5L12 17.5l-5.84 3.07 1.11-6.5-4.72-4.6 6.53-.95L12 2.6z"/></svg>
              <span data-github-stars-value>...</span>
            </span>
          </a>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true" data-hero-gif-src="${W("images/main/adaengine-hero.gif")}">
        <picture class="ae-logo-header"><source srcset="${W("images/ae_logo~dark.svg")}" media="(prefers-color-scheme: dark)" /><img src="${W("images/ae_logo.svg")}" alt="" /></picture>
        <div class="hero-orbit hero-orbit-one"></div>
        <div class="hero-orbit hero-orbit-two"></div>
      </div>
    </section>
  `}function Bs(e=[]){return e.length?`<ul class="tags">${e.map(n=>`<li>${n}</li>`).join("")}</ul>`:""}function Us(){return ge.length?`
    <section id="latest-news" class="latest-news safe-area-insets">
      <h2 class="section-title">Latest News</h2>
      <div class="home-articles-grid">
        ${ge.slice(0,4).map(e=>`
              <article class="home-article-preview">
                <a href="${B(`/articles/${e.slug}`)}">
                  <div class="article-preview-image">
                    <img class="background_image" src="${W(yt)}" alt="${C(e.title)}" />
                    <div class="background_image_overlay"></div>
                    <div class="article-preview-content">
                      <p class="article-date">${mn(e.date)}</p>
                      ${Bs(e.tags)}
                      <h3>${e.title}</h3>
                      <p>${C(e.author.name)}</p>
                    </div>
                  </div>
                </a>
              </article>
            `).join("")}
      </div>
    </section>
  `:""}function vt(e=[]){const n=e[0]??"News";return`<span class="blog-entry-tag blog-entry-tag-${["release","tutorial","engineering","markdown","frontmatter","vite"].find(a=>n.toLowerCase().includes(a))??"default"}">${C(n)}</span>`}function Fs(e,n){return e.image??$n[n%$n.length]??yt}function Gs(){Z.innerHTML=`
    ${Q()}
    <main class="page-shell blog-page-shell">
      <section class="container content-restriction blog-page">
        <header class="blog-page-hero">
          <h1>Engine News</h1>
          <p>Updates, release notes, and engineering deep dives from the Ada team.</p>
        </header>
        ${ge.length?`<div class="blog-timeline">
                ${ge.map((e,n)=>`
                      <article class="blog-entry">
                        <aside class="blog-entry-meta" aria-label="Article metadata">
                          <time datetime="${e.date}">${mn(e.date)}</time>
                          ${vt(e.tags)}
                        </aside>
                        <a class="blog-entry-card" href="${B(`/articles/${e.slug}`)}">
                          <img class="blog-entry-cover" src="${W(Fs(e,n))}" alt="" loading="lazy" />
                          <span class="blog-entry-cover-overlay" aria-hidden="true"></span>
                          <span class="blog-entry-content">
                            <h2>${C(e.title)}</h2>
                            <p>${C(e.description)}</p>
                            <span class="blog-entry-action">Read full article →</span>
                          </span>
                        </a>
                      </article>
                    `).join("")}
              </div>`:`<div class="blog-empty">
                <h2>No articles yet</h2>
                <p>Fresh Ada updates will appear here soon.</p>
              </div>`}
      </section>
    </main>
    ${re()}
  `}function Hs(e){const n=bs(e.demos),t=n.map(a=>`
        <a class="article-toc-link demo-category-link" href="#demo-group-${C(a.tag)}" data-demo-category-link="demo-group-${C(a.tag)}">
          <span>${C(a.title)}</span>
          <small>${a.demos.length}</small>
        </a>
      `).join("");Z.innerHTML=`
    ${Q()}
    <main class="page-shell demos-page-shell">
      <section class="container content-restriction demos-page">
        <header class="demos-hero">
          <p class="eyebrow">Live WebAssembly examples</p>
          <h1>Ada Demos</h1>
          <p>Explore browser builds generated from the Swift files in the Ada repository. Each demo page includes the embedded build and the source that produced it.</p>
        </header>
        ${n.length?`<div class="demos-browse-layout">
                <aside class="demo-category-nav" aria-label="Demo categories">
                  <div class="article-toc-panel demo-category-panel">
                    <p class="article-toc-title">Categories</p>
                    <nav class="article-toc-list demo-category-list">${t}</nav>
                  </div>
                </aside>
                <div class="demo-groups">
                  ${n.map(a=>`
                        <section class="demo-group" aria-labelledby="demo-group-${C(a.tag)}">
                          <div class="demo-group-heading">
                            <h2 id="demo-group-${C(a.tag)}">${C(a.title)}</h2>
                            <span>${a.demos.length} ${a.demos.length===1?"demo":"demos"}</span>
                          </div>
                          <div class="demo-card-grid">
                            ${a.demos.map(js).join("")}
                          </div>
                        </section>
                      `).join("")}
                </div>
              </div>`:`<div class="demo-empty">
                <h2>No demos published yet</h2>
                <p>The website will show demos after the Ada export workflow publishes the first manifest.</p>
              </div>`}
      </section>
    </main>
    ${re()}
  `}function js(e){return`
    <a class="demo-card" href="${B(`/demos/${e.slug}`)}">
      <span class="demo-card-tag">${C(e.tagTitle)}</span>
      <h3>${C(e.title)}</h3>
      <p>${C(e.description)}</p>
      <span class="demo-card-meta">${C(e.sourcePath)}</span>
      ${e.hasBuild?'<span class="demo-card-action">Open demo</span>':'<span class="demo-card-action demo-card-action-muted">Source only</span>'}
    </a>
  `}async function Ws(e){const n=await gt(),t=fs(n,e);if(!t){ze("Demo not found","Check the address or return to the demos page.");return}hn(ks(t));const a=await gs(t),o=n.commit??"main",r=`https://github.com/${n.repository}/blob/${o}/${t.sourcePath}`;Z.innerHTML=`
    ${Q()}
    <main class="page-shell demo-detail-shell">
      <article class="container content-restriction demo-detail-page">
        <header class="demo-detail-hero">
          <a class="article-back-link" href="${B("/demos")}">Back to Demos</a>
          <span class="demo-card-tag">${C(t.tagTitle)}</span>
          <h1>${C(t.title)}</h1>
          <p>${C(t.description)}</p>
          <a class="demo-source-link" href="${r}" target="_blank" rel="noreferrer">${C(t.sourcePath)}</a>
        </header>
        ${t.hasBuild?`<section class="demo-player" aria-label="${C(t.title)} embedded demo">
                <button class="demo-player-fullscreen" type="button" aria-label="Open demo fullscreen" title="Open fullscreen" data-demo-fullscreen>
                  <svg class="demo-player-fullscreen-enter-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg class="demo-player-fullscreen-exit-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <iframe title="${C(t.title)}" src="${W(t.embed)}" allow="fullscreen; gamepad; keyboard-map; clipboard-read; clipboard-write; webgpu" allowfullscreen webkitallowfullscreen></iframe>
              </section>`:`<section class="demo-player demo-player-empty">
                <h2>Build artifact is not available</h2>
                <p>This demo is listed in the manifest, but the WebAssembly export was not published.</p>
              </section>`}
        <section class="demo-source-section" aria-labelledby="demo-source-title">
          <div class="demo-source-heading">
            <h2 id="demo-source-title">Source</h2>
            <a class="demo-source-github-link" href="${r}" target="_blank" rel="noreferrer">
              <svg class="demo-source-github-icon" viewBox="0 0 438.549 438.549" aria-hidden="true" focusable="false"><path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"/></svg>
              <span>Open on GitHub</span>
              <svg class="demo-source-external-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div>
          <figure class="article-code-block demo-source-code">
            <figcaption>
              <span>${C(t.sourcePath)}</span>
              <span>Swift</span>
            </figcaption>
            <pre class="code-with-line-numbers"><code class="${dt("swift")}">${qa(a,"swift")}</code></pre>
          </figure>
        </section>
      </article>
    </main>
    ${re()}
  `}function zs(){return`
    <section id="features" class="features-container safe-area-insets">
      <div class="section-heading">
        <p class="eyebrow">Capabilities</p>
        <h2 class="section-title">Features</h2>
      </div>
      <div class="features-grid">
        ${[...Fe.slice(-3),...Fe.slice(0,-3)].map((n,t)=>`
              <button class="engine-info-item-container feature-card feature-card-${t+1}" type="button" data-feature-index="${Fe.indexOf(n)}" data-feature-position="${t+1}" aria-haspopup="dialog">
                ${qs(n)}
                <div class="engine-info-item-text">
                  <span class="feature-number">0${t+1}</span>
                  <h3>${n.title}</h3>
                  <p>${n.description}</p>
                </div>
                <span class="feature-card-action">Learn more</span>
              </button>
            `).join("")}
      </div>
    </section>
  `}function qs(e){const n=e.gif?W(e.gif):"";return`
    <div class="engine-info-item-content feature-media-slot" data-feature-preview>
      ${n?`<img class="feature-media-gif" src="${n}" alt="" loading="lazy" decoding="async" />`:""}
      <span class="feature-media-loader" aria-label="Loading animated feature preview">
        <span class="feature-media-spinner" aria-hidden="true"></span>
        <span>Loading preview</span>
      </span>
    </div>
  `}function Vs(){return`
    <div class="feature-modal" role="dialog" aria-modal="true" aria-labelledby="feature-modal-title" hidden>
      <div class="feature-modal-backdrop" data-modal-close></div>
      <section class="feature-modal-panel">
        <button class="feature-modal-close" type="button" aria-label="Close feature details" title="Close" data-modal-close>
          <span class="feature-modal-close-label">Close</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="feature-modal-layout">
          <div class="feature-modal-visual" id="feature-modal-visual"></div>
          <div class="feature-modal-copy">
            <p class="eyebrow" id="feature-modal-kicker">Feature</p>
            <h2 id="feature-modal-title"></h2>
            <p id="feature-modal-description"></p>
          </div>
        </div>
      </section>
    </div>
  `}function Ks(){return`
    <nav class="footer-social-links" aria-label="Social links">
      <a class="footer-social-link" href="https://github.com/AdaEngine/AdaEngine" target="_blank" rel="noreferrer" aria-label="Ada on GitHub"><svg viewBox="0 0 438.549 438.549" aria-hidden="true" focusable="false"><path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"/></svg></a>
      <a class="footer-social-link" href="https://discord.gg/JkEPE7nwDu" target="_blank" rel="noreferrer" aria-label="Ada on Discord"><svg viewBox="0 0 127.14 96.36" aria-hidden="true" focusable="false"><path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83A97.68 97.68 0 0 0 49 6.83 72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z"/></svg></a>
      <a class="footer-social-link" href="https://x.com/ada_engine" target="_blank" rel="noreferrer" aria-label="Ada on Twitter"><svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></a>
      <a class="footer-social-link" href="https://t.me/adaengine" target="_blank" rel="noreferrer" aria-label="Ada on Telegram"><svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path d="M42.2 8.7 35.8 39c-.5 2.1-1.8 2.6-3.6 1.6l-9.9-7.3-4.8 4.6c-.5.5-1 .9-2 .9l.7-10.1L34.6 12c.8-.7-.2-1.1-1.2-.4L10.6 25.9.8 22.8c-2.1-.7-2.2-2.1.4-3.1L39.5 4.9c1.8-.7 3.4.4 2.7 3.8Z"/></svg></a>
    </nav>
  `}function re(){return`
    <footer class="footer">
      <div class="footer-dot-field" aria-hidden="true"></div>
      <div class="footer-container">
        <div class="footer-columns">
          <section>
            <h3>Ada</h3>
            <a href="${B("/studio")}">Studio</a>
            <a href="${B("/download")}">Download</a>
            <a href="https://github.com/AdaEngine/AdaEngine">Source code<span class="footer-external-mark" aria-hidden="true">↗</span></a>
          </section>
          <section>
            <h3>Project</h3>
            ${ge.length?`<a href="${B("/blog")}">Blog</a>`:""}
            <a href="${B("/learn")}">Learn</a>
            <a href="${B("/community")}">Community</a>
          </section>
          <section>
            <h3>Foundation</h3>
            <a href="${B("/donate")}">Donate</a>
            <a href="https://github.com/AdaEngine/AdaEngine/blob/main/LICENSE">License<span class="footer-external-mark" aria-hidden="true">↗</span></a>
          </section>
        </div>
        <div class="footer-bottom">
          <p>© 2021-2026 Vladislav Prusakov and contributors. All rights reserved.</p>
          ${Ks()}
        </div>
        <div class="footer-blueprint-mark" aria-hidden="true">Ada</div>
      </div>
    </footer>
  `}function Ys(e){return e?`
    <span class="learn-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
        ${{book:'<path d="M7 5.5h8.5a2.5 2.5 0 0 1 2.5 2.5v11H9.5A2.5 2.5 0 0 0 7 21.5V5.5Z"/><path d="M7 5.5A2.5 2.5 0 0 1 9.5 3H18v16"/>',play:'<circle cx="12" cy="12" r="9"/><path d="m10.5 8.5 5 3.5-5 3.5v-7Z"/>',layout:'<rect x="4" y="5" width="16" height="14" rx="1.5"/><path d="M9 5v14"/><path d="M4 10h16"/>'}[e]}
      </svg>
    </span>
  `:""}function Zs(){const e=_s.learn;Z.innerHTML=`
    ${Q()}
    <main class="page-shell learn-page-shell">
      <section class="container content-restriction learn-page">
        <header class="learn-hero">
          <h1>${e.title}</h1>
          <p>${e.lead}</p>
        </header>
        ${Cs.map(n=>{const t=n.title.replace(/\W+/g,"-").toLowerCase();return`
              <section class="learn-section" aria-labelledby="${t}">
                <h2 id="${t}">${n.title}</h2>
                <div class="learn-grid">
                  ${n.cards.map(a=>`
                        <a class="learn-card" href="${a.href}">
                          ${Ys(a.icon)}
                          <h3>${a.title}</h3>
                          <p>${a.body}</p>
                        </a>
                      `).join("")}
                </div>
              </section>
            `}).join("")}
      </section>
    </main>
    ${re()}
  `}function Xs(e){if(e==="learn"){Zs();return}if(e==="community"){Qs();return}if(e==="donate"){Js();return}}function Js(){Z.innerHTML=`
    ${Q()}
    <main class="page-shell donation-page-shell">
      <section class="container content-restriction donation-page">
        <header class="donation-hero">
          <h1>Support Ada</h1>
          <p>Ada is an independent open-source project. Your support helps us dedicate more time to development and tooling.</p>
        </header>
        <div class="donation-options" aria-label="Donation options">
          ${Rs.map(e=>`
                <article class="donation-card donation-card-${e.tone}">
                  <span class="donation-card-logo" aria-hidden="true">
                    <img src="${W(e.icon)}" alt="" loading="lazy" />
                  </span>
                  <div class="donation-card-brand">${e.title}</div>
                  <h2>${e.subtitle}</h2>
                  <p>${e.body}</p>
                  <a class="donation-card-action" href="${e.href}" target="_blank" rel="noreferrer">${e.action}</a>
                </article>
              `).join("")}
        </div>
        <section class="donation-contribute" aria-labelledby="donation-contribute-title">
          <h2 id="donation-contribute-title">Code Contributions</h2>
          <p>
            Can't support financially? Code contributions are equally valuable! Check out our
            <a href="https://github.com/AdaEngine/AdaEngine/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22" target="_blank" rel="noreferrer">good first issues</a>
            on GitHub to get started.
          </p>
        </section>
      </section>
    </main>
    ${re()}
  `}function Qs(){Z.innerHTML=`
    ${Q()}
    <main class="page-shell community-page-shell">
      <section class="container content-restriction community-page">
        <header class="community-hero">
          <h1>Join the Community</h1>
          <p>Connect with other developers, share your projects, and contribute to the engine.</p>
        </header>
        <div class="community-link-grid" aria-label="Ada community links">
          ${Ms.map(e=>`
                <a class="community-link-card" href="${e.href}" target="_blank" rel="noreferrer">
                  <span class="community-link-icon ${e.iconClass??""}">
                    ${e.iconMarkup??`<img src="${W(e.icon??"")}" alt="" width="42" height="42" loading="lazy" />`}
                  </span>
                  <span class="community-link-copy">
                    <strong>${e.title}</strong>
                    <span>${e.subtitle}</span>
                  </span>
                </a>
              `).join("")}
        </div>
      </section>
    </main>
    ${re()}
  `}function ei(){Z.innerHTML=`
    ${Q()}
    <main class="page-shell">
      <div class="container content-restriction">
        ${Ps()}
        
        ${Us()}
        ${zs()}
      </div>
    </main>
    ${re()}
    ${Vs()}
  `}function ni(e){const n=hs(e);if(!n){ze("Article not found","Check the address or return to the blog.");return}hn(Es(n)),Z.innerHTML=`
    ${Q()}
    <main class="page-shell article-page-shell">
      <div class="container article-reading-layout">
        <article class="safe-area-insets article-page">
          <header class="article-hero">
            <a class="article-back-link" href="${B("/blog")}">Back to News</a>
            ${vt(n.tags)}
            <h1>${n.title}</h1>
            <div class="article_info">
              ${ai(n.author)}
              <span aria-hidden="true">•</span>
              <time datetime="${n.date}">${mn(n.date)}</time>
              <span aria-hidden="true">•</span>
              <span>${n.readingTime} min read</span>
            </div>
            <p class="article-item-description">${n.description}</p>
          </header>
          <div class="article-content">${n.html}</div>
        </article>
        ${ii(n.toc)}
      </div>
    </main>
    ${ti()}
    ${re()}
  `}function ti(){return`
    <div class="article-image-lightbox" role="dialog" aria-modal="true" aria-label="Fullscreen article image" hidden data-article-lightbox>
      <button class="article-image-lightbox-backdrop" type="button" aria-label="Close fullscreen image" data-article-lightbox-close></button>
      <figure class="article-image-lightbox-frame">
        <button class="article-image-lightbox-close demo-player-fullscreen" type="button" aria-label="Close fullscreen image" title="Close" data-article-lightbox-close>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/>
          </svg>
        </button>
        <img src="" alt="" data-article-lightbox-preview />
        <figcaption data-article-lightbox-caption hidden></figcaption>
      </figure>
    </div>
  `}function ai(e){const n=`By ${e.name}`,a=`
    ${e.avatar?`<img class="article-author-avatar" src="${C(si(e.avatar))}" alt="${C(`${e.name} avatar`)}" loading="lazy" />`:""}
    <span class="article-author-label">${C(n)}</span>
  `;return!e.url||!$s(e.url)?`<span class="article-author">${a}</span>`:`
    <a class="article-author article-author-link" href="${C(e.url)}" target="_blank" rel="author noreferrer">
      ${a}
      <svg class="article-author-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M5 3.5h7.5V11M12.25 3.75 4 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  `}function si(e){return/^(https?:|data:|blob:|\/)/.test(e)||e.startsWith("images/")?W(e):W(`images/${e}`)}function Ln(e,n){return e.map(t=>`
        <a class="article-toc-link article-toc-link-level-${t.level}" href="#${t.id}" data-article-toc-link="${t.id}" data-toc-context="${n}">
          <span>${C(t.title)}</span>
        </a>
      `).join("")}function ii(e){var o;if(!e.length)return"";const n=Ln(e,"desktop"),t=Ln(e,"mobile"),a=((o=e[0])==null?void 0:o.title)??"Start";return`
    <aside class="article-toc" aria-label="On this page">
      <div class="article-toc-panel">
        <p class="article-toc-title">On this page</p>
        <div class="article-toc-progress" aria-hidden="true">
          <span data-article-progress-fill></span>
        </div>
        <p class="article-toc-progress-label"><span data-article-progress-label>0%</span> read</p>
        <nav class="article-toc-list">${n}</nav>
      </div>
    </aside>
    <div class="article-mobile-reader-nav" data-mobile-reader-nav>
      <button class="article-mobile-reader-button" type="button" data-mobile-toc-toggle aria-expanded="false" aria-controls="article-mobile-toc-sheet" aria-label="Open article sections">
        <span class="article-mobile-progress" aria-hidden="true">
          <span data-article-progress-fill></span>
        </span>
        <span class="article-mobile-reader-copy">
          <span data-article-progress-label>0%</span>
          <strong data-current-section>${C(a)}</strong>
        </span>
        <span class="article-mobile-reader-action" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <div class="article-mobile-toc-sheet" id="article-mobile-toc-sheet" data-mobile-toc-sheet hidden>
        <div class="article-mobile-toc-header">
          <span>On this page</span>
          <span><span data-article-progress-label>0%</span> read</span>
        </div>
        <nav class="article-mobile-toc-list">${t}</nav>
      </div>
    </div>
  `}function ze(e="Page not found",n="This route does not exist yet."){Z.innerHTML=`
    ${Q()}
    <main class="page-shell">
      <section class="container content-restriction safe-area-insets status-page">
        <h1>${e}</h1>
        <p>${n}</p>
        <a class="header-buttons" href="${B("/")}">Home</a>
      </section>
    </main>
    ${re()}
  `}function oi(){const e=document.querySelector(".article-content"),n=document.querySelector("[data-mobile-reader-nav]"),t=document.querySelector("[data-mobile-toc-toggle]"),a=document.querySelector("[data-mobile-toc-sheet]"),o=Array.from(document.querySelectorAll(".article-content h2[id], .article-content h3[id]")),r=Array.from(document.querySelectorAll("[data-article-toc-link]")),s=Array.from(document.querySelectorAll("[data-article-progress-fill]")),i=Array.from(document.querySelectorAll("[data-article-progress-label]")),c=Array.from(document.querySelectorAll("[data-current-section]"));if(!e||!o.length||!r.length)return;let l,d;const p=v=>{if(!(!t||!a||!n)){if(window.clearTimeout(l),t.setAttribute("aria-expanded",String(v)),v){a.hidden=!1,n.classList.remove("is-closing"),n.classList.add("is-open");return}n.classList.remove("is-open"),n.classList.add("is-closing"),l=window.setTimeout(()=>{a.hidden=!0,n.classList.remove("is-closing")},520)}},b=v=>{const S=document.getElementById(v);S&&(S.scrollIntoView({behavior:"smooth",block:"start"}),p(!1))},y=v=>{const S=v.closest(".article-toc-list, .article-mobile-toc-list");if(!S)return;const E=S.getBoundingClientRect(),T=v.getBoundingClientRect(),_=16,U=T.top<E.top+_,R=T.bottom>E.bottom-_;if(!U&&!R)return;const N=U?T.top-E.top-_:T.bottom-E.bottom+_;S.scrollTo({top:S.scrollTop+N,behavior:"smooth"})};r.forEach(v=>{v.addEventListener("click",S=>{const E=v.dataset.articleTocLink;E&&(S.preventDefault(),history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${E}`),b(E))})}),t==null||t.addEventListener("click",()=>{const v=t.getAttribute("aria-expanded")==="true";p(!v)}),document.addEventListener("keydown",v=>{v.key==="Escape"&&p(!1)}),document.addEventListener("click",v=>{!n||!v.target||n.contains(v.target)||p(!1)});const w=()=>{var G;const v=window.scrollY+Math.min(180,window.innerHeight*.28),S=o.slice().reverse().find(O=>O.getBoundingClientRect().top+window.scrollY<=v)??o[0],E=S.id,T=e.offsetTop,_=e.offsetTop+e.scrollHeight-window.innerHeight,U=_<=T?1:Math.min(1,Math.max(0,(window.scrollY-T)/(_-T))),R=`${Math.round(U*100)}%`,N=((G=S.textContent)==null?void 0:G.trim())||"Start",ee=E!==d;d=E,s.forEach(O=>{O.style.transform=`scaleX(${U})`}),i.forEach(O=>{O.textContent=R}),c.forEach(O=>{O.textContent=N}),r.forEach(O=>{const X=O.dataset.articleTocLink===E;O.classList.toggle("is-active",X),O.setAttribute("aria-current",X?"true":"false"),X&&ee&&y(O)})};window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("resize",w),w()}function ri(){const e=Array.from(document.querySelectorAll("[data-demo-category-link]")),n=e.map(r=>{var s;return(s=document.getElementById(r.dataset.demoCategoryLink??""))==null?void 0:s.closest(".demo-group")}).filter(r=>!!r);if(!e.length||!n.length)return;let t;const a=r=>{const s=r.closest(".demo-category-list");if(!s||s.scrollWidth<=s.clientWidth)return;const i=s.getBoundingClientRect(),c=r.getBoundingClientRect(),l=12,d=c.left<i.left+l,p=c.right>i.right-l;if(!d&&!p)return;const b=d?c.left-i.left-l:c.right-i.right+l;s.scrollTo({left:s.scrollLeft+b,behavior:"smooth"})},o=()=>{var l;const r=window.scrollY+Math.min(180,window.innerHeight*.28),i=(l=(n.slice().reverse().find(d=>d.getBoundingClientRect().top+window.scrollY<=r)??n[0]).querySelector("h2[id]"))==null?void 0:l.id,c=i!==t;t=i,e.forEach(d=>{const p=d.dataset.demoCategoryLink===i;d.classList.toggle("is-active",p),p?d.setAttribute("aria-current","location"):d.removeAttribute("aria-current"),p&&c&&a(d)})};e.forEach(r=>{r.addEventListener("click",s=>{const i=r.dataset.demoCategoryLink,c=i?document.getElementById(i):null;!c||!i||(s.preventDefault(),history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${i}`),c.scrollIntoView({behavior:"smooth",block:"start"}))})}),window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o),o()}function At(e){return[{id:"macos",title:"Mac",description:"The native editor for your Mac. Build with AdaScript and Swift."},{id:"windows",title:"Windows",description:"Create Ada games on your Windows PC."},{id:"linux",title:"Linux",description:"Build with the open-source engine on Linux."}].map(({id:t,title:a,description:o})=>{const r=On(t,e);return`<article class="platform-download" aria-labelledby="download-${t}">
      <span class="platform-symbol platform-symbol-image" aria-hidden="true" style="--platform-icon: url('${W(`images/downloads/${t}.svg`)}')"></span>
      <h2 id="download-${t}">${a}</h2><p>${o}</p>
      <div class="platform-download-actions">${r.length?r.map(s=>`<a class="header-buttons" href="${C(s.url)}">${It(s)}</a>`).join(""):`<span class="download-status">Installer coming soon</span><a class="download-source-link" href="${C(e.url)}">Get the source code ↗</a>`}</div>
    </article>`}).join("")+`<article class="platform-download platform-download-ios" aria-labelledby="download-ios">
    <span class="platform-symbol" aria-hidden="true">▯</span>
    <h2 id="download-ios">iOS</h2><p>Create and run AdaScript projects on iPad.</p>
    <div class="platform-download-actions"><a class="app-store-badge" href="${sn}" aria-label="Download on the App Store"><img src="${W("images/downloads/app-store.svg")}" alt="Download on the App Store" width="120" height="40" /></a></div>
  </article>`}function ci(){Z.innerHTML=`${Q()}
    <main class="page-shell download-page-shell"><section class="container content-restriction download-page">
      <header class="download-hero"><p class="hero-eyebrow">Make something of your own</p>
        <h1>Download Ada</h1><p>Choose your platform. Start building.</p>
        <a class="download-release" data-release-link href="${ie.url}">Release notes · <span data-download-version>v${ie.version}</span> ↗</a>
      </header>
      <div class="download-grid" data-download-cards>${At(ie)}</div>
      <p class="download-footnote">Ada is free and open source. Desktop downloads appear here as installers are released.</p>
    </section></main>${re()}`}async function li(){const e=await Ct();document.querySelectorAll("[data-download-version]").forEach(t=>{t.textContent=`v${e.version}`}),document.querySelectorAll("[data-release-link]").forEach(t=>{t.href=e.url});const n=document.querySelector("[data-download-cards]");n&&(n.innerHTML=At(e))}async function di(){if(Z.classList.remove("store-app"),/^\/store(\/|$)/.test(window.location.pathname)||(window.location.hostname.startsWith("store.")||window.location.hostname.startsWith("store-test."))&&window.location.pathname==="/"){const{renderStore:n}=await fn(async()=>{const{renderStore:t}=await import("./store-BVbJnx0R.js");return{renderStore:t}},__vite__mapDeps([0,1]));await n(Z,Q,on);return}if(/^\/(cloud|games|legal)(\/|$)/.test(window.location.pathname)){const{renderCloud:n}=await fn(async()=>{const{renderCloud:t}=await import("./cloud-BFLXML1D.js");return{renderCloud:t}},__vite__mapDeps([2,3]));await n(Z,Q,on);return}const e=bt(window.location.pathname,"/");if(hn(Ss(e)),e.name==="studio"){Z.innerHTML=`${Q()}${Mt(B,W)}${re()}`;return}if(e.name==="download"){ci();return}if(e.name==="home"){ei();return}if(e.name==="blog"){Gs();return}if(e.name==="demos"){Hs(await gt());return}if(e.name==="demo"){await Ws(e.slug);return}if(e.name==="static-page"){Xs(e.page);return}if(e.name==="article"){ni(e.slug);return}ze()}function on(){const e=document.querySelector(".header"),n=document.querySelector(".burger-container");if(!e||e.dataset.navigationReady==="true")return;e.dataset.navigationReady="true";let t,a;const o=r=>{if(!(!e||!n)){if(window.clearTimeout(t),window.clearTimeout(a),e.classList.toggle("menu-opened",r),document.body.classList.toggle("menu-opened",r),n.setAttribute("aria-expanded",String(r)),n.setAttribute("aria-label",r?"Close menu":"Open menu"),r){e.classList.remove("menu-closing"),e.classList.add("menu-opening"),t=window.setTimeout(()=>{e.classList.remove("menu-opening")},620);return}e.classList.remove("menu-opening"),e.classList.add("menu-closing"),a=window.setTimeout(()=>{e.classList.remove("menu-closing")},760)}};n==null||n.addEventListener("click",()=>{o(!(e!=null&&e.classList.contains("menu-opened")))}),document.querySelectorAll(".navigation-item-link").forEach(r=>{r.addEventListener("click",()=>{o(!1)})})}function ui(){on(),Nn();const e=document.querySelector(".feature-modal"),n=document.querySelector("#feature-modal-title"),t=document.querySelector("#feature-modal-description"),a=document.querySelector("#feature-modal-kicker"),o=document.querySelector("#feature-modal-visual"),r=()=>{e&&(e.hidden=!0,document.body.classList.remove("modal-opened"))};document.querySelectorAll("[data-feature-index]").forEach(s=>{s.addEventListener("click",()=>{const i=Number(s.dataset.featureIndex),c=Fe[i];!c||!e||!n||!t||!a||!o||(n.textContent=c.title,t.textContent=Ls(c),a.textContent=`Feature ${String(Number(s.dataset.featurePosition)||i+1).padStart(2,"0")}`,e.hidden=!1,document.body.classList.add("modal-opened"),o.innerHTML=mi(c),Nn())})}),document.querySelectorAll("[data-modal-close]").forEach(s=>s.addEventListener("click",r)),document.addEventListener("keydown",s=>{s.key==="Escape"&&r()}),yi(),pi(),fi(),bi(),ri(),oi(),gi(),hi()}function Nn(){document.querySelectorAll("[data-feature-preview]:not([data-preview-listeners-ready])").forEach(e=>{const n=e.querySelector(".feature-media-gif");if(!n)return;e.dataset.previewListenersReady="true";const t=()=>e.classList.add("is-loaded");n.addEventListener("load",t,{once:!0}),n.addEventListener("error",()=>e.classList.add("has-load-error"),{once:!0}),n.complete&&n.naturalWidth>0&&t()})}function pi(){const e=document.querySelector("[data-hero-gif-src]"),n=e==null?void 0:e.dataset.heroGifSrc;if(!e||!n)return;const t=new Image;t.onload=()=>{var i;t.className="hero-gif",t.alt="",t.decoding="async",(i=e.querySelector(".ae-logo-header"))==null||i.replaceWith(t);const a=document.createElement("canvas");a.width=1,a.height=1;const o=a.getContext("2d",{willReadFrequently:!0});if(!o)return;let r={red:34,green:148,blue:255};const s=()=>{try{o.clearRect(0,0,1,1),o.drawImage(t,0,0,1,1);const[c,l,d,p]=o.getImageData(0,0,1,1).data;p>0&&c+l+d>8&&(r={red:Math.round(r.red*.7+c*.3),green:Math.round(r.green*.7+l*.3),blue:Math.round(r.blue*.7+d*.3)},e.style.setProperty("--hero-ambient",`${r.red} ${r.green} ${r.blue}`),e.classList.add("has-ambient-light"))}catch{}window.setTimeout(s,600)};s()},t.src=n}function mi(e){const n=e.gif?W(e.gif):"";return`
    <div class="feature-modal-media feature-media-slot" data-feature-preview>
      ${n?`<img class="feature-media-gif" src="${n}" alt="" decoding="async" />`:""}
      <span class="feature-media-loader" aria-label="Loading animated feature preview">
        <span class="feature-media-spinner" aria-hidden="true"></span>
        <span>Loading preview</span>
      </span>
    </div>
  `}function hi(){document.querySelectorAll("[data-article-comparison-range]").forEach(e=>{var t;const n=(t=e.closest("[data-article-comparison]"))==null?void 0:t.querySelector(".article-comparison-frame");n&&e.addEventListener("input",()=>{n.style.setProperty("--comparison-position",`${e.value}%`),e.setAttribute("aria-valuetext",`${e.value}% ${e.dataset.beforeLabel}`)})})}function gi(){const e=document.querySelector("[data-article-lightbox]"),n=e==null?void 0:e.querySelector("[data-article-lightbox-preview]"),t=e==null?void 0:e.querySelector("[data-article-lightbox-caption]"),a=e==null?void 0:e.querySelector(".article-image-lightbox-close");let o=null;if(!e||!n||!t)return;const r=()=>{e.hidden=!0,n.removeAttribute("src"),document.body.classList.remove("article-lightbox-open"),o instanceof HTMLElement&&o.focus()},s=i=>{var d,p;const c=i.closest("figure"),l=((p=(d=c==null?void 0:c.querySelector("figcaption"))==null?void 0:d.textContent)==null?void 0:p.trim())??"";o=document.activeElement,n.src=i.currentSrc||i.src,n.alt=i.alt,t.textContent=l,t.hidden=!l,e.hidden=!1,document.body.classList.add("article-lightbox-open"),a==null||a.focus()};document.querySelectorAll("[data-article-lightbox-image]").forEach(i=>{i.addEventListener("click",()=>s(i)),i.addEventListener("keydown",c=>{c.key!=="Enter"&&c.key!==" "||(c.preventDefault(),s(i))})}),e.querySelectorAll("[data-article-lightbox-close]").forEach(i=>{i.addEventListener("click",r)}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!e.hidden&&r()})}function fi(){const e=document.querySelector(".demo-player:not(.demo-player-empty)"),n=e==null?void 0:e.querySelector("[data-demo-fullscreen]");if(!e||!n)return;const t=document,a=e,o=document.fullscreenEnabled||t.webkitFullscreenEnabled||typeof e.requestFullscreen=="function"||typeof a.webkitRequestFullscreen=="function",r=()=>document.fullscreenElement??t.webkitFullscreenElement??null,s=()=>r()===e;let i=!1;const c=()=>{i=!0,e.classList.add("is-viewport-fullscreen"),document.body.classList.add("demo-viewport-fullscreen-open"),y()},l=()=>{i=!1,e.classList.remove("is-viewport-fullscreen"),document.body.classList.remove("demo-viewport-fullscreen-open"),y()},d=async()=>o?typeof e.requestFullscreen=="function"?(await e.requestFullscreen(),!0):typeof a.webkitRequestFullscreen=="function"?(await a.webkitRequestFullscreen(),!0):!1:!1,p=async()=>{try{if(await d())return}catch(w){console.warn("Native fullscreen is unavailable, using viewport fullscreen fallback",w)}c()},b=async()=>{var w;if(i){l();return}if(typeof document.exitFullscreen=="function"){await document.exitFullscreen();return}await((w=t.webkitExitFullscreen)==null?void 0:w.call(t))},y=()=>{const w=s()||i;e.classList.toggle("is-fullscreen",w),n.setAttribute("aria-label",w?"Exit demo fullscreen":"Open demo fullscreen"),n.title=w?"Exit fullscreen":"Open fullscreen"};n.addEventListener("click",async()=>{try{if(s()||i){await b();return}await p()}catch(w){console.error("Failed to toggle demo fullscreen",w)}}),document.addEventListener("fullscreenchange",y),document.addEventListener("webkitfullscreenchange",y),document.addEventListener("keydown",w=>{w.key==="Escape"&&i&&l()}),y()}function bi(){const e=document.querySelector(".demo-player:not(.demo-player-empty)"),n=e==null?void 0:e.querySelector("iframe");if(!e||!n)return;const t=document.createElement("canvas");t.width=1,t.height=1;const a=t.getContext("2d",{willReadFrequently:!0});if(!a)return;let o=0,r=0,s={red:34,green:211,blue:238};const i=(d,p,b)=>{s={red:Math.round(s.red*.7+d*.3),green:Math.round(s.green*.7+p*.3),blue:Math.round(s.blue*.7+b*.3)},e.style.setProperty("--demo-ambient",`${s.red} ${s.green} ${s.blue}`),e.classList.add("has-ambient-light")},c=d=>{if(d.origin!==window.location.origin)return;const p=d.data;if(!p||typeof p!="object"||p.type!=="ada-demo-ambient"||!Array.isArray(p.color)||p.color.length<3)return;const[b,y,w]=p.color.map(Number);[b,y,w].every(Number.isFinite)&&i(b,y,w)},l=()=>{var d;try{const p=(d=n.contentDocument)==null?void 0:d.querySelector("canvas");if(!p||p.width<=0||p.height<=0){r+=1,o=window.setTimeout(l,r<120?250:1e3);return}const b=Math.max(0,Math.floor(p.width*.5)),y=Math.max(0,Math.floor(p.height*.42));a.clearRect(0,0,1,1),a.drawImage(p,b,y,1,1,0,0,1,1);const[w,v,S,E]=a.getImageData(0,0,1,1).data;E>0&&w+v+S>8&&i(w,v,S),r=0,o=window.setTimeout(l,450)}catch{r+=1,o=window.setTimeout(l,r<12?450:1200)}};n.addEventListener("load",()=>{window.clearTimeout(o),r=0,o=window.setTimeout(l,500)}),window.addEventListener("message",c),o=window.setTimeout(l,500)}function yi(){const e=document.querySelector(".showcase-carousel"),n=Array.from(document.querySelectorAll(".showcase-slide")),t=Array.from(document.querySelectorAll(".showcase-carousel-dot"));if(!e||n.length<2)return;let a=0,o;const r=i=>{a=(i+n.length)%n.length,n.forEach((c,l)=>{const d=l===a;c.classList.toggle("is-active",d),c.setAttribute("aria-hidden",String(!d)),c.querySelectorAll("a").forEach(p=>{p.tabIndex=d?0:-1})}),t.forEach((c,l)=>{c.classList.toggle("is-active",l===a),c.setAttribute("aria-current",l===a?"true":"false")})},s=()=>{window.clearInterval(o),o=window.setInterval(()=>{r(a+1)},5e3)};t.forEach((i,c)=>{i.addEventListener("click",()=>{r(c),s()})}),e.addEventListener("mouseenter",()=>window.clearInterval(o)),e.addEventListener("mouseleave",s),e.addEventListener("focusin",()=>window.clearInterval(o)),e.addEventListener("focusout",s),r(0),s()}di().catch(e=>{console.error(e),ze("Page failed to load","Refresh the page or try again in a moment.")}).then(()=>{try{ui()}catch(e){console.error("Failed to initialize page interactions",e)}Ds(),li()});
