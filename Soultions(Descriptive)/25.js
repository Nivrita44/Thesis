function solve(n, k) {
    if (n === 1) {
        if (k === 1) return [['1']];
        return null;
    }

    if (n === 2) {
        if (k === 2) return [['1 2', '2 1']];
        return null;
    }

    if (k === 1 || (n % 2 === 0 && k % 2 === 1)) return null;

    if (n <= 8) {
        let f = 1;
        for (let j = 2; j <= n; j++) f *= j;
        if (k > f || k === f - 1) return null;
    }

    const results = [];

    if (k % 2 === 0) {
        let cnt = 0;
        let a = Array.from({ length: n }, (_, i) => i + 1);
        do {
            results.push(a.join(' '));
            results.push(a.map(x => n + 1 - x).join(' '));
            cnt += 2;
            if (cnt === k) break;
        } while (nextPerm(a));
    } else {
        let a = Array.from({ length: n }, (_, i) => i + 1);
        let b = Array(3).fill().map(() => Array(n));
        for (let i = 0; i < n; i++) b[0][i] = i + 1;

        let m = Math.floor(n / 2), v = 1;
        for (let i = m + 1; i < n; i++) b[1][i] = v++;
        for (let i = 0; i <= m; i++) b[1][i] = v++;

        v = 1;
        for (let i = m; i >= 0; i--) b[2][i] = v, v += 2;
        v = 2;
        for (let i = n - 1; i > m; i--) b[2][i] = v, v += 2;

        for (let i = 0; i < 3; i++) results.push(b[i].join(' '));

        let cnt = 3;
        outer: do {
            if (cnt === k) break;
            for (let i = 0; i < 3; i++) {
                let c = 0;
                for (let j = 0; j < n; j++) {
                    if (a[j] === b[i][j]) c++;
                }
                if (c === n) continue outer;
                c = 0;
                for (let j = 0; j < n; j++) {
                    if (n + 1 - a[j] === b[i][j]) c++;
                }
                if (c === n) continue outer;
            }

            results.push(a.join(' '));
            results.push(a.map(x => n + 1 - x).join(' '));
            cnt += 2;
        } while (nextPerm(a));
    }

    return results;
}

function nextPerm(a) {
    let i = -1;
    for (let k = a.length - 2; k >= 0; k--) {
        if (a[k] < a[k + 1]) {
            i = k;
            break;
        }
    }
    if (i !== -1) {
        let j = a.length - 1;
        while (a[j] <= a[i]) j--;
        [a[i], a[j]] = [a[j], a[i]];
    }
    let l = Math.floor((a.length - (i + 1)) / 2);
    for (let k = 1; k <= l; k++) {
        [a[i + k], a[a.length - k]] = [a[a.length - k], a[i + k]];
    }
    return i !== -1;
}

function testSolve() {
    const testCases = [
        { input: [3, 3], expected: ['YES', '1 2 3', '2 3 1', '3 1 2'] },
        { input: [4, 2], expected: ['YES', '1 2 3 4', '4 3 2 1'] },
        { input: [5, 1], expected: ['NO'] }
    ];

    for (const { input, expected } of testCases) {
        const [n, k] = input;
        const result = solve(n, k);
        if (result === null) {
            console.log('NO');
            if (expected[0] !== 'NO') {
                console.error(`Test failed for input ${input}. Expected ${expected}, but got NO.`);
            }
        } else {
            console.log('YES');
            for (const line of result) {
                console.log(line);
            }
            const output = ['YES', ...result];
            if (JSON.stringify(output) !== JSON.stringify(expected)) {
                console.error(`Test failed for input ${input}. Expected ${expected}, but got ${output}.`);
            }
        }
    }
}

testSolve();