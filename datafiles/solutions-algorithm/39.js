// ✅ Pure functional logic
export function solve(n) {
    if (n !== 1 && n % 2 === 1) {
        return 'YES';
    }
    if (n === 1) {
        return 'NO';
    }
    return solve(Math.floor(n / 2));
}

// 🧪 Test function
// function testing_test() {
//     const inputs = [2, 3, 4, 5, 998244353, 1099511627776];
//     const expected = ['NO', 'YES', 'NO', 'YES', 'YES', 'NO'];
//     let allPassed = true;

//     console.log("Running Tests...\n");
//     for (let i = 0; i < inputs.length; i++) {
//         const result = solve(inputs[i]);
//         const pass = result === expected[i];
//         console.log(
//             `Test Case ${i + 1}: Input: ${inputs[i]} | Output: ${result} | Expected: ${expected[i]} | ${pass ? 'PASS ✅' : 'FAIL ❌'}`
//         );
//         if (!pass) allPassed = false;
//     }

//     if (allPassed) {
//         console.log("\n✅ All tests passed!");
//     } else {
//         console.log("\n❌ Some tests failed.");
//     }
// }

// // ▶️ Run tests
// testing_test();