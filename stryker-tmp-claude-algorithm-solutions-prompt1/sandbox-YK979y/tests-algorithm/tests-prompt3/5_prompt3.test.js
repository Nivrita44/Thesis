import { solve } from '../../../solutions-algorithm/5.js';

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
    const arr = Array.from({ length: 2e5 }, (_, i) => i + 1);
    expect(solve(arr)).toBe(0);
});

test('maximum_input_case_all_duplicates', () => {
    const arr = Array(2e5).fill(42);
    expect(solve(arr)).toBe(199999);
});


// FAIL tests - algorithm / tests - prompt3 / 5 _prompt3.test.js√ example_1(2 ms)√ all_elements_same√ single_element√ all_distinct√ random_duplicates(3 ms)√ two_duplicates_far_apart√ duplicates_at_start_only(1 ms)√ first_and_last_duplicate(1 ms)√ long_unique_then_duplicate(2 ms)× alternating_duplicates(3 ms)√ two_duplicates_near_end√ maximum_input_case_with_no_duplicates(24 ms)√ maximum_input_case_all_duplicates(1 ms)

// ● alternating_duplicates

// expect(received).toBe(expected) // Object.is equality

// Expected: 6
// Received: 5

// 38 |
//     39 | test('alternating_duplicates', () => { >
//         40 | expect(solve([1, 2, 1, 2, 1, 2, 1])).toBe(6); |
//         ^
//         41 |
//     });
// 42 |
//     43 | test('two_duplicates_near_end', () => {

//             at Object.toBe(tests - algorithm / tests - prompt3 / 5 _prompt3.test.js: 40: 40)
