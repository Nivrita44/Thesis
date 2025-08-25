// -------------------- Helper --------------------
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
function minPicks(v, need) {
  if (stryMutAct_9fa48("424")) {
    {}
  } else {
    stryCov_9fa48("424");
    let count = 0,
      sum = 0;
    for (let x of v) {
      if (stryMutAct_9fa48("425")) {
        {}
      } else {
        stryCov_9fa48("425");
        if (stryMutAct_9fa48("429") ? sum < need : stryMutAct_9fa48("428") ? sum > need : stryMutAct_9fa48("427") ? false : stryMutAct_9fa48("426") ? true : (stryCov_9fa48("426", "427", "428", "429"), sum >= need)) break;
        stryMutAct_9fa48("430") ? sum -= x : (stryCov_9fa48("430"), sum += x);
        stryMutAct_9fa48("431") ? count-- : (stryCov_9fa48("431"), count++);
      }
    }
    return (stryMutAct_9fa48("435") ? sum < need : stryMutAct_9fa48("434") ? sum > need : stryMutAct_9fa48("433") ? false : stryMutAct_9fa48("432") ? true : (stryCov_9fa48("432", "433", "434", "435"), sum >= need)) ? count : 1000000000;
  }
}

// -------------------- Core Logic --------------------
function canTransform(s, a, b, ab, ba) {
  if (stryMutAct_9fa48("436")) {
    {}
  } else {
    stryCov_9fa48("436");
    let totalA = (stryMutAct_9fa48("439") ? s.match(/A/g) && [] : stryMutAct_9fa48("438") ? false : stryMutAct_9fa48("437") ? true : (stryCov_9fa48("437", "438", "439"), s.match(/A/g) || (stryMutAct_9fa48("440") ? ["Stryker was here"] : (stryCov_9fa48("440"), [])))).length;
    let totalB = (stryMutAct_9fa48("443") ? s.match(/B/g) && [] : stryMutAct_9fa48("442") ? false : stryMutAct_9fa48("441") ? true : (stryCov_9fa48("441", "442", "443"), s.match(/B/g) || (stryMutAct_9fa48("444") ? ["Stryker was here"] : (stryCov_9fa48("444"), [])))).length;
    let m = stryMutAct_9fa48("445") ? Math.min(totalA - a, totalB - b, 0) : (stryCov_9fa48("445"), Math.max(stryMutAct_9fa48("446") ? totalA + a : (stryCov_9fa48("446"), totalA - a), stryMutAct_9fa48("447") ? totalB + b : (stryCov_9fa48("447"), totalB - b), 0));
    let totalPairs = 0;
    let addOdd = 0;
    let evenA = stryMutAct_9fa48("448") ? ["Stryker was here"] : (stryCov_9fa48("448"), []),
      evenB = stryMutAct_9fa48("449") ? ["Stryker was here"] : (stryCov_9fa48("449"), []);
    const n = s.length;
    let i = 0;
    while (stryMutAct_9fa48("452") ? i >= n : stryMutAct_9fa48("451") ? i <= n : stryMutAct_9fa48("450") ? false : (stryCov_9fa48("450", "451", "452"), i < n)) {
      if (stryMutAct_9fa48("453")) {
        {}
      } else {
        stryCov_9fa48("453");
        let j = i;
        while (stryMutAct_9fa48("455") ? j + 1 < n || s[j + 1] !== s[j] : stryMutAct_9fa48("454") ? false : (stryCov_9fa48("454", "455"), (stryMutAct_9fa48("458") ? j + 1 >= n : stryMutAct_9fa48("457") ? j + 1 <= n : stryMutAct_9fa48("456") ? true : (stryCov_9fa48("456", "457", "458"), (stryMutAct_9fa48("459") ? j - 1 : (stryCov_9fa48("459"), j + 1)) < n)) && (stryMutAct_9fa48("461") ? s[j + 1] === s[j] : stryMutAct_9fa48("460") ? true : (stryCov_9fa48("460", "461"), s[stryMutAct_9fa48("462") ? j - 1 : (stryCov_9fa48("462"), j + 1)] !== s[j])))) {
          if (stryMutAct_9fa48("463")) {
            {}
          } else {
            stryCov_9fa48("463");
            stryMutAct_9fa48("464") ? j-- : (stryCov_9fa48("464"), j++);
          }
        }
        let len = stryMutAct_9fa48("465") ? j - i - 1 : (stryCov_9fa48("465"), (stryMutAct_9fa48("466") ? j + i : (stryCov_9fa48("466"), j - i)) + 1);
        if (stryMutAct_9fa48("470") ? len < 2 : stryMutAct_9fa48("469") ? len > 2 : stryMutAct_9fa48("468") ? false : stryMutAct_9fa48("467") ? true : (stryCov_9fa48("467", "468", "469", "470"), len >= 2)) {
          if (stryMutAct_9fa48("471")) {
            {}
          } else {
            stryCov_9fa48("471");
            let p = Math.floor(stryMutAct_9fa48("472") ? len * 2 : (stryCov_9fa48("472"), len / 2));
            stryMutAct_9fa48("473") ? totalPairs -= p : (stryCov_9fa48("473"), totalPairs += p);
            if (stryMutAct_9fa48("476") ? len % 2 !== 1 : stryMutAct_9fa48("475") ? false : stryMutAct_9fa48("474") ? true : (stryCov_9fa48("474", "475", "476"), (stryMutAct_9fa48("477") ? len * 2 : (stryCov_9fa48("477"), len % 2)) === 1)) {
              if (stryMutAct_9fa48("478")) {
                {}
              } else {
                stryCov_9fa48("478");
                stryMutAct_9fa48("479") ? addOdd -= p : (stryCov_9fa48("479"), addOdd += p);
              }
            } else {
              if (stryMutAct_9fa48("480")) {
                {}
              } else {
                stryCov_9fa48("480");
                if (stryMutAct_9fa48("483") ? s[i] !== 'A' : stryMutAct_9fa48("482") ? false : stryMutAct_9fa48("481") ? true : (stryCov_9fa48("481", "482", "483"), s[i] === (stryMutAct_9fa48("484") ? "" : (stryCov_9fa48("484"), 'A')))) evenA.push(p);else evenB.push(p);
              }
            }
          }
        }
        i = stryMutAct_9fa48("485") ? j - 1 : (stryCov_9fa48("485"), j + 1);
      }
    }
    if (stryMutAct_9fa48("488") ? totalPairs < m && m > ab + ba : stryMutAct_9fa48("487") ? false : stryMutAct_9fa48("486") ? true : (stryCov_9fa48("486", "487", "488"), (stryMutAct_9fa48("491") ? totalPairs >= m : stryMutAct_9fa48("490") ? totalPairs <= m : stryMutAct_9fa48("489") ? false : (stryCov_9fa48("489", "490", "491"), totalPairs < m)) || (stryMutAct_9fa48("494") ? m <= ab + ba : stryMutAct_9fa48("493") ? m >= ab + ba : stryMutAct_9fa48("492") ? false : (stryCov_9fa48("492", "493", "494"), m > (stryMutAct_9fa48("495") ? ab - ba : (stryCov_9fa48("495"), ab + ba)))))) {
      if (stryMutAct_9fa48("496")) {
        {}
      } else {
        stryCov_9fa48("496");
        return stryMutAct_9fa48("497") ? "" : (stryCov_9fa48("497"), "NO");
      }
    }
    let availableDrop = stryMutAct_9fa48("498") ? totalPairs + m : (stryCov_9fa48("498"), totalPairs - m);
    let sumA = evenA.reduce(stryMutAct_9fa48("499") ? () => undefined : (stryCov_9fa48("499"), (acc, val) => stryMutAct_9fa48("500") ? acc - val : (stryCov_9fa48("500"), acc + val)), 0);
    let needA = stryMutAct_9fa48("501") ? Math.min(sumA - ab, 0) : (stryCov_9fa48("501"), Math.max(stryMutAct_9fa48("502") ? sumA + ab : (stryCov_9fa48("502"), sumA - ab), 0));
    let sumB = evenB.reduce(stryMutAct_9fa48("503") ? () => undefined : (stryCov_9fa48("503"), (acc, val) => stryMutAct_9fa48("504") ? acc - val : (stryCov_9fa48("504"), acc + val)), 0);
    let needB = stryMutAct_9fa48("505") ? Math.min(sumB - ba, 0) : (stryCov_9fa48("505"), Math.max(stryMutAct_9fa48("506") ? sumB + ba : (stryCov_9fa48("506"), sumB - ba), 0));
    stryMutAct_9fa48("507") ? evenA : (stryCov_9fa48("507"), evenA.sort(stryMutAct_9fa48("508") ? () => undefined : (stryCov_9fa48("508"), (x, y) => stryMutAct_9fa48("509") ? y + x : (stryCov_9fa48("509"), y - x))));
    stryMutAct_9fa48("510") ? evenB : (stryCov_9fa48("510"), evenB.sort(stryMutAct_9fa48("511") ? () => undefined : (stryCov_9fa48("511"), (x, y) => stryMutAct_9fa48("512") ? y + x : (stryCov_9fa48("512"), y - x))));
    let dA = minPicks(evenA, needA);
    let dB = minPicks(evenB, needB);
    return (stryMutAct_9fa48("516") ? dA + dB > availableDrop : stryMutAct_9fa48("515") ? dA + dB < availableDrop : stryMutAct_9fa48("514") ? false : stryMutAct_9fa48("513") ? true : (stryCov_9fa48("513", "514", "515", "516"), (stryMutAct_9fa48("517") ? dA - dB : (stryCov_9fa48("517"), dA + dB)) <= availableDrop)) ? stryMutAct_9fa48("518") ? "" : (stryCov_9fa48("518"), "YES") : stryMutAct_9fa48("519") ? "" : (stryCov_9fa48("519"), "NO");
  }
}

