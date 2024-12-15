import { o as head, e as ensure_array_like, p as pop, b as push, d as attr, l as escape_html } from './index2-JzpfwCt6.js';
import { B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_link, e as Breadcrumb_page } from './breadcrumb-page-CwCmZH2-.js';
import './functions-x3jG1pm5.js';
import { C as Card, a as Card_content } from './card-content-Bd8E3yV0.js';
import { C as Card_header } from './card-header-B7NB_-1J.js';
import { C as Card_title } from './card-title-CF-XbItb.js';
import { S as Separator } from './separator-CJX90iGV.js';
import { B as Badge } from './badge-DfsxAKKY.js';
import './utils-BUr2r5nE.js';
import './Icon2-CRb0pbIs.js';
import './use-id-9y06sS9N.js';
import './_commonjsHelpers-B85MJLTf.js';
import './attrs-CL1THhfQ.js';
import './index-BFfgIoD-.js';

function _page($$payload, $$props) {
  push();
  const { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Eduplay - Daftar Tugas</title>`;
  });
  $$payload.out += `<main class="grid grid-cols-1 gap-6"><h1 class="text-3xl font-bold text-slate-800">Daftar Tugas</h1> <!---->`;
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
                  $$payload5.out += `<!---->Tugas`;
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
  $$payload.out += `<!----> `;
  if (data.classes.length) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(data.classes);
    $$payload.out += `<!--[-->`;
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let classroom = each_array[$$index_1];
      $$payload.out += `<!---->`;
      Card($$payload, {
        children: ($$payload2) => {
          $$payload2.out += `<!---->`;
          Card_header($$payload2, {
            children: ($$payload3) => {
              $$payload3.out += `<!---->`;
              Card_title($$payload3, {
                class: "text-lg capitalize text-primary",
                children: ($$payload4) => {
                  $$payload4.out += `<!---->${escape_html(classroom.name)}`;
                },
                $$slots: { default: true }
              });
              $$payload3.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload2.out += `<!----> <!---->`;
          Card_content($$payload2, {
            class: "flex flex-col gap-3",
            children: ($$payload3) => {
              if (classroom.expand?.assignments_via_classroom.length > 0) {
                $$payload3.out += "<!--[-->";
                const each_array_1 = ensure_array_like(classroom.expand?.assignments_via_classroom);
                $$payload3.out += `<!--[-->`;
                for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
                  let assignment = each_array_1[$$index];
                  $$payload3.out += `<div class="flex w-full items-center justify-between gap-3"><a class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap capitalize"${attr("href", "/dashboard/assignments/" + assignment.id)}>${escape_html(assignment.name)}</a> `;
                  if (assignment.status === "open") {
                    $$payload3.out += "<!--[-->";
                    Badge($$payload3, {
                      children: ($$payload4) => {
                        $$payload4.out += `<!---->Dibuka`;
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$payload3.out += "<!--[!-->";
                    Badge($$payload3, {
                      variant: "destructive",
                      children: ($$payload4) => {
                        $$payload4.out += `<!---->Ditutup`;
                      },
                      $$slots: { default: true }
                    });
                  }
                  $$payload3.out += `<!--]--></div> `;
                  Separator($$payload3, { class: "last:hidden" });
                  $$payload3.out += `<!---->`;
                }
                $$payload3.out += `<!--]-->`;
              } else {
                $$payload3.out += "<!--[!-->";
                $$payload3.out += `<p class="text-center text-slate-700">Tidak ada data</p>`;
              }
              $$payload3.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload2.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload.out += `<!---->`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="flex w-full flex-col items-center gap-3"><img src="/not-class.svg" alt="not found" class="w-[12rem]"> <h4 class="text-xl text-slate-700">Tidak ada tugas saat ini</h4></div>`;
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-C0Pw13Lk.js.map
