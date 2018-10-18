(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash'), require('is-type-of'), require('is-class'), require('is-promise'), require('is-generator-function'), require('isstream')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lodash', 'is-type-of', 'is-class', 'is-promise', 'is-generator-function', 'isstream'], factory) :
  (factory((global['dist/bundle'] = global['dist/bundle'] || {}, global['dist/bundle'].js = {}),global.lodash,global.isTypeOf,global.isClass,global.isPromise,global.isGeneratorFunction,global.isstream));
}(this, (function (exports,lodash,isTypeOf,isClass,isPromise,isGeneratorFunction,isstream) { 'use strict';

  isClass = isClass && isClass.hasOwnProperty('default') ? isClass['default'] : isClass;
  isPromise = isPromise && isPromise.hasOwnProperty('default') ? isPromise['default'] : isPromise;
  isGeneratorFunction = isGeneratorFunction && isGeneratorFunction.hasOwnProperty('default') ? isGeneratorFunction['default'] : isGeneratorFunction;
  var isstream__default = 'default' in isstream ? isstream['default'] : isstream;



  exports.isAbsolute = lodash.isAbsolute;
  exports.isArguments = lodash.isArguments;
  exports.isArray = lodash.isArray;
  exports.isArrayBuffer = lodash.isArrayBuffer;
  exports.isArrayLike = lodash.isArrayLike;
  exports.isArrayLikeObject = lodash.isArrayLikeObject;
  exports.isBoolean = lodash.isBoolean;
  exports.isBuffer = lodash.isBuffer;
  exports.isDate = lodash.isDate;
  exports.isElement = lodash.isElement;
  exports.isEmpty = lodash.isEmpty;
  exports.isEqual = lodash.isEqual;
  exports.isEqualWith = lodash.isEqualWith;
  exports.isError = lodash.isError;
  exports.isFinite = lodash.isFinite;
  exports.isFunction = lodash.isFunction;
  exports.isInteger = lodash.isInteger;
  exports.isLength = lodash.isLength;
  exports.isMap = lodash.isMap;
  exports.isNaN = lodash.isNaN;
  exports.isNative = lodash.isNative;
  exports.isNil = lodash.isNil;
  exports.isNullOrUndefined = lodash.isNil;
  exports.isNull = lodash.isNull;
  exports.isNumber = lodash.isNumber;
  exports.isMatch = lodash.isMatch;
  exports.isMatchWith = lodash.isMatchWith;
  exports.isMatchCustomizer = lodash.isMatchCustomizer;
  exports.isMatchWithCustomizer = lodash.isMatchWithCustomizer;
  exports.isObject = lodash.isObject;
  exports.isObjectLike = lodash.isObjectLike;
  exports.isPlainObject = lodash.isPlainObject;
  exports.isRegExp = lodash.isRegExp;
  exports.isSafeInteger = lodash.isSafeInteger;
  exports.isSet = lodash.isSet;
  exports.isString = lodash.isString;
  exports.isSymbol = lodash.isSymbol;
  exports.isTypedArray = lodash.isTypedArray;
  exports.isUndefined = lodash.isUndefined;
  exports.isWeakMap = lodash.isWeakMap;
  exports.isWeakSet = lodash.isWeakSet;
  exports.isInt = isTypeOf.int;
  exports.isInt32 = isTypeOf.int32;
  exports.islong = isTypeOf.long;
  exports.isLong = isTypeOf.Long;
  exports.isDouble = isTypeOf.double;
  exports.isPrimitive = isTypeOf.primitive;
  exports.isClass = isClass;
  exports.isPromise = isPromise;
  exports.isGenerator = isGeneratorFunction;
  exports.isGeneratorFunction = isGeneratorFunction;
  exports.isStream = isstream__default;
  exports.isReadableStream = isstream.readableStream;
  exports.isWritableStream = isstream.writableStream;
  exports.isDuplexStream = isstream.duplexStream;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
