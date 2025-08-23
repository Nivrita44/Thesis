// @ts-nocheck
// 
'use strict';

// Pure function: processes a list of [a, b, c] triples and returns results
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
export function solve(triplets) {
  if (stryMutAct_9fa48("156")) {
    {}
  } else {
    stryCov_9fa48("156");
    return triplets.map(([a, b, c]) => {
      if (stryMutAct_9fa48("157")) {
        {}
      } else {
        stryCov_9fa48("157");
        return (stryMutAct_9fa48("160") ? (a + b === c || b + c === a) && a + c === b : stryMutAct_9fa48("159") ? false : stryMutAct_9fa48("158") ? true : (stryCov_9fa48("158", "159", "160"), (stryMutAct_9fa48("162") ? a + b === c && b + c === a : stryMutAct_9fa48("161") ? false : (stryCov_9fa48("161", "162"), (stryMutAct_9fa48("164") ? a + b !== c : stryMutAct_9fa48("163") ? false : (stryCov_9fa48("163", "164"), (stryMutAct_9fa48("165") ? a - b : (stryCov_9fa48("165"), a + b)) === c)) || (stryMutAct_9fa48("167") ? b + c !== a : stryMutAct_9fa48("166") ? false : (stryCov_9fa48("166", "167"), (stryMutAct_9fa48("168") ? b - c : (stryCov_9fa48("168"), b + c)) === a)))) || (stryMutAct_9fa48("170") ? a + c !== b : stryMutAct_9fa48("169") ? false : (stryCov_9fa48("169", "170"), (stryMutAct_9fa48("171") ? a - c : (stryCov_9fa48("171"), a + c)) === b)))) ? stryMutAct_9fa48("172") ? "" : (stryCov_9fa48("172"), "YES") : stryMutAct_9fa48("173") ? "" : (stryCov_9fa48("173"), "NO");
      }
    });
  }
}

// Test function
// function testing_test() {
//     const testCases = [{
//         input: [
//             [1, 4, 3],
//             [2, 5, 8],
//             [9, 11, 20],
//             [0, 0, 0],
//             [20, 20, 20],
//             [4, 12, 3],
//             [15, 7, 8]
//         ],
//         expected: [
//             "YES",
//             "NO",
//             "YES",
//             "YES",
//             "NO",
//             "NO",
//             "YES"
//         ]
//     }];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);
//         console.log(`Test Case ${index + 1}:`);
//         input.forEach((triple, i) => {
//             const status = result[i] === expected[i] ? 'PASS ✅' : 'FAIL ❌';
//             console.log(`Input: ${triple.join(' ')} | Expected: ${expected[i]} | Got: ${result[i]} | ${status}`);
//         });
//         console.log(`Overall Status: ${pass ? 'PASS ✅' : 'FAIL ❌'}\n`);
//     });
// }

// // Run test
// testing_test();