/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
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
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(word) {
	let s = new Stack();
	for (let i = 0; i < word.length; i++) {
		s._push(word[i]); // s.dataStore=word.splice("")
	}
	let rword = '';
	while (s._length() > 0) {
		rword += s._pop();
	}
	if (word == rword) {
		return true;
	} else {
		return false;
	}
};
// @lc code=end
