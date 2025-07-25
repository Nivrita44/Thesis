import { solve } from '../../solutions-algorithm/38.js';

test('returns n when n and y are equal (small number)', () => {
  expect(solve("1", "1")).toBe("1");
});

test('returns "1" when n and y are different small numbers (1 vs 2)', () => {
  expect(solve("1", "2")).toBe("1");
});

test('returns n when n and y are equal large numbers', () => {
  expect(
    solve(
      "61803398874989484820458683436563811772030917980576",
      "61803398874989484820458683436563811772030917980576"
    )
  ).toBe("61803398874989484820458683436563811772030917980576");
});

test('returns "1" when n and y are different small and large', () => {
  expect(solve("1", "100")).toBe("1");
});

test('returns "1" when n and y are different large numbers', () => {
  expect(solve("100", "100000")).toBe("1");
});

test('returns "1" when n and y are different random large integers', () => {
  expect(solve("12345", "67890123456789123457")).toBe("1");
});

test('returns n when both inputs are empty strings', () => {
  expect(solve("", "")).toBe("");
});

test('returns "1" when n is empty and y is not', () => {
  expect(solve("", "a")).toBe("1");
});

test('returns "1" when y is empty and n is not', () => {
  expect(solve("a", "")).toBe("1");
});

test('returns n when n and y are the same random string', () => {
  expect(solve("abcdef", "abcdef")).toBe("abcdef");
});

test('returns "1" when n and y are different random strings', () => {
  expect(solve("abcdef", "ghijkl")).toBe("1");
});

test('returns "1" when n is a number string and y is a completely different string', () => {
  expect(solve("42", "hello")).toBe("1");
});