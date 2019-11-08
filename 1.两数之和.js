/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const map = {};
	for (let i in nums) {
		const targetNum = target - nums[i];
		if (targetNum in map) return [map[targetNum], i];
		map[nums[i]] = i;
	}
};
// @lc code=end
