// @ts-nocheck
// 
// ✅ Solve ONE test case
export function solve(n, a) {
    let l = 1, r = 1;

    for (let i = 1; i <= n - 1; i++) {
        let tFlag = 0;
        if (a[r - 1] >= n - i + 1) tFlag = 1; // adjust for 0-based JS arrays

        if (a[l + (n - i) - 1] >= n - i + 1) {
            // do nothing
        } else {
            l++;
        }

        r += tFlag;
        if (l > r) break;
    }

    return Math.max(0, r - l + 1);
}

// ✅ Testing function (independent)
function testing_test() {
    const cases = [
        { n: 6, a: [6, 3, 3, 3, 5, 5], expected: 3 },
        { n: 6, a: [5, 6, 4, 1, 4, 5], expected: 0 },
        { n: 9, a: [8, 6, 4, 2, 1, 3, 5, 7, 9], expected: 1 }
    ];

    for (let i = 0; i < cases.length; i++) {
        const { n, a, expected } = cases[i];
        const output = solve(n, a);
        const ok = output === expected;
        console.log(
            `Test #${i + 1}: output=${output}, expected=${expected}, ${ok ? "PASSED ✅" : "FAILED ❌"}`
        );
    }
}

// Run tests
testing_test();
