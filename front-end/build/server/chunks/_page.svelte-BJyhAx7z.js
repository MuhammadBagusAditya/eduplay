import { o as head, p as pop, b as push, l as escape_html, e as ensure_array_like, d as attr } from './index2-JzpfwCt6.js';
import { C as Card, a as Card_content } from './card-content-Bd8E3yV0.js';
import { A as Avatar, a as Avatar_image, b as Avatar_fallback } from './avatar-fallback-BhdBuUna.js';
import { B as Button } from './button-Duyfcegt.js';
import { R as Root, T as Trigger, D as Dropdown_menu_content, G as Group, a as Dropdown_menu_group_heading, b as Dropdown_menu_separator, c as Dropdown_menu_item } from './index8-B9p_xVmz.js';
import { B as Badge } from './badge-DfsxAKKY.js';
import { C as Card_header } from './card-header-B7NB_-1J.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import { g as getDay } from './time-CZBZv3F9.js';
import { I as Icon } from './Icon-BFX92tDv.js';
import { DateTime } from 'luxon';
import './utils-BUr2r5nE.js';
import './use-id-9y06sS9N.js';
import './_commonjsHelpers-B85MJLTf.js';
import './scroll-lock-ByQIsybU.js';
import './index-server-DhylklOr.js';
import './index-BFfgIoD-.js';
import './mounted-DTTuSVjU.js';
import './use-roving-focus.svelte-B8edc4eM.js';
import './attrs-CL1THhfQ.js';
import 'pocketbase';
import './functions-x3jG1pm5.js';

