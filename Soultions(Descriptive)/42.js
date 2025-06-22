const MOD = 1000000007n;
const MAX = 200005;

function powmod(a, b) {
    let res = 1n;
    a %= MOD;
    while (b > 0n) {
        if (b & 1n) res = res * a % MOD;
        a = a * a % MOD;
        b >>= 1n;
    }
    return res;
}

function solve(testCases) {
    const results = [];
    const inv10000 = powmod(10000n, MOD - 2n);
    const inv2 = powmod(2n, MOD - 2n);
    const inv8 = powmod(8n, MOD - 2n);

    const inv_pows = new Array(MAX).fill(1n);
    for (let i = 1; i < MAX; i++) {
        inv_pows[i] = (inv_pows[i - 1] * inv10000) % MOD;
    }

    const pairs = [];
    for (let j = 0; j < 10; j++) {
        for (let l = j + 1; l < 10; l++) {
            pairs.push([j, l]);
        }
    }

    const pow2_2j = new Array(10).fill(1n);
    for (let j = 0; j < 10; j++) {
        pow2_2j[j] = powmod(2n, BigInt(2 * j));
    }

    const pow2_jl = new Array(pairs.length).fill(1n);
    for (let i = 0; i < pairs.length; i++) {
        pow2_jl[i] = powmod(2n, BigInt(pairs[i][0] + pairs[i][1]));
    }

    for (const {n, a, p} of testCases) {
        const Pj = new Array(10).fill(1n);
        const kj = new Array(10).fill(0);

        const sz = pairs.length;
        const PA = new Array(sz).fill(1n);
        const PB = new Array(sz).fill(1n);
        const PC = new Array(sz).fill(1n);
        const kA = new Array(sz).fill(0);
        const kB = new Array(sz).fill(0);
        const kC = new Array(sz).fill(0);

        for (let i = 0; i < n; i++) {
            const ai = BigInt(a[i]);
            const pi = BigInt(p[i]);
            const val = (10000n - 2n * pi + MOD) % MOD;

            for (let j = 0; j < 10; j++) {
                if ((ai >> BigInt(j)) & 1n) {
                    Pj[j] = (Pj[j] * val) % MOD;
                    kj[j]++;
                }
            }

            for (let idx = 0; idx < sz; idx++) {
                const [j, l] = pairs[idx];
                const sj = (ai >> BigInt(j)) & 1n;
                const sl = (ai >> BigInt(l)) & 1n;

                if (sj && !sl) {
                    PA[idx] = (PA[idx] * val) % MOD;
                    kA[idx]++;
                }
                if (sl && !sj) {
                    PB[idx] = (PB[idx] * val) % MOD;
                    kB[idx]++;
                }
                if (sj && sl) {
                    PC[idx] = (PC[idx] * val) % MOD;
                    kC[idx]++;
                }
            }
        }

        for (let j = 0; j < 10; j++) {
            if (kj[j] > 0) {
                Pj[j] = (Pj[j] * inv_pows[kj[j]]) % MOD;
            }
        }

        for (let idx = 0; idx < sz; idx++) {
            if (kA[idx] > 0) PA[idx] = (PA[idx] * inv_pows[kA[idx]]) % MOD;
            if (kB[idx] > 0) PB[idx] = (PB[idx] * inv_pows[kB[idx]]) % MOD;
            if (kC[idx] > 0) PC[idx] = (PC[idx] * inv_pows[kC[idx]]) % MOD;
        }

        const Ebj = new Array(10).fill(0n);
        for (let j = 0; j < 10; j++) {
            Ebj[j] = ((1n + MOD - Pj[j]) % MOD * inv2) % MOD;
        }

        const Ebl = new Array(sz).fill(0n);
        for (let idx = 0; idx < sz; idx++) {
            let term1 = (1n + PC[idx]) % MOD;
            term1 = (term1 * (1n + MOD - PA[idx])) % MOD;
            term1 = (term1 * (1n + MOD - PB[idx])) % MOD;
            let term2 = (1n + MOD - PC[idx]) % MOD;
            term2 = (term2 * (1n + PA[idx])) % MOD;
            term2 = (term2 * (1n + PB[idx])) % MOD;
            Ebl[idx] = ((term1 + term2) % MOD * inv8) % MOD;
        }

        let sum1 = 0n, sum2 = 0n;
        for (let j = 0; j < 10; j++) {
            sum1 = (sum1 + pow2_2j[j] * Ebj[j]) % MOD;
        }
        for (let idx = 0; idx < sz; idx++) {
            sum2 = (sum2 + pow2_jl[idx] * Ebl[idx]) % MOD;
        }

        const res = (sum1 + 2n * sum2) % MOD;
        results.push(Number(res));
    }

    return results;
}

// Test cases
const testCases = [
    { n: 1, a: [2], p: [5000] },
    { n: 2, a: [1, 1], p: [1000, 2000] },
    { n: 6, a: [343, 624, 675, 451, 902, 820], p: [6536, 5326, 7648, 2165, 9430, 5428] },
    { n: 1, a: [1], p: [10000] }
];

const results = solve(testCases);
console.log(results); // [500000007, 820000006, 280120536, 1]