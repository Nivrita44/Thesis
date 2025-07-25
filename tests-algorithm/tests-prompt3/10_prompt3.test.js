import { solve } from '../../solutions-algorithm/10.js';

test('n = 5009', () => {
  const result = solve(5009);
  expect(result.count).toBe(2);
  expect(result.parts.sort((a, b) => a - b)).toEqual([9, 5000]);
});

test('n = 7', () => {
  const result = solve(7);
  expect(result.count).toBe(1);
  expect(result.parts).toEqual([7]);
});

test('n = 9876', () => {
  const result = solve(9876);
  expect(result.count).toBe(4);
  expect(result.parts.sort((a, b) => a - b)).toEqual([6, 70, 800, 9000]);
});

test('n = 10000', () => {
  const result = solve(10000);
  expect(result.count).toBe(1);
  expect(result.parts).toEqual([10000]);
});

test('n = 10', () => {
  const result = solve(10);
  expect(result.count).toBe(1);
  expect(result.parts).toEqual([10]);
});

test('n = 110', () => {
  const result = solve(110);
  expect(result.count).toBe(2);
  expect(result.parts.sort((a, b) => a - b)).toEqual([10, 100]);
});

test('n = 101', () => {
  const result = solve(101);
  expect(result.count).toBe(2);
  expect(result.parts.sort((a, b) => a - b)).toEqual([1, 100]);
});

test('n = 90', () => {
  const result = solve(90);
  expect(result.count).toBe(1);
  expect(result.parts).toEqual([90]);
});

test('n = 4000', () => {
  const result = solve(4000);
  expect(result.count).toBe(1);
  expect(result.parts).toEqual([4000]);
});

test('n = 1', () => {
  const result = solve(1);
  expect(result.count).toBe(1);
  expect(result.parts).toEqual([1]);
});

test('n = 1234', () => {
  const result = solve(1234);
  expect(result.count).toBe(4);
  expect(result.parts.sort((a, b) => a - b)).toEqual([4, 30, 200, 1000]);
});

test('n = 9999', () => {
  const result = solve(9999);
  expect(result.count).toBe(4);
  expect(result.parts.sort((a, b) => a - b)).toEqual([9, 90, 900, 9000]);
});

test('n = 1001', () => {
  const result = solve(1001);
  expect(result.count).toBe(2);
  expect(result.parts.sort((a, b) => a - b)).toEqual([1, 1000]);
});

test('n = 10^4', () => {
  const result = solve(10000);
  expect(result.count).toBe(1);
  expect(result.parts).toEqual([10000]);
});

test('n = 100', () => {
  const result = solve(100);
  expect(result.count).toBe(1);
  expect(result.parts).toEqual([100]);
});

test('n = 707', () => {
  const result = solve(707);
  expect(result.count).toBe(2);
  expect(result.parts.sort((a, b) => a - b)).toEqual([7, 700]);
});

test('n = 222', () => {
  const result = solve(222);
  expect(result.count).toBe(3);
  expect(result.parts.sort((a, b) => a - b)).toEqual([2, 20, 200]);
});

test('n = 9', () => {
  const result = solve(9);
  expect(result.count).toBe(1);
  expect(result.parts).toEqual([9]);
});