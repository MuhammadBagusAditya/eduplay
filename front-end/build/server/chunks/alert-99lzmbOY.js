import { b as push, d as attr, p as pop } from './index2-JzpfwCt6.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { I as Icon } from './Icon-BFX92tDv.js';

function Alert($$payload, $$props) {
  push();
  const { variant, children } = $$props;
  $$payload.out += `<div${attr("class", cn("w-full rounded-lg border bg-card/60 px-4 py-2 drop-shadow", {
    "border-primary text-primary": variant === "primary",
    "border-destructive text-destructive": variant === "destructive"
  }))} role="alert"><h5${attr("class", cn("flex items-center gap-2 text-lg font-bold", {
    "text-primary": variant === "primary",
    "text-destructive": variant === "destructive"
  }))}>`;
  Icon($$payload, { icon: "mdi:console-line" });
  $$payload.out += `<!----> Alert</h5> <div class="pl-[1.5rem]">`;
  children($$payload);
  $$payload.out += `<!----></div></div>`;
  pop();
}

export { Alert as A };
//# sourceMappingURL=alert-99lzmbOY.js.map
