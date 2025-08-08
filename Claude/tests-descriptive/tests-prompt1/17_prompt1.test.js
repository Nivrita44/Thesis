import { solve } from '../../solutions-descriptive/17.js';

test('basic example from description', () => {
  expect(solve(2, 2)).toEqual({
    possible: true, 
    colors: [[1,2],[2,1],[1,2],[2,1]]
  });
});

test('minimal case n=m=1', () => {
  expect(solve(1, 1)).toEqual({
    possible: true,
    colors: [[1],[1]]
  });
});

test('edge case n=1,m=1000', () => {
  expect(solve(1, 1000)).toEqual({
    possible: true,
    colors: Array(2).fill().map(() => Array(1000).fill(1))
  });
});

test('edge case n=1000,m=1', () => {
  expect(solve(1000, 1)).toEqual({
    possible: true,
    colors: Array(2000).fill().map(() => [1])
  });
});

test('n=3,m=3 case', () => {
  const result = solve(3, 3);
  expect(result.possible).toBe(true);
  expect(result.colors.length).toBe(6);
  expect(result.colors[0].length).toBe(3);
});

test('n=5,m=4 case', () => {
  const result = solve(5, 4);
  expect(result.possible).toBe(true);
  expect(result.colors.length).toBe(10);
  expect(result.colors[0].length).toBe(4);
});

test('n=4,m=5 case', () => {
  const result = solve(4, 5);
  expect(result.possible).toBe(true);
  expect(result.colors.length).toBe(8);
  expect(result.colors[0].length).toBe(5);
});

test('all colors should be in range [1,n]', () => {
  const result = solve(3, 4);
  const allColors = result.colors.flat();
  expect(Math.min(...allColors)).toBe(1);
  expect(Math.max(...allColors)).toBeLessThanOrEqual(3);
});