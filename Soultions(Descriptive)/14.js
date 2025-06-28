function solveLogic(n, k, l, a) {
    k *= 2;
    l *= 2;
    a = a.map(x => x * 2);

    let t = 0;
    let x = 0;

    for (let i = 0; i < n; i++) {
        if (x < a[i] - t) {
            let dt = a[i] - t - x;
            if (i > 0) {
                dt = Math.floor(dt / 2);
            }
            t += dt;
            if (i > 0) {
                x += dt + k;
            } else {
                x = k;
            }
        } else {
            x = Math.max(x, Math.min(x, a[i] + t) + k);
        }
    }

    return t + Math.max(l - x, 0);
}

function testSolveLogic() {
    const testCases = [
        { n: 1, k: 3, l: 5, a: [0], expected: 4 },
        { n: 3, k: 2, l: 5, a: [2, 5, 5], expected: 5 },
        { n: 1, k: 10, l: 10, a: [10], expected: 20 },
        { n: 10, k: 1, l: 10, a: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], expected: 0 },
        { n: 2, k: 1, l: 2, a: [0, 0], expected: 2 },
        { n: 2, k: 1, l: 2, a: [0, 2], expected: 1 },
    ];

    testCases.forEach(({ n, k, l, a, expected }, index) => {
        const result = solveLogic(n, k, l, a);
        console.log(`Test Case ${index + 1}:`, result === expected ? "Passed" : `Failed (Expected ${expected}, Got ${result})`);
    });
}

testSolveLogic();