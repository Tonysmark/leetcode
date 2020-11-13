/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = digits => (BigInt(digits.join('')) + 1n).toString().split('');

// @lc code=end
