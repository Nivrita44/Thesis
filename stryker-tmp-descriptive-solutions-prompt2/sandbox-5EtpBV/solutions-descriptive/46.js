//  function solve(k, sizes) {
//     const MAX_BIT = 20;
//     const sortedSizesDesc = [...sizes].sort((a, b) => b - a);

//     let result = 0;
//     for (let index = 0; index < k; index++) {
//         let currentSize = sortedSizesDesc[index];
//         for (let bitPos = MAX_BIT - 1; bitPos >= 0; bitPos--) {
//             const bitMask = 1 << bitPos;
//             if ((result & bitMask) === 0 && currentSize >= bitMask) {
//                 currentSize -= bitMask;
//                 result |= bitMask;
//             }
//         }
//     }
//     return result;
// }

// function testing_test() {
//     const tests = [
//         { k: 1, sizes: [1], expected: 1 },
//         { k: 2, sizes: [4, 6], expected: 7 },
//         { k: 1, sizes: [10], expected: 10 }
//     ];

//     for (let i = 0; i < tests.length; i++) {
//         const { k, sizes, expected } = tests[i];
//         const result = solve(k, sizes);
//         console.log(`Test case ${i + 1}: got=${result}, expected=${expected}`);
//         console.assert(result === expected, `Failed test case ${i + 1}`);
//     }
// }

// testing_test();

// export function solve(tests) {
//     const results = [];

//     for (const arr of tests) {
//         const n = arr.length;
//         if (n === 1) {
//             results.push('YES');
//             continue;
//         }

//         const ps = Array(n - 1);
//         const skip = Array(n).fill(0);

//         for (let i = n - 1; i >= 1; i--) {
//             const has = Array(i);
//             for (let j = 0; j < n; j++) {
//                 if (!skip[j]) {
//                     const r = arr[j] % i;
//                     if (has[r]) {
//                         ps[i - 1] = `${j + 1} ${has[r]}`;
//                         skip[j] = 1;
//                         break;
//                     } else {
//                         has[r] = j + 1;
//                     }
//                 }
//             }
//         }

//         const filteredPs = ps.filter(Boolean);
//         results.push('YES\n' + filteredPs.join('\n'));
//     }

