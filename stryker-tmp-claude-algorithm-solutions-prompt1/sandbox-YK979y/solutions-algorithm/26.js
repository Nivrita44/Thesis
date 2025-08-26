'use strict';

// ✅ Pure function: returns "yes" or "no" for each pair [n, k]
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
export function solve(testCases) {
  if (stryMutAct_9fa48("224")) {
    {}
  } else {
    stryCov_9fa48("224");
    return testCases.map(([n, k]) => {
      if (stryMutAct_9fa48("225")) {
        {}
      } else {
        stryCov_9fa48("225");
        n = BigInt(n);
        k = BigInt(k);
        //TODO function problem
        for (let i = 0n; stryMutAct_9fa48("228") ? i > 2n : stryMutAct_9fa48("227") ? i < 2n : stryMutAct_9fa48("226") ? false : (stryCov_9fa48("226", "227", "228"), i <= 2n); stryMutAct_9fa48("229") ? i-- : (stryCov_9fa48("229"), i++)) {
          if (stryMutAct_9fa48("230")) {
            {}
          } else {
            stryCov_9fa48("230");
            if (stryMutAct_9fa48("233") ? n - k * i >= 0n || (n - k * i) % 2n === 0n : stryMutAct_9fa48("232") ? false : stryMutAct_9fa48("231") ? true : (stryCov_9fa48("231", "232", "233"), (stryMutAct_9fa48("236") ? n - k * i < 0n : stryMutAct_9fa48("235") ? n - k * i > 0n : stryMutAct_9fa48("234") ? true : (stryCov_9fa48("234", "235", "236"), (stryMutAct_9fa48("237") ? n + k * i : (stryCov_9fa48("237"), n - (stryMutAct_9fa48("238") ? k / i : (stryCov_9fa48("238"), k * i)))) >= 0n)) && (stryMutAct_9fa48("240") ? (n - k * i) % 2n !== 0n : stryMutAct_9fa48("239") ? true : (stryCov_9fa48("239", "240"), (stryMutAct_9fa48("241") ? (n - k * i) * 2n : (stryCov_9fa48("241"), (stryMutAct_9fa48("242") ? n + k * i : (stryCov_9fa48("242"), n - (stryMutAct_9fa48("243") ? k / i : (stryCov_9fa48("243"), k * i)))) % 2n)) === 0n)))) {
              if (stryMutAct_9fa48("244")) {
                {}
              } else {
                stryCov_9fa48("244");
                return stryMutAct_9fa48("245") ? "" : (stryCov_9fa48("245"), "yes");
              }
            }
          }
        }
        return stryMutAct_9fa48("246") ? "" : (stryCov_9fa48("246"), "no");
      }
    });
  }
}

// ✅ Test function
// function testing_test() {
//     const testCases = [{
//             input: [
//                 [5, 3],
//                 [6, 1],
//                 [7, 4],
//                 [8, 8]
//             ],
//             expected: ["yes", "yes", "no", "yes"]
//         },
//         {
//             input: [
//                 [10, 2], // 10 - 2*0 = 10, even => yes
//                 [3, 2], // 3-2*0 = 3 odd, 3-2*1 = 1 odd, 3-2*2 = -1 invalid => no
//                 [1000000000000000000, 1] // very large n, k=1, 10^18 is even => yes
//             ],
//             expected: ["yes", "no", "yes"]
//         }
//     ];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);

//         console.log(`Test Case ${index + 1}:`);
//         input.forEach(([n, k], i) => {
//             const status = result[i] === expected[i] ? "PASS ✅" : "FAIL ❌";
//             console.log(`Input: n=${n}, k=${k} | Expected: ${expected[i]} | Got: ${result[i]} | ${status}`);
//         });
//         console.log(`Overall Status: ${pass ? "PASS" : "FAIL"}\n`);
//     });
// }

// // Run the test
// testing_test();