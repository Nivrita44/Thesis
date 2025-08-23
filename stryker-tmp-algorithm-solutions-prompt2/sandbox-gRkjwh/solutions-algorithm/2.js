// Pure logic function
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
export function solve(name1, name2, pile) {
  if (stryMutAct_9fa48("139")) {
    {}
  } else {
    stryCov_9fa48("139");
    const combined = stryMutAct_9fa48("140") ? (name1 + name2).split('').join('') : (stryCov_9fa48("140"), (stryMutAct_9fa48("141") ? name1 - name2 : (stryCov_9fa48("141"), name1 + name2)).split(stryMutAct_9fa48("142") ? "Stryker was here!" : (stryCov_9fa48("142"), '')).sort().join(stryMutAct_9fa48("143") ? "Stryker was here!" : (stryCov_9fa48("143"), '')));
    const target = stryMutAct_9fa48("144") ? pile.split('').join('') : (stryCov_9fa48("144"), pile.split(stryMutAct_9fa48("145") ? "Stryker was here!" : (stryCov_9fa48("145"), '')).sort().join(stryMutAct_9fa48("146") ? "Stryker was here!" : (stryCov_9fa48("146"), '')));
    return (stryMutAct_9fa48("149") ? combined !== target : stryMutAct_9fa48("148") ? false : stryMutAct_9fa48("147") ? true : (stryCov_9fa48("147", "148", "149"), combined === target)) ? stryMutAct_9fa48("150") ? "" : (stryCov_9fa48("150"), 'YES') : stryMutAct_9fa48("151") ? "" : (stryCov_9fa48("151"), 'NO');
  }
}

// Test function
// function testing_test() {
//     const tests = [{
//             input: ['SANTACLAUS', 'DEDMOROZ', 'SANTAMOROZDEDCLAUS'],
//             expected: 'YES'
//         },
//         {
//             input: ['PAPAINOEL', 'JOULUPUKKI', 'JOULNAPAOILELUPUKKI'],
//             expected: 'NO'
//         },
//         {
//             input: ['BABBONATALE', 'FATHERCHRISTMAS', 'BABCHRISTMASBONATALLEFATHER'],
//             expected: 'NO'
//         }
//     ];

//     tests.forEach(({ input, expected }, index) => {
//         const result = solve(...input);
//         const status = result === expected ? '✅' : '❌';
//         console.log(`${status} Test ${index + 1}: Expected = ${expected}, Got = ${result}`);
//     });
// }

// // Run tests when this file is executed directly
// if (require.main === module) {
//    testing_test();
// }