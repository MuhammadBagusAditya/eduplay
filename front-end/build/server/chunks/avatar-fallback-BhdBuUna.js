import { b as push, q as copy_payload, t as assign_payload, j as bind_props, p as pop, s as spread_props, h as spread_attributes, v as once } from './index2-JzpfwCt6.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { u as useId, b as box, m as mergeProps, a as useRefById } from './use-id-9y06sS9N.js';
import { c as createContext } from './scroll-lock-ByQIsybU.js';

const AVATAR_ROOT_ATTR = "data-avatar-root";
const AVATAR_IMAGE_ATTR = "data-avatar-image";
const AVATAR_FALLBACK_ATTR = "data-avatar-fallback";
class AvatarRootState {
  #id;
  #ref;
  delayMs;
  loadingStatus;
  constructor(props) {
    this.delayMs = props.delayMs;
    this.loadingStatus = props.loadingStatus;
    this.#ref = props.ref;
    this.#id = props.id;
    this.loadImage = this.loadImage.bind(this);
    useRefById({ id: this.#id, ref: this.#ref });
  }
  loadImage(src, crossorigin, referrerPolicy) {
    let imageTimerId;
    const image = new Image();
    image.src = src;
    if (crossorigin !== void 0) image.crossOrigin = crossorigin;
    if (referrerPolicy) image.referrerPolicy = referrerPolicy;
    this.loadingStatus.current = "loading";
    image.onload = () => {
      imageTimerId = window.setTimeout(
        () => {
          this.loadingStatus.current = "loaded";
        },
        this.delayMs.current
      );
    };
    image.onerror = () => {
      this.loadingStatus.current = "error";
    };
    return () => {
      window.clearTimeout(imageTimerId);
    };
  }
  #props = once(() => ({
    id: this.#id.current,
    [AVATAR_ROOT_ATTR]: "",
    "data-status": this.loadingStatus.current
  }));
  get props() {
    return this.#props();
  }
}
class AvatarImageState {
  #id;
  #ref;
  #crossOrigin;
  #referrerPolicy;
  #src;
  #root;
  constructor(props, root) {
    this.#root = root;
    this.#src = props.src;
    this.#id = props.id;
    this.#ref = props.ref;
    this.#crossOrigin = props.crossOrigin;
    this.#referrerPolicy = props.referrerPolicy;
    useRefById({ id: this.#id, ref: this.#ref });
  }
  #props = once(() => ({
    id: this.#id.current,
    style: {
      display: this.#root.loadingStatus.current === "loaded" ? "block" : "none"
    },
    "data-status": this.#root.loadingStatus.current,
    [AVATAR_IMAGE_ATTR]: "",
    src: this.#src.current,
    crossorigin: this.#crossOrigin.current,
    referrerpolicy: this.#referrerPolicy.current
  }));
  get props() {
    return this.#props();
  }
}
class AvatarFallbackState {
  #id;
  #ref;
  #root;
  constructor(props, root) {
    this.#root = root;
    this.#id = props.id;
    this.#ref = props.ref;
    useRefById({ id: this.#id, ref: this.#ref });
  }
  #props = once(() => ({
    style: {
      display: this.#root.loadingStatus.current === "loaded" ? "none" : void 0
    },
    "data-status": this.#root.loadingStatus.current,
    [AVATAR_FALLBACK_ATTR]: ""
  }));
  get props() {
    return this.#props();
  }
}
const [setAvatarRootContext, getAvatarRootContext] = createContext("Avatar.Root");
function useAvatarRoot(props) {
  return setAvatarRootContext(new AvatarRootState(props));
}
function useAvatarImage(props) {
  const root = getAvatarRootContext();
  return new AvatarImageState(props, root);
}
function useAvatarFallback(props) {
  const root = getAvatarRootContext();
  return new AvatarFallbackState(props, root);
}
function Avatar$1($$payload, $$props) {
  push();
  let {
    delayMs = 0,
    loadingStatus = "loading",
    onLoadingStatusChange,
    child,
    children,
    id = useId(),
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const rootState = useAvatarRoot({
    delayMs: box.with(() => delayMs),
    loadingStatus: box.with(() => loadingStatus, (v) => {
      if (loadingStatus !== v) {
        loadingStatus = v;
        onLoadingStatusChange?.(v);
      }
    }),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, rootState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { loadingStatus, ref });
  pop();
}
function Avatar_image$1($$payload, $$props) {
  push();
  let {
    src,
    child,
    id = useId(),
    ref = null,
    crossorigin = void 0,
    referrerpolicy = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const imageState = useAvatarImage({
    src: box.with(() => src),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    crossOrigin: box.with(() => crossorigin),
    referrerPolicy: box.with(() => referrerpolicy)
  });
  const mergedProps = mergeProps(restProps, imageState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${spread_attributes({ ...mergedProps, src })} onload="this.__e=event" onerror="this.__e=event">`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Avatar_fallback$1($$payload, $$props) {
  push();
  let {
    children,
    child,
    id = useId(),
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const fallbackState = useAvatarFallback({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, fallbackState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload);
    $$payload.out += `<!----></span>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Avatar($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Avatar$1($$payload2, spread_props([
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        class: cn("relative flex size-10 shrink-0 overflow-hidden rounded-full", className)
      },
      restProps
    ]));
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Avatar_image($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Avatar_image$1($$payload2, spread_props([
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        class: cn("aspect-square h-full w-full", className)
      },
      restProps
    ]));
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Avatar_fallback($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Avatar_fallback$1($$payload2, spread_props([
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        class: cn("bg-muted flex h-full w-full items-center justify-center rounded-full", className)
      },
      restProps
    ]));
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}

export { Avatar as A, Avatar_image as a, Avatar_fallback as b };
//# sourceMappingURL=avatar-fallback-BhdBuUna.js.map
