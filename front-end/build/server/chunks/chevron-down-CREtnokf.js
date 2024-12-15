import { s as spread_props, i as slot, n as sanitize_props } from './index2-JzpfwCt6.js';
import { I as Icon } from './Icon2-CRb0pbIs.js';

function Chevron_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-down" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {}, null);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}

export { Chevron_down as C };
//# sourceMappingURL=chevron-down-CREtnokf.js.map
