import solve from '../../solutions-descriptive/10.js';

test('single node basic case', () => {
  expect(solve([
    {
      n: 1,
      constraints: [[0, 10]],
      edges: []
    }
  ])).toEqual([0]);
});

test('two nodes, both with same l=r=0', () => {
  expect(solve([
    {
      n: 2,
      constraints: [[0, 0],[0, 0]],
      edges: [[1, 2]]
    }
  ])).toEqual([0]);
});

test('two nodes, disjoint [0,0] and [1,1]', () => {
  expect(solve([
    {
      n: 2,
      constraints: [[0, 0],[1, 1]],
      edges: [[1, 2]]
    }
  ])).toEqual([1]);
});

test('two nodes, [1,3] and [2,3]', () => {
  expect(solve([
    {
      n: 2,
      constraints: [[1, 3],[2, 3]],
      edges: [[1, 2]]
    }
  ])).toEqual([2]);
});

test('three nodes, increasing intervals', () => {
  expect(solve([
    {
      n: 3,
      constraints: [[1, 2],[2, 3],[3, 4]],
      edges: [[1, 2],[2, 3]]
    }
  ])).toEqual([3]);
});

test('three nodes, common overlap', () => {
  expect(solve([
    {
      n: 3,
      constraints: [[1, 5],[2, 5],[3, 5]],
      edges: [[1, 2],[2, 3]]
    }
  ])).toEqual([3]);
});

test('three nodes, non-overlapping interval, must increase', () => {
  expect(solve([
    {
      n: 3,
      constraints: [[1, 1],[5, 5],[7, 7]],
      edges: [[1,2],[2,3]]
    }
  ])).toEqual([7]);
});

test('star tree with all lower bounds zero', () => {
  expect(solve([
    {
      n: 4,
      constraints: [[0,9],[0,5],[0,3],[0,4]],
      edges: [[1,2],[1,3],[1,4]]
    }
  ])).toEqual([0]);
});

test('star tree increasing intervals', () => {
  expect(solve([
    {
      n: 4,
      constraints: [[1,5],[2,6],[3,10],[4,8]],
      edges: [[1,2],[1,3],[1,4]]
    }
  ])).toEqual([4]);
});

test('big overlap, big tree', () => {
  expect(solve([
    {
      n: 5,
      constraints: [[7,9],[7,11],[8,13],[8,12],[8,10]],
      edges: [[1,2],[1,3],[2,4],[2,5]]
    }
  ])).toEqual([8]);
});

test('multiple test cases', () => {
  expect(solve([
    {
      n: 3,
      constraints: [[1,3],[2,4],[3,5]],
      edges: [[1,2],[2,3]]
    },
    {
      n: 2,
      constraints: [[0,0],[2,3]],
      edges: [[1,2]]
    },
    {
      n: 1,
      constraints: [[9,12]],
      edges: []
    }
  ])).toEqual([3,2,9]);
});