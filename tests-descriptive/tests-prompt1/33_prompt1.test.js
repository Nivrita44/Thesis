import { solve } from '../../solutions-descriptive/33.js';

test('Example 1: region is 1x1', () => {
  expect(solve([[0,1,0,1]])).toEqual([1]);
});

test('Example 2: region is 1x2', () => {
  expect(solve([[0,1,0,2]])).toEqual([2]);
});

test('Example 3: region is 2x2 aligned', () => {
  expect(solve([[0,2,0,2]])).toEqual([1]);
});

test('Example 4: region is 2x2 unaligned', () => {
  expect(solve([[1,3,1,3]])).toEqual([4]);
});

test('Example 5: 3x3 region', () => {
  expect(solve([[0,3,0,3]])).toEqual([4]);
});

test('Example 6: Large aligned square', () => {
  expect(solve([[0,1024,0,1024]])).toEqual([1]);
});

test('Example 7: Large region not aligned', () => {
  expect(solve([[1,1025,1,1025]])).toEqual([4]);
});

test('Example 8: 1x1000 vertical stripe', () => {
  expect(solve([[5,6,0,1000]])).toEqual([1000]);
});

test('Example 9: 1000x1 horizontal stripe', () => {
  expect(solve([[0,1000,400,401]])).toEqual([1000]);
});

test('Multiple test cases at once', () => {
  expect(solve([
    [0,1,0,1],
    [0,2,0,2],
    [1,3,1,3],
    [0,3,0,3]
  ])).toEqual([1,1,4,4]);
});

test('Biggest possible region', () => {
  expect(solve([[0,1000000,0,1000000]])).toEqual([1]);
});

test('Region fully inside but not aligned', () => {
  expect(solve([[5,9,6,10]])).toEqual([4]);
});

test('2x1 region', () => {
  expect(solve([[1,3,4,5]])).toEqual([2]);
});

test('1x2 region', () => {
  expect(solve([[4,5,7,9]])).toEqual([2]);
});