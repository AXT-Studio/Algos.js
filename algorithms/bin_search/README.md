# algorithms/bin_search

## Overview

配列がソートされていることを前提に、二分探索を行います。
速度を気にしないのであれば`Array.prototype.indexOf()`などを使うのが簡単ですが、二分探索により時間計算量が`O(n)`から`O(log n)`に改善されます。

## Usage

export文以外をコピペするか、jsDelivrなどを経由してES Moduleとしてインポートすることでも使えます。

```js
import { bin_findLE, bin_findIndexLE } from 'https://cdn.jsdelivr.net/gh/AXT-AyaKoto/Algos.js/algorithms/bin_search/main.mjs';
```

## Methods

- `bin_findLE(array, target, compareFn, needEquality)`: `any | undefined` - 二分探索を行い、結果の要素を返す。
    - 引数:
        - `array: any[]`
            - 探索対象の配列です。
            - 事前に`compareFn`によってソートされている必要があります。
        - `target: any`
            - 探索対象の値です。
        - `compareFn: (a: any, b: any) => number` *(任意)*
            - 配列の要素を比較する関数です。
            - a < b の場合は負の値、a > b の場合は正の値、a === b の場合は0を返す必要があります。
            - 指定しなかった場合のデフォルト値は、`(a, b) => { const [A, B] = [String(a), String(b)]; return (A < B) ? -1 : (A > B) ? 1 : 0 }`です。
                - `Array.prototype.sort()`で`compareFn`を指定しなかった場合と同じ挙動になります。
        - `needEquality: boolean` *(任意)*
            - `true`を指定した場合、配列に`target`と等しいと判定できる要素がない場合は`undefined`を返すようになります。
            - 指定しなかった場合のデフォルト値は`false`です。
    - 返り値: `any | undefined`
        - 探したい要素"以下"と判定されるもののうち最も後ろにある**要素そのもの**です。
        - `array`のすべての要素が`target`より大きい場合は`undefined`を返します。
        - `needEquality`が`true`のとき、`target`と等しい要素がない場合は`undefined`を返します。
- `bin_findIndexLE(array, target, compareFn, needEquality)`: `number | undefined` - 二分探索を行い、結果のindexを返す。
    - 引数:
        - `array: any[]`
            - 探索対象の配列です。
            - 事前に`compareFn`によってソートされている必要があります。
        - `target: any`
            - 探索対象の値です。
        - `compareFn: (a: any, b: any) => number` *(任意)*
            - 配列の要素を比較する関数です。
            - a < b の場合は負の値、a > b の場合は正の値、a === b の場合は0を返す必要があります。
            - 指定しなかった場合のデフォルト値は、`(a, b) => { const [A, B] = [String(a), String(b)]; return (A < B) ? -1 : (A > B) ? 1 : 0 }`です。
                - `Array.prototype.sort()`で`compareFn`を指定しなかった場合と同じ挙動になります。
        - `needEquality: boolean` *(任意)*
            - `true`を指定した場合、配列に`target`と等しいと判定できる要素がない場合は`undefined`を返すようになります。
            - 指定しなかった場合のデフォルト値は`false`です。
    - 返り値: `number | undefined`
        - 探したい要素"以下"と判定されるもののうち最も後ろにある**要素のindex**です。
        - `array`のすべての要素が`target`より大きい場合は`-1`を返します。
        - `needEquality`が`true`のとき、`target`と等しい要素がない場合は`undefined`を返します。

## Example

```js
import { bin_findLE, bin_findIndexLE } from 'https://cdn.jsdelivr.net/gh/AXT-AyaKoto/Algos.js/algorithms/bin_search/main.mjs';

const array = [2, 3, 5, 7, 11];
const compareFn = (a, b) => a - b; // 数値を昇順にソートする比較関数

// ## bin_findLE()

console.log(bin_findLE(array, 5, compareFn));
// Expected Log Output: <number> 5
// (arrayの「5以下で最大の要素」は`5`です。)
console.log(bin_findLE(array, 8, compareFn));
// Expected Log Output: <number> 7
// (arrayの「8以下で最大の要素」は`7`です。)
console.log(bin_findLE(array, 1, compareFn));
// Expected Log Output: <undefined> undefined
// (arrayに「1以下で最大の要素」はそもそも存在しないので、undefinedを返します。)
console.log(bin_findLE(array, 3, compareFn, true));
// Expected Log Output: <number> 3
// (arrayの「3以下で最大の要素」は`3`で、これはtargetである`3`と等しいです。)
console.log(bin_findLE(array, 4, compareFn, true));
// Expected Log Output: <undefined> undefined
// (arrayの「4以下で最大の要素」は`3`で、これはtargetである`4`と等しくありません。)

// ## bin_findIndexLE()
console.log(bin_findIndexLE(array, 5, compareFn));
// Expected Log Output: <number> 2
// (arrayの「5以下で最大の要素」は`5`で、これはarrayの2番目にあります。)
console.log(bin_findIndexLE(array, 8, compareFn));
// Expected Log Output: <number> 3
// (arrayの「8以下で最大の要素」は`7`で、これはarrayの3番目にあります。)
console.log(bin_findIndexLE(array, 1, compareFn));
// Expected Log Output: <number> -1
// (arrayに「1以下の要素」は存在しないので、-1を返します。)
console.log(bin_findIndexLE(array, 7, compareFn, true));
// Expected Log Output: <number> 3
// (arrayの「7以下で最大の要素」は`7`で、これはarrayの3番目にあります。)
// `7`はtargetと等しいので、indexをそのまま返します。
console.log(bin_findIndexLE(array, 8, compareFn, true));
// Expected Log Output: <undefined> undefined
// (arrayの「8以下で最大の要素」は`7`で、これはarrayの3番目にあります。)
// しかし、`7`はtargetと等しくないので、undefinedを返します。
```
