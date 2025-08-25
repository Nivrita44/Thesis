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
export function solve(numEnemies, maxHits, requiredEnemies, enemyHealth, enemyPositions) {
  if (stryMutAct_9fa48("899")) {
    {}
  } else {
    stryCov_9fa48("899");
    let minimumTime = Infinity;
    let low = 1,
      high = 1e9;
    while (stryMutAct_9fa48("902") ? low > high : stryMutAct_9fa48("901") ? low < high : stryMutAct_9fa48("900") ? false : (stryCov_9fa48("900", "901", "902"), low <= high)) {
      if (stryMutAct_9fa48("903")) {
        {}
      } else {
        stryCov_9fa48("903");
        const midTime = Math.floor(stryMutAct_9fa48("904") ? (low + high) * 2 : (stryCov_9fa48("904"), (stryMutAct_9fa48("905") ? low - high : (stryCov_9fa48("905"), low + high)) / 2));
        const attackRanges = stryMutAct_9fa48("906") ? ["Stryker was here"] : (stryCov_9fa48("906"), []);
        for (let i = 0; stryMutAct_9fa48("909") ? i >= numEnemies : stryMutAct_9fa48("908") ? i <= numEnemies : stryMutAct_9fa48("907") ? false : (stryCov_9fa48("907", "908", "909"), i < numEnemies); stryMutAct_9fa48("910") ? i-- : (stryCov_9fa48("910"), i++)) {
          if (stryMutAct_9fa48("911")) {
            {}
          } else {
            stryCov_9fa48("911");
            const hitsNeeded = Math.ceil(stryMutAct_9fa48("912") ? enemyHealth[i] * midTime : (stryCov_9fa48("912"), enemyHealth[i] / midTime));
            const extraHits = stryMutAct_9fa48("913") ? maxHits + hitsNeeded : (stryCov_9fa48("913"), maxHits - hitsNeeded);
            const rangeStart = stryMutAct_9fa48("914") ? enemyPositions[i] + extraHits : (stryCov_9fa48("914"), enemyPositions[i] - extraHits);
            const rangeEnd = stryMutAct_9fa48("915") ? enemyPositions[i] - extraHits : (stryCov_9fa48("915"), enemyPositions[i] + extraHits);
            if (stryMutAct_9fa48("919") ? rangeStart > rangeEnd : stryMutAct_9fa48("918") ? rangeStart < rangeEnd : stryMutAct_9fa48("917") ? false : stryMutAct_9fa48("916") ? true : (stryCov_9fa48("916", "917", "918", "919"), rangeStart <= rangeEnd)) {
              if (stryMutAct_9fa48("920")) {
                {}
              } else {
                stryCov_9fa48("920");
                attackRanges.push(stryMutAct_9fa48("921") ? [] : (stryCov_9fa48("921"), [rangeStart, 1])); // Start of range
                attackRanges.push(stryMutAct_9fa48("922") ? [] : (stryCov_9fa48("922"), [stryMutAct_9fa48("923") ? rangeEnd - 1 : (stryCov_9fa48("923"), rangeEnd + 1), stryMutAct_9fa48("924") ? +1 : (stryCov_9fa48("924"), -1)])); // End of range
              }
            }
          }
        }

        // Sort the attackRanges based on position
        stryMutAct_9fa48("925") ? attackRanges : (stryCov_9fa48("925"), attackRanges.sort(stryMutAct_9fa48("926") ? () => undefined : (stryCov_9fa48("926"), (a, b) => stryMutAct_9fa48("927") ? a[0] + b[0] : (stryCov_9fa48("927"), a[0] - b[0]))));
        let activeCount = 0;
        let isEnough = stryMutAct_9fa48("928") ? true : (stryCov_9fa48("928"), false);
        for (let j = 0; stryMutAct_9fa48("931") ? j >= attackRanges.length : stryMutAct_9fa48("930") ? j <= attackRanges.length : stryMutAct_9fa48("929") ? false : (stryCov_9fa48("929", "930", "931"), j < attackRanges.length); stryMutAct_9fa48("932") ? j-- : (stryCov_9fa48("932"), j++)) {
          if (stryMutAct_9fa48("933")) {
            {}
          } else {
            stryCov_9fa48("933");
            stryMutAct_9fa48("934") ? activeCount -= attackRanges[j][1] : (stryCov_9fa48("934"), activeCount += attackRanges[j][1]);
            if (stryMutAct_9fa48("938") ? activeCount < requiredEnemies : stryMutAct_9fa48("937") ? activeCount > requiredEnemies : stryMutAct_9fa48("936") ? false : stryMutAct_9fa48("935") ? true : (stryCov_9fa48("935", "936", "937", "938"), activeCount >= requiredEnemies)) {
              if (stryMutAct_9fa48("939")) {
                {}
              } else {
                stryCov_9fa48("939");
                isEnough = stryMutAct_9fa48("940") ? false : (stryCov_9fa48("940"), true);
                break;
              }
            }
          }
        }
        if (stryMutAct_9fa48("942") ? false : stryMutAct_9fa48("941") ? true : (stryCov_9fa48("941", "942"), isEnough)) {
          if (stryMutAct_9fa48("943")) {
            {}
          } else {
            stryCov_9fa48("943");
            minimumTime = midTime;
            high = stryMutAct_9fa48("944") ? midTime + 1 : (stryCov_9fa48("944"), midTime - 1);
          }
        } else {
          if (stryMutAct_9fa48("945")) {
            {}
          } else {
            stryCov_9fa48("945");
            low = stryMutAct_9fa48("946") ? midTime - 1 : (stryCov_9fa48("946"), midTime + 1);
          }
        }
      }
    }
    return (stryMutAct_9fa48("949") ? minimumTime !== Infinity : stryMutAct_9fa48("948") ? false : stryMutAct_9fa48("947") ? true : (stryCov_9fa48("947", "948", "949"), minimumTime === Infinity)) ? stryMutAct_9fa48("950") ? +1 : (stryCov_9fa48("950"), -1) : minimumTime;
  }
}
function testing_test() {
  if (stryMutAct_9fa48("951")) {
    {}
  } else {
    stryCov_9fa48("951");
    const testCases = stryMutAct_9fa48("952") ? [] : (stryCov_9fa48("952"), [stryMutAct_9fa48("953") ? {} : (stryCov_9fa48("953"), {
      input: stryMutAct_9fa48("954") ? [] : (stryCov_9fa48("954"), [5, 5, 3, stryMutAct_9fa48("955") ? [] : (stryCov_9fa48("955"), [7, 7, 7, 7, 7]), stryMutAct_9fa48("956") ? [] : (stryCov_9fa48("956"), [1, 2, 3, 4, 5])]),
      expected: 2
    }), stryMutAct_9fa48("957") ? {} : (stryCov_9fa48("957"), {
      input: stryMutAct_9fa48("958") ? [] : (stryCov_9fa48("958"), [9, 5, 9, stryMutAct_9fa48("959") ? [] : (stryCov_9fa48("959"), [2, 4, 6, 8, 10, 8, 6, 4, 2]), stryMutAct_9fa48("960") ? [] : (stryCov_9fa48("960"), [1, 2, 3, 4, 5, 6, 7, 8, 9])]),
      expected: 2
    }), stryMutAct_9fa48("961") ? {} : (stryCov_9fa48("961"), {
      input: stryMutAct_9fa48("962") ? [] : (stryCov_9fa48("962"), [2, 10, 2, stryMutAct_9fa48("963") ? [] : (stryCov_9fa48("963"), [1, 1]), stryMutAct_9fa48("964") ? [] : (stryCov_9fa48("964"), [1, 20])]),
      expected: stryMutAct_9fa48("965") ? +1 : (stryCov_9fa48("965"), -1)
    }), stryMutAct_9fa48("966") ? {} : (stryCov_9fa48("966"), {
      input: stryMutAct_9fa48("967") ? [] : (stryCov_9fa48("967"), [2, 2, 2, stryMutAct_9fa48("968") ? [] : (stryCov_9fa48("968"), [1000000000, 1]), stryMutAct_9fa48("969") ? [] : (stryCov_9fa48("969"), [1, 3])]),
      expected: 1000000000
    })]);
    for (let i = 0; stryMutAct_9fa48("972") ? i >= testCases.length : stryMutAct_9fa48("971") ? i <= testCases.length : stryMutAct_9fa48("970") ? false : (stryCov_9fa48("970", "971", "972"), i < testCases.length); stryMutAct_9fa48("973") ? i-- : (stryCov_9fa48("973"), i++)) {
      if (stryMutAct_9fa48("974")) {
        {}
      } else {
        stryCov_9fa48("974");
        const {
          input,
          expected
        } = testCases[i];
        const result = solve(...input);
        console.log(stryMutAct_9fa48("975") ? `` : (stryCov_9fa48("975"), `Test Case ${stryMutAct_9fa48("976") ? i - 1 : (stryCov_9fa48("976"), i + 1)}:`), (stryMutAct_9fa48("979") ? result !== expected : stryMutAct_9fa48("978") ? false : stryMutAct_9fa48("977") ? true : (stryCov_9fa48("977", "978", "979"), result === expected)) ? stryMutAct_9fa48("980") ? "" : (stryCov_9fa48("980"), "Passed") : stryMutAct_9fa48("981") ? `` : (stryCov_9fa48("981"), `Failed (Expected: ${expected}, Got: ${result})`));
      }
    }
  }
}
testing_test();