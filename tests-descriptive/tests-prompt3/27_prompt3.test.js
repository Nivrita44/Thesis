import { solve } from '../../solutions-descriptive/27.js'

test('Single lightbulb on at (0,0)', () => {
  expect(solve(1, [[0, 0]])).toEqual([0, 0])
})

test('Single lightbulb on at (100, -100)', () => {
  expect(solve(1, [[100, -100]])).toEqual([100, -100])
})

test('Four bulbs in a single operation, treasure at (0,0)', () => {
  expect(solve(4, [[0,0],[0,1],[1,-1],[1,0]])).toEqual([0, 0])
})

test('Four bulbs in a shifted square, treasure at (10,-10)', () => {
  expect(solve(4, [[10,-10],[10,-9],[11,-11],[11,-10]])).toEqual([10, -10])
})

test('Two bulbs, (0,0) and (1,1)', () => {
  expect(solve(2, [[0,0],[1,1]])).toEqual([0,0]) 
})

test('Eight bulbs in two 2x2 blocks', () => {
  const points = [[0,0],[0,1],[1,0],[1,1],[2,2],[2,3],[3,2],[3,3]]
  expect(solve(8, points)).toEqual([0, 0])
})

test('Minimum and maximum coordinates', () => {
  const points = [[-1e8,-1e8],[1e8,1e8]]
  expect(solve(2, points)).toEqual([-100000000, -100000000])
})

test('All bulbs with x odd and one with even', () => {
  const points = [[1,2],[3,4],[5,6],[2,10]]
  expect(solve(4, points)).toEqual([2, 10])
})

test('Bulbs with overlapping diagonals', () => {
  const points = [[1,2],[2,1],[1,1]]
  expect(solve(3, points)).toEqual([2, 1])
})

test('More generic: bulbs scattered but with one unique x', () => {
  const points = [[5,7],[5,8],[6,7],[10,11]]
  expect(solve(4, points)).toEqual([6, 7])
})

test('n = 2e5 where all but one x-coordinate is even count', () => {
  const n = 200000
  const bulbs = []
  for (let i = 0; i < n - 1; i++) bulbs.push([2, i])
  bulbs.push([7, 123])
  expect(solve(n, bulbs)).toEqual([7, 123])
})