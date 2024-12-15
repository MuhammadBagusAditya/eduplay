import { p as pb } from './pb-Bvvw3hdM.js';
import './index-Ddp2AB5f.js';
import 'pocketbase';

const handle = async ({ event, resolve }) => {
  const user = pb.authStore.record;
  event.locals.user = user;
  const response = await resolve(event);
  return response;
};

export { handle };
//# sourceMappingURL=hooks.server-DMCrdhLY.js.map
