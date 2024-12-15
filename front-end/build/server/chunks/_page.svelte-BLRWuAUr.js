import { q as copy_payload, t as assign_payload, p as pop, o as head, l as escape_html, b as push, e as ensure_array_like, d as attr, a as store_get, u as unsubscribe_stores, j as bind_props, s as spread_props, h as spread_attributes, A as store_mutate, v as once, i as slot, n as sanitize_props } from './index2-JzpfwCt6.js';
import { C as Card, a as Card_content } from './card-content-Bd8E3yV0.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_link, e as Breadcrumb_page } from './breadcrumb-page-CwCmZH2-.js';
import { R as Root, D as Dialog_content, a as Dialog_header, b as Dialog_footer, T as Trigger, c as Dialog_title } from './index4-BkA9mXpK.js';
import { R as Root$2, T as Trigger$2, D as Dropdown_menu_content, G as Group, a as Dropdown_menu_group_heading, b as Dropdown_menu_separator, c as Dropdown_menu_item } from './index8-B9p_xVmz.js';
import { F as Form_field, C as Control, a as Form_field_errors, b as Form_label } from './index5-B5v-itD7.js';
import { b as buttonVariants, B as Button } from './button-Duyfcegt.js';
import { I as Icon } from './Icon-BFX92tDv.js';
import { B as Badge } from './badge-DfsxAKKY.js';
import { I as Input } from './input-C35Efneq.js';
import { u as useId, b as box, m as mergeProps, a as useRefById, s as styleToString, d as srOnlyStyles } from './use-id-9y06sS9N.js';
import { l as getAriaRequired, e as getDataDisabled, m as getAriaChecked } from './attrs-CL1THhfQ.js';
import { u as useRovingFocus } from './use-roving-focus.svelte-B8edc4eM.js';
import { c as createContext, n as noop, S as SPACE } from './scroll-lock-ByQIsybU.js';
import { I as Icon$1 } from './Icon2-CRb0pbIs.js';
import { R as Root$1, S as Sheet_content, T as Trigger$1, a as Sheet_header, b as Sheet_title } from './index3-E3YZIM--.js';
import { g as goto, a as invalidateAll } from './client-Ck0mmi3f.js';
import { s as superForm } from './formData-yk_uxOf7.js';
import './index-Ddp2AB5f.js';
import './index-BKM0wM1Z.js';
import { z as zodClient } from './zod-CPyhwoWk.js';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-jOAoOhX0.js';
import './pb-Bvvw3hdM.js';
import { b as addQuestionSchema } from './quizzes-P9z7oEAx.js';
import { D as Dialog_description } from './dialog-description-BEmtFmnm.js';
import './x-C0GKGse2.js';
import './mounted-DTTuSVjU.js';
import './index6-DsoZqCdM.js';
import './index-BFfgIoD-.js';
import './index-server-DhylklOr.js';
import './functions-x3jG1pm5.js';
import './_commonjsHelpers-B85MJLTf.js';
import './exports-CTha0ECg.js';
import './stores-BM6n11zq.js';
import './stringify-BgjEYUR1.js';
import 'zod';
import 'pocketbase';

