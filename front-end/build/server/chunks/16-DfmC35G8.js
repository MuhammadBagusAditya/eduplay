import { p as pb } from './pb-Bvvw3hdM.js';
import { e as error } from './index-Ddp2AB5f.js';
import './client-Ck0mmi3f.js';
import './formData-yk_uxOf7.js';
import './index-BKM0wM1Z.js';
import 'zod';
import './quizzes-P9z7oEAx.js';
import 'pocketbase';
import './exports-CTha0ECg.js';
import './index6-DsoZqCdM.js';
import './index2-JzpfwCt6.js';
import './stores-BM6n11zq.js';
import './index-server-DhylklOr.js';
import './stringify-BgjEYUR1.js';
import './_commonjsHelpers-B85MJLTf.js';

const load = async ({ params, locals }) => {
  let quiz;
  let userQuiz;
  let quizGrade;
  try {
    quiz = await pb.collection("quizzes").getOne(params.id, {
      expand: "questions_via_quiz.answers_via_question,classroom"
    });
  } catch (e) {
    error(404);
  }
  try {
    userQuiz = await pb.collection("userQuizzes").getFirstListItem(`user = "${locals.user?.id}" && quiz = "${params.id}"`);
  } catch (e) {
    userQuiz = null;
  }
  try {
    quizGrade = (await pb.collection("userQuizGrades").getFirstListItem(`user = "${locals.user?.id}" && quiz = "${quiz?.id}"`)).grade;
  } catch (e) {
    quizGrade = null;
  }
  return {
    quiz,
    userQuiz,
    quizGrade
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BR1boi24.js')).default;
const server_id = "src/routes/(app)/dashboard/(users)/quizzes/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/16.CBIqpF4K.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/class.CkgP5SV_.js","_app/immutable/chunks/card-content.C5_W8gaf.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/breadcrumb-page.BYoj9mJR.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/Icon.CxQCumuR.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/svelte-element.DhvnaPqV.js","_app/immutable/chunks/button.DODvjd4i.js","_app/immutable/chunks/index.DESm0kp4.js","_app/immutable/chunks/Icon.CHCRpPhx.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/badge.CBks-o04.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=16-DfmC35G8.js.map
