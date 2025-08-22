import { solve } from '../../../solutions-descriptive/30.js';

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


test('Star: node 1 points to everyone', () => {
    runTest([4, 1, 1, 1, 1], 3);
});



test('Empty graph, edge case n=0', () => {
    runTest([0], 2);
});
