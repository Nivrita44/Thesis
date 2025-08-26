'use strict';

// ✅ Pure function: takes an array of integers and returns the corresponding winners
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
  if (stryMutAct_9fa48("174")) {
    {}
  } else {
    stryCov_9fa48("174");
    return numbers.map(stryMutAct_9fa48("175") ? () => undefined : (stryCov_9fa48("175"), n => (stryMutAct_9fa48("178") ? n % 3 !== 0 : stryMutAct_9fa48("177") ? false : stryMutAct_9fa48("176") ? true : (stryCov_9fa48("176", "177", "178"), (stryMutAct_9fa48("179") ? n * 3 : (stryCov_9fa48("179"), n % 3)) === 0)) ? stryMutAct_9fa48("180") ? "" : (stryCov_9fa48("180"), "Second") : stryMutAct_9fa48("181") ? "" : (stryCov_9fa48("181"), "First")));
  }
}

// ✅ Test function to verify correctness
// function testing_test() {
//     const testCases = [{
//             input: [1, 3, 5, 100, 999, 1000],
//             expected: ["First", "Second", "First", "First", "Second", "First"]
//         }

//     ];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);
//         console.log(`Test Case ${index + 1}:`);
//         input.forEach((n, i) => {
//             const status = result[i] === expected[i] ? 'PASS ✅' : 'FAIL ❌';
//             console.log(`Input: ${n} | Expected: ${expected[i]} | Got: ${result[i]} | ${status}`);
//         });
//         console.log(`Overall Status: ${pass ? 'PASS ✅' : 'FAIL ❌'}\n`);
//     });
// }

// // Run test
// testing_test();