import { b as push, h as spread_attributes, j as bind_props, p as pop } from './index2-JzpfwCt6.js';
import { c as cn } from './utils-BUr2r5nE.js';

function Card_title($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    level = 3,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div${spread_attributes({
    role: "heading",
    "aria-level": level,
    class: cn("text-2xl font-semibold leading-none tracking-tight", className),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}

export { Card_title as C };
//# sourceMappingURL=card-title-CF-XbItb.js.map
