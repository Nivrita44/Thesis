// generatePermutations -> solve
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
export function solve(n, k) {
  if (stryMutAct_9fa48("1148")) {
    {}
  } else {
    stryCov_9fa48("1148");
    if (stryMutAct_9fa48("1151") ? n !== 1 : stryMutAct_9fa48("1150") ? false : stryMutAct_9fa48("1149") ? true : (stryCov_9fa48("1149", "1150", "1151"), n === 1)) {
      if (stryMutAct_9fa48("1152")) {
        {}
      } else {
        stryCov_9fa48("1152");
        if (stryMutAct_9fa48("1155") ? k !== 1 : stryMutAct_9fa48("1154") ? false : stryMutAct_9fa48("1153") ? true : (stryCov_9fa48("1153", "1154", "1155"), k === 1)) return stryMutAct_9fa48("1156") ? [] : (stryCov_9fa48("1156"), [stryMutAct_9fa48("1157") ? [] : (stryCov_9fa48("1157"), [stryMutAct_9fa48("1158") ? "" : (stryCov_9fa48("1158"), '1')])]);
        return null;
      }
    }
    if (stryMutAct_9fa48("1161") ? n !== 2 : stryMutAct_9fa48("1160") ? false : stryMutAct_9fa48("1159") ? true : (stryCov_9fa48("1159", "1160", "1161"), n === 2)) {
      if (stryMutAct_9fa48("1162")) {
        {}
      } else {
        stryCov_9fa48("1162");
        if (stryMutAct_9fa48("1165") ? k !== 2 : stryMutAct_9fa48("1164") ? false : stryMutAct_9fa48("1163") ? true : (stryCov_9fa48("1163", "1164", "1165"), k === 2)) return stryMutAct_9fa48("1166") ? [] : (stryCov_9fa48("1166"), [stryMutAct_9fa48("1167") ? [] : (stryCov_9fa48("1167"), [stryMutAct_9fa48("1168") ? "" : (stryCov_9fa48("1168"), '1 2'), stryMutAct_9fa48("1169") ? "" : (stryCov_9fa48("1169"), '2 1')])]);
        return null;
      }
    }
    if (stryMutAct_9fa48("1172") ? k === 1 && n % 2 === 0 && k % 2 === 1 : stryMutAct_9fa48("1171") ? false : stryMutAct_9fa48("1170") ? true : (stryCov_9fa48("1170", "1171", "1172"), (stryMutAct_9fa48("1174") ? k !== 1 : stryMutAct_9fa48("1173") ? false : (stryCov_9fa48("1173", "1174"), k === 1)) || (stryMutAct_9fa48("1176") ? n % 2 === 0 || k % 2 === 1 : stryMutAct_9fa48("1175") ? false : (stryCov_9fa48("1175", "1176"), (stryMutAct_9fa48("1178") ? n % 2 !== 0 : stryMutAct_9fa48("1177") ? true : (stryCov_9fa48("1177", "1178"), (stryMutAct_9fa48("1179") ? n * 2 : (stryCov_9fa48("1179"), n % 2)) === 0)) && (stryMutAct_9fa48("1181") ? k % 2 !== 1 : stryMutAct_9fa48("1180") ? true : (stryCov_9fa48("1180", "1181"), (stryMutAct_9fa48("1182") ? k * 2 : (stryCov_9fa48("1182"), k % 2)) === 1)))))) return null;
    if (stryMutAct_9fa48("1186") ? n > 8 : stryMutAct_9fa48("1185") ? n < 8 : stryMutAct_9fa48("1184") ? false : stryMutAct_9fa48("1183") ? true : (stryCov_9fa48("1183", "1184", "1185", "1186"), n <= 8)) {
      if (stryMutAct_9fa48("1187")) {
        {}
      } else {
        stryCov_9fa48("1187");
        let factorial = 1;
        for (let i = 2; stryMutAct_9fa48("1190") ? i > n : stryMutAct_9fa48("1189") ? i < n : stryMutAct_9fa48("1188") ? false : (stryCov_9fa48("1188", "1189", "1190"), i <= n); stryMutAct_9fa48("1191") ? i-- : (stryCov_9fa48("1191"), i++)) stryMutAct_9fa48("1192") ? factorial /= i : (stryCov_9fa48("1192"), factorial *= i);
        if (stryMutAct_9fa48("1195") ? k > factorial && k === factorial - 1 : stryMutAct_9fa48("1194") ? false : stryMutAct_9fa48("1193") ? true : (stryCov_9fa48("1193", "1194", "1195"), (stryMutAct_9fa48("1198") ? k <= factorial : stryMutAct_9fa48("1197") ? k >= factorial : stryMutAct_9fa48("1196") ? false : (stryCov_9fa48("1196", "1197", "1198"), k > factorial)) || (stryMutAct_9fa48("1200") ? k !== factorial - 1 : stryMutAct_9fa48("1199") ? false : (stryCov_9fa48("1199", "1200"), k === (stryMutAct_9fa48("1201") ? factorial + 1 : (stryCov_9fa48("1201"), factorial - 1)))))) return null;
      }
    }
    const result = stryMutAct_9fa48("1202") ? ["Stryker was here"] : (stryCov_9fa48("1202"), []);
    if (stryMutAct_9fa48("1205") ? k % 2 !== 0 : stryMutAct_9fa48("1204") ? false : stryMutAct_9fa48("1203") ? true : (stryCov_9fa48("1203", "1204", "1205"), (stryMutAct_9fa48("1206") ? k * 2 : (stryCov_9fa48("1206"), k % 2)) === 0)) {
      if (stryMutAct_9fa48("1207")) {
        {}
      } else {
        stryCov_9fa48("1207");
        let count = 0;
        let perm = Array.from(stryMutAct_9fa48("1208") ? {} : (stryCov_9fa48("1208"), {
          length: n
        }), stryMutAct_9fa48("1209") ? () => undefined : (stryCov_9fa48("1209"), (_, i) => stryMutAct_9fa48("1210") ? i - 1 : (stryCov_9fa48("1210"), i + 1)));
        do {
          if (stryMutAct_9fa48("1211")) {
            {}
          } else {
            stryCov_9fa48("1211");
            result.push(perm.join(stryMutAct_9fa48("1212") ? "" : (stryCov_9fa48("1212"), ' ')));
            result.push(perm.map(stryMutAct_9fa48("1213") ? () => undefined : (stryCov_9fa48("1213"), x => stryMutAct_9fa48("1214") ? n + 1 + x : (stryCov_9fa48("1214"), (stryMutAct_9fa48("1215") ? n - 1 : (stryCov_9fa48("1215"), n + 1)) - x))).join(stryMutAct_9fa48("1216") ? "" : (stryCov_9fa48("1216"), ' ')));
            stryMutAct_9fa48("1217") ? count -= 2 : (stryCov_9fa48("1217"), count += 2);
            if (stryMutAct_9fa48("1220") ? count !== k : stryMutAct_9fa48("1219") ? false : stryMutAct_9fa48("1218") ? true : (stryCov_9fa48("1218", "1219", "1220"), count === k)) break;
          }
        } while (stryMutAct_9fa48("1221") ? false : (stryCov_9fa48("1221"), nextPermutation(perm)));
      }
    } else {
      if (stryMutAct_9fa48("1222")) {
        {}
      } else {
        stryCov_9fa48("1222");
        let basePerm = Array.from(stryMutAct_9fa48("1223") ? {} : (stryCov_9fa48("1223"), {
          length: n
        }), stryMutAct_9fa48("1224") ? () => undefined : (stryCov_9fa48("1224"), (_, i) => stryMutAct_9fa48("1225") ? i - 1 : (stryCov_9fa48("1225"), i + 1)));
        const initialSet = stryMutAct_9fa48("1226") ? Array().fill().map(() => Array(n)) : (stryCov_9fa48("1226"), Array(3).fill().map(stryMutAct_9fa48("1227") ? () => undefined : (stryCov_9fa48("1227"), () => stryMutAct_9fa48("1228") ? Array() : (stryCov_9fa48("1228"), Array(n)))));
        for (let i = 0; stryMutAct_9fa48("1231") ? i >= n : stryMutAct_9fa48("1230") ? i <= n : stryMutAct_9fa48("1229") ? false : (stryCov_9fa48("1229", "1230", "1231"), i < n); stryMutAct_9fa48("1232") ? i-- : (stryCov_9fa48("1232"), i++)) initialSet[0][i] = stryMutAct_9fa48("1233") ? i - 1 : (stryCov_9fa48("1233"), i + 1);
        let mid = Math.floor(stryMutAct_9fa48("1234") ? n * 2 : (stryCov_9fa48("1234"), n / 2));
        let value = 1;
        for (let i = stryMutAct_9fa48("1235") ? mid - 1 : (stryCov_9fa48("1235"), mid + 1); stryMutAct_9fa48("1238") ? i >= n : stryMutAct_9fa48("1237") ? i <= n : stryMutAct_9fa48("1236") ? false : (stryCov_9fa48("1236", "1237", "1238"), i < n); stryMutAct_9fa48("1239") ? i-- : (stryCov_9fa48("1239"), i++)) initialSet[1][i] = stryMutAct_9fa48("1240") ? value-- : (stryCov_9fa48("1240"), value++);
        for (let i = 0; stryMutAct_9fa48("1243") ? i > mid : stryMutAct_9fa48("1242") ? i < mid : stryMutAct_9fa48("1241") ? false : (stryCov_9fa48("1241", "1242", "1243"), i <= mid); stryMutAct_9fa48("1244") ? i-- : (stryCov_9fa48("1244"), i++)) initialSet[1][i] = stryMutAct_9fa48("1245") ? value-- : (stryCov_9fa48("1245"), value++);
        value = 1;
        for (let i = mid; stryMutAct_9fa48("1248") ? i < 0 : stryMutAct_9fa48("1247") ? i > 0 : stryMutAct_9fa48("1246") ? false : (stryCov_9fa48("1246", "1247", "1248"), i >= 0); stryMutAct_9fa48("1249") ? i++ : (stryCov_9fa48("1249"), i--)) initialSet[2][i] = value, stryMutAct_9fa48("1250") ? value -= 2 : (stryCov_9fa48("1250"), value += 2);
        value = 2;
        for (let i = stryMutAct_9fa48("1251") ? n + 1 : (stryCov_9fa48("1251"), n - 1); stryMutAct_9fa48("1254") ? i <= mid : stryMutAct_9fa48("1253") ? i >= mid : stryMutAct_9fa48("1252") ? false : (stryCov_9fa48("1252", "1253", "1254"), i > mid); stryMutAct_9fa48("1255") ? i++ : (stryCov_9fa48("1255"), i--)) initialSet[2][i] = value, stryMutAct_9fa48("1256") ? value -= 2 : (stryCov_9fa48("1256"), value += 2);
        for (let i = 0; stryMutAct_9fa48("1259") ? i >= 3 : stryMutAct_9fa48("1258") ? i <= 3 : stryMutAct_9fa48("1257") ? false : (stryCov_9fa48("1257", "1258", "1259"), i < 3); stryMutAct_9fa48("1260") ? i-- : (stryCov_9fa48("1260"), i++)) {
          if (stryMutAct_9fa48("1261")) {
            {}
          } else {
            stryCov_9fa48("1261");
            result.push(initialSet[i].join(stryMutAct_9fa48("1262") ? "" : (stryCov_9fa48("1262"), ' ')));
          }
        }
        let count = 3;
        outer: do {
          if (stryMutAct_9fa48("1263")) {
            {}
          } else {
            stryCov_9fa48("1263");
            if (stryMutAct_9fa48("1266") ? count !== k : stryMutAct_9fa48("1265") ? false : stryMutAct_9fa48("1264") ? true : (stryCov_9fa48("1264", "1265", "1266"), count === k)) break;
            for (let i = 0; stryMutAct_9fa48("1269") ? i >= 3 : stryMutAct_9fa48("1268") ? i <= 3 : stryMutAct_9fa48("1267") ? false : (stryCov_9fa48("1267", "1268", "1269"), i < 3); stryMutAct_9fa48("1270") ? i-- : (stryCov_9fa48("1270"), i++)) {
              if (stryMutAct_9fa48("1271")) {
                {}
              } else {
                stryCov_9fa48("1271");
                let matchOriginal = stryMutAct_9fa48("1272") ? basePerm.some((val, idx) => val === initialSet[i][idx]) : (stryCov_9fa48("1272"), basePerm.every(stryMutAct_9fa48("1273") ? () => undefined : (stryCov_9fa48("1273"), (val, idx) => stryMutAct_9fa48("1276") ? val !== initialSet[i][idx] : stryMutAct_9fa48("1275") ? false : stryMutAct_9fa48("1274") ? true : (stryCov_9fa48("1274", "1275", "1276"), val === initialSet[i][idx]))));
                let matchInverted = stryMutAct_9fa48("1277") ? basePerm.some((val, idx) => n + 1 - val === initialSet[i][idx]) : (stryCov_9fa48("1277"), basePerm.every(stryMutAct_9fa48("1278") ? () => undefined : (stryCov_9fa48("1278"), (val, idx) => stryMutAct_9fa48("1281") ? n + 1 - val !== initialSet[i][idx] : stryMutAct_9fa48("1280") ? false : stryMutAct_9fa48("1279") ? true : (stryCov_9fa48("1279", "1280", "1281"), (stryMutAct_9fa48("1282") ? n + 1 + val : (stryCov_9fa48("1282"), (stryMutAct_9fa48("1283") ? n - 1 : (stryCov_9fa48("1283"), n + 1)) - val)) === initialSet[i][idx]))));
                if (stryMutAct_9fa48("1286") ? matchOriginal && matchInverted : stryMutAct_9fa48("1285") ? false : stryMutAct_9fa48("1284") ? true : (stryCov_9fa48("1284", "1285", "1286"), matchOriginal || matchInverted)) continue outer;
              }
            }
            result.push(basePerm.join(stryMutAct_9fa48("1287") ? "" : (stryCov_9fa48("1287"), ' ')));
            result.push(basePerm.map(stryMutAct_9fa48("1288") ? () => undefined : (stryCov_9fa48("1288"), x => stryMutAct_9fa48("1289") ? n + 1 + x : (stryCov_9fa48("1289"), (stryMutAct_9fa48("1290") ? n - 1 : (stryCov_9fa48("1290"), n + 1)) - x))).join(stryMutAct_9fa48("1291") ? "" : (stryCov_9fa48("1291"), ' ')));
            stryMutAct_9fa48("1292") ? count -= 2 : (stryCov_9fa48("1292"), count += 2);
          }
        } while (stryMutAct_9fa48("1293") ? false : (stryCov_9fa48("1293"), nextPermutation(basePerm)));
      }
    }
    return result;
  }
}
function nextPermutation(array) {
  if (stryMutAct_9fa48("1294")) {
    {}
  } else {
    stryCov_9fa48("1294");
    let i = stryMutAct_9fa48("1295") ? +1 : (stryCov_9fa48("1295"), -1);
    for (let idx = stryMutAct_9fa48("1296") ? array.length + 2 : (stryCov_9fa48("1296"), array.length - 2); stryMutAct_9fa48("1299") ? idx < 0 : stryMutAct_9fa48("1298") ? idx > 0 : stryMutAct_9fa48("1297") ? false : (stryCov_9fa48("1297", "1298", "1299"), idx >= 0); stryMutAct_9fa48("1300") ? idx++ : (stryCov_9fa48("1300"), idx--)) {
      if (stryMutAct_9fa48("1301")) {
        {}
      } else {
        stryCov_9fa48("1301");
        if (stryMutAct_9fa48("1305") ? array[idx] >= array[idx + 1] : stryMutAct_9fa48("1304") ? array[idx] <= array[idx + 1] : stryMutAct_9fa48("1303") ? false : stryMutAct_9fa48("1302") ? true : (stryCov_9fa48("1302", "1303", "1304", "1305"), array[idx] < array[stryMutAct_9fa48("1306") ? idx - 1 : (stryCov_9fa48("1306"), idx + 1)])) {
          if (stryMutAct_9fa48("1307")) {
            {}
          } else {
            stryCov_9fa48("1307");
            i = idx;
            break;
          }
        }
      }
    }
    if (stryMutAct_9fa48("1310") ? i !== -1 : stryMutAct_9fa48("1309") ? false : stryMutAct_9fa48("1308") ? true : (stryCov_9fa48("1308", "1309", "1310"), i === (stryMutAct_9fa48("1311") ? +1 : (stryCov_9fa48("1311"), -1)))) return stryMutAct_9fa48("1312") ? true : (stryCov_9fa48("1312"), false);
    let j = stryMutAct_9fa48("1313") ? array.length + 1 : (stryCov_9fa48("1313"), array.length - 1);
    while (stryMutAct_9fa48("1316") ? array[j] > array[i] : stryMutAct_9fa48("1315") ? array[j] < array[i] : stryMutAct_9fa48("1314") ? false : (stryCov_9fa48("1314", "1315", "1316"), array[j] <= array[i])) stryMutAct_9fa48("1317") ? j++ : (stryCov_9fa48("1317"), j--);
    [array[i], array[j]] = stryMutAct_9fa48("1318") ? [] : (stryCov_9fa48("1318"), [array[j], array[i]]);
    let left = stryMutAct_9fa48("1319") ? i - 1 : (stryCov_9fa48("1319"), i + 1),
      right = stryMutAct_9fa48("1320") ? array.length + 1 : (stryCov_9fa48("1320"), array.length - 1);
    while (stryMutAct_9fa48("1323") ? left >= right : stryMutAct_9fa48("1322") ? left <= right : stryMutAct_9fa48("1321") ? false : (stryCov_9fa48("1321", "1322", "1323"), left < right)) {
      if (stryMutAct_9fa48("1324")) {
        {}
      } else {
        stryCov_9fa48("1324");
        [array[left], array[right]] = stryMutAct_9fa48("1325") ? [] : (stryCov_9fa48("1325"), [array[right], array[left]]);
        stryMutAct_9fa48("1326") ? left-- : (stryCov_9fa48("1326"), left++);
        stryMutAct_9fa48("1327") ? right++ : (stryCov_9fa48("1327"), right--);
      }
    }
    return stryMutAct_9fa48("1328") ? false : (stryCov_9fa48("1328"), true);
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [3, 3], expected: ['YES', '1 2 3', '2 3 1', '3 1 2'] },
//         { input: [4, 2], expected: ['YES', '1 2 3 4', '4 3 2 1'] },
//         { input: [5, 1], expected: ['NO'] }
//     ];

//     for (const { input, expected } of testCases) {
//         const [n, k] = input;
//         const result = solve(n, k);
//         if (result === null) {
//             console.log('NO');
//             if (expected[0] !== 'NO') {
//                 console.error(`Test failed for input ${input}. Expected ${expected}, but got NO.`);
//             }
//         } else {
//             console.log('YES');
//             for (const line of result) {
//                 console.log(line);
//             }
//             const output = ['YES', ...result];
//             if (JSON.stringify(output) !== JSON.stringify(expected)) {
//                 console.error(`Test failed for input ${input}. Expected ${expected}, but got ${output}.`);
//             }
//         }
//     }
// }

// testing_test();