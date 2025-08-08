import { solve } from '../../solutions-descriptive/16.js'

test('Single letter A, allowed once', () => {
    expect(solve('A', 1, 0, 0, 0)).toBe('YES')
})

test('Single letter B, allowed once', () => {
    expect(solve('B', 0, 1, 0, 0)).toBe('YES')
})

test('Single letter A, not allowed', () => {
    expect(solve('A', 0, 0, 0, 0)).toBe('NO')
})

test('String of all As, enough a but no ab/ba', () => {
    expect(solve('AAA', 3, 0, 0, 0)).toBe('YES')
})

test('String all Bs, enough b but no ab/ba', () => {
    expect(solve('BBBB', 0, 4, 0, 0)).toBe('YES')
})

test('Alternating AB, both ab and ba allowed', () => {
    expect(solve('ABAB', 0, 0, 2, 1)).toBe('YES')
})

test('Alternating BA, insufficient ab', () => {
    expect(solve('BABA', 0, 0, 0, 3)).toBe('YES')
})

test('Alternating ABAB, insufficient ab/ba', () => {
    expect(solve('ABAB', 0, 0, 1, 0)).toBe('NO')
})

test('Double "A" forbidden', () => {
    expect(solve('AA', 2, 0, 0, 0)).toBe('NO')
})

test('Double "B" forbidden', () => {
    expect(solve('BB', 0, 2, 0, 0)).toBe('NO')
})

test('String with both types, full split', () => {
    expect(solve('AAABBB', 3, 3, 0, 0)).toBe('YES')
})

test('Requires AB and BA splits', () => {
    expect(solve('ABBA', 0, 0, 1, 1)).toBe('YES')
})

test('Large number of As, insufficient a', () => {
    expect(solve('AAAAA', 4, 0, 0, 0)).toBe('NO')
})

test('Minimum requirements for AB', () => {
    expect(solve('AB', 0, 0, 1, 0)).toBe('YES')
})

test('Minimum requirements for BA', () => {
    expect(solve('BA', 0, 0, 0, 1)).toBe('YES')
})

test('Odd alternating, just enough ab and ba', () => {
    expect(solve('ABABA', 0, 0, 2, 2)).toBe('YES')
})

test('Odd alternating, not enough ab and ba', () => {
    expect(solve('ABABA', 0, 0, 1, 1)).toBe('NO')
})

test('No blocks allowed', () => {
    expect(solve('ABAB', 0, 0, 0, 0)).toBe('NO')
})

test('Only ab blocks allowed, ab insufficient', () => {
    expect(solve('ABABAB', 0, 0, 2, 0)).toBe('NO')
})

test('Zero-length string, always allowed', () => {
    expect(solve('', 0, 0, 0, 0)).toBe('YES')
})

test('Only singles allowed for mixed s', () => {
    expect(solve('AABB', 2, 2, 0, 0)).toBe('YES')
})

test('Cannot split to match limits', () => {
    expect(solve('ABBAAB', 0, 0, 1, 1)).toBe('NO')
})

test('Long block of AB, strict limits', () => {
    expect(solve('ABABABAB', 0, 0, 4, 0)).toBe('YES')
})

test('Long block of BA, strict limits', () => {
    expect(solve('BABABABA', 0, 0, 0, 4)).toBe('YES')
})

test('Long string, too few blocks', () => {
    expect(solve('AABBAABB', 2, 2, 0, 0)).toBe('NO')
})


// FAIL tests - descriptive / tests - prompt3 / 16 _prompt3.test.js× Single letter A, allowed once(4 ms)× Single letter B, allowed once× Single letter A, not allowed(1 ms)× String of all As, enough a but no ab / ba(1 ms)× String all Bs, enough b but no ab / ba× Alternating AB, both ab and ba allowed× Alternating BA, insufficient ab× Alternating ABAB, insufficient ab / ba(1 ms)× Double "A"
// forbidden(1 ms)× Double "B"
// forbidden× String with both types, full split(1 ms)× Requires AB and BA splits(1 ms)× Large number of As, insufficient a× Minimum requirements
// for AB× Minimum requirements
// for BA× Odd alternating, just enough ab and ba× Odd alternating, not enough ab and ba× No blocks allowed× Only ab blocks allowed, ab insufficient(1 ms)× Zero - length string, always allowed× Only singles allowed
// for mixed s× Cannot split to match limits(1 ms)× Long block of AB, strict limits× Long block of BA, strict limits× Long string, too few blocks(1 ms)

