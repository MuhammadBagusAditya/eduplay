var Se=Object.defineProperty;var ue=n=>{throw TypeError(n)};var Ie=(n,t,e)=>t in n?Se(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var _=(n,t,e)=>Ie(n,typeof t!="symbol"?t+"":t,e),re=(n,t,e)=>t.has(n)||ue("Cannot "+e);var r=(n,t,e)=>(re(n,t,"read from private field"),e?e.call(n):t.get(n)),a=(n,t,e)=>t.has(n)?ue("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),w=(n,t,e,o)=>(re(n,t,"write to private field"),o?o.call(n,e):t.set(n,e),e),tt=(n,t,e)=>(re(n,t,"access private method"),e);import"./disclose-version.Bg9kRutz.js";import{d as b,g as i,e as E,b as O,u as fe,h as ke,p as x,f as M,c as q,i as Y,r as B,t as V,a as A,s as de}from"./runtime.Bp4x7A-a.js";import{c as y,a as g,b as U}from"./template.DQ3Ggw9n.js";import{c as pt}from"./svelte-component.CVO9o64T.js";import{p as R,c as f,i as H,r as F,g as J}from"./props.DpK8ESsy.js";import{a as Q,c as te}from"./utils.Dqu1-Wdg.js";import{s as C}from"./snippet.DzwRyOEQ.js";import{a as ct,b as m,m as L,u as lt}from"./use-id.B41njTOf.js";import{l as ce,f as pe,S as se,c as Te,m as Ce,E as Oe,b as ge,o as Ee,H as De,d as Gt,p as xe,q as gt,r as Ae,s as Ke,t as Lt,k as ft,u as Ge,v as oe,n as Wt,P as Re}from"./scroll-lock.Cdff5hXG.js";import{i as Fe,u as Ne,F as He,P as Le,a as Ue,M as le,g as he,b as We}from"./mounted.DowyTN3P.js";import{u as Xe}from"./use-roving-focus.svelte.BDw_mrE0.js";import{g as Ye,j as ve,l as je,d as me,k as ze}from"./attrs.CqXQdisa.js";function qe(n,t){if(Fe(n)){const e=n;return e()??t??e()}return n??t??n}var vt,mt,Xt;class Be{constructor(t){a(this,vt);a(this,mt,b(()=>qe(r(this,vt))));a(this,Xt,b(()=>!i(r(this,mt))||!ce.current?!1:i(r(this,mt)).contains(ce.current)));w(this,vt,t)}get current(){return i(r(this,Xt))}}vt=new WeakMap,mt=new WeakMap,Xt=new WeakMap;const Ve=[pe,se],Je=[ge,Ee,De],be=[Te,Ce,Oe],Qe=[...Je,...be];function ie(n){return n.pointerType==="mouse"}function Ze(n,t){let e=!1;for(let o=0,s=t.length-1;o<t.length;s=o++){const l=t[o].x,h=t[o].y,p=t[s].x,c=t[s].y;h>n.y!=c>n.y&&n.x<(p-l)*(n.y-h)/(c-h)+l&&(e=!e)}return e}function $e(n,t){return t?Ze({x:n.clientX,y:n.clientY},t):!1}const[tn,Me]=Gt("Menu.Root"),[en,_e]=Gt(["Menu.Root","Menu.Sub"],"MenuContext"),[nn,rn]=Gt("Menu.Content"),[on,sn]=Gt("Menu.Group");Gt("Menu.RadioGroup");class an{constructor(t){_(this,"onClose");_(this,"variant");_(this,"isUsingKeyboard",m(!1));_(this,"dir");this.onClose=t.onClose,this.dir=t.dir,this.variant=t.variant,fe(()=>{const e=[],o=h=>{this.isUsingKeyboard.current=!1},l=oe(document,"keydown",h=>{this.isUsingKeyboard.current=!0;const p=oe(document,"pointerdown",o,{capture:!0,once:!0}),c=oe(document,"pointermove",o,{capture:!0,once:!0});e.push(p,c)},{capture:!0});return e.push(l),()=>{}})}getAttr(t){return`data-${this.variant.current}-${t}`}}var bt,Mt;class un{constructor(t,e,o){_(this,"root");_(this,"open");_(this,"contentId",m.with(()=>""));a(this,bt,E(null));a(this,Mt,E(null));_(this,"parentMenu");this.root=e,this.open=t.open,this.parentMenu=o,o&&fe(()=>{o.open,ke(()=>{var s;(s=this.parentMenu)!=null&&s.open||(this.open.current=!1)})})}get contentNode(){return i(r(this,bt))}set contentNode(t){O(r(this,bt),R(t))}get triggerNode(){return i(r(this,Mt))}set triggerNode(t){O(r(this,Mt),R(t))}toggleOpen(){this.open.current=!this.open.current}onOpen(){this.open.current=!0}onClose(){this.open.current=!1}}bt=new WeakMap,Mt=new WeakMap;var et,_t,wt,yt,Pt,nt,St,rt,It,X,we,Ut,Yt,jt;class dn{constructor(t,e){a(this,X);a(this,et);_(this,"contentRef");_(this,"parentMenu");a(this,_t,E(""));a(this,wt);a(this,yt,E(0));a(this,Pt,E(0));a(this,nt,E(null));a(this,St,E("right"));a(this,rt,E(0));a(this,It);_(this,"rovingFocusGroup");_(this,"isMounted");_(this,"isFocusWithin",new Be(()=>this.parentMenu.contentNode??void 0));_(this,"onOpenAutoFocus",t=>{if(t.defaultPrevented)return;t.preventDefault();const e=this.parentMenu.contentNode;e==null||e.focus()});a(this,Yt,b(()=>({open:this.parentMenu.open.current})));a(this,jt,b(()=>({id:r(this,et).current,role:"menu","aria-orientation":Ye("vertical"),[this.parentMenu.root.getAttr("content")]:"","data-state":ve(this.parentMenu.open.current),onkeydown:this.onkeydown,onblur:this.onblur,onpointermove:this.onpointermove,onfocus:this.onfocus,dir:this.parentMenu.root.dir.current,style:{pointerEvents:"auto"}})));w(this,et,t.id),w(this,wt,t.loop),this.parentMenu=e,this.parentMenu.contentId=t.id,this.contentRef=t.ref,this.isMounted=t.isMounted,this.onkeydown=this.onkeydown.bind(this),this.onblur=this.onblur.bind(this),this.onpointermove=this.onpointermove.bind(this),this.onfocus=this.onfocus.bind(this),this.handleInteractOutside=this.handleInteractOutside.bind(this),ct({id:r(this,et),ref:this.contentRef,deps:()=>this.parentMenu.open.current,onRefChange:o=>{this.parentMenu.contentNode!==o&&(this.parentMenu.contentNode=o)}}),xe(()=>{window.clearTimeout(i(r(this,yt)))}),w(this,It,Ne().handleTypeaheadSearch),this.rovingFocusGroup=Xe({rootNodeId:this.parentMenu.contentId,candidateAttr:this.parentMenu.root.getAttr("item"),loop:r(this,wt),orientation:m.with(()=>"vertical")})}get search(){return i(r(this,_t))}set search(t){O(r(this,_t),R(t))}get pointerGraceTimer(){return i(r(this,Pt))}set pointerGraceTimer(t){O(r(this,Pt),R(t))}onPointerGraceIntentChange(t){O(r(this,nt),R(t))}onkeydown(t){var u,d;if(t.defaultPrevented)return;const e=t.target,o=t.currentTarget;if(!gt(e)||!gt(o))return;const s=((u=e.closest(`[${this.parentMenu.root.getAttr("content")}]`))==null?void 0:u.id)===this.parentMenu.contentId.current,l=t.ctrlKey||t.altKey||t.metaKey,h=t.key.length===1;if(this.rovingFocusGroup.handleKeydown(e,t)||t.code==="Space")return;const c=tt(this,X,we).call(this);s&&(t.key===Ae&&t.preventDefault(),!l&&h&&r(this,It).call(this,t.key,c)),((d=t.target)==null?void 0:d.id)===this.parentMenu.contentId.current&&Qe.includes(t.key)&&(t.preventDefault(),be.includes(t.key)&&c.reverse(),Ke(c))}onblur(t){var e,o;Lt(t.currentTarget)&&Lt(t.target)&&((o=(e=t.currentTarget).contains)!=null&&o.call(e,t.target)||(window.clearTimeout(i(r(this,yt))),this.search=""))}onfocus(t){this.parentMenu.root.isUsingKeyboard.current&&ft(()=>this.rovingFocusGroup.focusFirstCandidate())}onpointermove(t){if(!ie(t))return;const e=t.target;if(!Lt(e))return;const o=i(r(this,rt))!==t.clientX,s=t.currentTarget;if(Lt(s)&&s.contains(e)&&o){const l=t.clientX>i(r(this,rt))?"right":"left";O(r(this,St),R(l)),O(r(this,rt),R(t.clientX))}}onItemEnter(t){return!!tt(this,X,Ut).call(this,t)}onItemLeave(t){if(tt(this,X,Ut).call(this,t))return;const e=this.parentMenu.contentNode;e==null||e.focus(),this.rovingFocusGroup.setCurrentTabStopId("")}onTriggerLeave(t){return!!tt(this,X,Ut).call(this,t)}handleInteractOutside(t){var o;if(!Ge(t.target))return;const e=(o=this.parentMenu.triggerNode)==null?void 0:o.id;if(t.target.id===e){t.preventDefault();return}t.target.closest(`#${e}`)&&t.preventDefault()}get snippetProps(){return i(r(this,Yt))}get props(){return i(r(this,jt))}}et=new WeakMap,_t=new WeakMap,wt=new WeakMap,yt=new WeakMap,Pt=new WeakMap,nt=new WeakMap,St=new WeakMap,rt=new WeakMap,It=new WeakMap,X=new WeakSet,we=function(){const t=this.parentMenu.contentNode;return t?Array.from(t.querySelectorAll(`[${this.parentMenu.root.getAttr("item")}]:not([data-disabled])`)):[]},Ut=function(t){var o,s;return i(r(this,St))===((o=i(r(this,nt)))==null?void 0:o.side)&&$e(t,(s=i(r(this,nt)))==null?void 0:s.area)},Yt=new WeakMap,jt=new WeakMap;var ot,zt;class cn{constructor(t,e){_(this,"content");_(this,"ref");_(this,"id");_(this,"disabled");a(this,ot,E(!1));a(this,zt,b(()=>({id:this.id.current,tabindex:-1,role:"menuitem","aria-disabled":je(this.disabled.current),"data-disabled":me(this.disabled.current),"data-highlighted":i(r(this,ot))?"":void 0,[this.content.parentMenu.root.getAttr("item")]:"",onpointermove:this.onpointermove,onpointerleave:this.onpointerleave,onfocus:this.onfocus,onblur:this.onblur})));this.content=e,this.id=t.id,this.disabled=t.disabled,this.ref=t.ref,this.onpointermove=this.onpointermove.bind(this),this.onpointerleave=this.onpointerleave.bind(this),this.onfocus=this.onfocus.bind(this),this.onblur=this.onblur.bind(this),ct({id:this.id,ref:this.ref,deps:()=>this.content.isMounted.current})}onpointermove(t){if(!t.defaultPrevented&&ie(t))if(this.disabled.current)this.content.onItemLeave(t);else{if(this.content.onItemEnter(t))return;const o=t.currentTarget;if(!gt(o))return;o.focus()}}onpointerleave(t){ft(()=>{t.defaultPrevented||ie(t)&&this.content.onItemLeave(t)})}onfocus(t){ft(()=>{t.defaultPrevented||this.disabled.current||O(r(this,ot),!0)})}onblur(t){ft(()=>{t.defaultPrevented||O(r(this,ot),!1)})}get props(){return i(r(this,zt))}}ot=new WeakMap,zt=new WeakMap;var D,kt,Tt,Ct,qt,ye,Bt;class ln{constructor(t,e){a(this,qt);a(this,D);a(this,kt);a(this,Tt);a(this,Ct,E(!1));_(this,"root");a(this,Bt,b(()=>L(r(this,D).props,{onclick:this.onclick,onpointerdown:this.onpointerdown,onpointerup:this.onpointerup,onkeydown:this.onkeydown})));w(this,D,e),this.root=e.content.parentMenu.root,w(this,kt,t.onSelect),w(this,Tt,t.closeOnSelect),this.onkeydown=this.onkeydown.bind(this),this.onclick=this.onclick.bind(this),this.onpointerdown=this.onpointerdown.bind(this),this.onpointerup=this.onpointerup.bind(this)}onkeydown(t){const e=r(this,D).content.search!=="";if(!(r(this,D).disabled.current||e&&t.key===se)&&Ve.includes(t.key)){if(!gt(t.currentTarget))return;t.currentTarget.click(),t.preventDefault()}}onclick(t){r(this,D).disabled.current||tt(this,qt,ye).call(this)}onpointerup(t){var e;if(!t.defaultPrevented&&!i(r(this,Ct))){if(!gt(t.currentTarget))return;(e=t.currentTarget)==null||e.click()}}onpointerdown(t){O(r(this,Ct),!0)}get props(){return i(r(this,Bt))}}D=new WeakMap,kt=new WeakMap,Tt=new WeakMap,Ct=new WeakMap,qt=new WeakSet,ye=function(){if(r(this,D).disabled.current)return;const t=new CustomEvent("menuitemselect",{bubbles:!0,cancelable:!0});r(this,kt).current(t),ft(()=>{if(t.defaultPrevented){r(this,D).content.parentMenu.root.isUsingKeyboard.current=!1;return}r(this,Tt).current&&r(this,D).content.parentMenu.root.onClose()})},Bt=new WeakMap;var it,Ot,Et,Vt;class hn{constructor(t,e){a(this,it);a(this,Ot);a(this,Et,E(void 0));_(this,"root");a(this,Vt,b(()=>({id:r(this,it).current,role:"group","aria-labelledby":this.groupHeadingId,[this.root.getAttr("group")]:""})));w(this,it,t.id),w(this,Ot,t.ref),this.root=e,ct({id:r(this,it),ref:r(this,Ot)})}get groupHeadingId(){return i(r(this,Et))}set groupHeadingId(t){O(r(this,Et),R(t))}get props(){return i(r(this,Vt))}}it=new WeakMap,Ot=new WeakMap,Et=new WeakMap,Vt=new WeakMap;var st,Dt,at,Jt;class fn{constructor(t,e){a(this,st);a(this,Dt);a(this,at);a(this,Jt,b(()=>({id:r(this,st).current,role:"group",[r(this,at).root.getAttr("group-heading")]:""})));w(this,st,t.id),w(this,Dt,t.ref),w(this,at,e),ct({id:r(this,st),ref:r(this,Dt),onRefChange:o=>{r(this,at).groupHeadingId=o==null?void 0:o.id}})}get props(){return i(r(this,Jt))}}st=new WeakMap,Dt=new WeakMap,at=new WeakMap,Jt=new WeakMap;var ut,xt,At,Qt;class pn{constructor(t,e){a(this,ut);a(this,xt);a(this,At);a(this,Qt,b(()=>({id:r(this,ut).current,role:"group",[r(this,At).getAttr("separator")]:""})));w(this,ut,t.id),w(this,xt,t.ref),w(this,At,e),ct({id:r(this,ut),ref:r(this,xt)})}get props(){return i(r(this,Qt))}}ut=new WeakMap,xt=new WeakMap,At=new WeakMap,Qt=new WeakMap;var dt,Kt,T,N,Zt,$t;class gn{constructor(t,e){a(this,dt);a(this,Kt);a(this,T);a(this,N);a(this,Zt,b(()=>{if(r(this,T).open.current&&r(this,T).contentId.current)return r(this,T).contentId.current}));a(this,$t,b(()=>({id:r(this,dt).current,disabled:r(this,N).current,"aria-haspopup":"menu","aria-expanded":ze(r(this,T).open.current),"aria-controls":i(r(this,Zt)),"data-disabled":me(r(this,N).current),"data-state":ve(r(this,T).open.current),[r(this,T).root.getAttr("trigger")]:"",onpointerdown:this.onpointerdown,onpointerup:this.onpointerup,onkeydown:this.onkeydown})));w(this,Kt,t.ref),w(this,dt,t.id),w(this,T,e),w(this,N,t.disabled),this.onpointerdown=this.onpointerdown.bind(this),this.onpointerup=this.onpointerup.bind(this),this.onkeydown=this.onkeydown.bind(this),ct({id:r(this,dt),ref:r(this,Kt),onRefChange:o=>{r(this,T).triggerNode=o}})}onpointerdown(t){if(!r(this,N).current){if(t.pointerType==="touch")return t.preventDefault();t.button===0&&t.ctrlKey===!1&&(r(this,T).toggleOpen(),r(this,T).open.current||t.preventDefault())}}onpointerup(t){r(this,N).current||t.pointerType==="touch"&&(t.preventDefault(),r(this,T).toggleOpen())}onkeydown(t){if(!r(this,N).current){if(t.key===se||t.key===pe){r(this,T).toggleOpen(),t.preventDefault();return}t.key===ge&&(r(this,T).onOpen(),t.preventDefault())}}get props(){return i(r(this,$t))}}dt=new WeakMap,Kt=new WeakMap,T=new WeakMap,N=new WeakMap,Zt=new WeakMap,$t=new WeakMap;function vn(n){return tn(new an(n))}function mn(n,t){const e=new un(t,n);return en(e)}function bn(n){const t=_e();return new gn(n,t)}function Mn(n){const t=_e();return nn(new dn(n,t))}function _n(n){const t=rn(),e=new cn(n,t);return new ln(n,e)}function wn(n){const t=Me();return on(new hn(n,t))}function yn(n){const t=sn();return new fn(n,t)}function Pn(n){const t=Me();return new pn(n,t)}var Sn=U("<div><!></div>");function In(n,t){x(t,!0);let e=f(t,"ref",15,null),o=f(t,"id",19,lt),s=f(t,"disabled",3,!1),l=f(t,"onSelect",3,Wt),h=f(t,"closeOnSelect",3,!0),p=F(t,["$$slots","$$events","$$legacy","child","children","ref","id","disabled","onSelect","closeOnSelect"]);const c=_n({id:m.with(()=>o()),disabled:m.with(()=>s()),onSelect:m.with(()=>l()),ref:m.with(()=>e(),P=>e(P)),closeOnSelect:m.with(()=>h())}),u=b(()=>L(p,c.props));var d=y(),v=M(d);H(v,()=>t.child,P=>{var k=y(),S=M(k);C(S,()=>t.child,()=>({props:i(u)})),g(P,k)},P=>{var k=Sn();let S;var K=q(k);C(K,()=>t.children??Y),B(k),V(()=>S=Q(k,S,{...i(u)})),g(P,k)}),g(n,d),A()}var kn=U("<div><!></div>");function Tn(n,t){x(t,!0);let e=f(t,"ref",15,null),o=f(t,"id",19,lt),s=F(t,["$$slots","$$events","$$legacy","children","child","ref","id"]);const l=wn({id:m.with(()=>o()),ref:m.with(()=>e(),u=>e(u))}),h=b(()=>L(s,l.props));var p=y(),c=M(p);H(c,()=>t.child,u=>{var d=y(),v=M(d);C(v,()=>t.child,()=>({props:i(h)})),g(u,d)},u=>{var d=kn();let v;var P=q(d);C(P,()=>t.children??Y),B(d),V(()=>v=Q(d,v,{...i(h)})),g(u,d)}),g(n,p),A()}var Cn=U("<div><!></div>");function On(n,t){x(t,!0);let e=f(t,"ref",15,null),o=f(t,"id",19,lt),s=F(t,["$$slots","$$events","$$legacy","children","child","ref","id"]);const l=yn({id:m.with(()=>o()),ref:m.with(()=>e(),u=>e(u))}),h=b(()=>L(s,l.props));var p=y(),c=M(p);H(c,()=>t.child,u=>{var d=y(),v=M(d);C(v,()=>t.child,()=>({props:i(h)})),g(u,d)},u=>{var d=Cn();let v;var P=q(d);C(P,()=>t.children??Y),B(d),V(()=>v=Q(d,v,{...i(h)})),g(u,d)}),g(n,p),A()}var En=U("<div><!></div>");function Dn(n,t){x(t,!0);let e=f(t,"ref",15,null),o=f(t,"id",19,lt),s=F(t,["$$slots","$$events","$$legacy","ref","id","child","children"]);const l=Pn({id:m.with(()=>o()),ref:m.with(()=>e(),u=>e(u))}),h=b(()=>L(s,l.props));var p=y(),c=M(p);H(c,()=>t.child,u=>{var d=y(),v=M(d);C(v,()=>t.child,()=>({props:i(h)})),g(u,d)},u=>{var d=En();let v;var P=q(d);C(P,()=>t.children??Y),B(d),V(()=>v=Q(d,v,{...i(h)})),g(u,d)}),g(n,p),A()}function xn(n,t){x(t,!0);let e=f(t,"open",15,!1),o=f(t,"dir",3,"ltr"),s=f(t,"onOpenChange",3,Wt),l=f(t,"controlledOpen",3,!1),h=f(t,"_internal_variant",3,"dropdown-menu");const p=vn({variant:m.with(()=>h()),dir:m.with(()=>o()),onClose:()=>{var c;l()?s()(!1):(e(!1),(c=s())==null||c(!1))}});mn(p,{open:m.with(()=>e(),c=>{l()||e(c),s()(c)})}),He(n,{children:(c,u)=>{var d=y(),v=M(d);C(v,()=>t.children??Y),g(c,d)},$$slots:{default:!0}}),A()}var An=U("<div><!></div>"),Kn=U("<!> <!>",1),Gn=U("<div><!></div>"),Rn=U("<!> <!>",1);function Fn(n,t){x(t,!0);let e=f(t,"id",19,lt),o=f(t,"ref",15,null),s=f(t,"loop",3,!0),l=f(t,"onInteractOutside",3,Wt),h=f(t,"onEscapeKeydown",3,Wt),p=f(t,"forceMount",3,!1),c=F(t,["$$slots","$$events","$$legacy","id","child","children","ref","loop","onInteractOutside","onEscapeKeydown","forceMount"]),u=E(!1);const d=Mn({id:m.with(()=>e()),loop:m.with(()=>s()),ref:m.with(()=>o(),I=>o(I)),isMounted:m.with(()=>i(u))}),v=b(()=>L(c,d.props));function P(I){d.handleInteractOutside(I),!I.defaultPrevented&&(l()(I),!I.defaultPrevented&&d.parentMenu.onClose())}function k(I){h()(I),!I.defaultPrevented&&d.parentMenu.onClose()}var S=y(),K=M(S);H(K,p,I=>{Ue(I,J(()=>i(v),{get enabled(){return d.parentMenu.open.current},onInteractOutside:P,onEscapeKeydown:k,trapFocus:!0,get loop(){return s()},forceMount:!0,get id(){return e()},popper:(ne,ht)=>{let ae=()=>ht==null?void 0:ht().props;var Rt=Kn();const Z=b(()=>L(ae(),{style:he("dropdown-menu")}));var Ft=M(Rt);H(Ft,()=>t.child,W=>{var G=y(),$=M(G);C($,()=>t.child,()=>({props:i(Z),...d.snippetProps})),g(W,G)},W=>{var G=An();let $;var j=q(G);C(j,()=>t.children??Y),B(G),V(()=>$=Q(G,$,{...i(Z)})),g(W,G)});var Nt=de(Ft,2);le(Nt,{get isMounted(){return i(u)},set isMounted(W){O(u,R(W))}}),g(ne,Rt)},$$slots:{popper:!0}}))},I=>{var ee=y(),ne=M(ee);H(ne,()=>!p(),ht=>{Le(ht,J(()=>i(v),{get present(){return d.parentMenu.open.current},onInteractOutside:P,onEscapeKeydown:k,trapFocus:!0,get loop(){return s()},forceMount:!1,get id(){return e()},popper:(Rt,Z)=>{let Ft=()=>Z==null?void 0:Z().props;var Nt=Rn();const W=b(()=>L(Ft(),{style:he("dropdown-menu")}));var G=M(Nt);H(G,()=>t.child,j=>{var z=y(),Ht=M(z);C(Ht,()=>t.child,()=>({props:i(W),...d.snippetProps})),g(j,z)},j=>{var z=Gn();let Ht;var Pe=q(z);C(Pe,()=>t.children??Y),B(z),V(()=>Ht=Q(z,Ht,{...i(W)})),g(j,z)});var $=de(G,2);le($,{get isMounted(){return i(u)},set isMounted(j){O(u,R(j))}}),g(Rt,Nt)},$$slots:{popper:!0}}))},null,!0),g(I,ee)}),g(n,S),A()}var Nn=U("<button><!></button>");function Hn(n,t){x(t,!0);let e=f(t,"id",19,lt),o=f(t,"ref",15,null),s=f(t,"disabled",3,!1),l=f(t,"type",3,"button"),h=F(t,["$$slots","$$events","$$legacy","id","ref","child","children","disabled","type"]);const p=bn({id:m.with(()=>e()),disabled:m.with(()=>s()??!1),ref:m.with(()=>o(),u=>o(u))}),c=b(()=>L(h,p.props,{type:l()}));We(n,{get id(){return e()},children:(u,d)=>{var v=y(),P=M(v);H(P,()=>t.child,k=>{var S=y(),K=M(S);C(K,()=>t.child,()=>({props:i(c)})),g(k,S)},k=>{var S=Nn();let K;var I=q(S);C(I,()=>t.children??Y),B(S),V(()=>K=Q(S,K,{...i(c)})),g(k,S)}),g(u,v)},$$slots:{default:!0}}),A()}function $n(n,t){x(t,!0);let e=f(t,"ref",15,null),o=f(t,"sideOffset",3,4),s=F(t,["$$slots","$$events","$$legacy","ref","sideOffset","portalProps","class"]);var l=y(),h=M(l);pt(h,()=>Re,(p,c)=>{c(p,J(()=>t.portalProps,{children:(u,d)=>{var v=y(),P=M(v),k=b(()=>te("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md outline-none",t.class));pt(P,()=>Fn,(S,K)=>{K(S,J({get ref(){return e()},set ref(I){e(I)},get sideOffset(){return o()},get class(){return i(k)}},()=>s))}),g(u,v)},$$slots:{default:!0}}))}),g(n,l),A()}function tr(n,t){x(t,!0);let e=f(t,"ref",15,null),o=F(t,["$$slots","$$events","$$legacy","ref","class","inset"]);var s=y(),l=M(s),h=b(()=>te("px-2 py-1.5 text-sm font-semibold",t.inset&&"pl-8",t.class));pt(l,()=>On,(p,c)=>{c(p,J({get ref(){return e()},set ref(u){e(u)},get class(){return i(h)}},()=>o))}),g(n,s),A()}function er(n,t){x(t,!0);let e=f(t,"ref",15,null),o=F(t,["$$slots","$$events","$$legacy","ref","class","inset"]);var s=y(),l=M(s),h=b(()=>te("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",t.inset&&"pl-8",t.class));pt(l,()=>In,(p,c)=>{c(p,J({get ref(){return e()},set ref(u){e(u)},get class(){return i(h)}},()=>o))}),g(n,s),A()}function nr(n,t){x(t,!0);let e=f(t,"ref",15,null),o=F(t,["$$slots","$$events","$$legacy","ref","class"]);var s=y(),l=M(s),h=b(()=>te("bg-muted -mx-1 my-1 h-px",t.class));pt(l,()=>Dn,(p,c)=>{c(p,J({get ref(){return e()},set ref(u){e(u)},get class(){return i(h)}},()=>o))}),g(n,s),A()}const rr=xn,or=Hn,ir=Tn;export{$n as D,ir as G,rr as R,or as T,tr as a,nr as b,er as c};