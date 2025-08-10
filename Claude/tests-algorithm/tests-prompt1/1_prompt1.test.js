import { solve } from '../../../solutions-algorithm/1.js';

describe('Problem: Xenia and Math', () => {
  test('example case 3+2+1', () => {
    expect(solve('3+2+1')).toBe('1+2+3');
  });

  test('single digit case', () => {
    expect(solve('2')).toBe('2');
  });

  test('all same digits 3+3+3+3', () => {
    expect(solve('3+3+3+3')).toBe('3+3+3+3');
  });

  test('already sorted case 1+1+2+3', () => {
    expect(solve('1+1+2+3')).toBe('1+1+2+3');
  });

  test('reverse sorted case 3+3+2+1', () => {
    expect(solve('3+3+2+1')).toBe('1+2+3+3');
  });

  test('mixed order case 1+3+1+2', () => {
    expect(solve('1+3+1+2')).toBe('1+1+2+3');
  });

  test('longer mixed case 2+3+1+2+1+3', () => {
    expect(solve('2+3+1+2+1+3')).toBe('1+1+2+2+3+3');
  });

  test('maximum length mixed case', () => {
    expect(solve('3+2+1+3+2+1+3+2+1')).toBe('1+1+1+2+2+2+3+3+3');
  });
});