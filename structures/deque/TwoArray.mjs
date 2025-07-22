/** ================================================================================================
 * AXT-Studio/Algos.js - structures/deque - TwoArray.mjs
 * ------------------------------------------------------------------------------------------------
 * 両端キュー(Deque)の、"2つの配列"による実装です。
================================================================================================= */

// @ts-check

// ================================================================================================
// 実装本体
// ================================================================================================

const Deque = class Deque {
    /** @type {any[]} - 先頭側の要素を**逆順**で保持する配列 */
    #front;
    /** @type {any[]} - 末尾側の要素を**正順**で保持する配列 */
    #back;
    /**
     * Deque() コンストラクター
     * @param {any[]} array - 初期値の配列
     * @constructor
     */
    constructor(array) {
        this.#front = [];
        // arrayが与えられていたら、#backに入れておけばOK
        this.#back = Array.isArray(array) ? [...array] : [];
    }
    /**
     * #frontから#backに要素を移動する (バランス処理, プライベートメソッド)
     */
    #balance_FrontToBack() {
        // #frontにある要素を逆順にして#backに追加する
        while (this.#front.length > 0) {
            this.#back.push(this.#front.pop());
        }
    }
    /**
     * #backから#frontに要素を移動する (バランス処理, プライベートメソッド)
     */
    #balance_BackToFront() {
        // #backにある要素を逆順にして#frontに追加する
        while (this.#back.length > 0) {
            this.#front.push(this.#back.pop());
        }
    }
    /**
     * 先頭に値を挿入する
     * @param {any} value - 値
     */
    unshift(value) {
        // 先頭に値を追加する場合は、#frontにpushするだけでOK (逆順なのでpush)
        this.#front.push(value);
    }
    /**
     * 末尾に値を挿入する
     * @param {any} value - 値
     */
    push(value) {
        // 末尾に値を追加する場合は、#backにpushするだけでOK
        this.#back.push(value);
    }
    /**
     * 先頭の値を削除して返す
     * @returns {any|undefined} - 先頭の値、またはundefined (空の場合)
     */
    shift() {
        // #frontが空なら、#backから#frontに要素を移動する
        if (this.#front.length === 0) {
            this.#balance_BackToFront();
        }
        // #frontから値をpopして返す (逆順なのでpop)
        return this.#front.pop();
    }
    /**
     * 末尾の値を削除して返す
     * @returns {any|undefined} - 末尾の値、またはundefined (空の場合)
     */
    pop() {
        // #backが空なら、#frontから#backに要素を移動する
        if (this.#back.length === 0) {
            this.#balance_FrontToBack();
        }
        // #backから値をpopして返す
        return this.#back.pop();
    }
    /**
     * 先頭の値を参照する
     * @returns {any|undefined} - 先頭の値、またはundefined (空の場合)
     */
    first() {
        // #frontが空なら、#back[0]を返す
        if (this.#front.length === 0) {
            return this.#back[0];
        }
        // #frontの最後の値を返す (逆順なので最後が先頭)
        return this.#front[this.#front.length - 1];
    }
    /**
     * 末尾の値を参照する
     * @returns {any|undefined} - 末尾の値、またはundefined (空の場合)
     */
    last() {
        // #backが空なら、#front[0]を返す
        if (this.#back.length === 0) {
            return this.#front[0];
        }
        // #backの最後の値を返す
        return this.#back[this.#back.length - 1];
    }
    /**
     * Dequeが空かどうかを判定する
     * @returns {boolean} - Dequeが空ならtrue
     */
    isEmpty() {
        // #frontと#backの両方が空ならtrue
        return this.#front.length === 0 && this.#back.length === 0;
    }
    /**
     * Dequeを配列に変換する
     * @returns {any[]} - Dequeの要素を含む配列
     */
    toArray() {
        // #frontを逆順にして#backと結合した配列を返す
        return [...this.#front].reverse().concat(this.#back);
    }
    /**
     * Dequeのサイズを取得する
     * @return {number} - Dequeのサイズ
     */
    get size() {
        // #frontと#backの長さを合計して返す
        return this.#front.length + this.#back.length;
    }
};

// ================================================================================================
// ES Module Export
// ================================================================================================

export { Deque };

