'use strict';

// ✅ Pure function: Takes array of integers, returns array of results
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
  if (stryMutAct_9fa48("48")) {
    {}
  } else {
    stryCov_9fa48("48");
    return numbers.map(stryMutAct_9fa48("49") ? () => undefined : (stryCov_9fa48("49"), n => stryMutAct_9fa48("50") ? n + 1 : (stryCov_9fa48("50"), n - 1)));
  }
}

// ✅ Test function: Verifies correctness
// function testing_test() {
//     const input = [2, 4, 6];
//     const expectedOutput = [1, 3, 5];
//     const result = solve(input);

//     console.log("Running Tests...\n");
//     result.forEach((val, idx) => {
//         const pass = val === expectedOutput[idx];
//         console.log(
//             `Input: ${input[idx]} => Output: ${val} | Expected: ${expectedOutput[idx]} | ${pass ? "PASS" : "FAIL"}`
//         );
//     });
// }

// // Run the test
// testing_test();