// ● Single letter A, allowed once

// expect(received).toBe(expected) // Object.is equality

// Expected: "YES"
// Received: 1000000000

// 2 |
//     3 | test('Single letter A, allowed once', () => { >
//         4 | expect(solve('A', 1, 0, 0, 0)).toBe('YES') |
//             ^
//             5 |
//     })
// 6 |
//     7 | test('Single letter B, allowed once', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 4: 34)

//             ● Single letter B, allowed once

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "YES"
//             Received: 0

//             6 |
//                 7 | test('Single letter B, allowed once', () => { >
//                     8 | expect(solve('B', 0, 1, 0, 0)).toBe('YES') |
//                         ^
//                         9 |
//                 })
//             10 |
//                 11 | test('Single letter A, not allowed', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 8: 34)

//                         ● Single letter A, not allowed

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: "NO"
//                         Received: 0

//                         10 |
//                             11 | test('Single letter A, not allowed', () => { >
//                                 12 | expect(solve('A', 0, 0, 0, 0)).toBe('NO') |
//                                     ^
//                                     13 |
//                             })
//                         14 |
//                             15 | test('String of all As, enough a but no ab/ba', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 12: 34)

//                                     ● String of all As, enough a but no ab / ba

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: "YES"
//                                     Received: 1000000000

//                                     14 |
//                                         15 | test('String of all As, enough a but no ab/ba', () => { >
//                                             16 | expect(solve('AAA', 3, 0, 0, 0)).toBe('YES') |
//                                                 ^
//                                                 17 |
//                                         })
//                                     18 |
//                                         19 | test('String all Bs, enough b but no ab/ba', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 16: 36)

//                                                 ● String all Bs, enough b but no ab / ba

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected: "YES"
//                                                 Received: 0

//                                                 18 |
//                                                     19 | test('String all Bs, enough b but no ab/ba', () => { >
//                                                         20 | expect(solve('BBBB', 0, 4, 0, 0)).toBe('YES') |
//                                                             ^
//                                                             21 |
//                                                     })
//                                                 22 |
//                                                     23 | test('Alternating AB, both ab and ba allowed', () => {

//                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 20: 37)

//                                                             ● Alternating AB, both ab and ba allowed

//                                                             expect(received).toBe(expected) // Object.is equality

//                                                             Expected: "YES"
//                                                             Received: 0

//                                                             22 |
//                                                                 23 | test('Alternating AB, both ab and ba allowed', () => { >
//                                                                     24 | expect(solve('ABAB', 0, 0, 2, 1)).toBe('YES') |
//                                                                         ^
//                                                                         25 |
//                                                                 })
//                                                             26 |
//                                                                 27 | test('Alternating BA, insufficient ab', () => {

//                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 24: 37)

//                                                                         ● Alternating BA, insufficient ab

//                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                         Expected: "YES"
//                                                                         Received: 0

//                                                                         26 |
//                                                                             27 | test('Alternating BA, insufficient ab', () => { >
//                                                                                 28 | expect(solve('BABA', 0, 0, 0, 3)).toBe('YES') |
//                                                                                     ^
//                                                                                     29 |
//                                                                             })
//                                                                         30 |
//                                                                             31 | test('Alternating ABAB, insufficient ab/ba', () => {

//                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 28: 37)

//                                                                                     ● Alternating ABAB, insufficient ab / ba

//                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                     Expected: "NO"
//                                                                                     Received: 0

//                                                                                     30 |
//                                                                                         31 | test('Alternating ABAB, insufficient ab/ba', () => { >
//                                                                                             32 | expect(solve('ABAB', 0, 0, 1, 0)).toBe('NO') |
//                                                                                                 ^
//                                                                                                 33 |
//                                                                                         })
//                                                                                     34 |
//                                                                                         35 | test('Double "A" forbidden', () => {

