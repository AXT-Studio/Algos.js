# algorithms/XMath

## Overview

`XMath`は、数学的な計算を補助するための関数群を提供するユーティリティクラスです。

## Usage

export文以外をコピペするか、jsDelivrなどを経由してES Moduleとしてインポートすることでも使えます。

```js
import { XMath } from 'https://cdn.jsdelivr.net/gh/AXT-Studio/Algos.js/algorithms/XMath/main.mjs';
```

## Methods

### 最大公約数・最小公倍数

- `gcd(a: (number|bigint), b: (number|bigint)): (number|bigint)` - 2つの整数の最大公約数を求めます。
    - 引数:
        - `a: number|bigint` - 整数
        - `b: number|bigint` - 整数
    - 返り値: `number|bigint` - 最大公約数
- `lcm(a: (number|bigint), b: (number|bigint)): (number|bigint)` - 2つの整数の最小公倍数を求めます。
    - 引数:
        - `a: number|bigint` - 整数
        - `b: number|bigint` - 整数
    - 返り値: `number|bigint` - 最小公倍数

| Method | Time Complexity | Appendix |
|--------|-----------------|----------|
| `gcd()` | $O(\log\min(A, B))$ | `A`, `B`はそれぞれ入力された値です。 |
| `lcm()` | $O(\log\min(A, B))$ | `A`, `B`はそれぞれ入力された値です。 |


```js
import { XMath } from 'https://cdn.jsdelivr.net/gh/AXT-Studio/Algos.js/algorithms/XMath/main.mjs';
console.log(XMath.gcd(48, 18)); // Expected Output: 6
console.log(XMath.lcm(48, 18)); // Expected Output: 144
console.log(XMath.gcd(48n, 18n)); // Expected Output: 6n
console.log(XMath.lcm(48n, 18n)); // Expected Output: 144n
```

### 約数列挙

- `getDivisors(n: number): number[]` - `n`の正の約数を列挙して、昇順で返します。
    - 引数:
        - `n: number`
            - 正の整数です。
    - 返り値: `number[]`
        - `n`の正の約数を昇順で列挙した配列です。
        - `n`が1の場合は、`[1]`を返します。
        - `n`が0以下の場合は、空配列`[]`を返します。

| Method | Time Complexity | Appendix |
|--------|-----------------|----------|
| `getDivisors()` | $O(\sqrt{n})$ | $n$は引数`n`の値です。 |

```js
import { XMath } from 'https://cdn.jsdelivr.net/gh/AXT-Studio/Algos.js/algorithms/XMath/main.mjs';
console.log(XMath.getDivisors(12)); // Expected Output: [1, 2, 3, 4, 6, 12]
console.log(XMath.getDivisors(1)); // Expected Output: [1]
console.log(XMath.getDivisors(0)); // Expected Output: []
console.log(XMath.getDivisors(-5)); // Expected Output: []
```
