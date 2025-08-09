import { solve } from '../../solutions-algorithm/29.js'

test('example case "1234"', () => {
  expect(solve('1234')).toBe(7n);
});

test('same digit repeated "1111"', () => {
  expect(solve('1111')).toBe(4n);
});

test('alternating far digits "1919"', () => {
  expect(solve('1919')).toBe(16n);
});

test('all zeros "0000"', () => {
  expect(solve('0000')).toBe(12n);
});

test('maximum moves required "0509"', () => {
  expect(solve('0509')).toBe(18n);
});

test('regular sequence "5678"', () => {
  expect(solve('5678')).toBe(7n);
});

test('mixed digits "4206"', () => {
  expect(solve('4206')).toBe(11n);
});

test('wrap around case "9012"', () => {
  expect(solve('9012')).toBe(11n);
});