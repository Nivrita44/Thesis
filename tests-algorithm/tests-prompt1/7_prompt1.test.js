import { solve } from '../../solutions-algorithm/7.js'

test('single hero card only', () => {
  expect(solve(1, [0])).toBe(0)
})

test('single bonus card only', () => {
  expect(solve(1, [5])).toBe(0)
})

test('hero then bonus', () => {
  expect(solve(2, [0, 5])).toBe(0)
})

test('bonus then hero', () => {
  expect(solve(2, [5, 0])).toBe(5)
})

test('bonus, bonus, hero', () => {
  expect(solve(3, [3, 7, 0])).toBe(7)
})

test('bonus, hero, hero', () => {
  expect(solve(3, [10, 0, 0])).toBe(10)
})

test('hero, bonus, hero', () => {
  expect(solve(3, [0, 10, 0])).toBe(10)
})

test('two bonuses, two heroes', () => {
  expect(solve(4, [4, 9, 0, 0])).toBe(13)
})

test('alternating hero and bonus', () => {
  expect(solve(4, [0, 5, 0, 6])).toBe(6)
})

test('all hero cards', () => {
  expect(solve(5, [0, 0, 0, 0, 0])).toBe(0)
})

test('all bonus cards', () => {
  expect(solve(5, [1, 2, 3, 4, 5])).toBe(0)
})

test('only one bonus, many heroes', () => {
  expect(solve(5, [7, 0, 0, 0, 0])).toBe(7)
})

test('hero at end, large numbers', () => {
  expect(solve(3, [1e9, 3, 0])).toBe(3)
})

test('heroes and bonuses mixed', () => {
  expect(solve(6, [1, 0, 2, 0, 3, 0])).toBe(6)
})

test('choose higher bonus for last hero', () => {
  expect(solve(4, [1, 8, 0, 0])).toBe(9)
})

test('bonus between two heroes', () => {
  expect(solve(4, [0, 5, 0, 6])).toBe(6)
})

test('multiple ways, choose optimal', () => {
  expect(solve(6, [5, 2, 0, 4, 0, 0])).toBe(11)
})

test('complex order, force discard', () => {
  expect(solve(6, [8, 0, 1, 0, 3, 0])).toBe(12)
})

test('all bonus at start, all hero at end', () => {
  expect(solve(7, [2, 8, 5, 7, 0, 0, 0])).toBe(20)
})

test('large numbers of cards', () => {
  const arr = Array(1000).fill(0).map((_, i) => (i % 2 === 0 ? 0 : 1e9));
  expect(solve(1000, arr)).toBe(500e9)
})