// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/7.js';

test('Single node tree', () => {
  expect(solve(['1'])).toBe('0');
});

test('Two node tree', () => {
  expect(solve(['2', '1 2'])).toBe('0');
});