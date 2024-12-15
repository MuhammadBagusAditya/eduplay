import { p as pb } from './pb-Bvvw3hdM.js';
import 'pocketbase';

const load = async ({ parent }) => {
  const parentData = await parent();
  let classes;
  if (parentData.user.role === "teacher")
    classes = await pb.collection("classes").getFullList({
      filter: `creator = "${parentData.user.id}"`,
      expand: "materials_via_classroom,assignments_via_classroom,quizzes_via_classroom",
      sort: "name"
    });
  else
    classes = (await pb.collection("userClasses").getFullList({
      filter: `user = "${parentData.user.id}"`,
      expand: "classroom.materials_via_classroom,classroom.assignments_via_classroom,classroom.quizzes_via_classroom"
    })).reduce((all, userClass) => [...all, userClass.expand?.classroom], []);
  const dataCount = {
    materials: 0,
    assignments: 0,
    quizzes: 0
  };
  classes.forEach((classroom) => {
    dataCount.materials += classroom.expand?.materials_via_classroom?.length ?? 0;
    dataCount.assignments += classroom.expand?.assignments_via_classroom?.length ?? 0;
    dataCount.quizzes += classroom.expand?.quizzes_via_classroom?.length ?? 0;
  });
  return {
    ...parentData,
    classes,
    dataCount
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BJyhAx7z.js')).default;
const server_id = "src/routes/(app)/dashboard/+page.server.ts";
const imports = ["_app/immutable/nodes/8.CkxhC7fP.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/card-content.C5_W8gaf.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/avatar-fallback.BvSUYQcc.js","_app/immutable/chunks/use-id.B41njTOf.js","_app/immutable/chunks/scroll-lock.Cdff5hXG.js","_app/immutable/chunks/utils.Du759zP0.js","_app/immutable/chunks/button.DODvjd4i.js","_app/immutable/chunks/index.DESm0kp4.js","_app/immutable/chunks/index.BkimSpTC.js","_app/immutable/chunks/mounted.DowyTN3P.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/use-roving-focus.svelte.BDw_mrE0.js","_app/immutable/chunks/attrs.CqXQdisa.js","_app/immutable/chunks/badge.CBks-o04.js","_app/immutable/chunks/svelte-element.DhvnaPqV.js","_app/immutable/chunks/card-header.nu50EiK-.js","_app/immutable/chunks/pb.DLudHD8Y.js","_app/immutable/chunks/time.BTQl4E50.js","_app/immutable/chunks/Icon.CHCRpPhx.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/datetime.DcQSltNB.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-pzlHQm4M.js.map
