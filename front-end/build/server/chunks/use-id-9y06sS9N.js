import { a as clsx } from './utils-BUr2r5nE.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-B85MJLTf.js';

var cjs = {};

var inlineStyleParser;
var hasRequiredInlineStyleParser;

function requireInlineStyleParser () {
	if (hasRequiredInlineStyleParser) return inlineStyleParser;
	hasRequiredInlineStyleParser = 1;
	// http://www.w3.org/TR/CSS21/grammar.html
	// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
	var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

	var NEWLINE_REGEX = /\n/g;
	var WHITESPACE_REGEX = /^\s*/;

	// declaration
	var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
	var COLON_REGEX = /^:\s*/;
	var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
	var SEMICOLON_REGEX = /^[;\s]*/;

	// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
	var TRIM_REGEX = /^\s+|\s+$/g;

	// strings
	var NEWLINE = '\n';
	var FORWARD_SLASH = '/';
	var ASTERISK = '*';
	var EMPTY_STRING = '';

	// types
	var TYPE_COMMENT = 'comment';
	var TYPE_DECLARATION = 'declaration';

	/**
	 * @param {String} style
	 * @param {Object} [options]
	 * @return {Object[]}
	 * @throws {TypeError}
	 * @throws {Error}
	 */
	inlineStyleParser = function (style, options) {
	  if (typeof style !== 'string') {
	    throw new TypeError('First argument must be a string');
	  }

	  if (!style) return [];

	  options = options || {};

	  /**
	   * Positional.
	   */
	  var lineno = 1;
	  var column = 1;

	  /**
	   * Update lineno and column based on `str`.
	   *
	   * @param {String} str
	   */
	  function updatePosition(str) {
	    var lines = str.match(NEWLINE_REGEX);
	    if (lines) lineno += lines.length;
	    var i = str.lastIndexOf(NEWLINE);
	    column = ~i ? str.length - i : column + str.length;
	  }

	  /**
	   * Mark position and patch `node.position`.
	   *
	   * @return {Function}
	   */
	  function position() {
	    var start = { line: lineno, column: column };
	    return function (node) {
	      node.position = new Position(start);
	      whitespace();
	      return node;
	    };
	  }

	  /**
	   * Store position information for a node.
	   *
	   * @constructor
	   * @property {Object} start
	   * @property {Object} end
	   * @property {undefined|String} source
	   */
	  function Position(start) {
	    this.start = start;
	    this.end = { line: lineno, column: column };
	    this.source = options.source;
	  }

	  /**
	   * Non-enumerable source string.
	   */
	  Position.prototype.content = style;

	  /**
	   * Error `msg`.
	   *
	   * @param {String} msg
	   * @throws {Error}
	   */
	  function error(msg) {
	    var err = new Error(
	      options.source + ':' + lineno + ':' + column + ': ' + msg
	    );
	    err.reason = msg;
	    err.filename = options.source;
	    err.line = lineno;
	    err.column = column;
	    err.source = style;

	    if (options.silent) ; else {
	      throw err;
	    }
	  }

	  /**
	   * Match `re` and return captures.
	   *
	   * @param {RegExp} re
	   * @return {undefined|Array}
	   */
	  function match(re) {
	    var m = re.exec(style);
	    if (!m) return;
	    var str = m[0];
	    updatePosition(str);
	    style = style.slice(str.length);
	    return m;
	  }

	  /**
	   * Parse whitespace.
	   */
	  function whitespace() {
	    match(WHITESPACE_REGEX);
	  }

	  /**
	   * Parse comments.
	   *
	   * @param {Object[]} [rules]
	   * @return {Object[]}
	   */
	  function comments(rules) {
	    var c;
	    rules = rules || [];
	    while ((c = comment())) {
	      if (c !== false) {
	        rules.push(c);
	      }
	    }
	    return rules;
	  }

	  /**
	   * Parse comment.
	   *
	   * @return {Object}
	   * @throws {Error}
	   */
	  function comment() {
	    var pos = position();
	    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

	    var i = 2;
	    while (
	      EMPTY_STRING != style.charAt(i) &&
	      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
	    ) {
	      ++i;
	    }
	    i += 2;

	    if (EMPTY_STRING === style.charAt(i - 1)) {
	      return error('End of comment missing');
	    }

	    var str = style.slice(2, i - 2);
	    column += 2;
	    updatePosition(str);
	    style = style.slice(i);
	    column += 2;

	    return pos({
	      type: TYPE_COMMENT,
	      comment: str
	    });
	  }

	  /**
	   * Parse declaration.
	   *
	   * @return {Object}
	   * @throws {Error}
	   */
	  function declaration() {
	    var pos = position();

	    // prop
	    var prop = match(PROPERTY_REGEX);
	    if (!prop) return;
	    comment();

	    // :
	    if (!match(COLON_REGEX)) return error("property missing ':'");

	    // val
	    var val = match(VALUE_REGEX);

	    var ret = pos({
	      type: TYPE_DECLARATION,
	      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
	      value: val
	        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
	        : EMPTY_STRING
	    });

	    // ;
	    match(SEMICOLON_REGEX);

	    return ret;
	  }

	  /**
	   * Parse declarations.
	   *
	   * @return {Object[]}
	   */
	  function declarations() {
	    var decls = [];

	    comments(decls);

	    // declarations
	    var decl;
	    while ((decl = declaration())) {
	      if (decl !== false) {
	        decls.push(decl);
	        comments(decls);
	      }
	    }

	    return decls;
	  }

	  whitespace();
	  return declarations();
	};

	/**
	 * Trim `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function trim(str) {
	  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
	}
	return inlineStyleParser;
}

var hasRequiredCjs;

function requireCjs () {
	if (hasRequiredCjs) return cjs;
	hasRequiredCjs = 1;
	var __importDefault = (cjs && cjs.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(cjs, "__esModule", { value: true });
	cjs.default = StyleToObject;
	var inline_style_parser_1 = __importDefault(requireInlineStyleParser());
	/**
	 * Parses inline style to object.
	 *
	 * @param style - Inline style.
	 * @param iterator - Iterator.
	 * @returns - Style object or null.
	 *
	 * @example Parsing inline style to object:
	 *
	 * ```js
	 * import parse from 'style-to-object';
	 * parse('line-height: 42;'); // { 'line-height': '42' }
	 * ```
	 */
	function StyleToObject(style, iterator) {
	    var styleObject = null;
	    if (!style || typeof style !== 'string') {
	        return styleObject;
	    }
	    var declarations = (0, inline_style_parser_1.default)(style);
	    var hasIterator = typeof iterator === 'function';
	    declarations.forEach(function (declaration) {
	        if (declaration.type !== 'declaration') {
	            return;
	        }
	        var property = declaration.property, value = declaration.value;
	        if (hasIterator) {
	            iterator(property, value, declaration);
	        }
	        else if (value) {
	            styleObject = styleObject || {};
	            styleObject[property] = value;
	        }
	    });
	    return styleObject;
	}
	
	return cjs;
}

