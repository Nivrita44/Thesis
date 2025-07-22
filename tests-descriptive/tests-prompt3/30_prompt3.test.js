import { solve } from '../../solutions-descriptive/30.js';

global.readInt = undefined;
global.writeInt = undefined;

function runSolveWithInput(input) {
    const ints = input.trim().split(/\s+/).map(Number);
    let idx = 0;
    global.readInt = () => ints[idx++];
    let output = [];
    global.writeInt = (val, ln) => output.push(val);
    solve();
    return output.length === 1 ? output[0] : output;
}

test('Sample 1: 2 spiders exchanging', () => {
    // n=2, 1 gives to 2, 2 gives to 1 (cycle)
    expect(runSolveWithInput('2\n2 1')).toBe(4);
});

test('Sample 2: simple acyclic chain', () => {
    // n=3, 1→2→3→1 (cycle of 3)
    expect(runSolveWithInput('3\n2 3 1')).toBe(5);
});

test('All spiders have a long cycle', () => {
    // n=5, 1→2→3→4→5→1
    expect(runSolveWithInput('5\n2 3 4 5 1')).toBe(7);
});

test('Single chain then cycle', () => {
    // 1→2, 2→3, 3→4, 4→2 (cycle of 2,3,4; 1 is an entry node)
    expect(runSolveWithInput('4\n2 3 4 2')).toBe(6);
});

test('Tree-like structure ends in a 2-cycle', () => {
    // 1→2, 2→3, 3→4, 4→3 (cycle of 3,4; chain 1,2 into cycle)
    expect(runSolveWithInput('4\n2 3 4 3')).toBe(6);
});

test('Star shape into a cycle', () => {
    // 1→2, 2→3, 3→4, 4→5, 5→2 (cycle 2,3,4,5; 1 to 2)
    expect(runSolveWithInput('5\n2 3 4 5 2')).toBe(7);
});

test('No entry nodes, direct cycle', () => {
    // 1<->2
    expect(runSolveWithInput('2\n2 1')).toBe(4);
});

test('Edge: All spiders form a simple two cycle', () => {
    // 1→2, 2→1, 3→4, 4→3 (two parallel cycles)
    expect(runSolveWithInput('4\n2 1 4 3')).toBe(4);
});

test('Edge: Disconnected chain to cycle', () => {
    // 1→2, 2→3, 3→1; 4→1
    expect(runSolveWithInput('4\n2 3 1 1')).toBe(6);
});

test('Edge: Disconnected chains both into cycle', () => {
    // 1→2, 2→3, 3→1 (cycle), 4→5, 5→1
    expect(runSolveWithInput('5\n2 3 1 5 1')).toBe(7);
});

test('Edge: n=2e5 maximal test, big cycle', () => {
    // 1→2→3→...→200000→1
    let n = 200000;
    let arr = Array.from({length: n-1}, (_, idx) => idx+2).concat([1]);
    let input = `${n}\n${arr.join(' ')}`;
    expect(runSolveWithInput(input)).toBe(200002);
});

test('Edge: All chain into a 2-cycle at the end', () => {
    // 1→2→3→...→n-1→n→n-1 (n>=3)
    let n = 7;
    let arr = [];
    for (let i = 1; i <= n-1; ++i) arr.push(i+1);
    arr.push(n-1);
    let input = `${n}\n${arr.join(' ')}`;
    expect(runSolveWithInput(input)).toBe(9);
});