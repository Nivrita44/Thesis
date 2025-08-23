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
const MOD = 998244353;
export function solve(arr) {
  if (stryMutAct_9fa48("802")) {
    {}
  } else {
    stryCov_9fa48("802");
    const n = arr.length;
    const dp = Array.from(stryMutAct_9fa48("803") ? {} : (stryCov_9fa48("803"), {
      length: stryMutAct_9fa48("804") ? n - 2 : (stryCov_9fa48("804"), n + 2)
    }), stryMutAct_9fa48("805") ? () => undefined : (stryCov_9fa48("805"), () => Array.from(stryMutAct_9fa48("806") ? {} : (stryCov_9fa48("806"), {
      length: stryMutAct_9fa48("807") ? n - 2 : (stryCov_9fa48("807"), n + 2)
    }), stryMutAct_9fa48("808") ? () => undefined : (stryCov_9fa48("808"), () => stryMutAct_9fa48("809") ? [] : (stryCov_9fa48("809"), [undefined, undefined])))));
    const p = stryMutAct_9fa48("810") ? [] : (stryCov_9fa48("810"), [1]);
    for (let i = 1; stryMutAct_9fa48("813") ? i > n : stryMutAct_9fa48("812") ? i < n : stryMutAct_9fa48("811") ? false : (stryCov_9fa48("811", "812", "813"), i <= n); stryMutAct_9fa48("814") ? i-- : (stryCov_9fa48("814"), i++)) {
      if (stryMutAct_9fa48("815")) {
        {}
      } else {
        stryCov_9fa48("815");
        p[i] = stryMutAct_9fa48("816") ? p[i - 1] * 2 * MOD : (stryCov_9fa48("816"), (stryMutAct_9fa48("817") ? p[i - 1] / 2 : (stryCov_9fa48("817"), p[stryMutAct_9fa48("818") ? i + 1 : (stryCov_9fa48("818"), i - 1)] * 2)) % MOD);
      }
    }
    function dfs(now, l, fa) {
      if (stryMutAct_9fa48("819")) {
        {}
      } else {
        stryCov_9fa48("819");
        if (stryMutAct_9fa48("823") ? now <= n : stryMutAct_9fa48("822") ? now >= n : stryMutAct_9fa48("821") ? false : stryMutAct_9fa48("820") ? true : (stryCov_9fa48("820", "821", "822", "823"), now > n)) return 1;
        if (stryMutAct_9fa48("827") ? l > 0 : stryMutAct_9fa48("826") ? l < 0 : stryMutAct_9fa48("825") ? false : stryMutAct_9fa48("824") ? true : (stryCov_9fa48("824", "825", "826", "827"), l <= 0)) return 0;
        if (stryMutAct_9fa48("830") ? dp[now][l][fa] === undefined : stryMutAct_9fa48("829") ? false : stryMutAct_9fa48("828") ? true : (stryCov_9fa48("828", "829", "830"), dp[now][l][fa] !== undefined)) return dp[now][l][fa];
        let res = 0;
        if (stryMutAct_9fa48("833") ? fa && arr[now - 2] < arr[now - 1] : stryMutAct_9fa48("832") ? false : stryMutAct_9fa48("831") ? true : (stryCov_9fa48("831", "832", "833"), fa || (stryMutAct_9fa48("836") ? arr[now - 2] >= arr[now - 1] : stryMutAct_9fa48("835") ? arr[now - 2] <= arr[now - 1] : stryMutAct_9fa48("834") ? false : (stryCov_9fa48("834", "835", "836"), arr[stryMutAct_9fa48("837") ? now + 2 : (stryCov_9fa48("837"), now - 2)] < arr[stryMutAct_9fa48("838") ? now + 1 : (stryCov_9fa48("838"), now - 1)])))) {
          if (stryMutAct_9fa48("839")) {
            {}
          } else {
            stryCov_9fa48("839");
            res = stryMutAct_9fa48("840") ? (res + dfs(now + 1, l + 1, 0) * p[l - 1]) * MOD : (stryCov_9fa48("840"), (stryMutAct_9fa48("841") ? res - dfs(now + 1, l + 1, 0) * p[l - 1] : (stryCov_9fa48("841"), res + (stryMutAct_9fa48("842") ? dfs(now + 1, l + 1, 0) / p[l - 1] : (stryCov_9fa48("842"), dfs(stryMutAct_9fa48("843") ? now - 1 : (stryCov_9fa48("843"), now + 1), stryMutAct_9fa48("844") ? l - 1 : (stryCov_9fa48("844"), l + 1), 0) * p[stryMutAct_9fa48("845") ? l + 1 : (stryCov_9fa48("845"), l - 1)])))) % MOD);
          }
        }
        if (stryMutAct_9fa48("847") ? false : stryMutAct_9fa48("846") ? true : (stryCov_9fa48("846", "847"), l)) {
          if (stryMutAct_9fa48("848")) {
            {}
          } else {
            stryCov_9fa48("848");
            res = stryMutAct_9fa48("849") ? (res + dfs(now, l - 1, 1)) * MOD : (stryCov_9fa48("849"), (stryMutAct_9fa48("850") ? res - dfs(now, l - 1, 1) : (stryCov_9fa48("850"), res + dfs(now, stryMutAct_9fa48("851") ? l + 1 : (stryCov_9fa48("851"), l - 1), 1))) % MOD);
          }
        }
        dp[now][l][fa] = res;
        return res;
      }
    }
    return dfs(2, 1, 1);
  }
}

// function testing_test() {
//     const cases = [
//         { input: [1, 2, 3], expected: 3 },
//         { input: [1, 3, 2], expected: 1 },
//         { input: [1, 3, 2, 4, 5], expected: 17 },
//         { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], expected: 379394847 },
//     ];

//     for (const { input, expected }
//         of cases) {
//         const result = solve(input);
//         console.log(
//             `Input: ${input.join(" ")} | Output: ${result} | Expected: ${expected} | ${
//                 result === expected ? "✅ PASS" : "❌ FAIL"
//             }`
//         );
//     }
// }

// // Run the test cases
// testing_test();