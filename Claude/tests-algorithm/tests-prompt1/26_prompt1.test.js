test('example case n=5 k=3', () => {
  expect(solve(5n, 3n)).toBe('NO');
});

test('example case n=7 k=4', () => {
  expect(solve(7n, 4n)).toBe('NO');
});

test('example case n=8 k=3', () => {
  expect(solve(8n, 3n)).toBe('YES');
});

test('minimum valid case n=1 k=1', () => {
  expect(solve(1n, 1n)).toBe('YES');
});

test('edge case with k=n', () => {
  expect(solve(5n, 5n)).toBe('NO');
});

test('large input case', () => {
  expect(solve(1000000000000000000n, 999999999999999999n)).toBe('YES');
});

test('tricky case with odd n and even k', () => {
  expect(solve(11n, 4n)).toBe('NO');
});

test('random valid case 1', () => {
  expect(solve(14n, 5n)).toBe('YES');
});

test('random valid case 2', () => {
  expect(solve(25n, 7n)).toBe('YES');
});