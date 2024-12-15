import { o as head, e as ensure_array_like, p as pop, d as attr, b as push, l as escape_html } from './index2-JzpfwCt6.js';
import { I as Icon } from './Icon-BFX92tDv.js';
import { B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_link, e as Breadcrumb_page } from './breadcrumb-page-CwCmZH2-.js';
import { B as Button } from './button-Duyfcegt.js';
import { I as Input } from './input-C35Efneq.js';
import { B as Badge } from './badge-DfsxAKKY.js';
import { C as Card, a as Card_content } from './card-content-Bd8E3yV0.js';
import { C as Card_header } from './card-header-B7NB_-1J.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import { g as getDay } from './time-CZBZv3F9.js';
import './Toaster.svelte_svelte_type_style_lang-jOAoOhX0.js';
import './client-Ck0mmi3f.js';
import './index-server-DhylklOr.js';
import './functions-x3jG1pm5.js';
import './utils-BUr2r5nE.js';
import './Icon2-CRb0pbIs.js';
import './index-BFfgIoD-.js';
import 'pocketbase';
import './index6-DsoZqCdM.js';
import './exports-CTha0ECg.js';

function Class_card($$payload, $$props) {
  push();
  const { classroom } = $$props;
  $$payload.out += `<a${attr("href", "/dashboard/classes/" + classroom.id)}><!---->`;
  Card($$payload, {
    class: "overflow-hidden",
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_header($$payload2, {
        class: "p-0 ",
        children: ($$payload3) => {
          $$payload3.out += `<img${attr("src", pb.files.getURL(classroom, classroom.thumbnail))} alt="banner" class="aspect-video w-full object-cover object-center">`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          const each_array = ensure_array_like(classroom.schedules);
          $$payload3.out += `<h3 class="mb-4 text-lg capitalize text-slate-700">${escape_html(classroom.name)}</h3> <div class="flex flex-wrap gap-2"><!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let schedule = each_array[$$index];
            Badge($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(getDay(schedule))}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></a>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const { data, form: formAction } = $$props;
  const classes = data.classes;
  const todayClasses = data.todayClasses;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Eduplay - Daftar Kelas</title>`;
  });
  $$payload.out += `<main class="grid grid-cols-1 gap-6"><h1 class="text-3xl font-bold text-slate-800">Daftar Kelas</h1> <!---->`;
  Breadcrumb($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Breadcrumb_list($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Breadcrumb_item($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Breadcrumb_link($$payload4, {
                href: "/dashboard",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Dashboard`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Breadcrumb_separator($$payload3, {});
          $$payload3.out += `<!----> <!---->`;
          Breadcrumb_item($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Breadcrumb_page($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Kelas`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
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
  $$payload.out += `<!----> <form method="post" class="flex flex-col gap-3 sm:flex-row sm:gap-0">`;
  Input($$payload, {
    class: "w-full sm:rounded-r-none",
    name: "classroom",
    placeholder: "Masukkan kode kelas"
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    class: "sm:rounded-l-none",
    type: "submit",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Join `;
      Icon($$payload2, { icon: "mdi:send", class: "text-xl" });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form> `;
  if (classes) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div><h3 class="mb-4 text-lg font-bold text-slate-700">Kelas hari ini</h3> `;
    if (todayClasses !== null && todayClasses.length > 0) {
      $$payload.out += "<!--[-->";
      const each_array = ensure_array_like(todayClasses);
      $$payload.out += `<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let classroom = each_array[$$index];
        Class_card($$payload, { classroom });
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="flex w-full flex-col items-center gap-3"><img src="/not-class.svg" alt="not found" class="w-[12rem]"> <h4 class="text-xl text-slate-700">Tidak ada kelas hari ini</h4></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div><h3 class="mb-4 text-lg font-bold text-slate-700">Semua kelas</h3> `;
  if (classes) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(classes);
    $$payload.out += `<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let classroom = each_array_1[$$index_1];
      Class_card($$payload, { classroom });
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="flex w-full flex-col items-center gap-3"><img src="/not-class.svg" alt="not found" class="w-[12rem]"> <h4 class="text-xl text-slate-700">Tidak ada kelas hari ini</h4></div>`;
  }
  $$payload.out += `<!--]--></div></main>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BEx0Eghh.js.map
