import { solve } from '../../solutions-algorithm/22.js';

test('n = 1', () => {
  expect(solve(1)).toBe('First');
});

test('n = 2', () => {
  expect(solve(2)).toBe('First');
});

test('n = 3', () => {
  expect(solve(3)).toBe('First');
});

test('n = 4', () => {
  expect(solve(4)).toBe('First');
});

test('n = 5', () => {
  expect(solve(5)).toBe('First');
});

test('n = 6', () => {
  expect(solve(6)).toBe('First');
});

test('n = 9', () => {
  expect(solve(9)).toBe('First');
});

test('n = 7', () => {
  expect(solve(7)).toBe('First');
});

test('n = 8', () => {
  expect(solve(8)).toBe('First');
});

test('n = 10', () => {
  expect(solve(10)).toBe('First');
});

test('n = 11', () => {
  expect(solve(11)).toBe('Second');
});

test('n = 12', () => {
  expect(solve(12)).toBe('First');
});

test('n = 15', () => {
  expect(solve(15)).toBe('First');
});

test('n = 20', () => {
  expect(solve(20)).toBe('Second');
});

test('n = 27', () => {
  expect(solve(27)).toBe('First');
});

test('n = 30', () => {
  expect(solve(30)).toBe('First');
});

test('n = 100', () => {
  expect(solve(100)).toBe('Second');
});

test('n = 999', () => {
  expect(solve(999)).toBe('First');
});

test('n = 1000', () => {
  expect(solve(1000)).toBe('Second');
});