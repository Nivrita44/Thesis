'use strict';

// ✅ Pure function: Computes king's moves from s to t
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
export function solve(s, t) {
  if (stryMutAct_9fa48("58")) {
    {}
  } else {
    stryCov_9fa48("58");
    const start = s.split(stryMutAct_9fa48("59") ? "Stryker was here!" : (stryCov_9fa48("59"), ''));
    const end = t.split(stryMutAct_9fa48("60") ? "Stryker was here!" : (stryCov_9fa48("60"), ''));
    const dx = stryMutAct_9fa48("61") ? end[0].charCodeAt() + start[0].charCodeAt() : (stryCov_9fa48("61"), end[0].charCodeAt() - start[0].charCodeAt());
    const dy = stryMutAct_9fa48("62") ? end[1] + start[1] : (stryCov_9fa48("62"), end[1] - start[1]);
    const steps = stryMutAct_9fa48("63") ? Math.min(Math.abs(dx), Math.abs(dy)) : (stryCov_9fa48("63"), Math.max(Math.abs(dx), Math.abs(dy)));
    const moves = stryMutAct_9fa48("64") ? ["Stryker was here"] : (stryCov_9fa48("64"), []);
    let x = start[0].charCodeAt();
    let y = parseInt(start[1]);
    for (let i = 0; stryMutAct_9fa48("67") ? i >= steps : stryMutAct_9fa48("66") ? i <= steps : stryMutAct_9fa48("65") ? false : (stryCov_9fa48("65", "66", "67"), i < steps); stryMutAct_9fa48("68") ? i-- : (stryCov_9fa48("68"), i++)) {
      if (stryMutAct_9fa48("69")) {
        {}
      } else {
        stryCov_9fa48("69");
        let move = stryMutAct_9fa48("70") ? "Stryker was here!" : (stryCov_9fa48("70"), '');
        if (stryMutAct_9fa48("74") ? x >= end[0].charCodeAt() : stryMutAct_9fa48("73") ? x <= end[0].charCodeAt() : stryMutAct_9fa48("72") ? false : stryMutAct_9fa48("71") ? true : (stryCov_9fa48("71", "72", "73", "74"), x < end[0].charCodeAt())) {
          if (stryMutAct_9fa48("75")) {
            {}
          } else {
            stryCov_9fa48("75");
            move += stryMutAct_9fa48("76") ? "" : (stryCov_9fa48("76"), 'R');
            stryMutAct_9fa48("77") ? x-- : (stryCov_9fa48("77"), x++);
          }
        } else if (stryMutAct_9fa48("81") ? x <= end[0].charCodeAt() : stryMutAct_9fa48("80") ? x >= end[0].charCodeAt() : stryMutAct_9fa48("79") ? false : stryMutAct_9fa48("78") ? true : (stryCov_9fa48("78", "79", "80", "81"), x > end[0].charCodeAt())) {
          if (stryMutAct_9fa48("82")) {
            {}
          } else {
            stryCov_9fa48("82");
            move += stryMutAct_9fa48("83") ? "" : (stryCov_9fa48("83"), 'L');
            stryMutAct_9fa48("84") ? x++ : (stryCov_9fa48("84"), x--);
          }
        }
        if (stryMutAct_9fa48("88") ? y >= end[1] : stryMutAct_9fa48("87") ? y <= end[1] : stryMutAct_9fa48("86") ? false : stryMutAct_9fa48("85") ? true : (stryCov_9fa48("85", "86", "87", "88"), y < end[1])) {
          if (stryMutAct_9fa48("89")) {
            {}
          } else {
            stryCov_9fa48("89");
            move += stryMutAct_9fa48("90") ? "" : (stryCov_9fa48("90"), 'U');
            stryMutAct_9fa48("91") ? y-- : (stryCov_9fa48("91"), y++);
          }
        } else if (stryMutAct_9fa48("95") ? y <= end[1] : stryMutAct_9fa48("94") ? y >= end[1] : stryMutAct_9fa48("93") ? false : stryMutAct_9fa48("92") ? true : (stryCov_9fa48("92", "93", "94", "95"), y > end[1])) {
          if (stryMutAct_9fa48("96")) {
            {}
          } else {
            stryCov_9fa48("96");
            move += stryMutAct_9fa48("97") ? "" : (stryCov_9fa48("97"), 'D');
            stryMutAct_9fa48("98") ? y++ : (stryCov_9fa48("98"), y--);
          }
        }
        moves.push(move);
      }
    }
    return stryMutAct_9fa48("99") ? {} : (stryCov_9fa48("99"), {
      count: steps,
      directions: moves
    });
  }
}

// ✅ Test function
// function testing_test() {
//     const testCases = [{
//             input: ['a8', 'h1'],
//             expected: {
//                 count: 7,
//                 directions: ['RD', 'RD', 'RD', 'RD', 'RD', 'RD', 'RD']
//             }
//         },
//         {
//             input: ['b2', 'b4'],
//             expected: {
//                 count: 2,
//                 directions: ['U', 'U']
//             }
//         }

//     ];

//     console.log("Running Tests...\n");
//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(...input);
//         const countMatch = result.count === expected.count;
//         const directionsMatch = JSON.stringify(result.directions) === JSON.stringify(expected.directions);
//         const status = countMatch && directionsMatch ? "PASS" : "FAIL";

//         console.log(`Test Case ${index + 1}:`);
//         console.log(`Input: ${input[0]} -> ${input[1]}`);
//         console.log(`Expected Count: ${expected.count}`);
//         console.log(`Actual Count:   ${result.count}`);
//         console.log(`Expected Moves: ${expected.directions.join(', ')}`);
//         console.log(`Actual Moves:   ${result.directions.join(', ')}`);
//         console.log(`Status: ${status}\n`);
//     });
// }

// // Run the test
// testing_test();