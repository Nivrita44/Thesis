import { solve } from '../../solutions-algorithm/19.js'

test('example case from description with x=5', () => {
  expect(solve(5n)).toBe(1n);
});

test('minimal case x=1', () => {
  expect(solve(1n)).toBe(1n);
});

test('edge case x=6 requiring 2 steps', () => {
  expect(solve(6n)).toBe(2n);
});

test('large input case x=1000000', () => {
  expect(solve(1000000n)).toBe(200000n);
});

test('case where x=12 requiring 3 steps', () => {
  expect(solve(12n)).toBe(3n);
});

test('case with x=25 requiring 5 steps', () => {
  expect(solve(25n)).toBe(5n);
});

test('tricky case x=14 requiring 3 steps', () => {
  expect(solve(14n)).toBe(3n);
});

test('case with x=100 requiring 20 steps', () => {
  expect(solve(100n)).toBe(20n);
});