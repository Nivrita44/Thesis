// @ts-nocheck
import { solve } from '../../../solutions-algorithm/29.js';


test('empty string pin', () => {
    expect(solve([''])).toEqual([4]);
});

test('multiple pins with mixed types', () => {
    expect(solve(['', '1', '0', '9'])).toEqual([4, 4, 13, 12]);
});
