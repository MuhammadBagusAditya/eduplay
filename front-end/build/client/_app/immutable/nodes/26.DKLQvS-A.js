import"../chunks/disclose-version.Bg9kRutz.js";import{p as Pe,f as r,a as we,s as a,c as o,r as n,n as $,t as me,g as C,b as Se,e as Xe,d as pe,u as at,$ as rt}from"../chunks/runtime.Bp4x7A-a.js";import{b as ae,p as st,y as lt,i as Te,h as ot}from"../chunks/props.DpK8ESsy.js";import{c as I,a as e,b as d,t as X}from"../chunks/template.DQ3Ggw9n.js";import{c as t}from"../chunks/svelte-component.CVO9o64T.js";import{c as Qe,s as ze}from"../chunks/utils.Dqu1-Wdg.js";import{B as nt,a as dt,b as Ee,c as Ue,d as Ve,e as it}from"../chunks/breadcrumb-page.BYoj9mJR.js";import{R as ct,T as vt,a as je,b as Be}from"../chunks/index.CSSQKwO2.js";import{B as be,b as Ye}from"../chunks/button.DODvjd4i.js";import{I as A}from"../chunks/Icon.CHCRpPhx.js";import{C as Ae,a as Ie}from"../chunks/card-content.C5_W8gaf.js";import{e as Me,i as Ce}from"../chunks/lifecycle.eq67AOaA.js";import{S as Ke}from"../chunks/separator.CWRbQcxc.js";import{R as Oe,T as Ge,D as Je,a as Le,b as Ne,c as He}from"../chunks/index.CrvKBJSA.js";import{I as mt}from"../chunks/input.CJsoznPS.js";import{p as ut}from"../chunks/pb.DLudHD8Y.js";import"../chunks/legacy.CtaTdtmd.js";import{t as ye}from"../chunks/Toaster.svelte_svelte_type_style_lang.S0vXD1Br.js";import{a as Fe,g as ft}from"../chunks/entry.LQerjGIt.js";import{D as Ze}from"../chunks/dialog-description.BFv0Xkh4.js";import"../chunks/badge.CBks-o04.js";import{R as _t,T as ht,D as $t,G as We,a as gt,b as xt,c as qe}from"../chunks/index.BkimSpTC.js";var pt=d('<h2 class="mb-4 text-xl font-bold text-primary sm:text-2xl">Statistik</h2> <div class="grid gap-4 md:grid-cols-2"><div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4"><span class="flex items-center gap-1 text-lg font-semibold text-primary sm:text-xl"><!> </span> <h4 class="text-center text-sm text-slate-600">Total anggota</h4></div> <div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4"><span class="flex items-center gap-1 text-lg font-semibold text-slate-700 sm:text-xl"><!> </span> <h4 class="text-center text-sm text-slate-600">Materi yang anda buat</h4></div> <div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4"><span class="flex items-center gap-1 text-lg font-semibold text-red-600 sm:text-xl"><!> </span> <h4 class="text-center text-sm text-slate-600">Tugas yang anda buat</h4></div> <div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4"><span class="flex items-center gap-1 text-lg font-semibold text-yellow-600 sm:text-xl"><!> </span> <span class="text-center text-sm text-slate-600">Kuis yang anda buat</span></div></div>',1);function bt(re,s){Pe(s,!0);var K=I(),L=r(K);t(L,()=>Ae,(se,N)=>{N(se,{children:(Z,Q)=>{var D=I(),le=r(D);t(le,()=>Ie,(ee,H)=>{H(ee,{children:(oe,fe)=>{var G=pt(),R=a(r(G),2),M=o(R),U=o(M),j=o(U);A(j,{icon:"mdi:account",class:"text-3xl"});var O=a(j);n(U),$(2),n(M);var B=a(M,2),V=o(B),v=o(V);A(v,{icon:"mdi:file-document",class:"text-3xl"});var f=a(v);n(V),$(2),n(B);var m=a(B,2),u=o(m),p=o(u);A(p,{icon:"mdi:clipboard-text",class:"text-3xl"});var q=a(p);n(u),$(2),n(m);var c=a(m,2),l=o(c),i=o(l);A(i,{icon:"mdi:help-box",class:"text-3xl"});var b=a(i);n(l),$(2),n(c),n(R),me(()=>{ae(O,` ${s.stats.members??""}`),ae(f,` ${s.stats.materials??""}`),ae(q,` ${s.stats.assignments??""}`),ae(b,` ${s.stats.quizzes??""}`)}),e(oe,G)},$$slots:{default:!0}})}),e(Z,D)},$$slots:{default:!0}})}),e(re,K),we()}var Pt=d('<!> <span class="hidden text-sm sm:block">Tambah anggota</span>',1),wt=d('<form class="flex flex-col gap-3"><!> <!> <!></form>'),kt=d("<!> <!>",1),yt=d("<!> <!>",1),zt=d("<!> <!>",1),Tt=d("<!> <!>",1),At=d('<div class="flex flex-col justify-between gap-3 sm:flex-row"><h6 class="overflow-hidden text-ellipsis whitespace-nowrap capitalize text-slate-700"> </h6> <!></div> <!>',1),It=d('<p class="text-center text-slate-700">Tidak ada data</p>'),Dt=d('<div class="mb-6 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700"><!> Anggota</h3> <!></div> <div class="flex flex-col gap-3"><!></div>',1);function jt(re,s){Pe(s,!0);let K=Xe("");async function L(Q){Q.preventDefault();try{if((await fetch("/dashboard/teachers/classes/"+s.classroomId+"/members",{method:"post",body:JSON.stringify({id:C(K)}),headers:{"Content-Type":"application/json"}})).status>399)throw new Error("");Se(K,""),ye.success("Alert",{description:"Anggota baru berhasil ditambahkan",dismissable:!0}),await Fe()}catch{ye.error("Alert",{description:"Anggota baru gagal ditambahkan",dismissable:!0})}}async function se(Q){try{if((await fetch("/dashboard/teachers/classes/"+s.classroomId+"/members",{body:JSON.stringify({id:Q}),method:"delete",headers:{"Content-Type":"application/json"}})).status>399)throw new Error("");ye.success("Alert",{description:"Anggota berhasil dihapus",dismissable:!0}),await Fe()}catch{ye.error("Alert",{description:"Anggota gagal dihapus",dismissable:!0})}}var N=I(),Z=r(N);t(Z,()=>Ae,(Q,D)=>{D(Q,{children:(le,ee)=>{var H=I(),oe=r(H);t(oe,()=>Ie,(fe,G)=>{G(fe,{children:(R,M)=>{var U=Dt(),j=r(U),O=o(j),B=o(O);A(B,{icon:"mdi:account-outline",class:"hidden text-4xl sm:block"}),$(),n(O);var V=a(O,2);t(V,()=>Oe,(m,u)=>{u(m,{children:(p,q)=>{var c=kt(),l=r(c),i=pe(()=>Qe(Ye({size:"sm"})));t(l,()=>Ge,(g,S)=>{S(g,{get class(){return C(i)},children:(_,z)=>{var P=Pt(),T=r(P);A(T,{icon:"mdi:plus"}),$(2),e(_,P)},$$slots:{default:!0}})});var b=a(l,2);t(b,()=>Je,(g,S)=>{S(g,{children:(_,z)=>{var P=wt(),T=o(P);t(T,()=>Le,(k,h)=>{h(k,{children:(y,J)=>{var E=I(),_e=r(E);t(_e,()=>Ne,(ne,ce)=>{ce(ne,{children:(he,De)=>{$();var ve=X("Tambah anggota");e(he,ve)},$$slots:{default:!0}})}),e(y,E)},$$slots:{default:!0}})});var x=a(T,2);mt(x,{name:"member",get value(){return C(K)},set value(k){Se(K,st(k))},placeholder:"Masukkan id murid"});var w=a(x,2);t(w,()=>He,(k,h)=>{h(k,{children:(y,J)=>{be(y,{type:"submit",children:(E,_e)=>{$();var ne=X("Submit");e(E,ne)},$$slots:{default:!0}})},$$slots:{default:!0}})}),n(P),lt("submit",P,L),e(_,P)},$$slots:{default:!0}})}),e(p,c)},$$slots:{default:!0}})}),n(j);var v=a(j,2),f=o(v);Te(f,()=>s.members.length,m=>{var u=I(),p=r(u);Me(p,17,()=>s.members,Ce,(q,c)=>{var l=At(),i=r(l),b=o(i),g=o(b,!0);n(b);var S=a(b,2);t(S,()=>Oe,(z,P)=>{P(z,{children:(T,x)=>{var w=Tt(),k=r(w),h=pe(()=>Qe(Ye({variant:"outline",size:"sm"})));t(k,()=>Ge,(J,E)=>{E(J,{get class(){return C(h)},children:(_e,ne)=>{A(_e,{icon:"mdi:trash-can-outline",class:"text-destructive"})},$$slots:{default:!0}})});var y=a(k,2);t(y,()=>Je,(J,E)=>{E(J,{children:(_e,ne)=>{var ce=zt(),he=r(ce);t(he,()=>Le,(ve,ge)=>{ge(ve,{children:(xe,Re)=>{var te=yt(),Y=r(te);t(Y,()=>Ne,(ue,F)=>{F(ue,{children:(W,$e)=>{$();var ie=X("Alert");e(W,ie)},$$slots:{default:!0}})});var de=a(Y,2);t(de,()=>Ze,(ue,F)=>{F(ue,{children:(W,$e)=>{$();var ie=X("Yakin menghapus anggota ini?");e(W,ie)},$$slots:{default:!0}})}),e(xe,te)},$$slots:{default:!0}})});var De=a(he,2);t(De,()=>He,(ve,ge)=>{ge(ve,{children:(xe,Re)=>{be(xe,{variant:"destructive",onclick:()=>se(C(c).id),children:(te,Y)=>{$();var de=X("Iya");e(te,de)},$$slots:{default:!0}})},$$slots:{default:!0}})}),e(_e,ce)},$$slots:{default:!0}})}),e(T,w)},$$slots:{default:!0}})}),n(i);var _=a(i,2);Ke(_,{class:"bg-slate-300 last:hidden"}),me(()=>{var z;return ae(g,(z=C(c).expand)==null?void 0:z.user.name)}),e(q,l)}),e(m,u)},m=>{var u=It();e(m,u)}),n(v),e(R,U)},$$slots:{default:!0}})}),e(le,H)},$$slots:{default:!0}})}),e(re,N),we()}var Bt=d('<!> <span class="hidden text-sm sm:block">Buat materi</span>',1),qt=d('<div class="flex flex-col justify-between gap-3 sm:flex-row"><a><h6 class="capitalize text-slate-700"> </h6></a> <span class="text-primary"> </span></div> <!>',1),St=d('<p class="text-center text-slate-700">Tidak ada data</p>'),Mt=d('<div class="mb-6 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700"><!> Materi</h3> <!></div> <div class="flex flex-col gap-3"><!></div>',1);function Ct(re,s){Pe(s,!0);var K=I(),L=r(K);t(L,()=>Ae,(se,N)=>{N(se,{children:(Z,Q)=>{var D=I(),le=r(D);t(le,()=>Ie,(ee,H)=>{H(ee,{children:(oe,fe)=>{var G=Mt(),R=r(G),M=o(R),U=o(M);A(U,{icon:"mdi:file-document-outline",class:"hidden text-4xl sm:block"}),$(),n(M);var j=a(M,2),O=pe(()=>"/dashboard/teachers/materials/create?classroom="+s.classroomId);be(j,{get href(){return C(O)},size:"sm",children:(v,f)=>{var m=Bt(),u=r(m);A(u,{icon:"mdi:plus"}),$(2),e(v,m)},$$slots:{default:!0}}),n(R);var B=a(R,2),V=o(B);Te(V,()=>s.materials.length,v=>{var f=I(),m=r(f);Me(m,17,()=>s.materials,Ce,(u,p)=>{var q=qt(),c=r(q),l=o(c),i=o(l),b=o(i,!0);n(i),n(l);var g=a(l,2),S=o(g,!0);n(g),n(c);var _=a(c,2);Ke(_,{class:"bg-slate-300 last:hidden"}),me(()=>{ze(l,"href","/dashboard/teachers/materials/"+C(p).id),ae(b,C(p).name),ae(S,`${C(p).attachments.length} Lampiran`)}),e(u,q)}),e(v,f)},v=>{var f=St();e(v,f)}),n(B),e(oe,G)},$$slots:{default:!0}})}),e(Z,D)},$$slots:{default:!0}})}),e(re,K),we()}var Kt=d('<!> <span class="hidden text-sm sm:block">Buat tugas</span>',1),Rt=d('<div class="flex flex-col justify-between gap-3 sm:flex-row"><a><h6 class="capitalize text-slate-700"> </h6></a></div> <!>',1),Et=d('<p class="text-center text-slate-700">Tidak ada data</p>'),Ot=d('<div class="mb-6 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700"><!> Tugas</h3> <!></div> <div class="flex flex-col gap-3"><!></div>',1);function Gt(re,s){Pe(s,!0);var K=I(),L=r(K);t(L,()=>Ae,(se,N)=>{N(se,{children:(Z,Q)=>{var D=I(),le=r(D);t(le,()=>Ie,(ee,H)=>{H(ee,{children:(oe,fe)=>{var G=Ot(),R=r(G),M=o(R),U=o(M);A(U,{icon:"mdi:clipboard-text-outline",class:"hidden text-4xl sm:block"}),$(),n(M);var j=a(M,2),O=pe(()=>"/dashboard/teachers/assignments/create?classroom="+s.classroomId);be(j,{get href(){return C(O)},size:"sm",children:(v,f)=>{var m=Kt(),u=r(m);A(u,{icon:"mdi:plus"}),$(2),e(v,m)},$$slots:{default:!0}}),n(R);var B=a(R,2),V=o(B);Te(V,()=>s.assignments.length,v=>{var f=I(),m=r(f);Me(m,17,()=>s.assignments,Ce,(u,p)=>{var q=Rt(),c=r(q),l=o(c),i=o(l),b=o(i,!0);n(i),n(l),n(c);var g=a(c,2);Ke(g,{class:"bg-slate-300 last:hidden"}),me(()=>{ze(l,"href","/dashboard/teachers/assignments/"+C(p).id),ae(b,C(p).name)}),e(u,q)}),e(v,f)},v=>{var f=Et();e(v,f)}),n(B),e(oe,G)},$$slots:{default:!0}})}),e(Z,D)},$$slots:{default:!0}})}),e(re,K),we()}var Jt=d('<!> <span class="hidden text-sm sm:block">Buat kuis</span>',1),Lt=d('<div class="flex flex-col justify-between gap-3 sm:flex-row"><a><h6 class="capitalize text-slate-700"> </h6></a></div> <!>',1),Nt=d('<p class="text-center text-slate-700">Tidak ada data</p>'),Ht=d('<div class="mb-6 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700"><!> Kuis</h3> <!></div> <div class="flex flex-col gap-3"><!></div>',1);function Qt(re,s){Pe(s,!0);var K=I(),L=r(K);t(L,()=>Ae,(se,N)=>{N(se,{children:(Z,Q)=>{var D=I(),le=r(D);t(le,()=>Ie,(ee,H)=>{H(ee,{children:(oe,fe)=>{var G=Ht(),R=r(G),M=o(R),U=o(M);A(U,{icon:"mdi:help-box-outline",class:"hidden text-4xl sm:block"}),$(),n(M);var j=a(M,2),O=pe(()=>"/dashboard/teachers/quizzes/create?classroom="+s.classroomId);be(j,{get href(){return C(O)},size:"sm",children:(v,f)=>{var m=Jt(),u=r(m);A(u,{icon:"mdi:plus"}),$(2),e(v,m)},$$slots:{default:!0}}),n(R);var B=a(R,2),V=o(B);Te(V,()=>s.quizzes.length,v=>{var f=I(),m=r(f);Me(m,17,()=>s.quizzes,Ce,(u,p)=>{var q=Lt(),c=r(q),l=o(c),i=o(l),b=o(i,!0);n(i),n(l),n(c);var g=a(c,2);Ke(g,{class:"bg-slate-300 last:hidden"}),me(()=>{ze(l,"href","/dashboard/teachers/quizzes/"+C(p).id),ae(b,C(p).name)}),e(u,q)}),e(v,f)},v=>{var f=Nt();e(v,f)}),n(B),e(oe,G)},$$slots:{default:!0}})}),e(Z,D)},$$slots:{default:!0}})}),e(re,K),we()}var Ut=d("<!> <!> <!> <!> <!>",1),Vt=d("<!> ID berhasil disalin",1),Yt=d("<!> Salin ID Kelas",1),Ft=d('<!> <a class="text-sm">Edit kelas</a>',1),Wt=d("<!> <!>",1),Xt=d("<!> <!> <!>",1),Zt=d("<!> <!> <!>",1),ea=d("<!> <!>",1),ta=d("<!> <!>",1),aa=d("<!> <!>",1),ra=d("<!> <!>",1),sa=d('<span class="hidden sm:block">Materi</span> <!>',1),la=d('<span class="hidden sm:block">Tugas</span> <!>',1),oa=d('<span class="hidden sm:block">Kuis</span> <!>',1),na=d('<span class="hidden sm:block">Anggota</span> <!>',1),da=d("<!> <!> <!> <!>",1),ia=d("<!> <!> <!> <!> <!>",1),ca=d('<div class="grid grid-cols-1 grid-rows-[repeat(auto-fit,_max-content)] gap-6 xl:grid-cols-[40%,_1fr]"><!> <header class="relative z-0 min-h-[12rem] overflow-hidden rounded-xl bg-transparent px-6 py-4 shadow shadow-slate-900/20"><div class="absolute left-0 top-0 z-[-1] block h-full w-full object-cover object-center after:absolute after:left-0 after:top-0 after:z-[10] after:block after:h-full after:w-full after:bg-primary/60"><img alt="banner" class="h-full w-full object-cover object-center"></div> <div class=" left-0 top-0 z-[3] flex h-full w-full flex-col items-center justify-center"><h1 class="mb-3 text-center text-xl font-bold capitalize text-slate-100 drop-shadow sm:text-3xl"> </h1> <span class="inline-flex items-center gap-2 text-center text-sm capitalize text-slate-100 drop-shadow sm:text-base"> </span></div> <!></header> <!> <!></div>');function Sa(re,s){Pe(s,!0);const K=pe(()=>({materials:s.data.materials.length,assignments:s.data.assignments.length,quizzes:s.data.quizzes.length,members:s.data.members.length}));let L=Xe(!1);at(()=>{C(L)&&setTimeout(()=>{Se(L,!1)},5e3)});async function se(){try{if((await fetch("/dashboard/teachers/classes/"+s.data.classroom.id,{method:"delete"})).status>399)throw new Error("");ft("/dashboard/teachers/classes")}catch{ye.error("Alert",{description:"Kelas gagal untuk dihapus",dismissable:!0})}}var N=ca();ot(j=>{me(()=>rt.title=`Eduplay - Kelas ${s.data.classroom.name??""}`)});var Z=o(N);t(Z,()=>nt,(j,O)=>{O(j,{class:"xl:col-span-2",children:(B,V)=>{var v=I(),f=r(v);t(f,()=>dt,(m,u)=>{u(m,{children:(p,q)=>{var c=Ut(),l=r(c);t(l,()=>Ee,(_,z)=>{z(_,{children:(P,T)=>{var x=I(),w=r(x);t(w,()=>Ue,(k,h)=>{h(k,{href:"/dashboard",children:(y,J)=>{$();var E=X("Dashboard");e(y,E)},$$slots:{default:!0}})}),e(P,x)},$$slots:{default:!0}})});var i=a(l,2);t(i,()=>Ve,(_,z)=>{z(_,{})});var b=a(i,2);t(b,()=>Ee,(_,z)=>{z(_,{children:(P,T)=>{var x=I(),w=r(x);t(w,()=>Ue,(k,h)=>{h(k,{href:"/dashboard/teachers/classes",children:(y,J)=>{$();var E=X("Kelas");e(y,E)},$$slots:{default:!0}})}),e(P,x)},$$slots:{default:!0}})});var g=a(b,2);t(g,()=>Ve,(_,z)=>{z(_,{})});var S=a(g,2);t(S,()=>Ee,(_,z)=>{z(_,{children:(P,T)=>{var x=I(),w=r(x);t(w,()=>it,(k,h)=>{h(k,{class:"capitalize",children:(y,J)=>{$();var E=X();me(()=>ae(E,s.data.classroom.name)),e(y,E)},$$slots:{default:!0}})}),e(P,x)},$$slots:{default:!0}})}),e(p,c)},$$slots:{default:!0}})}),e(B,v)},$$slots:{default:!0}})});var Q=a(Z,2),D=o(Q),le=o(D);me(()=>ze(le,"src",ut.files.getURL(s.data.classroom,s.data.classroom.thumbnail))),n(D);var ee=a(D,2),H=o(ee),oe=o(H,!0);n(H);var fe=a(H,2),G=o(fe,!0);n(fe),n(ee);var R=a(ee,2);t(R,()=>Oe,(j,O)=>{O(j,{children:(B,V)=>{var v=ra(),f=r(v);t(f,()=>_t,(u,p)=>{p(u,{children:(q,c)=>{var l=ea(),i=r(l);t(i,()=>ht,(g,S)=>{S(g,{class:"absolute right-3 top-3",children:(_,z)=>{A(_,{icon:"mdi:dots-horizontal",class:"text-3xl text-slate-300"})},$$slots:{default:!0}})});var b=a(i,2);t(b,()=>$t,(g,S)=>{S(g,{class:"w-56",children:(_,z)=>{var P=I(),T=r(P);t(T,()=>We,(x,w)=>{w(x,{children:(k,h)=>{var y=Zt(),J=r(y);t(J,()=>gt,(ne,ce)=>{ce(ne,{children:(he,De)=>{$();var ve=X("Aksi");e(he,ve)},$$slots:{default:!0}})});var E=a(J,2);t(E,()=>xt,(ne,ce)=>{ce(ne,{})});var _e=a(E,2);t(_e,()=>We,(ne,ce)=>{ce(ne,{children:(he,De)=>{var ve=Xt(),ge=r(ve);Te(ge,()=>C(L),te=>{var Y=I(),de=r(Y);t(de,()=>qe,(ue,F)=>{F(ue,{closeOnSelect:!1,children:(W,$e)=>{var ie=Vt(),ke=r(ie);A(ke,{icon:"mdi:clipboard-check-outline"}),$(),e(W,ie)},$$slots:{default:!0}})}),e(te,Y)},te=>{var Y=I(),de=r(Y);t(de,()=>qe,(ue,F)=>{F(ue,{onclick:async()=>navigator.clipboard.writeText(s.data.classroom.id).then(()=>Se(L,!0)),closeOnSelect:!1,children:(W,$e)=>{var ie=Yt(),ke=r(ie);A(ke,{icon:"mdi:clipboard-outline"}),$(),e(W,ie)},$$slots:{default:!0}})}),e(te,Y)});var xe=a(ge,2);t(xe,()=>qe,(te,Y)=>{Y(te,{children:(de,ue)=>{var F=Ft(),W=r(F);A(W,{icon:"mdi:pencil-outline",class:""});var $e=a(W,2);me(()=>ze($e,"href","/dashboard/teachers/classes/"+s.data.classroom.id+"/edit")),e(de,F)},$$slots:{default:!0}})});var Re=a(xe,2);t(Re,()=>qe,(te,Y)=>{Y(te,{children:(de,ue)=>{var F=Wt(),W=r(F);A(W,{icon:"mdi:trash-can-outline",class:"text-destructive"});var $e=a(W,2);t($e,()=>Ge,(ie,ke)=>{ke(ie,{class:"w-full text-left text-sm text-destructive",children:(et,va)=>{$();var tt=X("Hapus kelas");e(et,tt)},$$slots:{default:!0}})}),e(de,F)},$$slots:{default:!0}})}),e(he,ve)},$$slots:{default:!0}})}),e(k,y)},$$slots:{default:!0}})}),e(_,P)},$$slots:{default:!0}})}),e(q,l)},$$slots:{default:!0}})});var m=a(f,2);t(m,()=>Je,(u,p)=>{p(u,{children:(q,c)=>{var l=aa(),i=r(l);t(i,()=>Le,(g,S)=>{S(g,{children:(_,z)=>{var P=ta(),T=r(P);t(T,()=>Ne,(w,k)=>{k(w,{children:(h,y)=>{$();var J=X("Alert");e(h,J)},$$slots:{default:!0}})});var x=a(T,2);t(x,()=>Ze,(w,k)=>{k(w,{children:(h,y)=>{$();var J=X("Apakah yakin ingin menghapus kelas ini?");e(h,J)},$$slots:{default:!0}})}),e(_,P)},$$slots:{default:!0}})});var b=a(i,2);t(b,()=>He,(g,S)=>{S(g,{children:(_,z)=>{be(_,{variant:"destructive",onclick:se,children:(P,T)=>{$();var x=X("Iya");e(P,x)},$$slots:{default:!0}})},$$slots:{default:!0}})}),e(q,l)},$$slots:{default:!0}})}),e(B,v)},$$slots:{default:!0}})}),n(Q);var M=a(Q,2);bt(M,{get stats(){return C(K)}});var U=a(M,2);t(U,()=>ct,(j,O)=>{O(j,{value:"material",class:"col-span-1 xl:col-span-2",children:(B,V)=>{var v=ia(),f=r(v);t(f,()=>vt,(c,l)=>{l(c,{class:"grid w-full grid-cols-4",children:(i,b)=>{var g=da(),S=r(g);t(S,()=>je,(T,x)=>{x(T,{value:"material",children:(w,k)=>{var h=sa(),y=a(r(h),2);A(y,{icon:"mdi:file-document-outline",class:"block text-xl sm:hidden"}),e(w,h)},$$slots:{default:!0}})});var _=a(S,2);t(_,()=>je,(T,x)=>{x(T,{value:"assignment",children:(w,k)=>{var h=la(),y=a(r(h),2);A(y,{icon:"mdi:clipboard-text-outline",class:"block text-xl sm:hidden"}),e(w,h)},$$slots:{default:!0}})});var z=a(_,2);t(z,()=>je,(T,x)=>{x(T,{value:"quiz",children:(w,k)=>{var h=oa(),y=a(r(h),2);A(y,{icon:"mdi:help-box-outline",class:"block text-xl sm:hidden"}),e(w,h)},$$slots:{default:!0}})});var P=a(z,2);t(P,()=>je,(T,x)=>{x(T,{value:"members",children:(w,k)=>{var h=na(),y=a(r(h),2);A(y,{icon:"mdi:account-outline",class:"block text-xl sm:hidden"}),e(w,h)},$$slots:{default:!0}})}),e(i,g)},$$slots:{default:!0}})});var m=a(f,2);t(m,()=>Be,(c,l)=>{l(c,{value:"material",children:(i,b)=>{Ct(i,{get materials(){return s.data.materials},get classroomId(){return s.data.classroom.id}})},$$slots:{default:!0}})});var u=a(m,2);t(u,()=>Be,(c,l)=>{l(c,{value:"assignment",children:(i,b)=>{Gt(i,{get assignments(){return s.data.assignments},get classroomId(){return s.data.classroom.id}})},$$slots:{default:!0}})});var p=a(u,2);t(p,()=>Be,(c,l)=>{l(c,{value:"quiz",children:(i,b)=>{Qt(i,{get quizzes(){return s.data.quizzes},get classroomId(){return s.data.classroom.id}})},$$slots:{default:!0}})});var q=a(p,2);t(q,()=>Be,(c,l)=>{l(c,{value:"members",children:(i,b)=>{jt(i,{get members(){return s.data.members},get classroomId(){return s.data.classroom.id}})},$$slots:{default:!0}})}),e(B,v)},$$slots:{default:!0}})}),n(N),me(()=>{ae(oe,s.data.classroom.name),ae(G,s.data.classroom.description)}),e(re,N),we()}export{Sa as component};