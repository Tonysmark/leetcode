/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let i in s) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            stack.push(s[i]);
        } else {
            if (stack.length == 0) return false;
            if (s[i] == ')' && stack.pop() !== '(') return false;
            if (s[i] == ']' && stack.pop() !== '[') return false;
            if (s[i] == '}' && stack.pop() !== '{') return false;
        }
    }
    return stack.length == 0;
};
console.log(isValid('({)}'));
console.log(isValid('{()}'));
// @lc code=end
