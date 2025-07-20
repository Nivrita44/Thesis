class FastQueue {
    constructor() {
        this.map = {}
        this.first = 0
        this.last = -1
    }
    push(...args) {
        let i = 0
        if (!this.length) {
            this.first = this.last = 0
            this.map[this.first] = args[i++]
        }
        for (; i < args.length; i++) {
            this.map[++this.last] = args[i]
        }
    }
    pop() {
        const r = this.map[this.last]
        delete this.map[this.last]
        this.last--
            return r
    }
    shift() {
        const r = this.map[this.first]
        delete this.map[this.first]
        this.first++
            return r
    }
    get length() {
        if (this.first > this.last) return 0
        return this.last - this.first + 1
    }
    getLast() {
        return this.map[this.last]
    }
}

export function solve(cases) {
    const results = []

    for (const { n, m, edges, queries }
        of cases) {
        const adj = {}
        for (const [u, v] of edges) {
            adj[u] = adj[u] || []
            adj[v] = adj[v] || []
            adj[u].push(v)
            adj[v].push(u)
        }

        const dp = Array(n + 1).fill(-1)
        const ok = isBipartite(1)

        if (!ok) {
            results.push("Alice")
            for (const [a, b] of queries) {
                results.push(`${a} ${b}`)
            }
        } else {
            results.push("Bob")
            const gs = [new FastQueue(), new FastQueue()]
            for (let u = 1; u <= n; u++) {
                gs[dp[u]].push(u)
            }
            for (const [a, b] of queries) {
                let u, c
                if (a === 1 || b === 1) {
                    if (gs[1].length) {
                        u = gs[1].shift()
                        c = 1
                    } else {
                        u = gs[0].shift()
                        c = (a === 1 ? b : a)
                    }
                } else {
                    if (gs[0].length) {
                        u = gs[0].shift()
                        c = 2
                    } else {
                        u = gs[1].shift()
                        c = 3
                    }
                }
                results.push(`${u} ${c}`)
            }
        }

        function isBipartite(r) {
            const stack = new FastQueue()
            stack.push([r, 0, -1])
            dp[r] = 0
            while (stack.length) {
                const [u, i, p] = stack.getLast()
                const nb = adj[u] || []
                if (!i && p > 0) {
                    dp[u] = 1 - dp[p]
                }
                if (i < nb.length) {
                    stack.getLast()[1]++
                        const v = nb[i]
                    if (dp[v] < 0) {
                        stack.push([v, 0, u])
                    } else if (dp[u] === dp[v]) {
                        return false
                    }
                } else {
                    stack.pop()
                }
            }
            return true
        }
    }

    return results
}

function testing_test() {
    const input = `
3 3
1 2
2 3
3 1
3
2 3
1 2
2 1
4 4
1 2
2 3
3 4
4 1
3
2 3
1 2
3 1
`.trim().split('\n')

    const cases = []
    let idx = 0

    while (idx < input.length) {
        const [n, m] = input[idx++].split(' ').map(Number)
        const edges = []
        for (let i = 0; i < m; i++) {
            edges.push(input[idx++].split(' ').map(Number))
        }
        const q = +input[idx++]
        const queries = []
        for (let i = 0; i < q; i++) {
            queries.push(input[idx++].split(' ').map(Number))
        }
        cases.push({ n, m, edges, queries })
    }

    const output = solve(cases)
    console.log(output.join('\n'))
}

testing_test();

//TODO: have to change