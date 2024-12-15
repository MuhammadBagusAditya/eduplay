import './client-Ck0mmi3f.js';
import './formData-yk_uxOf7.js';
import './index-Ddp2AB5f.js';
import { s as superValidate, a as zod, f as fail, w as withFiles } from './zod-CPyhwoWk.js';
import { z } from 'zod';
import './index-BKM0wM1Z.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import 'pocketbase';

const editProfileSchema = z.object({
  username: z.string({ required_error: "Username harus diisi" }).min(1, "Username harus diisi").trim(),
  email: z.string({ required_error: "Email harus diisi" }).min(1, "Email harus diisi").optional(),
  name: z.string({ required_error: "Nama harus diisi" }).min(1, "Nama harus diisi").trim(),
  bio: z.string({ required_error: "Bio harus diisi" }).min(1, "Bio harus diisi")
});
const editAvatarSchema = z.object({
  avatar: z.instanceof(File).nullable().refine((file) => {
    if (!file) return true;
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    return allowedTypes.includes(file.type);
  }, "Avatar harus gambar yang valid").refine((file) => {
    if (!file) return true;
    return file.size < 1024e4;
  }, "Avatar harus berukuran di bawah 10mb")
});

const load = async ({ locals }) => {
  const defaults = {
    username: locals.user?.username,
    email: locals.user?.email,
    name: locals.user?.name,
    bio: locals.user?.bio
  };
  const form = await superValidate(
    zod(editProfileSchema, {
      defaults
    })
  );
  const avatarForm = await superValidate(zod(editAvatarSchema));
  if (!locals.user) {
    return {
      form,
      avatarForm,
      status: 302,
      redirect: "/auth/sign-in"
    };
  }
  return {
    form,
    avatarForm
  };
};
const actions = {
  update: async (event) => {
    const form = await superValidate(event, zod(editProfileSchema));
    let message;
    if (!pb.authStore.record)
      return {
        status: 302,
        redirect: "/auth/sign-in"
      };
    try {
      const user = await pb.collection("users").getFirstListItem(`username = "${form.data.username}"`);
      if (user.id === event.locals.user?.id) throw new Error();
      return fail(400, {
        message: {
          text: "Username sudah diambil",
          variant: "destructive"
        },
        form
      });
    } catch (e) {
    }
    try {
      await pb.collection("users").update(pb.authStore.record.id, {
        ...form.data
      });
      message = {
        text: "Profil berhasil diubah",
        variant: "primary"
      };
    } catch (e) {
      return fail(400, {
        message: {
          text: "Profil gagal diubah",
          variant: "destructive"
        },
        form
      });
    }
    return {
      message,
      form: withFiles(form)
    };
  },
  "file-upload": async (event) => {
    const form = await superValidate(event, zod(editAvatarSchema));
    if (!pb.authStore.record)
      return {
        status: 302,
        redirect: "/auth/sign-in"
      };
    const avatar = form.data.avatar;
    if (!avatar) {
      return fail(400, {
        form: withFiles(form),
        message: {
          text: "Avatar tidak dapat diupload",
          variant: "destructive"
        }
      });
    }
    try {
      await pb.collection("users").update(pb.authStore.record.id, {
        avatar
      });
      return {
        form: withFiles(form),
        message: {
          text: "Avatar berhasil diubah",
          variant: "primary"
        }
      };
    } catch (e) {
      return fail(400, {
        form: withFiles(form),
        message: {
          text: "Avatar gagal diubah",
          variant: "destructive"
        }
      });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 18;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CLn82xtA.js')).default;
const server_id = "src/routes/(app)/dashboard/profile/edit/+page.server.ts";
const imports = ["_app/immutable/nodes/18.D2ygMPFF.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/actions.BPW6lnfX.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/input.aIcynM5P.js","_app/immutable/chunks/Icon.CHCRpPhx.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/button.DODvjd4i.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/index.DESm0kp4.js","_app/immutable/chunks/input.CJsoznPS.js","_app/immutable/chunks/breadcrumb-page.BYoj9mJR.js","_app/immutable/chunks/Icon.CxQCumuR.js","_app/immutable/chunks/svelte-element.DhvnaPqV.js","_app/immutable/chunks/formData.B4uWq1rj.js","_app/immutable/chunks/use-id.B41njTOf.js","_app/immutable/chunks/utils.Du759zP0.js","_app/immutable/chunks/entry.LQerjGIt.js","_app/immutable/chunks/stores.aLhso-j5.js","_app/immutable/chunks/forms.794Ggprv.js","_app/immutable/chunks/avatar-fallback.BvSUYQcc.js","_app/immutable/chunks/scroll-lock.Cdff5hXG.js","_app/immutable/chunks/index.CrvKBJSA.js","_app/immutable/chunks/x.BVp5BWZm.js","_app/immutable/chunks/attrs.CqXQdisa.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.S0vXD1Br.js","_app/immutable/chunks/zod.B2p22QL9.js","_app/immutable/chunks/pb.DLudHD8Y.js","_app/immutable/chunks/form-description.TKgBtrwm.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DKF17Rty.css"];
const fonts = [];

var _18 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  component: component,
  fonts: fonts,
  imports: imports,
  index: index,
  server: _page_server_ts,
  server_id: server_id,
  stylesheets: stylesheets
});

export { _18 as _, editAvatarSchema as a, editProfileSchema as e };
//# sourceMappingURL=18-DPrMFITc.js.map
