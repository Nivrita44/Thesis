import { solve } from '../../solutions-algorithm/15.js';

test('same square', () => {
  const res = solve('e4', 'e4');
  expect(res.count).toBe(0);
  expect(res.directions).toEqual([]);
});

test('vertical move up', () => {
  const res = solve('c3', 'c6');
  expect(res.count).toBe(3);
  expect(res.directions).toEqual(['U', 'U', 'U']);
});

test('vertical move down', () => {
  const res = solve('g7', 'g2');
  expect(res.count).toBe(5);
  expect(res.directions).toEqual(['D', 'D', 'D', 'D', 'D']);
});

test('horizontal move right', () => {
  const res = solve('a1', 'e1');
  expect(res.count).toBe(4);
  expect(res.directions).toEqual(['R', 'R', 'R', 'R']);
});

test('horizontal move left', () => {
  const res = solve('h5', 'b5');
  expect(res.count).toBe(6);
  expect(res.directions).toEqual(['L', 'L', 'L', 'L', 'L', 'L']);
});

test('diagonal up-right', () => {
  const res = solve('a1', 'h8');
  expect(res.count).toBe(7);
  expect(res.directions).toEqual(['RU', 'RU', 'RU', 'RU', 'RU', 'RU', 'RU']);
});

test('diagonal up-left', () => {
  const res = solve('h1', 'a8');
  expect(res.count).toBe(7);
  expect(res.directions).toEqual(['LU', 'LU', 'LU', 'LU', 'LU', 'LU', 'LU']);
});

test('diagonal down-right', () => {
  const res = solve('a8', 'h1');
  expect(res.count).toBe(7);
  expect(res.directions).toEqual(['RD', 'RD', 'RD', 'RD', 'RD', 'RD', 'RD']);
});

test('diagonal down-left', () => {
  const res = solve('h8', 'a1');
  expect(res.count).toBe(7);
  expect(res.directions).toEqual(['LD', 'LD', 'LD', 'LD', 'LD', 'LD', 'LD']);
});

test('mixed directions - up then right', () => {
  const res = solve('b2', 'd4');
  expect(res.count).toBe(2);
  expect(res.directions).toEqual(['RU', 'RU']);
});

test('mixed directions - right then up', () => {
  const res = solve('d4', 'g8');
  expect(res.count).toBe(4);
  expect(res.directions).toEqual(['RU', 'RU', 'RU', 'U']);
});

test('single step right', () => {
  const res = solve('d4', 'e4');
  expect(res.count).toBe(1);
  expect(res.directions).toEqual(['R']);
});

test('single step diagonal up-left', () => {
  const res = solve('e3', 'd4');
  expect(res.count).toBe(1);
  expect(res.directions).toEqual(['LU']);
});

test('one step down', () => {
  const res = solve('g6', 'g5');
  expect(res.count).toBe(1);
  expect(res.directions).toEqual(['D']);
});

test('complex case, up, left, and diagonals', () => {
  const res = solve('h8', 'a3');
  expect(res.count).toBe(7);
  expect(res.directions).toEqual(['LD', 'LD', 'LD', 'LD', 'LD', 'LD', 'LD']);
});

test('case from provided solution 1', () => {
  const res = solve('a8', 'h1');
  expect(res.count).toBe(7);
  expect(res.directions).toEqual(['RD', 'RD', 'RD', 'RD', 'RD', 'RD', 'RD']);
});

test('case from provided solution 2', () => {
  const res = solve('b2', 'b4');
  expect(res.count).toBe(2);
  expect(res.directions).toEqual(['U', 'U']);
});