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
const MAX_SIZE = stryMutAct_9fa48("2162") ? 1e7 - 10 : (stryCov_9fa48("2162"), 1e7 + 10);
const sgValues = new Uint32Array(MAX_SIZE);
const isComposite = new Uint8Array(MAX_SIZE);
const factor = new Uint32Array(MAX_SIZE);
const primes = stryMutAct_9fa48("2163") ? ["Stryker was here"] : (stryCov_9fa48("2163"), []);
function initializeSieve() {
  if (stryMutAct_9fa48("2164")) {
    {}
  } else {
    stryCov_9fa48("2164");
    let primeCount = 0;
    for (let num = 2; stryMutAct_9fa48("2167") ? num >= MAX_SIZE : stryMutAct_9fa48("2166") ? num <= MAX_SIZE : stryMutAct_9fa48("2165") ? false : (stryCov_9fa48("2165", "2166", "2167"), num < MAX_SIZE); stryMutAct_9fa48("2168") ? num-- : (stryCov_9fa48("2168"), num++)) {
      if (stryMutAct_9fa48("2169")) {
        {}
      } else {
        stryCov_9fa48("2169");
        if (stryMutAct_9fa48("2172") ? false : stryMutAct_9fa48("2171") ? true : stryMutAct_9fa48("2170") ? isComposite[num] : (stryCov_9fa48("2170", "2171", "2172"), !isComposite[num])) {
          if (stryMutAct_9fa48("2173")) {
            {}
          } else {
            stryCov_9fa48("2173");
            primes[stryMutAct_9fa48("2174") ? primeCount-- : (stryCov_9fa48("2174"), primeCount++)] = num;
            factor[num] = num;
          }
        }
        for (let j = 0; stryMutAct_9fa48("2176") ? j < primeCount || num * primes[j] < MAX_SIZE : stryMutAct_9fa48("2175") ? false : (stryCov_9fa48("2175", "2176"), (stryMutAct_9fa48("2179") ? j >= primeCount : stryMutAct_9fa48("2178") ? j <= primeCount : stryMutAct_9fa48("2177") ? true : (stryCov_9fa48("2177", "2178", "2179"), j < primeCount)) && (stryMutAct_9fa48("2182") ? num * primes[j] >= MAX_SIZE : stryMutAct_9fa48("2181") ? num * primes[j] <= MAX_SIZE : stryMutAct_9fa48("2180") ? true : (stryCov_9fa48("2180", "2181", "2182"), (stryMutAct_9fa48("2183") ? num / primes[j] : (stryCov_9fa48("2183"), num * primes[j])) < MAX_SIZE))); stryMutAct_9fa48("2184") ? j-- : (stryCov_9fa48("2184"), j++)) {
          if (stryMutAct_9fa48("2185")) {
            {}
          } else {
            stryCov_9fa48("2185");
            isComposite[stryMutAct_9fa48("2186") ? num / primes[j] : (stryCov_9fa48("2186"), num * primes[j])] = 1;
            if (stryMutAct_9fa48("2189") ? num % primes[j] !== 0 : stryMutAct_9fa48("2188") ? false : stryMutAct_9fa48("2187") ? true : (stryCov_9fa48("2187", "2188", "2189"), (stryMutAct_9fa48("2190") ? num * primes[j] : (stryCov_9fa48("2190"), num % primes[j])) === 0)) {
              if (stryMutAct_9fa48("2191")) {
                {}
              } else {
                stryCov_9fa48("2191");
                factor[stryMutAct_9fa48("2192") ? num / primes[j] : (stryCov_9fa48("2192"), num * primes[j])] = factor[num];
                break;
              }
            }
            factor[stryMutAct_9fa48("2193") ? num / primes[j] : (stryCov_9fa48("2193"), num * primes[j])] = primes[j];
          }
        }
      }
    }
  }
}
function computeSGValues() {
  if (stryMutAct_9fa48("2194")) {
    {}
  } else {
    stryCov_9fa48("2194");
    let maxSG = 0;
    for (let i = 1; stryMutAct_9fa48("2197") ? i >= MAX_SIZE : stryMutAct_9fa48("2196") ? i <= MAX_SIZE : stryMutAct_9fa48("2195") ? false : (stryCov_9fa48("2195", "2196", "2197"), i < MAX_SIZE); stryMutAct_9fa48("2198") ? i-- : (stryCov_9fa48("2198"), i++)) {
      if (stryMutAct_9fa48("2199")) {
        {}
      } else {
        stryCov_9fa48("2199");
        if (stryMutAct_9fa48("2201") ? false : stryMutAct_9fa48("2200") ? true : (stryCov_9fa48("2200", "2201"), i & 1)) {
          if (stryMutAct_9fa48("2202")) {
            {}
          } else {
            stryCov_9fa48("2202");
            if (stryMutAct_9fa48("2205") ? false : stryMutAct_9fa48("2204") ? true : stryMutAct_9fa48("2203") ? isComposite[i] : (stryCov_9fa48("2203", "2204", "2205"), !isComposite[i])) {
              if (stryMutAct_9fa48("2206")) {
                {}
              } else {
                stryCov_9fa48("2206");
                sgValues[i] = stryMutAct_9fa48("2207") ? --maxSG : (stryCov_9fa48("2207"), ++maxSG);
              }
            } else {
              if (stryMutAct_9fa48("2208")) {
                {}
              } else {
                stryCov_9fa48("2208");
                sgValues[i] = sgValues[factor[i]];
              }
            }
          }
        }
      }
    }
  }
}
export function solve(arr) {
  if (stryMutAct_9fa48("2209")) {
    {}
  } else {
    stryCov_9fa48("2209");
    let nimSum = 0;
    for (let i = 0; stryMutAct_9fa48("2212") ? i >= arr.length : stryMutAct_9fa48("2211") ? i <= arr.length : stryMutAct_9fa48("2210") ? false : (stryCov_9fa48("2210", "2211", "2212"), i < arr.length); stryMutAct_9fa48("2213") ? i-- : (stryCov_9fa48("2213"), i++)) {
      if (stryMutAct_9fa48("2214")) {
        {}
      } else {
        stryCov_9fa48("2214");
        nimSum ^= sgValues[arr[i]];
      }
    }
    return nimSum ? stryMutAct_9fa48("2215") ? "" : (stryCov_9fa48("2215"), "Alice") : stryMutAct_9fa48("2216") ? "" : (stryCov_9fa48("2216"), "Bob");
  }
}
initializeSieve();
computeSGValues();

// function testing_test() {
//     const testCases = [
//         { input: [3, [3, 2, 9]], expected: "Bob" },
//         { input: [4, [3, 3, 6, 1]], expected: "Alice" },
//         { input: [5, [1, 2, 3, 4, 5]], expected: "Bob" },
//     ];

//     testCases.forEach(({ input, expected }, index) => {
//         const [n, arr] = input;
//         const result = solve(arr);
//         console.log(`Test Case ${index + 1}:`, result === expected ? "Passed" : `Failed (Expected: ${expected}, Got: ${result})`);
//     });
// }

// testing_test();