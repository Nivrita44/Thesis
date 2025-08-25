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
export function solve(left, right, bitIndex, xorConstant) {
  if (stryMutAct_9fa48("1061")) {
    {}
  } else {
    stryCov_9fa48("1061");
    const computeXor = (limit, bitIndex, xorConstant) => {
      if (stryMutAct_9fa48("1062")) {
        {}
      } else {
        stryCov_9fa48("1062");
        let xorResult = 0n;
        for (let rem = 0n; stryMutAct_9fa48("1065") ? rem >= limit % 4n : stryMutAct_9fa48("1064") ? rem <= limit % 4n : stryMutAct_9fa48("1063") ? false : (stryCov_9fa48("1063", "1064", "1065"), rem < (stryMutAct_9fa48("1066") ? limit * 4n : (stryCov_9fa48("1066"), limit % 4n))); stryMutAct_9fa48("1067") ? rem-- : (stryCov_9fa48("1067"), rem++)) {
          if (stryMutAct_9fa48("1068")) {
            {}
          } else {
            stryCov_9fa48("1068");
            xorResult ^= stryMutAct_9fa48("1069") ? limit - limit % 4n - rem : (stryCov_9fa48("1069"), (stryMutAct_9fa48("1070") ? limit + limit % 4n : (stryCov_9fa48("1070"), limit - (stryMutAct_9fa48("1071") ? limit * 4n : (stryCov_9fa48("1071"), limit % 4n)))) + rem);
          }
        }
        stryMutAct_9fa48("1072") ? limit += xorConstant + 1n : (stryCov_9fa48("1072"), limit -= stryMutAct_9fa48("1073") ? xorConstant - 1n : (stryCov_9fa48("1073"), xorConstant + 1n));
        if (stryMutAct_9fa48("1077") ? limit < 0n : stryMutAct_9fa48("1076") ? limit > 0n : stryMutAct_9fa48("1075") ? false : stryMutAct_9fa48("1074") ? true : (stryCov_9fa48("1074", "1075", "1076", "1077"), limit >= 0n)) {
          if (stryMutAct_9fa48("1078")) {
            {}
          } else {
            stryCov_9fa48("1078");
            let shiftedCount = stryMutAct_9fa48("1079") ? limit * (1n << bitIndex) : (stryCov_9fa48("1079"), limit / (1n << bitIndex));
            stryMutAct_9fa48("1080") ? shiftedCount -= 1n : (stryCov_9fa48("1080"), shiftedCount += 1n);
            for (let rem = 0n; stryMutAct_9fa48("1083") ? rem >= shiftedCount % 4n : stryMutAct_9fa48("1082") ? rem <= shiftedCount % 4n : stryMutAct_9fa48("1081") ? false : (stryCov_9fa48("1081", "1082", "1083"), rem < (stryMutAct_9fa48("1084") ? shiftedCount * 4n : (stryCov_9fa48("1084"), shiftedCount % 4n))); stryMutAct_9fa48("1085") ? rem-- : (stryCov_9fa48("1085"), rem++)) {
              if (stryMutAct_9fa48("1086")) {
                {}
              } else {
                stryCov_9fa48("1086");
                xorResult ^= stryMutAct_9fa48("1087") ? (shiftedCount - shiftedCount % 4n + rem) / (1n << bitIndex) : (stryCov_9fa48("1087"), (stryMutAct_9fa48("1088") ? shiftedCount - shiftedCount % 4n - rem : (stryCov_9fa48("1088"), (stryMutAct_9fa48("1089") ? shiftedCount + shiftedCount % 4n : (stryCov_9fa48("1089"), shiftedCount - (stryMutAct_9fa48("1090") ? shiftedCount * 4n : (stryCov_9fa48("1090"), shiftedCount % 4n)))) + rem)) * (1n << bitIndex));
              }
            }
            if (stryMutAct_9fa48("1093") ? shiftedCount % 2n !== 1n : stryMutAct_9fa48("1092") ? false : stryMutAct_9fa48("1091") ? true : (stryCov_9fa48("1091", "1092", "1093"), (stryMutAct_9fa48("1094") ? shiftedCount * 2n : (stryCov_9fa48("1094"), shiftedCount % 2n)) === 1n)) {
              if (stryMutAct_9fa48("1095")) {
                {}
              } else {
                stryCov_9fa48("1095");
                xorResult ^= xorConstant;
              }
            }
          }
        }
        return xorResult;
      }
    };
    const finalXor = computeXor(stryMutAct_9fa48("1096") ? right - 1n : (stryCov_9fa48("1096"), right + 1n), bitIndex, xorConstant) ^ computeXor(left, bitIndex, xorConstant);
    return finalXor;
  }
}

// function testing_test() {
//   const testCases = [
//     { input: [1n, 3n, 1n, 0n], expected: 2n },
//     { input: [2n, 28n, 3n, 7n], expected: 2n },
//     { input: [15n, 43n, 1n, 0n], expected: 13n },
//     { input: [57n, 2007n, 1n, 0n], expected: 0n },
//     { input: [1010n, 1993n, 2n, 2n], expected: 4n },
//     { input: [1n, 1000000000n, 30n, 1543n], expected: 1000000519n },
//   ];

//   let passed = true;

//   for (let i = 0; i < testCases.length; i++) {
//     const { input, expected } = testCases[i];
//     const result = solve(...input);
//     if (result === expected) {
//       console.log(`Test case ${i + 1}: ✅ Passed`);
//     } else {
//       console.log(`Test case ${i + 1}: ❌ Failed (Got ${result}, Expected ${expected})`);
//       passed = false;
//     }
//   }

//   if (passed) {
//     console.log("All test cases passed! 🎉");
//   }
// }

// testing_test();