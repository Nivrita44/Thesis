import { solve } from '../../solutions-algorithm/45.js'

test('example case with N=4, A=[1,2,3,4]', () => {
  expect(solve([1, 2, 3, 4])).toBe(1n);
});

test('minimal case with N=2, A=[1,2]', () => {
  expect(solve([1, 2])).toBe(1n);
});

test('case with N=3, A=[1,2,3]', () => {
  expect(solve([1, 2, 3])).toBe(2n);
});

test('case with different BFS order N=4, A=[1,2,4,3]', () => {
  expect(solve([1, 2, 4, 3])).toBe(2n);
});

test('case with N=5, A=[1,3,2,4,5]', () => {
  expect(solve([1, 3, 2, 4, 5])).toBe(4n);
});

test('larger case with N=6, A=[1,2,3,4,6,5]', () => {
  expect(solve([1, 2, 3, 4, 6, 5])).toBe(8n);
});

test('tricky case with alternating order N=5, A=[1,3,5,2,4]', () => {
  expect(solve([1, 3, 5, 2, 4])).toBe(0n);
});

test('edge case with N=7, A=[1,2,3,4,5,7,6]', () => {
  expect(solve([1, 2, 3, 4, 5, 7, 6])).toBe(32n);
});