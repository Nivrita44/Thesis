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
const MAX = 400000;
let facts = new Int32Array(stryMutAct_9fa48("1724") ? MAX - 1 : (stryCov_9fa48("1724"), MAX + 1));
let primes = stryMutAct_9fa48("1725") ? ["Stryker was here"] : (stryCov_9fa48("1725"), []);
function sieve() {
  if (stryMutAct_9fa48("1726")) {
    {}
  } else {
    stryCov_9fa48("1726");
    for (let i = 2; stryMutAct_9fa48("1729") ? i > MAX : stryMutAct_9fa48("1728") ? i < MAX : stryMutAct_9fa48("1727") ? false : (stryCov_9fa48("1727", "1728", "1729"), i <= MAX); stryMutAct_9fa48("1730") ? i-- : (stryCov_9fa48("1730"), i++)) {
      if (stryMutAct_9fa48("1731")) {
        {}
      } else {
        stryCov_9fa48("1731");
        if (stryMutAct_9fa48("1734") ? facts[i] !== 0 : stryMutAct_9fa48("1733") ? false : stryMutAct_9fa48("1732") ? true : (stryCov_9fa48("1732", "1733", "1734"), facts[i] === 0)) {
          if (stryMutAct_9fa48("1735")) {
            {}
          } else {
            stryCov_9fa48("1735");
            facts[i] = i;
            primes.push(i);
          }
        }
        for (let j = 0; stryMutAct_9fa48("1738") ? j >= primes.length : stryMutAct_9fa48("1737") ? j <= primes.length : stryMutAct_9fa48("1736") ? false : (stryCov_9fa48("1736", "1737", "1738"), j < primes.length); stryMutAct_9fa48("1739") ? j-- : (stryCov_9fa48("1739"), j++)) {
          if (stryMutAct_9fa48("1740")) {
            {}
          } else {
            stryCov_9fa48("1740");
            let x = primes[j];
            if (stryMutAct_9fa48("1744") ? i * x <= MAX : stryMutAct_9fa48("1743") ? i * x >= MAX : stryMutAct_9fa48("1742") ? false : stryMutAct_9fa48("1741") ? true : (stryCov_9fa48("1741", "1742", "1743", "1744"), (stryMutAct_9fa48("1745") ? i / x : (stryCov_9fa48("1745"), i * x)) > MAX)) break;
            facts[stryMutAct_9fa48("1746") ? i / x : (stryCov_9fa48("1746"), i * x)] = x;
            if (stryMutAct_9fa48("1749") ? x !== facts[i] : stryMutAct_9fa48("1748") ? false : stryMutAct_9fa48("1747") ? true : (stryCov_9fa48("1747", "1748", "1749"), x === facts[i])) break;
          }
        }
      }
    }
  }
}
let init = stryMutAct_9fa48("1750") ? true : (stryCov_9fa48("1750"), false);
export function solve() {
  if (stryMutAct_9fa48("1751")) {
    {}
  } else {
    stryCov_9fa48("1751");
    if (stryMutAct_9fa48("1754") ? false : stryMutAct_9fa48("1753") ? true : stryMutAct_9fa48("1752") ? init : (stryCov_9fa48("1752", "1753", "1754"), !init)) {
      if (stryMutAct_9fa48("1755")) {
        {}
      } else {
        stryCov_9fa48("1755");
        sieve();
        init = stryMutAct_9fa48("1756") ? false : (stryCov_9fa48("1756"), true);
      }
    }
    let n = readInt();
    let a = new Int32Array(n);
    for (let i = 0; stryMutAct_9fa48("1759") ? i >= n : stryMutAct_9fa48("1758") ? i <= n : stryMutAct_9fa48("1757") ? false : (stryCov_9fa48("1757", "1758", "1759"), i < n); stryMutAct_9fa48("1760") ? i-- : (stryCov_9fa48("1760"), i++)) {
      if (stryMutAct_9fa48("1761")) {
        {}
      } else {
        stryCov_9fa48("1761");
        a[i] = readInt();
      }
    }
    let p = 0;
    for (let i = 0; stryMutAct_9fa48("1764") ? i >= n : stryMutAct_9fa48("1763") ? i <= n : stryMutAct_9fa48("1762") ? false : (stryCov_9fa48("1762", "1763", "1764"), i < n); stryMutAct_9fa48("1765") ? i-- : (stryCov_9fa48("1765"), i++)) {
      if (stryMutAct_9fa48("1766")) {
        {}
      } else {
        stryCov_9fa48("1766");
        let x = a[i];
        if (stryMutAct_9fa48("1769") ? facts[x] !== x : stryMutAct_9fa48("1768") ? false : stryMutAct_9fa48("1767") ? true : (stryCov_9fa48("1767", "1768", "1769"), facts[x] === x)) {
          if (stryMutAct_9fa48("1770")) {
            {}
          } else {
            stryCov_9fa48("1770");
            if (stryMutAct_9fa48("1772") ? false : stryMutAct_9fa48("1771") ? true : (stryCov_9fa48("1771", "1772"), p)) {
              if (stryMutAct_9fa48("1773")) {
                {}
              } else {
                stryCov_9fa48("1773");
                writeInt(stryMutAct_9fa48("1774") ? +1 : (stryCov_9fa48("1774"), -1), stryMutAct_9fa48("1775") ? false : (stryCov_9fa48("1775"), true));
                return;
              }
            }
            p = x;
          }
        }
      }
    }
    if (stryMutAct_9fa48("1778") ? p !== 0 : stryMutAct_9fa48("1777") ? false : stryMutAct_9fa48("1776") ? true : (stryCov_9fa48("1776", "1777", "1778"), p === 0)) {
      if (stryMutAct_9fa48("1779")) {
        {}
      } else {
        stryCov_9fa48("1779");
        writeInt(2, stryMutAct_9fa48("1780") ? false : (stryCov_9fa48("1780"), true));
        return;
      }
    }
    for (let i = 0; stryMutAct_9fa48("1783") ? i >= n : stryMutAct_9fa48("1782") ? i <= n : stryMutAct_9fa48("1781") ? false : (stryCov_9fa48("1781", "1782", "1783"), i < n); stryMutAct_9fa48("1784") ? i-- : (stryCov_9fa48("1784"), i++)) {
      if (stryMutAct_9fa48("1785")) {
        {}
      } else {
        stryCov_9fa48("1785");
        let x = a[i];
        if (stryMutAct_9fa48("1788") ? x !== p : stryMutAct_9fa48("1787") ? false : stryMutAct_9fa48("1786") ? true : (stryCov_9fa48("1786", "1787", "1788"), x === p)) continue;
        if (stryMutAct_9fa48("1791") ? x % 2 !== 0 : stryMutAct_9fa48("1790") ? false : stryMutAct_9fa48("1789") ? true : (stryCov_9fa48("1789", "1790", "1791"), (stryMutAct_9fa48("1792") ? x * 2 : (stryCov_9fa48("1792"), x % 2)) === 0)) {
          if (stryMutAct_9fa48("1793")) {
            {}
          } else {
            stryCov_9fa48("1793");
            if (stryMutAct_9fa48("1797") ? x >= p * 2 : stryMutAct_9fa48("1796") ? x <= p * 2 : stryMutAct_9fa48("1795") ? false : stryMutAct_9fa48("1794") ? true : (stryCov_9fa48("1794", "1795", "1796", "1797"), x < (stryMutAct_9fa48("1798") ? p / 2 : (stryCov_9fa48("1798"), p * 2)))) {
              if (stryMutAct_9fa48("1799")) {
                {}
              } else {
                stryCov_9fa48("1799");
                writeInt(stryMutAct_9fa48("1800") ? +1 : (stryCov_9fa48("1800"), -1), stryMutAct_9fa48("1801") ? false : (stryCov_9fa48("1801"), true));
                return;
              }
            }
          }
        } else if (stryMutAct_9fa48("1805") ? x - facts[x] >= p * 2 : stryMutAct_9fa48("1804") ? x - facts[x] <= p * 2 : stryMutAct_9fa48("1803") ? false : stryMutAct_9fa48("1802") ? true : (stryCov_9fa48("1802", "1803", "1804", "1805"), (stryMutAct_9fa48("1806") ? x + facts[x] : (stryCov_9fa48("1806"), x - facts[x])) < (stryMutAct_9fa48("1807") ? p / 2 : (stryCov_9fa48("1807"), p * 2)))) {
          if (stryMutAct_9fa48("1808")) {
            {}
          } else {
            stryCov_9fa48("1808");
            writeInt(stryMutAct_9fa48("1809") ? +1 : (stryCov_9fa48("1809"), -1), stryMutAct_9fa48("1810") ? false : (stryCov_9fa48("1810"), true));
            return;
          }
        }
      }
    }
    writeInt(p, stryMutAct_9fa48("1811") ? false : (stryCov_9fa48("1811"), true));
  }
}

// function testing_test() {
//     const inputs = [
//         { n: 3, array: [8, 9, 10], expected: 2 },
//         { n: 4, array: [2, 3, 4, 5], expected: -1 },
//         { n: 2, array: [147, 154], expected: 7 },
//         { n: 5, array: [3, 6, 8, 25, 100000], expected: 3 }
//     ];

//     for (let test of inputs) {
//         let inputIndex = 0;
//         let output = [];

//         global.readInt = () => {
//             if (inputIndex === 0) {
//                 inputIndex++;
//                 return test.n;
//             }
//             return test.array[inputIndex++ - 1];
//         };

//         global.writeInt = (value, newline) => {
//             output.push(value);
//         };

//         solve();

//         const result = output[0];
//         console.log(`Input: ${test.array}, Expected: ${test.expected}, Got: ${result}`);
//         console.assert(result === test.expected, `Test failed for input ${test.array}`);
//     }
// }

// testing_test();

//ok. output can many. solution verified.