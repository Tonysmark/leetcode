/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let len = strs.length;
    if (len == 0) return '';
    strs.sort();
    let first = strs[0];
    let last = strs[len - 1];
    let prefix = '';
    let limi = Math.min(first.length, last.length); // 以最小为界限
    for (let i = 0; i < limi; i++) {
        // 这样就是站在一个大的范围内遍历
        if (first[i] == last[i]) {
            prefix += first[i];
        } else {
            break;
        }
    }
    return prefix;
};
// @lc code=end
