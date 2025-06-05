function solve(input) {
    let lines = input.trim().split('\n');
    let t = parseInt(lines[0]);
    let lineIndex = 1;
    let output = [];

    for (let _ = 0; _ < t; _++) {
        let [n, m] = lines[lineIndex++].split(' ').map(Number);
        let a = lines[lineIndex++].split(' ').map(Number);
        let b = lines[lineIndex++].split(' ').map(Number);

        a.sort((x, y) => x - y);
        b.sort((x, y) => x - y);

        let a_l = [];
        let b_l = [];

        for (let i = 0; i < Math.floor(n / 2); i++) {
            a_l.push(a[n - 1 - i] - a[i]);
        }

        for (let i = 0; i < Math.floor(m / 2); i++) {
            b_l.push(b[m - 1 - i] - b[i]);
        }

        let k_max = Math.min(Math.floor((n + m) / 3), n, m);
        output.push(k_max.toString());

        let k = [];
        let count_a = 0;
        let count_b = 0;
        let ans = 0;

        for (let i = 1; i <= k_max; i++) {
            if (count_a > n - i) {
                ans += b_l[count_b];
                count_b++;
                count_a--;
                ans -= a_l[count_a];
            }

            if (count_b > m - i) {
                ans += a_l[count_a];
                count_a++;
                count_b--;
                ans -= b_l[count_b];
            }

            if (count_a === n - i) {
                ans += b_l[count_b];
                count_b++;
            } else if (count_b === m - i) {
                ans += a_l[count_a];
                count_a++;
            } else if (a_l[count_a] > b_l[count_b]) {
                ans += a_l[count_a];
                count_a++;
            } else {
                ans += b_l[count_b];
                count_b++;
            }

            k.push(ans);
        }

        if (k_max > 0) {
            output.push(k.join(' '));
        }
    }

    return output.join('\n');
}
