// @ts-nocheck
// 
'use strict';

// Pure function: processes an array of [l, r] pairs
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
export function solve(pairs) {
  if (stryMutAct_9fa48("120")) {
    {}
  } else {
    stryCov_9fa48("120");
    return pairs.map(([l, r]) => {
      if (stryMutAct_9fa48("121")) {
        {}
      } else {
        stryCov_9fa48("121");
        return (stryMutAct_9fa48("125") ? r >= 2 * l : stryMutAct_9fa48("124") ? r <= 2 * l : stryMutAct_9fa48("123") ? false : stryMutAct_9fa48("122") ? true : (stryCov_9fa48("122", "123", "124", "125"), r < (stryMutAct_9fa48("126") ? 2 / l : (stryCov_9fa48("126"), 2 * l)))) ? stryMutAct_9fa48("127") ? [] : (stryCov_9fa48("127"), [stryMutAct_9fa48("128") ? "" : (stryCov_9fa48("128"), '-1'), stryMutAct_9fa48("129") ? "" : (stryCov_9fa48("129"), '-1')]) : stryMutAct_9fa48("130") ? [] : (stryCov_9fa48("130"), [String(l), String(stryMutAct_9fa48("131") ? 2 / l : (stryCov_9fa48("131"), 2 * l))]);
      }
    });
  }
}

// Test function
// function testing_test() {
//     const testCases = [{
//             input: [
//                 [1, 1337],
//                 [13, 69],
//                 [2, 4],
//                 [88, 89]
//             ],
//             expected: [
//                 ['1', '2'],
//                 ['13', '26'],
//                 ['2', '4'],
//                 ['-1', '-1']
//             ]
//         },
//         {
//             input: [
//                 [5, 20],
//                 [10, 19],
//                 [6, 11]
//             ],
//             expected: [

//                 ['5', '10'],
//                 ['-1', '-1'],
//                 ['-1', '-1']

//             ]
//         }
//     ];

//     console.log("Running Tests...\n");
//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);
//         console.log(`Test Case ${index + 1}:`);
//         input.forEach((pair, i) => {
//             console.log(`Input: ${pair.join(' ')} | Output: ${result[i].join(' ')} | Expected: ${expected[i].join(' ')} | ${result[i].join(' ') === expected[i].join(' ') ? 'PASS ✅' : 'FAIL ❌'}`);
//         });
//         console.log(`Overall Status: ${pass ? 'PASS ✅' : 'FAIL ❌'}\n`);
//     });
// }

// // Run the test
// testing_test();