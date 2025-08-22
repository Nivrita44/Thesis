import { solve } from '../../solutions-descriptive/33.js';

const setKattioInput = (inputArr) => {
    global.Kattio = {
        input: inputArr,
        index: 0,
        nextNumber() {
            return this.input[this.index++]
        }
    }
}

describe('solve', () => {
    test('1x1 region', () => {
        setKattioInput([0, 1, 1, 2])
        expect(solve()).toBe(1)
    })
    test('full 2x2 region', () => {
        setKattioInput([0, 2, 0, 2])
        expect(solve()).toBe(1)
    })
    test('offset 2x2 region', () => {
        setKattioInput([1, 3, 1, 3])
        expect(solve()).toBe(4)
    })
    test('non-square region', () => {
        setKattioInput([0, 2, 1, 5])
        expect(solve()).toBe(5)
    })
    test('larger region', () => {
        setKattioInput([9, 98, 244, 353])
        expect(solve()).toBe(374)
    })
    test('minimum area at origin', () => {
        setKattioInput([0, 1, 0, 1])
        expect(solve()).toBe(1)
    })
    test('vertical line region', () => {
        setKattioInput([3, 8, 2, 3])
        expect(solve()).toBe(5)
    })
    test('horizontal line region', () => {
        setKattioInput([4, 5, 10, 27])
        expect(solve()).toBe(17)
    })
    test('tiny non-aligned region', () => {
        setKattioInput([5, 7, 8, 10])
        expect(solve()).toBe(4)
    })
    test('maximum input values', () => {
        setKattioInput([0, 1048576, 0, 1048576])
        expect(solve()).toBe(1)
    })
    test('1x1 region somewhere not at (0,0)', () => {
        setKattioInput([100, 101, 1000, 1001])
        expect(solve()).toBe(1)
    })
    test('cross 2 power boundaries', () => {
        setKattioInput([511, 513, 1023, 1025])
        expect(solve()).toBe(4)
    })
    test('vertical stripe of width 1', () => {
        setKattioInput([3, 4, 0, 16])
        expect(solve()).toBe(1)
    })
    test('horizontal stripe of height 1', () => {
        setKattioInput([0, 16, 3, 4])
        expect(solve()).toBe(1)
    })
    test('arbitrary region', () => {
        setKattioInput([12345, 23456, 34567, 45678])
        expect(solve()).toBe(11111)
    })
})

// FAIL tests - descriptive / tests - prompt3 / 33 _prompt3.test.js
// solve× 1 x1 region(4 ms)× full 2 x2 region(1 ms)× offset 2 x2 region× non - square region(1 ms)× larger region(1 ms)× minimum area at origin(1 ms)× vertical line region× horizontal line region(1 ms)× tiny non - aligned region× maximum input values(1 ms)× 1 x1 region somewhere not at(0, 0)× cross 2 power boundaries× vertical stripe of width 1× horizontal stripe of height 1× arbitrary region

// ● solve› 1 x1 region

// expect(received).toBe(expected) // Object.is equality

// Expected: 1
// Received: 0

// 14 | test('1x1 region', () => {
//     15 | setKattioInput([0, 1, 1, 2]) >
//         16 | expect(solve()).toBe(1) |
//         ^
//         17 |
// })
// 18 | test('full 2x2 region', () => {
//             19 | setKattioInput([0, 2, 0, 2])

//             at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 16: 25)

//             ● solve› full 2 x2 region

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 1
//             Received: 0

//             18 | test('full 2x2 region', () => {
//                 19 | setKattioInput([0, 2, 0, 2]) >
//                     20 | expect(solve()).toBe(1) |
//                     ^
//                     21 |
//             })
//             22 | test('offset 2x2 region', () => {
//                         23 | setKattioInput([1, 3, 1, 3])

//                         at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 20: 25)

//                         ● solve› offset 2 x2 region

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 4
//                         Received: 0

//                         22 | test('offset 2x2 region', () => {
//                             23 | setKattioInput([1, 3, 1, 3]) >
//                                 24 | expect(solve()).toBe(4) |
//                                 ^
//                                 25 |
//                         })
//                         26 | test('non-square region', () => {
//                                     27 | setKattioInput([0, 2, 1, 5])

//                                     at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 24: 25)

//                                     ● solve› non - square region

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 5
//                                     Received: 0

//                                     26 | test('non-square region', () => {
//                                         27 | setKattioInput([0, 2, 1, 5]) >
//                                             28 | expect(solve()).toBe(5) |
//                                             ^
//                                             29 |
//                                     })
//                                     30 | test('larger region', () => {
//                                                 31 | setKattioInput([9, 98, 244, 353])

//                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 28: 25)

//                                                 ● solve› larger region

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected: 374
//                                                 Received: 0

//                                                 30 | test('larger region', () => {
//                                                     31 | setKattioInput([9, 98, 244, 353]) >
//                                                         32 | expect(solve()).toBe(374) |
//                                                         ^
//                                                         33 |
//                                                 })
//                                                 34 | test('minimum area at origin', () => {
//                                                             35 | setKattioInput([0, 1, 0, 1])

//                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 32: 25)

//                                                             ● solve› minimum area at origin

//                                                             expect(received).toBe(expected) // Object.is equality

//                                                             Expected: 1
//                                                             Received: 0

//                                                             34 | test('minimum area at origin', () => {
//                                                                 35 | setKattioInput([0, 1, 0, 1]) >
//                                                                     36 | expect(solve()).toBe(1) |
//                                                                     ^
//                                                                     37 |
//                                                             })
//                                                             38 | test('vertical line region', () => {
//                                                                         39 | setKattioInput([3, 8, 2, 3])

