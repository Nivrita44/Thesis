// @ts-nocheck
'use strict';

// Pure function: calculates the average percentage of orange juice
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
export function solve(types, percents) {
  if (stryMutAct_9fa48("152")) {
    {}
  } else {
    stryCov_9fa48("152");
    const sum = percents.reduce(stryMutAct_9fa48("153") ? () => undefined : (stryCov_9fa48("153"), (acc, val) => stryMutAct_9fa48("154") ? acc - val : (stryCov_9fa48("154"), acc + val)), 0);
    return stryMutAct_9fa48("155") ? sum * types : (stryCov_9fa48("155"), sum / types);
  }
}

// Test function to validate the logic
// function testing_test() {
//     const testCases = [{
//             input: { types: 3, percents: [50, 50, 100] },
//             expected: 66.66666666666667
//         },
//         {
//             input: { types: 4, percents: [0, 25, 50, 75] },
//             expected: 37.5
//         },
//         {
//             input: { types: 3, percents: [0, 1, 8] },
//             expected: 3
//         },
//         {
//             input: { types: 1, percents: [100] },
//             expected: 100
//         }
//     ];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input.types, input.percents);
//         const pass = Math.abs(result - expected) < 1e-9; // handle floating point precision
//         console.log(`Test Case ${index + 1}:`);
//         console.log(`Input: types = ${input.types}, percents = [${input.percents.join(', ')}]`);
//         console.log(`Expected: ${expected}`);
//         console.log(`Actual:   ${result}`);
//         console.log(`Status: ${pass ? 'PASS' : 'FAIL'}\n`);
//     });
// }

// // Run the test
// testing_test();