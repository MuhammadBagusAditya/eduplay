var Ee=Object.defineProperty;var me=i=>{throw TypeError(i)};var Ue=(i,t,e)=>t in i?Ee(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var v=(i,t,e)=>Ue(i,typeof t!="symbol"?t+"":t,e),ce=(i,t,e)=>t.has(i)||me("Cannot "+e);var o=(i,t,e)=>(ce(i,t,"read from private field"),e?e.call(i):t.get(i)),u=(i,t,e)=>t.has(i)?me("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),W=(i,t,e,r)=>(ce(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e),Ft=(i,t,e)=>(ce(i,t,"access private method"),e);import"./disclose-version.Bg9kRutz.js";import{p as U,f as _,c as Z,i as q,r as $,t as G,g as n,a as K,d as S,e as A,b as H,u as L,h as he,a2 as Ke,s as nt}from"./runtime.Bp4x7A-a.js";import{i as M,r as z,p as D,c as p,g as Y,j as ye,b as Be}from"./props.DpK8ESsy.js";import{c as P,a as c,b as R,t as Fe}from"./template.DQ3Ggw9n.js";import{s as k}from"./snippet.DzwRyOEQ.js";import{c as ot}from"./svelte-component.CVO9o64T.js";import{a as tt,r as Le,c as ft}from"./utils.Dqu1-Wdg.js";import{m as Q,a as Kt,s as ze,c as qe,b as C,u as pt}from"./use-id.B41njTOf.js";import{d as fe,c as at,b as mt,f as be,S as we,k as vt,r as _e,m as Ne,o as Pe,H as Ce,E as xe,w as je,n as et,v as Ie,P as We}from"./scroll-lock.Cdff5hXG.js";import{c as Ge,d as Ye,u as Xe,n as Je,p as Qe,f as Ze,e as $e,P as tr,a as er,M as ve,F as rr,b as ir}from"./mounted.DowyTN3P.js";import"./legacy.CtaTdtmd.js";import{I as Te,s as Ae}from"./Icon.CxQCumuR.js";import{C as He}from"./chevron-down.Bv1qxjYC.js";import{e as or,i as nr}from"./lifecycle.eq67AOaA.js";import{j as ke,d as De,a as sr,h as lr,m as ar}from"./attrs.CqXQdisa.js";import{b as dr}from"./input.aIcynM5P.js";var hr=R("<span><!></span>");function ur(i,t){U(t,!0);let e=z(t,["$$slots","$$events","$$legacy","children","child"]);const r={position:"absolute",border:0,width:"1px",display:"inline-block",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0 0 0 0)",whiteSpace:"nowrap",wordWrap:"normal"},l=S(()=>Q(e,{style:r}));var s=P(),d=_(s);M(d,()=>t.child,g=>{var f=P(),a=_(f);k(a,()=>t.child,()=>({props:n(l)})),c(g,f)},g=>{var f=hr();let a;var h=Z(f);k(h,()=>t.children??q),$(f),G(()=>a=tt(f,a,{...n(l)})),c(g,f)}),c(i,s),K()}function cr(i){const t=Ge("",1e3);function e(l,s){if(!i.enabled||!s.length)return;t.current=t.current+l;const d=i.getCurrentItem(),g=s.find(b=>b===d)??"",f=s.map(b=>b??""),a=Ye(f,t.current,g),h=s.find(b=>b===a);return h&&i.onMatch(h),h}function r(){t.current=""}return{search:t,handleTypeaheadSearch:e,resetTypeahead:r}}const gr=[mt,Pe,Ce],fr=[at,Ne,xe],vr=[...gr,...fr];var bt,wt,_t,St,yt,Nt,Pt,Lt,zt,qt,Ct,xt,It;class Oe{constructor(t){v(this,"disabled");v(this,"required");v(this,"name");v(this,"loop");v(this,"open");v(this,"scrollAlignment");v(this,"items");v(this,"allowDeselect");u(this,bt,A(!1));u(this,wt,A(""));u(this,_t,A(null));u(this,St,A(null));u(this,yt,A(null));u(this,Nt,A(""));u(this,Pt,A(null));u(this,Lt,S(()=>this.highlightedNode?this.highlightedNode.getAttribute("data-value"):null));u(this,zt,S(()=>{if(this.highlightedNode)return this.highlightedNode.id}));u(this,qt,S(()=>this.highlightedNode?this.highlightedNode.getAttribute("data-label"):null));u(this,Ct,A(!1));u(this,xt,A(!1));v(this,"bitsAttrs");u(this,It,A({x:0,y:0}));this.disabled=t.disabled,this.required=t.required,this.name=t.name,this.loop=t.loop,this.open=t.open,this.scrollAlignment=t.scrollAlignment,this.isCombobox=t.isCombobox,this.items=t.items,this.allowDeselect=t.allowDeselect,this.bitsAttrs=Vr(this),Ke(()=>{this.open.current||this.setHighlightedNode(null)})}get touchedInput(){return n(o(this,bt))}set touchedInput(t){H(o(this,bt),D(t))}get inputValue(){return n(o(this,wt))}set inputValue(t){H(o(this,wt),D(t))}get inputNode(){return n(o(this,_t))}set inputNode(t){H(o(this,_t),D(t))}get contentNode(){return n(o(this,St))}set contentNode(t){H(o(this,St),D(t))}get triggerNode(){return n(o(this,yt))}set triggerNode(t){H(o(this,yt),D(t))}get valueId(){return n(o(this,Nt))}set valueId(t){H(o(this,Nt),D(t))}get highlightedNode(){return n(o(this,Pt))}set highlightedNode(t){H(o(this,Pt),D(t))}get highlightedValue(){return n(o(this,Lt))}get highlightedId(){return n(o(this,zt))}get highlightedLabel(){return n(o(this,qt))}get isUsingKeyboard(){return n(o(this,Ct))}set isUsingKeyboard(t){H(o(this,Ct),D(t))}get isCombobox(){return n(o(this,xt))}set isCombobox(t){H(o(this,xt),D(t))}get triggerPointerDownPos(){return n(o(this,It))}set triggerPointerDownPos(t){H(o(this,It),t)}setHighlightedNode(t){this.highlightedNode=t,t&&this.isUsingKeyboard&&t.scrollIntoView({block:"nearest"})}getCandidateNodes(){const t=this.contentNode;return t?Array.from(t.querySelectorAll(`[${this.bitsAttrs.item}]:not([data-disabled])`)):[]}setHighlightedToFirstCandidate(){this.setHighlightedNode(null);const t=this.getCandidateNodes();t.length&&this.setHighlightedNode(t[0])}getNodeByValue(t){return this.getCandidateNodes().find(r=>r.dataset.value===t)??null}setOpen(t){this.open.current=t}toggleOpen(){this.open.current=!this.open.current}handleOpen(){this.setOpen(!0)}handleClose(){this.setHighlightedNode(null),this.setOpen(!1)}toggleMenu(){this.toggleOpen()}}bt=new WeakMap,wt=new WeakMap,_t=new WeakMap,St=new WeakMap,yt=new WeakMap,Nt=new WeakMap,Pt=new WeakMap,Lt=new WeakMap,zt=new WeakMap,qt=new WeakMap,Ct=new WeakMap,xt=new WeakMap,It=new WeakMap;var jt,Wt,Gt,Yt;class pr extends Oe{constructor(e){super(e);v(this,"value");v(this,"isMulti",!1);u(this,jt,S(()=>this.value.current!==""));u(this,Wt,S(()=>{var r;return this.items.current.length?((r=this.items.current.find(l=>l.value===this.value.current))==null?void 0:r.label)??"":""}));u(this,Gt,S(()=>this.items.current.length?this.items.current.filter(r=>!r.disabled).map(r=>r.label):[]));u(this,Yt,S(()=>!(this.isMulti||this.items.current.length===0)));this.value=e.value,L(()=>{!this.open.current&&this.highlightedNode&&this.setHighlightedNode(null)}),L(()=>{this.open.current&&vt(()=>{this.setInitialHighlightedNode()})})}get hasValue(){return n(o(this,jt))}get currentLabel(){return n(o(this,Wt))}get candidateLabels(){return n(o(this,Gt))}get dataTypeaheadEnabled(){return n(o(this,Yt))}includesItem(e){return this.value.current===e}toggleItem(e,r=e){this.value.current=this.includesItem(e)?"":e,this.inputValue=r}setInitialHighlightedNode(){if(this.highlightedNode&&document.contains(this.highlightedNode))return;if(this.value.current!==""){const r=this.getNodeByValue(this.value.current);if(r){this.setHighlightedNode(r);return}}const e=this.getCandidateNodes()[0];e&&this.setHighlightedNode(e)}}jt=new WeakMap,Wt=new WeakMap,Gt=new WeakMap,Yt=new WeakMap;var Xt;class mr extends Oe{constructor(e){super(e);v(this,"value");v(this,"isMulti",!0);u(this,Xt,S(()=>this.value.current.length>0));this.value=e.value,L(()=>{this.open.current&&vt(()=>{this.highlightedNode||this.setInitialHighlightedNode()})})}get hasValue(){return n(o(this,Xt))}includesItem(e){return this.value.current.includes(e)}toggleItem(e,r=e){this.includesItem(e)?this.value.current=this.value.current.filter(l=>l!==e):this.value.current=[...this.value.current,e],this.inputValue=r}setInitialHighlightedNode(){if(this.highlightedNode)return;if(this.value.current.length&&this.value.current[0]!==""){const r=this.getNodeByValue(this.value.current[0]);if(r){this.setHighlightedNode(r);return}}const e=this.getCandidateNodes()[0];e&&this.setHighlightedNode(e)}}Xt=new WeakMap;var dt,Tt,ht,ut,lt,Me,ge,Jt;class br{constructor(t,e){u(this,lt);u(this,dt);u(this,Tt);v(this,"root");u(this,ht);u(this,ut);v(this,"onpointerdown",t=>{if(this.root.disabled.current)return;if(t.pointerType==="touch")return t.preventDefault();const e=t.target;e!=null&&e.hasPointerCapture(t.pointerId)&&(e==null||e.releasePointerCapture(t.pointerId)),t.button===0&&t.ctrlKey===!1&&(this.root.open.current===!1?(Ft(this,lt,ge).call(this,t),t.preventDefault()):this.root.handleClose())});v(this,"onpointerup",t=>{t.preventDefault(),t.pointerType==="touch"&&Ft(this,lt,ge).call(this,t)});u(this,Jt,S(()=>({id:o(this,dt).current,disabled:this.root.disabled.current?!0:void 0,"aria-haspopup":"listbox","data-state":ke(this.root.open.current),"data-disabled":De(this.root.disabled.current),"data-placeholder":this.root.hasValue?void 0:"",[this.root.bitsAttrs.trigger]:"",onpointerdown:this.onpointerdown,onkeydown:this.onkeydown,onclick:this.onclick,onpointerup:this.onpointerup})));this.root=e,W(this,dt,t.id),W(this,Tt,t.ref),Kt({id:o(this,dt),ref:o(this,Tt),onRefChange:r=>{this.root.triggerNode=r}}),W(this,ht,Xe({getCurrentItem:()=>this.root.highlightedNode,onMatch:r=>{this.root.setHighlightedNode(r)}})),W(this,ut,cr({getCurrentItem:()=>this.root.isMulti?"":this.root.currentLabel,onMatch:r=>{if(this.root.isMulti||!this.root.items.current)return;const l=this.root.items.current.find(s=>s.label===r);l&&(this.root.value.current=l.value)},enabled:!this.root.isMulti&&this.root.dataTypeaheadEnabled})),this.onkeydown=this.onkeydown.bind(this),this.onpointerdown=this.onpointerdown.bind(this),this.onpointerup=this.onpointerup.bind(this),this.onclick=this.onclick.bind(this)}onkeydown(t){if(this.root.isUsingKeyboard=!0,(t.key===at||t.key===mt)&&t.preventDefault(),!this.root.open.current){if(t.key===be||t.key===we||t.key===mt||t.key===at)t.preventDefault(),this.root.handleOpen();else if(!this.root.isMulti&&this.root.dataTypeaheadEnabled){o(this,ut).handleTypeaheadSearch(t.key,this.root.candidateLabels);return}vt(()=>{if(this.root.hasValue)return;const s=this.root.getCandidateNodes();if(s.length){if(t.key===mt){const d=s[0];this.root.setHighlightedNode(d)}else if(t.key===at){const d=s[s.length-1];this.root.setHighlightedNode(d)}}});return}if(t.key===_e){this.root.handleClose();return}if((t.key===be||t.key===we)&&!t.isComposing){t.preventDefault();const s=this.root.highlightedValue,d=s===this.root.value.current;if(!this.root.allowDeselect.current&&d&&!this.root.isMulti){this.root.handleClose();return}s!==null&&this.root.toggleItem(s,this.root.highlightedLabel??void 0),!this.root.isMulti&&!d&&this.root.handleClose()}if(t.key===at&&t.altKey&&this.root.handleClose(),vr.includes(t.key)){t.preventDefault();const s=this.root.getCandidateNodes(),d=this.root.highlightedNode,g=d?s.indexOf(d):-1,f=this.root.loop.current;let a;if(t.key===mt?a=Je(s,g,f):t.key===at?a=Qe(s,g,f):t.key===Ne?a=Ze(s,g,10,f):t.key===Pe?a=$e(s,g,10,f):t.key===Ce?a=s[0]:t.key===xe&&(a=s[s.length-1]),!a)return;this.root.setHighlightedNode(a);return}const e=t.ctrlKey||t.altKey||t.metaKey,r=t.key.length===1;if(t.code==="Space")return;const l=this.root.getCandidateNodes();if(t.key!==_e){if(!e&&r){o(this,ht).handleTypeaheadSearch(t.key,l);return}this.root.highlightedNode||this.root.setHighlightedToFirstCandidate()}}onclick(t){t.currentTarget.focus()}get props(){return n(o(this,Jt))}}dt=new WeakMap,Tt=new WeakMap,ht=new WeakMap,ut=new WeakMap,lt=new WeakSet,Me=function(){this.root.open.current=!0,o(this,ut).resetTypeahead(),o(this,ht).resetTypeahead()},ge=function(t){Ft(this,lt,Me).call(this),this.root.triggerPointerDownPos={x:Math.round(t.pageX),y:Math.round(t.pageY)}},Jt=new WeakMap;var At,Ht,Qt,Zt,$t;class wr{constructor(t,e){v(this,"id");v(this,"ref");u(this,At,A(null));v(this,"root");u(this,Ht,A(!1));u(this,Qt,S(()=>this.root.isCombobox?{"--bits-combobox-content-transform-origin":"var(--bits-floating-transform-origin)","--bits-combobox-content-available-width":"var(--bits-floating-available-width)","--bits-combobox-content-available-height":"var(--bits-floating-available-height)","--bits-combobox-anchor-width":"var(--bits-floating-anchor-width)","--bits-combobox-anchor-height":"var(--bits-floating-anchor-height)"}:{"--bits-select-content-transform-origin":"var(--bits-floating-transform-origin)","--bits-select-content-available-width":"var(--bits-floating-available-width)","--bits-select-content-available-height":"var(--bits-floating-available-height)","--bits-select-anchor-width":"var(--bits-floating-anchor-width)","--bits-select-anchor-height":"var(--bits-floating-anchor-height)"}));u(this,Zt,S(()=>({open:this.root.open.current})));u(this,$t,S(()=>({id:this.id.current,role:"listbox","data-state":ke(this.root.open.current),[this.root.bitsAttrs.content]:"",style:{display:"flex",flexDirection:"column",outline:"none",boxSizing:"border-box",pointerEvents:"auto",...n(o(this,Qt))},onpointermove:this.onpointermove})));this.root=e,this.id=t.id,this.ref=t.ref,Kt({id:this.id,ref:this.ref,onRefChange:r=>{this.root.contentNode=r},deps:()=>this.root.open.current}),L(()=>()=>{this.root.contentNode=null}),L(()=>{this.root.open.current===!1&&(this.isPositioned=!1)}),this.onpointermove=this.onpointermove.bind(this),this.handleInteractOutside=this.handleInteractOutside.bind(this)}get viewportNode(){return n(o(this,At))}set viewportNode(t){H(o(this,At),D(t))}get isPositioned(){return n(o(this,Ht))}set isPositioned(t){H(o(this,Ht),D(t))}onpointermove(t){this.root.isUsingKeyboard=!1}handleInteractOutside(t){(t.target===this.root.triggerNode||t.target===this.root.inputNode)&&t.preventDefault()}get snippetProps(){return n(o(this,Zt))}get props(){return n(o(this,$t))}}At=new WeakMap,Ht=new WeakMap,Qt=new WeakMap,Zt=new WeakMap,$t=new WeakMap;var ct,st,te,ee,kt,Dt,re,ie;class _r{constructor(t,e){u(this,ct);u(this,st);v(this,"root");v(this,"value");v(this,"label");v(this,"onHighlight");v(this,"onUnhighlight");v(this,"disabled");u(this,te,S(()=>this.root.includesItem(this.value.current)));u(this,ee,S(()=>this.root.highlightedValue===this.value.current));v(this,"prevHighlighted",new je(()=>this.isHighlighted));u(this,kt,A(""));u(this,Dt,A(!1));u(this,re,S(()=>({selected:this.isSelected,highlighted:this.isHighlighted})));u(this,ie,S(()=>({id:o(this,ct).current,role:"option","aria-selected":this.root.includesItem(this.value.current)?"true":void 0,"data-value":this.value.current,"data-disabled":De(this.disabled.current),"data-highlighted":this.root.highlightedValue===this.value.current?"":void 0,"data-selected":this.root.includesItem(this.value.current)?"":void 0,"data-label":this.label.current,[this.root.bitsAttrs.item]:"",onpointermove:this.onpointermove,onpointerdown:this.onpointerdown,onpointerup:this.onpointerup})));this.root=e,this.value=t.value,this.disabled=t.disabled,this.label=t.label,this.onHighlight=t.onHighlight,this.onUnhighlight=t.onUnhighlight,W(this,ct,t.id),W(this,st,t.ref),L(()=>{this.isHighlighted?this.onHighlight.current():this.prevHighlighted.current&&this.onUnhighlight.current()}),Kt({id:o(this,ct),ref:o(this,st)}),L(()=>{this.mounted&&he(()=>this.root.setInitialHighlightedNode())}),this.onpointerdown=this.onpointerdown.bind(this),this.onpointerup=this.onpointerup.bind(this),this.onpointermove=this.onpointermove.bind(this)}get isSelected(){return n(o(this,te))}get isHighlighted(){return n(o(this,ee))}get textId(){return n(o(this,kt))}set textId(t){H(o(this,kt),D(t))}get mounted(){return n(o(this,Dt))}set mounted(t){H(o(this,Dt),D(t))}get snippetProps(){return n(o(this,re))}onpointerdown(t){t.preventDefault()}onpointerup(t){if(t.defaultPrevented||(t.preventDefault(),this.disabled.current))return;const e=this.value.current===this.root.value.current;if(!this.root.allowDeselect.current&&e&&!this.root.isMulti){this.root.handleClose();return}this.root.toggleItem(this.value.current,this.label.current),!this.root.isMulti&&!e&&this.root.handleClose()}onpointermove(t){this.root.highlightedNode!==o(this,st).current&&this.root.setHighlightedNode(o(this,st).current)}get props(){return n(o(this,ie))}}ct=new WeakMap,st=new WeakMap,te=new WeakMap,ee=new WeakMap,kt=new WeakMap,Dt=new WeakMap,re=new WeakMap,ie=new WeakMap;var Ot,oe,ne;class Sr{constructor(t,e){u(this,Ot);v(this,"root");u(this,oe,S(()=>this.root.name.current!==""));u(this,ne,S(()=>({disabled:lr(this.root.disabled.current),required:ar(this.root.required.current),name:this.root.name.current,value:o(this,Ot).current,style:ze(qe),tabindex:-1,onfocus:this.onfocus})));this.root=e,W(this,Ot,t.value),this.onfocus=this.onfocus.bind(this)}get shouldRender(){return n(o(this,oe))}onfocus(t){var e,r;t.preventDefault(),this.root.isCombobox?(r=this.root.inputNode)==null||r.focus():(e=this.root.triggerNode)==null||e.focus()}get props(){return n(o(this,ne))}}Ot=new WeakMap,oe=new WeakMap,ne=new WeakMap;var gt,Mt,Rt,se;class yr{constructor(t,e){u(this,gt);u(this,Mt);v(this,"root");v(this,"content");u(this,Rt,A(0));u(this,se,S(()=>({id:o(this,gt).current,role:"presentation",[this.root.bitsAttrs.viewport]:"",style:{position:"relative",flex:1,overflow:"auto"}})));W(this,gt,t.id),W(this,Mt,t.ref),this.content=e,this.root=e.root,Kt({id:o(this,gt),ref:o(this,Mt),onRefChange:r=>{this.content.viewportNode=r},deps:()=>this.root.open.current})}get prevScrollTop(){return n(o(this,Rt))}set prevScrollTop(t){H(o(this,Rt),D(t))}get props(){return n(o(this,se))}}gt=new WeakMap,Mt=new WeakMap,Rt=new WeakMap,se=new WeakMap;var Vt,le;class Re{constructor(t,e){v(this,"id");v(this,"ref");v(this,"content");v(this,"root");u(this,Vt,A(null));v(this,"onAutoScroll",et);v(this,"mounted");u(this,le,S(()=>({id:this.id.current,"aria-hidden":sr(!0),style:{flexShrink:0},onpointerdown:this.onpointerdown,onpointermove:this.onpointermove,onpointerleave:this.onpointerleave})));this.ref=t.ref,this.id=t.id,this.mounted=t.mounted,this.content=e,this.root=e.root,Kt({id:this.id,ref:this.ref,deps:()=>this.mounted.current}),L(()=>{if(!this.mounted.current)return;const r=he(()=>this.root.highlightedNode);r==null||r.scrollIntoView({block:"nearest"})}),this.onpointerdown=this.onpointerdown.bind(this),this.onpointermove=this.onpointermove.bind(this),this.onpointerleave=this.onpointerleave.bind(this)}get autoScrollTimer(){return n(o(this,Vt))}set autoScrollTimer(t){H(o(this,Vt),D(t))}clearAutoScrollTimer(){this.autoScrollTimer!==null&&(window.clearInterval(this.autoScrollTimer),this.autoScrollTimer=null)}onpointerdown(t){this.autoScrollTimer===null&&(this.autoScrollTimer=window.setInterval(()=>{this.onAutoScroll()},50))}onpointermove(t){this.autoScrollTimer===null&&(this.autoScrollTimer=window.setInterval(()=>{this.onAutoScroll()},50))}onpointerleave(t){this.clearAutoScrollTimer()}get props(){return n(o(this,le))}}Vt=new WeakMap,le=new WeakMap;var Et,ae;class Nr{constructor(t){v(this,"state");v(this,"content");v(this,"root");u(this,Et,A(!1));v(this,"handleAutoScroll",()=>{vt(()=>{const t=this.content.viewportNode,e=this.root.highlightedNode;!t||!e||(t.scrollTop=t.scrollTop+e.offsetHeight)})});u(this,ae,S(()=>({...this.state.props,[this.root.bitsAttrs["scroll-down-button"]]:""})));this.state=t,this.content=t.content,this.root=t.root,this.state.onAutoScroll=this.handleAutoScroll,L(()=>{const e=this.content.viewportNode,r=this.content.isPositioned;if(!e||!r)return;let l=et;return he(()=>{const s=()=>{vt(()=>{const d=e.scrollHeight-e.clientHeight,g=Number.parseInt(getComputedStyle(e).paddingTop,10);this.canScrollDown=Math.ceil(e.scrollTop)<d-g})};s(),l=Ie(e,"scroll",s)}),l}),L(()=>{this.state.mounted.current||this.state.clearAutoScrollTimer()})}get canScrollDown(){return n(o(this,Et))}set canScrollDown(t){H(o(this,Et),D(t))}get props(){return n(o(this,ae))}}Et=new WeakMap,ae=new WeakMap;var Ut,de;class Pr{constructor(t){v(this,"state");v(this,"content");v(this,"root");u(this,Ut,A(!1));v(this,"handleAutoScroll",()=>{vt(()=>{const t=this.content.viewportNode,e=this.root.highlightedNode;!t||!e||(t.scrollTop=t.scrollTop-e.offsetHeight)})});u(this,de,S(()=>({...this.state.props,[this.root.bitsAttrs["scroll-up-button"]]:""})));this.state=t,this.content=t.content,this.root=t.root,this.state.onAutoScroll=this.handleAutoScroll,L(()=>{const e=this.content.viewportNode,r=this.content.isPositioned;if(!e||!r)return;let l=et;return he(()=>{const s=()=>{const d=Number.parseInt(getComputedStyle(e).paddingTop,10);this.canScrollUp=e.scrollTop-d>0};s(),l=Ie(e,"scroll",s)}),l}),L(()=>{this.state.mounted.current||this.state.clearAutoScrollTimer()})}get canScrollUp(){return n(o(this,Ut))}set canScrollUp(t){H(o(this,Ut),D(t))}get props(){return n(o(this,de))}}Ut=new WeakMap,de=new WeakMap;const[Cr,ue]=fe(["Select.Root","Combobox.Root"]);fe(["Select.Group","Combobox.Group"]);const[xr,pe]=fe(["Select.Content","Combobox.Content"]);function Ir(i){const{type:t,...e}=i,r=t==="single"?new pr(e):new mr(e);return Cr(r)}function Tr(i){return xr(new wr(i,ue()))}function Ar(i){return new br(i,ue())}function Hr(i){return new _r(i,ue())}function kr(i){return new yr(i,pe())}function Dr(i){return new Pr(new Re(i,pe()))}function Or(i){return new Nr(new Re(i,pe()))}function Mr(i){return new Sr(i,ue())}const Rr=["trigger","content","item","viewport","scroll-up-button","scroll-down-button","group","group-label","separator","arrow","input","content-wrapper","item-text","value"];function Vr(i){const t=i.isCombobox,e={};for(const r of Rr)e[r]=t?`data-combobox-${r}`:`data-select-${r}`;return e}var Er=R("<input>");function Se(i,t){U(t,!0);let e=p(t,"value",15,"");const r=Mr({value:C.with(()=>e())});ur(i,{children:(l,s)=>{var d=P(),g=_(d);M(g,()=>r.shouldRender,f=>{var a=Er();Le(a);let h;G(()=>h=tt(a,h,{...r.props})),dr(a,e),c(f,a)}),c(l,d)},$$slots:{default:!0}}),K()}var Ur=R("<div><!></div>"),Kr=R("<div><!></div>");function Br(i,t){U(t,!0);let e=p(t,"id",19,pt),r=p(t,"ref",15,null),l=p(t,"forceMount",3,!1),s=p(t,"side",3,"bottom"),d=p(t,"onInteractOutside",3,et),g=p(t,"onEscapeKeydown",3,et),f=p(t,"preventScroll",3,!1),a=z(t,["$$slots","$$events","$$legacy","id","ref","forceMount","side","onInteractOutside","onEscapeKeydown","children","child","preventScroll"]);const h=Tr({id:C.with(()=>e()),ref:C.with(()=>r(),m=>r(m))}),b=S(()=>Q(a,h.props));function x(m){h.handleInteractOutside(m),!m.defaultPrevented&&(d()(m),!m.defaultPrevented&&h.root.handleClose())}function O(m){g()(m),!m.defaultPrevented&&h.root.handleClose()}var N=P(),w=_(N);M(w,l,m=>{er(m,Y(()=>n(b),{get side(){return s()},get enabled(){return h.root.open.current},get id(){return e()},onInteractOutside:x,onEscapeKeydown:O,onOpenAutoFocus:T=>T.preventDefault(),onCloseAutoFocus:T=>T.preventDefault(),trapFocus:!1,loop:!1,get preventScroll(){return f()},onPlaced:()=>h.isPositioned=!0,forceMount:!0,popper:(T,y)=>{let B=()=>y==null?void 0:y().props;var V=P();const F=S(()=>Q(B(),{style:h.props.style}));var rt=_(V);M(rt,()=>t.child,j=>{var E=P(),X=_(E);k(X,()=>t.child,()=>({props:n(F),...h.snippetProps})),c(j,E)},j=>{var E=Ur();let X;var it=Z(E);k(it,()=>t.children??q),$(E),G(()=>X=tt(E,X,{...n(F)})),c(j,E)}),c(T,V)},$$slots:{popper:!0}}))},m=>{var I=P(),T=_(I);M(T,()=>!l(),y=>{tr(y,Y(()=>n(b),{get side(){return s()},get present(){return h.root.open.current},get id(){return e()},onInteractOutside:x,onEscapeKeydown:O,onOpenAutoFocus:V=>V.preventDefault(),onCloseAutoFocus:V=>V.preventDefault(),trapFocus:!1,loop:!1,get preventScroll(){return f()},onPlaced:()=>h.isPositioned=!0,forceMount:!1,popper:(V,F)=>{let rt=()=>F==null?void 0:F().props;var j=P();const E=S(()=>Q(rt(),{style:h.props.style}));var X=_(j);M(X,()=>t.child,it=>{var J=P(),Bt=_(J);k(Bt,()=>t.child,()=>({props:n(E),...h.snippetProps})),c(it,J)},it=>{var J=Kr();let Bt;var Ve=Z(J);k(Ve,()=>t.children??q),$(J),G(()=>Bt=tt(J,Bt,{...n(E)})),c(it,J)}),c(V,j)},$$slots:{popper:!0}}))},null,!0),c(m,I)}),c(i,N),K()}var Fr=R("<div><!></div>"),Lr=R("<!> <!>",1);function zr(i,t){U(t,!0);let e=p(t,"id",19,pt),r=p(t,"ref",15,null),l=p(t,"label",19,()=>t.value),s=p(t,"disabled",3,!1),d=p(t,"onHighlight",3,et),g=p(t,"onUnhighlight",3,et),f=z(t,["$$slots","$$events","$$legacy","id","ref","value","label","disabled","children","child","onHighlight","onUnhighlight"]);const a=Hr({id:C.with(()=>e()),ref:C.with(()=>r(),N=>r(N)),value:C.with(()=>t.value),disabled:C.with(()=>s()),label:C.with(()=>l()),onHighlight:C.with(()=>d()),onUnhighlight:C.with(()=>g())}),h=S(()=>Q(f,a.props));var b=Lr(),x=_(b);M(x,()=>t.child,N=>{var w=P(),m=_(w);k(m,()=>t.child,()=>({props:n(h),...a.snippetProps})),c(N,w)},N=>{var w=Fr();let m;var I=Z(w);k(I,()=>t.children??q,()=>a.snippetProps),$(w),G(()=>m=tt(w,m,{...n(h)})),c(N,w)});var O=nt(x,2);ve(O,{onMountedChange:N=>{a.mounted=N}}),c(i,b),K()}var qr=R("<div><!></div>");function jr(i,t){U(t,!0);let e=p(t,"id",19,pt),r=p(t,"ref",15,null),l=z(t,["$$slots","$$events","$$legacy","id","ref","children","child"]);const s=kr({id:C.with(()=>e()),ref:C.with(()=>r(),a=>r(a))}),d=S(()=>Q(l,s.props));var g=P(),f=_(g);M(f,()=>t.child,a=>{var h=P(),b=_(h);k(b,()=>t.child,()=>({props:n(d)})),c(a,h)},a=>{var h=qr();let b;var x=Z(h);k(x,()=>t.children??q),$(h),G(()=>b=tt(h,b,{...n(d)},"svelte-uf90i5")),c(a,h)}),c(i,g),K()}var Wr=R("<div><!></div>"),Gr=R("<!> <!>",1);function Yr(i,t){U(t,!0);let e=p(t,"id",19,pt),r=p(t,"ref",15,null),l=z(t,["$$slots","$$events","$$legacy","id","ref","child","children"]),s=A(!1);const d=Or({id:C.with(()=>e()),mounted:C.with(()=>n(s)),ref:C.with(()=>r(),h=>r(h))}),g=S(()=>Q(l,d.props));var f=P(),a=_(f);M(a,()=>d.canScrollDown,h=>{var b=Gr(),x=_(b);ve(x,{onMountedChange:N=>H(s,D(N))});var O=nt(x,2);M(O,()=>t.child,N=>{var w=P(),m=_(w);k(m,()=>t.child,()=>({props:l})),c(N,w)},N=>{var w=Wr();let m;var I=Z(w);k(I,()=>t.children??q),$(w),G(()=>m=tt(w,m,{...n(g)})),c(N,w)}),c(h,b)}),c(i,f),K()}var Xr=R("<div><!></div>"),Jr=R("<!> <!>",1);function Qr(i,t){U(t,!0);let e=p(t,"id",19,pt),r=p(t,"ref",15,null),l=z(t,["$$slots","$$events","$$legacy","id","ref","child","children"]),s=A(!1);const d=Dr({id:C.with(()=>e()),mounted:C.with(()=>n(s)),ref:C.with(()=>r(),h=>r(h))}),g=S(()=>Q(l,d.props));var f=P(),a=_(f);M(a,()=>d.canScrollUp,h=>{var b=Jr(),x=_(b);ve(x,{onMountedChange:N=>H(s,D(N))});var O=nt(x,2);M(O,()=>t.child,N=>{var w=P(),m=_(w);k(m,()=>t.child,()=>({props:l})),c(N,w)},N=>{var w=Xr();let m;var I=Z(w);k(I,()=>t.children??q),$(w),G(()=>m=tt(w,m,{...n(g)})),c(N,w)}),c(h,b)}),c(i,f),K()}var Zr=R("<!> <!>",1);function $r(i,t){U(t,!0);let e=p(t,"value",15),r=p(t,"onValueChange",3,et),l=p(t,"name",3,""),s=p(t,"disabled",3,!1),d=p(t,"open",15,!1),g=p(t,"onOpenChange",3,et),f=p(t,"loop",3,!1),a=p(t,"scrollAlignment",3,"nearest"),h=p(t,"required",3,!1),b=p(t,"controlledOpen",3,!1),x=p(t,"controlledValue",3,!1),O=p(t,"items",19,()=>[]),N=p(t,"allowDeselect",3,!0);if(e()===void 0){const y=t.type==="single"?"":[];x()?r()(y):e(y)}const w=Ir({type:t.type,value:C.with(()=>e(),y=>{x()||e(y),r()(y)}),disabled:C.with(()=>s()),required:C.with(()=>h()),open:C.with(()=>d(),y=>{b()||d(y),g()(y)}),loop:C.with(()=>f()),scrollAlignment:C.with(()=>a()),name:C.with(()=>l()),isCombobox:!1,items:C.with(()=>O()),allowDeselect:C.with(()=>N())});var m=Zr(),I=_(m);rr(I,{children:(y,B)=>{var V=P(),F=_(V);k(F,()=>t.children??q),c(y,V)},$$slots:{default:!0}});var T=nt(I,2);M(T,()=>Array.isArray(w.value.current),y=>{var B=P(),V=_(B);M(V,()=>w.value.current.length,F=>{var rt=P(),j=_(rt);or(j,17,()=>w.value.current,nr,(E,X)=>{Se(E,{get value(){return n(X)}})}),c(F,rt)}),c(y,B)},y=>{Se(y,{get value(){return w.value.current},set value(B){w.value.current=B}})}),c(i,m),K()}var ti=R("<button><!></button>");function ei(i,t){U(t,!0);let e=p(t,"id",19,pt),r=p(t,"ref",15,null),l=p(t,"type",3,"button"),s=z(t,["$$slots","$$events","$$legacy","id","ref","child","children","type"]);const d=Ar({id:C.with(()=>e()),ref:C.with(()=>r(),h=>r(h))}),g=S(()=>Q(s,d.props,{type:l()}));var f=P(),a=_(f);ot(a,()=>ir,(h,b)=>{b(h,{get id(){return e()},children:(x,O)=>{var N=P(),w=_(N);M(w,()=>t.child,m=>{var I=P(),T=_(I);k(T,()=>t.child,()=>({props:n(g)})),c(m,I)},m=>{var I=ti();let T;var y=Z(I);k(y,()=>t.children??q),$(I),G(()=>T=tt(I,T,{...n(g)})),c(m,I)}),c(x,N)},$$slots:{default:!0}})}),c(i,f),K()}function ri(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);Te(i,Y({name:"check"},()=>e,{iconNode:[["path",{d:"M20 6 9 17l-5-5"}]],children:(l,s)=>{var d=P(),g=_(d);Ae(g,t,"default",{},null),c(l,d)},$$slots:{default:!0}}))}var ii=R('<span class="absolute left-2 flex size-3.5 items-center justify-center"><!></span> <!>',1);function xi(i,t){U(t,!0);let e=p(t,"ref",15,null),r=z(t,["$$slots","$$events","$$legacy","ref","class","value","label","children"]);var l=P(),s=_(l),d=S(()=>ft("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t.class));ot(s,()=>zr,(g,f)=>{f(g,Y({get ref(){return e()},set ref(h){e(h)},get value(){return t.value},get class(){return n(d)}},()=>r,{children:(h,b)=>{let x=()=>b==null?void 0:b().selected,O=()=>b==null?void 0:b().highlighted;var N=ii(),w=_(N),m=Z(w);M(m,x,T=>{ri(T,{class:"size-4"})}),$(w);var I=nt(w,2);M(I,()=>t.children,T=>{var y=P(),B=_(y);k(B,()=>t.children,()=>({selected:x(),highlighted:O()})),c(T,y)},T=>{var y=Fe();G(()=>Be(y,t.label||t.value)),c(T,y)}),c(h,N)},$$slots:{default:!0}}))}),c(i,l),K()}function oi(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);Te(i,Y({name:"chevron-up"},()=>e,{iconNode:[["path",{d:"m18 15-6-6-6 6"}]],children:(l,s)=>{var d=P(),g=_(d);Ae(g,t,"default",{},null),c(l,d)},$$slots:{default:!0}}))}function ni(i,t){U(t,!0);let e=p(t,"ref",15,null),r=z(t,["$$slots","$$events","$$legacy","ref","class"]);var l=P(),s=_(l),d=S(()=>ft("flex cursor-default items-center justify-center py-1",t.class));ot(s,()=>Qr,(g,f)=>{f(g,Y({get ref(){return e()},set ref(a){e(a)},get class(){return n(d)}},()=>r,{children:(a,h)=>{oi(a,{class:"size-4"})},$$slots:{default:!0}}))}),c(i,l),K()}function si(i,t){U(t,!0);let e=p(t,"ref",15,null),r=z(t,["$$slots","$$events","$$legacy","ref","class"]);var l=P(),s=_(l),d=S(()=>ft("flex cursor-default items-center justify-center py-1",t.class));ot(s,()=>Yr,(g,f)=>{f(g,Y({get ref(){return e()},set ref(a){e(a)},get class(){return n(d)}},()=>r,{children:(a,h)=>{He(a,{class:"size-4"})},$$slots:{default:!0}}))}),c(i,l),K()}var li=R("<!> <!> <!>",1);function Ii(i,t){U(t,!0);let e=p(t,"ref",15,null),r=p(t,"sideOffset",3,4),l=z(t,["$$slots","$$events","$$legacy","ref","class","sideOffset","portalProps","children"]);var s=P(),d=_(s);ot(d,()=>We,(g,f)=>{f(g,Y(()=>t.portalProps,{children:(a,h)=>{var b=P(),x=_(b),O=S(()=>ft("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-popover text-popover-foreground relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t.class));ot(x,()=>Br,(N,w)=>{w(N,Y({get ref(){return e()},set ref(m){e(m)},get sideOffset(){return r()},get class(){return n(O)}},()=>l,{children:(m,I)=>{var T=li(),y=_(T);ni(y,{});var B=nt(y,2),V=S(()=>ft("h-[var(--bits-select-anchor-height)] w-full min-w-[var(--bits-select-anchor-width)] p-1"));ot(B,()=>jr,(rt,j)=>{j(rt,{get class(){return n(V)},children:(E,X)=>{var it=P(),J=_(it);k(J,()=>t.children??q),c(E,it)},$$slots:{default:!0}})});var F=nt(B,2);si(F,{}),c(m,T)},$$slots:{default:!0}}))}),c(a,b)},$$slots:{default:!0}}))}),c(i,s),K()}var ai=R("<!> <!>",1);function Ti(i,t){U(t,!0);let e=p(t,"ref",15,null),r=z(t,["$$slots","$$events","$$legacy","ref","class","children"]);var l=P(),s=_(l),d=S(()=>ft("border-input bg-background ring-offset-background data-[placeholder]:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t.class));ot(s,()=>ei,(g,f)=>{f(g,Y({get ref(){return e()},set ref(a){e(a)},get class(){return n(d)}},()=>r,{children:(a,h)=>{var b=ai(),x=_(b);k(x,()=>t.children??q);var O=nt(x,2);He(O,{class:"size-4 opacity-50"}),c(a,b)},$$slots:{default:!0}}))}),c(i,l),K()}const Ai=$r;export{Ai as R,Ti as S,Ii as a,xi as b};
