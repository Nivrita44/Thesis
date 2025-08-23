// @ts-nocheck
// 
"use strict";

/**
 * Calculates the minimum number of operations needed.
 * @param {number} num - The initial number.
 * @param {number} k - The base for operations.
 * @returns {number}
 */
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
function calculation(num, k) {
  if (stryMutAct_9fa48("494")) {
    {}
  } else {
    stryCov_9fa48("494");
    if (stryMutAct_9fa48("497") ? k !== 1 : stryMutAct_9fa48("496") ? false : stryMutAct_9fa48("495") ? true : (stryCov_9fa48("495", "496", "497"), k === 1)) {
      if (stryMutAct_9fa48("498")) {
        {}
      } else {
        stryCov_9fa48("498");
        return num;
      }
    }
    let count = 0;
    while (stryMutAct_9fa48("501") ? num <= 0 : stryMutAct_9fa48("500") ? num >= 0 : stryMutAct_9fa48("499") ? false : (stryCov_9fa48("499", "500", "501"), num > 0)) {
      if (stryMutAct_9fa48("502")) {
        {}
      } else {
        stryCov_9fa48("502");
        stryMutAct_9fa48("503") ? count -= num % k : (stryCov_9fa48("503"), count += stryMutAct_9fa48("504") ? num * k : (stryCov_9fa48("504"), num % k));
        num = Math.floor(stryMutAct_9fa48("505") ? num * k : (stryCov_9fa48("505"), num / k));
      }
    }
    return count;
  }
}

/**
 * Processes all test cases.
 * @param {Array<[number, number]>} cases - An array of [num, k] pairs.
 * @returns {number[]} - Array of results for each test case.
 */
export function solve(cases) {
  if (stryMutAct_9fa48("506")) {
    {}
  } else {
    stryCov_9fa48("506");
    return cases.map(stryMutAct_9fa48("507") ? () => undefined : (stryCov_9fa48("507"), ([num, k]) => calculation(num, k)));
  }
}

// ✅ Test function
// function testing_test() {
//     const input = [
//         [5, 2],
//         [3, 5],
//         [16, 4],
//         [100, 3],
//         [6492, 10],
//         [10, 1],
//     ];
//     const expected = [2, 3, 1, 4, 21, 10];
//     const result = solve(input);

//     console.log("Running Tests...\n");
//     let allPass = true;

//     result.forEach((out, i) => {
//         const status = out === expected[i] ? "PASS " : `FAIL  (Expected: ${expected[i]}, Got: ${out})`;
//         if (out !== expected[i]) allPass = false;
//         console.log(`Test Case ${i + 1}: Output = ${out} | ${status}`);
//     });

//     console.log(`\nOverall Status: ${allPass ? "PASS " : "FAIL "}`);
// }

// // Run the test
// testing_test();