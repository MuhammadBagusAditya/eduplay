/** @type {Record<string, string>} */
const escaped = {
	'<': '\\u003C',
	'\\': '\\\\',
	'\b': '\\b',
	'\f': '\\f',
	'\n': '\\n',
	'\r': '\\r',
	'\t': '\\t',
	'\u2028': '\\u2028',
	'\u2029': '\\u2029'
};

class DevalueError extends Error {
	/**
	 * @param {string} message
	 * @param {string[]} keys
	 */
	constructor(message, keys) {
		super(message);
		this.name = 'DevalueError';
		this.path = keys.join('');
	}
}

/** @param {any} thing */
function is_primitive(thing) {
	return Object(thing) !== thing;
}

const object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
	Object.prototype
)
	.sort()
	.join('\0');

/** @param {any} thing */
function is_plain_object(thing) {
	const proto = Object.getPrototypeOf(thing);

	return (
		proto === Object.prototype ||
		proto === null ||
		Object.getOwnPropertyNames(proto).sort().join('\0') === object_proto_names
	);
}

/** @param {any} thing */
function get_type(thing) {
	return Object.prototype.toString.call(thing).slice(8, -1);
}

/** @param {string} char */
function get_escaped_char(char) {
	switch (char) {
		case '"':
			return '\\"';
		case '<':
			return '\\u003C';
		case '\\':
			return '\\\\';
		case '\n':
			return '\\n';
		case '\r':
			return '\\r';
		case '\t':
			return '\\t';
		case '\b':
			return '\\b';
		case '\f':
			return '\\f';
		case '\u2028':
			return '\\u2028';
		case '\u2029':
			return '\\u2029';
		default:
			return char < ' '
				? `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`
				: '';
	}
}

/** @param {string} str */
function stringify_string(str) {
	let result = '';
	let last_pos = 0;
	const len = str.length;

	for (let i = 0; i < len; i += 1) {
		const char = str[i];
		const replacement = get_escaped_char(char);
		if (replacement) {
			result += str.slice(last_pos, i) + replacement;
			last_pos = i + 1;
		}
	}

	return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}

