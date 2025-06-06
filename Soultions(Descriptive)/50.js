function solve(n, arr) {
    const has = {};
    for (let i = 0; i < n; i++) {
        has[arr[i]] = 1;
    }

    arr.sort((a, b) => b - a);
    let lcm = arr[0];
    for (let i = 1; i < n; i++) {
        lcm = getLCM(lcm, arr[i]);
        if (lcm > 1e9) return n;
    }

    if (!has[lcm]) return n;

    const limit = Math.floor(Math.sqrt(lcm));
    let r = 0;
    for (let i = 1; i <= limit; i++) {
        if (lcm % i) continue;
        r = Math.max(r, cal(i), cal(lcm / i));
    }
    return r;

    function cal(d) {
        if (has[d]) return 0;
        let c = 0,
            temp;
        for (let i = 0; i < n; i++) {
            if (!(d % arr[i])) {
                temp = temp ? getLCM(temp, arr[i]) : arr[i];
                c++;
            }
        }
        return d === temp ? c : 0;
    }
}

function getLCM(a, b) {
    return a / gcd(a, b) * b;
}

function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}