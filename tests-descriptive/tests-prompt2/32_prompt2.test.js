import { solve } from '../../solutions-descriptive/32.js'

let inputData = [];
let outputData = [];
global.readInt = () => inputData.shift();
global.writeInt = (x, nl) => outputData.push(x);

beforeEach(() => {
    inputData = [];
    outputData = [];
});

test('all primes, n = 1', () => {
    inputData = [1, 2];
    solve();
    expect(outputData[0]).toBe(2);
});

test('all even, no prime', () => {
    inputData = [3, 4, 6, 8];
    solve();
    expect(outputData[0]).toBe(2);
});

test('array has a single prime, easy case', () => {
    inputData = [3, 13, 18, 24];
    solve();
    expect(outputData[0]).toBe(13);
});

test('array has multiple primes', () => {
    inputData = [4, 7, 13];
    solve();
    expect(outputData[0]).toBe(-1);
});

test('only composite', () => {
    inputData = [2, 4, 9, 27];
    solve();
    expect(outputData[0]).toBe(2);
});

test('primes with constraint failure on even', () => {
    inputData = [7, 8];
    solve();
    expect(outputData[0]).toBe(-1);
});

test('primes with constraint failure on odd', () => {
    inputData = [11, 13];
    solve();
    expect(outputData[0]).toBe(-1);
});

test('prime, big even passes', () => {
    inputData = [3, 20];
    solve();
    expect(outputData[0]).toBe(3);
});

test('prime, big odd passes', () => {
    inputData = [13, 40];
    solve();
    expect(outputData[0]).toBe(13);
});

test('one element array, composite', () => {
    inputData = [1, 9];
    solve();
    expect(outputData[0]).toBe(2);
});

test('one element array, prime', () => {
    inputData = [1, 17];
    solve();
    expect(outputData[0]).toBe(17);
});

test('constraint fails for composite odd', () => {
    inputData = [3, 9, 12];
    solve();
    expect(outputData[0]).toBe(-1);
});

test('minimal input, just one prime', () => {
    inputData = [1, 3];
    solve();
    expect(outputData[0]).toBe(3);
});

test('2 primes and other values', () => {
    inputData = [5, 2, 7, 6, 14, 21, 24];
    solve();
    expect(outputData[0]).toBe(-1);
});

test('prime and mixed numbers, valid', () => {
    inputData = [4, 5, 10, 12, 16];
    solve();
    expect(outputData[0]).toBe(5);
});

test('prime and mixed numbers, fail on composite', () => {
    inputData = [3, 5, 8, 9];
    solve();
    expect(outputData[0]).toBe(-1);
});

test('largest values under limit, only composite', () => {
    inputData = [3, 400000, 399996, 399992];
    solve();
    expect(outputData[0]).toBe(2);
});

test('largest value is prime', () => {
    inputData = [2, 399989, 100000];
    solve();
    expect(outputData[0]).toBe(399989);
});


// FAIL tests - descriptive / tests - prompt2 / 32 _prompt2.test.js√ all primes, n = 1(27 ms)√ all even, no prime× array has a single prime, easy
// case (2 ms)√ array has multiple primes(1 ms)√ only composite× primes with constraint failure on even√ primes with constraint failure on odd(1 ms)× prime, big even passes(1 ms)× prime, big odd passes(1 ms)√ one element array, composite√ one element array, prime× constraint fails
// for composite odd√ minimal input, just one prime(1 ms)√ 2 primes and other values(1 ms)√ prime and mixed numbers, valid(1 ms)√ prime and mixed numbers, fail on composite(1 ms)√ largest values under limit, only composite(1 ms)× largest value is prime

// ● array has a single prime, easy
// case

// expect(received).toBe(expected) // Object.is equality

// Expected:
//     13
//     Received: -1

//     26 | inputData = [3, 13, 18, 24];
//     27 | solve(); >
//     28 | expect(outputData[0]).toBe(13); |
//     ^
//     29 |
// });
//     30 |
//         31 | test('array has multiple primes', () => {

//             at Object.toBe(tests - descriptive / tests - prompt2 / 32 _prompt2.test.js: 28: 25)

//             ● primes with constraint failure on even

//             expect(received).toBe(expected) // Object.is equality

//             Expected: -1
//             Received: 2

//             44 | inputData = [7, 8];
//             45 | solve(); >
//             46 | expect(outputData[0]).toBe(-1); |
//             ^
//             47 |
//         });
//     48 |
//         49 | test('primes with constraint failure on odd', () => {

//             at Object.toBe(tests - descriptive / tests - prompt2 / 32 _prompt2.test.js: 46: 25)

//             ● prime, big even passes

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 3
//             Received: 2

//             56 | inputData = [3, 20];
//             57 | solve(); >
//             58 | expect(outputData[0]).toBe(3); |
//             ^
//             59 |
//         });
//     60 |
//         61 | test('prime, big odd passes', () => {

//             at Object.toBe(tests - descriptive / tests - prompt2 / 32 _prompt2.test.js: 58: 25)

//             ● prime, big odd passes

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 13
//             Received: 2

//             62 | inputData = [13, 40];
//             63 | solve(); >
//             64 | expect(outputData[0]).toBe(13); |
//             ^
//             65 |
//         });
//     66 |
//         67 | test('one element array, composite', () => {

//             at Object.toBe(tests - descriptive / tests - prompt2 / 32 _prompt2.test.js: 64: 25)

//             ● constraint fails
//             for composite odd

//             expect(received).toBe(expected) // Object.is equality

//             Expected: -1
//             Received: 2

//             80 | inputData = [3, 9, 12];
//             81 | solve(); >
//             82 | expect(outputData[0]).toBe(-1); |
//             ^
//             83 |
//         });
//     84 |
//         85 | test('minimal input, just one prime', () => {

//             at Object.toBe(tests - descriptive / tests - prompt2 / 32 _prompt2.test.js: 82: 25)

//             ● largest value is prime

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 399989
//             Received: -1

//             116 | inputData = [2, 399989, 100000];
//             117 | solve(); >
//             118 | expect(outputData[0]).toBe(399989); |
//             ^
//             119 |
//         });

//     at Object.toBe(tests - descriptive / tests - prompt2 / 32 _prompt2.test.js: 118: 25)