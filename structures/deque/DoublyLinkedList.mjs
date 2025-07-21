/** ================================================================================================
 * AXT_AyaKoto/Algos.js - structures/deque - DoublyLinkedList.mjs
 * ------------------------------------------------------------------------------------------------
 * 両端キュー(Deque)の、双方向連結リストによる実装です。
================================================================================================= */

// @ts-check

// ================================================================================================
// JSDoc
// ================================================================================================

/**
 * @typedef {Object} DequeNode - Dequeの各要素
 * @property {any} value - 値
 * @property {DequeNode|null} prev - 前の要素への参照 (先頭要素ではnull)
 * @property {DequeNode|null} next - 次の要素への参照 (末尾要素ではnull)
 */

// ================================================================================================
// 実装本体
// ================================================================================================

const Deque = class Deque {
    /** @type {DequeNode|null} - 先頭の要素 */
    #head;
    /** @type {DequeNode|null} - 末尾の要素 */
    #tail;
    /** @type {number} - 要素数 */
    #size;
    /**
     * Deque() コンストラクター
     * @param {any[]} array - 初期値の配列
     * @constructor
     */
    constructor(array) {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
        // arrayが与えられていたら、for...ofループで末尾に入れていく
        if (Array.isArray(array)) {
            for (const element of array) {
                this.push(element);
            }
        }
    }
    /**
     * 先頭に値を挿入する
     * @param {any} value - 値
     */
    unshift(value) {
        /** @type {DequeNode} - 追加する値 */
        const newNode = {
            value,
            prev: null,
            next: this.#head,
        };
        if (this.#head === null) {
            // 先頭がnull(空の状態)なら、headとtailにnewNodeを設定
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            // 先頭がnullでないなら、現行#headの前にnewNodeを設定してnewNodeを#headに設定
            this.#head.prev = newNode;
            this.#head = newNode;
        }
        this.#size++;
    }
    /**
     * 末尾に値を挿入する
     * @param {any} value - 値
     */
    push(value) {
        /** @type {DequeNode} - 追加する値 */
        const newNode = {
            value,
            prev: this.#tail,
            next: null,
        };
        if (this.#tail === null) {
            // 末尾がnull(空の状態)なら、headとtailにnewNodeを設定
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            // 末尾がnullでないなら、現行#tailの後にnewNodeを設定してnewNodeを#tailに設定
            this.#tail.next = newNode;
            this.#tail = newNode;
        }
        this.#size++;
    }
    /**
     * 先頭の値を削除して返す
     * @returns {any|undefined} - 先頭の値、またはundefined (空の場合)
     */
    shift() {
        if (this.#head === null) {
            // 先頭がnullなら、空なのでundefinedを返す
            return undefined;
        }
        // 先頭の値を取得して、#headを次の要素に更新
        const value = this.#head.value;
        this.#head = this.#head.next;
        // 新しい#headがnullでない場合は、新しい#headのprevをnullに設定(先頭になったので)
        if (this.#head !== null) {
            this.#head.prev = null;
        } else {
            // #headがnullになった場合は、#tailもnullにする
            this.#tail = null;
        }
        this.#size--;
        return value;
    }
    /**
     * 末尾の値を削除して返す
     * @returns {any|undefined} - 末尾の値、またはundefined (空の場合)
     */
    pop() {
        if (this.#tail === null) {
            // 末尾がnullなら、空なのでundefinedを返す
            return undefined;
        }
        // 末尾の値を取得して、#tailを前の要素に更新
        const value = this.#tail.value;
        this.#tail = this.#tail.prev;
        // 新しい#tailがnullでない場合は、新しい#tailのnextをnullに設定(末尾になったので)
        if (this.#tail !== null) {
            this.#tail.next = null;
        } else {
            // #tailがnullになった場合は、#headもnullにする
            this.#head = null;
        }
        this.#size--;
        return value;
    }
    /**
     * 先頭の値を参照する
     * @returns {any|undefined} - 先頭の値、またはundefined (空の場合)
     */
    first() {
        // 先頭要素の値を返す (Dequeが空の場合はundefinedを返す)
        return this.#head !== null ? this.#head.value : undefined;
    }
    /**
     * 末尾の値を参照する
     * @returns {any|undefined} - 末尾の値、またはundefined (空の場合)
     */
    last() {
        // やるだけ
        return this.#tail !== null ? this.#tail.value : undefined;
    }
    /**
     * Dequeが空かどうかを判定する
     * @returns {boolean} - Dequeが空ならtrue
     */
    isEmpty() {
        // #sizeが0なら空
        return this.#size === 0;
    }
    /**
     * Dequeを配列に変換する
     * @returns {any[]} - Dequeの要素を含む配列
     */
    toArray() {
        const result = [];
        let current = this.#head;
        // 1個ずつ取り出してpushしていく
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
    /**
     * Dequeのサイズを取得する
     * @return {number} - Dequeのサイズ
     */
    get size() {
        // #sizeがサイズになるように事前計算しているので、そのまま返す
        return this.#size;
    }
};

export { Deque };
