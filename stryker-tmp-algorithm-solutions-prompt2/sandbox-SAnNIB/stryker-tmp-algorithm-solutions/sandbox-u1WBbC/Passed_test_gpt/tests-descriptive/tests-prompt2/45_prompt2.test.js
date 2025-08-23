// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/45.js';

test('simple chain path, should reach node 1 with time 0', () => {
    expect(
        solve(
            5,
            5, [
                [1, 5, 30, 100],
                [1, 2, 20, 50],
                [2, 3, 20, 50],
                [3, 4, 20, 50],
                [4, 5, 20, 50],
            ],
            100,
            20,
            80
        )
    ).toBe(0);
});

test('impossible case due to insufficient initial time', () => {
    expect(
        solve(
            2,
            1, [
                [1, 2, 55, 110],
            ],
            100,
            50,
            60
        )
    ).toBe(-1);
});

test('diamond path, path through 1-2-4 gives maxTime 60', () => {
    expect(
        solve(
            4,
            4, [
                [1, 2, 30, 100],
                [2, 4, 30, 100],
                [1, 3, 20, 50],
                [3, 4, 20, 50],
            ],
            100,
            40,
            60
        )
    ).toBe(60);
});

test('edge chooses shortest safe path, not direct path', () => {
    expect(
        solve(
            3,
            3, [
                [1, 2, 1, 10],
                [2, 3, 10, 50],
                [1, 3, 20, 21],
            ],
            100,
            80,
            90
        )
    ).toBe(80);
});

test('multiple intermediates, edge costs force minimum', () => {
    expect(
        solve(
            3,
            2, [
                [2, 1, 1, 3],
                [2, 3, 3, 4],
            ],
            58,
            55,
            57
        )
    ).toBe(53);
});

test('minimal path with threshold edge reduction', () => {
    expect(
        solve(
            2,
            1, [
                [2, 1, 6, 10],
            ],
            12,
            9,
            10
        )
    ).toBe(3);
});

test('5 nodes, edge types force intermediate routing', () => {
    expect(
        solve(
            5,
            5, [
                [2, 1, 1, 8],
                [2, 3, 4, 8],
                [4, 2, 2, 4],
                [5, 3, 3, 4],
                [4, 5, 2, 6],
            ],
            8,
            5,
            6
        )
    ).toBe(2);
});

test('no edges, single node graph, answer should be initialTime if node=1', () => {
    expect(
        solve(
            1,
            0, [],
            50,
            10,
            20
        )
    ).toBe(50);
});

test('path where no edge can be used due to thresholds', () => {
    expect(
        solve(
            2,
            1, [
                [2, 1, 20, 40]
            ],
            5,
            10,
            30
        )
    ).toBe(-1);
});