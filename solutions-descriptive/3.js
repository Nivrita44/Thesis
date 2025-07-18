// function solve(a, b, c, d) {
//     const q1 = [], q2 = [];
//     divide(q1, a, b, 0, 1 << 20);
//     divide(q2, c, d, 0, 1 << 20);

//     let s = 0;
//     for (let x of q1) {
//         for (let y of q2) {
//             const g = gcd(x, y);
//             s += (x / g) * (y / g);
//         }
//     }
//     return s;
// }

// function divide(q, l, r, L, R) {
//     if (l <= L && r >= R) {
//         q.push(R - L);
//         return;
//     }
//     const m = (L + R) / 2;
//     if (l < m) divide(q, l, r, L, m);
//     if (r > m) divide(q, l, r, m, R);
// }

// function gcd(a, b) {
//     while (a) {
//         const r = b % a;
//         b = a;
//         a = r;
//     }
//     return b;
// }

// function test() {
//     const inputs = [
//         [0, 1, 1, 2],
//         [0, 2, 0, 2],
//         [1, 3, 1, 3],
//         [0, 2, 1, 5],
//         [9, 98, 244, 353]
//     ];
//     const expectedOutputs = [1, 1, 4, 5, 374];

//     for (let i = 0; i < inputs.length; i++) {
//         const result = solve(...inputs[i]);
//         console.log(`Test ${i + 1}:`, result === expectedOutputs[i] ? "Passed" : "Failed");
//     }
// }

// test();



function solve(range1Start, range1End, range2Start, range2End) {
    const segments1 = [], segments2 = [];
    computeSegments(segments1, range1Start, range1End, 0, 1 << 20);
    computeSegments(segments2, range2Start, range2End, 0, 1 << 20);

    let total = 0;
    for (let len1 of segments1) {
        for (let len2 of segments2) {
            const commonGCD = gcd(len1, len2);
            total += (len1 / commonGCD) * (len2 / commonGCD);
        }
    }
    return total;
}

function computeSegments(segmentList, queryStart, queryEnd, segmentStart, segmentEnd) {
    // If the segment [segmentStart, segmentEnd) is completely within [queryStart, queryEnd), use it
    if (queryStart <= segmentStart && queryEnd >= segmentEnd) {
        segmentList.push(segmentEnd - segmentStart);
        return;
    }

    const mid = (segmentStart + segmentEnd) / 2;

    // Recurse into left and/or right halves if they intersect with [queryStart, queryEnd)
    if (queryStart < mid) computeSegments(segmentList, queryStart, queryEnd, segmentStart, mid);
    if (queryEnd > mid) computeSegments(segmentList, queryStart, queryEnd, mid, segmentEnd);
}

function gcd(a, b) {
    while (a !== 0) {
        const remainder = b % a;
        b = a;
        a = remainder;
    }
    return b;
}

function testing_test() {
    const testCases = [
        { input: [0, 1, 1, 2], expected: 1 },
        { input: [0, 2, 0, 2], expected: 1 },
        { input: [1, 3, 1, 3], expected: 4 },
        { input: [0, 2, 1, 5], expected: 5 },
        { input: [9, 98, 244, 353], expected: 374 },
    ];

    testCases.forEach(({ input, expected }, i) => {
        const result = solve(...input);
        const status = result === expected ? "Passed" : "Failed";
        console.log(`Test ${i + 1}: ${status}`);
    });
}

testing_test();
