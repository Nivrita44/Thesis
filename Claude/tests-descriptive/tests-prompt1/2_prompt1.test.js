import { solve } from '../../../solutions-descriptive/2.js'

test('example case n=12, k=3', () => {
  expect(solve(12n, 3n)).toBe(42n);
});

test('minimal case n=1, k=2', () => {
  expect(solve(1n, 2n)).toBe(1n);
});

test('small numbers n=5, k=4', () => {
  expect(solve(5n, 4n)).toBe(14n);
});

test('larger k with small n n=7, k=10', () => {
  expect(solve(7n, 10n)).toBe(63n);
});

test('medium n with small k n=100, k=5', () => {
  expect(solve(100n, 5n)).toBe(444n);
});

test('large input case n=300000, k=1000000000000000000', () => {
  expect(solve(300000n, 1000000000000000000n)).toBe(647483735n);
});

test('edge case n=299999, k=999999999999999999', () => {
  expect(solve(299999n, 999999999999999999n)).toBe(234567890n);
});

test('tricky case with palindromic n n=121, k=7', () => {
  expect(solve(121n, 7n)).toBe(726n);
});

test('power of 2 case n=128, k=8', () => {
  expect(solve(128n, 8n)).toBe(891n);
});
