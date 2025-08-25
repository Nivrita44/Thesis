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
  if (stryMutAct_9fa48("2300")) {
    {}
  } else {
    stryCov_9fa48("2300");
    const seen = new Set();
    const firstZeroIndex = array.includes(0) ? array.indexOf(0) : stryMutAct_9fa48("2301") ? +1 : (stryCov_9fa48("2301"), -1);
    let mex = 0;
    for (let i = stryMutAct_9fa48("2302") ? arrayLength + 1 : (stryCov_9fa48("2302"), arrayLength - 1); stryMutAct_9fa48("2305") ? i < 0 : stryMutAct_9fa48("2304") ? i > 0 : stryMutAct_9fa48("2303") ? false : (stryCov_9fa48("2303", "2304", "2305"), i >= 0); stryMutAct_9fa48("2306") ? i++ : (stryCov_9fa48("2306"), i--)) {
      if (stryMutAct_9fa48("2307")) {
        {}
      } else {
        stryCov_9fa48("2307");
        if (stryMutAct_9fa48("2311") ? array[i] >= mex : stryMutAct_9fa48("2310") ? array[i] <= mex : stryMutAct_9fa48("2309") ? false : stryMutAct_9fa48("2308") ? true : (stryCov_9fa48("2308", "2309", "2310", "2311"), array[i] < mex)) {
          if (stryMutAct_9fa48("2312")) {
            {}
          } else {
            stryCov_9fa48("2312");
            mex = 0;
            break;
          }
        }
        if (stryMutAct_9fa48("2315") ? array[i] !== 0 && i === firstZeroIndex : stryMutAct_9fa48("2314") ? false : stryMutAct_9fa48("2313") ? true : (stryCov_9fa48("2313", "2314", "2315"), (stryMutAct_9fa48("2317") ? array[i] === 0 : stryMutAct_9fa48("2316") ? false : (stryCov_9fa48("2316", "2317"), array[i] !== 0)) || (stryMutAct_9fa48("2319") ? i !== firstZeroIndex : stryMutAct_9fa48("2318") ? false : (stryCov_9fa48("2318", "2319"), i === firstZeroIndex)))) {
          if (stryMutAct_9fa48("2320")) {
            {}
          } else {
            stryCov_9fa48("2320");
            seen.add(array[i]);
            while (stryMutAct_9fa48("2321") ? false : (stryCov_9fa48("2321"), seen.has(mex))) {
              if (stryMutAct_9fa48("2322")) {
                {}
              } else {
                stryCov_9fa48("2322");
                stryMutAct_9fa48("2323") ? mex-- : (stryCov_9fa48("2323"), mex++);
              }
            }
          }
        }
      }
    }
    const countZeros = stryMutAct_9fa48("2324") ? array.length : (stryCov_9fa48("2324"), array.filter(stryMutAct_9fa48("2325") ? () => undefined : (stryCov_9fa48("2325"), value => stryMutAct_9fa48("2328") ? value !== 0 : stryMutAct_9fa48("2327") ? false : stryMutAct_9fa48("2326") ? true : (stryCov_9fa48("2326", "2327", "2328"), value === 0))).length);
    return stryMutAct_9fa48("2329") ? arrayLength - countZeros - (mex !== 0 ? 1 : 0) : (stryCov_9fa48("2329"), (stryMutAct_9fa48("2330") ? arrayLength + countZeros : (stryCov_9fa48("2330"), arrayLength - countZeros)) + ((stryMutAct_9fa48("2333") ? mex === 0 : stryMutAct_9fa48("2332") ? false : stryMutAct_9fa48("2331") ? true : (stryCov_9fa48("2331", "2332", "2333"), mex !== 0)) ? 1 : 0));
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