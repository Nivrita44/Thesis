export function solve(array) {
    const arrayLength = array.length;
    
    const dpTable = Array(arrayLength).fill(0).map(() => Array(arrayLength).fill(0));
    let currentScore;

    
    for (let subarrayLength = 3; subarrayLength <= arrayLength; subarrayLength++) {
        for (let start = 0; start + subarrayLength - 1 < arrayLength; start++) {
            const end = start + subarrayLength - 1;
            
            
            for (let splitPoint = start + 1; splitPoint < end; splitPoint++) {
                
                currentScore = array[start] * array[end] * array[splitPoint]
                    + (start + 1 <= splitPoint - 1 ? dpTable[start + 1][splitPoint - 1] : 0)
                    + (splitPoint + 1 <= end - 1 ? dpTable[splitPoint + 1][end - 1] : 0);
                dpTable[start][end] = Math.max(dpTable[start][end], currentScore);

                
                currentScore = dpTable[start][splitPoint] + (splitPoint + 1 <= end ? dpTable[splitPoint + 1][end] : 0);
                dpTable[start][end] = Math.max(dpTable[start][end], currentScore);

                
                currentScore = (start <= splitPoint - 1 ? dpTable[start][splitPoint - 1] : 0) + dpTable[splitPoint][end];
                dpTable[start][end] = Math.max(dpTable[start][end], currentScore);
            }
        }
    }
    return dpTable[0][arrayLength - 1];
}

function testing_test() {
    const testCases = [
        { input: [2, 1, 2, 1, 1, 1], expected: 5 },
        { input: [1, 2, 1, 3, 1, 5], expected: 30 },
        { input: [9, 9, 8, 2, 4, 4, 3, 5, 3], expected: 732 },
        { input: [9, 9, 3, 2, 4, 4, 8, 5, 3], expected: 696 }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = solve(input);
        console.log(`Test Case ${index + 1}:`, 
            result === expected ? "Passed" : `Failed (Expected: ${expected}, Got: ${result})`);
    });
}

testing_test();