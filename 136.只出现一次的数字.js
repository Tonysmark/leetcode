/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let arr = [];
	for (let i in nums) {
		for (let j in nums) {
			if (nums[i] == nums[j]) {
				arr.push();
			}
		}
	}
};
singleNumber([4, 1, 2, 1, 2]);
// @lc code=end
