// @ts-nocheck
'use strict';

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
export function solve(t, arr) {
  if (stryMutAct_9fa48("333")) {
    {}
  } else {
    stryCov_9fa48("333");
    const results = stryMutAct_9fa48("334") ? ["Stryker was here"] : (stryCov_9fa48("334"), []);
    for (let i = 0; stryMutAct_9fa48("337") ? i >= t : stryMutAct_9fa48("336") ? i <= t : stryMutAct_9fa48("335") ? false : (stryCov_9fa48("335", "336", "337"), i < t); stryMutAct_9fa48("338") ? i-- : (stryCov_9fa48("338"), i++)) {
      if (stryMutAct_9fa48("339")) {
        {}
      } else {
        stryCov_9fa48("339");
        const n = arr[i];
        let found = stryMutAct_9fa48("340") ? true : (stryCov_9fa48("340"), false);
        for (let x = 1; stryMutAct_9fa48("342") ? x < n || !found : stryMutAct_9fa48("341") ? false : (stryCov_9fa48("341", "342"), (stryMutAct_9fa48("345") ? x >= n : stryMutAct_9fa48("344") ? x <= n : stryMutAct_9fa48("343") ? true : (stryCov_9fa48("343", "344", "345"), x < n)) && (stryMutAct_9fa48("346") ? found : (stryCov_9fa48("346"), !found))); stryMutAct_9fa48("347") ? x-- : (stryCov_9fa48("347"), x++)) {
          if (stryMutAct_9fa48("348")) {
            {}
          } else {
            stryCov_9fa48("348");
            for (let y = 1; stryMutAct_9fa48("350") ? y < n - x || !found : stryMutAct_9fa48("349") ? false : (stryCov_9fa48("349", "350"), (stryMutAct_9fa48("353") ? y >= n - x : stryMutAct_9fa48("352") ? y <= n - x : stryMutAct_9fa48("351") ? true : (stryCov_9fa48("351", "352", "353"), y < (stryMutAct_9fa48("354") ? n + x : (stryCov_9fa48("354"), n - x)))) && (stryMutAct_9fa48("355") ? found : (stryCov_9fa48("355"), !found))); stryMutAct_9fa48("356") ? y-- : (stryCov_9fa48("356"), y++)) {
              if (stryMutAct_9fa48("357")) {
                {}
              } else {
                stryCov_9fa48("357");
                const z = stryMutAct_9fa48("358") ? n - x + y : (stryCov_9fa48("358"), (stryMutAct_9fa48("359") ? n + x : (stryCov_9fa48("359"), n - x)) - y);
                if (stryMutAct_9fa48("362") ? z > 0 && x % 3 !== 0 && y % 3 !== 0 || z % 3 !== 0 : stryMutAct_9fa48("361") ? false : stryMutAct_9fa48("360") ? true : (stryCov_9fa48("360", "361", "362"), (stryMutAct_9fa48("364") ? z > 0 && x % 3 !== 0 || y % 3 !== 0 : stryMutAct_9fa48("363") ? true : (stryCov_9fa48("363", "364"), (stryMutAct_9fa48("366") ? z > 0 || x % 3 !== 0 : stryMutAct_9fa48("365") ? true : (stryCov_9fa48("365", "366"), (stryMutAct_9fa48("369") ? z <= 0 : stryMutAct_9fa48("368") ? z >= 0 : stryMutAct_9fa48("367") ? true : (stryCov_9fa48("367", "368", "369"), z > 0)) && (stryMutAct_9fa48("371") ? x % 3 === 0 : stryMutAct_9fa48("370") ? true : (stryCov_9fa48("370", "371"), (stryMutAct_9fa48("372") ? x * 3 : (stryCov_9fa48("372"), x % 3)) !== 0)))) && (stryMutAct_9fa48("374") ? y % 3 === 0 : stryMutAct_9fa48("373") ? true : (stryCov_9fa48("373", "374"), (stryMutAct_9fa48("375") ? y * 3 : (stryCov_9fa48("375"), y % 3)) !== 0)))) && (stryMutAct_9fa48("377") ? z % 3 === 0 : stryMutAct_9fa48("376") ? true : (stryCov_9fa48("376", "377"), (stryMutAct_9fa48("378") ? z * 3 : (stryCov_9fa48("378"), z % 3)) !== 0)))) {
                  if (stryMutAct_9fa48("379")) {
                    {}
                  } else {
                    stryCov_9fa48("379");
                    // Sort in descending to match test cases like 5 4 1
                    const sorted = stryMutAct_9fa48("380") ? [x, y, z] : (stryCov_9fa48("380"), (stryMutAct_9fa48("381") ? [] : (stryCov_9fa48("381"), [x, y, z])).sort(stryMutAct_9fa48("382") ? () => undefined : (stryCov_9fa48("382"), (a, b) => stryMutAct_9fa48("383") ? b + a : (stryCov_9fa48("383"), b - a))));
                    results.push(stryMutAct_9fa48("384") ? "" : (stryCov_9fa48("384"), "YES"));
                    results.push(stryMutAct_9fa48("385") ? `` : (stryCov_9fa48("385"), `${sorted[0]} ${sorted[1]} ${sorted[2]}`));
                    found = stryMutAct_9fa48("386") ? false : (stryCov_9fa48("386"), true);
                  }
                }
              }
            }
          }
        }
        if (stryMutAct_9fa48("389") ? false : stryMutAct_9fa48("388") ? true : stryMutAct_9fa48("387") ? found : (stryCov_9fa48("387", "388", "389"), !found)) results.push(stryMutAct_9fa48("390") ? "" : (stryCov_9fa48("390"), "NO"));
      }
    }
    return results;
  }
}

// ✅ Test function
// function testing_testtest() {
//     const testCases = [{
//             input: { t: 4, arr: [10, 4, 15, 9] },
//             expected: [
//                 "YES", "5 4 1",
//                 "NO",
//                 "YES", "8 5 2",
//                 "NO"
//             ]
//         },
//         {
//             input: { t: 3, arr: [3, 5, 6] },
//             expected: [
//                 "NO",
//                 "YES", "2 2 1",
//                 "YES", "2 3 1"
//             ]
//         }
//     ];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input.t, input.arr);
//         console.log(`Test Case ${index + 1}:`);

//         for (let i = 0; i < expected.length; i++) {
//             const exp = expected[i];
//             const res = result[i];
//             const status = res === exp ? "PASS ✅" : `FAIL ❌ (Expected: ${exp})`;
//             console.log(`Output: ${res} | ${status}`);
//         }

//         const passed = JSON.stringify(result) === JSON.stringify(expected);
//         console.log(`Overall Status: ${passed ? "PASS ✅" : "FAIL ❌"}\n`);
//     });
// }

// testing_test();

//TODO