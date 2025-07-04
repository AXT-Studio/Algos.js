// @ts-check

/**
 * ソートされた配列に対して二分探索を行い、結果のindexを返す。
 * @param {any[]} array - compareFnによってソートされた配列
 * @param {any} target - 探索対象の値
 * @param {(a: any, b: any) => number} [compareFn] - 比較関数。a < b の場合は負の値、a > b の場合は正の値、等しい場合は 0 を返す。
 * @param {boolean} [needEquality = false] - trueにした場合、配列にtargetと等しいと判定できる要素がない場合はundefinedを返すようになる。
 * @returns {number | undefined} - 探したい要素"以下"と判定されるもののうち最も後ろにある要素のindex。(arrayの全要素がtargetより大きい場合は-1、needEqualityがtrueかつtargetと等しい要素がない場合はundefined。)
 */
const bin_findIndexLE = (array, target, compareFn = ((a, b) => { const [A, B] = [String(a), String(b)]; return (A < B) ? -1 : (A > B) ? 1 : 0 }), needEquality = false) => {
    if (array.length === 0) {
        return undefined;
    }

    let low = 0;
    let high = array.length - 1;
    let result = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (compareFn(array[mid], target) <= 0) {
            result = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if (needEquality && result !== -1 && compareFn(array[result], target) !== 0) {
        return undefined;
    }

    return result;
}

/**
 * ソートされた配列に対して二分探索を行い、結果の要素を返す。
 * @param {any[]} array - compareFnによってソートされた配列
 * @param {any} target - 探索対象の値
 * @param {(a: any, b: any) => number} [compareFn] - 比較関数。a < b の場合は負の値、a > b の場合は正の値、等しい場合は 0 を返す。
 * @param {boolean} [needEquality = false] - trueにした場合、配列にtargetと等しいと判定できる要素がない場合はundefinedを返すようになる。
 * @returns {any | undefined} - 探したい要素"以下"と判定されるもののうち最も後ろにある要素そのもの。(arrayの全要素がtargetより大きい場合はundefined、needEqualityがtrueかつtargetと等しい要素がない場合はundefined。)
 */
const bin_findLE = (array, target, compareFn = ((a, b) => { const [A, B] = [String(a), String(b)]; return (A < B) ? -1 : (A > B) ? 1 : 0 }), needEquality = false) => {
    if (array.length === 0) {
        return undefined;
    }

    let low = 0;
    let high = array.length - 1;
    let result = undefined;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (compareFn(array[mid], target) <= 0) {
            result = array[mid];
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if (needEquality && result !== undefined && compareFn(result, target) !== 0) {
        return undefined;
    }

    return result;
}

/** @description ES Moduleとしてexport */
export { bin_findLE, bin_findIndexLE };
