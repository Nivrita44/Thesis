// Core function
// n = length of array, queries = array of query indices (1-based)
export function solve(n, arr, queries) {
    const temp = new Array(n);
    const set = new Set();

    for (let i = n - 1; i >= 0; i--) {
        set.add(arr[i]);
        temp[i] = set.size;
    }

    // For each query, return the value from temp at (index - 1)
    return queries.map(q => temp[q - 1]);
}

// Test function
function testing_test() {
    const n = 10;
    const arr = [1, 2, 3, 4, 1, 2, 3, 4, 100000, 99999];
    const queries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [6, 6, 6, 6, 6, 5, 4, 3, 2, 1];

    const result = solve(n, arr, queries);

    const pass = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`Test 1: Expected = [${expected}], Got = [${result}] => ${pass ? "PASS" : "FAIL"}`);
}

// Run test if run directly
if (require.main === module) {
    testing_test();
}