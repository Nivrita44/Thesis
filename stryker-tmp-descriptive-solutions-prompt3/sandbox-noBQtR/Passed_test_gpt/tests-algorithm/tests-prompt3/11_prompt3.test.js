import { solve } from '../../../solutions-algorithm/11.js'

test('basic two-digit numbers', () => {
  expect(solve([10])).toStrictEqual([1])
  expect(solve([11])).toStrictEqual([2])
  expect(solve([21])).toStrictEqual([3])
  expect(solve([45])).toStrictEqual([9])
  expect(solve([77])).toStrictEqual([14])
  expect(solve([84])).toStrictEqual([12])
  expect(solve([99])).toStrictEqual([18])
  expect(solve([19])).toStrictEqual([10])
  expect(solve([40])).toStrictEqual([4])
  expect(solve([34])).toStrictEqual([7])
})

test('multiple inputs', () => {
  expect(solve([10, 11, 99, 42, 21])).toStrictEqual([1, 2, 18, 6, 3])
  expect(solve([55, 66, 23, 70])).toStrictEqual([10, 12, 5, 7])
})

test('minimum and maximum valid input', () => {
  expect(solve([10, 99])).toStrictEqual([1, 18])
})

test('mixed edge numbers', () => {
  expect(solve([12, 20, 88, 90, 43])).toStrictEqual([3, 2, 16, 9, 7])
})

test('single edge values', () => {
  expect(solve([10])).toStrictEqual([1])
  expect(solve([99])).toStrictEqual([18])
})

test('array of repeated numbers', () => {
  expect(solve([22, 22, 22])).toStrictEqual([4, 4, 4])
})

test('all numbers from 10 to 19', () => {
  expect(solve([10,11,12,13,14,15,16,17,18,19])).toStrictEqual([1,2,3,4,5,6,7,8,9,10])
})