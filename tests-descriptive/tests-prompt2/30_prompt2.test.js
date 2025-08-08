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




// Single node self loop

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 1

//       10 |     outputArray = [];
//       11 |     solve();
//     > 12 |     expect(outputArray[0]).toBe(expected);
//          |                            ^
//       13 | }
//       14 |
//       15 | test('Single node self loop', () => {

//       at toBe (tests-descriptive/tests-prompt2/30_prompt2.test.js:12:28)
//       at Object.runTest (tests-descriptive/tests-prompt2/30_prompt2.test.js:16:5)

//   ● Two nodes, 1 -> 2

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 4
//     Received: 1

//       10 |     outputArray = [];
//       11 |     solve();
//     > 12 |     expect(outputArray[0]).toBe(expected);
//          |                            ^
//       13 | }
//       14 |
//       15 | test('Single node self loop', () => {

//       at toBe (tests-descriptive/tests-prompt2/30_prompt2.test.js:12:28)
//       at Object.runTest (tests-descriptive/tests-prompt2/30_prompt2.test.js:20:5)

//   ● Three nodes, 1 -> 2 -> 3 -> 1 (cycle)

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 5
//     Received: 1

//       10 |     outputArray = [];
//       11 |     solve();
//     > 12 |     expect(outputArray[0]).toBe(expected);
//          |                            ^
//       13 | }
//       14 |
//       15 | test('Single node self loop', () => {

//       at toBe (tests-descriptive/tests-prompt2/30_prompt2.test.js:12:28)
//       at Object.runTest (tests-descriptive/tests-prompt2/30_prompt2.test.js:24:5)

//   ● Three nodes, 1 -> 2, 2 -> 3, 3 -> 2 (tail into a 2-cycle)

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 5
//     Received: 1

//       10 |     outputArray = [];
//       11 |     solve();
//     > 12 |     expect(outputArray[0]).toBe(expected);
//          |                            ^
//       13 | }
//       14 |
//       15 | test('Single node self loop', () => {

//       at toBe (tests-descriptive/tests-prompt2/30_prompt2.test.js:12:28)
//       at Object.runTest (tests-descriptive/tests-prompt2/30_prompt2.test.js:28:5)

//   ● Four nodes in a chain 1->2->3->4

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 6
//     Received: 1

//       10 |     outputArray = [];
//       11 |     solve();
//     > 12 |     expect(outputArray[0]).toBe(expected);
//          |                            ^
//       13 | }
//       14 |
//       15 | test('Single node self loop', () => {

//       at toBe (tests-descriptive/tests-prompt2/30_prompt2.test.js:12:28)
//       at Object.runTest (tests-descriptive/tests-prompt2/30_prompt2.test.js:36:5)

//   ● Two separate chains

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 4
//     Received: 2

//       10 |     outputArray = [];
//       11 |     solve();
//     > 12 |     expect(outputArray[0]).toBe(expected);
//          |                            ^
//       13 | }
//       14 |
//       15 | test('Single node self loop', () => {

//       at toBe (tests-descriptive/tests-prompt2/30_prompt2.test.js:12:28)
//       at Object.runTest (tests-descriptive/tests-prompt2/30_prompt2.test.js:40:5)

//   ● Star: node 1 points to everyone

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 4

//       10 |     outputArray = [];
//       11 |     solve();
//     > 12 |     expect(outputArray[0]).toBe(expected);
//          |                            ^
//       13 | }
//       14 |
//       15 | test('Single node self loop', () => {

//       at toBe (tests-descriptive/tests-prompt2/30_prompt2.test.js:12:28)
//       at Object.runTest (tests-descriptive/tests-prompt2/30_prompt2.test.js:44:5)

//   ● All nodes point to same node (except self)

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 4
//     Received: 3

//       10 |     outputArray = [];
//       11 |     solve();
//     > 12 |     expect(outputArray[0]).toBe(expected);
//          |                            ^
//       13 | }
//       14 |
//       15 | test('Single node self loop', () => {

//       at toBe (tests-descriptive/tests-prompt2/30_prompt2.test.js:12:28)
//       at Object.runTest (tests-descriptive/tests-prompt2/30_prompt2.test.js:48:5)

//   ● Larger cycle, size 5

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 7
//     Received: 1

//       10 |     outputArray = [];
//       11 |     solve();
//     > 12 |     expect(outputArray[0]).toBe(expected);
//          |                            ^
//       13 | }
//       14 |
//       15 | test('Single node self loop', () => {

//       at toBe (tests-descriptive/tests-prompt2/30_prompt2.test.js:12:28)
//       at Object.runTest (tests-descriptive/tests-prompt2/30_prompt2.test.js:52:5)

//   ● Chain ends in a self-loop

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 5
//     Received: 1

//       10 |     outputArray = [];
//       11 |     solve();
//     > 12 |     expect(outputArray[0]).toBe(expected);
//          |                            ^
//       13 | }
//       14 |
//       15 | test('Single node self loop', () => {

//       at toBe (tests-descriptive/tests-prompt2/30_prompt2.test.js:12:28)
//       at Object.runTest (tests-descriptive/tests-prompt2/30_prompt2.test.js:56:5)

//   ● Empty graph, edge case n=0

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 0

//       10 |     outputArray = [];
//       11 |     solve();
//     > 12 |     expect(outputArray[0]).toBe(expected);
//          |                            ^
//       13 | }
//       14 |
//       15 | test('Single node self loop', () => {

//       at toBe (tests-descriptive/tests-prompt2/30_prompt2.test.js:12:28)
//       at Object.runTest (tests-descriptive/tests-prompt2/30_prompt2.test.js:60:5)