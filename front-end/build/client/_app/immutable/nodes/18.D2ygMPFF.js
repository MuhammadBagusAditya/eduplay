import"../chunks/disclose-version.Bg9kRutz.js";import{p as Cr,u as Lr,a as Nr,$ as Or,h as z,c as M,f,n as w,s as t,g as Pr,r as C,d as yr,t as Gr}from"../chunks/runtime.Bp4x7A-a.js";import{s as Hr,h as Vr,f as X,a as kr,g as or,d as Jr}from"../chunks/props.DpK8ESsy.js";import{a as e,b as x,t as B,c as H}from"../chunks/template.DQ3Ggw9n.js";import{c as r}from"../chunks/svelte-component.CVO9o64T.js";import{a as Kr}from"../chunks/actions.BPW6lnfX.js";import{r as wr,a as Qr,c as Br}from"../chunks/utils.Dqu1-Wdg.js";import{b as Wr,a as Xr}from"../chunks/input.aIcynM5P.js";import{I as Yr}from"../chunks/Icon.CHCRpPhx.js";import{B as Dr,b as Zr}from"../chunks/button.DODvjd4i.js";import{I as Y}from"../chunks/input.CJsoznPS.js";import{B as re,a as ee,b as lr,c as Fr,d as jr,e as ae}from"../chunks/breadcrumb-page.BYoj9mJR.js";import{s as Ar,f as te,F as V,C as J,a as K,b as Q}from"../chunks/formData.B4uWq1rj.js";import{A as se,a as oe,b as le}from"../chunks/avatar-fallback.BvSUYQcc.js";import{R as ne,T as ie,D as de,a as me,b as ue,c as fe}from"../chunks/index.CrvKBJSA.js";import"../chunks/legacy.CtaTdtmd.js";import{t as Er}from"../chunks/Toaster.svelte_svelte_type_style_lang.S0vXD1Br.js";import{a as S,z as Ur}from"../chunks/zod.B2p22QL9.js";import"../chunks/entry.LQerjGIt.js";import{p as ve}from"../chunks/pb.DLudHD8Y.js";import{F as ce}from"../chunks/form-description.TKgBtrwm.js";const _e=S.object({username:S.string({required_error:"Username harus diisi"}).min(1,"Username harus diisi").trim(),email:S.string({required_error:"Email harus diisi"}).min(1,"Email harus diisi").optional(),name:S.string({required_error:"Nama harus diisi"}).min(1,"Nama harus diisi").trim(),bio:S.string({required_error:"Bio harus diisi"}).min(1,"Bio harus diisi")}),pe=S.object({avatar:S.instanceof(File).nullable().refine(R=>R?["image/jpeg","image/png","image/jpg","image/webp"].includes(R.type):!0,"Avatar harus gambar yang valid").refine(R=>R?R.size<1024e4:!0,"Avatar harus berukuran di bawah 10mb")});var $e=x("<!> <!> <!> <!> <!>",1),he=x("<!> <!>",1),be=x("<!> <input>",1),ge=x("<!> <!> <!>",1),xe=x('<form method="post" action="?/file-upload" class="flex flex-col gap-3" enctype="multipart/form-data"><!> <!> <!></form>'),Pe=x('<div class="relative mx-auto mb-4 h-[7rem] w-[7rem] rounded-full border border-slate-400 md:h-[8rem] md:w-[8rem]"><!> <!></div> <!>',1),ye=x("<!> <!>",1),ke=x("<!> <!>",1),we=x("<!> <!>",1),Be=x("<!> <!>",1),De=x("<!> <!>",1),Fe=x("<!> <!>",1),je=x("<!> <!>",1),Ae=x("<!> <!>",1),Ee=x('<div class="flex flex-col gap-6"><!> <!>  <div class="flex flex-col gap-6"><div class="flex flex-col gap-4 rounded-lg bg-slate-100 px-6 py-4 shadow shadow-slate-900/20"><h3 class="text-xl font-bold text-primary">Data pribadi</h3> <form method="POST" action="?/update" class="flex flex-col gap-3"><!>  <!> <input type="hidden" name="email"> <!>  <!> <!></form></div></div></div>');function ra(R,A){Cr(A,!0);const nr=Hr(),Z=()=>kr(dr,"$avatar",nr),P=()=>kr(N,"$formData",nr),L=Ar(A.data.form,{validators:Ur(_e),resetForm:!1}),ir=Ar(A.data.avatarForm,{validators:Ur(pe),resetForm:!0}),{form:N,enhance:zr}=L,{form:Rr}=ir,dr=te(Rr,"avatar");Lr(()=>{var l;(l=A.form)!=null&&l.message&&(A.form.message.variant==="primary"?Er.success("Alert",{description:A.form.message.text,dismissable:!0}):Er.error("Alert",{description:A.form.message.text,dismissable:!0}))});var rr=Ee();Vr(l=>{Or.title="Eduplay - Edit Profile"});var mr=M(rr);r(mr,()=>re,(l,D)=>{D(l,{class:"xl:col-span-2",children:(y,O)=>{var v=H(),c=f(v);r(c,()=>ee,(F,m)=>{m(F,{children:(u,T)=>{var h=$e(),n=f(h);r(n,()=>lr,(a,i)=>{i(a,{children:(s,$)=>{var o=H(),U=f(o);r(U,()=>Fr,(g,E)=>{E(g,{href:"/dashboard",children:(j,q)=>{w();var k=B("Dashboard");e(j,k)},$$slots:{default:!0}})}),e(s,o)},$$slots:{default:!0}})});var _=t(n,2);r(_,()=>jr,(a,i)=>{i(a,{})});var p=t(_,2);r(p,()=>lr,(a,i)=>{i(a,{children:(s,$)=>{var o=H(),U=f(o);r(U,()=>Fr,(g,E)=>{E(g,{children:(j,q)=>{w();var k=B("Profile");e(j,k)},$$slots:{default:!0}})}),e(s,o)},$$slots:{default:!0}})});var d=t(p,2);r(d,()=>jr,(a,i)=>{i(a,{})});var b=t(d,2);r(b,()=>lr,(a,i)=>{i(a,{children:(s,$)=>{var o=H(),U=f(o);r(U,()=>ae,(g,E)=>{E(g,{children:(j,q)=>{w();var k=B("Edit");e(j,k)},$$slots:{default:!0}})}),e(s,o)},$$slots:{default:!0}})}),e(u,h)},$$slots:{default:!0}})}),e(y,v)},$$slots:{default:!0}})});var ur=t(mr,2);r(ur,()=>ne,(l,D)=>{D(l,{children:(y,O)=>{var v=Pe(),c=f(v),F=M(c);r(F,()=>se,(h,n)=>{n(h,{class:"h-full w-full",children:(_,p)=>{var d=he(),b=f(d),a=yr(()=>Z().length>0?URL.createObjectURL(Z()[0]):A.data.user.avatar?ve.files.getURL(A.data.user,A.data.user.avatar):"/unknown.jpg");r(b,()=>oe,(s,$)=>{$(s,{get src(){return Pr(a)},alt:"user profile",class:"h-full w-full object-cover object-center"})});var i=t(b,2);r(i,()=>le,(s,$)=>{$(s,{children:(o,U)=>{w();var g=B("ED");e(o,g)},$$slots:{default:!0}})}),e(_,d)},$$slots:{default:!0}})});var m=t(F,2),u=yr(()=>Br(Zr({variant:"outline",size:"icon"}),"absolute bottom-0 right-0  rounded-full px-4 py-2"));r(m,()=>ie,(h,n)=>{n(h,{get class(){return Pr(u)},children:(_,p)=>{Yr(_,{icon:"mdi:pencil",class:"text-2xl"})},$$slots:{default:!0}})}),C(c);var T=t(c,2);r(T,()=>de,(h,n)=>{n(h,{children:(_,p)=>{var d=xe(),b=M(d);r(b,()=>me,(s,$)=>{$(s,{children:(o,U)=>{var g=H(),E=f(g);r(E,()=>ue,(j,q)=>{q(j,{children:(k,I)=>{w();var W=B("Ganti avatar anda");e(k,W)},$$slots:{default:!0}})}),e(o,g)},$$slots:{default:!0}})});var a=t(b,2);r(a,()=>V,(s,$)=>{$(s,{form:ir,name:"avatar",children:(o,U)=>{var g=ge(),E=f(g);r(E,()=>J,(k,I)=>{I(k,{children:(hr,G)=>{let Tr=()=>G==null?void 0:G().props;var br=be(),gr=f(br);r(gr,()=>Q,(sr,qr)=>{qr(sr,{children:(Ir,Ue)=>{w();var Mr=B("Avatar");e(Ir,Mr)},$$slots:{default:!0}})});var tr=t(gr,2);wr(tr);let xr;Gr(()=>xr=Qr(tr,xr,{...Tr(),type:"file",class:Br("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50")})),Xr(tr,Z,sr=>Jr(dr,sr)),e(hr,br)},$$slots:{default:!0}})});var j=t(E,2);r(j,()=>ce,(k,I)=>{I(k,{children:(W,hr)=>{w();var G=B("Hanya menerima jpg, jpeg, png, dan webp");e(W,G)},$$slots:{default:!0}})});var q=t(j,2);r(q,()=>K,(k,I)=>{I(k,{class:"[&_*]:text-[0.8rem]"})}),e(o,g)},$$slots:{default:!0}})});var i=t(a,2);r(i,()=>fe,(s,$)=>{$(s,{children:(o,U)=>{Dr(o,{type:"submit",children:(g,E)=>{w();var j=B("Submit");e(g,j)},$$slots:{default:!0}})},$$slots:{default:!0}})}),C(d),e(_,d)},$$slots:{default:!0}})}),e(y,v)},$$slots:{default:!0}})});var fr=t(ur,2),vr=M(fr),er=t(M(vr),2),cr=M(er);r(cr,()=>V,(l,D)=>{D(l,{form:L,name:"username",children:(y,O)=>{var v=ke(),c=f(v);r(c,()=>J,(m,u)=>{u(m,{children:(h,n)=>{let _=()=>n==null?void 0:n().props;var p=ye(),d=f(p);r(d,()=>Q,(a,i)=>{i(a,{children:(s,$)=>{w();var o=B("Username");e(s,o)},$$slots:{default:!0}})});var b=t(d,2);Y(b,or(_,{class:"border-slate-300",get value(){return P().username},set value(a){X(N,z(P).username=a,z(P))},placeholder:"Masukkan username anda"})),e(h,p)},$$slots:{default:!0}})});var F=t(c,2);r(F,()=>K,(m,u)=>{u(m,{class:"[&_*]:text-[0.8rem]"})}),e(y,v)},$$slots:{default:!0}})});var _r=t(cr,2);r(_r,()=>V,(l,D)=>{D(l,{form:L,name:"email",children:(y,O)=>{var v=Be(),c=f(v);r(c,()=>J,(m,u)=>{u(m,{children:(h,n)=>{var _=we(),p=f(_);r(p,()=>Q,(b,a)=>{a(b,{children:(i,s)=>{w();var $=B("Email");e(i,$)},$$slots:{default:!0}})});var d=t(p,2);Y(d,{class:"border-slate-300",get value(){return P().email},placeholder:"Masukkan email anda",type:"email",disabled:!0}),e(h,_)},$$slots:{default:!0}})});var F=t(c,2);r(F,()=>K,(m,u)=>{u(m,{class:"[&_*]:text-[0.8rem]"})}),e(y,v)},$$slots:{default:!0}})});var ar=t(_r,2);wr(ar);var pr=t(ar,2);r(pr,()=>V,(l,D)=>{D(l,{form:L,name:"name",children:(y,O)=>{var v=Fe(),c=f(v);r(c,()=>J,(m,u)=>{u(m,{children:(h,n)=>{let _=()=>n==null?void 0:n().props;var p=De(),d=f(p);r(d,()=>Q,(a,i)=>{i(a,{children:(s,$)=>{w();var o=B("Nama");e(s,o)},$$slots:{default:!0}})});var b=t(d,2);Y(b,or(_,{class:"border-slate-300",get value(){return P().name},set value(a){X(N,z(P).name=a,z(P))},placeholder:"Masukkan nama anda"})),e(h,p)},$$slots:{default:!0}})});var F=t(c,2);r(F,()=>K,(m,u)=>{u(m,{class:"[&_*]:text-[0.8rem]"})}),e(y,v)},$$slots:{default:!0}})});var $r=t(pr,2);r($r,()=>V,(l,D)=>{D(l,{form:L,name:"bio",children:(y,O)=>{var v=Ae(),c=f(v);r(c,()=>J,(m,u)=>{u(m,{children:(h,n)=>{let _=()=>n==null?void 0:n().props;var p=je(),d=f(p);r(d,()=>Q,(a,i)=>{i(a,{children:(s,$)=>{w();var o=B("Bio");e(s,o)},$$slots:{default:!0}})});var b=t(d,2);Y(b,or(_,{class:"border-slate-300",get value(){return P().bio},set value(a){X(N,z(P).bio=a,z(P))},placeholder:"Masukkan bio anda"})),e(h,p)},$$slots:{default:!0}})});var F=t(c,2);r(F,()=>K,(m,u)=>{u(m,{class:"[&_*]:text-[0.8rem]"})}),e(y,v)},$$slots:{default:!0}})});var Sr=t($r,2);Dr(Sr,{type:"submit",class:"ml-auto sm:w-fit",children:(l,D)=>{w();var y=B("Submit");e(l,y)},$$slots:{default:!0}}),C(er),Kr(er,l=>zr(l)),C(vr),C(fr),C(rr),Wr(ar,()=>P().email,l=>X(N,z(P).email=l,z(P))),e(R,rr),Nr()}export{ra as component};