/** @param {Record<string | symbol, any>} object */
function enumerable_symbols(object) {
	return Object.getOwnPropertySymbols(object).filter(
		(symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
	);
}

const is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;

/** @param {string} key */
function stringify_key(key) {
	return is_identifier.test(key) ? '.' + key : '[' + JSON.stringify(key) + ']';
}

/**
 * Base64 Encodes an arraybuffer
 * @param {ArrayBuffer} arraybuffer
 * @returns {string}
 */
function encode64(arraybuffer) {
  const dv = new DataView(arraybuffer);
  let binaryString = "";

  for (let i = 0; i < arraybuffer.byteLength; i++) {
    binaryString += String.fromCharCode(dv.getUint8(i));
  }

  return binaryToAscii(binaryString);
}

/**
 * Decodes a base64 string into an arraybuffer
 * @param {string} string
 * @returns {ArrayBuffer}
 */
function decode64(string) {
  const binaryString = asciiToBinary(string);
  const arraybuffer = new ArrayBuffer(binaryString.length);
  const dv = new DataView(arraybuffer);

  for (let i = 0; i < arraybuffer.byteLength; i++) {
    dv.setUint8(i, binaryString.charCodeAt(i));
  }

  return arraybuffer;
}

const KEY_STRING =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

/**
 * Substitute for atob since it's deprecated in node.
 * Does not do any input validation.
 *
 * @see https://github.com/jsdom/abab/blob/master/lib/atob.js
 *
 * @param {string} data
 * @returns {string}
 */
function asciiToBinary(data) {
  if (data.length % 4 === 0) {
    data = data.replace(/==?$/, "");
  }

  let output = "";
  let buffer = 0;
  let accumulatedBits = 0;

  for (let i = 0; i < data.length; i++) {
    buffer <<= 6;
    buffer |= KEY_STRING.indexOf(data[i]);
    accumulatedBits += 6;
    if (accumulatedBits === 24) {
      output += String.fromCharCode((buffer & 0xff0000) >> 16);
      output += String.fromCharCode((buffer & 0xff00) >> 8);
      output += String.fromCharCode(buffer & 0xff);
      buffer = accumulatedBits = 0;
    }
  }
  if (accumulatedBits === 12) {
    buffer >>= 4;
    output += String.fromCharCode(buffer);
  } else if (accumulatedBits === 18) {
    buffer >>= 2;
    output += String.fromCharCode((buffer & 0xff00) >> 8);
    output += String.fromCharCode(buffer & 0xff);
  }
  return output;
}

/**
 * Substitute for btoa since it's deprecated in node.
 * Does not do any input validation.
 *
 * @see https://github.com/jsdom/abab/blob/master/lib/btoa.js
 *
 * @param {string} str
 * @returns {string}
 */
function binaryToAscii(str) {
  let out = "";
  for (let i = 0; i < str.length; i += 3) {
    /** @type {[number, number, number, number]} */
    const groupsOfSix = [undefined, undefined, undefined, undefined];
    groupsOfSix[0] = str.charCodeAt(i) >> 2;
    groupsOfSix[1] = (str.charCodeAt(i) & 0x03) << 4;
    if (str.length > i + 1) {
      groupsOfSix[1] |= str.charCodeAt(i + 1) >> 4;
      groupsOfSix[2] = (str.charCodeAt(i + 1) & 0x0f) << 2;
    }
    if (str.length > i + 2) {
      groupsOfSix[2] |= str.charCodeAt(i + 2) >> 6;
      groupsOfSix[3] = str.charCodeAt(i + 2) & 0x3f;
    }
    for (let j = 0; j < groupsOfSix.length; j++) {
      if (typeof groupsOfSix[j] === "undefined") {
        out += "=";
      } else {
        out += KEY_STRING[groupsOfSix[j]];
      }
    }
  }
  return out;
}

const UNDEFINED = -1;
const HOLE = -2;
const NAN = -3;
const POSITIVE_INFINITY = -4;
const NEGATIVE_INFINITY = -5;
const NEGATIVE_ZERO = -6;

/**
 * Turn a value into a JSON string that can be parsed with `devalue.parse`
 * @param {any} value
 * @param {Record<string, (value: any) => any>} [reducers]
 */
function stringify(value, reducers) {
	/** @type {any[]} */
	const stringified = [];

	/** @type {Map<any, number>} */
	const indexes = new Map();

	/** @type {Array<{ key: string, fn: (value: any) => any }>} */
	const custom = [];
	if (reducers) {
		for (const key of Object.getOwnPropertyNames(reducers)) {
			custom.push({ key, fn: reducers[key] });
		}
	}

	/** @type {string[]} */
	const keys = [];

	let p = 0;

	/** @param {any} thing */
	function flatten(thing) {
		if (typeof thing === 'function') {
			throw new DevalueError(`Cannot stringify a function`, keys);
		}

		if (indexes.has(thing)) return indexes.get(thing);

		if (thing === undefined) return UNDEFINED;
		if (Number.isNaN(thing)) return NAN;
		if (thing === Infinity) return POSITIVE_INFINITY;
		if (thing === -Infinity) return NEGATIVE_INFINITY;
		if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;

		const index = p++;
		indexes.set(thing, index);

		for (const { key, fn } of custom) {
			const value = fn(thing);
			if (value) {
				stringified[index] = `["${key}",${flatten(value)}]`;
				return index;
			}
		}

		let str = '';

		if (is_primitive(thing)) {
			str = stringify_primitive(thing);
		} else {
			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'String':
				case 'Boolean':
					str = `["Object",${stringify_primitive(thing)}]`;
					break;

				case 'BigInt':
					str = `["BigInt",${thing}]`;
					break;

				case 'Date':
					const valid = !isNaN(thing.getDate());
					str = `["Date","${valid ? thing.toISOString() : ''}"]`;
					break;

				case 'RegExp':
					const { source, flags } = thing;
					str = flags
						? `["RegExp",${stringify_string(source)},"${flags}"]`
						: `["RegExp",${stringify_string(source)}]`;
					break;

				case 'Array':
					str = '[';

					for (let i = 0; i < thing.length; i += 1) {
						if (i > 0) str += ',';

						if (i in thing) {
							keys.push(`[${i}]`);
							str += flatten(thing[i]);
							keys.pop();
						} else {
							str += HOLE;
						}
					}

					str += ']';

					break;

				case 'Set':
					str = '["Set"';

					for (const value of thing) {
						str += `,${flatten(value)}`;
					}

					str += ']';
					break;

				case 'Map':
					str = '["Map"';

					for (const [key, value] of thing) {
						keys.push(
							`.get(${is_primitive(key) ? stringify_primitive(key) : '...'})`
						);
						str += `,${flatten(key)},${flatten(value)}`;
						keys.pop();
					}

					str += ']';
					break;

				case "Int8Array":
				case "Uint8Array":
				case "Uint8ClampedArray":
				case "Int16Array":
				case "Uint16Array":
				case "Int32Array":
				case "Uint32Array":
				case "Float32Array":
				case "Float64Array":
				case "BigInt64Array":
				case "BigUint64Array": {
					/** @type {import("./types.js").TypedArray} */
					const typedArray = thing;
					const base64 = encode64(typedArray.buffer);
					str = '["' + type + '","' + base64 + '"]';
					break;
				}
					
				case "ArrayBuffer": {
					/** @type {ArrayBuffer} */
					const arraybuffer = thing;
					const base64 = encode64(arraybuffer);
					
					str = `["ArrayBuffer","${base64}"]`;
					break;
				}
				
				default:
					if (!is_plain_object(thing)) {
						throw new DevalueError(
							`Cannot stringify arbitrary non-POJOs`,
							keys
						);
					}

					if (enumerable_symbols(thing).length > 0) {
						throw new DevalueError(
							`Cannot stringify POJOs with symbolic keys`,
							keys
						);
					}

					if (Object.getPrototypeOf(thing) === null) {
						str = '["null"';
						for (const key in thing) {
							keys.push(stringify_key(key));
							str += `,${stringify_string(key)},${flatten(thing[key])}`;
							keys.pop();
						}
						str += ']';
					} else {
						str = '{';
						let started = false;
						for (const key in thing) {
							if (started) str += ',';
							started = true;
							keys.push(stringify_key(key));
							str += `${stringify_string(key)}:${flatten(thing[key])}`;
							keys.pop();
						}
						str += '}';
					}
			}
		}

		stringified[index] = str;
		return index;
	}

	const index = flatten(value);

	// special case — value is represented as a negative index
	if (index < 0) return `${index}`;

	return `[${stringified.join(',')}]`;
}

/**
 * @param {any} thing
 * @returns {string}
 */
function stringify_primitive(thing) {
	const type = typeof thing;
	if (type === 'string') return stringify_string(thing);
	if (thing instanceof String) return stringify_string(thing.toString());
	if (thing === void 0) return UNDEFINED.toString();
	if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
	if (type === 'bigint') return `["BigInt","${thing}"]`;
	return String(thing);
}

export { DevalueError as D, HOLE as H, NAN as N, POSITIVE_INFINITY as P, UNDEFINED as U, NEGATIVE_INFINITY as a, NEGATIVE_ZERO as b, stringify_string as c, decode64 as d, is_plain_object as e, enumerable_symbols as f, get_type as g, stringify_key as h, is_primitive as i, escaped as j, stringify as s };
//# sourceMappingURL=stringify-BgjEYUR1.js.map
