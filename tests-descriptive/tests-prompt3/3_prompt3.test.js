import { solve } from '../../solutions-descriptive/3.js';

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

test('1x2 vertical region at origin', () => {
  expect(solve(0, 1, 0, 2)).toBe(1);
});

test('1x2 horizontal region at y=10', () => {
  expect(solve(10, 12, 5, 6)).toBe(1);
});

test('thin vertical region spanning multiple powers of two', () => {
  expect(solve(7, 8, 0, 1024)).toBe(1);
});

test('thin horizontal region spanning multiple powers of two', () => {
  expect(solve(0, 1024, 7, 8)).toBe(1);
});

test('non-overlapping region offset from origin', () => {
  expect(solve(100, 104, 200, 205)).toBe(7);
});

test('large region with maximum row/col (testing upper bound)', () => {
  expect(solve(0, 1000000, 0, 1000000)).toBe(1);
});

test('maximal 1x1 region at farthest allowed point', () => {
  expect(solve(999999, 1000000, 999999, 1000000)).toBe(1);
});

test('thin "L" shaped region', () => {
  expect(solve(3, 5, 4, 8)).toBe(2);
});

test('one cell in each axis', () => {
  expect(solve(500, 501, 700, 701)).toBe(1);
});

test('edge boundary region, minimal width and max y', () => {
  expect(solve(0, 1, 0, 1000000)).toBe(1);
});

test('edge boundary region, minimal height, max x', () => {
  expect(solve(0, 1000000, 0, 1)).toBe(1);
});

test('generic, region of size not a power of 2', () => {
  expect(solve(3, 6, 2, 7)).toBe(6);
});