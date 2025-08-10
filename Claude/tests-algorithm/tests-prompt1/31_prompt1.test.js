import { solve } from '../../../solutions-algorithm/31.js'

test('example case n=4 should return valid funny permutation', () => {
  expect(solve(4n)).toEqual([4n, 3n, 1n, 2n]);
});

test('minimum input n=2 should work', () => {
  expect(solve(2n)).toEqual([2n, 1n]);
});

test('n=3 should return -1 as no funny permutation exists', () => {
  expect(solve(3n)).toBe(-1n);
});

test('n=5 should return valid funny permutation', () => {
  const result = solve(5n);
  expect(validateFunnyPermutation(result, 5n)).toBe(true);
});

test('n=6 should return valid funny permutation', () => {
  const result = solve(6n);
  expect(validateFunnyPermutation(result, 6n)).toBe(true);
});

test('large input n=100 should return valid funny permutation', () => {
  const result = solve(100n);
  expect(validateFunnyPermutation(result, 100n)).toBe(true);
});

test('maximum input n=200000 should return valid funny permutation', () => {
  const result = solve(200000n);
  expect(validateFunnyPermutation(result, 200000n)).toBe(true);
});

function validateFunnyPermutation(perm, n) {
  if (perm === -1n) return true;
  if (!Array.isArray(perm) || perm.length !== Number(n)) return false;
  const used = new Set();
  for (let i = 0; i < perm.length; i++) {
    if (perm[i] === BigInt(i + 1)) return false;
    used.add(perm[i]);
    if (i > 0 && Math.abs(Number(perm[i] - perm[i-1])) !== 1 &&
        i < perm.length-1 && Math.abs(Number(perm[i] - perm[i+1])) !== 1) return false;
  }
  return used.size === Number(n);
}