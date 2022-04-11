/*
给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
*
* 示例
* 输入: "()"
输出: True
* */
function validBracket(str) {
    const stack = []
    for (let i = 0; i < str.length; i++) {
        const current  = str[i]
        if (current === '(' || current === '[' || current === '{') {
            stack.push(current)
        } else {
           const tail = stack[stack.length-1]
           if (
               (tail === '(' && current === ')') ||
               (tail === '[' && current === ']') ||
               (tail === '{' && current === '}')
            ) {
              stack.pop()
           } else {
              return false
           }
        }
    }
    return stack.length === 0
}