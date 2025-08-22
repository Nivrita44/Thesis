import { solve } from '../../../solutions-descriptive/8.js'

test('example case from description', () => {
    expect(solve(2, 2, [1, 3], [2, 4])).toBe('1\n2');
});

test('minimal input case', () => {
    expect(solve(1, 1, [0], [0])).toBe('0');
});

test('no possible triangles case', () => {
    expect(solve(2, 1, [1, 2], [1])).toBe('0');
});

test('single triangle possible case', () => {
    expect(solve(2, 1, [0, 2], [1])).toBe('1\n1');
});

test('large coordinates case', () => {
    expect(solve(3, 2, [-1000000000, 0, 1000000000], [-500000000, 500000000])).toBe('1\n2000000000 ');
});

test('multiple triangles with same area', () => {
    expect(solve(3, 3, [0, 2, 4], [1, 3, 5])).toBe('2\n 2 2');
});

test('mixed positive and negative coordinates', () => {
    expect(solve(3, 2, [-2, 0, 2], [-1, 1])).toBe('1\n2');
});

test('all points on same vertical line', () => {
    expect(solve(3, 2, [1, 1, 1], [1, 1])).toBe('0');
});