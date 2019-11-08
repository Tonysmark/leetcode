/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	return s
		.trimStart()
		.trimEnd()
		.split(' ')
		.pop().length;
};
console.log(lengthOfLastWord('a  '));
console.log(lengthOfLastWord(' a'));
console.log(lengthOfLastWord('hello world'));
// @lc code=end
