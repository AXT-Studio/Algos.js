# structures/deque

## Overview

両端キュー(deque)は、両端から要素の追加と削除ができるデータ構造です。  
スタックとしてもキューとしても使えます。

## Usage

export文以外をコピペするか、jsDelivrなどを経由してES Moduleとしてインポートすることでも使えます。

## Methods

- `push_head(value)` - 先頭に値を挿入
    - 引数:
        - `value: any` - 挿入する値
    - 返り値: `void`
- `push_tail(value)` - 末尾に値を挿入
    - 引数:
        - `value: any` - 挿入する値
    - 返り値: `void`
- `pop_head()` - 先頭の値を削除して返す
    - 引数: なし
    - 返り値: `any` - 削除した値
- `pop_tail()` - 末尾の値を削除して返す
    - 引数: なし
    - 返り値: `any` - 削除した値
- `peek_head()` - 先頭の値を参照
    - 引数: なし
    - 返り値: `any` - 先頭の値
- `peek_tail()` - 末尾の値を参照
    - 引数: なし
    - 返り値: `any` - 末尾の値
- `is_empty()` - Dequeが空かどうかを判定
    - 引数: なし
    - 返り値: `boolean` - 空の場合はtrue
- `get_size()` - Dequeのサイズを取得
    - 引数: なし
    - 返り値: `number` - 要素数
- `to_array()` - Dequeを配列に変換
    - 引数: なし
    - 返り値: `any[]` - 変換後の配列
