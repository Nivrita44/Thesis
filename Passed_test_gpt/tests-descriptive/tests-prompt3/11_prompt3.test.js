import { solve } from '../../solutions-descriptive/11.js'

test('Simple 2-node, 1-edge graph, 1 query k=1', () => {
    const n = 2,
        m = 1,
        q = 1
    const edges = [{ u: 1, v: 2, w: 7 }]
    const queries = [
        [1, 2, 1]
    ]
    expect(solve(n, m, edges, queries)).toEqual([7])
})

test('Chain of 4 nodes, query for 2nd largest k=2', () => {
    const n = 4,
        m = 3,
        q = 1
    const edges = [
        { u: 1, v: 2, w: 4 },
        { u: 2, v: 3, w: 5 },
        { u: 3, v: 4, w: 6 }
    ]
    const queries = [
        [1, 4, 2]
    ]
    expect(solve(n, m, edges, queries)).toEqual([5])
})

test('Square cycle, maximum k=3', () => {
    const n = 4,
        m = 4,
        q = 1
    const edges = [
        { u: 1, v: 2, w: 8 },
        { u: 2, v: 3, w: 5 },
        { u: 3, v: 4, w: 2 },
        { u: 4, v: 1, w: 6 }
    ]
    const queries = [
        [1, 3, 3]
    ]
    expect(solve(n, m, edges, queries)).toEqual([2])
})

test('Query between nodes with k=1 on a path with different possible paths', () => {
    const n = 4,
        m = 4,
        q = 1
    const edges = [
        { u: 1, v: 2, w: 1 },
        { u: 2, v: 3, w: 10 },
        { u: 3, v: 4, w: 1 },
        { u: 1, v: 4, w: 5 }
    ]
    const queries = [
        [1, 4, 1]
    ]
    expect(solve(n, m, edges, queries)).toEqual([5])
})

test('Edge weights equal', () => {
    const n = 3,
        m = 3,
        q = 2
    const edges = [
        { u: 1, v: 2, w: 7 },
        { u: 2, v: 3, w: 7 },
        { u: 1, v: 3, w: 7 }
    ]
    const queries = [
        [1, 2, 1],
        [2, 3, 2]
    ]
    expect(solve(n, m, edges, queries)).toEqual([7, 7])
})

test('Path with high k, distinct edge weights', () => {
    const n = 5,
        m = 4,
        q = 1
    const edges = [
        { u: 1, v: 2, w: 10 },
        { u: 2, v: 3, w: 20 },
        { u: 3, v: 4, w: 30 },
        { u: 4, v: 5, w: 40 }
    ]
    const queries = [
        [1, 5, 4]
    ]
    expect(solve(n, m, edges, queries)).toEqual([10])
})

test('All edge weights distinct, query for 1st, 2nd, 3rd max', () => {
    const n = 4,
        m = 3,
        q = 3
    const edges = [
        { u: 1, v: 2, w: 9 },
        { u: 2, v: 3, w: 6 },
        { u: 3, v: 4, w: 3 }
    ]
    const queries = [
        [1, 4, 1],
        [1, 4, 2],
        [1, 4, 3]
    ]
    expect(solve(n, m, edges, queries)).toEqual([9, 6, 3])
})

test('Large edge weight values', () => {
    const n = 3,
        m = 2,
        q = 1
    const edges = [
        { u: 1, v: 2, w: 1000000000 },
        { u: 2, v: 3, w: 999999999 }
    ]
    const queries = [
        [1, 3, 2]
    ]
    expect(solve(n, m, edges, queries)).toEqual([999999999])
})