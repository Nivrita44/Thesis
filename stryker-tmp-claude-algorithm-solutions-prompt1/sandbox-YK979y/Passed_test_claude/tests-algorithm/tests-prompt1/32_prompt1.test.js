import { solve } from '../../../solutions-algorithm/32.js';


test('minimal case=1', () => {
    const input = [{ N: 1, A: [1], B: [1], C: [1] }];
    expect(solve(input)).toEqual([1]);
});

test('edge case with all positions fixed', () => {
    const input = [{ N: 4, A: [1, 2, 3, 4], B: [4, 3, 2, 1], C: [1, 2, 3, 4] }];
    expect(solve(input)).toEqual([1]);
});

test('case with only one unknown position', () => {
    const input = [{ N: 3, A: [3, 1, 2], B: [2, 3, 1], C: [3, 0, 2] }];
    expect(solve(input)).toEqual([1]);
});