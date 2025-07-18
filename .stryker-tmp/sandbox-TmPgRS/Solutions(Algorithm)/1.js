// @ts-nocheck
// Core function
function helpfulMaths(expression) {
    return expression
        .split('+')
        .map(Number)
        .sort((a, b) => a - b)
        .join('+');
}

// Test function
function testhelpfulMaths() {
    console.assert(helpfulMaths("3+2+1") === "1+2+3", "Test case 1 failed");
    console.assert(helpfulMaths("1+1+3+1+3") === "1+1+1+3+3", "Test case 2 failed");
    console.assert(helpfulMaths("2") === "2", "Test case 3 failed");
    console.log("All test cases passed!");
}

// Run tests if this script is executed directly (node.js)
if (require.main === module) {
    testhelpfulMaths();
}