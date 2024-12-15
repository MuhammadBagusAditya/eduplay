import{p as x}from"./props.DpK8ESsy.js";import{e as N,g as m,b as F,d as _,u as T,h as G}from"./runtime.Bp4x7A-a.js";import{d as X}from"./utils.Dqu1-Wdg.js";function $(e){return typeof e=="function"}function H(e){return e!==null&&typeof e=="object"}const v=Symbol("box"),S=Symbol("is-writable");function U(e){return H(e)&&v in e}function D(e){return l.isBox(e)&&S in e}function l(e){let t=N(x(e));return{[v]:!0,[S]:!0,get current(){return m(t)},set current(n){F(t,x(n))}}}function Y(e,t){const n=_(e);return t?{[v]:!0,[S]:!0,get current(){return m(n)},set current(r){t(r)}}:{[v]:!0,get current(){return e()}}}function z(e){return l.isBox(e)?e:$(e)?l.with(e):l(e)}function K(e){return Object.entries(e).reduce((t,[n,r])=>l.isBox(r)?(l.isWritableBox(r)?Object.defineProperty(t,n,{get(){return r.current},set(i){r.current=i}}):Object.defineProperty(t,n,{get(){return r.current}}),t):Object.assign(t,{[n]:r}),{})}function k(e){return l.isWritableBox(e)?{[v]:!0,get current(){return e.current}}:e}l.from=z;l.with=Y;l.flatten=K;l.readonly=k;l.isBox=U;l.isWritableBox=D;function V(...e){return function(t){var n;for(const r of e)if(r){if(t.defaultPrevented)return;typeof r=="function"?r.call(this,t):(n=r.current)==null||n.call(this,t)}}}var R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var W={},O=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Z=/\n/g,q=/^\s*/,J=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Q=/^:\s*/,ee=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,te=/^[;\s]*/,re=/^\s+|\s+$/g,ne=`
`,j="/",I="*",g="",oe="comment",ie="declaration",ue=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(s){var o=s.match(Z);o&&(n+=o.length);var p=s.lastIndexOf(ne);r=~p?s.length-p:r+s.length}function u(){var s={line:n,column:r};return function(o){return o.position=new c(s),d(),o}}function c(s){this.start=s,this.end={line:n,column:r},this.source=t.source}c.prototype.content=e;function f(s){var o=new Error(t.source+":"+n+":"+r+": "+s);if(o.reason=s,o.filename=t.source,o.line=n,o.column=r,o.source=e,!t.silent)throw o}function a(s){var o=s.exec(e);if(o){var p=o[0];return i(p),e=e.slice(p.length),o}}function d(){a(q)}function h(s){var o;for(s=s||[];o=y();)o!==!1&&s.push(o);return s}function y(){var s=u();if(!(j!=e.charAt(0)||I!=e.charAt(1))){for(var o=2;g!=e.charAt(o)&&(I!=e.charAt(o)||j!=e.charAt(o+1));)++o;if(o+=2,g===e.charAt(o-1))return f("End of comment missing");var p=e.slice(2,o-2);return r+=2,i(p),e=e.slice(o),r+=2,s({type:oe,comment:p})}}function E(){var s=u(),o=a(J);if(o){if(y(),!a(Q))return f("property missing ':'");var p=a(ee),M=s({type:ie,property:A(o[0].replace(O,g)),value:p?A(p[0].replace(O,g)):g});return a(te),M}}function b(){var s=[];h(s);for(var o;o=E();)o!==!1&&(s.push(o),h(s));return s}return d(),b()};function A(e){return e?e.replace(re,g):g}var se=R&&R.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(W,"__esModule",{value:!0});var C=W.default=fe,ce=se(ue);function fe(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,ce.default)(e),i=typeof t=="function";return r.forEach(function(u){if(u.type==="declaration"){var c=u.property,f=u.value;i?t(c,f,u):f&&(n=n||{},n[c]=f)}}),n}const ae=C.default||C,le=/\d/,pe=["-","_","/","."];function de(e=""){if(!le.test(e))return e!==e.toLowerCase()}function he(e){const t=[];let n="",r,i;for(const u of e){const c=pe.includes(u);if(c===!0){t.push(n),n="",r=void 0;continue}const f=de(u);if(i===!1){if(r===!1&&f===!0){t.push(n),n=u,r=f;continue}if(r===!0&&f===!1&&n.length>1){const a=n.at(-1);t.push(n.slice(0,Math.max(0,n.length-1))),n=a+u,r=f;continue}}n+=u,r=f,i=c}return t.push(n),t}function B(e){return e?he(e).map(t=>ge(t)).join(""):""}function be(e){return ye(B(e||""))}function ge(e){return e?e[0].toUpperCase()+e.slice(1):""}function ye(e){return e?e[0].toLowerCase()+e.slice(1):""}function w(e){if(!e)return{};const t={};function n(r,i){if(r.startsWith("-moz-")||r.startsWith("-webkit-")||r.startsWith("-ms-")||r.startsWith("-o-")){t[B(r)]=i;return}if(r.startsWith("--")){t[r]=i;return}t[be(r)]=i}return ae(e,n),t}function me(...e){return(...t)=>{for(const n of e)typeof n=="function"&&n(...t)}}function ve(e,t){const n=RegExp(e,"g");return r=>{if(typeof r!="string")throw new TypeError(`expected an argument of type string, but got ${typeof r}`);return r.match(n)?r.replace(n,t):r}}const Ee=ve(/[A-Z]/,e=>`-${e.toLowerCase()}`);function we(e){if(!e||typeof e!="object"||Array.isArray(e))throw new TypeError(`expected an argument of type object, but got ${typeof e}`);return Object.keys(e).map(t=>`${Ee(t)}: ${e[t]};`).join(`
`)}function L(e={}){return we(e).replace(`
`," ")}const _e={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",transform:"translateX(-100%)"};L(_e);function Se(e){var t;return e.length>2&&e.startsWith("on")&&e[2]===((t=e[2])==null?void 0:t.toLowerCase())}function je(...e){const t={...e[0]};for(let n=1;n<e.length;n++){const r=e[n];for(const i in r){const u=t[i],c=r[i],f=typeof u=="function",a=typeof c=="function";if(f&&Se(i)){const d=u,h=c;t[i]=V(d,h)}else if(f&&a)t[i]=me(u,c);else if(i==="class"&&typeof u=="string"&&typeof c=="string")t[i]=X(u,c);else if(i==="style"){const d=typeof u=="object",h=typeof c=="object",y=typeof u=="string",E=typeof c=="string";if(d&&h)t[i]={...u,...c};else if(d&&E){const b=w(c);t[i]={...u,...b}}else if(y&&h){const b=w(u);t[i]={...b,...c}}else if(y&&E){const b=w(u),s=w(c);t[i]={...b,...s}}else d?t[i]=u:h&&(t[i]=c)}else t[i]=c!==void 0?c:u}}return typeof t.style=="object"&&(t.style=L(t.style).replaceAll(`
`," ")),t.hidden!==!0&&(t.hidden=void 0),t.disabled!==!0&&(t.disabled=void 0),t}function Ie({id:e,ref:t,deps:n=()=>!0,onRefChange:r=()=>{},getRootNode:i=()=>typeof document<"u"?document:void 0}){const u=_(()=>n()),c=_(()=>i());T(()=>(e.current,m(u),m(c),G(()=>{var a;const f=(a=m(c))==null?void 0:a.getElementById(e.current);f?t.current=f:t.current=null,r(t.current)}))),T(()=>()=>{t.current=null,r(null)})}let P=0;function Ae(e="bits"){return P++,`${e}-${P}`}export{Ie as a,l as b,_e as c,w as d,me as e,V as f,Oe as g,je as m,L as s,Ae as u};