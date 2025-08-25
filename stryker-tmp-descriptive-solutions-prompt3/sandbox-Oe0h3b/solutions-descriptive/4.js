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
export function solve(array) {
  if (stryMutAct_9fa48("1769")) {
    {}
  } else {
    stryCov_9fa48("1769");
    const arrayLength = array.length;
    const dpTable = stryMutAct_9fa48("1770") ? Array().fill(0).map(() => Array(arrayLength).fill(0)) : (stryCov_9fa48("1770"), Array(arrayLength).fill(0).map(stryMutAct_9fa48("1771") ? () => undefined : (stryCov_9fa48("1771"), () => stryMutAct_9fa48("1772") ? Array().fill(0) : (stryCov_9fa48("1772"), Array(arrayLength).fill(0)))));
    let currentScore;
    for (let subarrayLength = 3; stryMutAct_9fa48("1775") ? subarrayLength > arrayLength : stryMutAct_9fa48("1774") ? subarrayLength < arrayLength : stryMutAct_9fa48("1773") ? false : (stryCov_9fa48("1773", "1774", "1775"), subarrayLength <= arrayLength); stryMutAct_9fa48("1776") ? subarrayLength-- : (stryCov_9fa48("1776"), subarrayLength++)) {
      if (stryMutAct_9fa48("1777")) {
        {}
      } else {
        stryCov_9fa48("1777");
        for (let start = 0; stryMutAct_9fa48("1780") ? start + subarrayLength - 1 >= arrayLength : stryMutAct_9fa48("1779") ? start + subarrayLength - 1 <= arrayLength : stryMutAct_9fa48("1778") ? false : (stryCov_9fa48("1778", "1779", "1780"), (stryMutAct_9fa48("1781") ? start + subarrayLength + 1 : (stryCov_9fa48("1781"), (stryMutAct_9fa48("1782") ? start - subarrayLength : (stryCov_9fa48("1782"), start + subarrayLength)) - 1)) < arrayLength); stryMutAct_9fa48("1783") ? start-- : (stryCov_9fa48("1783"), start++)) {
          if (stryMutAct_9fa48("1784")) {
            {}
          } else {
            stryCov_9fa48("1784");
            const end = stryMutAct_9fa48("1785") ? start + subarrayLength + 1 : (stryCov_9fa48("1785"), (stryMutAct_9fa48("1786") ? start - subarrayLength : (stryCov_9fa48("1786"), start + subarrayLength)) - 1);
            for (let splitPoint = stryMutAct_9fa48("1787") ? start - 1 : (stryCov_9fa48("1787"), start + 1); stryMutAct_9fa48("1790") ? splitPoint >= end : stryMutAct_9fa48("1789") ? splitPoint <= end : stryMutAct_9fa48("1788") ? false : (stryCov_9fa48("1788", "1789", "1790"), splitPoint < end); stryMutAct_9fa48("1791") ? splitPoint-- : (stryCov_9fa48("1791"), splitPoint++)) {
              if (stryMutAct_9fa48("1792")) {
                {}
              } else {
                stryCov_9fa48("1792");
                currentScore = stryMutAct_9fa48("1793") ? array[start] * array[end] * array[splitPoint] + (start + 1 <= splitPoint - 1 ? dpTable[start + 1][splitPoint - 1] : 0) - (splitPoint + 1 <= end - 1 ? dpTable[splitPoint + 1][end - 1] : 0) : (stryCov_9fa48("1793"), (stryMutAct_9fa48("1794") ? array[start] * array[end] * array[splitPoint] - (start + 1 <= splitPoint - 1 ? dpTable[start + 1][splitPoint - 1] : 0) : (stryCov_9fa48("1794"), (stryMutAct_9fa48("1795") ? array[start] * array[end] / array[splitPoint] : (stryCov_9fa48("1795"), (stryMutAct_9fa48("1796") ? array[start] / array[end] : (stryCov_9fa48("1796"), array[start] * array[end])) * array[splitPoint])) + ((stryMutAct_9fa48("1800") ? start + 1 > splitPoint - 1 : stryMutAct_9fa48("1799") ? start + 1 < splitPoint - 1 : stryMutAct_9fa48("1798") ? false : stryMutAct_9fa48("1797") ? true : (stryCov_9fa48("1797", "1798", "1799", "1800"), (stryMutAct_9fa48("1801") ? start - 1 : (stryCov_9fa48("1801"), start + 1)) <= (stryMutAct_9fa48("1802") ? splitPoint + 1 : (stryCov_9fa48("1802"), splitPoint - 1)))) ? dpTable[stryMutAct_9fa48("1803") ? start - 1 : (stryCov_9fa48("1803"), start + 1)][stryMutAct_9fa48("1804") ? splitPoint + 1 : (stryCov_9fa48("1804"), splitPoint - 1)] : 0))) + ((stryMutAct_9fa48("1808") ? splitPoint + 1 > end - 1 : stryMutAct_9fa48("1807") ? splitPoint + 1 < end - 1 : stryMutAct_9fa48("1806") ? false : stryMutAct_9fa48("1805") ? true : (stryCov_9fa48("1805", "1806", "1807", "1808"), (stryMutAct_9fa48("1809") ? splitPoint - 1 : (stryCov_9fa48("1809"), splitPoint + 1)) <= (stryMutAct_9fa48("1810") ? end + 1 : (stryCov_9fa48("1810"), end - 1)))) ? dpTable[stryMutAct_9fa48("1811") ? splitPoint - 1 : (stryCov_9fa48("1811"), splitPoint + 1)][stryMutAct_9fa48("1812") ? end + 1 : (stryCov_9fa48("1812"), end - 1)] : 0));
                dpTable[start][end] = stryMutAct_9fa48("1813") ? Math.min(dpTable[start][end], currentScore) : (stryCov_9fa48("1813"), Math.max(dpTable[start][end], currentScore));
                currentScore = stryMutAct_9fa48("1814") ? dpTable[start][splitPoint] - (splitPoint + 1 <= end ? dpTable[splitPoint + 1][end] : 0) : (stryCov_9fa48("1814"), dpTable[start][splitPoint] + ((stryMutAct_9fa48("1818") ? splitPoint + 1 > end : stryMutAct_9fa48("1817") ? splitPoint + 1 < end : stryMutAct_9fa48("1816") ? false : stryMutAct_9fa48("1815") ? true : (stryCov_9fa48("1815", "1816", "1817", "1818"), (stryMutAct_9fa48("1819") ? splitPoint - 1 : (stryCov_9fa48("1819"), splitPoint + 1)) <= end)) ? dpTable[stryMutAct_9fa48("1820") ? splitPoint - 1 : (stryCov_9fa48("1820"), splitPoint + 1)][end] : 0));
                dpTable[start][end] = stryMutAct_9fa48("1821") ? Math.min(dpTable[start][end], currentScore) : (stryCov_9fa48("1821"), Math.max(dpTable[start][end], currentScore));
                currentScore = stryMutAct_9fa48("1822") ? (start <= splitPoint - 1 ? dpTable[start][splitPoint - 1] : 0) - dpTable[splitPoint][end] : (stryCov_9fa48("1822"), ((stryMutAct_9fa48("1826") ? start > splitPoint - 1 : stryMutAct_9fa48("1825") ? start < splitPoint - 1 : stryMutAct_9fa48("1824") ? false : stryMutAct_9fa48("1823") ? true : (stryCov_9fa48("1823", "1824", "1825", "1826"), start <= (stryMutAct_9fa48("1827") ? splitPoint + 1 : (stryCov_9fa48("1827"), splitPoint - 1)))) ? dpTable[start][stryMutAct_9fa48("1828") ? splitPoint + 1 : (stryCov_9fa48("1828"), splitPoint - 1)] : 0) + dpTable[splitPoint][end]);
                dpTable[start][end] = stryMutAct_9fa48("1829") ? Math.min(dpTable[start][end], currentScore) : (stryCov_9fa48("1829"), Math.max(dpTable[start][end], currentScore));
              }
            }
          }
        }
      }
    }
    return dpTable[0][stryMutAct_9fa48("1830") ? arrayLength + 1 : (stryCov_9fa48("1830"), arrayLength - 1)];
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [2, 1, 2, 1, 1, 1], expected: 5 },
//         { input: [1, 2, 1, 3, 1, 5], expected: 30 },
//         { input: [9, 9, 8, 2, 4, 4, 3, 5, 3], expected: 732 },
//         { input: [9, 9, 3, 2, 4, 4, 8, 5, 3], expected: 696 }
//     ];

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         console.log(`Test Case ${index + 1}:`, 
//             result === expected ? "Passed" : `Failed (Expected: ${expected}, Got: ${result})`);
//     });
// }

// testing_test();