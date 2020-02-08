/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const tempArray = [...nums1, ...nums2];
    tempArray.sort();
    let len = tempArray.length;
    let left = Math.floor(len / 2);
    if (len % 2 == 0) {
        return (tempArray[left - 1] + tempArray[left]) / 2;
    } else {
        return tempArray[left];
    }
};
// TODO
let res = findMedianSortedArrays([3], [-2, -1]);
console.log('res :', res);
// @lc code=end
