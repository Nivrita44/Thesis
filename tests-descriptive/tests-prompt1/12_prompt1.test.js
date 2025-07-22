import solve from '../../solutions-descriptive/12.js';

test('Example 1', () => {
  const input = [
    {
      n: 3,
      q: 2,
      a: [1, 3, 2],
      queries: [
        [2, 4],
        [1, 5]
      ]
    }
  ];
  const expected = [
    [1, 2, 3]
  ];
  expect(solve(input)).toEqual(expected);
});

test('All sweaters the same size', () => {
  const input = [
    {
      n: 4,
      q: 1,
      a: [5, 5, 5, 5],
      queries: [
        [3, 5]
      ]
    }
  ];
  const expected = [
    [0, 0]
  ];
  expect(solve(input)).toEqual(expected);
});

test('Only one sweater', () => {
  const input = [
    {
      n: 1,
      q: 2,
      a: [42],
      queries: [
        [1, 100],
        [1, 7]
      ]
    }
  ];
  const expected = [
    [0, 0, 0]
  ];
  expect(solve(input)).toEqual(expected);
});

test('Increasing sizes, single change', () => {
  const input = [
    {
      n: 5,
      q: 1,
      a: [1, 2, 3, 4, 5],
      queries: [
        [3, 10]
      ]
    }
  ];
  const expected = [
    [1, 3]
  ];
  expect(solve(input)).toEqual(expected);
});

test('Decreasing sizes, no changes', () => {
  const input = [
    {
      n: 4,
      q: 0,
      a: [10, 7, 4, 1],
      queries: []
    }
  ];
  const expected = [
    [3]
  ];
  expect(solve(input)).toEqual(expected);
});

test('Multiple test cases', () => {
  const input = [
    {
      n: 3,
      q: 1,
      a: [1, 2, 3],
      queries: [
        [1, 5]
      ]
    },
    {
      n: 2,
      q: 2,
      a: [8, 1],
      queries: [
        [2, 8],
        [1, 8]
      ]
    }
  ];
  const expected = [
    [1, 3],
    [7, 0, 0]
  ];
  expect(solve(input)).toEqual(expected);
});

test('Large n with no changes', () => {
  const input = [
    {
      n: 10,
      q: 0,
      a: [1, 100, 50, 99, 2, 96, 3, 93, 4, 90],
      queries: []
    }
  ];
  const expected = [
    [99]
  ];
  expect(solve(input)).toEqual(expected);
});

test('Edge sizes, size change to min or max value', () => {
  const input = [
    {
      n: 3,
      q: 2,
      a: [1, 1000000000, 500],
      queries: [
        [2, 1],
        [1, 1000000000]
      ]
    }
  ];
  const expected = [
    [999999998, 499, 999999998]
  ];
  expect(solve(input)).toEqual(expected);
});