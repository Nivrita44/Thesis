import { solve } from '../../solutions-algorithm/15.js';

test('sample 1: e2 to e4', () => {
  const result = solve('e2', 'e4');
  expect(result[0]).toBe(2);
  expect(result[1].length).toBe(2);
  expect([
    ['U', 'U'],
    ['U', 'U']
  ]).toContainEqual(result[1]);
});

test('sample 2: a1 to h8', () => {
  const result = solve('a1', 'h8');
  expect(result[0]).toBe(7);
  expect(result[1].length).toBe(7);
  const diagMove = result[1].every(move => move === 'RU');
  expect(diagMove).toBe(true);
});

test('sample 3: d4 to d4', () => {
  const result = solve('d4', 'd4');
  expect(result[0]).toBe(0);
  expect(result[1].length).toBe(0);
});

test('sample 4: h8 to a1', () => {
  const result = solve('h8', 'a1');
  expect(result[0]).toBe(7);
  expect(result[1].length).toBe(7);
  const diagMove = result[1].every(move => move === 'LD');
  expect(diagMove).toBe(true);
});

test('sample 5: a8 to h1', () => {
  const result = solve('a8', 'h1');
  expect(result[0]).toBe(7);
  expect(result[1].length).toBe(7);
  const diagMove = result[1].every(move => move === 'RD');
  expect(diagMove).toBe(true);
});

test('sample 6: a1 to a2', () => {
  const result = solve('a1', 'a2');
  expect(result[0]).toBe(1);
  expect(result[1].length).toBe(1);
  expect(['U', 'D', 'L', 'R', 'LU', 'LD', 'RU', 'RD']).toContain(result[1][0]);
});

test('sample 7: a1 to b2', () => {
  const result = solve('a1', 'b2');
  expect(result[0]).toBe(1);
  expect(result[1].length).toBe(1);
  expect(['RU']).toContain(result[1][0]);
});

test('sample 8: c3 to f4', () => {
  const result = solve('c3', 'f4');
  expect(result[0]).toBe(3);
  expect(result[1].length).toBe(3);
});

test('sample 9: f5 to c7', () => {
  const result = solve('f5', 'c7');
  expect(result[0]).toBe(3);
  expect(result[1].length).toBe(3);
});

test('sample 10: h1 to h8', () => {
  const result = solve('h1', 'h8');
  expect(result[0]).toBe(7);
  expect(result[1].length).toBe(7);
  const isU = result[1].every(m => m === 'U');
  expect(isU).toBe(true);
});