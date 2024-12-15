import { d as attr, a as store_get, u as unsubscribe_stores, p as pop, b as push, e as ensure_array_like, l as escape_html } from './index2-JzpfwCt6.js';
import { I as Icon } from './Icon-BFX92tDv.js';
import { B as Button, b as buttonVariants } from './button-Duyfcegt.js';
import { w as writable } from './index6-DsoZqCdM.js';
import { S as Separator } from './separator-CJX90iGV.js';
import { A as Avatar, a as Avatar_image, b as Avatar_fallback } from './avatar-fallback-BhdBuUna.js';
import { R as Root, T as Trigger, D as Dialog_content, a as Dialog_header, b as Dialog_footer, c as Dialog_title } from './index4-BkA9mXpK.js';
import { p as page } from './stores-BM6n11zq.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import { D as Dialog_description } from './dialog-description-BEmtFmnm.js';
import { c as cn } from './utils-BUr2r5nE.js';
import './index-server-DhylklOr.js';
import './functions-x3jG1pm5.js';
import './index-BFfgIoD-.js';
import './use-id-9y06sS9N.js';
import './_commonjsHelpers-B85MJLTf.js';
import './attrs-CL1THhfQ.js';
import './scroll-lock-ByQIsybU.js';
import './x-C0GKGse2.js';
import './Icon2-CRb0pbIs.js';
import './client-Ck0mmi3f.js';
import './exports-CTha0ECg.js';
import 'pocketbase';

