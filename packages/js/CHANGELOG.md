# Change Log

All notable changes to this project will be documented in this file.

# [2.2.0](https://github.com/stalniy/ucast/compare/@ucast/js@2.1.3...@ucast/js@2.2.0) (2020-08-20)


### Features

* **esm:** adds ESM support via dual loading in package.json for latest Node.js version ([c730f95](https://github.com/stalniy/ucast/commit/c730f9598a4c62589c612403c0ac59ba4aa1600e)), closes [#10](https://github.com/stalniy/ucast/issues/10)

## [2.1.3](https://github.com/stalniy/ucast/compare/@ucast/js@2.1.2...@ucast/js@2.1.3) (2020-08-20)


### Bug Fixes

* **operator:** ensure `exists` can check existance of array item ([3196ec7](https://github.com/stalniy/ucast/commit/3196ec79e5ef190fe113656fc725cb47ab051c57))

## [2.1.2](https://github.com/stalniy/ucast/compare/@ucast/js@2.1.1...@ucast/js@2.1.2) (2020-08-20)


### Bug Fixes

* **get:** ensures that `getObjectField` properly works with numeric fields in path ([ee501a2](https://github.com/stalniy/ucast/commit/ee501a23262c2fc4913906ff09386f39883ab98e))

## [2.1.1](https://github.com/stalniy/ucast/compare/@ucast/js@2.1.0...@ucast/js@2.1.1) (2020-08-14)


### Bug Fixes

* **interpreters:** ensure field level interpreters work with array values as well ([32e38ef](https://github.com/stalniy/ucast/commit/32e38efb9d4dea632f6c927243f6e6b96d57b69b)), closes [#7](https://github.com/stalniy/ucast/issues/7)

# [2.1.0](https://github.com/stalniy/ucast/compare/@ucast/js@2.0.1...@ucast/js@2.1.0) (2020-08-11)


### Features

* **comparing:** adds `compare` option to interpreter ([576d128](https://github.com/stalniy/ucast/commit/576d128a92d554e9e6a1508667a2f159908613c6))

## [2.0.1](https://github.com/stalniy/ucast/compare/@ucast/js@2.0.0...@ucast/js@2.0.1) (2020-08-08)


### Bug Fixes

* **docs:** removes `$` sign from README ([1a7e96b](https://github.com/stalniy/ucast/commit/1a7e96b0e7bd29d7de5fe236863e472e28b9e119))

# [2.0.0](https://github.com/stalniy/ucast/compare/@ucast/js@1.0.2...@ucast/js@2.0.0) (2020-08-08)


### Code Refactoring

* **interpreters:** removes `$` prefix from names of operator interpreters ([04ea7ac](https://github.com/stalniy/ucast/commit/04ea7ac60a6aba4598b4fa27e6decb615e69a29d))


### Performance Improvements

* **build:** adds es6cjs format which works few times faster then umd in node env ([4adba3b](https://github.com/stalniy/ucast/commit/4adba3bbf85afe95abfbcee0e36b5edc9d09396f))


### BREAKING CHANGES

* **interpreters:** removes `$` prefix from names of operator interpreters. Also renames `$in` to `within` because `in` is a reserved word in JS. This ensures we can safely import/re-export symbols from this package and other parsers/interpreters inside/from single file:

**Before**:

```js
import { $in, $and } from '@ucast/js'
```

**After**:

```js
import { within, and } from '@ucast/js'
```

## [1.0.2](https://github.com/stalniy/ucast/compare/@ucast/js@1.0.1...@ucast/js@1.0.2) (2020-07-23)


### Bug Fixes

* **license:** changes mistakenly set MIT license to the correct one - Apache 2.0 ([197363c](https://github.com/stalniy/ucast/commit/197363c321392c742d31b7e1e024d88c0499ce73))

## [1.0.1](https://github.com/stalniy/ucast/compare/@ucast/js@1.0.0...@ucast/js@1.0.1) (2020-07-10)


### Bug Fixes

* **package:** fixes deps ranges ([c2de9c1](https://github.com/stalniy/ucast/commit/c2de9c1b2d6ad85050f4eeb2635c6cb377200013)), closes [#1](https://github.com/stalniy/ucast/issues/1)

## [1.0.1](https://github.com/stalniy/ucast/compare/@ucast/js@1.0.0...@ucast/js@1.0.1) (2020-07-10)


### Bug Fixes

* **package:** fixes deps ranges ([c2de9c1](https://github.com/stalniy/ucast/commit/c2de9c1b2d6ad85050f4eeb2635c6cb377200013)), closes [#1](https://github.com/stalniy/ucast/issues/1)

# 1.0.0 (2020-07-10)


### Features

* **mongo:** stabilize mongo package ([7d77768](https://github.com/stalniy/ucast/commit/7d7776874be3050026b53ee3b61c3361a89d1b21))
* **mongo:** updates mongo parser to support ValueParsingInstruction ([b918c34](https://github.com/stalniy/ucast/commit/b918c34224a5b60f3f1aa16197587f279b0e3e3a))


### Reverts

* **package:** reverts root package.json to fix CI ([277deb5](https://github.com/stalniy/ucast/commit/277deb561bc2a74a2c98170608805ded57802d7d))
