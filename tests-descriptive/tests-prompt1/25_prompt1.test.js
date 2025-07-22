import solve from '../../solutions-descriptive/25.js';

test('n=1, k=1', () => {
  expect(solve(1, 1)).toEqual({
    result: 'YES',
    permutations: [[1]]
  });
});

test('n=2, k=1', () => {
  expect(solve(2, 1)).toEqual({
    result: 'YES',
    permutations: [[1, 2]]
  });
});

test('n=2, k=2', () => {
  expect(solve(2, 2)).toEqual({
    result: 'NO'
  });
});

test('n=3, k=1', () => {
  expect(solve(3, 1)).toEqual({
    result: 'YES',
    permutations: [[1,2,3]]
  });
});

test('n=3, k=2', () => {
  expect(solve(3, 2)).toEqual({
    result: 'NO'
  });
});

test('n=4, k=4', () => {
  expect(solve(4, 4)).toEqual({
    result: 'NO'
  });
});

test('n=5, k=1', () => {
  expect(solve(5, 1)).toEqual({
    result: 'YES',
    permutations: [[1,2,3,4,5]]
  });
});

test('n=4, k=1', () => {
  expect(solve(4, 1)).toEqual({
    result: 'YES',
    permutations: [[1,2,3,4]]
  });
});

test('n=1, k=5', () => {
  expect(solve(1, 5)).toEqual({
    result: 'YES',
    permutations: [[1],[1],[1],[1],[1]]
  });
});

test('n=2, k=3', () => {
  expect(solve(2, 3)).toEqual({
    result: 'NO'
  });
});

test('n=100000, k=1', () => {
  const a = Array.from({length: 100000}, (_, i) => i+1);
  expect(solve(100000, 1)).toEqual({
    result: 'YES',
    permutations: [a]
  });
});

test('n=2, k=100000', () => {
  expect(solve(2, 100000)).toEqual({
    result: 'NO'
  });
});