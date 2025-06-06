class FastQueue {
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

function isBipartite(n, adj) {
    const dp = Array(n + 1).fill(-1);
    const stack = new FastQueue();
    stack.push([1, 0, -1]);
    dp[1] = 0;
    while (stack.length) {
        const [u, i, p] = stack.getLast();
        const nb = adj[u] || [];
        if (!i && p > 0) dp[u] = 1 - dp[p];
        if (i < nb.length) {
            stack.getLast()[1]++;
            const v = nb[i];
            if (dp[v] < 0) {
                stack.push([v, 0, u]);
            } else if (dp[u] === dp[v]) {
                return null;
            }
        } else {
            stack.pop();
        }
    }
    return dp;
}

function solveGraphGame(n, m, edges, queries) {
    const adj = {};
    for (const [u, v] of edges) {
        if (!adj[u]) adj[u] = [];
        if (!adj[v]) adj[v] = [];
        adj[u].push(v);
        adj[v].push(u);
    }

    const dp = isBipartite(n, adj);
    if (!dp) {
        return { winner: 'Alice', moves: Array(n).fill([1, 2]) };
    }

    const groups = [new FastQueue(), new FastQueue()];
    for (let u = 1; u <= n; u++) {
        groups[dp[u]].push(u);
    }

    const moves = [];
    for (const [a, b] of queries) {
        let u, c;
        if (a === 1 || b === 1) {
            if (groups[1].length) {
                u = groups[1].shift();
                c = 1;
            } else {
                u = groups[0].shift();
                c = a === 1 ? b : a;
            }
        } else {
            if (groups[0].length) {
                u = groups[0].shift();
                c = 2;
            } else {
                u = groups[1].shift();
                c = 3;
            }
        }
        moves.push([u, c]);
    }

    return { winner: 'Bob', moves };
}