const M = 1000000007 n;
const MAX = 200005;

function powmod(a, b) {
    let res = 1 n;
    a %= M;
    while (b > 0 n) {
        if (b & 1 n) res = res * a % M;
        a = a * a % M;
        b >>= 1 n;
    }
    return res;
}

let inv10000 = powmod(10000 n, M - 2 n);
let inv2 = powmod(2 n, M - 2 n);
let inv8 = powmod(8 n, M - 2 n);

let inv_pows = new BigInt64Array(MAX);
inv_pows[0] = 1 n;
for (let i = 1; i < MAX; i++) {
    inv_pows[i] = (inv_pows[i - 1] * inv10000) % M;
}

let pairs = [];
for (let j = 0; j < 10; j++) {
    for (let l = j + 1; l < 10; l++) {
        pairs.push([j, l]);
    }
}

let pow2_2j = new BigInt64Array(10);
for (let j = 0; j < 10; j++) {
    pow2_2j[j] = powmod(2 n, BigInt(2 * j));
}

let pow2_jl = new BigInt64Array(45);
for (let i = 0; i < 45; i++) {
    pow2_jl[i] = powmod(2 n, BigInt(pairs[i][0] + pairs[i][1]));
}

function compute(n, a, p) {
    let Pj = new BigInt64Array(10).fill(1 n);
    let kj = new Uint32Array(10);

    let sz = pairs.length;
    let PA = new BigInt64Array(sz).fill(1 n);
    let PB = new BigInt64Array(sz).fill(1 n);
    let PC = new BigInt64Array(sz).fill(1 n);
    let kA = new Uint32Array(sz);
    let kB = new Uint32Array(sz);
    let kC = new Uint32Array(sz);

    for (let i = 0; i < n; i++) {
        let ai = a[i],
            pi = p[i];
        let val = (10000 n - 2 n * BigInt(pi) + M) % M;

        for (let j = 0; j < 10; j++) {
            if ((ai >> j) & 1) {
                Pj[j] = (Pj[j] * val) % M;
                kj[j]++;
            }
        }

        for (let idx = 0; idx < sz; idx++) {
            let [j, l] = pairs[idx];
            let sj = (ai >> j) & 1,
                sl = (ai >> l) & 1;

            if (sj && !sl) {
                PA[idx] = (PA[idx] * val) % M;
                kA[idx]++;
            }
            if (sl && !sj) {
                PB[idx] = (PB[idx] * val) % M;
                kB[idx]++;
            }
            if (sj && sl) {
                PC[idx] = (PC[idx] * val) % M;
                kC[idx]++;
            }
        }
    }

    for (let j = 0; j < 10; j++) {
        if (kj[j] > 0) {
            Pj[j] = (Pj[j] * inv_pows[kj[j]]) % M;
        }
    }

    for (let idx = 0; idx < sz; idx++) {
        if (kA[idx] > 0) PA[idx] = (PA[idx] * inv_pows[kA[idx]]) % M;
        if (kB[idx] > 0) PB[idx] = (PB[idx] * inv_pows[kB[idx]]) % M;
        if (kC[idx] > 0) PC[idx] = (PC[idx] * inv_pows[kC[idx]]) % M;
    }

    let Ebj = new BigInt64Array(10);
    for (let j = 0; j < 10; j++) {
        Ebj[j] = ((1 n + M - Pj[j]) % M * inv2) % M;
    }

    let Ebl = new BigInt64Array(45);
    for (let idx = 0; idx < sz; idx++) {
        let term1 = (1 n + PC[idx]) % M;
        term1 = (term1 * (1 n + M - PA[idx])) % M;
        term1 = (term1 * (1 n + M - PB[idx])) % M;
        let term2 = (1 n + M - PC[idx]) % M;
        term2 = (term2 * (1 n + PA[idx])) % M;
        term2 = (term2 * (1 n + PB[idx])) % M;
        Ebl[idx] = ((term1 + term2) % M * inv8) % M;
    }

    let sum1 = 0 n,
        sum2 = 0 n;
    for (let j = 0; j < 10; j++) {
        sum1 = (sum1 + pow2_2j[j] * Ebj[j]) % M;
    }
    for (let idx = 0; idx < sz; idx++) {
        sum2 = (sum2 + pow2_jl[idx] * Ebl[idx]) % M;
    }

    return (sum1 + 2 n * sum2) % M;
}