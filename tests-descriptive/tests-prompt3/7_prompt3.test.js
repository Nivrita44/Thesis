import { solve } from '../../solutions-descriptive/7.js';

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

test('n = 3, star tree', () => {
  const input = [
    '3',
    '1 2',
    '1 3'
  ]
  expect(solve(input)).toBe('2')
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

test('n = 4, star', () => {
  const input = [
    '4',
    '1 2',
    '1 3',
    '1 4'
  ]
  expect(solve(input)).toBe('6')
})

test('n = 4, unbalanced', () => {
  const input = [
    '4',
    '1 2',
    '2 3',
    '2 4'
  ]
  expect(solve(input)).toBe('2')
})

test('n = 5, balanced binary tree', () => {
  const input = [
    '5',
    '1 2',
    '1 3',
    '2 4',
    '2 5'
  ]
  expect(solve(input)).toBe('8')
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

test('n = 7, perfect binary tree', () => {
  const input = [
    '7',
    '1 2',
    '1 3',
    '2 4',
    '2 5',
    '3 6',
    '3 7'
  ]
  expect(solve(input)).toBe('24')
})

test('star tree, n=10', () => {
  const input = [
    '10',
    '1 2',
    '1 3',
    '1 4',
    '1 5',
    '1 6',
    '1 7',
    '1 8',
    '1 9',
    '1 10'
  ]
  expect(solve(input)).toBe('72')
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

test('two branches from root', () => {
  const input = [
    '5',
    '1 2',
    '1 3',
    '3 4',
    '3 5'
  ]
  expect(solve(input)).toBe('6')
})

test('a bushy tree, 6 nodes', () => {
  const input = [
    '6',
    '1 2',
    '1 3',
    '2 4',
    '2 5',
    '3 6'
  ]
  expect(solve(input)).toBe('8')
})

test('large chain n=1000', () => {
  const input = ['1000']
  for (let i = 2; i <= 1000; ++i) input.push(`${i - 1} ${i}`)
  expect(solve(input)).toBe('0')
})

test('large star n=1000', () => {
  const input = ['1000']
  for (let i = 2; i <= 1000; ++i) input.push(`1 ${i}`)
  expect(solve(input)).toBe('499500')
})




// √ n = 1 (single node) (2 ms)
//   √ n = 2 (root and one child)
//   √ n = 3, chain tree
//   × n = 3, star tree (4 ms)
//   √ n = 4, chain (1 ms)
//   × n = 4, star (8 ms)
//   × n = 4, unbalanced (1 ms)
//   × n = 5, balanced binary tree (1 ms)
//   √ n = 5, degenerate chain
//   √ n = 6, more children
//   × n = 7, perfect binary tree
//   × star tree, n=10 (1 ms)
//   √ chain tree, n=10
//   × two branches from root
//   × a bushy tree, 6 nodes (1 ms)
//   √ large chain n=1000 (9 ms)
//   × large star n=1000 (9 ms)
