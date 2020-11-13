/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
class Stack {
	dataStore;
	top;

	constructor() {
		this.dataStore = [];
		this.top = 0;
	}

	_push(ele) {
		this.dataStore[this.top++] = ele;
	}
	_pop = () => this.dataStore[--this.top];
	_peek = () => this.dataStore[this.top - 1];
	_length = () => this.top;
	_clear = () => {
		this.top = 0;
	};
}
var isPalindrome = function(word) {
	let s = new Stack();
	for (let i = 0; i < word.length; i++) {
		s._push(word[i]); // s.dataStore=word.splice("")
	}
	let rword = '';
	while (s._length() > 0) {
		rword += s._pop();
	}
	if (word == rword) return true;
	return false;
};
// @lc code=end
