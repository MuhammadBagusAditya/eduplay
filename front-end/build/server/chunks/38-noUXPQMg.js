import './client-Ck0mmi3f.js';
import './formData-yk_uxOf7.js';
import { f as fail, r as redirect } from './index-Ddp2AB5f.js';
import { s as superValidate, a as zod } from './zod-CPyhwoWk.js';
import { a as signUpFormSchema } from './auth-nUcMnFzj.js';
import './index-BKM0wM1Z.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import './exports-CTha0ECg.js';
import './index6-DsoZqCdM.js';
import './index2-JzpfwCt6.js';
import './stores-BM6n11zq.js';
import './index-server-DhylklOr.js';
import './stringify-BgjEYUR1.js';
import 'zod';
import './_commonjsHelpers-B85MJLTf.js';
import 'pocketbase';

const load = async () => {
  return {
    form: await superValidate(zod(signUpFormSchema))
  };
};
const actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(signUpFormSchema));
    try {
      await pb.collection("users").getFirstListItem(`username="${form.data.username}" || email="${form.data.email}"`);
      return fail(409, {
        message: {
          text: "User sudah ada",
          variant: "destructive"
        },
        form
      });
    } catch (e) {
      await pb.collection("users").create({
        username: form.data.username,
        email: form.data.email,
        password: form.data.password,
        passwordConfirm: form.data.confirmPassword,
        emailVisibility: true,
        name: form.data.username,
        bio: "Senang bertemu dengan anda",
        role: "student"
      });
    }
    await pb.collection("users").authWithPassword(form.data.email, form.data.password);
    redirect(302, "/dashboard");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 38;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DnDvQzU6.js')).default;
const server_id = "src/routes/auth/sign-up/+page.server.ts";
const imports = ["_app/immutable/nodes/38.C8S8KI1d.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/actions.BPW6lnfX.js","_app/immutable/chunks/input.CJsoznPS.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/input.aIcynM5P.js","_app/immutable/chunks/button.DODvjd4i.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/index.DESm0kp4.js","_app/immutable/chunks/separator.CWRbQcxc.js","_app/immutable/chunks/use-id.B41njTOf.js","_app/immutable/chunks/attrs.CqXQdisa.js","_app/immutable/chunks/formData.B4uWq1rj.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/utils.Du759zP0.js","_app/immutable/chunks/entry.LQerjGIt.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/stores.aLhso-j5.js","_app/immutable/chunks/forms.794Ggprv.js","_app/immutable/chunks/auth.DvgYrWSf.js","_app/immutable/chunks/class.CkgP5SV_.js","_app/immutable/chunks/Icon.CHCRpPhx.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/zod.B2p22QL9.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=38-noUXPQMg.js.map
