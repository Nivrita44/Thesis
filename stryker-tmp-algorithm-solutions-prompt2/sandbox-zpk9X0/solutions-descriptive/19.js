// @ts-nocheck
//solve -> solve
export function solve(a, b) {
    return b ? solve(b, a % b) : a;
}

function calculateSumWithGCD(n, a, b) {
    let rowGCD = new Uint32Array(n + 5);
    let colGCD = new Uint32Array(n + 5);
    let lastRowCoprimeIndex = 0,
        lastColCoprimeIndex = 0;

    for (let i = 1; i <= n; i++) {
        rowGCD[i] = solve(i, a);
        if (rowGCD[i] === 1) lastRowCoprimeIndex = i;
    }

    for (let j = 1; j <= n; j++) {
        colGCD[j] = solve(j, b);
        if (colGCD[j] === 1) lastColCoprimeIndex = j;
    }

    let totalSum = 0;
    for (let i = 1; i <= lastRowCoprimeIndex; i++) totalSum += rowGCD[i];
    for (let j = 1; j <= lastColCoprimeIndex; j++) totalSum += colGCD[j];
    totalSum += (lastRowCoprimeIndex + lastColCoprimeIndex - 2);

    let dp = Array(n - lastRowCoprimeIndex + 1)
        .fill()
        .map(() => new Uint32Array(n - lastColCoprimeIndex + 1).fill(1e9));

    dp[0][0] = 0;

    for (let i = lastRowCoprimeIndex; i <= n; i++) {
        for (let j = lastColCoprimeIndex; j <= n; j++) {
            if (i > lastRowCoprimeIndex) {
                dp[i - lastRowCoprimeIndex][j - lastColCoprimeIndex] = Math.min(
                    dp[i - lastRowCoprimeIndex][j - lastColCoprimeIndex],
                    dp[i - lastRowCoprimeIndex - 1][j - lastColCoprimeIndex] + rowGCD[i] + colGCD[j]
                );
            }
            if (j > lastColCoprimeIndex) {
                dp[i - lastRowCoprimeIndex][j - lastColCoprimeIndex] = Math.min(
                    dp[i - lastRowCoprimeIndex][j - lastColCoprimeIndex],
                    dp[i - lastRowCoprimeIndex][j - lastColCoprimeIndex - 1] + rowGCD[i] + colGCD[j]
                );
            }
        }
    }

    return totalSum + dp[n - lastRowCoprimeIndex][n - lastColCoprimeIndex];
}

// function testing_test() {
//     const testCases = [
//         { input: [4, 2, 4], expected: 21 },
//         { input: [10, 210, 420], expected: 125 }
//     ];

//     testCases.forEach(({ input, expected }, index) => {
//         const result = calculateSumWithGCD(...input);
//         const status = result === expected ? "Passed" : `Failed (Expected ${expected}, Got ${result})`;
//         console.log(`Test Case ${index + 1}: ${status}`);
//     });
// }

// testing_test();