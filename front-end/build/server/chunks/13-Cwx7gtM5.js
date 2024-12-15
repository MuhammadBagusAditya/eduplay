import { p as pb } from './pb-Bvvw3hdM.js';
import 'pocketbase';

const load = async ({ locals }) => {
  const userClasses = await pb.collection("userClasses").getFullList({
    filter: `user = "${locals.user?.id}"`,
    expand: "classroom.materials_via_classroom",
    sort: "classroom.name"
  });
  const classes = userClasses.map((userClass) => {
    return userClass.expand?.classroom;
  });
  classes.forEach((record) => {
    record.expand?.materials_via_classroom.sort((a, b) => {
      return new Date(b.created) - new Date(a.created);
    });
  });
  return {
    classes
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BrR8QAqG.js')).default;
const server_id = "src/routes/(app)/dashboard/(users)/materials/+page.server.ts";
const imports = ["_app/immutable/nodes/13.D0EkpHex.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/breadcrumb-page.BYoj9mJR.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/Icon.CxQCumuR.js","_app/immutable/chunks/svelte-element.DhvnaPqV.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/card-content.C5_W8gaf.js","_app/immutable/chunks/card-header.nu50EiK-.js","_app/immutable/chunks/card-title.YczfR8ox.js","_app/immutable/chunks/separator.CWRbQcxc.js","_app/immutable/chunks/use-id.B41njTOf.js","_app/immutable/chunks/attrs.CqXQdisa.js","_app/immutable/chunks/badge.CBks-o04.js","_app/immutable/chunks/index.DESm0kp4.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-Cwx7gtM5.js.map
