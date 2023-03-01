class Stack {
    constructor() {
        this.items = [] // 定义栈存储
    }

    // 入栈
    push(element) {
        this.items.push(element)
    }

    // 出栈
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop()
        }

    }

    // 查看栈顶元素
    peek() {
        return this.items[this.items.length - 1]
    }

    // 判断栈是否为空
    isEmpty() {
        return this.items.length === 0
    }

    // 获取栈元素个数
    size() {
        return this.items.length
    }

    // 清空栈
    clear() {
        this.items = []
    }

    // toString 方法
    toString() {
        return this.items.toString()
    }
}