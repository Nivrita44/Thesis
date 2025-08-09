import { solve } from '../../solutions-algorithm/22.js'

test('example case n=4', () => {
  expect(solve(4n)).toBe("First");
});

test('edge case n=1000', () => {
  expect(solve(1000n)).toBe("First");
});

test('minimum value n=1', () => {
  expect(solve(1n)).toBe("First");
});

test('when n is already divisible by 3', () => {
  expect(solve(3n)).toBe("First");
});

test('when optimal play leads to Vova win', () => {
  expect(solve(5n)).toBe("Second");
});

test('generic case n=10', () => {
  expect(solve(10n)).toBe("First");
});

test('generic case n=17', () => {
  expect(solve(17n)).toBe("First");
});

test('tricky case one move from divisible by 3', () => {
  expect(solve(8n)).toBe("First");
});

test('large case n=999', () => {
  expect(solve(999n)).toBe("First");
});