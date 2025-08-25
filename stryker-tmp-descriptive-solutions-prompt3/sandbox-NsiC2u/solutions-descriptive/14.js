// function solveLogic(n, k, l, a) {
//     k *= 2;
//     l *= 2;
//     a = a.map(x => x * 2);

//     let t = 0;
//     let x = 0;

//     for (let i = 0; i < n; i++) {
//         if (x < a[i] - t) {
//             let dt = a[i] - t - x;
//             if (i > 0) {
//                 dt = Math.floor(dt / 2);
//             }
//             t += dt;
//             if (i > 0) {
//                 x += dt + k;
//             } else {
//                 x = k;
//             }
//         } else {
//             x = Math.max(x, Math.min(x, a[i] + t) + k);
//         }
//     }

//     return t + Math.max(l - x, 0);
// }

// function testing_testLogic() {
//     const testCases = [
//         { n: 1, k: 3, l: 5, a: [0], expected: 4 },
//         { n: 3, k: 2, l: 5, a: [2, 5, 5], expected: 5 },
//         { n: 1, k: 10, l: 10, a: [10], expected: 20 },
//         { n: 10, k: 1, l: 10, a: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], expected: 0 },
//         { n: 2, k: 1, l: 2, a: [0, 0], expected: 2 },
//         { n: 2, k: 1, l: 2, a: [0, 2], expected: 1 },
//     ];

//     testCases.forEach(({ n, k, l, a, expected }, index) => {
//         const result = solveLogic(n, k, l, a);
//         console.log(`Test Case ${index + 1}:`, result === expected ? "Passed" : `Failed (Expected ${expected}, Got ${result})`);
//     });
// }

