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
export function solve(n, m, arrayA, arrayB) {
  if (stryMutAct_9fa48("2382")) {
    {}
  } else {
    stryCov_9fa48("2382");
    stryMutAct_9fa48("2383") ? arrayA : (stryCov_9fa48("2383"), arrayA.sort(stryMutAct_9fa48("2384") ? () => undefined : (stryCov_9fa48("2384"), (x, y) => stryMutAct_9fa48("2385") ? x + y : (stryCov_9fa48("2385"), x - y))));
    stryMutAct_9fa48("2386") ? arrayB : (stryCov_9fa48("2386"), arrayB.sort(stryMutAct_9fa48("2387") ? () => undefined : (stryCov_9fa48("2387"), (x, y) => stryMutAct_9fa48("2388") ? x + y : (stryCov_9fa48("2388"), x - y))));
    let diffA = stryMutAct_9fa48("2389") ? ["Stryker was here"] : (stryCov_9fa48("2389"), []);
    let diffB = stryMutAct_9fa48("2390") ? ["Stryker was here"] : (stryCov_9fa48("2390"), []);
    for (let i = 0; stryMutAct_9fa48("2393") ? i >= Math.floor(n / 2) : stryMutAct_9fa48("2392") ? i <= Math.floor(n / 2) : stryMutAct_9fa48("2391") ? false : (stryCov_9fa48("2391", "2392", "2393"), i < Math.floor(stryMutAct_9fa48("2394") ? n * 2 : (stryCov_9fa48("2394"), n / 2))); stryMutAct_9fa48("2395") ? i-- : (stryCov_9fa48("2395"), i++)) {
      if (stryMutAct_9fa48("2396")) {
        {}
      } else {
        stryCov_9fa48("2396");
        diffA.push(stryMutAct_9fa48("2397") ? arrayA[n - 1 - i] + arrayA[i] : (stryCov_9fa48("2397"), arrayA[stryMutAct_9fa48("2398") ? n - 1 + i : (stryCov_9fa48("2398"), (stryMutAct_9fa48("2399") ? n + 1 : (stryCov_9fa48("2399"), n - 1)) - i)] - arrayA[i]));
      }
    }
    for (let i = 0; stryMutAct_9fa48("2402") ? i >= Math.floor(m / 2) : stryMutAct_9fa48("2401") ? i <= Math.floor(m / 2) : stryMutAct_9fa48("2400") ? false : (stryCov_9fa48("2400", "2401", "2402"), i < Math.floor(stryMutAct_9fa48("2403") ? m * 2 : (stryCov_9fa48("2403"), m / 2))); stryMutAct_9fa48("2404") ? i-- : (stryCov_9fa48("2404"), i++)) {
      if (stryMutAct_9fa48("2405")) {
        {}
      } else {
        stryCov_9fa48("2405");
        diffB.push(stryMutAct_9fa48("2406") ? arrayB[m - 1 - i] + arrayB[i] : (stryCov_9fa48("2406"), arrayB[stryMutAct_9fa48("2407") ? m - 1 + i : (stryCov_9fa48("2407"), (stryMutAct_9fa48("2408") ? m + 1 : (stryCov_9fa48("2408"), m - 1)) - i)] - arrayB[i]));
      }
    }
    const maxTeams = stryMutAct_9fa48("2409") ? Math.max(Math.floor((n + m) / 3), n, m) : (stryCov_9fa48("2409"), Math.min(Math.floor(stryMutAct_9fa48("2410") ? (n + m) * 3 : (stryCov_9fa48("2410"), (stryMutAct_9fa48("2411") ? n - m : (stryCov_9fa48("2411"), n + m)) / 3)), n, m));
    const resultLines = stryMutAct_9fa48("2412") ? [] : (stryCov_9fa48("2412"), [maxTeams.toString()]);
    const maxDiffs = stryMutAct_9fa48("2413") ? ["Stryker was here"] : (stryCov_9fa48("2413"), []);
    let indexA = 0;
    let indexB = 0;
    let totalDifference = 0;
    for (let teamSize = 1; stryMutAct_9fa48("2416") ? teamSize > maxTeams : stryMutAct_9fa48("2415") ? teamSize < maxTeams : stryMutAct_9fa48("2414") ? false : (stryCov_9fa48("2414", "2415", "2416"), teamSize <= maxTeams); stryMutAct_9fa48("2417") ? teamSize-- : (stryCov_9fa48("2417"), teamSize++)) {
      if (stryMutAct_9fa48("2418")) {
        {}
      } else {
        stryCov_9fa48("2418");
        if (stryMutAct_9fa48("2422") ? indexA <= n - teamSize : stryMutAct_9fa48("2421") ? indexA >= n - teamSize : stryMutAct_9fa48("2420") ? false : stryMutAct_9fa48("2419") ? true : (stryCov_9fa48("2419", "2420", "2421", "2422"), indexA > (stryMutAct_9fa48("2423") ? n + teamSize : (stryCov_9fa48("2423"), n - teamSize)))) {
          if (stryMutAct_9fa48("2424")) {
            {}
          } else {
            stryCov_9fa48("2424");
            stryMutAct_9fa48("2425") ? totalDifference -= diffB[indexB] : (stryCov_9fa48("2425"), totalDifference += diffB[indexB]);
            stryMutAct_9fa48("2426") ? indexB-- : (stryCov_9fa48("2426"), indexB++);
            stryMutAct_9fa48("2427") ? indexA++ : (stryCov_9fa48("2427"), indexA--);
            stryMutAct_9fa48("2428") ? totalDifference += diffA[indexA] : (stryCov_9fa48("2428"), totalDifference -= diffA[indexA]);
          }
        }
        if (stryMutAct_9fa48("2432") ? indexB <= m - teamSize : stryMutAct_9fa48("2431") ? indexB >= m - teamSize : stryMutAct_9fa48("2430") ? false : stryMutAct_9fa48("2429") ? true : (stryCov_9fa48("2429", "2430", "2431", "2432"), indexB > (stryMutAct_9fa48("2433") ? m + teamSize : (stryCov_9fa48("2433"), m - teamSize)))) {
          if (stryMutAct_9fa48("2434")) {
            {}
          } else {
            stryCov_9fa48("2434");
            stryMutAct_9fa48("2435") ? totalDifference -= diffA[indexA] : (stryCov_9fa48("2435"), totalDifference += diffA[indexA]);
            stryMutAct_9fa48("2436") ? indexA-- : (stryCov_9fa48("2436"), indexA++);
            stryMutAct_9fa48("2437") ? indexB++ : (stryCov_9fa48("2437"), indexB--);
            stryMutAct_9fa48("2438") ? totalDifference += diffB[indexB] : (stryCov_9fa48("2438"), totalDifference -= diffB[indexB]);
          }
        }
        if (stryMutAct_9fa48("2441") ? indexA !== n - teamSize : stryMutAct_9fa48("2440") ? false : stryMutAct_9fa48("2439") ? true : (stryCov_9fa48("2439", "2440", "2441"), indexA === (stryMutAct_9fa48("2442") ? n + teamSize : (stryCov_9fa48("2442"), n - teamSize)))) {
          if (stryMutAct_9fa48("2443")) {
            {}
          } else {
            stryCov_9fa48("2443");
            stryMutAct_9fa48("2444") ? totalDifference -= diffB[indexB] : (stryCov_9fa48("2444"), totalDifference += diffB[indexB]);
            stryMutAct_9fa48("2445") ? indexB-- : (stryCov_9fa48("2445"), indexB++);
          }
        } else if (stryMutAct_9fa48("2448") ? indexB !== m - teamSize : stryMutAct_9fa48("2447") ? false : stryMutAct_9fa48("2446") ? true : (stryCov_9fa48("2446", "2447", "2448"), indexB === (stryMutAct_9fa48("2449") ? m + teamSize : (stryCov_9fa48("2449"), m - teamSize)))) {
          if (stryMutAct_9fa48("2450")) {
            {}
          } else {
            stryCov_9fa48("2450");
            stryMutAct_9fa48("2451") ? totalDifference -= diffA[indexA] : (stryCov_9fa48("2451"), totalDifference += diffA[indexA]);
            stryMutAct_9fa48("2452") ? indexA-- : (stryCov_9fa48("2452"), indexA++);
          }
        } else if (stryMutAct_9fa48("2456") ? diffA[indexA] <= diffB[indexB] : stryMutAct_9fa48("2455") ? diffA[indexA] >= diffB[indexB] : stryMutAct_9fa48("2454") ? false : stryMutAct_9fa48("2453") ? true : (stryCov_9fa48("2453", "2454", "2455", "2456"), diffA[indexA] > diffB[indexB])) {
          if (stryMutAct_9fa48("2457")) {
            {}
          } else {
            stryCov_9fa48("2457");
            stryMutAct_9fa48("2458") ? totalDifference -= diffA[indexA] : (stryCov_9fa48("2458"), totalDifference += diffA[indexA]);
            stryMutAct_9fa48("2459") ? indexA-- : (stryCov_9fa48("2459"), indexA++);
          }
        } else {
          if (stryMutAct_9fa48("2460")) {
            {}
          } else {
            stryCov_9fa48("2460");
            stryMutAct_9fa48("2461") ? totalDifference -= diffB[indexB] : (stryCov_9fa48("2461"), totalDifference += diffB[indexB]);
            stryMutAct_9fa48("2462") ? indexB-- : (stryCov_9fa48("2462"), indexB++);
          }
        }
        maxDiffs.push(totalDifference);
      }
    }
    if (stryMutAct_9fa48("2466") ? maxTeams <= 0 : stryMutAct_9fa48("2465") ? maxTeams >= 0 : stryMutAct_9fa48("2464") ? false : stryMutAct_9fa48("2463") ? true : (stryCov_9fa48("2463", "2464", "2465", "2466"), maxTeams > 0)) {
      if (stryMutAct_9fa48("2467")) {
        {}
      } else {
        stryCov_9fa48("2467");
        resultLines.push(maxDiffs.join(stryMutAct_9fa48("2468") ? "" : (stryCov_9fa48("2468"), ' ')));
      }
    }
    return resultLines.join(stryMutAct_9fa48("2469") ? "" : (stryCov_9fa48("2469"), '\n'));
  }
}

