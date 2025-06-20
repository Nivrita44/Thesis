const MOD = 1e9 + 7;
const MOD_CUT = ((1 << 20) * (1 << 20)) % MOD;

// Math operations
function add(a, b) { return (a + b) % MOD; }
function minus(a, b) { return add(add(a, -b), MOD); }
function mul(a, b) {
    let r = (a >> 20) * (b >> 20) * MOD_CUT
          + (a & 0xfff00000) * (b & 0xfffff)
          + (a & 0xfffff) * b;
    return r % MOD;
}

// Precompute prefix sums
const N = 3e5;
const prefix = new Array(N + 1).fill(0);
const prefix2 = new Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
    prefix[i] = (prefix[i - 1] + i) % MOD;
    prefix2[i] = (prefix2[i - 1] + i * i) % MOD;
}

// Helper functions
function range(n, a, l, r) {
    const c = r - l + 1;
    const p1 = mul(a, minus(prefix2[r], prefix2[l - 1]));
    const p2 = mul(n, minus(prefix[r], prefix[l - 1]));
    const p3 = mul(a, c);
    return minus(add(p2, p3), p1);
}

function cal(p, n) {
    let x = n;
    const q = [];
    while (x > 0) {
        q.unshift(x % p);
        x = Math.floor(x / p);
    }
    let temp = 0, b = 1;
    for (let i = 0; i < q.length; i++) {
        temp = add(temp, mul(q[i], b));
        b = mul(b, p);
    }
    return temp;
}

// Main solution function
function solve(n, k) {
    let s = 0;
    let kNum;
    
    if (k > n) {
        const times = (k - BigInt(n)) % BigInt(MOD);
        s = mul(Number(times), n);
        kNum = n;
    } else {
        kNum = Number(k);
    }
    
    let prev = kNum;
    for (let a = 1; ; a++) {
        let now = Math.floor(n / (a + 1)) + 1;
        if (n >= now * now) break;
        if (now <= kNum) {
            s = add(s, range(n, a, Math.max(2, now), Math.min(kNum, prev)));
        }
        prev = now - 1;
    }
    
    prev = Math.min(prev, kNum);
    for (let p = 2; p <= prev; p++) {
        s = add(s, cal(p, n));
    }
    return s;
}

/**************** TEST CASES ****************/
function runTests() {
    const testCases = [
        { input: [9, 3n], expected: 10 },
        { input: [19, 84n], expected: 2006 },
        { input: [9982, 44353n], expected: 120792461 },
        { input: [100000, 1000000007n], expected: 584502117 },
        { input: [17, 30n], expected: 775 },
        { input: [777, 1000000000000000000n], expected: 46058362 },
    ];

    console.log("Running Tests...\n");
    testCases.forEach(({ input, expected }, i) => {
        const result = solve(...input);
        const status = result === expected ? "PASS" : "FAIL";
        console.log(`Test ${i+1}: ${status}`);
        console.log(`Input: ${input}`);
        console.log(`Expected: ${expected}`);
        console.log(`Received: ${result}\n`);
    });
}

/**************** EXECUTION ****************/
// Uncomment one of these based on how you want to use the file:

// Option 1: Run tests directly
runTests();

// Option 2: For HackerRank submission (just the solve function)
// module.exports = { solve };

// Option 3: For command-line input (like original Kattio version)
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (t) => {
    for (let i = 0; i < +t; i++) {
        rl.question('', (line) => {
            const [n, k] = line.split(' ');
            console.log(solve(+n, BigInt(k)));
            if (i === +t - 1) rl.close();
        });
    }
});
*/