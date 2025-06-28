function solve(n, points) {
    const xs = new Map(), xys = new Map()
    for (let i = 0; i < n; i++) {
        const [x, y] = points[i]
        xs.set(x, (xs.get(x) || 0) + 1)
        xys.set(x + y, (xys.get(x + y) || 0) + 1)
    }

    let fx, fxy
    for (const [x, count] of xs) {
        if (count & 1) {
            fx = x
            break
        }
    }
    for (const [xy, count] of xys) {
        if (count & 1) {
            fxy = xy
            break
        }
    }

    return [fx, fxy - fx]
}

function testSolve() {
    const testCases = [
        {
            input: {
                n: 7,
                points: [
                    [7, 26],
                    [6, 27],
                    [6, 28],
                    [7, 27],
                    [8, 26],
                    [8, 27],
                    [7, 28]
                ]
            },
            expected: [7, 27]
        },
        {
            input: {
                n: 11,
                points: [
                    [70, 9],
                    [69, 8],
                    [69, 0],
                    [73, 5],
                    [70, -1],
                    [70, 5],
                    [71, 7],
                    [70, 4],
                    [73, 4],
                    [71, 3],
                    [72, 3]
                ]
            },
            expected: [72, 7]
        }
    ];

    for (const { input, expected } of testCases) {
        const result = solve(input.n, input.points);
        console.log(`Input: n=${input.n}, points=${JSON.stringify(input.points)}`);
        console.log(`Expected: ${expected}, Got: ${result}`);
        console.assert(
            JSON.stringify(result) === JSON.stringify(expected),
            `Test failed for input: n=${input.n}, points=${JSON.stringify(input.points)}`
        );
    }
}

testSolve();