var cjsExports = requireCjs();
var StyleToObject = /*@__PURE__*/getDefaultExportFromCjs(cjsExports);

// ensure compatibility with rollup umd build
var parse = StyleToObject.default || StyleToObject;

function isFunction(value) {
  return typeof value === "function";
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
const BoxSymbol = Symbol("box");
const isWritableSymbol = Symbol("is-writable");
function isBox(value) {
  return isObject(value) && BoxSymbol in value;
}
function isWritableBox(value) {
  return box.isBox(value) && isWritableSymbol in value;
}
function box(initialValue) {
  let current = initialValue;
  return {
    [BoxSymbol]: true,
    [isWritableSymbol]: true,
    get current() {
      return current;
    },
    set current(v) {
      current = v;
    }
  };
}
function boxWith(getter, setter) {
  const derived = getter();
  if (setter) {
    return {
      [BoxSymbol]: true,
      [isWritableSymbol]: true,
      get current() {
        return derived;
      },
      set current(v) {
        setter(v);
      }
    };
  }
  return {
    [BoxSymbol]: true,
    get current() {
      return getter();
    }
  };
}
function boxFrom(value) {
  if (box.isBox(value)) return value;
  if (isFunction(value)) return box.with(value);
  return box(value);
}
function boxFlatten(boxes) {
  return Object.entries(boxes).reduce(
    (acc, [key, b]) => {
      if (!box.isBox(b)) {
        return Object.assign(acc, { [key]: b });
      }
      if (box.isWritableBox(b)) {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          },
          set(v) {
            b.current = v;
          }
        });
      } else {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          }
        });
      }
      return acc;
    },
    {}
  );
}
function toReadonlyBox(b) {
  if (!box.isWritableBox(b)) return b;
  return {
    [BoxSymbol]: true,
    get current() {
      return b.current;
    }
  };
}
box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;
function composeHandlers(...handlers) {
  return function(e) {
    for (const handler of handlers) {
      if (!handler)
        continue;
      if (e.defaultPrevented)
        return;
      if (typeof handler === "function") {
        handler.call(this, e);
      } else {
        handler.current?.call(this, e);
      }
    }
  };
}
const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char))
    return void 0;
  return char !== char.toLowerCase();
}
function splitByCase(str) {
  const parts = [];
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = STR_SPLITTERS.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function pascalCase(str) {
  if (!str)
    return "";
  return splitByCase(str).map((p) => upperFirst(p)).join("");
}
function camelCase(str) {
  return lowerFirst(pascalCase(str || ""));
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function cssToStyleObj(css) {
  if (!css)
    return {};
  const styleObj = {};
  function iterator(name, value) {
    if (name.startsWith("-moz-") || name.startsWith("-webkit-") || name.startsWith("-ms-") || name.startsWith("-o-")) {
      styleObj[pascalCase(name)] = value;
      return;
    }
    if (name.startsWith("--")) {
      styleObj[name] = value;
      return;
    }
    styleObj[camelCase(name)] = value;
  }
  parse(css, iterator);
  return styleObj;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function createParser(matcher, replacer) {
  const regex = RegExp(matcher, "g");
  return (str) => {
    if (typeof str !== "string") {
      throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
    }
    if (!str.match(regex))
      return str;
    return str.replace(regex, replacer);
  };
}
const camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
  if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) {
    throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
  }
  return Object.keys(styleObj).map((property) => `${camelToKebab(property)}: ${styleObj[property]};`).join("\n");
}
function styleToString(style = {}) {
  return styleToCSS(style).replace("\n", " ");
}
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
styleToString(srOnlyStyles);
function isEventHandler(key) {
  return key.length > 2 && key.startsWith("on") && key[2] === key[2]?.toLowerCase();
}
function mergeProps(...args) {
  const result = { ...args[0] };
  for (let i = 1; i < args.length; i++) {
    const props = args[i];
    for (const key in props) {
      const a = result[key];
      const b = props[key];
      const aIsFunction = typeof a === "function";
      const bIsFunction = typeof b === "function";
      if (aIsFunction && typeof bIsFunction && isEventHandler(key)) {
        const aHandler = a;
        const bHandler = b;
        result[key] = composeHandlers(aHandler, bHandler);
      } else if (aIsFunction && bIsFunction) {
        result[key] = executeCallbacks(a, b);
      } else if (key === "class" && typeof a === "string" && typeof b === "string") {
        result[key] = clsx(a, b);
      } else if (key === "style") {
        const aIsObject = typeof a === "object";
        const bIsObject = typeof b === "object";
        const aIsString = typeof a === "string";
        const bIsString = typeof b === "string";
        if (aIsObject && bIsObject) {
          result[key] = { ...a, ...b };
        } else if (aIsObject && bIsString) {
          const parsedStyle = cssToStyleObj(b);
          result[key] = { ...a, ...parsedStyle };
        } else if (aIsString && bIsObject) {
          const parsedStyle = cssToStyleObj(a);
          result[key] = { ...parsedStyle, ...b };
        } else if (aIsString && bIsString) {
          const parsedStyleA = cssToStyleObj(a);
          const parsedStyleB = cssToStyleObj(b);
          result[key] = { ...parsedStyleA, ...parsedStyleB };
        } else if (aIsObject) {
          result[key] = a;
        } else if (bIsObject) {
          result[key] = b;
        }
      } else {
        result[key] = b !== void 0 ? b : a;
      }
    }
  }
  if (typeof result.style === "object") {
    result.style = styleToString(result.style).replaceAll("\n", " ");
  }
  if (result.hidden !== true) {
    result.hidden = void 0;
  }
  if (result.disabled !== true) {
    result.disabled = void 0;
  }
  return result;
}
function useRefById({
  id,
  ref,
  deps = () => true,
  onRefChange = () => {
  },
  getRootNode = () => typeof document !== "undefined" ? document : void 0
}) {
  (() => deps())();
  (() => getRootNode())();
}
let count = 0;
function useId(prefix = "bits") {
  count++;
  return `${prefix}-${count}`;
}

export { useRefById as a, box as b, composeHandlers as c, srOnlyStyles as d, executeCallbacks as e, cssToStyleObj as f, mergeProps as m, styleToString as s, useId as u };
//# sourceMappingURL=use-id-9y06sS9N.js.map
