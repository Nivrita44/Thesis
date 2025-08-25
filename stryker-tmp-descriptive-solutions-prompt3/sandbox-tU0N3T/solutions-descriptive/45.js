//findMinimumTimeAtNodeOne -> solve
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
export function solve(nodes, edgesCount, edgeList, initialTime, timeThreshold1, timeThreshold2) {
  if (stryMutAct_9fa48("2972")) {
    {}
  } else {
    stryCov_9fa48("2972");
    const adjacency = {};
    for (let [u, v, l1, l2] of edgeList) {
      if (stryMutAct_9fa48("2973")) {
        {}
      } else {
        stryCov_9fa48("2973");
        if (stryMutAct_9fa48("2976") ? false : stryMutAct_9fa48("2975") ? true : stryMutAct_9fa48("2974") ? adjacency[u] : (stryCov_9fa48("2974", "2975", "2976"), !adjacency[u])) adjacency[u] = stryMutAct_9fa48("2977") ? ["Stryker was here"] : (stryCov_9fa48("2977"), []);
        if (stryMutAct_9fa48("2980") ? false : stryMutAct_9fa48("2979") ? true : stryMutAct_9fa48("2978") ? adjacency[v] : (stryCov_9fa48("2978", "2979", "2980"), !adjacency[v])) adjacency[v] = stryMutAct_9fa48("2981") ? ["Stryker was here"] : (stryCov_9fa48("2981"), []);
        adjacency[u].push(stryMutAct_9fa48("2982") ? [] : (stryCov_9fa48("2982"), [v, l1, l2]));
        adjacency[v].push(stryMutAct_9fa48("2983") ? [] : (stryCov_9fa48("2983"), [u, l1, l2]));
      }
    }
    const visited = stryMutAct_9fa48("2984") ? Array().fill(false) : (stryCov_9fa48("2984"), Array(stryMutAct_9fa48("2985") ? nodes - 1 : (stryCov_9fa48("2985"), nodes + 1)).fill(stryMutAct_9fa48("2986") ? true : (stryCov_9fa48("2986"), false)));
    const maxTime = stryMutAct_9fa48("2987") ? Array().fill(-1) : (stryCov_9fa48("2987"), Array(stryMutAct_9fa48("2988") ? nodes - 1 : (stryCov_9fa48("2988"), nodes + 1)).fill(stryMutAct_9fa48("2989") ? +1 : (stryCov_9fa48("2989"), -1)));
    const heap = stryMutAct_9fa48("2990") ? [] : (stryCov_9fa48("2990"), [stryMutAct_9fa48("2991") ? [] : (stryCov_9fa48("2991"), [nodes, initialTime])]);
    maxTime[nodes] = initialTime;
    const swap = (i, j) => {
      if (stryMutAct_9fa48("2992")) {
        {}
      } else {
        stryCov_9fa48("2992");
        [heap[i], heap[j]] = stryMutAct_9fa48("2993") ? [] : (stryCov_9fa48("2993"), [heap[j], heap[i]]);
      }
    };
    const isGreater = stryMutAct_9fa48("2994") ? () => undefined : (stryCov_9fa48("2994"), (() => {
      const isGreater = (i, j) => stryMutAct_9fa48("2998") ? heap[i][1] <= heap[j][1] : stryMutAct_9fa48("2997") ? heap[i][1] >= heap[j][1] : stryMutAct_9fa48("2996") ? false : stryMutAct_9fa48("2995") ? true : (stryCov_9fa48("2995", "2996", "2997", "2998"), heap[i][1] > heap[j][1]);
      return isGreater;
    })());
    const siftUp = i => {
      if (stryMutAct_9fa48("2999")) {
        {}
      } else {
        stryCov_9fa48("2999");
        if (stryMutAct_9fa48("3002") ? i !== 0 : stryMutAct_9fa48("3001") ? false : stryMutAct_9fa48("3000") ? true : (stryCov_9fa48("3000", "3001", "3002"), i === 0)) return;
        const parent = Math.floor(stryMutAct_9fa48("3003") ? (i - 1) * 2 : (stryCov_9fa48("3003"), (stryMutAct_9fa48("3004") ? i + 1 : (stryCov_9fa48("3004"), i - 1)) / 2));
        if (stryMutAct_9fa48("3006") ? false : stryMutAct_9fa48("3005") ? true : (stryCov_9fa48("3005", "3006"), isGreater(i, parent))) {
          if (stryMutAct_9fa48("3007")) {
            {}
          } else {
            stryCov_9fa48("3007");
            swap(i, parent);
            siftUp(parent);
          }
        }
      }
    };
    const siftDown = i => {
      if (stryMutAct_9fa48("3008")) {
        {}
      } else {
        stryCov_9fa48("3008");
        const left = stryMutAct_9fa48("3009") ? 2 * i - 1 : (stryCov_9fa48("3009"), (stryMutAct_9fa48("3010") ? 2 / i : (stryCov_9fa48("3010"), 2 * i)) + 1);
        const right = stryMutAct_9fa48("3011") ? left - 1 : (stryCov_9fa48("3011"), left + 1);
        let largest = i;
        if (stryMutAct_9fa48("3014") ? left < heap.length || isGreater(left, largest) : stryMutAct_9fa48("3013") ? false : stryMutAct_9fa48("3012") ? true : (stryCov_9fa48("3012", "3013", "3014"), (stryMutAct_9fa48("3017") ? left >= heap.length : stryMutAct_9fa48("3016") ? left <= heap.length : stryMutAct_9fa48("3015") ? true : (stryCov_9fa48("3015", "3016", "3017"), left < heap.length)) && isGreater(left, largest))) largest = left;
        if (stryMutAct_9fa48("3020") ? right < heap.length || isGreater(right, largest) : stryMutAct_9fa48("3019") ? false : stryMutAct_9fa48("3018") ? true : (stryCov_9fa48("3018", "3019", "3020"), (stryMutAct_9fa48("3023") ? right >= heap.length : stryMutAct_9fa48("3022") ? right <= heap.length : stryMutAct_9fa48("3021") ? true : (stryCov_9fa48("3021", "3022", "3023"), right < heap.length)) && isGreater(right, largest))) largest = right;
        if (stryMutAct_9fa48("3026") ? largest === i : stryMutAct_9fa48("3025") ? false : stryMutAct_9fa48("3024") ? true : (stryCov_9fa48("3024", "3025", "3026"), largest !== i)) {
          if (stryMutAct_9fa48("3027")) {
            {}
          } else {
            stryCov_9fa48("3027");
            swap(i, largest);
            siftDown(largest);
          }
        }
      }
    };
    while (stryMutAct_9fa48("3029") ? !visited[1] || heap.length : stryMutAct_9fa48("3028") ? false : (stryCov_9fa48("3028", "3029"), (stryMutAct_9fa48("3030") ? visited[1] : (stryCov_9fa48("3030"), !visited[1])) && heap.length)) {
      if (stryMutAct_9fa48("3031")) {
        {}
      } else {
        stryCov_9fa48("3031");
        while (stryMutAct_9fa48("3033") ? heap.length || visited[heap[0][0]] : stryMutAct_9fa48("3032") ? false : (stryCov_9fa48("3032", "3033"), heap.length && visited[heap[0][0]])) {
          if (stryMutAct_9fa48("3034")) {
            {}
          } else {
            stryCov_9fa48("3034");
            swap(0, stryMutAct_9fa48("3035") ? heap.length + 1 : (stryCov_9fa48("3035"), heap.length - 1));
            heap.pop();
            siftDown(0);
          }
        }
        if (stryMutAct_9fa48("3038") ? heap.length !== 0 : stryMutAct_9fa48("3037") ? false : stryMutAct_9fa48("3036") ? true : (stryCov_9fa48("3036", "3037", "3038"), heap.length === 0)) return maxTime[1];
        const [currentNode, currentTime] = heap[0];
        swap(0, stryMutAct_9fa48("3039") ? heap.length + 1 : (stryCov_9fa48("3039"), heap.length - 1));
        heap.pop();
        siftDown(0);
        visited[currentNode] = stryMutAct_9fa48("3040") ? false : (stryCov_9fa48("3040"), true);
        const neighbors = stryMutAct_9fa48("3043") ? adjacency[currentNode] && [] : stryMutAct_9fa48("3042") ? false : stryMutAct_9fa48("3041") ? true : (stryCov_9fa48("3041", "3042", "3043"), adjacency[currentNode] || (stryMutAct_9fa48("3044") ? ["Stryker was here"] : (stryCov_9fa48("3044"), [])));
        for (let [neighbor, l1, l2] of neighbors) {
          if (stryMutAct_9fa48("3045")) {
            {}
          } else {
            stryCov_9fa48("3045");
            if (stryMutAct_9fa48("3048") ? false : stryMutAct_9fa48("3047") ? true : stryMutAct_9fa48("3046") ? visited[neighbor] : (stryCov_9fa48("3046", "3047", "3048"), !visited[neighbor])) {
              if (stryMutAct_9fa48("3049")) {
                {}
              } else {
                stryCov_9fa48("3049");
                let newTime = stryMutAct_9fa48("3050") ? +1 : (stryCov_9fa48("3050"), -1);
                if (stryMutAct_9fa48("3054") ? currentTime <= timeThreshold2 : stryMutAct_9fa48("3053") ? currentTime >= timeThreshold2 : stryMutAct_9fa48("3052") ? false : stryMutAct_9fa48("3051") ? true : (stryCov_9fa48("3051", "3052", "3053", "3054"), currentTime > timeThreshold2)) {
                  if (stryMutAct_9fa48("3055")) {
                    {}
                  } else {
                    stryCov_9fa48("3055");
                    if (stryMutAct_9fa48("3059") ? currentTime - l1 < timeThreshold2 : stryMutAct_9fa48("3058") ? currentTime - l1 > timeThreshold2 : stryMutAct_9fa48("3057") ? false : stryMutAct_9fa48("3056") ? true : (stryCov_9fa48("3056", "3057", "3058", "3059"), (stryMutAct_9fa48("3060") ? currentTime + l1 : (stryCov_9fa48("3060"), currentTime - l1)) >= timeThreshold2)) newTime = stryMutAct_9fa48("3061") ? currentTime + l1 : (stryCov_9fa48("3061"), currentTime - l1);else {
                      if (stryMutAct_9fa48("3062")) {
                        {}
                      } else {
                        stryCov_9fa48("3062");
                        if (stryMutAct_9fa48("3066") ? currentTime - l2 < 0 : stryMutAct_9fa48("3065") ? currentTime - l2 > 0 : stryMutAct_9fa48("3064") ? false : stryMutAct_9fa48("3063") ? true : (stryCov_9fa48("3063", "3064", "3065", "3066"), (stryMutAct_9fa48("3067") ? currentTime + l2 : (stryCov_9fa48("3067"), currentTime - l2)) >= 0)) newTime = stryMutAct_9fa48("3068") ? currentTime + l2 : (stryCov_9fa48("3068"), currentTime - l2);
                        if (stryMutAct_9fa48("3072") ? timeThreshold1 - l1 < 0 : stryMutAct_9fa48("3071") ? timeThreshold1 - l1 > 0 : stryMutAct_9fa48("3070") ? false : stryMutAct_9fa48("3069") ? true : (stryCov_9fa48("3069", "3070", "3071", "3072"), (stryMutAct_9fa48("3073") ? timeThreshold1 + l1 : (stryCov_9fa48("3073"), timeThreshold1 - l1)) >= 0)) newTime = stryMutAct_9fa48("3074") ? Math.min(newTime, timeThreshold1 - l1) : (stryCov_9fa48("3074"), Math.max(newTime, stryMutAct_9fa48("3075") ? timeThreshold1 + l1 : (stryCov_9fa48("3075"), timeThreshold1 - l1)));
                      }
                    }
                  }
                } else if (stryMutAct_9fa48("3079") ? currentTime < timeThreshold1 : stryMutAct_9fa48("3078") ? currentTime > timeThreshold1 : stryMutAct_9fa48("3077") ? false : stryMutAct_9fa48("3076") ? true : (stryCov_9fa48("3076", "3077", "3078", "3079"), currentTime >= timeThreshold1)) {
                  if (stryMutAct_9fa48("3080")) {
                    {}
                  } else {
                    stryCov_9fa48("3080");
                    if (stryMutAct_9fa48("3084") ? currentTime - l2 < 0 : stryMutAct_9fa48("3083") ? currentTime - l2 > 0 : stryMutAct_9fa48("3082") ? false : stryMutAct_9fa48("3081") ? true : (stryCov_9fa48("3081", "3082", "3083", "3084"), (stryMutAct_9fa48("3085") ? currentTime + l2 : (stryCov_9fa48("3085"), currentTime - l2)) >= 0)) newTime = stryMutAct_9fa48("3086") ? currentTime + l2 : (stryCov_9fa48("3086"), currentTime - l2);
                    if (stryMutAct_9fa48("3090") ? timeThreshold1 - l1 < 0 : stryMutAct_9fa48("3089") ? timeThreshold1 - l1 > 0 : stryMutAct_9fa48("3088") ? false : stryMutAct_9fa48("3087") ? true : (stryCov_9fa48("3087", "3088", "3089", "3090"), (stryMutAct_9fa48("3091") ? timeThreshold1 + l1 : (stryCov_9fa48("3091"), timeThreshold1 - l1)) >= 0)) newTime = stryMutAct_9fa48("3092") ? Math.min(newTime, timeThreshold1 - l1) : (stryCov_9fa48("3092"), Math.max(newTime, stryMutAct_9fa48("3093") ? timeThreshold1 + l1 : (stryCov_9fa48("3093"), timeThreshold1 - l1)));
                  }
                } else {
                  if (stryMutAct_9fa48("3094")) {
                    {}
                  } else {
                    stryCov_9fa48("3094");
                    if (stryMutAct_9fa48("3098") ? currentTime - l1 < 0 : stryMutAct_9fa48("3097") ? currentTime - l1 > 0 : stryMutAct_9fa48("3096") ? false : stryMutAct_9fa48("3095") ? true : (stryCov_9fa48("3095", "3096", "3097", "3098"), (stryMutAct_9fa48("3099") ? currentTime + l1 : (stryCov_9fa48("3099"), currentTime - l1)) >= 0)) newTime = stryMutAct_9fa48("3100") ? currentTime + l1 : (stryCov_9fa48("3100"), currentTime - l1);
                  }
                }
                if (stryMutAct_9fa48("3104") ? newTime <= maxTime[neighbor] : stryMutAct_9fa48("3103") ? newTime >= maxTime[neighbor] : stryMutAct_9fa48("3102") ? false : stryMutAct_9fa48("3101") ? true : (stryCov_9fa48("3101", "3102", "3103", "3104"), newTime > maxTime[neighbor])) {
                  if (stryMutAct_9fa48("3105")) {
                    {}
                  } else {
                    stryCov_9fa48("3105");
                    heap.push(stryMutAct_9fa48("3106") ? [] : (stryCov_9fa48("3106"), [neighbor, newTime]));
                    siftUp(stryMutAct_9fa48("3107") ? heap.length + 1 : (stryCov_9fa48("3107"), heap.length - 1));
                    maxTime[neighbor] = newTime;
                  }
                }
              }
            }
          }
        }
      }
    }
    return maxTime[1];
  }
}

