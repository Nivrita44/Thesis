import { solve } from '../../../solutions-algorithm/19.js';

test('solves for x = 1', () => {
  expect(solve(1)).toBe(1);
});

test('solves for x = 2', () => {
  expect(solve(2)).toBe(1);
});

test('solves for x = 3', () => {
  expect(solve(3)).toBe(1);
});

test('solves for x = 4', () => {
  expect(solve(4)).toBe(1);
});

test('solves for x = 5', () => {
  expect(solve(5)).toBe(1);
});

test('solves for x = 6', () => {
  expect(solve(6)).toBe(2);
});

test('solves for x = 7', () => {
  expect(solve(7)).toBe(2);
});

test('solves for x = 8', () => {
  expect(solve(8)).toBe(2);
});

test('solves for x = 9', () => {
  expect(solve(9)).toBe(2);
});

test('solves for x = 10', () => {
  expect(solve(10)).toBe(2);
});

test('solves for x = 11', () => {
  expect(solve(11)).toBe(3);
});

test('solves for x = 15', () => {
  expect(solve(15)).toBe(3);
});

test('solves for x = 16', () => {
  expect(solve(16)).toBe(4);
});

test('solves for x = 20', () => {
  expect(solve(20)).toBe(4);
});

test('solves for x = 21', () => {
  expect(solve(21)).toBe(5);
});

test('solves for x = 25', () => {
  expect(solve(25)).toBe(5);
});

test('solves for x = 26', () => {
  expect(solve(26)).toBe(6);
});

test('solves for x = 999999', () => {
  expect(solve(999999)).toBe(Math.ceil(999999 / 5));
});

test('solves for x = 1000000', () => {
  expect(solve(1000000)).toBe(Math.ceil(1000000 / 5));
});
