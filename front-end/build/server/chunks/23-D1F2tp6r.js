import './client-Ck0mmi3f.js';
import './formData-yk_uxOf7.js';
import { e as error } from './index-Ddp2AB5f.js';
import { s as superValidate, a as zod, f as fail } from './zod-CPyhwoWk.js';
import { e as editAssignmentSchema } from './assignments-Cr7eEjcV.js';
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

const load = async ({ params }) => {
  let assignment;
  try {
    assignment = await pb.collection("assignments").getOne(params.id, {
      expand: "classroom"
    });
  } catch (e) {
    error(404);
  }
  const form = await superValidate(
    zod(editAssignmentSchema, {
      defaults: {
        name: assignment.name,
        description: assignment.description,
        status: assignment.status
      }
    })
  );
  return {
    form,
    assignment
  };
};
const actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(editAssignmentSchema));
    let message;
    if (!form.valid) {
      return fail(400, {
        form
      });
    }
    try {
      await pb.collection("assignments").update(event.params.id, {
        ...form.data
      });
      message = {
        text: "Tugas berhasil diubah",
        variant: "primary"
      };
    } catch (e) {
      return fail(400, {
        form,
        message: {
          text: "Tugas gagal diubah",
          variant: "destructive"
        }
      });
    }
    return {
      form,
      message
    };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 23;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CB8nyYET.js')).default;
const server_id = "src/routes/(app)/dashboard/teachers/assignments/[id]/edit/+page.server.ts";
const imports = ["_app/immutable/nodes/23.Bzk50lAT.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/actions.BPW6lnfX.js","_app/immutable/chunks/breadcrumb-page.BYoj9mJR.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/Icon.CxQCumuR.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/svelte-element.DhvnaPqV.js","_app/immutable/chunks/formData.B4uWq1rj.js","_app/immutable/chunks/use-id.B41njTOf.js","_app/immutable/chunks/button.DODvjd4i.js","_app/immutable/chunks/index.DESm0kp4.js","_app/immutable/chunks/utils.Du759zP0.js","_app/immutable/chunks/entry.LQerjGIt.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/stores.aLhso-j5.js","_app/immutable/chunks/forms.794Ggprv.js","_app/immutable/chunks/index.CFvSI-PY.js","_app/immutable/chunks/scroll-lock.Cdff5hXG.js","_app/immutable/chunks/mounted.DowyTN3P.js","_app/immutable/chunks/chevron-down.Bv1qxjYC.js","_app/immutable/chunks/attrs.CqXQdisa.js","_app/immutable/chunks/input.aIcynM5P.js","_app/immutable/chunks/input.CJsoznPS.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.S0vXD1Br.js","_app/immutable/chunks/zod.B2p22QL9.js","_app/immutable/chunks/assignments.BePeZ3lL.js"];
const stylesheets = ["_app/immutable/assets/index.CV-KWLNP.css","_app/immutable/assets/Toaster.DKF17Rty.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=23-D1F2tp6r.js.map