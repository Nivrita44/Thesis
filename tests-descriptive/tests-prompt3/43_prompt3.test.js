import { solve } from '../../solutions-descriptive/43.js';

test('single camp, positive gold', () => {
    expect(solve(1, 1, [10], [])).toBe(10);
});

test('single camp, negative gold', () => {
    expect(solve(1, 100, [-1000], [])).toBe(0);
});

test('two camps, strengthen either', () => {
    expect(solve(2, 3, [7, 8], [
        [1, 2]
    ])).toBe(8);
});

test('three camps, chain, must choose optimal', () => {
    expect(solve(3, 2, [5, 6, 7], [
        [1, 2],
        [2, 3]
    ])).toBe(12);
});

test('tree: star 4 nodes, choose one', () => {
    expect(solve(4, 10, [3, 3, 3, 100], [
        [1, 2],
        [1, 3],
        [1, 4]
    ])).toBe(100);
});

test('tree: star 5 nodes, all negative', () => {
    expect(solve(5, 2, [-3, -3, -1, -2, -4], [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5]
    ])).toBe(0);
});

test('tree: all positives, must avoid double c subtraction', () => {
    expect(solve(4, 1, [4, 5, 6, 7], [
        [1, 2],
        [2, 3],
        [2, 4]
    ])).toBe(17);
});

test('c greater than possible sum, prefer not strengthening', () => {
    expect(solve(3, 1000, [10, 10, 10], [
        [1, 2],
        [2, 3]
    ])).toBe(10);
});

test('edge: disconnected node (impossible - tree invariant), should not be needed', () => {
    expect(solve(2, 1, [2, 4], [
        [1, 2]
    ])).toBe(4);
});

test('all negatives, prefer empty', () => {
    expect(solve(3, 10, [-10, -5, -7], [
        [1, 2],
        [2, 3]
    ])).toBe(0);
});

test('chain, alternate strengthening', () => {
    expect(solve(5, 1, [2, 3, 4, 5, 6], [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5]
    ])).toBe(13);
});

test('chain, large cost, negative optimal', () => {
    expect(solve(4, 100, [10, 100, 10, 10], [
        [1, 2],
        [2, 3],
        [3, 4]
    ])).toBe(100);

});

test('chain, negative gold camps, skip all', () => {
    expect(solve(4, 1, [-2, -3, -4, -5], [
        [1, 2],
        [2, 3],
        [3, 4]
    ])).toBe(0);
});

test('minimum gold can go negative, but solution prevents negatives', () => {
    expect(solve(3, 100, [1, 2, 3], [
        [1, 2],
        [2, 3]
    ])).toBe(3);
});

test('c=0, all can be strengthened', () => {
    expect(solve(4, 0, [1, 2, 3, 4], [
        [1, 2],
        [1, 3],
        [1, 4]
    ])).toBe(10);
});

test('large input, balanced binary tree', () => {
    const n = 15;
    const values = Array.from({ length: n }, (_, i) => i + 1);
    const edges = [];
    for (let i = 2; i <= n; i++) edges.push([Math.floor(i / 2), i]);
    expect(solve(n, 1, values, edges)).toBeGreaterThan(0);
});

test('two camps, negative gold, negative optimal', () => {
    expect(solve(2, 2, [-5, -10], [
        [1, 2]
    ])).toBe(0);
});



// FAIL tests - descriptive / tests - prompt3 / 43 _prompt3.test.js√ single camp, positive gold(3 ms)√ single camp, negative gold× two camps, strengthen either(2 ms)√ three camps, chain, must choose optimal× tree: star 4 nodes, choose one√ tree: star 5 nodes, all negative√ tree: all positives, must avoid double c subtraction(1 ms)× c greater than possible sum, prefer not strengthening(1 ms)√ edge: disconnected node(impossible - tree invariant), should not be needed(1 ms)√ all negatives, prefer empty(1 ms)√ chain, alternate strengthening× chain, large cost, negative optimal(1 ms)√ chain, negative gold camps, skip all(1 ms)× minimum gold can go negative, but solution prevents negatives√ c = 0, all can be strengthened√ large input, balanced binary tree(1 ms)√ two camps, negative gold, negative optimal

// ● two camps, strengthen either

// expect(received).toBe(expected) // Object.is equality

// Expected: 8
// Received: 9

// 10 |
//     11 | test('two camps, strengthen either', () => { >
//         12 | expect(solve(2, 3, [7, 8], [
//             [1, 2]
//         ])).toBe(8); |
//         ^
//         13 |
//     });
// 14 |
//     15 | test('three camps, chain, must choose optimal', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 43 _prompt3.test.js: 12: 42)

//             ● tree: star 4 nodes, choose one

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 100
//             Received: 106

//             18 |
//                 19 | test('tree: star 4 nodes, choose one', () => { >
//                     20 | expect(solve(4, 10, [3, 3, 3, 100], [
//                         [1, 2],
//                         [1, 3],
//                         [1, 4]
//                     ])).toBe(100); |
//                     ^
//                     21 |
//                 });
//             22 |
//                 23 | test('tree: star 5 nodes, all negative', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt3 / 43 _prompt3.test.js: 20: 63)

//                         ● c greater than possible sum, prefer not strengthening

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 10
//                         Received: 20

//                         30 |
//                             31 | test('c greater than possible sum, prefer not strengthening', () => { >
//                                 32 | expect(solve(3, 1000, [10, 10, 10], [
//                                     [1, 2],
//                                     [2, 3]
//                                 ])).toBe(10); |
//                                 ^
//                                 33 |
//                             });
//                         34 |
//                             35 | test('edge: disconnected node (impossible - tree invariant), should not be needed', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt3 / 43 _prompt3.test.js: 32: 57)

//                                     ● chain, large cost, negative optimal

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 100
//                                     Received: 110

//                                     46 |
//                                         47 | test('chain, large cost, negative optimal', () => { >
//                                             48 | expect(solve(4, 100, [10, 100, 10, 10], [
//                                                 [1, 2],
//                                                 [2, 3],
//                                                 [3, 4]
//                                             ])).toBe(100); |
//                                             ^
//                                             49 |
//                                                 50 |
//                                         });
//                                     51 |

//                                         at Object.toBe(tests - descriptive / tests - prompt3 / 43 _prompt3.test.js: 48: 67)

//                                     ● minimum gold can go negative, but solution prevents negatives

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 3
//                                     Received: 4

//                                     55 |
//                                         56 | test('minimum gold can go negative, but solution prevents negatives', () => { >
//                                             57 | expect(solve(3, 100, [1, 2, 3], [
//                                                 [1, 2],
//                                                 [2, 3]
//                                             ])).toBe(3); |
//                                             ^
//                                             58 |
//                                         });
//                                     59 |
//                                         60 | test('c=0, all can be strengthened', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 43 _prompt3.test.js: 57: 53)