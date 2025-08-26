import { solve } from '../../../solutions-algorithm/37.js'


test('upper bound case with=50', () => {
    const result = solve(50);
    expect(result.length).toBe(50);
    expect(result[0]).toBe(1);
    expect(result[49]).toBeLessThanOrEqual(100);
});

test('verify increasing sequence property', () => {
    const result = solve(15);
    for (let i = 1; i < result.length; i++) {
        expect(result[i]).toBeGreaterThan(result[i - 1]);
    }
});