// @ts-nocheck
import { solve } from '../../solutions-descriptive/47.js';

test('typical case with distinct a and b', () => {
  const testCases = [
    { n: 3, k: 4, a: [10, 7, 5], b: [2, 1, 3] }
  ];
  expect(solve(testCases)).toEqual(['29']);
});

test('all zeros in a', () => {
  const testCases = [
    { n: 2, k: 3, a: [0, 0], b: [1, 2] }
  ];
  expect(solve(testCases)).toEqual(['0']);
});

test('all zeros in b', () => {
  const testCases = [
    { n: 2, k: 2, a: [5, 8], b: [0, 0] }
  ];
  expect(solve(testCases)).toEqual(['13']);
});

test('k is zero, no operations allowed', () => {
  const testCases = [
    { n: 3, k: 0, a: [5, 2, 7], b: [1, 1, 1] }
  ];
  expect(solve(testCases)).toEqual(['0']);
});

test('one element, one operation', () => {
  const testCases = [
    { n: 1, k: 1, a: [10], b: [2] }
  ];
  expect(solve(testCases)).toEqual(['10']);
});

test('large n, b[i] is 1', () => {
  const a = Array.from({length: 5}, (_, i) => i + 1);
  const b = Array(5).fill(1);
  const testCases = [
    { n: 5, k: 5, a, b }
  ];
  expect(solve(testCases)).toEqual(['15']);
});

test('b[i] greater than a[i]', () => {
  const testCases = [
    { n: 2, k: 2, a: [2, 3], b: [5, 10] }
  ];
  expect(solve(testCases)).toEqual(['5']);
});

test('all elements same a, same b', () => {
  const testCases = [
    { n: 4, k: 3, a: [5, 5, 5, 5], b: [2, 2, 2, 2] }
  ];
  expect(solve(testCases)).toEqual(['15']);
});

test('operation count more than all elements sum', () => {
  const testCases = [
    { n: 3, k: 10, a: [2, 3, 4], b: [1, 1, 1] }
  ];
  expect(solve(testCases)).toEqual(['9']);
});

test('large values', () => {
  const testCases = [
    { n: 2, k: 3, a: [1000000000, 999999999], b: [100000000, 99999999] }
  ];
  expect(solve(testCases)).toEqual(['2899999997']);
});




// typical case with distinct a and b

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       28 |             let iterations = Math.max(0, Math.floor((updatedValues[i] - high) / b[i]) + 1);
//       29 |             remainingOperations -= iterations;
//     > 30 |             totalScore += BigInt(iterations) * BigInt(updatedValues[i] + updatedValues[i] - (iterations - 1) * b[i]) / 2n;
//          |                                                                                                                     ^
//       31 |             updatedValues[i] -= b[i] * iterations;
//       32 |         }
//       33 |

//       at solve (solutions-descriptive/47.js:30:117)
//       at Object.solve (tests-descriptive/tests-prompt2/47_prompt2.test.js:7:10)

//   ● all zeros in a

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       28 |             let iterations = Math.max(0, Math.floor((updatedValues[i] - high) / b[i]) + 1);
//       29 |             remainingOperations -= iterations;
//     > 30 |             totalScore += BigInt(iterations) * BigInt(updatedValues[i] + updatedValues[i] - (iterations - 1) * b[i]) / 2n;
//          |                                                                                                                     ^
//       31 |             updatedValues[i] -= b[i] * iterations;
//       32 |         }
//       33 |

//       at solve (solutions-descriptive/47.js:30:117)
//       at Object.solve (tests-descriptive/tests-prompt2/47_prompt2.test.js:14:10)

//   ● all zeros in b

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       28 |             let iterations = Math.max(0, Math.floor((updatedValues[i] - high) / b[i]) + 1);
//       29 |             remainingOperations -= iterations;
//     > 30 |             totalScore += BigInt(iterations) * BigInt(updatedValues[i] + updatedValues[i] - (iterations - 1) * b[i]) / 2n;
//          |                                                                                                                     ^
//       31 |             updatedValues[i] -= b[i] * iterations;
//       32 |         }
//       33 |

//       at solve (solutions-descriptive/47.js:30:117)
//       at Object.solve (tests-descriptive/tests-prompt2/47_prompt2.test.js:21:10)

