function solve(n, k, items) {
    let minTotal = Infinity;

    for (let i = 0; i < n; i++) {
        const dp = new Array(k + 1).fill(Infinity);
        dp[0] = 0;

        // Process all items except the current one (i)
        for (let j = 0; j < n; j++) {
            if (j === i) continue;
            const v = items[j].a + items[j].b;
            const w = items[j].a * items[j].b;
            
            for (let p = k; p >= v; p--) {
                dp[p] = Math.min(dp[p], dp[p - v] + w);
            }
        }

        // Process the current item (i)
        const v_i = items[i].a + items[i].b;
        const max_q = Math.min(k, v_i);
        
        for (let q = Math.max(0, k - v_i); q <= k; q++) {
            const u = k - q;
            let res = 0;
            let a = items[i].a;
            let b = items[i].b;

            for (let j = 0; j < u; j++) {
                if (a < b) {
                    b--;
                    res += a;
                } else {
                    a--;
                    res += b;
                }
            }

            const total = dp[q] + res;
            if (total < minTotal) {
                minTotal = total;
            }
        }
    }

    return minTotal === Infinity ? -1 : minTotal;
}

// Test function
function test() {
    const testCases = [
        {
            input: {
                n: 1,
                k: 4,
                items: [{a: 6, b: 3}]
            },
            expected: 12
        },
        {
            input: {
                n: 5,
                k: 10,
                items: [
                    {a: 1, b: 1},
                    {a: 1, b: 1},
                    {a: 1, b: 1},
                    {a: 1, b: 1},
                    {a: 1, b: 1}
                ]
            },
            expected: 5
        },
        {
            input: {
                n: 2,
                k: 100,
                items: [
                    {a: 1, b: 2},
                    {a: 5, b: 6}
                ]
            },
            expected: -1
        },
        {
            input: {
                n: 4,
                k: 4,
                items: [
                    {a: 1, b: 5},
                    {a: 4, b: 4},
                    {a: 3, b: 11},
                    {a: 2, b: 2}
                ]
            },
            expected: 14
        },
        {
            input: {
                n: 4,
                k: 4,
                items: [
                    {a: 3, b: 3},
                    {a: 4, b: 4},
                    {a: 2, b: 2},
                    {a: 1, b: 1}
                ]
            },
            expected: 17
        }
    ];

    testCases.forEach((testCase, index) => {
        const {n, k, items} = testCase.input;
        const result = solve(n, k, items);
        
        console.log(`Test Case ${index + 1}:`);
        console.log(`Input: n=${n}, k=${k}, items=${JSON.stringify(items)}`);
        console.log(`Expected: ${testCase.expected}`);
        console.log(`Actual: ${result}`);
        
        if (result === testCase.expected) {
            console.log('✅ PASSED\n');
        } else {
            console.log('❌ FAILED\n');
        }
    });
}

// Run the tests
test();

// have to change