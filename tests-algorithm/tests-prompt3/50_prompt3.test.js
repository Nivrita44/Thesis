import { solve } from '../../solutions-algorithm/50.js'

test('Example 1: abacaba', () => {
  const s = "abacaba"
  const queries = [
    [1,3],
    [2,5],
    [1,7]
  ]
  const expected = [4,7,11]
  expect(solve(s, queries)).toEqual(expected)
})

test('Example 2: sonoshikumiwo', () => {
  const s = "sonoshikumiwo"
  const queries = [
    [1,5],
    [2,10],
    [7,7],
    [1,13],
    [4,8],
    [2,5],
    [3,9]
  ]
  const expected = [82,125,9,191,62,63,97]
  expect(solve(s, queries)).toEqual(expected)
})

test('Single character, single query', () => {
  const s = "a"
  const queries = [[1,1]]
  expect(solve(s, queries)).toEqual([1])
})

test('All the same character', () => {
  const s = "bbbb"
  const queries = [
    [1,4],
    [2,3],
    [1,1],
    [4,4]
  ]
  expect(solve(s, queries)).toEqual([8,4,2,2])
})

test('Full alphabet, one query', () => {
  const s = "abcdefghijklmnopqrstuvwxyz"
  const queries = [[1,26]]
  expect(solve(s, queries)).toEqual([351])
})

test('Full string, multiple queries', () => {
  const s = "abcd"
  const queries = [
    [1,4],
    [1,1],
    [2,2],
    [4,4],
    [2,4]
  ]
  expect(solve(s, queries)).toEqual([10,1,2,4,9])
})

test('Edges: minimum and maximum indices', () => {
  const s = "abcde"
  const queries = [
    [1,5],
    [1,1],
    [5,5],
    [2,4],
    [3,3]
  ]
  expect(solve(s, queries)).toEqual([15,1,5,9,3])
})

test('Long string, large substring', () => {
  const s = "a".repeat(100000)
  const queries = [[1,100000]]
  expect(solve(s, queries)).toEqual([100000])

})

test('Multiple queries with overlap', () => {
  const s = "abacabadabacaba"
  const queries = [
    [1,7],
    [8,15],
    [1,15],
    [5,11]
  ]
  expect(solve(s, queries)).toEqual([11,18,29,12])
})

test('Single character range (various positions)', () => {
  const s = "qwerty"
  const queries = [
    [1,1],
    [3,3],
    [6,6]
  ]
  expect(solve(s, queries)).toEqual([17,5,25])
})

test('Random string, reversed interval', () => {
  const s = "zxcvbnmlkjhgfdsaqwertyuiop"
  const queries = [
    [1,1],
    [10,17],
    [1,26]
  ]
  const prefixSum = [0]
  for(let i=0;i<s.length;i++)prefixSum.push(s.charCodeAt(i)-96+prefixSum[i])
  expect(solve(s, queries)).toEqual([
    prefixSum[1]-prefixSum[0],
    prefixSum[17]-prefixSum[9],
    prefixSum[26]-prefixSum[0]
  ])
})

test('Multiple queries with single length on large input', () => {
  const s = "y".repeat(10000)
  const queries = []
  for(let i=1;i<=10000;i+=1000)queries.push([i,i])
  expect(solve(s, queries)).toEqual(Array(10).fill(25))
})


// Multiple queries with overlap

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 2
//     + Received  + 2

//       Array [
//         11,
//     -   18,
//     -   29,
//     +   15,
//     +   26,
//         12,
//       ]

//       89 |     [5,11]
//       90 |   ]
//     > 91 |   expect(solve(s, queries)).toEqual([11,18,29,12])
//          |                             ^
//       92 | })
//       93 |
//       94 | test('Single character range (various positions)', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt3/50_prompt3.test.js:91:29)