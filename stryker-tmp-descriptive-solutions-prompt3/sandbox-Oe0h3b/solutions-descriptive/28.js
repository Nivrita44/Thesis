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
export function solve(xBig, yBig) {
  if (stryMutAct_9fa48("1259")) {
    {}
  } else {
    stryCov_9fa48("1259");
    const MAX_BITS = 60;
    const powersOfTwo = stryMutAct_9fa48("1260") ? Array().fill(1n) : (stryCov_9fa48("1260"), Array(stryMutAct_9fa48("1261") ? MAX_BITS - 1 : (stryCov_9fa48("1261"), MAX_BITS + 1)).fill(1n));
    for (let i = 1; stryMutAct_9fa48("1264") ? i > MAX_BITS : stryMutAct_9fa48("1263") ? i < MAX_BITS : stryMutAct_9fa48("1262") ? false : (stryCov_9fa48("1262", "1263", "1264"), i <= MAX_BITS); stryMutAct_9fa48("1265") ? i-- : (stryCov_9fa48("1265"), i++)) {
      if (stryMutAct_9fa48("1266")) {
        {}
      } else {
        stryCov_9fa48("1266");
        powersOfTwo[i] = stryMutAct_9fa48("1267") ? powersOfTwo[i - 1] / 2n : (stryCov_9fa48("1267"), powersOfTwo[stryMutAct_9fa48("1268") ? i + 1 : (stryCov_9fa48("1268"), i - 1)] * 2n);
      }
    }
    const dp = Array.from(stryMutAct_9fa48("1269") ? {} : (stryCov_9fa48("1269"), {
      length: stryMutAct_9fa48("1270") ? MAX_BITS - 1 : (stryCov_9fa48("1270"), MAX_BITS + 1)
    }), stryMutAct_9fa48("1271") ? () => undefined : (stryCov_9fa48("1271"), () => Array.from(stryMutAct_9fa48("1272") ? {} : (stryCov_9fa48("1272"), {
      length: stryMutAct_9fa48("1273") ? MAX_BITS - 1 : (stryCov_9fa48("1273"), MAX_BITS + 1)
    }), stryMutAct_9fa48("1274") ? () => undefined : (stryCov_9fa48("1274"), () => stryMutAct_9fa48("1275") ? Array().fill(Infinity) : (stryCov_9fa48("1275"), Array(stryMutAct_9fa48("1276") ? MAX_BITS - 1 : (stryCov_9fa48("1276"), MAX_BITS + 1)).fill(Infinity))))));
    dp[0][0].fill(0n);
    function update(i, j, k, val) {
      if (stryMutAct_9fa48("1277")) {
        {}
      } else {
        stryCov_9fa48("1277");
        if (stryMutAct_9fa48("1280") ? i <= MAX_BITS || j <= MAX_BITS : stryMutAct_9fa48("1279") ? false : stryMutAct_9fa48("1278") ? true : (stryCov_9fa48("1278", "1279", "1280"), (stryMutAct_9fa48("1283") ? i > MAX_BITS : stryMutAct_9fa48("1282") ? i < MAX_BITS : stryMutAct_9fa48("1281") ? true : (stryCov_9fa48("1281", "1282", "1283"), i <= MAX_BITS)) && (stryMutAct_9fa48("1286") ? j > MAX_BITS : stryMutAct_9fa48("1285") ? j < MAX_BITS : stryMutAct_9fa48("1284") ? true : (stryCov_9fa48("1284", "1285", "1286"), j <= MAX_BITS)))) {
          if (stryMutAct_9fa48("1287")) {
            {}
          } else {
            stryCov_9fa48("1287");
            dp[i][j][k] = (stryMutAct_9fa48("1291") ? dp[i][j][k] >= val : stryMutAct_9fa48("1290") ? dp[i][j][k] <= val : stryMutAct_9fa48("1289") ? false : stryMutAct_9fa48("1288") ? true : (stryCov_9fa48("1288", "1289", "1290", "1291"), dp[i][j][k] < val)) ? dp[i][j][k] : val;
          }
        }
      }
    }
    for (let i = 0; stryMutAct_9fa48("1294") ? i > MAX_BITS : stryMutAct_9fa48("1293") ? i < MAX_BITS : stryMutAct_9fa48("1292") ? false : (stryCov_9fa48("1292", "1293", "1294"), i <= MAX_BITS); stryMutAct_9fa48("1295") ? i-- : (stryCov_9fa48("1295"), i++)) {
      if (stryMutAct_9fa48("1296")) {
        {}
      } else {
        stryCov_9fa48("1296");
        for (let j = 0; stryMutAct_9fa48("1299") ? j > MAX_BITS : stryMutAct_9fa48("1298") ? j < MAX_BITS : stryMutAct_9fa48("1297") ? false : (stryCov_9fa48("1297", "1298", "1299"), j <= MAX_BITS); stryMutAct_9fa48("1300") ? j-- : (stryCov_9fa48("1300"), j++)) {
          if (stryMutAct_9fa48("1301")) {
            {}
          } else {
            stryCov_9fa48("1301");
            for (let k = MAX_BITS; stryMutAct_9fa48("1304") ? k < 1 : stryMutAct_9fa48("1303") ? k > 1 : stryMutAct_9fa48("1302") ? false : (stryCov_9fa48("1302", "1303", "1304"), k >= 1); stryMutAct_9fa48("1305") ? k++ : (stryCov_9fa48("1305"), k--)) {
              if (stryMutAct_9fa48("1306")) {
                {}
              } else {
                stryCov_9fa48("1306");
                if (stryMutAct_9fa48("1309") ? dp[i][j][k] !== Infinity : stryMutAct_9fa48("1308") ? false : stryMutAct_9fa48("1307") ? true : (stryCov_9fa48("1307", "1308", "1309"), dp[i][j][k] === Infinity)) continue;
                const cost = stryMutAct_9fa48("1310") ? dp[i][j][k] - powersOfTwo[k - 1] : (stryCov_9fa48("1310"), dp[i][j][k] + powersOfTwo[stryMutAct_9fa48("1311") ? k + 1 : (stryCov_9fa48("1311"), k - 1)]);
                update(stryMutAct_9fa48("1312") ? i + k + 1 : (stryCov_9fa48("1312"), (stryMutAct_9fa48("1313") ? i - k : (stryCov_9fa48("1313"), i + k)) - 1), j, stryMutAct_9fa48("1314") ? k + 1 : (stryCov_9fa48("1314"), k - 1), cost);
                update(i, stryMutAct_9fa48("1315") ? j + k + 1 : (stryCov_9fa48("1315"), (stryMutAct_9fa48("1316") ? j - k : (stryCov_9fa48("1316"), j + k)) - 1), stryMutAct_9fa48("1317") ? k + 1 : (stryCov_9fa48("1317"), k - 1), cost);
                update(i, j, stryMutAct_9fa48("1318") ? k + 1 : (stryCov_9fa48("1318"), k - 1), dp[i][j][k]);
              }
            }
            for (let k = 1; stryMutAct_9fa48("1321") ? k > MAX_BITS : stryMutAct_9fa48("1320") ? k < MAX_BITS : stryMutAct_9fa48("1319") ? false : (stryCov_9fa48("1319", "1320", "1321"), k <= MAX_BITS); stryMutAct_9fa48("1322") ? k-- : (stryCov_9fa48("1322"), k++)) {
              if (stryMutAct_9fa48("1323")) {
                {}
              } else {
                stryCov_9fa48("1323");
                update(i, j, 0, dp[i][j][k]);
              }
            }
          }
        }
      }
    }
    const xAncestors = new Map();
    let x = xBig;
    for (let i = 0; stryMutAct_9fa48("1326") ? i > MAX_BITS : stryMutAct_9fa48("1325") ? i < MAX_BITS : stryMutAct_9fa48("1324") ? false : (stryCov_9fa48("1324", "1325", "1326"), i <= MAX_BITS); stryMutAct_9fa48("1327") ? i-- : (stryCov_9fa48("1327"), i++)) {
      if (stryMutAct_9fa48("1328")) {
        {}
      } else {
        stryCov_9fa48("1328");
        xAncestors.set(x, i);
        if (stryMutAct_9fa48("1331") ? x !== 0n : stryMutAct_9fa48("1330") ? false : stryMutAct_9fa48("1329") ? true : (stryCov_9fa48("1329", "1330", "1331"), x === 0n)) break;
        x = stryMutAct_9fa48("1332") ? x * 2n : (stryCov_9fa48("1332"), x / 2n);
      }
    }
    let y = yBig;
    let answer = Infinity;
    for (let i = 0; stryMutAct_9fa48("1335") ? i > MAX_BITS : stryMutAct_9fa48("1334") ? i < MAX_BITS : stryMutAct_9fa48("1333") ? false : (stryCov_9fa48("1333", "1334", "1335"), i <= MAX_BITS); stryMutAct_9fa48("1336") ? i-- : (stryCov_9fa48("1336"), i++)) {
      if (stryMutAct_9fa48("1337")) {
        {}
      } else {
        stryCov_9fa48("1337");
        if (stryMutAct_9fa48("1339") ? false : stryMutAct_9fa48("1338") ? true : (stryCov_9fa48("1338", "1339"), xAncestors.has(y))) {
          if (stryMutAct_9fa48("1340")) {
            {}
          } else {
            stryCov_9fa48("1340");
            const j = xAncestors.get(y);
            answer = (stryMutAct_9fa48("1344") ? answer >= dp[j][i][0] : stryMutAct_9fa48("1343") ? answer <= dp[j][i][0] : stryMutAct_9fa48("1342") ? false : stryMutAct_9fa48("1341") ? true : (stryCov_9fa48("1341", "1342", "1343", "1344"), answer < dp[j][i][0])) ? answer : dp[j][i][0];
          }
        }
        y = stryMutAct_9fa48("1345") ? y * 2n : (stryCov_9fa48("1345"), y / 2n);
      }
    }
    return answer;
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [0n, 1n], expected: 2n },
//         { input: [6n, 2n], expected: 6n },
//         { input: [3n, 3n], expected: 0n },
//         { input: [13n, 37n], expected: 26n },
//         { input: [4238659325782394n, 12983091057341925n], expected: 32764n }
//     ];

//     let allPassed = true;
//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(...input);
//         if (result === expected) {
//             console.log(`Test case ${index + 1}: ✅ Passed`);
//         } else {
//             console.log(`Test case ${index + 1}: ❌ Failed (Got ${result}, Expected ${expected})`);
//             allPassed = false;
//         }
//     });

//     if (allPassed) {
//         console.log("🎉 All test cases passed!");
//     }
// }

// testing_test();