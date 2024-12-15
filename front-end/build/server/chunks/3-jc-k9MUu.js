import { r as redirect } from './index-Ddp2AB5f.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import 'pocketbase';

const load = async ({ locals }) => {
  if (!pb.authStore.record) redirect(302, "/auth/sign-in");
  return {
    user: pb.authStore.record
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-BvQJU3cU.js')).default;
const server_id = "src/routes/(app)/dashboard/+layout.server.ts";
const imports = ["_app/immutable/nodes/3.DiusnRJ8.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/class.CkgP5SV_.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/Icon.CHCRpPhx.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/button.DODvjd4i.js","_app/immutable/chunks/index.DESm0kp4.js","_app/immutable/chunks/index.nK5Dd3uL.js","_app/immutable/chunks/entry.LQerjGIt.js","_app/immutable/chunks/separator.CWRbQcxc.js","_app/immutable/chunks/use-id.B41njTOf.js","_app/immutable/chunks/attrs.CqXQdisa.js","_app/immutable/chunks/avatar-fallback.BvSUYQcc.js","_app/immutable/chunks/scroll-lock.Cdff5hXG.js","_app/immutable/chunks/utils.Du759zP0.js","_app/immutable/chunks/index.CrvKBJSA.js","_app/immutable/chunks/x.BVp5BWZm.js","_app/immutable/chunks/Icon.CxQCumuR.js","_app/immutable/chunks/svelte-element.DhvnaPqV.js","_app/immutable/chunks/stores.aLhso-j5.js","_app/immutable/chunks/pb.DLudHD8Y.js","_app/immutable/chunks/dialog-description.BFv0Xkh4.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-jc-k9MUu.js.map
