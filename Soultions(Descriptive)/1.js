function solve(x, y, k) {
    const g = gcd(x, y);
    const a = cal(x / g);
    const b = cal(y / g);
    const ans = a + b;
    return ans === Infinity ? -1 : ans;

    function cal(n) {
        const o = [];
        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                o.push(i);
                if (i !== n / i) o.push(n / i);
            }
        }
        o.sort((a, b) => a - b);

        const dp = Array(o.length);
        for (let i = 0; i < o.length; i++) {
            let temp = Infinity;
            for (let j = 0; j < i; j++) {
                if (o[i] % o[j] === 0 && o[i] / o[j] <= k) {
                    temp = Math.min(temp, dp[j]);
                }
            }
            dp[i] = Math.min(o[i] <= k ? (o[i] === 1 ? 0 : 1) : Infinity, temp + 1);
        }
        return dp[o.length - 1];
    }
}

function gcd(a, b) {
    while (a) {
        const r = b % a;
        b = a;
        a = r;
    }
    return b;
}
