function solve(n, s) {
    const parts = []
    let o
    for (let i = 0; i < n; i++) {
        if (s[i] === s[i - 1]) {
            o.c++
            o.r = i
        } else {
            o = { c: 1, l: i, r: i }
            parts.push(o)
        }
    }

    if (o.c === n && s[0] === '0') {
        return sum(1, n - 1)
    }

    let temp, max = 0
    for (let i = 0; i < parts.length; i++) {
        o = parts[i]
        if (+s[o.l]) {
            if (o.c > 1) {
                temp = 1 + Math.max(
                    cal(parts[i - 1], 0),
                    cal(parts[i + 1], 1),
                )
            } else {
                temp = 1 + cal(parts[i - 1], 0)
                        + cal(parts[i + 1], 1)
            }
            max = Math.max(max, temp)
        }
    }
    return max

    function cal(o, up) {
        if (!o) return 0
        return up ? sum(o.l, o.c) : sum(n - 1 - o.r, o.c)
    }

    function sum(first, k) {
        return (first + first + k - 1) * k / 2
    }
}