//                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 32: 37)

//                                                                                                 ● Double "A"
//                                                                                                 forbidden

//                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                 Expected: "NO"
//                                                                                                 Received: 1000000000

//                                                                                                 34 |
//                                                                                                     35 | test('Double "A" forbidden', () => { >
//                                                                                                         36 | expect(solve('AA', 2, 0, 0, 0)).toBe('NO') |
//                                                                                                             ^
//                                                                                                             37 |
//                                                                                                     })
//                                                                                                 38 |
//                                                                                                     39 | test('Double "B" forbidden', () => {

//                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 36: 35)

//                                                                                                             ● Double "B"
//                                                                                                             forbidden

//                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                             Expected: "NO"
//                                                                                                             Received: 0

//                                                                                                             38 |
//                                                                                                                 39 | test('Double "B" forbidden', () => { >
//                                                                                                                     40 | expect(solve('BB', 0, 2, 0, 0)).toBe('NO') |
//                                                                                                                         ^
//                                                                                                                         41 |
//                                                                                                                 })
//                                                                                                             42 |
//                                                                                                                 43 | test('String with both types, full split', () => {

//                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 40: 35)

//                                                                                                                         ● String with both types, full split

//                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                         Expected: "YES"
//                                                                                                                         Received: 1000000000

//                                                                                                                         42 |
//                                                                                                                             43 | test('String with both types, full split', () => { >
//                                                                                                                                 44 | expect(solve('AAABBB', 3, 3, 0, 0)).toBe('YES') |
//                                                                                                                                     ^
//                                                                                                                                     45 |
//                                                                                                                             })
//                                                                                                                         46 |
//                                                                                                                             47 | test('Requires AB and BA splits', () => {

//                                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 44: 39)

//                                                                                                                                     ● Requires AB and BA splits

//                                                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                                                     Expected: "YES"
//                                                                                                                                     Received: 0

//                                                                                                                                     46 |
//                                                                                                                                         47 | test('Requires AB and BA splits', () => { >
//                                                                                                                                             48 | expect(solve('ABBA', 0, 0, 1, 1)).toBe('YES') |
//                                                                                                                                                 ^
//                                                                                                                                                 49 |
//                                                                                                                                         })
//                                                                                                                                     50 |
//                                                                                                                                         51 | test('Large number of As, insufficient a', () => {

//                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 48: 37)

//                                                                                                                                                 ● Large number of As, insufficient a

//                                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                 Expected: "NO"
//                                                                                                                                                 Received: 1000000000

//                                                                                                                                                 50 |
//                                                                                                                                                     51 | test('Large number of As, insufficient a', () => { >
//                                                                                                                                                         52 | expect(solve('AAAAA', 4, 0, 0, 0)).toBe('NO') |
//                                                                                                                                                             ^
//                                                                                                                                                             53 |
//                                                                                                                                                     })
//                                                                                                                                                 54 |
//                                                                                                                                                     55 | test('Minimum requirements for AB', () => {

//                                                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 52: 38)

//                                                                                                                                                             ● Minimum requirements
//                                                                                                                                                             for AB

//                                                                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                             Expected: "YES"
//                                                                                                                                                             Received: 0

//                                                                                                                                                             54 |
//                                                                                                                                                                 55 | test('Minimum requirements for AB', () => { >
//                                                                                                                                                                     56 | expect(solve('AB', 0, 0, 1, 0)).toBe('YES') |
//                                                                                                                                                                         ^
//                                                                                                                                                                         57 |
//                                                                                                                                                                 })
//                                                                                                                                                             58 |
//                                                                                                                                                                 59 | test('Minimum requirements for BA', () => {

//                                                                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 56: 35)

//                                                                                                                                                                         ● Minimum requirements
//                                                                                                                                                                         for BA

//                                                                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                         Expected: "YES"
//                                                                                                                                                                         Received: 0

//                                                                                                                                                                         58 |
//                                                                                                                                                                             59 | test('Minimum requirements for BA', () => { >
//                                                                                                                                                                                 60 | expect(solve('BA', 0, 0, 0, 1)).toBe('YES') |
//                                                                                                                                                                                     ^
//                                                                                                                                                                                     61 |
//                                                                                                                                                                             })
//                                                                                                                                                                         62 |
//                                                                                                                                                                             63 | test('Odd alternating, just enough ab and ba', () => {

