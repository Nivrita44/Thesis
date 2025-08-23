// @ts-nocheck
import { solve } from '../../solutions-descriptive/16.js'

test('example from description', () => {
  expect(solve('AABAB', 2, 2, 1, 1)).toBe('YES');
});

test('edge case: all blocks taken, exact limits', () => {
  expect(solve('ABABAB', 0, 0, 3, 0)).toBe('YES');
});

test('upper bound: large input, only single blocks', () => {
  expect(solve('A'.repeat(500000), 500000, 0, 0, 0)).toBe('YES');
});

test('minimal case', () => {
  expect(solve('A', 1, 0, 0, 0)).toBe('YES');
});

test('tricky: prohibited AA, impossible to split', () => {
  expect(solve('AA', 2, 0, 0, 0)).toBe('NO');
});

test('random valid: ABBA', () => {
  expect(solve('ABBA', 0, 0, 1, 1)).toBe('NO');
});

test('random valid: alternating AB', () => {
  expect(solve('ABAB', 0, 0, 2, 1)).toBe('YES');
});

test('random: only B allowed', () => {
  expect(solve('BBB', 0, 3, 0, 0)).toBe('YES');
});



// × example from description (7 ms)
// × edge case: all blocks taken, exact limits (1 ms)
// × upper bound: large input, only single blocks (90 ms)
// × minimal case (1 ms)
// √ tricky: prohibited AA, impossible to split (1 ms)
// √ random valid: ABBA
// × random valid: alternating AB
// × random: only B allowed (1 ms)