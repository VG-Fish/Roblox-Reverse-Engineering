!(function () {
  "use strict";
  var r = {},
    e = {};
  function n(t) {
    var o = e[t];
    if (void 0 !== o) return o.exports;
    var a = (e[t] = { exports: {} });
    return r[t](a, a.exports, n), a.exports;
  }
  (n.n = function (r) {
    var e =
      r && r.__esModule
        ? function () {
            return r.default;
          }
        : function () {
            return r;
          };
    return n.d(e, { a: e }), e;
  }),
    (n.d = function (r, e) {
      for (var t in e)
        n.o(e, t) &&
          !n.o(r, t) &&
          Object.defineProperty(r, t, { enumerable: !0, get: e[t] });
    }),
    (n.o = function (r, e) {
      return Object.prototype.hasOwnProperty.call(r, e);
    }),
    (n.r = function (r) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(r, "__esModule", { value: !0 });
    }),
    (n.rv = function () {
      return "1.2.8";
    }),
    (n.ruid = "bundler=rspack@1.2.8");
  var t = {};
  function o(r, e) {
    (null == e || e > r.length) && (e = r.length);
    for (var n = 0, t = Array(e); n < e; n++) t[n] = r[n];
    return t;
  }
  n.r(t),
    n.d(t, {
      TranslationResource: function () {
        return i;
      },
      TranslationResourceProvider: function () {
        return s;
      },
    });
  var a = function (r, e) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
      if ("string" == typeof r) n[r] = e;
      else {
        var t =
            (function (r) {
              if (Array.isArray(r)) return o(r);
            })(r) ||
            (function (r) {
              if (
                ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
                null != r["@@iterator"]
              )
                return Array.from(r);
            })(r) ||
            (function (r, e) {
              if (r) {
                if ("string" == typeof r) return o(r, void 0);
                var n = Object.prototype.toString.call(r).slice(8, -1);
                if (
                  ("Object" === n && r.constructor && (n = r.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(n);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return o(r, e);
              }
            })(r) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })(),
          a = t.pop(),
          i = n,
          u = !0,
          l = !1,
          c = void 0;
        try {
          for (
            var f, s = t[Symbol.iterator]();
            !(u = (f = s.next()).done);
            u = !0
          ) {
            var y,
              p,
              d = f.value;
            (null !== (p = (y = i)[d]) && void 0 !== p) || (y[d] = {}),
              (i = i[d]);
          }
        } catch (r) {
          (l = !0), (c = r);
        } finally {
          try {
            u || null == s.return || s.return();
          } finally {
            if (l) throw c;
          }
        }
        i[a] = e;
      }
    },
    i = (function () {
      var r;
      function e(r, n, t) {
        !(function (r, e) {
          if (!(r instanceof e))
            throw TypeError("Cannot call a class as a function");
        })(this, e),
          (this.namespace = t),
          (this.resourceMap = n),
          (this.intl = r);
      }
      return (
        (r = [
          {
            key: "get",
            value: function (r, e) {
              if (!r || "string" != typeof r)
                throw TypeError(
                  "Parameter 'key' must be provided and it should be a string",
                );
              var n = this.resourceMap[r] || "";
              return (
                n ||
                  console.warn(
                    "The translation key '".concat(
                      r,
                      "' not found. Please check for a missing string or a typo.",
                    ),
                  ),
                void 0 !== e &&
                  (e &&
                  (void 0 === e
                    ? "undefined"
                    : e &&
                        "undefined" != typeof Symbol &&
                        e.constructor === Symbol
                      ? "symbol"
                      : typeof e) == "object" &&
                  !Array.isArray(e)
                    ? (n = n ? this.intl.f(n, e) : "")
                    : (new window.RobloxError(
                        "Second parameter must be either a plain object when provided",
                      ).throw(),
                      (n = ""))),
                n
              );
            },
          },
          {
            key: "addKeyForDevelopment",
            value: function (r, e) {
              if (this.resourceMap[r])
                throw Error("key '".concat(r, "' is already present"));
              this.resourceMap[r] = e;
            },
          },
        ]),
        (function (r, e) {
          for (var n = 0; n < e.length; n++) {
            var t = e[n];
            (t.enumerable = t.enumerable || !1),
              (t.configurable = !0),
              "value" in t && (t.writable = !0),
              Object.defineProperty(r, t.key, t);
          }
        })(e.prototype, r),
        e
      );
    })(),
    u = window.Roblox["core-scripts"].intl.intl,
    l = n.n(u);
  function c(r, e) {
    (null == e || e > r.length) && (e = r.length);
    for (var n = 0, t = Array(e); n < e; n++) t[n] = r[n];
    return t;
  }
  function f(r, e) {
    for (var n = 0; n < e.length; n++) {
      var t = e[n];
      (t.enumerable = t.enumerable || !1),
        (t.configurable = !0),
        "value" in t && (t.writable = !0),
        Object.defineProperty(r, t.key, t);
    }
  }
  var s = (function () {
    var r, e;
    function n() {
      var r =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : new (l())();
      !(function (r, e) {
        if (!(r instanceof e))
          throw TypeError("Cannot call a class as a function");
      })(this, n),
        (this.intl = r);
    }
    return (
      (r = [
        {
          key: "getTranslationResource",
          value: function (r) {
            var e = window.Roblox,
              n = e.Lang,
              t = e.LangDynamicDefault,
              o = e.LangDynamic,
              a = (function (r) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {},
                    t = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (t = t.concat(
                      Object.getOwnPropertySymbols(n).filter(function (r) {
                        return Object.getOwnPropertyDescriptor(n, r).enumerable;
                      }),
                    )),
                    t.forEach(function (e) {
                      var t;
                      (t = n[e]),
                        e in r
                          ? Object.defineProperty(r, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (r[e] = t);
                    });
                }
                return r;
              })(
                {},
                null == t ? void 0 : t[r],
                null == n ? void 0 : n[r],
                null == o ? void 0 : o[r],
              );
            return (
              0 === Object.keys(a).length &&
                console.warn("The namespace ".concat(r, " was not found")),
              new i(this.intl, a, r)
            );
          },
        },
        {
          key: "mergeTranslationResources",
          value: function () {
            for (var r = arguments.length, e = Array(r), t = 0; t < r; t++)
              e[t] = arguments[t];
            return n.combineTranslationResources.apply(
              n,
              [this.intl].concat(
                (function (r) {
                  if (Array.isArray(r)) return c(r);
                })(e) ||
                  (function (r) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != r[Symbol.iterator]) ||
                      null != r["@@iterator"]
                    )
                      return Array.from(r);
                  })(e) ||
                  (function (r, e) {
                    if (r) {
                      if ("string" == typeof r) return c(r, void 0);
                      var n = Object.prototype.toString.call(r).slice(8, -1);
                      if (
                        ("Object" === n &&
                          r.constructor &&
                          (n = r.constructor.name),
                        "Map" === n || "Set" === n)
                      )
                        return Array.from(n);
                      if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      )
                        return c(r, e);
                    }
                  })(e) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })(),
              ),
            );
          },
        },
      ]),
      (e = [
        {
          key: "combineTranslationResources",
          value: function (r) {
            for (
              var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), t = 1;
              t < e;
              t++
            )
              n[t - 1] = arguments[t];
            return new i(
              r,
              n.reduce(function (r, e) {
                return Object.assign(r, e.resourceMap);
              }, {}),
              null,
            );
          },
        },
      ]),
      r && f(n.prototype, r),
      e && f(n, e),
      n
    );
  })();
  a(["Roblox", "core-scripts", "intl", "translation"], t),
    a(["Roblox", "TranslationResourceProvider"], s);
})();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/translationResources-69e5843ef57e17f4.js.map
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("TranslationResources");
