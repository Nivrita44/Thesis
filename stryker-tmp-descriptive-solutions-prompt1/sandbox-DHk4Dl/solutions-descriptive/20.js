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
const MAX_ARRAY_SIZE = 200010;
const UPPER_BOUND = 1000000010;
const LOWER_BOUND = stryMutAct_9fa48("830") ? +UPPER_BOUND : (stryCov_9fa48("830"), -UPPER_BOUND);
let currentArrayLength;
let numberArrayStorage = new Uint32Array(MAX_ARRAY_SIZE);
function evaluateCandidateValue(candidate) {
  if (stryMutAct_9fa48("831")) {
    {}
  } else {
    stryCov_9fa48("831");
    let currentValue = candidate;
    for (let index = stryMutAct_9fa48("832") ? currentArrayLength + 1 : (stryCov_9fa48("832"), currentArrayLength - 1); stryMutAct_9fa48("835") ? index < 0 : stryMutAct_9fa48("834") ? index > 0 : stryMutAct_9fa48("833") ? false : (stryCov_9fa48("833", "834", "835"), index >= 0); stryMutAct_9fa48("836") ? index++ : (stryCov_9fa48("836"), index--)) {
      if (stryMutAct_9fa48("837")) {
        {}
      } else {
        stryCov_9fa48("837");
        currentValue = stryMutAct_9fa48("838") ? 2 * currentValue + numberArrayStorage[index] : (stryCov_9fa48("838"), (stryMutAct_9fa48("839") ? 2 / currentValue : (stryCov_9fa48("839"), 2 * currentValue)) - numberArrayStorage[index]);
        if (stryMutAct_9fa48("843") ? currentValue >= LOWER_BOUND : stryMutAct_9fa48("842") ? currentValue <= LOWER_BOUND : stryMutAct_9fa48("841") ? false : stryMutAct_9fa48("840") ? true : (stryCov_9fa48("840", "841", "842", "843"), currentValue < LOWER_BOUND)) return stryMutAct_9fa48("844") ? +1 : (stryCov_9fa48("844"), -1);
        if (stryMutAct_9fa48("848") ? currentValue <= UPPER_BOUND : stryMutAct_9fa48("847") ? currentValue >= UPPER_BOUND : stryMutAct_9fa48("846") ? false : stryMutAct_9fa48("845") ? true : (stryCov_9fa48("845", "846", "847", "848"), currentValue > UPPER_BOUND)) return 1;
      }
    }
    if (stryMutAct_9fa48("852") ? currentValue >= candidate : stryMutAct_9fa48("851") ? currentValue <= candidate : stryMutAct_9fa48("850") ? false : stryMutAct_9fa48("849") ? true : (stryCov_9fa48("849", "850", "851", "852"), currentValue < candidate)) return stryMutAct_9fa48("853") ? +1 : (stryCov_9fa48("853"), -1);
    if (stryMutAct_9fa48("857") ? currentValue <= candidate : stryMutAct_9fa48("856") ? currentValue >= candidate : stryMutAct_9fa48("855") ? false : stryMutAct_9fa48("854") ? true : (stryCov_9fa48("854", "855", "856", "857"), currentValue > candidate)) return 1;
    return 0;
  }
}
function findBinarySearchSolution() {
  if (stryMutAct_9fa48("858")) {
    {}
  } else {
    stryCov_9fa48("858");
    let lowBound = LOWER_BOUND,
      highBound = UPPER_BOUND;
    while (stryMutAct_9fa48("861") ? highBound - lowBound <= 1 : stryMutAct_9fa48("860") ? highBound - lowBound >= 1 : stryMutAct_9fa48("859") ? false : (stryCov_9fa48("859", "860", "861"), (stryMutAct_9fa48("862") ? highBound + lowBound : (stryCov_9fa48("862"), highBound - lowBound)) > 1)) {
      if (stryMutAct_9fa48("863")) {
        {}
      } else {
        stryCov_9fa48("863");
        let midPoint = (stryMutAct_9fa48("864") ? highBound - lowBound : (stryCov_9fa48("864"), highBound + lowBound)) >> 1;
        let result = evaluateCandidateValue(midPoint);
        if (stryMutAct_9fa48("867") ? result !== 0 : stryMutAct_9fa48("866") ? false : stryMutAct_9fa48("865") ? true : (stryCov_9fa48("865", "866", "867"), result === 0)) return midPoint;else if (stryMutAct_9fa48("871") ? result >= 0 : stryMutAct_9fa48("870") ? result <= 0 : stryMutAct_9fa48("869") ? false : stryMutAct_9fa48("868") ? true : (stryCov_9fa48("868", "869", "870", "871"), result < 0)) lowBound = midPoint;else highBound = midPoint;
      }
    }
    return stryMutAct_9fa48("872") ? LOWER_BOUND + 100 : (stryCov_9fa48("872"), LOWER_BOUND - 100);
  }
}
export function solve(inputArray) {
  if (stryMutAct_9fa48("873")) {
    {}
  } else {
    stryCov_9fa48("873");
    currentArrayLength = inputArray.length;
    numberArrayStorage.set(inputArray);
    let arraySumTotal = 0;
    for (let index = 0; stryMutAct_9fa48("876") ? index >= currentArrayLength : stryMutAct_9fa48("875") ? index <= currentArrayLength : stryMutAct_9fa48("874") ? false : (stryCov_9fa48("874", "875", "876"), index < currentArrayLength); stryMutAct_9fa48("877") ? index-- : (stryCov_9fa48("877"), index++)) {
      if (stryMutAct_9fa48("878")) {
        {}
      } else {
        stryCov_9fa48("878");
        stryMutAct_9fa48("879") ? arraySumTotal -= numberArrayStorage[index] : (stryCov_9fa48("879"), arraySumTotal += numberArrayStorage[index]);
      }
    }
    let solutionCandidate = findBinarySearchSolution();
    if (stryMutAct_9fa48("883") ? solutionCandidate >= LOWER_BOUND : stryMutAct_9fa48("882") ? solutionCandidate <= LOWER_BOUND : stryMutAct_9fa48("881") ? false : stryMutAct_9fa48("880") ? true : (stryCov_9fa48("880", "881", "882", "883"), solutionCandidate < LOWER_BOUND)) return stryMutAct_9fa48("884") ? +1 : (stryCov_9fa48("884"), -1);
    let minimumValueFound = stryMutAct_9fa48("885") ? UPPER_BOUND - 100 : (stryCov_9fa48("885"), UPPER_BOUND + 100);
    let operationsCount = 0;
    let currentSolutionValue = solutionCandidate;
    for (let index = stryMutAct_9fa48("886") ? currentArrayLength + 1 : (stryCov_9fa48("886"), currentArrayLength - 1); stryMutAct_9fa48("889") ? index < 0 : stryMutAct_9fa48("888") ? index > 0 : stryMutAct_9fa48("887") ? false : (stryCov_9fa48("887", "888", "889"), index >= 0); stryMutAct_9fa48("890") ? index++ : (stryCov_9fa48("890"), index--)) {
      if (stryMutAct_9fa48("891")) {
        {}
      } else {
        stryCov_9fa48("891");
        minimumValueFound = stryMutAct_9fa48("892") ? Math.max(minimumValueFound, currentSolutionValue) : (stryCov_9fa48("892"), Math.min(minimumValueFound, currentSolutionValue));
        stryMutAct_9fa48("893") ? operationsCount -= currentSolutionValue : (stryCov_9fa48("893"), operationsCount += currentSolutionValue);
        currentSolutionValue = stryMutAct_9fa48("894") ? 2 * currentSolutionValue + numberArrayStorage[index] : (stryCov_9fa48("894"), (stryMutAct_9fa48("895") ? 2 / currentSolutionValue : (stryCov_9fa48("895"), 2 * currentSolutionValue)) - numberArrayStorage[index]);
      }
    }
    stryMutAct_9fa48("896") ? operationsCount += currentArrayLength * minimumValueFound : (stryCov_9fa48("896"), operationsCount -= stryMutAct_9fa48("897") ? currentArrayLength / minimumValueFound : (stryCov_9fa48("897"), currentArrayLength * minimumValueFound));
    if (stryMutAct_9fa48("901") ? operationsCount <= arraySumTotal : stryMutAct_9fa48("900") ? operationsCount >= arraySumTotal : stryMutAct_9fa48("899") ? false : stryMutAct_9fa48("898") ? true : (stryCov_9fa48("898", "899", "900", "901"), operationsCount > arraySumTotal)) return stryMutAct_9fa48("902") ? +1 : (stryCov_9fa48("902"), -1);
    return operationsCount;
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [1, 1], expected: 0 },
//         { input: [1, 3, 2], expected: -1 },
//         { input: [2, 1, 2, 6], expected: 3 },
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { input, expected } = testCases[i];
//         const result = solve(input);
//         console.log(`Test Case ${i + 1}:`, result === expected ? "Passed" : `Failed (Expected: ${expected}, Got: ${result})`);
//     }
// }

// testing_test();