const N = 2e6 + 5;
const offset = 1e6;
const sum = new Array(N).fill(0);

function lowbit(x) {
    return x & -x;
}

function add(x) {
    while (x < N) {
        sum[x]++;
        x += lowbit(x);
    }
}

function ask(x) {
    let ans = 0;
    while (x > 0) {
        ans += sum[x];
        x -= lowbit(x);
    }
    return ans;
}

function solve(s) {
    const n = s.length;
    const a = [];

    for (const ch of s) {
        if (ch === '0') {
            a.push(1);
        } else {
            a.push(-3);
        }
    }

    let ans = 0;
    let pre_sum = 0;
    add(pre_sum + offset);

    const cnt = new Map();
    cnt.set(0, 1);

    for (let i = 0; i < n; i++) {
        pre_sum += a[i];
        ans += (cnt.get(pre_sum + 1) || 0) + ask(pre_sum - 2 + offset);
        cnt.set(pre_sum, (cnt.get(pre_sum) || 0) + 1);
        add(pre_sum + offset);
    }

    return ans;
}

function testSolve() {
    const input = "0010010011";
    const expectedOutput = 12;

    const result = solve(input);

    if (result === expectedOutput) {
        console.log("Test passed!");
    } else {
        console.log(`Test failed! Expected ${expectedOutput}, but got ${result}`);
    }
}

testSolve();