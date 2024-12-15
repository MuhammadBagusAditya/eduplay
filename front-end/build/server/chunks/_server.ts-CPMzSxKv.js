import { j as json } from './index-Ddp2AB5f.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import 'pocketbase';

const DELETE = async ({ request, locals }) => {
  const jsonData = await request.json();
  if (locals.user?.id !== jsonData.userId)
    return json(null, {
      status: 403
    });
  try {
    await pb.collection("userClasses").delete(jsonData.id);
  } catch (e) {
    return json(null, {
      status: 400
    });
  }
  return json(null);
};

export { DELETE };
//# sourceMappingURL=_server.ts-CPMzSxKv.js.map
