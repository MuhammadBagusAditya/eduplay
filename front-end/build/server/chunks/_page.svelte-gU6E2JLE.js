import { o as head, l as escape_html, p as pop, b as push, e as ensure_array_like, d as attr, h as spread_attributes } from './index2-JzpfwCt6.js';
import { C as Card, a as Card_content } from './card-content-Bd8E3yV0.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_link, e as Breadcrumb_page } from './breadcrumb-page-CwCmZH2-.js';
import { S as Separator } from './separator-CJX90iGV.js';
import { R as Root, D as Dialog_content, a as Dialog_header, b as Dialog_footer, T as Trigger, c as Dialog_title } from './index4-BkA9mXpK.js';
import { R as Root$1, T as Trigger$1, D as Dropdown_menu_content, G as Group, a as Dropdown_menu_group_heading, b as Dropdown_menu_separator, c as Dropdown_menu_item } from './index8-B9p_xVmz.js';
import { F as Form_field, C as Control, a as Form_field_errors, b as Form_label } from './index5-B5v-itD7.js';
import { b as buttonVariants, B as Button } from './button-Duyfcegt.js';
import { I as Icon } from './Icon-BFX92tDv.js';
import { g as goto } from './client-Ck0mmi3f.js';
import { s as superForm, f as fileProxy } from './formData-yk_uxOf7.js';
import './index-Ddp2AB5f.js';
import './index-BKM0wM1Z.js';
import { z as zodClient } from './zod-CPyhwoWk.js';
import { b as addAttachmentSchema } from './materials-DGixplIY.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-jOAoOhX0.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import { D as Dialog_description } from './dialog-description-BEmtFmnm.js';
import './Icon2-CRb0pbIs.js';
import './use-id-9y06sS9N.js';
import './_commonjsHelpers-B85MJLTf.js';
import './attrs-CL1THhfQ.js';
import './x-C0GKGse2.js';
import './scroll-lock-ByQIsybU.js';
import './index-server-DhylklOr.js';
import './mounted-DTTuSVjU.js';
import './use-roving-focus.svelte-B8edc4eM.js';
import './index6-DsoZqCdM.js';
import './index-BFfgIoD-.js';
import './functions-x3jG1pm5.js';
import './exports-CTha0ECg.js';
import './stores-BM6n11zq.js';
import './stringify-BgjEYUR1.js';
import 'zod';
import 'pocketbase';

