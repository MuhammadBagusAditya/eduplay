import"../chunks/disclose-version.Bg9kRutz.js";import{p as Fe,u as pe,a as Ke,$ as Te,g as he,h as m,s as r,c as N,f as v,n as y,t as Ce,d as $e,r as O}from"../chunks/runtime.Bp4x7A-a.js";import{s as Me,p as Se,h as je,f as E,a as we,b as Ae,g as G}from"../chunks/props.DpK8ESsy.js";import{a,b as I,t as B,c as Q}from"../chunks/template.DQ3Ggw9n.js";import{c as e}from"../chunks/svelte-component.CVO9o64T.js";import{a as Ie}from"../chunks/actions.BPW6lnfX.js";import{r as be}from"../chunks/utils.Dqu1-Wdg.js";import{b as xe}from"../chunks/input.aIcynM5P.js";import{B as qe,a as Ee,b as H,c as U,d as V,e as Je}from"../chunks/breadcrumb-page.BYoj9mJR.js";import{s as Ne,F as te,C as se,a as oe,b as de}from"../chunks/formData.B4uWq1rj.js";import{B as ge}from"../chunks/button.DODvjd4i.js";import{I as L}from"../chunks/input.CJsoznPS.js";import"../chunks/legacy.CtaTdtmd.js";import"../chunks/entry.LQerjGIt.js";import{t as Pe}from"../chunks/Toaster.svelte_svelte_type_style_lang.S0vXD1Br.js";import{z as Oe}from"../chunks/zod.B2p22QL9.js";import{a as Qe}from"../chunks/quizzes.C8naADkq.js";var We=I("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1),Ge=I("<!> <!>",1),He=I("<!> <!>",1),Le=I("<!> <!>",1),Re=I("<!> <!>",1),Ue=I('<!> <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3"><!> : <!> : <!></div>',1),Ve=I("<!> <!>",1),Xe=I('<main class="grid grid-cols-1 gap-6"><h1 class="text-3xl font-bold text-slate-800">Tambah Kuis Baru</h1> <!> <div class="flex flex-col gap-6"><div class="flex flex-col gap-4 rounded-lg bg-slate-100 px-6 py-4 shadow shadow-slate-900/20"><h3 class="text-xl font-bold text-primary">Data kuis baru</h3> <form method="POST" class="flex flex-col gap-3"><!>  <!>  <!> <input type="hidden" name="classroom"> <input type="hidden" name="time"> <div class="flex justify-end gap-3"><!> <!></div></form></div></div></main>');function _r(ke,M){Fe(M,!0);const ye=Me(),o=()=>we(S,"$formData",ye),R=Ne(M.data.form,{validators:Oe(Qe)}),{form:S,enhance:Be}=R,l=Se({hours:void 0,minutes:void 0,seconds:void 0});pe(()=>{var s,_;(s=M.form)!=null&&s.message&&(((_=M.form)==null?void 0:_.message.variant)==="primary"?(Pe.success("Alert",{description:M.form.message.text,dismissable:!0}),l.hours=void 0,l.minutes=void 0,l.seconds=void 0):Pe.error("Alert",{description:M.form.message.text,dismissable:!0}))}),pe(()=>{l.hours!==void 0&&E(S,m(o).time=l.hours*3600,m(o)),l.minutes!==void 0&&E(S,m(o).time+=l.minutes*60,m(o)),l.seconds!==void 0&&E(S,m(o).time+=l.seconds,m(o))});var X=Xe();je(s=>{Te.title="Eduplay - Tambah kuis baru"});var le=r(N(X),2);e(le,()=>qe,(s,_)=>{_(s,{children:(p,re)=>{var h=Q(),g=v(h);e(g,()=>Ee,(q,u)=>{u(q,{children:(c,ae)=>{var j=We(),n=v(j);e(n,()=>H,(t,d)=>{d(t,{children:(k,J)=>{var i=Q(),F=v(i);e(F,()=>U,(K,T)=>{T(K,{href:"/dashboard",children:(C,W)=>{y();var A=B("Dashboard");a(C,A)},$$slots:{default:!0}})}),a(k,i)},$$slots:{default:!0}})});var P=r(n,2);e(P,()=>V,(t,d)=>{d(t,{})});var $=r(P,2);e($,()=>H,(t,d)=>{d(t,{children:(k,J)=>{var i=Q(),F=v(i);e(F,()=>U,(K,T)=>{T(K,{href:"/dashboard/teachers/classes",children:(C,W)=>{y();var A=B("Kelas");a(C,A)},$$slots:{default:!0}})}),a(k,i)},$$slots:{default:!0}})});var b=r($,2);e(b,()=>V,(t,d)=>{d(t,{})});var D=r(b,2);e(D,()=>H,(t,d)=>{d(t,{children:(k,J)=>{var i=Q(),F=v(i),K=$e(()=>"/dashboard/teachers/classes/"+M.data.classroom.id);e(F,()=>U,(T,C)=>{C(T,{get href(){return he(K)},class:"capitalize",children:(W,A)=>{y();var _e=B();Ce(()=>Ae(_e,M.data.classroom.name)),a(W,_e)},$$slots:{default:!0}})}),a(k,i)},$$slots:{default:!0}})});var f=r(D,2);e(f,()=>V,(t,d)=>{d(t,{})});var z=r(f,2);e(z,()=>H,(t,d)=>{d(t,{children:(k,J)=>{var i=Q(),F=v(i);e(F,()=>U,(K,T)=>{T(K,{href:"/dashboard/teachers/quizzes",children:(C,W)=>{y();var A=B("Kuis");a(C,A)},$$slots:{default:!0}})}),a(k,i)},$$slots:{default:!0}})});var w=r(z,2);e(w,()=>V,(t,d)=>{d(t,{})});var x=r(w,2);e(x,()=>H,(t,d)=>{d(t,{children:(k,J)=>{var i=Q(),F=v(i);e(F,()=>Je,(K,T)=>{T(K,{children:(C,W)=>{y();var A=B("Tambah");a(C,A)},$$slots:{default:!0}})}),a(k,i)},$$slots:{default:!0}})}),a(c,j)},$$slots:{default:!0}})}),a(p,h)},$$slots:{default:!0}})});var ne=r(le,2),ie=N(ne),Y=r(N(ie),2),me=N(Y);e(me,()=>te,(s,_)=>{_(s,{form:R,name:"name",children:(p,re)=>{var h=He(),g=v(h);e(g,()=>se,(u,c)=>{c(u,{children:(j,n)=>{let P=()=>n==null?void 0:n().props;var $=Ge(),b=v($);e(b,()=>de,(f,z)=>{z(f,{children:(w,x)=>{y();var t=B("Nama");a(w,t)},$$slots:{default:!0}})});var D=r(b,2);L(D,G(P,{class:"border-slate-300",get value(){return o().name},set value(f){E(S,m(o).name=f,m(o))},placeholder:"Masukkan nama kuis"})),a(j,$)},$$slots:{default:!0}})});var q=r(g,2);e(q,()=>oe,(u,c)=>{c(u,{class:"[&_*]:text-[0.8rem]"})}),a(p,h)},$$slots:{default:!0}})});var ue=r(me,2);e(ue,()=>te,(s,_)=>{_(s,{form:R,name:"description",children:(p,re)=>{var h=Re(),g=v(h);e(g,()=>se,(u,c)=>{c(u,{children:(j,n)=>{let P=()=>n==null?void 0:n().props;var $=Le(),b=v($);e(b,()=>de,(f,z)=>{z(f,{children:(w,x)=>{y();var t=B("Deskripsi");a(w,t)},$$slots:{default:!0}})});var D=r(b,2);L(D,G(P,{class:"border-slate-300",get value(){return o().description},set value(f){E(S,m(o).description=f,m(o))},placeholder:"Masukkan deskripsi kuis"})),a(j,$)},$$slots:{default:!0}})});var q=r(g,2);e(q,()=>oe,(u,c)=>{c(u,{class:"[&_*]:text-[0.8rem]"})}),a(p,h)},$$slots:{default:!0}})});var ce=r(ue,2);e(ce,()=>te,(s,_)=>{_(s,{form:R,name:"time",children:(p,re)=>{var h=Ve(),g=v(h);e(g,()=>se,(u,c)=>{c(u,{children:(j,n)=>{let P=()=>n==null?void 0:n().props;var $=Ue(),b=v($);e(b,()=>de,(x,t)=>{t(x,{children:(d,k)=>{y();var J=B("Waktu pengerjaan");a(d,J)},$$slots:{default:!0}})});var D=r(b,2),f=N(D);L(f,G(P,{class:"border-slate-300",get value(){return l.hours},set value(x){l.hours=x},placeholder:"Jam",min:"0",max:"24",type:"number",name:"hours"}));var z=r(f,2);L(z,G(P,{class:"border-slate-300",get value(){return l.minutes},set value(x){l.minutes=x},placeholder:"Menit",min:"0",max:"60",type:"number",name:"minutes"}));var w=r(z,2);L(w,G(P,{class:"border-slate-300",get value(){return l.seconds},set value(x){l.seconds=x},placeholder:"Detik",min:"0",max:"60",type:"number",name:"seconds"})),O(D),a(j,$)},$$slots:{default:!0}})});var q=r(g,2);e(q,()=>oe,(u,c)=>{c(u,{class:"[&_*]:text-[0.8rem]"})}),a(p,h)},$$slots:{default:!0}})});var Z=r(ce,2);be(Z);var ee=r(Z,2);be(ee);var fe=r(ee,2),ve=N(fe),De=$e(()=>"/dashboard/teachers/classes/"+o().classroom);ge(ve,{get href(){return he(De)},variant:"outline",children:(s,_)=>{y();var p=B("Kembali");a(s,p)},$$slots:{default:!0}});var ze=r(ve,2);ge(ze,{type:"submit",children:(s,_)=>{y();var p=B("Submit");a(s,p)},$$slots:{default:!0}}),O(fe),O(Y),Ie(Y,s=>Be(s)),O(ie),O(ne),O(X),xe(Z,()=>o().classroom,s=>E(S,m(o).classroom=s,m(o))),xe(ee,()=>o().time,s=>E(S,m(o).time=s,m(o))),a(ke,X),Ke()}export{_r as component};