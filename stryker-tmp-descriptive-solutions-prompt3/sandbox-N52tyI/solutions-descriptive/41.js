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
class FastQueue {
  constructor() {
    if (stryMutAct_9fa48("2516")) {
      {}
    } else {
      stryCov_9fa48("2516");
      this.data = {};
      this.front = 0;
      this.back = stryMutAct_9fa48("2517") ? +1 : (stryCov_9fa48("2517"), -1);
    }
  }
  push(...values) {
    if (stryMutAct_9fa48("2518")) {
      {}
    } else {
      stryCov_9fa48("2518");
      let i = 0;
      if (stryMutAct_9fa48("2521") ? false : stryMutAct_9fa48("2520") ? true : stryMutAct_9fa48("2519") ? this.length : (stryCov_9fa48("2519", "2520", "2521"), !this.length)) {
        if (stryMutAct_9fa48("2522")) {
          {}
        } else {
          stryCov_9fa48("2522");
          this.front = this.back = 0;
          this.data[this.front] = values[stryMutAct_9fa48("2523") ? i-- : (stryCov_9fa48("2523"), i++)];
        }
      }
      for (; stryMutAct_9fa48("2526") ? i >= values.length : stryMutAct_9fa48("2525") ? i <= values.length : stryMutAct_9fa48("2524") ? false : (stryCov_9fa48("2524", "2525", "2526"), i < values.length); stryMutAct_9fa48("2527") ? i-- : (stryCov_9fa48("2527"), i++)) {
        if (stryMutAct_9fa48("2528")) {
          {}
        } else {
          stryCov_9fa48("2528");
          this.data[stryMutAct_9fa48("2529") ? --this.back : (stryCov_9fa48("2529"), ++this.back)] = values[i];
        }
      }
    }
  }
  unshift(...values) {
    if (stryMutAct_9fa48("2530")) {
      {}
    } else {
      stryCov_9fa48("2530");
      let i = 0;
      if (stryMutAct_9fa48("2533") ? false : stryMutAct_9fa48("2532") ? true : stryMutAct_9fa48("2531") ? this.length : (stryCov_9fa48("2531", "2532", "2533"), !this.length)) {
        if (stryMutAct_9fa48("2534")) {
          {}
        } else {
          stryCov_9fa48("2534");
          this.front = this.back = 0;
          this.data[this.front] = values[stryMutAct_9fa48("2535") ? i-- : (stryCov_9fa48("2535"), i++)];
        }
      }
      for (; stryMutAct_9fa48("2538") ? i >= values.length : stryMutAct_9fa48("2537") ? i <= values.length : stryMutAct_9fa48("2536") ? false : (stryCov_9fa48("2536", "2537", "2538"), i < values.length); stryMutAct_9fa48("2539") ? i-- : (stryCov_9fa48("2539"), i++)) {
        if (stryMutAct_9fa48("2540")) {
          {}
        } else {
          stryCov_9fa48("2540");
          this.data[stryMutAct_9fa48("2541") ? ++this.front : (stryCov_9fa48("2541"), --this.front)] = values[i];
        }
      }
    }
  }
  pop() {
    if (stryMutAct_9fa48("2542")) {
      {}
    } else {
      stryCov_9fa48("2542");
      const value = this.data[this.back];
      delete this.data[this.back];
      stryMutAct_9fa48("2543") ? this.back++ : (stryCov_9fa48("2543"), this.back--);
      return value;
    }
  }
  shift() {
    if (stryMutAct_9fa48("2544")) {
      {}
    } else {
      stryCov_9fa48("2544");
      const value = this.data[this.front];
      delete this.data[this.front];
      stryMutAct_9fa48("2545") ? this.front-- : (stryCov_9fa48("2545"), this.front++);
      return value;
    }
  }
  get length() {
    if (stryMutAct_9fa48("2546")) {
      {}
    } else {
      stryCov_9fa48("2546");
      return (stryMutAct_9fa48("2550") ? this.front <= this.back : stryMutAct_9fa48("2549") ? this.front >= this.back : stryMutAct_9fa48("2548") ? false : stryMutAct_9fa48("2547") ? true : (stryCov_9fa48("2547", "2548", "2549", "2550"), this.front > this.back)) ? 0 : stryMutAct_9fa48("2551") ? this.back - this.front - 1 : (stryCov_9fa48("2551"), (stryMutAct_9fa48("2552") ? this.back + this.front : (stryCov_9fa48("2552"), this.back - this.front)) + 1);
    }
  }
  get(index) {
    if (stryMutAct_9fa48("2553")) {
      {}
    } else {
      stryCov_9fa48("2553");
      return this.data[stryMutAct_9fa48("2554") ? this.front - index : (stryCov_9fa48("2554"), this.front + index)];
    }
  }
  getLast() {
    if (stryMutAct_9fa48("2555")) {
      {}
    } else {
      stryCov_9fa48("2555");
      return this.data[this.back];
    }
  }
  forEach(callback) {
    if (stryMutAct_9fa48("2556")) {
      {}
    } else {
      stryCov_9fa48("2556");
      for (let i = this.front; stryMutAct_9fa48("2559") ? i > this.back : stryMutAct_9fa48("2558") ? i < this.back : stryMutAct_9fa48("2557") ? false : (stryCov_9fa48("2557", "2558", "2559"), i <= this.back); stryMutAct_9fa48("2560") ? i-- : (stryCov_9fa48("2560"), i++)) {
        if (stryMutAct_9fa48("2561")) {
          {}
        } else {
          stryCov_9fa48("2561");
          const result = callback(this.data[i], stryMutAct_9fa48("2562") ? i + this.front : (stryCov_9fa48("2562"), i - this.front));
          if (stryMutAct_9fa48("2565") ? result !== false : stryMutAct_9fa48("2564") ? false : stryMutAct_9fa48("2563") ? true : (stryCov_9fa48("2563", "2564", "2565"), result === (stryMutAct_9fa48("2566") ? true : (stryCov_9fa48("2566"), false)))) break;
        }
      }
    }
  }
}
export function solve(arraySize, array, queries) {
  if (stryMutAct_9fa48("2567")) {
    {}
  } else {
    stryCov_9fa48("2567");
    const triangleCounts = stryMutAct_9fa48("2568") ? Array().fill(0) : (stryCov_9fa48("2568"), Array(stryMutAct_9fa48("2569") ? arraySize - 1 : (stryCov_9fa48("2569"), arraySize + 1)).fill(0));
    for (let i = 1; stryMutAct_9fa48("2572") ? i > arraySize : stryMutAct_9fa48("2571") ? i < arraySize : stryMutAct_9fa48("2570") ? false : (stryCov_9fa48("2570", "2571", "2572"), i <= arraySize); stryMutAct_9fa48("2573") ? i-- : (stryCov_9fa48("2573"), i++)) {
      if (stryMutAct_9fa48("2574")) {
        {}
      } else {
        stryCov_9fa48("2574");
        triangleCounts[i] = stryMutAct_9fa48("2575") ? arraySize + 1 + i : (stryCov_9fa48("2575"), (stryMutAct_9fa48("2576") ? arraySize - 1 : (stryCov_9fa48("2576"), arraySize + 1)) - i);
      }
    }
    const trianglePrefix = stryMutAct_9fa48("2577") ? Array().fill(0) : (stryCov_9fa48("2577"), Array(stryMutAct_9fa48("2578") ? arraySize - 2 : (stryCov_9fa48("2578"), arraySize + 2)).fill(0));
    for (let i = 1; stryMutAct_9fa48("2581") ? i > arraySize : stryMutAct_9fa48("2580") ? i < arraySize : stryMutAct_9fa48("2579") ? false : (stryCov_9fa48("2579", "2580", "2581"), i <= arraySize); stryMutAct_9fa48("2582") ? i-- : (stryCov_9fa48("2582"), i++)) {
      if (stryMutAct_9fa48("2583")) {
        {}
      } else {
        stryCov_9fa48("2583");
        trianglePrefix[i] = stryMutAct_9fa48("2584") ? trianglePrefix[i - 1] - triangleCounts[i] : (stryCov_9fa48("2584"), trianglePrefix[stryMutAct_9fa48("2585") ? i + 1 : (stryCov_9fa48("2585"), i - 1)] + triangleCounts[i]);
      }
    }
    let totalSum = 0;
    for (let i = 0; stryMutAct_9fa48("2588") ? i >= arraySize : stryMutAct_9fa48("2587") ? i <= arraySize : stryMutAct_9fa48("2586") ? false : (stryCov_9fa48("2586", "2587", "2588"), i < arraySize); stryMutAct_9fa48("2589") ? i-- : (stryCov_9fa48("2589"), i++)) {
      if (stryMutAct_9fa48("2590")) {
        {}
      } else {
        stryCov_9fa48("2590");
        stryMutAct_9fa48("2591") ? totalSum -= (arraySize - i) * array[i] : (stryCov_9fa48("2591"), totalSum += stryMutAct_9fa48("2592") ? (arraySize - i) / array[i] : (stryCov_9fa48("2592"), (stryMutAct_9fa48("2593") ? arraySize + i : (stryCov_9fa48("2593"), arraySize - i)) * array[i]));
      }
    }
    const triangleWeightedSum = stryMutAct_9fa48("2594") ? Array().fill(0) : (stryCov_9fa48("2594"), Array(stryMutAct_9fa48("2595") ? arraySize - 1 : (stryCov_9fa48("2595"), arraySize + 1)).fill(0));
    let currentSum = totalSum;
    for (let i = 1; stryMutAct_9fa48("2598") ? i > arraySize : stryMutAct_9fa48("2597") ? i < arraySize : stryMutAct_9fa48("2596") ? false : (stryCov_9fa48("2596", "2597", "2598"), i <= arraySize); stryMutAct_9fa48("2599") ? i-- : (stryCov_9fa48("2599"), i++)) {
      if (stryMutAct_9fa48("2600")) {
        {}
      } else {
        stryCov_9fa48("2600");
        triangleWeightedSum[i] = currentSum;
        stryMutAct_9fa48("2601") ? currentSum += (arraySize - i + 1) * array[i - 1] : (stryCov_9fa48("2601"), currentSum -= stryMutAct_9fa48("2602") ? (arraySize - i + 1) / array[i - 1] : (stryCov_9fa48("2602"), (stryMutAct_9fa48("2603") ? arraySize - i - 1 : (stryCov_9fa48("2603"), (stryMutAct_9fa48("2604") ? arraySize + i : (stryCov_9fa48("2604"), arraySize - i)) + 1)) * array[stryMutAct_9fa48("2605") ? i + 1 : (stryCov_9fa48("2605"), i - 1)]));
      }
    }
    const prefixTriangleSum = stryMutAct_9fa48("2606") ? Array().fill(0n) : (stryCov_9fa48("2606"), Array(stryMutAct_9fa48("2607") ? arraySize - 2 : (stryCov_9fa48("2607"), arraySize + 2)).fill(0n));
    for (let i = 1; stryMutAct_9fa48("2610") ? i > arraySize : stryMutAct_9fa48("2609") ? i < arraySize : stryMutAct_9fa48("2608") ? false : (stryCov_9fa48("2608", "2609", "2610"), i <= arraySize); stryMutAct_9fa48("2611") ? i-- : (stryCov_9fa48("2611"), i++)) {
      if (stryMutAct_9fa48("2612")) {
        {}
      } else {
        stryCov_9fa48("2612");
        prefixTriangleSum[i] = stryMutAct_9fa48("2613") ? prefixTriangleSum[i - 1] - BigInt(triangleWeightedSum[i]) : (stryCov_9fa48("2613"), prefixTriangleSum[stryMutAct_9fa48("2614") ? i + 1 : (stryCov_9fa48("2614"), i - 1)] + BigInt(triangleWeightedSum[i]));
      }
    }
    const prefixArray = stryMutAct_9fa48("2615") ? Array().fill(0n) : (stryCov_9fa48("2615"), Array(stryMutAct_9fa48("2616") ? arraySize - 1 : (stryCov_9fa48("2616"), arraySize + 1)).fill(0n));
    for (let i = 1; stryMutAct_9fa48("2619") ? i > arraySize : stryMutAct_9fa48("2618") ? i < arraySize : stryMutAct_9fa48("2617") ? false : (stryCov_9fa48("2617", "2618", "2619"), i <= arraySize); stryMutAct_9fa48("2620") ? i-- : (stryCov_9fa48("2620"), i++)) {
      if (stryMutAct_9fa48("2621")) {
        {}
      } else {
        stryCov_9fa48("2621");
        prefixArray[i] = stryMutAct_9fa48("2622") ? prefixArray[i - 1] - BigInt(array[i - 1]) : (stryCov_9fa48("2622"), prefixArray[stryMutAct_9fa48("2623") ? i + 1 : (stryCov_9fa48("2623"), i - 1)] + BigInt(array[stryMutAct_9fa48("2624") ? i + 1 : (stryCov_9fa48("2624"), i - 1)]));
      }
    }
    const prefixOfPrefix = stryMutAct_9fa48("2625") ? Array().fill(0n) : (stryCov_9fa48("2625"), Array(stryMutAct_9fa48("2626") ? arraySize - 2 : (stryCov_9fa48("2626"), arraySize + 2)).fill(0n));
    for (let i = 1; stryMutAct_9fa48("2629") ? i > arraySize : stryMutAct_9fa48("2628") ? i < arraySize : stryMutAct_9fa48("2627") ? false : (stryCov_9fa48("2627", "2628", "2629"), i <= arraySize); stryMutAct_9fa48("2630") ? i-- : (stryCov_9fa48("2630"), i++)) {
      if (stryMutAct_9fa48("2631")) {
        {}
      } else {
        stryCov_9fa48("2631");
        prefixOfPrefix[i] = stryMutAct_9fa48("2632") ? prefixOfPrefix[i - 1] - prefixArray[i] : (stryCov_9fa48("2632"), prefixOfPrefix[stryMutAct_9fa48("2633") ? i + 1 : (stryCov_9fa48("2633"), i - 1)] + prefixArray[i]);
      }
    }
    const output = stryMutAct_9fa48("2634") ? ["Stryker was here"] : (stryCov_9fa48("2634"), []);
    for (const [left, right] of queries) {
      if (stryMutAct_9fa48("2635")) {
        {}
      } else {
        stryCov_9fa48("2635");
        const result = stryMutAct_9fa48("2636") ? calculate(right) + calculate(left - 1) : (stryCov_9fa48("2636"), calculate(right) - calculate(stryMutAct_9fa48("2637") ? left + 1 : (stryCov_9fa48("2637"), left - 1)));
        output.push(result.toString());
      }
    }
    return output;
    function binarySearch(low, high, condition) {
      if (stryMutAct_9fa48("2638")) {
        {}
      } else {
        stryCov_9fa48("2638");
        while (stryMutAct_9fa48("2641") ? low > high : stryMutAct_9fa48("2640") ? low < high : stryMutAct_9fa48("2639") ? false : (stryCov_9fa48("2639", "2640", "2641"), low <= high)) {
          if (stryMutAct_9fa48("2642")) {
            {}
          } else {
            stryCov_9fa48("2642");
            const mid = Math.floor(stryMutAct_9fa48("2643") ? (low + high) * 2 : (stryCov_9fa48("2643"), (stryMutAct_9fa48("2644") ? low - high : (stryCov_9fa48("2644"), low + high)) / 2));
            if (stryMutAct_9fa48("2646") ? false : stryMutAct_9fa48("2645") ? true : (stryCov_9fa48("2645", "2646"), condition(mid))) {
              if (stryMutAct_9fa48("2647")) {
                {}
              } else {
                stryCov_9fa48("2647");
                low = stryMutAct_9fa48("2648") ? mid - 1 : (stryCov_9fa48("2648"), mid + 1);
              }
            } else {
              if (stryMutAct_9fa48("2649")) {
                {}
              } else {
                stryCov_9fa48("2649");
                high = stryMutAct_9fa48("2650") ? mid + 1 : (stryCov_9fa48("2650"), mid - 1);
              }
            }
          }
        }
        return high;
      }
    }
    function calculate(position) {
      if (stryMutAct_9fa48("2651")) {
        {}
      } else {
        stryCov_9fa48("2651");
        if (stryMutAct_9fa48("2655") ? position > 0 : stryMutAct_9fa48("2654") ? position < 0 : stryMutAct_9fa48("2653") ? false : stryMutAct_9fa48("2652") ? true : (stryCov_9fa48("2652", "2653", "2654", "2655"), position <= 0)) return 0n;
        const baseIndex = binarySearch(1, arraySize, stryMutAct_9fa48("2656") ? () => undefined : (stryCov_9fa48("2656"), i => stryMutAct_9fa48("2660") ? trianglePrefix[i] > position : stryMutAct_9fa48("2659") ? trianglePrefix[i] < position : stryMutAct_9fa48("2658") ? false : stryMutAct_9fa48("2657") ? true : (stryCov_9fa48("2657", "2658", "2659", "2660"), trianglePrefix[i] <= position)));
        const remaining = stryMutAct_9fa48("2661") ? position + trianglePrefix[baseIndex] : (stryCov_9fa48("2661"), position - trianglePrefix[baseIndex]);
        let startRow, endCol;
        if (stryMutAct_9fa48("2663") ? false : stryMutAct_9fa48("2662") ? true : (stryCov_9fa48("2662", "2663"), remaining)) {
          if (stryMutAct_9fa48("2664")) {
            {}
          } else {
            stryCov_9fa48("2664");
            startRow = stryMutAct_9fa48("2665") ? baseIndex - 1 : (stryCov_9fa48("2665"), baseIndex + 1);
            endCol = stryMutAct_9fa48("2666") ? baseIndex - remaining : (stryCov_9fa48("2666"), baseIndex + remaining);
          }
        } else {
          if (stryMutAct_9fa48("2667")) {
            {}
          } else {
            stryCov_9fa48("2667");
            startRow = baseIndex;
            endCol = arraySize;
          }
        }
        return stryMutAct_9fa48("2668") ? prefixTriangleSum[startRow - 1] + (prefixOfPrefix[endCol] - prefixOfPrefix[startRow - 1]) + prefixArray[startRow - 1] * BigInt(endCol - startRow + 1) : (stryCov_9fa48("2668"), (stryMutAct_9fa48("2669") ? prefixTriangleSum[startRow - 1] - (prefixOfPrefix[endCol] - prefixOfPrefix[startRow - 1]) : (stryCov_9fa48("2669"), prefixTriangleSum[stryMutAct_9fa48("2670") ? startRow + 1 : (stryCov_9fa48("2670"), startRow - 1)] + (stryMutAct_9fa48("2671") ? prefixOfPrefix[endCol] + prefixOfPrefix[startRow - 1] : (stryCov_9fa48("2671"), prefixOfPrefix[endCol] - prefixOfPrefix[stryMutAct_9fa48("2672") ? startRow + 1 : (stryCov_9fa48("2672"), startRow - 1)])))) - (stryMutAct_9fa48("2673") ? prefixArray[startRow - 1] / BigInt(endCol - startRow + 1) : (stryCov_9fa48("2673"), prefixArray[stryMutAct_9fa48("2674") ? startRow + 1 : (stryCov_9fa48("2674"), startRow - 1)] * BigInt(stryMutAct_9fa48("2675") ? endCol - startRow - 1 : (stryCov_9fa48("2675"), (stryMutAct_9fa48("2676") ? endCol + startRow : (stryCov_9fa48("2676"), endCol - startRow)) + 1)))));
      }
    }
  }
}

