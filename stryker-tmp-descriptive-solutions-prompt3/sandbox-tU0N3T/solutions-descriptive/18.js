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
export function solve(targetRows, targetCols, sourceMatrix, targetMatrix) {
  if (stryMutAct_9fa48("609")) {
    {}
  } else {
    stryCov_9fa48("609");
    const MAX_ITER = stryMutAct_9fa48("610") ? Math.min(targetRows, targetCols) - 1 : (stryCov_9fa48("610"), (stryMutAct_9fa48("611") ? Math.max(targetRows, targetCols) : (stryCov_9fa48("611"), Math.min(targetRows, targetCols))) + 1);
    for (let iteration = 0; stryMutAct_9fa48("614") ? iteration >= MAX_ITER : stryMutAct_9fa48("613") ? iteration <= MAX_ITER : stryMutAct_9fa48("612") ? false : (stryCov_9fa48("612", "613", "614"), iteration < MAX_ITER); stryMutAct_9fa48("615") ? iteration-- : (stryCov_9fa48("615"), iteration++)) {
      if (stryMutAct_9fa48("616")) {
        {}
      } else {
        stryCov_9fa48("616");
        for (let row = 0; stryMutAct_9fa48("619") ? row >= targetRows : stryMutAct_9fa48("618") ? row <= targetRows : stryMutAct_9fa48("617") ? false : (stryCov_9fa48("617", "618", "619"), row < targetRows); stryMutAct_9fa48("620") ? row-- : (stryCov_9fa48("620"), row++)) {
          if (stryMutAct_9fa48("621")) {
            {}
          } else {
            stryCov_9fa48("621");
            let mismatchMask = 0;
            for (let col = 0; stryMutAct_9fa48("624") ? col >= targetCols : stryMutAct_9fa48("623") ? col <= targetCols : stryMutAct_9fa48("622") ? false : (stryCov_9fa48("622", "623", "624"), col < targetCols); stryMutAct_9fa48("625") ? col-- : (stryCov_9fa48("625"), col++)) {
              if (stryMutAct_9fa48("626")) {
                {}
              } else {
                stryCov_9fa48("626");
                stryMutAct_9fa48("627") ? mismatchMask &= (sourceMatrix[row][col] ^ targetMatrix[row][col]) & sourceMatrix[row][col] : (stryCov_9fa48("627"), mismatchMask |= (sourceMatrix[row][col] ^ targetMatrix[row][col]) & sourceMatrix[row][col]);
              }
            }
            const clearMask = (stryMutAct_9fa48("628") ? (1n << 31n) + 1n : (stryCov_9fa48("628"), (1n << 31n) - 1n)) ^ BigInt(mismatchMask);
            for (let col = 0; stryMutAct_9fa48("631") ? col >= targetCols : stryMutAct_9fa48("630") ? col <= targetCols : stryMutAct_9fa48("629") ? false : (stryCov_9fa48("629", "630", "631"), col < targetCols); stryMutAct_9fa48("632") ? col-- : (stryCov_9fa48("632"), col++)) {
              if (stryMutAct_9fa48("633")) {
                {}
              } else {
                stryCov_9fa48("633");
                stryMutAct_9fa48("634") ? sourceMatrix[row][col] |= Number(clearMask) : (stryCov_9fa48("634"), sourceMatrix[row][col] &= Number(clearMask));
              }
            }
          }
        }
        for (let col = 0; stryMutAct_9fa48("637") ? col >= targetCols : stryMutAct_9fa48("636") ? col <= targetCols : stryMutAct_9fa48("635") ? false : (stryCov_9fa48("635", "636", "637"), col < targetCols); stryMutAct_9fa48("638") ? col-- : (stryCov_9fa48("638"), col++)) {
          if (stryMutAct_9fa48("639")) {
            {}
          } else {
            stryCov_9fa48("639");
            let mismatchMask = 0;
            for (let row = 0; stryMutAct_9fa48("642") ? row >= targetRows : stryMutAct_9fa48("641") ? row <= targetRows : stryMutAct_9fa48("640") ? false : (stryCov_9fa48("640", "641", "642"), row < targetRows); stryMutAct_9fa48("643") ? row-- : (stryCov_9fa48("643"), row++)) {
              if (stryMutAct_9fa48("644")) {
                {}
              } else {
                stryCov_9fa48("644");
                stryMutAct_9fa48("645") ? mismatchMask &= (sourceMatrix[row][col] ^ targetMatrix[row][col]) & targetMatrix[row][col] : (stryCov_9fa48("645"), mismatchMask |= (sourceMatrix[row][col] ^ targetMatrix[row][col]) & targetMatrix[row][col]);
              }
            }
            for (let row = 0; stryMutAct_9fa48("648") ? row >= targetRows : stryMutAct_9fa48("647") ? row <= targetRows : stryMutAct_9fa48("646") ? false : (stryCov_9fa48("646", "647", "648"), row < targetRows); stryMutAct_9fa48("649") ? row-- : (stryCov_9fa48("649"), row++)) {
              if (stryMutAct_9fa48("650")) {
                {}
              } else {
                stryCov_9fa48("650");
                stryMutAct_9fa48("651") ? sourceMatrix[row][col] &= mismatchMask : (stryCov_9fa48("651"), sourceMatrix[row][col] |= mismatchMask);
              }
            }
          }
        }
      }
    }
    for (let row = 0; stryMutAct_9fa48("654") ? row >= targetRows : stryMutAct_9fa48("653") ? row <= targetRows : stryMutAct_9fa48("652") ? false : (stryCov_9fa48("652", "653", "654"), row < targetRows); stryMutAct_9fa48("655") ? row-- : (stryCov_9fa48("655"), row++)) {
      if (stryMutAct_9fa48("656")) {
        {}
      } else {
        stryCov_9fa48("656");
        for (let col = 0; stryMutAct_9fa48("659") ? col >= targetCols : stryMutAct_9fa48("658") ? col <= targetCols : stryMutAct_9fa48("657") ? false : (stryCov_9fa48("657", "658", "659"), col < targetCols); stryMutAct_9fa48("660") ? col-- : (stryCov_9fa48("660"), col++)) {
          if (stryMutAct_9fa48("661")) {
            {}
          } else {
            stryCov_9fa48("661");
            if (stryMutAct_9fa48("664") ? sourceMatrix[row][col] === targetMatrix[row][col] : stryMutAct_9fa48("663") ? false : stryMutAct_9fa48("662") ? true : (stryCov_9fa48("662", "663", "664"), sourceMatrix[row][col] !== targetMatrix[row][col])) {
              if (stryMutAct_9fa48("665")) {
                {}
              } else {
                stryCov_9fa48("665");
                return stryMutAct_9fa48("666") ? "" : (stryCov_9fa48("666"), "No\n");
              }
            }
          }
        }
      }
    }
    return stryMutAct_9fa48("667") ? "" : (stryCov_9fa48("667"), "Yes\n");
  }
}

// function testing_test() {
//     const testCases = [
//         {
//             input: { n: 1, m: 1, a: [[12]], b: [[13]] },
//             expected: "Yes\n"
//         },
//         {
//             input: { n: 2, m: 2, a: [[10, 10], [42, 42]], b: [[21, 21], [21, 21]] },
//             expected: "Yes\n"
//         },
//         {
//             input: { n: 2, m: 2, a: [[74, 10], [42, 106]], b: [[21, 85], [85, 21]] },
//             expected: "No\n"
//         },
//         {
//             input: { n: 2, m: 4, a: [[1, 2, 3, 4], [5, 6, 7, 8]], b: [[3, 2, 3, 4], [1, 0, 1, 0]] },
//             expected: "Yes\n"
//         }
//     ];

//     testCases.forEach(({ input, expected }, index) => {
//         const { n, m, a, b } = input;
//         const result = solve(n, m, a, b);
//         const status = result === expected ? "Passed" : `Failed`;
//         console.log(`Test ${index + 1}: ${status}`);
//     });
// }

// testing_test();