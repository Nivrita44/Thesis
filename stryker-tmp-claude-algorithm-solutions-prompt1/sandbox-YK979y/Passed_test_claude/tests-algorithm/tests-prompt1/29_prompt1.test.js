import { solve } from '../../../solutions-algorithm/29.js';

test('example case "1234"', () => {
    expect(solve(['1234'])).toEqual([7]);
});

test('same digit repeated "1111"', () => {
    expect(solve(['1111'])).toEqual([4]);
});

