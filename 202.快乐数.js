/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = n => {
	if (n == 1) return true;
	else if (n == 2 || n == 4) return false;
	let res = n
		.toString()
		.split('')
		.reduce((acc, arr) => (acc += arr * arr), 0);
	return isHappy(res);
};
console.log(isHappy(2));
// @lc code=end
