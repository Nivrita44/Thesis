function processMatrices(n, m, a, b) {
    for (let t = 0; t < Math.min(n, m) + 1; t++) {
        for (let i = 0; i < n; i++) {
            let k = 0;
            for (let j = 0; j < m; j++) {
                k |= (a[i][j] ^ b[i][j]) & a[i][j];
            }
            k = ((1n << 31n) - 1n) ^ BigInt(k);
            for (let j = 0; j < m; j++) {
                a[i][j] &= Number(k);
            }
        }

        for (let j = 0; j < m; j++) {
            let k = 0;
            for (let i = 0; i < n; i++) {
                k |= (a[i][j] ^ b[i][j]) & b[i][j];
            }
            for (let i = 0; i < n; i++) {
                a[i][j] |= k;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (a[i][j] !== b[i][j]) {
                return "No\n";
            }
        }
    }
    return "Yes\n";
}

function testProcessMatrices() {
    const inputs = [
        { n: 1, m: 1, a: [[12]], b: [[13]] },
        { n: 2, m: 2, a: [[10, 10], [42, 42]], b: [[21, 21], [21, 21]] },
        { n: 2, m: 2, a: [[74, 10], [42, 106]], b: [[21, 85], [85, 21]] },
        { n: 2, m: 4, a: [[1, 2, 3, 4], [5, 6, 7, 8]], b: [[3, 2, 3, 4], [1, 0, 1, 0]] }
    ];

    const expectedOutputs = ["Yes\n", "Yes\n", "No\n", "Yes\n"];

    for (let i = 0; i < inputs.length; i++) {
        const { n, m, a, b } = inputs[i];
        const result = processMatrices(n, m, a, b);
        console.log(`Test ${i + 1}: ${result === expectedOutputs[i] ? "Passed" : "Failed"}`);
    }
}

testProcessMatrices();
