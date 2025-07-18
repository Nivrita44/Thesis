// @ts-nocheck
const MOD = 1e9 + 7;
const MOD_APPROX = ((1 << 20) * (1 << 20)) % MOD;


function modAdd(a, b) {
    return (a + b) % MOD;
}

function modSub(a, b) {
    return modAdd(modAdd(a, -b), MOD);
}

function modMul(a, b) {
    
    let result = (a >> 20) * (b >> 20) * MOD_APPROX
               + (a & 0xfff00000) * (b & 0xfffff)
               + (a & 0xfffff) * b;
    return result % MOD;
}

const MAX_N = 3e5;
const prefixSum = new Array(MAX_N + 1).fill(0);
const prefixSumSquares = new Array(MAX_N + 1).fill(0);

for (let i = 1; i <= MAX_N; i++) {
    prefixSum[i] = modAdd(prefixSum[i - 1], i);
    prefixSumSquares[i] = modAdd(prefixSumSquares[i - 1], modMul(i, i));
}

function computeRangeSum(n, baseA, left, right) {
    const count = right - left + 1;
    const term1 = modMul(baseA, modSub(prefixSumSquares[right], prefixSumSquares[left - 1]));
    const term2 = modMul(n, modSub(prefixSum[right], prefixSum[left - 1]));
    const term3 = modMul(baseA, count);
    return modSub(modAdd(term2, term3), term1);
}


function calculateBaseSum(baseP, n) {
    let number = n;
    const baseDigits = [];

    while (number > 0) {
        baseDigits.unshift(number % baseP);
        number = Math.floor(number / baseP);
    }

    let result = 0, basePower = 1;

    for (let i = 0; i < baseDigits.length; i++) {
        result = modAdd(result, modMul(baseDigits[i], basePower));
        basePower = modMul(basePower, baseP);
    }

    return result;
}


function solve(n, k) {
    let totalSum = 0;
    let effectiveK;

    if (k > n) {
        const surplus = (k - BigInt(n)) % BigInt(MOD);
        totalSum = modMul(Number(surplus), n);
        effectiveK = n;
    } else {
        effectiveK = Number(k);
    }

    let previous = effectiveK;

    for (let baseA = 1; ; baseA++) {
        const lowerBound = Math.floor(n / (baseA + 1)) + 1;
        if (n >= lowerBound * lowerBound) break;

        if (lowerBound <= effectiveK) {
            const from = Math.max(2, lowerBound);
            const to = Math.min(effectiveK, previous);
            totalSum = modAdd(totalSum, computeRangeSum(n, baseA, from, to));
        }

        previous = lowerBound - 1;
    }

    previous = Math.min(previous, effectiveK);

    for (let baseP = 2; baseP <= previous; baseP++) {
        totalSum = modAdd(totalSum, calculateBaseSum(baseP, n));
    }

    return totalSum;
}


function runTests() {
    const testCases = [
        { input: [9, 3n], expected: 10 },
        { input: [19, 84n], expected: 2006 },
        { input: [9982, 44353n], expected: 120792461 },
        { input: [100000, 1000000007n], expected: 584502117 },
        { input: [17, 30n], expected: 775 },
        { input: [777, 1000000000000000000n], expected: 46058362 },
    ];

    console.log("Running Tests...\n");

    testCases.forEach(({ input, expected }, index) => {
        const result = solve(...input);
        const pass = result === expected ? "PASS" : "FAIL";
        console.log(`Test ${index + 1}: ${pass}`);
        console.log(`  Input: n=${input[0]}, k=${input[1]}`);
        console.log(`  Expected: ${expected}`);
        console.log(`  Got: ${result}\n`);
    });
}

runTests();
