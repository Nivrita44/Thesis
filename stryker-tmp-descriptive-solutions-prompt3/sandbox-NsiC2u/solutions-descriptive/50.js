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
export function solve(numbers) {
  if (stryMutAct_9fa48("3560")) {
    {}
  } else {
    stryCov_9fa48("3560");
    const length = numbers.length;
    const presenceMap = {};
    for (let i = 0; stryMutAct_9fa48("3563") ? i >= length : stryMutAct_9fa48("3562") ? i <= length : stryMutAct_9fa48("3561") ? false : (stryCov_9fa48("3561", "3562", "3563"), i < length); stryMutAct_9fa48("3564") ? i-- : (stryCov_9fa48("3564"), i++)) {
      if (stryMutAct_9fa48("3565")) {
        {}
      } else {
        stryCov_9fa48("3565");
        presenceMap[numbers[i]] = stryMutAct_9fa48("3566") ? false : (stryCov_9fa48("3566"), true);
      }
    }
    stryMutAct_9fa48("3567") ? numbers : (stryCov_9fa48("3567"), numbers.sort(stryMutAct_9fa48("3568") ? () => undefined : (stryCov_9fa48("3568"), (a, b) => stryMutAct_9fa48("3569") ? b + a : (stryCov_9fa48("3569"), b - a))));
    let currentLCM = numbers[0];
    for (let i = 1; stryMutAct_9fa48("3572") ? i >= length : stryMutAct_9fa48("3571") ? i <= length : stryMutAct_9fa48("3570") ? false : (stryCov_9fa48("3570", "3571", "3572"), i < length); stryMutAct_9fa48("3573") ? i-- : (stryCov_9fa48("3573"), i++)) {
      if (stryMutAct_9fa48("3574")) {
        {}
      } else {
        stryCov_9fa48("3574");
        currentLCM = getLCM(currentLCM, numbers[i]);
        if (stryMutAct_9fa48("3578") ? currentLCM <= 1e9 : stryMutAct_9fa48("3577") ? currentLCM >= 1e9 : stryMutAct_9fa48("3576") ? false : stryMutAct_9fa48("3575") ? true : (stryCov_9fa48("3575", "3576", "3577", "3578"), currentLCM > 1e9)) return length;
      }
    }
    if (stryMutAct_9fa48("3581") ? false : stryMutAct_9fa48("3580") ? true : stryMutAct_9fa48("3579") ? presenceMap[currentLCM] : (stryCov_9fa48("3579", "3580", "3581"), !presenceMap[currentLCM])) return length;
    const sqrtLimit = Math.floor(Math.sqrt(currentLCM));
    let maxCount = 0;
    for (let divisor = 1; stryMutAct_9fa48("3584") ? divisor > sqrtLimit : stryMutAct_9fa48("3583") ? divisor < sqrtLimit : stryMutAct_9fa48("3582") ? false : (stryCov_9fa48("3582", "3583", "3584"), divisor <= sqrtLimit); stryMutAct_9fa48("3585") ? divisor-- : (stryCov_9fa48("3585"), divisor++)) {
      if (stryMutAct_9fa48("3586")) {
        {}
      } else {
        stryCov_9fa48("3586");
        if (stryMutAct_9fa48("3589") ? currentLCM % divisor === 0 : stryMutAct_9fa48("3588") ? false : stryMutAct_9fa48("3587") ? true : (stryCov_9fa48("3587", "3588", "3589"), (stryMutAct_9fa48("3590") ? currentLCM * divisor : (stryCov_9fa48("3590"), currentLCM % divisor)) !== 0)) continue;
        maxCount = stryMutAct_9fa48("3591") ? Math.min(maxCount, countMultiples(divisor), countMultiples(currentLCM / divisor)) : (stryCov_9fa48("3591"), Math.max(maxCount, countMultiples(divisor), countMultiples(stryMutAct_9fa48("3592") ? currentLCM * divisor : (stryCov_9fa48("3592"), currentLCM / divisor))));
      }
    }
    return maxCount;
    function countMultiples(divisor) {
      if (stryMutAct_9fa48("3593")) {
        {}
      } else {
        stryCov_9fa48("3593");
        if (stryMutAct_9fa48("3595") ? false : stryMutAct_9fa48("3594") ? true : (stryCov_9fa48("3594", "3595"), presenceMap[divisor])) return 0;
        let count = 0,
          combinedLCM;
        for (let i = 0; stryMutAct_9fa48("3598") ? i >= length : stryMutAct_9fa48("3597") ? i <= length : stryMutAct_9fa48("3596") ? false : (stryCov_9fa48("3596", "3597", "3598"), i < length); stryMutAct_9fa48("3599") ? i-- : (stryCov_9fa48("3599"), i++)) {
          if (stryMutAct_9fa48("3600")) {
            {}
          } else {
            stryCov_9fa48("3600");
            if (stryMutAct_9fa48("3603") ? divisor % numbers[i] !== 0 : stryMutAct_9fa48("3602") ? false : stryMutAct_9fa48("3601") ? true : (stryCov_9fa48("3601", "3602", "3603"), (stryMutAct_9fa48("3604") ? divisor * numbers[i] : (stryCov_9fa48("3604"), divisor % numbers[i])) === 0)) {
              if (stryMutAct_9fa48("3605")) {
                {}
              } else {
                stryCov_9fa48("3605");
                combinedLCM = combinedLCM ? getLCM(combinedLCM, numbers[i]) : numbers[i];
                stryMutAct_9fa48("3606") ? count-- : (stryCov_9fa48("3606"), count++);
              }
            }
          }
        }
        return (stryMutAct_9fa48("3609") ? divisor !== combinedLCM : stryMutAct_9fa48("3608") ? false : stryMutAct_9fa48("3607") ? true : (stryCov_9fa48("3607", "3608", "3609"), divisor === combinedLCM)) ? count : 0;
      }
    }
  }
}
function getLCM(a, b) {
  if (stryMutAct_9fa48("3610")) {
    {}
  } else {
    stryCov_9fa48("3610");
    return stryMutAct_9fa48("3611") ? a / gcd(a, b) / b : (stryCov_9fa48("3611"), (stryMutAct_9fa48("3612") ? a * gcd(a, b) : (stryCov_9fa48("3612"), a / gcd(a, b))) * b);
  }
}
function gcd(a, b) {
  if (stryMutAct_9fa48("3613")) {
    {}
  } else {
    stryCov_9fa48("3613");
    while (stryMutAct_9fa48("3615") ? b === 0 : stryMutAct_9fa48("3614") ? false : (stryCov_9fa48("3614", "3615"), b !== 0)) {
      if (stryMutAct_9fa48("3616")) {
        {}
      } else {
        stryCov_9fa48("3616");
        const temp = b;
        b = stryMutAct_9fa48("3617") ? a * b : (stryCov_9fa48("3617"), a % b);
        a = temp;
      }
    }
    return a;
  }
}

// function testing_test() {
//     const testCases = [
//         {
//             input: [1, 2, 4, 8, 16],
//             expected: 0
//         },
//         {
//             input: [3, 2, 10, 20, 60, 1],
//             expected: 4
//         },
//         {
//             input: [2, 3, 4, 6, 12, 100003, 1200036],
//             expected: 4
//         },
//         {
//             input: [2, 42, 7, 3, 6, 7, 7, 1, 6],
//             expected: 5
//         },
//         {
//             input: [4, 99, 57, 179, 10203, 2, 11, 40812],
//             expected: 8
//         },
//         {
//             input: [1],
//             expected: 0
//         }
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const {input, expected} = testCases[i];
//         const result = solve(input);
//         if (result === expected) {
//             console.log(`Test case ${i + 1}: Passed`);
//         } else {
//             console.log(`Test case ${i + 1}: Failed`);
//             console.log(`  Input: [${input}]`);
//             console.log(`  Expected: ${expected}, Got: ${result}`);
//         }
//     }
// }

// testing_test();