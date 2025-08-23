// @ts-nocheck
import { solve } from '../../solutions-descriptive/42.js'

test('example from description', () => {
  expect(solve(2, [1, 2], [5000, 5000])).toBe(750000025);
});

test('edge case: n = 1, p = 10000 (always inserted)', () => {
  expect(solve(1, [7], [10000])).toBe(49);
});

test('upper-bound case: n = 200000, a = [1]*n, p = [10000]*n', () => {
  const n = 200000;
  const a = Array(n).fill(1);
  const p = Array(n).fill(10000);
  expect(solve(n, a, p)).toBe(1);
});

test('minimal case: n = 1, a = [1], p = [1] (almost never inserted)', () => {
  expect(solve(1, [1], [1])).toBe(1);
});

test('tricky case: n = 2, same a, one p = 10000, one p = 0 (never inserted)', () => {
  expect(solve(2, [5, 5], [10000, 0])).toBe(25);
});

test('random valid case 1', () => {
  expect(solve(3, [1, 2, 3], [10000, 5000, 2500])).toBe(287500006);
});

test('random valid case 2', () => {
  expect(solve(4, [2, 4, 8, 16], [4000, 6000, 8000, 2000])).toBe(116800002);
});

test('random valid case 3', () => {
  expect(solve(3, [10, 20, 30], [3000, 7000, 5000])).toBe(50750020);
});



// × example from description (5 ms)
//   √ edge case: n = 1, p = 10000 (always inserted) (1 ms)
//   × upper-bound case: n = 200000, a = [1]*n, p = [10000]*n (304 ms)
//   × minimal case: n = 1, a = [1], p = [1] (almost never inserted) (1 ms)
//   √ tricky case: n = 2, same a, one p = 10000, one p = 0 (never inserted)
//   × random valid case 1
//   × random valid case 2 (1 ms)
//   × random valid case 3