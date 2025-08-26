import { solve } from '../../../solutions-algorithm/14.js';

test('typical case 1', () => {
    expect(solve(5, 1, 'BGGBG')).toBe('GBGGB');
});

test('typical case 2', () => {
    expect(solve(8, 3, 'BBGBGBGB')).toBe('GGBGBBBB');
});

test('no swaps when n=0', () => {
    expect(solve(10, 0, 'BGGBG')).toBe('BGGBG');
});

test('no swaps when no BG pairs', () => {
    expect(solve(3, 2, 'GGG')).toBe('GGG');
    expect(solve(3, 2, 'BBB')).toBe('BBB');
    expect(solve(3, 2, 'GBGBGB')).toBe('GBGBGB');
});

test('single BG pair', () => {
    expect(solve(2, 1, 'BG')).toBe('GB');
});

test('all BG pairs', () => {
    expect(solve(6, 1, 'BGBGBG')).toBe('GBGBGB');
});

test('edge case: empty queue', () => {
    expect(solve(2, 3, '')).toBe('');
});

test('single character queue', () => {
    expect(solve(1, 4, 'G')).toBe('G');
    expect(solve(1, 4, 'B')).toBe('B');
});

test('BG at the end of queue', () => {
    expect(solve(2, 2, 'BBBG')).toBe('BGBB');
});

test('queue already sorted', () => {
    expect(solve(4, 4, 'GGGBBB')).toBe('GGGBBB');
});

test('maximum shift scenario', () => {
    expect(solve(5, 5, 'BBBBGGGG')).toBe('GGGGBBBB');
});

test('repeated swaps', () => {
    expect(solve(5, 3, 'BGBG')).toBe('GGBB');
});

test('odd length queue mixing', () => {
    expect(solve(4, 2, 'BGB')).toBe('GBB');
});



// ✅
// Running: tests - algorithm\ tests - prompt2\ 14 _prompt2.test.js(node: 18296) ExperimentalWarning: VM Modules is an experimental feature and might change at any time(Use `node --trace-warnings ...`
//     to show where the warning was created)
// FAIL tests - algorithm / tests - prompt2 / 14 _prompt2.test.js√ typical
// case 1(3 ms)√ typical
// case 2(1 ms)√ no swaps when n = 0× no swaps when no BG pairs(23 ms)√ single BG pair(1 ms)√ all BG pairs√ edge
// case :empty queue√ single character queue(1 ms)√ BG at the end of queue√ queue already sorted(1 ms)× maximum shift scenario(1 ms)√ repeated swaps√ odd length queue mixing

// ● no swaps when no BG pairs

// expect(received).toBe(expected) // Object.is equality

// Expected:
//     "GBGBGB"
//     Received: "GGGBBB"

//     16 | expect(solve(3, 2, 'GGG')).toBe('GGG');
//     17 | expect(solve(3, 2, 'BBB')).toBe('BBB'); >
//     18 | expect(solve(3, 2, 'GBGBGB')).toBe('GBGBGB'); |
//     ^
//     19 |
// });
//     20 |
//         21 | test('single BG pair', () => {

//                 at Object.toBe(tests - algorithm / tests - prompt2 / 14 _prompt2.test.js: 18: 33)

//                 ● maximum shift scenario

//                 expect(received).toBe(expected) // Object.is equality

//                 Expected: "GGGGBBBB"
//                 Received: "GGBGBGBB"

//                 45 |
//                     46 | test('maximum shift scenario', () => { >
//                         47 | expect(solve(5, 5, 'BBBBGGGG')).toBe('GGGGBBBB'); |
//                         ^
//                         48 |
//                     });
//                 49 |
//                     50 | test('repeated swaps', () => {

//                             at Object.toBe(tests - algorithm / tests - prompt2 / 14 _prompt2.test.js: 47: 35)
