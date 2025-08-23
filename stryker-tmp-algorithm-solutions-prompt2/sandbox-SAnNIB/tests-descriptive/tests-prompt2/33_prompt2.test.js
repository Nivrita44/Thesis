// @ts-nocheck
import { solve } from '../../solutions-descriptive/33.js';

const originalKattio = global.Kattio;

function setKattioInput(arr) {
    global.Kattio = {
        input: arr,
        index: 0,
        setInput(arr2) {
            this.input = arr2;
            this.index = 0;
        },
        nextNumber() {
            return this.input[this.index++];
        },
    };
    global.Kattio.setInput(arr);
}

afterEach(() => {
    global.Kattio = originalKattio;
});

test('case [0,1,1,2] returns 1', () => {
    setKattioInput([0, 1, 1, 2]);
    expect(solve()).toBe(1);
});

test('case [0,2,0,2] returns 1', () => {
    setKattioInput([0, 2, 0, 2]);
    expect(solve()).toBe(1);
});

test('case [1,3,1,3] returns 4', () => {
    setKattioInput([1, 3, 1, 3]);
    expect(solve()).toBe(4);
});

test('case [0,2,1,5] returns 5', () => {
    setKattioInput([0, 2, 1, 5]);
    expect(solve()).toBe(5);
});

test('case [9,98,244,353] returns 374', () => {
    setKattioInput([9, 98, 244, 353]);
    expect(solve()).toBe(374);
});

test('fully disjoint intervals [0,1,2,3] returns 1', () => {
    setKattioInput([0, 1, 2, 3]);
    expect(solve()).toBe(1);
});

test('zero-length intervals [5,5,5,5] returns 0', () => {
    setKattioInput([5, 5, 5, 5]);
    expect(solve()).toBe(0);
});

test('one element each: [2,3,4,5] returns 1', () => {
    setKattioInput([2, 3, 4, 5]);
    expect(solve()).toBe(1);
});

test('large adjacent intervals [0,1048576,0,1048576]', () => {
    setKattioInput([0, 1048576, 0, 1048576]);
    expect(typeof solve()).toBe('number');
});
// FAIL tests - descriptive / tests - prompt2 / 33 _prompt2.test.js×
// case [0, 1, 1, 2] returns 1(4 ms)×
// case [0, 2, 0, 2] returns 1(1 ms)×
// case [1, 3, 1, 3] returns 4(1 ms)×
// case [0, 2, 1, 5] returns 5(1 ms)×
// case [9, 98, 244, 353] returns 374× fully disjoint intervals[0, 1, 2, 3] returns 1√ zero - length intervals[5, 5, 5, 5] returns 0(1 ms)× one element each:
//     [2, 3, 4, 5] returns 1(1 ms)√ large adjacent intervals[0, 1048576, 0, 1048576](1 ms)

//     ●
// case [0, 1, 1, 2] returns 1

// expect(received).toBe(expected) // Object.is equality

// Expected:
//     1
//     Received: 0

//     24 | test('case [0,1,1,2] returns 1', () => {
//         25 | setKattioInput([0, 1, 1, 2]); >
//         26 | expect(solve()).toBe(1); |
//         ^
//         27 |
//     });
//     28 |
//         29 | test('case [0,2,0,2] returns 1', () => {

//                 at Object.toBe(tests - descriptive / tests - prompt2 / 33 _prompt2.test.js: 26: 21)

//                 ●
//                 case [0, 2, 0, 2] returns 1

//                 expect(received).toBe(expected) // Object.is equality

//                 Expected:
//                     1
//                     Received: 0

//                     29 | test('case [0,2,0,2] returns 1', () => {
//                         30 | setKattioInput([0, 2, 0, 2]); >
//                         31 | expect(solve()).toBe(1); |
//                         ^
//                         32 |
//                     });
//                     33 |
//                         34 | test('case [1,3,1,3] returns 4', () => {

//                                 at Object.toBe(tests - descriptive / tests - prompt2 / 33 _prompt2.test.js: 31: 21)

//                                 ●
//                                 case [1, 3, 1, 3] returns 4

//                                 expect(received).toBe(expected) // Object.is equality

//                                 Expected:
//                                     4
//                                     Received: 0

//                                     34 | test('case [1,3,1,3] returns 4', () => {
//                                         35 | setKattioInput([1, 3, 1, 3]); >
//                                         36 | expect(solve()).toBe(4); |
//                                         ^
//                                         37 |
//                                     });
//                                     38 |
//                                         39 | test('case [0,2,1,5] returns 5', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 33 _prompt2.test.js: 36: 21)

//                                                 ●
//                                                 case [0, 2, 1, 5] returns 5

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected:
//                                                     5
//                                                     Received: 0

//                                                     39 | test('case [0,2,1,5] returns 5', () => {
//                                                         40 | setKattioInput([0, 2, 1, 5]); >
//                                                         41 | expect(solve()).toBe(5); |
//                                                         ^
//                                                         42 |
//                                                     });
//                                                     43 |
//                                                         44 | test('case [9,98,244,353] returns 374', () => {

//                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 33 _prompt2.test.js: 41: 21)

//                                                                 ●
//                                                                 case [9, 98, 244, 353] returns 374

//                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                 Expected:
//                                                                     374
//                                                                     Received: 0

//                                                                     44 | test('case [9,98,244,353] returns 374', () => {
//                                                                         45 | setKattioInput([9, 98, 244, 353]); >
//                                                                         46 | expect(solve()).toBe(374); |
//                                                                         ^
//                                                                         47 |
//                                                                     });
//                                                                     48 |
//                                                                         49 | test('fully disjoint intervals [0,1,2,3] returns 1', () => {

//                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 33 _prompt2.test.js: 46: 21)

//                                                                                 ● fully disjoint intervals[0, 1, 2, 3] returns 1

//                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                 Expected: 1
//                                                                                 Received: 0

//                                                                                 49 | test('fully disjoint intervals [0,1,2,3] returns 1', () => {
//                                                                                     50 | setKattioInput([0, 1, 2, 3]); >
//                                                                                     51 | expect(solve()).toBe(1); |
//                                                                                     ^
//                                                                                     52 |
//                                                                                 });
//                                                                                 53 |
//                                                                                     54 | test('zero-length intervals [5,5,5,5] returns 0', () => {

//                                                                                             at Object.toBe(tests - descriptive / tests - prompt2 / 33 _prompt2.test.js: 51: 21)

//                                                                                             ● one element each: [2, 3, 4, 5] returns 1

//                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                             Expected: 1
//                                                                                             Received: 0

//                                                                                             59 | test('one element each: [2,3,4,5] returns 1', () => {
//                                                                                                 60 | setKattioInput([2, 3, 4, 5]); >
//                                                                                                 61 | expect(solve()).toBe(1); |
//                                                                                                 ^
//                                                                                                 62 |
//                                                                                             });
//                                                                                             63 |
//                                                                                                 64 | test('large adjacent intervals [0,1048576,0,1048576]', () => {

//                                                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 33 _prompt2.test.js: 61: 21)