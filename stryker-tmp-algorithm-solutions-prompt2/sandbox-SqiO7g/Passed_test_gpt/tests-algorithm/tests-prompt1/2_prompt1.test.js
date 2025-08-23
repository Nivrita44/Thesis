import {
    solve
} from '../../../solutions-algorithm/2.js';


test('handles minimal input', () => {
    expect(solve('A', 'A', 'AA')).toBe('YES');
    expect(solve('A', 'A', 'A')).toBe('NO');
    expect(solve('A', 'B', 'AB')).toBe('YES');
    expect(solve('A', 'B', 'BAA')).toBe('NO');
    expect(solve('X', 'Y', 'YX')).toBe('YES');
    expect(solve('X', 'Y', 'Y')).toBe('NO');
});

test('different letter counts', () => {
    expect(solve('AA', 'BB', 'AABB')).toBe('YES');
    expect(solve('AA', 'BB', 'ABAB')).toBe('YES');
    expect(solve('AA', 'BB', 'AABBB')).toBe('NO');
    expect(solve('AA', 'BB', 'AB')).toBe('NO');
    expect(solve('AA', 'BB', 'AABBX')).toBe('NO');
});

test('long and shuffled', () => {
    expect(
        solve(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'ZYXWVUTSRQPONMLKJIHGFEDCBA',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZZYXWVUTSRQPONMLKJIHGFEDCBA'
        )
    ).toBe('YES');
    expect(
        solve(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'ZYXWVUTSRQPONMLKJIHGFEDCBA',
            'ZYXWVUTSRQPONMLKJIHGFEDCBAABCDEFGHIJKLMNOPQRSTUVWXYZ'
        )
    ).toBe('YES');
    expect(
        solve(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'ZYXWVUTSRQPONMLKJIHGFEDCBA',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZZYXWVUTSRQPONMLKJIHGFEDCB'
        )
    ).toBe('NO');
});


// FAIL tests - algorithm / tests - prompt1 / 2 _prompt1.test.js× returns YES
// for matching names and pile(4 ms)× returns YES
// for pile that is a permutation× returns NO
// for unmatched pile√ handles minimal input(1 ms)√ different letter counts(1 ms)√ long and shuffled

// ● returns YES
// for matching names and pile

// expect(received).toBe(expected) // Object.is equality

// Expected: "YES"
// Received: "NO"

// 5 | test('returns YES for matching names and pile', () => {
//             6 | expect(solve('ANN', 'BOB', 'ANNBOB')).toBe('YES'); >
//             7 | expect(solve('CHRIS', 'SANTA', 'CHRISANTA')).toBe('YES'); |
//             ^
//             8 | expect(solve('A', 'B', 'BA')).toBe('YES');
//             9 | expect(solve('GUEST', 'HOST', 'HOSTGUEST')).toBe('YES');
//             10 | expect(solve('NEWYEAR', 'CHRISTMAS', 'CHRISTMASNEWYEAR')).toBe('YES');

//             at Object.toBe(tests - algorithm / tests - prompt1 / 2 _prompt1.test.js: 7: 50)

//             ● returns YES
//             for pile that is a permutation

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "YES"
//             Received: "NO"

//             14 |
//                 15 | test('returns YES for pile that is a permutation', () => { >
//                     16 | expect(solve('BOB', 'ANN', 'OBBBAN')).toBe('YES'); |
//                     ^
//                     17 | expect(solve('TREE', 'STAR', 'ESTEARRT')).toBe('YES');
//                     18 | expect(solve('JOY', 'FUN', 'YNUFJO')).toBe('YES');
//                     19 |
//                 });

//             at Object.toBe(tests - algorithm / tests - prompt1 / 2 _prompt1.test.js: 16: 43)

//             ● returns NO
//             for unmatched pile

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "NO"
//             Received: "YES"
