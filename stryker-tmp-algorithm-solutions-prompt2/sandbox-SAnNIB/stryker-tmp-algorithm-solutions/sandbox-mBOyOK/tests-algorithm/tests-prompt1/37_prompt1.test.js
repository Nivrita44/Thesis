// @ts-nocheck
// 
import {solve} from '../../solutions-algorithm/37.js';

test('n = 2', () => {
  const n = 2;
  const res = solve(n);
  expect(res.length).toBe(2);
  expect(res[0]).toBeLessThan(res[1]);
  expect(res.every(x => x >= 1 && x <= 100)).toBe(true);
  expect(res[0] % 1).not.toBe(res[1] % 2);
});

test('n = 3', () => {
  const n = 3;
  const res = solve(n);
  expect(res.length).toBe(3);
  expect(res[0]).toBeLessThan(res[1]);
  expect(res[1]).toBeLessThan(res[2]);
  expect(res.every(x => x >= 1 && x <= 100)).toBe(true);

  const mods = [res[0] % 1, res[1] % 2, res[2] % 3];
  expect(new Set(mods).size).toBe(3);
});

test('n = 4', () => {
  const n = 4;
  const res = solve(n);
  expect(res.length).toBe(4);
  for (let i = 1; i < 4; i++) {
    expect(res[i - 1]).toBeLessThan(res[i]);
  }
  expect(res.every(x => x >= 1 && x <= 100)).toBe(true);

  const mods = [res[0] % 1, res[1] % 2, res[2] % 3, res[3] % 4];
  expect(new Set(mods).size).toBe(4);
});

test('n = 10', () => {
  const n = 10;
  const res = solve(n);
  expect(res.length).toBe(10);
  for (let i = 1; i < 10; i++) {
    expect(res[i - 1]).toBeLessThan(res[i]);
  }
  expect(res.every(x => x >= 1 && x <= 100)).toBe(true);

  const mods = [];
  for (let i = 0; i < 10; i++) {
    mods.push(res[i] % (i + 1));
  }
  expect(new Set(mods).size).toBe(10);
});

test('n = 50', () => {
  const n = 50;
  const res = solve(n);
  expect(res.length).toBe(50);
  for (let i = 1; i < 50; i++) {
    expect(res[i - 1]).toBeLessThan(res[i]);
  }
  expect(res.every(x => x >= 1 && x <= 100)).toBe(true);

  const mods = [];
  for (let i = 0; i < 50; i++) {
    mods.push(res[i] % (i + 1));
  }
  expect(new Set(mods).size).toBe(50);
});

test('sequence values are unique', () => {
  for (let n = 2; n <= 10; n++) {
    const res = solve(n);
    expect(res.length).toBe(new Set(res).size);
  }
});
//all pass
