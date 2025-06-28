const MAXNODES = 1000000;

function getBitLength(x) {
    return x.toString(2).length;
}

function solve(n, k, A) {
    if (k === 0) return '1';

    const p = getBitLength(k) - 1;
    const shift = p + 1;
    const pref0 = A[0] >> shift;
    let ok = false;
    for (let i = 1; i < n; i++) {
        if ((A[i] >> shift) !== pref0) {
            ok = true;
            break;
        }
    }
    if (ok) return '2';

    const rem = k ^ (1 << p);
    const typ = A.map(x => (x >> p) & 1);
    let low = p > 0 ? A.map(x => x & ((1 << p) - 1)) : new Array(n).fill(0);

    let nodeCount = 1;
    let ans = n + 1;

    
    const ch0 = new Uint32Array(MAXNODES + 5).fill(0);
    const ch1 = new Uint32Array(MAXNODES + 5).fill(0);
    const mx0 = new Uint32Array(MAXNODES + 5).fill(0);
    const mx1 = new Uint32Array(MAXNODES + 5).fill(0);

    for (let i = 0; i < n; i++) {
        const idx = i + 1;
        const t0 = typ[i];
        const t1 = t0 ^ 1;

        
        if ((t1 === 0 ? mx0[1] : mx1[1]) !== 0) {
            let best = 0;
            let nd = 1;
            const v = low[i];
            for (let b = p - 1; b >= 0 && nd; b--) {
                const rb = (rem >> b) & 1;
                const vb = (v >> b) & 1;

                if (rb === 0) {
                    const xb = vb ^ 1;
                    const c = xb === 0 ? ch0[nd] : ch1[nd];
                    if (c) {
                        const val = t1 === 0 ? mx0[c] : mx1[c];
                        if (val > best) best = val;
                    }
                }

                const xb = vb ^ rb;
                nd = xb === 0 ? ch0[nd] : ch1[nd];
            }

            if (nd) {
                const val = t1 === 0 ? mx0[nd] : mx1[nd];
                if (val > best) best = val;
            }

            if (best) {
                const length = idx - best + 1;
                if (length < ans) {
                    ans = length;
                    if (ans === 2) break;
                }
            }
        }

        
        if (t0 === 0) mx0[1] = idx;
        else mx1[1] = idx;

        let nd = 1;
        for (let b = p - 1; b >= 0; b--) {
            const vb = (low[i] >> b) & 1;
            let c = vb === 0 ? ch0[nd] : ch1[nd];
            if (c === 0) {
                nodeCount++;
                if (vb === 0) ch0[nd] = nodeCount;
                else ch1[nd] = nodeCount;
                c = nodeCount;
            }
            nd = c;
            if (t0 === 0) mx0[nd] = idx;
            else mx1[nd] = idx;
        }
    }

    return ans <= n ? ans.toString() : '-1';
}

function testSolve() {
    const testCases = [
        { input: [5, 0, [1, 2, 3, 4, 5]], expected: '1' },
        { input: [5, 7, [1, 2, 3, 4, 5]], expected: '2' },
        { input: [5, 8, [1, 2, 3, 4, 5]], expected: '-1' },
        { input: [5, 7, [3, 5, 1, 4, 2]], expected: '4' },
        { input: [5, 3, [3, 5, 1, 4, 2]], expected: '2' },
        { input: [6, 71, [26, 56, 12, 45, 60, 27]], expected: '-1' },
    ];

    for (const { input, expected } of testCases) {
        const [n, k, A] = input;
        const result = solve(n, k, A);
        console.log(`Input: n=${n}, k=${k}, A=${A}`);
        console.log(`Expected: ${expected}, Got: ${result}`);
        console.log(result === expected ? 'Test passed' : 'Test failed');
        console.log('---');
    }
}

testSolve();