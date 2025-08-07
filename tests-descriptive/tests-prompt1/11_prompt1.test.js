import { solve } from '../../solutions-descriptive/11.js'

test('Single path, find kth max edge', () => {
    const input = {
        n: 3,
        m: 2,
        q: 2,
        edges: [
            [1, 2, 4],
            [2, 3, 7]
        ],
        queries: [
            [1, 3, 1],
            [1, 3, 2]
        ]
    }
    expect(solve(input)).toEqual([7, 4])
})

test('Simple triangle, different paths', () => {
    const input = {
        n: 3,
        m: 3,
        q: 3,
        edges: [
            [1, 2, 10],
            [2, 3, 20],
            [1, 3, 30]
        ],
        queries: [
            [1, 3, 1],
            [1, 3, 2],
            [1, 2, 1]
        ]
    }
    expect(solve(input)).toEqual([30, 20, 10])
})

test('Path with multiple answers', () => {
    const input = {
        n: 4,
        m: 3,
        q: 3,
        edges: [
            [1, 2, 5],
            [2, 3, 10],
            [3, 4, 15]
        ],
        queries: [
            [1, 4, 1],
            [1, 4, 2],
            [1, 4, 3]
        ]
    }
    expect(solve(input)).toEqual([15, 10, 5])
})

test('Cycle with multiple paths, choose minimal kth max', () => {
    const input = {
        n: 4,
        m: 5,
        q: 2,
        edges: [
            [1, 2, 5],
            [2, 3, 7],
            [3, 4, 8],
            [4, 1, 9],
            [2, 4, 6]
        ],
        queries: [
            [1, 3, 2],
            [1, 4, 1]
        ]
    }
    expect(solve(input)).toEqual([6, 9])
})

test('All edges equal weight', () => {
    const input = {
        n: 3,
        m: 3,
        q: 3,
        edges: [
            [1, 2, 2],
            [2, 3, 2],
            [3, 1, 2]
        ],
        queries: [
            [1, 3, 1],
            [1, 3, 2],
            [1, 3, 3]
        ]
    }
    expect(solve(input)).toEqual([2, 2, 2])
})

test('Disconnected is illegal, extra test, forcibly connected', () => {
    const input = {
        n: 5,
        m: 4,
        q: 1,
        edges: [
            [1, 2, 3],
            [2, 3, 2],
            [3, 4, 5],
            [4, 5, 1]
        ],
        queries: [
            [1, 5, 3]
        ]
    }
    expect(solve(input)).toEqual([2])
})

test('Edge with max possible weight', () => {
    const input = {
        n: 2,
        m: 1,
        q: 1,
        edges: [
            [1, 2, 1000000000]
        ],
        queries: [
            [1, 2, 1]
        ]
    }
    expect(solve(input)).toEqual([1000000000])
})

test('Path length greater than k', () => {
    const input = {
        n: 4,
        m: 3,
        q: 1,
        edges: [
            [1, 2, 4],
            [2, 3, 8],
            [3, 4, 16]
        ],
        queries: [
            [1, 4, 2]
        ]
    }
    expect(solve(input)).toEqual([8])
})

test('Same vertices, different k', () => {
    const input = {
        n: 5,
        m: 4,
        q: 3,
        edges: [
            [1, 2, 1],
            [2, 3, 2],
            [3, 4, 3],
            [4, 5, 4]
        ],
        queries: [
            [1, 5, 1],
            [1, 5, 2],
            [1, 5, 3]
        ]
    }
    expect(solve(input)).toEqual([4, 3, 2])
})

// FAIL tests - descriptive / tests - prompt1 / 11 _prompt1.test.js× Single path, find kth max edge(1 ms)× Simple triangle, different paths× Path with multiple answers(1 ms)× Cycle with multiple paths, choose minimal kth max(1 ms)× All edges equal weight× Disconnected is illegal, extra test, forcibly connected× Edge with max possible weight× Path length greater than k× Same vertices, different k(1 ms)

// ● Single path, find kth max edge

// RangeError: Invalid array length

// 3 |
//     4 |
//     const graph = Array(nodeCount + 1).fill().map(() => []); >
// 5 |
//     const distanceMatrix = Array(edgeCount + 1).fill().map(() => new Array(nodeCount + 1).fill(INF)); |
// ^
// 6 |
//     const visited = new Uint8Array(nodeCount + 1);
// 7 |
//     8 |
//     for (let { u, v, w }

//         at Array(solutions - descriptive / 11. js: 5: 28) at Object.solve(tests - descriptive / tests - prompt1 / 11 _prompt1.test.js: 17: 10)

//         ● Simple triangle, different paths

//         RangeError: Invalid array length

//         3 |
//         4 |
//         const graph = Array(nodeCount + 1).fill().map(() => []); >
//         5 |
//         const distanceMatrix = Array(edgeCount + 1).fill().map(() => new Array(nodeCount + 1).fill(INF)); |
//         ^
//         6 |
//         const visited = new Uint8Array(nodeCount + 1); 7 |
//         8 |
//         for (let { u, v, w }

