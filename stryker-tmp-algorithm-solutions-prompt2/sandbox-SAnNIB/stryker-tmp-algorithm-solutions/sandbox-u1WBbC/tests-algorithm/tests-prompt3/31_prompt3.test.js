// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/31.js'

test('n=2', () => {
  expect(solve(1, [2])).toEqual(["2 1"])
})

test('n=3 should return -1', () => {
  expect(solve(1, [3])).toEqual(["-1"])
})

test('n=4', () => {
  const output = solve(1, [4])[0].split(' ').map(Number)
  expect(new Set(output).size).toBe(4)
  expect(output.sort((a,b) => a-b)).toEqual([1,2,3,4])
  expect(output).not.toEqual([1,2,3,4])
  expect(output).not.toEqual([2,3,4,1])
})

test('n=5', () => {
  const result = solve(1, [5])[0].split(' ').map(Number)
  expect(new Set(result).size).toBe(5)
  expect(result.sort((a,b)=>a-b)).toEqual([1,2,3,4,5])
  expect(result).not.toEqual([1,2,3,4,5])
  expect(result).not.toEqual([2,3,4,5,1])
  expect(result).not.toEqual([3,4,5,1,2])
})

test('single test n=10', () => {
  const output = solve(1, [10])[0].split(' ').map(Number)
  expect(output.length).toBe(10)
  expect(new Set(output).size).toBe(10)
  expect(output.includes(10)).toBe(true)
  expect(output.includes(1)).toBe(true)
  expect(output.includes(2)).toBe(true)
})

test('multiple small and large n', () => {
  const ns = [2, 3, 4, 10, 100000]
  const out = solve(5, ns)
  expect(out[0]).toBe("2 1")
  expect(out[1]).toBe("-1")
  expect(out[2].split(' ').length).toBe(4)
  expect(out[3].split(' ').length).toBe(10)
  expect(out[4].split(' ').length).toBe(100000)
  expect(new Set(out[4].split(' ')).size).toBe(100000)
})

test('minimum n', () => {
  expect(solve(1, [2])).toEqual(['2 1'])
})

test('upper bound n', () => {
  const n = 200000
  const out = solve(1, [n])[0].split(' ').map(Number)
  expect(out.length).toBe(n)
  expect(new Set(out).size).toBe(n)
  expect(out[0]).toBe(n)
  expect(out[1]).toBe(n-1)
})

test('all n from 2 to 10', () => {
  const ins = []
  const expects = []
  for(let n=2;n<=10;n++) {
    ins.push(n)
    expects.push(n===3 ? "-1" : `${n} ${n-1} ${Array.from({length:n-2}, (_,i)=>i+1).join(' ')}`.trim())
  }
  expect(solve(9,ins)).toEqual(expects)
})

test('check for fixed points absence for n=5', () => {
  const arr = solve(1, [5])[0].split(' ').map(Number)
  for(let i=0;i<5;i++) {
    expect(arr[i]).not.toBe(i+1)
  }
})


// n=4

//     expect(received).not.toEqual(expected) // deep equality

//     Expected: not [1, 2, 3, 4]

//       13 |   expect(new Set(output).size).toBe(4)
//       14 |   expect(output.sort((a,b) => a-b)).toEqual([1,2,3,4])
//     > 15 |   expect(output).not.toEqual([1,2,3,4])
//          |                      ^
//       16 |   expect(output).not.toEqual([2,3,4,1])
//       17 | })
//       18 |

//       at Object.toEqual (tests-algorithm/tests-prompt3/31_prompt3.test.js:15:22)

//   ● n=5

//     expect(received).not.toEqual(expected) // deep equality

//     Expected: not [1, 2, 3, 4, 5]

//       21 |   expect(new Set(result).size).toBe(5)
//       22 |   expect(result.sort((a,b)=>a-b)).toEqual([1,2,3,4,5])
//     > 23 |   expect(result).not.toEqual([1,2,3,4,5])
//          |                      ^
//       24 |   expect(result).not.toEqual([2,3,4,5,1])
//       25 |   expect(result).not.toEqual([3,4,5,1,2])
//       26 | })

//       at Object.toEqual (tests-algorithm/tests-prompt3/31_prompt3.test.js:23:22)