//                                                                                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 60: 35)

//                                                                                                                                                                                     ● Odd alternating, just enough ab and ba

//                                                                                                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                     Expected: "YES"
//                                                                                                                                                                                     Received: 0

//                                                                                                                                                                                     62 |
//                                                                                                                                                                                         63 | test('Odd alternating, just enough ab and ba', () => { >
//                                                                                                                                                                                             64 | expect(solve('ABABA', 0, 0, 2, 2)).toBe('YES') |
//                                                                                                                                                                                                 ^
//                                                                                                                                                                                                 65 |
//                                                                                                                                                                                         })
//                                                                                                                                                                                     66 |
//                                                                                                                                                                                         67 | test('Odd alternating, not enough ab and ba', () => {

//                                                                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 64: 38)

//                                                                                                                                                                                                 ● Odd alternating, not enough ab and ba

//                                                                                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                 Expected: "NO"
//                                                                                                                                                                                                 Received: 0

//                                                                                                                                                                                                 66 |
//                                                                                                                                                                                                     67 | test('Odd alternating, not enough ab and ba', () => { >
//                                                                                                                                                                                                         68 | expect(solve('ABABA', 0, 0, 1, 1)).toBe('NO') |
//                                                                                                                                                                                                             ^
//                                                                                                                                                                                                             69 |
//                                                                                                                                                                                                     })
//                                                                                                                                                                                                 70 |
//                                                                                                                                                                                                     71 | test('No blocks allowed', () => {

//                                                                                                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 68: 38)

//                                                                                                                                                                                                             ● No blocks allowed

//                                                                                                                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                             Expected: "NO"
//                                                                                                                                                                                                             Received: 0

//                                                                                                                                                                                                             70 |
//                                                                                                                                                                                                                 71 | test('No blocks allowed', () => { >
//                                                                                                                                                                                                                     72 | expect(solve('ABAB', 0, 0, 0, 0)).toBe('NO') |
//                                                                                                                                                                                                                         ^
//                                                                                                                                                                                                                         73 |
//                                                                                                                                                                                                                 })
//                                                                                                                                                                                                             74 |
//                                                                                                                                                                                                                 75 | test('Only ab blocks allowed, ab insufficient', () => {

//                                                                                                                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 72: 37)

//                                                                                                                                                                                                                         ● Only ab blocks allowed, ab insufficient

//                                                                                                                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                                         Expected: "NO"
//                                                                                                                                                                                                                         Received: 0

//                                                                                                                                                                                                                         74 |
//                                                                                                                                                                                                                             75 | test('Only ab blocks allowed, ab insufficient', () => { >
//                                                                                                                                                                                                                                 76 | expect(solve('ABABAB', 0, 0, 2, 0)).toBe('NO') |
//                                                                                                                                                                                                                                     ^
//                                                                                                                                                                                                                                     77 |
//                                                                                                                                                                                                                             })
//                                                                                                                                                                                                                         78 |
//                                                                                                                                                                                                                             79 | test('Zero-length string, always allowed', () => {

//                                                                                                                                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 76: 39)

//                                                                                                                                                                                                                                     ● Zero - length string, always allowed

//                                                                                                                                                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                                                     Expected: "YES"
//                                                                                                                                                                                                                                     Received: 0

//                                                                                                                                                                                                                                     78 |
//                                                                                                                                                                                                                                         79 | test('Zero-length string, always allowed', () => { >
//                                                                                                                                                                                                                                             80 | expect(solve('', 0, 0, 0, 0)).toBe('YES') |
//                                                                                                                                                                                                                                                 ^
//                                                                                                                                                                                                                                                 81 |
//                                                                                                                                                                                                                                         })
//                                                                                                                                                                                                                                     82 |
//                                                                                                                                                                                                                                         83 | test('Only singles allowed for mixed s', () => {

//                                                                                                                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 80: 33)

//                                                                                                                                                                                                                                                 ● Only singles allowed
//                                                                                                                                                                                                                                                 for mixed s

