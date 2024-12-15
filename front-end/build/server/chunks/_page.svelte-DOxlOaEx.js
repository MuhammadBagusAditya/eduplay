import { q as copy_payload, t as assign_payload, p as pop, o as head, l as escape_html, b as push, e as ensure_array_like, d as attr, h as spread_attributes, j as bind_props, s as spread_props, v as once } from './index2-JzpfwCt6.js';
import { C as Card, a as Card_content } from './card-content-Bd8E3yV0.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_link, e as Breadcrumb_page } from './breadcrumb-page-CwCmZH2-.js';
import { S as Separator } from './separator-CJX90iGV.js';
import { R as Root$1, D as Dialog_content, a as Dialog_header, b as Dialog_footer, T as Trigger, c as Dialog_title } from './index4-BkA9mXpK.js';
import { R as Root$2, T as Trigger$1, D as Dropdown_menu_content, G as Group, a as Dropdown_menu_group_heading, b as Dropdown_menu_separator, c as Dropdown_menu_item } from './index8-B9p_xVmz.js';
import { F as Form_field, C as Control, a as Form_field_errors, b as Form_label } from './index5-B5v-itD7.js';
import { b as buttonVariants, B as Button } from './button-Duyfcegt.js';
import { u as useId, b as box, m as mergeProps, a as useRefById } from './use-id-9y06sS9N.js';
import { b as getDataOrientation, e as getDataDisabled, c as getDataOpenClosed, d as getAriaExpanded, f as getAriaDisabled } from './attrs-CL1THhfQ.js';
import { u as useRovingFocus } from './use-roving-focus.svelte-B8edc4eM.js';
import { c as createContext, n as noop, a as Presence_layer, S as SPACE, E as ENTER } from './scroll-lock-ByQIsybU.js';
import { I as Icon } from './Icon-BFX92tDv.js';
import { B as Badge } from './badge-DfsxAKKY.js';
import { I as Input } from './input-C35Efneq.js';
import { g as goto } from './client-Ck0mmi3f.js';
import { s as superForm, f as fileProxy } from './formData-yk_uxOf7.js';
import './index-Ddp2AB5f.js';
import './index-BKM0wM1Z.js';
import { z as zodClient } from './zod-CPyhwoWk.js';
import { a as addAttachmentSchema } from './assignments-Cr7eEjcV.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-jOAoOhX0.js';
import { p as pb } from './pb-Bvvw3hdM.js';
import { D as Dialog_description } from './dialog-description-BEmtFmnm.js';
import { C as Chevron_down } from './chevron-down-CREtnokf.js';
import './Icon2-CRb0pbIs.js';
import './x-C0GKGse2.js';
import './mounted-DTTuSVjU.js';
import './index6-DsoZqCdM.js';
import './index-BFfgIoD-.js';
import './_commonjsHelpers-B85MJLTf.js';
import './index-server-DhylklOr.js';
import './functions-x3jG1pm5.js';
import './exports-CTha0ECg.js';
import './stores-BM6n11zq.js';
import './stringify-BgjEYUR1.js';
import 'zod';
import 'pocketbase';

