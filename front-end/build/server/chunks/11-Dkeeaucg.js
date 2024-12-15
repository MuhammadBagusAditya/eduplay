import { p as pb } from './pb-Bvvw3hdM.js';
import { DateTime } from 'luxon';
import { f as fail } from './index-Ddp2AB5f.js';
import 'pocketbase';

const load = async ({ parent }) => {
  const { user: parentUser } = await parent();
  let classes = null;
  let todayClasses = null;
  const user = await pb.collection("users").getOne(parentUser.id, {
    expand: "userClasses_via_user.classroom"
  });
  const currentDate = DateTime.now().weekday;
  if (user.expand?.userClasses_via_user) {
    classes = user.expand?.userClasses_via_user.map(
      (userClass) => userClass.expand?.classroom
    );
    todayClasses = user.expand?.userClasses_via_user.map((userClass) => userClass.expand?.classroom).filter((classroom) => {
      return classroom.schedules.includes("" + currentDate);
    });
  }
  return {
    classes,
    todayClasses
  };
};
const actions = {
  default: async ({ locals, request }) => {
    try {
      const formData = await request.formData();
      const userClasses = await pb.collection("userClasses").getFullList({
        filter: `user = "${locals.user?.id}" && classroom = "${formData.get("classroom")}"`
      });
      if (userClasses.length > 0)
        return fail(400, {
          message: {
            text: "Anda sudah terdaftar",
            variant: "destructive"
          }
        });
      await pb.collection("userClasses").create({
        user: locals.user?.id,
        classroom: formData.get("classroom")
      });
    } catch (e) {
      return fail(400, {
        message: {
          text: "Gagal bergabung dengan kelas",
          variant: "destructive"
        }
      });
    }
    return {
      message: {
        text: "Berhasil bergabung",
        variant: "primary"
      }
    };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BEx0Eghh.js')).default;
const server_id = "src/routes/(app)/dashboard/(users)/classes/+page.server.ts";
const imports = ["_app/immutable/nodes/11.DphriyQH.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/actions.BPW6lnfX.js","_app/immutable/chunks/Icon.CHCRpPhx.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/breadcrumb-page.BYoj9mJR.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/Icon.CxQCumuR.js","_app/immutable/chunks/svelte-element.DhvnaPqV.js","_app/immutable/chunks/button.DODvjd4i.js","_app/immutable/chunks/index.DESm0kp4.js","_app/immutable/chunks/input.CJsoznPS.js","_app/immutable/chunks/input.aIcynM5P.js","_app/immutable/chunks/badge.CBks-o04.js","_app/immutable/chunks/card-content.C5_W8gaf.js","_app/immutable/chunks/card-header.nu50EiK-.js","_app/immutable/chunks/pb.DLudHD8Y.js","_app/immutable/chunks/time.BTQl4E50.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.S0vXD1Br.js","_app/immutable/chunks/entry.LQerjGIt.js","_app/immutable/chunks/forms.794Ggprv.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DKF17Rty.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-Dkeeaucg.js.map
