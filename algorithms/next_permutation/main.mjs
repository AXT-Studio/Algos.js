/** ================================================================================================
 * AXT-Studio/Algos.js - algorithms/next_permutation - main.mjs
 * ------------------------------------------------------------------------------------------------
 * 配列の(辞書順で)次の順列を生成するアルゴリズムです。
================================================================================================= */

// @ts-check

/**
 * 呼び出されるたびに配列の次の順列を返すジェネレーター関数。`for...of`構文で回すことで順列全列挙を行うことができます。
 * @generator
 * @param {any[]} arr - 配列
 * @yields {any[]} - 配列の各要素を並び替えたもの。呼び出されるたびに異なる並び順を辞書順に返し、return(ジェネレーター終了)までにすべての並び方を返します。
 */
const next_permutation = function* (arr) {
    // Create a sorted copy of the input array to start from the first permutation.
    const a = [...arr].sort((x, y) => {
        if (typeof x === 'string' && typeof y === 'string') {
            return x.localeCompare(y);
        }
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
    });

    while (true) {
        yield [...a]; // Yield a copy of the current permutation.

        // 1. Find the largest index i such that a[i] < a[i + 1]
        let i = a.length - 2;
        while (i >= 0 && a[i] >= a[i + 1]) {
            i--;
        }

        // If no such index exists, the permutation is the last permutation.
        if (i < 0) {
            return;
        }

        // 2. Find the largest index j > i such that a[i] < a[j]
        let j = a.length - 1;
        while (a[i] >= a[j]) {
            j--;
        }

        // 3. Swap the value of a[i] with that of a[j]
        [a[i], a[j]] = [a[j], a[i]];

        // 4. Reverse the sequence from a[i + 1] up to and including the final element.
        let l = i + 1;
        let r = a.length - 1;
        while (l < r) {
            [a[l], a[r]] = [a[r], a[l]];
            l++;
            r--;
        }
    }
};

// ================================================================================================
// ES Module Export
// ================================================================================================

export { next_permutation };
