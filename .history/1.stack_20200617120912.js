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
        
    }
    // toString方法
    toString() {

    }
}