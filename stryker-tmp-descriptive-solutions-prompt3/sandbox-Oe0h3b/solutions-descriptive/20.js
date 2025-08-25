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
const LOWER_BOUND = stryMutAct_9fa48("751") ? +UPPER_BOUND : (stryCov_9fa48("751"), -UPPER_BOUND);
let currentArrayLength;
let numberArrayStorage = new Uint32Array(MAX_ARRAY_SIZE);
function evaluateCandidateValue(candidate) {
  if (stryMutAct_9fa48("752")) {
    {}
  } else {
    stryCov_9fa48("752");
    let currentValue = candidate;
    for (let index = stryMutAct_9fa48("753") ? currentArrayLength + 1 : (stryCov_9fa48("753"), currentArrayLength - 1); stryMutAct_9fa48("756") ? index < 0 : stryMutAct_9fa48("755") ? index > 0 : stryMutAct_9fa48("754") ? false : (stryCov_9fa48("754", "755", "756"), index >= 0); stryMutAct_9fa48("757") ? index++ : (stryCov_9fa48("757"), index--)) {
      if (stryMutAct_9fa48("758")) {
        {}
      } else {
        stryCov_9fa48("758");
        currentValue = stryMutAct_9fa48("759") ? 2 * currentValue + numberArrayStorage[index] : (stryCov_9fa48("759"), (stryMutAct_9fa48("760") ? 2 / currentValue : (stryCov_9fa48("760"), 2 * currentValue)) - numberArrayStorage[index]);
        if (stryMutAct_9fa48("764") ? currentValue >= LOWER_BOUND : stryMutAct_9fa48("763") ? currentValue <= LOWER_BOUND : stryMutAct_9fa48("762") ? false : stryMutAct_9fa48("761") ? true : (stryCov_9fa48("761", "762", "763", "764"), currentValue < LOWER_BOUND)) return stryMutAct_9fa48("765") ? +1 : (stryCov_9fa48("765"), -1);
        if (stryMutAct_9fa48("769") ? currentValue <= UPPER_BOUND : stryMutAct_9fa48("768") ? currentValue >= UPPER_BOUND : stryMutAct_9fa48("767") ? false : stryMutAct_9fa48("766") ? true : (stryCov_9fa48("766", "767", "768", "769"), currentValue > UPPER_BOUND)) return 1;
      }
    }
    if (stryMutAct_9fa48("773") ? currentValue >= candidate : stryMutAct_9fa48("772") ? currentValue <= candidate : stryMutAct_9fa48("771") ? false : stryMutAct_9fa48("770") ? true : (stryCov_9fa48("770", "771", "772", "773"), currentValue < candidate)) return stryMutAct_9fa48("774") ? +1 : (stryCov_9fa48("774"), -1);
    if (stryMutAct_9fa48("778") ? currentValue <= candidate : stryMutAct_9fa48("777") ? currentValue >= candidate : stryMutAct_9fa48("776") ? false : stryMutAct_9fa48("775") ? true : (stryCov_9fa48("775", "776", "777", "778"), currentValue > candidate)) return 1;
    return 0;
  }
}
function findBinarySearchSolution() {
  if (stryMutAct_9fa48("779")) {
    {}
  } else {
    stryCov_9fa48("779");
    let lowBound = LOWER_BOUND,
      highBound = UPPER_BOUND;
    while (stryMutAct_9fa48("782") ? highBound - lowBound <= 1 : stryMutAct_9fa48("781") ? highBound - lowBound >= 1 : stryMutAct_9fa48("780") ? false : (stryCov_9fa48("780", "781", "782"), (stryMutAct_9fa48("783") ? highBound + lowBound : (stryCov_9fa48("783"), highBound - lowBound)) > 1)) {
      if (stryMutAct_9fa48("784")) {
        {}
      } else {
        stryCov_9fa48("784");
        let midPoint = (stryMutAct_9fa48("785") ? highBound - lowBound : (stryCov_9fa48("785"), highBound + lowBound)) >> 1;
        let result = evaluateCandidateValue(midPoint);
        if (stryMutAct_9fa48("788") ? result !== 0 : stryMutAct_9fa48("787") ? false : stryMutAct_9fa48("786") ? true : (stryCov_9fa48("786", "787", "788"), result === 0)) return midPoint;else if (stryMutAct_9fa48("792") ? result >= 0 : stryMutAct_9fa48("791") ? result <= 0 : stryMutAct_9fa48("790") ? false : stryMutAct_9fa48("789") ? true : (stryCov_9fa48("789", "790", "791", "792"), result < 0)) lowBound = midPoint;else highBound = midPoint;
      }
    }
    return stryMutAct_9fa48("793") ? LOWER_BOUND + 100 : (stryCov_9fa48("793"), LOWER_BOUND - 100);
  }
}
export function solve(inputArray) {
  if (stryMutAct_9fa48("794")) {
    {}
  } else {
    stryCov_9fa48("794");
    currentArrayLength = inputArray.length;
    numberArrayStorage.set(inputArray);
    let arraySumTotal = 0;
    for (let index = 0; stryMutAct_9fa48("797") ? index >= currentArrayLength : stryMutAct_9fa48("796") ? index <= currentArrayLength : stryMutAct_9fa48("795") ? false : (stryCov_9fa48("795", "796", "797"), index < currentArrayLength); stryMutAct_9fa48("798") ? index-- : (stryCov_9fa48("798"), index++)) {
      if (stryMutAct_9fa48("799")) {
        {}
      } else {
        stryCov_9fa48("799");
        stryMutAct_9fa48("800") ? arraySumTotal -= numberArrayStorage[index] : (stryCov_9fa48("800"), arraySumTotal += numberArrayStorage[index]);
      }
    }
    let solutionCandidate = findBinarySearchSolution();
    if (stryMutAct_9fa48("804") ? solutionCandidate >= LOWER_BOUND : stryMutAct_9fa48("803") ? solutionCandidate <= LOWER_BOUND : stryMutAct_9fa48("802") ? false : stryMutAct_9fa48("801") ? true : (stryCov_9fa48("801", "802", "803", "804"), solutionCandidate < LOWER_BOUND)) return stryMutAct_9fa48("805") ? +1 : (stryCov_9fa48("805"), -1);
    let minimumValueFound = stryMutAct_9fa48("806") ? UPPER_BOUND - 100 : (stryCov_9fa48("806"), UPPER_BOUND + 100);
    let operationsCount = 0;
    let currentSolutionValue = solutionCandidate;
    for (let index = stryMutAct_9fa48("807") ? currentArrayLength + 1 : (stryCov_9fa48("807"), currentArrayLength - 1); stryMutAct_9fa48("810") ? index < 0 : stryMutAct_9fa48("809") ? index > 0 : stryMutAct_9fa48("808") ? false : (stryCov_9fa48("808", "809", "810"), index >= 0); stryMutAct_9fa48("811") ? index++ : (stryCov_9fa48("811"), index--)) {
      if (stryMutAct_9fa48("812")) {
        {}
      } else {
        stryCov_9fa48("812");
        minimumValueFound = stryMutAct_9fa48("813") ? Math.max(minimumValueFound, currentSolutionValue) : (stryCov_9fa48("813"), Math.min(minimumValueFound, currentSolutionValue));
        stryMutAct_9fa48("814") ? operationsCount -= currentSolutionValue : (stryCov_9fa48("814"), operationsCount += currentSolutionValue);
        currentSolutionValue = stryMutAct_9fa48("815") ? 2 * currentSolutionValue + numberArrayStorage[index] : (stryCov_9fa48("815"), (stryMutAct_9fa48("816") ? 2 / currentSolutionValue : (stryCov_9fa48("816"), 2 * currentSolutionValue)) - numberArrayStorage[index]);
      }
    }
    stryMutAct_9fa48("817") ? operationsCount += currentArrayLength * minimumValueFound : (stryCov_9fa48("817"), operationsCount -= stryMutAct_9fa48("818") ? currentArrayLength / minimumValueFound : (stryCov_9fa48("818"), currentArrayLength * minimumValueFound));
    if (stryMutAct_9fa48("822") ? operationsCount <= arraySumTotal : stryMutAct_9fa48("821") ? operationsCount >= arraySumTotal : stryMutAct_9fa48("820") ? false : stryMutAct_9fa48("819") ? true : (stryCov_9fa48("819", "820", "821", "822"), operationsCount > arraySumTotal)) return stryMutAct_9fa48("823") ? +1 : (stryCov_9fa48("823"), -1);
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