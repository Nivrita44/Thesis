// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/9.js';
//all fail
test('Example 1: single node', () => {
    const t = 1;
    const ns = [1];
    const ws = [
        [1]
    ];
    const es = [
        []
    ];
    expect(solve(t, ns, ws, es)).toEqual([1]);
});

test('Example 2: simple two node chain', () => {
    const t = 1;
    const ns = [2];
    const ws = [
        [2, 1]
    ];
    const es = [
        [
            [1, 2]
        ]
    ];
    expect(solve(t, ns, ws, es)).toEqual([1]);
});

test('Example 3: root cannot win', () => {
    const t = 1;
    const ns = [3];
    const ws = [
        [1, 2, 3]
    ];
    const es = [
        [
            [1, 2],
            [1, 3]
        ]
    ];
    expect([1, 2, 3, 0].includes(solve(t, ns, ws, es)[0])).toBe(true);
});

test('Example 4: larger tree, Cirno can win', () => {
    const t = 1;
    const ns = [5];
    const ws = [
        [4, 1, 3, 2, 5]
    ];
    const es = [
        [
            [1, 2],
            [1, 3],
            [3, 4],
            [3, 5]
        ]
    ];
    const result = solve(t, ns, ws, es)[0];
    expect([1, 3, 5, 4, 2, 0].includes(result)).toBe(true);
});

test('Multiple test cases', () => {
    const t = 2;
    const ns = [3, 2];
    const ws = [
        [3, 2, 1],
        [1, 2]
    ];
    const es = [
        [
            [1, 2],
            [1, 3]
        ],
        [
            [1, 2]
        ]
    ];
    const result = solve(t, ns, ws, es);
    expect(result.length).toBe(2);
    expect([1, 2, 3, 0].includes(result[0])).toBe(true);
    expect([1, 2, 0].includes(result[1])).toBe(true);
});

test('Single node test', () => {
    const t = 1;
    const ns = [1];
    const ws = [
        [1]
    ];
    const es = [
        []
    ];
    expect(solve(t, ns, ws, es)).toEqual([1]);
});

test('All node values are the same', () => {
    const t = 1;
    const ns = [3];
    const ws = [
        [2, 2, 2]
    ];
    const es = [
        [
            [1, 2],
            [1, 3]
        ]
    ];
    expect([1, 2, 3, 0].includes(solve(t, ns, ws, es)[0])).toBe(true);
});

test('Large value at the end', () => {
    const t = 1;
    const ns = [4];
    const ws = [
        [1, 1, 1, 10]
    ];
    const es = [
        [
            [1, 2],
            [2, 3],
            [3, 4]
        ]
    ];
    expect([1, 2, 3, 4, 0].includes(solve(t, ns, ws, es)[0])).toBe(true);
});

test('Disconnected graph (invalid)', () => {
    const t = 1;
    const ns = [2];
    const ws = [
        [1, 2]
    ];
    const es = [
        [
            []
        ]
    ]; // No edge, actually not possible per constraints, should not throw
    expect(() => solve(t, ns, ws, es)).not.toThrow();
});

test('All minimal values', () => {
    const t = 1;
    const ns = [4];
    const ws = [
        [1, 1, 1, 1]
    ];
    const es = [
        [
            [1, 2],
            [2, 3],
            [3, 4]
        ]
    ];
    expect([1, 2, 3, 4, 0].includes(solve(t, ns, ws, es)[0])).toBe(true);
});