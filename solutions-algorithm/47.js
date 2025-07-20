// Functional logic for each test case
export function solve(n, k, numbers) {
    let check = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (check === numbers[i]) check++;
    }
    return Math.ceil((n - check + 1) / k);
}

// Test function
function testing_test() {
    const cases = [{
            input: { n: 3, k: 2, numbers: [1, 2, 3] },
            expected: 0
        },
        {
            input: { n: 3, k: 1, numbers: [3, 1, 2] },
            expected: 1
        },
        {
            input: { n: 4, k: 2, numbers: [1, 3, 2, 4] },
            expected: 1
        },
        {
            input: { n: 4, k: 2, numbers: [2, 3, 1, 4] },
            expected: 2
        }
    ];

    for (const { input, expected }
        of cases) {
        const result = solve(input.n, input.k, input.numbers);
        console.log(
            `Input: n=${input.n}, k=${input.k}, arr=[${input.numbers.join(' ')}] | Output: ${result} | Expected: ${expected} | ${
                result === expected ? " PASS" : " FAIL"
            }`
        );
    }
}

// Run test cases
testing_test();