import { solve } from '../../solutions-descriptive/50.js';

test('single element array', () => {
  expect(solve([5])).toBe(1);
});

test('two coprime numbers', () => {
  expect(solve([3, 5])).toBe(2);
});

test('two equal numbers', () => {
  expect(solve([4, 4])).toBe(1);
});

test('numbers with same LCM as element', () => {
  expect(solve([4, 6, 12])).toBe(2);
});

test('numbers with no element equal to LCM', () => {
  expect(solve([2, 3, 5])).toBe(3);
});

test('two numbers, one divides the other', () => {
  expect(solve([6, 12])).toBe(1);
});

test('LCM greater than 1e9', () => {
  expect(solve([1e6, 1e6+1, 1e6+2, 1e6+3, 1e6+4, 1e6+5, 1e6+6, 1e6+7, 1e6+8])).toBe(9);
});

test('all ones', () => {
  expect(solve([1, 1, 1])).toBe(1);
});

test('includes one, which does not change LCM', () => {
  expect(solve([1, 2, 3])).toBe(3);
});

test('three numbers, LCM is present', () => {
  expect(solve([2, 4, 8])).toBe(1);
});

test('three numbers, LCM not present', () => {
  expect(solve([2, 6, 8])).toBe(3);
});

test('array containing 1 and large coprime', () => {
  expect(solve([1, 999983])).toBe(2);
});

test('mixed multiples', () => {
  expect(solve([4, 6, 9])).toBe(3);
});

test('array with repeated elements, LCM present', () => {
  expect(solve([2, 2, 4])).toBe(1);
});

test('array with repeated elements, LCM not present', () => {
  expect(solve([2, 2, 3])).toBe(3);
});

test('edge case all same, not 1', () => {
  expect(solve([7, 7, 7, 7])).toBe(1);
});

test('edge case, array includes its LCM', () => {
  expect(solve([2, 3, 6])).toBe(2);
});

test('edge case, array includes 1 and LCM', () => {
  expect(solve([1, 2, 6])).toBe(3);
});