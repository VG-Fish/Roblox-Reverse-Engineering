!(function () {
  "use strict";
  var e,
    n = {},
    r = {};
  function t(e) {
    var i = r[e];
    if (void 0 !== i) return i.exports;
    var u = (r[e] = { exports: {} });
    return n[e](u, u.exports, t), u.exports;
  }
  (t.d = function (e, n) {
    for (var r in n)
      t.o(n, r) &&
        !t.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
  }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.rv = function () {
      return "1.2.8";
    }),
    (t.ruid = "bundler=rspack@1.2.8");
  var i = {};
  t.r(i),
    t.d(i, {
      AppTypes: function () {
        return b;
      },
      DeviceTypes: function () {
        return A;
      },
      getDeviceMeta: function () {
        return g;
      },
      isIE: function () {
        return m;
      },
      isIE11: function () {
        return y;
      },
      isIos13Ipad: function () {
        return p;
      },
      isMac: function () {
        return v;
      },
      isWindows: function () {
        return f;
      },
    });
  var u = {};
  t.r(u),
    t.d(u, {
      isTestSite: function () {
        return I;
      },
    });
  var o = {};
  t.r(o),
    t.d(o, {
      authenticatedUser: function () {
        return j;
      },
      createdDateTime: function () {
        return U;
      },
      displayName: function () {
        return O;
      },
      isAuthenticated: function () {
        return h;
      },
      isPremiumUser: function () {
        return P;
      },
      isUnder13: function () {
        return D;
      },
      name: function () {
        return x;
      },
      userId: function () {
        return T;
      },
    });
  var a = {};
  function l(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, t = Array(n); r < n; r++) t[r] = e[r];
    return t;
  }
  t.r(a),
    t.d(a, {
      authenticatedUser: function () {
        return C;
      },
      deviceMeta: function () {
        return M;
      },
      environmentSites: function () {
        return E;
      },
      jsClientDeviceIdentifier: function () {
        return N;
      },
    });
  var s = function (e, n) {
      var r =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
      if ("string" == typeof e) r[e] = n;
      else {
        var t =
            (function (e) {
              if (Array.isArray(e)) return l(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, n) {
              if (e) {
                if ("string" == typeof e) return l(e, void 0);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(r);
                if (
                  "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return l(e, n);
              }
            })(e) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })(),
          i = t.pop(),
          u = r,
          o = !0,
          a = !1,
          s = void 0;
        try {
          for (
            var c, d = t[Symbol.iterator]();
            !(o = (c = d.next()).done);
            o = !0
          ) {
            var p,
              v,
              f = c.value;
            (null !== (v = (p = u)[f]) && void 0 !== v) || (p[f] = {}),
              (u = u[f]);
          }
        } catch (e) {
          (a = !0), (s = e);
        } finally {
          try {
            o || null == d.return || d.return();
          } finally {
            if (a) throw s;
          }
        }
        u[i] = n;
      }
    },
    c = function (e, n) {
      s(e, n);
    },
    d = function () {
      var e,
        n = document.querySelector('meta[name="device-meta"]');
      return null !== (e = null == n ? void 0 : n.dataset) && void 0 !== e
        ? e
        : null;
    },
    p = function () {
      return (
        !!window.navigator &&
        "MacIntel" === navigator.platform &&
        navigator.maxTouchPoints > 1
      );
    },
    v = function () {
      return window.navigator.platform.toUpperCase().includes("MAC");
    },
    f = function () {
      return window.navigator.platform.toUpperCase().includes("WIN");
    },
    m = function () {
      return (
        window.navigator.userAgent.toUpperCase().includes("TRIDENT/") ||
        window.navigator.userAgent.toUpperCase().includes("MSIE")
      );
    },
    y = function () {
      return m() && !!/rv[: ]\d+./.exec(window.navigator.userAgent);
    },
    b = {
      android: "android",
      ios: "ios",
      xbox: "xbox",
      uwp: "uwp",
      amazon: "amazon",
      win32: "win32",
      universalapp: " universalApp",
      unknown: "unknown",
    },
    A = {
      computer: "computer",
      tablet: "tablet",
      phone: "phone",
      console: "console",
    },
    g = function () {
      var e,
        n,
        r = d();
      return null == r
        ? null
        : {
            deviceType:
              r.deviceType && null !== (e = A[r.deviceType]) && void 0 !== e
                ? e
                : "",
            appType:
              r.appType && null !== (n = b[r.appType]) && void 0 !== n ? n : "",
            isInApp: "true" === r.isInApp,
            isDesktop: "true" === r.isDesktop,
            isPhone: "true" === r.isPhone,
            isTablet: "true" === r.isTablet,
            isConsole: "true" === r.isConsole,
            isAndroidApp: "true" === r.isAndroidApp,
            isIosApp: "true" === r.isIosApp,
            isUWPApp: "true" === r.isUwpApp,
            isXboxApp: "true" === r.isXboxApp,
            isAmazonApp: "true" === r.isAmazonApp,
            isWin32App: "true" === r.isWin32App,
            isStudio: "true" === r.isStudio,
            isIosDevice: "true" === r.isIosDevice,
            isAndroidDevice: "true" === r.isAndroidDevice,
            isUniversalApp: "true" === r.isUniversalApp,
            isChromeOs: "true" === r.isChromeOs,
          };
    },
    w = function () {
      var e,
        n = document.querySelector('meta[name="environment-meta"]');
      return null !== (e = null == n ? void 0 : n.dataset) && void 0 !== e
        ? e
        : null;
    },
    I = function () {
      var e;
      return (
        (null === (e = w()) || void 0 === e ? void 0 : e.isTestingSite) ===
        "true"
      );
    },
    S = function () {
      var e,
        n = document.querySelector('meta[name="user-data"]');
      return null !== (e = null == n ? void 0 : n.dataset) && void 0 !== e
        ? e
        : null;
    },
    h = function () {
      return null != S();
    },
    T = function () {
      var e,
        n = null === (e = S()) || void 0 === e ? void 0 : e.userid;
      if (null == n) return null;
      var r = Number.parseInt(n, 10);
      return Number.isNaN(r) ? null : r;
    },
    x = function () {
      var e, n;
      return null !==
        (n = null === (e = S()) || void 0 === e ? void 0 : e.name) &&
        void 0 !== n
        ? n
        : null;
    },
    O = function () {
      var e, n;
      return null !==
        (n = null === (e = S()) || void 0 === e ? void 0 : e.displayname) &&
        void 0 !== n
        ? n
        : null;
    },
    U = function () {
      var e, n;
      return null !==
        (n = null === (e = S()) || void 0 === e ? void 0 : e.created) &&
        void 0 !== n
        ? n
        : null;
    },
    D = function () {
      var e;
      return (
        (null === (e = S()) || void 0 === e ? void 0 : e.isunder13) === "true"
      );
    },
    P = function () {
      var e;
      return (
        (null === (e = S()) || void 0 === e ? void 0 : e.ispremiumuser) ===
        "true"
      );
    },
    j = function () {
      var e,
        n,
        r,
        t = S();
      if (null == t) return null;
      var i = null == t.userid ? null : Number.parseInt(t.userid, 10);
      return {
        isAuthenticated: !0,
        id: Number.isNaN(i) ? null : i,
        name: null !== (e = t.name) && void 0 !== e ? e : null,
        displayName: null !== (n = t.displayname) && void 0 !== n ? n : null,
        created: null !== (r = t.created) && void 0 !== r ? r : null,
        isUnder13: "true" === t.isunder13,
        isPremiumUser: "true" === t.ispremiumuser,
      };
    },
    N = {
      isIE: m(),
      isIE11: y(),
      isIos13Ipad: p(),
      isMac: v(),
      isWindows: f(),
    },
    C =
      null !== (e = j()) && void 0 !== e
        ? e
        : {
            isAuthenticated: !1,
            id: null,
            name: null,
            displayName: null,
            created: null,
            isUnder13: !1,
            isPremiumUser: !1,
          },
    M = { AppTypes: b, DeviceTypes: A, getDeviceMeta: g },
    E = { isTestSite: I() };
  c(["Roblox", "core-scripts", "meta", "device"], i),
    c(["Roblox", "core-scripts", "meta", "environment"], u),
    c(["Roblox", "core-scripts", "meta", "user"], o),
    c(
      "HeaderScripts",
      (function (e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              }),
            )),
            t.forEach(function (n) {
              var t;
              (t = r[n]),
                n in e
                  ? Object.defineProperty(e, n, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[n] = t);
            });
        }
        return e;
      })({}, a),
    ),
    s(["Roblox", "JsClientDeviceIdentifier"], N);
})();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/headerScripts-5efafc04f60368e7.js.map
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("HeaderScripts");
