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
const M = 1000000007n;
const MAX = 200005;
function powmod(a, b) {
  if (stryMutAct_9fa48("2677")) {
    {}
  } else {
    stryCov_9fa48("2677");
    let res = 1n;
    stryMutAct_9fa48("2678") ? a *= M : (stryCov_9fa48("2678"), a %= M);
    while (stryMutAct_9fa48("2681") ? b <= 0n : stryMutAct_9fa48("2680") ? b >= 0n : stryMutAct_9fa48("2679") ? false : (stryCov_9fa48("2679", "2680", "2681"), b > 0n)) {
      if (stryMutAct_9fa48("2682")) {
        {}
      } else {
        stryCov_9fa48("2682");
        if (stryMutAct_9fa48("2684") ? false : stryMutAct_9fa48("2683") ? true : (stryCov_9fa48("2683", "2684"), b & 1n)) res = stryMutAct_9fa48("2685") ? res * a * M : (stryCov_9fa48("2685"), (stryMutAct_9fa48("2686") ? res / a : (stryCov_9fa48("2686"), res * a)) % M);
        a = stryMutAct_9fa48("2687") ? a * a * M : (stryCov_9fa48("2687"), (stryMutAct_9fa48("2688") ? a / a : (stryCov_9fa48("2688"), a * a)) % M);
        stryMutAct_9fa48("2689") ? b <<= 1n : (stryCov_9fa48("2689"), b >>= 1n);
      }
    }
    return res;
  }
}
let inv10000 = powmod(10000n, stryMutAct_9fa48("2690") ? M + 2n : (stryCov_9fa48("2690"), M - 2n));
let inv2 = powmod(2n, stryMutAct_9fa48("2691") ? M + 2n : (stryCov_9fa48("2691"), M - 2n));
let inv8 = powmod(8n, stryMutAct_9fa48("2692") ? M + 2n : (stryCov_9fa48("2692"), M - 2n));
let inv_pows = new BigInt64Array(MAX);
inv_pows[0] = 1n;
for (let i = 1; stryMutAct_9fa48("2695") ? i >= MAX : stryMutAct_9fa48("2694") ? i <= MAX : stryMutAct_9fa48("2693") ? false : (stryCov_9fa48("2693", "2694", "2695"), i < MAX); stryMutAct_9fa48("2696") ? i-- : (stryCov_9fa48("2696"), i++)) {
  if (stryMutAct_9fa48("2697")) {
    {}
  } else {
    stryCov_9fa48("2697");
    inv_pows[i] = stryMutAct_9fa48("2698") ? inv_pows[i - 1] * inv10000 * M : (stryCov_9fa48("2698"), (stryMutAct_9fa48("2699") ? inv_pows[i - 1] / inv10000 : (stryCov_9fa48("2699"), inv_pows[stryMutAct_9fa48("2700") ? i + 1 : (stryCov_9fa48("2700"), i - 1)] * inv10000)) % M);
  }
}
let pairs = stryMutAct_9fa48("2701") ? ["Stryker was here"] : (stryCov_9fa48("2701"), []);
for (let j = 0; stryMutAct_9fa48("2704") ? j >= 10 : stryMutAct_9fa48("2703") ? j <= 10 : stryMutAct_9fa48("2702") ? false : (stryCov_9fa48("2702", "2703", "2704"), j < 10); stryMutAct_9fa48("2705") ? j-- : (stryCov_9fa48("2705"), j++)) {
  if (stryMutAct_9fa48("2706")) {
    {}
  } else {
    stryCov_9fa48("2706");
    for (let l = stryMutAct_9fa48("2707") ? j - 1 : (stryCov_9fa48("2707"), j + 1); stryMutAct_9fa48("2710") ? l >= 10 : stryMutAct_9fa48("2709") ? l <= 10 : stryMutAct_9fa48("2708") ? false : (stryCov_9fa48("2708", "2709", "2710"), l < 10); stryMutAct_9fa48("2711") ? l-- : (stryCov_9fa48("2711"), l++)) {
      if (stryMutAct_9fa48("2712")) {
        {}
      } else {
        stryCov_9fa48("2712");
        pairs.push(stryMutAct_9fa48("2713") ? [] : (stryCov_9fa48("2713"), [j, l]));
      }
    }
  }
}
let pow2_2j = new BigInt64Array(10);
pow2_2j.fill(1n);
for (let j = 0; stryMutAct_9fa48("2716") ? j >= 10 : stryMutAct_9fa48("2715") ? j <= 10 : stryMutAct_9fa48("2714") ? false : (stryCov_9fa48("2714", "2715", "2716"), j < 10); stryMutAct_9fa48("2717") ? j-- : (stryCov_9fa48("2717"), j++)) {
  if (stryMutAct_9fa48("2718")) {
    {}
  } else {
    stryCov_9fa48("2718");
    pow2_2j[j] = powmod(2n, BigInt(stryMutAct_9fa48("2719") ? 2 / j : (stryCov_9fa48("2719"), 2 * j)));
  }
}
let pow2_jl = new BigInt64Array(45);
pow2_jl.fill(1n);
for (let i = 0; stryMutAct_9fa48("2722") ? i >= 45 : stryMutAct_9fa48("2721") ? i <= 45 : stryMutAct_9fa48("2720") ? false : (stryCov_9fa48("2720", "2721", "2722"), i < 45); stryMutAct_9fa48("2723") ? i-- : (stryCov_9fa48("2723"), i++)) {
  if (stryMutAct_9fa48("2724")) {
    {}
  } else {
    stryCov_9fa48("2724");
    pow2_jl[i] = powmod(2n, BigInt(stryMutAct_9fa48("2725") ? pairs[i][0] - pairs[i][1] : (stryCov_9fa48("2725"), pairs[i][0] + pairs[i][1])));
  }
}
export function solve(n, a, p) {
  if (stryMutAct_9fa48("2726")) {
    {}
  } else {
    stryCov_9fa48("2726");
    let Pj = new BigInt64Array(10);
    Pj.fill(1n);
    let kj = new Uint32Array(10);
    let sz = pairs.length;
    let PA = new BigInt64Array(sz);
    PA.fill(1n);
    let PB = new BigInt64Array(sz);
    PB.fill(1n);
    let PC = new BigInt64Array(sz);
    PC.fill(1n);
    let kA = new Uint32Array(sz);
    let kB = new Uint32Array(sz);
    let kC = new Uint32Array(sz);
    for (let i = 0; stryMutAct_9fa48("2729") ? i >= n : stryMutAct_9fa48("2728") ? i <= n : stryMutAct_9fa48("2727") ? false : (stryCov_9fa48("2727", "2728", "2729"), i < n); stryMutAct_9fa48("2730") ? i-- : (stryCov_9fa48("2730"), i++)) {
      if (stryMutAct_9fa48("2731")) {
        {}
      } else {
        stryCov_9fa48("2731");
        let ai = a[i],
          pi = p[i];
        let val = stryMutAct_9fa48("2732") ? (10000n - 2n * BigInt(pi) + M) * M : (stryCov_9fa48("2732"), (stryMutAct_9fa48("2733") ? 10000n - 2n * BigInt(pi) - M : (stryCov_9fa48("2733"), (stryMutAct_9fa48("2734") ? 10000n + 2n * BigInt(pi) : (stryCov_9fa48("2734"), 10000n - (stryMutAct_9fa48("2735") ? 2n / BigInt(pi) : (stryCov_9fa48("2735"), 2n * BigInt(pi))))) + M)) % M);
        for (let j = 0; stryMutAct_9fa48("2738") ? j >= 10 : stryMutAct_9fa48("2737") ? j <= 10 : stryMutAct_9fa48("2736") ? false : (stryCov_9fa48("2736", "2737", "2738"), j < 10); stryMutAct_9fa48("2739") ? j-- : (stryCov_9fa48("2739"), j++)) {
          if (stryMutAct_9fa48("2740")) {
            {}
          } else {
            stryCov_9fa48("2740");
            if (stryMutAct_9fa48("2742") ? false : stryMutAct_9fa48("2741") ? true : (stryCov_9fa48("2741", "2742"), ai >> j & 1)) {
              if (stryMutAct_9fa48("2743")) {
                {}
              } else {
                stryCov_9fa48("2743");
                Pj[j] = stryMutAct_9fa48("2744") ? Pj[j] * val * M : (stryCov_9fa48("2744"), (stryMutAct_9fa48("2745") ? Pj[j] / val : (stryCov_9fa48("2745"), Pj[j] * val)) % M);
                stryMutAct_9fa48("2746") ? kj[j]-- : (stryCov_9fa48("2746"), kj[j]++);
              }
            }
          }
        }
        for (let idx = 0; stryMutAct_9fa48("2749") ? idx >= sz : stryMutAct_9fa48("2748") ? idx <= sz : stryMutAct_9fa48("2747") ? false : (stryCov_9fa48("2747", "2748", "2749"), idx < sz); stryMutAct_9fa48("2750") ? idx-- : (stryCov_9fa48("2750"), idx++)) {
          if (stryMutAct_9fa48("2751")) {
            {}
          } else {
            stryCov_9fa48("2751");
            let j = pairs[idx][0],
              l = pairs[idx][1];
            let sj = ai >> j & 1,
              sl = ai >> l & 1;
            if (stryMutAct_9fa48("2754") ? sj || !sl : stryMutAct_9fa48("2753") ? false : stryMutAct_9fa48("2752") ? true : (stryCov_9fa48("2752", "2753", "2754"), sj && (stryMutAct_9fa48("2755") ? sl : (stryCov_9fa48("2755"), !sl)))) {
              if (stryMutAct_9fa48("2756")) {
                {}
              } else {
                stryCov_9fa48("2756");
                PA[idx] = stryMutAct_9fa48("2757") ? PA[idx] * val * M : (stryCov_9fa48("2757"), (stryMutAct_9fa48("2758") ? PA[idx] / val : (stryCov_9fa48("2758"), PA[idx] * val)) % M);
                stryMutAct_9fa48("2759") ? kA[idx]-- : (stryCov_9fa48("2759"), kA[idx]++);
              }
            }
            if (stryMutAct_9fa48("2762") ? sl || !sj : stryMutAct_9fa48("2761") ? false : stryMutAct_9fa48("2760") ? true : (stryCov_9fa48("2760", "2761", "2762"), sl && (stryMutAct_9fa48("2763") ? sj : (stryCov_9fa48("2763"), !sj)))) {
              if (stryMutAct_9fa48("2764")) {
                {}
              } else {
                stryCov_9fa48("2764");
                PB[idx] = stryMutAct_9fa48("2765") ? PB[idx] * val * M : (stryCov_9fa48("2765"), (stryMutAct_9fa48("2766") ? PB[idx] / val : (stryCov_9fa48("2766"), PB[idx] * val)) % M);
                stryMutAct_9fa48("2767") ? kB[idx]-- : (stryCov_9fa48("2767"), kB[idx]++);
              }
            }
            if (stryMutAct_9fa48("2770") ? sj || sl : stryMutAct_9fa48("2769") ? false : stryMutAct_9fa48("2768") ? true : (stryCov_9fa48("2768", "2769", "2770"), sj && sl)) {
              if (stryMutAct_9fa48("2771")) {
                {}
              } else {
                stryCov_9fa48("2771");
                PC[idx] = stryMutAct_9fa48("2772") ? PC[idx] * val * M : (stryCov_9fa48("2772"), (stryMutAct_9fa48("2773") ? PC[idx] / val : (stryCov_9fa48("2773"), PC[idx] * val)) % M);
                stryMutAct_9fa48("2774") ? kC[idx]-- : (stryCov_9fa48("2774"), kC[idx]++);
              }
            }
          }
        }
      }
    }
    for (let j = 0; stryMutAct_9fa48("2777") ? j >= 10 : stryMutAct_9fa48("2776") ? j <= 10 : stryMutAct_9fa48("2775") ? false : (stryCov_9fa48("2775", "2776", "2777"), j < 10); stryMutAct_9fa48("2778") ? j-- : (stryCov_9fa48("2778"), j++)) {
      if (stryMutAct_9fa48("2779")) {
        {}
      } else {
        stryCov_9fa48("2779");
        if (stryMutAct_9fa48("2783") ? kj[j] <= 0 : stryMutAct_9fa48("2782") ? kj[j] >= 0 : stryMutAct_9fa48("2781") ? false : stryMutAct_9fa48("2780") ? true : (stryCov_9fa48("2780", "2781", "2782", "2783"), kj[j] > 0)) {
          if (stryMutAct_9fa48("2784")) {
            {}
          } else {
            stryCov_9fa48("2784");
            Pj[j] = stryMutAct_9fa48("2785") ? Pj[j] * inv_pows[kj[j]] * M : (stryCov_9fa48("2785"), (stryMutAct_9fa48("2786") ? Pj[j] / inv_pows[kj[j]] : (stryCov_9fa48("2786"), Pj[j] * inv_pows[kj[j]])) % M);
          }
        }
      }
    }
    for (let idx = 0; stryMutAct_9fa48("2789") ? idx >= sz : stryMutAct_9fa48("2788") ? idx <= sz : stryMutAct_9fa48("2787") ? false : (stryCov_9fa48("2787", "2788", "2789"), idx < sz); stryMutAct_9fa48("2790") ? idx-- : (stryCov_9fa48("2790"), idx++)) {
      if (stryMutAct_9fa48("2791")) {
        {}
      } else {
        stryCov_9fa48("2791");
        if (stryMutAct_9fa48("2795") ? kA[idx] <= 0 : stryMutAct_9fa48("2794") ? kA[idx] >= 0 : stryMutAct_9fa48("2793") ? false : stryMutAct_9fa48("2792") ? true : (stryCov_9fa48("2792", "2793", "2794", "2795"), kA[idx] > 0)) PA[idx] = stryMutAct_9fa48("2796") ? PA[idx] * inv_pows[kA[idx]] * M : (stryCov_9fa48("2796"), (stryMutAct_9fa48("2797") ? PA[idx] / inv_pows[kA[idx]] : (stryCov_9fa48("2797"), PA[idx] * inv_pows[kA[idx]])) % M);
        if (stryMutAct_9fa48("2801") ? kB[idx] <= 0 : stryMutAct_9fa48("2800") ? kB[idx] >= 0 : stryMutAct_9fa48("2799") ? false : stryMutAct_9fa48("2798") ? true : (stryCov_9fa48("2798", "2799", "2800", "2801"), kB[idx] > 0)) PB[idx] = stryMutAct_9fa48("2802") ? PB[idx] * inv_pows[kB[idx]] * M : (stryCov_9fa48("2802"), (stryMutAct_9fa48("2803") ? PB[idx] / inv_pows[kB[idx]] : (stryCov_9fa48("2803"), PB[idx] * inv_pows[kB[idx]])) % M);
        if (stryMutAct_9fa48("2807") ? kC[idx] <= 0 : stryMutAct_9fa48("2806") ? kC[idx] >= 0 : stryMutAct_9fa48("2805") ? false : stryMutAct_9fa48("2804") ? true : (stryCov_9fa48("2804", "2805", "2806", "2807"), kC[idx] > 0)) PC[idx] = stryMutAct_9fa48("2808") ? PC[idx] * inv_pows[kC[idx]] * M : (stryCov_9fa48("2808"), (stryMutAct_9fa48("2809") ? PC[idx] / inv_pows[kC[idx]] : (stryCov_9fa48("2809"), PC[idx] * inv_pows[kC[idx]])) % M);
      }
    }
    let Ebj = new BigInt64Array(10);
    for (let j = 0; stryMutAct_9fa48("2812") ? j >= 10 : stryMutAct_9fa48("2811") ? j <= 10 : stryMutAct_9fa48("2810") ? false : (stryCov_9fa48("2810", "2811", "2812"), j < 10); stryMutAct_9fa48("2813") ? j-- : (stryCov_9fa48("2813"), j++)) {
      if (stryMutAct_9fa48("2814")) {
        {}
      } else {
        stryCov_9fa48("2814");
        Ebj[j] = stryMutAct_9fa48("2815") ? (1n + M - Pj[j]) % M * inv2 * M : (stryCov_9fa48("2815"), (stryMutAct_9fa48("2816") ? (1n + M - Pj[j]) % M / inv2 : (stryCov_9fa48("2816"), (stryMutAct_9fa48("2817") ? (1n + M - Pj[j]) * M : (stryCov_9fa48("2817"), (stryMutAct_9fa48("2818") ? 1n + M + Pj[j] : (stryCov_9fa48("2818"), (stryMutAct_9fa48("2819") ? 1n - M : (stryCov_9fa48("2819"), 1n + M)) - Pj[j])) % M)) * inv2)) % M);
      }
    }
    let Ebl = new BigInt64Array(45);
    for (let idx = 0; stryMutAct_9fa48("2822") ? idx >= sz : stryMutAct_9fa48("2821") ? idx <= sz : stryMutAct_9fa48("2820") ? false : (stryCov_9fa48("2820", "2821", "2822"), idx < sz); stryMutAct_9fa48("2823") ? idx-- : (stryCov_9fa48("2823"), idx++)) {
      if (stryMutAct_9fa48("2824")) {
        {}
      } else {
        stryCov_9fa48("2824");
        let term1 = stryMutAct_9fa48("2825") ? (1n + PC[idx]) * M : (stryCov_9fa48("2825"), (stryMutAct_9fa48("2826") ? 1n - PC[idx] : (stryCov_9fa48("2826"), 1n + PC[idx])) % M);
        term1 = stryMutAct_9fa48("2827") ? term1 * (1n + M - PA[idx]) * M : (stryCov_9fa48("2827"), (stryMutAct_9fa48("2828") ? term1 / (1n + M - PA[idx]) : (stryCov_9fa48("2828"), term1 * (stryMutAct_9fa48("2829") ? 1n + M + PA[idx] : (stryCov_9fa48("2829"), (stryMutAct_9fa48("2830") ? 1n - M : (stryCov_9fa48("2830"), 1n + M)) - PA[idx])))) % M);
        term1 = stryMutAct_9fa48("2831") ? term1 * (1n + M - PB[idx]) * M : (stryCov_9fa48("2831"), (stryMutAct_9fa48("2832") ? term1 / (1n + M - PB[idx]) : (stryCov_9fa48("2832"), term1 * (stryMutAct_9fa48("2833") ? 1n + M + PB[idx] : (stryCov_9fa48("2833"), (stryMutAct_9fa48("2834") ? 1n - M : (stryCov_9fa48("2834"), 1n + M)) - PB[idx])))) % M);
        let term2 = stryMutAct_9fa48("2835") ? (1n + M - PC[idx]) * M : (stryCov_9fa48("2835"), (stryMutAct_9fa48("2836") ? 1n + M + PC[idx] : (stryCov_9fa48("2836"), (stryMutAct_9fa48("2837") ? 1n - M : (stryCov_9fa48("2837"), 1n + M)) - PC[idx])) % M);
        term2 = stryMutAct_9fa48("2838") ? term2 * (1n + PA[idx]) * M : (stryCov_9fa48("2838"), (stryMutAct_9fa48("2839") ? term2 / (1n + PA[idx]) : (stryCov_9fa48("2839"), term2 * (stryMutAct_9fa48("2840") ? 1n - PA[idx] : (stryCov_9fa48("2840"), 1n + PA[idx])))) % M);
        term2 = stryMutAct_9fa48("2841") ? term2 * (1n + PB[idx]) * M : (stryCov_9fa48("2841"), (stryMutAct_9fa48("2842") ? term2 / (1n + PB[idx]) : (stryCov_9fa48("2842"), term2 * (stryMutAct_9fa48("2843") ? 1n - PB[idx] : (stryCov_9fa48("2843"), 1n + PB[idx])))) % M);
        Ebl[idx] = stryMutAct_9fa48("2844") ? (term1 + term2) % M * inv8 * M : (stryCov_9fa48("2844"), (stryMutAct_9fa48("2845") ? (term1 + term2) % M / inv8 : (stryCov_9fa48("2845"), (stryMutAct_9fa48("2846") ? (term1 + term2) * M : (stryCov_9fa48("2846"), (stryMutAct_9fa48("2847") ? term1 - term2 : (stryCov_9fa48("2847"), term1 + term2)) % M)) * inv8)) % M);
      }
    }
    let sum1 = 0n,
      sum2 = 0n;
    for (let j = 0; stryMutAct_9fa48("2850") ? j >= 10 : stryMutAct_9fa48("2849") ? j <= 10 : stryMutAct_9fa48("2848") ? false : (stryCov_9fa48("2848", "2849", "2850"), j < 10); stryMutAct_9fa48("2851") ? j-- : (stryCov_9fa48("2851"), j++)) {
      if (stryMutAct_9fa48("2852")) {
        {}
      } else {
        stryCov_9fa48("2852");
        sum1 = stryMutAct_9fa48("2853") ? (sum1 + pow2_2j[j] * Ebj[j]) * M : (stryCov_9fa48("2853"), (stryMutAct_9fa48("2854") ? sum1 - pow2_2j[j] * Ebj[j] : (stryCov_9fa48("2854"), sum1 + (stryMutAct_9fa48("2855") ? pow2_2j[j] / Ebj[j] : (stryCov_9fa48("2855"), pow2_2j[j] * Ebj[j])))) % M);
      }
    }
    for (let idx = 0; stryMutAct_9fa48("2858") ? idx >= sz : stryMutAct_9fa48("2857") ? idx <= sz : stryMutAct_9fa48("2856") ? false : (stryCov_9fa48("2856", "2857", "2858"), idx < sz); stryMutAct_9fa48("2859") ? idx-- : (stryCov_9fa48("2859"), idx++)) {
      if (stryMutAct_9fa48("2860")) {
        {}
      } else {
        stryCov_9fa48("2860");
        sum2 = stryMutAct_9fa48("2861") ? (sum2 + pow2_jl[idx] * Ebl[idx]) * M : (stryCov_9fa48("2861"), (stryMutAct_9fa48("2862") ? sum2 - pow2_jl[idx] * Ebl[idx] : (stryCov_9fa48("2862"), sum2 + (stryMutAct_9fa48("2863") ? pow2_jl[idx] / Ebl[idx] : (stryCov_9fa48("2863"), pow2_jl[idx] * Ebl[idx])))) % M);
      }
    }
    let res = stryMutAct_9fa48("2864") ? (sum1 + 2n * sum2) * M : (stryCov_9fa48("2864"), (stryMutAct_9fa48("2865") ? sum1 - 2n * sum2 : (stryCov_9fa48("2865"), sum1 + (stryMutAct_9fa48("2866") ? 2n / sum2 : (stryCov_9fa48("2866"), 2n * sum2)))) % M);
    return Number(res);
  }
}

// function testing_test() {
//     const tests = [
//         { n: 2, a: [1,2], p: [5000,5000], expected: 500000007 },
//         { n: 2, a: [1, 1], p: [1000, 2000], expected: 820000006 },
//         { n: 6, a: [343, 624, 675, 451, 902, 820], p: [6536, 5326, 7648, 2165, 9430, 5428], expected: 280120536 },
//         { n: 1, a: [1], p: [10000], expected: 1 }
//     ];

//     tests.forEach((test, index) => {
//         const result = solve(test.n, test.a, test.p);
//         console.log(`Test case ${index + 1}:`);
//         console.log(`Input: n=${test.n}, a=${test.a}, p=${test.p}`);
//         console.log(`Expected: ${test.expected}, Got: ${result}`);
//         console.log(`Status: ${result === test.expected ? 'PASS' : 'FAIL'}`);
//         console.log('---');
//     });
// }

// // Run the test cases
// testing_test();