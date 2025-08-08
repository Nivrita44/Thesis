import { solve } from '../../solutions-algorithm/39.js';

test('n=6, has odd divisor >1 (3)', () => {
  expect(solve(6)).toBe('YES');
});

test('n=4, does not have odd divisor >1', () => {
  expect(solve(4)).toBe('NO');
});

test('n=2, does not have odd divisor >1', () => {
  expect(solve(2)).toBe('NO');
});

test('n=9, has odd divisor >1 (3)', () => {
  expect(solve(9)).toBe('YES');
});

test('n=27, has odd divisor >1', () => {
  expect(solve(27)).toBe('YES');
});

test('n=8, does not have odd divisor >1', () => {
  expect(solve(8)).toBe('NO');
});

test('n=14, has odd divisor >1 (7)', () => {
  expect(solve(14)).toBe('YES');
});

test('n=16, does not have odd divisor >1', () => {
  expect(solve(16)).toBe('NO');
});

test('n=100000000000000, does not have odd divisor >1', () => {
  expect(solve(100000000000000)).toBe('NO');
});

test('n=100000000000001, has odd divisor >1', () => {
  expect(solve(100000000000001)).toBe('YES');
});

test('n=1024, does not have odd divisor >1', () => {
  expect(solve(1024)).toBe('NO');
});

test('n=3, has odd divisor >1 (3 itself)', () => {
  expect(solve(3)).toBe('YES');
});

test('n=5, has odd divisor >1 (5 itself)', () => {
  expect(solve(5)).toBe('YES');
});


// n=100000000000000, does not have odd divisor >1

// expect(received).toBe(expected) // Object.is equality

// Expected: "NO"
// Received: "YES"

//   34 |
//   35 | test('n=100000000000000, does not have odd divisor >1', () => {
// > 36 |   expect(solve(100000000000000)).toBe('NO');
//      |                                  ^
//   37 | });
//   38 |
//   39 | test('n=100000000000001, has odd divisor >1', () => {

//   at Object.toBe (tests-algorithm/tests-prompt1/39_prompt1.test.js:36:34)