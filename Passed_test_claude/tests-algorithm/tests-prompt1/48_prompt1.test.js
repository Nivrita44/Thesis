import { solve } from '../../../solutions-algorithm/48.js'

test('example case', () => {
    expect(solve(4, 2, 3, [
        [1, 2],
        [1, 3],
        [2, 4]
    ])).toBe(2);
});


test('linear tree with sufficient resources', () => {
    expect(solve(5, 4, 10, [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5]
    ])).toBe(4);
});

test('star shaped tree', () => {
    expect(solve(6, 5, 8, [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5],
        [1, 6]
    ])).toBe(5);
});