import { solve } from '../../../solutions-descriptive/37.js';

test('xor limit of 0 returns 1', () => {
    expect(solve(5, 0, [1, 2, 3, 4, 5])).toBe('1');
});

test('simple array with achievable xor limit', () => {
    expect(solve(5, 7, [1, 2, 3, 4, 5])).toBe('2');
});

test('array with unachievable xor limit returns -1', () => {
    expect(solve(5, 8, [1, 2, 3, 4, 5])).toBe('-1');
});

test('array requiring longer subarray to achieve limit', () => {
    expect(solve(5, 7, [3, 5, 1, 4, 2])).toBe('4');
});

test('array with lower xor limit needs shorter subarray', () => {
    expect(solve(5, 3, [3, 5, 1, 4, 2])).toBe('2');
});

test('array with high xor limit returns -1', () => {
    expect(solve(6, 71, [26, 56, 12, 45, 60, 27])).toBe('-1');
});

test('single element array with achievable limit', () => {
    expect(solve(1, 5, [5])).toBe('-1');
});

test('array with all same numbers', () => {
    expect(solve(4, 0, [42, 42, 42, 42])).toBe('1');
});

test('array with powers of 2', () => {
    expect(solve(4, 6, [2, 4, 8, 16])).toBe('2');
});
