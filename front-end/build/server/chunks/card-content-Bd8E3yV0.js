import { h as spread_attributes, j as bind_props, p as pop, b as push } from './index2-JzpfwCt6.js';
import { c as cn } from './utils-BUr2r5nE.js';

function Card($$payload, $$props) {
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
    class: cn("bg-card text-card-foreground rounded-lg border shadow-sm", className),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Card_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div${spread_attributes({ class: cn("p-6", className), ...restProps })}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}

export { Card as C, Card_content as a };
//# sourceMappingURL=card-content-Bd8E3yV0.js.map
