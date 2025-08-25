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
export function solve(testCases) {
  if (stryMutAct_9fa48("266")) {
    {}
  } else {
    stryCov_9fa48("266");
    const result = stryMutAct_9fa48("267") ? ["Stryker was here"] : (stryCov_9fa48("267"), []);
    const maxLength = 100001;
    const prefixSum = new Int32Array(maxLength);
    const transformed = new Int32Array(maxLength);
    const frequency = new Int32Array(stryMutAct_9fa48("268") ? 3 / maxLength : (stryCov_9fa48("268"), 3 * maxLength)); // offset applied during usage

    for (const array of testCases) {
      if (stryMutAct_9fa48("269")) {
        {}
      } else {
        stryCov_9fa48("269");
        const length = array.length;
        let totalSubarrays = stryMutAct_9fa48("270") ? BigInt(length) * BigInt(length + 1) * 2n : (stryCov_9fa48("270"), (stryMutAct_9fa48("271") ? BigInt(length) / BigInt(length + 1) : (stryCov_9fa48("271"), BigInt(length) * BigInt(stryMutAct_9fa48("272") ? length - 1 : (stryCov_9fa48("272"), length + 1)))) / 2n);
        for (let threshold = 1; stryMutAct_9fa48("275") ? threshold > 10 : stryMutAct_9fa48("274") ? threshold < 10 : stryMutAct_9fa48("273") ? false : (stryCov_9fa48("273", "274", "275"), threshold <= 10); stryMutAct_9fa48("276") ? threshold-- : (stryCov_9fa48("276"), threshold++)) {
          if (stryMutAct_9fa48("277")) {
            {}
          } else {
            stryCov_9fa48("277");
            let resetPointer = 0;
            prefixSum[0] = 0;
            for (let i = 1; stryMutAct_9fa48("280") ? i > length : stryMutAct_9fa48("279") ? i < length : stryMutAct_9fa48("278") ? false : (stryCov_9fa48("278", "279", "280"), i <= length); stryMutAct_9fa48("281") ? i-- : (stryCov_9fa48("281"), i++)) {
              if (stryMutAct_9fa48("282")) {
                {}
              } else {
                stryCov_9fa48("282");
                transformed[i] = (stryMutAct_9fa48("286") ? array[i - 1] >= threshold : stryMutAct_9fa48("285") ? array[i - 1] <= threshold : stryMutAct_9fa48("284") ? false : stryMutAct_9fa48("283") ? true : (stryCov_9fa48("283", "284", "285", "286"), array[stryMutAct_9fa48("287") ? i + 1 : (stryCov_9fa48("287"), i - 1)] < threshold)) ? stryMutAct_9fa48("288") ? +1 : (stryCov_9fa48("288"), -1) : 1;
                prefixSum[i] = stryMutAct_9fa48("289") ? transformed[i] - prefixSum[i - 1] : (stryCov_9fa48("289"), transformed[i] + prefixSum[stryMutAct_9fa48("290") ? i + 1 : (stryCov_9fa48("290"), i - 1)]);
              }
            }
            for (let i = 1; stryMutAct_9fa48("293") ? i > length : stryMutAct_9fa48("292") ? i < length : stryMutAct_9fa48("291") ? false : (stryCov_9fa48("291", "292", "293"), i <= length); stryMutAct_9fa48("294") ? i-- : (stryCov_9fa48("294"), i++)) {
              if (stryMutAct_9fa48("295")) {
                {}
              } else {
                stryCov_9fa48("295");
                if (stryMutAct_9fa48("298") ? array[i - 1] !== threshold : stryMutAct_9fa48("297") ? false : stryMutAct_9fa48("296") ? true : (stryCov_9fa48("296", "297", "298"), array[stryMutAct_9fa48("299") ? i + 1 : (stryCov_9fa48("299"), i - 1)] === threshold)) {
                  if (stryMutAct_9fa48("300")) {
                    {}
                  } else {
                    stryCov_9fa48("300");
                    while (stryMutAct_9fa48("303") ? resetPointer >= i : stryMutAct_9fa48("302") ? resetPointer <= i : stryMutAct_9fa48("301") ? false : (stryCov_9fa48("301", "302", "303"), resetPointer < i)) {
                      if (stryMutAct_9fa48("304")) {
                        {}
                      } else {
                        stryCov_9fa48("304");
                        stryMutAct_9fa48("305") ? frequency[prefixSum[resetPointer] + 114514]-- : (stryCov_9fa48("305"), frequency[stryMutAct_9fa48("306") ? prefixSum[resetPointer] - 114514 : (stryCov_9fa48("306"), prefixSum[resetPointer] + 114514)]++);
                        stryMutAct_9fa48("307") ? resetPointer-- : (stryCov_9fa48("307"), resetPointer++);
                      }
                    }
                  }
                }
                stryMutAct_9fa48("308") ? totalSubarrays += BigInt(frequency[prefixSum[i] + 114514]) : (stryCov_9fa48("308"), totalSubarrays -= BigInt(frequency[stryMutAct_9fa48("309") ? prefixSum[i] - 114514 : (stryCov_9fa48("309"), prefixSum[i] + 114514)]));
              }
            }
            for (let i = 0; stryMutAct_9fa48("312") ? i > length : stryMutAct_9fa48("311") ? i < length : stryMutAct_9fa48("310") ? false : (stryCov_9fa48("310", "311", "312"), i <= length); stryMutAct_9fa48("313") ? i-- : (stryCov_9fa48("313"), i++)) {
              if (stryMutAct_9fa48("314")) {
                {}
              } else {
                stryCov_9fa48("314");
                frequency[stryMutAct_9fa48("315") ? prefixSum[i] - 114514 : (stryCov_9fa48("315"), prefixSum[i] + 114514)] = 0;
              }
            }
          }
        }
        result.push(Number(totalSubarrays));
      }
    }
    return result;
  }
}

// function testing_test() {
//     const testCases = [
//         [1, 1, 1, 1],
//         [1, 10, 2, 3, 3],
//         [6, 3, 2, 3, 5, 3, 4, 2, 3, 5],
//     ];

//     const expectedOutput = [10, 11, 42];
//     const actualOutput = solve(testCases);

//     const allPassed = actualOutput.every((val, idx) => val === expectedOutput[idx]);

//     if (allPassed) {
//         console.log("All test cases passed.");
//     } else {
//         console.log("Test failed.");
//         console.log("Expected:", expectedOutput);
//         console.log("Received:", actualOutput);
//     }
// }

// testing_test();