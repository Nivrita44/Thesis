// @ts-nocheck
import { solve } from '../../../solutions-algorithm/32.js';

test('example case from description', () => {
    const input = [{ N: 3, A: [1, 2, 3], B: [2, 3, 1], C: [0, 3, 0] }];
    expect(solve(input)).toEqual([2]);
});

test('minimal case=1', () => {
    const input = [{ N: 1, A: [1], B: [1], C: [1] }];
    expect(solve(input)).toEqual([1]);
});

test('edge case with all positions fixed', () => {
    const input = [{ N: 4, A: [1, 2, 3, 4], B: [4, 3, 2, 1], C: [1, 2, 3, 4] }];
    expect(solve(input)).toEqual([1]);
});

test('large input case', () => {
    const input = [{ N: 5, A: [1, 2, 3, 4, 5], B: [5, 4, 3, 2, 1], C: [0, 0, 3, 0, 0] }];
    expect(solve(input)).toEqual([8]);
});

test('case with only one unknown position', () => {
    const input = [{ N: 3, A: [3, 1, 2], B: [2, 3, 1], C: [3, 0, 2] }];
    expect(solve(input)).toEqual([1]);
});

test('case with alternating fixed positions', () => {
    const input = [{ N: 4, A: [1, 2, 3, 4], B: [2, 1, 4, 3], C: [0, 1, 0, 3] }];
    expect(solve(input)).toEqual([2]);
});

test('case with single fixed position at start', () => {
    const input = [{ N: 3, A: [2, 1, 3], B: [1, 3, 2], C: [2, 0, 0] }];
    expect(solve(input)).toEqual([2]);
});

test('case with multiple valid possibilities', () => {
    const input = [{ N: 4, A: [4, 3, 2, 1], B: [1, 2, 3, 4], C: [0, 0, 0, 1] }];
    expect(solve(input)).toEqual([6]);
});