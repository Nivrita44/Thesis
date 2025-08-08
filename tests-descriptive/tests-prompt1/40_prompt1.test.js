import solve from '../../solutions-descriptive/40.js';

test('basic test case n=3, all -1 except one', () => {
    expect(solve(3, [-1, -1, 1]).sort((a, b) => a - b)).toEqual([1, 2, 3]);
});

test('n=5, all -1 except one', () => {
    expect(solve(5, [2, 2, 2, 2, -1]).sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5]);
});

test('n=4, mixed removed at different times', () => {
    const a = [1, 2, 2, -1];
    const p = solve(4, a);
    expect(p.length).toBe(4);
    expect(new Set(p).size).toBe(4);
    expect(p.every(v => v >= 1 && v <= 4)).toBe(true);
});

test('n=5 alternating removals', () => {
    const a = [1, 2, 1, 2, -1];
    const p = solve(5, a);
    expect(p.length).toBe(5);
    expect(new Set(p).size).toBe(5);
    expect(p.every(v => v >= 1 && v <= 5)).toBe(true);
});

test('n=2 edge case', () => {
    const a = [-1, 1];
    const p = solve(2, a);
    expect(p.length).toBe(2);
    expect(new Set(p).size).toBe(2);
    expect(p.every(v => v >= 1 && v <= 2)).toBe(true);
});

test('n=2, both removed at first iteration', () => {
    const a = [1, 1];
    const p = solve(2, a);
    expect(p.length).toBe(2);
    expect(new Set(p).size).toBe(2);
    expect(p.every(v => v >= 1 && v <= 2)).toBe(true);
});

test('n=8, multiple iterations', () => {
    const a = [1, 1, 2, 2, -1, 2, 1, 1];
    const p = solve(8, a);
    expect(p.length).toBe(8);
    expect(new Set(p).size).toBe(8);
    expect(p.every(v => v >= 1 && v <= 8)).toBe(true);
});

test('n=10, only one -1', () => {
    const a = Array(9).fill(1).concat(-1);
    const p = solve(10, a);
    expect(p.length).toBe(10);
    expect(new Set(p).size).toBe(10);
    expect(p.every(v => v >= 1 && v <= 10)).toBe(true);
});

test('n=6, more complex pattern', () => {
    const a = [1, 2, 2, 1, -1, 2];
    const p = solve(6, a);
    expect(p.length).toBe(6);
    expect(new Set(p).size).toBe(6);
    expect(p.every(v => v >= 1 && v <= 6)).toBe(true);
});

test('n=20, all removed at different steps', () => {
    let lgn = Math.ceil(Math.log2(20));
    const a = [];
    let iter = 1;
    for (let i = 0; i < 20; i++) {
        if (i == 10) a.push(-1);
        else {
            a.push(iter);
            iter = iter < lgn ? iter + 1 : 1;
        }
    }
    const p = solve(20, a);
    expect(p.length).toBe(20);
    expect(new Set(p).size).toBe(20);
    expect(p.every(v => v >= 1 && v <= 20)).toBe(true);
});

// FAIL tests - descriptive / tests - prompt1 / 40 _prompt1.test.js× basic test
// case n = 3, all - 1 except one(3 ms)× n = 5, all - 1 except one× n = 4, mixed removed at different times× n = 5 alternating removals(1 ms)× n = 2 edge
// case× n = 2, both removed at first iteration(1 ms)× n = 8, multiple iterations(1 ms)× n = 10, only one - 1(1 ms)× n = 6, more complex pattern× n = 20, all removed at different steps

// ● basic test
// case n = 3, all - 1 except one

// TypeError:
//     solve is not a
//     function

//     2 |
//     3 | test('basic test case n=3, all -1 except one', () => { >
//         4 | expect(solve(3, [-1, -1, 1]).sort((a, b) => a - b)).toEqual([1, 2, 3]); |
//         ^
//         5 |
//     });
//     6 |
//         7 | test('n=5, all -1 except one', () => {

//                 at Object.solve(tests - descriptive / tests - prompt1 / 40 _prompt1.test.js: 4: 10)

//                 ● n = 5, all - 1 except one

//                 TypeError: solve is not a
//                 function

//                 6 |
//                 7 | test('n=5, all -1 except one', () => { >
//                     8 | expect(solve(5, [2, 2, 2, 2, -1]).sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5]); |
//                     ^
//                     9 |
//                 });
//                 10 |
//                     11 | test('n=4, mixed removed at different times', () => {

//                             at Object.solve(tests - descriptive / tests - prompt1 / 40 _prompt1.test.js: 8: 10)

//                             ● n = 4, mixed removed at different times

//                             TypeError: solve is not a
//                             function

//                             11 | test('n=4, mixed removed at different times', () => {
//                                         12 |
//                                             const a = [1, 2, 2, -1]; >
//                                         13 |
//                                             const p = solve(4, a); |
//                                         ^
//                                         14 | expect(p.length).toBe(4);
//                                         15 | expect(new Set(p).size).toBe(4);
//                                         16 | expect(p.every(v => v >= 1 && v <= 4)).toBe(true);

