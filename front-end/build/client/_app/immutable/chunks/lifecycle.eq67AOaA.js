import{j as re,l as b,z as M,x as fe,m as ie,H as se,I as F,J as le,K as X,y,q as w,L as H,B as G,k as $,o as te,M as ue,A as z,O as D,P as J,Q as L,R as ve,S as oe,U as ce,v as de,V as j,w as _e,W as he,X as pe,Y as Ee,Z as me,_ as K,a0 as Ae,a1 as xe,a2 as Ie,u as P,a3 as Te,h as ge,a4 as be,a5 as Q,g as ee,a6 as ke,d as we}from"./runtime.Bp4x7A-a.js";function Se(f,e){return e}function Ce(f,e,a,s){for(var l=[],t=e.length,v=0;v<t;v++)ve(e[v].e,l,!0);var d=t>0&&l.length===0&&a!==null;if(d){var h=a.parentNode;oe(h),h.append(a),s.clear(),T(f,e[0].prev,e[t-1].next)}ce(l,()=>{for(var _=0;_<t;_++){var c=e[_];d||(s.delete(c.k),T(f,c.prev,c.next)),de(c.e,!d)}})}function Me(f,e,a,s,l,t=null){var v=f,d={flags:e,items:new Map,first:null},h=(e&j)!==0;if(h){var _=f;v=b?M(_e(_)):_.appendChild(fe())}b&&ie();var c=null,g=!1;re(()=>{var n=a(),o=se(n)?n:n==null?[]:F(n),u=o.length;if(g&&u===0)return;g=u===0;let x=!1;if(b){var E=v.data===le;E!==(u===0)&&(v=X(),M(v),y(!1),x=!0)}if(b){for(var m=null,A,p=0;p<u;p++){if(w.nodeType===8&&w.data===he){v=w,x=!0,y(!1);break}var r=o[p],i=s(r,p);A=ae(w,d,m,null,r,i,p,l,e),d.items.set(i,A),m=A}u>0&&M(X())}if(!b){var N=pe;He(o,d,v,l,e,(N.f&H)!==0,s)}t!==null&&(u===0?c?G(c):c=$(()=>t(v)):c!==null&&te(c,()=>{c=null})),x&&y(!0),a()}),b&&(v=w)}function He(f,e,a,s,l,t,v){var V,Y,q,B;var d=(l&Ee)!==0,h=(l&(D|L))!==0,_=f.length,c=e.items,g=e.first,n=g,o,u=null,x,E=[],m=[],A,p,r,i;if(d)for(i=0;i<_;i+=1)A=f[i],p=v(A,i),r=c.get(p),r!==void 0&&((V=r.a)==null||V.measure(),(x??(x=new Set)).add(r));for(i=0;i<_;i+=1){if(A=f[i],p=v(A,i),r=c.get(p),r===void 0){var N=n?n.e.nodes_start:a;u=ae(N,e,u,u===null?e.first:u.next,A,p,i,s,l),c.set(p,u),E=[],m=[],n=u.next;continue}if(h&&Ne(r,A,i,l),r.e.f&H&&(G(r.e),d&&((Y=r.a)==null||Y.unfix(),(x??(x=new Set)).delete(r))),r!==n){if(o!==void 0&&o.has(r)){if(E.length<m.length){var C=m[0],I;u=C.prev;var O=E[0],R=E[E.length-1];for(I=0;I<E.length;I+=1)W(E[I],C,a);for(I=0;I<m.length;I+=1)o.delete(m[I]);T(e,O.prev,R.next),T(e,u,O),T(e,R,C),n=C,u=R,i-=1,E=[],m=[]}else o.delete(r),W(r,n,a),T(e,r.prev,r.next),T(e,r,u===null?e.first:u.next),T(e,u,r),u=r;continue}for(E=[],m=[];n!==null&&n.k!==p;)(t||!(n.e.f&H))&&(o??(o=new Set)).add(n),m.push(n),n=n.next;if(n===null)continue;r=n}E.push(r),u=r,n=r.next}if(n!==null||o!==void 0){for(var k=o===void 0?[]:F(o);n!==null;)(t||!(n.e.f&H))&&k.push(n),n=n.next;var S=k.length;if(S>0){var ne=l&j&&_===0?a:null;if(d){for(i=0;i<S;i+=1)(q=k[i].a)==null||q.measure();for(i=0;i<S;i+=1)(B=k[i].a)==null||B.fix()}Ce(e,k,ne,c)}}d&&ue(()=>{var U;if(x!==void 0)for(r of x)(U=r.a)==null||U.apply()}),z.first=e.first&&e.first.e,z.last=u&&u.e}function Ne(f,e,a,s){s&D&&J(f.v,e),s&L?J(f.i,a):f.i=a}function ae(f,e,a,s,l,t,v,d,h){var _=(h&D)!==0,c=(h&Ae)===0,g=_?c?me(l):K(l):l,n=h&L?K(v):v,o={i:n,v:g,k:t,a:null,e:null,prev:a,next:s};try{return o.e=$(()=>d(f,g,n),b),o.e.prev=a&&a.e,o.e.next=s&&s.e,a===null?e.first=o:(a.next=o,a.e.next=o.e),s!==null&&(s.prev=o,s.e.prev=o.e),o}finally{}}function W(f,e,a){for(var s=f.next?f.next.e.nodes_start:a,l=e?e.e.nodes_start:a,t=f.e.nodes_start;t!==s;){var v=xe(t);l.before(t),t=v}}function T(f,e,a){e===null?f.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function ye(f=!1){const e=Te,a=e.l.u;if(!a)return;let s=()=>ke(e.s);if(f){let l=0,t={};const v=we(()=>{let d=!1;const h=e.s;for(const _ in h)h[_]!==t[_]&&(t[_]=h[_],d=!0);return d&&l++,l});s=()=>ee(v)}a.b.length&&Ie(()=>{Z(e,s),Q(a.b)}),P(()=>{const l=ge(()=>a.m.map(be));return()=>{for(const t of l)typeof t=="function"&&t()}}),a.a.length&&P(()=>{Z(e,s),Q(a.a)})}function Z(f,e){if(f.l.s)for(const a of f.l.s)ee(a);e()}export{ye as a,Me as e,Se as i};