function Class_card($$payload, $$props) {
  push();
  const { classroom } = $$props;
  $$payload.out += `<a${attr("href", "/dashboard/teachers/classes/" + classroom.id)}><!---->`;
  Card($$payload, {
    class: "overflow-hidden",
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_header($$payload2, {
        class: "p-0",
        children: ($$payload3) => {
          $$payload3.out += `<img${attr("src", pb.files.getURL(classroom, classroom.thumbnail))} alt="banner" class="aspect-video object-cover object-center">`;
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
  const { data } = $$props;
  let isCopied = false;
  const currentDay = DateTime.now().weekday;
  const todayClasses = data.classes.filter((classroom) => classroom.schedules.includes("" + currentDay));
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Eduplay - Dashboard</title>`;
  });
  $$payload.out += `<main class="grid grid-cols-1 gap-6 xl:grid-cols-2"><!---->`;
  Card($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_content($$payload2, {
        class: "relative",
        children: ($$payload3) => {
          $$payload3.out += `<div class="grid grid-cols-1 items-center gap-6 sm:grid-cols-[6rem,_1fr]"><div class="relative mx-auto aspect-square w-full max-w-[8rem]"><!---->`;
          Avatar($$payload3, {
            class: "aspect-square h-full max-h-[8rem] w-full",
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Avatar_image($$payload4, {
                src: data.user?.avatar ? pb.files.getURL(data.user, data.user?.avatar) : "/unknown.jpg",
                class: "aspect-square w-full object-cover object-center"
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
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "absolute bottom-0 right-0 rounded-full shadow shadow-slate-900/20",
            href: "/dashboard/profile/edit",
            variant: "outline",
            size: "icon",
            children: ($$payload4) => {
              Icon($$payload4, { icon: "mdi:pencil" });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="flex flex-col"><h1 class="text-center text-2xl font-bold text-primary sm:text-left">Selamat Datang</h1> <h3 class="mb-1 text-center text-lg text-slate-800 sm:text-left">${escape_html(data.user.name)}</h3> <p class="text-center text-sm text-slate-700 sm:text-left">${escape_html("@" + data.user.username)}</p></div></div> <!---->`;
          Root($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Trigger($$payload4, {
                class: "absolute right-3 top-3",
                children: ($$payload5) => {
                  Icon($$payload5, {
                    icon: "mdi:dots-vertical",
                    class: "text-2xl text-slate-700"
                  });
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Dropdown_menu_content($$payload4, {
                class: "w-56",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Group($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      Dropdown_menu_group_heading($$payload6, {
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->Aksi`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> <!---->`;
                      Dropdown_menu_separator($$payload6, {});
                      $$payload6.out += `<!----> <!---->`;
                      Group($$payload6, {
                        children: ($$payload7) => {
                          if (isCopied) {
                            $$payload7.out += "<!--[-->";
                            $$payload7.out += `<!---->`;
                            Dropdown_menu_item($$payload7, {
                              closeOnSelect: false,
                              children: ($$payload8) => {
                                Icon($$payload8, { icon: "mdi:clipboard-check-outline" });
                                $$payload8.out += `<!----> ID berhasil disalin`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload7.out += `<!---->`;
                          } else {
                            $$payload7.out += "<!--[!-->";
                            $$payload7.out += `<!---->`;
                            Dropdown_menu_item($$payload7, {
                              onclick: async () => navigator.clipboard.writeText(data.user.id).then(() => isCopied = true),
                              closeOnSelect: false,
                              children: ($$payload8) => {
                                Icon($$payload8, { icon: "mdi:clipboard-outline" });
                                $$payload8.out += `<!----> Salin ID User`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload7.out += `<!---->`;
                          }
                          $$payload7.out += `<!--]-->`;
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
          $$payload3.out += `<h2 class="mb-3 text-xl font-bold text-primary sm:text-2xl">Bio</h2> <p class="text-sm text-slate-700">${escape_html(data.user.bio)}</p>`;
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
          $$payload3.out += `<h2 class="mb-3 text-xl font-bold text-primary sm:text-2xl">Statistik</h2> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"><div class="flex flex-col border-slate-300 px-4 py-2 last:border-r-0 lg:border-r"><h3 class="font-semibold text-slate-800">Kelas</h3> <div class="grid grid-cols-[1fr,_auto] text-slate-700"><span class="text-5xl">${escape_html(data.classes.length)}</span> `;
          Icon($$payload3, { icon: "mdi:school", class: "text-5xl" });
          $$payload3.out += `<!----></div></div> <div class="flex flex-col border-slate-300 px-4 py-2 last:border-r-0 lg:border-r"><h3 class="font-semibold text-red-700">Materi</h3> <div class="grid grid-cols-[1fr,_auto] text-red-600"><span class="text-5xl">${escape_html(data.dataCount.materials)}</span> `;
          Icon($$payload3, { icon: "mdi:file-document", class: "text-5xl" });
          $$payload3.out += `<!----></div></div> <div class="flex flex-col border-slate-300 px-4 py-2 last:border-r-0 lg:border-r"><h3 class="font-semibold text-blue-700">Tugas</h3> <div class="grid grid-cols-[1fr,_auto] text-blue-600"><span class="text-5xl">${escape_html(data.dataCount.assignments)}</span> `;
          Icon($$payload3, { icon: "mdi:clipboard-text", class: "text-5xl" });
          $$payload3.out += `<!----></div></div> <div class="flex flex-col border-slate-300 px-4 py-2 last:border-r-0 lg:border-r"><h3 class="font-semibold text-yellow-700">Kuis</h3> <div class="grid grid-cols-[1fr,_auto] text-yellow-600"><span class="text-5xl">${escape_html(data.dataCount.quizzes)}</span> `;
          Icon($$payload3, { icon: "mdi:help-box", class: "text-5xl" });
          $$payload3.out += `<!----></div></div></div>`;
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
          $$payload3.out += `<h2 class="mb-3 text-xl font-bold text-primary sm:text-2xl">Kelas hari ini</h2> `;
          if (todayClasses.length > 0) {
            $$payload3.out += "<!--[-->";
            const each_array = ensure_array_like(todayClasses);
            $$payload3.out += `<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"><!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let classroom = each_array[$$index];
              Class_card($$payload3, { classroom });
            }
            $$payload3.out += `<!--]--></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
            $$payload3.out += `<div class="flex w-full flex-col items-center gap-3"><img src="/not-class.svg" alt="not found" class="w-[12rem]"> <h4 class="text-xl text-slate-700">Tidak ada kelas hari ini</h4></div>`;
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></main>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BJyhAx7z.js.map
