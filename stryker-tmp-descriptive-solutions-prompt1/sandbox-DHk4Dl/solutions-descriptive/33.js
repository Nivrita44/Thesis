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
export function solve() {
  if (stryMutAct_9fa48("1812")) {
    {}
  } else {
    stryCov_9fa48("1812");
    const a = Kattio.nextNumber();
    const b = Kattio.nextNumber();
    const c = Kattio.nextNumber();
    const d = Kattio.nextNumber();
    const q1 = stryMutAct_9fa48("1813") ? ["Stryker was here"] : (stryCov_9fa48("1813"), []),
      q2 = stryMutAct_9fa48("1814") ? ["Stryker was here"] : (stryCov_9fa48("1814"), []);
    divide(q1, a, b, 0, 1 << 20);
    divide(q2, c, d, 0, 1 << 20);
    let s = 0;
    for (let x of q1) {
      if (stryMutAct_9fa48("1815")) {
        {}
      } else {
        stryCov_9fa48("1815");
        for (let y of q2) {
          if (stryMutAct_9fa48("1816")) {
            {}
          } else {
            stryCov_9fa48("1816");
            const g = gcd(x, y);
            stryMutAct_9fa48("1817") ? s -= x / g * (y / g) : (stryCov_9fa48("1817"), s += stryMutAct_9fa48("1818") ? x / g / (y / g) : (stryCov_9fa48("1818"), (stryMutAct_9fa48("1819") ? x * g : (stryCov_9fa48("1819"), x / g)) * (stryMutAct_9fa48("1820") ? y * g : (stryCov_9fa48("1820"), y / g))));
          }
        }
      }
    }
    return s;
  }
}
function divide(q, l, r, L, R) {
  if (stryMutAct_9fa48("1821")) {
    {}
  } else {
    stryCov_9fa48("1821");
    if (stryMutAct_9fa48("1824") ? l <= L || r >= R : stryMutAct_9fa48("1823") ? false : stryMutAct_9fa48("1822") ? true : (stryCov_9fa48("1822", "1823", "1824"), (stryMutAct_9fa48("1827") ? l > L : stryMutAct_9fa48("1826") ? l < L : stryMutAct_9fa48("1825") ? true : (stryCov_9fa48("1825", "1826", "1827"), l <= L)) && (stryMutAct_9fa48("1830") ? r < R : stryMutAct_9fa48("1829") ? r > R : stryMutAct_9fa48("1828") ? true : (stryCov_9fa48("1828", "1829", "1830"), r >= R)))) {
      if (stryMutAct_9fa48("1831")) {
        {}
      } else {
        stryCov_9fa48("1831");
        q.push(stryMutAct_9fa48("1832") ? R + L : (stryCov_9fa48("1832"), R - L));
        return;
      }
    }
    const m = stryMutAct_9fa48("1833") ? (L + R) * 2 : (stryCov_9fa48("1833"), (stryMutAct_9fa48("1834") ? L - R : (stryCov_9fa48("1834"), L + R)) / 2);
    if (stryMutAct_9fa48("1838") ? l >= m : stryMutAct_9fa48("1837") ? l <= m : stryMutAct_9fa48("1836") ? false : stryMutAct_9fa48("1835") ? true : (stryCov_9fa48("1835", "1836", "1837", "1838"), l < m)) divide(q, l, r, L, m);
    if (stryMutAct_9fa48("1842") ? r <= m : stryMutAct_9fa48("1841") ? r >= m : stryMutAct_9fa48("1840") ? false : stryMutAct_9fa48("1839") ? true : (stryCov_9fa48("1839", "1840", "1841", "1842"), r > m)) divide(q, l, r, m, R);
  }
}
function gcd(a, b) {
  if (stryMutAct_9fa48("1843")) {
    {}
  } else {
    stryCov_9fa48("1843");
    if (stryMutAct_9fa48("1846") ? a !== 0 : stryMutAct_9fa48("1845") ? false : stryMutAct_9fa48("1844") ? true : (stryCov_9fa48("1844", "1845", "1846"), a === 0)) return b;
    if (stryMutAct_9fa48("1849") ? b !== 0 : stryMutAct_9fa48("1848") ? false : stryMutAct_9fa48("1847") ? true : (stryCov_9fa48("1847", "1848", "1849"), b === 0)) return a;
    while (stryMutAct_9fa48("1850") ? false : (stryCov_9fa48("1850"), a)) {
      if (stryMutAct_9fa48("1851")) {
        {}
      } else {
        stryCov_9fa48("1851");
        const r = stryMutAct_9fa48("1852") ? b * a : (stryCov_9fa48("1852"), b % a);
        b = a;
        a = r;
      }
    }
    return b;
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [0, 1, 1, 2], expected: 1 },
//         { input: [0, 2, 0, 2], expected: 1 },
//         { input: [1, 3, 1, 3], expected: 4 },
//         { input: [0, 2, 1, 5], expected: 5 },
//         { input: [9, 98, 244, 353], expected: 374 },
//     ];

//     for (const { input, expected } of testCases) {
//         Kattio.setInput(input);
//         const result = solve();
//         console.log(`Input: ${input}, Expected: ${expected}, Got: ${result}`);
//         if (result !== expected) {
//             console.error(`Test failed for input ${input}`);
//         } else {
//             console.log(`Test passed for input ${input}`);
//         }
//     }
// }

// Mock Kattio for testing
const Kattio = stryMutAct_9fa48("1853") ? {} : (stryCov_9fa48("1853"), {
  input: stryMutAct_9fa48("1854") ? ["Stryker was here"] : (stryCov_9fa48("1854"), []),
  index: 0,
  setInput(arr) {
    if (stryMutAct_9fa48("1855")) {
      {}
    } else {
      stryCov_9fa48("1855");
      this.input = arr;
      this.index = 0;
    }
  },
  nextNumber() {
    if (stryMutAct_9fa48("1856")) {
      {}
    } else {
      stryCov_9fa48("1856");
      return this.input[stryMutAct_9fa48("1857") ? this.index-- : (stryCov_9fa48("1857"), this.index++)];
    }
  }
});

// Run the test function
// testing_test();