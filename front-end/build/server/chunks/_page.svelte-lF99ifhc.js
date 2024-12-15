import { o as head, l as escape_html, p as pop, b as push, e as ensure_array_like, d as attr } from './index2-JzpfwCt6.js';
import { C as Card, a as Card_content } from './card-content-Bd8E3yV0.js';
import { B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_link, e as Breadcrumb_page } from './breadcrumb-page-CwCmZH2-.js';
import { I as Icon } from './Icon-BFX92tDv.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import './utils-BUr2r5nE.js';
import './Icon2-CRb0pbIs.js';
import './index-server-DhylklOr.js';
import './functions-x3jG1pm5.js';
import 'pocketbase';

function _page($$payload, $$props) {
  push();
  const { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Eduplay - Materi ${escape_html(data.material.name)}</title>`;
  });
  $$payload.out += `<div class="grid grid-cols-1 grid-rows-[repeat(auto-fit,_max-content)] gap-6 xl:grid-cols-[1fr,_40%]"><!---->`;
  Breadcrumb($$payload, {
    class: "xl:col-span-2",
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
              Breadcrumb_link($$payload4, {
                href: "/dashboard/classes",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Kelas`;
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
              Breadcrumb_link($$payload4, {
                href: "/dashboard/classes/" + data.material.classroom,
                class: "capitalize",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->${escape_html(data.material.expand?.classroom.name)}`;
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
              Breadcrumb_link($$payload4, {
                href: "/dashboard/materials",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Materi`;
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
                class: "capitalize",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->${escape_html(data.material.name)}`;
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
  $$payload.out += `<!----> <header class="relative z-0 col-span-1 overflow-hidden rounded-xl bg-primary px-6 py-4 shadow shadow-slate-900/20 xl:col-span-2"><div class="flex flex-wrap items-center justify-between gap-4"><h1 class="text-xl font-bold capitalize text-slate-100 sm:text-2xl">${escape_html(data.material.name)}</h1></div></header> <!---->`;
  Card($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Deskripsi materi</h2> <p class="text-sm text-slate-700">${escape_html(data.material.description)}</p>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <!---->`;
  Card($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Lampiran materi</h2> <div class="flex flex-col gap-3">`;
          if (data.material.expand?.attachments !== void 0) {
            $$payload3.out += "<!--[-->";
            const each_array = ensure_array_like(data.material.expand?.attachments);
            $$payload3.out += `<!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let attachment = each_array[$$index];
              $$payload3.out += `<div class="flex items-center gap-2">`;
              Icon($$payload3, {
                icon: attachment.type === "application" ? "mdi:file" : attachment.type === "image" ? "mdi:file-image" : attachment.type === "video" ? "mdi:file-video" : "mdi:file-document-alert",
                class: "text-4xl text-slate-700"
              });
              $$payload3.out += `<!----> <a class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-slate-700 underline"${attr("href", pb.files.getURL(attachment, attachment.file))}>${escape_html(attachment.name)}</a></div>`;
            }
            $$payload3.out += `<!--]-->`;
          } else {
            $$payload3.out += "<!--[!-->";
            $$payload3.out += `<p class="text-center text-slate-700">Tidak ada lampiran</p>`;
          }
          $$payload3.out += `<!--]--></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-lF99ifhc.js.map
