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
export function solve(testCases) {
  if (stryMutAct_9fa48("3273")) {
    {}
  } else {
    stryCov_9fa48("3273");
    const results = stryMutAct_9fa48("3274") ? ["Stryker was here"] : (stryCov_9fa48("3274"), []);
    for (const {
      n,
      k,
      a,
      b
    } of testCases) {
      if (stryMutAct_9fa48("3275")) {
        {}
      } else {
        stryCov_9fa48("3275");
        let low = 0,
          high = 1000000001;
        let remainingOperations = k;
        const initialValues = stryMutAct_9fa48("3276") ? [] : (stryCov_9fa48("3276"), [...a]);
        while (stryMutAct_9fa48("3279") ? high - low <= 1 : stryMutAct_9fa48("3278") ? high - low >= 1 : stryMutAct_9fa48("3277") ? false : (stryCov_9fa48("3277", "3278", "3279"), (stryMutAct_9fa48("3280") ? high + low : (stryCov_9fa48("3280"), high - low)) > 1)) {
          if (stryMutAct_9fa48("3281")) {
            {}
          } else {
            stryCov_9fa48("3281");
            const mid = Math.floor(stryMutAct_9fa48("3282") ? (high + low) * 2 : (stryCov_9fa48("3282"), (stryMutAct_9fa48("3283") ? high - low : (stryCov_9fa48("3283"), high + low)) / 2));
            let totalIterations = 0;
            for (let i = 0; stryMutAct_9fa48("3286") ? i >= n : stryMutAct_9fa48("3285") ? i <= n : stryMutAct_9fa48("3284") ? false : (stryCov_9fa48("3284", "3285", "3286"), i < n); stryMutAct_9fa48("3287") ? i-- : (stryCov_9fa48("3287"), i++)) {
              if (stryMutAct_9fa48("3288")) {
                {}
              } else {
                stryCov_9fa48("3288");
                stryMutAct_9fa48("3289") ? totalIterations -= Math.max(0, Math.floor((initialValues[i] - mid) / b[i]) + 1) : (stryCov_9fa48("3289"), totalIterations += stryMutAct_9fa48("3290") ? Math.min(0, Math.floor((initialValues[i] - mid) / b[i]) + 1) : (stryCov_9fa48("3290"), Math.max(0, stryMutAct_9fa48("3291") ? Math.floor((initialValues[i] - mid) / b[i]) - 1 : (stryCov_9fa48("3291"), Math.floor(stryMutAct_9fa48("3292") ? (initialValues[i] - mid) * b[i] : (stryCov_9fa48("3292"), (stryMutAct_9fa48("3293") ? initialValues[i] + mid : (stryCov_9fa48("3293"), initialValues[i] - mid)) / b[i])) + 1))));
              }
            }
            if (stryMutAct_9fa48("3297") ? totalIterations > k : stryMutAct_9fa48("3296") ? totalIterations < k : stryMutAct_9fa48("3295") ? false : stryMutAct_9fa48("3294") ? true : (stryCov_9fa48("3294", "3295", "3296", "3297"), totalIterations <= k)) {
              if (stryMutAct_9fa48("3298")) {
                {}
              } else {
                stryCov_9fa48("3298");
                high = mid;
              }
            } else {
              if (stryMutAct_9fa48("3299")) {
                {}
              } else {
                stryCov_9fa48("3299");
                low = mid;
              }
            }
          }
        }
        let totalScore = 0n; // start as BigInt
        const updatedValues = stryMutAct_9fa48("3300") ? [] : (stryCov_9fa48("3300"), [...a]);
        for (let i = 0; stryMutAct_9fa48("3303") ? i >= n : stryMutAct_9fa48("3302") ? i <= n : stryMutAct_9fa48("3301") ? false : (stryCov_9fa48("3301", "3302", "3303"), i < n); stryMutAct_9fa48("3304") ? i-- : (stryCov_9fa48("3304"), i++)) {
          if (stryMutAct_9fa48("3305")) {
            {}
          } else {
            stryCov_9fa48("3305");
            let iterations = stryMutAct_9fa48("3306") ? Math.min(0, Math.floor((updatedValues[i] - high) / b[i]) + 1) : (stryCov_9fa48("3306"), Math.max(0, stryMutAct_9fa48("3307") ? Math.floor((updatedValues[i] - high) / b[i]) - 1 : (stryCov_9fa48("3307"), Math.floor(stryMutAct_9fa48("3308") ? (updatedValues[i] - high) * b[i] : (stryCov_9fa48("3308"), (stryMutAct_9fa48("3309") ? updatedValues[i] + high : (stryCov_9fa48("3309"), updatedValues[i] - high)) / b[i])) + 1)));
            stryMutAct_9fa48("3310") ? remainingOperations += iterations : (stryCov_9fa48("3310"), remainingOperations -= iterations);

            // Convert all numbers to BigInt
            const iter = BigInt(iterations);
            const val = BigInt(updatedValues[i]);
            const dec = BigInt(b[i]);
            stryMutAct_9fa48("3311") ? totalScore -= iter * (val + val - (iter - 1n) * dec) / 2n : (stryCov_9fa48("3311"), totalScore += stryMutAct_9fa48("3312") ? iter * (val + val - (iter - 1n) * dec) * 2n : (stryCov_9fa48("3312"), (stryMutAct_9fa48("3313") ? iter / (val + val - (iter - 1n) * dec) : (stryCov_9fa48("3313"), iter * (stryMutAct_9fa48("3314") ? val + val + (iter - 1n) * dec : (stryCov_9fa48("3314"), (stryMutAct_9fa48("3315") ? val - val : (stryCov_9fa48("3315"), val + val)) - (stryMutAct_9fa48("3316") ? (iter - 1n) / dec : (stryCov_9fa48("3316"), (stryMutAct_9fa48("3317") ? iter + 1n : (stryCov_9fa48("3317"), iter - 1n)) * dec)))))) / 2n));
            stryMutAct_9fa48("3318") ? updatedValues[i] += iterations * b[i] : (stryCov_9fa48("3318"), updatedValues[i] -= stryMutAct_9fa48("3319") ? iterations / b[i] : (stryCov_9fa48("3319"), iterations * b[i]));
          }
        }
        stryMutAct_9fa48("3320") ? updatedValues : (stryCov_9fa48("3320"), updatedValues.sort(stryMutAct_9fa48("3321") ? () => undefined : (stryCov_9fa48("3321"), (x, y) => stryMutAct_9fa48("3322") ? y + x : (stryCov_9fa48("3322"), y - x))));
        for (let i = 0; stryMutAct_9fa48("3325") ? i >= Math.min(n, remainingOperations) : stryMutAct_9fa48("3324") ? i <= Math.min(n, remainingOperations) : stryMutAct_9fa48("3323") ? false : (stryCov_9fa48("3323", "3324", "3325"), i < (stryMutAct_9fa48("3326") ? Math.max(n, remainingOperations) : (stryCov_9fa48("3326"), Math.min(n, remainingOperations)))); stryMutAct_9fa48("3327") ? i-- : (stryCov_9fa48("3327"), i++)) {
          if (stryMutAct_9fa48("3328")) {
            {}
          } else {
            stryCov_9fa48("3328");
            if (stryMutAct_9fa48("3332") ? updatedValues[i] > 0 : stryMutAct_9fa48("3331") ? updatedValues[i] < 0 : stryMutAct_9fa48("3330") ? false : stryMutAct_9fa48("3329") ? true : (stryCov_9fa48("3329", "3330", "3331", "3332"), updatedValues[i] <= 0)) break;
            stryMutAct_9fa48("3333") ? totalScore -= BigInt(updatedValues[i]) : (stryCov_9fa48("3333"), totalScore += BigInt(updatedValues[i]));
          }
        }
        results.push(totalScore.toString());
      }
    }
    return results;
  }
}

// function testing_test() {
//     const cases = [
//         {
//             n: 3, k: 4,
//             a: [5, 6, 7],
//             b: [2, 3, 4]
//         },
//         {
//             n: 5, k: 9,
//             a: [32, 52, 68, 64, 14],
//             b: [18, 14, 53, 24, 8]
//         },
//         {
//             n: 5, k: 1000,
//             a: [1, 2, 3, 4, 5],
//             b: [5, 4, 3, 2, 1]
//         },
//         {
//             n: 1, k: 1000000,
//             a: [1000000],
//             b: [1]
//         },
//         {
//             n: 10, k: 6,
//             a: [3, 3, 5, 10, 6, 8, 6, 8, 7, 7],
//             b: [6, 1, 7, 4, 1, 1, 8, 9, 3, 1]
//         }
//     ];

//     const expected = [
//         "21",
//         "349",
//         "27",
//         "500000500000",
//         "47"
//     ];

//     const actual = solve(cases);

//     console.log("✅ Output:");
//     console.log(actual.join('\n'));

//     console.log("\n✅ Expected:");
//     console.log(expected.join('\n'));

//     console.log("\n✅ Test Result:", actual.join('\n') === expected.join('\n') ? "Passed" : "Failed");
// }

// testing_test();