const RADIO_GROUP_ROOT_ATTR = "data-radio-group-root";
const RADIO_GROUP_ITEM_ATTR = "data-radio-group-item";
class RadioGroupRootState {
  #id;
  #ref;
  disabled;
  required;
  loop;
  orientation;
  name;
  value;
  rovingFocusGroup;
  #hasValue = once(() => this.value.current !== "");
  get hasValue() {
    return this.#hasValue();
  }
  constructor(props) {
    this.#id = props.id;
    this.disabled = props.disabled;
    this.required = props.required;
    this.loop = props.loop;
    this.orientation = props.orientation;
    this.name = props.name;
    this.value = props.value;
    this.#ref = props.ref;
    this.rovingFocusGroup = useRovingFocus({
      rootNodeId: this.#id,
      candidateAttr: RADIO_GROUP_ITEM_ATTR,
      loop: this.loop,
      orientation: this.orientation
    });
    useRefById({ id: this.#id, ref: this.#ref });
  }
  isChecked(value) {
    return this.value.current === value;
  }
  setValue(value) {
    this.value.current = value;
  }
  #props = once(() => ({
    id: this.#id.current,
    role: "radiogroup",
    "aria-required": getAriaRequired(this.required.current),
    "data-disabled": getDataDisabled(this.disabled.current),
    "data-orientation": this.orientation.current,
    [RADIO_GROUP_ROOT_ATTR]: ""
  }));
  get props() {
    return this.#props();
  }
}
class RadioGroupItemState {
  #id;
  #ref;
  #root;
  #disabled;
  #value;
  #checked = once(() => this.#root.value.current === this.#value.current);
  get checked() {
    return this.#checked();
  }
  #isDisabled = once(() => this.#disabled.current || this.#root.disabled.current);
  #isChecked = once(() => this.#root.isChecked(this.#value.current));
  constructor(props, root) {
    this.#disabled = props.disabled;
    this.#value = props.value;
    this.#root = root;
    this.#id = props.id;
    this.#ref = props.ref;
    useRefById({ id: this.#id, ref: this.#ref });
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
    this.onfocus = this.onfocus.bind(this);
  }
  onclick(e) {
    if (this.#disabled.current) return;
    this.#root.setValue(this.#value.current);
  }
  onfocus(_) {
    if (!this.#root.hasValue) return;
    this.#root.setValue(this.#value.current);
  }
  onkeydown(e) {
    if (this.#isDisabled()) return;
    if (e.key === SPACE) {
      e.preventDefault();
      this.#root.setValue(this.#value.current);
      return;
    }
    this.#root.rovingFocusGroup.handleKeydown(this.#ref.current, e, true);
  }
  #tabIndex = 0;
  #snippetProps = once(() => ({ checked: this.#isChecked() }));
  get snippetProps() {
    return this.#snippetProps();
  }
  #props = once(() => ({
    id: this.#id.current,
    disabled: this.#isDisabled() ? true : void 0,
    "data-value": this.#value.current,
    "data-orientation": this.#root.orientation.current,
    "data-disabled": getDataDisabled(this.#isDisabled()),
    "data-state": this.#isChecked() ? "checked" : "unchecked",
    "aria-checked": getAriaChecked(this.#isChecked()),
    [RADIO_GROUP_ITEM_ATTR]: "",
    type: "button",
    role: "radio",
    tabindex: this.#tabIndex,
    //
    onkeydown: this.onkeydown,
    onfocus: this.onfocus,
    onclick: this.onclick
  }));
  get props() {
    return this.#props();
  }
}
class RadioGroupInputState {
  #root;
  #shouldRender = once(() => this.#root.name.current !== void 0);
  get shouldRender() {
    return this.#shouldRender();
  }
  #props = once(() => ({
    name: this.#root.name.current,
    value: this.#root.value.current,
    required: this.#root.required.current,
    disabled: this.#root.disabled.current,
    "aria-hidden": "true",
    hidden: true,
    style: styleToString(srOnlyStyles),
    tabIndex: -1
  }));
  get props() {
    return this.#props();
  }
  constructor(root) {
    this.#root = root;
  }
}
const [
  setRadioGroupRootContext,
  getRadioGroupRootContext
] = createContext("RadioGroup.Root");
function useRadioGroupRoot(props) {
  return setRadioGroupRootContext(new RadioGroupRootState(props));
}
function useRadioGroupItem(props) {
  return new RadioGroupItemState(props, getRadioGroupRootContext());
}
function useRadioGroupInput() {
  return new RadioGroupInputState(getRadioGroupRootContext());
}
function Radio_group_input($$payload, $$props) {
  push();
  const inputState = useRadioGroupInput();
  if (inputState.shouldRender) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<input${spread_attributes({ ...inputState.props })}>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Radio_group$1($$payload, $$props) {
  push();
  let {
    disabled = false,
    children,
    child,
    value = "",
    ref = null,
    orientation = "vertical",
    loop = true,
    name = void 0,
    required = false,
    id = useId(),
    onValueChange = noop,
    controlledValue = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const rootState = useRadioGroupRoot({
    orientation: box.with(() => orientation),
    disabled: box.with(() => disabled),
    loop: box.with(() => loop),
    name: box.with(() => name),
    required: box.with(() => required),
    id: box.with(() => id),
    value: box.with(() => value, (v) => {
      if (v === value) return;
      if (controlledValue) {
        onValueChange(v);
      } else {
        value = v;
        onValueChange?.(v);
      }
    }),
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
  $$payload.out += `<!--]--> `;
  Radio_group_input($$payload);
  $$payload.out += `<!---->`;
  bind_props($$props, { value, ref });
  pop();
}
function Radio_group_item$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    children,
    child,
    value,
    disabled = false,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const itemState = useRadioGroupItem({
    value: box.with(() => value),
    disabled: box.with(() => disabled ?? false),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, itemState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps, ...itemState.snippetProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload, itemState.snippetProps);
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Circle($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ]
  ];
  Icon$1($$payload, spread_props([
    { name: "circle" },
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
function Radio_group($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    value = "",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Radio_group$1($$payload2, spread_props([
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        },
        class: cn("grid gap-2", className)
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
  bind_props($$props, { ref, value });
  pop();
}
function Radio_group_item($$payload, $$props) {
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
    {
      let children = function($$payload3, { checked }) {
        $$payload3.out += `<div class="flex items-center justify-center">`;
        if (checked) {
          $$payload3.out += "<!--[-->";
          Circle($$payload3, { class: "size-2.5 fill-current text-current" });
        } else {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]--></div>`;
      };
      Radio_group_item$1($$payload2, spread_props([
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          class: cn("border-primary text-primary ring-offset-background focus-visible:ring-ring aspect-square size-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)
        },
        restProps,
        { children, $$slots: { default: true } }
      ]));
    }
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
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const { data, form: formAction } = $$props;
  let currentQuestionIdx = 0;
  let correctAnswer = "";
  const timer = {
    hours: Math.floor(data.quiz.time / 3600),
    minutes: Math.floor(data.quiz.time % 3600 / 60),
    seconds: data.quiz.time % 60
  };
  const addQuestionForm = superForm(data.addQuestionForm, { validators: zodClient(addQuestionSchema) });
  const { form: questionFormData, enhance } = addQuestionForm;
  async function deleteQuiz() {
    try {
      const response = await fetch("/dashboard/teachers/quizzes/" + data.quiz.id, { method: "delete" });
      if (response.status > 399) throw new Error("");
      toast.success("Alert", {
        description: "Tugas berhasil dihapus",
        dismissable: true
      });
      goto("/dashboard/teachers/classes/" + data.quiz.classroom);
    } catch (e) {
      toast.error("Alert", {
        description: "Anda tidak memiliki akses untuk menghapus",
        dismissable: true
      });
    }
  }
  async function deleteQuestion() {
    const id = data.quiz.expand?.questions_via_quiz[currentQuestionIdx].id;
    try {
      const response = await fetch("/dashboard/teachers/quizzes/" + data.quiz.id + "/questions", {
        method: "delete",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" }
      });
      if (response.status > 399) throw new Error("");
      toast.success("Alert", {
        description: "Pertanyaan berhasil dihapus",
        dismissable: true
      });
      await invalidateAll();
    } catch (e) {
      toast.error("Alert", {
        description: "Pertanyaan gagal dihapus",
        dismissable: true
      });
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Eduplay - Kuis ${escape_html(data.quiz.name)}</title>`;
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
                  href: "/dashboard/teachers/classes/" + data.quiz.expand?.classroom.id,
                  class: "capitalize",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->${escape_html(data.quiz.expand?.classroom.name)}`;
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
                  href: "/dashboard/teachers/quizzes",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Kuis`;
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
                    $$payload6.out += `<!---->${escape_html(data.quiz.name)}`;
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
    $$payload2.out += `<!----> <header class="relative z-0 col-span-1 overflow-hidden rounded-xl bg-primary px-6 py-4 shadow shadow-slate-900/20 xl:col-span-2"><div class="flex flex-wrap items-center justify-between gap-4"><h1 class="text-xl font-bold capitalize text-slate-100 sm:text-2xl">${escape_html(data.quiz.name)}</h1> <!---->`;
    Root($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Root$2($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Trigger$2($$payload4, {
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
                            $$payload8.out += `<!----> <a${attr("href", "/dashboard/teachers/quizzes/" + data.quiz.id + "/edit")} class="text-sm">Edit kuis</a>`;
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
                                $$payload9.out += `<!---->Hapus kuis`;
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
                    $$payload6.out += `<!---->Apakah yakin ingin menghapus kuis ini?`;
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
                  onclick: deleteQuiz,
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
      class: "xl:col-span-2",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Card_content($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Deskripsi kuis</h2> <p class="mb-3 text-sm text-slate-700">${escape_html(data.quiz.description)}</p> <div class="flex gap-3">`;
            Badge($$payload4, {
              variant: "outline",
              children: ($$payload5) => {
                $$payload5.out += `<!---->${escape_html(`${timer.hours} Jam, ${timer.minutes} Menit, ${timer.seconds} Detik`)}`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            if (data.quiz.status === "open") {
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
            $$payload4.out += `<!--]--></div>`;
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
            $$payload4.out += `<h2 class="mb-4 text-lg font-bold text-primary sm:text-xl">Nilai kuis</h2> `;
            if (data.quizGrades.length > 0) {
              $$payload4.out += "<!--[-->";
              const each_array = ensure_array_like(data.quizGrades);
              $$payload4.out += `<div class="flex flex-col gap-3"><!--[-->`;
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let quizGrade = each_array[$$index];
                $$payload4.out += `<div class="flex items-center justify-between gap-3"><span>${escape_html(quizGrade.user_name)}</span> `;
                Badge($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(parseFloat(quizGrade.grade).toFixed(2))}/100`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----></div>`;
              }
              $$payload4.out += `<!--]--></div>`;
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
    $$payload2.out += `<!----> <!---->`;
    Card($$payload2, {
      class: "xl:col-span-2",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Card_content($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<div class="mb-4 flex items-center justify-between gap-3"><h2 class="text-lg font-bold text-primary sm:text-xl">Daftar pertanyaan</h2> <!---->`;
            Root($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Trigger($$payload5, {
                  class: cn(buttonVariants({ variant: "default", size: "sm" })),
                  children: ($$payload6) => {
                    Icon($$payload6, { icon: "mdi:plus" });
                    $$payload6.out += `<!----> <span class="hidden text-sm md:block">Tambah pertanyaan</span>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Dialog_content($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<form action="?/add-question" method="post" class="flex flex-col gap-3"><!---->`;
                    Dialog_header($$payload6, {
                      children: ($$payload7) => {
                        $$payload7.out += `<!---->`;
                        Dialog_title($$payload7, {
                          children: ($$payload8) => {
                            $$payload8.out += `<!---->Tambah pertanyaan`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload7.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!----> <!---->`;
                    Form_field($$payload6, {
                      form: addQuestionForm,
                      name: "order",
                      children: ($$payload7) => {
                        $$payload7.out += `<!---->`;
                        {
                          let children = function($$payload8, { props }) {
                            $$payload8.out += `<!---->`;
                            Form_label($$payload8, {
                              children: ($$payload9) => {
                                $$payload9.out += `<!---->Nomor`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload8.out += `<!----> `;
                            Input($$payload8, spread_props([
                              props,
                              {
                                class: "border-slate-300",
                                get value() {
                                  return store_get($$store_subs ??= {}, "$questionFormData", questionFormData).order;
                                },
                                set value($$value) {
                                  store_mutate($$store_subs ??= {}, "$questionFormData", questionFormData, store_get($$store_subs ??= {}, "$questionFormData", questionFormData).order = $$value);
                                  $$settled = false;
                                },
                                placeholder: "Masukkan nomor",
                                type: "number",
                                min: 1
                              }
                            ]));
                            $$payload8.out += `<!---->`;
                          };
                          Control($$payload7, { children, $$slots: { default: true } });
                        }
                        $$payload7.out += `<!----> <!---->`;
                        Form_field_errors($$payload7, { class: "[&_*]:text-[0.8rem]" });
                        $$payload7.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!---->  <!---->`;
                    Form_field($$payload6, {
                      form: addQuestionForm,
                      name: "name",
                      children: ($$payload7) => {
                        $$payload7.out += `<!---->`;
                        {
                          let children = function($$payload8, { props }) {
                            $$payload8.out += `<!---->`;
                            Form_label($$payload8, {
                              children: ($$payload9) => {
                                $$payload9.out += `<!---->Pertanyaan`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload8.out += `<!----> `;
                            Input($$payload8, spread_props([
                              props,
                              {
                                class: "border-slate-300",
                                get value() {
                                  return store_get($$store_subs ??= {}, "$questionFormData", questionFormData).name;
                                },
                                set value($$value) {
                                  store_mutate($$store_subs ??= {}, "$questionFormData", questionFormData, store_get($$store_subs ??= {}, "$questionFormData", questionFormData).name = $$value);
                                  $$settled = false;
                                },
                                placeholder: "Masukkan pertanyaan"
                              }
                            ]));
                            $$payload8.out += `<!---->`;
                          };
                          Control($$payload7, { children, $$slots: { default: true } });
                        }
                        $$payload7.out += `<!----> <!---->`;
                        Form_field_errors($$payload7, { class: "[&_*]:text-[0.8rem]" });
                        $$payload7.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!----> <input type="hidden"${attr("value", store_get($$store_subs ??= {}, "$questionFormData", questionFormData).quiz)} name="quiz"> <!---->`;
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
            $$payload4.out += `<!----></div> `;
            if (data.quiz.expand?.questions_via_quiz) {
              $$payload4.out += "<!--[-->";
              const each_array_1 = ensure_array_like(data.quiz.expand?.questions_via_quiz);
              $$payload4.out += `<div class="grid grid-cols-5 gap-3 md:grid-cols-10"><!--[-->`;
              for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
                let question = each_array_1[i];
                if (currentQuestionIdx === i) {
                  $$payload4.out += "<!--[-->";
                  Button($$payload4, {
                    variant: "default",
                    onclick: () => currentQuestionIdx = i,
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->${escape_html(question.order)}`;
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$payload4.out += "<!--[!-->";
                  Button($$payload4, {
                    variant: "outline",
                    onclick: () => currentQuestionIdx = i,
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->${escape_html(question.order)}`;
                    },
                    $$slots: { default: true }
                  });
                }
                $$payload4.out += `<!--]-->`;
              }
              $$payload4.out += `<!--]--></div>`;
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
    $$payload2.out += `<!----> `;
    if (data.quiz.expand?.questions_via_quiz) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<!---->`;
      Root$1($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card($$payload3, {
            class: "xl:col-span-2",
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Card_content($$payload4, {
                children: ($$payload5) => {
                  const each_array_2 = ensure_array_like(data.quiz.expand?.questions_via_quiz[currentQuestionIdx].expand?.answers_via_question);
                  $$payload5.out += `<div class="mb-4 flex items-center justify-between gap-3"><h2 class="text-lg font-bold text-primary sm:text-xl">Pertanyaan ke-${escape_html(currentQuestionIdx + 1)}</h2> <div class="flex items-center gap-3"><!---->`;
                  Root($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      Trigger($$payload6, {
                        class: cn(buttonVariants({ variant: "destructive" })),
                        children: ($$payload7) => {
                          Icon($$payload7, { icon: "mdi:trash-can-outline" });
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> <!---->`;
                      Dialog_content($$payload6, {
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->`;
                          Dialog_header($$payload7, {
                            children: ($$payload8) => {
                              $$payload8.out += `<!---->`;
                              Dialog_title($$payload8, {
                                children: ($$payload9) => {
                                  $$payload9.out += `<!---->Alert`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!----> <!---->`;
                              Dialog_description($$payload8, {
                                children: ($$payload9) => {
                                  $$payload9.out += `<!---->Yakin ingin menghapus pertanyaan ini?`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!---->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!----> <!---->`;
                          Dialog_footer($$payload7, {
                            children: ($$payload8) => {
                              Button($$payload8, {
                                variant: "destructive",
                                onclick: () => deleteQuestion(),
                                children: ($$payload9) => {
                                  $$payload9.out += `<!---->Iya`;
                                },
                                $$slots: { default: true }
                              });
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
                  $$payload5.out += `<!----> <!---->`;
                  Trigger$1($$payload5, {
                    class: cn(buttonVariants({ variant: "outline" })),
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Edit`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----></div></div> <p class="mb-6 text-slate-700">${escape_html(data.quiz.expand?.questions_via_quiz[currentQuestionIdx].name)}</p> <div class="mb-4 flex flex-col gap-4"><!--[-->`;
                  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                    let answer = each_array_2[$$index_2];
                    $$payload5.out += `<div${attr("class", cn("w-full rounded-lg border border-slate-200 px-4 py-2", answer.isCorrect ? "text-primary" : "text-slate-700"))}>${escape_html(answer.text)}</div>`;
                  }
                  $$payload5.out += `<!--]--></div> <div class="flex items-center justify-end gap-3">`;
                  if (currentQuestionIdx > 0) {
                    $$payload5.out += "<!--[-->";
                    Button($$payload5, {
                      variant: "outline",
                      onclick: () => currentQuestionIdx--,
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Sebelumnya`;
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$payload5.out += "<!--[!-->";
                  }
                  $$payload5.out += `<!--]--> `;
                  if (currentQuestionIdx < data.quiz.expand?.questions_via_quiz.length - 1) {
                    $$payload5.out += "<!--[-->";
                    Button($$payload5, {
                      variant: "outline",
                      onclick: () => currentQuestionIdx++,
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Selanjutnya`;
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$payload5.out += "<!--[!-->";
                  }
                  $$payload5.out += `<!--]--></div>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Sheet_content($$payload3, {
            side: "right",
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Sheet_header($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Sheet_title($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Edit pertanyaan`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <form class="mt-4 flex flex-col gap-4">`;
              Input($$payload4, {
                get value() {
                  return data.quiz.expand.questions_via_quiz[currentQuestionIdx].order;
                },
                set value($$value) {
                  data.quiz.expand.questions_via_quiz[currentQuestionIdx].order = $$value;
                  $$settled = false;
                },
                type: "number",
                placeholder: "Nomor"
              });
              $$payload4.out += `<!----> `;
              Input($$payload4, {
                get value() {
                  return data.quiz.expand.questions_via_quiz[currentQuestionIdx].name;
                },
                set value($$value) {
                  data.quiz.expand.questions_via_quiz[currentQuestionIdx].name = $$value;
                  $$settled = false;
                },
                placeholder: "Pertanyaan"
              });
              $$payload4.out += `<!----> <!---->`;
              Radio_group($$payload4, {
                get value() {
                  return correctAnswer;
                },
                set value($$value) {
                  correctAnswer = $$value;
                  $$settled = false;
                },
                children: ($$payload5) => {
                  const each_array_3 = ensure_array_like(data.quiz.expand?.questions_via_quiz[currentQuestionIdx].expand?.answers_via_question);
                  $$payload5.out += `<!--[-->`;
                  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
                    let answer = each_array_3[$$index_3];
                    $$payload5.out += `<div class="grid grid-cols-[auto_1fr] items-center gap-4"><!---->`;
                    Radio_group_item($$payload5, { value: answer.id });
                    $$payload5.out += `<!----> `;
                    Input($$payload5, {
                      get value() {
                        return answer.text;
                      },
                      set value($$value) {
                        answer.text = $$value;
                        $$settled = false;
                      }
                    });
                    $$payload5.out += `<!----></div>`;
                  }
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Button($$payload4, {
                type: "submit",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Submit`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></form>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BLRWuAUr.js.map
