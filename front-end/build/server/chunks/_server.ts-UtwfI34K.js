import { j as json } from './index-Ddp2AB5f.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import 'pocketbase';

const DELETE = async ({ locals, request }) => {
  if (locals.user?.role !== "teacher")
    return json(null, {
      status: 403
    });
  try {
    const json2 = await request.json();
    await pb.collection("questions").delete(json2.id);
  } catch (e) {
    return json(null, {
      status: 404
    });
  }
  return json(null, {
    status: 200
  });
};
const PUT = async ({ locals, request }) => {
  if (locals.user?.role !== "teacher")
    return json(null, {
      status: 403
    });
  const body = await request.json();
  try {
    await pb.collection("questions").update(body.question.id, {
      order: body.question.order,
      name: body.question.name
    });
  } catch (e) {
    return json(null, {
      status: 400
    });
  }
  for (const answer of body.answers) {
    try {
      await pb.collection("answers").update(answer.id, {
        text: answer.text,
        isCorrect: body.correctAnswer === answer.id
      });
    } catch (e) {
      return json(null, {
        status: 400
      });
    }
  }
  return json(null, {
    status: 200
  });
};

export { DELETE, PUT };
//# sourceMappingURL=_server.ts-UtwfI34K.js.map
