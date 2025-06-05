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


let n = someBigIntValue; 
let m = someBigIntValue; 

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