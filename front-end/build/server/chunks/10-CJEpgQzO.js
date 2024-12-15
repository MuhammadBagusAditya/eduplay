import { p as pb } from './pb-Bvvw3hdM.js';
import { e as error } from './index-Ddp2AB5f.js';
import './client-Ck0mmi3f.js';
import './formData-yk_uxOf7.js';
import { s as superValidate, a as zod, f as fail, w as withFiles } from './zod-CPyhwoWk.js';
import './index-BKM0wM1Z.js';
import { z } from 'zod';
import 'pocketbase';
import './exports-CTha0ECg.js';
import './index6-DsoZqCdM.js';
import './index2-JzpfwCt6.js';
import './stores-BM6n11zq.js';
import './index-server-DhylklOr.js';
import './stringify-BgjEYUR1.js';
import './_commonjsHelpers-B85MJLTf.js';

const addAttachmentSchema = z.object({
  userAssignment: z.string(),
  attachment: z.instanceof(File, { message: "File harus dikirim" }).refine((file) => file.size < 2048e4).refine(
    (file) => [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "image/jpeg",
      "image/png",
      "image/webp",
      "video/mp4",
      "application/zip"
    ].includes(file.type)
  )
});
const load = async ({ params, locals }) => {
  let assignment;
  let userAssignment;
  try {
    assignment = await pb.collection("assignments").getOne(params.id, {
      expand: "attachments,classroom"
    });
  } catch (e) {
    error(404);
  }
  try {
    userAssignment = await pb.collection("userAssignments").getFirstListItem(`user = "${locals.user?.id}" && assignment = "${assignment.id}"`, {
      expand: "attachments"
    });
  } catch (e) {
    userAssignment = await pb.collection("userAssignments").create({
      isSubmitted: false,
      user: locals.user?.id,
      assignment: assignment.id
    });
  }
  const attachmentForm = await superValidate(zod(addAttachmentSchema));
  return {
    assignment,
    attachmentForm,
    userAssignment
  };
};
const actions = {
  "upload-attachment": async (event) => {
    const attachmentForm = await superValidate(event, zod(addAttachmentSchema));
    if (!event.locals.user)
      return {
        status: 302,
        redirect: "/auth/sign-in"
      };
    if (!attachmentForm.valid)
      return fail(400, {
        attachmentForm: withFiles(attachmentForm)
      });
    try {
      const attachment = await pb.collection("attachments").create({
        name: attachmentForm.data.attachment?.name,
        mimes: attachmentForm.data.attachment?.type,
        type: attachmentForm.data.attachment?.type.split("/")[0],
        file: attachmentForm.data.attachment,
        uploader: event.locals.user.id
      });
      await pb.collection("userAssignments").update(attachmentForm.data.userAssignment, {
        "attachments+": attachment.id,
        isSubmitted: true
      });
    } catch (e) {
      return fail(400, {
        message: {
          text: "File tugas gagal ditambahkan",
          variant: "destructive"
        },
        attachmentForm: withFiles(attachmentForm)
      });
    }
    return {
      message: {
        text: "File tugas berhasil ditambahkan",
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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DnDmFYqu.js')).default;
const server_id = "src/routes/(app)/dashboard/(users)/assignments/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/10.CRRZDFhj.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/lifecycle.eq67AOaA.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/utils.Dqu1-Wdg.js","_app/immutable/chunks/input.aIcynM5P.js","_app/immutable/chunks/card-content.C5_W8gaf.js","_app/immutable/chunks/snippet.DzwRyOEQ.js","_app/immutable/chunks/breadcrumb-page.BYoj9mJR.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/Icon.CxQCumuR.js","_app/immutable/chunks/svelte-element.DhvnaPqV.js","_app/immutable/chunks/separator.CWRbQcxc.js","_app/immutable/chunks/use-id.B41njTOf.js","_app/immutable/chunks/attrs.CqXQdisa.js","_app/immutable/chunks/index.CrvKBJSA.js","_app/immutable/chunks/x.BVp5BWZm.js","_app/immutable/chunks/scroll-lock.Cdff5hXG.js","_app/immutable/chunks/utils.Du759zP0.js","_app/immutable/chunks/formData.B4uWq1rj.js","_app/immutable/chunks/button.DODvjd4i.js","_app/immutable/chunks/index.DESm0kp4.js","_app/immutable/chunks/entry.LQerjGIt.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/stores.aLhso-j5.js","_app/immutable/chunks/forms.794Ggprv.js","_app/immutable/chunks/Icon.CHCRpPhx.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/badge.CBks-o04.js","_app/immutable/chunks/zod.B2p22QL9.js","_app/immutable/chunks/assignments.BePeZ3lL.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.S0vXD1Br.js","_app/immutable/chunks/pb.DLudHD8Y.js","_app/immutable/chunks/dialog-description.BFv0Xkh4.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DKF17Rty.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-CJEpgQzO.js.map
