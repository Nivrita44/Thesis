function processModuloPairs(cases) {
    const results = [];

    for (const { n, arr }
        of cases) {
        if (n === 1) {
            results.push("YES");
            continue;
        }

        const ps = Array(n - 1).fill('');
        const skip = Array(n).fill(0);

        for (let i = n - 1; i >= 1; i--) {
            const has = new Map();
            for (let j = 0; j < n; j++) {
                if (!skip[j]) {
                    const r = arr[j] % i;
                    if (has.has(r)) {
                        const matchedIndex = has.get(r);
                        ps[i - 1] = `${j + 1} ${matchedIndex + 1}`;
                        skip[j] = 1;
                        break;
                    } else {
                        has.set(r, j);
                    }
                }
            }
        }

        results.push("YES");
        for (let p of ps) {
            if (p) results.push(p);
        }
    }

    return results;
}

function test() {
    const input = [
        { n: 1, arr: [4] },
        { n: 4, arr: [99, 7, 1, 13] },
        { n: 5, arr: [10, 2, 31, 44, 73] },
        { n: 5, arr: [87, 6, 81, 44, 32] },
        { n: 5, arr: [62, 35, 33, 79, 16] },
        { n: 5, arr: [6, 51, 31, 69, 42] },
        { n: 5, arr: [52, 63, 25, 21, 5] },
        { n: 12, arr: [33, 40, 3, 11, 31, 43, 37, 8, 50, 5, 12, 22] }
    ];

    const expected = [
        'YES',
        '2 1',
        'YES',
        '4 1',
        '2 1',
        '3 2',
        'YES',
        '5 1',
        '4 1',
        '3 1',
        '2 1',
        'YES',
        '4 1',
        '3 1',
        '2 1',
        '5 4',
        'YES',
        '3 1',
        '5 1',
        '2 1',
        '4 2',
        'YES',
        '4 1',
        '5 1',
        '2 1',
        '3 2',
        'YES',
        '2 1',
        '5 2',
        '3 1',
        '4 3',
        'YES',
        '9 1',
        '12 9',
        '11 1',
        '10 1',
        '6 1',
        '7 6',
        '2 1',
        '8 2',
        '5 2',
        '3 1',
        '4 1'
    ];

    const actual = processModuloPairs(input);

    console.log("✅ Output:");
    console.log(actual.join('\n'));

    console.log("\n✅ Expected:");
    console.log(expected.join('\n'));

    console.log("\n✅ Test Result:", actual.join('\n') === expected.join('\n') ? "Passed" : "Failed");
}

test();

//TODO: have to change