// Test function
// function testing_test() {
//     const testCases = [
//         {
//             input: {
//                 n: 4,
//                 arr: [1, 2, 5, 10],
//                 queries: [
//                     [1,1], [1,2], [1,3], [1,4], [1,5], [1,10],
//                     [5,10], [6,10], [2,8], [3,4], [3,10], [3,8],
//                     [5,6], [5,5], [1,8]
//                 ]
//             },
//             expected: [
//                 "1", "4", "12", "30", "32", "86",
//                 "56", "54", "60", "26", "82", "57",
//                 "9", "2", "61"
//             ]
//         }
//     ];

//     testCases.forEach((testCase, idx) => {
//         const {n, arr, queries} = testCase.input;
//         const results = solve(n, arr, queries);

//         console.log(`Test Case ${idx + 1}:`);
//         console.log(`Input:`);
//         console.log(`n = ${n}, arr = [${arr}]`);
//         console.log(`queries = [${queries.map(q => `[${q}]`).join(', ')}]`);
//         console.log(`Expected Output:\n${testCase.expected.join('\n')}`);
//         console.log(`Actual Output:\n${results.join('\n')}`);

//         const passed = JSON.stringify(results) === JSON.stringify(testCase.expected);
//         console.log(passed ? '✅ PASSED' : '❌ FAILED');
//         console.log();
//     });
// }

// // Run tests
// testing_test();