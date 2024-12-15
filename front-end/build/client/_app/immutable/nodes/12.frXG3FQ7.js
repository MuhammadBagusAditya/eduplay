import"../chunks/disclose-version.Bg9kRutz.js";import{p as se,f as l,a as le,s as a,c as r,r as s,n as k,t as N,g as P,d as Ge,$ as Je}from"../chunks/runtime.Bp4x7A-a.js";import{b as q,i as Z,h as Ne}from"../chunks/props.DpK8ESsy.js";import{c as y,a as e,b as _,t as O}from"../chunks/template.DQ3Ggw9n.js";import{c as o}from"../chunks/svelte-component.CVO9o64T.js";import{s as me,c as Oe}from"../chunks/utils.Dqu1-Wdg.js";import{B as Qe,a as Ue,b as je,c as Ae,d as De,e as Ve}from"../chunks/breadcrumb-page.BYoj9mJR.js";import{R as Ye,T as He,a as ce,b as ve}from"../chunks/index.CSSQKwO2.js";import{I as Q}from"../chunks/Icon.CHCRpPhx.js";import{C as de,a as ne}from"../chunks/card-content.C5_W8gaf.js";import{e as ue,i as fe}from"../chunks/lifecycle.eq67AOaA.js";import{S as oe}from"../chunks/separator.CWRbQcxc.js";import{B as We,b as Xe}from"../chunks/button.DODvjd4i.js";import{B as re}from"../chunks/badge.CBks-o04.js";import{p as Ze}from"../chunks/pb.DLudHD8Y.js";import{R as et,T as tt,D as at,a as rt,b as st,c as lt}from"../chunks/index.CrvKBJSA.js";import"../chunks/legacy.CtaTdtmd.js";import{t as Ie}from"../chunks/Toaster.svelte_svelte_type_style_lang.S0vXD1Br.js";import{g as ot}from"../chunks/entry.LQerjGIt.js";import{D as dt}from"../chunks/dialog-description.BFv0Xkh4.js";var nt=_('<h2 class="mb-4 text-xl font-bold text-primary sm:text-2xl">Statistik</h2> <div class="grid gap-4 md:grid-cols-2"><div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4"><span class="flex items-center gap-1 text-lg font-semibold text-primary sm:text-xl"><!> </span> <h4 class="text-center text-sm text-slate-600">Semua anggota</h4></div> <div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4"><span class="flex items-center gap-1 text-lg font-semibold text-slate-700 sm:text-xl"><!> </span> <h4 class="text-center text-sm text-slate-600">Semua materi</h4></div> <div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4"><span class="flex items-center gap-1 text-lg font-semibold text-red-600 sm:text-xl"><!> </span> <h4 class="text-center text-sm text-slate-600">Semua tugas</h4></div> <div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4"><span class="flex items-center gap-1 text-lg font-semibold text-yellow-600 sm:text-xl"><!> </span> <span class="text-center text-sm text-slate-600">Semua kuis</span></div></div>',1);function it(Y,t){se(t,!0);var A=y(),E=l(A);o(E,()=>de,(U,D)=>{D(U,{children:(I,X)=>{var M=y(),F=l(M);o(F,()=>ne,(H,V)=>{V(H,{children:(W,ee)=>{var L=nt(),b=a(l(L),2),j=r(b),R=r(j),C=r(R);Q(C,{icon:"mdi:account",class:"text-3xl"});var B=a(C);s(R),k(2),s(j);var x=a(j,2),f=r(x),S=r(f);Q(S,{icon:"mdi:file-document",class:"text-3xl"});var J=a(S);s(f),k(2),s(x);var v=a(x,2),m=r(v),n=r(m);Q(n,{icon:"mdi:clipboard-text",class:"text-3xl"});var d=a(n);s(m),k(2),s(v);var g=a(v,2),G=r(g),p=r(G);Q(p,{icon:"mdi:help-box",class:"text-3xl"});var h=a(p);s(G),k(2),s(g),s(b),N(()=>{q(B,` ${t.stats.members??""}`),q(J,` ${t.stats.materials??""}`),q(d,` ${t.stats.assignments??""}`),q(h,` ${t.stats.quizzes??""}`)}),e(W,L)},$$slots:{default:!0}})}),e(I,M)},$$slots:{default:!0}})}),e(Y,A),le()}var ct=_('<div class="flex flex-col justify-between gap-3 sm:flex-row"><a><h6 class="capitalize text-slate-700"> </h6></a> <span class="text-primary"> </span></div> <!>',1),vt=_('<p class="text-center text-slate-700">Tidak ada data</p>'),mt=_('<div class="mb-6 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700"><!> Materi</h3></div> <div class="flex flex-col gap-3"><!></div>',1);function ut(Y,t){se(t,!0);var A=y(),E=l(A);o(E,()=>de,(U,D)=>{D(U,{children:(I,X)=>{var M=y(),F=l(M);o(F,()=>ne,(H,V)=>{V(H,{children:(W,ee)=>{var L=mt(),b=l(L),j=r(b),R=r(j);Q(R,{icon:"mdi:file-document-outline",class:"hidden text-4xl sm:block"}),k(),s(j),s(b);var C=a(b,2),B=r(C);Z(B,()=>t.materials.length,x=>{var f=y(),S=l(f);ue(S,17,()=>t.materials,fe,(J,v)=>{var m=ct(),n=l(m),d=r(n),g=r(d),G=r(g,!0);s(g),s(d);var p=a(d,2),h=r(p,!0);s(p),s(n);var u=a(n,2);oe(u,{class:"bg-slate-300 last:hidden"}),N(()=>{me(d,"href","/dashboard/materials/"+P(v).id),q(G,P(v).name),q(h,`${P(v).attachments.length} Lampiran`)}),e(J,m)}),e(x,f)},x=>{var f=vt();e(x,f)}),s(C),e(W,L)},$$slots:{default:!0}})}),e(I,M)},$$slots:{default:!0}})}),e(Y,A),le()}var ft=_('<div class="flex flex-col justify-between gap-3 sm:flex-row"><a><h6 class="capitalize text-slate-700"> </h6></a> <!></div> <!>',1),xt=_('<p class="text-center text-slate-700">Tidak ada data</p>'),_t=_('<div class="mb-6 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700"><!> Tugas</h3></div> <div class="flex flex-col gap-3"><!></div>',1);function gt(Y,t){se(t,!0);var A=y(),E=l(A);o(E,()=>de,(U,D)=>{D(U,{children:(I,X)=>{var M=y(),F=l(M);o(F,()=>ne,(H,V)=>{V(H,{children:(W,ee)=>{var L=_t(),b=l(L),j=r(b),R=r(j);Q(R,{icon:"mdi:clipboard-text-outline",class:"hidden text-4xl sm:block"}),k(),s(j),s(b);var C=a(b,2),B=r(C);Z(B,()=>t.assignments.length,x=>{var f=y(),S=l(f);ue(S,17,()=>t.assignments,fe,(J,v)=>{var m=ft(),n=l(m),d=r(n),g=r(d),G=r(g,!0);s(g),s(d);var p=a(d,2);Z(p,()=>t.assignmentGrades[P(v).id],u=>{var w=y(),T=l(w);Z(T,()=>t.assignmentGrades[P(v).id]>50,c=>{re(c,{children:($,z)=>{k();var i=O();N(()=>q(i,`${t.assignmentGrades[P(v).id]??""}/100`)),e($,i)},$$slots:{default:!0}})},c=>{re(c,{variant:"destructive",children:($,z)=>{k();var i=O();N(()=>q(i,`${t.assignmentGrades[P(v).id]??""}/100`)),e($,i)},$$slots:{default:!0}})}),e(u,w)},u=>{re(u,{variant:"destructive",children:(w,T)=>{k();var c=O("?/100");e(w,c)},$$slots:{default:!0}})}),s(n);var h=a(n,2);oe(h,{class:"bg-slate-300 last:hidden"}),N(()=>{me(d,"href","/dashboard/assignments/"+P(v).id),q(G,P(v).name)}),e(J,m)}),e(x,f)},x=>{var f=xt();e(x,f)}),s(C),e(W,L)},$$slots:{default:!0}})}),e(I,M)},$$slots:{default:!0}})}),e(Y,A),le()}var ht=_('<div class="flex flex-col justify-between gap-3 sm:flex-row"><a><h6 class="capitalize text-slate-700"> </h6></a> <!></div> <!>',1),$t=_('<p class="text-center text-slate-700">Tidak ada data</p>'),bt=_('<div class="mb-6 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700"><!> Kuis</h3></div> <div class="flex flex-col gap-3"><!></div>',1);function pt(Y,t){se(t,!0);var A=y(),E=l(A);o(E,()=>de,(U,D)=>{D(U,{children:(I,X)=>{var M=y(),F=l(M);o(F,()=>ne,(H,V)=>{V(H,{children:(W,ee)=>{var L=bt(),b=l(L),j=r(b),R=r(j);Q(R,{icon:"mdi:help-box-outline",class:"hidden text-4xl sm:block"}),k(),s(j),s(b);var C=a(b,2),B=r(C);Z(B,()=>t.quizzes.length,x=>{var f=y(),S=l(f);ue(S,17,()=>t.quizzes,fe,(J,v)=>{var m=ht(),n=l(m),d=r(n),g=r(d),G=r(g,!0);s(g),s(d);var p=a(d,2);Z(p,()=>t.quizGrades[P(v).id],u=>{var w=y(),T=l(w);Z(T,()=>t.quizGrades[P(v).id]>50,c=>{re(c,{children:($,z)=>{k();var i=O();N(()=>q(i,`${t.quizGrades[P(v).id].toFixed(2)??""}/100`)),e($,i)},$$slots:{default:!0}})},c=>{re(c,{variant:"destructive",children:($,z)=>{k();var i=O();N(()=>q(i,`${t.quizGrades[P(v).id].toFixed(2)??""}/100`)),e($,i)},$$slots:{default:!0}})}),e(u,w)},u=>{re(u,{variant:"destructive",children:(w,T)=>{k();var c=O("?/100");e(w,c)},$$slots:{default:!0}})}),s(n);var h=a(n,2);oe(h,{class:"bg-slate-300 last:hidden"}),N(()=>{me(d,"href","/dashboard/quizzes/"+P(v).id),q(G,P(v).name)}),e(J,m)}),e(x,f)},x=>{var f=$t();e(x,f)}),s(C),e(W,L)},$$slots:{default:!0}})}),e(I,M)},$$slots:{default:!0}})}),e(Y,A),le()}var Pt=_("<!> <!>",1),wt=_("<!> <!>",1),zt=_("<!> <!>",1),kt=_('<div class="flex flex-col justify-between gap-3 sm:flex-row"><h6 class="overflow-hidden text-ellipsis whitespace-nowrap capitalize text-slate-700"> </h6> <!></div> <!>',1),yt=_('<p class="text-center text-slate-700">Tidak ada data</p>'),jt=_('<div class="mb-6 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700"><!> Anggota</h3></div> <div class="flex flex-col gap-3"><div class="flex flex-col justify-between gap-3 sm:flex-row"><h6 class="overflow-hidden text-ellipsis whitespace-nowrap capitalize text-slate-700"> <!></h6></div> <!> <!></div>',1);function Gt(Y,t){se(t,!0);async function A(D,I){try{if((await fetch("/dashboard/classes/"+t.classroomId+"/members",{method:"delete",body:JSON.stringify({id:D,userId:I}),headers:{"Content-Type":"application/json"}})).status>399)throw new Error;Ie.success("Alert",{description:"Anda berhasil keluar dari kelas",dismissable:!0}),ot("/dashboard/classes")}catch{Ie.error("Alert",{description:"Anda gagal keluar dari kelas",dismissable:!0})}}var E=y(),U=l(E);o(U,()=>de,(D,I)=>{I(D,{children:(X,M)=>{var F=y(),H=l(F);o(H,()=>ne,(V,W)=>{W(V,{children:(ee,L)=>{var b=jt(),j=l(b),R=r(j),C=r(R);Q(C,{icon:"mdi:account-outline",class:"hidden text-4xl sm:block"}),k(),s(R),s(j);var B=a(j,2),x=r(B),f=r(x),S=r(f),J=a(S);re(J,{class:"ml-3",children:(n,d)=>{k();var g=O("Guru");e(n,g)},$$slots:{default:!0}}),s(f),s(x);var v=a(x,2);oe(v,{class:"bg-slate-300 last:hidden"});var m=a(v,2);Z(m,()=>t.members.length,n=>{var d=y(),g=l(d);ue(g,17,()=>t.members,fe,(G,p)=>{var h=kt(),u=l(h),w=r(u),T=r(w,!0);s(w);var c=a(w,2);Z(c,()=>{var z;return((z=P(p).expand)==null?void 0:z.user.id)===t.user.id},z=>{var i=y(),K=l(i);o(K,()=>et,(ie,te)=>{te(ie,{children:(Me,Rt)=>{var Te=zt(),qe=l(Te),Re=Ge(()=>Oe(Xe({variant:"outline",size:"sm"})));o(qe,()=>tt,(xe,_e)=>{_e(xe,{get class(){return P(Re)},children:(ge,Ke)=>{Q(ge,{icon:"mdi:logout",class:"text-destructive"})},$$slots:{default:!0}})});var Ce=a(qe,2);o(Ce,()=>at,(xe,_e)=>{_e(xe,{children:(ge,Ke)=>{var Be=wt(),Se=l(Be);o(Se,()=>rt,(he,$e)=>{$e(he,{children:(be,Fe)=>{var ae=Pt(),pe=l(ae);o(pe,()=>st,(we,ze)=>{ze(we,{children:(ke,Le)=>{k();var ye=O("Alert");e(ke,ye)},$$slots:{default:!0}})});var Pe=a(pe,2);o(Pe,()=>dt,(we,ze)=>{ze(we,{children:(ke,Le)=>{k();var ye=O("Yakin keluar dari kelas ini?");e(ke,ye)},$$slots:{default:!0}})}),e(be,ae)},$$slots:{default:!0}})});var Ee=a(Se,2);o(Ee,()=>lt,(he,$e)=>{$e(he,{children:(be,Fe)=>{We(be,{variant:"destructive",onclick:()=>{var ae;return A(P(p).id,(ae=P(p).expand)==null?void 0:ae.user.id)},children:(ae,pe)=>{k();var Pe=O("Iya");e(ae,Pe)},$$slots:{default:!0}})},$$slots:{default:!0}})}),e(ge,Be)},$$slots:{default:!0}})}),e(Me,Te)},$$slots:{default:!0}})}),e(z,i)}),s(u);var $=a(u,2);oe($,{class:"bg-slate-300 last:hidden"}),N(()=>{var z;return q(T,(z=P(p).expand)==null?void 0:z.user.name)}),e(G,h)}),e(n,d)},n=>{var d=yt();e(n,d)}),s(B),N(()=>q(S,`${t.creator.name??""} `)),e(ee,b)},$$slots:{default:!0}})}),e(X,F)},$$slots:{default:!0}})}),e(Y,E),le()}var Tt=_("<!> <!> <!> <!> <!>",1),qt=_('<span class="hidden sm:block">Materi</span> <!>',1),Bt=_('<span class="hidden sm:block">Tugas</span> <!>',1),St=_('<span class="hidden sm:block">Kuis</span> <!>',1),At=_('<span class="hidden sm:block">Anggota</span> <!>',1),Dt=_("<!> <!> <!> <!>",1),It=_("<!> <!> <!> <!> <!>",1),Mt=_('<div class="grid grid-cols-1 grid-rows-[repeat(auto-fit,_max-content)] gap-6 xl:grid-cols-[40%,_1fr]"><!> <header class="relative z-0 overflow-hidden rounded-xl bg-transparent px-6 py-4 shadow shadow-slate-900/20"><div class="absolute left-0 top-0 z-[-1] block h-full w-full object-cover object-center after:absolute after:left-0 after:top-0 after:z-[10] after:block after:h-full after:w-full after:bg-primary/60"><img alt="banner" class="h-full w-full object-cover object-center"></div> <div class=" left-0 top-0 z-[3] flex h-full w-full flex-col items-center justify-center"><h1 class="mb-3 text-center text-xl font-bold capitalize text-slate-100 drop-shadow sm:text-3xl"> </h1> <span class="inline-flex items-center gap-2 text-center text-sm capitalize text-slate-100 drop-shadow sm:text-base"> </span></div></header> <!> <!></div>');function sa(Y,t){se(t,!0);const A=Ge(()=>({materials:t.data.materials.length,assignments:t.data.assignments.length,quizzes:t.data.quizzes.length,members:t.data.members.length}));var E=Mt();Ne(b=>{N(()=>Je.title=`Eduplay - Kelas ${t.data.classroom.name??""}`)});var U=r(E);o(U,()=>Qe,(b,j)=>{j(b,{class:"xl:col-span-2",children:(R,C)=>{var B=y(),x=l(B);o(x,()=>Ue,(f,S)=>{S(f,{children:(J,v)=>{var m=Tt(),n=l(m);o(n,()=>je,(h,u)=>{u(h,{children:(w,T)=>{var c=y(),$=l(c);o($,()=>Ae,(z,i)=>{i(z,{href:"/dashboard",children:(K,ie)=>{k();var te=O("Dashboard");e(K,te)},$$slots:{default:!0}})}),e(w,c)},$$slots:{default:!0}})});var d=a(n,2);o(d,()=>De,(h,u)=>{u(h,{})});var g=a(d,2);o(g,()=>je,(h,u)=>{u(h,{children:(w,T)=>{var c=y(),$=l(c);o($,()=>Ae,(z,i)=>{i(z,{href:"/dashboard/classes",children:(K,ie)=>{k();var te=O("Kelas");e(K,te)},$$slots:{default:!0}})}),e(w,c)},$$slots:{default:!0}})});var G=a(g,2);o(G,()=>De,(h,u)=>{u(h,{})});var p=a(G,2);o(p,()=>je,(h,u)=>{u(h,{children:(w,T)=>{var c=y(),$=l(c);o($,()=>Ve,(z,i)=>{i(z,{class:"capitalize",children:(K,ie)=>{k();var te=O();N(()=>q(te,t.data.classroom.name)),e(K,te)},$$slots:{default:!0}})}),e(w,c)},$$slots:{default:!0}})}),e(J,m)},$$slots:{default:!0}})}),e(R,B)},$$slots:{default:!0}})});var D=a(U,2),I=r(D),X=r(I);N(()=>me(X,"src",Ze.files.getURL(t.data.classroom,t.data.classroom.thumbnail))),s(I);var M=a(I,2),F=r(M),H=r(F,!0);s(F);var V=a(F,2),W=r(V,!0);s(V),s(M),s(D);var ee=a(D,2);it(ee,{get stats(){return P(A)}});var L=a(ee,2);o(L,()=>Ye,(b,j)=>{j(b,{value:"material",class:"col-span-1 xl:col-span-2",children:(R,C)=>{var B=It(),x=l(B);o(x,()=>He,(m,n)=>{n(m,{class:"grid w-full grid-cols-4",children:(d,g)=>{var G=Dt(),p=l(G);o(p,()=>ce,(T,c)=>{c(T,{value:"material",children:($,z)=>{var i=qt(),K=a(l(i),2);Q(K,{icon:"mdi:file-document-outline",class:"block text-xl sm:hidden"}),e($,i)},$$slots:{default:!0}})});var h=a(p,2);o(h,()=>ce,(T,c)=>{c(T,{value:"assignment",children:($,z)=>{var i=Bt(),K=a(l(i),2);Q(K,{icon:"mdi:clipboard-text-outline",class:"block text-xl sm:hidden"}),e($,i)},$$slots:{default:!0}})});var u=a(h,2);o(u,()=>ce,(T,c)=>{c(T,{value:"quiz",children:($,z)=>{var i=St(),K=a(l(i),2);Q(K,{icon:"mdi:help-box-outline",class:"block text-xl sm:hidden"}),e($,i)},$$slots:{default:!0}})});var w=a(u,2);o(w,()=>ce,(T,c)=>{c(T,{value:"members",children:($,z)=>{var i=At(),K=a(l(i),2);Q(K,{icon:"mdi:account-outline",class:"block text-xl sm:hidden"}),e($,i)},$$slots:{default:!0}})}),e(d,G)},$$slots:{default:!0}})});var f=a(x,2);o(f,()=>ve,(m,n)=>{n(m,{value:"material",children:(d,g)=>{ut(d,{get materials(){return t.data.materials},get classroomId(){return t.data.classroom.id}})},$$slots:{default:!0}})});var S=a(f,2);o(S,()=>ve,(m,n)=>{n(m,{value:"assignment",children:(d,g)=>{gt(d,{get assignments(){return t.data.assignments},get assignmentGrades(){return t.data.assignmentGrades},get classroomId(){return t.data.classroom.id}})},$$slots:{default:!0}})});var J=a(S,2);o(J,()=>ve,(m,n)=>{n(m,{value:"quiz",children:(d,g)=>{pt(d,{get quizzes(){return t.data.quizzes},get classroomId(){return t.data.classroom.id},get quizGrades(){return t.data.quizGrades}})},$$slots:{default:!0}})});var v=a(J,2);o(v,()=>ve,(m,n)=>{n(m,{value:"members",children:(d,g)=>{var G=Ge(()=>{var p;return(p=t.data.classroom.expand)==null?void 0:p.creator});Gt(d,{get members(){return t.data.members},get classroomId(){return t.data.classroom.id},get user(){return t.data.user},get creator(){return P(G)}})},$$slots:{default:!0}})}),e(R,B)},$$slots:{default:!0}})}),s(E),N(()=>{q(H,t.data.classroom.name),q(W,t.data.classroom.description)}),e(Y,E),le()}export{sa as component};
