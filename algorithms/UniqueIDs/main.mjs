/** ================================================================================================
 * AXT-Studio/Algos.js - algorithms/UniqueIDs - main.mjs
 * ------------------------------------------------------------------------------------------------
 * ユニーク(とみなしてよい)IDを生成するメソッドを提供します。
================================================================================================= */

// @ts-check

// ================================================================================================
// 実装本体
// ================================================================================================

const UniqueIDs = class {
    /**
     * UUIDv7を生成します。
     * @param {number} [timestamp] - UNIXタイムスタンプ(ミリ秒単位)。省略すると現在の時刻が使用されます。
     * @returns {string} - 生成されたUUIDv7文字列
     */
    static UUIDv7(timestamp = Date.now()) {
        if (typeof timestamp !== 'number' || !Number.isInteger(timestamp)) {
            throw new TypeError('Timestamp must be an integer.');
        }
        if (timestamp < 0 || timestamp > 0xFFFFFFFFFFFF) {
            throw new RangeError('Timestamp must be a non-negative integer not greater than 281474976710655 (48 bits).');
        }

        // 1. 128ビットのランダムな値を用意
        const randomBytes = new Uint8Array(16);
        crypto.getRandomValues(randomBytes);

        // DataViewを使うと特定のバイト位置への書き込みがしやすい
        const dataView = new DataView(randomBytes.buffer);

        // 2. 先頭48ビットをタイムスタンプで上書き (BigIntで64bit整数として書き込む)
        // BigInt(timestamp) << 16n で、64ビット領域のうち上位48ビットにタイムスタンプを配置
        dataView.setBigUint64(0, (BigInt(timestamp) << 16n));

        // 3. バージョン(7)とバリアント(2)を設定
        // ver: 7 (0b0111)
        // 48-51ビット目 (6バイト目の上位4ビット)
        randomBytes[6] = (randomBytes[6] & 0x0f) | 0x70;

        // var: 2 (0b10)
        // 64-65ビット目 (8バイト目の上位2ビット)
        randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80;

        // 4. バイト配列を16進数文字列に変換
        // 各バイトを2桁の16進数に変換し、結合する
        const hex = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');

        // 5. 8-4-4-4-12形式に整形
        return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
    }
};

// ================================================================================================

export { UniqueIDs };
