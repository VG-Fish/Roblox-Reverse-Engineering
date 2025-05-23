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
          function c() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var r,
                  a = typeof n;
                if ("string" == a || "number" == a) e.push(n);
                else if (Array.isArray(n))
                  !n.length || ((r = c.apply(null, n)) && e.push(r));
                else if ("object" == a)
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
            ? ((c.default = c), (e.exports = c))
            : void 0 ===
                (n = function () {
                  return c;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      74: function (e) {
        e.exports =
          'module.exports = __webpack_public_path__ + "../html/navigation.html";';
      },
      371: function (e) {
        e.exports =
          "https://images.rbxcdn.com/71975c43056b748bbfd281482146bf11-Thumbnail_AR.png";
      },
      692: function (e) {
        e.exports =
          "https://images.rbxcdn.com/fbbf5f9570aef401b5dcaf4abddfcefe-Thumbnail_CHS.png";
      },
      851: function (e) {
        e.exports =
          "https://images.rbxcdn.com/ddd9004a44b57fedbb64d7597b4ea73f-Thumbnail_EN.png";
      },
      141: function (e) {
        e.exports =
          "https://images.rbxcdn.com/06c814c14910d4d77d8e3c943252af16-Thumbnail_ESMX.png";
      },
      124: function (e) {
        e.exports =
          "https://images.rbxcdn.com/51ccf919e916d4336585a0ae1cd58676-Thumbnail_JP.png";
      },
      248: function (e) {
        e.exports =
          "https://images.rbxcdn.com/df9a0778547b82ac41a36de78f4fd413-Thumbnail_KO.png";
      },
      458: function (e) {
        e.exports =
          "https://images.rbxcdn.com/d130f851bd9658b8c4700bdf28b9325f-Thumbnail_PL.png";
      },
      242: function (e) {
        e.exports =
          "https://images.rbxcdn.com/87803d524f6da870469a32f77af15ce0-Thumbnail_PTBR.png";
      },
      160: function (e) {
        e.exports =
          "https://images.rbxcdn.com/658e1bad3342927f72cb901b6c796d8a-Thumbnail_TR.png";
      },
      550: function (e) {
        e.exports =
          "https://images.rbxcdn.com/5e2135c08cbb83ba22bc5b65e94d9475-Thumbnail_VN.png";
      },
    },
    r = {};
  function jo(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    t = r[e] = { exports: {} };
    return n[e](t, t.exports, jo), t.exports;
  }
  (jo.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return jo.d(t, { a: t }), t;
  }),
    (jo.d = function (e, t) {
      for (var n in t)
        jo.o(t, n) &&
          !jo.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (jo.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      var B = React,
        q = jo.n(B),
        F = CoreUtilities,
        e = ReactDOM,
        G = Roblox,
        t = jo.n(G),
        L = HeaderScripts,
        V = ReactUtilities,
        K = { arrowUp: 38, arrowDown: 40, tab: 9, enter: 13 },
        n = "container-main",
        r = { name: "Roblox.Logout" },
        a = 1,
        o = {
          clickMerchandise: "clickMerchandiseInLeftNav",
          goToAmazonStore: "clickContinueToAmazonStore",
        },
        i = {
          friendshipNotifications: "FriendshipNotifications",
          requestCountChanged: "Roblox.Friends.CountChanged",
          friendshipCreated: "FriendshipCreated",
          friendshipDestroyed: "FriendshipDestroyed",
          friendshipDeclined: "FriendshipDeclined",
          friendshipRequested: "FriendshipRequested",
        },
        c = { name: "Roblox.Messages.CountChanged" },
        y = "?",
        j = "Response.InternalServerErrorDescription",
        u = { name: "headerMenuIconClick" },
        l = {
          quickLogin: "quickLogin",
          logout: "logout",
          settings: "settings",
          switchAccountKey: "switchAccountKey",
        },
        S = { robuxTruncateThreshold: 1e4, creditTruncateThreshold: 1e4 },
        D = {
          control: "control",
          hideCreditAndRobux: "hideCreditAndRobux",
          showCreditAndRobux: "showCreditAndRobux",
        },
        _ = {
          accountSwitchedFlag: "RBXASAccountSwitched",
          accountSwitchedMessage:
            "Description.AccountSwitchedConfirmationBannerText",
        },
        s = {
          common: [
            "CommonUI.Features",
            "CommonUI.Messages",
            "Common.AlertsAndOptions",
          ],
          feature: "Feature.ShopDialog",
        },
        d = PropTypes,
        f = jo.n(d),
        m = jo(870),
        O = jo.n(m),
        A = ReactStyleGuide,
        p = RobloxThumbnails,
        v = RobloxBadges,
        b = function (e, t) {
          for (var n = 0, r = t.length, a = e.length; n < r; n++, a++)
            e[a] = t[n];
          return e;
        },
        g = G.Endpoints.getAbsoluteUrl,
        h = G.EnvironmentUrls.authApi,
        E = {
          url: g("/discover/?Keyword="),
          label: "Label.Experience",
          pageSort: ["home", "games", "discover"],
          icon: "icon-menu-games-off",
        },
        w = {
          url: g("/catalog?CatalogContext=1&Keyword="),
          label: "Heading.Marketplace",
          pageSort: ["catalog", "inventory", "bundles", "my/avatar", "trades"],
          icon: "icon-menu-shop",
        },
        C = [
          {
            url: g("/search/users?keyword="),
            label: "Label.Players",
            pageSort: ["users"],
            icon: "icon-menu-profile",
          },
          w,
          {
            url: g("/search/communities?keyword="),
            label: "Label.sGroups",
            pageSort: ["groups"],
            icon: "icon-menu-groups",
          },
          {
            url: g("/develop/library?CatalogContext=2&Category=6&Keyword="),
            label: "Label.CreatorStore",
            pageSort: ["develop"],
            icon: "icon-menu-library",
          },
        ],
        W = {
          creatorStoreUrl:
            "https://create." +
            G.EnvironmentUrls.domain +
            "/store/models?keyword=",
          scrollListItems: {
            home: {
              url: g("/home"),
              idSelector: "nav-home",
              iconClass: "icon-nav-home",
              name: "home",
              labelTranslationKey: "Label.sHome",
            },
            profile: {
              url: g("/users/" + L.authenticatedUser.id + "/profile"),
              idSelector: "nav-profile",
              iconClass: "icon-nav-profile",
              name: "profile",
              labelTranslationKey: "Label.sProfile",
            },
            messages: {
              url: g("/my/messages/#!/inbox"),
              urlForNotification: g("/my/messages/#!/inbox"),
              idSelector: "nav-message",
              iconClass: "icon-nav-message",
              name: "messages",
              labelTranslationKey: "Label.sMessages",
            },
            friends: {
              url: g("/users/friends"),
              urlForNotification: g("/users/friends#!/friend-requests"),
              idSelector: "nav-friends",
              iconClass: "icon-nav-friends",
              name: "friends",
              labelTranslationKey: "Label.sFriends",
            },
            avatar: {
              url: g("/my/avatar"),
              idSelector: "nav-character",
              iconClass: "icon-nav-charactercustomizer",
              name: "avatar",
              labelTranslationKey: "Label.sAvatar",
            },
            inventory: {
              url: g("/users/" + L.authenticatedUser.id + "/inventory"),
              idSelector: "nav-inventory",
              iconClass: "icon-nav-inventory",
              name: "inventory",
              labelTranslationKey: "Label.sInventory",
            },
            trade: {
              url: g("/trades"),
              urlForNotification: g("/trades"),
              idSelector: "nav-trade",
              iconClass: "icon-nav-trade",
              name: "trade",
              labelTranslationKey: "Label.sTrade",
            },
            groups: {
              url: g("/my/communities"),
              idSelector: "nav-group",
              iconClass: "icon-nav-group",
              name: "groups",
              labelTranslationKey: "Label.sGroups",
            },
            blog: {
              url: g("https://blog.roblox.com"),
              idSelector: "nav-blog",
              iconClass: "icon-nav-blog",
              name: "blog",
              labelTranslationKey: "Label.sBlog",
              blankTarget: !0,
            },
            shop: {
              isModal: !0,
              idSelector: "nav-shop",
              iconClass: "icon-nav-shop",
              name: "shop",
              labelTranslationKey: "Label.OfficialStore",
            },
            giftcards: {
              url: g("/giftcards-us"),
              idSelector: "nav-giftcards",
              iconClass: "icon-nav-giftcards",
              name: "giftcards",
              labelTranslationKey: "Label.GiftCards",
            },
          },
          upgradeButton: {
            url: g("/premium/membership?ctx=leftnav"),
            labelTranslationKey: L.authenticatedUser.isPremiumUser
              ? "ActionsPremium"
              : "ActionsGetPremium",
          },
          sponsorEvents: {
            label: { labelTranslationKey: "Label.sEvents" },
            events: {},
          },
          gameSearchLink: E,
          avatarSearchLink: w,
          miscSearchLink: C,
          universalSearchUrls: [
            {
              url: g("/search/users?keyword="),
              label: "Label.Players",
              pageSort: [],
            },
            {
              url: g("/discover/?Keyword="),
              label: "Label.Experience",
              pageSort: ["home", "games", "discover"],
            },
            {
              url: g("/catalog?CatalogContext=1&Keyword="),
              label: "Label.sCatalog",
              pageSort: ["catalog", "inventory", "bundles"],
            },
            {
              url: g("/search/communities?keyword="),
              label: "Label.sGroups",
              pageSort: ["groups"],
            },
            {
              url: g("/develop/library?CatalogContext=2&Category=6&Keyword="),
              label: "Label.CreatorStore",
              pageSort: ["develop"],
            },
          ],
          newUniversalSearchUrls: b([E], C),
          settingsUrl: {
            settings: { url: g("/my/account"), label: "Label.sSettings" },
            quickLogin: { url: g("/home"), label: "Label.sQuickLogin" },
            safetySupport: {
              url: g("/help-safety"),
              label: "Label.HelpAndSafety",
            },
            switchAccountKey: {
              url: g("/home"),
              label: "Label.sSwitchAccount",
            },
            logout: { url: h + "/v2/logout", label: "Label.sLogout" },
          },
          buyRobuxUrl: {
            myTransactions: { url: g("/transactions"), label: "Label.MyMoney" },
            buyRobux: {
              url: g("/upgrades/robux?ctx=navpopover"),
              label: "Label.sBuyRobux",
              name: "Label.sRobux",
            },
            buyRobuxOnVng: {
              url: G.EnvironmentUrls.vngGamesShopUrl,
              label: "Label.sBuyRobux",
              cacheKey: "isEligibleForVng",
            },
          },
          userDataUrl: g("/navigation/userData"),
          quickLoginUrl: g("/crossdevicelogin/ConfirmCode"),
          redeemUrl: { url: g("/redeem"), label: "Heading.RedeemRobloxCodes" },
          buyGiftCardUrl: {
            url: "https://roblox.cashstar.com/gift-card/buy/?ref=1023buygc",
            label: "Label.sBuyGiftCard",
            cacheKey: "giftCardExp",
          },
        },
        x = G.Endpoints.getAbsoluteUrl,
        N = G.EnvironmentUrls.authApi,
        T =
          (G.EnvironmentUrls.accountSettingsApi,
          G.EnvironmentUrls.websiteUrl,
          G.EnvironmentUrls.adsApi,
          G.EnvironmentUrls.economyApi),
        R = G.EnvironmentUrls.privateMessagesApi,
        I = G.EnvironmentUrls.tradesApi,
        U = G.EnvironmentUrls.friendsApi,
        k = G.EnvironmentUrls.apiGatewayUrl,
        P = G.EnvironmentUrls.universalAppConfigurationApi,
        M = function () {
          return x("/account/signupredir");
        },
        H = function () {
          return x("/home");
        },
        Q = function (e, t) {
          return x("/".concat(e.toLowerCase(), "/").concat(t));
        },
        z = function () {
          return x("/login");
        },
        X = function () {
          return x("/newLogin");
        },
        $ = function () {
          return x("/CreateAccount");
        },
        Y = function () {
          return "".concat(P, "/v1/behaviors/intl-auth-compliance/content");
        },
        J = function () {
          return "".concat(N, "/v2/logout");
        },
        Z = function () {
          return "".concat(R, "/v1/messages/unread/count");
        },
        ee = function (e) {
          return "".concat(T, "/v1/users/").concat(e, "/currency");
        },
        te = function () {
          return "".concat(
            k,
            "/universal-app-configuration/v1/behaviors/navigation-header-ui/content",
          );
        },
        ne = function () {
          return "".concat(I, "/v1/trades/inbound/count");
        },
        re = function () {
          return "".concat(U, "/v1/user/friend-requests/count");
        },
        ae = function () {
          return "".concat(
            k,
            "/credit-balance/v1/get-credit-balance-for-navigation",
          );
        },
        oe = function () {
          return "".concat(k, "/credit-balance/v1/get-conversion-metadata");
        },
        ie = function () {
          return "".concat(k, "/credit-balance/v1/get-gift-card-visibility");
        },
        ce = function () {
          return "".concat(k, "/vng-payments/v1/getVngShopUrl");
        },
        ue = function () {
          return "".concat(k, "/robuxbadge/v1/robuxbadge");
        },
        le = function () {
          var e = { url: Z(), withCredentials: !0 };
          return F.httpService.get(e);
        },
        se = function (e) {
          e = { url: ee(e), withCredentials: !0 };
          return F.httpService.get(e);
        },
        de = function () {
          var e = { url: te(), withCredentials: !0 };
          return F.httpService.get(e);
        },
        fe = function () {
          var e = { url: ne(), withCredentials: !0 };
          return F.httpService.get(e);
        },
        me = function () {
          var e = { url: re(), withCredentials: !0 };
          return F.httpService.get(e);
        },
        pe = function () {
          var e = { url: J(), withCredentials: !0 };
          return F.httpService.post(e);
        },
        ve = function () {
          var e = { url: ae(), withCredentials: !0 };
          return F.httpService.get(e);
        },
        be = function () {
          var e = { url: oe(), withCredentials: !0 };
          return F.httpService.get(e);
        },
        ge = function () {
          var e = { url: ie(), withCredentials: !0 };
          return F.httpService.get(e);
        },
        he = function () {
          var e = { url: ce(), withCredentials: !0 };
          return F.httpService.get(e);
        },
        ye = function () {
          var e = { url: ue(), withCredentials: !0 };
          return F.httpService.get(e);
        },
        Se = CoreRobloxUtilities;
      function Ee(e, t, n) {
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
      var we = Se.dataStores.userDataStore.maxFriendRequestNotificationCount,
        Ce = Se.dataStores.userDataStore.maxMessagesNotificationCount;
      function xe(e) {
        var t = e.translate,
          n = e.idSelector,
          r = e.isModal,
          a = e.name,
          o = e.iconClass,
          i = e.labelTranslationKey,
          c = e.url,
          u = e.urlForNotification,
          l = e.onClickShopLink,
          s = e.friendsData,
          d = e.messagesData,
          f = e.tradeData,
          m = e.blankTarget,
          e = (Ee((e = {}), W.scrollListItems.friends.name, s),
          Ee(e, W.scrollListItems.messages.name, d),
          Ee(e, W.scrollListItems.trade.name, f),
          e)[a],
          c = null != e && e.count ? u : c,
          m = m ? "_blank" : "_self";
        return r
          ? q().createElement(
              "li",
              { key: a },
              q().createElement(
                "button",
                {
                  id: n,
                  type: "button",
                  onClick: l,
                  className: "dynamic-overflow-container text-nav",
                },
                q().createElement(
                  "div",
                  null,
                  q().createElement("span", { className: o }),
                ),
                q().createElement(
                  "span",
                  {
                    className: "font-header-2 dynamic-ellipsis-item",
                    title: t(i),
                  },
                  t(i),
                ),
              ),
            )
          : q().createElement(
              "li",
              { key: a },
              q().createElement(
                A.Link,
                {
                  url: c,
                  id: n,
                  className: "dynamic-overflow-container text-nav",
                  target: m,
                },
                q().createElement(
                  "div",
                  null,
                  q().createElement("span", { className: o }),
                ),
                q().createElement(
                  "span",
                  {
                    className: "font-header-2 dynamic-ellipsis-item",
                    title: t(i),
                  },
                  t(i),
                ),
                e &&
                  0 < e.count &&
                  q().createElement(
                    "div",
                    { className: "dynamic-width-item align-right" },
                    q().createElement(
                      "span",
                      {
                        className: "notification-blue notification",
                        title: F.numberFormat.getNumberFormat(e.count),
                      },
                      (function (e, t) {
                        if (e === W.scrollListItems.friends.name && we <= t)
                          return "".concat(we, "+");
                        if (e === W.scrollListItems.messages.name && Ce <= t)
                          return "".concat(Ce, "+");
                        return F.abbreviateNumber.getTruncValue(t, 1e3);
                      })(a, e.count),
                    ),
                  ),
              ),
            );
      }
      (xe.defaultProps = {
        idSelector: "",
        url: "",
        urlForNotification: "",
        isModal: !1,
        blankTarget: !1,
        friendsData: { count: 0 },
        messagesData: { count: 0 },
        tradeData: { count: 0 },
      }),
        (xe.propTypes = {
          idSelector: f().string,
          translate: f().func.isRequired,
          isModal: f().bool,
          name: f().string.isRequired,
          iconClass: f().string.isRequired,
          labelTranslationKey: f().string.isRequired,
          url: f().string,
          urlForNotification: f().string,
          onClickShopLink: f().func.isRequired,
          blankTarget: f().bool,
          friendsData: f().shape({ count: f().number }),
          messagesData: f().shape({ count: f().number }),
          tradeData: f().shape({ count: f().number }),
        });
      var Ae = xe;
      function Ne(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          Oe(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Te(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Re(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          Oe(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Oe(e, t) {
        if (e) {
          if ("string" == typeof e) return Re(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Re(e, t)
                : void 0
          );
        }
      }
      function Re(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ie() {
        return document.getElementById("navigation-container");
      }
      (d = Se.eventStreamService.eventTypes).pageLoad,
        f().func.isRequired,
        f().instanceOf(Array);
      var Ue = W.universalSearchUrls,
        ke = W.newUniversalSearchUrls,
        Pe = W.avatarSearchLink,
        Le = !L.authenticatedUser.isAuthenticated,
        m = function () {
          return Promise.resolve(0);
        },
        je = function (e) {
          G.EventStream &&
            G.EventStream.SendEventWithTarget(
              e,
              "click",
              {},
              G.EventStream.TargetTypes.WWW,
            );
        },
        De = function (e) {
          if (Le || !G.RealTime) return function () {};
          document.addEventListener(i.requestCountChanged, e);
          var t = G.RealTime.Factory.GetClient();
          return (
            t.Subscribe(i.friendshipNotifications, e),
            function () {
              document.removeEventListener(i.requestCountChanged, e),
                t.Unsubscribe(i.friendshipNotifications, e);
            }
          );
        },
        _e = function (e) {
          return Le || !G.RealTime
            ? function () {}
            : (document.addEventListener(c, e),
              function () {
                document.removeEventListener(c, e);
              });
        },
        Me = function () {
          var e;
          return (
            null !==
              (e =
                (null === (e = window) || void 0 === e
                  ? void 0
                  : e.innerWidth) < 543) && e
          );
        },
        Be = function () {
          var e = Te(Ue);
          return (
            e.sort(function (e) {
              return e.pageSort.reduce(function (e, t) {
                return e || -1 < window.location.href.indexOf(t);
              }, !1)
                ? -1
                : 1;
            }),
            e
          );
        },
        qe = function () {
          var e = Te(ke),
            t = e.filter(function (e) {
              return e.pageSort.some(function (e) {
                return -1 < window.location.pathname.indexOf(e);
              });
            }),
            e = e.filter(function (e) {
              return e.pageSort.every(function (e) {
                return -1 === window.location.pathname.indexOf(e);
              });
            });
          return [].concat(Te(t), Te(e));
        },
        Fe = function () {
          return Pe.pageSort.some(function (e) {
            return -1 < window.location.pathname.indexOf(e);
          });
        },
        Ge = function () {
          return (
            document.getElementById("navigation-container") &&
            document.getElementById("navigation-container").className
          );
        },
        Ve = function (e) {
          var n = {};
          return (
            ("?" === e[0] ? e.substr(1) : e).split("&").forEach(function (e) {
              var t;
              e.includes("=") &&
                ((e = (t = Ne(e.split("="), 2))[0]),
                (t = t[1]),
                (n[
                  null === (e = decodeURIComponent(e)) || void 0 === e
                    ? void 0
                    : e.toLowerCase()
                ] = decodeURIComponent(t)));
            }),
            n
          );
        },
        w = G.EnvironmentUrls.apiGatewayUrl,
        b = G.EnvironmentUrls.apiGatewayCdnUrl,
        Ke =
          (G.EnvironmentUrls.localeApi,
          {
            debounceTimeout: 100,
            debouncedSearchInputMaxLength: 35,
            expiryTimeout: 5e3,
            variationId: 1,
            trendingVariationId: 0,
            avatarAutocompleteQueryPaddingAmount: 10,
            requestSuggestionUrl: {
              url: w + "/games-autocomplete/v1/request-suggestion",
              withCredentials: !0,
            },
            getSuggestionUrl: {
              url: w + "/games-autocomplete/v1/get-suggestion/",
              withCredentials: !0,
            },
            avatarRequestSuggestionUrl: {
              url: w + "/autocomplete-avatar/v2/suggest",
              withCredentials: !0,
            },
            avatarRequestSuggestionCdnUrl: {
              url: b + "/autocomplete-avatar/v2/suggest",
              withCredentials: !0,
            },
            englishLanguageCode: "en",
            avatarAutocompleteUrlLocations: [
              "Catalog",
              "Trades",
              "Inventory",
              "Avatar",
              "CatalogItem",
            ],
            avatarAutocompleteSuggestionLimit: 5,
            isSpecialTreatmentAutocompleteRestricted: function () {
              return (
                7 ===
                  parseInt(Ie().dataset.numberOfAutocompleteSuggestions, 10) &&
                W.miscSearchLink
                  .reduce(function (e, t) {
                    return e.push.apply(e, t.pageSort), e;
                  }, [])
                  .reduce(function (e, t) {
                    return e || -1 < window.location.pathname.indexOf(t);
                  }, !1)
              );
            },
            isSpecialTreatment: function () {
              var e;
              return (
                7 ===
                parseInt(
                  null === (e = Ie()) || void 0 === e
                    ? void 0
                    : e.dataset.numberOfAutocompleteSuggestions,
                  10,
                )
              );
            },
            numberOfSpecialTreatmentAutocompleteSuggestions: 3,
            isAutocompleteSuggestionsIXPTestEnabled: function () {
              var e;
              return (
                0 <
                parseInt(
                  null === (e = Ie()) || void 0 === e
                    ? void 0
                    : e.dataset.numberOfAutocompleteSuggestions,
                  10,
                )
              );
            },
            numberOfAutocompleteSuggestions: function () {
              var e;
              return (
                parseInt(
                  null === (e = Ie()) || void 0 === e
                    ? void 0
                    : e.dataset.numberOfAutocompleteSuggestions,
                  10,
                ) || 0
              );
            },
          }),
        E = jo(550),
        C = jo.n(E),
        h = jo(160),
        g = jo.n(h),
        Q = jo(242),
        d = jo.n(Q),
        a = jo(458),
        w = jo.n(a),
        b = jo(248),
        E = jo.n(b),
        h = jo(124),
        Q = jo.n(h),
        a = jo(141),
        b = jo.n(a),
        h = jo(851),
        We = jo.n(h),
        a = jo(692),
        h = jo.n(a),
        a = jo(371),
        a = jo.n(a),
        He = {
          vi_vn: C(),
          tr_tr: g(),
          pt_br: d(),
          pl_pl: w(),
          ko_kr: E(),
          ja_jp: Q(),
          es_es: b(),
          en_us: We(),
          zh_cn: h(),
          ar_001: a(),
        },
        Qe = function () {
          var e;
          return null !== (e = Ie()) &&
            void 0 !== e &&
            e.dataset.platformEventLeftNavEntryStartTime
            ? new Date(
                Date.parse(
                  "".concat(
                    null === (e = Ie()) || void 0 === e
                      ? void 0
                      : e.dataset.platformEventLeftNavEntryStartTime,
                    " UTC",
                  ),
                ),
              )
            : new Date("01/01/2001");
        },
        ze = function () {
          var e;
          return null !== (e = Ie()) &&
            void 0 !== e &&
            e.dataset.platformEventLeftNavEntryEndTime
            ? new Date(
                Date.parse(
                  "".concat(
                    null === (e = Ie()) || void 0 === e
                      ? void 0
                      : e.dataset.platformEventLeftNavEntryEndTime,
                    " UTC",
                  ),
                ),
              )
            : new Date("01/01/2001");
        },
        Xe = function () {
          var e;
          return null !== (e = Ie()) &&
            void 0 !== e &&
            e.dataset.platformEventLeftNavUrl
            ? null === (e = Ie()) || void 0 === e
              ? void 0
              : e.dataset.platformEventLeftNavUrl
            : "";
        },
        $e = function (e) {
          return He[e] || We();
        };
      function Ye() {
        return (Ye =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n,
                r = arguments[t];
              for (n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Je(t, e) {
        var n,
          r = Object.keys(t);
        return (
          Object.getOwnPropertySymbols &&
            ((n = Object.getOwnPropertySymbols(t)),
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
            r.push.apply(r, n)),
          r
        );
      }
      function Ze(r) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Je(Object(a), !0).forEach(function (e) {
                var t, n;
                (t = r),
                  (e = a[(n = e)]),
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
              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
              : Je(Object(a)).forEach(function (e) {
                  Object.defineProperty(
                    r,
                    e,
                    Object.getOwnPropertyDescriptor(a, e),
                  );
                });
        }
        return r;
      }
      function et(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return tt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return tt(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function tt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function nt(e, t) {
        if (null == e) return {};
        var n,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), 0 <= t.indexOf(n) || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols)
          for (
            var a = Object.getOwnPropertySymbols(e), o = 0;
            o < a.length;
            o++
          )
            (n = a[o]),
              0 <= t.indexOf(n) ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        return r;
      }
      var rt = o;
      function at(e) {
        var t = e.translate,
          n = nt(e, ["translate"]),
          r = et((0, B.useState)(!1), 2),
          a = r[0],
          o = r[1],
          i = (0, B.useCallback)(function () {
            o(function (e) {
              return !e;
            }),
              je(rt.clickMerchandise);
          }, []),
          c = function () {
            o(!1);
          },
          u = Object.values(W.scrollListItems).map(function (e) {
            return q().createElement(
              Ae,
              Ye(
                { key: e.name },
                Ze(Ze({ translate: t, onClickShopLink: i }, e), n),
              ),
            );
          }),
          l = q().createElement(
            "li",
            { className: "rbx-upgrade-now" },
            q().createElement(
              "a",
              {
                href: W.upgradeButton.url,
                className: "btn-growth-md btn-secondary-md",
                onClick: function () {
                  Se.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
                    Se.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                      .WEB_PREMIUM_PURCHASE,
                    !1,
                    Se.paymentFlowAnalyticsService.ENUM_VIEW_NAME
                      .LEFT_NAVIGATION_BAR,
                    Se.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE
                      .USER_INPUT,
                    L.authenticatedUser.isPremiumUser
                      ? Se.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.PREMIUM
                      : Se.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
                          .GET_PREMIUM,
                  );
                },
                id: "upgrade-now-button",
              },
              t(W.upgradeButton.labelTranslationKey),
            ),
          ),
          s = q().createElement(
            q().Fragment,
            null,
            q().createElement(
              "p",
              { className: "shop-description" },
              t("Description.RetailWebsiteRedirect"),
            ),
            q().createElement(
              "p",
              { className: "shop-warning" },
              t("Description.PurchaseAgeWarning"),
            ),
          ),
          d = q().createElement(A.SimpleModal, {
            title: t("Heading.LeavingRoblox"),
            body: s,
            show: a,
            actionButtonShow: !0,
            actionButtonText: t("Action.Continue"),
            neutralButtonText: t("Action.Cancel"),
            onAction: function () {
              var e = decodeURIComponent(G.EnvironmentUrls.amazonWebStoreLink);
              window.open(e, "_blank"), je(rt.goToAmazonStore);
            },
            onNeutral: c,
            onClose: c,
          }),
          e = new Date(),
          r = Qe(),
          s = ze(),
          a = Xe(),
          c = G.Intl && new G.Intl(),
          c = $e(c.getRobloxLocale()),
          c = q().createElement(
            "a",
            { href: a, className: "rbx-platform-event-container" },
            q().createElement(
              "div",
              {
                className:
                  "rbx-platform-event-header dynamic-overflow-container",
              },
              q().createElement("span", { className: "rbx-event-icon" }),
              q().createElement(
                "span",
                { className: "rbx-event-header-text dynamic-ellipsis-item" },
                t("Label.sEvents"),
              ),
            ),
            q().createElement("img", {
              className: "rbx-platform-event-thumbnail",
              src: c,
              alt: t("Label.TheHunt"),
            }),
          );
        return q().createElement(
          "ul",
          { className: "left-col-list" },
          u,
          l,
          !1,
          d,
          r < e && e < s && a && c,
        );
      }
      (at.defaultProps = { sponsoredPagesData: [] }),
        (at.propTypes = {
          sponsoredPagesData: f().instanceOf(Array),
          translate: f().func.isRequired,
        });
      var ot = at;
      function it(t, e) {
        var n,
          r = Object.keys(t);
        return (
          Object.getOwnPropertySymbols &&
            ((n = Object.getOwnPropertySymbols(t)),
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
            r.push.apply(r, n)),
          r
        );
      }
      function ct(r) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? it(Object(a), !0).forEach(function (e) {
                var t, n;
                (t = r),
                  (e = a[(n = e)]),
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
              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
              : it(Object(a)).forEach(function (e) {
                  Object.defineProperty(
                    r,
                    e,
                    Object.getOwnPropertyDescriptor(a, e),
                  );
                });
        }
        return r;
      }
      function ut(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return lt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return lt(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function lt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function st(e) {
        var n = L.authenticatedUser.isAuthenticated,
          t = ut((0, B.useState)({}), 2),
          r = t[0],
          a = t[1],
          o = (c = ut((0, B.useState)({}), 2))[0],
          i = c[1],
          c = (t = ut((0, B.useState)({}), 2))[0],
          u = t[1];
        return (
          (0, B.useEffect)(function () {
            var e = function () {},
              t = function () {};
            return (
              n &&
                ((e = De(function () {
                  me().then(
                    function (e) {
                      e = e.data;
                      a(e);
                    },
                    function (e) {
                      console.debug(e);
                    },
                  );
                })),
                (t = _e(function () {
                  le().then(function (e) {
                    e = e.data;
                    i(e);
                  });
                })),
                me().then(
                  function (e) {
                    e = e.data;
                    a(e);
                  },
                  function (e) {
                    console.debug(e);
                  },
                ),
                le().then(
                  function (e) {
                    e = e.data;
                    i(e);
                  },
                  function (e) {
                    console.debug(e);
                  },
                ),
                fe().then(
                  function (e) {
                    e = e.data;
                    u(e);
                  },
                  function (e) {
                    console.debug(e);
                  },
                )),
              function () {
                e(), t();
              }
            );
          }, []),
          q().createElement(
            ot,
            ct({ friendsData: r, messagesData: o, tradeData: c }, e),
          )
        );
      }
      var h = L.authenticatedUser.name,
        a = L.authenticatedUser.displayName,
        dt = {
          nameForDisplay:
            null !== G.DisplayNames &&
            void 0 !== G.DisplayNames &&
            G.DisplayNames.Enabled()
              ? a
              : h,
          nameForHeader:
            null !== G.DisplayNames &&
            void 0 !== G.DisplayNames &&
            G.DisplayNames.Enabled()
              ? F.concatTexts.concat(["", h])
              : h,
        };
      function ft(e, t, n, r, a, o, i) {
        try {
          var c = e[o](i),
            u = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function mt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return pt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return pt(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function pt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function vt(e, t) {
        if (null == e) return {};
        var n,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), 0 <= t.indexOf(n) || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols)
          for (
            var a = Object.getOwnPropertySymbols(e), o = 0;
            o < a.length;
            o++
          )
            (n = a[o]),
              0 <= t.indexOf(n) ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        return r;
      }
      function bt(e) {
        var t = e.isLeftNavOpen,
          n = vt(e, ["isLeftNavOpen"]),
          r = mt((0, B.useState)(!1), 2),
          e = r[0],
          a = r[1],
          o = (0, B.useRef)(null);
        (0, B.useEffect)(
          function () {
            (function () {
              var c,
                e =
                  ((c = regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              e.next = 4;
                              break;
                            case 4:
                              return (
                                (e.prev = 4),
                                (e.next = 7),
                                (0, v.robloxBadgesReadyForRender)()
                              );
                            case 7:
                              e.sent && a((0, v.currentUserHasVerifiedBadge)()),
                                (e.next = 14);
                              break;
                            case 11:
                              (e.prev = 11), (e.t0 = e.catch(4)), a(!1);
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[4, 11]],
                    );
                  })),
                  function () {
                    var e = this,
                      i = arguments;
                    return new Promise(function (t, n) {
                      var r = c.apply(e, i);
                      function a(e) {
                        ft(r, t, n, a, o, "next", e);
                      }
                      function o(e) {
                        ft(r, t, n, a, o, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function () {
                return e.apply(this, arguments);
              };
            })()().catch(function () {});
          },
          [t, o],
        );
        (r =
          e && v.VerifiedBadgeIconContainer
            ? q().createElement(
                "section",
                {
                  ref: function (e) {
                    o.current = e;
                  },
                },
                q().createElement(v.VerifiedBadgeIconContainer, {
                  overrideImgClass: "verified-badge-icon-header",
                  size: v.BadgeSizes.CAPTIONHEADER,
                }),
              )
            : null),
          (t = O()("rbx-left-col", { "nav-show": t })),
          (e = O()("font-header-2 dynamic-ellipsis-item", {
            "verified-badge-left-nav": e,
          }));
        return q().createElement(
          "div",
          { id: "navigation", className: t },
          q().createElement(
            "ul",
            null,
            q().createElement(
              "li",
              { key: "username" },
              q().createElement(
                A.Link,
                {
                  className: "dynamic-overflow-container text-nav",
                  role: "link",
                  url: W.scrollListItems.profile.url,
                },
                q().createElement(
                  "span",
                  { className: "avatar avatar-headshot-xs" },
                  q().createElement(p.Thumbnail2d, {
                    containerClass: "avatar-card-image",
                    targetId: L.authenticatedUser.id,
                    type: p.ThumbnailTypes.avatarHeadshot,
                    altName: L.authenticatedUser.name,
                  }),
                ),
                q().createElement("div", { className: e }, dt.nameForDisplay),
                r,
              ),
            ),
            q().createElement("li", {
              key: "divider",
              className: "rbx-divider",
            }),
          ),
          q().createElement(
            A.ScrollBar,
            { className: "rbx-scrollbar" },
            q().createElement(st, n),
          ),
        );
      }
      bt.propTypes = { isLeftNavOpen: f().bool.isRequired };
      var gt = bt;
      function ht(t, e) {
        var n,
          r = Object.keys(t);
        return (
          Object.getOwnPropertySymbols &&
            ((n = Object.getOwnPropertySymbols(t)),
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
            r.push.apply(r, n)),
          r
        );
      }
      function yt(r) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ht(Object(a), !0).forEach(function (e) {
                var t, n;
                (t = r),
                  (e = a[(n = e)]),
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
              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
              : ht(Object(a)).forEach(function (e) {
                  Object.defineProperty(
                    r,
                    e,
                    Object.getOwnPropertyDescriptor(a, e),
                  );
                });
        }
        return r;
      }
      function St(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Et(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Et(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Et(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var wt,
        Ct = u,
        xt = (0, V.withTranslations)(function (e) {
          var t = L.authenticatedUser.isAuthenticated,
            n = St((0, B.useState)(!1), 2),
            r = n[0],
            a = n[1],
            o = (0, B.useCallback)(
              function () {
                a(!r);
              },
              [r],
            );
          return (
            (0, B.useEffect)(
              function () {
                return (
                  document.addEventListener(Ct.name, o),
                  function () {
                    document.removeEventListener(Ct.name, o);
                  }
                );
              },
              [o],
            ),
            t ? q().createElement(gt, yt({ isLeftNavOpen: r }, e)) : null
          );
        }, s),
        At = window.EventTracker
          ? EventTracker
          : {
              fireEvent: console.log,
              start: console.log,
              endSuccess: console.log,
              endCancel: console.log,
              endFailure: console.log,
            },
        Nt = function () {
          return (Nt =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        Tt = function (e, i, c, u) {
          return new (c = c || Promise)(function (n, t) {
            function r(e) {
              try {
                o(u.next(e));
              } catch (e) {
                t(e);
              }
            }
            function a(e) {
              try {
                o(u.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value) instanceof c
                    ? t
                    : new c(function (e) {
                        e(t);
                      })
                  ).then(r, a);
            }
            o((u = u.apply(e, i || [])).next());
          });
        },
        Ot = function (n, r) {
          var a,
            o,
            i,
            c = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
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
                for (; c; )
                  try {
                    if (
                      ((a = 1),
                      o &&
                        (i =
                          2 & t[0]
                            ? o.return
                            : t[0]
                              ? o.throw || ((i = o.return) && i.call(o), 0)
                              : o.next) &&
                        !(i = i.call(o, t[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (t = [2 & t[0], i.value]), t[0])) {
                      case 0:
                      case 1:
                        i = t;
                        break;
                      case 4:
                        return c.label++, { value: t[1], done: !1 };
                      case 5:
                        c.label++, (o = t[1]), (t = [0]);
                        continue;
                      case 7:
                        (t = c.ops.pop()), c.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = 0 < (i = c.trys).length && i[i.length - 1]) &&
                          (6 === t[0] || 2 === t[0])
                        ) {
                          c = 0;
                          continue;
                        }
                        if (
                          3 === t[0] &&
                          (!i || (t[1] > i[0] && t[1] < i[3]))
                        ) {
                          c.label = t[1];
                          break;
                        }
                        if (6 === t[0] && c.label < i[1]) {
                          (c.label = i[1]), (i = t);
                          break;
                        }
                        if (i && c.label < i[2]) {
                          (c.label = i[2]), c.ops.push(t);
                          break;
                        }
                        i[2] && c.ops.pop(), c.trys.pop();
                        continue;
                    }
                    t = r.call(n, c);
                  } catch (e) {
                    (t = [6, e]), (o = 0);
                  } finally {
                    a = i = 0;
                  }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
              })([t, e]);
            };
          }
        },
        Rt = F.httpService.createCancelToken();
      function It(e) {
        return void 0 === (null == e ? void 0 : e.label);
      }
      function Ut(e) {
        return void 0 !== (null == e ? void 0 : e.Query);
      }
      function kt(e) {
        if (Ut(e)) return "avatar";
        switch (e.type) {
          case wt.QuerySuggestion:
            return "keyword";
          case wt.GameSuggestion:
            return "game";
          default:
            throw Error(
              "Unrecognized autocomplete suggestion, ".concat(
                JSON.stringify(e),
              ),
            );
        }
      }
      function Pt(e) {
        switch (e.label) {
          case "Label.Players":
            return "defaultPlayers";
          case "Heading.Marketplace":
          case "Label.AvatarShop":
          case "Label.sCatalog":
            return "defaultShops";
          case "Label.sGroups":
            return "defaultGroups";
          case "Label.CreatorStore":
            return "defaultLibrary";
          case "Label.Experience":
            return "defaultGames";
          default:
            throw Error(
              "Unrecognized default suggestion, ".concat(JSON.stringify(e)),
            );
        }
      }
      ((o = wt = wt || {})[(o.GameSuggestion = 0)] = "GameSuggestion"),
        (o[(o.QuerySuggestion = 1)] = "QuerySuggestion"),
        (o[(o.TrendingQuerySuggestion = 2)] = "TrendingQuerySuggestion");
      var Lt = function (t) {
          return Tt(void 0, void 0, Promise, function () {
            return Ot(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    Rt.cancel(),
                    (Rt = F.httpService.createCancelToken()),
                    [
                      4,
                      F.httpService.get(
                        Nt(Nt({}, Ke.getSuggestionUrl), {
                          url:
                            Ke.getSuggestionUrl.url +
                            encodeURIComponent(t.toLowerCase()),
                          cancelToken: Rt.token,
                        }),
                      ),
                    ]
                  );
                case 1:
                  return [2, e.sent().data];
              }
            });
          });
        },
        jt = function (n, r, a, o, i) {
          return (
            void 0 === i && (i = !1),
            Tt(void 0, void 0, Promise, function () {
              var t;
              return Ot(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      null === (t = r) && (t = Ke.englishLanguageCode),
                      (t = {
                        prefix: n.toLowerCase(),
                        limit: a,
                        lang: t,
                        q: o,
                      }),
                      Rt.cancel(),
                      (Rt = F.httpService.createCancelToken()),
                      i
                        ? [
                            4,
                            F.httpService.get(
                              Nt(Nt({}, Ke.avatarRequestSuggestionUrl), {
                                timeout: Ke.expiryTimeout,
                                cancelToken: Rt.token,
                                fullError: !0,
                              }),
                              t,
                            ),
                          ]
                        : [3, 2]
                    );
                  case 1:
                    return [2, e.sent().data];
                  case 2:
                    return [
                      4,
                      F.httpService.get(
                        Nt(Nt({}, Ke.avatarRequestSuggestionCdnUrl), {
                          timeout: Ke.expiryTimeout,
                          cancelToken: Rt.token,
                          fullError: !0,
                        }),
                        t,
                      ),
                    ];
                  case 3:
                    return [2, e.sent().data];
                }
              });
            })
          );
        },
        Dt = It,
        _t = Ut,
        Mt = kt,
        Bt = Pt,
        qt = function (e, t) {
          var n;
          return It(e) && Ut(e)
            ? W.avatarSearchLink.url + encodeURIComponent(e.Query)
            : It(e)
              ? W.gameSearchLink.url + encodeURIComponent(e.searchQuery)
              : null != t && null !== (n = t.target) && void 0 !== n && n.value
                ? e.url + encodeURIComponent(t.target.value)
                : "";
        },
        Ft = function () {
          var e = new G.TranslationResourceProvider().intl.locale,
            t = e.indexOf("-");
          return (
            (e = e.substring(0, -1 !== t ? t : e.length)) !==
              Ke.englishLanguageCode &&
              (e += ",".concat(Ke.englishLanguageCode)),
            e
          );
        },
        Gt = function (e, t) {
          return e
            .map(function (e) {
              return It(e)
                ? "".concat(kt(e), "|").concat(e.searchQuery)
                : "".concat(Pt(e), "|").concat(t);
            })
            .join(",");
        },
        Vt = Se.eventStreamService.eventTypes,
        Kt = "searchAutocomplete",
        o = F.uuidService.generateRandomUuid,
        Wt = {
          contexts: {
            searchAutocomplete: Kt,
            searchLandingPage: "searchLandingPage",
          },
          actionTypes: {
            open: "open",
            submit: "submit",
            close: "close",
            cancel: "cancel",
          },
          generateSessionInfo: o,
          searchTextTrim: function (e, t, n, r) {
            return [
              { name: "searchTextTrim", type: Vt.formInteraction, context: Kt },
              { kwd: e, resultingKwd: t, searchType: n, sessionInfo: r },
            ];
          },
          searchClear: function (e, t, n, r) {
            return [
              { name: "searchClear", type: Vt.formInteraction, context: Kt },
              { kwd: e, searchType: t, sessionInfo: n, page: r },
            ];
          },
          searchSuggestionClicked: function (e, t, n, r, a, o, i) {
            return [
              {
                name: "searchSuggestionClicked",
                type: Vt.formInteraction,
                context: Kt,
              },
              {
                kwd: e,
                searchType: t,
                suggestionPosition: n,
                suggestionClicked: r,
                suggestionType: a,
                suggestions: o,
                sessionInfo: i,
              },
            ];
          },
          searchAutocomplete: function (e, t, n, r, a, o, i, c, u, l) {
            return [
              {
                name: "searchAutocomplete",
                type: Vt.formInteraction,
                context: Kt,
              },
              {
                kwd: e,
                previousKwd: t,
                fromLocalCache: n,
                suggestions: r,
                algorithm: a,
                latency: o,
                timeoutDelayMs: i,
                sessionInfo: c,
                page: u,
                isPersonalizedBasedOnPreviousQuery: l,
              },
            ];
          },
          search: function (e, t, n, r, a) {
            return [
              { name: "search", type: Vt.formInteraction, context: t },
              {
                kwd: e,
                actionType: n,
                sessionInfo: r,
                searchLandingPageSessionInfo: a,
              },
            ];
          },
          catalogSearch: function (e, t) {
            return [
              { name: "catalogSearch", type: Vt.formInteraction, context: Kt },
              { autocompleteFlag: e, previousPage: t },
            ];
          },
        };
      function Ht(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Xt(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          zt(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Qt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          zt(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function zt(e, t) {
        if (e) {
          if ("string" == typeof e) return Xt(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Xt(e, t)
                : void 0
          );
        }
      }
      function Xt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function $t(e) {
        var o = e.translate,
          i = e.searchInput,
          c = e.indexOfSelectedOption,
          u = e.autocompleteSessionInfo,
          l = e.resetSessionInfo,
          s = Be();
        return q().createElement(
          q().Fragment,
          null,
          Object.entries(s).map(function (e) {
            var t = Qt(e, 2),
              n = t[0],
              r = t[1],
              a = r.url,
              e = r.label,
              t = O()(
                "navbar-search-option rbx-clickable-li",
                parseInt(n, 10) === c ? " selected" : "",
              );
            return q().createElement(
              "li",
              { key: n, className: t },
              q().createElement(
                A.Link,
                {
                  className: "navbar-search-anchor",
                  url: a + i,
                  onClick: function () {
                    Se.eventStreamService.sendEvent.apply(
                      Se.eventStreamService,
                      Ht(
                        Wt.searchSuggestionClicked(
                          i,
                          void 0,
                          n,
                          i,
                          Bt(r),
                          Gt(s, i),
                          u,
                        ),
                      ),
                    ),
                      l();
                  },
                },
                o("Label.sSearchPhrase", { phrase: i, location: o(e) }),
              ),
            );
          }),
        );
      }
      $t.propTypes = {
        translate: f().func.isRequired,
        searchInput: f().string.isRequired,
        indexOfSelectedOption: f().number.isRequired,
        autocompleteSessionInfo: f().string.isRequired,
        resetSessionInfo: f().func.isRequired,
      };
      var Yt = $t;
      function Jt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Zt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Zt(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Zt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var en = W.gameSearchLink,
        tn = W.avatarSearchLink,
        nn = W.creatorStoreUrl;
      function rn(e) {
        var t = e.translate,
          n = e.selected,
          r = e.suggestion,
          a = e.onClick,
          o = O()("navbar-search-option rbx-clickable-li", {
            "new-selected": n,
          }),
          i = r.type,
          c = r.universeId,
          e = r.searchQuery,
          n = Jt((0, B.useState)(!1), 2),
          r = n[0],
          u = n[1];
        return i === wt.GameSuggestion
          ? q().createElement(
              "li",
              { className: o },
              q().createElement(
                A.Link,
                {
                  className: "new-navbar-search-anchor",
                  url: en.url + encodeURIComponent(e),
                  onClick: a,
                },
                q().createElement("span", {
                  className: O()(en.icon, "navbar-list-option-icon"),
                }),
                q().createElement(
                  "span",
                  { className: "navbar-list-option-text" },
                  e,
                ),
                q().createElement(
                  "span",
                  { className: "navbar-list-option-suffix" },
                  t("Label.sSearchPhraseV2", { location: t(en.label) }),
                ),
                q().createElement(
                  "span",
                  {
                    className: O()("navbar-list-option-thumbnail", {
                      "navbar-list-option-thumbnail-visible": r,
                    }),
                  },
                  q().createElement("span", { className: "background-icon" }),
                  q().createElement(p.Thumbnail2d, {
                    type: p.ThumbnailTypes.gameIcon,
                    size: p.DefaultThumbnailSize,
                    targetId: c,
                    containerClass: "thumbnail-icon",
                    format: p.ThumbnailFormat.jpeg,
                    onLoad: function () {
                      u(!0);
                    },
                  }),
                ),
              ),
            )
          : q().createElement(
              "li",
              { className: o },
              q().createElement(
                A.Link,
                {
                  className: "new-navbar-search-anchor",
                  url: en.url + encodeURIComponent(e),
                  onClick: a,
                },
                q().createElement("span", {
                  className: O()(en.icon, "navbar-list-option-icon"),
                }),
                q().createElement(
                  "span",
                  { className: "navbar-list-option-text" },
                  e,
                ),
                q().createElement(
                  "span",
                  { className: "navbar-list-option-suffix" },
                  t("Label.sSearchPhraseV2", { location: t(en.label) }),
                ),
              ),
            );
      }
      function an(e) {
        var t = e.translate,
          n = e.selected,
          r = e.suggestion,
          e = e.onClick,
          n = O()("navbar-search-option rbx-clickable-li", {
            "new-selected": n,
          }),
          r = r.Query;
        return q().createElement(
          "li",
          { className: n },
          q().createElement(
            A.Link,
            {
              className: "new-navbar-search-anchor",
              url: tn.url + encodeURIComponent(r),
              onClick: e,
            },
            q().createElement("span", {
              className: O()(tn.icon, "navbar-list-option-icon"),
            }),
            q().createElement(
              "span",
              { className: "navbar-list-option-text" },
              r,
            ),
            q().createElement(
              "span",
              { className: "navbar-list-option-suffix" },
              t("Label.sSearchPhraseV2", { location: t(tn.label) }),
            ),
          ),
        );
      }
      function on(e) {
        var t = e.translate,
          n = e.selected,
          r = e.searchInput,
          a = e.suggestion,
          o = e.onClick,
          i = a.url,
          e = a.label,
          a = a.icon,
          i = "Label.CreatorStore" === e ? nn : i,
          n = O()("navbar-search-option rbx-clickable-li", {
            "new-selected": n,
          });
        return q().createElement(
          "li",
          { className: n },
          q().createElement(
            A.Link,
            {
              className: "new-navbar-search-anchor",
              url: i + encodeURIComponent(r),
              onClick: o,
            },
            q().createElement("span", {
              className: O()(a, "navbar-list-option-icon"),
            }),
            q().createElement(
              "span",
              { className: "navbar-list-option-text" },
              r.toLowerCase(),
            ),
            q().createElement(
              "span",
              { className: "navbar-list-option-suffix" },
              t("Label.sSearchPhraseV2", { location: t(e) }),
            ),
          ),
        );
      }
      function cn(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return un(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return un(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return un(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function un(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ln(e) {
        function r(t, n) {
          return function () {
            var e = c[n];
            Se.eventStreamService.sendEvent.apply(
              Se.eventStreamService,
              cn(
                Wt.searchSuggestionClicked(
                  o,
                  void 0,
                  n,
                  Dt(e) ? e.searchQuery : o,
                  t,
                  Gt(c, o),
                  u,
                ),
              ),
            ),
              l();
            e = t.includes("default") ? 0 : 1;
            Se.eventStreamService.sendEvent.apply(
              Se.eventStreamService,
              cn(
                Wt.catalogSearch(
                  e,
                  F.pageName.PageNameProvider.getInternalPageName(),
                ),
              ),
            );
          };
        }
        var a = e.translate,
          o = e.searchInput,
          i = e.indexOfSelectedOption,
          c = e.searchSuggestions,
          u = e.autocompleteSessionInfo,
          l = e.resetSessionInfo;
        return c.map(function (e, t) {
          var n = parseInt(t, 10) === i;
          return Dt(e) && _t(e)
            ? q().createElement(an, {
                key: e.Query,
                translate: a,
                selected: n,
                suggestion: e,
                onClick: r(Mt(e), t),
              })
            : Dt(e)
              ? q().createElement(rn, {
                  key: e.searchQuery,
                  translate: a,
                  selected: n,
                  suggestion: e,
                  onClick: r(Mt(e), t),
                })
              : q().createElement(on, {
                  key: e.url,
                  translate: a,
                  selected: n,
                  suggestion: e,
                  searchInput: o,
                  onClick: r(Bt(e), t),
                });
        });
      }
      (rn.propTypes = {
        translate: f().func.isRequired,
        selected: f().bool.isRequired,
        suggestion: f().shape({
          type: f().number.isRequired,
          score: f().number.isRequired,
          universeId: f().number,
          canonicalTitle: f().string,
          thumbnailUrl: f().string,
          searchQuery: f().string.isRequired,
          trendingSearchStartDateTime: f().string,
        }).isRequired,
        onClick: f().func.isRequired,
      }),
        (an.propTypes = {
          translate: f().func.isRequired,
          selected: f().bool.isRequired,
          suggestion: f().shape({ Query: f().string }).isRequired,
          onClick: f().func.isRequired,
        }),
        (on.propTypes = {
          translate: f().func.isRequired,
          selected: f().bool.isRequired,
          searchInput: f().string.isRequired,
          suggestion: f().shape({
            url: f().string.isRequired,
            label: f().string.isRequired,
            pageSort: f().arrayOf(f().string).isRequired,
            icon: f().string.isRequired,
          }).isRequired,
          onClick: f().func.isRequired,
        }),
        (ln.propTypes = {
          translate: f().func.isRequired,
          searchInput: f().string.isRequired,
          indexOfSelectedOption: f().number.isRequired,
          searchSuggestions: f().arrayOf(
            f().oneOfType([
              f().shape({
                type: f().number.isRequired,
                score: f().number.isRequired,
                universeId: f().number.isRequired,
                canonicalTitle: f().string,
                thumbnailUrl: f().string,
                searchQuery: f().string.isRequired,
                trendingSearchStartDateTime: f().string,
              }),
              f().shape({
                url: f().string.isRequired,
                label: f().string.isRequired,
                pageSort: f().arrayOf(f().string).isRequired,
                icon: f().string.isRequired,
              }),
              f().shape({
                Query: f().string.isRequired,
                Score: f().number.isRequired,
              }),
            ]),
          ).isRequired,
          autocompleteSessionInfo: f().string.isRequired,
          resetSessionInfo: f().func.isRequired,
        });
      var sn = ln;
      function dn(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return pn(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          mn(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function fn(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          mn(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function mn(e, t) {
        if (e) {
          if ("string" == typeof e) return pn(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? pn(e, t)
                : void 0
          );
        }
      }
      function pn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function vn(e) {
        var t = e.translate,
          n = e.searchInput,
          r = e.isMenuOpen,
          a = e.handleSearchOpenOrInputChange,
          o = e.closeMenu,
          i = e.setIsMenuHover,
          c = e.indexOfSelectedOption,
          u = e.onSubmit,
          l = e.onKeyDown,
          s = e.onKeyUp,
          d = e.isUniverseSearchShown,
          f = e.searchSuggestions,
          m = e.isSearchLandingEnabled,
          p = e.autocompleteSessionInfo,
          v = e.resetSessionInfo,
          b = e.isAvatarAutocompleteEnabled,
          g = (0, B.createRef)(),
          h = (0, B.createRef)(),
          y = (0, B.useRef)(),
          S = fn((0, B.useState)(!1), 2),
          E = S[0],
          w = S[1],
          C = fn((0, B.useState)(!0), 2),
          x = C[0],
          A = C[1];
        (0, B.useEffect)(function () {
          function e() {
            A(!1);
          }
          return (
            window.addEventListener("SetSearchLandingHasContent", e),
            function () {
              window.removeEventListener("SetSearchLandingHasContent", e);
            }
          );
        }, []);
        var N = (0, B.useRef)(!1),
          T = (0, B.useCallback)(
            function () {
              var e;
              Se.eventStreamService.sendEvent.apply(
                Se.eventStreamService,
                dn(
                  Wt.searchClear(
                    n,
                    void 0,
                    p,
                    null === F.pageName ||
                      void 0 === F.pageName ||
                      null === (e = F.pageName.PageNameProvider) ||
                      void 0 === e
                      ? void 0
                      : e.getInternalPageName(),
                  ),
                ),
              ),
                (N.current = !0),
                null == g ||
                  (null !== (e = g.current) && void 0 !== e && e.focus()),
                a("");
            },
            [p, g, a, n],
          ),
          e = (0, B.useCallback)(
            function () {
              w(!0), N.current ? (N.current = !1) : a();
            },
            [a],
          ),
          S = function () {
            w(!1);
          },
          C = (0, B.useCallback)(
            function (e) {
              a(e.target.value);
            },
            [a],
          ),
          r = O()(
            "navbar-left navbar-search col-xs-5 col-sm-6 col-md-2 col-lg-3",
            { "navbar-search-open": m ? r && 0 < n.length : r, shown: d },
          ),
          d = O()("search-landing-root", {
            "search-landing-root-open": m && 0 === n.length && E,
          }),
          E = E && ((!x && 0 === n.length) || 0 < n.length),
          x = O()("search-overlay", { "search-overlay-show": E }),
          E = Ke.isAutocompleteSuggestionsIXPTestEnabled() || b,
          b = (0, B.useMemo)(
            function () {
              var e = [g, h];
              return m && e.push(y.current), e;
            },
            [h, g, m, y],
          );
        return (
          (0, V.useOnClickOutside)(b, o),
          (0, B.useEffect)(
            function () {
              y.current && G.SearchLandingService.mountSearchLanding();
            },
            [y],
          ),
          q().createElement(
            q().Fragment,
            null,
            q().createElement(
              "div",
              {
                "data-testid": "navigation-search-input",
                className: r,
                role: "search",
              },
              q().createElement(
                "div",
                { className: "input-group" },
                q().createElement(
                  "form",
                  { name: "search-form", onSubmit: u, action: "/search" },
                  E
                    ? q().createElement(
                        "div",
                        { className: "form-has-feedback" },
                        q().createElement("input", {
                          ref: g,
                          id: "navbar-search-input",
                          type: "search",
                          name: "search-bar",
                          "data-testid": "navigation-search-input-field",
                          className: "form-control input-field new-input-field",
                          value: n,
                          onChange: C,
                          placeholder: t("Label.sSearch"),
                          maxLength: "120",
                          onFocus: e,
                          onBlur: S,
                          onKeyDown: l,
                          onKeyUp: s,
                          autoComplete: "off",
                          autoCorrect: "off",
                          autoCapitalize: "off",
                          spellCheck: "false",
                        }),
                        0 < n.length &&
                          q().createElement(
                            "span",
                            {
                              "data-testid":
                                "navigation-search-input-clear-button",
                              tabIndex: 0,
                              role: "button",
                              "aria-label": "Clear Search",
                              onClick: T,
                              onKeyDown: T,
                              className: "clear-search icon-actions-clear-sm",
                            },
                            q().createElement("span", null),
                          ),
                      )
                    : q().createElement("input", {
                        ref: g,
                        id: "navbar-search-input",
                        type: "search",
                        name: "search-bar",
                        "data-testid": "navigation-search-input-field",
                        className: "form-control input-field",
                        value: n,
                        onChange: C,
                        placeholder: t("Label.sSearch"),
                        maxLength: "120",
                        onFocus: e,
                        onBlur: S,
                        onKeyDown: l,
                        onKeyUp: s,
                        autoComplete: "off",
                      }),
                ),
                q().createElement(
                  "div",
                  { className: "input-group-btn" },
                  q().createElement(
                    "button",
                    {
                      "data-testid": "navigation-search-input-search-button",
                      className: "input-addon-btn",
                      type: "submit",
                    },
                    q().createElement("span", {
                      className: "icon-common-search-sm",
                    }),
                  ),
                ),
              ),
              q().createElement(
                "ul",
                {
                  ref: h,
                  className: O()("dropdown-menu", { "new-dropdown-menu": E }),
                  role: "menu",
                  onMouseEnter: function () {
                    i(!0);
                  },
                  onMouseLeave: function () {
                    i(!1);
                  },
                },
                E
                  ? q().createElement(sn, {
                      translate: t,
                      searchInput: n,
                      indexOfSelectedOption: c,
                      searchSuggestions: f,
                      autocompleteSessionInfo: p,
                      resetSessionInfo: v,
                    })
                  : q().createElement(Yt, {
                      translate: t,
                      searchInput: n,
                      indexOfSelectedOption: c,
                      autocompleteSessionInfo: p,
                      resetSessionInfo: v,
                    }),
              ),
              q().createElement("div", {
                ref: y,
                id: "search-landing-root",
                "data-testid": "search-landing-root",
                className: d,
              }),
            ),
            m && q().createElement("div", { className: x }),
          )
        );
      }
      (vn.defaultProps = {
        isUniverseSearchShown: !0,
        isAvatarAutocompleteEnabled: !1,
        isSearchLandingEnabled: !1,
      }),
        (vn.propTypes = {
          translate: f().func.isRequired,
          searchInput: f().string.isRequired,
          isMenuOpen: f().bool.isRequired,
          handleSearchOpenOrInputChange: f().func.isRequired,
          closeMenu: f().func.isRequired,
          setIsMenuHover: f().func.isRequired,
          indexOfSelectedOption: f().number.isRequired,
          onSubmit: f().func.isRequired,
          onKeyDown: f().func.isRequired,
          onKeyUp: f().func.isRequired,
          isUniverseSearchShown: f().bool,
          isAvatarAutocompleteEnabled: f().bool,
          searchSuggestions: f().arrayOf(
            f().oneOfType([
              f().shape({
                type: f().number.isRequired,
                score: f().number.isRequired,
                universeId: f().number.isRequired,
                canonicalTitle: f().string,
                thumbnailUrl: f().string,
                searchQuery: f().string.isRequired,
                trendingSearchStartDateTime: f().string,
              }),
              f().shape({
                url: f().string.isRequired,
                label: f().string.isRequired,
                pageSort: f().arrayOf(f().string).isRequired,
                icon: f().string,
              }),
              f().shape({
                query: f().string.isRequired,
                score: f().number.isRequired,
              }),
            ]),
          ).isRequired,
          isSearchLandingEnabled: f().bool,
          autocompleteSessionInfo: f().string.isRequired,
          resetSessionInfo: f().func.isRequired,
        });
      var bn = vn,
        gn = {
          searchLandingPageExperimentFetchError:
            "SearchLandingPageExperimentFetchError",
        };
      function hn(e, t, n, r, a, o, i) {
        try {
          var c = e[o](i),
            u = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function yn(c) {
        return function () {
          var e = this,
            i = arguments;
          return new Promise(function (t, n) {
            var r = c.apply(e, i);
            function a(e) {
              hn(r, t, n, a, o, "next", e);
            }
            function o(e) {
              hn(r, t, n, a, o, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function Sn(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Cn(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          wn(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function En(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          wn(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function wn(e, t) {
        if (e) {
          if ("string" == typeof e) return Cn(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Cn(e, t)
                : void 0
          );
        }
      }
      function Cn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function xn(e) {
        function i(e) {
          if (e) {
            if (P) {
              var t =
                  -1 ===
                  a.findIndex(function (e) {
                    return e.searchQuery === u.toLowerCase() && _t(e);
                  }),
                n = e.filter(function (e) {
                  return e.searchQuery !== u.toLowerCase() || _t(e);
                });
              return [].concat(
                Sn(O.slice(0, t ? U + 1 : U)),
                Sn(n),
                Sn(O.slice(U + 1)),
              );
            }
            if (Ke.isSpecialTreatmentAutocompleteRestricted()) return O;
            (n =
              -1 ===
              e.findIndex(function (e) {
                return (
                  e.searchQuery === u.toLowerCase() &&
                  e.type === wt.GameSuggestion
                );
              })),
              (e = e
                .filter(function (e) {
                  return (
                    e.searchQuery !== u.toLowerCase() ||
                    e.type === wt.GameSuggestion
                  );
                })
                .slice(
                  0,
                  Ke.isSpecialTreatment()
                    ? Ke.numberOfSpecialTreatmentAutocompleteSuggestions
                    : Ke.numberOfAutocompleteSuggestions(),
                ));
            return [].concat(
              Sn(O.slice(0, n ? I + 1 : I)),
              Sn(e),
              Sn(O.slice(I + 1)),
            );
          }
          return O;
        }
        var t = e.translate,
          n = e.isUniverseSearchShown,
          r = En((0, B.useState)(Ve(window.location.search).keyword || ""), 2),
          o = r[0],
          c = r[1],
          u = (0, V.useDebounce)(o, Ke.debounceTimeout),
          l = (0, V.usePrevious)(u),
          e = En((0, B.useState)(null), 2),
          a = e[0],
          s = e[1],
          r = En((0, B.useState)(Wt.generateSessionInfo()), 2),
          d = r[0],
          f = r[1],
          e = En((0, B.useState)(Wt.generateSessionInfo()), 2),
          m = e[0],
          p = e[1],
          v = (0, B.useRef)(!1),
          r = En((0, B.useState)(!1), 2),
          b = r[0],
          g = r[1],
          e = En((0, B.useState)(!1), 2),
          h = e[0],
          y = e[1],
          r = En((0, B.useState)(!0), 2),
          S = r[0],
          E = r[1],
          e = En((0, B.useState)(!1), 2),
          w = e[0],
          r = e[1],
          e = En((0, B.useState)(0), 2),
          C = e[0],
          x = e[1],
          e = En((0, B.useState)(!1), 2),
          A = e[0],
          N = e[1],
          T = K,
          e = En(
            (0, B.useState)(
              (Ke.isAutocompleteSuggestionsIXPTestEnabled() ? qe : Be)(),
            ),
            2,
          ),
          O = e[0],
          R = e[1],
          I = O.findIndex(function (e) {
            return e.label === W.gameSearchLink.label;
          }),
          U = qe().findIndex(function (e) {
            return e.label === W.avatarSearchLink.label;
          }),
          k = Ft(),
          P = Fe(),
          L = (0, B.useMemo)(
            function () {
              return i(a);
            },
            [a, O],
          ),
          j = L.length;
        (0, B.useEffect)(
          function () {
            S ||
              Se.eventStreamService.sendEvent.apply(
                Se.eventStreamService,
                Sn(
                  Wt.search(
                    o,
                    Wt.contexts.searchAutocomplete,
                    Wt.actionTypes.submit,
                    d,
                  ),
                ),
              ),
              E(!1);
            var e = (function () {
              var e = yn(
                regeneratorRuntime.mark(function e() {
                  var t, n, r, a, o;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              !(
                                void 0 !== u &&
                                "" !== u &&
                                u.length <= Ke.debouncedSearchInputMaxLength
                              )
                            ) {
                              e.next = 34;
                              break;
                            }
                            if ((s(null), (t = Date.now()), P))
                              return (
                                (e.prev = 4),
                                (n = Date.now()),
                                (e.next = 8),
                                jt(
                                  u,
                                  k,
                                  Ke.avatarAutocompleteQueryPaddingAmount,
                                  l,
                                  A,
                                )
                              );
                            e.next = 20;
                            break;
                          case 8:
                            (a = e.sent),
                              (o = (function (e, t) {
                                var n = 0,
                                  r = [];
                                return (
                                  e.forEach(function (e) {
                                    n < Ke.avatarAutocompleteSuggestionLimit &&
                                      e.Query !== t &&
                                      (r.push(e), (n += 1));
                                  }),
                                  r
                                );
                              })(a.Data, u)),
                              Se.eventStreamService.sendEvent.apply(
                                Se.eventStreamService,
                                Sn(
                                  Wt.searchAutocomplete(
                                    u,
                                    l,
                                    !1,
                                    o,
                                    a.Args.Algo,
                                    n - t,
                                    Ke.debounceTimeout,
                                    "",
                                    F.pageName.PageNameProvider.getInternalPageName(),
                                    "" !== l,
                                  ),
                                ),
                              ),
                              s(o),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              F.httpService.isCancelled(e.t0) || s([]),
                              N(!0);
                          case 18:
                            e.next = 34;
                            break;
                          case 20:
                            if (Ke.isAutocompleteSuggestionsIXPTestEnabled())
                              return (e.prev = 21), (e.next = 24), Lt(u);
                            e.next = 34;
                            break;
                          case 24:
                            (r = e.sent),
                              (a = Date.now()),
                              (o = i(r.entries)),
                              Se.eventStreamService.sendEvent.apply(
                                Se.eventStreamService,
                                Sn(
                                  Wt.searchAutocomplete(
                                    u,
                                    l,
                                    !1,
                                    Gt(o, u),
                                    r.algorithmName,
                                    a - t,
                                    Ke.debounceTimeout,
                                    d,
                                    F.pageName.PageNameProvider.getInternalPageName(),
                                    !1,
                                  ),
                                ),
                              ),
                              s(r.entries),
                              (e.next = 34);
                            break;
                          case 31:
                            (e.prev = 31),
                              (e.t1 = e.catch(21)),
                              F.httpService.isCancelled(e.t1) || s([]);
                          case 34:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [4, 14],
                      [21, 31],
                    ],
                  );
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            P && R(qe()), e();
          },
          [u],
        );
        function D() {
          f(Wt.generateSessionInfo());
        }
        function _() {
          y(!1);
        }
        var M = (0, B.useCallback)(
            yn(
              regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((t = b), (e.prev = 1), v.current)) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (e.next = 5),
                            G.ExperimentationService.getAllValuesForLayer(
                              "PlayerApp.HomePage.UX.WholePageRanking",
                            )
                          );
                        case 5:
                          (n = e.sent),
                            (t =
                              null !==
                                (n =
                                  null == n
                                    ? void 0
                                    : n.shouldShowSearchLandingPageWeb) &&
                              void 0 !== n &&
                              n);
                        case 7:
                          t &&
                            ((n = Wt.generateSessionInfo()),
                            G.SearchLandingService.showSearchLanding(n),
                            Se.eventStreamService.sendEvent.apply(
                              Se.eventStreamService,
                              Sn(
                                Wt.search(
                                  void 0,
                                  Wt.contexts.searchLandingPage,
                                  Wt.actionTypes.open,
                                  void 0,
                                  n,
                                ),
                              ),
                            ),
                            g(t),
                            p(n)),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(1)),
                            (0, At.fireEvent)(
                              gn.searchLandingPageExperimentFetchError,
                            );
                        case 13:
                          return (v.current = !0), e.abrupt("return", t);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 10]],
                );
              }),
            ),
            [b],
          ),
          e = (0, B.useCallback)(
            yn(
              regeneratorRuntime.mark(function e() {
                var t,
                  n,
                  r,
                  a = arguments;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (c((t = 0 < a.length && void 0 !== a[0] ? a[0] : o)),
                          t.length < o.length &&
                            Se.eventStreamService.sendEvent.apply(
                              Se.eventStreamService,
                              Sn(Wt.searchTextTrim(o, t, void 0, d)),
                            ),
                          (n = b),
                          0 === t.length)
                        )
                          return (e.next = 7), M();
                        e.next = 12;
                        break;
                      case 7:
                        (n = e.sent),
                          (r = Wt.generateSessionInfo()),
                          Se.eventStreamService.sendEvent.apply(
                            Se.eventStreamService,
                            Sn(
                              Wt.search(
                                t,
                                Wt.contexts.searchAutocomplete,
                                Wt.actionTypes.open,
                                r,
                              ),
                            ),
                          ),
                          f(r),
                          x(0);
                      case 12:
                        if (w) return e.abrupt("return");
                        e.next = 14;
                        break;
                      case 14:
                        y(!!n || 0 < t.length);
                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            ),
            [d, M, w, b, o],
          );
        return (
          (0, B.useEffect)(
            function () {
              return (
                window.addEventListener("setSearchMenuClose", _),
                function () {
                  window.removeEventListener("setSearchMenuClose", _);
                }
              );
            },
            [h],
          ),
          q().createElement(bn, {
            searchInput: o,
            handleSearchOpenOrInputChange: e,
            isSearchLandingEnabled: b,
            closeMenu: function () {
              h &&
                (b && 0 === o.length
                  ? Se.eventStreamService.sendEvent.apply(
                      Se.eventStreamService,
                      Sn(
                        Wt.search(
                          null,
                          Wt.contexts.searchLandingPage,
                          Wt.actionTypes.cancel,
                          void 0,
                          m,
                        ),
                      ),
                    )
                  : Se.eventStreamService.sendEvent.apply(
                      Se.eventStreamService,
                      Sn(
                        Wt.search(
                          o,
                          Wt.contexts.searchAutocomplete,
                          Wt.actionTypes.close,
                          d,
                        ),
                      ),
                    ),
                y(!1));
            },
            setIsMenuHover: r,
            isMenuOpen: h,
            indexOfSelectedOption: C,
            onSubmit: function (e) {
              e.preventDefault(), e.stopPropagation();
            },
            onKeyDown: function (e) {
              var t = C;
              !h ||
                (e.keyCode !== T.arrowUp &&
                  e.keyCode !== T.arrowDown &&
                  e.keyCode !== T.tab) ||
                (e.stopPropagation(),
                e.preventDefault(),
                e.keyCode === T.arrowUp ? --t : (t += 1),
                (t %= j) < 0 && (t = j + t),
                x(t));
            },
            onKeyUp: function (e) {
              if (
                e.keyCode === T.enter &&
                (e.stopPropagation(), e.preventDefault(), !b || 0 !== o.length)
              ) {
                var t = L[C];
                Dt(t)
                  ? (Se.eventStreamService.sendEvent.apply(
                      Se.eventStreamService,
                      Sn(
                        Wt.searchSuggestionClicked(
                          u,
                          void 0,
                          C,
                          t.searchQuery,
                          Mt(t),
                          Gt(L, o),
                          d,
                        ),
                      ),
                    ),
                    Se.eventStreamService.sendEvent.apply(
                      Se.eventStreamService,
                      Sn(
                        Wt.catalogSearch(
                          1,
                          F.pageName.PageNameProvider.getInternalPageName(),
                        ),
                      ),
                    ))
                  : (Se.eventStreamService.sendEvent.apply(
                      Se.eventStreamService,
                      Sn(
                        Wt.searchSuggestionClicked(
                          u,
                          void 0,
                          C,
                          u,
                          Bt(t),
                          Gt(L, o),
                          d,
                        ),
                      ),
                    ),
                    Se.eventStreamService.sendEvent.apply(
                      Se.eventStreamService,
                      Sn(
                        Wt.catalogSearch(
                          0,
                          F.pageName.PageNameProvider.getInternalPageName(),
                        ),
                      ),
                    )),
                  D();
                var n = qt(t, e);
                if (n) {
                  var r,
                    n = n;
                  if (
                    ("Label.CreatorStore" === t.label &&
                      ((n = W.creatorStoreUrl),
                      null != e &&
                        null !== (r = e.target) &&
                        void 0 !== r &&
                        r.value &&
                        (n += encodeURIComponent(e.target.value))),
                    document.getElementById("routing"))
                  ) {
                    e = new URL(n);
                    if (
                      e.origin === window.location.origin &&
                      "/catalog" ===
                        G.Endpoints.removeUrlLocale(e.pathname).toLowerCase()
                    ) {
                      e = new CustomEvent("externalNavigation", {
                        detail: { url: n },
                      });
                      return (
                        window.dispatchEvent(e),
                        y(!1),
                        void document
                          .getElementById("navbar-search-input")
                          .blur()
                      );
                    }
                  }
                  window.location = n;
                }
              }
            },
            isUniverseSearchShown: n,
            translate: t,
            searchSuggestions: L,
            autocompleteSessionInfo: d,
            resetSessionInfo: function () {
              var e;
              D(),
                (e = Wt.generateSessionInfo()),
                p(e),
                G.SearchLandingService.updateSessionInfo(e);
            },
            isAvatarAutocompleteEnabled: P,
          })
        );
      }
      (xn.defaultProps = { isUniverseSearchShown: !0 }),
        (xn.propTypes = {
          translate: f().func.isRequired,
          isUniverseSearchShown: f().bool,
        });
      var An = (0, V.withTranslations)(xn, s),
        o = angular,
        Nn = jo.n(o);
      function Tn(e) {
        return (Tn =
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
      function On(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Rn(e, t) {
        return (Rn =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function In(n) {
        var r = (function () {
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
            t = Un(n);
          return (
            (e = r
              ? ((e = Un(this).constructor), Reflect.construct(t, arguments, e))
              : t.apply(this, arguments)),
            (t = this),
            !(e = e) || ("object" !== Tn(e) && "function" != typeof e)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                })(t)
              : e
          );
        };
      }
      function Un(e) {
        return (Un = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var kn = (function () {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && Rn(e, t);
        })(a, q().Component);
        var e,
          t,
          n,
          r = In(a);
        function a() {
          return (
            (function (e) {
              if (!(e instanceof a))
                throw new TypeError("Cannot call a class as a function");
            })(this),
            r.apply(this, arguments)
          );
        }
        return (
          (e = a),
          (t = [
            {
              key: "componentDidMount",
              value: function () {
                try {
                  Nn().module("notificationStreamIcon"),
                    Nn().bootstrap(this.container, ["notificationStreamIcon"]);
                } catch (e) {
                  console.log(e);
                }
              },
            },
            {
              key: "render",
              value: function () {
                var t = this;
                return q().createElement(
                  "span",
                  {
                    ref: function (e) {
                      t.container = e;
                    },
                    className: "nav-robux-icon rbx-menu-item",
                  },
                  q().createElement("span", {
                    id: "notification-stream-icon-container",
                    "notification-stream-indicator": "true",
                  }),
                );
              },
            },
          ]) && On(e.prototype, t),
          n && On(e, n),
          a
        );
      })();
      function Pn(e) {
        return (Pn =
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
      function Ln(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function jn(e, t) {
        return (jn =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Dn(n) {
        var r = (function () {
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
            t = _n(n);
          return (
            (e = r
              ? ((e = _n(this).constructor), Reflect.construct(t, arguments, e))
              : t.apply(this, arguments)),
            (t = this),
            !(e = e) || ("object" !== Pn(e) && "function" != typeof e)
              ? (function (e) {
                  if (void 0 !== e) return e;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                })(t)
              : e
          );
        };
      }
      function _n(e) {
        return (_n = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var Mn = (function () {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && jn(e, t);
          })(a, q().Component);
          var e,
            t,
            n,
            r = Dn(a);
          function a() {
            return (
              (function (e) {
                if (!(e instanceof a))
                  throw new TypeError("Cannot call a class as a function");
              })(this),
              r.apply(this, arguments)
            );
          }
          return (
            (e = a),
            (t = [
              {
                key: "componentDidMount",
                value: function () {
                  try {
                    Nn().module("notificationStream"),
                      Nn().bootstrap(this.container, ["notificationStream"]);
                  } catch (e) {
                    console.log(e);
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = Ge(),
                    e = O()("notification-stream-base", e);
                  return q().createElement("div", {
                    ref: function (e) {
                      t.container = e;
                    },
                    className: e,
                    "notification-stream-base-view": "true",
                  });
                },
              },
            ]) && Ln(e.prototype, t),
            n && Ln(e, n),
            a
          );
        })(),
        Bn = {
          name: "nsCloseContent",
          context: "click",
          additionalProperties: {},
        };
      function qn() {
        var e = (0, B.useRef)();
        return q().createElement(
          "li",
          {
            id: "navbar-stream",
            ref: e,
            className: "navbar-icon-item navbar-stream notification-margins",
          },
          q().createElement(
            A.Popover,
            {
              id: "notification-stream-popover",
              trigger: "click",
              placement: "bottom",
              closeOnClick: !1,
              button: q().createElement(
                "button",
                {
                  type: "button",
                  className: "btn-uiblox-common-common-notification-bell-md",
                },
                q().createElement(kn, null),
              ),
              container: e.current,
              onExit: function () {
                window.dispatchEvent(
                  new Event("Roblox.NotificationStream.StreamClosed"),
                ),
                  Se.eventStreamService.sendEventWithTarget(
                    Bn.name,
                    Bn.context,
                    Bn.additionalProperties,
                  );
              },
              role: "menu",
            },
            q().createElement(Mn, null),
          ),
        );
      }
      qn.propTypes = {};
      var Fn = qn;
      function Gn(e) {
        var t = e.accountNotificationCount,
          e = O()("notification-red notification nav-setting-highlight", {
            hidden: 0 === t,
          });
        return q().createElement(
          "span",
          { id: "settings-icon", className: "nav-settings-icon rbx-menu-item" },
          q().createElement("span", {
            className: "icon-nav-settings roblox-popover-close",
            id: "nav-settings",
          }),
          q().createElement("span", { className: e }, t),
        );
      }
      function Vn() {
        return Wn(void 0, void 0, Promise, function () {
          var t;
          return Hn(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (t = { url: Qn(), withCredentials: !0 }),
                  [4, F.httpService.get(t)]
                );
              case 1:
                return [2, e.sent().data];
            }
          });
        });
      }
      (Gn.defaultProps = { accountNotificationCount: 0 }),
        (Gn.propTypes = { accountNotificationCount: f().number });
      var Kn = Gn,
        Wn = function (e, i, c, u) {
          return new (c = c || Promise)(function (n, t) {
            function r(e) {
              try {
                o(u.next(e));
              } catch (e) {
                t(e);
              }
            }
            function a(e) {
              try {
                o(u.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value) instanceof c
                    ? t
                    : new c(function (e) {
                        e(t);
                      })
                  ).then(r, a);
            }
            o((u = u.apply(e, i || [])).next());
          });
        },
        Hn = function (n, r) {
          var a,
            o,
            i,
            c = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
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
                for (; c; )
                  try {
                    if (
                      ((a = 1),
                      o &&
                        (i =
                          2 & t[0]
                            ? o.return
                            : t[0]
                              ? o.throw || ((i = o.return) && i.call(o), 0)
                              : o.next) &&
                        !(i = i.call(o, t[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (t = [2 & t[0], i.value]), t[0])) {
                      case 0:
                      case 1:
                        i = t;
                        break;
                      case 4:
                        return c.label++, { value: t[1], done: !1 };
                      case 5:
                        c.label++, (o = t[1]), (t = [0]);
                        continue;
                      case 7:
                        (t = c.ops.pop()), c.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = 0 < (i = c.trys).length && i[i.length - 1]) &&
                          (6 === t[0] || 2 === t[0])
                        ) {
                          c = 0;
                          continue;
                        }
                        if (
                          3 === t[0] &&
                          (!i || (t[1] > i[0] && t[1] < i[3]))
                        ) {
                          c.label = t[1];
                          break;
                        }
                        if (6 === t[0] && c.label < i[1]) {
                          (c.label = i[1]), (i = t);
                          break;
                        }
                        if (i && c.label < i[2]) {
                          (c.label = i[2]), c.ops.push(t);
                          break;
                        }
                        i[2] && c.ops.pop(), c.trys.pop();
                        continue;
                    }
                    t = r.call(n, c);
                  } catch (e) {
                    (t = [6, e]), (o = 0);
                  } finally {
                    a = i = 0;
                  }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
              })([t, e]);
            };
          }
        },
        Qn = Y,
        zn = {
          schematizedEventTypes: {
            authButtonClick: "authButtonClick",
            authPageLoad: "authPageLoad",
          },
          context: {
            homepage: "homepage",
            accountSwitcherStatus: "accountSwitcherStatus",
          },
          btn: { logout: "logout", switchAccount: "switchAccount" },
        };
      function Xn(e, t, n, r, a, o, i) {
        try {
          var c = e[o](i),
            u = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function $n(c) {
        return function () {
          var e = this,
            i = arguments;
          return new Promise(function (t, n) {
            var r = c.apply(e, i);
            function a(e) {
              Xn(r, t, n, a, o, "next", e);
            }
            function o(e) {
              Xn(r, t, n, a, o, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function Yn() {
        var e = er("returnUrl") || window.location.href;
        return (e = e === rr() || e === ir() ? "" : e);
      }
      function Jn() {
        var e =
            null !== G.AccountSwitcherService &&
            void 0 !== G.AccountSwitcherService &&
            G.AccountSwitcherService.isAccountSwitcherAvailable()
              ? Yn()
              : er("returnUrl") || window.location.href,
          t = rr();
        return "".concat(t, "?").concat(tr({ returnUrl: e }));
      }
      function Zn() {
        return pe().then(
          $n(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      window.location.reload();
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          ),
        );
      }
      var er = F.urlService.getQueryParam,
        tr = F.urlService.composeQueryString,
        nr = M,
        rr = z,
        ar = X,
        or = H,
        ir = $,
        cr = r,
        r = {
          getSignupUrl: function (e) {
            var t,
              n,
              e = 0 < arguments.length && void 0 !== e && e;
            return (
              (n =
                L.authenticatedUser.isAuthenticated && e
                  ? ((t = Yn()), ir())
                  : ((t =
                      (n = (t =
                        er("returnUrl") ||
                        window.location.href).toLowerCase()).startsWith(
                        rr().toLowerCase(),
                      ) || n.startsWith(ar().toLowerCase())
                        ? ""
                        : t),
                    nr())),
              "".concat(n, "?").concat(tr({ returnUrl: t }))
            );
          },
          getLoginLinkUrl: Jn,
          logoutUser: function (e) {
            e.stopPropagation(),
              e.preventDefault(),
              document.dispatchEvent(new CustomEvent(cr.name)),
              Se.eventStreamService.sendEventWithTarget(
                zn.schematizedEventTypes.authButtonClick,
                zn.context.homepage,
                { btn: zn.btn.logout },
              ),
              Nn().isUndefined(Nn().element("#chat-container").scope()) ||
                (e = Nn().element("#chat-container").scope()).$digest(
                  e.$broadcast("Roblox.Chat.destroyChatCookie"),
                ),
              null !== G.EmailVerificationService &&
                void 0 !== G.EmailVerificationService &&
                G.EmailVerificationService.handleUserEmailUpsellAtLogout(
                  Zn,
                ).then(function (e) {
                  (e && !e.emailAddress) || Zn();
                });
          },
          logoutAndRedirect: Zn,
          isLoginLinkAvailable: function () {
            var e = (
                null === (e = window) || void 0 === e ? void 0 : e.location
              ).pathname,
              e =
                null !== (e = null == e ? void 0 : e.toLowerCase()) &&
                void 0 !== e
                  ? e
                  : "";
            return !e.startsWith("/login") && !e.startsWith("/newlogin");
          },
          switchAccount: function (e) {
            e.stopPropagation(),
              e.preventDefault(),
              (e = window.location.href),
              Se.eventStreamService.sendEventWithTarget(
                zn.schematizedEventTypes.authButtonClick,
                zn.context.homepage,
                { btn: zn.btn.switchAccount, state: e.toString() },
              ),
              Nn().isUndefined(Nn().element("#chat-container").scope()) ||
                (e = Nn().element("#chat-container").scope()).$digest(
                  e.$broadcast("Roblox.Chat.destroyChatCookie"),
                );
            var t = {
              containerId: "navigation-account-switcher-container",
              onAccountSwitched: function () {
                Se.localStorageService.setLocalStorage(
                  _.accountSwitchedFlag,
                  !0,
                ),
                  (window.location.href = or());
              },
              handleAddAccount: function () {
                window.location.href = z();
              },
            };
            (function () {
              var e = $n(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            null === G.AccountSwitcherService ||
                            void 0 === G.AccountSwitcherService
                              ? void 0
                              : G.AccountSwitcherService.isAccountSwitcherAvailable()
                          );
                        case 2:
                          if (!e.sent) {
                            e.next = 4;
                            break;
                          }
                          null === G.AccountSwitcherService ||
                            void 0 === G.AccountSwitcherService ||
                            G.AccountSwitcherService.renderAccountSwitcher(t);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          },
          getIsVNGLandingRedirectEnabled: (function () {
            var e = $n(
              regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            G.ExperimentationService.getAllValuesForLayer(
                              "Website.LandingPage",
                            )
                          );
                        case 3:
                          return (
                            (t = e.sent),
                            (t =
                              null !==
                                (n =
                                  null == t
                                    ? void 0
                                    : t.IsVngLandingPageRedirectEnabled) &&
                              void 0 !== n &&
                              n),
                            (e.next = 7),
                            Vn()
                          );
                        case 7:
                          return (
                            (n = e.sent),
                            (n = n.isVNGComplianceEnabled),
                            e.abrupt("return", n && t)
                          );
                        case 12:
                          return (
                            (e.prev = 12),
                            (e.t0 = e.catch(0)),
                            e.abrupt("return", !1)
                          );
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 12]],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          navigateToLoginWithRedirect: function () {
            window.location.href = Jn();
          },
        },
        ur = W.settingsUrl,
        lr = W.quickLoginUrl,
        sr = r.logoutUser,
        dr = r.switchAccount,
        fr = l.quickLogin,
        mr = l.settings,
        pr = l.logout,
        vr = l.switchAccountKey;
      function br(e) {
        var r = e.translate,
          t = e.accountNotificationCount,
          a = void 0 === t ? 0 : t,
          o = void 0 !== (e = e.isCrossDeviceLoginCodeValidationDisplayed) && e,
          i = O()("notification-blue notification nav-setting-highlight", {
            hidden: 0 === a,
          }),
          c = (
            null !==
              (e =
                null === G.AccountSwitcherService ||
                void 0 === G.AccountSwitcherService
                  ? void 0
                  : G.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()) &&
            void 0 !== e
              ? e
              : [!1]
          )[0],
          e = Object.entries(ur).map(function (e) {
            var t = e[0],
              n = e[1],
              e = n.url,
              n = n.label;
            return q().createElement(
              "li",
              { key: t },
              t === pr &&
                q().createElement(
                  A.Link,
                  {
                    className: "rbx-menu-item logout-menu-item",
                    key: t,
                    onClick: sr,
                    url: "#",
                  },
                  r(n),
                ),
              t === vr &&
                c &&
                q().createElement(
                  A.Link,
                  {
                    className: "rbx-menu-item account-switch-menu-item",
                    key: t,
                    onClick: dr,
                    url: "#",
                  },
                  r(n),
                ),
              t === fr &&
                o &&
                q().createElement(
                  A.Link,
                  { className: "rbx-menu-item", key: t, url: lr },
                  r(n),
                ),
              t !== pr &&
                t !== fr &&
                t !== vr &&
                q().createElement(
                  A.Link,
                  { cssClasses: "rbx-menu-item", key: t, url: e },
                  r(n),
                  t === mr && q().createElement("span", { className: i }, a),
                ),
            );
          });
        return q().createElement(q().Fragment, null, e);
      }
      function gr(e, t, n, r, a, o, i) {
        try {
          var c = e[o](i),
            u = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function hr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return yr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return yr(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function yr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Sr(e) {
        var t = e.translate,
          n = e.accountNotificationCount,
          r = hr((0, B.useState)(!1), 2),
          e = r[0],
          a = r[1],
          r = (0, B.useRef)();
        return (
          (0, B.useEffect)(function () {
            var e,
              t = (function () {
                var c,
                  e =
                    ((c = regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  null === G.AccountSwitcherService ||
                                  void 0 === G.AccountSwitcherService
                                    ? void 0
                                    : G.AccountSwitcherService.syncAccountSwitcherBlobIfNeeded()
                                );
                              case 3:
                                e.next = 8;
                                break;
                              case 5:
                                (e.prev = 5),
                                  (e.t0 = e.catch(0)),
                                  console.warn(
                                    "account switching has issues",
                                    e.t0,
                                  );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 5]],
                      );
                    })),
                    function () {
                      var e = this,
                        i = arguments;
                      return new Promise(function (t, n) {
                        var r = c.apply(e, i);
                        function a(e) {
                          gr(r, t, n, a, o, "next", e);
                        }
                        function o(e) {
                          gr(r, t, n, a, o, "throw", e);
                        }
                        a(void 0);
                      });
                    });
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            a(!0),
              (e = !(
                null === G.AccountSwitcherService ||
                void 0 === G.AccountSwitcherService ||
                !G.AccountSwitcherService.getStoredAccountSwitcherBlob()
              )),
              Se.eventStreamService.sendEventWithTarget(
                zn.schematizedEventTypes.authPageLoad,
                zn.context.accountSwitcherStatus,
                { state: e.toString() },
              ),
              t();
          }, []),
          q().createElement(
            "li",
            { id: "navbar-settings", ref: r, className: "navbar-icon-item" },
            q().createElement(
              A.Popover,
              {
                id: "settings-popover",
                trigger: "click",
                placement: "bottom",
                className: Ge(),
                containerPadding: 20,
                button: q().createElement(
                  "button",
                  {
                    type: "button",
                    className: "btn-navigation-nav-settings-md",
                  },
                  q().createElement(Kn, { accountNotificationCount: n }),
                ),
                container: r.current,
                role: "menu",
              },
              q().createElement(
                "div",
                { className: Ge() },
                q().createElement(
                  "ul",
                  { id: "settings-popover-menu", className: "dropdown-menu" },
                  q().createElement(br, {
                    isCrossDeviceLoginCodeValidationDisplayed: e,
                    translate: t,
                    accountNotificationCount: n,
                  }),
                ),
              ),
            ),
          )
        );
      }
      (Sr.defaultProps = { accountNotificationCount: 0 }),
        (Sr.propTypes = {
          translate: f().func.isRequired,
          accountNotificationCount: f().number,
        });
      var Er = Sr,
        wr = { VIRTUAL_ITEM: "VIRTUAL_ITEM", UPDATE: "UPDATE" };
      function Cr(e) {
        var t = e.robuxAmount,
          n = e.isGetCurrencyCallDone,
          r = e.robuxError,
          a = e.creditDisplayConfig,
          e = e.robuxBadgeType,
          t = r ? y : F.abbreviateNumber.getTruncValue(t),
          e = O()("notification-red robux-badge", { hidden: !e }),
          t = q().createElement(
            B.Fragment,
            null,
            q().createElement("span", {
              className: "icon-robux-28x28 roblox-popover-close",
              id: "nav-robux",
            }),
            a !== D.hideCreditAndRobux &&
              q().createElement(
                "span",
                {
                  className: "rbx-text-navbar-right text-header",
                  id: "nav-robux-amount",
                },
                n && t,
              ),
          );
        return q().createElement(
          "span",
          { id: "nav-robux-icon", className: "nav-robux-icon rbx-menu-item" },
          r
            ? q().createElement(
                A.Tooltip,
                {
                  id: "current-error",
                  content: r,
                  placement: "bottom",
                  containerClassName: "nav-buy-robux-icon-tooltip-container",
                },
                t,
              )
            : t,
          q().createElement("span", { className: e }),
        );
      }
      function xr(e) {
        switch (e) {
          case wr.VIRTUAL_ITEM:
            return (
              "prevLocalVirtualItemStartTimeSeconds" + G.CurrentUser.userId
            );
          case wr.UPDATE:
            return "hasSeenRobuxUpdate";
          default:
            return "";
        }
      }
      (Cr.defaultProps = {
        robuxAmount: 0,
        robuxError: "",
        robuxBadgeType: null,
      }),
        (Cr.propTypes = {
          robuxAmount: f().number,
          robuxError: f().string,
          isGetCurrencyCallDone: f().bool.isRequired,
          creditDisplayConfig: f().string.isRequired,
          robuxBadgeType: f().oneOf(Object.values(wr)),
        });
      var Ar = Cr;
      function Nr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Tr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Tr(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Tr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Or = W.buyRobuxUrl,
        Rr = W.redeemUrl,
        Ir = W.buyGiftCardUrl,
        Ur = new Map(),
        kr = new Map();
      function Pr(e) {
        var t = e.creditAmount,
          n = e.creditDisplayConfig,
          r = e.creditError,
          a = e.currencyCode,
          o = e.isEligibleForVng,
          i = e.robuxAmount,
          c = e.robuxError,
          u = e.openConvertCreditModal,
          l = e.onBuyGiftCardClick,
          s = e.onBuyRobuxExternalClick,
          d = e.robuxBadgeType,
          f = e.translate,
          m = Nr((0, B.useState)(!0), 2),
          p = m[0],
          v = m[1],
          b = Nr((0, B.useState)(!1), 2),
          e = b[0],
          g = b[1],
          m = Nr((0, B.useState)(!1), 2),
          b = m[0],
          h = m[1],
          m = c ? y : F.numberFormat.getNumberFormat(i),
          c = (function (e) {
            switch (e) {
              case wr.VIRTUAL_ITEM:
                return "Labels.NewItem";
              case wr.UPDATE:
                return "Labels.NewUpdate";
              default:
                return "";
            }
          })(d);
        return (
          (0, B.useEffect)(
            function () {
              i < S.robuxTruncateThreshold &&
                t < S.creditTruncateThreshold &&
                n !== D.hideCreditAndRobux &&
                v(!1);
            },
            [i, t, n],
          ),
          (0, B.useEffect)(
            function () {
              window.dispatchEvent(
                new CustomEvent("price-tag:render", {
                  detail: { targetSelector: ".dropdown-credit-balance" },
                }),
              );
            },
            [n],
          ),
          (0, B.useEffect)(
            function () {
              0 === t
                ? g(!1)
                : Ur.has(t)
                  ? g(Ur.get(t))
                  : be().then(function (e) {
                      0 < e.data.robuxConversionAmount
                        ? (Ur.set(t, !0), g(!0))
                        : (Ur.set(t, !1), g(!1));
                    });
            },
            [t],
          ),
          (0, B.useEffect)(function () {
            kr.has(Ir.cacheKey)
              ? h(kr.get(Ir.cacheKey))
              : ge().then(function (e) {
                  e = e.data;
                  h(e.displayBuyGiftCardOption),
                    kr.set(Ir.cacheKey, e.displayBuyGiftCardOption);
                });
          }, []),
          q().createElement(
            B.Fragment,
            null,
            q().createElement(
              "div",
              { className: p ? "" : "wallet-hidden" },
              q().createElement(
                "li",
                { className: "dropdown-wallet" },
                q().createElement(
                  A.Link,
                  { className: "dropdown-wallet-section" },
                  q().createElement("span", {
                    className: "icon-robux-28x28",
                    id: "nav-robux",
                  }),
                  q().createElement("span", { id: "nav-robux-balance" }, m),
                ),
              ),
              n !== D.control &&
                q().createElement(
                  "li",
                  { className: "dropdown-wallet" },
                  q().createElement(
                    A.Link,
                    { className: "dropdown-wallet-section" },
                    q().createElement("span", {
                      className: "icon-menu-wallet",
                    }),
                    r
                      ? y
                      : q().createElement("span", {
                          className: "dropdown-credit-balance",
                          "data-amount": t,
                          "data-currency-code": a,
                        }),
                  ),
                ),
              q().createElement("li", { className: "rbx-divider" }),
            ),
            o
              ? q().createElement(
                  "li",
                  null,
                  q().createElement(
                    "button",
                    { type: "button", cssClasses: "rbx-menu-item", onClick: s },
                    f(Or.buyRobux.label),
                  ),
                )
              : q().createElement(
                  "li",
                  { className: "rbx-menu-item-container" },
                  q().createElement(
                    A.Link,
                    {
                      cssClasses: "rbx-menu-item buy-robux-button",
                      url: Or.buyRobux.url,
                      onClick: function () {
                        var e;
                        (e =
                          Se.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
                            .BUY_ROBUX),
                          Se.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
                            Se.paymentFlowAnalyticsService
                              .ENUM_TRIGGERING_CONTEXT.WEB_ROBUX_PURCHASE,
                            !1,
                            Se.paymentFlowAnalyticsService.ENUM_VIEW_NAME
                              .NAVIGATION_DROPDOWN_MENU,
                            Se.paymentFlowAnalyticsService
                              .ENUM_PURCHASE_EVENT_TYPE.USER_INPUT,
                            e,
                          ),
                          (function (e) {
                            var t = xr(e);
                            switch (e) {
                              case wr.VIRTUAL_ITEM:
                                Se.localStorageService.setLocalStorage(
                                  t,
                                  Math.floor(Date.now() / 1e3),
                                );
                                break;
                              case wr.UPDATE:
                                Se.localStorageService.setLocalStorage(
                                  t,
                                  "true",
                                );
                            }
                          })(d);
                      },
                    },
                    q().createElement(
                      "span",
                      { className: "buy-robux-link-container" },
                      f(Or.buyRobux.label),
                      c &&
                        q().createElement(
                          "div",
                          { className: "new-item-pill small" },
                          q().createElement(
                            "span",
                            { className: "new-item-pill-text" },
                            f(c),
                          ),
                        ),
                    ),
                  ),
                ),
            b &&
              q().createElement(
                "li",
                null,
                q().createElement(
                  "button",
                  { type: "button", cssClasses: "rbx-menu-item", onClick: l },
                  f(Ir.label) || "Buy Gift Card",
                ),
              ),
            q().createElement(
              "li",
              null,
              q().createElement(
                A.Link,
                { cssClasses: "rbx-menu-item", url: Or.myTransactions.url },
                f(Or.myTransactions.label),
              ),
            ),
            q().createElement(
              "li",
              null,
              q().createElement(
                A.Link,
                { cssClasses: "rbx-menu-item", url: Rr.url },
                f(Rr.label),
              ),
            ),
            n !== D.control &&
              e &&
              q().createElement(
                "li",
                null,
                q().createElement(
                  A.Link,
                  { cssClasses: "rbx-menu-item", onClick: u },
                  f("Label.ConvertCreditSuccess"),
                ),
              ),
          )
        );
      }
      (Pr.defaultProps = {
        isEligibleForVng: !1,
        robuxAmount: 0,
        robuxError: "",
        creditAmount: 0,
        currencyCode: "",
        creditError: "",
        robuxBadgeType: null,
      }),
        (Pr.propTypes = {
          isEligibleForVng: f().bool,
          translate: f().func.isRequired,
          robuxAmount: f().number,
          robuxError: f().string,
          creditAmount: f().number,
          currencyCode: f().string,
          creditError: f().string,
          robuxBadgeType: f().oneOf(Object.values(wr)),
          creditDisplayConfig: f().string.isRequired,
          openConvertCreditModal: f().func.isRequired,
          onBuyGiftCardClick: f().func.isRequired,
          onBuyRobuxExternalClick: f().func.isRequired,
        });
      var Lr = Pr;
      function jr(e) {
        var t = e.creditAmount,
          n = e.currencyCode,
          e = e.creditError,
          e = q().createElement(
            B.Fragment,
            null,
            q().createElement("span", {
              className: "icon-menu-wallet roblox-popover-close",
              id: "nav-credit-icon",
            }),
            q().createElement(
              "span",
              {
                className: "rbx-text-navbar-right text-header",
                id: "nav-robux-amount",
              },
              e
                ? q().createElement("div", { className: "nav-credit-text" }, y)
                : q().createElement("div", {
                    className: "credit-balance",
                    "data-amount": t,
                    "data-currency-code": n,
                  }),
            ),
          );
        return (
          (0, B.useEffect)(
            function () {
              window.dispatchEvent(
                new CustomEvent("price-tag:render", {
                  detail: {
                    targetSelector: ".credit-balance",
                    tagClassName: "navbar-compact nav-credit-text",
                  },
                }),
              );
            },
            [t, n],
          ),
          q().createElement(
            B.Fragment,
            null,
            q().createElement(
              "span",
              {
                id: "nav-robux-icon",
                className: "nav-robux-icon rbx-menu-item nav-credit",
              },
              e,
            ),
          )
        );
      }
      (jr.defaultProps = {
        creditAmount: 0,
        creditError: "",
        currencyCode: "USD",
      }),
        (jr.propTypes = {
          creditAmount: f().number,
          creditError: f().string,
          currencyCode: f().string,
        });
      var Dr = jr;
      function _r(e) {
        var t = e.translate,
          n = e.isShopModalOpen,
          r = e.closeShopModal,
          a = e.onModalContinue,
          e = q().createElement(
            q().Fragment,
            null,
            q().createElement(
              "p",
              { className: "shop-description" },
              t("Description.RetailWebsiteRedirect"),
            ),
            q().createElement(
              "p",
              { className: "shop-warning" },
              t("Description.PurchaseAgeWarning"),
            ),
          );
        return q().createElement(A.SimpleModal, {
          title: t("Heading.LeavingRoblox"),
          body: e,
          show: n,
          actionButtonShow: !0,
          actionButtonText: t("Action.Continue"),
          neutralButtonText: t("Action.Cancel"),
          onAction: a,
          onNeutral: r,
          onClose: r,
        });
      }
      _r.propTypes = {
        translate: f().func.isRequired,
        isShopModalOpen: f().bool.isRequired,
        closeShopModal: f().func.isRequired,
        onModalContinue: f().func.isRequired,
      };
      var Mr = (0, V.withTranslations)(_r, s);
      function Br(e) {
        var t = e.translate,
          n = e.isOpen,
          r = e.onClose,
          a = e.onContinue,
          e = q().createElement(
            q().Fragment,
            null,
            q().createElement(
              "p",
              { className: "modal-body" },
              t("Description.RedirectToPartnerWebsite") ||
                "This purchase must be completed on our partner’s website. You will be returned to Roblox after the purchase is completed.\n\nProceed to partner website for payment?",
            ),
          );
        return q().createElement(A.SimpleModal, {
          title: t("Heading.LeaveRoblox") || "Leaving Roblox",
          body: e,
          show: n,
          actionButtonShow: !0,
          actionButtonText:
            t("Action.ContinueToPayment") || "Continue to Payment",
          neutralButtonText: t("Action.Cancel") || "Cancel",
          onAction: a,
          onNeutral: r,
          onClose: r,
        });
      }
      Br.propTypes = {
        translate: f().func.isRequired,
        isOpen: f().bool.isRequired,
        onClose: f().func.isRequired,
        onContinue: f().func.isRequired,
      };
      var qr = (0, V.withTranslations)(Br, s);
      function Fr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Gr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Gr(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Gr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Vr(e) {
        function t(e) {
          Se.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
            b.WEB_ROBUX_PURCHASE,
            !1,
            g.NAVIGATION_DROPDOWN_MENU,
            y.USER_INPUT,
            e,
          );
        }
        var n = e.creditAmount,
          r = e.creditDisplayConfig,
          a = e.creditError,
          o = e.currencyCode,
          i = e.isEligibleForVng,
          c = e.isExperimentCallDone,
          u = e.isGetCurrencyCallDone,
          l = e.openConvertCreditModal,
          s = e.robuxBadgeType,
          d = e.robuxAmount,
          f = e.robuxError,
          m = e.translate,
          p = W.buyGiftCardUrl,
          v = W.buyRobuxUrl.buyRobuxOnVng,
          b = Se.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT,
          g = Se.paymentFlowAnalyticsService.ENUM_VIEW_NAME,
          h = Se.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE,
          y = Se.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE,
          S = (0, B.useRef)(),
          E = Fr((0, B.useState)(!1), 2),
          w = E[0],
          C = E[1],
          e = Fr((0, B.useState)(!1), 2),
          E = e[0],
          x = e[1];
        return q().createElement(
          "li",
          {
            id: "navbar-robux",
            ref: S,
            className: O()("navbar-icon-item", {
              "robux-popover-margins": r === D.hideCreditAndRobux,
            }),
          },
          q().createElement(Mr, {
            isShopModalOpen: w,
            closeShopModal: function () {
              C(!1);
            },
            onModalContinue: function () {
              t(h.CONTINUE_TO_CASHSTAR);
              var e = decodeURIComponent(p.url);
              window.open(e, "_blank");
            },
          }),
          i &&
            q().createElement(qr, {
              isOpen: E,
              onClose: function () {
                x(!1);
              },
              onContinue: function () {
                t(h.CONTINUE_TO_VNG),
                  he().then(
                    function (e) {
                      e = e.data.vngShopRedirectUrl;
                      window.open(e || v.url, "_blank").focus();
                    },
                    function () {
                      window.open(v.url, "_blank").focus();
                    },
                  ),
                  x(!1);
              },
            }),
          c &&
            q().createElement(
              A.Popover,
              {
                id: "buy-robux-popover",
                trigger: "click",
                placement: "bottom",
                button: q().createElement(
                  "button",
                  { type: "button", className: "btn-navigation-nav-robux-md" },
                  q().createElement(Ar, {
                    robuxAmount: d,
                    isGetCurrencyCallDone: u,
                    robuxError: f,
                    creditDisplayConfig: r,
                    robuxBadgeType: s,
                  }),
                  r === D.showCreditAndRobux &&
                    q().createElement(Dr, {
                      creditAmount: n,
                      currencyCode: o,
                      creditError: a,
                    }),
                ),
                role: "menu",
                container: S.current,
              },
              q().createElement(
                "div",
                { className: Ge() },
                q().createElement(
                  "ul",
                  { id: "buy-robux-popover-menu", className: "dropdown-menu" },
                  q().createElement(Lr, {
                    isEligibleForVng: i,
                    translate: m,
                    robuxAmount: d,
                    robuxError: f,
                    creditAmount: n,
                    currencyCode: o,
                    creditError: a,
                    creditDisplayConfig: r,
                    openConvertCreditModal: l,
                    onBuyGiftCardClick: function () {
                      t(h.BUY_GIFT_CARD), C(!0);
                    },
                    onBuyRobuxExternalClick: function () {
                      t(h.EXTERNAL_LINK_MODAL), x(!0);
                    },
                    robuxBadgeType: s,
                  }),
                ),
              ),
            ),
        );
      }
      (Vr.defaultProps = {
        robuxAmount: 0,
        robuxError: "",
        creditAmount: 0,
        creditError: "",
        currencyCode: "USD",
        creditDisplayConfig: D.control,
        isExperimentCallDone: !1,
        isEligibleForVng: !1,
        robuxBadgeType: null,
      }),
        (Vr.propTypes = {
          translate: f().func.isRequired,
          robuxAmount: f().number,
          robuxError: f().string,
          isGetCurrencyCallDone: f().bool.isRequired,
          creditAmount: f().number,
          currencyCode: f().string,
          creditError: f().string,
          creditDisplayConfig: f().string,
          isExperimentCallDone: f().bool,
          openConvertCreditModal: f().func.isRequired,
          isEligibleForVng: f().bool,
          robuxBadgeType: f().oneOf(Object.values(wr)),
        });
      var Kr = Vr;
      function Wr(e) {
        e = e.toggleUniverseSearch;
        return q().createElement(
          "li",
          { className: "rbx-navbar-right-search" },
          q().createElement(
            "button",
            {
              type: "button",
              className: "rbx-menu-item btn-navigation-nav-search-white-md",
              onClick: e,
            },
            q().createElement("span", { className: "icon-nav-search-white" }),
          ),
        );
      }
      Wr.propTypes = { toggleUniverseSearch: f().func.isRequired };
      var Hr = Wr;
      function Qr() {
        var t = (0, B.useRef)(null),
          e = L.authenticatedUser.isUnder13,
          n =
            (0, v.currentUserHasVerifiedBadge)() && v.VerifiedBadgeIconContainer
              ? q().createElement(
                  "section",
                  {
                    ref: function (e) {
                      t.current = e;
                    },
                  },
                  q().createElement(v.VerifiedBadgeIconContainer, {
                    overrideImgClass: "verified-badge-icon-header",
                    size: v.BadgeSizes.CAPTIONHEADER,
                  }),
                )
              : null;
        return q().createElement(
          "div",
          { className: "age-bracket-label text-header" },
          q().createElement(
            A.Link,
            {
              className: "text-link dynamic-overflow-container",
              url: W.scrollListItems.profile.url,
            },
            q().createElement(
              "span",
              { className: "avatar avatar-headshot-xs" },
              q().createElement(p.Thumbnail2d, {
                containerClass: "avatar-card-image",
                targetId: L.authenticatedUser.id,
                type: p.ThumbnailTypes.avatarHeadshot,
                altName: L.authenticatedUser.name,
              }),
            ),
            q().createElement(
              "span",
              {
                className:
                  "text-overflow age-bracket-label-username font-caption-header",
              },
              dt.nameForDisplay,
            ),
            n,
          ),
          q().createElement(
            "span",
            { className: "xsmall age-bracket-label-age text-secondary" },
            e ? "<13" : "13+",
          ),
        );
      }
      function zr() {
        return Na(void 0, void 0, Promise, function () {
          var t;
          return Ta(this, function (e) {
            return (
              (t = {
                withCredentials: !0,
                url:
                  G.EnvironmentUrls.apiGatewayUrl +
                  "/credit-balance/v1/get-next-purchasable-metadata",
              }),
              [2, F.httpService.get(t)]
            );
          });
        });
      }
      function Xr(r) {
        return Na(void 0, void 0, Promise, function () {
          var t, n;
          return Ta(this, function (e) {
            return (
              (t = {
                paymentProviderType: "Credit",
                providerPayload: {
                  product_id: 0 === r || null == r ? void 0 : r,
                },
              }),
              (n = {
                withCredentials: !0,
                url:
                  G.EnvironmentUrls.apiGatewayUrl +
                  "/payments-gateway/v1/process-payment",
              }),
              [2, F.httpService.post(n, t)]
            );
          });
        });
      }
      var $r = "Label.AvailableCreditWithColon",
        Yr = "Label.BalanceDue",
        Jr = "Label.CreditAfterTransaction",
        Zr = "Action.Buy",
        ea = "Action.Cancel",
        ta = "Action.ConvertToRobux",
        na = "Label.ConvertCreditSuccess",
        ra = "Heading.BuyRobuxWithCredit",
        aa = "Message.Step1LargestAvailablePackageYouCanBuy",
        oa = "Message.Step2NextLargestPackage",
        ia = "Message.Step3ConvertRobux",
        ca = "Message.ConvertCreditToRobux",
        ua = "Alert.RobuxPackagePurchased",
        la = "Alert.RobuxPackagePurchaseFailed",
        sa = "Alert.SuccessfullyConvertedCreditToRobux",
        da = "Heading.CreditConversionFail",
        fa = "Alert.GenericFailure",
        ma = "NewCreditConversionGetNextPurchasableFailedStatusCode",
        pa = "NewCreditConversionGetNextPurchasableCreditBalanceZero",
        va = "NewCreditConversionGetNextPurchasableUnexpectedException",
        ba = "NewCreditConversionGetNextPurchasableConversion",
        ga = "NewCreditConversionGetNextPurchasableProductPurchase",
        ha = "ProcessPaymentRequestFailedStatusCode",
        ya = "ProcessPaymentNextStep",
        Sa = "ProcessPaymentNotSuccessful",
        Ea = "ProcessPaymentNotSuccessful",
        wa = "ProcessPaymentUnexpectedException",
        Ca = "ConversionCancelClicked",
        xa = "ProductPurchaseCancelClicked",
        Aa = {
          common: ["CommonUI.Controls", "CommonUI.Features"],
          feature: "Purchasing.RedeemGameCard",
        },
        Na = function (e, i, c, u) {
          return new (c = c || Promise)(function (n, t) {
            function r(e) {
              try {
                o(u.next(e));
              } catch (e) {
                t(e);
              }
            }
            function a(e) {
              try {
                o(u.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value) instanceof c
                    ? t
                    : new c(function (e) {
                        e(t);
                      })
                  ).then(r, a);
            }
            o((u = u.apply(e, i || [])).next());
          });
        },
        Ta = function (n, r) {
          var a,
            o,
            i,
            c = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
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
                for (; c; )
                  try {
                    if (
                      ((a = 1),
                      o &&
                        (i =
                          2 & t[0]
                            ? o.return
                            : t[0]
                              ? o.throw || ((i = o.return) && i.call(o), 0)
                              : o.next) &&
                        !(i = i.call(o, t[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (t = [2 & t[0], i.value]), t[0])) {
                      case 0:
                      case 1:
                        i = t;
                        break;
                      case 4:
                        return c.label++, { value: t[1], done: !1 };
                      case 5:
                        c.label++, (o = t[1]), (t = [0]);
                        continue;
                      case 7:
                        (t = c.ops.pop()), c.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = 0 < (i = c.trys).length && i[i.length - 1]) &&
                          (6 === t[0] || 2 === t[0])
                        ) {
                          c = 0;
                          continue;
                        }
                        if (
                          3 === t[0] &&
                          (!i || (t[1] > i[0] && t[1] < i[3]))
                        ) {
                          c.label = t[1];
                          break;
                        }
                        if (6 === t[0] && c.label < i[1]) {
                          (c.label = i[1]), (i = t);
                          break;
                        }
                        if (i && c.label < i[2]) {
                          (c.label = i[2]), c.ops.push(t);
                          break;
                        }
                        i[2] && c.ops.pop(), c.trys.pop();
                        continue;
                    }
                    t = r.call(n, c);
                  } catch (e) {
                    (t = [6, e]), (o = 0);
                  } finally {
                    a = i = 0;
                  }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
              })([t, e]);
            };
          }
        },
        Oa = "ar-",
        Ra = "en-",
        Ia = ["JPY"],
        Ua = {
          PRICE_DATA_NOT_VALID: (l = "PriceTag") + "DataNotValid",
          NUMBER_FORMAT_LOCALE_EXCEPTION: l + "NumberFormatLocaleException",
          ARABIC_LOCALE_TRIGGERED: l + "ArabicLocale",
        };
      function ka(e) {
        var t = e.amount,
          n = e.currencyCode,
          r = e.tagClassName,
          e = t < 0,
          a = Math.abs(t),
          o = "" + a + n,
          i = O()("price-tag", r);
        try {
          var c = (u = Intl.NumberFormat().resolvedOptions().locale).startsWith(
              Oa,
            )
              ? ((0, At.fireEvent)(Ua.ARABIC_LOCALE_TRIGGERED),
                u.replace(Oa, Ra))
              : u,
            u = { style: "currency", currency: n, notation: "standard" };
          1e4 <= a &&
            !Ia.includes(n) &&
            ((u.minimumFractionDigits = 0),
            (u.maximumFractionDigits = 2),
            (u.maximumSignificantDigits = 21),
            (u.notation = "compact")),
            i.split(" ").includes("navbar-compact") &&
              (u.maximumSignificantDigits = 4),
            (o = Intl.NumberFormat(c, u).format(a));
        } catch (e) {
          (0, At.fireEvent)(Ua.NUMBER_FORMAT_LOCALE_EXCEPTION);
        }
        return q().createElement(
          "div",
          {
            className:
              "d-flex-inline gap-1 justify-content-start align-items-center",
          },
          e && q().createElement("span", { className: i }, "-"),
          q().createElement("span", { className: i }, o),
        );
      }
      ka.propTypes = {
        amount: f().number.isRequired,
        currencyCode: f().string.isRequired,
      };
      var Pa,
        La,
        ja = ka,
        Da = function (e, i, c, u) {
          return new (c = c || Promise)(function (n, t) {
            function r(e) {
              try {
                o(u.next(e));
              } catch (e) {
                t(e);
              }
            }
            function a(e) {
              try {
                o(u.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value) instanceof c
                    ? t
                    : new c(function (e) {
                        e(t);
                      })
                  ).then(r, a);
            }
            o((u = u.apply(e, i || [])).next());
          });
        },
        _a = function (n, r) {
          var a,
            o,
            i,
            c = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
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
                for (; c; )
                  try {
                    if (
                      ((a = 1),
                      o &&
                        (i =
                          2 & t[0]
                            ? o.return
                            : t[0]
                              ? o.throw || ((i = o.return) && i.call(o), 0)
                              : o.next) &&
                        !(i = i.call(o, t[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (t = [2 & t[0], i.value]), t[0])) {
                      case 0:
                      case 1:
                        i = t;
                        break;
                      case 4:
                        return c.label++, { value: t[1], done: !1 };
                      case 5:
                        c.label++, (o = t[1]), (t = [0]);
                        continue;
                      case 7:
                        (t = c.ops.pop()), c.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = 0 < (i = c.trys).length && i[i.length - 1]) &&
                          (6 === t[0] || 2 === t[0])
                        ) {
                          c = 0;
                          continue;
                        }
                        if (
                          3 === t[0] &&
                          (!i || (t[1] > i[0] && t[1] < i[3]))
                        ) {
                          c.label = t[1];
                          break;
                        }
                        if (6 === t[0] && c.label < i[1]) {
                          (c.label = i[1]), (i = t);
                          break;
                        }
                        if (i && c.label < i[2]) {
                          (c.label = i[2]), c.ops.push(t);
                          break;
                        }
                        i[2] && c.ops.pop(), c.trys.pop();
                        continue;
                    }
                    t = r.call(n, c);
                  } catch (e) {
                    (t = [6, e]), (o = 0);
                  } finally {
                    a = i = 0;
                  }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
              })([t, e]);
            };
          }
        },
        Ma = (l =
          (($ = (0, A.createModal)()),
          (Pa = $[0]),
          [
            function (e) {
              var t = e.availableBalance,
                n = e.totalBalanceDue,
                r = e.currencyCode,
                a = e.numberOfPurchase,
                o = e.robuxAmountInPackage,
                i = e.loading,
                c = e.onNeutral,
                u = e.onPurchase,
                e = e.translate;
              return q().createElement(Pa, {
                id: "purchase-product-modal",
                title: e(ra),
                body: q().createElement(
                  "div",
                  {
                    className:
                      "d-flex justify-content-center flex-direction-column text-center",
                  },
                  q().createElement(
                    "div",
                    { className: "purchase-prompt" },
                    1 === a
                      ? e(aa) ||
                          "Largest package you can buy with your available credit:"
                      : e(oa),
                  ),
                  q().createElement(
                    "div",
                    { className: "purchase-logo" },
                    q().createElement("div", {
                      className: O()(
                        "robux-product-logo",
                        "margin-auto",
                        "robux-graphic",
                        "robux-" + o,
                      ),
                    }),
                    q().createElement(
                      "div",
                      null,
                      q().createElement("span", {
                        className: "icon-robux-16x16",
                      }),
                      q().createElement("span", { className: "text-robux" }, o),
                    ),
                  ),
                  q().createElement(
                    "div",
                    {
                      className:
                        "purchase-summary d-flex flex-direction-column text-left",
                    },
                    q().createElement(
                      "div",
                      {
                        className:
                          "available-credit d-flex justify-content-between",
                      },
                      q().createElement("span", null, e($r)),
                      q().createElement(ja, { amount: t, currencyCode: r }),
                    ),
                    q().createElement(
                      "div",
                      {
                        className: "balance-due d-flex justify-content-between",
                      },
                      q().createElement("span", null, e(Yr)),
                      q().createElement(ja, {
                        amount: -1 * n,
                        currencyCode: r,
                      }),
                    ),
                    q().createElement("div", { className: "rbx-divider" }),
                    q().createElement(
                      "div",
                      {
                        className:
                          "credit-after-transaction d-flex justify-content-between",
                      },
                      q().createElement("span", null, e(Jr)),
                      q().createElement(ja, { amount: t - n, currencyCode: r }),
                    ),
                  ),
                ),
                neutralButtonText: e(ea),
                actionButtonText: e(Zr),
                onNeutral: c,
                onAction: u,
                loading: i,
                actionButtonShow: !0,
              });
            },
            $[1],
          ]))[0],
        Ba = l[1],
        qa = (l =
          (($ = (0, A.createModal)()),
          (La = $[0]),
          [
            function (e) {
              var t = e.remainingCreditBalance,
                n = e.currencyCode,
                r = e.robuxConversionAmount,
                a = e.loading,
                o = e.numberOfPurchase,
                i = e.onConvert,
                c = e.onNeutral,
                e = e.translate,
                r = q().createElement("div", {
                  className: "text-center conversion-message",
                  dangerouslySetInnerHTML: {
                    __html:
                      1 === o
                        ? e(ca, {
                            robuxAmount:
                              '<br /><span class="icon-robux-16x16"></span>' +
                              r,
                          })
                        : e(ia, {
                            remainingCreditBalance:
                              "<span class='fiat-price-tag ml-1' data-amount=" +
                              t +
                              " data-currency-code=" +
                              n +
                              "></span>",
                            lineBreaker: "<br />",
                            robuxConversionAmount:
                              '<span class="icon-robux-16x16"></span>' + r,
                          }),
                  },
                  ref: function () {
                    window.dispatchEvent(
                      new CustomEvent("price-tag:render", {
                        detail: { targetSelector: ".fiat-price-tag" },
                      }),
                    );
                  },
                });
              return q().createElement(La, {
                id: "convert-credit-modal",
                title: e(na),
                body: r,
                neutralButtonText: e(ea),
                actionButtonText: e(ta),
                onNeutral: c,
                onAction: i,
                loading: a,
                actionButtonShow: !0,
              });
            },
            $[1],
          ]))[0],
        Fa = l[1],
        Ga = function (e) {
          function a() {
            d.warning(f(fa) || "Something went wrong! Please try again later."),
              Ba.close(),
              Fa.close(),
              (window.location.href =
                F.urlService.getAbsoluteUrl("/upgrades/robux"));
          }
          function o(e, t) {
            (t = 0 === t || null == t),
              e
                ? d.success(f(t ? sa : ua))
                : d.warning(
                    f(t ? da : la) ||
                      f(fa) ||
                      "Something went wrong! Please try again later.",
                  );
          }
          function i() {
            return Da(t, void 0, void 0, function () {
              var t;
              return _a(this, function (e) {
                switch (e.label) {
                  case 0:
                    w(!0), (e.label = 1);
                  case 1:
                    return e.trys.push([1, 3, 4, 5]), [4, zr()];
                  case 2:
                    return 200 !== (t = e.sent()).status
                      ? (d.warning(
                          f(fa) ||
                            "Something went wrong! Please try again later.",
                        ),
                        w(!1),
                        (0, At.fireEvent)(ma),
                        (0, At.fireEvent)("" + ma + t.status),
                        [2])
                      : 0 === (t = t.data).creditBalance ||
                          (0 === t.productId && 0 === t.robuxConversionAmount)
                        ? (w(!1),
                          Fa.close(),
                          Ba.close(),
                          r(t.creditBalance),
                          (0, At.fireEvent)(pa),
                          [2])
                        : (r(t.creditBalance),
                          u(t.currencyCode),
                          s(t.robuxConversionAmount),
                          p(t.productId),
                          h(t.balanceDue),
                          S(t.robuxAmountProductGrant),
                          0 === t.productId
                            ? (Fa.open(), Ba.close(), (0, At.fireEvent)(ba))
                            : (Ba.open(), (0, At.fireEvent)(ga)),
                          [3, 5]);
                  case 3:
                    return e.sent(), a(), (0, At.fireEvent)(va), [3, 5];
                  case 4:
                    return w(!1), [7];
                  case 5:
                    return [2];
                }
              });
            });
          }
          var t = this,
            n = e.creditBalance,
            r = e.setCreditBalance,
            c = e.currencyCode,
            u = e.setCurrencyCode,
            l = e.convertedRobuxAmount,
            s = e.setConvertedRobuxAmount,
            d = e.systemFeedbackService,
            f = e.translate,
            m = (e = (0, B.useState)(0))[0],
            p = e[1],
            v = (e = (0, B.useState)(0))[0],
            b = e[1],
            g = (e = (0, B.useState)(0))[0],
            h = e[1],
            y = (e = (0, B.useState)(0))[0],
            S = e[1],
            E = (e = (0, B.useState)(!1))[0],
            w = e[1],
            C = function () {
              return Da(t, void 0, void 0, function () {
                var t, n, r;
                return _a(this, function (e) {
                  switch (e.label) {
                    case 0:
                      w(!0), (e.label = 1);
                    case 1:
                      return e.trys.push([1, 6, 7, 8]), [4, Xr(m)];
                    case 2:
                      return 200 !== (t = e.sent()).status
                        ? (o(!1, m),
                          w(!1),
                          (0, At.fireEvent)(ha),
                          (0, At.fireEvent)("" + ha + t.status),
                          [2])
                        : ((n = t.data),
                          o(n.isSuccess, m),
                          n.isSuccess &&
                          null !== (r = n.providerPayload) &&
                          void 0 !== r &&
                          r.IsSuccessful
                            ? [4, i()]
                            : [3, 4]);
                    case 3:
                      return e.sent(), b(v + 1), (0, At.fireEvent)(ya), [3, 5];
                    case 4:
                      Ba.close(),
                        Fa.close(),
                        (0, At.fireEvent)(Sa),
                        (e.label = 5);
                    case 5:
                      return (
                        (0, At.fireEvent)(
                          Ea + n.providerPayload.ResponseMessage,
                        ),
                        [3, 8]
                      );
                    case 6:
                      return e.sent(), a(), (0, At.fireEvent)(wa), [3, 8];
                    case 7:
                      return w(!1), [7];
                    case 8:
                      return [2];
                  }
                });
              });
            };
          return [
            (0, V.withTranslations)(function () {
              function e() {
                0 === m
                  ? (Fa.close(), (0, At.fireEvent)(Ca))
                  : (Ba.close(), (0, At.fireEvent)(xa));
              }
              return q().createElement(
                B.Fragment,
                null,
                q().createElement(Ma, {
                  availableBalance: n,
                  totalBalanceDue: g,
                  currencyCode: c,
                  numberOfPurchase: v,
                  robuxAmountInPackage: y,
                  onPurchase: function () {
                    C();
                  },
                  onNeutral: e,
                  loading: E,
                  translate: f,
                }),
                q().createElement(qa, {
                  remainingCreditBalance: n,
                  currencyCode: c,
                  robuxConversionAmount: l,
                  numberOfPurchase: v,
                  onConvert: function () {
                    C();
                  },
                  onNeutral: e,
                  loading: E,
                  translate: f,
                }),
              );
            }, Aa),
            function () {
              b(0), i(), b(1);
            },
          ];
        };
      function Va(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Ka(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Ka(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Ka(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Wa = m,
        Ha = (m = Va((0, A.createSystemFeedback)(), 2))[0],
        Qa = m[1];
      function za(e) {
        function t() {
          o &&
            (f(!1),
            se(i)
              .then(
                function (e) {
                  e = e.data;
                  v(e.robux);
                },
                function () {
                  N(r(j));
                },
              )
              .finally(function () {
                f(!0);
              }));
        }
        function n() {
          o &&
            ye().then(function (e) {
              var t = e.data,
                e =
                  "true" !==
                  (function (e) {
                    var t = xr(e);
                    switch (e) {
                      case wr.VIRTUAL_ITEM:
                      case wr.UPDATE:
                        return Se.localStorageService.getLocalStorage(t);
                      default:
                        return "";
                    }
                  })(wr.UPDATE);
              t.is_virtual_item_available && e && x(wr.UPDATE);
            });
        }
        var r = e.translate,
          a = e.toggleUniverseSearch,
          o = L.authenticatedUser.isAuthenticated,
          i = L.authenticatedUser.id,
          c = Va((0, B.useState)(0), 2),
          u = c[0],
          l = c[1],
          s = Va((0, B.useState)(!1), 2),
          d = s[0],
          f = s[1],
          m = Va((0, B.useState)(0), 2),
          p = m[0],
          v = m[1],
          b = Va((0, B.useState)(!1), 2),
          g = b[0],
          h = b[1],
          y = Va((0, B.useState)(!0), 2),
          S = y[0],
          E = y[1],
          w = Va((0, B.useState)(null), 2),
          C = w[0],
          x = w[1],
          A = Va((0, B.useState)(""), 2),
          e = A[0],
          N = A[1],
          c = Va((0, B.useState)(D.control), 2),
          s = c[0],
          T = c[1],
          m = Va((0, B.useState)(null), 2),
          b = m[0],
          O = m[1],
          y = Va((0, B.useState)(null), 2),
          w = y[0],
          R = y[1],
          A = Va((0, B.useState)(""), 2),
          c = A[0],
          I = A[1],
          m = Va((0, B.useState)(!1), 2),
          y = m[0],
          U = m[1],
          A = Va((0, B.useState)(0), 2),
          m = A[0],
          A = A[1],
          m = Va(
            Ga({
              creditBalance: b,
              setCreditBalance: O,
              currencyCode: w,
              setCurrencyCode: R,
              convertedRobuxAmount: m,
              setConvertedRobuxAmount: A,
              systemFeedbackService: Qa,
              translate: r,
            }),
            2,
          ),
          A = m[0],
          k = m[1];
        (0, B.useEffect)(function () {
          window.addEventListener(
            "navigation-update-user-currency",
            function (e) {
              t();
            },
          );
        }, []),
          (0, B.useEffect)(
            function () {
              if (o) {
                Wa().then(l),
                  t(),
                  o &&
                    de().then(
                      function (e) {
                        e = e.data;
                        h(e.shouldShowVng), E(e.notificationsCanAccessStream);
                      },
                      function () {
                        N(r(j));
                      },
                    ),
                  n(),
                  ve()
                    .then(
                      function (e) {
                        var t = e.data;
                        null === t.creditDisplayConfig ||
                        null === t.creditBalance ||
                        null === t.currencyCode
                          ? T(D.control)
                          : T(
                              null !== (e = t.creditDisplayConfig) &&
                                void 0 !== e
                                ? e
                                : D.control,
                            ),
                          O(t.creditBalance),
                          R(t.currencyCode);
                      },
                      function () {
                        I(r(j));
                      },
                    )
                    .finally(function () {
                      U(!0);
                    });
                try {
                  Se.localStorageService.getLocalStorage(
                    _.accountSwitchedFlag,
                  ) &&
                    (Qa.success(
                      r(_.accountSwitchedMessage, {
                        accountName: L.authenticatedUser.name,
                      }),
                      0,
                      5e3,
                    ),
                    Se.localStorageService.removeLocalStorage(
                      _.accountSwitchedFlag,
                    ));
                } catch (e) {}
              }
            },
            [o, i],
          );
        var P = q().createElement(
          "li",
          { id: "navbar-stream", className: "navbar-icon-item navbar-stream" },
          q().createElement(
            "span",
            { className: "nav-robux-icon rbx-menu-item" },
            q().createElement("span", {
              id: "notification-stream-icon-container",
              "notification-stream-indicator": "true",
            }),
          ),
        );
        try {
          Nn().module("notificationStreamIcon"),
            Nn().module("notificationStream"),
            (P = q().createElement(Fn, null));
        } catch (e) {
          console.log(e);
        }
        return q().createElement(
          "ul",
          { className: "nav navbar-right rbx-navbar-icon-group" },
          q().createElement(Ha, null),
          q().createElement(Qr, null),
          q().createElement(Hr, { translate: r, toggleUniverseSearch: a }),
          S && P,
          q().createElement(Kr, {
            translate: r,
            robuxAmount: p,
            robuxError: e,
            creditAmount: b,
            currencyCode: w,
            creditError: c,
            creditDisplayConfig: s,
            isEligibleForVng: g,
            isExperimentCallDone: y,
            isGetCurrencyCallDone: d,
            openConvertCreditModal: function () {
              k();
            },
            robuxBadgeType: C,
          }),
          q().createElement(Er, { translate: r, accountNotificationCount: u }),
          q().createElement(A, null),
        );
      }
      za.propTypes = {
        translate: f().func.isRequired,
        toggleUniverseSearch: f().func.isRequired,
      };
      var Xa = (0, V.withTranslations)(za, {
        common: ["CommonUI.Features", "Common.AlertsAndOptions"],
        feature: "Purchasing.RedeemGameCard",
      });
      function $a(e, t, n, r, a, o, i) {
        try {
          var c = e[o](i),
            u = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function Ya(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Ja(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Ja(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Ja(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Za = r.getSignupUrl,
        eo = r.getIsVNGLandingRedirectEnabled;
      function to(e) {
        var t = e.translate,
          n = Ya((0, B.useState)(!1), 2),
          e = n[0],
          r = n[1],
          a = Ya(
            null !==
              (n =
                null === G.AccountSwitcherService ||
                void 0 === G.AccountSwitcherService
                  ? void 0
                  : G.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()) &&
              void 0 !== n
              ? n
              : [!1],
            1,
          )[0];
        return (
          (0, B.useEffect)(function () {
            try {
              (0,
              Se.dataStores.authIntentDataStore.saveGameIntentFromCurrentUrl)();
            } catch (e) {
              console.error("Failed to save game intent from current url", e);
            }
          }, []),
          (0, B.useEffect)(function () {
            (function () {
              var c,
                e =
                  ((c = regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), eo();
                            case 3:
                              (t = e.sent), r(!t), (e.next = 10);
                              break;
                            case 7:
                              (e.prev = 7), (e.t0 = e.catch(0)), r(!0);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]],
                    );
                  })),
                  function () {
                    var e = this,
                      i = arguments;
                    return new Promise(function (t, n) {
                      var r = c.apply(e, i);
                      function a(e) {
                        $a(r, t, n, a, o, "next", e);
                      }
                      function o(e) {
                        $a(r, t, n, a, o, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []),
          e &&
            q().createElement(
              "li",
              { className: "signup-button-container" },
              q().createElement(
                A.Link,
                {
                  onClick: function () {
                    window.location.href = Za(a);
                  },
                  url: Za(a),
                  id: "sign-up-button",
                  className:
                    "rbx-navbar-signup btn-growth-sm nav-menu-title signup-button",
                },
                t("Label.sSignUp"),
              ),
            )
        );
      }
      function no() {
        window.location.href = oo();
      }
      to.propTypes = { translate: f().func.isRequired };
      var ro = to,
        ao = r.isLoginLinkAvailable,
        oo = r.getLoginLinkUrl;
      function io(e) {
        e = e.translate;
        return q().createElement(
          "li",
          { className: "login-action" },
          ao() &&
            q().createElement(
              A.Link,
              {
                onClick: no,
                url: oo(),
                className:
                  "rbx-navbar-login btn-secondary-sm nav-menu-title rbx-menu-item",
              },
              e("Label.sLogin"),
            ),
        );
      }
      io.propTypes = { translate: f().func.isRequired };
      var co = io;
      function uo() {
        return (uo =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n,
                r = arguments[t];
              for (n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function lo(e, t) {
        if (null == e) return {};
        var n,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), 0 <= t.indexOf(n) || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols)
          for (
            var a = Object.getOwnPropertySymbols(e), o = 0;
            o < a.length;
            o++
          )
            (n = a[o]),
              0 <= t.indexOf(n) ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        return r;
      }
      function so(e) {
        var t = e.translate,
          n = e.toggleUniverseSearch,
          e = lo(e, ["translate", "toggleUniverseSearch"]);
        return L.authenticatedUser.isAuthenticated
          ? q().createElement(
              "div",
              { className: "navbar-right rbx-navbar-right" },
              q().createElement(
                Xa,
                uo({ translate: t, toggleUniverseSearch: n }, e),
              ),
            )
          : q().createElement(
              "div",
              { className: "navbar-right rbx-navbar-right" },
              q().createElement(
                "ul",
                { className: "nav navbar-right rbx-navbar-right-nav" },
                q().createElement(ro, { translate: t }),
                q().createElement(co, { translate: t }),
                q().createElement(Hr, {
                  translate: t,
                  toggleUniverseSearch: n,
                }),
              ),
            );
      }
      so.propTypes = {
        translate: f().func.isRequired,
        toggleUniverseSearch: f().func.isRequired,
      };
      var fo = so;
      function mo() {
        return (mo =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n,
                r = arguments[t];
              for (n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function po(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return vo(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return vo(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function vo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var bo = (0, V.withTranslations)(function (e) {
        var t = Me(),
          n = po((0, B.useState)(t), 2),
          r = n[0],
          a = n[1],
          t = (n = po((0, B.useState)(!t), 2))[0],
          o = n[1],
          i = (0, B.useCallback)(
            function () {
              var e = Me();
              r !== e && (a(e), o(!e));
            },
            [r],
          );
        return (
          (0, B.useEffect)(
            function () {
              return (
                window.addEventListener("resize", i),
                function () {
                  window.removeEventListener("resize", i);
                }
              );
            },
            [i],
          ),
          q().createElement(
            q().Fragment,
            null,
            q().createElement(An, mo({ isUniverseSearchShown: t }, e)),
            q().createElement(
              fo,
              mo(
                {
                  toggleUniverseSearch: function () {
                    o(function (e) {
                      return !e;
                    });
                  },
                },
                e,
              ),
            ),
          )
        );
      }, s);
      function go(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return ho(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ho(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ho(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function yo(e) {
        function t(e) {
          Se.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
            c.WEB_ROBUX_PURCHASE,
            !1,
            u.NAVIGATION_ROBUX_TEXT,
            s.USER_INPUT,
            e,
          );
        }
        var n = e.translate,
          r = W.buyRobuxUrl,
          a = r.buyRobux,
          o = r.buyRobuxOnVng,
          i = L.authenticatedUser.isAuthenticated,
          c = Se.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT,
          u = Se.paymentFlowAnalyticsService.ENUM_VIEW_NAME,
          l = Se.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE,
          s = Se.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE,
          d = go((0, B.useState)(!1), 2),
          e = d[0],
          f = d[1],
          r = go((0, B.useState)(!1), 2),
          d = r[0],
          m = r[1],
          p = (0, B.useRef)(new Map());
        (0, B.useEffect)(
          function () {
            var t = p.current,
              n = o.cacheKey;
            t.has(n)
              ? f(t.get(n))
              : i &&
                de().then(function (e) {
                  e = e.data.shouldShowVng;
                  f(e), t.set(n, e);
                });
          },
          [o, o.cacheKey, i],
        );
        return q().createElement(
          "div",
          null,
          e
            ? q().createElement(
                q().Fragment,
                null,
                q().createElement(qr, {
                  isOpen: d,
                  onClose: function () {
                    m(!1);
                  },
                  onContinue: function () {
                    t(l.CONTINUE_TO_VNG),
                      he().then(
                        function (e) {
                          e = e.data.vngShopRedirectUrl;
                          window.open(e || o.url, "_blank").focus();
                        },
                        function () {
                          window.open(o.url, "_blank").focus();
                        },
                      ),
                      m(!1);
                  },
                }),
                q().createElement(
                  A.Link,
                  {
                    cssClasses:
                      "font-header-2 nav-menu-title text-header robux-menu-btn",
                    onClick: function () {
                      t(l.EXTERNAL_LINK_MODAL), m(!0);
                    },
                  },
                  n(a.name),
                ),
              )
            : q().createElement(
                A.Link,
                {
                  cssClasses:
                    "font-header-2 nav-menu-title text-header robux-menu-btn",
                  url: a.url,
                  onClick: function () {
                    return t(l.BUY_ROBUX);
                  },
                },
                n(a.name),
              ),
        );
      }
      yo.propTypes = { translate: f().func.isRequired };
      var So = (0, V.withTranslations)(yo, s),
        m = function () {
          var e = document.getElementById("header-develop-md-link"),
            t = document.getElementById("header-develop-sm-link");
          null !== e &&
            (e.href = "https://create.".concat(G.EnvironmentUrls.domain, "/")),
            null !== t &&
              (t.href = "https://create.".concat(
                G.EnvironmentUrls.domain,
                "/",
              ));
        },
        Eo = n;
      function wo(e) {
        var e = e.translate,
          t = document.getElementById(Eo);
        return q().createElement(
          A.Button,
          {
            id: "skip-to-main-content",
            size: A.Button.sizes.extraSmall,
            variant: A.Button.variants.primary,
            onClick: function () {
              return t.focus();
            },
          },
          e("Action.SkipToMainContent") || "Skip to main content",
        );
      }
      wo.propTypes = { translate: f().func.isRequired };
      var Co = wo,
        xo = u,
        Ao = L.authenticatedUser.isAuthenticated;
      function No(e) {
        var t = A.IconButton.iconTypes;
        return q().createElement(
          B.Fragment,
          null,
          q().createElement(Co, e),
          Ao &&
            q().createElement(A.IconButton, {
              className: "menu-button",
              iconType: t.navigation,
              iconName: "nav-menu",
              onClick: function () {
                document.dispatchEvent(new CustomEvent(xo.name));
              },
            }),
        );
      }
      No.propTypes = {};
      var To = (0, V.withTranslations)(No, s);
      function Oo(t, e) {
        var n,
          r = Object.keys(t);
        return (
          Object.getOwnPropertySymbols &&
            ((n = Object.getOwnPropertySymbols(t)),
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
            r.push.apply(r, n)),
          r
        );
      }
      function Ro(r) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Oo(Object(a), !0).forEach(function (e) {
                var t, n;
                (t = r),
                  (e = a[(n = e)]),
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
              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
              : Oo(Object(a)).forEach(function (e) {
                  Object.defineProperty(
                    r,
                    e,
                    Object.getOwnPropertyDescriptor(a, e),
                  );
                });
        }
        return r;
      }
      jo(74);
      var u = r.logoutAndRedirect,
        s = r.getIsVNGLandingRedirectEnabled,
        r = r.navigateToLoginWithRedirect,
        Io = "right-navigation-header",
        Uo = "left-navigation-container",
        ko = "header-menu-icon",
        Po = "navigation-robux-container",
        Lo = "navigation-robux-mobile-container";
      (t().NavigationService = Ro(
        Ro({}, t().NavigationService),
        {},
        {
          logoutAndRedirect: u,
          getIsVNGLandingRedirectEnabled: s,
          navigateToLoginWithRedirect: r,
        },
      )),
        m(),
        (0, F.ready)(function () {
          document.getElementById(ko) &&
            (0, e.render)(
              q().createElement(To, null),
              document.getElementById(ko),
            ),
            document.getElementById(Po) &&
              (0, e.render)(
                q().createElement(So, null),
                document.getElementById(Po),
              ),
            document.getElementById(Lo) &&
              (0, e.render)(
                q().createElement(So, null),
                document.getElementById(Lo),
              ),
            document.getElementById(Io) &&
              (0, e.render)(
                q().createElement(bo, null),
                document.getElementById(Io),
              ),
            document.getElementById(Uo) &&
              (0, e.render)(
                q().createElement(xt, null),
                document.getElementById(Uo),
              );
        });
    })();
})();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/f3ea61199ebde5a844040eaeb84332fd-navigation.bundle.min.js.map

/* Bundle detector */
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("Navigation");
