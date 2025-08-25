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
const MAX_NODES = 1000000;
function getBitLength(x) {
  if (stryMutAct_9fa48("2125")) {
    {}
  } else {
    stryCov_9fa48("2125");
    return x.toString(2).length;
  }
}
export function solve(arrayLength, xorLimit, array) {
  if (stryMutAct_9fa48("2126")) {
    {}
  } else {
    stryCov_9fa48("2126");
    if (stryMutAct_9fa48("2129") ? xorLimit !== 0 : stryMutAct_9fa48("2128") ? false : stryMutAct_9fa48("2127") ? true : (stryCov_9fa48("2127", "2128", "2129"), xorLimit === 0)) return stryMutAct_9fa48("2130") ? "" : (stryCov_9fa48("2130"), '1');
    const highestSetBit = stryMutAct_9fa48("2131") ? getBitLength(xorLimit) + 1 : (stryCov_9fa48("2131"), getBitLength(xorLimit) - 1);
    const bitShift = stryMutAct_9fa48("2132") ? highestSetBit - 1 : (stryCov_9fa48("2132"), highestSetBit + 1);
    const prefixGroup = array[0] >> bitShift;
    let diversePrefixFound = stryMutAct_9fa48("2133") ? true : (stryCov_9fa48("2133"), false);
    for (let i = 1; stryMutAct_9fa48("2136") ? i >= arrayLength : stryMutAct_9fa48("2135") ? i <= arrayLength : stryMutAct_9fa48("2134") ? false : (stryCov_9fa48("2134", "2135", "2136"), i < arrayLength); stryMutAct_9fa48("2137") ? i-- : (stryCov_9fa48("2137"), i++)) {
      if (stryMutAct_9fa48("2138")) {
        {}
      } else {
        stryCov_9fa48("2138");
        if (stryMutAct_9fa48("2141") ? array[i] >> bitShift === prefixGroup : stryMutAct_9fa48("2140") ? false : stryMutAct_9fa48("2139") ? true : (stryCov_9fa48("2139", "2140", "2141"), array[i] >> bitShift !== prefixGroup)) {
          if (stryMutAct_9fa48("2142")) {
            {}
          } else {
            stryCov_9fa48("2142");
            diversePrefixFound = stryMutAct_9fa48("2143") ? false : (stryCov_9fa48("2143"), true);
            break;
          }
        }
      }
    }
    if (stryMutAct_9fa48("2145") ? false : stryMutAct_9fa48("2144") ? true : (stryCov_9fa48("2144", "2145"), diversePrefixFound)) return stryMutAct_9fa48("2146") ? "" : (stryCov_9fa48("2146"), '2');
    const remainingXor = xorLimit ^ 1 << highestSetBit;
    const typeBits = array.map(stryMutAct_9fa48("2147") ? () => undefined : (stryCov_9fa48("2147"), num => num >> highestSetBit & 1));
    const lowerBits = (stryMutAct_9fa48("2151") ? highestSetBit <= 0 : stryMutAct_9fa48("2150") ? highestSetBit >= 0 : stryMutAct_9fa48("2149") ? false : stryMutAct_9fa48("2148") ? true : (stryCov_9fa48("2148", "2149", "2150", "2151"), highestSetBit > 0)) ? array.map(stryMutAct_9fa48("2152") ? () => undefined : (stryCov_9fa48("2152"), num => num & (stryMutAct_9fa48("2153") ? (1 << highestSetBit) + 1 : (stryCov_9fa48("2153"), (1 << highestSetBit) - 1)))) : (stryMutAct_9fa48("2154") ? new Array() : (stryCov_9fa48("2154"), new Array(arrayLength))).fill(0);
    let nodeCounter = 1;
    let minimumLength = stryMutAct_9fa48("2155") ? arrayLength - 1 : (stryCov_9fa48("2155"), arrayLength + 1);
    const trieLeft = new Uint32Array(stryMutAct_9fa48("2156") ? MAX_NODES - 5 : (stryCov_9fa48("2156"), MAX_NODES + 5)).fill(0);
    const trieRight = new Uint32Array(stryMutAct_9fa48("2157") ? MAX_NODES - 5 : (stryCov_9fa48("2157"), MAX_NODES + 5)).fill(0);
    const maxIndexType0 = new Uint32Array(stryMutAct_9fa48("2158") ? MAX_NODES - 5 : (stryCov_9fa48("2158"), MAX_NODES + 5)).fill(0);
    const maxIndexType1 = new Uint32Array(stryMutAct_9fa48("2159") ? MAX_NODES - 5 : (stryCov_9fa48("2159"), MAX_NODES + 5)).fill(0);
    for (let i = 0; stryMutAct_9fa48("2162") ? i >= arrayLength : stryMutAct_9fa48("2161") ? i <= arrayLength : stryMutAct_9fa48("2160") ? false : (stryCov_9fa48("2160", "2161", "2162"), i < arrayLength); stryMutAct_9fa48("2163") ? i-- : (stryCov_9fa48("2163"), i++)) {
      if (stryMutAct_9fa48("2164")) {
        {}
      } else {
        stryCov_9fa48("2164");
        const currentIndex = stryMutAct_9fa48("2165") ? i - 1 : (stryCov_9fa48("2165"), i + 1);
        const currentType = typeBits[i];
        const oppositeType = currentType ^ 1;
        if (stryMutAct_9fa48("2168") ? (oppositeType === 0 ? maxIndexType0[1] : maxIndexType1[1]) === 0 : stryMutAct_9fa48("2167") ? false : stryMutAct_9fa48("2166") ? true : (stryCov_9fa48("2166", "2167", "2168"), ((stryMutAct_9fa48("2171") ? oppositeType !== 0 : stryMutAct_9fa48("2170") ? false : stryMutAct_9fa48("2169") ? true : (stryCov_9fa48("2169", "2170", "2171"), oppositeType === 0)) ? maxIndexType0[1] : maxIndexType1[1]) !== 0)) {
          if (stryMutAct_9fa48("2172")) {
            {}
          } else {
            stryCov_9fa48("2172");
            let bestIndex = 0;
            let node = 1;
            const currentValue = lowerBits[i];
            for (let bit = stryMutAct_9fa48("2173") ? highestSetBit + 1 : (stryCov_9fa48("2173"), highestSetBit - 1); stryMutAct_9fa48("2175") ? bit >= 0 || node : stryMutAct_9fa48("2174") ? false : (stryCov_9fa48("2174", "2175"), (stryMutAct_9fa48("2178") ? bit < 0 : stryMutAct_9fa48("2177") ? bit > 0 : stryMutAct_9fa48("2176") ? true : (stryCov_9fa48("2176", "2177", "2178"), bit >= 0)) && node); stryMutAct_9fa48("2179") ? bit++ : (stryCov_9fa48("2179"), bit--)) {
              if (stryMutAct_9fa48("2180")) {
                {}
              } else {
                stryCov_9fa48("2180");
                const requiredBit = remainingXor >> bit & 1;
                const valueBit = currentValue >> bit & 1;
                if (stryMutAct_9fa48("2183") ? requiredBit !== 0 : stryMutAct_9fa48("2182") ? false : stryMutAct_9fa48("2181") ? true : (stryCov_9fa48("2181", "2182", "2183"), requiredBit === 0)) {
                  if (stryMutAct_9fa48("2184")) {
                    {}
                  } else {
                    stryCov_9fa48("2184");
                    const flippedBit = valueBit ^ 1;
                    const child = (stryMutAct_9fa48("2187") ? flippedBit !== 0 : stryMutAct_9fa48("2186") ? false : stryMutAct_9fa48("2185") ? true : (stryCov_9fa48("2185", "2186", "2187"), flippedBit === 0)) ? trieLeft[node] : trieRight[node];
                    if (stryMutAct_9fa48("2189") ? false : stryMutAct_9fa48("2188") ? true : (stryCov_9fa48("2188", "2189"), child)) {
                      if (stryMutAct_9fa48("2190")) {
                        {}
                      } else {
                        stryCov_9fa48("2190");
                        const candidateIndex = (stryMutAct_9fa48("2193") ? oppositeType !== 0 : stryMutAct_9fa48("2192") ? false : stryMutAct_9fa48("2191") ? true : (stryCov_9fa48("2191", "2192", "2193"), oppositeType === 0)) ? maxIndexType0[child] : maxIndexType1[child];
                        if (stryMutAct_9fa48("2197") ? candidateIndex <= bestIndex : stryMutAct_9fa48("2196") ? candidateIndex >= bestIndex : stryMutAct_9fa48("2195") ? false : stryMutAct_9fa48("2194") ? true : (stryCov_9fa48("2194", "2195", "2196", "2197"), candidateIndex > bestIndex)) bestIndex = candidateIndex;
                      }
                    }
                  }
                }
                const nextBit = valueBit ^ requiredBit;
                node = (stryMutAct_9fa48("2200") ? nextBit !== 0 : stryMutAct_9fa48("2199") ? false : stryMutAct_9fa48("2198") ? true : (stryCov_9fa48("2198", "2199", "2200"), nextBit === 0)) ? trieLeft[node] : trieRight[node];
              }
            }
            if (stryMutAct_9fa48("2202") ? false : stryMutAct_9fa48("2201") ? true : (stryCov_9fa48("2201", "2202"), node)) {
              if (stryMutAct_9fa48("2203")) {
                {}
              } else {
                stryCov_9fa48("2203");
                const candidateIndex = (stryMutAct_9fa48("2206") ? oppositeType !== 0 : stryMutAct_9fa48("2205") ? false : stryMutAct_9fa48("2204") ? true : (stryCov_9fa48("2204", "2205", "2206"), oppositeType === 0)) ? maxIndexType0[node] : maxIndexType1[node];
                if (stryMutAct_9fa48("2210") ? candidateIndex <= bestIndex : stryMutAct_9fa48("2209") ? candidateIndex >= bestIndex : stryMutAct_9fa48("2208") ? false : stryMutAct_9fa48("2207") ? true : (stryCov_9fa48("2207", "2208", "2209", "2210"), candidateIndex > bestIndex)) bestIndex = candidateIndex;
              }
            }
            if (stryMutAct_9fa48("2212") ? false : stryMutAct_9fa48("2211") ? true : (stryCov_9fa48("2211", "2212"), bestIndex)) {
              if (stryMutAct_9fa48("2213")) {
                {}
              } else {
                stryCov_9fa48("2213");
                const segmentLength = stryMutAct_9fa48("2214") ? currentIndex - bestIndex - 1 : (stryCov_9fa48("2214"), (stryMutAct_9fa48("2215") ? currentIndex + bestIndex : (stryCov_9fa48("2215"), currentIndex - bestIndex)) + 1);
                if (stryMutAct_9fa48("2219") ? segmentLength >= minimumLength : stryMutAct_9fa48("2218") ? segmentLength <= minimumLength : stryMutAct_9fa48("2217") ? false : stryMutAct_9fa48("2216") ? true : (stryCov_9fa48("2216", "2217", "2218", "2219"), segmentLength < minimumLength)) {
                  if (stryMutAct_9fa48("2220")) {
                    {}
                  } else {
                    stryCov_9fa48("2220");
                    minimumLength = segmentLength;
                    if (stryMutAct_9fa48("2223") ? minimumLength !== 2 : stryMutAct_9fa48("2222") ? false : stryMutAct_9fa48("2221") ? true : (stryCov_9fa48("2221", "2222", "2223"), minimumLength === 2)) break;
                  }
                }
              }
            }
          }
        }
        if (stryMutAct_9fa48("2226") ? currentType !== 0 : stryMutAct_9fa48("2225") ? false : stryMutAct_9fa48("2224") ? true : (stryCov_9fa48("2224", "2225", "2226"), currentType === 0)) maxIndexType0[1] = currentIndex;else maxIndexType1[1] = currentIndex;
        let node = 1;
        for (let bit = stryMutAct_9fa48("2227") ? highestSetBit + 1 : (stryCov_9fa48("2227"), highestSetBit - 1); stryMutAct_9fa48("2230") ? bit < 0 : stryMutAct_9fa48("2229") ? bit > 0 : stryMutAct_9fa48("2228") ? false : (stryCov_9fa48("2228", "2229", "2230"), bit >= 0); stryMutAct_9fa48("2231") ? bit++ : (stryCov_9fa48("2231"), bit--)) {
          if (stryMutAct_9fa48("2232")) {
            {}
          } else {
            stryCov_9fa48("2232");
            const bitValue = lowerBits[i] >> bit & 1;
            let child = (stryMutAct_9fa48("2235") ? bitValue !== 0 : stryMutAct_9fa48("2234") ? false : stryMutAct_9fa48("2233") ? true : (stryCov_9fa48("2233", "2234", "2235"), bitValue === 0)) ? trieLeft[node] : trieRight[node];
            if (stryMutAct_9fa48("2238") ? child !== 0 : stryMutAct_9fa48("2237") ? false : stryMutAct_9fa48("2236") ? true : (stryCov_9fa48("2236", "2237", "2238"), child === 0)) {
              if (stryMutAct_9fa48("2239")) {
                {}
              } else {
                stryCov_9fa48("2239");
                stryMutAct_9fa48("2240") ? nodeCounter-- : (stryCov_9fa48("2240"), nodeCounter++);
                if (stryMutAct_9fa48("2243") ? bitValue !== 0 : stryMutAct_9fa48("2242") ? false : stryMutAct_9fa48("2241") ? true : (stryCov_9fa48("2241", "2242", "2243"), bitValue === 0)) trieLeft[node] = nodeCounter;else trieRight[node] = nodeCounter;
                child = nodeCounter;
              }
            }
            node = child;
            if (stryMutAct_9fa48("2246") ? currentType !== 0 : stryMutAct_9fa48("2245") ? false : stryMutAct_9fa48("2244") ? true : (stryCov_9fa48("2244", "2245", "2246"), currentType === 0)) maxIndexType0[node] = currentIndex;else maxIndexType1[node] = currentIndex;
          }
        }
      }
    }
    return (stryMutAct_9fa48("2250") ? minimumLength > arrayLength : stryMutAct_9fa48("2249") ? minimumLength < arrayLength : stryMutAct_9fa48("2248") ? false : stryMutAct_9fa48("2247") ? true : (stryCov_9fa48("2247", "2248", "2249", "2250"), minimumLength <= arrayLength)) ? minimumLength.toString() : stryMutAct_9fa48("2251") ? "" : (stryCov_9fa48("2251"), '-1');
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [5, 0, [1, 2, 3, 4, 5]], expected: '1' },
//         { input: [5, 7, [1, 2, 3, 4, 5]], expected: '2' },
//         { input: [5, 8, [1, 2, 3, 4, 5]], expected: '-1' },
//         { input: [5, 7, [3, 5, 1, 4, 2]], expected: '4' },
//         { input: [5, 3, [3, 5, 1, 4, 2]], expected: '2' },
//         { input: [6, 71, [26, 56, 12, 45, 60, 27]], expected: '-1' },
//     ];

//     for (const { input, expected } of testCases) {
//         const [n, k, A] = input;
//         const result = solve(n, k, A);
//         console.log(`Input: n=${n}, k=${k}, A=${A}`);
//         console.log(`Expected: ${expected}, Got: ${result}`);
//         console.log(result === expected ? 'Test passed' : 'Test failed');
//         console.log('---');
//     }
// }

// testing_test();