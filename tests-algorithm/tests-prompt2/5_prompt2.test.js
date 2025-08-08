import { solve } from '../../solutions-algorithm/5.js';

test('typical case with one duplicate near end', () => {
    expect(solve([3, 1, 4, 3])).toBe(1);
});

test('all elements the same', () => {
    expect(solve([1, 1, 1, 1, 1])).toBe(4);
});

test('single element, no duplicates', () => {
    expect(solve([1])).toBe(0);
});

test('all unique elements', () => {
    expect(solve([6, 5, 4, 3, 2, 1])).toBe(0);
});

test('multiple duplicates, non-adjacent', () => {
    expect(solve([1, 2, 1, 7, 1, 2, 1])).toBe(5);
});

test('last two elements are duplicate', () => {
    expect(solve([2, 3, 5, 6, 3])).toBe(1);
});

test('no elements', () => {
    expect(solve([])).toBe(0);
});

test('duplicate at start and end', () => {
    expect(solve([7, 2, 9, 7])).toBe(1);
});

test('two elements, both same', () => {
    expect(solve([10, 10])).toBe(1);
});

test('three elements, no duplicates', () => {
    expect(solve([1, 2, 3])).toBe(0);
});

test('large array with all unique numbers', () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i);
    expect(solve(arr)).toBe(0);
});

test('large array, duplicate at the end', () => {
    const arr = Array.from({ length: 9999 }, (_, i) => i).concat([1]);
    expect(solve(arr)).toBe(9999);
});


// FAIL tests - algorithm / tests - prompt2 / 5 _prompt2.test.js√ typical
// case with one duplicate near end(3 ms)√ all elements the same√ single element, no duplicates(1 ms)√ all unique elements√ multiple duplicates, non - adjacent× last two elements are duplicate(2 ms)√ no elements√ duplicate at start and end√ two elements, both same(1 ms)√ three elements, no duplicates(1 ms)√ large array with all unique numbers(2 ms)× large array, duplicate at the end(2 ms)

// ● last two elements are duplicate

// expect(received).toBe(expected) // Object.is equality

// Expected:
//     1
//     Received: 2

//     22 |
//         23 | test('last two elements are duplicate', () => { >
//             24 | expect(solve([2, 3, 5, 6, 3])).toBe(1); |
//             ^
//             25 |
//         });
//     26 |
//         27 | test('no elements', () => {

//                 at Object.toBe(tests - algorithm / tests - prompt2 / 5 _prompt2.test.js: 24: 34)

//                 ● large array, duplicate at the end

//                 expect(received).toBe(expected) // Object.is equality

//                 Expected: 9999
//                 Received: 2

//                 48 | test('large array, duplicate at the end', () => {
//                     49 |
//                         const arr = Array.from({ length: 9999 }, (_, i) => i).concat([1]); >
//                     50 | expect(solve(arr)).toBe(9999); |
//                     ^
//                     51 |
//                 });

//                 at Object.toBe(tests - algorithm / tests - prompt2 / 5 _prompt2.test.js: 50: 22)