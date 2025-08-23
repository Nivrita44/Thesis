// @ts-nocheck
import { solve } from '../../../solutions-descriptive/1.js';

describe('solve function tests', () => {
  test('basic case with small numbers', () => {
    expect(solve(4, 6, 3)).toBe(2);
  });

  test('impossible transformation due to factor ratio', () => {
    expect(solve(4, 5, 3)).toBe(-1);
  });

  test('impossible with restrictive factor ratio', () => {
    expect(solve(4, 6, 2)).toBe(-1);
  });

  test('medium sized numbers with multiple steps', () => {
    expect(solve(10, 45, 3)).toBe(3);
  });

  test('larger numbers with coprime relationship', () => {
    expect(solve(780, 23, 42)).toBe(3);
  });

  test('one number is 1', () => {
    expect(solve(1, 982800, 13)).toBe(6);
  });

  test('very small numbers with impossible ratio', () => {
    expect(solve(1, 6, 2)).toBe(-1);
  });

  test('equal numbers', () => {
    expect(solve(100, 100, 5)).toBe(0);
  });

  test('large disparity between numbers', () => {
    expect(solve(2, 1000000, 10)).toBe(6);
  });
});
