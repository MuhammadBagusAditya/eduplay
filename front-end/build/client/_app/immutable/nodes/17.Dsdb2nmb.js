import"../chunks/disclose-version.Bg9kRutz.js";import{p as yt,u as wt,a as qt,t as O,$ as kt,h as jt,b as nt,g as a,c as C,f as u,n as T,s,r as z,e as dt,d as H}from"../chunks/runtime.Bp4x7A-a.js";import{p as lt,h as Bt,i as _t,e as It,b as D}from"../chunks/props.DpK8ESsy.js";import{e as pt,i as $t}from"../chunks/lifecycle.eq67AOaA.js";import{a as r,b as R,c as P,t as J}from"../chunks/template.DQ3Ggw9n.js";import{c as o}from"../chunks/svelte-component.CVO9o64T.js";import{r as Qt,b as St,c as Ot}from"../chunks/utils.Dqu1-Wdg.js";import{s as Ct}from"../chunks/class.CkgP5SV_.js";import{C as ht,a as xt}from"../chunks/card-content.C5_W8gaf.js";import{B as Tt,a as Dt,b as Y,c as tt,d as et,e as Jt}from"../chunks/breadcrumb-page.BYoj9mJR.js";import{B as L,b as Nt}from"../chunks/button.DODvjd4i.js";import{I as at}from"../chunks/Icon.CHCRpPhx.js";import{D as gt}from"../chunks/datetime.DcQSltNB.js";import"../chunks/legacy.CtaTdtmd.js";import{t as At}from"../chunks/Toaster.svelte_svelte_type_style_lang.S0vXD1Br.js";import{i as Et}from"../chunks/entry.LQerjGIt.js";var Kt=R("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1),Ft=R("<span> </span>"),Mt=R('<span class="hidden sm:block">Submit</span> <!>',1),Vt=R('<h2 class="mb-4 flex items-center justify-between gap-3 text-lg font-bold text-primary sm:text-xl">Soal <span class="inline-flex items-center gap-2 text-sm font-normal text-slate-600 sm:text-base"><!> </span></h2> <div class="mb-4 flex flex-col gap-3 text-sm text-slate-700 sm:text-base"> </div> <div class="mb-4 flex flex-col gap-3"></div> <div class="flex justify-between gap-4"><div class="flex gap-4"><!> <!></div> <form method="post"><input type="hidden" name="answers"> <!></form></div>',1),Gt=R('<h2 class="mb-4 flex items-center justify-between gap-3 text-lg font-bold text-primary sm:text-xl">Pergi ke</h2> <div class="grid grid-cols-5 gap-3 sm:grid-cols-10"></div>',1),Ht=R('<div class="grid grid-cols-1 grid-rows-[repeat(auto-fit,_max-content)] gap-6"><!> <!> <!></div>');function le(bt,v){yt(v,!0);let N=dt(0),U=H(()=>{var n;return(n=v.data.quiz.expand)==null?void 0:n.questions_via_quiz[a(N)]}),ut=dt("00:00:00"),rt=dt(void 0),st={},y=lt({}),zt=H(()=>JSON.stringify(y));async function ct(){try{const n=await fetch("/dashboard/quizzes/"+v.data.quiz.id+"/start",{method:"POST",body:JSON.stringify({answerIds:y}),headers:{"Content-Type":"application/json"}}),c=await n.json();if(n.status>399)throw new Error(c.message);return!0}catch(n){return At.error("Alert",{description:n.message,dismissable:!0}),!1}}async function ot(n){nt(N,lt(n)),!(Object.keys(y).length===0||JSON.stringify(y)===JSON.stringify(st))&&await ct()&&(await Et("userQuiz"),st={...y})}wt(()=>{jt(()=>{var c;(c=v.data.quiz.expand)==null||c.questions_via_quiz.forEach(_=>{var p;const A=v.data.userQuiz.answers;for(const I of A)(p=_.expand)!=null&&p.answers_via_question.reduce((E,K)=>[...E,K.id],[]).includes(I)&&(y[_.id]=I)}),st={...y}});const n=setInterval(async()=>{var A;const c=gt.now(),_=gt.fromMillis(v.data.userQuiz.endTime);nt(ut,lt(_.diff(c,["hours","minutes","seconds"]).toFormat("hh:mm:ss"))),_.diff(c).toMillis()<0&&(await ct(),(A=a(rt))==null||A.submit())},1e3);return()=>{clearInterval(n)}});var it=Ht();Bt(n=>{O(()=>kt.title=`Eduplay - Kuis ${v.data.quiz.name??""}`)});var mt=C(it);o(mt,()=>Tt,(n,c)=>{c(n,{class:"",children:(_,A)=>{var p=P(),I=u(p);o(I,()=>Dt,(E,K)=>{K(E,{children:(W,vt)=>{var Q=Kt(),w=u(Q);o(w,()=>Y,(e,i)=>{i(e,{children:($,G)=>{var d=P(),m=u(d);o(m,()=>tt,(h,t)=>{t(h,{href:"/dashboard",children:(l,x)=>{T();var f=J("Dashboard");r(l,f)},$$slots:{default:!0}})}),r($,d)},$$slots:{default:!0}})});var g=s(w,2);o(g,()=>et,(e,i)=>{i(e,{})});var S=s(g,2);o(S,()=>Y,(e,i)=>{i(e,{children:($,G)=>{var d=P(),m=u(d);o(m,()=>tt,(h,t)=>{t(h,{href:"/dashboard/classes",children:(l,x)=>{T();var f=J("Kelas");r(l,f)},$$slots:{default:!0}})}),r($,d)},$$slots:{default:!0}})});var F=s(S,2);o(F,()=>et,(e,i)=>{i(e,{})});var q=s(F,2);o(q,()=>Y,(e,i)=>{i(e,{children:($,G)=>{var d=P(),m=u(d),h=H(()=>{var t;return"/dashboard/classes/"+((t=v.data.userQuiz.expand)==null?void 0:t.quiz.classroom)});o(m,()=>tt,(t,l)=>{l(t,{get href(){return a(h)},class:"capitalize",children:(x,f)=>{T();var j=J();O(()=>{var B,X;return D(j,(X=(B=v.data.userQuiz.expand)==null?void 0:B.quiz.expand)==null?void 0:X.classroom.name)}),r(x,j)},$$slots:{default:!0}})}),r($,d)},$$slots:{default:!0}})});var V=s(q,2);o(V,()=>et,(e,i)=>{i(e,{})});var b=s(V,2);o(b,()=>Y,(e,i)=>{i(e,{children:($,G)=>{var d=P(),m=u(d);o(m,()=>tt,(h,t)=>{t(h,{href:"/dashboard/quizzes",children:(l,x)=>{T();var f=J("Kuis");r(l,f)},$$slots:{default:!0}})}),r($,d)},$$slots:{default:!0}})});var k=s(b,2);o(k,()=>et,(e,i)=>{i(e,{})});var M=s(k,2);o(M,()=>Y,(e,i)=>{i(e,{children:($,G)=>{var d=P(),m=u(d);o(m,()=>Jt,(h,t)=>{t(h,{class:"capitalize",children:(l,x)=>{T();var f=J();O(()=>{var j;return D(f,(j=v.data.userQuiz.expand)==null?void 0:j.quiz.name)}),r(l,f)},$$slots:{default:!0}})}),r($,d)},$$slots:{default:!0}})}),r(W,Q)},$$slots:{default:!0}})}),r(_,p)},$$slots:{default:!0}})});var ft=s(mt,2);o(ft,()=>ht,(n,c)=>{c(n,{children:(_,A)=>{var p=P(),I=u(p);o(I,()=>xt,(E,K)=>{K(E,{children:(W,vt)=>{var Q=Vt(),w=u(Q),g=s(C(w)),S=C(g);at(S,{icon:"mdi:clock",class:"text-lg"});var F=s(S);z(g),z(w);var q=s(w,2),V=C(q,!0);z(q);var b=s(q,2);pt(b,21,()=>{var t;return(t=a(U).expand)==null?void 0:t.answers_via_question},$t,(t,l)=>{var x=P(),f=u(x);_t(f,()=>y[a(U).id]===a(l).id,j=>{var B=Ft();const X=H(()=>Ot(Nt({variant:"default"}),"justify-start"));var Z=C(B,!0);z(B),O(()=>{Ct(B,a(X)),D(Z,a(l).text)}),r(j,B)},j=>{L(j,{class:"justify-start",variant:"outline",onclick:()=>y[a(U).id]=a(l).id,children:(B,X)=>{T();var Z=J();O(()=>D(Z,a(l).text)),r(B,Z)},$$slots:{default:!0}})}),r(t,x)}),z(b);var k=s(b,2),M=C(k),e=C(M),i=H(()=>a(N)===0);L(e,{variant:"outline",onclick:()=>ot(a(N)-1),get disabled(){return a(i)},children:(t,l)=>{at(t,{icon:"mdi:arrow-left"})},$$slots:{default:!0}});var $=s(e,2),G=H(()=>{var t;return a(N)===((t=v.data.quiz.expand)==null?void 0:t.questions_via_quiz.length)-1});L($,{variant:"outline",onclick:()=>ot(a(N)+1),get disabled(){return a(G)},children:(t,l)=>{at(t,{icon:"mdi:arrow-right"})},$$slots:{default:!0}}),z(M);var d=s(M,2),m=C(d);Qt(m);var h=s(m,2);L(h,{type:"submit",children:(t,l)=>{var x=Mt(),f=s(u(x),2);at(f,{icon:"mdi:send"}),r(t,x)},$$slots:{default:!0}}),z(d),It(d,t=>nt(rt,t),()=>a(rt)),z(k),O(()=>{D(F,` Sisa ${a(ut)??""}`),D(V,`${a(U).order}. ${a(U).name}`),St(m,a(zt))}),r(W,Q)},$$slots:{default:!0}})}),r(_,p)},$$slots:{default:!0}})});var Pt=s(ft,2);o(Pt,()=>ht,(n,c)=>{c(n,{children:(_,A)=>{var p=P(),I=u(p);o(I,()=>xt,(E,K)=>{K(E,{children:(W,vt)=>{var Q=Gt(),w=s(u(Q),2);pt(w,21,()=>{var g;return(g=v.data.quiz.expand)==null?void 0:g.questions_via_quiz},$t,(g,S,F)=>{var q=P(),V=u(q);_t(V,()=>a(N)===F,b=>{L(b,{children:(k,M)=>{T();var e=J();O(()=>D(e,a(S).order)),r(k,e)},$$slots:{default:!0}})},b=>{L(b,{variant:"outline",class:"text-slate-700",onclick:()=>ot(F),children:(k,M)=>{T();var e=J();O(()=>D(e,a(S).order)),r(k,e)},$$slots:{default:!0}})}),r(g,q)}),z(w),r(W,Q)},$$slots:{default:!0}})}),r(_,p)},$$slots:{default:!0}})}),z(it),r(bt,it),qt()}export{le as component};