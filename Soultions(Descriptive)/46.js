function solveArray(arr) {
    const n = arr.length;
    if (n === 1) return 'YES';

    const ps = Array(n - 1);
    const skip = Array(n);

    for (let i = n - 1; i >= 1; i--) {
        const has = Array(i);
        for (let j = 0; j < n; j++) {
            if (!skip[j]) {
                const r = arr[j] % i;
                if (has[r]) {
                    ps[i - 1] = [j + 1, has[r]].join(' ');
                    skip[j] = 1;
                    break;
                } else {
                    has[r] = j + 1;
                }
            }
        }
    }

    return 'YES\n' + ps.join('\n');
}