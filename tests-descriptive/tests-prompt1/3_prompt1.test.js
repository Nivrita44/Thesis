import { solve } from '../../solutions-descriptive/3.js';

test('single 1x1 region', () => {
    expect(solve(0, 1, 0, 1)).toBe(1);
});

test('2x2 region at origin', () => {
    expect(solve(0, 2, 0, 2)).toBe(1);
});

test('2x2 region not at origin', () => {
    expect(solve(2, 4, 2, 4)).toBe(1);
});

test('1x2 region (row)', () => {
    expect(solve(0, 1, 0, 2)).toBe(2);
});

test('2x1 region (column)', () => {
    expect(solve(0, 2, 0, 1)).toBe(2);
});

test('1x3 vertical strip', () => {
    expect(solve(5, 6, 5, 8)).toBe(3);
});

test('3x1 horizontal strip', () => {
    expect(solve(5, 8, 5, 6)).toBe(3);
});

test('3x3 region', () => {
    expect(solve(0, 3, 0, 3)).toBe(4);
}); // fail

test('rectangular 2x4 region', () => {
    expect(solve(4, 6, 7, 11)).toBe(4);
}); //fail

test('worst-case long narrow rectangle (vertical, length 16)', () => {
    expect(solve(0, 1, 0, 16)).toBe(16);
});

test('worst-case long narrow rectangle (horizontal, length 16)', () => {
    expect(solve(0, 16, 0, 1)).toBe(16);
});

test('largest contained 2^k square, offset', () => {
    expect(solve(8, 16, 32, 40)).toBe(1);
});

test('entire (0,4)x(0,4) region', () => {
    expect(solve(0, 4, 0, 4)).toBe(1);
});

test('region with jagged bounds', () => {
    expect(solve(3, 7, 2, 6)).toBe(7);
}); //fail

test('1x8 region', () => {
    expect(solve(0, 1, 0, 8)).toBe(8);
});

test('full 4x4 region offset', () => {
    expect(solve(4, 8, 12, 16)).toBe(1);
});