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
function swap(arr, i, j) {
  if (stryMutAct_9fa48("1963")) {
    {}
  } else {
    stryCov_9fa48("1963");
    [arr[i], arr[j]] = stryMutAct_9fa48("1964") ? [] : (stryCov_9fa48("1964"), [arr[j], arr[i]]);
  }
}
function siftUp(arr, i) {
  if (stryMutAct_9fa48("1965")) {
    {}
  } else {
    stryCov_9fa48("1965");
    if (stryMutAct_9fa48("1968") ? i !== 0 : stryMutAct_9fa48("1967") ? false : stryMutAct_9fa48("1966") ? true : (stryCov_9fa48("1966", "1967", "1968"), i === 0)) return;
    const p = Math.floor(stryMutAct_9fa48("1969") ? (i - 1) * 2 : (stryCov_9fa48("1969"), (stryMutAct_9fa48("1970") ? i + 1 : (stryCov_9fa48("1970"), i - 1)) / 2));
    if (stryMutAct_9fa48("1974") ? arr[p] <= arr[i] : stryMutAct_9fa48("1973") ? arr[p] >= arr[i] : stryMutAct_9fa48("1972") ? false : stryMutAct_9fa48("1971") ? true : (stryCov_9fa48("1971", "1972", "1973", "1974"), arr[p] > arr[i])) {
      if (stryMutAct_9fa48("1975")) {
        {}
      } else {
        stryCov_9fa48("1975");
        swap(arr, i, p);
        siftUp(arr, p);
      }
    }
  }
}
function siftDown(arr, i) {
  if (stryMutAct_9fa48("1976")) {
    {}
  } else {
    stryCov_9fa48("1976");
    const l = stryMutAct_9fa48("1977") ? 2 * i - 1 : (stryCov_9fa48("1977"), (stryMutAct_9fa48("1978") ? 2 / i : (stryCov_9fa48("1978"), 2 * i)) + 1);
    const r = stryMutAct_9fa48("1979") ? l - 1 : (stryCov_9fa48("1979"), l + 1);
    if (stryMutAct_9fa48("1983") ? l < arr.length : stryMutAct_9fa48("1982") ? l > arr.length : stryMutAct_9fa48("1981") ? false : stryMutAct_9fa48("1980") ? true : (stryCov_9fa48("1980", "1981", "1982", "1983"), l >= arr.length)) return;
    if (stryMutAct_9fa48("1986") ? r !== arr.length : stryMutAct_9fa48("1985") ? false : stryMutAct_9fa48("1984") ? true : (stryCov_9fa48("1984", "1985", "1986"), r === arr.length)) {
      if (stryMutAct_9fa48("1987")) {
        {}
      } else {
        stryCov_9fa48("1987");
        if (stryMutAct_9fa48("1991") ? arr[i] <= arr[l] : stryMutAct_9fa48("1990") ? arr[i] >= arr[l] : stryMutAct_9fa48("1989") ? false : stryMutAct_9fa48("1988") ? true : (stryCov_9fa48("1988", "1989", "1990", "1991"), arr[i] > arr[l])) swap(arr, i, l);
        return;
      }
    }
    if (stryMutAct_9fa48("1995") ? arr[l] <= arr[r] : stryMutAct_9fa48("1994") ? arr[l] >= arr[r] : stryMutAct_9fa48("1993") ? false : stryMutAct_9fa48("1992") ? true : (stryCov_9fa48("1992", "1993", "1994", "1995"), arr[l] > arr[r])) {
      if (stryMutAct_9fa48("1996")) {
        {}
      } else {
        stryCov_9fa48("1996");
        if (stryMutAct_9fa48("2000") ? arr[i] <= arr[r] : stryMutAct_9fa48("1999") ? arr[i] >= arr[r] : stryMutAct_9fa48("1998") ? false : stryMutAct_9fa48("1997") ? true : (stryCov_9fa48("1997", "1998", "1999", "2000"), arr[i] > arr[r])) {
          if (stryMutAct_9fa48("2001")) {
            {}
          } else {
            stryCov_9fa48("2001");
            swap(arr, i, r);
            siftDown(arr, r);
          }
        }
      }
    } else {
      if (stryMutAct_9fa48("2002")) {
        {}
      } else {
        stryCov_9fa48("2002");
        if (stryMutAct_9fa48("2006") ? arr[i] <= arr[l] : stryMutAct_9fa48("2005") ? arr[i] >= arr[l] : stryMutAct_9fa48("2004") ? false : stryMutAct_9fa48("2003") ? true : (stryCov_9fa48("2003", "2004", "2005", "2006"), arr[i] > arr[l])) {
          if (stryMutAct_9fa48("2007")) {
            {}
          } else {
            stryCov_9fa48("2007");
            swap(arr, i, l);
            siftDown(arr, l);
          }
        }
      }
    }
  }
}
export function solve(n, k, d) {
  if (stryMutAct_9fa48("2008")) {
    {}
  } else {
    stryCov_9fa48("2008");
    const heap = stryMutAct_9fa48("2009") ? ["Stryker was here"] : (stryCov_9fa48("2009"), []);
    let sum = 0;
    for (let i = stryMutAct_9fa48("2010") ? n + 1 : (stryCov_9fa48("2010"), n - 1); stryMutAct_9fa48("2013") ? i < 0 : stryMutAct_9fa48("2012") ? i > 0 : stryMutAct_9fa48("2011") ? false : (stryCov_9fa48("2011", "2012", "2013"), i >= 0); stryMutAct_9fa48("2014") ? i++ : (stryCov_9fa48("2014"), i--)) {
      if (stryMutAct_9fa48("2015")) {
        {}
      } else {
        stryCov_9fa48("2015");
        if (stryMutAct_9fa48("2018") ? false : stryMutAct_9fa48("2017") ? true : stryMutAct_9fa48("2016") ? (n - i) * (k + 1) : (stryCov_9fa48("2016", "2017", "2018"), (stryMutAct_9fa48("2019") ? n + i : (stryCov_9fa48("2019"), n - i)) % (stryMutAct_9fa48("2020") ? k - 1 : (stryCov_9fa48("2020"), k + 1)))) {
          if (stryMutAct_9fa48("2021")) {
            {}
          } else {
            stryCov_9fa48("2021");
            if (stryMutAct_9fa48("2025") ? heap[0] >= d[i] : stryMutAct_9fa48("2024") ? heap[0] <= d[i] : stryMutAct_9fa48("2023") ? false : stryMutAct_9fa48("2022") ? true : (stryCov_9fa48("2022", "2023", "2024", "2025"), heap[0] < d[i])) {
              if (stryMutAct_9fa48("2026")) {
                {}
              } else {
                stryCov_9fa48("2026");
                stryMutAct_9fa48("2027") ? sum -= d[i] - heap[0] : (stryCov_9fa48("2027"), sum += stryMutAct_9fa48("2028") ? d[i] + heap[0] : (stryCov_9fa48("2028"), d[i] - heap[0]));
                heap[0] = d[i];
                siftDown(heap, 0);
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("2029")) {
            {}
          } else {
            stryCov_9fa48("2029");
            heap.push(d[i]);
            stryMutAct_9fa48("2030") ? sum -= d[i] : (stryCov_9fa48("2030"), sum += d[i]);
            siftUp(heap, stryMutAct_9fa48("2031") ? heap.length + 1 : (stryCov_9fa48("2031"), heap.length - 1));
          }
        }
      }
    }
    return sum;
  }
}

// function testing_test() {
//     const inputs = [
//         { n: 5, k: 2, d: [3, 6, 4, 1, 2], expected: 6 },
//         { n: 7, k: 1, d: [3, 1, 4, 1, 5, 9, 2], expected: 16 },
//         { n: 4, k: 3, d: [4, 3, 2, 1], expected: 4 },
//         { n: 6, k: 2, d: [1, 3, 5, 2, 4, 6], expected: 6 },
//         { n: 6, k: 1, d: [1000000000, 1, 1000000000, 1, 1000000000, 1], expected: 3000000000 },
//     ];

//     inputs.forEach(({ n, k, d, expected }, index) => {
//         const result = solve(n, k, d);
//         console.log(`Test ${index + 1}:`, result === expected ? "Passed" : `Failed (Expected ${expected}, Got ${result})`);
//     });
// }

// testing_test();