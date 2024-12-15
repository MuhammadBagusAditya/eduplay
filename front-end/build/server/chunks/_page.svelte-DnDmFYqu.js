import { o as head, l as escape_html, p as pop, b as push, e as ensure_array_like, d as attr, h as spread_attributes } from './index2-JzpfwCt6.js';
import { C as Card, a as Card_content } from './card-content-Bd8E3yV0.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_link, e as Breadcrumb_page } from './breadcrumb-page-CwCmZH2-.js';
import { S as Separator } from './separator-CJX90iGV.js';
import { R as Root, T as Trigger, D as Dialog_content, a as Dialog_header, b as Dialog_footer, c as Dialog_title } from './index4-BkA9mXpK.js';
import { F as Form_field, C as Control, a as Form_field_errors, b as Form_label } from './index5-B5v-itD7.js';
import { b as buttonVariants, B as Button } from './button-Duyfcegt.js';
import { I as Icon } from './Icon-BFX92tDv.js';
import { B as Badge } from './badge-DfsxAKKY.js';
import { g as goto } from './client-Ck0mmi3f.js';
import { s as superForm, f as fileProxy } from './formData-yk_uxOf7.js';
import './index-Ddp2AB5f.js';
import './index-BKM0wM1Z.js';
import { z as zodClient } from './zod-CPyhwoWk.js';
import { a as addAttachmentSchema } from './assignments-Cr7eEjcV.js';
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
  async function deleteAttachment(id) {
    try {
      const response = await fetch("/dashboard/attachments/" + id + "/assignments", {
        method: "delete",
        body: JSON.stringify({ userAssignment: data.userAssignment.id }),
        headers: { "Content-Type": "application/json" }
      });
      if (response.status > 399) throw new Error("");
      toast.success("Alert", {
        description: "File berhasil dihapus",
        dismissable: true
      });
      goto("/dashboard/assignments/" + data.assignment.id, { invalidateAll: true });
    } catch (e) {
      toast.error("Alert", {
        description: "Anda tidak memiliki akses untuk menghapus",
        dismissable: true
      });
    }
  }
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Eduplay - Tugas ${escape_html(data.assignment.name)}</title>`;
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
                href: "/dashboard/classes/" + data.assignment.classroom,
                class: "capitalize",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->${escape_html(data.assignment.expand?.classroom.name)}`;
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
                href: "/dashboard/assignments",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Tugas`;
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
                  $$payload5.out += `<!---->${escape_html(data.assignment.name)}`;
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
  $$payload.out += `<!----> <header class="relative z-0 col-span-1 overflow-hidden rounded-xl bg-primary px-6 py-4 shadow shadow-slate-900/20 xl:col-span-2"><div class="flex flex-wrap items-center justify-between gap-4"><h1 class="text-xl font-bold capitalize text-slate-100 sm:text-2xl">${escape_html(data.assignment.name)}</h1></div></header> <!---->`;
  Card($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 flex items-center justify-between gap-3 text-lg font-bold text-primary sm:text-xl">Deskripsi tugas <span class="text-sm text-slate-700">${escape_html((data.userAssignment.grade > 0 ? data.userAssignment.grade : "?") + "/100")}</span></h2> <p class="mb-4 text-sm text-slate-700">${escape_html(data.assignment.description)}</p> `;
          if (data.assignment.status === "open") {
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
          $$payload3.out += `<!--]-->`;
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
          const each_array = ensure_array_like(data.assignment.expand?.attachments);
          $$payload3.out += `<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Lampiran tugas</h2> <div class="flex flex-col gap-3"><!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let attachment = each_array[$$index];
            $$payload3.out += `<div class="flex items-center gap-2">`;
            Icon($$payload3, {
              icon: attachment.type === "application" ? "mdi:file" : attachment.type === "image" ? "mdi:file-image" : attachment.type === "video" ? "mdi:file-video" : "mdi:file-document-alert",
              class: "text-4xl text-slate-700"
            });
            $$payload3.out += `<!----> <a class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-slate-700 underline"${attr("href", pb.files.getURL(attachment, attachment.file))}>${escape_html(attachment.name)}</a></div> `;
            Separator($$payload3, { class: "last:hidden" });
            $$payload3.out += `<!---->`;
          }
          $$payload3.out += `<!--]--></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <!---->`;
  Card($$payload, {
    class: "xl:col-span-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Lampiran tugas</h2> <div class="flex flex-col gap-3">`;
          if (data.userAssignment.expand?.attachments.length > 0) {
            $$payload3.out += "<!--[-->";
            const each_array_1 = ensure_array_like(data.userAssignment.expand?.attachments);
            $$payload3.out += `<!--[-->`;
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let attachment = each_array_1[$$index_1];
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
            $$payload3.out += `<!--]-->`;
          } else {
            $$payload3.out += "<!--[!-->";
            $$payload3.out += `<p class="text-center text-slate-700">Tidak ada data</p>`;
          }
          $$payload3.out += `<!--]--> <!---->`;
          Root($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Trigger($$payload4, {
                class: cn(buttonVariants({ variant: "default" }), "ml-auto w-fit"),
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
                  $$payload5.out += `<!----> <input type="hidden" name="userAssignment"${attr("value", data.userAssignment.id)}> <!---->`;
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
//# sourceMappingURL=_page.svelte-DnDmFYqu.js.map