// -------------------- Exported Solve --------------------
export function solve(input) {
  if (stryMutAct_9fa48("520")) {
    {}
  } else {
    stryCov_9fa48("520");
    let lines = stryMutAct_9fa48("521") ? input.split("\n") : (stryCov_9fa48("521"), input.trim().split(stryMutAct_9fa48("522") ? "" : (stryCov_9fa48("522"), "\n")));
    let s = stryMutAct_9fa48("523") ? lines[0] : (stryCov_9fa48("523"), lines[0].trim());
    let nums = stryMutAct_9fa48("525") ? (lines[1] || "").split(/\s+/).filter(Boolean).map(Number) : stryMutAct_9fa48("524") ? (lines[1] || "").trim().split(/\s+/).map(Number) : (stryCov_9fa48("524", "525"), (stryMutAct_9fa48("528") ? lines[1] && "" : stryMutAct_9fa48("527") ? false : stryMutAct_9fa48("526") ? true : (stryCov_9fa48("526", "527", "528"), lines[1] || (stryMutAct_9fa48("529") ? "Stryker was here!" : (stryCov_9fa48("529"), "")))).trim().split(stryMutAct_9fa48("531") ? /\S+/ : stryMutAct_9fa48("530") ? /\s/ : (stryCov_9fa48("530", "531"), /\s+/)).filter(Boolean).map(Number));

    // default to 0 if not provided
    let [a, b, ab, ba] = stryMutAct_9fa48("532") ? [] : (stryCov_9fa48("532"), [0, 0, 0, 0]);
    if (stryMutAct_9fa48("536") ? nums.length <= 0 : stryMutAct_9fa48("535") ? nums.length >= 0 : stryMutAct_9fa48("534") ? false : stryMutAct_9fa48("533") ? true : (stryCov_9fa48("533", "534", "535", "536"), nums.length > 0)) [a, b, ab, ba] = nums;
    return canTransform(s, a, b, ab, ba);
  }
}

