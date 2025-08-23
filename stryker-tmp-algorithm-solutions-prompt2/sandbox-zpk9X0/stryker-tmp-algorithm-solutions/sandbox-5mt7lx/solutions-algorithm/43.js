// @ts-nocheck
// 
"use strict";

//  Core logic function
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
export function solve(n, a) {
  if (stryMutAct_9fa48("682")) {
    {}
  } else {
    stryCov_9fa48("682");
    const dp1 = Array.from(stryMutAct_9fa48("683") ? {} : (stryCov_9fa48("683"), {
      length: stryMutAct_9fa48("684") ? n - 2 : (stryCov_9fa48("684"), n + 2)
    }), stryMutAct_9fa48("685") ? () => undefined : (stryCov_9fa48("685"), () => stryMutAct_9fa48("686") ? Array().fill(0) : (stryCov_9fa48("686"), Array(stryMutAct_9fa48("687") ? n - 2 : (stryCov_9fa48("687"), n + 2)).fill(0))));
    const dp2 = Array.from(stryMutAct_9fa48("688") ? {} : (stryCov_9fa48("688"), {
      length: stryMutAct_9fa48("689") ? n - 2 : (stryCov_9fa48("689"), n + 2)
    }), stryMutAct_9fa48("690") ? () => undefined : (stryCov_9fa48("690"), () => stryMutAct_9fa48("691") ? Array().fill(0) : (stryCov_9fa48("691"), Array(stryMutAct_9fa48("692") ? n - 2 : (stryCov_9fa48("692"), n + 2)).fill(0))));

    // Precompute dp1 and dp2
    for (let i = 1; stryMutAct_9fa48("695") ? i > n : stryMutAct_9fa48("694") ? i < n : stryMutAct_9fa48("693") ? false : (stryCov_9fa48("693", "694", "695"), i <= n); stryMutAct_9fa48("696") ? i-- : (stryCov_9fa48("696"), i++)) {
      if (stryMutAct_9fa48("697")) {
        {}
      } else {
        stryCov_9fa48("697");
        for (let j = 1; stryMutAct_9fa48("700") ? j > n : stryMutAct_9fa48("699") ? j < n : stryMutAct_9fa48("698") ? false : (stryCov_9fa48("698", "699", "700"), j <= n); stryMutAct_9fa48("701") ? j-- : (stryCov_9fa48("701"), j++)) {
          if (stryMutAct_9fa48("702")) {
            {}
          } else {
            stryCov_9fa48("702");
            dp1[i][j] = stryMutAct_9fa48("703") ? dp1[i][j - 1] - (a[j - 1] < a[i - 1] ? 1 : 0) : (stryCov_9fa48("703"), dp1[i][stryMutAct_9fa48("704") ? j + 1 : (stryCov_9fa48("704"), j - 1)] + ((stryMutAct_9fa48("708") ? a[j - 1] >= a[i - 1] : stryMutAct_9fa48("707") ? a[j - 1] <= a[i - 1] : stryMutAct_9fa48("706") ? false : stryMutAct_9fa48("705") ? true : (stryCov_9fa48("705", "706", "707", "708"), a[stryMutAct_9fa48("709") ? j + 1 : (stryCov_9fa48("709"), j - 1)] < a[stryMutAct_9fa48("710") ? i + 1 : (stryCov_9fa48("710"), i - 1)])) ? 1 : 0));
            dp2[i][j] = stryMutAct_9fa48("711") ? dp2[i][j - 1] - (a[j - 1] > a[i - 1] ? 1 : 0) : (stryCov_9fa48("711"), dp2[i][stryMutAct_9fa48("712") ? j + 1 : (stryCov_9fa48("712"), j - 1)] + ((stryMutAct_9fa48("716") ? a[j - 1] <= a[i - 1] : stryMutAct_9fa48("715") ? a[j - 1] >= a[i - 1] : stryMutAct_9fa48("714") ? false : stryMutAct_9fa48("713") ? true : (stryCov_9fa48("713", "714", "715", "716"), a[stryMutAct_9fa48("717") ? j + 1 : (stryCov_9fa48("717"), j - 1)] > a[stryMutAct_9fa48("718") ? i + 1 : (stryCov_9fa48("718"), i - 1)])) ? 1 : 0));
          }
        }
      }
    }

    //  Fix: Compute total inversion count correctly
    let sm = 0;
    for (let i = 0; stryMutAct_9fa48("721") ? i >= n : stryMutAct_9fa48("720") ? i <= n : stryMutAct_9fa48("719") ? false : (stryCov_9fa48("719", "720", "721"), i < n); stryMutAct_9fa48("722") ? i-- : (stryCov_9fa48("722"), i++)) {
      if (stryMutAct_9fa48("723")) {
        {}
      } else {
        stryCov_9fa48("723");
        for (let j = stryMutAct_9fa48("724") ? i - 1 : (stryCov_9fa48("724"), i + 1); stryMutAct_9fa48("727") ? j >= n : stryMutAct_9fa48("726") ? j <= n : stryMutAct_9fa48("725") ? false : (stryCov_9fa48("725", "726", "727"), j < n); stryMutAct_9fa48("728") ? j-- : (stryCov_9fa48("728"), j++)) {
          if (stryMutAct_9fa48("729")) {
            {}
          } else {
            stryCov_9fa48("729");
            if (stryMutAct_9fa48("733") ? a[i] <= a[j] : stryMutAct_9fa48("732") ? a[i] >= a[j] : stryMutAct_9fa48("731") ? false : stryMutAct_9fa48("730") ? true : (stryCov_9fa48("730", "731", "732", "733"), a[i] > a[j])) stryMutAct_9fa48("734") ? sm-- : (stryCov_9fa48("734"), sm++);
          }
        }
      }
    }
    let mx = Number.MAX_SAFE_INTEGER;
    let cnt = 0;
    for (let i = 1; stryMutAct_9fa48("737") ? i > n : stryMutAct_9fa48("736") ? i < n : stryMutAct_9fa48("735") ? false : (stryCov_9fa48("735", "736", "737"), i <= n); stryMutAct_9fa48("738") ? i-- : (stryCov_9fa48("738"), i++)) {
      if (stryMutAct_9fa48("739")) {
        {}
      } else {
        stryCov_9fa48("739");
        for (let j = stryMutAct_9fa48("740") ? i - 1 : (stryCov_9fa48("740"), i + 1); stryMutAct_9fa48("743") ? j > n : stryMutAct_9fa48("742") ? j < n : stryMutAct_9fa48("741") ? false : (stryCov_9fa48("741", "742", "743"), j <= n); stryMutAct_9fa48("744") ? j-- : (stryCov_9fa48("744"), j++)) {
          if (stryMutAct_9fa48("745")) {
            {}
          } else {
            stryCov_9fa48("745");
            const p = stryMutAct_9fa48("746") ? sm + (dp1[j][j - 1] - dp1[j][i]) - (dp2[j][j] - dp2[j][i]) - 1 - (dp1[i][j - 1] - dp1[i][i]) - (dp2[i][j] - dp2[i][i]) : (stryCov_9fa48("746"), (stryMutAct_9fa48("747") ? sm + (dp1[j][j - 1] - dp1[j][i]) - (dp2[j][j] - dp2[j][i]) - 1 + (dp1[i][j - 1] - dp1[i][i]) : (stryCov_9fa48("747"), (stryMutAct_9fa48("748") ? sm + (dp1[j][j - 1] - dp1[j][i]) - (dp2[j][j] - dp2[j][i]) + 1 : (stryCov_9fa48("748"), (stryMutAct_9fa48("749") ? sm + (dp1[j][j - 1] - dp1[j][i]) + (dp2[j][j] - dp2[j][i]) : (stryCov_9fa48("749"), (stryMutAct_9fa48("750") ? sm - (dp1[j][j - 1] - dp1[j][i]) : (stryCov_9fa48("750"), sm + (stryMutAct_9fa48("751") ? dp1[j][j - 1] + dp1[j][i] : (stryCov_9fa48("751"), dp1[j][stryMutAct_9fa48("752") ? j + 1 : (stryCov_9fa48("752"), j - 1)] - dp1[j][i])))) - (stryMutAct_9fa48("753") ? dp2[j][j] + dp2[j][i] : (stryCov_9fa48("753"), dp2[j][j] - dp2[j][i])))) - 1)) - (stryMutAct_9fa48("754") ? dp1[i][j - 1] + dp1[i][i] : (stryCov_9fa48("754"), dp1[i][stryMutAct_9fa48("755") ? j + 1 : (stryCov_9fa48("755"), j - 1)] - dp1[i][i])))) + (stryMutAct_9fa48("756") ? dp2[i][j] + dp2[i][i] : (stryCov_9fa48("756"), dp2[i][j] - dp2[i][i])));
            if (stryMutAct_9fa48("759") ? p !== mx : stryMutAct_9fa48("758") ? false : stryMutAct_9fa48("757") ? true : (stryCov_9fa48("757", "758", "759"), p === mx)) stryMutAct_9fa48("760") ? cnt-- : (stryCov_9fa48("760"), cnt++);else if (stryMutAct_9fa48("764") ? p >= mx : stryMutAct_9fa48("763") ? p <= mx : stryMutAct_9fa48("762") ? false : stryMutAct_9fa48("761") ? true : (stryCov_9fa48("761", "762", "763", "764"), p < mx)) {
              if (stryMutAct_9fa48("765")) {
                {}
              } else {
                stryCov_9fa48("765");
                mx = p;
                cnt = 1;
              }
            }
          }
        }
      }
    }
    return stryMutAct_9fa48("766") ? [] : (stryCov_9fa48("766"), [mx, cnt]);
  }
}

//  Test function
// function testing_test() {
//     const tests = [{
//             input: { n: 5, a: [4, 0, 3, 1, 2] },
//             expected: [3, 2],
//         },
//         {
//             input: { n: 5, a: [1, 2, 3, 4, 0] },
//             expected: [3, 4],
//         },
//         {
//             input: { n: 5, a: [1, 3, 4, 0, 2] },
//             expected: [4, 5],
//         },
//     ];

//     for (const { input, expected }
//         of tests) {
//         const result = solve(input.n, input.a);
//         const pass = result[0] === expected[0] && result[1] === expected[1];
//         console.log(
//             `Input: ${input.a.join(" ")} | Output: ${result.join(" ")} | Expected: ${expected.join(" ")} | ${
//         pass ? " PASS" : " FAIL"
//       }`
//         );
//     }
// }

// // Run tests
// testing_test();