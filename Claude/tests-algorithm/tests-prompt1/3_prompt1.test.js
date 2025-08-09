test('example with [2, 2, 2, 2] should return YES', () => {
  expect(solve([2, 2, 2, 2])).toBe('YES');
});

test('single element array should return YES', () => {
  expect(solve([5])).toBe('YES');
});

test('large array with all same values should return YES', () => {
  expect(solve(Array(50).fill(100))).toBe('YES');
});

test('array with consecutive values should return YES', () => {
  expect(solve([1, 2, 2, 3])).toBe('YES');
});

test('array with difference > 1 should return NO', () => {
  expect(solve([1, 1, 3])).toBe('NO');
});

test('array with all different values should return NO', () => {
  expect(solve([1, 3, 5, 7])).toBe('NO');
});

test('array with multiple groups should return NO', () => {
  expect(solve([1, 1, 3, 3, 5, 5])).toBe('NO');
});

test('array with sequential values ending in pair should return YES', () => {
  expect(solve([1, 2, 2])).toBe('YES');
});

test('array with mixed valid pairs should return YES', () => {
  expect(solve([2, 3, 3, 2, 2])).toBe('YES');
});