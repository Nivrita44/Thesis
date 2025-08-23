// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/27.js';

test('Single lightbulb on at (0,0)', () => {
  expect(solve(1, [[0, 0]])).toEqual([0, 0])
})

test('Single lightbulb on at (100, -100)', () => {
  expect(solve(1, [[100, -100]])).toEqual([100, -100])
})

test('Two bulbs, (0,0) and (1,1)', () => {
  expect(solve(2, [[0,0],[1,1]])).toEqual([0,0]) 
})

test('Minimum and maximum coordinates', () => {
  const points = [[-1e8,-1e8],[1e8,1e8]]
  expect(solve(2, points)).toEqual([-100000000, -100000000])
})