# algorithms/UniqueIDs

## Overview

ユニーク(とみなしてよい)IDを生成するメソッドを提供します。

## Usage

export文以外をコピペするか、jsDelivrなどを経由してES Moduleとしてインポートすることでも使えます。

```js
import { UniqueIDs } from 'https://cdn.jsdelivr.net/gh/AXT-Studio/Algos.js/algorithms/UniqueIDs/main.mjs';
```

## Methods

- `UniqueIDs.UUIDv7(timestamp)` - UUIDv7を生成します。
    - 引数:
        - `timestamp: number` - タイムスタンプ ("1970年1月1日 0:00 UTC"からのミリ秒単位)
            - 省略可能。省略した場合は現在の日付時刻が使用されます。
    - 返り値: `string` - 生成されたUUIDv7文字列

## Time Complexity

| Method | Time Complexity | Appendix |
|--------|-----------------|----------|
| `UniqueIDs.UUIDv7()` | O(1) |  |

## Example

```js
import { UniqueIDs } from 'https://cdn.jsdelivr.net/gh/AXT-Studio/Algos.js/algorithms/UniqueIDs/main.mjs';

const uuid_v7 = UniqueIDs.UUIDv7();
console.log(uuid_v7);
```
