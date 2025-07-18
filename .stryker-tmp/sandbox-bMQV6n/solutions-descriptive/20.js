// @ts-nocheck
const MAX_ARRAY_SIZE = 200010;
const UPPER_BOUND = 1000000010;
const LOWER_BOUND = -UPPER_BOUND;

let currentArrayLength;
let numberArrayStorage = new Uint32Array(MAX_ARRAY_SIZE);

function evaluateCandidateValue(candidate) {
    let currentValue = candidate;
    for (let index = currentArrayLength - 1; index >= 0; index--) {
        currentValue = 2 * currentValue - numberArrayStorage[index];
        if (currentValue < LOWER_BOUND) return -1;
        if (currentValue > UPPER_BOUND) return 1;
    }
    if (currentValue < candidate) return -1;
    if (currentValue > candidate) return 1;
    return 0;
}

function findBinarySearchSolution() {
    let lowBound = LOWER_BOUND, highBound = UPPER_BOUND;
    while (highBound - lowBound > 1) {
        let midPoint = (highBound + lowBound) >> 1;
        let result = evaluateCandidateValue(midPoint);
        if (result === 0) return midPoint;
        else if (result < 0) lowBound = midPoint;
        else highBound = midPoint;
    }
    return LOWER_BOUND - 100;
}

function solve(inputArray) {
    currentArrayLength = inputArray.length;
    numberArrayStorage.set(inputArray);

    let arraySumTotal = 0;
    for (let index = 0; index < currentArrayLength; index++) {
        arraySumTotal += numberArrayStorage[index];
    }

    let solutionCandidate = findBinarySearchSolution();
    if (solutionCandidate < LOWER_BOUND) return -1;

    let minimumValueFound = UPPER_BOUND + 100;
    let operationsCount = 0;
    let currentSolutionValue = solutionCandidate;

    for (let index = currentArrayLength - 1; index >= 0; index--) {
        minimumValueFound = Math.min(minimumValueFound, currentSolutionValue);
        operationsCount += currentSolutionValue;
        currentSolutionValue = 2 * currentSolutionValue - numberArrayStorage[index];
    }

    operationsCount -= currentArrayLength * minimumValueFound;

    if (operationsCount > arraySumTotal) return -1;
    return operationsCount;
}

function test() {
    const testCases = [
        { input: [1, 1], expected: 0 },
        { input: [1, 3, 2], expected: -1 },
        { input: [2, 1, 2, 6], expected: 3 },
    ];

    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const result = solve(input);
        console.log(`Test Case ${i + 1}:`, result === expected ? "Passed" : `Failed (Expected: ${expected}, Got: ${result})`);
    }
}

test();