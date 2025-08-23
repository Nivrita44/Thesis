// @ts-nocheck
// 
import { solve } from '../../solutions-algorithm/36.js';

function isPrime(num) {
  if (num < 2n) return false;
  if (num === 2n) return true;
  if (num % 2n === 0n) return false;
  for (let i = 3n; i * i <= num; i += 2n) {
    if (num % i === 0n) return false;
  }
  return true;
}

test('example: n = 3', () => {
  const n = 3n;
  const m = BigInt(solve(n.toString()).join('')); // convert result to BigInt
  expect(m >= 2n && m <= 100000n).toBe(true);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

test('edge case: minimal n = 2', () => {
  const n = 2n;
  const m = BigInt(solve(n.toString()).join(''));
  expect(m >= 2n && m <= 100000n).toBe(true);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

test('upper-bound: large n = 99991', () => {
  const n = 99991n;
  const m = BigInt(solve(n.toString()).join(''));
  expect(m >= 2n && m <= 100000n).toBe(true);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

test('tricky: n = 5', () => {
  const n = 5n;
  const m = BigInt(solve(n.toString()).join(''));
  expect(m >= 2n && m <= 100000n).toBe(true);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

test('random: n = 13', () => {
  const n = 13n;
  const m = BigInt(solve(n.toString()).join(''));
  expect(m >= 2n && m <= 100000n).toBe(true);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

test('random: n = 31', () => {
  const n = 31n;
  const m = BigInt(solve(n.toString()).join(''));
  expect(m >= 2n && m <= 100000n).toBe(true);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

test('random: n = 97', () => {
  const n = 97n;
  const m = BigInt(solve(n.toString()).join(''));
  expect(m >= 2n && m <= 100000n).toBe(true);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

test('random: n = 9973', () => {
  const n = 9973n;
  const m = BigInt(solve(n.toString()).join(''));
  expect(m >= 2n && m <= 100000n).toBe(true);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});




// × example: n = 3 (8 ms)
//   × edge case: minimal n = 2 (2 ms)
//   × upper-bound: large n = 99991 (1 ms)
//   × tricky: n = 5
//   √ random: n = 13 (1 ms)
//   √ random: n = 31 (2 ms)
//   √ random: n = 97
//   × random: n = 9973 (1 ms)
