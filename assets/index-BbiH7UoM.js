(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const yt="https://apps.apple.com/app/id6809145006",ne={version:"1.0",url:"https://github.com/AdaEngine/AdaEngine/releases/tag/editor-v1.0-1",assets:[{name:"AdaEngine-1.0-1-macOS.zip",url:"https://github.com/AdaEngine/AdaEngine/releases/download/editor-v1.0-1/AdaEngine-1.0-1-macOS.zip"}]};function un(e){if(typeof e=="string")try{const n=new URL(e);return n.protocol==="https:"&&n.hostname==="github.com"&&!n.username&&!n.password&&n.pathname.startsWith("/AdaEngine/AdaEngine/releases/")?n.href:void 0}catch{return}}function wt(e){var i;if(!e||typeof e!="object")return;const n=e,t=un(n.html_url);if(n.draft||n.prerelease||typeof n.tag_name!="string"||!t)return;const o=((i=n.tag_name.match(/^editor-v(\d+\.\d+(?:\.\d+)?)-\d+$/))==null?void 0:i[1])??n.tag_name.replace(/^(?:editor-)?v/,"");if(!/^\d+\.\d+(?:\.\d+)?(?:[-.][a-zA-Z0-9]+)*$/.test(o))return;const r=[];if(Array.isArray(n.assets))for(const s of n.assets){if(!s||typeof s!="object")continue;const c=un(s.browser_download_url);typeof s.name=="string"&&c&&r.push({name:s.name,url:c})}return{version:o,url:t,assets:r}}function Nn(e,n){return n.assets.filter(({name:t})=>/\.(?:sha\d*|sig|asc|blockmap)$/i.test(t)?!1:e==="windows"?/\.(?:exe|msi)$/i.test(t)||/(?:windows|win32|win64).*\.zip$/i.test(t):e==="macos"?/\.(?:dmg|pkg)$/i.test(t)||/(?:macos|mac|darwin|osx).*\.zip$/i.test(t):/\.appimage$/i.test(t)||/linux.*\.(?:zip|tar\.gz|tar\.xz|deb|rpm)$/i.test(t))}function Et(e){return/(?:arm64|aarch64|apple-silicon)/i.test(e.name)?"Download · ARM64":/(?:x86_64|amd64|x64|intel)/i.test(e.name)?"Download · Intel / AMD":"Download"}function vt(e){if(!Array.isArray(e))return ne;const n=e.map(wt).filter(t=>t!==void 0);return n.find(t=>["macos","windows","linux"].some(a=>Nn(a,t).length>0))??(ne.assets.length?ne:n[0]??ne)}async function At(){try{const e=await fetch("https://api.github.com/repos/AdaEngine/AdaEngine/releases?per_page=20",{headers:{Accept:"application/vnd.github+json"},signal:AbortSignal.timeout(5e3)});if(!e.ok)return ne;const n=await e.json();return vt(n)}catch{}return ne}function St(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Cn(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const t=e[n],a=typeof t;(a==="object"||a==="function")&&!Object.isFrozen(t)&&Cn(t)}),e}class pn{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function $n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function ge(e,...n){const t=Object.create(null);for(const a in e)t[a]=e[a];return n.forEach(function(a){for(const o in a)t[o]=a[o]}),t}const _t="</span>",gn=e=>!!e.scope,Tt=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((a,o)=>`${a}${"_".repeat(o+1)}`)].join(" ")}return`${n}${e}`};class xt{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=$n(n)}openNode(n){if(!gn(n))return;const t=Tt(n.scope,{prefix:this.classPrefix});this.span(t)}closeNode(n){gn(n)&&(this.buffer+=_t)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const mn=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class tn{constructor(){this.rootNode=mn(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=mn({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(a=>this._walk(n,a)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{tn._collapse(t)}))}}class kt extends tn{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,t){const a=n.root;t&&(a.scope=`language:${t}`),this.add(a)}toHTML(){return new xt(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Ne(e){return e?typeof e=="string"?e:e.source:null}function Mn(e){return we("(?=",e,")")}function It(e){return we("(?:",e,")*")}function Nt(e){return we("(?:",e,")?")}function we(...e){return e.map(t=>Ne(t)).join("")}function Ct(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function an(...e){return"("+(Ct(e).capture?"":"?:")+e.map(a=>Ne(a)).join("|")+")"}function Rn(e){return new RegExp(e.toString()+"|").exec("").length-1}function $t(e,n){const t=e&&e.exec(n);return t&&t.index===0}const Mt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function sn(e,{joinWith:n}){let t=0;return e.map(a=>{t+=1;const o=t;let r=Ne(a),i="";for(;r.length>0;){const s=Mt.exec(r);if(!s){i+=r;break}i+=r.substring(0,s.index),r=r.substring(s.index+s[0].length),s[0][0]==="\\"&&s[1]?i+="\\"+String(Number(s[1])+o):(i+=s[0],s[0]==="("&&t++)}return i}).map(a=>`(${a})`).join(n)}const Rt=/\b\B/,Ln="[a-zA-Z]\\w*",on="[a-zA-Z_]\\w*",On="\\b\\d+(\\.\\d+)?",Dn="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Bn="\\b(0b[01]+)",Lt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ot=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=we(n,/.*\b/,e.binary,/\b.*/)),ge({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,a)=>{t.index!==0&&a.ignoreMatch()}},e)},Ce={begin:"\\\\[\\s\\S]",relevance:0},Dt={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ce]},Bt={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ce]},Pt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Ge=function(e,n,t={}){const a=ge({scope:"comment",begin:e,end:n,contains:[]},t);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=an("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:we(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},Ut=Ge("//","$"),Ft=Ge("/\\*","\\*/"),Ht=Ge("#","$"),Gt={scope:"number",begin:On,relevance:0},zt={scope:"number",begin:Dn,relevance:0},Wt={scope:"number",begin:Bn,relevance:0},qt={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Ce,{begin:/\[/,end:/\]/,relevance:0,contains:[Ce]}]},Vt={scope:"title",begin:Ln,relevance:0},jt={scope:"title",begin:on,relevance:0},Kt={begin:"\\.\\s*"+on,relevance:0},Zt=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var Oe=Object.freeze({__proto__:null,APOS_STRING_MODE:Dt,BACKSLASH_ESCAPE:Ce,BINARY_NUMBER_MODE:Wt,BINARY_NUMBER_RE:Bn,COMMENT:Ge,C_BLOCK_COMMENT_MODE:Ft,C_LINE_COMMENT_MODE:Ut,C_NUMBER_MODE:zt,C_NUMBER_RE:Dn,END_SAME_AS_BEGIN:Zt,HASH_COMMENT_MODE:Ht,IDENT_RE:Ln,MATCH_NOTHING_RE:Rt,METHOD_GUARD:Kt,NUMBER_MODE:Gt,NUMBER_RE:On,PHRASAL_WORDS_MODE:Pt,QUOTE_STRING_MODE:Bt,REGEXP_MODE:qt,RE_STARTERS_RE:Lt,SHEBANG:Ot,TITLE_MODE:Vt,UNDERSCORE_IDENT_RE:on,UNDERSCORE_TITLE_MODE:jt});function Yt(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function Xt(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Jt(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Yt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Qt(e,n){Array.isArray(e.illegal)&&(e.illegal=an(...e.illegal))}function ea(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function na(e,n){e.relevance===void 0&&(e.relevance=1)}const ta=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=t.keywords,e.begin=we(t.beforeMatch,Mn(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},aa=["of","and","for","in","not","or","if","then","parent","list","value"],sa="keyword";function Pn(e,n,t=sa){const a=Object.create(null);return typeof e=="string"?o(t,e.split(" ")):Array.isArray(e)?o(t,e):Object.keys(e).forEach(function(r){Object.assign(a,Pn(e[r],n,r))}),a;function o(r,i){n&&(i=i.map(s=>s.toLowerCase())),i.forEach(function(s){const c=s.split("|");a[c[0]]=[r,ia(c[0],c[1])]})}}function ia(e,n){return n?Number(n):oa(e)?0:1}function oa(e){return aa.includes(e.toLowerCase())}const fn={},ye=e=>{console.error(e)},hn=(e,...n)=>{console.log(`WARN: ${e}`,...n)},Ae=(e,n)=>{fn[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),fn[`${e}/${n}`]=!0)},Ue=new Error;function Un(e,n,{key:t}){let a=0;const o=e[t],r={},i={};for(let s=1;s<=n.length;s++)i[s+a]=o[s],r[s+a]=!0,a+=Rn(n[s-1]);e[t]=i,e[t]._emit=r,e[t]._multi=!0}function ra(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw ye("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ue;if(typeof e.beginScope!="object"||e.beginScope===null)throw ye("beginScope must be object"),Ue;Un(e,e.begin,{key:"beginScope"}),e.begin=sn(e.begin,{joinWith:""})}}function ca(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw ye("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ue;if(typeof e.endScope!="object"||e.endScope===null)throw ye("endScope must be object"),Ue;Un(e,e.end,{key:"endScope"}),e.end=sn(e.end,{joinWith:""})}}function la(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function da(e){la(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),ra(e),ca(e)}function ua(e){function n(i,s){return new RegExp(Ne(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(s?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,s]),this.matchAt+=Rn(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(c=>c[1]);this.matcherRe=n(sn(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(s);if(!c)return null;const l=c.findIndex((p,b)=>b>0&&p!==void 0),d=this.matchIndexes[l];return c.splice(0,l),Object.assign(c,d)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const c=new t;return this.rules.slice(s).forEach(([l,d])=>c.addRule(l,d)),c.compile(),this.multiRegexes[s]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,c){this.rules.push([s,c]),c.type==="begin"&&this.count++}exec(s){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let l=c.exec(s);if(this.resumingScanAtSamePosition()&&!(l&&l.index===this.lastIndex)){const d=this.getMatcher(0);d.lastIndex=this.lastIndex+1,l=d.exec(s)}return l&&(this.regexIndex+=l.position+1,this.regexIndex===this.count&&this.considerAll()),l}}function o(i){const s=new a;return i.contains.forEach(c=>s.addRule(c.begin,{rule:c,type:"begin"})),i.terminatorEnd&&s.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&s.addRule(i.illegal,{type:"illegal"}),s}function r(i,s){const c=i;if(i.isCompiled)return c;[Xt,ea,da,ta].forEach(d=>d(i,s)),e.compilerExtensions.forEach(d=>d(i,s)),i.__beforeBegin=null,[Jt,Qt,na].forEach(d=>d(i,s)),i.isCompiled=!0;let l=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),l=i.keywords.$pattern,delete i.keywords.$pattern),l=l||/\w+/,i.keywords&&(i.keywords=Pn(i.keywords,e.case_insensitive)),c.keywordPatternRe=n(l,!0),s&&(i.begin||(i.begin=/\B|\b/),c.beginRe=n(c.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(c.endRe=n(c.end)),c.terminatorEnd=Ne(c.end)||"",i.endsWithParent&&s.terminatorEnd&&(c.terminatorEnd+=(i.end?"|":"")+s.terminatorEnd)),i.illegal&&(c.illegalRe=n(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(d){return pa(d==="self"?i:d)})),i.contains.forEach(function(d){r(d,c)}),i.starts&&r(i.starts,s),c.matcher=o(c),c}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=ge(e.classNameAliases||{}),r(e)}function Fn(e){return e?e.endsWithParent||Fn(e.starts):!1}function pa(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return ge(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:Fn(e)?ge(e,{starts:e.starts?ge(e.starts):null}):Object.isFrozen(e)?ge(e):e}var ga="11.11.1";class ma extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const Ye=$n,bn=ge,yn=Symbol("nomatch"),fa=7,Hn=function(e){const n=Object.create(null),t=Object.create(null),a=[];let o=!0;const r="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let s={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:kt};function c(u){return s.noHighlightRe.test(u)}function l(u){let f=u.className+" ";f+=u.parentNode?u.parentNode.className:"";const m=s.languageDetectRe.exec(f);if(m){const A=F(m[1]);return A||(hn(r.replace("{}",m[1])),hn("Falling back to no-highlight mode for this block.",u)),A?m[1]:"no-highlight"}return f.split(/\s+/).find(A=>c(A)||F(A))}function d(u,f,m){let A="",k="";typeof f=="object"?(A=u,m=f.ignoreIllegals,k=f.language):(Ae("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ae("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),k=u,A=f),m===void 0&&(m=!0);const D={code:A,language:k};Q("before:highlight",D);const U=D.result?D.result:p(D.language,D.code,m);return U.code=D.code,Q("after:highlight",U),U}function p(u,f,m,A){const k=Object.create(null);function D(g,h){return g.keywords[h]}function U(){if(!v.keywords){G.addText(B);return}let g=0;v.keywordPatternRe.lastIndex=0;let h=v.keywordPatternRe.exec(B),x="";for(;h;){x+=B.substring(g,h.index);const C=X.case_insensitive?h[0].toLowerCase():h[0],z=D(v,C);if(z){const[le,ht]=z;if(G.addText(x),x="",k[C]=(k[C]||0)+1,k[C]<=fa&&(Le+=ht),le.startsWith("_"))x+=h[0];else{const bt=X.classNameAliases[le]||le;K(h[0],bt)}}else x+=h[0];g=v.keywordPatternRe.lastIndex,h=v.keywordPatternRe.exec(B)}x+=B.substring(g),G.addText(x)}function Y(){if(B==="")return;let g=null;if(typeof v.subLanguage=="string"){if(!n[v.subLanguage]){G.addText(B);return}g=p(v.subLanguage,B,!0,Re[v.subLanguage]),Re[v.subLanguage]=g._top}else g=y(B,v.subLanguage.length?v.subLanguage:null);v.relevance>0&&(Le+=g.relevance),G.__addSublanguage(g._emitter,g.language)}function q(){v.subLanguage!=null?Y():U(),B=""}function K(g,h){g!==""&&(G.startScope(h),G.addText(g),G.endScope())}function Ee(g,h){let x=1;const C=h.length-1;for(;x<=C;){if(!g._emit[x]){x++;continue}const z=X.classNameAliases[g[x]]||g[x],le=h[x];z?K(le,z):(B=le,U(),B=""),x++}}function $e(g,h){return g.scope&&typeof g.scope=="string"&&G.openNode(X.classNameAliases[g.scope]||g.scope),g.beginScope&&(g.beginScope._wrap?(K(B,X.classNameAliases[g.beginScope._wrap]||g.beginScope._wrap),B=""):g.beginScope._multi&&(Ee(g.beginScope,h),B="")),v=Object.create(g,{parent:{value:v}}),v}function Te(g,h,x){let C=$t(g.endRe,x);if(C){if(g["on:end"]){const z=new pn(g);g["on:end"](h,z),z.isMatchIgnored&&(C=!1)}if(C){for(;g.endsParent&&g.parent;)g=g.parent;return g}}if(g.endsWithParent)return Te(g.parent,h,x)}function We(g){return v.matcher.regexIndex===0?(B+=g[0],1):(Ze=!0,0)}function qe(g){const h=g[0],x=g.rule,C=new pn(x),z=[x.__beforeBegin,x["on:begin"]];for(const le of z)if(le&&(le(g,C),C.isMatchIgnored))return We(h);return x.skip?B+=h:(x.excludeBegin&&(B+=h),q(),!x.returnBegin&&!x.excludeBegin&&(B=h)),$e(x,g),x.returnBegin?0:h.length}function Ve(g){const h=g[0],x=f.substring(g.index),C=Te(v,g,x);if(!C)return yn;const z=v;v.endScope&&v.endScope._wrap?(q(),K(h,v.endScope._wrap)):v.endScope&&v.endScope._multi?(q(),Ee(v.endScope,g)):z.skip?B+=h:(z.returnEnd||z.excludeEnd||(B+=h),q(),z.excludeEnd&&(B=h));do v.scope&&G.closeNode(),!v.skip&&!v.subLanguage&&(Le+=v.relevance),v=v.parent;while(v!==C.parent);return C.starts&&$e(C.starts,g),z.returnEnd?0:h.length}function je(){const g=[];for(let h=v;h!==X;h=h.parent)h.scope&&g.unshift(h.scope);g.forEach(h=>G.openNode(h))}let ve={};function Me(g,h){const x=h&&h[0];if(B+=g,x==null)return q(),0;if(ve.type==="begin"&&h.type==="end"&&ve.index===h.index&&x===""){if(B+=f.slice(h.index,h.index+1),!o){const C=new Error(`0 width match regex (${u})`);throw C.languageName=u,C.badRule=ve.rule,C}return 1}if(ve=h,h.type==="begin")return qe(h);if(h.type==="illegal"&&!m){const C=new Error('Illegal lexeme "'+x+'" for mode "'+(v.scope||"<unnamed>")+'"');throw C.mode=v,C}else if(h.type==="end"){const C=Ve(h);if(C!==yn)return C}if(h.type==="illegal"&&x==="")return B+=`
`,1;if(Ke>1e5&&Ke>h.index*3)throw new Error("potential infinite loop, way more iterations than matches");return B+=x,x.length}const X=F(u);if(!X)throw ye(r.replace("{}",u)),new Error('Unknown language: "'+u+'"');const M=ua(X);let pe="",v=A||M;const Re={},G=new s.__emitter(s);je();let B="",Le=0,be=0,Ke=0,Ze=!1;try{if(X.__emitTokens)X.__emitTokens(f,G);else{for(v.matcher.considerAll();;){Ke++,Ze?Ze=!1:v.matcher.considerAll(),v.matcher.lastIndex=be;const g=v.matcher.exec(f);if(!g)break;const h=f.substring(be,g.index),x=Me(h,g);be=g.index+x}Me(f.substring(be))}return G.finalize(),pe=G.toHTML(),{language:u,value:pe,relevance:Le,illegal:!1,_emitter:G,_top:v}}catch(g){if(g.message&&g.message.includes("Illegal"))return{language:u,value:Ye(f),illegal:!0,relevance:0,_illegalBy:{message:g.message,index:be,context:f.slice(be-100,be+100),mode:g.mode,resultSoFar:pe},_emitter:G};if(o)return{language:u,value:Ye(f),illegal:!1,relevance:0,errorRaised:g,_emitter:G,_top:v};throw g}}function b(u){const f={value:Ye(u),illegal:!1,relevance:0,_top:i,_emitter:new s.__emitter(s)};return f._emitter.addText(u),f}function y(u,f){f=f||s.languages||Object.keys(n);const m=b(u),A=f.filter(F).filter(j).map(q=>p(q,u,!1));A.unshift(m);const k=A.sort((q,K)=>{if(q.relevance!==K.relevance)return K.relevance-q.relevance;if(q.language&&K.language){if(F(q.language).supersetOf===K.language)return 1;if(F(K.language).supersetOf===q.language)return-1}return 0}),[D,U]=k,Y=D;return Y.secondBest=U,Y}function w(u,f,m){const A=f&&t[f]||m;u.classList.add("hljs"),u.classList.add(`language-${A}`)}function E(u){let f=null;const m=l(u);if(c(m))return;if(Q("before:highlightElement",{el:u,language:m}),u.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",u);return}if(u.children.length>0&&(s.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(u)),s.throwUnescapedHTML))throw new ma("One of your code blocks includes unescaped HTML.",u.innerHTML);f=u;const A=f.textContent,k=m?d(A,{language:m,ignoreIllegals:!0}):y(A);u.innerHTML=k.value,u.dataset.highlighted="yes",w(u,m,k.language),u.result={language:k.language,re:k.relevance,relevance:k.relevance},k.secondBest&&(u.secondBest={language:k.secondBest.language,relevance:k.secondBest.relevance}),Q("after:highlightElement",{el:u,result:k,text:A})}function S(u){s=bn(s,u)}const _=()=>{P(),Ae("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function T(){P(),Ae("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let I=!1;function P(){function u(){P()}if(document.readyState==="loading"){I||window.addEventListener("DOMContentLoaded",u,!1),I=!0;return}document.querySelectorAll(s.cssSelector).forEach(E)}function $(u,f){let m=null;try{m=f(e)}catch(A){if(ye("Language definition for '{}' could not be registered.".replace("{}",u)),o)ye(A);else throw A;m=i}m.name||(m.name=u),n[u]=m,m.rawDefinition=f.bind(null,e),m.aliases&&O(m.aliases,{languageName:u})}function L(u){delete n[u];for(const f of Object.keys(t))t[f]===u&&delete t[f]}function Z(){return Object.keys(n)}function F(u){return u=(u||"").toLowerCase(),n[u]||n[t[u]]}function O(u,{languageName:f}){typeof u=="string"&&(u=[u]),u.forEach(m=>{t[m.toLowerCase()]=f})}function j(u){const f=F(u);return f&&!f.disableAutodetect}function fe(u){u["before:highlightBlock"]&&!u["before:highlightElement"]&&(u["before:highlightElement"]=f=>{u["before:highlightBlock"](Object.assign({block:f.el},f))}),u["after:highlightBlock"]&&!u["after:highlightElement"]&&(u["after:highlightElement"]=f=>{u["after:highlightBlock"](Object.assign({block:f.el},f))})}function ce(u){fe(u),a.push(u)}function ue(u){const f=a.indexOf(u);f!==-1&&a.splice(f,1)}function Q(u,f){const m=u;a.forEach(function(A){A[m]&&A[m](f)})}function he(u){return Ae("10.7.0","highlightBlock will be removed entirely in v12.0"),Ae("10.7.0","Please use highlightElement now."),E(u)}Object.assign(e,{highlight:d,highlightAuto:y,highlightAll:P,highlightElement:E,highlightBlock:he,configure:S,initHighlighting:_,initHighlightingOnLoad:T,registerLanguage:$,unregisterLanguage:L,listLanguages:Z,getLanguage:F,registerAliases:O,autoDetection:j,inherit:bn,addPlugin:ce,removePlugin:ue}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=ga,e.regex={concat:we,lookahead:Mn,either:an,optional:Nt,anyNumberOfTimes:It};for(const u in Oe)typeof Oe[u]=="object"&&Cn(Oe[u]);return Object.assign(e,Oe),e},_e=Hn({});_e.newInstance=()=>Hn({});var ha=_e;_e.HighlightJS=_e;_e.default=_e;const se=St(ha);function ba(e){const n=e.regex,t={},a={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},a]});const o={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},r=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),i={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},s={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,o]};o.contains.push(s);const c={match:/\\"/},l={className:"string",begin:/'/,end:/'/},d={match:/\\'/},p={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]},b=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],y=e.SHEBANG({binary:`(${b.join("|")})`,relevance:10}),w={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},E=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],S=["true","false"],_={match:/(\/[a-z._-]+)+/},T=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],I=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],P=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],$=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:E,literal:S,built_in:[...T,...I,"set","shopt",...P,...$]},contains:[y,e.SHEBANG(),w,p,r,i,_,s,c,l,d,t]}}const wn="[A-Za-z$_][0-9A-Za-z$_]*",ya=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],wa=["true","false","null","undefined","NaN","Infinity"],Gn=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],zn=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Wn=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Ea=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],va=[].concat(Wn,Gn,zn);function Aa(e){const n=e.regex,t=(m,{after:A})=>{const k="</"+m[0].slice(1);return m.input.indexOf(k,A)!==-1},a=wn,o={begin:"<>",end:"</>"},r=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(m,A)=>{const k=m[0].length+m.index,D=m.input[k];if(D==="<"||D===","){A.ignoreMatch();return}D===">"&&(t(m,{after:k})||A.ignoreMatch());let U;const Y=m.input.substring(k);if(U=Y.match(/^\s*=/)){A.ignoreMatch();return}if((U=Y.match(/^\s+extends\s+/))&&U.index===0){A.ignoreMatch();return}}},s={$pattern:wn,keyword:ya,literal:wa,built_in:va,"variable.language":Ea},c="[0-9](_?[0-9])*",l=`\\.(${c})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${d})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},b={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},y={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"xml"}},w={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"css"}},E={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"graphql"}},S={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,b]},T={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},I=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,E,S,{match:/\$\d+/},p];b.contains=I.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(I)});const P=[].concat(T,b.contains),$=P.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:["self"].concat(P)}]),L={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:$},Z={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},F={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Gn,...zn]}},O={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},j={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[L],illegal:/%/},fe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ce(m){return n.concat("(?!",m.join("|"),")")}const ue={match:n.concat(/\b/,ce([...Wn,"super","import"].map(m=>`${m}\\s*\\(`)),a,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},Q={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},he={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},L]},u="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",f={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(u)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[L]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:$,CLASS_REFERENCE:F},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),O,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,E,S,T,{match:/\$\d+/},p,F,{scope:"attr",match:a+n.lookahead(":"),relevance:0},f,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,e.REGEXP_MODE,{className:"function",begin:u,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:$}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:r},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},j,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[L,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},Q,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[L]},ue,fe,Z,he,{match:/\$[(.]/}]}}function Sa(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},a=["true","false","null"],o={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:a},contains:[n,t,e.QUOTE_STRING_MODE,o,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function _a(e){const n=e.regex,t={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},a={begin:"^[-\\*]{3,}",end:"$"},o={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},r={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},i={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},s=/[A-Za-z][A-Za-z0-9+.-]*/,c={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:n.concat(/\[.+?\]\(/,s,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},l={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},d={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},p=e.inherit(l,{contains:[]}),b=e.inherit(d,{contains:[]});l.contains.push(b),d.contains.push(p);let y=[t,c];return[l,d,p,b].forEach(_=>{_.contains=_.contains.concat(y)}),y=y.concat(l,d),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:y},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:y}]}]},t,r,l,d,{className:"quote",begin:"^>\\s+",contains:y,end:"$"},o,a,c,i,{scope:"literal",match:/&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/}]}}function qn(e){return e?typeof e=="string"?e:e.source:null}function xe(e){return R("(?=",e,")")}function R(...e){return e.map(t=>qn(t)).join("")}function Ta(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function V(...e){return"("+(Ta(e).capture?"":"?:")+e.map(a=>qn(a)).join("|")+")"}const rn=e=>R(/\b/,e,/\w$/.test(e)?/\b/:/\B/),xa=["Protocol","Type"].map(rn),En=["init","self"].map(rn),ka=["Any","Self"],Xe=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","package","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],vn=["false","nil","true"],Ia=["assignment","associativity","higherThan","left","lowerThan","none","right"],Na=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],An=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],Vn=V(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),jn=V(Vn,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),Je=R(Vn,jn,"*"),Kn=V(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),Fe=V(Kn,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),te=R(Kn,Fe,"*"),De=R(/[A-Z]/,Fe,"*"),Ca=["attached","autoclosure",R(/convention\(/,V("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",R(/objc\(/,te,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],$a=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function Ma(e){const n={match:/\s+/,relevance:0},t=e.COMMENT("/\\*","\\*/",{contains:["self"]}),a=[e.C_LINE_COMMENT_MODE,t],o={match:[/\./,V(...xa,...En)],className:{2:"keyword"}},r={match:R(/\./,V(...Xe)),relevance:0},i=Xe.filter(M=>typeof M=="string").concat(["_|0"]),s=Xe.filter(M=>typeof M!="string").concat(ka).map(rn),c={variants:[{className:"keyword",match:V(...s,...En)}]},l={$pattern:V(/\b\w+/,/#\w+/),keyword:i.concat(Na),literal:vn},d=[o,r,c],p={match:R(/\./,V(...An)),relevance:0},b={className:"built_in",match:R(/\b/,V(...An),/(?=\()/)},y=[p,b],w={match:/->/,relevance:0},E={className:"operator",relevance:0,variants:[{match:Je},{match:`\\.(\\.|${jn})+`}]},S=[w,E],_="([0-9]_*)+",T="([0-9a-fA-F]_*)+",I={className:"number",relevance:0,variants:[{match:`\\b(${_})(\\.(${_}))?([eE][+-]?(${_}))?\\b`},{match:`\\b0x(${T})(\\.(${T}))?([pP][+-]?(${_}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},P=(M="")=>({className:"subst",variants:[{match:R(/\\/,M,/[0\\tnr"']/)},{match:R(/\\/,M,/u\{[0-9a-fA-F]{1,8}\}/)}]}),$=(M="")=>({className:"subst",match:R(/\\/,M,/[\t ]*(?:[\r\n]|\r\n)/)}),L=(M="")=>({className:"subst",label:"interpol",begin:R(/\\/,M,/\(/),end:/\)/}),Z=(M="")=>({begin:R(M,/"""/),end:R(/"""/,M),contains:[P(M),$(M),L(M)]}),F=(M="")=>({begin:R(M,/"/),end:R(/"/,M),contains:[P(M),L(M)]}),O={className:"string",variants:[Z(),Z("#"),Z("##"),Z("###"),F(),F("#"),F("##"),F("###")]},j=[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}],fe={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:j},ce=M=>{const pe=R(M,/\//),v=R(/\//,M);return{begin:pe,end:v,contains:[...j,{scope:"comment",begin:`#(?!.*${v})`,end:/$/}]}},ue={scope:"regexp",variants:[ce("###"),ce("##"),ce("#"),fe]},Q={match:R(/`/,te,/`/)},he={className:"variable",match:/\$\d+/},u={className:"variable",match:`\\$${Fe}+`},f=[Q,he,u],m={match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:$a,contains:[...S,I,O]}]}},A={scope:"keyword",match:R(/@/,V(...Ca),xe(V(/\(/,/\s+/)))},k={scope:"meta",match:R(/@/,te)},D=[m,A,k],U={match:xe(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:R(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,Fe,"+")},{className:"type",match:De,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:R(/\s+&\s+/,xe(De)),relevance:0}]},Y={begin:/</,end:/>/,keywords:l,contains:[...a,...d,...D,w,U]};U.contains.push(Y);const q={match:R(te,/\s*:/),keywords:"_|0",relevance:0},K={begin:/\(/,end:/\)/,relevance:0,keywords:l,contains:["self",q,...a,ue,...d,...y,...S,I,O,...f,...D,U]},Ee={begin:/</,end:/>/,keywords:"repeat each",contains:[...a,U]},$e={begin:V(xe(R(te,/\s*:/)),xe(R(te,/\s+/,te,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:te}]},Te={begin:/\(/,end:/\)/,keywords:l,contains:[$e,...a,...d,...S,I,O,...D,U,K],endsParent:!0,illegal:/["']/},We={match:[/(func|macro)/,/\s+/,V(Q.match,te,Je)],className:{1:"keyword",3:"title.function"},contains:[Ee,Te,n],illegal:[/\[/,/%/]},qe={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[Ee,Te,n],illegal:/\[|%/},Ve={match:[/operator/,/\s+/,Je],className:{1:"keyword",3:"title"}},je={begin:[/precedencegroup/,/\s+/,De],className:{1:"keyword",3:"title"},contains:[U],keywords:[...Ia,...vn],end:/}/},ve={match:[/class\b/,/\s+/,/func\b/,/\s+/,/\b[A-Za-z_][A-Za-z0-9_]*\b/],scope:{1:"keyword",3:"keyword",5:"title.function"}},Me={match:[/class\b/,/\s+/,/var\b/],scope:{1:"keyword",3:"keyword"}},X={begin:[/(struct|protocol|class|extension|enum|actor)/,/\s+/,te,/\s*/],beginScope:{1:"keyword",3:"title.class"},keywords:l,contains:[Ee,...d,{begin:/:/,end:/\{/,keywords:l,contains:[{scope:"title.class.inherited",match:De},...d],relevance:0}]};for(const M of O.variants){const pe=M.contains.find(Re=>Re.label==="interpol");pe.keywords=l;const v=[...d,...y,...S,I,O,...f];pe.contains=[...v,{begin:/\(/,end:/\)/,contains:["self",...v]}]}return{name:"Swift",keywords:l,contains:[...a,We,qe,ve,Me,X,Ve,je,{beginKeywords:"import",end:/$/,contains:[...a],relevance:0},ue,...d,...y,...S,I,O,...f,...D,U,K]}}const He="[A-Za-z$_][0-9A-Za-z$_]*",Zn=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Yn=["true","false","null","undefined","NaN","Infinity"],Xn=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Jn=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Qn=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],et=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],nt=[].concat(Qn,Xn,Jn);function Ra(e){const n=e.regex,t=(m,{after:A})=>{const k="</"+m[0].slice(1);return m.input.indexOf(k,A)!==-1},a=He,o={begin:"<>",end:"</>"},r=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(m,A)=>{const k=m[0].length+m.index,D=m.input[k];if(D==="<"||D===","){A.ignoreMatch();return}D===">"&&(t(m,{after:k})||A.ignoreMatch());let U;const Y=m.input.substring(k);if(U=Y.match(/^\s*=/)){A.ignoreMatch();return}if((U=Y.match(/^\s+extends\s+/))&&U.index===0){A.ignoreMatch();return}}},s={$pattern:He,keyword:Zn,literal:Yn,built_in:nt,"variable.language":et},c="[0-9](_?[0-9])*",l=`\\.(${c})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${d})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},b={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},y={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"xml"}},w={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"css"}},E={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"graphql"}},S={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,b]},T={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},I=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,E,S,{match:/\$\d+/},p];b.contains=I.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(I)});const P=[].concat(T,b.contains),$=P.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:["self"].concat(P)}]),L={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:$},Z={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},F={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Xn,...Jn]}},O={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},j={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[L],illegal:/%/},fe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ce(m){return n.concat("(?!",m.join("|"),")")}const ue={match:n.concat(/\b/,ce([...Qn,"super","import"].map(m=>`${m}\\s*\\(`)),a,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},Q={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},he={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},L]},u="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",f={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(u)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[L]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:$,CLASS_REFERENCE:F},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),O,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,E,S,T,{match:/\$\d+/},p,F,{scope:"attr",match:a+n.lookahead(":"),relevance:0},f,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,e.REGEXP_MODE,{className:"function",begin:u,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:$}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:r},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},j,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[L,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},Q,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[L]},ue,fe,Z,he,{match:/\$[(.]/}]}}function La(e){const n=e.regex,t=Ra(e),a=He,o=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],r={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:o},contains:[t.exports.CLASS_REFERENCE]},s={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},c=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],l={$pattern:He,keyword:Zn.concat(c),literal:Yn,built_in:nt.concat(o),"variable.language":et},d={className:"meta",begin:"@"+a},p=(E,S,_)=>{const T=E.contains.findIndex(I=>I.label===S);if(T===-1)throw new Error("can not find mode to replace");E.contains.splice(T,1,_)};Object.assign(t.keywords,l),t.exports.PARAMS_CONTAINS.push(d);const b=t.contains.find(E=>E.scope==="attr"),y=Object.assign({},b,{match:n.concat(a,n.lookahead(/\s*\?:/))});t.exports.PARAMS_CONTAINS.push([t.exports.CLASS_REFERENCE,b,y]),t.contains=t.contains.concat([d,r,i,y]),p(t,"shebang",e.SHEBANG()),p(t,"use_strict",s);const w=t.contains.find(E=>E.label==="func.def");return w.relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),t}function Oa(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a=/[\p{L}0-9._:-]+/u,o={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(r,{begin:/\(/,end:/\)/}),s=e.inherit(e.APOS_STRING_MODE,{className:"string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:a,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[o]},{begin:/'/,end:/'/,contains:[o]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,c,s,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,i,c,s]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},o,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:l}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function Da(e){const n="true false yes no null",t="[\\w#;/?:@&=+$,.~*'()[\\]]+",a={className:"attr",variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},o={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},r={className:"string",relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:"char.escape",relevance:0}]},i={className:"string",relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,o]},s=e.inherit(i,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),b={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},y={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},w={begin:/\{/,end:/\}/,contains:[y],illegal:"\\n",relevance:0},E={begin:"\\[",end:"\\]",contains:[y],illegal:"\\n",relevance:0},S=[a,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+t},{className:"type",begin:"!<"+t+">"},{className:"type",begin:"!"+t},{className:"type",begin:"!!"+t},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},b,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},w,E,r,i],_=[...S];return _.pop(),_.push(s),y.contains=_,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:S}}se.registerLanguage("bash",ba);se.registerLanguage("javascript",Aa);se.registerLanguage("json",Sa);se.registerLanguage("markdown",_a);se.registerLanguage("swift",e=>{const n=Ma(e);return n.contains=[{scope:"property",begin:/\.[A-Za-z_]\w*/},...n.contains??[]],n});se.registerLanguage("typescript",La);se.registerLanguage("xml",Oa);se.registerLanguage("yaml",Da);const Ba={html:"xml",js:"javascript",md:"markdown",sh:"bash",shell:"bash",ts:"typescript",txt:"plaintext",yml:"yaml"};function tt(e){const n=e.trim().toLowerCase();return Ba[n]??n}function at(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function st(e){const n=tt(e);return n?`language-${at(n)}`:"language-plaintext"}function it(e,n){const t=tt(n);return!t||t==="plaintext"||!se.getLanguage(t)?at(e):se.highlight(e,{language:t,ignoreIllegals:!0}).value}function Pa(e,n){const t=e.replace(/\r\n?/g,`
`).split(`
`);return t.length>1&&t[t.length-1]===""&&t.pop(),t.map((a,o)=>`<span class="code-line"><span class="code-line-number" aria-hidden="true">${o+1}</span><span class="code-line-content">${it(a,n)}</span></span>`).join("")}const Ua=`---
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

If that sounds exciting, you can jump straight into the [tutorials](https://adaengine.org/adaengine-docs/tutorials/adaengine/) or explore the [GitHub repository](https://github.com/AdaEngine/AdaEngine).

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

For more control, use [\`EmptyWindow\`](https://adaengine.org/adaengine-docs/documentation/adaapp/emptywindow) and add plugins manually:

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

[\`DefaultPlugins\`](https://adaengine.org/adaengine-docs/documentation/adaengine/defaultplugins/) is the bundle most users should start with. When you need a lighter runtime, you can disable parts of the bundle with [\`disable(_:)\`](https://adaengine.org/adaengine-docs/documentation/adaengine/defaultplugins/disable(_:)).

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

When a system needs to spawn or delete entities, or insert components, it can use [\`Commands\`](https://adaengine.org/adaengine-docs/documentation/adaecs/commands). Commands are collected and then applied after the system finishes, which keeps system execution safe.

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

Systems can keep local state with [\`Local\`](https://adaengine.org/adaengine-docs/documentation/adaecs/local):

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

For more control, AdaECS also supports struct-based systems with [\`@PlainSystem\`](https://adaengine.org/adaengine-docs/documentation/adaecs/plainsystem(dependencies:)):

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

If you prefer a Unity-like workflow for some gameplay code, Ada provides [\`ScriptableObject\`](https://adaengine.org/adaengine-docs/documentation/adascene/scriptableobject) and [\`ScriptableComponents\`](https://adaengine.org/adaengine-docs/documentation/adascene/scriptablecomponents):

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

A view implements the [\`View\`](https://adaengine.org/adaengine-docs/documentation/adaui/view) protocol:

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

To show a view in the world, attach it with [\`UIComponent\`](https://adaengine.org/adaengine-docs/documentation/adaui/uicomponent):

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

Sprites are a core building block for many 2D games. Ada can render sprites from [\`Texture2D\`](https://adaengine.org/adaengine-docs/documentation/adarender/texture2d) and other texture resources:

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

You can add support for custom assets by implementing the [\`Asset\`](https://adaengine.org/adaengine-docs/documentation/adaassets/asset) protocol:

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

If any of this sounds interesting, please check out [Ada on GitHub](https://github.com/AdaEngine/AdaEngine), read the [tutorial series](https://adaengine.org/adaengine-docs/tutorials/adaengine/), explore the examples, and join the discussion.

Ada is currently built by volunteers. If you want to help build a Swift game engine — with code, documentation, examples, testing, design feedback, or ideas — you are very welcome.

This is only version 0.1.0, but it is the start of something I have wanted to build for a long time.

Let's make games with Swift.
`,Fa=[{name:"Vladislav Prusakov",description:"AdaEngine Founder, iOS Engineer",username:"SpectralDragon",avatar:"authors/spectraldragon.jpg",socials:[{username:"SpectralDragon",social:"github"},{username:"SpectralDragon_",social:"twitter"}]}],Ha={},Ga=Fa,za=Ha?Object.assign({"./content/articles/introducing-adaengine-0-1-0.md":Ua}):{};function Wa(e){const n=e.replace(/\r\n/g,`
`);if(!n.startsWith(`---
`))return{frontmatter:{},body:n.trim()};const t=n.indexOf(`
---
`,4);if(t===-1)return{frontmatter:{},body:n.trim()};const a=n.slice(4,t),o=n.slice(t+5).trim(),r={};let i=null;for(const s of a.split(`
`)){const c=s.trim();if(!c){i=null;continue}if(c.startsWith("- ")&&i){const b=r[i],y=Sn(c.slice(2).trim()),w=Array.isArray(b)?b:[];w.push(y),r[i]=w;continue}const l=s.indexOf(":");if(l===-1){i=null;continue}const d=s.slice(0,l).trim(),p=s.slice(l+1).trim();if(!p){r[d]=[],i=d;continue}r[d]=Sn(p),i=null}return{frontmatter:r,body:o}}function Sn(e){return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1).split(",").map(n=>n.trim().replace(/^['"]|['"]$/g,"")).filter(Boolean):e==="true"?!0:e==="false"?!1:e.replace(/^['"]|['"]$/g,"")}function ae(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function qa(e){return/^(https?:|data:|blob:|\/)/.test(e)?e:`${"/".endsWith("/")?"/":"//"}${e.replace(/^\/+/,"")}`}function ot(e){return/^https?:\/\//.test(e)}function Qe(e){return e.trim().replace(/^@/,"").toLowerCase()}function Va(e){var t;if(typeof e.url=="string")return e.url;if(typeof e.profileUrl=="string")return e.profileUrl;const n=(t=e.socials)==null?void 0:t.find(a=>a.social==="github");if(typeof(n==null?void 0:n.url)=="string")return n.url;if(typeof(n==null?void 0:n.username)=="string")return`https://github.com/${n.username.replace(/^@/,"")}`;if(typeof e.username=="string")return`https://github.com/${e.username.replace(/^@/,"")}`}function ja(e,n){if(typeof e!="string"||!e.trim())throw new Error(`Invalid article author in ${n}`);const t=Qe(e),a=Ga.find(o=>Qe(o.username??o.name)===t||Qe(o.name)===t);return a?{name:a.name,url:Va(a),avatar:typeof a.avatar=="string"?a.avatar:void 0}:ot(e)?{name:e,url:e}:{name:e}}function Ka(e,n){if(!/^(https?:\/\/|\/|\.\/|\.\.\/|[A-Za-z0-9/_-])/.test(n))return Se(e);const t=ae(n),a=ot(n)?' target="_blank" rel="noreferrer"':"";return`<a href="${t}"${a}>${Se(e)}</a>`}function Se(e){return ae(e).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>")}function Za(e,n){let t=0;for(let a=n;a<e.length;a+=1){const o=e[a];if(o==="("){t+=1;continue}if(o===")"){if(t===0)return a;t-=1}}return-1}function de(e){let n="",t=0;for(;t<e.length;){const a=e.indexOf("[",t);if(a===-1){n+=Se(e.slice(t));break}const o=e.indexOf("]",a+1);if(o===-1||e[o+1]!=="("){n+=Se(e.slice(t,a+1)),t=a+1;continue}const r=o+2,i=Za(e,r);if(i===-1){n+=Se(e.slice(t,a+1)),t=a+1;continue}n+=Se(e.slice(t,a)),n+=Ka(e.slice(a+1,o),e.slice(r,i)),t=i+1}return n}function Ya(e){const n=e.toLowerCase();return{js:"JavaScript",javascript:"JavaScript",json:"JSON",md:"Markdown",markdown:"Markdown",sh:"Shell",shell:"Shell",swift:"Swift",ts:"TypeScript",typescript:"TypeScript",yaml:"YAML",yml:"YAML"}[n]??(e?e[0].toUpperCase()+e.slice(1):"Code")}function Xa(e){var o;const n=e.match(/(?:^|\s)(?:title|filename)=["']([^"']+)["']/),t=((o=e.split(/\s+/)[0])==null?void 0:o.replace(/[^\w#+-]/g,""))??"",a=(n==null?void 0:n[1])??e.replace(t,"").trim().replace(/^["']|["']$/g,"");return{language:t,title:a}}function Ja(e,n,t){const a=Ya(n);return`
    <figure class="article-code-block">
      <figcaption>
        <span>${ae(t)}</span>
        <span>${ae(a)}</span>
      </figcaption>
      <pre><code class="${st(n)}">${it(e,n)}</code></pre>
    </figure>
  `}function Qa(e){const n=e.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/),t=e.match(/^::video\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/),a=n??t;if(!a)return null;const[,o,r,i]=a,s=qa(r),c=i||o,l=!!t||/\.(mp4|webm|ogg|mov)$/i.test(r),d=l?`<video controls playsinline preload="metadata" src="${ae(s)}">${ae(o)}</video>`:`<img src="${ae(s)}" alt="${ae(o)}" loading="lazy" role="button" tabindex="0" aria-label="Open image fullscreen" data-article-lightbox-image />`;return`
    <figure class="article-media ${l?"article-media-video":"article-media-image"}">
      ${d}
      ${c?`<figcaption>${de(c)}</figcaption>`:""}
    </figure>
  `}function es(e){const n=[];let t=!1;const a=()=>{t&&(n.push("</ul>"),t=!1)};for(const o of e){const r=o.trim();if(!r){a();continue}if(r.startsWith("- ")){t||(n.push("<ul>"),t=!0),n.push(`<li>${de(r.slice(2))}</li>`);continue}a(),n.push(`<p>${de(r)}</p>`)}return a(),n.join(`
`)}function ns(e,n,t){const a=["note","tip","warning","danger","info"].includes(e)?e:"note";return`
    <aside class="article-callout article-callout-${a}">
      <span class="article-callout-icon" aria-hidden="true">!</span>
      <div>
        <p class="article-callout-title">${de(n||{danger:"Important",info:"Info",note:"Note",tip:"Tip",warning:"Warning"}[a])}</p>
        ${es(t)}
      </div>
    </aside>
  `}function _n(e,n){const t=e.toLowerCase().replace(/`([^`]+)`/g,"$1").replace(/&[a-z]+;/gi,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"section",a=n.get(t)??0;return n.set(t,a+1),a===0?t:`${t}-${a+1}`}function ts(e){const n=e.split(`
`),t=[],a=[],o=new Map;let r=!1,i=!1,s="",c="",l=[],d=!1,p="note",b="",y=[];const w=()=>{r&&(t.push("</ul>"),r=!1)},E=()=>{i&&(t.push(Ja(l.join(`
`),s,c)),i=!1,s="",c="",l=[])},S=()=>{d&&(t.push(ns(p,b,y)),d=!1,p="note",b="",y=[])};for(const _ of n){if(_.startsWith("```")){if(w(),S(),i)E();else{const $=Xa(_.slice(3).trim());s=$.language,c=$.title,i=!0}continue}if(i){l.push(_);continue}if(_.trim()===":::"){w(),S();continue}if(d){y.push(_);continue}const T=_.trim();if(!T){w();continue}if(T.startsWith("- ")){r||(t.push("<ul>"),r=!0),t.push(`<li>${de(T.slice(2))}</li>`);continue}w();const I=T.match(/^:::(note|tip|warning|danger|info)(?:\s+(.+))?$/i);if(I){p=I[1].toLowerCase(),b=I[2]??"",y=[],d=!0;continue}const P=Qa(T);if(P){t.push(P);continue}if(T.startsWith("### ")){const $=T.slice(4),L=_n($,o);a.push({id:L,title:$,level:3}),t.push(`<h3 id="${ae(L)}">${de($)}</h3>`);continue}if(T.startsWith("## ")){const $=T.slice(3),L=_n($,o);a.push({id:L,title:$,level:2}),t.push(`<h2 id="${ae(L)}">${de($)}</h2>`);continue}if(T.startsWith("# ")){t.push(`<h1>${de(T.slice(2))}</h1>`);continue}t.push(`<p>${de(T)}</p>`)}return w(),E(),S(),{html:t.join(`
`),toc:a}}function rt(e){return e.replace(/^#.*$/gm,"").replace(/```[\s\S]*?```/g,"").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/[*`_>#-]/g,"").replace(/\s+/g," ").trim()}function as(e){return rt(e).slice(0,180)}function ss(e){const n=rt(e).split(" ").filter(Boolean).length;return Math.max(1,Math.ceil(n/180))}function is(e,n){const t=e.title,a=e.slug,o=e.description,r=e.date,i=e.author,s=e.tags,c=e.image,l=e.published,d=e.draft,p=e.featured;if(typeof t!="string"||typeof a!="string"||typeof o!="string"||typeof r!="string")throw new Error(`Invalid article frontmatter in ${n}`);return{title:t,slug:a,description:o,date:r,author:ja(i,n),tags:Array.isArray(s)?s.filter(b=>typeof b=="string"):[],image:typeof c=="string"?c:void 0,published:typeof l=="boolean"?l:!0,draft:typeof d=="boolean"?d:!1,featured:typeof p=="boolean"?p:!1}}const me=Object.entries(za).map(([e,n])=>{const{frontmatter:t,body:a}=Wa(n),o=is(t,e),r=ts(a);return{...o,excerpt:as(a),html:r.html,readingTime:ss(a),toc:r.toc}}).filter(e=>e.published&&!e.draft).sort((e,n)=>new Date(n.date).getTime()-new Date(e.date).getTime());me.filter(e=>e.featured);function os(e){return me.find(n=>n.slug===e)}const en={schemaVersion:1,generatedAt:"",repository:"AdaEngine/AdaEngine",commit:null,demos:[]};let Tn=null;const nn=new Map;function ct(e){return/^(https?:|data:|blob:|\/)/.test(e)?e:`${"/".endsWith("/")?"/":"//"}${e.replace(/^\/+/,"")}`}async function lt(){return Tn??(Tn=fetch(ct("demos/manifest.json"),{headers:{Accept:"application/json"}}).then(e=>e.ok?e.json():en).then(e=>({...en,...e,demos:[...e.demos??[]].sort((n,t)=>n.tag.localeCompare(t.tag)||n.title.localeCompare(t.title))})).catch(()=>en)),Tn}async function rs(e){const n=ct(e.source);return nn.set(n,nn.get(n)??fetch(n).then(t=>{if(!t.ok)throw new Error(`Failed to load ${e.source}`);return t.text()}).catch(()=>"")),nn.get(n)??""}function cs(e,n){return e.demos.find(t=>t.slug===n)}function ls(e){const n=new Map;for(const t of e){const a=n.get(t.tag)??{tag:t.tag,title:t.tagTitle,demos:[]};a.demos.push(t),n.set(t.tag,a)}return[...n.values()]}function dt(e){const n=e.trim().replace(/\/$/,"");return!n||n==="."||n==="/"?"":n.startsWith("/")?n:`/${n}`}function ds(e,n){const t=dt(n);let a=e||"/";return a.startsWith("/")||(a=`/${a}`),t&&(a===t||a.startsWith(`${t}/`))&&(a=a.slice(t.length)||"/"),a=a.replace(/\/$/,"")||"/",a.startsWith("/")?a:`/${a}`}function us(e,n){const t=dt(n),a=e.startsWith("/")?e:`/${e}`;return t?`${t}${a==="/"?"/":a}`:a}const ps=["learn","community","donate"];function ut(e,n){const t=ds(e,n);if(t==="/")return{name:"home"};if(t==="/download")return{name:"download"};if(t==="/blog")return{name:"blog"};if(t==="/demos")return{name:"demos"};const a=t.match(/^\/demos\/([^/]+)$/);if(a)return{name:"demo",slug:decodeURIComponent(a[1])};const o=ps.find(i=>t===`/${i}`);if(o)return{name:"static-page",page:o};const r=t.match(/^\/articles\/([^/]+)$/);return r?{name:"article",slug:decodeURIComponent(r[1])}:{name:"not-found",path:t}}const Ie="https://adaengine.org",ke="Ada",ee=`${Ie}/images/main/tilemap.png`,gs={learn:{title:"Learn Ada - Swift Game Engine Tutorials and Examples",description:"Learn Ada with Swift game development guides, ECS fundamentals, rendering notes, physics examples, and links to source code.",path:"/learn",image:ee,type:"website"},community:{title:"Ada Community - Swift Game Development Contributors",description:"Join the Ada community, follow development, discuss Swift game engine ideas, and contribute to the open-source project.",path:"/community",image:ee,type:"website"},donate:{title:"Support Ada - Open-Source Swift Game Engine",description:"Support Ada development through donations, code contributions, examples, bug reports, and documentation improvements.",path:"/donate",image:ee,type:"website"}};function cn(e){if(/^https?:\/\//.test(e))return e;const n=e.startsWith("/")?e:`/${e}`;return`${Ie}${n==="/"?"/":n.replace(/\/$/,"")}`}function ms(e){return e.name==="home"?{title:"Ada - Open-Source Swift Game Engine",description:"Ada is an open-source game engine for Swift developers, with ECS, 2D and 3D rendering, physics, UI, editor tooling, and WebAssembly demos.",path:"/",image:ee,type:"website"}:e.name==="download"?{title:"Download Ada — Mac, Windows, Linux and iOS",description:"Download Ada for your platform. Find desktop releases, source code and the iOS app on the App Store.",path:"/download",image:ee,type:"website"}:e.name==="blog"?{title:"Ada News - Swift Game Engine Updates",description:"Read Ada updates, release notes, engineering deep dives, and Swift game development articles from the project team.",path:"/blog",image:ee,type:"website"}:e.name==="demos"?{title:"Ada Demos - Swift WebAssembly Game Examples",description:"Explore Ada WebAssembly demos built from Swift source files, including 2D rendering, UI, physics, and scene examples.",path:"/demos",image:ee,type:"website"}:e.name==="static-page"?gs[e.page]:e.name==="demo"?{title:"Ada Demo - Swift WebAssembly Example",description:"This Ada demo page lists a Swift WebAssembly example when the demo is available.",path:`/demos/${e.slug}`,image:ee,type:"website",robots:"noindex, follow"}:e.name==="article"?{title:"Ada Article",description:"This Ada article page is available when the requested article has been published.",path:`/articles/${e.slug}`,image:ee,type:"article",robots:"noindex, follow"}:{title:"Page Not Found - Ada",description:"This Ada page could not be found. Return to the open-source Swift game engine homepage.",path:e.name==="not-found"?e.path:"/",image:ee,type:"website",robots:"noindex, follow"}}function fs(e){return{title:`${e.title} - Ada News`,description:e.description,path:`/articles/${e.slug}`,image:cn(e.image??"images/main/tilemap.png"),type:"article"}}function hs(e){return{title:`${e.title} - Ada WebAssembly Demo`,description:`${e.description} View the Swift source and run the WebAssembly build for this Ada demo.`,path:`/demos/${e.slug}`,image:ee,type:"website"}}function bs(e){const n=cn(e.path),t={"@context":"https://schema.org","@type":"WebSite",name:ke,url:Ie,description:"Ada is an open-source Swift game engine for 2D and 3D games, ECS architecture, rendering, physics, UI, and demos."};return e.path==="/"?[t,{"@context":"https://schema.org","@type":"SoftwareSourceCode",name:ke,codeRepository:"https://github.com/AdaEngine/AdaEngine",programmingLanguage:"Swift",license:"https://github.com/AdaEngine/AdaEngine/blob/main/LICENSE",url:n,description:e.description}]:e.type==="article"?[t,{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,image:e.image,mainEntityOfPage:n,publisher:{"@type":"Organization",name:ke,url:Ie}}]:[t,{"@context":"https://schema.org","@type":"WebPage",name:e.title,description:e.description,url:n,isPartOf:{"@type":"WebSite",name:ke,url:Ie}}]}const ie=document.querySelector("#app")??ys(),Be="/";function ys(){throw new Error("Root app container #app was not found")}const ws="Ada",pt="images/main/tilemap.png",xn=["images/main/tilemap.png","images/main/space_invaders.jpeg","images/main/duck_hunt.png"],gt="AdaEngine/AdaEngine",Es={learn:{title:"Learn Ada",lead:"Master game development in Swift. From your first sprite to advanced Metal rendering techniques.",sections:[{title:"Documentation",body:"Read guides, API notes and examples for the engine core, ECS, renderer, physics and UI systems.",links:[{label:"Open documentation",href:"https://docs.adaengine.org/"}]},{title:"Examples",body:"Explore sample projects such as tilemaps, arcade games and Swift-first game prototypes.",links:[{label:"Browse examples",href:"https://github.com/AdaEngine/AdaEngine/tree/main/Examples"}]},{title:"Features",body:"Return to the home page feature overview for a quick summary of what Ada can do.",links:[{label:"View features",href:`${H("/")}#features`}]}]}},vs=[{title:"Getting Started",cards:[{title:"Get Started",body:"Install the engine and create your first window in under 5 minutes.",href:"https://docs.adaengine.org/tutorials/adaengine",icon:"book"},{title:"ECS",body:"Understand the Entity-Component-System architecture that powers Ada.",href:"https://docs.adaengine.org/documentation/adaecs/",icon:"play"},{title:"2D Physics Tutorial",body:"Add rigid bodies, collision shapes, and handle physics callbacks.",href:"https://docs.adaengine.org/documentation/adaphysics/",icon:"layout"}]},{title:"API Reference & Documentation",cards:[{title:"Core Framework",body:"Math, Collections, and basic Engine systems.",href:"https://docs.adaengine.org/documentation/adaengine/"},{title:"Rendering Pipeline",body:"Materials, Shaders, Render Graphs, and Metal integration.",href:"https://docs.adaengine.org/documentation/adarender/"},{title:"Audio System",body:"Spatial audio, sound effects, and music streaming.",href:"https://docs.adaengine.org/documentation/adaaudio/"}]}],As=[{title:"GitHub",subtitle:"Contribute to source code",href:"https://github.com/AdaEngine/AdaEngine",icon:"images/socials/github.svg"},{title:"Discord",subtitle:"Live chat & support",href:"https://discord.gg/JkEPE7nwDu",icon:"images/socials/discord.svg"},{title:"Reddit",subtitle:"r/AdaEngine discussions",href:"https://www.reddit.com/r/AdaEngine/",icon:"images/socials/reddit.svg"},{title:"Telegram",subtitle:"Announcements channel",href:"https://t.me/adaengine",iconClass:"community-link-icon-telegram",iconMarkup:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M42.2 8.7 35.8 39c-.5 2.1-1.8 2.6-3.6 1.6l-9.9-7.3-4.8 4.6c-.5.5-1 .9-2 .9l.7-10.1L34.6 12c.8-.7-.2-1.1-1.2-.4L10.6 25.9.8 22.8c-2.1-.7-2.2-2.1.4-3.1L39.5 4.9c1.8-.7 3.4.4 2.7 3.8Z"/></svg>'},{title:"X (Twitter)",subtitle:"Follow @ada_engine",href:"https://x.com/ada_engine",iconClass:"community-link-icon-x",iconMarkup:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M28.4 20.6 43.1 4h-3.5L26.9 18.4 16.7 4H5l15.5 21.9L5 43.4h3.5L22 28.1l10.8 15.3h11.7L28.4 20.6Zm-4.8 5.4-1.6-2.2L9.6 6.5H15l10 14 1.6 2.2 13 18.2h-5.4L23.6 26Z"/></svg>'}],Ss=[{title:"Boosty",subtitle:"Monthly Sponsorship",body:"Become a backer on Boosty to get early access to updates, exclusive tutorials, and your name in the engine credits.",href:"https://boosty.to/adaengine",action:"Support on Boosty",icon:"images/icons/ic_boosty.svg",tone:"boosty"},{title:"DonationAlerts",subtitle:"One-time Donation",body:"Prefer to make a one-time contribution? You can support us via DonationAlerts with various payment methods.",href:"https://www.donationalerts.com/r/adaengine",action:"Donate via DA",icon:"images/donation_alerts_logo.svg",tone:"donation-alerts"}],Pe=[{title:"Data Driven",description:"Ada build around custom Entity Component System. Simple to use, fast and cache-friendly for your game architecture.",details:"Ada is built around a custom, data-oriented Entity Component System inspired by modern Swift APIs. Components keep game state small and explicit, while systems operate through typed queries, resources, schedules and macros such as @Component and @System. This makes gameplay code modular, cache-friendly and easier to scale from a tiny prototype to a full scene with input, animation, physics and rendering working together.",code:`@Component
struct Player: Entity { }

struct PlayerSystem: System {
    func update(context: UpdateSceneContext) { }
}`,gif:"images/features/data-driven.gif"},{title:"2D Renderer",description:"Supports real-time 2D rendering for your games and apps. Write custom shaders, materials and render pipelines.",details:"Ada ships with a high-level 2D rendering stack for sprites, text, tilemaps, cameras and custom materials. The demos cover sprite animation, transparency, lighting, text rendering, WGSL experiments and stress scenes, while the renderer still leaves room for lower-level control when you need custom shaders or pipeline work. It is designed for Swift-first game code where drawing a scene should feel direct, but not boxed in.",image:"images/icons/ic_duck.png",gif:"images/features/2d-renderer.gif"},{title:"2D Physics",description:"Ada supports Box2D v3 physics with parallel calculations, lightweight memory usage and fast simulation.",details:"The Physics2D plugin integrates Box2D with Ada entities through components such as PhysicsBody2DComponent and Collision2DComponent. Simulation runs on the fixed-update schedule, then syncs transforms back into the scene so gameplay systems can react through the same ECS flow as the rest of the engine. It includes collision events, debug drawing support and world resources for direct access when a game needs deeper physics control.",image:"images/icons/ic_box2d.svg",gif:"images/features/2d-physics.gif"},{title:"Render Graphs",description:"Construct your own render pipeline using powerful render graphs.",details:"Rendering is organized around RenderGraph resources, nodes, slots, subgraphs and an executor that runs the graph each frame. Core 2D and 3D pipelines are assembled as graphs, and cameras can point at specific render subgraphs for flexible composition. Diagnostics can snapshot nodes, edges, subgraphs and frame records, which makes custom pipelines easier to reason about when you add post-processing, offscreen passes or specialized rendering stages.",image:"images/icons/ic_render_graph.svg",gif:"images/features/render-graphs.gif"},{title:"Custom UI Engine",description:"Create your own UI using a SwiftUI-like approach that fits naturally into Ada scenes.",details:"AdaUI brings a SwiftUI-like declarative layer into Ada with views, result builders, environment values, layout containers, gestures, animation, text fields, scroll views and navigation primitives. UI can live naturally beside game scenes, and the engine includes tooling such as a 3D AdaUI debug view for inspecting live UI trees. The goal is to make editor panels, HUDs and in-game interfaces feel native to the same Swift codebase as your gameplay.",code:`struct MainView: View {
    @Environment(\\.scene) var scene

    var body: some View {
        Text("Hello, World!")
    }
}`,gif:"images/features/custom-ui.gif"},{title:"Free and Open Source",description:"Ada is 100% free for you. Licensed by MIT. Learn, modify or use without royalties or runtime fees.",details:"Ada is MIT licensed and developed in the open, with source, tutorials, generated API documentation, demos and build guides available from the repository. You can study the engine internals, modify them for your project, ship without royalties or runtime fees, and contribute fixes, examples or documentation back to the community. The project is still evolving, so the roadmap is visible where the code actually lives.",image:"images/icons/ic_opensource.svg",gif:"images/features/open-source.gif"},{title:"AdaScript",description:"Write gameplay scripts with AdaScript, powered by the Gravity language runtime and integrated with Ada ECS.",details:"AdaScript brings the Gravity scripting runtime into Ada for fast gameplay iteration. Scripts declare their component queries and use capability-scoped access to read or update reflected ECS fields, so scripted systems participate in the same scheduling and access rules as native Swift systems. Keep performance-critical code in Swift and move tuning, behaviours and gameplay logic into reloadable scripts.",gif:"images/features/adascript.gif"},{title:"3D Rendering",description:"Build 3D scenes with cameras, materials, lighting, skyboxes and extensible render pipelines.",details:"Ada’s 3D stack is built around the same render-graph architecture as its core renderer. Compose camera views, materials, meshes, lights, environment settings and skyboxes into a Swift-first scene, then extend the pipeline with your own passes and subgraphs when a project needs custom post-processing or rendering techniques.",gif:"images/features/3d-rendering.gif"},{title:"3D Physics",description:"Simulate rigid bodies, collisions and constraints in 3D with the integrated Box3D physics engine.",details:"Ada includes a Box3D-backed 3D physics path for rigid body simulation, collision queries and joint constraints. It is designed to work alongside Ada entities and transforms, with a dedicated example target for validating 3D physics scenes. Box3D brings a C17 rigid-body simulation core while Ada keeps the scene-facing API in Swift.",gif:"images/features/3d-physics.gif"}];function N(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function _s(e){return/^https?:\/\//.test(e)}function Ts(e){return e.details}function ln(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(new Date(e))}function H(e){return us(e,Be)}function W(e){const n=Be.endsWith("/")?Be:`${Be}/`,t=e.replace(/^\/+/,"");return`${n}${t}`}function J(e,n,t){let a=document.head.querySelector(`meta[${e}="${n}"]`);a||(a=document.createElement("meta"),a.setAttribute(e,n),document.head.appendChild(a)),a.content=t}function xs(e,n){var t;(t=document.head.querySelector(`meta[${e}="${n}"]`))==null||t.remove()}function dn(e){const n=cn(e.path);let t=document.head.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.rel="canonical",document.head.appendChild(t)),document.title=e.title,t.href=n,J("name","description",e.description),J("property","og:site_name",ke),J("property","og:title",e.title),J("property","og:description",e.description),J("property","og:type",e.type),J("property","og:url",n),J("property","og:image",e.image),J("name","twitter:card","summary_large_image"),J("name","twitter:title",e.title),J("name","twitter:description",e.description),J("name","twitter:image",e.image),e.robots?J("name","robots",e.robots):xs("name","robots");for(const a of document.head.querySelectorAll("script[data-seo-structured-data]"))a.remove();for(const a of bs(e)){const o=document.createElement("script");o.type="application/ld+json",o.dataset.seoStructuredData="true",o.textContent=JSON.stringify(a),document.head.appendChild(o)}}function ks(e){return e<1e3?String(e):e<1e6?`${(e/1e3).toFixed(e<1e4?1:0)}k`:`${(e/1e6).toFixed(1)}m`}async function Is(){const e=document.querySelector("[data-github-stars]"),n=document.querySelector("[data-github-stars-value]");if(n)try{const t=await fetch(`https://api.github.com/repos/${gt}`,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)return;const a=await t.json();if(typeof a.stargazers_count!="number")return;const o=ks(a.stargazers_count);n.textContent=o,e==null||e.setAttribute("aria-label",`${o} GitHub stars`)}catch{}}function oe(){const e=ut(window.location.pathname,"/"),n=e.name==="static-page"?e.page:e.name==="demo"?"demos":e.name,t=[{label:"Home",href:H("/"),active:n==="home"},...me.length?[{label:"News",href:H("/blog"),active:n==="blog"}]:[],{label:"Demos",href:H("/demos"),active:n==="demos"},{label:"Learn",href:H("/learn"),active:n==="learn"},{label:"Socials",href:H("/community"),active:n==="community"},{label:"Donate",href:H("/donate"),active:n==="donate"}];return`
    <header class="header${n==="learn"?" header-learn":""}">
      <section class="container content-restriction header-container">
        <a class="header-logo" href="${H("/")}" aria-label="Ada home">
          <picture class="header-logo-picture">
            <source srcset="${W("images/ae_logo~dark.svg")}" media="(prefers-color-scheme: dark)" />
            <img src="${W("images/ae_logo.svg")}" alt="Ada" />
          </picture>
          <h2>${ws}</h2>
        </a>
        <button class="burger-container" type="button" aria-label="Open menu" aria-expanded="false">
          <span id="burger" aria-hidden="true"><span class="bar topBar"></span><span class="bar bottomBar"></span></span>
        </button>
        <nav aria-label="Main navigation">
          <ul class="navigation">
            ${t.map(o=>`<li class="navigation-item"><a class="navigation-item-link${o.active?" is-active":""}" href="${o.href}">${o.label}</a></li>`).join("")}
            <li class="navigation-item download-button"><a class="navigation-item-link" href="${H("/download")}">Download <span class="download-version" data-download-version>v${ne.version}</span></a></li>
          </ul>
        </nav>
      </section>
    </header>
  `}function Ns(){return`
    <section class="hero-section safe-area-insets">
      <div class="hero-copy">
        <p class="hero-eyebrow">Swift Game Engine is here</p>
        <h1 class="ae-header-title">The Open-Source Engine for Swift Developers</h1>
        <p class="hero-subtitle">Build high-performance 2D and 3D games using modern Swift. Clean architecture, native feeling, and developer-first tooling.</p>
        <div class="hero-actions">
          <a class="header-buttons" href="${H("/download")}">Download <span class="download-version" data-download-version>v${ne.version}</span></a>
          <a class="header-buttons-github" href="https://github.com/${gt}" aria-label="Ada on GitHub">
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
  `}function Cs(e=[]){return e.length?`<ul class="tags">${e.map(n=>`<li>${n}</li>`).join("")}</ul>`:""}function $s(){return me.length?`
    <section id="latest-news" class="latest-news safe-area-insets">
      <h2 class="section-title">Latest News</h2>
      <div class="home-articles-grid">
        ${me.slice(0,4).map(e=>`
              <article class="home-article-preview">
                <a href="${H(`/articles/${e.slug}`)}">
                  <div class="article-preview-image">
                    <img class="background_image" src="${W(pt)}" alt="${N(e.title)}" />
                    <div class="background_image_overlay"></div>
                    <div class="article-preview-content">
                      <p class="article-date">${ln(e.date)}</p>
                      ${Cs(e.tags)}
                      <h3>${e.title}</h3>
                      <p>${N(e.author.name)}</p>
                    </div>
                  </div>
                </a>
              </article>
            `).join("")}
      </div>
    </section>
  `:""}function mt(e=[]){const n=e[0]??"News";return`<span class="blog-entry-tag blog-entry-tag-${["release","tutorial","engineering","markdown","frontmatter","vite"].find(a=>n.toLowerCase().includes(a))??"default"}">${N(n)}</span>`}function Ms(e,n){return e.image??xn[n%xn.length]??pt}function Rs(){ie.innerHTML=`
    ${oe()}
    <main class="page-shell blog-page-shell">
      <section class="container content-restriction blog-page">
        <header class="blog-page-hero">
          <h1>Engine News</h1>
          <p>Updates, release notes, and engineering deep dives from the Ada team.</p>
        </header>
        ${me.length?`<div class="blog-timeline">
                ${me.map((e,n)=>`
                      <article class="blog-entry">
                        <aside class="blog-entry-meta" aria-label="Article metadata">
                          <time datetime="${e.date}">${ln(e.date)}</time>
                          ${mt(e.tags)}
                        </aside>
                        <a class="blog-entry-card" href="${H(`/articles/${e.slug}`)}">
                          <img class="blog-entry-cover" src="${W(Ms(e,n))}" alt="" loading="lazy" />
                          <span class="blog-entry-cover-overlay" aria-hidden="true"></span>
                          <span class="blog-entry-content">
                            <h2>${N(e.title)}</h2>
                            <p>${N(e.description)}</p>
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
  `}function Ls(e){const n=ls(e.demos),t=n.map(a=>`
        <a class="article-toc-link demo-category-link" href="#demo-group-${N(a.tag)}" data-demo-category-link="demo-group-${N(a.tag)}">
          <span>${N(a.title)}</span>
          <small>${a.demos.length}</small>
        </a>
      `).join("");ie.innerHTML=`
    ${oe()}
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
                        <section class="demo-group" aria-labelledby="demo-group-${N(a.tag)}">
                          <div class="demo-group-heading">
                            <h2 id="demo-group-${N(a.tag)}">${N(a.title)}</h2>
                            <span>${a.demos.length} ${a.demos.length===1?"demo":"demos"}</span>
                          </div>
                          <div class="demo-card-grid">
                            ${a.demos.map(Os).join("")}
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
  `}function Os(e){return`
    <a class="demo-card" href="${H(`/demos/${e.slug}`)}">
      <span class="demo-card-tag">${N(e.tagTitle)}</span>
      <h3>${N(e.title)}</h3>
      <p>${N(e.description)}</p>
      <span class="demo-card-meta">${N(e.sourcePath)}</span>
      ${e.hasBuild?'<span class="demo-card-action">Open demo</span>':'<span class="demo-card-action demo-card-action-muted">Source only</span>'}
    </a>
  `}async function Ds(e){const n=await lt(),t=cs(n,e);if(!t){ze("Demo not found","Check the address or return to the demos page.");return}dn(hs(t));const a=await rs(t),o=n.commit??"main",r=`https://github.com/${n.repository}/blob/${o}/${t.sourcePath}`;ie.innerHTML=`
    ${oe()}
    <main class="page-shell demo-detail-shell">
      <article class="container content-restriction demo-detail-page">
        <header class="demo-detail-hero">
          <a class="article-back-link" href="${H("/demos")}">Back to Demos</a>
          <span class="demo-card-tag">${N(t.tagTitle)}</span>
          <h1>${N(t.title)}</h1>
          <p>${N(t.description)}</p>
          <a class="demo-source-link" href="${r}" target="_blank" rel="noreferrer">${N(t.sourcePath)}</a>
        </header>
        ${t.hasBuild?`<section class="demo-player" aria-label="${N(t.title)} embedded demo">
                <button class="demo-player-fullscreen" type="button" aria-label="Open demo fullscreen" title="Open fullscreen" data-demo-fullscreen>
                  <svg class="demo-player-fullscreen-enter-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg class="demo-player-fullscreen-exit-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <iframe title="${N(t.title)}" src="${W(t.embed)}" allow="fullscreen; gamepad; keyboard-map; clipboard-read; clipboard-write; webgpu" allowfullscreen webkitallowfullscreen></iframe>
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
              <span>${N(t.sourcePath)}</span>
              <span>Swift</span>
            </figcaption>
            <pre class="code-with-line-numbers"><code class="${st("swift")}">${Pa(a,"swift")}</code></pre>
          </figure>
        </section>
      </article>
    </main>
    ${re()}
  `}function Bs(){return`
    <section id="features" class="features-container safe-area-insets">
      <div class="section-heading">
        <p class="eyebrow">Capabilities</p>
        <h2 class="section-title">Features</h2>
      </div>
      <div class="features-grid">
        ${[...Pe.slice(-3),...Pe.slice(0,-3)].map((n,t)=>`
              <button class="engine-info-item-container feature-card feature-card-${t+1}" type="button" data-feature-index="${Pe.indexOf(n)}" data-feature-position="${t+1}" aria-haspopup="dialog">
                ${Ps(n)}
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
  `}function Ps(e){const n=e.gif?W(e.gif):"";return`
    <div class="engine-info-item-content feature-media-slot" data-feature-preview>
      ${n?`<img class="feature-media-gif" src="${n}" alt="" loading="lazy" decoding="async" />`:""}
      <span class="feature-media-loader" aria-label="Loading animated feature preview">
        <span class="feature-media-spinner" aria-hidden="true"></span>
        <span>Loading preview</span>
      </span>
    </div>
  `}function Us(){return`
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
  `}function Fs(){return`
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
            <a href="${H("/download")}">Download</a>
            <a href="https://github.com/AdaEngine/AdaEngine">Source code<span class="footer-external-mark" aria-hidden="true">↗</span></a>
          </section>
          <section>
            <h3>Project</h3>
            ${me.length?`<a href="${H("/blog")}">Blog</a>`:""}
            <a href="${H("/learn")}">Learn</a>
            <a href="${H("/community")}">Community</a>
          </section>
          <section>
            <h3>Foundation</h3>
            <a href="${H("/donate")}">Donate</a>
            <a href="https://github.com/AdaEngine/AdaEngine/blob/main/LICENSE">License<span class="footer-external-mark" aria-hidden="true">↗</span></a>
          </section>
        </div>
        <div class="footer-bottom">
          <p>© 2021-2026 Vladislav Prusakov and contributors. All rights reserved.</p>
          ${Fs()}
        </div>
        <div class="footer-blueprint-mark" aria-hidden="true">Ada</div>
      </div>
    </footer>
  `}function Hs(e){return e?`
    <span class="learn-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
        ${{book:'<path d="M7 5.5h8.5a2.5 2.5 0 0 1 2.5 2.5v11H9.5A2.5 2.5 0 0 0 7 21.5V5.5Z"/><path d="M7 5.5A2.5 2.5 0 0 1 9.5 3H18v16"/>',play:'<circle cx="12" cy="12" r="9"/><path d="m10.5 8.5 5 3.5-5 3.5v-7Z"/>',layout:'<rect x="4" y="5" width="16" height="14" rx="1.5"/><path d="M9 5v14"/><path d="M4 10h16"/>'}[e]}
      </svg>
    </span>
  `:""}function Gs(){const e=Es.learn;ie.innerHTML=`
    ${oe()}
    <main class="page-shell learn-page-shell">
      <section class="container content-restriction learn-page">
        <header class="learn-hero">
          <h1>${e.title}</h1>
          <p>${e.lead}</p>
        </header>
        ${vs.map(n=>{const t=n.title.replace(/\W+/g,"-").toLowerCase();return`
              <section class="learn-section" aria-labelledby="${t}">
                <h2 id="${t}">${n.title}</h2>
                <div class="learn-grid">
                  ${n.cards.map(a=>`
                        <a class="learn-card" href="${a.href}">
                          ${Hs(a.icon)}
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
  `}function zs(e){if(e==="learn"){Gs();return}if(e==="community"){qs();return}if(e==="donate"){Ws();return}}function Ws(){ie.innerHTML=`
    ${oe()}
    <main class="page-shell donation-page-shell">
      <section class="container content-restriction donation-page">
        <header class="donation-hero">
          <h1>Support Ada</h1>
          <p>Ada is an independent open-source project. Your support helps us dedicate more time to development and tooling.</p>
        </header>
        <div class="donation-options" aria-label="Donation options">
          ${Ss.map(e=>`
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
  `}function qs(){ie.innerHTML=`
    ${oe()}
    <main class="page-shell community-page-shell">
      <section class="container content-restriction community-page">
        <header class="community-hero">
          <h1>Join the Community</h1>
          <p>Connect with other developers, share your projects, and contribute to the engine.</p>
        </header>
        <div class="community-link-grid" aria-label="Ada community links">
          ${As.map(e=>`
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
  `}function Vs(){ie.innerHTML=`
    ${oe()}
    <main class="page-shell">
      <div class="container content-restriction">
        ${Ns()}
        
        ${$s()}
        ${Bs()}
      </div>
    </main>
    ${re()}
    ${Us()}
  `}function js(e){const n=os(e);if(!n){ze("Article not found","Check the address or return to the blog.");return}dn(fs(n)),ie.innerHTML=`
    ${oe()}
    <main class="page-shell article-page-shell">
      <div class="container article-reading-layout">
        <article class="safe-area-insets article-page">
          <header class="article-hero">
            <a class="article-back-link" href="${H("/blog")}">Back to News</a>
            ${mt(n.tags)}
            <h1>${n.title}</h1>
            <div class="article_info">
              ${Zs(n.author)}
              <span aria-hidden="true">•</span>
              <time datetime="${n.date}">${ln(n.date)}</time>
              <span aria-hidden="true">•</span>
              <span>${n.readingTime} min read</span>
            </div>
            <p class="article-item-description">${n.description}</p>
          </header>
          <div class="article-content">${n.html}</div>
        </article>
        ${Xs(n.toc)}
      </div>
    </main>
    ${Ks()}
    ${re()}
  `}function Ks(){return`
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
  `}function Zs(e){const n=`By ${e.name}`,a=`
    ${e.avatar?`<img class="article-author-avatar" src="${N(Ys(e.avatar))}" alt="${N(`${e.name} avatar`)}" loading="lazy" />`:""}
    <span class="article-author-label">${N(n)}</span>
  `;return!e.url||!_s(e.url)?`<span class="article-author">${a}</span>`:`
    <a class="article-author article-author-link" href="${N(e.url)}" target="_blank" rel="author noreferrer">
      ${a}
      <svg class="article-author-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M5 3.5h7.5V11M12.25 3.75 4 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  `}function Ys(e){return/^(https?:|data:|blob:|\/)/.test(e)||e.startsWith("images/")?W(e):W(`images/${e}`)}function kn(e,n){return e.map(t=>`
        <a class="article-toc-link article-toc-link-level-${t.level}" href="#${t.id}" data-article-toc-link="${t.id}" data-toc-context="${n}">
          <span>${N(t.title)}</span>
        </a>
      `).join("")}function Xs(e){var o;if(!e.length)return"";const n=kn(e,"desktop"),t=kn(e,"mobile"),a=((o=e[0])==null?void 0:o.title)??"Start";return`
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
          <strong data-current-section>${N(a)}</strong>
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
  `}function ze(e="Page not found",n="This route does not exist yet."){ie.innerHTML=`
    ${oe()}
    <main class="page-shell">
      <section class="container content-restriction safe-area-insets status-page">
        <h1>${e}</h1>
        <p>${n}</p>
        <a class="header-buttons" href="${H("/")}">Home</a>
      </section>
    </main>
    ${re()}
  `}function Js(){const e=document.querySelector(".article-content"),n=document.querySelector("[data-mobile-reader-nav]"),t=document.querySelector("[data-mobile-toc-toggle]"),a=document.querySelector("[data-mobile-toc-sheet]"),o=Array.from(document.querySelectorAll(".article-content h2[id], .article-content h3[id]")),r=Array.from(document.querySelectorAll("[data-article-toc-link]")),i=Array.from(document.querySelectorAll("[data-article-progress-fill]")),s=Array.from(document.querySelectorAll("[data-article-progress-label]")),c=Array.from(document.querySelectorAll("[data-current-section]"));if(!e||!o.length||!r.length)return;let l,d;const p=E=>{if(!(!t||!a||!n)){if(window.clearTimeout(l),t.setAttribute("aria-expanded",String(E)),E){a.hidden=!1,n.classList.remove("is-closing"),n.classList.add("is-open");return}n.classList.remove("is-open"),n.classList.add("is-closing"),l=window.setTimeout(()=>{a.hidden=!0,n.classList.remove("is-closing")},520)}},b=E=>{const S=document.getElementById(E);S&&(S.scrollIntoView({behavior:"smooth",block:"start"}),p(!1))},y=E=>{const S=E.closest(".article-toc-list, .article-mobile-toc-list");if(!S)return;const _=S.getBoundingClientRect(),T=E.getBoundingClientRect(),I=16,P=T.top<_.top+I,$=T.bottom>_.bottom-I;if(!P&&!$)return;const L=P?T.top-_.top-I:T.bottom-_.bottom+I;S.scrollTo({top:S.scrollTop+L,behavior:"smooth"})};r.forEach(E=>{E.addEventListener("click",S=>{const _=E.dataset.articleTocLink;_&&(S.preventDefault(),history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${_}`),b(_))})}),t==null||t.addEventListener("click",()=>{const E=t.getAttribute("aria-expanded")==="true";p(!E)}),document.addEventListener("keydown",E=>{E.key==="Escape"&&p(!1)}),document.addEventListener("click",E=>{!n||!E.target||n.contains(E.target)||p(!1)});const w=()=>{var F;const E=window.scrollY+Math.min(180,window.innerHeight*.28),S=o.slice().reverse().find(O=>O.getBoundingClientRect().top+window.scrollY<=E)??o[0],_=S.id,T=e.offsetTop,I=e.offsetTop+e.scrollHeight-window.innerHeight,P=I<=T?1:Math.min(1,Math.max(0,(window.scrollY-T)/(I-T))),$=`${Math.round(P*100)}%`,L=((F=S.textContent)==null?void 0:F.trim())||"Start",Z=_!==d;d=_,i.forEach(O=>{O.style.transform=`scaleX(${P})`}),s.forEach(O=>{O.textContent=$}),c.forEach(O=>{O.textContent=L}),r.forEach(O=>{const j=O.dataset.articleTocLink===_;O.classList.toggle("is-active",j),O.setAttribute("aria-current",j?"true":"false"),j&&Z&&y(O)})};window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("resize",w),w()}function Qs(){const e=Array.from(document.querySelectorAll("[data-demo-category-link]")),n=e.map(r=>{var i;return(i=document.getElementById(r.dataset.demoCategoryLink??""))==null?void 0:i.closest(".demo-group")}).filter(r=>!!r);if(!e.length||!n.length)return;let t;const a=r=>{const i=r.closest(".demo-category-list");if(!i||i.scrollWidth<=i.clientWidth)return;const s=i.getBoundingClientRect(),c=r.getBoundingClientRect(),l=12,d=c.left<s.left+l,p=c.right>s.right-l;if(!d&&!p)return;const b=d?c.left-s.left-l:c.right-s.right+l;i.scrollTo({left:i.scrollLeft+b,behavior:"smooth"})},o=()=>{var l;const r=window.scrollY+Math.min(180,window.innerHeight*.28),s=(l=(n.slice().reverse().find(d=>d.getBoundingClientRect().top+window.scrollY<=r)??n[0]).querySelector("h2[id]"))==null?void 0:l.id,c=s!==t;t=s,e.forEach(d=>{const p=d.dataset.demoCategoryLink===s;d.classList.toggle("is-active",p),p?d.setAttribute("aria-current","location"):d.removeAttribute("aria-current"),p&&c&&a(d)})};e.forEach(r=>{r.addEventListener("click",i=>{const s=r.dataset.demoCategoryLink,c=s?document.getElementById(s):null;!c||!s||(i.preventDefault(),history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${s}`),c.scrollIntoView({behavior:"smooth",block:"start"}))})}),window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o),o()}function ft(e){return[{id:"macos",title:"Mac",description:"The native editor for your Mac. Build with AdaScript and Swift."},{id:"windows",title:"Windows",description:"Create Ada games on your Windows PC."},{id:"linux",title:"Linux",description:"Build with the open-source engine on Linux."}].map(({id:t,title:a,description:o})=>{const r=Nn(t,e);return`<article class="platform-download" aria-labelledby="download-${t}">
      <span class="platform-symbol platform-symbol-image" aria-hidden="true" style="--platform-icon: url('${W(`images/downloads/${t}.svg`)}')"></span>
      <h2 id="download-${t}">${a}</h2><p>${o}</p>
      <div class="platform-download-actions">${r.length?r.map(i=>`<a class="header-buttons" href="${N(i.url)}">${Et(i)}</a>`).join(""):`<span class="download-status">Installer coming soon</span><a class="download-source-link" href="${N(e.url)}">Get the source code ↗</a>`}</div>
    </article>`}).join("")+`<article class="platform-download platform-download-ios" aria-labelledby="download-ios">
    <span class="platform-symbol" aria-hidden="true">▯</span>
    <h2 id="download-ios">iOS</h2><p>Create and run AdaScript projects on iPad.</p>
    <div class="platform-download-actions"><a class="app-store-badge" href="${yt}" aria-label="Download on the App Store"><img src="${W("images/downloads/app-store.svg")}" alt="Download on the App Store" width="120" height="40" /></a></div>
  </article>`}function ei(){ie.innerHTML=`${oe()}
    <main class="page-shell download-page-shell"><section class="container content-restriction download-page">
      <header class="download-hero"><p class="hero-eyebrow">Make something of your own</p>
        <h1>Download Ada</h1><p>Choose your platform. Start building.</p>
        <a class="download-release" data-release-link href="${ne.url}">Release notes · <span data-download-version>v${ne.version}</span> ↗</a>
      </header>
      <div class="download-grid" data-download-cards>${ft(ne)}</div>
      <p class="download-footnote">Ada is free and open source. Desktop downloads appear here as installers are released.</p>
    </section></main>${re()}`}async function ni(){const e=await At();document.querySelectorAll("[data-download-version]").forEach(t=>{t.textContent=`v${e.version}`}),document.querySelectorAll("[data-release-link]").forEach(t=>{t.href=e.url});const n=document.querySelector("[data-download-cards]");n&&(n.innerHTML=ft(e))}async function ti(){const e=ut(window.location.pathname,"/");if(dn(ms(e)),e.name==="download"){ei();return}if(e.name==="home"){Vs();return}if(e.name==="blog"){Rs();return}if(e.name==="demos"){Ls(await lt());return}if(e.name==="demo"){await Ds(e.slug);return}if(e.name==="static-page"){zs(e.page);return}if(e.name==="article"){js(e.slug);return}ze()}function ai(){const e=document.querySelector(".header"),n=document.querySelector(".burger-container");let t,a;const o=p=>{if(!(!e||!n)){if(window.clearTimeout(t),window.clearTimeout(a),e.classList.toggle("menu-opened",p),document.body.classList.toggle("menu-opened",p),n.setAttribute("aria-expanded",String(p)),n.setAttribute("aria-label",p?"Close menu":"Open menu"),p){e.classList.remove("menu-closing"),e.classList.add("menu-opening"),t=window.setTimeout(()=>{e.classList.remove("menu-opening")},620);return}e.classList.remove("menu-opening"),e.classList.add("menu-closing"),a=window.setTimeout(()=>{e.classList.remove("menu-closing")},760)}};n==null||n.addEventListener("click",()=>{o(!(e!=null&&e.classList.contains("menu-opened")))}),document.querySelectorAll(".navigation-item-link").forEach(p=>{p.addEventListener("click",()=>{o(!1)})}),In();const r=document.querySelector(".feature-modal"),i=document.querySelector("#feature-modal-title"),s=document.querySelector("#feature-modal-description"),c=document.querySelector("#feature-modal-kicker"),l=document.querySelector("#feature-modal-visual"),d=()=>{r&&(r.hidden=!0,document.body.classList.remove("modal-opened"))};document.querySelectorAll("[data-feature-index]").forEach(p=>{p.addEventListener("click",()=>{const b=Number(p.dataset.featureIndex),y=Pe[b];!y||!r||!i||!s||!c||!l||(i.textContent=y.title,s.textContent=Ts(y),c.textContent=`Feature ${String(Number(p.dataset.featurePosition)||b+1).padStart(2,"0")}`,r.hidden=!1,document.body.classList.add("modal-opened"),l.innerHTML=ii(y),In())})}),document.querySelectorAll("[data-modal-close]").forEach(p=>p.addEventListener("click",d)),document.addEventListener("keydown",p=>{p.key==="Escape"&&d()}),li(),si(),ri(),ci(),Qs(),Js(),oi()}function In(){document.querySelectorAll("[data-feature-preview]:not([data-preview-listeners-ready])").forEach(e=>{const n=e.querySelector(".feature-media-gif");if(!n)return;e.dataset.previewListenersReady="true";const t=()=>e.classList.add("is-loaded");n.addEventListener("load",t,{once:!0}),n.addEventListener("error",()=>e.classList.add("has-load-error"),{once:!0}),n.complete&&n.naturalWidth>0&&t()})}function si(){const e=document.querySelector("[data-hero-gif-src]"),n=e==null?void 0:e.dataset.heroGifSrc;if(!e||!n)return;const t=new Image;t.onload=()=>{var s;t.className="hero-gif",t.alt="",t.decoding="async",(s=e.querySelector(".ae-logo-header"))==null||s.replaceWith(t);const a=document.createElement("canvas");a.width=1,a.height=1;const o=a.getContext("2d",{willReadFrequently:!0});if(!o)return;let r={red:34,green:148,blue:255};const i=()=>{try{o.clearRect(0,0,1,1),o.drawImage(t,0,0,1,1);const[c,l,d,p]=o.getImageData(0,0,1,1).data;p>0&&c+l+d>8&&(r={red:Math.round(r.red*.7+c*.3),green:Math.round(r.green*.7+l*.3),blue:Math.round(r.blue*.7+d*.3)},e.style.setProperty("--hero-ambient",`${r.red} ${r.green} ${r.blue}`),e.classList.add("has-ambient-light"))}catch{}window.setTimeout(i,600)};i()},t.src=n}function ii(e){const n=e.gif?W(e.gif):"";return`
    <div class="feature-modal-media feature-media-slot" data-feature-preview>
      ${n?`<img class="feature-media-gif" src="${n}" alt="" decoding="async" />`:""}
      <span class="feature-media-loader" aria-label="Loading animated feature preview">
        <span class="feature-media-spinner" aria-hidden="true"></span>
        <span>Loading preview</span>
      </span>
    </div>
  `}function oi(){const e=document.querySelector("[data-article-lightbox]"),n=e==null?void 0:e.querySelector("[data-article-lightbox-preview]"),t=e==null?void 0:e.querySelector("[data-article-lightbox-caption]"),a=e==null?void 0:e.querySelector(".article-image-lightbox-close");let o=null;if(!e||!n||!t)return;const r=()=>{e.hidden=!0,n.removeAttribute("src"),document.body.classList.remove("article-lightbox-open"),o instanceof HTMLElement&&o.focus()},i=s=>{var d,p;const c=s.closest("figure"),l=((p=(d=c==null?void 0:c.querySelector("figcaption"))==null?void 0:d.textContent)==null?void 0:p.trim())??"";o=document.activeElement,n.src=s.currentSrc||s.src,n.alt=s.alt,t.textContent=l,t.hidden=!l,e.hidden=!1,document.body.classList.add("article-lightbox-open"),a==null||a.focus()};document.querySelectorAll("[data-article-lightbox-image]").forEach(s=>{s.addEventListener("click",()=>i(s)),s.addEventListener("keydown",c=>{c.key!=="Enter"&&c.key!==" "||(c.preventDefault(),i(s))})}),e.querySelectorAll("[data-article-lightbox-close]").forEach(s=>{s.addEventListener("click",r)}),document.addEventListener("keydown",s=>{s.key==="Escape"&&!e.hidden&&r()})}function ri(){const e=document.querySelector(".demo-player:not(.demo-player-empty)"),n=e==null?void 0:e.querySelector("[data-demo-fullscreen]");if(!e||!n)return;const t=document,a=e,o=document.fullscreenEnabled||t.webkitFullscreenEnabled||typeof e.requestFullscreen=="function"||typeof a.webkitRequestFullscreen=="function",r=()=>document.fullscreenElement??t.webkitFullscreenElement??null,i=()=>r()===e;let s=!1;const c=()=>{s=!0,e.classList.add("is-viewport-fullscreen"),document.body.classList.add("demo-viewport-fullscreen-open"),y()},l=()=>{s=!1,e.classList.remove("is-viewport-fullscreen"),document.body.classList.remove("demo-viewport-fullscreen-open"),y()},d=async()=>o?typeof e.requestFullscreen=="function"?(await e.requestFullscreen(),!0):typeof a.webkitRequestFullscreen=="function"?(await a.webkitRequestFullscreen(),!0):!1:!1,p=async()=>{try{if(await d())return}catch(w){console.warn("Native fullscreen is unavailable, using viewport fullscreen fallback",w)}c()},b=async()=>{var w;if(s){l();return}if(typeof document.exitFullscreen=="function"){await document.exitFullscreen();return}await((w=t.webkitExitFullscreen)==null?void 0:w.call(t))},y=()=>{const w=i()||s;e.classList.toggle("is-fullscreen",w),n.setAttribute("aria-label",w?"Exit demo fullscreen":"Open demo fullscreen"),n.title=w?"Exit fullscreen":"Open fullscreen"};n.addEventListener("click",async()=>{try{if(i()||s){await b();return}await p()}catch(w){console.error("Failed to toggle demo fullscreen",w)}}),document.addEventListener("fullscreenchange",y),document.addEventListener("webkitfullscreenchange",y),document.addEventListener("keydown",w=>{w.key==="Escape"&&s&&l()}),y()}function ci(){const e=document.querySelector(".demo-player:not(.demo-player-empty)"),n=e==null?void 0:e.querySelector("iframe");if(!e||!n)return;const t=document.createElement("canvas");t.width=1,t.height=1;const a=t.getContext("2d",{willReadFrequently:!0});if(!a)return;let o=0,r=0,i={red:34,green:211,blue:238};const s=(d,p,b)=>{i={red:Math.round(i.red*.7+d*.3),green:Math.round(i.green*.7+p*.3),blue:Math.round(i.blue*.7+b*.3)},e.style.setProperty("--demo-ambient",`${i.red} ${i.green} ${i.blue}`),e.classList.add("has-ambient-light")},c=d=>{if(d.origin!==window.location.origin)return;const p=d.data;if(!p||typeof p!="object"||p.type!=="ada-demo-ambient"||!Array.isArray(p.color)||p.color.length<3)return;const[b,y,w]=p.color.map(Number);[b,y,w].every(Number.isFinite)&&s(b,y,w)},l=()=>{var d;try{const p=(d=n.contentDocument)==null?void 0:d.querySelector("canvas");if(!p||p.width<=0||p.height<=0){r+=1,o=window.setTimeout(l,r<120?250:1e3);return}const b=Math.max(0,Math.floor(p.width*.5)),y=Math.max(0,Math.floor(p.height*.42));a.clearRect(0,0,1,1),a.drawImage(p,b,y,1,1,0,0,1,1);const[w,E,S,_]=a.getImageData(0,0,1,1).data;_>0&&w+E+S>8&&s(w,E,S),r=0,o=window.setTimeout(l,450)}catch{r+=1,o=window.setTimeout(l,r<12?450:1200)}};n.addEventListener("load",()=>{window.clearTimeout(o),r=0,o=window.setTimeout(l,500)}),window.addEventListener("message",c),o=window.setTimeout(l,500)}function li(){const e=document.querySelector(".showcase-carousel"),n=Array.from(document.querySelectorAll(".showcase-slide")),t=Array.from(document.querySelectorAll(".showcase-carousel-dot"));if(!e||n.length<2)return;let a=0,o;const r=s=>{a=(s+n.length)%n.length,n.forEach((c,l)=>{const d=l===a;c.classList.toggle("is-active",d),c.setAttribute("aria-hidden",String(!d)),c.querySelectorAll("a").forEach(p=>{p.tabIndex=d?0:-1})}),t.forEach((c,l)=>{c.classList.toggle("is-active",l===a),c.setAttribute("aria-current",l===a?"true":"false")})},i=()=>{window.clearInterval(o),o=window.setInterval(()=>{r(a+1)},5e3)};t.forEach((s,c)=>{s.addEventListener("click",()=>{r(c),i()})}),e.addEventListener("mouseenter",()=>window.clearInterval(o)),e.addEventListener("mouseleave",i),e.addEventListener("focusin",()=>window.clearInterval(o)),e.addEventListener("focusout",i),r(0),i()}ti().catch(e=>{console.error(e),ze("Page failed to load","Refresh the page or try again in a moment.")}).then(()=>{try{ai()}catch(e){console.error("Failed to initialize page interactions",e)}Is(),ni()});
