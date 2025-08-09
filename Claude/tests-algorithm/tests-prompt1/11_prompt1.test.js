import { solve } from '../../solutions-algorithm/11.js'

test('example case - sum digits of 47', () => {
  expect(solve(47n)).toBe(11n);
});

test('edge case - sum digits of 99', () => {
  expect(solve(99n)).toBe(18n);
});

test('lower bound case - sum digits of 10', () => {
  expect(solve(10n)).toBe(1n);
});

test('number with zero - sum digits of 50', () => {
  expect(solve(50n)).toBe(5n);
});

test('repeated digits - sum digits of 22', () => {
  expect(solve(22n)).toBe(4n);
});

test('random case 1 - sum digits of 75', () => {
  expect(solve(75n)).toBe(12n);
});

test('random case 2 - sum digits of 31', () => {
  expect(solve(31n)).toBe(4n);
});

test('typical case - sum digits of 85', () => {
  expect(solve(85n)).toBe(13n);
});