// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/7.js';

test('all bonus cards, no hero', () => {
  expect(solve(5, [1, 2, 3, 4, 5])).toBe(0);
});

test('all hero cards, no bonuses', () => {
  expect(solve(4, [0, 0, 0, 0])).toBe(0);
});

test('interleaved cards - sample 1', () => {
  expect(solve(5, [3, 3, 3, 0, 0])).toBe(6);
});

test('hero at start', () => {
  expect(solve(6, [0, 3, 3, 0, 0, 3])).toBe(6);
});

test('multiple bonuses before hero', () => {
  expect(solve(7, [1, 2, 3, 0, 4, 5, 0])).toBe(8);
});

test('non-increasing bonus then hero', () => {
  expect(solve(7, [1, 2, 5, 0, 4, 3, 0])).toBe(9);
});

test('heroes in a row, bonus at end', () => {
  expect(solve(5, [3, 1, 0, 0, 4])).toBe(4);
});

test('no bonus when hero appears', () => {
  expect(solve(3, [0, 1, 0])).toBe(1);
});

test('long deck, alternating', () => {
  expect(solve(10, [9, 0, 8, 0, 7, 0, 6, 0, 5, 0])).toBe(35);
});

test('all large bonuses then heroes', () => {
  expect(solve(6, [1000000000, 999999999, 888888888, 0, 0, 0])).toBe(2888888887);
});

test('single hero card at start', () => {
  expect(solve(1, [0])).toBe(0);
});

test('single bonus card', () => {
  expect(solve(1, [42])).toBe(0);
});

test('hero with empty bonus deck, then bonus and hero', () => {
  expect(solve(3, [0, 2, 0])).toBe(2);
});

test('multiple bonuses before multiple heroes', () => {
  expect(solve(6, [5, 3, 2, 0, 0, 0])).toBe(10);
});

test('discard bonuses, heroes far apart', () => {
  expect(solve(7, [2, 0, 2, 0, 2, 0, 2])).toBe(6);
});

test('minimum input size, hero', () => {
  expect(solve(1, [0])).toBe(0);
});

test('minimum input size, bonus', () => {
  expect(solve(1, [1])).toBe(0);
});

test('hero comes after all bonuses', () => {
  expect(solve(4, [4, 5, 0, 0])).toBe(5);
});

test('bonuses after all heroes', () => {
  expect(solve(4, [0, 0, 4, 5])).toBe(0);
});

test('alternating single hero and bonus', () => {
  expect(solve(4, [1, 0, 2, 0])).toBe(3);
});