const ACCORDION_ROOT_ATTR = "data-accordion-root";
const ACCORDION_TRIGGER_ATTR = "data-accordion-trigger";
const ACCORDION_CONTENT_ATTR = "data-accordion-content";
const ACCORDION_ITEM_ATTR = "data-accordion-item";
const ACCORDION_HEADER_ATTR = "data-accordion-header";
class AccordionBaseState {
  #id;
  #ref;
  disabled;
  #loop;
  orientation;
  rovingFocusGroup;
  constructor(props) {
    this.#id = props.id;
    this.disabled = props.disabled;
    this.#ref = props.ref;
    useRefById({ id: props.id, ref: this.#ref });
    this.orientation = props.orientation;
    this.#loop = props.loop;
    this.rovingFocusGroup = useRovingFocus({
      rootNodeId: this.#id,
      candidateAttr: ACCORDION_TRIGGER_ATTR,
      loop: this.#loop,
      orientation: this.orientation
    });
  }
  #props = once(() => ({
    id: this.#id.current,
    "data-orientation": getDataOrientation(this.orientation.current),
    "data-disabled": getDataDisabled(this.disabled.current),
    [ACCORDION_ROOT_ATTR]: ""
  }));
  get props() {
    return this.#props();
  }
}
class AccordionSingleState extends AccordionBaseState {
  #value;
  isMulti = false;
  constructor(props) {
    super(props);
    this.#value = props.value;
    this.includesItem = this.includesItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
  }
  includesItem(item) {
    return this.#value.current === item;
  }
  toggleItem(item) {
    this.#value.current = this.includesItem(item) ? "" : item;
  }
}
class AccordionMultiState extends AccordionBaseState {
  #value;
  isMulti = true;
  constructor(props) {
    super(props);
    this.#value = props.value;
    this.includesItem = this.includesItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
  }
  includesItem(item) {
    return this.#value.current.includes(item);
  }
  toggleItem(item) {
    if (this.includesItem(item)) {
      this.#value.current = this.#value.current.filter((v) => v !== item);
    } else {
      this.#value.current = [...this.#value.current, item];
    }
  }
}
class AccordionItemState {
  #id;
  #ref;
  value;
  disabled;
  root;
  #isActive = once(() => this.root.includesItem(this.value.current));
  get isActive() {
    return this.#isActive();
  }
  #isDisabled = once(() => this.disabled.current || this.root.disabled.current);
  get isDisabled() {
    return this.#isDisabled();
  }
  constructor(props) {
    this.value = props.value;
    this.disabled = props.disabled;
    this.root = props.rootState;
    this.#id = props.id;
    this.#ref = props.ref;
    this.updateValue = this.updateValue.bind(this);
    useRefById({
      id: this.#id,
      ref: this.#ref,
      deps: () => this.isActive
    });
  }
  updateValue() {
    this.root.toggleItem(this.value.current);
  }
  #props = once(() => ({
    id: this.#id.current,
    "data-state": getDataOpenClosed(this.isActive),
    "data-disabled": getDataDisabled(this.isDisabled),
    "data-orientation": getDataOrientation(this.root.orientation.current),
    [ACCORDION_ITEM_ATTR]: ""
  }));
  get props() {
    return this.#props();
  }
}
class AccordionTriggerState {
  #ref;
  #disabled;
  #id;
  #root;
  #itemState;
  #isDisabled = once(() => this.#disabled.current || this.#itemState.disabled.current || this.#root.disabled.current);
  constructor(props, itemState) {
    this.#disabled = props.disabled;
    this.#itemState = itemState;
    this.#root = itemState.root;
    this.#id = props.id;
    this.#ref = props.ref;
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
    useRefById({ id: props.id, ref: this.#ref });
  }
  onpointerdown(e) {
    if (this.#isDisabled()) return;
    if (e.pointerType === "touch" || e.button !== 0) return e.preventDefault();
    this.#itemState.updateValue();
  }
  onpointerup(e) {
    if (this.#isDisabled()) return;
    if (e.pointerType === "touch") {
      e.preventDefault();
      this.#itemState.updateValue();
    }
  }
  onkeydown(e) {
    if (this.#isDisabled()) return;
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.#itemState.updateValue();
      return;
    }
    this.#root.rovingFocusGroup.handleKeydown(this.#ref.current, e);
  }
  #props = once(() => ({
    id: this.#id.current,
    disabled: this.#isDisabled(),
    "aria-expanded": getAriaExpanded(this.#itemState.isActive),
    "aria-disabled": getAriaDisabled(this.#isDisabled()),
    "data-disabled": getDataDisabled(this.#isDisabled()),
    "data-state": getDataOpenClosed(this.#itemState.isActive),
    "data-orientation": getDataOrientation(this.#root.orientation.current),
    [ACCORDION_TRIGGER_ATTR]: "",
    tabindex: 0,
    //
    onpointerdown: this.onpointerdown,
    onpointerup: this.onpointerup,
    onkeydown: this.onkeydown
  }));
  get props() {
    return this.#props();
  }
}
class AccordionContentState {
  item;
  #ref;
  #id;
  #originalStyles = void 0;
  #isMountAnimationPrevented = false;
  #width = 0;
  #height = 0;
  #forceMount;
  #present = once(() => this.#forceMount.current || this.item.isActive);
  get present() {
    return this.#present();
  }
  constructor(props, item) {
    this.item = item;
    this.#forceMount = props.forceMount;
    this.#isMountAnimationPrevented = this.item.isActive;
    this.#id = props.id;
    this.#ref = props.ref;
    useRefById({ id: this.#id, ref: this.#ref });
  }
  #snippetProps = once(() => ({ open: this.item.isActive }));
  get snippetProps() {
    return this.#snippetProps();
  }
  #props = once(() => ({
    id: this.#id.current,
    "data-state": getDataOpenClosed(this.item.isActive),
    "data-disabled": getDataDisabled(this.item.isDisabled),
    "data-orientation": getDataOrientation(this.item.root.orientation.current),
    [ACCORDION_CONTENT_ATTR]: "",
    style: {
      "--bits-accordion-content-height": `${this.#height}px`,
      "--bits-accordion-content-width": `${this.#width}px`
    }
  }));
  get props() {
    return this.#props();
  }
}
class AccordionHeaderState {
  #id;
  #ref;
  #level;
  #item;
  constructor(props, item) {
    this.#level = props.level;
    this.#id = props.id;
    this.#ref = props.ref;
    useRefById({ id: this.#id, ref: this.#ref });
    this.#item = item;
  }
  #props = once(() => ({
    id: this.#id.current,
    role: "heading",
    "aria-level": this.#level.current,
    "data-heading-level": this.#level.current,
    "data-state": getDataOpenClosed(this.#item.isActive),
    "data-orientation": getDataOrientation(this.#item.root.orientation.current),
    [ACCORDION_HEADER_ATTR]: ""
  }));
  get props() {
    return this.#props();
  }
}
const [
  setAccordionRootContext,
  getAccordionRootContext
] = createContext("Accordion.Root");
const [
  setAccordionItemContext,
  getAccordionItemContext
] = createContext("Accordion.Item");
function useAccordionRoot(props) {
  const { type, ...rest } = props;
  const rootState = type === "single" ? new AccordionSingleState(rest) : new AccordionMultiState(rest);
  return setAccordionRootContext(rootState);
}
function useAccordionItem(props) {
  const rootState = getAccordionRootContext();
  return setAccordionItemContext(new AccordionItemState({ ...props, rootState }));
}
function useAccordionTrigger(props) {
  const item = getAccordionItemContext();
  return new AccordionTriggerState(props, item);
}
function useAccordionContent(props) {
  const item = getAccordionItemContext();
  return new AccordionContentState(props, item);
}
function useAccordionHeader(props) {
  const item = getAccordionItemContext();
  return new AccordionHeaderState(props, item);
}
function Accordion($$payload, $$props) {
  push();
  let {
    disabled = false,
    children,
    child,
    type,
    value = void 0,
    ref = null,
    id = useId(),
    onValueChange = noop,
    loop = true,
    orientation = "vertical",
    controlledValue = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  value === void 0 && (value = type === "single" ? "" : []);
  const rootState = useAccordionRoot({
    type,
    value: box.with(() => value, (v) => {
      if (controlledValue) {
        onValueChange(v);
      } else {
        value = v;
        onValueChange(v);
      }
    }),
    id: box.with(() => id),
    disabled: box.with(() => disabled),
    loop: box.with(() => loop),
    orientation: box.with(() => orientation),
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
  bind_props($$props, { value, ref });
  pop();
}
function Accordion_item$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    disabled = false,
    value = useId(),
    children,
    child,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const itemState = useAccordionItem({
    value: box.with(() => value),
    disabled: box.with(() => disabled),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, itemState.props);
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
  bind_props($$props, { ref });
  pop();
}
function Accordion_header($$payload, $$props) {
  push();
  let {
    id = useId(),
    level = 2,
    children,
    child,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const headerState = useAccordionHeader({
    id: box.with(() => id),
    level: box.with(() => level),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, headerState.props);
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
  bind_props($$props, { ref });
  pop();
}
function Accordion_trigger$1($$payload, $$props) {
  push();
  let {
    disabled = false,
    ref = null,
    id = useId(),
    children,
    child,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const triggerState = useAccordionTrigger({
    disabled: box.with(() => disabled),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, triggerState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({ type: "button", ...mergedProps })}>`;
    children?.($$payload);
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Accordion_content$1($$payload, $$props) {
  push();
  let {
    child,
    ref = null,
    id = useId(),
    forceMount = false,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const contentState = useAccordionContent({
    forceMount: box.with(() => forceMount),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  {
    let presence = function($$payload2, { present }) {
      const mergedProps = mergeProps(restProps, contentState.props, {
        hidden: forceMount ? void 0 : !present.current
      });
      if (child) {
        $$payload2.out += "<!--[-->";
        child($$payload2, {
          props: mergedProps,
          ...contentState.snippetProps
        });
        $$payload2.out += `<!---->`;
      } else {
        $$payload2.out += "<!--[!-->";
        $$payload2.out += `<div${spread_attributes({ ...mergedProps })}>`;
        children?.($$payload2);
        $$payload2.out += `<!----></div>`;
      }
      $$payload2.out += `<!--]-->`;
    };
    Presence_layer($$payload, {
      forceMount: true,
      present: contentState.present,
      id,
      presence,
      $$slots: { presence: true }
    });
  }
  bind_props($$props, { ref });
  pop();
}
function Accordion_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Accordion_content$1($$payload2, spread_props([
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        class: cn("data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all", className)
      },
      restProps,
      {
        children: ($$payload3) => {
          $$payload3.out += `<div class="pb-4 pt-0">`;
          children?.($$payload3);
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { default: true }
      }
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
function Accordion_item($$payload, $$props) {
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
    Accordion_item$1($$payload2, spread_props([
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        class: cn("border-b", className)
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
function Accordion_trigger($$payload, $$props) {
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
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Accordion_header($$payload2, {
      level,
      class: "flex",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Accordion_trigger$1($$payload3, spread_props([
          {
            get ref() {
              return ref;
            },
            set ref($$value) {
              ref = $$value;
              $$settled = false;
            },
            class: cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className)
          },
          restProps,
          {
            children: ($$payload4) => {
              children?.($$payload4);
              $$payload4.out += `<!----> `;
              Chevron_down($$payload4, {
                class: "size-4 shrink-0 transition-transform duration-200"
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          }
        ]));
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
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
const Root = Accordion;
function _page($$payload, $$props) {
  push();
  const { data, form: formAction } = $$props;
  const attachmentForm = superForm(data.attachmentForm, { validators: zodClient(addAttachmentSchema) });
  fileProxy(attachmentForm, "attachment");
  async function deleteAssignment() {
    try {
      const response = await fetch("/dashboard/teachers/assignments/" + data.assignment.id, { method: "delete" });
      if (response.status > 399) throw new Error("");
      toast.success("Alert", {
        description: "Tugas berhasil dihapus",
        dismissable: true
      });
      goto("/dashboard/teachers/classes/" + data.assignment.classroom);
    } catch (e) {
      toast.error("Alert", {
        description: "Anda tidak memiliki akses untuk menghapus",
        dismissable: true
      });
    }
  }
  async function deleteAttachment(id) {
    try {
      const response = await fetch("/dashboard/teachers/attachments/" + id, { method: "delete" });
      if (response.status > 399) throw new Error("");
      toast.success("Alert", {
        description: "File berhasil dihapus",
        dismissable: true
      });
      goto("/dashboard/teachers/assignments/" + data.assignment.id, { invalidateAll: true });
    } catch (e) {
      toast.error("Alert", {
        description: "Anda tidak memiliki akses untuk menghapus",
        dismissable: true
      });
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Eduplay - Tugas ${escape_html(data.assignment.name)}</title>`;
    });
    $$payload2.out += `<div class="grid grid-cols-1 grid-rows-[repeat(auto-fit,_max-content)] gap-6 xl:grid-cols-[1fr,_40%]"><!---->`;
    Breadcrumb($$payload2, {
      class: "xl:col-span-2",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Breadcrumb_list($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Breadcrumb_item($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Breadcrumb_link($$payload5, {
                  href: "/dashboard",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Dashboard`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Breadcrumb_separator($$payload4, {});
            $$payload4.out += `<!----> <!---->`;
            Breadcrumb_item($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Breadcrumb_link($$payload5, {
                  href: "/dashboard/teachers/classes",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Kelas`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Breadcrumb_separator($$payload4, {});
            $$payload4.out += `<!----> <!---->`;
            Breadcrumb_item($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Breadcrumb_link($$payload5, {
                  href: "/dashboard/teachers/classes/" + data.assignment.expand?.classroom.id,
                  class: "capitalize",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->${escape_html(data.assignment.expand?.classroom.name)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Breadcrumb_separator($$payload4, {});
            $$payload4.out += `<!----> <!---->`;
            Breadcrumb_item($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Breadcrumb_link($$payload5, {
                  href: "/dashboard/teachers/assignments",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Tugas`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Breadcrumb_separator($$payload4, {});
            $$payload4.out += `<!----> <!---->`;
            Breadcrumb_item($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Breadcrumb_page($$payload5, {
                  class: "capitalize",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->${escape_html(data.assignment.name)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <header class="relative z-0 col-span-1 overflow-hidden rounded-xl bg-primary px-6 py-4 shadow shadow-slate-900/20 xl:col-span-2"><div class="flex flex-wrap items-center justify-between gap-4"><h1 class="text-xl font-bold capitalize text-slate-100 sm:text-2xl">${escape_html(data.assignment.name)}</h1> <!---->`;
    Root$1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Root$2($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Trigger$1($$payload4, {
              children: ($$payload5) => {
                Icon($$payload5, {
                  icon: "mdi:dots-vertical",
                  class: "text-3xl text-slate-300"
                });
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Dropdown_menu_content($$payload4, {
              class: "w-56",
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Group($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->`;
                    Dropdown_menu_group_heading($$payload6, {
                      children: ($$payload7) => {
                        $$payload7.out += `<!---->Aksi`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!----> <!---->`;
                    Dropdown_menu_separator($$payload6, {});
                    $$payload6.out += `<!----> <!---->`;
                    Group($$payload6, {
                      children: ($$payload7) => {
                        $$payload7.out += `<!---->`;
                        Dropdown_menu_item($$payload7, {
                          children: ($$payload8) => {
                            Icon($$payload8, { icon: "mdi:pencil-outline", class: "" });
                            $$payload8.out += `<!----> <a${attr("href", "/dashboard/teachers/assignments/" + data.assignment.id + "/edit")} class="text-sm">Edit tugas</a>`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload7.out += `<!----> <!---->`;
                        Dropdown_menu_item($$payload7, {
                          children: ($$payload8) => {
                            Icon($$payload8, {
                              icon: "mdi:trash-can-outline",
                              class: "text-destructive"
                            });
                            $$payload8.out += `<!----> <!---->`;
                            Trigger($$payload8, {
                              class: "w-full text-left text-sm text-destructive",
                              children: ($$payload9) => {
                                $$payload9.out += `<!---->Hapus tugas`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload8.out += `<!---->`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload7.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> <!---->`;
        Dialog_content($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Dialog_header($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Dialog_title($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Alert`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Dialog_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Apakah yakin ingin menghapus tugas ini?`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Dialog_footer($$payload4, {
              children: ($$payload5) => {
                Button($$payload5, {
                  variant: "destructive",
                  onclick: deleteAssignment,
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Iya`;
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div></header> <!---->`;
    Card($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Card_content($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Deskripsi tugas</h2> <p class="mb-3 text-sm text-slate-700">${escape_html(data.assignment.description)}</p> `;
            if (data.assignment.status === "open") {
              $$payload4.out += "<!--[-->";
              Badge($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Dibuka`;
                },
                $$slots: { default: true }
              });
            } else {
              $$payload4.out += "<!--[!-->";
              Badge($$payload4, {
                variant: "destructive",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Ditutup`;
                },
                $$slots: { default: true }
              });
            }
            $$payload4.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <!---->`;
    Card($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Card_content($$payload3, {
          children: ($$payload4) => {
            const each_array = ensure_array_like(data.assignment.expand?.attachments);
            $$payload4.out += `<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Lampiran tugas</h2> <div class="flex flex-col gap-3"><!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let attachment = each_array[$$index];
              $$payload4.out += `<div class="flex items-center gap-2">`;
              Icon($$payload4, {
                icon: attachment.type === "application" ? "mdi:file" : attachment.type === "image" ? "mdi:file-image" : attachment.type === "video" ? "mdi:file-video" : "mdi:file-document-alert",
                class: "text-4xl text-slate-700"
              });
              $$payload4.out += `<!----> <a class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-slate-700 underline"${attr("href", pb.files.getURL(attachment, attachment.file))}>${escape_html(attachment.name)}</a> <!---->`;
              Root$1($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Trigger($$payload5, {
                    class: cn(buttonVariants({ variant: "outline", size: "icon" })),
                    children: ($$payload6) => {
                      Icon($$payload6, {
                        icon: "mdi:trash-can-outline",
                        class: "text-destructive"
                      });
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!---->`;
                  Dialog_content($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      Dialog_header($$payload6, {
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->`;
                          Dialog_title($$payload7, {
                            children: ($$payload8) => {
                              $$payload8.out += `<!---->Alert`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!----> <!---->`;
                          Dialog_description($$payload7, {
                            children: ($$payload8) => {
                              $$payload8.out += `<!---->Yakin menghapus file?`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!---->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> <!---->`;
                      Dialog_footer($$payload6, {
                        children: ($$payload7) => {
                          Button($$payload7, {
                            variant: "destructive",
                            onclick: () => deleteAttachment(attachment.id),
                            children: ($$payload8) => {
                              $$payload8.out += `<!---->Iya`;
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!---->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></div> `;
              Separator($$payload4, { class: "last:hidden" });
              $$payload4.out += `<!---->`;
            }
            $$payload4.out += `<!--]--> <!---->`;
            Root$1($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Trigger($$payload5, {
                  class: cn(buttonVariants({ variant: "default" })),
                  children: ($$payload6) => {
                    Icon($$payload6, { icon: "mdi:plus", class: "text-xl" });
                    $$payload6.out += `<!----> Upload file`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Dialog_content($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<form action="?/upload-attachment" method="post" enctype="multipart/form-data"><!---->`;
                    Dialog_header($$payload6, {
                      children: ($$payload7) => {
                        $$payload7.out += `<!---->`;
                        Dialog_title($$payload7, {
                          children: ($$payload8) => {
                            $$payload8.out += `<!---->Tambah file`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload7.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!----> <!---->`;
                    Form_field($$payload6, {
                      form: attachmentForm,
                      name: "attachment",
                      children: ($$payload7) => {
                        $$payload7.out += `<!---->`;
                        {
                          let children = function($$payload8, { props }) {
                            $$payload8.out += `<!---->`;
                            Form_label($$payload8, {
                              children: ($$payload9) => {
                                $$payload9.out += `<!---->File`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload8.out += `<!----> <input${spread_attributes({
                              ...props,
                              type: "file",
                              class: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50")
                            })}>`;
                          };
                          Control($$payload7, { children, $$slots: { default: true } });
                        }
                        $$payload7.out += `<!----> <!---->`;
                        Form_field_errors($$payload7, { class: "[&_*]:text-[0.8rem]" });
                        $$payload7.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!----> <!---->`;
                    Dialog_footer($$payload6, {
                      children: ($$payload7) => {
                        Button($$payload7, {
                          type: "submit",
                          children: ($$payload8) => {
                            $$payload8.out += `<!---->Submit`;
                          },
                          $$slots: { default: true }
                        });
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!----></form>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <!---->`;
    Card($$payload2, {
      class: "xl:col-span-2",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Card_content($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Pengumpulan tugas</h2> `;
            if (data.userAssignments.length > 0) {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<!---->`;
              Root($$payload4, {
                type: "single",
                children: ($$payload5) => {
                  const each_array_1 = ensure_array_like(data.userAssignments);
                  $$payload5.out += `<!--[-->`;
                  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
                    let userAssignment = each_array_1[$$index_2];
                    $$payload5.out += `<!---->`;
                    Accordion_item($$payload5, {
                      value: userAssignment.id,
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->`;
                        Accordion_trigger($$payload6, {
                          class: "gap-3",
                          children: ($$payload7) => {
                            $$payload7.out += `<!---->${escape_html(userAssignment.expand?.user.name)} `;
                            Badge($$payload7, {
                              class: "ml-auto",
                              children: ($$payload8) => {
                                $$payload8.out += `<!---->${escape_html(userAssignment.grade ? userAssignment.grade : "?")}`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload7.out += `<!---->`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> <!---->`;
                        Accordion_content($$payload6, {
                          children: ($$payload7) => {
                            const each_array_2 = ensure_array_like(userAssignment.expand?.attachments);
                            $$payload7.out += `<div class="flex flex-col gap-2"><!--[-->`;
                            for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
                              let attachment = each_array_2[$$index_1];
                              $$payload7.out += `<a${attr("href", pb.files.getURL(attachment, attachment.file))} class="text-slate-600">${escape_html(attachment.name)}</a>`;
                            }
                            $$payload7.out += `<!--]--> <!---->`;
                            Root$1($$payload7, {
                              children: ($$payload8) => {
                                $$payload8.out += `<!---->`;
                                Trigger($$payload8, {
                                  class: cn(buttonVariants({ size: "sm" }), "mt-2 w-fit"),
                                  children: ($$payload9) => {
                                    $$payload9.out += `<!---->Edit nilai`;
                                  },
                                  $$slots: { default: true }
                                });
                                $$payload8.out += `<!----> <!---->`;
                                Dialog_content($$payload8, {
                                  children: ($$payload9) => {
                                    $$payload9.out += `<form class="flex flex-col gap-3"><!---->`;
                                    Dialog_header($$payload9, {
                                      children: ($$payload10) => {
                                        $$payload10.out += `<!---->`;
                                        Dialog_title($$payload10, {
                                          children: ($$payload11) => {
                                            $$payload11.out += `<!---->Edit nilai`;
                                          },
                                          $$slots: { default: true }
                                        });
                                        $$payload10.out += `<!---->`;
                                      },
                                      $$slots: { default: true }
                                    });
                                    $$payload9.out += `<!----> `;
                                    Input($$payload9, {
                                      type: "number",
                                      name: "grade",
                                      get value() {
                                        return userAssignment.grade;
                                      },
                                      set value($$value) {
                                        userAssignment.grade = $$value;
                                        $$settled = false;
                                      }
                                    });
                                    $$payload9.out += `<!----> <!---->`;
                                    Dialog_footer($$payload9, {
                                      children: ($$payload10) => {
                                        Button($$payload10, {
                                          type: "submit",
                                          children: ($$payload11) => {
                                            $$payload11.out += `<!---->Submit`;
                                          },
                                          $$slots: { default: true }
                                        });
                                      },
                                      $$slots: { default: true }
                                    });
                                    $$payload9.out += `<!----></form>`;
                                  },
                                  $$slots: { default: true }
                                });
                                $$payload8.out += `<!---->`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload7.out += `<!----></div>`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!---->`;
                  }
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            } else {
              $$payload4.out += "<!--[!-->";
              $$payload4.out += `<p class="text-center text-slate-700">Tidak ada data</p>`;
            }
            $$payload4.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DOxlOaEx.js.map
