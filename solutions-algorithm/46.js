// Functional logic: Find max depth in organization chart/tree
export function solve(n, managers) {
    const graph = {};
    let maxDepth = 0;

    // Build graph
    for (let i = 1; i <= n; i++) {
        const parent = managers[i - 1]; // manager of employee i
        if (!graph[i]) graph[i] = [];
        if (!graph[parent]) graph[parent] = [];
        graph[parent].push(i);
    }

    // DFS to compute depth
    function dfs(node, depth) {
        maxDepth = Math.max(maxDepth, depth);
        for (const child of graph[node]) {
            dfs(child, depth + 1);
        }
    }

    dfs(-1, 0); // root is -1
    return maxDepth;
}

// ✅ Test function to verify correctness
function testing_test() {
    const tests = [{
            input: { n: 5, managers: [-1, 1, 2, 1, -1] },
            expected: 3
        },
        {
            input: { n: 4, managers: [-1, 1, 2, 3] },
            expected: 4
        },
        {
            input: { n: 3, managers: [-1, -1, 1] },
            expected: 2
        },
        {
            input: {
                n: 12,
                managers: [-1, 1, 2, 3, -1, 5, 6, 7, -1, 9, 10, 11]
            },
            expected: 4
        },
        {
            input: { n: 6, managers: [-1, 1, 1, 1, 2, 3] },
            expected: 3
        }
    ];

    for (const { input, expected }
        of tests) {
        const result = solve(input.n, input.managers);
        console.log(`Input: ${input.managers.join(' ')} | Output: ${result} | Expected: ${expected} | ${result === expected ? "✅ PASS" : "❌ FAIL"}`);
    }
}

// Run test
testing_test();