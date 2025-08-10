import {
    solve
} from '../../solutions-algorithm/5.js';

test('all elements unique', () => {
    expect(solve([1, 2, 3, 4])).toBe(0);
});

test('all elements same', () => {
    expect(solve([2, 2, 2])).toBe(2);
});

test('example with duplicate in middle', () => {
    expect(solve([3, 1, 4, 3])).toBe(1);
});

test('duplicate at the end', () => {
    expect(solve([1, 2, 3, 4, 1])).toBe(1);
});

test('multiple duplicates', () => {
    expect(solve([1, 2, 2, 3, 4, 3])).toBe(3);
});

test('remove everything except last element', () => {
    expect(solve([1, 1, 1, 1, 2])).toBe(4);
});

test('single element', () => {
    expect(solve([1])).toBe(0);
});

test('last two same, long prefix', () => {
    expect(solve([1, 2, 3, 4, 5, 5])).toBe(5);
});

test('first and last same, all unique in middle', () => {
    expect(solve([2, 3, 4, 5, 6, 7, 2])).toBe(1);
});

test('complex sequence', () => {
    expect(solve([1, 2, 3, 4, 5, 6, 1, 2, 3, 4])).toBe(6);
});
/* FAIL  tests-algorithm/tests-prompt1/5_prompt1.test.js
  √ all elements unique (3 ms)                                                                                                              
  √ all elements same (1 ms)                                                                                                                
  √ example with duplicate in middle (1 ms)                                                                                                 
  √ duplicate at the end                                                                                                                    
  × multiple duplicates (10 ms)                                                                                                             
  × remove everything except last element (2 ms)                                                                                            
  √ single element (1 ms)                                                                                                                   
  √ last two same, long prefix (1 ms)                                                                                                       
  √ first and last same, all unique in middle (1 ms)                                                                                        
  × complex sequence (2 ms)                                                                                                                 
                                                                                                                                            
  ● multiple duplicates                                                                                                                     
                                                                                                                                            
    expect(received).toBe(expected) // Object.is equality

    Expected: 3
    Received: 4

      20 |
      21 | test('multiple duplicates', () => {
    > 22 |     expect(solve([1, 2, 2, 3, 4, 3])).toBe(3);
         |                                       ^
      23 | });
      24 |
      25 | test('remove everything except last element', () => {

      at Object.toBe (tests-algorithm/tests-prompt1/5_prompt1.test.js:22:39)

  ● remove everything except last element

    expect(received).toBe(expected) // Object.is equality

    Expected: 4
    Received: 3

      24 |
      25 | test('remove everything except last element', () => {
    > 26 |     expect(solve([1, 1, 1, 1, 2])).toBe(4);
         |                                    ^
      27 | });
      28 |
      29 | test('single element', () => {

      at Object.toBe (tests-algorithm/tests-prompt1/5_prompt1.test.js:26:36)

  ● complex sequence

    expect(received).toBe(expected) // Object.is equality

    Expected: 6
    Received: 4

      40 |
      41 | test('complex sequence', () => {
    > 42 |     expect(solve([1, 2, 3, 4, 5, 6, 1, 2, 3, 4])).toBe(6);
         |                                                   ^
      43 | });
      44 |
      45 |
 */
