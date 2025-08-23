// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/7.js';

test('n = 1 (single node)', () => {
  const input = ['1']
  expect(solve(input)).toBe('0')
})

test('n = 2 (root and one child)', () => {
  const input = [
    '2',
    '1 2'
  ]
  expect(solve(input)).toBe('0')
})

test('n = 3, chain tree', () => {
  const input = [
    '3',
    '1 2',
    '2 3'
  ]
  expect(solve(input)).toBe('0')
})

test('n = 4, chain', () => {
  const input = [
    '4',
    '1 2',
    '2 3',
    '3 4'
  ]
  expect(solve(input)).toBe('0')
})

test('n = 5, degenerate chain', () => {
  const input = [
    '5',
    '1 2',
    '2 3',
    '3 4',
    '4 5'
  ]
  expect(solve(input)).toBe('0')
})

test('n = 6, more children', () => {
  const input = [
    '6',
    '1 2',
    '1 3',
    '3 4',
    '3 5',
    '5 6'
  ]
  expect(solve(input)).toBe('6')
})

test('chain tree, n=10', () => {
  const input = [
    '10',
    '1 2',
    '2 3',
    '3 4',
    '4 5',
    '5 6',
    '6 7',
    '7 8',
    '8 9',
    '9 10'
  ]
  expect(solve(input)).toBe('0')
})

test('large chain n=1000', () => {
  const input = ['1000']
  for (let i = 2; i <= 1000; ++i) input.push(`${i - 1} ${i}`)
  expect(solve(input)).toBe('0')
})