//             at Array(solutions - descriptive / 11. js: 5: 28) at Object.solve(tests - descriptive / tests - prompt1 / 11 _prompt1.test.js: 36: 10)

//             ● Path with multiple answers

//             RangeError: Invalid array length

//             3 |
//             4 |
//             const graph = Array(nodeCount + 1).fill().map(() => []); >
//             5 |
//             const distanceMatrix = Array(edgeCount + 1).fill().map(() => new Array(nodeCount + 1).fill(INF)); |
//             ^
//             6 |
//             const visited = new Uint8Array(nodeCount + 1); 7 |
//             8 |
//             for (let { u, v, w }

//                 at Array(solutions - descriptive / 11. js: 5: 28) at Object.solve(tests - descriptive / tests - prompt1 / 11 _prompt1.test.js: 55: 10)

//                 ● Cycle with multiple paths, choose minimal kth max

//                 RangeError: Invalid array length

//                 3 |
//                 4 |
//                 const graph = Array(nodeCount + 1).fill().map(() => []); >
//                 5 |
//                 const distanceMatrix = Array(edgeCount + 1).fill().map(() => new Array(nodeCount + 1).fill(INF)); |
//                 ^
//                 6 |
//                 const visited = new Uint8Array(nodeCount + 1); 7 |
//                 8 |
//                 for (let { u, v, w }

//                     at Array(solutions - descriptive / 11. js: 5: 28) at Object.solve(tests - descriptive / tests - prompt1 / 11 _prompt1.test.js: 75: 10)

//                     ● All edges equal weight

//                     RangeError: Invalid array length

//                     3 |
//                     4 |
//                     const graph = Array(nodeCount + 1).fill().map(() => []); >
//                     5 |
//                     const distanceMatrix = Array(edgeCount + 1).fill().map(() => new Array(nodeCount + 1).fill(INF)); |
//                     ^
//                     6 |
//                     const visited = new Uint8Array(nodeCount + 1); 7 |
//                     8 |
//                     for (let { u, v, w }

//                         at Array(solutions - descriptive / 11. js: 5: 28) at Object.solve(tests - descriptive / tests - prompt1 / 11 _prompt1.test.js: 94: 10)

//                         ● Disconnected is illegal, extra test, forcibly connected

//                         RangeError: Invalid array length

//                         3 |
//                         4 |
//                         const graph = Array(nodeCount + 1).fill().map(() => []); >
//                         5 |
//                         const distanceMatrix = Array(edgeCount + 1).fill().map(() => new Array(nodeCount + 1).fill(INF)); |
//                         ^
//                         6 |
//                         const visited = new Uint8Array(nodeCount + 1); 7 |
//                         8 |
//                         for (let { u, v, w }

//                             at Array(solutions - descriptive / 11. js: 5: 28) at Object.solve(tests - descriptive / tests - prompt1 / 11 _prompt1.test.js: 112: 10)

//                             ● Edge with max possible weight

//                             RangeError: Invalid array length

//                             3 |
//                             4 |
//                             const graph = Array(nodeCount + 1).fill().map(() => []); >
//                             5 |
//                             const distanceMatrix = Array(edgeCount + 1).fill().map(() => new Array(nodeCount + 1).fill(INF)); |
//                             ^
//                             6 |
//                             const visited = new Uint8Array(nodeCount + 1); 7 |
//                             8 |
//                             for (let { u, v, w }

//                                 at Array(solutions - descriptive / 11. js: 5: 28) at Object.solve(tests - descriptive / tests - prompt1 / 11 _prompt1.test.js: 127: 10)

//                                 ● Path length greater than k

//                                 RangeError: Invalid array length

//                                 3 |
//                                 4 |
//                                 const graph = Array(nodeCount + 1).fill().map(() => []); >
//                                 5 |
//                                 const distanceMatrix = Array(edgeCount + 1).fill().map(() => new Array(nodeCount + 1).fill(INF)); |
//                                 ^
//                                 6 |
//                                 const visited = new Uint8Array(nodeCount + 1); 7 |
//                                 8 |
//                                 for (let { u, v, w }

//                                     at Array(solutions - descriptive / 11. js: 5: 28) at Object.solve(tests - descriptive / tests - prompt1 / 11 _prompt1.test.js: 144: 10)

//                                     ● Same vertices, different k

//                                     RangeError: Invalid array length

//                                     3 |
//                                     4 |
//                                     const graph = Array(nodeCount + 1).fill().map(() => []); >
//                                     5 |
//                                     const distanceMatrix = Array(edgeCount + 1).fill().map(() => new Array(nodeCount + 1).fill(INF)); |
//                                     ^
//                                     6 |
//                                     const visited = new Uint8Array(nodeCount + 1); 7 |
//                                     8 |
//                                     for (let { u, v, w }

//                                         at Array(solutions - descriptive / 11. js: 5: 28) at Object.solve(tests - descriptive / tests - prompt1 / 11 _prompt1.test.js: 164: 10)