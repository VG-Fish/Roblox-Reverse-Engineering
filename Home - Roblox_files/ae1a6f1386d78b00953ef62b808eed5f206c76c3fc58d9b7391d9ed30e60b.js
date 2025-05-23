/*! For license information please see accessManagementUpsellV2.bundle.min.js.LICENSE.txt */
!(function () {
  var e = {
      84: function (e) {
        "use strict";
        var t = {
          single_source_shortest_paths: function (e, n, r) {
            var o = {},
              a = {};
            a[n] = 0;
            var i,
              l,
              c,
              u,
              s,
              f,
              d,
              p = t.PriorityQueue.make();
            for (p.push(n, 0); !p.empty(); )
              for (c in ((l = (i = p.pop()).value),
              (u = i.cost),
              (s = e[l] || {})))
                s.hasOwnProperty(c) &&
                  ((f = u + s[c]),
                  (d = a[c]),
                  (void 0 === a[c] || d > f) &&
                    ((a[c] = f), p.push(c, f), (o[c] = l)));
            if (void 0 !== r && void 0 === a[r]) {
              var y = ["Could not find a path from ", n, " to ", r, "."].join(
                "",
              );
              throw new Error(y);
            }
            return o;
          },
          extract_shortest_path_from_predecessor_list: function (e, t) {
            for (var n = [], r = t; r; ) n.push(r), e[r], (r = e[r]);
            return n.reverse(), n;
          },
          find_path: function (e, n, r) {
            var o = t.single_source_shortest_paths(e, n, r);
            return t.extract_shortest_path_from_predecessor_list(o, r);
          },
          PriorityQueue: {
            make: function (e) {
              var n,
                r = t.PriorityQueue,
                o = {};
              for (n in ((e = e || {}), r))
                r.hasOwnProperty(n) && (o[n] = r[n]);
              return (
                (o.queue = []), (o.sorter = e.sorter || r.default_sorter), o
              );
            },
            default_sorter: function (e, t) {
              return e.cost - t.cost;
            },
            push: function (e, t) {
              var n = { value: e, cost: t };
              this.queue.push(n), this.queue.sort(this.sorter);
            },
            pop: function () {
              return this.queue.shift();
            },
            empty: function () {
              return 0 === this.queue.length;
            },
          },
        };
        e.exports = t;
      },
      717: function (e) {
        "use strict";
        e.exports = function (e) {
          for (var t = [], n = e.length, r = 0; r < n; r++) {
            var o = e.charCodeAt(r);
            if (o >= 55296 && o <= 56319 && n > r + 1) {
              var a = e.charCodeAt(r + 1);
              a >= 56320 &&
                a <= 57343 &&
                ((o = 1024 * (o - 55296) + a - 56320 + 65536), (r += 1));
            }
            o < 128
              ? t.push(o)
              : o < 2048
                ? (t.push((o >> 6) | 192), t.push((63 & o) | 128))
                : o < 55296 || (o >= 57344 && o < 65536)
                  ? (t.push((o >> 12) | 224),
                    t.push(((o >> 6) & 63) | 128),
                    t.push((63 & o) | 128))
                  : o >= 65536 && o <= 1114111
                    ? (t.push((o >> 18) | 240),
                      t.push(((o >> 12) & 63) | 128),
                      t.push(((o >> 6) & 63) | 128),
                      t.push((63 & o) | 128))
                    : t.push(239, 191, 189);
          }
          return new Uint8Array(t).buffer;
        };
      },
      779: function (e, t, n) {
        "use strict";
        var r = n(594);
        var o =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          a = r.useState,
          i = r.useEffect,
          l = r.useLayoutEffect,
          c = r.useDebugValue;
        function u(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !o(e, n);
          } catch (e) {
            return !0;
          }
        }
        var s =
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
            ? function (e, t) {
                return t();
              }
            : function (e, t) {
                var n = t(),
                  r = a({ inst: { value: n, getSnapshot: t } }),
                  o = r[0].inst,
                  s = r[1];
                return (
                  l(
                    function () {
                      (o.value = n),
                        (o.getSnapshot = t),
                        u(o) && s({ inst: o });
                    },
                    [e, n, t],
                  ),
                  i(
                    function () {
                      return (
                        u(o) && s({ inst: o }),
                        e(function () {
                          u(o) && s({ inst: o });
                        })
                      );
                    },
                    [e],
                  ),
                  c(n),
                  n
                );
              };
        t.useSyncExternalStore =
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : s;
      },
      320: function (e, t, n) {
        "use strict";
        var r = n(594),
          o = n(676);
        var a =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          i = o.useSyncExternalStore,
          l = r.useRef,
          c = r.useEffect,
          u = r.useMemo,
          s = r.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
          var f = l(null);
          if (null === f.current) {
            var d = { hasValue: !1, value: null };
            f.current = d;
          } else d = f.current;
          f = u(
            function () {
              function e(e) {
                if (!c) {
                  if (
                    ((c = !0), (i = e), (e = r(e)), void 0 !== o && d.hasValue)
                  ) {
                    var t = d.value;
                    if (o(t, e)) return (l = t);
                  }
                  return (l = e);
                }
                if (((t = l), a(i, e))) return t;
                var n = r(e);
                return void 0 !== o && o(t, n) ? t : ((i = e), (l = n));
              }
              var i,
                l,
                c = !1,
                u = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === u
                  ? void 0
                  : function () {
                      return e(u());
                    },
              ];
            },
            [t, n, r, o],
          );
          var p = i(e, f[0], f[1]);
          return (
            c(
              function () {
                (d.hasValue = !0), (d.value = p);
              },
              [p],
            ),
            s(p),
            p
          );
        };
      },
      676: function (e, t, n) {
        "use strict";
        e.exports = n(779);
      },
      390: function (e, t, n) {
        "use strict";
        e.exports = n(320);
      },
      675: function (e, t, n) {
        "use strict";
        var r = n(922),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          i = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          l = {};
        function c(e) {
          return r.isMemo(e) ? i : l[e.$$typeof] || o;
        }
        (l[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (l[r.Memo] = i);
        var u = Object.defineProperty,
          s = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          y = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" != typeof n) {
            if (y) {
              var o = p(n);
              o && o !== y && e(t, o, r);
            }
            var i = s(n);
            f && (i = i.concat(f(n)));
            for (var l = c(t), m = c(n), h = 0; h < i.length; ++h) {
              var v = i[h];
              if (!(a[v] || (r && r[v]) || (m && m[v]) || (l && l[v]))) {
                var g = d(n, v);
                try {
                  u(t, v, g);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      326: function (e, t) {
        "use strict";
        function n(e) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            n(e)
          );
        }
        var r = "function" == typeof Symbol && Symbol.for,
          o = r ? Symbol.for("react.element") : 60103,
          a = r ? Symbol.for("react.portal") : 60106,
          i = r ? Symbol.for("react.fragment") : 60107,
          l = r ? Symbol.for("react.strict_mode") : 60108,
          c = r ? Symbol.for("react.profiler") : 60114,
          u = r ? Symbol.for("react.provider") : 60109,
          s = r ? Symbol.for("react.context") : 60110,
          f = r ? Symbol.for("react.async_mode") : 60111,
          d = r ? Symbol.for("react.concurrent_mode") : 60111,
          p = r ? Symbol.for("react.forward_ref") : 60112,
          y = r ? Symbol.for("react.suspense") : 60113,
          m = r ? Symbol.for("react.suspense_list") : 60120,
          h = r ? Symbol.for("react.memo") : 60115,
          v = r ? Symbol.for("react.lazy") : 60116,
          g = r ? Symbol.for("react.block") : 60121,
          b = r ? Symbol.for("react.fundamental") : 60117,
          E = r ? Symbol.for("react.responder") : 60118,
          w = r ? Symbol.for("react.scope") : 60119;
        function S(e) {
          if ("object" === n(e) && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case o:
                switch ((e = e.type)) {
                  case f:
                  case d:
                  case i:
                  case c:
                  case l:
                  case y:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case p:
                      case v:
                      case h:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        function A(e) {
          return S(e) === d;
        }
        (t.AsyncMode = f),
          (t.ConcurrentMode = d),
          (t.ContextConsumer = s),
          (t.ContextProvider = u),
          (t.Element = o),
          (t.ForwardRef = p),
          (t.Fragment = i),
          (t.Lazy = v),
          (t.Memo = h),
          (t.Portal = a),
          (t.Profiler = c),
          (t.StrictMode = l),
          (t.Suspense = y),
          (t.isAsyncMode = function (e) {
            return A(e) || S(e) === f;
          }),
          (t.isConcurrentMode = A),
          (t.isContextConsumer = function (e) {
            return S(e) === s;
          }),
          (t.isContextProvider = function (e) {
            return S(e) === u;
          }),
          (t.isElement = function (e) {
            return "object" === n(e) && null !== e && e.$$typeof === o;
          }),
          (t.isForwardRef = function (e) {
            return S(e) === p;
          }),
          (t.isFragment = function (e) {
            return S(e) === i;
          }),
          (t.isLazy = function (e) {
            return S(e) === v;
          }),
          (t.isMemo = function (e) {
            return S(e) === h;
          }),
          (t.isPortal = function (e) {
            return S(e) === a;
          }),
          (t.isProfiler = function (e) {
            return S(e) === c;
          }),
          (t.isStrictMode = function (e) {
            return S(e) === l;
          }),
          (t.isSuspense = function (e) {
            return S(e) === y;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === i ||
              e === d ||
              e === c ||
              e === l ||
              e === y ||
              e === m ||
              ("object" === n(e) &&
                null !== e &&
                (e.$$typeof === v ||
                  e.$$typeof === h ||
                  e.$$typeof === u ||
                  e.$$typeof === s ||
                  e.$$typeof === p ||
                  e.$$typeof === b ||
                  e.$$typeof === E ||
                  e.$$typeof === w ||
                  e.$$typeof === g))
            );
          }),
          (t.typeOf = S);
      },
      922: function (e, t, n) {
        "use strict";
        e.exports = n(326);
      },
      157: function (e, t) {
        "use strict";
        function n(e) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            n(e)
          );
        }
        var r,
          o = Symbol.for("react.element"),
          a = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          c = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          f = Symbol.for("react.server_context"),
          d = Symbol.for("react.forward_ref"),
          p = Symbol.for("react.suspense"),
          y = Symbol.for("react.suspense_list"),
          m = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy"),
          v = Symbol.for("react.offscreen");
        function g(e) {
          if ("object" === n(e) && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case o:
                switch ((e = e.type)) {
                  case i:
                  case c:
                  case l:
                  case p:
                  case y:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case f:
                      case s:
                      case d:
                      case h:
                      case m:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        r = Symbol.for("react.module.reference");
      },
      625: function (e, t, n) {
        "use strict";
        n(157);
      },
      373: function (e, t, n) {
        var r, o, a, i;
        function l(e) {
          return (
            (l =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            l(e)
          );
        }
        (e = n.nmd(e)),
          self,
          (i = function () {
            return (function () {
              var e = {
                  913: function (e, t, n) {
                    "use strict";
                    var r = n(651),
                      o = n(601),
                      a = o(r("String.prototype.indexOf"));
                    e.exports = function (e, t) {
                      var n = r(e, !!t);
                      return "function" == typeof n && a(e, ".prototype.") > -1
                        ? o(n)
                        : n;
                    };
                  },
                  601: function (e, t, n) {
                    "use strict";
                    var r = n(49),
                      o = n(651),
                      a = n(255),
                      i = n(785),
                      l = o("%Function.prototype.apply%"),
                      c = o("%Function.prototype.call%"),
                      u = o("%Reflect.apply%", !0) || r.call(c, l),
                      s = n(649),
                      f = o("%Math.max%");
                    e.exports = function (e) {
                      if ("function" != typeof e)
                        throw new i("a function is required");
                      var t = u(r, c, arguments);
                      return a(
                        t,
                        1 + f(0, e.length - (arguments.length - 1)),
                        !0,
                      );
                    };
                    var d = function () {
                      return u(r, l, arguments);
                    };
                    s
                      ? s(e.exports, "apply", { value: d })
                      : (e.exports.apply = d);
                  },
                  295: function (e, t, n) {
                    "use strict";
                    var r = n(649),
                      o = n(389),
                      a = n(785),
                      i = n(109);
                    e.exports = function (e, t, n) {
                      if (!e || ("object" != l(e) && "function" != typeof e))
                        throw new a("`obj` must be an object or a function`");
                      if ("string" != typeof t && "symbol" != l(t))
                        throw new a("`property` must be a string or a symbol`");
                      if (
                        arguments.length > 3 &&
                        "boolean" != typeof arguments[3] &&
                        null !== arguments[3]
                      )
                        throw new a(
                          "`nonEnumerable`, if provided, must be a boolean or null",
                        );
                      if (
                        arguments.length > 4 &&
                        "boolean" != typeof arguments[4] &&
                        null !== arguments[4]
                      )
                        throw new a(
                          "`nonWritable`, if provided, must be a boolean or null",
                        );
                      if (
                        arguments.length > 5 &&
                        "boolean" != typeof arguments[5] &&
                        null !== arguments[5]
                      )
                        throw new a(
                          "`nonConfigurable`, if provided, must be a boolean or null",
                        );
                      if (
                        arguments.length > 6 &&
                        "boolean" != typeof arguments[6]
                      )
                        throw new a("`loose`, if provided, must be a boolean");
                      var c = arguments.length > 3 ? arguments[3] : null,
                        u = arguments.length > 4 ? arguments[4] : null,
                        s = arguments.length > 5 ? arguments[5] : null,
                        f = arguments.length > 6 && arguments[6],
                        d = !!i && i(e, t);
                      if (r)
                        r(e, t, {
                          configurable: null === s && d ? d.configurable : !s,
                          enumerable: null === c && d ? d.enumerable : !c,
                          value: n,
                          writable: null === u && d ? d.writable : !u,
                        });
                      else {
                        if (!f && (c || u || s))
                          throw new o(
                            "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.",
                          );
                        e[t] = n;
                      }
                    };
                  },
                  649: function (e, t, n) {
                    "use strict";
                    var r = n(651)("%Object.defineProperty%", !0) || !1;
                    if (r)
                      try {
                        r({}, "a", { value: 1 });
                      } catch (e) {
                        r = !1;
                      }
                    e.exports = r;
                  },
                  55: function (e) {
                    "use strict";
                    e.exports = EvalError;
                  },
                  293: function (e) {
                    "use strict";
                    e.exports = Error;
                  },
                  888: function (e) {
                    "use strict";
                    e.exports = RangeError;
                  },
                  900: function (e) {
                    "use strict";
                    e.exports = ReferenceError;
                  },
                  389: function (e) {
                    "use strict";
                    e.exports = SyntaxError;
                  },
                  785: function (e) {
                    "use strict";
                    e.exports = TypeError;
                  },
                  436: function (e) {
                    "use strict";
                    e.exports = URIError;
                  },
                  719: function (e) {
                    "use strict";
                    var t = Object.prototype.toString,
                      n = Math.max,
                      r = function (e, t) {
                        for (var n = [], r = 0; r < e.length; r += 1)
                          n[r] = e[r];
                        for (var o = 0; o < t.length; o += 1)
                          n[o + e.length] = t[o];
                        return n;
                      };
                    e.exports = function (e) {
                      var o = this;
                      if (
                        "function" != typeof o ||
                        "[object Function]" !== t.apply(o)
                      )
                        throw new TypeError(
                          "Function.prototype.bind called on incompatible " + o,
                        );
                      for (
                        var a,
                          i = (function (e) {
                            for (
                              var t = [], n = 1, r = 0;
                              n < e.length;
                              n += 1, r += 1
                            )
                              t[r] = e[n];
                            return t;
                          })(arguments),
                          l = n(0, o.length - i.length),
                          c = [],
                          u = 0;
                        u < l;
                        u++
                      )
                        c[u] = "$" + u;
                      if (
                        ((a = Function(
                          "binder",
                          "return function (" +
                            (function (e) {
                              for (var t = "", n = 0; n < e.length; n += 1)
                                (t += e[n]), n + 1 < e.length && (t += ",");
                              return t;
                            })(c) +
                            "){ return binder.apply(this,arguments); }",
                        )(function () {
                          if (this instanceof a) {
                            var t = o.apply(this, r(i, arguments));
                            return Object(t) === t ? t : this;
                          }
                          return o.apply(e, r(i, arguments));
                        })),
                        o.prototype)
                      ) {
                        var s = function () {};
                        (s.prototype = o.prototype),
                          (a.prototype = new s()),
                          (s.prototype = null);
                      }
                      return a;
                    };
                  },
                  49: function (e, t, n) {
                    "use strict";
                    var r = n(719);
                    e.exports = Function.prototype.bind || r;
                  },
                  651: function (e, t, n) {
                    "use strict";
                    var r,
                      o = n(293),
                      a = n(55),
                      i = n(888),
                      c = n(900),
                      u = n(389),
                      s = n(785),
                      f = n(436),
                      d = Function,
                      p = function (e) {
                        try {
                          return d(
                            '"use strict"; return (' + e + ").constructor;",
                          )();
                        } catch (e) {}
                      },
                      y = Object.getOwnPropertyDescriptor;
                    if (y)
                      try {
                        y({}, "");
                      } catch (e) {
                        y = null;
                      }
                    var m = function () {
                        throw new s();
                      },
                      h = y
                        ? (function () {
                            try {
                              return m;
                            } catch (e) {
                              try {
                                return y(arguments, "callee").get;
                              } catch (e) {
                                return m;
                              }
                            }
                          })()
                        : m,
                      v = n(257)(),
                      g = n(726)(),
                      b =
                        Object.getPrototypeOf ||
                        (g
                          ? function (e) {
                              return e.__proto__;
                            }
                          : null),
                      E = {},
                      w =
                        "undefined" != typeof Uint8Array && b
                          ? b(Uint8Array)
                          : r,
                      S = {
                        __proto__: null,
                        "%AggregateError%":
                          "undefined" == typeof AggregateError
                            ? r
                            : AggregateError,
                        "%Array%": Array,
                        "%ArrayBuffer%":
                          "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
                        "%ArrayIteratorPrototype%":
                          v && b ? b([][Symbol.iterator]()) : r,
                        "%AsyncFromSyncIteratorPrototype%": r,
                        "%AsyncFunction%": E,
                        "%AsyncGenerator%": E,
                        "%AsyncGeneratorFunction%": E,
                        "%AsyncIteratorPrototype%": E,
                        "%Atomics%":
                          "undefined" == typeof Atomics ? r : Atomics,
                        "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
                        "%BigInt64Array%":
                          "undefined" == typeof BigInt64Array
                            ? r
                            : BigInt64Array,
                        "%BigUint64Array%":
                          "undefined" == typeof BigUint64Array
                            ? r
                            : BigUint64Array,
                        "%Boolean%": Boolean,
                        "%DataView%":
                          "undefined" == typeof DataView ? r : DataView,
                        "%Date%": Date,
                        "%decodeURI%": decodeURI,
                        "%decodeURIComponent%": decodeURIComponent,
                        "%encodeURI%": encodeURI,
                        "%encodeURIComponent%": encodeURIComponent,
                        "%Error%": o,
                        "%eval%": eval,
                        "%EvalError%": a,
                        "%Float32Array%":
                          "undefined" == typeof Float32Array ? r : Float32Array,
                        "%Float64Array%":
                          "undefined" == typeof Float64Array ? r : Float64Array,
                        "%FinalizationRegistry%":
                          "undefined" == typeof FinalizationRegistry
                            ? r
                            : FinalizationRegistry,
                        "%Function%": d,
                        "%GeneratorFunction%": E,
                        "%Int8Array%":
                          "undefined" == typeof Int8Array ? r : Int8Array,
                        "%Int16Array%":
                          "undefined" == typeof Int16Array ? r : Int16Array,
                        "%Int32Array%":
                          "undefined" == typeof Int32Array ? r : Int32Array,
                        "%isFinite%": isFinite,
                        "%isNaN%": isNaN,
                        "%IteratorPrototype%":
                          v && b ? b(b([][Symbol.iterator]())) : r,
                        "%JSON%":
                          "object" ==
                          ("undefined" == typeof JSON ? "undefined" : l(JSON))
                            ? JSON
                            : r,
                        "%Map%": "undefined" == typeof Map ? r : Map,
                        "%MapIteratorPrototype%":
                          "undefined" != typeof Map && v && b
                            ? b(new Map()[Symbol.iterator]())
                            : r,
                        "%Math%": Math,
                        "%Number%": Number,
                        "%Object%": Object,
                        "%parseFloat%": parseFloat,
                        "%parseInt%": parseInt,
                        "%Promise%":
                          "undefined" == typeof Promise ? r : Promise,
                        "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
                        "%RangeError%": i,
                        "%ReferenceError%": c,
                        "%Reflect%":
                          "undefined" == typeof Reflect ? r : Reflect,
                        "%RegExp%": RegExp,
                        "%Set%": "undefined" == typeof Set ? r : Set,
                        "%SetIteratorPrototype%":
                          "undefined" != typeof Set && v && b
                            ? b(new Set()[Symbol.iterator]())
                            : r,
                        "%SharedArrayBuffer%":
                          "undefined" == typeof SharedArrayBuffer
                            ? r
                            : SharedArrayBuffer,
                        "%String%": String,
                        "%StringIteratorPrototype%":
                          v && b ? b(""[Symbol.iterator]()) : r,
                        "%Symbol%": v ? Symbol : r,
                        "%SyntaxError%": u,
                        "%ThrowTypeError%": h,
                        "%TypedArray%": w,
                        "%TypeError%": s,
                        "%Uint8Array%":
                          "undefined" == typeof Uint8Array ? r : Uint8Array,
                        "%Uint8ClampedArray%":
                          "undefined" == typeof Uint8ClampedArray
                            ? r
                            : Uint8ClampedArray,
                        "%Uint16Array%":
                          "undefined" == typeof Uint16Array ? r : Uint16Array,
                        "%Uint32Array%":
                          "undefined" == typeof Uint32Array ? r : Uint32Array,
                        "%URIError%": f,
                        "%WeakMap%":
                          "undefined" == typeof WeakMap ? r : WeakMap,
                        "%WeakRef%":
                          "undefined" == typeof WeakRef ? r : WeakRef,
                        "%WeakSet%":
                          "undefined" == typeof WeakSet ? r : WeakSet,
                      };
                    if (b)
                      try {
                        null.error;
                      } catch (e) {
                        var A = b(b(e));
                        S["%Error.prototype%"] = A;
                      }
                    var C = function e(t) {
                        var n;
                        if ("%AsyncFunction%" === t)
                          n = p("async function () {}");
                        else if ("%GeneratorFunction%" === t)
                          n = p("function* () {}");
                        else if ("%AsyncGeneratorFunction%" === t)
                          n = p("async function* () {}");
                        else if ("%AsyncGenerator%" === t) {
                          var r = e("%AsyncGeneratorFunction%");
                          r && (n = r.prototype);
                        } else if ("%AsyncIteratorPrototype%" === t) {
                          var o = e("%AsyncGenerator%");
                          o && b && (n = b(o.prototype));
                        }
                        return (S[t] = n), n;
                      },
                      P = {
                        __proto__: null,
                        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                        "%ArrayPrototype%": ["Array", "prototype"],
                        "%ArrayProto_entries%": [
                          "Array",
                          "prototype",
                          "entries",
                        ],
                        "%ArrayProto_forEach%": [
                          "Array",
                          "prototype",
                          "forEach",
                        ],
                        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                        "%ArrayProto_values%": ["Array", "prototype", "values"],
                        "%AsyncFunctionPrototype%": [
                          "AsyncFunction",
                          "prototype",
                        ],
                        "%AsyncGenerator%": [
                          "AsyncGeneratorFunction",
                          "prototype",
                        ],
                        "%AsyncGeneratorPrototype%": [
                          "AsyncGeneratorFunction",
                          "prototype",
                          "prototype",
                        ],
                        "%BooleanPrototype%": ["Boolean", "prototype"],
                        "%DataViewPrototype%": ["DataView", "prototype"],
                        "%DatePrototype%": ["Date", "prototype"],
                        "%ErrorPrototype%": ["Error", "prototype"],
                        "%EvalErrorPrototype%": ["EvalError", "prototype"],
                        "%Float32ArrayPrototype%": [
                          "Float32Array",
                          "prototype",
                        ],
                        "%Float64ArrayPrototype%": [
                          "Float64Array",
                          "prototype",
                        ],
                        "%FunctionPrototype%": ["Function", "prototype"],
                        "%Generator%": ["GeneratorFunction", "prototype"],
                        "%GeneratorPrototype%": [
                          "GeneratorFunction",
                          "prototype",
                          "prototype",
                        ],
                        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                        "%JSONParse%": ["JSON", "parse"],
                        "%JSONStringify%": ["JSON", "stringify"],
                        "%MapPrototype%": ["Map", "prototype"],
                        "%NumberPrototype%": ["Number", "prototype"],
                        "%ObjectPrototype%": ["Object", "prototype"],
                        "%ObjProto_toString%": [
                          "Object",
                          "prototype",
                          "toString",
                        ],
                        "%ObjProto_valueOf%": [
                          "Object",
                          "prototype",
                          "valueOf",
                        ],
                        "%PromisePrototype%": ["Promise", "prototype"],
                        "%PromiseProto_then%": ["Promise", "prototype", "then"],
                        "%Promise_all%": ["Promise", "all"],
                        "%Promise_reject%": ["Promise", "reject"],
                        "%Promise_resolve%": ["Promise", "resolve"],
                        "%RangeErrorPrototype%": ["RangeError", "prototype"],
                        "%ReferenceErrorPrototype%": [
                          "ReferenceError",
                          "prototype",
                        ],
                        "%RegExpPrototype%": ["RegExp", "prototype"],
                        "%SetPrototype%": ["Set", "prototype"],
                        "%SharedArrayBufferPrototype%": [
                          "SharedArrayBuffer",
                          "prototype",
                        ],
                        "%StringPrototype%": ["String", "prototype"],
                        "%SymbolPrototype%": ["Symbol", "prototype"],
                        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                        "%TypeErrorPrototype%": ["TypeError", "prototype"],
                        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                        "%Uint8ClampedArrayPrototype%": [
                          "Uint8ClampedArray",
                          "prototype",
                        ],
                        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                        "%URIErrorPrototype%": ["URIError", "prototype"],
                        "%WeakMapPrototype%": ["WeakMap", "prototype"],
                        "%WeakSetPrototype%": ["WeakSet", "prototype"],
                      },
                      x = n(49),
                      k = n(215),
                      I = x.call(Function.call, Array.prototype.concat),
                      T = x.call(Function.apply, Array.prototype.splice),
                      N = x.call(Function.call, String.prototype.replace),
                      O = x.call(Function.call, String.prototype.slice),
                      M = x.call(Function.call, RegExp.prototype.exec),
                      R =
                        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                      U = /\\(\\)?/g,
                      D = function (e, t) {
                        var n,
                          r = e;
                        if (
                          (k(P, r) && (r = "%" + (n = P[r])[0] + "%"), k(S, r))
                        ) {
                          var o = S[r];
                          if ((o === E && (o = C(r)), void 0 === o && !t))
                            throw new s(
                              "intrinsic " +
                                e +
                                " exists, but is not available. Please file an issue!",
                            );
                          return { alias: n, name: r, value: o };
                        }
                        throw new u("intrinsic " + e + " does not exist!");
                      };
                    e.exports = function (e, t) {
                      if ("string" != typeof e || 0 === e.length)
                        throw new s(
                          "intrinsic name must be a non-empty string",
                        );
                      if (arguments.length > 1 && "boolean" != typeof t)
                        throw new s(
                          '"allowMissing" argument must be a boolean',
                        );
                      if (null === M(/^%?[^%]*%?$/, e))
                        throw new u(
                          "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
                        );
                      var n = (function (e) {
                          var t = O(e, 0, 1),
                            n = O(e, -1);
                          if ("%" === t && "%" !== n)
                            throw new u(
                              "invalid intrinsic syntax, expected closing `%`",
                            );
                          if ("%" === n && "%" !== t)
                            throw new u(
                              "invalid intrinsic syntax, expected opening `%`",
                            );
                          var r = [];
                          return (
                            N(e, R, function (e, t, n, o) {
                              r[r.length] = n ? N(o, U, "$1") : t || e;
                            }),
                            r
                          );
                        })(e),
                        r = n.length > 0 ? n[0] : "",
                        o = D("%" + r + "%", t),
                        a = o.name,
                        i = o.value,
                        l = !1,
                        c = o.alias;
                      c && ((r = c[0]), T(n, I([0, 1], c)));
                      for (var f = 1, d = !0; f < n.length; f += 1) {
                        var p = n[f],
                          m = O(p, 0, 1),
                          h = O(p, -1);
                        if (
                          ('"' === m ||
                            "'" === m ||
                            "`" === m ||
                            '"' === h ||
                            "'" === h ||
                            "`" === h) &&
                          m !== h
                        )
                          throw new u(
                            "property names with quotes must have matching quotes",
                          );
                        if (
                          (("constructor" !== p && d) || (l = !0),
                          k(S, (a = "%" + (r += "." + p) + "%")))
                        )
                          i = S[a];
                        else if (null != i) {
                          if (!(p in i)) {
                            if (!t)
                              throw new s(
                                "base intrinsic for " +
                                  e +
                                  " exists, but the property is not available.",
                              );
                            return;
                          }
                          if (y && f + 1 >= n.length) {
                            var v = y(i, p);
                            i =
                              (d = !!v) &&
                              "get" in v &&
                              !("originalValue" in v.get)
                                ? v.get
                                : i[p];
                          } else (d = k(i, p)), (i = i[p]);
                          d && !l && (S[a] = i);
                        }
                      }
                      return i;
                    };
                  },
                  109: function (e, t, n) {
                    "use strict";
                    var r = n(651)("%Object.getOwnPropertyDescriptor%", !0);
                    if (r)
                      try {
                        r([], "length");
                      } catch (e) {
                        r = null;
                      }
                    e.exports = r;
                  },
                  890: function (e, t, n) {
                    "use strict";
                    var r = n(649),
                      o = function () {
                        return !!r;
                      };
                    (o.hasArrayLengthDefineBug = function () {
                      if (!r) return null;
                      try {
                        return 1 !== r([], "length", { value: 1 }).length;
                      } catch (e) {
                        return !0;
                      }
                    }),
                      (e.exports = o);
                  },
                  726: function (e) {
                    "use strict";
                    var t = { __proto__: null, foo: {} },
                      n = Object;
                    e.exports = function () {
                      return (
                        { __proto__: t }.foo === t.foo && !(t instanceof n)
                      );
                    };
                  },
                  257: function (e, t, n) {
                    "use strict";
                    var r = "undefined" != typeof Symbol && Symbol,
                      o = n(843);
                    e.exports = function () {
                      return (
                        "function" == typeof r &&
                        "function" == typeof Symbol &&
                        "symbol" == l(r("foo")) &&
                        "symbol" == l(Symbol("bar")) &&
                        o()
                      );
                    };
                  },
                  843: function (e) {
                    "use strict";
                    e.exports = function () {
                      if (
                        "function" != typeof Symbol ||
                        "function" != typeof Object.getOwnPropertySymbols
                      )
                        return !1;
                      if ("symbol" == l(Symbol.iterator)) return !0;
                      var e = {},
                        t = Symbol("test"),
                        n = Object(t);
                      if ("string" == typeof t) return !1;
                      if (
                        "[object Symbol]" !== Object.prototype.toString.call(t)
                      )
                        return !1;
                      if (
                        "[object Symbol]" !== Object.prototype.toString.call(n)
                      )
                        return !1;
                      for (t in ((e[t] = 42), e)) return !1;
                      if (
                        "function" == typeof Object.keys &&
                        0 !== Object.keys(e).length
                      )
                        return !1;
                      if (
                        "function" == typeof Object.getOwnPropertyNames &&
                        0 !== Object.getOwnPropertyNames(e).length
                      )
                        return !1;
                      var r = Object.getOwnPropertySymbols(e);
                      if (1 !== r.length || r[0] !== t) return !1;
                      if (!Object.prototype.propertyIsEnumerable.call(e, t))
                        return !1;
                      if (
                        "function" == typeof Object.getOwnPropertyDescriptor
                      ) {
                        var o = Object.getOwnPropertyDescriptor(e, t);
                        if (42 !== o.value || !0 !== o.enumerable) return !1;
                      }
                      return !0;
                    };
                  },
                  215: function (e, t, n) {
                    "use strict";
                    var r = Function.prototype.call,
                      o = Object.prototype.hasOwnProperty,
                      a = n(49);
                    e.exports = a.call(r, o);
                  },
                  709: function (e, t, n) {
                    var r,
                      o = 1 / 0,
                      a = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                      i = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                      c = "\\ud800-\\udfff",
                      u = "\\u2700-\\u27bf",
                      s = "a-z\\xdf-\\xf6\\xf8-\\xff",
                      f = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                      d =
                        "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                      p = "[" + d + "]",
                      y = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
                      m = "\\d+",
                      h = "[" + u + "]",
                      v = "[" + s + "]",
                      g = "[^" + c + d + m + u + s + f + "]",
                      b = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                      E = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                      w = "[" + f + "]",
                      S = "(?:" + v + "|" + g + ")",
                      A = "(?:" + w + "|" + g + ")",
                      C = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                      P = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                      x = "(?:" + y + "|\\ud83c[\\udffb-\\udfff])?",
                      k = "[\\ufe0e\\ufe0f]?",
                      I =
                        k +
                        x +
                        "(?:\\u200d(?:" +
                        ["[^" + c + "]", b, E].join("|") +
                        ")" +
                        k +
                        x +
                        ")*",
                      T = "(?:" + [h, b, E].join("|") + ")" + I,
                      N = RegExp("['’]", "g"),
                      O = RegExp(y, "g"),
                      M = RegExp(
                        [
                          w +
                            "?" +
                            v +
                            "+" +
                            C +
                            "(?=" +
                            [p, w, "$"].join("|") +
                            ")",
                          A + "+" + P + "(?=" + [p, w + S, "$"].join("|") + ")",
                          w + "?" + S + "+" + C,
                          w + "+" + P,
                          m,
                          T,
                        ].join("|"),
                        "g",
                      ),
                      R =
                        /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                      U =
                        "object" == l(n.g) &&
                        n.g &&
                        n.g.Object === Object &&
                        n.g,
                      D =
                        "object" ==
                          ("undefined" == typeof self
                            ? "undefined"
                            : l(self)) &&
                        self &&
                        self.Object === Object &&
                        self,
                      j = U || D || Function("return this")(),
                      L =
                        ((r = {
                          À: "A",
                          Á: "A",
                          Â: "A",
                          Ã: "A",
                          Ä: "A",
                          Å: "A",
                          à: "a",
                          á: "a",
                          â: "a",
                          ã: "a",
                          ä: "a",
                          å: "a",
                          Ç: "C",
                          ç: "c",
                          Ð: "D",
                          ð: "d",
                          È: "E",
                          É: "E",
                          Ê: "E",
                          Ë: "E",
                          è: "e",
                          é: "e",
                          ê: "e",
                          ë: "e",
                          Ì: "I",
                          Í: "I",
                          Î: "I",
                          Ï: "I",
                          ì: "i",
                          í: "i",
                          î: "i",
                          ï: "i",
                          Ñ: "N",
                          ñ: "n",
                          Ò: "O",
                          Ó: "O",
                          Ô: "O",
                          Õ: "O",
                          Ö: "O",
                          Ø: "O",
                          ò: "o",
                          ó: "o",
                          ô: "o",
                          õ: "o",
                          ö: "o",
                          ø: "o",
                          Ù: "U",
                          Ú: "U",
                          Û: "U",
                          Ü: "U",
                          ù: "u",
                          ú: "u",
                          û: "u",
                          ü: "u",
                          Ý: "Y",
                          ý: "y",
                          ÿ: "y",
                          Æ: "Ae",
                          æ: "ae",
                          Þ: "Th",
                          þ: "th",
                          ß: "ss",
                          Ā: "A",
                          Ă: "A",
                          Ą: "A",
                          ā: "a",
                          ă: "a",
                          ą: "a",
                          Ć: "C",
                          Ĉ: "C",
                          Ċ: "C",
                          Č: "C",
                          ć: "c",
                          ĉ: "c",
                          ċ: "c",
                          č: "c",
                          Ď: "D",
                          Đ: "D",
                          ď: "d",
                          đ: "d",
                          Ē: "E",
                          Ĕ: "E",
                          Ė: "E",
                          Ę: "E",
                          Ě: "E",
                          ē: "e",
                          ĕ: "e",
                          ė: "e",
                          ę: "e",
                          ě: "e",
                          Ĝ: "G",
                          Ğ: "G",
                          Ġ: "G",
                          Ģ: "G",
                          ĝ: "g",
                          ğ: "g",
                          ġ: "g",
                          ģ: "g",
                          Ĥ: "H",
                          Ħ: "H",
                          ĥ: "h",
                          ħ: "h",
                          Ĩ: "I",
                          Ī: "I",
                          Ĭ: "I",
                          Į: "I",
                          İ: "I",
                          ĩ: "i",
                          ī: "i",
                          ĭ: "i",
                          į: "i",
                          ı: "i",
                          Ĵ: "J",
                          ĵ: "j",
                          Ķ: "K",
                          ķ: "k",
                          ĸ: "k",
                          Ĺ: "L",
                          Ļ: "L",
                          Ľ: "L",
                          Ŀ: "L",
                          Ł: "L",
                          ĺ: "l",
                          ļ: "l",
                          ľ: "l",
                          ŀ: "l",
                          ł: "l",
                          Ń: "N",
                          Ņ: "N",
                          Ň: "N",
                          Ŋ: "N",
                          ń: "n",
                          ņ: "n",
                          ň: "n",
                          ŋ: "n",
                          Ō: "O",
                          Ŏ: "O",
                          Ő: "O",
                          ō: "o",
                          ŏ: "o",
                          ő: "o",
                          Ŕ: "R",
                          Ŗ: "R",
                          Ř: "R",
                          ŕ: "r",
                          ŗ: "r",
                          ř: "r",
                          Ś: "S",
                          Ŝ: "S",
                          Ş: "S",
                          Š: "S",
                          ś: "s",
                          ŝ: "s",
                          ş: "s",
                          š: "s",
                          Ţ: "T",
                          Ť: "T",
                          Ŧ: "T",
                          ţ: "t",
                          ť: "t",
                          ŧ: "t",
                          Ũ: "U",
                          Ū: "U",
                          Ŭ: "U",
                          Ů: "U",
                          Ű: "U",
                          Ų: "U",
                          ũ: "u",
                          ū: "u",
                          ŭ: "u",
                          ů: "u",
                          ű: "u",
                          ų: "u",
                          Ŵ: "W",
                          ŵ: "w",
                          Ŷ: "Y",
                          ŷ: "y",
                          Ÿ: "Y",
                          Ź: "Z",
                          Ż: "Z",
                          Ž: "Z",
                          ź: "z",
                          ż: "z",
                          ž: "z",
                          Ĳ: "IJ",
                          ĳ: "ij",
                          Œ: "Oe",
                          œ: "oe",
                          ŉ: "'n",
                          ſ: "ss",
                        }),
                        function (e) {
                          return null == r ? void 0 : r[e];
                        }),
                      B = Object.prototype.toString,
                      F = j.Symbol,
                      V = F ? F.prototype : void 0,
                      _ = V ? V.toString : void 0;
                    function q(e) {
                      return null == e
                        ? ""
                        : (function (e) {
                            if ("string" == typeof e) return e;
                            if (
                              (function (e) {
                                return (
                                  "symbol" == l(e) ||
                                  ((function (e) {
                                    return !!e && "object" == l(e);
                                  })(e) &&
                                    "[object Symbol]" == B.call(e))
                                );
                              })(e)
                            )
                              return _ ? _.call(e) : "";
                            var t = e + "";
                            return "0" == t && 1 / e == -o ? "-0" : t;
                          })(e);
                    }
                    var W,
                      H =
                        ((W = function (e, t, n) {
                          return e + (n ? "-" : "") + t.toLowerCase();
                        }),
                        function (e) {
                          return (function (e, t, n) {
                            for (var r = -1, o = e ? e.length : 0; ++r < o; )
                              n = t(n, e[r], r, e);
                            return n;
                          })(
                            (function (e) {
                              return (function (e) {
                                return R.test(e);
                              })((e = q(e)))
                                ? (function (e) {
                                    return e.match(M) || [];
                                  })(e)
                                : (function (e) {
                                    return e.match(a) || [];
                                  })(e);
                            })(
                              (function (e) {
                                return (
                                  (e = q(e)) && e.replace(i, L).replace(O, "")
                                );
                              })(e).replace(N, ""),
                            ),
                            W,
                            "",
                          );
                        });
                    e.exports = H;
                  },
                  937: function (e, t, n) {
                    var r = "function" == typeof Map && Map.prototype,
                      o =
                        Object.getOwnPropertyDescriptor && r
                          ? Object.getOwnPropertyDescriptor(
                              Map.prototype,
                              "size",
                            )
                          : null,
                      a = r && o && "function" == typeof o.get ? o.get : null,
                      i = r && Map.prototype.forEach,
                      c = "function" == typeof Set && Set.prototype,
                      u =
                        Object.getOwnPropertyDescriptor && c
                          ? Object.getOwnPropertyDescriptor(
                              Set.prototype,
                              "size",
                            )
                          : null,
                      s = c && u && "function" == typeof u.get ? u.get : null,
                      f = c && Set.prototype.forEach,
                      d =
                        "function" == typeof WeakMap && WeakMap.prototype
                          ? WeakMap.prototype.has
                          : null,
                      p =
                        "function" == typeof WeakSet && WeakSet.prototype
                          ? WeakSet.prototype.has
                          : null,
                      y =
                        "function" == typeof WeakRef && WeakRef.prototype
                          ? WeakRef.prototype.deref
                          : null,
                      m = Boolean.prototype.valueOf,
                      h = Object.prototype.toString,
                      v = Function.prototype.toString,
                      g = String.prototype.match,
                      b = String.prototype.slice,
                      E = String.prototype.replace,
                      w = String.prototype.toUpperCase,
                      S = String.prototype.toLowerCase,
                      A = RegExp.prototype.test,
                      C = Array.prototype.concat,
                      P = Array.prototype.join,
                      x = Array.prototype.slice,
                      k = Math.floor,
                      I =
                        "function" == typeof BigInt
                          ? BigInt.prototype.valueOf
                          : null,
                      T = Object.getOwnPropertySymbols,
                      N =
                        "function" == typeof Symbol &&
                        "symbol" == l(Symbol.iterator)
                          ? Symbol.prototype.toString
                          : null,
                      O =
                        "function" == typeof Symbol &&
                        "object" == l(Symbol.iterator),
                      M =
                        "function" == typeof Symbol &&
                        Symbol.toStringTag &&
                        (Symbol.toStringTag, 1)
                          ? Symbol.toStringTag
                          : null,
                      R = Object.prototype.propertyIsEnumerable,
                      U =
                        ("function" == typeof Reflect
                          ? Reflect.getPrototypeOf
                          : Object.getPrototypeOf) ||
                        ([].__proto__ === Array.prototype
                          ? function (e) {
                              return e.__proto__;
                            }
                          : null);
                    function D(e, t) {
                      if (
                        e === 1 / 0 ||
                        e === -1 / 0 ||
                        e != e ||
                        (e && e > -1e3 && e < 1e3) ||
                        A.call(/e/, t)
                      )
                        return t;
                      var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                      if ("number" == typeof e) {
                        var r = e < 0 ? -k(-e) : k(e);
                        if (r !== e) {
                          var o = String(r),
                            a = b.call(t, o.length + 1);
                          return (
                            E.call(o, n, "$&_") +
                            "." +
                            E.call(E.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
                          );
                        }
                      }
                      return E.call(t, n, "$&_");
                    }
                    var j = n(634),
                      L = j.custom,
                      B = W(L) ? L : null;
                    function F(e, t, n) {
                      var r = "double" === (n.quoteStyle || t) ? '"' : "'";
                      return r + e + r;
                    }
                    function V(e) {
                      return E.call(String(e), /"/g, "&quot;");
                    }
                    function _(e) {
                      return !(
                        "[object Array]" !== G(e) ||
                        (M && "object" == l(e) && M in e)
                      );
                    }
                    function q(e) {
                      return !(
                        "[object RegExp]" !== G(e) ||
                        (M && "object" == l(e) && M in e)
                      );
                    }
                    function W(e) {
                      if (O)
                        return e && "object" == l(e) && e instanceof Symbol;
                      if ("symbol" == l(e)) return !0;
                      if (!e || "object" != l(e) || !N) return !1;
                      try {
                        return N.call(e), !0;
                      } catch (e) {}
                      return !1;
                    }
                    e.exports = function e(t, r, o, c) {
                      var u = r || {};
                      if (
                        z(u, "quoteStyle") &&
                        "single" !== u.quoteStyle &&
                        "double" !== u.quoteStyle
                      )
                        throw new TypeError(
                          'option "quoteStyle" must be "single" or "double"',
                        );
                      if (
                        z(u, "maxStringLength") &&
                        ("number" == typeof u.maxStringLength
                          ? u.maxStringLength < 0 && u.maxStringLength !== 1 / 0
                          : null !== u.maxStringLength)
                      )
                        throw new TypeError(
                          'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
                        );
                      var h = !z(u, "customInspect") || u.customInspect;
                      if ("boolean" != typeof h && "symbol" !== h)
                        throw new TypeError(
                          "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`",
                        );
                      if (
                        z(u, "indent") &&
                        null !== u.indent &&
                        "\t" !== u.indent &&
                        !(parseInt(u.indent, 10) === u.indent && u.indent > 0)
                      )
                        throw new TypeError(
                          'option "indent" must be "\\t", an integer > 0, or `null`',
                        );
                      if (
                        z(u, "numericSeparator") &&
                        "boolean" != typeof u.numericSeparator
                      )
                        throw new TypeError(
                          'option "numericSeparator", if provided, must be `true` or `false`',
                        );
                      var w = u.numericSeparator;
                      if (void 0 === t) return "undefined";
                      if (null === t) return "null";
                      if ("boolean" == typeof t) return t ? "true" : "false";
                      if ("string" == typeof t) return $(t, u);
                      if ("number" == typeof t) {
                        if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
                        var A = String(t);
                        return w ? D(t, A) : A;
                      }
                      if ("bigint" == typeof t) {
                        var k = String(t) + "n";
                        return w ? D(t, k) : k;
                      }
                      var T = void 0 === u.depth ? 5 : u.depth;
                      if (
                        (void 0 === o && (o = 0),
                        o >= T && T > 0 && "object" == l(t))
                      )
                        return _(t) ? "[Array]" : "[Object]";
                      var L,
                        H = (function (e, t) {
                          var n;
                          if ("\t" === e.indent) n = "\t";
                          else {
                            if (!("number" == typeof e.indent && e.indent > 0))
                              return null;
                            n = P.call(Array(e.indent + 1), " ");
                          }
                          return { base: n, prev: P.call(Array(t + 1), n) };
                        })(u, o);
                      if (void 0 === c) c = [];
                      else if (K(c, t) >= 0) return "[Circular]";
                      function Y(t, n, r) {
                        if ((n && (c = x.call(c)).push(n), r)) {
                          var a = { depth: u.depth };
                          return (
                            z(u, "quoteStyle") && (a.quoteStyle = u.quoteStyle),
                            e(t, a, o + 1, c)
                          );
                        }
                        return e(t, u, o + 1, c);
                      }
                      if ("function" == typeof t && !q(t)) {
                        var te = (function (e) {
                            if (e.name) return e.name;
                            var t = g.call(v.call(e), /^function\s*([\w$]+)/);
                            return t ? t[1] : null;
                          })(t),
                          ne = ee(t, Y);
                        return (
                          "[Function" +
                          (te ? ": " + te : " (anonymous)") +
                          "]" +
                          (ne.length > 0 ? " { " + P.call(ne, ", ") + " }" : "")
                        );
                      }
                      if (W(t)) {
                        var re = O
                          ? E.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
                          : N.call(t);
                        return "object" != l(t) || O ? re : J(re);
                      }
                      if (
                        (L = t) &&
                        "object" == l(L) &&
                        (("undefined" != typeof HTMLElement &&
                          L instanceof HTMLElement) ||
                          ("string" == typeof L.nodeName &&
                            "function" == typeof L.getAttribute))
                      ) {
                        for (
                          var oe = "<" + S.call(String(t.nodeName)),
                            ae = t.attributes || [],
                            ie = 0;
                          ie < ae.length;
                          ie++
                        )
                          oe +=
                            " " +
                            ae[ie].name +
                            "=" +
                            F(V(ae[ie].value), "double", u);
                        return (
                          (oe += ">"),
                          t.childNodes && t.childNodes.length && (oe += "..."),
                          oe + "</" + S.call(String(t.nodeName)) + ">"
                        );
                      }
                      if (_(t)) {
                        if (0 === t.length) return "[]";
                        var le = ee(t, Y);
                        return H &&
                          !(function (e) {
                            for (var t = 0; t < e.length; t++)
                              if (K(e[t], "\n") >= 0) return !1;
                            return !0;
                          })(le)
                          ? "[" + Z(le, H) + "]"
                          : "[ " + P.call(le, ", ") + " ]";
                      }
                      if (
                        (function (e) {
                          return !(
                            "[object Error]" !== G(e) ||
                            (M && "object" == l(e) && M in e)
                          );
                        })(t)
                      ) {
                        var ce = ee(t, Y);
                        return "cause" in Error.prototype ||
                          !("cause" in t) ||
                          R.call(t, "cause")
                          ? 0 === ce.length
                            ? "[" + String(t) + "]"
                            : "{ [" + String(t) + "] " + P.call(ce, ", ") + " }"
                          : "{ [" +
                              String(t) +
                              "] " +
                              P.call(
                                C.call("[cause]: " + Y(t.cause), ce),
                                ", ",
                              ) +
                              " }";
                      }
                      if ("object" == l(t) && h) {
                        if (B && "function" == typeof t[B] && j)
                          return j(t, { depth: T - o });
                        if ("symbol" !== h && "function" == typeof t.inspect)
                          return t.inspect();
                      }
                      if (
                        (function (e) {
                          if (!a || !e || "object" != l(e)) return !1;
                          try {
                            a.call(e);
                            try {
                              s.call(e);
                            } catch (e) {
                              return !0;
                            }
                            return e instanceof Map;
                          } catch (e) {}
                          return !1;
                        })(t)
                      ) {
                        var ue = [];
                        return (
                          i &&
                            i.call(t, function (e, n) {
                              ue.push(Y(n, t, !0) + " => " + Y(e, t));
                            }),
                          X("Map", a.call(t), ue, H)
                        );
                      }
                      if (
                        (function (e) {
                          if (!s || !e || "object" != l(e)) return !1;
                          try {
                            s.call(e);
                            try {
                              a.call(e);
                            } catch (e) {
                              return !0;
                            }
                            return e instanceof Set;
                          } catch (e) {}
                          return !1;
                        })(t)
                      ) {
                        var se = [];
                        return (
                          f &&
                            f.call(t, function (e) {
                              se.push(Y(e, t));
                            }),
                          X("Set", s.call(t), se, H)
                        );
                      }
                      if (
                        (function (e) {
                          if (!d || !e || "object" != l(e)) return !1;
                          try {
                            d.call(e, d);
                            try {
                              p.call(e, p);
                            } catch (e) {
                              return !0;
                            }
                            return e instanceof WeakMap;
                          } catch (e) {}
                          return !1;
                        })(t)
                      )
                        return Q("WeakMap");
                      if (
                        (function (e) {
                          if (!p || !e || "object" != l(e)) return !1;
                          try {
                            p.call(e, p);
                            try {
                              d.call(e, d);
                            } catch (e) {
                              return !0;
                            }
                            return e instanceof WeakSet;
                          } catch (e) {}
                          return !1;
                        })(t)
                      )
                        return Q("WeakSet");
                      if (
                        (function (e) {
                          if (!y || !e || "object" != l(e)) return !1;
                          try {
                            return y.call(e), !0;
                          } catch (e) {}
                          return !1;
                        })(t)
                      )
                        return Q("WeakRef");
                      if (
                        (function (e) {
                          return !(
                            "[object Number]" !== G(e) ||
                            (M && "object" == l(e) && M in e)
                          );
                        })(t)
                      )
                        return J(Y(Number(t)));
                      if (
                        (function (e) {
                          if (!e || "object" != l(e) || !I) return !1;
                          try {
                            return I.call(e), !0;
                          } catch (e) {}
                          return !1;
                        })(t)
                      )
                        return J(Y(I.call(t)));
                      if (
                        (function (e) {
                          return !(
                            "[object Boolean]" !== G(e) ||
                            (M && "object" == l(e) && M in e)
                          );
                        })(t)
                      )
                        return J(m.call(t));
                      if (
                        (function (e) {
                          return !(
                            "[object String]" !== G(e) ||
                            (M && "object" == l(e) && M in e)
                          );
                        })(t)
                      )
                        return J(Y(String(t)));
                      if ("undefined" != typeof window && t === window)
                        return "{ [object Window] }";
                      if (t === n.g) return "{ [object globalThis] }";
                      if (
                        !(function (e) {
                          return !(
                            "[object Date]" !== G(e) ||
                            (M && "object" == l(e) && M in e)
                          );
                        })(t) &&
                        !q(t)
                      ) {
                        var fe = ee(t, Y),
                          de = U
                            ? U(t) === Object.prototype
                            : t instanceof Object || t.constructor === Object,
                          pe = t instanceof Object ? "" : "null prototype",
                          ye =
                            !de && M && Object(t) === t && M in t
                              ? b.call(G(t), 8, -1)
                              : pe
                                ? "Object"
                                : "",
                          me =
                            (de || "function" != typeof t.constructor
                              ? ""
                              : t.constructor.name
                                ? t.constructor.name + " "
                                : "") +
                            (ye || pe
                              ? "[" +
                                P.call(C.call([], ye || [], pe || []), ": ") +
                                "] "
                              : "");
                        return 0 === fe.length
                          ? me + "{}"
                          : H
                            ? me + "{" + Z(fe, H) + "}"
                            : me + "{ " + P.call(fe, ", ") + " }";
                      }
                      return String(t);
                    };
                    var H =
                      Object.prototype.hasOwnProperty ||
                      function (e) {
                        return e in this;
                      };
                    function z(e, t) {
                      return H.call(e, t);
                    }
                    function G(e) {
                      return h.call(e);
                    }
                    function K(e, t) {
                      if (e.indexOf) return e.indexOf(t);
                      for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                      return -1;
                    }
                    function $(e, t) {
                      if (e.length > t.maxStringLength) {
                        var n = e.length - t.maxStringLength,
                          r =
                            "... " + n + " more character" + (n > 1 ? "s" : "");
                        return $(b.call(e, 0, t.maxStringLength), t) + r;
                      }
                      return F(
                        E.call(
                          E.call(e, /(['\\])/g, "\\$1"),
                          /[\x00-\x1f]/g,
                          Y,
                        ),
                        "single",
                        t,
                      );
                    }
                    function Y(e) {
                      var t = e.charCodeAt(0),
                        n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
                      return n
                        ? "\\" + n
                        : "\\x" + (t < 16 ? "0" : "") + w.call(t.toString(16));
                    }
                    function J(e) {
                      return "Object(" + e + ")";
                    }
                    function Q(e) {
                      return e + " { ? }";
                    }
                    function X(e, t, n, r) {
                      return (
                        e +
                        " (" +
                        t +
                        ") {" +
                        (r ? Z(n, r) : P.call(n, ", ")) +
                        "}"
                      );
                    }
                    function Z(e, t) {
                      if (0 === e.length) return "";
                      var n = "\n" + t.prev + t.base;
                      return n + P.call(e, "," + n) + "\n" + t.prev;
                    }
                    function ee(e, t) {
                      var n = _(e),
                        r = [];
                      if (n) {
                        r.length = e.length;
                        for (var o = 0; o < e.length; o++)
                          r[o] = z(e, o) ? t(e[o], e) : "";
                      }
                      var a,
                        i = "function" == typeof T ? T(e) : [];
                      if (O) {
                        a = {};
                        for (var l = 0; l < i.length; l++) a["$" + i[l]] = i[l];
                      }
                      for (var c in e)
                        z(e, c) &&
                          ((n && String(Number(c)) === c && c < e.length) ||
                            (O && a["$" + c] instanceof Symbol) ||
                            (A.call(/[^\w$]/, c)
                              ? r.push(t(c, e) + ": " + t(e[c], e))
                              : r.push(c + ": " + t(e[c], e))));
                      if ("function" == typeof T)
                        for (var u = 0; u < i.length; u++)
                          R.call(e, i[u]) &&
                            r.push("[" + t(i[u]) + "]: " + t(e[i[u]], e));
                      return r;
                    }
                  },
                  647: function (e) {
                    "use strict";
                    var t = String.prototype.replace,
                      n = /%20/g,
                      r = "RFC3986";
                    e.exports = {
                      default: r,
                      formatters: {
                        RFC1738: function (e) {
                          return t.call(e, n, "+");
                        },
                        RFC3986: function (e) {
                          return String(e);
                        },
                      },
                      RFC1738: "RFC1738",
                      RFC3986: r,
                    };
                  },
                  882: function (e, t, n) {
                    "use strict";
                    var r = n(402),
                      o = n(662),
                      a = n(647),
                      i = Object.prototype.hasOwnProperty,
                      c = {
                        brackets: function (e) {
                          return e + "[]";
                        },
                        comma: "comma",
                        indices: function (e, t) {
                          return e + "[" + t + "]";
                        },
                        repeat: function (e) {
                          return e;
                        },
                      },
                      u = Array.isArray,
                      s = Array.prototype.push,
                      f = function (e, t) {
                        s.apply(e, u(t) ? t : [t]);
                      },
                      d = Date.prototype.toISOString,
                      p = a.default,
                      y = {
                        addQueryPrefix: !1,
                        allowDots: !1,
                        allowEmptyArrays: !1,
                        arrayFormat: "indices",
                        charset: "utf-8",
                        charsetSentinel: !1,
                        commaRoundTrip: !1,
                        delimiter: "&",
                        encode: !0,
                        encodeDotInKeys: !1,
                        encoder: o.encode,
                        encodeValuesOnly: !1,
                        filter: void 0,
                        format: p,
                        formatter: a.formatters[p],
                        indices: !1,
                        serializeDate: function (e) {
                          return d.call(e);
                        },
                        skipNulls: !1,
                        strictNullHandling: !1,
                      },
                      m = {},
                      h = function e(
                        t,
                        n,
                        a,
                        i,
                        c,
                        s,
                        d,
                        p,
                        h,
                        v,
                        g,
                        b,
                        E,
                        w,
                        S,
                        A,
                        C,
                        P,
                      ) {
                        for (
                          var x, k = t, I = P, T = 0, N = !1;
                          void 0 !== (I = I.get(m)) && !N;

                        ) {
                          var O = I.get(t);
                          if (((T += 1), void 0 !== O)) {
                            if (O === T)
                              throw new RangeError("Cyclic object value");
                            N = !0;
                          }
                          void 0 === I.get(m) && (T = 0);
                        }
                        if (
                          ("function" == typeof v
                            ? (k = v(n, k))
                            : k instanceof Date
                              ? (k = E(k))
                              : "comma" === a &&
                                u(k) &&
                                (k = o.maybeMap(k, function (e) {
                                  return e instanceof Date ? E(e) : e;
                                })),
                          null === k)
                        ) {
                          if (s)
                            return h && !A ? h(n, y.encoder, C, "key", w) : n;
                          k = "";
                        }
                        if (
                          "string" == typeof (x = k) ||
                          "number" == typeof x ||
                          "boolean" == typeof x ||
                          "symbol" == l(x) ||
                          "bigint" == typeof x ||
                          o.isBuffer(k)
                        )
                          return h
                            ? [
                                S(A ? n : h(n, y.encoder, C, "key", w)) +
                                  "=" +
                                  S(h(k, y.encoder, C, "value", w)),
                              ]
                            : [S(n) + "=" + S(String(k))];
                        var M,
                          R = [];
                        if (void 0 === k) return R;
                        if ("comma" === a && u(k))
                          A && h && (k = o.maybeMap(k, h)),
                            (M = [
                              {
                                value:
                                  k.length > 0 ? k.join(",") || null : void 0,
                              },
                            ]);
                        else if (u(v)) M = v;
                        else {
                          var U = Object.keys(k);
                          M = g ? U.sort(g) : U;
                        }
                        var D = p ? String(n).replace(/\./g, "%2E") : String(n),
                          j = i && u(k) && 1 === k.length ? D + "[]" : D;
                        if (c && u(k) && 0 === k.length) return j + "[]";
                        for (var L = 0; L < M.length; ++L) {
                          var B = M[L],
                            F =
                              "object" == l(B) && B && void 0 !== B.value
                                ? B.value
                                : k[B];
                          if (!d || null !== F) {
                            var V =
                                b && p
                                  ? String(B).replace(/\./g, "%2E")
                                  : String(B),
                              _ = u(k)
                                ? "function" == typeof a
                                  ? a(j, V)
                                  : j
                                : j + (b ? "." + V : "[" + V + "]");
                            P.set(t, T);
                            var q = r();
                            q.set(m, P),
                              f(
                                R,
                                e(
                                  F,
                                  _,
                                  a,
                                  i,
                                  c,
                                  s,
                                  d,
                                  p,
                                  "comma" === a && A && u(k) ? null : h,
                                  v,
                                  g,
                                  b,
                                  E,
                                  w,
                                  S,
                                  A,
                                  C,
                                  q,
                                ),
                              );
                          }
                        }
                        return R;
                      };
                    e.exports = function (e, t) {
                      var n,
                        o = e,
                        s = (function (e) {
                          if (!e) return y;
                          if (
                            void 0 !== e.allowEmptyArrays &&
                            "boolean" != typeof e.allowEmptyArrays
                          )
                            throw new TypeError(
                              "`allowEmptyArrays` option can only be `true` or `false`, when provided",
                            );
                          if (
                            void 0 !== e.encodeDotInKeys &&
                            "boolean" != typeof e.encodeDotInKeys
                          )
                            throw new TypeError(
                              "`encodeDotInKeys` option can only be `true` or `false`, when provided",
                            );
                          if (
                            null !== e.encoder &&
                            void 0 !== e.encoder &&
                            "function" != typeof e.encoder
                          )
                            throw new TypeError(
                              "Encoder has to be a function.",
                            );
                          var t = e.charset || y.charset;
                          if (
                            void 0 !== e.charset &&
                            "utf-8" !== e.charset &&
                            "iso-8859-1" !== e.charset
                          )
                            throw new TypeError(
                              "The charset option must be either utf-8, iso-8859-1, or undefined",
                            );
                          var n = a.default;
                          if (void 0 !== e.format) {
                            if (!i.call(a.formatters, e.format))
                              throw new TypeError(
                                "Unknown format option provided.",
                              );
                            n = e.format;
                          }
                          var r,
                            o = a.formatters[n],
                            l = y.filter;
                          if (
                            (("function" == typeof e.filter || u(e.filter)) &&
                              (l = e.filter),
                            (r =
                              e.arrayFormat in c
                                ? e.arrayFormat
                                : "indices" in e
                                  ? e.indices
                                    ? "indices"
                                    : "repeat"
                                  : y.arrayFormat),
                            "commaRoundTrip" in e &&
                              "boolean" != typeof e.commaRoundTrip)
                          )
                            throw new TypeError(
                              "`commaRoundTrip` must be a boolean, or absent",
                            );
                          var s =
                            void 0 === e.allowDots
                              ? !0 === e.encodeDotInKeys || y.allowDots
                              : !!e.allowDots;
                          return {
                            addQueryPrefix:
                              "boolean" == typeof e.addQueryPrefix
                                ? e.addQueryPrefix
                                : y.addQueryPrefix,
                            allowDots: s,
                            allowEmptyArrays:
                              "boolean" == typeof e.allowEmptyArrays
                                ? !!e.allowEmptyArrays
                                : y.allowEmptyArrays,
                            arrayFormat: r,
                            charset: t,
                            charsetSentinel:
                              "boolean" == typeof e.charsetSentinel
                                ? e.charsetSentinel
                                : y.charsetSentinel,
                            commaRoundTrip: !!e.commaRoundTrip,
                            delimiter:
                              void 0 === e.delimiter
                                ? y.delimiter
                                : e.delimiter,
                            encode:
                              "boolean" == typeof e.encode
                                ? e.encode
                                : y.encode,
                            encodeDotInKeys:
                              "boolean" == typeof e.encodeDotInKeys
                                ? e.encodeDotInKeys
                                : y.encodeDotInKeys,
                            encoder:
                              "function" == typeof e.encoder
                                ? e.encoder
                                : y.encoder,
                            encodeValuesOnly:
                              "boolean" == typeof e.encodeValuesOnly
                                ? e.encodeValuesOnly
                                : y.encodeValuesOnly,
                            filter: l,
                            format: n,
                            formatter: o,
                            serializeDate:
                              "function" == typeof e.serializeDate
                                ? e.serializeDate
                                : y.serializeDate,
                            skipNulls:
                              "boolean" == typeof e.skipNulls
                                ? e.skipNulls
                                : y.skipNulls,
                            sort: "function" == typeof e.sort ? e.sort : null,
                            strictNullHandling:
                              "boolean" == typeof e.strictNullHandling
                                ? e.strictNullHandling
                                : y.strictNullHandling,
                          };
                        })(t);
                      "function" == typeof s.filter
                        ? (o = (0, s.filter)("", o))
                        : u(s.filter) && (n = s.filter);
                      var d = [];
                      if ("object" != l(o) || null === o) return "";
                      var p = c[s.arrayFormat],
                        m = "comma" === p && s.commaRoundTrip;
                      n || (n = Object.keys(o)), s.sort && n.sort(s.sort);
                      for (var v = r(), g = 0; g < n.length; ++g) {
                        var b = n[g],
                          E = o[b];
                        (s.skipNulls && null === E) ||
                          f(
                            d,
                            h(
                              E,
                              b,
                              p,
                              m,
                              s.allowEmptyArrays,
                              s.strictNullHandling,
                              s.skipNulls,
                              s.encodeDotInKeys,
                              s.encode ? s.encoder : null,
                              s.filter,
                              s.sort,
                              s.allowDots,
                              s.serializeDate,
                              s.format,
                              s.formatter,
                              s.encodeValuesOnly,
                              s.charset,
                              v,
                            ),
                          );
                      }
                      var w = d.join(s.delimiter),
                        S = !0 === s.addQueryPrefix ? "?" : "";
                      return (
                        s.charsetSentinel &&
                          ("iso-8859-1" === s.charset
                            ? (S += "utf8=%26%2310003%3B&")
                            : (S += "utf8=%E2%9C%93&")),
                        w.length > 0 ? S + w : ""
                      );
                    };
                  },
                  662: function (e, t, n) {
                    "use strict";
                    var r = n(647),
                      o = Object.prototype.hasOwnProperty,
                      a = Array.isArray,
                      i = (function () {
                        for (var e = [], t = 0; t < 256; ++t)
                          e.push(
                            "%" +
                              (
                                (t < 16 ? "0" : "") + t.toString(16)
                              ).toUpperCase(),
                          );
                        return e;
                      })(),
                      c = function (e, t) {
                        for (
                          var n =
                              t && t.plainObjects ? { __proto__: null } : {},
                            r = 0;
                          r < e.length;
                          ++r
                        )
                          void 0 !== e[r] && (n[r] = e[r]);
                        return n;
                      },
                      u = 1024;
                    e.exports = {
                      arrayToObject: c,
                      assign: function (e, t) {
                        return Object.keys(t).reduce(function (e, n) {
                          return (e[n] = t[n]), e;
                        }, e);
                      },
                      combine: function (e, t) {
                        return [].concat(e, t);
                      },
                      compact: function (e) {
                        for (
                          var t = [{ obj: { o: e }, prop: "o" }], n = [], r = 0;
                          r < t.length;
                          ++r
                        )
                          for (
                            var o = t[r],
                              i = o.obj[o.prop],
                              c = Object.keys(i),
                              u = 0;
                            u < c.length;
                            ++u
                          ) {
                            var s = c[u],
                              f = i[s];
                            "object" == l(f) &&
                              null !== f &&
                              -1 === n.indexOf(f) &&
                              (t.push({ obj: i, prop: s }), n.push(f));
                          }
                        return (
                          (function (e) {
                            for (; e.length > 1; ) {
                              var t = e.pop(),
                                n = t.obj[t.prop];
                              if (a(n)) {
                                for (var r = [], o = 0; o < n.length; ++o)
                                  void 0 !== n[o] && r.push(n[o]);
                                t.obj[t.prop] = r;
                              }
                            }
                          })(t),
                          e
                        );
                      },
                      decode: function (e, t, n) {
                        var r = e.replace(/\+/g, " ");
                        if ("iso-8859-1" === n)
                          return r.replace(/%[0-9a-f]{2}/gi, unescape);
                        try {
                          return decodeURIComponent(r);
                        } catch (e) {
                          return r;
                        }
                      },
                      encode: function (e, t, n, o, a) {
                        if (0 === e.length) return e;
                        var c = e;
                        if (
                          ("symbol" == l(e)
                            ? (c = Symbol.prototype.toString.call(e))
                            : "string" != typeof e && (c = String(e)),
                          "iso-8859-1" === n)
                        )
                          return escape(c).replace(
                            /%u[0-9a-f]{4}/gi,
                            function (e) {
                              return (
                                "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                              );
                            },
                          );
                        for (var s = "", f = 0; f < c.length; f += u) {
                          for (
                            var d = c.length >= u ? c.slice(f, f + u) : c,
                              p = [],
                              y = 0;
                            y < d.length;
                            ++y
                          ) {
                            var m = d.charCodeAt(y);
                            45 === m ||
                            46 === m ||
                            95 === m ||
                            126 === m ||
                            (m >= 48 && m <= 57) ||
                            (m >= 65 && m <= 90) ||
                            (m >= 97 && m <= 122) ||
                            (a === r.RFC1738 && (40 === m || 41 === m))
                              ? (p[p.length] = d.charAt(y))
                              : m < 128
                                ? (p[p.length] = i[m])
                                : m < 2048
                                  ? (p[p.length] =
                                      i[192 | (m >> 6)] + i[128 | (63 & m)])
                                  : m < 55296 || m >= 57344
                                    ? (p[p.length] =
                                        i[224 | (m >> 12)] +
                                        i[128 | ((m >> 6) & 63)] +
                                        i[128 | (63 & m)])
                                    : ((y += 1),
                                      (m =
                                        65536 +
                                        (((1023 & m) << 10) |
                                          (1023 & d.charCodeAt(y)))),
                                      (p[p.length] =
                                        i[240 | (m >> 18)] +
                                        i[128 | ((m >> 12) & 63)] +
                                        i[128 | ((m >> 6) & 63)] +
                                        i[128 | (63 & m)]));
                          }
                          s += p.join("");
                        }
                        return s;
                      },
                      isBuffer: function (e) {
                        return !(
                          !e ||
                          "object" != l(e) ||
                          !(
                            e.constructor &&
                            e.constructor.isBuffer &&
                            e.constructor.isBuffer(e)
                          )
                        );
                      },
                      isRegExp: function (e) {
                        return (
                          "[object RegExp]" ===
                          Object.prototype.toString.call(e)
                        );
                      },
                      maybeMap: function (e, t) {
                        if (a(e)) {
                          for (var n = [], r = 0; r < e.length; r += 1)
                            n.push(t(e[r]));
                          return n;
                        }
                        return t(e);
                      },
                      merge: function e(t, n, r) {
                        if (!n) return t;
                        if ("object" != l(n) && "function" != typeof n) {
                          if (a(t)) t.push(n);
                          else {
                            if (!t || "object" != l(t)) return [t, n];
                            ((r && (r.plainObjects || r.allowPrototypes)) ||
                              !o.call(Object.prototype, n)) &&
                              (t[n] = !0);
                          }
                          return t;
                        }
                        if (!t || "object" != l(t)) return [t].concat(n);
                        var i = t;
                        return (
                          a(t) && !a(n) && (i = c(t, r)),
                          a(t) && a(n)
                            ? (n.forEach(function (n, a) {
                                if (o.call(t, a)) {
                                  var i = t[a];
                                  i && "object" == l(i) && n && "object" == l(n)
                                    ? (t[a] = e(i, n, r))
                                    : t.push(n);
                                } else t[a] = n;
                              }),
                              t)
                            : Object.keys(n).reduce(function (t, a) {
                                var i = n[a];
                                return (
                                  o.call(t, a)
                                    ? (t[a] = e(t[a], i, r))
                                    : (t[a] = i),
                                  t
                                );
                              }, i)
                        );
                      },
                    };
                  },
                  255: function (e, t, n) {
                    "use strict";
                    var r = n(651),
                      o = n(295),
                      a = n(890)(),
                      i = n(109),
                      l = n(785),
                      c = r("%Math.floor%");
                    e.exports = function (e, t) {
                      if ("function" != typeof e)
                        throw new l("`fn` is not a function");
                      if (
                        "number" != typeof t ||
                        t < 0 ||
                        t > 4294967295 ||
                        c(t) !== t
                      )
                        throw new l(
                          "`length` must be a positive 32-bit integer",
                        );
                      var n = arguments.length > 2 && !!arguments[2],
                        r = !0,
                        u = !0;
                      if ("length" in e && i) {
                        var s = i(e, "length");
                        s && !s.configurable && (r = !1),
                          s && !s.writable && (u = !1);
                      }
                      return (
                        (r || u || !n) &&
                          (a ? o(e, "length", t, !0, !0) : o(e, "length", t)),
                        e
                      );
                    };
                  },
                  402: function (e, t, n) {
                    "use strict";
                    var r = n(651),
                      o = n(913),
                      a = n(937),
                      i = n(785),
                      c = r("%WeakMap%", !0),
                      u = r("%Map%", !0),
                      s = o("WeakMap.prototype.get", !0),
                      f = o("WeakMap.prototype.set", !0),
                      d = o("WeakMap.prototype.has", !0),
                      p = o("Map.prototype.get", !0),
                      y = o("Map.prototype.set", !0),
                      m = o("Map.prototype.has", !0),
                      h = function (e, t) {
                        for (var n, r = e; null !== (n = r.next); r = n)
                          if (n.key === t)
                            return (
                              (r.next = n.next),
                              (n.next = e.next),
                              (e.next = n),
                              n
                            );
                      };
                    e.exports = function () {
                      var e,
                        t,
                        n,
                        r = {
                          assert: function (e) {
                            if (!r.has(e))
                              throw new i(
                                "Side channel does not contain " + a(e),
                              );
                          },
                          get: function (r) {
                            if (
                              c &&
                              r &&
                              ("object" == l(r) || "function" == typeof r)
                            ) {
                              if (e) return s(e, r);
                            } else if (u) {
                              if (t) return p(t, r);
                            } else if (n)
                              return (function (e, t) {
                                var n = h(e, t);
                                return n && n.value;
                              })(n, r);
                          },
                          has: function (r) {
                            if (
                              c &&
                              r &&
                              ("object" == l(r) || "function" == typeof r)
                            ) {
                              if (e) return d(e, r);
                            } else if (u) {
                              if (t) return m(t, r);
                            } else if (n)
                              return (function (e, t) {
                                return !!h(e, t);
                              })(n, r);
                            return !1;
                          },
                          set: function (r, o) {
                            c &&
                            r &&
                            ("object" == l(r) || "function" == typeof r)
                              ? (e || (e = new c()), f(e, r, o))
                              : u
                                ? (t || (t = new u()), y(t, r, o))
                                : (n || (n = { key: {}, next: null }),
                                  (function (e, t, n) {
                                    var r = h(e, t);
                                    r
                                      ? (r.value = n)
                                      : (e.next = {
                                          key: t,
                                          next: e.next,
                                          value: n,
                                        });
                                  })(n, r, o));
                          },
                        };
                      return r;
                    };
                  },
                  634: function () {},
                },
                t = {};
              function n(r) {
                var o = t[r];
                if (void 0 !== o) return o.exports;
                var a = (t[r] = { exports: {} });
                return e[r](a, a.exports, n), a.exports;
              }
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, { a: t }), t;
              }),
                (n.d = function (e, t) {
                  for (var r in t)
                    n.o(t, r) &&
                      !n.o(e, r) &&
                      Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r],
                      });
                }),
                (n.g = (function () {
                  if (
                    "object" ==
                    ("undefined" == typeof globalThis
                      ? "undefined"
                      : l(globalThis))
                  )
                    return globalThis;
                  try {
                    return this || new Function("return this")();
                  } catch (e) {
                    if (
                      "object" ==
                      ("undefined" == typeof window ? "undefined" : l(window))
                    )
                      return window;
                  }
                })()),
                (n.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                });
              var r = {};
              return (
                (function () {
                  "use strict";
                  n.d(r, {
                    default: function () {
                      return C;
                    },
                  });
                  var e,
                    t,
                    o,
                    a = n(882),
                    i = n.n(a);
                  function l(e) {
                    switch (e) {
                      case "development":
                        return o.Development;
                      case "staging":
                        return o.Staging;
                      case "canary":
                        return o.Canary;
                      default:
                        return o.Production;
                    }
                  }
                  !(function (e) {
                    (e.Cancel = "exit"),
                      (e.Complete = "complete"),
                      (e.Error = "error"),
                      (e.Fail = "fail"),
                      (e.Load = "load"),
                      (e.Ready = "ready"),
                      (e.Start = "start"),
                      (e.Success = "success"),
                      (e.DocumentCameraSelect = "document-camera-select"),
                      (e.DocumentCameraCapture = "document-camera-capture"),
                      (e.DocumentUpload = "document-upload"),
                      (e.OneTimeLinkSent = "one-time-link-sent"),
                      (e.OneTimeLinkStart = "one-time-link-start"),
                      (e.OneTimeLinkExit = "one-time-link-exit"),
                      (e.SelfieCameraSelect = "selfie-camera-select"),
                      (e.SelfieCameraCapture = "selfie-camera-capture"),
                      (e.SelfieRecordUpload = "selfie-record-upload"),
                      (e.LoadCameraFailed = "load-camera-failed"),
                      (e.PageChange = "page-change"),
                      (e.InquiryLoad = "inquiry-load"),
                      (e.CountrySelect = "country-select"),
                      (e.VerificationChange = "verification-change");
                  })(e || (e = {})),
                    (function (e) {
                      (e.Open = "open"),
                        (e.Exit = "exit"),
                        (e.Destroy = "destroy");
                    })(t || (t = {})),
                    (function (e) {
                      (e.Development = "http://localhost:3000"),
                        (e.Staging = "https://inquiry.withpersona-staging.com"),
                        (e.Canary = "https://canary.withpersona.com"),
                        (e.Production = "https://inquiry.withpersona.com");
                    })(o || (o = {}));
                  var c = n(709),
                    u = n.n(c),
                    s = function () {
                      return (
                        (s =
                          Object.assign ||
                          function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                              for (var o in (t = arguments[n]))
                                Object.prototype.hasOwnProperty.call(t, o) &&
                                  (e[o] = t[o]);
                            return e;
                          }),
                        s.apply(this, arguments)
                      );
                    };
                  function f(e) {
                    return Array.isArray(e)
                      ? e.map(f)
                      : (function (e) {
                            return null != e && e.constructor === Object;
                          })(e)
                        ? Object.keys(e).reduce(function (t, n) {
                            var r;
                            return s(
                              s({}, t),
                              (((r = {})[u()(n)] = f(e[n])), r),
                            );
                          }, {})
                        : e;
                  }
                  var d = function (e) {
                      var t = "function" == typeof Symbol && Symbol.iterator,
                        n = t && e[t],
                        r = 0;
                      if (n) return n.call(e);
                      if (e && "number" == typeof e.length)
                        return {
                          next: function () {
                            return (
                              e && r >= e.length && (e = void 0),
                              { value: e && e[r++], done: !e }
                            );
                          },
                        };
                      throw new TypeError(
                        t
                          ? "Object is not iterable."
                          : "Symbol.iterator is not defined.",
                      );
                    },
                    p = function (e, t) {
                      var n = "function" == typeof Symbol && e[Symbol.iterator];
                      if (!n) return e;
                      var r,
                        o,
                        a = n.call(e),
                        i = [];
                      try {
                        for (
                          ;
                          (void 0 === t || t-- > 0) && !(r = a.next()).done;

                        )
                          i.push(r.value);
                      } catch (e) {
                        o = { error: e };
                      } finally {
                        try {
                          r && !r.done && (n = a.return) && n.call(a);
                        } finally {
                          if (o) throw o.error;
                        }
                      }
                      return i;
                    },
                    y = (function () {
                      function e(e) {
                        this.id = e;
                      }
                      return (
                        (e.prototype.isMounted = function () {
                          return null != document.getElementById(this.id);
                        }),
                        (e.prototype.mount = function (e) {
                          if (document.getElementById(this.id))
                            console.warn(
                              "persona: stylesheet ".concat(
                                this.id,
                                " already appended. skipping.",
                              ),
                            );
                          else {
                            var t = h("style", { id: this.id }, [
                              document.createTextNode(e),
                            ]);
                            document.head.appendChild(t);
                          }
                        }),
                        (e.prototype.unmount = function () {
                          var e,
                            t = document.getElementById(this.id);
                          null != t
                            ? null === (e = t.parentNode) ||
                              void 0 === e ||
                              e.removeChild(t)
                            : console.warn(
                                "persona: no stylesheet ".concat(
                                  this.id,
                                  " to remove. skipping.",
                                ),
                              );
                        }),
                        e
                      );
                    })();
                  function m(e, t, n) {
                    var r, o, a, i;
                    void 0 === n && (n = []);
                    var l = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e,
                    );
                    try {
                      for (
                        var c = d(Object.entries(t)), u = c.next();
                        !u.done;
                        u = c.next()
                      ) {
                        var s = p(u.value, 2),
                          f = s[0],
                          y = s[1];
                        "className" === f && (f = "class"),
                          l.setAttribute(f, y);
                      }
                    } catch (e) {
                      r = { error: e };
                    } finally {
                      try {
                        u && !u.done && (o = c.return) && o.call(c);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                    try {
                      for (var m = d(n), h = m.next(); !h.done; h = m.next()) {
                        var v = h.value;
                        !1 !== v && l.appendChild(v);
                      }
                    } catch (e) {
                      a = { error: e };
                    } finally {
                      try {
                        h && !h.done && (i = m.return) && i.call(m);
                      } finally {
                        if (a) throw a.error;
                      }
                    }
                    return l;
                  }
                  function h(e, t, n) {
                    var r, o, a, i;
                    void 0 === n && (n = []);
                    var l = document.createElement(e);
                    try {
                      for (
                        var c = d(Object.entries(t)), u = c.next();
                        !u.done;
                        u = c.next()
                      ) {
                        var s = p(u.value, 2),
                          f = s[0],
                          y = s[1];
                        "className" === f && (f = "class"),
                          l.setAttribute(f, y);
                      }
                    } catch (e) {
                      r = { error: e };
                    } finally {
                      try {
                        u && !u.done && (o = c.return) && o.call(c);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                    try {
                      for (var m = d(n), h = m.next(); !h.done; h = m.next()) {
                        var v = h.value;
                        !1 !== v &&
                          ("string" == typeof v
                            ? l.appendChild(document.createTextNode(v))
                            : l.appendChild(v));
                      }
                    } catch (e) {
                      a = { error: e };
                    } finally {
                      try {
                        h && !h.done && (i = m.return) && i.call(m);
                      } finally {
                        if (a) throw a.error;
                      }
                    }
                    return l;
                  }
                  function v(e) {
                    return "string" == typeof e
                      ? e
                      : "number" == typeof e
                        ? "".concat(e, "px")
                        : "";
                  }
                  var g = [
                      "allow-scripts",
                      "allow-same-origin",
                      "allow-popups",
                    ],
                    b = [
                      "allow-forms",
                      "allow-modals",
                      "allow-top-navigation-by-user-activation",
                    ];
                  function E(e, t, n, r) {
                    var o = r.accountId,
                      a = r.accountTypeId,
                      c = r.environment,
                      u = r.environmentId,
                      s = r.fields,
                      d = r.frameAncestors,
                      p = r.frameHeight,
                      y = r.frameWidth,
                      m = r.host,
                      h = r.iframeTitle,
                      E = r.inquiryId,
                      w = r.language,
                      S = r.messageTargetOrigin,
                      A = r.referenceId,
                      C = r.routingCountry,
                      P = r.sandboxAttributes,
                      x = void 0 === P ? b : P,
                      k = r.sessionToken,
                      I = r.styleVariant,
                      T = r.templateId,
                      N = r.templateVersionId,
                      O = r.themeSetId,
                      M = r.widgetPadding,
                      R = !(!T && !N),
                      U = null == T ? void 0 : T.startsWith("itmpl_");
                    if (!R && !E)
                      throw new Error(
                        "Either templateId/templateVersionId or inquiryId must be specified to start a flow",
                      );
                    if (R && E)
                      throw new Error(
                        "Only one of templateId/templateVersionId or inquiryId should be specified to start a flow",
                      );
                    if (o) {
                      if (A)
                        throw new Error(
                          "Cannot pass both accountId and referenceId",
                        );
                      if (a)
                        throw new Error(
                          "Cannot pass both accountId and accountTypeId",
                        );
                    }
                    var D = l(m),
                      j = i()(
                        {
                          "client-version": "5.1.5",
                          "container-id": t,
                          "flow-type": n,
                          "routing-country": C,
                          "template-id": (U ? null : T) || null,
                          "inquiry-template-id": (U ? T : null) || null,
                          "inquiry-template-version-id": N || null,
                          environment: c,
                          "environment-id": u,
                          "iframe-origin": window.location.origin,
                          "frame-ancestors": null != d ? d : null,
                          "message-target-origin": S || null,
                          "inquiry-id": E || null,
                          language: w,
                          "session-token": k,
                          "reference-id": A,
                          "account-id": o,
                          "account-type-id": a,
                          fields: f(null != s ? s : {}),
                          "style-variant": I || null,
                          "theme-set-id": O,
                          "widget-padding": M,
                        },
                        { addQueryPrefix: !0, skipNulls: !0 },
                      );
                    return (
                      (e.style.maxHeight = v(p)),
                      (e.style.maxWidth = v(y)),
                      e.setAttribute("data-testid", "persona-widget__iframe"),
                      "embedded" === n && e.setAttribute("aria-modal", "true"),
                      (e.title = null != h ? h : "Verify your identity"),
                      (e.className = "persona-widget__iframe"),
                      (e.allow = "camera;microphone;clipboard-write"),
                      e.setAttribute("sandbox", g.concat(x).join(" ")),
                      (e.frameBorder = "0"),
                      (e.src = D + "/widget" + j),
                      (e.onload = function () {}),
                      e
                    );
                  }
                  var w = (function () {
                      function e() {}
                      return (
                        (e.log = function (e, t) {
                          void 0 === t && (t = "info");
                        }),
                        e
                      );
                    })(),
                    S = function (e) {
                      return e.split(".").slice(-2).join(".");
                    };
                  function A(t, n) {
                    var r = n.onLoad,
                      o = n.onReady,
                      a = n.onComplete,
                      i = n.onEvent,
                      c = n.onCancel,
                      u = n.onError,
                      s = n.templateId,
                      f = n.templateVersionId,
                      d = n.host,
                      p = function (n) {
                        var p,
                          y = l(null != d ? d : "production");
                        if ("" !== n.origin)
                          try {
                            if (
                              S(new URL(n.origin).host) !== S(new URL(y).host)
                            )
                              return;
                          } catch (e) {
                            return;
                          }
                        if (
                          !(
                            (s && s !== n.data.templateId) ||
                            (f && f !== n.data.templateVersionId) ||
                            (n.data.containerId && t !== n.data.containerId)
                          )
                        )
                          switch (
                            (null == i || i(n.data.name, n.data.metadata),
                            n.data.name)
                          ) {
                            case e.Load:
                              null == r || r();
                              break;
                            case e.Ready:
                              null == o || o();
                              break;
                            case e.Complete:
                            case e.Fail:
                              null == a ||
                                a({
                                  inquiryId: n.data.metadata.inquiryId,
                                  status: n.data.metadata.status,
                                  fields:
                                    null !== (p = n.data.metadata.fields) &&
                                    void 0 !== p
                                      ? p
                                      : n.data.metadata.scopes,
                                });
                              break;
                            case e.Cancel:
                              null == c ||
                                c({
                                  inquiryId: n.data.metadata.inquiryId,
                                  sessionToken: n.data.metadata.sessionToken,
                                });
                              break;
                            case e.Error:
                              null == u || u(n.data.error);
                          }
                      };
                    return (
                      window.addEventListener("message", p),
                      function () {
                        window.removeEventListener("message", p);
                      }
                    );
                  }
                  var C = {
                    Client: (function () {
                      function e(e) {
                        var t,
                          n,
                          r,
                          o,
                          a,
                          i,
                          l,
                          c,
                          u,
                          s,
                          f,
                          d = this;
                        (this._isLoading = !0),
                          (this._isOpen = !1),
                          (this.personaCSS = new y("persona-widget-styles")),
                          (this.globalCSS = new y("persona-global-styles")),
                          (this.onLoad = function () {
                            var e, t;
                            (d._isLoading = !1),
                              d.render(),
                              null === (t = (e = d.options).onLoad) ||
                                void 0 === t ||
                                t.call(e);
                          }),
                          (this.onReady = function () {
                            var e, t;
                            null === (t = (e = d.options).onReady) ||
                              void 0 === t ||
                              t.call(e);
                          }),
                          (this.onComplete = function (e) {
                            var t,
                              n,
                              r = e.inquiryId,
                              o = e.status,
                              a = e.fields;
                            (d._isOpen = !1),
                              d.render(),
                              null === (n = (t = d.options).onComplete) ||
                                void 0 === n ||
                                n.call(t, {
                                  inquiryId: r,
                                  status: o,
                                  fields: a,
                                });
                          }),
                          (this.onCancel = function (e) {
                            var t,
                              n,
                              r = e.inquiryId,
                              o = e.sessionToken;
                            (d._isOpen = !1),
                              d.render(),
                              null === (n = (t = d.options).onCancel) ||
                                void 0 === n ||
                                n.call(t, { inquiryId: r, sessionToken: o });
                          }),
                          (this.options = e),
                          (this.containerParent =
                            null !==
                              (n =
                                null !== (t = e.parent) && void 0 !== t
                                  ? t
                                  : document.body) && void 0 !== n
                              ? n
                              : document.children[0]),
                          (this.containerElement = h("div", {
                            class: "persona-widget__overlay",
                            style: "display: ".concat(
                              this._isOpen ? "block" : "none",
                            ),
                          })),
                          (this.containerId =
                            "persona-widget-" +
                            new Array(16)
                              .fill(void 0)
                              .map(function () {
                                return Math.floor(35 * Math.random()).toString(
                                  35,
                                );
                              })
                              .join("")),
                          this.containerElement.setAttribute(
                            "id",
                            this.containerId,
                          ),
                          (this.loadingElement = h(
                            "div",
                            { class: "persona-widget__centered-frame" },
                            [
                              m(
                                "svg",
                                {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "114",
                                  height: "114",
                                  class: "persona-widget__loading-spinner",
                                },
                                [
                                  m("path", {
                                    fill: "none",
                                    stroke: "#0F2B72",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M25.887 10.432a56.275 56.275 0 0 0-15.455 15.455 55.86 55.86 0 0 0-5.183 9.678A55.576 55.576 0 0 0 2.066 46.07m-.8 5.438A56.678 56.678 0 0 0 1 57m4.249 21.435a55.86 55.86 0 0 0 5.183 9.678 56.275 56.275 0 0 0 6.97 8.485m8.485 6.97a55.86 55.86 0 0 0 9.678 5.183 55.576 55.576 0 0 0 10.506 3.183c3.535.7 7.19 1.066 10.929 1.066 3.74 0 7.394-.367 10.929-1.066a55.576 55.576 0 0 0 10.506-3.183 55.86 55.86 0 0 0 9.678-5.183 56.275 56.275 0 0 0 15.455-15.455 55.86 55.86 0 0 0 5.183-9.678 55.576 55.576 0 0 0 3.183-10.506A56.274 56.274 0 0 0 113 57c0-3.74-.367-7.394-1.066-10.929a55.576 55.576 0 0 0-3.183-10.506M96.598 17.402a56.275 56.275 0 0 0-8.485-6.97 55.86 55.86 0 0 0-9.678-5.183A55.576 55.576 0 0 0 67.93 2.066 56.274 56.274 0 0 0 57 1c-3.74 0-7.394.367-10.929 1.066m-34.94 30.418A51.76 51.76 0 0 0 7.225 41.9a51.633 51.633 0 0 0-1.98 10 52.63 52.63 0 0 0 .744 15.247 51.633 51.633 0 0 0 7.768 18.743 52.188 52.188 0 0 0 10.254 11.308 52.188 52.188 0 0 0 8.472 5.67m9.417 3.905a51.633 51.633 0 0 0 10 1.98 52.63 52.63 0 0 0 10.197 0 51.939 51.939 0 0 0 10-1.98 51.61 51.61 0 0 0 9.418-3.904 51.984 51.984 0 0 0 8.472-5.671m3.782-3.43a52.308 52.308 0 0 0 3.429-3.78m9.575-17.89a51.633 51.633 0 0 0 1.98-10 52.63 52.63 0 0 0-.744-15.247 51.633 51.633 0 0 0-7.768-18.743 52.188 52.188 0 0 0-10.254-11.308m-4.097-3.043a51.984 51.984 0 0 0-4.375-2.628M67.148 5.99a51.939 51.939 0 0 0-5.05-.743 52.63 52.63 0 0 0-15.246.743 51.633 51.633 0 0 0-18.743 7.768M24.012 16.8a52.308 52.308 0 0 0-3.782 3.43",
                                  }),
                                ],
                              ),
                            ],
                          )),
                          this.containerElement.append(this.loadingElement),
                          this.isLoading
                            ? (this.loadingElement.style.display = "block")
                            : (this.loadingElement.style.display = "none"),
                          (this.iframeElement =
                            document.createElement("iframe")),
                          (this.unsubscribeFromEvents = A(this.containerId, {
                            onLoad:
                              null !== (r = this.onLoad) && void 0 !== r
                                ? r
                                : null,
                            onReady:
                              null !== (o = this.onReady) && void 0 !== o
                                ? o
                                : null,
                            onComplete:
                              null !== (a = this.onComplete) && void 0 !== a
                                ? a
                                : null,
                            onCancel:
                              null !== (i = this.onCancel) && void 0 !== i
                                ? i
                                : null,
                            onEvent:
                              null !== (l = this.options.onEvent) &&
                              void 0 !== l
                                ? l
                                : null,
                            onError:
                              null !== (c = this.options.onError) &&
                              void 0 !== c
                                ? c
                                : null,
                            templateId:
                              null !== (u = this.options.templateId) &&
                              void 0 !== u
                                ? u
                                : null,
                            templateVersionId:
                              null !== (s = this.options.templateVersionId) &&
                              void 0 !== s
                                ? s
                                : null,
                            host:
                              null !== (f = this.options.host) && void 0 !== f
                                ? f
                                : null,
                          })),
                          this.containerElement.appendChild(this.iframeElement),
                          this.containerParent.appendChild(
                            this.containerElement,
                          ),
                          this.personaCSS.mount(
                            "@keyframes persona-widget__fadeIn {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n    opacity: 0;\n  }\n  to {\n    /* persona-widget__overlay opacity = 0.7 */\n    background-color: rgba(0, 0, 0, 0.7);\n    opacity: 1;\n  }\n}\n\n@keyframes persona-widget__genieSlideIn {\n  from {\n    transform: translate(-50%, -40%) scale(0.8);\n  }\n  90% {\n    transform: translate(-50%, -51%) scale(1.01);\n  }\n  to {\n    transform: translate(-50%, -50%);\n  }\n}\n\n@keyframes persona-widget__slideDown {\n  from {\n    transform: translate(-50%, -55%);\n  }\n  to {\n    transform: translate(-50%, -50%);\n  }\n}\n\n.persona-widget__overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  animation: persona-widget__fadeIn 0.3s;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.persona-widget__overlay .persona-widget__centered-frame {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  left: calc(50% - 60px);\n  top: calc(50% - 60px);\n  z-index: 9999;\n}\n\n.persona-widget__overlay .persona-widget__loading-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.persona-widget__overlay .persona-widget__iframe {\n  animation: persona-widget__genieSlideIn 0.3s, persona-widget__slideDown ease-out 0.3s;\n\n  width: 100%;\n  height: 100%;\n\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n\n  background-color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0px 12px 40px 2px rgba(0, 0, 0, 0.4);\n\n  @media only screen and (min-width: 600.02px) and (min-height: 600.02px) {\n    max-width: 400px;\n    max-height: 650px;\n  }\n}\n",
                          );
                        try {
                          this.iframeElement = E(
                            this.iframeElement,
                            this.containerId,
                            "embedded",
                            this.options,
                          );
                        } catch (e) {
                          throw (
                            (console.error("Persona", e), this.destroy(), e)
                          );
                        }
                        this.render();
                      }
                      return (
                        (e.preload = function (e) {
                          return (
                            void 0 === e && (e = "production"),
                            new Promise(function (t) {
                              var n = l(e),
                                r = document.createElement("iframe");
                              (r.frameBorder = "0"),
                                (r.style.height = "0px"),
                                (r.style.width = "0px"),
                                (r.style.display = "none"),
                                (r.src = n + "/preload"),
                                document.body.appendChild(r),
                                (r.onload = function () {
                                  document.body.removeChild(r), t();
                                });
                            })
                          );
                        }),
                        (e.prototype.render = function () {
                          var e;
                          null != this.containerElement
                            ? ((this.loadingElement.style.display = this
                                .isLoading
                                ? "block"
                                : "none"),
                              (this.containerElement.style.display = this.isOpen
                                ? "block"
                                : "none"),
                              this.isOpen && !this.globalCSS.isMounted()
                                ? this.globalCSS.mount(
                                    ((e = this.containerId),
                                    "\n  /* Don't allow scrolling when widget is open */\n  html body {\n    overflow: hidden !important;\n  }\n\n  /* When the widget takes the full screen, hide everything else to prevent iOS scroll issues. */\n  @media "
                                      .concat(
                                        "(max-width: 600px), (max-height: 420px)",
                                        " {\n    html body > *:not(#",
                                      )
                                      .concat(
                                        e,
                                        ") {\n      display: none !important;\n    }\n  }\n",
                                      )),
                                  )
                                : !this.isOpen &&
                                  this.globalCSS.isMounted() &&
                                  this.globalCSS.unmount())
                            : w.log(
                                "Cannot render client that has been destroyed",
                                "error",
                              );
                        }),
                        (e.prototype.open = function () {
                          var e;
                          null === (e = this.iframeElement.contentWindow) ||
                            void 0 === e ||
                            e.postMessage(
                              { action: t.Open, metadata: {} },
                              this.baseUrl,
                            ),
                            (this._isOpen = !0),
                            this.render();
                        }),
                        (e.prototype.cancel = function (e) {
                          var n;
                          null === (n = this.iframeElement.contentWindow) ||
                            void 0 === n ||
                            n.postMessage(
                              { action: t.Exit, metadata: { force: e } },
                              this.baseUrl,
                            ),
                            this.render();
                        }),
                        (e.prototype.destroy = function () {
                          var e;
                          null === (e = this.iframeElement.contentWindow) ||
                            void 0 === e ||
                            e.postMessage(
                              { action: t.Destroy, metadata: {} },
                              this.baseUrl,
                            ),
                            this.personaCSS.unmount(),
                            this.globalCSS.unmount(),
                            this.containerParent.removeChild(
                              this.containerElement,
                            ),
                            this.unsubscribeFromEvents();
                        }),
                        Object.defineProperty(e.prototype, "isLoading", {
                          get: function () {
                            return this._isLoading;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "isOpen", {
                          get: function () {
                            return this._isOpen;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "baseUrl", {
                          get: function () {
                            return l(this.options.host);
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        e
                      );
                    })(),
                    setupIframe: E,
                    setupEvents: A,
                  };
                })(),
                r.default
              );
            })();
          }),
          "object" == l(t) && "object" == l(e)
            ? (e.exports = i())
            : ((o = []),
              void 0 ===
                (a = "function" == typeof (r = i) ? r.apply(t, o) : r) ||
                (e.exports = a));
      },
      574: function (e, t, n) {
        var r = n(24),
          o = n(496),
          a = n(154),
          i = n(195);
        function l(e, t, n, a, i) {
          var l = [].slice.call(arguments, 1),
            c = l.length,
            u = "function" == typeof l[c - 1];
          if (!u && !r()) throw new Error("Callback required as last argument");
          if (!u) {
            if (c < 1) throw new Error("Too few arguments provided");
            return (
              1 === c
                ? ((n = t), (t = a = void 0))
                : 2 !== c || t.getContext || ((a = n), (n = t), (t = void 0)),
              new Promise(function (r, i) {
                try {
                  var l = o.create(n, a);
                  r(e(l, t, a));
                } catch (e) {
                  i(e);
                }
              })
            );
          }
          if (c < 2) throw new Error("Too few arguments provided");
          2 === c
            ? ((i = n), (n = t), (t = a = void 0))
            : 3 === c &&
              (t.getContext && void 0 === i
                ? ((i = a), (a = void 0))
                : ((i = a), (a = n), (n = t), (t = void 0)));
          try {
            var s = o.create(n, a);
            i(null, e(s, t, a));
          } catch (e) {
            i(e);
          }
        }
        o.create,
          l.bind(null, a.render),
          (t.toDataURL = l.bind(null, a.renderToDataURL)),
          l.bind(null, function (e, t, n) {
            return i.render(e, n);
          });
      },
      24: function (e) {
        e.exports = function () {
          return (
            "function" == typeof Promise &&
            Promise.prototype &&
            Promise.prototype.then
          );
        };
      },
      498: function (e, t, n) {
        var r = n(701).getSymbolSize;
        (t.getRowColCoords = function (e) {
          if (1 === e) return [];
          for (
            var t = Math.floor(e / 7) + 2,
              n = r(e),
              o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
              a = [n - 7],
              i = 1;
            i < t - 1;
            i++
          )
            a[i] = a[i - 1] - o;
          return a.push(6), a.reverse();
        }),
          (t.getPositions = function (e) {
            for (
              var n = [], r = t.getRowColCoords(e), o = r.length, a = 0;
              a < o;
              a++
            )
              for (var i = 0; i < o; i++)
                (0 === a && 0 === i) ||
                  (0 === a && i === o - 1) ||
                  (a === o - 1 && 0 === i) ||
                  n.push([r[a], r[i]]);
            return n;
          });
      },
      734: function (e, t, n) {
        var r = n(145),
          o = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            " ",
            "$",
            "%",
            "*",
            "+",
            "-",
            ".",
            "/",
            ":",
          ];
        function a(e) {
          (this.mode = r.ALPHANUMERIC), (this.data = e);
        }
        (a.getBitsLength = function (e) {
          return 11 * Math.floor(e / 2) + (e % 2) * 6;
        }),
          (a.prototype.getLength = function () {
            return this.data.length;
          }),
          (a.prototype.getBitsLength = function () {
            return a.getBitsLength(this.data.length);
          }),
          (a.prototype.write = function (e) {
            var t;
            for (t = 0; t + 2 <= this.data.length; t += 2) {
              var n = 45 * o.indexOf(this.data[t]);
              (n += o.indexOf(this.data[t + 1])), e.put(n, 11);
            }
            this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6);
          }),
          (e.exports = a);
      },
      330: function (e) {
        function t() {
          (this.buffer = []), (this.length = 0);
        }
        (t.prototype = {
          get: function (e) {
            var t = Math.floor(e / 8);
            return 1 == ((this.buffer[t] >>> (7 - (e % 8))) & 1);
          },
          put: function (e, t) {
            for (var n = 0; n < t; n++)
              this.putBit(1 == ((e >>> (t - n - 1)) & 1));
          },
          getLengthInBits: function () {
            return this.length;
          },
          putBit: function (e) {
            var t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0),
              e && (this.buffer[t] |= 128 >>> this.length % 8),
              this.length++;
          },
        }),
          (e.exports = t);
      },
      345: function (e) {
        function t(e) {
          if (!e || e < 1)
            throw new Error(
              "BitMatrix size must be defined and greater than 0",
            );
          (this.size = e),
            (this.data = new Uint8Array(e * e)),
            (this.reservedBit = new Uint8Array(e * e));
        }
        (t.prototype.set = function (e, t, n, r) {
          var o = e * this.size + t;
          (this.data[o] = n), r && (this.reservedBit[o] = !0);
        }),
          (t.prototype.get = function (e, t) {
            return this.data[e * this.size + t];
          }),
          (t.prototype.xor = function (e, t, n) {
            this.data[e * this.size + t] ^= n;
          }),
          (t.prototype.isReserved = function (e, t) {
            return this.reservedBit[e * this.size + t];
          }),
          (e.exports = t);
      },
      557: function (e, t, n) {
        var r = n(717),
          o = n(145);
        function a(e) {
          (this.mode = o.BYTE),
            "string" == typeof e && (e = r(e)),
            (this.data = new Uint8Array(e));
        }
        (a.getBitsLength = function (e) {
          return 8 * e;
        }),
          (a.prototype.getLength = function () {
            return this.data.length;
          }),
          (a.prototype.getBitsLength = function () {
            return a.getBitsLength(this.data.length);
          }),
          (a.prototype.write = function (e) {
            for (var t = 0, n = this.data.length; t < n; t++)
              e.put(this.data[t], 8);
          }),
          (e.exports = a);
      },
      185: function (e, t, n) {
        var r = n(308),
          o = [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
            4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4,
            8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16,
            6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17,
            23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29,
            35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45,
            15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19,
            37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45,
            62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
          ],
          a = [
            7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26,
            48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60,
            110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260,
            308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432,
            144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196,
            364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476,
            690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870,
            1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050,
            1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290,
            1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530,
            1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770,
            2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040,
            2430,
          ];
        (t.getBlocksCount = function (e, t) {
          switch (t) {
            case r.L:
              return o[4 * (e - 1) + 0];
            case r.M:
              return o[4 * (e - 1) + 1];
            case r.Q:
              return o[4 * (e - 1) + 2];
            case r.H:
              return o[4 * (e - 1) + 3];
            default:
              return;
          }
        }),
          (t.getTotalCodewordsCount = function (e, t) {
            switch (t) {
              case r.L:
                return a[4 * (e - 1) + 0];
              case r.M:
                return a[4 * (e - 1) + 1];
              case r.Q:
                return a[4 * (e - 1) + 2];
              case r.H:
                return a[4 * (e - 1) + 3];
              default:
                return;
            }
          });
      },
      308: function (e, t) {
        (t.L = { bit: 1 }),
          (t.M = { bit: 0 }),
          (t.Q = { bit: 3 }),
          (t.H = { bit: 2 }),
          (t.isValid = function (e) {
            return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
          }),
          (t.from = function (e, n) {
            if (t.isValid(e)) return e;
            try {
              return (function (e) {
                if ("string" != typeof e)
                  throw new Error("Param is not a string");
                switch (e.toLowerCase()) {
                  case "l":
                  case "low":
                    return t.L;
                  case "m":
                  case "medium":
                    return t.M;
                  case "q":
                  case "quartile":
                    return t.Q;
                  case "h":
                  case "high":
                    return t.H;
                  default:
                    throw new Error("Unknown EC Level: " + e);
                }
              })(e);
            } catch (e) {
              return n;
            }
          });
      },
      305: function (e, t, n) {
        var r = n(701).getSymbolSize;
        t.getPositions = function (e) {
          var t = r(e);
          return [
            [0, 0],
            [t - 7, 0],
            [0, t - 7],
          ];
        };
      },
      826: function (e, t, n) {
        var r = n(701),
          o = r.getBCHDigit(1335);
        t.getEncodedBits = function (e, t) {
          for (
            var n = (e.bit << 3) | t, a = n << 10;
            r.getBCHDigit(a) - o >= 0;

          )
            a ^= 1335 << (r.getBCHDigit(a) - o);
          return 21522 ^ ((n << 10) | a);
        };
      },
      666: function (e, t) {
        var n = new Uint8Array(512),
          r = new Uint8Array(256);
        !(function () {
          for (var e = 1, t = 0; t < 255; t++)
            (n[t] = e), (r[e] = t), 256 & (e <<= 1) && (e ^= 285);
          for (var o = 255; o < 512; o++) n[o] = n[o - 255];
        })(),
          (t.log = function (e) {
            if (e < 1) throw new Error("log(" + e + ")");
            return r[e];
          }),
          (t.exp = function (e) {
            return n[e];
          }),
          (t.mul = function (e, t) {
            return 0 === e || 0 === t ? 0 : n[r[e] + r[t]];
          });
      },
      927: function (e, t, n) {
        var r = n(145),
          o = n(701);
        function a(e) {
          (this.mode = r.KANJI), (this.data = e);
        }
        (a.getBitsLength = function (e) {
          return 13 * e;
        }),
          (a.prototype.getLength = function () {
            return this.data.length;
          }),
          (a.prototype.getBitsLength = function () {
            return a.getBitsLength(this.data.length);
          }),
          (a.prototype.write = function (e) {
            var t;
            for (t = 0; t < this.data.length; t++) {
              var n = o.toSJIS(this.data[t]);
              if (n >= 33088 && n <= 40956) n -= 33088;
              else {
                if (!(n >= 57408 && n <= 60351))
                  throw new Error(
                    "Invalid SJIS character: " +
                      this.data[t] +
                      "\nMake sure your charset is UTF-8",
                  );
                n -= 49472;
              }
              (n = 192 * ((n >>> 8) & 255) + (255 & n)), e.put(n, 13);
            }
          }),
          (e.exports = a);
      },
      29: function (e, t) {
        t.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7,
        };
        var n = 3,
          r = 3,
          o = 40,
          a = 10;
        function i(e, n, r) {
          switch (e) {
            case t.Patterns.PATTERN000:
              return (n + r) % 2 == 0;
            case t.Patterns.PATTERN001:
              return n % 2 == 0;
            case t.Patterns.PATTERN010:
              return r % 3 == 0;
            case t.Patterns.PATTERN011:
              return (n + r) % 3 == 0;
            case t.Patterns.PATTERN100:
              return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
            case t.Patterns.PATTERN101:
              return ((n * r) % 2) + ((n * r) % 3) == 0;
            case t.Patterns.PATTERN110:
              return (((n * r) % 2) + ((n * r) % 3)) % 2 == 0;
            case t.Patterns.PATTERN111:
              return (((n * r) % 3) + ((n + r) % 2)) % 2 == 0;
            default:
              throw new Error("bad maskPattern:" + e);
          }
        }
        (t.isValid = function (e) {
          return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
        }),
          (t.from = function (e) {
            return t.isValid(e) ? parseInt(e, 10) : void 0;
          }),
          (t.getPenaltyN1 = function (e) {
            for (
              var t = e.size, r = 0, o = 0, a = 0, i = null, l = null, c = 0;
              c < t;
              c++
            ) {
              (o = a = 0), (i = l = null);
              for (var u = 0; u < t; u++) {
                var s = e.get(c, u);
                s === i
                  ? o++
                  : (o >= 5 && (r += n + (o - 5)), (i = s), (o = 1)),
                  (s = e.get(u, c)) === l
                    ? a++
                    : (a >= 5 && (r += n + (a - 5)), (l = s), (a = 1));
              }
              o >= 5 && (r += n + (o - 5)), a >= 5 && (r += n + (a - 5));
            }
            return r;
          }),
          (t.getPenaltyN2 = function (e) {
            for (var t = e.size, n = 0, o = 0; o < t - 1; o++)
              for (var a = 0; a < t - 1; a++) {
                var i =
                  e.get(o, a) +
                  e.get(o, a + 1) +
                  e.get(o + 1, a) +
                  e.get(o + 1, a + 1);
                (4 !== i && 0 !== i) || n++;
              }
            return n * r;
          }),
          (t.getPenaltyN3 = function (e) {
            for (var t = e.size, n = 0, r = 0, a = 0, i = 0; i < t; i++) {
              r = a = 0;
              for (var l = 0; l < t; l++)
                (r = ((r << 1) & 2047) | e.get(i, l)),
                  l >= 10 && (1488 === r || 93 === r) && n++,
                  (a = ((a << 1) & 2047) | e.get(l, i)),
                  l >= 10 && (1488 === a || 93 === a) && n++;
            }
            return n * o;
          }),
          (t.getPenaltyN4 = function (e) {
            for (var t = 0, n = e.data.length, r = 0; r < n; r++)
              t += e.data[r];
            return Math.abs(Math.ceil((100 * t) / n / 5) - 10) * a;
          }),
          (t.applyMask = function (e, t) {
            for (var n = t.size, r = 0; r < n; r++)
              for (var o = 0; o < n; o++)
                t.isReserved(o, r) || t.xor(o, r, i(e, o, r));
          }),
          (t.getBestMask = function (e, n) {
            for (
              var r = Object.keys(t.Patterns).length, o = 0, a = 1 / 0, i = 0;
              i < r;
              i++
            ) {
              n(i), t.applyMask(i, e);
              var l =
                t.getPenaltyN1(e) +
                t.getPenaltyN2(e) +
                t.getPenaltyN3(e) +
                t.getPenaltyN4(e);
              t.applyMask(i, e), l < a && ((a = l), (o = i));
            }
            return o;
          });
      },
      145: function (e, t, n) {
        var r = n(893),
          o = n(795);
        (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
          (t.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13],
          }),
          (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
          (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
          (t.MIXED = { bit: -1 }),
          (t.getCharCountIndicator = function (e, t) {
            if (!e.ccBits) throw new Error("Invalid mode: " + e);
            if (!r.isValid(t)) throw new Error("Invalid version: " + t);
            return t >= 1 && t < 10
              ? e.ccBits[0]
              : t < 27
                ? e.ccBits[1]
                : e.ccBits[2];
          }),
          (t.getBestModeForData = function (e) {
            return o.testNumeric(e)
              ? t.NUMERIC
              : o.testAlphanumeric(e)
                ? t.ALPHANUMERIC
                : o.testKanji(e)
                  ? t.KANJI
                  : t.BYTE;
          }),
          (t.toString = function (e) {
            if (e && e.id) return e.id;
            throw new Error("Invalid mode");
          }),
          (t.isValid = function (e) {
            return e && e.bit && e.ccBits;
          }),
          (t.from = function (e, n) {
            if (t.isValid(e)) return e;
            try {
              return (function (e) {
                if ("string" != typeof e)
                  throw new Error("Param is not a string");
                switch (e.toLowerCase()) {
                  case "numeric":
                    return t.NUMERIC;
                  case "alphanumeric":
                    return t.ALPHANUMERIC;
                  case "kanji":
                    return t.KANJI;
                  case "byte":
                    return t.BYTE;
                  default:
                    throw new Error("Unknown mode: " + e);
                }
              })(e);
            } catch (e) {
              return n;
            }
          });
      },
      808: function (e, t, n) {
        var r = n(145);
        function o(e) {
          (this.mode = r.NUMERIC), (this.data = e.toString());
        }
        (o.getBitsLength = function (e) {
          return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
        }),
          (o.prototype.getLength = function () {
            return this.data.length;
          }),
          (o.prototype.getBitsLength = function () {
            return o.getBitsLength(this.data.length);
          }),
          (o.prototype.write = function (e) {
            var t, n, r;
            for (t = 0; t + 3 <= this.data.length; t += 3)
              (n = this.data.substr(t, 3)), (r = parseInt(n, 10)), e.put(r, 10);
            var o = this.data.length - t;
            o > 0 &&
              ((n = this.data.substr(t)),
              (r = parseInt(n, 10)),
              e.put(r, 3 * o + 1));
          }),
          (e.exports = o);
      },
      4: function (e, t, n) {
        var r = n(666);
        (t.mul = function (e, t) {
          for (
            var n = new Uint8Array(e.length + t.length - 1), o = 0;
            o < e.length;
            o++
          )
            for (var a = 0; a < t.length; a++) n[o + a] ^= r.mul(e[o], t[a]);
          return n;
        }),
          (t.mod = function (e, t) {
            for (var n = new Uint8Array(e); n.length - t.length >= 0; ) {
              for (var o = n[0], a = 0; a < t.length; a++)
                n[a] ^= r.mul(t[a], o);
              for (var i = 0; i < n.length && 0 === n[i]; ) i++;
              n = n.slice(i);
            }
            return n;
          }),
          (t.generateECPolynomial = function (e) {
            for (var n = new Uint8Array([1]), o = 0; o < e; o++)
              n = t.mul(n, new Uint8Array([1, r.exp(o)]));
            return n;
          });
      },
      496: function (e, t, n) {
        var r = n(701),
          o = n(308),
          a = n(330),
          i = n(345),
          l = n(498),
          c = n(305),
          u = n(29),
          s = n(185),
          f = n(181),
          d = n(184),
          p = n(826),
          y = n(145),
          m = n(144);
        function h(e, t, n) {
          var r,
            o,
            a = e.size,
            i = p.getEncodedBits(t, n);
          for (r = 0; r < 15; r++)
            (o = 1 == ((i >> r) & 1)),
              r < 6
                ? e.set(r, 8, o, !0)
                : r < 8
                  ? e.set(r + 1, 8, o, !0)
                  : e.set(a - 15 + r, 8, o, !0),
              r < 8
                ? e.set(8, a - r - 1, o, !0)
                : r < 9
                  ? e.set(8, 15 - r - 1 + 1, o, !0)
                  : e.set(8, 15 - r - 1, o, !0);
          e.set(a - 8, 8, 1, !0);
        }
        function v(e, t, n) {
          var o = new a();
          n.forEach(function (t) {
            o.put(t.mode.bit, 4),
              o.put(t.getLength(), y.getCharCountIndicator(t.mode, e)),
              t.write(o);
          });
          var i =
            8 * (r.getSymbolTotalCodewords(e) - s.getTotalCodewordsCount(e, t));
          for (
            o.getLengthInBits() + 4 <= i && o.put(0, 4);
            o.getLengthInBits() % 8 != 0;

          )
            o.putBit(0);
          for (var l = (i - o.getLengthInBits()) / 8, c = 0; c < l; c++)
            o.put(c % 2 ? 17 : 236, 8);
          return (function (e, t, n) {
            for (
              var o = r.getSymbolTotalCodewords(t),
                a = s.getTotalCodewordsCount(t, n),
                i = o - a,
                l = s.getBlocksCount(t, n),
                c = l - (o % l),
                u = Math.floor(o / l),
                d = Math.floor(i / l),
                p = d + 1,
                y = u - d,
                m = new f(y),
                h = 0,
                v = new Array(l),
                g = new Array(l),
                b = 0,
                E = new Uint8Array(e.buffer),
                w = 0;
              w < l;
              w++
            ) {
              var S = w < c ? d : p;
              (v[w] = E.slice(h, h + S)),
                (g[w] = m.encode(v[w])),
                (h += S),
                (b = Math.max(b, S));
            }
            var A,
              C,
              P = new Uint8Array(o),
              x = 0;
            for (A = 0; A < b; A++)
              for (C = 0; C < l; C++) A < v[C].length && (P[x++] = v[C][A]);
            for (A = 0; A < y; A++) for (C = 0; C < l; C++) P[x++] = g[C][A];
            return P;
          })(o, e, t);
        }
        function g(e, t, n, o) {
          var a;
          if (Array.isArray(e)) a = m.fromArray(e);
          else {
            if ("string" != typeof e) throw new Error("Invalid data");
            var s = t;
            if (!s) {
              var f = m.rawSplit(e);
              s = d.getBestVersionForData(f, n);
            }
            a = m.fromString(e, s || 40);
          }
          var p = d.getBestVersionForData(a, n);
          if (!p)
            throw new Error(
              "The amount of data is too big to be stored in a QR Code",
            );
          if (t) {
            if (t < p)
              throw new Error(
                "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                  p +
                  ".\n",
              );
          } else t = p;
          var y = v(t, n, a),
            g = r.getSymbolSize(t),
            b = new i(g);
          return (
            (function (e, t) {
              for (
                var n = e.size, r = c.getPositions(t), o = 0;
                o < r.length;
                o++
              )
                for (var a = r[o][0], i = r[o][1], l = -1; l <= 7; l++)
                  if (!(a + l <= -1 || n <= a + l))
                    for (var u = -1; u <= 7; u++)
                      i + u <= -1 ||
                        n <= i + u ||
                        ((l >= 0 && l <= 6 && (0 === u || 6 === u)) ||
                        (u >= 0 && u <= 6 && (0 === l || 6 === l)) ||
                        (l >= 2 && l <= 4 && u >= 2 && u <= 4)
                          ? e.set(a + l, i + u, !0, !0)
                          : e.set(a + l, i + u, !1, !0));
            })(b, t),
            (function (e) {
              for (var t = e.size, n = 8; n < t - 8; n++) {
                var r = n % 2 == 0;
                e.set(n, 6, r, !0), e.set(6, n, r, !0);
              }
            })(b),
            (function (e, t) {
              for (var n = l.getPositions(t), r = 0; r < n.length; r++)
                for (var o = n[r][0], a = n[r][1], i = -2; i <= 2; i++)
                  for (var c = -2; c <= 2; c++)
                    -2 === i ||
                    2 === i ||
                    -2 === c ||
                    2 === c ||
                    (0 === i && 0 === c)
                      ? e.set(o + i, a + c, !0, !0)
                      : e.set(o + i, a + c, !1, !0);
            })(b, t),
            h(b, n, 0),
            t >= 7 &&
              (function (e, t) {
                for (
                  var n, r, o, a = e.size, i = d.getEncodedBits(t), l = 0;
                  l < 18;
                  l++
                )
                  (n = Math.floor(l / 3)),
                    (r = (l % 3) + a - 8 - 3),
                    (o = 1 == ((i >> l) & 1)),
                    e.set(n, r, o, !0),
                    e.set(r, n, o, !0);
              })(b, t),
            (function (e, t) {
              for (
                var n = e.size, r = -1, o = n - 1, a = 7, i = 0, l = n - 1;
                l > 0;
                l -= 2
              )
                for (6 === l && l--; ; ) {
                  for (var c = 0; c < 2; c++)
                    if (!e.isReserved(o, l - c)) {
                      var u = !1;
                      i < t.length && (u = 1 == ((t[i] >>> a) & 1)),
                        e.set(o, l - c, u),
                        -1 == --a && (i++, (a = 7));
                    }
                  if ((o += r) < 0 || n <= o) {
                    (o -= r), (r = -r);
                    break;
                  }
                }
            })(b, y),
            isNaN(o) && (o = u.getBestMask(b, h.bind(null, b, n))),
            u.applyMask(o, b),
            h(b, n, o),
            {
              modules: b,
              version: t,
              errorCorrectionLevel: n,
              maskPattern: o,
              segments: a,
            }
          );
        }
        t.create = function (e, t) {
          if (void 0 === e || "" === e) throw new Error("No input text");
          var n,
            a,
            i = o.M;
          return (
            void 0 !== t &&
              ((i = o.from(t.errorCorrectionLevel, o.M)),
              (n = d.from(t.version)),
              (a = u.from(t.maskPattern)),
              t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
            g(e, n, i, a)
          );
        };
      },
      181: function (e, t, n) {
        var r = n(4);
        function o(e) {
          (this.genPoly = void 0),
            (this.degree = e),
            this.degree && this.initialize(this.degree);
        }
        (o.prototype.initialize = function (e) {
          (this.degree = e),
            (this.genPoly = r.generateECPolynomial(this.degree));
        }),
          (o.prototype.encode = function (e) {
            if (!this.genPoly) throw new Error("Encoder not initialized");
            var t = new Uint8Array(e.length + this.degree);
            t.set(e);
            var n = r.mod(t, this.genPoly),
              o = this.degree - n.length;
            if (o > 0) {
              var a = new Uint8Array(this.degree);
              return a.set(n, o), a;
            }
            return n;
          }),
          (e.exports = o);
      },
      795: function (e, t) {
        var n = "[0-9]+",
          r =
            "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
          o =
            "(?:(?![A-Z0-9 $%*+\\-./:]|" +
            (r = r.replace(/u/g, "\\u")) +
            ")(?:.|[\r\n]))+";
        (t.KANJI = new RegExp(r, "g")),
          (t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
          (t.BYTE = new RegExp(o, "g")),
          (t.NUMERIC = new RegExp(n, "g")),
          (t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
        var a = new RegExp("^" + r + "$"),
          i = new RegExp("^" + n + "$"),
          l = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        (t.testKanji = function (e) {
          return a.test(e);
        }),
          (t.testNumeric = function (e) {
            return i.test(e);
          }),
          (t.testAlphanumeric = function (e) {
            return l.test(e);
          });
      },
      144: function (e, t, n) {
        var r = n(145),
          o = n(808),
          a = n(734),
          i = n(557),
          l = n(927),
          c = n(795),
          u = n(701),
          s = n(84);
        function f(e) {
          return unescape(encodeURIComponent(e)).length;
        }
        function d(e, t, n) {
          for (var r, o = []; null !== (r = e.exec(n)); )
            o.push({
              data: r[0],
              index: r.index,
              mode: t,
              length: r[0].length,
            });
          return o;
        }
        function p(e) {
          var t,
            n,
            o = d(c.NUMERIC, r.NUMERIC, e),
            a = d(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
          return (
            u.isKanjiModeEnabled()
              ? ((t = d(c.BYTE, r.BYTE, e)), (n = d(c.KANJI, r.KANJI, e)))
              : ((t = d(c.BYTE_KANJI, r.BYTE, e)), (n = [])),
            o
              .concat(a, t, n)
              .sort(function (e, t) {
                return e.index - t.index;
              })
              .map(function (e) {
                return { data: e.data, mode: e.mode, length: e.length };
              })
          );
        }
        function y(e, t) {
          switch (t) {
            case r.NUMERIC:
              return o.getBitsLength(e);
            case r.ALPHANUMERIC:
              return a.getBitsLength(e);
            case r.KANJI:
              return l.getBitsLength(e);
            case r.BYTE:
              return i.getBitsLength(e);
          }
        }
        function m(e, t) {
          var n,
            c = r.getBestModeForData(e);
          if ((n = r.from(t, c)) !== r.BYTE && n.bit < c.bit)
            throw new Error(
              '"' +
                e +
                '" cannot be encoded with mode ' +
                r.toString(n) +
                ".\n Suggested mode is: " +
                r.toString(c),
            );
          switch (
            (n !== r.KANJI || u.isKanjiModeEnabled() || (n = r.BYTE), n)
          ) {
            case r.NUMERIC:
              return new o(e);
            case r.ALPHANUMERIC:
              return new a(e);
            case r.KANJI:
              return new l(e);
            case r.BYTE:
              return new i(e);
          }
        }
        (t.fromArray = function (e) {
          return e.reduce(function (e, t) {
            return (
              "string" == typeof t
                ? e.push(m(t, null))
                : t.data && e.push(m(t.data, t.mode)),
              e
            );
          }, []);
        }),
          (t.fromString = function (e, n) {
            for (
              var o = (function (e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var o = e[n];
                    switch (o.mode) {
                      case r.NUMERIC:
                        t.push([
                          o,
                          {
                            data: o.data,
                            mode: r.ALPHANUMERIC,
                            length: o.length,
                          },
                          { data: o.data, mode: r.BYTE, length: o.length },
                        ]);
                        break;
                      case r.ALPHANUMERIC:
                        t.push([
                          o,
                          { data: o.data, mode: r.BYTE, length: o.length },
                        ]);
                        break;
                      case r.KANJI:
                        t.push([
                          o,
                          { data: o.data, mode: r.BYTE, length: f(o.data) },
                        ]);
                        break;
                      case r.BYTE:
                        t.push([
                          { data: o.data, mode: r.BYTE, length: f(o.data) },
                        ]);
                    }
                  }
                  return t;
                })(p(e, u.isKanjiModeEnabled())),
                a = (function (e, t) {
                  for (
                    var n = {}, o = { start: {} }, a = ["start"], i = 0;
                    i < e.length;
                    i++
                  ) {
                    for (var l = e[i], c = [], u = 0; u < l.length; u++) {
                      var s = l[u],
                        f = "" + i + u;
                      c.push(f),
                        (n[f] = { node: s, lastCount: 0 }),
                        (o[f] = {});
                      for (var d = 0; d < a.length; d++) {
                        var p = a[d];
                        n[p] && n[p].node.mode === s.mode
                          ? ((o[p][f] =
                              y(n[p].lastCount + s.length, s.mode) -
                              y(n[p].lastCount, s.mode)),
                            (n[p].lastCount += s.length))
                          : (n[p] && (n[p].lastCount = s.length),
                            (o[p][f] =
                              y(s.length, s.mode) +
                              4 +
                              r.getCharCountIndicator(s.mode, t)));
                      }
                    }
                    a = c;
                  }
                  for (var m = 0; m < a.length; m++) o[a[m]].end = 0;
                  return { map: o, table: n };
                })(o, n),
                i = s.find_path(a.map, "start", "end"),
                l = [],
                c = 1;
              c < i.length - 1;
              c++
            )
              l.push(a.table[i[c]].node);
            return t.fromArray(
              (function (e) {
                return e.reduce(function (e, t) {
                  var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                  return n && n.mode === t.mode
                    ? ((e[e.length - 1].data += t.data), e)
                    : (e.push(t), e);
                }, []);
              })(l),
            );
          }),
          (t.rawSplit = function (e) {
            return t.fromArray(p(e, u.isKanjiModeEnabled()));
          });
      },
      701: function (e, t) {
        var n,
          r = [
            0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532,
            581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588,
            1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034,
            3196, 3362, 3532, 3706,
          ];
        (t.getSymbolSize = function (e) {
          if (!e) throw new Error('"version" cannot be null or undefined');
          if (e < 1 || e > 40)
            throw new Error('"version" should be in range from 1 to 40');
          return 4 * e + 17;
        }),
          (t.getSymbolTotalCodewords = function (e) {
            return r[e];
          }),
          (t.getBCHDigit = function (e) {
            for (var t = 0; 0 !== e; ) t++, (e >>>= 1);
            return t;
          }),
          (t.setToSJISFunction = function (e) {
            if ("function" != typeof e)
              throw new Error('"toSJISFunc" is not a valid function.');
            n = e;
          }),
          (t.isKanjiModeEnabled = function () {
            return void 0 !== n;
          }),
          (t.toSJIS = function (e) {
            return n(e);
          });
      },
      893: function (e, t) {
        t.isValid = function (e) {
          return !isNaN(e) && e >= 1 && e <= 40;
        };
      },
      184: function (e, t, n) {
        var r = n(701),
          o = n(185),
          a = n(308),
          i = n(145),
          l = n(893),
          c = r.getBCHDigit(7973);
        function u(e, t) {
          return i.getCharCountIndicator(e, t) + 4;
        }
        function s(e, t) {
          var n = 0;
          return (
            e.forEach(function (e) {
              var r = u(e.mode, t);
              n += r + e.getBitsLength();
            }),
            n
          );
        }
        (t.from = function (e, t) {
          return l.isValid(e) ? parseInt(e, 10) : t;
        }),
          (t.getCapacity = function (e, t, n) {
            if (!l.isValid(e)) throw new Error("Invalid QR Code version");
            void 0 === n && (n = i.BYTE);
            var a =
              8 *
              (r.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t));
            if (n === i.MIXED) return a;
            var c = a - u(n, e);
            switch (n) {
              case i.NUMERIC:
                return Math.floor((c / 10) * 3);
              case i.ALPHANUMERIC:
                return Math.floor((c / 11) * 2);
              case i.KANJI:
                return Math.floor(c / 13);
              case i.BYTE:
              default:
                return Math.floor(c / 8);
            }
          }),
          (t.getBestVersionForData = function (e, n) {
            var r,
              o = a.from(n, a.M);
            if (Array.isArray(e)) {
              if (e.length > 1)
                return (function (e, n) {
                  for (var r = 1; r <= 40; r++)
                    if (s(e, r) <= t.getCapacity(r, n, i.MIXED)) return r;
                })(e, o);
              if (0 === e.length) return 1;
              r = e[0];
            } else r = e;
            return (function (e, n, r) {
              for (var o = 1; o <= 40; o++)
                if (n <= t.getCapacity(o, r, e)) return o;
            })(r.mode, r.getLength(), o);
          }),
          (t.getEncodedBits = function (e) {
            if (!l.isValid(e) || e < 7)
              throw new Error("Invalid QR Code version");
            for (var t = e << 12; r.getBCHDigit(t) - c >= 0; )
              t ^= 7973 << (r.getBCHDigit(t) - c);
            return (e << 12) | t;
          });
      },
      154: function (e, t, n) {
        var r = n(793);
        (t.render = function (e, t, n) {
          var o = n,
            a = t;
          void 0 !== o || (t && t.getContext) || ((o = t), (t = void 0)),
            t ||
              (a = (function () {
                try {
                  return document.createElement("canvas");
                } catch (e) {
                  throw new Error("You need to specify a canvas element");
                }
              })()),
            (o = r.getOptions(o));
          var i = r.getImageWidth(e.modules.size, o),
            l = a.getContext("2d"),
            c = l.createImageData(i, i);
          return (
            r.qrToImageData(c.data, e, o),
            (function (e, t, n) {
              e.clearRect(0, 0, t.width, t.height),
                t.style || (t.style = {}),
                (t.height = n),
                (t.width = n),
                (t.style.height = n + "px"),
                (t.style.width = n + "px");
            })(l, a, i),
            l.putImageData(c, 0, 0),
            a
          );
        }),
          (t.renderToDataURL = function (e, n, r) {
            var o = r;
            void 0 !== o || (n && n.getContext) || ((o = n), (n = void 0)),
              o || (o = {});
            var a = t.render(e, n, o),
              i = o.type || "image/png",
              l = o.rendererOpts || {};
            return a.toDataURL(i, l.quality);
          });
      },
      195: function (e, t, n) {
        var r = n(793);
        function o(e, t) {
          var n = e.a / 255,
            r = t + '="' + e.hex + '"';
          return n < 1
            ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"'
            : r;
        }
        function a(e, t, n) {
          var r = e + t;
          return void 0 !== n && (r += " " + n), r;
        }
        t.render = function (e, t, n) {
          var i = r.getOptions(t),
            l = e.modules.size,
            c = e.modules.data,
            u = l + 2 * i.margin,
            s = i.color.light.a
              ? "<path " +
                o(i.color.light, "fill") +
                ' d="M0 0h' +
                u +
                "v" +
                u +
                'H0z"/>'
              : "",
            f =
              "<path " +
              o(i.color.dark, "stroke") +
              ' d="' +
              (function (e, t, n) {
                for (
                  var r = "", o = 0, i = !1, l = 0, c = 0;
                  c < e.length;
                  c++
                ) {
                  var u = Math.floor(c % t),
                    s = Math.floor(c / t);
                  u || i || (i = !0),
                    e[c]
                      ? (l++,
                        (c > 0 && u > 0 && e[c - 1]) ||
                          ((r += i ? a("M", u + n, 0.5 + s + n) : a("m", o, 0)),
                          (o = 0),
                          (i = !1)),
                        (u + 1 < t && e[c + 1]) || ((r += a("h", l)), (l = 0)))
                      : o++;
                }
                return r;
              })(c, l, i.margin) +
              '"/>',
            d = 'viewBox="0 0 ' + u + " " + u + '"',
            p =
              '<svg xmlns="http://www.w3.org/2000/svg" ' +
              (i.width
                ? 'width="' + i.width + '" height="' + i.width + '" '
                : "") +
              d +
              ' shape-rendering="crispEdges">' +
              s +
              f +
              "</svg>\n";
          return "function" == typeof n && n(null, p), p;
        };
      },
      793: function (e, t) {
        function n(e) {
          if (
            ("number" == typeof e && (e = e.toString()), "string" != typeof e)
          )
            throw new Error("Color should be defined as hex string");
          var t = e.slice().replace("#", "").split("");
          if (t.length < 3 || 5 === t.length || t.length > 8)
            throw new Error("Invalid hex color: " + e);
          (3 !== t.length && 4 !== t.length) ||
            (t = Array.prototype.concat.apply(
              [],
              t.map(function (e) {
                return [e, e];
              }),
            )),
            6 === t.length && t.push("F", "F");
          var n = parseInt(t.join(""), 16);
          return {
            r: (n >> 24) & 255,
            g: (n >> 16) & 255,
            b: (n >> 8) & 255,
            a: 255 & n,
            hex: "#" + t.slice(0, 6).join(""),
          };
        }
        (t.getOptions = function (e) {
          e || (e = {}), e.color || (e.color = {});
          var t =
              void 0 === e.margin || null === e.margin || e.margin < 0
                ? 4
                : e.margin,
            r = e.width && e.width >= 21 ? e.width : void 0,
            o = e.scale || 4;
          return {
            width: r,
            scale: r ? 4 : o,
            margin: t,
            color: {
              dark: n(e.color.dark || "#000000ff"),
              light: n(e.color.light || "#ffffffff"),
            },
            type: e.type,
            rendererOpts: e.rendererOpts || {},
          };
        }),
          (t.getScale = function (e, t) {
            return t.width && t.width >= e + 2 * t.margin
              ? t.width / (e + 2 * t.margin)
              : t.scale;
          }),
          (t.getImageWidth = function (e, n) {
            var r = t.getScale(e, n);
            return Math.floor((e + 2 * n.margin) * r);
          }),
          (t.qrToImageData = function (e, n, r) {
            for (
              var o = n.modules.size,
                a = n.modules.data,
                i = t.getScale(o, r),
                l = Math.floor((o + 2 * r.margin) * i),
                c = r.margin * i,
                u = [r.color.light, r.color.dark],
                s = 0;
              s < l;
              s++
            )
              for (var f = 0; f < l; f++) {
                var d = 4 * (s * l + f),
                  p = r.color.light;
                if (s >= c && f >= c && s < l - c && f < l - c)
                  p =
                    u[
                      a[Math.floor((s - c) / i) * o + Math.floor((f - c) / i)]
                        ? 1
                        : 0
                    ];
                (e[d++] = p.r), (e[d++] = p.g), (e[d++] = p.b), (e[d] = p.a);
              }
          });
      },
      870: function (e, t) {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var a = typeof n;
                if ("string" === a || "number" === a) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var i = o.apply(null, n);
                    i && e.push(i);
                  }
                } else if ("object" === a) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes("[native code]")
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var l in n) r.call(n, l) && n[l] && e.push(l);
                }
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      594: function (e) {
        "use strict";
        e.exports = React;
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r](a, a.exports, n), (a.loaded = !0), a.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (function () {
      "use strict";
      var e = n(594),
        t = n.n(e),
        r = Roblox,
        o = n.n(r),
        a = ReactDOM,
        i = CoreUtilities,
        l = "access-management-upsell-container",
        c = ReactUtilities,
        u = n(676),
        s = n(390);
      var f = function (e) {
          e();
        },
        d = function () {
          return f;
        },
        p = Symbol.for("react-redux-context"),
        y = "undefined" != typeof globalThis ? globalThis : {};
      function m() {
        var t;
        if (!e.createContext) return {};
        var n = null != (t = y[p]) ? t : (y[p] = new Map()),
          r = n.get(e.createContext);
        return r || ((r = e.createContext(null)), n.set(e.createContext, r)), r;
      }
      var h = m();
      function v() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h;
        return function () {
          return (0, e.useContext)(t);
        };
      }
      var g = v();
      var b = function () {
          throw new Error("uSES not initialized!");
        },
        E = function (e, t) {
          return e === t;
        };
      function w() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
          n = t === h ? g : v(t);
        return function (t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = "function" == typeof r ? { equalityFn: r } : r,
            a = o.equalityFn,
            i = void 0 === a ? E : a,
            l = o.stabilityCheck,
            c = void 0 === l ? void 0 : l;
          o.noopCheck;
          var u,
            s,
            f,
            d = n(),
            p = d.store,
            y = d.subscription,
            m = d.getServerState,
            h = d.stabilityCheck,
            v =
              (d.noopCheck,
              (0, e.useRef)(!0),
              (0, e.useCallback)(
                ((u = {}),
                (s = t.name),
                (f = function (e) {
                  return t(e);
                }),
                s in u
                  ? Object.defineProperty(u, s, {
                      value: f,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (u[s] = f),
                u)[t.name],
                [t, h, c],
              )),
            g = b(y.addNestedSub, p.getState, m || p.getState, v, i);
          return (0, e.useDebugValue)(g), g;
        };
      }
      var S = w();
      n(675), n(625);
      var A = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function C(e, t) {
        var n,
          r = A;
        function o() {
          i.onStateChange && i.onStateChange();
        }
        function a() {
          n ||
            ((n = t ? t.addNestedSub(o) : e.subscribe(o)),
            (r = (function () {
              var e = d(),
                t = null,
                n = null;
              return {
                clear: function () {
                  (t = null), (n = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = t; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], n = t; n; ) e.push(n), (n = n.next);
                  return e;
                },
                subscribe: function (e) {
                  var r = !0,
                    o = (n = { callback: e, next: null, prev: n });
                  return (
                    o.prev ? (o.prev.next = o) : (t = o),
                    function () {
                      r &&
                        null !== t &&
                        ((r = !1),
                        o.next ? (o.next.prev = o.prev) : (n = o.prev),
                        o.prev ? (o.prev.next = o.next) : (t = o.next));
                    }
                  );
                },
              };
            })()));
        }
        var i = {
          addNestedSub: function (e) {
            return a(), r.subscribe(e);
          },
          notifyNestedSubs: function () {
            r.notify();
          },
          handleChangeWrapper: o,
          isSubscribed: function () {
            return Boolean(n);
          },
          trySubscribe: a,
          tryUnsubscribe: function () {
            n && (n(), (n = void 0), r.clear(), (r = A));
          },
          getListeners: function () {
            return r;
          },
        };
        return i;
      }
      var P = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      )
        ? e.useLayoutEffect
        : e.useEffect;
      var x = function (t) {
        var n = t.store,
          r = t.context,
          o = t.children,
          a = t.serverState,
          i = t.stabilityCheck,
          l = void 0 === i ? "once" : i,
          c = t.noopCheck,
          u = void 0 === c ? "once" : c,
          s = e.useMemo(
            function () {
              var e = C(n);
              return {
                store: n,
                subscription: e,
                getServerState: a
                  ? function () {
                      return a;
                    }
                  : void 0,
                stabilityCheck: l,
                noopCheck: u,
              };
            },
            [n, a, l, u],
          ),
          f = e.useMemo(
            function () {
              return n.getState();
            },
            [n],
          );
        P(
          function () {
            var e = s.subscription;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              f !== n.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = void 0);
              }
            );
          },
          [s, f],
        );
        var d = r || h;
        return e.createElement(d.Provider, { value: s }, o);
      };
      function k() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
          t = e === h ? g : v(e);
        return function () {
          return t().store;
        };
      }
      var I = k();
      function T() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
          t = e === h ? I : k(e);
        return function () {
          return t().dispatch;
        };
      }
      var N,
        O = T();
      !(function (e) {
        b = e;
      })(s.useSyncExternalStoreWithSelector),
        (function (e) {
          0;
        })(u.useSyncExternalStore),
        (N = a.unstable_batchedUpdates),
        (f = N);
      var M = ReactStyleGuide;
      function R(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (n.length
              ? " " +
                n
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf",
        );
      }
      function U(e) {
        return !!e && !!e[Ae];
      }
      function D(e) {
        var t;
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n =
              Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return (
              n === Object ||
              ("function" == typeof n && Function.toString.call(n) === Ce)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[Se] ||
            !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[Se]) ||
            q(e) ||
            W(e))
        );
      }
      function j(e, t, n) {
        void 0 === n && (n = !1),
          0 === L(e)
            ? (n ? Object.keys : Pe)(e).forEach(function (r) {
                (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                return t(r, n, e);
              });
      }
      function L(e) {
        var t = e[Ae];
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
            ? 1
            : q(e)
              ? 2
              : W(e)
                ? 3
                : 0;
      }
      function B(e, t) {
        return 2 === L(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function F(e, t) {
        return 2 === L(e) ? e.get(t) : e[t];
      }
      function V(e, t, n) {
        var r = L(e);
        2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
      }
      function _(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function q(e) {
        return ge && e instanceof Map;
      }
      function W(e) {
        return be && e instanceof Set;
      }
      function H(e) {
        return e.o || e.t;
      }
      function z(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = xe(e);
        delete t[Ae];
        for (var n = Pe(t), r = 0; r < n.length; r++) {
          var o = n[r],
            a = t[o];
          !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) &&
              (t[o] = {
                configurable: !0,
                writable: !0,
                enumerable: a.enumerable,
                value: e[o],
              });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function G(e, t) {
        return (
          void 0 === t && (t = !1),
          $(e) ||
            U(e) ||
            !D(e) ||
            (L(e) > 1 && (e.set = e.add = e.clear = e.delete = K),
            Object.freeze(e),
            t &&
              j(
                e,
                function (e, t) {
                  return G(t, !0);
                },
                !0,
              )),
          e
        );
      }
      function K() {
        R(2);
      }
      function $(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function Y(e) {
        var t = ke[e];
        return t || R(18, e), t;
      }
      function J(e, t) {
        ke[e] || (ke[e] = t);
      }
      function Q() {
        return he;
      }
      function X(e, t) {
        t && (Y("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function Z(e) {
        ee(e), e.p.forEach(ne), (e.p = null);
      }
      function ee(e) {
        e === he && (he = e.l);
      }
      function te(e) {
        return (he = { p: [], l: he, h: e, m: !0, _: 0 });
      }
      function ne(e) {
        var t = e[Ae];
        0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
      }
      function re(e, t) {
        t._ = t.p.length;
        var n = t.p[0],
          r = void 0 !== e && e !== n;
        return (
          t.h.O || Y("ES5").S(t, e, r),
          r
            ? (n[Ae].P && (Z(t), R(4)),
              D(e) && ((e = oe(t, e)), t.l || ie(t, e)),
              t.u && Y("Patches").M(n[Ae].t, e, t.u, t.s))
            : (e = oe(t, n, [])),
          Z(t),
          t.u && t.v(t.u, t.s),
          e !== we ? e : void 0
        );
      }
      function oe(e, t, n) {
        if ($(t)) return t;
        var r = t[Ae];
        if (!r)
          return (
            j(
              t,
              function (o, a) {
                return ae(e, r, t, o, a, n);
              },
              !0,
            ),
            t
          );
        if (r.A !== e) return t;
        if (!r.P) return ie(e, r.t, !0), r.t;
        if (!r.I) {
          (r.I = !0), r.A._--;
          var o = 4 === r.i || 5 === r.i ? (r.o = z(r.k)) : r.o,
            a = o,
            i = !1;
          3 === r.i && ((a = new Set(o)), o.clear(), (i = !0)),
            j(a, function (t, a) {
              return ae(e, r, o, t, a, n, i);
            }),
            ie(e, o, !1),
            n && e.u && Y("Patches").N(r, n, e.u, e.s);
        }
        return r.o;
      }
      function ae(e, t, n, r, o, a, i) {
        if (U(o)) {
          var l = oe(
            e,
            o,
            a && t && 3 !== t.i && !B(t.R, r) ? a.concat(r) : void 0,
          );
          if ((V(n, r, l), !U(l))) return;
          e.m = !1;
        } else i && n.add(o);
        if (D(o) && !$(o)) {
          if (!e.h.D && e._ < 1) return;
          oe(e, o), (t && t.A.l) || ie(e, o);
        }
      }
      function ie(e, t, n) {
        void 0 === n && (n = !1), !e.l && e.h.D && e.m && G(t, n);
      }
      function le(e, t) {
        var n = e[Ae];
        return (n ? H(n) : e)[t];
      }
      function ce(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
          }
      }
      function ue(e) {
        e.P || ((e.P = !0), e.l && ue(e.l));
      }
      function se(e) {
        e.o || (e.o = z(e.t));
      }
      function fe(e, t, n) {
        var r = q(t)
          ? Y("MapSet").F(t, n)
          : W(t)
            ? Y("MapSet").T(t, n)
            : e.O
              ? (function (e, t) {
                  var n = Array.isArray(e),
                    r = {
                      i: n ? 1 : 0,
                      A: t ? t.A : Q(),
                      P: !1,
                      I: !1,
                      R: {},
                      l: t,
                      t: e,
                      k: null,
                      o: null,
                      j: null,
                      C: !1,
                    },
                    o = r,
                    a = Ie;
                  n && ((o = [r]), (a = Te));
                  var i = Proxy.revocable(o, a),
                    l = i.revoke,
                    c = i.proxy;
                  return (r.k = c), (r.j = l), c;
                })(t, n)
              : Y("ES5").J(t, n);
        return (n ? n.A : Q()).p.push(r), r;
      }
      function de(e) {
        return (
          U(e) || R(22, e),
          (function e(t) {
            if (!D(t)) return t;
            var n,
              r = t[Ae],
              o = L(t);
            if (r) {
              if (!r.P && (r.i < 4 || !Y("ES5").K(r))) return r.t;
              (r.I = !0), (n = pe(t, o)), (r.I = !1);
            } else n = pe(t, o);
            return (
              j(n, function (t, o) {
                (r && F(r.t, t) === o) || V(n, t, e(o));
              }),
              3 === o ? new Set(n) : n
            );
          })(e)
        );
      }
      function pe(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return z(e);
      }
      function ye() {
        function e(e, t) {
          var n = o[e];
          return (
            n
              ? (n.enumerable = t)
              : (o[e] = n =
                  {
                    configurable: !0,
                    enumerable: t,
                    get: function () {
                      var t = this[Ae];
                      return Ie.get(t, e);
                    },
                    set: function (t) {
                      var n = this[Ae];
                      Ie.set(n, e, t);
                    },
                  }),
            n
          );
        }
        function t(e) {
          for (var t = e.length - 1; t >= 0; t--) {
            var o = e[t][Ae];
            if (!o.P)
              switch (o.i) {
                case 5:
                  r(o) && ue(o);
                  break;
                case 4:
                  n(o) && ue(o);
              }
          }
        }
        function n(e) {
          for (var t = e.t, n = e.k, r = Pe(n), o = r.length - 1; o >= 0; o--) {
            var a = r[o];
            if (a !== Ae) {
              var i = t[a];
              if (void 0 === i && !B(t, a)) return !0;
              var l = n[a],
                c = l && l[Ae];
              if (c ? c.t !== i : !_(l, i)) return !0;
            }
          }
          var u = !!t[Ae];
          return r.length !== Pe(t).length + (u ? 0 : 1);
        }
        function r(e) {
          var t = e.k;
          if (t.length !== e.t.length) return !0;
          var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
          if (n && !n.get) return !0;
          for (var r = 0; r < t.length; r++)
            if (!t.hasOwnProperty(r)) return !0;
          return !1;
        }
        var o = {};
        J("ES5", {
          J: function (t, n) {
            var r = Array.isArray(t),
              o = (function (t, n) {
                if (t) {
                  for (var r = Array(n.length), o = 0; o < n.length; o++)
                    Object.defineProperty(r, "" + o, e(o, !0));
                  return r;
                }
                var a = xe(n);
                delete a[Ae];
                for (var i = Pe(a), l = 0; l < i.length; l++) {
                  var c = i[l];
                  a[c] = e(c, t || !!a[c].enumerable);
                }
                return Object.create(Object.getPrototypeOf(n), a);
              })(r, t),
              a = {
                i: r ? 5 : 4,
                A: n ? n.A : Q(),
                P: !1,
                I: !1,
                R: {},
                l: n,
                t: t,
                k: o,
                o: null,
                g: !1,
                C: !1,
              };
            return Object.defineProperty(o, Ae, { value: a, writable: !0 }), o;
          },
          S: function (e, n, o) {
            o
              ? U(n) && n[Ae].A === e && t(e.p)
              : (e.u &&
                  (function e(t) {
                    if (t && "object" == typeof t) {
                      var n = t[Ae];
                      if (n) {
                        var o = n.t,
                          a = n.k,
                          i = n.R,
                          l = n.i;
                        if (4 === l)
                          j(a, function (t) {
                            t !== Ae &&
                              (void 0 !== o[t] || B(o, t)
                                ? i[t] || e(a[t])
                                : ((i[t] = !0), ue(n)));
                          }),
                            j(o, function (e) {
                              void 0 !== a[e] ||
                                B(a, e) ||
                                ((i[e] = !1), ue(n));
                            });
                        else if (5 === l) {
                          if (
                            (r(n) && (ue(n), (i.length = !0)),
                            a.length < o.length)
                          )
                            for (var c = a.length; c < o.length; c++) i[c] = !1;
                          else
                            for (var u = o.length; u < a.length; u++) i[u] = !0;
                          for (
                            var s = Math.min(a.length, o.length), f = 0;
                            f < s;
                            f++
                          )
                            a.hasOwnProperty(f) || (i[f] = !0),
                              void 0 === i[f] && e(a[f]);
                        }
                      }
                    }
                  })(e.p[0]),
                t(e.p));
          },
          K: function (e) {
            return 4 === e.i ? n(e) : r(e);
          },
        });
      }
      var me,
        he,
        ve = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        ge = "undefined" != typeof Map,
        be = "undefined" != typeof Set,
        Ee =
          "undefined" != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "undefined" != typeof Reflect,
        we = ve
          ? Symbol.for("immer-nothing")
          : (((me = {})["immer-nothing"] = !0), me),
        Se = ve ? Symbol.for("immer-draftable") : "__$immer_draftable",
        Ae = ve ? Symbol.for("immer-state") : "__$immer_state",
        Ce =
          ("undefined" != typeof Symbol && Symbol.iterator,
          "" + Object.prototype.constructor),
        Pe =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(
                    Object.getOwnPropertySymbols(e),
                  );
                }
              : Object.getOwnPropertyNames,
        xe =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              Pe(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n);
              }),
              t
            );
          },
        ke = {},
        Ie = {
          get: function (e, t) {
            if (t === Ae) return e;
            var n = H(e);
            if (!B(n, t))
              return (function (e, t, n) {
                var r,
                  o = ce(t, n);
                return o
                  ? "value" in o
                    ? o.value
                    : null === (r = o.get) || void 0 === r
                      ? void 0
                      : r.call(e.k)
                  : void 0;
              })(e, n, t);
            var r = n[t];
            return e.I || !D(r)
              ? r
              : r === le(e.t, t)
                ? (se(e), (e.o[t] = fe(e.A.h, r, e)))
                : r;
          },
          has: function (e, t) {
            return t in H(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(H(e));
          },
          set: function (e, t, n) {
            var r = ce(H(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
              var o = le(H(e), t),
                a = null == o ? void 0 : o[Ae];
              if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
              if (_(n, o) && (void 0 !== n || B(e.t, t))) return !0;
              se(e), ue(e);
            }
            return (
              (e.o[t] === n && (void 0 !== n || t in e.o)) ||
                (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
                ((e.o[t] = n), (e.R[t] = !0)),
              !0
            );
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== le(e.t, t) || t in e.t
                ? ((e.R[t] = !1), se(e), ue(e))
                : delete e.R[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = H(e),
              r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== t,
                  enumerable: r.enumerable,
                  value: n[t],
                }
              : r;
          },
          defineProperty: function () {
            R(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            R(12);
          },
        },
        Te = {};
      j(Ie, function (e, t) {
        Te[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (Te.deleteProperty = function (e, t) {
          return Te.set.call(this, e, t, void 0);
        }),
        (Te.set = function (e, t, n) {
          return Ie.set.call(this, e[0], t, n, e[0]);
        });
      var Ne = (function () {
          function e(e) {
            var t = this;
            (this.O = Ee),
              (this.D = !0),
              (this.produce = function (e, n, r) {
                if ("function" == typeof e && "function" != typeof n) {
                  var o = n;
                  n = e;
                  var a = t;
                  return function (e) {
                    var t = this;
                    void 0 === e && (e = o);
                    for (
                      var r = arguments.length,
                        i = Array(r > 1 ? r - 1 : 0),
                        l = 1;
                      l < r;
                      l++
                    )
                      i[l - 1] = arguments[l];
                    return a.produce(e, function (e) {
                      var r;
                      return (r = n).call.apply(r, [t, e].concat(i));
                    });
                  };
                }
                var i;
                if (
                  ("function" != typeof n && R(6),
                  void 0 !== r && "function" != typeof r && R(7),
                  D(e))
                ) {
                  var l = te(t),
                    c = fe(t, e, void 0),
                    u = !0;
                  try {
                    (i = n(c)), (u = !1);
                  } finally {
                    u ? Z(l) : ee(l);
                  }
                  return "undefined" != typeof Promise && i instanceof Promise
                    ? i.then(
                        function (e) {
                          return X(l, r), re(e, l);
                        },
                        function (e) {
                          throw (Z(l), e);
                        },
                      )
                    : (X(l, r), re(i, l));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (i = n(e)) && (i = e),
                    i === we && (i = void 0),
                    t.D && G(i, !0),
                    r)
                  ) {
                    var s = [],
                      f = [];
                    Y("Patches").M(e, i, s, f), r(s, f);
                  }
                  return i;
                }
                R(21, e);
              }),
              (this.produceWithPatches = function (e, n) {
                if ("function" == typeof e)
                  return function (n) {
                    for (
                      var r = arguments.length,
                        o = Array(r > 1 ? r - 1 : 0),
                        a = 1;
                      a < r;
                      a++
                    )
                      o[a - 1] = arguments[a];
                    return t.produceWithPatches(n, function (t) {
                      return e.apply(void 0, [t].concat(o));
                    });
                  };
                var r,
                  o,
                  a = t.produce(e, n, function (e, t) {
                    (r = e), (o = t);
                  });
                return "undefined" != typeof Promise && a instanceof Promise
                  ? a.then(function (e) {
                      return [e, r, o];
                    })
                  : [a, r, o];
              }),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze);
          }
          var t = e.prototype;
          return (
            (t.createDraft = function (e) {
              D(e) || R(8), U(e) && (e = de(e));
              var t = te(this),
                n = fe(this, e, void 0);
              return (n[Ae].C = !0), ee(t), n;
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[Ae]).A;
              return X(n, t), re(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
              this.D = e;
            }),
            (t.setUseProxies = function (e) {
              e && !Ee && R(20), (this.O = e);
            }),
            (t.applyPatches = function (e, t) {
              var n;
              for (n = t.length - 1; n >= 0; n--) {
                var r = t[n];
                if (0 === r.path.length && "replace" === r.op) {
                  e = r.value;
                  break;
                }
              }
              n > -1 && (t = t.slice(n + 1));
              var o = Y("Patches").$;
              return U(e)
                ? o(e, t)
                : this.produce(e, function (e) {
                    return o(e, t);
                  });
            }),
            e
          );
        })(),
        Oe = new Ne(),
        Me = Oe.produce,
        Re =
          (Oe.produceWithPatches.bind(Oe),
          Oe.setAutoFreeze.bind(Oe),
          Oe.setUseProxies.bind(Oe),
          Oe.applyPatches.bind(Oe),
          Oe.createDraft.bind(Oe),
          Oe.finishDraft.bind(Oe),
          Me),
        Ue = Redux,
        De = ReduxThunk,
        je = n.n(De);
      function Le(e) {
        return (
          (Le =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Le(e)
        );
      }
      var Be,
        Fe =
          ((Be = function (e, t) {
            return (
              (Be =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              Be(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function n() {
              this.constructor = e;
            }
            Be(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        Ve = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        _e = function (e, t) {
          for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
            e[o] = t[n];
          return e;
        },
        qe = Object.defineProperty,
        We = Object.defineProperties,
        He = Object.getOwnPropertyDescriptors,
        ze = Object.getOwnPropertySymbols,
        Ge = Object.prototype.hasOwnProperty,
        Ke = Object.prototype.propertyIsEnumerable,
        $e = function (e, t, n) {
          return t in e
            ? qe(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
        },
        Ye = function (e, t) {
          for (var n in t || (t = {})) Ge.call(t, n) && $e(e, n, t[n]);
          if (ze)
            for (var r = 0, o = ze(t); r < o.length; r++) {
              n = o[r];
              Ke.call(t, n) && $e(e, n, t[n]);
            }
          return e;
        },
        Je = function (e, t) {
          return We(e, He(t));
        },
        Qe = function (e, t, n) {
          return new Promise(function (r, o) {
            var a = function (e) {
                try {
                  l(n.next(e));
                } catch (e) {
                  o(e);
                }
              },
              i = function (e) {
                try {
                  l(n.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              l = function (e) {
                return e.done
                  ? r(e.value)
                  : Promise.resolve(e.value).then(a, i);
              };
            l((n = n.apply(e, t)).next());
          });
        },
        Xe =
          "undefined" != typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                if (0 !== arguments.length)
                  return "object" === Le(arguments[0])
                    ? Ue.compose
                    : Ue.compose.apply(null, arguments);
              };
      "undefined" != typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__;
      function Ze(e) {
        if ("object" !== Le(e) || null === e) return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t) return !0;
        for (var n = t; null !== Object.getPrototypeOf(n); )
          n = Object.getPrototypeOf(n);
        return t === n;
      }
      var et = (function (e) {
          function t() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r];
            var o = e.apply(this, n) || this;
            return Object.setPrototypeOf(o, t.prototype), o;
          }
          return (
            Fe(t, e),
            Object.defineProperty(t, Symbol.species, {
              get: function () {
                return t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.concat = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return e.prototype.concat.apply(this, t);
            }),
            (t.prototype.prepend = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return 1 === e.length && Array.isArray(e[0])
                ? new (t.bind.apply(t, _e([void 0], e[0].concat(this))))()
                : new (t.bind.apply(t, _e([void 0], e.concat(this))))();
            }),
            t
          );
        })(Array),
        tt = (function (e) {
          function t() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r];
            var o = e.apply(this, n) || this;
            return Object.setPrototypeOf(o, t.prototype), o;
          }
          return (
            Fe(t, e),
            Object.defineProperty(t, Symbol.species, {
              get: function () {
                return t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.concat = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return e.prototype.concat.apply(this, t);
            }),
            (t.prototype.prepend = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return 1 === e.length && Array.isArray(e[0])
                ? new (t.bind.apply(t, _e([void 0], e[0].concat(this))))()
                : new (t.bind.apply(t, _e([void 0], e.concat(this))))();
            }),
            t
          );
        })(Array);
      function nt(e) {
        return D(e) ? Re(e, function () {}) : e;
      }
      function rt() {
        return function (e) {
          return (function (e) {
            void 0 === e && (e = {});
            var t = e.thunk,
              n = void 0 === t || t,
              r = (e.immutableCheck, e.serializableCheck, new et());
            n &&
              (!(function (e) {
                return "boolean" == typeof e;
              })(n)
                ? r.push(je().withExtraArgument(n.extraArgument))
                : r.push(je()));
            0;
            return r;
          })(e);
        };
      }
      function ot(e, t) {
        function n() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          if (t) {
            var o = t.apply(void 0, n);
            if (!o) throw new Error("prepareAction did not return an object");
            return Ye(
              Ye(
                { type: e, payload: o.payload },
                "meta" in o && { meta: o.meta },
              ),
              "error" in o && { error: o.error },
            );
          }
          return { type: e, payload: n[0] };
        }
        return (
          (n.toString = function () {
            return "" + e;
          }),
          (n.type = e),
          (n.match = function (t) {
            return t.type === e;
          }),
          n
        );
      }
      function at(e) {
        var t,
          n = {},
          r = [],
          o = {
            addCase: function (e, t) {
              var r = "string" == typeof e ? e : e.type;
              if (r in n)
                throw new Error(
                  "addCase cannot be called with two reducers for the same action type",
                );
              return (n[r] = t), o;
            },
            addMatcher: function (e, t) {
              return r.push({ matcher: e, reducer: t }), o;
            },
            addDefaultCase: function (e) {
              return (t = e), o;
            },
          };
        return e(o), [n, r, t];
      }
      function it(e) {
        var t = e.name;
        if (!t) throw new Error("`name` is a required option for createSlice");
        var n,
          r =
            "function" == typeof e.initialState
              ? e.initialState
              : nt(e.initialState),
          o = e.reducers || {},
          a = Object.keys(o),
          i = {},
          l = {},
          c = {};
        function u() {
          var t =
              "function" == typeof e.extraReducers
                ? at(e.extraReducers)
                : [e.extraReducers],
            n = t[0],
            o = void 0 === n ? {} : n,
            a = t[1],
            i = void 0 === a ? [] : a,
            c = t[2],
            u = void 0 === c ? void 0 : c,
            s = Ye(Ye({}, o), l);
          return (function (e, t, n, r) {
            void 0 === n && (n = []);
            var o,
              a = "function" == typeof t ? at(t) : [t, n, r],
              i = a[0],
              l = a[1],
              c = a[2];
            if (
              (function (e) {
                return "function" == typeof e;
              })(e)
            )
              o = function () {
                return nt(e());
              };
            else {
              var u = nt(e);
              o = function () {
                return u;
              };
            }
            function s(e, t) {
              void 0 === e && (e = o());
              var n = _e(
                [i[t.type]],
                l
                  .filter(function (e) {
                    return (0, e.matcher)(t);
                  })
                  .map(function (e) {
                    return e.reducer;
                  }),
              );
              return (
                0 ===
                  n.filter(function (e) {
                    return !!e;
                  }).length && (n = [c]),
                n.reduce(function (e, n) {
                  if (n) {
                    var r;
                    if (U(e)) return void 0 === (r = n(e, t)) ? e : r;
                    if (D(e))
                      return Re(e, function (e) {
                        return n(e, t);
                      });
                    if (void 0 === (r = n(e, t))) {
                      if (null === e) return e;
                      throw Error(
                        "A case reducer on a non-draftable value must not return undefined",
                      );
                    }
                    return r;
                  }
                  return e;
                }, e)
              );
            }
            return (s.getInitialState = o), s;
          })(r, function (e) {
            for (var t in s) e.addCase(t, s[t]);
            for (var n = 0, r = i; n < r.length; n++) {
              var o = r[n];
              e.addMatcher(o.matcher, o.reducer);
            }
            u && e.addDefaultCase(u);
          });
        }
        return (
          a.forEach(function (e) {
            var n,
              r,
              a = o[e],
              u = t + "/" + e;
            "reducer" in a ? ((n = a.reducer), (r = a.prepare)) : (n = a),
              (i[e] = n),
              (l[u] = n),
              (c[e] = r ? ot(u, r) : ot(u));
          }),
          {
            name: t,
            reducer: function (e, t) {
              return n || (n = u()), n(e, t);
            },
            actions: c,
            caseReducers: i,
            getInitialState: function () {
              return n || (n = u()), n.getInitialState();
            },
          }
        );
      }
      var lt = function (e) {
          void 0 === e && (e = 21);
          for (var t = "", n = e; n--; )
            t +=
              "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
                (64 * Math.random()) | 0
              ];
          return t;
        },
        ct = ["name", "message", "stack", "code"],
        ut = function (e, t) {
          (this.payload = e), (this.meta = t);
        },
        st = function (e, t) {
          (this.payload = e), (this.meta = t);
        },
        ft = function (e) {
          if ("object" === Le(e) && null !== e) {
            for (var t = {}, n = 0, r = ct; n < r.length; n++) {
              var o = r[n];
              "string" == typeof e[o] && (t[o] = e[o]);
            }
            return t;
          }
          return { message: String(e) };
        },
        dt = (function () {
          function e(e, t, n) {
            var r = ot(e + "/fulfilled", function (e, t, n, r) {
                return {
                  payload: e,
                  meta: Je(Ye({}, r || {}), {
                    arg: n,
                    requestId: t,
                    requestStatus: "fulfilled",
                  }),
                };
              }),
              o = ot(e + "/pending", function (e, t, n) {
                return {
                  payload: void 0,
                  meta: Je(Ye({}, n || {}), {
                    arg: t,
                    requestId: e,
                    requestStatus: "pending",
                  }),
                };
              }),
              a = ot(e + "/rejected", function (e, t, r, o, a) {
                return {
                  payload: o,
                  error: ((n && n.serializeError) || ft)(e || "Rejected"),
                  meta: Je(Ye({}, a || {}), {
                    arg: r,
                    requestId: t,
                    rejectedWithValue: !!o,
                    requestStatus: "rejected",
                    aborted: "AbortError" === (null == e ? void 0 : e.name),
                    condition:
                      "ConditionError" === (null == e ? void 0 : e.name),
                  }),
                };
              }),
              i =
                "undefined" != typeof AbortController
                  ? AbortController
                  : (function () {
                      function e() {
                        this.signal = {
                          aborted: !1,
                          addEventListener: function () {},
                          dispatchEvent: function () {
                            return !1;
                          },
                          onabort: function () {},
                          removeEventListener: function () {},
                          reason: void 0,
                          throwIfAborted: function () {},
                        };
                      }
                      return (
                        (e.prototype.abort = function () {
                          0;
                        }),
                        e
                      );
                    })();
            return Object.assign(
              function (e) {
                return function (l, c, u) {
                  var s,
                    f = (null == n ? void 0 : n.idGenerator)
                      ? n.idGenerator(e)
                      : lt(),
                    d = new i();
                  function p(e) {
                    (s = e), d.abort();
                  }
                  var y = (function () {
                    return Qe(this, null, function () {
                      var i, y, m, h, v, g;
                      return Ve(this, function (b) {
                        switch (b.label) {
                          case 0:
                            return (
                              b.trys.push([0, 4, , 5]),
                              (h =
                                null == (i = null == n ? void 0 : n.condition)
                                  ? void 0
                                  : i.call(n, e, { getState: c, extra: u })),
                              null === (E = h) ||
                              "object" !== Le(E) ||
                              "function" != typeof E.then
                                ? [3, 2]
                                : [4, h]
                            );
                          case 1:
                            (h = b.sent()), (b.label = 2);
                          case 2:
                            if (!1 === h || d.signal.aborted)
                              throw {
                                name: "ConditionError",
                                message:
                                  "Aborted due to condition callback returning false.",
                              };
                            return (
                              (v = new Promise(function (e, t) {
                                return d.signal.addEventListener(
                                  "abort",
                                  function () {
                                    return t({
                                      name: "AbortError",
                                      message: s || "Aborted",
                                    });
                                  },
                                );
                              })),
                              l(
                                o(
                                  f,
                                  e,
                                  null ==
                                    (y = null == n ? void 0 : n.getPendingMeta)
                                    ? void 0
                                    : y.call(
                                        n,
                                        { requestId: f, arg: e },
                                        { getState: c, extra: u },
                                      ),
                                ),
                              ),
                              [
                                4,
                                Promise.race([
                                  v,
                                  Promise.resolve(
                                    t(e, {
                                      dispatch: l,
                                      getState: c,
                                      extra: u,
                                      requestId: f,
                                      signal: d.signal,
                                      abort: p,
                                      rejectWithValue: function (e, t) {
                                        return new ut(e, t);
                                      },
                                      fulfillWithValue: function (e, t) {
                                        return new st(e, t);
                                      },
                                    }),
                                  ).then(function (t) {
                                    if (t instanceof ut) throw t;
                                    return t instanceof st
                                      ? r(t.payload, f, e, t.meta)
                                      : r(t, f, e);
                                  }),
                                ]),
                              ]
                            );
                          case 3:
                            return (m = b.sent()), [3, 5];
                          case 4:
                            return (
                              (g = b.sent()),
                              (m =
                                g instanceof ut
                                  ? a(null, f, e, g.payload, g.meta)
                                  : a(g, f, e)),
                              [3, 5]
                            );
                          case 5:
                            return (
                              (n &&
                                !n.dispatchConditionRejection &&
                                a.match(m) &&
                                m.meta.condition) ||
                                l(m),
                              [2, m]
                            );
                        }
                        var E;
                      });
                    });
                  })();
                  return Object.assign(y, {
                    abort: p,
                    requestId: f,
                    arg: e,
                    unwrap: function () {
                      return y.then(pt);
                    },
                  });
                };
              },
              { pending: o, rejected: a, fulfilled: r, typePrefix: e },
            );
          }
          return (
            (e.withTypes = function () {
              return e;
            }),
            e
          );
        })();
      function pt(e) {
        if (e.meta && e.meta.rejectedWithValue) throw e.payload;
        if (e.error) throw e.error;
        return e.payload;
      }
      Object.assign;
      var yt = "listenerMiddleware";
      ot(yt + "/add"), ot(yt + "/removeAll"), ot(yt + "/remove");
      "function" == typeof queueMicrotask &&
        queueMicrotask.bind(
          "undefined" != typeof window
            ? window
            : void 0 !== n.g
              ? n.g
              : globalThis,
        );
      var mt,
        ht,
        vt = function (e) {
          return function (t) {
            setTimeout(t, e);
          };
        };
      "undefined" != typeof window && window.requestAnimationFrame
        ? window.requestAnimationFrame
        : vt(10);
      ye(),
        (function (e) {
          (e.Granted = "Granted"),
            (e.Denied = "Denied"),
            (e.Actionable = "Actionable");
        })(ht || (ht = {}));
      var gt,
        bt = ht;
      !(function (e) {
        (e.VerificationStarted = "VERIFICATION_STARTED"),
          (e.verificationInProgress = "VERIFICATION_IN_PROGRESS"),
          (e.VerificationPending = "VERIFICATION_PENDING"),
          (e.VerificationFailed = "VERIFICATION_FAILED"),
          (e.VerificationSucceded = "VERIFICATION_SUCCEEDED"),
          (e.AMPCheckFailed = "AMP_CHECK_FAILED"),
          (e.EmailUpdateFailed = "EMAIL_UPDATE_FAILED");
      })(gt || (gt = {}));
      var Et,
        wt = gt;
      !(function (e) {
        (e.GovernmentId = "GovernmentId"),
          (e.Phone = "PHONE"),
          (e.Email = "EMAIL"),
          (e.AddedEmail = "AddedEmail"),
          (e.ParentConsentRequest = "ParentConsent"),
          (e.ParentLinkRequest = "ParentLink"),
          (e.AgeEstimation = "AgeEstimation"),
          (e.SettingsUpdate = "SettingsUpdate");
      })(Et || (Et = {}));
      var St,
        At,
        Ct,
        Pt,
        xt,
        kt = Et;
      !(function (e) {
        (e.Prologue = "PROLOGUE"),
          (e.Verification = "VERIFICATION"),
          (e.Epilogue = "EPILOGUE");
      })(St || (St = {})),
        (function (e) {
          (e[(e.VendorLink = 0)] = "VendorLink"),
            (e[(e.Checklist = 1)] = "Checklist"),
            (e[(e.Complete = 2)] = "Complete");
        })(At || (At = {})),
        (function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.Success = 1)] = "Success"),
            (e[(e.Failure = 2)] = "Failure"),
            (e[(e.RequiresManualReview = 3)] = "RequiresManualReview"),
            (e[(e.RequiresRetry = 4)] = "RequiresRetry"),
            (e[(e.Started = 5)] = "Started"),
            (e[(e.Submitted = 6)] = "Submitted"),
            (e[(e.Stored = 7)] = "Stored"),
            (e[(e.Expired = 8)] = "Expired");
        })(Ct || (Ct = {})),
        (function (e) {
          (e[(e.NoError = 0)] = "NoError"),
            (e[(e.UnknownError = 1)] = "UnknownError"),
            (e[(e.InvalidDocument = 2)] = "InvalidDocument"),
            (e[(e.InvalidSelfie = 3)] = "InvalidSelfie"),
            (e[(e.BelowMinimumAge = 4)] = "BelowMinimumAge"),
            (e[(e.LowQualityMedia = 5)] = "LowQualityMedia"),
            (e[(e.DocumentUnsupported = 6)] = "DocumentUnsupported");
        })(Pt || (Pt = {})),
        (function (e) {
          (e[(e.LANDING = 0)] = "LANDING"),
            (e[(e.EMAIL = 1)] = "EMAIL"),
            (e[(e.MODAL = 2)] = "MODAL"),
            (e[(e.SUCCESS_GENERIC = 3)] = "SUCCESS_GENERIC"),
            (e[(e.FAILURE = 4)] = "FAILURE"),
            (e[(e.PENDING = 5)] = "PENDING"),
            (e[(e.POLLING = 6)] = "POLLING"),
            (e[(e.EMAIL_CONTINUE = 7)] = "EMAIL_CONTINUE"),
            (e[(e.EXTERNAL_EMAIL = 8)] = "EXTERNAL_EMAIL"),
            (e[(e.ERROR = 9)] = "ERROR"),
            (e[(e.TEMP_BAN = 10)] = "TEMP_BAN"),
            (e[(e.VENDOR_LINK = 11)] = "VENDOR_LINK");
        })(xt || (xt = {}));
      var It,
        Tt,
        Nt,
        Ot = CoreRobloxUtilities,
        Mt = function (e, t, n) {
          Ot.eventStreamService.sendEventWithTarget(e, t, n);
        },
        Rt = r.EnvironmentUrls.apiGatewayUrl,
        Ut = function (e, t, n) {
          void 0 === t && (t = null), void 0 === n && (n = null);
          var r = (function (e, t, n) {
            return (
              void 0 === t && (t = null),
              void 0 === n && (n = null),
              {
                retryable: !0,
                withCredentials: !0,
                url:
                  Rt +
                  "/access-management/v1/upsell-feature-access?featureName=" +
                  e +
                  (t ? "&extraParameters=" + t : "") +
                  (n ? "&successfulActions=" + n : ""),
              }
            );
          })(e, t ? btoa(JSON.stringify(t)) : null, n);
          return new Promise(function (e) {
            i.httpService.get(r).then(
              function (t) {
                var n = t.data;
                e(n);
              },
              function (e) {
                throw e;
              },
            );
          });
        },
        Dt = function () {
          return (
            (Dt =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Dt.apply(this, arguments)
          );
        },
        jt = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Lt = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        Bt = {
          featureName: null,
          ampFeatureCheckData: void 0,
          stage: null,
          verificationStageRecourse: null,
          featureAccess: { loading: !1, data: null, error: null },
          showUpsell: !1,
          redirectLink: null,
          loading: !1,
          prologueUsed: !1,
        },
        Ft = dt("accessManagement/fetchFeatureAccess", function (e, t) {
          return jt(void 0, void 0, void 0, function () {
            var n, r, o, a;
            return Lt(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    i.trys.push([0, 2, , 3]),
                    (n = e.featureName),
                    (r = e.ampFeatureCheckData),
                    (o = e.successfulAction),
                    [4, Ut(n, r, o)]
                  );
                case 1:
                  return [2, i.sent()];
                case 2:
                  return (
                    (a = i.sent()),
                    Mt(wt.AMPCheckFailed, null, { error: JSON.stringify(a) }),
                    [2, t.rejectWithValue("Failed to fetch AMP response")]
                  );
                case 3:
                  return [2];
              }
            });
          });
        }),
        Vt = it({
          name: "accessManagement",
          initialState: Bt,
          reducers: {
            resetAccessManagementStore: function () {
              return Bt;
            },
            setFeatureName: function (e, t) {
              e.featureName = t.payload;
            },
            setAmpFeatureCheckData: function (e, t) {
              e.ampFeatureCheckData = t.payload;
            },
            showUpsell: function (e, t) {
              e.showUpsell = t.payload;
            },
            setFeatureAccess: function (e, t) {
              e.featureAccess = t.payload;
            },
            setRedirectLink: function (e, t) {
              e.redirectLink = t.payload;
            },
            setStage: function (e, t) {
              e.stage = t.payload;
            },
            setVerificationStageRecourse: function (e, t) {
              e.verificationStageRecourse = t.payload;
            },
            setPrologueUsed: function (e, t) {
              e.prologueUsed = t.payload;
            },
            setLoading: function (e, t) {
              e.loading = t.payload;
            },
          },
          extraReducers: function (e) {
            e.addCase(Ft.pending, function (e) {
              e.featureAccess.loading = !0;
            })
              .addCase(Ft.fulfilled, function (e, t) {
                var n = t.payload;
                (e.featureAccess = Dt(Dt({}, e.featureAccess), {
                  loading: !1,
                  data: n,
                })),
                  (e.featureName = n.featureName),
                  n.access === bt.Actionable &&
                    ((e.showUpsell = !0),
                    (e.verificationStageRecourse = n.recourses[0]));
              })
              .addCase(Ft.rejected, function (e, t) {
                e.featureAccess = Dt(Dt({}, e.featureAccess), {
                  loading: !1,
                  error: t.error.message || "Something went wrong",
                });
              });
          },
        }),
        _t = (It = Vt.actions).resetAccessManagementStore,
        qt =
          (It.setFeatureAccess, It.setFeatureName, It.setAmpFeatureCheckData),
        Wt = It.setRedirectLink,
        Ht = It.setVerificationStageRecourse,
        zt = (It.showUpsell, It.setStage),
        Gt = It.setPrologueUsed,
        Kt = function (e) {
          return e.accessManagement;
        },
        $t = function (e) {
          return e.accessManagement.showUpsell;
        },
        Yt = function (e) {
          return e.accessManagement.featureName;
        },
        Jt = function (e) {
          return e.accessManagement.ampFeatureCheckData;
        },
        Qt = function (e) {
          return e.accessManagement.featureAccess;
        },
        Xt = function (e) {
          return e.accessManagement.stage;
        },
        Zt = function (e) {
          return e.accessManagement.verificationStageRecourse;
        },
        en = function (e) {
          return e.accessManagement.prologueUsed;
        },
        tn = Vt.reducer,
        nn = function () {
          return (
            (nn =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            nn.apply(this, arguments)
          );
        },
        rn = function (e, t) {
          for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
            e[o] = t[n];
          return e;
        },
        on = [
          { label: "Label.ConnectingToMobile", statusCode: [Ct.Unknown] },
          { label: "Label.VerifyingYou", statusCode: [Ct.Started] },
          {
            label: "Label.VerificationWaitingForResults",
            statusCode: [Ct.Submitted],
          },
          {
            label: "Label.UpdatingRoblox",
            statusCode: [Ct.Success, Ct.Stored],
          },
        ],
        an = function (e, t) {
          void 0 === t && (t = []);
          var n = {
            heading: "Heading.VerificationSuccessful",
            icon: "success-icon",
            bodyText: ["Label.DateOfBirthUpdated"],
            buttonText: "Action.Close",
            footerText: null,
          };
          switch (e) {
            case xt.SUCCESS_GENERIC:
              break;
            case xt.FAILURE:
              n = nn(nn({}, n), {
                heading: "Heading.VerificationFailed",
                icon: "failure-icon",
                bodyText: ["Label.FailedVerification"],
                buttonText: "Action.Close",
              });
              break;
            case xt.PENDING:
              n = nn(nn({}, n), {
                heading: "Heading.VerificationPending",
                icon: "failure-icon",
                bodyText: ["Label.PendingVerification"],
                buttonText: "Action.Close",
              });
              break;
            case xt.ERROR:
              n = nn(nn({}, n), {
                heading: "Heading.Error",
                icon: "failure-icon",
                bodyText: ["Label.GenericError"],
              });
              break;
            case xt.TEMP_BAN:
              n = nn(nn({}, n), {
                heading: "Heading.Error",
                icon: "failure-icon",
                bodyText: ["Label.VerificationDeclined"],
              });
            case xt.LANDING:
            case xt.EMAIL:
            case xt.MODAL:
            case xt.POLLING:
            case xt.EMAIL_CONTINUE:
            case xt.EXTERNAL_EMAIL:
            case xt.VENDOR_LINK:
          }
          return (n.bodyText = rn(rn([], n.bodyText), t)), n;
        },
        ln = "Action.RestartSession",
        cn = "Action.StartSession",
        un = "Label.HavingTroubleScanCode",
        sn = "Label.PleaseDoNotClose",
        fn = "Label.VerificationDataSubmitted",
        dn = "Label.VerifyInBrowser",
        pn = "Label.AgeVerifyPrompt",
        yn = "Label.PrepareId",
        mn = "Label.ValidIdList",
        hn = "Label.UseSmartphone",
        vn = "Label.SmartphoneRequired",
        gn = "Label.ScanQRCode",
        bn = "Label.PrivacyNoticeAndLink",
        En = n(574),
        wn = r.EnvironmentUrls.apiGatewayUrl,
        Sn = function (e) {
          var t = {
              retryable: !0,
              withCredentials: !0,
              url:
                wn +
                "/age-verification-service/v1/persona-id-verification/start-verification",
            },
            n = { generateLink: !0, ageEstimation: e };
          return i.httpService
            .post(t, n)
            .then(function (e) {
              return e.data;
            })
            .catch(function (e) {
              var t = i.httpService.parseErrorCode(e);
              throw new Error(
                "Error to start ID verification: " + (t || "unknown"),
              );
            });
        },
        An = function (e) {
          var t = {
              retryable: !0,
              withCredentials: !0,
              url:
                wn +
                "/age-verification-service/v1/persona-id-verification/verified-status",
            },
            n = { token: e };
          return i.httpService
            .get(t, n)
            .then(function (e) {
              return e.data;
            })
            .catch(function (e) {
              var t = i.httpService.parseErrorCode(e);
              throw new Error(
                "Error to get ID verification status: " + (t || "unknown"),
              );
            });
        },
        Cn = function () {
          return (
            (Cn =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Cn.apply(this, arguments)
          );
        },
        Pn = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        xn = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        kn = {
          verified: null,
          IDVerificationState: {
            page: At.VendorLink,
            vendorVerificationData: {
              daysUntilNextVerification: 0,
              sessionIdentifier: null,
              verificationLink: null,
              qrCode: null,
              loading: !1,
            },
            loading: null,
            status: null,
            completionPageState: null,
            error: null,
          },
          loading: null,
        },
        In = function (e) {
          return e.verification.IDVerificationState;
        },
        Tn = function (e) {
          return e.verification.loading;
        },
        Nn = dt("verification/startIDVerification", function (e, t) {
          return Pn(void 0, void 0, void 0, function () {
            var n, r;
            return xn(this, function (o) {
              switch (o.label) {
                case 0:
                  return o.trys.push([0, 2, , 3]), [4, Sn(e)];
                case 1:
                  return (
                    ((n = o.sent()).qrCode =
                      ((a = n.verificationLink),
                      En.toDataURL(a, function (e, t) {
                        i = t;
                      }),
                      i)),
                    [2, n]
                  );
                case 2:
                  return (
                    (r = o.sent()),
                    Mt(wt.VerificationFailed, kt.GovernmentId, {
                      error: JSON.stringify(r),
                    }),
                    [2, t.rejectWithValue("Failed to start ID Verification")]
                  );
                case 3:
                  return [2];
              }
              var a, i;
            });
          });
        }),
        On = dt("verification/fetchIDVerificationStatus", function (e, t) {
          return Pn(void 0, void 0, void 0, function () {
            var n;
            return xn(this, function (r) {
              switch (r.label) {
                case 0:
                  return r.trys.push([0, 2, , 3]), [4, An(e)];
                case 1:
                  return [2, r.sent()];
                case 2:
                  return (
                    (n = r.sent()),
                    Mt(wt.VerificationFailed, kt.GovernmentId, {
                      error: JSON.stringify(n),
                    }),
                    [
                      2,
                      t.rejectWithValue(
                        "Failed to fetch ID Verification status",
                      ),
                    ]
                  );
                case 3:
                  return [2];
              }
            });
          });
        }),
        Mn = it({
          name: "verification",
          initialState: kn,
          reducers: {
            resetVerificationStore: function () {
              return kn;
            },
            setVerified: function (e, t) {
              e.verified = t.payload;
            },
            setIDVerificationState: function (e, t) {
              e.IDVerificationState = Cn({}, t.payload);
            },
            setIDVPage: function (e, t) {
              e.IDVerificationState.page = t.payload;
            },
            setLoading: function (e, t) {
              e.loading = t.payload;
            },
          },
          extraReducers: function (e) {
            e.addCase(Nn.pending, function (e, t) {
              var n = e.IDVerificationState.vendorVerificationData;
              (n.loading = !0),
                (e.IDVerificationState = Cn(Cn({}, e.IDVerificationState), {
                  vendorVerificationData: n,
                  loading: !0,
                }));
            })
              .addCase(Nn.fulfilled, function (e, t) {
                var n = t.payload,
                  r = n.daysUntilNextVerification,
                  o = null;
                (n.loading = !1),
                  null != r &&
                    r > 0 &&
                    (o = an(xt.TEMP_BAN, [
                      "Label.FailedVerificationInvalidDocument",
                    ])),
                  (e.IDVerificationState = Cn(Cn({}, e.IDVerificationState), {
                    vendorVerificationData: n,
                    completionPageState: o,
                    loading: !1,
                  }));
              })
              .addCase(Nn.rejected, function (e, t) {
                var n = e.IDVerificationState.vendorVerificationData;
                (n.loading = !1),
                  (e.IDVerificationState = Cn(Cn({}, e.IDVerificationState), {
                    vendorVerificationData: n,
                    loading: !1,
                    error: t.error.message || "Something went wrong",
                  }));
              })
              .addCase(On.pending, function (e) {
                e.IDVerificationState = Cn(Cn({}, e.IDVerificationState), {
                  loading: !0,
                });
              })
              .addCase(On.fulfilled, function (e, t) {
                var n,
                  r = t.payload,
                  o = e.IDVerificationState.page;
                switch (r.sessionStatus) {
                  case Ct.RequiresRetry:
                  case Ct.Failure:
                    switch (((o = At.Complete), r.sessionErrorCode)) {
                      case Pt.InvalidDocument:
                      case Pt.BelowMinimumAge:
                        n = an(xt.FAILURE, [
                          "Label.FailedVerificationInvalidDocument",
                        ]);
                        break;
                      case Pt.LowQualityMedia:
                      case Pt.InvalidSelfie:
                        n = an(xt.FAILURE, [
                          "Label.FailedVerificationLowQuality",
                        ]);
                        break;
                      case Pt.DocumentUnsupported:
                        n = an(xt.FAILURE, [
                          "Label.FailedVerificationUnsupportedDocument",
                        ]);
                        break;
                      default:
                        n = an(xt.FAILURE);
                    }
                    break;
                  case Ct.RequiresManualReview:
                    (o = At.Complete), (n = an(xt.PENDING));
                    break;
                  case Ct.Success:
                  case Ct.Stored:
                    (o = At.Complete), (n = an(xt.SUCCESS_GENERIC));
                    break;
                  case Ct.Started:
                    (o = At.Checklist),
                      Mt(wt.VerificationStarted, kt.GovernmentId, {
                        session:
                          e.IDVerificationState.vendorVerificationData
                            .sessionIdentifier,
                      });
                    break;
                  case Ct.Submitted:
                    Mt(wt.verificationInProgress, kt.GovernmentId, {
                      session:
                        e.IDVerificationState.vendorVerificationData
                          .sessionIdentifier,
                    });
                }
                e.IDVerificationState = Cn(Cn({}, e.IDVerificationState), {
                  loading: !1,
                  status: r,
                  completionPageState: n,
                  page: o,
                });
              })
              .addCase(On.rejected, function (e, t) {
                e.IDVerificationState = Cn(Cn({}, e.IDVerificationState), {
                  loading: !1,
                  error: t.error.message || "Something went wrong",
                });
              });
          },
        }),
        Rn = (Tt = Mn.actions).resetVerificationStore,
        Un =
          (Tt.setVerified,
          Tt.setIDVerificationState,
          Tt.setIDVPage,
          Tt.setLoading),
        Dn = Mn.reducer,
        jn =
          (r.EnvironmentUrls.apiGatewayUrl,
          r.EnvironmentUrls.accountSettingsApi),
        Ln =
          (r.EnvironmentUrls.voiceApi,
          function () {
            return {
              retryable: !0,
              withCredentials: !0,
              url: jn + "/v1/email",
            };
          }),
        Bn = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Fn = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        Vn = {
          emailAddress: null,
          isEmailVerified: !1,
          isEmailAdded: !1,
          loading: !1,
          error: !1,
        },
        _n = dt("emailVerification/updateUserEmail", function (e, t) {
          return Bn(void 0, void 0, void 0, function () {
            var n;
            return Fn(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    r.trys.push([0, 2, , 3]),
                    [
                      4,
                      ((o = { emailAddress: e }),
                      (a = Ln()),
                      i.httpService
                        .post(a, o)
                        .then(function () {
                          return !0;
                        })
                        .catch(function (e) {
                          throw new Error(
                            "Error to update email address: " +
                              JSON.stringify(e),
                          );
                        })),
                    ]
                  );
                case 1:
                  return [2, r.sent()];
                case 2:
                  return (
                    (n = r.sent()),
                    Mt(wt.EmailUpdateFailed, kt.AddedEmail, {
                      error: JSON.stringify(n),
                    }),
                    [2, t.rejectWithValue("Failed to update email address")]
                  );
                case 3:
                  return [2];
              }
              var o, a;
            });
          });
        }),
        qn = dt("emailVerification/getUserEmailStatus", function (e, t) {
          return Bn(void 0, void 0, void 0, function () {
            var e;
            return Fn(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    n.trys.push([0, 2, , 3]),
                    [
                      4,
                      ((r = Ln()),
                      i.httpService
                        .get(r)
                        .then(function (e) {
                          return e.data;
                        })
                        .catch(function (e) {
                          throw new Error(
                            "Error to get email address: " + JSON.stringify(e),
                          );
                        })),
                    ]
                  );
                case 1:
                  return [2, n.sent()];
                case 2:
                  return (
                    (e = n.sent()),
                    Mt(wt.EmailUpdateFailed, kt.AddedEmail, {
                      error: JSON.stringify(e),
                    }),
                    [2, t.rejectWithValue("Failed to fetch email address")]
                  );
                case 3:
                  return [2];
              }
              var r;
            });
          });
        }),
        Wn = it({
          name: "emailVerification",
          initialState: Vn,
          reducers: {
            resetEmailVerificationStore: function () {
              return Vn;
            },
            setUserEmailData: function (e, t) {
              e.emailAddress = t.payload;
            },
          },
          extraReducers: function (e) {
            e.addCase(_n.pending, function (e) {
              e.loading = !0;
            })
              .addCase(_n.fulfilled, function (e, t) {
                (e.isEmailAdded = !0), (e.loading = !1);
              })
              .addCase(_n.rejected, function (e, t) {
                (e.loading = !1), (e.error = !0);
              })
              .addCase(qn.pending, function (e) {
                e.loading = !0;
              })
              .addCase(qn.fulfilled, function (e, t) {
                var n = t.payload;
                (e.emailAddress = n.emailAddress),
                  (e.isEmailVerified = n.isEmailVerified),
                  (e.loading = !1);
              })
              .addCase(qn.rejected, function (e) {
                e.loading = !1;
              });
          },
        }),
        Hn = (Nt = Wn.actions).resetEmailVerificationStore,
        zn =
          (Nt.setUserEmailData,
          function (e) {
            return e.emailVerification;
          }),
        Gn = (function (e) {
          var t,
            n = rt(),
            r = e || {},
            o = r.reducer,
            a = void 0 === o ? void 0 : o,
            i = r.middleware,
            l = void 0 === i ? n() : i,
            c = r.devTools,
            u = void 0 === c || c,
            s = r.preloadedState,
            f = void 0 === s ? void 0 : s,
            d = r.enhancers,
            p = void 0 === d ? void 0 : d;
          if ("function" == typeof a) t = a;
          else {
            if (!Ze(a))
              throw new Error(
                '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
              );
            t = (0, Ue.combineReducers)(a);
          }
          var y = l;
          "function" == typeof y && (y = y(n));
          var m = Ue.applyMiddleware.apply(void 0, y),
            h = Ue.compose;
          u && (h = Xe(Ye({ trace: !1 }, "object" === Le(u) && u)));
          var v = new tt(m),
            g = v;
          Array.isArray(p)
            ? (g = _e([m], p))
            : "function" == typeof p && (g = p(v));
          var b = h.apply(void 0, g);
          return (0, Ue.createStore)(t, f, b);
        })({
          reducer: {
            accessManagement: tn,
            verification: Dn,
            emailVerification: Wn.reducer,
          },
        }),
        Kn = function () {
          return O();
        },
        $n = "StartAccessManagementUpsell",
        Yn = {
          Cancel: "Action.Cancel",
          EmailMyParent: "Action.EmailMyParent",
          VerifyID: "Action.VerifyID",
          AskNow: "Action.AskNowLowercase",
        },
        Jn = {
          AskYourParent: "Title.AskYourParent",
          VerifyYourAge: "Title.VerifyYourAge",
        },
        Qn = {
          Vpc: "Description.PrologueTextVpc",
          VpcConnectingText: "Description.PrologueConnectingTextVpc",
          Idv: "Description.PrologueTextIdv",
          IdvConnectingText: "Description.PrologueConnectingTextIdv",
          IdvAndVpc: "Description.PrologueTextIdvAndVpc",
          IdvAndVpcConnectingText:
            "Description.PrologueConnectingTextIdvAndVpc",
          VpcEnablePurchase: "Description.PrologueEnablePurchase",
          VpcUnblockUser: "Description.PrologueUnblockUser",
          VpcUnblockExperience: "Description.PrologueUnblockExperience",
        },
        Xn = Ot.eventStreamService.eventTypes,
        Zn = "ageVerification",
        er = {
          emailRegex: "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
          translationKeys: {
            addEmailToAccountKeys: {
              btnText: "Action.Continue",
              ActionChangeEmail: "Action.ChangeEmail",
              ActionSent: "Action.Sent",
              ActionContinue: "Action.Continue",
              ActionGenericSkip: "Action.GenericSkip",
              DescriptionAddEmailTextOver13:
                "Description.IDVerificationAddEmailText",
              DescriptionAddEmailTextUnder13:
                "Description.IDVerificationAddEmailText",
              HeadingAddEmail: "Heading.AddEmail",
              LabelEmailInputPlaceholderOver13:
                "Label.EmailInputPlaceholderOver13",
              LabelEmailInputPlaceholderUnder13:
                "Label.EmailInputPlaceholderUnder13",
              MessageInvalidEmailAddress: "Message.InvalidEmailAddress",
            },
          },
          events: {
            showAddEmailModal: {
              name: "showAddEmailModal",
              type: Xn.modalAction,
              context: Zn,
              params: { aType: "shown", field: "addEmail" },
            },
            useAddEmailField: {
              name: "useAddEmailField",
              type: Xn.formInteraction,
              context: Zn,
              params: { btn: "emailAddress", field: "addEmail" },
            },
            addEmailConfirm: {
              name: "addEmailConfirm",
              type: Xn.buttonClick,
              context: Zn,
              params: { btn: "continue", field: "addEmail" },
            },
          },
        },
        tr = function () {
          return (
            (tr =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            tr.apply(this, arguments)
          );
        },
        nr = er.events,
        rr = {
          useAddEmailToAccountEvent: function (e) {
            var t = nr.useAddEmailField;
            Ot.eventStreamService.sendEventWithTarget(
              t.type,
              t.context,
              tr(tr({}, t.params), { origin: e }),
            );
          },
          addEmailToAccountEvent: function (e) {
            var t = nr.addEmailConfirm;
            Ot.eventStreamService.sendEventWithTarget(
              t.type,
              t.context,
              tr(tr({}, t.params), { origin: e }),
            );
          },
        },
        or = function (n, r) {
          var o = Kn(),
            a = (0, e.useState)(!1),
            i = a[0],
            l = a[1],
            c = (0, e.useState)(!1),
            u = c[0],
            s = (c[1], (0, e.useState)(!0)),
            f = s[0],
            d = s[1],
            p = (0, e.useState)(""),
            y = p[0],
            m = p[1],
            h = (0, e.useState)(""),
            v = h[0],
            g = h[1],
            b = (0, e.useMemo)(function () {
              return {
                open: function () {
                  return l(!0);
                },
                close: function () {
                  o(Hn()), l(!1);
                },
              };
            }, []),
            E = er.emailRegex,
            w = er.translationKeys.addEmailToAccountKeys,
            S = (0, e.useState)(""),
            A = S[0],
            C = S[1],
            P = new RegExp(E),
            x = function () {
              o(Hn()), l(!1), r();
            },
            k = function (e) {
              m(e), C("");
              var t = P.test(y)
                ? A
                  ? n(A)
                  : ""
                : n(w.MessageInvalidEmailAddress);
              g(t), d(u || e.length <= 0 || t.length > 0);
            },
            I = t().createElement(
              t().Fragment,
              null,
              t().createElement("div", { className: "email-upsell-image" }),
              t().createElement(
                "p",
                { className: "email-upsell-text-body" },
                n(w.DescriptionAddEmailTextOver13, { emailAddress: y }),
              ),
              t().createElement("input", {
                type: "email",
                className:
                  (v ? "input-field-error" : "") +
                  " form-control input-field email-upsell-modal-input",
                placeholder: n(w.LabelEmailInputPlaceholderOver13),
                value: y,
                onFocus: function () {
                  return rr.useAddEmailToAccountEvent("");
                },
                onChange: function (e) {
                  return k(e.target.value);
                },
              }),
              v &&
                t().createElement(
                  "p",
                  { className: "text-error modal-error-message" },
                  n(v),
                ),
            );
          return [
            t().createElement(
              M.Modal,
              {
                show: i,
                onHide: x,
                backdrop: !0,
                className: "mail-upsell-android-modal",
                size: "sm",
                "aria-labelledby": "contained-modal-title-vcenter",
                scrollable: "true",
                centered: !0,
              },
              t().createElement(
                M.Modal.Header,
                { useBaseBootstrapComponent: !0 },
                t().createElement(
                  "div",
                  { className: "email-upsell-title-container" },
                  t().createElement(
                    "button",
                    {
                      type: "button",
                      className: "email-upsell-title-button",
                      onClick: x,
                    },
                    t().createElement("span", {
                      className: "close icon-close",
                    }),
                  ),
                  t().createElement(
                    M.Modal.Title,
                    { id: "contained-modal-title-vcenter" },
                    n(w.HeadingAddEmail),
                  ),
                ),
              ),
              t().createElement(M.Modal.Body, null, I),
              t().createElement(
                M.Modal.Footer,
                null,
                t().createElement(
                  M.Button,
                  {
                    className: "modal-button email-upsell-btn",
                    variant: M.Button.variants.cta,
                    size: M.Button.sizes.medium,
                    isDisabled: f,
                    onClick: function () {
                      C(""), o(_n(y));
                    },
                  },
                  n(w.btnText),
                ),
              ),
            ),
            b,
          ];
        },
        ar = (0, c.withTranslations)(
          function (n) {
            var r = n.translate,
              o = n.onHide,
              a = Kn(),
              i = S(zn),
              l = S(Yt),
              c = S(Jt),
              u = or(r, o),
              s = u[0],
              f = u[1];
            return (
              (0, e.useEffect)(function () {
                f.open();
              }, []),
              (0, e.useEffect)(
                function () {
                  i.error && (f.close(), o());
                },
                [f, i],
              ),
              (0, e.useEffect)(
                function () {
                  i.isEmailAdded &&
                    (f.close(),
                    a(
                      Ft({
                        featureName: l,
                        ampFeatureCheckData: c,
                        successfulAction: "AddedEmail",
                      }),
                    ));
                },
                [i],
              ),
              t().createElement("div", null, s)
            );
          },
          {
            common: ["CommonUI.Controls"],
            feature: "Feature.VerificationUpsell",
          },
        ),
        ir = n(373),
        lr = n.n(ir);
      var cr = function () {
          return t().createElement(M.Loading, null);
        },
        ur = HeaderScripts;
      var sr = function (e) {
        var n = e.translate,
          r = e.onHide,
          o = S(In),
          a = o.status,
          i = o.vendorVerificationData,
          l = a.sessionStatus,
          c = i.qrCode,
          u = ur.deviceMeta.getDeviceMeta(),
          s =
            !(
              (null == u ? void 0 : u.isPhone) ||
              (null == u ? void 0 : u.isTablet) ||
              "phone" === (null == u ? void 0 : u.deviceType)
            ) && c,
          f = on.findIndex(function (e) {
            return e.statusCode.includes(l);
          });
        return t().createElement(
          t().Fragment,
          null,
          t().createElement(
            M.Modal.Header,
            { useBaseBootstrapComponent: !0 },
            t().createElement(
              "div",
              { className: "email-upsell-title-container" },
              t().createElement(
                "button",
                {
                  type: "button",
                  className: "email-upsell-title-button",
                  onClick: r,
                },
                t().createElement("span", { className: "close icon-close" }),
              ),
              t().createElement(
                M.Modal.Title,
                { id: "contained-modal-title-vcenter" },
                n("Heading.IdentityVerification"),
              ),
            ),
          ),
          t().createElement(
            M.Modal.Body,
            { className: "verification-checklist-page-content" },
            t().createElement(
              "div",
              { className: "cta" },
              n(
                l === Ct.Success || l === Ct.Stored || l === Ct.Submitted
                  ? fn
                  : dn,
              ),
            ),
            t().createElement(
              "ul",
              { className: "checklist-wrapper" },
              on.map(function (e, r) {
                return r <= f
                  ? t().createElement(
                      "li",
                      { className: "checklist-item" },
                      t().createElement(
                        "span",
                        { className: "check-wrapper" },
                        t().createElement("span", {
                          className:
                            r === f ? "spinner spinner-sm" : "icon-checkmark",
                        }),
                      ),
                      t().createElement(
                        "span",
                        { className: "checklist-text" },
                        n(e.label),
                      ),
                    )
                  : null;
              }),
            ),
            s &&
              t().createElement(
                "div",
                { className: "verification-link-page-content" },
                t().createElement(
                  "div",
                  { className: "qr-code-wrapper" },
                  t().createElement("img", {
                    className: "qr-code-img",
                    src: c,
                    alt: "qr",
                  }),
                ),
                t().createElement("div", { className: "footer-text" }, n(un)),
              ),
            !s &&
              t().createElement(
                "a",
                {
                  href: i.verificationLink,
                  target: "_blank",
                  rel: "noreferrer",
                },
                t().createElement(
                  M.Button,
                  {
                    onClick: function () {
                      Mt(wt.VerificationStarted, kt.GovernmentId, {
                        session: i.sessionIdentifier,
                      });
                    },
                    className: "primary-link",
                    variant: M.Button.variants.primary,
                    size: M.Button.sizes.medium,
                    width: M.Button.widths.full,
                  },
                  n(ln),
                ),
              ),
            t().createElement("div", { className: "footer-text" }, n(sn)),
          ),
        );
      };
      var fr = function (e) {
        var n = e.translate,
          r = e.onHide,
          o = S(In).vendorVerificationData,
          a = o.loading,
          i = o.qrCode,
          l = ur.deviceMeta.getDeviceMeta(),
          c =
            !(
              (null == l ? void 0 : l.isPhone) ||
              (null == l ? void 0 : l.isTablet) ||
              "phone" === (null == l ? void 0 : l.deviceType)
            ) && i;
        return t().createElement(
          t().Fragment,
          null,
          t().createElement(
            M.Modal.Header,
            { useBaseBootstrapComponent: !0 },
            t().createElement(
              "button",
              {
                type: "button",
                className: "email-upsell-title-button",
                onClick: r,
              },
              t().createElement("span", { className: "close icon-close" }),
            ),
            t().createElement(
              "div",
              { className: "email-upsell-title-container" },
              t().createElement(
                M.Modal.Title,
                { id: "contained-modal-title-vcenter" },
                n("Heading.IdentityVerification"),
              ),
            ),
          ),
          a
            ? t().createElement(M.Loading, null)
            : t().createElement(
                M.Modal.Body,
                { className: "verification-link-page-content" },
                t().createElement(
                  "div",
                  { className: "verification-link-upsell" },
                  n(pn),
                ),
                t().createElement(
                  "div",
                  { className: "preparation-list-wrapper" },
                  t().createElement(
                    "div",
                    { className: "preparation-list-item" },
                    t().createElement("span", {
                      className: "icon-menu-document",
                    }),
                    t().createElement(
                      "div",
                      { className: "preparation-list-text" },
                      t().createElement(
                        "div",
                        { className: "preparation-title" },
                        n(yn),
                      ),
                      t().createElement(
                        "div",
                        { className: "preparation-text" },
                        n(mn),
                      ),
                    ),
                  ),
                  c &&
                    t().createElement(
                      "div",
                      { className: "preparation-list-item" },
                      t().createElement("span", {
                        className: "icon-menu-mobile",
                      }),
                      t().createElement(
                        "div",
                        { className: "preparation-list-text" },
                        t().createElement(
                          "div",
                          { className: "preparation-title" },
                          n(hn),
                        ),
                        t().createElement(
                          "div",
                          { className: "preparation-text" },
                          n(vn),
                        ),
                      ),
                    ),
                ),
                c &&
                  t().createElement(
                    "div",
                    null,
                    t().createElement(
                      "div",
                      { className: "verification-link-upsell" },
                      n(gn),
                    ),
                    t().createElement(
                      "div",
                      { className: "qr-code-wrapper" },
                      t().createElement("img", {
                        className: "qr-code-img",
                        src: i,
                        alt: "qr",
                      }),
                    ),
                  ),
                t().createElement("p", {
                  className: "verification-link-legal",
                  dangerouslySetInnerHTML: {
                    __html: n(bn, {
                      spanStart:
                        "<a class='text-link' href='https://en.help.roblox.com/hc/en-us/articles/4412863575316'>",
                      spanEnd: "</a>",
                    }),
                  },
                }),
                !c &&
                  t().createElement(
                    "a",
                    {
                      href: o.verificationLink,
                      target: "_self",
                      rel: "noreferrer",
                    },
                    t().createElement(
                      M.Button,
                      {
                        onClick: function () {
                          return console.log("start sesesion");
                        },
                        className: "primary-link",
                        variant: M.Button.variants.primary,
                        size: M.Button.sizes.medium,
                        width: M.Button.widths.full,
                      },
                      n(cn),
                    ),
                  ),
              ),
        );
      };
      var dr = function (e) {
        var n = e.translate,
          r = e.onHide,
          o = S(In),
          a = o.completionPageState,
          i = o.status,
          l = o.vendorVerificationData.daysUntilNextVerification,
          c = a.heading,
          u = a.bodyText,
          s = a.icon,
          f = a.footerText,
          d = a.buttonText,
          p = i.sessionStatus === Ct.Failure;
        return t().createElement(
          t().Fragment,
          null,
          t().createElement(
            M.Modal.Header,
            { useBaseBootstrapComponent: !0 },
            t().createElement(
              "div",
              { className: "email-upsell-title-container" },
              t().createElement(
                "button",
                {
                  type: "button",
                  className: "email-upsell-title-button",
                  onClick: r,
                },
                t().createElement("span", { className: "close icon-close" }),
              ),
              t().createElement(
                M.Modal.Title,
                { id: "contained-modal-title-vcenter" },
                n(c),
              ),
            ),
          ),
          t().createElement(
            M.Modal.Body,
            null,
            s && t().createElement("div", { className: s }),
            t().createElement(
              "ul",
              { className: p ? "content-list error-text" : "content-list" },
              u.map(function (e) {
                return t().createElement(
                  "li",
                  null,
                  n(e, { age: 18, days: l }),
                );
              }),
            ),
          ),
          t().createElement(
            M.Modal.Footer,
            null,
            f &&
              t().createElement(
                "p",
                { className: "small" },
                t().createElement("b", null, n(f)),
              ),
            t().createElement(
              "span",
              { key: d },
              t().createElement(
                M.Button,
                {
                  className: "button-stack-button primary-link",
                  variant: M.Button.variants.primary,
                  size: M.Button.sizes.medium,
                  onClick: r,
                },
                n(d),
              ),
            ),
          ),
        );
      };
      var pr = function (n) {
        var o,
          a = n.translate,
          i = n.onHidecallback,
          l = n.ageEstimation,
          c = 18e5,
          u = (0, e.useRef)(Number(new Date()) + c),
          s = Kn(),
          f = S(In),
          d = S(Tn),
          p = S(Yt),
          y = S(Jt),
          m = S(In).page,
          h = (0, e.useRef)(m),
          v = (0, e.useRef)(!1),
          g =
            null !== (o = r.DeviceMeta && (0, r.DeviceMeta)().isInApp) &&
            void 0 !== o &&
            o,
          b = f.vendorVerificationData,
          E = b.sessionIdentifier;
        function w() {
          s(Rn()), i();
        }
        (0, e.useEffect)(function () {
          s(Un(!0)), s(Nn(l)), g && (u.current = Number(new Date()) + c);
        }, []);
        var A = null;
        if (g || m === At.Complete)
          switch (m) {
            case At.VendorLink:
              A = t().createElement(fr, { translate: a, onHide: w });
              break;
            case At.Checklist:
              A = t().createElement(sr, { translate: a, onHide: w });
              break;
            case At.Complete:
              A = t().createElement(dr, { translate: a, onHide: w });
              break;
            default:
              A = t().createElement(fr, { translate: a, onHide: w });
          }
        return (
          (0, e.useEffect)(
            function () {
              g &&
                !f.loading &&
                null != b.verificationLink &&
                f.page !== At.Complete &&
                Number(new Date()) < u.current &&
                setTimeout(function () {
                  s(On(b.sessionIdentifier));
                }, 1e4);
            },
            [f],
          ),
          (0, e.useEffect)(
            function () {
              m === At.Complete &&
                s(Ft({ featureName: p, ampFeatureCheckData: y }));
            },
            [m],
          ),
          (0, e.useEffect)(
            function () {
              if (!g && E)
                var e = new (lr().Client)({
                  inquiryId: E,
                  onReady: function () {
                    e.open(), s(Un(!1));
                  },
                  onComplete: function (e) {
                    e.inquiryId, e.status, e.fields;
                    if (!v.current) {
                      s(Un(!0)), (v.current = !0);
                      var t = setInterval(function () {
                        h.current !== At.Complete && s(On(E));
                      }, 5e3);
                      setTimeout(function () {
                        clearInterval(t), s(Un(!1));
                      }, 3e4);
                    }
                  },
                  onCancel: function (e) {
                    e.inquiryId, e.sessionToken;
                    w();
                  },
                  onError: function (e) {
                    s(On(b.sessionIdentifier)), console.error(e);
                  },
                });
            },
            [E],
          ),
          t().createElement(
            t().Fragment,
            null,
            g || m === At.Complete ? A : d && t().createElement(cr, null),
          )
        );
      };
      var yr,
        mr = function (e) {
          return e.translate, t().createElement(t().Fragment, null);
        },
        hr =
          r.EnvironmentUrls.apiGatewayUrl +
          "/child-requests-api/v1/send-request-to-new-parent",
        vr =
          r.EnvironmentUrls.apiGatewayUrl +
          "/child-requests-api/v1/send-request-to-all-parents",
        gr =
          r.EnvironmentUrls.userSettingsApi +
          "/v1/account-insights/parent-emails",
        br = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Er = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        wr = {
          sendRequestToNewParent: function (e) {
            return br(void 0, void 0, Promise, function () {
              var t, n, r, o;
              return Er(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (t = { url: hr, withCredentials: !0 }),
                      (n = e.requestDetails),
                      [4, i.httpService.post(t, e)]
                    );
                  case 1:
                    return (
                      (r = a.sent()),
                      n &&
                        ((o = Object.keys(n)[0]),
                        Ot.localStorageService.setLocalStorage(
                          "Roblox.ParentalRequest." +
                            o +
                            "CooldownExpirationTime",
                          r.data.lockedUntil,
                        )),
                      [2, r.data]
                    );
                }
              });
            });
          },
          sendRequestToAllParents: function (e) {
            return br(void 0, void 0, Promise, function () {
              var t, n, r, o;
              return Er(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (t = { url: vr, withCredentials: !0 }),
                      (n = e.requestDetails),
                      [4, i.httpService.post(t, e)]
                    );
                  case 1:
                    return (
                      (r = a.sent()),
                      n &&
                        ((o = Object.keys(n)[0]),
                        Ot.localStorageService.setLocalStorage(
                          "Roblox.ParentalRequest." +
                            o +
                            "CooldownExpirationTime",
                          r.data.lockedUntil,
                        )),
                      [2, r.data]
                    );
                }
              });
            });
          },
        },
        Sr = wr,
        Ar = n(870),
        Cr = n.n(Ar),
        Pr = function (n) {
          var r = n.translate,
            o = n.title,
            a = n.body,
            i = n.actionButtonTranslateKey,
            l = void 0 === i ? "" : i,
            c = n.neutralButtonTranslateKey,
            u = n.footer,
            s = n.size,
            f = void 0 === s ? "sm" : s,
            d = n.onAction,
            p = n.disableActionButton,
            y = n.disabledNeutralButton,
            m = n.dualActionButton,
            h = void 0 !== m && m,
            v = n.onHide,
            g = void 0 === v ? function () {} : v,
            b = n.onNeutral,
            E = (0, e.useState)(!1),
            w = E[0],
            S = E[1],
            A = (0, e.useMemo)(function () {
              return {
                open: function () {
                  return S(!0);
                },
                close: function () {
                  return S(!1);
                },
              };
            }, []),
            C = Cr()({
              "modal-half-width-button": c,
              "modal-full-width-button": !c,
            });
          return [
            t().createElement(
              M.Modal,
              {
                show: w,
                onHide: function () {
                  A.close(), g();
                },
                backdrop: !0,
                className: "access-management-upsell-inner-modal",
                size: f,
                "aria-labelledby": "access-management-upsell-inner-modal-title",
                scrollable: !0,
                centered: !0,
              },
              t().createElement(
                M.Modal.Header,
                { useBaseBootstrapComponent: !0 },
                t().createElement(
                  "div",
                  {
                    className:
                      "access-management-upsell-inner-modal-title-container",
                  },
                  t().createElement(
                    M.Modal.Title,
                    { id: "access-management-upsell-inner-modal-title" },
                    o,
                  ),
                ),
                t().createElement(
                  "button",
                  {
                    type: "button",
                    className: "close close-button",
                    onClick: function () {
                      A.close(), g();
                    },
                  },
                  t().createElement("span", { className: "icon-close" }),
                ),
              ),
              t().createElement(M.Modal.Body, null, a),
              t().createElement(
                M.Modal.Footer,
                null,
                l &&
                  t().createElement(
                    M.Button,
                    {
                      className: C,
                      variant: M.Button.variants.primary,
                      size: M.Button.sizes.medium,
                      isDisabled: p,
                      onClick: function () {
                        null == d || d(), A.close();
                      },
                    },
                    r(l),
                  ),
                c &&
                  t().createElement(
                    M.Button,
                    {
                      className: C,
                      variant: h
                        ? M.Button.variants.primary
                        : M.Button.variants.secondary,
                      size: M.Button.sizes.medium,
                      isDisabled: y,
                      onClick: function () {
                        null == b || b(), A.close();
                      },
                    },
                    r(c),
                  ),
              ),
              u &&
                t().createElement(
                  "div",
                  {
                    className:
                      "text-footer access-management-upsell-inner-modal-text-footer border-top",
                  },
                  u,
                ),
            ),
            A,
          ];
        },
        xr = {
          privacyPolicyUrl: r.EnvironmentUrls.websiteUrl + "/info/privacy",
          chargebackWizardSessionTokenLocalStorageKey:
            "Roblox.ChargebackWizardSessionToken",
          defaultCooldownTimeInMs: 9e5,
          emailRegex: "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
          isChildSubjectToPCFeatureName: "IsChildSubjectToParentalControls",
          translationKeys: {
            gatherParentEmail: {
              title: "Title.EnterParentEmailV2",
              permissionNeededTitle: "Title.PermissionNeeded",
              askYourParentTitle: "Title.AskYourParent",
              body: "Description.EnterParentEmailV4",
              combinedBody: "Description.EnterParentEmailExp",
              bodyWithoutPC:
                "Description.EnterParentEmailWithoutParentalControl",
              combinedBodyWithoutPC:
                "Description.EnterParentEmailExpWithoutParentalControl",
              footer: "Description.ParentalEmailFooter",
              unknownError: "Message.SomethingWentWrong",
              invalidEmailError: "Message.InvalidEmail",
              btnText: "Action.SendEmail",
              emailPlaceholder: "Label.EmailCapitalized",
              parentEmailLabel: "Label.ParentEmail",
              emailTooManyChildrenError: "Message.EmailIneligible",
              childTooManyParentsError: "Message.ExistAccountWithEmail",
              emailTooManyRequest: "Message.TooManyAttempts",
              senderFlooded: "Message.TooManyAttemptAskParent",
              alreadyApplied: "Description.AllSet",
              seeRequestAfterLink: "Message.RequestCreatedEmailNotSent",
              alreadyLinked: "Message.AlreadyLinked",
            },
            emailSentConfirmation: {
              title: "Title.RequestSent",
              oneParentBody: "Message.EmailSent",
              pluralParentBody: "Message.EmailSentPluralParent",
              emailNotSentBody: "Message.RequestCreatedEmailNotSent",
              btnText: "Action.OK",
            },
            exitWarning: {
              title: "Title.AreYouSure",
              body: "Description.ExitEnterEmail",
              actionBtnText: "Action.EnterEmail",
              neutralBtnText: "Action.Cancel",
            },
          },
          events: {
            chargebackContext: {
              parentalEntry: "parentalEntry",
              settingsAge: "settingsAgeChargeback",
              settingsRequestSent: "settingsChargebackRequestSent",
            },
            savePaymentMethodsContext: {
              parentalEntry: "parentalEntryDevsubs",
              settingsAge: "settingsAgeSavePaymentMethods",
              settingsRequestSent: "settingsSavePaymentMethodsRequestSent",
            },
            changeBirthdayContext: {
              parentalEntry: "parentalEntryAgeChange",
              settingsAge: "settingsAgeChangeBirthday",
              settingsRequestSent: "settingsAgeChangeVerifyRequestSent",
            },
            updateUserSettingContext: {
              parentalEntry: "parentalEntrySettings",
              settingsAge: "settingsAgeSettings",
              settingsRequestSent: "settingsRequestSent",
            },
            eventName: {
              authPageLoad: "authPageload",
              authButtonClick: "authButtonClick",
              authFormInteraction: "authFormInteraction",
              authMsgShown: "authMsgShown",
              authModalShown: "authModalShown",
            },
            state: {
              sessionId: "sessionId",
              unknown: "unknown",
              changeBirthday: {
                U13To18: "U13To18",
                U13To1318: "U13To1318",
                U13ToU13: "U13ToU13",
              },
            },
            field: {
              email: "email",
              errorMessage: "errorMessage",
              logoutPopup: "logoutPopup",
              parentalEmailMismatch: "parentalEmailMismatch",
            },
            btn: {
              verifyCancel: "verifyCancel",
              continue: "continue",
              submit: "submit",
            },
            text: {
              enterParentEmail: "Enter Parent's Email",
              sendEmail: "Send Email",
              submit: "Submit",
              ok: "OK",
              requestSent: "Request Sent",
            },
            vpc: "Vpc",
          },
          settingName: { enablePurchases: "enablePurchases" },
        };
      !(function (e) {
        (e.Unknown = "Unknown"),
          (e.InvalidUserID = "InvalidUserID"),
          (e.InvalidParameter = "InvalidParameter"),
          (e.ServiceUnavailable = "ServiceUnavailable"),
          (e.NoLinkedParents = "NoLinkedParents"),
          (e.ConsentAlreadyApplied = "ConsentAlreadyApplied"),
          (e.SenderFlooded = "SenderFlooded"),
          (e.ReceiverFlooded = "ReceiverFlooded"),
          (e.SenderFloodedRequestCreated = "SenderFloodedRequestCreated"),
          (e.IllegalState = "IllegalState"),
          (e.InvalidEmailAddress = "InvalidEmailAddress"),
          (e.EmailNotUnique = "EmailNotUnique"),
          (e.LinkingIneligible = "LinkingIneligible"),
          (e.AlreadyLinked = "AlreadyLinked"),
          (e.ChildAtLinkLimit = "ChildAtLinkLimit"),
          (e.ParentAtLinkLimit = "ParentAtLinkLimit"),
          (e.UpdateUserSettingRequestInvalid =
            "UpdateUserSettingRequestInvalid"),
          (e.ConsentAlreadyRequestedConflictingData =
            "ConsentAlreadyRequestedConflictingData"),
          (e.ReceiverNotWhitelisted = "ReceiverNotWhitelisted"),
          (e.InvalidComplianceFeature = "InvalidComplianceFeature"),
          (e.ChildTooOld = "ChildTooOld"),
          (e.UserForgotten = "UserForgotten");
      })(yr || (yr = {}));
      var kr,
        Ir = yr,
        Tr = { data: { code: "UnknownError" } },
        Nr = xr.translationKeys.gatherParentEmail,
        Or = function (e) {
          switch (e) {
            case Ir.ChildAtLinkLimit:
              return Nr.childTooManyParentsError;
            case Ir.ParentAtLinkLimit:
              return Nr.emailTooManyChildrenError;
            case Ir.SenderFlooded:
              return Nr.senderFlooded;
            case Ir.ReceiverFlooded:
              return Nr.emailTooManyRequest;
            case Ir.ConsentAlreadyApplied:
              return Nr.alreadyApplied;
            case Ir.AlreadyLinked:
              return Nr.alreadyLinked;
            case Ir.InvalidEmailAddress:
              return Nr.invalidEmailError;
            default:
              return Nr.unknownError;
          }
        };
      !(function (e) {
        (e.LiftPunishment = "LiftPunishment"),
          (e.SavePaymentMethods = "SavePaymentMethods"),
          (e.UpdateUserSetting = "UpdateUserSetting"),
          (e.UpdateBirthdate = "UpdateBirthdate"),
          (e.LinkToChild = "LinkToChild"),
          (e.Unknown = "Unknown");
      })(kr || (kr = {}));
      var Mr,
        Rr = kr;
      !(function (e) {
        e.Chargeback = "Chargeback";
      })(Mr || (Mr = {}));
      var Ur,
        Dr = Mr,
        jr = xr.events,
        Lr = function (e, t, n, r) {
          var o = n ? n + ", " : "",
            a = t ? "sessionId: " + t + ", " : "",
            i = r ? "settingName: " + Object.keys(r)[0] + ", " : "",
            l = r
              ? Object.entries(r)
                  .map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return t + ": " + String(n);
                  })
                  .join(", ")
              : "";
          return e === Rr.UpdateUserSetting ? "" + o + i + a : "" + o + l + a;
        },
        Br = function (e, t) {
          var n;
          switch (e) {
            case Rr.LiftPunishment:
              (null == t ? void 0 : t.punishmentType) === Dr.Chargeback &&
                (n = jr.chargebackContext);
              break;
            case Rr.SavePaymentMethods:
              n = jr.savePaymentMethodsContext;
              break;
            case Rr.UpdateBirthdate:
              n = jr.changeBirthdayContext;
              break;
            case Rr.UpdateUserSetting:
              n = jr.updateUserSettingContext;
              break;
            default:
              n = jr.chargebackContext;
          }
          return n;
        },
        Fr = function (e, t, n) {
          try {
            Ot.eventStreamService.sendEventWithTarget(e, t, n);
          } catch (e) {}
        },
        Vr = function (e) {
          var t = e.requestType,
            n = e.sessionId,
            r = e.extraState,
            o = e.details,
            a = Br(t, o);
          Fr(jr.eventName.authButtonClick, a.parentalEntry, {
            btn: jr.btn.continue,
            associatedText: jr.text.ok,
            state: Lr(t, n, r, o),
          });
        },
        _r = {
          dateInUTCToBirthdate: function (e) {
            var t = e.getUTCFullYear(),
              n = e.getUTCMonth() + 1;
            return { birthDay: e.getUTCDate(), birthMonth: n, birthYear: t };
          },
          calculateAge: function (e) {
            if (!e || !e.birthYear || 0 === e.birthYear) return 0;
            var t = new Date(),
              n = _r.dateInUTCToBirthdate(t);
            return (
              n.birthDay - e.birthDay < 0 && (n.birthMonth -= 1),
              n.birthMonth - e.birthMonth < 0 && (n.birthYear -= 1),
              n.birthYear - e.birthYear
            );
          },
          getAgeRange: function (e) {
            var t = xr.events.state.changeBirthday,
              n = _r.dateInUTCToBirthdate(e);
            return _r.calculateAge(n) < 13 ? t.U13ToU13 : t.U13To1318;
          },
        },
        qr = _r,
        Wr = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Hr = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        zr = function (n) {
          var r = n.translate,
            o = n.consentType,
            a = n.successCallBack,
            i = n.onHideCallback,
            l = n.value,
            c = void 0 === l ? null : l,
            u = (0, e.useState)(
              xr.translationKeys.gatherParentEmail.unknownError,
            ),
            s = u[0],
            f = u[1],
            d = xr.translationKeys.emailSentConfirmation,
            p = Pr({
              translate: r,
              title: r(xr.translationKeys.gatherParentEmail.unknownError),
              body: t().createElement("p", null, r(s)),
              actionButtonTranslateKey: d.btnText,
              onAction: function () {
                f(""), m.close(), i();
              },
              onHide: i,
            }),
            y = p[0],
            m = p[1],
            h = function () {
              return Wr(void 0, void 0, void 0, function () {
                var e, t, n, r, i, l, u, s;
                return Hr(this, function (d) {
                  switch (d.label) {
                    case 0:
                      return (
                        d.trys.push([0, 2, , 3]),
                        [
                          4,
                          Sr.sendRequestToAllParents({
                            requestType: o,
                            requestDetails: c,
                          }),
                        ]
                      );
                    case 1:
                      return (
                        (e = d.sent()),
                        (t = null == c ? void 0 : c.newBirthdate),
                        (n = new Date(t)),
                        (r =
                          o === Rr.UpdateBirthdate
                            ? qr.getAgeRange(n)
                            : void 0),
                        (function (e) {
                          var t = e.requestType,
                            n = e.sessionId,
                            r = e.extraState,
                            o = e.details,
                            a = Br(t, o);
                          Fr(jr.eventName.authPageLoad, a.settingsRequestSent, {
                            state: Lr(t, n, r, o),
                            associatedText: jr.text.requestSent,
                          });
                        })({
                          requestType: o,
                          extraState: r,
                          sessionId: e.sessionId,
                          details: c,
                        }),
                        a(e.sessionId),
                        [3, 3]
                      );
                    case 2:
                      return (
                        (i = d.sent()),
                        (l = null !== (s = i) && void 0 !== s ? s : Tr),
                        (u = Or(l.data.code)) === Ir.SenderFloodedRequestCreated
                          ? a(l.data.sessionId, void 0, !0)
                          : (f(u), m.open()),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            };
          return (
            (0, e.useEffect)(function () {
              h();
            }, []),
            t().createElement("div", null, y)
          );
        };
      !(function (e) {
        (e.control = "control"),
          (e.askYourParentTitle = "askYourParentTitle"),
          (e.permissionNeededTitle = "permissionNeededTitle"),
          (e.visualized = "visualized");
      })(Ur || (Ur = {}));
      var Gr = Ur,
        Kr = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        $r = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        Yr = function (n, r, o, a, i, l) {
          var c = xr.privacyPolicyUrl,
            u = xr.chargebackWizardSessionTokenLocalStorageKey,
            s = xr.emailRegex,
            f = xr.translationKeys.gatherParentEmail,
            d = (0, e.useState)(!1),
            p = d[0],
            y = d[1],
            m = (0, e.useState)(!1),
            h = m[0],
            v = m[1],
            g = (0, e.useState)(!1),
            b = g[0],
            E = g[1],
            w = (0, e.useState)(""),
            S = w[0],
            A = w[1],
            C = (0, e.useState)(n(f.title)),
            P = C[0],
            x = C[1],
            k = (0, e.useState)(
              t().createElement("span", {
                dangerouslySetInnerHTML: {
                  __html: n(f.bodyWithoutPC, { lineBreak: "<br /><br />" }),
                },
              }),
            ),
            I = k[0],
            T = k[1],
            N = (0, e.useMemo)(function () {
              return {
                open: function () {
                  return y(!0);
                },
                close: function () {
                  return y(!1);
                },
              };
            }, []),
            O = (0, e.useState)(""),
            R = O[0],
            U = O[1],
            D = (0, e.useMemo)(
              function () {
                if (r === Rr.UpdateUserSetting) return Object.keys(i)[0];
              },
              [r, i],
            );
          (0, e.useEffect)(function () {
            Kr(void 0, void 0, void 0, function () {
              var e;
              return $r(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      t.trys.push([0, 2, , 3]),
                      [4, Ut(xr.isChildSubjectToPCFeatureName)]
                    );
                  case 1:
                    return (e = t.sent()), v(e.access === bt.Granted), [3, 3];
                  case 2:
                    return t.sent(), [3, 3];
                  case 3:
                    return [2];
                }
              });
            });
          }, []);
          var j = new RegExp(s),
            L = function () {
              return S.length > 0 && !j.test(S)
                ? n(f.invalidEmailError)
                : R
                  ? n(R)
                  : "";
            },
            B = function () {
              return Kr(void 0, void 0, void 0, function () {
                var e, t, n, a, l;
                return $r(this, function (c) {
                  switch (c.label) {
                    case 0:
                      U(""),
                        Ot.localStorageService.removeLocalStorage(u),
                        (c.label = 1);
                    case 1:
                      return (
                        c.trys.push([1, 3, , 4]),
                        [
                          4,
                          Sr.sendRequestToNewParent({
                            email: S,
                            requestType: r,
                            requestDetails: i,
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (e = c.sent()),
                        (function (e) {
                          var t = e.requestType,
                            n = e.sessionId,
                            r = e.details,
                            o = Br(t, r);
                          Fr(jr.eventName.authButtonClick, o.parentalEntry, {
                            btn: jr.btn.submit,
                            associatedText: jr.text.sendEmail,
                            state: Lr(t, n, void 0, r),
                          });
                        })({
                          requestType: r,
                          sessionId: e.sessionId,
                          details: i,
                        }),
                        E(!1),
                        N.close(),
                        o(e.sessionId, S),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (t = c.sent()),
                        A(""),
                        E(!1),
                        (n = null !== (l = t) && void 0 !== l ? l : Tr),
                        (a = Or(n.data.code)) ===
                          Ir.SenderFloodedRequestCreated &&
                          o(n.data.sessionId, void 0, !0),
                        U(a),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            };
          (0, e.useEffect)(
            function () {
              var e = h ? f.body : f.bodyWithoutPC,
                r = h ? f.combinedBody : f.combinedBodyWithoutPC;
              if (D === xr.settingName.enablePurchases)
                switch (l) {
                  case Gr.askYourParentTitle:
                    x(n(f.askYourParentTitle)),
                      T(
                        t().createElement(
                          "span",
                          null,
                          t().createElement(
                            "span",
                            null,
                            n(Qn.VpcEnablePurchase),
                          ),
                          t().createElement("br", null),
                          t().createElement("br", null),
                          t().createElement("span", null, n(r)),
                        ),
                      );
                    break;
                  case Gr.permissionNeededTitle:
                    x(n(f.permissionNeededTitle)),
                      T(
                        t().createElement(
                          "span",
                          null,
                          t().createElement(
                            "span",
                            null,
                            n(Qn.VpcEnablePurchase),
                          ),
                          t().createElement("br", null),
                          t().createElement("br", null),
                          t().createElement("span", null, n(r)),
                        ),
                      );
                    break;
                  case Gr.visualized:
                    x(n(f.askYourParentTitle)),
                      T(
                        t().createElement(
                          "div",
                          null,
                          t().createElement("div", {
                            className: "parent-email-image",
                          }),
                          t().createElement(
                            "span",
                            null,
                            n(Qn.VpcEnablePurchase),
                          ),
                          t().createElement("br", null),
                          t().createElement("br", null),
                          t().createElement("span", null, n(r)),
                        ),
                      );
                    break;
                  default:
                    T(
                      t().createElement("span", {
                        dangerouslySetInnerHTML: {
                          __html: n(e, { lineBreak: "<br /><br />" }),
                        },
                      }),
                    );
                }
              else
                T(
                  t().createElement("span", {
                    dangerouslySetInnerHTML: {
                      __html: n(e, { lineBreak: "<br /><br />" }),
                    },
                  }),
                );
            },
            [l, h, D],
          );
          var F = t().createElement(
              t().Fragment,
              null,
              t().createElement(
                "div",
                { className: "parental-consent-modal-body" },
                I,
              ),
              t().createElement(
                "form",
                { className: "form-horizontal", autoComplete: "off" },
                t().createElement(
                  "div",
                  { id: "parent-email-container", className: "form-group" },
                  t().createElement(
                    "label",
                    {
                      htmlFor: "parent-email-address",
                      className: "form-control-label",
                    },
                    n(f.parentEmailLabel),
                  ),
                  t().createElement("input", {
                    id: "parent-email-address",
                    type: "email",
                    className: "form-control input-field",
                    placeholder: n(f.emailPlaceholder),
                    autoComplete: "off",
                    value: S,
                    onChange: function (e) {
                      A(e.target.value), U("");
                    },
                    onFocus: function () {
                      return (function (e) {
                        var t = e.requestType,
                          n = e.details,
                          r = Br(t, n);
                        Fr(jr.eventName.authFormInteraction, r.parentalEntry, {
                          field: jr.field.email,
                          associatedText: jr.text.enterParentEmail,
                          state: Lr(t, void 0, void 0, n),
                        });
                      })({ requestType: r, details: i });
                    },
                  }),
                ),
                t().createElement("input", {
                  type: "text",
                  className: "hidden",
                  name: "fake-username",
                }),
                t().createElement("input", {
                  type: "password",
                  className: "hidden",
                  name: "fake-password",
                  autoComplete: "new-password",
                }),
              ),
              t().createElement(
                "div",
                { className: "form-group" },
                t().createElement(
                  "p",
                  { className: "text-error form-control-label" },
                  L(),
                ),
              ),
              t().createElement("div", {
                className:
                  "text-footer access-management-upsell-inner-modal-text-footer",
                dangerouslySetInnerHTML: {
                  __html: n(f.footer, {
                    linkStart:
                      "<a class='text-link' rel='noreferrer' target='_blank' href='" +
                      c +
                      "'>",
                    linkEnd: "</a>",
                  }),
                },
              }),
            ),
            V = t().createElement(
              M.Modal,
              {
                show: p,
                onHide: function () {
                  N.close(), a();
                },
                backdrop: !0,
                className: "access-management-upsell-inner-modal",
                size: "sm",
                "aria-labelledby": "access-management-upsell-inner-modal-title",
                centered: !0,
              },
              t().createElement(
                M.Modal.Header,
                { useBaseBootstrapComponent: !0 },
                t().createElement(
                  "div",
                  {
                    className:
                      "access-management-upsell-inner-modal-title-container",
                  },
                  t().createElement(
                    M.Modal.Title,
                    { id: "access-management-upsell-inner-modal-title" },
                    P,
                  ),
                ),
                t().createElement(
                  "button",
                  {
                    type: "button",
                    className: "close close-button",
                    onClick: function () {
                      N.close(), a();
                    },
                  },
                  t().createElement("span", { className: "icon-close" }),
                ),
              ),
              t().createElement(M.Modal.Body, null, F),
              t().createElement(
                M.Modal.Footer,
                null,
                t().createElement(
                  M.Button,
                  {
                    variant: M.Button.variants.primary,
                    size: M.Button.sizes.medium,
                    width: M.Button.widths.full,
                    isDisabled: "" === S || "" !== L(),
                    isLoading: b,
                    onClick: function () {
                      return Kr(void 0, void 0, void 0, function () {
                        return $r(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return E(!0), [4, B()];
                            case 1:
                              return e.sent(), [2];
                          }
                        });
                      });
                    },
                  },
                  n(f.btnText),
                ),
              ),
            );
          return [V, N];
        },
        Jr = {
          U13To18: "U13To18",
          U13To1318: "U13To1318",
          U13ToU13: "U13ToU13",
        },
        Qr = {
          IdvOrVpc: "Verify Your Age/Parent Permission Needed",
          VPC: "Parent Permission Needed",
          AskYourParent: "Ask Your Parent",
          VerifyId: "Verify ID",
          EmailMyParent: "Email My Parent",
          AskNow: "Ask Now",
          Cancel: 'X icon or "Cancel"',
        },
        Xr = {
          VerifyId: "verifyId",
          EmailParent: "emailParent",
          verifyCancel: "verifyCancel",
        },
        Zr = {
          SettingsAgeChangeVerify: "settingsAgeChangeVerify",
          UpdateSetting: "parentalEntrySettings",
        },
        eo = {
          AuthPageload: "authPageload",
          AuthButtonClick: "authButtonClick",
        },
        to = function (e, t) {
          return (
            "" + (e ? e + ", " : "") + (t ? "settingName: " + t + ", " : "")
          );
        };
      function no(e, t) {
        "CanCorrectAge" === e &&
          Ot.eventStreamService.sendEventWithTarget(
            eo.AuthButtonClick,
            Zr.SettingsAgeChangeVerify,
            {
              btn: Xr.VerifyId,
              state: t ? Jr.U13To18 : Jr.U13To1318,
              associatedText: Qr.VerifyId,
            },
          );
      }
      function ro(e, t, n, r) {
        "CanCorrectAge" === e
          ? Ot.eventStreamService.sendEventWithTarget(
              eo.AuthButtonClick,
              Zr.SettingsAgeChangeVerify,
              {
                btn: Xr.EmailParent,
                state: t ? Jr.U13ToU13 : Jr.U13To1318,
                associatedText: Qr.EmailMyParent,
              },
            )
          : "CanChangeSetting" === e
            ? Ot.eventStreamService.sendEventWithTarget(
                eo.AuthButtonClick,
                Zr.UpdateSetting,
                {
                  btn: Xr.EmailParent,
                  state: to(void 0, n),
                  associatedText: Qr.EmailMyParent,
                },
              )
            : "CanRemoveParentManagedUserBlocks" === e
              ? Ot.eventStreamService.sendEventWithTarget(
                  eo.AuthButtonClick,
                  Zr.UpdateSetting,
                  {
                    btn: Xr.EmailParent,
                    state:
                      "unblockUser " + (null == r ? void 0 : r.friendUserId),
                    associatedText: Qr.AskNow,
                  },
                )
              : "CanRemoveParentManagedExperienceBlocks" === e &&
                Ot.eventStreamService.sendEventWithTarget(
                  eo.AuthButtonClick,
                  Zr.UpdateSetting,
                  {
                    btn: Xr.EmailParent,
                    state:
                      "unblockExperience " +
                      (null == r ? void 0 : r.universeId),
                    associatedText: Qr.AskNow,
                  },
                );
      }
      function oo(e) {
        var t;
        switch (e) {
          case "Idv":
            t = Jr.U13To18;
            break;
          case "Vpc":
            t = Jr.U13ToU13;
            break;
          case "IdvOrVpc":
            t = Jr.U13To1318;
        }
        return t;
      }
      function ao(e, t, n, r) {
        if ("CanCorrectAge" === e) {
          var o = oo(t);
          Ot.eventStreamService.sendEventWithTarget(
            eo.AuthButtonClick,
            Zr.SettingsAgeChangeVerify,
            { btn: Xr.verifyCancel, state: o, associatedText: Qr.Cancel },
          );
        } else
          "CanChangeSetting" === e
            ? Ot.eventStreamService.sendEventWithTarget(
                eo.AuthButtonClick,
                Zr.UpdateSetting,
                {
                  btn: Xr.verifyCancel,
                  state: to(void 0, n),
                  associatedText: Qr.Cancel,
                },
              )
            : "CanRemoveParentManagedUserBlocks" === e
              ? Ot.eventStreamService.sendEventWithTarget(
                  eo.AuthButtonClick,
                  Zr.UpdateSetting,
                  {
                    btn: Xr.verifyCancel,
                    state:
                      "unblockUser " + (null == r ? void 0 : r.friendUserId),
                    associatedText: Qr.Cancel,
                  },
                )
              : "CanRemoveParentManagedExperienceBlocks" === e &&
                Ot.eventStreamService.sendEventWithTarget(
                  eo.AuthButtonClick,
                  Zr.UpdateSetting,
                  {
                    btn: Xr.verifyCancel,
                    state:
                      "unblockExperience " +
                      (null == r ? void 0 : r.universeId),
                    associatedText: Qr.Cancel,
                  },
                );
      }
      function io(e, t, n, r) {
        if ("CanCorrectAge" === e) {
          var o = oo(t);
          Ot.eventStreamService.sendEventWithTarget(
            eo.AuthPageload,
            Zr.SettingsAgeChangeVerify,
            { state: o, associatedText: Qr.IdvOrVpc },
          );
        } else
          "CanChangeSetting" === e
            ? Ot.eventStreamService.sendEventWithTarget(
                eo.AuthPageload,
                Zr.UpdateSetting,
                { state: to(void 0, n), associatedText: Qr.VPC },
              )
            : "CanRemoveParentManagedUserBlocks" === e
              ? Ot.eventStreamService.sendEventWithTarget(
                  eo.AuthPageload,
                  Zr.UpdateSetting,
                  {
                    state:
                      "unblockUser " + (null == r ? void 0 : r.friendUserId),
                    associatedText: Qr.AskYourParent,
                  },
                )
              : "CanRemoveParentManagedExperienceBlocks" === e &&
                Ot.eventStreamService.sendEventWithTarget(
                  eo.AuthPageload,
                  Zr.UpdateSetting,
                  {
                    state:
                      "unblockExperience " +
                      (null == r ? void 0 : r.experienceId),
                    associatedText: Qr.AskYourParent,
                  },
                );
      }
      var lo = function (n) {
          var r = n.translate,
            o = n.consentType,
            a = n.successCallback,
            i = n.onHidecallback,
            l = n.isPrologueUsed,
            c = n.value,
            u = n.expChildModalType,
            s = void 0 === u ? null : u,
            f = S(Yt),
            d = Yr(r, o, a, i, c, s),
            p = d[0],
            y = d[1];
          return (
            (0, e.useEffect)(function () {
              if (!l) {
                var e = Object.keys(c)[0];
                io(f, xr.events.vpc, e, c);
              }
              y.open();
            }, []),
            t().createElement(t().Fragment, null, p)
          );
        },
        co = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        uo = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        so = {
          getLinkedParentEmails: function () {
            return co(void 0, void 0, Promise, function () {
              var e;
              return uo(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = { url: gr, withCredentials: !0 }),
                      [4, i.httpService.get(e)]
                    );
                  case 1:
                    return [2, t.sent().data];
                }
              });
            });
          },
        },
        fo = so,
        po = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        yo = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        mo = (0, c.withTranslations)(
          function (n) {
            var r = n.translate,
              o = n.recourse,
              a = n.onHidecallback,
              i = n.isPrologueUsed,
              l = n.value,
              c = void 0 === l ? null : l,
              u = n.expChildModalType,
              s = void 0 === u ? null : u,
              f = xr.translationKeys.emailSentConfirmation,
              d = o.action,
              p = o.parentConsentTypes,
              y = null == p ? void 0 : p[0],
              m = (0, e.useState)([]),
              h = m[0],
              v = m[1],
              g = (0, e.useState)(!0),
              b = g[0],
              E = g[1],
              w = t().createElement("p", {
                dangerouslySetInnerHTML: {
                  __html: r(f.oneParentBody, { parentEmail: h[0] }),
                },
              }),
              S = t().createElement("p", null, r(f.pluralParentBody)),
              A = t().createElement("p", null, r(f.emailNotSentBody)),
              C = (0, e.useMemo)(
                function () {
                  return b ? (1 === h.length ? w : S) : A;
                },
                [b, h],
              ),
              P = Pr({
                translate: r,
                title: r(f.title),
                body: C,
                actionButtonTranslateKey: f.btnText,
                onAction: function () {
                  k.close(), a();
                },
                onHide: a,
              }),
              x = P[0],
              k = P[1];
            (0, e.useEffect)(
              function () {
                d === kt.ParentConsentRequest &&
                  po(void 0, void 0, void 0, function () {
                    return yo(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [
                            4,
                            fo.getLinkedParentEmails().then(function (e) {
                              v(e.parentEmails);
                            }),
                          ];
                        case 1:
                          return e.sent(), [2];
                      }
                    });
                  });
              },
              [d],
            );
            var I = function (e, t, n) {
              if (
                (t && v([t]), n && E(!1), k.open(), y === Rr.UpdateBirthdate)
              ) {
                var r = null == c ? void 0 : c.newBirthdate,
                  o = new Date(r),
                  a = qr.getAgeRange(o);
                Vr({
                  requestType: Rr.UpdateBirthdate,
                  extraState: a,
                  sessionId: e,
                });
              } else Vr({ requestType: y, sessionId: e, details: c });
            };
            return t().createElement(
              "div",
              null,
              d === kt.ParentConsentRequest &&
                t().createElement(zr, {
                  translate: r,
                  consentType: y,
                  successCallBack: I,
                  onHideCallback: a,
                  value: c,
                }),
              d === kt.ParentLinkRequest &&
                t().createElement(lo, {
                  translate: r,
                  consentType: y,
                  successCallback: I,
                  onHidecallback: a,
                  value: c,
                  expChildModalType: s,
                  isPrologueUsed: i,
                }),
              x,
            );
          },
          {
            common: ["CommonUI.Controls", "CommonUI.Features", "Amp.Upsell"],
            feature: "Feature.Parents",
          },
        ),
        ho = { CanCorrectAge: "PrologueSetting.PromptLine.CanCorrectAge" },
        vo = {};
      function go(e, t, n) {
        var r = (function (e) {
          return vo[e];
        })(e);
        return n(r || t);
      }
      function bo(e, t, n, r, o) {
        if (void 0 !== (null == o ? void 0 : o.enablePurchases))
          return r(Qn.VpcEnablePurchase);
        if ("Unblock" === (null == o ? void 0 : o.friendManagementAction))
          return r(Qn.VpcUnblockUser, { displayName: o.displayName });
        if ("Unblock" === (null == o ? void 0 : o.experienceManagementAction))
          return r(Qn.VpcUnblockExperience, {
            experienceName: o.experienceName,
          });
        var a = (function (e, t) {
          return "CanChangeSetting" === e &&
            void 0 !== (null == t ? void 0 : t.contentAgeRestriction)
            ? "PrologueSetting.PromptLine.CanChangeSetting"
            : ho[e];
        })(e, o);
        return a ? r(a) + ", " + r(n) : r(t);
      }
      var Eo,
        wo = function (n) {
          var r = n.translate,
            o = n.onHide,
            a = n.recourseParameters,
            i = Kn(),
            l = S(Yt),
            c = S(Qt).data.recourses,
            u = a ? Object.keys(a)[0] : void 0,
            s = Qn.Vpc,
            f = Qn.VpcConnectingText,
            d = bo(l, s, f, r, a),
            p = t().createElement(
              "div",
              null,
              t().createElement(
                "div",
                { className: "text-description" },
                " ",
                d,
                " ",
              ),
            ),
            y = Jn.AskYourParent,
            m = go(l, y, r),
            h = Yn.AskNow,
            v = Yn.Cancel,
            g = Pr({
              translate: r,
              title: m,
              body: p,
              actionButtonTranslateKey: h,
              neutralButtonTranslateKey: v,
              onAction: function () {
                ro(l, !0, u, a), i(Ht(c[0])), i(zt(St.Verification)), E.close();
              },
              size: "sm",
              onHide: function () {
                ao(l, "Vpc", u, a), o();
              },
              onNeutral: function () {
                ao(l, "Vpc", u, a), o();
              },
            }),
            b = g[0],
            E = g[1];
          return (
            (0, e.useEffect)(function () {
              E.open(), io(l, "Vpc", u, a);
            }, []),
            [b, E]
          );
        },
        So = function (n) {
          var r = n.translate,
            o = n.onHide,
            a = Kn(),
            i = S(Yt),
            l = S(Qt).data.recourses,
            c = Qn.IdvAndVpc,
            u = Qn.IdvAndVpcConnectingText,
            s = bo(i, c, u, r),
            f = t().createElement(
              "div",
              null,
              t().createElement(
                "div",
                { className: "text-description" },
                " ",
                s,
                " ",
              ),
            ),
            d = Jn.VerifyYourAge,
            p = go(i, d, r),
            y = Yn.VerifyID,
            m = Yn.EmailMyParent,
            h = Pr({
              translate: r,
              title: p,
              body: f,
              dualActionButton: !0,
              actionButtonTranslateKey: y,
              neutralButtonTranslateKey: m,
              onAction: function () {
                no(i, !1);
                var e = l.filter(function (e) {
                  return e.action === kt.GovernmentId;
                })[0];
                a(Ht(e)), a(zt(St.Verification)), g.close();
              },
              size: "sm",
              onHide: function () {
                ao(i, "IdvOrVpc"), o();
              },
              onNeutral: function () {
                ro(i, !1);
                var e = l.filter(function (e) {
                  return e.action !== kt.GovernmentId;
                })[0];
                a(Ht(e)), a(zt(St.Verification)), g.close();
              },
            }),
            v = h[0],
            g = h[1];
          return (
            (0, e.useEffect)(function () {
              g.open(), io(i, "IdvOrVpc");
            }, []),
            [v, g]
          );
        },
        Ao = function (n) {
          var r = n.translate,
            o = n.onHide,
            a = Kn(),
            i = S(Yt),
            l = S(Qt).data.recourses,
            c = Qn.Idv,
            u = Qn.IdvConnectingText,
            s = bo(i, c, u, r),
            f = t().createElement(
              "div",
              null,
              t().createElement(
                "div",
                { className: "text-description" },
                " ",
                s,
                " ",
              ),
            ),
            d = Jn.VerifyYourAge,
            p = go(i, d, r),
            y = Yn.VerifyID,
            m = Yn.Cancel,
            h = Pr({
              translate: r,
              title: p,
              body: f,
              actionButtonTranslateKey: y,
              neutralButtonTranslateKey: m,
              onAction: function () {
                no(i, !0), a(Ht(l[0])), a(zt(St.Verification)), g.close();
              },
              size: "sm",
              onHide: function () {
                ao(i, "Idv"), o();
              },
              onNeutral: function () {
                ao(i, "Idv"), o();
              },
            }),
            v = h[0],
            g = h[1];
          return (
            (0, e.useEffect)(function () {
              g.open(), io(i, "Idv");
            }, []),
            [v, g]
          );
        },
        Co = function (t) {
          var n,
            r,
            o,
            a = t.translate,
            i = t.onHide,
            l = t.recourseParameters,
            c = Kn(),
            u = [null, null],
            s = u[0],
            f = u[1],
            d = S(Qt).data.recourses,
            p = d.map(function (e) {
              return e.action;
            });
          if (1 === p.length)
            switch (p[0]) {
              case kt.ParentConsentRequest:
              case kt.ParentLinkRequest:
                (n = wo({ translate: a, onHide: i, recourseParameters: l })),
                  (s = n[0]),
                  (f = n[1]);
                break;
              case kt.GovernmentId:
                (r = Ao({ translate: a, onHide: i })), (s = r[0]), (f = r[1]);
            }
          return (
            2 === p.length &&
              p.includes(kt.GovernmentId) &&
              (p.includes(kt.ParentConsentRequest) ||
                p.includes(kt.ParentLinkRequest)) &&
              ((o = So({ translate: a, onHide: i })), (s = o[0]), (f = o[1])),
            (0, e.useEffect)(
              function () {
                s ? f.open() : c(zt(St.Verification));
              },
              [c, s, f, d],
            ),
            s
          );
        },
        Po = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        xo = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        ko = function (t) {
          var n = (0, e.useState)({}),
            o = n[0],
            a = n[1];
          return (
            (0, e.useEffect)(
              function () {
                (function (e) {
                  return Po(void 0, void 0, Promise, function () {
                    return xo(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (
                            null === r.ExperimentationService ||
                            void 0 === r.ExperimentationService
                              ? void 0
                              : r.ExperimentationService.getAllValuesForLayer
                          )
                            ? [
                                4,
                                r.ExperimentationService.getAllValuesForLayer(
                                  e,
                                ),
                              ]
                            : [3, 2];
                        case 1:
                          return [2, t.sent()];
                        case 2:
                          return [2, {}];
                      }
                    });
                  });
                })(t).then(
                  function (e) {
                    a(e);
                  },
                  function () {
                    a({});
                  },
                );
              },
              [t],
            ),
            o
          );
        },
        Io = "Action.Close";
      !(function (e) {
        (e.contentAgeRestriction = "contentAgeRestriction"),
          (e.phoneNumberDiscoverability = "phoneNumberDiscoverability"),
          (e.whoCanChatWithMe = "whoCanChatWithMe"),
          (e.whoCanChatWithMeInApp = "whoCanChatWithMeInApp"),
          (e.whoCanJoinMeInExperiences = "whoCanJoinMeInExperiences"),
          (e.whoCanSeeMyInventory = "whoCanSeeMyInventory"),
          (e.whoCanTradeWithMe = "whoCanTradeWithMe"),
          (e.themeType = "themeType"),
          (e.canUploadContacts = "canUploadContacts"),
          (e.updateFriendsAboutMyActivity = "updateFriendsAboutMyActivity"),
          (e.privateServerPrivacy = "privateServerPrivacy"),
          (e.allowSellShareData = "allowSellShareData"),
          (e.allowPersonalizedAdvertising = "allowPersonalizedAdvertising"),
          (e.monthlySpendLimit = "monthlySpendLimit"),
          (e.monthlySpendLimitCurrencyCode = "monthlySpendLimitCurrencyCode"),
          (e.monthlySpendLimitNotificationType =
            "monthlySpendLimitNotificationType"),
          (e.enablePurchases = "enablePurchases"),
          (e.whoCanGroupChatWithMeInApp = "whoCanGroupChatWithMeInApp"),
          (e.whoCanWhisperChatWithMeInExperiences =
            "whoCanWhisperChatWithMeInExperiences"),
          (e.whoCanChatWithMeInExperiences = "whoCanChatWithMeInExperiences"),
          (e.dailyScreenTimeLimit = "dailyScreenTimeLimit"),
          (e.whoCanSeeMySocialNetworks = "whoCanSeeMySocialNetworks"),
          (e.allowThirdPartyAppPermissions = "allowThirdPartyAppPermissions"),
          (e.allowEnablePushNotifications = "allowEnablePushNotifications"),
          (e.allowEnableEmailNotifications = "allowEnableEmailNotifications"),
          (e.allowEnableGroupNotifications = "allowEnableGroupNotifications"),
          (e.allowEnableExperienceNotifications =
            "allowEnableExperienceNotifications"),
          (e.whoCanOneOnOnePartyWithMe = "whoCanOneOnOnePartyWithMe"),
          (e.whoCanGroupPartyWithMe = "whoCanGroupPartyWithMe");
      })(Eo || (Eo = {}));
      var To,
        No = Eo;
      !(function (e) {
        (e.Unset = "Unset"),
          (e.NotDiscoverable = "NotDiscoverable"),
          (e.Discoverable = "Discoverable");
      })(To || (To = {}));
      var Oo,
        Mo = To,
        Ro = function (e, t) {
          return t === Eo.phoneNumberDiscoverability
            ? e
              ? Mo.Discoverable
              : Mo.NotDiscoverable
            : e;
        };
      !(function (e) {
        (e.Checkbox = "checkbox"), (e.Toggle = "toggle"), (e.Notice = "notice");
      })(Oo || (Oo = {}));
      var Uo,
        Do = Oo,
        jo = function (e) {
          var n = e.isChecked,
            r = e.setIsChecked,
            o = e.wordsOfConsent;
          return t().createElement(
            t().Fragment,
            null,
            t().createElement("input", {
              id: "consent-checkbox",
              type: "checkbox",
              checked: n,
              onChange: function () {
                return null == r ? void 0 : r(!n);
              },
            }),
            t().createElement(
              "label",
              { htmlFor: "consent-checkbox", className: "checkbox-label" },
              o,
            ),
          );
        };
      jo.displayName = "CheckboxConsentForm";
      var Lo = function () {
        return null;
      };
      Lo.displayName = "ToggleConsentForm";
      var Bo = function (e) {
        var n = e.wordsOfConsent;
        return t().createElement(t().Fragment, null, n);
      };
      Bo.displayName = "NoticeConsentForm";
      var Fo =
          (((Uo = {})[Do.Checkbox] = jo),
          (Uo[Do.Toggle] = Lo),
          (Uo[Do.Notice] = Bo),
          Uo),
        Vo = function (n, o) {
          var a = o.settingName,
            i = o.title,
            l = o.body,
            c = o.actionButtonText,
            u = o.neutralButtonText,
            s = o.onAction,
            f = o.onHide,
            d = o.onNeutral,
            p = o.consentFormType,
            y =
              r.LegallySensitiveContentService.useLegallySensitiveContentAndActions(
                a,
              ),
            m = y[0],
            h = y[1],
            v = (0, e.useState)(!1),
            g = v[0],
            b = v[1],
            E = (0, e.useMemo)(function () {
              return {
                open: function () {
                  return b(!0);
                },
                close: function () {
                  return b(!1);
                },
              };
            }, []),
            w = (0, e.useState)(!1),
            S = w[0],
            A = w[1];
          (0, e.useEffect)(
            function () {
              p === Do.Notice && A(!0);
            },
            [p],
          );
          var C;
          return [
            t().createElement(
              M.Modal,
              {
                show: g,
                onHide: function () {
                  E.close(), f();
                },
                backdrop: !0,
                className:
                  "access-management-upsell-inner-modal user-settings-modal",
                size: "md",
                "aria-labelledby": "user-settings-modal-title",
                scrollable: !0,
                centered: !0,
              },
              t().createElement(
                M.Modal.Header,
                { useBaseBootstrapComponent: !0 },
                t().createElement(
                  "div",
                  { className: "user-settings-modal-title-container" },
                  t().createElement(
                    M.Modal.Title,
                    { id: "user-settings-modal-title" },
                    i,
                  ),
                ),
                t().createElement(
                  "button",
                  {
                    type: "button",
                    className: "close close-button",
                    title: n(Io),
                    onClick: function () {
                      E.close(), f();
                    },
                  },
                  t().createElement("span", { className: "icon-close" }),
                ),
              ),
              t().createElement(
                M.Modal.Body,
                null,
                l,
                (C = Fo[p])
                  ? t().createElement(
                      "div",
                      { className: "consent-form small text" },
                      t().createElement(C, {
                        isChecked: S,
                        setIsChecked: A,
                        wordsOfConsent: m.wordsOfConsent,
                      }),
                    )
                  : t().createElement(t().Fragment, null),
              ),
              t().createElement(
                M.Modal.Footer,
                null,
                t().createElement(
                  M.Button,
                  {
                    className: "modal-half-width-button",
                    variant: M.Button.variants.control,
                    size: M.Button.sizes.medium,
                    onClick: function () {
                      E.close(), null == d || d(), f();
                    },
                  },
                  u,
                ),
                t().createElement(
                  M.Button,
                  {
                    className: "modal-half-width-button modal-primary-button",
                    variant: M.Button.variants.control,
                    size: M.Button.sizes.medium,
                    isDisabled: !S,
                    onClick: function () {
                      E.close(),
                        h.updateSettingWithAuditing(a, Ro(S, a)),
                        null == s || s(),
                        f();
                    },
                  },
                  c,
                ),
              ),
            ),
            E,
          ];
        },
        _o = (0, c.withTranslations)(
          function (n) {
            var r = n.translate,
              o = (n.recourse, n.updateSettingsModalProps),
              a = Vo(r, o),
              i = a[0],
              l = a[1];
            return (
              (0, e.useEffect)(function () {
                l.open();
              }, []),
              t().createElement("div", null, i)
            );
          },
          {
            common: ["CommonUI.Controls"],
            feature: "Amp.AccountSettingsUpsell",
          },
        ),
        qo = function () {
          return (
            (qo =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            qo.apply(this, arguments)
          );
        },
        Wo = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Ho = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        };
      var zo = function (n) {
          var r,
            o,
            a = n.translate,
            i = Kn(),
            l = S(Xt),
            c = S(Qt),
            u = S($t),
            s = S(en),
            f = S(Kt).loading,
            d = S(Zt),
            p = (0, e.useState)(function (e) {
              return e;
            }),
            y = p[0],
            m = p[1],
            h = (0, e.useState)({}),
            v = h[0],
            g = h[1],
            b = (0, e.useState)(),
            E = b[0],
            w = b[1],
            A = (0, e.useState)(!1),
            C = A[0],
            P = A[1],
            x =
              null !==
                (r = ko(
                  "AccountManagement.VerifiedParentalConsent.ChildExperience",
                ).expNewChildModal) && void 0 !== r
                ? r
                : Gr.control;
          function k(e) {
            var t;
            return Wo(this, void 0, void 0, function () {
              var n, r, o, a, l, c, u, s, f, d;
              return Ho(this, function (p) {
                switch (p.label) {
                  case 0:
                    (n = e.detail),
                      (r = n.featureName),
                      (o = n.redirectLink),
                      (a = n.ampFeatureCheckData),
                      (l = n.isAsyncCall),
                      (c = n.usePrologue),
                      (u = n.ampRecourseData),
                      (s = n.featureSpecificData),
                      (f = n.closeCallback),
                      m(function () {
                        return function (e) {
                          return f(e);
                        };
                      }),
                      (p.label = 1);
                  case 1:
                    return (
                      p.trys.push([1, 3, , 4]),
                      [4, i(Ft({ featureName: r, ampFeatureCheckData: a }))]
                    );
                  case 2:
                    return p.sent(), [3, 4];
                  case 3:
                    return p.sent(), [3, 4];
                  case 4:
                    return (
                      i(Wt(o)),
                      P(l),
                      a && i(qt(a)),
                      u && g(u),
                      s && w(s),
                      (d = c),
                      (null === (t = u) || void 0 === t
                        ? void 0
                        : t.enablePurchases) &&
                        x !== Gr.control &&
                        (d = !1),
                      d
                        ? (i(Gt(!0)), i(zt(St.Prologue)))
                        : i(zt(St.Verification)),
                      [2]
                    );
                }
              });
            });
          }
          function I() {
            y(c.data.access), i(_t());
          }
          (0, e.useEffect)(
            function () {
              var e = k;
              return (
                window.addEventListener($n, e),
                function () {
                  return window.removeEventListener($n, e);
                }
              );
            },
            [x],
          ),
            (0, e.useEffect)(
              function () {
                var e,
                  t = [bt.Granted, bt.Denied];
                (null === (e = null == c ? void 0 : c.data) || void 0 === e
                  ? void 0
                  : e.access) &&
                  t.includes(c.data.access) &&
                  y(c.data.access);
              },
              [c],
            );
          var T = C
            ? function () {
                i(_t()), y(bt.Denied);
              }
            : I;
          function N() {
            if (d)
              switch (d.action) {
                case kt.AddedEmail:
                  return t().createElement(ar, { translate: a, onHide: I });
                case kt.AgeEstimation:
                  return t().createElement(pr, {
                    translate: a,
                    onHidecallback: T,
                    ageEstimation: !0,
                  });
                case kt.GovernmentId:
                  return t().createElement(pr, {
                    translate: a,
                    onHidecallback: T,
                    ageEstimation: !1,
                  });
                case kt.ParentConsentRequest:
                case kt.ParentLinkRequest:
                  return t().createElement(mo, {
                    recourse: d,
                    translate: a,
                    onHidecallback: T,
                    value: v,
                    expChildModalType: x,
                    isPrologueUsed: s,
                  });
                case kt.SettingsUpdate:
                  return t().createElement(_o, {
                    translate: a,
                    recourse: d,
                    updateSettingsModalProps: qo(
                      {
                        onHide: function () {
                          var e;
                          T(),
                            null === (e = E.onHide) ||
                              void 0 === e ||
                              e.call(E);
                        },
                      },
                      E,
                    ),
                  });
                default:
                  return t().createElement(mr, { translate: a });
              }
            return t().createElement(mr, { translate: a });
          }
          if (
            ((0, e.useEffect)(
              function () {
                o = N();
              },
              [d],
            ),
            f)
          )
            o = t().createElement(cr, null);
          else
            switch (l) {
              case St.Prologue:
                null != c.data &&
                  (o = t().createElement(Co, {
                    translate: a,
                    onHide: T,
                    recourseParameters: v,
                  }));
                break;
              case St.Verification:
                null != c.data && (o = N());
                break;
              case St.Epilogue:
                o = t().createElement(mr, { translate: a });
                break;
              default:
                o = t().createElement(cr, null);
            }
          return t().createElement(
            t().Fragment,
            null,
            t().createElement(
              M.Modal,
              {
                show: u,
                onHide: I,
                size: "sm",
                "aria-labelledby": "access-management-modal-title",
                className: "access-management-upsell-modal",
                scrollable: "true",
                centered: "true",
              },
              o,
            ),
          );
        },
        Go = {
          phoneNumberDiscoverability: {
            consentTranslationKey:
              "Description.PhoneNumberDiscoverabilityConsent",
            sourceContentId: "12345",
          },
        },
        Ko = r.EnvironmentUrls.userSettingsApi,
        $o = function () {
          return {
            retryable: !0,
            withCredentials: !0,
            url: Ko + "/v1/user-settings",
          };
        },
        Yo = function () {
          return (
            (Yo =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Yo.apply(this, arguments)
          );
        },
        Jo = function () {
          return (
            (Jo =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Jo.apply(this, arguments)
          );
        },
        Qo = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Xo = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        Zo = function (e, t, n) {
          return Qo(void 0, void 0, Promise, function () {
            var r, o, a;
            return Xo(this, function (l) {
              return (
                (r = (function (e) {
                  return JSON.stringify({
                    content: e.reduce(function (e, t) {
                      var n;
                      return Yo(
                        Yo({}, e),
                        (((n = {})[t.sourceContentId] = Yo(
                          {
                            hash: Ot.cryptoUtil.hashStringWithFnv1a32(
                              t.consentStringTemplate,
                            ),
                          },
                          t.vars,
                        )),
                        n),
                      );
                    }, {}),
                  });
                })(n)),
                (o = Jo(Jo({}, $o()), { headers: { "rbx-audit-data": r } })),
                [2, i.httpService.post(o, ((a = {}), (a[e] = t), a))]
              );
            });
          });
        },
        ea = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        ta = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        na = function (e, t) {
          var n = {
            updateSettingWithAuditing: function (t, n, r) {
              return ea(void 0, void 0, void 0, function () {
                var r;
                return ta(this, function (o) {
                  switch (o.label) {
                    case 0:
                      (r = (function (e, t) {
                        return e === No.phoneNumberDiscoverability
                          ? [
                              {
                                consentStringTemplate: t(
                                  Go.phoneNumberDiscoverability
                                    .consentTranslationKey,
                                  {
                                    linkStart: "{linkStart}",
                                    linkEnd: "{linkEnd}",
                                  },
                                ),
                                vars: {
                                  linkStart: '<a href="www.roblox.com"">',
                                  linkEnd: "</a>",
                                },
                                sourceContentId:
                                  Go.phoneNumberDiscoverability.sourceContentId,
                              },
                            ]
                          : [];
                      })(t, e)),
                        (o.label = 1);
                    case 1:
                      return o.trys.push([1, 3, , 4]), [4, Zo(t, n, r)];
                    case 2:
                      return o.sent(), [3, 4];
                    case 3:
                      return o.sent(), [3, 4];
                    case 4:
                      return [2];
                  }
                });
              });
            },
          };
          return [
            (function (t) {
              if (t === Eo.phoneNumberDiscoverability)
                return {
                  wordsOfConsent: e(
                    Go.phoneNumberDiscoverability.consentTranslationKey,
                    {
                      linkStart: '<a href="www.roblox.com"">',
                      linkEnd: "</a>",
                    },
                  ),
                };
            })(t),
            n,
          ];
        },
        ra = (0, c.withTranslations)(
          function (n) {
            var r = n.translate;
            return (
              (0, e.useEffect)(function () {
                o().LegallySensitiveContentService = {
                  useLegallySensitiveContentAndActions: function (e) {
                    return na(r, e);
                  },
                };
              }, []),
              t().createElement("div", {
                id: "legally-sensitive-content-component",
              })
            );
          },
          {
            common: ["CommonUI.Controls"],
            feature: "Amp.AccountSettingsUpsell",
          },
        );
      var oa = (0, c.withTranslations)(
          function (e) {
            var n = e.translate;
            return t().createElement(
              x,
              { store: Gn },
              t().createElement(zo, { translate: n }),
              t().createElement(ra, { translate: n }),
            );
          },
          {
            common: ["CommonUI.Controls", "CommonUI.Features", "Amp.Upsell"],
            feature: "Verification.Identity",
          },
        ),
        aa = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        ia = function (e, t) {
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
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
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
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
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
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        la = function (e) {
          var t = e.featureName,
            n = e.redirectLink,
            r = void 0 === n ? null : n,
            o = e.ampFeatureCheckData,
            a = void 0 === o ? [] : o,
            i = e.isAsyncCall,
            l = void 0 === i || i,
            c = e.usePrologue,
            u = void 0 !== c && c,
            s = e.ampRecourseData,
            f = void 0 === s ? null : s,
            d = e.featureSpecificData,
            p = void 0 === d ? null : d;
          return aa(void 0, void 0, Promise, function () {
            return ia(this, function (e) {
              return [
                2,
                new Promise(function (e) {
                  var n = new CustomEvent($n, {
                    detail: {
                      featureName: t,
                      redirectLink: r,
                      ampFeatureCheckData: a,
                      isAsyncCall: l,
                      usePrologue: u,
                      ampRecourseData: f,
                      featureSpecificData: p,
                      closeCallback: function (t) {
                        e(
                          (function (e) {
                            return e === bt.Granted;
                          })(t),
                        );
                      },
                    },
                  });
                  window.dispatchEvent(n);
                }),
              ];
            });
          });
        };
      function ca() {
        var e = document.getElementById(l);
        e
          ? (0, a.render)(t().createElement(oa, null), e)
          : window.requestAnimationFrame(ca);
      }
      (o().AccessManagementUpsellV2Service = {
        startAccessManagementUpsell: la,
      }),
        (0, i.ready)(function () {
          l && ca();
        });
    })();
})();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/c903fbc5f7dc7086b7f2f37972e0273e-accessManagementUpsellV2.bundle.min.js.map

/* Bundle detector */
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("AccessManagementUpsellV2");
