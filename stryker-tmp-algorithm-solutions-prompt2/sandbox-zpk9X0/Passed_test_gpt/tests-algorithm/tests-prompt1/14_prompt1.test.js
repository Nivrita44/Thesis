// @ts-nocheck
import {
    solve
} from '../../../solutions-algorithm/14.js';

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

test('minimal, n=1', () => {
    expect(solve(1, 5, 'B')).toBe('B');
});

test('minimal, n=1, G', () => {
    expect(solve(1, 15, 'G')).toBe('G');
});

