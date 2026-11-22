export function solve(testCases) {
    const result = [];
    const maxLength = 100001;
    const prefixSum = new Int32Array(maxLength);
    const transformed = new Int32Array(maxLength);
    const frequency = new Int32Array(3 * maxLength); // offset applied during usage

    for (const array of testCases) {
        const length = array.length;
        let totalSubarrays = BigInt(length) * BigInt(length + 1) / 2n;

        for (let threshold = 1; threshold <= 10; threshold++) {
            let resetPointer = 0;
            prefixSum[0] = 0;

            for (let i = 1; i <= length; i++) {
                transformed[i] = array[i - 1] < threshold ? -1 : 1;
                prefixSum[i] = transformed[i] + prefixSum[i - 1];
            }

            for (let i = 1; i <= length; i++) {
                if (array[i - 1] === threshold) {
                    while (resetPointer < i) {
                        frequency[prefixSum[resetPointer] + 114514]++;
                        resetPointer++;
                    }
                }
                totalSubarrays -= BigInt(frequency[prefixSum[i] + 114514]);
            }

            for (let i = 0; i <= length; i++) {
                frequency[prefixSum[i] + 114514] = 0;
            }
        }

        result.push(Number(totalSubarrays));
    }

    return result;
}

// function testing_test() {
//     const testCases = [
//         [1, 1, 1, 1],
//         [1, 10, 2, 3, 3],
//         [6, 3, 2, 3, 5, 3, 4, 2, 3, 5],
//     ];

//     const expectedOutput = [10, 11, 42];
//     const actualOutput = solve(testCases);

//     const allPassed = actualOutput.every((val, idx) => val === expectedOutput[idx]);

//     if (allPassed) {
//         console.log("All test cases passed.");
//     } else {
//         console.log("Test failed.");
//         console.log("Expected:", expectedOutput);
//         console.log("Received:", actualOutput);
//     }
// }

// testing_test();