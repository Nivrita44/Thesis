import { solve } from '../../../solutions-algorithm/30.js';

test('n=6 impossible', () => {
    expect(solve(1, [6])).toEqual(["NO"]);
});

test('n=7 possible', () => {
    const res = solve(1, [7]);
    expect(res[0]).toBe("YES");
    const [x, y, z] = res[1].split(' ').map(Number);
    expect(new Set([x, y, z]).size).toBe(3);
    expect(x + y + z).toBe(7);
    expect(x % 3).not.toBe(0);
    expect(y % 3).not.toBe(0);
    expect(z % 3).not.toBe(0);
});

test('n=10 possible', () => {
    const res = solve(1, [10]);
    expect(res[0]).toBe("YES");
    const [x, y, z] = res[1].split(' ').map(Number);
    expect(new Set([x, y, z]).size).toBe(3);
    expect(x + y + z).toBe(10);
    expect(x % 3).not.toBe(0);
    expect(y % 3).not.toBe(0);
    expect(z % 3).not.toBe(0);
});

test('n=9 impossible', () => {
    expect(solve(1, [9])).toEqual(["NO"]);
});

test('n=1000000000 possible', () => {
    const res = solve(1, [1000000000]);
    expect(res[0]).toBe("YES");
    const [x, y, z] = res[1].split(' ').map(Number);
    expect(new Set([x, y, z]).size).toBe(3);
    expect(x + y + z).toBe(1000000000);
    expect(x % 3).not.toBe(0);
    expect(y % 3).not.toBe(0);
    expect(z % 3).not.toBe(0);
});

test('n=4 impossible', () => {
    expect(solve(1, [4])).toEqual(["NO"]);
});

test('n=14 possible', () => {
    const res = solve(1, [14]);
    expect(res[0]).toBe("YES");
    const [x, y, z] = res[1].split(' ').map(Number);
    expect(new Set([x, y, z]).size).toBe(3);
    expect(x + y + z).toBe(14);
    expect(x % 3).not.toBe(0);
    expect(y % 3).not.toBe(0);
    expect(z % 3).not.toBe(0);
});

test('n=5 impossible', () => {
    expect(solve(1, [5])).toEqual(["NO"]);
});

test('n=13 possible', () => {
    const res = solve(1, [13]);
    expect(res[0]).toBe("YES");
    const [x, y, z] = res[1].split(' ').map(Number);
    expect(new Set([x, y, z]).size).toBe(3);
    expect(x + y + z).toBe(13);
    expect(x % 3).not.toBe(0);
    expect(y % 3).not.toBe(0);
    expect(z % 3).not.toBe(0);
});

test('n=3 impossible', () => {
    expect(solve(1, [3])).toEqual(["NO"]);
});


// FAIL tests - algorithm / tests - prompt1 / 30 _prompt1.test.js× n = 6 impossible(18 ms)× n = 7 possible(2 ms)× n = 10 possible(4 ms)× n = 9 impossible(1 ms)× n = 1000000000 possible(1 ms)× n = 4 impossible(1 ms)√ n = 14 possible(1 ms)× n = 5 impossible(2 ms)× n = 13 possible(2 ms)× n = 3 impossible(2 ms)

// ● n = 6 impossible

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
//     Received + 2

// Array[-"NO", +"YES", +"4 1 1", ]

// 2 |
//     3 | test('n=6 impossible', () => { >
//         4 | expect(solve(1, [6])).toEqual(["NO"]); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('n=7 possible', () => {

//             at Object.toEqual(tests - algorithm / tests - prompt1 / 30 _prompt1.test.js: 4: 27)

//             ● n = 7 possible

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 3
//             Received: 2

//             9 | expect(res[0]).toBe("YES");
//             10 |
//                 const [x, y, z] = res[1].split(' ').map(Number); >
//             11 | expect(new Set([x, y, z]).size).toBe(3); |
//             ^
//             12 | expect(x + y + z).toBe(7);
//             13 | expect(x % 3).not.toBe(0);
//             14 | expect(y % 3).not.toBe(0);

//             at Object.toBe(tests - algorithm / tests - prompt1 / 30 _prompt1.test.js: 11: 37)

