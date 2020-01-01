/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};

    map = nums.reduce((time, name) => {
        if (name in time) {
            time[name]++;
        } else {
            time[name] = 0;
        }
        return time;
    }, {});

    for (let i in map) {
        if (map[i] == 0) return i;
    }
};

// @lc code=end
