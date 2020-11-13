/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 先过滤在新数组中找到数据然后拿着数据回到原数组找下标
    const result = nums.reduce((i1, i2, index) => {
        const i = target - i2;
        if (index === 1) {
            i1 = [i1];
        }
        const index2 = i1.indexOf(i);
        if (index2 !== -1) {
            nums.length = index + 1;
            return [index2, index];
        }
        i1.push(i2);
        return i1;
    });
    return result;
};
// console.log(twoSum([0, 4, 3, 0], 0));
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 0, 10, 15], 10));

// @lc code=end
