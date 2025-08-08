import { solve } from '../../solutions-descriptive/16.js';

test('single A', () => {
    expect(solve('A\n1 0 0 0')).toBe('YES');
    expect(solve('A\n0 0 0 0')).toBe('NO');
});

test('single B', () => {
    expect(solve('B\n0 1 0 0')).toBe('YES');
    expect(solve('B\n0 0 0 0')).toBe('NO');
});

test('simple AAB', () => {
    expect(solve('AAB\n2 1 0 0')).toBe('YES');
    expect(solve('AAB\n1 1 1 0')).toBe('YES');
    expect(solve('AAB\n1 1 0 0')).toBe('NO');
});

test('no consecutive AA or BB', () => {
    expect(solve('AA\n2 0 0 0')).toBe('NO');
    expect(solve('BB\n0 2 0 0')).toBe('NO');
    expect(solve('AB\n0 0 1 0')).toBe('YES');
    expect(solve('BA\n0 0 0 1')).toBe('YES');
});

test('mix ABBA with tight constraints', () => {
    expect(solve('ABBA\n1 1 1 1')).toBe('YES');
    expect(solve('ABBA\n2 2 0 0')).toBe('NO');
    expect(solve('ABBA\n0 0 2 2')).toBe('NO');
});

test('alternating ABAB', () => {
    expect(solve('ABAB\n0 0 2 1')).toBe('YES');
    expect(solve('ABAB\n0 0 1 2')).toBe('YES');
    expect(solve('ABAB\n0 0 1 1')).toBe('NO');
});

test('all A', () => {
    expect(solve('AAAAA\n5 0 0 0')).toBe('YES');
    expect(solve('AAAAA\n4 0 0 0')).toBe('NO');
});

test('all B', () => {
    expect(solve('BBBB\n0 4 0 0')).toBe('YES');
    expect(solve('BBBB\n0 3 0 0')).toBe('NO');
});

test('longer pattern with enough splits', () => {
    expect(solve('ABABAB\n0 0 3 2')).toBe('YES');
    expect(solve('ABABAB\n0 0 2 3')).toBe('YES');
});

test('not enough blocks possible', () => {
    expect(solve('ABA\n0 0 1 1')).toBe('NO');
    expect(solve('AAB\n1 1 1 0')).toBe('YES');
});

test('zeros for all allowed', () => {
    expect(solve('A\n0 0 0 0')).toBe('NO');
    expect(solve('B\n0 0 0 0')).toBe('NO');
});

test('mix of singletons and pairs', () => {
    expect(solve('ABBABA\n1 1 1 2')).toBe('YES');
    expect(solve('ABBABA\n1 1 1 1')).toBe('NO');
});


// FAIL tests - descriptive / tests - prompt1 / 16 _prompt1.test.js× single A(3 ms)× single B× simple AAB(1 ms)× no consecutive AA or BB× mix ABBA with tight constraints(1 ms)× alternating ABAB(1 ms)× all A(1 ms)× all B(1 ms)× longer pattern with enough splits(1 ms)× not enough blocks possible(1 ms)× zeros
// for all allowed× mix of singletons and pairs

// ● single A

// expect(received).toBe(expected) // Object.is equality

// Expected: "YES"
// Received: 1000000000

// 2 |
//     3 | test('single A', () => { >
//         4 | expect(solve('A\n1 0 0 0')).toBe('YES'); |
//         ^
//         5 | expect(solve('A\n0 0 0 0')).toBe('NO');
//         6 |
//     });
// 7 |

//     at Object.toBe(tests - descriptive / tests - prompt1 / 16 _prompt1.test.js: 4: 31)

// ● single B

// expect(received).toBe(expected) // Object.is equality

// Expected: "YES"
// Received: 1000000000

// 7 |
//     8 | test('single B', () => { >
//         9 | expect(solve('B\n0 1 0 0')).toBe('YES'); |
//         ^
//         10 | expect(solve('B\n0 0 0 0')).toBe('NO');
//         11 |
//     });
// 12 |

//     at Object.toBe(tests - descriptive / tests - prompt1 / 16 _prompt1.test.js: 9: 31)

// ● simple AAB

// expect(received).toBe(expected) // Object.is equality

// Expected: "YES"
// Received: 1000000000

// 12 |
//     13 | test('simple AAB', () => { >
//         14 | expect(solve('AAB\n2 1 0 0')).toBe('YES'); |
//         ^
//         15 | expect(solve('AAB\n1 1 1 0')).toBe('YES');
//         16 | expect(solve('AAB\n1 1 0 0')).toBe('NO');
//         17 |
//     });

// at Object.toBe(tests - descriptive / tests - prompt1 / 16 _prompt1.test.js: 14: 33)

// ● no consecutive AA or BB

