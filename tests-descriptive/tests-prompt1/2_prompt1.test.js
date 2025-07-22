import { solve } from '../../solutions-descriptive/2.js';

test('Simple case: n = 1, k = 2', () => {
  // n = 1; base 2 and 2:
  // base 2: '1', rev: '1' => 1
  // Sum over p=2: only 1 value: rev(1,2) = 1
  expect(solve(1, 2)).toBe(1);
});

test('Simple base: n = 4, k = 4', () => {
  // rev(4,2): base2 = '100' rev:'001'->1
  // rev(4,3): base3 = '11' rev:'11'->4
  // rev(4,4): base4 = '10' rev:'01'->1
  // sum = 1+4+1=6
  expect(solve(4, 4)).toBe(6);
});

test('n = 10, k = 5', () => {
  // rev(10, 2): '1010' -> '0101' (5 dec)
  // rev(10,3): '101'->'101'(10 dec)
  // rev(10,4): '22'->'22'(10 dec)
  // rev(10,5): '20'->'02'(2 dec)
  // rev(10,5) not needed if sum to 5 (p=2 to 5, inclusive) so include p=5.
  // Sum: 5+10+10+2 = 27
  expect(solve(10, 5)).toBe(27);
});

test('Edge: n = 1, k = 100000', () => {
  // For any base >= 2, 1 is always '1', rev:'1'=1. k=10^5, p=2..10^5.
  // Count: 10^5-2+1 = 99999, but inclusive of 2, so total is 99999
  // Correction: 2..100000 inclusive is (100000-2+1) = 99999
  expect(solve(1, 100000)).toBe(99999);
});

test('Large n, small k: n = 300000, k = 2', () => {
  // Only need rev(300000,2)
  // Just return reversed base 2 representation.
  // Let's compute it programmatically for test:
  function manualRev(n, p) {
    let digits = [];
    let x = n;
    while (x > 0) {
      digits.push(x % p);
      x = Math.floor(x / p);
    }
    let res = 0;
    for (let i = 0; i < digits.length; ++i)
      res = res * p + digits[i];
    return res;
  }
  const expected = manualRev(300000, 2);
  expect(solve(300000, 2)).toBe(expected);
});

test('Modulus check: n = 100000, k = 100000', () => {
  // As above, for n=1, answer would be 99999.
  // For n=100000, result should be significantly larger but always mod 10^9+7.
  const res = solve(100000, 100000);
  expect(Number.isInteger(res)).toBe(true);
  expect(res).toBeGreaterThanOrEqual(0);
  expect(res).toBeLessThan(1e9+7);
});

test('k equals n: n = 15, k = 15', () => {
  // Range p=2..15
  function allRevSum(n, k) {
    let mod = 1e9 + 7;
    let sum = 0;
    for(let p=2;p<=k;++p){
      let x = n;
      let digits = [];
      while(x>0){
        digits.push(x%p);
        x = Math.floor(x/p);
      }
      let m = 0;
      for(let d of digits){
        m = m*p + d;
      }
      sum = (sum + m) % mod;
    }
    return sum;
  }
  expect(solve(15, 15)).toBe(allRevSum(15, 15));
});

test('n = 1000, k = 2', () => {
  // Only one p value, p=2
  // rev(1000,2)
  function rev(n, p) {
    let digits = [];
    while (n > 0) {
      digits.push(n % p);
      n = Math.floor(n / p);
    }
    let m = 0;
    for (let d of digits)
      m = m * p + d;
    return m;
  }
  expect(solve(1000, 2)).toBe(rev(1000, 2));
});

test('Random medium n k: n = 42, k = 7', () => {
  // p = 2..7
  let mod = 1e9 + 7;
  let sum = 0;
  for (let p = 2; p <= 7; ++p) {
    let x = 42, digits = [];
    while (x > 0) {
      digits.push(x % p);
      x = Math.floor(x / p);
    }
    let m = 0;
    for (let d of digits) m = m * p + d;
    sum = (sum + m) % mod;
  }
  expect(solve(42, 7)).toBe(sum);
});

test('Stress test: n = 3, k = 100000', () => {
  // For n = 3 and large k, check performance/acceptance
  let mod = 1e9 + 7;
  let sum = 0;
  for (let p = 2; p <= 100000; ++p) {
    let x = 3, digits = [];
    while (x > 0) {
      digits.push(x % p);
      x = Math.floor(x / p);
    }
    let m = 0;
    for (let d of digits) m = m * p + d;
    sum = (sum + m) % mod;
  }
  expect(solve(3, 100000)).toBe(sum);
});