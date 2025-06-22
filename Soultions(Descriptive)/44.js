const N = 1e7 + 10;
let sg = new Uint32Array(N);
let v = new Uint8Array(N);
let f = new Uint32Array(N);
let p = [];

function init() {
    let cnt = 0;
    for (let i = 2; i < N; i++) {
        if (!v[i]) {
            p[cnt++] = i;
            f[i] = i;
        }
        for (let j = 0; j < cnt && i * p[j] < N; j++) {
            v[i * p[j]] = 1;
            if (i % p[j] === 0) {
                f[i * p[j]] = f[i];
                break;
            }
            f[i * p[j]] = p[j];
        }
    }
}

function tsg() {
    let max = 0;
    for (let i = 1; i < N; i++) {
        if (i & 1) {
            if (!v[i]) {
                sg[i] = ++max;
            } else {
                sg[i] = sg[f[i]];
            }
        }
    }
}

function solveGame(arr) {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans ^= sg[arr[i]];
    }
    return ans ? "Alice" : "Bob";
}

init();
tsg();


function testSolveGame() {
    const testCases = [
        { input: [3, [3, 2, 9]], expected: "Bob" },
        { input: [4, [3, 3, 6, 1]], expected: "Alice" },
        { input: [5, [1, 2, 3, 4, 5]], expected: "Bob" },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const [n, arr] = input;
        const result = solveGame(arr);
        console.log(`Test Case ${index + 1}:`, result === expected ? "Passed" : `Failed (Expected: ${expected}, Got: ${result})`);
    });
}

testSolveGame();