// expect(received).toBe(expected) // Object.is equality

// Expected: "NO"
// Received: 1000000000

// 18 |
//     19 | test('no consecutive AA or BB', () => { >
//             20 | expect(solve('AA\n2 0 0 0')).toBe('NO'); |
//             ^
//             21 | expect(solve('BB\n0 2 0 0')).toBe('NO');
//             22 | expect(solve('AB\n0 0 1 0')).toBe('YES');
//             23 | expect(solve('BA\n0 0 0 1')).toBe('YES');

//             at Object.toBe(tests - descriptive / tests - prompt1 / 16 _prompt1.test.js: 20: 32)

//             ● mix ABBA with tight constraints

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "YES"
//             Received: 1000000000

//             25 |
//                 26 | test('mix ABBA with tight constraints', () => { >
//                     27 | expect(solve('ABBA\n1 1 1 1')).toBe('YES'); |
//                     ^
//                     28 | expect(solve('ABBA\n2 2 0 0')).toBe('NO');
//                     29 | expect(solve('ABBA\n0 0 2 2')).toBe('NO');
//                     30 |
//                 });

//             at Object.toBe(tests - descriptive / tests - prompt1 / 16 _prompt1.test.js: 27: 34)

//             ● alternating ABAB

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "YES"
//             Received: 1000000000

//             31 |
//                 32 | test('alternating ABAB', () => { >
//                     33 | expect(solve('ABAB\n0 0 2 1')).toBe('YES'); |
//                     ^
//                     34 | expect(solve('ABAB\n0 0 1 2')).toBe('YES');
//                     35 | expect(solve('ABAB\n0 0 1 1')).toBe('NO');
//                     36 |
//                 });

//             at Object.toBe(tests - descriptive / tests - prompt1 / 16 _prompt1.test.js: 33: 34)

//             ● all A

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "YES"
//             Received: 1000000000

//             37 |
//                 38 | test('all A', () => { >
//                     39 | expect(solve('AAAAA\n5 0 0 0')).toBe('YES'); |
//                     ^
//                     40 | expect(solve('AAAAA\n4 0 0 0')).toBe('NO');
//                     41 |
//                 });
//             42 |

//                 at Object.toBe(tests - descriptive / tests - prompt1 / 16 _prompt1.test.js: 39: 35)

//             ● all B

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "YES"
//             Received: 1000000000

//             42 |
//                 43 | test('all B', () => { >
//                     44 | expect(solve('BBBB\n0 4 0 0')).toBe('YES'); |
//                     ^
//                     45 | expect(solve('BBBB\n0 3 0 0')).toBe('NO');
//                     46 |
//                 });
//             47 |

//                 at Object.toBe(tests - descriptive / tests - prompt1 / 16 _prompt1.test.js: 44: 34)

//             ● longer pattern with enough splits

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "YES"
//             Received: 1000000000

//             47 |
//                 48 | test('longer pattern with enough splits', () => { >
//                     49 | expect(solve('ABABAB\n0 0 3 2')).toBe('YES'); |
//                     ^
//                     50 | expect(solve('ABABAB\n0 0 2 3')).toBe('YES');
//                     51 |
//                 });
//             52 |

//                 at Object.toBe(tests - descriptive / tests - prompt1 / 16 _prompt1.test.js: 49: 36)

//             ● not enough blocks possible

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "NO"
//             Received: 1000000000

//             52 |
//                 53 | test('not enough blocks possible', () => { >
//                     54 | expect(solve('ABA\n0 0 1 1')).toBe('NO'); |
//                     ^
//                     55 | expect(solve('AAB\n1 1 1 0')).toBe('YES');
//                     56 |
//                 });
//             57 |

//                 at Object.toBe(tests - descriptive / tests - prompt1 / 16 _prompt1.test.js: 54: 33)

//             ● zeros
//             for all allowed

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "NO"
//             Received: 1000000000

//             57 |
//                 58 | test('zeros for all allowed', () => { >
//                     59 | expect(solve('A\n0 0 0 0')).toBe('NO'); |
//                     ^
//                     60 | expect(solve('B\n0 0 0 0')).toBe('NO');
//                     61 |
//                 });
//             62 |

//                 at Object.toBe(tests - descriptive / tests - prompt1 / 16 _prompt1.test.js: 59: 31)

//             ● mix of singletons and pairs

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "YES"
//             Received: 1000000000

//             62 |
//                 63 | test('mix of singletons and pairs', () => { >
//                     64 | expect(solve('ABBABA\n1 1 1 2')).toBe('YES'); |
//                     ^
//                     65 | expect(solve('ABBABA\n1 1 1 1')).toBe('NO');
//                     66 |
//                 });

//             at Object.toBe(tests - descriptive / tests - prompt1 / 16 _prompt1.test.js: 64: 36)