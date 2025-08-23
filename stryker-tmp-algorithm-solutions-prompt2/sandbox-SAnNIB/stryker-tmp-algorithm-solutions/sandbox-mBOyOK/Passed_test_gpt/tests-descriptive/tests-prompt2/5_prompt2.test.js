// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/5.js';

test('returns ["!"] when input is 81', () => {
  expect(solve(81)).toEqual(["!"]);
});

test('returns correct steps when input is greater than 81', () => {
  expect(solve(100)).toEqual(["add 19", "!"]);
});

test('returns correct steps when input is less than 81', () => {
  expect(solve(60)).toEqual(["add -21", "!"]);
});

test('returns correct steps for input 0', () => {
  expect(solve(0)).toEqual(["add -81", "!"]);
});

test('returns correct steps for input -50', () => {
  expect(solve(-50)).toEqual(["add -131", "!"]);
});

test('returns correct steps for large input', () => {
  expect(solve(5000)).toEqual(["add 4919", "!"]);
});

test('returns correct steps for small negative input', () => {
  expect(solve(-100)).toEqual(["add -181", "!"]);
});