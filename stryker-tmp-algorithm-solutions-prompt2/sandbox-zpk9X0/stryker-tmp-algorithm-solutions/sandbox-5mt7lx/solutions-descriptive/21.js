// @ts-nocheck
// 
const MAX_P = 1000000;
const primes = [];
const sieve = new Int32Array(MAX_P + 1);


for (let i = 2; i <= MAX_P; i++) {
    if (!sieve[i]) primes.push(i);
    for (let p of primes) {
        if (i * p > MAX_P) break;
        sieve[i * p] = p;
        if (i % p === 0) break;
    }
}


function rad(k) {
    let r = [];
    while (k > 1) {
        if (sieve[k] === 0) {
            r.push(k);
            break;
        }
        let p = sieve[k];
        r.push(p);
        while (k % p === 0) k = Math.floor(k / p);
    }

    let divs = [1];
    for (let p of r) {
        let L = divs.length;
        for (let j = 0; j < L; j++) {
            divs.push(divs[j] * (-p));
        }
    }
    return divs;
}


export function solve(a) {
    const MOD = 0x3b800001;
    const V = new Int32Array(1000001);

    
    for (let d of rad(a[0])) {
        V[Math.abs(d)] = 1;
    }

    for (let i = 1; i < a.length; i++) {
        let divs = rad(a[i]);
        let ways = 0;

        for (let d of divs) {
            if (d === 1) continue;
            if (d > 0) ways = (ways - V[d]) % MOD;
            else ways = (ways + V[-d]) % MOD;
        }
        ways = ((ways % MOD) + MOD) % MOD;

        if (i === a.length - 1) {
            return ways;  
        }

        for (let d of divs) {
            V[Math.abs(d)] = (V[Math.abs(d)] + ways) % MOD;
        }
    }
}

// function testing_test() {
//     const testCases = [
//         { input: [5, [2, 6, 3, 4, 6]], expected: 5 },
//         { input: [5, [4, 196, 2662, 2197, 121]], expected: 2 },
//         { input: [2, [2, 3]], expected: 0 },
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { input, expected } = testCases[i];
//         const n = input[0];
//         const array = input[1];
//         const result = solve(array);
//         console.log(`Test case ${i + 1}:`, result === expected ? "Passed" : `Failed (Expected ${expected}, got ${result})`);
//     }
// }

// testing_test();
