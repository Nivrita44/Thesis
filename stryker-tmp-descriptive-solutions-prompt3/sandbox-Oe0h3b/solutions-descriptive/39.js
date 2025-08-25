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
export function solve(arrayLength, array) {
  if (stryMutAct_9fa48("1735")) {
    {}
  } else {
    stryCov_9fa48("1735");
    const seen = new Set();
    const firstZeroIndex = array.includes(0) ? array.indexOf(0) : stryMutAct_9fa48("1736") ? +1 : (stryCov_9fa48("1736"), -1);
    let mex = 0;
    for (let i = stryMutAct_9fa48("1737") ? arrayLength + 1 : (stryCov_9fa48("1737"), arrayLength - 1); stryMutAct_9fa48("1740") ? i < 0 : stryMutAct_9fa48("1739") ? i > 0 : stryMutAct_9fa48("1738") ? false : (stryCov_9fa48("1738", "1739", "1740"), i >= 0); stryMutAct_9fa48("1741") ? i++ : (stryCov_9fa48("1741"), i--)) {
      if (stryMutAct_9fa48("1742")) {
        {}
      } else {
        stryCov_9fa48("1742");
        if (stryMutAct_9fa48("1746") ? array[i] >= mex : stryMutAct_9fa48("1745") ? array[i] <= mex : stryMutAct_9fa48("1744") ? false : stryMutAct_9fa48("1743") ? true : (stryCov_9fa48("1743", "1744", "1745", "1746"), array[i] < mex)) {
          if (stryMutAct_9fa48("1747")) {
            {}
          } else {
            stryCov_9fa48("1747");
            mex = 0;
            break;
          }
        }
        if (stryMutAct_9fa48("1750") ? array[i] !== 0 && i === firstZeroIndex : stryMutAct_9fa48("1749") ? false : stryMutAct_9fa48("1748") ? true : (stryCov_9fa48("1748", "1749", "1750"), (stryMutAct_9fa48("1752") ? array[i] === 0 : stryMutAct_9fa48("1751") ? false : (stryCov_9fa48("1751", "1752"), array[i] !== 0)) || (stryMutAct_9fa48("1754") ? i !== firstZeroIndex : stryMutAct_9fa48("1753") ? false : (stryCov_9fa48("1753", "1754"), i === firstZeroIndex)))) {
          if (stryMutAct_9fa48("1755")) {
            {}
          } else {
            stryCov_9fa48("1755");
            seen.add(array[i]);
            while (stryMutAct_9fa48("1756") ? false : (stryCov_9fa48("1756"), seen.has(mex))) {
              if (stryMutAct_9fa48("1757")) {
                {}
              } else {
                stryCov_9fa48("1757");
                stryMutAct_9fa48("1758") ? mex-- : (stryCov_9fa48("1758"), mex++);
              }
            }
          }
        }
      }
    }
    const countZeros = stryMutAct_9fa48("1759") ? array.length : (stryCov_9fa48("1759"), array.filter(stryMutAct_9fa48("1760") ? () => undefined : (stryCov_9fa48("1760"), value => stryMutAct_9fa48("1763") ? value !== 0 : stryMutAct_9fa48("1762") ? false : stryMutAct_9fa48("1761") ? true : (stryCov_9fa48("1761", "1762", "1763"), value === 0))).length);
    return stryMutAct_9fa48("1764") ? arrayLength - countZeros - (mex !== 0 ? 1 : 0) : (stryCov_9fa48("1764"), (stryMutAct_9fa48("1765") ? arrayLength + countZeros : (stryCov_9fa48("1765"), arrayLength - countZeros)) + ((stryMutAct_9fa48("1768") ? mex === 0 : stryMutAct_9fa48("1767") ? false : stryMutAct_9fa48("1766") ? true : (stryCov_9fa48("1766", "1767", "1768"), mex !== 0)) ? 1 : 0));
  }
}

//function testing_test() {
// 
//     const testCases = [
//         { n: 5, a: [4, 3, 2, 1, 0], expected: 5 },
//         { n: 6, a: [4, 3, 3, 2, 1, 0], expected: 5 },
//         { n: 4, a: [2, 0, 1, 2], expected: 3 },
//         { n: 1, a: [777], expected: 1 },
//         { n: 4, a: [1000000000, 1, 7, 9], expected: 4 },
//         { n: 2, a: [0, 1], expected: 2 },
//         { n: 2, a: [1, 2], expected: 2 },
//         { n: 4, a: [0, 1, 0, 1], expected: 3 },
//     ];

//     testCases.forEach(({ n, a, expected }, index) => {
//         const result = solve(n, a);
//         console.log(`Test case ${index + 1}:`, result === expected ? "Passed" : `Failed (Expected ${expected}, got ${result})`);
//     });
// }

// testing_test();