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