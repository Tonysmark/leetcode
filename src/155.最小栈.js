/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    let index = 0;
    let stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.index == 0) {
        // 是首次入栈
        this.stack[this.index++] = x;
    } else {
        // 栈底有一个元素,而且还很大
        if (this.stack[this.index - 1] < x) {
            let tmp = this.stack[this.index - 1];
            this.pop();
            this.stack[this.index++] = x;
            this.stack[this.index++] = tmp;
        } else {
            this.stack[this.index++] = x;
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack[--this.index];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.index - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // 常数时间内找到最小数，那么就要在push上做手脚，
    // 如果入栈之后的元素就是从大到小依次排列，那么栈顶就是最小元素
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
