!(function () {
  "use strict";
  var e = Roblox,
    t = CoreUtilities,
    n = 3e4,
    r = [
      "click",
      "dblclick",
      "focus",
      "hover",
      "keypress",
      "mousedown",
      "mouseenter",
      "mouseover",
      "scroll",
      "touchmove",
      "touchstart",
    ],
    o = ["blur"],
    i = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function u(e) {
          try {
            c(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            c(r.throw(e));
          } catch (e) {
            i(e);
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
                  })).then(u, a);
        }
        c((r = r.apply(e, t || [])).next());
      });
    },
    u = function (e, t) {
      var n,
        r,
        o,
        i,
        u = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; u; )
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
                    return u.label++, { value: i[1], done: !1 };
                  case 5:
                    u.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = u.ops.pop()), u.trys.pop();
                    continue;
                  default:
                    if (
                      !((o = u.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
                    ) {
                      u = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      u.label = i[1];
                      break;
                    }
                    if (6 === i[0] && u.label < o[1]) {
                      (u.label = o[1]), (o = i);
                      break;
                    }
                    if (o && u.label < o[2]) {
                      (u.label = o[2]), u.ops.push(i);
                      break;
                    }
                    o[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                i = t.call(e, u);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, a]);
        };
      }
    };
  var a = function () {
      var n;
      return i(this, void 0, void 0, function () {
        var r, o;
        return u(this, function (i) {
          switch (i.label) {
            case 0:
              (r = e.EnvironmentUrls.apiGatewayUrl), (i.label = 1);
            case 1:
              return (
                i.trys.push([1, 3, , 4]),
                [
                  4,
                  t.httpService.post(
                    {
                      url: r + "/user-heartbeats-api/pulse",
                      withCredentials: !0,
                    },
                    {
                      clientSideTimestampEpochMs: Date.now(),
                      sessionInfo: {
                        sessionId:
                          ((u = /sessionid=([a-f0-9-]{36})/.exec(
                            document.cookie,
                          )),
                          u && u.length >= 2 ? u[1] : "unknown"),
                      },
                      locationInfo: {
                        websiteLocationInfo: {
                          url:
                            null === (n = window.location) || void 0 === n
                              ? void 0
                              : n.href,
                        },
                      },
                    },
                  ),
                ]
              );
            case 2:
              return i.sent(), [3, 4];
            case 3:
              return (o = i.sent()), console.error(o), [3, 4];
            case 4:
              return [2];
          }
          var u;
        });
      });
    },
    c = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function u(e) {
          try {
            c(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            c(r.throw(e));
          } catch (e) {
            i(e);
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
                  })).then(u, a);
        }
        c((r = r.apply(e, t || [])).next());
      });
    },
    l = function (e, t) {
      var n,
        r,
        o,
        i,
        u = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; u; )
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
                    return u.label++, { value: i[1], done: !1 };
                  case 5:
                    u.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = u.ops.pop()), u.trys.pop();
                    continue;
                  default:
                    if (
                      !((o = u.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
                    ) {
                      u = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      u.label = i[1];
                      break;
                    }
                    if (6 === i[0] && u.label < o[1]) {
                      (u.label = o[1]), (o = i);
                      break;
                    }
                    if (o && u.label < o[2]) {
                      (u.label = o[2]), u.ops.push(i);
                      break;
                    }
                    o[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                i = t.call(e, u);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, a]);
        };
      }
    },
    s = (function () {
      function e(e) {
        (this.isActive = !1),
          (this.intervalTimeMs = 0),
          (this.timeoutActive = !1),
          (this.intervalTimeMs = e);
      }
      return (
        (e.prototype.start = function () {
          return this.sendPulseAndSetTimeout();
        }),
        (e.prototype.onActiveEvent = function () {
          return c(this, void 0, Promise, function () {
            return l(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.timeoutActive
                    ? [3, 2]
                    : [4, this.sendPulseAndSetTimeout()];
                case 1:
                  return e.sent(), [3, 3];
                case 2:
                  (this.isActive = !0), (e.label = 3);
                case 3:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.onInactiveEvent = function () {
          this.isActive = !1;
        }),
        (e.prototype.sendPulseAndSetTimeout = function () {
          return c(this, void 0, Promise, function () {
            var e = this;
            return l(this, function (t) {
              switch (t.label) {
                case 0:
                  return (this.timeoutActive = !0), [4, a()];
                case 1:
                  return (
                    t.sent(),
                    setTimeout(function () {
                      return e.onTimeout();
                    }, this.intervalTimeMs),
                    [2]
                  );
              }
            });
          });
        }),
        (e.prototype.onTimeout = function () {
          return c(this, void 0, Promise, function () {
            return l(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.isActive
                    ? [4, this.sendPulseAndSetTimeout()]
                    : [3, 2];
                case 1:
                  return e.sent(), (this.isActive = !1), [3, 3];
                case 2:
                  (this.timeoutActive = !1), (e.label = 3);
                case 3:
                  return [2];
              }
            });
          });
        }),
        e
      );
    })(),
    f = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function u(e) {
          try {
            c(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            c(r.throw(e));
          } catch (e) {
            i(e);
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
                  })).then(u, a);
        }
        c((r = r.apply(e, t || [])).next());
      });
    },
    h = function (e, t) {
      var n,
        r,
        o,
        i,
        u = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; u; )
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
                    return u.label++, { value: i[1], done: !1 };
                  case 5:
                    u.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = u.ops.pop()), u.trys.pop();
                    continue;
                  default:
                    if (
                      !((o = u.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
                    ) {
                      u = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      u.label = i[1];
                      break;
                    }
                    if (6 === i[0] && u.label < o[1]) {
                      (u.label = o[1]), (o = i);
                      break;
                    }
                    if (o && u.label < o[2]) {
                      (u.label = o[2]), u.ops.push(i);
                      break;
                    }
                    o[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                i = t.call(e, u);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, a]);
        };
      }
    };
  var p = {
      loadGuacConfig: function () {
        var r, o;
        return f(this, void 0, Promise, function () {
          var i, u, a, c;
          return h(this, function (l) {
            switch (l.label) {
              case 0:
                (i = e.EnvironmentUrls.apiGatewayUrl), (l.label = 1);
              case 1:
                return (
                  l.trys.push([1, 3, , 4]),
                  [
                    4,
                    t.httpService.get({
                      url:
                        i +
                        "/universal-app-configuration/v1/behaviors/user-heartbeats/content",
                    }),
                  ]
                );
              case 2:
                return (
                  (u = l.sent()),
                  (a = null == u ? void 0 : u.data)
                    ? [
                        2,
                        {
                          isEnabled: Boolean(a.isEnabled),
                          rolloutPercentage:
                            null !== (r = a.rolloutPercentage) && void 0 !== r
                              ? r
                              : 0,
                          intervalTimeMs:
                            null !== (o = a.intervalTimeMs) && void 0 !== o
                              ? o
                              : n,
                        },
                      ]
                    : [
                        2,
                        {
                          isEnabled: !1,
                          rolloutPercentage: 0,
                          intervalTimeMs: n,
                        },
                      ]
                );
              case 3:
                return (
                  (c = l.sent()),
                  console.error(c),
                  [
                    2,
                    { isEnabled: !1, rolloutPercentage: 0, intervalTimeMs: n },
                  ]
                );
              case 4:
                return [2];
            }
          });
        });
      },
    },
    v = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function u(e) {
          try {
            c(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            c(r.throw(e));
          } catch (e) {
            i(e);
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
                  })).then(u, a);
        }
        c((r = r.apply(e, t || [])).next());
      });
    },
    b = function (e, t) {
      var n,
        r,
        o,
        i,
        u = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function a(i) {
        return function (a) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; u; )
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
                    return u.label++, { value: i[1], done: !1 };
                  case 5:
                    u.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = u.ops.pop()), u.trys.pop();
                    continue;
                  default:
                    if (
                      !((o = u.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
                    ) {
                      u = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      u.label = i[1];
                      break;
                    }
                    if (6 === i[0] && u.label < o[1]) {
                      (u.label = o[1]), (o = i);
                      break;
                    }
                    if (o && u.label < o[2]) {
                      (u.label = o[2]), u.ops.push(i);
                      break;
                    }
                    o[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                i = t.call(e, u);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, a]);
        };
      }
    };
  (function () {
    return v(this, void 0, Promise, function () {
      var t, n;
      return b(this, function (i) {
        switch (i.label) {
          case 0:
            return [4, p.loadGuacConfig()];
          case 1:
            return (t = i.sent()).isEnabled &&
              (null === e.CurrentUser || void 0 === e.CurrentUser
                ? void 0
                : e.CurrentUser.userId) &&
              parseInt(e.CurrentUser.userId, 10) % 100 < t.rolloutPercentage
              ? ((n = new s(t.intervalTimeMs)),
                r.forEach(function (e) {
                  window.addEventListener(e, function () {
                    n.onActiveEvent().catch(console.error);
                  });
                }),
                o.forEach(function (e) {
                  window.addEventListener(e, function () {
                    n.onInactiveEvent();
                  });
                }),
                [4, n.start()])
              : [3, 3];
          case 2:
            i.sent(), (i.label = 3);
          case 3:
            return [2];
        }
      });
    });
  })().catch(console.error);
})();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/075b189a3e1f306c336e0ad385d01489-presenceRegistration.bundle.min.js.map

/* Bundle detector */
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("PresenceRegistration");
