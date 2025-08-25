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
const primes = stryMutAct_9fa48("824") ? ["Stryker was here"] : (stryCov_9fa48("824"), []);
const sieve = new Int32Array(stryMutAct_9fa48("825") ? MAX_P - 1 : (stryCov_9fa48("825"), MAX_P + 1));
for (let i = 2; stryMutAct_9fa48("828") ? i > MAX_P : stryMutAct_9fa48("827") ? i < MAX_P : stryMutAct_9fa48("826") ? false : (stryCov_9fa48("826", "827", "828"), i <= MAX_P); stryMutAct_9fa48("829") ? i-- : (stryCov_9fa48("829"), i++)) {
  if (stryMutAct_9fa48("830")) {
    {}
  } else {
    stryCov_9fa48("830");
    if (stryMutAct_9fa48("833") ? false : stryMutAct_9fa48("832") ? true : stryMutAct_9fa48("831") ? sieve[i] : (stryCov_9fa48("831", "832", "833"), !sieve[i])) primes.push(i);
    for (let p of primes) {
      if (stryMutAct_9fa48("834")) {
        {}
      } else {
        stryCov_9fa48("834");
        if (stryMutAct_9fa48("838") ? i * p <= MAX_P : stryMutAct_9fa48("837") ? i * p >= MAX_P : stryMutAct_9fa48("836") ? false : stryMutAct_9fa48("835") ? true : (stryCov_9fa48("835", "836", "837", "838"), (stryMutAct_9fa48("839") ? i / p : (stryCov_9fa48("839"), i * p)) > MAX_P)) break;
        sieve[stryMutAct_9fa48("840") ? i / p : (stryCov_9fa48("840"), i * p)] = p;
        if (stryMutAct_9fa48("843") ? i % p !== 0 : stryMutAct_9fa48("842") ? false : stryMutAct_9fa48("841") ? true : (stryCov_9fa48("841", "842", "843"), (stryMutAct_9fa48("844") ? i * p : (stryCov_9fa48("844"), i % p)) === 0)) break;
      }
    }
  }
}
function rad(k) {
  if (stryMutAct_9fa48("845")) {
    {}
  } else {
    stryCov_9fa48("845");
    let r = stryMutAct_9fa48("846") ? ["Stryker was here"] : (stryCov_9fa48("846"), []);
    while (stryMutAct_9fa48("849") ? k <= 1 : stryMutAct_9fa48("848") ? k >= 1 : stryMutAct_9fa48("847") ? false : (stryCov_9fa48("847", "848", "849"), k > 1)) {
      if (stryMutAct_9fa48("850")) {
        {}
      } else {
        stryCov_9fa48("850");
        if (stryMutAct_9fa48("853") ? sieve[k] !== 0 : stryMutAct_9fa48("852") ? false : stryMutAct_9fa48("851") ? true : (stryCov_9fa48("851", "852", "853"), sieve[k] === 0)) {
          if (stryMutAct_9fa48("854")) {
            {}
          } else {
            stryCov_9fa48("854");
            r.push(k);
            break;
          }
        }
        let p = sieve[k];
        r.push(p);
        while (stryMutAct_9fa48("856") ? k % p !== 0 : stryMutAct_9fa48("855") ? false : (stryCov_9fa48("855", "856"), (stryMutAct_9fa48("857") ? k * p : (stryCov_9fa48("857"), k % p)) === 0)) k = Math.floor(stryMutAct_9fa48("858") ? k * p : (stryCov_9fa48("858"), k / p));
      }
    }
    let divs = stryMutAct_9fa48("859") ? [] : (stryCov_9fa48("859"), [1]);
    for (let p of r) {
      if (stryMutAct_9fa48("860")) {
        {}
      } else {
        stryCov_9fa48("860");
        let L = divs.length;
        for (let j = 0; stryMutAct_9fa48("863") ? j >= L : stryMutAct_9fa48("862") ? j <= L : stryMutAct_9fa48("861") ? false : (stryCov_9fa48("861", "862", "863"), j < L); stryMutAct_9fa48("864") ? j-- : (stryCov_9fa48("864"), j++)) {
          if (stryMutAct_9fa48("865")) {
            {}
          } else {
            stryCov_9fa48("865");
            divs.push(stryMutAct_9fa48("866") ? divs[j] / -p : (stryCov_9fa48("866"), divs[j] * (stryMutAct_9fa48("867") ? +p : (stryCov_9fa48("867"), -p))));
          }
        }
      }
    }
    return divs;
  }
}
export function solve(a) {
  if (stryMutAct_9fa48("868")) {
    {}
  } else {
    stryCov_9fa48("868");
    const MOD = 0x3b800001;
    const V = new Int32Array(1000001);
    for (let d of rad(a[0])) {
      if (stryMutAct_9fa48("869")) {
        {}
      } else {
        stryCov_9fa48("869");
        V[Math.abs(d)] = 1;
      }
    }
    for (let i = 1; stryMutAct_9fa48("872") ? i >= a.length : stryMutAct_9fa48("871") ? i <= a.length : stryMutAct_9fa48("870") ? false : (stryCov_9fa48("870", "871", "872"), i < a.length); stryMutAct_9fa48("873") ? i-- : (stryCov_9fa48("873"), i++)) {
      if (stryMutAct_9fa48("874")) {
        {}
      } else {
        stryCov_9fa48("874");
        let divs = rad(a[i]);
        let ways = 0;
        for (let d of divs) {
          if (stryMutAct_9fa48("875")) {
            {}
          } else {
            stryCov_9fa48("875");
            if (stryMutAct_9fa48("878") ? d !== 1 : stryMutAct_9fa48("877") ? false : stryMutAct_9fa48("876") ? true : (stryCov_9fa48("876", "877", "878"), d === 1)) continue;
            if (stryMutAct_9fa48("882") ? d <= 0 : stryMutAct_9fa48("881") ? d >= 0 : stryMutAct_9fa48("880") ? false : stryMutAct_9fa48("879") ? true : (stryCov_9fa48("879", "880", "881", "882"), d > 0)) ways = stryMutAct_9fa48("883") ? (ways - V[d]) * MOD : (stryCov_9fa48("883"), (stryMutAct_9fa48("884") ? ways + V[d] : (stryCov_9fa48("884"), ways - V[d])) % MOD);else ways = stryMutAct_9fa48("885") ? (ways + V[-d]) * MOD : (stryCov_9fa48("885"), (stryMutAct_9fa48("886") ? ways - V[-d] : (stryCov_9fa48("886"), ways + V[stryMutAct_9fa48("887") ? +d : (stryCov_9fa48("887"), -d)])) % MOD);
          }
        }
        ways = stryMutAct_9fa48("888") ? (ways % MOD + MOD) * MOD : (stryCov_9fa48("888"), (stryMutAct_9fa48("889") ? ways % MOD - MOD : (stryCov_9fa48("889"), (stryMutAct_9fa48("890") ? ways * MOD : (stryCov_9fa48("890"), ways % MOD)) + MOD)) % MOD);
        if (stryMutAct_9fa48("893") ? i !== a.length - 1 : stryMutAct_9fa48("892") ? false : stryMutAct_9fa48("891") ? true : (stryCov_9fa48("891", "892", "893"), i === (stryMutAct_9fa48("894") ? a.length + 1 : (stryCov_9fa48("894"), a.length - 1)))) {
          if (stryMutAct_9fa48("895")) {
            {}
          } else {
            stryCov_9fa48("895");
            return ways;
          }
        }
        for (let d of divs) {
          if (stryMutAct_9fa48("896")) {
            {}
          } else {
            stryCov_9fa48("896");
            V[Math.abs(d)] = stryMutAct_9fa48("897") ? (V[Math.abs(d)] + ways) * MOD : (stryCov_9fa48("897"), (stryMutAct_9fa48("898") ? V[Math.abs(d)] - ways : (stryCov_9fa48("898"), V[Math.abs(d)] + ways)) % MOD);
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