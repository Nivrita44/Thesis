// @ts-nocheck
import { solve } from '../../solutions-algorithm/30.js';

describe('solve', () => {
    test('should return correct triplet for valid n, basic examples', () => {
        expect(solve(4, [10, 4, 15, 9])).toEqual([
            "YES", expect.stringMatching(/^[1-9][0-9]* [1-9][0-9]* [1-9][0-9]*$/),
            "NO",
            "YES", expect.stringMatching(/^[1-9][0-9]* [1-9][0-9]* [1-9][0-9]*$/),
            "NO"
        ]);
        const [yes1, triplet1, no1, yes2, triplet2, no2] = solve(4, [10, 4, 15, 9]);
        const t1 = triplet1.split(' ').map(Number);
        expect(t1.length).toBe(3);
        t1.forEach(v => expect(v > 0 && v % 3 !== 0).toBe(true));
        expect(new Set(t1).size).toBe(3);
        expect(t1.reduce((a, b) => a + b, 0)).toBe(10);
        const t2 = triplet2.split(' ').map(Number);
        expect(t2.length).toBe(3);
        t2.forEach(v => expect(v > 0 && v % 3 !== 0).toBe(true));
        expect(new Set(t2).size).toBe(3);
        expect(t2.reduce((a, b) => a + b, 0)).toBe(15);
    });

    test('should handle no possible triplet', () => {
        expect(solve(2, [1, 2])).toEqual(["NO", "NO"]);
        expect(solve(3, [3, 6, 9])).toEqual(["NO", "NO", "NO"]);
    });

    test('should handle edge cases for small n', () => {
        expect(solve(5, [1, 2, 3, 4, 5])).toEqual([
            "NO", "NO", "NO", "NO", "YES", expect.stringMatching(/^[1-9] [1-9] [1-9]$/)
        ]);
        const out = solve(5, [1, 2, 3, 4, 5]);
        if (out[4] === "YES") {
            const x = out[5].split(' ').map(Number);
            expect(x[0] + x[1] + x[2]).toBe(5);
            expect(new Set(x).size).toBe(3);
            x.forEach(v => expect(v > 0 && v % 3 !== 0).toBe(true));
        }
    });

    test('should return YES and valid output for n=7', () => {
        const res = solve(1, [7]);
        expect(res[0]).toBe("YES");
        const vals = res[1].split(' ').map(Number);
        expect(vals.reduce((a, b) => a + b, 0)).toBe(7);
        expect(new Set(vals).size).toBe(3);
        vals.forEach(v => expect(v > 0 && v % 3 !== 0).toBe(true));
    });

    test('should reject if a value would be 0 or divisible by 3', () => {
        expect(solve(1, [6])).toEqual(["NO"]);
        expect(solve(1, [9])).toEqual(["NO"]);
        expect(solve(1, [12])).toEqual(["YES", expect.stringMatching(/^[1-9][0-9]* [1-9][0-9]* [1-9][0-9]*$/)]);
        const out = solve(1, [12]);
        if (out[0] === "YES") {
            const t = out[1].split(' ').map(Number);
            expect(t.reduce((a, b) => a + b, 0)).toBe(12);
            expect(new Set(t).size).toBe(3);
            t.forEach(v => expect(v > 0 && v % 3 !== 0).toBe(true));
        }
    });

    test('should handle maximum possible n for performance and correctness', () => {
        const res = solve(1, [1000000000]);
        expect(res[0]).toBe("YES");
        const triplet = res[1].split(' ').map(Number);
        expect(triplet.reduce((a, b) => a + b, 0)).toBe(1000000000);
        expect(new Set(triplet).size).toBe(3);
        triplet.forEach(v => expect(v > 0 && v % 3 !== 0).toBe(true));
    });

    test('triplet values are all distinct and none divisible by 3, if YES', () => {
        for (let n = 7; n <= 20; n++) {
            const res = solve(1, [n]);
            if (res[0] === 'YES') {
                const vals = res[1].split(' ').map(Number);
                expect(vals.length).toBe(3);
                expect(new Set(vals).size).toBe(3);
                vals.forEach(v => expect(v > 0 && v % 3 !== 0).toBe(true));
                expect(vals.reduce((a, b) => a + b, 0)).toBe(n);
            }
        }
    });
});