function _page($$payload, $$props) {
  push();
  const { data, form: formAction } = $$props;
  const attachmentForm = superForm(data.attachmentForm, { validators: zodClient(addAttachmentSchema) });
  fileProxy(attachmentForm, "attachment");
  async function deleteMaterial() {
    try {
      const response = await fetch("/dashboard/teachers/materials/" + data.material.id, { method: "delete" });
      if (response.status > 399) throw new Error("");
      toast.success("Alert", {
        description: "Materi berhasil dihapus",
        dismissable: true
      });
      goto("/dashboard/teachers/classes/" + data.material.classroom);
    } catch (e) {
      toast.error("Alert", {
        description: "Anda tidak memiliki akses untuk menghapus",
        dismissable: true
      });
    }
  }
  async function deleteAttachment(id) {
    try {
      const response = await fetch("/dashboard/teachers/attachments/" + id, { method: "delete" });
      if (response.status > 399) throw new Error("");
      toast.success("Alert", {
        description: "File berhasil dihapus",
        dismissable: true
      });
      goto("/dashboard/teachers/materials/" + data.material.id, { invalidateAll: true });
    } catch (e) {
      toast.error("Alert", {
        description: "Anda tidak memiliki akses untuk menghapus",
        dismissable: true
      });
    }
  }
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
                href: "/dashboard/teachers/classes",
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
                href: "/dashboard/teachers/classes/" + data.material.expand?.classroom.id,
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
                href: "/dashboard/teachers/materials",
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
  $$payload.out += `<!----> <header class="relative z-0 col-span-1 overflow-hidden rounded-xl bg-primary px-6 py-4 shadow shadow-slate-900/20 xl:col-span-2"><div class="flex flex-wrap items-center justify-between gap-4"><h1 class="text-xl font-bold capitalize text-slate-100 sm:text-2xl">${escape_html(data.material.name)}</h1> <!---->`;
  Root($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Root$1($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Trigger$1($$payload3, {
            children: ($$payload4) => {
              Icon($$payload4, {
                icon: "mdi:dots-vertical",
                class: "text-3xl text-slate-300"
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Dropdown_menu_content($$payload3, {
            class: "w-56",
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Group($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Dropdown_menu_group_heading($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Aksi`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Dropdown_menu_separator($$payload5, {});
                  $$payload5.out += `<!----> <!---->`;
                  Group($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      Dropdown_menu_item($$payload6, {
                        children: ($$payload7) => {
                          Icon($$payload7, { icon: "mdi:pencil-outline", class: "" });
                          $$payload7.out += `<!----> <a${attr("href", "/dashboard/teachers/materials/" + data.material.id + "/edit")} class="text-sm">Edit materi</a>`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> <!---->`;
                      Dropdown_menu_item($$payload6, {
                        children: ($$payload7) => {
                          Icon($$payload7, {
                            icon: "mdi:trash-can-outline",
                            class: "text-destructive"
                          });
                          $$payload7.out += `<!----> <!---->`;
                          Trigger($$payload7, {
                            class: "w-full text-left text-sm text-destructive",
                            children: ($$payload8) => {
                              $$payload8.out += `<!---->Hapus materi`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!---->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!---->`;
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
      Dialog_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Dialog_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Dialog_title($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Alert`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Dialog_description($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Apakah yakin ingin menghapus materi ini?`;
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
              Button($$payload4, {
                variant: "destructive",
                onclick: deleteMaterial,
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Iya`;
                },
                $$slots: { default: true }
              });
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
  $$payload.out += `<!----></div></header> <!---->`;
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
          const each_array = ensure_array_like(data.material.expand?.attachments);
          $$payload3.out += `<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Lampiran materi</h2> <div class="flex flex-col gap-3"><!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let attachment = each_array[$$index];
            $$payload3.out += `<div class="flex items-center gap-2">`;
            Icon($$payload3, {
              icon: attachment.type === "application" ? "mdi:file" : attachment.type === "image" ? "mdi:file-image" : attachment.type === "video" ? "mdi:file-video" : "mdi:file-document-alert",
              class: "text-4xl text-slate-700"
            });
            $$payload3.out += `<!----> <a class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-slate-700 underline"${attr("href", pb.files.getURL(attachment, attachment.file))}>${escape_html(attachment.name)}</a> <!---->`;
            Root($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<!---->`;
                Trigger($$payload4, {
                  class: cn(buttonVariants({ variant: "outline", size: "icon" })),
                  children: ($$payload5) => {
                    Icon($$payload5, {
                      icon: "mdi:trash-can-outline",
                      class: "text-destructive"
                    });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <!---->`;
                Dialog_content($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->`;
                    Dialog_header($$payload5, {
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->`;
                        Dialog_title($$payload6, {
                          children: ($$payload7) => {
                            $$payload7.out += `<!---->Alert`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> <!---->`;
                        Dialog_description($$payload6, {
                          children: ($$payload7) => {
                            $$payload7.out += `<!---->Yakin menghapus file?`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!----> <!---->`;
                    Dialog_footer($$payload5, {
                      children: ($$payload6) => {
                        Button($$payload6, {
                          variant: "destructive",
                          onclick: () => deleteAttachment(attachment.id),
                          children: ($$payload7) => {
                            $$payload7.out += `<!---->Iya`;
                          },
                          $$slots: { default: true }
                        });
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
            $$payload3.out += `<!----></div> `;
            Separator($$payload3, { class: "last:hidden" });
            $$payload3.out += `<!---->`;
          }
          $$payload3.out += `<!--]--> <!---->`;
          Root($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Trigger($$payload4, {
                class: cn(buttonVariants({ variant: "default" })),
                children: ($$payload5) => {
                  Icon($$payload5, { icon: "mdi:plus", class: "text-xl" });
                  $$payload5.out += `<!----> Upload file`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Dialog_content($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<form action="?/upload-attachment" method="post" enctype="multipart/form-data"><!---->`;
                  Dialog_header($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      Dialog_title($$payload6, {
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->Tambah file`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!---->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Form_field($$payload5, {
                    form: attachmentForm,
                    name: "attachment",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      {
                        let children = function($$payload7, { props }) {
                          $$payload7.out += `<!---->`;
                          Form_label($$payload7, {
                            children: ($$payload8) => {
                              $$payload8.out += `<!---->File`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!----> <input${spread_attributes({
                            ...props,
                            type: "file",
                            class: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50")
                          })}>`;
                        };
                        Control($$payload6, { children, $$slots: { default: true } });
                      }
                      $$payload6.out += `<!----> <!---->`;
                      Form_field_errors($$payload6, { class: "[&_*]:text-[0.8rem]" });
                      $$payload6.out += `<!---->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Dialog_footer($$payload5, {
                    children: ($$payload6) => {
                      Button($$payload6, {
                        type: "submit",
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->Submit`;
                        },
                        $$slots: { default: true }
                      });
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----></form>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div>`;
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
//# sourceMappingURL=_page.svelte-gU6E2JLE.js.map
