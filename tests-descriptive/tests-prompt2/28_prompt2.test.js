import { solve } from '../../solutions-descriptive/28.js'

test('x and y are equal', () => {
  expect(solve(10n, 10n)).toBe(0n)
})

test('x and y differ by one', () => {
  expect(solve(2n, 3n)).toBe(1n)
})

test('x is ancestor of y', () => {
  expect(solve(2n, 8n)).toBe(6n)
})

test('y is ancestor of x', () => {
  expect(solve(16n, 4n)).toBe(12n)
})

test('both are zero', () => {
  expect(solve(0n, 0n)).toBe(0n)
})

test('one is zero, one is positive', () => {
  expect(solve(0n, 15n)).toBe(15n)
  expect(solve(31n, 0n)).toBe(31n)
})

test('large distinct numbers', () => {
  expect(typeof solve(1024n, 2048n)).toBe('bigint')
  expect(typeof solve(123456789n, 987654321n)).toBe('bigint')
})

test('same power of two', () => {
  expect(solve(16n, 16n)).toBe(0n)
})

test('different power of two', () => {
  expect(solve(8n, 16n)).toBe(8n)
})

test('swapped larger and smaller', () => {
  expect(solve(1n, 1024n)).toBe(1023n)
  expect(solve(1024n, 1n)).toBe(1023n)
})

test('x and y both maximum', () => {
  expect(typeof solve(2n**60n, 2n**60n)).toBe('bigint')
})

test('x and y both minimum edge', () => {
  expect(solve(1n, 1n)).toBe(0n)
})

test('difference is a single bit', () => {
  expect(solve(7n, 15n)).toBe(8n)
  expect(solve(21n, 23n)).toBe(2n)
})