import solve from '../../solutions-descriptive/12.js';

test('Example 1', () => {
    const input = [{
        n: 3,
        q: 2,
        a: [1, 3, 2],
        queries: [
            [2, 4],
            [1, 5]
        ]
    }];
    const expected = [
        [1, 2, 3]
    ];
    expect(solve(input)).toEqual(expected);
});

test('All sweaters the same size', () => {
    const input = [{
        n: 4,
        q: 1,
        a: [5, 5, 5, 5],
        queries: [
            [3, 5]
        ]
    }];
    const expected = [
        [0, 0]
    ];
    expect(solve(input)).toEqual(expected);
});

test('Only one sweater', () => {
    const input = [{
        n: 1,
        q: 2,
        a: [42],
        queries: [
            [1, 100],
            [1, 7]
        ]
    }];
    const expected = [
        [0, 0, 0]
    ];
    expect(solve(input)).toEqual(expected);
});

test('Increasing sizes, single change', () => {
    const input = [{
        n: 5,
        q: 1,
        a: [1, 2, 3, 4, 5],
        queries: [
            [3, 10]
        ]
    }];
    const expected = [
        [1, 3]
    ];
    expect(solve(input)).toEqual(expected);
});

test('Decreasing sizes, no changes', () => {
    const input = [{
        n: 4,
        q: 0,
        a: [10, 7, 4, 1],
        queries: []
    }];
    const expected = [
        [3]
    ];
    expect(solve(input)).toEqual(expected);
});

test('Multiple test cases', () => {
    const input = [{
            n: 3,
            q: 1,
            a: [1, 2, 3],
            queries: [
                [1, 5]
            ]
        },
        {
            n: 2,
            q: 2,
            a: [8, 1],
            queries: [
                [2, 8],
                [1, 8]
            ]
        }
    ];
    const expected = [
        [1, 3],
        [7, 0, 0]
    ];
    expect(solve(input)).toEqual(expected);
});

test('Large n with no changes', () => {
    const input = [{
        n: 10,
        q: 0,
        a: [1, 100, 50, 99, 2, 96, 3, 93, 4, 90],
        queries: []
    }];
    const expected = [
        [99]
    ];
    expect(solve(input)).toEqual(expected);
});

test('Edge sizes, size change to min or max value', () => {
    const input = [{
        n: 3,
        q: 2,
        a: [1, 1000000000, 500],
        queries: [
            [2, 1],
            [1, 1000000000]
        ]
    }];
    const expected = [
        [999999998, 499, 999999998]
    ];
    expect(solve(input)).toEqual(expected);
});


// FAIL tests - descriptive / tests - prompt1 / 12 _prompt1.test.js× Example 1(2 ms)× All sweaters the same size(1 ms)× Only one sweater× Increasing sizes, single change× Decreasing sizes, no changes× Multiple test cases× Large n with no changes(1 ms)× Edge sizes, size change to min or max value(1 ms)

// ● Example 1

// TypeError: solve is not a
// function

// 16 | [1, 2, 3]
// 17 | ]; >
// 18 | expect(solve(input)).toEqual(expected); |
// ^
// 19 |
// });
// 20 |
//     21 | test('All sweaters the same size', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 12 _prompt1.test.js: 18: 10)

//             ● All sweaters the same size

//             TypeError: solve is not a
//             function

//             33 | [0, 0]
//             34 | ]; >
//         35 | expect(solve(input)).toEqual(expected); |
//         ^
//         36 |
//     });
// 37 |
//     38 | test('Only one sweater', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 12 _prompt1.test.js: 35: 10)

//             ● Only one sweater

//             TypeError: solve is not a
//             function

//             51 | [0, 0, 0]
//             52 | ]; >
//         53 | expect(solve(input)).toEqual(expected); |
//         ^
//         54 |
//     });
// 55 |
//     56 | test('Increasing sizes, single change', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 12 _prompt1.test.js: 53: 10)

//             ● Increasing sizes, single change

//             TypeError: solve is not a
//             function

//             68 | [1, 3]
//             69 | ]; >
//         70 | expect(solve(input)).toEqual(expected); |
//         ^
//         71 |
//     });
// 72 |
//     73 | test('Decreasing sizes, no changes', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 12 _prompt1.test.js: 70: 10)

//             ● Decreasing sizes, no changes

//             TypeError: solve is not a
//             function

//             83 | [3]
//             84 | ]; >
//         85 | expect(solve(input)).toEqual(expected); |
//         ^
//         86 |
//     });
// 87 |
//     88 | test('Multiple test cases', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 12 _prompt1.test.js: 85: 10)

//             ● Multiple test cases

//             TypeError: solve is not a
//             function

//             110 | [7, 0, 0]
//             111 | ]; >
//         112 | expect(solve(input)).toEqual(expected); |
//         ^
//         113 |
//     });
// 114 |
//     115 | test('Large n with no changes', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 12 _prompt1.test.js: 112: 10)

//             ● Large n with no changes

//             TypeError: solve is not a
//             function

//             125 | [99]
//             126 | ]; >
//         127 | expect(solve(input)).toEqual(expected); |
//         ^
//         128 |
//     });
// 129 |
//     130 | test('Edge sizes, size change to min or max value', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 12 _prompt1.test.js: 127: 10)

//             ● Edge sizes, size change to min or max value

//             TypeError: solve is not a
//             function

//             143 | [999999998, 499, 999999998]
//             144 | ]; >
//         145 | expect(solve(input)).toEqual(expected); |
//         ^
//         146 |
//     });

// at Object.solve(tests - descriptive / tests - prompt1 / 12 _prompt1.test.js: 145: 10)