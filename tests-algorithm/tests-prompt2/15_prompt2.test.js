import { solve } from '../../solutions-algorithm/15.js';

test('king diagonal move: a8 to h1', () => {
  const result = solve('a8', 'h1');
  expect(result.count).toBe(7);
  expect(result.directions).toEqual(['RD','RD','RD','RD','RD','RD','RD']);
});

test('king straight up: b2 to b4', () => {
  const result = solve('b2', 'b4');
  expect(result.count).toBe(2);
  expect(result.directions).toEqual(['U','U']);
});

test('king one move up: a1 to a2', () => {
  const result = solve('a1', 'a2');
  expect(result.count).toBe(1);
  expect(result.directions).toEqual(['U']);
});

test('king one move left: c3 to b3', () => {
  const result = solve('c3', 'b3');
  expect(result.count).toBe(1);
  expect(result.directions).toEqual(['L']);
});

test('king one move diagonal up-right: d4 to e5', () => {
  const result = solve('d4', 'e5');
  expect(result.count).toBe(1);
  expect(result.directions).toEqual(['RU']);
});

test('king one move diagonal down-left: h8 to g7', () => {
  const result = solve('h8', 'g7');
  expect(result.count).toBe(1);
  expect(result.directions).toEqual(['LD']);
});

test('king no move (same square): e3 to e3', () => {
  const result = solve('e3', 'e3');
  expect(result.count).toBe(0);
  expect(result.directions).toEqual([]);
});

test('king long horizontal move: a1 to h1', () => {
  const result = solve('a1', 'h1');
  expect(result.count).toBe(7);
  expect(result.directions).toEqual(['R','R','R','R','R','R','R']);
});

test('king long vertical move: h1 to h8', () => {
  const result = solve('h1', 'h8');
  expect(result.count).toBe(7);
  expect(result.directions).toEqual(['U','U','U','U','U','U','U']);
});

test('king mixed direction, mostly vertical: b2 to a8', () => {
  const result = solve('b2', 'a8');
  expect(result.count).toBe(6);
  expect(result.directions).toEqual(['LU','U','U','U','U','U']);
});

test('king mixed direction with both dx and dy negative: h8 to a1', () => {
  const result = solve('h8', 'a1');
  expect(result.count).toBe(7);
  expect(result.directions).toEqual(['LD','LD','LD','LD','LD','LD','LD']);
});