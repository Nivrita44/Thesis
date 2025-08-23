// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/6.js'

test('example case from description', () => {
    expect(solve(4, [5, 5, 5, 5])).toBe(0);
});

test('minimal array length case', () => {
    expect(solve(4, [1, 2, 3, 4])).toBe(4);
});

test('large array case', () => {
    const arr = Array(100000).fill(1);
    expect(solve(arr)).toBe(0);
});

test('corner case - all same except one', () => {
    expect(solve(4, [1, 1, 10, 1])).toBe(9);
});

test('edge case - alternating values', () => {
    expect(solve(5, [1, 10, 1, 10, 1])).toBe(18);
});

test('generic case 1', () => {
    expect(solve(5, [4, 2, 8, 6, 3])).toBe(8);
});

test('generic case 2', () => {
    expect(solve(6, [7, 3, 5, 2, 1, 8])).toBe(11);
});

test('tricky case - descending order', () => {
    expect(solve(5, [10, 8, 6, 4, 2])).toBe(8);
});

test('random valid case', () => {
    expect(solve(6, [3, 7, 2, 9, 4, 6])).toBe(11);
});