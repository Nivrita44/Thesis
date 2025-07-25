import { solve } from '../../solutions-algorithm/31.js';

test('n=2 returns -1', () => {
  expect(solve(2)).toBe(-1);
});

test('n=3 returns -1', () => {
  expect(solve(3)).toBe(-1);
});

test('n=4 returns any valid funny permutation', () => {
  const res = solve(4);
  expect(Array.isArray(res)).toBe(true);
  expect(res.length).toBe(4);
  expect(new Set(res).size).toBe(4);
  for (let i = 0; i < 4; i++) {
    expect(res[i]).not.toBe(i + 1);
    let found = false;
    if (i > 0 && Math.abs(res[i] - res[i - 1]) === 1) found = true;
    if (i < 3 && Math.abs(res[i] - res[i + 1]) === 1) found = true;
    expect(found).toBe(true);
  }
});

test('n=5 returns any valid funny permutation', () => {
  const res = solve(5);
  expect(Array.isArray(res)).toBe(true);
  expect(res.length).toBe(5);
  expect(new Set(res).size).toBe(5);
  for (let i = 0; i < 5; i++) {
    expect(res[i]).not.toBe(i + 1);
    let found = false;
    if (i > 0 && Math.abs(res[i] - res[i - 1]) === 1) found = true;
    if (i < 4 && Math.abs(res[i] - res[i + 1]) === 1) found = true;
    expect(found).toBe(true);
  }
});

test('n=6 returns any valid funny permutation', () => {
  const res = solve(6);
  expect(Array.isArray(res)).toBe(true);
  expect(res.length).toBe(6);
  expect(new Set(res).size).toBe(6);
  for (let i = 0; i < 6; i++) {
    expect(res[i]).not.toBe(i + 1);
    let found = false;
    if (i > 0 && Math.abs(res[i] - res[i - 1]) === 1) found = true;
    if (i < 5 && Math.abs(res[i] - res[i + 1]) === 1) found = true;
    expect(found).toBe(true);
  }
});

test('n=8 returns any valid funny permutation', () => {
  const res = solve(8);
  expect(Array.isArray(res)).toBe(true);
  expect(res.length).toBe(8);
  expect(new Set(res).size).toBe(8);
  for (let i = 0; i < 8; i++) {
    expect(res[i]).not.toBe(i + 1);
    let found = false;
    if (i > 0 && Math.abs(res[i] - res[i - 1]) === 1) found = true;
    if (i < 7 && Math.abs(res[i] - res[i + 1]) === 1) found = true;
    expect(found).toBe(true);
  }
});

test('n=10 returns any valid funny permutation', () => {
  const res = solve(10);
  expect(Array.isArray(res)).toBe(true);
  expect(res.length).toBe(10);
  expect(new Set(res).size).toBe(10);
  for (let i = 0; i < 10; i++) {
    expect(res[i]).not.toBe(i + 1);
    let found = false;
    if (i > 0 && Math.abs(res[i] - res[i - 1]) === 1) found = true;
    if (i < 9 && Math.abs(res[i] - res[i + 1]) === 1) found = true;
    expect(found).toBe(true);
  }
});