type-check-of
==========

complete type checking for node and browser

dependencies:

- [lodash](https://github.com/lodash/lodash)
- [isstream](https://github.com/rvagg/isstream)
- [is-class](https://github.com/miguelmota/is-class)
- [is-type-of](https://github.com/node-modules/is-type-of)
- [is-promise](https://github.com/then/is-promise)
- [is-generator-function](https://github.com/ljharb/is-generator-function)
  
## Install

```
npm install type-check-of
```

## Example

```
const isType = require('type-check-of');

isType.array([1]); // => true
isType.primitive(true); // => true
isType.primitive({}); // => false
isType.generatorFunction(function * () {}); // => true
isType.long(Math.pow(2, 33)); // => true
isType.double(0); // => false
```

### API
- isAbsolute,
- isArguments
- isArray
- isArrayBuffer
- isArrayLike
- isArrayLikeObject
- isBoolean
- isBuffer
- isDate
- isElement
- isEmpty
- isEqual
- isEqualWith
- isError
- isFinite
- isFunction
- isInteger
- isLength
- isMap
- isNaN
- isNative
- isNil,
- isNil as isNullOrUndefined
- isNull
- isNumber
- isMatch,
- isMatchWith
- isMatchCustomizer,
- isMatchWithCustomizer,
- isObject
- isObjectLike
- isPlainObject
- isRegExp
- isSafeInteger
- isSet
- isString
- isSymbol
- isTypedArray,
- isUndefined
- isWeakMap
- isWeakSet 
- isInt
- isInt32
- islong
- isLong
- isDouble
- isPrimitive
- isClass
- isPromise
- isGenerator
- isGeneratorFunction
- isStream,
- isReadableStream
- isWritableStream
- isDuplexStream

## License

MIT