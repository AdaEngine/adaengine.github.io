(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const V=Object.assign({});function J(e){const t=e.replace(/\r\n/g,`
`);if(!t.startsWith(`---
`))return{frontmatter:{},body:t.trim()};const n=t.indexOf(`
---
`,4);if(n===-1)return{frontmatter:{},body:t.trim()};const a=t.slice(4,n),i=t.slice(n+5).trim(),s={};let o=null;for(const l of a.split(`
`)){const r=l.trim();if(!r){o=null;continue}if(r.startsWith("- ")&&o){const w=s[o],L=j(r.slice(2).trim()),E=Array.isArray(w)?w:[];E.push(L),s[o]=E;continue}const u=l.indexOf(":");if(u===-1){o=null;continue}const d=l.slice(0,u).trim(),f=l.slice(u+1).trim();if(!f){s[d]=[],o=d;continue}s[d]=j(f),o=null}return{frontmatter:s,body:i}}function j(e){return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1).split(",").map(t=>t.trim().replace(/^['"]|['"]$/g,"")).filter(Boolean):e==="true"?!0:e==="false"?!1:e.replace(/^['"]|['"]$/g,"")}function m(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function K(e){return/^(https?:|data:|blob:|\/)/.test(e)?e:`${"/".endsWith("/")?"/":"//"}${e.replace(/^\/+/,"")}`}function Y(e){return/^https?:\/\//.test(e)}function Q(e,t){const n=m(e);if(!/^(https?:\/\/|\/|\.\/|\.\.\/|[A-Za-z0-9/_-])/.test(t))return n;const a=m(t),i=Y(t)?' target="_blank" rel="noreferrer"':"";return`<a href="${a}"${i}>${n}</a>`}function b(e){return m(e).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,(t,n,a)=>Q(n,a))}function X(e){const t=e.toLowerCase();return{js:"JavaScript",javascript:"JavaScript",json:"JSON",md:"Markdown",markdown:"Markdown",sh:"Shell",shell:"Shell",swift:"Swift",ts:"TypeScript",typescript:"TypeScript"}[t]??(e?e[0].toUpperCase()+e.slice(1):"Code")}function ee(e){var i;const t=e.match(/(?:^|\s)(?:title|filename)=["']([^"']+)["']/),n=((i=e.split(/\s+/)[0])==null?void 0:i.replace(/[^\w#+-]/g,""))??"",a=(t==null?void 0:t[1])??e.replace(n,"").trim().replace(/^["']|["']$/g,"");return{language:n,title:a}}function te(e,t){const n=t.toLowerCase();if(!["swift","ts","typescript","js","javascript"].includes(n))return m(e);const a=n==="swift"?"actor|as|associatedtype|await|break|case|catch|class|continue|default|defer|do|else|enum|extension|false|for|func|guard|if|import|in|init|let|nil|private|protocol|public|return|self|some|static|struct|switch|throw|throws|true|try|var|while":"async|await|break|case|catch|class|const|continue|default|else|export|false|for|from|function|if|import|in|interface|let|new|null|return|switch|throw|true|try|type|var|while",i=new RegExp(`("(?:\\\\.|[^"\\\\])*")|(//.*)|(@[A-Za-z_][\\w.]*)|(\\b(?:${a})\\b)|(\\b\\d+(?:\\.\\d+)?\\b)|(\\b[A-Z][A-Za-z0-9_]*\\b)`,"g");let s=0,o="";for(const l of e.matchAll(i)){const r=l.index??0;o+=m(e.slice(s,r));const u=l[0],d=l[1]?"syntax-string":l[2]?"syntax-comment":l[3]?"syntax-attribute":l[4]?"syntax-keyword":l[5]?"syntax-number":"syntax-type";o+=`<span class="${d}">${m(u)}</span>`,s=r+u.length}return`${o}${m(e.slice(s))}`}function ne(e,t,n){const a=X(t);return`
    <figure class="article-code-block">
      <figcaption>
        <span>${m(n||a)}</span>
        <span>${m(a)}</span>
      </figcaption>
      <pre><code class="language-${m(t||"text")}">${te(e,t)}</code></pre>
    </figure>
  `}function ae(e){const t=e.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/),n=e.match(/^::video\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/),a=t??n;if(!a)return null;const[,i,s,o]=a,l=K(s),r=o||i,u=!!n||/\.(mp4|webm|ogg|mov)$/i.test(s),d=u?`<video controls playsinline preload="metadata" src="${m(l)}">${m(i)}</video>`:`<img src="${m(l)}" alt="${m(i)}" loading="lazy" />`;return`
    <figure class="article-media ${u?"article-media-video":"article-media-image"}">
      ${d}
      ${r?`<figcaption>${b(r)}</figcaption>`:""}
    </figure>
  `}function ie(e){const t=[];let n=!1;const a=()=>{n&&(t.push("</ul>"),n=!1)};for(const i of e){const s=i.trim();if(!s){a();continue}if(s.startsWith("- ")){n||(t.push("<ul>"),n=!0),t.push(`<li>${b(s.slice(2))}</li>`);continue}a(),t.push(`<p>${b(s)}</p>`)}return a(),t.join(`
`)}function se(e,t,n){const a=["note","tip","warning","danger","info"].includes(e)?e:"note";return`
    <aside class="article-callout article-callout-${a}">
      <span class="article-callout-icon" aria-hidden="true">!</span>
      <div>
        <p class="article-callout-title">${b(t||{danger:"Important",info:"Info",note:"Note",tip:"Tip",warning:"Warning"}[a])}</p>
        ${ie(n)}
      </div>
    </aside>
  `}function oe(e){const t=e.split(`
`),n=[];let a=!1,i=!1,s="",o="",l=[],r=!1,u="note",d="",f=[];const w=()=>{a&&(n.push("</ul>"),a=!1)},L=()=>{i&&(n.push(ne(l.join(`
`),s,o)),i=!1,s="",o="",l=[])},E=()=>{r&&(n.push(se(u,d,f)),r=!1,u="note",d="",f=[])};for(const k of t){if(k.startsWith("```")){if(w(),E(),i)L();else{const _=ee(k.slice(3).trim());s=_.language,o=_.title,i=!0}continue}if(i){l.push(k);continue}if(k.trim()===":::"){w(),E();continue}if(r){f.push(k);continue}const h=k.trim();if(!h){w();continue}if(h.startsWith("- ")){a||(n.push("<ul>"),a=!0),n.push(`<li>${b(h.slice(2))}</li>`);continue}w();const C=h.match(/^:::(note|tip|warning|danger|info)(?:\s+(.+))?$/i);if(C){u=C[1].toLowerCase(),d=C[2]??"",f=[],r=!0;continue}const B=ae(h);if(B){n.push(B);continue}if(h.startsWith("### ")){n.push(`<h3>${b(h.slice(4))}</h3>`);continue}if(h.startsWith("## ")){n.push(`<h2>${b(h.slice(3))}</h2>`);continue}if(h.startsWith("# ")){n.push(`<h1>${b(h.slice(2))}</h1>`);continue}n.push(`<p>${b(h)}</p>`)}return w(),L(),E(),n.join(`
`)}function I(e){return e.replace(/^#.*$/gm,"").replace(/```[\s\S]*?```/g,"").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/[*`_>#-]/g,"").replace(/\s+/g," ").trim()}function re(e){return I(e).slice(0,180)}function ce(e){const t=I(e).split(" ").filter(Boolean).length;return Math.max(1,Math.ceil(t/180))}function le(e,t){const n=e.title,a=e.slug,i=e.description,s=e.date,o=e.tags,l=e.image,r=e.published,u=e.draft,d=e.featured;if(typeof n!="string"||typeof a!="string"||typeof i!="string"||typeof s!="string")throw new Error(`Invalid article frontmatter in ${t}`);return{title:n,slug:a,description:i,date:s,tags:Array.isArray(o)?o.filter(f=>typeof f=="string"):[],image:typeof l=="string"?l:void 0,published:typeof r=="boolean"?r:!0,draft:typeof u=="boolean"?u:!1,featured:typeof d=="boolean"?d:!1}}const A=Object.entries(V).map(([e,t])=>{const{frontmatter:n,body:a}=J(t);return{...le(n,e),excerpt:re(a),html:oe(a),readingTime:ce(a)}}).filter(e=>e.published&&!e.draft).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime());A.filter(e=>e.featured);function de(e){return A.find(t=>t.slug===e)}const M={schemaVersion:1,generatedAt:"",repository:"AdaEngine/AdaEngine",commit:null,demos:[]};let H=null;const P=new Map;function W(e){return/^(https?:|data:|blob:|\/)/.test(e)?e:`${"/".endsWith("/")?"/":"//"}${e.replace(/^\/+/,"")}`}async function R(){return H??(H=fetch(W("demos/manifest.json"),{headers:{Accept:"application/json"}}).then(e=>e.ok?e.json():M).then(e=>({...M,...e,demos:[...e.demos??[]].sort((t,n)=>t.tag.localeCompare(n.tag)||t.title.localeCompare(n.title))})).catch(()=>M)),H}async function ue(e){const t=W(e.source);return P.set(t,P.get(t)??fetch(t).then(n=>{if(!n.ok)throw new Error(`Failed to load ${e.source}`);return n.text()}).catch(()=>"")),P.get(t)??""}function pe(e,t){return e.demos.find(n=>n.slug===t)}function me(e){const t=new Map;for(const n of e){const a=t.get(n.tag)??{tag:n.tag,title:n.tagTitle,demos:[]};a.demos.push(n),t.set(n.tag,a)}return[...t.values()]}function O(e){const t=e.trim().replace(/\/$/,"");return!t||t==="."||t==="/"?"":t.startsWith("/")?t:`/${t}`}function he(e,t){const n=O(t);let a=e||"/";return a.startsWith("/")||(a=`/${a}`),n&&(a===n||a.startsWith(`${n}/`))&&(a=a.slice(n.length)||"/"),a=a.replace(/\/$/,"")||"/",a.startsWith("/")?a:`/${a}`}function ge(e,t){const n=O(t),a=e.startsWith("/")?e:`/${e}`;return n?`${n}${a==="/"?"/":a}`:a}const fe=["learn","community","donate"];function q(e,t){const n=he(e,t);if(n==="/")return{name:"home"};if(n==="/blog")return{name:"blog"};if(n==="/demos")return{name:"demos"};const a=n.match(/^\/demos\/([^/]+)$/);if(a)return{name:"demo",slug:decodeURIComponent(a[1])};const i=fe.find(o=>n===`/${o}`);if(i)return{name:"static-page",page:i};const s=n.match(/^\/articles\/([^/]+)$/);return s?{name:"article",slug:decodeURIComponent(s[1])}:{name:"not-found",path:n}}const $=document.querySelector("#app")??be(),S="/";function be(){throw new Error("Root app container #app was not found")}const $e="AdaEngine",N="images/main/tilemap.png",F=["images/main/tilemap.png","images/main/space_invaders.jpeg","images/main/duck_hunt.png"],U="AdaEngine/AdaEngine",ye={learn:{title:"Learn AdaEngine",lead:"Master game development in Swift. From your first sprite to advanced Metal rendering techniques.",sections:[{title:"Documentation",body:"Read guides, API notes and examples for the engine core, ECS, renderer, physics and UI systems.",links:[{label:"Open documentation",href:"https://github.com/AdaEngine/AdaEngine"}]},{title:"Examples",body:"Explore sample projects such as tilemaps, arcade games and Swift-first game prototypes.",links:[{label:"Browse examples",href:"https://github.com/AdaEngine/AdaEngine/tree/main/Examples"}]},{title:"Features",body:"Return to the home page feature overview for a quick summary of what AdaEngine can do.",links:[{label:"View features",href:`${p("/")}#features`}]}]}},ve=[{title:"Getting Started",cards:[{title:"Quick Start Guide",body:"Install the engine and create your first window in under 5 minutes.",href:"https://github.com/AdaEngine/AdaEngine",icon:"book"},{title:"ECS Fundamentals",body:"Understand the Entity-Component-System architecture that powers AdaEngine.",href:"https://github.com/AdaEngine/AdaEngine",icon:"play"},{title:"2D Physics Tutorial",body:"Add rigid bodies, collision shapes, and handle physics callbacks.",href:"https://github.com/AdaEngine/AdaEngine",icon:"layout"}]},{title:"API Reference & Documentation",cards:[{title:"Core Framework",body:"Math, Collections, and basic Engine systems.",href:"https://github.com/AdaEngine/AdaEngine"},{title:"Rendering Pipeline",body:"Materials, Shaders, Render Graphs, and Metal integration.",href:"https://github.com/AdaEngine/AdaEngine"},{title:"Audio System",body:"Spatial audio, sound effects, and music streaming.",href:"https://github.com/AdaEngine/AdaEngine"}]}],we=[{title:"GitHub",subtitle:"Contribute to source code",href:"https://github.com/AdaEngine/AdaEngine",icon:"images/socials/github.svg"},{title:"Discord",subtitle:"Live chat & support",href:"https://discord.gg/adaengine",icon:"images/socials/discord.svg"},{title:"Reddit",subtitle:"r/AdaEngine discussions",href:"https://www.reddit.com/r/AdaEngine/",icon:"images/socials/reddit.svg"},{title:"Telegram",subtitle:"Announcements channel",href:"https://t.me/adaengine",iconClass:"community-link-icon-telegram",iconMarkup:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M42.2 8.7 35.8 39c-.5 2.1-1.8 2.6-3.6 1.6l-9.9-7.3-4.8 4.6c-.5.5-1 .9-2 .9l.7-10.1L34.6 12c.8-.7-.2-1.1-1.2-.4L10.6 25.9.8 22.8c-2.1-.7-2.2-2.1.4-3.1L39.5 4.9c1.8-.7 3.4.4 2.7 3.8Z"/></svg>'},{title:"X (Twitter)",subtitle:"Follow @AdaEngine",href:"https://x.com/AdaEngine",iconClass:"community-link-icon-x",iconMarkup:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M28.4 20.6 43.1 4h-3.5L26.9 18.4 16.7 4H5l15.5 21.9L5 43.4h3.5L22 28.1l10.8 15.3h11.7L28.4 20.6Zm-4.8 5.4-1.6-2.2L9.6 6.5H15l10 14 1.6 2.2 13 18.2h-5.4L23.6 26Z"/></svg>'}],Ae=[{title:"Boosty",subtitle:"Monthly Sponsorship",body:"Become a backer on Boosty to get early access to updates, exclusive tutorials, and your name in the engine credits.",href:"https://boosty.to/adaengine",action:"Support on Boosty",icon:"images/icons/ic_boosty.svg",tone:"boosty"},{title:"DonationAlerts",subtitle:"One-time Donation",body:"Prefer to make a one-time contribution? You can support us via DonationAlerts with various payment methods.",href:"https://www.donationalerts.com/r/adaengine",action:"Donate via DA",icon:"images/donation_alerts_logo.svg",tone:"donation-alerts"}],G=[{title:"Data Driven",description:"AdaEngine build around custom Entity Component System. Simple to use, fast and cache-friendly for your game architecture.",code:`@Component
struct Player: Entity { }

struct PlayerSystem: System {
    func update(context: UpdateSceneContext) { }
}`},{title:"2D Renderer",description:"Supports real-time 2D rendering for your games and apps. Write custom shaders, materials and render pipelines.",image:"images/icons/ic_duck.png"},{title:"2D Physics",description:"AdaEngine supports Box2D v3 physics with parallel calculations, lightweight memory usage and fast simulation.",image:"images/icons/ic_box2d.svg"},{title:"Render Graphs",description:"Construct your own render pipeline using powerful render graphs.",image:"images/icons/ic_render_graph.svg"},{title:"Custom UI Engine",description:"Create your own UI using a SwiftUI-like approach that fits naturally into AdaEngine scenes.",code:`struct MainView: View {
    @Environment(\\.scene) var scene

    var body: some View {
        Text("Hello, World!")
    }
}`},{title:"Free and Open Source",description:"AdaEngine is 100% free for you. Licensed by MIT. Learn, modify or use without royalties or runtime fees.",image:"images/icons/ic_opensource.svg"}];function c(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function T(e){const t=new Set(["struct","class","func","var","let","some","override","import","return","for","in","mutating"]),n=/"[^"\\]*(?:\\.[^"\\]*)*"|@[A-Za-z_][\w.]*|\b[A-Za-z_][A-Za-z0-9_]*\b/g;let a="",i=0;return e.replace(n,(s,o)=>(a+=c(e.slice(i,o)),s.startsWith('"')?a+=`<span class="syntax-string">${c(s)}</span>`:s.startsWith("@")?a+=`<span class="syntax-attribute">${c(s)}</span>`:t.has(s)?a+=`<span class="syntax-keyword">${c(s)}</span>`:/^[A-Z]/.test(s)?a+=`<span class="syntax-type">${c(s)}</span>`:a+=c(s),i=o+s.length,s)),a+c(e.slice(i))}function Ee(e){return`${e.description} Designed for Swift-first workflows with a small, composable API surface and production-friendly defaults.`}function D(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(new Date(e))}function p(e){return ge(e,S)}function g(e){const t=S.endsWith("/")?S:`${S}/`,n=e.replace(/^\/+/,"");return`${t}${n}`}function ke(e){return e<1e3?String(e):e<1e6?`${(e/1e3).toFixed(e<1e4?1:0)}k`:`${(e/1e6).toFixed(1)}m`}async function Le(){const e=document.querySelector("[data-github-stars]"),t=document.querySelector("[data-github-stars-value]");if(t)try{const n=await fetch(`https://api.github.com/repos/${U}`,{headers:{Accept:"application/vnd.github+json"}});if(!n.ok)return;const a=await n.json();if(typeof a.stargazers_count!="number")return;const i=ke(a.stargazers_count);t.textContent=i,e==null||e.setAttribute("aria-label",`${i} GitHub stars`)}catch{}}function y(){const e=q(window.location.pathname,"/"),t=e.name==="static-page"?e.page:e.name==="demo"?"demos":e.name,n=[{label:"Home",href:p("/"),active:t==="home"},...A.length?[{label:"News",href:p("/blog"),active:t==="blog"}]:[],{label:"Demos",href:p("/demos"),active:t==="demos"},{label:"Learn",href:p("/learn"),active:t==="learn"},{label:"Socials",href:p("/community"),active:t==="community"},{label:"Donate",href:p("/donate"),active:t==="donate"}];return`
    <header class="header${t==="learn"?" header-learn":""}">
      <section class="container content-restriction header-container">
        <a class="header-logo" href="${p("/")}" aria-label="AdaEngine home">
          <picture class="header-logo-picture">
            <source srcset="${g("images/ae_logo~dark.svg")}" media="(prefers-color-scheme: dark)" />
            <img src="${g("images/ae_logo.svg")}" alt="AdaEngine" />
          </picture>
          <h2>${$e}</h2>
        </a>
        <button class="burger-container" type="button" aria-label="Open menu" aria-expanded="false">
          <span id="burger" aria-hidden="true"><span class="bar topBar"></span><span class="bar bottomBar"></span></span>
        </button>
        <nav aria-label="Main navigation">
          <ul class="navigation">
            ${n.map(i=>`<li class="navigation-item"><a class="navigation-item-link${i.active?" is-active":""}" href="${i.href}">${i.label}</a></li>`).join("")}
            <li class="navigation-item download-button"><a class="navigation-item-link" href="https://github.com/AdaEngine/AdaEngine/releases">Download</a></li>
          </ul>
        </nav>
      </section>
    </header>
  `}function Se(){return`
    <section class="hero-section safe-area-insets">
      <div class="hero-copy">
        <p class="hero-eyebrow">AdaEngine for Swift developers</p>
        <h1 class="ae-header-title">The Open-Source Engine for Swift Developers</h1>
        <p class="hero-subtitle">Build high-performance 2D and 3D games using modern Swift. Clean architecture, native feeling, and developer-first tooling.</p>
        <div class="hero-actions">
          <a class="header-buttons" href="#features">Get Started</a>
          <a class="header-buttons-github" href="https://github.com/${U}" aria-label="AdaEngine on GitHub">
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
      <div class="hero-visual" aria-hidden="true">
        <picture class="ae-logo-header"><source srcset="${g("images/ae_logo~dark.svg")}" media="(prefers-color-scheme: dark)" /><img src="${g("images/ae_logo.svg")}" alt="" /></picture>
        <div class="hero-orbit hero-orbit-one"></div>
        <div class="hero-orbit hero-orbit-two"></div>
      </div>
    </section>
  `}function xe(e=[]){return e.length?`<ul class="tags">${e.map(t=>`<li>${t}</li>`).join("")}</ul>`:""}function Ce(){return A.length?`
    <section id="latest-news" class="latest-news safe-area-insets">
      <h2 class="section-title">Latest News</h2>
      <div class="home-articles-grid">
        ${A.slice(0,4).map(e=>`
              <article class="home-article-preview">
                <a href="${p(`/articles/${e.slug}`)}">
                  <div class="article-preview-image">
                    <img class="background_image" src="${g(N)}" alt="${c(e.title)}" />
                    <div class="background_image_overlay"></div>
                    <div class="article-preview-content">
                      <p class="article-date">${D(e.date)}</p>
                      ${xe(e.tags)}
                      <h3>${e.title}</h3>
                      <p>AdaEngine Team</p>
                    </div>
                  </div>
                </a>
              </article>
            `).join("")}
      </div>
    </section>
  `:""}function Z(e=[]){const t=e[0]??"News";return`<span class="blog-entry-tag blog-entry-tag-${["release","tutorial","engineering","markdown","frontmatter","vite"].find(a=>t.toLowerCase().includes(a))??"default"}">${c(t)}</span>`}function Me(e,t){return e.image??F[t%F.length]??N}function Pe(){$.innerHTML=`
    ${y()}
    <main class="page-shell blog-page-shell">
      <section class="container content-restriction blog-page">
        <header class="blog-page-hero">
          <h1>Engine News</h1>
          <p>Updates, release notes, and engineering deep dives from the AdaEngine team.</p>
        </header>
        ${A.length?`<div class="blog-timeline">
                ${A.map((e,t)=>`
                      <article class="blog-entry">
                        <aside class="blog-entry-meta" aria-label="Article metadata">
                          <time datetime="${e.date}">${D(e.date)}</time>
                          ${Z(e.tags)}
                        </aside>
                        <a class="blog-entry-card" href="${p(`/articles/${e.slug}`)}">
                          <img class="blog-entry-cover" src="${g(Me(e,t))}" alt="" loading="lazy" />
                          <span class="blog-entry-cover-overlay" aria-hidden="true"></span>
                          <span class="blog-entry-content">
                            <h2>${c(e.title)}</h2>
                            <p>${c(e.description)}</p>
                            <span class="blog-entry-action">Read full article →</span>
                          </span>
                        </a>
                      </article>
                    `).join("")}
              </div>`:`<div class="blog-empty">
                <h2>No articles yet</h2>
                <p>Fresh AdaEngine updates will appear here soon.</p>
              </div>`}
      </section>
    </main>
    ${v()}
  `}function Te(e){const t=me(e.demos);$.innerHTML=`
    ${y()}
    <main class="page-shell demos-page-shell">
      <section class="container content-restriction demos-page">
        <header class="demos-hero">
          <p class="eyebrow">Live WebAssembly examples</p>
          <h1>AdaEngine Demos</h1>
          <p>Explore browser builds generated from the Swift files in the AdaEngine repository. Each demo page includes the embedded build and the source that produced it.</p>
        </header>
        ${t.length?`<div class="demo-groups">
                ${t.map(n=>`
                      <section class="demo-group" aria-labelledby="demo-group-${c(n.tag)}">
                        <div class="demo-group-heading">
                          <h2 id="demo-group-${c(n.tag)}">${c(n.title)}</h2>
                          <span>${n.demos.length} ${n.demos.length===1?"demo":"demos"}</span>
                        </div>
                        <div class="demo-card-grid">
                          ${n.demos.map(De).join("")}
                        </div>
                      </section>
                    `).join("")}
              </div>`:`<div class="demo-empty">
                <h2>No demos published yet</h2>
                <p>The website will show demos after the AdaEngine export workflow publishes the first manifest.</p>
              </div>`}
      </section>
    </main>
    ${v()}
  `}function De(e){return`
    <a class="demo-card" href="${p(`/demos/${e.slug}`)}">
      <span class="demo-card-tag">${c(e.tagTitle)}</span>
      <h3>${c(e.title)}</h3>
      <p>${c(e.description)}</p>
      <span class="demo-card-meta">${c(e.sourcePath)}</span>
      ${e.hasBuild?'<span class="demo-card-action">Open demo</span>':'<span class="demo-card-action demo-card-action-muted">Source only</span>'}
    </a>
  `}async function Be(e){const t=await R(),n=pe(t,e);if(!n){x("Demo not found","Check the address or return to the demos page.");return}const a=await ue(n),i=t.commit??"main",s=`https://github.com/${t.repository}/blob/${i}/${n.sourcePath}`;$.innerHTML=`
    ${y()}
    <main class="page-shell demo-detail-shell">
      <article class="container content-restriction demo-detail-page">
        <header class="demo-detail-hero">
          <a class="article-back-link" href="${p("/demos")}">Back to Demos</a>
          <span class="demo-card-tag">${c(n.tagTitle)}</span>
          <h1>${c(n.title)}</h1>
          <p>${c(n.description)}</p>
          <a class="demo-source-link" href="${s}" target="_blank" rel="noreferrer">${c(n.sourcePath)}</a>
        </header>
        ${n.hasBuild?`<section class="demo-player" aria-label="${c(n.title)} embedded demo">
                <iframe title="${c(n.title)}" src="${g(n.embed)}" allow="fullscreen; gamepad; keyboard-map; clipboard-read; clipboard-write; webgpu"></iframe>
              </section>`:`<section class="demo-player demo-player-empty">
                <h2>Build artifact is not available</h2>
                <p>This demo is listed in the manifest, but the WebAssembly export was not published.</p>
              </section>`}
        <section class="demo-source-section" aria-labelledby="demo-source-title">
          <div class="demo-source-heading">
            <h2 id="demo-source-title">Source</h2>
            <a href="${s}" target="_blank" rel="noreferrer">Open on GitHub</a>
          </div>
          <figure class="article-code-block demo-source-code">
            <figcaption>
              <span>${c(n.sourcePath)}</span>
              <span>Swift</span>
            </figcaption>
            <pre><code class="language-swift">${T(a)}</code></pre>
          </figure>
        </section>
      </article>
    </main>
    ${v()}
  `}function _e(){return`
    <section id="features" class="features-container safe-area-insets">
      <div class="section-heading">
        <p class="eyebrow">Capabilities</p>
        <h2 class="section-title">Features</h2>
      </div>
      <div class="features-grid">
        ${G.map((e,t)=>`
              <button class="engine-info-item-container feature-card feature-card-${t+1}" type="button" data-feature-index="${t}" aria-haspopup="dialog">
                <div class="engine-info-item-text">
                  <span class="feature-number">0${t+1}</span>
                  <h3>${e.title}</h3>
                  <p>${e.description}</p>
                </div>
                ${je(e)}
                <span class="feature-card-action">Learn more</span>
              </button>
            `).join("")}
      </div>
    </section>
  `}function je(e){return`
    <div class="engine-info-item-content">
      ${e.image?`<img src="${g(e.image)}" alt="${e.title}" />`:`<pre><code class="swift-code">${T(e.code??"")}</code></pre>`}
    </div>
  `}function He(){return`
    <div class="feature-modal" role="dialog" aria-modal="true" aria-labelledby="feature-modal-title" hidden>
      <div class="feature-modal-backdrop" data-modal-close></div>
      <section class="feature-modal-panel">
        <button class="feature-modal-close" type="button" aria-label="Close feature details" data-modal-close>×</button>
        <div class="feature-modal-visual" id="feature-modal-visual"></div>
        <p class="eyebrow" id="feature-modal-kicker">Feature</p>
        <h2 id="feature-modal-title"></h2>
        <p id="feature-modal-description"></p>
      </section>
    </div>
  `}function v(){return`
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-columns">
          <section>
            <h3>Ada Engine</h3>
            <a href="https://github.com/AdaEngine/AdaEngine/releases">Download</a>
            <a href="https://github.com/AdaEngine/AdaEngine">Source code</a>
          </section>
          <section>
            <h3>Project</h3>
            ${A.length?`<a href="${p("/blog")}">Blog</a>`:""}
            <a href="${p("/learn")}">Learn</a>
            <a href="${p("/community")}">Community</a>
          </section>
          <section>
            <h3>Foundation</h3>
            <a href="${p("/donate")}">Donate</a>
            <a href="https://github.com/AdaEngine/AdaEngine/blob/main/LICENSE">License</a>
          </section>
        </div>
        <div class="footer-bottom">
          <p>© 2021-2025 Vladislav Prusakov and contributors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `}function Fe(e){return e?`
    <span class="learn-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
        ${{book:'<path d="M7 5.5h8.5a2.5 2.5 0 0 1 2.5 2.5v11H9.5A2.5 2.5 0 0 0 7 21.5V5.5Z"/><path d="M7 5.5A2.5 2.5 0 0 1 9.5 3H18v16"/>',play:'<circle cx="12" cy="12" r="9"/><path d="m10.5 8.5 5 3.5-5 3.5v-7Z"/>',layout:'<rect x="4" y="5" width="16" height="14" rx="1.5"/><path d="M9 5v14"/><path d="M4 10h16"/>'}[e]}
      </svg>
    </span>
  `:""}function ze(){const e=ye.learn;$.innerHTML=`
    ${y()}
    <main class="page-shell learn-page-shell">
      <section class="container content-restriction learn-page">
        <header class="learn-hero">
          <h1>${e.title}</h1>
          <p>${e.lead}</p>
        </header>
        ${ve.map(t=>{const n=t.title.replace(/\W+/g,"-").toLowerCase();return`
              <section class="learn-section" aria-labelledby="${n}">
                <h2 id="${n}">${t.title}</h2>
                <div class="learn-grid">
                  ${t.cards.map(a=>`
                        <a class="learn-card" href="${a.href}">
                          ${Fe(a.icon)}
                          <h3>${a.title}</h3>
                          <p>${a.body}</p>
                        </a>
                      `).join("")}
                </div>
              </section>
            `}).join("")}
      </section>
    </main>
    ${v()}
  `}function Ie(e){if(e==="learn"){ze();return}if(e==="community"){Re();return}if(e==="donate"){We();return}}function We(){$.innerHTML=`
    ${y()}
    <main class="page-shell donation-page-shell">
      <section class="container content-restriction donation-page">
        <header class="donation-hero">
          <h1>Support AdaEngine</h1>
          <p>AdaEngine is an independent open-source project. Your support helps us dedicate more time to development and tooling.</p>
        </header>
        <div class="donation-options" aria-label="Donation options">
          ${Ae.map(e=>`
                <article class="donation-card donation-card-${e.tone}">
                  <span class="donation-card-logo" aria-hidden="true">
                    <img src="${g(e.icon)}" alt="" loading="lazy" />
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
    ${v()}
  `}function Re(){$.innerHTML=`
    ${y()}
    <main class="page-shell community-page-shell">
      <section class="container content-restriction community-page">
        <header class="community-hero">
          <h1>Join the Community</h1>
          <p>Connect with other developers, share your projects, and contribute to the engine.</p>
        </header>
        <div class="community-link-grid" aria-label="AdaEngine community links">
          ${we.map(e=>`
                <a class="community-link-card" href="${e.href}" target="_blank" rel="noreferrer">
                  <span class="community-link-icon ${e.iconClass??""}">
                    ${e.iconMarkup??`<img src="${g(e.icon??"")}" alt="" width="42" height="42" loading="lazy" />`}
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
    ${v()}
  `}function Oe(){$.innerHTML=`
    ${y()}
    <main class="page-shell">
      <div class="container content-restriction">
        ${Se()}
        ${Ce()}
        ${_e()}
      </div>
      ${He()}
    </main>
    ${v()}
  `}function qe(e){const t=de(e);if(!t){x("Article not found","Check the address or return to the blog.");return}$.innerHTML=`
    ${y()}
    <main class="page-shell article-page-shell">
      <article class="container content-restriction safe-area-insets article-page">
        <header class="article-hero">
          <a class="article-back-link" href="${p("/blog")}">Back to News</a>
          ${Z(t.tags)}
          <h1>${t.title}</h1>
          <div class="article_info">
            <span>By AdaEngine Team</span>
            <span aria-hidden="true">•</span>
            <time datetime="${t.date}">${D(t.date)}</time>
            <span aria-hidden="true">•</span>
            <span>${t.readingTime} min read</span>
          </div>
          <p class="article-item-description">${t.description}</p>
        </header>
        <div class="article-content">${t.html}</div>
      </article>
    </main>
    ${v()}
  `}function x(e="Page not found",t="This route does not exist yet."){$.innerHTML=`
    ${y()}
    <main class="page-shell">
      <section class="container content-restriction safe-area-insets status-page">
        <h1>${e}</h1>
        <p>${t}</p>
        <a class="header-buttons" href="${p("/")}">Home</a>
      </section>
    </main>
    ${v()}
  `}async function Ne(){const e=q(window.location.pathname,"/");if(e.name==="home"){Oe();return}if(e.name==="blog"){Pe();return}if(e.name==="demos"){Te(await R());return}if(e.name==="demo"){await Be(e.slug);return}if(e.name==="static-page"){Ie(e.page);return}if(e.name==="article"){qe(e.slug);return}x()}function z(){const e=document.querySelector(".header"),t=document.querySelector(".burger-container");t==null||t.addEventListener("click",()=>{const r=(e==null?void 0:e.classList.toggle("menu-opened"))??!1;t.setAttribute("aria-expanded",String(r)),t.setAttribute("aria-label",r?"Close menu":"Open menu"),document.body.classList.toggle("menu-opened",r)}),document.querySelectorAll(".navigation-item-link").forEach(r=>{r.addEventListener("click",()=>{e==null||e.classList.remove("menu-opened"),t==null||t.setAttribute("aria-expanded","false"),document.body.classList.remove("menu-opened")})});const n=document.querySelector(".feature-modal"),a=document.querySelector("#feature-modal-title"),i=document.querySelector("#feature-modal-description"),s=document.querySelector("#feature-modal-kicker"),o=document.querySelector("#feature-modal-visual"),l=()=>{n&&(n.hidden=!0,document.body.classList.remove("modal-opened"))};document.querySelectorAll("[data-feature-index]").forEach(r=>{r.addEventListener("click",()=>{const u=Number(r.dataset.featureIndex),d=G[u];!d||!n||!a||!i||!s||!o||(a.textContent=d.title,i.textContent=Ee(d),s.textContent=`Feature 0${u+1}`,o.innerHTML=d.image?`<img src="${g(d.image)}" alt="${c(d.title)}" />`:`<pre><code class="swift-code">${T(d.code??"")}</code></pre>`,n.hidden=!1,document.body.classList.add("modal-opened"))})}),document.querySelectorAll("[data-modal-close]").forEach(r=>r.addEventListener("click",l)),document.addEventListener("keydown",r=>{r.key==="Escape"&&l()})}Ne().then(()=>{z(),Le()}).catch(e=>{console.error(e),x("Page failed to load","Refresh the page or try again in a moment."),z()});
