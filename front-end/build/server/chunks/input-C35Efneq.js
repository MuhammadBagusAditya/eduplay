import { h as spread_attributes, j as bind_props, p as pop, b as push } from './index2-JzpfwCt6.js';
import { c as cn } from './utils-BUr2r5nE.js';

function Input($$payload, $$props) {
  push();
  let {
    ref = null,
    value = void 0,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<input${spread_attributes({
    class: cn("border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
    value,
    ...restProps
  })}>`;
  bind_props($$props, { ref, value });
  pop();
}

export { Input as I };
//# sourceMappingURL=input-C35Efneq.js.map
