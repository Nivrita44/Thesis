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
const MAX_SIZE = stryMutAct_9fa48("2917") ? 1e7 - 10 : (stryCov_9fa48("2917"), 1e7 + 10);
const sgValues = new Uint32Array(MAX_SIZE);
const isComposite = new Uint8Array(MAX_SIZE);
const factor = new Uint32Array(MAX_SIZE);
const primes = stryMutAct_9fa48("2918") ? ["Stryker was here"] : (stryCov_9fa48("2918"), []);
function initializeSieve() {
  if (stryMutAct_9fa48("2919")) {
    {}
  } else {
    stryCov_9fa48("2919");
    let primeCount = 0;
    for (let num = 2; stryMutAct_9fa48("2922") ? num >= MAX_SIZE : stryMutAct_9fa48("2921") ? num <= MAX_SIZE : stryMutAct_9fa48("2920") ? false : (stryCov_9fa48("2920", "2921", "2922"), num < MAX_SIZE); stryMutAct_9fa48("2923") ? num-- : (stryCov_9fa48("2923"), num++)) {
      if (stryMutAct_9fa48("2924")) {
        {}
      } else {
        stryCov_9fa48("2924");
        if (stryMutAct_9fa48("2927") ? false : stryMutAct_9fa48("2926") ? true : stryMutAct_9fa48("2925") ? isComposite[num] : (stryCov_9fa48("2925", "2926", "2927"), !isComposite[num])) {
          if (stryMutAct_9fa48("2928")) {
            {}
          } else {
            stryCov_9fa48("2928");
            primes[stryMutAct_9fa48("2929") ? primeCount-- : (stryCov_9fa48("2929"), primeCount++)] = num;
            factor[num] = num;
          }
        }
        for (let j = 0; stryMutAct_9fa48("2931") ? j < primeCount || num * primes[j] < MAX_SIZE : stryMutAct_9fa48("2930") ? false : (stryCov_9fa48("2930", "2931"), (stryMutAct_9fa48("2934") ? j >= primeCount : stryMutAct_9fa48("2933") ? j <= primeCount : stryMutAct_9fa48("2932") ? true : (stryCov_9fa48("2932", "2933", "2934"), j < primeCount)) && (stryMutAct_9fa48("2937") ? num * primes[j] >= MAX_SIZE : stryMutAct_9fa48("2936") ? num * primes[j] <= MAX_SIZE : stryMutAct_9fa48("2935") ? true : (stryCov_9fa48("2935", "2936", "2937"), (stryMutAct_9fa48("2938") ? num / primes[j] : (stryCov_9fa48("2938"), num * primes[j])) < MAX_SIZE))); stryMutAct_9fa48("2939") ? j-- : (stryCov_9fa48("2939"), j++)) {
          if (stryMutAct_9fa48("2940")) {
            {}
          } else {
            stryCov_9fa48("2940");
            isComposite[stryMutAct_9fa48("2941") ? num / primes[j] : (stryCov_9fa48("2941"), num * primes[j])] = 1;
            if (stryMutAct_9fa48("2944") ? num % primes[j] !== 0 : stryMutAct_9fa48("2943") ? false : stryMutAct_9fa48("2942") ? true : (stryCov_9fa48("2942", "2943", "2944"), (stryMutAct_9fa48("2945") ? num * primes[j] : (stryCov_9fa48("2945"), num % primes[j])) === 0)) {
              if (stryMutAct_9fa48("2946")) {
                {}
              } else {
                stryCov_9fa48("2946");
                factor[stryMutAct_9fa48("2947") ? num / primes[j] : (stryCov_9fa48("2947"), num * primes[j])] = factor[num];
                break;
              }
            }
            factor[stryMutAct_9fa48("2948") ? num / primes[j] : (stryCov_9fa48("2948"), num * primes[j])] = primes[j];
          }
        }
      }
    }
  }
}
function computeSGValues() {
  if (stryMutAct_9fa48("2949")) {
    {}
  } else {
    stryCov_9fa48("2949");
    let maxSG = 0;
    for (let i = 1; stryMutAct_9fa48("2952") ? i >= MAX_SIZE : stryMutAct_9fa48("2951") ? i <= MAX_SIZE : stryMutAct_9fa48("2950") ? false : (stryCov_9fa48("2950", "2951", "2952"), i < MAX_SIZE); stryMutAct_9fa48("2953") ? i-- : (stryCov_9fa48("2953"), i++)) {
      if (stryMutAct_9fa48("2954")) {
        {}
      } else {
        stryCov_9fa48("2954");
        if (stryMutAct_9fa48("2956") ? false : stryMutAct_9fa48("2955") ? true : (stryCov_9fa48("2955", "2956"), i & 1)) {
          if (stryMutAct_9fa48("2957")) {
            {}
          } else {
            stryCov_9fa48("2957");
            if (stryMutAct_9fa48("2960") ? false : stryMutAct_9fa48("2959") ? true : stryMutAct_9fa48("2958") ? isComposite[i] : (stryCov_9fa48("2958", "2959", "2960"), !isComposite[i])) {
              if (stryMutAct_9fa48("2961")) {
                {}
              } else {
                stryCov_9fa48("2961");
                sgValues[i] = stryMutAct_9fa48("2962") ? --maxSG : (stryCov_9fa48("2962"), ++maxSG);
              }
            } else {
              if (stryMutAct_9fa48("2963")) {
                {}
              } else {
                stryCov_9fa48("2963");
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
  if (stryMutAct_9fa48("2964")) {
    {}
  } else {
    stryCov_9fa48("2964");
    let nimSum = 0;
    for (let i = 0; stryMutAct_9fa48("2967") ? i >= arr.length : stryMutAct_9fa48("2966") ? i <= arr.length : stryMutAct_9fa48("2965") ? false : (stryCov_9fa48("2965", "2966", "2967"), i < arr.length); stryMutAct_9fa48("2968") ? i-- : (stryCov_9fa48("2968"), i++)) {
      if (stryMutAct_9fa48("2969")) {
        {}
      } else {
        stryCov_9fa48("2969");
        nimSum ^= sgValues[arr[i]];
      }
    }
    return nimSum ? stryMutAct_9fa48("2970") ? "" : (stryCov_9fa48("2970"), "Alice") : stryMutAct_9fa48("2971") ? "" : (stryCov_9fa48("2971"), "Bob");
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