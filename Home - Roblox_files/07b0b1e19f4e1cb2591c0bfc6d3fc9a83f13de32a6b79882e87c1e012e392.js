!(function () {
  "use strict";
  var t = {},
    o = {};
  function a(n) {
    var e = o[n];
    if (void 0 !== e) return e.exports;
    var r = (o[n] = { exports: {} });
    return t[n](r, r.exports, a), r.exports;
  }
  (a.d = function (t, o) {
    for (var n in o)
      a.o(o, n) &&
        !a.o(t, n) &&
        Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
  }),
    (a.o = function (t, o) {
      return Object.prototype.hasOwnProperty.call(t, o);
    }),
    (a.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.rv = function () {
      return "1.2.8";
    }),
    (a.ruid = "bundler=rspack@1.2.8");
  var n = {};
  function e(t, o) {
    (null == o || o > t.length) && (o = t.length);
    for (var a = 0, n = Array(o); a < o; a++) n[a] = t[a];
    return n;
  }
  a.r(n),
    a.d(n, {
      default: function () {
        return u;
      },
    });
  var r = function (t, o) {
    var a =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
    if ("string" == typeof t) a[t] = o;
    else {
      var n =
          (function (t) {
            if (Array.isArray(t)) return e(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, o) {
            if (t) {
              if ("string" == typeof t) return e(t, void 0);
              var a = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === a && t.constructor && (a = t.constructor.name),
                "Map" === a || "Set" === a)
              )
                return Array.from(a);
              if (
                "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              )
                return e(t, o);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })(),
        r = n.pop(),
        i = a,
        c = !0,
        s = !1,
        p = void 0;
      try {
        for (
          var l, u = n[Symbol.iterator]();
          !(c = (l = u.next()).done);
          c = !0
        ) {
          var h,
            m,
            d = l.value;
          (null !== (m = (h = i)[d]) && void 0 !== m) || (h[d] = {}),
            (i = i[d]);
        }
      } catch (t) {
        (s = !0), (p = t);
      } finally {
        try {
          c || null == u.return || u.return();
        } finally {
          if (s) throw p;
        }
      }
      i[r] = o;
    }
  };
  function i(t, o) {
    (null == o || o > t.length) && (o = t.length);
    for (var a = 0, n = Array(o); a < o; a++) n[a] = t[a];
    return n;
  }
  var c = (function (t) {
      var o,
        a = document.querySelector('meta[name="environment-meta"]');
      if (null == a ? void 0 : a.dataset.domain)
        return {
          production: "false" === a.dataset.isTestingSite,
          domainName: a.dataset.domain.split(".")[0],
          rootDomain: a.dataset.domain,
        };
      var n =
          (function (t) {
            if (Array.isArray(t)) return t;
          })((o = t.split(".").reverse())) ||
          (function (t, o) {
            var a,
              n,
              e =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
            if (null != e) {
              var r = [],
                i = !0,
                c = !1;
              try {
                for (
                  e = e.call(t);
                  !(i = (a = e.next()).done) &&
                  (r.push(a.value), r.length !== o);
                  i = !0
                );
              } catch (t) {
                (c = !0), (n = t);
              } finally {
                try {
                  i || null == e.return || e.return();
                } finally {
                  if (c) throw n;
                }
              }
              return r;
            }
          })(o, 3) ||
          (function (t, o) {
            if (t) {
              if ("string" == typeof t) return i(t, 3);
              var a = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === a && t.constructor && (a = t.constructor.name),
                "Map" === a || "Set" === a)
              )
                return Array.from(a);
              if (
                "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              )
                return i(t, o);
            }
          })(o, 3) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })(),
        e = n[0],
        r = n[1],
        c = n[2];
      if (null != e && null != r) {
        var s = "".concat(r, ".").concat(e);
        if ("roblox.com" === s || "simulprod.com" === s || "rblx.org" === s)
          return {
            production: !0,
            domainName: "roblox",
            rootDomain: "roblox.com",
          };
        if (null == c ? void 0 : c.startsWith("sitetest"))
          return {
            production: !1,
            domainName: c,
            rootDomain: "".concat(c, ".robloxlabs.com"),
          };
      }
      throw Error("Unknown environment for ".concat(t));
    })(window.location.hostname),
    s = c.production,
    p = c.domainName,
    l = c.rootDomain,
    u = {
      abtestingApiSite: "https://abtesting.".concat(l),
      accountInformationApi: "https://accountinformation.".concat(l),
      accountSettingsApi: "https://accountsettings.".concat(l),
      adConfigurationApi: "https://adconfiguration.".concat(l),
      adsApi: "https://ads.".concat(l),
      advertiseApi: "https://advertise.".concat(l),
      apiGatewayUrl: "https://apis.".concat(l),
      apiProxyUrl: "https://api.".concat(l),
      assetDeliveryApi: "https://assetdelivery.".concat(l),
      authApi: "https://auth.".concat(l),
      avatarApi: "https://avatar.".concat(l),
      badgesApi: "https://badges.".concat(l),
      billingApi: "https://billing.".concat(l),
      captchaApi: "https://captcha.".concat(l),
      catalogApi: "https://catalog.".concat(l),
      chargebackWizardApi: "https://apis.".concat(l, "/chargeback-wizard"),
      chatApi: "https://apis.".concat(l, "/platform-chat-api"),
      chatModerationApi: "https://chatmoderation.".concat(l),
      contactsApi: "https://contacts.".concat(l),
      contactsServiceApi: "https://apis.".concat(l, "/contacts-api"),
      contentStoreApi: "https://contentstore.".concat(l),
      developApi: "https://develop.".concat(l),
      domain: l,
      economyApi: "https://economy.".concat(l),
      economycreatorstatsApi: "https://economycreatorstats.".concat(l),
      engagementPayoutsApi: "https://engagementpayouts.".concat(l),
      followingsApi: "https://followings.".concat(l),
      friendsApi: "https://friends.".concat(l),
      gameInternationalizationApi: "https://gameinternationalization.".concat(
        l,
      ),
      gamesApi: "https://games.".concat(l),
      gameJoinApi: "https://gamejoin.".concat(l),
      gameUpdateNotificationsApi: "https://apis.".concat(
        l,
        "/game-update-notifications",
      ),
      groupsApi: "https://groups.".concat(l),
      groupsModerationApi: "https://groupsmoderation.".concat(l),
      helpSite: "https://en.help.".concat(l),
      inventoryApi: "https://inventory.".concat(l),
      itemConfigurationApi: "https://itemconfiguration.".concat(l),
      legacyChatApi: "https://chat.".concat(l),
      localeApi: "https://locale.".concat(l),
      localizationTablesApi: "https://localizationtables.".concat(l),
      matchmakingApi: "https://apis.".concat(l, "/matchmaking-api"),
      metricsApi: "https://metrics.".concat(l),
      midasApi: "https://midas.".concat(l),
      notificationApi: "https://notifications.".concat(l),
      passProductPurchasingApi: "https://apis.".concat(
        l,
        "/pass-product-purchasing",
      ),
      bundlesProductPurchasingApi: "https://apis.".concat(
        l,
        "/bundles-product-purchasing",
      ),
      premiumFeaturesApi: "https://premiumfeatures.".concat(l),
      presenceApi: "https://presence.".concat(l),
      privateMessagesApi: "https://privatemessages.".concat(l),
      publishApi: "https://publish.".concat(l),
      restrictedHoursServiceApi: "https://apis.".concat(
        l,
        "/restricted-hours-service",
      ),
      screenTimeApi: "https://apis.rcs.roblox.com/screen-time-api",
      shareApi: "https://share.".concat(l),
      shareLinksApi: "https://apis.".concat(l, "/sharelinks"),
      showcasesApi: "https://apis.".concat(l, "/showcases-api"),
      thumbnailsApi: "https://thumbnails.".concat(l),
      tradesApi: "https://trades.".concat(l),
      translationRolesApi: "https://translationroles.".concat(l),
      twoStepVerificationApi: "https://twostepverification.".concat(l),
      universalAppConfigurationApi: "https://apis.".concat(
        l,
        "/universal-app-configuration",
      ),
      userAgreementsServiceApi: "https://apis.".concat(l, "/user-agreements"),
      userModerationApi: "https://usermoderation.".concat(l),
      usersApi: "https://users.".concat(l),
      userSettingsApi: "https://apis.".concat(l, "/user-settings-api"),
      voiceApi: "https://voice.".concat(l),
      websiteUrl: "https://www.".concat(l),
      apiGatewayCdnUrl: s
        ? "https://apis.rbxcdn.com"
        : "https://apis.".concat(l),
      eduAuthenticationApi: s
        ? "https://auth.rblx.org"
        : "https://auth.".concat(p, ".rblx.org"),
      eduWebsiteUrl: s
        ? "https://www.rblx.org"
        : "https://www.".concat(p, ".rblx.org"),
      guildedBaseUrl: s ? "https://guilded.gg" : "https://tarobi-dev-test.com",
      vngGamesShopUrl: s
        ? "https://shop.vnggames.com/vn/game/roblox"
        : "https://sbx-shop.vnggames.com/vn/game/roblox",
      amazonStoreLink:
        "https://www.amazon.com/Roblox-Corporation/dp/B00NUF4YOA",
      amazonWebStoreLink:
        "https%3a%2f%2fwww.amazon.com%2froblox%3f%26_encoding%3dUTF8%26tag%3dr05d13-20%26linkCode%3dur2%26linkId%3d5562fc29c05b45562a86358c198356eb%26camp%3d1789%26creative%3d9325",
      appProtocolUrl: "robloxmobile://",
      appStoreLink: "https://itunes.apple.com/us/app/roblox-mobile/id431946152",
      googlePlayStoreLink:
        "https://play.google.com/store/apps/details?id=com.roblox.client&amp;hl=en",
      iosAppStoreLink:
        "https://itunes.apple.com/us/app/roblox-mobile/id431946152",
      windowsStoreLink:
        "https://www.microsoft.com/en-us/store/games/roblox/9nblgggzm6wm",
      xboxStoreLink: "https://www.microsoft.com/en-us/p/roblox/bq1tn1t79v9k",
    };
  r(["Roblox", "core-scripts", "environmentUrls"], n),
    r(["Roblox", "EnvironmentUrls"], u);
})();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/environmentUrls-fb9b3b8e4215bbcd.js.map
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("EnvironmentUrls");
