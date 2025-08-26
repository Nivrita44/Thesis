import { solve } from '../../../solutions-algorithm/4.js';

test('typical case [4, 7, 3, 5]', () => {
    expect(solve([4, 7, 3, 5])).toEqual([-3, 2, -4, -2]);
});

test('two elements [1, 2]', () => {
    expect(solve([1, 2])).toEqual([-1, 1]);
});

test('increasing sequence [1, 2, 3, 4, 5]', () => {
    expect(solve([1, 2, 3, 4, 5])).toEqual([-4, -3, -2, -1, 1]);
});

test('duplicate non-max and max [4, 9, 4]', () => {
    expect(solve([4, 9, 4])).toEqual([-5, 5, -5]);
});

test('all elements equal [4, 4, 4, 4]', () => {
    expect(solve([4, 4, 4, 4])).toEqual([0, 0, 0, 0]);
});

test('single element array [10]', () => {
    expect(solve([10])).toEqual([0]);
});

test('negative numbers [-3, -2, -1]', () => {
    expect(solve([-3, -2, -1])).toEqual([-2, -1, 1]);
});

test('mix negative and positive [-2, 5, -6, 0]', () => {
    expect(solve([-2, 5, -6, 0])).toEqual([-7, 7, -11, -5]);
});

test('all negative numbers [-7, -1, -5, -3]', () => {
    expect(solve([-7, -1, -5, -3])).toEqual([-6, 6, -4, -2]);
});

test('large numbers [1000, 2000, 3000, 4000]', () => {
    expect(solve([1000, 2000, 3000, 4000])).toEqual([-3000, -2000, -1000, 1000]);
});

test('array with duplicate max values [3, 6, 6, 2]', () => {
    expect(solve([3, 6, 6, 2])).toEqual([-3, 0, 0, -4]);
});

test('empty array', () => {
    expect(solve([])).toEqual([]);
});



// FAIL tests - algorithm / tests - prompt2 / 4 _prompt2.test.js√ typical
// case [4, 7, 3, 5](3 ms)√ two elements[1, 2](1 ms)√ increasing sequence[1, 2, 3, 4, 5]√ duplicate non - max and max[4, 9, 4]√ all elements equal[4, 4, 4, 4]× single element array[10](13 ms)√ negative numbers[-3, -2, -1](1 ms)× mix negative and positive[-2, 5, -6, 0](39 ms)× all negative numbers[-7, -1, -5, -3](5 ms)√ large numbers[1000, 2000, 3000, 4000](7 ms)√ array with duplicate max values[3, 6, 6, 2](3 ms)√ empty array(1 ms)

// ● single element array[10]

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
// Received + 1

// Array[-0, +NaN, ]

// 22 |
// 23 | test('single element array [10]', () => { >
//     24 | expect(solve([10])).toEqual([0]); |
//     ^
//     25 |
// });
// 26 |
// 27 | test('negative numbers [-3, -2, -1]', () => {

//         at Object.toEqual(tests - algorithm / tests - prompt2 / 4 _prompt2.test.js: 24: 23)

//         ● mix negative and positive[-2, 5, -6, 0]

//         expect(received).toEqual(expected) // deep equality

//         -
//         Expected - 1 +
//             Received + 1

//         Array[-7, -7, +5, -11, -5, ]

//         30 |
//             31 | test('mix negative and positive [-2, 5, -6, 0]', () => { >
//                 32 | expect(solve([-2, 5, -6, 0])).toEqual([-7, 7, -11, -5]); |
//                 ^
//                 33 |
//             });
//         34 |
//             35 | test('all negative numbers [-7, -1, -5, -3]', () => {

//                     at Object.toEqual(tests - algorithm / tests - prompt2 / 4 _prompt2.test.js: 32: 33)

//                     ● all negative numbers[-7, -1, -5, -3]

//                     expect(received).toEqual(expected) // deep equality

//                     -
//                     Expected - 1 +
//                         Received + 1

//                     Array[-6, -6, +2, -4, -2, ]

//                     34 |
//                         35 | test('all negative numbers [-7, -1, -5, -3]', () => { >
//                             36 | expect(solve([-7, -1, -5, -3])).toEqual([-6, 6, -4, -2]); |
//                             ^
//                             37 |
//                         });
//                     38 |
//                         39 | test('large numbers [1000, 2000, 3000, 4000]', () => {

//                                 at Object.toEqual(tests - algorithm / tests - prompt2 / 4 _prompt2.test.js: 36: 35)
