function solve(n, m, k, h, x) {
    let ans = Infinity;
    let lo = 1, hi = 1e9;

    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        const range = [];

        for (let j = 0; j < x.length; j++) {
            const minDamage = Math.ceil(h[j] / mid);
            const diff = m - minDamage;
            const start = x[j] - diff;
            const end = x[j] + diff;
            if (start <= end) {
                range.push([start, 1]);
                range.push([end + 1, -1]);
            }
        }

        range.sort((a, b) => a[0] - b[0]);

        let total = 0;
        let found = false;

        for (let j = 0; j < range.length; j++) {
            total += range[j][1];
            if (total >= k) {
                found = true;
                break;
            }
        }

        if (found) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return ans === Infinity ? -1 : ans;
}