//   ● k is zero, no operations allowed

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       28 |             let iterations = Math.max(0, Math.floor((updatedValues[i] - high) / b[i]) + 1);
//       29 |             remainingOperations -= iterations;
//     > 30 |             totalScore += BigInt(iterations) * BigInt(updatedValues[i] + updatedValues[i] - (iterations - 1) * b[i]) / 2n;
//          |                                                                                                                     ^
//       31 |             updatedValues[i] -= b[i] * iterations;
//       32 |         }
//       33 |

//       at solve (solutions-descriptive/47.js:30:117)
//       at Object.solve (tests-descriptive/tests-prompt2/47_prompt2.test.js:28:10)

//   ● one element, one operation

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       28 |             let iterations = Math.max(0, Math.floor((updatedValues[i] - high) / b[i]) + 1);
//       29 |             remainingOperations -= iterations;
//     > 30 |             totalScore += BigInt(iterations) * BigInt(updatedValues[i] + updatedValues[i] - (iterations - 1) * b[i]) / 2n;
//          |                                                                                                                     ^
//       31 |             updatedValues[i] -= b[i] * iterations;
//       32 |         }
//       33 |

//       at solve (solutions-descriptive/47.js:30:117)
//       at Object.solve (tests-descriptive/tests-prompt2/47_prompt2.test.js:35:10)

//   ● large n, b[i] is 1

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       28 |             let iterations = Math.max(0, Math.floor((updatedValues[i] - high) / b[i]) + 1);
//       29 |             remainingOperations -= iterations;
//     > 30 |             totalScore += BigInt(iterations) * BigInt(updatedValues[i] + updatedValues[i] - (iterations - 1) * b[i]) / 2n;
//          |                                                                                                                     ^
//       31 |             updatedValues[i] -= b[i] * iterations;
//       32 |         }
//       33 |

//       at solve (solutions-descriptive/47.js:30:117)
//       at Object.solve (tests-descriptive/tests-prompt2/47_prompt2.test.js:44:10)

//   ● b[i] greater than a[i]

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       28 |             let iterations = Math.max(0, Math.floor((updatedValues[i] - high) / b[i]) + 1);
//       29 |             remainingOperations -= iterations;
//     > 30 |             totalScore += BigInt(iterations) * BigInt(updatedValues[i] + updatedValues[i] - (iterations - 1) * b[i]) / 2n;
//          |                                                                                                                     ^
//       31 |             updatedValues[i] -= b[i] * iterations;
//       32 |         }
//       33 |

//       at solve (solutions-descriptive/47.js:30:117)
//       at Object.solve (tests-descriptive/tests-prompt2/47_prompt2.test.js:51:10)

//   ● all elements same a, same b

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       28 |             let iterations = Math.max(0, Math.floor((updatedValues[i] - high) / b[i]) + 1);
//       29 |             remainingOperations -= iterations;
//     > 30 |             totalScore += BigInt(iterations) * BigInt(updatedValues[i] + updatedValues[i] - (iterations - 1) * b[i]) / 2n;
//          |                                                                                                                     ^
//       31 |             updatedValues[i] -= b[i] * iterations;
//       32 |         }
//       33 |

//       at solve (solutions-descriptive/47.js:30:117)
//       at Object.solve (tests-descriptive/tests-prompt2/47_prompt2.test.js:58:10)

//   ● operation count more than all elements sum

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       28 |             let iterations = Math.max(0, Math.floor((updatedValues[i] - high) / b[i]) + 1);
//       29 |             remainingOperations -= iterations;
//     > 30 |             totalScore += BigInt(iterations) * BigInt(updatedValues[i] + updatedValues[i] - (iterations - 1) * b[i]) / 2n;
//          |                                                                                                                     ^
//       31 |             updatedValues[i] -= b[i] * iterations;
//       32 |         }
//       33 |

//       at solve (solutions-descriptive/47.js:30:117)
//       at Object.solve (tests-descriptive/tests-prompt2/47_prompt2.test.js:65:10)

//   ● large values

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       28 |             let iterations = Math.max(0, Math.floor((updatedValues[i] - high) / b[i]) + 1);
//       29 |             remainingOperations -= iterations;
//     > 30 |             totalScore += BigInt(iterations) * BigInt(updatedValues[i] + updatedValues[i] - (iterations - 1) * b[i]) / 2n;
//          |                                                                                                                     ^
//       31 |             updatedValues[i] -= b[i] * iterations;
//       32 |         }
//       33 |

//       at solve (solutions-descriptive/47.js:30:117)
//       at Object.solve (tests-descriptive/tests-prompt2/47_prompt2.test.js:72:10)

