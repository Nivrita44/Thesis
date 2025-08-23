// @ts-nocheck
import { solve } from '../../solutions-descriptive/34.js';

test('solve totalX < totalY', () => {
    expect(solve([1, 2, 3], [10, 10, 10])).toBe("-1");
});

test('solve identical arrays, peak+1 <= 1e9', () => {
    expect(solve([2, 3, 5], [2, 3, 5])).toBe("6");
});

test('solve identical arrays, peak+1 > 1e9', () => {
    expect(solve([1000000000], [1000000000])).toBe("-1");
});

test('solve arrays not matching when totals equal', () => {
    expect(solve([1, 2, 7], [2, 3, 5])).toBe("-1");
});

test('solve diffVal case that works (simple mod mapping)', () => {
    expect(solve([8, 9, 10], [2, 3, 4])).toBe("6");
});

test('solve diffVal with multiple factors', () => {
    expect(solve([13, 14, 15], [1, 2, 3])).toBe("12");
});

test('solve no valid candidateFactor', () => {
    expect(solve([1, 2, 3], [0, 2, 5])).toBe("-1");
});

test('solve candidateFactor equals peakY', () => {
    expect(solve([5, 10, 15], [0, 5, 10])).toBe("-1");
});

test('solve candidateFactor > 1e9', () => {
    expect(solve([1000000001, 1000000002], [1, 2])).toBe("-1");
});

test('solve empty arrays', () => {
    expect(solve([], [])).toBe("1");
});

test('solve empty setY, setX nonempty', () => {
    expect(solve([1, 2, 3], [])).toBe("4");
});

test('solve setY empty and setX empty', () => {
    expect(solve([], [])).toBe("1");
});

test('solve one element, mapping with mod', () => {
    expect(solve([10], [2])).toBe("8");
});

test('solve larger array with multiple mods possible', () => {
    expect(solve([15, 23, 31], [7, 15, 23])).toBe("8");
});

test('solve negative numbers: totals', () => {
    expect(solve([-1, -2, -3], [-1, -2, -3])).toBe("-1");
});

test('solve zeros, equal arrays', () => {
    expect(solve([0, 0, 0], [0, 0, 0])).toBe("1");
});

test('solve zeros, mapping', () => {
    expect(solve([5, 10, 15], [0, 5, 10])).toBe("-1");
});

test('solve duplicate values, arrays matching', () => {
    expect(solve([2, 2, 2], [2, 2, 2])).toBe("3");
});

test('solve duplicate values, not matching for mod', () => {
    expect(solve([3, 3, 3], [0, 1, 2])).toBe("-1");
});

test('solve edge: single value, setY empty', () => {
    expect(solve([5], [])).toBe("6");
});
// FAIL tests - descriptive / tests - prompt2 / 34 _prompt2.test.js√ solve totalX < totalY(2 ms)× solve identical arrays, peak + 1 <= 1e9(2 ms)√ solve identical arrays, peak + 1 > 1e9√ solve arrays not matching when totals equal(1 ms)√ solve diffVal
// case that works(simple mod mapping)(1 ms)× solve diffVal with multiple factors(2 ms)√ solve no valid candidateFactor× solve candidateFactor equals peakY(1 ms)× solve candidateFactor > 1e9(4 ms)× solve empty arrays(1 ms)× solve empty setY, setX nonempty× solve setY empty and setX empty(1 ms)× solve one element, mapping with mod× solve larger array with multiple mods possible× solve negative numbers:
//     totals× solve zeros, equal arrays× solve zeros, mapping(1 ms)× solve duplicate values, arrays matching(1 ms)√ solve duplicate values, not matching
//     for mod(4 ms)× solve edge: single value, setY empty(1 ms)

//     ● solve identical arrays, peak + 1 <= 1e9

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "6"
//     Received: 6

//     6 |
//         7 | test('solve identical arrays, peak+1 <= 1e9', () => { >
//             8 | expect(solve([2, 3, 5], [2, 3, 5])).toBe("6"); |
//             ^
//             9 |
//         });
//     10 |
//         11 | test('solve identical arrays, peak+1 > 1e9', () => {

//                 at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 8: 39)

//                 ● solve diffVal with multiple factors

//                 expect(received).toBe(expected) // Object.is equality

//                 Expected: "12"
//                 Received: "4"

//                 22 |
//                     23 | test('solve diffVal with multiple factors', () => { >
//                         24 | expect(solve([13, 14, 15], [1, 2, 3])).toBe("12"); |
//                         ^
//                         25 |
//                     });
//                 26 |
//                     27 | test('solve no valid candidateFactor', () => {

//                             at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 24: 42)

//                             ● solve candidateFactor equals peakY

//                             expect(received).toBe(expected) // Object.is equality

//                             Expected: "-1"
//                             Received: "15"

//                             30 |
//                                 31 | test('solve candidateFactor equals peakY', () => { >
//                                     32 | expect(solve([5, 10, 15], [0, 5, 10])).toBe("-1"); |
//                                     ^
//                                     33 |
//                                 });
//                             34 |
//                                 35 | test('solve candidateFactor > 1e9', () => {

//                                         at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 32: 42)

//                                         ● solve candidateFactor > 1e9

//                                         expect(received).toBe(expected) // Object.is equality

//                                         Expected: "-1"
//                                         Received: "4"

//                                         34 |
//                                             35 | test('solve candidateFactor > 1e9', () => { >
//                                                 36 | expect(solve([1000000001, 1000000002], [1, 2])).toBe("-1"); |
//                                                 ^
//                                                 37 |
//                                             });
//                                         38 |
//                                             39 | test('solve empty arrays', () => {

