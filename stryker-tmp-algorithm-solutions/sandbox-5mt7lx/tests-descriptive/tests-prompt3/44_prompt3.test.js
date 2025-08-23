// @ts-nocheck
import { solve } from '../../solutions-descriptive/44.js';

test('single pile of 1 stone, Alice wins', () => {
    expect(solve([1])).toBe('Alice');
});

test('single pile of 2 stones, Bob wins', () => {
    expect(solve([2])).toBe('Bob');
});

test('single pile of 3 stones, Alice wins', () => {
    expect(solve([3])).toBe('Alice');
});

test('two piles with [1, 2], Bob wins', () => {
    expect(solve([1, 2])).toBe('Bob');
});

test('two piles with [1, 3], Alice wins', () => {
    expect(solve([1, 3])).toBe('Alice');
});

test('example test: [3, 2, 9], Bob wins', () => {
    expect(solve([3, 2, 9])).toBe('Bob');
});

test('example test: [3, 3, 6, 1], Alice wins', () => {
    expect(solve([3, 3, 6, 1])).toBe('Alice');
});

test('example test: [1, 2, 3, 4, 5], Bob wins', () => {
    expect(solve([1, 2, 3, 4, 5])).toBe('Bob');
});

test('all piles size 1, even n', () => {
    expect(solve(Array(10).fill(1))).toBe('Bob');
});

test('all piles size 1, odd n', () => {
    expect(solve(Array(11).fill(1))).toBe('Alice');
});

test('all piles size 2, big n', () => {
    expect(solve(Array(20).fill(2))).toBe('Bob');
});

test('varied prime numbers [2,3,5,7]', () => {
    expect(solve([2, 3, 5, 7])).toBe('Alice');
});

test('descending numbers [5,4,3,2,1]', () => {
    expect(solve([5, 4, 3, 2, 1])).toBe('Bob');
});

test('alternating 1,2 piles', () => {
    expect(solve([1, 2, 1, 2, 1, 2, 1, 2])).toBe('Bob');
});

test('max edge value', () => {
    expect(typeof solve([1e7])).toBe('string');
});

test('two large different values', () => {
    expect(typeof solve([1e7, 1e7 - 1])).toBe('string');
});

test('mixed odd and even [7,8,9,10,11,12]', () => {
    expect(['Alice', 'Bob']).toContain(solve([7, 8, 9, 10, 11, 12]));
});

test('input of length one, large value', () => {
    expect(typeof solve([9999999])).toBe('string');
});

test('input of maximum allowed n = 10', () => {
    expect(['Alice', 'Bob']).toContain(solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
});

test('input with only even numbers [2,4,6,8]', () => {
    expect(solve([2, 4, 6, 8])).toBe('Bob');
});

test('input with only odd numbers [1,3,5,7,9]', () => {
    expect(typeof solve([1, 3, 5, 7, 9])).toBe('string');
});

// FAIL tests - descriptive / tests - prompt3 / 44 _prompt3.test.js√ single pile of 1 stone, Alice wins(2 ms)√ single pile of 2 stones, Bob wins√ single pile of 3 stones, Alice wins(1 ms)× two piles with[1, 2], Bob wins(3 ms)√ two piles with[1, 3], Alice wins√ example test: [3, 2, 9], Bob wins(1 ms)√ example test: [3, 3, 6, 1], Alice wins(1 ms)√ example test: [1, 2, 3, 4, 5], Bob wins(1 ms)√ all piles size 1, even n(1 ms)√ all piles size 1, odd n(1 ms)√ all piles size 2, big n√ varied prime numbers[2, 3, 5, 7]√ descending numbers[5, 4, 3, 2, 1]√ alternating 1, 2 piles√ max edge value√ two large different values√ mixed odd and even[7, 8, 9, 10, 11, 12]√ input of length one, large value√ input of maximum allowed n = 10√ input with only even numbers[2, 4, 6, 8]√ input with only odd numbers[1, 3, 5, 7, 9]

// ● two piles with[1, 2], Bob wins

// expect(received).toBe(expected) // Object.is equality

// Expected: "Bob"
// Received: "Alice"

// 14 |
//     15 | test('two piles with [1, 2], Bob wins', () => { >
//         16 | expect(solve([1, 2])).toBe('Bob'); |
//         ^
//         17 |
//     });
// 18 |
//     19 | test('two piles with [1, 3], Alice wins', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 44 _prompt3.test.js: 16: 25)
