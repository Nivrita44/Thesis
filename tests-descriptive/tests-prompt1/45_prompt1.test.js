import solve from '../../solutions-descriptive/45.js';

test('basic two intersection, arrive before call, bus only', () => {
    const n = 2,
        m = 1;
    const t0 = 10,
        t1 = 3,
        t2 = 6;
    const edges = [
        [1, 2, 2, 5]
    ];
    expect(solve(n, m, t0, t1, t2, edges)).toBe(6);
});

test('need to walk during call', () => {
    const n = 3,
        m = 2;
    const t0 = 20,
        t1 = 2,
        t2 = 7;
    const edges = [
        [1, 2, 3, 8],
        [2, 3, 3, 7]
    ];
    expect(solve(n, m, t0, t1, t2, edges)).toBe(11);
});

test('cannot reach on time, output -1', () => {
    const n = 2,
        m = 1;
    const t0 = 4,
        t1 = 1,
        t2 = 2;
    const edges = [
        [1, 2, 3, 5]
    ];
    expect(solve(n, m, t0, t1, t2, edges)).toBe(-1);
});

test('choice between bus and walking required', () => {
    const n = 3,
        m = 3;
    const t0 = 25,
        t1 = 9,
        t2 = 13;
    const edges = [
        [1, 2, 4, 12],
        [2, 3, 4, 9],
        [1, 3, 15, 23]
    ];
    expect(solve(n, m, t0, t1, t2, edges)).toBe(13);
});

test('longer phone call, must walk entire way', () => {
    const n = 2,
        m = 1;
    const t0 = 15,
        t1 = 3,
        t2 = 14;
    const edges = [
        [1, 2, 4, 10]
    ];
    expect(solve(n, m, t0, t1, t2, edges)).toBe(5);
});

test('graph with many intersections and edges', () => {
    const n = 5,
        m = 6;
    const t0 = 50,
        t1 = 10,
        t2 = 20;
    const edges = [
        [1, 2, 9, 20],
        [2, 3, 7, 18],
        [3, 4, 10, 30],
        [4, 5, 14, 40],
        [2, 5, 25, 40],
        [1, 3, 19, 35]
    ];
    expect(solve(n, m, t0, t1, t2, edges)).toBe(10);
});

test('choose path to avoid walking during call', () => {
    const n = 4,
        m = 4;
    const t0 = 30,
        t1 = 5,
        t2 = 7;
    const edges = [
        [1, 2, 3, 10],
        [2, 3, 2, 11],
        [3, 4, 2, 8],
        [1, 4, 15, 30]
    ];
    expect(solve(n, m, t0, t1, t2, edges)).toBe(13);
});

// FAIL tests - descriptive / tests - prompt1 / 45 _prompt1.test.js× basic two intersection, arrive before call, bus only(2 ms)× need to walk during call× cannot reach on time, output - 1× choice between bus and walking required(1 ms)× longer phone call, must walk entire way(1 ms)× graph with many intersections and edges× choose path to avoid walking during call

// ● basic two intersection, arrive before call, bus only

// TypeError: solve is not a
// function

// 7 | [1, 2, 2, 5]
// 8 | ]; >
// 9 | expect(solve(n, m, t0, t1, t2, edges)).toBe(6); |
// ^
// 10 |
// });
// 11 |
//     12 | test('need to walk during call', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 45 _prompt1.test.js: 9: 10)

//             ● need to walk during call

//             TypeError: solve is not a
//             function

//             17 | [2, 3, 3, 7]
//             18 | ]; >
//         19 | expect(solve(n, m, t0, t1, t2, edges)).toBe(11); |
//         ^
//         20 |
//     });
// 21 |
//     22 | test('cannot reach on time, output -1', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 45 _prompt1.test.js: 19: 10)

//             ● cannot reach on time, output - 1

//             TypeError: solve is not a
//             function

//             26 | [1, 2, 3, 5]
//             27 | ]; >
//         28 | expect(solve(n, m, t0, t1, t2, edges)).toBe(-1); |
//         ^
//         29 |
//     });
// 30 |
//     31 | test('choice between bus and walking required', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 45 _prompt1.test.js: 28: 10)

//             ● choice between bus and walking required

//             TypeError: solve is not a
//             function

//             37 | [1, 3, 15, 23]
//             38 | ]; >
//         39 | expect(solve(n, m, t0, t1, t2, edges)).toBe(13); |
//         ^
//         40 |
//     });
// 41 |
//     42 | test('longer phone call, must walk entire way', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 45 _prompt1.test.js: 39: 10)

//             ● longer phone call, must walk entire way

//             TypeError: solve is not a
//             function

//             46 | [1, 2, 4, 10]
//             47 | ]; >
//         48 | expect(solve(n, m, t0, t1, t2, edges)).toBe(5); |
//         ^
//         49 |
//     });
// 50 |
//     51 | test('graph with many intersections and edges', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 45 _prompt1.test.js: 48: 10)

//             ● graph with many intersections and edges

//             TypeError: solve is not a
//             function

//             60 | [1, 3, 19, 35]
//             61 | ]; >
//         62 | expect(solve(n, m, t0, t1, t2, edges)).toBe(10); |
//         ^
//         63 |
//     });
// 64 |
//     65 | test('choose path to avoid walking during call', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 45 _prompt1.test.js: 62: 10)

//             ● choose path to avoid walking during call

//             TypeError: solve is not a
//             function

//             72 | [1, 4, 15, 30]
//             73 | ]; >
//         74 | expect(solve(n, m, t0, t1, t2, edges)).toBe(13); |
//         ^
//         75 |
//     });

// at Object.solve(tests - descriptive / tests - prompt1 / 45 _prompt1.test.js: 74: 10)