//                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 36: 51)

//                                                     ● solve empty arrays

//                                                     expect(received).toBe(expected) // Object.is equality

//                                                     Expected: "1"
//                                                     Received: 1

//                                                     38 |
//                                                         39 | test('solve empty arrays', () => { >
//                                                             40 | expect(solve([], [])).toBe("1"); |
//                                                             ^
//                                                             41 |
//                                                         });
//                                                     42 |
//                                                         43 | test('solve empty setY, setX nonempty', () => {

//                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 40: 25)

//                                                                 ● solve empty setY, setX nonempty

//                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                 Expected: "4"
//                                                                 Received: "-1"

//                                                                 42 |
//                                                                     43 | test('solve empty setY, setX nonempty', () => { >
//                                                                         44 | expect(solve([1, 2, 3], [])).toBe("4"); |
//                                                                         ^
//                                                                         45 |
//                                                                     });
//                                                                 46 |
//                                                                     47 | test('solve setY empty and setX empty', () => {

//                                                                             at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 44: 32)

//                                                                             ● solve setY empty and setX empty

//                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                             Expected: "1"
//                                                                             Received: 1

//                                                                             46 |
//                                                                                 47 | test('solve setY empty and setX empty', () => { >
//                                                                                     48 | expect(solve([], [])).toBe("1"); |
//                                                                                     ^
//                                                                                     49 |
//                                                                                 });
//                                                                             50 |
//                                                                                 51 | test('solve one element, mapping with mod', () => {

//                                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 48: 25)

//                                                                                         ● solve one element, mapping with mod

//                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                         Expected: "8"
//                                                                                         Received: "4"

//                                                                                         50 |
//                                                                                             51 | test('solve one element, mapping with mod', () => { >
//                                                                                                 52 | expect(solve([10], [2])).toBe("8"); |
//                                                                                                 ^
//                                                                                                 53 |
//                                                                                             });
//                                                                                         54 |
//                                                                                             55 | test('solve larger array with multiple mods possible', () => {

//                                                                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 52: 28)

//                                                                                                     ● solve larger array with multiple mods possible

//                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                     Expected: "8"
//                                                                                                     Received: "24"

//                                                                                                     54 |
//                                                                                                         55 | test('solve larger array with multiple mods possible', () => { >
//                                                                                                             56 | expect(solve([15, 23, 31], [7, 15, 23])).toBe("8"); |
//                                                                                                             ^
//                                                                                                             57 |
//                                                                                                         });
//                                                                                                     58 |
//                                                                                                         59 | test('solve negative numbers: totals', () => {

//                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 56: 44)

//                                                                                                                 ● solve negative numbers: totals

//                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                 Expected: "-1"
//                                                                                                                 Received: 1

//                                                                                                                 58 |
//                                                                                                                     59 | test('solve negative numbers: totals', () => { >
//                                                                                                                         60 | expect(solve([-1, -2, -3], [-1, -2, -3])).toBe("-1"); |
//                                                                                                                         ^
//                                                                                                                         61 |
//                                                                                                                     });
//                                                                                                                 62 |
//                                                                                                                     63 | test('solve zeros, equal arrays', () => {

//                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 60: 45)

//                                                                                                                             ● solve zeros, equal arrays

//                                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                                             Expected: "1"
//                                                                                                                             Received: 1

//                                                                                                                             62 |
//                                                                                                                                 63 | test('solve zeros, equal arrays', () => { >
//                                                                                                                                     64 | expect(solve([0, 0, 0], [0, 0, 0])).toBe("1"); |
//                                                                                                                                     ^
//                                                                                                                                     65 |
//                                                                                                                                 });
//                                                                                                                             66 |
//                                                                                                                                 67 | test('solve zeros, mapping', () => {

//                                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 64: 39)

//                                                                                                                                         ● solve zeros, mapping

//                                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                                         Expected: "-1"
//                                                                                                                                         Received: "15"

//                                                                                                                                         66 |
//                                                                                                                                             67 | test('solve zeros, mapping', () => { >
//                                                                                                                                                 68 | expect(solve([5, 10, 15], [0, 5, 10])).toBe("-1"); |
//                                                                                                                                                 ^
//                                                                                                                                                 69 |
//                                                                                                                                             });
//                                                                                                                                         70 |
//                                                                                                                                             71 | test('solve duplicate values, arrays matching', () => {

//                                                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 68: 42)

//                                                                                                                                                     ● solve duplicate values, arrays matching

//                                                                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                     Expected: "3"
//                                                                                                                                                     Received: 3

//                                                                                                                                                     70 |
//                                                                                                                                                         71 | test('solve duplicate values, arrays matching', () => { >
//                                                                                                                                                             72 | expect(solve([2, 2, 2], [2, 2, 2])).toBe("3"); |
//                                                                                                                                                             ^
//                                                                                                                                                             73 |
//                                                                                                                                                         });
//                                                                                                                                                     74 |
//                                                                                                                                                         75 | test('solve duplicate values, not matching for mod', () => {

//                                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 72: 39)

//                                                                                                                                                                 ● solve edge: single value, setY empty

//                                                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                 Expected: "6"
//                                                                                                                                                                 Received: "-1"

//                                                                                                                                                                 78 |
//                                                                                                                                                                     79 | test('solve edge: single value, setY empty', () => { >
//                                                                                                                                                                         80 | expect(solve([5], [])).toBe("6"); |
//                                                                                                                                                                         ^
//                                                                                                                                                                         81 |
//                                                                                                                                                                     });

//                                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 34 _prompt2.test.js: 80: 26)