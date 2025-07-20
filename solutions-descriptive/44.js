const MAX_SIZE = 1e7 + 10;
const sgValues = new Uint32Array(MAX_SIZE);
const isComposite = new Uint8Array(MAX_SIZE);
const factor = new Uint32Array(MAX_SIZE);
const primes = [];

function initializeSieve() {
    let primeCount = 0;
    for (let num = 2; num < MAX_SIZE; num++) {
        if (!isComposite[num]) {
            primes[primeCount++] = num;
            factor[num] = num;
        }
        for (let j = 0; j < primeCount && num * primes[j] < MAX_SIZE; j++) {
            isComposite[num * primes[j]] = 1;
            if (num % primes[j] === 0) {
                factor[num * primes[j]] = factor[num];
                break;
            }
            factor[num * primes[j]] = primes[j];
        }
    }
}

function computeSGValues() {
    let maxSG = 0;
    for (let i = 1; i < MAX_SIZE; i++) {
        if (i & 1) {
            if (!isComposite[i]) {
                sgValues[i] = ++maxSG;
            } else {
                sgValues[i] = sgValues[factor[i]];
            }
        }
    }
}

export function solve(arr) {
    let nimSum = 0;
    for (let i = 0; i < arr.length; i++) {
        nimSum ^= sgValues[arr[i]];
    }
    return nimSum ? "Alice" : "Bob";
}

initializeSieve();
computeSGValues();


function testsolve() {
    const testCases = [
        { input: [3, [3, 2, 9]], expected: "Bob" },
        { input: [4, [3, 3, 6, 1]], expected: "Alice" },
        { input: [5, [1, 2, 3, 4, 5]], expected: "Bob" },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const [n, arr] = input;
        const result = solve(arr);
        console.log(`Test Case ${index + 1}:`, result === expected ? "Passed" : `Failed (Expected: ${expected}, Got: ${result})`);
    });
}

testsolve();
