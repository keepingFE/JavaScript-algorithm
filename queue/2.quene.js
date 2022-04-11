/*
* 933. 最近的请求次数
* 写一个RecentCounter类来计算特定时间范围内最近的请求。
请你实现 RecentCounter 类：
RecentCounter() 初始化计数器，请求数为 0 。
int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
保证 每次对 ping 的调用都使用比之前更大的 t 值。
*
* 输入：
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]
* */
let RecentCounter = function() {
    this.queue = []; // 初始化队列
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t) // 加入队列
    while (this.queue[0] < t - 3000) { // 当小于 [t-3000, t] 区间时从队列移除；
        this.queue.shift();
    }
    return this.queue.length; // 返回符合队列个数；
};
