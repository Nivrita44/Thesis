import { solve } from '../../../solutions-descriptive/28.js';

test('equal numbers require no operations', () => {
  expect(solve(5n, 5n)).toBe(0n);
});


test('minimal case with zeros', () => {
  expect(solve(0n, 0n)).toBe(0n);
});



test('power of 2 difference', () => {
  expect(solve(8n, 32n)).toBe(4n);
});

