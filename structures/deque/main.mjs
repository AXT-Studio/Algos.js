//@ts-check

/**
 * @typedef {Object} DequeNode - Dequeの各要素
 * @property {any} value - 値
 * @property {DequeNode|null} prev - 前の要素への参照
 * @property {DequeNode|null} next - 次の要素への参照
 */
/**
 * @typedef {Object} Deque - Dequeのクラス
 * @property {DequeNode|null} head - 先頭の要素
 * @property {DequeNode|null} tail - 末尾の要素
 * @property {number} size - 要素数
 * @property {(value: any) => void} push_head - 先頭に値を挿入するメソッド
 * @property {(value: any) => void} push_tail - 末尾に値を挿入するメソッド
 * @property {() => any} pop_head - 先頭の値を削除して返すメソッド
 * @property {() => any} pop_tail - 末尾の値を削除して返すメソッド
 * @property {() => any} peek_head - 先頭の値を参照するメソッド
 * @property {() => any} peek_tail - 末尾の値を参照するメソッド
 * @property {() => boolean} is_empty - Dequeが空かどうかを判定するメソッド
 * @property {() => number} get_size - Dequeのサイズを取得するメソッド
 * @property {() => any[]} to_array - Dequeを配列に変換するメソッド
 */

const Deque = class Deque {
    /**
     * Deque() コンストラクター
     */
    constructor() {
        /** @type {DequeNode|null} */
        this.head = null;
        /** @type {DequeNode|null} */
        this.tail = null;
        /** @type {number} */
        this.size = 0;
    }
    /**
     * 先頭に値を挿入するメソッド
     * @param {any} value - 値
     */
    push_head(value) {
        /** @type {DequeNode} - 追加する値 */
        const newNode = {
            value,
            prev: null,
            next: this.head,
        };
        if (this.head != null) {
            this.head.prev = newNode;
        }
        this.head = newNode;
        if (this.tail == null) {
            this.tail = newNode;
        }
        this.size++;
    }
    /**
     * 末尾に値を挿入するメソッド
     * @param {any} value - 値
     */
    push_tail(value) {
        /** @type {DequeNode} - 追加する値 */
        const newNode = {
            value,
            prev: this.tail,
            next: null,
        };
        if (this.tail != null) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (this.head == null) {
            this.head = newNode;
        }
        this.size++;
    }
    /**
     * 先頭の値を削除して返すメソッド
     * @returns {any} - 先頭の値
     */
    pop_head() {
        if (this.head == null) {
            return undefined;
        }
        const value = this.head.value;
        this.head = this.head.next;
        if (this.head != null) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.size--;
        return value;
    }
    /**
     * 末尾の値を削除して返すメソッド
     * @returns {any} - 末尾の値
     */
    pop_tail() {
        if (this.tail == null) {
            return undefined;
        }
        const value = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail != null) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.size--;
        return value;
    }
    /**
     * 先頭の値を参照するメソッド
     * @returns {any} - 先頭の値
     */
    peek_head() {
        return this.head != null ? this.head.value : undefined;
    }
    /**
     * 末尾の値を参照するメソッド
     * @returns {any} - 末尾の値
     */
    peek_tail() {
        return this.tail != null ? this.tail.value : undefined;
    }
    /**
     * Dequeが空かどうかを判定するメソッド
     * @returns {boolean} - Dequeが空ならtrue
     */
    is_empty() {
        return this.size === 0;
    }
    /**
     * Dequeのサイズを取得するメソッド
     * @returns {number} - Dequeのサイズ
     */
    get_size() {
        return this.size;
    }
    /**
     * Dequeを配列に変換するメソッド
     * @returns {any[]} - Dequeを配列に変換したもの
     */
    to_array() {
        const result = [];
        let currentNode = this.head;
        while (currentNode != null) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    }
};
