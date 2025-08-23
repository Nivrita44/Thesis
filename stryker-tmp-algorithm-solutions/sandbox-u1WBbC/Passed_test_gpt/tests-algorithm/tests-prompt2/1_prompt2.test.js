// @ts-nocheck
import { solve } from '../../../solutions-algorithm/1.js';

test('sorts expression with descending numbers', () => {
  expect(solve("3+2+1")).toBe("1+2+3");
});

test('sorts expression with repeated numbers', () => {
  expect(solve("1+1+3+1+3")).toBe("1+1+1+3+3");
});

test('handles single number input', () => {
  expect(solve("2")).toBe("2");
});

test('handles already sorted input', () => {
  expect(solve("1+2+3")).toBe("1+2+3");
});

test('handles two numbers, unsorted', () => {
  expect(solve("2+1")).toBe("1+2");
});

test('handles two equal numbers', () => {
  expect(solve("2+2")).toBe("2+2");
});

test('handles all numbers the same', () => {
  expect(solve("5+5+5+5")).toBe("5+5+5+5");
});

test('handles input with a large number of numbers', () => {
  expect(solve("10+1+9+2+8+3+7+4+6+5")).toBe("1+2+3+4+5+6+7+8+9+10");
});

test('handles already sorted descending input', () => {
  expect(solve("5+4+3+2+1")).toBe("1+2+3+4+5");
});

test('handles input with zero', () => {
  expect(solve("0+2+1")).toBe("0+1+2");
});

test('handles input with more than one digit numbers', () => {
  expect(solve("12+5+7+1")).toBe("1+5+7+12");
});