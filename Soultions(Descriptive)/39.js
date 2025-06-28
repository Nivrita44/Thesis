function solve(n, a) {
    const s = new Set();
    const x = a.includes(0) ? a.indexOf(0) : -1;
    let mex = 0;

    for (let j = n - 1; j >= 0; j--) {
        if (a[j] < mex) {
            mex = 0;
            break;
        }
        if (a[j] !== 0 || j === x) {
            s.add(a[j]);
            while (s.has(mex)) {
                mex++;
            }
        }
    }

    const zeroCount = a.filter(num => num === 0).length;
    return n - zeroCount + (mex !== 0 ? 1 : 0);
}

function testSolve() {
    const testCases = [
        { n: 5, a: [4, 3, 2, 1, 0], expected: 5 },
        { n: 6, a: [4, 3, 3, 2, 1, 0], expected: 5 },
        { n: 4, a: [2, 0, 1, 2], expected: 3 },
        { n: 1, a: [777], expected: 1 },
        { n: 4, a: [1000000000, 1, 7, 9], expected: 4 },
        { n: 2, a: [0, 1], expected: 2 },
        { n: 2, a: [1, 2], expected: 2 },
        { n: 4, a: [0, 1, 0, 1], expected: 3 },
    ];

    testCases.forEach(({ n, a, expected }, index) => {
        const result = solve(n, a);
        console.log(`Test case ${index + 1}:`, result === expected ? "Passed" : `Failed (Expected ${expected}, got ${result})`);
    });
}

testSolve();
