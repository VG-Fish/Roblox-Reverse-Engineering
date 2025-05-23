!(function () {
  "use strict";
  var t,
    e,
    n,
    r,
    o,
    a,
    i,
    c,
    s,
    u,
    l,
    f,
    p,
    d,
    v,
    y,
    m,
    h,
    g,
    b,
    _,
    O = {},
    S = {};
  function w(t) {
    var e = S[t];
    if (void 0 !== e) return e.exports;
    var n = (S[t] = { exports: {} });
    return O[t](n, n.exports, w), n.exports;
  }
  (w.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  })()),
    (w.rv = function () {
      return "1.2.8";
    }),
    (w.ruid = "bundler=rspack@1.2.8");
  var j = window.HeaderScripts,
    E = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    k = "9.13.0",
    P = globalThis;
  function T() {
    return x(P), P;
  }
  function x(t) {
    var e = (t.__SENTRY__ = t.__SENTRY__ || {});
    return (e.version = e.version || k), (e[k] = e[k] || {});
  }
  function A(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : P,
      r = (n.__SENTRY__ = n.__SENTRY__ || {}),
      o = (r[k] = r[k] || {});
    return o[t] || (o[t] = e());
  }
  var I = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
  function D(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  var C = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    R = {};
  function M(t) {
    if (!("console" in P)) return t();
    var e = P.console,
      n = {},
      r = Object.keys(R);
    r.forEach(function (t) {
      var r = R[t];
      (n[t] = e[t]), (e[t] = r);
    });
    try {
      return t();
    } finally {
      r.forEach(function (t) {
        e[t] = n[t];
      });
    }
  }
  var N = A("logger", function () {
    var t = !1,
      e = {
        enable: function () {
          t = !0;
        },
        disable: function () {
          t = !1;
        },
        isEnabled: function () {
          return t;
        },
      };
    return (
      I
        ? C.forEach(function (n) {
            e[n] = function () {
              for (var e = arguments.length, r = Array(e), o = 0; o < e; o++)
                r[o] = arguments[o];
              t &&
                M(function () {
                  var t;
                  (t = P.console)[n].apply(
                    t,
                    ["".concat("Sentry Logger ", "[").concat(n, "]:")].concat(
                      (function (t) {
                        if (Array.isArray(t)) return D(t);
                      })(r) ||
                        (function (t) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != t[Symbol.iterator]) ||
                            null != t["@@iterator"]
                          )
                            return Array.from(t);
                        })(r) ||
                        (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return D(t, void 0);
                            var n = Object.prototype.toString
                              .call(t)
                              .slice(8, -1);
                            if (
                              ("Object" === n &&
                                t.constructor &&
                                (n = t.constructor.name),
                              "Map" === n || "Set" === n)
                            )
                              return Array.from(n);
                            if (
                              "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            )
                              return D(t, e);
                          }
                        })(r) ||
                        (function () {
                          throw TypeError(
                            "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                          );
                        })(),
                    ),
                  );
                });
            };
          })
        : C.forEach(function (t) {
            e[t] = function () {};
          }),
      e
    );
  });
  function L(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function U(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return L(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      (function (t, e) {
        if (t) {
          if ("string" == typeof t) return L(t, void 0);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return L(t, e);
        }
      })(t) ||
      (function () {
        throw TypeError(
          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  var q = [];
  function F(t, e) {
    var n = !0,
      r = !1,
      o = void 0;
    try {
      for (
        var a, i = e[Symbol.iterator]();
        !(n = (a = i.next()).done);
        n = !0
      ) {
        var c = a.value;
        (null == c ? void 0 : c.afterAllSetup) && c.afterAllSetup(t);
      }
    } catch (t) {
      (r = !0), (o = t);
    } finally {
      try {
        n || null == i.return || i.return();
      } finally {
        if (r) throw o;
      }
    }
  }
  function H(t, e, n) {
    if (n[e.name]) {
      E &&
        N.log(
          "Integration skipped because it was already installed: ".concat(
            e.name,
          ),
        );
      return;
    }
    if (
      ((n[e.name] = e),
      -1 === q.indexOf(e.name) &&
        "function" == typeof e.setupOnce &&
        (e.setupOnce(), q.push(e.name)),
      e.setup && "function" == typeof e.setup && e.setup(t),
      "function" == typeof e.preprocessEvent)
    ) {
      var r = e.preprocessEvent.bind(e);
      t.on("preprocessEvent", function (e, n) {
        return r(e, n, t);
      });
    }
    if ("function" == typeof e.processEvent) {
      var o = e.processEvent.bind(e),
        a = Object.assign(
          function (e, n) {
            return o(e, n, t);
          },
          { id: e.name },
        );
      t.addEventProcessor(a);
    }
    E && N.log("Integration installed: ".concat(e.name));
  }
  function B(t) {
    return t && "undefined" != typeof Symbol && t.constructor === Symbol
      ? "symbol"
      : typeof t;
  }
  var $ = Object.prototype.toString;
  function z(t) {
    switch ($.call(t)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
      case "[object WebAssembly.Exception]":
        return !0;
      default:
        return tt(t, Error);
    }
  }
  function W(t, e) {
    return $.call(t) === "[object ".concat(e, "]");
  }
  function G(t) {
    return W(t, "ErrorEvent");
  }
  function J(t) {
    return W(t, "DOMError");
  }
  function Y(t) {
    return W(t, "String");
  }
  function X(t) {
    return (
      (void 0 === t ? "undefined" : B(t)) === "object" &&
      null !== t &&
      "__sentry_template_string__" in t &&
      "__sentry_template_values__" in t
    );
  }
  function V(t) {
    return (
      null === t ||
      X(t) ||
      ((void 0 === t ? "undefined" : B(t)) !== "object" &&
        "function" != typeof t)
    );
  }
  function K(t) {
    return W(t, "Object");
  }
  function Z(t) {
    return "undefined" != typeof Event && tt(t, Event);
  }
  function Q(t) {
    return !!((null == t ? void 0 : t.then) && "function" == typeof t.then);
  }
  function tt(t, e) {
    try {
      return t instanceof e;
    } catch (t) {
      return !1;
    }
  }
  function te(t) {
    return !!(
      (void 0 === t ? "undefined" : B(t)) === "object" &&
      null !== t &&
      (t.__isVue || t._isVue)
    );
  }
  function tn(t) {
    return "undefined" != typeof Request && tt(t, Request);
  }
  function tr(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!t) return "<unknown>";
    try {
      for (
        var n,
          r = t,
          o = [],
          a = 0,
          i = 0,
          c = Array.isArray(e) ? e : e.keyAttrs,
          s = (!Array.isArray(e) && e.maxStringLength) || 80;
        r &&
        a++ < 5 &&
        ((n = (function (t, e) {
          var n = [];
          if (!(null == t ? void 0 : t.tagName)) return "";
          if (P.HTMLElement && t instanceof HTMLElement && t.dataset) {
            if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
            if (t.dataset.sentryElement) return t.dataset.sentryElement;
          }
          n.push(t.tagName.toLowerCase());
          var r = (null == e ? void 0 : e.length)
            ? e
                .filter(function (e) {
                  return t.getAttribute(e);
                })
                .map(function (e) {
                  return [e, t.getAttribute(e)];
                })
            : null;
          if (null == r ? void 0 : r.length)
            r.forEach(function (t) {
              n.push("[".concat(t[0], '="').concat(t[1], '"]'));
            });
          else {
            t.id && n.push("#".concat(t.id));
            var o = t.className;
            if (o && Y(o)) {
              var a = o.split(/\s+/),
                i = !0,
                c = !1,
                s = void 0;
              try {
                for (
                  var u, l = a[Symbol.iterator]();
                  !(i = (u = l.next()).done);
                  i = !0
                ) {
                  var f = u.value;
                  n.push(".".concat(f));
                }
              } catch (t) {
                (c = !0), (s = t);
              } finally {
                try {
                  i || null == l.return || l.return();
                } finally {
                  if (c) throw s;
                }
              }
            }
          }
          var p = !0,
            d = !1,
            v = void 0;
          try {
            for (
              var y,
                m = ["aria-label", "type", "name", "title", "alt"][
                  Symbol.iterator
                ]();
              !(p = (y = m.next()).done);
              p = !0
            ) {
              var h = y.value,
                g = t.getAttribute(h);
              g && n.push("[".concat(h, '="').concat(g, '"]'));
            }
          } catch (t) {
            (d = !0), (v = t);
          } finally {
            try {
              p || null == m.return || m.return();
            } finally {
              if (d) throw v;
            }
          }
          return n.join("");
        })(r, c)),
        "html" !== n && (!(a > 1) || !(i + 3 * o.length + n.length >= s)));

      )
        o.push(n), (i += n.length), (r = r.parentNode);
      return o.reverse().join(" > ");
    } catch (t) {
      return "<unknown>";
    }
  }
  function to() {
    try {
      return P.document.location.href;
    } catch (t) {
      return "";
    }
  }
  function ta(t) {
    if (!P.HTMLElement) return null;
    for (var e = t, n = 0; n < 5 && e; n++) {
      if (e instanceof HTMLElement) {
        if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
        if (e.dataset.sentryElement) return e.dataset.sentryElement;
      }
      e = e.parentNode;
    }
    return null;
  }
  function ti(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return "string" != typeof t || 0 === e
      ? t
      : t.length <= e
        ? t
        : "".concat(t.slice(0, e), "...");
  }
  function tc(t, e) {
    if (!Array.isArray(t)) return "";
    for (var n = [], r = 0; r < t.length; r++) {
      var o = t[r];
      try {
        te(o) ? n.push("[VueViewModel]") : n.push(String(o));
      } catch (t) {
        n.push("[value cannot be serialized]");
      }
    }
    return n.join(e);
  }
  function ts(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return e.some(function (e) {
      return (function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
          !!Y(t) &&
          (W(e, "RegExp") ? e.test(t) : !!Y(e) && (n ? t === e : t.includes(e)))
        );
      })(t, e, n);
    });
  }
  function tu(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          var r;
          (r = n[e]),
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r);
        });
    }
    return t;
  }
  function tl(t, e, n) {
    if (e in t) {
      var r = t[e];
      if ("function" == typeof r) {
        var o = n(r);
        "function" == typeof o && tp(o, r);
        try {
          t[e] = o;
        } catch (n) {
          I && N.log('Failed to replace method "'.concat(e, '" in object'), t);
        }
      }
    }
  }
  function tf(t, e, n) {
    try {
      Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
    } catch (n) {
      I &&
        N.log(
          'Failed to add non-enumerable property "'.concat(e, '" to object'),
          t,
        );
    }
  }
  function tp(t, e) {
    try {
      var n = e.prototype || {};
      (t.prototype = e.prototype = n), tf(t, "__sentry_original__", e);
    } catch (t) {}
  }
  function td(t) {
    return t.__sentry_original__;
  }
  function tv(t) {
    if (z(t))
      return tu({ message: t.message, name: t.name, stack: t.stack }, tm(t));
    if (!Z(t)) return t;
    var e = tu(
      {
        type: t.type,
        target: ty(t.target),
        currentTarget: ty(t.currentTarget),
      },
      tm(t),
    );
    return (
      "undefined" != typeof CustomEvent &&
        tt(t, CustomEvent) &&
        (e.detail = t.detail),
      e
    );
  }
  function ty(t) {
    try {
      return "undefined" != typeof Element && tt(t, Element)
        ? tr(t)
        : Object.prototype.toString.call(t);
    } catch (t) {
      return "<unknown>";
    }
  }
  function tm(t) {
    if (
      (void 0 === t
        ? "undefined"
        : t && "undefined" != typeof Symbol && t.constructor === Symbol
          ? "symbol"
          : typeof t) != "object" ||
      null === t
    )
      return {};
    var e = {};
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
  }
  function th(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          var r;
          (r = n[e]),
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r);
        });
    }
    return t;
  }
  function tg() {
    var t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : P.crypto || P.msCrypto,
      e = function () {
        return 16 * Math.random();
      };
    try {
      if (null == t ? void 0 : t.randomUUID)
        return t.randomUUID().replace(/-/g, "");
      (null == t ? void 0 : t.getRandomValues) &&
        (e = function () {
          var e = new Uint8Array(1);
          return t.getRandomValues(e), e[0];
        });
    } catch (t) {}
    return "10000000100040008000100000000000".replace(/[018]/g, function (t) {
      return (t ^ ((15 & e()) >> (t / 4))).toString(16);
    });
  }
  function tb(t) {
    var e, n;
    return null === (n = t.exception) || void 0 === n
      ? void 0
      : null === (e = n.values) || void 0 === e
        ? void 0
        : e[0];
  }
  function t_(t) {
    var e = t.message,
      n = t.event_id;
    if (e) return e;
    var r = tb(t);
    return r
      ? r.type && r.value
        ? "".concat(r.type, ": ").concat(r.value)
        : r.type || r.value || n || "<unknown>"
      : n || "<unknown>";
  }
  function tO(t, e, n) {
    var r = (t.exception = t.exception || {}),
      o = (r.values = r.values || []),
      a = (o[0] = o[0] || {});
    a.value || (a.value = e || ""), a.type || (a.type = n || "Error");
  }
  function tS(t, e) {
    var n = tb(t);
    if (n) {
      var r = n.mechanism;
      if (
        ((n.mechanism = th({}, { type: "generic", handled: !0 }, r, e)),
        e && "data" in e)
      ) {
        var o = th({}, null == r ? void 0 : r.data, e.data);
        n.mechanism.data = o;
      }
    }
  }
  function tw(t) {
    if (
      (function (t) {
        try {
          return t.__sentry_captured__;
        } catch (t) {}
      })(t)
    )
      return !0;
    try {
      tf(t, "__sentry_captured__", !0);
    } catch (t) {}
    return !1;
  }
  function tj(t) {
    var e = [];
    t.message && e.push(t.message);
    try {
      var n = t.exception.values[t.exception.values.length - 1];
      (null == n ? void 0 : n.value) &&
        (e.push(n.value),
        n.type && e.push("".concat(n.type, ": ").concat(n.value)));
    } catch (t) {}
    return e;
  }
  function tE(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function tk(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return tE(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      (function (t, e) {
        if (t) {
          if ("string" == typeof t) return tE(t, void 0);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return tE(t, e);
        }
      })(t) ||
      (function () {
        throw TypeError(
          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  var tP = [
      /^Script error\.?$/,
      /^Javascript error: Script error\.? on line 0$/,
      /^ResizeObserver loop completed with undelivered notifications.$/,
      /^Cannot redefine property: googletag$/,
      /^Can't find variable: gmo$/,
      /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
      'can\'t redefine non-configurable property "solana"',
      "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
      "Can't find variable: _AutofillCallbackHandler",
      /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
      /^Java exception was raised during method invocation$/,
    ],
    tT = function () {
      var t,
        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return {
        name: "EventFilters",
        setup: function (n) {
          t = tA(e, n.getOptions());
        },
        processEvent: function (n, r, o) {
          return (
            t || (t = tA(e, o.getOptions())),
            !(function (t, e) {
              if (t.type) {
                if (
                  "transaction" === t.type &&
                  (function (t, e) {
                    if (!(null == e ? void 0 : e.length)) return !1;
                    var n = t.transaction;
                    return !!n && ts(n, e);
                  })(t, e.ignoreTransactions)
                )
                  return (
                    E &&
                      N.warn(
                        "Event dropped due to being matched by `ignoreTransactions` option.\nEvent: ".concat(
                          t_(t),
                        ),
                      ),
                    !0
                  );
              } else {
                var n, r, o, a, i;
                if (
                  ((n = t),
                  null != (r = e.ignoreErrors) &&
                    r.length &&
                    tj(n).some(function (t) {
                      return ts(t, r);
                    }))
                )
                  return (
                    E &&
                      N.warn(
                        "Event dropped due to being matched by `ignoreErrors` option.\nEvent: ".concat(
                          t_(t),
                        ),
                      ),
                    !0
                  );
                if (
                  null !== (i = (o = t).exception) &&
                  void 0 !== i &&
                  null !== (a = i.values) &&
                  void 0 !== a &&
                  a.length &&
                  !o.message &&
                  !o.exception.values.some(function (t) {
                    return (
                      t.stacktrace || (t.type && "Error" !== t.type) || t.value
                    );
                  })
                )
                  return (
                    E &&
                      N.warn(
                        "Event dropped due to not having an error message, error type or stacktrace.\nEvent: ".concat(
                          t_(t),
                        ),
                      ),
                    !0
                  );
                if (
                  (function (t, e) {
                    if (!(null == e ? void 0 : e.length)) return !1;
                    var n = tI(t);
                    return !!n && ts(n, e);
                  })(t, e.denyUrls)
                )
                  return (
                    E &&
                      N.warn(
                        "Event dropped due to being matched by `denyUrls` option.\nEvent: "
                          .concat(t_(t), ".\nUrl: ")
                          .concat(tI(t)),
                      ),
                    !0
                  );
                if (
                  !(function (t, e) {
                    if (!(null == e ? void 0 : e.length)) return !0;
                    var n = tI(t);
                    return !n || ts(n, e);
                  })(t, e.allowUrls)
                )
                  return (
                    E &&
                      N.warn(
                        "Event dropped due to not being matched by `allowUrls` option.\nEvent: "
                          .concat(t_(t), ".\nUrl: ")
                          .concat(tI(t)),
                      ),
                    !0
                  );
              }
              return !1;
            })(n, t)
              ? n
              : null
          );
        },
      };
    },
    tx = function () {
      var t,
        e,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (
        (t = (function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
              )),
              r.forEach(function (e) {
                var r;
                (r = n[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = r);
              });
          }
          return t;
        })({}, tT(n))),
        (e = e = { name: "InboundFilters" }),
        Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
          : (function (t, e) {
              var n = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                n.push.apply(n, r);
              }
              return n;
            })(Object(e)).forEach(function (n) {
              Object.defineProperty(
                t,
                n,
                Object.getOwnPropertyDescriptor(e, n),
              );
            }),
        t
      );
    };
  function tA() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return {
      allowUrls: tk(t.allowUrls || []).concat(tk(e.allowUrls || [])),
      denyUrls: tk(t.denyUrls || []).concat(tk(e.denyUrls || [])),
      ignoreErrors: tk(t.ignoreErrors || []).concat(
        tk(e.ignoreErrors || []),
        tk(t.disableErrorDefaults ? [] : tP),
      ),
      ignoreTransactions: tk(t.ignoreTransactions || []).concat(
        tk(e.ignoreTransactions || []),
      ),
    };
  }
  function tI(t) {
    try {
      var e,
        n,
        r,
        o = tk(
          null !==
            (r =
              null === (e = t.exception) || void 0 === e ? void 0 : e.values) &&
            void 0 !== r
            ? r
            : [],
        )
          .reverse()
          .find(function (t) {
            var e, n, r;
            return (
              (null === (e = t.mechanism) || void 0 === e
                ? void 0
                : e.parent_id) === void 0 &&
              (null === (r = t.stacktrace) || void 0 === r
                ? void 0
                : null === (n = r.frames) || void 0 === n
                  ? void 0
                  : n.length)
            );
          }),
        a =
          null == o
            ? void 0
            : null === (n = o.stacktrace) || void 0 === n
              ? void 0
              : n.frames;
      return a
        ? (function () {
            for (
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                e = t.length - 1;
              e >= 0;
              e--
            ) {
              var n = t[e];
              if (
                n &&
                "<anonymous>" !== n.filename &&
                "[native code]" !== n.filename
              )
                return n.filename || null;
            }
            return null;
          })(a)
        : null;
    } catch (e) {
      return E && N.error("Cannot extract url for event ".concat(t_(t))), null;
    }
  }
  function tD() {
    return Date.now() / 1e3;
  }
  var tC = (function () {
    var t = P.performance;
    if (!(null == t ? void 0 : t.now)) return tD;
    var e = Date.now() - t.now(),
      n = void 0 == t.timeOrigin ? e : t.timeOrigin;
    return function () {
      return (n + t.now()) / 1e3;
    };
  })();
  function tR() {
    return (
      n ||
        (n = (function () {
          var t,
            e = P.performance;
          if (!(null == e ? void 0 : e.now)) return [void 0, "none"];
          var n = e.now(),
            r = Date.now(),
            o = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : 36e5,
            a =
              null === (t = e.timing) || void 0 === t
                ? void 0
                : t.navigationStart,
            i = "number" == typeof a ? Math.abs(a + n - r) : 36e5;
          return o < 36e5 || i < 36e5
            ? o <= i
              ? [e.timeOrigin, "timeOrigin"]
              : [a, "navigationStart"]
            : [r, "dateNow"];
        })()),
      n[0]
    );
  }
  function tM(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (
      (!e.user ||
        (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
        t.did ||
          e.did ||
          (t.did = e.user.id || e.user.email || e.user.username)),
      (t.timestamp = e.timestamp || tC()),
      e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
      e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
      e.sid && (t.sid = 32 === e.sid.length ? e.sid : tg()),
      void 0 !== e.init && (t.init = e.init),
      !t.did && e.did && (t.did = "".concat(e.did)),
      "number" == typeof e.started && (t.started = e.started),
      t.ignoreDuration)
    )
      t.duration = void 0;
    else if ("number" == typeof e.duration) t.duration = e.duration;
    else {
      var n = t.timestamp - t.started;
      t.duration = n >= 0 ? n : 0;
    }
    e.release && (t.release = e.release),
      e.environment && (t.environment = e.environment),
      !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
      !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
      "number" == typeof e.errors && (t.errors = e.errors),
      e.status && (t.status = e.status);
  }
  function tN() {
    return tg().substring(16);
  }
  function tL(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
    if (
      !e ||
      (void 0 === e
        ? "undefined"
        : e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e) != "object" ||
      n <= 0
    )
      return e;
    if (t && 0 === Object.keys(e).length) return t;
    var r = (function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function (t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            }),
          )),
          r.forEach(function (e) {
            var r;
            (r = n[e]),
              e in t
                ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = r);
          });
      }
      return t;
    })({}, t);
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        (r[o] = tL(r[o], e[o], n - 1));
    return r;
  }
  var tU = "_sentrySpan";
  function tq(t, e) {
    e ? tf(t, tU, e) : delete t[tU];
  }
  function tF(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function tH(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function tB(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          tH(t, e, n[e]);
        });
    }
    return t;
  }
  function t$(t, e) {
    return (
      (e = null != e ? e : {}),
      Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : (function (t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              n.push.apply(n, r);
            }
            return n;
          })(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          }),
      t
    );
  }
  function tz(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return tF(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      (function (t, e) {
        if (t) {
          if ("string" == typeof t) return tF(t, void 0);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return tF(t, e);
        }
      })(t) ||
      (function () {
        throw TypeError(
          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  var tW = (function () {
      var t;
      function e() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw TypeError("Cannot call a class as a function");
        })(this, e),
          (this._notifyingListeners = !1),
          (this._scopeListeners = []),
          (this._eventProcessors = []),
          (this._breadcrumbs = []),
          (this._attachments = []),
          (this._user = {}),
          (this._tags = {}),
          (this._extra = {}),
          (this._contexts = {}),
          (this._sdkProcessingMetadata = {}),
          (this._propagationContext = {
            traceId: tg(),
            sampleRand: Math.random(),
          });
      }
      return (
        (t = [
          {
            key: "clone",
            value: function () {
              var t = new e();
              return (
                (t._breadcrumbs = tz(this._breadcrumbs)),
                (t._tags = tB({}, this._tags)),
                (t._extra = tB({}, this._extra)),
                (t._contexts = tB({}, this._contexts)),
                this._contexts.flags &&
                  (t._contexts.flags = {
                    values: tz(this._contexts.flags.values),
                  }),
                (t._user = this._user),
                (t._level = this._level),
                (t._session = this._session),
                (t._transactionName = this._transactionName),
                (t._fingerprint = this._fingerprint),
                (t._eventProcessors = tz(this._eventProcessors)),
                (t._attachments = tz(this._attachments)),
                (t._sdkProcessingMetadata = tB(
                  {},
                  this._sdkProcessingMetadata,
                )),
                (t._propagationContext = tB({}, this._propagationContext)),
                (t._client = this._client),
                (t._lastEventId = this._lastEventId),
                tq(t, this[tU]),
                t
              );
            },
          },
          {
            key: "setClient",
            value: function (t) {
              this._client = t;
            },
          },
          {
            key: "setLastEventId",
            value: function (t) {
              this._lastEventId = t;
            },
          },
          {
            key: "getClient",
            value: function () {
              return this._client;
            },
          },
          {
            key: "lastEventId",
            value: function () {
              return this._lastEventId;
            },
          },
          {
            key: "addScopeListener",
            value: function (t) {
              this._scopeListeners.push(t);
            },
          },
          {
            key: "addEventProcessor",
            value: function (t) {
              return this._eventProcessors.push(t), this;
            },
          },
          {
            key: "setUser",
            value: function (t) {
              return (
                (this._user = t || {
                  email: void 0,
                  id: void 0,
                  ip_address: void 0,
                  username: void 0,
                }),
                this._session && tM(this._session, { user: t }),
                this._notifyScopeListeners(),
                this
              );
            },
          },
          {
            key: "getUser",
            value: function () {
              return this._user;
            },
          },
          {
            key: "setTags",
            value: function (t) {
              return (
                (this._tags = tB({}, this._tags, t)),
                this._notifyScopeListeners(),
                this
              );
            },
          },
          {
            key: "setTag",
            value: function (t, e) {
              return (
                (this._tags = t$(tB({}, this._tags), tH({}, t, e))),
                this._notifyScopeListeners(),
                this
              );
            },
          },
          {
            key: "setExtras",
            value: function (t) {
              return (
                (this._extra = tB({}, this._extra, t)),
                this._notifyScopeListeners(),
                this
              );
            },
          },
          {
            key: "setExtra",
            value: function (t, e) {
              return (
                (this._extra = t$(tB({}, this._extra), tH({}, t, e))),
                this._notifyScopeListeners(),
                this
              );
            },
          },
          {
            key: "setFingerprint",
            value: function (t) {
              return (
                (this._fingerprint = t), this._notifyScopeListeners(), this
              );
            },
          },
          {
            key: "setLevel",
            value: function (t) {
              return (this._level = t), this._notifyScopeListeners(), this;
            },
          },
          {
            key: "setTransactionName",
            value: function (t) {
              return (
                (this._transactionName = t), this._notifyScopeListeners(), this
              );
            },
          },
          {
            key: "setContext",
            value: function (t, e) {
              return (
                null === e ? delete this._contexts[t] : (this._contexts[t] = e),
                this._notifyScopeListeners(),
                this
              );
            },
          },
          {
            key: "setSession",
            value: function (t) {
              return (
                t ? (this._session = t) : delete this._session,
                this._notifyScopeListeners(),
                this
              );
            },
          },
          {
            key: "getSession",
            value: function () {
              return this._session;
            },
          },
          {
            key: "update",
            value: function (t) {
              if (!t) return this;
              var n = "function" == typeof t ? t(this) : t,
                r =
                  (n instanceof e ? n.getScopeData() : K(n) ? t : void 0) || {},
                o = r.tags,
                a = r.extra,
                i = r.user,
                c = r.contexts,
                s = r.level,
                u = r.fingerprint,
                l = void 0 === u ? [] : u,
                f = r.propagationContext;
              return (
                (this._tags = tB({}, this._tags, o)),
                (this._extra = tB({}, this._extra, a)),
                (this._contexts = tB({}, this._contexts, c)),
                i && Object.keys(i).length && (this._user = i),
                s && (this._level = s),
                l.length && (this._fingerprint = l),
                f && (this._propagationContext = f),
                this
              );
            },
          },
          {
            key: "clear",
            value: function () {
              return (
                (this._breadcrumbs = []),
                (this._tags = {}),
                (this._extra = {}),
                (this._user = {}),
                (this._contexts = {}),
                (this._level = void 0),
                (this._transactionName = void 0),
                (this._fingerprint = void 0),
                (this._session = void 0),
                tq(this, void 0),
                (this._attachments = []),
                this.setPropagationContext({
                  traceId: tg(),
                  sampleRand: Math.random(),
                }),
                this._notifyScopeListeners(),
                this
              );
            },
          },
          {
            key: "addBreadcrumb",
            value: function (t, e) {
              var n,
                r = "number" == typeof e ? e : 100;
              if (r <= 0) return this;
              var o = t$(tB({ timestamp: tD() }, t), {
                message: t.message ? ti(t.message, 2048) : t.message,
              });
              return (
                this._breadcrumbs.push(o),
                this._breadcrumbs.length > r &&
                  ((this._breadcrumbs = this._breadcrumbs.slice(-r)),
                  null === (n = this._client) ||
                    void 0 === n ||
                    n.recordDroppedEvent("buffer_overflow", "log_item")),
                this._notifyScopeListeners(),
                this
              );
            },
          },
          {
            key: "getLastBreadcrumb",
            value: function () {
              return this._breadcrumbs[this._breadcrumbs.length - 1];
            },
          },
          {
            key: "clearBreadcrumbs",
            value: function () {
              return (
                (this._breadcrumbs = []), this._notifyScopeListeners(), this
              );
            },
          },
          {
            key: "addAttachment",
            value: function (t) {
              return this._attachments.push(t), this;
            },
          },
          {
            key: "clearAttachments",
            value: function () {
              return (this._attachments = []), this;
            },
          },
          {
            key: "getScopeData",
            value: function () {
              return {
                breadcrumbs: this._breadcrumbs,
                attachments: this._attachments,
                contexts: this._contexts,
                tags: this._tags,
                extra: this._extra,
                user: this._user,
                level: this._level,
                fingerprint: this._fingerprint || [],
                eventProcessors: this._eventProcessors,
                propagationContext: this._propagationContext,
                sdkProcessingMetadata: this._sdkProcessingMetadata,
                transactionName: this._transactionName,
                span: this[tU],
              };
            },
          },
          {
            key: "setSDKProcessingMetadata",
            value: function (t) {
              return (
                (this._sdkProcessingMetadata = tL(
                  this._sdkProcessingMetadata,
                  t,
                  2,
                )),
                this
              );
            },
          },
          {
            key: "setPropagationContext",
            value: function (t) {
              return (this._propagationContext = t), this;
            },
          },
          {
            key: "getPropagationContext",
            value: function () {
              return this._propagationContext;
            },
          },
          {
            key: "captureException",
            value: function (t, e) {
              var n = (null == e ? void 0 : e.event_id) || tg();
              if (!this._client)
                return (
                  N.warn(
                    "No client configured on scope - will not capture exception!",
                  ),
                  n
                );
              var r = Error("Sentry syntheticException");
              return (
                this._client.captureException(
                  t,
                  t$(tB({ originalException: t, syntheticException: r }, e), {
                    event_id: n,
                  }),
                  this,
                ),
                n
              );
            },
          },
          {
            key: "captureMessage",
            value: function (t, e, n) {
              var r = (null == n ? void 0 : n.event_id) || tg();
              if (!this._client)
                return (
                  N.warn(
                    "No client configured on scope - will not capture message!",
                  ),
                  r
                );
              var o = Error(t);
              return (
                this._client.captureMessage(
                  t,
                  e,
                  t$(tB({ originalException: t, syntheticException: o }, n), {
                    event_id: r,
                  }),
                  this,
                ),
                r
              );
            },
          },
          {
            key: "captureEvent",
            value: function (t, e) {
              var n = (null == e ? void 0 : e.event_id) || tg();
              return (
                this._client
                  ? this._client.captureEvent(
                      t,
                      t$(tB({}, e), { event_id: n }),
                      this,
                    )
                  : N.warn(
                      "No client configured on scope - will not capture event!",
                    ),
                n
              );
            },
          },
          {
            key: "_notifyScopeListeners",
            value: function () {
              var t = this;
              this._notifyingListeners ||
                ((this._notifyingListeners = !0),
                this._scopeListeners.forEach(function (e) {
                  e(t);
                }),
                (this._notifyingListeners = !1));
            },
          },
        ]),
        (function (t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        })(e.prototype, t),
        e
      );
    })(),
    tG = (function () {
      var t;
      function e(t, n) {
        var r, o;
        !(function (t, e) {
          if (!(t instanceof e))
            throw TypeError("Cannot call a class as a function");
        })(this, e),
          (r = t || new tW()),
          (o = n || new tW()),
          (this._stack = [{ scope: r }]),
          (this._isolationScope = o);
      }
      return (
        (t = [
          {
            key: "withScope",
            value: function (t) {
              var e,
                n = this,
                r = this._pushScope();
              try {
                e = t(r);
              } catch (t) {
                throw (this._popScope(), t);
              }
              return Q(e)
                ? e.then(
                    function (t) {
                      return n._popScope(), t;
                    },
                    function (t) {
                      throw (n._popScope(), t);
                    },
                  )
                : (this._popScope(), e);
            },
          },
          {
            key: "getClient",
            value: function () {
              return this.getStackTop().client;
            },
          },
          {
            key: "getScope",
            value: function () {
              return this.getStackTop().scope;
            },
          },
          {
            key: "getIsolationScope",
            value: function () {
              return this._isolationScope;
            },
          },
          {
            key: "getStackTop",
            value: function () {
              return this._stack[this._stack.length - 1];
            },
          },
          {
            key: "_pushScope",
            value: function () {
              var t = this.getScope().clone();
              return (
                this._stack.push({ client: this.getClient(), scope: t }), t
              );
            },
          },
          {
            key: "_popScope",
            value: function () {
              return !(this._stack.length <= 1) && !!this._stack.pop();
            },
          },
        ]),
        (function (t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        })(e.prototype, t),
        e
      );
    })();
  function tJ() {
    var t = x(T());
    return (t.stack =
      t.stack ||
      new tG(
        A("defaultCurrentScope", function () {
          return new tW();
        }),
        A("defaultIsolationScope", function () {
          return new tW();
        }),
      ));
  }
  function tY(t) {
    return tJ().withScope(t);
  }
  function tX(t, e) {
    var n = tJ();
    return n.withScope(function () {
      return (n.getStackTop().scope = t), e(t);
    });
  }
  function tV(t) {
    return tJ().withScope(function () {
      return t(tJ().getIsolationScope());
    });
  }
  function tK(t) {
    var e = x(t);
    return e.acs
      ? e.acs
      : {
          withIsolationScope: tV,
          withScope: tY,
          withSetScope: tX,
          withSetIsolationScope: function (t, e) {
            return tV(e);
          },
          getCurrentScope: function () {
            return tJ().getScope();
          },
          getIsolationScope: function () {
            return tJ().getIsolationScope();
          },
        };
  }
  function tZ(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function tQ() {
    return tK(T()).getCurrentScope();
  }
  function t0() {
    return tK(T()).getIsolationScope();
  }
  function t1() {
    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    var r = tK(T());
    if (2 === e.length) {
      var o =
          (function (t) {
            if (Array.isArray(t)) return t;
          })(e) ||
          (function (t, e) {
            var n,
              r,
              o =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
            if (null != o) {
              var a = [],
                i = !0,
                c = !1;
              try {
                for (
                  o = o.call(t);
                  !(i = (n = o.next()).done) &&
                  (a.push(n.value), a.length !== e);
                  i = !0
                );
              } catch (t) {
                (c = !0), (r = t);
              } finally {
                try {
                  i || null == o.return || o.return();
                } finally {
                  if (c) throw r;
                }
              }
              return a;
            }
          })(e, 2) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return tZ(t, 2);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(n);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return tZ(t, e);
            }
          })(e, 2) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })(),
        a = o[0],
        i = o[1];
      return a ? r.withSetScope(a, i) : r.withScope(i);
    }
    return r.withScope(e[0]);
  }
  function t2() {
    return tQ().getClient();
  }
  var t3 = new WeakMap();
  function t8(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function t4(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t8(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      (function (t, e) {
        if (t) {
          if ("string" == typeof t) return t8(t, void 0);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return t8(t, e);
        }
      })(t) ||
      (function () {
        throw TypeError(
          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  var t6 = /\(error: (.*)\)/,
    t5 = /captureMessage|captureException/;
  function t9() {
    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    var r = e
      .sort(function (t, e) {
        return t[0] - e[0];
      })
      .map(function (t) {
        return t[1];
      });
    return function (t) {
      for (
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          o = [],
          a = t.split("\n"),
          i = e;
        i < a.length;
        i++
      ) {
        var c = a[i];
        if (!(c.length > 1024)) {
          var s = t6.test(c) ? c.replace(t6, "$1") : c;
          if (!s.match(/\S*Error: /)) {
            var u = !0,
              l = !1,
              f = void 0;
            try {
              for (
                var p, d = r[Symbol.iterator]();
                !(u = (p = d.next()).done);
                u = !0
              ) {
                var v = (0, p.value)(s);
                if (v) {
                  o.push(v);
                  break;
                }
              }
            } catch (t) {
              (l = !0), (f = t);
            } finally {
              try {
                u || null == d.return || d.return();
              } finally {
                if (l) throw f;
              }
            }
            if (o.length >= 50 + n) break;
          }
        }
      }
      return (function (t) {
        if (!t.length) return [];
        var e = Array.from(t);
        return (
          /sentryWrapped/.test(t7(e).function || "") && e.pop(),
          e.reverse(),
          t5.test(t7(e).function || "") &&
            (e.pop(), t5.test(t7(e).function || "") && e.pop()),
          e.slice(0, 50).map(function (t) {
            var n, r;
            return (
              (n = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                      Object.getOwnPropertySymbols(n).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                      }),
                    )),
                    r.forEach(function (e) {
                      var r;
                      (r = n[e]),
                        e in t
                          ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (t[e] = r);
                    });
                }
                return t;
              })({}, t)),
              (r = r =
                {
                  filename: t.filename || t7(e).filename,
                  function: t.function || "?",
                }),
              Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : (function (t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                    }
                    return n;
                  })(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      n,
                      t,
                      Object.getOwnPropertyDescriptor(r, t),
                    );
                  }),
              n
            );
          })
        );
      })(o.slice(n));
    };
  }
  function t7(t) {
    return t[t.length - 1] || {};
  }
  var et = "<anonymous>";
  function ee(t) {
    try {
      if (!t || "function" != typeof t) return et;
      return t.name || et;
    } catch (t) {
      return et;
    }
  }
  function en(t) {
    var e = t.exception;
    if (e) {
      var n = [];
      try {
        return (
          e.values.forEach(function (t) {
            t.stacktrace.frames && n.push.apply(n, t4(t.stacktrace.frames));
          }),
          n
        );
      } catch (t) {}
    }
  }
  var er = function () {
    var t;
    return {
      name: "Dedupe",
      processEvent: function (e) {
        if (e.type) return e;
        try {
          var n, r, o, a, i, c, s, u, l, f;
          if (
            ((n = e),
            (r = t) &&
              ((o = n),
              (a = r),
              (i = o.message),
              (c = a.message),
              ((i || c) &&
                (!i || c) &&
                (i || !c) &&
                i === c &&
                ea(o, a) &&
                eo(o, a)) ||
                ((s = n),
                (u = r),
                (l = ei(u)),
                (f = ei(s)),
                l &&
                  f &&
                  l.type === f.type &&
                  l.value === f.value &&
                  ea(s, u) &&
                  eo(s, u))))
          )
            return (
              E &&
                N.warn(
                  "Event dropped due to being a duplicate of previously captured event.",
                ),
              null
            );
        } catch (t) {}
        return (t = e);
      },
    };
  };
  function eo(t, e) {
    var n = en(t),
      r = en(e);
    if (!n && !r) return !0;
    if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
    for (var o = 0; o < r.length; o++) {
      var a = r[o],
        i = n[o];
      if (
        a.filename !== i.filename ||
        a.lineno !== i.lineno ||
        a.colno !== i.colno ||
        a.function !== i.function
      )
        return !1;
    }
    return !0;
  }
  function ea(t, e) {
    var n = t.fingerprint,
      r = e.fingerprint;
    if (!n && !r) return !0;
    if ((n && !r) || (!n && r)) return !1;
    try {
      return n.join("") === r.join("");
    } catch (t) {
      return !1;
    }
  }
  function ei(t) {
    var e;
    return (
      (null === (e = t.exception) || void 0 === e ? void 0 : e.values) &&
      t.exception.values[0]
    );
  }
  function ec() {
    if (!("fetch" in P)) return !1;
    try {
      return (
        new Headers(), new Request("http://www.example.com"), new Response(), !0
      );
    } catch (t) {
      return !1;
    }
  }
  function es(t) {
    return (
      t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    );
  }
  function eu(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  var el = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function ef(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = t.host,
      r = t.path,
      o = t.pass,
      a = t.port,
      i = t.projectId,
      c = t.protocol,
      s = t.publicKey;
    return (
      ""
        .concat(c, "://")
        .concat(s)
        .concat(e && o ? ":".concat(o) : "") +
      "@"
        .concat(n)
        .concat(a ? ":".concat(a) : "", "/")
        .concat(r ? "".concat(r, "/") : r)
        .concat(i)
    );
  }
  function ep(t) {
    return {
      protocol: t.protocol,
      publicKey: t.publicKey || "",
      pass: t.pass || "",
      host: t.host,
      port: t.port || "",
      path: t.path || "",
      projectId: t.projectId,
    };
  }
  function ed(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function ev(t) {
    return t && "undefined" != typeof Symbol && t.constructor === Symbol
      ? "symbol"
      : typeof t;
  }
  function ey(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
      n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : Infinity;
    try {
      return (function t(e, n) {
        var r,
          o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : Infinity,
          a =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : Infinity,
          i =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : ((r = new WeakSet()),
                [
                  function (t) {
                    return !!r.has(t) || (r.add(t), !1);
                  },
                  function (t) {
                    r.delete(t);
                  },
                ]),
          c =
            (function (t) {
              if (Array.isArray(t)) return t;
            })(i) ||
            (function (t, e) {
              var n,
                r,
                o =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
              if (null != o) {
                var a = [],
                  i = !0,
                  c = !1;
                try {
                  for (
                    o = o.call(t);
                    !(i = (n = o.next()).done) &&
                    (a.push(n.value), a.length !== e);
                    i = !0
                  );
                } catch (t) {
                  (c = !0), (r = t);
                } finally {
                  try {
                    i || null == o.return || o.return();
                  } finally {
                    if (c) throw r;
                  }
                }
                return a;
              }
            })(i, 2) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return ed(t, 2);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(n);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return ed(t, e);
              }
            })(i, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })(),
          s = c[0],
          u = c[1];
        if (
          null == n ||
          ["boolean", "string"].includes(void 0 === n ? "undefined" : ev(n)) ||
          ("number" == typeof n && Number.isFinite(n))
        )
          return n;
        var l = (function (t, e) {
          try {
            if (
              "domain" === t &&
              e &&
              (void 0 === e ? "undefined" : ev(e)) === "object" &&
              e._events
            )
              return "[Domain]";
            if ("domainEmitter" === t) return "[DomainEmitter]";
            if (void 0 !== w.g && e === w.g) return "[Global]";
            if ("undefined" != typeof window && e === window) return "[Window]";
            if ("undefined" != typeof document && e === document)
              return "[Document]";
            if (te(e)) return "[VueViewModel]";
            if (
              K(e) &&
              "nativeEvent" in e &&
              "preventDefault" in e &&
              "stopPropagation" in e
            )
              return "[SyntheticEvent]";
            if ("number" == typeof e && !Number.isFinite(e))
              return "[".concat(e, "]");
            if ("function" == typeof e) return "[Function: ".concat(ee(e), "]");
            if ((void 0 === e ? "undefined" : ev(e)) === "symbol")
              return "[".concat(String(e), "]");
            if ((void 0 === e ? "undefined" : ev(e)) === "bigint")
              return "[BigInt: ".concat(String(e), "]");
            var n,
              r,
              o =
                ((n = e),
                (r = Object.getPrototypeOf(n)),
                (null == r ? void 0 : r.constructor)
                  ? r.constructor.name
                  : "null prototype");
            if (/^HTML(\w*)Element$/.test(o))
              return "[HTMLElement: ".concat(o, "]");
            return "[object ".concat(o, "]");
          } catch (t) {
            return "**non-serializable** (".concat(t, ")");
          }
        })(e, n);
        if (!l.startsWith("[object ")) return l;
        if (n.__sentry_skip_normalization__) return n;
        var f =
          "number" == typeof n.__sentry_override_normalization_depth__
            ? n.__sentry_override_normalization_depth__
            : o;
        if (0 === f) return l.replace("object ", "");
        if (s(n)) return "[Circular ~]";
        if (n && "function" == typeof n.toJSON)
          try {
            var p = n.toJSON();
            return t("", p, f - 1, a, i);
          } catch (t) {}
        var d = Array.isArray(n) ? [] : {},
          v = 0,
          y = tv(n);
        for (var m in y)
          if (Object.prototype.hasOwnProperty.call(y, m)) {
            if (v >= a) {
              d[m] = "[MaxProperties ~]";
              break;
            }
            var h = y[m];
            (d[m] = t(m, h, f - 1, a, i)), v++;
          }
        return u(n), d;
      })("", t, e, n);
    } catch (t) {
      return { ERROR: "**non-serializable** (".concat(t, ")") };
    }
  }
  function em(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function eh(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var n,
          r,
          o =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
        if (null != o) {
          var a = [],
            i = !0,
            c = !1;
          try {
            for (
              o = o.call(t);
              !(i = (n = o.next()).done) &&
              (a.push(n.value), !e || a.length !== e);
              i = !0
            );
          } catch (t) {
            (c = !0), (r = t);
          } finally {
            try {
              i || null == o.return || o.return();
            } finally {
              if (c) throw r;
            }
          }
          return a;
        }
      })(t, e) ||
      eg(t, e) ||
      (function () {
        throw TypeError(
          "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function eg(t, e) {
    if (t) {
      if ("string" == typeof t) return em(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      if (
        ("Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n)
      )
        return Array.from(n);
      if (
        "Arguments" === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return em(t, e);
    }
  }
  function eb(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return [t, e];
  }
  function e_(t, e) {
    var n = t[1],
      r = !0,
      o = !1,
      a = void 0;
    try {
      for (
        var i, c = n[Symbol.iterator]();
        !(r = (i = c.next()).done);
        r = !0
      ) {
        var s = i.value,
          u = s[0].type;
        if (e(s, u)) return !0;
      }
    } catch (t) {
      (o = !0), (a = t);
    } finally {
      try {
        r || null == c.return || c.return();
      } finally {
        if (o) throw a;
      }
    }
    return !1;
  }
  function eO(t) {
    var e = x(P);
    return e.encodePolyfill ? e.encodePolyfill(t) : new TextEncoder().encode(t);
  }
  var eS = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    raw_security: "security",
    otel_log: "log_item",
  };
  function ew(t) {
    if (null == t ? void 0 : t.sdk) {
      var e = t.sdk;
      return { name: e.name, version: e.version };
    }
  }
  function ej(t) {
    return [{ type: "otel_log" }, t];
  }
  var eE = new WeakMap();
  function ek(t, e) {
    var n,
      r,
      o,
      a,
      i,
      c = null !== (i = null != e ? e : eE.get(t)) && void 0 !== i ? i : [];
    if (0 !== c.length) {
      var s = t.getOptions(),
        u =
          ((n = s._metadata),
          (r = s.tunnel),
          (o = t.getDsn()),
          (a = {}),
          (null == n ? void 0 : n.sdk) &&
            (a.sdk = { name: n.sdk.name, version: n.sdk.version }),
          r && o && (a.dsn = ef(o)),
          eb(a, c.map(ej)));
      (c.length = 0), t.emit("flushLogs"), t.sendEnvelope(u);
    }
  }
  function eP(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          var r;
          (r = n[e]),
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r);
        });
    }
    return t;
  }
  function eT(t, e) {
    return (
      (e = null != e ? e : {}),
      Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : (function (t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              n.push.apply(n, r);
            }
            return n;
          })(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          }),
      t
    );
  }
  function ex(t) {
    var e;
    (null === (e = t.user) || void 0 === e ? void 0 : e.ip_address) ===
      void 0 && (t.user = eT(eP({}, t.user), { ip_address: "{{auto}}" }));
  }
  function eA(t) {
    if ("aggregates" in t) {
      var e;
      (null === (e = t.attrs) || void 0 === e ? void 0 : e.ip_address) ===
        void 0 && (t.attrs = eT(eP({}, t.attrs), { ip_address: "{{auto}}" }));
    } else void 0 === t.ipAddress && (t.ipAddress = "{{auto}}");
  }
  var eI = "production",
    eD = "sentry.source",
    eC = "sentry.sample_rate",
    eR = "sentry.op",
    eM = "sentry.origin",
    eN = "sentry.idle_span_finish_reason",
    eL = "sentry.measurement_unit",
    eU = "sentry.measurement_value",
    eq = "sentry.custom_span_name",
    eF = "sentry.profile_id",
    eH = "sentry.exclusive_time";
  function eB(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function e$(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var n,
          r,
          o =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
        if (null != o) {
          var a = [],
            i = !0,
            c = !1;
          try {
            for (
              o = o.call(t);
              !(i = (n = o.next()).done) &&
              (a.push(n.value), !e || a.length !== e);
              i = !0
            );
          } catch (t) {
            (c = !0), (r = t);
          } finally {
            try {
              i || null == o.return || o.return();
            } finally {
              if (c) throw r;
            }
          }
          return a;
        }
      })(t, e) ||
      (function (t, e) {
        if (t) {
          if ("string" == typeof t) return eB(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return eB(t, e);
        }
      })(t, e) ||
      (function () {
        throw TypeError(
          "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  var ez = "sentry-",
    eW = /^sentry-/;
  function eG(t) {
    var e,
      n =
        (e = t) && (Y(e) || Array.isArray(e))
          ? Array.isArray(e)
            ? e.reduce(function (t, e) {
                return (
                  Object.entries(eJ(e)).forEach(function (e) {
                    var n = e$(e, 2),
                      r = n[0],
                      o = n[1];
                    t[r] = o;
                  }),
                  t
                );
              }, {})
            : eJ(e)
          : void 0;
    if (n) {
      var r = Object.entries(n).reduce(function (t, e) {
        var n = e$(e, 2),
          r = n[0],
          o = n[1];
        return r.match(eW) && (t[r.slice(ez.length)] = o), t;
      }, {});
      return Object.keys(r).length > 0 ? r : void 0;
    }
  }
  function eJ(t) {
    return t
      .split(",")
      .map(function (t) {
        return t.split("=").map(function (t) {
          return decodeURIComponent(t.trim());
        });
      })
      .reduce(function (t, e) {
        var n = e$(e, 2),
          r = n[0],
          o = n[1];
        return r && o && (t[r] = o), t;
      }, {});
  }
  function eY(t) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
      return !1;
    var e,
      n = t || (null === (e = t2()) || void 0 === e ? void 0 : e.getOptions());
    return !!n && (null != n.tracesSampleRate || !!n.tracesSampler);
  }
  function eX(t, e) {
    t.setAttribute("http.response.status_code", e);
    var n = (function (t) {
      if (t < 400 && t >= 100) return { code: 1 };
      if (t >= 400 && t < 500)
        switch (t) {
          case 401:
            return { code: 2, message: "unauthenticated" };
          case 403:
            return { code: 2, message: "permission_denied" };
          case 404:
            return { code: 2, message: "not_found" };
          case 409:
            return { code: 2, message: "already_exists" };
          case 413:
            return { code: 2, message: "failed_precondition" };
          case 429:
            return { code: 2, message: "resource_exhausted" };
          case 499:
            return { code: 2, message: "cancelled" };
          default:
            return { code: 2, message: "invalid_argument" };
        }
      if (t >= 500 && t < 600)
        switch (t) {
          case 501:
            return { code: 2, message: "unimplemented" };
          case 503:
            return { code: 2, message: "unavailable" };
          case 504:
            return { code: 2, message: "deadline_exceeded" };
          default:
            return { code: 2, message: "internal_error" };
        }
      return { code: 2, message: "unknown_error" };
    })(e);
    "unknown_error" !== n.message && t.setStatus(n);
  }
  var eV = "_sentryScope",
    eK = "_sentryIsolationScope";
  function eZ(t) {
    return { scope: t[eV], isolationScope: t[eK] };
  }
  function eQ(t) {
    if ("boolean" == typeof t) return Number(t);
    var e = "string" == typeof t ? parseFloat(t) : t;
    if (!("number" != typeof e || isNaN(e)) && !(e < 0) && !(e > 1)) return e;
  }
  var e0 = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
  function e1() {
    var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tg(),
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tN(),
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = "";
    return (
      void 0 !== n && (r = n ? "-1" : "-0"),
      "".concat(t, "-").concat(e).concat(r)
    );
  }
  var e2 = !1;
  function e3(t) {
    return t && t.length > 0
      ? t.map(function (t) {
          var e = t.context;
          return (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                  }),
                )),
                r.forEach(function (e) {
                  var r;
                  (r = n[e]),
                    e in t
                      ? Object.defineProperty(t, e, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[e] = r);
                });
            }
            return t;
          })(
            {
              span_id: e.spanId,
              trace_id: e.traceId,
              sampled: 1 === e.traceFlags,
              attributes: t.attributes,
            },
            (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                o = (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    o = {},
                    a = Object.keys(t);
                  for (r = 0; r < a.length; r++)
                    (n = a[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                  return o;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (r = 0; r < a.length; r++)
                  (n = a[r]),
                    !(e.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, n) &&
                      (o[n] = t[n]);
              }
              return o;
            })(t.context, ["spanId", "traceId", "traceFlags"]),
          );
        })
      : void 0;
  }
  function e8(t) {
    return "number" == typeof t
      ? e4(t)
      : Array.isArray(t)
        ? t[0] + t[1] / 1e9
        : t instanceof Date
          ? e4(t.getTime())
          : tC();
  }
  function e4(t) {
    return t > 0x2540be3ff ? t / 1e3 : t;
  }
  function e6(t) {
    if ("function" == typeof t.getSpanJSON) return t.getSpanJSON();
    var e,
      n = t.spanContext(),
      r = n.spanId,
      o = n.traceId;
    if ((e = t).attributes && e.startTime && e.name && e.endTime && e.status) {
      var a = t.attributes,
        i = t.startTime,
        c = t.name,
        s = t.endTime,
        u = t.parentSpanId,
        l = t.status,
        f = t.links;
      return {
        span_id: r,
        trace_id: o,
        data: a,
        description: c,
        parent_span_id: u,
        start_timestamp: e8(i),
        timestamp: e8(s) || void 0,
        status: e9(l),
        op: a[eR],
        origin: a[eM],
        links: e3(f),
      };
    }
    return { span_id: r, trace_id: o, start_timestamp: 0, data: {} };
  }
  function e5(t) {
    return 1 === t.spanContext().traceFlags;
  }
  function e9(t) {
    return t && 0 !== t.code
      ? 1 === t.code
        ? "ok"
        : t.message || "unknown_error"
      : void 0;
  }
  var e7 = "_sentryChildSpans",
    nt = "_sentryRootSpan";
  function ne(t, e) {
    var n = t[nt] || t;
    tf(e, nt, n), t[e7] ? t[e7].add(e) : tf(t, e7, new Set([e]));
  }
  function nn(t) {
    var e = new Set();
    return (
      !(function t(n) {
        if (!e.has(n) && e5(n)) {
          e.add(n);
          var r = n[e7] ? Array.from(n[e7]) : [],
            o = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var c, s = r[Symbol.iterator]();
              !(o = (c = s.next()).done);
              o = !0
            ) {
              var u = c.value;
              t(u);
            }
          } catch (t) {
            (a = !0), (i = t);
          } finally {
            try {
              o || null == s.return || s.return();
            } finally {
              if (a) throw i;
            }
          }
        }
      })(t),
      Array.from(e)
    );
  }
  function nr(t) {
    return t[nt] || t;
  }
  function no() {
    var t = tK(T());
    return t.getActiveSpan ? t.getActiveSpan() : tQ()[tU];
  }
  function na() {
    e2 ||
      (M(function () {
        console.warn(
          "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.",
        );
      }),
      (e2 = !0));
  }
  var ni = "_frozenDsc";
  function nc(t, e) {
    var n = e.getOptions(),
      r = (e.getDsn() || {}).publicKey,
      o = {
        environment: n.environment || eI,
        release: n.release,
        public_key: r,
        trace_id: t,
      };
    return e.emit("createDsc", o), o;
  }
  function ns(t, e) {
    var n = e.getPropagationContext();
    return n.dsc || nc(n.traceId, t);
  }
  function nu(t) {
    var e,
      n,
      r,
      o = t2();
    if (!o) return {};
    var a = nr(t),
      i = e6(a),
      c = i.data,
      s = a.spanContext().traceState,
      u =
        null !== (e = null == s ? void 0 : s.get("sentry.sample_rate")) &&
        void 0 !== e
          ? e
          : c[eC];
    function l(t) {
      return (
        ("number" == typeof u || "string" == typeof u) &&
          (t.sample_rate = "".concat(u)),
        t
      );
    }
    var f = a[ni];
    if (f) return l(f);
    var p = null == s ? void 0 : s.get("sentry.dsc"),
      d = p && eG(p);
    if (d) return l(d);
    var v = nc(t.spanContext().traceId, o),
      y = c[eD],
      m = i.description;
    return (
      "url" !== y && m && (v.transaction = m),
      eY() &&
        ((v.sampled = String(e5(a))),
        (v.sample_rand =
          null !== (r = null == s ? void 0 : s.get("sentry.sample_rand")) &&
          void 0 !== r
            ? r
            : null === (n = eZ(a).scope) || void 0 === n
              ? void 0
              : n.getPropagationContext().sampleRand.toString())),
      l(v),
      o.emit("createDsc", v, a),
      v
    );
  }
  function nl(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function nf(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          var r;
          (r = n[e]),
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r);
        });
    }
    return t;
  }
  function np(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return nl(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      (function (t, e) {
        if (t) {
          if ("string" == typeof t) return nl(t, void 0);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return nl(t, e);
        }
      })(t) ||
      (function () {
        throw TypeError(
          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function nd(t) {
    return new ny(function (e) {
      e(t);
    });
  }
  function nv(t) {
    return new ny(function (e, n) {
      n(t);
    });
  }
  ((t = o || (o = {}))[(t.PENDING = 0)] = "PENDING"),
    (t[(t.RESOLVED = 1)] = "RESOLVED"),
    (t[(t.REJECTED = 2)] = "REJECTED");
  var ny = (function () {
    var t;
    function e(t) {
      !(function (t, e) {
        if (!(t instanceof e))
          throw TypeError("Cannot call a class as a function");
      })(this, e),
        (this._state = o.PENDING),
        (this._handlers = []),
        this._runExecutor(t);
    }
    return (
      (t = [
        {
          key: "then",
          value: function (t, n) {
            var r = this;
            return new e(function (e, o) {
              r._handlers.push([
                !1,
                function (n) {
                  if (t)
                    try {
                      e(t(n));
                    } catch (t) {
                      o(t);
                    }
                  else e(n);
                },
                function (t) {
                  if (n)
                    try {
                      e(n(t));
                    } catch (t) {
                      o(t);
                    }
                  else o(t);
                },
              ]),
                r._executeHandlers();
            });
          },
        },
        {
          key: "catch",
          value: function (t) {
            return this.then(function (t) {
              return t;
            }, t);
          },
        },
        {
          key: "finally",
          value: function (t) {
            var n = this;
            return new e(function (e, r) {
              var o, a;
              return n
                .then(
                  function (e) {
                    (a = !1), (o = e), t && t();
                  },
                  function (e) {
                    (a = !0), (o = e), t && t();
                  },
                )
                .then(function () {
                  if (a) {
                    r(o);
                    return;
                  }
                  e(o);
                });
            });
          },
        },
        {
          key: "_executeHandlers",
          value: function () {
            var t = this;
            if (this._state !== o.PENDING) {
              var e = this._handlers.slice();
              (this._handlers = []),
                e.forEach(function (e) {
                  !e[0] &&
                    (t._state === o.RESOLVED && e[1](t._value),
                    t._state === o.REJECTED && e[2](t._value),
                    (e[0] = !0));
                });
            }
          },
        },
        {
          key: "_runExecutor",
          value: function (t) {
            var e = this,
              n = function (t, n) {
                if (e._state === o.PENDING) {
                  if (Q(n)) {
                    n.then(r, a);
                    return;
                  }
                  (e._state = t), (e._value = n), e._executeHandlers();
                }
              },
              r = function (t) {
                n(o.RESOLVED, t);
              },
              a = function (t) {
                n(o.REJECTED, t);
              };
            try {
              t(r, a);
            } catch (t) {
              a(t);
            }
          },
        },
      ]),
      (function (t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      })(e.prototype, t),
      e
    );
  })();
  function nm(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function nh(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          var r;
          (r = n[e]),
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r);
        });
    }
    return t;
  }
  function ng(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return nm(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      (function (t, e) {
        if (t) {
          if ("string" == typeof t) return nm(t, void 0);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return nm(t, e);
        }
      })(t) ||
      (function () {
        throw TypeError(
          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function nb(t, e) {
    var n = e.extra,
      r = e.tags,
      o = e.user,
      a = e.contexts,
      i = e.level,
      c = e.sdkProcessingMetadata,
      s = e.breadcrumbs,
      u = e.fingerprint,
      l = e.eventProcessors,
      f = e.attachments,
      p = e.propagationContext,
      d = e.transactionName,
      v = e.span;
    n_(t, "extra", n),
      n_(t, "tags", r),
      n_(t, "user", o),
      n_(t, "contexts", a),
      (t.sdkProcessingMetadata = tL(t.sdkProcessingMetadata, c, 2)),
      i && (t.level = i),
      d && (t.transactionName = d),
      v && (t.span = v),
      s.length && (t.breadcrumbs = ng(t.breadcrumbs).concat(ng(s))),
      u.length && (t.fingerprint = ng(t.fingerprint).concat(ng(u))),
      l.length && (t.eventProcessors = ng(t.eventProcessors).concat(ng(l))),
      f.length && (t.attachments = ng(t.attachments).concat(ng(f))),
      (t.propagationContext = nh({}, t.propagationContext, p));
  }
  function n_(t, e, n) {
    t[e] = tL(t[e], n, 1);
  }
  function nO(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function nS(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          var r;
          (r = n[e]),
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r);
        });
    }
    return t;
  }
  function nw(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return nO(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      nj(t) ||
      (function () {
        throw TypeError(
          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function nj(t, e) {
    if (t) {
      if ("string" == typeof t) return nO(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      if (
        ("Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n)
      )
        return Array.from(n);
      if (
        "Arguments" === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return nO(t, e);
    }
  }
  function nE(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function nk(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function nP(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function nT(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          nP(t, e, n[e]);
        });
    }
    return t;
  }
  function nx(t, e) {
    return (
      (e = null != e ? e : {}),
      Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : (function (t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              n.push.apply(n, r);
            }
            return n;
          })(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          }),
      t
    );
  }
  function nA(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var n,
          r,
          o =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
        if (null != o) {
          var a = [],
            i = !0,
            c = !1;
          try {
            for (
              o = o.call(t);
              !(i = (n = o.next()).done) &&
              (a.push(n.value), !e || a.length !== e);
              i = !0
            );
          } catch (t) {
            (c = !0), (r = t);
          } finally {
            try {
              i || null == o.return || o.return();
            } finally {
              if (c) throw r;
            }
          }
          return a;
        }
      })(t, e) ||
      nD(t, e) ||
      (function () {
        throw TypeError(
          "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function nI(t) {
    return t && "undefined" != typeof Symbol && t.constructor === Symbol
      ? "symbol"
      : typeof t;
  }
  function nD(t, e) {
    if (t) {
      if ("string" == typeof t) return nk(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      if (
        ("Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n)
      )
        return Array.from(n);
      if (
        "Arguments" === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return nk(t, e);
    }
  }
  var nC = "Not capturing exception because it's already been captured.",
    nR = "Discarded session because of missing or non-string release",
    nM = Symbol.for("SentryInternalError"),
    nN = Symbol.for("SentryDoNotSendEventError");
  function nL(t) {
    return nP({ message: t }, nM, !0);
  }
  function nU(t) {
    return nP({ message: t }, nN, !0);
  }
  function nq(t) {
    return !!t && (void 0 === t ? "undefined" : nI(t)) === "object" && nM in t;
  }
  function nF(t) {
    return !!t && (void 0 === t ? "undefined" : nI(t)) === "object" && nN in t;
  }
  var nH = (function () {
    var t;
    function e(t) {
      if (
        (!(function (t, e) {
          if (!(t instanceof e))
            throw TypeError("Cannot call a class as a function");
        })(this, e),
        (this._options = t),
        (this._integrations = {}),
        (this._numProcessing = 0),
        (this._outcomes = {}),
        (this._hooks = {}),
        (this._eventProcessors = []),
        t.dsn
          ? (this._dsn = (function (t) {
              var e =
                "string" == typeof t
                  ? (function (t) {
                      var e,
                        n = el.exec(t);
                      if (!n) {
                        M(function () {
                          console.error("Invalid Sentry Dsn: ".concat(t));
                        });
                        return;
                      }
                      var r =
                          (function (t) {
                            if (Array.isArray(t)) return t;
                          })((e = n.slice(1))) ||
                          (function (t, e) {
                            var n,
                              r,
                              o =
                                null == t
                                  ? null
                                  : ("undefined" != typeof Symbol &&
                                      t[Symbol.iterator]) ||
                                    t["@@iterator"];
                            if (null != o) {
                              var a = [],
                                i = !0,
                                c = !1;
                              try {
                                for (
                                  o = o.call(t);
                                  !(i = (n = o.next()).done) &&
                                  (a.push(n.value), a.length !== e);
                                  i = !0
                                );
                              } catch (t) {
                                (c = !0), (r = t);
                              } finally {
                                try {
                                  i || null == o.return || o.return();
                                } finally {
                                  if (c) throw r;
                                }
                              }
                              return a;
                            }
                          })(e, 6) ||
                          (function (t, e) {
                            if (t) {
                              if ("string" == typeof t) return eu(t, 6);
                              var n = Object.prototype.toString
                                .call(t)
                                .slice(8, -1);
                              if (
                                ("Object" === n &&
                                  t.constructor &&
                                  (n = t.constructor.name),
                                "Map" === n || "Set" === n)
                              )
                                return Array.from(n);
                              if (
                                "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  n,
                                )
                              )
                                return eu(t, e);
                            }
                          })(e, 6) ||
                          (function () {
                            throw TypeError(
                              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                            );
                          })(),
                        o = r[0],
                        a = r[1],
                        i = r[2],
                        c = r[3],
                        s = r[4],
                        u = r[5],
                        l = "",
                        f = void 0 === u ? "" : u,
                        p = f.split("/");
                      if (
                        (p.length > 1 &&
                          ((l = p.slice(0, -1).join("/")), (f = p.pop())),
                        f)
                      ) {
                        var d = f.match(/^\d+/);
                        d && (f = d[0]);
                      }
                      return ep({
                        host: void 0 === c ? "" : c,
                        pass: void 0 === i ? "" : i,
                        path: l,
                        projectId: f,
                        port: void 0 === s ? "" : s,
                        protocol: o,
                        publicKey: a,
                      });
                    })(t)
                  : ep(t);
              if (
                e &&
                (function (t) {
                  if (!I) return !0;
                  var e = t.port,
                    n = t.projectId,
                    r = t.protocol;
                  return (
                    !["protocol", "publicKey", "host", "projectId"].find(
                      function (e) {
                        return (
                          !t[e] &&
                          (N.error(
                            "Invalid Sentry Dsn: ".concat(e, " missing"),
                          ),
                          !0)
                        );
                      },
                    ) &&
                    (n.match(/^\d+$/)
                      ? "http" !== r && "https" !== r
                        ? (N.error(
                            "Invalid Sentry Dsn: Invalid protocol ".concat(r),
                          ),
                          !1)
                        : !(e && isNaN(parseInt(e, 10))) ||
                          (N.error(
                            "Invalid Sentry Dsn: Invalid port ".concat(e),
                          ),
                          !1)
                      : (N.error(
                          "Invalid Sentry Dsn: Invalid projectId ".concat(n),
                        ),
                        !1))
                  );
                })(e)
              )
                return e;
            })(t.dsn))
          : E && N.warn("No DSN provided, client will not send events."),
        this._dsn)
      ) {
        var n,
          r,
          o,
          a,
          i,
          c,
          s =
            ((n = this._dsn),
            (r = t.tunnel),
            (o = t._metadata ? t._metadata.sdk : void 0),
            r ||
              ""
                .concat(
                  ""
                    .concat(
                      ((a = n.protocol ? "".concat(n.protocol, ":") : ""),
                      (i = n.port ? ":".concat(n.port) : ""),
                      ""
                        .concat(a, "//")
                        .concat(n.host)
                        .concat(i)
                        .concat(n.path ? "/".concat(n.path) : "", "/api/")),
                    )
                    .concat(n.projectId, "/envelope/"),
                  "?",
                )
                .concat(
                  ((c = { sentry_version: "7" }),
                  n.publicKey && (c.sentry_key = n.publicKey),
                  o &&
                    (c.sentry_client = ""
                      .concat(o.name, "/")
                      .concat(o.version)),
                  new URLSearchParams(c).toString()),
                ));
        this._transport = t.transport(
          nx(
            nT(
              {
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
              },
              t.transportOptions,
            ),
            { url: s },
          ),
        );
      }
    }
    return (
      (t = [
        {
          key: "captureException",
          value: function (t, e, n) {
            var r = this,
              o = tg();
            if (tw(t)) return E && N.log(nC), o;
            var a = nT({ event_id: o }, e);
            return (
              this._process(
                this.eventFromException(t, a).then(function (t) {
                  return r._captureEvent(t, a, n);
                }),
              ),
              a.event_id
            );
          },
        },
        {
          key: "captureMessage",
          value: function (t, e, n, r) {
            var o = this,
              a = nT({ event_id: tg() }, n),
              i = X(t) ? t : String(t),
              c = V(t)
                ? this.eventFromMessage(i, e, a)
                : this.eventFromException(t, a);
            return (
              this._process(
                c.then(function (t) {
                  return o._captureEvent(t, a, r);
                }),
              ),
              a.event_id
            );
          },
        },
        {
          key: "captureEvent",
          value: function (t, e, n) {
            var r = tg();
            if (
              (null == e ? void 0 : e.originalException) &&
              tw(e.originalException)
            )
              return E && N.log(nC), r;
            var o = nT({ event_id: r }, e),
              a = t.sdkProcessingMetadata || {},
              i = a.capturedSpanScope,
              c = a.capturedSpanIsolationScope;
            return (
              this._process(this._captureEvent(t, o, i || n, c)), o.event_id
            );
          },
        },
        {
          key: "captureSession",
          value: function (t) {
            this.sendSession(t), tM(t, { init: !1 });
          },
        },
        {
          key: "getDsn",
          value: function () {
            return this._dsn;
          },
        },
        {
          key: "getOptions",
          value: function () {
            return this._options;
          },
        },
        {
          key: "getSdkMetadata",
          value: function () {
            return this._options._metadata;
          },
        },
        {
          key: "getTransport",
          value: function () {
            return this._transport;
          },
        },
        {
          key: "flush",
          value: function (t) {
            var e = this._transport;
            return e
              ? (this.emit("flush"),
                this._isClientDoneProcessing(t).then(function (n) {
                  return e.flush(t).then(function (t) {
                    return n && t;
                  });
                }))
              : nd(!0);
          },
        },
        {
          key: "close",
          value: function (t) {
            var e = this;
            return this.flush(t).then(function (t) {
              return (e.getOptions().enabled = !1), e.emit("close"), t;
            });
          },
        },
        {
          key: "getEventProcessors",
          value: function () {
            return this._eventProcessors;
          },
        },
        {
          key: "addEventProcessor",
          value: function (t) {
            this._eventProcessors.push(t);
          },
        },
        {
          key: "init",
          value: function () {
            (this._isEnabled() ||
              this._options.integrations.some(function (t) {
                return t.name.startsWith("Spotlight");
              })) &&
              this._setupIntegrations();
          },
        },
        {
          key: "getIntegrationByName",
          value: function (t) {
            return this._integrations[t];
          },
        },
        {
          key: "addIntegration",
          value: function (t) {
            var e = this._integrations[t.name];
            H(this, t, this._integrations), e || F(this, [t]);
          },
        },
        {
          key: "sendEvent",
          value: function (t) {
            var e = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            this.emit("beforeSendEvent", t, n);
            var r =
                ((c = this._dsn),
                (s = this._options._metadata),
                (u = this._options.tunnel),
                (l = ew(s)),
                (f = t.type && "replay_event" !== t.type ? t.type : "event"),
                (p = null == s ? void 0 : s.sdk) &&
                  ((t.sdk = t.sdk || {}),
                  (t.sdk.name = t.sdk.name || p.name),
                  (t.sdk.version = t.sdk.version || p.version),
                  (t.sdk.integrations = np(t.sdk.integrations || []).concat(
                    np(p.integrations || []),
                  )),
                  (t.sdk.packages = np(t.sdk.packages || []).concat(
                    np(p.packages || []),
                  ))),
                (v =
                  null === (d = t.sdkProcessingMetadata) || void 0 === d
                    ? void 0
                    : d.dynamicSamplingContext),
                (y = (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                      r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                          return Object.getOwnPropertyDescriptor(n, t)
                            .enumerable;
                        }),
                      )),
                      r.forEach(function (e) {
                        var r;
                        (r = n[e]),
                          e in t
                            ? Object.defineProperty(t, e, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (t[e] = r);
                      });
                  }
                  return t;
                })(
                  { event_id: t.event_id, sent_at: new Date().toISOString() },
                  l && { sdk: l },
                  !!u && c && { dsn: ef(c) },
                  v && { trace: v },
                )),
                delete t.sdkProcessingMetadata,
                eb(y, [[{ type: f }, t]])),
              o = !0,
              a = !1,
              i = void 0;
            try {
              for (
                var c,
                  s,
                  u,
                  l,
                  f,
                  p,
                  d,
                  v,
                  y,
                  m,
                  h = (n.attachments || [])[Symbol.iterator]();
                !(o = (m = h.next()).done);
                o = !0
              ) {
                var g = m.value;
                r = (function (t, e) {
                  var n,
                    r = eh(t, 2);
                  return [
                    r[0],
                    (
                      (function (t) {
                        if (Array.isArray(t)) return em(t);
                      })((n = r[1])) ||
                      (function (t) {
                        if (
                          ("undefined" != typeof Symbol &&
                            null != t[Symbol.iterator]) ||
                          null != t["@@iterator"]
                        )
                          return Array.from(t);
                      })(n) ||
                      eg(n) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                        );
                      })()
                    ).concat([e]),
                  ];
                })(
                  r,
                  (function (t) {
                    var e = "string" == typeof t.data ? eO(t.data) : t.data;
                    return [
                      {
                        type: "attachment",
                        length: e.length,
                        filename: t.filename,
                        content_type: t.contentType,
                        attachment_type: t.attachmentType,
                      },
                      e,
                    ];
                  })(g),
                );
              }
            } catch (t) {
              (a = !0), (i = t);
            } finally {
              try {
                o || null == h.return || h.return();
              } finally {
                if (a) throw i;
              }
            }
            var b = this.sendEnvelope(r);
            b &&
              b.then(function (n) {
                return e.emit("afterSendEvent", t, n);
              }, null);
          },
        },
        {
          key: "sendSession",
          value: function (t) {
            var e,
              n,
              r,
              o,
              a = this._options,
              i = a.release,
              c = a.environment,
              s = void 0 === c ? eI : c;
            if ("aggregates" in t) {
              var u = t.attrs || {};
              if (!u.release && !i) {
                E && N.warn(nR);
                return;
              }
              (u.release = u.release || i),
                (u.environment = u.environment || s),
                (t.attrs = u);
            } else {
              if (!t.release && !i) {
                E && N.warn(nR);
                return;
              }
              (t.release = t.release || i),
                (t.environment = t.environment || s);
            }
            this.emit("beforeSendSession", t);
            var l =
              ((e = this._dsn),
              (n = this._options._metadata),
              (r = this._options.tunnel),
              (o = ew(n)),
              eb(
                nf(
                  { sent_at: new Date().toISOString() },
                  o && { sdk: o },
                  !!r && e && { dsn: ef(e) },
                ),
                [
                  "aggregates" in t
                    ? [{ type: "sessions" }, t]
                    : [{ type: "session" }, t.toJSON()],
                ],
              ));
            this.sendEnvelope(l);
          },
        },
        {
          key: "recordDroppedEvent",
          value: function (t, e) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
            if (this._options.sendClientReports) {
              var r = "".concat(t, ":").concat(e);
              E &&
                N.log(
                  'Recording outcome: "'
                    .concat(r, '"')
                    .concat(n > 1 ? " (".concat(n, " times)") : ""),
                ),
                (this._outcomes[r] = (this._outcomes[r] || 0) + n);
            }
          },
        },
        {
          key: "on",
          value: function (t, e) {
            var n = (this._hooks[t] = this._hooks[t] || []);
            return (
              n.push(e),
              function () {
                var t = n.indexOf(e);
                t > -1 && n.splice(t, 1);
              }
            );
          },
        },
        {
          key: "emit",
          value: function (t) {
            for (
              var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            var o = this._hooks[t];
            o &&
              o.forEach(function (t) {
                return t.apply(
                  void 0,
                  (function (t) {
                    if (Array.isArray(t)) return nk(t);
                  })(n) ||
                    (function (t) {
                      if (
                        ("undefined" != typeof Symbol &&
                          null != t[Symbol.iterator]) ||
                        null != t["@@iterator"]
                      )
                        return Array.from(t);
                    })(n) ||
                    nD(n) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })(),
                );
              });
          },
        },
        {
          key: "sendEnvelope",
          value: function (t) {
            return (this.emit("beforeEnvelope", t),
            this._isEnabled() && this._transport)
              ? this._transport.send(t).then(null, function (t) {
                  return E && N.error("Error while sending envelope:", t), t;
                })
              : (E && N.error("Transport disabled"), nd({}));
          },
        },
        {
          key: "_setupIntegrations",
          value: function () {
            var t,
              e,
              n = this._options.integrations;
            (this._integrations =
              ((t = this),
              (e = {}),
              n.forEach(function (n) {
                n && H(t, n, e);
              }),
              e)),
              F(this, n);
          },
        },
        {
          key: "_updateSessionFromEvent",
          value: function (t, e) {
            var n = "fatal" === e.level,
              r = !1,
              o =
                null === (s = e.exception) || void 0 === s ? void 0 : s.values;
            if (o) {
              r = !0;
              var a = !0,
                i = !1,
                c = void 0;
              try {
                for (
                  var s, u, l = o[Symbol.iterator]();
                  !(a = (u = l.next()).done);
                  a = !0
                ) {
                  var f = u.value.mechanism;
                  if ((null == f ? void 0 : f.handled) === !1) {
                    n = !0;
                    break;
                  }
                }
              } catch (t) {
                (i = !0), (c = t);
              } finally {
                try {
                  a || null == l.return || l.return();
                } finally {
                  if (i) throw c;
                }
              }
            }
            var p = "ok" === t.status;
            ((p && 0 === t.errors) || (p && n)) &&
              (tM(
                t,
                nx(nT({}, n && { status: "crashed" }), {
                  errors: t.errors || Number(r || n),
                }),
              ),
              this.captureSession(t));
          },
        },
        {
          key: "_isClientDoneProcessing",
          value: function (t) {
            var e = this;
            return new ny(function (n) {
              var r = 0,
                o = setInterval(function () {
                  0 == e._numProcessing
                    ? (clearInterval(o), n(!0))
                    : ((r += 1), t && r >= t && (clearInterval(o), n(!1)));
                }, 1);
            });
          },
        },
        {
          key: "_isEnabled",
          value: function () {
            return (
              !1 !== this.getOptions().enabled && void 0 !== this._transport
            );
          },
        },
        {
          key: "_prepareEvent",
          value: function (t, e, n, r) {
            var o,
              s,
              u,
              l,
              f,
              p,
              d,
              v,
              y,
              m,
              h,
              g,
              b,
              _,
              O,
              S,
              w,
              j,
              k,
              T,
              x,
              I,
              D,
              C,
              R,
              M,
              L,
              U,
              q,
              F,
              H,
              B,
              $,
              z,
              W,
              G,
              J,
              Y,
              X,
              V,
              K,
              Z,
              tt,
              te,
              tn = this,
              tr = this.getOptions(),
              to = Object.keys(this._integrations);
            return (
              !e.integrations &&
                (null == to ? void 0 : to.length) &&
                (e.integrations = to),
              this.emit("preprocessEvent", t, e),
              t.type || r.setLastEventId(t.event_id || e.event_id),
              ((F = void 0 === (q = tr.normalizeDepth) ? 3 : q),
              (B = void 0 === (H = tr.normalizeMaxBreadth) ? 1e3 : H),
              ($ = nS({}, t)),
              (z = z =
                {
                  event_id: t.event_id || e.event_id || tg(),
                  timestamp: t.timestamp || tD(),
                }),
              Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    $,
                    Object.getOwnPropertyDescriptors(z),
                  )
                : (function (t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                    }
                    return n;
                  })(Object(z)).forEach(function (t) {
                    Object.defineProperty(
                      $,
                      t,
                      Object.getOwnPropertyDescriptor(z, t),
                    );
                  }),
              (W = $),
              (G =
                e.integrations ||
                tr.integrations.map(function (t) {
                  return t.name;
                })),
              (o = W),
              (u = (s = tr).environment),
              (l = s.release),
              (f = s.dist),
              (p = s.maxValueLength),
              (o.environment = o.environment || u || eI),
              !o.release && l && (o.release = l),
              !o.dist && f && (o.dist = f),
              (null == (d = o.request) ? void 0 : d.url) &&
                (d.url = ti(d.url, void 0 === p ? 250 : p)),
              (v = W),
              (y = G).length > 0 &&
                ((v.sdk = v.sdk || {}),
                (v.sdk.integrations = nw(v.sdk.integrations || []).concat(
                  nw(y),
                ))),
              this && this.emit("applyFrameMetadata", t),
              void 0 === t.type &&
                ((m = W),
                (b = (function (t) {
                  var e = P._sentryDebugIds;
                  if (!e) return {};
                  var n = Object.keys(e);
                  return c && n.length === i
                    ? c
                    : ((i = n.length),
                      (c = n.reduce(function (n, r) {
                        a || (a = {});
                        var o = a[r];
                        if (o) n[o[0]] = o[1];
                        else
                          for (var i = t(r), c = i.length - 1; c >= 0; c--) {
                            var s = i[c],
                              u = null == s ? void 0 : s.filename,
                              l = e[r];
                            if (u && l) {
                              (n[u] = l), (a[r] = [u, l]);
                              break;
                            }
                          }
                        return n;
                      }, {})));
                })(tr.stackParser)),
                null === (g = m.exception) ||
                  void 0 === g ||
                  null === (h = g.values) ||
                  void 0 === h ||
                  h.forEach(function (t) {
                    var e, n;
                    null === (n = t.stacktrace) ||
                      void 0 === n ||
                      null === (e = n.frames) ||
                      void 0 === e ||
                      e.forEach(function (t) {
                        t.filename && (t.debug_id = b[t.filename]);
                      });
                  })),
              (J = (function (t, e) {
                if (!e) return t;
                var n = t ? t.clone() : new tW();
                return n.update(e), n;
              })(n, e.captureContext)),
              e.mechanism && tS(W, e.mechanism),
              (Y = this ? this.getEventProcessors() : []),
              (X = A("globalScope", function () {
                return new tW();
              }).getScopeData()),
              r && nb(X, r.getScopeData()),
              J && nb(X, J.getScopeData()),
              (V = nw(e.attachments || []).concat(nw(X.attachments))).length &&
                (e.attachments = V),
              (K = X.fingerprint),
              (Z = X.span),
              (tt = X.breadcrumbs),
              (te = X.sdkProcessingMetadata),
              (_ = W),
              (S = (O = X).extra),
              (w = O.tags),
              (j = O.user),
              (k = O.contexts),
              (T = O.level),
              (x = O.transactionName),
              Object.keys(S).length && (_.extra = nh({}, S, _.extra)),
              Object.keys(w).length && (_.tags = nh({}, w, _.tags)),
              Object.keys(j).length && (_.user = nh({}, j, _.user)),
              Object.keys(k).length && (_.contexts = nh({}, k, _.contexts)),
              T && (_.level = T),
              x && "transaction" !== _.type && (_.transaction = x),
              Z &&
                (function (t, e) {
                  (t.contexts = nh(
                    {
                      trace:
                        ((r = (n = e.spanContext()).spanId),
                        (o = n.traceId),
                        (i = (a = n.isRemote) ? r : e6(e).parent_span_id),
                        (c = eZ(e).scope),
                        {
                          parent_span_id: i,
                          span_id: a
                            ? (null == c
                                ? void 0
                                : c.getPropagationContext()
                                    .propagationSpanId) || tN()
                            : r,
                          trace_id: o,
                        }),
                    },
                    t.contexts,
                  )),
                    (t.sdkProcessingMetadata = nh(
                      { dynamicSamplingContext: nu(e) },
                      t.sdkProcessingMetadata,
                    ));
                  var n,
                    r,
                    o,
                    a,
                    i,
                    c,
                    s = e6(nr(e)).description;
                  s &&
                    !t.transaction &&
                    "transaction" === t.type &&
                    (t.transaction = s);
                })(W, Z),
              (I = W),
              (D = K),
              (I.fingerprint = I.fingerprint
                ? Array.isArray(I.fingerprint)
                  ? I.fingerprint
                  : [I.fingerprint]
                : []),
              D && (I.fingerprint = I.fingerprint.concat(D)),
              I.fingerprint.length || delete I.fingerprint,
              (C = W),
              (R = tt),
              (M = ng(C.breadcrumbs || []).concat(ng(R))),
              (C.breadcrumbs = M.length ? M : void 0),
              (L = W),
              (U = te),
              (L.sdkProcessingMetadata = nh({}, L.sdkProcessingMetadata, U)),
              (function t(e, n, r) {
                var o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0;
                return new ny(function (a, i) {
                  var c = e[o];
                  if (null === n || "function" != typeof c) a(n);
                  else {
                    var s = c(
                      (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                          var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(
                                function (t) {
                                  return Object.getOwnPropertyDescriptor(n, t)
                                    .enumerable;
                                },
                              ),
                            )),
                            r.forEach(function (e) {
                              var r;
                              (r = n[e]),
                                e in t
                                  ? Object.defineProperty(t, e, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                    })
                                  : (t[e] = r);
                            });
                        }
                        return t;
                      })({}, n),
                      r,
                    );
                    E &&
                      c.id &&
                      null === s &&
                      N.log(
                        'Event processor "'.concat(c.id, '" dropped event'),
                      ),
                      Q(s)
                        ? s
                            .then(function (n) {
                              return t(e, n, r, o + 1).then(a);
                            })
                            .then(null, i)
                        : t(e, s, r, o + 1)
                            .then(a)
                            .then(null, i);
                  }
                });
              })(nw(Y).concat(nw(X.eventProcessors)), W, e).then(function (t) {
                return (t &&
                  (function (t) {
                    var e,
                      n,
                      r = {};
                    if (
                      (null === (n = t.exception) ||
                        void 0 === n ||
                        null === (e = n.values) ||
                        void 0 === e ||
                        e.forEach(function (t) {
                          var e, n;
                          null === (n = t.stacktrace) ||
                            void 0 === n ||
                            null === (e = n.frames) ||
                            void 0 === e ||
                            e.forEach(function (t) {
                              t.debug_id &&
                                (t.abs_path
                                  ? (r[t.abs_path] = t.debug_id)
                                  : t.filename && (r[t.filename] = t.debug_id),
                                delete t.debug_id);
                            });
                        }),
                      0 !== Object.keys(r).length)
                    ) {
                      (t.debug_meta = t.debug_meta || {}),
                        (t.debug_meta.images = t.debug_meta.images || []);
                      var o = t.debug_meta.images;
                      Object.entries(r).forEach(function (t) {
                        var e =
                            (function (t) {
                              if (Array.isArray(t)) return t;
                            })(t) ||
                            (function (t, e) {
                              var n,
                                r,
                                o =
                                  null == t
                                    ? null
                                    : ("undefined" != typeof Symbol &&
                                        t[Symbol.iterator]) ||
                                      t["@@iterator"];
                              if (null != o) {
                                var a = [],
                                  i = !0,
                                  c = !1;
                                try {
                                  for (
                                    o = o.call(t);
                                    !(i = (n = o.next()).done) &&
                                    (a.push(n.value), a.length !== e);
                                    i = !0
                                  );
                                } catch (t) {
                                  (c = !0), (r = t);
                                } finally {
                                  try {
                                    i || null == o.return || o.return();
                                  } finally {
                                    if (c) throw r;
                                  }
                                }
                                return a;
                              }
                            })(t, 2) ||
                            nj(t, 2) ||
                            (function () {
                              throw TypeError(
                                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                              );
                            })(),
                          n = e[0],
                          r = e[1];
                        o.push({
                          type: "sourcemap",
                          code_file: n,
                          debug_id: r,
                        });
                      });
                    }
                  })(t),
                "number" == typeof F && F > 0)
                  ? (function (t, e, n) {
                      if (!t) return null;
                      var r,
                        o,
                        a = nS(
                          {},
                          t,
                          t.breadcrumbs && {
                            breadcrumbs: t.breadcrumbs.map(function (t) {
                              return nS(
                                {},
                                t,
                                t.data && { data: ey(t.data, e, n) },
                              );
                            }),
                          },
                          t.user && { user: ey(t.user, e, n) },
                          t.contexts && { contexts: ey(t.contexts, e, n) },
                          t.extra && { extra: ey(t.extra, e, n) },
                        );
                      return (
                        (null === (r = t.contexts) || void 0 === r
                          ? void 0
                          : r.trace) &&
                          a.contexts &&
                          ((a.contexts.trace = t.contexts.trace),
                          t.contexts.trace.data &&
                            (a.contexts.trace.data = ey(
                              t.contexts.trace.data,
                              e,
                              n,
                            ))),
                        t.spans &&
                          (a.spans = t.spans.map(function (t) {
                            return nS(
                              {},
                              t,
                              t.data && { data: ey(t.data, e, n) },
                            );
                          })),
                        (null === (o = t.contexts) || void 0 === o
                          ? void 0
                          : o.flags) &&
                          a.contexts &&
                          (a.contexts.flags = ey(t.contexts.flags, 3, n)),
                        a
                      );
                    })(t, F, B)
                  : t;
              })).then(function (t) {
                if (null === t) return t;
                tn.emit("postprocessEvent", t, e),
                  (t.contexts = nT(
                    {
                      trace:
                        ((o = (r = n.getPropagationContext()).traceId),
                        (a = r.parentSpanId),
                        (i = {
                          trace_id: o,
                          span_id: r.propagationSpanId || tN(),
                        }),
                        a && (i.parent_span_id = a),
                        i),
                    },
                    t.contexts,
                  ));
                var r,
                  o,
                  a,
                  i,
                  c = ns(tn, n);
                return (
                  (t.sdkProcessingMetadata = nT(
                    { dynamicSamplingContext: c },
                    t.sdkProcessingMetadata,
                  )),
                  t
                );
              })
            );
          },
        },
        {
          key: "_captureEvent",
          value: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : tQ(),
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : t0();
            return (
              E &&
                nB(t) &&
                N.log(
                  "Captured error event `".concat(tj(t)[0] || "<unknown>", "`"),
                ),
              this._processEvent(t, e, n, r).then(
                function (t) {
                  return t.event_id;
                },
                function (t) {
                  E &&
                    (nF(t)
                      ? N.log(t.message)
                      : nq(t)
                        ? N.warn(t.message)
                        : N.warn(t));
                },
              )
            );
          },
        },
        {
          key: "_processEvent",
          value: function (t, e, n, r) {
            var o = this,
              a = this.getOptions(),
              i = a.sampleRate,
              c = n$(t),
              s = nB(t),
              u = t.type || "error",
              l = "before send for type `".concat(u, "`"),
              f = void 0 === i ? void 0 : eQ(i);
            if (s && "number" == typeof f && Math.random() > f)
              return (
                this.recordDroppedEvent("sample_rate", "error"),
                nv(
                  nU(
                    "Discarding event because it's not included in the random sample (sampling rate = ".concat(
                      i,
                      ")",
                    ),
                  ),
                )
              );
            var p = "replay_event" === u ? "replay" : u;
            return this._prepareEvent(t, e, n, r)
              .then(function (t) {
                if (null === t)
                  throw (
                    (o.recordDroppedEvent("event_processor", p),
                    nU(
                      "An event processor returned `null`, will not send event.",
                    ))
                  );
                return e.data && !0 === e.data.__sentry__
                  ? t
                  : (function (t, e) {
                      var n = "".concat(
                        e,
                        " must return `null` or a valid event.",
                      );
                      if (Q(t))
                        return t.then(
                          function (t) {
                            if (!K(t) && null !== t) throw nL(n);
                            return t;
                          },
                          function (t) {
                            throw nL("".concat(e, " rejected with ").concat(t));
                          },
                        );
                      if (!K(t) && null !== t) throw nL(n);
                      return t;
                    })(
                      (function (t, e, n, r) {
                        var o = e.beforeSend,
                          a = e.beforeSendTransaction,
                          i = e.beforeSendSpan,
                          c = n;
                        if (nB(c) && o) return o(c, r);
                        if (n$(c)) {
                          if (i) {
                            var s = i(
                              ((g = (h =
                                null !==
                                  (y =
                                    null === (v = (d = c).contexts) ||
                                    void 0 === v
                                      ? void 0
                                      : v.trace) && void 0 !== y
                                  ? y
                                  : {}).trace_id),
                              (b = h.parent_span_id),
                              (_ = h.span_id),
                              (O = h.status),
                              (S = h.origin),
                              (w = h.data),
                              (j = h.op),
                              {
                                data: null != w ? w : {},
                                description: d.transaction,
                                op: j,
                                parent_span_id: b,
                                span_id: null != _ ? _ : "",
                                start_timestamp:
                                  null !== (m = d.start_timestamp) &&
                                  void 0 !== m
                                    ? m
                                    : 0,
                                status: O,
                                timestamp: d.timestamp,
                                trace_id: null != g ? g : "",
                                origin: S,
                                profile_id: null == w ? void 0 : w[eF],
                                exclusive_time: null == w ? void 0 : w[eH],
                                measurements: d.measurements,
                                is_segment: !0,
                              }),
                            );
                            if (
                              (s
                                ? (c = tL(n, {
                                    type: "transaction",
                                    timestamp: s.timestamp,
                                    start_timestamp: s.start_timestamp,
                                    transaction: s.description,
                                    contexts: {
                                      trace: {
                                        trace_id: s.trace_id,
                                        span_id: s.span_id,
                                        parent_span_id: s.parent_span_id,
                                        op: s.op,
                                        status: s.status,
                                        origin: s.origin,
                                        data: (function (t) {
                                          for (
                                            var e = 1;
                                            e < arguments.length;
                                            e++
                                          ) {
                                            var n =
                                                null != arguments[e]
                                                  ? arguments[e]
                                                  : {},
                                              r = Object.keys(n);
                                            "function" ==
                                              typeof Object.getOwnPropertySymbols &&
                                              (r = r.concat(
                                                Object.getOwnPropertySymbols(
                                                  n,
                                                ).filter(function (t) {
                                                  return Object.getOwnPropertyDescriptor(
                                                    n,
                                                    t,
                                                  ).enumerable;
                                                }),
                                              )),
                                              r.forEach(function (e) {
                                                nE(t, e, n[e]);
                                              });
                                          }
                                          return t;
                                        })(
                                          {},
                                          s.data,
                                          s.profile_id &&
                                            nE({}, eF, s.profile_id),
                                          s.exclusive_time &&
                                            nE({}, eH, s.exclusive_time),
                                        ),
                                      },
                                    },
                                    measurements: s.measurements,
                                  }))
                                : na(),
                              c.spans)
                            ) {
                              var u = [],
                                l = !0,
                                f = !1,
                                p = void 0;
                              try {
                                for (
                                  var d,
                                    v,
                                    y,
                                    m,
                                    h,
                                    g,
                                    b,
                                    _,
                                    O,
                                    S,
                                    w,
                                    j,
                                    E,
                                    k = c.spans[Symbol.iterator]();
                                  !(l = (E = k.next()).done);
                                  l = !0
                                ) {
                                  var P = E.value,
                                    T = i(P);
                                  T ? u.push(T) : (na(), u.push(P));
                                }
                              } catch (t) {
                                (f = !0), (p = t);
                              } finally {
                                try {
                                  l || null == k.return || k.return();
                                } finally {
                                  if (f) throw p;
                                }
                              }
                              c.spans = u;
                            }
                          }
                          if (a) {
                            if (c.spans) {
                              var x = c.spans.length;
                              c.sdkProcessingMetadata = nx(
                                nT({}, n.sdkProcessingMetadata),
                                { spanCountBeforeProcessing: x },
                              );
                            }
                            return a(c, r);
                          }
                        }
                        return c;
                      })(0, a, t, e),
                      l,
                    );
              })
              .then(function (a) {
                if (null === a) {
                  if ((o.recordDroppedEvent("before_send", p), c)) {
                    var i = 1 + (t.spans || []).length;
                    o.recordDroppedEvent("before_send", "span", i);
                  }
                  throw nU(
                    "".concat(l, " returned `null`, will not send event."),
                  );
                }
                var u = n.getSession() || r.getSession();
                if ((s && u && o._updateSessionFromEvent(u, a), c)) {
                  var f,
                    d =
                      ((null === (f = a.sdkProcessingMetadata) || void 0 === f
                        ? void 0
                        : f.spanCountBeforeProcessing) || 0) -
                      (a.spans ? a.spans.length : 0);
                  d > 0 && o.recordDroppedEvent("before_send", "span", d);
                }
                var v = a.transaction_info;
                return (
                  c &&
                    v &&
                    a.transaction !== t.transaction &&
                    (a.transaction_info = nx(nT({}, v), { source: "custom" })),
                  o.sendEvent(a, e),
                  a
                );
              })
              .then(null, function (t) {
                if (nF(t) || nq(t)) throw t;
                throw (
                  (o.captureException(t, {
                    data: { __sentry__: !0 },
                    originalException: t,
                  }),
                  nL(
                    "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ".concat(
                      t,
                    ),
                  ))
                );
              });
          },
        },
        {
          key: "_process",
          value: function (t) {
            var e = this;
            this._numProcessing++,
              t.then(
                function (t) {
                  return e._numProcessing--, t;
                },
                function (t) {
                  return e._numProcessing--, t;
                },
              );
          },
        },
        {
          key: "_clearOutcomes",
          value: function () {
            var t = this._outcomes;
            return (
              (this._outcomes = {}),
              Object.entries(t).map(function (t) {
                var e = nA(t, 2),
                  n = e[0],
                  r = e[1],
                  o = nA(n.split(":"), 2);
                return { reason: o[0], category: o[1], quantity: r };
              })
            );
          },
        },
        {
          key: "_flushOutcomes",
          value: function () {
            E && N.log("Flushing outcomes...");
            var t,
              e = this._clearOutcomes();
            if (0 === e.length) {
              E && N.log("No outcomes to send");
              return;
            }
            if (!this._dsn) {
              E && N.log("No dsn provided, will not send outcomes");
              return;
            }
            E && N.log("Sending outcomes:", e);
            var n = eb(
              (t = this._options.tunnel && ef(this._dsn)) ? { dsn: t } : {},
              [
                [
                  { type: "client_report" },
                  { timestamp: tD(), discarded_events: e },
                ],
              ],
            );
            this.sendEnvelope(n);
          },
        },
      ]),
      (function (t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      })(e.prototype, t),
      e
    );
  })();
  function nB(t) {
    return void 0 === t.type;
  }
  function n$(t) {
    return "transaction" === t.type;
  }
  function nz(t, e) {
    var n,
      r,
      o,
      a,
      i = nG(t, e),
      c = {
        type:
          !(r = null == (n = e) ? void 0 : n.name) && nY(n)
            ? n.message && Array.isArray(n.message) && 2 == n.message.length
              ? n.message[0]
              : "WebAssembly.Exception"
            : r,
        value:
          ((a = null == (o = e) ? void 0 : o.message),
          nY(o)
            ? Array.isArray(o.message) && 2 == o.message.length
              ? o.message[1]
              : "wasm exception"
            : a
              ? a.error && "string" == typeof a.error.message
                ? a.error.message
                : a
              : "No error message"),
      };
    return (
      i.length && (c.stacktrace = { frames: i }),
      void 0 === c.type &&
        "" === c.value &&
        (c.value = "Unrecoverable error caught"),
      c
    );
  }
  function nW(t, e) {
    return { exception: { values: [nz(t, e)] } };
  }
  function nG(t, e) {
    var n,
      r,
      o = e.stacktrace || e.stack || "",
      a = (n = e) && nJ.test(n.message) ? 1 : 0,
      i = "number" == typeof (r = e).framesToPop ? r.framesToPop : 0;
    try {
      return t(o, a, i);
    } catch (t) {}
    return [];
  }
  var nJ = /Minified React error #\d+;/i;
  function nY(t) {
    return (
      "undefined" != typeof WebAssembly &&
      void 0 !== WebAssembly.Exception &&
      t instanceof WebAssembly.Exception
    );
  }
  function nX(t, e, n, r, o) {
    var a;
    if (G(e) && e.error) return nW(t, e.error);
    if (J(e) || W(e, "DOMException")) {
      if ("stack" in e) a = nW(t, e);
      else {
        var i,
          c,
          s = e.name || (J(e) ? "DOMError" : "DOMException"),
          u = e.message ? "".concat(s, ": ").concat(e.message) : s;
        tO((a = nV(t, u, n, r)), u);
      }
      return (
        "code" in e &&
          (a.tags =
            ((i = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (r = r.concat(
                    Object.getOwnPropertySymbols(n).filter(function (t) {
                      return Object.getOwnPropertyDescriptor(n, t).enumerable;
                    }),
                  )),
                  r.forEach(function (e) {
                    var r;
                    (r = n[e]),
                      e in t
                        ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (t[e] = r);
                  });
              }
              return t;
            })({}, a.tags)),
            (c = c = { "DOMException.code": "".concat(e.code) }),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c))
              : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    n.push.apply(n, r);
                  }
                  return n;
                })(Object(c)).forEach(function (t) {
                  Object.defineProperty(
                    i,
                    t,
                    Object.getOwnPropertyDescriptor(c, t),
                  );
                }),
            i)),
        a
      );
    }
    return z(e)
      ? nW(t, e)
      : (K(e) || Z(e)
          ? tS(
              (a = (function (t, e, n, r) {
                var o = t2(),
                  a = null == o ? void 0 : o.getOptions().normalizeDepth,
                  i = (function (t) {
                    for (var e in t)
                      if (Object.prototype.hasOwnProperty.call(t, e)) {
                        var n = t[e];
                        if (n instanceof Error) return n;
                      }
                  })(e),
                  c = {
                    __serialized__: (function t(e) {
                      var n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 3,
                        r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 102400,
                        o = ey(e, n);
                      return ~-encodeURI(JSON.stringify(o)).split(/%..|./)
                        .length > r
                        ? t(e, n - 1, r)
                        : o;
                    })(e, a),
                  };
                if (i) return { exception: { values: [nz(t, i)] }, extra: c };
                var s = {
                  exception: {
                    values: [
                      {
                        type: Z(e)
                          ? e.constructor.name
                          : r
                            ? "UnhandledRejection"
                            : "Error",
                        value: (function (t, e) {
                          var n = e.isUnhandledRejection,
                            r = (function (t) {
                              var e =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : 40,
                                n = Object.keys(tv(t));
                              n.sort();
                              var r = n[0];
                              if (!r) return "[object has no keys]";
                              if (r.length >= e) return ti(r, e);
                              for (var o = n.length; o > 0; o--) {
                                var a = n.slice(0, o).join(", ");
                                if (!(a.length > e)) {
                                  if (o === n.length) return a;
                                  return ti(a, e);
                                }
                              }
                              return "";
                            })(t),
                            o = n ? "promise rejection" : "exception";
                          if (G(t))
                            return "Event `ErrorEvent` captured as "
                              .concat(o, " with message `")
                              .concat(t.message, "`");
                          if (Z(t)) {
                            var a = (function (t) {
                              try {
                                var e = Object.getPrototypeOf(t);
                                return e ? e.constructor.name : void 0;
                              } catch (t) {}
                            })(t);
                            return "Event `"
                              .concat(a, "` (type=")
                              .concat(t.type, ") captured as ")
                              .concat(o);
                          }
                          return "Object captured as "
                            .concat(o, " with keys: ")
                            .concat(r);
                        })(e, { isUnhandledRejection: r }),
                      },
                    ],
                  },
                  extra: c,
                };
                if (n) {
                  var u = nG(t, n);
                  u.length &&
                    (s.exception.values[0].stacktrace = { frames: u });
                }
                return s;
              })(t, e, n, o)),
              { synthetic: !0 },
            )
          : (tO((a = nV(t, e, n, r)), "".concat(e), void 0),
            tS(a, { synthetic: !0 })),
        a);
  }
  function nV(t, e, n, r) {
    var o = {};
    if (r && n) {
      var a = nG(t, n);
      a.length &&
        (o.exception = { values: [{ value: e, stacktrace: { frames: a } }] }),
        tS(o, { synthetic: !0 });
    }
    if (X(e)) {
      var i = e.__sentry_template_string__,
        c = e.__sentry_template_values__;
      return (o.logentry = { message: i, params: c }), o;
    }
    return (o.message = e), o;
  }
  function nK(t, e) {
    return tQ().captureEvent(t, e);
  }
  function nZ(t, e) {
    t0().setTag(t, e);
  }
  function nQ(t) {
    var e,
      n,
      r,
      o = t0(),
      a = tQ(),
      i = (P.navigator || {}).userAgent,
      c =
        ((e = (function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
              )),
              r.forEach(function (e) {
                var r;
                (r = n[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = r);
              });
          }
          return t;
        })({ user: a.getUser() || o.getUser() }, i && { userAgent: i }, t)),
        (n = tC()),
        (r = {
          sid: tg(),
          init: !0,
          timestamp: n,
          started: n,
          duration: 0,
          status: "ok",
          errors: 0,
          ignoreDuration: !1,
          toJSON: function () {
            var t;
            return (
              (t = r),
              {
                sid: "".concat(t.sid),
                init: t.init,
                started: new Date(1e3 * t.started).toISOString(),
                timestamp: new Date(1e3 * t.timestamp).toISOString(),
                status: t.status,
                errors: t.errors,
                did:
                  "number" == typeof t.did || "string" == typeof t.did
                    ? "".concat(t.did)
                    : void 0,
                duration: t.duration,
                abnormal_mechanism: t.abnormal_mechanism,
                attrs: {
                  release: t.release,
                  environment: t.environment,
                  ip_address: t.ipAddress,
                  user_agent: t.userAgent,
                },
              }
            );
          },
        }),
        e && tM(r, e),
        r),
      s = o.getSession();
    return (
      (null == s ? void 0 : s.status) === "ok" && tM(s, { status: "exited" }),
      n0(),
      o.setSession(c),
      c
    );
  }
  function n0() {
    var t,
      e = t0(),
      n = tQ().getSession() || e.getSession();
    n && ((t = {}), "ok" === n.status && (t = { status: "exited" }), tM(n, t)),
      n1(),
      e.setSession();
  }
  function n1() {
    var t = t0(),
      e = t2(),
      n = t.getSession();
    n && e && e.captureSession(n);
  }
  function n2() {
    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (t) {
      n0();
      return;
    }
    n1();
  }
  var n3 = 0;
  function n8(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if ("function" != typeof t) return t;
    try {
      var n = t.__sentry_wrapped__;
      if (n) {
        if ("function" == typeof n) return n;
        return t;
      }
      if (td(t)) return t;
    } catch (e) {
      return t;
    }
    var r = function () {
      for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      try {
        var a = r.map(function (t) {
          return n8(t, e);
        });
        return t.apply(this, a);
      } catch (t) {
        throw (
          (n3++,
          setTimeout(function () {
            n3--;
          }),
          t1(function (n) {
            n.addEventProcessor(function (t) {
              var n, o;
              return (
                e.mechanism && (tO(t, void 0, void 0), tS(t, e.mechanism)),
                (t.extra =
                  ((n = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                          Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t)
                              .enumerable;
                          }),
                        )),
                        r.forEach(function (e) {
                          var r;
                          (r = n[e]),
                            e in t
                              ? Object.defineProperty(t, e, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (t[e] = r);
                        });
                    }
                    return t;
                  })({}, t.extra)),
                  (o = o = { arguments: r }),
                  Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        n,
                        Object.getOwnPropertyDescriptors(o),
                      )
                    : (function (t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(t);
                          n.push.apply(n, r);
                        }
                        return n;
                      })(Object(o)).forEach(function (t) {
                        Object.defineProperty(
                          n,
                          t,
                          Object.getOwnPropertyDescriptor(o, t),
                        );
                      }),
                  n)),
                t
              );
            }),
              tQ().captureException(t, void 0);
          }),
          t)
        );
      }
    };
    try {
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
    } catch (t) {}
    tp(r, t), tf(t, "__sentry_wrapped__", r);
    try {
      Object.getOwnPropertyDescriptor(r, "name").configurable &&
        Object.defineProperty(r, "name", {
          get: function () {
            return t.name;
          },
        });
    } catch (t) {}
    return r;
  }
  function n4(t, e, n) {
    return (n4 =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, n) {
            var r = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = n6(t));

              );
              return t;
            })(t, e);
            if (r) {
              var o = Object.getOwnPropertyDescriptor(r, e);
              return o.get ? o.get.call(n || t) : o.value;
            }
          })(t, e, n || t);
  }
  function n6(t) {
    return (n6 = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function n5(t, e) {
    return (n5 =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function n9() {
    try {
      var t = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch (t) {}
    return (n9 = function () {
      return !!t;
    })();
  }
  var n7 = (function (t) {
      var e;
      function n(t) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw TypeError("Cannot call a class as a function");
        })(this, n);
        var e,
          r,
          o,
          a,
          i,
          c,
          s = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                  }),
                )),
                r.forEach(function (e) {
                  var r;
                  (r = n[e]),
                    e in t
                      ? Object.defineProperty(t, e, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[e] = r);
                });
            }
            return t;
          })({ parentSpanIsAlwaysRootSpan: !0 }, t);
        !(function (t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [e],
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "npm",
            o = t._metadata || {};
          o.sdk ||
            (o.sdk = {
              name: "sentry.javascript.".concat(e),
              packages: n.map(function (t) {
                return {
                  name: "".concat(r, ":@sentry/").concat(t),
                  version: k,
                };
              }),
              version: k,
            }),
            (t._metadata = o);
        })(s, "browser", ["browser"], P.SENTRY_SDK_SOURCE || "npm"),
          (a = n),
          (i = [s]),
          (a = n6(a)),
          (e = this);
        var u = (c =
            (r = n9()
              ? Reflect.construct(a, i || [], n6(this).constructor)
              : a.apply(this, i)) &&
            ("object" ==
              ((o = r) &&
              "undefined" != typeof Symbol &&
              o.constructor === Symbol
                ? "symbol"
                : typeof o) ||
              "function" == typeof r)
              ? r
              : (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(e))._options,
          l = u.sendDefaultPii,
          f = u._experiments,
          p = null == f ? void 0 : f.enableLogs;
        return (
          s.sendClientReports &&
            P.document &&
            P.document.addEventListener("visibilitychange", function () {
              "hidden" === P.document.visibilityState &&
                (c._flushOutcomes(), p && ek(c));
            }),
          p &&
            (c.on("flush", function () {
              ek(c);
            }),
            c.on("afterCaptureLog", function () {
              c._logFlushIdleTimeout && clearTimeout(c._logFlushIdleTimeout),
                (c._logFlushIdleTimeout = setTimeout(function () {
                  ek(c);
                }, 5e3));
            })),
          l && (c.on("postprocessEvent", ex), c.on("beforeSendSession", eA)),
          c
        );
      }
      return (
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && n5(t, e);
        })(n, t),
        (e = [
          {
            key: "eventFromException",
            value: function (t, e) {
              var n, r, o;
              return (
                (n = this._options.stackParser),
                (r = this._options.attachStacktrace),
                tS(
                  (o = nX(
                    n,
                    t,
                    (null == e ? void 0 : e.syntheticException) || void 0,
                    r,
                  )),
                ),
                (o.level = "error"),
                (null == e ? void 0 : e.event_id) && (o.event_id = e.event_id),
                nd(o)
              );
            },
          },
          {
            key: "eventFromMessage",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "info",
                n = arguments.length > 2 ? arguments[2] : void 0;
              return (function (t, e) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "info",
                  r = arguments.length > 3 ? arguments[3] : void 0,
                  o = arguments.length > 4 ? arguments[4] : void 0,
                  a = nV(
                    t,
                    e,
                    (null == r ? void 0 : r.syntheticException) || void 0,
                    o,
                  );
                return (
                  (a.level = n),
                  (null == r ? void 0 : r.event_id) &&
                    (a.event_id = r.event_id),
                  nd(a)
                );
              })(
                this._options.stackParser,
                t,
                e,
                n,
                this._options.attachStacktrace,
              );
            },
          },
          {
            key: "_prepareEvent",
            value: function (t, e, r, o) {
              return (
                (t.platform = t.platform || "javascript"),
                n4(n6(n.prototype), "_prepareEvent", this).call(
                  this,
                  t,
                  e,
                  r,
                  o,
                )
              );
            },
          },
        ]),
        (function (t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        })(n.prototype, e),
        n
      );
    })(nH),
    rt = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    re = {},
    rn = {};
  function rr(t, e) {
    (re[t] = re[t] || []), re[t].push(e);
  }
  function ro(t, e) {
    if (!rn[t]) {
      rn[t] = !0;
      try {
        e();
      } catch (e) {
        I && N.error("Error while instrumenting ".concat(t), e);
      }
    }
  }
  function ra(t, e) {
    var n = t && re[t];
    if (n) {
      var r = !0,
        o = !1,
        a = void 0;
      try {
        for (
          var i, c = n[Symbol.iterator]();
          !(r = (i = c.next()).done);
          r = !0
        ) {
          var s = i.value;
          try {
            s(e);
          } catch (e) {
            I &&
              N.error(
                "Error while triggering instrumentation handler.\nType: "
                  .concat(t, "\nName: ")
                  .concat(ee(s), "\nError:"),
                e,
              );
          }
        }
      } catch (t) {
        (o = !0), (a = t);
      } finally {
        try {
          r || null == c.return || c.return();
        } finally {
          if (o) throw a;
        }
      }
    }
  }
  function ri() {
    if (P.document) {
      var t = ra.bind(null, "dom"),
        e = rc(t, !0);
      P.document.addEventListener("click", e, !1),
        P.document.addEventListener("keypress", e, !1),
        ["EventTarget", "Node"].forEach(function (e) {
          var n,
            r,
            o = null === (n = P[e]) || void 0 === n ? void 0 : n.prototype;
          (null == o
            ? void 0
            : null === (r = o.hasOwnProperty) || void 0 === r
              ? void 0
              : r.call(o, "addEventListener")) &&
            (tl(o, "addEventListener", function (e) {
              return function (n, r, o) {
                if ("click" === n || "keypress" == n)
                  try {
                    var a = (this.__sentry_instrumentation_handlers__ =
                        this.__sentry_instrumentation_handlers__ || {}),
                      i = (a[n] = a[n] || { refCount: 0 });
                    if (!i.handler) {
                      var c = rc(t);
                      (i.handler = c), e.call(this, n, c, o);
                    }
                    i.refCount++;
                  } catch (t) {}
                return e.call(this, n, r, o);
              };
            }),
            tl(o, "removeEventListener", function (t) {
              return function (e, n, r) {
                if ("click" === e || "keypress" == e)
                  try {
                    var o = this.__sentry_instrumentation_handlers__ || {},
                      a = o[e];
                    a &&
                      (a.refCount--,
                      a.refCount <= 0 &&
                        (t.call(this, e, a.handler, r),
                        (a.handler = void 0),
                        delete o[e]),
                      0 === Object.keys(o).length &&
                        delete this.__sentry_instrumentation_handlers__);
                  } catch (t) {}
                return t.call(this, e, n, r);
              };
            }));
        });
    }
  }
  function rc(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return function (n) {
      if (n && !n._sentryCaptured) {
        var r = (function (t) {
          try {
            return t.target;
          } catch (t) {
            return null;
          }
        })(n);
        if (
          "keypress" !== n.type ||
          (null != r &&
            r.tagName &&
            ("INPUT" === r.tagName ||
              "TEXTAREA" === r.tagName ||
              r.isContentEditable))
        ) {
          tf(n, "_sentryCaptured", !0),
            r && !r._sentryId && tf(r, "_sentryId", tg());
          var o = "keypress" === n.type ? "input" : n.type;
          !(function (t) {
            if (t.type !== u) return !1;
            try {
              if (!t.target || t.target._sentryId !== l) return !1;
            } catch (t) {}
            return !0;
          })(n) &&
            (t({ event: n, name: o, global: e }),
            (u = n.type),
            (l = r ? r._sentryId : void 0)),
            clearTimeout(s),
            (s = P.setTimeout(function () {
              (l = void 0), (u = void 0);
            }, 1e3));
        }
      }
    };
  }
  function rs(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  var ru = "__sentry_xhr_v3__";
  function rl(t) {
    rr("xhr", t), ro("xhr", rf);
  }
  function rf() {
    if (P.XMLHttpRequest) {
      var t = XMLHttpRequest.prototype;
      (t.open = new Proxy(t.open, {
        apply: function (t, e, n) {
          var r = Error(),
            o = 1e3 * tC(),
            a = Y(n[0]) ? n[0].toUpperCase() : void 0,
            i = (function (t) {
              if (Y(t)) return t;
              try {
                return t.toString();
              } catch (t) {}
            })(n[1]);
          if (!a || !i) return t.apply(e, n);
          (e[ru] = { method: a, url: i, request_headers: {} }),
            "POST" === a &&
              i.match(/sentry_key/) &&
              (e.__sentry_own_request__ = !0);
          var c = function () {
            var t = e[ru];
            if (t && 4 === e.readyState) {
              try {
                t.status_code = e.status;
              } catch (t) {}
              ra("xhr", {
                endTimestamp: 1e3 * tC(),
                startTimestamp: o,
                xhr: e,
                virtualError: r,
              });
            }
          };
          return (
            "onreadystatechange" in e &&
            "function" == typeof e.onreadystatechange
              ? (e.onreadystatechange = new Proxy(e.onreadystatechange, {
                  apply: function (t, e, n) {
                    return c(), t.apply(e, n);
                  },
                }))
              : e.addEventListener("readystatechange", c),
            (e.setRequestHeader = new Proxy(e.setRequestHeader, {
              apply: function (t, e, n) {
                var r =
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })(n) ||
                    (function (t, e) {
                      var n,
                        r,
                        o =
                          null == t
                            ? null
                            : ("undefined" != typeof Symbol &&
                                t[Symbol.iterator]) ||
                              t["@@iterator"];
                      if (null != o) {
                        var a = [],
                          i = !0,
                          c = !1;
                        try {
                          for (
                            o = o.call(t);
                            !(i = (n = o.next()).done) &&
                            (a.push(n.value), a.length !== e);
                            i = !0
                          );
                        } catch (t) {
                          (c = !0), (r = t);
                        } finally {
                          try {
                            i || null == o.return || o.return();
                          } finally {
                            if (c) throw r;
                          }
                        }
                        return a;
                      }
                    })(n, 2) ||
                    (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return rs(t, 2);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if (
                          ("Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n)
                        )
                          return Array.from(n);
                        if (
                          "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                          return rs(t, e);
                      }
                    })(n, 2) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })(),
                  o = r[0],
                  a = r[1],
                  i = e[ru];
                return (
                  i && Y(o) && Y(a) && (i.request_headers[o.toLowerCase()] = a),
                  t.apply(e, n)
                );
              },
            })),
            t.apply(e, n)
          );
        },
      })),
        (t.send = new Proxy(t.send, {
          apply: function (t, e, n) {
            var r = e[ru];
            return (
              r &&
                (void 0 !== n[0] && (r.body = n[0]),
                ra("xhr", { startTimestamp: 1e3 * tC(), xhr: e })),
              t.apply(e, n)
            );
          },
        }));
    }
  }
  function rp(t) {
    var e = "history";
    rr(e, t), ro(e, rd);
  }
  function rd() {
    P.addEventListener("popstate", function () {
      var t = P.location.href,
        e = f;
      (f = t), e !== t && ra("history", { from: e, to: t });
    }),
      "history" in P &&
        P.history &&
        (tl(P.history, "pushState", t), tl(P.history, "replaceState", t));
    function t(t) {
      return function () {
        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var o = n.length > 2 ? n[2] : void 0;
        if (o) {
          var a = f,
            i = String(o);
          if (((f = i), a === i)) return t.apply(this, n);
          ra("history", { from: a, to: i });
        }
        return t.apply(this, n);
      };
    }
  }
  function rv() {
    "console" in P &&
      C.forEach(function (t) {
        t in P.console &&
          tl(P.console, t, function (e) {
            return (
              (R[t] = e),
              function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
                ra("console", { args: n, level: t });
                var o = R[t];
                null == o || o.apply(P.console, n);
              }
            );
          });
      });
  }
  function ry(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function rm(t, e, n, r, o, a, i) {
    try {
      var c = t[a](i),
        s = c.value;
    } catch (t) {
      n(t);
      return;
    }
    c.done ? e(s) : Promise.resolve(s).then(r, o);
  }
  function rh(t) {
    return function () {
      var e = this,
        n = arguments;
      return new Promise(function (r, o) {
        var a = t.apply(e, n);
        function i(t) {
          rm(a, r, o, i, c, "next", t);
        }
        function c(t) {
          rm(a, r, o, i, c, "throw", t);
        }
        i(void 0);
      });
    };
  }
  function rg(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          var r;
          (r = n[e]),
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r);
        });
    }
    return t;
  }
  function rb(t, e) {
    return (
      (e = null != e ? e : {}),
      Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : (function (t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              n.push.apply(n, r);
            }
            return n;
          })(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          }),
      t
    );
  }
  function r_(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var n,
          r,
          o =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
        if (null != o) {
          var a = [],
            i = !0,
            c = !1;
          try {
            for (
              o = o.call(t);
              !(i = (n = o.next()).done) &&
              (a.push(n.value), !e || a.length !== e);
              i = !0
            );
          } catch (t) {
            (c = !0), (r = t);
          } finally {
            try {
              i || null == o.return || o.return();
            } finally {
              if (c) throw r;
            }
          }
          return a;
        }
      })(t, e) ||
      (function (t, e) {
        if (t) {
          if ("string" == typeof t) return ry(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return ry(t, e);
        }
      })(t, e) ||
      (function () {
        throw TypeError(
          "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function rO(t) {
    return t && "undefined" != typeof Symbol && t.constructor === Symbol
      ? "symbol"
      : typeof t;
  }
  function rS(t, e) {
    var n,
      r,
      o,
      a,
      i = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (a = { next: c(0), throw: c(1), return: c(2) }),
      "function" == typeof Symbol &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function c(a) {
      return function (c) {
        return (function (a) {
          if (n) throw TypeError("Generator is already executing.");
          for (; i; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & a[0]
                      ? r.return
                      : a[0]
                        ? r.throw || ((o = r.return) && o.call(r), 0)
                        : r.next) &&
                  !(o = o.call(r, a[1])).done)
              )
                return o;
              switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                case 0:
                case 1:
                  o = a;
                  break;
                case 4:
                  return i.label++, { value: a[1], done: !1 };
                case 5:
                  i.label++, (r = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = i.ops.pop()), i.trys.pop();
                  continue;
                default:
                  if (
                    !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                    (6 === a[0] || 2 === a[0])
                  ) {
                    i = 0;
                    continue;
                  }
                  if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                    i.label = a[1];
                    break;
                  }
                  if (6 === a[0] && i.label < o[1]) {
                    (i.label = o[1]), (o = a);
                    break;
                  }
                  if (o && i.label < o[2]) {
                    (i.label = o[2]), i.ops.push(a);
                    break;
                  }
                  o[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              a = e.call(t, i);
            } catch (t) {
              (a = [6, t]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        })([a, c]);
      };
    }
  }
  function rw(t, e) {
    var n = "fetch";
    rr(n, t),
      ro(n, function () {
        return rj(void 0, e);
      });
  }
  function rj(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (!e ||
      (function () {
        if ("string" == typeof EdgeRuntime) return !0;
        if (!ec()) return !1;
        if (es(P.fetch)) return !0;
        var t = !1,
          e = P.document;
        if (e && "function" == typeof e.createElement)
          try {
            var n,
              r = e.createElement("iframe");
            (r.hidden = !0),
              e.head.appendChild(r),
              (null === (n = r.contentWindow) || void 0 === n
                ? void 0
                : n.fetch) && (t = es(r.contentWindow.fetch)),
              e.head.removeChild(r);
          } catch (t) {
            I &&
              N.warn(
                "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                t,
              );
          }
        return t;
      })()) &&
      tl(P, "fetch", function (e) {
        return function () {
          for (var n, r = arguments.length, o = Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          var i = Error(),
            c = (function (t) {
              if (0 === t.length) return { method: "GET", url: "" };
              if (2 === t.length) {
                var e = r_(t, 2),
                  n = e[0],
                  r = e[1];
                return {
                  url: rT(n),
                  method: rP(r, "method")
                    ? String(r.method).toUpperCase()
                    : "GET",
                };
              }
              var o = t[0];
              return {
                url: rT(o),
                method: rP(o, "method")
                  ? String(o.method).toUpperCase()
                  : "GET",
              };
            })(o),
            s = {
              args: o,
              fetchData: { method: c.method, url: c.url },
              startTimestamp: 1e3 * tC(),
              virtualError: i,
              headers: (function (t) {
                var e = r_(t, 2),
                  n = e[0],
                  r = e[1];
                try {
                  if (
                    (void 0 === r ? "undefined" : rO(r)) === "object" &&
                    null !== r &&
                    "headers" in r &&
                    r.headers
                  )
                    return new Headers(r.headers);
                  if (tn(n)) return new Headers(n.headers);
                } catch (t) {}
              })(o),
            };
          return (
            t || ra("fetch", rg({}, s)),
            e.apply(P, o).then(
              ((n = rh(function (e) {
                return rS(this, function (n) {
                  return (
                    t
                      ? t(e)
                      : ra(
                          "fetch",
                          rb(rg({}, s), {
                            endTimestamp: 1e3 * tC(),
                            response: e,
                          }),
                        ),
                    [2, e]
                  );
                });
              })),
              function (t) {
                return n.apply(this, arguments);
              }),
              function (t) {
                if (
                  (ra(
                    "fetch",
                    rb(rg({}, s), { endTimestamp: 1e3 * tC(), error: t }),
                  ),
                  z(t) &&
                    void 0 === t.stack &&
                    ((t.stack = i.stack), tf(t, "framesToPop", 1)),
                  t instanceof TypeError &&
                    ("Failed to fetch" === t.message ||
                      "Load failed" === t.message ||
                      "NetworkError when attempting to fetch resource." ===
                        t.message))
                )
                  try {
                    var e = new URL(s.fetchData.url);
                    t.message = "".concat(t.message, " (").concat(e.host, ")");
                  } catch (t) {}
                throw t;
              },
            )
          );
        };
      });
  }
  function rE() {
    return (rE = rh(function (t, e) {
      var n, r, o, a, i, c;
      return rS(this, function (s) {
        switch (s.label) {
          case 0:
            if (!(null == t ? void 0 : t.body)) return [3, 8];
            (r = (n = t.body).getReader()),
              (o = setTimeout(function () {
                n.cancel().then(null, function () {});
              }, 9e4)),
              (a = !0),
              (s.label = 1);
          case 1:
            if (!a) return [3, 7];
            (i = void 0), (s.label = 2);
          case 2:
            return (
              s.trys.push([2, 4, 5, 6]),
              (i = setTimeout(function () {
                n.cancel().then(null, function () {});
              }, 5e3)),
              [4, r.read()]
            );
          case 3:
            return (
              (c = s.sent().done), clearTimeout(i), c && (e(), (a = !1)), [3, 6]
            );
          case 4:
            return s.sent(), (a = !1), [3, 6];
          case 5:
            return clearTimeout(i), [7];
          case 6:
            return [3, 1];
          case 7:
            clearTimeout(o),
              r.releaseLock(),
              n.cancel().then(null, function () {}),
              (s.label = 8);
          case 8:
            return [2];
        }
      });
    })).apply(this, arguments);
  }
  function rk(t) {
    var e;
    try {
      e = t.clone();
    } catch (t) {
      return;
    }
    !(function (t, e) {
      rE.apply(this, arguments);
    })(e, function () {
      ra("fetch-body-resolved", { endTimestamp: 1e3 * tC(), response: t });
    });
  }
  function rP(t, e) {
    return !!t && (void 0 === t ? "undefined" : rO(t)) === "object" && !!t[e];
  }
  function rT(t) {
    return "string" == typeof t
      ? t
      : t
        ? rP(t, "url")
          ? t.url
          : t.toString
            ? t.toString()
            : ""
        : "";
  }
  function rx(t, e) {
    var n = t2(),
      r = t0();
    if (n) {
      var o = n.getOptions(),
        a = o.beforeBreadcrumb,
        i = void 0 === a ? null : a,
        c = o.maxBreadcrumbs,
        s = void 0 === c ? 100 : c;
      if (!(s <= 0)) {
        var u = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                  }),
                )),
                r.forEach(function (e) {
                  var r;
                  (r = n[e]),
                    e in t
                      ? Object.defineProperty(t, e, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[e] = r);
                });
            }
            return t;
          })({ timestamp: tD() }, t),
          l = i
            ? M(function () {
                return i(u, e);
              })
            : u;
        null !== l &&
          (n.emit && n.emit("beforeAddBreadcrumb", l, e),
          r.addBreadcrumb(l, s));
      }
    }
  }
  function rA(t) {
    if (void 0 !== t)
      return t >= 400 && t < 500 ? "warning" : t >= 500 ? "error" : void 0;
  }
  function rI(t) {
    return "isRelative" in t;
  }
  function rD(t) {
    if (!t) return {};
    var e = t.match(
      /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
    );
    if (!e) return {};
    var n = e[6] || "",
      r = e[8] || "";
    return {
      host: e[4],
      path: e[5],
      protocol: e[2],
      search: n,
      hash: r,
      relative: e[5] + n + r,
    };
  }
  function rC(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          var r;
          (r = n[e]),
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r);
        });
    }
    return t;
  }
  function rR(t) {
    return t && "undefined" != typeof Symbol && t.constructor === Symbol
      ? "symbol"
      : typeof t;
  }
  var rM = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = rC(
          { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 },
          t,
        );
      return {
        name: "Breadcrumbs",
        setup: function (t) {
          var n, r, o, a, i, c, s, u;
          if (e.console) {
            (r = t),
              rr((n = "console"), function (t) {
                if (t2() === r) {
                  var e,
                    n = {
                      category: "console",
                      data: { arguments: t.args, logger: "console" },
                      level:
                        "warn" === (e = t.level)
                          ? "warning"
                          : [
                                "fatal",
                                "error",
                                "warning",
                                "log",
                                "info",
                                "debug",
                              ].includes(e)
                            ? e
                            : "log",
                      message: tc(t.args, " "),
                    };
                  if ("assert" === t.level) {
                    if (!1 !== t.args[0]) return;
                    (n.message = "Assertion failed: ".concat(
                      tc(t.args.slice(1), " ") || "console.assert",
                    )),
                      (n.data.arguments = t.args.slice(1));
                  }
                  rx(n, { input: t.args, level: t.level });
                }
              }),
              ro(n, rv);
          }
          if (e.dom) {
            rr(
              "dom",
              ((o = t),
              (a = e.dom),
              function (t) {
                if (t2() === o) {
                  var e,
                    n,
                    r =
                      (void 0 === a ? "undefined" : rR(a)) === "object"
                        ? a.serializeAttribute
                        : void 0,
                    i =
                      (void 0 === a ? "undefined" : rR(a)) === "object" &&
                      "number" == typeof a.maxStringLength
                        ? a.maxStringLength
                        : void 0;
                  i &&
                    i > 1024 &&
                    (rt &&
                      N.warn(
                        "`dom.maxStringLength` cannot exceed "
                          .concat(1024, ", but a value of ")
                          .concat(i, " was configured. Sentry will use ")
                          .concat(1024, " instead."),
                      ),
                    (i = 1024)),
                    "string" == typeof r && (r = [r]);
                  try {
                    var c,
                      s = t.event,
                      u = (c = s) && c.target ? s.target : s;
                    (e = tr(u, { keyAttrs: r, maxStringLength: i })),
                      (n = ta(u));
                  } catch (t) {
                    e = "<unknown>";
                  }
                  if (0 !== e.length) {
                    var l = { category: "ui.".concat(t.name), message: e };
                    n && (l.data = { "ui.component_name": n }),
                      rx(l, { event: t.event, name: t.name, global: t.global });
                  }
                }
              }),
            ),
              ro("dom", ri);
          }
          e.xhr &&
            rl(
              ((i = t),
              function (t) {
                if (t2() === i) {
                  var e = t.startTimestamp,
                    n = t.endTimestamp,
                    r = t.xhr[ru];
                  if (e && n && r) {
                    var o = r.method,
                      a = r.url,
                      c = r.status_code,
                      s = r.body,
                      u = {
                        xhr: t.xhr,
                        input: s,
                        startTimestamp: e,
                        endTimestamp: n,
                      },
                      l = {
                        category: "xhr",
                        data: { method: o, url: a, status_code: c },
                        type: "http",
                        level: rA(c),
                      };
                    i.emit("beforeOutgoingRequestBreadcrumb", l, u), rx(l, u);
                  }
                }
              }),
            ),
            e.fetch &&
              rw(
                ((c = t),
                function (t) {
                  if (t2() === c) {
                    var e = t.startTimestamp,
                      n = t.endTimestamp;
                    if (
                      !(
                        !n ||
                        (t.fetchData.url.match(/sentry_key/) &&
                          "POST" === t.fetchData.method)
                      )
                    ) {
                      if ((t.fetchData.method, t.fetchData.url, t.error)) {
                        var r = t.fetchData,
                          o = {
                            data: t.error,
                            input: t.args,
                            startTimestamp: e,
                            endTimestamp: n,
                          },
                          a = {
                            category: "fetch",
                            data: r,
                            level: "error",
                            type: "http",
                          };
                        c.emit("beforeOutgoingRequestBreadcrumb", a, o),
                          rx(a, o);
                      } else {
                        var i,
                          s,
                          u = t.response,
                          l =
                            ((i = rC({}, t.fetchData)),
                            (s = s =
                              { status_code: null == u ? void 0 : u.status }),
                            Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  i,
                                  Object.getOwnPropertyDescriptors(s),
                                )
                              : (function (t, e) {
                                  var n = Object.keys(t);
                                  if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(t);
                                    n.push.apply(n, r);
                                  }
                                  return n;
                                })(Object(s)).forEach(function (t) {
                                  Object.defineProperty(
                                    i,
                                    t,
                                    Object.getOwnPropertyDescriptor(s, t),
                                  );
                                }),
                            i);
                        t.fetchData.request_body_size,
                          t.fetchData.response_body_size,
                          null == u || u.status;
                        var f = {
                            input: t.args,
                            response: u,
                            startTimestamp: e,
                            endTimestamp: n,
                          },
                          p = {
                            category: "fetch",
                            data: l,
                            type: "http",
                            level: rA(l.status_code),
                          };
                        c.emit("beforeOutgoingRequestBreadcrumb", p, f),
                          rx(p, f);
                      }
                    }
                  }
                }),
              ),
            e.history &&
              rp(
                ((s = t),
                function (t) {
                  if (t2() === s) {
                    var e = t.from,
                      n = t.to,
                      r = rD(P.location.href),
                      o = e ? rD(e) : void 0,
                      a = rD(n);
                    (null == o ? void 0 : o.path) || (o = r),
                      r.protocol === a.protocol &&
                        r.host === a.host &&
                        (n = a.relative),
                      r.protocol === o.protocol &&
                        r.host === o.host &&
                        (e = o.relative),
                      rx({ category: "navigation", data: { from: e, to: n } });
                  }
                }),
              ),
            e.sentry &&
              t.on(
                "beforeSendEvent",
                ((u = t),
                function (t) {
                  t2() === u &&
                    rx(
                      {
                        category: "sentry.".concat(
                          "transaction" === t.type ? "transaction" : "event",
                        ),
                        event_id: t.event_id,
                        level: t.level,
                        message: t_(t),
                      },
                      { event: t },
                    );
                }),
              );
        },
      };
    },
    rN = [
      "EventTarget",
      "Window",
      "Node",
      "ApplicationCache",
      "AudioTrackList",
      "BroadcastChannel",
      "ChannelMergerNode",
      "CryptoOperation",
      "EventSource",
      "FileReader",
      "HTMLUnknownElement",
      "IDBDatabase",
      "IDBRequest",
      "IDBTransaction",
      "KeyOperation",
      "MediaController",
      "MessagePort",
      "ModalWindow",
      "Notification",
      "SVGElementInstance",
      "Screen",
      "SharedWorker",
      "TextTrack",
      "TextTrackCue",
      "TextTrackList",
      "WebSocket",
      "WebSocketWorker",
      "Worker",
      "XMLHttpRequest",
      "XMLHttpRequestEventTarget",
      "XMLHttpRequestUpload",
    ],
    rL = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = (function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
              )),
              r.forEach(function (e) {
                var r;
                (r = n[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = r);
              });
          }
          return t;
        })(
          {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
          },
          t,
        );
      return {
        name: "BrowserApiErrors",
        setupOnce: function () {
          e.setTimeout && tl(P, "setTimeout", rU),
            e.setInterval && tl(P, "setInterval", rU),
            e.requestAnimationFrame && tl(P, "requestAnimationFrame", rq),
            e.XMLHttpRequest &&
              "XMLHttpRequest" in P &&
              tl(XMLHttpRequest.prototype, "send", rF);
          var t = e.eventTarget;
          t && (Array.isArray(t) ? t : rN).forEach(rH);
        },
      };
    };
  function rU(t) {
    return function () {
      for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      var o = n[0];
      return (
        (n[0] = n8(o, {
          mechanism: {
            data: { function: ee(t) },
            handled: !1,
            type: "instrument",
          },
        })),
        t.apply(this, n)
      );
    };
  }
  function rq(t) {
    return function (e) {
      return t.apply(this, [
        n8(e, {
          mechanism: {
            data: { function: "requestAnimationFrame", handler: ee(t) },
            handled: !1,
            type: "instrument",
          },
        }),
      ]);
    };
  }
  function rF(t) {
    return function () {
      for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      var o = this;
      return (
        ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
          function (t) {
            t in o &&
              "function" == typeof o[t] &&
              tl(o, t, function (e) {
                var n = {
                    mechanism: {
                      data: { function: t, handler: ee(e) },
                      handled: !1,
                      type: "instrument",
                    },
                  },
                  r = td(e);
                return r && (n.mechanism.data.handler = ee(r)), n8(e, n);
              });
          },
        ),
        t.apply(this, n)
      );
    };
  }
  function rH(t) {
    var e,
      n,
      r = null === (e = P[t]) || void 0 === e ? void 0 : e.prototype;
    (null == r
      ? void 0
      : null === (n = r.hasOwnProperty) || void 0 === n
        ? void 0
        : n.call(r, "addEventListener")) &&
      (tl(r, "addEventListener", function (e) {
        return function (n, r, o) {
          try {
            var a;
            (a = r),
              "function" == typeof a.handleEvent &&
                (r.handleEvent = n8(r.handleEvent, {
                  mechanism: {
                    data: {
                      function: "handleEvent",
                      handler: ee(r),
                      target: t,
                    },
                    handled: !1,
                    type: "instrument",
                  },
                }));
          } catch (t) {}
          return e.apply(this, [
            n,
            n8(r, {
              mechanism: {
                data: {
                  function: "addEventListener",
                  handler: ee(r),
                  target: t,
                },
                handled: !1,
                type: "instrument",
              },
            }),
            o,
          ]);
        };
      }),
      tl(r, "removeEventListener", function (t) {
        return function (e, n, r) {
          try {
            var o = n.__sentry_wrapped__;
            o && t.call(this, e, o, r);
          } catch (t) {}
          return t.call(this, e, n, r);
        };
      }));
  }
  var rB = null;
  function r$(t) {
    var e = "error";
    rr(e, t), ro(e, rz);
  }
  function rz() {
    (rB = P.onerror),
      (P.onerror = function (t, e, n, r, o) {
        return (
          ra("error", { column: r, error: o, line: n, msg: t, url: e }),
          !!rB && rB.apply(this, arguments)
        );
      }),
      (P.onerror.__SENTRY_INSTRUMENTED__ = !0);
  }
  var rW = null;
  function rG(t) {
    var e = "unhandledrejection";
    rr(e, t), ro(e, rJ);
  }
  function rJ() {
    (rW = P.onunhandledrejection),
      (P.onunhandledrejection = function (t) {
        return ra("unhandledrejection", t), !rW || rW.apply(this, arguments);
      }),
      (P.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
  }
  var rY = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = (function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              }),
            )),
            r.forEach(function (e) {
              var r;
              (r = n[e]),
                e in t
                  ? Object.defineProperty(t, e, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = r);
            });
        }
        return t;
      })({ onerror: !0, onunhandledrejection: !0 }, t);
    return {
      name: "GlobalHandlers",
      setupOnce: function () {
        Error.stackTraceLimit = 50;
      },
      setup: function (t) {
        var n, r;
        e.onerror &&
          ((n = t),
          r$(function (t) {
            var e = rV(),
              r = e.stackParser,
              o = e.attachStacktrace;
            if (t2() === n && !(n3 > 0)) {
              var a,
                i,
                c,
                s,
                u,
                l,
                f,
                p,
                d,
                v,
                y = t.msg,
                m = t.url,
                h = t.line,
                g = t.column,
                b = t.error,
                _ =
                  ((a = nX(r, b || y, void 0, o, !1)),
                  (i = m),
                  (c = h),
                  (s = g),
                  (d = (p = (f = (l = (u = a.exception =
                    a.exception || {}).values =
                    u.values || [])[0] =
                    l[0] || {}).stacktrace =
                    f.stacktrace || {}).frames =
                    p.frames || []),
                  (v = Y(i) && i.length > 0 ? i : to()),
                  0 === d.length &&
                    d.push({
                      colno: s,
                      filename: v,
                      function: "?",
                      in_app: !0,
                      lineno: c,
                    }),
                  a);
              (_.level = "error"),
                nK(_, {
                  originalException: b,
                  mechanism: { handled: !1, type: "onerror" },
                });
            }
          }),
          rX("onerror")),
          e.onunhandledrejection &&
            ((r = t),
            rG(function (t) {
              var e = rV(),
                n = e.stackParser,
                o = e.attachStacktrace;
              if (t2() === r && !(n3 > 0)) {
                var a,
                  i = (function (t) {
                    if (V(t)) return t;
                    try {
                      if ("reason" in t) return t.reason;
                      if ("detail" in t && "reason" in t.detail)
                        return t.detail.reason;
                    } catch (t) {}
                    return t;
                  })(t),
                  c = V(i)
                    ? ((a = i),
                      {
                        exception: {
                          values: [
                            {
                              type: "UnhandledRejection",
                              value:
                                "Non-Error promise rejection captured with value: ".concat(
                                  String(a),
                                ),
                            },
                          ],
                        },
                      })
                    : nX(n, i, void 0, o, !0);
                (c.level = "error"),
                  nK(c, {
                    originalException: i,
                    mechanism: { handled: !1, type: "onunhandledrejection" },
                  });
              }
            }),
            rX("onunhandledrejection"));
      },
    };
  };
  function rX(t) {
    rt && N.log("Global Handler attached: ".concat(t));
  }
  function rV() {
    var t = t2();
    return (
      (null == t ? void 0 : t.getOptions()) || {
        stackParser: function () {
          return [];
        },
        attachStacktrace: !1,
      }
    );
  }
  function rK(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          var r;
          (r = n[e]),
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r);
        });
    }
    return t;
  }
  function rZ(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function rQ(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          var r;
          (r = n[e]),
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r);
        });
    }
    return t;
  }
  function r0(t, e) {
    return (
      (e = null != e ? e : {}),
      Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : (function (t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              n.push.apply(n, r);
            }
            return n;
          })(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          }),
      t
    );
  }
  function r1(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return rZ(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      (function (t, e) {
        if (t) {
          if ("string" == typeof t) return rZ(t, void 0);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return rZ(t, e);
        }
      })(t) ||
      (function () {
        throw TypeError(
          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function r2(t, e) {
    (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
      (t.mechanism = r0(
        rQ(
          {},
          t.mechanism,
          "AggregateError" === t.type && { is_exception_group: !0 },
        ),
        { exception_id: e },
      ));
  }
  function r3(t, e, n, r) {
    (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
      (t.mechanism = r0(rQ({}, t.mechanism), {
        type: "chained",
        source: e,
        exception_id: n,
        parent_id: r,
      }));
  }
  var r8 = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = t.limit || 5,
      n = t.key || "cause";
    return {
      name: "LinkedErrors",
      preprocessEvent: function (t, r, o) {
        !(function (t, e, n, r, o, a) {
          if (
            (null === (i = o.exception) || void 0 === i ? void 0 : i.values) &&
            a &&
            tt(a.originalException, Error)
          ) {
            var i,
              c =
                o.exception.values.length > 0
                  ? o.exception.values[o.exception.values.length - 1]
                  : void 0;
            c &&
              (o.exception.values = (function t(e, n, r, o, a, i, c, s) {
                if (i.length >= r + 1) return i;
                var u = r1(i);
                if (tt(o[a], Error)) {
                  r2(c, s);
                  var l = e(n, o[a]),
                    f = u.length;
                  r3(l, a, f, s),
                    (u = t(e, n, r, o[a], a, [l].concat(r1(u)), l, f));
                }
                return (
                  Array.isArray(o.errors) &&
                    o.errors.forEach(function (o, i) {
                      if (tt(o, Error)) {
                        r2(c, s);
                        var l = e(n, o),
                          f = u.length;
                        r3(l, "errors[".concat(i, "]"), f, s),
                          (u = t(e, n, r, o, a, [l].concat(r1(u)), l, f));
                      }
                    }),
                  u
                );
              })(t, e, r, a.originalException, n, o.exception.values, c, 0));
          }
        })(nz, o.getOptions().stackParser, n, e, t, r);
      },
    };
  };
  function r4(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function r6(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var n,
          r,
          o =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
        if (null != o) {
          var a = [],
            i = !0,
            c = !1;
          try {
            for (
              o = o.call(t);
              !(i = (n = o.next()).done) &&
              (a.push(n.value), !e || a.length !== e);
              i = !0
            );
          } catch (t) {
            (c = !0), (r = t);
          } finally {
            try {
              i || null == o.return || o.return();
            } finally {
              if (c) throw r;
            }
          }
          return a;
        }
      })(t, e) ||
      r5(t, e) ||
      (function () {
        throw TypeError(
          "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function r5(t, e) {
    if (t) {
      if ("string" == typeof t) return r4(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      if (
        ("Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n)
      )
        return Array.from(n);
      if (
        "Arguments" === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return r4(t, e);
    }
  }
  function r9(t, e, n, r) {
    var o = {
      filename: t,
      function: "<anonymous>" === e ? "?" : e,
      in_app: !0,
    };
    return void 0 !== n && (o.lineno = n), void 0 !== r && (o.colno = r), o;
  }
  var r7 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    ot =
      /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    oe = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    on = [
      30,
      function (t) {
        var e = r7.exec(t);
        if (e) {
          var n = r6(e, 4);
          return r9(n[1], "?", +n[2], +n[3]);
        }
        var r = ot.exec(t);
        if (r) {
          if (r[2] && 0 === r[2].indexOf("eval")) {
            var o = oe.exec(r[2]);
            o && ((r[2] = o[1]), (r[3] = o[2]), (r[4] = o[3]));
          }
          var a = r6(oc(r[1] || "?", r[2]), 2),
            i = a[0];
          return r9(a[1], i, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
        }
      },
    ],
    or =
      /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    oo = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    oa = [
      50,
      function (t) {
        var e = or.exec(t);
        if (e) {
          if (e[3] && e[3].indexOf(" > eval") > -1) {
            var n,
              r = oo.exec(e[3]);
            r &&
              ((e[1] = e[1] || "eval"),
              (e[3] = r[1]),
              (e[4] = r[2]),
              (e[5] = ""));
          }
          var o = e[3],
            a = e[1] || "?";
          return (
            (a = (n = r6(oc(a, o), 2))[0]),
            r9((o = n[1]), a, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
          );
        }
      },
    ],
    oi = t9.apply(
      void 0,
      (function (t) {
        if (Array.isArray(t)) return r4(t);
      })((e = [on, oa])) ||
        (function (t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(e) ||
        r5(e) ||
        (function () {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })(),
    ),
    oc = function (t, e) {
      var n = -1 !== t.indexOf("safari-extension"),
        r = -1 !== t.indexOf("safari-web-extension");
      return n || r
        ? [
            -1 !== t.indexOf("@") ? t.split("@")[0] : "?",
            n
              ? "safari-extension:".concat(e)
              : "safari-web-extension:".concat(e),
          ]
        : [t, e];
    },
    os = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    ou = {},
    ol = Symbol.for("SentryBufferFullError");
  function of(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function op(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : (function (t) {
              var e = ou[t];
              if (e) return e;
              var n = P[t];
              if (es(n)) return (ou[t] = n.bind(P));
              var r = P.document;
              if (r && "function" == typeof r.createElement)
                try {
                  var o = r.createElement("iframe");
                  (o.hidden = !0), r.head.appendChild(o);
                  var a = o.contentWindow;
                  (null == a ? void 0 : a[t]) && (n = a[t]),
                    r.head.removeChild(o);
                } catch (e) {
                  os &&
                    N.warn(
                      "Could not create sandbox iframe for "
                        .concat(t, " check, bailing to window.")
                        .concat(t, ": "),
                      e,
                    );
                }
              return n ? (ou[t] = n.bind(P)) : n;
            })("fetch"),
      n = 0,
      r = 0;
    return (function (t, e) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : (function (t) {
                var e = [];
                function n(t) {
                  return (
                    e.splice(e.indexOf(t), 1)[0] || Promise.resolve(void 0)
                  );
                }
                return {
                  $: e,
                  add: function (r) {
                    if (!(void 0 === t || e.length < t)) return nv(ol);
                    var o = r();
                    return (
                      -1 === e.indexOf(o) && e.push(o),
                      o
                        .then(function () {
                          return n(o);
                        })
                        .then(null, function () {
                          return n(o).then(null, function () {});
                        }),
                      o
                    );
                  },
                  drain: function (t) {
                    return new ny(function (n, r) {
                      var o = e.length;
                      if (!o) return n(!0);
                      var a = setTimeout(function () {
                        t && t > 0 && n(!1);
                      }, t);
                      e.forEach(function (t) {
                        nd(t).then(function () {
                          --o || (clearTimeout(a), n(!0));
                        }, r);
                      });
                    });
                  },
                };
              })(t.bufferSize || 64),
        r = {};
      return {
        send: function (o) {
          var a = [];
          if (
            (e_(o, function (e, n) {
              var o = eS[n];
              (function (t, e) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : Date.now();
                return (t[e] || t.all || 0) > n;
              })(r, o)
                ? t.recordDroppedEvent("ratelimit_backoff", o)
                : a.push(e);
            }),
            0 === a.length)
          )
            return nd({});
          var i = eb(o[0], a),
            c = function (e) {
              e_(i, function (n, r) {
                t.recordDroppedEvent(e, eS[r]);
              });
            };
          return n
            .add(function () {
              return e({
                body: (function (t) {
                  var e = eh(t, 2),
                    n = e[0],
                    r = e[1],
                    o = JSON.stringify(n);
                  function a(t) {
                    "string" == typeof o
                      ? (o = "string" == typeof t ? o + t : [eO(o), t])
                      : o.push("string" == typeof t ? eO(t) : t);
                  }
                  var i = !0,
                    c = !1,
                    s = void 0;
                  try {
                    for (
                      var u, l = r[Symbol.iterator]();
                      !(i = (u = l.next()).done);
                      i = !0
                    ) {
                      var f = u.value,
                        p = eh(f, 2),
                        d = p[0],
                        v = p[1];
                      if (
                        (a("\n".concat(JSON.stringify(d), "\n")),
                        "string" == typeof v || v instanceof Uint8Array)
                      )
                        a(v);
                      else {
                        var y = void 0;
                        try {
                          y = JSON.stringify(v);
                        } catch (t) {
                          y = JSON.stringify(ey(v));
                        }
                        a(y);
                      }
                    }
                  } catch (t) {
                    (c = !0), (s = t);
                  } finally {
                    try {
                      i || null == l.return || l.return();
                    } finally {
                      if (c) throw s;
                    }
                  }
                  return "string" == typeof o
                    ? o
                    : (function (t) {
                        var e = new Uint8Array(
                            t.reduce(function (t, e) {
                              return t + e.length;
                            }, 0),
                          ),
                          n = 0,
                          r = !0,
                          o = !1,
                          a = void 0;
                        try {
                          for (
                            var i, c = t[Symbol.iterator]();
                            !(r = (i = c.next()).done);
                            r = !0
                          ) {
                            var s = i.value;
                            e.set(s, n), (n += s.length);
                          }
                        } catch (t) {
                          (o = !0), (a = t);
                        } finally {
                          try {
                            r || null == c.return || c.return();
                          } finally {
                            if (o) throw a;
                          }
                        }
                        return e;
                      })(o);
                })(i),
              }).then(
                function (t) {
                  return (
                    void 0 !== t.statusCode &&
                      (t.statusCode < 200 || t.statusCode >= 300) &&
                      E &&
                      N.warn(
                        "Sentry responded with status code ".concat(
                          t.statusCode,
                          " to sent event.",
                        ),
                      ),
                    (r = (function (t, e) {
                      var n = e.statusCode,
                        r = e.headers,
                        o =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : Date.now(),
                        a = (function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                              r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(
                                  function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t)
                                      .enumerable;
                                  },
                                ),
                              )),
                              r.forEach(function (e) {
                                var r;
                                (r = n[e]),
                                  e in t
                                    ? Object.defineProperty(t, e, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                      })
                                    : (t[e] = r);
                              });
                          }
                          return t;
                        })({}, t),
                        i = null == r ? void 0 : r["x-sentry-rate-limits"],
                        c = null == r ? void 0 : r["retry-after"];
                      if (i) {
                        var s = !0,
                          u = !1,
                          l = void 0;
                        try {
                          for (
                            var f, p = i.trim().split(",")[Symbol.iterator]();
                            !(s = (f = p.next()).done);
                            s = !0
                          ) {
                            var d =
                                ((S = f.value.split(":", 5)),
                                (function (t) {
                                  if (Array.isArray(t)) return t;
                                })(S) ||
                                  (function (t, e) {
                                    var n,
                                      r,
                                      o =
                                        null == t
                                          ? null
                                          : ("undefined" != typeof Symbol &&
                                              t[Symbol.iterator]) ||
                                            t["@@iterator"];
                                    if (null != o) {
                                      var a = [],
                                        i = !0,
                                        c = !1;
                                      try {
                                        for (
                                          o = o.call(t);
                                          !(i = (n = o.next()).done) &&
                                          (a.push(n.value), a.length !== e);
                                          i = !0
                                        );
                                      } catch (t) {
                                        (c = !0), (r = t);
                                      } finally {
                                        try {
                                          i || null == o.return || o.return();
                                        } finally {
                                          if (c) throw r;
                                        }
                                      }
                                      return a;
                                    }
                                  })(S, 5) ||
                                  (function (t, e) {
                                    if (t) {
                                      if ("string" == typeof t) return of(t, 5);
                                      var n = Object.prototype.toString
                                        .call(t)
                                        .slice(8, -1);
                                      if (
                                        ("Object" === n &&
                                          t.constructor &&
                                          (n = t.constructor.name),
                                        "Map" === n || "Set" === n)
                                      )
                                        return Array.from(n);
                                      if (
                                        "Arguments" === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          n,
                                        )
                                      )
                                        return of(t, e);
                                    }
                                  })(S, 5) ||
                                  (function () {
                                    throw TypeError(
                                      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                    );
                                  })()),
                              v = d[0],
                              y = d[1],
                              m = d[4],
                              h = parseInt(v, 10),
                              g = (isNaN(h) ? 60 : h) * 1e3;
                            if (y) {
                              var b = !0,
                                _ = !1,
                                O = void 0;
                              try {
                                for (
                                  var S, w, j = y.split(";")[Symbol.iterator]();
                                  !(b = (w = j.next()).done);
                                  b = !0
                                ) {
                                  var E = w.value;
                                  "metric_bucket" === E
                                    ? (!m || m.split(";").includes("custom")) &&
                                      (a[E] = o + g)
                                    : (a[E] = o + g);
                                }
                              } catch (t) {
                                (_ = !0), (O = t);
                              } finally {
                                try {
                                  b || null == j.return || j.return();
                                } finally {
                                  if (_) throw O;
                                }
                              }
                            } else a.all = o + g;
                          }
                        } catch (t) {
                          (u = !0), (l = t);
                        } finally {
                          try {
                            s || null == p.return || p.return();
                          } finally {
                            if (u) throw l;
                          }
                        }
                      } else
                        c
                          ? (a.all =
                              o +
                              (function (t) {
                                var e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                      ? arguments[1]
                                      : Date.now(),
                                  n = parseInt("".concat(t), 10);
                                if (!isNaN(n)) return 1e3 * n;
                                var r = Date.parse("".concat(t));
                                return isNaN(r) ? 6e4 : r - e;
                              })(c, o))
                          : 429 === n && (a.all = o + 6e4);
                      return a;
                    })(r, t)),
                    t
                  );
                },
                function (t) {
                  throw (
                    (c("network_error"),
                    E &&
                      N.error(
                        "Encountered error running transport request:",
                        t,
                      ),
                    t)
                  );
                },
              );
            })
            .then(
              function (t) {
                return t;
              },
              function (t) {
                if (t === ol)
                  return (
                    E &&
                      N.error("Skipped sending event because buffer is full."),
                    c("queue_overflow"),
                    nd({})
                  );
                throw t;
              },
            );
        },
        flush: function (t) {
          return n.drain(t);
        },
      };
    })(t, function (o) {
      var a = o.body.length;
      (n += a), r++;
      var i = (function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              }),
            )),
            r.forEach(function (e) {
              var r;
              (r = n[e]),
                e in t
                  ? Object.defineProperty(t, e, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = r);
            });
        }
        return t;
      })(
        {
          body: o.body,
          method: "POST",
          referrerPolicy: "strict-origin",
          headers: t.headers,
          keepalive: n <= 6e4 && r < 15,
        },
        t.fetchOptions,
      );
      if (!e)
        return (ou.fetch = void 0), nv("No fetch implementation available");
      try {
        return e(t.url, i).then(function (t) {
          return (
            (n -= a),
            r--,
            {
              statusCode: t.status,
              headers: {
                "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                "retry-after": t.headers.get("Retry-After"),
              },
            }
          );
        });
      } catch (t) {
        return (ou.fetch = void 0), (n -= a), r--, nv(t);
      }
    });
  }
  function od(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          var r;
          (r = n[e]),
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r);
        });
    }
    return t;
  }
  function ov(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function oy(t) {
    if (t && 0 !== t.length) {
      var e = {};
      return (
        t.forEach(function (t) {
          var n = t.attributes || {},
            r = n[eL],
            o = n[eU];
          "string" == typeof r &&
            "number" == typeof o &&
            (e[t.name] = { value: o, unit: r });
        }),
        e
      );
    }
  }
  var om = function (t, e, n, r) {
      var o, a;
      return function (i) {
        if (
          e.value >= 0 &&
          (i || r) &&
          ((a = e.value - (o || 0)) || void 0 === o)
        ) {
          var c;
          (o = e.value),
            (e.delta = a),
            (e.rating =
              (c = e.value) > n[1]
                ? "poor"
                : c > n[0]
                  ? "needs-improvement"
                  : "good"),
            t(e);
        }
      };
    },
    oh = function () {
      var t,
        e,
        n = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        r =
          null === (e = P.performance) || void 0 === e
            ? void 0
            : null === (t = e.getEntriesByType) || void 0 === t
              ? void 0
              : t.call(e, "navigation")[0];
      if (
        !n ||
        (r && r.responseStart > 0 && r.responseStart < performance.now())
      )
        return r;
    },
    og = function () {
      var t = oh();
      return (null == t ? void 0 : t.activationStart) || 0;
    },
    ob = function (t, e) {
      var n,
        r,
        o = oh(),
        a = "navigate";
      return (
        o &&
          ((null === (n = P.document) || void 0 === n
            ? void 0
            : n.prerendering) || og() > 0
            ? (a = "prerender")
            : (
                  null === (r = P.document) || void 0 === r
                    ? void 0
                    : r.wasDiscarded
                )
              ? (a = "restore")
              : o.type && (a = o.type.replace(/_/g, "-"))),
        {
          name: t,
          value: void 0 === e ? -1 : e,
          rating: "good",
          delta: 0,
          entries: [],
          id: "v4-"
            .concat(Date.now(), "-")
            .concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12),
          navigationType: a,
        }
      );
    },
    o_ = function (t, e, n) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
          var r = new PerformanceObserver(function (t) {
            Promise.resolve().then(function () {
              e(t.getEntries());
            });
          });
          return (
            r.observe(Object.assign({ type: t, buffered: !0 }, n || {})), r
          );
        }
      } catch (t) {}
    },
    oO = function (t) {
      var e = function (e) {
        var n;
        ("pagehide" === e.type ||
          (null === (n = P.document) || void 0 === n
            ? void 0
            : n.visibilityState) === "hidden") &&
          t(e);
      };
      P.document &&
        (addEventListener("visibilitychange", e, !0),
        addEventListener("pagehide", e, !0));
    },
    oS = function (t) {
      var e = !1;
      return function () {
        e || (t(), (e = !0));
      };
    },
    ow = -1,
    oj = function (t) {
      "hidden" === P.document.visibilityState &&
        ow > -1 &&
        ((ow = "visibilitychange" === t.type ? t.timeStamp : 0), ok());
    },
    oE = function () {
      addEventListener("visibilitychange", oj, !0),
        addEventListener("prerenderingchange", oj, !0);
    },
    ok = function () {
      removeEventListener("visibilitychange", oj, !0),
        removeEventListener("prerenderingchange", oj, !0);
    },
    oP = function () {
      return (
        P.document &&
          ow < 0 &&
          ((ow =
            "hidden" !== P.document.visibilityState || P.document.prerendering
              ? 1 / 0
              : 0),
          oE()),
        {
          get firstHiddenTime() {
            return ow;
          },
        }
      );
    },
    oT = function (t) {
      var e;
      (null === (e = P.document) || void 0 === e ? void 0 : e.prerendering)
        ? addEventListener(
            "prerenderingchange",
            function () {
              return t();
            },
            !0,
          )
        : t();
    },
    ox = [1800, 3e3],
    oA = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      oT(function () {
        var n,
          r = oP(),
          o = ob("FCP"),
          a = o_("paint", function (t) {
            t.forEach(function (t) {
              "first-contentful-paint" === t.name &&
                (a.disconnect(),
                t.startTime < r.firstHiddenTime &&
                  ((o.value = Math.max(t.startTime - og(), 0)),
                  o.entries.push(t),
                  n(!0)));
            });
          });
        a && (n = om(t, o, ox, e.reportAllChanges));
      });
    },
    oI = [0.1, 0.25],
    oD = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      oA(
        oS(function () {
          var n,
            r = ob("CLS", 0),
            o = 0,
            a = [],
            i = function (t) {
              t.forEach(function (t) {
                if (!t.hadRecentInput) {
                  var e = a[0],
                    n = a[a.length - 1];
                  o &&
                  e &&
                  n &&
                  t.startTime - n.startTime < 1e3 &&
                  t.startTime - e.startTime < 5e3
                    ? ((o += t.value), a.push(t))
                    : ((o = t.value), (a = [t]));
                }
              }),
                o > r.value && ((r.value = o), (r.entries = a), n());
            },
            c = o_("layout-shift", i);
          c &&
            ((n = om(t, r, oI, e.reportAllChanges)),
            oO(function () {
              i(c.takeRecords()), n(!0);
            }),
            setTimeout(n, 0));
        }),
      );
    },
    oC = [100, 300],
    oR = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      oT(function () {
        var n,
          r = oP(),
          o = ob("FID"),
          a = function (t) {
            t.startTime < r.firstHiddenTime &&
              ((o.value = t.processingStart - t.startTime),
              o.entries.push(t),
              n(!0));
          },
          i = function (t) {
            t.forEach(a);
          },
          c = o_("first-input", i);
        (n = om(t, o, oC, e.reportAllChanges)),
          c &&
            oO(
              oS(function () {
                i(c.takeRecords()), c.disconnect();
              }),
            );
      });
    },
    oM = 0,
    oN = 1 / 0,
    oL = 0,
    oU = function (t) {
      t.forEach(function (t) {
        t.interactionId &&
          ((oN = Math.min(oN, t.interactionId)),
          (oM = (oL = Math.max(oL, t.interactionId)) ? (oL - oN) / 7 + 1 : 0));
      });
    },
    oq = function () {
      "interactionCount" in performance ||
        p ||
        (p = o_("event", oU, {
          type: "event",
          buffered: !0,
          durationThreshold: 0,
        }));
    },
    oF = [],
    oH = new Map(),
    oB = function () {
      var t = Math.min(
        oF.length - 1,
        Math.floor(((p ? oM : performance.interactionCount || 0) - 0) / 50),
      );
      return oF[t];
    },
    o$ = [],
    oz = function (t) {
      if (
        (o$.forEach(function (e) {
          return e(t);
        }),
        t.interactionId || "first-input" === t.entryType)
      ) {
        var e,
          n = oF[oF.length - 1],
          r = oH.get(t.interactionId);
        if (r || oF.length < 10 || (n && t.duration > n.latency)) {
          if (r)
            t.duration > r.latency
              ? ((r.entries = [t]), (r.latency = t.duration))
              : t.duration === r.latency &&
                t.startTime ===
                  (null === (e = r.entries[0]) || void 0 === e
                    ? void 0
                    : e.startTime) &&
                r.entries.push(t);
          else {
            var o = { id: t.interactionId, latency: t.duration, entries: [t] };
            oH.set(o.id, o), oF.push(o);
          }
          oF.sort(function (t, e) {
            return e.latency - t.latency;
          }),
            oF.length > 10 &&
              oF.splice(10).forEach(function (t) {
                return oH.delete(t.id);
              });
        }
      }
    },
    oW = function (t) {
      var e,
        n = P.requestIdleCallback || P.setTimeout,
        r = -1;
      return (
        (t = oS(t)),
        (null === (e = P.document) || void 0 === e
          ? void 0
          : e.visibilityState) === "hidden"
          ? t()
          : ((r = n(t)), oO(t)),
        r
      );
    },
    oG = [200, 500],
    oJ = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      "PerformanceEventTiming" in P &&
        "interactionId" in PerformanceEventTiming.prototype &&
        oT(function () {
          oq();
          var n,
            r = ob("INP"),
            o = function (t) {
              oW(function () {
                t.forEach(oz);
                var e = oB();
                e &&
                  e.latency !== r.value &&
                  ((r.value = e.latency), (r.entries = e.entries), n());
              });
            },
            a = o_("event", o, {
              durationThreshold:
                null != e.durationThreshold ? e.durationThreshold : 40,
            });
          (n = om(t, r, oG, e.reportAllChanges)),
            a &&
              (a.observe({ type: "first-input", buffered: !0 }),
              oO(function () {
                o(a.takeRecords()), n(!0);
              }));
        });
    },
    oY = [2500, 4e3],
    oX = {},
    oV = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      oT(function () {
        var n,
          r = oP(),
          o = ob("LCP"),
          a = function (t) {
            e.reportAllChanges || (t = t.slice(-1)),
              t.forEach(function (t) {
                t.startTime < r.firstHiddenTime &&
                  ((o.value = Math.max(t.startTime - og(), 0)),
                  (o.entries = [t]),
                  n());
              });
          },
          i = o_("largest-contentful-paint", a);
        if (i) {
          n = om(t, o, oY, e.reportAllChanges);
          var c = oS(function () {
            oX[o.id] ||
              (a(i.takeRecords()), i.disconnect(), (oX[o.id] = !0), n(!0));
          });
          ["keydown", "click"].forEach(function (t) {
            P.document &&
              addEventListener(
                t,
                function () {
                  return oW(c);
                },
                { once: !0, capture: !0 },
              );
          }),
            oO(c);
        }
      });
    },
    oK = [800, 1800],
    oZ = function (t) {
      var e, n;
      (null === (e = P.document) || void 0 === e ? void 0 : e.prerendering)
        ? oT(function () {
            return oZ(t);
          })
        : (null === (n = P.document) || void 0 === n
              ? void 0
              : n.readyState) !== "complete"
          ? addEventListener(
              "load",
              function () {
                return oZ(t);
              },
              !0,
            )
          : setTimeout(t, 0);
    },
    oQ = function (t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = ob("TTFB"),
        r = om(t, n, oK, e.reportAllChanges);
      oZ(function () {
        var t = oh();
        t &&
          ((n.value = Math.max(t.responseStart - og(), 0)),
          (n.entries = [t]),
          r(!0));
      });
    },
    o0 = {},
    o1 = {};
  function o2(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return at("cls", t, o4, d, e);
  }
  function o3(t, e) {
    var n, r;
    return (
      ae(t, e),
      o1[t] ||
        ((r = {}),
        "event" === (n = t) && (r.durationThreshold = 0),
        o_(
          n,
          function (t) {
            o8(n, { entries: t });
          },
          r,
        ),
        (o1[t] = !0)),
      an(t, e)
    );
  }
  function o8(t, e) {
    var n = o0[t];
    if (null == n ? void 0 : n.length) {
      var r = !0,
        o = !1,
        a = void 0;
      try {
        for (
          var i, c = n[Symbol.iterator]();
          !(r = (i = c.next()).done);
          r = !0
        ) {
          var s = i.value;
          try {
            s(e);
          } catch (e) {
            os &&
              N.error(
                "Error while triggering instrumentation handler.\nType: "
                  .concat(t, "\nName: ")
                  .concat(ee(s), "\nError:"),
                e,
              );
          }
        }
      } catch (t) {
        (o = !0), (a = t);
      } finally {
        try {
          r || null == c.return || c.return();
        } finally {
          if (o) throw a;
        }
      }
    }
  }
  function o4() {
    return oD(
      function (t) {
        o8("cls", { metric: t }), (d = t);
      },
      { reportAllChanges: !0 },
    );
  }
  function o6() {
    return oR(function (t) {
      o8("fid", { metric: t }), (v = t);
    });
  }
  function o5() {
    return oV(
      function (t) {
        o8("lcp", { metric: t }), (y = t);
      },
      { reportAllChanges: !0 },
    );
  }
  function o9() {
    return oQ(function (t) {
      o8("ttfb", { metric: t }), (m = t);
    });
  }
  function o7() {
    return oJ(function (t) {
      o8("inp", { metric: t }), (h = t);
    });
  }
  function at(t, e, n, r) {
    var o,
      a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return (
      ae(t, e),
      o1[t] || ((o = n()), (o1[t] = !0)),
      r && e({ metric: r }),
      an(t, e, a ? o : void 0)
    );
  }
  function ae(t, e) {
    (o0[t] = o0[t] || []), o0[t].push(e);
  }
  function an(t, e, n) {
    return function () {
      n && n();
      var r = o0[t];
      if (r) {
        var o = r.indexOf(e);
        -1 !== o && r.splice(o, 1);
      }
    };
  }
  var ar = (function () {
    var t;
    function e() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      !(function (t, e) {
        if (!(t instanceof e))
          throw TypeError("Cannot call a class as a function");
      })(this, e),
        (this._traceId = t.traceId || tg()),
        (this._spanId = t.spanId || tN());
    }
    return (
      (t = [
        {
          key: "spanContext",
          value: function () {
            return {
              spanId: this._spanId,
              traceId: this._traceId,
              traceFlags: 0,
            };
          },
        },
        { key: "end", value: function (t) {} },
        {
          key: "setAttribute",
          value: function (t, e) {
            return this;
          },
        },
        {
          key: "setAttributes",
          value: function (t) {
            return this;
          },
        },
        {
          key: "setStatus",
          value: function (t) {
            return this;
          },
        },
        {
          key: "updateName",
          value: function (t) {
            return this;
          },
        },
        {
          key: "isRecording",
          value: function () {
            return !1;
          },
        },
        {
          key: "addEvent",
          value: function (t, e, n) {
            return this;
          },
        },
        {
          key: "addLink",
          value: function (t) {
            return this;
          },
        },
        {
          key: "addLinks",
          value: function (t) {
            return this;
          },
        },
        { key: "recordException", value: function (t, e) {} },
      ]),
      (function (t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      })(e.prototype, t),
      e
    );
  })();
  function ao(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function aa(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function ai(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          aa(t, e, n[e]);
        });
    }
    return t;
  }
  var ac = (function () {
    var t;
    function e() {
      var t,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      !(function (t, e) {
        if (!(t instanceof e))
          throw TypeError("Cannot call a class as a function");
      })(this, e),
        (this._traceId = n.traceId || tg()),
        (this._spanId = n.spanId || tN()),
        (this._startTime = n.startTimestamp || tC()),
        (this._links = n.links),
        (this._attributes = {}),
        this.setAttributes(
          ai((aa((t = {}), eM, "manual"), aa(t, eR, n.op), t), n.attributes),
        ),
        (this._name = n.name),
        n.parentSpanId && (this._parentSpanId = n.parentSpanId),
        "sampled" in n && (this._sampled = n.sampled),
        n.endTimestamp && (this._endTime = n.endTimestamp),
        (this._events = []),
        (this._isStandaloneSpan = n.isStandalone),
        this._endTime && this._onSpanEnded();
    }
    return (
      (t = [
        {
          key: "addLink",
          value: function (t) {
            return (
              this._links ? this._links.push(t) : (this._links = [t]), this
            );
          },
        },
        {
          key: "addLinks",
          value: function (t) {
            if (this._links) {
              var e;
              (e = this._links).push.apply(
                e,
                (function (t) {
                  if (Array.isArray(t)) return ao(t);
                })(t) ||
                  (function (t) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != t[Symbol.iterator]) ||
                      null != t["@@iterator"]
                    )
                      return Array.from(t);
                  })(t) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return ao(t, void 0);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      if (
                        ("Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n)
                      )
                        return Array.from(n);
                      if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      )
                        return ao(t, e);
                    }
                  })(t) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })(),
              );
            } else this._links = t;
            return this;
          },
        },
        { key: "recordException", value: function (t, e) {} },
        {
          key: "spanContext",
          value: function () {
            return {
              spanId: this._spanId,
              traceId: this._traceId,
              traceFlags: +!!this._sampled,
            };
          },
        },
        {
          key: "setAttribute",
          value: function (t, e) {
            return (
              void 0 === e
                ? delete this._attributes[t]
                : (this._attributes[t] = e),
              this
            );
          },
        },
        {
          key: "setAttributes",
          value: function (t) {
            var e = this;
            return (
              Object.keys(t).forEach(function (n) {
                return e.setAttribute(n, t[n]);
              }),
              this
            );
          },
        },
        {
          key: "updateStartTime",
          value: function (t) {
            this._startTime = e8(t);
          },
        },
        {
          key: "setStatus",
          value: function (t) {
            return (this._status = t), this;
          },
        },
        {
          key: "updateName",
          value: function (t) {
            return (this._name = t), this.setAttribute(eD, "custom"), this;
          },
        },
        {
          key: "end",
          value: function (t) {
            !this._endTime &&
              ((this._endTime = e8(t)),
              (function (t) {
                if (E) {
                  var e = e6(t),
                    n = e.description,
                    r = e.op,
                    o = t.spanContext().spanId,
                    a = nr(t) === t,
                    i = '[Tracing] Finishing "'
                      .concat(void 0 === r ? "< unknown op >" : r, '" ')
                      .concat(a ? "root " : "", 'span "')
                      .concat(
                        void 0 === n ? "< unknown name >" : n,
                        '" with ID ',
                      )
                      .concat(o);
                  N.log(i);
                }
              })(this),
              this._onSpanEnded());
          },
        },
        {
          key: "getSpanJSON",
          value: function () {
            return {
              data: this._attributes,
              description: this._name,
              op: this._attributes[eR],
              parent_span_id: this._parentSpanId,
              span_id: this._spanId,
              start_timestamp: this._startTime,
              status: e9(this._status),
              timestamp: this._endTime,
              trace_id: this._traceId,
              origin: this._attributes[eM],
              profile_id: this._attributes[eF],
              exclusive_time: this._attributes[eH],
              measurements: oy(this._events),
              is_segment:
                (this._isStandaloneSpan && nr(this) === this) || void 0,
              segment_id: this._isStandaloneSpan
                ? nr(this).spanContext().spanId
                : void 0,
              links: e3(this._links),
            };
          },
        },
        {
          key: "isRecording",
          value: function () {
            return !this._endTime && !!this._sampled;
          },
        },
        {
          key: "addEvent",
          value: function (t, e, n) {
            E && N.log("[Tracing] Adding an event to span:", t);
            var r = as(e) ? e : n || tC(),
              o = as(e) ? {} : e || {},
              a = { name: t, time: e8(r), attributes: o };
            return this._events.push(a), this;
          },
        },
        {
          key: "isStandaloneSpan",
          value: function () {
            return !!this._isStandaloneSpan;
          },
        },
        {
          key: "_onSpanEnded",
          value: function () {
            var t = t2();
            if (
              (t && t.emit("spanEnd", this),
              this._isStandaloneSpan || this === nr(this))
            ) {
              if (this._isStandaloneSpan) {
                this._sampled
                  ? (function (t) {
                      var e = t2();
                      if (e) {
                        var n = t[1];
                        if (!n || 0 === n.length) {
                          e.recordDroppedEvent("before_send", "span");
                          return;
                        }
                        e.sendEnvelope(t);
                      }
                    })(
                      (function (t, e) {
                        var n = nu(t[0]),
                          r = null == e ? void 0 : e.getDsn(),
                          o = null == e ? void 0 : e.getOptions().tunnel,
                          a = nf(
                            { sent_at: new Date().toISOString() },
                            !!n.trace_id && !!n.public_key && { trace: n },
                            !!o && r && { dsn: ef(r) },
                          ),
                          i =
                            null == e ? void 0 : e.getOptions().beforeSendSpan,
                          c = i
                            ? function (t) {
                                var e = e6(t),
                                  n = i(e);
                                return n || (na(), e);
                              }
                            : e6,
                          s = [],
                          u = !0,
                          l = !1,
                          f = void 0;
                        try {
                          for (
                            var p, d = t[Symbol.iterator]();
                            !(u = (p = d.next()).done);
                            u = !0
                          ) {
                            var v = p.value,
                              y = c(v);
                            y && s.push([{ type: "span" }, y]);
                          }
                        } catch (t) {
                          (l = !0), (f = t);
                        } finally {
                          try {
                            u || null == d.return || d.return();
                          } finally {
                            if (l) throw f;
                          }
                        }
                        return eb(a, s);
                      })([this], t),
                    )
                  : (E &&
                      N.log(
                        "[Tracing] Discarding standalone span because its trace was not chosen to be sampled.",
                      ),
                    t && t.recordDroppedEvent("sample_rate", "span"));
                return;
              }
              var e = this._convertSpanToTransaction();
              e && (eZ(this).scope || tQ()).captureEvent(e);
            }
          },
        },
        {
          key: "_convertSpanToTransaction",
          value: function () {
            var t,
              e,
              n,
              r,
              o,
              a,
              i = this;
            if (au(e6(this))) {
              this._name ||
                (E &&
                  N.warn(
                    "Transaction has no name, falling back to `<unlabeled transaction>`.",
                  ),
                (this._name = "<unlabeled transaction>"));
              var c = eZ(this),
                s = c.scope,
                u = c.isolationScope;
              if (!0 === this._sampled) {
                var l = nn(this)
                    .filter(function (t) {
                      var e;
                      return (
                        t !== i &&
                        !((e = t) instanceof ac && e.isStandaloneSpan())
                      );
                    })
                    .map(function (t) {
                      return e6(t);
                    })
                    .filter(au),
                  f = this._attributes[eD];
                delete this._attributes[eq],
                  l.forEach(function (t) {
                    delete t.data[eq];
                  });
                var p = ai(
                    {
                      contexts: {
                        trace:
                          ((e = (t = this.spanContext()).spanId),
                          (n = t.traceId),
                          (o = (r = e6(this)).data),
                          (a = r.op),
                          {
                            parent_span_id: r.parent_span_id,
                            span_id: e,
                            trace_id: n,
                            data: o,
                            op: a,
                            status: r.status,
                            origin: r.origin,
                            links: r.links,
                          }),
                      },
                      spans:
                        l.length > 1e3
                          ? l
                              .sort(function (t, e) {
                                return t.start_timestamp - e.start_timestamp;
                              })
                              .slice(0, 1e3)
                          : l,
                      start_timestamp: this._startTime,
                      timestamp: this._endTime,
                      transaction: this._name,
                      type: "transaction",
                      sdkProcessingMetadata: {
                        capturedSpanScope: s,
                        capturedSpanIsolationScope: u,
                        dynamicSamplingContext: nu(this),
                      },
                    },
                    f && { transaction_info: { source: f } },
                  ),
                  d = oy(this._events);
                return (
                  d &&
                    Object.keys(d).length &&
                    (E &&
                      N.log(
                        "[Measurements] Adding measurements to transaction event",
                        JSON.stringify(d, void 0, 2),
                      ),
                    (p.measurements = d)),
                  p
                );
              }
            }
          },
        },
      ]),
      (function (t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      })(e.prototype, t),
      e
    );
  })();
  function as(t) {
    return (t && "number" == typeof t) || t instanceof Date || Array.isArray(t);
  }
  function au(t) {
    return !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id;
  }
  function al(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function af(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function ap(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          af(t, e, n[e]);
        });
    }
    return t;
  }
  function ad(t, e) {
    return (
      (e = null != e ? e : {}),
      Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : (function (t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              n.push.apply(n, r);
            }
            return n;
          })(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          }),
      t
    );
  }
  var av = "__SENTRY_SUPPRESS_TRACING__";
  function ay(t) {
    var e = tK(T());
    if (e.startInactiveSpan) return e.startInactiveSpan(t);
    var n = (function (t) {
        var e = ap({ isStandalone: (t.experimental || {}).standalone }, t);
        if (t.startTime) {
          var n = ap({}, e);
          return (n.startTimestamp = e8(t.startTime)), delete n.startTime, n;
        }
        return e;
      })(t),
      r = t.forceTransaction,
      o = t.parentSpan;
    return (
      t.scope
        ? function (e) {
            return t1(t.scope, e);
          }
        : void 0 !== o
          ? function (t) {
              return am(o, t);
            }
          : function (t) {
              return t();
            }
    )(function () {
      var e = tQ(),
        o = (function (t) {
          var e = t[tU];
          if (e) {
            var n = t2();
            return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan
              ? nr(e)
              : e;
          }
        })(e);
      return t.onlyIfParent && !o
        ? new ar()
        : (function (t) {
            var e,
              n,
              r = t.parentSpan,
              o = t.spanArguments,
              a = t.forceTransaction,
              i = t.scope;
            if (!eY()) {
              var c = new ar();
              if (a || !r) {
                var s = ap(
                  { sampled: "false", sample_rate: "0", transaction: o.name },
                  nu(c),
                );
                tf(c, ni, s);
              }
              return c;
            }
            var u = t0();
            if (r && !a) {
              (l = r),
                (f = i),
                (p = o),
                (v = (d = l.spanContext()).spanId),
                (y = d.traceId),
                (h = (m = !f.getScopeData().sdkProcessingMetadata[av] && e5(l))
                  ? new ac(
                      ad(ap({}, p), {
                        parentSpanId: v,
                        traceId: y,
                        sampled: m,
                      }),
                    )
                  : new ar({ traceId: y })),
                ne(l, h),
                (g = t2()) &&
                  (g.emit("spanStart", h),
                  p.endTimestamp && g.emit("spanEnd", h)),
                ne(r, (n = h));
            } else if (r) {
              var l,
                f,
                p,
                d,
                v,
                y,
                m,
                h,
                g,
                b,
                _ = nu(r),
                O = r.spanContext(),
                S = O.traceId,
                w = O.spanId,
                j = e5(r);
              tf((n = ah(ap({ traceId: S, parentSpanId: w }, o), i, j)), ni, _);
            } else {
              var k,
                P = ap(
                  {},
                  u.getPropagationContext(),
                  i.getPropagationContext(),
                ),
                T = P.traceId,
                x = P.dsc,
                A = P.parentSpanId,
                I = P.sampled;
              (n = ah(ap({ traceId: T, parentSpanId: A }, o), i, I)),
                x && tf(n, ni, x);
            }
            return (
              !(function (t) {
                if (E) {
                  var e = e6(t),
                    n = e.description,
                    r = e.op,
                    o = e.parent_span_id,
                    a = t.spanContext().spanId,
                    i = e5(t),
                    c = nr(t),
                    s = c === t,
                    u = "[Tracing] Starting "
                      .concat(i ? "sampled" : "unsampled", " ")
                      .concat(s ? "root " : "", "span"),
                    l = [
                      "op: ".concat(void 0 === r ? "< unknown op >" : r),
                      "name: ".concat(void 0 === n ? "< unknown name >" : n),
                      "ID: ".concat(a),
                    ];
                  if ((o && l.push("parent ID: ".concat(o)), !s)) {
                    var f = e6(c),
                      p = f.op,
                      d = f.description;
                    l.push("root ID: ".concat(c.spanContext().spanId)),
                      p && l.push("root op: ".concat(p)),
                      d && l.push("root description: ".concat(d));
                  }
                  N.log("".concat(u, "\n  ").concat(l.join("\n  ")));
                }
              })(n),
              (e = n) && (tf(e, eK, u), tf(e, eV, i)),
              n
            );
          })({
            parentSpan: o,
            spanArguments: n,
            forceTransaction: r,
            scope: e,
          });
    });
  }
  function am(t, e) {
    var n = tK(T());
    return n.withActiveSpan
      ? n.withActiveSpan(t, e)
      : t1(function (n) {
          return tq(n, t || void 0), e(n);
        });
  }
  function ah(t, e, n) {
    var r,
      o,
      a,
      i = t2(),
      c = (null == i ? void 0 : i.getOptions()) || {},
      s = t.name,
      u = t.attributes,
      l = e.getPropagationContext(),
      f =
        (function (t) {
          if (Array.isArray(t)) return t;
        })(
          (r = e.getScopeData().sdkProcessingMetadata[av]
            ? [!1]
            : (function (t, e, n) {
                if (!eY(t)) return [!1];
                var r,
                  o,
                  a,
                  i,
                  c = void 0;
                "function" == typeof t.tracesSampler
                  ? ((i = t.tracesSampler(
                      ((r = (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                          var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(
                                function (t) {
                                  return Object.getOwnPropertyDescriptor(n, t)
                                    .enumerable;
                                },
                              ),
                            )),
                            r.forEach(function (e) {
                              var r;
                              (r = n[e]),
                                e in t
                                  ? Object.defineProperty(t, e, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                    })
                                  : (t[e] = r);
                            });
                        }
                        return t;
                      })({}, e)),
                      (o = o =
                        {
                          inheritOrSampleWith: function (t) {
                            return "number" == typeof e.parentSampleRate
                              ? e.parentSampleRate
                              : "boolean" == typeof e.parentSampled
                                ? Number(e.parentSampled)
                                : t;
                          },
                        }),
                      Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            r,
                            Object.getOwnPropertyDescriptors(o),
                          )
                        : (function (t, e) {
                            var n = Object.keys(t);
                            if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(t);
                              n.push.apply(n, r);
                            }
                            return n;
                          })(Object(o)).forEach(function (t) {
                            Object.defineProperty(
                              r,
                              t,
                              Object.getOwnPropertyDescriptor(o, t),
                            );
                          }),
                      r),
                    )),
                    (c = !0))
                  : void 0 !== e.parentSampled
                    ? (i = e.parentSampled)
                    : void 0 !== t.tracesSampleRate &&
                      ((i = t.tracesSampleRate), (c = !0));
                var s = eQ(i);
                if (void 0 === s)
                  return (
                    E &&
                      N.warn(
                        "[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got "
                          .concat(JSON.stringify(i), " of type ")
                          .concat(
                            JSON.stringify(
                              void 0 === i
                                ? "undefined"
                                : (a = i) &&
                                    "undefined" != typeof Symbol &&
                                    a.constructor === Symbol
                                  ? "symbol"
                                  : typeof a,
                            ),
                            ".",
                          ),
                      ),
                    [!1]
                  );
                if (!s)
                  return (
                    E &&
                      N.log(
                        "[Tracing] Discarding transaction because ".concat(
                          "function" == typeof t.tracesSampler
                            ? "tracesSampler returned 0 or false"
                            : "a negative sampling decision was inherited or tracesSampleRate is set to 0",
                        ),
                      ),
                    [!1, s, c]
                  );
                var u = n < s;
                return (
                  !u &&
                    E &&
                    N.log(
                      "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ".concat(
                        Number(i),
                        ")",
                      ),
                    ),
                  [u, s, c]
                );
              })(
                c,
                {
                  name: void 0 === s ? "" : s,
                  parentSampled: n,
                  attributes: u,
                  parentSampleRate: eQ(
                    null === (o = l.dsc) || void 0 === o
                      ? void 0
                      : o.sample_rate,
                  ),
                },
                l.sampleRand,
              )),
        ) ||
        (function (t, e) {
          var n,
            r,
            o =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
          if (null != o) {
            var a = [],
              i = !0,
              c = !1;
            try {
              for (
                o = o.call(t);
                !(i = (n = o.next()).done) && (a.push(n.value), a.length !== e);
                i = !0
              );
            } catch (t) {
              (c = !0), (r = t);
            } finally {
              try {
                i || null == o.return || o.return();
              } finally {
                if (c) throw r;
              }
            }
            return a;
          }
        })(r, 3) ||
        (function (t, e) {
          if (t) {
            if ("string" == typeof t) return al(t, 3);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ("Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n)
            )
              return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return al(t, e);
          }
        })(r, 3) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })(),
      p = f[0],
      d = f[1],
      v = f[2],
      y = new ac(
        ad(ap({}, t), {
          attributes: ap(
            (af((a = {}), eD, "custom"),
            af(a, eC, void 0 !== d && v ? d : void 0),
            a),
            t.attributes,
          ),
          sampled: p,
        }),
      );
    return (
      !p &&
        i &&
        (E &&
          N.log(
            "[Tracing] Discarding root span because its trace was not chosen to be sampled.",
          ),
        i.recordDroppedEvent("sample_rate", "transaction")),
      i && i.emit("spanStart", y),
      y
    );
  }
  function ag(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function ab() {
    return (ab =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }).apply(this, arguments);
  }
  function a_(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          var r;
          (r = n[e]),
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r);
        });
    }
    return t;
  }
  function aO(t) {
    return "number" == typeof t && isFinite(t);
  }
  function aS(t, e, n, r) {
    var o = ab(
        {},
        (function (t) {
          if (null == t) throw TypeError("Cannot destructure " + t);
          return t;
        })(r),
      ),
      a = e6(t).start_timestamp;
    return (
      a &&
        a > e &&
        "function" == typeof t.updateStartTime &&
        t.updateStartTime(e),
      am(t, function () {
        var t = ay(a_({ startTime: e }, o));
        return t && t.end(n), t;
      })
    );
  }
  function aw(t) {
    var e,
      n,
      r = t2();
    if (r) {
      var o = t.name,
        a = t.transaction,
        i = t.attributes,
        c = t.startTime,
        s = r.getOptions(),
        u = s.release,
        l = s.environment,
        f = s.sendDefaultPii,
        p = r.getIntegrationByName("Replay"),
        d = null == p ? void 0 : p.getReplayId(),
        v = tQ(),
        y = v.getUser(),
        m = void 0 !== y ? y.email || y.id || y.ip_address : void 0;
      try {
        n = v.getScopeData().contexts.profile.profile_id;
      } catch (t) {}
      return ay({
        name: o,
        attributes: a_(
          {
            release: u,
            environment: l,
            user: m || void 0,
            profile_id: n || void 0,
            replay_id: d || void 0,
            transaction: a,
            "user_agent.original":
              null === (e = P.navigator) || void 0 === e ? void 0 : e.userAgent,
            "client.address": f ? "{{auto}}" : void 0,
          },
          i,
        ),
        startTime: c,
        experimental: { standalone: !0 },
      });
    }
  }
  function aj() {
    return P.addEventListener && P.performance;
  }
  function aE(t) {
    return t / 1e3;
  }
  function ak(t) {
    var e = "unknown",
      n = "unknown",
      r = "",
      o = !0,
      a = !1,
      i = void 0;
    try {
      for (
        var c, s = t[Symbol.iterator]();
        !(o = (c = s.next()).done);
        o = !0
      ) {
        var u,
          l,
          f = c.value;
        if ("/" === f) {
          (u = t.split("/")),
            (e = (l =
              (function (t) {
                if (Array.isArray(t)) return t;
              })(u) ||
              (function (t, e) {
                var n,
                  r,
                  o =
                    null == t
                      ? null
                      : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                if (null != o) {
                  var a = [],
                    i = !0,
                    c = !1;
                  try {
                    for (
                      o = o.call(t);
                      !(i = (n = o.next()).done) &&
                      (a.push(n.value), a.length !== e);
                      i = !0
                    );
                  } catch (t) {
                    (c = !0), (r = t);
                  } finally {
                    try {
                      i || null == o.return || o.return();
                    } finally {
                      if (c) throw r;
                    }
                  }
                  return a;
                }
              })(u, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return ag(t, 2);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === n &&
                      t.constructor &&
                      (n = t.constructor.name),
                    "Map" === n || "Set" === n)
                  )
                    return Array.from(n);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return ag(t, e);
                }
              })(u, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              })())[0]),
            (n = l[1]);
          break;
        }
        if (!isNaN(Number(f))) {
          (e = "h" === r ? "http" : r), (n = t.split(r)[1]);
          break;
        }
        r += f;
      }
    } catch (t) {
      (a = !0), (i = t);
    } finally {
      try {
        o || null == s.return || s.return();
      } finally {
        if (a) throw i;
      }
    }
    return r === t && (e = r), { name: e, version: n };
  }
  function aP(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function aT(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function ax(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  var aA = 0,
    aI = {};
  function aD(t, e, n, r) {
    var o,
      a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : n,
      i =
        e[
          "secureConnection" === (o = n)
            ? "connectEnd"
            : "fetch" === o
              ? "domainLookupStart"
              : "".concat(o, "End")
        ],
      c = e["".concat(n, "Start")];
    c &&
      i &&
      aS(t, r + aE(c), r + aE(i), {
        op: "browser.".concat(a),
        name: e.name,
        attributes: (function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
              )),
              r.forEach(function (e) {
                ax(t, e, n[e]);
              });
          }
          return t;
        })(
          ax({}, eM, "auto.ui.browser.metrics"),
          "redirect" === n && null != e.redirectCount
            ? { "http.redirect_count": e.redirectCount }
            : {},
        ),
      });
  }
  function aC(t, e, n, r) {
    var o = e[n];
    null != o && o < 0x7fffffff && (t[r] = o);
  }
  function aR(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  var aM = [],
    aN = new Map(),
    aL = {
      click: "click",
      pointerdown: "click",
      pointerup: "click",
      mousedown: "click",
      mouseup: "click",
      touchstart: "click",
      touchend: "click",
      mouseover: "hover",
      mouseout: "hover",
      mouseenter: "hover",
      mouseleave: "hover",
      pointerover: "hover",
      pointerout: "hover",
      pointerenter: "hover",
      pointerleave: "hover",
      dragstart: "drag",
      dragend: "drag",
      drag: "drag",
      dragenter: "drag",
      dragleave: "drag",
      dragover: "drag",
      drop: "drag",
      keydown: "press",
      keyup: "press",
      keypress: "press",
      input: "press",
    };
  function aU(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function aq(t) {
    if (
      ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
      null != t["@@iterator"]
    )
      return Array.from(t);
  }
  function aF(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return aU(t);
      })(t) ||
      aq(t) ||
      aH(t) ||
      (function () {
        throw TypeError(
          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function aH(t, e) {
    if (t) {
      if ("string" == typeof t) return aU(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      if (
        ("Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n)
      )
        return Array.from(n);
      if (
        "Arguments" === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return aU(t, e);
    }
  }
  var aB = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 };
  function a$(t) {
    var e,
      n,
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      o = new Map(),
      a = !1,
      i = "externalFinish",
      c = !r.disableAutoFinish,
      s = [],
      u = r.idleTimeout,
      l = void 0 === u ? aB.idleTimeout : u,
      f = r.finalTimeout,
      p = void 0 === f ? aB.finalTimeout : f,
      d = r.childSpanTimeout,
      v = void 0 === d ? aB.childSpanTimeout : d,
      y = r.beforeSpanEnd,
      m = t2();
    if (!m || !eY()) {
      var h = new ar(),
        g = (function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
              )),
              r.forEach(function (e) {
                var r;
                (r = n[e]),
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = r);
              });
          }
          return t;
        })({ sample_rate: "0", sampled: "false" }, nu(h));
      return tf(h, ni, g), h;
    }
    var b = tQ(),
      _ = no(),
      O =
        ((e = ay(t)),
        tq(tQ(), e),
        E && N.log("[Tracing] Started span is an idle span"),
        e);
    function S() {
      n && (clearTimeout(n), (n = void 0));
    }
    function w(t) {
      S(),
        (n = setTimeout(function () {
          !a && 0 === o.size && c && ((i = "idleTimeout"), O.end(t));
        }, l));
    }
    function j(t) {
      n = setTimeout(function () {
        !a && c && ((i = "heartbeatFailed"), O.end(t));
      }, v);
    }
    function k(t) {
      (a = !0),
        o.clear(),
        s.forEach(function (t) {
          return t();
        }),
        tq(b, _);
      var e = e6(O);
      if (e.start_timestamp) {
        e.data[eN] || O.setAttribute(eN, i),
          N.log('[Tracing] Idle span "'.concat(e.op, '" finished'));
        var n = nn(O).filter(function (t) {
            return t !== O;
          }),
          r = 0;
        n.forEach(function (e) {
          e.isRecording() &&
            (e.setStatus({ code: 2, message: "cancelled" }),
            e.end(t),
            E &&
              N.log(
                "[Tracing] Cancelling span since span ended early",
                JSON.stringify(e, void 0, 2),
              ));
          var n = e6(e),
            o = n.timestamp,
            a = n.start_timestamp,
            i = void 0 === a ? 0 : a,
            c = i <= t,
            s = (void 0 === o ? 0 : o) - i <= (p + l) / 1e3;
          if (E) {
            var u = JSON.stringify(e, void 0, 2);
            c
              ? s ||
                N.log(
                  "[Tracing] Discarding span since it finished after idle span final timeout",
                  u,
                )
              : N.log(
                  "[Tracing] Discarding span since it happened after idle span was finished",
                  u,
                );
          }
          (!s || !c) && (O[e7] && O[e7].delete(e), r++);
        }),
          r > 0 && O.setAttribute("sentry.idle_span_discarded_spans", r);
      }
    }
    return (
      (O.end = new Proxy(O.end, {
        apply: function (t, e, n) {
          if ((y && y(O), !(e instanceof ar))) {
            var r,
              o =
                (function (t) {
                  if (Array.isArray(t)) return t;
                })(n) ||
                aq(n) ||
                aH(n) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })(),
              a = o[0],
              i = o.slice(1),
              c = e8(a || tC()),
              s = nn(O).filter(function (t) {
                return t !== O;
              });
            if (!s.length) return k(c), Reflect.apply(t, e, [c].concat(aF(i)));
            var u = s
                .map(function (t) {
                  return e6(t).timestamp;
                })
                .filter(function (t) {
                  return !!t;
                }),
              l = u.length ? (r = Math).max.apply(r, aF(u)) : void 0,
              f = e6(O).start_timestamp,
              d = Math.min(
                f ? f + p / 1e3 : 1 / 0,
                Math.max(f || -1 / 0, Math.min(c, l || 1 / 0)),
              );
            return k(d), Reflect.apply(t, e, [d].concat(aF(i)));
          }
        },
      })),
      s.push(
        m.on("spanStart", function (t) {
          if (!a && t !== O && !e6(t).timestamp && nn(O).includes(t)) {
            var e;
            (e = t.spanContext().spanId), S(), o.set(e, !0), j(tC() + v / 1e3);
          }
        }),
      ),
      s.push(
        m.on("spanEnd", function (t) {
          var e;
          !a &&
            ((e = t.spanContext().spanId),
            o.has(e) && o.delete(e),
            0 === o.size && w(tC() + l / 1e3));
        }),
      ),
      s.push(
        m.on("idleSpanEnableAutoFinish", function (t) {
          t === O && ((c = !0), w(), o.size && j());
        }),
      ),
      r.disableAutoFinish || w(),
      setTimeout(function () {
        a ||
          (O.setStatus({ code: 2, message: "deadline_exceeded" }),
          (i = "finalTimeout"),
          O.end());
      }, p),
      O
    );
  }
  var az = !1;
  function aW() {
    var t = no(),
      e = t && nr(t);
    if (e) {
      var n = "internal_error";
      E &&
        N.log("[Tracing] Root span: ".concat(n, " -> Global error occurred")),
        e.setStatus({ code: 2, message: n });
    }
  }
  function aG() {
    var t,
      e,
      n,
      r,
      o,
      a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      i = t2();
    if (
      !(
        (null == (r = t2()) ? void 0 : r.getOptions().enabled) !== !1 &&
        (null == r ? void 0 : r.getTransport())
      ) ||
      !i
    )
      return {};
    var c = tK(T());
    if (c.getTraceData) return c.getTraceData(a);
    var s = tQ(),
      u = a.span || no(),
      l = u
        ? e1((o = u.spanContext()).traceId, o.spanId, e5(u))
        : ((e = (t = s.getPropagationContext()).traceId),
          (n = t.sampled),
          e1(e, t.propagationSpanId, n)),
      f = (function (t) {
        if (t)
          return (function (t) {
            if (0 !== Object.keys(t).length)
              return Object.entries(t).reduce(function (t, e, n) {
                var r = e$(e, 2),
                  o = r[0],
                  a = r[1],
                  i = ""
                    .concat(encodeURIComponent(o), "=")
                    .concat(encodeURIComponent(a)),
                  c = 0 === n ? i : "".concat(t, ",").concat(i);
                return c.length > 8192
                  ? (I &&
                      N.warn(
                        "Not adding key: "
                          .concat(o, " with val: ")
                          .concat(
                            a,
                            " to baggage header due to exceeding baggage size limits.",
                          ),
                      ),
                    t)
                  : c;
              }, "");
          })(
            Object.entries(t).reduce(function (t, e) {
              var n = e$(e, 2),
                r = n[0],
                o = n[1];
              return o && (t["".concat(ez).concat(r)] = o), t;
            }, {}),
          );
      })(u ? nu(u) : ns(i, s));
    return e0.test(l)
      ? { "sentry-trace": l, baggage: f }
      : (N.warn("Invalid sentry-trace data. Cannot generate trace data"), {});
  }
  function aJ(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function aY(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function aX(t) {
    if (
      ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
      null != t["@@iterator"]
    )
      return Array.from(t);
  }
  function aV(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          aY(t, e, n[e]);
        });
    }
    return t;
  }
  function aK(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return aJ(t);
      })(t) ||
      aX(t) ||
      aZ(t) ||
      (function () {
        throw TypeError(
          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function aZ(t, e) {
    if (t) {
      if ("string" == typeof t) return aJ(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      if (
        ("Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n)
      )
        return Array.from(n);
      if (
        "Arguments" === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return aJ(t, e);
    }
  }
  function aQ(t) {
    return t
      .split(",")
      .filter(function (t) {
        return !t.split("=")[0].startsWith(ez);
      })
      .join(",");
  }
  function a0(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function a1(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function a2(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          a1(t, e, n[e]);
        });
    }
    return t;
  }
  function a3(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return a0(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      (function (t, e) {
        if (t) {
          if ("string" == typeof t) return a0(t, void 0);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return a0(t, e);
        }
      })(t) ||
      (function () {
        throw TypeError(
          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  aW.tag = "sentry_tracingErrorCallback";
  var a8 = new WeakMap(),
    a4 = new Map(),
    a6 = {
      traceFetch: !0,
      traceXHR: !0,
      enableHTTPTimings: !0,
      trackFetchStreamPerformance: !1,
    };
  function a5(t) {
    var e = e6(t).data.url;
    if (e && "string" == typeof e)
      var n = o3("resource", function (r) {
        r.entries.forEach(function (r) {
          if (
            "resource" === r.entryType &&
            "initiatorType" in r &&
            "string" == typeof r.nextHopProtocol &&
            ("fetch" === r.initiatorType ||
              "xmlhttprequest" === r.initiatorType) &&
            r.name.endsWith(e)
          ) {
            var o, a, i, c, s;
            ((i = (a = ak((o = r).nextHopProtocol)).name),
            (c = a.version),
            ((s = []).push(
              ["network.protocol.version", c],
              ["network.protocol.name", i],
            ),
            tR())
              ? a3(s).concat([
                  ["http.request.redirect_start", a9(o.redirectStart)],
                  ["http.request.fetch_start", a9(o.fetchStart)],
                  ["http.request.domain_lookup_start", a9(o.domainLookupStart)],
                  ["http.request.domain_lookup_end", a9(o.domainLookupEnd)],
                  ["http.request.connect_start", a9(o.connectStart)],
                  [
                    "http.request.secure_connection_start",
                    a9(o.secureConnectionStart),
                  ],
                  ["http.request.connection_end", a9(o.connectEnd)],
                  ["http.request.request_start", a9(o.requestStart)],
                  ["http.request.response_start", a9(o.responseStart)],
                  ["http.request.response_end", a9(o.responseEnd)],
                ])
              : s).forEach(function (e) {
              return t.setAttribute.apply(t, a3(e));
            }),
              setTimeout(n);
          }
        });
      });
  }
  function a9() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return ((tR() || performance.timeOrigin) + t) / 1e3;
  }
  function a7(t) {
    try {
      return new URL(t, P.location.origin).href;
    } catch (t) {
      return;
    }
  }
  function it(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  var ie = "sentry_previous_trace";
  function ir(t, e) {
    var n = e6(e);
    if (!t)
      return {
        spanContext: e.spanContext(),
        startTimestamp: n.start_timestamp,
      };
    var r = t.spanContext;
    return r.traceId === n.trace_id
      ? t
      : (Date.now() / 1e3 - t.startTimestamp <= 3600 &&
          (rt &&
            N.info(
              "Adding previous_trace ".concat(r, " link to span ").concat(
                (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                      r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                          return Object.getOwnPropertyDescriptor(n, t)
                            .enumerable;
                        }),
                      )),
                      r.forEach(function (e) {
                        it(t, e, n[e]);
                      });
                  }
                  return t;
                })({ op: n.op }, e.spanContext()),
              ),
            ),
          e.addLink({
            context: r,
            attributes: it({}, "sentry.link.type", "previous_trace"),
          }),
          e.setAttribute(
            "sentry.previous_trace",
            ""
              .concat(r.traceId, "-")
              .concat(r.spanId, "-")
              .concat(+(1 === r.traceFlags)),
          )),
        {
          spanContext: e.spanContext(),
          startTimestamp: e6(e).start_timestamp,
        });
  }
  function io(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function ia(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        r.forEach(function (e) {
          io(t, e, n[e]);
        });
    }
    return t;
  }
  function ii(t, e) {
    return (
      (e = null != e ? e : {}),
      Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : (function (t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              n.push.apply(n, r);
            }
            return n;
          })(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          }),
      t
    );
  }
  var ic = ia(
      ii(ia({}, aB), {
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !0,
        enableInp: !0,
        linkPreviousTrace: "in-memory",
        _experiments: {},
      }),
      a6,
    ),
    is = !1;
  function iu(t) {
    var e = P.document,
      n = null == e ? void 0 : e.querySelector("meta[name=".concat(t, "]"));
    return (null == n ? void 0 : n.getAttribute("content")) || void 0;
  }
  var il = "_sentry_idleSpan";
  function ip(t) {
    return t[il];
  }
  var id = document.querySelector('meta[name="sentry-meta"]'),
    iv =
      null !== (_ = null == id ? void 0 : id.dataset) && void 0 !== _ ? _ : {},
    iy = iv.dsn,
    im = iv.envName,
    ih = iv.sampleRate;
  !(function () {
    var t,
      e,
      n,
      o,
      a,
      i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      c = (function () {
        var t,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return od(
          {},
          {
            defaultIntegrations: [
              tx(),
              {
                name: "FunctionToString",
                setupOnce: function () {
                  r = Function.prototype.toString;
                  try {
                    Function.prototype.toString = function () {
                      for (
                        var t = arguments.length, e = Array(t), n = 0;
                        n < t;
                        n++
                      )
                        e[n] = arguments[n];
                      var o = td(this),
                        a = t3.has(t2()) && void 0 !== o ? o : this;
                      return r.apply(a, e);
                    };
                  } catch (t) {}
                },
                setup: function (t) {
                  t3.set(t, !0);
                },
              },
              rL(),
              rM(),
              rY(),
              r8(),
              er(),
              {
                name: "HttpContext",
                preprocessEvent: function (t) {
                  if (P.navigator || P.location || P.document) {
                    var e,
                      n,
                      r,
                      o,
                      a =
                        (null === (r = t.request) || void 0 === r
                          ? void 0
                          : r.url) || to(),
                      i = (P.document || {}).referrer,
                      c = (P.navigator || {}).userAgent,
                      s = rK(
                        {},
                        null === (o = t.request) || void 0 === o
                          ? void 0
                          : o.headers,
                        i && { Referer: i },
                        c && { "User-Agent": c },
                      ),
                      u =
                        ((e = rK({}, t.request, a && { url: a })),
                        (n = n = { headers: s }),
                        Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n),
                            )
                          : (function (t, e) {
                              var n = Object.keys(t);
                              if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(t);
                                n.push.apply(n, r);
                              }
                              return n;
                            })(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t),
                              );
                            }),
                        e);
                    t.request = u;
                  }
                },
              },
              {
                name: "BrowserSession",
                setupOnce: function () {
                  if (void 0 === P.document) {
                    rt &&
                      N.warn(
                        "Using the `browserSessionIntegration` in non-browser environments is not supported.",
                      );
                    return;
                  }
                  nQ({ ignoreDuration: !0 }),
                    n2(),
                    rp(function (t) {
                      var e = t.from,
                        n = t.to;
                      void 0 !== e &&
                        e !== n &&
                        (nQ({ ignoreDuration: !0 }), n2());
                    });
                },
              },
            ],
            release:
              "string" == typeof __SENTRY_RELEASE__
                ? __SENTRY_RELEASE__
                : null === (t = P.SENTRY_RELEASE) || void 0 === t
                  ? void 0
                  : t.id,
            sendClientReports: !0,
          },
          (function (t) {
            var e = {},
              n = !0,
              r = !1,
              o = void 0;
            try {
              for (
                var a, i = Object.getOwnPropertyNames(t)[Symbol.iterator]();
                !(n = (a = i.next()).done);
                n = !0
              ) {
                var c = a.value;
                void 0 !== t[c] && (e[c] = t[c]);
              }
            } catch (t) {
              (r = !0), (o = t);
            } finally {
              try {
                n || null == i.return || i.return();
              } finally {
                if (r) throw o;
              }
            }
            return e;
          })(e),
        );
      })(i);
    if (
      !c.skipBrowserExtensionCheck &&
      (function () {
        var t,
          e = void 0 !== P.window && P;
        if (!e) return !1;
        var n = e.chrome ? "chrome" : "browser",
          r = e[n],
          o =
            null == r
              ? void 0
              : null === (t = r.runtime) || void 0 === t
                ? void 0
                : t.id,
          a = to() || "",
          i =
            !!o &&
            P === P.top &&
            [
              "chrome-extension:",
              "moz-extension:",
              "ms-browser-extension:",
              "safari-web-extension:",
            ].some(function (t) {
              return a.startsWith("".concat(t, "//"));
            }),
          c = void 0 !== e.nw;
        return !!o && !i && !c;
      })()
    ) {
      rt &&
        M(function () {
          console.error(
            "[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
          );
        });
      return;
    }
    rt &&
      !ec() &&
      N.warn(
        "No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.",
      );
    var s =
      ((n = od({}, c)),
      (o = o =
        {
          stackParser: Array.isArray((e = c.stackParser || oi))
            ? t9.apply(void 0, t4(e))
            : e,
          integrations: (function (t) {
            var e,
              n,
              r = t.defaultIntegrations || [],
              o = t.integrations;
            if (
              (r.forEach(function (t) {
                t.isDefaultInstance = !0;
              }),
              Array.isArray(o))
            )
              n = U(r).concat(U(o));
            else if ("function" == typeof o) {
              var a = o(r);
              n = Array.isArray(a) ? a : [a];
            } else n = r;
            return (
              (e = {}),
              n.forEach(function (t) {
                var n = t.name,
                  r = e[n];
                (!r || r.isDefaultInstance || !t.isDefaultInstance) &&
                  (e[n] = t);
              }),
              Object.values(e)
            );
          })(c),
          transport: c.transport || op,
        }),
      Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
        : (function (t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              n.push.apply(n, r);
            }
            return n;
          })(Object(o)).forEach(function (t) {
            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(o, t));
          }),
      n);
    !0 === s.debug &&
      (E
        ? N.enable()
        : M(function () {
            console.warn(
              "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
            );
          })),
      tQ().update(s.initialScope),
      (t = a = new n7(s)),
      tQ().setClient(t),
      a.init();
  })({
    dsn:
      null != iy
        ? iy
        : "https://24df60727c94bd0aa14ab1269d104a21@o293668.ingest.us.sentry.io/4509158985826304",
    integrations: [
      (function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = function (t, e) {
            var r = "pageload" === e.op,
              o = l ? l(e) : e,
              a = o.attributes || {};
            e.name !== o.name && ((a[eD] = "custom"), (o.attributes = a)),
              (C.name = o.name),
              (C.source = a[eD]);
            var i = a$(o, {
              idleTimeout: f,
              finalTimeout: p,
              childSpanTimeout: d,
              disableAutoFinish: r,
              beforeSpanEnd: function (e) {
                D(),
                  (function (t, e) {
                    var n = aj(),
                      r = tR();
                    if ((null == n ? void 0 : n.getEntries) && r) {
                      var o = aE(r),
                        a = n.getEntries(),
                        i = e6(t),
                        c = i.op,
                        s = i.start_timestamp;
                      if (
                        (a.slice(aA).forEach(function (e) {
                          var n = aE(e.startTime),
                            r = aE(Math.max(0, e.duration));
                          if ("navigation" !== c || !s || !(o + n < s))
                            switch (e.entryType) {
                              case "navigation":
                                (a = t),
                                  (i = e),
                                  (u = o),
                                  [
                                    "unloadEvent",
                                    "redirect",
                                    "domContentLoadedEvent",
                                    "loadEvent",
                                    "connect",
                                  ].forEach(function (t) {
                                    aD(a, i, t, u);
                                  }),
                                  aD(a, i, "secureConnection", u, "TLS/SSL"),
                                  aD(a, i, "fetch", u, "cache"),
                                  aD(a, i, "domainLookup", u, "DNS"),
                                  (l = a),
                                  (f = i),
                                  (d = (p = u) + aE(f.requestStart)),
                                  (v = p + aE(f.responseEnd)),
                                  (y = p + aE(f.responseStart)),
                                  f.responseEnd &&
                                    (aS(l, d, v, {
                                      op: "browser.request",
                                      name: f.name,
                                      attributes: ax(
                                        {},
                                        eM,
                                        "auto.ui.browser.metrics",
                                      ),
                                    }),
                                    aS(l, y, v, {
                                      op: "browser.response",
                                      name: f.name,
                                      attributes: ax(
                                        {},
                                        eM,
                                        "auto.ui.browser.metrics",
                                      ),
                                    }));
                                break;
                              case "mark":
                              case "paint":
                              case "measure":
                                (m = t),
                                  (h = e),
                                  (g = n),
                                  (b = r),
                                  (S =
                                    (_ = o) +
                                    Math.max(
                                      g,
                                      aE((O = oh(!1)) ? O.requestStart : 0),
                                    )),
                                  (j = (w = _ + g) + b),
                                  (E = ax(
                                    {},
                                    eM,
                                    "auto.resource.browser.metrics",
                                  )),
                                  S !== w &&
                                    ((E[
                                      "sentry.browser.measure_happened_before_request"
                                    ] = !0),
                                    (E["sentry.browser.measure_start_time"] =
                                      S)),
                                  S <= j &&
                                    aS(m, S, j, {
                                      name: h.name,
                                      op: h.entryType,
                                      attributes: E,
                                    });
                                var a,
                                  i,
                                  u,
                                  l,
                                  f,
                                  p,
                                  d,
                                  v,
                                  y,
                                  m,
                                  h,
                                  g,
                                  b,
                                  _,
                                  O,
                                  S,
                                  w,
                                  j,
                                  E,
                                  k = oP(),
                                  T = e.startTime < k.firstHiddenTime;
                                "first-paint" === e.name &&
                                  T &&
                                  (aI.fp = {
                                    value: e.startTime,
                                    unit: "millisecond",
                                  }),
                                  "first-contentful-paint" === e.name &&
                                    T &&
                                    (aI.fcp = {
                                      value: e.startTime,
                                      unit: "millisecond",
                                    });
                                break;
                              case "resource":
                                (function (t, e, n, r, o, a) {
                                  if (
                                    "xmlhttprequest" !== e.initiatorType &&
                                    "fetch" !== e.initiatorType
                                  ) {
                                    var i = rD(n),
                                      c = ax(
                                        {},
                                        eM,
                                        "auto.resource.browser.metrics",
                                      );
                                    aC(
                                      c,
                                      e,
                                      "transferSize",
                                      "http.response_transfer_size",
                                    ),
                                      aC(
                                        c,
                                        e,
                                        "encodedBodySize",
                                        "http.response_content_length",
                                      ),
                                      aC(
                                        c,
                                        e,
                                        "decodedBodySize",
                                        "http.decoded_response_content_length",
                                      );
                                    var s = e.deliveryType;
                                    null != s &&
                                      (c["http.response_delivery_type"] = s);
                                    var u = e.renderBlockingStatus;
                                    u &&
                                      (c["resource.render_blocking_status"] =
                                        u),
                                      i.protocol &&
                                        (c["url.scheme"] = i.protocol
                                          .split(":")
                                          .pop()),
                                      i.host && (c["server.address"] = i.host),
                                      (c["url.same_origin"] = n.includes(
                                        P.location.origin,
                                      ));
                                    var l = ak(e.nextHopProtocol),
                                      f = l.name,
                                      p = l.version;
                                    (c["network.protocol.name"] = f),
                                      (c["network.protocol.version"] = p);
                                    var d = a + r;
                                    aS(t, d, d + o, {
                                      name: n.replace(P.location.origin, ""),
                                      op: e.initiatorType
                                        ? "resource.".concat(e.initiatorType)
                                        : "resource.other",
                                      attributes: c,
                                    });
                                  }
                                })(t, e, e.name, n, r, o);
                            }
                        }),
                        (aA = Math.max(a.length - 1, 0)),
                        (function (t) {
                          var e = P.navigator;
                          if (e) {
                            var n = e.connection;
                            n &&
                              (n.effectiveType &&
                                t.setAttribute(
                                  "effectiveConnectionType",
                                  n.effectiveType,
                                ),
                              n.type &&
                                t.setAttribute("connectionType", n.type),
                              aO(n.rtt) &&
                                (aI["connection.rtt"] = {
                                  value: n.rtt,
                                  unit: "millisecond",
                                })),
                              aO(e.deviceMemory) &&
                                t.setAttribute(
                                  "deviceMemory",
                                  "".concat(e.deviceMemory, " GB"),
                                ),
                              aO(e.hardwareConcurrency) &&
                                t.setAttribute(
                                  "hardwareConcurrency",
                                  String(e.hardwareConcurrency),
                                );
                          }
                        })(t),
                        "pageload" === c)
                      ) {
                        (function (t) {
                          var e = oh(!1);
                          if (e) {
                            var n = e.responseStart,
                              r = e.requestStart;
                            r <= n &&
                              (t["ttfb.requestTime"] = {
                                value: n - r,
                                unit: "millisecond",
                              });
                          }
                        })(aI);
                        var u,
                          l = aI["mark.fid"];
                        l &&
                          aI.fid &&
                          (aS(t, l.value, l.value + aE(aI.fid.value), {
                            name: "first input delay",
                            op: "ui.action",
                            attributes: ax({}, eM, "auto.ui.browser.metrics"),
                          }),
                          delete aI["mark.fid"]),
                          ("fcp" in aI && e.recordClsOnPageloadSpan) ||
                            delete aI.cls,
                          Object.entries(aI).forEach(function (t) {
                            var e =
                                (function (t) {
                                  if (Array.isArray(t)) return t;
                                })(t) ||
                                (function (t, e) {
                                  var n,
                                    r,
                                    o =
                                      null == t
                                        ? null
                                        : ("undefined" != typeof Symbol &&
                                            t[Symbol.iterator]) ||
                                          t["@@iterator"];
                                  if (null != o) {
                                    var a = [],
                                      i = !0,
                                      c = !1;
                                    try {
                                      for (
                                        o = o.call(t);
                                        !(i = (n = o.next()).done) &&
                                        (a.push(n.value), a.length !== e);
                                        i = !0
                                      );
                                    } catch (t) {
                                      (c = !0), (r = t);
                                    } finally {
                                      try {
                                        i || null == o.return || o.return();
                                      } finally {
                                        if (c) throw r;
                                      }
                                    }
                                    return a;
                                  }
                                })(t, 2) ||
                                (function (t, e) {
                                  if (t) {
                                    if ("string" == typeof t) return aT(t, 2);
                                    var n = Object.prototype.toString
                                      .call(t)
                                      .slice(8, -1);
                                    if (
                                      ("Object" === n &&
                                        t.constructor &&
                                        (n = t.constructor.name),
                                      "Map" === n || "Set" === n)
                                    )
                                      return Array.from(n);
                                    if (
                                      "Arguments" === n ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        n,
                                      )
                                    )
                                      return aT(t, e);
                                  }
                                })(t, 2) ||
                                (function () {
                                  throw TypeError(
                                    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                  );
                                })(),
                              n = e[0],
                              r = e[1];
                            !(function (t, e, n) {
                              var r,
                                o =
                                  arguments.length > 3 &&
                                  void 0 !== arguments[3]
                                    ? arguments[3]
                                    : no(),
                                a = o && nr(o);
                              a &&
                                (E &&
                                  N.log(
                                    "[Measurement] Setting measurement on root span: "
                                      .concat(t, " = ")
                                      .concat(e, " ")
                                      .concat(n),
                                  ),
                                a.addEvent(
                                  t,
                                  (ov((r = {}), eU, e), ov(r, eL, n), r),
                                ));
                            })(n, r.value, r.unit);
                          }),
                          t.setAttribute("performance.timeOrigin", o),
                          t.setAttribute("performance.activationStart", og()),
                          (u = t),
                          g &&
                            (g.element &&
                              u.setAttribute("lcp.element", tr(g.element)),
                            g.id && u.setAttribute("lcp.id", g.id),
                            g.url &&
                              u.setAttribute(
                                "lcp.url",
                                g.url.trim().slice(0, 200),
                              ),
                            null != g.loadTime &&
                              u.setAttribute("lcp.loadTime", g.loadTime),
                            null != g.renderTime &&
                              u.setAttribute("lcp.renderTime", g.renderTime),
                            u.setAttribute("lcp.size", g.size)),
                          (null == b ? void 0 : b.sources) &&
                            b.sources.forEach(function (t, e) {
                              return u.setAttribute(
                                "cls.source.".concat(e + 1),
                                tr(t.node),
                              );
                            });
                      }
                      (g = void 0), (b = void 0), (aI = {});
                    }
                  })(e, { recordClsOnPageloadSpan: !u }),
                  tf(t, il, void 0);
                var n = tQ(),
                  r = n.getPropagationContext();
                n.setPropagationContext(
                  ii(ia({}, r), {
                    traceId: i.spanContext().traceId,
                    sampled: e5(i),
                    dsc: nu(e),
                  }),
                );
              },
            });
            function c() {
              n &&
                ["interactive", "complete"].includes(n.readyState) &&
                t.emit("idleSpanEnableAutoFinish", i);
            }
            tf(t, il, i),
              r &&
                n &&
                (n.addEventListener("readystatechange", function () {
                  c();
                }),
                c());
          };
        is &&
          M(function () {
            console.warn(
              "Multiple browserTracingIntegration instances are not supported.",
            );
          }),
          (is = !0);
        var n = P.document;
        az || ((az = !0), r$(aW), rG(aW));
        var r = ia({}, ic, t),
          o = r.enableInp,
          a = r.enableLongTask,
          i = r.enableLongAnimationFrame,
          c = r._experiments,
          s = c.enableInteractions,
          u = c.enableStandaloneClsSpans,
          l = r.beforeStartSpan,
          f = r.idleTimeout,
          p = r.finalTimeout,
          d = r.childSpanTimeout,
          _ = r.markBackgroundSpan,
          O = r.traceFetch,
          S = r.traceXHR,
          w = r.trackFetchStreamPerformance,
          j = r.shouldCreateSpanForRequest,
          k = r.enableHTTPTimings,
          T = r.instrumentPageLoad,
          x = r.instrumentNavigation,
          A = r.linkPreviousTrace,
          I = r.onRequestSpanStart,
          D = (function (t) {
            var e = t.recordClsStandaloneSpans,
              n = aj();
            if (n && tR()) {
              n.mark && P.performance.mark("sentry-tracing-init");
              var r = at(
                  "fid",
                  function (t) {
                    var e = t.metric,
                      n = e.entries[e.entries.length - 1];
                    if (n) {
                      var r = aE(tR()),
                        o = aE(n.startTime);
                      (aI.fid = { value: e.value, unit: "millisecond" }),
                        (aI["mark.fid"] = { value: r + o, unit: "second" });
                    }
                  },
                  o6,
                  v,
                ),
                o = (function (t) {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  return at("lcp", t, o5, y, e);
                })(function (t) {
                  var e = t.metric,
                    n = e.entries[e.entries.length - 1];
                  n &&
                    ((aI.lcp = { value: e.value, unit: "millisecond" }),
                    (g = n));
                }, !0),
                a = at(
                  "ttfb",
                  function (t) {
                    var e = t.metric;
                    e.entries[e.entries.length - 1] &&
                      (aI.ttfb = { value: e.value, unit: "millisecond" });
                  },
                  o9,
                  m,
                ),
                i = e
                  ? (function () {
                      var t,
                        e,
                        n = 0;
                      if (
                        (function () {
                          try {
                            return PerformanceObserver.supportedEntryTypes.includes(
                              "layout-shift",
                            );
                          } catch (t) {
                            return !1;
                          }
                        })()
                      ) {
                        var r = !1,
                          o = o2(function (e) {
                            var r = e.metric,
                              o = r.entries[r.entries.length - 1];
                            o && ((n = r.value), (t = o));
                          }, !0);
                        oO(function () {
                          a();
                        }),
                          setTimeout(function () {
                            var t = t2();
                            if (t) {
                              var n = t.on("startNavigationSpan", function () {
                                  a(), null == n || n();
                                }),
                                r = no();
                              if (r) {
                                var o = nr(r);
                                "pageload" === e6(o).op &&
                                  (e = o.spanContext().spanId);
                              }
                            }
                          }, 0);
                      }
                      function a() {
                        if (!r) {
                          var a, i, c, s, u, l, f, p, d;
                          (r = !0),
                            e &&
                              ((a = n),
                              (i = t),
                              (c = e),
                              os && N.log("Sending CLS span (".concat(a, ")")),
                              (f = aE(
                                (tR() || 0) +
                                  ((null == i ? void 0 : i.startTime) || 0),
                              )),
                              (p = tQ().getScopeData().transactionName),
                              (d = aw({
                                name: i
                                  ? tr(
                                      null === (s = i.sources[0]) ||
                                        void 0 === s
                                        ? void 0
                                        : s.node,
                                    )
                                  : "Layout shift",
                                transaction: p,
                                attributes:
                                  (aP((u = {}), eM, "auto.http.browser.cls"),
                                  aP(u, eR, "ui.webvital.cls"),
                                  aP(
                                    u,
                                    eH,
                                    (null == i ? void 0 : i.duration) || 0,
                                  ),
                                  aP(u, "sentry.pageload.span_id", c),
                                  u),
                                startTime: f,
                              })) &&
                                (d.addEvent(
                                  "cls",
                                  (aP((l = {}), eL, ""), aP(l, eU, a), l),
                                ),
                                d.end(f))),
                            o();
                        }
                      }
                    })()
                  : o2(function (t) {
                      var e = t.metric,
                        n = e.entries[e.entries.length - 1];
                      n && ((aI.cls = { value: e.value, unit: "" }), (b = n));
                    }, !0);
              return function () {
                r(), o(), a(), null == i || i();
              };
            }
            return function () {};
          })({ recordClsStandaloneSpans: u || !1 });
        o &&
          (function () {
            if (aj() && tR()) {
              at(
                "inp",
                function (t) {
                  var e,
                    n,
                    r = t.metric;
                  if (void 0 != r.value) {
                    var o = r.entries.find(function (t) {
                      return t.duration === r.value && aL[t.name];
                    });
                    if (o) {
                      var a = o.interactionId,
                        i = aL[o.name],
                        c = aE(tR() + o.startTime),
                        s = aE(r.value),
                        u = no(),
                        l = u ? nr(u) : void 0,
                        f = (null != a ? aN.get(a) : void 0) || l,
                        p = f
                          ? e6(f).description
                          : tQ().getScopeData().transactionName,
                        d = aw({
                          name: tr(o.target),
                          transaction: p,
                          attributes:
                            (aR((e = {}), eM, "auto.http.browser.inp"),
                            aR(e, eR, "ui.interaction.".concat(i)),
                            aR(e, eH, o.duration),
                            e),
                          startTime: c,
                        });
                      d &&
                        (d.addEvent(
                          "inp",
                          (aR((n = {}), eL, "millisecond"),
                          aR(n, eU, r.value),
                          n),
                        ),
                        d.end(c + s));
                    }
                  }
                },
                o7,
                h,
              );
            }
          })(),
          i &&
          P.PerformanceObserver &&
          PerformanceObserver.supportedEntryTypes &&
          PerformanceObserver.supportedEntryTypes.includes(
            "long-animation-frame",
          )
            ? new PerformanceObserver(function (t) {
                var e = no();
                if (e) {
                  var n = !0,
                    r = !1,
                    o = void 0;
                  try {
                    for (
                      var a, i = t.getEntries()[Symbol.iterator]();
                      !(n = (a = i.next()).done);
                      n = !0
                    ) {
                      var c = a.value;
                      if (c.scripts[0]) {
                        var s = aE(tR() + c.startTime),
                          u = e6(e),
                          l = u.start_timestamp,
                          f = u.op;
                        if ("navigation" !== f || !l || !(s < l)) {
                          var p = aE(c.duration),
                            d = ax({}, eM, "auto.ui.browser.metrics"),
                            v = c.scripts[0],
                            y = v.invoker,
                            m = v.invokerType,
                            h = v.sourceURL,
                            g = v.sourceFunctionName,
                            b = v.sourceCharPosition;
                          (d["browser.script.invoker"] = y),
                            (d["browser.script.invoker_type"] = m),
                            h && (d["code.filepath"] = h),
                            g && (d["code.function"] = g),
                            -1 !== b &&
                              (d["browser.script.source_char_position"] = b),
                            aS(e, s, s + p, {
                              name: "Main UI thread blocked",
                              op: "ui.long-animation-frame",
                              attributes: d,
                            });
                        }
                      }
                    }
                  } catch (t) {
                    (r = !0), (o = t);
                  } finally {
                    try {
                      n || null == i.return || i.return();
                    } finally {
                      if (r) throw o;
                    }
                  }
                }
              }).observe({ type: "long-animation-frame", buffered: !0 })
            : a &&
              o3("longtask", function (t) {
                var e = t.entries,
                  n = no();
                if (n) {
                  var r = e6(n),
                    o = r.op,
                    a = r.start_timestamp,
                    i = !0,
                    c = !1,
                    s = void 0;
                  try {
                    for (
                      var u, l = e[Symbol.iterator]();
                      !(i = (u = l.next()).done);
                      i = !0
                    ) {
                      var f = u.value,
                        p = aE(tR() + f.startTime),
                        d = aE(f.duration);
                      ("navigation" !== o || !a || !(p < a)) &&
                        aS(n, p, p + d, {
                          name: "Main UI thread blocked",
                          op: "ui.long-task",
                          attributes: ax({}, eM, "auto.ui.browser.metrics"),
                        });
                    }
                  } catch (t) {
                    (c = !0), (s = t);
                  } finally {
                    try {
                      i || null == l.return || l.return();
                    } finally {
                      if (c) throw s;
                    }
                  }
                }
              }),
          s &&
            o3("event", function (t) {
              var e = t.entries,
                n = no();
              if (n) {
                var r = !0,
                  o = !1,
                  a = void 0;
                try {
                  for (
                    var i, c = e[Symbol.iterator]();
                    !(r = (i = c.next()).done);
                    r = !0
                  ) {
                    var s = i.value;
                    if ("click" === s.name) {
                      var u = aE(tR() + s.startTime),
                        l = aE(s.duration),
                        f = {
                          name: tr(s.target),
                          op: "ui.interaction.".concat(s.name),
                          startTime: u,
                          attributes: ax({}, eM, "auto.ui.browser.metrics"),
                        },
                        p = ta(s.target);
                      p && (f.attributes["ui.component_name"] = p),
                        aS(n, u, u + l, f);
                    }
                  }
                } catch (t) {
                  (o = !0), (a = t);
                } finally {
                  try {
                    r || null == c.return || c.return();
                  } finally {
                    if (o) throw a;
                  }
                }
              }
            });
        var C = { name: void 0, source: void 0 };
        return {
          name: "BrowserTracing",
          afterAllSetup: function (t) {
            var n,
              r,
              a,
              i,
              c,
              u,
              l,
              v,
              y,
              m,
              h,
              g,
              b,
              E,
              D,
              R,
              M,
              L,
              U,
              q,
              F = to();
            function H() {
              var e = t[il];
              e &&
                !e6(e).timestamp &&
                (rt &&
                  N.log(
                    "[Tracing] Finishing current active span with op: ".concat(
                      e6(e).op,
                    ),
                  ),
                e.end());
            }
            if (
              (t.on("startNavigationSpan", function (n) {
                t2() === t &&
                  (H(),
                  t0().setPropagationContext({
                    traceId: tg(),
                    sampleRand: Math.random(),
                  }),
                  tQ().setPropagationContext({
                    traceId: tg(),
                    sampleRand: Math.random(),
                  }),
                  e(t, ia({ op: "navigation" }, n)));
              }),
              t.on("startPageLoadSpan", function (n) {
                var r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (t2() === t) {
                  H();
                  var o = (function (t, e) {
                    var n = (function (t) {
                        if (t) {
                          var e,
                            n = t.match(e0);
                          if (n)
                            return (
                              "1" === n[3]
                                ? (e = !0)
                                : "0" === n[3] && (e = !1),
                              {
                                traceId: n[1],
                                parentSampled: e,
                                parentSpanId: n[2],
                              }
                            );
                        }
                      })(t),
                      r = eG(e);
                    if (!(null == n ? void 0 : n.traceId))
                      return { traceId: tg(), sampleRand: Math.random() };
                    var o = (function (t, e) {
                      var n = eQ(null == e ? void 0 : e.sample_rand);
                      if (void 0 !== n) return n;
                      var r = eQ(null == e ? void 0 : e.sample_rate);
                      return r &&
                        (null == t ? void 0 : t.parentSampled) !== void 0
                        ? t.parentSampled
                          ? Math.random() * r
                          : r + Math.random() * (1 - r)
                        : Math.random();
                    })(n, r);
                    return (
                      r && (r.sample_rand = o.toString()),
                      {
                        traceId: n.traceId,
                        parentSpanId: n.parentSpanId,
                        sampled: n.parentSampled,
                        dsc: r || {},
                        sampleRand: o,
                      }
                    );
                  })(
                    r.sentryTrace || iu("sentry-trace"),
                    r.baggage || iu("baggage"),
                  );
                  tQ().setPropagationContext(o),
                    e(t, ia({ op: "pageload" }, n));
                }
              }),
              "off" !== A)
            ) {
              var B = void 0;
              t.on("spanStart", function (t) {
                nr(t) === t &&
                  ("session-storage" === A
                    ? (function (t) {
                        try {
                          P.sessionStorage.setItem(ie, JSON.stringify(t));
                        } catch (t) {
                          rt &&
                            N.warn(
                              "Could not store previous trace in sessionStorage",
                              t,
                            );
                        }
                      })(
                        ir(
                          (function () {
                            try {
                              var t,
                                e =
                                  null === (t = P.sessionStorage) ||
                                  void 0 === t
                                    ? void 0
                                    : t.getItem(ie);
                              return JSON.parse(e);
                            } catch (t) {
                              return;
                            }
                          })(),
                          t,
                        ),
                      )
                    : (B = ir(B, t)));
              });
            }
            if (P.location) {
              if (T) {
                var $,
                  z,
                  W,
                  G,
                  J = tR();
                ($ = t),
                  (z = {
                    name: P.location.pathname,
                    startTime: J ? J / 1e3 : void 0,
                    attributes:
                      (io((G = {}), eD, "url"),
                      io(G, eM, "auto.pageload.browser"),
                      G),
                  }),
                  $.emit("startPageLoadSpan", z, void 0),
                  tQ().setTransactionName(z.name),
                  $[il];
              }
              x &&
                rp(function (e) {
                  var n,
                    r,
                    o,
                    a = e.to,
                    i = e.from;
                  if (
                    void 0 === i &&
                    (null == F ? void 0 : F.indexOf(a)) !== -1
                  ) {
                    F = void 0;
                    return;
                  }
                  i !== a &&
                    ((F = void 0),
                    (n = t),
                    (r = {
                      name: P.location.pathname,
                      attributes:
                        (io((o = {}), eD, "url"),
                        io(o, eM, "auto.navigation.browser"),
                        o),
                    }),
                    n.emit("startNavigationSpan", r),
                    tQ().setTransactionName(r.name),
                    n[il]);
                });
            }
            if (
              (_ &&
                (P.document
                  ? P.document.addEventListener(
                      "visibilitychange",
                      function () {
                        var t = no();
                        if (t) {
                          var e = nr(t);
                          if (P.document.hidden && e) {
                            var n = "cancelled",
                              r = e6(e),
                              o = r.op,
                              a = r.status;
                            rt &&
                              N.log(
                                "[Tracing] Transaction: "
                                  .concat(
                                    n,
                                    " -> since tab moved to the background, op: ",
                                  )
                                  .concat(o),
                              ),
                              a || e.setStatus({ code: 2, message: n }),
                              e.setAttribute(
                                "sentry.cancellation_reason",
                                "document.hidden",
                              ),
                              e.end();
                          }
                        }
                      },
                    )
                  : rt &&
                    N.warn(
                      "[Tracing] Could not set up background tab detection due to lack of global document",
                    )),
              s &&
                ((n = t),
                (r = f),
                (a = p),
                (i = d),
                (c = C),
                P.document &&
                  addEventListener(
                    "click",
                    function () {
                      var t = "ui.action.click",
                        e = n[il];
                      if (e && ["navigation", "pageload"].includes(e6(e).op)) {
                        rt &&
                          N.warn(
                            "[Tracing] Did not create ".concat(
                              t,
                              " span because a pageload or navigation span is in progress.",
                            ),
                          );
                        return;
                      }
                      if (
                        (u &&
                          (u.setAttribute(eN, "interactionInterrupted"),
                          u.end(),
                          (u = void 0)),
                        !c.name)
                      ) {
                        rt &&
                          N.warn(
                            "[Tracing] Did not create ".concat(
                              t,
                              " transaction because _latestRouteName is missing.",
                            ),
                          );
                        return;
                      }
                      u = a$(
                        {
                          name: c.name,
                          op: t,
                          attributes: io({}, eD, c.source || "url"),
                        },
                        {
                          idleTimeout: r,
                          finalTimeout: a,
                          childSpanTimeout: i,
                        },
                      );
                    },
                    { once: !1, capture: !0 },
                  )),
              o)
            )
              o3(
                "event",
                (q = function (t) {
                  var e = t.entries,
                    n = no(),
                    r = n && nr(n);
                  e.forEach(function (t) {
                    if ("duration" in t && r) {
                      var e = t.interactionId;
                      if (!(null == e || aN.has(e))) {
                        if (aM.length > 10) {
                          var n = aM.shift();
                          aN.delete(n);
                        }
                        aM.push(e), aN.set(e, r);
                      }
                    }
                  });
                }),
              ),
                o3("first-input", q);
            (l = t),
              (m = (y = a2({}, a6, {
                traceFetch: O,
                traceXHR: S,
                trackFetchStreamPerformance: w,
                tracePropagationTargets: t.getOptions().tracePropagationTargets,
                shouldCreateSpanForRequest: j,
                enableHTTPTimings: k,
                onRequestSpanStart: I,
              })).traceFetch),
              (h = y.traceXHR),
              (g = y.trackFetchStreamPerformance),
              (b = y.shouldCreateSpanForRequest),
              (E = y.enableHTTPTimings),
              (D = y.tracePropagationTargets),
              (R = y.onRequestSpanStart),
              (M =
                "function" == typeof b
                  ? b
                  : function (t) {
                      return !0;
                    }),
              (L = function (t) {
                return (function (t, e) {
                  var n = to();
                  if (n) {
                    try {
                      (r = new URL(t, n)), (o = new URL(n).origin);
                    } catch (t) {
                      return !1;
                    }
                    var r,
                      o,
                      a = r.origin === o;
                    return e
                      ? ts(r.toString(), e) || (a && ts(r.pathname, e))
                      : a;
                  }
                  var i = !!t.match(/^\/(?!\/)/);
                  return e ? ts(t, e) : i;
                })(t, D);
              }),
              (U = {}),
              m &&
                (l.addEventProcessor(function (t) {
                  return (
                    "transaction" === t.type &&
                      t.spans &&
                      t.spans.forEach(function (t) {
                        if ("http.client" === t.op) {
                          var e = a4.get(t.span_id);
                          e && ((t.timestamp = e / 1e3), a4.delete(t.span_id));
                        }
                      }),
                    t
                  );
                }),
                g &&
                  (rr((v = "fetch-body-resolved"), function (t) {
                    if (t.response) {
                      var e = a8.get(t.response);
                      e && t.endTimestamp && a4.set(e, t.endTimestamp);
                    }
                  }),
                  ro(v, function () {
                    return rj(rk);
                  })),
                rw(function (t) {
                  var e = (function (t, e, n, r) {
                    var o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : "auto.http.browser";
                    if (t.fetchData) {
                      var a,
                        i,
                        c,
                        s,
                        u,
                        l,
                        f,
                        p,
                        d,
                        v,
                        y = t.fetchData,
                        m = y.method,
                        h = y.url,
                        g = eY() && e(h);
                      if (t.endTimestamp && g) {
                        var b = t.fetchData.__span;
                        if (!b) return;
                        var _ = r[b];
                        _ &&
                          ((function (t, e) {
                            if (e.response) {
                              eX(t, e.response.status);
                              var n,
                                r =
                                  (null === (n = e.response) || void 0 === n
                                    ? void 0
                                    : n.headers) &&
                                  e.response.headers.get("content-length");
                              if (r) {
                                var o = parseInt(r);
                                o > 0 &&
                                  t.setAttribute(
                                    "http.response_content_length",
                                    o,
                                  );
                              }
                            } else
                              e.error &&
                                t.setStatus({
                                  code: 2,
                                  message: "internal_error",
                                });
                            t.end();
                          })(_, t),
                          delete r[b]);
                        return;
                      }
                      var O = !!no(),
                        S =
                          g && O
                            ? ay(
                                ((a = h),
                                (i = m),
                                (c = o),
                                {
                                  name: (s = (function (t, e) {
                                    var n = t.startsWith("/"),
                                      r = n ? "thismessage:/" : void 0;
                                    try {
                                      if (
                                        "canParse" in URL &&
                                        !URL.canParse(t, r)
                                      )
                                        return;
                                      var o = new URL(t, r);
                                      if (n)
                                        return {
                                          isRelative: n,
                                          pathname: o.pathname,
                                          search: o.search,
                                          hash: o.hash,
                                        };
                                      return o;
                                    } catch (t) {}
                                  })(a))
                                    ? "".concat(i, " ").concat(
                                        (function (t) {
                                          if (rI(t)) return t.pathname;
                                          var e = new URL(t);
                                          return (
                                            (e.search = ""),
                                            (e.hash = ""),
                                            ["80", "443"].includes(e.port) &&
                                              (e.port = ""),
                                            e.password &&
                                              (e.password = "%filtered%"),
                                            e.username &&
                                              (e.username = "%filtered%"),
                                            e.toString()
                                          );
                                        })(s),
                                      )
                                    : i,
                                  attributes:
                                    ((u = a),
                                    (l = s),
                                    (f = i),
                                    (p = c),
                                    (v =
                                      (aY(
                                        (d = {
                                          url: u,
                                          type: "fetch",
                                          "http.method": f,
                                        }),
                                        eM,
                                        p,
                                      ),
                                      aY(d, eR, "http.client"),
                                      d)),
                                    l &&
                                      (rI(l) ||
                                        ((v["http.url"] = l.href),
                                        (v["server.address"] = l.host)),
                                      l.search && (v["http.query"] = l.search),
                                      l.hash && (v["http.fragment"] = l.hash)),
                                    v),
                                }),
                              )
                            : new ar();
                      if (
                        ((t.fetchData.__span = S.spanContext().spanId),
                        (r[S.spanContext().spanId] = S),
                        n(t.fetchData.url))
                      ) {
                        var w = t.args[0],
                          j = t.args[1] || {},
                          E = (function (t, e, n) {
                            var r = aG({ span: n }),
                              o = r["sentry-trace"],
                              a = r.baggage;
                            if (o) {
                              var i = e.headers || (tn(t) ? t.headers : void 0);
                              if (!i) return aV({}, r);
                              if (
                                ((f = i),
                                "undefined" != typeof Headers && tt(f, Headers))
                              ) {
                                var c = new Headers(i);
                                if ((c.set("sentry-trace", o), a)) {
                                  var s = c.get("baggage");
                                  if (s) {
                                    var u = aQ(s);
                                    c.set(
                                      "baggage",
                                      u ? "".concat(u, ",").concat(a) : a,
                                    );
                                  } else c.set("baggage", a);
                                }
                                return c;
                              }
                              if (Array.isArray(i)) {
                                var l = aK(
                                  i
                                    .filter(function (t) {
                                      return !(
                                        Array.isArray(t) &&
                                        "sentry-trace" === t[0]
                                      );
                                    })
                                    .map(function (t) {
                                      if (
                                        !Array.isArray(t) ||
                                        "baggage" !== t[0] ||
                                        "string" != typeof t[1]
                                      )
                                        return t;
                                      var e =
                                          (function (t) {
                                            if (Array.isArray(t)) return t;
                                          })(t) ||
                                          aX(t) ||
                                          aZ(t) ||
                                          (function () {
                                            throw TypeError(
                                              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                            );
                                          })(),
                                        n = e[0],
                                        r = e[1],
                                        o = e.slice(2);
                                      return [n, aQ(r)].concat(aK(o));
                                    }),
                                ).concat([["sentry-trace", o]]);
                                return a && l.push(["baggage", a]), l;
                              }
                              var f,
                                p,
                                d,
                                v = "baggage" in i ? i.baggage : void 0,
                                y = [];
                              return (
                                Array.isArray(v)
                                  ? (y = v
                                      .map(function (t) {
                                        return "string" == typeof t ? aQ(t) : t;
                                      })
                                      .filter(function (t) {
                                        return "" === t;
                                      }))
                                  : v && y.push(aQ(v)),
                                a && y.push(a),
                                (p = aV({}, i)),
                                (d = d =
                                  {
                                    "sentry-trace": o,
                                    baggage:
                                      y.length > 0 ? y.join(",") : void 0,
                                  }),
                                Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(
                                      p,
                                      Object.getOwnPropertyDescriptors(d),
                                    )
                                  : (function (t, e) {
                                      var n = Object.keys(t);
                                      if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(t);
                                        n.push.apply(n, r);
                                      }
                                      return n;
                                    })(Object(d)).forEach(function (t) {
                                      Object.defineProperty(
                                        p,
                                        t,
                                        Object.getOwnPropertyDescriptor(d, t),
                                      );
                                    }),
                                p
                              );
                            }
                          })(w, j, eY() && O ? S : void 0);
                        E && ((t.args[1] = j), (j.headers = E));
                      }
                      var k = t2();
                      if (k) {
                        var P = {
                          input: t.args,
                          response: t.response,
                          startTimestamp: t.startTimestamp,
                          endTimestamp: t.endTimestamp,
                        };
                        k.emit("beforeOutgoingRequestSpan", S, P);
                      }
                      return S;
                    }
                  })(t, M, L, U);
                  if (
                    (t.response &&
                      t.fetchData.__span &&
                      a8.set(t.response, t.fetchData.__span),
                    e)
                  ) {
                    var n = a7(t.fetchData.url),
                      r = n ? rD(n).host : void 0;
                    e.setAttributes({ "http.url": n, "server.address": r }),
                      E && a5(e),
                      null == R || R(e, { headers: t.headers });
                  }
                })),
              h &&
                rl(function (t) {
                  var e,
                    n,
                    r = (function (t, e, n, r) {
                      var o,
                        a = t.xhr,
                        i = null == a ? void 0 : a[ru];
                      if (a && !a.__sentry_own_request__ && i) {
                        var c,
                          s,
                          u,
                          l,
                          f = i.url,
                          p = i.method,
                          d = eY() && e(f);
                        if (t.endTimestamp && d) {
                          var v = a.__sentry_xhr_span_id__;
                          if (!v) return;
                          var y = r[v];
                          y &&
                            void 0 !== i.status_code &&
                            (eX(y, i.status_code), y.end(), delete r[v]);
                          return;
                        }
                        var m = a7(f),
                          h = m ? rD(m) : rD(f),
                          g = f.split(/[?#]/, 1)[0],
                          b = !!no(),
                          _ =
                            d && b
                              ? ay({
                                  name: "".concat(p, " ").concat(g),
                                  attributes: a2(
                                    (a1(
                                      (o = {
                                        url: f,
                                        type: "xhr",
                                        "http.method": p,
                                        "http.url": m,
                                        "server.address":
                                          null == h ? void 0 : h.host,
                                      }),
                                      eM,
                                      "auto.http.browser",
                                    ),
                                    a1(o, eR, "http.client"),
                                    o),
                                    (null == h ? void 0 : h.search) && {
                                      "http.query":
                                        null == h ? void 0 : h.search,
                                    },
                                    (null == h ? void 0 : h.hash) && {
                                      "http.fragment":
                                        null == h ? void 0 : h.hash,
                                    },
                                  ),
                                })
                              : new ar();
                        (a.__sentry_xhr_span_id__ = _.spanContext().spanId),
                          (r[a.__sentry_xhr_span_id__] = _),
                          n(f) &&
                            ((c = a),
                            (u = (s = aG({ span: eY() && b ? _ : void 0 }))[
                              "sentry-trace"
                            ]),
                            (l = s.baggage),
                            u &&
                              (function (t, e, n) {
                                try {
                                  t.setRequestHeader("sentry-trace", e),
                                    n && t.setRequestHeader("baggage", n);
                                } catch (t) {}
                              })(c, u, l));
                        var O = t2();
                        return (
                          O && O.emit("beforeOutgoingRequestSpan", _, t), _
                        );
                      }
                    })(t, M, L, U);
                  if (r) {
                    E && a5(r);
                    try {
                      e = new Headers(
                        null === (n = t.xhr.__sentry_xhr_v3__) || void 0 === n
                          ? void 0
                          : n.request_headers,
                      );
                    } catch (t) {}
                    null == R || R(r, { headers: e });
                  }
                });
          },
        };
      })(),
    ],
    environment: null != im ? im : "staging",
    tracesSampleRate: null == ih ? 0.5 : parseFloat(ih),
    sampleRate: null == ih ? 0.5 : parseFloat(ih),
    replaysOnErrorSampleRate: null == ih ? 0.5 : parseFloat(ih),
  }),
    document.addEventListener("DOMContentLoaded", function () {
      (t = {
        id:
          null !==
            (n =
              null === (e = j.authenticatedUser.id) || void 0 === e
                ? void 0
                : e.toString()) && void 0 !== n
            ? n
            : "1",
        username:
          null !== (r = j.authenticatedUser.name) && void 0 !== r
            ? r
            : "unknown",
      }),
        t0().setUser(t);
      var t,
        e,
        n,
        r,
        o = document.querySelector('meta[name="page-meta"]');
      (null == o ? void 0 : o.dataset.internalPageName) &&
        nZ("internal-page-name", o.dataset.internalPageName);
      var a = new MutationObserver(function (t) {
        t.forEach(function (t) {
          if (
            "attributes" === t.type &&
            "data-internal-page-name" === t.attributeName &&
            t.target instanceof HTMLMetaElement
          ) {
            var e = t.target.dataset.internalPageName;
            e && nZ("internal-page-name", e);
          }
        });
      });
      o &&
        a.observe(o, {
          attributes: !0,
          attributeFilter: ["data-internal-page-name"],
        });
    });
})();
//# debugId=76a37f2c-d218-461b-8b14-402fd07fc25b
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/sentry-679ca8c026294967.js.map
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("Sentry");
