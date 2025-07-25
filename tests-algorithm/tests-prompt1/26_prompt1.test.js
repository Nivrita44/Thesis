import solve from '../../solutions-algorithm/26.js';

test('returns YES for n=10, k=3', () => {
  expect(solve(10, 3).toLowerCase()).toBe('yes');
});

test('returns NO for n=7, k=4', () => {
  expect(solve(7, 4).toLowerCase()).toBe('no');
});

test('returns YES for n=9, k=7', () => {
  expect(solve(9, 7).toLowerCase()).toBe('yes');
});

test('returns YES for n=8, k=3', () => {
  expect(solve(8, 3).toLowerCase()).toBe('yes');
});

test('returns YES for n=1000000000000000000, k=3', () => {
  expect(solve(1000000000000000000n, 3).toLowerCase()).toBe('yes');
});

test('returns YES for n=999999999999999997, k=999999999999999995', () => {
  expect(solve(999999999999999997n, 999999999999999995n).toLowerCase()).toBe('yes');
});

test('returns NO for n=11, k=5', () => {
  expect(solve(11, 5).toLowerCase()).toBe('no');
});

test('returns YES for n=12, k=5', () => {
  expect(solve(12, 5).toLowerCase()).toBe('yes');
});

test('returns YES for n=1, k=999999999999999999', () => {
  expect(solve(1, 999999999999999999n).toLowerCase()).toBe('yes');
});

test('returns NO for n=3, k=4', () => {
  expect(solve(3, 4).toLowerCase()).toBe('no');
});