(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function ht(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function xn(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const t=e[n],a=typeof t;(a==="object"||a==="function")&&!Object.isFrozen(t)&&xn(t)}),e}class un{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Mn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function pe(e,...n){const t=Object.create(null);for(const a in e)t[a]=e[a];return n.forEach(function(a){for(const s in a)t[s]=a[s]}),t}const ft="</span>",pn=e=>!!e.scope,bt=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((a,s)=>`${a}${"_".repeat(s+1)}`)].join(" ")}return`${n}${e}`};class yt{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Mn(n)}openNode(n){if(!pn(n))return;const t=bt(n.scope,{prefix:this.classPrefix});this.span(t)}closeNode(n){pn(n)&&(this.buffer+=ft)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const gn=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class tn{constructor(){this.rootNode=gn(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=gn({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(a=>this._walk(n,a)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{tn._collapse(t)}))}}class wt extends tn{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,t){const a=n.root;t&&(a.scope=`language:${t}`),this.add(a)}toHTML(){return new yt(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function ke(e){return e?typeof e=="string"?e:e.source:null}function $n(e){return ye("(?=",e,")")}function Et(e){return ye("(?:",e,")*")}function vt(e){return ye("(?:",e,")?")}function ye(...e){return e.map(t=>ke(t)).join("")}function At(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function an(...e){return"("+(At(e).capture?"":"?:")+e.map(a=>ke(a)).join("|")+")"}function Cn(e){return new RegExp(e.toString()+"|").exec("").length-1}function St(e,n){const t=e&&e.exec(n);return t&&t.index===0}const _t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function sn(e,{joinWith:n}){let t=0;return e.map(a=>{t+=1;const s=t;let r=ke(a),i="";for(;r.length>0;){const o=_t.exec(r);if(!o){i+=r;break}i+=r.substring(0,o.index),r=r.substring(o.index+o[0].length),o[0][0]==="\\"&&o[1]?i+="\\"+String(Number(o[1])+s):(i+=o[0],o[0]==="("&&t++)}return i}).map(a=>`(${a})`).join(n)}const Tt=/\b\B/,Rn="[a-zA-Z]\\w*",on="[a-zA-Z_]\\w*",On="\\b\\d+(\\.\\d+)?",Ln="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Dn="\\b(0b[01]+)",Nt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",It=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=ye(n,/.*\b/,e.binary,/\b.*/)),pe({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,a)=>{t.index!==0&&a.ignoreMatch()}},e)},xe={begin:"\\\\[\\s\\S]",relevance:0},kt={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[xe]},xt={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[xe]},Mt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Fe=function(e,n,t={}){const a=pe({scope:"comment",begin:e,end:n,contains:[]},t);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=an("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:ye(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},$t=Fe("//","$"),Ct=Fe("/\\*","\\*/"),Rt=Fe("#","$"),Ot={scope:"number",begin:On,relevance:0},Lt={scope:"number",begin:Ln,relevance:0},Dt={scope:"number",begin:Dn,relevance:0},Bt={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[xe,{begin:/\[/,end:/\]/,relevance:0,contains:[xe]}]},Pt={scope:"title",begin:Rn,relevance:0},Ut={scope:"title",begin:on,relevance:0},Ft={begin:"\\.\\s*"+on,relevance:0},Ht=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var Oe=Object.freeze({__proto__:null,APOS_STRING_MODE:kt,BACKSLASH_ESCAPE:xe,BINARY_NUMBER_MODE:Dt,BINARY_NUMBER_RE:Dn,COMMENT:Fe,C_BLOCK_COMMENT_MODE:Ct,C_LINE_COMMENT_MODE:$t,C_NUMBER_MODE:Lt,C_NUMBER_RE:Ln,END_SAME_AS_BEGIN:Ht,HASH_COMMENT_MODE:Rt,IDENT_RE:Rn,MATCH_NOTHING_RE:Tt,METHOD_GUARD:Ft,NUMBER_MODE:Ot,NUMBER_RE:On,PHRASAL_WORDS_MODE:Mt,QUOTE_STRING_MODE:xt,REGEXP_MODE:Bt,RE_STARTERS_RE:Nt,SHEBANG:It,TITLE_MODE:Pt,UNDERSCORE_IDENT_RE:on,UNDERSCORE_TITLE_MODE:Ut});function Gt(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function zt(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Wt(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Gt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function qt(e,n){Array.isArray(e.illegal)&&(e.illegal=an(...e.illegal))}function jt(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Vt(e,n){e.relevance===void 0&&(e.relevance=1)}const Kt=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=t.keywords,e.begin=ye(t.beforeMatch,$n(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},Zt=["of","and","for","in","not","or","if","then","parent","list","value"],Yt="keyword";function Bn(e,n,t=Yt){const a=Object.create(null);return typeof e=="string"?s(t,e.split(" ")):Array.isArray(e)?s(t,e):Object.keys(e).forEach(function(r){Object.assign(a,Bn(e[r],n,r))}),a;function s(r,i){n&&(i=i.map(o=>o.toLowerCase())),i.forEach(function(o){const c=o.split("|");a[c[0]]=[r,Xt(c[0],c[1])]})}}function Xt(e,n){return n?Number(n):Qt(e)?0:1}function Qt(e){return Zt.includes(e.toLowerCase())}const mn={},be=e=>{console.error(e)},hn=(e,...n)=>{console.log(`WARN: ${e}`,...n)},ve=(e,n)=>{mn[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),mn[`${e}/${n}`]=!0)},Be=new Error;function Pn(e,n,{key:t}){let a=0;const s=e[t],r={},i={};for(let o=1;o<=n.length;o++)i[o+a]=s[o],r[o+a]=!0,a+=Cn(n[o-1]);e[t]=i,e[t]._emit=r,e[t]._multi=!0}function Jt(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw be("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Be;if(typeof e.beginScope!="object"||e.beginScope===null)throw be("beginScope must be object"),Be;Pn(e,e.begin,{key:"beginScope"}),e.begin=sn(e.begin,{joinWith:""})}}function ea(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw be("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Be;if(typeof e.endScope!="object"||e.endScope===null)throw be("endScope must be object"),Be;Pn(e,e.end,{key:"endScope"}),e.end=sn(e.end,{joinWith:""})}}function na(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function ta(e){na(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Jt(e),ea(e)}function aa(e){function n(i,o){return new RegExp(ke(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(o?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(o,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,o]),this.matchAt+=Cn(o)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const o=this.regexes.map(c=>c[1]);this.matcherRe=n(sn(o,{joinWith:"|"}),!0),this.lastIndex=0}exec(o){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(o);if(!c)return null;const d=c.findIndex((g,y)=>y>0&&g!==void 0),u=this.matchIndexes[d];return c.splice(0,d),Object.assign(c,u)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(o){if(this.multiRegexes[o])return this.multiRegexes[o];const c=new t;return this.rules.slice(o).forEach(([d,u])=>c.addRule(d,u)),c.compile(),this.multiRegexes[o]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(o,c){this.rules.push([o,c]),c.type==="begin"&&this.count++}exec(o){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let d=c.exec(o);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,d=u.exec(o)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function s(i){const o=new a;return i.contains.forEach(c=>o.addRule(c.begin,{rule:c,type:"begin"})),i.terminatorEnd&&o.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&o.addRule(i.illegal,{type:"illegal"}),o}function r(i,o){const c=i;if(i.isCompiled)return c;[zt,jt,ta,Kt].forEach(u=>u(i,o)),e.compilerExtensions.forEach(u=>u(i,o)),i.__beforeBegin=null,[Wt,qt,Vt].forEach(u=>u(i,o)),i.isCompiled=!0;let d=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),d=i.keywords.$pattern,delete i.keywords.$pattern),d=d||/\w+/,i.keywords&&(i.keywords=Bn(i.keywords,e.case_insensitive)),c.keywordPatternRe=n(d,!0),o&&(i.begin||(i.begin=/\B|\b/),c.beginRe=n(c.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(c.endRe=n(c.end)),c.terminatorEnd=ke(c.end)||"",i.endsWithParent&&o.terminatorEnd&&(c.terminatorEnd+=(i.end?"|":"")+o.terminatorEnd)),i.illegal&&(c.illegalRe=n(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(u){return sa(u==="self"?i:u)})),i.contains.forEach(function(u){r(u,c)}),i.starts&&r(i.starts,o),c.matcher=s(c),c}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=pe(e.classNameAliases||{}),r(e)}function Un(e){return e?e.endsWithParent||Un(e.starts):!1}function sa(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return pe(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:Un(e)?pe(e,{starts:e.starts?pe(e.starts):null}):Object.isFrozen(e)?pe(e):e}var ia="11.11.1";class oa extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const Ye=Mn,fn=pe,bn=Symbol("nomatch"),ra=7,Fn=function(e){const n=Object.create(null),t=Object.create(null),a=[];let s=!0;const r="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let o={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:wt};function c(l){return o.noHighlightRe.test(l)}function d(l){let f=l.className+" ";f+=l.parentNode?l.parentNode.className:"";const h=o.languageDetectRe.exec(f);if(h){const v=U(h[1]);return v||(hn(r.replace("{}",h[1])),hn("Falling back to no-highlight mode for this block.",l)),v?h[1]:"no-highlight"}return f.split(/\s+/).find(v=>c(v)||U(v))}function u(l,f,h){let v="",N="";typeof f=="object"?(v=l,h=f.ignoreIllegals,N=f.language):(ve("10.7.0","highlight(lang, code, ...args) has been deprecated."),ve("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),N=l,v=f),h===void 0&&(h=!0);const O={code:v,language:N};Q("before:highlight",O);const B=O.result?O.result:g(O.language,O.code,h);return B.code=O.code,Q("after:highlight",B),B}function g(l,f,h,v){const N=Object.create(null);function O(p,b){return p.keywords[b]}function B(){if(!E.keywords){H.addText(L);return}let p=0;E.keywordPatternRe.lastIndex=0;let b=E.keywordPatternRe.exec(L),A="";for(;b;){A+=L.substring(p,b.index);const x=Z.case_insensitive?b[0].toLowerCase():b[0],G=O(E,x);if(G){const[se,gt]=G;if(H.addText(A),A="",N[x]=(N[x]||0)+1,N[x]<=ra&&(Re+=gt),se.startsWith("_"))A+=b[0];else{const mt=Z.classNameAliases[se]||se;V(b[0],mt)}}else A+=b[0];p=E.keywordPatternRe.lastIndex,b=E.keywordPatternRe.exec(L)}A+=L.substring(p),H.addText(A)}function K(){if(L==="")return;let p=null;if(typeof E.subLanguage=="string"){if(!n[E.subLanguage]){H.addText(L);return}p=g(E.subLanguage,L,!0,Ce[E.subLanguage]),Ce[E.subLanguage]=p._top}else p=m(L,E.subLanguage.length?E.subLanguage:null);E.relevance>0&&(Re+=p.relevance),H.__addSublanguage(p._emitter,p.language)}function z(){E.subLanguage!=null?K():B(),L=""}function V(p,b){p!==""&&(H.startScope(b),H.addText(p),H.endScope())}function we(p,b){let A=1;const x=b.length-1;for(;A<=x;){if(!p._emit[A]){A++;continue}const G=Z.classNameAliases[p[A]]||p[A],se=b[A];G?V(se,G):(L=se,B(),L=""),A++}}function Me(p,b){return p.scope&&typeof p.scope=="string"&&H.openNode(Z.classNameAliases[p.scope]||p.scope),p.beginScope&&(p.beginScope._wrap?(V(L,Z.classNameAliases[p.beginScope._wrap]||p.beginScope._wrap),L=""):p.beginScope._multi&&(we(p.beginScope,b),L="")),E=Object.create(p,{parent:{value:E}}),E}function _e(p,b,A){let x=St(p.endRe,A);if(x){if(p["on:end"]){const G=new un(p);p["on:end"](b,G),G.isMatchIgnored&&(x=!1)}if(x){for(;p.endsParent&&p.parent;)p=p.parent;return p}}if(p.endsWithParent)return _e(p.parent,b,A)}function We(p){return E.matcher.regexIndex===0?(L+=p[0],1):(Ze=!0,0)}function qe(p){const b=p[0],A=p.rule,x=new un(A),G=[A.__beforeBegin,A["on:begin"]];for(const se of G)if(se&&(se(p,x),x.isMatchIgnored))return We(b);return A.skip?L+=b:(A.excludeBegin&&(L+=b),z(),!A.returnBegin&&!A.excludeBegin&&(L=b)),Me(A,p),A.returnBegin?0:b.length}function je(p){const b=p[0],A=f.substring(p.index),x=_e(E,p,A);if(!x)return bn;const G=E;E.endScope&&E.endScope._wrap?(z(),V(b,E.endScope._wrap)):E.endScope&&E.endScope._multi?(z(),we(E.endScope,p)):G.skip?L+=b:(G.returnEnd||G.excludeEnd||(L+=b),z(),G.excludeEnd&&(L=b));do E.scope&&H.closeNode(),!E.skip&&!E.subLanguage&&(Re+=E.relevance),E=E.parent;while(E!==x.parent);return x.starts&&Me(x.starts,p),G.returnEnd?0:b.length}function Ve(){const p=[];for(let b=E;b!==Z;b=b.parent)b.scope&&p.unshift(b.scope);p.forEach(b=>H.openNode(b))}let Ee={};function $e(p,b){const A=b&&b[0];if(L+=p,A==null)return z(),0;if(Ee.type==="begin"&&b.type==="end"&&Ee.index===b.index&&A===""){if(L+=f.slice(b.index,b.index+1),!s){const x=new Error(`0 width match regex (${l})`);throw x.languageName=l,x.badRule=Ee.rule,x}return 1}if(Ee=b,b.type==="begin")return qe(b);if(b.type==="illegal"&&!h){const x=new Error('Illegal lexeme "'+A+'" for mode "'+(E.scope||"<unnamed>")+'"');throw x.mode=E,x}else if(b.type==="end"){const x=je(b);if(x!==bn)return x}if(b.type==="illegal"&&A==="")return L+=`
`,1;if(Ke>1e5&&Ke>b.index*3)throw new Error("potential infinite loop, way more iterations than matches");return L+=A,A.length}const Z=U(l);if(!Z)throw be(r.replace("{}",l)),new Error('Unknown language: "'+l+'"');const M=aa(Z);let ue="",E=v||M;const Ce={},H=new o.__emitter(o);Ve();let L="",Re=0,fe=0,Ke=0,Ze=!1;try{if(Z.__emitTokens)Z.__emitTokens(f,H);else{for(E.matcher.considerAll();;){Ke++,Ze?Ze=!1:E.matcher.considerAll(),E.matcher.lastIndex=fe;const p=E.matcher.exec(f);if(!p)break;const b=f.substring(fe,p.index),A=$e(b,p);fe=p.index+A}$e(f.substring(fe))}return H.finalize(),ue=H.toHTML(),{language:l,value:ue,relevance:Re,illegal:!1,_emitter:H,_top:E}}catch(p){if(p.message&&p.message.includes("Illegal"))return{language:l,value:Ye(f),illegal:!0,relevance:0,_illegalBy:{message:p.message,index:fe,context:f.slice(fe-100,fe+100),mode:p.mode,resultSoFar:ue},_emitter:H};if(s)return{language:l,value:Ye(f),illegal:!1,relevance:0,errorRaised:p,_emitter:H,_top:E};throw p}}function y(l){const f={value:Ye(l),illegal:!1,relevance:0,_top:i,_emitter:new o.__emitter(o)};return f._emitter.addText(l),f}function m(l,f){f=f||o.languages||Object.keys(n);const h=y(l),v=f.filter(U).filter(te).map(z=>g(z,l,!1));v.unshift(h);const N=v.sort((z,V)=>{if(z.relevance!==V.relevance)return V.relevance-z.relevance;if(z.language&&V.language){if(U(z.language).supersetOf===V.language)return 1;if(U(V.language).supersetOf===z.language)return-1}return 0}),[O,B]=N,K=O;return K.secondBest=B,K}function w(l,f,h){const v=f&&t[f]||h;l.classList.add("hljs"),l.classList.add(`language-${v}`)}function _(l){let f=null;const h=d(l);if(c(h))return;if(Q("before:highlightElement",{el:l,language:h}),l.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",l);return}if(l.children.length>0&&(o.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(l)),o.throwUnescapedHTML))throw new oa("One of your code blocks includes unescaped HTML.",l.innerHTML);f=l;const v=f.textContent,N=h?u(v,{language:h,ignoreIllegals:!0}):m(v);l.innerHTML=N.value,l.dataset.highlighted="yes",w(l,h,N.language),l.result={language:N.language,re:N.relevance,relevance:N.relevance},N.secondBest&&(l.secondBest={language:N.secondBest.language,relevance:N.secondBest.relevance}),Q("after:highlightElement",{el:l,result:N,text:v})}function k(l){o=fn(o,l)}const C=()=>{P(),ve("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function T(){P(),ve("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let D=!1;function P(){function l(){P()}if(document.readyState==="loading"){D||window.addEventListener("DOMContentLoaded",l,!1),D=!0;return}document.querySelectorAll(o.cssSelector).forEach(_)}function R(l,f){let h=null;try{h=f(e)}catch(v){if(be("Language definition for '{}' could not be registered.".replace("{}",l)),s)be(v);else throw v;h=i}h.name||(h.name=l),n[l]=h,h.rawDefinition=f.bind(null,e),h.aliases&&j(h.aliases,{languageName:l})}function S(l){delete n[l];for(const f of Object.keys(t))t[f]===l&&delete t[f]}function q(){return Object.keys(n)}function U(l){return l=(l||"").toLowerCase(),n[l]||n[t[l]]}function j(l,{languageName:f}){typeof l=="string"&&(l=[l]),l.forEach(h=>{t[h.toLowerCase()]=f})}function te(l){const f=U(l);return f&&!f.disableAutodetect}function me(l){l["before:highlightBlock"]&&!l["before:highlightElement"]&&(l["before:highlightElement"]=f=>{l["before:highlightBlock"](Object.assign({block:f.el},f))}),l["after:highlightBlock"]&&!l["after:highlightElement"]&&(l["after:highlightElement"]=f=>{l["after:highlightBlock"](Object.assign({block:f.el},f))})}function ae(l){me(l),a.push(l)}function de(l){const f=a.indexOf(l);f!==-1&&a.splice(f,1)}function Q(l,f){const h=l;a.forEach(function(v){v[h]&&v[h](f)})}function he(l){return ve("10.7.0","highlightBlock will be removed entirely in v12.0"),ve("10.7.0","Please use highlightElement now."),_(l)}Object.assign(e,{highlight:u,highlightAuto:m,highlightAll:P,highlightElement:_,highlightBlock:he,configure:k,initHighlighting:C,initHighlightingOnLoad:T,registerLanguage:R,unregisterLanguage:S,listLanguages:q,getLanguage:U,registerAliases:j,autoDetection:te,inherit:fn,addPlugin:ae,removePlugin:de}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString=ia,e.regex={concat:ye,lookahead:$n,either:an,optional:vt,anyNumberOfTimes:Et};for(const l in Oe)typeof Oe[l]=="object"&&xn(Oe[l]);return Object.assign(e,Oe),e},Se=Fn({});Se.newInstance=()=>Fn({});var ca=Se;Se.HighlightJS=Se;Se.default=Se;const oe=ht(ca);function la(e){const n=e.regex,t={},a={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},a]});const s={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},r=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),i={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},o={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,s]};s.contains.push(o);const c={match:/\\"/},d={className:"string",begin:/'/,end:/'/},u={match:/\\'/},g={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]},y=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],m=e.SHEBANG({binary:`(${y.join("|")})`,relevance:10}),w={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},_=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],k=["true","false"],C={match:/(\/[a-z._-]+)+/},T=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],D=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],P=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],R=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:_,literal:k,built_in:[...T,...D,"set","shopt",...P,...R]},contains:[m,e.SHEBANG(),w,g,r,i,C,o,c,d,u,t]}}const yn="[A-Za-z$_][0-9A-Za-z$_]*",da=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],ua=["true","false","null","undefined","NaN","Infinity"],Hn=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Gn=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],zn=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],pa=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],ga=[].concat(zn,Hn,Gn);function ma(e){const n=e.regex,t=(h,{after:v})=>{const N="</"+h[0].slice(1);return h.input.indexOf(N,v)!==-1},a=yn,s={begin:"<>",end:"</>"},r=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(h,v)=>{const N=h[0].length+h.index,O=h.input[N];if(O==="<"||O===","){v.ignoreMatch();return}O===">"&&(t(h,{after:N})||v.ignoreMatch());let B;const K=h.input.substring(N);if(B=K.match(/^\s*=/)){v.ignoreMatch();return}if((B=K.match(/^\s+extends\s+/))&&B.index===0){v.ignoreMatch();return}}},o={$pattern:yn,keyword:da,literal:ua,built_in:ga,"variable.language":pa},c="[0-9](_?[0-9])*",d=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},m={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},w={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"css"}},_={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"graphql"}},k={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,y]},T={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},D=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,w,_,k,{match:/\$\d+/},g];y.contains=D.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(D)});const P=[].concat(T,y.contains),R=P.concat([{begin:/(\s*)\(/,end:/\)/,keywords:o,contains:["self"].concat(P)}]),S={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:R},q={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},U={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Hn,...Gn]}},j={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},te={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[S],illegal:/%/},me={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ae(h){return n.concat("(?!",h.join("|"),")")}const de={match:n.concat(/\b/,ae([...zn,"super","import"].map(h=>`${h}\\s*\\(`)),a,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},Q={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},he={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},S]},l="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",f={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(l)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[S]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:U},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),j,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,w,_,k,T,{match:/\$\d+/},g,U,{scope:"attr",match:a+n.lookahead(":"),relevance:0},f,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,e.REGEXP_MODE,{className:"function",begin:l,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:r},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},te,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[S,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},Q,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[S]},de,me,q,he,{match:/\$[(.]/}]}}function ha(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},a=["true","false","null"],s={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:a},contains:[n,t,e.QUOTE_STRING_MODE,s,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function fa(e){const n=e.regex,t={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},a={begin:"^[-\\*]{3,}",end:"$"},s={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},r={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},i={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},o=/[A-Za-z][A-Za-z0-9+.-]*/,c={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:n.concat(/\[.+?\]\(/,o,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},d={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},u={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},g=e.inherit(d,{contains:[]}),y=e.inherit(u,{contains:[]});d.contains.push(y),u.contains.push(g);let m=[t,c];return[d,u,g,y].forEach(C=>{C.contains=C.contains.concat(m)}),m=m.concat(d,u),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:m},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:m}]}]},t,r,d,u,{className:"quote",begin:"^>\\s+",contains:m,end:"$"},s,a,c,i,{scope:"literal",match:/&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/}]}}function Wn(e){return e?typeof e=="string"?e:e.source:null}function Te(e){return $("(?=",e,")")}function $(...e){return e.map(t=>Wn(t)).join("")}function ba(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function W(...e){return"("+(ba(e).capture?"":"?:")+e.map(a=>Wn(a)).join("|")+")"}const rn=e=>$(/\b/,e,/\w$/.test(e)?/\b/:/\B/),ya=["Protocol","Type"].map(rn),wn=["init","self"].map(rn),wa=["Any","Self"],Xe=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","package","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],En=["false","nil","true"],Ea=["assignment","associativity","higherThan","left","lowerThan","none","right"],va=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],vn=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],qn=W(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),jn=W(qn,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),Qe=$(qn,jn,"*"),Vn=W(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),Pe=W(Vn,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),J=$(Vn,Pe,"*"),Le=$(/[A-Z]/,Pe,"*"),Aa=["attached","autoclosure",$(/convention\(/,W("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",$(/objc\(/,J,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],Sa=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function _a(e){const n={match:/\s+/,relevance:0},t=e.COMMENT("/\\*","\\*/",{contains:["self"]}),a=[e.C_LINE_COMMENT_MODE,t],s={match:[/\./,W(...ya,...wn)],className:{2:"keyword"}},r={match:$(/\./,W(...Xe)),relevance:0},i=Xe.filter(M=>typeof M=="string").concat(["_|0"]),o=Xe.filter(M=>typeof M!="string").concat(wa).map(rn),c={variants:[{className:"keyword",match:W(...o,...wn)}]},d={$pattern:W(/\b\w+/,/#\w+/),keyword:i.concat(va),literal:En},u=[s,r,c],g={match:$(/\./,W(...vn)),relevance:0},y={className:"built_in",match:$(/\b/,W(...vn),/(?=\()/)},m=[g,y],w={match:/->/,relevance:0},_={className:"operator",relevance:0,variants:[{match:Qe},{match:`\\.(\\.|${jn})+`}]},k=[w,_],C="([0-9]_*)+",T="([0-9a-fA-F]_*)+",D={className:"number",relevance:0,variants:[{match:`\\b(${C})(\\.(${C}))?([eE][+-]?(${C}))?\\b`},{match:`\\b0x(${T})(\\.(${T}))?([pP][+-]?(${C}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},P=(M="")=>({className:"subst",variants:[{match:$(/\\/,M,/[0\\tnr"']/)},{match:$(/\\/,M,/u\{[0-9a-fA-F]{1,8}\}/)}]}),R=(M="")=>({className:"subst",match:$(/\\/,M,/[\t ]*(?:[\r\n]|\r\n)/)}),S=(M="")=>({className:"subst",label:"interpol",begin:$(/\\/,M,/\(/),end:/\)/}),q=(M="")=>({begin:$(M,/"""/),end:$(/"""/,M),contains:[P(M),R(M),S(M)]}),U=(M="")=>({begin:$(M,/"/),end:$(/"/,M),contains:[P(M),S(M)]}),j={className:"string",variants:[q(),q("#"),q("##"),q("###"),U(),U("#"),U("##"),U("###")]},te=[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}],me={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:te},ae=M=>{const ue=$(M,/\//),E=$(/\//,M);return{begin:ue,end:E,contains:[...te,{scope:"comment",begin:`#(?!.*${E})`,end:/$/}]}},de={scope:"regexp",variants:[ae("###"),ae("##"),ae("#"),me]},Q={match:$(/`/,J,/`/)},he={className:"variable",match:/\$\d+/},l={className:"variable",match:`\\$${Pe}+`},f=[Q,he,l],h={match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:Sa,contains:[...k,D,j]}]}},v={scope:"keyword",match:$(/@/,W(...Aa),Te(W(/\(/,/\s+/)))},N={scope:"meta",match:$(/@/,J)},O=[h,v,N],B={match:Te(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:$(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,Pe,"+")},{className:"type",match:Le,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:$(/\s+&\s+/,Te(Le)),relevance:0}]},K={begin:/</,end:/>/,keywords:d,contains:[...a,...u,...O,w,B]};B.contains.push(K);const z={match:$(J,/\s*:/),keywords:"_|0",relevance:0},V={begin:/\(/,end:/\)/,relevance:0,keywords:d,contains:["self",z,...a,de,...u,...m,...k,D,j,...f,...O,B]},we={begin:/</,end:/>/,keywords:"repeat each",contains:[...a,B]},Me={begin:W(Te($(J,/\s*:/)),Te($(J,/\s+/,J,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:J}]},_e={begin:/\(/,end:/\)/,keywords:d,contains:[Me,...a,...u,...k,D,j,...O,B,V],endsParent:!0,illegal:/["']/},We={match:[/(func|macro)/,/\s+/,W(Q.match,J,Qe)],className:{1:"keyword",3:"title.function"},contains:[we,_e,n],illegal:[/\[/,/%/]},qe={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[we,_e,n],illegal:/\[|%/},je={match:[/operator/,/\s+/,Qe],className:{1:"keyword",3:"title"}},Ve={begin:[/precedencegroup/,/\s+/,Le],className:{1:"keyword",3:"title"},contains:[B],keywords:[...Ea,...En],end:/}/},Ee={match:[/class\b/,/\s+/,/func\b/,/\s+/,/\b[A-Za-z_][A-Za-z0-9_]*\b/],scope:{1:"keyword",3:"keyword",5:"title.function"}},$e={match:[/class\b/,/\s+/,/var\b/],scope:{1:"keyword",3:"keyword"}},Z={begin:[/(struct|protocol|class|extension|enum|actor)/,/\s+/,J,/\s*/],beginScope:{1:"keyword",3:"title.class"},keywords:d,contains:[we,...u,{begin:/:/,end:/\{/,keywords:d,contains:[{scope:"title.class.inherited",match:Le},...u],relevance:0}]};for(const M of j.variants){const ue=M.contains.find(Ce=>Ce.label==="interpol");ue.keywords=d;const E=[...u,...m,...k,D,j,...f];ue.contains=[...E,{begin:/\(/,end:/\)/,contains:["self",...E]}]}return{name:"Swift",keywords:d,contains:[...a,We,qe,Ee,$e,Z,je,Ve,{beginKeywords:"import",end:/$/,contains:[...a],relevance:0},de,...u,...m,...k,D,j,...f,...O,B,V]}}const Ue="[A-Za-z$_][0-9A-Za-z$_]*",Kn=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Zn=["true","false","null","undefined","NaN","Infinity"],Yn=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Xn=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Qn=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Jn=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],et=[].concat(Qn,Yn,Xn);function Ta(e){const n=e.regex,t=(h,{after:v})=>{const N="</"+h[0].slice(1);return h.input.indexOf(N,v)!==-1},a=Ue,s={begin:"<>",end:"</>"},r=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(h,v)=>{const N=h[0].length+h.index,O=h.input[N];if(O==="<"||O===","){v.ignoreMatch();return}O===">"&&(t(h,{after:N})||v.ignoreMatch());let B;const K=h.input.substring(N);if(B=K.match(/^\s*=/)){v.ignoreMatch();return}if((B=K.match(/^\s+extends\s+/))&&B.index===0){v.ignoreMatch();return}}},o={$pattern:Ue,keyword:Kn,literal:Zn,built_in:et,"variable.language":Jn},c="[0-9](_?[0-9])*",d=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},m={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},w={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"css"}},_={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"graphql"}},k={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,y]},T={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},D=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,w,_,k,{match:/\$\d+/},g];y.contains=D.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(D)});const P=[].concat(T,y.contains),R=P.concat([{begin:/(\s*)\(/,end:/\)/,keywords:o,contains:["self"].concat(P)}]),S={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:R},q={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},U={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Yn,...Xn]}},j={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},te={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[S],illegal:/%/},me={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ae(h){return n.concat("(?!",h.join("|"),")")}const de={match:n.concat(/\b/,ae([...Qn,"super","import"].map(h=>`${h}\\s*\\(`)),a,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},Q={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},he={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},S]},l="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",f={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(l)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[S]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:U},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),j,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,w,_,k,T,{match:/\$\d+/},g,U,{scope:"attr",match:a+n.lookahead(":"),relevance:0},f,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,e.REGEXP_MODE,{className:"function",begin:l,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:r},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},te,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[S,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},Q,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[S]},de,me,q,he,{match:/\$[(.]/}]}}function Na(e){const n=e.regex,t=Ta(e),a=Ue,s=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],r={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:s},contains:[t.exports.CLASS_REFERENCE]},o={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},c=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],d={$pattern:Ue,keyword:Kn.concat(c),literal:Zn,built_in:et.concat(s),"variable.language":Jn},u={className:"meta",begin:"@"+a},g=(_,k,C)=>{const T=_.contains.findIndex(D=>D.label===k);if(T===-1)throw new Error("can not find mode to replace");_.contains.splice(T,1,C)};Object.assign(t.keywords,d),t.exports.PARAMS_CONTAINS.push(u);const y=t.contains.find(_=>_.scope==="attr"),m=Object.assign({},y,{match:n.concat(a,n.lookahead(/\s*\?:/))});t.exports.PARAMS_CONTAINS.push([t.exports.CLASS_REFERENCE,y,m]),t.contains=t.contains.concat([u,r,i,m]),g(t,"shebang",e.SHEBANG()),g(t,"use_strict",o);const w=t.contains.find(_=>_.label==="func.def");return w.relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),t}function Ia(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a=/[\p{L}0-9._:-]+/u,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(r,{begin:/\(/,end:/\)/}),o=e.inherit(e.APOS_STRING_MODE,{className:"string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),d={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:a,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,c,o,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,i,c,o]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[d],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[d],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:d}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}oe.registerLanguage("bash",la);oe.registerLanguage("javascript",ma);oe.registerLanguage("json",ha);oe.registerLanguage("markdown",fa);oe.registerLanguage("swift",e=>{const n=_a(e);return n.contains=[{scope:"property",begin:/\.[A-Za-z_]\w*/},...n.contains??[]],n});oe.registerLanguage("typescript",Na);oe.registerLanguage("xml",Ia);const ka={html:"xml",js:"javascript",md:"markdown",sh:"bash",shell:"bash",ts:"typescript",txt:"plaintext"};function nt(e){const n=e.trim().toLowerCase();return ka[n]??n}function tt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function He(e){const n=nt(e);return n?`language-${tt(n)}`:"language-plaintext"}function Ge(e,n){const t=nt(n);return!t||t==="plaintext"||!oe.getLanguage(t)?tt(e):oe.highlight(e,{language:t,ignoreIllegals:!0}).value}function xa(e,n){const t=e.replace(/\r\n?/g,`
`).split(`
`);return t.length>1&&t[t.length-1]===""&&t.pop(),t.map((a,s)=>`<span class="code-line"><span class="code-line-number" aria-hidden="true">${s+1}</span><span class="code-line-content">${Ge(a,n)}</span></span>`).join("")}const Ma=`---
title: "Introducing AdaEngine 0.1.0"
slug: "introducing-adaengine-0-1-0"
description: "AdaEngine 0.1.0 is the first public milestone for a Swift-first, data-driven game engine and app framework."
date: "2026-06-1 13:36"
author: "SpectralDragon"
tags:
  - release
image: images/main/tilemap.png
published: true
featured: true
---

# Introducing AdaEngine 0.1.0

![AdaEditor workspace](images/main/ada-editor.png "AdaEditor workspace with Swift source, scene preview, SwiftPM commands, and the output console.")

After a long road, I am excited to introduce **AdaEngine 0.1.0**: a free and open source game engine and app framework written in Swift.

AdaEngine is built around a simple idea: Swift should be a great language for making games, interactive apps, tools, and creative software — not only apps for Apple platforms. Swift is expressive, safe, fast, and comfortable to write. AdaEngine tries to bring those strengths into game development with a modular engine, a data-driven architecture, and APIs that feel natural to Swift developers.

AdaEngine is available on GitHub under the [MIT license](https://github.com/AdaEngine/AdaEngine). This first release is still early, but it is already a real milestone: the engine can open windows, run an ECS-driven game loop, render sprites and UI, load assets and scenes, play audio, handle input, run physics, and build examples across the engine modules.

:::warning Early release
AdaEngine 0.1.0 is an early release. APIs will change, some features are incomplete, documentation is still growing, and you should expect rough edges. I do not recommend using it for serious production projects yet unless you are comfortable with instability and want to help shape the engine.
:::

If that sounds exciting, you can jump straight into the [tutorials](https://adaengine.org/adaengine-docs/tutorials/adaengine/) or explore the [GitHub repository](https://github.com/AdaEngine/AdaEngine).

:::info
This article includes links to AdaEngine documentation and source code where possible. The docs are generated from the codebase, so they will continue improving together with the engine.
:::

## What is AdaEngine?

AdaEngine is a data-driven game engine and app framework for Swift. Its core design goals are:

- **Simple**: easy to learn for newcomers, but still flexible enough for experienced users.
- **Modular**: most engine features are delivered as plugins, so you can choose what your app needs.
- **Data-driven**: the heart of AdaEngine is an Entity Component System.
- **Fast iteration**: the engine is designed for quick builds and quick feedback.
- **Capable**: the first focus is a complete 2D workflow, with 3D support already present and planned to grow.
- **Cross-platform by design**: AdaEngine currently targets Apple platforms and is actively moving toward broader support including Windows, Linux, Android, and WebAssembly/WebGPU.

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

AdaEngine apps start with an API that should feel familiar if you have used SwiftUI:

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

AdaEngine's heart is its ECS framework. It is inspired by engines and frameworks such as Bevy and RealityKit, but it is designed to feel natural in Swift.

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

The \`@System\` macro generates the concrete system type for you. You write the logic as a Swift function; AdaEngine turns it into a registered ECS system.

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

Systems run in schedulers. AdaEngine includes common stages such as startup, pre-update, update, fixed update, and others:

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

If you prefer a Unity-like workflow for some gameplay code, AdaEngine provides [\`ScriptableObject\`](https://adaengine.org/adaengine-docs/documentation/adascene/scriptableobject) and [\`ScriptableComponents\`](https://adaengine.org/adaengine-docs/documentation/adascene/scriptablecomponents):

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

AdaEngine includes a UI framework called AdaUI. It is inspired by SwiftUI and is designed for both games and editor-like tools.

SwiftUI proved how productive declarative UI can be. AdaUI brings a similar style into the engine, so UI code can be written directly in Swift and rendered inside an AdaEngine scene.

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

AdaUI is especially important for the future of AdaEngine because the editor is planned to be built on top of the same UI system that games can use.

![AdaEditor UI](images/main/ada-editor.png "The editor is planned around the same AdaUI foundations available to games and tools.")

## 2D features

AdaEngine 0.1.0 is focused on building a strong 2D foundation.

### Sprites

Sprites are a core building block for many 2D games. AdaEngine can render sprites from [\`Texture2D\`](https://adaengine.org/adaengine-docs/documentation/adarender/texture2d) and other texture resources:

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

If sprite size is not specified, AdaEngine can infer it from the texture.

### Tilemaps

AdaEngine includes a dedicated \`AdaTilemap\` module. The built-in demos include both custom tilemap examples and LDtk-based tilemap loading. This makes it possible to build levels visually and then load them into an ECS world.

The goal is to support practical 2D workflows: draw levels in an editor, load them as data, attach physics, and iterate quickly.

![Tilemap demo](images/main/tilemap.png "A tilemap scene rendered by AdaEngine.")

### 2D physics

AdaEngine includes \`AdaPhysics\`, backed by Box2D. You can attach collision components to entities and receive collision events through the event system.

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

Scene hot reloading is one of the most important iteration features. When a scene file changes, AdaEngine can apply those changes to a running scene without requiring a restart or a full rebuild. This makes level editing and gameplay tuning much faster.

:::info
Hot reload is an early feature, but the direction is clear: edit data, see the result immediately, and stay focused on the game instead of the build loop.
:::

## Events

Games and apps need to communicate constantly: collisions begin, buttons are pressed, UI opens, enemies spawn, players connect, and systems need to react.

AdaEngine supports both global event-style messaging and ECS frame events.

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

For ECS-native workflows, AdaEngine provides \`Events\` and \`EventSender\`:

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

The \`@res://\` prefix points to your app resource directory. By default, AdaEngine looks for an \`Assets\` or \`Resources\` folder in your target. You can also set the resource directory manually.

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

AdaEngine includes an \`AdaAudio\` module backed by miniaudio. You can load an audio resource and play it from an entity:

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

Rendering in AdaEngine is split into modules and plugins. The current codebase includes:

- \`AdaRender\` for render abstractions, cameras, materials, meshes, textures, render pipelines, and render graphs.
- \`AdaSprite\` for 2D sprite rendering.
- \`AdaCorePipelines\` for built-in rendering pipelines and shaders.
- Metal support on Apple platforms.
- WebGPU support through Dawn/Swan where enabled.
- Shader compilation and transpilation infrastructure built around SPIR-V tooling.

This release already includes the foundation for both 2D and 3D rendering. The 2D path is the most mature today. 3D exists — including meshes, cameras, materials, and a cube demo — but it needs more work before it feels complete.

Render graphs are an important part of the future direction. They make rendering work explicit and composable, which should help the engine grow from simple sprite scenes to more advanced pipelines.

## Platforms and tooling

AdaEngine is a Swift Package using Swift 6.2. The package currently declares Apple platform targets such as macOS 15, iOS 18, tvOS 18, and visionOS 2. It also contains conditional compilation and platform backends for Linux, Windows, Android, WASI/WebAssembly, Metal, WebGPU, X11, and browser runtimes.

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

![Duck Hunt demo](images/main/duck_hunt.png "A small Duck Hunt style demo running with AdaEngine.")

![Space Invaders demo](images/main/space_invaders.jpeg "A Space Invaders style demo from the AdaEngine examples.")

## Why I built AdaEngine

Making games was my childhood dream. I started learning Java because I wanted to make Minecraft mods. Later I became an iOS engineer, but the dream of building games never disappeared.

I spent a lot of free time learning Godot, exploring the game development community, and trying to understand how engines work internally. I started with a small Metal project, kept experimenting, and after years of work reached this milestone: the first AdaEngine release.

I love open source. I love Swift. I have built many open source Swift projects, and I wanted to see what would happen if Swift was used not only for apps, but also for a full game engine.

Swift has a lot to offer: value types, protocol-oriented design, macros, structured concurrency, memory safety, strong tooling, and a syntax that is pleasant to write. The biggest problem is not the language — it is the idea that Swift belongs only to macOS and iOS development.

I do not believe that is true. Swift can be more than that. AdaEngine is my attempt to help prove it.

## What's next?

AdaEngine 0.1.0 is a beginning, not a finish line. The next phase is about expanding the engine, polishing the experience, and growing the community.

### More platforms

The long-term goal is to support as many platforms as possible. Swift is a safe and powerful language, and I believe it can be a great fit for cross-platform game development.

The next important platform work includes WebAssembly/WebGPU, Linux, Android, and continued Windows support.

### The editor

Game developers want to prototype faster and write less boilerplate. AdaUI gives us the foundation to build an editor with the same UI framework that games can use.

Building the AdaEditor in AdaUI is an important goal: it will improve the UI framework, validate the engine tooling, and make AdaEngine more approachable for users who prefer visual workflows.

### 3D rendering and polish

The 2D feature set is the main focus of this release, but 3D support is already present and will continue improving. There is a lot of work to do: better materials, more complete rendering features, MSAA, richer scene tooling, model workflows, and more.

The engine also needs polish across many systems: asset workflows, hot reloading, editor integration, diagnostics, examples, and API design.

### Documentation and tutorials

The API is still unstable and documentation is sparse in places. In the near future, AdaEngine needs more tutorials, better guides, and more examples that show complete workflows from project setup to finished game mechanics.

Good documentation is not optional. It is part of the engine.

## Join AdaEngine

If any of this sounds interesting, please check out [AdaEngine on GitHub](https://github.com/AdaEngine/AdaEngine), read the [tutorial series](https://adaengine.org/adaengine-docs/tutorials/adaengine/), explore the examples, and join the discussion.

AdaEngine is currently built by volunteers. If you want to help build a Swift game engine — with code, documentation, examples, testing, design feedback, or ideas — you are very welcome.

This is only version 0.1.0, but it is the start of something I have wanted to build for a long time.

Let's make games with Swift.
`,$a=[{name:"Vladislav Prusakov",description:"AdaEngine Founder, iOS Engineer",username:"SpectralDragon",avatar:"authors/spectraldragon.jpg",socials:[{username:"SpectralDragon",social:"github"},{username:"SpectralDragon_",social:"twitter"}]}],Ca={},Ra=$a,Oa=Ca?Object.assign({"./content/articles/introducing-adaengine-0-1-0.md":Ma}):{};function La(e){const n=e.replace(/\r\n/g,`
`);if(!n.startsWith(`---
`))return{frontmatter:{},body:n.trim()};const t=n.indexOf(`
---
`,4);if(t===-1)return{frontmatter:{},body:n.trim()};const a=n.slice(4,t),s=n.slice(t+5).trim(),r={};let i=null;for(const o of a.split(`
`)){const c=o.trim();if(!c){i=null;continue}if(c.startsWith("- ")&&i){const y=r[i],m=An(c.slice(2).trim()),w=Array.isArray(y)?y:[];w.push(m),r[i]=w;continue}const d=o.indexOf(":");if(d===-1){i=null;continue}const u=o.slice(0,d).trim(),g=o.slice(d+1).trim();if(!g){r[u]=[],i=u;continue}r[u]=An(g),i=null}return{frontmatter:r,body:s}}function An(e){return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1).split(",").map(n=>n.trim().replace(/^['"]|['"]$/g,"")).filter(Boolean):e==="true"?!0:e==="false"?!1:e.replace(/^['"]|['"]$/g,"")}function ne(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Da(e){return/^(https?:|data:|blob:|\/)/.test(e)?e:`${"/".endsWith("/")?"/":"//"}${e.replace(/^\/+/,"")}`}function at(e){return/^https?:\/\//.test(e)}function Je(e){return e.trim().replace(/^@/,"").toLowerCase()}function Ba(e){var t;if(typeof e.url=="string")return e.url;if(typeof e.profileUrl=="string")return e.profileUrl;const n=(t=e.socials)==null?void 0:t.find(a=>a.social==="github");if(typeof(n==null?void 0:n.url)=="string")return n.url;if(typeof(n==null?void 0:n.username)=="string")return`https://github.com/${n.username.replace(/^@/,"")}`;if(typeof e.username=="string")return`https://github.com/${e.username.replace(/^@/,"")}`}function Pa(e,n){if(typeof e!="string"||!e.trim())throw new Error(`Invalid article author in ${n}`);const t=Je(e),a=Ra.find(s=>Je(s.username??s.name)===t||Je(s.name)===t);return a?{name:a.name,url:Ba(a)}:at(e)?{name:e,url:e}:{name:e}}function Ua(e,n){if(!/^(https?:\/\/|\/|\.\/|\.\.\/|[A-Za-z0-9/_-])/.test(n))return Ae(e);const t=ne(n),a=at(n)?' target="_blank" rel="noreferrer"':"";return`<a href="${t}"${a}>${Ae(e)}</a>`}function Ae(e){return ne(e).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>")}function Fa(e,n){let t=0;for(let a=n;a<e.length;a+=1){const s=e[a];if(s==="("){t+=1;continue}if(s===")"){if(t===0)return a;t-=1}}return-1}function ie(e){let n="",t=0;for(;t<e.length;){const a=e.indexOf("[",t);if(a===-1){n+=Ae(e.slice(t));break}const s=e.indexOf("]",a+1);if(s===-1||e[s+1]!=="("){n+=Ae(e.slice(t,a+1)),t=a+1;continue}const r=s+2,i=Fa(e,r);if(i===-1){n+=Ae(e.slice(t,a+1)),t=a+1;continue}n+=Ae(e.slice(t,a)),n+=Ua(e.slice(a+1,s),e.slice(r,i)),t=i+1}return n}function Ha(e){const n=e.toLowerCase();return{js:"JavaScript",javascript:"JavaScript",json:"JSON",md:"Markdown",markdown:"Markdown",sh:"Shell",shell:"Shell",swift:"Swift",ts:"TypeScript",typescript:"TypeScript"}[n]??(e?e[0].toUpperCase()+e.slice(1):"Code")}function Ga(e){var s;const n=e.match(/(?:^|\s)(?:title|filename)=["']([^"']+)["']/),t=((s=e.split(/\s+/)[0])==null?void 0:s.replace(/[^\w#+-]/g,""))??"",a=(n==null?void 0:n[1])??e.replace(t,"").trim().replace(/^["']|["']$/g,"");return{language:t,title:a}}function za(e,n,t){const a=Ha(n);return`
    <figure class="article-code-block">
      <figcaption>
        <span>${ne(t||a)}</span>
        <span>${ne(a)}</span>
      </figcaption>
      <pre><code class="${He(n)}">${Ge(e,n)}</code></pre>
    </figure>
  `}function Wa(e){const n=e.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/),t=e.match(/^::video\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/),a=n??t;if(!a)return null;const[,s,r,i]=a,o=Da(r),c=i||s,d=!!t||/\.(mp4|webm|ogg|mov)$/i.test(r),u=d?`<video controls playsinline preload="metadata" src="${ne(o)}">${ne(s)}</video>`:`<img src="${ne(o)}" alt="${ne(s)}" loading="lazy" />`;return`
    <figure class="article-media ${d?"article-media-video":"article-media-image"}">
      ${u}
      ${c?`<figcaption>${ie(c)}</figcaption>`:""}
    </figure>
  `}function qa(e){const n=[];let t=!1;const a=()=>{t&&(n.push("</ul>"),t=!1)};for(const s of e){const r=s.trim();if(!r){a();continue}if(r.startsWith("- ")){t||(n.push("<ul>"),t=!0),n.push(`<li>${ie(r.slice(2))}</li>`);continue}a(),n.push(`<p>${ie(r)}</p>`)}return a(),n.join(`
`)}function ja(e,n,t){const a=["note","tip","warning","danger","info"].includes(e)?e:"note";return`
    <aside class="article-callout article-callout-${a}">
      <span class="article-callout-icon" aria-hidden="true">!</span>
      <div>
        <p class="article-callout-title">${ie(n||{danger:"Important",info:"Info",note:"Note",tip:"Tip",warning:"Warning"}[a])}</p>
        ${qa(t)}
      </div>
    </aside>
  `}function Sn(e,n){const t=e.toLowerCase().replace(/`([^`]+)`/g,"$1").replace(/&[a-z]+;/gi,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"section",a=n.get(t)??0;return n.set(t,a+1),a===0?t:`${t}-${a+1}`}function Va(e){const n=e.split(`
`),t=[],a=[],s=new Map;let r=!1,i=!1,o="",c="",d=[],u=!1,g="note",y="",m=[];const w=()=>{r&&(t.push("</ul>"),r=!1)},_=()=>{i&&(t.push(za(d.join(`
`),o,c)),i=!1,o="",c="",d=[])},k=()=>{u&&(t.push(ja(g,y,m)),u=!1,g="note",y="",m=[])};for(const C of n){if(C.startsWith("```")){if(w(),k(),i)_();else{const R=Ga(C.slice(3).trim());o=R.language,c=R.title,i=!0}continue}if(i){d.push(C);continue}if(C.trim()===":::"){w(),k();continue}if(u){m.push(C);continue}const T=C.trim();if(!T){w();continue}if(T.startsWith("- ")){r||(t.push("<ul>"),r=!0),t.push(`<li>${ie(T.slice(2))}</li>`);continue}w();const D=T.match(/^:::(note|tip|warning|danger|info)(?:\s+(.+))?$/i);if(D){g=D[1].toLowerCase(),y=D[2]??"",m=[],u=!0;continue}const P=Wa(T);if(P){t.push(P);continue}if(T.startsWith("### ")){const R=T.slice(4),S=Sn(R,s);a.push({id:S,title:R,level:3}),t.push(`<h3 id="${ne(S)}">${ie(R)}</h3>`);continue}if(T.startsWith("## ")){const R=T.slice(3),S=Sn(R,s);a.push({id:S,title:R,level:2}),t.push(`<h2 id="${ne(S)}">${ie(R)}</h2>`);continue}if(T.startsWith("# ")){t.push(`<h1>${ie(T.slice(2))}</h1>`);continue}t.push(`<p>${ie(T)}</p>`)}return w(),_(),k(),{html:t.join(`
`),toc:a}}function st(e){return e.replace(/^#.*$/gm,"").replace(/```[\s\S]*?```/g,"").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/[*`_>#-]/g,"").replace(/\s+/g," ").trim()}function Ka(e){return st(e).slice(0,180)}function Za(e){const n=st(e).split(" ").filter(Boolean).length;return Math.max(1,Math.ceil(n/180))}function Ya(e,n){const t=e.title,a=e.slug,s=e.description,r=e.date,i=e.author,o=e.tags,c=e.image,d=e.published,u=e.draft,g=e.featured;if(typeof t!="string"||typeof a!="string"||typeof s!="string"||typeof r!="string")throw new Error(`Invalid article frontmatter in ${n}`);return{title:t,slug:a,description:s,date:r,author:Pa(i,n),tags:Array.isArray(o)?o.filter(y=>typeof y=="string"):[],image:typeof c=="string"?c:void 0,published:typeof d=="boolean"?d:!0,draft:typeof u=="boolean"?u:!1,featured:typeof g=="boolean"?g:!1}}const ge=Object.entries(Oa).map(([e,n])=>{const{frontmatter:t,body:a}=La(n),s=Ya(t,e),r=Va(a);return{...s,excerpt:Ka(a),html:r.html,readingTime:Za(a),toc:r.toc}}).filter(e=>e.published&&!e.draft).sort((e,n)=>new Date(n.date).getTime()-new Date(e.date).getTime());ge.filter(e=>e.featured);function Xa(e){return ge.find(n=>n.slug===e)}const en={schemaVersion:1,generatedAt:"",repository:"AdaEngine/AdaEngine",commit:null,demos:[]};let _n=null;const nn=new Map;function it(e){return/^(https?:|data:|blob:|\/)/.test(e)?e:`${"/".endsWith("/")?"/":"//"}${e.replace(/^\/+/,"")}`}async function ot(){return _n??(_n=fetch(it("demos/manifest.json"),{headers:{Accept:"application/json"}}).then(e=>e.ok?e.json():en).then(e=>({...en,...e,demos:[...e.demos??[]].sort((n,t)=>n.tag.localeCompare(t.tag)||n.title.localeCompare(t.title))})).catch(()=>en)),_n}async function Qa(e){const n=it(e.source);return nn.set(n,nn.get(n)??fetch(n).then(t=>{if(!t.ok)throw new Error(`Failed to load ${e.source}`);return t.text()}).catch(()=>"")),nn.get(n)??""}function Ja(e,n){return e.demos.find(t=>t.slug===n)}function es(e){const n=new Map;for(const t of e){const a=n.get(t.tag)??{tag:t.tag,title:t.tagTitle,demos:[]};a.demos.push(t),n.set(t.tag,a)}return[...n.values()]}function rt(e){const n=e.trim().replace(/\/$/,"");return!n||n==="."||n==="/"?"":n.startsWith("/")?n:`/${n}`}function ns(e,n){const t=rt(n);let a=e||"/";return a.startsWith("/")||(a=`/${a}`),t&&(a===t||a.startsWith(`${t}/`))&&(a=a.slice(t.length)||"/"),a=a.replace(/\/$/,"")||"/",a.startsWith("/")?a:`/${a}`}function ts(e,n){const t=rt(n),a=e.startsWith("/")?e:`/${e}`;return t?`${t}${a==="/"?"/":a}`:a}const as=["learn","community","donate"];function ct(e,n){const t=ns(e,n);if(t==="/")return{name:"home"};if(t==="/blog")return{name:"blog"};if(t==="/demos")return{name:"demos"};const a=t.match(/^\/demos\/([^/]+)$/);if(a)return{name:"demo",slug:decodeURIComponent(a[1])};const s=as.find(i=>t===`/${i}`);if(s)return{name:"static-page",page:s};const r=t.match(/^\/articles\/([^/]+)$/);return r?{name:"article",slug:decodeURIComponent(r[1])}:{name:"not-found",path:t}}const Ie="https://adaengine.org",Ne="AdaEngine",ee=`${Ie}/images/main/tilemap.png`,ss={learn:{title:"Learn AdaEngine - Swift Game Engine Tutorials and Examples",description:"Learn AdaEngine with Swift game development guides, ECS fundamentals, rendering notes, physics examples, and links to source code.",path:"/learn",image:ee,type:"website"},community:{title:"AdaEngine Community - Swift Game Development Contributors",description:"Join the AdaEngine community, follow development, discuss Swift game engine ideas, and contribute to the open-source project.",path:"/community",image:ee,type:"website"},donate:{title:"Support AdaEngine - Open-Source Swift Game Engine",description:"Support AdaEngine development through donations, code contributions, examples, bug reports, and documentation improvements.",path:"/donate",image:ee,type:"website"}};function cn(e){if(/^https?:\/\//.test(e))return e;const n=e.startsWith("/")?e:`/${e}`;return`${Ie}${n==="/"?"/":n.replace(/\/$/,"")}`}function is(e){return e.name==="home"?{title:"AdaEngine - Open-Source Swift Game Engine",description:"AdaEngine is an open-source game engine for Swift developers, with ECS, 2D and 3D rendering, physics, UI, editor tooling, and WebAssembly demos.",path:"/",image:ee,type:"website"}:e.name==="blog"?{title:"AdaEngine News - Swift Game Engine Updates",description:"Read AdaEngine updates, release notes, engineering deep dives, and Swift game development articles from the project team.",path:"/blog",image:ee,type:"website"}:e.name==="demos"?{title:"AdaEngine Demos - Swift WebAssembly Game Examples",description:"Explore AdaEngine WebAssembly demos built from Swift source files, including 2D rendering, UI, physics, and scene examples.",path:"/demos",image:ee,type:"website"}:e.name==="static-page"?ss[e.page]:e.name==="demo"?{title:"AdaEngine Demo - Swift WebAssembly Example",description:"This AdaEngine demo page lists a Swift WebAssembly example when the demo is available.",path:`/demos/${e.slug}`,image:ee,type:"website",robots:"noindex, follow"}:e.name==="article"?{title:"AdaEngine Article",description:"This AdaEngine article page is available when the requested article has been published.",path:`/articles/${e.slug}`,image:ee,type:"article",robots:"noindex, follow"}:{title:"Page Not Found - AdaEngine",description:"This AdaEngine page could not be found. Return to the open-source Swift game engine homepage.",path:e.name==="not-found"?e.path:"/",image:ee,type:"website",robots:"noindex, follow"}}function os(e){return{title:`${e.title} - AdaEngine News`,description:e.description,path:`/articles/${e.slug}`,image:cn(e.image??"images/main/tilemap.png"),type:"article"}}function rs(e){return{title:`${e.title} - AdaEngine WebAssembly Demo`,description:`${e.description} View the Swift source and run the WebAssembly build for this AdaEngine demo.`,path:`/demos/${e.slug}`,image:ee,type:"website"}}function cs(e){const n=cn(e.path),t={"@context":"https://schema.org","@type":"WebSite",name:Ne,url:Ie,description:"AdaEngine is an open-source Swift game engine for 2D and 3D games, ECS architecture, rendering, physics, UI, and demos."};return e.path==="/"?[t,{"@context":"https://schema.org","@type":"SoftwareSourceCode",name:Ne,codeRepository:"https://github.com/AdaEngine/AdaEngine",programmingLanguage:"Swift",license:"https://github.com/AdaEngine/AdaEngine/blob/main/LICENSE",url:n,description:e.description}]:e.type==="article"?[t,{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,image:e.image,mainEntityOfPage:n,publisher:{"@type":"Organization",name:Ne,url:Ie}}]:[t,{"@context":"https://schema.org","@type":"WebPage",name:e.title,description:e.description,url:n,isPartOf:{"@type":"WebSite",name:Ne,url:Ie}}]}const re=document.querySelector("#app")??ls(),De="/";function ls(){throw new Error("Root app container #app was not found")}const ds="AdaEngine",lt="images/main/tilemap.png",Tn=["images/main/tilemap.png","images/main/space_invaders.jpeg","images/main/duck_hunt.png"],dt="AdaEngine/AdaEngine",Nn=[{title:"AdaEditor",eyebrow:"Editor",description:"A native scene editor and Swift-first workspace for building AdaEngine projects.",action:"Open AdaEditor",href:"https://github.com/AdaEngine/AdaEngine/tree/main/Editor",image:"images/main/ada-editor.png"},{title:"Sloppy Client",eyebrow:"Client",description:"A focused desktop client for project-oriented AI agent sessions and day-to-day work.",action:"Open Sloppy Client",href:"https://github.com/TeamSloppy/Sloppy/tree/main/Apps/Client",image:"images/main/sloppy-client.png"}],us={learn:{title:"Learn AdaEngine",lead:"Master game development in Swift. From your first sprite to advanced Metal rendering techniques.",sections:[{title:"Documentation",body:"Read guides, API notes and examples for the engine core, ECS, renderer, physics and UI systems.",links:[{label:"Open documentation",href:"https://docs.adaengine.org/"}]},{title:"Examples",body:"Explore sample projects such as tilemaps, arcade games and Swift-first game prototypes.",links:[{label:"Browse examples",href:"https://github.com/AdaEngine/AdaEngine/tree/main/Examples"}]},{title:"Features",body:"Return to the home page feature overview for a quick summary of what AdaEngine can do.",links:[{label:"View features",href:`${F("/")}#features`}]}]}},ps=[{title:"Getting Started",cards:[{title:"Get Started",body:"Install the engine and create your first window in under 5 minutes.",href:"https://docs.adaengine.org/tutorials/adaengine",icon:"book"},{title:"ECS",body:"Understand the Entity-Component-System architecture that powers AdaEngine.",href:"https://docs.adaengine.org/documentation/adaecs/",icon:"play"},{title:"2D Physics Tutorial",body:"Add rigid bodies, collision shapes, and handle physics callbacks.",href:"https://docs.adaengine.org/documentation/adaphysics/",icon:"layout"}]},{title:"API Reference & Documentation",cards:[{title:"Core Framework",body:"Math, Collections, and basic Engine systems.",href:"https://docs.adaengine.org/documentation/adaengine/"},{title:"Rendering Pipeline",body:"Materials, Shaders, Render Graphs, and Metal integration.",href:"https://docs.adaengine.org/documentation/adarender/"},{title:"Audio System",body:"Spatial audio, sound effects, and music streaming.",href:"https://docs.adaengine.org/documentation/adaaudio/"}]}],gs=[{title:"GitHub",subtitle:"Contribute to source code",href:"https://github.com/AdaEngine/AdaEngine",icon:"images/socials/github.svg"},{title:"Discord",subtitle:"Live chat & support",href:"https://discord.gg/adaengine",icon:"images/socials/discord.svg"},{title:"Reddit",subtitle:"r/AdaEngine discussions",href:"https://www.reddit.com/r/AdaEngine/",icon:"images/socials/reddit.svg"},{title:"Telegram",subtitle:"Announcements channel",href:"https://t.me/adaengine",iconClass:"community-link-icon-telegram",iconMarkup:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M42.2 8.7 35.8 39c-.5 2.1-1.8 2.6-3.6 1.6l-9.9-7.3-4.8 4.6c-.5.5-1 .9-2 .9l.7-10.1L34.6 12c.8-.7-.2-1.1-1.2-.4L10.6 25.9.8 22.8c-2.1-.7-2.2-2.1.4-3.1L39.5 4.9c1.8-.7 3.4.4 2.7 3.8Z"/></svg>'},{title:"X (Twitter)",subtitle:"Follow @AdaEngine",href:"https://x.com/AdaEngine",iconClass:"community-link-icon-x",iconMarkup:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M28.4 20.6 43.1 4h-3.5L26.9 18.4 16.7 4H5l15.5 21.9L5 43.4h3.5L22 28.1l10.8 15.3h11.7L28.4 20.6Zm-4.8 5.4-1.6-2.2L9.6 6.5H15l10 14 1.6 2.2 13 18.2h-5.4L23.6 26Z"/></svg>'}],ms=[{title:"Boosty",subtitle:"Monthly Sponsorship",body:"Become a backer on Boosty to get early access to updates, exclusive tutorials, and your name in the engine credits.",href:"https://boosty.to/adaengine",action:"Support on Boosty",icon:"images/icons/ic_boosty.svg",tone:"boosty"},{title:"DonationAlerts",subtitle:"One-time Donation",body:"Prefer to make a one-time contribution? You can support us via DonationAlerts with various payment methods.",href:"https://www.donationalerts.com/r/adaengine",action:"Donate via DA",icon:"images/donation_alerts_logo.svg",tone:"donation-alerts"}],ut=[{title:"Data Driven",description:"AdaEngine build around custom Entity Component System. Simple to use, fast and cache-friendly for your game architecture.",details:"AdaEngine is built around a custom, data-oriented Entity Component System inspired by modern Swift APIs. Components keep game state small and explicit, while systems operate through typed queries, resources, schedules and macros such as @Component and @System. This makes gameplay code modular, cache-friendly and easier to scale from a tiny prototype to a full scene with input, animation, physics and rendering working together.",code:`@Component
struct Player: Entity { }

struct PlayerSystem: System {
    func update(context: UpdateSceneContext) { }
}`},{title:"2D Renderer",description:"Supports real-time 2D rendering for your games and apps. Write custom shaders, materials and render pipelines.",details:"AdaEngine ships with a high-level 2D rendering stack for sprites, text, tilemaps, cameras and custom materials. The demos cover sprite animation, transparency, lighting, text rendering, WGSL experiments and stress scenes, while the renderer still leaves room for lower-level control when you need custom shaders or pipeline work. It is designed for Swift-first game code where drawing a scene should feel direct, but not boxed in.",image:"images/icons/ic_duck.png"},{title:"2D Physics",description:"AdaEngine supports Box2D v3 physics with parallel calculations, lightweight memory usage and fast simulation.",details:"The Physics2D plugin integrates Box2D with AdaEngine entities through components such as PhysicsBody2DComponent and Collision2DComponent. Simulation runs on the fixed-update schedule, then syncs transforms back into the scene so gameplay systems can react through the same ECS flow as the rest of the engine. It includes collision events, debug drawing support and world resources for direct access when a game needs deeper physics control.",image:"images/icons/ic_box2d.svg"},{title:"Render Graphs",description:"Construct your own render pipeline using powerful render graphs.",details:"Rendering is organized around RenderGraph resources, nodes, slots, subgraphs and an executor that runs the graph each frame. Core 2D and 3D pipelines are assembled as graphs, and cameras can point at specific render subgraphs for flexible composition. Diagnostics can snapshot nodes, edges, subgraphs and frame records, which makes custom pipelines easier to reason about when you add post-processing, offscreen passes or specialized rendering stages.",image:"images/icons/ic_render_graph.svg"},{title:"Custom UI Engine",description:"Create your own UI using a SwiftUI-like approach that fits naturally into AdaEngine scenes.",details:"AdaUI brings a SwiftUI-like declarative layer into AdaEngine with views, result builders, environment values, layout containers, gestures, animation, text fields, scroll views and navigation primitives. UI can live naturally beside game scenes, and the engine includes tooling such as a 3D AdaUI debug view for inspecting live UI trees. The goal is to make editor panels, HUDs and in-game interfaces feel native to the same Swift codebase as your gameplay.",code:`struct MainView: View {
    @Environment(\\.scene) var scene

    var body: some View {
        Text("Hello, World!")
    }
}`},{title:"Free and Open Source",description:"AdaEngine is 100% free for you. Licensed by MIT. Learn, modify or use without royalties or runtime fees.",details:"AdaEngine is MIT licensed and developed in the open, with source, tutorials, generated API documentation, demos and build guides available from the repository. You can study the engine internals, modify them for your project, ship without royalties or runtime fees, and contribute fixes, examples or documentation back to the community. The project is still evolving, so the roadmap is visible where the code actually lives.",image:"images/icons/ic_opensource.svg"}];function I(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function hs(e){return/^https?:\/\//.test(e)}function fs(e){return e.details}function ln(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(new Date(e))}function F(e){return ts(e,De)}function X(e){const n=De.endsWith("/")?De:`${De}/`,t=e.replace(/^\/+/,"");return`${n}${t}`}function Y(e,n,t){let a=document.head.querySelector(`meta[${e}="${n}"]`);a||(a=document.createElement("meta"),a.setAttribute(e,n),document.head.appendChild(a)),a.content=t}function bs(e,n){var t;(t=document.head.querySelector(`meta[${e}="${n}"]`))==null||t.remove()}function dn(e){const n=cn(e.path);let t=document.head.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.rel="canonical",document.head.appendChild(t)),document.title=e.title,t.href=n,Y("name","description",e.description),Y("property","og:site_name",Ne),Y("property","og:title",e.title),Y("property","og:description",e.description),Y("property","og:type",e.type),Y("property","og:url",n),Y("property","og:image",e.image),Y("name","twitter:card","summary_large_image"),Y("name","twitter:title",e.title),Y("name","twitter:description",e.description),Y("name","twitter:image",e.image),e.robots?Y("name","robots",e.robots):bs("name","robots");for(const a of document.head.querySelectorAll("script[data-seo-structured-data]"))a.remove();for(const a of cs(e)){const s=document.createElement("script");s.type="application/ld+json",s.dataset.seoStructuredData="true",s.textContent=JSON.stringify(a),document.head.appendChild(s)}}function ys(e){return e<1e3?String(e):e<1e6?`${(e/1e3).toFixed(e<1e4?1:0)}k`:`${(e/1e6).toFixed(1)}m`}async function ws(){const e=document.querySelector("[data-github-stars]"),n=document.querySelector("[data-github-stars-value]");if(n)try{const t=await fetch(`https://api.github.com/repos/${dt}`,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)return;const a=await t.json();if(typeof a.stargazers_count!="number")return;const s=ys(a.stargazers_count);n.textContent=s,e==null||e.setAttribute("aria-label",`${s} GitHub stars`)}catch{}}function ce(){const e=ct(window.location.pathname,"/"),n=e.name==="static-page"?e.page:e.name==="demo"?"demos":e.name,t=[{label:"Home",href:F("/"),active:n==="home"},...ge.length?[{label:"News",href:F("/blog"),active:n==="blog"}]:[],{label:"Demos",href:F("/demos"),active:n==="demos"},{label:"Learn",href:F("/learn"),active:n==="learn"},{label:"Socials",href:F("/community"),active:n==="community"},{label:"Donate",href:F("/donate"),active:n==="donate"}];return`
    <header class="header${n==="learn"?" header-learn":""}">
      <section class="container content-restriction header-container">
        <a class="header-logo" href="${F("/")}" aria-label="AdaEngine home">
          <picture class="header-logo-picture">
            <source srcset="${X("images/ae_logo~dark.svg")}" media="(prefers-color-scheme: dark)" />
            <img src="${X("images/ae_logo.svg")}" alt="AdaEngine" />
          </picture>
          <h2>${ds}</h2>
        </a>
        <button class="burger-container" type="button" aria-label="Open menu" aria-expanded="false">
          <span id="burger" aria-hidden="true"><span class="bar topBar"></span><span class="bar bottomBar"></span></span>
        </button>
        <nav aria-label="Main navigation">
          <ul class="navigation">
            ${t.map(s=>`<li class="navigation-item"><a class="navigation-item-link${s.active?" is-active":""}" href="${s.href}">${s.label}</a></li>`).join("")}
            <li class="navigation-item download-button"><a class="navigation-item-link" href="https://github.com/AdaEngine/AdaEngine/releases">Download</a></li>
          </ul>
        </nav>
      </section>
    </header>
  `}function Es(){return`
    <section class="hero-section safe-area-insets">
      <div class="hero-copy">
        <p class="hero-eyebrow">AdaEngine for Swift developers</p>
        <h1 class="ae-header-title">The Open-Source Engine for Swift Developers</h1>
        <p class="hero-subtitle">Build high-performance 2D and 3D games using modern Swift. Clean architecture, native feeling, and developer-first tooling.</p>
        <div class="hero-actions">
          <a class="header-buttons" href="#features">Get Started</a>
          <a class="header-buttons-github" href="https://github.com/${dt}" aria-label="AdaEngine on GitHub">
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
        <picture class="ae-logo-header"><source srcset="${X("images/ae_logo~dark.svg")}" media="(prefers-color-scheme: dark)" /><img src="${X("images/ae_logo.svg")}" alt="" /></picture>
        <div class="hero-orbit hero-orbit-one"></div>
        <div class="hero-orbit hero-orbit-two"></div>
      </div>
    </section>
  `}function vs(){return`
    <section class="showcase-gallery safe-area-insets" aria-labelledby="showcase-gallery-title">
      <h2 class="showcase-gallery-title" id="showcase-gallery-title">Showcase</h2>
      <div class="showcase-carousel" aria-roledescription="carousel" aria-label="Project screenshots">
        ${Nn.map((e,n)=>`
              <article class="showcase-slide${n===0?" is-active":""}" aria-label="${I(e.title)}" aria-hidden="${n===0?"false":"true"}">
                <div class="showcase-slide-copy">
                  <div class="showcase-carousel-dots" aria-label="Choose project">
                    ${Nn.map((t,a)=>`<button class="showcase-carousel-dot${a===n?" is-active":""}" type="button" data-showcase-index="${a}" aria-label="Show ${I(t.title)}" aria-current="${a===n?"true":"false"}"></button>`).join("")}
                  </div>
                  <span class="showcase-slide-kicker">${I(e.eyebrow)}</span>
                  <h3>${I(e.title)}</h3>
                  <p>${I(e.description)}</p>
                  <a class="showcase-slide-action" href="${e.href}" target="_blank" rel="noreferrer" tabindex="${n===0?"0":"-1"}">${I(e.action)}</a>
                </div>
                <div class="showcase-slide-media">
                  <img src="${X(e.image)}" alt="${I(e.title)} screenshot" loading="lazy" />
                </div>
              </article>
            `).join("")}
      </div>
    </section>
  `}function As(e=[]){return e.length?`<ul class="tags">${e.map(n=>`<li>${n}</li>`).join("")}</ul>`:""}function Ss(){return ge.length?`
    <section id="latest-news" class="latest-news safe-area-insets">
      <h2 class="section-title">Latest News</h2>
      <div class="home-articles-grid">
        ${ge.slice(0,4).map(e=>`
              <article class="home-article-preview">
                <a href="${F(`/articles/${e.slug}`)}">
                  <div class="article-preview-image">
                    <img class="background_image" src="${X(lt)}" alt="${I(e.title)}" />
                    <div class="background_image_overlay"></div>
                    <div class="article-preview-content">
                      <p class="article-date">${ln(e.date)}</p>
                      ${As(e.tags)}
                      <h3>${e.title}</h3>
                      <p>${I(e.author.name)}</p>
                    </div>
                  </div>
                </a>
              </article>
            `).join("")}
      </div>
    </section>
  `:""}function pt(e=[]){const n=e[0]??"News";return`<span class="blog-entry-tag blog-entry-tag-${["release","tutorial","engineering","markdown","frontmatter","vite"].find(a=>n.toLowerCase().includes(a))??"default"}">${I(n)}</span>`}function _s(e,n){return e.image??Tn[n%Tn.length]??lt}function Ts(){re.innerHTML=`
    ${ce()}
    <main class="page-shell blog-page-shell">
      <section class="container content-restriction blog-page">
        <header class="blog-page-hero">
          <h1>Engine News</h1>
          <p>Updates, release notes, and engineering deep dives from the AdaEngine team.</p>
        </header>
        ${ge.length?`<div class="blog-timeline">
                ${ge.map((e,n)=>`
                      <article class="blog-entry">
                        <aside class="blog-entry-meta" aria-label="Article metadata">
                          <time datetime="${e.date}">${ln(e.date)}</time>
                          ${pt(e.tags)}
                        </aside>
                        <a class="blog-entry-card" href="${F(`/articles/${e.slug}`)}">
                          <img class="blog-entry-cover" src="${X(_s(e,n))}" alt="" loading="lazy" />
                          <span class="blog-entry-cover-overlay" aria-hidden="true"></span>
                          <span class="blog-entry-content">
                            <h2>${I(e.title)}</h2>
                            <p>${I(e.description)}</p>
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
    ${le()}
  `}function Ns(e){const n=es(e.demos);re.innerHTML=`
    ${ce()}
    <main class="page-shell demos-page-shell">
      <section class="container content-restriction demos-page">
        <header class="demos-hero">
          <p class="eyebrow">Live WebAssembly examples</p>
          <h1>AdaEngine Demos</h1>
          <p>Explore browser builds generated from the Swift files in the AdaEngine repository. Each demo page includes the embedded build and the source that produced it.</p>
        </header>
        ${n.length?`<div class="demo-groups">
                ${n.map(t=>`
                      <section class="demo-group" aria-labelledby="demo-group-${I(t.tag)}">
                        <div class="demo-group-heading">
                          <h2 id="demo-group-${I(t.tag)}">${I(t.title)}</h2>
                          <span>${t.demos.length} ${t.demos.length===1?"demo":"demos"}</span>
                        </div>
                        <div class="demo-card-grid">
                          ${t.demos.map(Is).join("")}
                        </div>
                      </section>
                    `).join("")}
              </div>`:`<div class="demo-empty">
                <h2>No demos published yet</h2>
                <p>The website will show demos after the AdaEngine export workflow publishes the first manifest.</p>
              </div>`}
      </section>
    </main>
    ${le()}
  `}function Is(e){return`
    <a class="demo-card" href="${F(`/demos/${e.slug}`)}">
      <span class="demo-card-tag">${I(e.tagTitle)}</span>
      <h3>${I(e.title)}</h3>
      <p>${I(e.description)}</p>
      <span class="demo-card-meta">${I(e.sourcePath)}</span>
      ${e.hasBuild?'<span class="demo-card-action">Open demo</span>':'<span class="demo-card-action demo-card-action-muted">Source only</span>'}
    </a>
  `}async function ks(e){const n=await ot(),t=Ja(n,e);if(!t){ze("Demo not found","Check the address or return to the demos page.");return}dn(rs(t));const a=await Qa(t),s=n.commit??"main",r=`https://github.com/${n.repository}/blob/${s}/${t.sourcePath}`;re.innerHTML=`
    ${ce()}
    <main class="page-shell demo-detail-shell">
      <article class="container content-restriction demo-detail-page">
        <header class="demo-detail-hero">
          <a class="article-back-link" href="${F("/demos")}">Back to Demos</a>
          <span class="demo-card-tag">${I(t.tagTitle)}</span>
          <h1>${I(t.title)}</h1>
          <p>${I(t.description)}</p>
          <a class="demo-source-link" href="${r}" target="_blank" rel="noreferrer">${I(t.sourcePath)}</a>
        </header>
        ${t.hasBuild?`<section class="demo-player" aria-label="${I(t.title)} embedded demo">
                <button class="demo-player-fullscreen" type="button" aria-label="Open demo fullscreen" title="Open fullscreen" data-demo-fullscreen>
                  <svg class="demo-player-fullscreen-enter-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg class="demo-player-fullscreen-exit-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <iframe title="${I(t.title)}" src="${X(t.embed)}" allow="fullscreen; gamepad; keyboard-map; clipboard-read; clipboard-write; webgpu" allowfullscreen webkitallowfullscreen></iframe>
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
              <span>${I(t.sourcePath)}</span>
              <span>Swift</span>
            </figcaption>
            <pre class="code-with-line-numbers"><code class="${He("swift")}">${xa(a,"swift")}</code></pre>
          </figure>
        </section>
      </article>
    </main>
    ${le()}
  `}function xs(){return`
    <section id="features" class="features-container safe-area-insets">
      <div class="section-heading">
        <p class="eyebrow">Capabilities</p>
        <h2 class="section-title">Features</h2>
      </div>
      <div class="features-grid">
        ${ut.map((e,n)=>`
              <button class="engine-info-item-container feature-card feature-card-${n+1}" type="button" data-feature-index="${n}" aria-haspopup="dialog">
                <div class="engine-info-item-text">
                  <span class="feature-number">0${n+1}</span>
                  <h3>${e.title}</h3>
                  <p>${e.description}</p>
                </div>
                ${Ms(e)}
                <span class="feature-card-action">Learn more</span>
              </button>
            `).join("")}
      </div>
    </section>
  `}function Ms(e){return`
    <div class="engine-info-item-content">
      ${e.image?`<img src="${X(e.image)}" alt="${e.title}" />`:`<pre><code class="swift-code ${He("swift")}">${Ge(e.code??"","swift")}</code></pre>`}
    </div>
  `}function $s(){return`
    <div class="feature-modal" role="dialog" aria-modal="true" aria-labelledby="feature-modal-title" hidden>
      <div class="feature-modal-backdrop" data-modal-close></div>
      <section class="feature-modal-panel">
        <button class="feature-modal-close demo-player-fullscreen" type="button" aria-label="Close feature details" title="Close" data-modal-close>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="feature-modal-visual" id="feature-modal-visual"></div>
        <p class="eyebrow" id="feature-modal-kicker">Feature</p>
        <h2 id="feature-modal-title"></h2>
        <p id="feature-modal-description"></p>
      </section>
    </div>
  `}function le(){return`
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
            ${ge.length?`<a href="${F("/blog")}">Blog</a>`:""}
            <a href="${F("/learn")}">Learn</a>
            <a href="${F("/community")}">Community</a>
          </section>
          <section>
            <h3>Foundation</h3>
            <a href="${F("/donate")}">Donate</a>
            <a href="https://github.com/AdaEngine/AdaEngine/blob/main/LICENSE">License</a>
          </section>
        </div>
        <div class="footer-bottom">
          <p>© 2021-2026 Vladislav Prusakov and contributors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `}function Cs(e){return e?`
    <span class="learn-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
        ${{book:'<path d="M7 5.5h8.5a2.5 2.5 0 0 1 2.5 2.5v11H9.5A2.5 2.5 0 0 0 7 21.5V5.5Z"/><path d="M7 5.5A2.5 2.5 0 0 1 9.5 3H18v16"/>',play:'<circle cx="12" cy="12" r="9"/><path d="m10.5 8.5 5 3.5-5 3.5v-7Z"/>',layout:'<rect x="4" y="5" width="16" height="14" rx="1.5"/><path d="M9 5v14"/><path d="M4 10h16"/>'}[e]}
      </svg>
    </span>
  `:""}function Rs(){const e=us.learn;re.innerHTML=`
    ${ce()}
    <main class="page-shell learn-page-shell">
      <section class="container content-restriction learn-page">
        <header class="learn-hero">
          <h1>${e.title}</h1>
          <p>${e.lead}</p>
        </header>
        ${ps.map(n=>{const t=n.title.replace(/\W+/g,"-").toLowerCase();return`
              <section class="learn-section" aria-labelledby="${t}">
                <h2 id="${t}">${n.title}</h2>
                <div class="learn-grid">
                  ${n.cards.map(a=>`
                        <a class="learn-card" href="${a.href}">
                          ${Cs(a.icon)}
                          <h3>${a.title}</h3>
                          <p>${a.body}</p>
                        </a>
                      `).join("")}
                </div>
              </section>
            `}).join("")}
      </section>
    </main>
    ${le()}
  `}function Os(e){if(e==="learn"){Rs();return}if(e==="community"){Ds();return}if(e==="donate"){Ls();return}}function Ls(){re.innerHTML=`
    ${ce()}
    <main class="page-shell donation-page-shell">
      <section class="container content-restriction donation-page">
        <header class="donation-hero">
          <h1>Support AdaEngine</h1>
          <p>AdaEngine is an independent open-source project. Your support helps us dedicate more time to development and tooling.</p>
        </header>
        <div class="donation-options" aria-label="Donation options">
          ${ms.map(e=>`
                <article class="donation-card donation-card-${e.tone}">
                  <span class="donation-card-logo" aria-hidden="true">
                    <img src="${X(e.icon)}" alt="" loading="lazy" />
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
    ${le()}
  `}function Ds(){re.innerHTML=`
    ${ce()}
    <main class="page-shell community-page-shell">
      <section class="container content-restriction community-page">
        <header class="community-hero">
          <h1>Join the Community</h1>
          <p>Connect with other developers, share your projects, and contribute to the engine.</p>
        </header>
        <div class="community-link-grid" aria-label="AdaEngine community links">
          ${gs.map(e=>`
                <a class="community-link-card" href="${e.href}" target="_blank" rel="noreferrer">
                  <span class="community-link-icon ${e.iconClass??""}">
                    ${e.iconMarkup??`<img src="${X(e.icon??"")}" alt="" width="42" height="42" loading="lazy" />`}
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
    ${le()}
  `}function Bs(){re.innerHTML=`
    ${ce()}
    <main class="page-shell">
      <div class="container content-restriction">
        ${Es()}
        ${vs()}
        ${Ss()}
        ${xs()}
      </div>
      ${$s()}
    </main>
    ${le()}
  `}function Ps(e){const n=Xa(e);if(!n){ze("Article not found","Check the address or return to the blog.");return}dn(os(n)),re.innerHTML=`
    ${ce()}
    <main class="page-shell article-page-shell">
      <div class="container article-reading-layout">
        <article class="safe-area-insets article-page">
          <header class="article-hero">
            <a class="article-back-link" href="${F("/blog")}">Back to News</a>
            ${pt(n.tags)}
            <h1>${n.title}</h1>
            <div class="article_info">
              ${Us(n.author)}
              <span aria-hidden="true">•</span>
              <time datetime="${n.date}">${ln(n.date)}</time>
              <span aria-hidden="true">•</span>
              <span>${n.readingTime} min read</span>
            </div>
            <p class="article-item-description">${n.description}</p>
          </header>
          <div class="article-content">${n.html}</div>
        </article>
        ${Fs(n.toc)}
      </div>
    </main>
    ${le()}
  `}function Us(e){const n=`By ${e.name}`;return!e.url||!hs(e.url)?`<span>${I(n)}</span>`:`<a class="article-author-link" href="${I(e.url)}" target="_blank" rel="author noreferrer">${I(n)}</a>`}function In(e,n){return e.map(t=>`
        <a class="article-toc-link article-toc-link-level-${t.level}" href="#${t.id}" data-article-toc-link="${t.id}" data-toc-context="${n}">
          <span>${I(t.title)}</span>
        </a>
      `).join("")}function Fs(e){var s;if(!e.length)return"";const n=In(e,"desktop"),t=In(e,"mobile"),a=((s=e[0])==null?void 0:s.title)??"Start";return`
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
          <strong data-current-section>${I(a)}</strong>
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
  `}function ze(e="Page not found",n="This route does not exist yet."){re.innerHTML=`
    ${ce()}
    <main class="page-shell">
      <section class="container content-restriction safe-area-insets status-page">
        <h1>${e}</h1>
        <p>${n}</p>
        <a class="header-buttons" href="${F("/")}">Home</a>
      </section>
    </main>
    ${le()}
  `}function Hs(){const e=document.querySelector(".article-content"),n=document.querySelector("[data-mobile-reader-nav]"),t=document.querySelector("[data-mobile-toc-toggle]"),a=document.querySelector("[data-mobile-toc-sheet]"),s=Array.from(document.querySelectorAll(".article-content h2[id], .article-content h3[id]")),r=Array.from(document.querySelectorAll("[data-article-toc-link]")),i=Array.from(document.querySelectorAll("[data-article-progress-fill]")),o=Array.from(document.querySelectorAll("[data-article-progress-label]")),c=Array.from(document.querySelectorAll("[data-current-section]"));if(!e||!s.length||!r.length)return;let d;const u=m=>{if(!(!t||!a||!n)){if(window.clearTimeout(d),t.setAttribute("aria-expanded",String(m)),m){a.hidden=!1,n.classList.remove("is-closing"),n.classList.add("is-open");return}n.classList.remove("is-open"),n.classList.add("is-closing"),d=window.setTimeout(()=>{a.hidden=!0,n.classList.remove("is-closing")},520)}},g=m=>{const w=document.getElementById(m);w&&(w.scrollIntoView({behavior:"smooth",block:"start"}),u(!1))};r.forEach(m=>{m.addEventListener("click",w=>{const _=m.dataset.articleTocLink;_&&(w.preventDefault(),history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${_}`),g(_))})}),t==null||t.addEventListener("click",()=>{const m=t.getAttribute("aria-expanded")==="true";u(!m)}),document.addEventListener("keydown",m=>{m.key==="Escape"&&u(!1)}),document.addEventListener("click",m=>{!n||!m.target||n.contains(m.target)||u(!1)});const y=()=>{var R;const m=window.scrollY+Math.min(180,window.innerHeight*.28),w=s.slice().reverse().find(S=>S.getBoundingClientRect().top+window.scrollY<=m)??s[0],_=w.id,k=e.offsetTop,C=e.offsetTop+e.scrollHeight-window.innerHeight,T=C<=k?1:Math.min(1,Math.max(0,(window.scrollY-k)/(C-k))),D=`${Math.round(T*100)}%`,P=((R=w.textContent)==null?void 0:R.trim())||"Start";i.forEach(S=>{S.style.transform=`scaleX(${T})`}),o.forEach(S=>{S.textContent=D}),c.forEach(S=>{S.textContent=P}),r.forEach(S=>{const q=S.dataset.articleTocLink===_;S.classList.toggle("is-active",q),S.setAttribute("aria-current",q?"true":"false")})};window.addEventListener("scroll",y,{passive:!0}),window.addEventListener("resize",y),y()}async function Gs(){const e=ct(window.location.pathname,"/");if(dn(is(e)),e.name==="home"){Bs();return}if(e.name==="blog"){Ts();return}if(e.name==="demos"){Ns(await ot());return}if(e.name==="demo"){await ks(e.slug);return}if(e.name==="static-page"){Os(e.page);return}if(e.name==="article"){Ps(e.slug);return}ze()}function kn(){const e=document.querySelector(".header"),n=document.querySelector(".burger-container");let t,a;const s=g=>{if(!(!e||!n)){if(window.clearTimeout(t),window.clearTimeout(a),e.classList.toggle("menu-opened",g),document.body.classList.toggle("menu-opened",g),n.setAttribute("aria-expanded",String(g)),n.setAttribute("aria-label",g?"Close menu":"Open menu"),g){e.classList.remove("menu-closing"),e.classList.add("menu-opening"),t=window.setTimeout(()=>{e.classList.remove("menu-opening")},620);return}e.classList.remove("menu-opening"),e.classList.add("menu-closing"),a=window.setTimeout(()=>{e.classList.remove("menu-closing")},760)}};n==null||n.addEventListener("click",()=>{s(!(e!=null&&e.classList.contains("menu-opened")))}),document.querySelectorAll(".navigation-item-link").forEach(g=>{g.addEventListener("click",()=>{s(!1)})});const r=document.querySelector(".feature-modal"),i=document.querySelector("#feature-modal-title"),o=document.querySelector("#feature-modal-description"),c=document.querySelector("#feature-modal-kicker"),d=document.querySelector("#feature-modal-visual"),u=()=>{r&&(r.hidden=!0,document.body.classList.remove("modal-opened"))};document.querySelectorAll("[data-feature-index]").forEach(g=>{g.addEventListener("click",()=>{const y=Number(g.dataset.featureIndex),m=ut[y];!m||!r||!i||!o||!c||!d||(i.textContent=m.title,o.textContent=fs(m),c.textContent=`Feature 0${y+1}`,d.innerHTML=m.image?`<img src="${X(m.image)}" alt="${I(m.title)}" />`:`<pre><code class="swift-code ${He("swift")}">${Ge(m.code??"","swift")}</code></pre>`,r.hidden=!1,document.body.classList.add("modal-opened"))})}),document.querySelectorAll("[data-modal-close]").forEach(g=>g.addEventListener("click",u)),document.addEventListener("keydown",g=>{g.key==="Escape"&&u()}),qs(),zs(),Ws(),Hs()}function zs(){const e=document.querySelector(".demo-player:not(.demo-player-empty)"),n=e==null?void 0:e.querySelector("[data-demo-fullscreen]");if(!e||!n)return;const t=document,a=e,s=document.fullscreenEnabled||t.webkitFullscreenEnabled||typeof e.requestFullscreen=="function"||typeof a.webkitRequestFullscreen=="function",r=()=>document.fullscreenElement??t.webkitFullscreenElement??null,i=()=>r()===e;let o=!1;const c=()=>{o=!0,e.classList.add("is-viewport-fullscreen"),document.body.classList.add("demo-viewport-fullscreen-open"),m()},d=()=>{o=!1,e.classList.remove("is-viewport-fullscreen"),document.body.classList.remove("demo-viewport-fullscreen-open"),m()},u=async()=>s?typeof e.requestFullscreen=="function"?(await e.requestFullscreen(),!0):typeof a.webkitRequestFullscreen=="function"?(await a.webkitRequestFullscreen(),!0):!1:!1,g=async()=>{try{if(await u())return}catch(w){console.warn("Native fullscreen is unavailable, using viewport fullscreen fallback",w)}c()},y=async()=>{var w;if(o){d();return}if(typeof document.exitFullscreen=="function"){await document.exitFullscreen();return}await((w=t.webkitExitFullscreen)==null?void 0:w.call(t))},m=()=>{const w=i()||o;e.classList.toggle("is-fullscreen",w),n.setAttribute("aria-label",w?"Exit demo fullscreen":"Open demo fullscreen"),n.title=w?"Exit fullscreen":"Open fullscreen"};n.addEventListener("click",async()=>{try{if(i()||o){await y();return}await g()}catch(w){console.error("Failed to toggle demo fullscreen",w)}}),document.addEventListener("fullscreenchange",m),document.addEventListener("webkitfullscreenchange",m),document.addEventListener("keydown",w=>{w.key==="Escape"&&o&&d()}),m()}function Ws(){const e=document.querySelector(".demo-player:not(.demo-player-empty)"),n=e==null?void 0:e.querySelector("iframe");if(!e||!n)return;const t=document.createElement("canvas");t.width=1,t.height=1;const a=t.getContext("2d",{willReadFrequently:!0});if(!a)return;let s=0,r=0,i={red:34,green:211,blue:238};const o=(u,g,y)=>{i={red:Math.round(i.red*.7+u*.3),green:Math.round(i.green*.7+g*.3),blue:Math.round(i.blue*.7+y*.3)},e.style.setProperty("--demo-ambient",`${i.red} ${i.green} ${i.blue}`),e.classList.add("has-ambient-light")},c=u=>{if(u.origin!==window.location.origin)return;const g=u.data;if(!g||typeof g!="object"||g.type!=="ada-demo-ambient"||!Array.isArray(g.color)||g.color.length<3)return;const[y,m,w]=g.color.map(Number);[y,m,w].every(Number.isFinite)&&o(y,m,w)},d=()=>{var u;try{const g=(u=n.contentDocument)==null?void 0:u.querySelector("canvas");if(!g||g.width<=0||g.height<=0){r+=1,s=window.setTimeout(d,r<120?250:1e3);return}const y=Math.max(0,Math.floor(g.width*.5)),m=Math.max(0,Math.floor(g.height*.42));a.clearRect(0,0,1,1),a.drawImage(g,y,m,1,1,0,0,1,1);const[w,_,k,C]=a.getImageData(0,0,1,1).data;C>0&&w+_+k>8&&o(w,_,k),r=0,s=window.setTimeout(d,450)}catch{r+=1,s=window.setTimeout(d,r<12?450:1200)}};n.addEventListener("load",()=>{window.clearTimeout(s),r=0,s=window.setTimeout(d,500)}),window.addEventListener("message",c),s=window.setTimeout(d,500)}function qs(){const e=document.querySelector(".showcase-carousel"),n=Array.from(document.querySelectorAll(".showcase-slide")),t=Array.from(document.querySelectorAll(".showcase-carousel-dot"));if(!e||n.length<2)return;let a=0,s;const r=o=>{a=(o+n.length)%n.length,n.forEach((c,d)=>{const u=d===a;c.classList.toggle("is-active",u),c.setAttribute("aria-hidden",String(!u)),c.querySelectorAll("a").forEach(g=>{g.tabIndex=u?0:-1})}),t.forEach((c,d)=>{c.classList.toggle("is-active",d===a),c.setAttribute("aria-current",d===a?"true":"false")})},i=()=>{window.clearInterval(s),s=window.setInterval(()=>{r(a+1)},5e3)};t.forEach((o,c)=>{o.addEventListener("click",()=>{r(c),i()})}),e.addEventListener("mouseenter",()=>window.clearInterval(s)),e.addEventListener("mouseleave",i),e.addEventListener("focusin",()=>window.clearInterval(s)),e.addEventListener("focusout",i),r(0),i()}Gs().then(()=>{kn(),ws()}).catch(e=>{console.error(e),ze("Page failed to load","Refresh the page or try again in a moment."),kn()});
