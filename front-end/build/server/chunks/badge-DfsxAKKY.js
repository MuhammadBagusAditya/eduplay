import { b as push, z as element, j as bind_props, p as pop, h as spread_attributes } from './index2-JzpfwCt6.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { c as ce } from './index-BFfgIoD-.js';

const badgeVariants = ce({
  base: "focus:ring-ring inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80 border-transparent",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent",
      outline: "text-foreground"
    }
  },
  defaultVariants: { variant: "default" }
});
function Badge($$payload, $$props) {
  push();
  let {
    ref = null,
    href,
    class: className,
    variant = "default",
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const $$tag = href ? "a" : "span";
  element(
    $$payload,
    $$tag,
    () => {
      $$payload.out += `${spread_attributes({
        href,
        class: cn(badgeVariants({ variant, className })),
        ...restProps
      })}`;
    },
    () => {
      children?.($$payload);
      $$payload.out += `<!---->`;
    }
  );
  bind_props($$props, { ref });
  pop();
}

export { Badge as B };
//# sourceMappingURL=badge-DfsxAKKY.js.map
