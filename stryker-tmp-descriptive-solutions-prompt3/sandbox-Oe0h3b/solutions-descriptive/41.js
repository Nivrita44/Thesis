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
    if (stryMutAct_9fa48("1951")) {
      {}
    } else {
      stryCov_9fa48("1951");
      this.data = {};
      this.front = 0;
      this.back = stryMutAct_9fa48("1952") ? +1 : (stryCov_9fa48("1952"), -1);
    }
  }
  push(...values) {
    if (stryMutAct_9fa48("1953")) {
      {}
    } else {
      stryCov_9fa48("1953");
      let i = 0;
      if (stryMutAct_9fa48("1956") ? false : stryMutAct_9fa48("1955") ? true : stryMutAct_9fa48("1954") ? this.length : (stryCov_9fa48("1954", "1955", "1956"), !this.length)) {
        if (stryMutAct_9fa48("1957")) {
          {}
        } else {
          stryCov_9fa48("1957");
          this.front = this.back = 0;
          this.data[this.front] = values[stryMutAct_9fa48("1958") ? i-- : (stryCov_9fa48("1958"), i++)];
        }
      }
      for (; stryMutAct_9fa48("1961") ? i >= values.length : stryMutAct_9fa48("1960") ? i <= values.length : stryMutAct_9fa48("1959") ? false : (stryCov_9fa48("1959", "1960", "1961"), i < values.length); stryMutAct_9fa48("1962") ? i-- : (stryCov_9fa48("1962"), i++)) {
        if (stryMutAct_9fa48("1963")) {
          {}
        } else {
          stryCov_9fa48("1963");
          this.data[stryMutAct_9fa48("1964") ? --this.back : (stryCov_9fa48("1964"), ++this.back)] = values[i];
        }
      }
    }
  }
  unshift(...values) {
    if (stryMutAct_9fa48("1965")) {
      {}
    } else {
      stryCov_9fa48("1965");
      let i = 0;
      if (stryMutAct_9fa48("1968") ? false : stryMutAct_9fa48("1967") ? true : stryMutAct_9fa48("1966") ? this.length : (stryCov_9fa48("1966", "1967", "1968"), !this.length)) {
        if (stryMutAct_9fa48("1969")) {
          {}
        } else {
          stryCov_9fa48("1969");
          this.front = this.back = 0;
          this.data[this.front] = values[stryMutAct_9fa48("1970") ? i-- : (stryCov_9fa48("1970"), i++)];
        }
      }
      for (; stryMutAct_9fa48("1973") ? i >= values.length : stryMutAct_9fa48("1972") ? i <= values.length : stryMutAct_9fa48("1971") ? false : (stryCov_9fa48("1971", "1972", "1973"), i < values.length); stryMutAct_9fa48("1974") ? i-- : (stryCov_9fa48("1974"), i++)) {
        if (stryMutAct_9fa48("1975")) {
          {}
        } else {
          stryCov_9fa48("1975");
          this.data[stryMutAct_9fa48("1976") ? ++this.front : (stryCov_9fa48("1976"), --this.front)] = values[i];
        }
      }
    }
  }
  pop() {
    if (stryMutAct_9fa48("1977")) {
      {}
    } else {
      stryCov_9fa48("1977");
      const value = this.data[this.back];
      delete this.data[this.back];
      stryMutAct_9fa48("1978") ? this.back++ : (stryCov_9fa48("1978"), this.back--);
      return value;
    }
  }
  shift() {
    if (stryMutAct_9fa48("1979")) {
      {}
    } else {
      stryCov_9fa48("1979");
      const value = this.data[this.front];
      delete this.data[this.front];
      stryMutAct_9fa48("1980") ? this.front-- : (stryCov_9fa48("1980"), this.front++);
      return value;
    }
  }
  get length() {
    if (stryMutAct_9fa48("1981")) {
      {}
    } else {
      stryCov_9fa48("1981");
      return (stryMutAct_9fa48("1985") ? this.front <= this.back : stryMutAct_9fa48("1984") ? this.front >= this.back : stryMutAct_9fa48("1983") ? false : stryMutAct_9fa48("1982") ? true : (stryCov_9fa48("1982", "1983", "1984", "1985"), this.front > this.back)) ? 0 : stryMutAct_9fa48("1986") ? this.back - this.front - 1 : (stryCov_9fa48("1986"), (stryMutAct_9fa48("1987") ? this.back + this.front : (stryCov_9fa48("1987"), this.back - this.front)) + 1);
    }
  }
  get(index) {
    if (stryMutAct_9fa48("1988")) {
      {}
    } else {
      stryCov_9fa48("1988");
      return this.data[stryMutAct_9fa48("1989") ? this.front - index : (stryCov_9fa48("1989"), this.front + index)];
    }
  }
  getLast() {
    if (stryMutAct_9fa48("1990")) {
      {}
    } else {
      stryCov_9fa48("1990");
      return this.data[this.back];
    }
  }
  forEach(callback) {
    if (stryMutAct_9fa48("1991")) {
      {}
    } else {
      stryCov_9fa48("1991");
      for (let i = this.front; stryMutAct_9fa48("1994") ? i > this.back : stryMutAct_9fa48("1993") ? i < this.back : stryMutAct_9fa48("1992") ? false : (stryCov_9fa48("1992", "1993", "1994"), i <= this.back); stryMutAct_9fa48("1995") ? i-- : (stryCov_9fa48("1995"), i++)) {
        if (stryMutAct_9fa48("1996")) {
          {}
        } else {
          stryCov_9fa48("1996");
          const result = callback(this.data[i], stryMutAct_9fa48("1997") ? i + this.front : (stryCov_9fa48("1997"), i - this.front));
          if (stryMutAct_9fa48("2000") ? result !== false : stryMutAct_9fa48("1999") ? false : stryMutAct_9fa48("1998") ? true : (stryCov_9fa48("1998", "1999", "2000"), result === (stryMutAct_9fa48("2001") ? true : (stryCov_9fa48("2001"), false)))) break;
        }
      }
    }
  }
}
export function solve(arraySize, array, queries) {
  if (stryMutAct_9fa48("2002")) {
    {}
  } else {
    stryCov_9fa48("2002");
    const triangleCounts = stryMutAct_9fa48("2003") ? Array().fill(0) : (stryCov_9fa48("2003"), Array(stryMutAct_9fa48("2004") ? arraySize - 1 : (stryCov_9fa48("2004"), arraySize + 1)).fill(0));
    for (let i = 1; stryMutAct_9fa48("2007") ? i > arraySize : stryMutAct_9fa48("2006") ? i < arraySize : stryMutAct_9fa48("2005") ? false : (stryCov_9fa48("2005", "2006", "2007"), i <= arraySize); stryMutAct_9fa48("2008") ? i-- : (stryCov_9fa48("2008"), i++)) {
      if (stryMutAct_9fa48("2009")) {
        {}
      } else {
        stryCov_9fa48("2009");
        triangleCounts[i] = stryMutAct_9fa48("2010") ? arraySize + 1 + i : (stryCov_9fa48("2010"), (stryMutAct_9fa48("2011") ? arraySize - 1 : (stryCov_9fa48("2011"), arraySize + 1)) - i);
      }
    }
    const trianglePrefix = stryMutAct_9fa48("2012") ? Array().fill(0) : (stryCov_9fa48("2012"), Array(stryMutAct_9fa48("2013") ? arraySize - 2 : (stryCov_9fa48("2013"), arraySize + 2)).fill(0));
    for (let i = 1; stryMutAct_9fa48("2016") ? i > arraySize : stryMutAct_9fa48("2015") ? i < arraySize : stryMutAct_9fa48("2014") ? false : (stryCov_9fa48("2014", "2015", "2016"), i <= arraySize); stryMutAct_9fa48("2017") ? i-- : (stryCov_9fa48("2017"), i++)) {
      if (stryMutAct_9fa48("2018")) {
        {}
      } else {
        stryCov_9fa48("2018");
        trianglePrefix[i] = stryMutAct_9fa48("2019") ? trianglePrefix[i - 1] - triangleCounts[i] : (stryCov_9fa48("2019"), trianglePrefix[stryMutAct_9fa48("2020") ? i + 1 : (stryCov_9fa48("2020"), i - 1)] + triangleCounts[i]);
      }
    }
    let totalSum = 0;
    for (let i = 0; stryMutAct_9fa48("2023") ? i >= arraySize : stryMutAct_9fa48("2022") ? i <= arraySize : stryMutAct_9fa48("2021") ? false : (stryCov_9fa48("2021", "2022", "2023"), i < arraySize); stryMutAct_9fa48("2024") ? i-- : (stryCov_9fa48("2024"), i++)) {
      if (stryMutAct_9fa48("2025")) {
        {}
      } else {
        stryCov_9fa48("2025");
        stryMutAct_9fa48("2026") ? totalSum -= (arraySize - i) * array[i] : (stryCov_9fa48("2026"), totalSum += stryMutAct_9fa48("2027") ? (arraySize - i) / array[i] : (stryCov_9fa48("2027"), (stryMutAct_9fa48("2028") ? arraySize + i : (stryCov_9fa48("2028"), arraySize - i)) * array[i]));
      }
    }
    const triangleWeightedSum = stryMutAct_9fa48("2029") ? Array().fill(0) : (stryCov_9fa48("2029"), Array(stryMutAct_9fa48("2030") ? arraySize - 1 : (stryCov_9fa48("2030"), arraySize + 1)).fill(0));
    let currentSum = totalSum;
    for (let i = 1; stryMutAct_9fa48("2033") ? i > arraySize : stryMutAct_9fa48("2032") ? i < arraySize : stryMutAct_9fa48("2031") ? false : (stryCov_9fa48("2031", "2032", "2033"), i <= arraySize); stryMutAct_9fa48("2034") ? i-- : (stryCov_9fa48("2034"), i++)) {
      if (stryMutAct_9fa48("2035")) {
        {}
      } else {
        stryCov_9fa48("2035");
        triangleWeightedSum[i] = currentSum;
        stryMutAct_9fa48("2036") ? currentSum += (arraySize - i + 1) * array[i - 1] : (stryCov_9fa48("2036"), currentSum -= stryMutAct_9fa48("2037") ? (arraySize - i + 1) / array[i - 1] : (stryCov_9fa48("2037"), (stryMutAct_9fa48("2038") ? arraySize - i - 1 : (stryCov_9fa48("2038"), (stryMutAct_9fa48("2039") ? arraySize + i : (stryCov_9fa48("2039"), arraySize - i)) + 1)) * array[stryMutAct_9fa48("2040") ? i + 1 : (stryCov_9fa48("2040"), i - 1)]));
      }
    }
    const prefixTriangleSum = stryMutAct_9fa48("2041") ? Array().fill(0n) : (stryCov_9fa48("2041"), Array(stryMutAct_9fa48("2042") ? arraySize - 2 : (stryCov_9fa48("2042"), arraySize + 2)).fill(0n));
    for (let i = 1; stryMutAct_9fa48("2045") ? i > arraySize : stryMutAct_9fa48("2044") ? i < arraySize : stryMutAct_9fa48("2043") ? false : (stryCov_9fa48("2043", "2044", "2045"), i <= arraySize); stryMutAct_9fa48("2046") ? i-- : (stryCov_9fa48("2046"), i++)) {
      if (stryMutAct_9fa48("2047")) {
        {}
      } else {
        stryCov_9fa48("2047");
        prefixTriangleSum[i] = stryMutAct_9fa48("2048") ? prefixTriangleSum[i - 1] - BigInt(triangleWeightedSum[i]) : (stryCov_9fa48("2048"), prefixTriangleSum[stryMutAct_9fa48("2049") ? i + 1 : (stryCov_9fa48("2049"), i - 1)] + BigInt(triangleWeightedSum[i]));
      }
    }
    const prefixArray = stryMutAct_9fa48("2050") ? Array().fill(0n) : (stryCov_9fa48("2050"), Array(stryMutAct_9fa48("2051") ? arraySize - 1 : (stryCov_9fa48("2051"), arraySize + 1)).fill(0n));
    for (let i = 1; stryMutAct_9fa48("2054") ? i > arraySize : stryMutAct_9fa48("2053") ? i < arraySize : stryMutAct_9fa48("2052") ? false : (stryCov_9fa48("2052", "2053", "2054"), i <= arraySize); stryMutAct_9fa48("2055") ? i-- : (stryCov_9fa48("2055"), i++)) {
      if (stryMutAct_9fa48("2056")) {
        {}
      } else {
        stryCov_9fa48("2056");
        prefixArray[i] = stryMutAct_9fa48("2057") ? prefixArray[i - 1] - BigInt(array[i - 1]) : (stryCov_9fa48("2057"), prefixArray[stryMutAct_9fa48("2058") ? i + 1 : (stryCov_9fa48("2058"), i - 1)] + BigInt(array[stryMutAct_9fa48("2059") ? i + 1 : (stryCov_9fa48("2059"), i - 1)]));
      }
    }
    const prefixOfPrefix = stryMutAct_9fa48("2060") ? Array().fill(0n) : (stryCov_9fa48("2060"), Array(stryMutAct_9fa48("2061") ? arraySize - 2 : (stryCov_9fa48("2061"), arraySize + 2)).fill(0n));
    for (let i = 1; stryMutAct_9fa48("2064") ? i > arraySize : stryMutAct_9fa48("2063") ? i < arraySize : stryMutAct_9fa48("2062") ? false : (stryCov_9fa48("2062", "2063", "2064"), i <= arraySize); stryMutAct_9fa48("2065") ? i-- : (stryCov_9fa48("2065"), i++)) {
      if (stryMutAct_9fa48("2066")) {
        {}
      } else {
        stryCov_9fa48("2066");
        prefixOfPrefix[i] = stryMutAct_9fa48("2067") ? prefixOfPrefix[i - 1] - prefixArray[i] : (stryCov_9fa48("2067"), prefixOfPrefix[stryMutAct_9fa48("2068") ? i + 1 : (stryCov_9fa48("2068"), i - 1)] + prefixArray[i]);
      }
    }
    const output = stryMutAct_9fa48("2069") ? ["Stryker was here"] : (stryCov_9fa48("2069"), []);
    for (const [left, right] of queries) {
      if (stryMutAct_9fa48("2070")) {
        {}
      } else {
        stryCov_9fa48("2070");
        const result = stryMutAct_9fa48("2071") ? calculate(right) + calculate(left - 1) : (stryCov_9fa48("2071"), calculate(right) - calculate(stryMutAct_9fa48("2072") ? left + 1 : (stryCov_9fa48("2072"), left - 1)));
        output.push(result.toString());
      }
    }
    return output;
    function binarySearch(low, high, condition) {
      if (stryMutAct_9fa48("2073")) {
        {}
      } else {
        stryCov_9fa48("2073");
        while (stryMutAct_9fa48("2076") ? low > high : stryMutAct_9fa48("2075") ? low < high : stryMutAct_9fa48("2074") ? false : (stryCov_9fa48("2074", "2075", "2076"), low <= high)) {
          if (stryMutAct_9fa48("2077")) {
            {}
          } else {
            stryCov_9fa48("2077");
            const mid = Math.floor(stryMutAct_9fa48("2078") ? (low + high) * 2 : (stryCov_9fa48("2078"), (stryMutAct_9fa48("2079") ? low - high : (stryCov_9fa48("2079"), low + high)) / 2));
            if (stryMutAct_9fa48("2081") ? false : stryMutAct_9fa48("2080") ? true : (stryCov_9fa48("2080", "2081"), condition(mid))) {
              if (stryMutAct_9fa48("2082")) {
                {}
              } else {
                stryCov_9fa48("2082");
                low = stryMutAct_9fa48("2083") ? mid - 1 : (stryCov_9fa48("2083"), mid + 1);
              }
            } else {
              if (stryMutAct_9fa48("2084")) {
                {}
              } else {
                stryCov_9fa48("2084");
                high = stryMutAct_9fa48("2085") ? mid + 1 : (stryCov_9fa48("2085"), mid - 1);
              }
            }
          }
        }
        return high;
      }
    }
    function calculate(position) {
      if (stryMutAct_9fa48("2086")) {
        {}
      } else {
        stryCov_9fa48("2086");
        if (stryMutAct_9fa48("2090") ? position > 0 : stryMutAct_9fa48("2089") ? position < 0 : stryMutAct_9fa48("2088") ? false : stryMutAct_9fa48("2087") ? true : (stryCov_9fa48("2087", "2088", "2089", "2090"), position <= 0)) return 0n;
        const baseIndex = binarySearch(1, arraySize, stryMutAct_9fa48("2091") ? () => undefined : (stryCov_9fa48("2091"), i => stryMutAct_9fa48("2095") ? trianglePrefix[i] > position : stryMutAct_9fa48("2094") ? trianglePrefix[i] < position : stryMutAct_9fa48("2093") ? false : stryMutAct_9fa48("2092") ? true : (stryCov_9fa48("2092", "2093", "2094", "2095"), trianglePrefix[i] <= position)));
        const remaining = stryMutAct_9fa48("2096") ? position + trianglePrefix[baseIndex] : (stryCov_9fa48("2096"), position - trianglePrefix[baseIndex]);
        let startRow, endCol;
        if (stryMutAct_9fa48("2098") ? false : stryMutAct_9fa48("2097") ? true : (stryCov_9fa48("2097", "2098"), remaining)) {
          if (stryMutAct_9fa48("2099")) {
            {}
          } else {
            stryCov_9fa48("2099");
            startRow = stryMutAct_9fa48("2100") ? baseIndex - 1 : (stryCov_9fa48("2100"), baseIndex + 1);
            endCol = stryMutAct_9fa48("2101") ? baseIndex - remaining : (stryCov_9fa48("2101"), baseIndex + remaining);
          }
        } else {
          if (stryMutAct_9fa48("2102")) {
            {}
          } else {
            stryCov_9fa48("2102");
            startRow = baseIndex;
            endCol = arraySize;
          }
        }
        return stryMutAct_9fa48("2103") ? prefixTriangleSum[startRow - 1] + (prefixOfPrefix[endCol] - prefixOfPrefix[startRow - 1]) + prefixArray[startRow - 1] * BigInt(endCol - startRow + 1) : (stryCov_9fa48("2103"), (stryMutAct_9fa48("2104") ? prefixTriangleSum[startRow - 1] - (prefixOfPrefix[endCol] - prefixOfPrefix[startRow - 1]) : (stryCov_9fa48("2104"), prefixTriangleSum[stryMutAct_9fa48("2105") ? startRow + 1 : (stryCov_9fa48("2105"), startRow - 1)] + (stryMutAct_9fa48("2106") ? prefixOfPrefix[endCol] + prefixOfPrefix[startRow - 1] : (stryCov_9fa48("2106"), prefixOfPrefix[endCol] - prefixOfPrefix[stryMutAct_9fa48("2107") ? startRow + 1 : (stryCov_9fa48("2107"), startRow - 1)])))) - (stryMutAct_9fa48("2108") ? prefixArray[startRow - 1] / BigInt(endCol - startRow + 1) : (stryCov_9fa48("2108"), prefixArray[stryMutAct_9fa48("2109") ? startRow + 1 : (stryCov_9fa48("2109"), startRow - 1)] * BigInt(stryMutAct_9fa48("2110") ? endCol - startRow - 1 : (stryCov_9fa48("2110"), (stryMutAct_9fa48("2111") ? endCol + startRow : (stryCov_9fa48("2111"), endCol - startRow)) + 1)))));
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