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
const MOD = stryMutAct_9fa48("751") ? 1e9 - 7 : (stryCov_9fa48("751"), 1e9 + 7);
const MOD_APPROX = stryMutAct_9fa48("752") ? (1 << 20) * (1 << 20) * MOD : (stryCov_9fa48("752"), (stryMutAct_9fa48("753") ? (1 << 20) / (1 << 20) : (stryCov_9fa48("753"), (1 << 20) * (1 << 20))) % MOD);
function modAdd(a, b) {
  if (stryMutAct_9fa48("754")) {
    {}
  } else {
    stryCov_9fa48("754");
    return stryMutAct_9fa48("755") ? (a + b) * MOD : (stryCov_9fa48("755"), (stryMutAct_9fa48("756") ? a - b : (stryCov_9fa48("756"), a + b)) % MOD);
  }
}
function modSub(a, b) {
  if (stryMutAct_9fa48("757")) {
    {}
  } else {
    stryCov_9fa48("757");
    return modAdd(modAdd(a, stryMutAct_9fa48("758") ? +b : (stryCov_9fa48("758"), -b)), MOD);
  }
}
function modMul(a, b) {
  if (stryMutAct_9fa48("759")) {
    {}
  } else {
    stryCov_9fa48("759");
    let result = stryMutAct_9fa48("760") ? (a >> 20) * (b >> 20) * MOD_APPROX + (a & 0xfff00000) * (b & 0xfffff) - (a & 0xfffff) * b : (stryCov_9fa48("760"), (stryMutAct_9fa48("761") ? (a >> 20) * (b >> 20) * MOD_APPROX - (a & 0xfff00000) * (b & 0xfffff) : (stryCov_9fa48("761"), (stryMutAct_9fa48("762") ? (a >> 20) * (b >> 20) / MOD_APPROX : (stryCov_9fa48("762"), (stryMutAct_9fa48("763") ? (a >> 20) / (b >> 20) : (stryCov_9fa48("763"), (a >> 20) * (b >> 20))) * MOD_APPROX)) + (stryMutAct_9fa48("764") ? (a & 0xfff00000) / (b & 0xfffff) : (stryCov_9fa48("764"), (a & 0xfff00000) * (b & 0xfffff))))) + (stryMutAct_9fa48("765") ? (a & 0xfffff) / b : (stryCov_9fa48("765"), (a & 0xfffff) * b)));
    return stryMutAct_9fa48("766") ? result * MOD : (stryCov_9fa48("766"), result % MOD);
  }
}
const MAX_N = 3e5;
const prefixSum = (stryMutAct_9fa48("767") ? new Array() : (stryCov_9fa48("767"), new Array(stryMutAct_9fa48("768") ? MAX_N - 1 : (stryCov_9fa48("768"), MAX_N + 1)))).fill(0);
const prefixSumSquares = (stryMutAct_9fa48("769") ? new Array() : (stryCov_9fa48("769"), new Array(stryMutAct_9fa48("770") ? MAX_N - 1 : (stryCov_9fa48("770"), MAX_N + 1)))).fill(0);
for (let i = 1; stryMutAct_9fa48("773") ? i > MAX_N : stryMutAct_9fa48("772") ? i < MAX_N : stryMutAct_9fa48("771") ? false : (stryCov_9fa48("771", "772", "773"), i <= MAX_N); stryMutAct_9fa48("774") ? i-- : (stryCov_9fa48("774"), i++)) {
  if (stryMutAct_9fa48("775")) {
    {}
  } else {
    stryCov_9fa48("775");
    prefixSum[i] = modAdd(prefixSum[stryMutAct_9fa48("776") ? i + 1 : (stryCov_9fa48("776"), i - 1)], i);
    prefixSumSquares[i] = modAdd(prefixSumSquares[stryMutAct_9fa48("777") ? i + 1 : (stryCov_9fa48("777"), i - 1)], modMul(i, i));
  }
}
function computeRangeSum(n, baseA, left, right) {
  if (stryMutAct_9fa48("778")) {
    {}
  } else {
    stryCov_9fa48("778");
    const count = stryMutAct_9fa48("779") ? right - left - 1 : (stryCov_9fa48("779"), (stryMutAct_9fa48("780") ? right + left : (stryCov_9fa48("780"), right - left)) + 1);
    const term1 = modMul(baseA, modSub(prefixSumSquares[right], prefixSumSquares[stryMutAct_9fa48("781") ? left + 1 : (stryCov_9fa48("781"), left - 1)]));
    const term2 = modMul(n, modSub(prefixSum[right], prefixSum[stryMutAct_9fa48("782") ? left + 1 : (stryCov_9fa48("782"), left - 1)]));
    const term3 = modMul(baseA, count);
    return modSub(modAdd(term2, term3), term1);
  }
}
function calculateBaseSum(baseP, n) {
  if (stryMutAct_9fa48("783")) {
    {}
  } else {
    stryCov_9fa48("783");
    let number = n;
    const baseDigits = stryMutAct_9fa48("784") ? ["Stryker was here"] : (stryCov_9fa48("784"), []);
    while (stryMutAct_9fa48("787") ? number <= 0 : stryMutAct_9fa48("786") ? number >= 0 : stryMutAct_9fa48("785") ? false : (stryCov_9fa48("785", "786", "787"), number > 0)) {
      if (stryMutAct_9fa48("788")) {
        {}
      } else {
        stryCov_9fa48("788");
        baseDigits.unshift(stryMutAct_9fa48("789") ? number * baseP : (stryCov_9fa48("789"), number % baseP));
        number = Math.floor(stryMutAct_9fa48("790") ? number * baseP : (stryCov_9fa48("790"), number / baseP));
      }
    }
    let result = 0,
      basePower = 1;
    for (let i = 0; stryMutAct_9fa48("793") ? i >= baseDigits.length : stryMutAct_9fa48("792") ? i <= baseDigits.length : stryMutAct_9fa48("791") ? false : (stryCov_9fa48("791", "792", "793"), i < baseDigits.length); stryMutAct_9fa48("794") ? i-- : (stryCov_9fa48("794"), i++)) {
      if (stryMutAct_9fa48("795")) {
        {}
      } else {
        stryCov_9fa48("795");
        result = modAdd(result, modMul(baseDigits[i], basePower));
        basePower = modMul(basePower, baseP);
      }
    }
    return result;
  }
}
export function solve(n, k) {
  if (stryMutAct_9fa48("796")) {
    {}
  } else {
    stryCov_9fa48("796");
    let totalSum = 0;
    let effectiveK;
    if (stryMutAct_9fa48("800") ? k <= n : stryMutAct_9fa48("799") ? k >= n : stryMutAct_9fa48("798") ? false : stryMutAct_9fa48("797") ? true : (stryCov_9fa48("797", "798", "799", "800"), k > n)) {
      if (stryMutAct_9fa48("801")) {
        {}
      } else {
        stryCov_9fa48("801");
        const surplus = stryMutAct_9fa48("802") ? (BigInt(k) - BigInt(n)) * BigInt(MOD) : (stryCov_9fa48("802"), (stryMutAct_9fa48("803") ? BigInt(k) + BigInt(n) : (stryCov_9fa48("803"), BigInt(k) - BigInt(n))) % BigInt(MOD));
        totalSum = modMul(Number(surplus), n);
        effectiveK = n;
      }
    } else {
      if (stryMutAct_9fa48("804")) {
        {}
      } else {
        stryCov_9fa48("804");
        effectiveK = Number(k);
      }
    }
    let previous = effectiveK;
    if (stryMutAct_9fa48("805")) {
      for (let baseA = 1; false; baseA++) {
        const lowerBound = Math.floor(n / (baseA + 1)) + 1;
        if (n >= lowerBound * lowerBound) break;
        if (lowerBound <= effectiveK) {
          const from = Math.max(2, lowerBound);
          const to = Math.min(effectiveK, previous);
          totalSum = modAdd(totalSum, computeRangeSum(n, baseA, from, to));
        }
        previous = lowerBound - 1;
      }
    } else {
      stryCov_9fa48("805");
      for (let baseA = 1;; stryMutAct_9fa48("806") ? baseA-- : (stryCov_9fa48("806"), baseA++)) {
        if (stryMutAct_9fa48("807")) {
          {}
        } else {
          stryCov_9fa48("807");
          const lowerBound = stryMutAct_9fa48("808") ? Math.floor(n / (baseA + 1)) - 1 : (stryCov_9fa48("808"), Math.floor(stryMutAct_9fa48("809") ? n * (baseA + 1) : (stryCov_9fa48("809"), n / (stryMutAct_9fa48("810") ? baseA - 1 : (stryCov_9fa48("810"), baseA + 1)))) + 1);
          if (stryMutAct_9fa48("814") ? n < lowerBound * lowerBound : stryMutAct_9fa48("813") ? n > lowerBound * lowerBound : stryMutAct_9fa48("812") ? false : stryMutAct_9fa48("811") ? true : (stryCov_9fa48("811", "812", "813", "814"), n >= (stryMutAct_9fa48("815") ? lowerBound / lowerBound : (stryCov_9fa48("815"), lowerBound * lowerBound)))) break;
          if (stryMutAct_9fa48("819") ? lowerBound > effectiveK : stryMutAct_9fa48("818") ? lowerBound < effectiveK : stryMutAct_9fa48("817") ? false : stryMutAct_9fa48("816") ? true : (stryCov_9fa48("816", "817", "818", "819"), lowerBound <= effectiveK)) {
            if (stryMutAct_9fa48("820")) {
              {}
            } else {
              stryCov_9fa48("820");
              const from = stryMutAct_9fa48("821") ? Math.min(2, lowerBound) : (stryCov_9fa48("821"), Math.max(2, lowerBound));
              const to = stryMutAct_9fa48("822") ? Math.max(effectiveK, previous) : (stryCov_9fa48("822"), Math.min(effectiveK, previous));
              totalSum = modAdd(totalSum, computeRangeSum(n, baseA, from, to));
            }
          }
          previous = stryMutAct_9fa48("823") ? lowerBound + 1 : (stryCov_9fa48("823"), lowerBound - 1);
        }
      }
    }
    previous = stryMutAct_9fa48("824") ? Math.max(previous, effectiveK) : (stryCov_9fa48("824"), Math.min(previous, effectiveK));
    for (let baseP = 2; stryMutAct_9fa48("827") ? baseP > previous : stryMutAct_9fa48("826") ? baseP < previous : stryMutAct_9fa48("825") ? false : (stryCov_9fa48("825", "826", "827"), baseP <= previous); stryMutAct_9fa48("828") ? baseP-- : (stryCov_9fa48("828"), baseP++)) {
      if (stryMutAct_9fa48("829")) {
        {}
      } else {
        stryCov_9fa48("829");
        totalSum = modAdd(totalSum, calculateBaseSum(baseP, n));
      }
    }
    return totalSum;
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [9, 3n], expected: 10 },
//         { input: [19, 84n], expected: 2006 },
//         { input: [9982, 44353n], expected: 120792461 },
//         { input: [100000, 1000000007n], expected: 584502117 },
//         { input: [17, 30n], expected: 775 },
//         { input: [777, 1000000000000000000n], expected: 46058362 },
//     ];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(...input);
//         const pass = result === expected ? "PASS" : "FAIL";
//         console.log(`Test ${index + 1}: ${pass}`);
//         console.log(`  Input: n=${input[0]}, k=${input[1]}`);
//         console.log(`  Expected: ${expected}`);
//         console.log(`  Got: ${result}\n`);
//     });
// }

// testing_test();