import { solve } from '../../../solutions-algorithm/29.js';


test('maximum moves with wrap around to 0', () => {
    expect(solve(['1230'])).toEqual([13]);
});

test('all same digits 1', () => {
    expect(solve(['1111'])).toEqual([4]);
});

test('pin ends in zero', () => {
    expect(solve(['1110'])).toEqual([13]);
});

test('pin with decreasing order', () => {
    expect(solve(['4321'])).toEqual([10]);
});
