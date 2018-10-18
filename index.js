export { 
  isAbsolute,
  isArguments, 
  isArray, 
  isArrayBuffer, 
  isArrayLike, 
  isArrayLikeObject, 
  isBoolean, 
  isBuffer, 
  isDate, 
  isElement, 
  isEmpty, 
  isEqual, 
  isEqualWith, 
  isError, 
  isFinite, 
  isFunction, 
  isInteger, 
  isLength, 
  isMap, 
  isNaN, 
  isNative, 
  isNil,
  isNil as isNullOrUndefined, 
  isNull, 
  isNumber, 
  isMatch,
  isMatchWith, 
  isMatchCustomizer,
  isMatchWithCustomizer,
  isObject, 
  isObjectLike, 
  isPlainObject, 
  isRegExp, 
  isSafeInteger, 
  isSet, 
  isString, 
  isSymbol, 
  isTypedArray,
  isUndefined, 
  isWeakMap, 
  isWeakSet 
} from 'lodash/lang';

export { 
  int as isInt,
  long as islong,
  Long as isLong,
  int32 as isInt32,
  double as isDouble,
  primitive as isPrimitive,
} from 'is-type-of';

export { default as isClass } from 'is-class';
export { default as isPromise } from 'is-promise';
export { default as isGenerator } from 'is-generator-function';
export { default as isGeneratorFunction } from 'is-generator-function';

export { 
  default as isStream,
  duplexStream as isDuplexStream,
  readableStream as isReadableStream, 
  writableStream as isWritableStream
} from 'isstream';

/**
 * Get type of `value`.
 *
 * @since 0.1.2
 * @category Lang
 * @param {*} value The value to check.
 * @returns {string} Returns `type` of `value`
 * @example
 *
 * getType('str')
 * // => 'string'
 *
 * getType([])
 * // => 'array'
 */
function getType(value) {
  // ToDo
}

/**
 * Checks type `value1` and `value2`.
 *
 * @since 0.1.2
 * @category Lang
 * @param {*} value1 The value to check.
 * * @param {*} value2 The value to check.
 * @returns {boolean} Returns `true` if `value` is same, else `false`.
 * @example
 *
 * isSameType(null, null)
 * // => true
 *
 * isSameType(void 0, null)
 * // => false
 */
function isSameType(value1, value2) {
  // ToDo
}

/**
 * Checks type.
 *
 * @since 0.1.2
 * @category Lang
 * @param {*} value The value to check.
 * * @param {string} type The value to check.
 * @returns {boolean} Returns `true` if `value` is `type`, else `false`.
 * @example
 *
 * isType(null, 'null')
 * // => true
 *
 * isType(void 0, 'null')
 * // => false
 */
function isType(value, type) {
  if (typeof type !== 'string') {
    return false;
  }
  // ToDo
}