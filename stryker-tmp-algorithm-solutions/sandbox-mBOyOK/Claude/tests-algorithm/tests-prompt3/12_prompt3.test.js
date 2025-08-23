// @ts-nocheck
import { solve } from '../../../solutions-algorithm/12.js';

describe('solve', () => {
  test('basic case n=12', () => {
    expect(solve(12n)).toStrictEqual([8n, 4n]);
  });

  test('small odd number n=23', () => {
    expect(solve(23n)).toStrictEqual([9n, 14n]); 
  });

  test('small even number n=24', () => {
    expect(solve(24n)).toStrictEqual([8n, 16n]);
  });

  test('medium odd number n=101', () => {
    expect(solve(101n)).toStrictEqual([9n, 92n]);
  });

  test('medium even number n=1000', () => {
    expect(solve(1000n)).toStrictEqual([8n, 992n]);
  });

  test('large odd number n=99999', () => {
    expect(solve(99999n)).toStrictEqual([9n, 99990n]);
  });

  test('large even number n=100000', () => {
    expect(solve(100000n)).toStrictEqual([8n, 99992n]);
  });

  test('maximum input n=1000000', () => {
    expect(solve(1000000n)).toStrictEqual([8n, 999992n]);
  });
});
