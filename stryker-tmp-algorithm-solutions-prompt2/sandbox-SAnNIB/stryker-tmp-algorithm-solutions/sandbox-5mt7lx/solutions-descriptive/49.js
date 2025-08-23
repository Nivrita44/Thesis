// @ts-nocheck
// 
class Queue {
    constructor() {
        this.map = {};
        this.first = 0;
        this.last = -1;
    }
    push(...args) {
        let i = 0;
        if (!this.length) {
            this.first = this.last = 0;
            this.map[this.first] = args[i++];
        }
        for (; i < args.length; i++) {
            this.map[++this.last] = args[i];
        }
    }
    unshift(...args) {
        let i = 0;
        if (!this.length) {
            this.first = this.last = 0;
            this.map[this.first] = args[i++];
        }
        for (; i < args.length; i++) {
            this.map[--this.first] = args[i];
        }
    }
    pop() {
        const r = this.map[this.last];
        delete this.map[this.last];
        this.last--;
        return r;
    }
    shift() {
        const r = this.map[this.first];
        delete this.map[this.first];
        this.first++;
        return r;
    }
    get length() {
        if (this.first > this.last) return 0;
        return this.last - this.first + 1;
    }
    get(x) {
        return this.map[this.first + x];
    }
    getLast() {
        return this.map[this.last];
    }
    forEach(fn) {
        for (let i = this.first; i <= this.last; i++) {
            const r = fn(this.map[i], i - this.first);
            if (r === false) break;
        }
    }
}

export function solve(input) {
    const lines = input.trim().split('\n');
    let idx = 0;
    const results = [];

    while (idx < lines.length) {
        const [n, m] = lines[idx++].split(' ').map(Number);
        const adj = {};

        for (let i = 0; i < m; i++) {
            const [a, b] = lines[idx++].split(' ').map(Number);
            adj[a] = adj[a] || [];
            adj[b] = adj[b] || [];
            adj[a].push(b);
            adj[b].push(a);
        }

        const dfsn = Array(n + 1);
        const low = Array(n + 1);
        const fa = Array(n + 1);
        let cnt = 0;
        const sz = Array(n + 1).fill(1);
        dfs2(1);
        let total = (n * (n - 1)) / 2;
        dfs(1);
        results.push(total);

        function dfs2(r) {
            const visited = Array(n + 1);
            const stack = new Queue();
            stack.push([r, 0, -1]);
            while (stack.length) {
                const [u, i, p] = stack.getLast();
                visited[u] = 1;

                const nb = adj[u] || [];
                if (i < nb.length) {
                    stack.getLast()[1]++;
                    const v = nb[i];
                    if (!visited[v]) {
                        stack.push([v, 0, u]);
                    }
                } else {
                    stack.pop();
                    if (p > 0) {
                        sz[p] += sz[u];
                    }
                }
            }
        }

        function dfs(r) {
            const stack = new Queue();
            stack.push([r, 0, -1]);
            let max = 0;
            while (stack.length) {
                const [u, i, p] = stack.getLast();
                const nb = adj[u] || [];
                if (!i) {
                    low[u] = dfsn[u] = ++cnt;
                }
                if (i < nb.length) {
                    stack.getLast()[1]++;
                    const v = nb[i];
                    if (!dfsn[v]) {
                        fa[v] = u;
                        stack.push([v, 0, u]);
                    } else if (fa[u] !== v) {
                        low[u] = Math.min(low[u], dfsn[v]);
                    }
                } else {
                    stack.pop();
                    if (p > 0) {
                        low[p] = Math.min(low[p], low[u]);
                        if (low[u] > dfsn[p]) {
                            max = Math.max(max, sz[u] * (n - sz[u]));
                        }
                    }
                }
            }
            total -= max;
        }
    }

    return results;
}

// function testing_test() {
//     const input = `
// 2 1
// 1 2
// 3 3
// 1 2
// 2 3
// 1 3
// 5 5
// 1 2
// 1 3
// 3 4
// 4 5
// 5 3
// 6 7
// 1 2
// 1 3
// 2 3
// 3 4
// 4 5
// 4 6
// 5 6
// 5 5
// 1 2
// 1 3
// 2 3
// 2 4
// 3 5
// 10 12
// 1 2
// 1 3
// 2 3
// 2 4
// 4 5
// 5 6
// 6 7
// 7 4
// 3 8
// 8 9
// 9 10
// 10 8
// `.trim();

//     const expectedOutput = [0, 3, 4, 6, 6, 21];
//     const actualOutput = solve(input);
//     console.log("✅ Output:", actualOutput);
//     console.log("✅ Expected:", expectedOutput);
//     console.log(actualOutput.join('\n') === expectedOutput.join('\n') ? "✅ testing_test Passed" : "❌ testing_test Failed");
// }

// testing_test();