//             ● n = 10 possible

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 3
//             Received: 2

//             20 | expect(res[0]).toBe("YES");
//             21 |
//                 const [x, y, z] = res[1].split(' ').map(Number); >
//             22 | expect(new Set([x, y, z]).size).toBe(3); |
//             ^
//             23 | expect(x + y + z).toBe(10);
//             24 | expect(x % 3).not.toBe(0);
//             25 | expect(y % 3).not.toBe(0);

//             at Object.toBe(tests - algorithm / tests - prompt1 / 30 _prompt1.test.js: 22: 37)

//             ● n = 9 impossible

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 1 +
//                 Received + 2

//             Array[-"NO", +"YES", +"7 1 1", ]

//             28 |
//                 29 | test('n=9 impossible', () => { >
//                     30 | expect(solve(1, [9])).toEqual(["NO"]); |
//                     ^
//                     31 |
//                 });
//             32 |
//                 33 | test('n=1000000000 possible', () => {

//                         at Object.toEqual(tests - algorithm / tests - prompt1 / 30 _prompt1.test.js: 30: 27)

//                         ● n = 1000000000 possible

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 3
//                         Received: 2

//                         35 | expect(res[0]).toBe("YES");
//                         36 |
//                             const [x, y, z] = res[1].split(' ').map(Number); >
//                         37 | expect(new Set([x, y, z]).size).toBe(3); |
//                         ^
//                         38 | expect(x + y + z).toBe(1000000000);
//                         39 | expect(x % 3).not.toBe(0);
//                         40 | expect(y % 3).not.toBe(0);

//                         at Object.toBe(tests - algorithm / tests - prompt1 / 30 _prompt1.test.js: 37: 37)

//                         ● n = 4 impossible

//                         expect(received).toEqual(expected) // deep equality

//                         -
//                         Expected - 1 +
//                             Received + 2

//                         Array[-"NO", +"YES", +"2 1 1", ]

//                         43 |
//                             44 | test('n=4 impossible', () => { >
//                                 45 | expect(solve(1, [4])).toEqual(["NO"]); |
//                                 ^
//                                 46 |
//                             });
//                         47 |
//                             48 | test('n=14 possible', () => {

//                                     at Object.toEqual(tests - algorithm / tests - prompt1 / 30 _prompt1.test.js: 45: 27)

//                                     ● n = 5 impossible

//                                     expect(received).toEqual(expected) // deep equality

//                                     -
//                                     Expected - 1 +
//                                         Received + 2

//                                     Array[-"NO", +"YES", +"2 2 1", ]

//                                     58 |
//                                         59 | test('n=5 impossible', () => { >
//                                             60 | expect(solve(1, [5])).toEqual(["NO"]); |
//                                             ^
//                                             61 |
//                                         });
//                                     62 |
//                                         63 | test('n=13 possible', () => {

//                                                 at Object.toEqual(tests - algorithm / tests - prompt1 / 30 _prompt1.test.js: 60: 27)

//                                                 ● n = 13 possible

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected: 3
//                                                 Received: 2

//                                                 65 | expect(res[0]).toBe("YES");
//                                                 66 |
//                                                     const [x, y, z] = res[1].split(' ').map(Number); >
//                                                 67 | expect(new Set([x, y, z]).size).toBe(3); |
//                                                 ^
//                                                 68 | expect(x + y + z).toBe(13);
//                                                 69 | expect(x % 3).not.toBe(0);
//                                                 70 | expect(y % 3).not.toBe(0);

//                                                 at Object.toBe(tests - algorithm / tests - prompt1 / 30 _prompt1.test.js: 67: 37)

//                                                 ● n = 3 impossible

//                                                 expect(received).toEqual(expected) // deep equality

//                                                 -
//                                                 Expected - 1 +
//                                                     Received + 2

//                                                 Array[-"NO", +"YES", +"1 1 1", ]

//                                                 73 |
//                                                     74 | test('n=3 impossible', () => { >
//                                                         75 | expect(solve(1, [3])).toEqual(["NO"]); |
//                                                         ^
//                                                         76 |
//                                                     });
