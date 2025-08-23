// @ts-nocheck
import { solve } from '../../../solutions-algorithm/19.js'

test('x = 1 (minimum boundary)', () => {
  expect(solve(1)).toBe(1)
})

test('x = 2', () => {
  expect(solve(2)).toBe(1)
})

test('x = 3', () => {
  expect(solve(3)).toBe(1)
})

test('x = 4', () => {
  expect(solve(4)).toBe(1)
})

test('x = 5 (exact step)', () => {
  expect(solve(5)).toBe(1)
})

test('x = 6', () => {
  expect(solve(6)).toBe(2)
})

test('x = 9', () => {
  expect(solve(9)).toBe(2)
})

test('x = 10', () => {
  expect(solve(10)).toBe(2)
})

test('x = 11', () => {
  expect(solve(11)).toBe(3)
})

test('x = 12', () => {
  expect(solve(12)).toBe(3)
})

test('x just below a multiple of 5', () => {
  expect(solve(14)).toBe(3)
})

test('x = 15 (exact multiple of 5)', () => {
  expect(solve(15)).toBe(3)
})

test('x = 16', () => {
  expect(solve(16)).toBe(4)
})

test('x just above a multiple of 5', () => {
  expect(solve(21)).toBe(5)
})

test('x = 20 (multiple of 5)', () => {
  expect(solve(20)).toBe(4)
})

test('x = 999999 (large, not multiple of 5)', () => {
  expect(solve(999999)).toBe(200000)
})

test('x = 1000000 (maximum boundary, multiple of 5)', () => {
  expect(solve(1000000)).toBe(200000)
})

