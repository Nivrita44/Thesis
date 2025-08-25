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
export function solve(numPoints, pointList) {
  if (stryMutAct_9fa48("1395")) {
    {}
  } else {
    stryCov_9fa48("1395");
    const xFrequency = new Map();
    const diagonalSumFrequency = new Map();
    for (let i = 0; stryMutAct_9fa48("1398") ? i >= numPoints : stryMutAct_9fa48("1397") ? i <= numPoints : stryMutAct_9fa48("1396") ? false : (stryCov_9fa48("1396", "1397", "1398"), i < numPoints); stryMutAct_9fa48("1399") ? i-- : (stryCov_9fa48("1399"), i++)) {
      if (stryMutAct_9fa48("1400")) {
        {}
      } else {
        stryCov_9fa48("1400");
        const [x, y] = pointList[i];
        xFrequency.set(x, stryMutAct_9fa48("1401") ? (xFrequency.get(x) || 0) - 1 : (stryCov_9fa48("1401"), (stryMutAct_9fa48("1404") ? xFrequency.get(x) && 0 : stryMutAct_9fa48("1403") ? false : stryMutAct_9fa48("1402") ? true : (stryCov_9fa48("1402", "1403", "1404"), xFrequency.get(x) || 0)) + 1));
        diagonalSumFrequency.set(stryMutAct_9fa48("1405") ? x - y : (stryCov_9fa48("1405"), x + y), stryMutAct_9fa48("1406") ? (diagonalSumFrequency.get(x + y) || 0) - 1 : (stryCov_9fa48("1406"), (stryMutAct_9fa48("1409") ? diagonalSumFrequency.get(x + y) && 0 : stryMutAct_9fa48("1408") ? false : stryMutAct_9fa48("1407") ? true : (stryCov_9fa48("1407", "1408", "1409"), diagonalSumFrequency.get(stryMutAct_9fa48("1410") ? x - y : (stryCov_9fa48("1410"), x + y)) || 0)) + 1));
      }
    }
    let uniqueX, uniqueY;
    for (const [xCoord, count] of xFrequency) {
      if (stryMutAct_9fa48("1411")) {
        {}
      } else {
        stryCov_9fa48("1411");
        if (stryMutAct_9fa48("1414") ? count % 2 !== 1 : stryMutAct_9fa48("1413") ? false : stryMutAct_9fa48("1412") ? true : (stryCov_9fa48("1412", "1413", "1414"), (stryMutAct_9fa48("1415") ? count * 2 : (stryCov_9fa48("1415"), count % 2)) === 1)) {
          if (stryMutAct_9fa48("1416")) {
            {}
          } else {
            stryCov_9fa48("1416");
            uniqueX = xCoord;
            break;
          }
        }
      }
    }
    for (const [diagonalSum, count] of diagonalSumFrequency) {
      if (stryMutAct_9fa48("1417")) {
        {}
      } else {
        stryCov_9fa48("1417");
        if (stryMutAct_9fa48("1420") ? count % 2 !== 1 : stryMutAct_9fa48("1419") ? false : stryMutAct_9fa48("1418") ? true : (stryCov_9fa48("1418", "1419", "1420"), (stryMutAct_9fa48("1421") ? count * 2 : (stryCov_9fa48("1421"), count % 2)) === 1)) {
          if (stryMutAct_9fa48("1422")) {
            {}
          } else {
            stryCov_9fa48("1422");
            uniqueY = stryMutAct_9fa48("1423") ? diagonalSum + uniqueX : (stryCov_9fa48("1423"), diagonalSum - uniqueX);
            break;
          }
        }
      }
    }
    return stryMutAct_9fa48("1424") ? [] : (stryCov_9fa48("1424"), [uniqueX, uniqueY]);
  }
}

// function testing_test() {
//     const testCases = [
//         {
//             input: {
//                 n: 7,
//                 points: [
//                     [7, 26],
//                     [6, 27],
//                     [6, 28],
//                     [7, 27],
//                     [8, 26],
//                     [8, 27],
//                     [7, 28]
//                 ]
//             },
//             expected: [7, 27]
//         },
//         {
//             input: {
//                 n: 11,
//                 points: [
//                     [70, 9],
//                     [69, 8],
//                     [69, 0],
//                     [73, 5],
//                     [70, -1],
//                     [70, 5],
//                     [71, 7],
//                     [70, 4],
//                     [73, 4],
//                     [71, 3],
//                     [72, 3]
//                 ]
//             },
//             expected: [72, 7]
//         }
//     ];

//     for (const { input, expected } of testCases) {
//         const result = solve(input.n, input.points);
//         console.log(`Input: n=${input.n}, points=${JSON.stringify(input.points)}`);
//         console.log(`Expected: ${expected}, Got: ${result}`);
//         console.assert(
//             JSON.stringify(result) === JSON.stringify(expected),
//             `Test failed for input: n=${input.n}, points=${JSON.stringify(input.points)}`
//         );
//     }
// }

// testing_test();