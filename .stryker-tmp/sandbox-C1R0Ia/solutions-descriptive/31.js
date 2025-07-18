// @ts-nocheck
const MOD = BigInt(998244353);

function convolution(P, Q) {
    let len = P.length;
    let R = new Array(len).fill(0n);
    for (let i = 0; i < len; i++) {
        let suma = 0n;
        for (let j = 0; j <= i; j++) {
            suma += P[j] * Q[i - j];
            suma %= MOD;
        }
        R[i] = suma;
    }
    return R;
}

function power(P, k) {
    let len = P.length;
    let R = new Array(len).fill(0n);
    R[0] = 1n;
    while (k > 0) {
        if (k % 2n == 1n) {
            R = convolution(R, P);
        }
        P = convolution(P, P);
        k >>= 1n;
    }
    return R;
}

function test() {
    const testCases = [
        { input: [500n, 500n], expected: [84693741n] },
        { input: [2n, 2n], expected: [2n] }
    ];

    for (const { input, expected } of testCases) {
        const [n, m] = input;

        let dp = new Array(Number(m) + 1).fill(0n);
        dp[0] = 1n;

        for (let _ = 0; _ < m; _++) {
            let prev = dp.slice();
            dp.fill(0n);
            for (let c = 0; c <= m; c++) {
                if (c - 1 >= 0) dp[c] += prev[c - 1];
                if (c + 1 <= m) dp[c] += prev[c + 1];
                dp[c] %= MOD;
            }
        }

        let dpp = power(dp, n - 1n);
        let ans = 0n;

        for (let c = 0; c <= m; c++) {
            ans += dp[c] * dpp[c];
            ans %= MOD;
        }

        console.log(`Input: ${input}, Output: ${ans}, Expected: ${expected[0]}`);
        console.assert(ans === expected[0], `❌ Test failed for input ${input}`);
    }

    console.log("✅ All tests completed.");
}

test();
