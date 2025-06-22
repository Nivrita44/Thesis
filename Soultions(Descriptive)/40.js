function solveTestCase(n, a, b, c, p) {
    console.log("1 1\n1 10\n1 11");

    const val = (a !== b + c) ? 1 : 0;
    console.log(`0 ${n} ${val}`);
}

function testSolveTestCase() {
    const testCases = [
        {
            input: [3, 1, 1, 1, 101],
            expectedOutput: [
                "1 1\n1 10\n1 11",
                "0 3 1"
            ]
        },
        {
            input: [2, 0, 0, 1, 0o0],
            expectedOutput: [
                "1 00\n1 0\n1 01",
                "0 2 0"
            ]
        },
        {
            input: [2, 1, 0, 1, 1],
            expectedOutput: [
                "1 1\n1 01\n1 11",
                "0 2 0"
            ]
        }
    ];

    testCases.forEach(({ input, expectedOutput }, index) => {
        console.log(`Running test case ${index + 1}`);
        const [n, a, b, c, p] = input;

        const originalConsoleLog = console.log;
        const logs = [];
        console.log = (message) => logs.push(message);

        solveTestCase(n, a, b, c, p);

        console.log = originalConsoleLog;

        const output = logs.join('\n');
        const expected = expectedOutput.join('\n');

        if (output === expected) {
            console.log(`Test case ${index + 1} passed.`);
        } else {
            console.error(`Test case ${index + 1} failed.`);
            console.error(`Expected:\n${expected}`);
            console.error(`Received:\n${output}`);
        }
    });
}

testSolveTestCase();

//have to chnge