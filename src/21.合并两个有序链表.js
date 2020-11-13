/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {};
// 下面不是函数主体

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkList {
    constructor() {
        this.head = new ListNode('head');
    }
    find(element) {
        let current = this.head;
        while (current.val != element) {
            current = current.next;
        }
        return current;
    }

    insert(newElement, item) {
        let node = new ListNode(newElement);
        let current = this.find(item);
        node.next = current.next;
        current.next = node;
    }

    display() {
        let current = this.head;
        while (current.next !== null) {
            console.log(current.next.element);
            current = current.next;
        }
    }
}

let list = new LinkList();
list.insert('Conway', 'head');
list.insert('Alma', 'Conway');
list.display();
// @lc code=end
