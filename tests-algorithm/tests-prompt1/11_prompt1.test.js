import { solve } from '../../solutions-algorithm/11.js'

test('sum of digits for 10', () => {
  expect(solve(10)).toBe(1)
})

test('sum of digits for 99', () => {
  expect(solve(99)).toBe(18)
})

test('sum of digits for typical value 23', () => {
  expect(solve(23)).toBe(5)
})

test('sum of digits for 55', () => {
  expect(solve(55)).toBe(10)
})

test('sum of digits for 70', () => {
  expect(solve(70)).toBe(7)
})

test('sum of digits for 47', () => {
  expect(solve(47)).toBe(11)
})