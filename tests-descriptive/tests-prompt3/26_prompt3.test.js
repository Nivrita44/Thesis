import { solve } from '../../solutions-descriptive/26.js';

test('n = 1, s = "0"', () => {
  expect(solve(1, "0")).toBe(0);
});

test('n = 1, s = "1"', () => {
  expect(solve(1, "1")).toBe(1);
});

test('All zero string', () => {
  expect(solve(5, "00000")).toBe(10);
});

test('All one string', () => {
  expect(solve(4, "1111")).toBe(1);
});

test('Alternating start with 1', () => {
  expect(solve(6, "101010")).toBe(3);
});

test('Alternating start with 0', () => {
  expect(solve(6, "010101")).toBe(5);
});

test('Single one in middle', () => {
  expect(solve(5, "00100")).toBe(3);
});

test('Single zero in middle', () => {
  expect(solve(5, "11101")).toBe(2);
});

test('Two segments only', () => {
  expect(solve(4, "1100")).toBe(4);
});

test('Ends in 1', () => {
  expect(solve(5, "00001")).toBe(4);
});

test('Ends in 0', () => {
  expect(solve(5, "11110")).toBe(1);
});

test('Edge: only one 0 at start', () => {
  expect(solve(4, "0111")).toBe(2);
});

test('Edge: only one 0 at end', () => {
  expect(solve(4, "1110")).toBe(2);
});

test('Alternating 0s and 1s odd length', () => {
  expect(solve(5, "10101")).toBe(3);
});

test('Multiple segments', () => {
  expect(solve(8, "11100111")).toBe(4);
});

test('Long string, all zeros', () => {
  expect(solve(6, "000000")).toBe(15);
});

test('Long string, all ones', () => {
  expect(solve(6, "111111")).toBe(1);
});

test('Edge: n = 2, both zeros', () => {
  expect(solve(2, "00")).toBe(1);
});

test('Edge: n = 2, one 0, one 1', () => {
  expect(solve(2, "01")).toBe(2);
});

test('Random pattern', () => {
  expect(solve(7, "1100110")).toBe(4);
});