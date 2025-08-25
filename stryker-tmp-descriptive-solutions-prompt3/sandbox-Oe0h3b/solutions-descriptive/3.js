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
  if (stryMutAct_9fa48("1346")) {
    {}
  } else {
    stryCov_9fa48("1346");
    const segments1 = stryMutAct_9fa48("1347") ? ["Stryker was here"] : (stryCov_9fa48("1347"), []),
      segments2 = stryMutAct_9fa48("1348") ? ["Stryker was here"] : (stryCov_9fa48("1348"), []);
    computeSegments(segments1, range1Start, range1End, 0, 1 << 20);
    computeSegments(segments2, range2Start, range2End, 0, 1 << 20);
    let total = 0;
    for (let len1 of segments1) {
      if (stryMutAct_9fa48("1349")) {
        {}
      } else {
        stryCov_9fa48("1349");
        for (let len2 of segments2) {
          if (stryMutAct_9fa48("1350")) {
            {}
          } else {
            stryCov_9fa48("1350");
            const commonGCD = gcd(len1, len2);
            stryMutAct_9fa48("1351") ? total -= len1 / commonGCD * (len2 / commonGCD) : (stryCov_9fa48("1351"), total += stryMutAct_9fa48("1352") ? len1 / commonGCD / (len2 / commonGCD) : (stryCov_9fa48("1352"), (stryMutAct_9fa48("1353") ? len1 * commonGCD : (stryCov_9fa48("1353"), len1 / commonGCD)) * (stryMutAct_9fa48("1354") ? len2 * commonGCD : (stryCov_9fa48("1354"), len2 / commonGCD))));
          }
        }
      }
    }
    return total;
  }
}
function computeSegments(segmentList, queryStart, queryEnd, segmentStart, segmentEnd) {
  if (stryMutAct_9fa48("1355")) {
    {}
  } else {
    stryCov_9fa48("1355");
    // If the segment [segmentStart, segmentEnd) is completely within [queryStart, queryEnd), use it
    if (stryMutAct_9fa48("1358") ? queryStart <= segmentStart || queryEnd >= segmentEnd : stryMutAct_9fa48("1357") ? false : stryMutAct_9fa48("1356") ? true : (stryCov_9fa48("1356", "1357", "1358"), (stryMutAct_9fa48("1361") ? queryStart > segmentStart : stryMutAct_9fa48("1360") ? queryStart < segmentStart : stryMutAct_9fa48("1359") ? true : (stryCov_9fa48("1359", "1360", "1361"), queryStart <= segmentStart)) && (stryMutAct_9fa48("1364") ? queryEnd < segmentEnd : stryMutAct_9fa48("1363") ? queryEnd > segmentEnd : stryMutAct_9fa48("1362") ? true : (stryCov_9fa48("1362", "1363", "1364"), queryEnd >= segmentEnd)))) {
      if (stryMutAct_9fa48("1365")) {
        {}
      } else {
        stryCov_9fa48("1365");
        segmentList.push(stryMutAct_9fa48("1366") ? segmentEnd + segmentStart : (stryCov_9fa48("1366"), segmentEnd - segmentStart));
        return;
      }
    }
    const mid = stryMutAct_9fa48("1367") ? (segmentStart + segmentEnd) * 2 : (stryCov_9fa48("1367"), (stryMutAct_9fa48("1368") ? segmentStart - segmentEnd : (stryCov_9fa48("1368"), segmentStart + segmentEnd)) / 2);

    // Recurse into left and/or right halves if they intersect with [queryStart, queryEnd)
    if (stryMutAct_9fa48("1372") ? queryStart >= mid : stryMutAct_9fa48("1371") ? queryStart <= mid : stryMutAct_9fa48("1370") ? false : stryMutAct_9fa48("1369") ? true : (stryCov_9fa48("1369", "1370", "1371", "1372"), queryStart < mid)) computeSegments(segmentList, queryStart, queryEnd, segmentStart, mid);
    if (stryMutAct_9fa48("1376") ? queryEnd <= mid : stryMutAct_9fa48("1375") ? queryEnd >= mid : stryMutAct_9fa48("1374") ? false : stryMutAct_9fa48("1373") ? true : (stryCov_9fa48("1373", "1374", "1375", "1376"), queryEnd > mid)) computeSegments(segmentList, queryStart, queryEnd, mid, segmentEnd);
  }
}
function gcd(a, b) {
  if (stryMutAct_9fa48("1377")) {
    {}
  } else {
    stryCov_9fa48("1377");
    while (stryMutAct_9fa48("1379") ? a === 0 : stryMutAct_9fa48("1378") ? false : (stryCov_9fa48("1378", "1379"), a !== 0)) {
      if (stryMutAct_9fa48("1380")) {
        {}
      } else {
        stryCov_9fa48("1380");
        const remainder = stryMutAct_9fa48("1381") ? b * a : (stryCov_9fa48("1381"), b % a);
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