//                                         at Object.solve(tests - descriptive / tests - prompt1 / 40 _prompt1.test.js: 13: 13)

//                                         ● n = 5 alternating removals

//                                         TypeError: solve is not a
//                                         function

//                                         19 | test('n=5 alternating removals', () => {
//                                                     20 |
//                                                         const a = [1, 2, 1, 2, -1]; >
//                                                     21 |
//                                                         const p = solve(5, a); |
//                                                     ^
//                                                     22 | expect(p.length).toBe(5);
//                                                     23 | expect(new Set(p).size).toBe(5);
//                                                     24 | expect(p.every(v => v >= 1 && v <= 5)).toBe(true);

//                                                     at Object.solve(tests - descriptive / tests - prompt1 / 40 _prompt1.test.js: 21: 13)

//                                                     ● n = 2 edge
//                                                     case

//                                                     TypeError:
//                                                         solve is not a
//                                                         function

//                                                         27 | test('n=2 edge case', () => {
//                                                                     28 |
//                                                                         const a = [-1, 1]; >
//                                                                     29 |
//                                                                         const p = solve(2, a); |
//                                                                     ^
//                                                                     30 | expect(p.length).toBe(2);
//                                                                     31 | expect(new Set(p).size).toBe(2);
//                                                                     32 | expect(p.every(v => v >= 1 && v <= 2)).toBe(true);

//                                                                     at Object.solve(tests - descriptive / tests - prompt1 / 40 _prompt1.test.js: 29: 13)

//                                                                     ● n = 2, both removed at first iteration

//                                                                     TypeError: solve is not a
//                                                                     function

//                                                                     35 | test('n=2, both removed at first iteration', () => {
//                                                                                 36 |
//                                                                                     const a = [1, 1]; >
//                                                                                 37 |
//                                                                                     const p = solve(2, a); |
//                                                                                 ^
//                                                                                 38 | expect(p.length).toBe(2);
//                                                                                 39 | expect(new Set(p).size).toBe(2);
//                                                                                 40 | expect(p.every(v => v >= 1 && v <= 2)).toBe(true);

//                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 40 _prompt1.test.js: 37: 13)

//                                                                                 ● n = 8, multiple iterations

//                                                                                 TypeError: solve is not a
//                                                                                 function

//                                                                                 43 | test('n=8, multiple iterations', () => {
//                                                                                             44 |
//                                                                                                 const a = [1, 1, 2, 2, -1, 2, 1, 1]; >
//                                                                                             45 |
//                                                                                                 const p = solve(8, a); |
//                                                                                             ^
//                                                                                             46 | expect(p.length).toBe(8);
//                                                                                             47 | expect(new Set(p).size).toBe(8);
//                                                                                             48 | expect(p.every(v => v >= 1 && v <= 8)).toBe(true);

//                                                                                             at Object.solve(tests - descriptive / tests - prompt1 / 40 _prompt1.test.js: 45: 13)

//                                                                                             ● n = 10, only one - 1

//                                                                                             TypeError: solve is not a
//                                                                                             function

//                                                                                             51 | test('n=10, only one -1', () => {
//                                                                                                         52 |
//                                                                                                             const a = Array(9).fill(1).concat(-1); >
//                                                                                                         53 |
//                                                                                                             const p = solve(10, a); |
//                                                                                                         ^
//                                                                                                         54 | expect(p.length).toBe(10);
//                                                                                                         55 | expect(new Set(p).size).toBe(10);
//                                                                                                         56 | expect(p.every(v => v >= 1 && v <= 10)).toBe(true);

//                                                                                                         at Object.solve(tests - descriptive / tests - prompt1 / 40 _prompt1.test.js: 53: 13)

//                                                                                                         ● n = 6, more complex pattern

//                                                                                                         TypeError: solve is not a
//                                                                                                         function

//                                                                                                         59 | test('n=6, more complex pattern', () => {
//                                                                                                                     60 |
//                                                                                                                         const a = [1, 2, 2, 1, -1, 2]; >
//                                                                                                                     61 |
//                                                                                                                         const p = solve(6, a); |
//                                                                                                                     ^
//                                                                                                                     62 | expect(p.length).toBe(6);
//                                                                                                                     63 | expect(new Set(p).size).toBe(6);
//                                                                                                                     64 | expect(p.every(v => v >= 1 && v <= 6)).toBe(true);

//                                                                                                                     at Object.solve(tests - descriptive / tests - prompt1 / 40 _prompt1.test.js: 61: 13)

//                                                                                                                     ● n = 20, all removed at different steps

//                                                                                                                     TypeError: solve is not a
//                                                                                                                     function

//                                                                                                                     76 |
//                                                                                                                 }
//                                                                                                                 77 |
//                                                                                                             } >
//                                                                                                             78 |
//                                                                                                             const p = solve(20, a); |
//                                                                                                         ^
//                                                                                                         79 | expect(p.length).toBe(20);
//                                                                                                         80 | expect(new Set(p).size).toBe(20);
//                                                                                                         81 | expect(p.every(v => v >= 1 && v <= 20)).toBe(true);

//                                                                                                         at Object.solve(tests - descriptive / tests - prompt1 / 40 _prompt1.test.js: 78: 13)