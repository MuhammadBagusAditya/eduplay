import { j as json } from './index-Ddp2AB5f.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import 'pocketbase';

const DELETE = async ({ locals, params }) => {
  if (locals.user?.role !== "teacher")
    return json(null, {
      status: 403
    });
  try {
    await pb.collection("quizzes").delete(params.id);
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
//# sourceMappingURL=_server.ts-D5jCYZ39.js.map
