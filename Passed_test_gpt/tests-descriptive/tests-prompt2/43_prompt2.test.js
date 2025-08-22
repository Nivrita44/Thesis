import { solve } from '../../../solutions-descriptive/43.js';

test('single node', () => {
    expect(solve(1, 10, [5], [])).toBe(5);
});

test('two nodes, no cost penalty', () => {
    expect(solve(2, 0, [5, 7], [
        [1, 2]
    ])).toBe(12);
});

test('two nodes, high cost penalty', () => {
    expect(solve(2, 10, [5, 7], [
        [1, 2]
    ])).toBe(7);
});

test('three node line, zero cost', () => {
    expect(solve(3, 0, [3, 2, 1], [
        [1, 2],
        [2, 3]
    ])).toBe(6);
});

test('three node star, higher cost', () => {
    expect(solve(3, 5, [10, 2, 2], [
        [1, 2],
        [1, 3]
    ])).toBe(10);
});

test('all negative values', () => {
    expect(solve(3, 2, [-1, -2, -3], [
        [1, 2],
        [2, 3]
    ])).toBe(0);
});

test('selecting none yields higher (all negatives)', () => {
    expect(solve(4, 3, [-1, -2, -3, -4], [
        [1, 2],
        [2, 3],
        [3, 4]
    ])).toBe(0);
});