function solveCore(n, arr, queries) {
    const cnt = Array(n + 1)
    for (let i = 0; i < cnt.length; i++) {
        cnt[i] = n + 2 - (i + 1)
    }
    cnt[0] = 0

    const pcnt = Array(cnt.length)
    pcnt[-1] = 0
    for (let i = 0; i < cnt.length; i++) {
        pcnt[i] = pcnt[i - 1] + cnt[i]
    }

    let total = 0
    for (let i = 0; i < n; i++) {
        total += (n - i) * arr[i]
    }

    const sum = Array(n)
    for (let i = 0; i < sum.length; i++) {
        sum[i] = total
        total -= (n - i) * arr[i]
    }
    sum.unshift(0)

    const psum = Array(sum.length)
    psum[-1] = 0 n
    for (let i = 0; i < sum.length; i++) {
        psum[i] = psum[i - 1] + BigInt(sum[i])
    }

    const pre = Array(n + 1)
    pre[0] = 0 n
    for (let i = 1; i <= n; i++) {
        pre[i] = pre[i - 1] + BigInt(arr[i - 1])
    }

    const ppre = Array(pre.length)
    ppre[-1] = 0 n
    for (let i = 0; i < pre.length; i++) {
        ppre[i] = ppre[i - 1] + pre[i]
    }

    function cal(p) {
        if (!p) return 0 n
        const start = binarySearch(1, n, x => pcnt[x] <= p)
        const rest = p - pcnt[start]
        let row, col
        if (rest) {
            row = start + 1
            col = start + 1 + rest - 1
        } else {
            row = start
            col = n
        }
        return psum[row - 1] + ppre[col] - ppre[row - 1] - pre[row - 1] * BigInt(col - row + 1)
    }

    function binarySearch(l, r, fn) {
        while (l <= r) {
            const m = Math.floor((l + r) / 2)
            if (fn(m)) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
        return r
    }

    return queries.map(([l, r]) => cal(r) - cal(l - 1))
}