// @ts-nocheck
// Functional logic: Computes prefix sums and returns query results
function substringValueSums(s, queries) {
    const a = [0]; // prefix sum array

    for (let i = 0; i < s.length; i++) {
        const x = s.charCodeAt(i) - 96; // 'a' = 1, 'b' = 2, ...
        a.push(x + a[i]);
    }

    return queries.map(([l, r]) => a[r] - a[l - 1]);
}

// Test function
function test() {
    const tests = [{
            input: {
                s: "abacaba",
                queries: [
                    [1, 3],
                    [2, 5],
                    [1, 7]
                ]
            },
            expected: [4, 7, 11]
        },
        {
            input: {
                s: "sonoshikumiwo",
                queries: [
                    [1, 5],
                    [2, 10],
                    [7, 7],
                    [1, 13],
                    [4, 8],
                    [2, 5],
                    [3, 9]
                ]
            },
            expected: [82, 125, 9, 191, 62, 63, 97]
        }
    ];

    for (let i = 0; i < tests.length; i++) {
        const { s, queries } = tests[i].input;
        const result = substringValueSums(s, queries);
        const expected = tests[i].expected;

        const pass = JSON.stringify(result) === JSON.stringify(expected);
        console.log(
            `Test ${i + 1} | Input: ${s} ${JSON.stringify(queries)} | Output: ${result} | Expected: ${expected} | ${
        pass ? "✅ PASS" : "❌ FAIL"
      }`
        );
    }
}

// Run tests
test();