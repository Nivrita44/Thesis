import { solve } from '../../solutions-descriptive/16.js'

test('Single letter A, allowed once', () => {
  expect(solve('A', 1, 0, 0, 0)).toBe('YES')
})

test('Single letter B, allowed once', () => {
  expect(solve('B', 0, 1, 0, 0)).toBe('YES')
})

test('Single letter A, not allowed', () => {
  expect(solve('A', 0, 0, 0, 0)).toBe('NO')
})

test('String of all As, enough a but no ab/ba', () => {
  expect(solve('AAA', 3, 0, 0, 0)).toBe('YES')
})

test('String all Bs, enough b but no ab/ba', () => {
  expect(solve('BBBB', 0, 4, 0, 0)).toBe('YES')
})

test('Alternating AB, both ab and ba allowed', () => {
  expect(solve('ABAB', 0, 0, 2, 1)).toBe('YES')
})

test('Alternating BA, insufficient ab', () => {
  expect(solve('BABA', 0, 0, 0, 3)).toBe('YES')
})

test('Alternating ABAB, insufficient ab/ba', () => {
  expect(solve('ABAB', 0, 0, 1, 0)).toBe('NO')
})

test('Double "A" forbidden', () => {
  expect(solve('AA', 2, 0, 0, 0)).toBe('NO')
})

test('Double "B" forbidden', () => {
  expect(solve('BB', 0, 2, 0, 0)).toBe('NO')
})

test('String with both types, full split', () => {
  expect(solve('AAABBB', 3, 3, 0, 0)).toBe('YES')
})

test('Requires AB and BA splits', () => {
  expect(solve('ABBA', 0, 0, 1, 1)).toBe('YES')
})

test('Large number of As, insufficient a', () => {
  expect(solve('AAAAA', 4, 0, 0, 0)).toBe('NO')
})

test('Minimum requirements for AB', () => {
  expect(solve('AB', 0, 0, 1, 0)).toBe('YES')
})

test('Minimum requirements for BA', () => {
  expect(solve('BA', 0, 0, 0, 1)).toBe('YES')
})

test('Odd alternating, just enough ab and ba', () => {
  expect(solve('ABABA', 0, 0, 2, 2)).toBe('YES')
})

test('Odd alternating, not enough ab and ba', () => {
  expect(solve('ABABA', 0, 0, 1, 1)).toBe('NO')
})

test('No blocks allowed', () => {
  expect(solve('ABAB', 0, 0, 0, 0)).toBe('NO')
})

test('Only ab blocks allowed, ab insufficient', () => {
  expect(solve('ABABAB', 0, 0, 2, 0)).toBe('NO')
})

test('Zero-length string, always allowed', () => {
  expect(solve('', 0, 0, 0, 0)).toBe('YES')
})

test('Only singles allowed for mixed s', () => {
  expect(solve('AABB', 2, 2, 0, 0)).toBe('YES')
})

test('Cannot split to match limits', () => {
  expect(solve('ABBAAB', 0, 0, 1, 1)).toBe('NO')
})

test('Long block of AB, strict limits', () => {
  expect(solve('ABABABAB', 0, 0, 4, 0)).toBe('YES')
})

test('Long block of BA, strict limits', () => {
  expect(solve('BABABABA', 0, 0, 0, 4)).toBe('YES')
})

test('Long string, too few blocks', () => {
  expect(solve('AABBAABB', 2, 2, 0, 0)).toBe('NO')
})