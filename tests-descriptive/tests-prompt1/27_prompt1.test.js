import { solve } from '../../solutions-descriptive/27.js';

test('single bulb at origin', () => {
  expect(solve({
    n: 1,
    bulbs: [[0, 0]]
  })).toBe('0 0');
});

test('single bulb at (1, 2)', () => {
  expect(solve({
    n: 1,
    bulbs: [[1, 2]]
  })).toBe('1 2');
});

test('bulbs at (0,0), (1,0), (0,1), (1,1)', () => {
  expect(solve({
    n: 4,
    bulbs: [[0, 0], [1, 0], [0, 1], [1, 1]]
  })).toBe('0 0');
});

test('bulbs forming a square offset', () => {
  expect(solve({
    n: 4,
    bulbs: [[10, 5], [11, 5], [10, 6], [11, 6]]
  })).toBe('10 5');
});

test('bulbs at (-3,-4)', () => {
  expect(solve({
    n: 1,
    bulbs: [[-3, -4]]
  })).toBe('-3 -4');
});

test('bulbs at (2,3), (2,4), (3,2), (3,3)', () => {
  expect(solve({
    n: 4,
    bulbs: [[2, 3], [2, 4], [3, 2], [3, 3]]
  })).toBe('2 3');
});

test('mixed bulbs, possible corner', () => {
  expect(solve({
    n: 5,
    bulbs: [[8, 1], [3, 7], [0, 0], [1000,999], [19,27]]
  }).split(' ').length).toBe(2);
});

test('large values', () => {
  expect(solve({
    n: 1,
    bulbs: [[1e8, -1e8]]
  })).toBe('100000000 -100000000');
});

test('more random bulbs on', () => {
  expect(solve({
    n: 3,
    bulbs: [[9,9], [2,2], [-3,5]]
  }).split(' ').length).toBe(2);
});

test('test alternating pattern', () => {
  expect(solve({
    n: 2,
    bulbs: [[0, 0], [1, 1]]
  }).split(' ').length).toBe(2);
});