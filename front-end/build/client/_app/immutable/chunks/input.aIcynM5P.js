import{C as _,D as n,l as o}from"./runtime.Bp4x7A-a.js";import{l as s}from"./props.DpK8ESsy.js";function b(e,a,l=a){var u=_();s(e,"input",()=>{var r=v(e)?f(e.value):e.value;l(r),u&&r!==(r=a())&&(e.value=r??"")}),n(()=>{var r=a();if(o&&e.defaultValue!==e.value){l(v(e)?f(e.value):e.value);return}v(e)&&r===f(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function v(e){var a=e.type;return a==="number"||a==="range"}function f(e){return e===""?null:+e}function c(e,a,l=a){s(e,"change",()=>{l(e.files)}),n(()=>{e.files=a()})}export{c as a,b};
