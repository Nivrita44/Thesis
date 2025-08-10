import { solve } from '../../../solutions-algorithm/50.js';

test('example case', () => {
  expect(solve('abbcb', 1, 5)).toBe(10n);
});

test('single character segment', () => {
  expect(solve('abc', 1, 1)).toBe(1n);
});

test('maximum length string', () => {
  expect(solve('zzzzzz', 1, 6)).toBe(156n);
});

test('minimum length string', () => {
  expect(solve('aaaaa', 1, 5)).toBe(5n);
});

test('mixed case with repeats', () => {
  expect(solve('abcabc', 2, 5)).toBe(10n);
});

test('single letter repeated', () => {
  expect(solve('bbbb', 1, 4)).toBe(8n);
});

test('whole alphabet sequence', () => {
  expect(solve('abcdefghijklmnopqrstuvwxyz', 1, 26)).toBe(351n);
});

test('partial segment', () => {
  expect(solve('helloworld', 3, 7)).toBe(24n);
});

test('alternating letters', () => {
  expect(solve('ababab', 2, 5)).toBe(9n);
});