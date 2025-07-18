// @ts-nocheck
function maxOperations(start, target) {
    let temp = start;
    while (temp % 2 === 0 && Math.floor(temp / 2) !== target) {
        temp = Math.floor(temp / 2);
    }

    if (temp % 2 === 1) {
        return Math.floor(start / temp);
    }

    let smallestOdd = temp;
    while (smallestOdd % 2 === 0) {
        smallestOdd = Math.floor(smallestOdd / 2);
    }

    return 1 + Math.floor((start - temp) / smallestOdd);
}

function canReachTargetOperations(n, k, values) {
    const prefix = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + maxOperations(values[i - 1], values[i]);
    }

    const suffix = new Array(n).fill(0);
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + maxOperations(values[i + 1], values[i]);
    }

    for (let i = 0; i < n; i++) {
        const totalOps = maxOperations(values[i], 0) + prefix[i] + suffix[i];
        if (totalOps >= k) {
            return true;
        }
    }

    return false;
}

function testCanReachTargetOperations() {
    const testCases = [
        { n: 3, k: 3, values: [2, 1, 4], expected: "YES" },
        { n: 3, k: 7, values: [2, 1, 4], expected: "NO" },
        { n: 2, k: 15, values: [2, 16], expected: "YES" },
        { n: 3, k: 10, values: [256, 32, 1], expected: "YES" },
        { n: 3, k: 289, values: [768, 96, 1], expected: "YES" },
        { n: 3, k: 290, values: [768, 96, 1], expected: "NO" },
        { n: 5, k: 7, values: [5, 1, 6, 3, 10], expected: "YES" },
        { n: 4, k: 6, values: [6, 8, 5, 10], expected: "YES" },
    ];

    for (const { n, k, values, expected } of testCases) {
        const result = canReachTargetOperations(n, k, values) ? "YES" : "NO";
        console.log(`Input: n=${n}, k=${k}, values=${values}`);
        console.log(`Expected: ${expected}, Got: ${result}`);
        console.log(result === expected ? "Test Passed" : "Test Failed");
        console.log("------------");
    }
}

testCanReachTargetOperations();
