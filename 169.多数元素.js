/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let MAX = Math.floor(nums.length / 2);
    let map = nums.reduce((initMap, curr) => {
        if (curr in initMap) {
            initMap[curr]++;
        } else {
            initMap[curr] = 0;
        }
        return initMap;
    }, {});
    for (let i in map) {
        if (map[i] >= MAX) return i;
    }
};
// @lc code=end
