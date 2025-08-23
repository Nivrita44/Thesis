// @ts-nocheck
import { solve } from '../../../solutions-algorithm/37.js';

test('n = 2 returns strictly increasing sequence within 1..100 with distinct ai mod i', () => {
  const res = solve(2);
  expect(res.length).toBe(2);
  expect(res[0]).toBeLessThan(res[1]);
  expect(res[0]).toBeGreaterThanOrEqual(1);
  expect(res[1]).toBeLessThanOrEqual(100);
  expect(res[0] % 1).not.toBe(res[1] % 2);
});
test('n = 3 returns 3 increasing numbers with property', () => {
  const res = solve(3);
  expect(res.length).toBe(3);
  expect(res[0]).toBeLessThan(res[1]);
  expect(res[1]).toBeLessThan(res[2]);
  for (let i = 0; i < 3; i++) {
    expect(res[i]).toBeGreaterThanOrEqual(1);
    expect(res[i]).toBeLessThanOrEqual(100);
  }
  const mods = [];
  for (let i = 0; i < 3; i++) {
    mods.push(res[i] % (i + 1));
  }
  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 3; j++) {
      expect(mods[i]).not.toBe(mods[j]);
    }
  }
});
test('n = 5 sequence properties', () => {
  const res = solve(5);
  expect(res.length).toBe(5);
  for (let i = 0; i < 4; i++) {
    expect(res[i]).toBeLessThan(res[i+1]);
  }
  for (let i = 0; i < 5; i++) {
    expect(res[i]).toBeGreaterThanOrEqual(1);
    expect(res[i]).toBeLessThanOrEqual(100);
  }
  const mods = [];
  for (let i = 0; i < 5; i++) {
    mods.push(res[i] % (i+1));
  }
  for (let i = 0; i < 5; i++) {
    for (let j = i+1; j < 5; j++) {
      expect(mods[i]).not.toBe(mods[j]);
    }
  }
});
test('n = 10 increasing, all conditions met', () => {
  const res = solve(10);
  expect(res.length).toBe(10);
  for (let i = 0; i < 9; i++) {
    expect(res[i]).toBeLessThan(res[i + 1]);
  }
  for (let i = 0; i < 10; i++) {
    expect(res[i]).toBeGreaterThanOrEqual(1);
    expect(res[i]).toBeLessThanOrEqual(100);
  }
  const mods = [];
  for (let i = 0; i < 10; i++) {
    mods.push(res[i] % (i+1));
  }
  for (let i = 0; i < 10; i++) {
    for (let j = i+1; j < 10; j++) {
      expect(mods[i]).not.toBe(mods[j]);
    }
  }
});
test('n = 50, maximum size, valid sequence', () => {
  const res = solve(50);
  expect(res.length).toBe(50);
  for (let i = 0; i < 49; i++) {
    expect(res[i]).toBeLessThan(res[i+1]);
  }
  for (let i = 0; i < 50; i++) {
    expect(res[i]).toBeGreaterThanOrEqual(1);
    expect(res[i]).toBeLessThanOrEqual(100);
  }
  const mods = [];
  for (let i = 0; i < 50; i++) {
    mods.push(res[i] % (i + 1));
  }
  for (let i = 0; i < 50; i++) {
    for (let j = i+1; j < 50; j++) {
      expect(mods[i]).not.toBe(mods[j]);
    }
  }
});
test('n = 49, right below the maximum, valid sequence', () => {
  const res = solve(49);
  expect(res.length).toBe(49);
  for (let i = 0; i < 48; i++) {
    expect(res[i]).toBeLessThan(res[i+1]);
  }
  for (let i = 0; i < 49; i++) {
    expect(res[i]).toBeGreaterThanOrEqual(1);
    expect(res[i]).toBeLessThanOrEqual(100);
  }
  const mods = [];
  for (let i = 0; i < 49; i++) {
    mods.push(res[i] % (i + 1));
  }
  for (let i = 0; i < 49; i++) {
    for (let j = i+1; j < 49; j++) {
      expect(mods[i]).not.toBe(mods[j]);
    }
  }
});
test('All numbers odd, and within range', () => {
  for (let n = 2; n <= 50; n += 6) {
    const res = solve(n);
    for (const num of res) {
      expect(num % 2).toBe(1);
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(100);
    }
  }
});
test('Output length is correct for various n', () => {
  for (let n = 2; n <= 10; n++) {
    expect(solve(n).length).toBe(n);
  }
});

//all pass
