// @ts-nocheck
// 
const M = 1000000007n;
const MAX = 200005;

function powmod(a, b) {
    let res = 1n;
    a %= M;
    while (b > 0n) {
        if (b & 1n) res = (res * a) % M;
        a = (a * a) % M;
        b >>= 1n;
    }
    return res;
}

let inv10000 = powmod(10000n, M - 2n);
let inv2 = powmod(2n, M - 2n);
let inv8 = powmod(8n, M - 2n);

let inv_pows = new BigInt64Array(MAX);
inv_pows[0] = 1n;
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
pow2_2j.fill(1n);
for (let j = 0; j < 10; j++) {
    pow2_2j[j] = powmod(2n, BigInt(2 * j));
}

let pow2_jl = new BigInt64Array(45);
pow2_jl.fill(1n);
for (let i = 0; i < 45; i++) {
    pow2_jl[i] = powmod(2n, BigInt(pairs[i][0] + pairs[i][1]));
}

export function solve(n, a, p) {
    let Pj = new BigInt64Array(10);
    Pj.fill(1n);
    let kj = new Uint32Array(10);

    let sz = pairs.length;
    let PA = new BigInt64Array(sz);
    PA.fill(1n);
    let PB = new BigInt64Array(sz);
    PB.fill(1n);
    let PC = new BigInt64Array(sz);
    PC.fill(1n);
    let kA = new Uint32Array(sz);
    let kB = new Uint32Array(sz);
    let kC = new Uint32Array(sz);

    for (let i = 0; i < n; i++) {
        let ai = a[i], pi = p[i];
        let val = (10000n - 2n * BigInt(pi) + M) % M;

        for (let j = 0; j < 10; j++) {
            if ((ai >> j) & 1) {
                Pj[j] = (Pj[j] * val) % M;
                kj[j]++;
            }
        }

        for (let idx = 0; idx < sz; idx++) {
            let j = pairs[idx][0], l = pairs[idx][1];
            let sj = (ai >> j) & 1, sl = (ai >> l) & 1;

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
        Ebj[j] = ((1n + M - Pj[j]) % M * inv2) % M;
    }
    let Ebl = new BigInt64Array(45);
    for (let idx = 0; idx < sz; idx++) {
        let term1 = (1n + PC[idx]) % M;
        term1 = (term1 * (1n + M - PA[idx])) % M;
        term1 = (term1 * (1n + M - PB[idx])) % M;
        let term2 = (1n + M - PC[idx]) % M;
        term2 = (term2 * (1n + PA[idx])) % M;
        term2 = (term2 * (1n + PB[idx])) % M;
        Ebl[idx] = ((term1 + term2) % M * inv8) % M;
    }

    let sum1 = 0n, sum2 = 0n;
    for (let j = 0; j < 10; j++) {
        sum1 = (sum1 + pow2_2j[j] * Ebj[j]) % M;
    }
    for (let idx = 0; idx < sz; idx++) {
        sum2 = (sum2 + pow2_jl[idx] * Ebl[idx]) % M;
    }

    let res = (sum1 + 2n * sum2) % M;
    return Number(res);
}

// function testing_test() {
//     const tests = [
//         { n: 2, a: [1,2], p: [5000,5000], expected: 500000007 },
//         { n: 2, a: [1, 1], p: [1000, 2000], expected: 820000006 },
//         { n: 6, a: [343, 624, 675, 451, 902, 820], p: [6536, 5326, 7648, 2165, 9430, 5428], expected: 280120536 },
//         { n: 1, a: [1], p: [10000], expected: 1 }
//     ];

//     tests.forEach((test, index) => {
//         const result = solve(test.n, test.a, test.p);
//         console.log(`Test case ${index + 1}:`);
//         console.log(`Input: n=${test.n}, a=${test.a}, p=${test.p}`);
//         console.log(`Expected: ${test.expected}, Got: ${result}`);
//         console.log(`Status: ${result === test.expected ? 'PASS' : 'FAIL'}`);
//         console.log('---');
//     });
// }

// // Run the test cases
// testing_test();