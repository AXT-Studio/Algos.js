# algorithms/enum_divisors

## Overview

整数の約数を列挙します。

## Usage

export文以外をコピペするか、jsDelivrなどを経由してES Moduleとしてインポートすることでも使えます。

```js
import { getDivisors } from 'https://cdn.jsdelivr.net/gh/AXT-Studio/Algos.js/algorithms/enum_divisors/main.mjs';
```

## Methods

- `getDivisors(n: number): number[]` - `n`の正の約数を列挙して、昇順で返します。
    - 引数:
        - `n: number`
            - 正の整数です。
    - 返り値: `number[]`
        - `n`の正の約数を昇順で列挙した配列です。
        - `n`が1の場合は、`[1]`を返します。
        - `n`が0以下の場合は、空配列`[]`を返します。

## Time Complexity

> この項で、$n$は引数`n`の値を表します。

| Method | Time Complexity | Appendix |
|--------|-----------------|----------|
| `getDivisors()` | $O(\sqrt{n})$ | (※1) |

※1: 時間計算量について
- 約数はペアで発見することができるため、探索は$\sqrt{N}$までで十分となります。
- 昇順並び替えも"反転して結合"は$O(\sqrt{N})$で行えるため、全体の時間計算量は$O(\sqrt{N})$となります。

## Example

```js
import { getDivisors } from 'https://cdn.jsdelivr.net/gh/AXT-Studio/Algos.js/algorithms/enum_divisors/main.mjs';
console.log(getDivisors(12)); // Expected Output: [1, 2, 3, 4, 6, 12]
console.log(getDivisors(1)); // Expected Output: [1]
console.log(getDivisors(0)); // Expected Output: []
console.log(getDivisors(-5)); // Expected Output: []
```
