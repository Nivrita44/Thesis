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
const MAX_P = 1000000;
const primes = stryMutAct_9fa48("903") ? ["Stryker was here"] : (stryCov_9fa48("903"), []);
const sieve = new Int32Array(stryMutAct_9fa48("904") ? MAX_P - 1 : (stryCov_9fa48("904"), MAX_P + 1));
for (let i = 2; stryMutAct_9fa48("907") ? i > MAX_P : stryMutAct_9fa48("906") ? i < MAX_P : stryMutAct_9fa48("905") ? false : (stryCov_9fa48("905", "906", "907"), i <= MAX_P); stryMutAct_9fa48("908") ? i-- : (stryCov_9fa48("908"), i++)) {
  if (stryMutAct_9fa48("909")) {
    {}
  } else {
    stryCov_9fa48("909");
    if (stryMutAct_9fa48("912") ? false : stryMutAct_9fa48("911") ? true : stryMutAct_9fa48("910") ? sieve[i] : (stryCov_9fa48("910", "911", "912"), !sieve[i])) primes.push(i);
    for (let p of primes) {
      if (stryMutAct_9fa48("913")) {
        {}
      } else {
        stryCov_9fa48("913");
        if (stryMutAct_9fa48("917") ? i * p <= MAX_P : stryMutAct_9fa48("916") ? i * p >= MAX_P : stryMutAct_9fa48("915") ? false : stryMutAct_9fa48("914") ? true : (stryCov_9fa48("914", "915", "916", "917"), (stryMutAct_9fa48("918") ? i / p : (stryCov_9fa48("918"), i * p)) > MAX_P)) break;
        sieve[stryMutAct_9fa48("919") ? i / p : (stryCov_9fa48("919"), i * p)] = p;
        if (stryMutAct_9fa48("922") ? i % p !== 0 : stryMutAct_9fa48("921") ? false : stryMutAct_9fa48("920") ? true : (stryCov_9fa48("920", "921", "922"), (stryMutAct_9fa48("923") ? i * p : (stryCov_9fa48("923"), i % p)) === 0)) break;
      }
    }
  }
}
function rad(k) {
  if (stryMutAct_9fa48("924")) {
    {}
  } else {
    stryCov_9fa48("924");
    let r = stryMutAct_9fa48("925") ? ["Stryker was here"] : (stryCov_9fa48("925"), []);
    while (stryMutAct_9fa48("928") ? k <= 1 : stryMutAct_9fa48("927") ? k >= 1 : stryMutAct_9fa48("926") ? false : (stryCov_9fa48("926", "927", "928"), k > 1)) {
      if (stryMutAct_9fa48("929")) {
        {}
      } else {
        stryCov_9fa48("929");
        if (stryMutAct_9fa48("932") ? sieve[k] !== 0 : stryMutAct_9fa48("931") ? false : stryMutAct_9fa48("930") ? true : (stryCov_9fa48("930", "931", "932"), sieve[k] === 0)) {
          if (stryMutAct_9fa48("933")) {
            {}
          } else {
            stryCov_9fa48("933");
            r.push(k);
            break;
          }
        }
        let p = sieve[k];
        r.push(p);
        while (stryMutAct_9fa48("935") ? k % p !== 0 : stryMutAct_9fa48("934") ? false : (stryCov_9fa48("934", "935"), (stryMutAct_9fa48("936") ? k * p : (stryCov_9fa48("936"), k % p)) === 0)) k = Math.floor(stryMutAct_9fa48("937") ? k * p : (stryCov_9fa48("937"), k / p));
      }
    }
    let divs = stryMutAct_9fa48("938") ? [] : (stryCov_9fa48("938"), [1]);
    for (let p of r) {
      if (stryMutAct_9fa48("939")) {
        {}
      } else {
        stryCov_9fa48("939");
        let L = divs.length;
        for (let j = 0; stryMutAct_9fa48("942") ? j >= L : stryMutAct_9fa48("941") ? j <= L : stryMutAct_9fa48("940") ? false : (stryCov_9fa48("940", "941", "942"), j < L); stryMutAct_9fa48("943") ? j-- : (stryCov_9fa48("943"), j++)) {
          if (stryMutAct_9fa48("944")) {
            {}
          } else {
            stryCov_9fa48("944");
            divs.push(stryMutAct_9fa48("945") ? divs[j] / -p : (stryCov_9fa48("945"), divs[j] * (stryMutAct_9fa48("946") ? +p : (stryCov_9fa48("946"), -p))));
          }
        }
      }
    }
    return divs;
  }
}
export function solve(a) {
  if (stryMutAct_9fa48("947")) {
    {}
  } else {
    stryCov_9fa48("947");
    const MOD = 0x3b800001;
    const V = new Int32Array(1000001);
    for (let d of rad(a[0])) {
      if (stryMutAct_9fa48("948")) {
        {}
      } else {
        stryCov_9fa48("948");
        V[Math.abs(d)] = 1;
      }
    }
    for (let i = 1; stryMutAct_9fa48("951") ? i >= a.length : stryMutAct_9fa48("950") ? i <= a.length : stryMutAct_9fa48("949") ? false : (stryCov_9fa48("949", "950", "951"), i < a.length); stryMutAct_9fa48("952") ? i-- : (stryCov_9fa48("952"), i++)) {
      if (stryMutAct_9fa48("953")) {
        {}
      } else {
        stryCov_9fa48("953");
        let divs = rad(a[i]);
        let ways = 0;
        for (let d of divs) {
          if (stryMutAct_9fa48("954")) {
            {}
          } else {
            stryCov_9fa48("954");
            if (stryMutAct_9fa48("957") ? d !== 1 : stryMutAct_9fa48("956") ? false : stryMutAct_9fa48("955") ? true : (stryCov_9fa48("955", "956", "957"), d === 1)) continue;
            if (stryMutAct_9fa48("961") ? d <= 0 : stryMutAct_9fa48("960") ? d >= 0 : stryMutAct_9fa48("959") ? false : stryMutAct_9fa48("958") ? true : (stryCov_9fa48("958", "959", "960", "961"), d > 0)) ways = stryMutAct_9fa48("962") ? (ways - V[d]) * MOD : (stryCov_9fa48("962"), (stryMutAct_9fa48("963") ? ways + V[d] : (stryCov_9fa48("963"), ways - V[d])) % MOD);else ways = stryMutAct_9fa48("964") ? (ways + V[-d]) * MOD : (stryCov_9fa48("964"), (stryMutAct_9fa48("965") ? ways - V[-d] : (stryCov_9fa48("965"), ways + V[stryMutAct_9fa48("966") ? +d : (stryCov_9fa48("966"), -d)])) % MOD);
          }
        }
        ways = stryMutAct_9fa48("967") ? (ways % MOD + MOD) * MOD : (stryCov_9fa48("967"), (stryMutAct_9fa48("968") ? ways % MOD - MOD : (stryCov_9fa48("968"), (stryMutAct_9fa48("969") ? ways * MOD : (stryCov_9fa48("969"), ways % MOD)) + MOD)) % MOD);
        if (stryMutAct_9fa48("972") ? i !== a.length - 1 : stryMutAct_9fa48("971") ? false : stryMutAct_9fa48("970") ? true : (stryCov_9fa48("970", "971", "972"), i === (stryMutAct_9fa48("973") ? a.length + 1 : (stryCov_9fa48("973"), a.length - 1)))) {
          if (stryMutAct_9fa48("974")) {
            {}
          } else {
            stryCov_9fa48("974");
            return ways;
          }
        }
        for (let d of divs) {
          if (stryMutAct_9fa48("975")) {
            {}
          } else {
            stryCov_9fa48("975");
            V[Math.abs(d)] = stryMutAct_9fa48("976") ? (V[Math.abs(d)] + ways) * MOD : (stryCov_9fa48("976"), (stryMutAct_9fa48("977") ? V[Math.abs(d)] - ways : (stryCov_9fa48("977"), V[Math.abs(d)] + ways)) % MOD);
          }
        }
      }
    }
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [5, [2, 6, 3, 4, 6]], expected: 5 },
//         { input: [5, [4, 196, 2662, 2197, 121]], expected: 2 },
//         { input: [2, [2, 3]], expected: 0 },
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { input, expected } = testCases[i];
//         const n = input[0];
//         const array = input[1];
//         const result = solve(array);
//         console.log(`Test case ${i + 1}:`, result === expected ? "Passed" : `Failed (Expected ${expected}, got ${result})`);
//     }
// }

// testing_test();