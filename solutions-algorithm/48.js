// Functional logic
export function solve(n, k, p, edges) {
    const head = Array(n + 2).fill(-1);
    const ver = [];
    const nxt = [];
    let tot = 0;
    const cnt = Array(n + 2).fill(0);
    const sumc = Array(n + 2).fill(0);
    const sum = Array(n + 2).fill(0);
    let m = 0;

    function addedge(x, y) {
        ver[++tot] = y;
        nxt[tot] = head[x];
        head[x] = tot;
    }

    for (const [x, y] of edges) {
        addedge(x, y);
        addedge(y, x);
    }

    function dfs(x, fa, dep) {
        cnt[dep]++;
        m = Math.max(m, dep);
        for (let i = head[x]; i !== -1; i = nxt[i]) {
            const y = ver[i];
            if (y === fa) continue;
            dfs(y, x, dep + 1);
        }
    }

    dfs(1, 0, 0);

    let ans = 1;
    for (let i = 1; i <= m; i++) {
        sumc[i] = sumc[i - 1] + cnt[i];
        sum[i] = sum[i - 1] + cnt[i] * i;

        let l = 1,
            r = i;
        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            const c = sumc[i] - sumc[mid - 1];
            const v = c * i - (sum[i] - sum[mid - 1]);
            if (v >= p) l = mid + 1;
            else r = mid;
        }

        let tmp = sumc[i] - sumc[l - 1];
        const rem = p - (tmp * i - (sum[i] - sum[l - 1]));
        if (l !== 1) tmp += Math.min(cnt[l - 1], Math.floor(rem / (i - (l - 1))));
        ans = Math.max(ans, Math.min(k, tmp));
    }

    return ans;
}

// Test function
function testing_test() {
    const tests = [{
            input: {
                n: 5,
                k: 1000,
                p: 1000,
                edges: [
                    [1, 2],
                    [1, 3],
                    [3, 4],
                    [3, 5]

                ],
            },
            expected: 4
        },
        {
            input: {
                n: 3,
                k: 1,
                p: 2,
                edges: [
                    [1, 2],
                    [1, 3]
                ],
            },
            expected: 1
        }
    ];

    for (const { input, expected }
        of tests) {
        const result = solve(input.n, input.k, input.p, input.edges);
        console.log(`Input: n=${input.n}, k=${input.k}, p=${input.p}, edges=${JSON.stringify(input.edges)}`);
        console.log(`Output: ${result} | Expected: ${expected} | ${result === expected ? "✅ PASS" : "❌ FAIL"}`);
    }
}

// Run tests
testing_test();