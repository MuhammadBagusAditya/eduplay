import { j as json } from './index-Ddp2AB5f.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import 'pocketbase';

const POST = async ({ request, locals, params }) => {
  const jsonData = await request.json();
  if (locals.user?.role !== "teacher")
    return json(null, {
      status: 403
    });
  try {
    const userClassroom = await pb.collection("userClasses").getFullList({
      filter: `user = "${jsonData.id}" && classroom = "${params.id}"`
    });
    if (userClassroom.length > 0) throw new Error("");
    await pb.collection("userClasses").create({
      user: jsonData.id,
      classroom: params.id
    });
  } catch (e) {
    return json(null, {
      status: 400
    });
  }
  return json(null);
};
const DELETE = async ({ request, locals }) => {
  const jsonData = await request.json();
  if (locals.user?.role !== "teacher")
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

export { DELETE, POST };
//# sourceMappingURL=_server.ts-6y263Znq.js.map
