const MOD = 998244353;

export function solve(arr) {
    const n = arr.length;
    const dp = Array.from({ length: n + 2 }, () =>
        Array.from({ length: n + 2 }, () => [undefined, undefined])
    );
    const p = [1];
    for (let i = 1; i <= n; i++) {
        p[i] = (p[i - 1] * 2) % MOD;
    }

    function dfs(now, l, fa) {
        if (now > n) return 1;
        if (l <= 0) return 0;
        if (dp[now][l][fa] !== undefined) return dp[now][l][fa];

        let res = 0;
        if (fa || arr[now - 2] < arr[now - 1]) {
            res = (res + dfs(now + 1, l + 1, 0) * p[l - 1]) % MOD;
        }
        if (l) {
            res = (res + dfs(now, l - 1, 1)) % MOD;
        }

        dp[now][l][fa] = res;
        return res;
    }

    return dfs(2, 1, 1);
}

// function testing_test() {
//     const cases = [
//         { input: [1, 2, 3], expected: 3 },
//         { input: [1, 3, 2], expected: 1 },
//         { input: [1, 3, 2, 4, 5], expected: 17 },
//         { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], expected: 379394847 },
//     ];

//     for (const { input, expected }
//         of cases) {
//         const result = solve(input);
//         console.log(
//             `Input: ${input.join(" ")} | Output: ${result} | Expected: ${expected} | ${
//                 result === expected ? "✅ PASS" : "❌ FAIL"
//             }`
//         );
//     }
// }

// // Run the test cases
// testing_test();