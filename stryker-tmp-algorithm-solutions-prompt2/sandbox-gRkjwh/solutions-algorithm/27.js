'use strict';

// Pure function: returns an array of results
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
  if (stryMutAct_9fa48("247")) {
    {}
  } else {
    stryCov_9fa48("247");
    return numbers.map(n => {
      if (stryMutAct_9fa48("248")) {
        {}
      } else {
        stryCov_9fa48("248");
        return stryMutAct_9fa48("249") ? Math.floor(n / 10) - (n % 10 >= 9 ? 1 : 0) : (stryCov_9fa48("249"), Math.floor(stryMutAct_9fa48("250") ? n * 10 : (stryCov_9fa48("250"), n / 10)) + ((stryMutAct_9fa48("254") ? n % 10 < 9 : stryMutAct_9fa48("253") ? n % 10 > 9 : stryMutAct_9fa48("252") ? false : stryMutAct_9fa48("251") ? true : (stryCov_9fa48("251", "252", "253", "254"), (stryMutAct_9fa48("255") ? n * 10 : (stryCov_9fa48("255"), n % 10)) >= 9)) ? 1 : 0));
      }
    });
  }
}

// Test function
// function testing_test() {
//     const testCases = [{
//             input: [1, 9, 10, 34, 880055535],
//             expected: [0, 1, 1, 3, 88005553]
//         },
//         {
//             input: [0, 8, 19, 29, 99],
//             expected: [0, 0, 2, 3, 10]
//         }
//     ];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);

//         console.log(`Test Case ${index + 1}:`);
//         input.forEach((n, i) => {
//             const status = result[i] === expected[i] ? "PASS ✅" : "FAIL ❌";
//             console.log(`Input: ${n} | Expected: ${expected[i]} | Got: ${result[i]} | ${status}`);
//         });
//         console.log(`Overall Status: ${pass ? "PASS ✅" : "FAIL ❌"}\n`);
//     });
// }

// // Run test
// testing_test();