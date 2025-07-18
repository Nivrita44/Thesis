// @ts-nocheck
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
    let answer = 0;
    while (x > 0) {
        answer += sum[x];
        x -= lowbit(x);
    }
    return answer;
}

function solve(s) {
    const n = s.length;
    const a = [];

    for (const character of s) {
        if (character === '0') {
            a.push(1);
        } else {
            a.push(-3);
        }
    }

    let answer = 0;
    let pre_sum = 0;
    add(pre_sum + offset);

    const count = new Map();
    count.set(0, 1);

    for (let i = 0; i < n; i++) {
        pre_sum += a[i];
        answer += (count.get(pre_sum + 1) || 0) + ask(pre_sum - 2 + offset);
        count.set(pre_sum, (count.get(pre_sum) || 0) + 1);
        add(pre_sum + offset);
    }

    return answer;
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