const LG = 60
let dp
pre()

function min(a, b) {
    return a < b ? a : b
}

function pre() {
    dp = Array(LG + 1).fill(0).map(() =>
        Array(LG + 1).fill(0).map(() =>
            Array(LG + 1).fill(Infinity)))

    const ps = Array(LG + 1)
    ps[0] = 1n
    for (let i = 1; i <= LG; i++) {
        ps[i] = ps[i - 1] + ps[i - 1]
    }

    dp[0][0].fill(0n)

    for (let i = 0; i <= LG; i++) {
        for (let j = 0; j <= LG; j++) {
            for (let first = LG; first >= 1; first--) {
                if (dp[i][j][first] === Infinity) continue
                const x = dp[i][j][first] + ps[first - 1]
                update(i + first - 1, j, first - 1, x)
                update(i, j + first - 1, first - 1, x)
                update(i, j, first - 1, dp[i][j][first])
            }
            for (let first = 1; first <= LG; first++) {
                update(i, j, 0, dp[i][j][first])
            }
        }
    }

    function update(i, j, k, x) {
        if (i <= LG && j <= LG) {
            dp[i][j][k] = min(dp[i][j][k], x)
        }
    }
}

function solve(x, y) {
    const map = new Map()
    let temp = x
    for (let i = 0; i <= LG; i++) {
        map.set(temp, i)
        if (!temp) break
        temp /= 2n
    }

    temp = y
    let ans = Infinity
    for (let i = 0; i <= LG; i++) {
        if (map.has(temp)) {
            const j = map.get(temp)
            ans = min(ans, dp[j][i][0])
        }
        temp /= 2n
    }

    return ans
}
