import { p as pb } from './pb-Bvvw3hdM.js';
import { DateTime } from 'luxon';
import { r as redirect } from './index-Ddp2AB5f.js';
import './client-Ck0mmi3f.js';
import './formData-yk_uxOf7.js';
import 'pocketbase';
import './exports-CTha0ECg.js';
import './index6-DsoZqCdM.js';
import './index2-JzpfwCt6.js';
import './stores-BM6n11zq.js';
import './index-server-DhylklOr.js';
import './stringify-BgjEYUR1.js';

const load = async ({ locals, params }) => {
  const quiz = await pb.collection("quizzes").getOne(params.id, {
    expand: "classroom,questions_via_quiz.answers_via_question"
  });
  let userQuiz;
  if (quiz.status === "closed") redirect(302, "/dashboard/quizzes/" + params.id);
  try {
    userQuiz = await pb.collection("userQuizzes").getFirstListItem(`user = "${locals.user?.id}" && quiz = "${params.id}"`, {
      expand: "quiz.classroom"
    });
  } catch (e) {
    userQuiz = await pb.collection("userQuizzes").create(
      {
        user: locals.user?.id,
        quiz: params.id,
        endTime: DateTime.now().plus({ seconds: quiz.time }).toMillis(),
        isSubmitted: false
      },
      {
        expand: "quiz.classroom"
      }
    );
  }
  if (userQuiz.isSubmitted || quiz.status === "closed")
    redirect(302, "/dashboard/quizzes/" + params.id);
  return {
    userQuiz,
    quiz
  };
};
const actions = {
  default: async ({ locals, params, request }) => {
    const formData = await request.formData();
    const userQuiz = await pb.collection("userQuizzes").getFirstListItem(`user = "${locals.user?.id}" && quiz = "${params.id}"`, {
      expand: "quiz.classroom"
    });
    await pb.collection("userQuizzes").update(userQuiz.id, {
      answers: Object.values(JSON.parse(formData.get("answers"))),
      isSubmitted: true
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Du1bZpml.js')).default;
const server_id = "src/routes/(app)/dashboard/(users)/quizzes/[id]/start/+page.server.ts";
const imports = ["_app/immutable/nodes/17.Dsdb2nmb.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/class.CkgP5SV_.js","_app/immutable/chunks/card-content.C5_W8gaf.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/breadcrumb-page.BYoj9mJR.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/Icon.CxQCumuR.js","_app/immutable/chunks/svelte-element.DhvnaPqV.js","_app/immutable/chunks/button.DODvjd4i.js","_app/immutable/chunks/index.DESm0kp4.js","_app/immutable/chunks/Icon.CHCRpPhx.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/datetime.DcQSltNB.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.S0vXD1Br.js","_app/immutable/chunks/entry.LQerjGIt.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DKF17Rty.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=17-BWkQoSJ9.js.map
