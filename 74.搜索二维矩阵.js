/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 观察矩阵不难得出，矩阵从左至右从上到下依次递增
    // 首先从矩阵的右上角开始找，但问题是 m*n
    // 处理奇葩问题
    if (matrix == null || matrix.length < 1 || matrix[0].length < 1) {
        return false;
    }
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] < target) {
            // 第一行最大的数都比目标小
            row++;
        } else if (matrix[row][col] > target) {
            // 这一行最大的数比目标大 说明就在我这里
            col--;
        } else {
            // 找到了
            return true;
        }
    }
    return false;
};
// @lc code=end
