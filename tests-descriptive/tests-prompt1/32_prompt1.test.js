import { solve } from '../../solutions-descriptive/32.js';

test('single element simple', () => {
    expect(solve(1, [6])).toBe(6);
});

test('two elements, answer exists', () => {
    const out = solve(2, [3, 8]);
    expect(out === 3 || out === 8).toBe(true);
});

test('generator all even', () => {
    expect(solve(3, [4, 6, 8])).toBe(4);
});

test('generator no solution', () => {
    expect(solve(2, [5, 6])).toBe(-1);
});

test('larger array, solution exists', () => {
    expect(solve(4, [8, 12, 20, 32])).toBe(8);
});

test('pair of coprime numbers, no solution', () => {
    expect(solve(2, [7, 10])).toBe(-1);
});

test('n = 1, minimal value', () => {
    expect(solve(1, [2])).toBe(2);
});

test('n = 3, spread values', () => {
    const result = solve(3, [6, 10, 14]);
    expect(result === 6 || result === 10 || result === 14).toBe(true);
});

test('maximal ai', () => {
    expect(solve(1, [400000])).toBe(400000);
});

test('two adjacent values, not generators', () => {
    expect(solve(2, [8, 9])).toBe(-1);
});


// FAIL tests - descriptive / tests - prompt1 / 32 _prompt1.test.js× single element simple(25 ms)× two elements, answer exists× generator all even(1 ms)× generator no solution(1 ms)× larger array, solution exists(1 ms)× pair of coprime numbers, no solution× n = 1, minimal value× n = 3, spread values× maximal ai× two adjacent values, not generators

// ● single element simple

// ReferenceError: readInt is not defined

// 26 |
// }
// 27 |
//     >
//     28 |
//     let n = readInt(); |
// ^
// 29 |
//     let a = new Int32Array(n);
// 30 |
//     for (let i = 0; i < n; i++) {
//         31 | a[i] = readInt();

//         at readInt(solutions - descriptive / 32. js: 28: 13)
//         at Object.solve(tests - descriptive / tests - prompt1 / 32 _prompt1.test.js: 4: 10)

//         ● two elements, answer exists

//         ReferenceError: readInt is not defined

//         26 |
//     }
// 27 |
//     >
//     28 |
//     let n = readInt(); |
// ^
// 29 |
//     let a = new Int32Array(n);
// 30 |
//     for (let i = 0; i < n; i++) {
//         31 | a[i] = readInt();

//         at readInt(solutions - descriptive / 32. js: 28: 13)
//         at Object.solve(tests - descriptive / tests - prompt1 / 32 _prompt1.test.js: 8: 15)

//         ● generator all even

//         ReferenceError: readInt is not defined

//         26 |
//     }
// 27 |
//     >
//     28 |
//     let n = readInt(); |
// ^
// 29 |
//     let a = new Int32Array(n);
// 30 |
//     for (let i = 0; i < n; i++) {
//         31 | a[i] = readInt();

//         at readInt(solutions - descriptive / 32. js: 28: 13)
//         at Object.solve(tests - descriptive / tests - prompt1 / 32 _prompt1.test.js: 13: 10)

//         ● generator no solution

//         ReferenceError: readInt is not defined

//         26 |
//     }
// 27 |
//     >
//     28 |
//     let n = readInt(); |
// ^
// 29 |
//     let a = new Int32Array(n);
// 30 |
//     for (let i = 0; i < n; i++) {
//         31 | a[i] = readInt();

//         at readInt(solutions - descriptive / 32. js: 28: 13)
//         at Object.solve(tests - descriptive / tests - prompt1 / 32 _prompt1.test.js: 17: 10)

//         ● larger array, solution exists

//         ReferenceError: readInt is not defined

//         26 |
//     }
// 27 |
//     >
//     28 |
//     let n = readInt(); |
// ^
// 29 |
//     let a = new Int32Array(n);
// 30 |
//     for (let i = 0; i < n; i++) {
//         31 | a[i] = readInt();

//         at readInt(solutions - descriptive / 32. js: 28: 13)
//         at Object.solve(tests - descriptive / tests - prompt1 / 32 _prompt1.test.js: 21: 10)

//         ● pair of coprime numbers, no solution

//         ReferenceError: readInt is not defined

//         26 |
//     }
// 27 |
//     >
//     28 |
//     let n = readInt(); |
// ^
// 29 |
//     let a = new Int32Array(n);
// 30 |
//     for (let i = 0; i < n; i++) {
//         31 | a[i] = readInt();

//         at readInt(solutions - descriptive / 32. js: 28: 13)
//         at Object.solve(tests - descriptive / tests - prompt1 / 32 _prompt1.test.js: 25: 10)

//         ● n = 1, minimal value

//         ReferenceError: readInt is not defined

//         26 |
//     }
// 27 |
//     >
//     28 |
//     let n = readInt(); |
// ^
// 29 |
//     let a = new Int32Array(n);
// 30 |
//     for (let i = 0; i < n; i++) {
//         31 | a[i] = readInt();

//         at readInt(solutions - descriptive / 32. js: 28: 13)
//         at Object.solve(tests - descriptive / tests - prompt1 / 32 _prompt1.test.js: 29: 10)

//         ● n = 3, spread values

//         ReferenceError: readInt is not defined

//         26 |
//     }
// 27 |
//     >
//     28 |
//     let n = readInt(); |
// ^
// 29 |
//     let a = new Int32Array(n);
// 30 |
//     for (let i = 0; i < n; i++) {
//         31 | a[i] = readInt();

//         at readInt(solutions - descriptive / 32. js: 28: 13)
//         at Object.solve(tests - descriptive / tests - prompt1 / 32 _prompt1.test.js: 33: 18)

//         ● maximal ai

//         ReferenceError: readInt is not defined

//         26 |
//     }
// 27 |
//     >
//     28 |
//     let n = readInt(); |
// ^
// 29 |
//     let a = new Int32Array(n);
// 30 |
//     for (let i = 0; i < n; i++) {
//         31 | a[i] = readInt();

//         at readInt(solutions - descriptive / 32. js: 28: 13)
//         at Object.solve(tests - descriptive / tests - prompt1 / 32 _prompt1.test.js: 38: 10)

//         ● two adjacent values, not generators

//         ReferenceError: readInt is not defined

//         26 |
//     }
// 27 |
//     >
//     28 |
//     let n = readInt(); |
// ^
// 29 |
//     let a = new Int32Array(n);
// 30 |
//     for (let i = 0; i < n; i++) {
//         31 | a[i] = readInt();

//         at readInt(solutions - descriptive / 32. js: 28: 13)
//         at Object.solve(tests - descriptive / tests - prompt1 / 32 _prompt1.test.js: 42: 10)