// -------------------- Local Testing --------------------
function testing_test() {
  if (stryMutAct_9fa48("537")) {
    {}
  } else {
    stryCov_9fa48("537");
    const testCases = stryMutAct_9fa48("538") ? [] : (stryCov_9fa48("538"), [stryMutAct_9fa48("539") ? {} : (stryCov_9fa48("539"), {
      input: stryMutAct_9fa48("540") ? "" : (stryCov_9fa48("540"), "A\n1 0 0 0"),
      expected: stryMutAct_9fa48("541") ? "" : (stryCov_9fa48("541"), "YES")
    }), stryMutAct_9fa48("542") ? {} : (stryCov_9fa48("542"), {
      input: stryMutAct_9fa48("543") ? "" : (stryCov_9fa48("543"), "A\n0 0 0 0"),
      expected: stryMutAct_9fa48("544") ? "" : (stryCov_9fa48("544"), "NO")
    }), stryMutAct_9fa48("545") ? {} : (stryCov_9fa48("545"), {
      input: stryMutAct_9fa48("546") ? "" : (stryCov_9fa48("546"), "B\n0 1 0 0"),
      expected: stryMutAct_9fa48("547") ? "" : (stryCov_9fa48("547"), "YES")
    }), stryMutAct_9fa48("548") ? {} : (stryCov_9fa48("548"), {
      input: stryMutAct_9fa48("549") ? "" : (stryCov_9fa48("549"), "B\n0 0 0 0"),
      expected: stryMutAct_9fa48("550") ? "" : (stryCov_9fa48("550"), "NO")
    }), stryMutAct_9fa48("551") ? {} : (stryCov_9fa48("551"), {
      input: stryMutAct_9fa48("552") ? "" : (stryCov_9fa48("552"), "ABA\n0 0 1 1"),
      expected: stryMutAct_9fa48("553") ? "" : (stryCov_9fa48("553"), "NO")
    }), stryMutAct_9fa48("554") ? {} : (stryCov_9fa48("554"), {
      input: stryMutAct_9fa48("555") ? "" : (stryCov_9fa48("555"), "ABBABAAB\n5 5 0 0"),
      expected: stryMutAct_9fa48("556") ? "" : (stryCov_9fa48("556"), "YES")
    }), stryMutAct_9fa48("557") ? {} : (stryCov_9fa48("557"), {
      input: stryMutAct_9fa48("558") ? "" : (stryCov_9fa48("558"), "ABABBAABBAAB\n1 1 2 3"),
      expected: stryMutAct_9fa48("559") ? "" : (stryCov_9fa48("559"), "YES")
    }), stryMutAct_9fa48("560") ? {} : (stryCov_9fa48("560"), {
      input: stryMutAct_9fa48("561") ? "" : (stryCov_9fa48("561"), "ABBBBAB\n0 3 2 0"),
      expected: stryMutAct_9fa48("562") ? "" : (stryCov_9fa48("562"), "YES")
    }), stryMutAct_9fa48("563") ? {} : (stryCov_9fa48("563"), {
      input: stryMutAct_9fa48("564") ? "" : (stryCov_9fa48("564"), "BAABBA\n1 3 2 0"),
      expected: stryMutAct_9fa48("565") ? "" : (stryCov_9fa48("565"), "NO")
    })]);
    for (let i = 0; stryMutAct_9fa48("568") ? i >= testCases.length : stryMutAct_9fa48("567") ? i <= testCases.length : stryMutAct_9fa48("566") ? false : (stryCov_9fa48("566", "567", "568"), i < testCases.length); stryMutAct_9fa48("569") ? i-- : (stryCov_9fa48("569"), i++)) {
      if (stryMutAct_9fa48("570")) {
        {}
      } else {
        stryCov_9fa48("570");
        const {
          input,
          expected
        } = testCases[i];
        const result = solve(input);
        console.log(stryMutAct_9fa48("571") ? `` : (stryCov_9fa48("571"), `Test case ${stryMutAct_9fa48("572") ? i - 1 : (stryCov_9fa48("572"), i + 1)}:`), (stryMutAct_9fa48("575") ? result !== expected : stryMutAct_9fa48("574") ? false : stryMutAct_9fa48("573") ? true : (stryCov_9fa48("573", "574", "575"), result === expected)) ? stryMutAct_9fa48("576") ? "" : (stryCov_9fa48("576"), "PASSED") : stryMutAct_9fa48("577") ? `` : (stryCov_9fa48("577"), `FAILED (Expected: ${expected}, Got: ${result})`));
      }
    }
  }
}
testing_test();