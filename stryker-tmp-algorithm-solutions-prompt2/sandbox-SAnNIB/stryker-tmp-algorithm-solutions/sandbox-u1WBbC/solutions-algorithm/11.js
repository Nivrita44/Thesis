// @ts-nocheck
// 
'use strict';

// ✅ Pure function: accepts an array of two-digit numbers, returns an array of sums
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
  if (stryMutAct_9fa48("38")) {
    {}
  } else {
    stryCov_9fa48("38");
    return numbers.map(n => {
      if (stryMutAct_9fa48("39")) {
        {}
      } else {
        stryCov_9fa48("39");
        const tens = Math.floor(stryMutAct_9fa48("40") ? n * 10 : (stryCov_9fa48("40"), n / 10));
        const ones = stryMutAct_9fa48("41") ? n * 10 : (stryCov_9fa48("41"), n % 10);
        return stryMutAct_9fa48("42") ? tens - ones : (stryCov_9fa48("42"), tens + ones);
      }
    });
  }
}

// ✅ Test function with expected output
// function testing_test() {
// const input = [77, 21, 40, 34, 19, 84, 10, 99];
// const expectedOutput = [14, 3, 4, 7, 10, 12, 1, 18];

// const result = solve(input);

// console.log("Running Test...\n");
// result.forEach((value, index) => {
//     console.log(`Input: ${input[index]} => Output: ${value} | Expected: ${expectedOutput[index]} | ${value === expectedOutput[index] ? "PASS" : "FAIL"}`);
// });
// }

// // Run the test
// testing_test();