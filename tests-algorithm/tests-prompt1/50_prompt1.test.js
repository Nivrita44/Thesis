import { solve } from '../../../solutions-algorithm/50.js';

test('example 1', () => {
  const n = 5;
  const q = 3;
  const s = 'abbcb';
  const queries = [
    [1, 5],
    [2, 4],
    [3, 3]
  ];
  expect(solve(n, q, s, queries)).toEqual([10, 7, 2]);
});

test('single character, single query', () => {
  const n = 1;
  const q = 1;
  const s = 'a';
  const queries = [
    [1, 1]
  ];
  expect(solve(n, q, s, queries)).toEqual([1]);
});

test('all same letter', () => {
  const n = 4;
  const q = 2;
  const s = 'cccc';
  const queries = [
    [1, 4],
    [2, 3]
  ];
  expect(solve(n, q, s, queries)).toEqual([12, 6]);
});

test('all letters of increasing alphabet, full range', () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const n = 26;
  const q = 1;
  const s = alphabet;
  const queries = [
    [1, 26]
  ];
  const expected = [...Array(26).keys()].reduce((a, v) => a + (v + 1), 0);
  expect(solve(n, q, s, queries)).toEqual([expected]);
});

test('segment in the middle', () => {
  const n = 7;
  const q = 2;
  const s = 'abcdefg';
  const queries = [
    [2, 4], // 'bcd' = 2+3+4 = 9
    [4, 7]  // 'defg' = 4+5+6+7 = 22
  ];
  expect(solve(n, q, s, queries)).toEqual([9, 22]);
});

test('multiple queries overlapping', () => {
  const n = 6;
  const q = 3;
  const s = 'banana';
  const queries = [
    [1, 6], // 'banana'
    [2, 5], // 'anan'
    [3, 4]  // 'na'
  ];
  const getLength = (t) => [...t].reduce((sum,c)=>sum+(c.charCodeAt(0)-96),0);
  expect(solve(n, q, s, queries)).toEqual([
    getLength('banana'),
    getLength('anan'),
    getLength('na')
  ]);
});

test('query is a single occurrence of max letter "z"', () => {
  const n = 5;
  const q = 1;
  const s = 'abcdz';
  const queries = [
    [5, 5]
  ];
  expect(solve(n, q, s, queries)).toEqual([26]);
});

test('minimum input values', () => {
  const n = 1;
  const q = 1;
  const s = 'z';
  const queries = [
    [1, 1]
  ];
  expect(solve(n, q, s, queries)).toEqual([26]);
});



// ● example 1

//     TypeError: queries.map is not a function

//        8 |     }
//        9 |
//     > 10 |     return queries.map(([l, r]) => a[r] - a[l - 1]);
//          |                    ^
//       11 | }
//       12 |
//       13 | // Test function

//       at map (solutions-algorithm/50.js:10:20)
//       at Object.solve (tests-algorithm/tests-prompt1/50_prompt1.test.js:12:10)

//   ● single character, single query

//     TypeError: queries.map is not a function

//        8 |     }
//        9 |
//     > 10 |     return queries.map(([l, r]) => a[r] - a[l - 1]);
//          |                    ^
//       11 | }
//       12 |
//       13 | // Test function

//       at map (solutions-algorithm/50.js:10:20)
//       at Object.solve (tests-algorithm/tests-prompt1/50_prompt1.test.js:22:10)

//   ● all same letter

//     TypeError: queries.map is not a function

//        8 |     }
//        9 |
//     > 10 |     return queries.map(([l, r]) => a[r] - a[l - 1]);
//          |                    ^
//       11 | }
//       12 |
//       13 | // Test function

//       at map (solutions-algorithm/50.js:10:20)
//       at Object.solve (tests-algorithm/tests-prompt1/50_prompt1.test.js:33:10)

//   ● all letters of increasing alphabet, full range

//     TypeError: queries.map is not a function

//        8 |     }
//        9 |
//     > 10 |     return queries.map(([l, r]) => a[r] - a[l - 1]);
//          |                    ^
//       11 | }
//       12 |
//       13 | // Test function

//       at map (solutions-algorithm/50.js:10:20)
//       at Object.solve (tests-algorithm/tests-prompt1/50_prompt1.test.js:45:10)

//   ● segment in the middle

//     TypeError: queries.map is not a function

//        8 |     }
//        9 |
//     > 10 |     return queries.map(([l, r]) => a[r] - a[l - 1]);
//          |                    ^
//       11 | }
//       12 |
//       13 | // Test function

//       at map (solutions-algorithm/50.js:10:20)
//       at Object.solve (tests-algorithm/tests-prompt1/50_prompt1.test.js:56:10)

//   ● multiple queries overlapping

//     TypeError: queries.map is not a function

//        8 |     }
//        9 |
//     > 10 |     return queries.map(([l, r]) => a[r] - a[l - 1]);
//          |                    ^
//       11 | }
//       12 |
//       13 | // Test function

//       at map (solutions-algorithm/50.js:10:20)
//       at Object.solve (tests-algorithm/tests-prompt1/50_prompt1.test.js:69:10)

//   ● query is a single occurrence of max letter "z"

//     TypeError: queries.map is not a function

//        8 |     }
//        9 |
//     > 10 |     return queries.map(([l, r]) => a[r] - a[l - 1]);
//          |                    ^
//       11 | }
//       12 |
//       13 | // Test function

//       at map (solutions-algorithm/50.js:10:20)
//       at Object.solve (tests-algorithm/tests-prompt1/50_prompt1.test.js:83:10)

//   ● minimum input values

//     TypeError: queries.map is not a function

//        8 |     }
//        9 |
//     > 10 |     return queries.map(([l, r]) => a[r] - a[l - 1]);
//          |                    ^
//       11 | }
//       12 |
//       13 | // Test function

//       at map (solutions-algorithm/50.js:10:20)
//       at Object.solve (tests-algorithm/tests-prompt1/50_prompt1.test.js:93:10)
