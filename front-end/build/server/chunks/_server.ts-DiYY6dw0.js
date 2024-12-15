import { j as json } from './index-Ddp2AB5f.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import { DateTime } from 'luxon';
import 'pocketbase';

const POST = async ({ locals, params, url, request }) => {
  let userQuiz;
  const jsonData = await request.json();
  console.log(jsonData);
  try {
    userQuiz = await pb.collection("userQuizzes").getFirstListItem(`user = "${locals.user?.id}" && quiz = "${params.id}"`);
  } catch (e) {
    return json(
      {
        message: "Tidak ditemukan"
      },
      {
        status: 404
      }
    );
  }
  try {
    await pb.collection("userQuizzes").update(userQuiz.id, {
      answers: Object.values(jsonData.answerIds),
      isSubmitted: DateTime.fromMillis(userQuiz.endTime).diffNow().toMillis() <= 0
    });
  } catch (e) {
    return json(
      {
        message: "Gagal disimpan"
      },
      {
        status: 400
      }
    );
  }
  return json(null);
};

export { POST };
//# sourceMappingURL=_server.ts-DiYY6dw0.js.map
