import {solve} from '../../solutions-descriptive/12.js';

test('Single test case, minimal input', () => {
  const input = [
    {
      size: 1,
      queries: 1,
      values: [1],
      updates: [[1, 5]],
    }
  ];
  const output = solve(input);
  expect(output).toEqual([[0, 0]]);
});

test('Test case 1 from provided solution', () => {
  const input = [
    {
      size: 2,
      queries: 2,
      values: [1, 10],
      updates: [[1, 10], [2, 2]],
    }
  ];
  const output = solve(input);
  expect(output[0].length).toBe(3); 
  expect(output[0][0]).toBe(8); 
  expect(output[0][1]).toBe(0); 
  expect(output[0][2]).toBe(0); 
});

test('Test case 2 from provided solution', () => {
  const input = [
    {
      size: 5,
      queries: 3,
      values: [1, 2, 3, 4, 5],
      updates: [[3, 7], [1, 4], [5, 2]],
    }
  ];
  const output = solve(input);
  expect(output[0][0]).toBe(2);
  expect(output[0][1]).toBe(4); 
  expect(output[0][2]).toBe(4); 
  expect(output[0][3]).toBe(2); 
});

test('Test case 3 from provided solution', () => {
  const input = [
    {
      size: 8,
      queries: 5,
      values: [7, 4, 2, 4, 8, 2, 1, 4],
      updates: [
        [5, 4], [1, 10], [3, 2], [8, 11], [7, 7]
      ]
    }
  ];
  const output = solve(input);
  expect(output[0][0]).toBe(6);
  expect(output[0][1]).toBe(5);
  expect(output[0][2]).toBe(9);
  expect(output[0][3]).toBe(8);
  expect(output[0][4]).toBe(10);
  expect(output[0][5]).toBe(8);
});

test('Edge case: all equal sizes, no updates', () => {
  const input = [
    {
      size: 4,
      queries: 0,
      values: [3, 3, 3, 3],
      updates: [],
    }
  ];
  const output = solve(input);
  expect(output[0][0]).toBe(0);
});

test('Edge case: decreasing order, push max range', () => {
  const input = [
    {
      size: 5,
      queries: 1,
      values: [5, 4, 3, 2, 1],
      updates: [[5, 10]],
    }
  ];
  const output = solve(input);
  expect(output[0][0]).toBe(4);
  expect(output[0][1]).toBe(8);
});

test('Edge case: increasing then big middle update', () => {
  const input = [
    {
      size: 4,
      queries: 1,
      values: [1, 2, 3, 4],
      updates: [[2, 100]],
    }
  ];
  const output = solve(input);
  expect(output[0][0]).toBe(2); 
  expect(output[0][1]).toBe(98); 
});

test('Multiple test cases mixed', () => {
  const input = [
    {
      size: 3,
      queries: 2,
      values: [1, 2, 1],
      updates: [[3, 5], [1, 7]],
    },
    {
      size: 2,
      queries: 1,
      values: [10, 10],
      updates: [[2, 1]],
    }
  ];
  const output = solve(input);
  expect(output[0]).toEqual([1, 3, 6]);
  expect(output[1]).toEqual([0, 8]);
});


// √ Single test case, minimal input (3 ms)
// × Test case 1 from provided solution (6 ms)
// × Test case 2 from provided solution
// × Test case 3 from provided solution (1 ms)
// √ Edge case: all equal sizes, no updates (1 ms)
// × Edge case: decreasing order, push max range (1 ms)
// × Edge case: increasing then big middle update (1 ms)
// × Multiple test cases mixed (3 ms)