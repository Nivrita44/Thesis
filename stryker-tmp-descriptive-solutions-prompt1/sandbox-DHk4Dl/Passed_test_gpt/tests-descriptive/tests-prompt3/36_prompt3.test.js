import { solve } from '../../../solutions-descriptive/36.js';

test('all border (not corner) cells filled (odd black count), 3x3', () => {
  const colors = [
    [1,2,1],[2,1,0],[2,3,0],[3,2,0]
  ];
  expect(solve(3, 3, 4, colors)).toBe(0);
});

test('all border (not corner) cells filled, zero border cells, even black, 3x4', () => {
  const colors = [
    [1,2,0],[1,3,0],[2,1,0],[3,2,0],[2,4,0],[3,3,0]
  ];
  expect(solve(3,4,6,colors)).toBe(64);
});

test('all border (not corner) cells filled, zero border cells, odd black, 3x4', () => {
  const colors = [
    [1,2,0],[1,3,0],[2,1,0],[3,2,1],[2,4,0],[3,3,0]
  ];
  expect(solve(3,4,6,colors)).toBe(0);
});