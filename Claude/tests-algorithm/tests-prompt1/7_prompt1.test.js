import { solve } from '../../../solutions-algorithm/7.js'

test('example case with hero and bonus cards', () => {
  expect(solve([0, 4, 0, 3, 0])).toBe(7n);
});

test('all hero cards', () => {
  expect(solve([0, 0, 0, 0])).toBe(0n);
});

test('all bonus cards', () => {
  expect(solve([1, 2, 3, 4, 5])).toBe(0n);
});

test('single hero card', () => {
  expect(solve([0])).toBe(0n);
});

test('alternating hero and bonus cards', () => {
  expect(solve([5, 0, 4, 0, 3, 0])).toBe(12n);
});

test('multiple bonus cards before hero', () => {
  expect(solve([3, 4, 5, 0, 2, 0])).toBe(7n);
});

test('large bonus values', () => {
  expect(solve([1000000000, 0, 999999999, 0])).toBe(1999999999n);
});

test('single bonus followed by hero', () => {
  expect(solve([5, 0])).toBe(5n);
});