import { solve } from '../../../solutions-algorithm/38.js';

test('returns a when a equals b (single number)', () => {
  expect(solve("1", "1")).toBe("1");
  expect(solve("100", "100")).toBe("100");
  expect(solve("123456789", "123456789")).toBe("123456789");
  expect(solve("61803398874989484820458683436563811772030917980576", "61803398874989484820458683436563811772030917980576")).toBe("61803398874989484820458683436563811772030917980576");
  expect(solve("9999999999999999999999999999999999999999", "9999999999999999999999999999999999999999")).toBe("9999999999999999999999999999999999999999");
});

test('returns "1" when a != b (range has more than one number)', () => {
  expect(solve("1", "2")).toBe("1");
  expect(solve("100", "101")).toBe("1");
  expect(solve("1", "100")).toBe("1");
  expect(solve("100", "100000")).toBe("1");
  expect(solve("12345", "67890123456789123457")).toBe("1");
  expect(solve("999999999999999999999999", "1000000000000000000000000")).toBe("1");
  expect(solve("9007199254740992", "9007199254740993")).toBe("1");
  expect(solve("100000000000000000000000000000", "100000000000000000000000000001")).toBe("1");
});

test('works on smallest and largest possible numbers', () => {
  expect(solve("1", "10")).toBe("1");
  expect(solve("1", "10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")).toBe("1");
  expect(solve("9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999", "10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")).toBe("1");
});

test('input order (a <= b always, but test stability for a == b and same string)', () => {
  expect(solve("42", "42")).toBe("42");
  expect(solve("11", "11")).toBe("11");
  expect(solve("1010101010101010", "1010101010101010")).toBe("1010101010101010");
});

test('does not treat numbers as numeric type but as strings', () => {
  expect(solve("0001", "0001")).toBe("0001");
  expect(solve("00000023", "00000024")).toBe("1");
});