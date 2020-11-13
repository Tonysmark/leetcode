/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	const ROMAN = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};
	let arr = s.split('');
	console.log('arr : ', arr);
	let map = arr.map(e => ROMAN[e]);
	console.log('map : ', map);
};
console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 1 5  => 5-1
console.log(romanToInt('IVIXXVI'));
console.log(romanToInt('LVI'));
console.log(romanToInt('MCMXCIV'));
// @lc code=end
