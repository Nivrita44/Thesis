import { solve } from '../../../solutions-algorithm/29.js';

describe('PIN code minimum seconds', () => {
    test('Example test case with single code "1234"', () => {
        expect(solve(['1234'])).toEqual([7]);
    });

    test('All same digits "1111"', () => {
        expect(solve(['1111'])).toEqual([4]);
    });

    test('Zero sequence "0000"', () => {
        expect(solve(['0000'])).toEqual([13]);
    });

    test('Nine sequence "9999"', () => {
        expect(solve(['9999'])).toEqual([12]);
    });

    test('Multiple pin codes', () => {
        expect(solve(['1236', '1010', '1920'])).toEqual([9, 31, 27]);
    });

    test('Complex pin codes with jumps', () => {
        expect(solve(['9273', '7492'])).toEqual([28, 25]);
    });

    test('Pin codes starting with zero', () => {
        expect(solve(['0294', '0000'])).toEqual([33, 13]);
    });

    test('Pin codes ending with zero', () => {
        expect(solve(['1920', '8360'])).toEqual([27, 23]);
    });
});
