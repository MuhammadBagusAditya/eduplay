import{x as c,w as f,A as m,T as p,G as h,l as i,q as s,z as T,m as g}from"./runtime.Bp4x7A-a.js";function v(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=m;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function x(r,t){var e=(t&p)!==0,_=(t&h)!==0,n,u=!r.startsWith("<!>");return()=>{if(i)return a(s,null),s;n===void 0&&(n=v(u?r:"<!>"+r),e||(n=f(n)));var o=_?document.importNode(n,!0):n.cloneNode(!0);if(e){var l=f(o),d=o.lastChild;a(l,d)}else a(o,o);return o}}function y(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,u;return()=>{if(i)return a(s,null),s;if(!u){var o=v(n),l=f(o);u=f(l)}var d=u.cloneNode(!0);return a(d,d),d}}function M(r=""){if(!i){var t=c(r+"");return a(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=c()),T(e)),a(e,e),e}function N(){if(i)return a(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=c();return r.append(t,e),a(t,e),r}function A(r,t){if(i){m.nodes_end=s,g();return}r!==null&&r.before(t)}export{A as a,x as b,N as c,a as d,v as e,y as n,M as t};