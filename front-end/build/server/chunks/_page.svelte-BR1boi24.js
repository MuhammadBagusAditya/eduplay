import { o as head, l as escape_html, p as pop, b as push, d as attr } from './index2-JzpfwCt6.js';
import { C as Card, a as Card_content } from './card-content-Bd8E3yV0.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_link, e as Breadcrumb_page } from './breadcrumb-page-CwCmZH2-.js';
import { b as buttonVariants, B as Button } from './button-Duyfcegt.js';
import { I as Icon } from './Icon-BFX92tDv.js';
import { B as Badge } from './badge-DfsxAKKY.js';
import './Icon2-CRb0pbIs.js';
import './index-BFfgIoD-.js';
import './index-server-DhylklOr.js';
import './functions-x3jG1pm5.js';

function _page($$payload, $$props) {
  push();
  const { data, form: formAction } = $$props;
  const timer = {
    hours: Math.floor(data.quiz.time / 3600),
    minutes: Math.floor(data.quiz.time % 3600 / 60),
    seconds: data.quiz.time % 60
  };
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Eduplay - Kuis ${escape_html(data.quiz.name)}</title>`;
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
                href: "/dashboard/classes/" + data.quiz.expand?.classroom.id,
                class: "capitalize",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->${escape_html(data.quiz.expand?.classroom.name)}`;
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
                href: "/dashboard/quizzes",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Kuis`;
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
                  $$payload5.out += `<!---->${escape_html(data.quiz.name)}`;
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
  $$payload.out += `<!----> <header class="relative z-0 col-span-1 overflow-hidden rounded-xl bg-primary px-6 py-4 shadow shadow-slate-900/20 xl:col-span-2"><div class="flex flex-wrap items-center justify-between gap-4"><h1 class="text-xl font-bold capitalize text-slate-100 sm:text-2xl">${escape_html(data.quiz.name)}</h1></div></header> <!---->`;
  Card($$payload, {
    class: "xl:col-span-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<h2 class="mb-4 flex items-center justify-between gap-3 text-lg font-bold text-primary sm:text-xl">Deskripsi kuis <span class="text-sm text-slate-700">${escape_html((data.quizGrade && data.quizGrade > 0 ? data.quizGrade.toFixed(2) : "?") + "/100")}</span></h2> <p class="mb-3 text-sm text-slate-700">${escape_html(data.quiz.description)}</p> <div class="mb-4 flex gap-3">`;
          Badge($$payload3, {
            variant: "outline",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(`${timer.hours} Jam, ${timer.minutes} Menit, ${timer.seconds} Detik`)}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          if (data.quiz.status === "open") {
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
          $$payload3.out += `<!--]--></div> <div class="flex justify-end">`;
          if (data.userQuiz) {
            $$payload3.out += "<!--[-->";
            if (data.userQuiz.isSubmitted) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<span${attr("class", cn(buttonVariants({ variant: "outline" })))}>Sudah disubmit</span>`;
            } else {
              $$payload3.out += "<!--[!-->";
              if (!data.userQuiz.isSubmitted && data.quiz.status === "open") {
                $$payload3.out += "<!--[-->";
                Button($$payload3, {
                  href: "/dashboard/quizzes/" + data.quiz.id + "/start",
                  children: ($$payload4) => {
                    Icon($$payload4, { icon: "mdi:play" });
                    $$payload4.out += `<!----> <span>Lanjutkan kuis</span>`;
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload3.out += "<!--[!-->";
              }
              $$payload3.out += `<!--]-->`;
            }
            $$payload3.out += `<!--]-->`;
          } else {
            $$payload3.out += "<!--[!-->";
            if (!data.userQuiz && data.quiz.status === "open") {
              $$payload3.out += "<!--[-->";
              Button($$payload3, {
                href: "/dashboard/quizzes/" + data.quiz.id + "/start",
                children: ($$payload4) => {
                  Icon($$payload4, { icon: "mdi:play" });
                  $$payload4.out += `<!----> <span>Mulai kuis</span>`;
                },
                $$slots: { default: true }
              });
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]-->`;
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
//# sourceMappingURL=_page.svelte-BR1boi24.js.map
