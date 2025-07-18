// @ts-nocheck
class FastQueue {
    constructor() {
        this.data = {};
        this.front = 0;
        this.back = -1;
    }

    push(...values) {
        let i = 0;
        if (!this.length) {
            this.front = this.back = 0;
            this.data[this.front] = values[i++];
        }
        for (; i < values.length; i++) {
            this.data[++this.back] = values[i];
        }
    }

    unshift(...values) {
        let i = 0;
        if (!this.length) {
            this.front = this.back = 0;
            this.data[this.front] = values[i++];
        }
        for (; i < values.length; i++) {
            this.data[--this.front] = values[i];
        }
    }

    pop() {
        const value = this.data[this.back];
        delete this.data[this.back];
        this.back--;
        return value;
    }

    shift() {
        const value = this.data[this.front];
        delete this.data[this.front];
        this.front++;
        return value;
    }

    get length() {
        return this.front > this.back ? 0 : this.back - this.front + 1;
    }

    get(index) {
        return this.data[this.front + index];
    }

    getLast() {
        return this.data[this.back];
    }

    forEach(callback) {
        for (let i = this.front; i <= this.back; i++) {
            const result = callback(this.data[i], i - this.front);
            if (result === false) break;
        }
    }
}

function solve(arraySize, array, queries) {
    const triangleCounts = Array(arraySize + 1).fill(0);
    for (let i = 1; i <= arraySize; i++) {
        triangleCounts[i] = arraySize + 1 - i;
    }

    const trianglePrefix = Array(arraySize + 2).fill(0);
    for (let i = 1; i <= arraySize; i++) {
        trianglePrefix[i] = trianglePrefix[i - 1] + triangleCounts[i];
    }

    let totalSum = 0;
    for (let i = 0; i < arraySize; i++) {
        totalSum += (arraySize - i) * array[i];
    }

    const triangleWeightedSum = Array(arraySize + 1).fill(0);
    let currentSum = totalSum;
    for (let i = 1; i <= arraySize; i++) {
        triangleWeightedSum[i] = currentSum;
        currentSum -= (arraySize - i + 1) * array[i - 1];
    }

    const prefixTriangleSum = Array(arraySize + 2).fill(0n);
    for (let i = 1; i <= arraySize; i++) {
        prefixTriangleSum[i] = prefixTriangleSum[i - 1] + BigInt(triangleWeightedSum[i]);
    }

    const prefixArray = Array(arraySize + 1).fill(0n);
    for (let i = 1; i <= arraySize; i++) {
        prefixArray[i] = prefixArray[i - 1] + BigInt(array[i - 1]);
    }

    const prefixOfPrefix = Array(arraySize + 2).fill(0n);
    for (let i = 1; i <= arraySize; i++) {
        prefixOfPrefix[i] = prefixOfPrefix[i - 1] + prefixArray[i];
    }

    const output = [];
    for (const [left, right] of queries) {
        const result = calculate(right) - calculate(left - 1);
        output.push(result.toString());
    }

    return output;

    function binarySearch(low, high, condition) {
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (condition(mid)) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return high;
    }

    function calculate(position) {
        if (position <= 0) return 0n;

        const baseIndex = binarySearch(1, arraySize, i => trianglePrefix[i] <= position);
        const remaining = position - trianglePrefix[baseIndex];

        let startRow, endCol;
        if (remaining) {
            startRow = baseIndex + 1;
            endCol = baseIndex + remaining;
        } else {
            startRow = baseIndex;
            endCol = arraySize;
        }

        return prefixTriangleSum[startRow - 1]
            + (prefixOfPrefix[endCol] - prefixOfPrefix[startRow - 1])
            - prefixArray[startRow - 1] * BigInt(endCol - startRow + 1);
    }
}


// Test function
function test() {
    const testCases = [
        {
            input: {
                n: 4,
                arr: [1, 2, 5, 10],
                queries: [
                    [1,1], [1,2], [1,3], [1,4], [1,5], [1,10],
                    [5,10], [6,10], [2,8], [3,4], [3,10], [3,8],
                    [5,6], [5,5], [1,8]
                ]
            },
            expected: [
                "1", "4", "12", "30", "32", "86",
                "56", "54", "60", "26", "82", "57",
                "9", "2", "61"
            ]
        }
    ];

    testCases.forEach((testCase, idx) => {
        const {n, arr, queries} = testCase.input;
        const results = solve(n, arr, queries);
        
        console.log(`Test Case ${idx + 1}:`);
        console.log(`Input:`);
        console.log(`n = ${n}, arr = [${arr}]`);
        console.log(`queries = [${queries.map(q => `[${q}]`).join(', ')}]`);
        console.log(`Expected Output:\n${testCase.expected.join('\n')}`);
        console.log(`Actual Output:\n${results.join('\n')}`);
        
        const passed = JSON.stringify(results) === JSON.stringify(testCase.expected);
        console.log(passed ? '✅ PASSED' : '❌ FAILED');
        console.log();
    });
}

// Run tests
test();