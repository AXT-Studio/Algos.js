// @ts-check

/**
 * @param {any[]} array - 一定の法則に従って昇順にソートされた配列
 * @param {(a: any, b: any) => number} compare - 比較関数。a < b の場合は負の値、a > b の場合は正の値、等しい場合は 0 を返す。
 * @param {any} target - 探索対象の値
 * @param {boolean} [needEquality = false] - trueにした場合、配列にtargetと等しいと判定できる要素がない場合はundefinedを返すようになる。
 * @returns {number | undefined} - 探したい要素"以下"と判定されるもののうち最も後ろにある要素のindex。(arrayのすべての要素がtargetより大きい場合は-1を返す。needEqualityがtrueの場合、targetと等しい要素がない場合はundefinedを返す。)
 */
const binSearch = (array, compare, target, needEquality = false) => {
    let ans = -1;
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        if (compare(array[mid], target) <= 0) {
            ans = mid;
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }

    if (needEquality) {
        if (ans === -1 || compare(array[ans], target) !== 0) {
            return undefined;
        }
    }

    return ans;
}

/** @description ES Moduleとしてexport */
export { binSearch };
