import { solve } from '../../solutions-algorithm/6.js'

test('example case from description', () => {
  expect(solve([5, 5, 5, 5])).toBe(0n);
});

test('minimal array length case', () => {
  expect(solve([1, 2, 3, 4])).toBe(4n);
});

test('large array case', () => {
  const arr = Array(100000).fill(1);
  expect(solve(arr)).toBe(0n);
});

test('corner case - all same except one', () => {
  expect(solve([1, 1, 10, 1])).toBe(9n);
});

test('edge case - alternating values', () => {
  expect(solve([1, 10, 1, 10, 1])).toBe(18n);
});

test('generic case 1', () => {
  expect(solve([4, 2, 8, 6, 3])).toBe(8n);
});

test('generic case 2', () => {
  expect(solve([7, 3, 5, 2, 1, 8])).toBe(11n);
});

test('tricky case - descending order', () => {
  expect(solve([10, 8, 6, 4, 2])).toBe(8n);
});

test('random valid case', () => {
  expect(solve([3, 7, 2, 9, 4, 6])).toBe(11n);
});