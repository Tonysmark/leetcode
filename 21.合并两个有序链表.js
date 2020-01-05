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
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} linkedNode
 */

function showlinkedNode(linkedNode) {
    let tmpStr = '';
    while (linkedNode) {
        console.log('linkedNode :', linkedNode);
        tmpStr += `${linkedNode.val} -> `;
        linkedNode = linkedNode.next;
    }
    console.log(tmpStr);
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 已经排序的链表， 最小 listNode 是合并边界
    // 但由于是列表，所以不能用 length 方法
    let list = new ListNode();

    while (l1.next || l2.next) {
        if (l1.val <= l2.val) {
            showlinkedNode(l1);
            list.val = l1.val;
            list.next = l1.next;
            l1 = l1.next;
        } else {
            showlinkedNode(l2);
            list.val = l2.val;
            list.next = l2.next;
            l2 = l2.next;
        }
        console.log('list: ', showlinkedNode(list));
        list.next;
    }
};
let l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
};
let l2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
};
mergeTwoLists(l1, l2);
// mergeTwoLists(l1, l2);
// @lc code=end
