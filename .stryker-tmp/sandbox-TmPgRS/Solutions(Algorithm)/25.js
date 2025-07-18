// @ts-nocheck
'use strict';

// ✅ Pure logic function
function findBalancedIndex(testCases) {
    return testCases.map(({ n, arr }) => {
        let totalTwos = arr.filter(x => x === 2).length;

        if (totalTwos === 0 || totalTwos % 2 !== 0) return -1;

        let halfTwos = totalTwos / 2;
        let seenTwos = 0;

        for (let i = 0; i < n; i++) {
            if (arr[i] === 2) {
                seenTwos++;
            }
            if (seenTwos === halfTwos) {
                return i + 1; // 1-based index
            }
        }

        return -1;
    });
}

// ✅ Test function
function test() {
    const testCases = [{
        input: [
            { n: 6, arr: [2, 2, 1, 2, 1, 2] },
            { n: 3, arr: [1, 2, 1] },
            { n: 4, arr: [1, 1, 1, 1] }
        ],
        expected: [2, -1, -1]
    }];

    console.log("Running Tests...\n");

    testCases.forEach(({ input, expected }, index) => {
        const result = findBalancedIndex(input);
        const pass = JSON.stringify(result) === JSON.stringify(expected);

        console.log(`Test Case ${index + 1}:`);
        input.forEach(({ n, arr }, i) => {
            const status = result[i] === expected[i] ? 'PASS ✅' : 'FAIL ❌';
            console.log(`Input n=${n}, arr=[${arr.join(' ')}]`);
            console.log(`Expected: ${expected[i]}, Got: ${result[i]} | ${status}\n`);
        });
        console.log(`Overall Status: ${pass ? 'PASS ✅' : 'FAIL ❌'}\n`);
    });
}

// Run test
test();