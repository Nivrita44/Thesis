import {
    solve
} from '../../solutions-algorithm/14.js';

test('single boy, single girl, t=1', () => {
    expect(solve(2, 1, 'BG')).toBe('GB');
});

test('single girl, single boy, t=1', () => {
    expect(solve(2, 1, 'GB')).toBe('GB');
});

test('no swaps with one second', () => {
    expect(solve(3, 1, 'GGG')).toBe('GGG');
});

test('no swaps needed, t>1', () => {
    expect(solve(3, 2, 'GGG')).toBe('GGG');
});

test('boys and girls, t=1', () => {
    expect(solve(5, 1, 'BBGGG')).toBe('BGBGG');
});

test('boys and girls, t=2', () => {
    expect(solve(5, 2, 'BBGGG')).toBe('GBGBG');
});

test('boys and girls, t=3', () => {
    expect(solve(5, 3, 'BBGGG')).toBe('GGBGB');
});

test('boys and girls, t=4', () => {
    expect(solve(5, 4, 'BBGGG')).toBe('GGGBB');
});

test('mixed, t smaller than needed', () => {
    expect(solve(4, 1, 'BGBG')).toBe('GBGB');
});

test('mixed, t=2', () => {
    expect(solve(4, 2, 'BGBG')).toBe('GGBB');
});

test('no movements possible', () => {
    expect(solve(3, 10, 'GGG')).toBe('GGG');
});

test('all boys', () => {
    expect(solve(4, 3, 'BBBB')).toBe('BBBB');
});

test('all girls', () => {
    expect(solve(4, 3, 'GGGG')).toBe('GGGG');
});

test('alternating B and G, t exceeds swaps', () => {
    expect(solve(6, 10, 'BGBGBG')).toBe('GGGGBB');
});

test('minimal, n=1', () => {
    expect(solve(1, 5, 'B')).toBe('B');
});

test('minimal, n=1, G', () => {
    expect(solve(1, 15, 'G')).toBe('G');
});

test('n=3, t=2, "BBG"', () => {
    expect(solve(3, 2, 'BBG')).toBe('BGB');
});

test('n=5, t=3, "BGBGB"', () => {
    expect(solve(5, 3, 'BGBGB')).toBe('GGGBB');
});
// FAIL tests - algorithm / tests - prompt1 / 14 _prompt1.test.js√ single boy, single girl, t = 1(2 ms)√ single girl, single boy, t = 1√ no swaps with one second√ no swaps needed, t > 1√ boys and girls, t = 1√ boys and girls, t = 2√ boys and girls, t = 3√ boys and girls, t = 4(1 ms)√ mixed, t smaller than needed√ mixed, t = 2(1 ms)√ no movements possible(1 ms)√ all boys√ all girls× alternating B and G, t exceeds swaps(3 ms)√ minimal, n = 1√ minimal, n = 1, G× n = 3, t = 2, "BBG"×
// n = 5, t = 3, "BGBGB" (1 ms)

// ● alternating B and G, t exceeds swaps

// expect(received).toBe(expected) // Object.is equality

// Expected: "GGGGBB"
// Received: "GGGBBB"

// 56 |
//     57 | test('alternating B and G, t exceeds swaps', () => { >
//         58 | expect(solve(6, 10, 'BGBGBG')).toBe('GGGGBB'); |
//         ^
//         59 |
//     });
// 60 |
//     61 | test('minimal, n=1', () => {

//             at Object.toBe(tests - algorithm / tests - prompt1 / 14 _prompt1.test.js: 58: 36)

//             ● n = 3, t = 2, "BBG"

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "BGB"
//             Received: "GBB"

//             68 |
//                 69 | test('n=3, t=2, "BBG"', () => { >
//                     70 | expect(solve(3, 2, 'BBG')).toBe('BGB'); |
//                     ^
//                     71 |
//                 });
//             72 |
//                 73 | test('n=5, t=3, "BGBGB"', () => {

//                         at Object.toBe(tests - algorithm / tests - prompt1 / 14 _prompt1.test.js: 70: 32)

//                         ● n = 5, t = 3, "BGBGB"

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: "GGGBB"
//                         Received: "GGBBB"

//                         72 |
//                             73 | test('n=5, t=3, "BGBGB"', () => { >
//                                 74 | expect(solve(5, 3, 'BGBGB')).toBe('GGGBB'); |
//                                 ^
//                                 75 |
//                             });