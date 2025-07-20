const MOD = 1e9 + 7;
const MOD_CUT = ((1 << 20) * (1 << 20)) % MOD;

function add(a, b) {
    return (a + b) % MOD;
}

function minus(a, b) {
    return add(add(a, -b), MOD);
}

function mul(a, b) {
    let r = (a >> 20) * (b >> 20) * MOD_CUT
        + (a & 0xfff00000) * (b & 0xfffff)
        + (a & 0xfffff) * b;
    return r % MOD;
}

function pow(a, b) {
    let r = 1;
    let base = a;
    while (b) {
        if (b & 1n) {
            r = mul(r, base);
        }
        b /= 2n;
        base = mul(base, base);
    }
    return r;
}

export function solve(n, m, k, queries) {
    let count = 0;
    let black = 0;

    for (let i = 0; i < k; i++) {
        const [x, y, color] = queries[i];
        const isBorder = x === 1 || x === n || y === 1 || y === m;
        const isCorner = (x === 1 && y === 1) || (x === 1 && y === m) ||
                         (x === n && y === 1) || (x === n && y === m);
        if (isBorder && !isCorner) {
            count++;
            black += color;
        }
    }

    const total = BigInt(n) * BigInt(m) - BigInt(k);

    if (count === 2 * (n + m - 4)) {
        return (black & 1) ? 0 : pow(2, total);
    } else {
        return pow(2, total - 1n);
    }
}

function testing_test() {
    const testCases = [
        {
            input: {
                n: 3,
                m: 3,
                k: 6,
                queries: [
                    [1, 1, 0],
                    [1, 2, 1],
                    [1, 3, 0],
                    [3, 1, 1],
                    [3, 2, 0],
                    [3, 3, 1]
                ]
            },
            expected: 4
        },
        {
            input: {
                n: 3,
                m: 4,
                k: 12,
                queries: [
                    [1, 1, 0],
                    [1, 2, 1],
                    [1, 3, 0],
                    [1, 4, 1],
                    [2, 1, 1],
                    [2, 2, 0],
                    [2, 3, 1],
                    [2, 4, 0],
                    [3, 1, 0],
                    [3, 2, 1],
                    [3, 3, 0],
                    [3, 4, 1]
                ]
            },
            expected: 0
        }
    ];

    for (const { input, expected } of testCases) {
        const { n, m, k, queries } = input;
        const result = solve(n, m, k, queries);
        console.log(`Input: n=${n}, m=${m}, k=${k}, queries=${JSON.stringify(queries)}`);
        console.log(`Expected: ${expected}, Got: ${result}`);
        console.assert(result === expected, `Test failed for input: ${JSON.stringify(input)}`);
    }
}

testing_test();