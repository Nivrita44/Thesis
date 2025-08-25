import { solve } from '../../../solutions-algorithm/41.js';


test('disconnected graph witho path', () => {
    expect(solve(3, [
        [1, 2, 1]
    ])).toBe('-1');
});


test('empty graph with just vertices', () => {
    expect(solve(5, [])).toBe('-1');
});