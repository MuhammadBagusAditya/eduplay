import { b as push, q as copy_payload, t as assign_payload, j as bind_props, p as pop, s as spread_props, h as spread_attributes, w as setContext, v as once, e as ensure_array_like, l as escape_html, g as getContext } from './index2-JzpfwCt6.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { b as box, u as useId$1, m as mergeProps, a as useRefById } from './use-id-9y06sS9N.js';
import './button-Duyfcegt.js';
import { g as get } from './index6-DsoZqCdM.js';

function fromStore(store) {
  if ("set" in store) {
    return {
      get current() {
        return get(store);
      },
      set current(v) {
        store.set(v);
      }
    };
  }
  return {
    get current() {
      return get(store);
    }
  };
}
const ROOT_ATTR = "data-label-root";
class LabelRootState {
  #id;
  #ref;
  constructor(props) {
    this.#id = props.id;
    this.#ref = props.ref;
    this.onmousedown = this.onmousedown.bind(this);
    useRefById({ id: this.#id, ref: this.#ref });
  }
  onmousedown(e) {
    if (e.detail > 1) e.preventDefault();
  }
  #props = once(() => ({
    [ROOT_ATTR]: "",
    onmousedown: this.onmousedown
  }));
  get props() {
    return this.#props();
  }
}
function setLabelRootState(props) {
  return new LabelRootState(props);
}
function Label$2($$payload, $$props) {
  push();
  let {
    children,
    child,
    id = useId$1(),
    ref = null,
    for: forProp,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const rootState = setLabelRootState({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, rootState.props, { for: forProp });
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<label${spread_attributes({ ...mergedProps, for: forProp })}>`;
    children?.($$payload);
    $$payload.out += `<!----></label>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function extractErrorArray(errors) {
  if (Array.isArray(errors))
    return errors;
  if (typeof errors === "object" && "_errors" in errors) {
    if (errors._errors !== void 0)
      return errors._errors;
  }
  return [];
}
function getValueAtPath(path, obj) {
  const keys = path.split(/[[\].]/).filter(Boolean);
  let value = obj;
  for (const key of keys) {
    if (typeof value !== "object" || value === null) {
      return void 0;
    }
    value = value[key];
  }
  return value;
}
function getAriaDescribedBy({ fieldErrorsId = void 0, descriptionId = void 0, errors }) {
  let describedBy = "";
  if (descriptionId) {
    describedBy += `${descriptionId} `;
  }
  if (errors.length && fieldErrorsId) {
    describedBy += fieldErrorsId;
  }
  return describedBy ? describedBy.trim() : void 0;
}
function getAriaRequired(constraints) {
  if (!("required" in constraints))
    return void 0;
  return constraints.required ? "true" : void 0;
}
function getAriaInvalid(errors) {
  return errors && errors.length ? "true" : void 0;
}
function getDataFsError(errors) {
  return errors && errors.length ? "" : void 0;
}
class FormFieldState {
  #form;
  #name;
  #formErrors;
  #formConstraints;
  #formTainted;
  #formData;
  #_name = once(() => this.#name.current);
  get name() {
    return this.#_name();
  }
  #errors = once(() => extractErrorArray(getValueAtPath(this.#name.current, this.#formErrors.current)));
  get errors() {
    return this.#errors();
  }
  #constraints = once(() => getValueAtPath(this.#name.current, this.#formConstraints.current) ?? {});
  get constraints() {
    return this.#constraints();
  }
  #tainted = once(() => this.#formTainted.current ? getValueAtPath(this.#name.current, this.#formTainted.current) === true : false);
  get tainted() {
    return this.#tainted();
  }
  errorNode = null;
  descriptionNode = null;
  constructor(props) {
    this.#form = props.form;
    this.#name = props.name;
    this.#formErrors = fromStore(props.form.current.errors);
    this.#formConstraints = fromStore(props.form.current.constraints);
    this.#formTainted = fromStore(props.form.current.tainted);
    this.#formData = fromStore(props.form.current.form);
  }
  #snippetProps = once(() => ({
    value: this.#formData.current[this.#name.current],
    errors: this.errors,
    tainted: this.tainted,
    constraints: (
      // @ts-expect-error - this type is wonky
      this.#formConstraints.current[
        // eslint-disable-next-line ts/no-explicit-any
        this.#name.current
      ] ?? {}
    )
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
}
class FieldErrorsState {
  #ref;
  #id;
  field;
  #errorAttr = once(() => getDataFsError(this.field.errors));
  constructor(props, field) {
    this.#ref = props.ref;
    this.#id = props.id;
    this.field = field;
    useRefById({
      id: this.#id,
      ref: this.#ref,
      onRefChange: (node) => {
        this.field.errorNode = node;
      }
    });
  }
  #snippetProps = once(() => ({
    errors: this.field.errors,
    errorProps: this.errorProps
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
  #fieldErrorsProps = once(() => ({
    id: this.#id.current,
    "data-fs-error": this.#errorAttr(),
    "data-fs-field-errors": "",
    "aria-live": "assertive"
  }));
  get fieldErrorsProps() {
    return this.#fieldErrorsProps();
  }
  #errorProps = once(() => ({
    "data-fs-field-error": "",
    "data-fs-error": this.#errorAttr()
  }));
  get errorProps() {
    return this.#errorProps();
  }
}
class DescriptionState {
  #ref;
  #id;
  field;
  constructor(props, field) {
    this.#ref = props.ref;
    this.#id = props.id;
    this.field = field;
    useRefById({
      id: this.#id,
      ref: this.#ref,
      onRefChange: (node) => {
        this.field.descriptionNode = node;
      }
    });
  }
  #props = once(() => ({
    id: this.#id.current,
    "data-fs-error": getDataFsError(this.field.errors),
    "data-fs-description": ""
  }));
  get props() {
    return this.#props();
  }
}
class ControlState {
  id;
  field;
  constructor(props, field) {
    this.id = props.id;
    this.field = field;
  }
  #props = once(() => ({
    id: this.id.current,
    name: this.field.name,
    "data-fs-error": getDataFsError(this.field.errors),
    "aria-describedby": getAriaDescribedBy({
      fieldErrorsId: this.field.errorNode?.id,
      descriptionId: this.field.descriptionNode?.id,
      errors: this.field.errors
    }),
    "aria-invalid": getAriaInvalid(this.field.errors),
    "aria-required": getAriaRequired(this.field.constraints),
    "data-fs-control": ""
  }));
  get props() {
    return this.#props();
  }
}
class LabelState {
  #ref;
  #id;
  control;
  constructor(props, control) {
    this.#ref = props.ref;
    this.#id = props.id;
    this.control = control;
    useRefById({ id: this.#id, ref: this.#ref });
  }
  #props = once(() => ({
    id: this.#id.current,
    "data-fs-label": "",
    "data-fs-error": getDataFsError(this.control.field.errors),
    for: this.control.id.current
  }));
  get props() {
    return this.#props();
  }
}
const FORM_FIELD_CTX = Symbol.for("formsnap.form-field");
const FORM_CONTROL_CTX = Symbol.for("formsnap.form-control");
function useFormField(props) {
  return setContext(FORM_FIELD_CTX, new FormFieldState(props));
}
function getFormField() {
  return getContext(FORM_FIELD_CTX);
}
function useFieldErrors(props) {
  return new FieldErrorsState(props, getFormField());
}
function useDescription(props) {
  return new DescriptionState(props, getFormField());
}
function useControl(props) {
  return setContext(FORM_CONTROL_CTX, new ControlState(props, getFormField()));
}
function getFormControl() {
  return getContext(FORM_CONTROL_CTX);
}
function useLabel(props) {
  return new LabelState(props, getFormControl());
}
let count = 0;
function useId(prefix = "formsnap") {
  count++;
  return `${prefix}-${count}`;
}
function Field($$payload, $$props) {
  push();
  let { form, name, children } = $$props;
  const fieldState = useFormField({
    form: box.with(() => form),
    name: box.with(() => name)
  });
  children?.($$payload, fieldState.snippetProps);
  $$payload.out += `<!---->`;
  pop();
}
function Control$1($$payload, $$props) {
  push();
  let { id = useId(), children } = $$props;
  const controlState = useControl({ id: box.with(() => id) });
  children?.($$payload, { props: controlState.props });
  $$payload.out += `<!---->`;
  pop();
}
function Label$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    children,
    child,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const labelState = useLabel({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, labelState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<label${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload);
    $$payload.out += `<!----></label>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Field_errors($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    children,
    child,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const fieldErrorsState = useFieldErrors({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, fieldErrorsState.fieldErrorsProps);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, {
      props: mergedProps,
      ...fieldErrorsState.snippetProps
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps })}>`;
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload, fieldErrorsState.snippetProps);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      const each_array = ensure_array_like(fieldErrorsState.field.errors);
      $$payload.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let error = each_array[$$index];
        $$payload.out += `<div${spread_attributes({ ...fieldErrorsState.errorProps })}>${escape_html(error)}</div>`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Label($$payload, $$props) {
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
    Label$2($$payload2, spread_props([
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        class: cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)
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
function Form_label($$payload, $$props) {
  push();
  let {
    ref = null,
    children,
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
      let child = function($$payload3, { props }) {
        Label($$payload3, spread_props([
          props,
          {
            class: cn("data-[fs-error]:text-destructive", className),
            children: ($$payload4) => {
              children?.($$payload4);
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          }
        ]));
      };
      Label$1($$payload2, spread_props([
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          child,
          $$slots: { child: true }
        }
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
function Form_field_errors($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    errorClasses,
    children: childrenProp,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    {
      let children = function($$payload3, { errors, errorProps }) {
        if (childrenProp) {
          $$payload3.out += "<!--[-->";
          childrenProp($$payload3, { errors, errorProps });
          $$payload3.out += `<!---->`;
        } else {
          $$payload3.out += "<!--[!-->";
          const each_array = ensure_array_like(errors);
          $$payload3.out += `<!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let error = each_array[$$index];
            $$payload3.out += `<div${spread_attributes({ ...errorProps, class: cn(errorClasses) })}>${escape_html(error)}</div>`;
          }
          $$payload3.out += `<!--]-->`;
        }
        $$payload3.out += `<!--]-->`;
      };
      Field_errors($$payload2, spread_props([
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          class: cn("text-destructive text-sm font-medium", className)
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
function Form_field($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    form,
    name,
    children: childrenProp,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<!---->`;
  {
    let children = function($$payload2, { constraints, errors, tainted, value }) {
      $$payload2.out += `<div${spread_attributes({
        class: cn("space-y-2", className),
        ...restProps
      })}>`;
      childrenProp?.($$payload2, { constraints, errors, tainted, value });
      $$payload2.out += `<!----></div>`;
    };
    Field($$payload, {
      form,
      name,
      children,
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!---->`;
  bind_props($$props, { ref });
  pop();
}
const Control = Control$1;

export { Control as C, Form_field as F, Label as L, Form_field_errors as a, Form_label as b, useId as c, useDescription as u };
//# sourceMappingURL=index5-B5v-itD7.js.map
