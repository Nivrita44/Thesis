// @ts-nocheck
import { solve } from '../../../solutions-descriptive/31.js'

test('basic example with 2x2 deck', () => {
    expect(solve(2 n, 2 n)).toEqual(2 n);
});

test('minimal case 1x2 deck', () => {
    expect(solve(1 n, 2 n)).toEqual([1 n]);
});

test('edge case with suit 1 having power', () => {
    expect(solve(3 n, 2 n)).toEqual([20 n]);
});

test('larger case 4x4 deck', () => {
    expect(solve(4 n, 4 n)).toEqual([2416 n]);
});

test('case with many suits 5x2 deck', () => {
    expect(solve(5 n, 2 n)).toEqual([52 n]);
});

test('moderate size 3x4 deck', () => {
    expect(solve(3 n, 4 n)).toEqual([240 n]);
});

test('large but manageable 6x2 deck', () => {
    expect(solve(6 n, 2 n)).toEqual([132 n]);
});

test('upper bound case', () => {
    expect(solve(500 n, 2 n)).toEqual([254661927 n]);
});