//                                                                                                                                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                                                                 Expected: "YES"
//                                                                                                                                                                                                                                                 Received: 1000000000

//                                                                                                                                                                                                                                                 82 |
//                                                                                                                                                                                                                                                     83 | test('Only singles allowed for mixed s', () => { >
//                                                                                                                                                                                                                                                         84 | expect(solve('AABB', 2, 2, 0, 0)).toBe('YES') |
//                                                                                                                                                                                                                                                             ^
//                                                                                                                                                                                                                                                             85 |
//                                                                                                                                                                                                                                                     })
//                                                                                                                                                                                                                                                 86 |
//                                                                                                                                                                                                                                                     87 | test('Cannot split to match limits', () => {

//                                                                                                                                                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 84: 37)

//                                                                                                                                                                                                                                                             ● Cannot split to match limits

//                                                                                                                                                                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                                                                             Expected: "NO"
//                                                                                                                                                                                                                                                             Received: 0

//                                                                                                                                                                                                                                                             86 |
//                                                                                                                                                                                                                                                                 87 | test('Cannot split to match limits', () => { >
//                                                                                                                                                                                                                                                                     88 | expect(solve('ABBAAB', 0, 0, 1, 1)).toBe('NO') |
//                                                                                                                                                                                                                                                                         ^
//                                                                                                                                                                                                                                                                         89 |
//                                                                                                                                                                                                                                                                 })
//                                                                                                                                                                                                                                                             90 |
//                                                                                                                                                                                                                                                                 91 | test('Long block of AB, strict limits', () => {

//                                                                                                                                                                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 88: 39)

//                                                                                                                                                                                                                                                                         ● Long block of AB, strict limits

//                                                                                                                                                                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                                                                                         Expected: "YES"
//                                                                                                                                                                                                                                                                         Received: 0

//                                                                                                                                                                                                                                                                         90 |
//                                                                                                                                                                                                                                                                             91 | test('Long block of AB, strict limits', () => { >
//                                                                                                                                                                                                                                                                                 92 | expect(solve('ABABABAB', 0, 0, 4, 0)).toBe('YES') |
//                                                                                                                                                                                                                                                                                     ^
//                                                                                                                                                                                                                                                                                     93 |
//                                                                                                                                                                                                                                                                             })
//                                                                                                                                                                                                                                                                         94 |
//                                                                                                                                                                                                                                                                             95 | test('Long block of BA, strict limits', () => {

//                                                                                                                                                                                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 92: 41)

//                                                                                                                                                                                                                                                                                     ● Long block of BA, strict limits

//                                                                                                                                                                                                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                                                                                                     Expected: "YES"
//                                                                                                                                                                                                                                                                                     Received: 0

//                                                                                                                                                                                                                                                                                     94 |
//                                                                                                                                                                                                                                                                                         95 | test('Long block of BA, strict limits', () => { >
//                                                                                                                                                                                                                                                                                             96 | expect(solve('BABABABA', 0, 0, 0, 4)).toBe('YES') |
//                                                                                                                                                                                                                                                                                                 ^
//                                                                                                                                                                                                                                                                                                 97 |
//                                                                                                                                                                                                                                                                                         })
//                                                                                                                                                                                                                                                                                     98 |
//                                                                                                                                                                                                                                                                                         99 | test('Long string, too few blocks', () => {

//                                                                                                                                                                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 16 _prompt3.test.js: 96: 41)

//                                                                                                                                                                                                                                                                                                 ● Long string, too few blocks

//                                                                                                                                                                                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                                                                                                                 Expected: "NO"
//                                                                                                                                                                                                                                                                                                 Received: 1000000000

//                                                                                                                                                                                                                                                                                                 98 |
//                                                                                                                                                                                                                                                                                                     99 | test('Long string, too few blocks', () => { >
//                                                                                                                                                                                                                                                                                                         100 | expect(solve('AABBAABB', 2, 2, 0, 0)).toBe('NO') |
//                                                                                                                                                                                                                                                                                                             ^
//                                                                                                                                                                                                                                                                                                             101 |
//                                                                                                                                                                                                                                                                                                     })