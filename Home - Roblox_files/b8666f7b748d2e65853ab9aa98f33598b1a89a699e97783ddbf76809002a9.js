!(function () {
  var e = {
      418: function (e, t, n) {
        "use strict";
        var r = n(287),
          o = n(514),
          i = o(r("String.prototype.indexOf"));
        e.exports = function (e, t) {
          var n = r(e, !!t);
          return "function" == typeof n && i(e, ".prototype.") > -1 ? o(n) : n;
        };
      },
      514: function (e, t, n) {
        "use strict";
        var r = n(943),
          o = n(287),
          i = n(566),
          a = n(456),
          c = o("%Function.prototype.apply%"),
          s = o("%Function.prototype.call%"),
          l = o("%Reflect.apply%", !0) || r.call(s, c),
          u = n(305),
          f = o("%Math.max%");
        e.exports = function (e) {
          if ("function" != typeof e) throw new a("a function is required");
          var t = l(r, s, arguments);
          return i(t, 1 + f(0, e.length - (arguments.length - 1)), !0);
        };
        var p = function () {
          return l(r, c, arguments);
        };
        u ? u(e.exports, "apply", { value: p }) : (e.exports.apply = p);
      },
      559: function (e, t, n) {
        "use strict";
        function r(e) {
          return e && "undefined" != typeof Symbol && e.constructor === Symbol
            ? "symbol"
            : typeof e;
        }
        var o = n(305),
          i = n(649),
          a = n(456),
          c = n(536);
        e.exports = function (e, t, n) {
          if (
            !e ||
            ((void 0 === e ? "undefined" : r(e)) !== "object" &&
              "function" != typeof e)
          )
            throw new a("`obj` must be an object or a function`");
          if (
            "string" != typeof t &&
            (void 0 === t ? "undefined" : r(t)) !== "symbol"
          )
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
          if (arguments.length > 6 && "boolean" != typeof arguments[6])
            throw new a("`loose`, if provided, must be a boolean");
          var s = arguments.length > 3 ? arguments[3] : null,
            l = arguments.length > 4 ? arguments[4] : null,
            u = arguments.length > 5 ? arguments[5] : null,
            f = arguments.length > 6 && arguments[6],
            p = !!c && c(e, t);
          if (o)
            o(e, t, {
              configurable: null === u && p ? p.configurable : !u,
              enumerable: null === s && p ? p.enumerable : !s,
              value: n,
              writable: null === l && p ? p.writable : !l,
            });
          else if (!f && (s || l || u))
            throw new i(
              "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.",
            );
          else e[t] = n;
        };
      },
      305: function (e, t, n) {
        "use strict";
        var r = n(287)("%Object.defineProperty%", !0) || !1;
        if (r)
          try {
            r({}, "a", { value: 1 });
          } catch (e) {
            r = !1;
          }
        e.exports = r;
      },
      49: function (e) {
        "use strict";
        e.exports = EvalError;
      },
      102: function (e) {
        "use strict";
        e.exports = Error;
      },
      34: function (e) {
        "use strict";
        e.exports = RangeError;
      },
      928: function (e) {
        "use strict";
        e.exports = ReferenceError;
      },
      649: function (e) {
        "use strict";
        e.exports = SyntaxError;
      },
      456: function (e) {
        "use strict";
        e.exports = TypeError;
      },
      979: function (e) {
        "use strict";
        e.exports = URIError;
      },
      990: function (e) {
        "use strict";
        var t = Object.prototype.toString,
          n = Math.max,
          r = function (e, t) {
            for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
            for (var o = 0; o < t.length; o += 1) n[o + e.length] = t[o];
            return n;
          },
          o = function (e, t) {
            for (var n = [], r = t || 0, o = 0; r < e.length; r += 1, o += 1)
              n[o] = e[r];
            return n;
          },
          i = function (e, t) {
            for (var n = "", r = 0; r < e.length; r += 1)
              (n += e[r]), r + 1 < e.length && (n += t);
            return n;
          };
        e.exports = function (e) {
          var a,
            c = this;
          if ("function" != typeof c || "[object Function]" !== t.apply(c))
            throw TypeError(
              "Function.prototype.bind called on incompatible " + c,
            );
          for (
            var s = o(arguments, 1),
              l = n(0, c.length - s.length),
              u = [],
              f = 0;
            f < l;
            f++
          )
            u[f] = "$" + f;
          if (
            ((a = Function(
              "binder",
              "return function (" +
                i(u, ",") +
                "){ return binder.apply(this,arguments); }",
            )(function () {
              if (this instanceof a) {
                var t = c.apply(this, r(s, arguments));
                return Object(t) === t ? t : this;
              }
              return c.apply(e, r(s, arguments));
            })),
            c.prototype)
          ) {
            var p = function () {};
            (p.prototype = c.prototype),
              (a.prototype = new p()),
              (p.prototype = null);
          }
          return a;
        };
      },
      943: function (e, t, n) {
        "use strict";
        var r = n(990);
        e.exports = Function.prototype.bind || r;
      },
      287: function (e, t, n) {
        "use strict";
        var r,
          o,
          i = n(102),
          a = n(49),
          c = n(34),
          s = n(928),
          l = n(649),
          u = n(456),
          f = n(979),
          p = Function,
          d = function (e) {
            try {
              return p('"use strict"; return (' + e + ").constructor;")();
            } catch (e) {}
          },
          h = Object.getOwnPropertyDescriptor;
        if (h)
          try {
            h({}, "");
          } catch (e) {
            h = null;
          }
        var g = function () {
            throw new u();
          },
          y = h
            ? (function () {
                try {
                  return arguments.callee, g;
                } catch (e) {
                  try {
                    return h(arguments, "callee").get;
                  } catch (e) {
                    return g;
                  }
                }
              })()
            : g,
          b = n(13)(),
          v = n(431)(),
          m =
            Object.getPrototypeOf ||
            (v
              ? function (e) {
                  return e.__proto__;
                }
              : null),
          S = {},
          _ = "undefined" != typeof Uint8Array && m ? m(Uint8Array) : o,
          w = {
            __proto__: null,
            "%AggregateError%":
              "undefined" == typeof AggregateError ? o : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%":
              "undefined" == typeof ArrayBuffer ? o : ArrayBuffer,
            "%ArrayIteratorPrototype%": b && m ? m([][Symbol.iterator]()) : o,
            "%AsyncFromSyncIteratorPrototype%": o,
            "%AsyncFunction%": S,
            "%AsyncGenerator%": S,
            "%AsyncGeneratorFunction%": S,
            "%AsyncIteratorPrototype%": S,
            "%Atomics%": "undefined" == typeof Atomics ? o : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? o : BigInt,
            "%BigInt64Array%":
              "undefined" == typeof BigInt64Array ? o : BigInt64Array,
            "%BigUint64Array%":
              "undefined" == typeof BigUint64Array ? o : BigUint64Array,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? o : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": i,
            "%eval%": eval,
            "%EvalError%": a,
            "%Float32Array%":
              "undefined" == typeof Float32Array ? o : Float32Array,
            "%Float64Array%":
              "undefined" == typeof Float64Array ? o : Float64Array,
            "%FinalizationRegistry%":
              "undefined" == typeof FinalizationRegistry
                ? o
                : FinalizationRegistry,
            "%Function%": p,
            "%GeneratorFunction%": S,
            "%Int8Array%": "undefined" == typeof Int8Array ? o : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? o : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? o : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": b && m ? m(m([][Symbol.iterator]())) : o,
            "%JSON%":
              ("undefined" == typeof JSON
                ? "undefined"
                : (r = JSON) &&
                    "undefined" != typeof Symbol &&
                    r.constructor === Symbol
                  ? "symbol"
                  : typeof r) == "object"
                ? JSON
                : o,
            "%Map%": "undefined" == typeof Map ? o : Map,
            "%MapIteratorPrototype%":
              "undefined" != typeof Map && b && m
                ? m(new Map()[Symbol.iterator]())
                : o,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? o : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? o : Proxy,
            "%RangeError%": c,
            "%ReferenceError%": s,
            "%Reflect%": "undefined" == typeof Reflect ? o : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? o : Set,
            "%SetIteratorPrototype%":
              "undefined" != typeof Set && b && m
                ? m(new Set()[Symbol.iterator]())
                : o,
            "%SharedArrayBuffer%":
              "undefined" == typeof SharedArrayBuffer ? o : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": b && m ? m(""[Symbol.iterator]()) : o,
            "%Symbol%": b ? Symbol : o,
            "%SyntaxError%": l,
            "%ThrowTypeError%": y,
            "%TypedArray%": _,
            "%TypeError%": u,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? o : Uint8Array,
            "%Uint8ClampedArray%":
              "undefined" == typeof Uint8ClampedArray ? o : Uint8ClampedArray,
            "%Uint16Array%":
              "undefined" == typeof Uint16Array ? o : Uint16Array,
            "%Uint32Array%":
              "undefined" == typeof Uint32Array ? o : Uint32Array,
            "%URIError%": f,
            "%WeakMap%": "undefined" == typeof WeakMap ? o : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? o : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? o : WeakSet,
          };
        if (m)
          try {
            null.error;
          } catch (e) {
            var C = m(m(e));
            w["%Error.prototype%"] = C;
          }
        var E = function e(t) {
            var n;
            if ("%AsyncFunction%" === t) n = d("async function () {}");
            else if ("%GeneratorFunction%" === t) n = d("function* () {}");
            else if ("%AsyncGeneratorFunction%" === t)
              n = d("async function* () {}");
            else if ("%AsyncGenerator%" === t) {
              var r = e("%AsyncGeneratorFunction%");
              r && (n = r.prototype);
            } else if ("%AsyncIteratorPrototype%" === t) {
              var o = e("%AsyncGenerator%");
              o && m && (n = m(o.prototype));
            }
            return (w[t] = n), n;
          },
          k = {
            __proto__: null,
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
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
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
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
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"],
          },
          T = n(943),
          R = n(644),
          O = T.call(Function.call, Array.prototype.concat),
          I = T.call(Function.apply, Array.prototype.splice),
          j = T.call(Function.call, String.prototype.replace),
          P = T.call(Function.call, String.prototype.slice),
          A = T.call(Function.call, RegExp.prototype.exec),
          x =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          D = /\\(\\)?/g,
          N = function (e) {
            var t = P(e, 0, 1),
              n = P(e, -1);
            if ("%" === t && "%" !== n)
              throw new l("invalid intrinsic syntax, expected closing `%`");
            if ("%" === n && "%" !== t)
              throw new l("invalid intrinsic syntax, expected opening `%`");
            var r = [];
            return (
              j(e, x, function (e, t, n, o) {
                r[r.length] = n ? j(o, D, "$1") : t || e;
              }),
              r
            );
          },
          q = function (e, t) {
            var n,
              r = e;
            if ((R(k, r) && (r = "%" + (n = k[r])[0] + "%"), R(w, r))) {
              var o = w[r];
              if ((o === S && (o = E(r)), void 0 === o && !t))
                throw new u(
                  "intrinsic " +
                    e +
                    " exists, but is not available. Please file an issue!",
                );
              return { alias: n, name: r, value: o };
            }
            throw new l("intrinsic " + e + " does not exist!");
          };
        e.exports = function (e, t) {
          if ("string" != typeof e || 0 === e.length)
            throw new u("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && "boolean" != typeof t)
            throw new u('"allowMissing" argument must be a boolean');
          if (null === A(/^%?[^%]*%?$/, e))
            throw new l(
              "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
            );
          var n = N(e),
            r = n.length > 0 ? n[0] : "",
            o = q("%" + r + "%", t),
            i = o.name,
            a = o.value,
            c = !1,
            s = o.alias;
          s && ((r = s[0]), I(n, O([0, 1], s)));
          for (var f = 1, p = !0; f < n.length; f += 1) {
            var d = n[f],
              g = P(d, 0, 1),
              y = P(d, -1);
            if (
              ('"' === g ||
                "'" === g ||
                "`" === g ||
                '"' === y ||
                "'" === y ||
                "`" === y) &&
              g !== y
            )
              throw new l(
                "property names with quotes must have matching quotes",
              );
            if (
              (("constructor" !== d && p) || (c = !0),
              (r += "." + d),
              R(w, (i = "%" + r + "%")))
            )
              a = w[i];
            else if (null != a) {
              if (!(d in a)) {
                if (!t)
                  throw new u(
                    "base intrinsic for " +
                      e +
                      " exists, but the property is not available.",
                  );
                return;
              }
              if (h && f + 1 >= n.length) {
                var b = h(a, d);
                a =
                  (p = !!b) && "get" in b && !("originalValue" in b.get)
                    ? b.get
                    : a[d];
              } else (p = R(a, d)), (a = a[d]);
              p && !c && (w[i] = a);
            }
          }
          return a;
        };
      },
      536: function (e, t, n) {
        "use strict";
        var r = n(287)("%Object.getOwnPropertyDescriptor%", !0);
        if (r)
          try {
            r([], "length");
          } catch (e) {
            r = null;
          }
        e.exports = r;
      },
      361: function (e, t, n) {
        "use strict";
        var r = n(305),
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
      431: function (e) {
        "use strict";
        var t = { __proto__: null, foo: {} },
          n = Object;
        e.exports = function () {
          return { __proto__: t }.foo === t.foo && !(t instanceof n);
        };
      },
      13: function (e, t, n) {
        "use strict";
        function r(e) {
          return e && "undefined" != typeof Symbol && e.constructor === Symbol
            ? "symbol"
            : typeof e;
        }
        var o = "undefined" != typeof Symbol && Symbol,
          i = n(326);
        e.exports = function () {
          return (
            "function" == typeof o &&
            "function" == typeof Symbol &&
            "symbol" === r(o("foo")) &&
            "symbol" === r(Symbol("bar")) &&
            i()
          );
        };
      },
      326: function (e) {
        "use strict";
        e.exports = function () {
          if (
            "function" != typeof Symbol ||
            "function" != typeof Object.getOwnPropertySymbols
          )
            return !1;
          if (
            "symbol" ==
            ((e = Symbol.iterator) &&
            "undefined" != typeof Symbol &&
            e.constructor === Symbol
              ? "symbol"
              : typeof e)
          )
            return !0;
          var e,
            t = {},
            n = Symbol("test"),
            r = Object(n);
          if (
            "string" == typeof n ||
            "[object Symbol]" !== Object.prototype.toString.call(n) ||
            "[object Symbol]" !== Object.prototype.toString.call(r)
          )
            return !1;
          for (n in ((t[n] = 42), t)) return !1;
          if (
            ("function" == typeof Object.keys && 0 !== Object.keys(t).length) ||
            ("function" == typeof Object.getOwnPropertyNames &&
              0 !== Object.getOwnPropertyNames(t).length)
          )
            return !1;
          var o = Object.getOwnPropertySymbols(t);
          if (
            1 !== o.length ||
            o[0] !== n ||
            !Object.prototype.propertyIsEnumerable.call(t, n)
          )
            return !1;
          if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (42 !== i.value || !0 !== i.enumerable) return !1;
          }
          return !0;
        };
      },
      644: function (e, t, n) {
        "use strict";
        var r = Function.prototype.call,
          o = Object.prototype.hasOwnProperty,
          i = n(943);
        e.exports = i.call(r, o);
      },
      682: function (e, t, n) {
        function r(e) {
          return e && "undefined" != typeof Symbol && e.constructor === Symbol
            ? "symbol"
            : typeof e;
        }
        var o = "function" == typeof Map && Map.prototype,
          i =
            Object.getOwnPropertyDescriptor && o
              ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
              : null,
          a = o && i && "function" == typeof i.get ? i.get : null,
          c = o && Map.prototype.forEach,
          s = "function" == typeof Set && Set.prototype,
          l =
            Object.getOwnPropertyDescriptor && s
              ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
              : null,
          u = s && l && "function" == typeof l.get ? l.get : null,
          f = s && Set.prototype.forEach,
          p =
            "function" == typeof WeakMap && WeakMap.prototype
              ? WeakMap.prototype.has
              : null,
          d =
            "function" == typeof WeakSet && WeakSet.prototype
              ? WeakSet.prototype.has
              : null,
          h =
            "function" == typeof WeakRef && WeakRef.prototype
              ? WeakRef.prototype.deref
              : null,
          g = Boolean.prototype.valueOf,
          y = Object.prototype.toString,
          b = Function.prototype.toString,
          v = String.prototype.match,
          m = String.prototype.slice,
          S = String.prototype.replace,
          _ = String.prototype.toUpperCase,
          w = String.prototype.toLowerCase,
          C = RegExp.prototype.test,
          E = Array.prototype.concat,
          k = Array.prototype.join,
          T = Array.prototype.slice,
          R = Math.floor,
          O = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
          I = Object.getOwnPropertySymbols,
          j =
            "function" == typeof Symbol && "symbol" === r(Symbol.iterator)
              ? Symbol.prototype.toString
              : null,
          P = "function" == typeof Symbol && "object" === r(Symbol.iterator),
          A =
            "function" == typeof Symbol &&
            Symbol.toStringTag &&
            (r(Symbol.toStringTag) === P ? "object" : "symbol")
              ? Symbol.toStringTag
              : null,
          x = Object.prototype.propertyIsEnumerable,
          D =
            ("function" == typeof Reflect
              ? Reflect.getPrototypeOf
              : Object.getPrototypeOf) ||
            ([].__proto__ === Array.prototype
              ? function (e) {
                  return e.__proto__;
                }
              : null);
        function N(e, t) {
          if (
            e === 1 / 0 ||
            e === -1 / 0 ||
            e != e ||
            (e && e > -1e3 && e < 1e3) ||
            C.call(/e/, t)
          )
            return t;
          var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
          if ("number" == typeof e) {
            var r = e < 0 ? -R(-e) : R(e);
            if (r !== e) {
              var o = String(r),
                i = m.call(t, o.length + 1);
              return (
                S.call(o, n, "$&_") +
                "." +
                S.call(S.call(i, /([0-9]{3})/g, "$&_"), /_$/, "")
              );
            }
          }
          return S.call(t, n, "$&_");
        }
        var q = n(241),
          M = q.custom,
          H = W(M) ? M : null;
        function L(e, t, n) {
          var r = "double" === (n.quoteStyle || t) ? '"' : "'";
          return r + e + r;
        }
        function F(e) {
          return (
            "[object Array]" === G(e) &&
            (!A ||
              !((void 0 === e ? "undefined" : r(e)) === "object" && A in e))
          );
        }
        function U(e) {
          return (
            "[object RegExp]" === G(e) &&
            (!A ||
              !((void 0 === e ? "undefined" : r(e)) === "object" && A in e))
          );
        }
        function W(e) {
          if (P)
            return (
              e &&
              (void 0 === e ? "undefined" : r(e)) === "object" &&
              e instanceof Symbol
            );
          if ((void 0 === e ? "undefined" : r(e)) === "symbol") return !0;
          if (!e || (void 0 === e ? "undefined" : r(e)) !== "object" || !j)
            return !1;
          try {
            return j.call(e), !0;
          } catch (e) {}
          return !1;
        }
        e.exports = function e(t, o, i, s) {
          var l,
            y,
            _,
            C,
            R,
            I = o || {};
          if (
            z(I, "quoteStyle") &&
            "single" !== I.quoteStyle &&
            "double" !== I.quoteStyle
          )
            throw TypeError('option "quoteStyle" must be "single" or "double"');
          if (
            z(I, "maxStringLength") &&
            ("number" == typeof I.maxStringLength
              ? I.maxStringLength < 0 && I.maxStringLength !== 1 / 0
              : null !== I.maxStringLength)
          )
            throw TypeError(
              'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
            );
          var M = !z(I, "customInspect") || I.customInspect;
          if ("boolean" != typeof M && "symbol" !== M)
            throw TypeError(
              "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`",
            );
          if (
            z(I, "indent") &&
            null !== I.indent &&
            "	" !== I.indent &&
            !(parseInt(I.indent, 10) === I.indent && I.indent > 0)
          )
            throw TypeError(
              'option "indent" must be "\\t", an integer > 0, or `null`',
            );
          if (
            z(I, "numericSeparator") &&
            "boolean" != typeof I.numericSeparator
          )
            throw TypeError(
              'option "numericSeparator", if provided, must be `true` or `false`',
            );
          var B = I.numericSeparator;
          if (void 0 === t) return "undefined";
          if (null === t) return "null";
          if ("boolean" == typeof t) return t ? "true" : "false";
          if ("string" == typeof t)
            return (function e(t, n) {
              if (t.length > n.maxStringLength) {
                var r = t.length - n.maxStringLength;
                return (
                  e(m.call(t, 0, n.maxStringLength), n) +
                  ("... " + r) +
                  " more character" +
                  (r > 1 ? "s" : "")
                );
              }
              return L(
                S.call(S.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, K),
                "single",
                n,
              );
            })(t, I);
          if ("number" == typeof t) {
            if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
            var ee = String(t);
            return B ? N(t, ee) : ee;
          }
          if ((void 0 === t ? "undefined" : r(t)) === "bigint") {
            var et = String(t) + "n";
            return B ? N(t, et) : et;
          }
          var en = void 0 === I.depth ? 5 : I.depth;
          if (
            (void 0 === i && (i = 0),
            i >= en &&
              en > 0 &&
              (void 0 === t ? "undefined" : r(t)) === "object")
          )
            return F(t) ? "[Array]" : "[Object]";
          var er = (function (e, t) {
            var n;
            if ("	" === e.indent) n = "	";
            else {
              if ("number" != typeof e.indent || !(e.indent > 0)) return null;
              n = k.call(Array(e.indent + 1), " ");
            }
            return { base: n, prev: k.call(Array(t + 1), n) };
          })(I, i);
          if (void 0 === s) s = [];
          else if (Q(s, t) >= 0) return "[Circular]";
          function eo(t, n, r) {
            if ((n && (s = T.call(s)).push(n), r)) {
              var o = { depth: I.depth };
              return (
                z(I, "quoteStyle") && (o.quoteStyle = I.quoteStyle),
                e(t, o, i + 1, s)
              );
            }
            return e(t, I, i + 1, s);
          }
          if ("function" == typeof t && !U(t)) {
            var ei = (function (e) {
                if (e.name) return e.name;
                var t = v.call(b.call(e), /^function\s*([\w$]+)/);
                return t ? t[1] : null;
              })(t),
              ea = Y(t, eo);
            return (
              "[Function" +
              (ei ? ": " + ei : " (anonymous)") +
              "]" +
              (ea.length > 0 ? " { " + k.call(ea, ", ") + " }" : "")
            );
          }
          if (W(t)) {
            var ec = P
              ? S.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
              : j.call(t);
            return (void 0 === t ? "undefined" : r(t)) !== "object" || P
              ? ec
              : J(ec);
          }
          if (
            (es = t) &&
            (void 0 === es ? "undefined" : r(es)) === "object" &&
            (("undefined" != typeof HTMLElement && es instanceof HTMLElement) ||
              ("string" == typeof es.nodeName &&
                "function" == typeof es.getAttribute))
          ) {
            for (
              var es,
                el,
                eu = "<" + w.call(String(t.nodeName)),
                ef = t.attributes || [],
                ep = 0;
              ep < ef.length;
              ep++
            ) {
              eu +=
                " " +
                ef[ep].name +
                "=" +
                L(
                  ((el = ef[ep].value), S.call(String(el), /"/g, "&quot;")),
                  "double",
                  I,
                );
            }
            return (
              (eu += ">"),
              t.childNodes && t.childNodes.length && (eu += "..."),
              (eu += "</" + w.call(String(t.nodeName)) + ">")
            );
          }
          if (F(t)) {
            if (0 === t.length) return "[]";
            var ed = Y(t, eo);
            return er &&
              !(function (e) {
                for (var t = 0; t < e.length; t++)
                  if (Q(e[t], "\n") >= 0) return !1;
                return !0;
              })(ed)
              ? "[" + Z(ed, er) + "]"
              : "[ " + k.call(ed, ", ") + " ]";
          }
          if (
            "[object Error]" === G((l = t)) &&
            (!A ||
              !((void 0 === l ? "undefined" : r(l)) === "object" && A in l))
          ) {
            var eh = Y(t, eo);
            return "cause" in Error.prototype ||
              !("cause" in t) ||
              x.call(t, "cause")
              ? 0 === eh.length
                ? "[" + String(t) + "]"
                : "{ [" + String(t) + "] " + k.call(eh, ", ") + " }"
              : "{ [" +
                  String(t) +
                  "] " +
                  k.call(E.call("[cause]: " + eo(t.cause), eh), ", ") +
                  " }";
          }
          if ((void 0 === t ? "undefined" : r(t)) === "object" && M) {
            if (H && "function" == typeof t[H] && q)
              return q(t, { depth: en - i });
            if ("symbol" !== M && "function" == typeof t.inspect)
              return t.inspect();
          }
          if (
            (function (e) {
              if (!a || !e || (void 0 === e ? "undefined" : r(e)) !== "object")
                return !1;
              try {
                a.call(e);
                try {
                  u.call(e);
                } catch (e) {
                  return !0;
                }
                return e instanceof Map;
              } catch (e) {}
              return !1;
            })(t)
          ) {
            var eg = [];
            return (
              c &&
                c.call(t, function (e, n) {
                  eg.push(eo(n, t, !0) + " => " + eo(e, t));
                }),
              X("Map", a.call(t), eg, er)
            );
          }
          if (
            (function (e) {
              if (!u || !e || (void 0 === e ? "undefined" : r(e)) !== "object")
                return !1;
              try {
                u.call(e);
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
            var ey = [];
            return (
              f &&
                f.call(t, function (e) {
                  ey.push(eo(e, t));
                }),
              X("Set", u.call(t), ey, er)
            );
          }
          if (
            (function (e) {
              if (!p || !e || (void 0 === e ? "undefined" : r(e)) !== "object")
                return !1;
              try {
                p.call(e, p);
                try {
                  d.call(e, d);
                } catch (e) {
                  return !0;
                }
                return e instanceof WeakMap;
              } catch (e) {}
              return !1;
            })(t)
          )
            return V("WeakMap");
          if (
            (function (e) {
              if (!d || !e || (void 0 === e ? "undefined" : r(e)) !== "object")
                return !1;
              try {
                d.call(e, d);
                try {
                  p.call(e, p);
                } catch (e) {
                  return !0;
                }
                return e instanceof WeakSet;
              } catch (e) {}
              return !1;
            })(t)
          )
            return V("WeakSet");
          if (
            (function (e) {
              if (!h || !e || (void 0 === e ? "undefined" : r(e)) !== "object")
                return !1;
              try {
                return h.call(e), !0;
              } catch (e) {}
              return !1;
            })(t)
          )
            return V("WeakRef");
          if (
            "[object Number]" === G((y = t)) &&
            (!A ||
              !((void 0 === y ? "undefined" : r(y)) === "object" && A in y))
          )
            return J(eo(Number(t)));
          if (
            (function (e) {
              if (!e || (void 0 === e ? "undefined" : r(e)) !== "object" || !O)
                return !1;
              try {
                return O.call(e), !0;
              } catch (e) {}
              return !1;
            })(t)
          )
            return J(eo(O.call(t)));
          if (
            "[object Boolean]" === G((_ = t)) &&
            (!A ||
              !((void 0 === _ ? "undefined" : r(_)) === "object" && A in _))
          )
            return J(g.call(t));
          if (
            "[object String]" === G((C = t)) &&
            (!A ||
              !((void 0 === C ? "undefined" : r(C)) === "object" && A in C))
          )
            return J(eo(String(t)));
          if ("undefined" != typeof window && t === window)
            return "{ [object Window] }";
          if (
            ("undefined" != typeof globalThis && t === globalThis) ||
            (void 0 !== n.g && t === n.g)
          )
            return "{ [object globalThis] }";
          if (
            !(
              "[object Date]" === G((R = t)) &&
              (!A ||
                !((void 0 === R ? "undefined" : r(R)) === "object" && A in R))
            ) &&
            !U(t)
          ) {
            var eb = Y(t, eo),
              ev = D
                ? D(t) === Object.prototype
                : t instanceof Object || t.constructor === Object,
              em = t instanceof Object ? "" : "null prototype",
              eS =
                !ev && A && Object(t) === t && A in t
                  ? m.call(G(t), 8, -1)
                  : em
                    ? "Object"
                    : "",
              e_ =
                (ev || "function" != typeof t.constructor
                  ? ""
                  : t.constructor.name
                    ? t.constructor.name + " "
                    : "") +
                (eS || em
                  ? "[" + k.call(E.call([], eS || [], em || []), ": ") + "] "
                  : "");
            return 0 === eb.length
              ? e_ + "{}"
              : er
                ? e_ + "{" + Z(eb, er) + "}"
                : e_ + "{ " + k.call(eb, ", ") + " }";
          }
          return String(t);
        };
        var B =
          Object.prototype.hasOwnProperty ||
          function (e) {
            return e in this;
          };
        function z(e, t) {
          return B.call(e, t);
        }
        function G(e) {
          return y.call(e);
        }
        function Q(e, t) {
          if (e.indexOf) return e.indexOf(t);
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        }
        function K(e) {
          var t = e.charCodeAt(0),
            n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
          return n
            ? "\\" + n
            : "\\x" + (t < 16 ? "0" : "") + _.call(t.toString(16));
        }
        function J(e) {
          return "Object(" + e + ")";
        }
        function V(e) {
          return e + " { ? }";
        }
        function X(e, t, n, r) {
          return e + " (" + t + ") {" + (r ? Z(n, r) : k.call(n, ", ")) + "}";
        }
        function Z(e, t) {
          if (0 === e.length) return "";
          var n = "\n" + t.prev + t.base;
          return n + k.call(e, "," + n) + "\n" + t.prev;
        }
        function Y(e, t) {
          var n,
            r = F(e),
            o = [];
          if (r) {
            o.length = e.length;
            for (var i = 0; i < e.length; i++) o[i] = z(e, i) ? t(e[i], e) : "";
          }
          var a = "function" == typeof I ? I(e) : [];
          if (P) {
            n = {};
            for (var c = 0; c < a.length; c++) n["$" + a[c]] = a[c];
          }
          for (var s in e) {
            if (z(e, s) && (!r || String(Number(s)) !== s || !(s < e.length)))
              !(P && n["$" + s] instanceof Symbol) &&
                (C.call(/[^\w$]/, s)
                  ? o.push(t(s, e) + ": " + t(e[s], e))
                  : o.push(s + ": " + t(e[s], e)));
          }
          if ("function" == typeof I)
            for (var l = 0; l < a.length; l++)
              x.call(e, a[l]) && o.push("[" + t(a[l]) + "]: " + t(e[a[l]], e));
          return o;
        }
      },
      103: function (e) {
        var t,
          n,
          r,
          o = (e.exports = {});
        function i() {
          throw Error("setTimeout has not been defined");
        }
        function a() {
          throw Error("clearTimeout has not been defined");
        }
        function c(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === i || !t) && setTimeout)
            return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            t = "function" == typeof setTimeout ? setTimeout : i;
          } catch (e) {
            t = i;
          }
          try {
            n = "function" == typeof clearTimeout ? clearTimeout : a;
          } catch (e) {
            n = a;
          }
        })();
        var s = [],
          l = !1,
          u = -1;
        function f() {
          l &&
            r &&
            ((l = !1),
            r.length ? (s = r.concat(s)) : (u = -1),
            s.length && p());
        }
        function p() {
          if (!l) {
            var e = c(f);
            l = !0;
            for (var t = s.length; t; ) {
              for (r = s, s = []; ++u < t; ) r && r[u].run();
              (u = -1), (t = s.length);
            }
            (r = null),
              (l = !1),
              (function (e) {
                if (n === clearTimeout) return clearTimeout(e);
                if ((n === a || !n) && clearTimeout)
                  return (n = clearTimeout), clearTimeout(e);
                try {
                  n(e);
                } catch (t) {
                  try {
                    return n.call(null, e);
                  } catch (t) {
                    return n.call(this, e);
                  }
                }
              })(e);
          }
        }
        function d(e, t) {
          (this.fun = e), (this.array = t);
        }
        function h() {}
        (o.nextTick = function (e) {
          var t = Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          s.push(new d(e, t)), 1 !== s.length || l || c(p);
        }),
          (d.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (o.title = "browser"),
          (o.browser = !0),
          (o.env = {}),
          (o.argv = []),
          (o.version = ""),
          (o.versions = {}),
          (o.on = h),
          (o.addListener = h),
          (o.once = h),
          (o.off = h),
          (o.removeListener = h),
          (o.removeAllListeners = h),
          (o.emit = h),
          (o.prependListener = h),
          (o.prependOnceListener = h),
          (o.listeners = function (e) {
            return [];
          }),
          (o.binding = function (e) {
            throw Error("process.binding is not supported");
          }),
          (o.cwd = function () {
            return "/";
          }),
          (o.chdir = function (e) {
            throw Error("process.chdir is not supported");
          }),
          (o.umask = function () {
            return 0;
          });
      },
      384: function (e, t, n) {
        /*! https://mths.be/punycode v1.4.1 by @mathias */ function r(e) {
          return e && "undefined" != typeof Symbol && e.constructor === Symbol
            ? "symbol"
            : typeof e;
        }
        (e = n.nmd(e)),
          (function (o) {
            var i = "object" == r(t) && t && !t.nodeType && t,
              a = "object" == r(e) && e && !e.nodeType && e,
              c = (void 0 === n.g ? "undefined" : r(n.g)) == "object" && n.g;
            (c.global === c || c.window === c || c.self === c) && (o = c);
            var s,
              l,
              u = /^xn--/,
              f = /[^\x20-\x7E]/,
              p = /[\x2E\u3002\uFF0E\uFF61]/g,
              d = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input",
              },
              h = Math.floor,
              g = String.fromCharCode;
            function y(e) {
              throw RangeError(d[e]);
            }
            function b(e, t) {
              for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
              return r;
            }
            function v(e, t) {
              var n = e.split("@"),
                r = "";
              return (
                n.length > 1 && ((r = n[0] + "@"), (e = n[1])),
                r + b((e = e.replace(p, ".")).split("."), t).join(".")
              );
            }
            function m(e) {
              for (var t, n, r = [], o = 0, i = e.length; o < i; )
                (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i
                  ? (64512 & (n = e.charCodeAt(o++))) == 56320
                    ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                    : (r.push(t), o--)
                  : r.push(t);
              return r;
            }
            function S(e) {
              return b(e, function (e) {
                var t = "";
                return (
                  e > 65535 &&
                    ((e -= 65536),
                    (t += g(((e >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                  (t += g(e))
                );
              }).join("");
            }
            function _(e, t) {
              return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
            }
            function w(e, t, n) {
              var r = 0;
              for (e = n ? h(e / 700) : e >> 1, e += h(e / t); e > 455; r += 36)
                e = h(e / 35);
              return h(r + (36 * e) / (e + 38));
            }
            function C(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                c,
                s,
                l,
                u,
                f,
                p = [],
                d = e.length,
                g = 0,
                b = 128,
                v = 72;
              for ((r = e.lastIndexOf("-")) < 0 && (r = 0), o = 0; o < r; ++o)
                e.charCodeAt(o) >= 128 && y("not-basic"),
                  p.push(e.charCodeAt(o));
              for (i = r > 0 ? r + 1 : 0; i < d; ) {
                for (
                  a = g, c = 1, s = 36;
                  i >= d && y("invalid-input"),
                    ((l =
                      (t = e.charCodeAt(i++)) - 48 < 10
                        ? t - 22
                        : t - 65 < 26
                          ? t - 65
                          : t - 97 < 26
                            ? t - 97
                            : 36) >= 36 ||
                      l > h((0x7fffffff - g) / c)) &&
                      y("overflow"),
                    (g += l * c),
                    !(l < (u = s <= v ? 1 : s >= v + 26 ? 26 : s - v));
                  s += 36
                ) {
                  c > h(0x7fffffff / (f = 36 - u)) && y("overflow"), (c *= f);
                }
                (v = w(g - a, (n = p.length + 1), 0 == a)),
                  h(g / n) > 0x7fffffff - b && y("overflow"),
                  (b += h(g / n)),
                  (g %= n),
                  p.splice(g++, 0, b);
              }
              return S(p);
            }
            function E(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                c,
                s,
                l,
                u,
                f,
                p,
                d,
                b,
                v,
                S = [];
              for (
                a = 0, p = (e = m(e)).length, t = 128, n = 0, i = 72;
                a < p;
                ++a
              )
                (f = e[a]) < 128 && S.push(g(f));
              for (r = o = S.length, o && S.push("-"); r < p; ) {
                for (c = 0x7fffffff, a = 0; a < p; ++a)
                  (f = e[a]) >= t && f < c && (c = f);
                for (
                  c - t > h((0x7fffffff - n) / (d = r + 1)) && y("overflow"),
                    n += (c - t) * d,
                    t = c,
                    a = 0;
                  a < p;
                  ++a
                )
                  if (
                    ((f = e[a]) < t && ++n > 0x7fffffff && y("overflow"),
                    f == t)
                  ) {
                    for (
                      s = n, l = 36;
                      !(s < (u = l <= i ? 1 : l >= i + 26 ? 26 : l - i));
                      l += 36
                    )
                      (v = s - u),
                        (b = 36 - u),
                        S.push(g(_(u + (v % b), 0))),
                        (s = h(v / b));
                    S.push(g(_(s, 0))), (i = w(n, d, r == o)), (n = 0), ++r;
                  }
                ++n, ++t;
              }
              return S.join("");
            }
            if (
              ((s = {
                version: "1.4.1",
                ucs2: { decode: m, encode: S },
                decode: C,
                encode: E,
                toASCII: function (e) {
                  return v(e, function (e) {
                    return f.test(e) ? "xn--" + E(e) : e;
                  });
                },
                toUnicode: function (e) {
                  return v(e, function (e) {
                    return u.test(e) ? C(e.slice(4).toLowerCase()) : e;
                  });
                },
              }),
              "function" == typeof define &&
                "object" == r(define.amd) &&
                define.amd)
            )
              define("punycode", function () {
                return s;
              });
            else if (i && a) {
              if (e.exports == i) a.exports = s;
              else for (l in s) s.hasOwnProperty(l) && (i[l] = s[l]);
            } else o.punycode = s;
          })(this);
      },
      754: function (e) {
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
      663: function (e, t, n) {
        "use strict";
        var r = n(3),
          o = n(543),
          i = n(754);
        e.exports = { formats: i, parse: o, stringify: r };
      },
      543: function (e, t, n) {
        "use strict";
        var r = n(271),
          o = Object.prototype.hasOwnProperty,
          i = Array.isArray,
          a = {
            allowDots: !1,
            allowEmptyArrays: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decodeDotInKeys: !1,
            decoder: r.decode,
            delimiter: "&",
            depth: 5,
            duplicates: "combine",
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictDepth: !1,
            strictNullHandling: !1,
          },
          c = function (e, t) {
            return e && "string" == typeof e && t.comma && e.indexOf(",") > -1
              ? e.split(",")
              : e;
          },
          s = function (e, t) {
            var n = { __proto__: null },
              s = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
            s = s.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
            var l = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
              u = s.split(t.delimiter, l),
              f = -1,
              p = t.charset;
            if (t.charsetSentinel)
              for (d = 0; d < u.length; ++d)
                0 === u[d].indexOf("utf8=") &&
                  ("utf8=%E2%9C%93" === u[d]
                    ? (p = "utf-8")
                    : "utf8=%26%2310003%3B" === u[d] && (p = "iso-8859-1"),
                  (f = d),
                  (d = u.length));
            for (d = 0; d < u.length; ++d)
              if (d !== f) {
                var d,
                  h,
                  g,
                  y = u[d],
                  b = y.indexOf("]="),
                  v = -1 === b ? y.indexOf("=") : b + 1;
                -1 === v
                  ? ((h = t.decoder(y, a.decoder, p, "key")),
                    (g = t.strictNullHandling ? null : ""))
                  : ((h = t.decoder(y.slice(0, v), a.decoder, p, "key")),
                    (g = r.maybeMap(c(y.slice(v + 1), t), function (e) {
                      return t.decoder(e, a.decoder, p, "value");
                    }))),
                  g &&
                    t.interpretNumericEntities &&
                    "iso-8859-1" === p &&
                    (g = g.replace(/&#(\d+);/g, function (e, t) {
                      return String.fromCharCode(parseInt(t, 10));
                    })),
                  y.indexOf("[]=") > -1 && (g = i(g) ? [g] : g);
                var m = o.call(n, h);
                m && "combine" === t.duplicates
                  ? (n[h] = r.combine(n[h], g))
                  : (m && "last" !== t.duplicates) || (n[h] = g);
              }
            return n;
          },
          l = function (e, t, n, r) {
            for (var o = r ? t : c(t, n), i = e.length - 1; i >= 0; --i) {
              var a,
                s = e[i];
              if ("[]" === s && n.parseArrays)
                a =
                  n.allowEmptyArrays &&
                  ("" === o || (n.strictNullHandling && null === o))
                    ? []
                    : [].concat(o);
              else {
                a = n.plainObjects ? Object.create(null) : {};
                var l =
                    "[" === s.charAt(0) && "]" === s.charAt(s.length - 1)
                      ? s.slice(1, -1)
                      : s,
                  u = n.decodeDotInKeys ? l.replace(/%2E/g, ".") : l,
                  f = parseInt(u, 10);
                n.parseArrays || "" !== u
                  ? !isNaN(f) &&
                    s !== u &&
                    String(f) === u &&
                    f >= 0 &&
                    n.parseArrays &&
                    f <= n.arrayLimit
                    ? ((a = [])[f] = o)
                    : "__proto__" !== u && (a[u] = o)
                  : (a = { 0: o });
              }
              o = a;
            }
            return o;
          },
          u = function (e, t, n, r) {
            if (e) {
              var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                a = /(\[[^[\]]*])/g,
                c = n.depth > 0 && /(\[[^[\]]*])/.exec(i),
                s = c ? i.slice(0, c.index) : i,
                u = [];
              if (s) {
                if (
                  !n.plainObjects &&
                  o.call(Object.prototype, s) &&
                  !n.allowPrototypes
                )
                  return;
                u.push(s);
              }
              for (
                var f = 0;
                n.depth > 0 && null !== (c = a.exec(i)) && f < n.depth;

              ) {
                if (
                  ((f += 1),
                  !n.plainObjects &&
                    o.call(Object.prototype, c[1].slice(1, -1)) &&
                    !n.allowPrototypes)
                )
                  return;
                u.push(c[1]);
              }
              if (c) {
                if (!0 === n.strictDepth)
                  throw RangeError(
                    "Input depth exceeded depth option of " +
                      n.depth +
                      " and strictDepth is true",
                  );
                u.push("[" + i.slice(c.index) + "]");
              }
              return l(u, t, n, r);
            }
          },
          f = function (e) {
            if (!e) return a;
            if (
              void 0 !== e.allowEmptyArrays &&
              "boolean" != typeof e.allowEmptyArrays
            )
              throw TypeError(
                "`allowEmptyArrays` option can only be `true` or `false`, when provided",
              );
            if (
              void 0 !== e.decodeDotInKeys &&
              "boolean" != typeof e.decodeDotInKeys
            )
              throw TypeError(
                "`decodeDotInKeys` option can only be `true` or `false`, when provided",
              );
            if (
              null !== e.decoder &&
              void 0 !== e.decoder &&
              "function" != typeof e.decoder
            )
              throw TypeError("Decoder has to be a function.");
            if (
              void 0 !== e.charset &&
              "utf-8" !== e.charset &&
              "iso-8859-1" !== e.charset
            )
              throw TypeError(
                "The charset option must be either utf-8, iso-8859-1, or undefined",
              );
            var t = void 0 === e.charset ? a.charset : e.charset,
              n = void 0 === e.duplicates ? a.duplicates : e.duplicates;
            if ("combine" !== n && "first" !== n && "last" !== n)
              throw TypeError(
                "The duplicates option must be either combine, first, or last",
              );
            return {
              allowDots:
                void 0 === e.allowDots
                  ? !0 === e.decodeDotInKeys || a.allowDots
                  : !!e.allowDots,
              allowEmptyArrays:
                "boolean" == typeof e.allowEmptyArrays
                  ? !!e.allowEmptyArrays
                  : a.allowEmptyArrays,
              allowPrototypes:
                "boolean" == typeof e.allowPrototypes
                  ? e.allowPrototypes
                  : a.allowPrototypes,
              allowSparse:
                "boolean" == typeof e.allowSparse
                  ? e.allowSparse
                  : a.allowSparse,
              arrayLimit:
                "number" == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
              charset: t,
              charsetSentinel:
                "boolean" == typeof e.charsetSentinel
                  ? e.charsetSentinel
                  : a.charsetSentinel,
              comma: "boolean" == typeof e.comma ? e.comma : a.comma,
              decodeDotInKeys:
                "boolean" == typeof e.decodeDotInKeys
                  ? e.decodeDotInKeys
                  : a.decodeDotInKeys,
              decoder: "function" == typeof e.decoder ? e.decoder : a.decoder,
              delimiter:
                "string" == typeof e.delimiter || r.isRegExp(e.delimiter)
                  ? e.delimiter
                  : a.delimiter,
              depth:
                "number" == typeof e.depth || !1 === e.depth
                  ? +e.depth
                  : a.depth,
              duplicates: n,
              ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
              interpretNumericEntities:
                "boolean" == typeof e.interpretNumericEntities
                  ? e.interpretNumericEntities
                  : a.interpretNumericEntities,
              parameterLimit:
                "number" == typeof e.parameterLimit
                  ? e.parameterLimit
                  : a.parameterLimit,
              parseArrays: !1 !== e.parseArrays,
              plainObjects:
                "boolean" == typeof e.plainObjects
                  ? e.plainObjects
                  : a.plainObjects,
              strictDepth:
                "boolean" == typeof e.strictDepth
                  ? !!e.strictDepth
                  : a.strictDepth,
              strictNullHandling:
                "boolean" == typeof e.strictNullHandling
                  ? e.strictNullHandling
                  : a.strictNullHandling,
            };
          };
        e.exports = function (e, t) {
          var n = f(t);
          if ("" === e || null == e)
            return n.plainObjects ? Object.create(null) : {};
          for (
            var o = "string" == typeof e ? s(e, n) : e,
              i = n.plainObjects ? Object.create(null) : {},
              a = Object.keys(o),
              c = 0;
            c < a.length;
            ++c
          ) {
            var l = a[c],
              p = u(l, o[l], n, "string" == typeof e);
            i = r.merge(i, p, n);
          }
          return !0 === n.allowSparse ? i : r.compact(i);
        };
      },
      3: function (e, t, n) {
        "use strict";
        function r(e) {
          return e && "undefined" != typeof Symbol && e.constructor === Symbol
            ? "symbol"
            : typeof e;
        }
        var o = n(264),
          i = n(271),
          a = n(754),
          c = Object.prototype.hasOwnProperty,
          s = {
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
          l = Array.isArray,
          u = Array.prototype.push,
          f = function (e, t) {
            u.apply(e, l(t) ? t : [t]);
          },
          p = Date.prototype.toISOString,
          d = a.default,
          h = {
            addQueryPrefix: !1,
            allowDots: !1,
            allowEmptyArrays: !1,
            arrayFormat: "indices",
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encodeDotInKeys: !1,
            encoder: i.encode,
            encodeValuesOnly: !1,
            format: d,
            formatter: a.formatters[d],
            indices: !1,
            serializeDate: function (e) {
              return p.call(e);
            },
            skipNulls: !1,
            strictNullHandling: !1,
          },
          g = {},
          y = function e(t, n, a, c, s, u, p, d, y, b, v, m, S, _, w, C, E, k) {
            for (
              var T, R, O = t, I = k, j = 0, P = !1;
              void 0 !== (I = I.get(g)) && !P;

            ) {
              var A = I.get(t);
              if (((j += 1), void 0 !== A)) {
                if (A === j) throw RangeError("Cyclic object value");
                P = !0;
              }
              void 0 === I.get(g) && (j = 0);
            }
            if (
              ("function" == typeof b
                ? (O = b(n, O))
                : O instanceof Date
                  ? (O = S(O))
                  : "comma" === a &&
                    l(O) &&
                    (O = i.maybeMap(O, function (e) {
                      return e instanceof Date ? S(e) : e;
                    })),
              null === O)
            ) {
              if (u) return y && !C ? y(n, h.encoder, E, "key", _) : n;
              O = "";
            }
            if (
              "string" == typeof (T = O) ||
              "number" == typeof T ||
              "boolean" == typeof T ||
              (void 0 === T ? "undefined" : r(T)) === "symbol" ||
              (void 0 === T ? "undefined" : r(T)) === "bigint" ||
              i.isBuffer(O)
            )
              return y
                ? [
                    w(C ? n : y(n, h.encoder, E, "key", _)) +
                      "=" +
                      w(y(O, h.encoder, E, "value", _)),
                  ]
                : [w(n) + "=" + w(String(O))];
            var x = [];
            if (void 0 === O) return x;
            if ("comma" === a && l(O))
              C && y && (O = i.maybeMap(O, y)),
                (R = [{ value: O.length > 0 ? O.join(",") || null : void 0 }]);
            else if (l(b)) R = b;
            else {
              var D = Object.keys(O);
              R = v ? D.sort(v) : D;
            }
            var N = d ? n.replace(/\./g, "%2E") : n,
              q = c && l(O) && 1 === O.length ? N + "[]" : N;
            if (s && l(O) && 0 === O.length) return q + "[]";
            for (var M = 0; M < R.length; ++M) {
              var H = R[M],
                L =
                  (void 0 === H ? "undefined" : r(H)) === "object" &&
                  void 0 !== H.value
                    ? H.value
                    : O[H];
              if (!p || null !== L) {
                var F = m && d ? H.replace(/\./g, "%2E") : H,
                  U = l(O)
                    ? "function" == typeof a
                      ? a(q, F)
                      : q
                    : q + (m ? "." + F : "[" + F + "]");
                k.set(t, j);
                var W = o();
                W.set(g, k),
                  f(
                    x,
                    e(
                      L,
                      U,
                      a,
                      c,
                      s,
                      u,
                      p,
                      d,
                      "comma" === a && C && l(O) ? null : y,
                      b,
                      v,
                      m,
                      S,
                      _,
                      w,
                      C,
                      E,
                      W,
                    ),
                  );
              }
            }
            return x;
          },
          b = function (e) {
            if (!e) return h;
            if (
              void 0 !== e.allowEmptyArrays &&
              "boolean" != typeof e.allowEmptyArrays
            )
              throw TypeError(
                "`allowEmptyArrays` option can only be `true` or `false`, when provided",
              );
            if (
              void 0 !== e.encodeDotInKeys &&
              "boolean" != typeof e.encodeDotInKeys
            )
              throw TypeError(
                "`encodeDotInKeys` option can only be `true` or `false`, when provided",
              );
            if (
              null !== e.encoder &&
              void 0 !== e.encoder &&
              "function" != typeof e.encoder
            )
              throw TypeError("Encoder has to be a function.");
            var t,
              n = e.charset || h.charset;
            if (
              void 0 !== e.charset &&
              "utf-8" !== e.charset &&
              "iso-8859-1" !== e.charset
            )
              throw TypeError(
                "The charset option must be either utf-8, iso-8859-1, or undefined",
              );
            var r = a.default;
            if (void 0 !== e.format) {
              if (!c.call(a.formatters, e.format))
                throw TypeError("Unknown format option provided.");
              r = e.format;
            }
            var o = a.formatters[r],
              i = h.filter;
            if (
              (("function" == typeof e.filter || l(e.filter)) && (i = e.filter),
              (t =
                e.arrayFormat in s
                  ? e.arrayFormat
                  : "indices" in e
                    ? e.indices
                      ? "indices"
                      : "repeat"
                    : h.arrayFormat),
              "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip)
            )
              throw TypeError("`commaRoundTrip` must be a boolean, or absent");
            var u =
              void 0 === e.allowDots
                ? !0 === e.encodeDotInKeys || h.allowDots
                : !!e.allowDots;
            return {
              addQueryPrefix:
                "boolean" == typeof e.addQueryPrefix
                  ? e.addQueryPrefix
                  : h.addQueryPrefix,
              allowDots: u,
              allowEmptyArrays:
                "boolean" == typeof e.allowEmptyArrays
                  ? !!e.allowEmptyArrays
                  : h.allowEmptyArrays,
              arrayFormat: t,
              charset: n,
              charsetSentinel:
                "boolean" == typeof e.charsetSentinel
                  ? e.charsetSentinel
                  : h.charsetSentinel,
              commaRoundTrip: e.commaRoundTrip,
              delimiter: void 0 === e.delimiter ? h.delimiter : e.delimiter,
              encode: "boolean" == typeof e.encode ? e.encode : h.encode,
              encodeDotInKeys:
                "boolean" == typeof e.encodeDotInKeys
                  ? e.encodeDotInKeys
                  : h.encodeDotInKeys,
              encoder: "function" == typeof e.encoder ? e.encoder : h.encoder,
              encodeValuesOnly:
                "boolean" == typeof e.encodeValuesOnly
                  ? e.encodeValuesOnly
                  : h.encodeValuesOnly,
              filter: i,
              format: r,
              formatter: o,
              serializeDate:
                "function" == typeof e.serializeDate
                  ? e.serializeDate
                  : h.serializeDate,
              skipNulls:
                "boolean" == typeof e.skipNulls ? e.skipNulls : h.skipNulls,
              sort: "function" == typeof e.sort ? e.sort : null,
              strictNullHandling:
                "boolean" == typeof e.strictNullHandling
                  ? e.strictNullHandling
                  : h.strictNullHandling,
            };
          };
        e.exports = function (e, t) {
          var n,
            i,
            a = e,
            c = b(t);
          "function" == typeof c.filter
            ? (a = (0, c.filter)("", a))
            : l(c.filter) && (n = c.filter);
          var u = [];
          if ((void 0 === a ? "undefined" : r(a)) !== "object" || null === a)
            return "";
          var p = s[c.arrayFormat],
            d = "comma" === p && c.commaRoundTrip;
          n || (n = Object.keys(a)), c.sort && n.sort(c.sort);
          for (var h = o(), g = 0; g < n.length; ++g) {
            var v = n[g];
            (!c.skipNulls || null !== a[v]) &&
              f(
                u,
                y(
                  a[v],
                  v,
                  p,
                  d,
                  c.allowEmptyArrays,
                  c.strictNullHandling,
                  c.skipNulls,
                  c.encodeDotInKeys,
                  c.encode ? c.encoder : null,
                  c.filter,
                  c.sort,
                  c.allowDots,
                  c.serializeDate,
                  c.format,
                  c.formatter,
                  c.encodeValuesOnly,
                  c.charset,
                  h,
                ),
              );
          }
          var m = u.join(c.delimiter),
            S = !0 === c.addQueryPrefix ? "?" : "";
          return (
            c.charsetSentinel &&
              ("iso-8859-1" === c.charset
                ? (S += "utf8=%26%2310003%3B&")
                : (S += "utf8=%E2%9C%93&")),
            m.length > 0 ? S + m : ""
          );
        };
      },
      271: function (e, t, n) {
        "use strict";
        function r(e) {
          return e && "undefined" != typeof Symbol && e.constructor === Symbol
            ? "symbol"
            : typeof e;
        }
        var o = n(754),
          i = Object.prototype.hasOwnProperty,
          a = Array.isArray,
          c = (function () {
            for (var e = [], t = 0; t < 256; ++t)
              e.push(
                "%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase(),
              );
            return e;
          })(),
          s = function (e) {
            for (; e.length > 1; ) {
              var t = e.pop(),
                n = t.obj[t.prop];
              if (a(n)) {
                for (var r = [], o = 0; o < n.length; ++o)
                  void 0 !== n[o] && r.push(n[o]);
                t.obj[t.prop] = r;
              }
            }
          },
          l = function (e, t) {
            for (
              var n = t && t.plainObjects ? Object.create(null) : {}, r = 0;
              r < e.length;
              ++r
            )
              void 0 !== e[r] && (n[r] = e[r]);
            return n;
          };
        e.exports = {
          arrayToObject: l,
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
              var t = [{ obj: { o: e }, prop: "o" }], n = [], o = 0;
              o < t.length;
              ++o
            )
              for (
                var i = t[o], a = i.obj[i.prop], c = Object.keys(a), l = 0;
                l < c.length;
                ++l
              ) {
                var u = c[l],
                  f = a[u];
                (void 0 === f ? "undefined" : r(f)) === "object" &&
                  null !== f &&
                  -1 === n.indexOf(f) &&
                  (t.push({ obj: a, prop: u }), n.push(f));
              }
            return s(t), e;
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
          encode: function (e, t, n, i, a) {
            if (0 === e.length) return e;
            var s = e;
            if (
              ((void 0 === e ? "undefined" : r(e)) === "symbol"
                ? (s = Symbol.prototype.toString.call(e))
                : "string" != typeof e && (s = String(e)),
              "iso-8859-1" === n)
            )
              return escape(s).replace(/%u[0-9a-f]{4}/gi, function (e) {
                return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
              });
            for (var l = "", u = 0; u < s.length; u += 1024) {
              for (
                var f = s.length >= 1024 ? s.slice(u, u + 1024) : s,
                  p = [],
                  d = 0;
                d < f.length;
                ++d
              ) {
                var h = f.charCodeAt(d);
                if (
                  45 === h ||
                  46 === h ||
                  95 === h ||
                  126 === h ||
                  (h >= 48 && h <= 57) ||
                  (h >= 65 && h <= 90) ||
                  (h >= 97 && h <= 122) ||
                  (a === o.RFC1738 && (40 === h || 41 === h))
                ) {
                  p[p.length] = f.charAt(d);
                  continue;
                }
                if (h < 128) {
                  p[p.length] = c[h];
                  continue;
                }
                if (h < 2048) {
                  p[p.length] = c[192 | (h >> 6)] + c[128 | (63 & h)];
                  continue;
                }
                if (h < 55296 || h >= 57344) {
                  p[p.length] =
                    c[224 | (h >> 12)] +
                    c[128 | ((h >> 6) & 63)] +
                    c[128 | (63 & h)];
                  continue;
                }
                (d += 1),
                  (h = 65536 + (((1023 & h) << 10) | (1023 & f.charCodeAt(d)))),
                  (p[p.length] =
                    c[240 | (h >> 18)] +
                    c[128 | ((h >> 12) & 63)] +
                    c[128 | ((h >> 6) & 63)] +
                    c[128 | (63 & h)]);
              }
              l += p.join("");
            }
            return l;
          },
          isBuffer: function (e) {
            return (
              !!e &&
              (void 0 === e ? "undefined" : r(e)) === "object" &&
              !!(
                e.constructor &&
                e.constructor.isBuffer &&
                e.constructor.isBuffer(e)
              )
            );
          },
          isRegExp: function (e) {
            return "[object RegExp]" === Object.prototype.toString.call(e);
          },
          maybeMap: function (e, t) {
            if (a(e)) {
              for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
              return n;
            }
            return t(e);
          },
          merge: function e(t, n, o) {
            if (!n) return t;
            if ((void 0 === n ? "undefined" : r(n)) !== "object") {
              if (a(t)) t.push(n);
              else {
                if (!t || (void 0 === t ? "undefined" : r(t)) !== "object")
                  return [t, n];
                ((o && (o.plainObjects || o.allowPrototypes)) ||
                  !i.call(Object.prototype, n)) &&
                  (t[n] = !0);
              }
              return t;
            }
            if (!t || (void 0 === t ? "undefined" : r(t)) !== "object")
              return [t].concat(n);
            var c = t;
            return (a(t) && !a(n) && (c = l(t, o)), a(t) && a(n))
              ? (n.forEach(function (n, a) {
                  if (i.call(t, a)) {
                    var c = t[a];
                    c &&
                    (void 0 === c ? "undefined" : r(c)) === "object" &&
                    n &&
                    (void 0 === n ? "undefined" : r(n)) === "object"
                      ? (t[a] = e(c, n, o))
                      : t.push(n);
                  } else t[a] = n;
                }),
                t)
              : Object.keys(n).reduce(function (t, r) {
                  var a = n[r];
                  return i.call(t, r) ? (t[r] = e(t[r], a, o)) : (t[r] = a), t;
                }, c);
          },
        };
      },
      566: function (e, t, n) {
        "use strict";
        var r = n(287),
          o = n(559),
          i = n(361)(),
          a = n(536),
          c = n(456),
          s = r("%Math.floor%");
        e.exports = function (e, t) {
          if ("function" != typeof e) throw new c("`fn` is not a function");
          if ("number" != typeof t || t < 0 || t > 0xffffffff || s(t) !== t)
            throw new c("`length` must be a positive 32-bit integer");
          var n = arguments.length > 2 && !!arguments[2],
            r = !0,
            l = !0;
          if ("length" in e && a) {
            var u = a(e, "length");
            u && !u.configurable && (r = !1), u && !u.writable && (l = !1);
          }
          return (
            (r || l || !n) &&
              (i ? o(e, "length", t, !0, !0) : o(e, "length", t)),
            e
          );
        };
      },
      264: function (e, t, n) {
        "use strict";
        function r(e) {
          return e && "undefined" != typeof Symbol && e.constructor === Symbol
            ? "symbol"
            : typeof e;
        }
        var o = n(287),
          i = n(418),
          a = n(682),
          c = n(456),
          s = o("%WeakMap%", !0),
          l = o("%Map%", !0),
          u = i("WeakMap.prototype.get", !0),
          f = i("WeakMap.prototype.set", !0),
          p = i("WeakMap.prototype.has", !0),
          d = i("Map.prototype.get", !0),
          h = i("Map.prototype.set", !0),
          g = i("Map.prototype.has", !0),
          y = function (e, t) {
            for (var n, r = e; null !== (n = r.next); r = n)
              if (n.key === t)
                return (r.next = n.next), (n.next = e.next), (e.next = n), n;
          },
          b = function (e, t) {
            var n = y(e, t);
            return n && n.value;
          },
          v = function (e, t, n) {
            var r = y(e, t);
            r ? (r.value = n) : (e.next = { key: t, next: e.next, value: n });
          };
        e.exports = function () {
          var e,
            t,
            n,
            o = {
              assert: function (e) {
                if (!o.has(e))
                  throw new c("Side channel does not contain " + a(e));
              },
              get: function (o) {
                if (
                  s &&
                  o &&
                  ((void 0 === o ? "undefined" : r(o)) === "object" ||
                    "function" == typeof o)
                ) {
                  if (e) return u(e, o);
                } else if (l) {
                  if (t) return d(t, o);
                } else if (n) return b(n, o);
              },
              has: function (o) {
                if (
                  s &&
                  o &&
                  ((void 0 === o ? "undefined" : r(o)) === "object" ||
                    "function" == typeof o)
                ) {
                  if (e) return p(e, o);
                } else if (l) {
                  if (t) return g(t, o);
                } else if (n) return !!y(n, o);
                return !1;
              },
              set: function (o, i) {
                s &&
                o &&
                ((void 0 === o ? "undefined" : r(o)) === "object" ||
                  "function" == typeof o)
                  ? (e || (e = new s()), f(e, o, i))
                  : l
                    ? (t || (t = new l()), h(t, o, i))
                    : (n || (n = { key: {}, next: null }), v(n, o, i));
              },
            };
          return o;
        };
      },
      974: function (e, t, n) {
        "use strict";
        function r(e) {
          return e && "undefined" != typeof Symbol && e.constructor === Symbol
            ? "symbol"
            : typeof e;
        }
        var o = n(384);
        function i() {
          (this.protocol = null),
            (this.slashes = null),
            (this.auth = null),
            (this.host = null),
            (this.port = null),
            (this.hostname = null),
            (this.hash = null),
            (this.search = null),
            (this.query = null),
            (this.pathname = null),
            (this.path = null),
            (this.href = null);
        }
        var a = /^([a-z0-9.+-]+:)/i,
          c = /:[0-9]*$/,
          s = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
          l = ["'"].concat(
            ["{", "}", "|", "\\", "^", "`"].concat([
              "<",
              ">",
              '"',
              "`",
              " ",
              "\r",
              "\n",
              "	",
            ]),
          ),
          u = ["%", "/", "?", ";", "#"].concat(l),
          f = ["/", "?", "#"],
          p = /^[+a-z0-9A-Z_-]{0,63}$/,
          d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          h = { javascript: !0, "javascript:": !0 },
          g = { javascript: !0, "javascript:": !0 },
          y = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0,
          },
          b = n(663);
        function v(e, t, n) {
          if (
            e &&
            (void 0 === e ? "undefined" : r(e)) === "object" &&
            e instanceof i
          )
            return e;
          var o = new i();
          return o.parse(e, t, n), o;
        }
        (i.prototype.parse = function (e, t, n) {
          if ("string" != typeof e)
            throw TypeError(
              "Parameter 'url' must be a string, not " +
                (void 0 === e ? "undefined" : r(e)),
            );
          var i = e.indexOf("?"),
            c = -1 !== i && i < e.indexOf("#") ? "?" : "#",
            v = e.split(c);
          v[0] = v[0].replace(/\\/g, "/");
          var m = (e = v.join(c));
          if (((m = m.trim()), !n && 1 === e.split("#").length)) {
            var S = s.exec(m);
            if (S)
              return (
                (this.path = m),
                (this.href = m),
                (this.pathname = S[1]),
                S[2]
                  ? ((this.search = S[2]),
                    t
                      ? (this.query = b.parse(this.search.substr(1)))
                      : (this.query = this.search.substr(1)))
                  : t && ((this.search = ""), (this.query = {})),
                this
              );
          }
          var _ = a.exec(m);
          if (_) {
            var w = (_ = _[0]).toLowerCase();
            (this.protocol = w), (m = m.substr(_.length));
          }
          if (n || _ || m.match(/^\/\/[^@/]+@[^@/]+/)) {
            var C = "//" === m.substr(0, 2);
            C && !(_ && g[_]) && ((m = m.substr(2)), (this.slashes = !0));
          }
          if (!g[_] && (C || (_ && !y[_]))) {
            for (var E, k, T = -1, R = 0; R < f.length; R++) {
              var O = m.indexOf(f[R]);
              -1 !== O && (-1 === T || O < T) && (T = O);
            }
            -1 !==
              (k = -1 === T ? m.lastIndexOf("@") : m.lastIndexOf("@", T)) &&
              ((E = m.slice(0, k)),
              (m = m.slice(k + 1)),
              (this.auth = decodeURIComponent(E))),
              (T = -1);
            for (var R = 0; R < u.length; R++) {
              var O = m.indexOf(u[R]);
              -1 !== O && (-1 === T || O < T) && (T = O);
            }
            -1 === T && (T = m.length),
              (this.host = m.slice(0, T)),
              (m = m.slice(T)),
              this.parseHost(),
              (this.hostname = this.hostname || "");
            var I =
              "[" === this.hostname[0] &&
              "]" === this.hostname[this.hostname.length - 1];
            if (!I)
              for (
                var j = this.hostname.split(/\./), R = 0, P = j.length;
                R < P;
                R++
              ) {
                var A = j[R];
                if (A && !A.match(p)) {
                  for (var x = "", D = 0, N = A.length; D < N; D++)
                    A.charCodeAt(D) > 127 ? (x += "x") : (x += A[D]);
                  if (!x.match(p)) {
                    var q = j.slice(0, R),
                      M = j.slice(R + 1),
                      H = A.match(d);
                    H && (q.push(H[1]), M.unshift(H[2])),
                      M.length && (m = "/" + M.join(".") + m),
                      (this.hostname = q.join("."));
                    break;
                  }
                }
              }
            this.hostname.length > 255
              ? (this.hostname = "")
              : (this.hostname = this.hostname.toLowerCase()),
              I || (this.hostname = o.toASCII(this.hostname));
            var L = this.port ? ":" + this.port : "",
              F = this.hostname || "";
            (this.host = F + L),
              (this.href += this.host),
              I &&
                ((this.hostname = this.hostname.substr(
                  1,
                  this.hostname.length - 2,
                )),
                "/" !== m[0] && (m = "/" + m));
          }
          if (!h[w])
            for (var R = 0, P = l.length; R < P; R++) {
              var U = l[R];
              if (-1 !== m.indexOf(U)) {
                var W = encodeURIComponent(U);
                W === U && (W = escape(U)), (m = m.split(U).join(W));
              }
            }
          var B = m.indexOf("#");
          -1 !== B && ((this.hash = m.substr(B)), (m = m.slice(0, B)));
          var z = m.indexOf("?");
          if (
            (-1 !== z
              ? ((this.search = m.substr(z)),
                (this.query = m.substr(z + 1)),
                t && (this.query = b.parse(this.query)),
                (m = m.slice(0, z)))
              : t && ((this.search = ""), (this.query = {})),
            m && (this.pathname = m),
            y[w] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search)
          ) {
            var L = this.pathname || "",
              G = this.search || "";
            this.path = L + G;
          }
          return (this.href = this.format()), this;
        }),
          (i.prototype.format = function () {
            var e = this.auth || "";
            e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":") + "@");
            var t = this.protocol || "",
              n = this.pathname || "",
              o = this.hash || "",
              i = !1,
              a = "";
            this.host
              ? (i = e + this.host)
              : this.hostname &&
                ((i =
                  e +
                  (-1 === this.hostname.indexOf(":")
                    ? this.hostname
                    : "[" + this.hostname + "]")),
                this.port && (i += ":" + this.port)),
              this.query &&
                "object" === r(this.query) &&
                Object.keys(this.query).length &&
                (a = b.stringify(this.query, {
                  arrayFormat: "repeat",
                  addQueryPrefix: !1,
                }));
            var c = this.search || (a && "?" + a) || "";
            return (
              t && ":" !== t.substr(-1) && (t += ":"),
              this.slashes || ((!t || y[t]) && !1 !== i)
                ? ((i = "//" + (i || "")),
                  n && "/" !== n.charAt(0) && (n = "/" + n))
                : i || (i = ""),
              o && "#" !== o.charAt(0) && (o = "#" + o),
              c && "?" !== c.charAt(0) && (c = "?" + c),
              t +
                i +
                (n = n.replace(/[?#]/g, function (e) {
                  return encodeURIComponent(e);
                })) +
                (c = c.replace("#", "%23")) +
                o
            );
          }),
          (i.prototype.resolve = function (e) {
            return this.resolveObject(v(e, !1, !0)).format();
          }),
          (i.prototype.resolveObject = function (e) {
            if ("string" == typeof e) {
              var t = new i();
              t.parse(e, !1, !0), (e = t);
            }
            for (
              var n = new i(), r = Object.keys(this), o = 0;
              o < r.length;
              o++
            ) {
              var a = r[o];
              n[a] = this[a];
            }
            if (((n.hash = e.hash), "" === e.href))
              return (n.href = n.format()), n;
            if (e.slashes && !e.protocol) {
              for (var c = Object.keys(e), s = 0; s < c.length; s++) {
                var l = c[s];
                "protocol" !== l && (n[l] = e[l]);
              }
              return (
                y[n.protocol] &&
                  n.hostname &&
                  !n.pathname &&
                  ((n.pathname = "/"), (n.path = n.pathname)),
                (n.href = n.format()),
                n
              );
            }
            if (e.protocol && e.protocol !== n.protocol) {
              if (!y[e.protocol]) {
                for (var u = Object.keys(e), f = 0; f < u.length; f++) {
                  var p = u[f];
                  n[p] = e[p];
                }
                return (n.href = n.format()), n;
              }
              if (((n.protocol = e.protocol), e.host || g[e.protocol]))
                n.pathname = e.pathname;
              else {
                for (
                  var d = (e.pathname || "").split("/");
                  d.length && !(e.host = d.shift());

                );
                e.host || (e.host = ""),
                  e.hostname || (e.hostname = ""),
                  "" !== d[0] && d.unshift(""),
                  d.length < 2 && d.unshift(""),
                  (n.pathname = d.join("/"));
              }
              if (
                ((n.search = e.search),
                (n.query = e.query),
                (n.host = e.host || ""),
                (n.auth = e.auth),
                (n.hostname = e.hostname || e.host),
                (n.port = e.port),
                n.pathname || n.search)
              ) {
                var h = n.pathname || "",
                  b = n.search || "";
                n.path = h + b;
              }
              return (
                (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n
              );
            }
            var v = n.pathname && "/" === n.pathname.charAt(0),
              m = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
              S = m || v || (n.host && e.pathname),
              _ = S,
              w = (n.pathname && n.pathname.split("/")) || [],
              d = (e.pathname && e.pathname.split("/")) || [],
              C = n.protocol && !y[n.protocol];
            if (
              (C &&
                ((n.hostname = ""),
                (n.port = null),
                n.host && ("" === w[0] ? (w[0] = n.host) : w.unshift(n.host)),
                (n.host = ""),
                e.protocol &&
                  ((e.hostname = null),
                  (e.port = null),
                  e.host && ("" === d[0] ? (d[0] = e.host) : d.unshift(e.host)),
                  (e.host = null)),
                (S = S && ("" === d[0] || "" === w[0]))),
              m)
            )
              (n.host = e.host || "" === e.host ? e.host : n.host),
                (n.hostname =
                  e.hostname || "" === e.hostname ? e.hostname : n.hostname),
                (n.search = e.search),
                (n.query = e.query),
                (w = d);
            else if (d.length)
              w || (w = []),
                w.pop(),
                (w = w.concat(d)),
                (n.search = e.search),
                (n.query = e.query);
            else if (null != e.search) {
              if (C) {
                (n.host = w.shift()), (n.hostname = n.host);
                var E =
                  !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                E &&
                  ((n.auth = E.shift()),
                  (n.hostname = E.shift()),
                  (n.host = n.hostname));
              }
              return (
                (n.search = e.search),
                (n.query = e.query),
                (null !== n.pathname || null !== n.search) &&
                  (n.path =
                    (n.pathname ? n.pathname : "") +
                    (n.search ? n.search : "")),
                (n.href = n.format()),
                n
              );
            }
            if (!w.length)
              return (
                (n.pathname = null),
                n.search ? (n.path = "/" + n.search) : (n.path = null),
                (n.href = n.format()),
                n
              );
            for (
              var k = w.slice(-1)[0],
                T =
                  ((n.host || e.host || w.length > 1) &&
                    ("." === k || ".." === k)) ||
                  "" === k,
                R = 0,
                O = w.length;
              O >= 0;
              O--
            )
              "." === (k = w[O])
                ? w.splice(O, 1)
                : ".." === k
                  ? (w.splice(O, 1), R++)
                  : R && (w.splice(O, 1), R--);
            if (!S && !_) for (; R--; R) w.unshift("..");
            S &&
              "" !== w[0] &&
              (!w[0] || "/" !== w[0].charAt(0)) &&
              w.unshift(""),
              T && "/" !== w.join("/").substr(-1) && w.push("");
            var I = "" === w[0] || (w[0] && "/" === w[0].charAt(0));
            if (C) {
              (n.hostname = I ? "" : w.length ? w.shift() : ""),
                (n.host = n.hostname);
              var E =
                !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
              E &&
                ((n.auth = E.shift()),
                (n.hostname = E.shift()),
                (n.host = n.hostname));
            }
            return (
              (S = S || (n.host && w.length)) && !I && w.unshift(""),
              w.length > 0
                ? (n.pathname = w.join("/"))
                : ((n.pathname = null), (n.path = null)),
              (null !== n.pathname || null !== n.search) &&
                (n.path =
                  (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
              (n.auth = e.auth || n.auth),
              (n.slashes = n.slashes || e.slashes),
              (n.href = n.format()),
              n
            );
          }),
          (i.prototype.parseHost = function () {
            var e = this.host,
              t = c.exec(e);
            t &&
              (":" !== (t = t[0]) && (this.port = t.substr(1)),
              (e = e.substr(0, e.length - t.length))),
              e && (this.hostname = e);
          }),
          (t.parse = v),
          (t.resolve = function (e, t) {
            return v(e, !1, !0).resolve(t);
          }),
          (t.format = function (e) {
            return ("string" == typeof e && (e = v(e)), e instanceof i)
              ? e.format()
              : i.prototype.format.call(e);
          });
      },
      135: function () {
        !(function () {
          "use strict";
          if (
            $.signalR &&
            ("2.2.0" === $.signalR.version || "2.2.2" === $.signalR.version)
          ) {
            var e = $.signalR.transports.webSockets.abort;
            $.signalR.transports.webSockets.abort = function (t, n) {
              e(t, !0);
            };
            var t = $.signalR.transports.longPolling.abort;
            $.signalR.transports.longPolling.abort = function (e, n) {
              t(e, !0);
            };
          }
        })();
      },
      679: function () {
        var e,
          t,
          n,
          r,
          o,
          i,
          a,
          c,
          s,
          l,
          u,
          f,
          p,
          d,
          h,
          g,
          y,
          b,
          v,
          m,
          S,
          _,
          w,
          C,
          E,
          k,
          T,
          R,
          O,
          I;
        !(
          /*!
           * ASP.NET SignalR JavaScript Library v2.2.2
           * http://signalr.net/
           *
           * Copyright (c) .NET Foundation. All rights reserved.
           * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
           *
           */ (function (e, t, n) {
            var r,
              o,
              i = {
                nojQuery:
                  "jQuery was not found. Please ensure jQuery is referenced before the SignalR client JavaScript file.",
                noTransportOnInit:
                  "No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization.",
                errorOnNegotiate: "Error during negotiation request.",
                stoppedWhileLoading:
                  "The connection was stopped during page load.",
                stoppedWhileNegotiating:
                  "The connection was stopped during the negotiate request.",
                errorParsingNegotiateResponse:
                  "Error parsing negotiate response.",
                errorDuringStartRequest:
                  "Error during start request. Stopping the connection.",
                stoppedDuringStartRequest:
                  "The connection was stopped during the start request.",
                errorParsingStartResponse:
                  "Error parsing start response: '{0}'. Stopping the connection.",
                invalidStartResponse:
                  "Invalid start response: '{0}'. Stopping the connection.",
                protocolIncompatible:
                  "You are using a version of the client that isn't compatible with the server. Client version {0}, server version {1}.",
                sendFailed: "Send failed.",
                parseFailed: "Failed at parsing response: {0}",
                longPollFailed: "Long polling request failed.",
                eventSourceFailedToConnect: "EventSource failed to connect.",
                eventSourceError: "Error raised by EventSource",
                webSocketClosed: "WebSocket closed.",
                pingServerFailedInvalidResponse:
                  "Invalid ping response when pinging server: '{0}'.",
                pingServerFailed: "Failed to ping server.",
                pingServerFailedStatusCode:
                  "Failed to ping server.  Server responded with status code {0}, stopping the connection.",
                pingServerFailedParse:
                  "Failed to parse ping server response, stopping the connection.",
                noConnectionTransport:
                  "Connection is in an invalid state, there is no transport active.",
                webSocketsInvalidState:
                  "The Web Socket transport is in an invalid state, transitioning into reconnecting.",
                reconnectTimeout:
                  "Couldn't reconnect within the configured timeout of {0} ms, disconnecting.",
                reconnectWindowTimeout:
                  "The client has been inactive since {0} and it has exceeded the inactivity timeout of {1} ms. Stopping the connection.",
              };
            if ("function" != typeof e) throw Error(i.nojQuery);
            var a,
              c,
              s = "complete" === t.document.readyState,
              l = e(t),
              u = "__Negotiate Aborted__",
              f = {
                onStart: "onStart",
                onStarting: "onStarting",
                onReceived: "onReceived",
                onError: "onError",
                onConnectionSlow: "onConnectionSlow",
                onReconnecting: "onReconnecting",
                onReconnect: "onReconnect",
                onStateChanged: "onStateChanged",
                onDisconnect: "onDisconnect",
              },
              p = function (e, n) {
                var r;
                !1 !== n &&
                  void 0 !== t.console &&
                  ((r = "[" + new Date().toTimeString() + "] SignalR: " + e),
                  t.console.debug
                    ? t.console.debug(r)
                    : t.console.log && t.console.log(r));
              },
              d = function (t, n, r) {
                return (
                  n === t.state &&
                  ((t.state = r),
                  e(t).triggerHandler(f.onStateChanged, [
                    { oldState: n, newState: r },
                  ]),
                  !0)
                );
              },
              h = function (e) {
                return (
                  e._.keepAliveData.activated &&
                  e.transport.supportsKeepAlive(e)
                );
              },
              g = function (n) {
                var r, o;
                n._.configuredStopReconnectingTimeout ||
                  ((o = function (t) {
                    var n = a._.format(
                      a.resources.reconnectTimeout,
                      t.disconnectTimeout,
                    );
                    t.log(n),
                      e(t).triggerHandler(f.onError, [
                        a._.error(n, "TimeoutException"),
                      ]),
                      t.stop(!1, !1);
                  }),
                  n.reconnecting(function () {
                    var e = this;
                    e.state === a.connectionState.reconnecting &&
                      (r = t.setTimeout(function () {
                        o(e);
                      }, e.disconnectTimeout));
                  }),
                  n.stateChanged(function (e) {
                    e.oldState === a.connectionState.reconnecting &&
                      t.clearTimeout(r);
                  }),
                  (n._.configuredStopReconnectingTimeout = !0));
              };
            function y(e, t) {
              return t.match(/:\d+$/)
                ? t
                : t +
                    ":" +
                    ("http:" === e ? 80 : "https:" === e ? 443 : void 0);
            }
            function b(t, n) {
              var r = [];
              (this.tryBuffer = function (n) {
                return (
                  t.state === e.signalR.connectionState.connecting &&
                  (r.push(n), !0)
                );
              }),
                (this.drain = function () {
                  if (t.state === e.signalR.connectionState.connected)
                    for (; r.length > 0; ) n(r.shift());
                }),
                (this.clear = function () {
                  r = [];
                });
            }
            ((a = function (e, t, n) {
              return new a.fn.init(e, t, n);
            })._ = {
              defaultContentType:
                "application/x-www-form-urlencoded; charset=UTF-8",
              ieVersion:
                ("Microsoft Internet Explorer" === t.navigator.appName &&
                  (o = /MSIE ([0-9]+\.[0-9]+)/.exec(t.navigator.userAgent)) &&
                  (r = t.parseFloat(o[1])),
                r),
              error: function (e, t, n) {
                var r = Error(e);
                return (r.source = t), void 0 !== n && (r.context = n), r;
              },
              transportError: function (e, t, r, o) {
                var i = this.error(e, r, o);
                return (i.transport = t ? t.name : n), i;
              },
              format: function () {
                for (var e = arguments[0], t = 0; t < arguments.length - 1; t++)
                  e = e.replace("{" + t + "}", arguments[t + 1]);
                return e;
              },
              firefoxMajorVersion: function (e) {
                var t = e.match(/Firefox\/(\d+)/);
                return t && t.length && !(t.length < 2)
                  ? parseInt(t[1], 10)
                  : 0;
              },
              configurePingInterval: function (n) {
                var r = n._.config,
                  o = function (t) {
                    e(n).triggerHandler(f.onError, [t]);
                  };
                r &&
                  !n._.pingIntervalId &&
                  r.pingInterval &&
                  (n._.pingIntervalId = t.setInterval(function () {
                    a.transports._logic.pingServer(n).fail(o);
                  }, r.pingInterval));
              },
            }),
              (a.events = f),
              (a.resources = i),
              (a.ajaxDefaults = {
                processData: !0,
                timeout: null,
                async: !0,
                global: !1,
                cache: !1,
              }),
              (a.changeState = d),
              (a.isDisconnecting = function (e) {
                return e.state === a.connectionState.disconnected;
              }),
              (a.connectionState = {
                connecting: 0,
                connected: 1,
                reconnecting: 2,
                disconnected: 4,
              }),
              (a.hub = {
                start: function () {
                  throw Error(
                    "SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/js'><\/script>.",
                  );
                },
              }),
              "function" == typeof l.on
                ? l.on("load", function () {
                    s = !0;
                  })
                : l.load(function () {
                    s = !0;
                  }),
              (a.fn = a.prototype =
                {
                  init: function (t, n, r) {
                    var o = e(this);
                    (this.url = t),
                      (this.qs = n),
                      (this.lastError = null),
                      (this._ = {
                        keepAliveData: {},
                        connectingMessageBuffer: new b(this, function (e) {
                          o.triggerHandler(f.onReceived, [e]);
                        }),
                        lastMessageAt: new Date().getTime(),
                        lastActiveAt: new Date().getTime(),
                        beatInterval: 5e3,
                        beatHandle: null,
                        totalTransportConnectTimeout: 0,
                      }),
                      "boolean" == typeof r && (this.logging = r);
                  },
                  _parseResponse: function (e) {
                    return e && "string" == typeof e ? this.json.parse(e) : e;
                  },
                  _originalJson: t.JSON,
                  json: t.JSON,
                  isCrossDomain: function (n, r) {
                    var o;
                    return (
                      (n = e.trim(n)),
                      (r = r || t.location),
                      0 === n.indexOf("http") &&
                        (((o = t.document.createElement("a")).href = n),
                        o.protocol + y(o.protocol, o.host) !==
                          r.protocol + y(r.protocol, r.host))
                    );
                  },
                  ajaxDataType: "text",
                  contentType: "application/json; charset=UTF-8",
                  logging: !1,
                  state: a.connectionState.disconnected,
                  clientProtocol: "1.5",
                  reconnectDelay: 2e3,
                  transportConnectTimeout: 0,
                  disconnectTimeout: 3e4,
                  reconnectWindow: 3e4,
                  keepAliveWarnAt: 2 / 3,
                  start: function (n, r) {
                    var o,
                      c = this,
                      p = {
                        pingInterval: 3e5,
                        waitForPageLoad: !0,
                        transport: "auto",
                        jsonp: !1,
                      },
                      y = c._deferral || e.Deferred(),
                      b = t.document.createElement("a");
                    if (((c.lastError = null), (c._deferral = y), !c.json))
                      throw Error(
                        "SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.",
                      );
                    if (
                      ("function" === e.type(n)
                        ? (r = n)
                        : "object" === e.type(n) &&
                          (e.extend(p, n),
                          "function" === e.type(p.callback) &&
                            (r = p.callback)),
                      (p.transport = (function (t, n) {
                        if (e.isArray(t)) {
                          for (var r = t.length - 1; r >= 0; r--) {
                            var o = t[r];
                            ("string" === e.type(o) && a.transports[o]) ||
                              (n.log(
                                "Invalid transport: " +
                                  o +
                                  ", removing it from the transports list.",
                              ),
                              t.splice(r, 1));
                          }
                          0 === t.length &&
                            (n.log(
                              "No transports remain within the specified transport array.",
                            ),
                            (t = null));
                        } else if (a.transports[t] || "auto" === t) {
                          if ("auto" === t && a._.ieVersion <= 8)
                            return ["longPolling"];
                        } else
                          n.log("Invalid transport: " + t.toString() + "."),
                            (t = null);
                        return t;
                      })(p.transport, c)),
                      !p.transport)
                    )
                      throw Error(
                        "SignalR: Invalid transport(s) specified, aborting start.",
                      );
                    if (((c._.config = p), !s && !0 === p.waitForPageLoad))
                      return (
                        (c._.deferredStartHandler = function () {
                          c.start(n, r);
                        }),
                        l.bind("load", c._.deferredStartHandler),
                        y.promise()
                      );
                    if (c.state === a.connectionState.connecting)
                      return y.promise();
                    if (
                      !1 ===
                      d(
                        c,
                        a.connectionState.disconnected,
                        a.connectionState.connecting,
                      )
                    )
                      return y.resolve(c), y.promise();
                    g(c),
                      (b.href = c.url),
                      b.protocol && ":" !== b.protocol
                        ? ((c.protocol = b.protocol), (c.host = b.host))
                        : ((c.protocol = t.document.location.protocol),
                          (c.host = b.host || t.document.location.host)),
                      (c.baseUrl = c.protocol + "//" + c.host),
                      (c.wsProtocol =
                        "https:" === c.protocol ? "wss://" : "ws://"),
                      "auto" === p.transport &&
                        !0 === p.jsonp &&
                        (p.transport = "longPolling"),
                      0 === c.url.indexOf("//") &&
                        ((c.url = t.location.protocol + c.url),
                        c.log(
                          "Protocol relative URL detected, normalizing it to '" +
                            c.url +
                            "'.",
                        )),
                      this.isCrossDomain(c.url) &&
                        (c.log("Auto detected cross domain url."),
                        "auto" === p.transport &&
                          (p.transport = [
                            "webSockets",
                            "serverSentEvents",
                            "longPolling",
                          ]),
                        void 0 === p.withCredentials &&
                          (p.withCredentials = !0),
                        !p.jsonp &&
                          ((p.jsonp = !e.support.cors),
                          p.jsonp &&
                            c.log(
                              "Using jsonp because this browser doesn't support CORS.",
                            )),
                        (c.contentType = a._.defaultContentType)),
                      (c.withCredentials = p.withCredentials),
                      (c.ajaxDataType = p.jsonp ? "jsonp" : "text"),
                      e(c).bind(f.onStart, function (t, n) {
                        "function" === e.type(r) && r.call(c), y.resolve(c);
                      }),
                      (c._.initHandler = a.transports._logic.initHandler(c)),
                      (o = function (n, r) {
                        var s = a._.error(i.noTransportOnInit);
                        if ((r = r || 0) >= n.length) {
                          0 === r
                            ? c.log(
                                "No transports supported by the server were selected.",
                              )
                            : 1 === r
                              ? c.log("No fallback transports were selected.")
                              : c.log("Fallback transports exhausted."),
                            e(c).triggerHandler(f.onError, [s]),
                            y.reject(s),
                            c.stop();
                          return;
                        }
                        if (c.state !== a.connectionState.disconnected) {
                          var u = n[r],
                            p = a.transports[u],
                            g = function () {
                              o(n, r + 1);
                            };
                          c.transport = p;
                          try {
                            c._.initHandler.start(
                              p,
                              function () {
                                var n =
                                    a._.firefoxMajorVersion(
                                      t.navigator.userAgent,
                                    ) >= 11,
                                  r = !!c.withCredentials && n;
                                c.log(
                                  "The start request succeeded. Transitioning to the connected state.",
                                ),
                                  h(c) &&
                                    a.transports._logic.monitorKeepAlive(c),
                                  a.transports._logic.startHeartbeat(c),
                                  a._.configurePingInterval(c),
                                  d(
                                    c,
                                    a.connectionState.connecting,
                                    a.connectionState.connected,
                                  ) ||
                                    c.log(
                                      "WARNING! The connection was not in the connecting state.",
                                    ),
                                  c._.connectingMessageBuffer.drain(),
                                  e(c).triggerHandler(f.onStart),
                                  l.bind("unload", function () {
                                    c.log(
                                      "Window unloading, stopping the connection.",
                                    ),
                                      c.stop(r);
                                  }),
                                  n &&
                                    l.bind("beforeunload", function () {
                                      t.setTimeout(function () {
                                        c.stop(r);
                                      }, 0);
                                    });
                              },
                              g,
                            );
                          } catch (e) {
                            c.log(
                              p.name +
                                " transport threw '" +
                                e.message +
                                "' when attempting to start.",
                            ),
                              g();
                          }
                        }
                      });
                    var v = c.url + "/negotiate",
                      m = function (t, n) {
                        var r = a._.error(
                          i.errorOnNegotiate,
                          t,
                          n._.negotiateRequest,
                        );
                        e(n).triggerHandler(f.onError, r),
                          y.reject(r),
                          n.stop();
                      };
                    return (
                      e(c).triggerHandler(f.onStarting),
                      (v = a.transports._logic.prepareQueryString(c, v)),
                      c.log("Negotiating with '" + v + "'."),
                      (c._.negotiateRequest = a.transports._logic.ajax(c, {
                        url: v,
                        error: function (e, t) {
                          t !== u
                            ? m(e, c)
                            : y.reject(
                                a._.error(
                                  i.stoppedWhileNegotiating,
                                  null,
                                  c._.negotiateRequest,
                                ),
                              );
                        },
                        success: function (t) {
                          var n,
                            r,
                            s,
                            l = [],
                            u = [];
                          try {
                            n = c._parseResponse(t);
                          } catch (e) {
                            m(a._.error(i.errorParsingNegotiateResponse, e), c);
                            return;
                          }
                          if (
                            ((r = c._.keepAliveData),
                            (c.appRelativeUrl = n.Url),
                            (c.id = n.ConnectionId),
                            (c.token = n.ConnectionToken),
                            (c.webSocketServerUrl = n.WebSocketServerUrl),
                            (c._.pollTimeout = 1e3 * n.ConnectionTimeout + 1e4),
                            (c.disconnectTimeout = 1e3 * n.DisconnectTimeout),
                            (c._.totalTransportConnectTimeout =
                              c.transportConnectTimeout +
                              1e3 * n.TransportConnectTimeout),
                            n.KeepAliveTimeout
                              ? ((r.activated = !0),
                                (r.timeout = 1e3 * n.KeepAliveTimeout),
                                (r.timeoutWarning =
                                  r.timeout * c.keepAliveWarnAt),
                                (c._.beatInterval =
                                  (r.timeout - r.timeoutWarning) / 3))
                              : (r.activated = !1),
                            (c.reconnectWindow =
                              c.disconnectTimeout + (r.timeout || 0)),
                            !n.ProtocolVersion ||
                              n.ProtocolVersion !== c.clientProtocol)
                          ) {
                            (s = a._.error(
                              a._.format(
                                i.protocolIncompatible,
                                c.clientProtocol,
                                n.ProtocolVersion,
                              ),
                            )),
                              e(c).triggerHandler(f.onError, [s]),
                              y.reject(s);
                            return;
                          }
                          e.each(a.transports, function (e) {
                            if (
                              0 === e.indexOf("_") ||
                              ("webSockets" === e && !n.TryWebSockets)
                            )
                              return !0;
                            u.push(e);
                          }),
                            e.isArray(p.transport)
                              ? e.each(p.transport, function (t, n) {
                                  e.inArray(n, u) >= 0 && l.push(n);
                                })
                              : "auto" === p.transport
                                ? (l = u)
                                : e.inArray(p.transport, u) >= 0 &&
                                  l.push(p.transport),
                            o(l);
                        },
                      })),
                      y.promise()
                    );
                  },
                  starting: function (t) {
                    var n = this;
                    return (
                      e(n).bind(f.onStarting, function (e, r) {
                        t.call(n);
                      }),
                      n
                    );
                  },
                  send: function (e) {
                    if (this.state === a.connectionState.disconnected)
                      throw Error(
                        "SignalR: Connection must be started before data can be sent. Call .start() before .send()",
                      );
                    if (this.state === a.connectionState.connecting)
                      throw Error(
                        "SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started.",
                      );
                    return this.transport.send(this, e), this;
                  },
                  received: function (t) {
                    var n = this;
                    return (
                      e(n).bind(f.onReceived, function (e, r) {
                        t.call(n, r);
                      }),
                      n
                    );
                  },
                  stateChanged: function (t) {
                    var n = this;
                    return (
                      e(n).bind(f.onStateChanged, function (e, r) {
                        t.call(n, r);
                      }),
                      n
                    );
                  },
                  error: function (t) {
                    var n = this;
                    return (
                      e(n).bind(f.onError, function (e, r, o) {
                        (n.lastError = r), t.call(n, r, o);
                      }),
                      n
                    );
                  },
                  disconnected: function (t) {
                    var n = this;
                    return (
                      e(n).bind(f.onDisconnect, function (e, r) {
                        t.call(n);
                      }),
                      n
                    );
                  },
                  connectionSlow: function (t) {
                    var n = this;
                    return (
                      e(n).bind(f.onConnectionSlow, function (e, r) {
                        t.call(n);
                      }),
                      n
                    );
                  },
                  reconnecting: function (t) {
                    var n = this;
                    return (
                      e(n).bind(f.onReconnecting, function (e, r) {
                        t.call(n);
                      }),
                      n
                    );
                  },
                  reconnected: function (t) {
                    var n = this;
                    return (
                      e(n).bind(f.onReconnect, function (e, r) {
                        t.call(n);
                      }),
                      n
                    );
                  },
                  stop: function (n, r) {
                    var o = this._deferral;
                    if (
                      (this._.deferredStartHandler &&
                        l.unbind("load", this._.deferredStartHandler),
                      delete this._.config,
                      delete this._.deferredStartHandler,
                      !s &&
                        (!this._.config ||
                          !0 === this._.config.waitForPageLoad))
                    ) {
                      this.log("Stopping connection prior to negotiate."),
                        o && o.reject(a._.error(i.stoppedWhileLoading));
                      return;
                    }
                    if (this.state !== a.connectionState.disconnected)
                      return (
                        this.log("Stopping connection."),
                        t.clearTimeout(this._.beatHandle),
                        t.clearInterval(this._.pingIntervalId),
                        this.transport &&
                          (this.transport.stop(this),
                          !1 !== r && this.transport.abort(this, n),
                          h(this) &&
                            a.transports._logic.stopMonitoringKeepAlive(this),
                          (this.transport = null)),
                        this._.negotiateRequest &&
                          (this._.negotiateRequest.abort(u),
                          delete this._.negotiateRequest),
                        this._.initHandler && this._.initHandler.stop(),
                        delete this._deferral,
                        delete this.messageId,
                        delete this.groupsToken,
                        delete this.id,
                        delete this._.pingIntervalId,
                        delete this._.lastMessageAt,
                        delete this._.lastActiveAt,
                        this._.connectingMessageBuffer.clear(),
                        e(this).unbind(f.onStart),
                        d(this, this.state, a.connectionState.disconnected),
                        e(this).triggerHandler(f.onDisconnect),
                        this
                      );
                  },
                  log: function (e) {
                    p(e, this.logging);
                  },
                }),
              (a.fn.init.prototype = a.fn),
              (a.noConflict = function () {
                return e.connection === a && (e.connection = c), a;
              }),
              e.connection && (c = e.connection),
              (e.connection = e.signalR = a);
          })(window.jQuery, window)
        ),
          (function (e, t, n) {
            var r,
              o = e.signalR,
              i = e.signalR.events,
              a = e.signalR.changeState,
              c = "__Start Aborted__";
            function s(e, t) {
              var n = e.url + t;
              return (
                e.transport && (n += "?transport=" + e.transport.name),
                r.prepareQueryString(e, n)
              );
            }
            function l(e) {
              (this.connection = e),
                (this.startRequested = !1),
                (this.startCompleted = !1),
                (this.connectionStopped = !1);
            }
            (o.transports = {}),
              (l.prototype = {
                start: function (e, n, r) {
                  var o = this,
                    i = o.connection,
                    a = !1;
                  if (o.startRequested || o.connectionStopped) {
                    i.log(
                      "WARNING! " +
                        e.name +
                        " transport cannot be started. Initialization ongoing or completed.",
                    );
                    return;
                  }
                  i.log(e.name + " transport starting."),
                    e.start(
                      i,
                      function () {
                        a || o.initReceived(e, n);
                      },
                      function (t) {
                        return (
                          a || ((a = !0), o.transportFailed(e, t, r)),
                          !o.startCompleted || o.connectionStopped
                        );
                      },
                    ),
                    (o.transportTimeoutHandle = t.setTimeout(function () {
                      a ||
                        ((a = !0),
                        i.log(
                          e.name +
                            " transport timed out when trying to connect.",
                        ),
                        o.transportFailed(e, void 0, r));
                    }, i._.totalTransportConnectTimeout));
                },
                stop: function () {
                  (this.connectionStopped = !0),
                    t.clearTimeout(this.transportTimeoutHandle),
                    o.transports._logic.tryAbortStartRequest(this.connection);
                },
                initReceived: function (e, n) {
                  var r = this,
                    i = r.connection;
                  if (r.startRequested) {
                    i.log(
                      "WARNING! The client received multiple init messages.",
                    );
                    return;
                  }
                  !r.connectionStopped &&
                    ((r.startRequested = !0),
                    t.clearTimeout(r.transportTimeoutHandle),
                    i.log(
                      e.name +
                        " transport connected. Initiating start request.",
                    ),
                    o.transports._logic.ajaxStart(i, function () {
                      (r.startCompleted = !0), n();
                    }));
                },
                transportFailed: function (n, r, a) {
                  var c,
                    s = this.connection,
                    l = s._deferral;
                  !this.connectionStopped &&
                    (t.clearTimeout(this.transportTimeoutHandle),
                    this.startRequested
                      ? this.startCompleted ||
                        ((c = o._.error(
                          o.resources.errorDuringStartRequest,
                          r,
                        )),
                        s.log(
                          n.name +
                            " transport failed during the start request. Stopping the connection.",
                        ),
                        e(s).triggerHandler(i.onError, [c]),
                        l && l.reject(c),
                        s.stop())
                      : (n.stop(s),
                        s.log(
                          n.name +
                            " transport failed to connect. Attempting to fall back.",
                        ),
                        a()));
                },
              }),
              (r = o.transports._logic =
                {
                  ajax: function (t, n) {
                    return e.ajax(
                      e.extend(
                        !0,
                        {},
                        e.signalR.ajaxDefaults,
                        {
                          type: "GET",
                          data: {},
                          xhrFields: { withCredentials: t.withCredentials },
                          contentType: t.contentType,
                          dataType: t.ajaxDataType,
                        },
                        n,
                      ),
                    );
                  },
                  pingServer: function (t) {
                    var n,
                      i,
                      a = e.Deferred();
                    return (
                      t.transport
                        ? ((n = t.url + "/ping"),
                          (n = r.addQs(n, t.qs)),
                          (i = r.ajax(t, {
                            url: n,
                            success: function (e) {
                              var n;
                              try {
                                n = t._parseResponse(e);
                              } catch (e) {
                                a.reject(
                                  o._.transportError(
                                    o.resources.pingServerFailedParse,
                                    t.transport,
                                    e,
                                    i,
                                  ),
                                ),
                                  t.stop();
                                return;
                              }
                              "pong" === n.Response
                                ? a.resolve()
                                : a.reject(
                                    o._.transportError(
                                      o._.format(
                                        o.resources
                                          .pingServerFailedInvalidResponse,
                                        e,
                                      ),
                                      t.transport,
                                      null,
                                      i,
                                    ),
                                  );
                            },
                            error: function (e) {
                              401 === e.status || 403 === e.status
                                ? (a.reject(
                                    o._.transportError(
                                      o._.format(
                                        o.resources.pingServerFailedStatusCode,
                                        e.status,
                                      ),
                                      t.transport,
                                      e,
                                      i,
                                    ),
                                  ),
                                  t.stop())
                                : a.reject(
                                    o._.transportError(
                                      o.resources.pingServerFailed,
                                      t.transport,
                                      e,
                                      i,
                                    ),
                                  );
                            },
                          })))
                        : a.reject(
                            o._.transportError(
                              o.resources.noConnectionTransport,
                              t.transport,
                            ),
                          ),
                      a.promise()
                    );
                  },
                  prepareQueryString: function (e, n) {
                    var o;
                    return (
                      (o = r.addQs(n, "clientProtocol=" + e.clientProtocol)),
                      (o = r.addQs(o, e.qs)),
                      e.token &&
                        (o +=
                          "&connectionToken=" + t.encodeURIComponent(e.token)),
                      e.data &&
                        (o +=
                          "&connectionData=" + t.encodeURIComponent(e.data)),
                      o
                    );
                  },
                  addQs: function (t, n) {
                    var r,
                      o = -1 !== t.indexOf("?") ? "&" : "?";
                    if (!n) return t;
                    if (
                      (void 0 === n
                        ? "undefined"
                        : n &&
                            "undefined" != typeof Symbol &&
                            n.constructor === Symbol
                          ? "symbol"
                          : typeof n) == "object"
                    )
                      return t + o + e.param(n);
                    if ("string" == typeof n)
                      return (
                        ("?" === (r = n.charAt(0)) || "&" === r) && (o = ""),
                        t + o + n
                      );
                    throw Error(
                      "Query string property must be either a string or object.",
                    );
                  },
                  getUrl: function (e, n, o, i, a) {
                    var c =
                        ("webSockets" === n ? "" : e.baseUrl) +
                        e.appRelativeUrl,
                      s = "transport=" + n;
                    return (
                      !a &&
                        e.groupsToken &&
                        (s +=
                          "&groupsToken=" +
                          t.encodeURIComponent(e.groupsToken)),
                      o
                        ? (i ? (c += "/poll") : (c += "/reconnect"),
                          !a &&
                            e.messageId &&
                            (s +=
                              "&messageId=" +
                              t.encodeURIComponent(e.messageId)))
                        : (c += "/connect"),
                      (c += "?" + s),
                      (c = r.prepareQueryString(e, c)),
                      a || (c += "&tid=" + Math.floor(11 * Math.random())),
                      c
                    );
                  },
                  maximizePersistentResponse: function (e) {
                    return {
                      MessageId: e.C,
                      Messages: e.M,
                      Initialized: void 0 !== e.S,
                      ShouldReconnect: void 0 !== e.T,
                      LongPollDelay: e.L,
                      GroupsToken: e.G,
                    };
                  },
                  updateGroups: function (e, t) {
                    t && (e.groupsToken = t);
                  },
                  stringifySend: function (e, t) {
                    return "string" == typeof t || null == t
                      ? t
                      : e.json.stringify(t);
                  },
                  ajaxSend: function (t, n) {
                    var a,
                      c = r.stringifySend(t, n),
                      l = s(t, "/send"),
                      u = function (t, r) {
                        e(r).triggerHandler(i.onError, [
                          o._.transportError(
                            o.resources.sendFailed,
                            r.transport,
                            t,
                            a,
                          ),
                          n,
                        ]);
                      };
                    return (a = r.ajax(t, {
                      url: l,
                      type: "jsonp" === t.ajaxDataType ? "GET" : "POST",
                      contentType: o._.defaultContentType,
                      data: { data: c },
                      success: function (e) {
                        var n;
                        if (e) {
                          try {
                            n = t._parseResponse(e);
                          } catch (e) {
                            u(e, t), t.stop();
                            return;
                          }
                          r.triggerReceived(t, n);
                        }
                      },
                      error: function (e, n) {
                        "abort" !== n && "parsererror" !== n && u(e, t);
                      },
                    }));
                  },
                  ajaxAbort: function (e, t) {
                    if (void 0 !== e.transport) {
                      t = void 0 === t || t;
                      var n = s(e, "/abort");
                      r.ajax(e, {
                        url: n,
                        async: t,
                        timeout: 1e3,
                        type: "POST",
                      }),
                        e.log("Fired ajax abort async = " + t + ".");
                    }
                  },
                  ajaxStart: function (t, n) {
                    var a = function (e) {
                        var n = t._deferral;
                        n && n.reject(e);
                      },
                      l = function (n) {
                        t.log(
                          "The start request failed. Stopping the connection.",
                        ),
                          e(t).triggerHandler(i.onError, [n]),
                          a(n),
                          t.stop();
                      };
                    t._.startRequest = r.ajax(t, {
                      url: s(t, "/start"),
                      success: function (e, r, i) {
                        var a;
                        try {
                          a = t._parseResponse(e);
                        } catch (t) {
                          l(
                            o._.error(
                              o._.format(
                                o.resources.errorParsingStartResponse,
                                e,
                              ),
                              t,
                              i,
                            ),
                          );
                          return;
                        }
                        "started" === a.Response
                          ? n()
                          : l(
                              o._.error(
                                o._.format(o.resources.invalidStartResponse, e),
                                null,
                                i,
                              ),
                            );
                      },
                      error: function (e, n, r) {
                        n !== c
                          ? l(
                              o._.error(
                                o.resources.errorDuringStartRequest,
                                r,
                                e,
                              ),
                            )
                          : (t.log(
                              "The start request aborted because connection.stop() was called.",
                            ),
                            a(
                              o._.error(
                                o.resources.stoppedDuringStartRequest,
                                null,
                                e,
                              ),
                            ));
                      },
                    });
                  },
                  tryAbortStartRequest: function (e) {
                    e._.startRequest &&
                      (e._.startRequest.abort(c), delete e._.startRequest);
                  },
                  tryInitialize: function (e, t, n) {
                    t.Initialized && n
                      ? n()
                      : t.Initialized &&
                        e.log(
                          "WARNING! The client received an init message after reconnecting.",
                        );
                  },
                  triggerReceived: function (t, n) {
                    t._.connectingMessageBuffer.tryBuffer(n) ||
                      e(t).triggerHandler(i.onReceived, [n]);
                  },
                  processMessages: function (t, n, o) {
                    var i;
                    r.markLastMessage(t),
                      n &&
                        ((i = r.maximizePersistentResponse(n)),
                        r.updateGroups(t, i.GroupsToken),
                        i.MessageId && (t.messageId = i.MessageId),
                        i.Messages &&
                          (e.each(i.Messages, function (e, n) {
                            r.triggerReceived(t, n);
                          }),
                          r.tryInitialize(t, i, o)));
                  },
                  monitorKeepAlive: function (t) {
                    var n = t._.keepAliveData;
                    n.monitoring
                      ? t.log(
                          "Tried to monitor keep alive but it's already being monitored.",
                        )
                      : ((n.monitoring = !0),
                        r.markLastMessage(t),
                        (t._.keepAliveData.reconnectKeepAliveUpdate =
                          function () {
                            r.markLastMessage(t);
                          }),
                        e(t).bind(
                          i.onReconnect,
                          t._.keepAliveData.reconnectKeepAliveUpdate,
                        ),
                        t.log(
                          "Now monitoring keep alive with a warning timeout of " +
                            n.timeoutWarning +
                            ", keep alive timeout of " +
                            n.timeout +
                            " and disconnecting timeout of " +
                            t.disconnectTimeout,
                        ));
                  },
                  stopMonitoringKeepAlive: function (t) {
                    var n = t._.keepAliveData;
                    n.monitoring &&
                      ((n.monitoring = !1),
                      e(t).unbind(
                        i.onReconnect,
                        t._.keepAliveData.reconnectKeepAliveUpdate,
                      ),
                      (t._.keepAliveData = {}),
                      t.log("Stopping the monitoring of the keep alive."));
                  },
                  startHeartbeat: function (n) {
                    (n._.lastActiveAt = new Date().getTime()),
                      (function n(a) {
                        var c, s, l;
                        a._.keepAliveData.monitoring &&
                          ((l = (c = a)._.keepAliveData),
                          c.state !== o.connectionState.connected ||
                            ((s = new Date().getTime() - c._.lastMessageAt) >=
                            l.timeout
                              ? (c.log(
                                  "Keep alive timed out.  Notifying transport that connection has been lost.",
                                ),
                                c.transport.lostConnection(c))
                              : s >= l.timeoutWarning
                                ? l.userNotified ||
                                  (c.log(
                                    "Keep alive has been missed, connection may be dead/slow.",
                                  ),
                                  e(c).triggerHandler(i.onConnectionSlow),
                                  (l.userNotified = !0))
                                : (l.userNotified = !1))),
                          r.markActive(a) &&
                            (a._.beatHandle = t.setTimeout(function () {
                              n(a);
                            }, a._.beatInterval));
                      })(n);
                  },
                  markLastMessage: function (e) {
                    e._.lastMessageAt = new Date().getTime();
                  },
                  markActive: function (e) {
                    return (
                      !!r.verifyLastActive(e) &&
                      ((e._.lastActiveAt = new Date().getTime()), !0)
                    );
                  },
                  isConnectedOrReconnecting: function (e) {
                    return (
                      e.state === o.connectionState.connected ||
                      e.state === o.connectionState.reconnecting
                    );
                  },
                  ensureReconnectingState: function (t) {
                    return (
                      !0 ===
                        a(
                          t,
                          o.connectionState.connected,
                          o.connectionState.reconnecting,
                        ) && e(t).triggerHandler(i.onReconnecting),
                      t.state === o.connectionState.reconnecting
                    );
                  },
                  clearReconnectTimeout: function (e) {
                    e &&
                      e._.reconnectTimeout &&
                      (t.clearTimeout(e._.reconnectTimeout),
                      delete e._.reconnectTimeout);
                  },
                  verifyLastActive: function (t) {
                    if (
                      new Date().getTime() - t._.lastActiveAt >=
                      t.reconnectWindow
                    ) {
                      var n = o._.format(
                        o.resources.reconnectWindowTimeout,
                        new Date(t._.lastActiveAt),
                        t.reconnectWindow,
                      );
                      return (
                        t.log(n),
                        e(t).triggerHandler(i.onError, [
                          o._.error(n, "TimeoutException"),
                        ]),
                        t.stop(!1, !1),
                        !1
                      );
                    }
                    return !0;
                  },
                  reconnect: function (e, n) {
                    var i = o.transports[n];
                    if (
                      r.isConnectedOrReconnecting(e) &&
                      !e._.reconnectTimeout
                    ) {
                      if (!r.verifyLastActive(e)) return;
                      e._.reconnectTimeout = t.setTimeout(function () {
                        r.verifyLastActive(e) &&
                          (i.stop(e),
                          r.ensureReconnectingState(e) &&
                            (e.log(n + " reconnecting."), i.start(e)));
                      }, e.reconnectDelay);
                    }
                  },
                  handleParseFailure: function (t, n, r, a, c) {
                    var s = o._.transportError(
                      o._.format(o.resources.parseFailed, n),
                      t.transport,
                      r,
                      c,
                    );
                    a && a(s)
                      ? t.log(
                          "Failed to parse server response while attempting to connect.",
                        )
                      : (e(t).triggerHandler(i.onError, [s]), t.stop());
                  },
                  initHandler: function (e) {
                    return new l(e);
                  },
                  foreverFrame: { count: 0, connections: {} },
                });
          })(window.jQuery, window),
          (e = window.jQuery),
          (t = window),
          (n = e.signalR),
          (r = e.signalR.events),
          (o = e.signalR.changeState),
          (i = n.transports._logic),
          (n.transports.webSockets = {
            name: "webSockets",
            supportsKeepAlive: function () {
              return !0;
            },
            send: function (t, o) {
              var a = i.stringifySend(t, o);
              try {
                t.socket.send(a);
              } catch (i) {
                e(t).triggerHandler(r.onError, [
                  n._.transportError(
                    n.resources.webSocketsInvalidState,
                    t.transport,
                    i,
                    t.socket,
                  ),
                  o,
                ]);
              }
            },
            start: function (a, c, s) {
              var l,
                u = !1,
                f = this,
                p = e(a);
              if (!t.WebSocket) {
                s();
                return;
              }
              a.socket ||
                ((l =
                  (a.webSocketServerUrl
                    ? a.webSocketServerUrl
                    : a.wsProtocol + a.host) + i.getUrl(a, this.name, !c)),
                a.log("Connecting to websocket endpoint '" + l + "'."),
                (a.socket = new t.WebSocket(l)),
                (a.socket.onopen = function () {
                  (u = !0),
                    a.log("Websocket opened."),
                    i.clearReconnectTimeout(a),
                    !0 ===
                      o(
                        a,
                        n.connectionState.reconnecting,
                        n.connectionState.connected,
                      ) && p.triggerHandler(r.onReconnect);
                }),
                (a.socket.onclose = function (t) {
                  var o;
                  this !== a.socket ||
                    (u && void 0 !== t.wasClean && !1 === t.wasClean
                      ? ((o = n._.transportError(
                          n.resources.webSocketClosed,
                          a.transport,
                          t,
                        )),
                        a.log(
                          "Unclean disconnect from websocket: " +
                            (t.reason || "[no reason given]."),
                        ))
                      : a.log("Websocket closed."),
                    (s && s(o)) ||
                      (o && e(a).triggerHandler(r.onError, [o]),
                      f.reconnect(a)));
                }),
                (a.socket.onmessage = function (t) {
                  var n;
                  try {
                    n = a._parseResponse(t.data);
                  } catch (e) {
                    i.handleParseFailure(a, t.data, e, s, t);
                    return;
                  }
                  n &&
                    (e.isEmptyObject(n) || n.M
                      ? i.processMessages(a, n, c)
                      : i.triggerReceived(a, n));
                }));
            },
            reconnect: function (e) {
              i.reconnect(e, this.name);
            },
            lostConnection: function (e) {
              this.reconnect(e);
            },
            stop: function (e) {
              i.clearReconnectTimeout(e),
                e.socket &&
                  (e.log("Closing the Websocket."),
                  e.socket.close(),
                  (e.socket = null));
            },
            abort: function (e, t) {
              i.ajaxAbort(e, t);
            },
          }),
          (a = window.jQuery),
          (c = window),
          (s = a.signalR),
          (l = a.signalR.events),
          (u = a.signalR.changeState),
          (f = s.transports._logic),
          (p = function (e) {
            c.clearTimeout(e._.reconnectAttemptTimeoutHandle),
              delete e._.reconnectAttemptTimeoutHandle;
          }),
          (s.transports.serverSentEvents = {
            name: "serverSentEvents",
            supportsKeepAlive: function () {
              return !0;
            },
            timeOut: 3e3,
            start: function (e, t, n) {
              var r,
                o = this,
                i = !1,
                d = a(e),
                h = !t;
              if (
                (e.eventSource &&
                  (e.log(
                    "The connection already has an event source. Stopping it.",
                  ),
                  e.stop()),
                !c.EventSource)
              ) {
                n && (e.log("This browser doesn't support SSE."), n());
                return;
              }
              r = f.getUrl(e, this.name, h);
              try {
                e.log("Attempting to connect to SSE endpoint '" + r + "'."),
                  (e.eventSource = new c.EventSource(r, {
                    withCredentials: e.withCredentials,
                  }));
              } catch (t) {
                e.log(
                  "EventSource failed trying to connect with error " +
                    t.Message +
                    ".",
                ),
                  n
                    ? n()
                    : (d.triggerHandler(l.onError, [
                        s._.transportError(
                          s.resources.eventSourceFailedToConnect,
                          e.transport,
                          t,
                        ),
                      ]),
                      h && o.reconnect(e));
                return;
              }
              h &&
                (e._.reconnectAttemptTimeoutHandle = c.setTimeout(function () {
                  !1 === i &&
                    e.eventSource.readyState !== c.EventSource.OPEN &&
                    o.reconnect(e);
                }, o.timeOut)),
                e.eventSource.addEventListener(
                  "open",
                  function (t) {
                    e.log("EventSource connected."),
                      p(e),
                      f.clearReconnectTimeout(e),
                      !1 === i &&
                        ((i = !0),
                        !0 ===
                          u(
                            e,
                            s.connectionState.reconnecting,
                            s.connectionState.connected,
                          ) && d.triggerHandler(l.onReconnect));
                  },
                  !1,
                ),
                e.eventSource.addEventListener(
                  "message",
                  function (r) {
                    var o;
                    if ("initialized" !== r.data) {
                      try {
                        o = e._parseResponse(r.data);
                      } catch (t) {
                        f.handleParseFailure(e, r.data, t, n, r);
                        return;
                      }
                      f.processMessages(e, o, t);
                    }
                  },
                  !1,
                ),
                e.eventSource.addEventListener(
                  "error",
                  function (t) {
                    var r = s._.transportError(
                      s.resources.eventSourceError,
                      e.transport,
                      t,
                    );
                    !(this !== e.eventSource || (n && n(r))) &&
                      (e.log(
                        "EventSource readyState: " +
                          e.eventSource.readyState +
                          ".",
                      ),
                      t.eventPhase === c.EventSource.CLOSED
                        ? (e.log(
                            "EventSource reconnecting due to the server connection ending.",
                          ),
                          o.reconnect(e))
                        : (e.log("EventSource error."),
                          d.triggerHandler(l.onError, [r])));
                  },
                  !1,
                );
            },
            reconnect: function (e) {
              f.reconnect(e, this.name);
            },
            lostConnection: function (e) {
              this.reconnect(e);
            },
            send: function (e, t) {
              f.ajaxSend(e, t);
            },
            stop: function (e) {
              p(e),
                f.clearReconnectTimeout(e),
                e &&
                  e.eventSource &&
                  (e.log("EventSource calling close()."),
                  e.eventSource.close(),
                  (e.eventSource = null),
                  delete e.eventSource);
            },
            abort: function (e, t) {
              f.ajaxAbort(e, t);
            },
          }),
          (d = window.jQuery),
          (h = window),
          (b = d.signalR),
          (v = d.signalR.events),
          (m = d.signalR.changeState),
          (S = b.transports._logic),
          (_ = function () {
            var e = h.document.createElement("iframe");
            return (
              e.setAttribute(
                "style",
                "position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;",
              ),
              e
            );
          }),
          (g = null),
          (y = 0),
          (w = {
            prevent: function () {
              b._.ieVersion <= 8 &&
                (0 === y &&
                  (g = h.setInterval(function () {
                    var e = _();
                    h.document.body.appendChild(e),
                      h.document.body.removeChild(e);
                  }, 1e3)),
                y++);
            },
            cancel: function () {
              1 === y && h.clearInterval(g), y > 0 && y--;
            },
          }),
          (b.transports.foreverFrame = {
            name: "foreverFrame",
            supportsKeepAlive: function () {
              return !0;
            },
            iframeClearThreshold: 50,
            start: function (e, t, n) {
              var r,
                o = this,
                i = (S.foreverFrame.count += 1),
                a = _(),
                c = function () {
                  e.log(
                    "Forever frame iframe finished loading and is no longer receiving messages.",
                  ),
                    (n && n()) || o.reconnect(e);
                };
              if (h.EventSource) {
                n &&
                  (e.log(
                    "Forever Frame is not supported by SignalR on browsers with SSE support.",
                  ),
                  n());
                return;
              }
              a.setAttribute("data-signalr-connection-id", e.id),
                w.prevent(),
                (r = S.getUrl(e, this.name) + "&frameId=" + i),
                h.document.documentElement.appendChild(a),
                e.log("Binding to iframe's load event."),
                a.addEventListener
                  ? a.addEventListener("load", c, !1)
                  : a.attachEvent && a.attachEvent("onload", c),
                (a.src = r),
                (S.foreverFrame.connections[i] = e),
                (e.frame = a),
                (e.frameId = i),
                t &&
                  (e.onSuccess = function () {
                    e.log("Iframe transport started."), t();
                  });
            },
            reconnect: function (e) {
              var t = this;
              S.isConnectedOrReconnecting(e) &&
                S.verifyLastActive(e) &&
                h.setTimeout(function () {
                  if (
                    S.verifyLastActive(e) &&
                    e.frame &&
                    S.ensureReconnectingState(e)
                  ) {
                    var n = e.frame,
                      r = S.getUrl(e, t.name, !0) + "&frameId=" + e.frameId;
                    e.log("Updating iframe src to '" + r + "'."), (n.src = r);
                  }
                }, e.reconnectDelay);
            },
            lostConnection: function (e) {
              this.reconnect(e);
            },
            send: function (e, t) {
              S.ajaxSend(e, t);
            },
            receive: function (e, t) {
              var n, r, o;
              if (
                (e.json !== e._originalJson &&
                  (t = e._originalJson.stringify(t)),
                (o = e._parseResponse(t)),
                S.processMessages(e, o, e.onSuccess),
                e.state === d.signalR.connectionState.connected &&
                  ((e.frameMessageCount = (e.frameMessageCount || 0) + 1),
                  e.frameMessageCount >
                    b.transports.foreverFrame.iframeClearThreshold &&
                    ((e.frameMessageCount = 0),
                    (n = e.frame.contentWindow || e.frame.contentDocument) &&
                      n.document &&
                      n.document.body)))
              )
                for (r = n.document.body; r.firstChild; )
                  r.removeChild(r.firstChild);
            },
            stop: function (e) {
              var t = null;
              if ((w.cancel(), e.frame)) {
                if (e.frame.stop) e.frame.stop();
                else
                  try {
                    (t = e.frame.contentWindow || e.frame.contentDocument)
                      .document &&
                      t.document.execCommand &&
                      t.document.execCommand("Stop");
                  } catch (t) {
                    e.log(
                      "Error occurred when stopping foreverFrame transport. Message = " +
                        t.message +
                        ".",
                    );
                  }
                e.frame.parentNode === h.document.documentElement &&
                  h.document.documentElement.removeChild(e.frame),
                  delete S.foreverFrame.connections[e.frameId],
                  (e.frame = null),
                  (e.frameId = null),
                  delete e.frame,
                  delete e.frameId,
                  delete e.onSuccess,
                  delete e.frameMessageCount,
                  e.log("Stopping forever frame.");
              }
            },
            abort: function (e, t) {
              S.ajaxAbort(e, t);
            },
            getConnection: function (e) {
              return S.foreverFrame.connections[e];
            },
            started: function (e) {
              !0 ===
                m(
                  e,
                  b.connectionState.reconnecting,
                  b.connectionState.connected,
                ) && d(e).triggerHandler(v.onReconnect);
            },
          }),
          (C = window.jQuery),
          (E = window),
          (k = C.signalR),
          (T = C.signalR.events),
          (R = C.signalR.changeState),
          (O = C.signalR.isDisconnecting),
          (I = k.transports._logic),
          (k.transports.longPolling = {
            name: "longPolling",
            supportsKeepAlive: function () {
              return !1;
            },
            reconnectDelay: 3e3,
            start: function (e, t, n) {
              var r = this,
                o = function () {
                  (o = C.noop),
                    e.log("LongPolling connected."),
                    t
                      ? t()
                      : e.log(
                          "WARNING! The client received an init message after reconnecting.",
                        );
                },
                i = function (t) {
                  return (
                    !!n(t) && (e.log("LongPolling failed to connect."), !0)
                  );
                },
                a = e._,
                c = 0,
                s = function (e) {
                  E.clearTimeout(a.reconnectTimeoutId),
                    (a.reconnectTimeoutId = null),
                    !0 ===
                      R(
                        e,
                        k.connectionState.reconnecting,
                        k.connectionState.connected,
                      ) &&
                      (e.log("Raising the reconnect event"),
                      C(e).triggerHandler(T.onReconnect));
                };
              e.pollXhr &&
                (e.log("Polling xhr requests already exists, aborting."),
                e.stop()),
                (e.messageId = null),
                (a.reconnectTimeoutId = null),
                (a.pollTimeoutId = E.setTimeout(function () {
                  !(function t(n, l) {
                    var u = null !== n.messageId,
                      f = I.getUrl(n, r.name, u, !l, !0),
                      p = {};
                    n.messageId && (p.messageId = n.messageId),
                      n.groupsToken && (p.groupsToken = n.groupsToken),
                      !0 !== O(n) &&
                        (e.log("Opening long polling request to '" + f + "'."),
                        (n.pollXhr = I.ajax(e, {
                          xhrFields: {
                            onprogress: function () {
                              I.markLastMessage(e);
                            },
                          },
                          url: f,
                          type: "POST",
                          contentType: k._.defaultContentType,
                          data: p,
                          timeout: e._.pollTimeout,
                          success: function (r) {
                            var l,
                              u,
                              f,
                              p = 0;
                            e.log("Long poll complete."), (c = 0);
                            try {
                              l = e._parseResponse(r);
                            } catch (e) {
                              I.handleParseFailure(n, r, e, i, n.pollXhr);
                              return;
                            }
                            null !== a.reconnectTimeoutId && s(n),
                              l && (u = I.maximizePersistentResponse(l)),
                              I.processMessages(n, l, o),
                              u &&
                                "number" === C.type(u.LongPollDelay) &&
                                (p = u.LongPollDelay),
                              !0 !== O(n) &&
                                (!(f = u && u.ShouldReconnect) ||
                                  I.ensureReconnectingState(n)) &&
                                (p > 0
                                  ? (a.pollTimeoutId = E.setTimeout(
                                      function () {
                                        t(n, f);
                                      },
                                      p,
                                    ))
                                  : t(n, f));
                          },
                          error: function (o, s) {
                            var l = k._.transportError(
                              k.resources.longPollFailed,
                              e.transport,
                              o,
                              n.pollXhr,
                            );
                            if (
                              (E.clearTimeout(a.reconnectTimeoutId),
                              (a.reconnectTimeoutId = null),
                              "abort" === s)
                            ) {
                              e.log("Aborted xhr request.");
                              return;
                            }
                            if (!i(l)) {
                              if (
                                (c++,
                                e.state !== k.connectionState.reconnecting &&
                                  (e.log(
                                    "An error occurred using longPolling. Status = " +
                                      s +
                                      ".  Response = " +
                                      o.responseText +
                                      ".",
                                  ),
                                  C(n).triggerHandler(T.onError, [l])),
                                ((e.state === k.connectionState.connected ||
                                  e.state === k.connectionState.reconnecting) &&
                                  !I.verifyLastActive(e)) ||
                                  !I.ensureReconnectingState(n))
                              )
                                return;
                              a.pollTimeoutId = E.setTimeout(function () {
                                t(n, !0);
                              }, r.reconnectDelay);
                            }
                          },
                        })),
                        u &&
                          !0 === l &&
                          (a.reconnectTimeoutId = E.setTimeout(
                            function () {
                              s(n);
                            },
                            Math.min(1e3 * (Math.pow(2, c) - 1), 36e5),
                          )));
                  })(e);
                }, 250));
            },
            lostConnection: function (e) {
              e.pollXhr && e.pollXhr.abort("lostConnection");
            },
            send: function (e, t) {
              I.ajaxSend(e, t);
            },
            stop: function (e) {
              E.clearTimeout(e._.pollTimeoutId),
                E.clearTimeout(e._.reconnectTimeoutId),
                delete e._.pollTimeoutId,
                delete e._.reconnectTimeoutId,
                e.pollXhr &&
                  (e.pollXhr.abort(), (e.pollXhr = null), delete e.pollXhr);
            },
            abort: function (e, t) {
              I.ajaxAbort(e, t);
            },
          }),
          (function (e, t, n) {
            var r = e.signalR;
            function o(e) {
              return e + ".hubProxy";
            }
            function i(t) {
              return e.isFunction(t)
                ? null
                : "undefined" === e.type(t)
                  ? null
                  : t;
            }
            function a(e) {
              for (var t in e) if (e.hasOwnProperty(t)) return !0;
              return !1;
            }
            function c(e, t) {
              var n,
                r = e._.invocationCallbacks;
              for (var o in (a(r) &&
                e.log(
                  "Clearing hub invocation callbacks with error: " + t + ".",
                ),
              (e._.invocationCallbackId = 0),
              delete e._.invocationCallbacks,
              (e._.invocationCallbacks = {}),
              r))
                (n = r[o]).method.call(n.scope, { E: t });
            }
            function s(e, t) {
              return new s.fn.init(e, t);
            }
            function l(t, n) {
              var r = { qs: null, logging: !1, useDefaultPath: !0 };
              return (
                e.extend(r, n),
                (!t || r.useDefaultPath) && (t = (t || "") + "/signalr"),
                new l.fn.init(t, r)
              );
            }
            (s.fn = s.prototype =
              {
                init: function (e, t) {
                  (this.state = {}),
                    (this.connection = e),
                    (this.hubName = t),
                    (this._ = { callbackMap: {} });
                },
                constructor: s,
                hasSubscriptions: function () {
                  return a(this._.callbackMap);
                },
                on: function (t, n) {
                  var r = this,
                    i = r._.callbackMap;
                  return (
                    i[(t = t.toLowerCase())] || (i[t] = {}),
                    (i[t][n] = function (e, t) {
                      n.apply(r, t);
                    }),
                    e(r).bind(o(t), i[t][n]),
                    r
                  );
                },
                off: function (t, n) {
                  var r,
                    i = this._.callbackMap;
                  return (
                    (r = i[(t = t.toLowerCase())]) &&
                      (r[n]
                        ? (e(this).unbind(o(t), r[n]),
                          delete r[n],
                          a(r) || delete i[t])
                        : n || (e(this).unbind(o(t)), delete i[t])),
                    this
                  );
                },
                invoke: function (t) {
                  var n = this,
                    o = n.connection,
                    a = e.makeArray(arguments).slice(1),
                    c = (function (e, t, n) {
                      var r,
                        o = e.length,
                        i = [];
                      for (r = 0; r < o; r += 1)
                        e.hasOwnProperty(r) &&
                          (i[r] = t.call(void 0, e[r], r, e));
                      return i;
                    })(a, i),
                    s = {
                      H: n.hubName,
                      M: t,
                      A: c,
                      I: o._.invocationCallbackId,
                    },
                    l = e.Deferred();
                  return (
                    (o._.invocationCallbacks[
                      o._.invocationCallbackId.toString()
                    ] = {
                      scope: n,
                      method: function (i) {
                        var a,
                          c,
                          s = n._maximizeHubResponse(i);
                        e.extend(n.state, s.State),
                          s.Progress
                            ? l.notifyWith
                              ? l.notifyWith(n, [s.Progress.Data])
                              : o._.progressjQueryVersionLogged ||
                                (o.log(
                                  "A hub method invocation progress update was received but the version of jQuery in use (" +
                                    e.prototype.jquery +
                                    ") does not support progress updates. Upgrade to jQuery 1.7+ to receive progress notifications.",
                                ),
                                (o._.progressjQueryVersionLogged = !0))
                            : s.Error
                              ? (s.StackTrace &&
                                  o.log(s.Error + "\n" + s.StackTrace + "."),
                                (a = s.IsHubException
                                  ? "HubException"
                                  : "Exception"),
                                ((c = r._.error(s.Error, a)).data =
                                  s.ErrorData),
                                o.log(
                                  n.hubName +
                                    "." +
                                    t +
                                    " failed to execute. Error: " +
                                    c.message,
                                ),
                                l.rejectWith(n, [c]))
                              : (o.log("Invoked " + n.hubName + "." + t),
                                l.resolveWith(n, [s.Result]));
                      },
                    }),
                    (o._.invocationCallbackId += 1),
                    e.isEmptyObject(n.state) || (s.S = n.state),
                    o.log("Invoking " + n.hubName + "." + t),
                    o.send(s),
                    l.promise()
                  );
                },
                _maximizeHubResponse: function (e) {
                  return {
                    State: e.S,
                    Result: e.R,
                    Progress: e.P ? { Id: e.P.I, Data: e.P.D } : null,
                    Id: e.I,
                    IsHubException: e.H,
                    Error: e.E,
                    StackTrace: e.T,
                    ErrorData: e.D,
                  };
                },
              }),
              (s.fn.init.prototype = s.fn),
              (l.fn = l.prototype = e.connection()),
              (l.fn.init = function (t, n) {
                var r = { qs: null, logging: !1, useDefaultPath: !0 },
                  i = this;
                e.extend(r, n),
                  e.signalR.fn.init.call(i, t, r.qs, r.logging),
                  (i.proxies = {}),
                  (i._.invocationCallbackId = 0),
                  (i._.invocationCallbacks = {}),
                  i.received(function (t) {
                    var n, r, a, c, s, l;
                    t &&
                      (void 0 !== t.P
                        ? ((a = t.P.I.toString()),
                          (c = i._.invocationCallbacks[a]) &&
                            c.method.call(c.scope, t))
                        : void 0 !== t.I
                          ? ((a = t.I.toString()),
                            (c = i._.invocationCallbacks[a]) &&
                              ((i._.invocationCallbacks[a] = null),
                              delete i._.invocationCallbacks[a],
                              c.method.call(c.scope, t)))
                          : ((n = this._maximizeClientHubInvocation(t)),
                            i.log(
                              "Triggering client hub event '" +
                                n.Method +
                                "' on hub '" +
                                n.Hub +
                                "'.",
                            ),
                            (s = n.Hub.toLowerCase()),
                            (l = n.Method.toLowerCase()),
                            (r = this.proxies[s]),
                            e.extend(r.state, n.State),
                            e(r).triggerHandler(o(l), [n.Args])));
                  }),
                  i.error(function (e, t) {
                    var n, r;
                    t &&
                      ((n = t.I),
                      (r = i._.invocationCallbacks[n]) &&
                        ((i._.invocationCallbacks[n] = null),
                        delete i._.invocationCallbacks[n],
                        r.method.call(r.scope, { E: e })));
                  }),
                  i.reconnecting(function () {
                    i.transport &&
                      "webSockets" === i.transport.name &&
                      c(
                        i,
                        "Connection started reconnecting before invocation result was received.",
                      );
                  }),
                  i.disconnected(function () {
                    c(
                      i,
                      "Connection was disconnected before invocation result was received.",
                    );
                  });
              }),
              (l.fn._maximizeClientHubInvocation = function (e) {
                return { Hub: e.H, Method: e.M, Args: e.A, State: e.S };
              }),
              (l.fn._registerSubscribedHubs = function () {
                var t = this;
                t._subscribedToHubs ||
                  ((t._subscribedToHubs = !0),
                  t.starting(function () {
                    var n = [];
                    e.each(t.proxies, function (e) {
                      this.hasSubscriptions() &&
                        (n.push({ name: e }),
                        t.log("Client subscribed to hub '" + e + "'."));
                    }),
                      0 === n.length &&
                        t.log(
                          "No hubs have been subscribed to.  The client will not receive data from hubs.  To fix, declare at least one client side function prior to connection start for each hub you wish to subscribe to.",
                        ),
                      (t.data = t.json.stringify(n));
                  }));
              }),
              (l.fn.createHubProxy = function (e) {
                e = e.toLowerCase();
                var t = this.proxies[e];
                return (
                  t || ((t = s(this, e)), (this.proxies[e] = t)),
                  this._registerSubscribedHubs(),
                  t
                );
              }),
              (l.fn.init.prototype = l.fn),
              (e.hubConnection = l);
          })(window.jQuery, window),
          (window.jQuery.signalR.version = "2.2.2");
      },
      241: function () {},
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
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
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (n.rv = function () {
      return "1.2.8";
    }),
    (n.ruid = "bundler=rspack@1.2.8"),
    (function () {
      "use strict";
      var e,
        t,
        r,
        o,
        i,
        a,
        c,
        s,
        l,
        u,
        f,
        p,
        d,
        h,
        g,
        y = {};
      n.r(y),
        n.d(y, {
          Urls: function () {
            return nr;
          },
          addCrossDomainOptionsToAllRequests: function () {
            return no;
          },
          ajaxPrefilter: function () {
            return t6;
          },
          attachUrlLocale: function () {
            return t0;
          },
          generateAbsoluteUrl: function () {
            return t2;
          },
          getAbsoluteUrl: function () {
            return t1;
          },
          getAcceptLanguageValue: function () {
            return t4;
          },
          getBadgeDetailsUrl: function () {
            return t7;
          },
          getCatalogItemUrl: function () {
            return t8;
          },
          getOverrideLanguageHeader: function () {
            return nt;
          },
          getPageUrlLocale: function () {
            return ne;
          },
          isAbsolute: function () {
            return tV;
          },
          isThirdPartyUrl: function () {
            return t3;
          },
          removeUrlLocale: function () {
            return tY;
          },
          setOverrideLanguageHeader: function () {
            return nn;
          },
          setPageUrlLocale: function () {
            return t9;
          },
          splitAtQueryString: function () {
            return tX;
          },
          supportLocalizedUrls: function () {
            return t$;
          },
        });
      var b = {};
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.r(b),
        n.d(b, {
          default: function () {
            return ni;
          },
        });
      var m = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : window;
          if ("string" == typeof e) n[e] = t;
          else {
            var r =
                (function (e) {
                  if (Array.isArray(e)) return v(e);
                })(e) ||
                (function (e) {
                  if (
                    ("undefined" != typeof Symbol &&
                      null != e[Symbol.iterator]) ||
                    null != e["@@iterator"]
                  )
                    return Array.from(e);
                })(e) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return v(e, void 0);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if (
                      ("Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n)
                    )
                      return Array.from(n);
                    if (
                      "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    )
                      return v(e, t);
                  }
                })(e) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })(),
              o = r.pop(),
              i = n,
              a = !0,
              c = !1,
              s = void 0;
            try {
              for (
                var l, u = r[Symbol.iterator]();
                !(a = (l = u.next()).done);
                a = !0
              ) {
                var f,
                  p,
                  d = l.value;
                (null !== (p = (f = i)[d]) && void 0 !== p) || (f[d] = {}),
                  (i = i[d]);
              }
            } catch (e) {
              (c = !0), (s = e);
            } finally {
              try {
                a || null == u.return || u.return();
              } finally {
                if (c) throw s;
              }
            }
            i[o] = t;
          }
        },
        S = null,
        _ = function () {
          if (null === S) {
            S = {};
            var e = window.Roblox,
              t = e.RealTimeSettings,
              n = e.CurrentUser;
            t
              ? ((S.notificationsUrl = t.NotificationsEndpoint),
                (S.maxConnectionTimeInMs = parseInt(t.MaxConnectionTime, 10)),
                (S.isEventPublishingEnabled = t.IsEventPublishingEnabled),
                (S.isDisconnectOnSlowConnectionDisabled =
                  t.IsDisconnectOnSlowConnectionDisabled),
                (S.userId = n ? parseInt(n.userId, 10) : -1),
                (S.isSignalRClientTransportRestrictionEnabled =
                  t.IsSignalRClientTransportRestrictionEnabled),
                (S.isLocalStorageEnabled = t.IsLocalStorageInRealTimeEnabled),
                (S.notificationsClientType = t.NotificationsClientType),
                (S.isRealtimeWebAnalyticsEnabled =
                  t.IsRealtimeWebAnalyticsEnabled),
                (S.isRealtimeWebAnalyticsConnectionEventsEnabled =
                  t.IsRealtimeWebAnalyticsConnectionEventsEnabled))
              : ((S.notificationsUrl = "https://realtime.roblox.com"),
                (S.maxConnectionTimeInMs = 216e5),
                (S.isEventPublishingEnabled = !1),
                (S.isDisconnectOnSlowConnectionDisabled = !1),
                (S.userId = n ? parseInt(n.userId, 10) : -1),
                (S.isSignalRClientTransportRestrictionEnabled = !1),
                (S.isLocalStorageEnabled = !1),
                (S.notificationsClientType = "SignalR"),
                (S.isRealtimeWebAnalyticsEnabled = !1),
                (S.isRealtimeWebAnalyticsConnectionEventsEnabled = !1));
          }
          return S;
        },
        w = {
          GetNotificationsUrl: function () {
            return _().notificationsUrl;
          },
          GetMaximumConnectionTime: function () {
            return _().maxConnectionTimeInMs;
          },
          IsEventPublishingEnabled: function () {
            return _().isEventPublishingEnabled;
          },
          IsLocalStorageEnabled: function () {
            var e = window.Roblox.LocalStorage;
            return e
              ? e.isAvailable() && _().isLocalStorageEnabled
              : localStorage && _().isLocalStorageEnabled;
          },
          GetUserId: function () {
            return _().userId;
          },
          GetSettings: _,
        };
      function C(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      }
      var E = function (e, t, n) {
          var r = { IS_REQUIRED: 1, NOT_REQUIRED: 2, UNCLEAR: 3 },
            o = {
              RealTimeCheckIfDataReloadRequired:
                "realTimeCheckIfDataReloadRequired",
              RealTimeUpdateLatestSequenceNumber:
                "realTimeUpdateLatestSequenceNumber",
            },
            i = {
              OutOfOrder: "SequenceOutOfOrder",
              MissedNumber: "SequenceNumberMissed",
              UpToDate: "SequenceNumberMatched",
              InvalidSequenceNumber: "InvalidSequenceNumber",
              MissingNotificationInfo: "MissingNotificationInformation",
            },
            a = null,
            c = function (e) {
              "function" == typeof n && n(e);
            },
            s = function () {
              return (
                "Roblox.RealTime.StateTracker.LastNamespaceSequenceNumberProcessed_U_" +
                w.GetUserId()
              );
            },
            l = function (e) {
              try {
                return JSON.parse(e);
              } catch (e) {
                return c("Error parsing jsonString"), null;
              }
            },
            u = function (t, n) {
              (a && a.namespaceSequenceNumbersObj) ||
                (a = { namespaceSequenceNumbersObj: {} }),
                (a.namespaceSequenceNumbersObj[t] = n),
                (a.TimeStamp = Date.now()),
                e && localStorage.setItem(s(), JSON.stringify(a));
            },
            f = function (e, n, r) {
              try {
                var o = window.Roblox.EventStream;
                t &&
                  o &&
                  ((void 0 === r ? "undefined" : C(r)) !== "object" && (r = {}),
                  (r.ua = navigator.userAgent),
                  o.SendEvent(e, n, r));
              } catch (e) {
                c("Error pushing to Event Stream");
              }
            },
            p = function () {
              return a;
            };
          (function () {
            if ((c("StateTracker Initialized"), e)) {
              var t = localStorage.getItem(s());
              t && (a = l(t));
            }
          })(),
            (this.IsDataRefreshRequired = function (e, t) {
              if ("number" != typeof t)
                return (
                  f(
                    o.RealTimeCheckIfDataReloadRequired,
                    i.InvalidSequenceNumber,
                    { rld: !0 },
                  ),
                  r.UNCLEAR
                );
              var n = p();
              if (void 0 === n || null == n)
                return (
                  f(
                    o.RealTimeCheckIfDataReloadRequired,
                    i.MissingNotificationInfo,
                    { rld: !0 },
                  ),
                  u(e, t),
                  r.UNCLEAR
                );
              var a = n.namespaceSequenceNumbersObj[e];
              return 0 === t && 0 !== a
                ? (u(e, t),
                  f(o.RealTimeCheckIfDataReloadRequired, i.OutOfOrder, {
                    rld: !0,
                  }),
                  r.IS_REQUIRED)
                : t < 0 && a >= 0
                  ? r.UNCLEAR
                  : t === a
                    ? (u(e, t),
                      f(o.RealTimeCheckIfDataReloadRequired, i.UpToDate, {
                        rld: !1,
                      }),
                      r.NOT_REQUIRED)
                    : (f(o.RealTimeCheckIfDataReloadRequired, i.MissedNumber, {
                          rld: !0,
                        }),
                        t > a)
                      ? (u(e, t),
                        f(o.RealTimeCheckIfDataReloadRequired, i.OutOfOrder, {
                          rld: !0,
                        }),
                        r.IS_REQUIRED)
                      : (a || u(e, t), r.UNCLEAR);
            }),
            (this.UpdateSequenceNumber = function (e, t) {
              if ("number" != typeof t) {
                f(
                  o.RealTimeUpdateLatestSequenceNumber,
                  i.InvalidSequenceNumber,
                );
                return;
              }
              var n = p();
              (void 0 === n ? "undefined" : C(n)) === "object" &&
                null != n &&
                n.namespaceSequenceNumbersObj &&
                n.namespaceSequenceNumbersObj[e] > t &&
                f(o.RealTimeUpdateLatestSequenceNumber, i.OutOfOrder),
                u(e, t);
            }),
            (this.GetLatestState = p),
            (this.RefreshRequiredEnum = r);
        },
        k = (null !== (a = window.Roblox) && void 0 !== a ? a : {}).EventStream,
        T = function (e, t, n) {
          if (k) {
            var r = Array.isArray(t),
              o = r ? t[0] : t,
              i = o.SequenceNumber,
              a = o.ShouldSendToEventStream,
              c = o.RealtimeMessageIdentifier;
            a &&
              k.SendEventWithTarget(
                "RealtimeHandleEvent",
                "RealtimeHandleEventContext",
                {
                  localTimestampMilliseconds: Date.now(),
                  namespaceId: e,
                  sequenceNumber: parseInt(i, 10),
                  payloadSize: n,
                  bulkMessageCount: r ? t.length : 1,
                  messageIdentifier: c,
                },
                k.TargetTypes.WWW,
              );
          }
        },
        R = function (e, t, n) {
          k &&
            k.SendEventWithTarget(
              "RealtimeWebConnectionChange",
              "RealtimeWebConnectionChangeContext",
              {
                localTimestampMilliseconds: Date.now(),
                connectionState: e,
                connectionId: t,
                subscriptionStatus: n,
              },
              k.TargetTypes.WWW,
            );
        },
        O = window.jQuery,
        I = n.n(O),
        j = (function () {
          var e;
          function t() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, t);
          }
          return (
            (e = [
              {
                key: "write",
                value: function (e) {
                  return "".concat(e).concat(t.RecordSeparator);
                },
              },
              {
                key: "parse",
                value: function (e) {
                  if (e[e.length - 1] !== t.RecordSeparator)
                    throw Error("Message is incomplete.");
                  var n = e.split(t.RecordSeparator);
                  return n.pop(), n;
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(t, e),
            t
          );
        })();
      (j.RecordSeparatorCode = 30),
        (j.RecordSeparator = String.fromCharCode(j.RecordSeparatorCode)),
        ((e = c || (c = {}))[(e.Trace = 0)] = "Trace"),
        (e[(e.Debug = 1)] = "Debug"),
        (e[(e.Information = 2)] = "Information"),
        (e[(e.Warning = 3)] = "Warning"),
        (e[(e.Error = 4)] = "Error"),
        (e[(e.Critical = 5)] = "Critical"),
        (e[(e.None = 6)] = "None");
      var P = (function () {
        var e;
        function t() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, t);
        }
        return (
          (e = [{ key: "log", value: function (e, t) {} }]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(t.prototype, e),
          t
        );
      })();
      P.instance = new P();
      var A = n(103);
      function x(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function D(e, t, n, r, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          n(e);
          return;
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function N(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function q(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function M(e, t, n) {
        return t && q(e.prototype, t), n && q(e, n), e;
      }
      function H(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      }
      var L = (function () {
          function e() {
            N(this, e);
          }
          return (
            M(e, null, [
              {
                key: "isRequired",
                value: function (e, t) {
                  if (null == e)
                    throw Error("The '".concat(t, "' argument is required."));
                },
              },
              {
                key: "isNotEmpty",
                value: function (e, t) {
                  if (!e || e.match(/^\s*$/))
                    throw Error(
                      "The '".concat(t, "' argument should not be empty."),
                    );
                },
              },
              {
                key: "isIn",
                value: function (e, t, n) {
                  if (!(e in t))
                    throw Error(
                      "Unknown ".concat(n, " value: ").concat(e, "."),
                    );
                },
              },
            ]),
            e
          );
        })(),
        F = (function () {
          function e() {
            N(this, e);
          }
          return (
            M(e, null, [
              {
                key: "isBrowser",
                get: function () {
                  return (
                    ("undefined" == typeof window ? "undefined" : H(window)) ===
                      "object" && "object" === H(window.document)
                  );
                },
              },
              {
                key: "isWebWorker",
                get: function () {
                  return (
                    ("undefined" == typeof self ? "undefined" : H(self)) ===
                      "object" && "importScripts" in self
                  );
                },
              },
              {
                key: "isReactNative",
                get: function () {
                  return (
                    ("undefined" == typeof window ? "undefined" : H(window)) ===
                      "object" && void 0 === window.document
                  );
                },
              },
              {
                key: "isNode",
                get: function () {
                  return (
                    !this.isBrowser && !this.isWebWorker && !this.isReactNative
                  );
                },
              },
            ]),
            e
          );
        })();
      function U(e, t) {
        var n,
          r,
          o = "";
        return (
          W(e)
            ? ((o = "Binary data of length ".concat(e.byteLength)),
              t &&
                (o += ". Content: '".concat(
                  ((n = new Uint8Array(e)),
                  (r = ""),
                  n.forEach(function (e) {
                    var t = e < 16 ? "0" : "";
                    r += "0x".concat(t).concat(e.toString(16), " ");
                  }),
                  r.substr(0, r.length - 1)),
                  "'",
                )))
            : "string" == typeof e &&
              ((o = "String data of length ".concat(e.length)),
              t && (o += ". Content: '".concat(e, "'"))),
          o
        );
      }
      function W(e) {
        return (
          e &&
          "undefined" != typeof ArrayBuffer &&
          (e instanceof ArrayBuffer ||
            (e.constructor && "ArrayBuffer" === e.constructor.name))
        );
      }
      function B(e, t, n, r, o, i) {
        return z.apply(this, arguments);
      }
      function z() {
        var e;
        return (
          (e = function (e, t, n, r, o, i) {
            var a, s, l, u, f, p;
            return (function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: c(0), throw: c(1), return: c(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function c(i) {
                return function (c) {
                  return (function (i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                  ? r.throw || ((o = r.return) && o.call(r), 0)
                                  : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            o = i;
                            break;
                          case 4:
                            return a.label++, { value: i[1], done: !1 };
                          case 5:
                            a.label++, (r = i[1]), (i = [0]);
                            continue;
                          case 7:
                            (i = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(o =
                                (o = a.trys).length > 0 && o[o.length - 1]) &&
                              (6 === i[0] || 2 === i[0])
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1];
                              break;
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = i);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(i);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        i = t.call(e, a);
                      } catch (e) {
                        (i = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & i[0]) throw i[1];
                    return { value: i[0] ? i[1] : void 0, done: !0 };
                  })([i, c]);
                };
              }
            })(this, function (d) {
              switch (d.label) {
                case 0:
                  var h;
                  return (
                    (a = {}),
                    (l = (s =
                      (function (e) {
                        if (Array.isArray(e)) return e;
                      })((h = K())) ||
                      (function (e, t) {
                        var n,
                          r,
                          o =
                            null == e
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  e[Symbol.iterator]) ||
                                e["@@iterator"];
                        if (null != o) {
                          var i = [],
                            a = !0,
                            c = !1;
                          try {
                            for (
                              o = o.call(e);
                              !(a = (n = o.next()).done) &&
                              (i.push(n.value), i.length !== t);
                              a = !0
                            );
                          } catch (e) {
                            (c = !0), (r = e);
                          } finally {
                            try {
                              a || null == o.return || o.return();
                            } finally {
                              if (c) throw r;
                            }
                          }
                          return i;
                        }
                      })(h, 2) ||
                      (function (e, t) {
                        if (e) {
                          if ("string" == typeof e) return x(e, 2);
                          var n = Object.prototype.toString
                            .call(e)
                            .slice(8, -1);
                          if (
                            ("Object" === n &&
                              e.constructor &&
                              (n = e.constructor.name),
                            "Map" === n || "Set" === n)
                          )
                            return Array.from(n);
                          if (
                            "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          )
                            return x(e, t);
                        }
                      })(h, 2) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                        );
                      })())[0]),
                    (u = s[1]),
                    (a[l] = u),
                    e.log(
                      c.Trace,
                      "("
                        .concat(t, " transport) sending data. ")
                        .concat(U(o, i.logMessageContent), "."),
                    ),
                    (f = W(o) ? "arraybuffer" : "text"),
                    [
                      4,
                      n.post(r, {
                        content: o,
                        headers: (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(
                                  function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e)
                                      .enumerable;
                                  },
                                ),
                              )),
                              r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                  t in e
                                    ? Object.defineProperty(e, t, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                      })
                                    : (e[t] = r);
                              });
                          }
                          return e;
                        })({}, a, i.headers),
                        responseType: f,
                        timeout: i.timeout,
                        withCredentials: i.withCredentials,
                      }),
                    ]
                  );
                case 1:
                  return (
                    (p = d.sent()),
                    e.log(
                      c.Trace,
                      "("
                        .concat(
                          t,
                          " transport) request complete. Response status: ",
                        )
                        .concat(p.statusCode, "."),
                    ),
                    [2]
                  );
              }
            });
          }),
          (z = function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, o) {
              var i = e.apply(t, n);
              function a(e) {
                D(i, r, o, a, c, "next", e);
              }
              function c(e) {
                D(i, r, o, a, c, "throw", e);
              }
              a(void 0);
            });
          }).apply(this, arguments)
        );
      }
      var G = (function () {
          function e(t, n) {
            N(this, e), (this._subject = t), (this._observer = n);
          }
          return (
            M(e, [
              {
                key: "dispose",
                value: function () {
                  var e = this._subject.observers.indexOf(this._observer);
                  e > -1 && this._subject.observers.splice(e, 1),
                    0 === this._subject.observers.length &&
                      this._subject.cancelCallback &&
                      this._subject.cancelCallback().catch(function (e) {});
                },
              },
            ]),
            e
          );
        })(),
        Q = (function () {
          function e(t) {
            N(this, e), (this._minLevel = t), (this.out = console);
          }
          return (
            M(e, [
              {
                key: "log",
                value: function (e, t) {
                  if (e >= this._minLevel) {
                    var n = "["
                      .concat(new Date().toISOString(), "] ")
                      .concat(c[e], ": ")
                      .concat(t);
                    switch (e) {
                      case c.Critical:
                      case c.Error:
                        this.out.error(n);
                        break;
                      case c.Warning:
                        this.out.warn(n);
                        break;
                      case c.Information:
                        this.out.info(n);
                        break;
                      default:
                        this.out.log(n);
                    }
                  }
                },
              },
            ]),
            e
          );
        })();
      function K() {
        var e,
          t,
          n,
          r,
          o,
          i,
          a = "X-SignalR-User-Agent";
        return (
          F.isNode && (a = "User-Agent"),
          [
            a,
            ((e = "7.0.14"),
            (t = (function () {
              if (!F.isNode) return "";
              switch (A.platform) {
                case "win32":
                  return "Windows NT";
                case "darwin":
                  return "macOS";
                case "linux":
                  return "Linux";
                default:
                  return A.platform;
              }
            })()),
            (n = F.isNode ? "NodeJS" : "Browser"),
            (r = (function () {
              if (F.isNode) return A.versions.node;
            })()),
            (o = "Microsoft SignalR/"),
            (i = e.split(".")),
            (o += "".concat(i[0], ".").concat(i[1])),
            (o += " (".concat(e, "; ")),
            t && "" !== t ? (o += "".concat(t, "; ")) : (o += "Unknown OS; "),
            (o += "".concat(n)),
            r ? (o += "; ".concat(r)) : (o += "; Unknown Runtime Version"),
            (o += ")")),
          ]
        );
      }
      function J(e) {
        return e.stack ? e.stack : e.message ? e.message : "".concat(e);
      }
      var V = (function () {
        var e;
        function t() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, t);
        }
        return (
          (e = [
            {
              key: "writeHandshakeRequest",
              value: function (e) {
                return j.write(JSON.stringify(e));
              },
            },
            {
              key: "parseHandshakeResponse",
              value: function (e) {
                if (W(e)) {
                  var t,
                    n,
                    r = new Uint8Array(e),
                    o = r.indexOf(j.RecordSeparatorCode);
                  if (-1 === o) throw Error("Message is incomplete.");
                  var i = o + 1;
                  (t = String.fromCharCode.apply(
                    null,
                    Array.prototype.slice.call(r.slice(0, i)),
                  )),
                    (n = r.byteLength > i ? r.slice(i).buffer : null);
                } else {
                  var a = e.indexOf(j.RecordSeparator);
                  if (-1 === a) throw Error("Message is incomplete.");
                  var c = a + 1;
                  (t = e.substring(0, c)),
                    (n = e.length > c ? e.substring(c) : null);
                }
                var s = JSON.parse(j.parse(t)[0]);
                if (s.type)
                  throw Error("Expected a handshake response from the server.");
                return [n, s];
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(t.prototype, e),
          t
        );
      })();
      function X(e, t, n) {
        var r, o, i;
        return (
          (t = ee(t)),
          (r = e),
          (o = eo()
            ? Reflect.construct(t, n || [], ee(e).constructor)
            : t.apply(e, n)) &&
          ("object" ==
            ((i = o) && "undefined" != typeof Symbol && i.constructor === Symbol
              ? "symbol"
              : typeof i) ||
            "function" == typeof o)
            ? o
            : (function (e) {
                if (void 0 === e)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return e;
              })(r)
        );
      }
      function Z(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function Y(e, t, n) {
        return (Y = eo()
          ? Reflect.construct
          : function (e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var o = new (Function.bind.apply(e, r))();
              return n && en(o, n.prototype), o;
            }).apply(null, arguments);
      }
      function ee(e) {
        return (ee = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function et(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && en(e, t);
      }
      function en(e, t) {
        return (en =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function er(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (er = function (e) {
          if (
            null === e ||
            -1 === Function.toString.call(e).indexOf("[native code]")
          )
            return e;
          if ("function" != typeof e)
            throw TypeError(
              "Super expression must either be null or a function",
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n);
          }
          function n() {
            return Y(e, arguments, ee(this).constructor);
          }
          return (
            (n.prototype = Object.create(e.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            en(n, e)
          );
        })(e);
      }
      function eo() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (eo = function () {
          return !!e;
        })();
      }
      var ei = (function (e) {
          function t(e, n) {
            Z(this, t);
            var r,
              o = (this instanceof t ? this.constructor : void 0).prototype;
            return (
              ((r = X(this, t, [
                "".concat(e, ": Status code '").concat(n, "'"),
              ])).statusCode = n),
              (r.__proto__ = o),
              r
            );
          }
          return et(t, e), t;
        })(er(Error)),
        ea = (function (e) {
          function t() {
            var e,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "A timeout occurred.";
            Z(this, t);
            var r = (this instanceof t ? this.constructor : void 0).prototype;
            return ((e = X(this, t, [n])).__proto__ = r), e;
          }
          return et(t, e), t;
        })(er(Error)),
        ec = (function (e) {
          function t() {
            var e,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "An abort occurred.";
            Z(this, t);
            var r = (this instanceof t ? this.constructor : void 0).prototype;
            return ((e = X(this, t, [n])).__proto__ = r), e;
          }
          return et(t, e), t;
        })(er(Error)),
        es = (function (e) {
          function t(e, n) {
            Z(this, t);
            var r,
              o = (this instanceof t ? this.constructor : void 0).prototype;
            return (
              ((r = X(this, t, [e])).transport = n),
              (r.errorType = "UnsupportedTransportError"),
              (r.__proto__ = o),
              r
            );
          }
          return et(t, e), t;
        })(er(Error)),
        el = (function (e) {
          function t(e, n) {
            Z(this, t);
            var r,
              o = (this instanceof t ? this.constructor : void 0).prototype;
            return (
              ((r = X(this, t, [e])).transport = n),
              (r.errorType = "DisabledTransportError"),
              (r.__proto__ = o),
              r
            );
          }
          return et(t, e), t;
        })(er(Error)),
        eu = (function (e) {
          function t(e, n) {
            Z(this, t);
            var r,
              o = (this instanceof t ? this.constructor : void 0).prototype;
            return (
              ((r = X(this, t, [e])).transport = n),
              (r.errorType = "FailedToStartTransportError"),
              (r.__proto__ = o),
              r
            );
          }
          return et(t, e), t;
        })(er(Error)),
        ef = (function (e) {
          function t(e) {
            Z(this, t);
            var n,
              r = (this instanceof t ? this.constructor : void 0).prototype;
            return (
              ((n = X(this, t, [e])).errorType =
                "FailedToNegotiateWithServerError"),
              (n.__proto__ = r),
              n
            );
          }
          return et(t, e), t;
        })(er(Error)),
        ep = (function (e) {
          function t(e, n) {
            Z(this, t);
            var r,
              o = (this instanceof t ? this.constructor : void 0).prototype;
            return (
              ((r = X(this, t, [e])).innerErrors = n), (r.__proto__ = o), r
            );
          }
          return et(t, e), t;
        })(er(Error));
      ((t = s || (s = {}))[(t.Invocation = 1)] = "Invocation"),
        (t[(t.StreamItem = 2)] = "StreamItem"),
        (t[(t.Completion = 3)] = "Completion"),
        (t[(t.StreamInvocation = 4)] = "StreamInvocation"),
        (t[(t.CancelInvocation = 5)] = "CancelInvocation"),
        (t[(t.Ping = 6)] = "Ping"),
        (t[(t.Close = 7)] = "Close");
      var ed = (function () {
        var e;
        function t() {
          (function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, t),
            (this.observers = []);
        }
        return (
          (e = [
            {
              key: "next",
              value: function (e) {
                var t = !0,
                  n = !1,
                  r = void 0;
                try {
                  for (
                    var o, i = this.observers[Symbol.iterator]();
                    !(t = (o = i.next()).done);
                    t = !0
                  )
                    o.value.next(e);
                } catch (e) {
                  (n = !0), (r = e);
                } finally {
                  try {
                    t || null == i.return || i.return();
                  } finally {
                    if (n) throw r;
                  }
                }
              },
            },
            {
              key: "error",
              value: function (e) {
                var t = !0,
                  n = !1,
                  r = void 0;
                try {
                  for (
                    var o, i = this.observers[Symbol.iterator]();
                    !(t = (o = i.next()).done);
                    t = !0
                  ) {
                    var a = o.value;
                    a.error && a.error(e);
                  }
                } catch (e) {
                  (n = !0), (r = e);
                } finally {
                  try {
                    t || null == i.return || i.return();
                  } finally {
                    if (n) throw r;
                  }
                }
              },
            },
            {
              key: "complete",
              value: function () {
                var e = !0,
                  t = !1,
                  n = void 0;
                try {
                  for (
                    var r, o = this.observers[Symbol.iterator]();
                    !(e = (r = o.next()).done);
                    e = !0
                  ) {
                    var i = r.value;
                    i.complete && i.complete();
                  }
                } catch (e) {
                  (t = !0), (n = e);
                } finally {
                  try {
                    e || null == o.return || o.return();
                  } finally {
                    if (t) throw n;
                  }
                }
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                return this.observers.push(e), new G(this, e);
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(t.prototype, e),
          t
        );
      })();
      function eh(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function eg(e, t, n, r, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          n(e);
          return;
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function ey(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              eg(i, r, o, a, c, "next", e);
            }
            function c(e) {
              eg(i, r, o, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function eb(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ev(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n,
              r,
              o =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != o) {
              var i = [],
                a = !0,
                c = !1;
              try {
                for (
                  o = o.call(e);
                  !(a = (n = o.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (e) {
                (c = !0), (r = e);
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (c) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return eh(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(n);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return eh(e, t);
            }
          })(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function em(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: c(0), throw: c(1), return: c(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function c(i) {
          return function (c) {
            return (function (i) {
              if (n) throw TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, c]);
          };
        }
      }
      ((r = l || (l = {})).Disconnected = "Disconnected"),
        (r.Connecting = "Connecting"),
        (r.Connected = "Connected"),
        (r.Disconnecting = "Disconnecting"),
        (r.Reconnecting = "Reconnecting");
      var eS = (function () {
          var e, t;
          function n(e, t, r, o) {
            var i = this;
            (function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
              (this._nextKeepAlive = 0),
              (this._freezeEventListener = function () {
                i._logger.log(
                  c.Warning,
                  "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep",
                );
              }),
              L.isRequired(e, "connection"),
              L.isRequired(t, "logger"),
              L.isRequired(r, "protocol"),
              (this.serverTimeoutInMilliseconds = 3e4),
              (this.keepAliveIntervalInMilliseconds = 15e3),
              (this._logger = t),
              (this._protocol = r),
              (this.connection = e),
              (this._reconnectPolicy = o),
              (this._handshakeProtocol = new V()),
              (this.connection.onreceive = function (e) {
                return i._processIncomingData(e);
              }),
              (this.connection.onclose = function (e) {
                return i._connectionClosed(e);
              }),
              (this._callbacks = {}),
              (this._methods = {}),
              (this._closedCallbacks = []),
              (this._reconnectingCallbacks = []),
              (this._reconnectedCallbacks = []),
              (this._invocationId = 0),
              (this._receivedHandshakeResponse = !1),
              (this._connectionState = l.Disconnected),
              (this._connectionStarted = !1),
              (this._cachedPingMessage = this._protocol.writeMessage({
                type: s.Ping,
              }));
          }
          return (
            (e = [
              {
                key: "state",
                get: function () {
                  return this._connectionState;
                },
              },
              {
                key: "connectionId",
                get: function () {
                  return (
                    (this.connection && this.connection.connectionId) || null
                  );
                },
              },
              {
                key: "baseUrl",
                get: function () {
                  return this.connection.baseUrl || "";
                },
                set: function (e) {
                  if (
                    this._connectionState !== l.Disconnected &&
                    this._connectionState !== l.Reconnecting
                  )
                    throw Error(
                      "The HubConnection must be in the Disconnected or Reconnecting state to change the url.",
                    );
                  if (!e)
                    throw Error("The HubConnection url must be a valid url.");
                  this.connection.baseUrl = e;
                },
              },
              {
                key: "start",
                value: function () {
                  return (
                    (this._startPromise = this._startWithStateTransitions()),
                    this._startPromise
                  );
                },
              },
              {
                key: "_startWithStateTransitions",
                value: function () {
                  var e = this;
                  return ey(function () {
                    var t;
                    return em(this, function (n) {
                      switch (n.label) {
                        case 0:
                          if (e._connectionState !== l.Disconnected)
                            return [
                              2,
                              Promise.reject(
                                Error(
                                  "Cannot start a HubConnection that is not in the 'Disconnected' state.",
                                ),
                              ),
                            ];
                          (e._connectionState = l.Connecting),
                            e._logger.log(c.Debug, "Starting HubConnection."),
                            (n.label = 1);
                        case 1:
                          return (
                            n.trys.push([1, 3, , 4]), [4, e._startInternal()]
                          );
                        case 2:
                          return (
                            n.sent(),
                            F.isBrowser &&
                              window.document.addEventListener(
                                "freeze",
                                e._freezeEventListener,
                              ),
                            (e._connectionState = l.Connected),
                            (e._connectionStarted = !0),
                            e._logger.log(
                              c.Debug,
                              "HubConnection connected successfully.",
                            ),
                            [3, 4]
                          );
                        case 3:
                          return (
                            (t = n.sent()),
                            (e._connectionState = l.Disconnected),
                            e._logger.log(
                              c.Debug,
                              "HubConnection failed to start successfully because of error '".concat(
                                t,
                                "'.",
                              ),
                            ),
                            [2, Promise.reject(t)]
                          );
                        case 4:
                          return [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "_startInternal",
                value: function () {
                  var e = this;
                  return ey(function () {
                    var t, n, r;
                    return em(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return (
                            (e._stopDuringStartError = void 0),
                            (e._receivedHandshakeResponse = !1),
                            (t = new Promise(function (t, n) {
                              (e._handshakeResolver = t),
                                (e._handshakeRejecter = n);
                            })),
                            [4, e.connection.start(e._protocol.transferFormat)]
                          );
                        case 1:
                          o.sent(), (o.label = 2);
                        case 2:
                          return (
                            o.trys.push([2, 7, , 9]),
                            (n = {
                              protocol: e._protocol.name,
                              version: e._protocol.version,
                            }),
                            e._logger.log(
                              c.Debug,
                              "Sending handshake request.",
                            ),
                            [
                              4,
                              e._sendMessage(
                                e._handshakeProtocol.writeHandshakeRequest(n),
                              ),
                            ]
                          );
                        case 3:
                          return (
                            o.sent(),
                            e._logger.log(
                              c.Information,
                              "Using HubProtocol '".concat(
                                e._protocol.name,
                                "'.",
                              ),
                            ),
                            e._cleanupTimeout(),
                            e._resetTimeoutPeriod(),
                            e._resetKeepAliveInterval(),
                            [4, t]
                          );
                        case 4:
                          if ((o.sent(), e._stopDuringStartError))
                            throw e._stopDuringStartError;
                          if (e.connection.features.inherentKeepAlive)
                            return [3, 6];
                          return [4, e._sendMessage(e._cachedPingMessage)];
                        case 5:
                          o.sent(), (o.label = 6);
                        case 6:
                          return [3, 9];
                        case 7:
                          return (
                            (r = o.sent()),
                            e._logger.log(
                              c.Debug,
                              "Hub handshake failed with error '".concat(
                                r,
                                "' during start(). Stopping HubConnection.",
                              ),
                            ),
                            e._cleanupTimeout(),
                            e._cleanupPingTimer(),
                            [4, e.connection.stop(r)]
                          );
                        case 8:
                          throw (o.sent(), r);
                        case 9:
                          return [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "stop",
                value: function () {
                  var e = this;
                  return ey(function () {
                    var t;
                    return em(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (t = e._startPromise),
                            (e._stopPromise = e._stopInternal()),
                            [4, e._stopPromise]
                          );
                        case 1:
                          n.sent(), (n.label = 2);
                        case 2:
                          return n.trys.push([2, 4, , 5]), [4, t];
                        case 3:
                        case 4:
                          return n.sent(), [3, 5];
                        case 5:
                          return [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "_stopInternal",
                value: function (e) {
                  return this._connectionState === l.Disconnected
                    ? (this._logger.log(
                        c.Debug,
                        "Call to HubConnection.stop(".concat(
                          e,
                          ") ignored because it is already in the disconnected state.",
                        ),
                      ),
                      Promise.resolve())
                    : this._connectionState === l.Disconnecting
                      ? (this._logger.log(
                          c.Debug,
                          "Call to HttpConnection.stop(".concat(
                            e,
                            ") ignored because the connection is already in the disconnecting state.",
                          ),
                        ),
                        this._stopPromise)
                      : ((this._connectionState = l.Disconnecting),
                          this._logger.log(c.Debug, "Stopping HubConnection."),
                          this._reconnectDelayHandle)
                        ? (this._logger.log(
                            c.Debug,
                            "Connection stopped during reconnect delay. Done reconnecting.",
                          ),
                          clearTimeout(this._reconnectDelayHandle),
                          (this._reconnectDelayHandle = void 0),
                          this._completeClose(),
                          Promise.resolve())
                        : (this._cleanupTimeout(),
                          this._cleanupPingTimer(),
                          (this._stopDuringStartError =
                            e ||
                            new ec(
                              "The connection was stopped before the hub handshake could complete.",
                            )),
                          this.connection.stop(e));
                },
              },
              {
                key: "stream",
                value: function (e) {
                  for (
                    var t,
                      n = this,
                      r = arguments.length,
                      o = Array(r > 1 ? r - 1 : 0),
                      i = 1;
                    i < r;
                    i++
                  )
                    o[i - 1] = arguments[i];
                  var a = ev(this._replaceStreamingParams(o), 2),
                    c = a[0],
                    l = a[1],
                    u = this._createStreamInvocation(e, o, l),
                    f = new ed();
                  return (
                    (f.cancelCallback = function () {
                      var e = n._createCancelInvocation(u.invocationId);
                      return (
                        delete n._callbacks[u.invocationId],
                        t.then(function () {
                          return n._sendWithProtocol(e);
                        })
                      );
                    }),
                    (this._callbacks[u.invocationId] = function (e, t) {
                      if (t) {
                        f.error(t);
                        return;
                      }
                      e &&
                        (e.type === s.Completion
                          ? e.error
                            ? f.error(Error(e.error))
                            : f.complete()
                          : f.next(e.item));
                    }),
                    (t = this._sendWithProtocol(u).catch(function (e) {
                      f.error(e), delete n._callbacks[u.invocationId];
                    })),
                    this._launchStreams(c, t),
                    f
                  );
                },
              },
              {
                key: "_sendMessage",
                value: function (e) {
                  return (
                    this._resetKeepAliveInterval(), this.connection.send(e)
                  );
                },
              },
              {
                key: "_sendWithProtocol",
                value: function (e) {
                  return this._sendMessage(this._protocol.writeMessage(e));
                },
              },
              {
                key: "send",
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  var o = ev(this._replaceStreamingParams(n), 2),
                    i = o[0],
                    a = o[1],
                    c = this._sendWithProtocol(
                      this._createInvocation(e, n, !0, a),
                    );
                  return this._launchStreams(i, c), c;
                },
              },
              {
                key: "invoke",
                value: function (e) {
                  for (
                    var t = this,
                      n = arguments.length,
                      r = Array(n > 1 ? n - 1 : 0),
                      o = 1;
                    o < n;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  var i = ev(this._replaceStreamingParams(r), 2),
                    a = i[0],
                    c = i[1],
                    l = this._createInvocation(e, r, !1, c);
                  return new Promise(function (e, n) {
                    t._callbacks[l.invocationId] = function (t, r) {
                      if (r) {
                        n(r);
                        return;
                      }
                      t &&
                        (t.type === s.Completion
                          ? t.error
                            ? n(Error(t.error))
                            : e(t.result)
                          : n(
                              Error("Unexpected message type: ".concat(t.type)),
                            ));
                    };
                    var r = t._sendWithProtocol(l).catch(function (e) {
                      n(e), delete t._callbacks[l.invocationId];
                    });
                    t._launchStreams(a, r);
                  });
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  if (e && t)
                    (e = e.toLowerCase()),
                      this._methods[e] || (this._methods[e] = []),
                      -1 === this._methods[e].indexOf(t) &&
                        this._methods[e].push(t);
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  if (e) {
                    e = e.toLowerCase();
                    var n = this._methods[e];
                    if (n) {
                      if (t) {
                        var r = n.indexOf(t);
                        -1 !== r &&
                          (n.splice(r, 1),
                          0 === n.length && delete this._methods[e]);
                      } else delete this._methods[e];
                    }
                  }
                },
              },
              {
                key: "onclose",
                value: function (e) {
                  e && this._closedCallbacks.push(e);
                },
              },
              {
                key: "onreconnecting",
                value: function (e) {
                  e && this._reconnectingCallbacks.push(e);
                },
              },
              {
                key: "onreconnected",
                value: function (e) {
                  e && this._reconnectedCallbacks.push(e);
                },
              },
              {
                key: "_processIncomingData",
                value: function (e) {
                  if (
                    (this._cleanupTimeout(),
                    this._receivedHandshakeResponse ||
                      ((e = this._processHandshakeResponse(e)),
                      (this._receivedHandshakeResponse = !0)),
                    e)
                  ) {
                    var t = this._protocol.parseMessages(e, this._logger),
                      n = !0,
                      r = !1,
                      o = void 0;
                    try {
                      for (
                        var i, a = t[Symbol.iterator]();
                        !(n = (i = a.next()).done);
                        n = !0
                      ) {
                        var l = i.value;
                        switch (l.type) {
                          case s.Invocation:
                            this._invokeClientMethod(l);
                            break;
                          case s.StreamItem:
                          case s.Completion:
                            var u = this._callbacks[l.invocationId];
                            if (u) {
                              l.type === s.Completion &&
                                delete this._callbacks[l.invocationId];
                              try {
                                u(l);
                              } catch (e) {
                                this._logger.log(
                                  c.Error,
                                  "Stream callback threw error: ".concat(J(e)),
                                );
                              }
                            }
                            break;
                          case s.Ping:
                            break;
                          case s.Close:
                            this._logger.log(
                              c.Information,
                              "Close message received from server.",
                            );
                            var f = l.error
                              ? Error(
                                  "Server returned an error on close: " +
                                    l.error,
                                )
                              : void 0;
                            !0 === l.allowReconnect
                              ? this.connection.stop(f)
                              : (this._stopPromise = this._stopInternal(f));
                            break;
                          default:
                            this._logger.log(
                              c.Warning,
                              "Invalid message type: ".concat(l.type, "."),
                            );
                        }
                      }
                    } catch (e) {
                      (r = !0), (o = e);
                    } finally {
                      try {
                        n || null == a.return || a.return();
                      } finally {
                        if (r) throw o;
                      }
                    }
                  }
                  this._resetTimeoutPeriod();
                },
              },
              {
                key: "_processHandshakeResponse",
                value: function (e) {
                  try {
                    (n = (r = ev(
                      this._handshakeProtocol.parseHandshakeResponse(e),
                      2,
                    ))[0]),
                      (t = r[1]);
                  } catch (e) {
                    var t,
                      n,
                      r,
                      o = "Error parsing handshake response: " + e;
                    this._logger.log(c.Error, o);
                    var i = Error(o);
                    throw (this._handshakeRejecter(i), i);
                  }
                  if (t.error) {
                    var a = "Server returned handshake error: " + t.error;
                    this._logger.log(c.Error, a);
                    var s = Error(a);
                    throw (this._handshakeRejecter(s), s);
                  }
                  return (
                    this._logger.log(c.Debug, "Server handshake complete."),
                    this._handshakeResolver(),
                    n
                  );
                },
              },
              {
                key: "_resetKeepAliveInterval",
                value: function () {
                  !this.connection.features.inherentKeepAlive &&
                    ((this._nextKeepAlive =
                      new Date().getTime() +
                      this.keepAliveIntervalInMilliseconds),
                    this._cleanupPingTimer());
                },
              },
              {
                key: "_resetTimeoutPeriod",
                value: function () {
                  var e = this;
                  if (
                    (!this.connection.features ||
                      !this.connection.features.inherentKeepAlive) &&
                    ((this._timeoutHandle = setTimeout(function () {
                      return e.serverTimeout();
                    }, this.serverTimeoutInMilliseconds)),
                    void 0 === this._pingServerHandle)
                  ) {
                    var t = this._nextKeepAlive - new Date().getTime();
                    t < 0 && (t = 0);
                    var n = this;
                    this._pingServerHandle = setTimeout(
                      ey(function () {
                        return em(this, function (e) {
                          switch (e.label) {
                            case 0:
                              if (n._connectionState !== l.Connected)
                                return [3, 4];
                              e.label = 1;
                            case 1:
                              return (
                                e.trys.push([1, 3, , 4]),
                                [4, n._sendMessage(n._cachedPingMessage)]
                              );
                            case 2:
                              return e.sent(), [3, 4];
                            case 3:
                              return e.sent(), n._cleanupPingTimer(), [3, 4];
                            case 4:
                              return [2];
                          }
                        });
                      }),
                      t,
                    );
                  }
                },
              },
              {
                key: "serverTimeout",
                value: function () {
                  this.connection.stop(
                    Error(
                      "Server timeout elapsed without receiving a message from the server.",
                    ),
                  );
                },
              },
              {
                key: "_invokeClientMethod",
                value: function (e) {
                  var t = this;
                  return ey(function () {
                    var n, r, o, i, a, s, l, u, f, p, d, h, g, y, b, v;
                    return em(this, function (m) {
                      switch (m.label) {
                        case 0:
                          if (
                            ((n = e.target.toLowerCase()), (r = t._methods[n]))
                          )
                            return [3, 3];
                          if (
                            (t._logger.log(
                              c.Warning,
                              "No client method with the name '".concat(
                                n,
                                "' found.",
                              ),
                            ),
                            !e.invocationId)
                          )
                            return [3, 2];
                          return (
                            t._logger.log(
                              c.Warning,
                              "No result given for '"
                                .concat(n, "' method and invocation ID '")
                                .concat(e.invocationId, "'."),
                            ),
                            [
                              4,
                              t._sendWithProtocol(
                                t._createCompletionMessage(
                                  e.invocationId,
                                  "Client didn't provide a result.",
                                  null,
                                ),
                              ),
                            ]
                          );
                        case 1:
                          m.sent(), (m.label = 2);
                        case 2:
                          return [2];
                        case 3:
                          (o = r.slice()),
                            (i = !!e.invocationId),
                            (u = !0),
                            (f = !1),
                            (p = void 0),
                            (m.label = 4);
                        case 4:
                          m.trys.push([4, 11, 12, 13]),
                            (d = o[Symbol.iterator]()),
                            (m.label = 5);
                        case 5:
                          if ((u = (h = d.next()).done)) return [3, 10];
                          (g = h.value), (m.label = 6);
                        case 6:
                          return (
                            m.trys.push([6, 8, , 9]),
                            (y = a),
                            [4, g.apply(t, e.arguments)]
                          );
                        case 7:
                          return (
                            (a = m.sent()),
                            i &&
                              a &&
                              y &&
                              (t._logger.log(
                                c.Error,
                                "Multiple results provided for '".concat(
                                  n,
                                  "'. Sending error to server.",
                                ),
                              ),
                              (l = t._createCompletionMessage(
                                e.invocationId,
                                "Client provided multiple results.",
                                null,
                              ))),
                            (s = void 0),
                            [3, 9]
                          );
                        case 8:
                          return (
                            (s = b = m.sent()),
                            t._logger.log(
                              c.Error,
                              "A callback for the method '"
                                .concat(n, "' threw error '")
                                .concat(b, "'."),
                            ),
                            [3, 9]
                          );
                        case 9:
                          return (u = !0), [3, 5];
                        case 10:
                          return [3, 13];
                        case 11:
                          return (v = m.sent()), (f = !0), (p = v), [3, 13];
                        case 12:
                          try {
                            u || null == d.return || d.return();
                          } finally {
                            if (f) throw p;
                          }
                          return [7];
                        case 13:
                          if (!l) return [3, 15];
                          return [4, t._sendWithProtocol(l)];
                        case 14:
                        case 16:
                          return m.sent(), [3, 18];
                        case 15:
                          if (!i) return [3, 17];
                          return (
                            s
                              ? (l = t._createCompletionMessage(
                                  e.invocationId,
                                  "".concat(s),
                                  null,
                                ))
                              : void 0 !== a
                                ? (l = t._createCompletionMessage(
                                    e.invocationId,
                                    null,
                                    a,
                                  ))
                                : (t._logger.log(
                                    c.Warning,
                                    "No result given for '"
                                      .concat(n, "' method and invocation ID '")
                                      .concat(e.invocationId, "'."),
                                  ),
                                  (l = t._createCompletionMessage(
                                    e.invocationId,
                                    "Client didn't provide a result.",
                                    null,
                                  ))),
                            [4, t._sendWithProtocol(l)]
                          );
                        case 17:
                          a &&
                            t._logger.log(
                              c.Error,
                              "Result given for '".concat(
                                n,
                                "' method but server is not expecting a result.",
                              ),
                            ),
                            (m.label = 18);
                        case 18:
                          return [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "_connectionClosed",
                value: function (e) {
                  this._logger.log(
                    c.Debug,
                    "HubConnection.connectionClosed("
                      .concat(e, ") called while in state ")
                      .concat(this._connectionState, "."),
                  ),
                    (this._stopDuringStartError =
                      this._stopDuringStartError ||
                      e ||
                      new ec(
                        "The underlying connection was closed before the hub handshake could complete.",
                      )),
                    this._handshakeResolver && this._handshakeResolver(),
                    this._cancelCallbacksWithError(
                      e ||
                        Error(
                          "Invocation canceled due to the underlying connection being closed.",
                        ),
                    ),
                    this._cleanupTimeout(),
                    this._cleanupPingTimer(),
                    this._connectionState === l.Disconnecting
                      ? this._completeClose(e)
                      : this._connectionState === l.Connected &&
                          this._reconnectPolicy
                        ? this._reconnect(e)
                        : this._connectionState === l.Connected &&
                          this._completeClose(e);
                },
              },
              {
                key: "_completeClose",
                value: function (e) {
                  var t = this;
                  if (this._connectionStarted) {
                    (this._connectionState = l.Disconnected),
                      (this._connectionStarted = !1),
                      F.isBrowser &&
                        window.document.removeEventListener(
                          "freeze",
                          this._freezeEventListener,
                        );
                    try {
                      this._closedCallbacks.forEach(function (n) {
                        return n.apply(t, [e]);
                      });
                    } catch (t) {
                      this._logger.log(
                        c.Error,
                        "An onclose callback called with error '"
                          .concat(e, "' threw error '")
                          .concat(t, "'."),
                      );
                    }
                  }
                },
              },
              {
                key: "_reconnect",
                value: function (e) {
                  var t = this;
                  return ey(function () {
                    var n, r, o, i, a;
                    return em(this, function (s) {
                      switch (s.label) {
                        case 0:
                          if (
                            ((n = Date.now()),
                            (r = 0),
                            (o =
                              void 0 !== e
                                ? e
                                : Error(
                                    "Attempting to reconnect due to a unknown error.",
                                  )),
                            null === (i = t._getNextRetryDelay(r++, 0, o)))
                          )
                            return (
                              t._logger.log(
                                c.Debug,
                                "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.",
                              ),
                              t._completeClose(e),
                              [2]
                            );
                          if (
                            ((t._connectionState = l.Reconnecting),
                            e
                              ? t._logger.log(
                                  c.Information,
                                  "Connection reconnecting because of error '".concat(
                                    e,
                                    "'.",
                                  ),
                                )
                              : t._logger.log(
                                  c.Information,
                                  "Connection reconnecting.",
                                ),
                            0 !== t._reconnectingCallbacks.length)
                          ) {
                            try {
                              t._reconnectingCallbacks.forEach(function (n) {
                                return n.apply(t, [e]);
                              });
                            } catch (n) {
                              t._logger.log(
                                c.Error,
                                "An onreconnecting callback called with error '"
                                  .concat(e, "' threw error '")
                                  .concat(n, "'."),
                              );
                            }
                            if (t._connectionState !== l.Reconnecting)
                              return (
                                t._logger.log(
                                  c.Debug,
                                  "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.",
                                ),
                                [2]
                              );
                          }
                          s.label = 1;
                        case 1:
                          if (null === i) return [3, 7];
                          return (
                            t._logger.log(
                              c.Information,
                              "Reconnect attempt number "
                                .concat(r, " will start in ")
                                .concat(i, " ms."),
                            ),
                            [
                              4,
                              new Promise(function (e) {
                                t._reconnectDelayHandle = setTimeout(e, i);
                              }),
                            ]
                          );
                        case 2:
                          if (
                            (s.sent(),
                            (t._reconnectDelayHandle = void 0),
                            t._connectionState !== l.Reconnecting)
                          )
                            return (
                              t._logger.log(
                                c.Debug,
                                "Connection left the reconnecting state during reconnect delay. Done reconnecting.",
                              ),
                              [2]
                            );
                          s.label = 3;
                        case 3:
                          return (
                            s.trys.push([3, 5, , 6]), [4, t._startInternal()]
                          );
                        case 4:
                          if (
                            (s.sent(),
                            (t._connectionState = l.Connected),
                            t._logger.log(
                              c.Information,
                              "HubConnection reconnected successfully.",
                            ),
                            0 !== t._reconnectedCallbacks.length)
                          )
                            try {
                              t._reconnectedCallbacks.forEach(function (e) {
                                return e.apply(t, [t.connection.connectionId]);
                              });
                            } catch (e) {
                              t._logger.log(
                                c.Error,
                                "An onreconnected callback called with connectionId '"
                                  .concat(
                                    t.connection.connectionId,
                                    "; threw error '",
                                  )
                                  .concat(e, "'."),
                              );
                            }
                          return [2];
                        case 5:
                          if (
                            ((a = s.sent()),
                            t._logger.log(
                              c.Information,
                              "Reconnect attempt failed because of error '".concat(
                                a,
                                "'.",
                              ),
                            ),
                            t._connectionState !== l.Reconnecting)
                          )
                            return (
                              t._logger.log(
                                c.Debug,
                                "Connection moved to the '".concat(
                                  t._connectionState,
                                  "' from the reconnecting state during reconnect attempt. Done reconnecting.",
                                ),
                              ),
                              t._connectionState === l.Disconnecting &&
                                t._completeClose(),
                              [2]
                            );
                          return (
                            (o = a instanceof Error ? a : Error(a.toString())),
                            (i = t._getNextRetryDelay(r++, Date.now() - n, o)),
                            [3, 6]
                          );
                        case 6:
                          return [3, 1];
                        case 7:
                          return (
                            t._logger.log(
                              c.Information,
                              "Reconnect retries have been exhausted after "
                                .concat(Date.now() - n, " ms and ")
                                .concat(
                                  r,
                                  " failed attempts. Connection disconnecting.",
                                ),
                            ),
                            t._completeClose(),
                            [2]
                          );
                      }
                    });
                  })();
                },
              },
              {
                key: "_getNextRetryDelay",
                value: function (e, t, n) {
                  try {
                    return this._reconnectPolicy.nextRetryDelayInMilliseconds({
                      elapsedMilliseconds: t,
                      previousRetryCount: e,
                      retryReason: n,
                    });
                  } catch (n) {
                    return (
                      this._logger.log(
                        c.Error,
                        "IRetryPolicy.nextRetryDelayInMilliseconds("
                          .concat(e, ", ")
                          .concat(t, ") threw error '")
                          .concat(n, "'."),
                      ),
                      null
                    );
                  }
                },
              },
              {
                key: "_cancelCallbacksWithError",
                value: function (e) {
                  var t = this,
                    n = this._callbacks;
                  (this._callbacks = {}),
                    Object.keys(n).forEach(function (r) {
                      var o = n[r];
                      try {
                        o(null, e);
                      } catch (n) {
                        t._logger.log(
                          c.Error,
                          "Stream 'error' callback called with '"
                            .concat(e, "' threw error: ")
                            .concat(J(n)),
                        );
                      }
                    });
                },
              },
              {
                key: "_cleanupPingTimer",
                value: function () {
                  this._pingServerHandle &&
                    (clearTimeout(this._pingServerHandle),
                    (this._pingServerHandle = void 0));
                },
              },
              {
                key: "_cleanupTimeout",
                value: function () {
                  this._timeoutHandle && clearTimeout(this._timeoutHandle);
                },
              },
              {
                key: "_createInvocation",
                value: function (e, t, n, r) {
                  if (n)
                    return 0 !== r.length
                      ? {
                          arguments: t,
                          streamIds: r,
                          target: e,
                          type: s.Invocation,
                        }
                      : { arguments: t, target: e, type: s.Invocation };
                  var o = this._invocationId;
                  return (this._invocationId++, 0 !== r.length)
                    ? {
                        arguments: t,
                        invocationId: o.toString(),
                        streamIds: r,
                        target: e,
                        type: s.Invocation,
                      }
                    : {
                        arguments: t,
                        invocationId: o.toString(),
                        target: e,
                        type: s.Invocation,
                      };
                },
              },
              {
                key: "_launchStreams",
                value: function (e, t) {
                  var n = function (n) {
                      e[n].subscribe({
                        complete: function () {
                          t = t.then(function () {
                            return r._sendWithProtocol(
                              r._createCompletionMessage(n),
                            );
                          });
                        },
                        error: function (e) {
                          var o;
                          (o =
                            e instanceof Error
                              ? e.message
                              : e && e.toString
                                ? e.toString()
                                : "Unknown error"),
                            (t = t.then(function () {
                              return r._sendWithProtocol(
                                r._createCompletionMessage(n, o),
                              );
                            }));
                        },
                        next: function (e) {
                          t = t.then(function () {
                            return r._sendWithProtocol(
                              r._createStreamItemMessage(n, e),
                            );
                          });
                        },
                      });
                    },
                    r = this;
                  if (0 !== e.length)
                    for (var o in (t || (t = Promise.resolve()), e)) n(o);
                },
              },
              {
                key: "_replaceStreamingParams",
                value: function (e) {
                  for (var t = [], n = [], r = 0; r < e.length; r++) {
                    var o = e[r];
                    if (this._isObservable(o)) {
                      var i = this._invocationId;
                      this._invocationId++,
                        (t[i] = o),
                        n.push(i.toString()),
                        e.splice(r, 1);
                    }
                  }
                  return [t, n];
                },
              },
              {
                key: "_isObservable",
                value: function (e) {
                  return e && e.subscribe && "function" == typeof e.subscribe;
                },
              },
              {
                key: "_createStreamInvocation",
                value: function (e, t, n) {
                  var r = this._invocationId;
                  return (this._invocationId++, 0 !== n.length)
                    ? {
                        arguments: t,
                        invocationId: r.toString(),
                        streamIds: n,
                        target: e,
                        type: s.StreamInvocation,
                      }
                    : {
                        arguments: t,
                        invocationId: r.toString(),
                        target: e,
                        type: s.StreamInvocation,
                      };
                },
              },
              {
                key: "_createCancelInvocation",
                value: function (e) {
                  return { invocationId: e, type: s.CancelInvocation };
                },
              },
              {
                key: "_createStreamItemMessage",
                value: function (e, t) {
                  return { invocationId: e, item: t, type: s.StreamItem };
                },
              },
              {
                key: "_createCompletionMessage",
                value: function (e, t, n) {
                  return t
                    ? { error: t, invocationId: e, type: s.Completion }
                    : { invocationId: e, result: n, type: s.Completion };
                },
              },
            ]),
            (t = [
              {
                key: "create",
                value: function (e, t, r, o) {
                  return new n(e, t, r, o);
                },
              },
            ]),
            e && eb(n.prototype, e),
            t && eb(n, t),
            n
          );
        })(),
        e_ = window.Roblox["core-scripts"].util.crossTabCommunication,
        ew = {
          Notification: "Roblox.RealTime.Events.Notification",
          ConnectionEvent: "Roblox.RealTime.Events.ConnectionEvent",
          RequestForConnectionStatus:
            "Roblox.RealTime.Events.RequestForConnectionStatus",
        },
        eC = function (e, t, n, r, o) {
          var i = {
              0: "connecting",
              1: "connected",
              2: "reconnecting",
              4: "disconnected",
            },
            a = { connected: 1 },
            c = null,
            s = !1,
            l = (function () {
              var e = window.Roblox.Utilities;
              if (!e) return !1;
              var t = new e.ExponentialBackoffSpecification({
                  firstAttemptDelay: 2e3,
                  firstAttemptRandomnessFactor: 3,
                  subsequentDelayBase: 1e4,
                  subsequentDelayRandomnessFactor: 0.5,
                  maximumDelayBase: 3e5,
                }),
                n = new e.ExponentialBackoffSpecification({
                  firstAttemptDelay: 2e4,
                  firstAttemptRandomnessFactor: 0.5,
                  subsequentDelayBase: 4e4,
                  subsequentDelayRandomnessFactor: 0.5,
                  maximumDelayBase: 3e5,
                });
              return new e.ExponentialBackoff(
                t,
                function (e) {
                  var t = e.GetLastResetTime();
                  return !!(t && t + 6e4 > new Date().getTime());
                },
                n,
              );
            })(),
            u = function (e) {
              t && t(e);
            },
            f = function () {
              var t = { pingInterval: null };
              return (
                e.isSignalRClientTransportRestrictionEnabled &&
                  (t.transport = window.WebSocket
                    ? ["webSockets"]
                    : ["webSockets", "longPolling"]),
                t
              );
            },
            p = function (e) {
              e.newState === a.connected
                ? ((s = !0), n(!0))
                : e.oldState === a.connected && s && ((s = !1), n(!1)),
                u(
                  "Connection Status changed from ["
                    .concat(i[e.oldState], "] to [")
                    .concat(i[e.newState], "]"),
                );
            },
            d = function () {
              var e = l.StartNewAttempt();
              u(
                "In disconnected handler. Will attempt Reconnect after ".concat(
                  e,
                  "ms",
                ),
              ),
                setTimeout(function () {
                  if (1 === l.GetAttemptCount()) {
                    var e = window.Roblox.CurrentUser,
                      t = "userId: ".concat(e) && e.userId;
                    "undefined" != typeof GoogleAnalyticsEvents &&
                      GoogleAnalyticsEvents.FireEvent([
                        "SignalR",
                        "Attempting to Reconnect",
                        t,
                      ]);
                  }
                  u(
                    "Attempting to Reconnect [".concat(
                      l.GetAttemptCount(),
                      "]...",
                    ),
                  ),
                    null != c &&
                      c
                        .start(f())
                        .done(function () {
                          l.Reset(), u("Connected Again!");
                        })
                        .fail(function () {
                          u("Failed to Reconnect!");
                        });
                }, e);
            },
            h = function () {
              u("In reconnecting handler. Attempt to force disconnect."),
                c.stop();
            },
            g = function () {
              var t = e.notificationsUrl,
                n = I().hubConnection("".concat(t, "/notifications"), {
                  useDefaultPath: !1,
                }),
                i = n.createHubProxy("userNotificationHub");
              return (
                i.on("notification", r),
                i.on("subscriptionStatus", o),
                n.stateChanged(p),
                n.disconnected(d),
                n.reconnecting(h),
                n
              );
            },
            y = function () {
              (c = g())
                .start(f())
                .done(function () {
                  u("Connected to SignalR [".concat(c.transport.name, "]"));
                })
                .fail(function (e) {
                  u("FAILED to connect to SignalR [".concat(e, "]"));
                });
            };
          (this.Start = y),
            (this.Stop = function () {
              c && (I()(c).unbind(), c.stop(), (c = null)), n(!1);
            }),
            (this.Restart = function () {
              null === c ? y() : c.stop();
            }),
            (this.IsConnected = function () {
              return s;
            });
        };
      function eE(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var ek = [0, 2e3, 1e4, 3e4, null],
        eT = (function () {
          var e;
          function t(e) {
            (function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, t),
              (this._retryDelays =
                void 0 !== e
                  ? (
                      (function (e) {
                        if (Array.isArray(e)) return eE(e);
                      })(e) ||
                      (function (e) {
                        if (
                          ("undefined" != typeof Symbol &&
                            null != e[Symbol.iterator]) ||
                          null != e["@@iterator"]
                        )
                          return Array.from(e);
                      })(e) ||
                      (function (e, t) {
                        if (e) {
                          if ("string" == typeof e) return eE(e, void 0);
                          var n = Object.prototype.toString
                            .call(e)
                            .slice(8, -1);
                          if (
                            ("Object" === n &&
                              e.constructor &&
                              (n = e.constructor.name),
                            "Map" === n || "Set" === n)
                          )
                            return Array.from(n);
                          if (
                            "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          )
                            return eE(e, t);
                        }
                      })(e) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                        );
                      })()
                    ).concat([null])
                  : ek);
          }
          return (
            (e = [
              {
                key: "nextRetryDelayInMilliseconds",
                value: function (e) {
                  return this._retryDelays[e.previousRetryCount];
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(t.prototype, e),
            t
          );
        })(),
        eR = function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, e);
        };
      function eO(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function eI(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              }),
            )),
            r.forEach(function (t) {
              var r;
              (r = n[t]),
                t in e
                  ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = r);
            });
        }
        return e;
      }
      function ej(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              }),
          e
        );
      }
      (eR.Authorization = "Authorization"), (eR.Cookie = "Cookie");
      var eP = function e(t, n, r) {
          eO(this, e),
            (this.statusCode = t),
            (this.statusText = n),
            (this.content = r);
        },
        eA = (function () {
          var e;
          function t() {
            eO(this, t);
          }
          return (
            (e = [
              {
                key: "get",
                value: function (e, t) {
                  return this.send(ej(eI({}, t), { method: "GET", url: e }));
                },
              },
              {
                key: "post",
                value: function (e, t) {
                  return this.send(ej(eI({}, t), { method: "POST", url: e }));
                },
              },
              {
                key: "delete",
                value: function (e, t) {
                  return this.send(ej(eI({}, t), { method: "DELETE", url: e }));
                },
              },
              {
                key: "getCookieString",
                value: function (e) {
                  return "";
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(t.prototype, e),
            t
          );
        })();
      function ex(e, t, n, r, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          n(e);
          return;
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function eD(e) {
        return (eD = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function eN(e, t) {
        return (eN =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function eq() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (eq = function () {
          return !!e;
        })();
      }
      var eM = (function (e) {
        var t;
        function n(e, t) {
          var r, o, i, a, c, s;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
            (o = eD((o = n))),
            (((a = this),
            (r =
              (c = eq()
                ? Reflect.construct(o, [], eD(this).constructor)
                : o.apply(this, i)) &&
              ("object" ==
                ((s = c) &&
                "undefined" != typeof Symbol &&
                s.constructor === Symbol
                  ? "symbol"
                  : typeof s) ||
                "function" == typeof c)
                ? c
                : (function (e) {
                    if (void 0 === e)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return e;
                  })(a)))._innerClient = e),
            (r._accessTokenFactory = t),
            r
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && eN(e, t);
          })(n, e),
          (t = [
            {
              key: "send",
              value: function (e) {
                var t,
                  n = this;
                return ((t = function () {
                  var t, r;
                  return (function (e, t) {
                    var n,
                      r,
                      o,
                      i,
                      a = {
                        label: 0,
                        sent: function () {
                          if (1 & o[0]) throw o[1];
                          return o[1];
                        },
                        trys: [],
                        ops: [],
                      };
                    return (
                      (i = { next: c(0), throw: c(1), return: c(2) }),
                      "function" == typeof Symbol &&
                        (i[Symbol.iterator] = function () {
                          return this;
                        }),
                      i
                    );
                    function c(i) {
                      return function (c) {
                        return (function (i) {
                          if (n)
                            throw TypeError("Generator is already executing.");
                          for (; a; )
                            try {
                              if (
                                ((n = 1),
                                r &&
                                  (o =
                                    2 & i[0]
                                      ? r.return
                                      : i[0]
                                        ? r.throw ||
                                          ((o = r.return) && o.call(r), 0)
                                        : r.next) &&
                                  !(o = o.call(r, i[1])).done)
                              )
                                return o;
                              switch (
                                ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                              ) {
                                case 0:
                                case 1:
                                  o = i;
                                  break;
                                case 4:
                                  return a.label++, { value: i[1], done: !1 };
                                case 5:
                                  a.label++, (r = i[1]), (i = [0]);
                                  continue;
                                case 7:
                                  (i = a.ops.pop()), a.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(o =
                                      (o = a.trys).length > 0 &&
                                      o[o.length - 1]) &&
                                    (6 === i[0] || 2 === i[0])
                                  ) {
                                    a = 0;
                                    continue;
                                  }
                                  if (
                                    3 === i[0] &&
                                    (!o || (i[1] > o[0] && i[1] < o[3]))
                                  ) {
                                    a.label = i[1];
                                    break;
                                  }
                                  if (6 === i[0] && a.label < o[1]) {
                                    (a.label = o[1]), (o = i);
                                    break;
                                  }
                                  if (o && a.label < o[2]) {
                                    (a.label = o[2]), a.ops.push(i);
                                    break;
                                  }
                                  o[2] && a.ops.pop(), a.trys.pop();
                                  continue;
                              }
                              i = t.call(e, a);
                            } catch (e) {
                              (i = [6, e]), (r = 0);
                            } finally {
                              n = o = 0;
                            }
                          if (5 & i[0]) throw i[1];
                          return { value: i[0] ? i[1] : void 0, done: !0 };
                        })([i, c]);
                      };
                    }
                  })(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (
                          ((t = !0),
                          !(
                            n._accessTokenFactory &&
                            (!n._accessToken ||
                              (e.url && e.url.indexOf("/negotiate?") > 0))
                          ))
                        )
                          return [3, 2];
                        return (t = !1), [4, n._accessTokenFactory()];
                      case 1:
                        (n._accessToken = o.sent()), (o.label = 2);
                      case 2:
                        return (
                          n._setAuthorizationHeader(e),
                          [4, n._innerClient.send(e)]
                        );
                      case 3:
                        if (
                          ((r = o.sent()),
                          !(t && 401 === r.statusCode && n._accessTokenFactory))
                        )
                          return [3, 6];
                        return [4, n._accessTokenFactory()];
                      case 4:
                        return (
                          (n._accessToken = o.sent()),
                          n._setAuthorizationHeader(e),
                          [4, n._innerClient.send(e)]
                        );
                      case 5:
                        return [2, o.sent()];
                      case 6:
                        return [2, r];
                    }
                  });
                }),
                function () {
                  var e = this,
                    n = arguments;
                  return new Promise(function (r, o) {
                    var i = t.apply(e, n);
                    function a(e) {
                      ex(i, r, o, a, c, "next", e);
                    }
                    function c(e) {
                      ex(i, r, o, a, c, "throw", e);
                    }
                    a(void 0);
                  });
                })();
              },
            },
            {
              key: "_setAuthorizationHeader",
              value: function (e) {
                e.headers || (e.headers = {}),
                  this._accessToken
                    ? (e.headers[eR.Authorization] = "Bearer ".concat(
                        this._accessToken,
                      ))
                    : this._accessTokenFactory &&
                      e.headers[eR.Authorization] &&
                      delete e.headers[eR.Authorization];
              },
            },
            {
              key: "getCookieString",
              value: function (e) {
                return this._innerClient.getCookieString(e);
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(n.prototype, t),
          n
        );
      })(eA);
      function eH(e, t, n, r, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          n(e);
          return;
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function eL(e) {
        return (eL = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function eF(e, t) {
        return (eF =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function eU() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (eU = function () {
          return !!e;
        })();
      }
      var eW = (function (e) {
        var t;
        function r(e) {
          if (
            ((function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, r),
            (t = eL((t = r))),
            (((i = this),
            (s =
              (a = eU()
                ? Reflect.construct(t, [], eL(this).constructor)
                : t.apply(this, o)) &&
              ("object" ==
                ((c = a) &&
                "undefined" != typeof Symbol &&
                c.constructor === Symbol
                  ? "symbol"
                  : typeof c) ||
                "function" == typeof a)
                ? a
                : (function (e) {
                    if (void 0 === e)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return e;
                  })(i)))._logger = e),
            "undefined" == typeof fetch)
          ) {
            var t,
              o,
              i,
              a,
              c,
              s,
              l = require;
            (s._jar = new (l("tough-cookie").CookieJar)()),
              (s._fetchType = l("node-fetch")),
              (s._fetchType = l("fetch-cookie")(s._fetchType, s._jar));
          } else
            s._fetchType = fetch.bind(
              (function () {
                if ("undefined" != typeof globalThis) return globalThis;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if (void 0 !== n.g) return n.g;
                throw Error("could not find global");
              })(),
            );
          if ("undefined" == typeof AbortController) {
            var u = require;
            s._abortControllerType = u("abort-controller");
          } else s._abortControllerType = AbortController;
          return s;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && eF(e, t);
          })(r, e),
          (t = [
            {
              key: "send",
              value: function (e) {
                var t,
                  n = this;
                return ((t = function () {
                  var t, r, o, i, a, s;
                  return (function (e, t) {
                    var n,
                      r,
                      o,
                      i,
                      a = {
                        label: 0,
                        sent: function () {
                          if (1 & o[0]) throw o[1];
                          return o[1];
                        },
                        trys: [],
                        ops: [],
                      };
                    return (
                      (i = { next: c(0), throw: c(1), return: c(2) }),
                      "function" == typeof Symbol &&
                        (i[Symbol.iterator] = function () {
                          return this;
                        }),
                      i
                    );
                    function c(i) {
                      return function (c) {
                        return (function (i) {
                          if (n)
                            throw TypeError("Generator is already executing.");
                          for (; a; )
                            try {
                              if (
                                ((n = 1),
                                r &&
                                  (o =
                                    2 & i[0]
                                      ? r.return
                                      : i[0]
                                        ? r.throw ||
                                          ((o = r.return) && o.call(r), 0)
                                        : r.next) &&
                                  !(o = o.call(r, i[1])).done)
                              )
                                return o;
                              switch (
                                ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                              ) {
                                case 0:
                                case 1:
                                  o = i;
                                  break;
                                case 4:
                                  return a.label++, { value: i[1], done: !1 };
                                case 5:
                                  a.label++, (r = i[1]), (i = [0]);
                                  continue;
                                case 7:
                                  (i = a.ops.pop()), a.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(o =
                                      (o = a.trys).length > 0 &&
                                      o[o.length - 1]) &&
                                    (6 === i[0] || 2 === i[0])
                                  ) {
                                    a = 0;
                                    continue;
                                  }
                                  if (
                                    3 === i[0] &&
                                    (!o || (i[1] > o[0] && i[1] < o[3]))
                                  ) {
                                    a.label = i[1];
                                    break;
                                  }
                                  if (6 === i[0] && a.label < o[1]) {
                                    (a.label = o[1]), (o = i);
                                    break;
                                  }
                                  if (o && a.label < o[2]) {
                                    (a.label = o[2]), a.ops.push(i);
                                    break;
                                  }
                                  o[2] && a.ops.pop(), a.trys.pop();
                                  continue;
                              }
                              i = t.call(e, a);
                            } catch (e) {
                              (i = [6, e]), (r = 0);
                            } finally {
                              n = o = 0;
                            }
                          if (5 & i[0]) throw i[1];
                          return { value: i[0] ? i[1] : void 0, done: !0 };
                        })([i, c]);
                      };
                    }
                  })(this, function (l) {
                    switch (l.label) {
                      case 0:
                        if (e.abortSignal && e.abortSignal.aborted)
                          throw new ec();
                        if (!e.method) throw Error("No method defined.");
                        if (!e.url) throw Error("No url defined.");
                        (t = new n._abortControllerType()),
                          e.abortSignal &&
                            (e.abortSignal.onabort = function () {
                              t.abort(), (r = new ec());
                            }),
                          (o = null),
                          e.timeout &&
                            (o = setTimeout(function () {
                              t.abort(),
                                n._logger.log(
                                  c.Warning,
                                  "Timeout from HTTP request.",
                                ),
                                (r = new ea());
                            }, e.timeout)),
                          "" === e.content && (e.content = void 0),
                          e.content &&
                            ((e.headers = e.headers || {}),
                            W(e.content)
                              ? (e.headers["Content-Type"] =
                                  "application/octet-stream")
                              : (e.headers["Content-Type"] =
                                  "text/plain;charset=UTF-8")),
                          (l.label = 1);
                      case 1:
                        return (
                          l.trys.push([1, 3, 4, 5]),
                          [
                            4,
                            n._fetchType(e.url, {
                              body: e.content,
                              cache: "no-cache",
                              credentials:
                                !0 === e.withCredentials
                                  ? "include"
                                  : "same-origin",
                              headers: (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                  var n =
                                      null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                  "function" ==
                                    typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(
                                        function (e) {
                                          return Object.getOwnPropertyDescriptor(
                                            n,
                                            e,
                                          ).enumerable;
                                        },
                                      ),
                                    )),
                                    r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                        t in e
                                          ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                            })
                                          : (e[t] = r);
                                    });
                                }
                                return e;
                              })(
                                { "X-Requested-With": "XMLHttpRequest" },
                                e.headers,
                              ),
                              method: e.method,
                              mode: "cors",
                              redirect: "follow",
                              signal: t.signal,
                            }),
                          ]
                        );
                      case 2:
                        return (i = l.sent()), [3, 5];
                      case 3:
                        if (((a = l.sent()), r)) throw r;
                        throw (
                          (n._logger.log(
                            c.Warning,
                            "Error from HTTP request. ".concat(a, "."),
                          ),
                          a)
                        );
                      case 4:
                        return (
                          o && clearTimeout(o),
                          e.abortSignal && (e.abortSignal.onabort = null),
                          [7]
                        );
                      case 5:
                        if (i.ok) return [3, 7];
                        return [4, eB(i, "text")];
                      case 6:
                        throw new ei(l.sent() || i.statusText, i.status);
                      case 7:
                        return [4, eB(i, e.responseType)];
                      case 8:
                        return (
                          (s = l.sent()), [2, new eP(i.status, i.statusText, s)]
                        );
                    }
                  });
                }),
                function () {
                  var e = this,
                    n = arguments;
                  return new Promise(function (r, o) {
                    var i = t.apply(e, n);
                    function a(e) {
                      eH(i, r, o, a, c, "next", e);
                    }
                    function c(e) {
                      eH(i, r, o, a, c, "throw", e);
                    }
                    a(void 0);
                  });
                })();
              },
            },
            {
              key: "getCookieString",
              value: function (e) {
                var t = "";
                return (
                  F.isNode &&
                    this._jar &&
                    this._jar.getCookies(e, function (e, n) {
                      return (t = n.join("; "));
                    }),
                  t
                );
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(r.prototype, t),
          r
        );
      })(eA);
      function eB(e, t) {
        var n;
        switch (t) {
          case "arraybuffer":
            n = e.arrayBuffer();
            break;
          case "text":
          default:
            n = e.text();
            break;
          case "blob":
          case "document":
          case "json":
            throw Error("".concat(t, " is not supported."));
        }
        return n;
      }
      function ez(e) {
        return (ez = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function eG(e, t) {
        return (eG =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function eQ() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (eQ = function () {
          return !!e;
        })();
      }
      var eK = (function (e) {
        var t;
        function n(e) {
          var t, r, o, i, a, c;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
            (r = ez((r = n))),
            (((i = this),
            (t =
              (a = eQ()
                ? Reflect.construct(r, [], ez(this).constructor)
                : r.apply(this, o)) &&
              ("object" ==
                ((c = a) &&
                "undefined" != typeof Symbol &&
                c.constructor === Symbol
                  ? "symbol"
                  : typeof c) ||
                "function" == typeof a)
                ? a
                : (function (e) {
                    if (void 0 === e)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return e;
                  })(i)))._logger = e),
            t
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && eG(e, t);
          })(n, e),
          (t = [
            {
              key: "send",
              value: function (e) {
                var t = this;
                return e.abortSignal && e.abortSignal.aborted
                  ? Promise.reject(new ec())
                  : e.method
                    ? e.url
                      ? new Promise(function (n, r) {
                          var o = new XMLHttpRequest();
                          o.open(e.method, e.url, !0),
                            (o.withCredentials =
                              void 0 === e.withCredentials ||
                              e.withCredentials),
                            o.setRequestHeader(
                              "X-Requested-With",
                              "XMLHttpRequest",
                            ),
                            "" === e.content && (e.content = void 0),
                            e.content &&
                              (W(e.content)
                                ? o.setRequestHeader(
                                    "Content-Type",
                                    "application/octet-stream",
                                  )
                                : o.setRequestHeader(
                                    "Content-Type",
                                    "text/plain;charset=UTF-8",
                                  ));
                          var i = e.headers;
                          i &&
                            Object.keys(i).forEach(function (e) {
                              o.setRequestHeader(e, i[e]);
                            }),
                            e.responseType && (o.responseType = e.responseType),
                            e.abortSignal &&
                              (e.abortSignal.onabort = function () {
                                o.abort(), r(new ec());
                              }),
                            e.timeout && (o.timeout = e.timeout),
                            (o.onload = function () {
                              e.abortSignal && (e.abortSignal.onabort = null),
                                o.status >= 200 && o.status < 300
                                  ? n(
                                      new eP(
                                        o.status,
                                        o.statusText,
                                        o.response || o.responseText,
                                      ),
                                    )
                                  : r(
                                      new ei(
                                        o.response ||
                                          o.responseText ||
                                          o.statusText,
                                        o.status,
                                      ),
                                    );
                            }),
                            (o.onerror = function () {
                              t._logger.log(
                                c.Warning,
                                "Error from HTTP request. "
                                  .concat(o.status, ": ")
                                  .concat(o.statusText, "."),
                              ),
                                r(new ei(o.statusText, o.status));
                            }),
                            (o.ontimeout = function () {
                              t._logger.log(
                                c.Warning,
                                "Timeout from HTTP request.",
                              ),
                                r(new ea());
                            }),
                            o.send(e.content);
                        })
                      : Promise.reject(Error("No url defined."))
                    : Promise.reject(Error("No method defined."));
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(n.prototype, t),
          n
        );
      })(eA);
      function eJ(e) {
        return (eJ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function e$(e, t) {
        return (e$ =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function eV() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (eV = function () {
          return !!e;
        })();
      }
      var eX = (function (e) {
        var t;
        function n(e) {
          var t, r, o, i, a, c;
          if (
            ((function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
            (r = eJ((r = n))),
            (i = this),
            (t =
              (a = eV()
                ? Reflect.construct(r, [], eJ(this).constructor)
                : r.apply(this, o)) &&
              ("object" ==
                ((c = a) &&
                "undefined" != typeof Symbol &&
                c.constructor === Symbol
                  ? "symbol"
                  : typeof c) ||
                "function" == typeof a)
                ? a
                : (function (e) {
                    if (void 0 === e)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return e;
                  })(i)),
            "undefined" != typeof fetch || F.isNode)
          )
            t._httpClient = new eW(e);
          else if ("undefined" != typeof XMLHttpRequest)
            t._httpClient = new eK(e);
          else throw Error("No usable HttpClient found.");
          return t;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && e$(e, t);
          })(n, e),
          (t = [
            {
              key: "send",
              value: function (e) {
                return e.abortSignal && e.abortSignal.aborted
                  ? Promise.reject(new ec())
                  : e.method
                    ? e.url
                      ? this._httpClient.send(e)
                      : Promise.reject(Error("No url defined."))
                    : Promise.reject(Error("No method defined."));
              },
            },
            {
              key: "getCookieString",
              value: function (e) {
                return this._httpClient.getCookieString(e);
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(n.prototype, t),
          n
        );
      })(eA);
      ((o = u || (u = {}))[(o.None = 0)] = "None"),
        (o[(o.WebSockets = 1)] = "WebSockets"),
        (o[(o.ServerSentEvents = 2)] = "ServerSentEvents"),
        (o[(o.LongPolling = 4)] = "LongPolling"),
        ((i = f || (f = {}))[(i.Text = 1)] = "Text"),
        (i[(i.Binary = 2)] = "Binary");
      var eZ = (function () {
        var e;
        function t() {
          (function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, t),
            (this._isAborted = !1),
            (this.onabort = null);
        }
        return (
          (e = [
            {
              key: "abort",
              value: function () {
                !this._isAborted &&
                  ((this._isAborted = !0), this.onabort && this.onabort());
              },
            },
            {
              key: "signal",
              get: function () {
                return this;
              },
            },
            {
              key: "aborted",
              get: function () {
                return this._isAborted;
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(t.prototype, e),
          t
        );
      })();
      function eY(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function e0(e, t, n, r, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          n(e);
          return;
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function e1(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              e0(i, r, o, a, c, "next", e);
            }
            function c(e) {
              e0(i, r, o, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function e2(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function e3(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              }),
            )),
            r.forEach(function (t) {
              e2(e, t, n[t]);
            });
        }
        return e;
      }
      function e4(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n,
              r,
              o =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != o) {
              var i = [],
                a = !0,
                c = !1;
              try {
                for (
                  o = o.call(e);
                  !(a = (n = o.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (e) {
                (c = !0), (r = e);
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (c) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return eY(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(n);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return eY(e, t);
            }
          })(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function e6(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: c(0), throw: c(1), return: c(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function c(i) {
          return function (c) {
            return (function (i) {
              if (n) throw TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, c]);
          };
        }
      }
      var e5 = (function () {
        var e;
        function t(e, n, r) {
          (function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, t),
            (this._httpClient = e),
            (this._logger = n),
            (this._pollAbort = new eZ()),
            (this._options = r),
            (this._running = !1),
            (this.onreceive = null),
            (this.onclose = null);
        }
        return (
          (e = [
            {
              key: "pollAborted",
              get: function () {
                return this._pollAbort.aborted;
              },
            },
            {
              key: "connect",
              value: function (e, t) {
                var n = this;
                return e1(function () {
                  var r, o, i, a, s;
                  return e6(this, function (l) {
                    switch (l.label) {
                      case 0:
                        if (
                          (L.isRequired(e, "url"),
                          L.isRequired(t, "transferFormat"),
                          L.isIn(t, f, "transferFormat"),
                          (n._url = e),
                          n._logger.log(
                            c.Trace,
                            "(LongPolling transport) Connecting.",
                          ),
                          t === f.Binary &&
                            "undefined" != typeof XMLHttpRequest &&
                            "string" !=
                              typeof new XMLHttpRequest().responseType)
                        )
                          throw Error(
                            "Binary protocols over XmlHttpRequest not implementing advanced features are not supported.",
                          );
                        return (
                          (o = e3(
                            e2({}, (r = e4(K(), 2))[0], r[1]),
                            n._options.headers,
                          )),
                          (i = {
                            abortSignal: n._pollAbort.signal,
                            headers: o,
                            timeout: 1e5,
                            withCredentials: n._options.withCredentials,
                          }),
                          t === f.Binary && (i.responseType = "arraybuffer"),
                          (a = "".concat(e, "&_=").concat(Date.now())),
                          n._logger.log(
                            c.Trace,
                            "(LongPolling transport) polling: ".concat(a, "."),
                          ),
                          [4, n._httpClient.get(a, i)]
                        );
                      case 1:
                        return (
                          200 !== (s = l.sent()).statusCode
                            ? (n._logger.log(
                                c.Error,
                                "(LongPolling transport) Unexpected response code: ".concat(
                                  s.statusCode,
                                  ".",
                                ),
                              ),
                              (n._closeError = new ei(
                                s.statusText || "",
                                s.statusCode,
                              )),
                              (n._running = !1))
                            : (n._running = !0),
                          (n._receiving = n._poll(n._url, i)),
                          [2]
                        );
                    }
                  });
                })();
              },
            },
            {
              key: "_poll",
              value: function (e, t) {
                var n = this;
                return e1(function () {
                  var r, o, i;
                  return e6(this, function (a) {
                    switch (a.label) {
                      case 0:
                        a.trys.push([0, , 7, 8]), (a.label = 1);
                      case 1:
                        if (!n._running) return [3, 6];
                        a.label = 2;
                      case 2:
                        return (
                          a.trys.push([2, 4, , 5]),
                          (r = "".concat(e, "&_=").concat(Date.now())),
                          n._logger.log(
                            c.Trace,
                            "(LongPolling transport) polling: ".concat(r, "."),
                          ),
                          [4, n._httpClient.get(r, t)]
                        );
                      case 3:
                        return (
                          204 === (o = a.sent()).statusCode
                            ? (n._logger.log(
                                c.Information,
                                "(LongPolling transport) Poll terminated by server.",
                              ),
                              (n._running = !1))
                            : 200 !== o.statusCode
                              ? (n._logger.log(
                                  c.Error,
                                  "(LongPolling transport) Unexpected response code: ".concat(
                                    o.statusCode,
                                    ".",
                                  ),
                                ),
                                (n._closeError = new ei(
                                  o.statusText || "",
                                  o.statusCode,
                                )),
                                (n._running = !1))
                              : o.content
                                ? (n._logger.log(
                                    c.Trace,
                                    "(LongPolling transport) data received. ".concat(
                                      U(
                                        o.content,
                                        n._options.logMessageContent,
                                      ),
                                      ".",
                                    ),
                                  ),
                                  n.onreceive && n.onreceive(o.content))
                                : n._logger.log(
                                    c.Trace,
                                    "(LongPolling transport) Poll timed out, reissuing.",
                                  ),
                          [3, 5]
                        );
                      case 4:
                        return (
                          (i = a.sent()),
                          n._running
                            ? i instanceof ea
                              ? n._logger.log(
                                  c.Trace,
                                  "(LongPolling transport) Poll timed out, reissuing.",
                                )
                              : ((n._closeError = i), (n._running = !1))
                            : n._logger.log(
                                c.Trace,
                                "(LongPolling transport) Poll errored after shutdown: ".concat(
                                  i.message,
                                ),
                              ),
                          [3, 5]
                        );
                      case 5:
                        return [3, 1];
                      case 6:
                        return [3, 8];
                      case 7:
                        return (
                          n._logger.log(
                            c.Trace,
                            "(LongPolling transport) Polling complete.",
                          ),
                          n.pollAborted || n._raiseOnClose(),
                          [7]
                        );
                      case 8:
                        return [2];
                    }
                  });
                })();
              },
            },
            {
              key: "send",
              value: function (e) {
                var t = this;
                return e1(function () {
                  return e6(this, function (n) {
                    return t._running
                      ? [
                          2,
                          B(
                            t._logger,
                            "LongPolling",
                            t._httpClient,
                            t._url,
                            e,
                            t._options,
                          ),
                        ]
                      : [
                          2,
                          Promise.reject(
                            Error(
                              "Cannot send until the transport is connected",
                            ),
                          ),
                        ];
                  });
                })();
              },
            },
            {
              key: "stop",
              value: function () {
                var e = this;
                return e1(function () {
                  var t, n, r, o, i;
                  return e6(this, function (a) {
                    switch (a.label) {
                      case 0:
                        e._logger.log(
                          c.Trace,
                          "(LongPolling transport) Stopping polling.",
                        ),
                          (e._running = !1),
                          e._pollAbort.abort(),
                          (a.label = 1);
                      case 1:
                        return a.trys.push([1, , 4, 5]), [4, e._receiving];
                      case 2:
                        return (
                          a.sent(),
                          e._logger.log(
                            c.Trace,
                            "(LongPolling transport) sending DELETE request to ".concat(
                              e._url,
                              ".",
                            ),
                          ),
                          (t = {}),
                          (r = (n = e4(K(), 2))[0]),
                          (o = n[1]),
                          (t[r] = o),
                          (i = {
                            headers: e3({}, t, e._options.headers),
                            timeout: e._options.timeout,
                            withCredentials: e._options.withCredentials,
                          }),
                          [4, e._httpClient.delete(e._url, i)]
                        );
                      case 3:
                        return (
                          a.sent(),
                          e._logger.log(
                            c.Trace,
                            "(LongPolling transport) DELETE request sent.",
                          ),
                          [3, 5]
                        );
                      case 4:
                        return (
                          e._logger.log(
                            c.Trace,
                            "(LongPolling transport) Stop finished.",
                          ),
                          e._raiseOnClose(),
                          [7]
                        );
                      case 5:
                        return [2];
                    }
                  });
                })();
              },
            },
            {
              key: "_raiseOnClose",
              value: function () {
                if (this.onclose) {
                  var e = "(LongPolling transport) Firing onclose event.";
                  this._closeError && (e += " Error: " + this._closeError),
                    this._logger.log(c.Trace, e),
                    this.onclose(this._closeError);
                }
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(t.prototype, e),
          t
        );
      })();
      function e8(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function e7(e, t, n, r, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          n(e);
          return;
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function e9(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              e7(i, r, o, a, c, "next", e);
            }
            function c(e) {
              e7(i, r, o, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function te(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: c(0), throw: c(1), return: c(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function c(i) {
          return function (c) {
            return (function (i) {
              if (n) throw TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, c]);
          };
        }
      }
      var tt = (function () {
        var e;
        function t(e, n, r, o) {
          (function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, t),
            (this._httpClient = e),
            (this._accessToken = n),
            (this._logger = r),
            (this._options = o),
            (this.onreceive = null),
            (this.onclose = null);
        }
        return (
          (e = [
            {
              key: "connect",
              value: function (e, t) {
                var n = this;
                return e9(function () {
                  return te(this, function (r) {
                    return (
                      L.isRequired(e, "url"),
                      L.isRequired(t, "transferFormat"),
                      L.isIn(t, f, "transferFormat"),
                      n._logger.log(c.Trace, "(SSE transport) Connecting."),
                      (n._url = e),
                      n._accessToken &&
                        (e +=
                          (0 > e.indexOf("?") ? "?" : "&") +
                          "access_token=".concat(
                            encodeURIComponent(n._accessToken),
                          )),
                      [
                        2,
                        new Promise(function (r, o) {
                          var i,
                            a = !1;
                          if (t !== f.Text) {
                            o(
                              Error(
                                "The Server-Sent Events transport only supports the 'Text' transfer format",
                              ),
                            );
                            return;
                          }
                          if (F.isBrowser || F.isWebWorker)
                            i = new n._options.EventSource(e, {
                              withCredentials: n._options.withCredentials,
                            });
                          else {
                            var s,
                              l = n._httpClient.getCookieString(e),
                              u = {};
                            u.Cookie = l;
                            var p =
                                (function (e) {
                                  if (Array.isArray(e)) return e;
                                })((s = K())) ||
                                (function (e, t) {
                                  var n,
                                    r,
                                    o =
                                      null == e
                                        ? null
                                        : ("undefined" != typeof Symbol &&
                                            e[Symbol.iterator]) ||
                                          e["@@iterator"];
                                  if (null != o) {
                                    var i = [],
                                      a = !0,
                                      c = !1;
                                    try {
                                      for (
                                        o = o.call(e);
                                        !(a = (n = o.next()).done) &&
                                        (i.push(n.value), i.length !== t);
                                        a = !0
                                      );
                                    } catch (e) {
                                      (c = !0), (r = e);
                                    } finally {
                                      try {
                                        a || null == o.return || o.return();
                                      } finally {
                                        if (c) throw r;
                                      }
                                    }
                                    return i;
                                  }
                                })(s, 2) ||
                                (function (e, t) {
                                  if (e) {
                                    if ("string" == typeof e) return e8(e, 2);
                                    var n = Object.prototype.toString
                                      .call(e)
                                      .slice(8, -1);
                                    if (
                                      ("Object" === n &&
                                        e.constructor &&
                                        (n = e.constructor.name),
                                      "Map" === n || "Set" === n)
                                    )
                                      return Array.from(n);
                                    if (
                                      "Arguments" === n ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        n,
                                      )
                                    )
                                      return e8(e, t);
                                  }
                                })(s, 2) ||
                                (function () {
                                  throw TypeError(
                                    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                  );
                                })(),
                              d = p[0],
                              h = p[1];
                            (u[d] = h),
                              (i = new n._options.EventSource(e, {
                                withCredentials: n._options.withCredentials,
                                headers: (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                    var n =
                                        null != arguments[t]
                                          ? arguments[t]
                                          : {},
                                      r = Object.keys(n);
                                    "function" ==
                                      typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(
                                          function (e) {
                                            return Object.getOwnPropertyDescriptor(
                                              n,
                                              e,
                                            ).enumerable;
                                          },
                                        ),
                                      )),
                                      r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                          t in e
                                            ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0,
                                              })
                                            : (e[t] = r);
                                      });
                                  }
                                  return e;
                                })({}, u, n._options.headers),
                              }));
                          }
                          try {
                            (i.onmessage = function (e) {
                              if (n.onreceive)
                                try {
                                  n._logger.log(
                                    c.Trace,
                                    "(SSE transport) data received. ".concat(
                                      U(e.data, n._options.logMessageContent),
                                      ".",
                                    ),
                                  ),
                                    n.onreceive(e.data);
                                } catch (e) {
                                  n._close(e);
                                  return;
                                }
                            }),
                              (i.onerror = function (e) {
                                a
                                  ? n._close()
                                  : o(
                                      Error(
                                        "EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled.",
                                      ),
                                    );
                              }),
                              (i.onopen = function () {
                                n._logger.log(
                                  c.Information,
                                  "SSE connected to ".concat(n._url),
                                ),
                                  (n._eventSource = i),
                                  (a = !0),
                                  r();
                              });
                          } catch (e) {
                            o(e);
                            return;
                          }
                        }),
                      ]
                    );
                  });
                })();
              },
            },
            {
              key: "send",
              value: function (e) {
                var t = this;
                return e9(function () {
                  return te(this, function (n) {
                    return t._eventSource
                      ? [
                          2,
                          B(
                            t._logger,
                            "SSE",
                            t._httpClient,
                            t._url,
                            e,
                            t._options,
                          ),
                        ]
                      : [
                          2,
                          Promise.reject(
                            Error(
                              "Cannot send until the transport is connected",
                            ),
                          ),
                        ];
                  });
                })();
              },
            },
            {
              key: "stop",
              value: function () {
                return this._close(), Promise.resolve();
              },
            },
            {
              key: "_close",
              value: function (e) {
                this._eventSource &&
                  (this._eventSource.close(),
                  (this._eventSource = void 0),
                  this.onclose && this.onclose(e));
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(t.prototype, e),
          t
        );
      })();
      function tn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function tr(e, t, n, r, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          n(e);
          return;
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      var to = (function () {
        var e;
        function t(e, n, r, o, i, a) {
          (function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, t),
            (this._logger = r),
            (this._accessTokenFactory = n),
            (this._logMessageContent = o),
            (this._webSocketConstructor = i),
            (this._httpClient = e),
            (this.onreceive = null),
            (this.onclose = null),
            (this._headers = a);
        }
        return (
          (e = [
            {
              key: "connect",
              value: function (e, t) {
                var n,
                  r = this;
                return ((n = function () {
                  var n;
                  return (function (e, t) {
                    var n,
                      r,
                      o,
                      i,
                      a = {
                        label: 0,
                        sent: function () {
                          if (1 & o[0]) throw o[1];
                          return o[1];
                        },
                        trys: [],
                        ops: [],
                      };
                    return (
                      (i = { next: c(0), throw: c(1), return: c(2) }),
                      "function" == typeof Symbol &&
                        (i[Symbol.iterator] = function () {
                          return this;
                        }),
                      i
                    );
                    function c(i) {
                      return function (c) {
                        return (function (i) {
                          if (n)
                            throw TypeError("Generator is already executing.");
                          for (; a; )
                            try {
                              if (
                                ((n = 1),
                                r &&
                                  (o =
                                    2 & i[0]
                                      ? r.return
                                      : i[0]
                                        ? r.throw ||
                                          ((o = r.return) && o.call(r), 0)
                                        : r.next) &&
                                  !(o = o.call(r, i[1])).done)
                              )
                                return o;
                              switch (
                                ((r = 0), o && (i = [2 & i[0], o.value]), i[0])
                              ) {
                                case 0:
                                case 1:
                                  o = i;
                                  break;
                                case 4:
                                  return a.label++, { value: i[1], done: !1 };
                                case 5:
                                  a.label++, (r = i[1]), (i = [0]);
                                  continue;
                                case 7:
                                  (i = a.ops.pop()), a.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(o =
                                      (o = a.trys).length > 0 &&
                                      o[o.length - 1]) &&
                                    (6 === i[0] || 2 === i[0])
                                  ) {
                                    a = 0;
                                    continue;
                                  }
                                  if (
                                    3 === i[0] &&
                                    (!o || (i[1] > o[0] && i[1] < o[3]))
                                  ) {
                                    a.label = i[1];
                                    break;
                                  }
                                  if (6 === i[0] && a.label < o[1]) {
                                    (a.label = o[1]), (o = i);
                                    break;
                                  }
                                  if (o && a.label < o[2]) {
                                    (a.label = o[2]), a.ops.push(i);
                                    break;
                                  }
                                  o[2] && a.ops.pop(), a.trys.pop();
                                  continue;
                              }
                              i = t.call(e, a);
                            } catch (e) {
                              (i = [6, e]), (r = 0);
                            } finally {
                              n = o = 0;
                            }
                          if (5 & i[0]) throw i[1];
                          return { value: i[0] ? i[1] : void 0, done: !0 };
                        })([i, c]);
                      };
                    }
                  })(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (
                          (L.isRequired(e, "url"),
                          L.isRequired(t, "transferFormat"),
                          L.isIn(t, f, "transferFormat"),
                          r._logger.log(
                            c.Trace,
                            "(WebSockets transport) Connecting.",
                          ),
                          !r._accessTokenFactory)
                        )
                          return [3, 2];
                        return [4, r._accessTokenFactory()];
                      case 1:
                        (n = o.sent()), (o.label = 2);
                      case 2:
                        return [
                          2,
                          new Promise(function (o, i) {
                            e = e.replace(/^http/, "ws");
                            var a,
                              s = r._httpClient.getCookieString(e),
                              l = !1;
                            if (F.isNode || F.isReactNative) {
                              var u,
                                p = {},
                                d =
                                  (function (e) {
                                    if (Array.isArray(e)) return e;
                                  })((u = K())) ||
                                  (function (e, t) {
                                    var n,
                                      r,
                                      o =
                                        null == e
                                          ? null
                                          : ("undefined" != typeof Symbol &&
                                              e[Symbol.iterator]) ||
                                            e["@@iterator"];
                                    if (null != o) {
                                      var i = [],
                                        a = !0,
                                        c = !1;
                                      try {
                                        for (
                                          o = o.call(e);
                                          !(a = (n = o.next()).done) &&
                                          (i.push(n.value),
                                          0 || i.length !== t);
                                          a = !0
                                        );
                                      } catch (e) {
                                        (c = !0), (r = e);
                                      } finally {
                                        try {
                                          a || null == o.return || o.return();
                                        } finally {
                                          if (c) throw r;
                                        }
                                      }
                                      return i;
                                    }
                                  })(u, 2) ||
                                  (function (e, t) {
                                    if (e) {
                                      if ("string" == typeof e) return tn(e, 2);
                                      var n = Object.prototype.toString
                                        .call(e)
                                        .slice(8, -1);
                                      if (
                                        ("Object" === n &&
                                          e.constructor &&
                                          (n = e.constructor.name),
                                        "Map" === n || "Set" === n)
                                      )
                                        return Array.from(n);
                                      if (
                                        "Arguments" === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          n,
                                        )
                                      )
                                        return tn(e, t);
                                    }
                                  })(u, 2) ||
                                  (function () {
                                    throw TypeError(
                                      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                    );
                                  })(),
                                h = d[0],
                                g = d[1];
                              (p[h] = g),
                                n &&
                                  (p[eR.Authorization] = "Bearer ".concat(n)),
                                s && (p[eR.Cookie] = s),
                                (a = new r._webSocketConstructor(e, void 0, {
                                  headers: (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                      var n =
                                          null != arguments[t]
                                            ? arguments[t]
                                            : {},
                                        r = Object.keys(n);
                                      "function" ==
                                        typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                          Object.getOwnPropertySymbols(
                                            n,
                                          ).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(
                                              n,
                                              e,
                                            ).enumerable;
                                          }),
                                        )),
                                        r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                            t in e
                                              ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                                })
                                              : (e[t] = r);
                                        });
                                    }
                                    return e;
                                  })({}, p, r._headers),
                                }));
                            } else
                              n &&
                                (e +=
                                  (0 > e.indexOf("?") ? "?" : "&") +
                                  "access_token=".concat(
                                    encodeURIComponent(n),
                                  ));
                            a || (a = new r._webSocketConstructor(e)),
                              t === f.Binary && (a.binaryType = "arraybuffer"),
                              (a.onopen = function (t) {
                                r._logger.log(
                                  c.Information,
                                  "WebSocket connected to ".concat(e, "."),
                                ),
                                  (r._webSocket = a),
                                  (l = !0),
                                  o();
                              }),
                              (a.onerror = function (e) {
                                var t = null;
                                (t =
                                  "undefined" != typeof ErrorEvent &&
                                  e instanceof ErrorEvent
                                    ? e.error
                                    : "There was an error with the transport"),
                                  r._logger.log(
                                    c.Information,
                                    "(WebSockets transport) ".concat(t, "."),
                                  );
                              }),
                              (a.onmessage = function (e) {
                                if (
                                  (r._logger.log(
                                    c.Trace,
                                    "(WebSockets transport) data received. ".concat(
                                      U(e.data, r._logMessageContent),
                                      ".",
                                    ),
                                  ),
                                  r.onreceive)
                                )
                                  try {
                                    r.onreceive(e.data);
                                  } catch (e) {
                                    r._close(e);
                                    return;
                                  }
                              }),
                              (a.onclose = function (e) {
                                if (l) r._close(e);
                                else {
                                  var t = null;
                                  i(
                                    Error(
                                      "undefined" != typeof ErrorEvent &&
                                        e instanceof ErrorEvent
                                        ? e.error
                                        : "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.",
                                    ),
                                  );
                                }
                              });
                          }),
                        ];
                    }
                  });
                }),
                function () {
                  var e = this,
                    t = arguments;
                  return new Promise(function (r, o) {
                    var i = n.apply(e, t);
                    function a(e) {
                      tr(i, r, o, a, c, "next", e);
                    }
                    function c(e) {
                      tr(i, r, o, a, c, "throw", e);
                    }
                    a(void 0);
                  });
                })();
              },
            },
            {
              key: "send",
              value: function (e) {
                return this._webSocket &&
                  this._webSocket.readyState === this._webSocketConstructor.OPEN
                  ? (this._logger.log(
                      c.Trace,
                      "(WebSockets transport) sending data. ".concat(
                        U(e, this._logMessageContent),
                        ".",
                      ),
                    ),
                    this._webSocket.send(e),
                    Promise.resolve())
                  : Promise.reject("WebSocket is not in the OPEN state");
              },
            },
            {
              key: "stop",
              value: function () {
                return (
                  this._webSocket && this._close(void 0), Promise.resolve()
                );
              },
            },
            {
              key: "_close",
              value: function (e) {
                this._webSocket &&
                  ((this._webSocket.onclose = function () {}),
                  (this._webSocket.onmessage = function () {}),
                  (this._webSocket.onerror = function () {}),
                  this._webSocket.close(),
                  (this._webSocket = void 0)),
                  this._logger.log(
                    c.Trace,
                    "(WebSockets transport) socket closed.",
                  ),
                  this.onclose &&
                    (this._isCloseEvent(e) &&
                    (!1 === e.wasClean || 1e3 !== e.code)
                      ? this.onclose(
                          Error(
                            "WebSocket closed with status code: "
                              .concat(e.code, " (")
                              .concat(e.reason || "no reason given", ")."),
                          ),
                        )
                      : e instanceof Error
                        ? this.onclose(e)
                        : this.onclose());
              },
            },
            {
              key: "_isCloseEvent",
              value: function (e) {
                return (
                  e &&
                  "boolean" == typeof e.wasClean &&
                  "number" == typeof e.code
                );
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(t.prototype, e),
          t
        );
      })();
      function ti(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ta(e, t, n, r, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          n(e);
          return;
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function tc(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              ta(i, r, o, a, c, "next", e);
            }
            function c(e) {
              ta(i, r, o, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function ts(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function tl(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function tu(e, t, n) {
        return t && tl(e.prototype, t), n && tl(e, n), e;
      }
      function tf(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      }
      function tp(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: c(0), throw: c(1), return: c(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function c(i) {
          return function (c) {
            return (function (i) {
              if (n) throw TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, c]);
          };
        }
      }
      var td = (function () {
          function e(t) {
            var n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            if (
              (ts(this, e),
              (this._stopPromiseResolver = function () {}),
              (this.features = {}),
              (this._negotiateVersion = 1),
              L.isRequired(t, "url"),
              (this._logger =
                void 0 === (n = r.logger)
                  ? new Q(c.Information)
                  : null === n
                    ? P.instance
                    : void 0 !== n.log
                      ? n
                      : new Q(n)),
              (this.baseUrl = this._resolveUrl(t)),
              ((r = r || {}).logMessageContent =
                void 0 !== r.logMessageContent && r.logMessageContent),
              "boolean" == typeof r.withCredentials ||
                void 0 === r.withCredentials)
            )
              r.withCredentials =
                void 0 === r.withCredentials || r.withCredentials;
            else
              throw Error(
                "withCredentials option was not a 'boolean' or 'undefined' value",
              );
            r.timeout = void 0 === r.timeout ? 1e5 : r.timeout;
            var o = null,
              i = null;
            if (F.isNode) {
              var a = require;
              (o = a("ws")), (i = a("eventsource"));
            }
            F.isNode || "undefined" == typeof WebSocket || r.WebSocket
              ? F.isNode && !r.WebSocket && o && (r.WebSocket = o)
              : (r.WebSocket = WebSocket),
              F.isNode || "undefined" == typeof EventSource || r.EventSource
                ? F.isNode &&
                  !r.EventSource &&
                  void 0 !== i &&
                  (r.EventSource = i)
                : (r.EventSource = EventSource),
              (this._httpClient = new eM(
                r.httpClient || new eX(this._logger),
                r.accessTokenFactory,
              )),
              (this._connectionState = "Disconnected"),
              (this._connectionStarted = !1),
              (this._options = r),
              (this.onreceive = null),
              (this.onclose = null);
          }
          return (
            tu(e, [
              {
                key: "start",
                value: function (e) {
                  var t = this;
                  return tc(function () {
                    var n, r;
                    return tp(this, function (o) {
                      switch (o.label) {
                        case 0:
                          if (
                            ((e = e || f.Binary),
                            L.isIn(e, f, "transferFormat"),
                            t._logger.log(
                              c.Debug,
                              "Starting connection with transfer format '".concat(
                                f[e],
                                "'.",
                              ),
                            ),
                            "Disconnected" !== t._connectionState)
                          )
                            return [
                              2,
                              Promise.reject(
                                Error(
                                  "Cannot start an HttpConnection that is not in the 'Disconnected' state.",
                                ),
                              ),
                            ];
                          return (
                            (t._connectionState = "Connecting"),
                            (t._startInternalPromise = t._startInternal(e)),
                            [4, t._startInternalPromise]
                          );
                        case 1:
                          if (
                            (o.sent(), "Disconnecting" !== t._connectionState)
                          )
                            return [3, 3];
                          return (
                            (n =
                              "Failed to start the HttpConnection before stop() was called."),
                            t._logger.log(c.Error, n),
                            [4, t._stopPromise]
                          );
                        case 2:
                          return o.sent(), [2, Promise.reject(new ec(n))];
                        case 3:
                          if ("Connected" !== t._connectionState)
                            return (
                              (r =
                                "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!"),
                              t._logger.log(c.Error, r),
                              [2, Promise.reject(new ec(r))]
                            );
                          o.label = 4;
                        case 4:
                          return (t._connectionStarted = !0), [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "send",
                value: function (e) {
                  return "Connected" !== this._connectionState
                    ? Promise.reject(
                        Error(
                          "Cannot send data if the connection is not in the 'Connected' State.",
                        ),
                      )
                    : (this._sendQueue ||
                        (this._sendQueue = new th(this.transport)),
                      this._sendQueue.send(e));
                },
              },
              {
                key: "stop",
                value: function (e) {
                  var t = this;
                  return tc(function () {
                    return tp(this, function (n) {
                      switch (n.label) {
                        case 0:
                          if ("Disconnected" === t._connectionState)
                            return (
                              t._logger.log(
                                c.Debug,
                                "Call to HttpConnection.stop(".concat(
                                  e,
                                  ") ignored because the connection is already in the disconnected state.",
                                ),
                              ),
                              [2, Promise.resolve()]
                            );
                          if ("Disconnecting" === t._connectionState)
                            return (
                              t._logger.log(
                                c.Debug,
                                "Call to HttpConnection.stop(".concat(
                                  e,
                                  ") ignored because the connection is already in the disconnecting state.",
                                ),
                              ),
                              [2, t._stopPromise]
                            );
                          return (
                            (t._connectionState = "Disconnecting"),
                            (t._stopPromise = new Promise(function (e) {
                              t._stopPromiseResolver = e;
                            })),
                            [4, t._stopInternal(e)]
                          );
                        case 1:
                          return n.sent(), [4, t._stopPromise];
                        case 2:
                          return n.sent(), [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "_stopInternal",
                value: function (e) {
                  var t = this;
                  return tc(function () {
                    var n;
                    return tp(this, function (r) {
                      switch (r.label) {
                        case 0:
                          (t._stopError = e), (r.label = 1);
                        case 1:
                          return (
                            r.trys.push([1, 3, , 4]),
                            [4, t._startInternalPromise]
                          );
                        case 2:
                        case 3:
                          return r.sent(), [3, 4];
                        case 4:
                          if (!t.transport) return [3, 9];
                          r.label = 5;
                        case 5:
                          return (
                            r.trys.push([5, 7, , 8]), [4, t.transport.stop()]
                          );
                        case 6:
                          return r.sent(), [3, 8];
                        case 7:
                          return (
                            (n = r.sent()),
                            t._logger.log(
                              c.Error,
                              "HttpConnection.transport.stop() threw error '".concat(
                                n,
                                "'.",
                              ),
                            ),
                            t._stopConnection(),
                            [3, 8]
                          );
                        case 8:
                          return (t.transport = void 0), [3, 10];
                        case 9:
                          t._logger.log(
                            c.Debug,
                            "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.",
                          ),
                            (r.label = 10);
                        case 10:
                          return [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "_startInternal",
                value: function (e) {
                  var t = this;
                  return tc(function () {
                    var n, r, o, i, a;
                    return tp(this, function (s) {
                      switch (s.label) {
                        case 0:
                          (n = t.baseUrl),
                            (t._accessTokenFactory =
                              t._options.accessTokenFactory),
                            (t._httpClient._accessTokenFactory =
                              t._accessTokenFactory),
                            (s.label = 1);
                        case 1:
                          if (
                            (s.trys.push([1, 12, , 13]),
                            !t._options.skipNegotiation)
                          )
                            return [3, 5];
                          if (t._options.transport !== u.WebSockets)
                            return [3, 3];
                          return (
                            (t.transport = t._constructTransport(u.WebSockets)),
                            [4, t._startTransport(n, e)]
                          );
                        case 2:
                          return s.sent(), [3, 4];
                        case 3:
                          throw Error(
                            "Negotiation can only be skipped when using the WebSocket transport directly.",
                          );
                        case 4:
                          return [3, 11];
                        case 5:
                          (r = function () {
                            var e;
                            return tp(this, function (r) {
                              switch (r.label) {
                                case 0:
                                  return [4, t._getNegotiationResponse(n)];
                                case 1:
                                  if (
                                    ((o = r.sent()),
                                    "Disconnecting" === t._connectionState ||
                                      "Disconnected" === t._connectionState)
                                  )
                                    throw new ec(
                                      "The connection was stopped during negotiation.",
                                    );
                                  if (o.error) throw Error(o.error);
                                  if (o.ProtocolVersion)
                                    throw Error(
                                      "Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.",
                                    );
                                  return (
                                    o.url && (n = o.url),
                                    o.accessToken &&
                                      ((e = o.accessToken),
                                      (t._accessTokenFactory = function () {
                                        return e;
                                      }),
                                      (t._httpClient._accessToken = e),
                                      (t._httpClient._accessTokenFactory =
                                        void 0)),
                                    i++,
                                    [2]
                                  );
                              }
                            });
                          }),
                            (o = null),
                            (i = 0),
                            (s.label = 6);
                        case 6:
                          return [
                            5,
                            (function (e) {
                              var t =
                                  "function" == typeof Symbol &&
                                  Symbol.iterator,
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
                              throw TypeError(
                                t
                                  ? "Object is not iterable."
                                  : "Symbol.iterator is not defined.",
                              );
                            })(r()),
                          ];
                        case 7:
                          s.sent(), (s.label = 8);
                        case 8:
                          if (o.url && i < 100) return [3, 6];
                          s.label = 9;
                        case 9:
                          if (100 === i && o.url)
                            throw Error(
                              "Negotiate redirection limit exceeded.",
                            );
                          return [
                            4,
                            t._createTransport(n, t._options.transport, o, e),
                          ];
                        case 10:
                          s.sent(), (s.label = 11);
                        case 11:
                          return (
                            t.transport instanceof e5 &&
                              (t.features.inherentKeepAlive = !0),
                            "Connecting" === t._connectionState &&
                              (t._logger.log(
                                c.Debug,
                                "The HttpConnection connected successfully.",
                              ),
                              (t._connectionState = "Connected")),
                            [3, 13]
                          );
                        case 12:
                          return (
                            (a = s.sent()),
                            t._logger.log(
                              c.Error,
                              "Failed to start the connection: " + a,
                            ),
                            (t._connectionState = "Disconnected"),
                            (t.transport = void 0),
                            t._stopPromiseResolver(),
                            [2, Promise.reject(a)]
                          );
                        case 13:
                          return [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "_getNegotiationResponse",
                value: function (e) {
                  var t = this;
                  return tc(function () {
                    var n, r, o, i, a, s, l, u, f;
                    return tp(this, function (p) {
                      switch (p.label) {
                        case 0:
                          var d;
                          (n = {}),
                            (o = (r =
                              (function (e) {
                                if (Array.isArray(e)) return e;
                              })((d = K())) ||
                              (function (e, t) {
                                var n,
                                  r,
                                  o =
                                    null == e
                                      ? null
                                      : ("undefined" != typeof Symbol &&
                                          e[Symbol.iterator]) ||
                                        e["@@iterator"];
                                if (null != o) {
                                  var i = [],
                                    a = !0,
                                    c = !1;
                                  try {
                                    for (
                                      o = o.call(e);
                                      !(a = (n = o.next()).done) &&
                                      (i.push(n.value), i.length !== t);
                                      a = !0
                                    );
                                  } catch (e) {
                                    (c = !0), (r = e);
                                  } finally {
                                    try {
                                      a || null == o.return || o.return();
                                    } finally {
                                      if (c) throw r;
                                    }
                                  }
                                  return i;
                                }
                              })(d, 2) ||
                              (function (e, t) {
                                if (e) {
                                  if ("string" == typeof e) return ti(e, 2);
                                  var n = Object.prototype.toString
                                    .call(e)
                                    .slice(8, -1);
                                  if (
                                    ("Object" === n &&
                                      e.constructor &&
                                      (n = e.constructor.name),
                                    "Map" === n || "Set" === n)
                                  )
                                    return Array.from(n);
                                  if (
                                    "Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n,
                                    )
                                  )
                                    return ti(e, t);
                                }
                              })(d, 2) ||
                              (function () {
                                throw TypeError(
                                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                );
                              })())[0]),
                            (i = r[1]),
                            (n[o] = i),
                            (a = t._resolveNegotiateUrl(e)),
                            t._logger.log(
                              c.Debug,
                              "Sending negotiation request: ".concat(a, "."),
                            ),
                            (p.label = 1);
                        case 1:
                          return (
                            p.trys.push([1, 3, , 4]),
                            [
                              4,
                              t._httpClient.post(a, {
                                content: "",
                                headers: (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                    var n =
                                        null != arguments[t]
                                          ? arguments[t]
                                          : {},
                                      r = Object.keys(n);
                                    "function" ==
                                      typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(
                                          function (e) {
                                            return Object.getOwnPropertyDescriptor(
                                              n,
                                              e,
                                            ).enumerable;
                                          },
                                        ),
                                      )),
                                      r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                          t in e
                                            ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0,
                                              })
                                            : (e[t] = r);
                                      });
                                  }
                                  return e;
                                })({}, n, t._options.headers),
                                timeout: t._options.timeout,
                                withCredentials: t._options.withCredentials,
                              }),
                            ]
                          );
                        case 2:
                          if (200 !== (s = p.sent()).statusCode)
                            return [
                              2,
                              Promise.reject(
                                Error(
                                  "Unexpected status code returned from negotiate '".concat(
                                    s.statusCode,
                                    "'",
                                  ),
                                ),
                              ),
                            ];
                          return (
                            (!(l = JSON.parse(s.content)).negotiateVersion ||
                              l.negotiateVersion < 1) &&
                              (l.connectionToken = l.connectionId),
                            [2, l]
                          );
                        case 3:
                          return (
                            (f =
                              "Failed to complete negotiation with the server: " +
                              (u = p.sent())),
                            u instanceof ei &&
                              404 === u.statusCode &&
                              (f +=
                                " Either this is not a SignalR endpoint or there is a proxy blocking the connection."),
                            t._logger.log(c.Error, f),
                            [2, Promise.reject(new ef(f))]
                          );
                        case 4:
                          return [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "_createConnectUrl",
                value: function (e, t) {
                  return t
                    ? e + (-1 === e.indexOf("?") ? "?" : "&") + "id=".concat(t)
                    : e;
                },
              },
              {
                key: "_createTransport",
                value: function (e, t, n, r) {
                  var o = this;
                  return tc(function () {
                    var i, a, s, l, f, p, d, h, g, y, b, v, m, S;
                    return tp(this, function (_) {
                      switch (_.label) {
                        case 0:
                          if (
                            ((i = o._createConnectUrl(e, n.connectionToken)),
                            !o._isITransport(t))
                          )
                            return [3, 2];
                          return (
                            o._logger.log(
                              c.Debug,
                              "Connection was provided an instance of ITransport, using that directly.",
                            ),
                            (o.transport = t),
                            [4, o._startTransport(i, r)]
                          );
                        case 1:
                          return (
                            _.sent(), (o.connectionId = n.connectionId), [2]
                          );
                        case 2:
                          (a = []),
                            (s = n.availableTransports || []),
                            (l = n),
                            (f = !0),
                            (p = !1),
                            (d = void 0),
                            (_.label = 3);
                        case 3:
                          _.trys.push([3, 15, 16, 17]),
                            (h = s[Symbol.iterator]()),
                            (_.label = 4);
                        case 4:
                          if ((f = (g = h.next()).done)) return [3, 14];
                          if (
                            ((y = g.value),
                            !(
                              (b = o._resolveTransportOrError(
                                y,
                                t,
                                r,
                              )) instanceof Error
                            ))
                          )
                            return [3, 5];
                          return (
                            a.push("".concat(y.transport, " failed:")),
                            a.push(b),
                            [3, 13]
                          );
                        case 5:
                          if (!o._isITransport(b)) return [3, 13];
                          if (((o.transport = b), l)) return [3, 10];
                          _.label = 6;
                        case 6:
                          return (
                            _.trys.push([6, 8, , 9]),
                            [4, o._getNegotiationResponse(e)]
                          );
                        case 7:
                          return (l = _.sent()), [3, 9];
                        case 8:
                          return [2, Promise.reject(_.sent())];
                        case 9:
                          (i = o._createConnectUrl(e, l.connectionToken)),
                            (_.label = 10);
                        case 10:
                          return (
                            _.trys.push([10, 12, , 13]),
                            [4, o._startTransport(i, r)]
                          );
                        case 11:
                          return (
                            _.sent(), (o.connectionId = l.connectionId), [2]
                          );
                        case 12:
                          if (
                            ((v = _.sent()),
                            o._logger.log(
                              c.Error,
                              "Failed to start the transport '"
                                .concat(y.transport, "': ")
                                .concat(v),
                            ),
                            (l = void 0),
                            a.push(
                              new eu(
                                "".concat(y.transport, " failed: ").concat(v),
                                u[y.transport],
                              ),
                            ),
                            "Connecting" !== o._connectionState)
                          )
                            return (
                              (m =
                                "Failed to select transport before stop() was called."),
                              o._logger.log(c.Debug, m),
                              [2, Promise.reject(new ec(m))]
                            );
                          return [3, 13];
                        case 13:
                          return (f = !0), [3, 4];
                        case 14:
                          return [3, 17];
                        case 15:
                          return (S = _.sent()), (p = !0), (d = S), [3, 17];
                        case 16:
                          try {
                            f || null == h.return || h.return();
                          } finally {
                            if (p) throw d;
                          }
                          return [7];
                        case 17:
                          if (a.length > 0)
                            return [
                              2,
                              Promise.reject(
                                new ep(
                                  "Unable to connect to the server with any of the available transports. ".concat(
                                    a.join(" "),
                                  ),
                                  a,
                                ),
                              ),
                            ];
                          return [
                            2,
                            Promise.reject(
                              Error(
                                "None of the transports supported by the client are supported by the server.",
                              ),
                            ),
                          ];
                      }
                    });
                  })();
                },
              },
              {
                key: "_constructTransport",
                value: function (e) {
                  switch (e) {
                    case u.WebSockets:
                      if (!this._options.WebSocket)
                        throw Error(
                          "'WebSocket' is not supported in your environment.",
                        );
                      return new to(
                        this._httpClient,
                        this._accessTokenFactory,
                        this._logger,
                        this._options.logMessageContent,
                        this._options.WebSocket,
                        this._options.headers || {},
                      );
                    case u.ServerSentEvents:
                      if (!this._options.EventSource)
                        throw Error(
                          "'EventSource' is not supported in your environment.",
                        );
                      return new tt(
                        this._httpClient,
                        this._httpClient._accessToken,
                        this._logger,
                        this._options,
                      );
                    case u.LongPolling:
                      return new e5(
                        this._httpClient,
                        this._logger,
                        this._options,
                      );
                    default:
                      throw Error("Unknown transport: ".concat(e, "."));
                  }
                },
              },
              {
                key: "_startTransport",
                value: function (e, t) {
                  var n = this;
                  return (
                    (this.transport.onreceive = this.onreceive),
                    (this.transport.onclose = function (e) {
                      return n._stopConnection(e);
                    }),
                    this.transport.connect(e, t)
                  );
                },
              },
              {
                key: "_resolveTransportOrError",
                value: function (e, t, n) {
                  var r,
                    o,
                    i = u[e.transport];
                  if (null == i)
                    return (
                      this._logger.log(
                        c.Debug,
                        "Skipping transport '".concat(
                          e.transport,
                          "' because it is not supported by this client.",
                        ),
                      ),
                      Error(
                        "Skipping transport '".concat(
                          e.transport,
                          "' because it is not supported by this client.",
                        ),
                      )
                    );
                  if (((r = t), (o = i), r && (o & r) == 0))
                    return (
                      this._logger.log(
                        c.Debug,
                        "Skipping transport '".concat(
                          u[i],
                          "' because it was disabled by the client.",
                        ),
                      ),
                      new el(
                        "'".concat(u[i], "' is disabled by the client."),
                        i,
                      )
                    );
                  if (
                    !(
                      e.transferFormats
                        .map(function (e) {
                          return f[e];
                        })
                        .indexOf(n) >= 0
                    )
                  )
                    return (
                      this._logger.log(
                        c.Debug,
                        "Skipping transport '"
                          .concat(
                            u[i],
                            "' because it does not support the requested transfer format '",
                          )
                          .concat(f[n], "'."),
                      ),
                      Error(
                        "'"
                          .concat(u[i], "' does not support ")
                          .concat(f[n], "."),
                      )
                    );
                  if (
                    (i === u.WebSockets && !this._options.WebSocket) ||
                    (i === u.ServerSentEvents && !this._options.EventSource)
                  )
                    return (
                      this._logger.log(
                        c.Debug,
                        "Skipping transport '".concat(
                          u[i],
                          "' because it is not supported in your environment.'",
                        ),
                      ),
                      new es(
                        "'".concat(
                          u[i],
                          "' is not supported in your environment.",
                        ),
                        i,
                      )
                    );
                  this._logger.log(
                    c.Debug,
                    "Selecting transport '".concat(u[i], "'."),
                  );
                  try {
                    return this._constructTransport(i);
                  } catch (e) {
                    return e;
                  }
                },
              },
              {
                key: "_isITransport",
                value: function (e) {
                  return (
                    e &&
                    (void 0 === e ? "undefined" : tf(e)) === "object" &&
                    "connect" in e
                  );
                },
              },
              {
                key: "_stopConnection",
                value: function (e) {
                  var t = this;
                  if (
                    (this._logger.log(
                      c.Debug,
                      "HttpConnection.stopConnection("
                        .concat(e, ") called while in state ")
                        .concat(this._connectionState, "."),
                    ),
                    (this.transport = void 0),
                    (e = this._stopError || e),
                    (this._stopError = void 0),
                    "Disconnected" === this._connectionState)
                  ) {
                    this._logger.log(
                      c.Debug,
                      "Call to HttpConnection.stopConnection(".concat(
                        e,
                        ") was ignored because the connection is already in the disconnected state.",
                      ),
                    );
                    return;
                  }
                  if ("Connecting" === this._connectionState)
                    throw (
                      (this._logger.log(
                        c.Warning,
                        "Call to HttpConnection.stopConnection(".concat(
                          e,
                          ") was ignored because the connection is still in the connecting state.",
                        ),
                      ),
                      Error(
                        "HttpConnection.stopConnection(".concat(
                          e,
                          ") was called while the connection is still in the connecting state.",
                        ),
                      ))
                    );
                  if (
                    ("Disconnecting" === this._connectionState &&
                      this._stopPromiseResolver(),
                    e
                      ? this._logger.log(
                          c.Error,
                          "Connection disconnected with error '".concat(
                            e,
                            "'.",
                          ),
                        )
                      : this._logger.log(
                          c.Information,
                          "Connection disconnected.",
                        ),
                    this._sendQueue &&
                      (this._sendQueue.stop().catch(function (e) {
                        t._logger.log(
                          c.Error,
                          "TransportSendQueue.stop() threw error '".concat(
                            e,
                            "'.",
                          ),
                        );
                      }),
                      (this._sendQueue = void 0)),
                    (this.connectionId = void 0),
                    (this._connectionState = "Disconnected"),
                    this._connectionStarted)
                  ) {
                    this._connectionStarted = !1;
                    try {
                      this.onclose && this.onclose(e);
                    } catch (t) {
                      this._logger.log(
                        c.Error,
                        "HttpConnection.onclose("
                          .concat(e, ") threw error '")
                          .concat(t, "'."),
                      );
                    }
                  }
                },
              },
              {
                key: "_resolveUrl",
                value: function (e) {
                  if (
                    0 === e.lastIndexOf("https://", 0) ||
                    0 === e.lastIndexOf("http://", 0)
                  )
                    return e;
                  if (!F.isBrowser)
                    throw Error("Cannot resolve '".concat(e, "'."));
                  var t = window.document.createElement("a");
                  return (
                    (t.href = e),
                    this._logger.log(
                      c.Information,
                      "Normalizing '".concat(e, "' to '").concat(t.href, "'."),
                    ),
                    t.href
                  );
                },
              },
              {
                key: "_resolveNegotiateUrl",
                value: function (e) {
                  var t = e.indexOf("?"),
                    n = e.substring(0, -1 === t ? e.length : t);
                  return (
                    "/" !== n[n.length - 1] && (n += "/"),
                    (n += "negotiate"),
                    -1 ===
                      (n += -1 === t ? "" : e.substring(t)).indexOf(
                        "negotiateVersion",
                      ) &&
                      ((n += -1 === t ? "?" : "&"),
                      (n += "negotiateVersion=" + this._negotiateVersion)),
                    n
                  );
                },
              },
            ]),
            e
          );
        })(),
        th = (function () {
          function e(t) {
            ts(this, e),
              (this._transport = t),
              (this._buffer = []),
              (this._executing = !0),
              (this._sendBufferedData = new tg()),
              (this._transportResult = new tg()),
              (this._sendLoopPromise = this._sendLoop());
          }
          return (
            tu(
              e,
              [
                {
                  key: "send",
                  value: function (e) {
                    return (
                      this._bufferData(e),
                      this._transportResult ||
                        (this._transportResult = new tg()),
                      this._transportResult.promise
                    );
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    return (
                      (this._executing = !1),
                      this._sendBufferedData.resolve(),
                      this._sendLoopPromise
                    );
                  },
                },
                {
                  key: "_bufferData",
                  value: function (e) {
                    if (
                      this._buffer.length &&
                      tf(this._buffer[0]) !==
                        (void 0 === e ? "undefined" : tf(e))
                    )
                      throw Error(
                        "Expected data to be of type "
                          .concat(tf(this._buffer), " but was of type ")
                          .concat(void 0 === e ? "undefined" : tf(e)),
                      );
                    this._buffer.push(e), this._sendBufferedData.resolve();
                  },
                },
                {
                  key: "_sendLoop",
                  value: function () {
                    var t = this;
                    return tc(function () {
                      var n, r, o;
                      return tp(this, function (i) {
                        switch (i.label) {
                          case 0:
                            return [4, t._sendBufferedData.promise];
                          case 1:
                            if ((i.sent(), !t._executing))
                              return (
                                t._transportResult &&
                                  t._transportResult.reject(
                                    "Connection stopped.",
                                  ),
                                [3, 6]
                              );
                            (t._sendBufferedData = new tg()),
                              (n = t._transportResult),
                              (t._transportResult = void 0),
                              (r =
                                "string" == typeof t._buffer[0]
                                  ? t._buffer.join("")
                                  : e._concatBuffers(t._buffer)),
                              (t._buffer.length = 0),
                              (i.label = 2);
                          case 2:
                            return (
                              i.trys.push([2, 4, , 5]),
                              [4, t._transport.send(r)]
                            );
                          case 3:
                            return i.sent(), n.resolve(), [3, 5];
                          case 4:
                            return (o = i.sent()), n.reject(o), [3, 5];
                          case 5:
                            return [3, 0];
                          case 6:
                            return [2];
                        }
                      });
                    })();
                  },
                },
              ],
              [
                {
                  key: "_concatBuffers",
                  value: function (e) {
                    var t = new Uint8Array(
                        e
                          .map(function (e) {
                            return e.byteLength;
                          })
                          .reduce(function (e, t) {
                            return e + t;
                          }),
                      ),
                      n = 0,
                      r = !0,
                      o = !1,
                      i = void 0;
                    try {
                      for (
                        var a, c = e[Symbol.iterator]();
                        !(r = (a = c.next()).done);
                        r = !0
                      ) {
                        var s = a.value;
                        t.set(new Uint8Array(s), n), (n += s.byteLength);
                      }
                    } catch (e) {
                      (o = !0), (i = e);
                    } finally {
                      try {
                        r || null == c.return || c.return();
                      } finally {
                        if (o) throw i;
                      }
                    }
                    return t.buffer;
                  },
                },
              ],
            ),
            e
          );
        })(),
        tg = (function () {
          function e() {
            var t = this;
            ts(this, e),
              (this.promise = new Promise(function (e, n) {
                var r;
                return (
                  (r = [e, n]), (t._resolver = r[0]), (t._rejecter = r[1]), r
                );
              }));
          }
          return (
            tu(e, [
              {
                key: "resolve",
                value: function () {
                  this._resolver();
                },
              },
              {
                key: "reject",
                value: function (e) {
                  this._rejecter(e);
                },
              },
            ]),
            e
          );
        })(),
        ty = (function () {
          var e;
          function t() {
            (function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, t),
              (this.name = "json"),
              (this.version = 1),
              (this.transferFormat = f.Text);
          }
          return (
            (e = [
              {
                key: "parseMessages",
                value: function (e, t) {
                  if ("string" != typeof e)
                    throw Error(
                      "Invalid input for JSON hub protocol. Expected a string.",
                    );
                  if (!e) return [];
                  null === t && (t = P.instance);
                  var n = j.parse(e),
                    r = [],
                    o = !0,
                    i = !1,
                    a = void 0;
                  try {
                    for (
                      var l, u = n[Symbol.iterator]();
                      !(o = (l = u.next()).done);
                      o = !0
                    ) {
                      var f = l.value,
                        p = JSON.parse(f);
                      if ("number" != typeof p.type)
                        throw Error("Invalid payload.");
                      switch (p.type) {
                        case s.Invocation:
                          this._isInvocationMessage(p);
                          break;
                        case s.StreamItem:
                          this._isStreamItemMessage(p);
                          break;
                        case s.Completion:
                          this._isCompletionMessage(p);
                          break;
                        case s.Ping:
                        case s.Close:
                          break;
                        default:
                          t.log(
                            c.Information,
                            "Unknown message type '" + p.type + "' ignored.",
                          );
                          continue;
                      }
                      r.push(p);
                    }
                  } catch (e) {
                    (i = !0), (a = e);
                  } finally {
                    try {
                      o || null == u.return || u.return();
                    } finally {
                      if (i) throw a;
                    }
                  }
                  return r;
                },
              },
              {
                key: "writeMessage",
                value: function (e) {
                  return j.write(JSON.stringify(e));
                },
              },
              {
                key: "_isInvocationMessage",
                value: function (e) {
                  this._assertNotEmptyString(
                    e.target,
                    "Invalid payload for Invocation message.",
                  ),
                    void 0 !== e.invocationId &&
                      this._assertNotEmptyString(
                        e.invocationId,
                        "Invalid payload for Invocation message.",
                      );
                },
              },
              {
                key: "_isStreamItemMessage",
                value: function (e) {
                  if (
                    (this._assertNotEmptyString(
                      e.invocationId,
                      "Invalid payload for StreamItem message.",
                    ),
                    void 0 === e.item)
                  )
                    throw Error("Invalid payload for StreamItem message.");
                },
              },
              {
                key: "_isCompletionMessage",
                value: function (e) {
                  if (e.result && e.error)
                    throw Error("Invalid payload for Completion message.");
                  !e.result &&
                    e.error &&
                    this._assertNotEmptyString(
                      e.error,
                      "Invalid payload for Completion message.",
                    ),
                    this._assertNotEmptyString(
                      e.invocationId,
                      "Invalid payload for Completion message.",
                    );
                },
              },
              {
                key: "_assertNotEmptyString",
                value: function (e, t) {
                  if ("string" != typeof e || "" === e) throw Error(t);
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(t.prototype, e),
            t
          );
        })();
      function tb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              }),
            )),
            r.forEach(function (t) {
              var r;
              (r = n[t]),
                t in e
                  ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = r);
            });
        }
        return e;
      }
      var tv = {
          trace: c.Trace,
          debug: c.Debug,
          info: c.Information,
          information: c.Information,
          warn: c.Warning,
          warning: c.Warning,
          error: c.Error,
          critical: c.Critical,
          none: c.None,
        },
        tm = (function () {
          var e;
          function t() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, t);
          }
          return (
            (e = [
              {
                key: "configureLogging",
                value: function (e) {
                  if ((L.isRequired(e, "logging"), void 0 !== e.log))
                    this.logger = e;
                  else if ("string" == typeof e) {
                    var t = (function (e) {
                      var t = tv[e.toLowerCase()];
                      if (void 0 !== t) return t;
                      throw Error("Unknown log level: ".concat(e));
                    })(e);
                    this.logger = new Q(t);
                  } else this.logger = new Q(e);
                  return this;
                },
              },
              {
                key: "withUrl",
                value: function (e, t) {
                  var n, r;
                  return (
                    (L.isRequired(e, "url"),
                    L.isNotEmpty(e, "url"),
                    (this.url = e),
                    (void 0 === t
                      ? "undefined"
                      : t &&
                          "undefined" != typeof Symbol &&
                          t.constructor === Symbol
                        ? "symbol"
                        : typeof t) == "object")
                      ? (this.httpConnectionOptions = tb(
                          {},
                          this.httpConnectionOptions,
                          t,
                        ))
                      : (this.httpConnectionOptions =
                          ((n = tb({}, this.httpConnectionOptions)),
                          (r = r = { transport: t }),
                          Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                n,
                                Object.getOwnPropertyDescriptors(r),
                              )
                            : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                                }
                                return n;
                              })(Object(r)).forEach(function (e) {
                                Object.defineProperty(
                                  n,
                                  e,
                                  Object.getOwnPropertyDescriptor(r, e),
                                );
                              }),
                          n)),
                    this
                  );
                },
              },
              {
                key: "withHubProtocol",
                value: function (e) {
                  return L.isRequired(e, "protocol"), (this.protocol = e), this;
                },
              },
              {
                key: "withAutomaticReconnect",
                value: function (e) {
                  if (this.reconnectPolicy)
                    throw Error("A reconnectPolicy has already been set.");
                  return (
                    e
                      ? Array.isArray(e)
                        ? (this.reconnectPolicy = new eT(e))
                        : (this.reconnectPolicy = e)
                      : (this.reconnectPolicy = new eT()),
                    this
                  );
                },
              },
              {
                key: "build",
                value: function () {
                  var e = this.httpConnectionOptions || {};
                  if (
                    (void 0 === e.logger && (e.logger = this.logger), !this.url)
                  )
                    throw Error(
                      "The 'HubConnectionBuilder.withUrl' method must be called before building the connection.",
                    );
                  var t = new td(this.url, e);
                  return eS.create(
                    t,
                    this.logger || P.instance,
                    this.protocol || new ty(),
                    this.reconnectPolicy,
                  );
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(t.prototype, e),
            t
          );
        })(),
        tS = function (e, t, n, r, o, i) {
          var a = null,
            c = !1,
            s = (function () {
              var e = window.Roblox.Utilities;
              if (!e) return !1;
              var t = new e.ExponentialBackoffSpecification({
                  firstAttemptDelay: 2e3,
                  firstAttemptRandomnessFactor: 3,
                  subsequentDelayBase: 1e4,
                  subsequentDelayRandomnessFactor: 0.5,
                  maximumDelayBase: 3e5,
                }),
                n = new e.ExponentialBackoffSpecification({
                  firstAttemptDelay: 2e4,
                  firstAttemptRandomnessFactor: 0.5,
                  subsequentDelayBase: 4e4,
                  subsequentDelayRandomnessFactor: 0.5,
                  maximumDelayBase: 3e5,
                });
              return new e.ExponentialBackoff(
                t,
                function (e) {
                  var t = e.GetLastResetTime();
                  return !!(t && t + 6e4 > new Date().getTime());
                },
                n,
              );
            })(),
            f = function (e) {
              t && t(e);
            },
            p = function (t) {
              t === l.Connected
                ? (e.isRealtimeWebAnalyticsConnectionEventsEnabled && i(t),
                  (c = !0),
                  n(!0))
                : t === eS.Disconnected && ((c = !1), n(!1));
            },
            d = function (t) {
              if (
                (e.isRealtimeWebAnalyticsConnectionEventsEnabled && i(t),
                t === l.Disconnected)
              ) {
                var n = s.StartNewAttempt();
                f(
                  "In Disconnection handler. Will attempt Reconnect after ".concat(
                    n,
                    "ms",
                  ),
                ),
                  setTimeout(function () {
                    null != a &&
                      a
                        .start()
                        .then(function () {
                          p(a.state);
                        })
                        .catch(function (e) {
                          f(
                            "Connection after Disconnection unsuccessful. err:",
                            e,
                          );
                        });
                  }, n);
              }
            },
            h = function () {
              (a = new tm()
                .withUrl(e.notificationsUrl, {
                  transport: u.WebSockets,
                  skipNegotiation: !0,
                })
                .build()).on("notification", r),
                a.on("subscriptionStatus", o),
                a.onclose(function () {
                  d(a.state);
                }),
                a
                  .start()
                  .then(function () {
                    p(a.state);
                  })
                  .catch(function (e) {
                    f("FAILED to connect to Core SignalR", e);
                  });
            };
          (this.Start = h),
            (this.Stop = function () {
              a && (a.onclose(function () {}), a.stop(), (a = null)), n(!1);
            }),
            (this.Restart = function () {
              null === a ? h() : a.stop();
            }),
            (this.IsConnected = function () {
              return c;
            });
        };
      function t_(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var tw = function (e, t) {
          var n,
            r,
            o,
            i = {
              connectionLost: "ConnectionLost",
              reconnected: "Reconnected",
              subscribed: "Subscribed",
            },
            a = !1,
            c = !1,
            s = null,
            u = !1,
            f = null,
            p = -1,
            d = {},
            h = null,
            g = "",
            y = function (e, n) {
              t && t("SignalRSource: ".concat(e), n);
            },
            b = function () {
              e_.kingmaker.subscribeToMasterChange(function (e) {
                (c = e), e || n();
              }),
                (c = e_.kingmaker.isMasterTab()),
                e_.pubSub.subscribe(
                  ew.RequestForConnectionStatus,
                  "Roblox.RealTime.Sources.SignalRSource",
                  function () {
                    if (c) {
                      var e = {
                        isConnected: a,
                        sequenceNumber: p,
                        namespaceSequenceNumbersObj: d,
                      };
                      y(
                        "Responding to request for connection status: ".concat(
                          JSON.stringify(e),
                        ),
                      ),
                        e_.pubSub.publish(
                          ew.ConnectionEvent,
                          JSON.stringify(e),
                        );
                    }
                  },
                );
            },
            v = function (e, t, n) {
              var o = JSON.parse(t),
                i = o.SequenceNumber || 0,
                a = {
                  namespace: e,
                  detail: o,
                  sequenceNumber: n,
                  namespaceSequenceNumber: i,
                };
              y("Notification received: ".concat(JSON.stringify(a)), !0),
                (p = n || -1),
                (d[e] = i || -1),
                r(a),
                c &&
                  (y("Replicating Notification"),
                  e_.pubSub.publish(ew.Notification, JSON.stringify(a)));
            },
            m = function (e, t) {
              a = e;
              var n = { isConnected: e },
                r = t ? t.SequenceNumber : null,
                i = t ? t.NamespaceSequenceNumbers : {};
              if (
                ((i = i || {}),
                null !== r ? ((n.sequenceNumber = r), (p = r)) : (p = -1),
                i.constructor === Object && Object.keys(i).length > 0)
              )
                (n.namespaceSequenceNumbersObj = i), (d = i);
              else if (
                Object.keys(d).length > 0 &&
                e &&
                0 === Object.keys(i).length
              ) {
                for (var s in d)
                  Object.prototype.hasOwnProperty.call(d, s) && (d[s] = 0);
                n.namespaceSequenceNumbersObj = d;
              }
              y("Sending Connection Event: ".concat(JSON.stringify(n))),
                o(n),
                c &&
                  (y("Replicating Connection Event."),
                  e_.pubSub.publish(ew.ConnectionEvent, JSON.stringify(n)));
            },
            S = function () {
              I()(window).unbind("focus.enforceMaxTimeout"),
                null !== s && (clearTimeout(s), (s = null));
            },
            _ = function () {
              S(),
                (s = setTimeout(function () {
                  m(!1),
                    h.Stop(),
                    I()(window)
                      .unbind("focus.enforceMaxTimeout")
                      .bind("focus.enforceMaxTimeout", function () {
                        h.Start(), _();
                      });
                }, e.maxConnectionTimeInMs));
            },
            w = function (e) {
              null !== f && (clearTimeout(f), (f = null)),
                e.MillisecondsBeforeHandlingReconnect > 0
                  ? (y(
                      "Waiting ".concat(
                        e.MillisecondsBeforeHandlingReconnect,
                        "ms to send Reconnected signal",
                      ),
                    ),
                    setTimeout(function () {
                      h.IsConnected() && m(!0, e);
                    }, e.MillisecondsBeforeHandlingReconnect))
                  : h.IsConnected() && m(!0, e);
            },
            C = function (e, t) {
              var n,
                r,
                o =
                  (t_((n = {}), l.Connecting, 0),
                  t_(n, l.Connected, 1),
                  t_(n, l.Reconnecting, 2),
                  t_(n, l.Disconnected, 3),
                  t_(n, "NO_CONNECTION_UPDATE", 4),
                  n);
              R(
                null !== (r = o[e]) && void 0 !== r
                  ? r
                  : o.NO_CONNECTION_UPDATE,
                g,
                t,
              );
            },
            E = function (e) {
              e && (g = e);
            },
            k = function (t, n) {
              try {
                y("Status Update Received: [".concat(t, "]").concat(n));
              } catch (e) {}
              if (e.isRealtimeWebAnalyticsConnectionEventsEnabled) {
                if (t === i.connectionLost)
                  y("Server Backend Connection Lost!"), h.Restart();
                else if (t === i.reconnected) {
                  y("Server reconnected");
                  var r = JSON.parse(n);
                  E(r.ConnectionId), w(r);
                } else if (t === i.subscribed) {
                  var o = JSON.parse(n);
                  E(o.ConnectionId),
                    y("Server connected"),
                    u ||
                      ((u = !0), (o.MillisecondsBeforeHandlingReconnect = 0)),
                    w(o);
                }
                C("NO_CONNECTION_UPDATE", t);
              } else if (t === i.connectionLost)
                y("Server Backend Connection Lost!"), h.Restart();
              else if (t === i.reconnected)
                y("Server reconnected"), w(JSON.parse(n));
              else if (t === i.subscribed) {
                var a = JSON.parse(n);
                y("Server connected"),
                  u || ((u = !0), (a.MillisecondsBeforeHandlingReconnect = 0)),
                  w(a);
              }
            },
            T = function (e) {
              e
                ? (f = setTimeout(function () {
                    (f = null), h.IsConnected() && ((u = !0), m(!0));
                  }, 2e3))
                : m(!1);
            };
          (this.IsAvailable = function () {
            return !0;
          }),
            (this.Start = function (i, a, c) {
              return (
                (n = i),
                (r = a),
                (o = c),
                b(),
                "CoreSignalR" === e.notificationsClientType
                  ? ((h = new tS(e, t, T, v, k, C)),
                    y("Started Core SignalR connection"))
                  : ((h = new eC(e, t, T, v, k)),
                    y("Started Legacy SignalR connection")),
                h.Start(),
                _(),
                !0
              );
            }),
            (this.Stop = function () {
              S(), h && h.Stop();
            }),
            (this.Name = "SignalRSource");
        },
        tC = { hybridSourceDisabled: null },
        tE = null === (p = window.Roblox) || void 0 === p ? void 0 : p.Hybrid,
        tk = function (e, t) {
          var n,
            r,
            o,
            i,
            a = !0,
            c = function (e, n) {
              t && t("HybridSource: ".concat(e), n);
            },
            s = function () {
              var e;
              return (null == tE
                ? void 0
                : null === (e = tE.RealTime) || void 0 === e
                  ? void 0
                  : e.supports) == null
                ? (c(
                    "Roblox.Hybrid or its RealTime module not present. Cannot use Hybrid Source",
                  ),
                  !1)
                : tE.RealTime.isConnected &&
                    tE.RealTime.onNotification &&
                    tE.RealTime.onConnectionEvent
                  ? (null == tE ? void 0 : tE.Bridge)
                    ? !tC.hybridSourceDisabled ||
                      (c(
                        "Roblox.Hybrid has previously told us it is not supported. Will not try again",
                      ),
                      !1)
                    : (c("Roblox.Hybrid.Bridge is missing"), !1)
                  : (c(
                      "Roblox.Hybrid.RealTime module does not provide all required methods. Cannot use Hybrid Source",
                    ),
                    !1);
            },
            l = function () {
              tE.RealTime.isConnected(function (e, t) {
                e && t
                  ? (c(
                      "ConnectionStatus response received: ".concat(
                        JSON.stringify(t),
                      ),
                    ),
                    o({
                      isConnected: t.isConnected,
                      sequenceNumber: t.sequenceNumber || 0,
                      namespaceSequenceNumbers: t.namespaceSequenceNumbers,
                    }))
                  : (c(
                      "ConnectionStatus request failed! Aborting attempt to use HybridSource",
                    ),
                    n && n());
              });
            },
            u = function () {
              (i = new Date().getTime()),
                setTimeout(function () {
                  a &&
                    (new Date().getTime() - i > 8e3 &&
                      (c(
                        "possible resume from suspension detected: polling for status",
                      ),
                      l()),
                    u());
                }, 5e3);
            },
            f = function () {
              a = !1;
            },
            p = function (e) {
              if (!e || !e.params) {
                c("onNotification event without sufficient data");
                return;
              }
              var t = (JSON.parse(e.params.detail) || {}).sequenceNumber || 0,
                n = {
                  namespace: e.params.namespace || "",
                  detail: JSON.parse(e.params.detail) || {},
                  sequenceNumber: e.params.sequenceNumber || -1,
                  namespaceSequenceNumber: t,
                };
              c("Relaying parsed notification: ".concat(JSON.stringify(n)), !0),
                r(n);
            },
            d = function (e) {
              if (!e || !e.params) {
                c("onConnectionEvent event without sufficient data");
                return;
              }
              c("ConnectionEvent received: ".concat(JSON.stringify(e)), !0),
                o({
                  isConnected: e.params.isConnected || !1,
                  sequenceNumber: e.params.sequenceNumber || -1,
                  namespaceSequenceNumbersObj:
                    e.params.namespaceSequenceNumbers || {},
                });
            },
            h = function () {
              tE.RealTime.supports("isConnected", function (e) {
                e
                  ? (c(
                      "Roblox.Hybrid.RealTime isConnected is supported. Subscribing to events",
                    ),
                    tE.RealTime.onNotification.subscribe(p),
                    tE.RealTime.onConnectionEvent.subscribe(d),
                    l())
                  : (c(
                      "Roblox.Hybrid.RealTime isConnected not supported. Aborting attempt to use HybridSource",
                    ),
                    (tC.hybridSourceDisabled = !0),
                    n && n());
              });
            },
            g = function () {
              tE.RealTime.onNotification.unsubscribe(p),
                tE.RealTime.onConnectionEvent.unsubscribe(d);
            };
          (this.IsAvailable = s),
            (this.Start = function (e, t, i) {
              return (
                c("Starting"),
                !!s() && ((n = e), (r = t), (o = i), h(), u(), !0)
              );
            }),
            (this.Stop = function () {
              c("Stopping. Detaching from native events"), g(), f();
            }),
            (this.Name = "HybridSource");
        },
        tT = function (e, t) {
          var n,
            r,
            o,
            i = "Roblox.RealTime.Sources.CrossTabReplicatedSource",
            a = !1,
            c = function (e, n) {
              t && t("CrossTabReplicatedSource: ".concat(e), n);
            },
            s = function () {
              return e_.pubSub.isAvailable()
                ? !e_.kingmaker.isMasterTab() ||
                    (c(
                      "This is the master tab - it needs to send the events, not listen to them",
                    ),
                    !1)
                : (c(
                    "CrossTabCommunication.Kingmaker not available - cannot pick a master tab",
                  ),
                  !1);
            },
            l = function () {
              e_.kingmaker.subscribeToMasterChange(function (e) {
                e &&
                  a &&
                  n &&
                  (c(
                    "Tab has been promoted to master tab - triggering end of this source",
                  ),
                  n());
              }),
                e_.pubSub.subscribe(ew.Notification, i, function (e) {
                  c("Notification Received: ".concat(e), !0),
                    e && r(JSON.parse(e));
                }),
                e_.pubSub.subscribe(ew.ConnectionEvent, i, function (e) {
                  c("Connection Event Received: ".concat(e)),
                    e && o(JSON.parse(e));
                });
            },
            u = function () {
              e_.pubSub.publish(
                ew.RequestForConnectionStatus,
                ew.RequestForConnectionStatus,
              );
            };
          (this.IsAvailable = s),
            (this.Start = function (e, t, i) {
              return (
                !!s() && ((a = !0), (n = e), (r = t), (o = i), l(), u(), !0)
              );
            }),
            (this.Stop = function () {
              c("Stopping. Unsubscribing from Cross-Tab events"),
                (a = !1),
                e_.pubSub.unsubscribe(ew.Notification, i),
                e_.pubSub.unsubscribe(ew.ConnectionEvent, i);
            }),
            (this.Name = "CrossTabReplicatedSource");
        },
        tR = function (e) {
          var t,
            n = null,
            r = {},
            o = {},
            i = {},
            a = {},
            c = {},
            s = [],
            l = null,
            u = !1,
            f = function (e, t) {
              (!t || u) && l && l("RealTime Client: ".concat(e));
            },
            p = null,
            d = function (e) {
              if ((f("Client Disconnected!"), e))
                try {
                  if (a[e]) for (var t = 0; a[e].length > 0; t += 1) a[e][t]();
                } catch (e) {
                  f(
                    "Error running subscribed event handler for disconnected:".concat(
                      e,
                    ),
                  );
                }
              else
                for (var n in a)
                  try {
                    if (a[n])
                      for (var r = 0; a[n].length > 0; r += 1) a[n][r]();
                  } catch (e) {
                    f(
                      "Error running subscribed event handler for disconnected:".concat(
                        e,
                      ),
                    );
                  }
            },
            h = function () {
              if (r.constructor === Object && Object.keys(r).length > 0)
                for (var e in r)
                  r[e].isConnected && ((r[e].isConnected = !1), d(e));
            },
            g = function (e, t) {
              if (e === n) {
                var r = t.namespace,
                  i = t.detail;
                if (w.GetSettings().isRealtimeWebAnalyticsEnabled)
                  try {
                    var a = JSON.stringify(t.detail).length;
                    T(r, i, a);
                  } catch (e) {
                    f(
                      "Error sending realtime event to datalake for notification ["
                        .concat(r, "]:")
                        .concat(e),
                    );
                  }
                var c = o[r];
                if (c) {
                  var s = !0,
                    l = !1,
                    u = void 0;
                  try {
                    for (
                      var d, h = c[Symbol.iterator]();
                      !(s = (d = h.next()).done);
                      s = !0
                    ) {
                      var g = d.value;
                      try {
                        g(i);
                      } catch (e) {
                        f(
                          "Error running subscribed event handler for notification ["
                            .concat(r, "]:")
                            .concat(e),
                        );
                      }
                    }
                  } catch (e) {
                    (l = !0), (u = e);
                  } finally {
                    try {
                      s || null == h.return || h.return();
                    } finally {
                      if (l) throw u;
                    }
                  }
                }
                p && p.UpdateSequenceNumber(r, t.namespaceSequenceNumber);
              }
            },
            y = function () {
              s.forEach(function (e) {
                e();
              });
            },
            b = function (e) {
              if (!e) {
                var t = !1;
                for (var n in r) r[n] && r[n].isConnected && (t = !0);
                return { isConnected: t };
              }
              return (
                r[e] || (r[e] = { isConnected: !1, hasEverBeenConnected: !1 }),
                r[e]
              );
            },
            v = function (e, t) {
              if ((f("Client Connected!"), t))
                try {
                  if (i[t]) {
                    var n = !0,
                      r = !1,
                      o = void 0;
                    try {
                      for (
                        var a, c = i[t][Symbol.iterator]();
                        !(n = (a = c.next()).done);
                        n = !0
                      )
                        (0, a.value)(e);
                    } catch (e) {
                      (r = !0), (o = e);
                    } finally {
                      try {
                        n || null == c.return || c.return();
                      } finally {
                        if (r) throw o;
                      }
                    }
                  }
                } catch (e) {
                  f(
                    "Error running subscribed event handler for connected:".concat(
                      e,
                    ),
                  );
                }
              else
                for (var s in i)
                  try {
                    if (i[s]) {
                      var l = !0,
                        u = !1,
                        p = void 0;
                      try {
                        for (
                          var d, h = i[s][Symbol.iterator]();
                          !(l = (d = h.next()).done);
                          l = !0
                        )
                          (0, d.value)(e);
                      } catch (e) {
                        (u = !0), (p = e);
                      } finally {
                        try {
                          l || null == h.return || h.return();
                        } finally {
                          if (u) throw p;
                        }
                      }
                    }
                  } catch (e) {
                    f(
                      "Error running subscribed event handler for connected:".concat(
                        e,
                      ),
                    );
                  }
            },
            m = function (e, t) {
              if (
                (f("Client Reconnected! Data Reload Required: ".concat(e)), t)
              )
                try {
                  if (c[t]) for (var n = 0; c[t].length > 0; n += 1) c[t][n](e);
                } catch (e) {
                  f(
                    "Error running subscribed event handler for reconnected:".concat(
                      e,
                    ),
                  );
                }
              else
                for (var r in c)
                  try {
                    if (c[r])
                      for (var o = 0; c[r].length > 0; o += 1) c[r][o](e);
                  } catch (e) {
                    f(
                      "Error running subscribed event handler for reconnected:".concat(
                        e,
                      ),
                    );
                  }
            },
            S = function (e, t) {
              var r = p ? p.IsDataRefreshRequired(e, t) : null,
                o = b(e);
              if (
                (o.isConnected &&
                  r === p.RefreshRequiredEnum.IS_REQUIRED &&
                  (f(
                    "Have detected messages were missed. Triggering reconnect logic. Data Reload Required: ".concat(
                      r,
                    ),
                  ),
                  (o.isConnected = !1),
                  d(e)),
                !o.isConnected)
              ) {
                if (((o.isConnected = !0), o.hasEverBeenConnected))
                  m(
                    null === r ||
                      r === p.RefreshRequiredEnum.IS_REQUIRED ||
                      r === p.RefreshRequiredEnum.UNCLEAR,
                    e,
                  );
                else {
                  var i = r !== p.RefreshRequiredEnum.NOT_REQUIRED;
                  o.hasEverBeenConnected = !0;
                  var a = window.Roblox.Performance;
                  if (a) {
                    var c = "signalR_".concat(n.Name, "_connected");
                    a.logSinglePerformanceMark(c);
                  }
                  v(i, e);
                }
              }
            },
            _ = function (e) {
              var t = b(e);
              t.isConnected && ((t.isConnected = !1), d(e));
            },
            C = function (e, t) {
              if (e === n) {
                if (t.isConnected) {
                  if ((y(), t.namespace))
                    S(t.namespace, t.namespaceSequenceNumber);
                  else if (t.namespaceSequenceNumbersObj)
                    for (var o in t.namespaceSequenceNumbersObj) {
                      var i = t.namespaceSequenceNumbersObj[o];
                      S(o, i);
                    }
                } else if (t.namespace) _(t.namespace);
                else if (t.namespaceSequenceNumbersObj)
                  for (var a in t.namespaceSequenceNumbersObj) _(a);
                else for (var c in r) _(c);
              }
            },
            k = function () {
              n &&
                (f("Stopping current source: ".concat(n.Name)),
                n.Stop(),
                (n = null),
                h());
              var t = w.GetSettings(),
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, c = e[Symbol.iterator]();
                  !(r = (a = c.next()).done);
                  r = !0
                ) {
                  var s = (function () {
                    var e = new a.value(t, f);
                    if (
                      (f("Attempting to start a new source: ".concat(e.Name)),
                      e.Start(
                        k,
                        function (t) {
                          g(e, t);
                        },
                        function (t) {
                          C(e, t);
                        },
                      ))
                    )
                      return (
                        f("New source started: ".concat(e.Name)),
                        (n = e),
                        "break"
                      );
                  })();
                  if ("break" === s) break;
                }
              } catch (e) {
                (o = !0), (i = e);
              } finally {
                try {
                  r || null == c.return || c.return();
                } finally {
                  if (o) throw i;
                }
              }
              null === n && f("No source can be started!");
            };
          E &&
            (p = new E(
              w.IsLocalStorageEnabled(),
              w.IsEventPublishingEnabled(),
            )),
            k(),
            (t = window.Roblox.Performance) &&
              t.setPerformanceMark("signalR_initialized"),
            (this.Subscribe = function (e, t) {
              o[e] || (o[e] = []), o[e].push(t);
            }),
            (this.Unsubscribe = function (e, t) {
              if (o[e]) {
                var n = o[e],
                  r = n.indexOf(t);
                r >= 0 && n.splice(r, 1);
              }
            }),
            (this.SubscribeToConnectionEvents = function (e, t, n, r) {
              if (!r) return !1;
              e && (i[r] || (i[r] = []), i[r].push(e)),
                t && (c[r] || (c[r] = []), c[r].push(t)),
                n && (a[r] || (a[r] = []), a[r].push(n));
            }),
            (this.DetectSignalConnection = function (e) {
              s.push(e);
            }),
            (this.IsConnected = function (e) {
              return b(e).isConnected;
            }),
            (this.SetLogger = function (e) {
              l = e;
            }),
            (this.SetVerboseLogging = function (e) {
              u = e;
            });
        },
        tO = null,
        tI = function () {
          var e = [];
          if (tk) {
            var t = window.Roblox.DeviceMeta,
              n = t && new t(),
              r = !!n && n.isAndroidApp,
              o = !!n && n.isIosApp;
            !1 === r && !1 === o && e.push(tk);
          }
          return tT && e.push(tT), tw && e.push(tw), new tR(e);
        },
        tj = function () {
          return null === tO && (tO = tI()), tO;
        };
      n(135), n(679);
      var tP = !1,
        tA = [],
        tx = function (e, t) {
          try {
            if (
              (console &&
                console.log &&
                console.log("REALTIME DEBUGGER: ".concat(e)),
              tP)
            ) {
              var n = new Date(),
                r = ""
                  .concat(n.getHours(), ":")
                  .concat(n.getMinutes(), ":")
                  .concat(n.getSeconds(), ": ");
              d.append(
                "<div style='color:"
                  .concat(
                    t || "black",
                    "; margin-bottom:2px; border-bottom:1px solid black; font-size: 11px;'>",
                  )
                  .concat(r)
                  .concat(e, "</div>"),
              ),
                d.scrollTop(d[0].scrollHeight);
            } else tA.push(e);
          } catch (e) {}
        },
        tD = function () {
          d.toggle();
        },
        tN = function (e) {
          I()("#realtimeDebuggerCheckStatusButton").css(
            "background-color",
            e ? "green" : "red",
          );
        },
        tq = function () {
          var e = h.IsConnected();
          tx("SignalrR Connected:".concat(e)), tN(e);
        },
        tM = {
          debuggerInit: function () {
            (h = tj()).SetLogger(tx),
              h.SetVerboseLogging(!0),
              I()(function () {
                var e = "";
                (e +=
                  "<div id='realtimeDebuggerControlPanel' style=' position: fixed; z-index: 2147483647; background-color: #aaaaaa; right: 24px; top: 24px; opacity: 0.9; '><button id='realtimeDebuggerCheckStatusButton'>?</button><button id='realtimeDebuggerToggleLogButton'>+/-</button></div><div id='realtimeDebuggerLog' style='display: none; position: fixed; z-index: 2147483647; background-color: #aaaaaa; right: 24px; top: 44px; opacity: 0.9; height: 70%; width: 70%; overflow-y: scroll;'/>"),
                  I()("body").prepend(e),
                  (d = I()("#realtimeDebuggerLog")),
                  (tP = !0);
                var t = !0,
                  n = !1,
                  r = void 0;
                try {
                  for (
                    var o, i = tA[Symbol.iterator]();
                    !(t = (o = i.next()).done);
                    t = !0
                  ) {
                    var a = o.value;
                    tx(a);
                  }
                } catch (e) {
                  (n = !0), (r = e);
                } finally {
                  try {
                    t || null == i.return || i.return();
                  } finally {
                    if (n) throw r;
                  }
                }
                (tA = []),
                  I()("#realtimeDebuggerCheckStatusButton").click(tq),
                  I()("#realtimeDebuggerToggleLogButton").click(tD),
                  h.Subscribe("ChatNotifications", function (e) {
                    tx(JSON.stringify(e), "darkblue");
                  }),
                  h.SubscribeToConnectionEvents(
                    function () {
                      tx("Connection Event: connected"), tN(!0);
                    },
                    function () {
                      tx("Connection Event: reconnected"), tN(!0);
                    },
                    function () {
                      tx("Connection Event: disconnected"), tN(!1);
                    },
                    "ChatNotifications",
                  ),
                  tq();
              });
          },
        };
      I()(function () {
        var e = window.Roblox.RealTimeSettings;
        e && "True" === e.IsDebuggerEnabled && tM.debuggerInit();
      });
      var tH = n(974),
        tL = tH.format;
      tH.resolve;
      var tF = tH.parse;
      function tU(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      }
      var tW = window.location.hostname.replace(/^[\w-]+\./, ""),
        tB = {
          "/game/report-stats": "https://assetgame.".concat(
            tW,
            "/game/report-stats",
          ),
          "/game/report-event": "https://assetgame.".concat(
            tW,
            "/game/report-event",
          ),
          "/catalog/html": "https://search.".concat(tW, "/catalog/html"),
          "/catalog/json": "https://search.".concat(tW, "/catalog/json"),
          "/catalog/contents": "https://search.".concat(
            tW,
            "/catalog/contents",
          ),
          "/catalog/items": "https://search.".concat(tW, "/catalog/items"),
          "/asset-hash-thumbnail/image": "https://assetgame.".concat(
            tW,
            "/asset-hash-thumbnail/image",
          ),
          "/asset-hash-thumbnail/json": "https://assetgame.".concat(
            tW,
            "/asset-hash-thumbnail/json",
          ),
          "/asset-thumbnail-3d/json": "https://assetgame.".concat(
            tW,
            "/asset-thumbnail-3d/json",
          ),
          "/asset-thumbnail/image": "https://assetgame.".concat(
            tW,
            "/asset-thumbnail/image",
          ),
          "/asset-thumbnail/json": "https://assetgame.".concat(
            tW,
            "/asset-thumbnail/json",
          ),
          "/asset-thumbnail/url": "https://assetgame.".concat(
            tW,
            "/asset-thumbnail/url",
          ),
          "/asset/request-thumbnail-fix": "https://assetgame.".concat(
            tW,
            "/asset/request-thumbnail-fix",
          ),
        },
        tz = /^\/([A-Za-z]{2}(?:-[A-Za-z0-9]{2,3})?)(\/|$)/i,
        tG = [".roblox.com", ".robloxlabs.com", ".roblox.qq.com"],
        tQ = document.querySelector('meta[name="locale-data"]'),
        tK =
          null !== (g = null == tQ ? void 0 : tQ.dataset.urlLocale) &&
          void 0 !== g
            ? g
            : "",
        tJ =
          (null == tQ ? void 0 : tQ.dataset.overrideLanguageHeader) === "true",
        t$ = !!tK,
        tV = function (e) {
          return /^([a-z]+:\/\/|\/\/)/.test(e);
        },
        tX = function (e) {
          var t = /\?(?!})/.exec(e);
          return null === t
            ? { url: e, query: "" }
            : { url: e.substring(0, t.index), query: e.substring(t.index) };
        },
        tZ = function (e) {
          var t = e;
          e.startsWith("/") || (t = "/".concat(e));
          var n = tz.exec(t);
          if (n) {
            var r,
              o = n[1];
            if (o && "my" !== (r = o).toLowerCase() && "js" !== r.toLowerCase())
              return { locale: o, remainingPath: t.replace(tz, "/") };
          }
          return { locale: null, remainingPath: e };
        },
        tY = function (e) {
          var t,
            n = e;
          tV(e) && (n = (t = tF(e)).pathname);
          var r = tZ(n);
          return r.locale
            ? t
              ? ((t.pathname = r.remainingPath), tL(t))
              : r.remainingPath
            : e;
        },
        t0 = function (e) {
          if (!tV(e)) return e;
          var t = tF(e),
            n = tZ(t.pathname);
          return tK === n.locale || t.hostname !== window.location.hostname
            ? e
            : (tK
                ? (t.pathname = "/".concat(tK).concat(n.remainingPath))
                : (t.pathname = n.remainingPath),
              tL(t));
        },
        t1 = function (e) {
          if (
            (void 0 === tB ? "undefined" : tU(tB)) === "undefined" ||
            0 === e.length
          )
            return e;
          if (tV(e)) return t0(e);
          var t = e;
          if (!e.startsWith("/")) {
            var n = window.location.pathname;
            t = n.slice(0, n.lastIndexOf("/") + 1) + e;
          }
          var r = tB[t.toLowerCase()];
          return (
            void 0 === r &&
              (r =
                ""
                  .concat(window.location.protocol, "//")
                  .concat(window.location.hostname) + t),
            (r = t0(r))
          );
        },
        t2 = function (e, t, n) {
          var r = tX(e),
            o = r.url.toLowerCase(),
            i = o;
          return (
            n && "undefined" !== tU(tB[o.toLowerCase()]) && (i = t1(o)),
            i.includes("{") &&
              I().each(t, function (e, t) {
                var n = new RegExp("{".concat(e.toLowerCase(), "(:.*?)?\\??}"));
                i = i.replace(n, t);
              }),
            i + r.query
          );
        },
        t3 = function (e) {
          var t;
          return (
            !!tV(e) &&
            !(
              (t = tF(e).hostname) === window.location.host ||
              tG.some(function (e) {
                return t.endsWith(e);
              })
            )
          );
        },
        t4 = function (e) {
          return tJ && tK && !t3(e) ? "".concat(tK, ";q=0.01") : null;
        },
        t6 = function (e, t, n) {
          var r,
            o,
            i = t2(e.url, e.data, e.crossDomain);
          (e.url = i),
            !(
              (r = e.url).includes("rbxcdn.com") ||
              r.includes("s3.amazonaws.com")
            ) &&
              ((e.crossDomain = !0),
              (e.xhrFields =
                null !== (o = e.xhrFields) && void 0 !== o ? o : {}),
              (e.xhrFields.withCredentials = !0));
          var a = t4(e.url);
          a && n.setRequestHeader("Accept-Language", a);
        },
        t5 = function (e) {
          var t = e;
          return (
            "string" != typeof t && (t = ""),
            t
              .replace(/'/g, "")
              .replace(/[^a-zA-Z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "")
              .replace(/^(COM\d|LPT\d|AUX|PRT|NUL|CON|BIN)$/i, "") || "unnamed"
          );
        },
        t8 = function (e, t) {
          return t1("/catalog/".concat(e, "/").concat(t5(t)));
        },
        t7 = function (e, t) {
          return t1("/badges/".concat(e, "/").concat(t5(t)));
        },
        t9 = function (e) {
          tK = e;
        },
        ne = function () {
          return tK;
        },
        nt = function () {
          return tJ;
        },
        nn = function (e) {
          tJ = e;
        },
        nr = tB,
        no = !0;
      I()(function () {
        tj().Subscribe("AuthenticationNotifications", function (e) {
          if ("SignOut" === e.Type) {
            var t = "/authentication/is-logged-in";
            y && (t = t2(t, null, !0)),
              I().ajax({
                url: t,
                method: "GET",
                error: function (e) {
                  401 === e.status && window.location.reload();
                },
              });
          }
        });
      });
      var ni = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              }),
            )),
            r.forEach(function (t) {
              var r;
              (r = n[t]),
                t in e
                  ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = r);
            });
        }
        return e;
      })({ GetClient: tj }, w);
      m(["Roblox", "core-scripts", "realtime"], b),
        m(["Roblox", "RealTime", "Factory"], ni);
    })();
})();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/realTime-a7d0824134cff709.js.map
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("RealTime");
