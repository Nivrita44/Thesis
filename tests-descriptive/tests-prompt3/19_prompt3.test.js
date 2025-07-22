import { solve } from '../../solutions-descriptive/19.js'

test('GCD base: solve(10, 5) should be 5', () => {
  expect(solve(10, 5)).toBe(5)
})

test('GCD symmetry: solve(5, 10) should be 5', () => {
  expect(solve(5, 10)).toBe(5)
})

test('GCD coprime: solve(5, 2) should be 1', () => {
  expect(solve(5, 2)).toBe(1)
})

test('GCD itself: solve(100, 100) should be 100', () => {
  expect(solve(100, 100)).toBe(100)
})

test('GCD minimal first parameter: solve(1, 1000000) should be 1', () => {
  expect(solve(1, 1000000)).toBe(1)
})

test('GCD minimal b: solve(1000000, 1) should be 1', () => {
  expect(solve(1000000, 1)).toBe(1)
})

test('GCD maximal input: solve(1000000, 1000000) should be 1000000', () => {
  expect(solve(1000000, 1000000)).toBe(1000000)
})

test('GCD one is zero: solve(0, 13) should be 13', () => {
  expect(solve(0, 13)).toBe(13)
})

test('GCD zero is one: solve(17, 0) should be 17', () => {
  expect(solve(17, 0)).toBe(17)
})

test('GCD both one: solve(1, 1) should be 1', () => {
  expect(solve(1, 1)).toBe(1)
})

test('GCD odd example: solve(33, 24) should be 3', () => {
  expect(solve(33, 24)).toBe(3)
})

test('GCD negatives: solve(-12, 18) should be 6', () => {
  expect(solve(-12, 18)).toBe(6)
})

test('GCD negatives: solve(12, -18) should be 6', () => {
  expect(solve(12, -18)).toBe(6)
})

test('GCD both negative: solve(-12, -18) should be 6', () => {
  expect(solve(-12, -18)).toBe(6)
})

test('GCD large coprime: solve(10**6, 10**6 - 1) should be 1', () => {
  expect(solve(1000000, 999999)).toBe(1)
})