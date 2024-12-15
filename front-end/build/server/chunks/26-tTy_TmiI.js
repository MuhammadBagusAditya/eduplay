import { p as pb } from './pb-Bvvw3hdM.js';
import { e as error } from './index-Ddp2AB5f.js';
import 'pocketbase';

const load = async ({ params }) => {
  try {
    const classroom = await pb.collection("classes").getOne(params.id);
    const materials = await pb.collection("materials").getFullList({
      filter: `classroom = "${classroom.id}"`,
      sort: "-created"
    });
    const assignments = await pb.collection("assignments").getFullList({
      filter: `classroom = "${classroom.id}"`,
      sort: "-created"
    });
    const quizzes = await pb.collection("quizzes").getFullList({
      filter: `classroom = "${classroom.id}"`,
      sort: "-created"
    });
    const members = await pb.collection("userClasses").getFullList({
      filter: `classroom = "${classroom.id}"`,
      expand: "user",
      sort: "user.name"
    });
    return {
      classroom,
      materials,
      assignments,
      quizzes,
      members
    };
  } catch (e) {
    error(500, "Oooops, server error");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 26;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-FamVaCeZ.js')).default;
const server_id = "src/routes/(app)/dashboard/teachers/classes/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/26.DKLQvS-A.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/breadcrumb-page.BYoj9mJR.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/Icon.CxQCumuR.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/svelte-element.DhvnaPqV.js","_app/immutable/chunks/index.CSSQKwO2.js","_app/immutable/chunks/use-id.B41njTOf.js","_app/immutable/chunks/scroll-lock.Cdff5hXG.js","_app/immutable/chunks/utils.Du759zP0.js","_app/immutable/chunks/attrs.CqXQdisa.js","_app/immutable/chunks/use-roving-focus.svelte.BDw_mrE0.js","_app/immutable/chunks/button.DODvjd4i.js","_app/immutable/chunks/index.DESm0kp4.js","_app/immutable/chunks/Icon.CHCRpPhx.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/card-content.C5_W8gaf.js","_app/immutable/chunks/separator.CWRbQcxc.js","_app/immutable/chunks/index.CrvKBJSA.js","_app/immutable/chunks/x.BVp5BWZm.js","_app/immutable/chunks/input.CJsoznPS.js","_app/immutable/chunks/input.aIcynM5P.js","_app/immutable/chunks/pb.DLudHD8Y.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.S0vXD1Br.js","_app/immutable/chunks/entry.LQerjGIt.js","_app/immutable/chunks/dialog-description.BFv0Xkh4.js","_app/immutable/chunks/badge.CBks-o04.js","_app/immutable/chunks/index.BkimSpTC.js","_app/immutable/chunks/mounted.DowyTN3P.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DKF17Rty.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=26-tTy_TmiI.js.map
