function processScoreCases(cases) {
    const results = [];

    for (const { n, k, a, b } of cases) {
        let l = 0, r = 1_000_000_001;
        let remainingK = k;
        const aCopy = [...a];

        while (r - l > 1) {
            const mid = Math.floor((r + l) / 2);
            let cnt = 0;
            for (let i = 0; i < n; i++) {
                cnt += Math.max(0, Math.floor((aCopy[i] - mid) / b[i]) + 1);
            }
            if (cnt <= k) {
                r = mid;
            } else {
                l = mid;
            }
        }

        let score = 0n;
        const aUsed = [...a];

        for (let i = 0; i < n; i++) {
            let iters = Math.max(0, Math.floor((aUsed[i] - r) / b[i]) + 1);
            remainingK -= iters;
            score += BigInt(iters) * BigInt(aUsed[i] + aUsed[i] - (iters - 1) * b[i]) / 2n;
            aUsed[i] -= b[i] * iters;
        }

        aUsed.sort((x, y) => y - x);
        for (let i = 0; i < Math.min(n, remainingK); i++) {
            if (aUsed[i] <= 0) break;
            score += BigInt(aUsed[i]);
        }

        results.push(score.toString());
    }

    return results;
}

function test() {
    const cases = [
        {
            n: 3, k: 4,
            a: [5, 6, 7],
            b: [2, 3, 4]
        },
        {
            n: 5, k: 9,
            a: [32, 52, 68, 64, 14],
            b: [18, 14, 53, 24, 8]
        },
        {
            n: 5, k: 1000,
            a: [1, 2, 3, 4, 5],
            b: [5, 4, 3, 2, 1]
        },
        {
            n: 1, k: 1000000,
            a: [1000000],
            b: [1]
        },
        {
            n: 10, k: 6,
            a: [3, 3, 5, 10, 6, 8, 6, 8, 7, 7],
            b: [6, 1, 7, 4, 1, 1, 8, 9, 3, 1]
        }
    ];

    const expected = [
        "21",
        "349",
        "27",
        "500000500000",
        "47"
    ];

    const actual = processScoreCases(cases);

    console.log("✅ Output:");
    console.log(actual.join('\n'));

    console.log("\n✅ Expected:");
    console.log(expected.join('\n'));

    console.log("\n✅ Test Result:", actual.join('\n') === expected.join('\n') ? "Passed" : "Failed");
}

test();
