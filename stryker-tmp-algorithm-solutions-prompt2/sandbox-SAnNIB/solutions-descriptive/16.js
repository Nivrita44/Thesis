// @ts-nocheck
// -------------------- Helper --------------------
function minPicks(v, need) {
    let count = 0, sum = 0;
    for (let x of v) {
        if (sum >= need) break;
        sum += x;
        count++;
    }
    return (sum >= need) ? count : 1000000000;
}

// -------------------- Core Logic --------------------
function canTransform(s, a, b, ab, ba) {
    let totalA = (s.match(/A/g) || []).length;
    let totalB = (s.match(/B/g) || []).length;
    let m = Math.max(totalA - a, totalB - b, 0);

    let totalPairs = 0;
    let addOdd = 0;
    let evenA = [], evenB = [];

    const n = s.length;
    let i = 0;
    while (i < n) {
        let j = i;
        while (j + 1 < n && s[j + 1] !== s[j]) { j++; }
        let len = j - i + 1;
        if (len >= 2) {
            let p = Math.floor(len / 2);
            totalPairs += p;
            if (len % 2 === 1) {
                addOdd += p;
            } else {
                if (s[i] === 'A') evenA.push(p);
                else evenB.push(p);
            }
        }
        i = j + 1;
    }

    if (totalPairs < m || m > ab + ba) {
        return "NO";
    }

    let availableDrop = totalPairs - m;
    let sumA = evenA.reduce((acc, val) => acc + val, 0);
    let needA = Math.max(sumA - ab, 0);
    let sumB = evenB.reduce((acc, val) => acc + val, 0);
    let needB = Math.max(sumB - ba, 0);

    evenA.sort((x, y) => y - x);
    evenB.sort((x, y) => y - x);

    let dA = minPicks(evenA, needA);
    let dB = minPicks(evenB, needB);

    return (dA + dB) <= availableDrop ? "YES" : "NO";
}

// -------------------- Exported Solve --------------------
export function solve(input) {
    let lines = input.trim().split("\n");
    let s = lines[0].trim();
    let nums = (lines[1] || "").trim().split(/\s+/).filter(Boolean).map(Number);

    // default to 0 if not provided
    let [a, b, ab, ba] = [0, 0, 0, 0];
    if (nums.length > 0) [a, b, ab, ba] = nums;

    return canTransform(s, a, b, ab, ba);
}


// -------------------- Local Testing --------------------
function testing_test() {
    const testCases = [
        { input: "A\n1 0 0 0", expected: "YES" },
        { input: "A\n0 0 0 0", expected: "NO" },
        { input: "B\n0 1 0 0", expected: "YES" },
        { input: "B\n0 0 0 0", expected: "NO" },
        { input: "ABA\n0 0 1 1", expected: "NO" },
        { input: "ABBABAAB\n5 5 0 0", expected: "YES" },
        { input: "ABABBAABBAAB\n1 1 2 3", expected: "YES" },
        { input: "ABBBBAB\n0 3 2 0", expected: "YES" },
        { input: "BAABBA\n1 3 2 0", expected: "NO" },
    ];

    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const result = solve(input);
        console.log(
            `Test case ${i + 1}:`,
            result === expected ? "PASSED" : `FAILED (Expected: ${expected}, Got: ${result})`
        );
    }
}

    testing_test();

