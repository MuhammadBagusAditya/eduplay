import { q as copy_payload, t as assign_payload, p as pop, o as head, d as attr, a as store_get, u as unsubscribe_stores, b as push, h as spread_attributes, s as spread_props, A as store_mutate } from './index2-JzpfwCt6.js';
import { I as Icon } from './Icon-BFX92tDv.js';
import { B as Button, b as buttonVariants } from './button-Duyfcegt.js';
import { I as Input } from './input-C35Efneq.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_link, e as Breadcrumb_page } from './breadcrumb-page-CwCmZH2-.js';
import { F as Form_field, C as Control, a as Form_field_errors, b as Form_label } from './index5-B5v-itD7.js';
import { A as Avatar, a as Avatar_image, b as Avatar_fallback } from './avatar-fallback-BhdBuUna.js';
import { R as Root, T as Trigger, D as Dialog_content, a as Dialog_header, b as Dialog_footer, c as Dialog_title } from './index4-BkA9mXpK.js';
import './Toaster.svelte_svelte_type_style_lang-jOAoOhX0.js';
import { e as editProfileSchema, a as editAvatarSchema } from './18-DPrMFITc.js';
import './client-Ck0mmi3f.js';
import { s as superForm, f as fileProxy } from './formData-yk_uxOf7.js';
import './index-Ddp2AB5f.js';
import './index-BKM0wM1Z.js';
import { z as zodClient } from './zod-CPyhwoWk.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import { F as Form_description } from './form-description-C2ZJ-G5N.js';
import './index-server-DhylklOr.js';
import './functions-x3jG1pm5.js';
import './index-BFfgIoD-.js';
import './Icon2-CRb0pbIs.js';
import './use-id-9y06sS9N.js';
import './_commonjsHelpers-B85MJLTf.js';
import './index6-DsoZqCdM.js';
import './scroll-lock-ByQIsybU.js';
import './x-C0GKGse2.js';
import './attrs-CL1THhfQ.js';
import 'zod';
import 'pocketbase';
import './exports-CTha0ECg.js';
import './stores-BM6n11zq.js';
import './stringify-BgjEYUR1.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let { data, form: formAction } = $$props;
  const form = superForm(data.form, {
    validators: zodClient(editProfileSchema),
    resetForm: false
  });
  const avatarForm = superForm(data.avatarForm, {
    validators: zodClient(editAvatarSchema),
    resetForm: true
  });
  const { form: formData, enhance } = form;
  const { form: avatarData } = avatarForm;
  const avatar = fileProxy(avatarData, "avatar");
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Eduplay - Edit Profile</title>`;
    });
    $$payload2.out += `<div class="flex flex-col gap-6"><!---->`;
    Breadcrumb($$payload2, {
      class: "xl:col-span-2",
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
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Profile`;
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
                    $$payload6.out += `<!---->Edit`;
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
    $$payload2.out += `<!----> <!---->`;
    Root($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<div class="relative mx-auto mb-4 h-[7rem] w-[7rem] rounded-full border border-slate-400 md:h-[8rem] md:w-[8rem]"><!---->`;
        Avatar($$payload3, {
          class: "h-full w-full",
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Avatar_image($$payload4, {
              src: store_get($$store_subs ??= {}, "$avatar", avatar).length > 0 ? URL.createObjectURL(store_get($$store_subs ??= {}, "$avatar", avatar)[0]) : data.user.avatar ? pb.files.getURL(data.user, data.user.avatar) : "/unknown.jpg",
              alt: "user profile",
              class: "h-full w-full object-cover object-center"
            });
            $$payload4.out += `<!----> <!---->`;
            Avatar_fallback($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->ED`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> <!---->`;
        Trigger($$payload3, {
          class: cn(buttonVariants({ variant: "outline", size: "icon" }), "absolute bottom-0 right-0  rounded-full px-4 py-2"),
          children: ($$payload4) => {
            Icon($$payload4, { icon: "mdi:pencil", class: "text-2xl" });
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----></div> <!---->`;
        Dialog_content($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<form method="post" action="?/file-upload" class="flex flex-col gap-3" enctype="multipart/form-data"><!---->`;
            Dialog_header($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Dialog_title($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Ganti avatar anda`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Form_field($$payload4, {
              form: avatarForm,
              name: "avatar",
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                {
                  let children = function($$payload6, { props }) {
                    $$payload6.out += `<!---->`;
                    Form_label($$payload6, {
                      children: ($$payload7) => {
                        $$payload7.out += `<!---->Avatar`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!----> <input${spread_attributes({
                      ...props,
                      type: "file",
                      class: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50")
                    })}>`;
                  };
                  Control($$payload5, { children, $$slots: { default: true } });
                }
                $$payload5.out += `<!----> <!---->`;
                Form_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Hanya menerima jpg, jpeg, png, dan webp`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Form_field_errors($$payload5, { class: "[&_*]:text-[0.8rem]" });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Dialog_footer($$payload4, {
              children: ($$payload5) => {
                Button($$payload5, {
                  type: "submit",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Submit`;
                  },
                  $$slots: { default: true }
                });
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
    $$payload2.out += `<!---->  <div class="flex flex-col gap-6"><div class="flex flex-col gap-4 rounded-lg bg-slate-100 px-6 py-4 shadow shadow-slate-900/20"><h3 class="text-xl font-bold text-primary">Data pribadi</h3> <form method="POST" action="?/update" class="flex flex-col gap-3"><!---->`;
    Form_field($$payload2, {
      form,
      name: "username",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        {
          let children = function($$payload4, { props }) {
            $$payload4.out += `<!---->`;
            Form_label($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Username`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, spread_props([
              props,
              {
                class: "border-slate-300",
                get value() {
                  return store_get($$store_subs ??= {}, "$formData", formData).username;
                },
                set value($$value) {
                  store_mutate($$store_subs ??= {}, "$formData", formData, store_get($$store_subs ??= {}, "$formData", formData).username = $$value);
                  $$settled = false;
                },
                placeholder: "Masukkan username anda"
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
            Input($$payload4, {
              class: "border-slate-300",
              value: store_get($$store_subs ??= {}, "$formData", formData).email,
              placeholder: "Masukkan email anda",
              type: "email",
              disabled: true
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
    $$payload2.out += `<!----> <input type="hidden" name="email"${attr("value", store_get($$store_subs ??= {}, "$formData", formData).email)}> <!---->`;
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
                placeholder: "Masukkan nama anda"
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
      name: "bio",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        {
          let children = function($$payload4, { props }) {
            $$payload4.out += `<!---->`;
            Form_label($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Bio`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, spread_props([
              props,
              {
                class: "border-slate-300",
                get value() {
                  return store_get($$store_subs ??= {}, "$formData", formData).bio;
                },
                set value($$value) {
                  store_mutate($$store_subs ??= {}, "$formData", formData, store_get($$store_subs ??= {}, "$formData", formData).bio = $$value);
                  $$settled = false;
                },
                placeholder: "Masukkan bio anda"
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
    $$payload2.out += `<!----> `;
    Button($$payload2, {
      type: "submit",
      class: "ml-auto sm:w-fit",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Submit`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></form></div></div></div>`;
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
//# sourceMappingURL=_page.svelte-CLn82xtA.js.map
