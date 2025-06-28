function solve(n, m, k, h, x) {
    let ans = Infinity;
    let lo = 1, hi = 1e9;

    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        const range = [];

        for (let j = 0; j < x.length; j++) {
            const minDamage = Math.ceil(h[j] / mid);
            const diff = m - minDamage;
            const start = x[j] - diff;
            const end = x[j] + diff;
            if (start <= end) {
                range.push([start, 1]);
                range.push([end + 1, -1]);
            }
        }

        range.sort((a, b) => a[0] - b[0]);

        let total = 0;
        let found = false;

        for (let j = 0; j < range.length; j++) {
            total += range[j][1];
            if (total >= k) {
                found = true;
                break;
            }
        }

        if (found) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return ans === Infinity ? -1 : ans;
}

function testSolve() {
    const testCases = [
        {
            input: [5, 5, 3, [7, 7, 7, 7, 7], [1, 2, 3, 4, 5]],
            expected: 2
        },
        {
            input: [9, 5, 9, [2, 4, 6, 8, 10, 8, 6, 4, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
            expected: 2
        },
        {
            input: [2, 10, 2, [1, 1], [1, 20]],
            expected: -1
        },
        {
            input: [2, 2, 2, [1000000000, 1], [1, 3]],
            expected: 1000000000
        }
    ];

    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const result = solve(...input);
        console.log(`Test Case ${i + 1}:`, result === expected ? "Passed" : `Failed (Expected: ${expected}, Got: ${result})`);
    }
}

testSolve();
