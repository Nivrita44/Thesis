import { solve } from '../../solutions-descriptive/31.js'

test('n=1, m=2', () => {
  expect(solve(1,2)).toBe(1)
})

test('n=2, m=2', () => {
  expect(solve(2,2)).toBe(2)
})

test('n=1, m=4', () => {
  expect(solve(1,4)).toBe(6)
})

test('n=2, m=4', () => {
  expect(solve(2,4)).toBe(20)
})

test('n=3, m=2', () => {
  expect(solve(3,2)).toBe(6)
})

test('n=3, m=4', () => {
  expect(solve(3,4)).toBe(180)
})

test('n=10, m=2', () => {
  expect(solve(10,2)).toBe(252)
})

test('n=2, m=6', () => {
  expect(solve(2,6)).toBe(252)
})

test('n=1, m=500', () => {
  expect(solve(1,500)).toBe(795837920)
})

test('n=500, m=2', () => {
  expect(solve(500,2)).toBe(99999877)
})