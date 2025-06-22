class FastQueue {
    constructor() {
        this.map = {};
        this.first = 0;
        this.last = -1;
    }
    push(...args) {
        let i = 0;
        if (!this.length) {
            this.first = this.last = 0;
            this.map[this.first] = args[i++];
        }
        for (; i < args.length; i++) {
            this.map[++this.last] = args[i];
        }
    }
    unshift(...args) {
        let i = 0;
        if (!this.length) {
            this.first = this.last = 0;
            this.map[this.first] = args[i++];
        }
        for (; i < args.length; i++) {
            this.map[--this.first] = args[i];
        }
    }
    pop() {
        const r = this.map[this.last];
        delete this.map[this.last];
        this.last--;
        return r;
    }
    shift() {
        const r = this.map[this.first];
        delete this.map[this.first];
        this.first++;
        return r;
    }
    get length() {
        if (this.first > this.last) return 0;
        return this.last - this.first + 1;
    }
    get(x) {
        return this.map[this.first + x];
    }
    getLast() {
        return this.map[this.last];
    }
    forEach(fn) {
        for (let i = this.first; i <= this.last; i++) {
            const r = fn(this.map[i], i - this.first);
            if (r === false) break;
        }
    }
}

function solve(n, arr, queries) {
    // Precompute cnt array
    const cnt = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        cnt[i] = n + 1 - i;
    }

    // Precompute prefix sums for cnt
    const pcnt = Array(n + 2).fill(0);
    for (let i = 1; i <= n; i++) {
        pcnt[i] = pcnt[i - 1] + cnt[i];
    }

    // Compute total sum of all elements
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += (n - i) * arr[i];
    }

    // Compute sum array
    const sum = Array(n + 1).fill(0);
    sum[0] = 0;
    let runningTotal = total;
    for (let i = 1; i <= n; i++) {
        sum[i] = runningTotal;
        runningTotal -= (n - i + 1) * arr[i - 1];
    }

    // Compute prefix sums for sum array
    const psum = Array(n + 2).fill(0n);
    for (let i = 1; i <= n; i++) {
        psum[i] = psum[i - 1] + BigInt(sum[i]);
    }

    // Compute prefix sums for arr
    const pre = Array(n + 1).fill(0n);
    for (let i = 1; i <= n; i++) {
        pre[i] = pre[i - 1] + BigInt(arr[i - 1]);
    }

    // Compute prefix sums of prefix sums
    const ppre = Array(n + 2).fill(0n);
    for (let i = 1; i <= n; i++) {
        ppre[i] = ppre[i - 1] + pre[i];
    }

    // Process queries
    const results = [];
    for (const [l, r] of queries) {
        const res = cal(r) - cal(l - 1);
        results.push(res.toString());
    }

    return results;

    function binarySearch(l, r, fn) {
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (fn(m)) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return r;
    }

    function cal(p) {
        if (p <= 0) return 0n;

        const start = binarySearch(1, n, x => pcnt[x] <= p);
        const rest = p - pcnt[start];
        
        let row, col;
        if (rest) {
            row = start + 1;
            col = start + rest;
        } else {
            row = start;
            col = n;
        }

        return psum[row - 1] + (ppre[col] - ppre[row - 1]) - pre[row - 1] * BigInt(col - row + 1);
    }
}

// Test function
function test() {
    const testCases = [
        {
            input: {
                n: 4,
                arr: [1, 2, 5, 10],
                queries: [
                    [1,1], [1,2], [1,3], [1,4], [1,5], [1,10],
                    [5,10], [6,10], [2,8], [3,4], [3,10], [3,8],
                    [5,6], [5,5], [1,8]
                ]
            },
            expected: [
                "1", "4", "12", "30", "32", "86",
                "56", "54", "60", "26", "82", "57",
                "9", "2", "61"
            ]
        }
    ];

    testCases.forEach((testCase, idx) => {
        const {n, arr, queries} = testCase.input;
        const results = solve(n, arr, queries);
        
        console.log(`Test Case ${idx + 1}:`);
        console.log(`Input:`);
        console.log(`n = ${n}, arr = [${arr}]`);
        console.log(`queries = [${queries.map(q => `[${q}]`).join(', ')}]`);
        console.log(`Expected Output:\n${testCase.expected.join('\n')}`);
        console.log(`Actual Output:\n${results.join('\n')}`);
        
        const passed = JSON.stringify(results) === JSON.stringify(testCase.expected);
        console.log(passed ? '✅ PASSED' : '❌ FAILED');
        console.log();
    });
}

// Run tests
test();