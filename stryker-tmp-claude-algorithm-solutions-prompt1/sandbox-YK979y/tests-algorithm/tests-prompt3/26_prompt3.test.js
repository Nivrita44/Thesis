import { solve } from '../../solutions-algorithm/26.js';

test('Example from description', () => {
  expect(solve([
    [5n, 3n], 
    [6n, 1n], 
    [7n, 4n], 
    [8n, 8n]
  ])).toEqual(['yes', 'yes', 'no', 'yes']);
});

test('Lower bound inputs', () => {
  expect(solve([
    [1n, 1n],
    [1n, 1000000000000000000n]
  ])).toEqual(['no', 'no']);
});

test('k is less than n, k is odd, n is odd', () => {
  expect(solve([[9n, 3n]])).toEqual(['yes']);
});

test('n is even and large, k is odd', () => {
  expect(solve([[1000000000000000000n, 3n]])).toEqual(['yes']);
});

test('n equals k, both odd', () => {
  expect(solve([[999999999999999999n, 999999999999999999n]])).toEqual(['yes']);
});

test('n equals k, both even (but rule: k≠2, both large)', () => {
  expect(solve([[1000000000000000000n, 1000000000000000000n]])).toEqual(['yes']);
});

test('Impossible when n is odd, k is even (>2)', () => {
  expect(solve([[7n, 4n]])).toEqual(['no']);
});

test('Tricky: n is even, k odd, but k > n/2', () => {
  expect(solve([[8n, 7n]])).toEqual(['no']);
});

test('Random valid: n=13, k=5', () => {
  expect(solve([[13n, 5n]])).toEqual(['yes']);
});

test('Random impossible: n=11, k=7', () => {
  expect(solve([[11n, 7n]])).toEqual(['no']);
});



// √ Example from description (4 ms)
//   × Lower bound inputs (6 ms)
//   √ k is less than n, k is odd, n is odd (1 ms)
//   √ n is even and large, k is odd (2 ms)
//   √ n equals k, both odd (1 ms)
//   √ n equals k, both even (but rule: k≠2, both large) (1 ms)
//   √ Impossible when n is odd, k is even (>2) (1 ms)    
//   × Tricky: n is even, k odd, but k > n/2 (1 ms)
//   √ Random valid: n=13, k=5 (2 ms)
//   × Random impossible: n=11, k=7 (2 ms)