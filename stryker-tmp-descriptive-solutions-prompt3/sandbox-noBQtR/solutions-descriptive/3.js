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
export function solve(range1Start, range1End, range2Start, range2End) {
  if (stryMutAct_9fa48("1571")) {
    {}
  } else {
    stryCov_9fa48("1571");
    const segments1 = stryMutAct_9fa48("1572") ? ["Stryker was here"] : (stryCov_9fa48("1572"), []),
      segments2 = stryMutAct_9fa48("1573") ? ["Stryker was here"] : (stryCov_9fa48("1573"), []);
    computeSegments(segments1, range1Start, range1End, 0, 1 << 20);
    computeSegments(segments2, range2Start, range2End, 0, 1 << 20);
    let total = 0;
    for (let len1 of segments1) {
      if (stryMutAct_9fa48("1574")) {
        {}
      } else {
        stryCov_9fa48("1574");
        for (let len2 of segments2) {
          if (stryMutAct_9fa48("1575")) {
            {}
          } else {
            stryCov_9fa48("1575");
            const commonGCD = gcd(len1, len2);
            stryMutAct_9fa48("1576") ? total -= len1 / commonGCD * (len2 / commonGCD) : (stryCov_9fa48("1576"), total += stryMutAct_9fa48("1577") ? len1 / commonGCD / (len2 / commonGCD) : (stryCov_9fa48("1577"), (stryMutAct_9fa48("1578") ? len1 * commonGCD : (stryCov_9fa48("1578"), len1 / commonGCD)) * (stryMutAct_9fa48("1579") ? len2 * commonGCD : (stryCov_9fa48("1579"), len2 / commonGCD))));
          }
        }
      }
    }
    return total;
  }
}
function computeSegments(segmentList, queryStart, queryEnd, segmentStart, segmentEnd) {
  if (stryMutAct_9fa48("1580")) {
    {}
  } else {
    stryCov_9fa48("1580");
    // If the segment [segmentStart, segmentEnd) is completely within [queryStart, queryEnd), use it
    if (stryMutAct_9fa48("1583") ? queryStart <= segmentStart || queryEnd >= segmentEnd : stryMutAct_9fa48("1582") ? false : stryMutAct_9fa48("1581") ? true : (stryCov_9fa48("1581", "1582", "1583"), (stryMutAct_9fa48("1586") ? queryStart > segmentStart : stryMutAct_9fa48("1585") ? queryStart < segmentStart : stryMutAct_9fa48("1584") ? true : (stryCov_9fa48("1584", "1585", "1586"), queryStart <= segmentStart)) && (stryMutAct_9fa48("1589") ? queryEnd < segmentEnd : stryMutAct_9fa48("1588") ? queryEnd > segmentEnd : stryMutAct_9fa48("1587") ? true : (stryCov_9fa48("1587", "1588", "1589"), queryEnd >= segmentEnd)))) {
      if (stryMutAct_9fa48("1590")) {
        {}
      } else {
        stryCov_9fa48("1590");
        segmentList.push(stryMutAct_9fa48("1591") ? segmentEnd + segmentStart : (stryCov_9fa48("1591"), segmentEnd - segmentStart));
        return;
      }
    }
    const mid = stryMutAct_9fa48("1592") ? (segmentStart + segmentEnd) * 2 : (stryCov_9fa48("1592"), (stryMutAct_9fa48("1593") ? segmentStart - segmentEnd : (stryCov_9fa48("1593"), segmentStart + segmentEnd)) / 2);

    // Recurse into left and/or right halves if they intersect with [queryStart, queryEnd)
    if (stryMutAct_9fa48("1597") ? queryStart >= mid : stryMutAct_9fa48("1596") ? queryStart <= mid : stryMutAct_9fa48("1595") ? false : stryMutAct_9fa48("1594") ? true : (stryCov_9fa48("1594", "1595", "1596", "1597"), queryStart < mid)) computeSegments(segmentList, queryStart, queryEnd, segmentStart, mid);
    if (stryMutAct_9fa48("1601") ? queryEnd <= mid : stryMutAct_9fa48("1600") ? queryEnd >= mid : stryMutAct_9fa48("1599") ? false : stryMutAct_9fa48("1598") ? true : (stryCov_9fa48("1598", "1599", "1600", "1601"), queryEnd > mid)) computeSegments(segmentList, queryStart, queryEnd, mid, segmentEnd);
  }
}
function gcd(a, b) {
  if (stryMutAct_9fa48("1602")) {
    {}
  } else {
    stryCov_9fa48("1602");
    while (stryMutAct_9fa48("1604") ? a === 0 : stryMutAct_9fa48("1603") ? false : (stryCov_9fa48("1603", "1604"), a !== 0)) {
      if (stryMutAct_9fa48("1605")) {
        {}
      } else {
        stryCov_9fa48("1605");
        const remainder = stryMutAct_9fa48("1606") ? b * a : (stryCov_9fa48("1606"), b % a);
        b = a;
        a = remainder;
      }
    }
    return b;
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [0, 1, 1, 2], expected: 1 },
//         { input: [0, 2, 0, 2], expected: 1 },
//         { input: [1, 3, 1, 3], expected: 4 },
//         { input: [0, 2, 1, 5], expected: 5 },
//         { input: [9, 98, 244, 353], expected: 374 },
//     ];

//     testCases.forEach(({ input, expected }, i) => {
//         const result = solve(...input);
//         const status = result === expected ? "Passed" : "Failed";
//         console.log(`Test ${i + 1}: ${status}`);
//     });
// }

// testing_test();