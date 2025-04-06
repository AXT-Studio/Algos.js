# structures/deque

## Overview

両端キュー(deque)は、両端から要素の追加と削除ができるデータ構造です。  
スタックとしてもキューとしても使えます。

## Usage

export文以外をコピペするか、jsDelivrなどを経由してES Moduleとしてインポートすることでも使えます。

## Methods

## `Deque(array): Deque`

- `Deque`クラスのインスタンスを生成します
- 引数
    - `array`: 初期化する配列 (省略可能)
        - 疎配列の空のスロットルは、`undefined`として扱われます

### `Deque.prototype.pushFront(value: any): void`

- 先頭に値を挿入します
- 計算量 : O(1)
- 引数
    - `value`: 追加する値
- 戻り値
    - `undefined`

### `Deque.prototype.pushBack(value: any): void`

- 末尾に値を挿入します
- 計算量 : O(1)
- 引数
    - `value`: 追加する値
- 戻り値
    - `undefined`

### `Deque.prototype.popFront(): any`

- 先頭の値を削除し、その値を返します
- 計算量 : O(1)
- 引数
    - なし
- 戻り値
    - 先頭の値
    - 先頭が空の場合は`undefined`

### `Deque.prototype.popBack(): any`

- 末尾の値を削除し、その値を返します
- 計算量 : O(1)
- 引数
    - なし
- 戻り値
    - 末尾の値
    - 末尾が空の場合は`undefined`

### `Deque.prototype.getFront(): any`

- 先頭の値を返します (削除は行いません)
- 計算量 : O(1)
- 引数
    - なし
- 戻り値
    - 先頭の値
    - 先頭が空の場合は`undefined`

### `Deque.prototype.getBack(): any`

- 末尾の値を返します (削除は行いません)
- 計算量 : O(1)
- 引数
    - なし
- 戻り値
    - 末尾の値
    - 末尾が空の場合は`undefined`

### `Deque.prototype.at(index: number): any`

- 指定したインデックスの値を返します (削除は行いません)
- 計算量 : O(n)
- 引数
    - `index`: インデックス
- 戻り値
    - 指定したインデックスの値
    - インデックスが範囲外の場合は`undefined`

### `Deque.prototype.getSize(): number`

- 要素数を返します
- 計算量 : O(1)
- 引数
    - なし
- 戻り値
    - 要素数
