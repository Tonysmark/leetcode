/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const arr_prime = [];
    for (let i = 2; i < n; i++) {
        if (i % 2 !== 0) {
            arr_prime.push(i);
        }
    }
    return arr_prime;
};
console.log('countPrimes() : ', countPrimes(10));
// @lc code=end
