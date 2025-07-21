# structures/deque

## Overview

両端から要素の追加と削除ができるデータ構造です。
スタックとしてもキューとしても使えます。

簡潔な実装になる「2つの配列」方式と、最悪計算量が$O(1)$になる「双方向連結リスト」方式の2つの実装があります。
どちらも同じインターフェースを持っているため、自由に切り替えることができます。

## Usage

export文以外をコピペするか、jsDelivrなどを経由してES Moduleとしてインポートすることでも使えます。

### 「2つの配列」方式

```js
import { Deque } from 'https://cdn.jsdelivr.net/gh/AXT-AyaKoto/Algos.js/structures/deque/TwoArray.mjs';
```

### 「双方向連結リスト」方式

```js
import { Deque } from 'https://cdn.jsdelivr.net/gh/AXT-AyaKoto/Algos.js/structures/deque/DoublyLinkedList.mjs';
```

## Methods

- `Deque()` - Dequeのインスタンスを生成
    - 引数:
        - `array: any[]` - 初期値
            - 省略可能。配列以外が指定された場合は空のDequeが生成される。
            - 例: `[1, 2, 3]` の場合、Dequeは `1, 2, 3` の順に要素を持つ
    - 返り値: `Deque` - Dequeのインスタンス
- `unshift(value)` - 先頭に値を挿入する
    - 引数:
        - `value: any` - 挿入する値
    - 返り値: `void`
- `push(value)` - 末尾に値を挿入する
    - 引数:
        - `value: any` - 挿入する値
    - 返り値: `void`
- `shift()` - 先頭の値を削除して返す
    - 引数: なし
    - 返り値: `any|undefined` - 削除した値。すでに空だった場合は`undefined`を返す
- `pop()` - 末尾の値を削除して返す
    - 引数: なし
    - 返り値: `any|undefined` - 削除した値。すでに空だった場合は`undefined`を返す
- `first()` - 先頭の値を参照
    - 引数: なし
    - 返り値: `any|undefined` - 先頭の値、またはundefined (空の場合)
- `last()` - 末尾の値を参照
    - 引数: なし
    - 返り値: `any|undefined` - 末尾の値、またはundefined (空の場合)
- `isEmpty()` - Dequeが空かどうかを判定
    - 引数: なし
    - 返り値: `boolean` - 空の場合はtrue
- `toArray()` - Dequeを配列に変換
    - 引数: なし
    - 返り値: `any[]` - 変換後の配列
- `size` - Dequeのサイズを取得 (getter)
    - 返り値: `number` - 要素数

## Time Complexity

> この項で、$N$はDequeの要素数を表します。

| Method | 「2つの配列」方式 | 「双方向連結リスト」方式 | Appendix |
|--------|-------------------|--------------------------|----------|
| `push()` | $O(1)$ | $O(1)$ |  |
| `pop()` | 償却$O(1)$, 最悪$O(N)$ | $O(1)$ | 「2つの配列」方式ではリバランス処理($O(N)$)が発生することがあります。 |
| `last()` | $O(1)$ | $O(1)$ |  |
| `unshift()` | $O(1)$ | $O(1)$ |  |
| `shift()` | 償却$O(1)$, 最悪$O(N)$ | $O(1)$ | 「2つの配列」方式ではリバランス処理($O(N)$)が発生することがあります。 |
| `first()` | $O(1)$ | $O(1)$ |  |
| `isEmpty()` | $O(1)$ | $O(1)$ |
| `toArray()` | $O(N)$ | $O(N)$ | どちらの場合でも、要素を1つずつ読み出すため$O(N)$かかります |
| `size` | $O(1)$ | $O(1)$ | 双方向連結リスト実装では、要素数を保持することで$O(1)$で取得できるようにしています。 |

## Example

```js
import { Deque } from 'https://cdn.jsdelivr.net/gh/AXT-AyaKoto/Algos.js/structures/deque/TwoArray.mjs';
/*
「双方向連結リスト」方式を使う場合は以下の通り
import { Deque } from 'https://cdn.jsdelivr.net/gh/AXT-AyaKoto/Algos.js/structures/deque/DoublyLinkedList.mjs';
*/
// Dequeクラスのインスタンスを作成（初期値あり）
const deque = new Deque(['B', 'C']);
console.log(deque.toArray()); // Expected Log Output : <object> [ "B", "C" ]

// push: 末尾に要素を追加
deque.push('D');
console.log(deque.toArray()); // Expected Log Output : <object> [ "B", "C", "D" ]

// unshift: 先頭に要素を追加
deque.unshift('A');
console.log(deque.toArray()); // Expected Log Output : <object> [ "A", "B", "C", "D" ]

// size: 要素数を取得
console.log(deque.size);      // Expected Log Output : <number> 4

// first/last: 先頭と末尾の要素を参照（削除はしない）
console.log(deque.first());   // Expected Log Output : <string> "A"
console.log(deque.last());    // Expected Log Output : <string> "D"

// shift: 先頭から要素を削除して取得
const shiftedItem = deque.shift();
console.log(shiftedItem);     // Expected Log Output : <string> "A"
console.log(deque.toArray()); // Expected Log Output : <object> [ "B", "C", "D" ]

// pop: 末尾から要素を削除して取得
const poppedItem = deque.pop();
console.log(poppedItem);      // Expected Log Output : <string> "D"
console.log(deque.toArray()); // Expected Log Output : <object> [ "B", "C" ]

// 残りの要素をすべて削除
deque.shift();
deque.shift();

// isEmpty: Dequeが空かどうかを確認
console.log(deque.isEmpty()); // Expected Log Output : <boolean> true
console.log(deque.size);      // Expected Log Output : <number> 0

// 空のDequeから値を取得しようとするとundefinedが返る
console.log(deque.pop());     // Expected Log Output : <undefined> undefined
console.log(deque.first());   // Expected Log Output : <undefined> undefined
```
