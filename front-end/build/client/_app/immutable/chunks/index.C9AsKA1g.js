import"./disclose-version.Bg9kRutz.js";import{p as v,f as c,g as y,a as p,d as P,s as T,i as V,n as H,c as I,r as J,t as K}from"./runtime.Bp4x7A-a.js";import{c as D,a as d,b as _}from"./template.DQ3Ggw9n.js";import{s as C}from"./snippet.DzwRyOEQ.js";import{c as h,a as L}from"./utils.Dqu1-Wdg.js";import{c as f,g as u,r as b,e as M}from"./props.DpK8ESsy.js";import{c as m}from"./svelte-component.CVO9o64T.js";import{D as O,a as Q,b as U,X as W,c as Y,d as Z,e as tt}from"./x.BVp5BWZm.js";import{c as et}from"./index.DESm0kp4.js";import{P as at}from"./scroll-lock.Cdff5hXG.js";function st(o,t){v(t,!0);let a=f(t,"ref",15,null),r=f(t,"class",7),e=b(t,["$$slots","$$events","$$legacy","ref","class"]);var s=D(),n=c(s),l=P(()=>h("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80",r()));return m(n,()=>O,(i,g)=>{g(i,u({get ref(){return a()},set ref(w){a(w)},get class(){return y(l)}},()=>e))}),d(o,s),p({get class(){return r()},set class(i){r(i)}})}const rt=et({base:"bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",variants:{side:{top:"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border-b",bottom:"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border-t",left:"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",right:"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm"}},defaultVariants:{side:"right"}});var ot=_('<!> <span class="sr-only">Close</span>',1),nt=_("<!> <!>",1),lt=_("<!> <!>",1);function yt(o,t){v(t,!0);let a=f(t,"ref",15,null),r=f(t,"side",3,"right"),e=b(t,["$$slots","$$events","$$legacy","ref","class","side","portalProps","children"]);var s=D(),n=c(s);m(n,()=>at,(l,i)=>{i(l,u(()=>t.portalProps,{children:(g,w)=>{var S=lt(),$=c(S);st($,{});var N=T($,2),X=P(()=>h(rt({side:r()}),t.class));m(N,()=>Q,(j,q)=>{q(j,u({get ref(){return a()},set ref(x){a(x)},get class(){return y(X)}},()=>e,{children:(x,dt)=>{var k=nt(),z=c(k);C(z,()=>t.children??V);var A=T(z,2);m(A,()=>U,(B,E)=>{E(B,{class:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",children:(F,ct)=>{var R=ot(),G=c(R);W(G,{class:"size-4"}),H(2),d(F,R)},$$slots:{default:!0}})}),d(x,k)},$$slots:{default:!0}}))}),d(g,S)},$$slots:{default:!0}}))}),d(o,s),p()}var it=_("<div><!></div>");function Pt(o,t){v(t,!0);let a=f(t,"ref",15,null),r=b(t,["$$slots","$$events","$$legacy","ref","class","children"]);var e=it();let s;var n=I(e);C(n,()=>t.children??V),J(e),M(e,l=>a(l),()=>a()),K(()=>s=L(e,s,{class:h("flex flex-col space-y-2 text-center sm:text-left",t.class),...r})),d(o,e),p()}function Dt(o,t){v(t,!0);let a=f(t,"ref",15,null),r=b(t,["$$slots","$$events","$$legacy","ref","class"]);var e=D(),s=c(e),n=P(()=>h("text-foreground text-lg font-semibold",t.class));m(s,()=>Y,(l,i)=>{i(l,u({get ref(){return a()},set ref(g){a(g)},get class(){return y(n)}},()=>r))}),d(o,e),p()}const wt=Z,St=tt;export{wt as R,yt as S,St as T,Pt as a,Dt as b};