// function testing_test() {
//     const testCases = [
//         {
//             input: [1, 3, [0], [0, 1, -1]],
//             expected: "1\n2"
//         },
//         {
//             input: [2, 4, [0, 100], [-100, -50, 0, 50]],
//             expected: "2\n150 200"
//         },
//         {
//             input: [2, 4, [0, 1000], [-100, -50, 0, 50]],
//             expected: "2\n1000 200"
//         },
//         {
//             input: [6, 6, [20, 1, 27, 100, 43, 42], [100, 84, 1, 24, 22, 77]],
//             expected: "4\n99 198 260 283"
//         },
//         {
//             input: [8, 2, [564040265, -509489796, 469913620, 198872582, -400714529, 553177666, 131159391, -20796763], [-1000000000, 1000000000]],
//             expected: "2\n2000000000 2027422256"
//         }
//     ];

//     console.log("Running Tests...\n");
//     testCases.forEach(({ input, expected }, index) => {
//         const [n, m, a, b] = input;
//         const result = solve(n, m, a, b);
//         console.log(`Test Case ${index + 1}:`);
//         console.log(`Input: n=${n}, m=${m}, a=[${a}], b=[${b}]`);
//         console.log(`Expected:\n${expected}`);
//         console.log(`Result:\n${result}`);
//         console.log(`Status: ${result === expected ? "PASS" : "FAIL"}\n`);
//     });
// }

// testing_test();