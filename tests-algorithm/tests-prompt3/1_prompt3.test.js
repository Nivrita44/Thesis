import { solve } from '../../solutions-algorithm/1.js';

test('single number', () => {
  expect(solve('1')).toBe('1');
  expect(solve('2')).toBe('2');
  expect(solve('3')).toBe('3');
});

test('already sorted', () => {
  expect(solve('1+1+2')).toBe('1+1+2');
  expect(solve('1+2+2')).toBe('1+2+2');
  expect(solve('1+2+3')).toBe('1+2+3');
  expect(solve('2+2+3+3')).toBe('2+2+3+3');
});

test('reverse sorted', () => {
  expect(solve('3+2+1')).toBe('1+2+3');
  expect(solve('3+3+2+2+1+1')).toBe('1+1+2+2+3+3');
});

test('random order', () => {
  expect(solve('1+3+2+1')).toBe('1+1+2+3');
  expect(solve('2+3+1+2+1')).toBe('1+1+2+2+3');
});

test('all same number', () => {
  expect(solve('1+1+1')).toBe('1+1+1');
  expect(solve('2+2+2')).toBe('2+2+2');
  expect(solve('3+3+3')).toBe('3+3+3');
});

test('mixed, large input', () => {
  const input = '3+1+2+'.repeat(33) + '1';
  const sorted = [
    ...Array(33).fill(1),
    ...Array(33).fill(2),
    ...Array(33).fill(3),
    1
  ].sort((a, b) => a - b).join('+');
  expect(solve(input)).toBe(sorted);
});

test('alternating', () => {
  expect(solve('1+2+1+2+1+2')).toBe('1+1+1+2+2+2');
});

test('minimal cases', () => {
  expect(solve('1')).toBe('1');
  expect(solve('2')).toBe('2');
  expect(solve('3')).toBe('3');
});

test('two numbers', () => {
  expect(solve('2+1')).toBe('1+2');
  expect(solve('3+1')).toBe('1+3');
  expect(solve('2+3')).toBe('2+3');
});

test('long input, only ones', () => {
  const input = Array(100).fill('1').join('+');
  expect(solve(input)).toBe(input);
});

test('long input, descending', () => {
  const input = Array(34).fill('3').join('+') + '+' + Array(33).fill('2').join('+') + '+' + Array(33).fill('1').join('+');
  const sorted = Array(33).fill('1').concat(Array(33).fill('2'), Array(34).fill('3')).join('+');
  expect(solve(input)).toBe(sorted);
});