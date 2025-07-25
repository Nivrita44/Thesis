import { solve } from '../../solutions-algorithm/29.js';

test('basic 1234', () => {
  expect(solve(['1234'])).toEqual([4]);
});

test('basic 0000', () => {
  expect(solve(['0000'])).toEqual([18]);
});

test('four different digits increasing', () => {
  expect(solve(['1357'])).toEqual([12]);
});

test('maximum moves right', () => {
  expect(solve(['6789'])).toEqual([24]);
});

test('maximum moves with wrap around to 0', () => {
  expect(solve(['1230'])).toEqual([13]);
});

test('all same digits 1', () => {
  expect(solve(['1111'])).toEqual([4]);
});

test('pin ends in zero', () => {
  expect(solve(['1110'])).toEqual([13]);
});

test('digits at both ends', () => {
  expect(solve(['1901'])).toEqual([36]);
});

test('pin with decreasing order', () => {
  expect(solve(['4321'])).toEqual([10]);
});

test('pin with back and forth', () => {
  expect(solve(['1212'])).toEqual([8]);
});

test('alternating 0 and 1', () => {
  expect(solve(['0101'])).toEqual([18]);
});

test('multi test cases', () => {
  expect(solve(['1234','0999','8888','1000'])).toEqual([4,22,28,22]);
});

test('pin is all 9s', () => {
  expect(solve(['9999'])).toEqual([36]);
});

test('pin is mixed with middle digits', () => {
  expect(solve(['3456'])).toEqual([8]);
});