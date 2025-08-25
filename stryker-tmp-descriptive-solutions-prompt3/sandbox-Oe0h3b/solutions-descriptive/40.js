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
  if (stryMutAct_9fa48("1831")) {
    {}
  } else {
    stryCov_9fa48("1831");
    const positionGroups = {};
    let maxLabel = 0;
    for (let i = 0; stryMutAct_9fa48("1834") ? i >= nodeCount : stryMutAct_9fa48("1833") ? i <= nodeCount : stryMutAct_9fa48("1832") ? false : (stryCov_9fa48("1832", "1833", "1834"), i < nodeCount); stryMutAct_9fa48("1835") ? i-- : (stryCov_9fa48("1835"), i++)) {
      if (stryMutAct_9fa48("1836")) {
        {}
      } else {
        stryCov_9fa48("1836");
        const value = pattern[i];
        if (stryMutAct_9fa48("1839") ? false : stryMutAct_9fa48("1838") ? true : stryMutAct_9fa48("1837") ? positionGroups[value] : (stryCov_9fa48("1837", "1838", "1839"), !positionGroups[value])) positionGroups[value] = stryMutAct_9fa48("1840") ? ["Stryker was here"] : (stryCov_9fa48("1840"), []);
        positionGroups[value].push(i);
        maxLabel = stryMutAct_9fa48("1841") ? Math.min(maxLabel, value) : (stryCov_9fa48("1841"), Math.max(maxLabel, value));
      }
    }
    let leftPos = 1,
      rightPos = nodeCount;
    const result = stryMutAct_9fa48("1842") ? Array() : (stryCov_9fa48("1842"), Array(nodeCount));
    const used = stryMutAct_9fa48("1843") ? Array() : (stryCov_9fa48("1843"), Array(nodeCount));
    let leftIndex = 0,
      rightIndex = stryMutAct_9fa48("1844") ? nodeCount + 1 : (stryCov_9fa48("1844"), nodeCount - 1);
    for (let label = 1; stryMutAct_9fa48("1847") ? label > maxLabel : stryMutAct_9fa48("1846") ? label < maxLabel : stryMutAct_9fa48("1845") ? false : (stryCov_9fa48("1845", "1846", "1847"), label <= maxLabel); stryMutAct_9fa48("1848") ? label-- : (stryCov_9fa48("1848"), label++)) {
      if (stryMutAct_9fa48("1849")) {
        {}
      } else {
        stryCov_9fa48("1849");
        while (stryMutAct_9fa48("1850") ? false : (stryCov_9fa48("1850"), used[leftIndex])) stryMutAct_9fa48("1851") ? leftIndex-- : (stryCov_9fa48("1851"), leftIndex++);
        while (stryMutAct_9fa48("1852") ? false : (stryCov_9fa48("1852"), used[rightIndex])) stryMutAct_9fa48("1853") ? rightIndex++ : (stryCov_9fa48("1853"), rightIndex--);
        const group = positionGroups[label];
        const startsAtLeft = stryMutAct_9fa48("1856") ? group[0] !== leftIndex : stryMutAct_9fa48("1855") ? false : stryMutAct_9fa48("1854") ? true : (stryCov_9fa48("1854", "1855", "1856"), group[0] === leftIndex);
        const endsAtRight = stryMutAct_9fa48("1859") ? group[group.length - 1] !== rightIndex : stryMutAct_9fa48("1858") ? false : stryMutAct_9fa48("1857") ? true : (stryCov_9fa48("1857", "1858", "1859"), group[stryMutAct_9fa48("1860") ? group.length + 1 : (stryCov_9fa48("1860"), group.length - 1)] === rightIndex);
        if (stryMutAct_9fa48("1863") ? label % 2 !== 1 : stryMutAct_9fa48("1862") ? false : stryMutAct_9fa48("1861") ? true : (stryCov_9fa48("1861", "1862", "1863"), (stryMutAct_9fa48("1864") ? label * 2 : (stryCov_9fa48("1864"), label % 2)) === 1)) {
          if (stryMutAct_9fa48("1865")) {
            {}
          } else {
            stryCov_9fa48("1865");
            if (stryMutAct_9fa48("1868") ? startsAtLeft || endsAtRight : stryMutAct_9fa48("1867") ? false : stryMutAct_9fa48("1866") ? true : (stryCov_9fa48("1866", "1867", "1868"), startsAtLeft && endsAtRight)) {
              if (stryMutAct_9fa48("1869")) {
                {}
              } else {
                stryCov_9fa48("1869");
                for (let mid = group[0]; stryMutAct_9fa48("1872") ? mid >= nodeCount : stryMutAct_9fa48("1871") ? mid <= nodeCount : stryMutAct_9fa48("1870") ? false : (stryCov_9fa48("1870", "1871", "1872"), mid < nodeCount); stryMutAct_9fa48("1873") ? mid-- : (stryCov_9fa48("1873"), mid++)) {
                  if (stryMutAct_9fa48("1874")) {
                    {}
                  } else {
                    stryCov_9fa48("1874");
                    if (stryMutAct_9fa48("1877") ? pattern[mid] < 0 && pattern[mid] > label : stryMutAct_9fa48("1876") ? false : stryMutAct_9fa48("1875") ? true : (stryCov_9fa48("1875", "1876", "1877"), (stryMutAct_9fa48("1880") ? pattern[mid] >= 0 : stryMutAct_9fa48("1879") ? pattern[mid] <= 0 : stryMutAct_9fa48("1878") ? false : (stryCov_9fa48("1878", "1879", "1880"), pattern[mid] < 0)) || (stryMutAct_9fa48("1883") ? pattern[mid] <= label : stryMutAct_9fa48("1882") ? pattern[mid] >= label : stryMutAct_9fa48("1881") ? false : (stryCov_9fa48("1881", "1882", "1883"), pattern[mid] > label)))) {
                      if (stryMutAct_9fa48("1884")) {
                        {}
                      } else {
                        stryCov_9fa48("1884");
                        fillSymmetric(used, result, group, rightPos, stryMutAct_9fa48("1885") ? +1 : (stryCov_9fa48("1885"), -1), mid);
                        stryMutAct_9fa48("1886") ? rightPos += group.length : (stryCov_9fa48("1886"), rightPos -= group.length);
                        break;
                      }
                    }
                  }
                }
              }
            } else if (stryMutAct_9fa48("1888") ? false : stryMutAct_9fa48("1887") ? true : (stryCov_9fa48("1887", "1888"), endsAtRight)) {
              if (stryMutAct_9fa48("1889")) {
                {}
              } else {
                stryCov_9fa48("1889");
                stryMutAct_9fa48("1890") ? rightPos += group.length : (stryCov_9fa48("1890"), rightPos -= group.length);
                fillLinear(used, result, group, stryMutAct_9fa48("1891") ? rightPos - 1 : (stryCov_9fa48("1891"), rightPos + 1), 1);
              }
            } else {
              if (stryMutAct_9fa48("1892")) {
                {}
              } else {
                stryCov_9fa48("1892");
                fillLinear(used, result, group, rightPos, stryMutAct_9fa48("1893") ? +1 : (stryCov_9fa48("1893"), -1));
                stryMutAct_9fa48("1894") ? rightPos += group.length : (stryCov_9fa48("1894"), rightPos -= group.length);
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("1895")) {
            {}
          } else {
            stryCov_9fa48("1895");
            if (stryMutAct_9fa48("1898") ? startsAtLeft || endsAtRight : stryMutAct_9fa48("1897") ? false : stryMutAct_9fa48("1896") ? true : (stryCov_9fa48("1896", "1897", "1898"), startsAtLeft && endsAtRight)) {
              if (stryMutAct_9fa48("1899")) {
                {}
              } else {
                stryCov_9fa48("1899");
                for (let mid = group[0]; stryMutAct_9fa48("1902") ? mid >= nodeCount : stryMutAct_9fa48("1901") ? mid <= nodeCount : stryMutAct_9fa48("1900") ? false : (stryCov_9fa48("1900", "1901", "1902"), mid < nodeCount); stryMutAct_9fa48("1903") ? mid-- : (stryCov_9fa48("1903"), mid++)) {
                  if (stryMutAct_9fa48("1904")) {
                    {}
                  } else {
                    stryCov_9fa48("1904");
                    if (stryMutAct_9fa48("1907") ? pattern[mid] < 0 && pattern[mid] > label : stryMutAct_9fa48("1906") ? false : stryMutAct_9fa48("1905") ? true : (stryCov_9fa48("1905", "1906", "1907"), (stryMutAct_9fa48("1910") ? pattern[mid] >= 0 : stryMutAct_9fa48("1909") ? pattern[mid] <= 0 : stryMutAct_9fa48("1908") ? false : (stryCov_9fa48("1908", "1909", "1910"), pattern[mid] < 0)) || (stryMutAct_9fa48("1913") ? pattern[mid] <= label : stryMutAct_9fa48("1912") ? pattern[mid] >= label : stryMutAct_9fa48("1911") ? false : (stryCov_9fa48("1911", "1912", "1913"), pattern[mid] > label)))) {
                      if (stryMutAct_9fa48("1914")) {
                        {}
                      } else {
                        stryCov_9fa48("1914");
                        fillSymmetric(used, result, group, leftPos, 1, mid);
                        stryMutAct_9fa48("1915") ? leftPos -= group.length : (stryCov_9fa48("1915"), leftPos += group.length);
                        break;
                      }
                    }
                  }
                }
              }
            } else if (stryMutAct_9fa48("1917") ? false : stryMutAct_9fa48("1916") ? true : (stryCov_9fa48("1916", "1917"), endsAtRight)) {
              if (stryMutAct_9fa48("1918")) {
                {}
              } else {
                stryCov_9fa48("1918");
                stryMutAct_9fa48("1919") ? leftPos -= group.length : (stryCov_9fa48("1919"), leftPos += group.length);
                fillLinear(used, result, group, stryMutAct_9fa48("1920") ? leftPos + 1 : (stryCov_9fa48("1920"), leftPos - 1), stryMutAct_9fa48("1921") ? +1 : (stryCov_9fa48("1921"), -1));
              }
            } else {
              if (stryMutAct_9fa48("1922")) {
                {}
              } else {
                stryCov_9fa48("1922");
                fillLinear(used, result, group, leftPos, 1);
                stryMutAct_9fa48("1923") ? leftPos -= group.length : (stryCov_9fa48("1923"), leftPos += group.length);
              }
            }
          }
        }
      }
    }
    const negOneGroup = positionGroups[stryMutAct_9fa48("1924") ? +1 : (stryCov_9fa48("1924"), -1)];
    if (stryMutAct_9fa48("1926") ? false : stryMutAct_9fa48("1925") ? true : (stryCov_9fa48("1925", "1926"), negOneGroup)) result[negOneGroup[0]] = leftPos;
    return result;
  }
}
function fillLinear(used, result, indices, startValue, step) {
  if (stryMutAct_9fa48("1927")) {
    {}
  } else {
    stryCov_9fa48("1927");
    for (let k = 0; stryMutAct_9fa48("1930") ? k >= indices.length : stryMutAct_9fa48("1929") ? k <= indices.length : stryMutAct_9fa48("1928") ? false : (stryCov_9fa48("1928", "1929", "1930"), k < indices.length); stryMutAct_9fa48("1931") ? k-- : (stryCov_9fa48("1931"), k++)) {
      if (stryMutAct_9fa48("1932")) {
        {}
      } else {
        stryCov_9fa48("1932");
        result[indices[k]] = startValue;
        used[indices[k]] = stryMutAct_9fa48("1933") ? false : (stryCov_9fa48("1933"), true);
        stryMutAct_9fa48("1934") ? startValue -= step : (stryCov_9fa48("1934"), startValue += step);
      }
    }
  }
}
function fillSymmetric(used, result, indices, startValue, step, midIndex) {
  if (stryMutAct_9fa48("1935")) {
    {}
  } else {
    stryCov_9fa48("1935");
    let i = 0,
      j = stryMutAct_9fa48("1936") ? indices.length + 1 : (stryCov_9fa48("1936"), indices.length - 1);
    while (stryMutAct_9fa48("1939") ? indices[i] >= midIndex : stryMutAct_9fa48("1938") ? indices[i] <= midIndex : stryMutAct_9fa48("1937") ? false : (stryCov_9fa48("1937", "1938", "1939"), indices[i] < midIndex)) {
      if (stryMutAct_9fa48("1940")) {
        {}
      } else {
        stryCov_9fa48("1940");
        used[indices[i]] = stryMutAct_9fa48("1941") ? false : (stryCov_9fa48("1941"), true);
        result[indices[stryMutAct_9fa48("1942") ? i-- : (stryCov_9fa48("1942"), i++)]] = startValue;
        stryMutAct_9fa48("1943") ? startValue -= step : (stryCov_9fa48("1943"), startValue += step);
      }
    }
    while (stryMutAct_9fa48("1946") ? indices[j] <= midIndex : stryMutAct_9fa48("1945") ? indices[j] >= midIndex : stryMutAct_9fa48("1944") ? false : (stryCov_9fa48("1944", "1945", "1946"), indices[j] > midIndex)) {
      if (stryMutAct_9fa48("1947")) {
        {}
      } else {
        stryCov_9fa48("1947");
        used[indices[j]] = stryMutAct_9fa48("1948") ? false : (stryCov_9fa48("1948"), true);
        result[indices[stryMutAct_9fa48("1949") ? j++ : (stryCov_9fa48("1949"), j--)]] = startValue;
        stryMutAct_9fa48("1950") ? startValue -= step : (stryCov_9fa48("1950"), startValue += step);
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