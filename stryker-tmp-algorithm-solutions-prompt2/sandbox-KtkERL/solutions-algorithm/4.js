// Core logic function
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
  if (stryMutAct_9fa48("570")) {
    {}
  } else {
    stryCov_9fa48("570");
    const lenOfArray = arr.length;
    const sortedArr = stryMutAct_9fa48("571") ? [...arr] : (stryCov_9fa48("571"), (stryMutAct_9fa48("572") ? [] : (stryCov_9fa48("572"), [...arr])).sort(stryMutAct_9fa48("573") ? () => undefined : (stryCov_9fa48("573"), (a, b) => stryMutAct_9fa48("574") ? a + b : (stryCov_9fa48("574"), a - b))));
    const max1 = sortedArr[stryMutAct_9fa48("575") ? lenOfArray + 1 : (stryCov_9fa48("575"), lenOfArray - 1)];
    const max2 = sortedArr[stryMutAct_9fa48("576") ? lenOfArray + 2 : (stryCov_9fa48("576"), lenOfArray - 2)];
    const temp = arr.map(value => {
      if (stryMutAct_9fa48("577")) {
        {}
      } else {
        stryCov_9fa48("577");
        if (stryMutAct_9fa48("580") ? value === max1 : stryMutAct_9fa48("579") ? false : stryMutAct_9fa48("578") ? true : (stryCov_9fa48("578", "579", "580"), value !== max1)) {
          if (stryMutAct_9fa48("581")) {
            {}
          } else {
            stryCov_9fa48("581");
            return stryMutAct_9fa48("582") ? value + max1 : (stryCov_9fa48("582"), value - max1);
          }
        } else {
          if (stryMutAct_9fa48("583")) {
            {}
          } else {
            stryCov_9fa48("583");
            return stryMutAct_9fa48("584") ? value + max2 : (stryCov_9fa48("584"), value - max2);
          }
        }
      }
    });
    return temp;
  }
}

// Test function
// function testing_test() {
//     const testCases = [
//         { input: [4, 7, 3, 5], expected: [-3, 2, -4, -2] },
//         { input: [1, 2], expected: [-1, 1] },
//         { input: [1, 2, 3, 4, 5], expected: [-4, -3, -2, -1, 1] },
//         { input: [4, 9, 4], expected: [-5, 5, -5] },
//         { input: [4, 4, 4, 4], expected: [0, 0, 0, 0] }
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { input, expected } = testCases[i];
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);
//         console.log(`Test ${i + 1}: Expected = [${expected}], Got = [${result}] => ${pass ? "PASS" : "FAIL"}`);
//     }
// }

// // Run tests when executed directly
// if (require.main === module) {
//     testing_test();
// }