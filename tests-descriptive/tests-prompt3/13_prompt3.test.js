import { solve } from '../../solutions-descriptive/13.js';

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

test('mixed values including edge ai=10', () => {
  expect(solve([[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]])).toEqual([19])
})

test('minimal and maximal values', () => {
  expect(solve([[1, 10]])).toEqual([2])
  expect(solve([[1, 1, 10, 10, 1]])).toEqual([7])
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

test('edge case: single large subarray with different elements', () => {
  const arr = [1,2,3,4,5,6,7,8,9,10]
  expect(solve([arr])).toEqual([19])
})

test('array with consecutive duplicate segments', () => {
  expect(solve([[1,1,2,2,3,3]])).toEqual([12])
})


// √ single element arrays (4 ms)
// √ two element arrays with equal numbers (1 ms)
// √ two element arrays with different numbers (1 ms)
// √ small length arrays, odd and even (2 ms)
// √ array with unique increasing elements (1 ms)
// √ array with unique decreasing elements (1 ms)
// √ array with all the same number (1 ms)
// × mixed values including edge ai=10 (5 ms)
// × minimal and maximal values (4 ms)
// √ multiple test cases (7 ms)
// √ edge case: alternating high and low (1 ms)
// √ array length maximum n=10^5, all the same (394 ms)
// × edge case: single large subarray with different elements (2 ms)
// × array with consecutive duplicate segments (1 ms)
