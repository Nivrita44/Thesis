import { solve } from '../../solutions-descriptive/11.js';

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

test('Triangle graph 3 nodes, all edges diff weight, various k', () => {
    const n = 3,
        m = 3,
        q = 2
    const edges = [
        { u: 1, v: 2, w: 2 },
        { u: 2, v: 3, w: 3 },
        { u: 1, v: 3, w: 1 }
    ]
    const queries = [
        [1, 3, 1],
        [1, 3, 2]
    ]
    expect(solve(n, m, edges, queries)).toEqual([2, 1])
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

test('Disconnected not possible (guaranteed connected), so ask k > path length', () => {
    const n = 3,
        m = 2,
        q = 2
    const edges = [
        { u: 1, v: 2, w: 1 },
        { u: 2, v: 3, w: 2 }
    ]
    const queries = [
        [1, 3, 2],
        [1, 3, 3]
    ]
    expect(solve(n, m, edges, queries)).toEqual([1, -1])
})

test('Minimum n=2, large k, impossible, expect -1', () => {
    const n = 2,
        m = 1,
        q = 1
    const edges = [{ u: 1, v: 2, w: 500 }]
    const queries = [
        [1, 2, 2]
    ]
    expect(solve(n, m, edges, queries)).toEqual([-1])
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

test('Back and forth paths, choosing lowest k-th maximum edge', () => {
    const n = 5,
        m = 5,
        q = 1
    const edges = [
        { u: 1, v: 2, w: 3 },
        { u: 2, v: 3, w: 4 },
        { u: 3, v: 4, w: 5 },
        { u: 4, v: 5, w: 6 },
        { u: 1, v: 5, w: 7 }
    ]
    const queries = [
        [1, 4, 2]
    ]
    expect(solve(n, m, edges, queries)).toEqual([5])
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


// FAIL tests - descriptive / tests - prompt3 / 11 _prompt3.test.js√ Simple 2 - node, 1 - edge graph, 1 query k = 1(3 ms)√ Chain of 4 nodes, query
// for 2 nd largest k = 2(1 ms)× Triangle graph 3 nodes, all edges diff weight, various k(4 ms)√ Square cycle, maximum k = 3(1 ms)√ Query between nodes with k = 1 on a path with different possible paths(1 ms)√ Edge weights equal√ Path with high k, distinct edge weights× Disconnected not possible(guaranteed connected), so ask k > path length(1 ms)× Minimum n = 2, large k, impossible, expect - 1(1 ms)√ All edge weights distinct, query
// for 1 st, 2 nd, 3 rd max(1 ms)× Back and forth paths, choosing lowest k - th maximum edge(1 ms)√ Large edge weight values(1 ms)

// ● Triangle graph 3 nodes, all edges diff weight, various k

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
//     Received + 1

// Array[-2, +1,
//     1,
// ]

// 27 | ]
// 28 |
//     const queries = [
//             [1, 3, 1],
//             [1, 3, 2]
//         ] >
//         29 | expect(solve(n, m, edges, queries)).toEqual([2, 1]) |
//         ^
//         30 |
// })
// 31 |
//     32 | test('Square cycle, maximum k=3', () => {

//             at Object.toEqual(tests - descriptive / tests - prompt3 / 11 _prompt3.test.js: 29: 36)

//             ● Disconnected not possible(guaranteed connected), so ask k > path length

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 1 +
//                 Received + 1

//             Array[
//                 1, - -1, +1,
//             ]

//             84 | ] 85 |
//         const queries = [
//                 [1, 3, 2],
//                 [1, 3, 3]
//             ] >
//             86 | expect(solve(n, m, edges, queries)).toEqual([1, -1]) |
//             ^
//             87 |
//     })
// 88 |
//     89 | test('Minimum n=2, large k, impossible, expect -1', () => {

//         at Object.toEqual(tests - descriptive / tests - prompt3 / 11 _prompt3.test.js: 86: 36)

//         ● Minimum n = 2, large k, impossible, expect - 1

//         expect(received).toEqual(expected) // deep equality

//         -
//         Expected - 1 +
//             Received + 1

//         Array[- -1, +500, ]

//         91 |
//             const edges = [{ u: 1, v: 2, w: 500 }]
//         92 |
//             const queries = [
//                     [1, 2, 2]
//                 ] >
//                 93 | expect(solve(n, m, edges, queries)).toEqual([-1]) |
//                 ^
//                 94 |
//     })
// 95 |
//     96 | test('All edge weights distinct, query for 1st, 2nd, 3rd max', () => {

//             at Object.toEqual(tests - descriptive / tests - prompt3 / 11 _prompt3.test.js: 93: 36)

//             ● Back and forth paths, choosing lowest k - th maximum edge

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 1 +
//                 Received + 1

//             Array[-5, +4, ]

//             115 | ] 116 |
//         const queries = [
//                 [1, 4, 2]
//             ] >
//             117 | expect(solve(n, m, edges, queries)).toEqual([5]) |
//             ^
//             118 |
//     })
// 119 |
