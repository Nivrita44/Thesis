import { solve } from '../../solutions-algorithm/34.js';

function bruteForce(x) {
  let maxSum = 0;
  let ys = [];
  for (let y = 1; y < x; y++) {
    let a = x, b = y;
    while (b) {
      [a, b] = [b, a % b];
    }
    let val = a + y;
    if (val > maxSum) {
      maxSum = val;
      ys = [y];
    } else if (val === maxSum) {
      ys.push(y);
    }
  }
  return ys;
}

test('solve returns correct maximal y for x=2', () => {
  const x = 2;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve returns correct maximal y for x=3', () => {
  const x = 3;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve returns correct maximal y for x=6', () => {
  const x = 6;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve returns correct maximal y for x=12', () => {
  const x = 12;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve works for x=25', () => {
  const x = 25;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve works for prime x=13', () => {
  const x = 13;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve works for x=100', () => {
  const x = 100;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve works for x=999', () => {
  const x = 999;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve works for x=1000', () => {
  const x = 1000;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve works for x=997 (prime)', () => {
  const x = 997;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});