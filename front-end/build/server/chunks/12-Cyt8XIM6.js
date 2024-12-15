import { p as pb } from './pb-Bvvw3hdM.js';
import { e as error } from './index-Ddp2AB5f.js';
import 'pocketbase';

const load = async ({ params, locals }) => {
  const classId = params.id;
  let classroom;
  try {
    classroom = await pb.collection("classes").getOne(classId, {
      expand: "creator,materials_via_class"
    });
  } catch (e) {
    error(404);
  }
  const materials = await pb.collection("materials").getFullList({
    filter: `classroom = "${classId}"`,
    sort: "-created"
  });
  const assignments = await pb.collection("assignments").getFullList({
    filter: `classroom = "${classId}"`,
    sort: "-created"
  });
  const quizzes = await pb.collection("quizzes").getFullList({
    filter: `classroom = "${classId}"`,
    sort: "-created"
  });
  const members = await pb.collection("userClasses").getFullList({
    filter: `classroom = "${classId}"`,
    expand: "user",
    sort: "user.name"
  });
  const assignmentGrades = (await pb.collection("userAssignments").getFullList({
    filter: `user = "${locals.user?.id}"`
  })).reduce((all, userAssignment) => {
    return {
      ...all,
      [userAssignment.assignment]: userAssignment.grade
    };
  }, {});
  const quizGrades = (await pb.collection("userQuizGrades").getFullList({
    filter: `user = "${locals.user?.id}"`
  })).reduce((all, userQuiz) => {
    return {
      ...all,
      [userQuiz.quiz]: userQuiz.grade
    };
  }, {});
  console.log(quizGrades);
  return {
    classroom,
    materials,
    assignments,
    quizzes,
    members,
    assignmentGrades,
    quizGrades
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-TRbEt6pv.js')).default;
const server_id = "src/routes/(app)/dashboard/(users)/classes/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/12.frXG3FQ7.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/breadcrumb-page.BYoj9mJR.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/Icon.CxQCumuR.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/svelte-element.DhvnaPqV.js","_app/immutable/chunks/index.CSSQKwO2.js","_app/immutable/chunks/use-id.B41njTOf.js","_app/immutable/chunks/scroll-lock.Cdff5hXG.js","_app/immutable/chunks/utils.Du759zP0.js","_app/immutable/chunks/attrs.CqXQdisa.js","_app/immutable/chunks/use-roving-focus.svelte.BDw_mrE0.js","_app/immutable/chunks/Icon.CHCRpPhx.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/card-content.C5_W8gaf.js","_app/immutable/chunks/separator.CWRbQcxc.js","_app/immutable/chunks/button.DODvjd4i.js","_app/immutable/chunks/index.DESm0kp4.js","_app/immutable/chunks/badge.CBks-o04.js","_app/immutable/chunks/pb.DLudHD8Y.js","_app/immutable/chunks/index.CrvKBJSA.js","_app/immutable/chunks/x.BVp5BWZm.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.S0vXD1Br.js","_app/immutable/chunks/entry.LQerjGIt.js","_app/immutable/chunks/dialog-description.BFv0Xkh4.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DKF17Rty.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-Cyt8XIM6.js.map
