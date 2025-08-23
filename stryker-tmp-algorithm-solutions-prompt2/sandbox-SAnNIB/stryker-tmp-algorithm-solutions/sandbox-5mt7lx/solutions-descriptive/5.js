// @ts-nocheck
// 
export function solve(n) {
    const steps = [];

    if (n === 81) {
        steps.push("!");
    } else {
        steps.push(`add ${n - 81}`);
        steps.push("!");
    }

    return steps;
}
// function testing_test() {
//     const testCases = [
//         { input: 100, expected: ["add -19", "!"] },
//         { input: 0, expected: ["add -81", "!"] },
//         { input: 1, expected: ["add -80", "!"] },
//         { input: 5, expected: ["add -76", "!"] }
//     ];

//     console.log("Running Tests...\n");
//     testCases.forEach(({ input, expected }, i) => {
//         const result = solve(input);
//         console.log(`Test ${i+1}:`);
//         console.log(`Input: ${input}`);
//         console.log(`Expected: ${JSON.stringify(expected)}`);
//         console.log(`Received: ${JSON.stringify(result)}`);
//         console.log(`Status: ${JSON.stringify(result) === JSON.stringify(expected) ? "PASS" : "FAIL"}\n`);
//     });
// }

//  testing_test();