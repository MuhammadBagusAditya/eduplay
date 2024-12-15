import { o as head, d as attr, l as escape_html, p as pop, b as push, q as copy_payload, t as assign_payload, e as ensure_array_like } from './index2-JzpfwCt6.js';
import { B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_link, e as Breadcrumb_page } from './breadcrumb-page-CwCmZH2-.js';
import { R as Root$1, T as Tabs_list, a as Tabs_content, b as Tabs_trigger } from './index9-KODAsdyr.js';
import { B as Button, b as buttonVariants } from './button-Duyfcegt.js';
import { I as Icon } from './Icon-BFX92tDv.js';
import { C as Card, a as Card_content } from './card-content-Bd8E3yV0.js';
import { S as Separator } from './separator-CJX90iGV.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { R as Root, D as Dialog_content, a as Dialog_header, b as Dialog_footer, c as Dialog_title, T as Trigger$1 } from './index4-BkA9mXpK.js';
import { I as Input } from './input-C35Efneq.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-jOAoOhX0.js';
import { g as goto, a as invalidateAll } from './client-Ck0mmi3f.js';
import { D as Dialog_description } from './dialog-description-BEmtFmnm.js';
import './badge-DfsxAKKY.js';
import { R as Root$2, T as Trigger, D as Dropdown_menu_content, G as Group, a as Dropdown_menu_group_heading, b as Dropdown_menu_separator, c as Dropdown_menu_item } from './index8-B9p_xVmz.js';
import './Icon2-CRb0pbIs.js';
import './use-id-9y06sS9N.js';
import './_commonjsHelpers-B85MJLTf.js';
import './attrs-CL1THhfQ.js';
import './use-roving-focus.svelte-B8edc4eM.js';
import './scroll-lock-ByQIsybU.js';
import './index-server-DhylklOr.js';
import './index-BFfgIoD-.js';
import './functions-x3jG1pm5.js';
import './x-C0GKGse2.js';
import 'pocketbase';
import './index6-DsoZqCdM.js';
import './exports-CTha0ECg.js';
import './mounted-DTTuSVjU.js';

