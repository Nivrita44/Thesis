// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/13.js';

test('single element arrays', () => {
  expect(solve([[1]])).toEqual([1])
  expect(solve([[5]])).toEqual([1])
  expect(solve([[10]])).toEqual([1])
})

test('two element arrays with equal numbers', () => {
  expect(solve([[2, 2]])).toEqual([3])
  expect(solve([[10, 10]])).toEqual([3])
})

test('two element arrays with different numbers', () => {
  expect(solve([[1, 2]])).toEqual([2])
  expect(solve([[3, 4]])).toEqual([2])
})

test('small length arrays, odd and even', () => {
  expect(solve([[2, 2, 2]])).toEqual([6])
  expect(solve([[1, 3, 2]])).toEqual([4])
  expect(solve([[1, 2, 1, 2]])).toEqual([6])
  expect(solve([[3, 3, 3, 3]])).toEqual([10])
})

test('array with unique increasing elements', () => {
  expect(solve([[1,2,3,4,5]])).toEqual([9])
})

test('array with unique decreasing elements', () => {
  expect(solve([[5,4,3,2,1]])).toEqual([9])
})

test('array with all the same number', () => {
  expect(solve([[7, 7, 7, 7, 7]])).toEqual([15])
})

test('multiple test cases', () => {
  expect(solve([[1,2,3], [2,2,2], [1,1,2,2]])).toEqual([4,6,8])
})

test('edge case: alternating high and low', () => {
  expect(solve([[1,10,1,10,1,10]])).toEqual([12])
})

test('array length maximum n=10^5, all the same', () => {
  const arr = new Array(100000).fill(5)
  expect(solve([arr])).toEqual([5000050000])
})