const isAppear = writable(false);
function Sidebar$1($$payload, $$props) {
  push();
  var $$store_subs;
  const { user } = $$props;
  const links = [
    {
      name: "Beranda",
      href: "/dashboard",
      icon: "mdi:home-outline",
      activeIcon: "mdi:home",
      role: "(student|teacher)",
      regex: "/dashboard(/?)$"
    },
    {
      name: "Daftar Kelas",
      href: "/dashboard/classes",
      icon: "mdi:school-outline",
      activeIcon: "mdi:school",
      role: "student"
    },
    {
      name: "Daftar Materi",
      href: "/dashboard/materials",
      icon: "mdi:file-document-outline",
      activeIcon: "mdi:file-document",
      role: "student"
    },
    {
      name: "Daftar Tugas",
      href: "/dashboard/assignments",
      icon: "mdi:clipboard-text-outline",
      activeIcon: "mdi:clipboard-text",
      role: "student"
    },
    {
      name: "Daftar Kuis",
      href: "/dashboard/quizzes",
      icon: "mdi:help-box-outline",
      activeIcon: "mdi:help-box",
      role: "student"
    },
    {
      name: "Manajemen Kelas",
      href: "/dashboard/teachers/classes",
      icon: "mdi:view-dashboard-outline",
      activeIcon: "mdi:view-dashboard",
      role: "teacher"
    },
    {
      name: "Manajemen Materi",
      href: "/dashboard/teachers/materials",
      icon: "mdi:file-document-outline",
      activeIcon: "mdi:file-document",
      role: "teacher"
    },
    {
      name: "Manajemen Tugas",
      href: "/dashboard/teachers/assignments",
      icon: "mdi:clipboard-text-outline",
      activeIcon: "mdi:clipboard-text",
      role: "teacher"
    },
    {
      name: "Manajemen Kuis",
      href: "/dashboard/teachers/quizzes",
      icon: "mdi:help-box-outline",
      activeIcon: "mdi:help-box",
      role: "teacher"
    }
  ];
  const each_array = ensure_array_like(links);
  $$payload.out += `<aside class="flex h-full w-full flex-col bg-primary px-6 py-4"><div class="flex gap-3 overflow-hidden"><a href="/dashboard/profile/edit"><!---->`;
  Avatar($$payload, {
    class: "h-[4rem] w-[4rem]",
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Avatar_image($$payload2, {
        src: user?.avatar ? pb.files.getURL(user, user?.avatar) : "/unknown.jpg",
        alt: "user profile",
        class: "h-full w-full object-cover object-center"
      });
      $$payload2.out += `<!----> <!---->`;
      Avatar_fallback($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->ED`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></a> <div class="grid grid-cols-1 grid-rows-[auto,_auto]"><h4 class="flex items-center gap-3"><span class="overflow-hidden text-ellipsis whitespace-nowrap text-xl text-primary-foreground">${escape_html(user?.name !== "" ? user?.name : user?.username)}</span> <button class="block size-4 text-primary-foreground lg:hidden">`;
  Icon($$payload, { icon: "mdi:close", class: "text-xl" });
  $$payload.out += `<!----></button></h4> <p class="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-primary-foreground">${escape_html(`@${user?.username}`)}</p></div></div> `;
  Separator($$payload, { class: "my-3" });
  $$payload.out += `<!----> <div class="flex flex-1 flex-col gap-2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    if (link.role.match(user?.role)) {
      $$payload.out += "<!--[-->";
      if (!store_get($$store_subs ??= {}, "$page", page).url.pathname.match("^" + (link.regex ? link.regex : link.href + "([/]?|[/](.+)?)$"))) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<a${attr("href", link.href)} class="flex w-full items-center justify-start gap-2 overflow-hidden text-nowrap rounded-lg bg-primary px-0 py-2 text-primary-foreground transition-all hover:bg-slate-100 hover:px-4 hover:text-slate-800">`;
        Icon($$payload, { icon: link.icon, class: "text-2xl" });
        $$payload.out += `<!----> ${escape_html(link.name)}</a>`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<span class="flex w-full items-center justify-start gap-2 overflow-hidden text-nowrap rounded-lg bg-slate-100 px-4 py-2 text-slate-800 transition-all">`;
        Icon($$payload, { icon: link.activeIcon, class: "text-2xl" });
        $$payload.out += `<!----> ${escape_html(link.name)}</span>`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div> `;
  Separator($$payload, { class: "my-3" });
  $$payload.out += `<!----> <!---->`;
  Root($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Trigger($$payload2, {
        class: buttonVariants({ variant: "default" }),
        children: ($$payload3) => {
          Icon($$payload3, { icon: "mdi:logout", class: "text-2xl" });
          $$payload3.out += `<!----> Sign Out`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Dialog_content($$payload2, {
        class: "sm:w-80",
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Dialog_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Dialog_title($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Konfirmasi`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Dialog_description($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Apakah anda yakin untuk sign out?`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Dialog_footer($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<form action="/auth/sign-out" method="post" class="flex w-full justify-end">`;
              Button($$payload4, {
                type: "submit",
                class: "mt-2",
                children: ($$payload5) => {
                  Icon($$payload5, { icon: "mdi:logout", class: "text-2xl" });
                  $$payload5.out += `<!----> Sign Out`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></form>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></aside>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
const Sidebar = {
  Root: Sidebar$1,
  isAppear
};
function Navbar($$payload, $$props) {
  push();
  function toggleSidebar(e) {
    e.preventDefault();
    Sidebar.isAppear.update((val) => !val);
  }
  $$payload.out += `<nav class="sticky left-0 top-0 z-[4] mb-8 w-full bg-white py-4 shadow"><div class="container mx-auto flex items-center"><a href="/" class="text-2xl font-bold text-primary">Eduplay</a> <div class="flex-1"></div> `;
  Button($$payload, {
    variant: "ghost",
    class: "block lg:hidden [&_svg]:size-auto",
    onclick: toggleSidebar,
    children: ($$payload2) => {
      Icon($$payload2, {
        icon: "mdi:menu",
        class: "text-xl text-slate-700"
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></nav>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  const { children, data } = $$props;
  $$payload.out += `<div class="relative grid h-screen grid-rows-1 overflow-hidden bg-background lg:grid-cols-[20vw,_1fr]"><div${attr("class", cn("fixed top-0 z-[5] h-full w-full max-w-[24rem] transition-all lg:sticky lg:left-0 lg:block", store_get($$store_subs ??= {}, "$isAppear", isAppear) ? "left-0" : "left-[-100%]"))}><!---->`;
  Sidebar.Root($$payload, { user: data?.user });
  $$payload.out += `<!----></div> <div class="overflow-y-auto pb-8">`;
  Navbar($$payload);
  $$payload.out += `<!----> <main class="container">`;
  children($$payload);
  $$payload.out += `<!----></main></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BvQJU3cU.js.map
