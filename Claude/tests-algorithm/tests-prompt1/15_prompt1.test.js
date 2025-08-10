import { solve } from '../../../solutions-algorithm/15.js'

test('example case - move from e4 to g5', () => {
  expect(solve('e4', 'g5')).toBe(2);
});

test('same square case - no moves needed', () => {
  expect(solve('a1', 'a1')).toBe(0);
});

test('diagonal move case', () => {
  expect(solve('c3', 'd4')).toBe(1);
});

test('opposite corners case', () => {
  expect(solve('a1', 'h8')).toBe(7);
});

test('adjacent squares case', () => {
  expect(solve('d4', 'd5')).toBe(1);
});

test('knight move pattern case', () => {
  expect(solve('b2', 'd3')).toBe(2);
});

test('large distance horizontal move', () => {
  expect(solve('a4', 'h4')).toBe(7);
});

test('large distance vertical move', () => {
  expect(solve('e1', 'e8')).toBe(7);
});

test('diagonal path blocked case', () => {
  expect(solve('a2', 'h7')).toBe(6);
});