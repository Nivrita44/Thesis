// @ts-nocheck
'use strict';

// ✅ Pure logic function
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
  if (stryMutAct_9fa48("191")) {
    {}
  } else {
    stryCov_9fa48("191");
    return testCases.map(({
      n,
      arr
    }) => {
      if (stryMutAct_9fa48("192")) {
        {}
      } else {
        stryCov_9fa48("192");
        let totalTwos = stryMutAct_9fa48("193") ? arr.length : (stryCov_9fa48("193"), arr.filter(stryMutAct_9fa48("194") ? () => undefined : (stryCov_9fa48("194"), x => stryMutAct_9fa48("197") ? x !== 2 : stryMutAct_9fa48("196") ? false : stryMutAct_9fa48("195") ? true : (stryCov_9fa48("195", "196", "197"), x === 2))).length);
        if (stryMutAct_9fa48("200") ? totalTwos === 0 && totalTwos % 2 !== 0 : stryMutAct_9fa48("199") ? false : stryMutAct_9fa48("198") ? true : (stryCov_9fa48("198", "199", "200"), (stryMutAct_9fa48("202") ? totalTwos !== 0 : stryMutAct_9fa48("201") ? false : (stryCov_9fa48("201", "202"), totalTwos === 0)) || (stryMutAct_9fa48("204") ? totalTwos % 2 === 0 : stryMutAct_9fa48("203") ? false : (stryCov_9fa48("203", "204"), (stryMutAct_9fa48("205") ? totalTwos * 2 : (stryCov_9fa48("205"), totalTwos % 2)) !== 0)))) return stryMutAct_9fa48("206") ? +1 : (stryCov_9fa48("206"), -1);
        let halfTwos = stryMutAct_9fa48("207") ? totalTwos * 2 : (stryCov_9fa48("207"), totalTwos / 2);
        let seenTwos = 0;
        for (let i = 0; stryMutAct_9fa48("210") ? i >= n : stryMutAct_9fa48("209") ? i <= n : stryMutAct_9fa48("208") ? false : (stryCov_9fa48("208", "209", "210"), i < n); stryMutAct_9fa48("211") ? i-- : (stryCov_9fa48("211"), i++)) {
          if (stryMutAct_9fa48("212")) {
            {}
          } else {
            stryCov_9fa48("212");
            if (stryMutAct_9fa48("215") ? arr[i] !== 2 : stryMutAct_9fa48("214") ? false : stryMutAct_9fa48("213") ? true : (stryCov_9fa48("213", "214", "215"), arr[i] === 2)) {
              if (stryMutAct_9fa48("216")) {
                {}
              } else {
                stryCov_9fa48("216");
                stryMutAct_9fa48("217") ? seenTwos-- : (stryCov_9fa48("217"), seenTwos++);
              }
            }
            if (stryMutAct_9fa48("220") ? seenTwos !== halfTwos : stryMutAct_9fa48("219") ? false : stryMutAct_9fa48("218") ? true : (stryCov_9fa48("218", "219", "220"), seenTwos === halfTwos)) {
              if (stryMutAct_9fa48("221")) {
                {}
              } else {
                stryCov_9fa48("221");
                return stryMutAct_9fa48("222") ? i - 1 : (stryCov_9fa48("222"), i + 1); // 1-based index
              }
            }
          }
        }
        return stryMutAct_9fa48("223") ? +1 : (stryCov_9fa48("223"), -1);
      }
    });
  }
}

// ✅ Test function
// function testing_test() {
//     const testCases = [{
//         input: [
//             { n: 6, arr: [2, 2, 1, 2, 1, 2] },
//             { n: 3, arr: [1, 2, 1] },
//             { n: 4, arr: [1, 1, 1, 1] }
//         ],
//         expected: [2, -1, -1]
//     }];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);

//         console.log(`Test Case ${index + 1}:`);
//         input.forEach(({ n, arr }, i) => {
//             const status = result[i] === expected[i] ? 'PASS ✅' : 'FAIL ❌';
//             console.log(`Input n=${n}, arr=[${arr.join(' ')}]`);
//             console.log(`Expected: ${expected[i]}, Got: ${result[i]} | ${status}\n`);
//         });
//         console.log(`Overall Status: ${pass ? 'PASS ✅' : 'FAIL ❌'}\n`);
//     });
// }

// // Run test
// testing_test();