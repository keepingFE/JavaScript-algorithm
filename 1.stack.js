class Stack {
    constructor() {
        this.items = []
    }
    // 入栈
    push(element) {
        this.items.push(element)
    }
    // 出栈
    pop() {
        return this.items.pop()
    }
    // 查看栈顶元素
    peek() {
        return this.items[this.items.length - 1]
    }
    // 判断栈是否为空
    isEmpty() {
        return this.items.length === 0
    }
    // 获取栈中元素的个数
    size() {
        return this.items.length
    }
    // toString方法
    toString() {
        return this.items.toString()
    }
}

/**
 * stack demo
 * 十进制数字转换为二进制数字
 */
function decimal2bin(number) {
    let stack = new Stack()
    let binStr = ''
    number = Number(number)
    while (number > 0) {
        // 获取余数，并且压入栈中
        stack.push(number % 2)
        // 获取整除后的结果，作为下一次运行的数字
        number = Math.floor(number / 2)
    }
    if (!stack.isEmpty()) {  // 拼接栈中的数字
        binStr += stack.pop()
    }
    return binStr
}