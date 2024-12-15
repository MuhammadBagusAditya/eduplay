import { r as redirect } from './index-Ddp2AB5f.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import 'pocketbase';

const actions = {
  default: async () => {
    pb.authStore.clear();
    redirect(302, "/auth/sign-in");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 37;
const server_id = "src/routes/auth/sign-out/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=37-DtWW4A01.js.map
