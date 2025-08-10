import { solve } from '../../../solutions-algorithm/36.js'

test('typical case: add two numbers', () => {
  expect(solve("11", "123")).toBe("134")
})

test('adding with carry over', () => {
  expect(solve("456", "77")).toBe("533")
})

test('adding two large numbers', () => {
  expect(solve("999", "999")).toBe("1998")
})

test('adding zero to a number', () => {
  expect(solve("0", "1234")).toBe("1234")
  expect(solve("5678", "0")).toBe("5678")
})

test('adding two single digit numbers', () => {
  expect(solve("5", "3")).toBe("8")
})

test('numbers with different lengths', () => {
  expect(solve("1", "9999")).toBe("10000")
})

test('very large numbers', () => {
  expect(solve("12345678901234567890", "98765432109876543210")).toBe("111111111011111111100")
})

test('both numbers are zero', () => {
  expect(solve("0", "0")).toBe("0")
})

test('leading zeros in input', () => {
  expect(solve("00012", "0008")).toBe("20")
  expect(solve("00000", "00000")).toBe("0")
})

test('empty string input', () => {
  expect(solve("", "5")).toBe("5")
  expect(solve("5", "")).toBe("5")
  expect(solve("", "")).toBe("0")
})
