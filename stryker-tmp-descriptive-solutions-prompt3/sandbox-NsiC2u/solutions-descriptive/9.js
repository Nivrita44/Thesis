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
export function solve(n, l, edges) {
  if (stryMutAct_9fa48("3860")) {
    {}
  } else {
    stryCov_9fa48("3860");
    let depth = new Uint32Array(n);
    let jump = new Uint32Array(n);
    let parent = new Uint32Array(n);
    let maxVal = stryMutAct_9fa48("3861") ? Math.min(...l) : (stryCov_9fa48("3861"), Math.max(...l));
    let adj = stryMutAct_9fa48("3862") ? new Array() : (stryCov_9fa48("3862"), new Array(n));
    for (let i = 0; stryMutAct_9fa48("3865") ? i >= n : stryMutAct_9fa48("3864") ? i <= n : stryMutAct_9fa48("3863") ? false : (stryCov_9fa48("3863", "3864", "3865"), i < n); stryMutAct_9fa48("3866") ? i-- : (stryCov_9fa48("3866"), i++)) adj[i] = stryMutAct_9fa48("3867") ? ["Stryker was here"] : (stryCov_9fa48("3867"), []);
    for (let [a, b] of edges) {
      if (stryMutAct_9fa48("3868")) {
        {}
      } else {
        stryCov_9fa48("3868");
        adj[a].push(b);
        adj[b].push(a);
      }
    }
    let position = stryMutAct_9fa48("3869") ? new Array() : (stryCov_9fa48("3869"), new Array(stryMutAct_9fa48("3870") ? maxVal - 1 : (stryCov_9fa48("3870"), maxVal + 1)));
    for (let i = 0; stryMutAct_9fa48("3873") ? i > maxVal : stryMutAct_9fa48("3872") ? i < maxVal : stryMutAct_9fa48("3871") ? false : (stryCov_9fa48("3871", "3872", "3873"), i <= maxVal); stryMutAct_9fa48("3874") ? i-- : (stryCov_9fa48("3874"), i++)) position[i] = stryMutAct_9fa48("3875") ? ["Stryker was here"] : (stryCov_9fa48("3875"), []);
    for (let i = 0; stryMutAct_9fa48("3878") ? i >= n : stryMutAct_9fa48("3877") ? i <= n : stryMutAct_9fa48("3876") ? false : (stryCov_9fa48("3876", "3877", "3878"), i < n); stryMutAct_9fa48("3879") ? i-- : (stryCov_9fa48("3879"), i++)) {
      if (stryMutAct_9fa48("3880")) {
        {}
      } else {
        stryCov_9fa48("3880");
        position[l[i]].push(i);
      }
    }
    let stack = stryMutAct_9fa48("3881") ? [] : (stryCov_9fa48("3881"), [0]);
    parent[0] = 0;
    while (stryMutAct_9fa48("3884") ? stack.length <= 0 : stryMutAct_9fa48("3883") ? stack.length >= 0 : stryMutAct_9fa48("3882") ? false : (stryCov_9fa48("3882", "3883", "3884"), stack.length > 0)) {
      if (stryMutAct_9fa48("3885")) {
        {}
      } else {
        stryCov_9fa48("3885");
        let u = stack.pop();
        let ju = jump[u];
        let du = depth[u];
        let fju;
        if (stryMutAct_9fa48("3888") ? ju !== 0 : stryMutAct_9fa48("3887") ? false : stryMutAct_9fa48("3886") ? true : (stryCov_9fa48("3886", "3887", "3888"), ju === 0)) {
          if (stryMutAct_9fa48("3889")) {
            {}
          } else {
            stryCov_9fa48("3889");
            fju = u;
          }
        } else if (stryMutAct_9fa48("3892") ? 2 * depth[ju] - du !== depth[jump[ju]] : stryMutAct_9fa48("3891") ? false : stryMutAct_9fa48("3890") ? true : (stryCov_9fa48("3890", "3891", "3892"), (stryMutAct_9fa48("3893") ? 2 * depth[ju] + du : (stryCov_9fa48("3893"), (stryMutAct_9fa48("3894") ? 2 / depth[ju] : (stryCov_9fa48("3894"), 2 * depth[ju])) - du)) === depth[jump[ju]])) {
          if (stryMutAct_9fa48("3895")) {
            {}
          } else {
            stryCov_9fa48("3895");
            fju = jump[ju];
          }
        } else {
          if (stryMutAct_9fa48("3896")) {
            {}
          } else {
            stryCov_9fa48("3896");
            fju = u;
          }
        }
        for (let v of adj[u]) {
          if (stryMutAct_9fa48("3897")) {
            {}
          } else {
            stryCov_9fa48("3897");
            if (stryMutAct_9fa48("3900") ? parent[u] === v : stryMutAct_9fa48("3899") ? false : stryMutAct_9fa48("3898") ? true : (stryCov_9fa48("3898", "3899", "3900"), parent[u] !== v)) {
              if (stryMutAct_9fa48("3901")) {
                {}
              } else {
                stryCov_9fa48("3901");
                parent[v] = u;
                stack.push(v);
                depth[v] = stryMutAct_9fa48("3902") ? du - 1 : (stryCov_9fa48("3902"), du + 1);
                jump[v] = fju;
              }
            }
          }
        }
      }
    }
    let last = maxVal;
    for (let k = stryMutAct_9fa48("3903") ? last + 1 : (stryCov_9fa48("3903"), last - 1); stryMutAct_9fa48("3906") ? k < 0 : stryMutAct_9fa48("3905") ? k > 0 : stryMutAct_9fa48("3904") ? false : (stryCov_9fa48("3904", "3905", "3906"), k >= 0); stryMutAct_9fa48("3907") ? k++ : (stryCov_9fa48("3907"), k--)) {
      if (stryMutAct_9fa48("3908")) {
        {}
      } else {
        stryCov_9fa48("3908");
        if (stryMutAct_9fa48("3912") ? position[k].length <= 0 : stryMutAct_9fa48("3911") ? position[k].length >= 0 : stryMutAct_9fa48("3910") ? false : stryMutAct_9fa48("3909") ? true : (stryCov_9fa48("3909", "3910", "3911", "3912"), position[k].length > 0)) {
          if (stryMutAct_9fa48("3913")) {
            {}
          } else {
            stryCov_9fa48("3913");
            let te = null;
            let nte = null;
            for (let u of position[k]) {
              if (stryMutAct_9fa48("3914")) {
                {}
              } else {
                stryCov_9fa48("3914");
                if (stryMutAct_9fa48("3917") ? te !== null : stryMutAct_9fa48("3916") ? false : stryMutAct_9fa48("3915") ? true : (stryCov_9fa48("3915", "3916", "3917"), te === null)) {
                  if (stryMutAct_9fa48("3918")) {
                    {}
                  } else {
                    stryCov_9fa48("3918");
                    te = u;
                  }
                } else {
                  if (stryMutAct_9fa48("3919")) {
                    {}
                  } else {
                    stryCov_9fa48("3919");
                    let nu = u;
                    let mte = te;
                    if (stryMutAct_9fa48("3923") ? depth[te] <= depth[u] : stryMutAct_9fa48("3922") ? depth[te] >= depth[u] : stryMutAct_9fa48("3921") ? false : stryMutAct_9fa48("3920") ? true : (stryCov_9fa48("3920", "3921", "3922", "3923"), depth[te] > depth[u])) {
                      if (stryMutAct_9fa48("3924")) {
                        {}
                      } else {
                        stryCov_9fa48("3924");
                        [nu, te] = stryMutAct_9fa48("3925") ? [] : (stryCov_9fa48("3925"), [te, nu]);
                      }
                    }
                    while (stryMutAct_9fa48("3928") ? depth[nu] <= depth[te] : stryMutAct_9fa48("3927") ? depth[nu] >= depth[te] : stryMutAct_9fa48("3926") ? false : (stryCov_9fa48("3926", "3927", "3928"), depth[nu] > depth[te])) {
                      if (stryMutAct_9fa48("3929")) {
                        {}
                      } else {
                        stryCov_9fa48("3929");
                        nu = (stryMutAct_9fa48("3933") ? depth[jump[nu]] < depth[te] : stryMutAct_9fa48("3932") ? depth[jump[nu]] > depth[te] : stryMutAct_9fa48("3931") ? false : stryMutAct_9fa48("3930") ? true : (stryCov_9fa48("3930", "3931", "3932", "3933"), depth[jump[nu]] >= depth[te])) ? jump[nu] : parent[nu];
                      }
                    }
                    if (stryMutAct_9fa48("3936") ? te === nu : stryMutAct_9fa48("3935") ? false : stryMutAct_9fa48("3934") ? true : (stryCov_9fa48("3934", "3935", "3936"), te !== nu)) {
                      if (stryMutAct_9fa48("3937")) {
                        {}
                      } else {
                        stryCov_9fa48("3937");
                        te = mte;
                        nte = u;
                        break;
                      }
                    } else {
                      if (stryMutAct_9fa48("3938")) {
                        {}
                      } else {
                        stryCov_9fa48("3938");
                        te = (stryMutAct_9fa48("3942") ? depth[u] <= depth[te] : stryMutAct_9fa48("3941") ? depth[u] >= depth[te] : stryMutAct_9fa48("3940") ? false : stryMutAct_9fa48("3939") ? true : (stryCov_9fa48("3939", "3940", "3941", "3942"), depth[u] > depth[te])) ? u : mte;
                      }
                    }
                  }
                }
              }
            }
            for (let v of position[last]) {
              if (stryMutAct_9fa48("3943")) {
                {}
              } else {
                stryCov_9fa48("3943");
                if (stryMutAct_9fa48("3947") ? depth[v] >= depth[te] : stryMutAct_9fa48("3946") ? depth[v] <= depth[te] : stryMutAct_9fa48("3945") ? false : stryMutAct_9fa48("3944") ? true : (stryCov_9fa48("3944", "3945", "3946", "3947"), depth[v] < depth[te])) {
                  if (stryMutAct_9fa48("3948")) {
                    {}
                  } else {
                    stryCov_9fa48("3948");
                    return stryMutAct_9fa48("3949") ? te - 1 : (stryCov_9fa48("3949"), te + 1);
                  }
                }
                let tempV = v;
                while (stryMutAct_9fa48("3952") ? depth[tempV] <= depth[te] : stryMutAct_9fa48("3951") ? depth[tempV] >= depth[te] : stryMutAct_9fa48("3950") ? false : (stryCov_9fa48("3950", "3951", "3952"), depth[tempV] > depth[te])) {
                  if (stryMutAct_9fa48("3953")) {
                    {}
                  } else {
                    stryCov_9fa48("3953");
                    tempV = (stryMutAct_9fa48("3957") ? depth[jump[tempV]] < depth[te] : stryMutAct_9fa48("3956") ? depth[jump[tempV]] > depth[te] : stryMutAct_9fa48("3955") ? false : stryMutAct_9fa48("3954") ? true : (stryCov_9fa48("3954", "3955", "3956", "3957"), depth[jump[tempV]] >= depth[te])) ? jump[tempV] : parent[tempV];
                  }
                }
                if (stryMutAct_9fa48("3960") ? tempV === te : stryMutAct_9fa48("3959") ? false : stryMutAct_9fa48("3958") ? true : (stryCov_9fa48("3958", "3959", "3960"), tempV !== te)) {
                  if (stryMutAct_9fa48("3961")) {
                    {}
                  } else {
                    stryCov_9fa48("3961");
                    return stryMutAct_9fa48("3962") ? te - 1 : (stryCov_9fa48("3962"), te + 1);
                  }
                }
                if (stryMutAct_9fa48("3965") ? nte === null : stryMutAct_9fa48("3964") ? false : stryMutAct_9fa48("3963") ? true : (stryCov_9fa48("3963", "3964", "3965"), nte !== null)) {
                  if (stryMutAct_9fa48("3966")) {
                    {}
                  } else {
                    stryCov_9fa48("3966");
                    return stryMutAct_9fa48("3967") ? nte - 1 : (stryCov_9fa48("3967"), nte + 1);
                  }
                }
              }
            }
            last = k;
          }
        }
      }
    }
    return 0;
  }
}

