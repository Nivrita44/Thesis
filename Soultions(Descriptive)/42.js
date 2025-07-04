const MOD = 1000000007n;
const MAX_EXP = 200005;

function modPow(base, exponent) {
    let result = 1n;
    base %= MOD;
    while (exponent > 0n) {
        if (exponent & 1n) result = (result * base) % MOD;
        base = (base * base) % MOD;
        exponent >>= 1n;
    }
    return result;
}

function solve(testCases) {
    const results = [];
    const invBase = modPow(10000n, MOD - 2n);
    const invTwo = modPow(2n, MOD - 2n);
    const invEight = modPow(8n, MOD - 2n);

    const invPowers = new Array(MAX_EXP).fill(1n);
    for (let i = 1; i < MAX_EXP; i++) {
        invPowers[i] = (invPowers[i - 1] * invBase) % MOD;
    }

    const bitPairs = [];
    for (let first = 0; first < 10; first++) {
        for (let second = first + 1; second < 10; second++) {
            bitPairs.push([first, second]);
        }
    }

    const pow2Squared = new Array(10).fill(1n);
    for (let bit = 0; bit < 10; bit++) {
        pow2Squared[bit] = modPow(2n, BigInt(2 * bit));
    }

    const pow2SumPairs = new Array(bitPairs.length).fill(1n);
    for (let i = 0; i < bitPairs.length; i++) {
        const [first, second] = bitPairs[i];
        pow2SumPairs[i] = modPow(2n, BigInt(first + second));
    }

    for (const { n, a, p } of testCases) {
        const productPerBit = new Array(10).fill(1n);
        const countPerBit = new Array(10).fill(0);

        const pairsCount = bitPairs.length;
        const productA = new Array(pairsCount).fill(1n);
        const productB = new Array(pairsCount).fill(1n);
        const productC = new Array(pairsCount).fill(1n);
        const countA = new Array(pairsCount).fill(0);
        const countB = new Array(pairsCount).fill(0);
        const countC = new Array(pairsCount).fill(0);

        for (let i = 0; i < n; i++) {
            const ai = BigInt(a[i]);
            const pi = BigInt(p[i]);
            const adjustedVal = (10000n - 2n * pi + MOD) % MOD;

            for (let bit = 0; bit < 10; bit++) {
                if ((ai >> BigInt(bit)) & 1n) {
                    productPerBit[bit] = (productPerBit[bit] * adjustedVal) % MOD;
                    countPerBit[bit]++;
                }
            }

            for (let idx = 0; idx < pairsCount; idx++) {
                const [firstBit, secondBit] = bitPairs[idx];
                const bitFirstSet = (ai >> BigInt(firstBit)) & 1n;
                const bitSecondSet = (ai >> BigInt(secondBit)) & 1n;

                if (bitFirstSet && !bitSecondSet) {
                    productA[idx] = (productA[idx] * adjustedVal) % MOD;
                    countA[idx]++;
                }
                if (bitSecondSet && !bitFirstSet) {
                    productB[idx] = (productB[idx] * adjustedVal) % MOD;
                    countB[idx]++;
                }
                if (bitFirstSet && bitSecondSet) {
                    productC[idx] = (productC[idx] * adjustedVal) % MOD;
                    countC[idx]++;
                }
            }
        }

        for (let bit = 0; bit < 10; bit++) {
            if (countPerBit[bit] > 0) {
                productPerBit[bit] = (productPerBit[bit] * invPowers[countPerBit[bit]]) % MOD;
            }
        }

        for (let idx = 0; idx < pairsCount; idx++) {
            if (countA[idx] > 0) productA[idx] = (productA[idx] * invPowers[countA[idx]]) % MOD;
            if (countB[idx] > 0) productB[idx] = (productB[idx] * invPowers[countB[idx]]) % MOD;
            if (countC[idx] > 0) productC[idx] = (productC[idx] * invPowers[countC[idx]]) % MOD;
        }

        const expectedBitValues = new Array(10).fill(0n);
        for (let bit = 0; bit < 10; bit++) {
            expectedBitValues[bit] = (((1n + MOD - productPerBit[bit]) % MOD) * invTwo) % MOD;
        }

        const expectedPairValues = new Array(pairsCount).fill(0n);
        for (let idx = 0; idx < pairsCount; idx++) {
            let termOne = (1n + productC[idx]) % MOD;
            termOne = (termOne * (1n + MOD - productA[idx])) % MOD;
            termOne = (termOne * (1n + MOD - productB[idx])) % MOD;

            let termTwo = (1n + MOD - productC[idx]) % MOD;
            termTwo = (termTwo * (1n + productA[idx])) % MOD;
            termTwo = (termTwo * (1n + productB[idx])) % MOD;

            expectedPairValues[idx] = (((termOne + termTwo) % MOD) * invEight) % MOD;
        }

        let sumSingleBits = 0n;
        let sumBitPairs = 0n;
        for (let bit = 0; bit < 10; bit++) {
            sumSingleBits = (sumSingleBits + pow2Squared[bit] * expectedBitValues[bit]) % MOD;
        }
        for (let idx = 0; idx < pairsCount; idx++) {
            sumBitPairs = (sumBitPairs + pow2SumPairs[idx] * expectedPairValues[idx]) % MOD;
        }

        const answer = (sumSingleBits + 2n * sumBitPairs) % MOD;
        results.push(Number(answer));
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