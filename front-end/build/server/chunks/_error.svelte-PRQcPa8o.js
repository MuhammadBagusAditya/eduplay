import { o as head, a as store_get, l as escape_html, u as unsubscribe_stores, p as pop, b as push } from './index2-JzpfwCt6.js';
import { p as page } from './stores-BM6n11zq.js';
import { B as Button } from './button-Duyfcegt.js';
import './client-Ck0mmi3f.js';
import './exports-CTha0ECg.js';
import './utils-BUr2r5nE.js';
import './index-BFfgIoD-.js';

function _error($$payload, $$props) {
  push();
  var $$store_subs;
  const { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Eduplay - ${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</title>`;
  });
  if (store_get($$store_subs ??= {}, "$page", page).status === 404) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<main class="flex min-h-screen flex-col items-center justify-center"><img src="/not-found.svg" alt="not found" class="mb-4 w-[90%] sm:max-w-[20rem]"> `;
    if (data.user) {
      $$payload.out += "<!--[-->";
      Button($$payload, {
        href: "/dashboard",
        class: "",
        children: ($$payload2) => {
          $$payload2.out += `<!---->Kembali ke dashboard`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload.out += "<!--[!-->";
      Button($$payload, {
        href: "/",
        class: "",
        children: ($$payload2) => {
          $$payload2.out += `<!---->Kembali ke beranda`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]--></main>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<main class="flex min-h-screen flex-col items-center justify-center"><h1 class="mb-2 text-3xl text-slate-700 sm:text-4xl lg:text-6xl">${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <span class="mb-6 text-slate-700">${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</span> `;
    if (data.user) {
      $$payload.out += "<!--[-->";
      Button($$payload, {
        href: "/dashboard",
        class: "",
        children: ($$payload2) => {
          $$payload2.out += `<!---->Kembali ke dashboard`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload.out += "<!--[!-->";
      Button($$payload, {
        href: "/",
        class: "",
        children: ($$payload2) => {
          $$payload2.out += `<!---->Kembali ke beranda`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]--></main>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _error as default };
//# sourceMappingURL=_error.svelte-PRQcPa8o.js.map
