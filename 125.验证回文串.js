/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start

/**
 * @param {string} word
 * @return {boolean}
 */
var isPalindrome = function(word) {
    let queue = [];
    let patter = /\w+/gi;
    word = word.toLowerCase().match(patter);
    for (let i in word) {
        queue.push(...word[i].split(''));
    }
    while (queue.length >= 0) {
        if (queue.length == 1) return true;
        if (queue.shift() === queue.pop()) {
            // 头尾相等继续循环, 直到队列就剩一个字母
            continue;
        } else {
            // 头尾不等
            return false;
        }
    }
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(''));
// isPalindrome();
// @lc code=end
