import { b as push, h as spread_attributes, j as bind_props, p as pop } from './index2-JzpfwCt6.js';
import { c as cn } from './utils-BUr2r5nE.js';

function Card_header($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div${spread_attributes({
    class: cn("flex flex-col space-y-1.5 p-6 pb-0", className),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}

export { Card_header as C };
//# sourceMappingURL=card-header-B7NB_-1J.js.map
