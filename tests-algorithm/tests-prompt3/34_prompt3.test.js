import { solve } from '../../solutions-algorithm/34.js'

test('returns x-1 for single input as per problem guarantee', () => {
  expect(solve([10])).toEqual([9])
  expect(solve([7])).toEqual([6])
  expect(solve([21])).toEqual([20])
  expect(solve([100])).toEqual([99])
  expect(solve([2])).toEqual([1])
  expect(solve([1000])).toEqual([999])
  expect(solve([6])).toEqual([5])
})

test('returns correct results for multiple inputs in array', () => {
  expect(solve([10, 7, 21, 100, 2, 1000, 6])).toEqual([9,6,20,99,1,999,5])
})

test('works for minimum x', () => {
  expect(solve([2])).toEqual([1])
})

test('works for maximum x', () => {
  expect(solve([1000])).toEqual([999])
})

test('works for edge even and odd values', () => {
  expect(solve([3])).toEqual([2])
  expect(solve([4])).toEqual([3])
  expect(solve([999])).toEqual([998])
})

test('handles repeated or identical values', () => {
  expect(solve([5,5,5])).toEqual([4,4,4])
})

test('handles more than one input', () => {
  expect(solve([12,34,56])).toEqual([11,33,55])
})

test('handles input array of length 1', () => {
  expect(solve([65])).toEqual([64])
})

test('handles input array of maximum allowed size (100 distinct values)', () => {
  const inputs = Array.from({length: 100}, (_,i)=>i+2)
  const expected = Array.from({length: 100}, (_,i)=>i+1)
  expect(solve(inputs)).toEqual(expected)
})