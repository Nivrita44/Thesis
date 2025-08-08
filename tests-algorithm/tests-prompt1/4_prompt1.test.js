import {
    solve
} from '../../solutions-algorithm/4.js';

test('sample test 1', () => {
    expect(solve([
        1, 2
    ])).toEqual([-1, 1]);
});

test('sample test 2', () => {
    expect(solve(
        [5, 7, 7]
    )).toEqual([-2, 0, 0]);
});

test('sample test 3', () => {
    expect(solve([1, 2, 3, 4, 5])).toEqual([-1, -2, -3, -4, 1]);
});

test('all equal elements', () => {
    expect(solve([9, 9, 9, 9])).toEqual([0, 0, 0, 0]);
});

test('two elements, descending', () => {
    expect(solve([10, 8])).toEqual([2, -2]);
});

test('two elements, ascending', () => {
    expect(solve([3, 9])).toEqual([-6, 6]);
});

test('mixed values', () => {
    expect(solve([4, 1, 100, 2, 99, 3])).toEqual([-96, -99, 1, -97, 1, -96]);
});

test('second max duplicate', () => {
    expect(solve([3, 5, 5, 2])).toEqual([-2, 0, 0, -3]);
});

test('max at the end', () => {
    expect(solve([1, 2, 3, 6])).toEqual([-5, -4, -3, 3]);
});

test('max at the start', () => {
    expect(solve([10, 3, 4, 5])).toEqual([6, -7, -6, -5]);
});
/*  FAIL  tests-algorithm/tests-prompt1/4_prompt1.test.js
 √ sample test 1 (3 ms)                                                                                                  
 √ sample test 2                                                                                                         
 × sample test 3 (4 ms)                                                                                                  
 √ all equal elements (1 ms)                                                                                             
 √ two elements, descending                                                                                              
 √ two elements, ascending (2 ms)                                                                                        
 × mixed values (2 ms)                                                                                                   
 √ second max duplicate                                                                                                  
 √ max at the end (1 ms)                                                                                                 
 × max at the start (1 ms)                                                                                               
                                                                                                                         
 ● sample test 3                                                                                                         
                                                                                                                         
   expect(received).toEqual(expected) // deep equality

   - Expected  - 3
   + Received  + 3

     Array [
   -   -1,
   -   -2,
   -   -3,
       -4,
   +   -3,
   +   -2,
   +   -1,
       1,
     ]

     16 |
     17 | test('sample test 3', () => {
   > 18 |     expect(solve([1, 2, 3, 4, 5])).toEqual([-1, -2, -3, -4, 1]);
        |                                    ^
     19 | });
     20 |
     21 | test('all equal elements', () => {

     at Object.toEqual (tests-algorithm/tests-prompt1/4_prompt1.test.js:18:36)

 ● mixed values

   expect(received).toEqual(expected) // deep equality

   - Expected  - 2
   + Received  + 2

     Array [
       -96,
       -99,
       1,
   +   -98,
   +   -1,
       -97,
   -   1,
   -   -96,
     ]

     32 |
     33 | test('mixed values', () => {
   > 34 |     expect(solve([4, 1, 100, 2, 99, 3])).toEqual([-96, -99, 1, -97, 1, -96]);
        |                                          ^
     35 | });
     36 |
     37 | test('second max duplicate', () => {

     at Object.toEqual (tests-algorithm/tests-prompt1/4_prompt1.test.js:34:42)

 ● max at the start

   expect(received).toEqual(expected) // deep equality

   - Expected  - 1
   + Received  + 1

     Array [
   -   6,
   +   5,
       -7,
       -6,
       -5,
     ]

     44 |
     45 | test('max at the start', () => {
   > 46 |     expect(solve([10, 3, 4, 5])).toEqual([6, -7, -6, -5]);
        |                                  ^
     47 | });
     48 |
     49 |
*/