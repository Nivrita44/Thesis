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
export function solve(setX, setY) {
  if (stryMutAct_9fa48("1858")) {
    {}
  } else {
    stryCov_9fa48("1858");
    let totalX = 0,
      totalY = 0;
    let peakX = 0,
      peakY = 0;
    for (let i = 0; stryMutAct_9fa48("1861") ? i >= setX.length : stryMutAct_9fa48("1860") ? i <= setX.length : stryMutAct_9fa48("1859") ? false : (stryCov_9fa48("1859", "1860", "1861"), i < setX.length); stryMutAct_9fa48("1862") ? i-- : (stryCov_9fa48("1862"), i++)) {
      if (stryMutAct_9fa48("1863")) {
        {}
      } else {
        stryCov_9fa48("1863");
        stryMutAct_9fa48("1864") ? totalX -= setX[i] : (stryCov_9fa48("1864"), totalX += setX[i]);
        if (stryMutAct_9fa48("1868") ? setX[i] <= peakX : stryMutAct_9fa48("1867") ? setX[i] >= peakX : stryMutAct_9fa48("1866") ? false : stryMutAct_9fa48("1865") ? true : (stryCov_9fa48("1865", "1866", "1867", "1868"), setX[i] > peakX)) peakX = setX[i];
      }
    }
    for (let j = 0; stryMutAct_9fa48("1871") ? j >= setY.length : stryMutAct_9fa48("1870") ? j <= setY.length : stryMutAct_9fa48("1869") ? false : (stryCov_9fa48("1869", "1870", "1871"), j < setY.length); stryMutAct_9fa48("1872") ? j-- : (stryCov_9fa48("1872"), j++)) {
      if (stryMutAct_9fa48("1873")) {
        {}
      } else {
        stryCov_9fa48("1873");
        stryMutAct_9fa48("1874") ? totalY -= setY[j] : (stryCov_9fa48("1874"), totalY += setY[j]);
        if (stryMutAct_9fa48("1878") ? setY[j] <= peakY : stryMutAct_9fa48("1877") ? setY[j] >= peakY : stryMutAct_9fa48("1876") ? false : stryMutAct_9fa48("1875") ? true : (stryCov_9fa48("1875", "1876", "1877", "1878"), setY[j] > peakY)) peakY = setY[j];
      }
    }
    if (stryMutAct_9fa48("1882") ? totalX >= totalY : stryMutAct_9fa48("1881") ? totalX <= totalY : stryMutAct_9fa48("1880") ? false : stryMutAct_9fa48("1879") ? true : (stryCov_9fa48("1879", "1880", "1881", "1882"), totalX < totalY)) return stryMutAct_9fa48("1883") ? "" : (stryCov_9fa48("1883"), "-1");
    let diffVal = stryMutAct_9fa48("1884") ? totalX + totalY : (stryCov_9fa48("1884"), totalX - totalY);
    stryMutAct_9fa48("1885") ? setX : (stryCov_9fa48("1885"), setX.sort(stryMutAct_9fa48("1886") ? () => undefined : (stryCov_9fa48("1886"), (a, b) => stryMutAct_9fa48("1887") ? a + b : (stryCov_9fa48("1887"), a - b))));
    stryMutAct_9fa48("1888") ? setY : (stryCov_9fa48("1888"), setY.sort(stryMutAct_9fa48("1889") ? () => undefined : (stryCov_9fa48("1889"), (a, b) => stryMutAct_9fa48("1890") ? a + b : (stryCov_9fa48("1890"), a - b))));
    if (stryMutAct_9fa48("1893") ? diffVal !== 0 : stryMutAct_9fa48("1892") ? false : stryMutAct_9fa48("1891") ? true : (stryCov_9fa48("1891", "1892", "1893"), diffVal === 0)) {
      if (stryMutAct_9fa48("1894")) {
        {}
      } else {
        stryCov_9fa48("1894");
        return arraysMatch(setX, setY) ? (stryMutAct_9fa48("1898") ? peakX + 1 > 1000000000 : stryMutAct_9fa48("1897") ? peakX + 1 < 1000000000 : stryMutAct_9fa48("1896") ? false : stryMutAct_9fa48("1895") ? true : (stryCov_9fa48("1895", "1896", "1897", "1898"), (stryMutAct_9fa48("1899") ? peakX - 1 : (stryCov_9fa48("1899"), peakX + 1)) <= 1000000000)) ? stryMutAct_9fa48("1900") ? peakX - 1 : (stryCov_9fa48("1900"), peakX + 1) : stryMutAct_9fa48("1901") ? "" : (stryCov_9fa48("1901"), "-1") : stryMutAct_9fa48("1902") ? "" : (stryCov_9fa48("1902"), "-1");
      }
    }
    let factors = stryMutAct_9fa48("1903") ? ["Stryker was here"] : (stryCov_9fa48("1903"), []);
    for (let fac = 1; stryMutAct_9fa48("1906") ? fac * fac > diffVal : stryMutAct_9fa48("1905") ? fac * fac < diffVal : stryMutAct_9fa48("1904") ? false : (stryCov_9fa48("1904", "1905", "1906"), (stryMutAct_9fa48("1907") ? fac / fac : (stryCov_9fa48("1907"), fac * fac)) <= diffVal); stryMutAct_9fa48("1908") ? fac-- : (stryCov_9fa48("1908"), fac++)) {
      if (stryMutAct_9fa48("1909")) {
        {}
      } else {
        stryCov_9fa48("1909");
        if (stryMutAct_9fa48("1912") ? diffVal % fac !== 0 : stryMutAct_9fa48("1911") ? false : stryMutAct_9fa48("1910") ? true : (stryCov_9fa48("1910", "1911", "1912"), (stryMutAct_9fa48("1913") ? diffVal * fac : (stryCov_9fa48("1913"), diffVal % fac)) === 0)) {
          if (stryMutAct_9fa48("1914")) {
            {}
          } else {
            stryCov_9fa48("1914");
            factors.push(fac);
            if (stryMutAct_9fa48("1917") ? fac * fac === diffVal : stryMutAct_9fa48("1916") ? false : stryMutAct_9fa48("1915") ? true : (stryCov_9fa48("1915", "1916", "1917"), (stryMutAct_9fa48("1918") ? fac / fac : (stryCov_9fa48("1918"), fac * fac)) !== diffVal)) factors.push(stryMutAct_9fa48("1919") ? diffVal * fac : (stryCov_9fa48("1919"), diffVal / fac));
          }
        }
      }
    }
    stryMutAct_9fa48("1920") ? factors : (stryCov_9fa48("1920"), factors.sort(stryMutAct_9fa48("1921") ? () => undefined : (stryCov_9fa48("1921"), (a, b) => stryMutAct_9fa48("1922") ? a + b : (stryCov_9fa48("1922"), a - b))));
    for (let candidateFactor of factors) {
      if (stryMutAct_9fa48("1923")) {
        {}
      } else {
        stryCov_9fa48("1923");
        if (stryMutAct_9fa48("1926") ? (candidateFactor <= peakY || candidateFactor > peakX) && candidateFactor > 1000000000 : stryMutAct_9fa48("1925") ? false : stryMutAct_9fa48("1924") ? true : (stryCov_9fa48("1924", "1925", "1926"), (stryMutAct_9fa48("1928") ? candidateFactor <= peakY && candidateFactor > peakX : stryMutAct_9fa48("1927") ? false : (stryCov_9fa48("1927", "1928"), (stryMutAct_9fa48("1931") ? candidateFactor > peakY : stryMutAct_9fa48("1930") ? candidateFactor < peakY : stryMutAct_9fa48("1929") ? false : (stryCov_9fa48("1929", "1930", "1931"), candidateFactor <= peakY)) || (stryMutAct_9fa48("1934") ? candidateFactor <= peakX : stryMutAct_9fa48("1933") ? candidateFactor >= peakX : stryMutAct_9fa48("1932") ? false : (stryCov_9fa48("1932", "1933", "1934"), candidateFactor > peakX)))) || (stryMutAct_9fa48("1937") ? candidateFactor <= 1000000000 : stryMutAct_9fa48("1936") ? candidateFactor >= 1000000000 : stryMutAct_9fa48("1935") ? false : (stryCov_9fa48("1935", "1936", "1937"), candidateFactor > 1000000000)))) continue;
        let remainders = stryMutAct_9fa48("1938") ? ["Stryker was here"] : (stryCov_9fa48("1938"), []);
        for (let x of setX) {
          if (stryMutAct_9fa48("1939")) {
            {}
          } else {
            stryCov_9fa48("1939");
            remainders.push(stryMutAct_9fa48("1940") ? x * candidateFactor : (stryCov_9fa48("1940"), x % candidateFactor));
          }
        }
        stryMutAct_9fa48("1941") ? remainders : (stryCov_9fa48("1941"), remainders.sort(stryMutAct_9fa48("1942") ? () => undefined : (stryCov_9fa48("1942"), (a, b) => stryMutAct_9fa48("1943") ? a + b : (stryCov_9fa48("1943"), a - b))));
        if (stryMutAct_9fa48("1945") ? false : stryMutAct_9fa48("1944") ? true : (stryCov_9fa48("1944", "1945"), arraysMatch(remainders, setY))) {
          if (stryMutAct_9fa48("1946")) {
            {}
          } else {
            stryCov_9fa48("1946");
            return candidateFactor.toString();
          }
        }
      }
    }
    return stryMutAct_9fa48("1947") ? "" : (stryCov_9fa48("1947"), "-1");
  }
}
function arraysMatch(arr1, arr2) {
  if (stryMutAct_9fa48("1948")) {
    {}
  } else {
    stryCov_9fa48("1948");
    if (stryMutAct_9fa48("1951") ? arr1.length === arr2.length : stryMutAct_9fa48("1950") ? false : stryMutAct_9fa48("1949") ? true : (stryCov_9fa48("1949", "1950", "1951"), arr1.length !== arr2.length)) return stryMutAct_9fa48("1952") ? true : (stryCov_9fa48("1952"), false);
    for (let i = 0; stryMutAct_9fa48("1955") ? i >= arr1.length : stryMutAct_9fa48("1954") ? i <= arr1.length : stryMutAct_9fa48("1953") ? false : (stryCov_9fa48("1953", "1954", "1955"), i < arr1.length); stryMutAct_9fa48("1956") ? i-- : (stryCov_9fa48("1956"), i++)) {
      if (stryMutAct_9fa48("1957")) {
        {}
      } else {
        stryCov_9fa48("1957");
        if (stryMutAct_9fa48("1960") ? arr1[i] === arr2[i] : stryMutAct_9fa48("1959") ? false : stryMutAct_9fa48("1958") ? true : (stryCov_9fa48("1958", "1959", "1960"), arr1[i] !== arr2[i])) return stryMutAct_9fa48("1961") ? true : (stryCov_9fa48("1961"), false);
      }
    }
    return stryMutAct_9fa48("1962") ? false : (stryCov_9fa48("1962"), true);
  }
}

