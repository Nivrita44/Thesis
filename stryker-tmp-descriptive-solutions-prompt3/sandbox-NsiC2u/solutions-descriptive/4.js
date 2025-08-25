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
  if (stryMutAct_9fa48("2334")) {
    {}
  } else {
    stryCov_9fa48("2334");
    const arrayLength = array.length;
    const dpTable = stryMutAct_9fa48("2335") ? Array().fill(0).map(() => Array(arrayLength).fill(0)) : (stryCov_9fa48("2335"), Array(arrayLength).fill(0).map(stryMutAct_9fa48("2336") ? () => undefined : (stryCov_9fa48("2336"), () => stryMutAct_9fa48("2337") ? Array().fill(0) : (stryCov_9fa48("2337"), Array(arrayLength).fill(0)))));
    let currentScore;
    for (let subarrayLength = 3; stryMutAct_9fa48("2340") ? subarrayLength > arrayLength : stryMutAct_9fa48("2339") ? subarrayLength < arrayLength : stryMutAct_9fa48("2338") ? false : (stryCov_9fa48("2338", "2339", "2340"), subarrayLength <= arrayLength); stryMutAct_9fa48("2341") ? subarrayLength-- : (stryCov_9fa48("2341"), subarrayLength++)) {
      if (stryMutAct_9fa48("2342")) {
        {}
      } else {
        stryCov_9fa48("2342");
        for (let start = 0; stryMutAct_9fa48("2345") ? start + subarrayLength - 1 >= arrayLength : stryMutAct_9fa48("2344") ? start + subarrayLength - 1 <= arrayLength : stryMutAct_9fa48("2343") ? false : (stryCov_9fa48("2343", "2344", "2345"), (stryMutAct_9fa48("2346") ? start + subarrayLength + 1 : (stryCov_9fa48("2346"), (stryMutAct_9fa48("2347") ? start - subarrayLength : (stryCov_9fa48("2347"), start + subarrayLength)) - 1)) < arrayLength); stryMutAct_9fa48("2348") ? start-- : (stryCov_9fa48("2348"), start++)) {
          if (stryMutAct_9fa48("2349")) {
            {}
          } else {
            stryCov_9fa48("2349");
            const end = stryMutAct_9fa48("2350") ? start + subarrayLength + 1 : (stryCov_9fa48("2350"), (stryMutAct_9fa48("2351") ? start - subarrayLength : (stryCov_9fa48("2351"), start + subarrayLength)) - 1);
            for (let splitPoint = stryMutAct_9fa48("2352") ? start - 1 : (stryCov_9fa48("2352"), start + 1); stryMutAct_9fa48("2355") ? splitPoint >= end : stryMutAct_9fa48("2354") ? splitPoint <= end : stryMutAct_9fa48("2353") ? false : (stryCov_9fa48("2353", "2354", "2355"), splitPoint < end); stryMutAct_9fa48("2356") ? splitPoint-- : (stryCov_9fa48("2356"), splitPoint++)) {
              if (stryMutAct_9fa48("2357")) {
                {}
              } else {
                stryCov_9fa48("2357");
                currentScore = stryMutAct_9fa48("2358") ? array[start] * array[end] * array[splitPoint] + (start + 1 <= splitPoint - 1 ? dpTable[start + 1][splitPoint - 1] : 0) - (splitPoint + 1 <= end - 1 ? dpTable[splitPoint + 1][end - 1] : 0) : (stryCov_9fa48("2358"), (stryMutAct_9fa48("2359") ? array[start] * array[end] * array[splitPoint] - (start + 1 <= splitPoint - 1 ? dpTable[start + 1][splitPoint - 1] : 0) : (stryCov_9fa48("2359"), (stryMutAct_9fa48("2360") ? array[start] * array[end] / array[splitPoint] : (stryCov_9fa48("2360"), (stryMutAct_9fa48("2361") ? array[start] / array[end] : (stryCov_9fa48("2361"), array[start] * array[end])) * array[splitPoint])) + ((stryMutAct_9fa48("2365") ? start + 1 > splitPoint - 1 : stryMutAct_9fa48("2364") ? start + 1 < splitPoint - 1 : stryMutAct_9fa48("2363") ? false : stryMutAct_9fa48("2362") ? true : (stryCov_9fa48("2362", "2363", "2364", "2365"), (stryMutAct_9fa48("2366") ? start - 1 : (stryCov_9fa48("2366"), start + 1)) <= (stryMutAct_9fa48("2367") ? splitPoint + 1 : (stryCov_9fa48("2367"), splitPoint - 1)))) ? dpTable[stryMutAct_9fa48("2368") ? start - 1 : (stryCov_9fa48("2368"), start + 1)][stryMutAct_9fa48("2369") ? splitPoint + 1 : (stryCov_9fa48("2369"), splitPoint - 1)] : 0))) + ((stryMutAct_9fa48("2373") ? splitPoint + 1 > end - 1 : stryMutAct_9fa48("2372") ? splitPoint + 1 < end - 1 : stryMutAct_9fa48("2371") ? false : stryMutAct_9fa48("2370") ? true : (stryCov_9fa48("2370", "2371", "2372", "2373"), (stryMutAct_9fa48("2374") ? splitPoint - 1 : (stryCov_9fa48("2374"), splitPoint + 1)) <= (stryMutAct_9fa48("2375") ? end + 1 : (stryCov_9fa48("2375"), end - 1)))) ? dpTable[stryMutAct_9fa48("2376") ? splitPoint - 1 : (stryCov_9fa48("2376"), splitPoint + 1)][stryMutAct_9fa48("2377") ? end + 1 : (stryCov_9fa48("2377"), end - 1)] : 0));
                dpTable[start][end] = stryMutAct_9fa48("2378") ? Math.min(dpTable[start][end], currentScore) : (stryCov_9fa48("2378"), Math.max(dpTable[start][end], currentScore));
                currentScore = stryMutAct_9fa48("2379") ? dpTable[start][splitPoint] - (splitPoint + 1 <= end ? dpTable[splitPoint + 1][end] : 0) : (stryCov_9fa48("2379"), dpTable[start][splitPoint] + ((stryMutAct_9fa48("2383") ? splitPoint + 1 > end : stryMutAct_9fa48("2382") ? splitPoint + 1 < end : stryMutAct_9fa48("2381") ? false : stryMutAct_9fa48("2380") ? true : (stryCov_9fa48("2380", "2381", "2382", "2383"), (stryMutAct_9fa48("2384") ? splitPoint - 1 : (stryCov_9fa48("2384"), splitPoint + 1)) <= end)) ? dpTable[stryMutAct_9fa48("2385") ? splitPoint - 1 : (stryCov_9fa48("2385"), splitPoint + 1)][end] : 0));
                dpTable[start][end] = stryMutAct_9fa48("2386") ? Math.min(dpTable[start][end], currentScore) : (stryCov_9fa48("2386"), Math.max(dpTable[start][end], currentScore));
                currentScore = stryMutAct_9fa48("2387") ? (start <= splitPoint - 1 ? dpTable[start][splitPoint - 1] : 0) - dpTable[splitPoint][end] : (stryCov_9fa48("2387"), ((stryMutAct_9fa48("2391") ? start > splitPoint - 1 : stryMutAct_9fa48("2390") ? start < splitPoint - 1 : stryMutAct_9fa48("2389") ? false : stryMutAct_9fa48("2388") ? true : (stryCov_9fa48("2388", "2389", "2390", "2391"), start <= (stryMutAct_9fa48("2392") ? splitPoint + 1 : (stryCov_9fa48("2392"), splitPoint - 1)))) ? dpTable[start][stryMutAct_9fa48("2393") ? splitPoint + 1 : (stryCov_9fa48("2393"), splitPoint - 1)] : 0) + dpTable[splitPoint][end]);
                dpTable[start][end] = stryMutAct_9fa48("2394") ? Math.min(dpTable[start][end], currentScore) : (stryCov_9fa48("2394"), Math.max(dpTable[start][end], currentScore));
              }
            }
          }
        }
      }
    }
    return dpTable[0][stryMutAct_9fa48("2395") ? arrayLength + 1 : (stryCov_9fa48("2395"), arrayLength - 1)];
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