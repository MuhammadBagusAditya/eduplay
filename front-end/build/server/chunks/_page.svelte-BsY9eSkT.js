import { q as copy_payload, t as assign_payload, p as pop, o as head, d as attr, a as store_get, u as unsubscribe_stores, b as push, l as escape_html, s as spread_props, A as store_mutate } from './index2-JzpfwCt6.js';
import { B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_link, e as Breadcrumb_page } from './breadcrumb-page-CwCmZH2-.js';
import { F as Form_field, C as Control, a as Form_field_errors, b as Form_label } from './index5-B5v-itD7.js';
import { B as Button } from './button-Duyfcegt.js';
import { I as Input } from './input-C35Efneq.js';
import './client-Ck0mmi3f.js';
import { s as superForm } from './formData-yk_uxOf7.js';
import './index-Ddp2AB5f.js';
import './Toaster.svelte_svelte_type_style_lang-jOAoOhX0.js';
import './index-BKM0wM1Z.js';
import { z as zodClient } from './zod-CPyhwoWk.js';
import { a as addQuizSchema } from './quizzes-P9z7oEAx.js';
import './utils-BUr2r5nE.js';
import './Icon2-CRb0pbIs.js';
import './use-id-9y06sS9N.js';
import './_commonjsHelpers-B85MJLTf.js';
import './index6-DsoZqCdM.js';
import './index-BFfgIoD-.js';
import './exports-CTha0ECg.js';
import './stores-BM6n11zq.js';
import './index-server-DhylklOr.js';
import './stringify-BgjEYUR1.js';
import 'zod';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const { data, form: formAction } = $$props;
  const form = superForm(data.form, { validators: zodClient(addQuizSchema) });
  const { form: formData, enhance } = form;
  const timer = {
    hours: void 0,
    minutes: void 0,
    seconds: void 0
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Eduplay - Tambah kuis baru</title>`;
    });
    $$payload2.out += `<main class="grid grid-cols-1 gap-6"><h1 class="text-3xl font-bold text-slate-800">Tambah Kuis Baru</h1> <!---->`;
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
                Breadcrumb_link($$payload5, {
                  href: "/dashboard/teachers/classes/" + data.classroom.id,
                  class: "capitalize",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->${escape_html(data.classroom.name)}`;
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
                  href: "/dashboard/teachers/quizzes",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Kuis`;
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
    $$payload2.out += `<!----> <div class="flex flex-col gap-6"><div class="flex flex-col gap-4 rounded-lg bg-slate-100 px-6 py-4 shadow shadow-slate-900/20"><h3 class="text-xl font-bold text-primary">Data kuis baru</h3> <form method="POST" class="flex flex-col gap-3"><!---->`;
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
                placeholder: "Masukkan nama kuis"
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
                placeholder: "Masukkan deskripsi kuis"
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
      name: "time",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        {
          let children = function($$payload4, { props }) {
            $$payload4.out += `<!---->`;
            Form_label($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Waktu pengerjaan`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3">`;
            Input($$payload4, spread_props([
              props,
              {
                class: "border-slate-300",
                get value() {
                  return timer.hours;
                },
                set value($$value) {
                  timer.hours = $$value;
                  $$settled = false;
                },
                placeholder: "Jam",
                min: "0",
                max: "24",
                type: "number",
                name: "hours"
              }
            ]));
            $$payload4.out += `<!----> : `;
            Input($$payload4, spread_props([
              props,
              {
                class: "border-slate-300",
                get value() {
                  return timer.minutes;
                },
                set value($$value) {
                  timer.minutes = $$value;
                  $$settled = false;
                },
                placeholder: "Menit",
                min: "0",
                max: "60",
                type: "number",
                name: "minutes"
              }
            ]));
            $$payload4.out += `<!----> : `;
            Input($$payload4, spread_props([
              props,
              {
                class: "border-slate-300",
                get value() {
                  return timer.seconds;
                },
                set value($$value) {
                  timer.seconds = $$value;
                  $$settled = false;
                },
                placeholder: "Detik",
                min: "0",
                max: "60",
                type: "number",
                name: "seconds"
              }
            ]));
            $$payload4.out += `<!----></div>`;
          };
          Control($$payload3, { children, $$slots: { default: true } });
        }
        $$payload3.out += `<!----> <!---->`;
        Form_field_errors($$payload3, { class: "[&_*]:text-[0.8rem]" });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <input type="hidden" name="classroom"${attr("value", store_get($$store_subs ??= {}, "$formData", formData).classroom)}> <input type="hidden" name="time"${attr("value", store_get($$store_subs ??= {}, "$formData", formData).time)}> <div class="flex justify-end gap-3">`;
    Button($$payload2, {
      href: "/dashboard/teachers/classes/" + store_get($$store_subs ??= {}, "$formData", formData).classroom,
      variant: "outline",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Kembali`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Button($$payload2, {
      type: "submit",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Submit`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div></form></div></div></main>`;
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
//# sourceMappingURL=_page.svelte-BsY9eSkT.js.map
