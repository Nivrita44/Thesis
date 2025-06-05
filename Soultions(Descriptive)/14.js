function solveLogic(n, k, l, a) {
    k *= 2;
    l *= 2;
    a = a.map(x => x * 2);

    let t = 0;
    let x = 0;

    for (let i = 0; i < n; i++) {
        if (x < a[i] - t) {
            let dt = a[i] - t - x;
            if (i > 0) {
                dt = Math.floor(dt / 2);
            }
            t += dt;
            if (i > 0) {
                x += dt + k;
            } else {
                x = k;
            }
        } else {
            x = Math.max(x, Math.min(x, a[i] + t) + k);
        }
    }

    return t + Math.max(l - x, 0);
}
