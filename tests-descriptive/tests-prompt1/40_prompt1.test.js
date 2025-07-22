import solve from '../../solutions-descriptive/40.js';

test('basic test case n=3, all -1 except one', () => {
  expect(solve(3, [-1, -1, 1]).sort((a,b)=>a-b)).toEqual([1,2,3]);
});

test('n=5, all -1 except one', () => {
  expect(solve(5, [2,2,2,2,-1]).sort((a,b)=>a-b)).toEqual([1,2,3,4,5]);
});

test('n=4, mixed removed at different times', () => {
  const a = [1,2,2,-1];
  const p = solve(4, a);
  expect(p.length).toBe(4);
  expect(new Set(p).size).toBe(4);
  expect(p.every(v=>v>=1&&v<=4)).toBe(true);
});

test('n=5 alternating removals', () => {
  const a = [1,2,1,2,-1];
  const p = solve(5, a);
  expect(p.length).toBe(5);
  expect(new Set(p).size).toBe(5);
  expect(p.every(v=>v>=1&&v<=5)).toBe(true);
});

test('n=2 edge case', () => {
  const a = [-1,1];
  const p = solve(2, a);
  expect(p.length).toBe(2);
  expect(new Set(p).size).toBe(2);
  expect(p.every(v=>v>=1&&v<=2)).toBe(true);
});

test('n=2, both removed at first iteration', () => {
  const a = [1,1];
  const p = solve(2, a);
  expect(p.length).toBe(2);
  expect(new Set(p).size).toBe(2);
  expect(p.every(v=>v>=1&&v<=2)).toBe(true);
});

test('n=8, multiple iterations', () => {
  const a = [1,1,2,2,-1,2,1,1];
  const p = solve(8, a);
  expect(p.length).toBe(8);
  expect(new Set(p).size).toBe(8);
  expect(p.every(v=>v>=1&&v<=8)).toBe(true);
});

test('n=10, only one -1', () => {
  const a = Array(9).fill(1).concat(-1);
  const p = solve(10, a);
  expect(p.length).toBe(10);
  expect(new Set(p).size).toBe(10);
  expect(p.every(v=>v>=1&&v<=10)).toBe(true);
});

test('n=6, more complex pattern', () => {
  const a = [1,2,2,1,-1,2];
  const p = solve(6, a);
  expect(p.length).toBe(6);
  expect(new Set(p).size).toBe(6);
  expect(p.every(v=>v>=1&&v<=6)).toBe(true);
});

test('n=20, all removed at different steps', () => {
  let lgn = Math.ceil(Math.log2(20));
  const a = [];
  let iter = 1;
  for(let i=0;i<20;i++){
    if(i==10) a.push(-1);
    else{
      a.push(iter);
      iter = iter < lgn ? iter+1 : 1;
    }
  }
  const p = solve(20, a);
  expect(p.length).toBe(20);
  expect(new Set(p).size).toBe(20);
  expect(p.every(v=>v>=1&&v<=20)).toBe(true);
});