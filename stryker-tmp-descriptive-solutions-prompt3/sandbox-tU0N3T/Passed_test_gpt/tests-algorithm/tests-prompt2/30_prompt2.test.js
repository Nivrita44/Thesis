import { solve } from '../../../solutions-algorithm/30.js';

test('large input', () => {
    expect(solve(1, [100])).toContain("YES");
    expect(solve(1, [100])).toHaveLength(2);
});

test('test where only one partition possible', () => {
    expect(solve(1, [5])).toEqual(["YES", "2 2 1"]);
    expect(solve(1, [7])).toEqual(["YES", "5 1 1"]);
});

test('empty input', () => {
    expect(solve(0, [])).toEqual([]);
});
