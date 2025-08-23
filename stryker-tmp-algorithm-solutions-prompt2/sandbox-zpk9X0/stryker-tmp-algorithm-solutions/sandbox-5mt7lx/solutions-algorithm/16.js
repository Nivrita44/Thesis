// @ts-nocheck
// 
'use strict';

// ✅ Pure function: takes an integer n and returns { count, parts[] }
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
export function solve(n) {
  if (stryMutAct_9fa48("100")) {
    {}
  } else {
    stryCov_9fa48("100");
    const count = n >> 1; // Math.floor(n / 2)
    const parts = stryMutAct_9fa48("101") ? ["Stryker was here"] : (stryCov_9fa48("101"), []);
    if (stryMutAct_9fa48("104") ? n % 2 !== 1 : stryMutAct_9fa48("103") ? false : stryMutAct_9fa48("102") ? true : (stryCov_9fa48("102", "103", "104"), (stryMutAct_9fa48("105") ? n * 2 : (stryCov_9fa48("105"), n % 2)) === 1)) {
      if (stryMutAct_9fa48("106")) {
        {}
      } else {
        stryCov_9fa48("106");
        parts.push(3);
        stryMutAct_9fa48("107") ? n += 3 : (stryCov_9fa48("107"), n -= 3);
      }
    }
    const twos = stryMutAct_9fa48("108") ? n * 2 : (stryCov_9fa48("108"), n / 2);
    for (let i = 0; stryMutAct_9fa48("111") ? i >= twos : stryMutAct_9fa48("110") ? i <= twos : stryMutAct_9fa48("109") ? false : (stryCov_9fa48("109", "110", "111"), i < twos); stryMutAct_9fa48("112") ? i-- : (stryCov_9fa48("112"), i++)) {
      if (stryMutAct_9fa48("113")) {
        {}
      } else {
        stryCov_9fa48("113");
        parts.push(2);
      }
    }
    return stryMutAct_9fa48("114") ? {} : (stryCov_9fa48("114"), {
      count,
      parts
    });
  }
}

// ✅ Test function
// function testing_test() {
//     const testCases = [{
//             input: 5,
//             expected: {
//                 count: 2,
//                 parts: [3, 2]
//             }
//         },
//         {
//             input: 6,
//             expected: {
//                 count: 3,
//                 parts: [2, 2, 2]
//             }
//         },
//         {
//             input: 7,
//             expected: {
//                 count: 3,
//                 parts: [3, 2, 2]
//             }
//         },
//         {
//             input: 2,
//             expected: {
//                 count: 1,
//                 parts: [2]
//             }
//         }
//     ];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const countMatch = result.count === expected.count;
//         const partsMatch = JSON.stringify(result.parts) === JSON.stringify(expected.parts);
//         const pass = countMatch && partsMatch;

//         console.log(`Test Case ${index + 1}:`);
//         console.log(`Input: ${input}`);
//         console.log(`Expected Count: ${expected.count}`);
//         console.log(`Actual Count:   ${result.count}`);
//         console.log(`Expected Parts: ${expected.parts.join(' ')}`);
//         console.log(`Actual Parts:   ${result.parts.join(' ')}`);
//         console.log(`Status: ${pass ? "PASS" : "FAIL"}\n`);
//     });
// }

// // Run test
// testing_test();