//                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 36: 25)

//                                                                         ● solve› vertical line region

//                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                         Expected: 5
//                                                                         Received: 0

//                                                                         38 | test('vertical line region', () => {
//                                                                             39 | setKattioInput([3, 8, 2, 3]) >
//                                                                                 40 | expect(solve()).toBe(5) |
//                                                                                 ^
//                                                                                 41 |
//                                                                         })
//                                                                         42 | test('horizontal line region', () => {
//                                                                                     43 | setKattioInput([4, 5, 10, 27])

//                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 40: 25)

//                                                                                     ● solve› horizontal line region

//                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                     Expected: 17
//                                                                                     Received: 0

//                                                                                     42 | test('horizontal line region', () => {
//                                                                                         43 | setKattioInput([4, 5, 10, 27]) >
//                                                                                             44 | expect(solve()).toBe(17) |
//                                                                                             ^
//                                                                                             45 |
//                                                                                     })
//                                                                                     46 | test('tiny non-aligned region', () => {
//                                                                                                 47 | setKattioInput([5, 7, 8, 10])

//                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 44: 25)

//                                                                                                 ● solve› tiny non - aligned region

//                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                 Expected: 4
//                                                                                                 Received: 0

//                                                                                                 46 | test('tiny non-aligned region', () => {
//                                                                                                     47 | setKattioInput([5, 7, 8, 10]) >
//                                                                                                         48 | expect(solve()).toBe(4) |
//                                                                                                         ^
//                                                                                                         49 |
//                                                                                                 })
//                                                                                                 50 | test('maximum input values', () => {
//                                                                                                             51 | setKattioInput([0, 1048576, 0, 1048576])

//                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 48: 25)

//                                                                                                             ● solve› maximum input values

//                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                             Expected: 1
//                                                                                                             Received: 0

//                                                                                                             50 | test('maximum input values', () => {
//                                                                                                                 51 | setKattioInput([0, 1048576, 0, 1048576]) >
//                                                                                                                     52 | expect(solve()).toBe(1) |
//                                                                                                                     ^
//                                                                                                                     53 |
//                                                                                                             })
//                                                                                                             54 | test('1x1 region somewhere not at (0,0)', () => {
//                                                                                                                         55 | setKattioInput([100, 101, 1000, 1001])

//                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 52: 25)

//                                                                                                                         ● solve› 1 x1 region somewhere not at(0, 0)

//                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                         Expected: 1
//                                                                                                                         Received: 0

//                                                                                                                         54 | test('1x1 region somewhere not at (0,0)', () => {
//                                                                                                                             55 | setKattioInput([100, 101, 1000, 1001]) >
//                                                                                                                                 56 | expect(solve()).toBe(1) |
//                                                                                                                                 ^
//                                                                                                                                 57 |
//                                                                                                                         })
//                                                                                                                         58 | test('cross 2 power boundaries', () => {
//                                                                                                                                     59 | setKattioInput([511, 513, 1023, 1025])

//                                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 56: 25)

//                                                                                                                                     ● solve› cross 2 power boundaries

//                                                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                                                     Expected: 4
//                                                                                                                                     Received: 0

//                                                                                                                                     58 | test('cross 2 power boundaries', () => {
//                                                                                                                                         59 | setKattioInput([511, 513, 1023, 1025]) >
//                                                                                                                                             60 | expect(solve()).toBe(4) |
//                                                                                                                                             ^
//                                                                                                                                             61 |
//                                                                                                                                     })
//                                                                                                                                     62 | test('vertical stripe of width 1', () => {
//                                                                                                                                                 63 | setKattioInput([3, 4, 0, 16])

//                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 60: 25)

//                                                                                                                                                 ● solve› vertical stripe of width 1

//                                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                 Expected: 1
//                                                                                                                                                 Received: 0

//                                                                                                                                                 62 | test('vertical stripe of width 1', () => {
//                                                                                                                                                     63 | setKattioInput([3, 4, 0, 16]) >
//                                                                                                                                                         64 | expect(solve()).toBe(1) |
//                                                                                                                                                         ^
//                                                                                                                                                         65 |
//                                                                                                                                                 })
//                                                                                                                                                 66 | test('horizontal stripe of height 1', () => {
//                                                                                                                                                             67 | setKattioInput([0, 16, 3, 4])

//                                                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 64: 25)

//                                                                                                                                                             ● solve› horizontal stripe of height 1

//                                                                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                             Expected: 1
//                                                                                                                                                             Received: 0

//                                                                                                                                                             66 | test('horizontal stripe of height 1', () => {
//                                                                                                                                                                 67 | setKattioInput([0, 16, 3, 4]) >
//                                                                                                                                                                     68 | expect(solve()).toBe(1) |
//                                                                                                                                                                     ^
//                                                                                                                                                                     69 |
//                                                                                                                                                             })
//                                                                                                                                                             70 | test('arbitrary region', () => {
//                                                                                                                                                                 71 | setKattioInput([12345, 23456, 34567, 45678])

//                                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 68: 25)

//                                                                                                                                                                 ● solve› arbitrary region

//                                                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                 Expected: 11111
//                                                                                                                                                                 Received: 0

//                                                                                                                                                                 70 | test('arbitrary region', () => {
//                                                                                                                                                                     71 | setKattioInput([12345, 23456, 34567, 45678]) >
//                                                                                                                                                                         72 | expect(solve()).toBe(11111) |
//                                                                                                                                                                         ^
//                                                                                                                                                                         73 |
//                                                                                                                                                                 })
//                                                                                                                                                                 74 |
//                                                                                                                                                             })

//                                                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 33 _prompt3.test.js: 72: 25)
