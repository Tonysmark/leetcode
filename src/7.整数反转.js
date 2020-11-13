/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	const MAX = Math.pow(2, 31) - 1;
	const MIN = Math.pow(-2, 31);
	if (x > 0) {
		let rev = x
			.toString()
			.split('')
			.reverse()
			.join('');
		if (+rev > MAX) return 0;
		return +rev;
	} else {
		let abs_x = Math.abs(x)
			.toString()
			.split('')
			.reverse()
			.join('');
		if (-abs_x < MIN) return 0;
		return -abs_x;
	}
};
// @lc code=end
