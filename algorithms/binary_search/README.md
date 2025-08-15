# algorithms/binary_search

## Overview

`binary_search`, `lower_bound`, `upper_bound`は、ソート済みの配列に対して二分探索を行うための関数群です。

## Usage

export文以外をコピペするか、jsDelivrなどを経由してES Moduleとしてインポートすることでも使えます。

```js
import { binary_search, lower_bound, upper_bound } from 'https://cdn.jsdelivr.net/gh/AXT-Studio/Algos.js/algorithms/binary_search/main.mjs';
```

## Methods

### 存在チェック

- `binary_search(array: any[], target:any, compareFn: (a: any, b: any) => number): boolean` - 配列内に`target`が存在するかどうかを判定します。
    - 引数:
        - `array: any[]` - ソート済みの配列
        - `target: any` - 探索する値
        - `compareFn: (a: any, b: any) => number` - 比較関数
            - 指定しなかった場合のデフォルト値は、`(a, b) => { const [A, B] = [String(a), String(b)]; return (A < B) ? -1 : (A > B) ? 1 : 0 }`です。
    - 返り値: `boolean` - `target`が`array`に存在する場合は`true`、存在しない場合は`false`

| Method | Time Complexity | Appendix |
|--------|-----------------|----------|
| `binary_search` | O(log n) |  |

```js
import { binary_search } from 'https://cdn.jsdelivr.net/gh/AXT-Studio/Algos.js/algorithms/binary_search/main.mjs';
const array_str = ["a", "c", "e", "g"];
console.log(binary_search(array_str, "c")); // Expected Output: true
const array_num = [1, 4, 5, 7];
console.log(binary_search(array_num, 3, (a, b) => a - b)); // Expected Output: false
```

### 範囲取得

- `lower_bound(array: any[], target: any, compareFn: (a: any, b: any) => number): number` - 配列内で`target`以上の最小のインデックスを返します。
    - 引数:
        - `array: any[]` - ソート済みの配列
        - `target: any` - 探索する値
        - `compareFn: (a: any, b: any) => number` - 比較関数
            - 指定しなかった場合のデフォルト値は、`(a, b) => { const [A, B] = [String(a), String(b)]; return (A < B) ? -1 : (A > B) ? 1 : 0 }`です。
    - 返り値: `number` - `target`以上の最小のインデックス
        - `array`内に`target`以上の要素が存在しない場合は`array.length`を返します。
- `upper_bound(array: any[], target: any, compareFn: (a: any, b: any) => number): number` - 配列内で`target`より大きい最小のインデックスを返します。
    - 引数:
        - `array: any[]` - ソート済みの配列
        - `target: any` - 探索する値
        - `compareFn: (a: any, b: any) => number` - 比較関数
            - 指定しなかった場合のデフォルト値は、`(a, b) => { const [A, B] = [String(a), String(b)]; return (A < B) ? -1 : (A > B) ? 1 : 0 }`です。
    - 返り値: `number` - `target`より大きい最小のインデックス
        - `array`内に`target`より大きい要素が存在しない場合は`array.length`を返します。

| Method | Time Complexity | Appendix |
|--------|-----------------|----------|
| `lower_bound` | O(log n) |  |
| `upper_bound` | O(log n) |  |

```js
import { lower_bound, upper_bound } from 'https://cdn.jsdelivr.net/gh/AXT-Studio/Algos.js/algorithms/binary_search/main.mjs';
const array_str = ["a", "c", "e", "g"];
console.log(lower_bound(array_str, "e")); // Expected Output: 2
console.log(upper_bound(array_str, "e")); // Expected Output: 3
```
