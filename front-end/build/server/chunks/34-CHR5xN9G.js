import { p as pb } from './pb-Bvvw3hdM.js';
import { e as error } from './index-Ddp2AB5f.js';
import './client-Ck0mmi3f.js';
import './formData-yk_uxOf7.js';
import { s as superValidate, a as zod, f as fail } from './zod-CPyhwoWk.js';
import './index-BKM0wM1Z.js';
import { b as addQuestionSchema } from './quizzes-P9z7oEAx.js';
import { DateTime } from 'luxon';
import 'pocketbase';
import './exports-CTha0ECg.js';
import './index6-DsoZqCdM.js';
import './index2-JzpfwCt6.js';
import './stores-BM6n11zq.js';
import './index-server-DhylklOr.js';
import './stringify-BgjEYUR1.js';
import 'zod';
import './_commonjsHelpers-B85MJLTf.js';

const load = async ({ params }) => {
  let quiz;
  let quizGrades;
  try {
    quiz = await pb.collection("quizzes").getOne(params.id, {
      expand: "questions_via_quiz.answers_via_question,classroom"
    });
    try {
      const userQuizzes = await pb.collection("userQuizzes").getFullList({
        filter: `quiz = "${quiz.id}"`
      });
      for (const userQuiz of userQuizzes) {
        const now = DateTime.now();
        const futureTime = DateTime.fromMillis(userQuiz.endTime);
        if (futureTime.diff(now).toMillis() < 0)
          await pb.collection("userQuizzes").update(userQuiz.id, {
            isSubmitted: true
          });
      }
    } catch (e) {
    }
    quizGrades = await pb.collection("userQuizGrades").getFullList({
      filter: `quiz = "${quiz.id}"`,
      sort: "user_name"
    });
  } catch (e) {
    error(404);
  }
  const addQuestionForm = await superValidate(zod(addQuestionSchema), {
    defaults: {
      order: 0,
      name: "",
      quiz: quiz.id
    }
  });
  return {
    quiz,
    addQuestionForm,
    quizGrades
  };
};
const actions = {
  "add-question": async (event) => {
    const questionForm = await superValidate(event, zod(addQuestionSchema));
    if (!questionForm.valid) {
      return fail(400, {
        questionForm
      });
    }
    try {
      const newQuestion = await pb.collection("questions").create({
        ...questionForm.data
      });
      for (let i = 1; i <= 4; i++) {
        await pb.collection("answers").create({
          question: newQuestion.id,
          text: "Jawaban ke-" + i,
          isCorrent: false
        });
      }
    } catch (e) {
      return fail(400, {
        message: {
          text: "Pertanyaan gagal ditambahkan",
          variant: "destructive"
        },
        questionForm
      });
    }
    return {
      message: {
        text: "Pertanyaan berhasil ditambahkan",
        variant: "primary"
      },
      questionForm
    };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 34;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BLRWuAUr.js')).default;
const server_id = "src/routes/(app)/dashboard/teachers/quizzes/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/34.B2vbRgY-.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/actions.BPW6lnfX.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/class.CkgP5SV_.js","_app/immutable/chunks/input.aIcynM5P.js","_app/immutable/chunks/card-content.C5_W8gaf.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/breadcrumb-page.BYoj9mJR.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/Icon.CxQCumuR.js","_app/immutable/chunks/svelte-element.DhvnaPqV.js","_app/immutable/chunks/index.CrvKBJSA.js","_app/immutable/chunks/x.BVp5BWZm.js","_app/immutable/chunks/use-id.B41njTOf.js","_app/immutable/chunks/scroll-lock.Cdff5hXG.js","_app/immutable/chunks/utils.Du759zP0.js","_app/immutable/chunks/attrs.CqXQdisa.js","_app/immutable/chunks/index.BkimSpTC.js","_app/immutable/chunks/mounted.DowyTN3P.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/use-roving-focus.svelte.BDw_mrE0.js","_app/immutable/chunks/formData.B4uWq1rj.js","_app/immutable/chunks/button.DODvjd4i.js","_app/immutable/chunks/index.DESm0kp4.js","_app/immutable/chunks/entry.LQerjGIt.js","_app/immutable/chunks/stores.aLhso-j5.js","_app/immutable/chunks/forms.794Ggprv.js","_app/immutable/chunks/Icon.CHCRpPhx.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/badge.CBks-o04.js","_app/immutable/chunks/input.CJsoznPS.js","_app/immutable/chunks/index.C9AsKA1g.js","_app/immutable/chunks/zod.B2p22QL9.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.S0vXD1Br.js","_app/immutable/chunks/pb.DLudHD8Y.js","_app/immutable/chunks/quizzes.C8naADkq.js","_app/immutable/chunks/dialog-description.BFv0Xkh4.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DKF17Rty.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=34-CHR5xN9G.js.map
