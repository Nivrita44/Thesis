'use strict';

// Pure function: performs the simulation and returns the final queue string
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
export function solve(t, n, queue) {
  if (stryMutAct_9fa48("51")) {
    {}
  } else {
    stryCov_9fa48("51");
    let result = queue;
    for (let i = 0; stryMutAct_9fa48("54") ? i >= n : stryMutAct_9fa48("53") ? i <= n : stryMutAct_9fa48("52") ? false : (stryCov_9fa48("52", "53", "54"), i < n); stryMutAct_9fa48("55") ? i-- : (stryCov_9fa48("55"), i++)) {
      if (stryMutAct_9fa48("56")) {
        {}
      } else {
        stryCov_9fa48("56");
        result = result.replace(/BG/g, stryMutAct_9fa48("57") ? "" : (stryCov_9fa48("57"), 'GB'));
      }
    }
    return result;
  }
}

// Test function to validate correctness
// function testing_test() {
//     const testCases = [{
//             input: { t: 5, n: 1, queue: 'BGGBG' },
//             expected: 'GBGGB'
//         },
//         {
//             input: { t: 8, n: 3, queue: 'BBGBGBGB' },
//             expected: 'GGBGBBBB'
//         }
//     ];

//     console.log("Running Tests...\n");
//     testCases.forEach(({ input, expected }, idx) => {
//         const result = solve(input.t, input.n, input.queue);
//         const pass = result === expected;
//         console.log(
//             `Test Case ${idx + 1}:\n` +
//             `Input: t=${input.t}, n=${input.n}, queue="${input.queue}"\n` +
//             `Expected: "${expected}"\n` +
//             `Actual:   "${result}"\n` +
//             `Status: ${pass ? "PASS" : "FAIL"}\n`
//         );
//     });
// }

// // Run the test
// testing_test();