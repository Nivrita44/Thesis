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
  if (stryMutAct_9fa48("982")) {
    {}
  } else {
    stryCov_9fa48("982");
    if (stryMutAct_9fa48("985") ? n !== 1 : stryMutAct_9fa48("984") ? false : stryMutAct_9fa48("983") ? true : (stryCov_9fa48("983", "984", "985"), n === 1)) {
      if (stryMutAct_9fa48("986")) {
        {}
      } else {
        stryCov_9fa48("986");
        if (stryMutAct_9fa48("989") ? k !== 1 : stryMutAct_9fa48("988") ? false : stryMutAct_9fa48("987") ? true : (stryCov_9fa48("987", "988", "989"), k === 1)) return stryMutAct_9fa48("990") ? [] : (stryCov_9fa48("990"), [stryMutAct_9fa48("991") ? [] : (stryCov_9fa48("991"), [stryMutAct_9fa48("992") ? "" : (stryCov_9fa48("992"), '1')])]);
        return null;
      }
    }
    if (stryMutAct_9fa48("995") ? n !== 2 : stryMutAct_9fa48("994") ? false : stryMutAct_9fa48("993") ? true : (stryCov_9fa48("993", "994", "995"), n === 2)) {
      if (stryMutAct_9fa48("996")) {
        {}
      } else {
        stryCov_9fa48("996");
        if (stryMutAct_9fa48("999") ? k !== 2 : stryMutAct_9fa48("998") ? false : stryMutAct_9fa48("997") ? true : (stryCov_9fa48("997", "998", "999"), k === 2)) return stryMutAct_9fa48("1000") ? [] : (stryCov_9fa48("1000"), [stryMutAct_9fa48("1001") ? [] : (stryCov_9fa48("1001"), [stryMutAct_9fa48("1002") ? "" : (stryCov_9fa48("1002"), '1 2'), stryMutAct_9fa48("1003") ? "" : (stryCov_9fa48("1003"), '2 1')])]);
        return null;
      }
    }
    if (stryMutAct_9fa48("1006") ? k === 1 && n % 2 === 0 && k % 2 === 1 : stryMutAct_9fa48("1005") ? false : stryMutAct_9fa48("1004") ? true : (stryCov_9fa48("1004", "1005", "1006"), (stryMutAct_9fa48("1008") ? k !== 1 : stryMutAct_9fa48("1007") ? false : (stryCov_9fa48("1007", "1008"), k === 1)) || (stryMutAct_9fa48("1010") ? n % 2 === 0 || k % 2 === 1 : stryMutAct_9fa48("1009") ? false : (stryCov_9fa48("1009", "1010"), (stryMutAct_9fa48("1012") ? n % 2 !== 0 : stryMutAct_9fa48("1011") ? true : (stryCov_9fa48("1011", "1012"), (stryMutAct_9fa48("1013") ? n * 2 : (stryCov_9fa48("1013"), n % 2)) === 0)) && (stryMutAct_9fa48("1015") ? k % 2 !== 1 : stryMutAct_9fa48("1014") ? true : (stryCov_9fa48("1014", "1015"), (stryMutAct_9fa48("1016") ? k * 2 : (stryCov_9fa48("1016"), k % 2)) === 1)))))) return null;
    if (stryMutAct_9fa48("1020") ? n > 8 : stryMutAct_9fa48("1019") ? n < 8 : stryMutAct_9fa48("1018") ? false : stryMutAct_9fa48("1017") ? true : (stryCov_9fa48("1017", "1018", "1019", "1020"), n <= 8)) {
      if (stryMutAct_9fa48("1021")) {
        {}
      } else {
        stryCov_9fa48("1021");
        let factorial = 1;
        for (let i = 2; stryMutAct_9fa48("1024") ? i > n : stryMutAct_9fa48("1023") ? i < n : stryMutAct_9fa48("1022") ? false : (stryCov_9fa48("1022", "1023", "1024"), i <= n); stryMutAct_9fa48("1025") ? i-- : (stryCov_9fa48("1025"), i++)) stryMutAct_9fa48("1026") ? factorial /= i : (stryCov_9fa48("1026"), factorial *= i);
        if (stryMutAct_9fa48("1029") ? k > factorial && k === factorial - 1 : stryMutAct_9fa48("1028") ? false : stryMutAct_9fa48("1027") ? true : (stryCov_9fa48("1027", "1028", "1029"), (stryMutAct_9fa48("1032") ? k <= factorial : stryMutAct_9fa48("1031") ? k >= factorial : stryMutAct_9fa48("1030") ? false : (stryCov_9fa48("1030", "1031", "1032"), k > factorial)) || (stryMutAct_9fa48("1034") ? k !== factorial - 1 : stryMutAct_9fa48("1033") ? false : (stryCov_9fa48("1033", "1034"), k === (stryMutAct_9fa48("1035") ? factorial + 1 : (stryCov_9fa48("1035"), factorial - 1)))))) return null;
      }
    }
    const result = stryMutAct_9fa48("1036") ? ["Stryker was here"] : (stryCov_9fa48("1036"), []);
    if (stryMutAct_9fa48("1039") ? k % 2 !== 0 : stryMutAct_9fa48("1038") ? false : stryMutAct_9fa48("1037") ? true : (stryCov_9fa48("1037", "1038", "1039"), (stryMutAct_9fa48("1040") ? k * 2 : (stryCov_9fa48("1040"), k % 2)) === 0)) {
      if (stryMutAct_9fa48("1041")) {
        {}
      } else {
        stryCov_9fa48("1041");
        let count = 0;
        let perm = Array.from(stryMutAct_9fa48("1042") ? {} : (stryCov_9fa48("1042"), {
          length: n
        }), stryMutAct_9fa48("1043") ? () => undefined : (stryCov_9fa48("1043"), (_, i) => stryMutAct_9fa48("1044") ? i - 1 : (stryCov_9fa48("1044"), i + 1)));
        do {
          if (stryMutAct_9fa48("1045")) {
            {}
          } else {
            stryCov_9fa48("1045");
            result.push(perm.join(stryMutAct_9fa48("1046") ? "" : (stryCov_9fa48("1046"), ' ')));
            result.push(perm.map(stryMutAct_9fa48("1047") ? () => undefined : (stryCov_9fa48("1047"), x => stryMutAct_9fa48("1048") ? n + 1 + x : (stryCov_9fa48("1048"), (stryMutAct_9fa48("1049") ? n - 1 : (stryCov_9fa48("1049"), n + 1)) - x))).join(stryMutAct_9fa48("1050") ? "" : (stryCov_9fa48("1050"), ' ')));
            stryMutAct_9fa48("1051") ? count -= 2 : (stryCov_9fa48("1051"), count += 2);
            if (stryMutAct_9fa48("1054") ? count !== k : stryMutAct_9fa48("1053") ? false : stryMutAct_9fa48("1052") ? true : (stryCov_9fa48("1052", "1053", "1054"), count === k)) break;
          }
        } while (stryMutAct_9fa48("1055") ? false : (stryCov_9fa48("1055"), nextPermutation(perm)));
      }
    } else {
      if (stryMutAct_9fa48("1056")) {
        {}
      } else {
        stryCov_9fa48("1056");
        let basePerm = Array.from(stryMutAct_9fa48("1057") ? {} : (stryCov_9fa48("1057"), {
          length: n
        }), stryMutAct_9fa48("1058") ? () => undefined : (stryCov_9fa48("1058"), (_, i) => stryMutAct_9fa48("1059") ? i - 1 : (stryCov_9fa48("1059"), i + 1)));
        const initialSet = stryMutAct_9fa48("1060") ? Array().fill().map(() => Array(n)) : (stryCov_9fa48("1060"), Array(3).fill().map(stryMutAct_9fa48("1061") ? () => undefined : (stryCov_9fa48("1061"), () => stryMutAct_9fa48("1062") ? Array() : (stryCov_9fa48("1062"), Array(n)))));
        for (let i = 0; stryMutAct_9fa48("1065") ? i >= n : stryMutAct_9fa48("1064") ? i <= n : stryMutAct_9fa48("1063") ? false : (stryCov_9fa48("1063", "1064", "1065"), i < n); stryMutAct_9fa48("1066") ? i-- : (stryCov_9fa48("1066"), i++)) initialSet[0][i] = stryMutAct_9fa48("1067") ? i - 1 : (stryCov_9fa48("1067"), i + 1);
        let mid = Math.floor(stryMutAct_9fa48("1068") ? n * 2 : (stryCov_9fa48("1068"), n / 2));
        let value = 1;
        for (let i = stryMutAct_9fa48("1069") ? mid - 1 : (stryCov_9fa48("1069"), mid + 1); stryMutAct_9fa48("1072") ? i >= n : stryMutAct_9fa48("1071") ? i <= n : stryMutAct_9fa48("1070") ? false : (stryCov_9fa48("1070", "1071", "1072"), i < n); stryMutAct_9fa48("1073") ? i-- : (stryCov_9fa48("1073"), i++)) initialSet[1][i] = stryMutAct_9fa48("1074") ? value-- : (stryCov_9fa48("1074"), value++);
        for (let i = 0; stryMutAct_9fa48("1077") ? i > mid : stryMutAct_9fa48("1076") ? i < mid : stryMutAct_9fa48("1075") ? false : (stryCov_9fa48("1075", "1076", "1077"), i <= mid); stryMutAct_9fa48("1078") ? i-- : (stryCov_9fa48("1078"), i++)) initialSet[1][i] = stryMutAct_9fa48("1079") ? value-- : (stryCov_9fa48("1079"), value++);
        value = 1;
        for (let i = mid; stryMutAct_9fa48("1082") ? i < 0 : stryMutAct_9fa48("1081") ? i > 0 : stryMutAct_9fa48("1080") ? false : (stryCov_9fa48("1080", "1081", "1082"), i >= 0); stryMutAct_9fa48("1083") ? i++ : (stryCov_9fa48("1083"), i--)) initialSet[2][i] = value, stryMutAct_9fa48("1084") ? value -= 2 : (stryCov_9fa48("1084"), value += 2);
        value = 2;
        for (let i = stryMutAct_9fa48("1085") ? n + 1 : (stryCov_9fa48("1085"), n - 1); stryMutAct_9fa48("1088") ? i <= mid : stryMutAct_9fa48("1087") ? i >= mid : stryMutAct_9fa48("1086") ? false : (stryCov_9fa48("1086", "1087", "1088"), i > mid); stryMutAct_9fa48("1089") ? i++ : (stryCov_9fa48("1089"), i--)) initialSet[2][i] = value, stryMutAct_9fa48("1090") ? value -= 2 : (stryCov_9fa48("1090"), value += 2);
        for (let i = 0; stryMutAct_9fa48("1093") ? i >= 3 : stryMutAct_9fa48("1092") ? i <= 3 : stryMutAct_9fa48("1091") ? false : (stryCov_9fa48("1091", "1092", "1093"), i < 3); stryMutAct_9fa48("1094") ? i-- : (stryCov_9fa48("1094"), i++)) {
          if (stryMutAct_9fa48("1095")) {
            {}
          } else {
            stryCov_9fa48("1095");
            result.push(initialSet[i].join(stryMutAct_9fa48("1096") ? "" : (stryCov_9fa48("1096"), ' ')));
          }
        }
        let count = 3;
        outer: do {
          if (stryMutAct_9fa48("1097")) {
            {}
          } else {
            stryCov_9fa48("1097");
            if (stryMutAct_9fa48("1100") ? count !== k : stryMutAct_9fa48("1099") ? false : stryMutAct_9fa48("1098") ? true : (stryCov_9fa48("1098", "1099", "1100"), count === k)) break;
            for (let i = 0; stryMutAct_9fa48("1103") ? i >= 3 : stryMutAct_9fa48("1102") ? i <= 3 : stryMutAct_9fa48("1101") ? false : (stryCov_9fa48("1101", "1102", "1103"), i < 3); stryMutAct_9fa48("1104") ? i-- : (stryCov_9fa48("1104"), i++)) {
              if (stryMutAct_9fa48("1105")) {
                {}
              } else {
                stryCov_9fa48("1105");
                let matchOriginal = stryMutAct_9fa48("1106") ? basePerm.some((val, idx) => val === initialSet[i][idx]) : (stryCov_9fa48("1106"), basePerm.every(stryMutAct_9fa48("1107") ? () => undefined : (stryCov_9fa48("1107"), (val, idx) => stryMutAct_9fa48("1110") ? val !== initialSet[i][idx] : stryMutAct_9fa48("1109") ? false : stryMutAct_9fa48("1108") ? true : (stryCov_9fa48("1108", "1109", "1110"), val === initialSet[i][idx]))));
                let matchInverted = stryMutAct_9fa48("1111") ? basePerm.some((val, idx) => n + 1 - val === initialSet[i][idx]) : (stryCov_9fa48("1111"), basePerm.every(stryMutAct_9fa48("1112") ? () => undefined : (stryCov_9fa48("1112"), (val, idx) => stryMutAct_9fa48("1115") ? n + 1 - val !== initialSet[i][idx] : stryMutAct_9fa48("1114") ? false : stryMutAct_9fa48("1113") ? true : (stryCov_9fa48("1113", "1114", "1115"), (stryMutAct_9fa48("1116") ? n + 1 + val : (stryCov_9fa48("1116"), (stryMutAct_9fa48("1117") ? n - 1 : (stryCov_9fa48("1117"), n + 1)) - val)) === initialSet[i][idx]))));
                if (stryMutAct_9fa48("1120") ? matchOriginal && matchInverted : stryMutAct_9fa48("1119") ? false : stryMutAct_9fa48("1118") ? true : (stryCov_9fa48("1118", "1119", "1120"), matchOriginal || matchInverted)) continue outer;
              }
            }
            result.push(basePerm.join(stryMutAct_9fa48("1121") ? "" : (stryCov_9fa48("1121"), ' ')));
            result.push(basePerm.map(stryMutAct_9fa48("1122") ? () => undefined : (stryCov_9fa48("1122"), x => stryMutAct_9fa48("1123") ? n + 1 + x : (stryCov_9fa48("1123"), (stryMutAct_9fa48("1124") ? n - 1 : (stryCov_9fa48("1124"), n + 1)) - x))).join(stryMutAct_9fa48("1125") ? "" : (stryCov_9fa48("1125"), ' ')));
            stryMutAct_9fa48("1126") ? count -= 2 : (stryCov_9fa48("1126"), count += 2);
          }
        } while (stryMutAct_9fa48("1127") ? false : (stryCov_9fa48("1127"), nextPermutation(basePerm)));
      }
    }
    return result;
  }
}
function nextPermutation(array) {
  if (stryMutAct_9fa48("1128")) {
    {}
  } else {
    stryCov_9fa48("1128");
    let i = stryMutAct_9fa48("1129") ? +1 : (stryCov_9fa48("1129"), -1);
    for (let idx = stryMutAct_9fa48("1130") ? array.length + 2 : (stryCov_9fa48("1130"), array.length - 2); stryMutAct_9fa48("1133") ? idx < 0 : stryMutAct_9fa48("1132") ? idx > 0 : stryMutAct_9fa48("1131") ? false : (stryCov_9fa48("1131", "1132", "1133"), idx >= 0); stryMutAct_9fa48("1134") ? idx++ : (stryCov_9fa48("1134"), idx--)) {
      if (stryMutAct_9fa48("1135")) {
        {}
      } else {
        stryCov_9fa48("1135");
        if (stryMutAct_9fa48("1139") ? array[idx] >= array[idx + 1] : stryMutAct_9fa48("1138") ? array[idx] <= array[idx + 1] : stryMutAct_9fa48("1137") ? false : stryMutAct_9fa48("1136") ? true : (stryCov_9fa48("1136", "1137", "1138", "1139"), array[idx] < array[stryMutAct_9fa48("1140") ? idx - 1 : (stryCov_9fa48("1140"), idx + 1)])) {
          if (stryMutAct_9fa48("1141")) {
            {}
          } else {
            stryCov_9fa48("1141");
            i = idx;
            break;
          }
        }
      }
    }
    if (stryMutAct_9fa48("1144") ? i !== -1 : stryMutAct_9fa48("1143") ? false : stryMutAct_9fa48("1142") ? true : (stryCov_9fa48("1142", "1143", "1144"), i === (stryMutAct_9fa48("1145") ? +1 : (stryCov_9fa48("1145"), -1)))) return stryMutAct_9fa48("1146") ? true : (stryCov_9fa48("1146"), false);
    let j = stryMutAct_9fa48("1147") ? array.length + 1 : (stryCov_9fa48("1147"), array.length - 1);
    while (stryMutAct_9fa48("1150") ? array[j] > array[i] : stryMutAct_9fa48("1149") ? array[j] < array[i] : stryMutAct_9fa48("1148") ? false : (stryCov_9fa48("1148", "1149", "1150"), array[j] <= array[i])) stryMutAct_9fa48("1151") ? j++ : (stryCov_9fa48("1151"), j--);
    [array[i], array[j]] = stryMutAct_9fa48("1152") ? [] : (stryCov_9fa48("1152"), [array[j], array[i]]);
    let left = stryMutAct_9fa48("1153") ? i - 1 : (stryCov_9fa48("1153"), i + 1),
      right = stryMutAct_9fa48("1154") ? array.length + 1 : (stryCov_9fa48("1154"), array.length - 1);
    while (stryMutAct_9fa48("1157") ? left >= right : stryMutAct_9fa48("1156") ? left <= right : stryMutAct_9fa48("1155") ? false : (stryCov_9fa48("1155", "1156", "1157"), left < right)) {
      if (stryMutAct_9fa48("1158")) {
        {}
      } else {
        stryCov_9fa48("1158");
        [array[left], array[right]] = stryMutAct_9fa48("1159") ? [] : (stryCov_9fa48("1159"), [array[right], array[left]]);
        stryMutAct_9fa48("1160") ? left-- : (stryCov_9fa48("1160"), left++);
        stryMutAct_9fa48("1161") ? right++ : (stryCov_9fa48("1161"), right--);
      }
    }
    return stryMutAct_9fa48("1162") ? false : (stryCov_9fa48("1162"), true);
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