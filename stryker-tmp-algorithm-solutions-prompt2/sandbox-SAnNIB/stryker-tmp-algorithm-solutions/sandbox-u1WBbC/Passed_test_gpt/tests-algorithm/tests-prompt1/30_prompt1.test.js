// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/30.js';



test('n=14 possible', () => {
    const res = solve(1, [14]);
    expect(res[0]).toBe("YES");
    const [x, y, z] = res[1].split(' ').map(Number);
    expect(new Set([x, y, z]).size).toBe(3);
    expect(x + y + z).toBe(14);
    expect(x % 3).not.toBe(0);
    expect(y % 3).not.toBe(0);
    expect(z % 3).not.toBe(0);
});

