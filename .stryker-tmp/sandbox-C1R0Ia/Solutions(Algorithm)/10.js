// @ts-nocheck
// Core logic function
function Solve(n) {
    let m = n;
    let ans = 0;
    let nonZeroParts = [];

    // Count non-zero digits
    while (m >= 0.99) {
        if (m % 10 !== 0) {
            ans++;
        }
        m -= m % 10;
        m /= 10;
    }

    // Rebuild parts
    m = n;
    let l = 1;
    while (m >= 0.99) {
        if (m % 10 !== 0) {
            nonZeroParts.push(l * (m % 10));
        }
        m -= m % 10;
        m /= 10;
        l *= 10;
    }

    return { count: ans, parts: nonZeroParts };
}

// Test function with your exact input/output
function testSolve() {
    const testCases = [{
            input: 5009,
            expected: {
                count: 2,
                parts: [9, 5000]
            }
        },
        {
            input: 7,
            expected: {
                count: 1,
                parts: [7]
            }
        },
        {
            input: 9876,
            expected: {
                count: 4,
                parts: [6, 70, 800, 9000]
            }
        },
        {
            input: 10000,
            expected: {
                count: 1,
                parts: [10000]
            }
        },
        {
            input: 10,
            expected: {
                count: 1,
                parts: [10]
            }
        }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = Solve(input);
        const match =
            result.count === expected.count &&
            JSON.stringify(result.parts) === JSON.stringify(expected.parts);

        console.log(`Test ${index + 1}: ${match ? "PASS" : "FAIL"}`);
        if (!match) {
            console.log(`  Expected: count=${expected.count}, parts=${expected.parts}`);
            console.log(`  Got:      count=${result.count}, parts=${result.parts}`);
        } else {
            console.log(result.count);
            console.log(result.parts.join("\n"));
        }
    });
}

// Run test if executed directly
if (require.main === module) {
    testSolve();
}