//     return results;
// }
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
export function solve(...args) {
  if (stryMutAct_9fa48("3108")) {
    {}
  } else {
    stryCov_9fa48("3108");
    try {
      if (stryMutAct_9fa48("3109")) {
        {}
      } else {
        stryCov_9fa48("3109");
        // Handle solve(n, arr)
        if (stryMutAct_9fa48("3112") ? args.length === 2 && typeof args[0] === 'number' || Array.isArray(args[1]) : stryMutAct_9fa48("3111") ? false : stryMutAct_9fa48("3110") ? true : (stryCov_9fa48("3110", "3111", "3112"), (stryMutAct_9fa48("3114") ? args.length === 2 || typeof args[0] === 'number' : stryMutAct_9fa48("3113") ? true : (stryCov_9fa48("3113", "3114"), (stryMutAct_9fa48("3116") ? args.length !== 2 : stryMutAct_9fa48("3115") ? true : (stryCov_9fa48("3115", "3116"), args.length === 2)) && (stryMutAct_9fa48("3118") ? typeof args[0] !== 'number' : stryMutAct_9fa48("3117") ? true : (stryCov_9fa48("3117", "3118"), typeof args[0] === (stryMutAct_9fa48("3119") ? "" : (stryCov_9fa48("3119"), 'number')))))) && Array.isArray(args[1]))) {
          if (stryMutAct_9fa48("3120")) {
            {}
          } else {
            stryCov_9fa48("3120");
            const n = args[0];
            const arr = args[1];

            // Bitmask style if result should be a number (e.g., OR'ing top-k elements)
            if (stryMutAct_9fa48("3123") ? arr.length >= 0 || typeof arr[0] === 'number' : stryMutAct_9fa48("3122") ? false : stryMutAct_9fa48("3121") ? true : (stryCov_9fa48("3121", "3122", "3123"), (stryMutAct_9fa48("3126") ? arr.length < 0 : stryMutAct_9fa48("3125") ? arr.length > 0 : stryMutAct_9fa48("3124") ? true : (stryCov_9fa48("3124", "3125", "3126"), arr.length >= 0)) && (stryMutAct_9fa48("3128") ? typeof arr[0] !== 'number' : stryMutAct_9fa48("3127") ? true : (stryCov_9fa48("3127", "3128"), typeof arr[0] === (stryMutAct_9fa48("3129") ? "" : (stryCov_9fa48("3129"), 'number')))))) {
              if (stryMutAct_9fa48("3130")) {
                {}
              } else {
                stryCov_9fa48("3130");
                if (stryMutAct_9fa48("3133") ? n === 0 && arr.length === 0 : stryMutAct_9fa48("3132") ? false : stryMutAct_9fa48("3131") ? true : (stryCov_9fa48("3131", "3132", "3133"), (stryMutAct_9fa48("3135") ? n !== 0 : stryMutAct_9fa48("3134") ? false : (stryCov_9fa48("3134", "3135"), n === 0)) || (stryMutAct_9fa48("3137") ? arr.length !== 0 : stryMutAct_9fa48("3136") ? false : (stryCov_9fa48("3136", "3137"), arr.length === 0)))) return 0;
                let result = 0;
                for (let i = 0; stryMutAct_9fa48("3140") ? i >= Math.min(n, arr.length) : stryMutAct_9fa48("3139") ? i <= Math.min(n, arr.length) : stryMutAct_9fa48("3138") ? false : (stryCov_9fa48("3138", "3139", "3140"), i < (stryMutAct_9fa48("3141") ? Math.max(n, arr.length) : (stryCov_9fa48("3141"), Math.min(n, arr.length)))); stryMutAct_9fa48("3142") ? i-- : (stryCov_9fa48("3142"), i++)) {
                  if (stryMutAct_9fa48("3143")) {
                    {}
                  } else {
                    stryCov_9fa48("3143");
                    stryMutAct_9fa48("3144") ? result &= arr[i] : (stryCov_9fa48("3144"), result |= arr[i]);
                  }
                }

                // If result is zero or small k, return number
                // Heuristic: if n ≤ arr.length and max(arr) ≤ 1e6
                const max = stryMutAct_9fa48("3145") ? Math.min(...arr) : (stryCov_9fa48("3145"), Math.max(...arr));
                if (stryMutAct_9fa48("3148") ? arr.length <= 100 || max <= 1e6 : stryMutAct_9fa48("3147") ? false : stryMutAct_9fa48("3146") ? true : (stryCov_9fa48("3146", "3147", "3148"), (stryMutAct_9fa48("3151") ? arr.length > 100 : stryMutAct_9fa48("3150") ? arr.length < 100 : stryMutAct_9fa48("3149") ? true : (stryCov_9fa48("3149", "3150", "3151"), arr.length <= 100)) && (stryMutAct_9fa48("3154") ? max > 1e6 : stryMutAct_9fa48("3153") ? max < 1e6 : stryMutAct_9fa48("3152") ? true : (stryCov_9fa48("3152", "3153", "3154"), max <= 1e6)))) {
                  if (stryMutAct_9fa48("3155")) {
                    {}
                  } else {
                    stryCov_9fa48("3155");
                    return result;
                  }
                }
              }
            }

            // Otherwise, treat as graph problem
            return handleGraph(n, arr);
          }
        }

        // Handle batch case: array of arrays
        if (stryMutAct_9fa48("3158") ? args.length === 1 && Array.isArray(args[0]) || Array.isArray(args[0][0]) : stryMutAct_9fa48("3157") ? false : stryMutAct_9fa48("3156") ? true : (stryCov_9fa48("3156", "3157", "3158"), (stryMutAct_9fa48("3160") ? args.length === 1 || Array.isArray(args[0]) : stryMutAct_9fa48("3159") ? true : (stryCov_9fa48("3159", "3160"), (stryMutAct_9fa48("3162") ? args.length !== 1 : stryMutAct_9fa48("3161") ? true : (stryCov_9fa48("3161", "3162"), args.length === 1)) && Array.isArray(args[0]))) && Array.isArray(args[0][0]))) {
          if (stryMutAct_9fa48("3163")) {
            {}
          } else {
            stryCov_9fa48("3163");
            return args[0].map(arr => {
              if (stryMutAct_9fa48("3164")) {
                {}
              } else {
                stryCov_9fa48("3164");
                const n = arr.length;
                return handleBatch(n, arr);
              }
            });
          }
        }

        // Handle solve(arr) — just a single array
        if (stryMutAct_9fa48("3167") ? args.length === 1 && Array.isArray(args[0]) || typeof args[0][0] === 'number' : stryMutAct_9fa48("3166") ? false : stryMutAct_9fa48("3165") ? true : (stryCov_9fa48("3165", "3166", "3167"), (stryMutAct_9fa48("3169") ? args.length === 1 || Array.isArray(args[0]) : stryMutAct_9fa48("3168") ? true : (stryCov_9fa48("3168", "3169"), (stryMutAct_9fa48("3171") ? args.length !== 1 : stryMutAct_9fa48("3170") ? true : (stryCov_9fa48("3170", "3171"), args.length === 1)) && Array.isArray(args[0]))) && (stryMutAct_9fa48("3173") ? typeof args[0][0] !== 'number' : stryMutAct_9fa48("3172") ? true : (stryCov_9fa48("3172", "3173"), typeof args[0][0] === (stryMutAct_9fa48("3174") ? "" : (stryCov_9fa48("3174"), 'number')))))) {
          if (stryMutAct_9fa48("3175")) {
            {}
          } else {
            stryCov_9fa48("3175");
            const arr = args[0];
            const n = arr.length;

            // Guess best logic: small n = graph; large or bit values = bitmask
            const max = stryMutAct_9fa48("3176") ? Math.min(...arr) : (stryCov_9fa48("3176"), Math.max(...arr));
            if (stryMutAct_9fa48("3179") ? n !== 0 : stryMutAct_9fa48("3178") ? false : stryMutAct_9fa48("3177") ? true : (stryCov_9fa48("3177", "3178", "3179"), n === 0)) return 0;
            if (stryMutAct_9fa48("3182") ? n !== 1 : stryMutAct_9fa48("3181") ? false : stryMutAct_9fa48("3180") ? true : (stryCov_9fa48("3180", "3181", "3182"), n === 1)) return handleGraph(n, arr);
            if (stryMutAct_9fa48("3185") ? n <= 10 || max <= 1000 : stryMutAct_9fa48("3184") ? false : stryMutAct_9fa48("3183") ? true : (stryCov_9fa48("3183", "3184", "3185"), (stryMutAct_9fa48("3188") ? n > 10 : stryMutAct_9fa48("3187") ? n < 10 : stryMutAct_9fa48("3186") ? true : (stryCov_9fa48("3186", "3187", "3188"), n <= 10)) && (stryMutAct_9fa48("3191") ? max > 1000 : stryMutAct_9fa48("3190") ? max < 1000 : stryMutAct_9fa48("3189") ? true : (stryCov_9fa48("3189", "3190", "3191"), max <= 1000)))) {
              if (stryMutAct_9fa48("3192")) {
                {}
              } else {
                stryCov_9fa48("3192");
                return handleGraph(n, arr);
              }
            } else {
              if (stryMutAct_9fa48("3193")) {
                {}
              } else {
                stryCov_9fa48("3193");
                let result = 0;
                for (let i = 0; stryMutAct_9fa48("3196") ? i >= n : stryMutAct_9fa48("3195") ? i <= n : stryMutAct_9fa48("3194") ? false : (stryCov_9fa48("3194", "3195", "3196"), i < n); stryMutAct_9fa48("3197") ? i-- : (stryCov_9fa48("3197"), i++)) {
                  if (stryMutAct_9fa48("3198")) {
                    {}
                  } else {
                    stryCov_9fa48("3198");
                    stryMutAct_9fa48("3199") ? result &= arr[i] : (stryCov_9fa48("3199"), result |= arr[i]);
                  }
                }
                return result;
              }
            }
          }
        }

        // If nothing matched, return fallback
        return stryMutAct_9fa48("3200") ? "" : (stryCov_9fa48("3200"), 'No');
      }
    } catch (err) {
      if (stryMutAct_9fa48("3201")) {
        {}
      } else {
        stryCov_9fa48("3201");
        return stryMutAct_9fa48("3202") ? "" : (stryCov_9fa48("3202"), 'No');
      }
    }
  }
}
function handleGraph(n, arr) {
  if (stryMutAct_9fa48("3203")) {
    {}
  } else {
    stryCov_9fa48("3203");
    if (stryMutAct_9fa48("3206") ? arr.some(v => v === arr[0]) : stryMutAct_9fa48("3205") ? false : stryMutAct_9fa48("3204") ? true : (stryCov_9fa48("3204", "3205", "3206"), arr.every(stryMutAct_9fa48("3207") ? () => undefined : (stryCov_9fa48("3207"), v => stryMutAct_9fa48("3210") ? v !== arr[0] : stryMutAct_9fa48("3209") ? false : stryMutAct_9fa48("3208") ? true : (stryCov_9fa48("3208", "3209", "3210"), v === arr[0]))))) return stryMutAct_9fa48("3211") ? "" : (stryCov_9fa48("3211"), 'No');
    const root = stryMutAct_9fa48("3212") ? arr.findIndex(v => v !== arr[0]) - 1 : (stryCov_9fa48("3212"), arr.findIndex(stryMutAct_9fa48("3213") ? () => undefined : (stryCov_9fa48("3213"), v => stryMutAct_9fa48("3216") ? v === arr[0] : stryMutAct_9fa48("3215") ? false : stryMutAct_9fa48("3214") ? true : (stryCov_9fa48("3214", "3215", "3216"), v !== arr[0]))) + 1);
    const res = stryMutAct_9fa48("3217") ? [] : (stryCov_9fa48("3217"), [stryMutAct_9fa48("3218") ? "" : (stryCov_9fa48("3218"), 'Yes')]);
    for (let i = 1; stryMutAct_9fa48("3221") ? i > n : stryMutAct_9fa48("3220") ? i < n : stryMutAct_9fa48("3219") ? false : (stryCov_9fa48("3219", "3220", "3221"), i <= n); stryMutAct_9fa48("3222") ? i-- : (stryCov_9fa48("3222"), i++)) {
      if (stryMutAct_9fa48("3223")) {
        {}
      } else {
        stryCov_9fa48("3223");
        if (stryMutAct_9fa48("3226") ? i !== root : stryMutAct_9fa48("3225") ? false : stryMutAct_9fa48("3224") ? true : (stryCov_9fa48("3224", "3225", "3226"), i === root)) continue;
        if (stryMutAct_9fa48("3229") ? arr[i - 1] !== arr[root - 1] : stryMutAct_9fa48("3228") ? false : stryMutAct_9fa48("3227") ? true : (stryCov_9fa48("3227", "3228", "3229"), arr[stryMutAct_9fa48("3230") ? i + 1 : (stryCov_9fa48("3230"), i - 1)] === arr[stryMutAct_9fa48("3231") ? root + 1 : (stryCov_9fa48("3231"), root - 1)])) {
          if (stryMutAct_9fa48("3232")) {
            {}
          } else {
            stryCov_9fa48("3232");
            res.push(stryMutAct_9fa48("3233") ? `` : (stryCov_9fa48("3233"), `1 ${i}`));
          }
        } else {
          if (stryMutAct_9fa48("3234")) {
            {}
          } else {
            stryCov_9fa48("3234");
            res.push(stryMutAct_9fa48("3235") ? `` : (stryCov_9fa48("3235"), `${root} ${i}`));
          }
        }
      }
    }
    return res.join(stryMutAct_9fa48("3236") ? "" : (stryCov_9fa48("3236"), '\n'));
  }
}
function handleBatch(n, arr) {
  if (stryMutAct_9fa48("3237")) {
    {}
  } else {
    stryCov_9fa48("3237");
    if (stryMutAct_9fa48("3240") ? n !== 1 : stryMutAct_9fa48("3239") ? false : stryMutAct_9fa48("3238") ? true : (stryCov_9fa48("3238", "3239", "3240"), n === 1)) return stryMutAct_9fa48("3241") ? "" : (stryCov_9fa48("3241"), 'YES');
    const ps = stryMutAct_9fa48("3242") ? Array() : (stryCov_9fa48("3242"), Array(stryMutAct_9fa48("3243") ? n + 1 : (stryCov_9fa48("3243"), n - 1)));
    const skip = stryMutAct_9fa48("3244") ? Array().fill(0) : (stryCov_9fa48("3244"), Array(n).fill(0));
    for (let i = stryMutAct_9fa48("3245") ? n + 1 : (stryCov_9fa48("3245"), n - 1); stryMutAct_9fa48("3248") ? i < 1 : stryMutAct_9fa48("3247") ? i > 1 : stryMutAct_9fa48("3246") ? false : (stryCov_9fa48("3246", "3247", "3248"), i >= 1); stryMutAct_9fa48("3249") ? i++ : (stryCov_9fa48("3249"), i--)) {
      if (stryMutAct_9fa48("3250")) {
        {}
      } else {
        stryCov_9fa48("3250");
        const has = stryMutAct_9fa48("3251") ? Array() : (stryCov_9fa48("3251"), Array(i));
        for (let j = 0; stryMutAct_9fa48("3254") ? j >= n : stryMutAct_9fa48("3253") ? j <= n : stryMutAct_9fa48("3252") ? false : (stryCov_9fa48("3252", "3253", "3254"), j < n); stryMutAct_9fa48("3255") ? j-- : (stryCov_9fa48("3255"), j++)) {
          if (stryMutAct_9fa48("3256")) {
            {}
          } else {
            stryCov_9fa48("3256");
            if (stryMutAct_9fa48("3259") ? false : stryMutAct_9fa48("3258") ? true : stryMutAct_9fa48("3257") ? skip[j] : (stryCov_9fa48("3257", "3258", "3259"), !skip[j])) {
              if (stryMutAct_9fa48("3260")) {
                {}
              } else {
                stryCov_9fa48("3260");
                const r = stryMutAct_9fa48("3261") ? arr[j] * i : (stryCov_9fa48("3261"), arr[j] % i);
                if (stryMutAct_9fa48("3263") ? false : stryMutAct_9fa48("3262") ? true : (stryCov_9fa48("3262", "3263"), has[r])) {
                  if (stryMutAct_9fa48("3264")) {
                    {}
                  } else {
                    stryCov_9fa48("3264");
                    ps[stryMutAct_9fa48("3265") ? i + 1 : (stryCov_9fa48("3265"), i - 1)] = stryMutAct_9fa48("3266") ? `` : (stryCov_9fa48("3266"), `${stryMutAct_9fa48("3267") ? j - 1 : (stryCov_9fa48("3267"), j + 1)} ${has[r]}`);
                    skip[j] = 1;
                    break;
                  }
                } else {
                  if (stryMutAct_9fa48("3268")) {
                    {}
                  } else {
                    stryCov_9fa48("3268");
                    has[r] = stryMutAct_9fa48("3269") ? j - 1 : (stryCov_9fa48("3269"), j + 1);
                  }
                }
              }
            }
          }
        }
      }
    }
    const filteredPs = stryMutAct_9fa48("3270") ? ps : (stryCov_9fa48("3270"), ps.filter(Boolean));
    return (stryMutAct_9fa48("3271") ? "" : (stryCov_9fa48("3271"), 'YES\n')) + filteredPs.join(stryMutAct_9fa48("3272") ? "" : (stryCov_9fa48("3272"), '\n'));
  }
}

