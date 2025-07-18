// @ts-nocheck
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
function solve(x, y, maxFactorRatio) {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    const commonGCD = gcd(x, y);
    const stepsToX = minSteps(stryMutAct_9fa48("1") ? x * commonGCD : (stryCov_9fa48("1"), x / commonGCD));
    const stepsToY = minSteps(stryMutAct_9fa48("2") ? y * commonGCD : (stryCov_9fa48("2"), y / commonGCD));
    const totalSteps = stryMutAct_9fa48("3") ? stepsToX - stepsToY : (stryCov_9fa48("3"), stepsToX + stepsToY);
    return (stryMutAct_9fa48("6") ? totalSteps !== Infinity : stryMutAct_9fa48("5") ? false : stryMutAct_9fa48("4") ? true : (stryCov_9fa48("4", "5", "6"), totalSteps === Infinity)) ? stryMutAct_9fa48("7") ? +1 : (stryCov_9fa48("7"), -1) : totalSteps;
    function minSteps(target) {
      if (stryMutAct_9fa48("8")) {
        {}
      } else {
        stryCov_9fa48("8");
        const allDivisors = stryMutAct_9fa48("9") ? ["Stryker was here"] : (stryCov_9fa48("9"), []);
        for (let i = 1; stryMutAct_9fa48("12") ? i * i > target : stryMutAct_9fa48("11") ? i * i < target : stryMutAct_9fa48("10") ? false : (stryCov_9fa48("10", "11", "12"), (stryMutAct_9fa48("13") ? i / i : (stryCov_9fa48("13"), i * i)) <= target); stryMutAct_9fa48("14") ? i-- : (stryCov_9fa48("14"), i++)) {
          if (stryMutAct_9fa48("15")) {
            {}
          } else {
            stryCov_9fa48("15");
            if (stryMutAct_9fa48("18") ? target % i !== 0 : stryMutAct_9fa48("17") ? false : stryMutAct_9fa48("16") ? true : (stryCov_9fa48("16", "17", "18"), (stryMutAct_9fa48("19") ? target * i : (stryCov_9fa48("19"), target % i)) === 0)) {
              if (stryMutAct_9fa48("20")) {
                {}
              } else {
                stryCov_9fa48("20");
                allDivisors.push(i);
                if (stryMutAct_9fa48("23") ? i === target / i : stryMutAct_9fa48("22") ? false : stryMutAct_9fa48("21") ? true : (stryCov_9fa48("21", "22", "23"), i !== (stryMutAct_9fa48("24") ? target * i : (stryCov_9fa48("24"), target / i)))) {
                  if (stryMutAct_9fa48("25")) {
                    {}
                  } else {
                    stryCov_9fa48("25");
                    allDivisors.push(stryMutAct_9fa48("26") ? target * i : (stryCov_9fa48("26"), target / i));
                  }
                }
              }
            }
          }
        }
        stryMutAct_9fa48("27") ? allDivisors : (stryCov_9fa48("27"), allDivisors.sort(stryMutAct_9fa48("28") ? () => undefined : (stryCov_9fa48("28"), (a, b) => stryMutAct_9fa48("29") ? a + b : (stryCov_9fa48("29"), a - b))));
        const minOperations = stryMutAct_9fa48("30") ? Array().fill(Infinity) : (stryCov_9fa48("30"), Array(allDivisors.length).fill(Infinity));
        for (let i = 0; stryMutAct_9fa48("33") ? i >= allDivisors.length : stryMutAct_9fa48("32") ? i <= allDivisors.length : stryMutAct_9fa48("31") ? false : (stryCov_9fa48("31", "32", "33"), i < allDivisors.length); stryMutAct_9fa48("34") ? i-- : (stryCov_9fa48("34"), i++)) {
          if (stryMutAct_9fa48("35")) {
            {}
          } else {
            stryCov_9fa48("35");
            let bestPrevStep = Infinity;
            for (let j = 0; stryMutAct_9fa48("38") ? j >= i : stryMutAct_9fa48("37") ? j <= i : stryMutAct_9fa48("36") ? false : (stryCov_9fa48("36", "37", "38"), j < i); stryMutAct_9fa48("39") ? j-- : (stryCov_9fa48("39"), j++)) {
              if (stryMutAct_9fa48("40")) {
                {}
              } else {
                stryCov_9fa48("40");
                const larger = allDivisors[i];
                const smaller = allDivisors[j];
                if (stryMutAct_9fa48("43") ? larger % smaller === 0 || larger / smaller <= maxFactorRatio : stryMutAct_9fa48("42") ? false : stryMutAct_9fa48("41") ? true : (stryCov_9fa48("41", "42", "43"), (stryMutAct_9fa48("45") ? larger % smaller !== 0 : stryMutAct_9fa48("44") ? true : (stryCov_9fa48("44", "45"), (stryMutAct_9fa48("46") ? larger * smaller : (stryCov_9fa48("46"), larger % smaller)) === 0)) && (stryMutAct_9fa48("49") ? larger / smaller > maxFactorRatio : stryMutAct_9fa48("48") ? larger / smaller < maxFactorRatio : stryMutAct_9fa48("47") ? true : (stryCov_9fa48("47", "48", "49"), (stryMutAct_9fa48("50") ? larger * smaller : (stryCov_9fa48("50"), larger / smaller)) <= maxFactorRatio)))) {
                  if (stryMutAct_9fa48("51")) {
                    {}
                  } else {
                    stryCov_9fa48("51");
                    bestPrevStep = stryMutAct_9fa48("52") ? Math.max(bestPrevStep, minOperations[j]) : (stryCov_9fa48("52"), Math.min(bestPrevStep, minOperations[j]));
                  }
                }
              }
            }
            if (stryMutAct_9fa48("56") ? allDivisors[i] > maxFactorRatio : stryMutAct_9fa48("55") ? allDivisors[i] < maxFactorRatio : stryMutAct_9fa48("54") ? false : stryMutAct_9fa48("53") ? true : (stryCov_9fa48("53", "54", "55", "56"), allDivisors[i] <= maxFactorRatio)) {
              if (stryMutAct_9fa48("57")) {
                {}
              } else {
                stryCov_9fa48("57");
                minOperations[i] = (stryMutAct_9fa48("60") ? allDivisors[i] !== 1 : stryMutAct_9fa48("59") ? false : stryMutAct_9fa48("58") ? true : (stryCov_9fa48("58", "59", "60"), allDivisors[i] === 1)) ? 0 : 1;
              }
            }
            minOperations[i] = stryMutAct_9fa48("61") ? Math.max(minOperations[i], bestPrevStep + 1) : (stryCov_9fa48("61"), Math.min(minOperations[i], stryMutAct_9fa48("62") ? bestPrevStep - 1 : (stryCov_9fa48("62"), bestPrevStep + 1)));
          }
        }
        return minOperations[stryMutAct_9fa48("63") ? allDivisors.length + 1 : (stryCov_9fa48("63"), allDivisors.length - 1)];
      }
    }
  }
}
function gcd(a, b) {
  if (stryMutAct_9fa48("64")) {
    {}
  } else {
    stryCov_9fa48("64");
    while (stryMutAct_9fa48("65") ? false : (stryCov_9fa48("65"), a)) {
      if (stryMutAct_9fa48("66")) {
        {}
      } else {
        stryCov_9fa48("66");
        const remainder = stryMutAct_9fa48("67") ? b * a : (stryCov_9fa48("67"), b % a);
        b = a;
        a = remainder;
      }
    }
    return b;
  }
}
function test() {
  if (stryMutAct_9fa48("68")) {
    {}
  } else {
    stryCov_9fa48("68");
    const testCases = stryMutAct_9fa48("69") ? [] : (stryCov_9fa48("69"), [stryMutAct_9fa48("70") ? {} : (stryCov_9fa48("70"), {
      x: 4,
      y: 6,
      k: 3,
      expected: 2
    }), stryMutAct_9fa48("71") ? {} : (stryCov_9fa48("71"), {
      x: 4,
      y: 5,
      k: 3,
      expected: stryMutAct_9fa48("72") ? +1 : (stryCov_9fa48("72"), -1)
    }), stryMutAct_9fa48("73") ? {} : (stryCov_9fa48("73"), {
      x: 4,
      y: 6,
      k: 2,
      expected: stryMutAct_9fa48("74") ? +1 : (stryCov_9fa48("74"), -1)
    }), stryMutAct_9fa48("75") ? {} : (stryCov_9fa48("75"), {
      x: 10,
      y: 45,
      k: 3,
      expected: 3
    }), stryMutAct_9fa48("76") ? {} : (stryCov_9fa48("76"), {
      x: 780,
      y: 23,
      k: 42,
      expected: 3
    }), stryMutAct_9fa48("77") ? {} : (stryCov_9fa48("77"), {
      x: 11,
      y: 270,
      k: 23,
      expected: 3
    }), stryMutAct_9fa48("78") ? {} : (stryCov_9fa48("78"), {
      x: 1,
      y: 982800,
      k: 13,
      expected: 6
    }), stryMutAct_9fa48("79") ? {} : (stryCov_9fa48("79"), {
      x: 1,
      y: 6,
      k: 2,
      expected: stryMutAct_9fa48("80") ? +1 : (stryCov_9fa48("80"), -1)
    })]);
    for (const {
      x,
      y,
      k,
      expected
    } of testCases) {
      if (stryMutAct_9fa48("81")) {
        {}
      } else {
        stryCov_9fa48("81");
        const result = solve(x, y, k);
        console.log(stryMutAct_9fa48("82") ? `` : (stryCov_9fa48("82"), `x=${x}, y=${y}, k=${k}:`));
        console.log(stryMutAct_9fa48("83") ? `` : (stryCov_9fa48("83"), `  Expected: ${expected}, Got: ${result}`));
        console.log(stryMutAct_9fa48("84") ? `` : (stryCov_9fa48("84"), `  ${(stryMutAct_9fa48("87") ? result !== expected : stryMutAct_9fa48("86") ? false : stryMutAct_9fa48("85") ? true : (stryCov_9fa48("85", "86", "87"), result === expected)) ? stryMutAct_9fa48("88") ? "" : (stryCov_9fa48("88"), "PASS") : stryMutAct_9fa48("89") ? "" : (stryCov_9fa48("89"), "FAIL")}`));
      }
    }
  }
}
test();
module.exports = solve;