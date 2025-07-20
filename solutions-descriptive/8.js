export function solve(n, m, arrayA, arrayB) {
    arrayA.sort((x, y) => x - y);
    arrayB.sort((x, y) => x - y);

    let diffA = [];
    let diffB = [];

    
    for (let i = 0; i < Math.floor(n / 2); i++) {
        diffA.push(arrayA[n - 1 - i] - arrayA[i]);
    }

    
    for (let i = 0; i < Math.floor(m / 2); i++) {
        diffB.push(arrayB[m - 1 - i] - arrayB[i]);
    }

    const maxTeams = Math.min(Math.floor((n + m) / 3), n, m);
    const resultLines = [maxTeams.toString()];

    const maxDiffs = [];
    let indexA = 0;
    let indexB = 0;
    let totalDifference = 0;

    for (let teamSize = 1; teamSize <= maxTeams; teamSize++) {
        if (indexA > n - teamSize) {
            totalDifference += diffB[indexB];
            indexB++;
            indexA--;
            totalDifference -= diffA[indexA];
        }

        if (indexB > m - teamSize) {
            totalDifference += diffA[indexA];
            indexA++;
            indexB--;
            totalDifference -= diffB[indexB];
        }

        if (indexA === n - teamSize) {
            totalDifference += diffB[indexB];
            indexB++;
        } else if (indexB === m - teamSize) {
            totalDifference += diffA[indexA];
            indexA++;
        } else if (diffA[indexA] > diffB[indexB]) {
            totalDifference += diffA[indexA];
            indexA++;
        } else {
            totalDifference += diffB[indexB];
            indexB++;
        }

        maxDiffs.push(totalDifference);
    }

    if (maxTeams > 0) {
        resultLines.push(maxDiffs.join(' '));
    }

    return resultLines.join('\n');
}

function testing_test() {
    const testCases = [
        {
            input: [1, 3, [0], [0, 1, -1]],
            expected: "1\n2"
        },
        {
            input: [2, 4, [0, 100], [-100, -50, 0, 50]],
            expected: "2\n150 200"
        },
        {
            input: [2, 4, [0, 1000], [-100, -50, 0, 50]],
            expected: "2\n1000 200"
        },
        {
            input: [6, 6, [20, 1, 27, 100, 43, 42], [100, 84, 1, 24, 22, 77]],
            expected: "4\n99 198 260 283"
        },
        {
            input: [8, 2, [564040265, -509489796, 469913620, 198872582, -400714529, 553177666, 131159391, -20796763], [-1000000000, 1000000000]],
            expected: "2\n2000000000 2027422256"
        }
    ];

    console.log("Running Tests...\n");
    testCases.forEach(({ input, expected }, index) => {
        const [n, m, a, b] = input;
        const result = solve(n, m, a, b);
        console.log(`Test Case ${index + 1}:`);
        console.log(`Input: n=${n}, m=${m}, a=[${a}], b=[${b}]`);
        console.log(`Expected:\n${expected}`);
        console.log(`Result:\n${result}`);
        console.log(`Status: ${result === expected ? "PASS" : "FAIL"}\n`);
    });
}

testing_test();
