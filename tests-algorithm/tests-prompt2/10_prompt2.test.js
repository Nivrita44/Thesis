import { solve } from '../../solutions-algorithm/10.js';

test('solve returns correct result for 5009', () => {
    expect(solve(5009)).toEqual({ count: 2, parts: [9, 5000] });
});

test('solve returns correct result for 7', () => {
    expect(solve(7)).toEqual({ count: 1, parts: [7] });
});

test('solve returns correct result for 9876', () => {
    expect(solve(9876)).toEqual({ count: 4, parts: [6, 70, 800, 9000] });
});

test('solve returns correct result for 10000', () => {
    expect(solve(10000)).toEqual({ count: 1, parts: [10000] });
});

test('solve returns correct result for 10', () => {
    expect(solve(10)).toEqual({ count: 1, parts: [10] });
});

test('solve handles 0', () => {
    expect(solve(0)).toEqual({ count: 0, parts: [] });
});

test('solve handles number with all nonzero digits, e.g., 1234', () => {
    expect(solve(1234)).toEqual({ count: 4, parts: [4, 30, 200, 1000] });
});

test('solve handles number with alternating digits, e.g., 10101', () => {
    expect(solve(10101)).toEqual({ count: 3, parts: [1, 100, 10000] });
});

test('solve handles single digit 0', () => {
    expect(solve(0)).toEqual({ count: 0, parts: [] });
});

test('solve handles double zero 00', () => {
    expect(solve(00)).toEqual({ count: 0, parts: [] });
});

test('solve handles large number 400040005', () => {
    expect(solve(400040005)).toEqual({ count: 3, parts: [5, 40000, 400000000] });
});

test('solve handles one-digit input (3)', () => {
    expect(solve(3)).toEqual({ count: 1, parts: [3] });
});

test('solve handles two-digit input, mixed, e.g., 30', () => {
    expect(solve(30)).toEqual({ count: 1, parts: [30] });
});

test('solve handles all digits nonzero except center (10203)', () => {
    expect(solve(10203)).toEqual({ count: 3, parts: [3, 200, 10000] });
});

test('solve handles large all-9 number (99999)', () => {
    expect(solve(99999)).toEqual({ count: 5, parts: [9, 90, 900, 9000, 90000] });
});


// FAIL tests - algorithm / tests - prompt2 / 18 _prompt2.test.js√ typical cases(3 ms)√ r just below threshold(1 ms)√ r equals threshold(1 ms)√ single edge minimum values(1 ms)√ large numbers(1 ms)√ empty input(1 ms)× negative l and / or r(4 ms)

// ● negative l and / or r

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 2 +
//     Received + 2

// @ @ - 2, 12 + 2, 12 @ @
// Array[
//         "-2",
//         "-4",
//     ],
//     Array[-"-1", -"-1", +"-2", +"-4", ],
//     Array[
//         "-2",
//         "-4",
//     ],

//     74 | [-2, 0]
// 75 | ]) >
// 76 | ).toEqual([ |
//             ^
//             77 | ['-2', '-4'],
//             78 | ['-1', '-1'],
//             79 | ['-2', '-4']