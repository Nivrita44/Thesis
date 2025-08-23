// @ts-nocheck
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
export function solve(n, s) {
  if (stryMutAct_9fa48("998")) {
    {}
  } else {
    stryCov_9fa48("998");
    let running = stryMutAct_9fa48("999") ? [] : (stryCov_9fa48("999"), [0]);
    let power = 0;
    for (let i = 0; stryMutAct_9fa48("1002") ? i >= n : stryMutAct_9fa48("1001") ? i <= n : stryMutAct_9fa48("1000") ? false : (stryCov_9fa48("1000", "1001", "1002"), i < n); stryMutAct_9fa48("1003") ? i-- : (stryCov_9fa48("1003"), i++)) {
      if (stryMutAct_9fa48("1004")) {
        {}
      } else {
        stryCov_9fa48("1004");
        if (stryMutAct_9fa48("1007") ? s[i] === 0 : stryMutAct_9fa48("1006") ? false : stryMutAct_9fa48("1005") ? true : (stryCov_9fa48("1005", "1006", "1007"), s[i] !== 0)) {
          if (stryMutAct_9fa48("1008")) {
            {}
          } else {
            stryCov_9fa48("1008");
            running.push(s[i]);
          }
        } else {
          if (stryMutAct_9fa48("1009")) {
            {}
          } else {
            stryCov_9fa48("1009");
            if (stryMutAct_9fa48("1013") ? running.length >= 1 : stryMutAct_9fa48("1012") ? running.length <= 1 : stryMutAct_9fa48("1011") ? false : stryMutAct_9fa48("1010") ? true : (stryCov_9fa48("1010", "1011", "1012", "1013"), running.length < 1)) {
              if (stryMutAct_9fa48("1014")) {
                {}
              } else {
                stryCov_9fa48("1014");
                continue;
              }
            }
            stryMutAct_9fa48("1015") ? running : (stryCov_9fa48("1015"), running.sort(stryMutAct_9fa48("1016") ? () => undefined : (stryCov_9fa48("1016"), (a, b) => stryMutAct_9fa48("1017") ? a + b : (stryCov_9fa48("1017"), a - b))));
            stryMutAct_9fa48("1018") ? power -= running.pop() : (stryCov_9fa48("1018"), power += running.pop());
          }
        }
      }
    }
    return power;
  }
}

// Test function with your exact input/output
// function testing_test() {
//     const testCases = [
//         { n: 5, s: [3, 3, 3, 0, 0], expected: 6 },
//         { n: 6, s: [0, 3, 3, 0, 0, 3], expected: 6 },
//         { n: 7, s: [1, 2, 3, 0, 4, 5, 0], expected: 8 },
//         { n: 7, s: [1, 2, 5, 0, 4, 3, 0], expected: 9 },
//         { n: 5, s: [3, 1, 0, 0, 4], expected: 4 }
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { n, s, expected } = testCases[i];
//         const result = solve(n, s);
//         const status = result === expected ? "PASS" : "FAIL";
//         console.log(`Test ${i + 1}: Expected = ${expected}, Got = ${result} => ${status}`);
//     }
// }

// // Run tests when this script is executed directly
// if (require.main === module) {
//     testing_test();
// }