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
export function solve(nodeCount, pattern) {
  if (stryMutAct_9fa48("2396")) {
    {}
  } else {
    stryCov_9fa48("2396");
    const positionGroups = {};
    let maxLabel = 0;
    for (let i = 0; stryMutAct_9fa48("2399") ? i >= nodeCount : stryMutAct_9fa48("2398") ? i <= nodeCount : stryMutAct_9fa48("2397") ? false : (stryCov_9fa48("2397", "2398", "2399"), i < nodeCount); stryMutAct_9fa48("2400") ? i-- : (stryCov_9fa48("2400"), i++)) {
      if (stryMutAct_9fa48("2401")) {
        {}
      } else {
        stryCov_9fa48("2401");
        const value = pattern[i];
        if (stryMutAct_9fa48("2404") ? false : stryMutAct_9fa48("2403") ? true : stryMutAct_9fa48("2402") ? positionGroups[value] : (stryCov_9fa48("2402", "2403", "2404"), !positionGroups[value])) positionGroups[value] = stryMutAct_9fa48("2405") ? ["Stryker was here"] : (stryCov_9fa48("2405"), []);
        positionGroups[value].push(i);
        maxLabel = stryMutAct_9fa48("2406") ? Math.min(maxLabel, value) : (stryCov_9fa48("2406"), Math.max(maxLabel, value));
      }
    }
    let leftPos = 1,
      rightPos = nodeCount;
    const result = stryMutAct_9fa48("2407") ? Array() : (stryCov_9fa48("2407"), Array(nodeCount));
    const used = stryMutAct_9fa48("2408") ? Array() : (stryCov_9fa48("2408"), Array(nodeCount));
    let leftIndex = 0,
      rightIndex = stryMutAct_9fa48("2409") ? nodeCount + 1 : (stryCov_9fa48("2409"), nodeCount - 1);
    for (let label = 1; stryMutAct_9fa48("2412") ? label > maxLabel : stryMutAct_9fa48("2411") ? label < maxLabel : stryMutAct_9fa48("2410") ? false : (stryCov_9fa48("2410", "2411", "2412"), label <= maxLabel); stryMutAct_9fa48("2413") ? label-- : (stryCov_9fa48("2413"), label++)) {
      if (stryMutAct_9fa48("2414")) {
        {}
      } else {
        stryCov_9fa48("2414");
        while (stryMutAct_9fa48("2415") ? false : (stryCov_9fa48("2415"), used[leftIndex])) stryMutAct_9fa48("2416") ? leftIndex-- : (stryCov_9fa48("2416"), leftIndex++);
        while (stryMutAct_9fa48("2417") ? false : (stryCov_9fa48("2417"), used[rightIndex])) stryMutAct_9fa48("2418") ? rightIndex++ : (stryCov_9fa48("2418"), rightIndex--);
        const group = positionGroups[label];
        const startsAtLeft = stryMutAct_9fa48("2421") ? group[0] !== leftIndex : stryMutAct_9fa48("2420") ? false : stryMutAct_9fa48("2419") ? true : (stryCov_9fa48("2419", "2420", "2421"), group[0] === leftIndex);
        const endsAtRight = stryMutAct_9fa48("2424") ? group[group.length - 1] !== rightIndex : stryMutAct_9fa48("2423") ? false : stryMutAct_9fa48("2422") ? true : (stryCov_9fa48("2422", "2423", "2424"), group[stryMutAct_9fa48("2425") ? group.length + 1 : (stryCov_9fa48("2425"), group.length - 1)] === rightIndex);
        if (stryMutAct_9fa48("2428") ? label % 2 !== 1 : stryMutAct_9fa48("2427") ? false : stryMutAct_9fa48("2426") ? true : (stryCov_9fa48("2426", "2427", "2428"), (stryMutAct_9fa48("2429") ? label * 2 : (stryCov_9fa48("2429"), label % 2)) === 1)) {
          if (stryMutAct_9fa48("2430")) {
            {}
          } else {
            stryCov_9fa48("2430");
            if (stryMutAct_9fa48("2433") ? startsAtLeft || endsAtRight : stryMutAct_9fa48("2432") ? false : stryMutAct_9fa48("2431") ? true : (stryCov_9fa48("2431", "2432", "2433"), startsAtLeft && endsAtRight)) {
              if (stryMutAct_9fa48("2434")) {
                {}
              } else {
                stryCov_9fa48("2434");
                for (let mid = group[0]; stryMutAct_9fa48("2437") ? mid >= nodeCount : stryMutAct_9fa48("2436") ? mid <= nodeCount : stryMutAct_9fa48("2435") ? false : (stryCov_9fa48("2435", "2436", "2437"), mid < nodeCount); stryMutAct_9fa48("2438") ? mid-- : (stryCov_9fa48("2438"), mid++)) {
                  if (stryMutAct_9fa48("2439")) {
                    {}
                  } else {
                    stryCov_9fa48("2439");
                    if (stryMutAct_9fa48("2442") ? pattern[mid] < 0 && pattern[mid] > label : stryMutAct_9fa48("2441") ? false : stryMutAct_9fa48("2440") ? true : (stryCov_9fa48("2440", "2441", "2442"), (stryMutAct_9fa48("2445") ? pattern[mid] >= 0 : stryMutAct_9fa48("2444") ? pattern[mid] <= 0 : stryMutAct_9fa48("2443") ? false : (stryCov_9fa48("2443", "2444", "2445"), pattern[mid] < 0)) || (stryMutAct_9fa48("2448") ? pattern[mid] <= label : stryMutAct_9fa48("2447") ? pattern[mid] >= label : stryMutAct_9fa48("2446") ? false : (stryCov_9fa48("2446", "2447", "2448"), pattern[mid] > label)))) {
                      if (stryMutAct_9fa48("2449")) {
                        {}
                      } else {
                        stryCov_9fa48("2449");
                        fillSymmetric(used, result, group, rightPos, stryMutAct_9fa48("2450") ? +1 : (stryCov_9fa48("2450"), -1), mid);
                        stryMutAct_9fa48("2451") ? rightPos += group.length : (stryCov_9fa48("2451"), rightPos -= group.length);
                        break;
                      }
                    }
                  }
                }
              }
            } else if (stryMutAct_9fa48("2453") ? false : stryMutAct_9fa48("2452") ? true : (stryCov_9fa48("2452", "2453"), endsAtRight)) {
              if (stryMutAct_9fa48("2454")) {
                {}
              } else {
                stryCov_9fa48("2454");
                stryMutAct_9fa48("2455") ? rightPos += group.length : (stryCov_9fa48("2455"), rightPos -= group.length);
                fillLinear(used, result, group, stryMutAct_9fa48("2456") ? rightPos - 1 : (stryCov_9fa48("2456"), rightPos + 1), 1);
              }
            } else {
              if (stryMutAct_9fa48("2457")) {
                {}
              } else {
                stryCov_9fa48("2457");
                fillLinear(used, result, group, rightPos, stryMutAct_9fa48("2458") ? +1 : (stryCov_9fa48("2458"), -1));
                stryMutAct_9fa48("2459") ? rightPos += group.length : (stryCov_9fa48("2459"), rightPos -= group.length);
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("2460")) {
            {}
          } else {
            stryCov_9fa48("2460");
            if (stryMutAct_9fa48("2463") ? startsAtLeft || endsAtRight : stryMutAct_9fa48("2462") ? false : stryMutAct_9fa48("2461") ? true : (stryCov_9fa48("2461", "2462", "2463"), startsAtLeft && endsAtRight)) {
              if (stryMutAct_9fa48("2464")) {
                {}
              } else {
                stryCov_9fa48("2464");
                for (let mid = group[0]; stryMutAct_9fa48("2467") ? mid >= nodeCount : stryMutAct_9fa48("2466") ? mid <= nodeCount : stryMutAct_9fa48("2465") ? false : (stryCov_9fa48("2465", "2466", "2467"), mid < nodeCount); stryMutAct_9fa48("2468") ? mid-- : (stryCov_9fa48("2468"), mid++)) {
                  if (stryMutAct_9fa48("2469")) {
                    {}
                  } else {
                    stryCov_9fa48("2469");
                    if (stryMutAct_9fa48("2472") ? pattern[mid] < 0 && pattern[mid] > label : stryMutAct_9fa48("2471") ? false : stryMutAct_9fa48("2470") ? true : (stryCov_9fa48("2470", "2471", "2472"), (stryMutAct_9fa48("2475") ? pattern[mid] >= 0 : stryMutAct_9fa48("2474") ? pattern[mid] <= 0 : stryMutAct_9fa48("2473") ? false : (stryCov_9fa48("2473", "2474", "2475"), pattern[mid] < 0)) || (stryMutAct_9fa48("2478") ? pattern[mid] <= label : stryMutAct_9fa48("2477") ? pattern[mid] >= label : stryMutAct_9fa48("2476") ? false : (stryCov_9fa48("2476", "2477", "2478"), pattern[mid] > label)))) {
                      if (stryMutAct_9fa48("2479")) {
                        {}
                      } else {
                        stryCov_9fa48("2479");
                        fillSymmetric(used, result, group, leftPos, 1, mid);
                        stryMutAct_9fa48("2480") ? leftPos -= group.length : (stryCov_9fa48("2480"), leftPos += group.length);
                        break;
                      }
                    }
                  }
                }
              }
            } else if (stryMutAct_9fa48("2482") ? false : stryMutAct_9fa48("2481") ? true : (stryCov_9fa48("2481", "2482"), endsAtRight)) {
              if (stryMutAct_9fa48("2483")) {
                {}
              } else {
                stryCov_9fa48("2483");
                stryMutAct_9fa48("2484") ? leftPos -= group.length : (stryCov_9fa48("2484"), leftPos += group.length);
                fillLinear(used, result, group, stryMutAct_9fa48("2485") ? leftPos + 1 : (stryCov_9fa48("2485"), leftPos - 1), stryMutAct_9fa48("2486") ? +1 : (stryCov_9fa48("2486"), -1));
              }
            } else {
              if (stryMutAct_9fa48("2487")) {
                {}
              } else {
                stryCov_9fa48("2487");
                fillLinear(used, result, group, leftPos, 1);
                stryMutAct_9fa48("2488") ? leftPos -= group.length : (stryCov_9fa48("2488"), leftPos += group.length);
              }
            }
          }
        }
      }
    }
    const negOneGroup = positionGroups[stryMutAct_9fa48("2489") ? +1 : (stryCov_9fa48("2489"), -1)];
    if (stryMutAct_9fa48("2491") ? false : stryMutAct_9fa48("2490") ? true : (stryCov_9fa48("2490", "2491"), negOneGroup)) result[negOneGroup[0]] = leftPos;
    return result;
  }
}
function fillLinear(used, result, indices, startValue, step) {
  if (stryMutAct_9fa48("2492")) {
    {}
  } else {
    stryCov_9fa48("2492");
    for (let k = 0; stryMutAct_9fa48("2495") ? k >= indices.length : stryMutAct_9fa48("2494") ? k <= indices.length : stryMutAct_9fa48("2493") ? false : (stryCov_9fa48("2493", "2494", "2495"), k < indices.length); stryMutAct_9fa48("2496") ? k-- : (stryCov_9fa48("2496"), k++)) {
      if (stryMutAct_9fa48("2497")) {
        {}
      } else {
        stryCov_9fa48("2497");
        result[indices[k]] = startValue;
        used[indices[k]] = stryMutAct_9fa48("2498") ? false : (stryCov_9fa48("2498"), true);
        stryMutAct_9fa48("2499") ? startValue -= step : (stryCov_9fa48("2499"), startValue += step);
      }
    }
  }
}
function fillSymmetric(used, result, indices, startValue, step, midIndex) {
  if (stryMutAct_9fa48("2500")) {
    {}
  } else {
    stryCov_9fa48("2500");
    let i = 0,
      j = stryMutAct_9fa48("2501") ? indices.length + 1 : (stryCov_9fa48("2501"), indices.length - 1);
    while (stryMutAct_9fa48("2504") ? indices[i] >= midIndex : stryMutAct_9fa48("2503") ? indices[i] <= midIndex : stryMutAct_9fa48("2502") ? false : (stryCov_9fa48("2502", "2503", "2504"), indices[i] < midIndex)) {
      if (stryMutAct_9fa48("2505")) {
        {}
      } else {
        stryCov_9fa48("2505");
        used[indices[i]] = stryMutAct_9fa48("2506") ? false : (stryCov_9fa48("2506"), true);
        result[indices[stryMutAct_9fa48("2507") ? i-- : (stryCov_9fa48("2507"), i++)]] = startValue;
        stryMutAct_9fa48("2508") ? startValue -= step : (stryCov_9fa48("2508"), startValue += step);
      }
    }
    while (stryMutAct_9fa48("2511") ? indices[j] <= midIndex : stryMutAct_9fa48("2510") ? indices[j] >= midIndex : stryMutAct_9fa48("2509") ? false : (stryCov_9fa48("2509", "2510", "2511"), indices[j] > midIndex)) {
      if (stryMutAct_9fa48("2512")) {
        {}
      } else {
        stryCov_9fa48("2512");
        used[indices[j]] = stryMutAct_9fa48("2513") ? false : (stryCov_9fa48("2513"), true);
        result[indices[stryMutAct_9fa48("2514") ? j++ : (stryCov_9fa48("2514"), j--)]] = startValue;
        stryMutAct_9fa48("2515") ? startValue -= step : (stryCov_9fa48("2515"), startValue += step);
      }
    }
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [3, [1, 1, -1]], expected: [3, 2, 1] },
//         { input: [5, [1, -1, 1, 2, 1]], expected: [4, 3, 5, 1, 2] },
//         { input: [8, [3, 1, 2, 1, -1, 1, 1, 2]], expected: [6, 7, 2, 4, 3, 8, 5, 1] },
//         { input: [7, [1, 1, 1, -1, 1, 1, 1]], expected: [6, 5, 2, 1, 3, 4, 7] },
//         { input: [5, [1, 1, 1, 1, -1]], expected: [5, 4, 3, 2, 1] },
//         { input: [5, [-1, 1, 1, 1, 1]], expected: [1, 2, 3, 4, 5] },
//         { input: [5, [-1, 1, 2, 1, 2]], expected: [4, 5, 2, 3, 1] },
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { input, expected } = testCases[i];
//         const result = solve(...input);
//         const isEqual = result.join(',') === expected.join(',');

//         console.log(`Test Case ${i + 1}: ${isEqual ? '✅ Passed' : '❌ Failed'}`);
//         if (!isEqual) {
//             console.log(`  Input: ${input[0]}, ${JSON.stringify(input[1])}`);
//             console.log(`  Expected: ${expected}`);
//             console.log(`  Got:      ${result}`);
//         }
//     }
// }

// testing_test();

//ok. output can many. solution verified.