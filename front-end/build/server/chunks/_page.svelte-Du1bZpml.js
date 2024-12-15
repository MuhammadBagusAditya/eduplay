import { o as head, p as pop, l as escape_html, b as push, e as ensure_array_like, d as attr } from './index2-JzpfwCt6.js';
import { C as Card, a as Card_content } from './card-content-Bd8E3yV0.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_link, e as Breadcrumb_page } from './breadcrumb-page-CwCmZH2-.js';
import { b as buttonVariants, B as Button } from './button-Duyfcegt.js';
import { I as Icon } from './Icon-BFX92tDv.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-jOAoOhX0.js';
import { i as invalidate } from './client-Ck0mmi3f.js';
import './Icon2-CRb0pbIs.js';
import './index-BFfgIoD-.js';
import './index-server-DhylklOr.js';
import './functions-x3jG1pm5.js';
import './index6-DsoZqCdM.js';
import './exports-CTha0ECg.js';

function _page($$payload, $$props) {
  push();
  const { data, form: formAction } = $$props;
  let currentQuestionIdx = 0;
  let currentQuestion = data.quiz.expand?.questions_via_quiz[currentQuestionIdx];
  let timer = "00:00:00";
  let lastAnswerIds = {};
  let answerIds = {};
  let jsonAnswerIds = JSON.stringify(answerIds);
  async function save() {
    try {
      const res = await fetch("/dashboard/quizzes/" + data.quiz.id + "/start", {
        method: "POST",
        body: JSON.stringify({ answerIds }),
        headers: { "Content-Type": "application/json" }
      });
      const jsonData = await res.json();
      if (res.status > 399) throw new Error(jsonData.message);
      return true;
    } catch (e) {
      toast.error("Alert", { description: e.message, dismissable: true });
      return false;
    }
  }
  async function setCurrentQuestionIdx(idx) {
    currentQuestionIdx = idx;
    if (Object.keys(answerIds).length === 0 || JSON.stringify(answerIds) === JSON.stringify(lastAnswerIds)) return;
    if (await save()) {
      await invalidate();
      lastAnswerIds = { ...answerIds };
    }
  }
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Eduplay - Kuis ${escape_html(data.quiz.name)}</title>`;
  });
  $$payload.out += `<div class="grid grid-cols-1 grid-rows-[repeat(auto-fit,_max-content)] gap-6"><!---->`;
  Breadcrumb($$payload, {
    class: "",
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
                href: "/dashboard/classes/" + data.userQuiz.expand?.quiz.classroom,
                class: "capitalize",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->${escape_html(data.userQuiz.expand?.quiz.expand?.classroom.name)}`;
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
                  $$payload5.out += `<!---->${escape_html(data.userQuiz.expand?.quiz.name)}`;
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
          const each_array = ensure_array_like(currentQuestion.expand?.answers_via_question);
          $$payload3.out += `<h2 class="mb-4 flex items-center justify-between gap-3 text-lg font-bold text-primary sm:text-xl">Soal <span class="inline-flex items-center gap-2 text-sm font-normal text-slate-600 sm:text-base">`;
          Icon($$payload3, { icon: "mdi:clock", class: "text-lg" });
          $$payload3.out += `<!----> Sisa ${escape_html(timer)}</span></h2> <div class="mb-4 flex flex-col gap-3 text-sm text-slate-700 sm:text-base">${escape_html(`${currentQuestion.order}. ${currentQuestion.name}`)}</div> <div class="mb-4 flex flex-col gap-3"><!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let answer = each_array[$$index];
            if (answerIds[currentQuestion.id] === answer.id) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<span${attr("class", cn(buttonVariants({ variant: "default" }), "justify-start"))}>${escape_html(answer.text)}</span>`;
            } else {
              $$payload3.out += "<!--[!-->";
              Button($$payload3, {
                class: "justify-start",
                variant: "outline",
                onclick: () => answerIds[currentQuestion.id] = answer.id,
                children: ($$payload4) => {
                  $$payload4.out += `<!---->${escape_html(answer.text)}`;
                },
                $$slots: { default: true }
              });
            }
            $$payload3.out += `<!--]-->`;
          }
          $$payload3.out += `<!--]--></div> <div class="flex justify-between gap-4"><div class="flex gap-4">`;
          Button($$payload3, {
            variant: "outline",
            onclick: () => setCurrentQuestionIdx(currentQuestionIdx - 1),
            disabled: currentQuestionIdx === 0,
            children: ($$payload4) => {
              Icon($$payload4, { icon: "mdi:arrow-left" });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            variant: "outline",
            onclick: () => setCurrentQuestionIdx(currentQuestionIdx + 1),
            disabled: currentQuestionIdx === data.quiz.expand?.questions_via_quiz.length - 1,
            children: ($$payload4) => {
              Icon($$payload4, { icon: "mdi:arrow-right" });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <form method="post"><input type="hidden" name="answers"${attr("value", jsonAnswerIds)}> `;
          Button($$payload3, {
            type: "submit",
            children: ($$payload4) => {
              $$payload4.out += `<span class="hidden sm:block">Submit</span> `;
              Icon($$payload4, { icon: "mdi:send" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></form></div>`;
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
          const each_array_1 = ensure_array_like(data.quiz.expand?.questions_via_quiz);
          $$payload3.out += `<h2 class="mb-4 flex items-center justify-between gap-3 text-lg font-bold text-primary sm:text-xl">Pergi ke</h2> <div class="grid grid-cols-5 gap-3 sm:grid-cols-10"><!--[-->`;
          for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
            let question = each_array_1[i];
            if (currentQuestionIdx === i) {
              $$payload3.out += "<!--[-->";
              Button($$payload3, {
                children: ($$payload4) => {
                  $$payload4.out += `<!---->${escape_html(question.order)}`;
                },
                $$slots: { default: true }
              });
            } else {
              $$payload3.out += "<!--[!-->";
              Button($$payload3, {
                variant: "outline",
                class: "text-slate-700",
                onclick: () => setCurrentQuestionIdx(i),
                children: ($$payload4) => {
                  $$payload4.out += `<!---->${escape_html(question.order)}`;
                },
                $$slots: { default: true }
              });
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
//# sourceMappingURL=_page.svelte-Du1bZpml.js.map
