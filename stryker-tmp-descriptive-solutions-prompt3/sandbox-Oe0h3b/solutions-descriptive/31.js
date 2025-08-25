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
const MOD = BigInt(998244353);
function convolution(P, Q) {
  if (stryMutAct_9fa48("1382")) {
    {}
  } else {
    stryCov_9fa48("1382");
    let len = P.length;
    let R = (stryMutAct_9fa48("1383") ? new Array() : (stryCov_9fa48("1383"), new Array(len))).fill(0n);
    for (let i = 0; stryMutAct_9fa48("1386") ? i >= len : stryMutAct_9fa48("1385") ? i <= len : stryMutAct_9fa48("1384") ? false : (stryCov_9fa48("1384", "1385", "1386"), i < len); stryMutAct_9fa48("1387") ? i-- : (stryCov_9fa48("1387"), i++)) {
      if (stryMutAct_9fa48("1388")) {
        {}
      } else {
        stryCov_9fa48("1388");
        let suma = 0n;
        for (let j = 0; stryMutAct_9fa48("1391") ? j > i : stryMutAct_9fa48("1390") ? j < i : stryMutAct_9fa48("1389") ? false : (stryCov_9fa48("1389", "1390", "1391"), j <= i); stryMutAct_9fa48("1392") ? j-- : (stryCov_9fa48("1392"), j++)) {
          if (stryMutAct_9fa48("1393")) {
            {}
          } else {
            stryCov_9fa48("1393");
            stryMutAct_9fa48("1394") ? suma -= P[j] * Q[i - j] : (stryCov_9fa48("1394"), suma += stryMutAct_9fa48("1395") ? P[j] / Q[i - j] : (stryCov_9fa48("1395"), P[j] * Q[stryMutAct_9fa48("1396") ? i + j : (stryCov_9fa48("1396"), i - j)]));
            stryMutAct_9fa48("1397") ? suma *= MOD : (stryCov_9fa48("1397"), suma %= MOD);
          }
        }
        R[i] = suma;
      }
    }
    return R;
  }
}
export function solve(P, k) {
  if (stryMutAct_9fa48("1398")) {
    {}
  } else {
    stryCov_9fa48("1398");
    let len = P.length;
    let R = (stryMutAct_9fa48("1399") ? new Array() : (stryCov_9fa48("1399"), new Array(len))).fill(0n);
    R[0] = 1n;
    while (stryMutAct_9fa48("1402") ? k <= 0 : stryMutAct_9fa48("1401") ? k >= 0 : stryMutAct_9fa48("1400") ? false : (stryCov_9fa48("1400", "1401", "1402"), k > 0)) {
      if (stryMutAct_9fa48("1403")) {
        {}
      } else {
        stryCov_9fa48("1403");
        if (stryMutAct_9fa48("1406") ? k % 2n != 1n : stryMutAct_9fa48("1405") ? false : stryMutAct_9fa48("1404") ? true : (stryCov_9fa48("1404", "1405", "1406"), (stryMutAct_9fa48("1407") ? k * 2n : (stryCov_9fa48("1407"), k % 2n)) == 1n)) {
          if (stryMutAct_9fa48("1408")) {
            {}
          } else {
            stryCov_9fa48("1408");
            R = convolution(R, P);
          }
        }
        P = convolution(P, P);
        stryMutAct_9fa48("1409") ? k <<= 1n : (stryCov_9fa48("1409"), k >>= 1n);
      }
    }
    return R;
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [500n, 500n], expected: [84693741n] },
//         { input: [2n, 2n], expected: [2n] }
//     ];

//     for (const { input, expected } of testCases) {
//         const [n, m] = input;

//         let dp = new Array(Number(m) + 1).fill(0n);
//         dp[0] = 1n;

//         for (let _ = 0; _ < m; _++) {
//             let prev = dp.slice();
//             dp.fill(0n);
//             for (let c = 0; c <= m; c++) {
//                 if (c - 1 >= 0) dp[c] += prev[c - 1];
//                 if (c + 1 <= m) dp[c] += prev[c + 1];
//                 dp[c] %= MOD;
//             }
//         }

//         let dpp = solve(dp, n - 1n);
//         let ans = 0n;

//         for (let c = 0; c <= m; c++) {
//             ans += dp[c] * dpp[c];
//             ans %= MOD;
//         }

//         console.log(`Input: ${input}, Output: ${ans}, Expected: ${expected[0]}`);
//         console.assert(ans === expected[0], `❌ Test failed for input ${input}`);
//     }

//     console.log("✅ All tests completed.");
// }

// testing_test();