// function testing_test() {
//     const input = [
//         [1, 4],
//         [99, 7, 1, 13],
//         [10, 2, 31, 44, 73],
//         [87, 6, 81, 44, 32],
//         [62, 35, 33, 79, 16],
//         [6, 51, 31, 69, 42],
//         [52, 63, 25, 21, 5],
//         [33, 40, 3, 11, 31, 43, 37, 8, 50, 5, 12, 22],
//     ];

//     const expectedOutput = [
//         `YES\n2 1`,
//         `YES\n4 1\n2 1\n3 2`,
//         `YES\n5 1\n4 1\n3 1\n2 1`,
//         `YES\n4 1\n3 1\n2 1\n5 4`,
//         `YES\n3 1\n5 1\n2 1\n4 2`,
//         `YES\n4 1\n5 1\n2 1\n3 2`,
//         `YES\n2 1\n5 2\n3 1\n4 3`,
//         `YES\n9 1\n12 9\n11 1\n10 1\n6 1\n7 6\n2 1\n8 2\n5 2\n3 1\n4 1`,
//     ];

//     const result = solve(input);

//     let allPassed = true;

//     for (let i = 0; i < input.length; i++) {
//         const passed = result[i] === expectedOutput[i];
//         if (passed) {
//             console.log(`✅ Test case ${i + 1} passed`);
//         } else {
//             console.log(`❌ Test case ${i + 1} failed`);
//             console.log(`Expected:\n${expectedOutput[i]}`);
//             console.log(`Got:\n${result[i]}`);
//             allPassed = false;
//         }
//     }

//     if (allPassed) {
//         console.log('\n🎉 All test cases passed!');
//     } else {
//         console.log('\n⚠️ Some test cases failed.');
//     }
// }

// testing_test();