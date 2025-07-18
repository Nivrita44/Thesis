function solveFunctional(k, sizes) {
    const MAX_BIT = 20;
    const sortedSizesDesc = [...sizes].sort((a, b) => b - a);

    let result = 0;
    for (let index = 0; index < k; index++) {
        let currentSize = sortedSizesDesc[index];
        for (let bitPos = MAX_BIT - 1; bitPos >= 0; bitPos--) {
            const bitMask = 1 << bitPos;
            if ((result & bitMask) === 0 && currentSize >= bitMask) {
                currentSize -= bitMask;
                result |= bitMask;
            }
        }
    }
    return result;
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
