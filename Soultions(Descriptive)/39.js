function solve(n, a) {
    const s = new Set();
    const x = a.includes(0) ? a.indexOf(0) : -1;
    let mex = 0;

    for (let j = n - 1; j >= 0; j--) {
        if (a[j] < mex) {
            mex = 0;
            break;
        }
        if (a[j] !== 0 || j === x) {
            s.add(a[j]);
            while (s.has(mex)) {
                mex++;
            }
        }
    }

    const zeroCount = a.filter(num => num === 0).length;
    return n - zeroCount + (mex !== 0 ? 1 : 0);
}
