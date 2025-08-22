import { solve } from '../../../solutions-descriptive/3.js';

test('single unit square region', () => {
    expect(solve(0, 1, 1, 2)).toBe(1);
});

test('full 2x2 region from origin', () => {
    expect(solve(0, 2, 0, 2)).toBe(1);
});

test('2x2 region starting at (1,1)', () => {
    expect(solve(1, 3, 1, 3)).toBe(4);
});

test('rectangular region 2x4 from (0,1)', () => {
    expect(solve(0, 2, 1, 5)).toBe(5);
});

test('arbitrary large region', () => {
    expect(solve(9, 98, 244, 353)).toBe(374);
});

test('smallest possible nonzero region (1x1 at origin)', () => {
    expect(solve(0, 1, 0, 1)).toBe(1);
});

test('maximal 1x1 region at farthest allowed point', () => {
    expect(solve(999999, 1000000, 999999, 1000000)).toBe(1);
});

test('one cell in each axis', () => {
    expect(solve(500, 501, 700, 701)).toBe(1);
});