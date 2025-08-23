// @ts-nocheck
import { solve } from '../../solutions-descriptive/30.js';

let inputArray = [];
let outputArray = [];
global.readInt = () => inputArray.shift();
global.writeInt = (output, flush) => outputArray.push(output);

function runTest(input, expected) {
    inputArray = input.slice();
    outputArray = [];
    solve();
    expect(outputArray[0]).toBe(expected);
}

test('Single node self loop', () => {
    runTest([1, 1], 3);
});

test('Two nodes, 1 -> 2', () => {
    runTest([2, 2, 1], 4);
});

test('Three nodes, 1 -> 2 -> 3 -> 1 (cycle)', () => {
    runTest([3, 2, 3, 1], 5);
});

test('Three nodes, 1 -> 2, 2 -> 3, 3 -> 2 (tail into a 2-cycle)', () => {
    runTest([3, 2, 3, 2], 5);
});

test('Three isolated self-loops', () => {
    runTest([3, 1, 2, 3], 3);
});

test('Four nodes in a chain 1->2->3->4', () => {
    runTest([4, 2, 3, 4, 1], 6);
});

test('Two separate chains', () => {
    runTest([4, 2, 1, 4, 3], 4);
});

test('Star: node 1 points to everyone', () => {
    runTest([4, 1, 1, 1, 1], 3);
});

test('All nodes point to same node (except self)', () => {
    runTest([4, 2, 2, 2, 2], 4);
});

test('Larger cycle, size 5', () => {
    runTest([5, 2, 3, 4, 5, 1], 7);
});

test('Chain ends in a self-loop', () => {
    runTest([3, 2, 3, 3], 5);
});

test('Empty graph, edge case n=0', () => {
    runTest([0], 2);
});




// × Two nodes, 1 -> 2 (1 ms)
// × Three nodes, 1 -> 2 -> 3 -> 1 (cycle) (1 ms)
// × Three nodes, 1 -> 2, 2 -> 3, 3 -> 2 (tail into a 2-cycle) (1 ms)
// × Three isolated self-loops
// × Four nodes in a chain 1->2->3->4
// × Two separate chains (1 ms)
// √ Star: node 1 points to everyone (1 ms)
// × All nodes point to same node (except self) (1 ms)
// × Larger cycle, size 5
// × Chain ends in a self-loop
// √ Empty graph, edge case n=0