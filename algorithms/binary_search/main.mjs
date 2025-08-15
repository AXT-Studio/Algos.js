/** ================================================================================================
 * AXT-Studio/Algos.js - algorithms/binary_search - main.mjs
 * ------------------------------------------------------------------------------------------------
 * ソート済みの配列に対して二分探索を行うアルゴリズムです。
================================================================================================= */

// @ts-check

// --------------------------------------------------------------------------------
// 比較関数
// --------------------------------------------------------------------------------

/** @type {(a: any, b: any) => number} - Array#sort()でcompareFnを指定しなかったときのデフォルトの挙動 */
const DEFAULT_COMPARE_FN = (a, b) => {
    const [A, B] = [String(a), String(b)];
    return (A < B) ? -1 : (A > B) ? 1 : 0
};

// --------------------------------------------------------------------------------
// 本体
// --------------------------------------------------------------------------------

/**
 * 配列内に`target`が存在するかどうかを判定します。
 * @param {any[]} array - ソート済みの配列
 * @param {any} target - 探索する値
 * @param {(a: any, b: any) => number} [compareFn] - 比較関数。指定しなかった場合のデフォルト値はArray#sort()でのデフォルトの挙動と同じ。
 * @returns {boolean} `target`が`array`に存在する場合は`true`、存在しない場合は`false`
 */
const binary_search = (array, target, compareFn = DEFAULT_COMPARE_FN) => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const cmp = compareFn(array[mid], target);

        if (cmp === 0) return true;
        if (cmp < 0) low = mid + 1;
        else high = mid - 1;
    }

    return false;
};

/**
 * 配列内で`target`以上の最小のインデックスを返します。
 *
 * @param {any[]} array - ソート済みの配列
 * @param {any} target - 探索する値
 * @param {(a: any, b: any) => number} [compareFn] - 比較関数。指定しなかった場合のデフォルト値はArray#sort()でのデフォルトの挙動と同じ。
 * @returns {number} `target`以上の最小のインデックス。`array`内に`target`以上の要素が存在しない場合は`array.length`を返します。
 */
const lower_bound = (array, target, compareFn = DEFAULT_COMPARE_FN) => {
    let low = 0;
    let high = array.length;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const cmp = compareFn(array[mid], target);

        if (cmp < 0) low = mid + 1;
        else high = mid;
    }

    return low;
};

/**
 * 配列内で`target`より大きい最小のインデックスを返します。
 *
 * @param {any[]} array - ソート済みの配列
 * @param {any} target - 探索する値
 * @param {(a: any, b: any) => number} [compareFn] - 比較関数。指定しなかった場合のデフォルト値はArray#sort()でのデフォルトの挙動と同じ。
 * @returns {number} `target`より大きい最小のインデックス。`array`内に`target`より大きい要素が存在しない場合は`array.length`を返します。
 */
const upper_bound = (array, target, compareFn = DEFAULT_COMPARE_FN) => {
    let low = 0;
    let high = array.length;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const cmp = compareFn(array[mid], target);

        if (cmp <= 0) low = mid + 1;
        else high = mid;
    }

    return low;
};

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export {
    binary_search,
    lower_bound,
    upper_bound
};
