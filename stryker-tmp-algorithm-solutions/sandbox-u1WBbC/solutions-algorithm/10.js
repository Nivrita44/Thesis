// @ts-nocheck
// Core logic function
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
export function solve(n) {
  if (stryMutAct_9fa48("6")) {
    {}
  } else {
    stryCov_9fa48("6");
    // Ensure valid number
    if (stryMutAct_9fa48("9") ? (typeof n !== 'number' || n < 0) && !Number.isInteger(n) : stryMutAct_9fa48("8") ? false : stryMutAct_9fa48("7") ? true : (stryCov_9fa48("7", "8", "9"), (stryMutAct_9fa48("11") ? typeof n !== 'number' && n < 0 : stryMutAct_9fa48("10") ? false : (stryCov_9fa48("10", "11"), (stryMutAct_9fa48("13") ? typeof n === 'number' : stryMutAct_9fa48("12") ? false : (stryCov_9fa48("12", "13"), typeof n !== (stryMutAct_9fa48("14") ? "" : (stryCov_9fa48("14"), 'number')))) || (stryMutAct_9fa48("17") ? n >= 0 : stryMutAct_9fa48("16") ? n <= 0 : stryMutAct_9fa48("15") ? false : (stryCov_9fa48("15", "16", "17"), n < 0)))) || (stryMutAct_9fa48("18") ? Number.isInteger(n) : (stryCov_9fa48("18"), !Number.isInteger(n))))) {
      if (stryMutAct_9fa48("19")) {
        {}
      } else {
        stryCov_9fa48("19");
        return stryMutAct_9fa48("20") ? [] : (stryCov_9fa48("20"), [0, stryMutAct_9fa48("21") ? ["Stryker was here"] : (stryCov_9fa48("21"), [])]);
      }
    }
    let m = n;
    let count = 0;
    let parts = stryMutAct_9fa48("22") ? ["Stryker was here"] : (stryCov_9fa48("22"), []);
    let place = 1;
    while (stryMutAct_9fa48("25") ? m <= 0 : stryMutAct_9fa48("24") ? m >= 0 : stryMutAct_9fa48("23") ? false : (stryCov_9fa48("23", "24", "25"), m > 0)) {
      if (stryMutAct_9fa48("26")) {
        {}
      } else {
        stryCov_9fa48("26");
        const digit = stryMutAct_9fa48("27") ? m * 10 : (stryCov_9fa48("27"), m % 10);
        if (stryMutAct_9fa48("30") ? digit === 0 : stryMutAct_9fa48("29") ? false : stryMutAct_9fa48("28") ? true : (stryCov_9fa48("28", "29", "30"), digit !== 0)) {
          if (stryMutAct_9fa48("31")) {
            {}
          } else {
            stryCov_9fa48("31");
            parts.push(stryMutAct_9fa48("32") ? digit / place : (stryCov_9fa48("32"), digit * place));
            stryMutAct_9fa48("33") ? count-- : (stryCov_9fa48("33"), count++);
          }
        }
        m = Math.floor(stryMutAct_9fa48("34") ? m * 10 : (stryCov_9fa48("34"), m / 10));
        stryMutAct_9fa48("35") ? place /= 10 : (stryCov_9fa48("35"), place *= 10);
      }
    }

    // Reverse to keep left-to-right order (like 4000 before 20)
    stryMutAct_9fa48("36") ? parts : (stryCov_9fa48("36"), parts.reverse());
    return stryMutAct_9fa48("37") ? [] : (stryCov_9fa48("37"), [count, parts]);
  }
}

// function testing_test() {
//     const testCases = [{
//             input: 5009,
//             expected: {
//                 count: 2,
//                 parts: [9, 5000]
//             }
//         },
//         {
//             input: 7,
//             expected: {
//                 count: 1,
//                 parts: [7]
//             }
//         },
//         {
//             input: 9876,
//             expected: {
//                 count: 4,
//                 parts: [6, 70, 800, 9000]
//             }
//         },
//         {
//             input: 10000,
//             expected: {
//                 count: 1,
//                 parts: [10000]
//             }
//         },
//         {
//             input: 10,
//             expected: {
//                 count: 1,
//                 parts: [10]
//             }
//         }
//     ];

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);

//         // Compare arrays without using JSON.stringify for BigInt compatibility
//         const partsMatch = result.parts.length === expected.parts.length && 
//             result.parts.every((part, i) => {
//                 // Convert to string for comparison to handle both BigInt and Number
//                 return String(part) === String(expected.parts[i]);
//             });

//         const match = result.count === expected.count && partsMatch;

//         console.log(`Test ${index + 1}: ${match ? "PASS" : "FAIL"}`);
//         if (!match) {
//             console.log(`  Expected: count=${expected.count}, parts=${expected.parts}`);
//             console.log(`  Got:      count=${result.count}, parts=${result.parts}`);
//         } else {
//             console.log(result.count);
//             console.log(result.parts.join("\n"));
//         }
//     });
// }

// Run test if executed directly
// Check if this file is being run directly
// if (import.meta.url === new URL(import.meta.url).href) {
//     testing_test();
// }