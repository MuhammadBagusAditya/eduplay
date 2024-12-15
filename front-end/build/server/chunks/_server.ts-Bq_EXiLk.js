import { j as json } from './index-Ddp2AB5f.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import 'pocketbase';

const DELETE = async ({ locals, params, request }) => {
  if (locals.user?.role !== "student")
    return json(null, {
      status: 403
    });
  try {
    const jsonData = await request.json();
    await pb.collection("userAssignments").update(jsonData.userAssignment, {
      "attachments-": params.id
    });
    await pb.collection("attachments").delete(params.id);
  } catch (e) {
    return json(null, {
      status: 404
    });
  }
  return json(null, {
    status: 200
  });
};

export { DELETE };
//# sourceMappingURL=_server.ts-Bq_EXiLk.js.map