/* FAIL  tests-algorithm/tests-prompt3/30_prompt3.test.js
  solve                                                                                                                   
    × should return correct triplet for valid n, basic examples (8 ms)                                                    
    × should handle no possible triplet (2 ms)                                                                            
    × should handle edge cases for small n (1 ms)                                                                         
    × should return YES and valid output for n=7 (1 ms)                                                                   
    × should reject if a value would be 0 or divisible by 3 (1 ms)                                                        
    × should handle maximum possible n for performance and correctness (1 ms)                                             
    × triplet values are all distinct and none divisible by 3, if YES (1 ms)                                              
                                                                                                                          
  ● solve › should return correct triplet for valid n, basic examples                                                     
                                                                                                                          
    expect(received).toEqual(expected) // deep equality

    - Expected  - 3
    + Received  + 5

      Array [
        "YES",
        StringMatching /^[1-9][0-9]* [1-9][0-9]* [1-9][0-9]*$/,
    -   "NO",
        "YES",
    -   StringMatching /^[1-9][0-9]* [1-9][0-9]* [1-9][0-9]*$/,
    -   "NO",
    +   "2 1 1",
    +   "YES",
    +   "13 1 1",
    +   "YES",
    +   "7 1 1",
      ]

      3 | describe('solve', () => {
      4 |   test('should return correct triplet for valid n, basic examples', () => {
    > 5 |     expect(solve(4, [10, 4, 15, 9])).toEqual([
        |                                      ^
      6 |       "YES", expect.stringMatching(/^[1-9][0-9]* [1-9][0-9]* [1-9][0-9]*$/),
      7 |       "NO",
      8 |       "YES", expect.stringMatching(/^[1-9][0-9]* [1-9][0-9]* [1-9][0-9]*$/),

      at Object.toEqual (tests-algorithm/tests-prompt3/30_prompt3.test.js:5:38)

  ● solve › should handle no possible triplet

    expect(received).toEqual(expected) // deep equality

    - Expected  - 3
    + Received  + 6

      Array [
    -   "NO",
    -   "NO",
    -   "NO",
    +   "YES",
    +   "1 1 1",
    +   "YES",
    +   "4 1 1",
    +   "YES",
    +   "7 1 1",
      ]

      24 |   test('should handle no possible triplet', () => {
      25 |     expect(solve(2, [1, 2])).toEqual(["NO", "NO"]);
    > 26 |     expect(solve(3, [3, 6, 9])).toEqual(["NO", "NO", "NO"]);
         |                                 ^
      27 |   });
      28 |
      29 |   test('should handle edge cases for small n', () => {

      at Object.toEqual (tests-algorithm/tests-prompt3/30_prompt3.test.js:26:33)

  ● solve › should handle edge cases for small n

    expect(received).toEqual(expected) // deep equality

    - Expected  - 2
    + Received  + 4

      Array [
        "NO",
        "NO",
    -   "NO",
    -   "NO",
    +   "YES",
    +   "1 1 1",
        "YES",
        StringMatching /^[1-9] [1-9] [1-9]$/,
    +   "YES",
    +   "2 2 1",
      ]

      28 |
      29 |   test('should handle edge cases for small n', () => {
    > 30 |     expect(solve(5, [1, 2, 3, 4, 5])).toEqual([
         |                                       ^
      31 |       "NO", "NO", "NO", "NO", "YES", expect.stringMatching(/^[1-9] [1-9] [1-9]$/)
      32 |     ]);
      33 |     const out = solve(5, [1, 2, 3, 4, 5]);

      at Object.toEqual (tests-algorithm/tests-prompt3/30_prompt3.test.js:30:39)

  ● solve › should return YES and valid output for n=7

    expect(received).toBe(expected) // Object.is equality

    Expected: 3
    Received: 2

      45 |     const vals = res[1].split(' ').map(Number);
      46 |     expect(vals.reduce((a,b)=>a+b,0)).toBe(7);
    > 47 |     expect(new Set(vals).size).toBe(3);
         |                                ^
      48 |     vals.forEach(v => expect(v>0 && v%3!==0).toBe(true));
      49 |   });
      50 |

      at Object.toBe (tests-algorithm/tests-prompt3/30_prompt3.test.js:47:32)

  ● solve › should reject if a value would be 0 or divisible by 3

    expect(received).toEqual(expected) // deep equality

    - Expected  - 1
    + Received  + 2

      Array [
    -   "NO",
    +   "YES",
    +   "4 1 1",
      ]

      50 |
      51 |   test('should reject if a value would be 0 or divisible by 3', () => {
    > 52 |     expect(solve(1, [6])).toEqual(["NO"]);
         |                           ^
      53 |     expect(solve(1, [9])).toEqual(["NO"]);
      54 |     expect(solve(1, [12])).toEqual(["YES", expect.stringMatching(/^[1-9][0-9]* [1-9][0-9]* [1-9][0-9]*$/)]);   
      55 |     const out = solve(1, [12]);

      at Object.toEqual (tests-algorithm/tests-prompt3/30_prompt3.test.js:52:27)

  ● solve › should handle maximum possible n for performance and correctness

    expect(received).toBe(expected) // Object.is equality

    Expected: 3
    Received: 2

      67 |     const triplet = res[1].split(' ').map(Number);
      68 |     expect(triplet.reduce((a,b)=>a+b,0)).toBe(1000000000);
    > 69 |     expect(new Set(triplet).size).toBe(3);
         |                                   ^
      70 |     triplet.forEach(v => expect(v>0 && v%3!==0).toBe(true));
      71 |   });
      72 |

      at Object.toBe (tests-algorithm/tests-prompt3/30_prompt3.test.js:69:35)

  ● solve › triplet values are all distinct and none divisible by 3, if YES

    expect(received).toBe(expected) // Object.is equality

    Expected: 3
    Received: 2

      77 |         const vals = res[1].split(' ').map(Number);
      78 |         expect(vals.length).toBe(3);
    > 79 |         expect(new Set(vals).size).toBe(3);
         |                                    ^
      80 |         vals.forEach(v => expect(v > 0 && v % 3 !== 0).toBe(true));*/
