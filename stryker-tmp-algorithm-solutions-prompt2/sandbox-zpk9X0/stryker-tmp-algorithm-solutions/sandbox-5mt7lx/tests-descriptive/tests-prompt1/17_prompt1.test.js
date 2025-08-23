// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/17.js';

test('n=1, m=1', () => {
    expect(solve(1, 1)).toBe('Yes\n1\n1\n');
});

test('n=1, m=3', () => {
    expect(solve(1, 3)).toBe('No');
});

test('n=2, m=1', () => {
    expect(solve(2, 1)).toBe('Yes\n1\n2\n1\n2\n');
});

test('n=2, m=2', () => {
    const lines = solve(2, 2).trim().split('\n');
    expect(lines[0].toLowerCase()).toBe('yes');
    expect(lines.length).toBe(1 + 4);
    for (let i = 1; i <= 4; ++i) {
        expect(lines[i].split(' ').every(x => [+x === 1 || +x === 2])).toBe(true);
        expect(lines[i].split(' ').length).toBe(2);
    }
});

test('n=3, m=2', () => {
    const lines = solve(3, 2).trim().split('\n');
    expect(lines[0].toLowerCase()).toBe('yes');
    expect(lines.length).toBe(1 + 6);
});

test('n=1, m=2', () => {
    expect(solve(1, 2)).toBe('No');
});

test('n=5, m=1', () => {
    const lines = solve(5, 1).trim().split('\n');
    expect(lines[0].toLowerCase()).toBe('yes');
    expect(lines.length).toBe(1 + 10);
    for (let i = 1; i <= 10; ++i) {
        expect(+lines[i]).toBeGreaterThanOrEqual(1);
        expect(+lines[i]).toBeLessThanOrEqual(5);
    }
});

test('n=4, m=3', () => {
    const lines = solve(4, 3).trim().split('\n');
    expect(lines[0].toLowerCase()).toBe('yes');
    expect(lines.length).toBe(1 + 8);
    for (let i = 1; i < lines.length; ++i) {
        const arr = lines[i].split(' ').map(s => +s);
        expect(arr.length).toBe(3);
        arr.forEach((color) => {
            expect(color).toBeGreaterThanOrEqual(1);
            expect(color).toBeLessThanOrEqual(4);
        });
    }
});

test('Maximum n and m', () => {
    const result = solve(1000, 1000);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
});
// FAIL tests - descriptive / tests - prompt1 / 17 _prompt1.test.js
// × n = 1, m = 1(5 ms)
// × n = 1, m = 3(4 ms)
// × n = 2, m = 1
// √ n = 2, m = 2(1 ms)
// √ n = 3, m = 2(1 ms)
// × n = 1, m = 2(1 ms)
// √ n = 5, m = 1(3 ms)
// √ n = 4, m = 3(3 ms)
// √ Maximum n and m(527 ms)

// ● n = 1, m = 1

// expect(received).toBe(expected) // Object.is equality

// -
// Expected - 2 +
//     Received + 1

//     -
//     Yes +
//     YES
// 1
// 1
//     -

//     2 |
//     3 | test('n=1, m=1', () => { >
//         4 | expect(solve(1, 1)).toBe('Yes\n1\n1\n'); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('n=1, m=3', () => {

//             at Object.toBe(tests - descriptive / tests - prompt1 / 17 _prompt1.test.js: 4: 23)

//             ● n = 1, m = 3

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "No"
//             Received: "NO"

//             6 |
//                 7 | test('n=1, m=3', () => { >
//                     8 | expect(solve(1, 3)).toBe('No'); |
//                     ^
//                     9 |
//                 });
//             10 |
//                 11 | test('n=2, m=1', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt1 / 17 _prompt1.test.js: 8: 23)

//                         ● n = 2, m = 1

//                         expect(received).toBe(expected) // Object.is equality

//                         -
//                         Expected - 3 +
//                             Received + 2

//                             -
//                             Yes +
//                             YES
//                         1
//                             -
//                             2
//                         1
//                         2
//                             -
//                             +2

//                         10 |
//                             11 | test('n=2, m=1', () => { >
//                                 12 | expect(solve(2, 1)).toBe('Yes\n1\n2\n1\n2\n'); |
//                                 ^
//                                 13 |
//                             });
//                         14 |
//                             15 | test('n=2, m=2', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt1 / 17 _prompt1.test.js: 12: 23)

//                                     ● n = 1, m = 2

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: "No"
//                                     Received: "NO"

//                                     30 |
//                                         31 | test('n=1, m=2', () => { >
//                                             32 | expect(solve(1, 2)).toBe('No'); |
//                                             ^
//                                             33 |
//                                         });
//                                     34 |
//                                         35 | test('n=5, m=1', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt1 / 17 _prompt1.test.js: 32: 23)