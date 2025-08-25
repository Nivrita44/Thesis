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
export function solve(n, m, arrayA, arrayB) {
  if (stryMutAct_9fa48("3772")) {
    {}
  } else {
    stryCov_9fa48("3772");
    stryMutAct_9fa48("3773") ? arrayA : (stryCov_9fa48("3773"), arrayA.sort(stryMutAct_9fa48("3774") ? () => undefined : (stryCov_9fa48("3774"), (x, y) => stryMutAct_9fa48("3775") ? x + y : (stryCov_9fa48("3775"), x - y))));
    stryMutAct_9fa48("3776") ? arrayB : (stryCov_9fa48("3776"), arrayB.sort(stryMutAct_9fa48("3777") ? () => undefined : (stryCov_9fa48("3777"), (x, y) => stryMutAct_9fa48("3778") ? x + y : (stryCov_9fa48("3778"), x - y))));
    let diffA = stryMutAct_9fa48("3779") ? ["Stryker was here"] : (stryCov_9fa48("3779"), []);
    let diffB = stryMutAct_9fa48("3780") ? ["Stryker was here"] : (stryCov_9fa48("3780"), []);
    for (let i = 0; stryMutAct_9fa48("3783") ? i >= Math.floor(n / 2) : stryMutAct_9fa48("3782") ? i <= Math.floor(n / 2) : stryMutAct_9fa48("3781") ? false : (stryCov_9fa48("3781", "3782", "3783"), i < Math.floor(stryMutAct_9fa48("3784") ? n * 2 : (stryCov_9fa48("3784"), n / 2))); stryMutAct_9fa48("3785") ? i-- : (stryCov_9fa48("3785"), i++)) {
      if (stryMutAct_9fa48("3786")) {
        {}
      } else {
        stryCov_9fa48("3786");
        diffA.push(stryMutAct_9fa48("3787") ? arrayA[n - 1 - i] + arrayA[i] : (stryCov_9fa48("3787"), arrayA[stryMutAct_9fa48("3788") ? n - 1 + i : (stryCov_9fa48("3788"), (stryMutAct_9fa48("3789") ? n + 1 : (stryCov_9fa48("3789"), n - 1)) - i)] - arrayA[i]));
      }
    }
    for (let i = 0; stryMutAct_9fa48("3792") ? i >= Math.floor(m / 2) : stryMutAct_9fa48("3791") ? i <= Math.floor(m / 2) : stryMutAct_9fa48("3790") ? false : (stryCov_9fa48("3790", "3791", "3792"), i < Math.floor(stryMutAct_9fa48("3793") ? m * 2 : (stryCov_9fa48("3793"), m / 2))); stryMutAct_9fa48("3794") ? i-- : (stryCov_9fa48("3794"), i++)) {
      if (stryMutAct_9fa48("3795")) {
        {}
      } else {
        stryCov_9fa48("3795");
        diffB.push(stryMutAct_9fa48("3796") ? arrayB[m - 1 - i] + arrayB[i] : (stryCov_9fa48("3796"), arrayB[stryMutAct_9fa48("3797") ? m - 1 + i : (stryCov_9fa48("3797"), (stryMutAct_9fa48("3798") ? m + 1 : (stryCov_9fa48("3798"), m - 1)) - i)] - arrayB[i]));
      }
    }
    const maxTeams = stryMutAct_9fa48("3799") ? Math.max(Math.floor((n + m) / 3), n, m) : (stryCov_9fa48("3799"), Math.min(Math.floor(stryMutAct_9fa48("3800") ? (n + m) * 3 : (stryCov_9fa48("3800"), (stryMutAct_9fa48("3801") ? n - m : (stryCov_9fa48("3801"), n + m)) / 3)), n, m));
    const resultLines = stryMutAct_9fa48("3802") ? [] : (stryCov_9fa48("3802"), [maxTeams.toString()]);
    const maxDiffs = stryMutAct_9fa48("3803") ? ["Stryker was here"] : (stryCov_9fa48("3803"), []);
    let indexA = 0;
    let indexB = 0;
    let totalDifference = 0;
    for (let teamSize = 1; stryMutAct_9fa48("3806") ? teamSize > maxTeams : stryMutAct_9fa48("3805") ? teamSize < maxTeams : stryMutAct_9fa48("3804") ? false : (stryCov_9fa48("3804", "3805", "3806"), teamSize <= maxTeams); stryMutAct_9fa48("3807") ? teamSize-- : (stryCov_9fa48("3807"), teamSize++)) {
      if (stryMutAct_9fa48("3808")) {
        {}
      } else {
        stryCov_9fa48("3808");
        if (stryMutAct_9fa48("3812") ? indexA <= n - teamSize : stryMutAct_9fa48("3811") ? indexA >= n - teamSize : stryMutAct_9fa48("3810") ? false : stryMutAct_9fa48("3809") ? true : (stryCov_9fa48("3809", "3810", "3811", "3812"), indexA > (stryMutAct_9fa48("3813") ? n + teamSize : (stryCov_9fa48("3813"), n - teamSize)))) {
          if (stryMutAct_9fa48("3814")) {
            {}
          } else {
            stryCov_9fa48("3814");
            stryMutAct_9fa48("3815") ? totalDifference -= diffB[indexB] : (stryCov_9fa48("3815"), totalDifference += diffB[indexB]);
            stryMutAct_9fa48("3816") ? indexB-- : (stryCov_9fa48("3816"), indexB++);
            stryMutAct_9fa48("3817") ? indexA++ : (stryCov_9fa48("3817"), indexA--);
            stryMutAct_9fa48("3818") ? totalDifference += diffA[indexA] : (stryCov_9fa48("3818"), totalDifference -= diffA[indexA]);
          }
        }
        if (stryMutAct_9fa48("3822") ? indexB <= m - teamSize : stryMutAct_9fa48("3821") ? indexB >= m - teamSize : stryMutAct_9fa48("3820") ? false : stryMutAct_9fa48("3819") ? true : (stryCov_9fa48("3819", "3820", "3821", "3822"), indexB > (stryMutAct_9fa48("3823") ? m + teamSize : (stryCov_9fa48("3823"), m - teamSize)))) {
          if (stryMutAct_9fa48("3824")) {
            {}
          } else {
            stryCov_9fa48("3824");
            stryMutAct_9fa48("3825") ? totalDifference -= diffA[indexA] : (stryCov_9fa48("3825"), totalDifference += diffA[indexA]);
            stryMutAct_9fa48("3826") ? indexA-- : (stryCov_9fa48("3826"), indexA++);
            stryMutAct_9fa48("3827") ? indexB++ : (stryCov_9fa48("3827"), indexB--);
            stryMutAct_9fa48("3828") ? totalDifference += diffB[indexB] : (stryCov_9fa48("3828"), totalDifference -= diffB[indexB]);
          }
        }
        if (stryMutAct_9fa48("3831") ? indexA !== n - teamSize : stryMutAct_9fa48("3830") ? false : stryMutAct_9fa48("3829") ? true : (stryCov_9fa48("3829", "3830", "3831"), indexA === (stryMutAct_9fa48("3832") ? n + teamSize : (stryCov_9fa48("3832"), n - teamSize)))) {
          if (stryMutAct_9fa48("3833")) {
            {}
          } else {
            stryCov_9fa48("3833");
            stryMutAct_9fa48("3834") ? totalDifference -= diffB[indexB] : (stryCov_9fa48("3834"), totalDifference += diffB[indexB]);
            stryMutAct_9fa48("3835") ? indexB-- : (stryCov_9fa48("3835"), indexB++);
          }
        } else if (stryMutAct_9fa48("3838") ? indexB !== m - teamSize : stryMutAct_9fa48("3837") ? false : stryMutAct_9fa48("3836") ? true : (stryCov_9fa48("3836", "3837", "3838"), indexB === (stryMutAct_9fa48("3839") ? m + teamSize : (stryCov_9fa48("3839"), m - teamSize)))) {
          if (stryMutAct_9fa48("3840")) {
            {}
          } else {
            stryCov_9fa48("3840");
            stryMutAct_9fa48("3841") ? totalDifference -= diffA[indexA] : (stryCov_9fa48("3841"), totalDifference += diffA[indexA]);
            stryMutAct_9fa48("3842") ? indexA-- : (stryCov_9fa48("3842"), indexA++);
          }
        } else if (stryMutAct_9fa48("3846") ? diffA[indexA] <= diffB[indexB] : stryMutAct_9fa48("3845") ? diffA[indexA] >= diffB[indexB] : stryMutAct_9fa48("3844") ? false : stryMutAct_9fa48("3843") ? true : (stryCov_9fa48("3843", "3844", "3845", "3846"), diffA[indexA] > diffB[indexB])) {
          if (stryMutAct_9fa48("3847")) {
            {}
          } else {
            stryCov_9fa48("3847");
            stryMutAct_9fa48("3848") ? totalDifference -= diffA[indexA] : (stryCov_9fa48("3848"), totalDifference += diffA[indexA]);
            stryMutAct_9fa48("3849") ? indexA-- : (stryCov_9fa48("3849"), indexA++);
          }
        } else {
          if (stryMutAct_9fa48("3850")) {
            {}
          } else {
            stryCov_9fa48("3850");
            stryMutAct_9fa48("3851") ? totalDifference -= diffB[indexB] : (stryCov_9fa48("3851"), totalDifference += diffB[indexB]);
            stryMutAct_9fa48("3852") ? indexB-- : (stryCov_9fa48("3852"), indexB++);
          }
        }
        maxDiffs.push(totalDifference);
      }
    }
    if (stryMutAct_9fa48("3856") ? maxTeams <= 0 : stryMutAct_9fa48("3855") ? maxTeams >= 0 : stryMutAct_9fa48("3854") ? false : stryMutAct_9fa48("3853") ? true : (stryCov_9fa48("3853", "3854", "3855", "3856"), maxTeams > 0)) {
      if (stryMutAct_9fa48("3857")) {
        {}
      } else {
        stryCov_9fa48("3857");
        resultLines.push(maxDiffs.join(stryMutAct_9fa48("3858") ? "" : (stryCov_9fa48("3858"), ' ')));
      }
    }
    return resultLines.join(stryMutAct_9fa48("3859") ? "" : (stryCov_9fa48("3859"), '\n'));
  }
}

