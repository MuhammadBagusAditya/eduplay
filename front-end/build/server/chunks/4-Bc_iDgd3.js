import { e as error } from './index-Ddp2AB5f.js';

const load = async ({ locals }) => {
  if (locals.user?.role !== "student") {
    error(403, {
      message: "Anda tidak memiliki izin yang diperlukan untuk melihat konten ini."
    });
  }
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-QhAdC3Gz.js')).default;
const server_id = "src/routes/(app)/dashboard/(users)/+layout.server.ts";
const imports = ["_app/immutable/nodes/4.C8xd1NGP.js","_app/immutable/chunks/5.8m0fIDVn.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/snippet.DzwRyOEQ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-Bc_iDgd3.js.map
