import { solve } from '../../solutions-descriptive/23.js';

test('basic example 1 - small i', () => {
  expect(solve(1n, 10n, 1, 1n)).toBe(12n);
});

test('basic example 2 - all excluded k', () => {
  expect(solve(4n, 7n, 2, 4n)).toBe(10n);
});

test('range where k is always excluded', () => {
  expect(solve(0n, 3n, 2, 2n)).toBe(1n);
});

test('single number, included', () => {
  expect(solve(5n, 5n, 1, 0n)).toBe(5n);
});

test('single number, excluded', () => {
  expect(solve(4n, 4n, 2, 0n)).toBe(0n);
});

test('larger range, simple exclusion', () => {
  expect(solve(8n, 15n, 3, 7n)).toBe(56n);
});

test('l = r = 0', () => {
  expect(solve(0n, 0n, 0, 0n)).toBe(0n);
});

test('i = 0, every number except k=0', () => {
  expect(solve(1n, 5n, 0, 0n)).toBe(3n);
});

test('entire possible k values are skipped', () => {
  expect(solve(10n, 20n, 4, 8n)).toBe(33n);
});

test('lower end BigInt', () => {
  expect(solve(0n, 1000000n, 5, 7n)).not.toBeNull();
});

test('upper end BigInt', () => {
  expect(typeof solve(9007199254740990n, 9007199254741000n, 3, 5n)).toBe('bigint');
});

test('i at upper boundary', () => {
  expect(typeof solve(100n, 1000n, 30, 100000n)).toBe('bigint');
});

test('k = 0 middle of range', () => {
  expect(solve(10n, 30n, 2, 0n)).not.toBeNull();
});

test('range with no exclusions (outside k)', () => {
  expect(solve(1n, 3n, 1, 5n)).toBe(0n ^ 1n ^ 2n ^ 3n);
});

test('full 2^i chunk, skip one', () => {
  expect(solve(0n, 7n, 3, 2n)).toBe(53n);
});

test('extremely large range, test performance', () => {
  expect(typeof solve(1n, 1000000000000000000n, 5, 23n)).toBe('bigint');
});


// basic example 1 - small i

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:41)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt3/23_prompt3.test.js:4:10)

//   ● basic example 2 - all excluded k

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:41)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt3/23_prompt3.test.js:8:10)

//   ● range where k is always excluded

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:41)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt3/23_prompt3.test.js:12:10)

//   ● single number, included

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:41)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt3/23_prompt3.test.js:16:10)

//   ● single number, excluded

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:41)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt3/23_prompt3.test.js:20:10)

//   ● larger range, simple exclusion

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:41)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt3/23_prompt3.test.js:24:10)

//   ● l = r = 0

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:41)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt3/23_prompt3.test.js:28:10)

//   ● i = 0, every number except k=0

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:41)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt3/23_prompt3.test.js:32:10)

//   ● entire possible k values are skipped

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:41)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt3/23_prompt3.test.js:36:10)

//   ● lower end BigInt

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:41)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt3/23_prompt3.test.js:40:10)

//   ● upper end BigInt

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:41)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt3/23_prompt3.test.js:44:17)

//   ● k = 0 middle of range

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:41)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt3/23_prompt3.test.js:52:10)

//   ● full 2^i chunk, skip one

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:41)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt3/23_prompt3.test.js:60:10)

//   ● extremely large range, test performance

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                         ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |
