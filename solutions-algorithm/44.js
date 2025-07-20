// Functional logic
export function solve(n, k) {
    if (k % 2 === 0 || k > 2 * n - 1) return -1;

    const a = Array.from({ length: n + 2 }, (_, i) => i); // 1-based indexing
    k--;

    function mg(l, r) {
        if (k === 0 || l === r - 1) return;
        k -= 2;
        const mid = Math.floor((l + r) / 2);
        [a[mid], a[mid - 1]] = [a[mid - 1], a[mid]];
        mg(l, mid);
        mg(mid, r);
    }

    mg(1, n + 1);
    return a.slice(1, n + 1);
}

// Test runner
function testing_test() {
    const cases = [
        { input: [3, 3], expected: [2, 1, 3] },
        { input: [4, 1], expected: [1, 2, 3, 4] },
        { input: [5, 6], expected: -1 }
    ];

    for (const { input, expected, expectedLength, expectedType }
        of cases) {
        const result = solve(...input);

        let pass = false;

        if (expected !== undefined) {
            if (Array.isArray(expected)) {
                pass = JSON.stringify(result) === JSON.stringify(expected);
            } else {
                pass = result === expected;
            }
        } else {
            pass =
                (expectedType === "array" && Array.isArray(result)) &&
                (expectedLength === undefined || result.length === expectedLength);
        }

        console.log(
                `Input: ${input.join(" ")} | Output: ${Array.isArray(result) ? result.join(" ") : result} | ${
                expected !== undefined
                    ? `Expected: ${Array.isArray(expected) ? expected.join(" ") : expected}`
                    : `Type: ${expectedType}, Length: ${expectedLength}`
            } | ${pass ? "✅ PASS" : "❌ FAIL"}`
        );
    }
}

// Run tests
testing_test();