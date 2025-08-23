// @ts-nocheck
// 
'use strict';

//Pure function: Accepts an array of numbers, returns an array of results
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
export function solve(numbers) {
  if (stryMutAct_9fa48("115")) {
    {}
  } else {
    stryCov_9fa48("115");
    return numbers.map(stryMutAct_9fa48("116") ? () => undefined : (stryCov_9fa48("116"), num => (stryMutAct_9fa48("119") ? num !== 3 : stryMutAct_9fa48("118") ? false : stryMutAct_9fa48("117") ? true : (stryCov_9fa48("117", "118", "119"), num === 3)) ? 3 : 2));
  }
}

//Test function to check correctness
// function testing_test() {
//     const testCases = [{
//         input: [3, 15],
//         expected: [3, 2]
//     }];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);
//         console.log(`Test Case ${index + 1}:`);
//         console.log(`Input: ${input.join(', ')}`);
//         console.log(`Expected Output: ${expected.join(', ')}`);
//         console.log(`Actual Output:   ${result.join(', ')}`);
//         console.log(`Status: ${pass ? "PASS" : "FAIL"}\n`);
//     });
// }

// // Run the test
// testing_test();