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





// Sample 1: 2 spiders exchanging

// expect(received).toBe(expected) // Object.is equality

// Expected: 4
// Received: 1

//   16 | test('Sample 1: 2 spiders exchanging', () => {
//   17 |     // n=2, 1 gives to 2, 2 gives to 1 (cycle)
// > 18 |     expect(runSolveWithInput('2\n2 1')).toBe(4);
//      |                                         ^
//   19 | });
//   20 |
//   21 | test('Sample 2: simple acyclic chain', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/30_prompt3.test.js:18:41)

// ● Sample 2: simple acyclic chain

// expect(received).toBe(expected) // Object.is equality

// Expected: 5
// Received: 1

//   21 | test('Sample 2: simple acyclic chain', () => {
//   22 |     // n=3, 1→2→3→1 (cycle of 3)
// > 23 |     expect(runSolveWithInput('3\n2 3 1')).toBe(5);
//      |                                           ^
//   24 | });
//   25 |
//   26 | test('All spiders have a long cycle', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/30_prompt3.test.js:23:43)

// ● All spiders have a long cycle

// expect(received).toBe(expected) // Object.is equality

// Expected: 7
// Received: 1

//   26 | test('All spiders have a long cycle', () => {
//   27 |     // n=5, 1→2→3→4→5→1
// > 28 |     expect(runSolveWithInput('5\n2 3 4 5 1')).toBe(7);
//      |                                               ^
//   29 | });
//   30 |
//   31 | test('Single chain then cycle', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/30_prompt3.test.js:28:47)

// ● Single chain then cycle

// expect(received).toBe(expected) // Object.is equality

// Expected: 6
// Received: 1

//   31 | test('Single chain then cycle', () => {
//   32 |     // 1→2, 2→3, 3→4, 4→2 (cycle of 2,3,4; 1 is an entry node)
// > 33 |     expect(runSolveWithInput('4\n2 3 4 2')).toBe(6);
//      |                                             ^
//   34 | });
//   35 |
//   36 | test('Tree-like structure ends in a 2-cycle', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/30_prompt3.test.js:33:45)

// ● Tree-like structure ends in a 2-cycle

// expect(received).toBe(expected) // Object.is equality

// Expected: 6
// Received: 1

//   36 | test('Tree-like structure ends in a 2-cycle', () => {
//   37 |     // 1→2, 2→3, 3→4, 4→3 (cycle of 3,4; chain 1,2 into cycle)
// > 38 |     expect(runSolveWithInput('4\n2 3 4 3')).toBe(6);
//      |                                             ^
//   39 | });
//   40 |
//   41 | test('Star shape into a cycle', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/30_prompt3.test.js:38:45)

// ● Star shape into a cycle

// expect(received).toBe(expected) // Object.is equality

// Expected: 7
// Received: 1

//   41 | test('Star shape into a cycle', () => {
//   42 |     // 1→2, 2→3, 3→4, 4→5, 5→2 (cycle 2,3,4,5; 1 to 2)
// > 43 |     expect(runSolveWithInput('5\n2 3 4 5 2')).toBe(7);
//      |                                               ^
//   44 | });
//   45 |
//   46 | test('No entry nodes, direct cycle', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/30_prompt3.test.js:43:47)

// ● No entry nodes, direct cycle

// expect(received).toBe(expected) // Object.is equality

// Expected: 4
// Received: 1

//   46 | test('No entry nodes, direct cycle', () => {
//   47 |     // 1<->2
// > 48 |     expect(runSolveWithInput('2\n2 1')).toBe(4);
//      |                                         ^
//   49 | });
//   50 |
//   51 | test('Edge: All spiders form a simple two cycle', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/30_prompt3.test.js:48:41)

// ● Edge: All spiders form a simple two cycle

// expect(received).toBe(expected) // Object.is equality

// Expected: 4
// Received: 2

//   51 | test('Edge: All spiders form a simple two cycle', () => {
//   52 |     // 1→2, 2→1, 3→4, 4→3 (two parallel cycles)
// > 53 |     expect(runSolveWithInput('4\n2 1 4 3')).toBe(4);
//      |                                             ^
//   54 | });
//   55 |
//   56 | test('Edge: Disconnected chain to cycle', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/30_prompt3.test.js:53:45)

// ● Edge: Disconnected chain to cycle

// expect(received).toBe(expected) // Object.is equality

// Expected: 6
// Received: 2

//   56 | test('Edge: Disconnected chain to cycle', () => {
//   57 |     // 1→2, 2→3, 3→1; 4→1
// > 58 |     expect(runSolveWithInput('4\n2 3 1 1')).toBe(6);
//      |                                             ^
//   59 | });
//   60 |
//   61 | test('Edge: Disconnected chains both into cycle', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/30_prompt3.test.js:58:45)

// ● Edge: Disconnected chains both into cycle

// expect(received).toBe(expected) // Object.is equality

// Expected: 7
// Received: 2

//   61 | test('Edge: Disconnected chains both into cycle', () => {
//   62 |     // 1→2, 2→3, 3→1 (cycle), 4→5, 5→1
// > 63 |     expect(runSolveWithInput('5\n2 3 1 5 1')).toBe(7);
//      |                                               ^
//   64 | });
//   65 |
//   66 | test('Edge: n=2e5 maximal test, big cycle', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/30_prompt3.test.js:63:47)

// ● Edge: n=2e5 maximal test, big cycle

// expect(received).toBe(expected) // Object.is equality

// Expected: 200002
// Received: 1

//   69 |     let arr = Array.from({length: n-1}, (_, idx) => idx+2).concat([1]);
//   70 |     let input = `${n}\n${arr.join(' ')}`;
// > 71 |     expect(runSolveWithInput(input)).toBe(200002);
//      |                                      ^
//   72 | });
//   73 |
//   74 | test('Edge: All chain into a 2-cycle at the end', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/30_prompt3.test.js:71:38)

// ● Edge: All chain into a 2-cycle at the end

// expect(received).toBe(expected) // Object.is equality

// Expected: 9
// Received: 1

//   79 |     arr.push(n-1);
//   80 |     let input = `${n}\n${arr.join(' ')}`;
// > 81 |     expect(runSolveWithInput(input)).toBe(9);
//      |                                      ^
//   82 | });

//   at Object.toBe (tests-descriptive/tests-prompt3/30_prompt3.test.js:81:38)
