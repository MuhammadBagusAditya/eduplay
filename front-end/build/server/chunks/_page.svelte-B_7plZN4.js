import { q as copy_payload, t as assign_payload, p as pop, o as head, a as store_get, d as attr, u as unsubscribe_stores, b as push, s as spread_props, A as store_mutate, l as escape_html, h as spread_attributes, e as ensure_array_like } from './index2-JzpfwCt6.js';
import { B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_link, e as Breadcrumb_page } from './breadcrumb-page-CwCmZH2-.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { F as Form_field, L as Label, C as Control, a as Form_field_errors, b as Form_label } from './index5-B5v-itD7.js';
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from './index7-0eKKU6w0.js';
import { B as Button } from './button-Duyfcegt.js';
import { I as Input } from './input-C35Efneq.js';
import './client-Ck0mmi3f.js';
import { s as superForm, f as fileProxy } from './formData-yk_uxOf7.js';
import './index-Ddp2AB5f.js';
import './Toaster.svelte_svelte_type_style_lang-jOAoOhX0.js';
import { g as getDay, d as days } from './time-CZBZv3F9.js';
import { F as Form_description } from './form-description-C2ZJ-G5N.js';
import './Icon2-CRb0pbIs.js';
import './use-id-9y06sS9N.js';
import './_commonjsHelpers-B85MJLTf.js';
import './index6-DsoZqCdM.js';
import './scroll-lock-ByQIsybU.js';
import './index-server-DhylklOr.js';
import './mounted-DTTuSVjU.js';
import './chevron-down-CREtnokf.js';
import './attrs-CL1THhfQ.js';
import './index-BFfgIoD-.js';
import './exports-CTha0ECg.js';
import './stores-BM6n11zq.js';
import './stringify-BgjEYUR1.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const { data, form: formAction } = $$props;
  const form = superForm(data.form);
  const { form: formData, enhance } = form;
  const thumbnail = fileProxy(form, "thumbnail");
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Eduplay - Tambah kelas baru</title>`;
    });
    $$payload2.out += `<main class="grid grid-cols-1 gap-6"><h1 class="text-3xl font-bold text-slate-800">Tambah Kelas Baru</h1> <!---->`;
    Breadcrumb($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Breadcrumb_list($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Breadcrumb_item($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Breadcrumb_link($$payload5, {
                  href: "/dashboard",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Dashboard`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Breadcrumb_separator($$payload4, {});
            $$payload4.out += `<!----> <!---->`;
            Breadcrumb_item($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Breadcrumb_link($$payload5, {
                  href: "/dashboard/teachers/classes",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Kelas`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Breadcrumb_separator($$payload4, {});
            $$payload4.out += `<!----> <!---->`;
            Breadcrumb_item($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Breadcrumb_page($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Tambah`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
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
    $$payload2.out += `<!----> <div class="flex flex-col gap-6"><div class="flex flex-col gap-4 rounded-lg bg-slate-100 px-6 py-4 shadow shadow-slate-900/20"><h3 class="text-xl font-bold text-primary">Data kelas baru</h3> <form method="POST" class="flex flex-col gap-3" enctype="multipart/form-data"><!---->`;
    Form_field($$payload2, {
      form,
      name: "name",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        {
          let children = function($$payload4, { props }) {
            $$payload4.out += `<!---->`;
            Form_label($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Nama`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, spread_props([
              props,
              {
                class: "border-slate-300",
                get value() {
                  return store_get($$store_subs ??= {}, "$formData", formData).name;
                },
                set value($$value) {
                  store_mutate($$store_subs ??= {}, "$formData", formData, store_get($$store_subs ??= {}, "$formData", formData).name = $$value);
                  $$settled = false;
                },
                placeholder: "Masukkan nama kelas"
              }
            ]));
            $$payload4.out += `<!---->`;
          };
          Control($$payload3, { children, $$slots: { default: true } });
        }
        $$payload3.out += `<!----> <!---->`;
        Form_field_errors($$payload3, { class: "[&_*]:text-[0.8rem]" });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->  <!---->`;
    Form_field($$payload2, {
      form,
      name: "description",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        {
          let children = function($$payload4, { props }) {
            $$payload4.out += `<!---->`;
            Form_label($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Deskripsi`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, spread_props([
              props,
              {
                class: "border-slate-300",
                get value() {
                  return store_get($$store_subs ??= {}, "$formData", formData).description;
                },
                set value($$value) {
                  store_mutate($$store_subs ??= {}, "$formData", formData, store_get($$store_subs ??= {}, "$formData", formData).description = $$value);
                  $$settled = false;
                },
                placeholder: "Masukkan deskripsi kelas"
              }
            ]));
            $$payload4.out += `<!---->`;
          };
          Control($$payload3, { children, $$slots: { default: true } });
        }
        $$payload3.out += `<!----> <!---->`;
        Form_field_errors($$payload3, { class: "[&_*]:text-[0.8rem]" });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->  <!---->`;
    Form_field($$payload2, {
      form,
      name: "schedules",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        {
          let children = function($$payload4, { props }) {
            $$payload4.out += `<!---->`;
            Form_label($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Jadwal mingguan`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Root($$payload4, {
              type: "multiple",
              get value() {
                return store_get($$store_subs ??= {}, "$formData", formData).schedules;
              },
              set value($$value) {
                store_mutate($$store_subs ??= {}, "$formData", formData, store_get($$store_subs ??= {}, "$formData", formData).schedules = $$value);
                $$settled = false;
              },
              name: props.name,
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Select_trigger($$payload5, spread_props([
                  props,
                  {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->${escape_html(store_get($$store_subs ??= {}, "$formData", formData).schedules.length > 0 ? store_get($$store_subs ??= {}, "$formData", formData).schedules.sort().map((v) => getDay(v)).join(", ") : "Pilih jadwal untuk kelas")}`;
                    },
                    $$slots: { default: true }
                  }
                ]));
                $$payload5.out += `<!----> <!---->`;
                Select_content($$payload5, {
                  children: ($$payload6) => {
                    const each_array = ensure_array_like(days);
                    $$payload6.out += `<!--[-->`;
                    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
                      let day = each_array[i];
                      $$payload6.out += `<!---->`;
                      Select_item($$payload6, { value: `${i + 1}`, label: day });
                      $$payload6.out += `<!---->`;
                    }
                    $$payload6.out += `<!--]-->`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          };
          Control($$payload3, { children, $$slots: { default: true } });
        }
        $$payload3.out += `<!----> <!---->`;
        Form_field_errors($$payload3, { class: "[&_*]:text-[0.8rem]" });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->  <!---->`;
    Form_field($$payload2, {
      form,
      name: "thumbnail",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        {
          let children = function($$payload4, { props }) {
            $$payload4.out += `<!---->`;
            Form_label($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Thumbnail`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <input${spread_attributes({
              ...props,
              type: "file",
              class: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50")
            })}>`;
          };
          Control($$payload3, { children, $$slots: { default: true } });
        }
        $$payload3.out += `<!----> <!---->`;
        Form_description($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->Hanya menerima jpg, jpeg, png, dan webp`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> <!---->`;
        Form_field_errors($$payload3, { class: "[&_*]:text-[0.8rem]" });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <div class="flex flex-col gap-3">`;
    Label($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Preview`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    if (store_get($$store_subs ??= {}, "$thumbnail", thumbnail).length > 0) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<img${attr("src", URL.createObjectURL(store_get($$store_subs ??= {}, "$thumbnail", thumbnail)[0]))} alt="Preview thumbnail" class="aspect-video w-full max-w-[20rem] rounded-lg border border-slate-300 object-cover object-center">`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div class="aspect-video w-full max-w-[20rem] rounded-lg border border-slate-300"></div>`;
    }
    $$payload2.out += `<!--]--></div> `;
    Button($$payload2, {
      type: "submit",
      class: "ml-auto sm:w-fit",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Submit`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></form></div></div></main>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-B_7plZN4.js.map
