function solve(arr) {
    const n = arr.length;
    const has = {};
    for (let i = 0; i < n; i++) {
        const x = arr[i];
        has[x] = 1;
    }
    arr.sort((a, b) => b - a);
    
    let lcm = arr[0];
    for (let i = 1; i < n; i++) {
        const x = arr[i];
        lcm = getLCM(lcm, x);
        if (lcm > 1e9) return n;
    }
    if (!has[lcm]) return n;

    const limit = Math.floor(Math.sqrt(lcm));
    let r = 0;
    for (let i = 1; i <= limit; i++) {
        if (lcm % i) continue;
        r = Math.max(r, cal(i), cal(lcm / i));
    }
    return r;

    function cal(d) {
        if (has[d]) return 0;
        let c = 0, temp;
        for (let i = 0; i < n; i++) {
            if (!(d % arr[i])) {
                temp = temp ? getLCM(temp, arr[i]) : arr[i];
                c++;
            }
        }
        return (d === temp) ? c : 0;
    }
}

function getLCM(lcm, x) {
    return lcm / gcd(x, lcm) * x;
}

function gcd(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;

    while (a) {
        const r = b % a;
        b = a;
        a = r;
    }
    return b;
}


function test() {
    const testCases = [
        {
            input: [1, 2, 4, 8, 16],
            expected: 0
        },
        {
            input: [3, 2, 10, 20, 60, 1],
            expected: 4
        },
        {
            input: [2, 3, 4, 6, 12, 100003, 1200036],
            expected: 4
        },
        {
            input: [2, 42, 7, 3, 6, 7, 7, 1, 6],
            expected: 5
        },
        {
            input: [4, 99, 57, 179, 10203, 2, 11, 40812],
            expected: 8
        },
        {
            input: [1],
            expected: 0
        }
    ];

    for (let i = 0; i < testCases.length; i++) {
        const {input, expected} = testCases[i];
        const result = solve(input);
        if (result === expected) {
            console.log(`Test case ${i + 1}: Passed`);
        } else {
            console.log(`Test case ${i + 1}: Failed`);
            console.log(`  Input: [${input}]`);
            console.log(`  Expected: ${expected}, Got: ${result}`);
        }
    }
}




test();