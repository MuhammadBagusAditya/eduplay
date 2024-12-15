import { r as redirect } from './index-Ddp2AB5f.js';

const load = async ({ locals }) => {
  if (locals.user !== null) {
    redirect(302, "/dashboard");
  }
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-CFlwxalD.js')).default;
const server_id = "src/routes/auth/+layout.server.ts";
const imports = ["_app/immutable/nodes/6.Crvz18Ns.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/snippet.DzwRyOEQ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-C9cmjQt5.js.map
