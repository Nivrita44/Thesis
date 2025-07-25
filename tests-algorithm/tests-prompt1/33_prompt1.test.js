import { solve } from '../../solutions-algorithm/33.js';

test('simple 1-element array, can\'t expand', () => {
  expect(solve(1, [1])).toBe(1);
});

test('no positions satisfy property, cannot expand', () => {
  expect(solve(3, [3,2,3])).toBe(3);
});

test('all positions satisfy property, can expand repeatedly', () => {
  expect(solve(3, [3,2,1])).toBe(5);
});

test('input: 5 1 12 3 2 5', () => {
  expect(solve(5, [1,12,3,2,5])).toBe(5);
});

test('expansion only possible once', () => {
  expect(solve(4, [4,3,3,1])).toBe(4);
});

test('large input where solution can expand', () => {
  const arr = [5,4,3,2,1];
  expect(solve(5, arr)).toBe(9);
});

test('first value satisfies, can only add zeros once', () => {
  expect(solve(4, [4,2,2,1])).toBe(4);
});

test('value in middle allows only partial expansion', () => {
  expect(solve(3, [1,2,3])).toBe(3);
});

test('complex, two rounds of expansion possible', () => {
  expect(solve(3, [3,1,1])).toBe(4);
});

test('random, no operation possible', () => {
  expect(solve(6, [12,11,7,8,1,5])).toBe(6);
});

test('all elements are same but do not match the condition', () => {
  expect(solve(4, [10,10,10,10])).toBe(4);
});

test('array with alternating values, no position satisfies', () => {
  expect(solve(6, [6,1,5,2,4,3])).toBe(6);
});