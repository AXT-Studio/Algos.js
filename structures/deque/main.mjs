//@ts-check

const Deque = class Deque {
    /**
     * Deque class constructor
     * @param {any[]} array - 初期化する配列
     */
    constructor(array) {
        // 配列の各要素を、前後の要素とのリンクを持ったオブジェクトに変換する
        const linkedNodes = [];
        for (let i = 0; i < array.length; i++) {
            linkedNodes[i] = {
                value: array[i],
                prev: i <= 0 ? null : linkedNodes[i - 1],
                next: i >= array.length - 1 ? null : linkedNodes[i + 1]
            };
        }
        // サイズを設定
        this.size = linkedNodes.length;
        // 先頭と末尾のノードを取得
        this.head = linkedNodes[0] || null;
        this.tail = linkedNodes[linkedNodes.length - 1] || null;
    }
    /**
     * 先頭に値を挿入します
     * @param {any} value - 先頭に挿入する値
     * @returns {void}
     */
    pushFront(value) {
        // 先頭の値を取得
        const currentHead = this.head;
        // 前後とのリンクを持てるようにオブジェクトに入れる
        const linked = {
            value,
            prev: null,
            next: currentHead,
        };
        // 元先頭ノードの前の要素にこれを入れる
        currentHead.prev = linked;
        // 先頭ノード情報を書き換え
        this.head = linked;
        // サイズを変更
        this.size++;
        // 追加によりサイズが1になった場合はtailもこれなので追加
        if (this.size === 1) {
            this.tail = linked;
        }
    }
    /**
     * 末尾に値を挿入します
     * @param {any} value - 末尾に挿入する値
     * @returns {void}
     */
    pushBack(value) {
    }
    /**
     * 先頭の値を削除し、その値を返します
     * @returns {any} - 先頭から取り出した値
     */
    popFront() {
    }
    /**
     * 末尾の値を削除し、その値を返します
     * @returns {any} - 末尾から取り出した値
     */
    popBack() {
    }
    /**
     * 先頭の値を返します
     * @returns {any} - 先頭の値
     */
    getFront() {
        return this.head;
    }
    /**
     * 末尾の値を返します
     * @returns {any} - 末尾の値
     */
    getBack() {
        return this.tail;
    }
    /**
     * i番目の値を返します
     * @param {number} i - インデックス
     * @returns {any} - i番目の値
     */
    at(i) { }
    /**
     * dequeに入っている要素数を取得します
     * @returns {number} このdequeに入っている要素の数
     */
    getSize() {
        return this.size;
    }
};
