!(function () {
  "use strict";
  var h = Roblox,
    m = CoreRobloxUtilities,
    a = "/upgrades/paymentmethods",
    y = "/info/terms",
    f = "ItemPurchaseAjaxData",
    u = "/games/",
    b = "Purchasing.PurchaseDialog",
    c = "CommonUI.Controls",
    d = "Feature.Premium",
    o = "/v1/users/{userId}/currency",
    p = "/game-passes/v1/game-passes/{productId}/purchase",
    v = "/v1/purchases/products/{productId}",
    i = "/v1/products/{productId}",
    s = "/purchase-warning/v1/purchase-warnings",
    E = "/purchase-warning/v1/purchase-warnings/acknowledge",
    S = "/marketplace-sales/v1/item/{collectibleItemId}/purchase-item",
    U = "/marketplace-sales/v1/item/{collectibleItemId}/purchase-resale",
    l = "Success",
    T = 5e3,
    P = {
      GAME_PASS: "Game Pass",
      BUNDLE: "Bundle",
      BUNDLE_ALIAS: "Package",
      PRIVATE_SERVER: "Private Server",
    },
    A = {
      GAME_PASS: "/v1/game-passes",
      BUNDLE: "/v1/bundles/thumbnails",
      ASSET: "/v1/assets",
    },
    _ = { size: "150x150", format: "Png", isCircular: !1 },
    w = {
      backToShopAction: "Action.BackToShop",
      buyRobuxAndItemAction: "Action.BuyRobuxAndItem",
      buyRobux: "Action.BuyRobux",
      cancelAction: "Action.Cancel",
      equipMyAvatarAction: "Action.EquipMyAvatar",
      goToRobuxStoreAction: "Action.GoToRobuxStore",
      insufficientRobuxHeading: "Heading.InsufficientRobux",
      insufficientRobuxMessage: "Message.InsufficientRobux",
      insufficientRobuxModalBannerv1: "Text.BonusBannerV1",
      insufficientRobuxModalBannerv2: "Text.BonusBannerV2",
      insufficientRobuxHeadingNew: "Heading.InsufficientRobuxNew",
      insufficientRobuxMessageNew: "Message.InsufficientRobuxNew",
      insufficientRobuxLeaveRobloxHeading:
        "Heading.InsufficientRobuxLeaveRoblox",
      insufficientRobuxAskToPurchasePackageMessage:
        "Message.InsufficientRobuxAskToPurchasePackage",
      insufficientRobuxExceedLargestPackageMessage:
        "Message.InsufficientRobuxExceedLargestPackage",
      insufficientRobuxRedirectToExternalPartner:
        "Message.InsufficientRobuxRedirectToExternalPartner",
      purchaseSucceededHeading: "Heading.PurchaseSucceeded",
      purchaseSucceededMessage: "Message.PurchaseSucceeded",
      purchaseSucceededRobuxBalanceMessage:
        "Message.PurchaseSucceededRobuxBalance",
      purchasingTheItemLabel: "Label.PurchasingTheItem",
      waitingForRobuxLabel: "Label.WaitingForRobux",
      errorOccuredHeading: "Heading.ErrorOccured",
      purchasingUnavailableMessage: "Message.PurchasingUnavailable",
      purchaseErrorOccuredMessage: "Message.PurchaseErrorOccured",
      okAction: "Action.Ok",
      commonUiOkAction: "Action.OK",
      commonUiCancelAction: "Action.Cancel",
      commonUiContinueToPaymentAction: "Action.ContinueToPayment",
      featurePremiumScaryModalTitleHeading: "Heading.ScaryModalTitle",
      featurePremiumScaryModalBodyNewDescription:
        "Description.ScaryModalBodyNew",
      featurePremiumScaryModalBody13To17Description:
        "Description.ScaryModalBody13To17",
      featurePremiumScaryModalThreshold1BodyDescription:
        "Description.ScaryModalThreshold1Body",
      featurePremiumScaryModalThreshold2BodyDescription:
        "Description.ScaryModalThreshold2Body",
    },
    g = {
      U13PaymentModal: "U13PaymentModal",
      ParentalConsentWarningPaymentModal13To17:
        "ParentalConsentWarningPaymentModal13To17",
      ParentalAuthorization13To17: "ParentalAuthorization13To17",
      U13MonthlyThreshold1Modal: "U13MonthlyThreshold1Modal",
      RequireEmailVerification: "RequireEmailVerification",
      U13MonthlyThreshold2Modal: "U13MonthlyThreshold2Modal",
      NoAction: "NoAction",
    },
    I = {
      EVENT_NAME: "ItemPurchaseUpsellEvent",
      CONTEXT_NAME: {
        COOKIE_PARSE_FAILED: "COOKIE_PARSE_FAILED",
        PRODUCT_INFO_REQUEST_FAILED: "PRODUCT_INFO_REQUEST_FAILED",
        PRODUCT_INFO_EMPTY: "PRODUCT_INFO_EMPTY",
        PRODUCT_ID_NOT_EXIST: "PRODUCT_ID_NOT_EXIST",
        UPSELL_FAILED: "UPSELL_FAILED",
      },
    },
    t = "WebCatalog",
    r = "WebBundle",
    M = "WebGamePass",
    x = "NoTypeParsedYet",
    C = {
      UnknownError: "UnknownError",
      UnknownErrorNoAsset: "UnknownErrorNoAsset",
      UpsellShown: "UpsellShown",
      UpsellCancelled: "UpsellCancelled",
      UpsellCancelledFromU13Modal: "UpsellCancelledFromU13Modal",
      UpsellContinued: "UpsellContinued",
      UpsellThumbnailProcessFailed: "UpsellThumbnailProcessFailed",
      ContinueBuyRobuxOnExternalSite: "ContinueBuyRobuxOnExternalSite",
      LeaveRobloxFailedToShown: "LeaveRobloxFailedToShown",
      CancelledFromLeaveRobloxModal: "CancelledFromLeaveRobloxModal",
      ConfirmLeaveRobloxModal: "ConfirmLeaveRobloxModal",
      UpsellExceedLargestEntryPoint: "UpsellExceedLargestEntryPoint",
      UpsellExceedLargestShown: "UpsellExceedLargestShown",
      UpsellExceedLargestCancelled: "UpsellExceedLargestCancelled",
      UpsellExceedLargestGoToRobuxStoreClicked:
        "UpsellExceedLargestGoToRobuxStoreClicked",
      UpsellExceedLargestModalExpTrue: "UpsellExceedLargestModalExpTrue",
      UpsellExceedLargestModalExpFalse: "UpsellExceedLargestModalExpTrue",
      UpsellExceedLargestModalExpError: "UpsellExceedLargestModalExpError",
      UpsellExceedLargestMetadataError: "UpsellExceedLargestMetadataError",
      UpsellExceedLargestNoThumbnailImage:
        "UpsellExceedLargestNoThumbnailImage",
      UpsellFromGamesPage: "UpsellFromGamesPage",
      UpsellFailed: "UpsellFailed",
      UpsellFailedDueToNoAvailablePackage:
        "UpsellFailedDueToNoAvailablePackage",
      UpsellFailedDueToFailedPackageRequest:
        "UpsellFailedDueToFailedPackageRequest",
      UpsellExperimentRetrivalFailed: "UpsellExperimentRetrivalFailed",
      AutoPurchaseEntryPoint: "AutoPurchaseEntryPoint",
      AutoPurchaseStarted: "AutoPurchaseStarted",
      AutoPurchaseSucceed: "AutoPurchaseSucceed",
      AutoPurchaseSucceedClose: "AutoPurchaseSucceedClose",
      AutoPurchaseSucceedBackToShop: "AutoPurchaseSucceedBackToShop",
      AutoPurchaseSucceedEquipMyAvatar: "AutoPurchaseSucceedEquipMyAvatar",
      AutoPurchaseFailed: "AutoPurchaseFailed",
      AutoPurchaseErrorFromPurchaseApi: "AutoPurchaseErrorFromPurchaseApi",
      AutoPurchaseFailedDueToStillLowBalance:
        "AutoPurchaseFailedDueToStillLowBalance",
      AutoPurchasePotentialHackingActionSpotted:
        "AutoPurchasePotentialHackingActionSpotted",
      AutoPurchasePotentialHackingActionSpotted2:
        "AutoPurchasePotentialHackingActionSpotted2",
      AutoPurchasePotentialHackingActionSpotted3:
        "AutoPurchasePotentialHackingActionSpotted3",
      AutoPurchasePotentialHackingActionSpotted4:
        "AutoPurchasePotentialHackingActionSpotted4",
      ShowU13PaymentModal: "ShowU13PaymentModal",
      ShowU13MonthlyThreshold1Modal: "ShowU13MonthlyThreshold1Modal",
      ShowU13MonthlyThreshold2Modal: "ShowU13MonthlyThreshold2Modal",
      ShowParentalConsentWarningPaymentModal13To17Modal:
        "ShowParentalConsentWarningPaymentModal13To17Modal",
      ConfirmU13PaymentModal: "ConfirmU13PaymentModal",
      ConfirmU13MonthlyThreshold1Modal: "ConfirmU13MonthlyThreshold1Modal",
      ConfirmU13MonthlyThreshold2Modal: "ConfirmU13MonthlyThreshold2Modal",
      ConfirmParentalConsentWarningPaymentModal13To17Modal:
        "ConfirmParentalConsentWarningPaymentModal13To17Modal",
      U13PaymentModalEmailVerificationTriggered:
        "U13PaymentModalEmailVerificationTriggered",
      U13PaymentModalFailedToShow: "U13PaymentModalFailedToShow",
      U13PaymentModalNoAction: "U13PaymentModalNoAction",
    },
    n = "/vng-payments/v1/getVngShopUrl",
    R = CoreUtilities,
    N = function (e, i, l, s) {
      return new (l = l || Promise)(function (n, t) {
        function r(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function a(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof l
                ? t
                : new l(function (e) {
                    e(t);
                  })
              ).then(r, a);
        }
        o((s = s.apply(e, i || [])).next());
      });
    },
    L = function (n, r) {
      var a,
        o,
        i,
        l = {
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
            for (; l; )
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
                    return l.label++, { value: t[1], done: !1 };
                  case 5:
                    l.label++, (o = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = 0 < (i = l.trys).length && i[i.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                      l.label = t[1];
                      break;
                    }
                    if (6 === t[0] && l.label < i[1]) {
                      (l.label = i[1]), (i = t);
                      break;
                    }
                    if (i && l.label < i[2]) {
                      (l.label = i[2]), l.ops.push(t);
                      break;
                    }
                    i[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                t = r.call(n, l);
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
    };
  function F(e, t, n, r) {
    void 0 === t && (t = !0),
      void 0 === n && (n = !1),
      void 0 === r && (r = !1);
    (e = R.numberFormat.getNumberFormat(e)), (e = n ? "<s>" + e + "</s>" : e);
    return r
      ? "<span class='icon-robux-16x16 light-theme'></span><span class='text'>" +
          e +
          "</span>"
      : t
        ? "<span class='icon-robux-16x16'></span><span class='text-robux'>" +
          e +
          "</span>"
        : "<span class='icon-robux-gray-16x16'></span><span class='text'>" +
          e +
          "</span>";
  }
  var O = function (e, i, l, s) {
      return new (l = l || Promise)(function (n, t) {
        function r(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function a(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof l
                ? t
                : new l(function (e) {
                    e(t);
                  })
              ).then(r, a);
        }
        o((s = s.apply(e, i || [])).next());
      });
    },
    G = function (n, r) {
      var a,
        o,
        i,
        l = {
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
            for (; l; )
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
                    return l.label++, { value: t[1], done: !1 };
                  case 5:
                    l.label++, (o = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = 0 < (i = l.trys).length && i[i.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                      l.label = t[1];
                      break;
                    }
                    if (6 === t[0] && l.label < i[1]) {
                      (l.label = i[1]), (i = t);
                      break;
                    }
                    if (i && l.label < i[2]) {
                      (l.label = i[2]), l.ops.push(t);
                      break;
                    }
                    i[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                t = r.call(n, l);
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
    };
  function B() {
    var e;
    m.upsellUtil.expireUpsellCookie(),
      window.history &&
        ((e = new URL(window.location.href)).searchParams.delete(
          m.upsellUtil.constants.UPSELL_QUERY_PARAM_KEY,
        ),
        (e = e.href),
        window.history.pushState({ path: e }, "", e));
  }
  var D = function (e, i, l, s) {
      return new (l = l || Promise)(function (n, t) {
        function r(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function a(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof l
                ? t
                : new l(function (e) {
                    e(t);
                  })
              ).then(r, a);
        }
        o((s = s.apply(e, i || [])).next());
      });
    },
    k = function (n, r) {
      var a,
        o,
        i,
        l = {
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
            for (; l; )
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
                    return l.label++, { value: t[1], done: !1 };
                  case 5:
                    l.label++, (o = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = 0 < (i = l.trys).length && i[i.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                      l.label = t[1];
                      break;
                    }
                    if (6 === t[0] && l.label < i[1]) {
                      (l.label = i[1]), (i = t);
                      break;
                    }
                    if (i && l.label < i[2]) {
                      (l.label = i[2]), l.ops.push(t);
                      break;
                    }
                    i[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                t = r.call(n, l);
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
    W = window.EventTracker
      ? EventTracker
      : {
          fireEvent: console.log,
          start: console.log,
          endSuccess: console.log,
          endCancel: console.log,
          endFailure: console.log,
        };
  function V(e) {
    (0, W.fireEvent)(t + e);
  }
  function H(e, t) {
    var n;
    t === P.BUNDLE || t === P.BUNDLE_ALIAS
      ? ((n = e), (0, W.fireEvent)(r + n))
      : t === P.GAME_PASS
        ? ((n = e), (0, W.fireEvent)(M + n))
        : V(t ? e : C.UnknownErrorNoAsset);
  }
  function X(e, t, n, r, a) {
    var o = r.getTranslationResource(d),
      i = r.getTranslationResource(c),
      l = "<br /><br />",
      r = { lineBreak: l, linebreak: l },
      l = "";
    t === g.U13PaymentModal
      ? (l = o.get(w.featurePremiumScaryModalBodyNewDescription, r))
      : t === g.ParentalConsentWarningPaymentModal13To17
        ? (l = o.get(w.featurePremiumScaryModalBody13To17Description, {}))
        : t === g.U13MonthlyThreshold1Modal
          ? (l = o.get(w.featurePremiumScaryModalThreshold1BodyDescription, r))
          : t === g.U13MonthlyThreshold2Modal &&
            (l = o.get(w.featurePremiumScaryModalThreshold2BodyDescription, r)),
      h.Dialog.open({
        titleText: o.get(w.featurePremiumScaryModalTitleHeading, {}),
        bodyContent:
          '<div><span class="text-description">' +
          l +
          '</span></div><div class="text-center"><div class="icon-warning"></div></div>',
        declineText: i.get(w.commonUiCancelAction, {}),
        acceptText: i.get(w.commonUiOkAction, {}),
        onAccept: function () {
          return (
            (function (r, a) {
              return D(this, void 0, Promise, function () {
                var t, n;
                return k(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (n = { acknowledgement: "Confirmed" + r }),
                        (t = {
                          url: "" + h.EnvironmentUrls.apiGatewayUrl + E,
                          withCredentials: !0,
                          timeout: T,
                        }),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]), [4, R.httpService.post(t, n)]
                      );
                    case 2:
                      return e.sent(), a(), [2, Promise.resolve()];
                    case 3:
                      return (n = e.sent()), [2, Promise.reject(n)];
                    case 4:
                      return [2];
                  }
                });
              });
            })(t, n)
              .then(function () {
                t === g.U13PaymentModal
                  ? H(
                      C.ConfirmU13PaymentModal,
                      null == a ? void 0 : a.assetType,
                    )
                  : t === g.U13MonthlyThreshold1Modal
                    ? H(
                        C.ConfirmU13MonthlyThreshold1Modal,
                        null == a ? void 0 : a.assetType,
                      )
                    : t === g.U13MonthlyThreshold2Modal
                      ? H(
                          C.ConfirmU13MonthlyThreshold2Modal,
                          null == a ? void 0 : a.assetType,
                        )
                      : H(
                          C.ConfirmParentalConsentWarningPaymentModal13To17Modal,
                          null == a ? void 0 : a.assetType,
                        );
              })
              .catch(function () {
                n();
              }),
            !1
          );
        },
        onDecline: function () {
          return (
            H(C.UpsellCancelledFromU13Modal, null == a ? void 0 : a.assetType),
            B(),
            !1
          );
        },
        onCancel: function () {
          return (
            H(C.UpsellCancelledFromU13Modal, null == a ? void 0 : a.assetType),
            B(),
            !1
          );
        },
        allowHtmlContentInBody: !0,
        allowHtmlContentInFooter: !1,
        fieldValidationRequired: !0,
        dismissable: !0,
        xToCancel: !0,
      });
  }
  var e = function (e, i, l, s) {
      return new (l = l || Promise)(function (n, t) {
        function r(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function a(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof l
                ? t
                : new l(function (e) {
                    e(t);
                  })
              ).then(r, a);
        }
        o((s = s.apply(e, i || [])).next());
      });
    },
    Y = function (n, r) {
      var a,
        o,
        i,
        l = {
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
            for (; l; )
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
                    return l.label++, { value: t[1], done: !1 };
                  case 5:
                    l.label++, (o = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = 0 < (i = l.trys).length && i[i.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                      l.label = t[1];
                      break;
                    }
                    if (6 === t[0] && l.label < i[1]) {
                      (l.label = i[1]), (i = t);
                      break;
                    }
                    if (i && l.label < i[2]) {
                      (l.label = i[2]), l.ops.push(t);
                      break;
                    }
                    i[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                t = r.call(n, l);
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
    };
  function j(e) {
    m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
      m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
        .WEB_CATALOG_ROBUX_UPSELL,
      !0,
      m.paymentFlowAnalyticsService.ENUM_VIEW_NAME.PURCHASE_WARNING,
      m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.VIEW_SHOWN,
      e,
    );
  }
  function q(n, r, a, o, i) {
    var l;
    return e(this, void 0, void 0, function () {
      var t;
      return Y(this, function (e) {
        switch (e.label) {
          case 0:
            if (!r) return a(), [2, Promise.resolve()];
            e.label = 1;
          case 1:
            return (
              e.trys.push([1, 3, , 4]),
              [
                4,
                (function (a) {
                  return O(this, void 0, Promise, function () {
                    var t, n, r;
                    return G(this, function (e) {
                      switch (e.label) {
                        case 0:
                          (n = !h.CurrentUser.isPremiumUser),
                            (t = {
                              productId: a,
                              is13To17ScaryModalEnabled: n,
                            }),
                            (n = {
                              url: "" + h.EnvironmentUrls.apiGatewayUrl + s,
                              withCredentials: !0,
                              timeout: T,
                            }),
                            (e.label = 1);
                        case 1:
                          return (
                            e.trys.push([1, 3, , 4]),
                            [4, R.httpService.get(n, t)]
                          );
                        case 2:
                          return 200 === (r = e.sent()).status && r.data.action
                            ? [2, Promise.resolve(r.data.action)]
                            : [2, Promise.resolve(g.NoAction)];
                        case 3:
                          return (r = e.sent()), [2, Promise.reject(r)];
                        case 4:
                          return [2];
                      }
                    });
                  });
                })(n.roblox_product_id),
              ]
            );
          case 2:
            return (
              (t = e.sent()) === g.U13PaymentModal ||
              t === g.ParentalConsentWarningPaymentModal13To17 ||
              t === g.U13MonthlyThreshold1Modal ||
              t === g.U13MonthlyThreshold2Modal
                ? (t === g.U13PaymentModal
                    ? (j(
                        m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
                          .U13_PAYMENT_MODAL,
                      ),
                      H(
                        C.ShowU13PaymentModal,
                        null == i ? void 0 : i.assetType,
                      ))
                    : t === g.U13MonthlyThreshold1Modal
                      ? (j(
                          m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
                            .U13_MONTHLY_THRESHOLD_1_MODAL,
                        ),
                        H(
                          C.ShowU13MonthlyThreshold1Modal,
                          null == i ? void 0 : i.assetType,
                        ))
                      : t === g.U13MonthlyThreshold2Modal
                        ? (j(
                            m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
                              .U13_MONTHLY_THRESHOLD_2_MODAL,
                          ),
                          H(
                            C.ShowU13MonthlyThreshold2Modal,
                            null == i ? void 0 : i.assetType,
                          ))
                        : (j(
                            m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
                              .PAYMENT_MODAL_13_TO_17,
                          ),
                          H(
                            C.ShowParentalConsentWarningPaymentModal13To17Modal,
                            null == i ? void 0 : i.assetType,
                          )),
                  X(0, t, a, o, i))
                : t === g.RequireEmailVerification
                  ? (H(
                      C.U13PaymentModalEmailVerificationTriggered,
                      null == i ? void 0 : i.assetType,
                    ),
                    null !==
                      (l =
                        h.EmailVerificationService.handleUserEmailVerificationRequiredByPurchaseWarning()) &&
                      void 0 !== l &&
                      l.then(function (e) {
                        j(
                          m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
                            .REQUIRE_EMAIL_VERIFICATION,
                        ),
                          null != e &&
                            e.emailAddress &&
                            null != e &&
                            e.verified &&
                            a();
                      }))
                  : (H(
                      C.U13PaymentModalNoAction,
                      null == i ? void 0 : i.assetType,
                    ),
                    a()),
              [2, Promise.resolve()]
            );
          case 3:
            return (t = e.sent()), [2, Promise.reject(t)];
          case 4:
            return [2];
        }
      });
    });
  }
  function K(e, t, n) {
    var r = (function (e) {
      var t = m.upsellUtil.constants.UPSELL_TARGET_ITEM_URL_REGEX.exec(
        window.location.pathname,
      );
      m.upsellUtil.constants.UPSELL_TARGET_ITEM_URL_REGEX.lastIndex = 0;
      var n = null;
      if ((Array.isArray(t) && 0 < t.length && (n = t[0]), !n)) return "";
      if (!e || Object.keys(e).length < 4) return "";
      var r = R.uuidService.generateRandomUuid(),
        t =
          e.expectedCurrency +
          "," +
          e.expectedPrice +
          "," +
          e.expectedSellerId +
          "," +
          (null !== (a = e.userassetId) && void 0 !== a ? a : ""),
        a = "" + (e.productId || "");
      return (
        (a += "," + (e.collectibleItemId || "")),
        (a += "," + (e.collectibleItemInstanceId || "")),
        (a += "," + (e.collectibleProductId || "")),
        (t = r + "," + n + "," + h.CurrentUser.userId + "," + t + "," + a),
        (a = new Date()).setHours(a.getHours() + 1),
        (a = [
          m.upsellUtil.constants.UPSELL_COOKIE_KEY,
          "=",
          encodeURIComponent(t),
          "; expires=" + a.toUTCString(),
          "; path=/",
          "; domain=.",
          h.EnvironmentUrls.domain,
          ";",
        ]),
        (document.cookie = a.join("")),
        r
      );
    })(n);
    H(C.UpsellContinued, null == n ? void 0 : n.assetType),
      m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
        m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
          .WEB_CATALOG_ROBUX_UPSELL,
        !0,
        m.paymentFlowAnalyticsService.ENUM_VIEW_NAME.ROBUX_UPSELL,
        m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT,
        m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
          .GO_TO_ROBUX_PURCHASE_PAGE,
      ),
      (window.location.href = R.urlService.getAbsoluteUrl(
        a + "?ap=" + e.roblox_product_id + "&UpsellUuid=" + r,
      ));
  }
  function Q(e, t, n, r) {
    var a = Date.now(),
      o = a - t;
    m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
      m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
        .WEB_CATALOG_ROBUX_UPSELL,
      !0,
      m.paymentFlowAnalyticsService.ENUM_VIEW_NAME.ROBUX_UPSELL,
      m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT,
      e,
      {
        userBalance: n.userBalanceRobux.toString(),
        itemCost: r.expectedItemPrice.toString(),
        modalImpressionTimeInMs: o.toString(),
        modalStartTimeInMs: t.toString(),
        modalEndTimeInMs: a.toString(),
      },
    );
  }
  function z(e, t, n, r, a, o, i) {
    var l,
      s,
      c,
      u,
      d,
      p = F(t.expectedItemPrice),
      v =
        "<div class='item-card-container item-preview'>\n        <div class='item-card-thumb'>\n          <img alt='item preview' src='" +
        (null !== (v = n.thumbnailImageUrl) && void 0 !== v ? v : "") +
        "' />\n        </div>\n        <div class='item-info text-name'>\n        <div class='text-overflow item-card-name'>" +
        (0, R.escapeHtml)()(t.assetName) +
        "</div>\n          <div class='text-robux item-card-price'>" +
        p +
        "</div>\n        </div>\n      </div>";
    H(
      C.UpsellShown,
      null === (p = t.buyButtonElementDataset) || void 0 === p
        ? void 0
        : p.assetType,
    ),
      m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
        m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
          .WEB_CATALOG_ROBUX_UPSELL,
        !0,
        m.paymentFlowAnalyticsService.ENUM_VIEW_NAME.ROBUX_UPSELL,
        m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.VIEW_SHOWN,
      ),
      (v = v),
      (e = e),
      (l = t),
      (s = n),
      (c = r),
      (r = a),
      (a = o),
      (u = i),
      (d = Date.now()),
      (o =
        "<a class='text-link-secondary terms-of-use-link' target='_blank' href='" +
        R.urlService.getUrlWithLocale(y, r.getRobloxLocale()) +
        "'>"),
      (i = F(e.shortfallPrice, !1)),
      (r = F(c.robux_amount)),
      (e = c.robux_amount_before_bonus
        ? F(c.robux_amount_before_bonus, !1, !0)
        : ""),
      (e =
        v +
        a.get(w.insufficientRobuxMessageNew, {
          divTagStart:
            "<div class='modal-message-block text-center border-top'>",
          divTagEnd: "</div>",
          robuxNeeded: i,
          robuxPackageAmount: r,
          originalRobuxPackageAmount: e,
          sentenceSplit: "<br>",
          lineBreak: "",
          aTagStart: o,
          aTagEnd: "</a>",
          divTagFooterStart:
            "<div class='modal-message-block text-center border-top modal-legal-footer'>",
          divTagFooterEnd: "</div>",
        })),
      (o = a.get(w.insufficientRobuxHeadingNew, {})),
      h.Dialog.open({
        titleText: o,
        bodyContent: e,
        footerText: "",
        declineText: a.get(w.cancelAction, {}),
        acceptText: a.get(w.buyRobuxAndItemAction, {}),
        acceptColor: "btn-primary-md",
        onAccept: function () {
          return (
            Q(
              m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
                .BUY_ROBUX_AND_ITEM,
              d,
              s,
              l,
            ),
            q(
              c,
              h.CurrentUser.isUnder13,
              function () {
                return K(c, 0, l.buyButtonElementDataset);
              },
              u,
              l.buyButtonElementDataset,
            ).catch(function () {
              var e;
              H(
                C.U13PaymentModalFailedToShow,
                null === (e = l.buyButtonElementDataset) || void 0 === e
                  ? void 0
                  : e.assetType,
              ),
                K(c, 0, l.buyButtonElementDataset);
            }),
            !1
          );
        },
        onDecline: function () {
          var e;
          Q(m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CANCEL, d, s, l),
            H(
              C.UpsellCancelled,
              null === (e = l.buyButtonElementDataset) || void 0 === e
                ? void 0
                : e.assetType,
            );
        },
        onCancel: function () {
          var e;
          Q(m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CANCEL, d, s, l),
            H(
              C.UpsellCancelled,
              null === (e = l.buyButtonElementDataset) || void 0 === e
                ? void 0
                : e.assetType,
            );
        },
        allowHtmlContentInBody: !0,
        allowHtmlContentInFooter: !1,
        fieldValidationRequired: !0,
        dismissable: !0,
        xToCancel: !0,
      });
  }
  function J() {
    var n = this;
    (this.overlayDiv = null),
      (this.contentDiv = null),
      (this.loadingMessageSpan = null),
      (this.spinnerSpan = null),
      (this.loadingOverlayElementId = "loading-overlay"),
      (this.show = function (e) {
        var t = n.getOrCreateOverlayDiv(),
          t = n.getOrCreateContentDiv(t);
        return n.getOrCreateSpinnerSpan(t), n.updateOrCreateMessage(e), n;
      }),
      (this.hide = function () {
        var e;
        null !==
          (e =
            null === (e = n.spinnerSpan) || void 0 === e
              ? void 0
              : e.parentNode) &&
          void 0 !== e &&
          e.removeChild(n.spinnerSpan),
          null !==
            (e =
              null === (e = n.loadingMessageSpan) || void 0 === e
                ? void 0
                : e.parentNode) &&
            void 0 !== e &&
            e.removeChild(n.loadingMessageSpan),
          null !==
            (e =
              null === (e = n.contentDiv) || void 0 === e
                ? void 0
                : e.parentNode) &&
            void 0 !== e &&
            e.removeChild(n.contentDiv),
          null !==
            (e =
              null === (e = n.overlayDiv) || void 0 === e
                ? void 0
                : e.parentNode) &&
            void 0 !== e &&
            e.removeChild(n.overlayDiv),
          (n.overlayDiv = null),
          (n.contentDiv = null),
          (n.spinnerSpan = null),
          (n.loadingMessageSpan = null);
      }),
      (this.updateMessage = function (e) {
        (n._loadingMessage = e), n.updateOrCreateMessage(e);
      }),
      (this.updateOrCreateMessage = function (e) {
        var t;
        if (n.overlayDiv)
          return e
            ? void (n.loadingMessageSpan
                ? (n.loadingMessageSpan.innerText = e)
                : (((t = document.createElement("span")).innerText = e),
                  t.classList.add("loading-message"),
                  n.getOrCreateContentDiv(n.overlayDiv).appendChild(t),
                  (n.loadingMessageSpan = t)))
            : (null !==
                (t =
                  null === (t = n.loadingMessageSpan) || void 0 === t
                    ? void 0
                    : t.parentNode) &&
                void 0 !== t &&
                t.removeChild(n.loadingMessageSpan),
              void (n.loadingMessageSpan = null));
      }),
      (this.getOrCreateContentDiv = function (e) {
        if (n.contentDiv) return n.contentDiv;
        var t = document.createElement("div");
        return (
          t.classList.add("loading-overlay-content"),
          (n.contentDiv = t),
          e.appendChild(t),
          t
        );
      }),
      (this.getOrCreateOverlayDiv = function () {
        if (n.overlayDiv) return n.overlayDiv;
        var e = document.getElementById(n.loadingOverlayElementId);
        if (e) return (n.overlayDiv = e);
        e = document.createElement("div");
        return (
          ((n.overlayDiv = e).id = n.loadingOverlayElementId),
          e.classList.add("loading-overlay"),
          document.body.appendChild(e),
          e
        );
      }),
      (this.getOrCreateSpinnerSpan = function (e) {
        if (n.spinnerSpan) return n.spinnerSpan;
        var t = document.createElement("span");
        return (
          t.classList.add("spinner", "spinner-default"),
          e.appendChild(t),
          (n.spinnerSpan = t)
        );
      });
  }
  var Z =
      (Object.defineProperty(J.prototype, "loadingMessage", {
        get: function () {
          return this._loadingMessage;
        },
        enumerable: !1,
        configurable: !0,
      }),
      J),
    $ = function (e, i, l, s) {
      return new (l = l || Promise)(function (n, t) {
        function r(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function a(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof l
                ? t
                : new l(function (e) {
                    e(t);
                  })
              ).then(r, a);
        }
        o((s = s.apply(e, i || [])).next());
      });
    },
    ee = function (n, r) {
      var a,
        o,
        i,
        l = {
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
            for (; l; )
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
                    return l.label++, { value: t[1], done: !1 };
                  case 5:
                    l.label++, (o = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = 0 < (i = l.trys).length && i[i.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                      l.label = t[1];
                      break;
                    }
                    if (6 === t[0] && l.label < i[1]) {
                      (l.label = i[1]), (i = t);
                      break;
                    }
                    if (i && l.label < i[2]) {
                      (l.label = i[2]), l.ops.push(t);
                      break;
                    }
                    i[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                t = r.call(n, l);
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
    };
  function te(e) {
    m.upsellUtil.expireUpsellCookie(),
      (window.location.href = h.Endpoints.getAbsoluteUrl(e));
  }
  function ne() {
    return $(this, void 0, Promise, function () {
      var t;
      return ee(this, function (e) {
        switch (e.label) {
          case 0:
            return (
              (t = {
                url: "" + h.EnvironmentUrls.apiGatewayUrl + n,
                withCredentials: !0,
              }),
              [4, R.httpService.get(t)]
            );
          case 1:
            return [2, e.sent().data.vngShopRedirectUrl];
        }
      });
    });
  }
  function re() {
    (0, h.DeviceMeta)().isDesktop && (0, h.DeviceMeta)().isUniversalApp
      ? ne()
          .then(function (e) {
            return window.open(e, "_self");
          })
          .catch(function () {
            return window.open(h.EnvironmentUrls.vngGamesShopUrl, "_self");
          })
      : ne()
          .then(function (e) {
            return window.open(e, "_blank");
          })
          .catch(function () {
            return window.open(h.EnvironmentUrls.vngGamesShopUrl, "_blank");
          });
  }
  var ae = function (e, i, l, s) {
      return new (l = l || Promise)(function (n, t) {
        function r(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function a(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof l
                ? t
                : new l(function (e) {
                    e(t);
                  })
              ).then(r, a);
        }
        o((s = s.apply(e, i || [])).next());
      });
    },
    oe = function (n, r) {
      var a,
        o,
        i,
        l = {
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
            for (; l; )
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
                    return l.label++, { value: t[1], done: !1 };
                  case 5:
                    l.label++, (o = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = 0 < (i = l.trys).length && i[i.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                      l.label = t[1];
                      break;
                    }
                    if (6 === t[0] && l.label < i[1]) {
                      (l.label = i[1]), (i = t);
                      break;
                    }
                    if (i && l.label < i[2]) {
                      (l.label = i[2]), l.ops.push(t);
                      break;
                    }
                    i[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                t = r.call(n, l);
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
    ie = function () {
      return (ie =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var a in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }).apply(this, arguments);
    },
    le = function (e, i, l, s) {
      return new (l = l || Promise)(function (n, t) {
        function r(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function a(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof l
                ? t
                : new l(function (e) {
                    e(t);
                  })
              ).then(r, a);
        }
        o((s = s.apply(e, i || [])).next());
      });
    },
    se = function (n, r) {
      var a,
        o,
        i,
        l = {
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
            for (; l; )
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
                    return l.label++, { value: t[1], done: !1 };
                  case 5:
                    l.label++, (o = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = 0 < (i = l.trys).length && i[i.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                      l.label = t[1];
                      break;
                    }
                    if (6 === t[0] && l.label < i[1]) {
                      (l.label = i[1]), (i = t);
                      break;
                    }
                    if (i && l.label < i[2]) {
                      (l.label = i[2]), l.ops.push(t);
                      break;
                    }
                    i[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                t = r.call(n, l);
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
    };
  function ce(e, t) {
    try {
      h.EventStream.SendEventWithTarget(
        I.EVENT_NAME,
        e,
        t,
        h.EventStream.TargetTypes.WWW,
      );
    } catch (e) {}
  }
  var ue = function (e, i, l, s) {
      return new (l = l || Promise)(function (n, t) {
        function r(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function a(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof l
                ? t
                : new l(function (e) {
                    e(t);
                  })
              ).then(r, a);
        }
        o((s = s.apply(e, i || [])).next());
      });
    },
    de = function (n, r) {
      var a,
        o,
        i,
        l = {
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
            for (; l; )
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
                    return l.label++, { value: t[1], done: !1 };
                  case 5:
                    l.label++, (o = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = 0 < (i = l.trys).length && i[i.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                      l.label = t[1];
                      break;
                    }
                    if (6 === t[0] && l.label < i[1]) {
                      (l.label = i[1]), (i = t);
                      break;
                    }
                    if (i && l.label < i[2]) {
                      (l.label = i[2]), l.ops.push(t);
                      break;
                    }
                    i[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                t = r.call(n, l);
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
    };
  function pe(e) {
    B(), te(e);
  }
  function ve(e) {
    (e &&
      (e.startsWith("/catalog/") ||
        e.startsWith("/bundles/") ||
        e.startsWith("/game-pass/") ||
        e.startsWith(u)) &&
      !e.includes("UpsellUuid=")) ||
      (m.upsellUtil.expireUpsellCookie(),
      (window.location.href = h.Endpoints.getAbsoluteUrl("/catalog")));
  }
  function ye(n, r) {
    return ue(this, void 0, Promise, function () {
      var t;
      return de(this, function (e) {
        switch (e.label) {
          case 0:
            if (!r) return [2, Promise.reject()];
            e.label = 1;
          case 1:
            return (
              e.trys.push([1, 3, , 4]),
              [
                4,
                (function (r) {
                  var a;
                  return ae(this, void 0, Promise, function () {
                    var t, n;
                    return oe(this, function (e) {
                      switch (e.label) {
                        case 0:
                          (t = i.replace("{productId}", r)),
                            (t = {
                              url: "" + h.EnvironmentUrls.economyApi + t,
                              withCredentials: !0,
                            }),
                            (e.label = 1);
                        case 1:
                          return (
                            e.trys.push([1, 3, , 4]), [4, R.httpService.get(t)]
                          );
                        case 2:
                          return 200 !== (n = e.sent()).status ||
                            n.data.reason !== l
                            ? [
                                2,
                                Promise.reject(
                                  null === (a = null == n ? void 0 : n.data) ||
                                    void 0 === a
                                    ? void 0
                                    : a.reason,
                                ),
                              ]
                            : [2, Promise.resolve(n.data)];
                        case 3:
                          return (n = e.sent()), [2, Promise.reject(n)];
                        case 4:
                          return [2];
                      }
                    });
                  });
                })(r),
              ]
            );
          case 2:
            return (t = e.sent()) && 0 !== Object.keys(t).length
              ? [2, t]
              : (H(C.AutoPurchasePotentialHackingActionSpotted3, x),
                ce(I.CONTEXT_NAME.PRODUCT_INFO_EMPTY, {
                  itemPath: n,
                  productId: r,
                }),
                [2, Promise.reject()]);
          case 3:
            return (
              (t = e.sent()),
              H(C.AutoPurchasePotentialHackingActionSpotted4, x),
              ce(I.CONTEXT_NAME.PRODUCT_INFO_REQUEST_FAILED, {
                itemPath: n,
                productId: r,
                error: t,
              }),
              [2, Promise.reject(t)]
            );
          case 4:
            return [2];
        }
      });
    });
  }
  function Ee(i, l, s) {
    return ue(this, void 0, Promise, function () {
      var t, n, r, a, o;
      return de(this, function (e) {
        switch (e.label) {
          case 0:
            ((o = m.upsellUtil.parseUpsellCookie()) &&
              0 !== Object.keys(o).length &&
              (!o.targetItemUrl || i.startsWith(o.targetItemUrl))) ||
              (H(C.AutoPurchasePotentialHackingActionSpotted2, x),
              ce(I.CONTEXT_NAME.COOKIE_PARSE_FAILED, {
                itemPath: i,
                upsellCookieData: o,
              }),
              pe(i)),
              (t = l) || pe(i),
              (e.label = 1);
          case 1:
            return (
              e.trys.push([1, 3, , 4]),
              (r = o.collectibleItemId
                ? null == s
                  ? void 0
                  : s.productId
                : o.productId),
              [4, ye(i, r)]
            );
          case 2:
            return (n = e.sent()), [3, 4];
          case 3:
            return (
              (a = e.sent()),
              ce(I.CONTEXT_NAME.PRODUCT_ID_NOT_EXIST, {
                itemPath: i,
                upsellCookieData: o,
                error: a,
              }),
              pe(i),
              [2, Promise.reject()]
            );
          case 4:
            return [
              4,
              (function (r, a) {
                return le(this, void 0, Promise, function () {
                  var t, n;
                  return se(this, function (e) {
                    switch (e.label) {
                      case 0:
                        (n =
                          a === P.GAME_PASS
                            ? ((t = A.GAME_PASS), { gamePassIds: r })
                            : a === P.BUNDLE
                              ? ((t = A.BUNDLE), { bundleIds: r })
                              : ((t = A.ASSET), { assetIds: r })),
                          (n = ie(ie({}, n), _)),
                          (t = {
                            url: "" + h.EnvironmentUrls.thumbnailsApi + t,
                            withCredentials: !0,
                          }),
                          (e.label = 1);
                      case 1:
                        return (
                          e.trys.push([1, 3, , 4]), [4, R.httpService.get(t, n)]
                        );
                      case 2:
                        return 200 === (n = e.sent()).status &&
                          n.data.data &&
                          0 !== n.data.data.length
                          ? [2, Promise.resolve(n.data.data[0].imageUrl)]
                          : [2, Promise.resolve(null)];
                      case 3:
                        return e.sent(), [2, Promise.resolve(null)];
                      case 4:
                        return [2];
                    }
                  });
                });
              })(n.assetId, n.assetType),
            ];
          case 5:
            return (
              (a = e.sent()),
              (t.imageurl = a || t.imageurl),
              (o = {
                expectedPrice: o.expectedPrice || "0",
                expectedCurrency: o.expectedCurrency || "1",
                expectedSellerId: o.expectedSellerId || "",
                itemId: n.assetId || (null == s ? void 0 : s.itemId),
                itemName: n.assetName || (null == s ? void 0 : s.itemName),
                assetType: n.assetType || (null == s ? void 0 : s.assetType),
                assetGranted: null == s ? void 0 : s.assetGranted,
                assetTypeDisplayName:
                  n.assetTypeDisplayName ||
                  (null == s ? void 0 : s.assetTypeDisplayName),
                assetTypeId: null == s ? void 0 : s.assetTypeId,
                productId:
                  n.productId ||
                  o.productId ||
                  (null == s ? void 0 : s.productId),
                itemType: n.assetType || (null == s ? void 0 : s.itemType),
                currentTime: null == s ? void 0 : s.currentTime,
                isPurchaseEnabled: null == s ? void 0 : s.isPurchaseEnabled,
                placeproductpromotionId:
                  null == s ? void 0 : s.placeproductpromotionId,
                userassetId:
                  o.userAssetId || (null == s ? void 0 : s.userassetId),
                collectibleItemId:
                  o.collectibleItemId ||
                  (null == s ? void 0 : s.collectibleItemId),
                collectibleItemInstanceId:
                  o.collectibleItemInstanceId ||
                  (null == s ? void 0 : s.collectibleItemInstanceId),
                collectibleProductId:
                  o.collectibleProductId ||
                  (null == s ? void 0 : s.collectibleProductId),
              }),
              [2, [t, o]]
            );
        }
      });
    });
  }
  function he(n, e, t, r) {
    var a =
        "<span>" +
        t.get(w.purchaseSucceededRobuxBalanceMessage, {
          userRobuxBalance: F(e),
        }) +
        "</span>",
      e =
        "<div class='item-content'>\n        <div class='item-card-container item-preview'>\n          <div class='item-card-thumb'>\n            <img alt='item preview' src='" +
        n.itemThumbnailUrl +
        "'/>\n          </div>\n        </div>\n        <div class='text-center'>\n          " +
        t.get(w.purchaseSucceededMessage, { assetName: n.assetName }) +
        "\n          " +
        a +
        "\n        </div>\n      </div>",
      a =
        n.assetType !== P.GAME_PASS
          ? t.get(w.equipMyAvatarAction, {})
          : t.get(w.okAction, {});
    h.Dialog.open({
      titleText: t.get(w.purchaseSucceededHeading, {}),
      bodyContent: e,
      declineText: t.get(w.backToShopAction, {}),
      acceptText: a,
      acceptColor: "btn-primary-md",
      onAccept: function () {
        m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
          m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
            .WEB_CATALOG_ROBUX_UPSELL,
          !0,
          m.paymentFlowAnalyticsService.ENUM_VIEW_NAME.SUCCESS,
          m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT,
          m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.OK,
          { item_type: n.assetType, item_id: n.productId },
          !0,
        ),
          H(C.AutoPurchaseSucceedEquipMyAvatar, n.assetType);
        var e,
          t = n.itemPath;
        return (
          h.Endpoints &&
            h.Endpoints.supportLocalizedUrls &&
            (t = h.Endpoints.removeUrlLocale(t)),
          n.assetType !== P.GAME_PASS
            ? void 0 !== (e = h.Endpoints.getAbsoluteUrl("/my/avatar")) &&
              "" !== e &&
              (m.upsellUtil.expireUpsellCookie(), (window.location.href = e))
            : t.startsWith(u)
              ? te(n.itemPath + "?#!/store")
              : te(n.itemPath),
          !1
        );
      },
      onDecline: function () {
        return (
          r.show(),
          m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
            m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
              .WEB_CATALOG_ROBUX_UPSELL,
            !0,
            m.paymentFlowAnalyticsService.ENUM_VIEW_NAME.SUCCESS,
            m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT,
            m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CANCEL,
            { item_type: n.assetType, item_id: n.productId },
            !0,
          ),
          H(C.AutoPurchaseSucceedBackToShop, n.assetType),
          te(n.itemPath),
          !1
        );
      },
      onCancel: function () {
        return (
          r.show(),
          m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
            m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
              .WEB_CATALOG_ROBUX_UPSELL,
            !0,
            m.paymentFlowAnalyticsService.ENUM_VIEW_NAME.SUCCESS,
            m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT,
            m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CANCEL,
            { item_type: n.assetType, item_id: n.productId },
            !0,
          ),
          H(C.AutoPurchaseSucceedClose, n.assetType),
          te(n.itemPath),
          !1
        );
      },
      allowHtmlContentInBody: !0,
      allowHtmlContentInFooter: !1,
      fieldValidationRequired: !0,
      showDecline: n.assetType !== P.GAME_PASS,
      dismissable: !1,
      xToCancel: !0,
    });
  }
  function me(e, t) {
    h.Dialog.open({
      titleText: t.get(w.errorOccuredHeading, {}),
      bodyContent: t.get(w.purchaseErrorOccuredMessage, {}),
      imageUrl: e.alertImageUrl,
      acceptText: t.get(w.okAction, {}),
      acceptColor: "btn-secondary-md",
      declineColor: "btn-none",
      dismissable: !0,
      allowHtmlContentInBody: !0,
    });
  }
  var fe = function (e, i, l, s) {
      return new (l = l || Promise)(function (n, t) {
        function r(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function a(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof l
                ? t
                : new l(function (e) {
                    e(t);
                  })
              ).then(r, a);
        }
        o((s = s.apply(e, i || [])).next());
      });
    },
    be = function (n, r) {
      var a,
        o,
        i,
        l = {
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
            for (; l; )
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
                    return l.label++, { value: t[1], done: !1 };
                  case 5:
                    l.label++, (o = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = 0 < (i = l.trys).length && i[i.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                      l.label = t[1];
                      break;
                    }
                    if (6 === t[0] && l.label < i[1]) {
                      (l.label = i[1]), (i = t);
                      break;
                    }
                    if (i && l.label < i[2]) {
                      (l.label = i[2]), l.ops.push(t);
                      break;
                    }
                    i[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                t = r.call(n, l);
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
    };
  function Se(u, d, p, v) {
    var y;
    return fe(this, void 0, Promise, function () {
      var a, o, i, l, s, c;
      return be(this, function (e) {
        switch (e.label) {
          case 0:
            (a = {
              url: u,
              withCredentials: !0,
              retryable: !1,
              noCache: !0,
              noPragma: !0,
            }),
              (e.label = 1);
          case 1:
            return (
              e.trys.push([1, 3, , 4]),
              (o = {
                expectedCurrency: d.expectedCurrency,
                expectedPrice: d.expectedPrice,
                expectedSellerId: d.expectedSellerId,
                expectedPromoId: d.expectedPromoId,
                userAssetId: d.userAssetId,
                collectibleItemId:
                  null === (y = d.itemDetail) || void 0 === y
                    ? void 0
                    : y.collectibleItemId,
                collectibleProductId:
                  null === (y = d.itemDetail) || void 0 === y
                    ? void 0
                    : y.collectibleProductId,
                expectedPurchaserId: h.CurrentUser.userId,
                expectedPurchaserType: "User",
                idempotencyKey: R.uuidService.generateRandomUuid(),
              }),
              [4, R.httpService.post(a, o)]
            );
          case 2:
            return ((o = e.sent()), 500 === (o = o.data).statusCode)
              ? (H(C.AutoPurchaseErrorFromPurchaseApi, d.assetType),
                void 0 === o.showDivID && (o.showDivID = o.showDivId),
                void 0 === o.AssetID && (o.AssetID = o.assetId),
                p.hide(),
                (0, h.ItemPurchase)().openErrorView(o),
                B(),
                [2, Promise.resolve()])
              : (d.isLibrary &&
                  h.EventStream &&
                  h.UrlParser &&
                  ((t = o.assetId),
                  (n = h.CurrentUser && h.CurrentUser.userId),
                  (r = h.UrlParser.getParametersAsObject()),
                  (i = {
                    assetId: t,
                    category: r.Category,
                    creatorId: r.CreatorId,
                    genre: r.GenreCsv,
                    page: r.Page,
                    position: r.Position,
                    searchKeyword: r.SearchKeyword,
                    sortAggregation: r.SortAggregation,
                    sortType: r.SortType,
                    userId: n,
                    searchId: r.SearchId,
                  }),
                  h.EventStream.SendEventWithTarget(
                    "LibraryAssetAcquired",
                    "Marketplace",
                    i,
                    h.EventStream.TargetTypes.WWW,
                  )),
                H(C.AutoPurchaseSucceed, d.assetType),
                p.hide(),
                (l = d.userBalance - d.expectedPrice),
                he(d, l, v, p),
                [2, Promise.resolve()]);
          case 3:
            if (
              ((i = e.sent()),
              p.hide(),
              H(C.AutoPurchaseFailed, d.assetType),
              "object" != typeof (l = i) || !("responseText" in l.request))
            )
              return [2, Promise.reject(l.request)];
            if ("Bad Request" === (s = l.request).responseText) me(d, v);
            else
              try {
                (c = JSON.parse(s.responseText)),
                  (0, h.ItemPurchase)().openErrorView(c),
                  B();
              } catch (e) {
                return [2, Promise.reject(e)];
              }
            return [2, Promise.reject(i)];
          case 4:
            return [2];
        }
        var t, n, r;
      });
    });
  }
  function Ue(a, o, i, l) {
    var s;
    return (
      void 0 === o && (o = void 0),
      fe(this, void 0, Promise, function () {
        var t, n, r;
        return be(this, function (e) {
          return null !== (s = a.itemContainerElemClassList) &&
            void 0 !== s &&
            s.contains("btn-disabled-primary")
            ? [2, Promise.resolve()]
            : ((t =
                "" +
                h.EnvironmentUrls.apiGatewayUrl +
                p.replace("{productId}", a.productId)),
              (n =
                "" +
                h.EnvironmentUrls.economyApi +
                v.replace("{productId}", a.productId)),
              null !== (s = a.itemDetail) &&
                void 0 !== s &&
                s.collectibleItemId &&
                ((r = a.itemDetail.collectibleItemInstanceId ? U : S),
                (r =
                  "" +
                  h.EnvironmentUrls.apiGatewayUrl +
                  r.replace(
                    "{collectibleItemId}",
                    a.itemDetail.collectibleItemId,
                  ))),
              o
                ? [
                    2,
                    o({
                      productId: a.productId,
                      expectedPrice: a.expectedPrice,
                      expectedCurrency: a.expectedCurrency,
                      expectedPromoId:
                        null === (s = a.expectedPromoId) || void 0 === s
                          ? void 0
                          : s.toString(),
                      expectedSellerId: a.expectedSellerId,
                      userAssetId:
                        null === (s = a.userAssetId) || void 0 === s
                          ? void 0
                          : s.toString(),
                    }),
                  ]
                : (H(C.AutoPurchaseStarted, a.assetType),
                  a.assetType === P.GAME_PASS
                    ? [2, Se(t, a, i, l)]
                    : r
                      ? [2, Se(r, a, i, l)]
                      : [2, Se(n, a, i, l)]));
        });
      })
    );
  }
  var Te = function (e, i, l, s) {
      return new (l = l || Promise)(function (n, t) {
        function r(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function a(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof l
                ? t
                : new l(function (e) {
                    e(t);
                  })
              ).then(r, a);
        }
        o((s = s.apply(e, i || [])).next());
      });
    },
    Pe = function (n, r) {
      var a,
        o,
        i,
        l = {
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
            for (; l; )
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
                    return l.label++, { value: t[1], done: !1 };
                  case 5:
                    l.label++, (o = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = 0 < (i = l.trys).length && i[i.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                      l.label = t[1];
                      break;
                    }
                    if (6 === t[0] && l.label < i[1]) {
                      (l.label = i[1]), (i = t);
                      break;
                    }
                    if (i && l.label < i[2]) {
                      (l.label = i[2]), l.ops.push(t);
                      break;
                    }
                    i[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                t = r.call(n, l);
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
    Ae = function (e) {
      (e = document.querySelector(
        '.PurchaseButton[data-product-id="' + e.productId + '"]',
      )),
        (e = null == e ? void 0 : e.closest(".store-card")),
        (e = null == e ? void 0 : e.querySelector(".gear-passes-asset img"));
      return e ? e.src : null;
    },
    _e = function (e, t, n) {
      if ((void 0 === n && (n = window.location.pathname), n.includes(u))) {
        if (!t) throw new Error("button data not exist");
        H(C.UpsellFromGamesPage, t.assetType);
        n = Ae(t);
        if (!n)
          throw (
            (H(C.UpsellThumbnailProcessFailed, t.assetType),
            new Error("thumbnail image url process failed"))
          );
        return n;
      }
      return e.imageurl;
    },
    we = HeaderScripts;
  function ge(e, t, n, r) {
    var a = F(e),
      o = F(parseInt(n.expectedPrice, 10)),
      e = window.location.pathname;
    h.Endpoints &&
      h.Endpoints.supportLocalizedUrls &&
      (e = h.Endpoints.removeUrlLocale(e));
    e.startsWith(u) && (t = null !== (e = Ae(n)) && void 0 !== e ? e : t);
    a =
      "<div class='item-card-container item-preview'>\n        <div class='item-card-thumb'>\n          <img alt='item preview' src='" +
      t +
      "' />\n        </div>\n        <div class='item-info text-name'>\n        <div class='text-overflow item-card-name'>" +
      (0, R.escapeHtml)()(n.itemName) +
      "</div>\n          <div class='text-robux item-card-price'>" +
      o +
      "</div>\n        </div>\n      </div>" +
      r.get(w.insufficientRobuxExceedLargestPackageMessage, {
        divTagStart: "<div class='modal-message-block text-center border-top'>",
        divTagEnd: "</div>",
        robuxNeeded: a,
      });
    m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
      m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
        .WEB_CATALOG_ROBUX_UPSELL,
      !0,
      m.paymentFlowAnalyticsService.ENUM_VIEW_NAME
        .ROBUX_UPSELL_EXCEED_LARGEST_PACKAGE,
      m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.VIEW_SHOWN,
    ),
      H(C.UpsellExceedLargestShown, n.assetType),
      h.Dialog.open({
        titleText: r.get(w.insufficientRobuxHeading, {}),
        bodyContent: a,
        declineText: r.get(w.cancelAction, {}),
        acceptText: r.get(w.goToRobuxStoreAction, {}),
        acceptColor: "btn-primary-md",
        onAccept: function () {
          var e, t;
          return (
            m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
              m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                .WEB_CATALOG_ROBUX_UPSELL,
              !0,
              m.paymentFlowAnalyticsService.ENUM_VIEW_NAME
                .ROBUX_UPSELL_EXCEED_LARGEST_PACKAGE,
              m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT,
              m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.GO_TO_ROBUX_STORE,
            ),
            H(
              C.UpsellExceedLargestGoToRobuxStoreClicked,
              null == n ? void 0 : n.assetType,
            ),
            (e =
              null !==
                (t =
                  null === (e = we.deviceMeta.getDeviceMeta()) || void 0 === e
                    ? void 0
                    : e.isTablet) &&
              void 0 !== t &&
              t),
            (t =
              null !==
                (t =
                  null === (t = we.deviceMeta.getDeviceMeta()) || void 0 === t
                    ? void 0
                    : t.isUniversalApp) &&
              void 0 !== t &&
              t),
            (window.location.href =
              e && t
                ? R.urlService.getUrlWithQueries("/Upgrades/Robux.aspx", {
                    ctx: "",
                  })
                : h.Endpoints.getAbsoluteUrl("/upgrades/robux?ctx=upsell")),
            !1
          );
        },
        onDecline: function () {
          m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
            m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
              .WEB_CATALOG_ROBUX_UPSELL,
            !0,
            m.paymentFlowAnalyticsService.ENUM_VIEW_NAME
              .ROBUX_UPSELL_EXCEED_LARGEST_PACKAGE,
            m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT,
            m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CANCEL,
          ),
            H(C.UpsellExceedLargestCancelled, null == n ? void 0 : n.assetType);
        },
        onCancel: function () {
          m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
            m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
              .WEB_CATALOG_ROBUX_UPSELL,
            !0,
            m.paymentFlowAnalyticsService.ENUM_VIEW_NAME
              .ROBUX_UPSELL_EXCEED_LARGEST_PACKAGE,
            m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT,
            m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CANCEL,
          ),
            H(C.UpsellCancelled, null == n ? void 0 : n.assetType);
        },
        allowHtmlContentInBody: !0,
        allowHtmlContentInFooter: !1,
        fieldValidationRequired: !0,
        dismissable: !0,
        xToCancel: !0,
      });
  }
  var Ie = function (e, i, l, s) {
      return new (l = l || Promise)(function (n, t) {
        function r(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function a(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof l
                ? t
                : new l(function (e) {
                    e(t);
                  })
              ).then(r, a);
        }
        o((s = s.apply(e, i || [])).next());
      });
    },
    Me = function (n, r) {
      var a,
        o,
        i,
        l = {
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
            for (; l; )
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
                    return l.label++, { value: t[1], done: !1 };
                  case 5:
                    l.label++, (o = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = 0 < (i = l.trys).length && i[i.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                      l.label = t[1];
                      break;
                    }
                    if (6 === t[0] && l.label < i[1]) {
                      (l.label = i[1]), (i = t);
                      break;
                    }
                    if (i && l.label < i[2]) {
                      (l.label = i[2]), l.ops.push(t);
                      break;
                    }
                    i[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                t = r.call(n, l);
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
    xe = function (e, i, l, s) {
      return new (l = l || Promise)(function (n, t) {
        function r(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function a(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof l
                ? t
                : new l(function (e) {
                    e(t);
                  })
              ).then(r, a);
        }
        o((s = s.apply(e, i || [])).next());
      });
    },
    Ce = function (n, r) {
      var a,
        o,
        i,
        l = {
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
            for (; l; )
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
                    return l.label++, { value: t[1], done: !1 };
                  case 5:
                    l.label++, (o = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = 0 < (i = l.trys).length && i[i.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                      l.label = t[1];
                      break;
                    }
                    if (6 === t[0] && l.label < i[1]) {
                      (l.label = i[1]), (i = t);
                      break;
                    }
                    if (i && l.label < i[2]) {
                      (l.label = i[2]), l.ops.push(t);
                      break;
                    }
                    i[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                t = r.call(n, l);
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
    };
  function Re(i, l, s) {
    return xe(this, void 0, void 0, function () {
      return Ce(this, function (e) {
        try {
          return (
            m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
              m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                .WEB_CATALOG_ROBUX_UPSELL,
              !0,
              m.paymentFlowAnalyticsService.ENUM_VIEW_NAME.LEAVE_ROBLOX_WARNING,
              m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.VIEW_SHOWN,
              m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
                .EXTERNAL_LINK_MODAL,
            ),
            H(
              C.ContinueBuyRobuxOnExternalSite,
              null == s ? void 0 : s.assetType,
            ),
            (t = i),
            (r = s),
            (a = (n = l).getTranslationResource(d)),
            (o = n.getTranslationResource(c)),
            (n = { lineBreak: (n = "<br /><br />"), linebreak: n }),
            (n =
              a.get(w.insufficientRobuxAskToPurchasePackageMessage, n) ||
              "This purchase must be completed on our partner’s website. You will be returned to Roblox after the purchase is completed.<br /><br /> Proceed to partner website for payment?"),
            h.Dialog.open({
              titleText:
                a.get(w.insufficientRobuxLeaveRobloxHeading, {}) ||
                "Leaving Roblox",
              bodyContent:
                "<div class='modal-message-block text-center'>" + n + "</div>",
              declineText: o.get(w.commonUiCancelAction, {}),
              acceptText:
                o.get(w.commonUiContinueToPaymentAction, {}) ||
                "Continue to Payment",
              onAccept: function () {
                m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
                  m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                    .WEB_CATALOG_ROBUX_UPSELL,
                  !0,
                  m.paymentFlowAnalyticsService.ENUM_VIEW_NAME
                    .LEAVE_ROBLOX_WARNING,
                  m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE
                    .USER_INPUT,
                  m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
                    .CONTINUE_TO_VNG,
                ),
                  H(
                    C.ConfirmLeaveRobloxModal,
                    null == r ? void 0 : r.assetType,
                  ),
                  t();
              },
              onDecline: function () {
                m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
                  m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                    .WEB_CATALOG_ROBUX_UPSELL,
                  !0,
                  m.paymentFlowAnalyticsService.ENUM_VIEW_NAME
                    .LEAVE_ROBLOX_WARNING,
                  m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE
                    .USER_INPUT,
                  m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CANCEL,
                ),
                  H(
                    C.CancelledFromLeaveRobloxModal,
                    null == r ? void 0 : r.assetType,
                  );
              },
              onCancel: function () {
                m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
                  m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                    .WEB_CATALOG_ROBUX_UPSELL,
                  !0,
                  m.paymentFlowAnalyticsService.ENUM_VIEW_NAME
                    .LEAVE_ROBLOX_WARNING,
                  m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE
                    .USER_INPUT,
                  m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CANCEL,
                ),
                  H(
                    C.CancelledFromLeaveRobloxModal,
                    null == r ? void 0 : r.assetType,
                  );
              },
              allowHtmlContentInBody: !0,
              allowHtmlContentInFooter: !1,
              fieldValidationRequired: !0,
              dismissable: !0,
              xToCancel: !0,
            }),
            [2, Promise.resolve()]
          );
        } catch (e) {
          return [2, Promise.reject(e)];
        }
        var t, n, r, a, o;
        return [2];
      });
    });
  }
  var Ne = function (e, i, l, s) {
      return new (l = l || Promise)(function (n, t) {
        function r(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function a(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value) instanceof l
                ? t
                : new l(function (e) {
                    e(t);
                  })
              ).then(r, a);
        }
        o((s = s.apply(e, i || [])).next());
      });
    },
    Le = function (n, r) {
      var a,
        o,
        i,
        l = {
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
            for (; l; )
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
                    return l.label++, { value: t[1], done: !1 };
                  case 5:
                    l.label++, (o = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = l.ops.pop()), l.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = 0 < (i = l.trys).length && i[i.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      l = 0;
                      continue;
                    }
                    if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                      l.label = t[1];
                      break;
                    }
                    if (6 === t[0] && l.label < i[1]) {
                      (l.label = i[1]), (i = t);
                      break;
                    }
                    if (i && l.label < i[2]) {
                      (l.label = i[2]), l.ops.push(t);
                      break;
                    }
                    i[2] && l.ops.pop(), l.trys.pop();
                    continue;
                }
                t = r.call(n, l);
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
    };
  function Fe() {
    var t = this;
    (this._state = { purchased: !1, retryRemainTimes: 5, timeoutHandle: null }),
      (this._checkBalanceAndPurchase = function (r, a) {
        return Ne(t, void 0, Promise, function () {
          var t,
            n = this;
          return Le(this, function (e) {
            switch (e.label) {
              case 0:
                if (this._state.purchased) return [2, Promise.resolve()];
                e.label = 1;
              case 1:
                return (
                  e.trys.push([1, 5, , 6]),
                  (t = this.translationResource.get(
                    w.waitingForRobuxLabel,
                    {},
                  )),
                  this.loadingOverlay.updateMessage(t),
                  [
                    4,
                    (function () {
                      return Te(this, void 0, Promise, function () {
                        var t, n;
                        return Pe(this, function (e) {
                          switch (e.label) {
                            case 0:
                              (t = h.CurrentUser.userId),
                                (t = {
                                  url:
                                    "" +
                                    h.EnvironmentUrls.economyApi +
                                    o.replace("{userId}", t),
                                  withCredentials: !0,
                                  retryable: !1,
                                  noCache: !0,
                                }),
                                (e.label = 1);
                            case 1:
                              return (
                                e.trys.push([1, 3, , 4]),
                                [4, R.httpService.get(t)]
                              );
                            case 2:
                              return 200 === (n = e.sent()).status
                                ? [2, n.data.robux]
                                : [2, Promise.reject()];
                            case 3:
                              return (n = e.sent()), [2, Promise.reject(n)];
                            case 4:
                              return [2];
                          }
                        });
                      });
                    })(),
                  ]
                );
              case 2:
                return (
                  (t = e.sent()),
                  (r.userBalance = t) >= r.expectedPrice
                    ? [
                        4,
                        Ue(r, a, this.loadingOverlay, this.translationResource),
                      ]
                    : [3, 4]
                );
              case 3:
                e.sent(),
                  this._stopPeriodicChecking(),
                  (this._state.purchased = !0),
                  (e.label = 4);
              case 4:
                return (
                  this._state.purchased ||
                    (0 < this._state.retryRemainTimes
                      ? ((this._state.timeoutHandle = setTimeout(function () {
                          return Ne(n, void 0, void 0, function () {
                            return Le(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return [
                                    4,
                                    this._checkBalanceAndPurchase(r, a),
                                  ];
                                case 1:
                                  return e.sent(), [2];
                              }
                            });
                          });
                        }, 1e3)),
                        --this._state.retryRemainTimes)
                      : (H(
                          C.AutoPurchaseFailedDueToStillLowBalance,
                          null == r ? void 0 : r.assetType,
                        ),
                        this._processGenericErrorState(r))),
                  [3, 6]
                );
              case 5:
                return (
                  e.sent(),
                  H(C.AutoPurchaseFailed, null == r ? void 0 : r.assetType),
                  this._processGenericErrorState(r),
                  [3, 6]
                );
              case 6:
                return [2, Promise.resolve()];
            }
          });
        });
      }),
      (this._stopPeriodicChecking = function () {
        t._state.timeoutHandle &&
          (clearTimeout(t._state.timeoutHandle),
          (t._state.timeoutHandle = null));
      }),
      (this._processGenericErrorState = function (e) {
        t.loadingOverlay.hide(), me(e, t.translationResource), B();
      }),
      (this.intl = new h.Intl()),
      (this.intlProvider = new h.TranslationResourceProvider(this.intl)),
      (this.translationResource = this.intlProvider.getTranslationResource(b)),
      (this.loadingOverlay = new Z());
  }
  var Oe =
    ((Fe.prototype.startItemUpsellProcess = function (c, u, d, p) {
      var e, v, y, E;
      return (
        void 0 === p &&
          (p =
            null === (e = document.getElementById(f)) || void 0 === e
              ? void 0
              : e.dataset),
        Ne(this, void 0, Promise, function () {
          var i, l, s;
          return Le(this, function (e) {
            switch (e.label) {
              case 0:
                if (
                  !(i = p) ||
                  u.isLimited ||
                  "Product" ===
                    (null ===
                      (v = null == u ? void 0 : u.buyButtonElementDataset) ||
                    void 0 === v
                      ? void 0
                      : v.assetType)
                )
                  return d(c), [2, Promise.reject(c)];
                if (
                  ((l =
                    m.upsellUtil.constants.UPSELL_TARGET_ITEM_URL_REGEX.exec(
                      window.location.pathname,
                    )),
                  (m.upsellUtil.constants.UPSELL_TARGET_ITEM_URL_REGEX.lastIndex = 0),
                  !Array.isArray(l))
                )
                  return [3, 5];
                e.label = 1;
              case 1:
                return (
                  e.trys.push([1, 4, , 5]),
                  [
                    4,
                    (function () {
                      return Ie(this, void 0, Promise, function () {
                        var t, n;
                        return Me(this, function (e) {
                          switch (e.label) {
                            case 0:
                              (t = {
                                url:
                                  h.EnvironmentUrls
                                    .universalAppConfigurationApi +
                                  "/v1/behaviors/vng-buy-robux/content",
                                withCredentials: !0,
                              }),
                                (e.label = 1);
                            case 1:
                              return (
                                e.trys.push([1, 3, , 4]),
                                [4, R.httpService.get(t)]
                              );
                            case 2:
                              return (
                                (n = e.sent()),
                                [2, Promise.resolve(n.data.shouldShowVng)]
                              );
                            case 3:
                              return (n = e.sent()), [2, Promise.reject(n)];
                            case 4:
                              return [2];
                          }
                        });
                      });
                    })(),
                  ]
                );
              case 2:
                return e.sent()
                  ? (m.paymentFlowAnalyticsService.startRobuxUpsellFlow(
                      null !==
                        (v =
                          null === (v = u.buyButtonElementDataset) ||
                          void 0 === v
                            ? void 0
                            : v.assetType) && void 0 !== v
                        ? v
                        : "",
                      !(
                        null === (v = u.buyButtonElementDataset) ||
                        void 0 === v ||
                        !v.userassetId
                      ),
                      null !==
                        (v =
                          null === (v = u.buyButtonElementDataset) ||
                          void 0 === v
                            ? void 0
                            : v.isPrivateServer) &&
                        void 0 !== v &&
                        v,
                      null !==
                        (v =
                          null === (v = u.buyButtonElementDataset) ||
                          void 0 === v
                            ? void 0
                            : v.isPlace) &&
                        void 0 !== v &&
                        v,
                      null === (v = u.buyButtonElementDataset) || void 0 === v
                        ? void 0
                        : v.productId,
                    ),
                    (i.thumbnailImageUrl = _e(i, u.buyButtonElementDataset)),
                    (t = u),
                    (n = i),
                    (r = this.translationResource),
                    (a = this.intlProvider),
                    (o = F(t.expectedItemPrice)),
                    (n =
                      "<div class='item-card-container item-preview'>\n        <div class='item-card-thumb'>\n          <img alt='item preview' src='" +
                      (null !== (n = n.thumbnailImageUrl) && void 0 !== n
                        ? n
                        : "") +
                      "' />\n        </div>\n        <div class='item-info text-name'>\n        <div class='text-overflow item-card-name'>" +
                      (0, R.escapeHtml)()(t.assetName) +
                      "</div>\n          <div class='text-robux item-card-price'>" +
                      o +
                      "</div>\n        </div>\n      </div>"),
                    H(
                      C.UpsellShown,
                      null === (o = t.buyButtonElementDataset) || void 0 === o
                        ? void 0
                        : o.assetType,
                    ),
                    m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
                      m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                        .WEB_CATALOG_ROBUX_UPSELL,
                      !0,
                      m.paymentFlowAnalyticsService.ENUM_VIEW_NAME.ROBUX_UPSELL,
                      m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE
                        .VIEW_SHOWN,
                    ),
                    (o =
                      n +
                      (r.get(
                        w.insufficientRobuxAskToPurchasePackageMessage,
                        {},
                      ) ||
                        "<div class='modal-message-block text-center border-top'>Sorry, you don't have enough Robux to buy this item. Would you like to purchase a Robux package?</div>")),
                    (n =
                      r.get(w.insufficientRobuxRedirectToExternalPartner, {}) ||
                      "<div class='text-footer modal-message-block text-center'> You will be taken to our partner’s page to complete the purchase.</div>"),
                    h.Dialog.open({
                      titleText:
                        r.get(w.insufficientRobuxHeading, {}) ||
                        "Insufficient Robux",
                      bodyContent: o,
                      declineText: r.get(w.cancelAction, {}),
                      acceptText: r.get(w.buyRobux, {}) || "Buy Robux",
                      onAccept: function () {
                        return (
                          m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
                            m.paymentFlowAnalyticsService
                              .ENUM_TRIGGERING_CONTEXT.WEB_CATALOG_ROBUX_UPSELL,
                            !0,
                            m.paymentFlowAnalyticsService.ENUM_VIEW_NAME
                              .ROBUX_UPSELL,
                            m.paymentFlowAnalyticsService
                              .ENUM_PURCHASE_EVENT_TYPE.USER_INPUT,
                            m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
                              .BUY_ROBUX,
                          ),
                          Re(re, a, t.buyButtonElementDataset).catch(
                            function () {
                              var e;
                              H(
                                C.LeaveRobloxFailedToShown,
                                null === (e = t.buyButtonElementDataset) ||
                                  void 0 === e
                                  ? void 0
                                  : e.assetType,
                              ),
                                re();
                            },
                          ),
                          !1
                        );
                      },
                      onDecline: function () {
                        var e;
                        m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
                          m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                            .WEB_CATALOG_ROBUX_UPSELL,
                          !0,
                          m.paymentFlowAnalyticsService.ENUM_VIEW_NAME
                            .ROBUX_UPSELL,
                          m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE
                            .USER_INPUT,
                          m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
                            .CANCEL,
                        ),
                          H(
                            C.UpsellCancelled,
                            null === (e = t.buyButtonElementDataset) ||
                              void 0 === e
                              ? void 0
                              : e.assetType,
                          );
                      },
                      onCancel: function () {
                        var e;
                        m.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
                          m.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                            .WEB_CATALOG_ROBUX_UPSELL,
                          !0,
                          m.paymentFlowAnalyticsService.ENUM_VIEW_NAME
                            .ROBUX_UPSELL,
                          m.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE
                            .USER_INPUT,
                          m.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE
                            .CANCEL,
                        ),
                          H(
                            C.UpsellCancelled,
                            null === (e = t.buyButtonElementDataset) ||
                              void 0 === e
                              ? void 0
                              : e.assetType,
                          );
                      },
                      allowHtmlContentInBody: !0,
                      allowHtmlContentInFooter: !0,
                      footerText: n,
                      fieldValidationRequired: !0,
                      dismissable: !0,
                      xToCancel: !0,
                    }),
                    [2, Promise.resolve()])
                  : [
                      4,
                      (function (r, a) {
                        return N(this, void 0, Promise, function () {
                          var t, n;
                          return L(this, function (e) {
                            switch (e.label) {
                              case 0:
                                (t = parseInt(r.userBalanceRobux, 10)),
                                  (n = {
                                    upsell_platform: "WEB",
                                    user_robux_balance: t,
                                    attempt_robux_amount: a.expectedItemPrice,
                                  }),
                                  (t = {
                                    url:
                                      h.EnvironmentUrls.apiGatewayUrl +
                                      "/payments-gateway/v1/products/get-upsell-product",
                                    withCredentials: !0,
                                  }),
                                  (e.label = 1);
                              case 1:
                                return (
                                  e.trys.push([1, 3, , 4]),
                                  [4, R.httpService.post(t, n)]
                                );
                              case 2:
                                return [2, e.sent()];
                              case 3:
                                return (n = e.sent()), [2, Promise.reject(n)];
                              case 4:
                                return [2];
                            }
                          });
                        });
                      })(i, u),
                    ];
              case 3:
                return 200 === (s = e.sent()).status
                  ? (m.paymentFlowAnalyticsService.startRobuxUpsellFlow(
                      null !==
                        (y =
                          null === (y = u.buyButtonElementDataset) ||
                          void 0 === y
                            ? void 0
                            : y.assetType) && void 0 !== y
                        ? y
                        : "",
                      !(
                        null === (y = u.buyButtonElementDataset) ||
                        void 0 === y ||
                        !y.userassetId
                      ),
                      null !==
                        (y =
                          null === (y = u.buyButtonElementDataset) ||
                          void 0 === y
                            ? void 0
                            : y.isPrivateServer) &&
                        void 0 !== y &&
                        y,
                      null !==
                        (y =
                          null === (y = u.buyButtonElementDataset) ||
                          void 0 === y
                            ? void 0
                            : y.isPlace) &&
                        void 0 !== y &&
                        y,
                      null === (y = u.buyButtonElementDataset) || void 0 === y
                        ? void 0
                        : y.productId,
                    ),
                    (i.thumbnailImageUrl = _e(i, u.buyButtonElementDataset)),
                    z(
                      c,
                      u,
                      i,
                      s.data,
                      this.intl,
                      this.intlProvider.getTranslationResource(b),
                      this.intlProvider,
                    ),
                    [2, Promise.resolve()])
                  : (204 === s.status
                      ? H(
                          C.UpsellFailedDueToNoAvailablePackage,
                          null === (y = u.buyButtonElementDataset) ||
                            void 0 === y
                            ? void 0
                            : y.assetType,
                        )
                      : H(
                          C.UpsellFailedDueToFailedPackageRequest,
                          null === (E = u.buyButtonElementDataset) ||
                            void 0 === E
                            ? void 0
                            : E.assetType,
                        ),
                    [3, 5]);
              case 4:
                return (
                  (s = e.sent()),
                  H(
                    C.UpsellFailed,
                    null === (E = u.buyButtonElementDataset) || void 0 === E
                      ? void 0
                      : E.assetType,
                  ),
                  d(c),
                  [2, Promise.reject(s)]
                );
              case 5:
                return d(c), [2, Promise.reject(c)];
            }
            var t, n, r, a, o;
          });
        })
      );
    }),
    (Fe.prototype.showExceedLargestInsufficientRobuxModal = function (
      e,
      t,
      n,
      r,
    ) {
      var a, o;
      void 0 === r &&
        (r =
          null === (a = document.getElementById(f)) || void 0 === a
            ? void 0
            : a.dataset),
        H(C.UpsellExceedLargestEntryPoint, null == t ? void 0 : t.assetType);
      var i = r;
      if (null == i || !i.imageurl)
        return (
          H(
            C.UpsellExceedLargestNoThumbnailImage,
            null == t ? void 0 : t.assetType,
          ),
          void n()
        );
      try {
        m.paymentFlowAnalyticsService.startRobuxUpsellFlow(
          null !== (o = null == t ? void 0 : t.assetType) && void 0 !== o
            ? o
            : "",
          !(null == t || !t.userassetId),
          null !== (o = null == t ? void 0 : t.isPrivateServer) &&
            void 0 !== o &&
            o,
          null !== (o = null == t ? void 0 : t.isPlace) && void 0 !== o && o,
          null == t ? void 0 : t.productId,
        ),
          ge(e, i.imageurl, t, this.intlProvider.getTranslationResource(b)),
          H(
            C.UpsellExceedLargestModalExpTrue,
            null == t ? void 0 : t.assetType,
          );
      } catch (e) {
        H(C.UpsellExceedLargestModalExpError, null == t ? void 0 : t.assetType),
          n();
      }
    }),
    (Fe.prototype.initiateAutoPurchase = function (o, i, l, s) {
      var c;
      return (
        void 0 === l && (l = document.getElementById(f)),
        void 0 === s && (s = document.getElementById("item-container")),
        Ne(this, void 0, Promise, function () {
          var t, n, r, a;
          return Le(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (this._state = {
                    purchased: !1,
                    retryRemainTimes: 5,
                    timeoutHandle: null,
                  }),
                  this.loadingOverlay.show(),
                  H(C.AutoPurchaseEntryPoint, x),
                  ve(o),
                  [
                    4,
                    (function (c, u, d, p) {
                      return ue(this, void 0, Promise, function () {
                        var t, n, r, a, o, i, l, s;
                        return de(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [4, Ee(p, d, u)];
                            case 1:
                              return (
                                (i = e.sent()),
                                (s = i[0]),
                                (t = i[1]),
                                (n = t.placeproductpromotionId),
                                (l =
                                  (h.MetaDataValues &&
                                    h.MetaDataValues.getPageName()) ||
                                  ""),
                                (r = "LibraryItem" === l),
                                (a = parseInt(s.userBalanceRobux, 10)),
                                (o = parseInt(t.expectedCurrency, 10)),
                                (i = parseInt(t.expectedPrice, 10)),
                                (l = parseInt(t.expectedSellerId, 10)),
                                (s = {
                                  itemContainerElemClassList:
                                    null == c ? void 0 : c.classList,
                                  assetType: t.assetType,
                                  assetName: (0, R.escapeHtml)()(t.itemName),
                                  expectedSellerId: l,
                                  expectedCurrency: o,
                                  expectedPrice: i,
                                  productId: t.productId,
                                  isLibrary: r,
                                  itemThumbnailUrl: s.imageurl,
                                  itemPath: p,
                                  alertImageUrl: s.alerturl,
                                  userBalance: a,
                                  itemPurchaseAjaxData: s,
                                  itemDetail: t,
                                }),
                                n && (s.expectedPromoId = parseInt(n, 10)),
                                t.userassetId &&
                                  (s.userAssetId = parseInt(t.userassetId, 10)),
                                [2, s]
                              );
                          }
                        });
                      });
                    })(
                      s,
                      null == s ? void 0 : s.dataset,
                      null == l ? void 0 : l.dataset,
                      o,
                    ),
                  ]
                );
              case 1:
                (t = e.sent()),
                  (a = this.translationResource.get(
                    w.purchasingTheItemLabel,
                    {},
                  )),
                  (n = t.userBalance),
                  (r = t.expectedPrice),
                  (e.label = 2);
              case 2:
                return (e.trys.push([2, 6, , 7]),
                o.startsWith(u) &&
                  null !== (c = document.getElementById("tab-store")) &&
                  void 0 !== c &&
                  c.click(),
                r < n)
                  ? (this.loadingOverlay.updateMessage(a),
                    [
                      4,
                      Ue(t, i, this.loadingOverlay, this.translationResource),
                    ])
                  : [3, 4];
              case 3:
                return (
                  e.sent(), (this._state.purchased = !0), [2, Promise.resolve()]
                );
              case 4:
                return [4, this._checkBalanceAndPurchase(t, i)];
              case 5:
                return e.sent(), [3, 7];
              case 6:
                return (
                  (a = e.sent()),
                  H(C.AutoPurchaseFailed, null == t ? void 0 : t.assetType),
                  ce(I.CONTEXT_NAME.UPSELL_FAILED, {
                    itemPurchaseObj: t,
                    error: a,
                  }),
                  B(),
                  [3, 7]
                );
              case 7:
                return [2, Promise.resolve()];
            }
          });
        })
      );
    }),
    Fe);
  void 0 === window.Roblox && (window.Roblox = {}),
    void 0 === window.Roblox.ItemPurchaseUpsellService &&
      (window.Roblox.ItemPurchaseUpsellService = new Oe());
})();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/5c908d906196b6ad69c0183500b83fd1-itemPurchaseUpsell.bundle.min.js.map

/* Bundle detector */
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("ItemPurchaseUpsell");
