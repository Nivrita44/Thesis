import { solve } from '../../solutions-algorithm/18.js';

test('basic positive cases', () => {
    expect(solve([
        [1, 1337],
        [13, 69],
        [2, 4],
        [88, 89]
    ])).toEqual([
        ['1', '2'],
        ['13', '26'],
        ['2', '4'],
        ['-1', '-1']
    ]);
});

test('cases with r just less than 2*l', () => {
    expect(solve([
        [5, 9],
        [10, 19],
        [6, 11]
    ])).toEqual([
        ['-1', '-1'],
        ['-1', '-1'],
        ['-1', '-1']
    ]);
});

test('case with r exactly 2*l', () => {
    expect(solve([
        [7, 14],
        [100000000, 200000000]
    ])).toEqual([
        ['7', '14'],
        ['100000000', '200000000']
    ]);
});

test('edge: lowest allowed input', () => {
    expect(solve([
        [1, 2]
    ])).toEqual([
        ['1', '2']
    ]);
});

test('edge: near maximum input', () => {
    expect(solve([
        [1000000000 - 1, 1000000000]
    ])).toEqual([
        ['-1', '-1']
    ]);
});

test('far apart large l and r', () => {
    expect(solve([
        [1, 1000000000]
    ])).toEqual([
        ['1', '2']
    ]);
});

test('sequential pairs', () => {
    expect(solve([
        [10, 21],
        [20, 41],
        [30, 61]
    ])).toEqual([
        ['10', '20'],
        ['20', '40'],
        ['30', '60']
    ]);
});

test('minimum difference l and r', () => {
    expect(solve([
        [7, 8]
    ])).toEqual([
        ['-1', '-1']
    ]);
});

test('mixed valid and invalid', () => {
    expect(solve([
        [2, 5],
        [3, 5],
        [8, 20],
        [10, 25]
    ])).toEqual([
        ['2', '4'],
        ['-1', '-1'],
        ['8', '16'],
        ['10', '20']
    ]);
});

test('multiple edge cases', () => {
    expect(solve([
        [1, 3],
        [4, 7],
        [50, 101],
        [100000, 199999],
        [50000000, 100000000]
    ])).toEqual([
        ['1', '2'],
        ['-1', '-1'],
        ['50', '100'],
        ['100000', '200000'],
        ['50000000', '100000000']
    ]);
});

// ×
// multiple edge cases(4 ms)

// ● multiple edge cases

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 2 +
//     Received + 2

// @ @ - 10, 12 + 10, 12 @ @
// Array[
//         "50",
//         "100",
//     ],
//     Array[-"100000", -"200000", +"-1", +"-1", ],
//     Array[
//         "50000000",
//         "100000000",
//     ],

//     69 | expect(solve([
//         70 | [1, 3],
//         [4, 7],
//         [50, 101],
//         [100000, 199999],
//         [50000000, 100000000] >
//         71 |
//     ])).toEqual([ |
//             ^
//             72 | ['1', '2'],
//             73 | ['-1', '-1'],
//             74 | ['50', '100'],