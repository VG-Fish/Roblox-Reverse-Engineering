!(function () {
  var n = {
      870: function (e, t) {
        var n;
        /*!
				Copyright (c) 2018 Jed Watson.
				Licensed under the MIT License (MIT), see
				http://jedwatson.github.io/classnames
			*/
        !(function () {
          "use strict";
          var i = {}.hasOwnProperty;
          function l() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var a,
                  r = typeof n;
                if ("string" == r || "number" == r) e.push(n);
                else if (Array.isArray(n))
                  !n.length || ((a = l.apply(null, n)) && e.push(a));
                else if ("object" == r)
                  if (
                    n.toString === Object.prototype.toString ||
                    n.toString.toString().includes("[native code]")
                  )
                    for (var o in n) i.call(n, o) && n[o] && e.push(o);
                  else e.push(n.toString());
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((l.default = l), (e.exports = l))
            : void 0 ===
                (n = function () {
                  return l;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      657: function (e) {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAOCAYAAADT0Rc6AAAACXBIWXMAAACWAAAAlgEGQc5mAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAkZJREFUOI2VlE1IVFEYhp9zZqwZTaeNCdEiIgzLVmFUY4swadFyaFFQoNYwLlpJjhmaAxXWCBL9OWaQkUILWwSBZJTBMNOP5UL6oSLIoHIhQ/iT48zc0+Kqd+7cMcd39b3vd77v/e655xxBJryqDWgA1llyq8c00EG3CKSLYinyKTcaYZeT5BUPsroMmb9mKZvQFDFNIwZo6Q02NVGWk73CzW0RMUwXDHuOE6+rZG2un5HUIK8+19WAYB8hEbUDoBG+c4JUrTt3Q4D7L1ezGlBEACGlT7W4nKRq3dhWqik4DY/HDH5jOK1fCLz7Db57s6458jKaeFWzXUBT0LOyYWkLlBTB4Z2GNvLdiHddhLfn9C0fHYdXZ6GmF+YSllaN9pRG/qEdZvXzBJSWGNzTBT9iMHvN0CZnzDXvxqHiErxp1rmvD+5Gss7vkgDCOMNMzcG2VuiN6rzzKTwchYmged2tYWu36bgRz8St+UXYbZK/Qx9w1rp1odABUT/svQyffkP7IIydhyKnufDmCzPfWgwfA9A4AOGvEPGDpqD/tcVzSiroODNAKl3ds0Uvah+EezVQvtE67a8/Zv7lArQ+guATiH6DyiD01cH6jGERdAhQAi9a/0m0oxXI5TfFwPufUB4wa4UO/dekI88GiZRZo1sICUKhUXWsB/lgBOtZy4Lrz61apiFkMZQcgPRn8JQ6iGBoQxHJziPYq7eDM/OOLaC4IetV+D8kVXSJZ2ZTgDYlCybpnJ2nXimWsVwV5oGrhPAjhFoU/wFkb7M55NWangAAAABJRU5ErkJggg==";
      },
    },
    a = {};
  function $(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    t = a[e] = { exports: {} };
    return n[e](t, t.exports, $), t.exports;
  }
  ($.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return $.d(t, { a: t }), t;
  }),
    ($.d = function (e, t) {
      for (var n in t)
        $.o(t, n) &&
          !$.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    ($.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      var i = React,
        l = $.n(i),
        a = ReactDOM,
        c = CoreUtilities,
        r = "account-settings-language-selector",
        e = { common: ["CommonUI.Features"], feature: "Feature.Tracking" },
        t = $(657),
        o = [
          {
            name: "about",
            path: "/info/about-us",
            labelTranslationKey: "Label.AboutUs",
          },
          {
            name: "jobs",
            path: "/info/jobs",
            labelTranslationKey: "Label.Jobs",
          },
          {
            name: "blog",
            path: "/info/blog",
            labelTranslationKey: "Label.sBlog",
          },
          {
            name: "parents",
            path: "/info/parents",
            labelTranslationKey: "Label.Parents",
          },
          {
            name: "help",
            path: "/info/help",
            labelTranslationKey: "Label.Help",
          },
          {
            name: "terms",
            path: "/info/terms",
            labelTranslationKey: "Label.Terms",
          },
          {
            name: "accessibility",
            path: "/info/accessibility",
            labelTranslationKey: "Label.Accessibility",
          },
          {
            name: "privacy",
            path: "/info/privacy",
            labelTranslationKey: "Label.Privacy",
          },
          {
            name: "your-privacy-choices",
            path: "/my/account#!/privacy",
            labelTranslationKey: "Label.YourPrivacyChoices",
            postfixIcon: (y = $.n(t))(),
          },
        ],
        s = [
          {
            name: "about",
            path: "/info/about-us",
            labelTranslationKey: "Label.AboutUs",
          },
          {
            name: "jobs",
            path: "/info/jobs",
            labelTranslationKey: "Label.Jobs",
          },
          {
            name: "blog",
            path: "/info/blog",
            labelTranslationKey: "Label.sBlog",
          },
          {
            name: "parents",
            path: "/info/parents",
            labelTranslationKey: "Label.Parents",
          },
          {
            name: "giftcards",
            path: "/giftcards",
            labelTranslationKey: "Label.GiftCards",
            cssClass: "giftcards",
          },
          {
            name: "help",
            path: "/info/help",
            labelTranslationKey: "Label.Help",
          },
          {
            name: "terms",
            path: "/info/terms",
            labelTranslationKey: "Label.Terms",
          },
          {
            name: "accessibility",
            path: "/info/accessibility",
            labelTranslationKey: "Label.Accessibility",
          },
          {
            name: "privacy",
            path: "/info/privacy",
            labelTranslationKey: "Label.Privacy",
          },
          {
            name: "your-privacy-choices",
            path: "/my/account#!/privacy",
            labelTranslationKey: "Label.YourPrivacyChoices",
            postfixIcon: y(),
          },
        ],
        n = PropTypes,
        u = $.n(n),
        p = ReactUtilities,
        d = HeaderScripts,
        f = Roblox,
        t = $.n(f);
      function h(e) {
        var t = e.translate,
          e = new Date().getFullYear();
        return l().createElement(
          "p",
          { className: "text-footer footer-note" },
          t("Description.CopyRightMessageDynamicYear", { copyrightYear: e }),
        );
      }
      h.propTypes = { translate: u().func.isRequired };
      var g = h,
        y = $(870),
        v = $.n(y),
        m = ReactStyleGuide,
        b = "Heading.CookieSettings",
        n = f.EnvironmentUrls.universalAppConfigurationApi,
        L = {
          getCookiePolicyConfig: {
            withCredentials: !0,
            url: "".concat(n, "/v1/behaviors/cookie-policy/content"),
          },
        };
      function w(e, t, n, a, r, o, i) {
        try {
          var l = e[o](i),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(a, r);
      }
      var S = {
        getCookiePolicy: (function () {
          var l,
            e =
              ((l = regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = L.getCookiePolicyConfig),
                          (e.next = 3),
                          c.httpService.get(t)
                        );
                      case 3:
                        if (void 0 !== (t = e.sent))
                          return (n = t.data), e.abrupt("return", n);
                        e.next = 7;
                        break;
                      case 7:
                        return (
                          (n = {
                            ShouldDisplayCookieBannerV3: !1,
                            NonEssentialCookieList: [],
                            EssentialCookieList: [],
                          }),
                          e.abrupt("return", n)
                        );
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })),
              function () {
                var e = this,
                  i = arguments;
                return new Promise(function (t, n) {
                  var a = l.apply(e, i);
                  function r(e) {
                    w(a, t, n, r, o, "next", e);
                  }
                  function o(e) {
                    w(a, t, n, r, o, "throw", e);
                  }
                  r(void 0);
                });
              });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
      };
      function U(e, t, n, a, r, o, i) {
        try {
          var l = e[o](i),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(a, r);
      }
      function A(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              a = !0,
              r = !1,
              o = void 0;
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(a = (i = l.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              (r = !0), (o = e);
            } finally {
              try {
                a || null == l.return || l.return();
              } finally {
                if (r) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return E(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return E(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      function C(e) {
        var t = e.translate,
          n = A((0, i.useState)([]), 2),
          a = n[0],
          r = n[1],
          e = A((0, i.useState)([]), 2),
          n = e[0],
          o = e[1];
        (0, i.useEffect)(function () {
          (function () {
            var l,
              e =
                ((l = regeneratorRuntime.mark(function e() {
                  var t;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), S.getCookiePolicy();
                        case 2:
                          (t = e.sent).ShouldDisplayCookieBannerV3 &&
                            t.NonEssentialCookieList &&
                            (r(t.NonEssentialCookieList),
                            o(t.EssentialCookieList));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })),
                function () {
                  var e = this,
                    i = arguments;
                  return new Promise(function (t, n) {
                    var a = l.apply(e, i);
                    function r(e) {
                      U(a, t, n, r, o, "next", e);
                    }
                    function o(e) {
                      U(a, t, n, r, o, "throw", e);
                    }
                    r(void 0);
                  });
                });
            return function () {
              return e.apply(this, arguments);
            };
          })()();
        }, []);
        (e = A(
          f.Cookies.useConsentTool({
            nonEssentialCookieList: a,
            essentialCookieList: n,
            translate: t,
          }),
          2,
        )),
          (a = e[0]),
          (e = e[1]);
        return 0 < n.length
          ? l().createElement(
              "div",
              null,
              l().createElement(
                m.Button,
                {
                  onClick: e.open,
                  className: "btn text-footer-nav cookie-consent-link",
                  variant: null,
                  size: null,
                  width: null,
                },
                t(b),
              ),
              a,
            )
          : null;
      }
      C.propTypes = { translate: u().func.isRequired };
      var T = C;
      function k(e) {
        var t = e.translate,
          a = e.intl,
          n = o,
          r = !1,
          e = document.getElementById("footer-container");
        null == e ||
          (null != (e = e.getAttribute("data-is-giftcards-footer-enabled")) &&
            (r = "true" === e.toLowerCase())),
          r && (n = s);
        n = n.map(function (n) {
          var e = v()("text-footer-nav", n.cssClass);
          return l().createElement(
            "li",
            { key: n.name, className: "footer-link" },
            l().createElement(
              m.Link,
              {
                url: c.urlService.getUrlWithLocale(n.path, a.getRobloxLocale()),
                cssClasses: e,
                target: "_blank",
                onClick: function (e) {
                  return (
                    (t = n.name),
                    (e = e),
                    void (
                      f.EventStream &&
                      f.EventStream.SendEventWithTarget(
                        "PageFooter",
                        "click",
                        {
                          destination: "".concat(t),
                          source: "".concat(
                            e.currentTarget.ownerDocument.location.pathname,
                          ),
                        },
                        f.EventStream.TargetTypes.WWW,
                      )
                    )
                  );
                  var t;
                },
              },
              t(n.labelTranslationKey),
              n.postfixIcon
                ? l().createElement("img", {
                    src: n.postfixIcon,
                    alt: "",
                    className: "footer-postfixIcon",
                  })
                : "",
            ),
          );
        });
        return l().createElement(
          "ul",
          { className: "row footer-links" },
          n,
          l().createElement("li", null, l().createElement(T, { translate: t })),
        );
      }
      k.propTypes = {
        translate: u().func.isRequired,
        intl: u().shape({ getRobloxLocale: u().func.isRequired }).isRequired,
      };
      var O = k,
        P = CoreRobloxUtilities,
        y = P.eventStreamService.eventTypes,
        n = "Localization",
        N = {
          changeLanguage: {
            name: "changeLanguage",
            type: y.formInteraction,
            context: n,
            requiredParams: [
              "userId",
              "newSupportedLocaleCode",
              "previousSupportedLocaleCode",
            ],
          },
          changeLanguageModal: {
            name: "changeLanguageModal",
            type: y.formInteraction,
            context: n,
            requiredParams: ["userId", "newSupportedLocaleCode"],
          },
        },
        x = 6e5;
      function D(e) {
        return (D =
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
              })(e);
      }
      function I(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return R(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return R(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return R(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function R(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      function B(t, e) {
        var n,
          a = Object.keys(t);
        return (
          Object.getOwnPropertySymbols &&
            ((n = Object.getOwnPropertySymbols(t)),
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
            a.push.apply(a, n)),
          a
        );
      }
      function M(a) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? B(Object(r), !0).forEach(function (e) {
                var t, n;
                (t = a),
                  (e = r[(n = e)]),
                  n in t
                    ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = e);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r))
              : B(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    a,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return a;
      }
      function j(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function F(e, t) {
        return (F =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function K(n) {
        var a = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var e,
            t = G(n);
          return (
            (e = a
              ? ((e = G(this).constructor), Reflect.construct(t, arguments, e))
              : t.apply(this, arguments)),
            (t = this),
            !(e = e) || ("object" !== D(e) && "function" != typeof e) ? W(t) : e
          );
        };
      }
      function W(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function G(e) {
        return (G = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function q(e) {
        return e.locale && e.locale.nativeName
          ? e.isEnabledForFullExperience
            ? e.locale.nativeName
            : "".concat(e.locale.nativeName, "*")
          : "";
      }
      var z = P.dataStores.localeDataStore;
      ((n = (function () {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && F(e, t);
        })(r, l().Component);
        var e,
          t,
          n,
          a = K(r);
        function r(e) {
          return (
            (function (e) {
              if (!(e instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this),
            ((e = a.call(this, e)).state = {
              supportedLocales: [],
              userLocale: {},
              showUnsupportedModal: !1,
              isUserLocaleUnsupported: !1,
              isLocaleUpdateInProgress: !1,
            }),
            (e.handleNativeLanguageChange = e.handleNativeLanguageChange.bind(
              W(e),
            )),
            (e.hideUnsupportedModal = e.hideUnsupportedModal.bind(W(e))),
            e
          );
        }
        return (
          (e = r),
          (t = [
            {
              key: "componentDidMount",
              value: function () {
                this.loadSupportedLocales();
              },
            },
            {
              key: "handleLanguageChange",
              value: function (e) {
                var t = this,
                  n = M({}, e.locale),
                  a = this.state.userLocale,
                  r = this.props,
                  o = r.isAuthenticatedUser,
                  i = r.onLanguageChange,
                  a = M({}, a);
                o
                  ? (this.setState({ isLocaleUpdateInProgress: !0 }),
                    z
                      .setUserLocale(n.locale)
                      .then(
                        function () {
                          e.isEnabledForFullExperience
                            ? i(n)
                            : (t.showUnsupportedLocaleMessage(),
                              t.showUnsupportedLocaleModal(n));
                        },
                        function (e) {
                          console.debug(e);
                        },
                      )
                      .finally(function () {
                        t.setState({ isLocaleUpdateInProgress: !1 });
                      }))
                  : i(n),
                  this.setUserLocaleByLocaleCode(n.locale),
                  P.eventStreamService.sendEvent(N.changeLanguage, {
                    userId: d.authenticatedUser.id,
                    newSupportedLocaleCode: n.locale,
                    previousSupportedLocaleCode: a.locale.locale,
                  });
              },
            },
            {
              key: "handleNativeLanguageChange",
              value: function (e) {
                var t = this.state.supportedLocales,
                  n = e.target.value,
                  t = t.find(function (e) {
                    return e.locale.locale === n;
                  });
                this.handleLanguageChange(t);
              },
            },
            {
              key: "getDefaultSelector",
              value: function () {
                var t = this,
                  e = this.state,
                  n = e.supportedLocales,
                  a = e.userLocale,
                  e = e.isLocaleUpdateInProgress,
                  n = n.map(function (e) {
                    return l().createElement(
                      m.Dropdown.Item,
                      {
                        key: e.locale.id,
                        onClick: function () {
                          return t.handleLanguageChange(e);
                        },
                      },
                      q(e),
                    );
                  }),
                  a = q(a);
                return l().createElement(
                  m.Dropdown,
                  {
                    currSelectionLabel: a,
                    id: "language-switcher",
                    icon: "icon-globe",
                    disabled: e,
                  },
                  n,
                );
              },
            },
            {
              key: "getNativeSelector",
              value: function () {
                var e = this.state,
                  t = e.supportedLocales,
                  e = e.userLocale,
                  t = t.map(function (e) {
                    return {
                      value: e.locale.locale,
                      key: e.locale.id,
                      label: q(e),
                    };
                  }),
                  e = e.locale && e.locale.locale;
                return (
                  0 < t.length &&
                  l().createElement(m.NativeDropdown, {
                    id: "language-switcher",
                    selectionItems: t,
                    onChange: this.handleNativeLanguageChange,
                    selectedItemvalue: e,
                  })
                );
              },
            },
            {
              key: "setUserLocaleByLocaleCode",
              value: function (e) {
                e = this.findSupportedLocaleByLocaleCode(e);
                this.setState({ userLocale: M({}, e) }),
                  e.isEnabledForFullExperience ||
                    this.showUnsupportedLocaleMessage();
              },
            },
            {
              key: "sortSupportedLocalesByFullExperience",
              value: function (e) {
                if (Array.isArray(e)) {
                  var t = e
                      .filter(function (e) {
                        return e.isEnabledForFullExperience;
                      })
                      .sort(function (e, t) {
                        return e.locale.nativeName > t.locale.nativeName
                          ? 1
                          : -1;
                      }),
                    n = e
                      .filter(function (e) {
                        return !e.isEnabledForFullExperience;
                      })
                      .sort(function (e, t) {
                        return e.locale.nativeName > t.locale.nativeName
                          ? 1
                          : -1;
                      });
                  return [].concat(I(t), I(n));
                }
                return e;
              },
            },
            {
              key: "filterLocalesBySeoSupport",
              value: function (e) {
                return Array.isArray(e)
                  ? e
                      .filter(function (e) {
                        return (
                          e.isEnabledForFullExperience &&
                          2 === e.locale.language.languageCode.length
                        );
                      })
                      .sort(function (e, t) {
                        return e.locale.nativeName > t.locale.nativeName
                          ? 1
                          : -1;
                      })
                  : e;
              },
            },
            {
              key: "findSupportedLocaleByLocaleCode",
              value: function (t) {
                return this.state.supportedLocales.find(function (e) {
                  return e.locale.locale === t;
                });
              },
            },
            {
              key: "loadSupportedLocales",
              value: function () {
                var t = this;
                z.getLocalesWithCache(x).then(
                  function (e) {
                    t.props.hideSeoUnsupportedLocales
                      ? t.setState({
                          supportedLocales: t.filterLocalesBySeoSupport(e.data),
                        })
                      : t.setState({
                          supportedLocales:
                            t.sortSupportedLocalesByFullExperience(e.data),
                        }),
                      t.loadUserLocale();
                  },
                  function (e) {
                    console.debug(e);
                  },
                );
              },
            },
            {
              key: "loadUserLocale",
              value: function () {
                var t,
                  n = this,
                  e = c.urlService.getQueryParam("locale");
                e
                  ? this.setUserLocaleByLocaleCode(e)
                  : ((t = this.props.isAuthenticatedUser),
                    z.getUserLocale().then(
                      function (e) {
                        e = (t ? e.data.ugc : e.data.signupAndLogin).locale;
                        n.setUserLocaleByLocaleCode(e);
                      },
                      function (e) {
                        console.debug(e);
                      },
                    ));
              },
            },
            {
              key: "showUnsupportedLocaleModal",
              value: function (e) {
                this.props.showWarningModalForUnsupportedLocale &&
                  (this.setState({ showUnsupportedModal: !0 }),
                  P.eventStreamService.sendEvent(N.changeLanguageModal, {
                    userId: d.authenticatedUser.id,
                    newSupportedLocaleCode: e.locale,
                  }));
              },
            },
            {
              key: "hideUnsupportedModal",
              value: function () {
                (0, this.props.onLanguageChange)(this.state.userLocale);
              },
            },
            {
              key: "showUnsupportedLocaleMessage",
              value: function () {
                this.props.showWarningMessageForUnsupportedLocale &&
                  this.setState({ isUserLocaleUnsupported: !0 });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.translate,
                  n = e.isNative,
                  a = this.state,
                  r = a.showUnsupportedModal,
                  o = a.isUserLocaleUnsupported,
                  e = a.supportedLocales,
                  a = a.userLocale;
                return l().createElement(
                  l().Fragment,
                  null,
                  0 < e.length && a.locale
                    ? l().createElement(
                        "div",
                        { className: "language-selector-wrapper" },
                        n
                          ? this.getNativeSelector()
                          : this.getDefaultSelector(),
                      )
                    : l().createElement(m.Loading, null),
                  l().createElement(m.SimpleModal, {
                    title: t("Heading.UnsupportedLanguage"),
                    body: t("Description.UnsupportedLanguage"),
                    show: r,
                    neutralButtonText: t("Action.Ok"),
                    onNeutral: this.hideUnsupportedModal,
                  }),
                  o &&
                    l().createElement(
                      "div",
                      { className: "row" },
                      l().createElement(
                        "span",
                        { className: "text text-error" },
                        t("Description.UnsupportedLanguage"),
                      ),
                    ),
                );
              },
            },
          ]) && j(e.prototype, t),
          n && j(e, n),
          r
        );
      })()).defaultProps = {
        onLanguageChange: function () {},
        isAuthenticatedUser: !1,
        isNative: !1,
        showWarningModalForUnsupportedLocale: !0,
        showWarningMessageForUnsupportedLocale: !0,
        hideSeoUnsupportedLocales: !1,
      }),
        (n.propTypes = {
          isAuthenticatedUser: u().bool,
          onLanguageChange: u().func,
          isNative: u().bool,
          showWarningModalForUnsupportedLocale: u().bool,
          showWarningMessageForUnsupportedLocale: u().bool,
          translate: u().func.isRequired,
          hideSeoUnsupportedLocales: u().bool,
        });
      var Z = n;
      function Y(e) {
        var n =
            c.pageName.PageNameProvider &&
            c.pageName.PageNameProvider.isLandingPage(),
          t =
            null === d.authenticatedUser || void 0 === d.authenticatedUser
              ? void 0
              : d.authenticatedUser.isAuthenticated,
          a = f.DeviceMeta && new f.DeviceMeta(),
          r = a && (a.isPhone || a.isTablet),
          o = t || n,
          a = e.translate;
        return l().createElement(
          "div",
          { className: "footer" },
          l().createElement(O, e),
          l().createElement(
            "div",
            { className: "row copyright-container" },
            l().createElement(
              "div",
              { className: "col-sm-6 col-md-3" },
              o &&
                l().createElement(Z, {
                  translate: a,
                  onLanguageChange: function (e) {
                    var t = e.locale,
                      e = e.language;
                    n && t
                      ? ((t = Object.fromEntries(
                          new URLSearchParams(window.location.search),
                        )),
                        (t = { pathname: e.languageCode, query: t }),
                        (window.location.href = c.urlService.formatUrl(t)))
                      : window.location.reload();
                  },
                  isAuthenticatedUser: t,
                  showWarningMessageForUnsupportedLocale: !1,
                  isNative: r,
                  hideSeoUnsupportedLocales: n,
                }),
            ),
            l().createElement(
              "div",
              { className: o ? "col-sm-6 col-md-9" : "col-sm-12" },
              l().createElement(g, e),
            ),
          ),
        );
      }
      Y.propTypes = { translate: u().func.isRequired };
      var H = Y;
      function Q(e) {
        var t = e.translate,
          e = e.intl;
        return l().createElement(H, { translate: t, intl: e });
      }
      Q.propTypes = {
        translate: u().func.isRequired,
        intl: u().shape({ getRobloxLocale: u().func.isRequired }).isRequired,
      };
      var J = (0, p.withTranslations)(Q, e),
        V = function (e, t) {
          f.DeviceMeta &&
            P.hybridService &&
            new f.DeviceMeta().isInApp &&
            P.hybridService.localization &&
            P.hybridService.localization(e, t);
        };
      function X(e) {
        var t = e.translate,
          e =
            null === d.authenticatedUser || void 0 === d.authenticatedUser
              ? void 0
              : d.authenticatedUser.isAuthenticated;
        return l().createElement(Z, {
          onLanguageChange: function (e) {
            var t = e.locale;
            t &&
              V(t, function () {
                console.debug("Language Change Hybrid Event: ".concat(t));
              }),
              window.location.reload();
          },
          translate: t,
          isAuthenticatedUser: e,
          isNative: !0,
        });
      }
      (t().AccountSettingsLanguageSelector = X).propTypes = {
        translate: u().func.isRequired,
      };
      var _ = (0, p.withTranslations)(X, e);
      (0, c.ready)(function () {
        var e = document.getElementById("footer-container");
        e && (0, a.render)(l().createElement(J, null), e);
        var t = document.getElementById(r),
          n = 10;
        (function e() {
          !(t = document.getElementById(r)) && 0 < n
            ? (--n, setTimeout(e, 200))
            : t && (0, a.render)(l().createElement(_, null), t);
        })(),
          -1 < window.location.pathname.toLowerCase().indexOf("/my/account") &&
            (window.onhashchange = function () {
              var e;
              "#!/info" !== window.location.hash ||
                ((e = document.getElementById(r)) &&
                  (0, a.render)(l().createElement(_, null), e));
            });
      });
    })();
})();
//# sourceMappingURL=https://js.rbxcdn.com/b8abec9cc2c919b22c333e0cd20bea0b-footer.bundle.min.js.map

/* Bundle detector */
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("Footer");
