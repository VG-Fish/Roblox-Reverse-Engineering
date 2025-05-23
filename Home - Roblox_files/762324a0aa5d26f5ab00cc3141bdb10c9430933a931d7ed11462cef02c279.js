!(function () {
  "use strict";
  var e = {
      n: function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, { a: n }), n;
      },
      d: function (t, n) {
        for (var r in n)
          e.o(n, r) &&
            !e.o(t, r) &&
            Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
      },
      o: function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      },
      r: function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      },
    },
    t = {};
  e.r(t),
    e.d(t, {
      getMetadata: function () {
        return z;
      },
    });
  var n = {};
  e.r(n),
    e.d(n, {
      getEmailConfiguration: function () {
        return ee;
      },
      updateForCurrentUser: function () {
        return $;
      },
    });
  var r = {};
  e.r(r),
    e.d(r, {
      getDetailsForUniverseIds: function () {
        return oe;
      },
    });
  var o = {};
  e.r(o),
    e.d(o, {
      getMySettingsInfo: function () {
        return se;
      },
    });
  var i = {};
  e.r(i),
    e.d(i, {
      getMetadata: function () {
        return Te;
      },
      resendCode: function () {
        return _e;
      },
      sendCodeForUser: function () {
        return Ae;
      },
      validateCode: function () {
        return Ne;
      },
    });
  var a = {};
  e.r(a),
    e.d(a, {
      changeForCurrentUser: function () {
        return ge;
      },
      resetSendPrompted: function () {
        return Le;
      },
      validate: function () {
        return Me;
      },
    });
  var u = {};
  e.r(u),
    e.d(u, {
      getPhoneConfiguration: function () {
        return Be;
      },
    });
  var s = {};
  e.r(s),
    e.d(s, {
      disconnectPlaystation: function () {
        return $e;
      },
      getPlaystationConnection: function () {
        return Ze;
      },
    });
  var l = {};
  e.r(l),
    e.d(l, {
      getAllForCurrentUser: function () {
        return lt;
      },
      updateForCurrentUser: function () {
        return ct;
      },
    });
  var c = {};
  e.r(c),
    e.d(c, {
      verifyPuzzle: function () {
        return vt;
      },
    });
  var p = {};
  e.r(p),
    e.d(p, {
      getPuzzle: function () {
        return wt;
      },
      verifyPuzzle: function () {
        return Ct;
      },
    });
  var d = {};
  e.r(d),
    e.d(d, {
      generateToken: function () {
        return Ut;
      },
    });
  var f = {};
  e.r(f),
    e.d(f, {
      verifyPuzzle: function () {
        return Ht;
      },
    });
  var E = {};
  e.r(E),
    e.d(E, {
      answerQuestion: function () {
        return Jt;
      },
      getQuestion: function () {
        return jt;
      },
    });
  var m = {};
  e.r(m),
    e.d(m, {
      getSessions: function () {
        return dn;
      },
      logoutFromAllSessionsAndReauthenticate: function () {
        return En;
      },
      logoutSession: function () {
        return fn;
      },
    });
  var h = {};
  e.r(h),
    e.d(h, {
      getIconsForUniverseIds: function () {
        return Nn;
      },
    });
  var S = {};
  e.r(S),
    e.d(S, {
      deleteSecurityKey: function () {
        return Er;
      },
      disableAuthenticator: function () {
        return nr;
      },
      disableEmailTwoStepVerification: function () {
        return Zn;
      },
      disableSmsTwoStepVerification: function () {
        return lr;
      },
      enableAuthenticator: function () {
        return $n;
      },
      enableEmailTwoStepVerification: function () {
        return Xn;
      },
      enableSecurityKey: function () {
        return cr;
      },
      enableSmsTwoStepVerification: function () {
        return ar;
      },
      enableVerifyAuthenticator: function () {
        return er;
      },
      enableVerifySecurityKey: function () {
        return pr;
      },
      generateRecoveryCodes: function () {
        return ir;
      },
      generateResaleFrictionChallenge: function () {
        return br;
      },
      generateSpendFrictionChallenge: function () {
        return Nr;
      },
      generateTradeFrictionChallenge: function () {
        return Tr;
      },
      getMetadata: function () {
        return zn;
      },
      getPasskeyOptions: function () {
        return hr;
      },
      getRecoveryCodesStatus: function () {
        return or;
      },
      getResaleFrictionStatus: function () {
        return _r;
      },
      getSecurityKeyOptions: function () {
        return dr;
      },
      getSpendFrictionStatus: function () {
        return vr;
      },
      getTradeFrictionStatus: function () {
        return Ar;
      },
      getUserConfiguration: function () {
        return qn;
      },
      listSecurityKey: function () {
        return mr;
      },
      redeemResaleFrictionChallenge: function () {
        return wr;
      },
      redeemSpendFrictionChallenge: function () {
        return Or;
      },
      redeemTradeFrictionChallenge: function () {
        return yr;
      },
      retractCrossDevice: function () {
        return Pr;
      },
      retryCrossDevice: function () {
        return Cr;
      },
      sendEmailCode: function () {
        return jn;
      },
      sendSmsCode: function () {
        return ur;
      },
      verifyAuthenticatorCode: function () {
        return tr;
      },
      verifyCrossDevice: function () {
        return Rr;
      },
      verifyEmailCode: function () {
        return Jn;
      },
      verifyPasskeyCredential: function () {
        return Sr;
      },
      verifyRecoveryCode: function () {
        return rr;
      },
      verifySecurityKeyCredential: function () {
        return fr;
      },
      verifySmsCode: function () {
        return sr;
      },
    });
  var v = {};
  e.r(v),
    e.d(v, {
      getSettingsUiPolicy: function () {
        return kr;
      },
    });
  var A = {};
  e.r(A),
    e.d(A, {
      disconnectXbox: function () {
        return Gr;
      },
      getXboxConnection: function () {
        return Yr;
      },
    });
  var _ = {};
  e.r(_),
    e.d(_, {
      recordMetric: function () {
        return Xr;
      },
    });
  var N = {};
  e.r(N),
    e.d(N, {
      getPatToken: function () {
        return no;
      },
    });
  var T = {};
  e.r(T),
    e.d(T, {
      continueChallenge: function () {
        return lo;
      },
    });
  var b = {};
  e.r(b),
    e.d(b, {
      deletePasskeyBatch: function () {
        return _o;
      },
      finishPasskeyRegistration: function () {
        return Ao;
      },
      listAllCredentials: function () {
        return No;
      },
      startPasskeyRegistration: function () {
        return vo;
      },
    });
  var O = {};
  e.r(O),
    e.d(O, {
      getNativeResponse: function () {
        return Oo;
      },
      getNavigatorCredentials: function () {
        return yo;
      },
    });
  var y,
    w,
    C = Roblox,
    R = e.n(C),
    P = React,
    I = e.n(P),
    D = ReactDOM,
    U = CoreUtilities,
    g = function (e) {
      return { isError: !1, value: e };
    },
    L = g,
    M = function (e, t, n) {
      return (
        void 0 === n && (n = null),
        { isError: !0, error: e, errorRaw: t, errorStatusCode: n }
      );
    },
    k = function (e, t) {
      return e.isError ? e : g(t(e.value));
    },
    x = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    V = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    F = function (e) {
      return "object" != typeof e
        ? null
        : (function (e) {
            var t = [];
            if (!e || "object" != typeof e) return [];
            var n = e.errors;
            return n instanceof Array
              ? (n.forEach(function (e) {
                  if (e && "object" == typeof e) {
                    var n = e.code;
                    "number" == typeof n && t.push(n);
                  }
                }),
                t)
              : [];
          })(e.data)[0] || null;
    },
    W = function (e, t) {
      return null == e ? null : Object.values(e).includes(t) ? t : null;
    },
    H = function (e, t, n) {
      return x(void 0, void 0, Promise, function () {
        var r, o, i, a;
        return V(this, function (u) {
          switch (u.label) {
            case 0:
              return u.trys.push([0, 2, , 3]), [4, e];
            case 1:
              return (
                (r = u.sent()),
                void 0 !== n ? [2, L(n(r.data))] : [2, L(r.data)]
              );
            case 2:
              return (
                (o = u.sent()),
                (i = F(o)),
                (a = (function (e) {
                  if ("object" != typeof e || null === e) return null;
                  var t = e.status || null;
                  return "number" != typeof t ? null : t;
                })(o)),
                [2, M(W(t, i), o, a)]
              );
            case 3:
              return [2];
          }
        });
      });
    },
    B = function (e, t, n, r) {
      return (
        void 0 === n && (n = F),
        x(void 0, void 0, Promise, function () {
          var o, i, a;
          return V(this, function (u) {
            switch (u.label) {
              case 0:
                return u.trys.push([0, 2, , 3]), [4, e];
              case 1:
                return (o = u.sent()), void 0 !== r ? [2, L(r(o))] : [2, L(o)];
              case 2:
                return (i = u.sent()), (a = n(i)), [2, M(W(t, a), i, 0)];
              case 3:
                return [2];
            }
          });
        })
      );
    },
    Y =
      (null !== (y = C.EnvironmentUrls.apiGatewayCdnUrl) && void 0 !== y
        ? y
        : "URL_NOT_FOUND") + "/captcha";
  !(function (e) {
    e[(e.UNKNOWN = 0)] = "UNKNOWN";
  })(w || (w = {}));
  var G,
    K,
    Q = { url: Y + "/v1/metadata", timeout: 6e4 },
    z = function () {
      return H(U.httpService.get(Q, {}), w);
    },
    q =
      null !== (G = C.EnvironmentUrls.accountSettingsApi) && void 0 !== G
        ? G
        : "URL_NOT_FOUND";
  !(function (e) {
    (e[(e.FEATURE_DISABLED = 2)] = "FEATURE_DISABLED"),
      (e[(e.TOO_MANY_ACCOUNTS_ON_EMAIL = 3)] = "TOO_MANY_ACCOUNTS_ON_EMAIL"),
      (e[(e.TOO_MANY_ATTEMPTS_TO_UPDATE_EMAIL = 6)] =
        "TOO_MANY_ATTEMPTS_TO_UPDATE_EMAIL"),
      (e[(e.INVALID_EMAIL_ADDRESS = 9)] = "INVALID_EMAIL_ADDRESS");
  })(K || (K = {}));
  var X,
    j,
    J = { withCredentials: !0, url: q + "/v1/email", timeout: 1e4 },
    Z = { withCredentials: !0, url: q + "/v1/email", timeout: 1e4 },
    $ = function (e) {
      return H(
        U.httpService.post(J, { emailAddress: e, skipVerificationEmail: !0 }),
        K,
      );
    },
    ee = function () {
      return H(U.httpService.get(Z), K);
    },
    te =
      null !== (X = C.EnvironmentUrls.gamesApi) && void 0 !== X
        ? X
        : "URL_NOT_FOUND";
  !(function (e) {
    e[(e.UNKNOWN = 0)] = "UNKNOWN";
  })(j || (j = {}));
  var ne,
    re = { url: te + "/v1/games", timeout: 1e4 },
    oe = function (e) {
      return H(U.httpService.get(re, { universeIds: e }), j);
    };
  !(function (e) {
    e[(e.UNKNOWN = 0)] = "UNKNOWN";
  })(ne || (ne = {}));
  var ie,
    ae,
    ue = { withCredentials: !0, url: "/my/settings/json", timeout: 1e4 },
    se = function () {
      return H(U.httpService.get(ue, {}), ne);
    },
    le =
      (null !== (ie = C.EnvironmentUrls.apiGatewayUrl) && void 0 !== ie
        ? ie
        : "URL_NOT_FOUND") + "/otp-service";
  !(function (e) {
    (e[(e.NO_ERROR = 0)] = "NO_ERROR"),
      (e[(e.UNKNOWN = 1)] = "UNKNOWN"),
      (e[(e.INVALID_CODE = 2)] = "INVALID_CODE"),
      (e[(e.INVALID_SESSION_TOKEN = 3)] = "INVALID_SESSION_TOKEN"),
      (e[(e.CODE_EXPIRED = 4)] = "CODE_EXPIRED"),
      (e[(e.UNVALIDATED_SESSION_TOKEN = 5)] = "UNVALIDATED_SESSION_TOKEN"),
      (e[(e.TOO_MANY_REQUESTS = 6)] = "TOO_MANY_REQUESTS"),
      (e[(e.CONTACT_MALFORMED = 7)] = "CONTACT_MALFORMED"),
      (e[(e.VPN_REQUIRED = 8)] = "VPN_REQUIRED"),
      (e[(e.UNAUTHENTICATED = 9)] = "UNAUTHENTICATED"),
      (e[(e.METHOD_UNAVAILABLE = 10)] = "METHOD_UNAVAILABLE");
  })(ae || (ae = {}));
  var ce,
    pe,
    de,
    fe = { withCredentials: !0, url: le + "/v1/sendCodeForUser", timeout: 1e4 },
    Ee = { withCredentials: !0, url: le + "/v1/resendCode", timeout: 1e4 },
    me = { withCredentials: !0, url: le + "/v1/validateCode", timeout: 1e4 },
    he = { withCredentials: !0, url: le + "/v1/metadata", timeout: 1e4 };
  !(function (e) {
    (e.Unset = "Unset"), (e.Email = "Email");
  })(ce || (ce = {})),
    (function (e) {
      (e.Reauth = "Reauth"), (e.Challenge = "Challenge");
    })(pe || (pe = {})),
    (function (e) {
      e.Default = "Default";
    })(de || (de = {}));
  var Se,
    ve,
    Ae = function (e) {
      return H(
        U.httpService.post(fe, {
          contactType: e,
          origin: pe.Reauth,
          messageVariant: de.Default,
        }),
        ae,
      );
    },
    _e = function (e, t) {
      return H(
        U.httpService.post(Ee, {
          contactType: e,
          origin: pe.Reauth,
          otpSessionToken: t,
        }),
        ae,
      );
    },
    Ne = function (e, t, n) {
      return H(
        U.httpService.post(me, {
          contactType: e,
          origin: pe.Reauth,
          passCode: n,
          otpSessionToken: t,
        }),
        ae,
      );
    },
    Te = function (e) {
      return H(U.httpService.get(he, { Origin: e }), ae);
    },
    be =
      null !== (Se = C.EnvironmentUrls.authApi) && void 0 !== Se
        ? Se
        : "URL_NOT_FOUND";
  !(function (e) {
    (e[(e.FLOODED = 2)] = "FLOODED"),
      (e[(e.INVALID_PASSWORD = 7)] = "INVALID_PASSWORD"),
      (e[(e.INVALID_CURRENT_PASSWORD = 8)] = "INVALID_CURRENT_PASSWORD");
  })(ve || (ve = {}));
  var Oe,
    ye = {
      withCredentials: !0,
      url: be + "/v2/user/passwords/change",
      timeout: 1e4,
    };
  !(function (e) {
    e[(e.USER_DOES_NOT_HAVE_EMAIL = 22)] = "USER_DOES_NOT_HAVE_EMAIL";
  })(Oe || (Oe = {}));
  var we,
    Ce = {
      withCredentials: !0,
      url: be + "/v2/passwords/reset/send-prompted",
      timeout: 1e4,
    };
  !(function (e) {
    (e[(e.VALID_PASSWORD = 0)] = "VALID_PASSWORD"),
      (e[(e.WEAK_PASSWORD = 1)] = "WEAK_PASSWORD"),
      (e[(e.SHORT_PASSWORD = 2)] = "SHORT_PASSWORD"),
      (e[(e.PASSWORD_SAME_AS_USERNAME = 3)] = "PASSWORD_SAME_AS_USERNAME"),
      (e[(e.FORBIDDEN_PASSWORD = 4)] = "FORBIDDEN_PASSWORD"),
      (e[(e.DUMB_STRINGS = 5)] = "DUMB_STRINGS");
  })(we || (we = {}));
  var Re,
    Pe,
    Ie = {
      withCredentials: !0,
      url: be + "/v2/passwords/validate",
      timeout: 1e4,
    },
    De = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    Ue = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    ge = function (e, t) {
      return H(
        U.httpService.post(ye, { currentPassword: e, newPassword: t }),
        ve,
      );
    },
    Le = function () {
      return H(U.httpService.post(Ce), Oe);
    },
    Me = function (e, t) {
      return De(void 0, void 0, Promise, function () {
        return Ue(this, function (n) {
          return [
            2,
            H(U.httpService.post(Ie, { username: e, password: t }), null).then(
              function (e) {
                return k(e, function (e) {
                  return W(we, e.code);
                });
              },
            ),
          ];
        });
      });
    },
    ke =
      null !== (Re = C.EnvironmentUrls.accountInformationApi) && void 0 !== Re
        ? Re
        : "URL_NOT_FOUND";
  !(function (e) {
    e[(e.UNKNOWN = 0)] = "UNKNOWN";
  })(Pe || (Pe = {}));
  var xe,
    Ve,
    Fe = { withCredentials: !0, url: ke + "/v1/phone", timeout: 1e4 },
    We = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    He = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    Be = function () {
      return We(void 0, void 0, Promise, function () {
        return He(this, function (e) {
          return [2, H(U.httpService.get(Fe, {}), Pe)];
        });
      });
    },
    Ye =
      null !== (xe = C.EnvironmentUrls.authApi) && void 0 !== xe
        ? xe
        : "URL_NOT_FOUND",
    Ge = "palisades-live";
  !(function (e) {
    e[(e.UNKNOWN = 0)] = "UNKNOWN";
  })(Ve || (Ve = {}));
  var Ke,
    Qe,
    ze,
    qe,
    Xe,
    je = {
      withCredentials: !0,
      url: Ye + "/v1/" + Ge + "/is-live",
      timeout: 1e4,
    },
    Je = {
      withCredentials: !0,
      url: Ye + "/v1/" + Ge + "/disconnect",
      timeout: 1e4,
    },
    Ze = function () {
      return H(U.httpService.get(je, {}), Ve);
    },
    $e = function () {
      return H(U.httpService.post(Je, {}), Ve);
    },
    et =
      (null !== (Ke = C.EnvironmentUrls.apiGatewayUrl) && void 0 !== Ke
        ? Ke
        : "URL_NOT_FOUND") + "/account-security-service";
  !(function (e) {
    (e[(e.UNKNOWN = 1)] = "UNKNOWN"),
      (e[(e.REQUEST_TYPE_WAS_INVALID = 2)] = "REQUEST_TYPE_WAS_INVALID"),
      (e[(e.PROMPT_ASSIGNMENT_WAS_NOT_UPDATED = 3)] =
        "PROMPT_ASSIGNMENT_WAS_NOT_UPDATED"),
      (e[(e.UNKNOWN_PROMPT_TYPE = 4)] = "UNKNOWN_PROMPT_TYPE");
  })(Qe || (Qe = {})),
    (function (e) {
      e.TEXT_ONLY_BANNER = "DISPLAY_TYPE_TEXT_ONLY_BANNER";
    })(ze || (ze = {})),
    (function (e) {
      (e.GLOBAL = "PAGE_RESTRICTION_GLOBAL"),
        (e.HOME_PAGE_ONLY = "PAGE_RESTRICTION_HOME_PAGE");
    })(qe || (qe = {})),
    (function (e) {
      (e.CHANGE_PASSWORD__SUSPECTED_COMPROMISE =
        "PROMPT_TYPE_CHANGE_PASSWORD__SUSPECTED_COMPROMISE"),
        (e.CHANGE_PASSWORD__BREACHED_CREDENTIAL =
          "PROMPT_TYPE_CHANGE_PASSWORD__BREACHED_CREDENTIAL"),
        (e.AUTHENTICATOR_UPSELL = "PROMPT_TYPE_AUTHENTICATOR_UPSELL"),
        (e.ACCOUNT_RESTORES_POLICY_UPDATE =
          "PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPDATE"),
        (e.ACCOUNT_RESTORES_POLICY_UPDATE_V2 =
          "PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPDATE_V2"),
        (e.ACCOUNT_RESTORES_POLICY_UPDATE_V3 =
          "PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPDATE_V3"),
        (e.ACCOUNT_RESTORES_POLICY_UPSELL =
          "PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPSELL"),
        (e.BROADER_AUTHENTICATOR_UPSELL =
          "PROMPT_TYPE_BROADER_AUTHENTICATOR_UPSELL"),
        (e.EMAIL_2SV_UPSELL = "PROMPT_TYPE_EMAIL_2SV_UPSELL");
    })(Xe || (Xe = {}));
  var tt,
    nt = {
      withCredentials: !0,
      url: et + "/v1/prompt-assignments",
      timeout: 1e4,
    };
  !(function (e) {
    (e.DISMISS_PROMPT = "DISMISS_PROMPT"),
      (e.DISABLE_PROMPT = "DISABLE_PROMPT");
  })(tt || (tt = {}));
  var rt,
    ot,
    it = {
      withCredentials: !0,
      url: et + "/v1/prompt-assignments",
      timeout: 1e4,
    },
    at = function () {
      return (
        (at =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        at.apply(this, arguments)
      );
    },
    ut = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    st = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    lt = function () {
      return ut(void 0, void 0, Promise, function () {
        var e;
        return st(this, function (t) {
          switch (t.label) {
            case 0:
              return [
                4,
                H(U.httpService.get(nt, { shouldReturnMetadata: !0 }), Qe),
              ];
            case 1:
              return (e = t.sent()).isError
                ? [2, e]
                : [
                    2,
                    (e = at(at({}, e), {
                      value: e.value.filter(function (e) {
                        return e.isGeneric
                          ? Object.values(ze).includes(e.metadata.displayType)
                          : Object.values(Xe).includes(e.promptType);
                      }),
                    })),
                  ];
          }
        });
      });
    },
    ct = function (e, t) {
      return H(U.httpService.post(it, { action: e, promptType: t }), Qe);
    },
    pt =
      (null !== (rt = C.EnvironmentUrls.apiGatewayUrl) && void 0 !== rt
        ? rt
        : "URL_NOT_FOUND") + "/proof-of-space";
  !(function (e) {
    (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
      (e[(e.INTERNAL_ERROR = 1)] = "INTERNAL_ERROR"),
      (e[(e.INVALID_REQUEST = 2)] = "INVALID_REQUEST"),
      (e[(e.INVALID_SESSION = 3)] = "INVALID_SESSION");
  })(ot || (ot = {}));
  var dt,
    ft,
    Et,
    mt = { withCredentials: !0, url: pt + "/v1/verify", timeout: 1e4 },
    ht = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    St = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    vt = function (e, t) {
      return ht(void 0, void 0, Promise, function () {
        return St(this, function (n) {
          return [
            2,
            H(U.httpService.post(mt, { challengeId: e, solution: t }), ot),
          ];
        });
      });
    },
    At =
      (null !== (dt = C.EnvironmentUrls.apiGatewayUrl) && void 0 !== dt
        ? dt
        : "URL_NOT_FOUND") + "/proof-of-work-service";
  !(function (e) {
    (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
      (e[(e.REQUEST_INVALID = 1)] = "REQUEST_INVALID"),
      (e[(e.SESSION_INACTIVE = 2)] = "SESSION_INACTIVE");
  })(ft || (ft = {})),
    (function (e) {
      e[(e.TIME_LOCK = 0)] = "TIME_LOCK";
    })(Et || (Et = {}));
  var _t,
    Nt,
    Tt = { withCredentials: !0, url: At + "/v1/pow-puzzle", timeout: 1e4 },
    bt = { withCredentials: !0, url: At + "/v1/pow-puzzle", timeout: 1e4 },
    Ot = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    yt = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    wt = function (e) {
      return H(U.httpService.get(Tt, { sessionID: e }), ft);
    },
    Ct = function (e, t) {
      return Ot(void 0, void 0, Promise, function () {
        return yt(this, function (n) {
          return [
            2,
            H(U.httpService.post(bt, { sessionID: e, solution: t }), ft),
          ];
        });
      });
    },
    Rt =
      (null !== (_t = C.EnvironmentUrls.apiGatewayUrl) && void 0 !== _t
        ? _t
        : "URL_NOT_FOUND") + "/reauthentication-service";
  !(function (e) {
    (e[(e.UNKNOWN = 1)] = "UNKNOWN"),
      (e[(e.REQUEST_TYPE_WAS_INVALID = 2)] = "REQUEST_TYPE_WAS_INVALID"),
      (e[(e.PASSWORD_INCORRECT = 3)] = "PASSWORD_INCORRECT"),
      (e[(e.OTP_EMAIL_REDEEM_FAILURE = 4)] = "OTP_EMAIL_REDEEM_FAILURE");
  })(Nt || (Nt = {}));
  var Pt,
    It,
    Dt = { withCredentials: !0, url: Rt + "/v1/token/generate", timeout: 1e4 },
    Ut = function (e) {
      return H(U.httpService.post(Dt, e), Nt);
    },
    gt =
      (null !== (Pt = C.EnvironmentUrls.apiGatewayUrl) && void 0 !== Pt
        ? Pt
        : "URL_NOT_FOUND") + "/rostile";
  !(function (e) {
    (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
      (e[(e.INTERNAL_ERROR = 1)] = "INTERNAL_ERROR"),
      (e[(e.INVALID_REQUEST = 2)] = "INVALID_REQUEST"),
      (e[(e.INVALID_SESSION = 3)] = "INVALID_SESSION");
  })(It || (It = {}));
  var Lt,
    Mt,
    kt,
    xt,
    Vt = { withCredentials: !0, url: gt + "/v1/verify", timeout: 1e4 },
    Ft = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    Wt = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    Ht = function (e, t) {
      return Ft(void 0, void 0, Promise, function () {
        return Wt(this, function (n) {
          return [
            2,
            H(U.httpService.post(Vt, { challengeId: e, solution: t }), It),
          ];
        });
      });
    },
    Bt =
      (null !== (Lt = C.EnvironmentUrls.apiGatewayUrl) && void 0 !== Lt
        ? Lt
        : "URL_NOT_FOUND") + "/account-security-service";
  !(function (e) {
    (e[(e.UNKNOWN = 1)] = "UNKNOWN"),
      (e[(e.REQUEST_TYPE_WAS_INVALID = 2)] = "REQUEST_TYPE_WAS_INVALID"),
      (e[(e.SECURITY_QUESTIONS_DISABLED = 3)] = "SECURITY_QUESTIONS_DISABLED"),
      (e[(e.SESSION_INACTIVE = 4)] = "SESSION_INACTIVE"),
      (e[(e.QUESTION_NOT_FOUND = 5)] = "QUESTION_NOT_FOUND"),
      (e[(e.ANSWER_WRONG_FORMAT = 6)] = "ANSWER_WRONG_FORMAT");
  })(Mt || (Mt = {})),
    (function (e) {
      (e[(e.INVALID = 0)] = "INVALID"),
        (e[(e.MOST_RECENT_GAMES_PLAYED = 1)] = "MOST_RECENT_GAMES_PLAYED");
    })(kt || (kt = {})),
    (function (e) {
      (e[(e.PICK_ALL_CORRECT_CHOICES = 0)] = "PICK_ALL_CORRECT_CHOICES"),
        (e[(e.PICK_C_CORRECT_CHOICES = 1)] = "PICK_C_CORRECT_CHOICES");
    })(xt || (xt = {}));
  var Yt,
    Gt,
    Kt,
    Qt,
    zt,
    qt = {
      withCredentials: !0,
      url: Bt + "/v1/security-question",
      timeout: 1e4,
    },
    Xt = {
      withCredentials: !0,
      url: Bt + "/v1/security-question",
      timeout: 1e4,
    },
    jt = function (e, t) {
      return H(U.httpService.get(qt, { userId: e, sessionId: t }), Mt);
    },
    Jt = function (e, t, n) {
      return H(
        U.httpService.post(Xt, { userId: e, answer: t, sessionId: n }),
        Mt,
      );
    },
    Zt = "URL_NOT_FOUND",
    $t =
      null !== (Yt = C.EnvironmentUrls.apiGatewayUrl) && void 0 !== Yt
        ? Yt
        : Zt,
    en = null !== (Gt = C.EnvironmentUrls.authApi) && void 0 !== Gt ? Gt : Zt,
    tn = $t + "/token-metadata-service";
  !(function (e) {
    (e[(e.UNKNOWN = 1)] = "UNKNOWN"),
      (e[(e.REQUEST_TYPE_WAS_INVALID = 2)] = "REQUEST_TYPE_WAS_INVALID"),
      (e[(e.ATTEMPT_TO_INVALIDATE_CURRENT_TOKEN = 3)] =
        "ATTEMPT_TO_INVALIDATE_CURRENT_TOKEN");
  })(Kt || (Kt = {})),
    (function (e) {
      e[(e.UNKNOWN = 1)] = "UNKNOWN";
    })(Qt || (Qt = {})),
    (function (e) {
      (e.UNKNOWN = "Unknown"),
        (e.APP = "App"),
        (e.BROWSER = "Browser"),
        (e.STUDIO = "Studio");
    })(zt || (zt = {}));
  var nn,
    rn,
    on,
    an,
    un = { withCredentials: !0, url: tn + "/v1/sessions", timeout: 1e4 },
    sn = { withCredentials: !0, url: tn + "/v1/logout", timeout: 1e4 },
    ln = {
      withCredentials: !0,
      url: en + "/v1/logoutfromallsessionsandreauthenticate",
      timeout: 1e4,
    },
    cn = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    pn = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    dn = function (e, t) {
      return cn(void 0, void 0, Promise, function () {
        return pn(this, function (n) {
          return [
            2,
            H(U.httpService.get(un, { nextCursor: e, desiredLimit: t }), Kt),
          ];
        });
      });
    },
    fn = function (e) {
      return cn(void 0, void 0, Promise, function () {
        return pn(this, function (t) {
          return [2, H(U.httpService.post(sn, { token: e }), Kt)];
        });
      });
    },
    En = function (e) {
      return cn(void 0, void 0, Promise, function () {
        return pn(this, function (t) {
          return [
            2,
            H(U.httpService.post(ln, { secureAuthenticationIntent: e }), Qt),
          ];
        });
      });
    },
    mn =
      null !== (nn = C.EnvironmentUrls.thumbnailsApi) && void 0 !== nn
        ? nn
        : "URL_NOT_FOUND";
  !(function (e) {
    e[(e.UNKNOWN = 0)] = "UNKNOWN";
  })(rn || (rn = {})),
    (function (e) {
      (e.PNG = "Png"), (e.JPEG = "Jpeg");
    })(on || (on = {})),
    (function (e) {
      (e.ERROR = "Error"),
        (e.COMPLETED = "Completed"),
        (e.IN_REVIEW = "InReview"),
        (e.PENDING = "Pending"),
        (e.BLOCKED = "Blocked");
    })(an || (an = {}));
  var hn,
    Sn,
    vn,
    An,
    _n = { url: mn + "/v1/games/icons", timeout: 1e4 },
    Nn = function (e, t, n, r) {
      return H(
        U.httpService.get(_n, {
          universeIds: e,
          size: t,
          format: n,
          isCircular: r,
        }),
        rn,
      );
    },
    Tn = CoreRobloxUtilities,
    bn = "URL_NOT_FOUND",
    On =
      null !== (hn = C.EnvironmentUrls.twoStepVerificationApi) && void 0 !== hn
        ? hn
        : bn,
    yn =
      null !== (Sn = C.EnvironmentUrls.economyApi) && void 0 !== Sn ? Sn : bn,
    wn = null !== (vn = C.EnvironmentUrls.tradesApi) && void 0 !== vn ? vn : bn,
    Cn = 1e4;
  !(function (e) {
    (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
      (e[(e.INVALID_CHALLENGE_ID = 1)] = "INVALID_CHALLENGE_ID"),
      (e[(e.INVALID_USER_ID = 2)] = "INVALID_USER_ID"),
      (e[(e.INVALID_EMAIL = 3)] = "INVALID_EMAIL"),
      (e[(e.INVALID_PASSWORD = 4)] = "INVALID_PASSWORD"),
      (e[(e.TOO_MANY_REQUESTS = 5)] = "TOO_MANY_REQUESTS"),
      (e[(e.PIN_LOCKED = 6)] = "PIN_LOCKED"),
      (e[(e.FEATURE_DISABLED = 7)] = "FEATURE_DISABLED"),
      (e[(e.NOT_ALLOWED = 8)] = "NOT_ALLOWED"),
      (e[(e.INVALID_CONFIGURATION = 9)] = "INVALID_CONFIGURATION"),
      (e[(e.INVALID_CODE = 10)] = "INVALID_CODE"),
      (e[(e.CONFIGURATION_ALREADY_ENABLED = 11)] =
        "CONFIGURATION_ALREADY_ENABLED"),
      (e[(e.INVALID_SETUP_TOKEN = 12)] = "INVALID_SETUP_TOKEN"),
      (e[(e.REAUTHENTICATION_REQUIRED = 13)] = "REAUTHENTICATION_REQUIRED"),
      (e[(e.INVALID_PHONE_NUMBER = 15)] = "INVALID_PHONE_NUMBER"),
      (e[(e.EXCEEDED_REGISTERED_KEYS_LIMIT = 16)] =
        "EXCEEDED_REGISTERED_KEYS_LIMIT"),
      (e[(e.INVALID_CREDENTIAL_NICKNAME = 17)] = "INVALID_CREDENTIAL_NICKNAME"),
      (e[(e.AUTHENTICATOR_CODE_ALREADY_USED = 18)] =
        "AUTHENTICATOR_CODE_ALREADY_USED"),
      (e[(e.CHALLENGE_DENIED = 19)] = "CHALLENGE_DENIED"),
      (e[(e.CROSS_DEVICE_DIALOG_EXPIRED = 20)] = "CROSS_DEVICE_DIALOG_EXPIRED");
  })(An || (An = {}));
  var Rn,
    Pn,
    In = { url: On + "/v1/metadata", withCredentials: !0, timeout: Cn },
    Dn = function (e) {
      return {
        withCredentials: !0,
        url: On + "/v1/users/" + e + "/configuration/email/enable",
        timeout: Cn,
      };
    },
    Un = function (e) {
      return {
        withCredentials: !0,
        url:
          On + "/v1/users/" + e + "/configuration/authenticator/enable-verify",
        timeout: Cn,
      };
    },
    gn = function (e) {
      return {
        withCredentials: !0,
        url: On + "/v1/users/" + e + "/configuration/sms/enable",
        timeout: Cn,
      };
    },
    Ln = function (e) {
      return {
        withCredentials: !0,
        url:
          On + "/v1/users/" + e + "/configuration/security-key/enable-verify",
        timeout: Cn,
      };
    },
    Mn = {
      withCredentials: !0,
      url: yn + "/v2/spend-friction/two-step-verification/status",
      timeout: Cn,
    },
    kn = {
      withCredentials: !0,
      url: wn + "/v1/trade-friction/two-step-verification/status",
      timeout: Cn,
    },
    xn = {
      withCredentials: !0,
      url: yn + "/v2/resale-friction/two-step-verification/status",
      timeout: Cn,
    },
    Vn = {
      withCredentials: !0,
      url: yn + "/v2/spend-friction/two-step-verification/generate",
      timeout: Cn,
    },
    Fn = {
      withCredentials: !0,
      url: wn + "/v1/trade-friction/two-step-verification/generate",
      timeout: Cn,
    },
    Wn = {
      withCredentials: !0,
      url: yn + "/v2/resale-friction/two-step-verification/generate",
      timeout: Cn,
    },
    Hn = {
      withCredentials: !0,
      url: yn + "/v2/spend-friction/two-step-verification/redeem",
      timeout: Cn,
    },
    Bn = {
      withCredentials: !0,
      url: wn + "/v1/trade-friction/two-step-verification/redeem",
      timeout: Cn,
    },
    Yn = {
      withCredentials: !0,
      url: yn + "/v2/resale-friction/two-step-verification/redeem",
      timeout: Cn,
    },
    Gn = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    Kn = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    Qn = Tn.cryptoUtil.generateSecureAuthIntent,
    zn = function (e) {
      return H(U.httpService.get(In, e || {}), An);
    },
    qn = function (e, t) {
      return H(
        U.httpService.get(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/configuration",
              timeout: Cn,
            };
          })(e),
          t || {},
        ),
        An,
      );
    },
    Xn = function (e) {
      return Gn(void 0, void 0, Promise, function () {
        var t;
        return Kn(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, Qn()];
            case 1:
              return (
                (t = n.sent()),
                [
                  2,
                  H(
                    U.httpService.post(Dn(e), {
                      secureAuthenticationIntent: t,
                    }),
                    An,
                  ),
                ]
              );
          }
        });
      });
    },
    jn = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/challenges/email/send-code",
              timeout: Cn,
            };
          })(e),
          t,
        ),
        An,
      );
    },
    Jn = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/challenges/email/verify",
              timeout: Cn,
            };
          })(e),
          t,
        ),
        An,
      );
    },
    Zn = function (e) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/configuration/email/disable",
              timeout: Cn,
            };
          })(e),
          {},
        ),
        An,
      );
    },
    $n = function (e) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url:
                On + "/v1/users/" + e + "/configuration/authenticator/enable",
              timeout: Cn,
            };
          })(e),
          {},
        ),
        An,
      );
    },
    er = function (e, t, n) {
      return Gn(void 0, void 0, Promise, function () {
        var r;
        return Kn(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, Qn()];
            case 1:
              return (
                (r = o.sent()),
                [
                  2,
                  H(
                    U.httpService.post(Un(e), {
                      setupToken: t,
                      code: n,
                      secureAuthenticationIntent: r,
                    }),
                    An,
                  ),
                ]
              );
          }
        });
      });
    },
    tr = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/challenges/authenticator/verify",
              timeout: Cn,
            };
          })(e),
          t,
        ),
        An,
      );
    },
    nr = function (e) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url:
                On + "/v1/users/" + e + "/configuration/authenticator/disable",
              timeout: Cn,
            };
          })(e),
          {},
        ),
        An,
      );
    },
    rr = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/challenges/recovery-codes/verify",
              timeout: Cn,
            };
          })(e),
          t,
        ),
        An,
      );
    },
    or = function (e) {
      return H(
        U.httpService.get(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/recovery-codes",
              timeout: Cn,
            };
          })(e),
        ),
        An,
      );
    },
    ir = function (e) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/recovery-codes/regenerate",
              timeout: Cn,
            };
          })(e),
          { password: "password" },
        ),
        An,
      );
    },
    ar = function (e) {
      return Gn(void 0, void 0, Promise, function () {
        var t;
        return Kn(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, Qn()];
            case 1:
              return (
                (t = n.sent()),
                [
                  2,
                  H(
                    U.httpService.post(gn(e), {
                      secureAuthenticationIntent: t,
                    }),
                    An,
                  ),
                ]
              );
          }
        });
      });
    },
    ur = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/challenges/sms/send-code",
              timeout: Cn,
            };
          })(e),
          t,
        ),
        An,
      );
    },
    sr = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/challenges/sms/verify",
              timeout: Cn,
            };
          })(e),
          t,
        ),
        An,
      );
    },
    lr = function (e) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/configuration/sms/disable",
              timeout: Cn,
            };
          })(e),
          {},
        ),
        An,
      );
    },
    cr = function (e) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/configuration/security-key/enable",
              timeout: Cn,
            };
          })(e),
          {},
        ),
        An,
        function (e) {
          return {
            creationOptions: JSON.parse(e.creationOptions),
            sessionId: e.sessionId,
          };
        },
      );
    },
    pr = function (e, t, n, r) {
      return Gn(void 0, void 0, Promise, function () {
        var o;
        return Kn(this, function (i) {
          switch (i.label) {
            case 0:
              return [4, Qn()];
            case 1:
              return (
                (o = i.sent()),
                [
                  2,
                  H(
                    U.httpService.post(Ln(e), {
                      sessionId: t,
                      credentialNickname: n,
                      attestationResponse: r,
                      secureAuthenticationIntent: o,
                    }),
                    An,
                  ),
                ]
              );
          }
        });
      });
    },
    dr = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url:
                On + "/v1/users/" + e + "/challenges/security-key/verify-start",
              timeout: Cn,
            };
          })(e),
          t,
        ),
        An,
      );
    },
    fr = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url:
                On +
                "/v1/users/" +
                e +
                "/challenges/security-key/verify-finish",
              timeout: Cn,
            };
          })(e),
          t,
        ),
        An,
      );
    },
    Er = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url:
                On + "/v1/users/" + e + "/configuration/security-key/disable",
              timeout: Cn,
            };
          })(e),
          { credentialNicknames: t },
        ),
        An,
      );
    },
    mr = function (e) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/configuration/security-key/list",
              timeout: Cn,
            };
          })(e),
          {},
        ),
        An,
      );
    },
    hr = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/challenges/passkey/verify-start",
              timeout: Cn,
            };
          })(e),
          t,
        ),
        An,
      );
    },
    Sr = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/challenges/passkey/verify-finish",
              timeout: Cn,
            };
          })(e),
          t,
        ),
        An,
      );
    },
    vr = function () {
      return H(U.httpService.get(Mn, {}), An);
    },
    Ar = function () {
      return H(U.httpService.get(kn, {}), An);
    },
    _r = function () {
      return H(U.httpService.get(xn, {}), An);
    },
    Nr = function () {
      return H(U.httpService.post(Vn, {}), An);
    },
    Tr = function () {
      return H(U.httpService.post(Fn, {}), An);
    },
    br = function () {
      return H(U.httpService.post(Wn, {}), An);
    },
    Or = function (e, t) {
      return H(
        U.httpService.post(Hn, { challengeToken: e, verificationToken: t }),
        An,
      );
    },
    yr = function (e, t) {
      return H(
        U.httpService.post(Bn, { challengeToken: e, verificationToken: t }),
        An,
      );
    },
    wr = function (e, t) {
      return H(
        U.httpService.post(Yn, { challengeToken: e, verificationToken: t }),
        An,
      );
    },
    Cr = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/challenges/cross-device/retry",
              timeout: Cn,
            };
          })(e),
          t,
        ),
        An,
      );
    },
    Rr = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/challenges/cross-device/verify",
              timeout: Cn,
            };
          })(e),
          t,
        ),
        An,
      );
    },
    Pr = function (e, t) {
      return H(
        U.httpService.post(
          (function (e) {
            return {
              withCredentials: !0,
              url: On + "/v1/users/" + e + "/challenges/cross-device/retract",
              timeout: Cn,
            };
          })(e),
          t,
        ),
        An,
      );
    },
    Ir =
      null !== (Rn = C.EnvironmentUrls.universalAppConfigurationApi) &&
      void 0 !== Rn
        ? Rn
        : "URL_NOT_FOUND";
  !(function (e) {
    e[(e.INTERNAL_ERROR = 9)] = "INTERNAL_ERROR";
  })(Pn || (Pn = {}));
  var Dr,
    Ur,
    gr = {
      withCredentials: !0,
      url: Ir + "/v1/behaviors/account-settings-ui/content",
      timeout: 1e4,
    },
    Lr = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    Mr = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    kr = function () {
      return Lr(void 0, void 0, Promise, function () {
        return Mr(this, function (e) {
          return [2, H(U.httpService.get(gr, {}), Pn)];
        });
      });
    },
    xr =
      null !== (Dr = C.EnvironmentUrls.authApi) && void 0 !== Dr
        ? Dr
        : "URL_NOT_FOUND";
  !(function (e) {
    e[(e.UNKNOWN = 0)] = "UNKNOWN";
  })(Ur || (Ur = {}));
  var Vr,
    Fr,
    Wr,
    Hr = { withCredentials: !0, url: xr + "/v1/xbox/connection", timeout: 1e4 },
    Br = { withCredentials: !0, url: xr + "/v1/xbox/disconnect", timeout: 1e4 },
    Yr = function () {
      return H(U.httpService.get(Hr, {}), Ur);
    },
    Gr = function () {
      return H(U.httpService.post(Br, {}), Ur);
    },
    Kr =
      (null !== (Vr = C.EnvironmentUrls.apiGatewayUrl) && void 0 !== Vr
        ? Vr
        : "URL_NOT_FOUND") + "/account-security-service";
  !(function (e) {
    (e[(e.UNKNOWN = 1)] = "UNKNOWN"),
      (e[(e.REQUEST_TYPE_WAS_INVALID = 2)] = "REQUEST_TYPE_WAS_INVALID"),
      (e[(e.INVAID_METRIC_NAME = 3)] = "INVAID_METRIC_NAME"),
      (e[(e.INVALID_METRIC_LABELS = 4)] = "INVALID_METRIC_LABELS");
  })(Fr || (Fr = {})),
    (function (e) {
      (e.Event2sv = "event_2sv"),
        (e.SolveTime2sv = "solve_time_2sv"),
        (e.EventCaptcha = "event_captcha"),
        (e.SolveTimeCaptcha = "solve_time_captcha"),
        (e.EventPat = "event_pat"),
        (e.SolveTimePat = "solve_time_pat"),
        (e.EventPos = "event_pos"),
        (e.PuzzleComputeTimePos = "puzzle_compute_time_pos"),
        (e.SolveTimePos = "solve_time_pos"),
        (e.EventPow = "event_pow"),
        (e.PuzzleComputeTimePow = "puzzle_compute_time_pow"),
        (e.SolveTimePow = "solve_time_pow"),
        (e.EventRostile = "event_rostile"),
        (e.SolveTimeRostile = "solve_time_rostile"),
        (e.EventSecurityQuestion = "event_security_question"),
        (e.EventGeneric = "event_generic"),
        (e.EventReauthentication = "event_reauthentication"),
        (e.SolveTimeReauthentication = "solve_time_reauthentication"),
        (e.EventDeviceIntegrity = "event_device_integrity"),
        (e.SolveTimeDeviceIntegrity = "solve_time_device_integrity"),
        (e.EventPhoneVerification = "event_phone_verification"),
        (e.SolveTimePhoneVerification = "solve_time_phone_verification"),
        (e.EventEmailVerification = "event_email_verification"),
        (e.SolveTimeEmailVerification = "solve_time_email_verification");
    })(Wr || (Wr = {}));
  var Qr,
    zr,
    qr = { withCredentials: !0, url: Kr + "/v1/metrics/record", timeout: 1e4 },
    Xr = function (e) {
      return H(U.httpService.post(qr, e), Fr);
    },
    jr =
      (null !== (Qr = C.EnvironmentUrls.apiGatewayUrl) && void 0 !== Qr
        ? Qr
        : "URL_NOT_FOUND") + "/private-access-token";
  !(function (e) {
    e[(e.UNKNOWN = 0)] = "UNKNOWN";
  })(zr || (zr = {}));
  var Jr,
    Zr,
    $r = { withCredentials: !0, url: jr + "/v1/getPATToken", timeout: 1e4 },
    eo = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    to = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    no = function (e) {
      return eo(void 0, void 0, Promise, function () {
        return to(this, function (t) {
          return [2, H(U.httpService.post($r, { challengeId: e }), zr)];
        });
      });
    },
    ro =
      (null !== (Jr = C.EnvironmentUrls.apiGatewayUrl) && void 0 !== Jr
        ? Jr
        : "URL_NOT_FOUND") + "/challenge";
  !(function (e) {
    e[(e.UNKNOWN = 1)] = "UNKNOWN";
  })(Zr || (Zr = {}));
  var oo,
    io,
    ao = { withCredentials: !0, url: ro + "/v1/continue", timeout: 1e4 },
    uo = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    so = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    lo = function (e, t, n) {
      return uo(void 0, void 0, Promise, function () {
        return so(this, function (r) {
          return [
            2,
            H(
              U.httpService.post(ao, {
                challengeId: e,
                challengeType: t,
                challengeMetadata: n,
              }),
              Zr,
            ),
          ];
        });
      });
    },
    co =
      null !== (oo = C.EnvironmentUrls.authApi) && void 0 !== oo
        ? oo
        : "URL_NOT_FOUND",
    po = 1e4;
  !(function (e) {
    (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
      (e[(e.EXCEEDED_REGISTERED_KEYS_LIMIT = 1)] =
        "EXCEEDED_REGISTERED_KEYS_LIMIT"),
      (e[(e.FEATURE_DISABLED = 2)] = "FEATURE_DISABLED"),
      (e[(e.INVALID_CREDENTIAL_NICKNAME = 3)] = "INVALID_CREDENTIAL_NICKNAME");
  })(io || (io = {}));
  var fo,
    Eo = {
      withCredentials: !0,
      url: co + "/v1/passkey/StartRegistration",
      timeout: po,
    },
    mo = {
      withCredentials: !0,
      url: co + "/v1/passkey/FinishRegistration",
      timeout: po,
    },
    ho = {
      withCredentials: !0,
      url: co + "/v1/passkey/DeleteCredentialBatch",
      timeout: po,
    },
    So = {
      withCredentials: !0,
      url: co + "/v1/passkey/ListCredentials",
      timeout: po,
    },
    vo = function () {
      return H(U.httpService.post(Eo, {}), io, function (e) {
        return {
          creationOptions: JSON.parse(e.creationOptions),
          sessionId: e.sessionId,
        };
      });
    },
    Ao = function (e, t, n) {
      return H(
        U.httpService.post(mo, {
          sessionId: e,
          credentialNickname: t,
          attestationResponse: n,
        }),
        io,
      );
    },
    _o = function (e) {
      return H(U.httpService.post(ho, { credentialNicknames: e }), io);
    },
    No = function () {
      return H(U.httpService.post(So, { all: !0 }), io);
    };
  !(function (e) {
    (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
      (e[(e.CANCELLATION_ERROR = 1)] = "CANCELLATION_ERROR"),
      (e[(e.INTERRUPTED_ERROR = 2)] = "INTERRUPTED_ERROR"),
      (e[(e.INVALID_REQUEST = 3)] = "INVALID_REQUEST"),
      (e[(e.JSON_EXCEPTION = 4)] = "JSON_EXCEPTION"),
      (e[(e.CREDENTIALS_PROTOCOL_NOT_SUPPORTED = 5)] =
        "CREDENTIALS_PROTOCOL_NOT_SUPPORTED"),
      (e[(e.NO_CREDENTIALS_FOUND = 6)] = "NO_CREDENTIALS_FOUND"),
      (e[(e.INVALID_STATE_ERROR = 11)] = "INVALID_STATE_ERROR");
  })(fo || (fo = {}));
  var To,
    bo = function (e) {
      return e.code;
    },
    Oo = function (e, t, n) {
      return B(
        Tn.hybridResponseService.getNativeResponse(e, t, n),
        fo,
        bo,
        function (e) {
          if (null === e) return null;
          var t = JSON.parse(e);
          if (void 0 !== t.errorCode)
            throw {
              name: "getNativeResponse Error",
              message: t.errorMsg,
              code: t.errorCode,
            };
          return !(
            C.DeviceMeta &&
            (0, C.DeviceMeta)().isInApp &&
            (0, C.DeviceMeta)().isAndroidApp
          )
            ? Tn.fido2Util.formatCredentialAuthenticationResponseApp(e)
            : e;
        },
      );
    },
    yo = function (e) {
      return B(navigator.credentials.get(e), fo).then(function (e) {
        return k(e, function (e) {
          return null === e
            ? null
            : Tn.fido2Util.formatCredentialAuthenticationResponseWeb(e);
        });
      });
    },
    wo = function () {
      (this.captcha = t),
        (this.email = n),
        (this.fido2 = O),
        (this.games = r),
        (this.metrics = _),
        (this.myAccount = o),
        (this.otp = i),
        (this.password = a),
        (this.phone = u),
        (this.playstation = s),
        (this.promptAssignments = l),
        (this.securityQuestions = E),
        (this.sessionManagement = m),
        (this.reauthentication = d),
        (this.rostile = f),
        (this.thumbnails = h),
        (this.twoStepVerification = S),
        (this.universalAppConfiguration = v),
        (this.proofOfSpace = c),
        (this.proofOfWork = p),
        (this.xbox = A),
        (this.privateAccessToken = N),
        (this.genericChallenge = T),
        (this.authApi = b);
    },
    Co = ReactUtilities,
    Ro = "Account Security Prompt:",
    Po = "authpopup",
    Io = "emailhighlight",
    Do = "/my/account#!/security?src=",
    Uo =
      "https://en.help.roblox.com/hc/articles/212459863-Add-2-Step-Verification-to-Your-Account",
    go = "accountSecurityPromptEvent",
    Lo = { modalStateViewed: "modalStateViewed" },
    Mo = ReactStyleGuide,
    ko = function (e, t) {
      switch (t) {
        case we.VALID_PASSWORD:
          return null;
        case we.WEAK_PASSWORD:
          return e.Message.Error.PasswordValidation.WeakPassword;
        case we.SHORT_PASSWORD:
          return e.Message.Error.PasswordValidation.ShortPassword;
        case we.PASSWORD_SAME_AS_USERNAME:
          return e.Message.Error.PasswordValidation.PasswordSameAsUsername;
        case we.FORBIDDEN_PASSWORD:
          return e.Message.Error.PasswordValidation.ForbiddenPassword;
        case we.DUMB_STRINGS:
          return e.Message.Error.PasswordValidation.DumbStrings;
        default:
          return e.Message.Error.PasswordValidation.Default;
      }
    };
  !(function (e) {
    (e.NONE = "NONE"),
      (e.CHANGE_PASSWORD_INTRO = "CHANGE_PASSWORD_INTRO"),
      (e.CHANGE_PASSWORD_FORM = "CHANGE_PASSWORD_FORM"),
      (e.CHANGE_PASSWORD_CONFIRMATION = "CHANGE_PASSWORD_CONFIRMATION"),
      (e.CHANGE_PASSWORD_DISMISS_CONFIRMATION =
        "CHANGE_PASSWORD_DISMISS_CONFIRMATION"),
      (e.AUTHENTICATOR_UPSELL_OPENING = "AUTHENTICATOR_UPSELL_OPENING"),
      (e.AUTHENTICATOR_UPSELL_DOWNLOAD_APPS =
        "AUTHENTICATOR_UPSELL_DOWNLOAD_APPS"),
      (e.ACCOUNT_RESTORE_POLICY_UPSELL = "ACCOUNT_RESTORE_POLICY_UPSELL"),
      (e.EMAIL_2SV_UPSELL = "EMAIL_2SV_UPSELL");
  })(To || (To = {}));
  var xo,
    Vo = To;
  !(function (e) {
    (e[(e.DISMISS_TEMPORARY = 0)] = "DISMISS_TEMPORARY"),
      (e[(e.DISMISS_FOREVER = 1)] = "DISMISS_FOREVER"),
      (e[(e.SET_FLOW_COMPLETE = 2)] = "SET_FLOW_COMPLETE"),
      (e[(e.SET_MODAL_STATE = 3)] = "SET_MODAL_STATE"),
      (e[(e.SET_EMAIL_ADDRESS = 4)] = "SET_EMAIL_ADDRESS");
  })(xo || (xo = {}));
  var Fo,
    Wo = function () {
      return (
        (Wo =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        Wo.apply(this, arguments)
      );
    },
    Ho = function (e, t) {
      var n = Wo({}, e);
      switch (t.type) {
        case xo.DISMISS_TEMPORARY:
        case xo.DISMISS_FOREVER:
          return (n.isFlowComplete = !0), n;
        case xo.SET_MODAL_STATE:
          return (
            (n.lastModalState = e.modalState),
            (n.modalState = t.modalState),
            n.modalState === Vo.CHANGE_PASSWORD_CONFIRMATION &&
              (n.isFlowComplete = !0),
            n
          );
        case xo.SET_EMAIL_ADDRESS:
          return (n.emailAddress = t.emailAddress), n;
        default:
          return e;
      }
    },
    Bo = (0, P.createContext)(null),
    Yo = function (e) {
      var t = e.promptAssignment,
        n = e.username,
        r = e.isUserUnder13,
        o = e.eventService,
        i = e.requestService,
        a = e.translate,
        u = e.children,
        s = Vo.NONE,
        l =
          t.promptType === Xe.BROADER_AUTHENTICATOR_UPSELL &&
          !0 !== t.isGeneric &&
          !t.metadata.showBanner,
        c =
          t.promptType === Xe.EMAIL_2SV_UPSELL &&
          !0 !== t.isGeneric &&
          !t.metadata.showBanner;
      t.promptType === Xe.AUTHENTICATOR_UPSELL || l
        ? (s = Vo.AUTHENTICATOR_UPSELL_OPENING)
        : t.promptType === Xe.ACCOUNT_RESTORES_POLICY_UPSELL
          ? (s = Vo.ACCOUNT_RESTORE_POLICY_UPSELL)
          : t.promptType === Xe.EMAIL_2SV_UPSELL &&
            c &&
            (s = Vo.EMAIL_2SV_UPSELL);
      var p = (0, P.useState)(function () {
          return (function (e, t) {
            return {
              Action: {
                AbortDismissForeverAddEmail: e(
                  "Action.AbortDismissForeverAddEmail",
                ),
                AbortDismissForeverChangePassword: e(
                  "Action.AbortDismissForeverChangePassword",
                ),
                AccountRestoreOpenSettings: e("Action.OpenSettings"),
                AuthenticatorUpsellSetupAuthenticatorButtonMessage: e(
                  "Label.AuthenticatorUpsellSetupAuthenticatorButtonMessage",
                ),
                AuthenticatorUpsellNextButtonMessage: e(
                  "Action.AuthenticatorUpsellNextButtonMessage",
                ),
                ChangeEmail: e("Action.ChangeEmail"),
                ConfirmDismissForeverAddEmail: e(
                  "Action.ConfirmDismissForeverAddEmail",
                ),
                ConfirmDismissForeverChangePassword: e(
                  "Action.ConfirmDismissForeverChangePassword",
                ),
                ContinueAddEmail: e("Action.ContinueAddEmail"),
                ContinueChangePassword: e("Action.ContinueChangePassword"),
                DismissForever: e("Action.DismissForever"),
                RemindMeLater: e("Action.RemindMeLater"),
                ResendPasswordResetEmail: e("Action.ResendPasswordResetEmail"),
                SecureAccount: e("Action.SecureAccount"),
                SetUpAuthenticatorInBanner: e(
                  "Action.SetUpAuthenticatorInBanner",
                ),
                SetUpAuthenticatorAccountRestoresPolicyUpsell: e(
                  "Action.SetUpAuthenticatorAccountRestoresPolicyUpsell",
                ),
                SetUpEmail2SV: e("Action.SetUpEmail2SV"),
                SubmitChangePassword: e("Action.SubmitChangePassword"),
              },
              Message: {
                Error: {
                  Email: {
                    FeatureDisabled: e("Message.Error.Email.FeatureDisabled"),
                    TooManyAccountsOnEmail: e(
                      "Message.Error.Email.TooManyAccountsOnEmail",
                    ),
                    TooManyAttemptsToUpdateEmail: e(
                      "Message.Error.Email.TooManyAttemptsToUpdateEmail",
                    ),
                    InvalidEmailAddress: e(
                      "Message.Error.Email.InvalidEmailAddress",
                    ),
                    Default: e("Message.Error.Email.Default"),
                  },
                  Input: {
                    InvalidEmail: e("Message.Error.Input.InvalidEmail"),
                    PasswordsDoNotMatch: e(
                      "Message.Error.Input.PasswordsDoNotMatch",
                    ),
                  },
                  Passwords: {
                    Flooded: e("Message.Error.Password.Flooded"),
                    InvalidPassword: e(
                      "Message.Error.Password.InvalidPassword",
                    ),
                    InvalidCurrentPassword: e(
                      "Message.Error.Password.InvalidCurrentPassword",
                    ),
                    Default: e("Message.Error.Password.Default"),
                  },
                  PasswordReset: {
                    UserDoesNotHaveEmail: e(
                      "Message.Error.PasswordReset.UserDoesNotHaveEmail",
                    ),
                    Default: e("Message.Error.PasswordReset.Default"),
                  },
                  PasswordValidation: {
                    WeakPassword: e(
                      "Message.Error.PasswordValidation.WeakPassword",
                    ),
                    ShortPassword: e(
                      "Message.Error.PasswordValidation.ShortPassword",
                    ),
                    PasswordSameAsUsername: e(
                      "Message.Error.PasswordValidation.PasswordSameAsUsername",
                    ),
                    ForbiddenPassword: e(
                      "Message.Error.PasswordValidation.ForbiddenPassword",
                    ),
                    DumbStrings: e(
                      "Message.Error.PasswordValidation.DumbStrings",
                    ),
                    Default: e("Message.Error.PasswordValidation.Default"),
                  },
                  PromptAssignments: {
                    Default: e("Message.Error.PromptAssignments.Default"),
                  },
                },
              },
              Description: {
                AccountRestoresPolicyUpdateV3: function (t) {
                  return e("Description.AccountRestoresPolicyUpdateV3", {
                    linkStart:
                      '<a href="' + t + '" class="text-link" target="_blank">',
                    linkEnd: "</a>",
                  });
                },
                AccountRestoresPolicyUpsellMessageBody: function (t) {
                  return e(
                    "Description.AccountRestoresPolicyUpsellMessageBody",
                    {
                      linkStartSettings:
                        '<a href="' +
                        t +
                        '" class="text-link" target="_blank">',
                      linkEndSettings: "</a>",
                    },
                  );
                },
                AccountRestoresPolicyWithDate: function (t) {
                  return e("Description.AccountRestoresPolicyWithDate", {
                    date: t,
                  });
                },
                AddYourEmail: e(
                  t
                    ? "Description.AddYourEmailUnder13"
                    : "Description.AddYourEmail",
                ),
                AreYouSureDismissForeverAddEmail: e(
                  t
                    ? "Description.AreYouSureDismissForeverAddEmailUnder13"
                    : "Description.AreYouSureDismissForeverAddEmail",
                ),
                AreYouSureDismissForeverChangePassword: e(
                  "Description.AreYouSureDismissForeverChangePassword",
                ),
                AuthenticatorSetupPrompt: function (t) {
                  return e("Description.AuthenticatorSetupPrompt", {
                    linkStart:
                      '<a href="' + t + '" class="text-link" target="_blank">',
                    linkEnd: "</a>",
                  });
                },
                AuthenticatorSetupPromptNew: function (t) {
                  return e("Description.AuthenticatorSetupPromptNew", {
                    linkStart:
                      '<a href="' + t + '" class="text-link" target="_blank">',
                    linkEnd: "</a>",
                  });
                },
                ChangeYourPassword: e("Description.ChangeYourPassword"),
                ChangeYourPasswordImmediately: e(
                  "Description.ChangeYourPasswordImmediately",
                ),
                ChangeYourPasswordSuccess: e(
                  "Description.ChangeYourPasswordSuccess",
                ),
                CheckYourEmail: function (n) {
                  return e(
                    t
                      ? "Description.CheckYourEmailUnder13"
                      : "Description.CheckYourEmail",
                    { emailAddress: "<b>" + n + "</b>" },
                  );
                },
                Email2SVUpsellMessageBody: function (t) {
                  return e("Description.Email2SVUpsellMessageBody", {
                    linkStart:
                      '<a href="' + t + '" class="text-link" target="_blank">',
                    linkEnd: "</a>",
                  });
                },
                GenericTextOnlyBanner: function (t) {
                  return e(t);
                },
                LearnMoreHere: function (t) {
                  return e("Description.LearnMoreHere", {
                    linkStart:
                      '<a href="' + t + '" class="text-link" target="_blank">',
                    linkEnd: "</a>",
                  });
                },
                NoChangeForceReset: function (t) {
                  return e(
                    t <= 1
                      ? "Description.NoChangeForceResetSingular"
                      : "Description.NoChangeForceReset",
                    { days: t, boldStart: "<b>", boldEnd: "</b>" },
                  ).replace("1", t < 1 ? "< 1" : "1");
                },
                ReceiveSecurityCodesMessage: e(
                  "Description.ReceiveSecurityCodesMessage",
                ),
                UnusualActivity: e("Description.UnusualActivity"),
              },
              Header: {
                AccountRestoresPolicyUpdate: e(
                  "Header.AccountRestoresPolicyUpdate",
                ),
                AccountRestoresPolicyUpdateV3: e(
                  "Header.AccountRestoresPolicyUpdateV3",
                ),
                AccountRestoresPolicyUpsell: e(
                  "Header.AccountRestoresPolicyUpsell",
                ),
                AddYourEmail: e(
                  t ? "Header.AddYourEmailUnder13" : "Header.AddYourEmail",
                ),
                AreYouSure: e("Header.AreYouSure"),
                AuthenticatorUpsellDownloadAuthenticator: e(
                  "Header.AuthenticatorUpsellDownloadAuthenticator",
                ),
                AuthenticatorUpsellWelcomeMessage: e(
                  "Header.AuthenticatorUpsellWelcomeMessage",
                ),
                BoostYourAccountSecurity: e("Header.BoostYourAccountSecurity"),
                ChangeYourPassword: e("Header.ChangeYourPassword"),
                CheckYourEmail: e(
                  t ? "Header.CheckYourEmailUnder13" : "Header.CheckYourEmail",
                ),
                CreateAStrongPassword: e("Header.CreateAStrongPassword"),
                GenericTextOnlyBanner: function (t) {
                  return e(t);
                },
                Email2SVUpsell: e("Header.Email2SVUpsell"),
                KeepYourAccountSafeLong: e("Header.KeepYourAccountSafeLong"),
                Success: e("Header.Success"),
                UnusualActivityDetected: e("Header.UnusualActivityDetected"),
                YourPasswordMightBeStolen: e(
                  "Header.YourPasswordMightBeStolen",
                ),
              },
              Label: {
                AtLeastCharacters: function (t) {
                  return e("Label.AtLeastCharacters", { count: t });
                },
                AuthenticatorUpsellBadActorHeadline: e(
                  "Label.AuthenticatorUpsellBadActorHeadline",
                ),
                AuthenticatorUpsellBadActorMessage: e(
                  "Label.AuthenticatorUpsellBadActorMessage",
                ),
                AuthenticatorUpsellDownloadInstruction: e(
                  "Label.AuthenticatorUpsellDownloadInstruction",
                ),
                AuthenticatorUpsellGoogleOption: e(
                  "Label.AuthenticatorUpsellGoogleOption",
                ),
                AuthenticatorUpsellMicrosoftOption: e(
                  "Label.AuthenticatorUpsellMicrosoftOption",
                ),
                AuthenticatorUpsellProtectRobuxHeadline: e(
                  "Label.AuthenticatorUpsellProtectRobuxHeadline",
                ),
                AuthenticatorUpsellProtectRobuxMessage: e(
                  "Label.AuthenticatorUpsellProtectRobuxMessage",
                ),
                AuthenticatorUpsellTwilioOption: e(
                  "Label.AuthenticatorUpsellTwilioOption",
                ),
                AuthenticatorUpsellTwoFactorHeadline: e(
                  "Label.AuthenticatorUpsellTwoFactorHeadline",
                ),
                AuthenticatorUpsellTwoFactorMessage: e(
                  "Label.AuthenticatorUpsellTwoFactorMessage",
                ),
                ConfirmNewPassword: e("Label.ConfirmNewPassword"),
                CurrentPassword: e("Label.CurrentPassword"),
                IForgotMyPassword: e("Label.IForgotMyPassword"),
                MinutesSeconds: function (t, n) {
                  return e("Label.MinutesSeconds", { minutes: t, seconds: n });
                },
                NewPassword: e("Label.NewPassword"),
                TimeRemaining: e("Label.TimeRemaining"),
                UseAUniquePassword: e("Label.UseAUniquePassword"),
                YourEmail: e(t ? "Label.YourEmailUnder13" : "Label.YourEmail"),
              },
            };
          })(a, r);
        })[0],
        d = (0, P.useState)(function () {
          return {
            promptAssignment: t,
            username: n,
            resources: p,
            requestService: i,
            isFlowComplete: !1,
            modalState: s,
            lastModalState: null,
            emailAddress: "",
          };
        })[0],
        f = (0, P.useReducer)(Ho, d),
        E = f[0],
        m = f[1];
      return (
        (0, P.useEffect)(
          function () {
            return (function (e, t, n) {
              t !== n && e.sendModalStateViewedEvent(t);
            })(o, E.modalState, E.lastModalState);
          },
          [o, E.modalState, E.lastModalState],
        ),
        I().createElement(Bo.Provider, { value: { state: E, dispatch: m } }, u)
      );
    },
    Go = function () {
      var e = (0, P.useContext)(Bo);
      if (null === e)
        throw new Error(
          "AccountSecurityPromptContext was not provided in the current scope",
        );
      return e;
    },
    Ko = function (e) {
      var t = parseInt(e, 10);
      if (Number.isNaN(t) || !Number.isSafeInteger(t)) return 14;
      var n = Math.max(0, t - Date.now());
      return Math.floor(n / 864e5);
    },
    Qo = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    zo = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    qo = function () {
      var e = Go(),
        t = e.state,
        n = t.promptAssignment,
        r = t.resources,
        o = t.requestService,
        i = e.dispatch,
        a = (0, P.useState)(!1),
        u = a[0],
        s = a[1],
        l = function () {
          return Qo(void 0, void 0, Promise, function () {
            var e;
            return zo(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    s(!0),
                    [
                      4,
                      o.promptAssignments.updateForCurrentUser(
                        tt.DISABLE_PROMPT,
                        n.promptType,
                      ),
                    ]
                  );
                case 1:
                  return (
                    (e = t.sent()).isError &&
                      (s(!1),
                      console.warn(
                        Ro,
                        "Disabling prompt failed with error",
                        e.error && Qe[e.error],
                      )),
                    i({ type: xo.DISMISS_FOREVER }),
                    [2]
                  );
              }
            });
          });
        },
        c = function () {
          return Qo(void 0, void 0, Promise, function () {
            var e;
            return zo(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    s(!0),
                    [
                      4,
                      o.promptAssignments.updateForCurrentUser(
                        tt.DISMISS_PROMPT,
                        n.promptType,
                      ),
                    ]
                  );
                case 1:
                  return (
                    (e = t.sent()).isError &&
                      (s(!1),
                      console.warn(
                        Ro,
                        "Dismissing prompt failed with error",
                        e.error && Qe[e.error],
                      )),
                    i({ type: xo.DISMISS_TEMPORARY }),
                    [2]
                  );
              }
            });
          });
        },
        p = [
          Xe.BROADER_AUTHENTICATOR_UPSELL.toString(),
          Xe.ACCOUNT_RESTORES_POLICY_UPDATE_V3.toString(),
          Xe.EMAIL_2SV_UPSELL.toString(),
        ].includes(n.promptType.toString()),
        d = !p,
        f = Xe.ACCOUNT_RESTORES_POLICY_UPDATE_V3 !== n.promptType,
        E = Xe.CHANGE_PASSWORD__SUSPECTED_COMPROMISE === n.promptType,
        m = [
          Xe.CHANGE_PASSWORD__SUSPECTED_COMPROMISE.toString(),
          Xe.ACCOUNT_RESTORES_POLICY_UPDATE.toString(),
          Xe.ACCOUNT_RESTORES_POLICY_UPDATE_V2.toString(),
          Xe.ACCOUNT_RESTORES_POLICY_UPDATE_V3.toString(),
          Xe.BROADER_AUTHENTICATOR_UPSELL.toString(),
          Xe.EMAIL_2SV_UPSELL.toString(),
        ].includes(n.promptType.toString());
      n.isGeneric &&
        ((d = n.metadata.showAlertIcon),
        (f = !1),
        (E = !1),
        (m = n.metadata.showXButtonForDisable));
      var h,
        S,
        v = r.Action.SubmitChangePassword;
      if (
        (n.promptType === Xe.ACCOUNT_RESTORES_POLICY_UPDATE ||
        n.promptType === Xe.ACCOUNT_RESTORES_POLICY_UPDATE_V2
          ? (v = r.Action.AccountRestoreOpenSettings)
          : n.promptType === Xe.BROADER_AUTHENTICATOR_UPSELL
            ? (v = r.Action.SetUpAuthenticatorInBanner)
            : n.promptType === Xe.EMAIL_2SV_UPSELL &&
              (v = r.Action.SetUpEmail2SV),
        n.isGeneric)
      )
        if (n.metadata.displayType === ze.TEXT_ONLY_BANNER)
          h = r.Description.GenericTextOnlyBanner(n.metadata.headerResource);
        else h = "";
      else
        switch (n.promptType) {
          case Xe.CHANGE_PASSWORD__SUSPECTED_COMPROMISE:
            h = r.Header.UnusualActivityDetected;
            break;
          case Xe.CHANGE_PASSWORD__BREACHED_CREDENTIAL:
            h = r.Header.YourPasswordMightBeStolen;
            break;
          case Xe.ACCOUNT_RESTORES_POLICY_UPDATE:
            h = r.Header.AccountRestoresPolicyUpdate;
            break;
          case Xe.ACCOUNT_RESTORES_POLICY_UPDATE_V2:
            h = r.Header.KeepYourAccountSafeLong;
            break;
          case Xe.ACCOUNT_RESTORES_POLICY_UPDATE_V3:
            h = r.Header.AccountRestoresPolicyUpdateV3;
            break;
          case Xe.BROADER_AUTHENTICATOR_UPSELL:
            h = r.Header.BoostYourAccountSecurity;
            break;
          case Xe.EMAIL_2SV_UPSELL:
            h = r.Header.Email2SVUpsell;
            break;
          default:
            h = "";
        }
      if (n.isGeneric)
        if (n.metadata.displayType === ze.TEXT_ONLY_BANNER)
          S = r.Header.GenericTextOnlyBanner(n.metadata.bodyResource);
        else S = "";
      else
        switch (n.promptType) {
          case Xe.ACCOUNT_RESTORES_POLICY_UPDATE:
            var A = new Date(
              n.metadata.accountRestoresPolicyEffectiveTimestamp,
            ).toLocaleDateString(void 0, {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            S =
              r.Description.AccountRestoresPolicyWithDate(A) +
              " " +
              r.Description.AuthenticatorSetupPrompt(Uo);
            break;
          case Xe.ACCOUNT_RESTORES_POLICY_UPDATE_V2:
            S = r.Description.AuthenticatorSetupPromptNew(Uo);
            break;
          case Xe.ACCOUNT_RESTORES_POLICY_UPDATE_V3:
            S = r.Description.AccountRestoresPolicyUpdateV3(Do);
            break;
          case Xe.CHANGE_PASSWORD__SUSPECTED_COMPROMISE:
            S =
              r.Description.UnusualActivity +
              " " +
              r.Description.ChangeYourPassword;
            break;
          case Xe.CHANGE_PASSWORD__BREACHED_CREDENTIAL:
            S =
              r.Description.ChangeYourPasswordImmediately +
              " " +
              r.Description.NoChangeForceReset(
                Ko(n.metadata.forceResetTimestamp),
              ) +
              " " +
              r.Description.LearnMoreHere(
                "https://en.help.roblox.com/hc/articles/4416940180500-Why-am-I-seeing-a-banner-asking-me-to-change-my-password-",
              );
            break;
          case Xe.BROADER_AUTHENTICATOR_UPSELL:
            S = r.Description.ReceiveSecurityCodesMessage;
            break;
          case Xe.EMAIL_2SV_UPSELL:
            S = r.Description.Email2SVUpsellMessageBody(Do);
            break;
          default:
            S = "";
        }
      return "" === h || "" === S
        ? I().createElement(I().Fragment, null)
        : I().createElement(
            "div",
            { className: "security-banner-wrapper" },
            I().createElement(
              "div",
              { className: "security-banner" },
              I().createElement(
                "div",
                { className: "banner-start" },
                d &&
                  I().createElement(
                    "div",
                    { className: "banner-icon" },
                    I().createElement("div", { className: "icon-warning" }),
                  ),
                p &&
                  I().createElement("div", { className: "banner-icon-lock" }),
                I().createElement(
                  "div",
                  { className: "banner-content" },
                  I().createElement("h2", { className: "banner-header" }, h),
                  I().createElement("div", {
                    className: "banner-description",
                    dangerouslySetInnerHTML: { __html: S },
                  }),
                ),
                m &&
                  I().createElement(
                    "button",
                    {
                      type: "button",
                      className: "close banner-close",
                      "aria-label": r.Action.RemindMeLater,
                      onClick: c,
                    },
                    I().createElement("span", { className: "icon-close" }),
                  ),
              ),
              I().createElement(
                "div",
                { className: "banner-buttons" },
                E &&
                  I().createElement(
                    "span",
                    { className: "banner-button" },
                    I().createElement(
                      "button",
                      {
                        type: "button",
                        className: "btn-secondary-md",
                        "aria-label": r.Action.DismissForever,
                        onClick: function () {
                          i({
                            type: xo.SET_MODAL_STATE,
                            modalState: Vo.CHANGE_PASSWORD_DISMISS_CONFIRMATION,
                          });
                        },
                        disabled: u,
                      },
                      r.Action.DismissForever,
                    ),
                  ),
                f &&
                  I().createElement(
                    "span",
                    { className: "banner-button banner-button-last" },
                    I().createElement(
                      "button",
                      {
                        type: "button",
                        className: "btn-cta-md",
                        "aria-label": v,
                        onClick: function () {
                          return Qo(void 0, void 0, void 0, function () {
                            return zo(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return n.promptType !==
                                    Xe.ACCOUNT_RESTORES_POLICY_UPDATE &&
                                    n.promptType !==
                                      Xe.ACCOUNT_RESTORES_POLICY_UPDATE_V2
                                    ? [3, 2]
                                    : [4, l()];
                                case 1:
                                  return (
                                    e.sent(),
                                    window.open(Do + Po, "_self"),
                                    [3, 3]
                                  );
                                case 2:
                                  n.promptType ===
                                  Xe.BROADER_AUTHENTICATOR_UPSELL
                                    ? i({
                                        type: xo.SET_MODAL_STATE,
                                        modalState:
                                          Vo.AUTHENTICATOR_UPSELL_OPENING,
                                      })
                                    : n.promptType === Xe.EMAIL_2SV_UPSELL
                                      ? window.open(Do + Io, "_self")
                                      : i({
                                          type: xo.SET_MODAL_STATE,
                                          modalState: Vo.CHANGE_PASSWORD_INTRO,
                                        }),
                                    (e.label = 3);
                                case 3:
                                  return [2];
                              }
                            });
                          });
                        },
                        disabled: u,
                      },
                      v,
                    ),
                  ),
                m &&
                  I().createElement(
                    P.Fragment,
                    null,
                    u
                      ? I().createElement("span", {
                          className: "banner-close icon-close spinner-circle",
                        })
                      : I().createElement(
                          "button",
                          {
                            type: "button",
                            className: "close banner-close",
                            "aria-label": r.Action.RemindMeLater,
                            onClick: function () {
                              return Qo(void 0, void 0, Promise, function () {
                                return zo(this, function (e) {
                                  switch (e.label) {
                                    case 0:
                                      return n.promptType ===
                                        Xe.ACCOUNT_RESTORES_POLICY_UPDATE ||
                                        n.promptType ===
                                          Xe.ACCOUNT_RESTORES_POLICY_UPDATE_V2 ||
                                        n.promptType ===
                                          Xe.ACCOUNT_RESTORES_POLICY_UPDATE_V3 ||
                                        (n.isGeneric &&
                                          n.metadata.displayType ===
                                            ze.TEXT_ONLY_BANNER)
                                        ? [4, l()]
                                        : [3, 2];
                                    case 1:
                                      return e.sent(), [3, 4];
                                    case 2:
                                      return [4, c()];
                                    case 3:
                                      e.sent(), (e.label = 4);
                                    case 4:
                                      return [2];
                                  }
                                });
                              });
                            },
                          },
                          I().createElement("span", {
                            className: "icon-close",
                          }),
                        ),
                  ),
              ),
            ),
          );
    },
    Xo = function (e) {
      var t = e.positiveButton,
        n = e.negativeButton,
        r = e.children;
      return I().createElement(
        Mo.Modal.Footer,
        null,
        I().createElement(
          "div",
          { className: "modal-modern-footer-buttons" },
          null !== n &&
            I().createElement(
              "button",
              {
                type: "button",
                className: "btn-secondary-md modal-modern-footer-button",
                "aria-label": n.label,
                disabled: !n.enabled,
                onClick: n.action,
              },
              n.content,
            ),
          I().createElement(
            "button",
            {
              type: "button",
              className: "btn-cta-md modal-modern-footer-button",
              "aria-label": t.label,
              disabled: !t.enabled,
              onClick: t.action,
            },
            t.content,
          ),
        ),
        r,
      );
    };
  !(function (e) {
    (e.BACK = "BACK"), (e.CLOSE = "CLOSE"), (e.HIDDEN = "HIDDEN");
  })(Fo || (Fo = {}));
  var jo = function (e) {
      var t = e.headerText,
        n = e.buttonType,
        r = e.buttonAction,
        o = e.buttonEnabled,
        i = e.headerInfo;
      return I().createElement(
        Mo.Modal.Header,
        { useBaseBootstrapComponent: !0 },
        (function (e, t, n) {
          switch (e) {
            case Fo.BACK:
              return I().createElement(
                "button",
                {
                  type: "button",
                  className: "modal-modern-header-button",
                  onClick: t,
                  disabled: !n,
                },
                I().createElement("span", { className: "icon-back" }),
              );
            case Fo.CLOSE:
              return I().createElement(
                "button",
                {
                  type: "button",
                  className: "modal-modern-header-button",
                  onClick: t,
                  disabled: !n,
                },
                I().createElement("span", { className: "icon-close" }),
              );
            case Fo.HIDDEN:
            default:
              return I().createElement("div", null);
          }
        })(n, r, o),
        I().createElement(Mo.Modal.Title, null, t),
        I().createElement("div", { className: "modal-modern-header-info" }, i),
      );
    },
    Jo = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    Zo = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    $o = function (e) {
      var t = e.closeModal,
        n = Go().state,
        r = n.resources,
        o = n.requestService,
        i = n.promptAssignment,
        a = (0, P.useState)(null),
        u = a[0],
        s = a[1],
        l = (0, P.useState)(!1),
        c = l[0],
        p = l[1],
        d = function () {
          return Jo(void 0, void 0, void 0, function () {
            var e;
            return Zo(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    o.promptAssignments.updateForCurrentUser(
                      tt.DISMISS_PROMPT,
                      i.promptType,
                    ),
                  ];
                case 1:
                  return (
                    (e = t.sent()).isError &&
                      console.warn(
                        Ro,
                        "Dismissing Account Restores Policy Upsell prompt failed with error",
                        e.error && Qe[e.error],
                      ),
                    [2]
                  );
              }
            });
          });
        },
        f = {
          content: c
            ? I().createElement("span", {
                className: "spinner spinner-xs spinner-no-margin",
              })
            : r.Action.SetUpAuthenticatorAccountRestoresPolicyUpsell,
          label: r.Action.SetUpAuthenticatorAccountRestoresPolicyUpsell,
          enabled: !c,
          action: function () {
            return Jo(void 0, void 0, void 0, function () {
              return Zo(this, function (e) {
                switch (e.label) {
                  case 0:
                    return s(null), p(!0), [4, d()];
                  case 1:
                    return e.sent(), window.open(Do + Po, "_self"), [2];
                }
              });
            });
          },
        };
      return I().createElement(
        I().Fragment,
        null,
        I().createElement(jo, {
          headerText: r.Header.AccountRestoresPolicyUpsell,
          buttonType: Fo.CLOSE,
          buttonAction: function () {
            return Jo(void 0, void 0, void 0, function () {
              return Zo(this, function (e) {
                switch (e.label) {
                  case 0:
                    return t(), [4, d()];
                  case 1:
                    return e.sent(), [2];
                }
              });
            });
          },
          buttonEnabled: !0,
          headerInfo: null,
        }),
        I().createElement(
          Mo.Modal.Body,
          null,
          I().createElement("div", { className: "modal-lock-icon" }),
          I().createElement("p", {
            className: "modal-margin-bottom-sm",
            dangerouslySetInnerHTML: {
              __html: r.Description.AccountRestoresPolicyUpsellMessageBody(Do),
            },
          }),
          I().createElement("p", { className: "text-error xsmall" }, u),
        ),
        I().createElement(Xo, { positiveButton: f, negativeButton: null }),
      );
    },
    ei = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    ti = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    ni = function (e) {
      var t = e.closeModal,
        n = Go().state,
        r = n.resources,
        o = n.requestService,
        i = n.promptAssignment,
        a = (0, P.useState)(null),
        u = a[0],
        s = a[1],
        l = (0, P.useState)(!1),
        c = l[0],
        p = l[1],
        d = function () {
          return ei(void 0, void 0, void 0, function () {
            var e;
            return ti(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    o.promptAssignments.updateForCurrentUser(
                      tt.DISMISS_PROMPT,
                      i.promptType,
                    ),
                  ];
                case 1:
                  return (
                    (e = t.sent()).isError &&
                      console.warn(
                        Ro,
                        "Dismissing Authenticator Upsell prompt failed with error",
                        e.error && Qe[e.error],
                      ),
                    [2]
                  );
              }
            });
          });
        },
        f = {
          content: c
            ? I().createElement("span", {
                className: "spinner spinner-xs spinner-no-margin",
              })
            : r.Action.AuthenticatorUpsellNextButtonMessage,
          label: r.Action.AuthenticatorUpsellNextButtonMessage,
          enabled: !c,
          action: function () {
            return ei(void 0, void 0, void 0, function () {
              return ti(this, function (e) {
                switch (e.label) {
                  case 0:
                    return s(null), p(!0), [4, d()];
                  case 1:
                    return e.sent(), window.open(Do + Po, "_self"), [2];
                }
              });
            });
          },
        };
      return I().createElement(
        I().Fragment,
        null,
        I().createElement(jo, {
          headerText: r.Header.AuthenticatorUpsellDownloadAuthenticator,
          buttonType: Fo.CLOSE,
          buttonAction: function () {
            return ei(void 0, void 0, void 0, function () {
              return ti(this, function (e) {
                switch (e.label) {
                  case 0:
                    return t(), [4, d()];
                  case 1:
                    return e.sent(), [2];
                }
              });
            });
          },
          buttonEnabled: !c,
          headerInfo: null,
        }),
        I().createElement(
          Mo.Modal.Body,
          null,
          I().createElement(
            "div",
            null,
            I().createElement(
              "p",
              null,
              r.Label.AuthenticatorUpsellDownloadInstruction,
            ),
          ),
          I().createElement(
            "div",
            { className: "authenticator-upsell-download-grid" },
            I().createElement(
              "div",
              { className: "grid-container" },
              I().createElement(
                "div",
                { className: "grid-item" },
                I().createElement("div", { className: "modal-checkmark-icon" }),
              ),
              I().createElement(
                "div",
                { className: "grid-item" },
                I().createElement(
                  "div",
                  null,
                  r.Label.AuthenticatorUpsellMicrosoftOption,
                ),
              ),
              I().createElement(
                "div",
                { className: "grid-item" },
                I().createElement("div", { className: "modal-checkmark-icon" }),
              ),
              I().createElement(
                "div",
                { className: "grid-item" },
                I().createElement(
                  "div",
                  null,
                  r.Label.AuthenticatorUpsellGoogleOption,
                ),
              ),
              I().createElement(
                "div",
                { className: "grid-item" },
                I().createElement("div", { className: "modal-checkmark-icon" }),
              ),
              I().createElement(
                "div",
                { className: "grid-item" },
                I().createElement(
                  "div",
                  null,
                  r.Label.AuthenticatorUpsellTwilioOption,
                ),
              ),
            ),
          ),
          I().createElement("p", { className: "text-error xsmall" }, u),
        ),
        I().createElement(Xo, { positiveButton: f, negativeButton: null }),
      );
    },
    ri = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    oi = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    ii = function (e) {
      var t = e.closeModal,
        n = Go(),
        r = n.state,
        o = r.resources,
        i = r.requestService,
        a = r.promptAssignment,
        u = n.dispatch,
        s = (0, P.useState)(null),
        l = s[0],
        c = s[1],
        p = (0, P.useState)(!1),
        d = p[0],
        f = p[1],
        E = {
          content: d
            ? I().createElement("span", {
                className: "spinner spinner-xs spinner-no-margin",
              })
            : o.Action.AuthenticatorUpsellSetupAuthenticatorButtonMessage,
          label: o.Action.AuthenticatorUpsellSetupAuthenticatorButtonMessage,
          enabled: !d,
          action: function () {
            c(null),
              f(!0),
              u({
                type: xo.SET_MODAL_STATE,
                modalState: Vo.AUTHENTICATOR_UPSELL_DOWNLOAD_APPS,
              });
          },
        };
      return I().createElement(
        I().Fragment,
        null,
        I().createElement(jo, {
          headerText: o.Header.AuthenticatorUpsellWelcomeMessage,
          buttonType: Fo.CLOSE,
          buttonAction: function () {
            return ri(void 0, void 0, void 0, function () {
              return oi(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      t(),
                      [
                        4,
                        ri(void 0, void 0, void 0, function () {
                          var e;
                          return oi(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [
                                  4,
                                  i.promptAssignments.updateForCurrentUser(
                                    tt.DISMISS_PROMPT,
                                    a.promptType,
                                  ),
                                ];
                              case 1:
                                return (
                                  (e = t.sent()).isError &&
                                    console.warn(
                                      Ro,
                                      "Dismissing Authenticator Upsell prompt failed with error",
                                      e.error && Qe[e.error],
                                    ),
                                  [2]
                                );
                            }
                          });
                        }),
                      ]
                    );
                  case 1:
                    return e.sent(), [2];
                }
              });
            });
          },
          buttonEnabled: !d,
          headerInfo: null,
        }),
        I().createElement(
          Mo.Modal.Body,
          null,
          I().createElement(
            "div",
            { className: "authenticator-upsell-intro-grid" },
            I().createElement(
              "div",
              { className: "grid-container" },
              I().createElement(
                "div",
                { className: "grid-item" },
                I().createElement("div", {
                  className: "modal-two-factors-icon",
                }),
              ),
              I().createElement(
                "div",
                { className: "grid-item" },
                I().createElement(
                  "b",
                  null,
                  o.Label.AuthenticatorUpsellTwoFactorHeadline,
                ),
                I().createElement(
                  "div",
                  null,
                  o.Label.AuthenticatorUpsellTwoFactorMessage,
                ),
              ),
              I().createElement(
                "div",
                { className: "grid-item" },
                I().createElement("div", { className: "modal-protect-icon" }),
              ),
              I().createElement(
                "div",
                { className: "grid-item" },
                I().createElement(
                  "b",
                  null,
                  o.Label.AuthenticatorUpsellProtectRobuxHeadline,
                ),
                I().createElement(
                  "div",
                  null,
                  o.Label.AuthenticatorUpsellProtectRobuxMessage,
                ),
              ),
              I().createElement(
                "div",
                { className: "grid-item" },
                I().createElement("div", { className: "modal-keep-bad-icon" }),
              ),
              I().createElement(
                "div",
                { className: "grid-item" },
                I().createElement(
                  "b",
                  null,
                  o.Label.AuthenticatorUpsellBadActorHeadline,
                ),
                I().createElement(
                  "div",
                  null,
                  o.Label.AuthenticatorUpsellBadActorMessage,
                ),
              ),
            ),
          ),
          I().createElement("p", { className: "text-error xsmall" }, l),
        ),
        I().createElement(Xo, { positiveButton: E, negativeButton: null }),
      );
    },
    ai = function (e) {
      var t = e.closeModal,
        n = Go().state.resources;
      return I().createElement(
        I().Fragment,
        null,
        I().createElement(jo, {
          headerText: n.Header.Success,
          buttonType: Fo.CLOSE,
          buttonAction: t,
          buttonEnabled: !0,
          headerInfo: null,
        }),
        I().createElement(
          Mo.Modal.Body,
          null,
          I().createElement("div", { className: "modal-lock-icon" }),
          I().createElement(
            "p",
            { className: "modal-margin-bottom-large" },
            n.Description.ChangeYourPasswordSuccess,
          ),
        ),
      );
    },
    ui = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    si = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    li = function (e, t) {
      return function (n) {
        return ui(void 0, void 0, Promise, function () {
          return si(this, function (r) {
            switch (r.label) {
              case 0:
                return "Enter" === n.key && t
                  ? (n.preventDefault(), n.stopPropagation(), [4, e()])
                  : [3, 2];
              case 1:
                r.sent(), (r.label = 2);
              case 2:
                return [2];
            }
          });
        });
      };
    },
    ci = function () {
      return Promise.resolve(null);
    },
    pi = function (e, t, n, r) {
      return function (o) {
        return ui(void 0, void 0, void 0, function () {
          var i;
          return si(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, e.password.validate(n, o)];
              case 1:
                return (i = a.sent()).isError ? [2, r] : [2, ko(t, i.value)];
            }
          });
        });
      };
    },
    di = function (e, t) {
      return function (n) {
        return ui(void 0, void 0, void 0, function () {
          return si(this, function (r) {
            return n === t
              ? [2, Promise.resolve(null)]
              : [2, Promise.resolve(e)];
          });
        });
      };
    },
    fi = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return function (t) {
        return ui(void 0, void 0, void 0, function () {
          var n, r;
          return si(this, function (o) {
            switch (o.label) {
              case 0:
                (n = 0), (o.label = 1);
              case 1:
                return n < e.length ? [4, e[n](t)] : [3, 4];
              case 2:
                if (null !== (r = o.sent())) return [2, r];
                o.label = 3;
              case 3:
                return (n += 1), [3, 1];
              case 4:
                return [2, null];
            }
          });
        });
      };
    },
    Ei = function (e, t, n, r, o, i) {
      return function (a) {
        return ui(void 0, void 0, Promise, function () {
          var u, s;
          return si(this, function (l) {
            switch (l.label) {
              case 0:
                return (
                  (u = a.currentTarget.value),
                  void 0 === t || t.test(u) || (u = e),
                  void 0 !== i && i(u),
                  r(u),
                  (s = o),
                  [4, n(u)]
                );
              case 1:
                return s.apply(void 0, [l.sent()]), [2];
            }
          });
        });
      };
    },
    mi = function (e) {
      var t = e.id,
        n = e.inputType,
        r = e.placeholder,
        o = e.disabled,
        i = e.value,
        a = e.error,
        u = e.canSubmit,
        s = e.validate,
        l = e.setValue,
        c = e.setError,
        p = e.handleSubmit,
        d = e.onChange,
        f = e.label,
        E = e.bottomLabel,
        m = e.inputMode,
        h = e.autoComplete,
        S = e.maxLength,
        v = e.validCharactersRegEx,
        A = e.hideFeedback,
        _ = e.concealInput,
        N = e.autoFocus,
        T = "" !== i && null === a,
        b = "" !== i && null !== a,
        O = T || b;
      return I().createElement(
        "div",
        { className: "input-control-wrapper" },
        f &&
          I().createElement(
            "label",
            { className: "text-label xsmall", htmlFor: t },
            f,
          ),
        I().createElement(
          Mo.FormGroup,
          {
            controlId: t,
            className:
              (O ? "form-has-feedback" : "") +
              " " +
              (T ? "form-has-success" : "") +
              " " +
              (b ? "form-has-error" : ""),
          },
          I().createElement(Mo.FormControl, {
            as: "input",
            className:
              "input-field" +
              (_ && i.length > 0 ? " input-field-concealed" : ""),
            type: n,
            inputMode: m,
            autoComplete: h,
            maxLength: S,
            disabled: o,
            value: i,
            placeholder: r,
            onChange: Ei(i, v, s, l, c, d),
            onKeyDown: li(p, u),
            autoFocus: N,
          }),
          !o &&
            !A &&
            T &&
            I().createElement("span", { className: "icon-checkmark-on" }),
          !o &&
            !A &&
            b &&
            I().createElement("span", { className: "icon-close" }),
          I().createElement(
            "div",
            { className: "form-control-label bottom-label xsmall" },
            !o && b ? a : E || " ",
          ),
        ),
      );
    },
    hi = function (e) {
      return function () {
        return e({
          type: xo.SET_MODAL_STATE,
          modalState: Vo.CHANGE_PASSWORD_INTRO,
        });
      };
    },
    Si = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    vi = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    Ai = function () {
      var e = Go(),
        t = e.state,
        n = t.username,
        r = t.resources,
        o = t.requestService,
        i = e.dispatch,
        a = (0, P.useState)(""),
        u = a[0],
        s = a[1],
        l = (0, P.useState)(null),
        c = l[0],
        p = l[1],
        d = (0, P.useState)(""),
        f = d[0],
        E = d[1],
        m = (0, P.useState)(null),
        h = m[0],
        S = m[1],
        v = (0, P.useState)(""),
        A = v[0],
        _ = v[1],
        N = (0, P.useState)(null),
        T = N[0],
        b = N[1],
        O = (0, P.useState)(null),
        y = O[0],
        w = O[1],
        C = (0, P.useState)(!1),
        R = C[0],
        D = C[1],
        U = (0, P.useState)(!1),
        g = U[0],
        L = U[1],
        M = function () {
          return w(null);
        },
        k = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return function (t) {
            e.forEach(function (e) {
              return e(t);
            });
          };
        },
        x = function () {
          return Si(void 0, void 0, void 0, function () {
            var e;
            return vi(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    w(null), L(!0), [4, o.password.changeForCurrentUser(u, f)]
                  );
                case 1:
                  return (e = t.sent()).isError
                    ? (L(!1),
                      e.error === ve.INVALID_CURRENT_PASSWORD ? D(!0) : D(!1),
                      w(
                        (function (e, t) {
                          switch (t) {
                            case ve.FLOODED:
                              return e.Message.Error.Passwords.Flooded;
                            case ve.INVALID_PASSWORD:
                              return e.Message.Error.Passwords.InvalidPassword;
                            case ve.INVALID_CURRENT_PASSWORD:
                              return e.Message.Error.Passwords
                                .InvalidCurrentPassword;
                            default:
                              return e.Message.Error.Passwords.Default;
                          }
                        })(r, e.error),
                      ),
                      [2])
                    : (i({
                        type: xo.SET_MODAL_STATE,
                        modalState: Vo.CHANGE_PASSWORD_CONFIRMATION,
                      }),
                      [2]);
              }
            });
          });
        },
        V =
          "" !== u &&
          null === c &&
          "" !== f &&
          null === h &&
          "" !== A &&
          null === T,
        F = {
          content: g
            ? I().createElement("span", {
                className: "spinner spinner-xs spinner-no-margin",
              })
            : r.Action.SubmitChangePassword,
          label: r.Action.SubmitChangePassword,
          enabled: !g && V,
          action: x,
        },
        W = I().createElement(
          "a",
          {
            href: "https://en.help.roblox.com/hc/articles/203313070-I-Forgot-My-Password",
            className: "bottom-label-link",
            target: "_blank",
            rel: "noreferrer",
          },
          r.Label.IForgotMyPassword,
        ),
        H = I().createElement(
          P.Fragment,
          null,
          I().createElement("div", { className: "shield-check-icon xsmall" }),
          I().createElement(
            "div",
            {
              className:
                "bottom-label-text-with-start-margin text-label xsmall",
            },
            r.Label.UseAUniquePassword,
          ),
        );
      return I().createElement(
        I().Fragment,
        null,
        I().createElement(jo, {
          headerText: r.Header.CreateAStrongPassword,
          buttonType: Fo.BACK,
          buttonAction: hi(i),
          buttonEnabled: !g,
          headerInfo: null,
        }),
        I().createElement(
          Mo.Modal.Body,
          null,
          I().createElement(mi, {
            id: "inputCurrentPassword",
            label: r.Label.CurrentPassword,
            bottomLabel: W,
            inputType: "password",
            autoComplete: "current-password",
            placeholder: "",
            disabled: g,
            value: u,
            setValue: s,
            error: c || (R && y) || null,
            setError: p,
            validate: ci,
            canSubmit: V,
            handleSubmit: x,
            onChange: M,
          }),
          I().createElement(mi, {
            id: "inputNewPassword",
            label: r.Label.NewPassword,
            bottomLabel: H,
            inputType: "password",
            autoComplete: "new-password",
            placeholder: r.Label.AtLeastCharacters(8),
            disabled: g,
            value: f,
            setValue: E,
            error: h,
            setError: k(function () {
              return b(null);
            }, S),
            validate: fi(
              pi(o, r, n, r.Message.Error.PasswordValidation.Default),
              "" !== A ? di(r.Message.Error.Input.PasswordsDoNotMatch, A) : ci,
            ),
            canSubmit: V,
            handleSubmit: x,
            onChange: M,
          }),
          I().createElement(mi, {
            id: "inputNewPasswordAgain",
            label: r.Label.ConfirmNewPassword,
            inputType: "password",
            autoComplete: "new-password",
            placeholder: "",
            disabled: g,
            value: A,
            setValue: _,
            error: T || (!R && y) || null,
            setError: k(function () {
              return S(null);
            }, b),
            validate: fi(
              di(r.Message.Error.Input.PasswordsDoNotMatch, f),
              pi(o, r, n, r.Message.Error.PasswordValidation.Default),
            ),
            canSubmit: V,
            handleSubmit: x,
            onChange: M,
          }),
        ),
        I().createElement(Xo, { positiveButton: F, negativeButton: null }),
      );
    },
    _i = function (e) {
      var t = e.closeModal,
        n = Go(),
        r = n.state,
        o = r.promptAssignment,
        i = r.resources,
        a = (r.requestService, n.dispatch),
        u = (0, P.useState)(null),
        s = u[0],
        l = u[1],
        c = (0, P.useState)(!1),
        p = c[0],
        d = c[1],
        f = "An unexpected issue occurred while displaying this text.";
      o.isGeneric ||
        (f =
          o.promptType !== Xe.CHANGE_PASSWORD__BREACHED_CREDENTIAL
            ? i.Description.UnusualActivity +
              " " +
              i.Description.ChangeYourPassword
            : i.Description.ChangeYourPasswordImmediately +
              " " +
              i.Description.NoChangeForceReset(
                Ko(o.metadata.forceResetTimestamp),
              ));
      var E = {
        content: p
          ? I().createElement("span", {
              className: "spinner spinner-xs spinner-no-margin",
            })
          : i.Action.ContinueChangePassword,
        label: i.Action.ContinueChangePassword,
        enabled: !p,
        action: function () {
          l(null),
            d(!0),
            a({
              type: xo.SET_MODAL_STATE,
              modalState: Vo.CHANGE_PASSWORD_FORM,
            });
        },
      };
      return I().createElement(
        I().Fragment,
        null,
        I().createElement(jo, {
          headerText: i.Header.ChangeYourPassword,
          buttonType: Fo.CLOSE,
          buttonAction: t,
          buttonEnabled: !p,
          headerInfo: null,
        }),
        I().createElement(
          Mo.Modal.Body,
          null,
          I().createElement("div", { className: "modal-lock-icon" }),
          I().createElement("p", {
            className: "modal-margin-bottom",
            dangerouslySetInnerHTML: { __html: f },
          }),
          I().createElement("p", { className: "text-error xsmall" }, s),
        ),
        I().createElement(Xo, { positiveButton: E, negativeButton: null }),
      );
    },
    Ni = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    Ti = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    bi = function (e) {
      var t = e.closeModal,
        n = Go(),
        r = n.state,
        o = r.promptAssignment,
        i = r.resources,
        a = r.requestService,
        u = n.dispatch,
        s = (0, P.useState)(!1),
        l = s[0],
        c = s[1],
        p = i.Description.AreYouSureDismissForeverChangePassword,
        d = i.Action.ConfirmDismissForeverChangePassword,
        f = i.Action.AbortDismissForeverChangePassword,
        E = {
          content: f,
          label: f,
          enabled: !l,
          action: function () {
            u({
              type: xo.SET_MODAL_STATE,
              modalState: Vo.CHANGE_PASSWORD_INTRO,
            });
          },
        },
        m = {
          content: l
            ? I().createElement("span", {
                className: "spinner spinner-xs spinner-no-margin",
              })
            : d,
          label: d,
          enabled: !l,
          action: function () {
            return Ni(void 0, void 0, void 0, function () {
              var e;
              return Ti(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      c(!0),
                      [
                        4,
                        a.promptAssignments.updateForCurrentUser(
                          tt.DISABLE_PROMPT,
                          o.promptType,
                        ),
                      ]
                    );
                  case 1:
                    return (e = n.sent()).isError
                      ? (c(!1),
                        console.warn(
                          Ro,
                          "Disabling prompt failed with error",
                          e.error && Qe[e.error],
                        ),
                        [2])
                      : (u({ type: xo.DISMISS_FOREVER }), t(), [2]);
                }
              });
            });
          },
        };
      return I().createElement(
        I().Fragment,
        null,
        I().createElement(jo, {
          headerText: i.Header.AreYouSure,
          buttonType: Fo.HIDDEN,
          buttonAction: t,
          buttonEnabled: !0,
          headerInfo: null,
        }),
        I().createElement(
          Mo.Modal.Body,
          null,
          I().createElement("div", { className: "modal-lock-icon" }),
          I().createElement("p", null, p),
        ),
        I().createElement(Xo, { positiveButton: E, negativeButton: m }),
      );
    },
    Oi = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    yi = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    wi = function (e) {
      var t = e.closeModal,
        n = Go().state,
        r = n.resources,
        o = n.requestService,
        i = n.promptAssignment,
        a = (0, P.useState)(null),
        u = a[0],
        s = a[1],
        l = (0, P.useState)(!1),
        c = l[0],
        p = l[1],
        d = function () {
          return Oi(void 0, void 0, void 0, function () {
            var e;
            return yi(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    o.promptAssignments.updateForCurrentUser(
                      tt.DISMISS_PROMPT,
                      i.promptType,
                    ),
                  ];
                case 1:
                  return (
                    (e = t.sent()).isError &&
                      console.warn(
                        Ro,
                        "Dismissing Account Restores Policy Upsell prompt failed with error",
                        e.error && Qe[e.error],
                      ),
                    [2]
                  );
              }
            });
          });
        },
        f = {
          content: c
            ? I().createElement("span", {
                className: "spinner spinner-xs spinner-no-margin",
              })
            : r.Action.SetUpEmail2SV,
          label: r.Action.SetUpEmail2SV,
          enabled: !c,
          action: function () {
            return Oi(void 0, void 0, void 0, function () {
              return yi(this, function (e) {
                switch (e.label) {
                  case 0:
                    return s(null), p(!0), [4, d()];
                  case 1:
                    return e.sent(), window.open(Do + Io, "_self"), [2];
                }
              });
            });
          },
        };
      return I().createElement(
        I().Fragment,
        null,
        I().createElement(jo, {
          headerText: r.Header.Email2SVUpsell,
          buttonType: Fo.CLOSE,
          buttonAction: function () {
            return Oi(void 0, void 0, void 0, function () {
              return yi(this, function (e) {
                switch (e.label) {
                  case 0:
                    return t(), [4, d()];
                  case 1:
                    return e.sent(), [2];
                }
              });
            });
          },
          buttonEnabled: !0,
          headerInfo: null,
        }),
        I().createElement(
          Mo.Modal.Body,
          null,
          I().createElement("div", { className: "modal-lock-icon" }),
          I().createElement("p", {
            className: "modal-margin-bottom-sm",
            dangerouslySetInnerHTML: {
              __html: r.Description.Email2SVUpsellMessageBody(Do),
            },
          }),
          I().createElement("p", { className: "text-error xsmall" }, u),
        ),
        I().createElement(Xo, { positiveButton: f, negativeButton: null }),
      );
    },
    Ci = function () {
      var e = Go(),
        t = e.state,
        n = t.isFlowComplete,
        r = t.modalState,
        o = t.promptAssignment,
        i = e.dispatch,
        a = (0, P.useState)(!0),
        u = a[0],
        s = a[1],
        l = function () {
          return s(!1);
        },
        c = (function (e) {
          switch (e) {
            case Vo.CHANGE_PASSWORD_INTRO:
              return { innerFragment: _i, canClickBackdropToClose: !0 };
            case Vo.CHANGE_PASSWORD_FORM:
              return { innerFragment: Ai, canClickBackdropToClose: !1 };
            case Vo.CHANGE_PASSWORD_CONFIRMATION:
              return { innerFragment: ai, canClickBackdropToClose: !0 };
            case Vo.CHANGE_PASSWORD_DISMISS_CONFIRMATION:
              return { innerFragment: bi, canClickBackdropToClose: !1 };
            case Vo.AUTHENTICATOR_UPSELL_OPENING:
              return { innerFragment: ii, canClickBackdropToClose: !1 };
            case Vo.AUTHENTICATOR_UPSELL_DOWNLOAD_APPS:
              return { innerFragment: ni, canClickBackdropToClose: !1 };
            case Vo.ACCOUNT_RESTORE_POLICY_UPSELL:
              return { innerFragment: $o, canClickBackdropToClose: !1 };
            case Vo.EMAIL_2SV_UPSELL:
              return { innerFragment: wi, canClickBackdropToClose: !1 };
            default:
              return null;
          }
        })(r),
        p =
          o.promptType === Xe.AUTHENTICATOR_UPSELL ||
          o.promptType === Xe.ACCOUNT_RESTORES_POLICY_UPSELL ||
          (o.promptType === Xe.BROADER_AUTHENTICATOR_UPSELL &&
            !0 !== o.isGeneric &&
            !o.metadata.showBanner) ||
          (o.promptType === Xe.EMAIL_2SV_UPSELL &&
            !0 !== o.isGeneric &&
            !o.metadata.showBanner);
      return I().createElement(
        I().Fragment,
        null,
        !n && !p && I().createElement(qo, null),
        c &&
          I().createElement(
            Mo.Modal,
            {
              className: "modal-modern modal-modern-security-prompt",
              show: u,
              onHide: l,
              onExited: function () {
                i({ type: xo.SET_MODAL_STATE, modalState: Vo.NONE }), s(!0);
              },
              backdrop: c.canClickBackdropToClose ? void 0 : "static",
            },
            I().createElement(c.innerFragment, { closeModal: l }),
          ),
      );
    },
    Ri = (0, Co.withTranslations)(
      function (e) {
        var t = e.promptAssignment,
          n = e.username,
          r = e.isUserUnder13,
          o = e.eventService,
          i = e.requestService,
          a = e.translate;
        return I().createElement(
          Yo,
          {
            promptAssignment: t,
            username: n,
            isUserUnder13: r,
            eventService: o,
            requestService: i,
            translate: a,
          },
          I().createElement(Ci, null),
        );
      },
      { common: [], feature: "Feature.AccountSecurityPrompt" },
    ),
    Pi = (function () {
      function e(e) {
        this.promptType = e;
      }
      return (
        (e.prototype.sendModalStateViewedEvent = function (e) {
          R().EventStream.SendEventWithTarget(
            go,
            Lo.modalStateViewed,
            { promptType: this.promptType, state: e },
            R().EventStream.TargetTypes.WWW,
          );
        }),
        e
      );
    })(),
    Ii = function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, u);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    Di = function (e, t) {
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
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
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
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
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
          })([i, u]);
        };
      }
    },
    Ui = new wo(),
    gi = function (e, t, n) {
      var r = document.getElementById("account-security-prompt-container");
      if (null !== r) {
        (0, D.unmountComponentAtNode)(r);
        var o = new Pi(e.promptType);
        (0, D.render)(
          I().createElement(Ri, {
            promptAssignment: e,
            username: t,
            isUserUnder13: n,
            eventService: o,
            requestService: Ui,
          }),
          r,
        );
      }
    };
  C.CurrentUser &&
    C.CurrentUser.isAuthenticated &&
    "unknown" === (0, C.DeviceMeta)().appType &&
    (Object.assign(R(), {
      AccountSecurityPrompt: { render: gi, PromptType: Xe },
    }),
    Ii(void 0, void 0, Promise, function () {
      var e, t, n, r, o;
      return Di(this, function (i) {
        switch (i.label) {
          case 0:
            return [4, Ui.promptAssignments.getAllForCurrentUser()];
          case 1:
            if ((e = i.sent()).isError)
              return (
                console.warn(
                  Ro,
                  "Retrieving prompt assignments failed with error",
                  e.error && Qe[e.error],
                ),
                [2]
              );
            if (0 === (t = e.value).length)
              return console.log(Ro, "No assignments were retrieved"), [2];
            if (
              window.location.href.includes(Po) ||
              window.location.href.includes(".com/my/account")
            )
              return [2];
            for (n = null, r = 0; r < t.length; r++) {
              if (
                ((o = t[r]).promptType !== Xe.BROADER_AUTHENTICATOR_UPSELL &&
                  o.promptType !== Xe.EMAIL_2SV_UPSELL) ||
                !1 !== o.isGeneric ||
                o.metadata.pageRestriction !== qe.HOME_PAGE_ONLY ||
                window.location.href.includes(".com/home")
              ) {
                n = o;
                break;
              }
              n = null;
            }
            return (
              null === n || gi(n, C.CurrentUser.name, C.CurrentUser.isUnder13),
              [2]
            );
        }
      });
    }));
})();
//# sourceMappingURL=https://js.rbxcdn.com/615d142695b9af3450f5b8d0503c0134-accountSecurityPrompt.bundle.min.js.map

/* Bundle detector */
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("AccountSecurityPrompt");
