function solveFunctional(k, sizes) {
    const LOG = 20;
    const arr = [...sizes].sort((a, b) => b - a);

    let ans = 0;
    for (let j = 0; j < k; j++) {
        let x = arr[j];
        for (let i = LOG - 1; i >= 0; i--) {
            const bit = 1 << i;
            if ((ans & bit) === 0 && x >= bit) {
                x -= bit;
                ans |= bit;
            }
        }
    }
    return ans;
}


function testSolve() {
    const tests = [
        { k: 1, sizes: [1], expected: 1 },
        { k: 2, sizes: [4, 6], expected: 7 },
        { k: 1, sizes: [10], expected: 10 }
    ];

    for (let i = 0; i < tests.length; i++) {
        const { k, sizes, expected } = tests[i];
        const result = solveFunctional(k, sizes);
        console.log(`Test case ${i + 1}: got=${result}, expected=${expected}`);
        console.assert(result === expected, `Failed test case ${i + 1}`);
    }
}

testSolve();
