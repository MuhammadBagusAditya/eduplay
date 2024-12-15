import { p as pb } from './pb-Bvvw3hdM.js';
import { e as error } from './index-Ddp2AB5f.js';
import 'pocketbase';

const load = async ({ params }) => {
  let material;
  try {
    material = await pb.collection("materials").getOne(params.id, {
      expand: "attachments,classroom"
    });
  } catch (e) {
    error(404);
  }
  return {
    material
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-lF99ifhc.js')).default;
const server_id = "src/routes/(app)/dashboard/(users)/materials/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/14.DrJ4nOF4.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/card-content.C5_W8gaf.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/breadcrumb-page.BYoj9mJR.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/Icon.CxQCumuR.js","_app/immutable/chunks/svelte-element.DhvnaPqV.js","_app/immutable/chunks/Icon.CHCRpPhx.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/pb.DLudHD8Y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=14-CRSEKDDv.js.map
