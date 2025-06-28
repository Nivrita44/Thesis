function solve(n, m, k, arr) {
    let l = n + 1, r = 0, ml = m, mr = m;
    let skip = 0, has = 0;
    const ans = Array(k);

    for (let i = 0; i < k; i++) {
        const x = arr[i];
        if (has) {
            if (x < l) l--;
            if (x > r) r++;
        }
        if (!skip) {
            if (x < ml) ml--;
            else if (x > mr) mr++;
            else {
                if (ml === mr) skip = 1;
                has = 1;
                l = Math.min(l, n);
                r = Math.max(r, 1);
            }
        }

        let total = 0;
        if (skip) {
            total += cal(1, r);
            total += cal(Math.max(l, r + 1), n);
        } else {
            total += cal(ml, mr);
            total += cal(1, Math.min(r, ml - 1));
            total += cal(Math.max(l, mr + 1), n);
        }

        ans[i] = total;
    }

    return ans.join(' ');
}

function cal(l, r) {
    return r - l + 1;
}

function testSolve() {
    const testCases = [
        {
            input: [6, 5, 3, [1, 2, 3]],
            expected: "2 3 5"
        },
        {
            input: [2, 1, 4, [2, 1, 1, 2]],
            expected: "2 2 2 2"
        },
        {
            input: [5, 3, 1, [3]],
            expected: "2"
        },
        {
            input: [3, 2, 4, [2, 1, 1, 1]],
            expected: "2 3 3 3"
        },
        {
            input: [18, 15, 4, [13, 15, 1, 16]],
            expected: "2 4 6 8"
        }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = solve(...input);
        console.log(`Test Case ${index + 1}: ${result === expected ? "Passed" : "Failed"}`);
        if (result !== expected) {
            console.log(`  Expected: ${expected}`);
            console.log(`  Got: ${result}`);
        }
    });
}

testSolve();


//create e a test function in this file to test the above function. don;t use describe, it, chai. normal test function.
