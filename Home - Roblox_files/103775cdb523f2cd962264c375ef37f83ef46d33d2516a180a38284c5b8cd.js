!(function () {
  "use strict";
  var n = {
      n: function (e) {
        var r =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(r, { a: r }), r;
      },
      d: function (e, r) {
        for (var t in r)
          n.o(r, t) &&
            !n.o(e, t) &&
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
      },
      o: function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
      },
    },
    t = Roblox,
    e = n.n(t),
    i = CoreUtilities,
    r = (CoreRobloxUtilities, t.EnvironmentUrls.apiGatewayUrl);
  function c(e, r, t, n, i, o, a) {
    try {
      var u = e[o](a),
        c = u.value;
    } catch (e) {
      return void t(e);
    }
    u.done ? r(c) : Promise.resolve(c).then(n, i);
  }
  t.EnvironmentUrls.voiceApi;
  var o = (function () {
    var u,
      e =
        ((u = regeneratorRuntime.mark(function e() {
          var r;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (r = {
                      retryable: !0,
                      withCredentials: !0,
                      url: "".concat(
                        t.EnvironmentUrls.apiGatewayUrl,
                        "/universal-app-configuration/v1/behaviors/free-communication-infographics/content",
                      ),
                    }),
                    (e.next = 3),
                    i.httpService.get(r)
                  );
                case 3:
                  return (r = e.sent), (r = r.data), e.abrupt("return", r);
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })),
        function () {
          var e = this,
            a = arguments;
          return new Promise(function (r, t) {
            var n = u.apply(e, a);
            function i(e) {
              c(n, r, t, i, o, "next", e);
            }
            function o(e) {
              c(n, r, t, i, o, "throw", e);
            }
            i(void 0);
          });
        });
    return function () {
      return e.apply(this, arguments);
    };
  })();
  e().HomePageUpsellCardService = {
    getHomePageUpsellCardVariation: function () {
      var e = {
        retryable: !1,
        withCredentials: !0,
        url: "".concat(r, "/upsellCard/type"),
      };
      return i.httpService.get(e).then(function (e) {
        return e.data;
      });
    },
    getVoicePolicy: o,
  };
})();
//# sourceMappingURL=https://js.rbxcdn.com/1792b383d438efa87749a28f5e1221e2-homePageUpsellCard.bundle.min.js.map

/* Bundle detector */
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("HomePageUpsellCard");