// function testing_test() {
//     const testCases = [{
//             input: [5, 5, [
//                 [1, 5, 30, 100],
//                 [1, 2, 20, 50],
//                 [2, 3, 20, 50],
//                 [3, 4, 20, 50],
//                 [4, 5, 20, 50]
//             ], 100, 20, 80],
//             expected: 0,
//         },
//         {
//             input: [2, 1, [
//                 [1, 2, 55, 110]
//             ], 100, 50, 60],
//             expected: -1,
//         },
//         {
//             input: [4, 4, [
//                 [1, 2, 30, 100],
//                 [2, 4, 30, 100],
//                 [1, 3, 20, 50],
//                 [3, 4, 20, 50]
//             ], 100, 40, 60],
//             expected: 60,
//         },
//         {
//             input: [3, 3, [
//                 [1, 2, 1, 10],
//                 [2, 3, 10, 50],
//                 [1, 3, 20, 21]
//             ], 100, 80, 90],
//             expected: 80,
//         },
//         {
//             input: [3, 2, [
//                 [2, 1, 1, 3],
//                 [2, 3, 3, 4]
//             ], 58, 55, 57],
//             expected: 53,
//         },
//         {
//             input: [2, 1, [
//                 [2, 1, 6, 10]
//             ], 12, 9, 10],
//             expected: 3,
//         },
//         {
//             input: [5, 5, [
//                 [2, 1, 1, 8],
//                 [2, 3, 4, 8],
//                 [4, 2, 2, 4],
//                 [5, 3, 3, 4],
//                 [4, 5, 2, 6]
//             ], 8, 5, 6],
//             expected: 2,
//         },
//     ];

//     let allPassed = true;

//     for (let i = 0; i < testCases.length; i++) {
//         const { input, expected } = testCases[i];
//         const result = solve(...input);

//         const passed = result === expected;
//         console.log(`Test Case ${i + 1}: ${passed ? "✅ Passed" : "❌ Failed"}`);
//         if (!passed) {
//             console.log(`  Expected: ${expected}`);
//             console.log(`  Got: ${result}`);
//             allPassed = false;
//         }
//     }

//     if (allPassed) {
//         console.log("🎉 All test cases passed!");
//     }
// }

// testing_test();