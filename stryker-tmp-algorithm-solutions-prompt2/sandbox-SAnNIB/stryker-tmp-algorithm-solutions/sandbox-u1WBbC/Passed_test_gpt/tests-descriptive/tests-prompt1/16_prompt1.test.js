// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/16.js'

test('tricky: prohibited AA, impossible to split', () => {
    expect(solve('AA', 2, 0, 0, 0)).toBe('NO');
  });
  
  test('random valid: ABBA', () => {
    expect(solve('ABBA', 0, 0, 1, 1)).toBe('NO');
  });