const cal = (x, y, z, d) => {
    return x * d + Math.ceil(z / d) * y;
};

const fun = (mn, mx, x, y, z) => {
    if (mn === 0) mn++;
    let ans2 = cal(x, y, z, mn);
    for (let d = mn; d <= mx;) {
        let cnt = Math.ceil(z / d);
        ans2 = Math.min(ans2, x * d + cnt * y);
        if (cnt === 1) break;
        d = Math.floor((z + cnt - 2) / (cnt - 1));
    }
    return ans2;
};

const solve = (x, y, z, k) => {
    let ans = Number.MAX_SAFE_INTEGER;
    for (let cnt = 0;; cnt++) {
        let nz = z - k * cnt * (cnt + 1) / 2;
        let add = cnt * y;
        if (nz <= 0) {
            ans = Math.min(ans, add + k * cnt * x);
            break;
        }
        add += fun(k * cnt, k * (cnt + 1) - 1, x, y, nz);
        ans = Math.min(ans, add);
    }
    return ans;
};

const test = () => {
    const inputs = [
        [2, 3, 5, 5],
        [10, 20, 40, 5],
        [1, 60, 100, 10],
        [60, 1, 100, 10]
    ];
    const expectedOutputs = [12, 190, 280, 160];

    for (let i = 0; i < inputs.length; i++) {
        const result = solve(...inputs[i]);
        console.log(`Test case ${i + 1}:`, result === expectedOutputs[i] ? "Passed" : `Failed (Expected ${expectedOutputs[i]}, Got ${result})`);
    }
};

test();
