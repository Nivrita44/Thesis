import { solve } from '../../solutions-algorithm/17.js';

test('n=2', () => {
  expect(solve(2)).toBe(2);
});

test('n=3', () => {
  expect(solve(3)).toBe(2);
});

test('n=4', () => {
  expect(solve(4)).toBe(3);
});

test('n=5', () => {
  expect(solve(5)).toBe(3);
});

test('n=6', () => {
  expect(solve(6)).toBe(4);
});

test('n=7', () => {
  expect(solve(7)).toBe(4);
});

test('n=8', () => {
  expect(solve(8)).toBe(5);
});

test('n=10', () => {
  expect(solve(10)).toBe(6);
});

test('n=12', () => {
  expect(solve(12)).toBe(7);
});

test('n=15', () => {
  expect(solve(15)).toBe(8);
});

test('n=20', () => {
  expect(solve(20)).toBe(11);
});

test('n=25', () => {
  expect(solve(25)).toBe(13);
});

test('n=30', () => {
  expect(solve(30)).toBe(16);
});

test('n=50', () => {
  expect(solve(50)).toBe(26);
});

test('n=100', () => {
  expect(solve(100)).toBe(51);
});