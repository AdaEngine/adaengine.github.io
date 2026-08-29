(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function ft(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function xn(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const t=e[n],a=typeof t;(a==="object"||a==="function")&&!Object.isFrozen(t)&&xn(t)}),e}class dn{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Cn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function ge(e,...n){const t=Object.create(null);for(const a in e)t[a]=e[a];return n.forEach(function(a){for(const i in a)t[i]=a[i]}),t}const bt="</span>",un=e=>!!e.scope,yt=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((a,i)=>`${a}${"_".repeat(i+1)}`)].join(" ")}return`${n}${e}`};class wt{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Cn(n)}openNode(n){if(!un(n))return;const t=yt(n.scope,{prefix:this.classPrefix});this.span(t)}closeNode(n){un(n)&&(this.buffer+=bt)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const gn=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class nn{constructor(){this.rootNode=gn(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=gn({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(a=>this._walk(n,a)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{nn._collapse(t)}))}}class Et extends nn{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,t){const a=n.root;t&&(a.scope=`language:${t}`),this.add(a)}toHTML(){return new wt(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Ne(e){return e?typeof e=="string"?e:e.source:null}function Mn(e){return ye("(?=",e,")")}function vt(e){return ye("(?:",e,")*")}function At(e){return ye("(?:",e,")?")}function ye(...e){return e.map(t=>Ne(t)).join("")}function St(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function tn(...e){return"("+(St(e).capture?"":"?:")+e.map(a=>Ne(a)).join("|")+")"}function $n(e){return new RegExp(e.toString()+"|").exec("").length-1}function _t(e,n){const t=e&&e.exec(n);return t&&t.index===0}const Tt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function an(e,{joinWith:n}){let t=0;return e.map(a=>{t+=1;const i=t;let o=Ne(a),r="";for(;o.length>0;){const s=Tt.exec(o);if(!s){r+=o;break}r+=o.substring(0,s.index),o=o.substring(s.index+s[0].length),s[0][0]==="\\"&&s[1]?r+="\\"+String(Number(s[1])+i):(r+=s[0],s[0]==="("&&t++)}return r}).map(a=>`(${a})`).join(n)}const It=/\b\B/,Rn="[a-zA-Z]\\w*",sn="[a-zA-Z_]\\w*",Ln="\\b\\d+(\\.\\d+)?",On="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Dn="\\b(0b[01]+)",kt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Nt=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=ye(n,/.*\b/,e.binary,/\b.*/)),ge({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,a)=>{t.index!==0&&a.ignoreMatch()}},e)},xe={begin:"\\\\[\\s\\S]",relevance:0},xt={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[xe]},Ct={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[xe]},Mt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},He=function(e,n,t={}){const a=ge({scope:"comment",begin:e,end:n,contains:[]},t);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=tn("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:ye(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},$t=He("//","$"),Rt=He("/\\*","\\*/"),Lt=He("#","$"),Ot={scope:"number",begin:Ln,relevance:0},Dt={scope:"number",begin:On,relevance:0},Bt={scope:"number",begin:Dn,relevance:0},Pt={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[xe,{begin:/\[/,end:/\]/,relevance:0,contains:[xe]}]},Ut={scope:"title",begin:Rn,relevance:0},Ft={scope:"title",begin:sn,relevance:0},Ht={begin:"\\.\\s*"+sn,relevance:0},Gt=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var Le=Object.freeze({__proto__:null,APOS_STRING_MODE:xt,BACKSLASH_ESCAPE:xe,BINARY_NUMBER_MODE:Bt,BINARY_NUMBER_RE:Dn,COMMENT:He,C_BLOCK_COMMENT_MODE:Rt,C_LINE_COMMENT_MODE:$t,C_NUMBER_MODE:Dt,C_NUMBER_RE:On,END_SAME_AS_BEGIN:Gt,HASH_COMMENT_MODE:Lt,IDENT_RE:Rn,MATCH_NOTHING_RE:It,METHOD_GUARD:Ht,NUMBER_MODE:Ot,NUMBER_RE:Ln,PHRASAL_WORDS_MODE:Mt,QUOTE_STRING_MODE:Ct,REGEXP_MODE:Pt,RE_STARTERS_RE:kt,SHEBANG:Nt,TITLE_MODE:Ut,UNDERSCORE_IDENT_RE:sn,UNDERSCORE_TITLE_MODE:Ft});function zt(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function Wt(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function qt(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=zt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Vt(e,n){Array.isArray(e.illegal)&&(e.illegal=tn(...e.illegal))}function jt(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Kt(e,n){e.relevance===void 0&&(e.relevance=1)}const Zt=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=t.keywords,e.begin=ye(t.beforeMatch,Mn(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},Yt=["of","and","for","in","not","or","if","then","parent","list","value"],Xt="keyword";function Bn(e,n,t=Xt){const a=Object.create(null);return typeof e=="string"?i(t,e.split(" ")):Array.isArray(e)?i(t,e):Object.keys(e).forEach(function(o){Object.assign(a,Bn(e[o],n,o))}),a;function i(o,r){n&&(r=r.map(s=>s.toLowerCase())),r.forEach(function(s){const c=s.split("|");a[c[0]]=[o,Jt(c[0],c[1])]})}}function Jt(e,n){return n?Number(n):Qt(e)?0:1}function Qt(e){return Yt.includes(e.toLowerCase())}const pn={},be=e=>{console.error(e)},mn=(e,...n)=>{console.log(`WARN: ${e}`,...n)},ve=(e,n)=>{pn[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),pn[`${e}/${n}`]=!0)},Pe=new Error;function Pn(e,n,{key:t}){let a=0;const i=e[t],o={},r={};for(let s=1;s<=n.length;s++)r[s+a]=i[s],o[s+a]=!0,a+=$n(n[s-1]);e[t]=r,e[t]._emit=o,e[t]._multi=!0}function ea(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw be("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Pe;if(typeof e.beginScope!="object"||e.beginScope===null)throw be("beginScope must be object"),Pe;Pn(e,e.begin,{key:"beginScope"}),e.begin=an(e.begin,{joinWith:""})}}function na(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw be("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Pe;if(typeof e.endScope!="object"||e.endScope===null)throw be("endScope must be object"),Pe;Pn(e,e.end,{key:"endScope"}),e.end=an(e.end,{joinWith:""})}}function ta(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function aa(e){ta(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),ea(e),na(e)}function sa(e){function n(r,s){return new RegExp(Ne(r),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(s?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,s]),this.matchAt+=$n(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(c=>c[1]);this.matcherRe=n(an(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(s);if(!c)return null;const l=c.findIndex((g,b)=>b>0&&g!==void 0),d=this.matchIndexes[l];return c.splice(0,l),Object.assign(c,d)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const c=new t;return this.rules.slice(s).forEach(([l,d])=>c.addRule(l,d)),c.compile(),this.multiRegexes[s]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,c){this.rules.push([s,c]),c.type==="begin"&&this.count++}exec(s){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let l=c.exec(s);if(this.resumingScanAtSamePosition()&&!(l&&l.index===this.lastIndex)){const d=this.getMatcher(0);d.lastIndex=this.lastIndex+1,l=d.exec(s)}return l&&(this.regexIndex+=l.position+1,this.regexIndex===this.count&&this.considerAll()),l}}function i(r){const s=new a;return r.contains.forEach(c=>s.addRule(c.begin,{rule:c,type:"begin"})),r.terminatorEnd&&s.addRule(r.terminatorEnd,{type:"end"}),r.illegal&&s.addRule(r.illegal,{type:"illegal"}),s}function o(r,s){const c=r;if(r.isCompiled)return c;[Wt,jt,aa,Zt].forEach(d=>d(r,s)),e.compilerExtensions.forEach(d=>d(r,s)),r.__beforeBegin=null,[qt,Vt,Kt].forEach(d=>d(r,s)),r.isCompiled=!0;let l=null;return typeof r.keywords=="object"&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),l=r.keywords.$pattern,delete r.keywords.$pattern),l=l||/\w+/,r.keywords&&(r.keywords=Bn(r.keywords,e.case_insensitive)),c.keywordPatternRe=n(l,!0),s&&(r.begin||(r.begin=/\B|\b/),c.beginRe=n(c.begin),!r.end&&!r.endsWithParent&&(r.end=/\B|\b/),r.end&&(c.endRe=n(c.end)),c.terminatorEnd=Ne(c.end)||"",r.endsWithParent&&s.terminatorEnd&&(c.terminatorEnd+=(r.end?"|":"")+s.terminatorEnd)),r.illegal&&(c.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(d){return ia(d==="self"?r:d)})),r.contains.forEach(function(d){o(d,c)}),r.starts&&o(r.starts,s),c.matcher=i(c),c}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=ge(e.classNameAliases||{}),o(e)}function Un(e){return e?e.endsWithParent||Un(e.starts):!1}function ia(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return ge(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:Un(e)?ge(e,{starts:e.starts?ge(e.starts):null}):Object.isFrozen(e)?ge(e):e}var ra="11.11.1";class oa extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const Ze=Cn,hn=ge,fn=Symbol("nomatch"),ca=7,Fn=function(e){const n=Object.create(null),t=Object.create(null),a=[];let i=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",r={disableAutodetect:!0,name:"Plain text",contains:[]};let s={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Et};function c(u){return s.noHighlightRe.test(u)}function l(u){let h=u.className+" ";h+=u.parentNode?u.parentNode.className:"";const m=s.languageDetectRe.exec(h);if(m){const A=F(m[1]);return A||(mn(o.replace("{}",m[1])),mn("Falling back to no-highlight mode for this block.",u)),A?m[1]:"no-highlight"}return h.split(/\s+/).find(A=>c(A)||F(A))}function d(u,h,m){let A="",N="";typeof h=="object"?(A=u,m=h.ignoreIllegals,N=h.language):(ve("10.7.0","highlight(lang, code, ...args) has been deprecated."),ve("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),N=u,A=h),m===void 0&&(m=!0);const D={code:A,language:N};Q("before:highlight",D);const U=D.result?D.result:g(D.language,D.code,m);return U.code=D.code,Q("after:highlight",U),U}function g(u,h,m,A){const N=Object.create(null);function D(p,f){return p.keywords[f]}function U(){if(!v.keywords){G.addText(B);return}let p=0;v.keywordPatternRe.lastIndex=0;let f=v.keywordPatternRe.exec(B),I="";for(;f;){I+=B.substring(p,f.index);const C=X.case_insensitive?f[0].toLowerCase():f[0],z=D(v,C);if(z){const[ie,mt]=z;if(G.addText(I),I="",N[C]=(N[C]||0)+1,N[C]<=ca&&(Re+=mt),ie.startsWith("_"))I+=f[0];else{const ht=X.classNameAliases[ie]||ie;K(f[0],ht)}}else I+=f[0];p=v.keywordPatternRe.lastIndex,f=v.keywordPatternRe.exec(B)}I+=B.substring(p),G.addText(I)}function Y(){if(B==="")return;let p=null;if(typeof v.subLanguage=="string"){if(!n[v.subLanguage]){G.addText(B);return}p=g(v.subLanguage,B,!0,$e[v.subLanguage]),$e[v.subLanguage]=p._top}else p=y(B,v.subLanguage.length?v.subLanguage:null);v.relevance>0&&(Re+=p.relevance),G.__addSublanguage(p._emitter,p.language)}function W(){v.subLanguage!=null?Y():U(),B=""}function K(p,f){p!==""&&(G.startScope(f),G.addText(p),G.endScope())}function we(p,f){let I=1;const C=f.length-1;for(;I<=C;){if(!p._emit[I]){I++;continue}const z=X.classNameAliases[p[I]]||p[I],ie=f[I];z?K(ie,z):(B=ie,U(),B=""),I++}}function Ce(p,f){return p.scope&&typeof p.scope=="string"&&G.openNode(X.classNameAliases[p.scope]||p.scope),p.beginScope&&(p.beginScope._wrap?(K(B,X.classNameAliases[p.beginScope._wrap]||p.beginScope._wrap),B=""):p.beginScope._multi&&(we(p.beginScope,f),B="")),v=Object.create(p,{parent:{value:v}}),v}function _e(p,f,I){let C=_t(p.endRe,I);if(C){if(p["on:end"]){const z=new dn(p);p["on:end"](f,z),z.isMatchIgnored&&(C=!1)}if(C){for(;p.endsParent&&p.parent;)p=p.parent;return p}}if(p.endsWithParent)return _e(p.parent,f,I)}function ze(p){return v.matcher.regexIndex===0?(B+=p[0],1):(Ke=!0,0)}function We(p){const f=p[0],I=p.rule,C=new dn(I),z=[I.__beforeBegin,I["on:begin"]];for(const ie of z)if(ie&&(ie(p,C),C.isMatchIgnored))return ze(f);return I.skip?B+=f:(I.excludeBegin&&(B+=f),W(),!I.returnBegin&&!I.excludeBegin&&(B=f)),Ce(I,p),I.returnBegin?0:f.length}function qe(p){const f=p[0],I=h.substring(p.index),C=_e(v,p,I);if(!C)return fn;const z=v;v.endScope&&v.endScope._wrap?(W(),K(f,v.endScope._wrap)):v.endScope&&v.endScope._multi?(W(),we(v.endScope,p)):z.skip?B+=f:(z.returnEnd||z.excludeEnd||(B+=f),W(),z.excludeEnd&&(B=f));do v.scope&&G.closeNode(),!v.skip&&!v.subLanguage&&(Re+=v.relevance),v=v.parent;while(v!==C.parent);return C.starts&&Ce(C.starts,p),z.returnEnd?0:f.length}function Ve(){const p=[];for(let f=v;f!==X;f=f.parent)f.scope&&p.unshift(f.scope);p.forEach(f=>G.openNode(f))}let Ee={};function Me(p,f){const I=f&&f[0];if(B+=p,I==null)return W(),0;if(Ee.type==="begin"&&f.type==="end"&&Ee.index===f.index&&I===""){if(B+=h.slice(f.index,f.index+1),!i){const C=new Error(`0 width match regex (${u})`);throw C.languageName=u,C.badRule=Ee.rule,C}return 1}if(Ee=f,f.type==="begin")return We(f);if(f.type==="illegal"&&!m){const C=new Error('Illegal lexeme "'+I+'" for mode "'+(v.scope||"<unnamed>")+'"');throw C.mode=v,C}else if(f.type==="end"){const C=qe(f);if(C!==fn)return C}if(f.type==="illegal"&&I==="")return B+=`
`,1;if(je>1e5&&je>f.index*3)throw new Error("potential infinite loop, way more iterations than matches");return B+=I,I.length}const X=F(u);if(!X)throw be(o.replace("{}",u)),new Error('Unknown language: "'+u+'"');const $=sa(X);let ue="",v=A||$;const $e={},G=new s.__emitter(s);Ve();let B="",Re=0,fe=0,je=0,Ke=!1;try{if(X.__emitTokens)X.__emitTokens(h,G);else{for(v.matcher.considerAll();;){je++,Ke?Ke=!1:v.matcher.considerAll(),v.matcher.lastIndex=fe;const p=v.matcher.exec(h);if(!p)break;const f=h.substring(fe,p.index),I=Me(f,p);fe=p.index+I}Me(h.substring(fe))}return G.finalize(),ue=G.toHTML(),{language:u,value:ue,relevance:Re,illegal:!1,_emitter:G,_top:v}}catch(p){if(p.message&&p.message.includes("Illegal"))return{language:u,value:Ze(h),illegal:!0,relevance:0,_illegalBy:{message:p.message,index:fe,context:h.slice(fe-100,fe+100),mode:p.mode,resultSoFar:ue},_emitter:G};if(i)return{language:u,value:Ze(h),illegal:!1,relevance:0,errorRaised:p,_emitter:G,_top:v};throw p}}function b(u){const h={value:Ze(u),illegal:!1,relevance:0,_top:r,_emitter:new s.__emitter(s)};return h._emitter.addText(u),h}function y(u,h){h=h||s.languages||Object.keys(n);const m=b(u),A=h.filter(F).filter(j).map(W=>g(W,u,!1));A.unshift(m);const N=A.sort((W,K)=>{if(W.relevance!==K.relevance)return K.relevance-W.relevance;if(W.language&&K.language){if(F(W.language).supersetOf===K.language)return 1;if(F(K.language).supersetOf===W.language)return-1}return 0}),[D,U]=N,Y=D;return Y.secondBest=U,Y}function w(u,h,m){const A=h&&t[h]||m;u.classList.add("hljs"),u.classList.add(`language-${A}`)}function E(u){let h=null;const m=l(u);if(c(m))return;if(Q("before:highlightElement",{el:u,language:m}),u.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",u);return}if(u.children.length>0&&(s.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(u)),s.throwUnescapedHTML))throw new oa("One of your code blocks includes unescaped HTML.",u.innerHTML);h=u;const A=h.textContent,N=m?d(A,{language:m,ignoreIllegals:!0}):y(A);u.innerHTML=N.value,u.dataset.highlighted="yes",w(u,m,N.language),u.result={language:N.language,re:N.relevance,relevance:N.relevance},N.secondBest&&(u.secondBest={language:N.secondBest.language,relevance:N.secondBest.relevance}),Q("after:highlightElement",{el:u,result:N,text:A})}function S(u){s=hn(s,u)}const _=()=>{P(),ve("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function T(){P(),ve("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let x=!1;function P(){function u(){P()}if(document.readyState==="loading"){x||window.addEventListener("DOMContentLoaded",u,!1),x=!0;return}document.querySelectorAll(s.cssSelector).forEach(E)}function M(u,h){let m=null;try{m=h(e)}catch(A){if(be("Language definition for '{}' could not be registered.".replace("{}",u)),i)be(A);else throw A;m=r}m.name||(m.name=u),n[u]=m,m.rawDefinition=h.bind(null,e),m.aliases&&O(m.aliases,{languageName:u})}function L(u){delete n[u];for(const h of Object.keys(t))t[h]===u&&delete t[h]}function Z(){return Object.keys(n)}function F(u){return u=(u||"").toLowerCase(),n[u]||n[t[u]]}function O(u,{languageName:h}){typeof u=="string"&&(u=[u]),u.forEach(m=>{t[m.toLowerCase()]=h})}function j(u){const h=F(u);return h&&!h.disableAutodetect}function me(u){u["before:highlightBlock"]&&!u["before:highlightElement"]&&(u["before:highlightElement"]=h=>{u["before:highlightBlock"](Object.assign({block:h.el},h))}),u["after:highlightBlock"]&&!u["after:highlightElement"]&&(u["after:highlightElement"]=h=>{u["after:highlightBlock"](Object.assign({block:h.el},h))})}function se(u){me(u),a.push(u)}function de(u){const h=a.indexOf(u);h!==-1&&a.splice(h,1)}function Q(u,h){const m=u;a.forEach(function(A){A[m]&&A[m](h)})}function he(u){return ve("10.7.0","highlightBlock will be removed entirely in v12.0"),ve("10.7.0","Please use highlightElement now."),E(u)}Object.assign(e,{highlight:d,highlightAuto:y,highlightAll:P,highlightElement:E,highlightBlock:he,configure:S,initHighlighting:_,initHighlightingOnLoad:T,registerLanguage:M,unregisterLanguage:L,listLanguages:Z,getLanguage:F,registerAliases:O,autoDetection:j,inherit:hn,addPlugin:se,removePlugin:de}),e.debugMode=function(){i=!1},e.safeMode=function(){i=!0},e.versionString=ra,e.regex={concat:ye,lookahead:Mn,either:tn,optional:At,anyNumberOfTimes:vt};for(const u in Le)typeof Le[u]=="object"&&xn(Le[u]);return Object.assign(e,Le),e},Se=Fn({});Se.newInstance=()=>Fn({});var la=Se;Se.HighlightJS=Se;Se.default=Se;const ae=ft(la);function da(e){const n=e.regex,t={},a={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},a]});const i={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},o=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),r={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},s={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,i]};i.contains.push(s);const c={match:/\\"/},l={className:"string",begin:/'/,end:/'/},d={match:/\\'/},g={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]},b=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],y=e.SHEBANG({binary:`(${b.join("|")})`,relevance:10}),w={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},E=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],S=["true","false"],_={match:/(\/[a-z._-]+)+/},T=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],x=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],P=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],M=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:E,literal:S,built_in:[...T,...x,"set","shopt",...P,...M]},contains:[y,e.SHEBANG(),w,g,o,r,_,s,c,l,d,t]}}const bn="[A-Za-z$_][0-9A-Za-z$_]*",ua=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],ga=["true","false","null","undefined","NaN","Infinity"],Hn=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Gn=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],zn=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],pa=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],ma=[].concat(zn,Hn,Gn);function ha(e){const n=e.regex,t=(m,{after:A})=>{const N="</"+m[0].slice(1);return m.input.indexOf(N,A)!==-1},a=bn,i={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(m,A)=>{const N=m[0].length+m.index,D=m.input[N];if(D==="<"||D===","){A.ignoreMatch();return}D===">"&&(t(m,{after:N})||A.ignoreMatch());let U;const Y=m.input.substring(N);if(U=Y.match(/^\s*=/)){A.ignoreMatch();return}if((U=Y.match(/^\s+extends\s+/))&&U.index===0){A.ignoreMatch();return}}},s={$pattern:bn,keyword:ua,literal:ga,built_in:ma,"variable.language":pa},c="[0-9](_?[0-9])*",l=`\\.(${c})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${d})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},b={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},y={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"xml"}},w={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"css"}},E={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"graphql"}},S={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,b]},T={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},x=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,E,S,{match:/\$\d+/},g];b.contains=x.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(x)});const P=[].concat(T,b.contains),M=P.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:["self"].concat(P)}]),L={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:M},Z={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},F={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Hn,...Gn]}},O={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},j={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[L],illegal:/%/},me={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function se(m){return n.concat("(?!",m.join("|"),")")}const de={match:n.concat(/\b/,se([...zn,"super","import"].map(m=>`${m}\\s*\\(`)),a,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},Q={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},he={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},L]},u="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",h={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(u)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[L]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:M,CLASS_REFERENCE:F},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),O,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,E,S,T,{match:/\$\d+/},g,F,{scope:"attr",match:a+n.lookahead(":"),relevance:0},h,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,e.REGEXP_MODE,{className:"function",begin:u,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:M}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:o},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},j,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[L,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},Q,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[L]},de,me,Z,he,{match:/\$[(.]/}]}}function fa(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},a=["true","false","null"],i={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:a},contains:[n,t,e.QUOTE_STRING_MODE,i,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function ba(e){const n=e.regex,t={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},a={begin:"^[-\\*]{3,}",end:"$"},i={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},o={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},r={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},s=/[A-Za-z][A-Za-z0-9+.-]*/,c={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:n.concat(/\[.+?\]\(/,s,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},l={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},d={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},g=e.inherit(l,{contains:[]}),b=e.inherit(d,{contains:[]});l.contains.push(b),d.contains.push(g);let y=[t,c];return[l,d,g,b].forEach(_=>{_.contains=_.contains.concat(y)}),y=y.concat(l,d),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:y},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:y}]}]},t,o,l,d,{className:"quote",begin:"^>\\s+",contains:y,end:"$"},i,a,c,r,{scope:"literal",match:/&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/}]}}function Wn(e){return e?typeof e=="string"?e:e.source:null}function Te(e){return R("(?=",e,")")}function R(...e){return e.map(t=>Wn(t)).join("")}function ya(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function q(...e){return"("+(ya(e).capture?"":"?:")+e.map(a=>Wn(a)).join("|")+")"}const rn=e=>R(/\b/,e,/\w$/.test(e)?/\b/:/\B/),wa=["Protocol","Type"].map(rn),yn=["init","self"].map(rn),Ea=["Any","Self"],Ye=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","package","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],wn=["false","nil","true"],va=["assignment","associativity","higherThan","left","lowerThan","none","right"],Aa=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],En=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],qn=q(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),Vn=q(qn,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),Xe=R(qn,Vn,"*"),jn=q(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),Ue=q(jn,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),ee=R(jn,Ue,"*"),Oe=R(/[A-Z]/,Ue,"*"),Sa=["attached","autoclosure",R(/convention\(/,q("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",R(/objc\(/,ee,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],_a=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function Ta(e){const n={match:/\s+/,relevance:0},t=e.COMMENT("/\\*","\\*/",{contains:["self"]}),a=[e.C_LINE_COMMENT_MODE,t],i={match:[/\./,q(...wa,...yn)],className:{2:"keyword"}},o={match:R(/\./,q(...Ye)),relevance:0},r=Ye.filter($=>typeof $=="string").concat(["_|0"]),s=Ye.filter($=>typeof $!="string").concat(Ea).map(rn),c={variants:[{className:"keyword",match:q(...s,...yn)}]},l={$pattern:q(/\b\w+/,/#\w+/),keyword:r.concat(Aa),literal:wn},d=[i,o,c],g={match:R(/\./,q(...En)),relevance:0},b={className:"built_in",match:R(/\b/,q(...En),/(?=\()/)},y=[g,b],w={match:/->/,relevance:0},E={className:"operator",relevance:0,variants:[{match:Xe},{match:`\\.(\\.|${Vn})+`}]},S=[w,E],_="([0-9]_*)+",T="([0-9a-fA-F]_*)+",x={className:"number",relevance:0,variants:[{match:`\\b(${_})(\\.(${_}))?([eE][+-]?(${_}))?\\b`},{match:`\\b0x(${T})(\\.(${T}))?([pP][+-]?(${_}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},P=($="")=>({className:"subst",variants:[{match:R(/\\/,$,/[0\\tnr"']/)},{match:R(/\\/,$,/u\{[0-9a-fA-F]{1,8}\}/)}]}),M=($="")=>({className:"subst",match:R(/\\/,$,/[\t ]*(?:[\r\n]|\r\n)/)}),L=($="")=>({className:"subst",label:"interpol",begin:R(/\\/,$,/\(/),end:/\)/}),Z=($="")=>({begin:R($,/"""/),end:R(/"""/,$),contains:[P($),M($),L($)]}),F=($="")=>({begin:R($,/"/),end:R(/"/,$),contains:[P($),L($)]}),O={className:"string",variants:[Z(),Z("#"),Z("##"),Z("###"),F(),F("#"),F("##"),F("###")]},j=[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}],me={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:j},se=$=>{const ue=R($,/\//),v=R(/\//,$);return{begin:ue,end:v,contains:[...j,{scope:"comment",begin:`#(?!.*${v})`,end:/$/}]}},de={scope:"regexp",variants:[se("###"),se("##"),se("#"),me]},Q={match:R(/`/,ee,/`/)},he={className:"variable",match:/\$\d+/},u={className:"variable",match:`\\$${Ue}+`},h=[Q,he,u],m={match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:_a,contains:[...S,x,O]}]}},A={scope:"keyword",match:R(/@/,q(...Sa),Te(q(/\(/,/\s+/)))},N={scope:"meta",match:R(/@/,ee)},D=[m,A,N],U={match:Te(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:R(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,Ue,"+")},{className:"type",match:Oe,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:R(/\s+&\s+/,Te(Oe)),relevance:0}]},Y={begin:/</,end:/>/,keywords:l,contains:[...a,...d,...D,w,U]};U.contains.push(Y);const W={match:R(ee,/\s*:/),keywords:"_|0",relevance:0},K={begin:/\(/,end:/\)/,relevance:0,keywords:l,contains:["self",W,...a,de,...d,...y,...S,x,O,...h,...D,U]},we={begin:/</,end:/>/,keywords:"repeat each",contains:[...a,U]},Ce={begin:q(Te(R(ee,/\s*:/)),Te(R(ee,/\s+/,ee,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:ee}]},_e={begin:/\(/,end:/\)/,keywords:l,contains:[Ce,...a,...d,...S,x,O,...D,U,K],endsParent:!0,illegal:/["']/},ze={match:[/(func|macro)/,/\s+/,q(Q.match,ee,Xe)],className:{1:"keyword",3:"title.function"},contains:[we,_e,n],illegal:[/\[/,/%/]},We={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[we,_e,n],illegal:/\[|%/},qe={match:[/operator/,/\s+/,Xe],className:{1:"keyword",3:"title"}},Ve={begin:[/precedencegroup/,/\s+/,Oe],className:{1:"keyword",3:"title"},contains:[U],keywords:[...va,...wn],end:/}/},Ee={match:[/class\b/,/\s+/,/func\b/,/\s+/,/\b[A-Za-z_][A-Za-z0-9_]*\b/],scope:{1:"keyword",3:"keyword",5:"title.function"}},Me={match:[/class\b/,/\s+/,/var\b/],scope:{1:"keyword",3:"keyword"}},X={begin:[/(struct|protocol|class|extension|enum|actor)/,/\s+/,ee,/\s*/],beginScope:{1:"keyword",3:"title.class"},keywords:l,contains:[we,...d,{begin:/:/,end:/\{/,keywords:l,contains:[{scope:"title.class.inherited",match:Oe},...d],relevance:0}]};for(const $ of O.variants){const ue=$.contains.find($e=>$e.label==="interpol");ue.keywords=l;const v=[...d,...y,...S,x,O,...h];ue.contains=[...v,{begin:/\(/,end:/\)/,contains:["self",...v]}]}return{name:"Swift",keywords:l,contains:[...a,ze,We,Ee,Me,X,qe,Ve,{beginKeywords:"import",end:/$/,contains:[...a],relevance:0},de,...d,...y,...S,x,O,...h,...D,U,K]}}const Fe="[A-Za-z$_][0-9A-Za-z$_]*",Kn=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Zn=["true","false","null","undefined","NaN","Infinity"],Yn=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Xn=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Jn=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Qn=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],et=[].concat(Jn,Yn,Xn);function Ia(e){const n=e.regex,t=(m,{after:A})=>{const N="</"+m[0].slice(1);return m.input.indexOf(N,A)!==-1},a=Fe,i={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(m,A)=>{const N=m[0].length+m.index,D=m.input[N];if(D==="<"||D===","){A.ignoreMatch();return}D===">"&&(t(m,{after:N})||A.ignoreMatch());let U;const Y=m.input.substring(N);if(U=Y.match(/^\s*=/)){A.ignoreMatch();return}if((U=Y.match(/^\s+extends\s+/))&&U.index===0){A.ignoreMatch();return}}},s={$pattern:Fe,keyword:Kn,literal:Zn,built_in:et,"variable.language":Qn},c="[0-9](_?[0-9])*",l=`\\.(${c})`,d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${d})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},b={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},y={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"xml"}},w={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"css"}},E={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"graphql"}},S={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,b]},T={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},x=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,E,S,{match:/\$\d+/},g];b.contains=x.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(x)});const P=[].concat(T,b.contains),M=P.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:["self"].concat(P)}]),L={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:M},Z={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},F={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Yn,...Xn]}},O={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},j={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[L],illegal:/%/},me={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function se(m){return n.concat("(?!",m.join("|"),")")}const de={match:n.concat(/\b/,se([...Jn,"super","import"].map(m=>`${m}\\s*\\(`)),a,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},Q={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},he={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},L]},u="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",h={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(u)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[L]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:M,CLASS_REFERENCE:F},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),O,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,E,S,T,{match:/\$\d+/},g,F,{scope:"attr",match:a+n.lookahead(":"),relevance:0},h,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,e.REGEXP_MODE,{className:"function",begin:u,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:M}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:o},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},j,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[L,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},Q,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[L]},de,me,Z,he,{match:/\$[(.]/}]}}function ka(e){const n=e.regex,t=Ia(e),a=Fe,i=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],o={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},r={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:i},contains:[t.exports.CLASS_REFERENCE]},s={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},c=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],l={$pattern:Fe,keyword:Kn.concat(c),literal:Zn,built_in:et.concat(i),"variable.language":Qn},d={className:"meta",begin:"@"+a},g=(E,S,_)=>{const T=E.contains.findIndex(x=>x.label===S);if(T===-1)throw new Error("can not find mode to replace");E.contains.splice(T,1,_)};Object.assign(t.keywords,l),t.exports.PARAMS_CONTAINS.push(d);const b=t.contains.find(E=>E.scope==="attr"),y=Object.assign({},b,{match:n.concat(a,n.lookahead(/\s*\?:/))});t.exports.PARAMS_CONTAINS.push([t.exports.CLASS_REFERENCE,b,y]),t.contains=t.contains.concat([d,o,r,y]),g(t,"shebang",e.SHEBANG()),g(t,"use_strict",s);const w=t.contains.find(E=>E.label==="func.def");return w.relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),t}function Na(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a=/[\p{L}0-9._:-]+/u,i={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},o={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},r=e.inherit(o,{begin:/\(/,end:/\)/}),s=e.inherit(e.APOS_STRING_MODE,{className:"string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:a,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[o,c,s,r,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[o,r,c,s]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},i,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:l}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function xa(e){const n="true false yes no null",t="[\\w#;/?:@&=+$,.~*'()[\\]]+",a={className:"attr",variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},i={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},o={className:"string",relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:"char.escape",relevance:0}]},r={className:"string",relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,i]},s=e.inherit(r,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),b={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},y={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},w={begin:/\{/,end:/\}/,contains:[y],illegal:"\\n",relevance:0},E={begin:"\\[",end:"\\]",contains:[y],illegal:"\\n",relevance:0},S=[a,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+t},{className:"type",begin:"!<"+t+">"},{className:"type",begin:"!"+t},{className:"type",begin:"!!"+t},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},b,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},w,E,o,r],_=[...S];return _.pop(),_.push(s),y.contains=_,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:S}}ae.registerLanguage("bash",da);ae.registerLanguage("javascript",ha);ae.registerLanguage("json",fa);ae.registerLanguage("markdown",ba);ae.registerLanguage("swift",e=>{const n=Ta(e);return n.contains=[{scope:"property",begin:/\.[A-Za-z_]\w*/},...n.contains??[]],n});ae.registerLanguage("typescript",ka);ae.registerLanguage("xml",Na);ae.registerLanguage("yaml",xa);const Ca={html:"xml",js:"javascript",md:"markdown",sh:"bash",shell:"bash",ts:"typescript",txt:"plaintext",yml:"yaml"};function nt(e){const n=e.trim().toLowerCase();return Ca[n]??n}function tt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function at(e){const n=nt(e);return n?`language-${tt(n)}`:"language-plaintext"}function st(e,n){const t=nt(n);return!t||t==="plaintext"||!ae.getLanguage(t)?tt(e):ae.highlight(e,{language:t,ignoreIllegals:!0}).value}function Ma(e,n){const t=e.replace(/\r\n?/g,`
`).split(`
`);return t.length>1&&t[t.length-1]===""&&t.pop(),t.map((a,i)=>`<span class="code-line"><span class="code-line-number" aria-hidden="true">${i+1}</span><span class="code-line-content">${st(a,n)}</span></span>`).join("")}const $a=`---
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
`,Ra=[{name:"Vladislav Prusakov",description:"AdaEngine Founder, iOS Engineer",username:"SpectralDragon",avatar:"authors/spectraldragon.jpg",socials:[{username:"SpectralDragon",social:"github"},{username:"SpectralDragon_",social:"twitter"}]}],La={},Oa=Ra,Da=La?Object.assign({"./content/articles/introducing-adaengine-0-1-0.md":$a}):{};function Ba(e){const n=e.replace(/\r\n/g,`
`);if(!n.startsWith(`---
`))return{frontmatter:{},body:n.trim()};const t=n.indexOf(`
---
`,4);if(t===-1)return{frontmatter:{},body:n.trim()};const a=n.slice(4,t),i=n.slice(t+5).trim(),o={};let r=null;for(const s of a.split(`
`)){const c=s.trim();if(!c){r=null;continue}if(c.startsWith("- ")&&r){const b=o[r],y=vn(c.slice(2).trim()),w=Array.isArray(b)?b:[];w.push(y),o[r]=w;continue}const l=s.indexOf(":");if(l===-1){r=null;continue}const d=s.slice(0,l).trim(),g=s.slice(l+1).trim();if(!g){o[d]=[],r=d;continue}o[d]=vn(g),r=null}return{frontmatter:o,body:i}}function vn(e){return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1).split(",").map(n=>n.trim().replace(/^['"]|['"]$/g,"")).filter(Boolean):e==="true"?!0:e==="false"?!1:e.replace(/^['"]|['"]$/g,"")}function te(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Pa(e){return/^(https?:|data:|blob:|\/)/.test(e)?e:`${"/".endsWith("/")?"/":"//"}${e.replace(/^\/+/,"")}`}function it(e){return/^https?:\/\//.test(e)}function Je(e){return e.trim().replace(/^@/,"").toLowerCase()}function Ua(e){var t;if(typeof e.url=="string")return e.url;if(typeof e.profileUrl=="string")return e.profileUrl;const n=(t=e.socials)==null?void 0:t.find(a=>a.social==="github");if(typeof(n==null?void 0:n.url)=="string")return n.url;if(typeof(n==null?void 0:n.username)=="string")return`https://github.com/${n.username.replace(/^@/,"")}`;if(typeof e.username=="string")return`https://github.com/${e.username.replace(/^@/,"")}`}function Fa(e,n){if(typeof e!="string"||!e.trim())throw new Error(`Invalid article author in ${n}`);const t=Je(e),a=Oa.find(i=>Je(i.username??i.name)===t||Je(i.name)===t);return a?{name:a.name,url:Ua(a),avatar:typeof a.avatar=="string"?a.avatar:void 0}:it(e)?{name:e,url:e}:{name:e}}function Ha(e,n){if(!/^(https?:\/\/|\/|\.\/|\.\.\/|[A-Za-z0-9/_-])/.test(n))return Ae(e);const t=te(n),a=it(n)?' target="_blank" rel="noreferrer"':"";return`<a href="${t}"${a}>${Ae(e)}</a>`}function Ae(e){return te(e).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>")}function Ga(e,n){let t=0;for(let a=n;a<e.length;a+=1){const i=e[a];if(i==="("){t+=1;continue}if(i===")"){if(t===0)return a;t-=1}}return-1}function re(e){let n="",t=0;for(;t<e.length;){const a=e.indexOf("[",t);if(a===-1){n+=Ae(e.slice(t));break}const i=e.indexOf("]",a+1);if(i===-1||e[i+1]!=="("){n+=Ae(e.slice(t,a+1)),t=a+1;continue}const o=i+2,r=Ga(e,o);if(r===-1){n+=Ae(e.slice(t,a+1)),t=a+1;continue}n+=Ae(e.slice(t,a)),n+=Ha(e.slice(a+1,i),e.slice(o,r)),t=r+1}return n}function za(e){const n=e.toLowerCase();return{js:"JavaScript",javascript:"JavaScript",json:"JSON",md:"Markdown",markdown:"Markdown",sh:"Shell",shell:"Shell",swift:"Swift",ts:"TypeScript",typescript:"TypeScript",yaml:"YAML",yml:"YAML"}[n]??(e?e[0].toUpperCase()+e.slice(1):"Code")}function Wa(e){var i;const n=e.match(/(?:^|\s)(?:title|filename)=["']([^"']+)["']/),t=((i=e.split(/\s+/)[0])==null?void 0:i.replace(/[^\w#+-]/g,""))??"",a=(n==null?void 0:n[1])??e.replace(t,"").trim().replace(/^["']|["']$/g,"");return{language:t,title:a}}function qa(e,n,t){const a=za(n);return`
    <figure class="article-code-block">
      <figcaption>
        <span>${te(t)}</span>
        <span>${te(a)}</span>
      </figcaption>
      <pre><code class="${at(n)}">${st(e,n)}</code></pre>
    </figure>
  `}function Va(e){const n=e.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/),t=e.match(/^::video\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/),a=n??t;if(!a)return null;const[,i,o,r]=a,s=Pa(o),c=r||i,l=!!t||/\.(mp4|webm|ogg|mov)$/i.test(o),d=l?`<video controls playsinline preload="metadata" src="${te(s)}">${te(i)}</video>`:`<img src="${te(s)}" alt="${te(i)}" loading="lazy" role="button" tabindex="0" aria-label="Open image fullscreen" data-article-lightbox-image />`;return`
    <figure class="article-media ${l?"article-media-video":"article-media-image"}">
      ${d}
      ${c?`<figcaption>${re(c)}</figcaption>`:""}
    </figure>
  `}function ja(e){const n=[];let t=!1;const a=()=>{t&&(n.push("</ul>"),t=!1)};for(const i of e){const o=i.trim();if(!o){a();continue}if(o.startsWith("- ")){t||(n.push("<ul>"),t=!0),n.push(`<li>${re(o.slice(2))}</li>`);continue}a(),n.push(`<p>${re(o)}</p>`)}return a(),n.join(`
`)}function Ka(e,n,t){const a=["note","tip","warning","danger","info"].includes(e)?e:"note";return`
    <aside class="article-callout article-callout-${a}">
      <span class="article-callout-icon" aria-hidden="true">!</span>
      <div>
        <p class="article-callout-title">${re(n||{danger:"Important",info:"Info",note:"Note",tip:"Tip",warning:"Warning"}[a])}</p>
        ${ja(t)}
      </div>
    </aside>
  `}function An(e,n){const t=e.toLowerCase().replace(/`([^`]+)`/g,"$1").replace(/&[a-z]+;/gi,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"section",a=n.get(t)??0;return n.set(t,a+1),a===0?t:`${t}-${a+1}`}function Za(e){const n=e.split(`
`),t=[],a=[],i=new Map;let o=!1,r=!1,s="",c="",l=[],d=!1,g="note",b="",y=[];const w=()=>{o&&(t.push("</ul>"),o=!1)},E=()=>{r&&(t.push(qa(l.join(`
`),s,c)),r=!1,s="",c="",l=[])},S=()=>{d&&(t.push(Ka(g,b,y)),d=!1,g="note",b="",y=[])};for(const _ of n){if(_.startsWith("```")){if(w(),S(),r)E();else{const M=Wa(_.slice(3).trim());s=M.language,c=M.title,r=!0}continue}if(r){l.push(_);continue}if(_.trim()===":::"){w(),S();continue}if(d){y.push(_);continue}const T=_.trim();if(!T){w();continue}if(T.startsWith("- ")){o||(t.push("<ul>"),o=!0),t.push(`<li>${re(T.slice(2))}</li>`);continue}w();const x=T.match(/^:::(note|tip|warning|danger|info)(?:\s+(.+))?$/i);if(x){g=x[1].toLowerCase(),b=x[2]??"",y=[],d=!0;continue}const P=Va(T);if(P){t.push(P);continue}if(T.startsWith("### ")){const M=T.slice(4),L=An(M,i);a.push({id:L,title:M,level:3}),t.push(`<h3 id="${te(L)}">${re(M)}</h3>`);continue}if(T.startsWith("## ")){const M=T.slice(3),L=An(M,i);a.push({id:L,title:M,level:2}),t.push(`<h2 id="${te(L)}">${re(M)}</h2>`);continue}if(T.startsWith("# ")){t.push(`<h1>${re(T.slice(2))}</h1>`);continue}t.push(`<p>${re(T)}</p>`)}return w(),E(),S(),{html:t.join(`
`),toc:a}}function rt(e){return e.replace(/^#.*$/gm,"").replace(/```[\s\S]*?```/g,"").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/[*`_>#-]/g,"").replace(/\s+/g," ").trim()}function Ya(e){return rt(e).slice(0,180)}function Xa(e){const n=rt(e).split(" ").filter(Boolean).length;return Math.max(1,Math.ceil(n/180))}function Ja(e,n){const t=e.title,a=e.slug,i=e.description,o=e.date,r=e.author,s=e.tags,c=e.image,l=e.published,d=e.draft,g=e.featured;if(typeof t!="string"||typeof a!="string"||typeof i!="string"||typeof o!="string")throw new Error(`Invalid article frontmatter in ${n}`);return{title:t,slug:a,description:i,date:o,author:Fa(r,n),tags:Array.isArray(s)?s.filter(b=>typeof b=="string"):[],image:typeof c=="string"?c:void 0,published:typeof l=="boolean"?l:!0,draft:typeof d=="boolean"?d:!1,featured:typeof g=="boolean"?g:!1}}const pe=Object.entries(Da).map(([e,n])=>{const{frontmatter:t,body:a}=Ba(n),i=Ja(t,e),o=Za(a);return{...i,excerpt:Ya(a),html:o.html,readingTime:Xa(a),toc:o.toc}}).filter(e=>e.published&&!e.draft).sort((e,n)=>new Date(n.date).getTime()-new Date(e.date).getTime());pe.filter(e=>e.featured);function Qa(e){return pe.find(n=>n.slug===e)}const Qe={schemaVersion:1,generatedAt:"",repository:"AdaEngine/AdaEngine",commit:null,demos:[]};let Sn=null;const en=new Map;function ot(e){return/^(https?:|data:|blob:|\/)/.test(e)?e:`${"/".endsWith("/")?"/":"//"}${e.replace(/^\/+/,"")}`}async function ct(){return Sn??(Sn=fetch(ot("demos/manifest.json"),{headers:{Accept:"application/json"}}).then(e=>e.ok?e.json():Qe).then(e=>({...Qe,...e,demos:[...e.demos??[]].sort((n,t)=>n.tag.localeCompare(t.tag)||n.title.localeCompare(t.title))})).catch(()=>Qe)),Sn}async function es(e){const n=ot(e.source);return en.set(n,en.get(n)??fetch(n).then(t=>{if(!t.ok)throw new Error(`Failed to load ${e.source}`);return t.text()}).catch(()=>"")),en.get(n)??""}function ns(e,n){return e.demos.find(t=>t.slug===n)}function ts(e){const n=new Map;for(const t of e){const a=n.get(t.tag)??{tag:t.tag,title:t.tagTitle,demos:[]};a.demos.push(t),n.set(t.tag,a)}return[...n.values()]}function lt(e){const n=e.trim().replace(/\/$/,"");return!n||n==="."||n==="/"?"":n.startsWith("/")?n:`/${n}`}function as(e,n){const t=lt(n);let a=e||"/";return a.startsWith("/")||(a=`/${a}`),t&&(a===t||a.startsWith(`${t}/`))&&(a=a.slice(t.length)||"/"),a=a.replace(/\/$/,"")||"/",a.startsWith("/")?a:`/${a}`}function ss(e,n){const t=lt(n),a=e.startsWith("/")?e:`/${e}`;return t?`${t}${a==="/"?"/":a}`:a}const is=["learn","community","donate"];function dt(e,n){const t=as(e,n);if(t==="/")return{name:"home"};if(t==="/blog")return{name:"blog"};if(t==="/demos")return{name:"demos"};const a=t.match(/^\/demos\/([^/]+)$/);if(a)return{name:"demo",slug:decodeURIComponent(a[1])};const i=is.find(r=>t===`/${r}`);if(i)return{name:"static-page",page:i};const o=t.match(/^\/articles\/([^/]+)$/);return o?{name:"article",slug:decodeURIComponent(o[1])}:{name:"not-found",path:t}}const ke="https://adaengine.org",Ie="AdaEngine",ne=`${ke}/images/main/tilemap.png`,rs={learn:{title:"Learn AdaEngine - Swift Game Engine Tutorials and Examples",description:"Learn AdaEngine with Swift game development guides, ECS fundamentals, rendering notes, physics examples, and links to source code.",path:"/learn",image:ne,type:"website"},community:{title:"AdaEngine Community - Swift Game Development Contributors",description:"Join the AdaEngine community, follow development, discuss Swift game engine ideas, and contribute to the open-source project.",path:"/community",image:ne,type:"website"},donate:{title:"Support AdaEngine - Open-Source Swift Game Engine",description:"Support AdaEngine development through donations, code contributions, examples, bug reports, and documentation improvements.",path:"/donate",image:ne,type:"website"}};function on(e){if(/^https?:\/\//.test(e))return e;const n=e.startsWith("/")?e:`/${e}`;return`${ke}${n==="/"?"/":n.replace(/\/$/,"")}`}function os(e){return e.name==="home"?{title:"AdaEngine - Open-Source Swift Game Engine",description:"AdaEngine is an open-source game engine for Swift developers, with ECS, 2D and 3D rendering, physics, UI, editor tooling, and WebAssembly demos.",path:"/",image:ne,type:"website"}:e.name==="blog"?{title:"AdaEngine News - Swift Game Engine Updates",description:"Read AdaEngine updates, release notes, engineering deep dives, and Swift game development articles from the project team.",path:"/blog",image:ne,type:"website"}:e.name==="demos"?{title:"AdaEngine Demos - Swift WebAssembly Game Examples",description:"Explore AdaEngine WebAssembly demos built from Swift source files, including 2D rendering, UI, physics, and scene examples.",path:"/demos",image:ne,type:"website"}:e.name==="static-page"?rs[e.page]:e.name==="demo"?{title:"AdaEngine Demo - Swift WebAssembly Example",description:"This AdaEngine demo page lists a Swift WebAssembly example when the demo is available.",path:`/demos/${e.slug}`,image:ne,type:"website",robots:"noindex, follow"}:e.name==="article"?{title:"AdaEngine Article",description:"This AdaEngine article page is available when the requested article has been published.",path:`/articles/${e.slug}`,image:ne,type:"article",robots:"noindex, follow"}:{title:"Page Not Found - AdaEngine",description:"This AdaEngine page could not be found. Return to the open-source Swift game engine homepage.",path:e.name==="not-found"?e.path:"/",image:ne,type:"website",robots:"noindex, follow"}}function cs(e){return{title:`${e.title} - AdaEngine News`,description:e.description,path:`/articles/${e.slug}`,image:on(e.image??"images/main/tilemap.png"),type:"article"}}function ls(e){return{title:`${e.title} - AdaEngine WebAssembly Demo`,description:`${e.description} View the Swift source and run the WebAssembly build for this AdaEngine demo.`,path:`/demos/${e.slug}`,image:ne,type:"website"}}function ds(e){const n=on(e.path),t={"@context":"https://schema.org","@type":"WebSite",name:Ie,url:ke,description:"AdaEngine is an open-source Swift game engine for 2D and 3D games, ECS architecture, rendering, physics, UI, and demos."};return e.path==="/"?[t,{"@context":"https://schema.org","@type":"SoftwareSourceCode",name:Ie,codeRepository:"https://github.com/AdaEngine/AdaEngine",programmingLanguage:"Swift",license:"https://github.com/AdaEngine/AdaEngine/blob/main/LICENSE",url:n,description:e.description}]:e.type==="article"?[t,{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,image:e.image,mainEntityOfPage:n,publisher:{"@type":"Organization",name:Ie,url:ke}}]:[t,{"@context":"https://schema.org","@type":"WebPage",name:e.title,description:e.description,url:n,isPartOf:{"@type":"WebSite",name:Ie,url:ke}}]}const oe=document.querySelector("#app")??us(),De="/";function us(){throw new Error("Root app container #app was not found")}const gs="AdaEngine",ut="images/main/tilemap.png",_n=["images/main/tilemap.png","images/main/space_invaders.jpeg","images/main/duck_hunt.png"],gt="AdaEngine/AdaEngine",Tn=[{title:"AdaEditor",eyebrow:"Editor",description:"A native scene editor and Swift-first workspace for building AdaEngine projects.",action:"Open AdaEditor",href:"https://github.com/AdaEngine/AdaEngine/tree/main/Editor",image:"images/main/ada-editor.png"},{title:"Sloppy Client",eyebrow:"Client",description:"A focused desktop client for project-oriented AI agent sessions and day-to-day work.",action:"Open Sloppy Client",href:"https://github.com/TeamSloppy/Sloppy/tree/main/Apps/Client",image:"images/main/sloppy-client.png"}],ps={learn:{title:"Learn AdaEngine",lead:"Master game development in Swift. From your first sprite to advanced Metal rendering techniques.",sections:[{title:"Documentation",body:"Read guides, API notes and examples for the engine core, ECS, renderer, physics and UI systems.",links:[{label:"Open documentation",href:"https://docs.adaengine.org/"}]},{title:"Examples",body:"Explore sample projects such as tilemaps, arcade games and Swift-first game prototypes.",links:[{label:"Browse examples",href:"https://github.com/AdaEngine/AdaEngine/tree/main/Examples"}]},{title:"Features",body:"Return to the home page feature overview for a quick summary of what AdaEngine can do.",links:[{label:"View features",href:`${H("/")}#features`}]}]}},ms=[{title:"Getting Started",cards:[{title:"Get Started",body:"Install the engine and create your first window in under 5 minutes.",href:"https://docs.adaengine.org/tutorials/adaengine",icon:"book"},{title:"ECS",body:"Understand the Entity-Component-System architecture that powers AdaEngine.",href:"https://docs.adaengine.org/documentation/adaecs/",icon:"play"},{title:"2D Physics Tutorial",body:"Add rigid bodies, collision shapes, and handle physics callbacks.",href:"https://docs.adaengine.org/documentation/adaphysics/",icon:"layout"}]},{title:"API Reference & Documentation",cards:[{title:"Core Framework",body:"Math, Collections, and basic Engine systems.",href:"https://docs.adaengine.org/documentation/adaengine/"},{title:"Rendering Pipeline",body:"Materials, Shaders, Render Graphs, and Metal integration.",href:"https://docs.adaengine.org/documentation/adarender/"},{title:"Audio System",body:"Spatial audio, sound effects, and music streaming.",href:"https://docs.adaengine.org/documentation/adaaudio/"}]}],hs=[{title:"GitHub",subtitle:"Contribute to source code",href:"https://github.com/AdaEngine/AdaEngine",icon:"images/socials/github.svg"},{title:"Discord",subtitle:"Live chat & support",href:"https://discord.gg/JkEPE7nwDu",icon:"images/socials/discord.svg"},{title:"Reddit",subtitle:"r/AdaEngine discussions",href:"https://www.reddit.com/r/AdaEngine/",icon:"images/socials/reddit.svg"},{title:"Telegram",subtitle:"Announcements channel",href:"https://t.me/adaengine",iconClass:"community-link-icon-telegram",iconMarkup:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M42.2 8.7 35.8 39c-.5 2.1-1.8 2.6-3.6 1.6l-9.9-7.3-4.8 4.6c-.5.5-1 .9-2 .9l.7-10.1L34.6 12c.8-.7-.2-1.1-1.2-.4L10.6 25.9.8 22.8c-2.1-.7-2.2-2.1.4-3.1L39.5 4.9c1.8-.7 3.4.4 2.7 3.8Z"/></svg>'},{title:"X (Twitter)",subtitle:"Follow @ada_engine",href:"https://x.com/ada_engine",iconClass:"community-link-icon-x",iconMarkup:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M28.4 20.6 43.1 4h-3.5L26.9 18.4 16.7 4H5l15.5 21.9L5 43.4h3.5L22 28.1l10.8 15.3h11.7L28.4 20.6Zm-4.8 5.4-1.6-2.2L9.6 6.5H15l10 14 1.6 2.2 13 18.2h-5.4L23.6 26Z"/></svg>'}],fs=[{title:"Boosty",subtitle:"Monthly Sponsorship",body:"Become a backer on Boosty to get early access to updates, exclusive tutorials, and your name in the engine credits.",href:"https://boosty.to/adaengine",action:"Support on Boosty",icon:"images/icons/ic_boosty.svg",tone:"boosty"},{title:"DonationAlerts",subtitle:"One-time Donation",body:"Prefer to make a one-time contribution? You can support us via DonationAlerts with various payment methods.",href:"https://www.donationalerts.com/r/adaengine",action:"Donate via DA",icon:"images/donation_alerts_logo.svg",tone:"donation-alerts"}],Be=[{title:"Data Driven",description:"AdaEngine build around custom Entity Component System. Simple to use, fast and cache-friendly for your game architecture.",details:"AdaEngine is built around a custom, data-oriented Entity Component System inspired by modern Swift APIs. Components keep game state small and explicit, while systems operate through typed queries, resources, schedules and macros such as @Component and @System. This makes gameplay code modular, cache-friendly and easier to scale from a tiny prototype to a full scene with input, animation, physics and rendering working together.",code:`@Component
struct Player: Entity { }

struct PlayerSystem: System {
    func update(context: UpdateSceneContext) { }
}`,gif:"images/features/data-driven.gif"},{title:"2D Renderer",description:"Supports real-time 2D rendering for your games and apps. Write custom shaders, materials and render pipelines.",details:"AdaEngine ships with a high-level 2D rendering stack for sprites, text, tilemaps, cameras and custom materials. The demos cover sprite animation, transparency, lighting, text rendering, WGSL experiments and stress scenes, while the renderer still leaves room for lower-level control when you need custom shaders or pipeline work. It is designed for Swift-first game code where drawing a scene should feel direct, but not boxed in.",image:"images/icons/ic_duck.png",gif:"images/features/2d-renderer.gif"},{title:"2D Physics",description:"AdaEngine supports Box2D v3 physics with parallel calculations, lightweight memory usage and fast simulation.",details:"The Physics2D plugin integrates Box2D with AdaEngine entities through components such as PhysicsBody2DComponent and Collision2DComponent. Simulation runs on the fixed-update schedule, then syncs transforms back into the scene so gameplay systems can react through the same ECS flow as the rest of the engine. It includes collision events, debug drawing support and world resources for direct access when a game needs deeper physics control.",image:"images/icons/ic_box2d.svg",gif:"images/features/2d-physics.gif"},{title:"Render Graphs",description:"Construct your own render pipeline using powerful render graphs.",details:"Rendering is organized around RenderGraph resources, nodes, slots, subgraphs and an executor that runs the graph each frame. Core 2D and 3D pipelines are assembled as graphs, and cameras can point at specific render subgraphs for flexible composition. Diagnostics can snapshot nodes, edges, subgraphs and frame records, which makes custom pipelines easier to reason about when you add post-processing, offscreen passes or specialized rendering stages.",image:"images/icons/ic_render_graph.svg",gif:"images/features/render-graphs.gif"},{title:"Custom UI Engine",description:"Create your own UI using a SwiftUI-like approach that fits naturally into AdaEngine scenes.",details:"AdaUI brings a SwiftUI-like declarative layer into AdaEngine with views, result builders, environment values, layout containers, gestures, animation, text fields, scroll views and navigation primitives. UI can live naturally beside game scenes, and the engine includes tooling such as a 3D AdaUI debug view for inspecting live UI trees. The goal is to make editor panels, HUDs and in-game interfaces feel native to the same Swift codebase as your gameplay.",code:`struct MainView: View {
    @Environment(\\.scene) var scene

    var body: some View {
        Text("Hello, World!")
    }
}`,gif:"images/features/custom-ui.gif"},{title:"Free and Open Source",description:"AdaEngine is 100% free for you. Licensed by MIT. Learn, modify or use without royalties or runtime fees.",details:"AdaEngine is MIT licensed and developed in the open, with source, tutorials, generated API documentation, demos and build guides available from the repository. You can study the engine internals, modify them for your project, ship without royalties or runtime fees, and contribute fixes, examples or documentation back to the community. The project is still evolving, so the roadmap is visible where the code actually lives.",image:"images/icons/ic_opensource.svg",gif:"images/features/open-source.gif"},{title:"AdaScript",description:"Write gameplay scripts with AdaScript, powered by the Gravity language runtime and integrated with AdaEngine ECS.",details:"AdaScript brings the Gravity scripting runtime into AdaEngine for fast gameplay iteration. Scripts declare their component queries and use capability-scoped access to read or update reflected ECS fields, so scripted systems participate in the same scheduling and access rules as native Swift systems. Keep performance-critical code in Swift and move tuning, behaviours and gameplay logic into reloadable scripts.",gif:"images/features/adascript.gif"},{title:"3D Rendering",description:"Build 3D scenes with cameras, materials, lighting, skyboxes and extensible render pipelines.",details:"AdaEngine’s 3D stack is built around the same render-graph architecture as its core renderer. Compose camera views, materials, meshes, lights, environment settings and skyboxes into a Swift-first scene, then extend the pipeline with your own passes and subgraphs when a project needs custom post-processing or rendering techniques.",gif:"images/features/3d-rendering.gif"},{title:"3D Physics",description:"Simulate rigid bodies, collisions and constraints in 3D with the integrated Box3D physics engine.",details:"AdaEngine includes a Box3D-backed 3D physics path for rigid body simulation, collision queries and joint constraints. It is designed to work alongside AdaEngine entities and transforms, with a dedicated example target for validating 3D physics scenes. Box3D brings a C17 rigid-body simulation core while AdaEngine keeps the scene-facing API in Swift.",gif:"images/features/3d-physics.gif"}];function k(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function bs(e){return/^https?:\/\//.test(e)}function ys(e){return e.details}function cn(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(new Date(e))}function H(e){return ss(e,De)}function V(e){const n=De.endsWith("/")?De:`${De}/`,t=e.replace(/^\/+/,"");return`${n}${t}`}function J(e,n,t){let a=document.head.querySelector(`meta[${e}="${n}"]`);a||(a=document.createElement("meta"),a.setAttribute(e,n),document.head.appendChild(a)),a.content=t}function ws(e,n){var t;(t=document.head.querySelector(`meta[${e}="${n}"]`))==null||t.remove()}function ln(e){const n=on(e.path);let t=document.head.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.rel="canonical",document.head.appendChild(t)),document.title=e.title,t.href=n,J("name","description",e.description),J("property","og:site_name",Ie),J("property","og:title",e.title),J("property","og:description",e.description),J("property","og:type",e.type),J("property","og:url",n),J("property","og:image",e.image),J("name","twitter:card","summary_large_image"),J("name","twitter:title",e.title),J("name","twitter:description",e.description),J("name","twitter:image",e.image),e.robots?J("name","robots",e.robots):ws("name","robots");for(const a of document.head.querySelectorAll("script[data-seo-structured-data]"))a.remove();for(const a of ds(e)){const i=document.createElement("script");i.type="application/ld+json",i.dataset.seoStructuredData="true",i.textContent=JSON.stringify(a),document.head.appendChild(i)}}function Es(e){return e<1e3?String(e):e<1e6?`${(e/1e3).toFixed(e<1e4?1:0)}k`:`${(e/1e6).toFixed(1)}m`}async function vs(){const e=document.querySelector("[data-github-stars]"),n=document.querySelector("[data-github-stars-value]");if(n)try{const t=await fetch(`https://api.github.com/repos/${gt}`,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)return;const a=await t.json();if(typeof a.stargazers_count!="number")return;const i=Es(a.stargazers_count);n.textContent=i,e==null||e.setAttribute("aria-label",`${i} GitHub stars`)}catch{}}function ce(){const e=dt(window.location.pathname,"/"),n=e.name==="static-page"?e.page:e.name==="demo"?"demos":e.name,t=[{label:"Home",href:H("/"),active:n==="home"},...pe.length?[{label:"News",href:H("/blog"),active:n==="blog"}]:[],{label:"Demos",href:H("/demos"),active:n==="demos"},{label:"Learn",href:H("/learn"),active:n==="learn"},{label:"Socials",href:H("/community"),active:n==="community"},{label:"Donate",href:H("/donate"),active:n==="donate"}];return`
    <header class="header${n==="learn"?" header-learn":""}">
      <section class="container content-restriction header-container">
        <a class="header-logo" href="${H("/")}" aria-label="AdaEngine home">
          <picture class="header-logo-picture">
            <source srcset="${V("images/ae_logo~dark.svg")}" media="(prefers-color-scheme: dark)" />
            <img src="${V("images/ae_logo.svg")}" alt="AdaEngine" />
          </picture>
          <h2>${gs}</h2>
        </a>
        <button class="burger-container" type="button" aria-label="Open menu" aria-expanded="false">
          <span id="burger" aria-hidden="true"><span class="bar topBar"></span><span class="bar bottomBar"></span></span>
        </button>
        <nav aria-label="Main navigation">
          <ul class="navigation">
            ${t.map(i=>`<li class="navigation-item"><a class="navigation-item-link${i.active?" is-active":""}" href="${i.href}">${i.label}</a></li>`).join("")}
            <li class="navigation-item download-button"><a class="navigation-item-link" href="https://github.com/AdaEngine/AdaEngine/releases">Download</a></li>
          </ul>
        </nav>
      </section>
    </header>
  `}function As(){return`
    <section class="hero-section safe-area-insets">
      <div class="hero-copy">
        <p class="hero-eyebrow">AdaEngine for Swift developers</p>
        <h1 class="ae-header-title">The Open-Source Engine for Swift Developers</h1>
        <p class="hero-subtitle">Build high-performance 2D and 3D games using modern Swift. Clean architecture, native feeling, and developer-first tooling.</p>
        <div class="hero-actions">
          <a class="header-buttons" href="#features">Get Started</a>
          <a class="header-buttons-github" href="https://github.com/${gt}" aria-label="AdaEngine on GitHub">
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
      <div class="hero-visual" aria-hidden="true" data-hero-gif-src="${V("images/main/adaengine-hero.gif")}">
        <picture class="ae-logo-header"><source srcset="${V("images/ae_logo~dark.svg")}" media="(prefers-color-scheme: dark)" /><img src="${V("images/ae_logo.svg")}" alt="" /></picture>
        <div class="hero-orbit hero-orbit-one"></div>
        <div class="hero-orbit hero-orbit-two"></div>
      </div>
    </section>
  `}function Ss(){return`
    <section class="showcase-gallery safe-area-insets" aria-labelledby="showcase-gallery-title">
      <h2 class="showcase-gallery-title" id="showcase-gallery-title">Showcase</h2>
      <div class="showcase-carousel" aria-roledescription="carousel" aria-label="Project screenshots">
        ${Tn.map((e,n)=>`
              <article class="showcase-slide${n===0?" is-active":""}" aria-label="${k(e.title)}" aria-hidden="${n===0?"false":"true"}">
                <div class="showcase-slide-copy">
                  <div class="showcase-carousel-dots" aria-label="Choose project">
                    ${Tn.map((t,a)=>`<button class="showcase-carousel-dot${a===n?" is-active":""}" type="button" data-showcase-index="${a}" aria-label="Show ${k(t.title)}" aria-current="${a===n?"true":"false"}"></button>`).join("")}
                  </div>
                  <span class="showcase-slide-kicker">${k(e.eyebrow)}</span>
                  <h3>${k(e.title)}</h3>
                  <p>${k(e.description)}</p>
                  <a class="showcase-slide-action" href="${e.href}" target="_blank" rel="noreferrer" tabindex="${n===0?"0":"-1"}">${k(e.action)}</a>
                </div>
                <div class="showcase-slide-media">
                  <img src="${V(e.image)}" alt="${k(e.title)} screenshot" loading="lazy" />
                </div>
              </article>
            `).join("")}
      </div>
    </section>
  `}function _s(e=[]){return e.length?`<ul class="tags">${e.map(n=>`<li>${n}</li>`).join("")}</ul>`:""}function Ts(){return pe.length?`
    <section id="latest-news" class="latest-news safe-area-insets">
      <h2 class="section-title">Latest News</h2>
      <div class="home-articles-grid">
        ${pe.slice(0,4).map(e=>`
              <article class="home-article-preview">
                <a href="${H(`/articles/${e.slug}`)}">
                  <div class="article-preview-image">
                    <img class="background_image" src="${V(ut)}" alt="${k(e.title)}" />
                    <div class="background_image_overlay"></div>
                    <div class="article-preview-content">
                      <p class="article-date">${cn(e.date)}</p>
                      ${_s(e.tags)}
                      <h3>${e.title}</h3>
                      <p>${k(e.author.name)}</p>
                    </div>
                  </div>
                </a>
              </article>
            `).join("")}
      </div>
    </section>
  `:""}function pt(e=[]){const n=e[0]??"News";return`<span class="blog-entry-tag blog-entry-tag-${["release","tutorial","engineering","markdown","frontmatter","vite"].find(a=>n.toLowerCase().includes(a))??"default"}">${k(n)}</span>`}function Is(e,n){return e.image??_n[n%_n.length]??ut}function ks(){oe.innerHTML=`
    ${ce()}
    <main class="page-shell blog-page-shell">
      <section class="container content-restriction blog-page">
        <header class="blog-page-hero">
          <h1>Engine News</h1>
          <p>Updates, release notes, and engineering deep dives from the AdaEngine team.</p>
        </header>
        ${pe.length?`<div class="blog-timeline">
                ${pe.map((e,n)=>`
                      <article class="blog-entry">
                        <aside class="blog-entry-meta" aria-label="Article metadata">
                          <time datetime="${e.date}">${cn(e.date)}</time>
                          ${pt(e.tags)}
                        </aside>
                        <a class="blog-entry-card" href="${H(`/articles/${e.slug}`)}">
                          <img class="blog-entry-cover" src="${V(Is(e,n))}" alt="" loading="lazy" />
                          <span class="blog-entry-cover-overlay" aria-hidden="true"></span>
                          <span class="blog-entry-content">
                            <h2>${k(e.title)}</h2>
                            <p>${k(e.description)}</p>
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
  `}function Ns(e){const n=ts(e.demos),t=n.map(a=>`
        <a class="article-toc-link demo-category-link" href="#demo-group-${k(a.tag)}" data-demo-category-link="demo-group-${k(a.tag)}">
          <span>${k(a.title)}</span>
          <small>${a.demos.length}</small>
        </a>
      `).join("");oe.innerHTML=`
    ${ce()}
    <main class="page-shell demos-page-shell">
      <section class="container content-restriction demos-page">
        <header class="demos-hero">
          <p class="eyebrow">Live WebAssembly examples</p>
          <h1>AdaEngine Demos</h1>
          <p>Explore browser builds generated from the Swift files in the AdaEngine repository. Each demo page includes the embedded build and the source that produced it.</p>
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
                        <section class="demo-group" aria-labelledby="demo-group-${k(a.tag)}">
                          <div class="demo-group-heading">
                            <h2 id="demo-group-${k(a.tag)}">${k(a.title)}</h2>
                            <span>${a.demos.length} ${a.demos.length===1?"demo":"demos"}</span>
                          </div>
                          <div class="demo-card-grid">
                            ${a.demos.map(xs).join("")}
                          </div>
                        </section>
                      `).join("")}
                </div>
              </div>`:`<div class="demo-empty">
                <h2>No demos published yet</h2>
                <p>The website will show demos after the AdaEngine export workflow publishes the first manifest.</p>
              </div>`}
      </section>
    </main>
    ${le()}
  `}function xs(e){return`
    <a class="demo-card" href="${H(`/demos/${e.slug}`)}">
      <span class="demo-card-tag">${k(e.tagTitle)}</span>
      <h3>${k(e.title)}</h3>
      <p>${k(e.description)}</p>
      <span class="demo-card-meta">${k(e.sourcePath)}</span>
      ${e.hasBuild?'<span class="demo-card-action">Open demo</span>':'<span class="demo-card-action demo-card-action-muted">Source only</span>'}
    </a>
  `}async function Cs(e){const n=await ct(),t=ns(n,e);if(!t){Ge("Demo not found","Check the address or return to the demos page.");return}ln(ls(t));const a=await es(t),i=n.commit??"main",o=`https://github.com/${n.repository}/blob/${i}/${t.sourcePath}`;oe.innerHTML=`
    ${ce()}
    <main class="page-shell demo-detail-shell">
      <article class="container content-restriction demo-detail-page">
        <header class="demo-detail-hero">
          <a class="article-back-link" href="${H("/demos")}">Back to Demos</a>
          <span class="demo-card-tag">${k(t.tagTitle)}</span>
          <h1>${k(t.title)}</h1>
          <p>${k(t.description)}</p>
          <a class="demo-source-link" href="${o}" target="_blank" rel="noreferrer">${k(t.sourcePath)}</a>
        </header>
        ${t.hasBuild?`<section class="demo-player" aria-label="${k(t.title)} embedded demo">
                <button class="demo-player-fullscreen" type="button" aria-label="Open demo fullscreen" title="Open fullscreen" data-demo-fullscreen>
                  <svg class="demo-player-fullscreen-enter-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg class="demo-player-fullscreen-exit-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <iframe title="${k(t.title)}" src="${V(t.embed)}" allow="fullscreen; gamepad; keyboard-map; clipboard-read; clipboard-write; webgpu" allowfullscreen webkitallowfullscreen></iframe>
              </section>`:`<section class="demo-player demo-player-empty">
                <h2>Build artifact is not available</h2>
                <p>This demo is listed in the manifest, but the WebAssembly export was not published.</p>
              </section>`}
        <section class="demo-source-section" aria-labelledby="demo-source-title">
          <div class="demo-source-heading">
            <h2 id="demo-source-title">Source</h2>
            <a class="demo-source-github-link" href="${o}" target="_blank" rel="noreferrer">
              <svg class="demo-source-github-icon" viewBox="0 0 438.549 438.549" aria-hidden="true" focusable="false"><path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"/></svg>
              <span>Open on GitHub</span>
              <svg class="demo-source-external-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div>
          <figure class="article-code-block demo-source-code">
            <figcaption>
              <span>${k(t.sourcePath)}</span>
              <span>Swift</span>
            </figcaption>
            <pre class="code-with-line-numbers"><code class="${at("swift")}">${Ma(a,"swift")}</code></pre>
          </figure>
        </section>
      </article>
    </main>
    ${le()}
  `}function Ms(){return`
    <section id="features" class="features-container safe-area-insets">
      <div class="section-heading">
        <p class="eyebrow">Capabilities</p>
        <h2 class="section-title">Features</h2>
      </div>
      <div class="features-grid">
        ${[...Be.slice(-3),...Be.slice(0,-3)].map((n,t)=>`
              <button class="engine-info-item-container feature-card feature-card-${t+1}" type="button" data-feature-index="${Be.indexOf(n)}" data-feature-position="${t+1}" aria-haspopup="dialog">
                ${$s(n)}
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
  `}function $s(e){const n=e.gif?V(e.gif):"";return`
    <div class="engine-info-item-content feature-media-slot"${n?` data-gif-src="${n}"`:""}>
      <span class="feature-media-loader" aria-label="Loading animated feature preview">
        <span class="feature-media-spinner" aria-hidden="true"></span>
        <span>Loading preview</span>
      </span>
    </div>
  `}function Rs(){return`
    <div class="feature-modal" role="dialog" aria-modal="true" aria-labelledby="feature-modal-title" hidden>
      <div class="feature-modal-backdrop" data-modal-close></div>
      <section class="feature-modal-panel">
        <button class="feature-modal-close" type="button" aria-label="Close feature details" title="Close" data-modal-close>
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
  `}function Ls(){return`
    <nav class="footer-social-links" aria-label="Social links">
      <a class="footer-social-link" href="https://github.com/AdaEngine/AdaEngine" target="_blank" rel="noreferrer" aria-label="AdaEngine on GitHub"><svg viewBox="0 0 438.549 438.549" aria-hidden="true" focusable="false"><path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"/></svg></a>
      <a class="footer-social-link" href="https://discord.gg/JkEPE7nwDu" target="_blank" rel="noreferrer" aria-label="AdaEngine on Discord"><svg viewBox="0 0 127.14 96.36" aria-hidden="true" focusable="false"><path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83A97.68 97.68 0 0 0 49 6.83 72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z"/></svg></a>
      <a class="footer-social-link" href="https://x.com/ada_engine" target="_blank" rel="noreferrer" aria-label="AdaEngine on Twitter"><svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></a>
      <a class="footer-social-link" href="https://t.me/adaengine" target="_blank" rel="noreferrer" aria-label="AdaEngine on Telegram"><svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path d="M42.2 8.7 35.8 39c-.5 2.1-1.8 2.6-3.6 1.6l-9.9-7.3-4.8 4.6c-.5.5-1 .9-2 .9l.7-10.1L34.6 12c.8-.7-.2-1.1-1.2-.4L10.6 25.9.8 22.8c-2.1-.7-2.2-2.1.4-3.1L39.5 4.9c1.8-.7 3.4.4 2.7 3.8Z"/></svg></a>
    </nav>
  `}function le(){return`
    <footer class="footer">
      <div class="footer-dot-field" aria-hidden="true"></div>
      <div class="footer-container">
        <div class="footer-columns">
          <section>
            <h3>Ada Engine</h3>
            <a href="https://github.com/AdaEngine/AdaEngine/releases">Download<span class="footer-external-mark" aria-hidden="true">↗</span></a>
            <a href="https://github.com/AdaEngine/AdaEngine">Source code<span class="footer-external-mark" aria-hidden="true">↗</span></a>
          </section>
          <section>
            <h3>Project</h3>
            ${pe.length?`<a href="${H("/blog")}">Blog</a>`:""}
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
          ${Ls()}
        </div>
        <div class="footer-blueprint-mark" aria-hidden="true">AdaEngine</div>
      </div>
    </footer>
  `}function Os(e){return e?`
    <span class="learn-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
        ${{book:'<path d="M7 5.5h8.5a2.5 2.5 0 0 1 2.5 2.5v11H9.5A2.5 2.5 0 0 0 7 21.5V5.5Z"/><path d="M7 5.5A2.5 2.5 0 0 1 9.5 3H18v16"/>',play:'<circle cx="12" cy="12" r="9"/><path d="m10.5 8.5 5 3.5-5 3.5v-7Z"/>',layout:'<rect x="4" y="5" width="16" height="14" rx="1.5"/><path d="M9 5v14"/><path d="M4 10h16"/>'}[e]}
      </svg>
    </span>
  `:""}function Ds(){const e=ps.learn;oe.innerHTML=`
    ${ce()}
    <main class="page-shell learn-page-shell">
      <section class="container content-restriction learn-page">
        <header class="learn-hero">
          <h1>${e.title}</h1>
          <p>${e.lead}</p>
        </header>
        ${ms.map(n=>{const t=n.title.replace(/\W+/g,"-").toLowerCase();return`
              <section class="learn-section" aria-labelledby="${t}">
                <h2 id="${t}">${n.title}</h2>
                <div class="learn-grid">
                  ${n.cards.map(a=>`
                        <a class="learn-card" href="${a.href}">
                          ${Os(a.icon)}
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
  `}function Bs(e){if(e==="learn"){Ds();return}if(e==="community"){Us();return}if(e==="donate"){Ps();return}}function Ps(){oe.innerHTML=`
    ${ce()}
    <main class="page-shell donation-page-shell">
      <section class="container content-restriction donation-page">
        <header class="donation-hero">
          <h1>Support AdaEngine</h1>
          <p>AdaEngine is an independent open-source project. Your support helps us dedicate more time to development and tooling.</p>
        </header>
        <div class="donation-options" aria-label="Donation options">
          ${fs.map(e=>`
                <article class="donation-card donation-card-${e.tone}">
                  <span class="donation-card-logo" aria-hidden="true">
                    <img src="${V(e.icon)}" alt="" loading="lazy" />
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
  `}function Us(){oe.innerHTML=`
    ${ce()}
    <main class="page-shell community-page-shell">
      <section class="container content-restriction community-page">
        <header class="community-hero">
          <h1>Join the Community</h1>
          <p>Connect with other developers, share your projects, and contribute to the engine.</p>
        </header>
        <div class="community-link-grid" aria-label="AdaEngine community links">
          ${hs.map(e=>`
                <a class="community-link-card" href="${e.href}" target="_blank" rel="noreferrer">
                  <span class="community-link-icon ${e.iconClass??""}">
                    ${e.iconMarkup??`<img src="${V(e.icon??"")}" alt="" width="42" height="42" loading="lazy" />`}
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
  `}function Fs(){oe.innerHTML=`
    ${ce()}
    <main class="page-shell">
      <div class="container content-restriction">
        ${As()}
        ${Ss()}
        ${Ts()}
        ${Ms()}
      </div>
      ${Rs()}
    </main>
    ${le()}
  `}function Hs(e){const n=Qa(e);if(!n){Ge("Article not found","Check the address or return to the blog.");return}ln(cs(n)),oe.innerHTML=`
    ${ce()}
    <main class="page-shell article-page-shell">
      <div class="container article-reading-layout">
        <article class="safe-area-insets article-page">
          <header class="article-hero">
            <a class="article-back-link" href="${H("/blog")}">Back to News</a>
            ${pt(n.tags)}
            <h1>${n.title}</h1>
            <div class="article_info">
              ${zs(n.author)}
              <span aria-hidden="true">•</span>
              <time datetime="${n.date}">${cn(n.date)}</time>
              <span aria-hidden="true">•</span>
              <span>${n.readingTime} min read</span>
            </div>
            <p class="article-item-description">${n.description}</p>
          </header>
          <div class="article-content">${n.html}</div>
        </article>
        ${qs(n.toc)}
      </div>
    </main>
    ${Gs()}
    ${le()}
  `}function Gs(){return`
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
  `}function zs(e){const n=`By ${e.name}`,a=`
    ${e.avatar?`<img class="article-author-avatar" src="${k(Ws(e.avatar))}" alt="${k(`${e.name} avatar`)}" loading="lazy" />`:""}
    <span class="article-author-label">${k(n)}</span>
  `;return!e.url||!bs(e.url)?`<span class="article-author">${a}</span>`:`
    <a class="article-author article-author-link" href="${k(e.url)}" target="_blank" rel="author noreferrer">
      ${a}
      <svg class="article-author-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M5 3.5h7.5V11M12.25 3.75 4 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  `}function Ws(e){return/^(https?:|data:|blob:|\/)/.test(e)||e.startsWith("images/")?V(e):V(`images/${e}`)}function In(e,n){return e.map(t=>`
        <a class="article-toc-link article-toc-link-level-${t.level}" href="#${t.id}" data-article-toc-link="${t.id}" data-toc-context="${n}">
          <span>${k(t.title)}</span>
        </a>
      `).join("")}function qs(e){var i;if(!e.length)return"";const n=In(e,"desktop"),t=In(e,"mobile"),a=((i=e[0])==null?void 0:i.title)??"Start";return`
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
          <strong data-current-section>${k(a)}</strong>
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
  `}function Ge(e="Page not found",n="This route does not exist yet."){oe.innerHTML=`
    ${ce()}
    <main class="page-shell">
      <section class="container content-restriction safe-area-insets status-page">
        <h1>${e}</h1>
        <p>${n}</p>
        <a class="header-buttons" href="${H("/")}">Home</a>
      </section>
    </main>
    ${le()}
  `}function Vs(){const e=document.querySelector(".article-content"),n=document.querySelector("[data-mobile-reader-nav]"),t=document.querySelector("[data-mobile-toc-toggle]"),a=document.querySelector("[data-mobile-toc-sheet]"),i=Array.from(document.querySelectorAll(".article-content h2[id], .article-content h3[id]")),o=Array.from(document.querySelectorAll("[data-article-toc-link]")),r=Array.from(document.querySelectorAll("[data-article-progress-fill]")),s=Array.from(document.querySelectorAll("[data-article-progress-label]")),c=Array.from(document.querySelectorAll("[data-current-section]"));if(!e||!i.length||!o.length)return;let l,d;const g=E=>{if(!(!t||!a||!n)){if(window.clearTimeout(l),t.setAttribute("aria-expanded",String(E)),E){a.hidden=!1,n.classList.remove("is-closing"),n.classList.add("is-open");return}n.classList.remove("is-open"),n.classList.add("is-closing"),l=window.setTimeout(()=>{a.hidden=!0,n.classList.remove("is-closing")},520)}},b=E=>{const S=document.getElementById(E);S&&(S.scrollIntoView({behavior:"smooth",block:"start"}),g(!1))},y=E=>{const S=E.closest(".article-toc-list, .article-mobile-toc-list");if(!S)return;const _=S.getBoundingClientRect(),T=E.getBoundingClientRect(),x=16,P=T.top<_.top+x,M=T.bottom>_.bottom-x;if(!P&&!M)return;const L=P?T.top-_.top-x:T.bottom-_.bottom+x;S.scrollTo({top:S.scrollTop+L,behavior:"smooth"})};o.forEach(E=>{E.addEventListener("click",S=>{const _=E.dataset.articleTocLink;_&&(S.preventDefault(),history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${_}`),b(_))})}),t==null||t.addEventListener("click",()=>{const E=t.getAttribute("aria-expanded")==="true";g(!E)}),document.addEventListener("keydown",E=>{E.key==="Escape"&&g(!1)}),document.addEventListener("click",E=>{!n||!E.target||n.contains(E.target)||g(!1)});const w=()=>{var F;const E=window.scrollY+Math.min(180,window.innerHeight*.28),S=i.slice().reverse().find(O=>O.getBoundingClientRect().top+window.scrollY<=E)??i[0],_=S.id,T=e.offsetTop,x=e.offsetTop+e.scrollHeight-window.innerHeight,P=x<=T?1:Math.min(1,Math.max(0,(window.scrollY-T)/(x-T))),M=`${Math.round(P*100)}%`,L=((F=S.textContent)==null?void 0:F.trim())||"Start",Z=_!==d;d=_,r.forEach(O=>{O.style.transform=`scaleX(${P})`}),s.forEach(O=>{O.textContent=M}),c.forEach(O=>{O.textContent=L}),o.forEach(O=>{const j=O.dataset.articleTocLink===_;O.classList.toggle("is-active",j),O.setAttribute("aria-current",j?"true":"false"),j&&Z&&y(O)})};window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("resize",w),w()}function js(){const e=Array.from(document.querySelectorAll("[data-demo-category-link]")),n=e.map(o=>{var r;return(r=document.getElementById(o.dataset.demoCategoryLink??""))==null?void 0:r.closest(".demo-group")}).filter(o=>!!o);if(!e.length||!n.length)return;let t;const a=o=>{const r=o.closest(".demo-category-list");if(!r||r.scrollWidth<=r.clientWidth)return;const s=r.getBoundingClientRect(),c=o.getBoundingClientRect(),l=12,d=c.left<s.left+l,g=c.right>s.right-l;if(!d&&!g)return;const b=d?c.left-s.left-l:c.right-s.right+l;r.scrollTo({left:r.scrollLeft+b,behavior:"smooth"})},i=()=>{var l;const o=window.scrollY+Math.min(180,window.innerHeight*.28),s=(l=(n.slice().reverse().find(d=>d.getBoundingClientRect().top+window.scrollY<=o)??n[0]).querySelector("h2[id]"))==null?void 0:l.id,c=s!==t;t=s,e.forEach(d=>{const g=d.dataset.demoCategoryLink===s;d.classList.toggle("is-active",g),g?d.setAttribute("aria-current","location"):d.removeAttribute("aria-current"),g&&c&&a(d)})};e.forEach(o=>{o.addEventListener("click",r=>{const s=o.dataset.demoCategoryLink,c=s?document.getElementById(s):null;!c||!s||(r.preventDefault(),history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${s}`),c.scrollIntoView({behavior:"smooth",block:"start"}))})}),window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i),i()}async function Ks(){const e=dt(window.location.pathname,"/");if(ln(os(e)),e.name==="home"){Fs();return}if(e.name==="blog"){ks();return}if(e.name==="demos"){Ns(await ct());return}if(e.name==="demo"){await Cs(e.slug);return}if(e.name==="static-page"){Bs(e.page);return}if(e.name==="article"){Hs(e.slug);return}Ge()}function kn(){const e=document.querySelector(".header"),n=document.querySelector(".burger-container");let t,a;const i=g=>{if(!(!e||!n)){if(window.clearTimeout(t),window.clearTimeout(a),e.classList.toggle("menu-opened",g),document.body.classList.toggle("menu-opened",g),n.setAttribute("aria-expanded",String(g)),n.setAttribute("aria-label",g?"Close menu":"Open menu"),g){e.classList.remove("menu-closing"),e.classList.add("menu-opening"),t=window.setTimeout(()=>{e.classList.remove("menu-opening")},620);return}e.classList.remove("menu-opening"),e.classList.add("menu-closing"),a=window.setTimeout(()=>{e.classList.remove("menu-closing")},760)}};n==null||n.addEventListener("click",()=>{i(!(e!=null&&e.classList.contains("menu-opened")))}),document.querySelectorAll(".navigation-item-link").forEach(g=>{g.addEventListener("click",()=>{i(!1)})}),Nn();const o=document.querySelector(".feature-modal"),r=document.querySelector("#feature-modal-title"),s=document.querySelector("#feature-modal-description"),c=document.querySelector("#feature-modal-kicker"),l=document.querySelector("#feature-modal-visual"),d=()=>{o&&(o.hidden=!0,document.body.classList.remove("modal-opened"))};document.querySelectorAll("[data-feature-index]").forEach(g=>{g.addEventListener("click",()=>{const b=Number(g.dataset.featureIndex),y=Be[b];!y||!o||!r||!s||!c||!l||(r.textContent=y.title,s.textContent=ys(y),c.textContent=`Feature ${String(Number(g.dataset.featurePosition)||b+1).padStart(2,"0")}`,o.hidden=!1,document.body.classList.add("modal-opened"),l.innerHTML=Ys(y),Nn())})}),document.querySelectorAll("[data-modal-close]").forEach(g=>g.addEventListener("click",d)),document.addEventListener("keydown",g=>{g.key==="Escape"&&d()}),ei(),Zs(),Js(),Qs(),js(),Vs(),Xs()}function Nn(){const e=a=>{const i=a.dataset.gifSrc;if(!i)return;a.classList.add("is-loading");const o=new Image;o.onload=()=>{o.className="feature-media-gif",o.alt="",o.decoding="async",a.replaceChildren(o),a.classList.remove("is-loading"),a.classList.add("is-loaded")},o.onerror=()=>{a.classList.remove("is-loading"),a.classList.add("has-load-error")},o.src=i},n=Array.from(document.querySelectorAll("[data-gif-src]:not([data-gif-preview-ready)]"));if(!n.length)return;const t=typeof IntersectionObserver>"u"?null:new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&(t==null||t.unobserve(i.target),e(i.target))})},{rootMargin:"160px 0px"});n.forEach(a=>{a.dataset.gifPreviewReady="true",a.closest(".feature-modal")?e(a):t?t.observe(a):e(a)})}function Zs(){const e=document.querySelector("[data-hero-gif-src]"),n=e==null?void 0:e.dataset.heroGifSrc;if(!e||!n)return;const t=new Image;t.onload=()=>{var s;t.className="hero-gif",t.alt="",t.decoding="async",(s=e.querySelector(".ae-logo-header"))==null||s.replaceWith(t);const a=document.createElement("canvas");a.width=1,a.height=1;const i=a.getContext("2d",{willReadFrequently:!0});if(!i)return;let o={red:34,green:148,blue:255};const r=()=>{try{i.clearRect(0,0,1,1),i.drawImage(t,0,0,1,1);const[c,l,d,g]=i.getImageData(0,0,1,1).data;g>0&&c+l+d>8&&(o={red:Math.round(o.red*.7+c*.3),green:Math.round(o.green*.7+l*.3),blue:Math.round(o.blue*.7+d*.3)},e.style.setProperty("--hero-ambient",`${o.red} ${o.green} ${o.blue}`),e.classList.add("has-ambient-light"))}catch{}window.setTimeout(r,600)};r()},t.src=n}function Ys(e){const n=e.gif?V(e.gif):"";return`
    <div class="feature-modal-media feature-media-slot"${n?` data-gif-src="${n}"`:""}>
      <span class="feature-media-loader" aria-label="Loading animated feature preview">
        <span class="feature-media-spinner" aria-hidden="true"></span>
        <span>Loading preview</span>
      </span>
    </div>
  `}function Xs(){const e=document.querySelector("[data-article-lightbox]"),n=e==null?void 0:e.querySelector("[data-article-lightbox-preview]"),t=e==null?void 0:e.querySelector("[data-article-lightbox-caption]"),a=e==null?void 0:e.querySelector(".article-image-lightbox-close");let i=null;if(!e||!n||!t)return;const o=()=>{e.hidden=!0,n.removeAttribute("src"),document.body.classList.remove("article-lightbox-open"),i instanceof HTMLElement&&i.focus()},r=s=>{var d,g;const c=s.closest("figure"),l=((g=(d=c==null?void 0:c.querySelector("figcaption"))==null?void 0:d.textContent)==null?void 0:g.trim())??"";i=document.activeElement,n.src=s.currentSrc||s.src,n.alt=s.alt,t.textContent=l,t.hidden=!l,e.hidden=!1,document.body.classList.add("article-lightbox-open"),a==null||a.focus()};document.querySelectorAll("[data-article-lightbox-image]").forEach(s=>{s.addEventListener("click",()=>r(s)),s.addEventListener("keydown",c=>{c.key!=="Enter"&&c.key!==" "||(c.preventDefault(),r(s))})}),e.querySelectorAll("[data-article-lightbox-close]").forEach(s=>{s.addEventListener("click",o)}),document.addEventListener("keydown",s=>{s.key==="Escape"&&!e.hidden&&o()})}function Js(){const e=document.querySelector(".demo-player:not(.demo-player-empty)"),n=e==null?void 0:e.querySelector("[data-demo-fullscreen]");if(!e||!n)return;const t=document,a=e,i=document.fullscreenEnabled||t.webkitFullscreenEnabled||typeof e.requestFullscreen=="function"||typeof a.webkitRequestFullscreen=="function",o=()=>document.fullscreenElement??t.webkitFullscreenElement??null,r=()=>o()===e;let s=!1;const c=()=>{s=!0,e.classList.add("is-viewport-fullscreen"),document.body.classList.add("demo-viewport-fullscreen-open"),y()},l=()=>{s=!1,e.classList.remove("is-viewport-fullscreen"),document.body.classList.remove("demo-viewport-fullscreen-open"),y()},d=async()=>i?typeof e.requestFullscreen=="function"?(await e.requestFullscreen(),!0):typeof a.webkitRequestFullscreen=="function"?(await a.webkitRequestFullscreen(),!0):!1:!1,g=async()=>{try{if(await d())return}catch(w){console.warn("Native fullscreen is unavailable, using viewport fullscreen fallback",w)}c()},b=async()=>{var w;if(s){l();return}if(typeof document.exitFullscreen=="function"){await document.exitFullscreen();return}await((w=t.webkitExitFullscreen)==null?void 0:w.call(t))},y=()=>{const w=r()||s;e.classList.toggle("is-fullscreen",w),n.setAttribute("aria-label",w?"Exit demo fullscreen":"Open demo fullscreen"),n.title=w?"Exit fullscreen":"Open fullscreen"};n.addEventListener("click",async()=>{try{if(r()||s){await b();return}await g()}catch(w){console.error("Failed to toggle demo fullscreen",w)}}),document.addEventListener("fullscreenchange",y),document.addEventListener("webkitfullscreenchange",y),document.addEventListener("keydown",w=>{w.key==="Escape"&&s&&l()}),y()}function Qs(){const e=document.querySelector(".demo-player:not(.demo-player-empty)"),n=e==null?void 0:e.querySelector("iframe");if(!e||!n)return;const t=document.createElement("canvas");t.width=1,t.height=1;const a=t.getContext("2d",{willReadFrequently:!0});if(!a)return;let i=0,o=0,r={red:34,green:211,blue:238};const s=(d,g,b)=>{r={red:Math.round(r.red*.7+d*.3),green:Math.round(r.green*.7+g*.3),blue:Math.round(r.blue*.7+b*.3)},e.style.setProperty("--demo-ambient",`${r.red} ${r.green} ${r.blue}`),e.classList.add("has-ambient-light")},c=d=>{if(d.origin!==window.location.origin)return;const g=d.data;if(!g||typeof g!="object"||g.type!=="ada-demo-ambient"||!Array.isArray(g.color)||g.color.length<3)return;const[b,y,w]=g.color.map(Number);[b,y,w].every(Number.isFinite)&&s(b,y,w)},l=()=>{var d;try{const g=(d=n.contentDocument)==null?void 0:d.querySelector("canvas");if(!g||g.width<=0||g.height<=0){o+=1,i=window.setTimeout(l,o<120?250:1e3);return}const b=Math.max(0,Math.floor(g.width*.5)),y=Math.max(0,Math.floor(g.height*.42));a.clearRect(0,0,1,1),a.drawImage(g,b,y,1,1,0,0,1,1);const[w,E,S,_]=a.getImageData(0,0,1,1).data;_>0&&w+E+S>8&&s(w,E,S),o=0,i=window.setTimeout(l,450)}catch{o+=1,i=window.setTimeout(l,o<12?450:1200)}};n.addEventListener("load",()=>{window.clearTimeout(i),o=0,i=window.setTimeout(l,500)}),window.addEventListener("message",c),i=window.setTimeout(l,500)}function ei(){const e=document.querySelector(".showcase-carousel"),n=Array.from(document.querySelectorAll(".showcase-slide")),t=Array.from(document.querySelectorAll(".showcase-carousel-dot"));if(!e||n.length<2)return;let a=0,i;const o=s=>{a=(s+n.length)%n.length,n.forEach((c,l)=>{const d=l===a;c.classList.toggle("is-active",d),c.setAttribute("aria-hidden",String(!d)),c.querySelectorAll("a").forEach(g=>{g.tabIndex=d?0:-1})}),t.forEach((c,l)=>{c.classList.toggle("is-active",l===a),c.setAttribute("aria-current",l===a?"true":"false")})},r=()=>{window.clearInterval(i),i=window.setInterval(()=>{o(a+1)},5e3)};t.forEach((s,c)=>{s.addEventListener("click",()=>{o(c),r()})}),e.addEventListener("mouseenter",()=>window.clearInterval(i)),e.addEventListener("mouseleave",r),e.addEventListener("focusin",()=>window.clearInterval(i)),e.addEventListener("focusout",r),o(0),r()}Ks().then(()=>{kn(),vs()}).catch(e=>{console.error(e),Ge("Page failed to load","Refresh the page or try again in a moment."),kn()});