// Test function
// function testing_test() {
//   const testCases = [
//     {
//       input: {
//         n: 4,
//         l: [2, 2, 4, 3],
//         edges: [
//           [0, 1],
//           [0, 2],
//           [1, 3],
//         ],
//       },
//       expected: 2,
//     },
//     {
//       input: {
//         n: 5,
//         l: [1, 2, 3, 4, 5],
//         edges: [
//           [0, 1],
//           [1, 2],
//           [2, 3],
//           [3, 4],
//         ],
//       },
//       expected: 0,
//     },
//     {
//       input: {
//         n: 3,
//         l: [1, 2, 3],
//         edges: [
//           [0, 1],
//           [0, 2],
//         ],
//       },
//       expected: 2,
//     },
//     {
//       input: {
//         n: 5,
//         l: [3, 1, 3, 4, 5],
//         edges: [
//           [0, 1],
//           [1, 2],
//           [2, 3],
//           [3, 4],
//         ],
//       },
//       expected: 2,
//     },
//     {
//       input: {
//         n: 10,
//         l: [1, 2, 3, 2, 4, 3, 3, 4, 4, 3],
//         edges: [
//           [0, 3],
//           [3, 5],
//           [6, 3],
//           [5, 8],
//           [5, 4],
//           [6, 7],
//           [0, 1],
//           [1, 2],
//           [1, 9],
//         ],
//       },
//       expected: 10,
//     },
//   ];

//   console.log("Running Tests...\n");
//   testCases.forEach(({ input, expected }, index) => {
//     const { n, l, edges } = input;
//     const result = solve(
//       n,
//       l.map((x) => x - 1),
//       edges
//     );
//     console.log(`Test Case ${index + 1}:`);
//     console.log(
//       `Input: n=${n}, l=[${l}], edges=[${edges
//         .map((e) => `[${e}]`)
//         .join(", ")}]`
//     );
//     console.log(`Expected: ${expected}`);
//     console.log(`Result: ${result}`);
//     console.log(`Status: ${result === expected ? "PASS" : "FAIL"}\n`);
//   });
// }

// testing_test();

// If Cirno wins the game, print any possible node she may choose in the first turn. Otherwise, print "0" (without quotes).