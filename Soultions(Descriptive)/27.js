function solve(n, points) {
    const xs = new Map(), xys = new Map()
    for (let i = 0; i < n; i++) {
        const [x, y] = points[i]
        xs.set(x, (xs.get(x) || 0) + 1)
        xys.set(x + y, (xys.get(x + y) || 0) + 1)
    }

    let fx, fxy
    for (const [x, count] of xs) {
        if (count & 1) {
            fx = x
            break
        }
    }
    for (const [xy, count] of xys) {
        if (count & 1) {
            fxy = xy
            break
        }
    }

    return [fx, fxy - fx]
}
