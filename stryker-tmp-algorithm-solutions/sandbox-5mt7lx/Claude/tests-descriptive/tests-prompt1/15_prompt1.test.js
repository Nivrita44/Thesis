// @ts-nocheck
import { solve } from '../../../solutions-descriptive/15.js'

test('example case', () => {
    expect(solve(4, 2, 3, [1, 3, 2])).toBe('3 4 3 ');
});

test('minimal case=2', () => {
    expect(solve(2, 1, 1, [2])).toBe('2');
});

test('large case', () => {
    expect(solve(1000000000, 500000000, 2, [1, 2])).toBe('2 3');
});

test('joker at start position', () => {
    expect(solve(5, 1, 3, [2, 3, 4])).toBe('2 3 4');
});

test('joker at end position', () => {
    expect(solve(5, 5, 3, [1, 2, 3])).toBe('2 3 4');
});

test('all positions affect joker', () => {
    expect(solve(3, 2, 3, [1, 2, 3])).toBe('2 2 2');
});

test('no positions affect joker', () => {
    expect(solve(5, 3, 2, [1, 5])).toBe('1 1');
});

test('alternating positions', () => {
    expect(solve(6, 4, 4, [1, 3, 5, 2])).toBe('2 3 3 4');
});