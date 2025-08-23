'use strict';

// Pure function
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
export function solve(testCases) {
  if (stryMutAct_9fa48("182")) {
    {}
  } else {
    stryCov_9fa48("182");
    return testCases.map(([a, b, n]) => {
      if (stryMutAct_9fa48("183")) {
        {}
      } else {
        stryCov_9fa48("183");
        const x = Math.floor(stryMutAct_9fa48("184") ? (n - b) * a : (stryCov_9fa48("184"), (stryMutAct_9fa48("185") ? n + b : (stryCov_9fa48("185"), n - b)) / a));
        return stryMutAct_9fa48("186") ? a * x - b : (stryCov_9fa48("186"), (stryMutAct_9fa48("187") ? a / x : (stryCov_9fa48("187"), a * x)) + b);
      }
    });
  }
}

// Test function
// function testing_test() {
//     const testCases = [{
//         input: [
//             [7, 5, 12345],
//             [5, 0, 4],
//             [10, 5, 15],
//             [17, 8, 54321],
//             [499999993, 9, 1000000000],
//             [10, 5, 187],
//             [2, 0, 999999999]
//         ],
//         expected: [
//             12339,
//             0,
//             15,
//             54306,
//             999999995,
//             185,
//             999999998
//         ]
//     }];

//     console.log("Running Tests...\n");
//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);

//         console.log(`Test Case ${index + 1}:`);
//         input.forEach(([a, b, n], i) => {
//             const actual = result[i];
//             const expect = expected[i];
//             const status = actual === expect ? 'PASS ✅' : 'FAIL ❌';
//             console.log(`Input: a=${a}, b=${b}, n=${n} | Expected: ${expect} | Got: ${actual} | ${status}`);
//         });
//         console.log(`Overall Status: ${pass ? 'PASS ✅' : 'FAIL ❌'}\n`);
//     });
// }

// // Run test
// testing_test();