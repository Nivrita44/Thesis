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