function Stats_card($$payload, $$props) {
  push();
  const { stats } = $$props;
  $$payload.out += `<!---->`;
  Card($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 text-xl font-bold text-primary sm:text-2xl">Statistik</h2> <div class="grid gap-4 md:grid-cols-2"><div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4"><span class="flex items-center gap-1 text-lg font-semibold text-primary sm:text-xl">`;
          Icon($$payload3, { icon: "mdi:account", class: "text-3xl" });
          $$payload3.out += `<!----> ${escape_html(stats.members)}</span> <h4 class="text-center text-sm text-slate-600">Total anggota</h4></div> <div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4"><span class="flex items-center gap-1 text-lg font-semibold text-slate-700 sm:text-xl">`;
          Icon($$payload3, { icon: "mdi:file-document", class: "text-3xl" });
          $$payload3.out += `<!----> ${escape_html(stats.materials)}</span> <h4 class="text-center text-sm text-slate-600">Materi yang anda buat</h4></div> <div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4"><span class="flex items-center gap-1 text-lg font-semibold text-red-600 sm:text-xl">`;
          Icon($$payload3, { icon: "mdi:clipboard-text", class: "text-3xl" });
          $$payload3.out += `<!----> ${escape_html(stats.assignments)}</span> <h4 class="text-center text-sm text-slate-600">Tugas yang anda buat</h4></div> <div class="flex flex-col items-center gap-3 rounded-lg border border-slate-200 p-4"><span class="flex items-center gap-1 text-lg font-semibold text-yellow-600 sm:text-xl">`;
          Icon($$payload3, { icon: "mdi:help-box", class: "text-3xl" });
          $$payload3.out += `<!----> ${escape_html(stats.quizzes)}</span> <span class="text-center text-sm text-slate-600">Kuis yang anda buat</span></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function Member_cards($$payload, $$props) {
  push();
  const { members, classroomId } = $$props;
  let newMember = "";
  async function deleteMember(id) {
    try {
      const res = await fetch("/dashboard/teachers/classes/" + classroomId + "/members", {
        body: JSON.stringify({ id }),
        method: "delete",
        headers: { "Content-Type": "application/json" }
      });
      if (res.status > 399) throw new Error("");
      toast.success("Alert", {
        description: "Anggota berhasil dihapus",
        dismissable: true
      });
      await invalidateAll();
    } catch (e) {
      toast.error("Alert", {
        description: "Anggota gagal dihapus",
        dismissable: true
      });
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Card($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Card_content($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<div class="mb-6 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700">`;
            Icon($$payload4, {
              icon: "mdi:account-outline",
              class: "hidden text-4xl sm:block"
            });
            $$payload4.out += `<!----> Anggota</h3> <!---->`;
            Root($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Trigger$1($$payload5, {
                  class: cn(buttonVariants({ size: "sm" })),
                  children: ($$payload6) => {
                    Icon($$payload6, { icon: "mdi:plus" });
                    $$payload6.out += `<!----> <span class="hidden text-sm sm:block">Tambah anggota</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Dialog_content($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<form class="flex flex-col gap-3"><!---->`;
                    Dialog_header($$payload6, {
                      children: ($$payload7) => {
                        $$payload7.out += `<!---->`;
                        Dialog_title($$payload7, {
                          children: ($$payload8) => {
                            $$payload8.out += `<!---->Tambah anggota`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload7.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!----> `;
                    Input($$payload6, {
                      name: "member",
                      get value() {
                        return newMember;
                      },
                      set value($$value) {
                        newMember = $$value;
                        $$settled = false;
                      },
                      placeholder: "Masukkan id murid"
                    });
                    $$payload6.out += `<!----> <!---->`;
                    Dialog_footer($$payload6, {
                      children: ($$payload7) => {
                        Button($$payload7, {
                          type: "submit",
                          children: ($$payload8) => {
                            $$payload8.out += `<!---->Submit`;
                          },
                          $$slots: { default: true }
                        });
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!----></form>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div> <div class="flex flex-col gap-3">`;
            if (members.length) {
              $$payload4.out += "<!--[-->";
              const each_array = ensure_array_like(members);
              $$payload4.out += `<!--[-->`;
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let member = each_array[$$index];
                $$payload4.out += `<div class="flex flex-col justify-between gap-3 sm:flex-row"><h6 class="overflow-hidden text-ellipsis whitespace-nowrap capitalize text-slate-700">${escape_html(member.expand?.user.name)}</h6> <!---->`;
                Root($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->`;
                    Trigger$1($$payload5, {
                      class: cn(buttonVariants({ variant: "outline", size: "sm" })),
                      children: ($$payload6) => {
                        Icon($$payload6, {
                          icon: "mdi:trash-can-outline",
                          class: "text-destructive"
                        });
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!----> <!---->`;
                    Dialog_content($$payload5, {
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->`;
                        Dialog_header($$payload6, {
                          children: ($$payload7) => {
                            $$payload7.out += `<!---->`;
                            Dialog_title($$payload7, {
                              children: ($$payload8) => {
                                $$payload8.out += `<!---->Alert`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload7.out += `<!----> <!---->`;
                            Dialog_description($$payload7, {
                              children: ($$payload8) => {
                                $$payload8.out += `<!---->Yakin menghapus anggota ini?`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload7.out += `<!---->`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> <!---->`;
                        Dialog_footer($$payload6, {
                          children: ($$payload7) => {
                            Button($$payload7, {
                              variant: "destructive",
                              onclick: () => deleteMember(member.id),
                              children: ($$payload8) => {
                                $$payload8.out += `<!---->Iya`;
                              },
                              $$slots: { default: true }
                            });
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
                $$payload4.out += `<!----></div> `;
                Separator($$payload4, { class: "bg-slate-300 last:hidden" });
                $$payload4.out += `<!---->`;
              }
              $$payload4.out += `<!--]-->`;
            } else {
              $$payload4.out += "<!--[!-->";
              $$payload4.out += `<p class="text-center text-slate-700">Tidak ada data</p>`;
            }
            $$payload4.out += `<!--]--></div>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function Material_cards($$payload, $$props) {
  push();
  const { materials, classroomId } = $$props;
  $$payload.out += `<!---->`;
  Card($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="mb-6 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700">`;
          Icon($$payload3, {
            icon: "mdi:file-document-outline",
            class: "hidden text-4xl sm:block"
          });
          $$payload3.out += `<!----> Materi</h3> `;
          Button($$payload3, {
            href: "/dashboard/teachers/materials/create?classroom=" + classroomId,
            size: "sm",
            children: ($$payload4) => {
              Icon($$payload4, { icon: "mdi:plus" });
              $$payload4.out += `<!----> <span class="hidden text-sm sm:block">Buat materi</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="flex flex-col gap-3">`;
          if (materials.length) {
            $$payload3.out += "<!--[-->";
            const each_array = ensure_array_like(materials);
            $$payload3.out += `<!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let material = each_array[$$index];
              $$payload3.out += `<div class="flex flex-col justify-between gap-3 sm:flex-row"><a${attr("href", "/dashboard/teachers/materials/" + material.id)}><h6 class="capitalize text-slate-700">${escape_html(material.name)}</h6></a> <span class="text-primary">${escape_html(`${material.attachments.length} Lampiran`)}</span></div> `;
              Separator($$payload3, { class: "bg-slate-300 last:hidden" });
              $$payload3.out += `<!---->`;
            }
            $$payload3.out += `<!--]-->`;
          } else {
            $$payload3.out += "<!--[!-->";
            $$payload3.out += `<p class="text-center text-slate-700">Tidak ada data</p>`;
          }
          $$payload3.out += `<!--]--></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function Assignment_cards($$payload, $$props) {
  push();
  const { assignments, classroomId } = $$props;
  $$payload.out += `<!---->`;
  Card($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="mb-6 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700">`;
          Icon($$payload3, {
            icon: "mdi:clipboard-text-outline",
            class: "hidden text-4xl sm:block"
          });
          $$payload3.out += `<!----> Tugas</h3> `;
          Button($$payload3, {
            href: "/dashboard/teachers/assignments/create?classroom=" + classroomId,
            size: "sm",
            children: ($$payload4) => {
              Icon($$payload4, { icon: "mdi:plus" });
              $$payload4.out += `<!----> <span class="hidden text-sm sm:block">Buat tugas</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="flex flex-col gap-3">`;
          if (assignments.length) {
            $$payload3.out += "<!--[-->";
            const each_array = ensure_array_like(assignments);
            $$payload3.out += `<!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let assignment = each_array[$$index];
              $$payload3.out += `<div class="flex flex-col justify-between gap-3 sm:flex-row"><a${attr("href", "/dashboard/teachers/assignments/" + assignment.id)}><h6 class="capitalize text-slate-700">${escape_html(assignment.name)}</h6></a></div> `;
              Separator($$payload3, { class: "bg-slate-300 last:hidden" });
              $$payload3.out += `<!---->`;
            }
            $$payload3.out += `<!--]-->`;
          } else {
            $$payload3.out += "<!--[!-->";
            $$payload3.out += `<p class="text-center text-slate-700">Tidak ada data</p>`;
          }
          $$payload3.out += `<!--]--></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function Quiz_cards($$payload, $$props) {
  push();
  const { quizzes, classroomId } = $$props;
  $$payload.out += `<!---->`;
  Card($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="mb-6 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold text-slate-700">`;
          Icon($$payload3, {
            icon: "mdi:help-box-outline",
            class: "hidden text-4xl sm:block"
          });
          $$payload3.out += `<!----> Kuis</h3> `;
          Button($$payload3, {
            href: "/dashboard/teachers/quizzes/create?classroom=" + classroomId,
            size: "sm",
            children: ($$payload4) => {
              Icon($$payload4, { icon: "mdi:plus" });
              $$payload4.out += `<!----> <span class="hidden text-sm sm:block">Buat kuis</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="flex flex-col gap-3">`;
          if (quizzes.length) {
            $$payload3.out += "<!--[-->";
            const each_array = ensure_array_like(quizzes);
            $$payload3.out += `<!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let quiz = each_array[$$index];
              $$payload3.out += `<div class="flex flex-col justify-between gap-3 sm:flex-row"><a${attr("href", "/dashboard/teachers/quizzes/" + quiz.id)}><h6 class="capitalize text-slate-700">${escape_html(quiz.name)}</h6></a></div> `;
              Separator($$payload3, { class: "bg-slate-300 last:hidden" });
              $$payload3.out += `<!---->`;
            }
            $$payload3.out += `<!--]-->`;
          } else {
            $$payload3.out += "<!--[!-->";
            $$payload3.out += `<p class="text-center text-slate-700">Tidak ada data</p>`;
          }
          $$payload3.out += `<!--]--></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const { data } = $$props;
  const stats = {
    materials: data.materials.length,
    assignments: data.assignments.length,
    quizzes: data.quizzes.length,
    members: data.members.length
  };
  let isCopied = false;
  async function deleteClass() {
    try {
      const response = await fetch("/dashboard/teachers/classes/" + data.classroom.id, { method: "delete" });
      if (response.status > 399) throw new Error("");
      goto("/dashboard/teachers/classes");
    } catch (e) {
      toast.error("Alert", {
        description: "Kelas gagal untuk dihapus",
        dismissable: true
      });
    }
  }
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Eduplay - Kelas ${escape_html(data.classroom.name)}</title>`;
  });
  $$payload.out += `<div class="grid grid-cols-1 grid-rows-[repeat(auto-fit,_max-content)] gap-6 xl:grid-cols-[40%,_1fr]"><!---->`;
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
              Breadcrumb_page($$payload4, {
                class: "capitalize",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->${escape_html(data.classroom.name)}`;
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
  $$payload.out += `<!----> <header class="relative z-0 min-h-[12rem] overflow-hidden rounded-xl bg-transparent px-6 py-4 shadow shadow-slate-900/20"><div class="absolute left-0 top-0 z-[-1] block h-full w-full object-cover object-center after:absolute after:left-0 after:top-0 after:z-[10] after:block after:h-full after:w-full after:bg-primary/60"><img${attr("src", pb.files.getURL(data.classroom, data.classroom.thumbnail))} alt="banner" class="h-full w-full object-cover object-center"></div> <div class="left-0 top-0 z-[3] flex h-full w-full flex-col items-center justify-center"><h1 class="mb-3 text-center text-xl font-bold capitalize text-slate-100 drop-shadow sm:text-3xl">${escape_html(data.classroom.name)}</h1> <span class="inline-flex items-center gap-2 text-center text-sm capitalize text-slate-100 drop-shadow sm:text-base">${escape_html(data.classroom.description)}</span></div> <!---->`;
  Root($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Root$2($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Trigger($$payload3, {
            class: "absolute right-3 top-3",
            children: ($$payload4) => {
              Icon($$payload4, {
                icon: "mdi:dots-horizontal",
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
                      if (isCopied) {
                        $$payload6.out += "<!--[-->";
                        $$payload6.out += `<!---->`;
                        Dropdown_menu_item($$payload6, {
                          closeOnSelect: false,
                          children: ($$payload7) => {
                            Icon($$payload7, { icon: "mdi:clipboard-check-outline" });
                            $$payload7.out += `<!----> ID berhasil disalin`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!---->`;
                      } else {
                        $$payload6.out += "<!--[!-->";
                        $$payload6.out += `<!---->`;
                        Dropdown_menu_item($$payload6, {
                          onclick: async () => navigator.clipboard.writeText(data.classroom.id).then(() => isCopied = true),
                          closeOnSelect: false,
                          children: ($$payload7) => {
                            Icon($$payload7, { icon: "mdi:clipboard-outline" });
                            $$payload7.out += `<!----> Salin ID Kelas`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!---->`;
                      }
                      $$payload6.out += `<!--]--> <!---->`;
                      Dropdown_menu_item($$payload6, {
                        children: ($$payload7) => {
                          Icon($$payload7, { icon: "mdi:pencil-outline", class: "" });
                          $$payload7.out += `<!----> <a${attr("href", "/dashboard/teachers/classes/" + data.classroom.id + "/edit")} class="text-sm">Edit kelas</a>`;
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
                          Trigger$1($$payload7, {
                            class: "w-full text-left text-sm text-destructive",
                            children: ($$payload8) => {
                              $$payload8.out += `<!---->Hapus kelas`;
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
                  $$payload5.out += `<!---->Apakah yakin ingin menghapus kelas ini?`;
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
                onclick: deleteClass,
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
  $$payload.out += `<!----></header> `;
  Stats_card($$payload, { stats });
  $$payload.out += `<!----> <!---->`;
  Root$1($$payload, {
    value: "material",
    class: "col-span-1 xl:col-span-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Tabs_list($$payload2, {
        class: "grid w-full grid-cols-4",
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Tabs_trigger($$payload3, {
            value: "material",
            children: ($$payload4) => {
              $$payload4.out += `<span class="hidden sm:block">Materi</span> `;
              Icon($$payload4, {
                icon: "mdi:file-document-outline",
                class: "block text-xl sm:hidden"
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Tabs_trigger($$payload3, {
            value: "assignment",
            children: ($$payload4) => {
              $$payload4.out += `<span class="hidden sm:block">Tugas</span> `;
              Icon($$payload4, {
                icon: "mdi:clipboard-text-outline",
                class: "block text-xl sm:hidden"
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Tabs_trigger($$payload3, {
            value: "quiz",
            children: ($$payload4) => {
              $$payload4.out += `<span class="hidden sm:block">Kuis</span> `;
              Icon($$payload4, {
                icon: "mdi:help-box-outline",
                class: "block text-xl sm:hidden"
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Tabs_trigger($$payload3, {
            value: "members",
            children: ($$payload4) => {
              $$payload4.out += `<span class="hidden sm:block">Anggota</span> `;
              Icon($$payload4, {
                icon: "mdi:account-outline",
                class: "block text-xl sm:hidden"
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
      Tabs_content($$payload2, {
        value: "material",
        children: ($$payload3) => {
          Material_cards($$payload3, {
            materials: data.materials,
            classroomId: data.classroom.id
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Tabs_content($$payload2, {
        value: "assignment",
        children: ($$payload3) => {
          Assignment_cards($$payload3, {
            assignments: data.assignments,
            classroomId: data.classroom.id
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Tabs_content($$payload2, {
        value: "quiz",
        children: ($$payload3) => {
          Quiz_cards($$payload3, {
            quizzes: data.quizzes,
            classroomId: data.classroom.id
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Tabs_content($$payload2, {
        value: "members",
        children: ($$payload3) => {
          Member_cards($$payload3, {
            members: data.members,
            classroomId: data.classroom.id
          });
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
//# sourceMappingURL=_page.svelte-FamVaCeZ.js.map
