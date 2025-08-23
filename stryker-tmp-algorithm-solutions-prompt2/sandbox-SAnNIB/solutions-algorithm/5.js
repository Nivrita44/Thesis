// @ts-nocheck
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
export function solve(arr) {
  if (stryMutAct_9fa48("964")) {
    {}
  } else {
    stryCov_9fa48("964");
    const n = arr.length;
    const seen = {};
    let moves = 0;
    for (let j = stryMutAct_9fa48("965") ? n + 1 : (stryCov_9fa48("965"), n - 1); stryMutAct_9fa48("968") ? j < 0 : stryMutAct_9fa48("967") ? j > 0 : stryMutAct_9fa48("966") ? false : (stryCov_9fa48("966", "967", "968"), j >= 0); stryMutAct_9fa48("969") ? j++ : (stryCov_9fa48("969"), j--)) {
      if (stryMutAct_9fa48("970")) {
        {}
      } else {
        stryCov_9fa48("970");
        if (stryMutAct_9fa48("973") ? seen[arr[j]] !== 1 : stryMutAct_9fa48("972") ? false : stryMutAct_9fa48("971") ? true : (stryCov_9fa48("971", "972", "973"), seen[arr[j]] === 1)) {
          if (stryMutAct_9fa48("974")) {
            {}
          } else {
            stryCov_9fa48("974");
            moves = stryMutAct_9fa48("975") ? j - 1 : (stryCov_9fa48("975"), j + 1);
            break;
          }
        } else {
          if (stryMutAct_9fa48("976")) {
            {}
          } else {
            stryCov_9fa48("976");
            seen[arr[j]] = 1;
          }
        }
      }
    }
    return moves;
  }
}

// Test function
// function testing_test() {
//     const testCases = [
//         { input: [3, 1, 4, 3], expected: 1 },
//         { input: [1, 1, 1, 1, 1], expected: 4 },
//         { input: [1], expected: 0 },
//         { input: [6, 5, 4, 3, 2, 1], expected: 0 },
//         { input: [1, 2, 1, 7, 1, 2, 1], expected: 5 },
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { input, expected } = testCases[i];
//         const result = solve(input);
//         const status = result === expected ? "PASS" : "FAIL";
//         console.log(`Test ${i + 1}: Expected = ${expected}, Got = ${result} => ${status}`);
//     }
// }

// // Run tests if file is executed directly
// if (require.main === module) {
//     testing_test();
// }