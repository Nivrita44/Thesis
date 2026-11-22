export function solve(input) {
    const lines = input.trim().split("\n");
    const n = lines[0]; // first line is the number string

    const first = n[0];
    const last = n[n.length - 1];
    const middle = n.slice(1, n.length - 1) || "";

    let result = [];
    result.push(last);
    result.push(first);
    if (middle.length > 0) result.push(middle);

    return result;
}

// Testing framework
function testing_test() {
    const input = "75619";
    const expectedOutput = ["9", "7", "561"];

    const result = solve(input);

    console.log("Input:", input);
    console.log("Expected:", expectedOutput);
    console.log("Got:", result);

    if (JSON.stringify(result) === JSON.stringify(expectedOutput)) {
        console.log("✅ Test Passed!");
    } else {
        console.log("❌ Test Failed!");
    }
}

// Run test
testing_test();
