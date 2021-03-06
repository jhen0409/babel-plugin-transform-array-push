# babel-plugin-transform-array-push

Simple transform `arr.push(a)` to `arr[arr.length] = a`, just follow [loverajoel/jstips#00 - Adding an element at the end](https://github.com/loverajoel/jstips/blob/gh-pages/_posts/en/2015-12-29-insert-item-inside-an-array.md#adding-an-element-at-the-end).

```js
const arr = [1, 2, 3]
arr.push(4)

const arrLength = arr.push(5);
```

into

```js
const arr = [1, 2, 3];
arr[arr.length] = 4;

const arrLength = (arr[arr.length] = 5, arr.length);
```

## Limitation

* Only for `ArrayExpression`, and it's known, no re-assign other type

```js
// Will transform
let arr = [1, 2, 3]
arr.push(4)

// Will transform
let arr = [1, 2, 3]
arr = [1, 2, 3, 4]
arr4.push(5)

// Will not transform
let arr = [1, 2, 3]
arr = { push: 1 }
arr.push(4)
```

* Not transform multi-arg of `array.push`

```js
// Will not transform
let arr = [1, 2, 3]
arr.push(4, 5, 6)
```

## Installation

```js
npm i --save-dev babel-plugin-transform-array-push
```

## Usage

### Via `.babelrc` (recommended)

**.babelrc**

```json
{
  "plugins": ["transform-array-push"]
}
```

### Via CLI

```js
babel script.js --plugins transform-array-push
```

### Via Node API

```js
require('babel-core').transform('code', {
  plugins: ['transform-array-push'],
})
```

## License

[MIT](LICENSE.md)