// function testing_test() {
//     const testCases = [
//         {
//             input: {
//                 setX: [3, 5, 2, 7],
//                 setY: [0, 1, 1, 1]
//             },
//             expected: "2"
//         },
//         {
//             input: {
//                 setX: [3, 1, 5, 2, 4],
//                 setY: [1, 2, 3, 4, 5]
//             },
//             expected: "31415926" || "6"
//         },
//         {
//             input: {
//                 setX: [2, 3, 4, 7, 8, 9],
//                 setY: [1, 2, 3, 6, 7, 8]
//             },
//             expected: "-1"
//         },
//         {
//             input: {
//                 setX: [21, 22, 25, 28, 20],
//                 setY: [0, 1, 2, 1, 0]
//             },
//             expected: "4"
//         },
//         {
//             input: {
//                 setX: [1, 1, 2, 3, 5, 8],
//                 setY: [0, 0, 1, 1, 0, 0]
//             },
//             expected: "-1"
//         }
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { setX, setY } = testCases[i].input;
//         const expected = testCases[i].expected;
//         const result = solve(setX, setY);
//         console.log(`Test Case ${i + 1}: ${result === expected ? "Passed" : "Failed"}`);
//         if (result !== expected) {
//             console.log(`  Expected: ${expected}`);
//             console.log(`  Received: ${result}`);
//         }
//     }
// }

// testing_test();

//ok. output can many. verified