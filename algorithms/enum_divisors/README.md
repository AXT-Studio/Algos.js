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
- 昇順並び替えは`Array.prototype.pop()`と`Array.prototype.push()`で$\sqrt{N}$以上の約数を順に移動する形で行います。
    - 1回の移動が$O(1)$、移動する約数の個数は$\sqrt{N}$個以下なので、$O(\sqrt{N})$で抑えることができます。
