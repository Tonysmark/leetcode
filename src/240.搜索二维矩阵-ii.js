/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 不一定是方阵
    // 矩阵坑我的话
    if (matrix == null || matrix.length < 1 || matrix[0].length < 1) {
        return false;
    }
    // 矩阵不坑我
    let row = 0; // 行
    let col = matrix[0].length - 1; // 列
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] < target) {
            // 第一行最大的一个数比target还小 第一行指针向下移动
            row++;
        } else if (matrix[row][col] > target) {
            // 定位在这一行，从右往左移动列指针
            col--;
        } else {
            return true;
        }
    }
    return false;
};
// @lc code=end
