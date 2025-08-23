// @ts-nocheck
import { solve } from '../../../solutions-algorithm/28.js'

test('basic non-blocking Manhattan path', () => {
  const input = [
    { x: [1, 1], y: [3, 3], f: [2, 2] }
  ]
  expect(solve(input)).toEqual([4])
})

test('vertical path blocked, F between start and finish', () => {
  const input = [
    { x: [2, 5], y: [2, 1], f: [2, 3] }
  ]
  expect(solve(input)).toEqual([6])
})

test('vertical path not blocked (F not between)', () => {
  const input = [
    { x: [1000, 42], y: [1000, 1], f: [1000, 1000] }
  ]
  expect(solve(input)).toEqual([41])
})

test('horizontal path blocked, F between start and finish', () => {
  const input = [
    { x: [1, 10], y: [3, 10], f: [2, 10] }
  ]
  expect(solve(input)).toEqual([4])
})

test('horizontal path NOT blocked (F not between)', () => {
  const input = [
    { x: [3, 8], y: [7, 8], f: [3, 7] }
  ]
  expect(solve(input)).toEqual([4])
})

test('horizontal path, F not blocking, left of path', () => {
  const input = [
    { x: [2, 1], y: [4, 1], f: [1, 1] }
  ]
  expect(solve(input)).toEqual([2])
})

test('vertical path, F below both ends', () => {
  const input = [
    { x: [1, 344], y: [1, 10], f: [1, 1] }
  ]
  expect(solve(input)).toEqual([334])
})

test('F is colinear but not between', () => {
  const input = [
    { x: [5, 5], y: [5, 7], f: [5, 1] }
  ]
  expect(solve(input)).toEqual([2])
})

test('A and B close, F not on path', () => {
  const input = [
    { x: [10, 10], y: [10, 11], f: [11, 10] }
  ]
  expect(solve(input)).toEqual([1])
})

test('A and B far apart diagonally, F not relevant', () => {
  const input = [
    { x: [1, 1], y: [1000, 1000], f: [500, 500] }
  ]
  expect(solve(input)).toEqual([1998])
})

test('horizontal path blocked (F between, colinear y)', () => {
  const input = [
    { x: [10, 20], y: [30, 20], f: [17, 20] }
  ]
  expect(solve(input)).toEqual([22])
})

test('vertical path blocked (F between, colinear x)', () => {
  const input = [
    { x: [100, 10], y: [100, 100], f: [100, 32] }
  ]
  expect(solve(input)).toEqual([92])
})

test('A and B diagonal, F on neither line', () => {
  const input = [
    { x: [1, 2], y: [2, 3], f: [2, 2] }
  ]
  expect(solve(input)).toEqual([2])
})

test('order-insensitive: path can be backwards', () => {
  const input = [
    { x: [3, 10], y: [1, 10], f: [2, 10] }
  ]
  expect(solve(input)).toEqual([4])
})

test('multiple test cases in one call', () => {
  const input = [
    { x: [1, 1], y: [3, 3], f: [2, 2] },
    { x: [2, 5], y: [2, 1], f: [2, 3] },
    { x: [1000, 42], y: [1000, 1], f: [1000, 1000] },
    { x: [1, 10], y: [3, 10], f: [2, 10] },
    { x: [3, 8], y: [7, 8], f: [3, 7] },
    { x: [2, 1], y: [4, 1], f: [1, 1] },
    { x: [1, 344], y: [1, 10], f: [1, 1] }
  ]
  expect(solve(input)).toEqual([4, 6, 41, 4, 4, 2, 334])
})