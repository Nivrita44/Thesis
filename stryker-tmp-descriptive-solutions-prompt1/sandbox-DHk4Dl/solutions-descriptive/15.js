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
export function solve(arraySize, currentPosition, queryCount, selectedIndices) {
  if (stryMutAct_9fa48("357")) {
    {}
  } else {
    stryCov_9fa48("357");
    let leftBoundary = stryMutAct_9fa48("358") ? arraySize - 1 : (stryCov_9fa48("358"), arraySize + 1);
    let rightBoundary = 0;
    let leftMid = currentPosition;
    let rightMid = currentPosition;
    let hasMiddleSelected = stryMutAct_9fa48("359") ? true : (stryCov_9fa48("359"), false);
    let middleSkipped = stryMutAct_9fa48("360") ? true : (stryCov_9fa48("360"), false);
    const result = stryMutAct_9fa48("361") ? Array() : (stryCov_9fa48("361"), Array(queryCount));
    for (let i = 0; stryMutAct_9fa48("364") ? i >= queryCount : stryMutAct_9fa48("363") ? i <= queryCount : stryMutAct_9fa48("362") ? false : (stryCov_9fa48("362", "363", "364"), i < queryCount); stryMutAct_9fa48("365") ? i-- : (stryCov_9fa48("365"), i++)) {
      if (stryMutAct_9fa48("366")) {
        {}
      } else {
        stryCov_9fa48("366");
        const selectedIndex = selectedIndices[i];
        if (stryMutAct_9fa48("368") ? false : stryMutAct_9fa48("367") ? true : (stryCov_9fa48("367", "368"), hasMiddleSelected)) {
          if (stryMutAct_9fa48("369")) {
            {}
          } else {
            stryCov_9fa48("369");
            if (stryMutAct_9fa48("373") ? selectedIndex >= leftBoundary : stryMutAct_9fa48("372") ? selectedIndex <= leftBoundary : stryMutAct_9fa48("371") ? false : stryMutAct_9fa48("370") ? true : (stryCov_9fa48("370", "371", "372", "373"), selectedIndex < leftBoundary)) stryMutAct_9fa48("374") ? leftBoundary++ : (stryCov_9fa48("374"), leftBoundary--);
            if (stryMutAct_9fa48("378") ? selectedIndex <= rightBoundary : stryMutAct_9fa48("377") ? selectedIndex >= rightBoundary : stryMutAct_9fa48("376") ? false : stryMutAct_9fa48("375") ? true : (stryCov_9fa48("375", "376", "377", "378"), selectedIndex > rightBoundary)) stryMutAct_9fa48("379") ? rightBoundary-- : (stryCov_9fa48("379"), rightBoundary++);
          }
        }
        if (stryMutAct_9fa48("382") ? false : stryMutAct_9fa48("381") ? true : stryMutAct_9fa48("380") ? middleSkipped : (stryCov_9fa48("380", "381", "382"), !middleSkipped)) {
          if (stryMutAct_9fa48("383")) {
            {}
          } else {
            stryCov_9fa48("383");
            if (stryMutAct_9fa48("387") ? selectedIndex >= leftMid : stryMutAct_9fa48("386") ? selectedIndex <= leftMid : stryMutAct_9fa48("385") ? false : stryMutAct_9fa48("384") ? true : (stryCov_9fa48("384", "385", "386", "387"), selectedIndex < leftMid)) {
              if (stryMutAct_9fa48("388")) {
                {}
              } else {
                stryCov_9fa48("388");
                stryMutAct_9fa48("389") ? leftMid++ : (stryCov_9fa48("389"), leftMid--);
              }
            } else if (stryMutAct_9fa48("393") ? selectedIndex <= rightMid : stryMutAct_9fa48("392") ? selectedIndex >= rightMid : stryMutAct_9fa48("391") ? false : stryMutAct_9fa48("390") ? true : (stryCov_9fa48("390", "391", "392", "393"), selectedIndex > rightMid)) {
              if (stryMutAct_9fa48("394")) {
                {}
              } else {
                stryCov_9fa48("394");
                stryMutAct_9fa48("395") ? rightMid-- : (stryCov_9fa48("395"), rightMid++);
              }
            } else {
              if (stryMutAct_9fa48("396")) {
                {}
              } else {
                stryCov_9fa48("396");
                if (stryMutAct_9fa48("399") ? leftMid !== rightMid : stryMutAct_9fa48("398") ? false : stryMutAct_9fa48("397") ? true : (stryCov_9fa48("397", "398", "399"), leftMid === rightMid)) {
                  if (stryMutAct_9fa48("400")) {
                    {}
                  } else {
                    stryCov_9fa48("400");
                    middleSkipped = stryMutAct_9fa48("401") ? false : (stryCov_9fa48("401"), true);
                  }
                }
                hasMiddleSelected = stryMutAct_9fa48("402") ? false : (stryCov_9fa48("402"), true);
                leftBoundary = stryMutAct_9fa48("403") ? Math.max(leftBoundary, arraySize) : (stryCov_9fa48("403"), Math.min(leftBoundary, arraySize));
                rightBoundary = stryMutAct_9fa48("404") ? Math.min(rightBoundary, 1) : (stryCov_9fa48("404"), Math.max(rightBoundary, 1));
              }
            }
          }
        }
        let visibleElements = 0;
        if (stryMutAct_9fa48("406") ? false : stryMutAct_9fa48("405") ? true : (stryCov_9fa48("405", "406"), middleSkipped)) {
          if (stryMutAct_9fa48("407")) {
            {}
          } else {
            stryCov_9fa48("407");
            stryMutAct_9fa48("408") ? visibleElements -= countRange(1, rightBoundary) : (stryCov_9fa48("408"), visibleElements += countRange(1, rightBoundary));
            stryMutAct_9fa48("409") ? visibleElements -= countRange(Math.max(leftBoundary, rightBoundary + 1), arraySize) : (stryCov_9fa48("409"), visibleElements += countRange(stryMutAct_9fa48("410") ? Math.min(leftBoundary, rightBoundary + 1) : (stryCov_9fa48("410"), Math.max(leftBoundary, stryMutAct_9fa48("411") ? rightBoundary - 1 : (stryCov_9fa48("411"), rightBoundary + 1))), arraySize));
          }
        } else {
          if (stryMutAct_9fa48("412")) {
            {}
          } else {
            stryCov_9fa48("412");
            stryMutAct_9fa48("413") ? visibleElements -= countRange(leftMid, rightMid) : (stryCov_9fa48("413"), visibleElements += countRange(leftMid, rightMid));
            stryMutAct_9fa48("414") ? visibleElements -= countRange(1, Math.min(rightBoundary, leftMid - 1)) : (stryCov_9fa48("414"), visibleElements += countRange(1, stryMutAct_9fa48("415") ? Math.max(rightBoundary, leftMid - 1) : (stryCov_9fa48("415"), Math.min(rightBoundary, stryMutAct_9fa48("416") ? leftMid + 1 : (stryCov_9fa48("416"), leftMid - 1)))));
            stryMutAct_9fa48("417") ? visibleElements -= countRange(Math.max(leftBoundary, rightMid + 1), arraySize) : (stryCov_9fa48("417"), visibleElements += countRange(stryMutAct_9fa48("418") ? Math.min(leftBoundary, rightMid + 1) : (stryCov_9fa48("418"), Math.max(leftBoundary, stryMutAct_9fa48("419") ? rightMid - 1 : (stryCov_9fa48("419"), rightMid + 1))), arraySize));
          }
        }
        result[i] = visibleElements;
      }
    }
    return result.join(stryMutAct_9fa48("420") ? "" : (stryCov_9fa48("420"), ' '));
  }
}
function countRange(start, end) {
  if (stryMutAct_9fa48("421")) {
    {}
  } else {
    stryCov_9fa48("421");
    return stryMutAct_9fa48("422") ? end - start - 1 : (stryCov_9fa48("422"), (stryMutAct_9fa48("423") ? end + start : (stryCov_9fa48("423"), end - start)) + 1);
  }
}

// function testing_test() {
//     const testCases = [
//         {
//             input: [6, 5, 3, [1, 2, 3]],
//             expected: "2 3 5"
//         },
//         {
//             input: [2, 1, 4, [2, 1, 1, 2]],
//             expected: "2 2 2 2"
//         },
//         {
//             input: [5, 3, 1, [3]],
//             expected: "2"
//         },
//         {
//             input: [3, 2, 4, [2, 1, 1, 1]],
//             expected: "2 3 3 3"
//         },
//         {
//             input: [18, 15, 4, [13, 15, 1, 16]],
//             expected: "2 4 6 8"
//         }
//     ];

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(...input);
//         const status = result === expected ? "Passed" : "Failed";
//         console.log(`Test Case ${index + 1}: ${status}`);
//         if (status === "Failed") {
//             console.log(`  Expected: ${expected}`);
//             console.log(`  Got     : ${result}`);
//         }
//     });
// }

// testing_test();

//create e a test function in this file to test the above function. don;t use describe, it, chai. normal test function.