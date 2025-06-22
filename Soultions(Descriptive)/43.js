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
    return Math.max(dp0[1], dp1[1]);



}


function testSolveTreeDP() {
    const testCases = [
        {
            input: {
                n: 3,
                c: 1,
                arr: [2, 3, 1],
                edges: [[1, 2], [2, 3]],
            },
            expected: 3,
        },
        {
            input: {
                n: 3,
                c: 1,
                arr: [3, 6, 3],
                edges: [[1, 2], [2, 3]],
            },
            expected: 8,
        },
        {
            input: {
                n: 3,
                c: 1,
                arr: [-2, -3, -1],
                edges: [[1, 2], [2, 3]],
            },
            expected: 0,
        },
        {
            input: {
                n: 6,
                c: 1,
                arr: [5, -4, 3, 6, 7, 3],
                edges: [[4, 1], [5, 1], [3, 5], [3, 6], [1, 2]],
            },
            expected: 17,
        },
        {
            input: {
                n: 8,
                c: 1,
                arr: [3, 5, 2, 7, 8, 5, -3, -4],
                edges: [[7, 3], [1, 8], [4, 3], [3, 5], [7, 6], [8, 7], [2, 1]],
            },
            expected: 26,
        },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const { n, c, arr, edges } = input;
        const result = solveTreeDP(n, c, arr, edges);
        console.log(`Test Case ${index + 1}:`, result === expected ? 'Passed' : `Failed (Expected ${expected}, Got ${result})`);
    });
}

testSolveTreeDP();