// function testing_test() {
//     const testCases = [
//         {
//             input: [1, 3, [0], [0, 1, -1]],
//             expected: "1\n2"
//         },
//         {
//             input: [2, 4, [0, 100], [-100, -50, 0, 50]],
//             expected: "2\n150 200"
//         },
//         {
//             input: [2, 4, [0, 1000], [-100, -50, 0, 50]],
//             expected: "2\n1000 200"
//         },
//         {
//             input: [6, 6, [20, 1, 27, 100, 43, 42], [100, 84, 1, 24, 22, 77]],
//             expected: "4\n99 198 260 283"
//         },
//         {
//             input: [8, 2, [564040265, -509489796, 469913620, 198872582, -400714529, 553177666, 131159391, -20796763], [-1000000000, 1000000000]],
//             expected: "2\n2000000000 2027422256"
//         }
//     ];

//     console.log("Running Tests...\n");
//     testCases.forEach(({ input, expected }, index) => {
//         const [n, m, a, b] = input;
//         const result = solve(n, m, a, b);
//         console.log(`Test Case ${index + 1}:`);
//         console.log(`Input: n=${n}, m=${m}, a=[${a}], b=[${b}]`);
//         console.log(`Expected:\n${expected}`);
//         console.log(`Result:\n${result}`);
//         console.log(`Status: ${result === expected ? "PASS" : "FAIL"}\n`);
//     });
// }

// testing_test();