// testing_testLogic();
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
export function solve(stopCount, stepSize, totalLength, stopPositions) {
  if (stryMutAct_9fa48("316")) {
    {}
  } else {
    stryCov_9fa48("316");
    stryMutAct_9fa48("317") ? stepSize /= 2 : (stryCov_9fa48("317"), stepSize *= 2);
    stryMutAct_9fa48("318") ? totalLength /= 2 : (stryCov_9fa48("318"), totalLength *= 2);
    stopPositions = stopPositions.map(stryMutAct_9fa48("319") ? () => undefined : (stryCov_9fa48("319"), position => stryMutAct_9fa48("320") ? position / 2 : (stryCov_9fa48("320"), position * 2)));
    let currentTime = 0;
    let currentPosition = 0;
    for (let i = 0; stryMutAct_9fa48("323") ? i >= stopCount : stryMutAct_9fa48("322") ? i <= stopCount : stryMutAct_9fa48("321") ? false : (stryCov_9fa48("321", "322", "323"), i < stopCount); stryMutAct_9fa48("324") ? i-- : (stryCov_9fa48("324"), i++)) {
      if (stryMutAct_9fa48("325")) {
        {}
      } else {
        stryCov_9fa48("325");
        if (stryMutAct_9fa48("329") ? currentPosition >= stopPositions[i] - currentTime : stryMutAct_9fa48("328") ? currentPosition <= stopPositions[i] - currentTime : stryMutAct_9fa48("327") ? false : stryMutAct_9fa48("326") ? true : (stryCov_9fa48("326", "327", "328", "329"), currentPosition < (stryMutAct_9fa48("330") ? stopPositions[i] + currentTime : (stryCov_9fa48("330"), stopPositions[i] - currentTime)))) {
          if (stryMutAct_9fa48("331")) {
            {}
          } else {
            stryCov_9fa48("331");
            let requiredSteps = stryMutAct_9fa48("332") ? stopPositions[i] - currentTime + currentPosition : (stryCov_9fa48("332"), (stryMutAct_9fa48("333") ? stopPositions[i] + currentTime : (stryCov_9fa48("333"), stopPositions[i] - currentTime)) - currentPosition);
            if (stryMutAct_9fa48("337") ? i <= 0 : stryMutAct_9fa48("336") ? i >= 0 : stryMutAct_9fa48("335") ? false : stryMutAct_9fa48("334") ? true : (stryCov_9fa48("334", "335", "336", "337"), i > 0)) {
              if (stryMutAct_9fa48("338")) {
                {}
              } else {
                stryCov_9fa48("338");
                requiredSteps = Math.floor(stryMutAct_9fa48("339") ? requiredSteps * 2 : (stryCov_9fa48("339"), requiredSteps / 2));
              }
            }
            stryMutAct_9fa48("340") ? currentTime -= requiredSteps : (stryCov_9fa48("340"), currentTime += requiredSteps);
            if (stryMutAct_9fa48("344") ? i <= 0 : stryMutAct_9fa48("343") ? i >= 0 : stryMutAct_9fa48("342") ? false : stryMutAct_9fa48("341") ? true : (stryCov_9fa48("341", "342", "343", "344"), i > 0)) {
              if (stryMutAct_9fa48("345")) {
                {}
              } else {
                stryCov_9fa48("345");
                stryMutAct_9fa48("346") ? currentPosition -= requiredSteps + stepSize : (stryCov_9fa48("346"), currentPosition += stryMutAct_9fa48("347") ? requiredSteps - stepSize : (stryCov_9fa48("347"), requiredSteps + stepSize));
              }
            } else {
              if (stryMutAct_9fa48("348")) {
                {}
              } else {
                stryCov_9fa48("348");
                currentPosition = stepSize;
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("349")) {
            {}
          } else {
            stryCov_9fa48("349");
            currentPosition = stryMutAct_9fa48("350") ? Math.min(currentPosition, Math.min(currentPosition, stopPositions[i] + currentTime) + stepSize) : (stryCov_9fa48("350"), Math.max(currentPosition, stryMutAct_9fa48("351") ? Math.min(currentPosition, stopPositions[i] + currentTime) - stepSize : (stryCov_9fa48("351"), (stryMutAct_9fa48("352") ? Math.max(currentPosition, stopPositions[i] + currentTime) : (stryCov_9fa48("352"), Math.min(currentPosition, stryMutAct_9fa48("353") ? stopPositions[i] - currentTime : (stryCov_9fa48("353"), stopPositions[i] + currentTime)))) + stepSize)));
          }
        }
      }
    }
    return stryMutAct_9fa48("354") ? currentTime - Math.max(totalLength - currentPosition, 0) : (stryCov_9fa48("354"), currentTime + (stryMutAct_9fa48("355") ? Math.min(totalLength - currentPosition, 0) : (stryCov_9fa48("355"), Math.max(stryMutAct_9fa48("356") ? totalLength + currentPosition : (stryCov_9fa48("356"), totalLength - currentPosition), 0))));
  }
}

// function testing_test() {
//     const testCases = [
//         { stopCount: 1, stepSize: 3, totalLength: 5, stops: [0], expected: 4 },
//         { stopCount: 3, stepSize: 2, totalLength: 5, stops: [2, 5, 5], expected: 5 },
//         { stopCount: 1, stepSize: 10, totalLength: 10, stops: [10], expected: 20 },
//         { stopCount: 10, stepSize: 1, totalLength: 10, stops: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], expected: 0 },
//         { stopCount: 2, stepSize: 1, totalLength: 2, stops: [0, 0], expected: 2 },
//         { stopCount: 2, stepSize: 1, totalLength: 2, stops: [0, 2], expected: 1 },
//     ];

//     testCases.forEach(({ stopCount, stepSize, totalLength, stops, expected }, index) => {
//         const result = solve(stopCount, stepSize, totalLength, stops);
//         const status = result === expected ? "Passed" : `Failed (Expected ${expected}, Got ${result})`;
//         console.log(`Test Case ${index + 1}: ${status}`);
//     });
// }

// testing_test();