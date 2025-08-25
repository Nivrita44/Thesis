//solve -> solve
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
export function solve(a, b) {
  if (stryMutAct_9fa48("668")) {
    {}
  } else {
    stryCov_9fa48("668");
    return b ? solve(b, stryMutAct_9fa48("669") ? a * b : (stryCov_9fa48("669"), a % b)) : a;
  }
}
function calculateSumWithGCD(n, a, b) {
  if (stryMutAct_9fa48("670")) {
    {}
  } else {
    stryCov_9fa48("670");
    let rowGCD = new Uint32Array(stryMutAct_9fa48("671") ? n - 5 : (stryCov_9fa48("671"), n + 5));
    let colGCD = new Uint32Array(stryMutAct_9fa48("672") ? n - 5 : (stryCov_9fa48("672"), n + 5));
    let lastRowCoprimeIndex = 0,
      lastColCoprimeIndex = 0;
    for (let i = 1; stryMutAct_9fa48("675") ? i > n : stryMutAct_9fa48("674") ? i < n : stryMutAct_9fa48("673") ? false : (stryCov_9fa48("673", "674", "675"), i <= n); stryMutAct_9fa48("676") ? i-- : (stryCov_9fa48("676"), i++)) {
      if (stryMutAct_9fa48("677")) {
        {}
      } else {
        stryCov_9fa48("677");
        rowGCD[i] = solve(i, a);
        if (stryMutAct_9fa48("680") ? rowGCD[i] !== 1 : stryMutAct_9fa48("679") ? false : stryMutAct_9fa48("678") ? true : (stryCov_9fa48("678", "679", "680"), rowGCD[i] === 1)) lastRowCoprimeIndex = i;
      }
    }
    for (let j = 1; stryMutAct_9fa48("683") ? j > n : stryMutAct_9fa48("682") ? j < n : stryMutAct_9fa48("681") ? false : (stryCov_9fa48("681", "682", "683"), j <= n); stryMutAct_9fa48("684") ? j-- : (stryCov_9fa48("684"), j++)) {
      if (stryMutAct_9fa48("685")) {
        {}
      } else {
        stryCov_9fa48("685");
        colGCD[j] = solve(j, b);
        if (stryMutAct_9fa48("688") ? colGCD[j] !== 1 : stryMutAct_9fa48("687") ? false : stryMutAct_9fa48("686") ? true : (stryCov_9fa48("686", "687", "688"), colGCD[j] === 1)) lastColCoprimeIndex = j;
      }
    }
    let totalSum = 0;
    for (let i = 1; stryMutAct_9fa48("691") ? i > lastRowCoprimeIndex : stryMutAct_9fa48("690") ? i < lastRowCoprimeIndex : stryMutAct_9fa48("689") ? false : (stryCov_9fa48("689", "690", "691"), i <= lastRowCoprimeIndex); stryMutAct_9fa48("692") ? i-- : (stryCov_9fa48("692"), i++)) stryMutAct_9fa48("693") ? totalSum -= rowGCD[i] : (stryCov_9fa48("693"), totalSum += rowGCD[i]);
    for (let j = 1; stryMutAct_9fa48("696") ? j > lastColCoprimeIndex : stryMutAct_9fa48("695") ? j < lastColCoprimeIndex : stryMutAct_9fa48("694") ? false : (stryCov_9fa48("694", "695", "696"), j <= lastColCoprimeIndex); stryMutAct_9fa48("697") ? j-- : (stryCov_9fa48("697"), j++)) stryMutAct_9fa48("698") ? totalSum -= colGCD[j] : (stryCov_9fa48("698"), totalSum += colGCD[j]);
    stryMutAct_9fa48("699") ? totalSum -= lastRowCoprimeIndex + lastColCoprimeIndex - 2 : (stryCov_9fa48("699"), totalSum += stryMutAct_9fa48("700") ? lastRowCoprimeIndex + lastColCoprimeIndex + 2 : (stryCov_9fa48("700"), (stryMutAct_9fa48("701") ? lastRowCoprimeIndex - lastColCoprimeIndex : (stryCov_9fa48("701"), lastRowCoprimeIndex + lastColCoprimeIndex)) - 2));
    let dp = stryMutAct_9fa48("702") ? Array().fill().map(() => new Uint32Array(n - lastColCoprimeIndex + 1).fill(1e9)) : (stryCov_9fa48("702"), Array(stryMutAct_9fa48("703") ? n - lastRowCoprimeIndex - 1 : (stryCov_9fa48("703"), (stryMutAct_9fa48("704") ? n + lastRowCoprimeIndex : (stryCov_9fa48("704"), n - lastRowCoprimeIndex)) + 1)).fill().map(stryMutAct_9fa48("705") ? () => undefined : (stryCov_9fa48("705"), () => new Uint32Array(stryMutAct_9fa48("706") ? n - lastColCoprimeIndex - 1 : (stryCov_9fa48("706"), (stryMutAct_9fa48("707") ? n + lastColCoprimeIndex : (stryCov_9fa48("707"), n - lastColCoprimeIndex)) + 1)).fill(1e9))));
    dp[0][0] = 0;
    for (let i = lastRowCoprimeIndex; stryMutAct_9fa48("710") ? i > n : stryMutAct_9fa48("709") ? i < n : stryMutAct_9fa48("708") ? false : (stryCov_9fa48("708", "709", "710"), i <= n); stryMutAct_9fa48("711") ? i-- : (stryCov_9fa48("711"), i++)) {
      if (stryMutAct_9fa48("712")) {
        {}
      } else {
        stryCov_9fa48("712");
        for (let j = lastColCoprimeIndex; stryMutAct_9fa48("715") ? j > n : stryMutAct_9fa48("714") ? j < n : stryMutAct_9fa48("713") ? false : (stryCov_9fa48("713", "714", "715"), j <= n); stryMutAct_9fa48("716") ? j-- : (stryCov_9fa48("716"), j++)) {
          if (stryMutAct_9fa48("717")) {
            {}
          } else {
            stryCov_9fa48("717");
            if (stryMutAct_9fa48("721") ? i <= lastRowCoprimeIndex : stryMutAct_9fa48("720") ? i >= lastRowCoprimeIndex : stryMutAct_9fa48("719") ? false : stryMutAct_9fa48("718") ? true : (stryCov_9fa48("718", "719", "720", "721"), i > lastRowCoprimeIndex)) {
              if (stryMutAct_9fa48("722")) {
                {}
              } else {
                stryCov_9fa48("722");
                dp[stryMutAct_9fa48("723") ? i + lastRowCoprimeIndex : (stryCov_9fa48("723"), i - lastRowCoprimeIndex)][stryMutAct_9fa48("724") ? j + lastColCoprimeIndex : (stryCov_9fa48("724"), j - lastColCoprimeIndex)] = stryMutAct_9fa48("725") ? Math.max(dp[i - lastRowCoprimeIndex][j - lastColCoprimeIndex], dp[i - lastRowCoprimeIndex - 1][j - lastColCoprimeIndex] + rowGCD[i] + colGCD[j]) : (stryCov_9fa48("725"), Math.min(dp[stryMutAct_9fa48("726") ? i + lastRowCoprimeIndex : (stryCov_9fa48("726"), i - lastRowCoprimeIndex)][stryMutAct_9fa48("727") ? j + lastColCoprimeIndex : (stryCov_9fa48("727"), j - lastColCoprimeIndex)], stryMutAct_9fa48("728") ? dp[i - lastRowCoprimeIndex - 1][j - lastColCoprimeIndex] + rowGCD[i] - colGCD[j] : (stryCov_9fa48("728"), (stryMutAct_9fa48("729") ? dp[i - lastRowCoprimeIndex - 1][j - lastColCoprimeIndex] - rowGCD[i] : (stryCov_9fa48("729"), dp[stryMutAct_9fa48("730") ? i - lastRowCoprimeIndex + 1 : (stryCov_9fa48("730"), (stryMutAct_9fa48("731") ? i + lastRowCoprimeIndex : (stryCov_9fa48("731"), i - lastRowCoprimeIndex)) - 1)][stryMutAct_9fa48("732") ? j + lastColCoprimeIndex : (stryCov_9fa48("732"), j - lastColCoprimeIndex)] + rowGCD[i])) + colGCD[j])));
              }
            }
            if (stryMutAct_9fa48("736") ? j <= lastColCoprimeIndex : stryMutAct_9fa48("735") ? j >= lastColCoprimeIndex : stryMutAct_9fa48("734") ? false : stryMutAct_9fa48("733") ? true : (stryCov_9fa48("733", "734", "735", "736"), j > lastColCoprimeIndex)) {
              if (stryMutAct_9fa48("737")) {
                {}
              } else {
                stryCov_9fa48("737");
                dp[stryMutAct_9fa48("738") ? i + lastRowCoprimeIndex : (stryCov_9fa48("738"), i - lastRowCoprimeIndex)][stryMutAct_9fa48("739") ? j + lastColCoprimeIndex : (stryCov_9fa48("739"), j - lastColCoprimeIndex)] = stryMutAct_9fa48("740") ? Math.max(dp[i - lastRowCoprimeIndex][j - lastColCoprimeIndex], dp[i - lastRowCoprimeIndex][j - lastColCoprimeIndex - 1] + rowGCD[i] + colGCD[j]) : (stryCov_9fa48("740"), Math.min(dp[stryMutAct_9fa48("741") ? i + lastRowCoprimeIndex : (stryCov_9fa48("741"), i - lastRowCoprimeIndex)][stryMutAct_9fa48("742") ? j + lastColCoprimeIndex : (stryCov_9fa48("742"), j - lastColCoprimeIndex)], stryMutAct_9fa48("743") ? dp[i - lastRowCoprimeIndex][j - lastColCoprimeIndex - 1] + rowGCD[i] - colGCD[j] : (stryCov_9fa48("743"), (stryMutAct_9fa48("744") ? dp[i - lastRowCoprimeIndex][j - lastColCoprimeIndex - 1] - rowGCD[i] : (stryCov_9fa48("744"), dp[stryMutAct_9fa48("745") ? i + lastRowCoprimeIndex : (stryCov_9fa48("745"), i - lastRowCoprimeIndex)][stryMutAct_9fa48("746") ? j - lastColCoprimeIndex + 1 : (stryCov_9fa48("746"), (stryMutAct_9fa48("747") ? j + lastColCoprimeIndex : (stryCov_9fa48("747"), j - lastColCoprimeIndex)) - 1)] + rowGCD[i])) + colGCD[j])));
              }
            }
          }
        }
      }
    }
    return stryMutAct_9fa48("748") ? totalSum - dp[n - lastRowCoprimeIndex][n - lastColCoprimeIndex] : (stryCov_9fa48("748"), totalSum + dp[stryMutAct_9fa48("749") ? n + lastRowCoprimeIndex : (stryCov_9fa48("749"), n - lastRowCoprimeIndex)][stryMutAct_9fa48("750") ? n + lastColCoprimeIndex : (stryCov_9fa48("750"), n - lastColCoprimeIndex)]);
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [4, 2, 4], expected: 21 },
//         { input: [10, 210, 420], expected: 125 }
//     ];

//     testCases.forEach(({ input, expected }, index) => {
//         const result = calculateSumWithGCD(...input);
//         const status = result === expected ? "Passed" : `Failed (Expected ${expected}, Got ${result})`;
//         console.log(`Test Case ${index + 1}: ${status}`);
//     });
// }

// testing_test();