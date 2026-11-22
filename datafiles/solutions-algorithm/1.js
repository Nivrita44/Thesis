// Core function
export function solve(expression) {
    return expression
        .split('+')
        .map(Number)
        .sort((a, b) => a - b)
        .join('+');
}

// Test function
// function testing_test() {
//     console.assert(solve("3+2+1") === "1+2+3", "Test case 1 failed");
//     console.assert(solve("1+1+3+1+3") === "1+1+1+3+3", "Test case 2 failed");
//     console.assert(solve("2") === "2", "Test case 3 failed");
//     console.log("All test cases passed!");
// }

// // Run tests if this script is executed directly (node.js)
// if (require.main === module) {
//     testing_test();
// }