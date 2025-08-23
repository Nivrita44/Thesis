// @ts-nocheck
import { solve } from '../../solutions-descriptive/41.js';

test('Example case from description', () => {
  const n = 4;
  const arr = [1, 2, 5, 10];
  const queries = [
    [1,1], [1,2], [1,3], [1,4], [1,5], [1,10],
    [5,10], [6,10], [2,8], [3,4], [3,10], [3,8],
    [5,6], [5,5], [1,8]
  ];
  const expected = [
    "1", "4", "12", "30", "32", "86",
    "56", "54", "60", "26", "82", "57",
    "9", "2", "61"
  ];
  expect(solve(n, arr, queries)).toEqual(expected);
});

test('Single element array', () => {
  const n = 1;
  const arr = [7];
  const queries = [[1,1]];
  expect(solve(n, arr, queries)).toEqual(["7"]);
});

test('All negative elements', () => {
  const n = 3;
  const arr = [-1,-2,-3];
  const queries = [
    [1,1], [1,2], [1,3], [2,3], [4,6]
  ];
  const expected = [
    "-1", "-3", "-6",   // s(1,1), s(1,1)+s(1,2), s(1,1)+s(1,2)+s(1,3)
    "-8", "-8"
  ];
  expect(solve(n, arr, queries)).toEqual(expected);
});

test('All zeros', () => {
  const n = 3;
  const arr = [0,0,0];
  const queries = [[1,6],[3,5],[2,4],[1,1]];
  expect(solve(n, arr, queries)).toEqual(["0","0","0","0"]);
});

test('Mixed positive and negative, n = 2', () => {
  const n = 2;
  const arr = [3, -2];
  const b = [
    3, 1, -2
  ];
  expect(solve(n, arr, [[1,1],[1,2],[1,3],[2,3],[3,3]])).toEqual([
    "3","4","2","-1","-2"
  ]);
});

test('Edge query case, full sum', () => {
  const n = 5;
  const arr = [1,2,3,4,5];
  const queries = [[1,15]];
  let expectedSum = 0;
  const b = [];
  for(let i=0;i<n;i++) {
    let sum = 0;
    for(let j=i;j<n;j++) {
      sum += arr[j];
      b.push(sum);
    }
  }
  expectedSum = b.reduce((a,b)=>a+b,0);
  expect(solve(n, arr, queries)).toEqual([expectedSum.toString()]);
});

test('Single query, last element only', () => {
  const n = 3;
  const arr = [1,1,2];
  expect(solve(n, arr, [[6,6]])).toEqual(["2"]);
});

test('Query for a portion of b', () => {
  const n = 3;
  const arr = [1,2,3];
  // b: [1,3,6,2,5,3]
  // queries: [2,4] -- b[2]+b[3]+b[4]=3+6+2=11
  expect(solve(n, arr, [[2,4]])).toEqual(["11"]);
});

test('Large numbers: stress, single query', () => {
  const n = 5;
  const arr = [1e6,1e6,1e6,1e6,1e6];
  const queries = [[1,15]];
  let b = [];
  for(let i=0;i<n;i++) {
    let s = 0;
    for(let j=i;j<n;j++) {
      s += arr[j];
      b.push(s);
    }
  }
  const expected = b.reduce((a,v)=>a+v,0).toString();
  expect(solve(n, arr, queries)).toEqual([expected]);
});

test('Edge: single query, single element', () => {
  const n = 3;
  const arr = [-10,0,10];
  expect(solve(n, arr, [[1,1],[2,2],[3,3]])).toEqual(["-10","-10","0"]);
});


// √ Example case from description (4 ms)
//   √ Single element array (1 ms)
//   × All negative elements (4 ms)
//   √ All zeros (2 ms)
//   √ Mixed positive and negative, n = 2
//   √ Edge query case, full sum
//   √ Single query, last element only (1 ms)
//   √ Query for a portion of b
//   √ Large numbers: stress, single query
//   √ Edge: single query, single element (1 ms)
