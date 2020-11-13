/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let maxLen = m + n - 1;
    m--;
    n--;
    while (n >= 0 && m >= 0) {
        if (nums1[m] < nums2[n]) {
            nums1[maxLen] = nums2[n];
            n--;
        } else {
            nums1[maxLen] = nums1[m];
            m--;
        }
        maxLen--;
    }
    console.log(nums1);
};

merge([1], 1, [], 0); // [1]
merge([0], 0, [1], 1); // [1]
merge([2, 0], 1, [1], 1); // [1,2]
// @lc code=end
