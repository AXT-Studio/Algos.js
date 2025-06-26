# algorithms/bin_search


## Overview

ソートされた配列に対して二分探索を行います。
速度を気にしないのであれば`Array.prototype.findIndex()`を使うのが簡単ですが、二分探索により時間計算量が`O(n)`から`O(log n)`に改善されます。

## Usage

export文以外をコピペするか、jsDelivrなどを経由してES Moduleとしてインポートすることでも使えます。

```js
import { binSearch } from 'https://cdn.jsdelivr.net/gh/AXT-AyaKoto/Algos.js/algorithms/bin_search/main.mjs';
```

## Methods

- `binSearch(array, compare, target, needEquality = false)` - 二分探索を行う
    - 引数:
        - `array: any[]`
            - 一定の法則(compare)によってソートされた配列です。
        - `compare: (a: any, b: any) => number`
            - 配列の要素を比較する関数です。
            - a < b の場合は負の値、a > b の場合は正の値、a === b の場合は0を返す必要があります。
                - `Array.prototype.sort()`の比較関数と同じです。
        - `target: any`
            - 探索対象の値です。
        - `needEquality: boolean`
            - trueにした場合、配列に`target`と等しいと判定できる要素がない場合は`undefined`を返すようになります。
    - 返り値: `number | undefined`
        - 探したい要素"以下"と判定されるもののうち最も後ろにある要素のindexです。
        - arrayのすべての要素がtargetより大きい場合は-1を返します。
        - needEqualityがtrueの場合、targetと等しい要素がない場合はundefinedを返します。

## Example

```js
import { binSearch } from 'https://cdn.jsdelivr.net/gh/AXT-AyaKoto/Algos.js/algorithms/bin_search/main.mjs';

const array = [2, 3, 5, 7, 11];
const compareFn = (a, b) => a - b; // 数値を昇順にソートする比較関数

console.log(binSearch(array, compareFn, 5, false));
// Expected Log Output: <number> 2
// arrayの「5以下で最大の要素」は、2番目にある`5`です。

console.log(binSearch(array, compareFn, 4, false));
// Expected Log Output: <number> 1
// arrayの「4以下で最大の要素」は、1番目にある`3`です。

console.log(binSearch(array, compareFn, 1, false));
// Expected Log Output: <number> -1
// arrayの「1以下で最大の要素」は存在しないので、-1を返します。

console.log(binSearch(array, compareFn, 12, false));
// Expected Log Output: <number> 4
// arrayの「12以下で最大の要素」は、4番目にある`11`です。

console.log(binSearch(array, compareFn, 7, true));
// Expected Log Output: <number> 3
// arrayの「7以下で最大の要素」は、3番目にある`7`です。
// `7`はtargetと等しいので、indexをそのまま返します。

console.log(binSearch(array, compareFn, 8, true));
// Expected Log Output: <undefined> undefined
// arrayの「8以下で最大の要素」は、3番目にある`7`です。
// しかし、`7`はtargetと等しくないので、undefinedを返します。
```
