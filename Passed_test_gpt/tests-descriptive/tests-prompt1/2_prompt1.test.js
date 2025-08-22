import { solve } from '../../../solutions-descriptive/2.js';

test('Simple case: n = 1, k = 2', () => {
  expect(solve(1, 2)).toBe(1);
});

test('Simple base: n = 4, k = 4', () => {
  
  expect(solve(4, 4)).toBe(6);
});

test('n = 10, k = 5', () => {
  
  expect(solve(10, 5)).toBe(27);
});

test('Edge: n = 1, k = 100000', () => {
  expect(solve(1, 100000)).toBe(99999);
});

test('Large n, small k: n = 300000, k = 2', () => {
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
  const res = solve(100000, 100000);
  expect(Number.isInteger(res)).toBe(true);
  expect(res).toBeGreaterThanOrEqual(0);
  expect(res).toBeLessThan(1e9+7);
});

test('k equals n: n = 15, k = 15', () => {
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