// @ts-nocheck
// 
import {solve} from '../../../solutions-algorithm/43.js';


test('n=2, reversed permutation [1,0]', () => {
  expect(solve(2, [1, 0])).toEqual([0, 1]);
});


test('n=3, permutation [1,2,0]', () => {
  expect(solve(3, [1, 2, 0])).toEqual([1, 2]);
});


test('n=2, sorted permutation [0,1]', () => {
  expect(solve(2, [0, 1])).toEqual([0, 1]);
});


