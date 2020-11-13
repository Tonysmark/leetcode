/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
	// 多输入和相等是可以的,但是不可以存在小于
	const hashMapA = {};
	const hashMapB = {};
	let res = false;
	if (name === typed) return true;
	name.split('').forEach(e => {
		if (e in hashMapA) {
			hashMapA[e] += 1;
		} else {
			hashMapA[e] = 1;
		}
	});
	typed.split('').forEach(e => {
		if (e in hashMapB) {
			hashMapB[e] += 1;
		} else {
			hashMapB[e] = 1;
		}
	});
	console.log('hashMapA', hashMapA);
	console.log('hashMapB', hashMapB);
	for (let i in hashMapA) {
		if (hashMapA[i] <= hashMapB[i]) {
			console.log('A:', hashMapA[i], 'B', hashMapB[i], ' ', hashMapA[i] <= hashMapB[i]);
		} else {
			return false;
		}
	}
	return true;
};
console.log('res ', isLongPressedName('alex', 'aaleex'));
console.log('res ', isLongPressedName('saeed', 'ssaaedd'));
console.log('res ', isLongPressedName('kikcxmvzi', 'kiikcxxmmvvzz'));
// @lc code=end
