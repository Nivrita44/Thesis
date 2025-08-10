import { solve } from '../../../solutions-algorithm/30.js';

test('typical cases', () => {
    expect(solve(4, [10, 4, 15, 9])).toEqual([
        "YES", "5 4 1",
        "NO",
        "YES", "8 5 2",
        "NO"
    ]);
    expect(solve(3, [3, 5, 6])).toEqual([
        "NO",
        "YES", "2 2 1",
        "YES", "2 3 1"
    ]);
});

test('all NO outputs', () => {
    expect(solve(2, [2, 3])).toEqual([
        "NO",
        "NO"
    ]);
});

test('edge: minimum allowed n', () => {
    expect(solve(1, [1])).toEqual(["NO"]);
    expect(solve(1, [2])).toEqual(["NO"]);
    expect(solve(1, [3])).toEqual(["NO"]);
});

test('large input', () => {
    expect(solve(1, [100])).toContain("YES");
    expect(solve(1, [100])).toHaveLength(2);
});

test('impossible when all split numbers will hit divisibility by 3', () => {
    expect(solve(1, [6])).toEqual(["YES", "2 3 1"]);
    expect(solve(1, [12])).toEqual(["YES", "8 3 1"]);
});

test('test where only one partition possible', () => {
    expect(solve(1, [5])).toEqual(["YES", "2 2 1"]);
    expect(solve(1, [7])).toEqual(["YES", "5 1 1"]);
});

test('empty input', () => {
    expect(solve(0, [])).toEqual([]);
});
/*
FAIL  tests-algorithm/tests-prompt2/30_prompt2.test.js
 × typical cases (17 ms)                                                                                                 
 × all NO outputs (2 ms)                                                                                                 
 × edge: minimum allowed n (3 ms)                                                                                        
 √ large input (11 ms)                                                                                                   
 × impossible when all split numbers will hit divisibility by 3 (3 ms)                                                   
 √ test where only one partition possible (1 ms)                                                                         
 √ empty input (1 ms)                                                                                                    
                                                                                                                         
 ● typical cases                                                                                                         
                                                                                                                         
   expect(received).toEqual(expected) // deep equality

   - Expected  - 4
   + Received  + 6

     Array [
       "YES",
   -   "5 4 1",
   -   "NO",
   +   "8 1 1",
       "YES",
   -   "8 5 2",
   -   "NO",
   +   "2 1 1",
   +   "YES",
   +   "13 1 1",
   +   "YES",
   +   "7 1 1",
     ]

     2 |
     3 | test('typical cases', () => {
   > 4 |   expect(solve(4, [10, 4, 15, 9])).toEqual([
       |                                    ^
     5 |     "YES", "5 4 1",
     6 |     "NO",
     7 |     "YES", "8 5 2",

     at Object.toEqual (tests-algorithm/tests-prompt2/30_prompt2.test.js:4:36)

 ● all NO outputs

   expect(received).toEqual(expected) // deep equality

   - Expected  - 1
   + Received  + 2

     Array [
       "NO",
   -   "NO",
   +   "YES",
   +   "1 1 1",
     ]

     16 |
     17 | test('all NO outputs', () => {
   > 18 |   expect(solve(2, [2, 3])).toEqual([
        |                            ^
     19 |     "NO",
     20 |     "NO"
     21 |   ]);

     at Object.toEqual (tests-algorithm/tests-prompt2/30_prompt2.test.js:18:28)

 ● edge: minimum allowed n

   expect(received).toEqual(expected) // deep equality

   - Expected  - 1
   + Received  + 2

     Array [
   -   "NO",
   +   "YES",
   +   "1 1 1",
     ]

     25 |   expect(solve(1, [1])).toEqual(["NO"]);
     26 |   expect(solve(1, [2])).toEqual(["NO"]);
   > 27 |   expect(solve(1, [3])).toEqual(["NO"]);
        |                         ^
     28 | });
     29 |
     30 | test('large input', () => {

     at Object.toEqual (tests-algorithm/tests-prompt2/30_prompt2.test.js:27:25)

 ● impossible when all split numbers will hit divisibility by 3

   expect(received).toEqual(expected) // deep equality

   - Expected  - 1
   + Received  + 1

     Array [
       "YES",
   -   "2 3 1",
   +   "4 1 1",
     ]

     34 |
     35 | test('impossible when all split numbers will hit divisibility by 3', () => {
   > 36 |   expect(solve(1, [6])).toEqual(["YES", "2 3 1"]);
        |                         ^
     37 |   expect(solve(1, [12])).toEqual(["YES", "8 3 1"]);
     38 | });
     39 |
/*/
