/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */

function deleteDuplicates(head: ListNode) {}

console.log(
	'deleteDup1 : ',
	deleteDuplicates({
		val: 1,
		next: {
			val: 1,
			next: { val: 2, next: null }
		}
	})
);
console.log(
	'deleteDup2 : ',
	deleteDuplicates({
		val: 1,
		next: {
			val: 1,
			next: {
				val: 2,
				next: {
					val: 3,
					next: {
						val: 3,
						next: null
					}
				}
			}
		}
	})
);
console.log(
	'deleteDup3 : ',
	deleteDuplicates({
		val: 1,
		next: {
			val: 3,
			next: {
				val: 3,
				next: {
					val: 1,
					next: null
				}
			}
		}
	})
);

// @lc code=end
interface ListNode {
	val: number;
	next: ListNode | null;
}
