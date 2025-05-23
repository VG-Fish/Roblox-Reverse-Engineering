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
          var l = {}.hasOwnProperty;
          function r() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var o,
                  a = typeof n;
                if ("string" == a || "number" == a) e.push(n);
                else if (Array.isArray(n))
                  !n.length || ((o = r.apply(null, n)) && e.push(o));
                else if ("object" == a)
                  if (
                    n.toString === Object.prototype.toString ||
                    n.toString.toString().includes("[native code]")
                  )
                    for (var i in n) l.call(n, i) && n[i] && e.push(i);
                  else e.push(n.toString());
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((r.default = r), (e.exports = r))
            : void 0 ===
                (n = function () {
                  return r;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
    },
    o = {};
  function j(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    t = o[e] = { exports: {} };
    return n[e](t, t.exports, j), t.exports;
  }
  (j.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return j.d(t, { a: t }), t;
  }),
    (j.d = function (e, t) {
      for (var n in t)
        j.o(t, n) &&
          !j.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (j.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      function s(e) {
        function t(e) {
          R(e, n), o();
        }
        var n = e.nonEssentialCookieList,
          o = e.closeBanner,
          a = e.showConsentTool,
          i = e.translate,
          l = new h.Intl().getRobloxLocale(),
          r = i(A),
          c = r.indexOf(D),
          s = b.urlService.getUrlWithLocale(E.privacyPolicyUrl, l),
          e = C().createElement(
            "span",
            { className: "text" },
            r.substring(0, c),
          ),
          l = D.length,
          l = C().createElement(
            "span",
            { className: "text" },
            r.substring(c + l),
          ),
          s = C().createElement(
            "a",
            {
              className: "text-link",
              target: "_blank",
              href: s,
              rel: "noreferrer",
            },
            i(S),
          );
        return C().createElement(
          C().Fragment,
          null,
          C().createElement(
            "div",
            { className: "cookie-banner" },
            C().createElement(
              "div",
              { className: "cookie-description-content" },
              e,
              s,
              l,
            ),
            C().createElement(
              "div",
              null,
              C().createElement(
                "div",
                { className: "cookie-button-container" },
                C().createElement(
                  P.Button,
                  {
                    className:
                      "see-all-link btn-secondary-md consent-tool-link",
                    onClick: a,
                  },
                  i(B),
                ),
                C().createElement(
                  "div",
                  { className: "cookie-btn-float" },
                  C().createElement(
                    P.Button,
                    {
                      className: "btn-secondary-lg cookie-btn",
                      onClick: function () {
                        return t([""]);
                      },
                    },
                    i(w),
                  ),
                  C().createElement(
                    P.Button,
                    {
                      className: "btn-cta-lg cookie-btn",
                      onClick: function () {
                        return t(n);
                      },
                    },
                    i(L),
                  ),
                ),
              ),
            ),
          ),
          C().createElement("div", {
            className: "cookie-banner-bg",
            onClick: function () {
              return t([""]);
            },
            "aria-hidden": "true",
          }),
        );
      }
      function y(e) {
        var t = e.cookieName,
          e = e.description;
        return C().createElement(
          "div",
          { className: "cookie-item" },
          C().createElement(
            "p",
            { className: "cookie-name font-body text" },
            t,
          ),
          C().createElement(
            "p",
            { className: "cookie-description font-footer" },
            e,
          ),
        );
      }
      function k(e) {
        var t = e.translate,
          n = e.isNonEssentialCookieListVisible,
          o = U()({ hidden: !n }),
          a = H.GACompanyCollectionList.map(function (e) {
            return C().createElement(
              "div",
              { className: "google-analytics-company-info-sec", key: e.label },
              C().createElement(
                "p",
                { className: "font-caption-header text-emphasis" },
                t(e.label),
              ),
              C().createElement(
                "p",
                { className: "font-caption-body text" },
                t(e.content),
              ),
            );
          }),
          i = C().createElement(
            "a",
            {
              className: "text-link",
              target: "_blank",
              href: E.googleAnalyticsReadMore,
              rel: "noreferrer",
            },
            t(H.googleAnalytics),
          ),
          n = (e = t(H.GAReadMore)).indexOf(H.GAReadMoreUrl),
          i = C().createElement(
            "p",
            { className: "font-caption-body text" },
            e.substring(0, n),
            i,
          ),
          a = C().createElement(
            "div",
            null,
            C().createElement(
              P.Link,
              {
                cssClasses: "font-header-2 text-emphasis",
                url: E.googleAnalyticsWebsite,
              },
              t(H.googleAnalytics),
              C().createElement("span", {
                className:
                  "icon-nav-external-link-sm cookie-external-link-icon",
              }),
            ),
            C().createElement(
              "div",
              null,
              C().createElement(
                "span",
                { className: "google-analytics-info-subheader" },
                t(H.ownedBy),
              ),
              C().createElement(
                "span",
                { className: "font-caption-header text-emphasis" },
                H.googleInc,
              ),
            ),
            C().createElement(
              "p",
              { className: "text-emphasis google-analytics-company-info-sec" },
              t(H.googleAnalyticsPurposeHeader),
            ),
            C().createElement(
              "span",
              { className: "font-caption-body text" },
              t(H.googleAnalyticsPurposeDescription),
            ),
            C().createElement(
              "p",
              { className: "text-emphasis google-analytics-company-info-sec" },
              t(H.companyCollectionHeader),
            ),
            a,
            i,
          ),
          i = C().createElement(
            "div",
            { className: "analytics-cookie-list" },
            C().createElement(y, {
              cookieName: H.RBXViralAcquisition.cookieName,
              description: t(H.RBXViralAcquisition.description),
            }),
            C().createElement(y, {
              cookieName: H.RBXSource.cookieName,
              description: t(H.RBXSource.description),
            }),
          );
        return C().createElement("div", { className: o }, i, a);
      }
      function u(e) {
        var t = e.nonEssentialCookieList,
          n = e.essentialCookieList,
          o = e.translate,
          a = e.closeConsentTool,
          i = T(),
          l = (p = (0, v.useState)(i))[0],
          r = p[1],
          c = (d = (0, v.useState)(!1))[0],
          s = d[1],
          u = (g = (0, v.useState)(!1))[0],
          m = g[1];
        (0, v.useEffect)(function () {
          M.open();
        }, []);
        var f = U()({ hidden: !c }),
          e = U()("cookie-consent-tool-collaps", { on: u }),
          i = U()("cookie-consent-tool-collaps font-header-2 text-emphasis ", {
            on: c,
          }),
          p = new h.Intl().getRobloxLocale(),
          d = b.urlService.getUrlWithLocale(E.privacyPolicyUrl, p),
          g = C().createElement(
            "div",
            { className: "cookie-consent-tool-info-link" },
            C().createElement(
              "a",
              {
                className: "text-link",
                target: "_blank",
                href: d,
                rel: "noreferrer",
              },
              o(S),
              C().createElement("span", {
                className:
                  "icon-nav-external-link-sm cookie-external-link-icon",
              }),
            ),
          ),
          p = C().createElement(
            "div",
            { className: "cookie-consent-tool-info-link" },
            C().createElement(
              "a",
              {
                className: "text-link",
                target: "_blank",
                href: E.supportUrl,
                rel: "noreferrer",
              },
              o(H.requestData),
              C().createElement("span", {
                className:
                  "icon-nav-external-link-sm cookie-external-link-icon",
              }),
            ),
          ),
          d = C().createElement(
            "div",
            null,
            C().createElement(
              "div",
              { className: "static-section" },
              C().createElement(
                "div",
                {
                  className:
                    "font-header-2 text-emphasis google-analytics-company-info-sec",
                },
                o(H.infoCollectionHeader),
              ),
              C().createElement(
                "p",
                { className: "font-caption-body text" },
                o(H.infoCollectionContent),
              ),
            ),
            C().createElement(
              "div",
              { className: "static-section" },
              C().createElement(
                "div",
                {
                  className:
                    "font-header-2 text-emphasis google-analytics-company-info-sec",
                },
                o(H.infoCollectionHeader2),
              ),
              C().createElement(
                "p",
                { className: "font-caption-body text" },
                o(H.infoCollectionContent2),
              ),
            ),
            C().createElement(
              "div",
              { className: "static-section" },
              C().createElement(
                "div",
                {
                  className:
                    "font-header-2 text-emphasis google-analytics-company-info-sec",
                },
                o(H.infoPartnerCollectionHeader),
              ),
              C().createElement(
                "p",
                { className: "font-caption-body text" },
                o(H.infoPartnerCollectionContent),
              ),
            ),
          ),
          e = C().createElement(
            "div",
            null,
            C().createElement(
              "button",
              {
                className: e,
                type: "button",
                onClick: function () {
                  return m(!u);
                },
              },
              C().createElement(
                "span",
                { className: "font-header-2 text-emphasis" },
                o("Heading.AnalyticsCookies"),
              ),
            ),
            C().createElement(P.Toggle, {
              className: "cookie-toggle",
              isOn: l,
              onToggle: function () {
                return r(!l);
              },
            }),
          ),
          n = n.map(function (e) {
            return C().createElement(y, {
              key: e.cookieName,
              cookieName: e.cookieName,
              description: o(e.description),
            });
          }),
          g = C().createElement("div", null, p, g),
          n = C().createElement(
            "div",
            { className: "essential-cookie-section" },
            C().createElement(
              "button",
              {
                className: i,
                type: "button",
                onClick: function () {
                  return s(!c);
                },
              },
              o(H.essentialCookie),
            ),
            C().createElement("div", { className: f }, n),
          ),
          e = C().createElement(
            "div",
            { className: "cookie-consent-tool-body" },
            d,
            g,
            n,
            e,
            C().createElement(k, {
              isNonEssentialCookieListVisible: u,
              translate: o,
            }),
          );
        return C().createElement(G, {
          title: o(H.consentToolModalTitle),
          body: e,
          actionButtonShow: !0,
          actionButtonText: o(H.saveBtn),
          neutralButtonText: o(H.cancelBtn),
          onAction: function () {
            R(l ? t : [], t), a(null);
          },
          onNeutral: function () {
            return a(I.banner);
          },
          id: "cookie-consent-tool-modal",
        });
      }
      var b = CoreUtilities,
        v = React,
        C = j.n(v),
        h = Roblox,
        e = j.n(h),
        t = ReactDOM,
        n = "cookie-banner-wrapper",
        m = { banner: "banner", consentTool: "consentTool" },
        o = ReactUtilities,
        a = {
          common: ["CommonUI.Messages", "CommonUI.Controls"],
          feature: "Feature.Tracking",
        },
        i = h.Endpoints.getAbsoluteUrl,
        l = h.EnvironmentUrls.universalAppConfigurationApi,
        E = {
          privacyPolicyUrl: i("/info/privacy"),
          getCookiePolicyConfig: {
            withCredentials: !0,
            url: l + "/v1/behaviors/cookie-policy/content",
          },
          googleAnalyticsWebsite:
            "https://marketingplatform.google.com/about/analytics/",
          supportUrl: i("/support"),
          googleAnalyticsReadMore:
            "https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage",
        },
        r = function (e, l, r, c) {
          return new (r = r || Promise)(function (n, t) {
            function o(e) {
              try {
                i(c.next(e));
              } catch (e) {
                t(e);
              }
            }
            function a(e) {
              try {
                i(c.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function i(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value) instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })
                  ).then(o, a);
            }
            i((c = c.apply(e, l || [])).next());
          });
        },
        c = function (n, o) {
          var a,
            i,
            l,
            r = {
              label: 0,
              sent: function () {
                if (1 & l[0]) throw l[1];
                return l[1];
              },
              trys: [],
              ops: [],
            },
            e = { next: t(0), throw: t(1), return: t(2) };
          return (
            "function" == typeof Symbol &&
              (e[Symbol.iterator] = function () {
                return this;
              }),
            e
          );
          function t(t) {
            return function (e) {
              return (function (t) {
                if (a) throw new TypeError("Generator is already executing.");
                for (; r; )
                  try {
                    if (
                      ((a = 1),
                      i &&
                        (l =
                          2 & t[0]
                            ? i.return
                            : t[0]
                              ? i.throw || ((l = i.return) && l.call(i), 0)
                              : i.next) &&
                        !(l = l.call(i, t[1])).done)
                    )
                      return l;
                    switch (((i = 0), l && (t = [2 & t[0], l.value]), t[0])) {
                      case 0:
                      case 1:
                        l = t;
                        break;
                      case 4:
                        return r.label++, { value: t[1], done: !1 };
                      case 5:
                        r.label++, (i = t[1]), (t = [0]);
                        continue;
                      case 7:
                        (t = r.ops.pop()), r.trys.pop();
                        continue;
                      default:
                        if (
                          !(l = 0 < (l = r.trys).length && l[l.length - 1]) &&
                          (6 === t[0] || 2 === t[0])
                        ) {
                          r = 0;
                          continue;
                        }
                        if (
                          3 === t[0] &&
                          (!l || (t[1] > l[0] && t[1] < l[3]))
                        ) {
                          r.label = t[1];
                          break;
                        }
                        if (6 === t[0] && r.label < l[1]) {
                          (r.label = l[1]), (l = t);
                          break;
                        }
                        if (l && r.label < l[2]) {
                          (r.label = l[2]), r.ops.push(t);
                          break;
                        }
                        l[2] && r.ops.pop(), r.trys.pop();
                        continue;
                    }
                    t = o.call(n, r);
                  } catch (e) {
                    (t = [6, e]), (i = 0);
                  } finally {
                    a = l = 0;
                  }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
              })([t, e]);
            };
          }
        },
        f = function () {
          return r(void 0, void 0, Promise, function () {
            var t;
            return c(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (t = E.getCookiePolicyConfig), [4, b.httpService.get(t)]
                  );
                case 1:
                  return void 0 !== (t = e.sent())
                    ? [2, t.data]
                    : [
                        2,
                        {
                          ShouldDisplayCookieBannerV3: !1,
                          NonEssentialCookieList: [],
                          EssentialCookieList: [],
                        },
                      ];
              }
            });
          });
        },
        p = function (e) {
          for (
            var t = e + "=",
              n = decodeURIComponent(document.cookie).split(";"),
              o = 0;
            o < n.length;
            o++
          ) {
            for (var a = n[o]; " " === a.charAt(0); ) a = a.substring(1);
            if (0 === a.indexOf(t)) return a.substring(t.length, a.length);
          }
          return "";
        },
        d = function (e, t, n) {
          var o = new Date();
          o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
          o = "expires=" + o.toUTCString();
          document.cookie = e + "=" + t + ";" + o;
        },
        g = function (e) {
          document.cookie =
            e + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        },
        N = "RBXcb",
        x = 180,
        A = "Description.CookieBannerContent",
        w = "Action.DeclineAll",
        L = "Action.AcceptAll",
        S = "Description.PrivacyPolicy",
        D = "{privacyPolicyLink}",
        B = "Action.SetCookieOptions",
        R = function (n, o) {
          var e = p(N);
          e && 0 < e.length && g(N);
          var a = "";
          o.forEach(function (e, t) {
            -1 !== n.indexOf(e) ? (a += e + "=true&") : (a += e + "=false&"),
              t === o.length - 1 && (a = a.slice(0, -1));
          }),
            d(N, a, x);
        },
        T = function () {
          var e = p(N);
          return (
            !(!e || "" === e) &&
            !!e.split("&").find(function (e) {
              return "true" === e.split("=")[1];
            })
          );
        },
        P = ReactStyleGuide,
        i = j(870),
        U = j.n(i),
        H = {
          consentToolModalTitle: "Heading.CookieSettings",
          saveBtn: "Action.SavePreferences",
          cancelBtn: "Action.Cancel",
          infoCollectionHeader: "Heading.InformationCollection",
          infoCollectionContent: "Description.InformationCollection",
          infoCollectionHeader2: "Heading.InformationCollection2",
          infoCollectionContent2: "Description.InformationCollection2",
          infoPartnerCollectionHeader: "Heading.InformationPartnerCollection",
          infoPartnerCollectionContent:
            "Description.InformationPartnerCollection",
          RBXViralAcquisition: {
            cookieName: "RBXViralAcquisition",
            description: "Description.RBXViralAcquisition",
          },
          RBXSource: {
            cookieName: "RBXSource",
            description: "Description.RBXSource",
          },
          googleAnalytics: "Heading.GoogleAnalytics",
          ownedBy: "Label.OwnedBy",
          googleInc: "Google Inc.",
          website: "Label.Website",
          googleAnalyticsPurposeHeader: "Heading.GoogleAnalyticsPurpose",
          googleAnalyticsPurposeDescription:
            "Description.GoogleAnalyticsPurpose",
          companyCollectionHeader: "Heading.CompanyCollection",
          GACompanyCollectionList: [
            {
              label: "Label.DataCollected",
              content: "Description.DataCollected",
            },
            { label: "Label.DataSharing", content: "Description.DataSharing" },
            {
              label: "Label.DataRetention",
              content: "Description.DataRetention",
            },
            { label: "Label.DataUse", content: "Description.DataUse" },
            { label: "Label.DataStorage", content: "Description.Undisclosed" },
          ],
          requestData: "Action.RequestData",
          essentialCookie: "Heading.EssentialCookies",
          analyticsCookie: "Heading.AnalyticsCookies",
          GAReadMore: "Description.GAReadMore",
          GAReadMoreUrl: "{googleAnalyticsLink}",
        },
        I = m,
        G = (i = (0, P.createModal)())[0],
        M = i[1],
        O = function (e, l, r, c) {
          return new (r = r || Promise)(function (n, t) {
            function o(e) {
              try {
                i(c.next(e));
              } catch (e) {
                t(e);
              }
            }
            function a(e) {
              try {
                i(c.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function i(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value) instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })
                  ).then(o, a);
            }
            i((c = c.apply(e, l || [])).next());
          });
        },
        X = function (n, o) {
          var a,
            i,
            l,
            r = {
              label: 0,
              sent: function () {
                if (1 & l[0]) throw l[1];
                return l[1];
              },
              trys: [],
              ops: [],
            },
            e = { next: t(0), throw: t(1), return: t(2) };
          return (
            "function" == typeof Symbol &&
              (e[Symbol.iterator] = function () {
                return this;
              }),
            e
          );
          function t(t) {
            return function (e) {
              return (function (t) {
                if (a) throw new TypeError("Generator is already executing.");
                for (; r; )
                  try {
                    if (
                      ((a = 1),
                      i &&
                        (l =
                          2 & t[0]
                            ? i.return
                            : t[0]
                              ? i.throw || ((l = i.return) && l.call(i), 0)
                              : i.next) &&
                        !(l = l.call(i, t[1])).done)
                    )
                      return l;
                    switch (((i = 0), l && (t = [2 & t[0], l.value]), t[0])) {
                      case 0:
                      case 1:
                        l = t;
                        break;
                      case 4:
                        return r.label++, { value: t[1], done: !1 };
                      case 5:
                        r.label++, (i = t[1]), (t = [0]);
                        continue;
                      case 7:
                        (t = r.ops.pop()), r.trys.pop();
                        continue;
                      default:
                        if (
                          !(l = 0 < (l = r.trys).length && l[l.length - 1]) &&
                          (6 === t[0] || 2 === t[0])
                        ) {
                          r = 0;
                          continue;
                        }
                        if (
                          3 === t[0] &&
                          (!l || (t[1] > l[0] && t[1] < l[3]))
                        ) {
                          r.label = t[1];
                          break;
                        }
                        if (6 === t[0] && r.label < l[1]) {
                          (r.label = l[1]), (l = t);
                          break;
                        }
                        if (l && r.label < l[2]) {
                          (r.label = l[2]), r.ops.push(t);
                          break;
                        }
                        l[2] && r.ops.pop(), r.trys.pop();
                        continue;
                    }
                    t = o.call(n, r);
                  } catch (e) {
                    (t = [6, e]), (i = 0);
                  } finally {
                    a = l = 0;
                  }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
              })([t, e]);
            };
          }
        },
        V = (0, o.withTranslations)(function (e) {
          var t = e.translate,
            n = (0, v.useState)([]),
            o = n[0],
            a = n[1],
            e = (0, v.useState)([]),
            i = e[0],
            l = e[1],
            n = (0, v.useState)(null),
            e = n[0],
            r = n[1],
            c = m;
          switch (
            ((0, v.useEffect)(function () {
              var e = p(N);
              (e && "" !== e) ||
                O(void 0, void 0, void 0, function () {
                  var t;
                  return X(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, f()];
                      case 1:
                        return (
                          (t = e.sent()).ShouldDisplayCookieBannerV3 &&
                          t.EssentialCookieList
                            ? (a(t.NonEssentialCookieList),
                              l(t.EssentialCookieList),
                              r(c.banner))
                            : R(
                                t.NonEssentialCookieList,
                                t.NonEssentialCookieList,
                              ),
                          [2]
                        );
                    }
                  });
                });
            }, []),
            e)
          ) {
            case c.banner:
              return C().createElement(s, {
                translate: t,
                nonEssentialCookieList: o,
                closeBanner: function () {
                  return r(null);
                },
                showConsentTool: function () {
                  return r(c.consentTool);
                },
              });
            case c.consentTool:
              return C().createElement(u, {
                translate: t,
                essentialCookieList: i,
                nonEssentialCookieList: o,
                closeConsentTool: r,
              });
            default:
              return C().createElement("div", null);
          }
        }, a),
        a = function (e) {
          var t = e.nonEssentialCookieList,
            n = e.essentialCookieList,
            o = e.translate,
            a = e.onCloseConsentTool,
            i = (0, v.useState)(!1),
            e = i[0],
            l = i[1],
            r = {
              open: function () {
                return l(!0);
              },
              close: function () {
                return l(!1);
              },
            };
          return [
            e
              ? C().createElement(u, {
                  translate: o,
                  essentialCookieList: n,
                  nonEssentialCookieList: t,
                  closeConsentTool: function (e) {
                    r.close(), null != a && a(e);
                  },
                })
              : C().createElement("div", null),
            r,
          ];
        },
        q = document.getElementById(n);
      (e().Cookies.useConsentTool = a),
        (0, b.ready)(function () {
          q && (0, t.render)(C().createElement(V, null), q);
        });
    })();
})();
//# sourceMappingURL=https://js.rbxcdn.com/b4afffc9cff786bcd28f2d96c714af89-cookieBannerV3.bundle.min.js.map

/* Bundle detector */
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("CookieBannerV3");
