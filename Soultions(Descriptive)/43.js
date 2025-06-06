function solveTreeDP(n, c, arr, edges) {
    arr.unshift(0)
    const adj = {}
    for (let [u, v] of edges) {
        adj[u] = adj[u] || []
        adj[v] = adj[v] || []
        adj[u].push(v)
        adj[v].push(u)
    }
    const dp0 = Array(n + 1).fill(0)
    const dp1 = Array(n + 1).fill(0)

    const stack = [
        [1, 0, -1]
    ]
    while (stack.length) {
        const [u, i, p] = stack[stack.length - 1]
        const nb = adj[u] || []
        if (i < nb.length) {
            stack[stack.length - 1][1]++
                const v = nb[i]
            if (v !== p) {
                stack.push([v, 0, u])
            }
        } else {
            stack.pop()
            dp1[u] = arr[u]
            for (let v of nb) {
                if (v === p) continue
                dp0[u] += Math.max(dp0[v], dp1[v])
                dp1[u] += Math.max(dp0[v], dp1[v] - 2 * c)
            }
        }
    }
    return Math.max(dp0[1], dp1[1])
}