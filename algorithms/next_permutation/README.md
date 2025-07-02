# algorithms/next_permutation

## Overview

「配列の要素を並び替えたもの」を全て列挙するためのジェネレーター関数です。
C++の`next_permutation`、Pythonの`itertools.permutations`に相当します。

## Usage

export文以外をコピペするか、jsDelivrなどを経由してES Moduleとしてインポートすることでも使えます。

```js
import { nextPermutation } from 'https://cdn.jsdelivr.net/gh/AXT-AyaKoto/Algos.js/algorithms/next_permutation/main.mjs';
```

## Methods

- `next_permutation(array: T[]): Generator<T[]>`
    - 配列の次の順列を生成するジェネレーター関数です。
    - 引数:
        - `array: T[]`
            - 順列を生成する元の配列です。
    - 返り値: `Generator<T[]>`
        - 元の配列の順列を生成するジェネレーターです。
        - `next()`メソッドを呼び出すことで、辞書順で次の順列を取得できます。
        - `for...of`ループで使用することもできます。

## Example

```js
import { nextPermutation } from 'https://cdn.jsdelivr.net/gh/AXT-AyaKoto/Algos.js/algorithms/next_permutation/main.mjs';
const array = [1, 2, 3];
const permutations = nextPermutation(array);
for (const perm of permutations) {
    console.log(perm);
}
// Expected Log Output:
// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]
```
