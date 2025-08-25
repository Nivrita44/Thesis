import { solve } from '../../../solutions-descriptive/17.js';

test('returns NO when 2 * totalNodes <= totalEdges', () => {
  expect(solve(2, 4)).toBe('NO');
  expect(solve(3, 7)).toBe('NO');
  expect(solve(1, 2)).toBe('NO');
  expect(solve(5, 11)).toBe('NO');
  expect(solve(4, 8)).toBe('NO');
});

test('returns YES and correct assignment when minimal edges', () => {
  const result = solve(2, 3);
  expect(result.startsWith('YES\n')).toBe(true);
  const rows = result.split('\n').slice(1);
  expect(rows.length).toBe(4);
  rows.forEach(row => {
    const numbers = row.split(' ').map(Number);
    expect(numbers.length).toBe(3);
    numbers.forEach(n => {
      expect(n === 1 || n === 2).toBe(true);
    });
  });
});

test('returns YES and constructs correct matrix for typical small case', () => {
  const result = solve(3, 4);
  expect(result.startsWith('YES\n')).toBe(true);
  const rows = result.split('\n').slice(1);
  expect(rows.length).toBe(6);
  rows.forEach(row => {
    const numbers = row.split(' ').map(Number);
    expect(numbers.length).toBe(4);
    numbers.forEach(n => {
      expect(n >= 1 && n <= 3).toBe(true);
    });
  });
});

test('returns YES and respects edge values for mid-size valid input', () => {
  const result = solve(4, 7);
  expect(result.startsWith('YES\n')).toBe(true);
  const rows = result.split('\n').slice(1);
  expect(rows.length).toBe(8);
  rows.forEach(row => {
    const numbers = row.split(' ').map(Number);
    expect(numbers.length).toBe(7);
    numbers.forEach(n => {
      expect(n >= 1 && n <= 4).toBe(true);
    });
  });
});

test('handles edge case of smallest valid input', () => {
  const result = solve(1, 1);
  expect(result.startsWith('YES\n')).toBe(true);
  const matrix = result.split('\n').slice(1);
  expect(matrix.length).toBe(2);
  matrix.forEach(row => {
    expect(row).toBe('1');
  });
});

test('large valid input returns YES', () => {
  const result = solve(10, 14);
  expect(result.startsWith('YES\n')).toBe(true);
  const rows = result.split('\n').slice(1);
  expect(rows.length).toBe(20);
  rows.forEach(row => {
    const numbers = row.split(' ').map(Number);
    expect(numbers.length).toBe(14);
    numbers.forEach(n => {
      expect(n >= 1 && n <= 10).toBe(true);
    });
  });
});

test('just at boundary returns NO', () => {
  expect(solve(10, 20)).toBe('NO');
});

test('one less than boundary returns YES', () => {
  const result = solve(10, 19);
  expect(result.startsWith('YES\n')).toBe(true);
  const rows = result.split('\n').slice(1);
  expect(rows.length).toBe(20);
  rows.forEach(row => {
    const numbers = row.split(' ').map(Number);
    expect(numbers.length).toBe(19);
    numbers.forEach(n => {
      expect(n >= 1 && n <= 10).toBe(true);
    });
  });
});