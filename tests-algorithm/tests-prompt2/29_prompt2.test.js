import { solve } from '../../solutions-algorithm/29.js';

test('single pin, ascending digits', () => {
  expect(solve(['1234'])).toEqual([10]);
});

test('single pin, all zeros', () => {
  expect(solve(['0000'])).toEqual([37]);
});

test('single pin, all nines', () => {
  expect(solve(['9999'])).toEqual([40]);
});

test('single pin, all same digits other than 0 or 9', () => {
  expect(solve(['4444'])).toEqual([16]);
});

test('single pin, alternate digits', () => {
  expect(solve(['1010'])).toEqual([41]);
});

test('single pin, descending digits', () => {
  expect(solve(['4321'])).toEqual([14]);
});

test('multiple pins', () => {
  expect(solve(['1234', '0000', '9999', '1010'])).toEqual([10, 37, 40, 41]);
});

test('empty string pin', () => {
  expect(solve([''])).toEqual([4]);
});

test('multiple pins with mixed types', () => {
  expect(solve(['', '1', '0', '9'])).toEqual([4, 4, 13, 12]);
});

test('very long pin', () => {
  expect(solve(['1234567890'])).toEqual([49]);
});

test('single digit pin', () => {
  expect(solve(['5'])).toEqual([4]);
});

test('mixed digits', () => {
  expect(solve(['9081726354'])).toEqual([86]);
});