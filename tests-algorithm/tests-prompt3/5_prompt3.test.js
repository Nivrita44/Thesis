import { solve } from '../../solutions-algorithm/5.js';

test('example_1', () => {
  expect(solve([3, 1, 4, 3])).toBe(1);
});

test('all_elements_same', () => {
  expect(solve([1, 1, 1, 1, 1])).toBe(4);
});

test('single_element', () => {
  expect(solve([1])).toBe(0);
});

test('all_distinct', () => {
  expect(solve([6, 5, 4, 3, 2, 1])).toBe(0);
});

test('random_duplicates', () => {
  expect(solve([1, 2, 1, 7, 1, 2, 1])).toBe(5);
});

test('two_duplicates_far_apart', () => {
  expect(solve([1, 2, 3, 4, 5, 1])).toBe(1);
});

test('duplicates_at_start_only', () => {
  expect(solve([1, 1, 2, 3, 4, 5])).toBe(1);
});

test('first_and_last_duplicate', () => {
  expect(solve([2, 3, 4, 5, 2])).toBe(1);
});

test('long_unique_then_duplicate', () => {
  expect(solve([1, 2, 3, 4, 5, 6, 3])).toBe(3);
});

test('alternating_duplicates', () => {
  expect(solve([1, 2, 1, 2, 1, 2, 1])).toBe(6);
});

test('two_duplicates_near_end', () => {
  expect(solve([1, 2, 3, 4, 5, 3])).toBe(3);
});

test('maximum_input_case_with_no_duplicates', () => {
  const arr = Array.from({length: 2e5}, (_, i) => i + 1);
  expect(solve(arr)).toBe(0);
});

test('maximum_input_case_all_duplicates', () => {
  const arr = Array(2e5).fill(42);
  expect(solve(arr)).toBe(199999);
});