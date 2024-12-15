import { q as copy_payload, t as assign_payload, p as pop, o as head, l as escape_html, b as push, s as spread_props, a as store_get, A as store_mutate, u as unsubscribe_stores } from './index2-JzpfwCt6.js';
import { I as Input } from './input-C35Efneq.js';
import { B as Button } from './button-Duyfcegt.js';
import { S as Separator } from './separator-CJX90iGV.js';
import { F as Form_field, C as Control, a as Form_field_errors, b as Form_label } from './index5-B5v-itD7.js';
import { A as Alert } from './alert-99lzmbOY.js';
import { s as signInFormSchema } from './auth-nUcMnFzj.js';
import './client-Ck0mmi3f.js';
import { s as superForm } from './formData-yk_uxOf7.js';
import './index-Ddp2AB5f.js';
import './index-BKM0wM1Z.js';
import { z as zodClient } from './zod-CPyhwoWk.js';
import './utils-BUr2r5nE.js';
import './index-BFfgIoD-.js';
import './use-id-9y06sS9N.js';
import './_commonjsHelpers-B85MJLTf.js';
import './attrs-CL1THhfQ.js';
import './index6-DsoZqCdM.js';
import './Icon-BFX92tDv.js';
import './index-server-DhylklOr.js';
import './functions-x3jG1pm5.js';
import 'zod';
import './exports-CTha0ECg.js';
import './stores-BM6n11zq.js';
import './stringify-BgjEYUR1.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let { data, form: formAction } = $$props;
  const form = superForm(data.form, { validators: zodClient(signInFormSchema) });
  const { form: formData, enhance } = form;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Eduplay - Sign In</title>`;
    });
    $$payload2.out += `<form method="POST" class="flex w-[85%] flex-col gap-3 rounded-xl bg-card/30 px-8 py-4 shadow-lg shadow-slate-900/20 backdrop-blur-lg md:w-[50%] lg:mr-20 lg:w-[35%]"><img src="/logo.png" alt="logo app" class="mx-auto w-[12rem]"> <h2 class="mb-3 text-2xl font-bold text-slate-800">Masuk sekarang</h2> `;
    if (formAction?.message) {
      $$payload2.out += "<!--[-->";
      Alert($$payload2, {
        variant: formAction.message.variant ?? "primary",
        children: ($$payload3) => {
          $$payload3.out += `<!---->${escape_html(formAction.message.text ?? "error")}`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div class="flex flex-col gap-2"><!---->`;
    Form_field($$payload2, {
      form,
      name: "email",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        {
          let children = function($$payload4, { props }) {
            $$payload4.out += `<!---->`;
            Form_label($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Email`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, spread_props([
              props,
              {
                class: "border-slate-300 bg-card/20",
                get value() {
                  return store_get($$store_subs ??= {}, "$formData", formData).email;
                },
                set value($$value) {
                  store_mutate($$store_subs ??= {}, "$formData", formData, store_get($$store_subs ??= {}, "$formData", formData).email = $$value);
                  $$settled = false;
                },
                type: "email",
                placeholder: "Masukkan email anda"
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
      name: "password",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        {
          let children = function($$payload4, { props }) {
            $$payload4.out += `<!---->`;
            Form_label($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Password`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, spread_props([
              props,
              {
                class: "border-slate-300 bg-card/20",
                get value() {
                  return store_get($$store_subs ??= {}, "$formData", formData).password;
                },
                set value($$value) {
                  store_mutate($$store_subs ??= {}, "$formData", formData, store_get($$store_subs ??= {}, "$formData", formData).password = $$value);
                  $$settled = false;
                },
                type: "password",
                placeholder: "Masukkan password anda"
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
    $$payload2.out += `<!----> <div class="mt-3 flex justify-start">`;
    Button($$payload2, {
      class: "w-full",
      type: "submit",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Submit`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div> `;
    Separator($$payload2, {});
    $$payload2.out += `<!----> <p class="text-slate-700">Belum punya akun? <a href="/auth/sign-up" class="text-primary">Daftar yuk</a></p></div></form>`;
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
//# sourceMappingURL=_page.svelte-C9IVtKFd.js.map
