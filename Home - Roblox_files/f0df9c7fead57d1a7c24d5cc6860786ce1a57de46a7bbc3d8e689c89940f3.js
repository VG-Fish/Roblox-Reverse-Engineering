!(function () {
  "use strict";
  var n = {
      n: function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, { a: t }), t;
      },
      d: function (e, t) {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      },
      o: function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      },
    },
    fe = React,
    be = n.n(fe),
    t = ReactDOM,
    ye = CoreUtilities,
    e = PropTypes,
    r = n.n(e),
    o = ReactUtilities,
    M = ReactStyleGuide,
    s = {
      purchasingResources: { common: [], feature: "Purchasing.PurchaseDialog" },
      itemResources: { common: [], feature: "Feature.Item" },
      itemModelResources: { common: [], feature: "Feature.ItemModel" },
    },
    a = {
      errorTypeIds: {
        transactionFailure: "TransactionFailureView",
        insufficientFunds: "InsufficientFundsView",
        priceChanged: "PriceChangedView",
        pendingProductsLimitExceeded: "PendingProductsLimitExceeded",
      },
      errorStatusText: { badRequest: "Bad Request" },
      events: {
        startItemPurchase: "ItemPurchaseStart",
        NEW_UPSELL_FAILED_DUE_TO_ERROR:
          "ReactBuyButtonNewUpsellProcessFailedDueToError",
        NEW_UPSELL_FAILED_DUE_TO_LOADING:
          "ReactBuyButtonNewUpsellProcessFailedDueToNotLoaded",
        NEW_UPSELL_FROM_REACT_BUY_BUTTON:
          "ReactBuyButtonNewUpsellProcessNewUpsellFromReactBuyButton",
      },
      resources: {
        freeLabel: "Label.Free",
        okAction: "Action.Ok",
        insufficientFundsHeading: "Heading.InsufficientFunds",
        insufficientFundsMessage: "Message.InsufficientFunds",
        doneAction: "Action.Done",
        cancelAction: "Action.Cancel",
        buyRobuxAction: "Action.BuyRobux",
        buyAccessAction: "Action.BuyAccess",
        buyItemHeading: "Heading.BuyItem",
        buyNowAction: "Action.BuyNow",
        getItemHeading: "Heading.GetItem",
        getNowAction: "Action.GetNow",
        priceChangedHeading: "Heading.PriceChanged",
        priceChangedMessage: "Message.PriceChanged",
        balanceAfterMessage: "Message.BalanceAfter",
        agreeAndPayLabel: "Label.AgreeAndPay",
        promptGetFreeAccessMessage: "Message.PromptGetFreeAccess",
        promptGetFreeMessage: "Message.PromptGetFree",
        promptBuyAccessMessage: "Message.PromptBuyAccess",
        promptBuyMessage: "Message.PromptBuy",
        promptBuySimplifiedMessage: "Message.PromptBuySimplified",
        configureAction: "Action.Customize",
        notNowAction: "Action.NotNow",
        customizeAction: "Action.Customize",
        continueAction: "Action.Continue",
        purchaseCompleteHeading: "Heading.PurchaseComplete",
        successfullyBoughtAccessMessage: "Message.SuccessfullyBoughtAccess",
        successfullyBoughtMessage: "Message.SuccessfullyBought",
        successfullyRenewedAccessMessage: "Message.SuccessfullyRenewedAccess",
        successfullyRenewedMessage: "Message.SuccessfullyRenewed",
        successfullyAcquiredAccessMessage: "Message.SuccessfullyAcquiredAccess",
        successfullyAcquiredMessage: "Message.SuccessfullyAcquired",
        itemGrantDelayMessage: "Message.ItemGrantDelay",
        errorOccuredHeading: "Heading.ErrorOccured",
        purchasingUnavailableMessage: "Message.PurchasingUnavailable",
        buyAction: "Action.Buy",
        installAction: "Action.Install",
        getAction: "Action.Get",
        bestPriceLabel: "Label.BestPrice",
        priceLabel: "Label.Price",
        premiumDiscountOpportunityPromptLabel:
          "Label.PremiumDiscountOpportunityPrompt",
        premiumDiscountSavingsLabel: "Label.PremiumDiscountSavings",
        premiumExclusiveEligiblePromptLabel:
          "Label.PremiumExclusiveEligiblePrompt",
        premiumExclusiveIneligiblePromptLabel:
          "Label.PremiumExclusiveIneligiblePrompt",
        getPremiumAction: "Action.GetPremium",
        itemNotCurrentlyForSaleLabel: "Label.ItemNotCurrentlyForSale",
        itemNoLongerForSaleLabel: "Label.ItemNoLongerForSale",
        purchasingTemporarilyUnavailableLabel:
          "Label.PurchasingTemporarilyUnavailable",
        itemAvailableInventoryLabel: "Label.ItemAvailableInventory",
        noOneCurrentlySellingLabel: "Label.NoOneCurrentlySelling",
        inventoryAction: "Action.Inventory",
        OffsaleCountdownHourMinuteSecondLabel:
          "Label.OffsaleCountdownHourMinuteSecond",
        CountdownTimerDayHourMinute: "Label.CountdownTimerDayHourMinute",
        batchBuyItemHeading: "Heading.BuyItems",
        batchBuyPromptMessage: "Message.PromptBatchBuy",
        batchBuyBalanceAfterMessage: "Message.BalanceAfter",
        purchaseCompletedMessage: "Heading.PurchaseCompleted",
        generalPurchaseErrorMessage: "Heading.GeneralError",
        batchBuyPartialSuccessGeneralFailureMessage:
          "Heading.PartialSuccessGeneralFailure",
        batchBuyPartialSuccessItemsOwnedFailureMessage:
          "Heading.PartialSuccessItemsOwnedFailure",
        batchBuyPartialSuccessInsufficientFundsFailureMessage:
          "Heading.PartialSuccessInsufficientFundsFailure",
        batchBuyPartialSuccessNetworkErrorFailureMessage:
          "Heading.PartialSuccessNetworkErrorFailure",
        batchBuyPartialSuccessFloodcheckFailureMessage:
          "Heading.PartialSuccessFloodcheckFailure",
        purchaseErrorFailureMessage: "Heading.PurchaseFailure",
        batchBuyItemsOwnedFailureMessage: "Heading.ItemsOwnedFailure",
        insufficientFundsFailureMessage: "Heading.InsufficientFundsFailure",
        networkErrroFailureMessage: "Heading.NetworkErrorFailure",
        floodcheckFailureMessage: "Heading.FloodcheckFailure",
        batchBuyPartialSuccessPremiumNeededFailureMessage:
          "Heading.PartialSuccessPremiumNeededFailure",
        batchBuyPartialSuccessNoSellersFailureMessage:
          "Heading.PartialSuccessNoSellersFailure",
        premiumNeededFailureMessage: "Heading.PremiumNeededFailure",
        noSellersFailureMessage: "Heading.NoSellersFailure",
        batchBuyPartialSuccessInExperienceOnlyFailureMessage:
          "Heading.PartialSuccessInExperienceOnlyFailure",
        inExperienceOnlyFailureMessage: "Heading.InExperienceOnlyFailure",
        redirectToPartnerWebsiteMessage: "Description.RedirectToPartnerWebsite",
        continueToPaymentAction: "Action.ContinueToPayment",
        leavingRobloxHeading: "Heading.LeavingRoblox",
        pendingDeveloperProductLimitReachedMessage:
          "Message.PendingDeveloperProductLimitReached",
        pendingDeveloperProductLimitReachedHeading:
          "Heading.PendingDeveloperProductLimitReached",
        additionalRobuxNeeded: "Message.AdditionalRobux",
      },
      assetTypes: {
        Plugin: 38,
        Decal: 13,
        Model: 10,
        Video: 62,
        MeshPart: 40,
        Place: 9,
        Badge: 21,
        GamePass: 34,
        Animation: 24,
      },
      assetCategory: { Catalog: 0, Library: 1 },
      purchaseMetadataKeys: { LookId: "lookId" },
      errorMessages: {
        insufficientFunds: "InsufficientFunds",
        retryErrorMessage:
          "Failed to determine purchasability status. Please try again by refreshing.",
        notForSale: "NotForSale",
        unauthorizedMessage: "Unauthorized",
        twoStepVerificationRequired: "TwoStepVerificationRequired",
      },
      batchBuyMaxThumbnails: 3,
      maxBatchLoadRetries: 5,
      floodcheckTime: 5,
    };
  function i(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return c(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return c(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var l = a.resources;
  function u() {
    var e = i((0, M.createModal)(), 2),
      a = e[0],
      e = e[1];
    function t(e) {
      var t = e.translate,
        r = e.title,
        n = e.message,
        e = e.onDecline,
        n = be().createElement("div", { className: "modal-message" }, n);
      return be().createElement(a, {
        title: r,
        body: n,
        thumbnail: be().createElement("span", {
          className: "icon-warning-orange-150x150",
        }),
        neutralButtonText: t(l.okAction),
        onNeutral: e,
      });
    }
    return (
      (t.defaultProps = { onDecline: null }),
      (t.propTypes = {
        translate: r().func.isRequired,
        title: r().string.isRequired,
        message: r().string.isRequired,
        onDecline: r().func,
      }),
      [(0, o.withTranslations)(t, s.purchasingResources), e]
    );
  }
  var w = ReactDOMServer,
    P = CoreRobloxUtilities,
    ge = Roblox,
    d = ge.EnvironmentUrls.economyApi,
    m = ge.EnvironmentUrls.catalogApi,
    p = ge.EnvironmentUrls.apiGatewayUrl,
    f = ge.EnvironmentUrls.twoStepVerificationApi,
    b = ge.EnvironmentUrls.universalAppConfigurationApi,
    y = ge.EnvironmentUrls.vngGamesShopUrl,
    N = {
      getRobuxUpgradesUrl: function (e) {
        return ye.urlService.getUrlWithQueries("/Upgrades/Robux.aspx", {
          ctx: e,
        });
      },
      getAvatarPageUrl: function () {
        return ye.urlService.getAbsoluteUrl("/my/avatar");
      },
      getPurchaseItemUrl: function (e) {
        return d + "/v1/purchases/products/" + e;
      },
      getItemDetailsUrl: function (e, t) {
        return m + "/v1/catalog/items/" + e + "/details?itemType=" + t;
      },
      postItemDetailsUrl: function () {
        return m + "/v1/catalog/items/details";
      },
      getPurchaseableDetailUrl: function (e) {
        return d + "/v1/products/" + e + "?showPurchasable=true";
      },
      getPremiumConversionUrl: function (e, t) {
        return (
          "/premium/membership?ctx=WebItemDetail&upsellTargetType=" +
          t +
          "&upsellTargetId=" +
          e
        );
      },
      getResellerDataUrl: function (e) {
        return d + "/v1/assets/" + e + "/resellers?limit=10";
      },
      getInventoryUrl: function (e) {
        return "/users/" + e + "/inventory";
      },
      getMetaDataUrl: function () {
        return d + "/v2/metadata";
      },
      getCurrentUserBalance: function (e) {
        return d + "/v1/users/" + e + "/currency";
      },
      getPurchaseCollectibleItemUrl: function (e) {
        return p + "/marketplace-sales/v1/item/" + e + "/purchase-item";
      },
      getPurchaseCollectibleItemInstanceUrl: function (e) {
        return p + "/marketplace-sales/v1/item/" + e + "/purchase-resale";
      },
      getCollectibleItemDetailsUrl: function () {
        return p + "/marketplace-items/v1/items/details";
      },
      getTwoStepVerificationConfig: function (e) {
        return f + "/v1/users/" + e + "/configuration";
      },
      postGenerateTwoStepVerificationToken: function (e) {
        return d + "/v2/" + e + "/two-step-verification/generate";
      },
      postRedeemTwoStepVerificationChallenge: function (e) {
        return d + "/v2/" + e + "/two-step-verification/redeem";
      },
      postBulkPurchaseUrl: function () {
        return p + "/cloud/v2/avatar-marketplace-orders";
      },
      getVngShopUrl: function () {
        return p + "/vng-payments/v1/getVngShopUrl";
      },
      getVngShopFallbackUrl: function () {
        return y;
      },
      getVngBuyRobuxBehaviorUrl: function () {
        return b + "/v1/behaviors/vng-buy-robux/content";
      },
      postPurchaseDeveloperProductUrl: function (e) {
        return {
          url:
            p +
            "/developer-products/v1/developer-products/" +
            e +
            "/purchase?requestLocationType=ExperienceDetailPage",
          withCredentials: !0,
        };
      },
    },
    g = a.resources;
  function h(e) {
    var t = e.translate,
      r = e.price,
      n = e.color,
      e = e.useFreeText;
    return 0 === r && e
      ? be().createElement(
          "span",
          { className: "text-robux text-free" },
          t(g.freeLabel),
        )
      : be().createElement(
          be().Fragment,
          null,
          be().createElement("span", {
            className: "icon-robux".concat(n ? "-".concat(n) : "", "-16x16"),
          }),
          be().createElement(
            "span",
            { className: "text-robux" },
            ye.numberFormat.getNumberFormat(r),
          ),
        );
  }
  (h.defaultProps = { color: "", useFreeText: !0 }),
    (h.propTypes = {
      price: r().number.isRequired,
      translate: r().func.isRequired,
      color: r().string,
      useFreeText: r().bool,
    });
  var A = (0, o.withTranslations)(h, s.purchasingResources);
  function v() {
    return (v =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n = arguments[t];
          for (r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
  }
  function S(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return E(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var I = a.resources;
  function R() {
    var e = S((0, M.createModal)(), 2),
      i = e[0],
      e = e[1];
    function t(e) {
      var t = e.translate,
        r = e.robuxNeeded,
        n = e.source,
        a = e.onAccept,
        e = be().createElement("div", {
          className: "modal-message",
          dangerouslySetInnerHTML: {
            __html: t(I.insufficientFundsMessage, {
              robux: (0, w.renderToString)(be().createElement(A, { price: r })),
            }),
          },
        });
      return (
        r ||
          (e = be().createElement(
            "div",
            null,
            " ",
            t(I.additionalRobuxNeeded),
          )),
        be().createElement(
          i,
          v(
            {
              title: t(I.insufficientFundsHeading),
              body: e,
              thumbnail: be().createElement("span", {
                className: "money-stack-icon",
              }),
              neutralButtonText: t(I.cancelAction),
              actionButtonText: t(I.buyRobuxAction),
              onAction: function () {
                return (
                  P.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
                    P.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                      .WEB_CATALOG_ROBUX_UPSELL,
                    !0,
                    P.paymentFlowAnalyticsService.ENUM_VIEW_NAME.ROBUX_UPSELL,
                    P.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE
                      .USER_INPUT,
                    P.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.BUY_ROBUX,
                  ),
                  a ? a() : (window.location = N.getRobuxUpgradesUrl(n)),
                  !1
                );
              },
              onClose: function () {
                P.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
                  P.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                    .WEB_CATALOG_ROBUX_UPSELL,
                  !0,
                  P.paymentFlowAnalyticsService.ENUM_VIEW_NAME.ROBUX_UPSELL,
                  P.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE
                    .USER_INPUT,
                  P.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CANCEL,
                );
              },
            },
            { actionButtonShow: !0 },
          ),
        )
      );
    }
    return (
      (t.defaultProps = { onAccept: null, source: "" }),
      (t.propTypes = {
        translate: r().func.isRequired,
        source: r().string,
        onAccept: r().func,
        robuxNeeded: r().number.isRequired,
      }),
      [(0, o.withTranslations)(t, s.purchasingResources), e]
    );
  }
  function he() {
    var e = document.getElementById("ItemPurchaseAjaxData");
    return e
      ? {
          userRobuxBalance: parseInt(
            e.getAttribute("data-user-balance-robux"),
            10,
          ),
          userBc: parseInt(e.getAttribute("data-user-bc"), 10),
          hasCurrencyServiceError:
            "True" === e.getAttribute("data-has-currency-service-error"),
          currencyServiceErrorMessage: e.getAttribute(
            "data-currency-service-error-message",
          ),
        }
      : {};
  }
  var T = a.resources;
  function x(e) {
    var t = e.translate,
      r = e.expectedPrice,
      e = e.currentRobuxBalance,
      r = (null != e ? e : he().userRobuxBalance) - r;
    return e
      ? be().createElement("span", {
          dangerouslySetInnerHTML: {
            __html: t(T.balanceAfterMessage, {
              robuxBalance: (0, w.renderToString)(
                be().createElement(A, {
                  price: r,
                  color: "gray",
                  useFreeText: !1,
                }),
              ),
            }),
          },
        })
      : be().createElement("span", null);
  }
  (x.propTypes = {
    expectedPrice: r().number.isRequired,
    currentRobuxBalance: r().number,
    translate: r().func.isRequired,
  }),
    (x.defaultProps = { currentRobuxBalance: void 0 });
  var F = (0, o.withTranslations)(x, s.purchasingResources);
  function C() {
    return (C =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n = arguments[t];
          for (r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
  }
  function D(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return U(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return U(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function U(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var O = a.resources;
  function B() {
    var e = D((0, M.createModal)(), 2),
      c = e[0],
      e = e[1];
    function t(e) {
      var t = e.translate,
        r = e.expectedPrice,
        n = e.currentPrice,
        a = e.onAction,
        i = e.loading,
        e = D((0, fe.useState)(!1), 2),
        o = e[0],
        s = e[1],
        r = be().createElement(
          be().Fragment,
          null,
          be().createElement("div", {
            className: "modal-message",
            dangerouslySetInnerHTML: {
              __html: t(O.priceChangedMessage, {
                robuxBefore: (0, w.renderToString)(
                  be().createElement(A, { price: r, color: "gray" }),
                ),
                robuxAfter: (0, w.renderToString)(
                  be().createElement(A, { price: n, color: "gray" }),
                ),
              }),
            },
          }),
          be().createElement(
            "div",
            { className: "modal-checkbox checkbox" },
            be().createElement("input", {
              id: "modal-checkbox-input",
              name: "agreementCheckBox",
              type: "checkbox",
              checked: o,
            }),
            be().createElement(
              "label",
              {
                onClick: function () {
                  return s(!o);
                },
                htmlFor: "modal-checkbox-input",
              },
              t(O.agreeAndPayLabel),
            ),
          ),
        );
      return be().createElement(
        c,
        C(
          {
            title: t(O.priceChangedHeading),
            body: r,
            neutralButtonText: t(O.cancelAction),
            actionButtonText: t(O.buyRobuxAction),
            onAction: a,
            loading: i,
            disableActionButton: !o,
            footerText: be().createElement(F, { expectedPrice: n }),
          },
          { actionButtonShow: !0 },
        ),
      );
    }
    return (
      (t.defaultProps = { loading: !1 }),
      (t.propTypes = {
        translate: r().func.isRequired,
        expectedPrice: r().number.isRequired,
        currentPrice: r().number.isRequired,
        onAction: r().func.isRequired,
        loading: r().bool,
      }),
      [(0, o.withTranslations)(t, s.purchasingResources), e]
    );
  }
  function L(e) {
    e = e.name;
    return be().createElement("span", { className: "font-bold" }, e);
  }
  L.propTypes = { name: r().string.isRequired };
  var q = L;
  function _() {
    return (_ =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n = arguments[t];
          for (r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
  }
  function k(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return j(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return j(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function j(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var H = a.resources;
  function V() {
    var e = k((0, M.createModal)(), 2),
      p = e[0],
      e = e[1];
    function t(e) {
      var t,
        r = e.translate,
        n = e.title,
        a = e.expectedPrice,
        i = e.thumbnail,
        o = e.assetName,
        s = e.assetType,
        c = e.assetTypeDisplayName,
        l = e.sellerName,
        u = e.isPlace,
        d = e.onAction,
        m = e.loading,
        e = e.currentRobuxBalance,
        c = {
          assetName: (0, w.renderToString)(be().createElement(q, { name: o })),
          assetType: c || s,
          seller: (0, ye.escapeHtml)()(l),
          robux: (0, w.renderToString)(be().createElement(A, { price: a })),
        },
        s = u ? H.promptBuyAccessMessage : H.promptBuyMessage;
      u || "" !== c.seller || (s = H.promptBuySimplifiedMessage),
        (l =
          0 === a
            ? ((t = r(H.getItemHeading)), r(H.getNowAction))
            : ((t = r(H.buyItemHeading)), r(H.buyNowAction))),
        u && (l = r(H.buyAccessAction));
      c = be().createElement("div", {
        className: "modal-message",
        dangerouslySetInnerHTML: { __html: r(s, c) },
      });
      return be().createElement(
        p,
        _(
          {
            title: n || t,
            body: c,
            thumbnail: i,
            neutralButtonText: r(H.cancelAction),
            actionButtonText: l,
            onAction: d,
            footerText: be().createElement(F, {
              expectedPrice: a,
              currentRobuxBalance: e,
            }),
            loading: m,
          },
          { actionButtonShow: !0 },
        ),
      );
    }
    return (
      (t.defaultProps = {
        isPlace: !1,
        assetTypeDisplayName: "",
        title: "",
        loading: !1,
        currentRobuxBalance: void 0,
      }),
      (t.propTypes = {
        translate: r().func.isRequired,
        title: r().string,
        expectedPrice: r().number.isRequired,
        thumbnail: r().node.isRequired,
        assetName: r().string.isRequired,
        assetType: r().string.isRequired,
        assetTypeDisplayName: r().string,
        sellerName: r().string.isRequired,
        isPlace: r().bool,
        onAction: r().func.isRequired,
        loading: r().bool,
        currentRobuxBalance: r().number,
      }),
      [(0, o.withTranslations)(t, s.purchasingResources), e]
    );
  }
  ((Mt = Nt = Nt || {}).Bought = "bought"), (Mt.Renewed = "renewed");
  var G = Nt;
  function W(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return z(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return z(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function z(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var X = N.getAvatarPageUrl,
    $ = a.resources;
  function ve() {
    var e = W((0, M.createModal)(), 2),
      h = e[0],
      e = e[1];
    function t(e) {
      var t,
        r,
        n = e.translate,
        a = e.expectedPrice,
        i = e.thumbnail,
        o = e.assetName,
        s = e.assetType,
        c = e.assetIsWearable,
        l = e.assetTypeDisplayName,
        u = e.sellerName,
        d = e.isPlace,
        m = e.isPrivateServer,
        p = e.onAccept,
        f = e.onDecline,
        b = e.transactionVerb,
        y = e.itemDelayed,
        g = e.currentRobuxBalance,
        e = n($.continueAction);
      m
        ? ((t = n($.configureAction)), (e = n($.notNowAction)))
        : y
          ? ((t = n($.customizeAction)), (e = n($.doneAction)))
          : c &&
            ((t = n($.customizeAction)),
            (e = n($.notNowAction)),
            (r = function () {
              return (window.location.href = X()), !1;
            }));
      (u = {
        assetName: (0, w.renderToString)(be().createElement(q, { name: o })),
        assetType: l || s,
        seller: (0, ye.escapeHtml)()(u),
        robux: (0, w.renderToString)(be().createElement(A, { price: a })),
      }),
        (d =
          b === G.Bought
            ? d
              ? $.successfullyAcquiredAccessMessage
              : $.successfullyBoughtMessage
            : b === G.Renewed
              ? d
                ? $.successfullyRenewedAccessMessage
                : $.successfullyRenewedMessage
              : d
                ? $.successfullyAcquiredAccessMessage
                : $.successfullyAcquiredMessage),
        (u = be().createElement("div", {
          className: "modal-message",
          dangerouslySetInnerHTML: {
            __html: ""
              .concat(n(d, u), " ")
              .concat(y ? n($.itemGrantDelayMessage) : ""),
          },
        }));
      return be().createElement(h, {
        title: n($.purchaseCompleteHeading),
        body: u,
        thumbnail: i,
        neutralButtonText: e,
        actionButtonText: t,
        onAction: p || r,
        onNeutral: f,
        footerText:
          !m &&
          be().createElement(F, { expectedPrice: a, currentRobuxBalance: g }),
        actionButtonShow: !!t,
        disableActionButton: y,
        onClose: function () {
          return window.location.reload();
        },
      });
    }
    return (
      (t.defaultProps = {
        isPlace: !1,
        assetTypeDisplayName: "",
        transactionVerb: "",
        assetIsWearable: !1,
        isPrivateServer: !1,
        onAccept: null,
        onDecline: null,
        itemDelayed: !1,
        currentRobuxBalance: void 0,
      }),
      (t.propTypes = {
        translate: r().func.isRequired,
        transactionVerb: r().string,
        expectedPrice: r().number.isRequired,
        thumbnail: r().node.isRequired,
        assetName: r().string.isRequired,
        assetType: r().string.isRequired,
        assetTypeDisplayName: r().string,
        assetIsWearable: r().bool,
        sellerName: r().string.isRequired,
        isPlace: r().bool,
        isPrivateServer: r().bool,
        onAccept: r().func,
        onDecline: r().func,
        itemDelayed: r().bool,
        currentRobuxBalance: r().number,
      }),
      [(0, o.withTranslations)(t, s.purchasingResources), e]
    );
  }
  var Y = N.getPurchaseItemUrl,
    Q = N.getPurchaseCollectibleItemUrl,
    K = N.getPurchaseCollectibleItemInstanceUrl,
    J = N.postBulkPurchaseUrl,
    Z = N.postPurchaseDeveloperProductUrl,
    Se = {
      purchaseCollectibleItem: function (e, t) {
        e = { url: Q(e), retryable: !0, withCredentials: !0 };
        return ye.httpService.post(e, t);
      },
      purchaseCollectibleItemInstance: function (e, t) {
        e = { url: K(e), retryable: !0, withCredentials: !0 };
        return ye.httpService.post(e, t);
      },
      purchaseDeveloperProduct: function (e, t) {
        e = Z(e.toString());
        return ye.httpService.post(e, t);
      },
      purchaseItem: function (e, t) {
        e = { url: Y(e), retryable: !0, withCredentials: !0 };
        return ye.httpService.post(e, t);
      },
      bulkPurchaseItem: function (e, t, r, n) {
        (n = {
          url: "".concat(J(), "?idempotencyKey.key=").concat(n),
          retryable: !0,
          withCredentials: !0,
        }),
          (r = {
            purchasingUser: "users/".concat(e),
            context: { productSurface: t },
            fulfillmentGroups: [r],
          });
        return ye.httpService.post(n, r);
      },
    },
    ee = N.getItemDetailsUrl,
    te = (N.postItemDetailsUrl, N.getPurchaseableDetailUrl),
    re = N.getResellerDataUrl,
    ne = N.getMetaDataUrl,
    ae = (N.getCollectibleItemDetailsUrl, N.getCurrentUserBalance),
    ie = function (e, t) {
      t = { url: ee(e, t), retryable: !0, withCredentials: !0 };
      return ye.httpService.get(t);
    },
    oe = function (e) {
      e = { url: te(e), retryable: !0, withCredentials: !0 };
      return ye.httpService.get(e);
    },
    se = function (e) {
      e = { url: re(e), retryable: !0, withCredentials: !0 };
      return ye.httpService.get(e);
    },
    ce = function () {
      var e = { url: ne(), retryable: !0, withCredentials: !0 };
      return ye.httpService.get(e);
    },
    Pe = function (e) {
      e = { url: ae(e), retryable: !0, withCredentials: !0 };
      return ye.httpService.get(e);
    },
    le = function (e, o, s, c) {
      return new (s = s || Promise)(function (r, t) {
        function n(e) {
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
            ? r(e.value)
            : ((t = e.value) instanceof s
                ? t
                : new s(function (e) {
                    e(t);
                  })
              ).then(n, a);
        }
        i((c = c.apply(e, o || [])).next());
      });
    },
    ue = function (r, n) {
      var a,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
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
            for (; s; )
              try {
                if (
                  ((a = 1),
                  i &&
                    (o =
                      2 & t[0]
                        ? i.return
                        : t[0]
                          ? i.throw || ((o = i.return) && o.call(i), 0)
                          : i.next) &&
                    !(o = o.call(i, t[1])).done)
                )
                  return o;
                switch (((i = 0), o && (t = [2 & t[0], o.value]), t[0])) {
                  case 0:
                  case 1:
                    o = t;
                    break;
                  case 4:
                    return s.label++, { value: t[1], done: !1 };
                  case 5:
                    s.label++, (i = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (
                      !(o = 0 < (o = s.trys).length && o[o.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === t[0] && (!o || (t[1] > o[0] && t[1] < o[3]))) {
                      s.label = t[1];
                      break;
                    }
                    if (6 === t[0] && s.label < o[1]) {
                      (s.label = o[1]), (o = t);
                      break;
                    }
                    if (o && s.label < o[2]) {
                      (s.label = o[2]), s.ops.push(t);
                      break;
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                t = n.call(r, s);
              } catch (e) {
                (t = [6, e]), (i = 0);
              } finally {
                a = o = 0;
              }
            if (5 & t[0]) throw t[1];
            return { value: t[0] ? t[1] : void 0, done: !0 };
          })([t, e]);
        };
      }
    },
    de = N.getTwoStepVerificationConfig,
    me = N.postGenerateTwoStepVerificationToken,
    pe = N.postRedeemTwoStepVerificationChallenge,
    Ee = function () {
      return le(void 0, void 0, Promise, function () {
        var t;
        return ue(this, function (e) {
          switch (e.label) {
            case 0:
              (t = {
                url: me("spend-friction"),
                retryable: !0,
                withCredentials: !0,
              }),
                (e.label = 1);
            case 1:
              return e.trys.push([1, 3, , 4]), [4, ye.httpService.post(t)];
            case 2:
              return [2, e.sent().data || null];
            case 3:
              return e.sent(), [2, null];
            case 4:
              return [2];
          }
        });
      });
    },
    Ie = function (n, a) {
      return le(void 0, void 0, Promise, function () {
        var t, r;
        return ue(this, function (e) {
          switch (e.label) {
            case 0:
              (t = {
                url: pe("spend-friction"),
                retryable: !0,
                withCredentials: !0,
              }),
                (r = { challengeToken: n, verificationToken: a }),
                (e.label = 1);
            case 1:
              return e.trys.push([1, 3, , 4]), [4, ye.httpService.post(t, r)];
            case 2:
              return (
                (r = e.sent()), [2, null !== (r = r.data) && void 0 !== r && r]
              );
            case 3:
              return e.sent(), [2, !1];
            case 4:
              return [2];
          }
        });
      });
    },
    we = function (e, o, s, c) {
      return new (s = s || Promise)(function (r, t) {
        function n(e) {
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
            ? r(e.value)
            : ((t = e.value) instanceof s
                ? t
                : new s(function (e) {
                    e(t);
                  })
              ).then(n, a);
        }
        i((c = c.apply(e, o || [])).next());
      });
    },
    Ae = function (r, n) {
      var a,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
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
            for (; s; )
              try {
                if (
                  ((a = 1),
                  i &&
                    (o =
                      2 & t[0]
                        ? i.return
                        : t[0]
                          ? i.throw || ((o = i.return) && o.call(i), 0)
                          : i.next) &&
                    !(o = o.call(i, t[1])).done)
                )
                  return o;
                switch (((i = 0), o && (t = [2 & t[0], o.value]), t[0])) {
                  case 0:
                  case 1:
                    o = t;
                    break;
                  case 4:
                    return s.label++, { value: t[1], done: !1 };
                  case 5:
                    s.label++, (i = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (
                      !(o = 0 < (o = s.trys).length && o[o.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === t[0] && (!o || (t[1] > o[0] && t[1] < o[3]))) {
                      s.label = t[1];
                      break;
                    }
                    if (6 === t[0] && s.label < o[1]) {
                      (s.label = o[1]), (o = t);
                      break;
                    }
                    if (o && s.label < o[2]) {
                      (s.label = o[2]), s.ops.push(t);
                      break;
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                t = n.call(r, s);
              } catch (e) {
                (t = [6, e]), (i = 0);
              } finally {
                a = o = 0;
              }
            if (5 & t[0]) throw t[1];
            return { value: t[0] ? t[1] : void 0, done: !0 };
          })([t, e]);
        };
      }
    },
    Re = ge.AccountIntegrityChallengeService.TwoStepVerification;
  function Te(e) {
    var t = e.systemFeedbackService,
      e = e.translate;
    t.warning(e("Response.VerificationError"));
  }
  function xe(e) {
    var o = e.stopTwoStepVerification,
      s = e.systemFeedbackService,
      r = e.totalAttempts,
      c = e.translate;
    return we(this, void 0, void 0, function () {
      var i,
        t = this;
      return Ae(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, Ee()];
          case 1:
            return (
              (i = e.sent())
                ? ge.AccountIntegrityChallengeService.TwoStepVerification.renderChallenge(
                    {
                      containerId: "two-sv-popup-entry",
                      userId: ge.CurrentUser.userId,
                      challengeId: i,
                      actionType: Re.ActionType.RobuxSpend,
                      renderInline: !1,
                      shouldShowRememberDeviceCheckbox: !1,
                      onChallengeCompleted: function (a) {
                        return we(t, void 0, void 0, function () {
                          var n;
                          return Ae(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return [4, Ie(i, a.verificationToken)];
                              case 1:
                                return (
                                  (n = e.sent()),
                                  o(),
                                  n
                                    ? ((r = (t = {
                                        systemFeedbackService: s,
                                        translate: c,
                                      }).systemFeedbackService),
                                      (t = t.translate),
                                      r.success(
                                        t("Response.SuccessfulVerificationV2"),
                                      ))
                                    : Te({
                                        systemFeedbackService: s,
                                        translate: c,
                                      }),
                                  [2]
                                );
                            }
                            var t, r;
                          });
                        });
                      },
                      onChallengeInvalidated: function () {
                        var e = r || 0;
                        e < 3
                          ? xe({
                              stopTwoStepVerification: o,
                              systemFeedbackService: s,
                              translate: c,
                              totalAttempts: e + 1,
                            })
                          : (Te({ systemFeedbackService: s, translate: c }),
                            o());
                      },
                      onModalChallengeAbandoned: function () {},
                    },
                  )
                : Te({ systemFeedbackService: s, translate: c }),
              [2]
            );
        }
      });
    });
  }
  var Me = (0, o.withTranslations)(function (e) {
    var t = this,
      r = e.translate,
      n = e.isTwoStepVerificationActive,
      a = e.stopTwoStepVerification,
      i = e.systemFeedbackService;
    return (
      (0, fe.useEffect)(
        function () {
          n &&
            we(t, void 0, void 0, function () {
              return Ae(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      le(void 0, void 0, Promise, function () {
                        var t;
                        return ue(this, function (e) {
                          switch (e.label) {
                            case 0:
                              (t = {
                                url: de(ge.CurrentUser.userId),
                                retryable: !0,
                                withCredentials: !0,
                              }),
                                (e.label = 1);
                            case 1:
                              return (
                                e.trys.push([1, 3, , 4]),
                                [4, ye.httpService.get(t)]
                              );
                            case 2:
                              return (
                                (t = e.sent()),
                                [
                                  2,
                                  (
                                    (null ===
                                      (t = null == t ? void 0 : t.data) ||
                                    void 0 === t
                                      ? void 0
                                      : t.methods) || []
                                  ).some(function (e) {
                                    return !!e.enabled;
                                  }),
                                ]
                              );
                            case 3:
                              return e.sent(), [2, !1];
                            case 4:
                              return [2];
                          }
                        });
                      }),
                    ];
                  case 1:
                    return (
                      e.sent()
                        ? xe({
                            stopTwoStepVerification: a,
                            systemFeedbackService: i,
                            translate: r,
                          })
                        : ((t = {
                            titleText: (t = (t = { translate: r }).translate)(
                              "Heading.TwoStepVerificationRequiredV3",
                            ),
                            bodyContent: t(
                              "Message.TwoStepVerificationRequiredV4",
                            ),
                            imageUrl: void 0,
                            acceptText: t("Action.GoToSecurity"),
                            acceptColor: "btn-primary-md",
                            onAccept: function () {
                              window.location.href =
                                ge.Endpoints.getAbsoluteUrl(
                                  "/my/account#!/security",
                                );
                            },
                            declineText: t("Action.Cancel"),
                            dismissable: !0,
                            allowHtmlContentInBody: !0,
                            onOpenCallback: function () {},
                          }),
                          ge.Dialog.open(t)),
                      [2]
                    );
                }
                var t;
              });
            });
        },
        [n],
      ),
      be().createElement("div", { id: "two-sv-popup-entry" })
    );
  }, s.purchasingResources);
  function Ne(t, e) {
    var r,
      n = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((r = Object.getOwnPropertySymbols(t)),
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        n.push.apply(n, r)),
      n
    );
  }
  function Fe(n) {
    for (var e = 1; e < arguments.length; e++) {
      var a = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Ne(Object(a), !0).forEach(function (e) {
            var t, r;
            (t = n),
              (e = a[(r = e)]),
              r in t
                ? Object.defineProperty(t, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[r] = e);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
          : Ne(Object(a)).forEach(function (e) {
              Object.defineProperty(
                n,
                e,
                Object.getOwnPropertyDescriptor(a, e),
              );
            });
    }
    return n;
  }
  function Ce(e, t, r, n, a, i, o) {
    try {
      var s = e[i](o),
        c = s.value;
    } catch (e) {
      return void r(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(n, a);
  }
  function De(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Ue(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return Ue(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function Ue(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var Oe = a.resources,
    Be = a.errorTypeIds,
    Le = a.errorStatusText,
    qe = a.events;
  function _e() {
    function $() {
      pe.itemDetail.buyButtonElementDataset &&
        (P.paymentFlowAnalyticsService.startRobuxUpsellFlow(
          pe.itemDetail.buyButtonElementDataset.assetType,
          !!pe.itemDetail.buyButtonElementDataset.userassetId,
          pe.itemDetail.buyButtonElementDataset.isPrivateServer,
          pe.itemDetail.buyButtonElementDataset.isPlace,
          pe.itemDetail.buyButtonElementDataset.productId,
        ),
        oe.open());
    }
    function Y() {
      var e, t, r;
      if (
        ge.ItemPurchaseUpsellService &&
        null !== (e = pe) &&
        void 0 !== e &&
        null !== (t = e.itemDetail) &&
        void 0 !== t &&
        t.expectedItemPrice
      )
        if (
          0 <=
          J -
            (null === pe ||
            void 0 === pe ||
            null === (r = pe.itemDetail) ||
            void 0 === r
              ? void 0
              : r.expectedItemPrice)
        )
          $();
        else
          try {
            ge.ItemPurchaseUpsellService.startItemUpsellProcess(
              pe.errorObject,
              pe.itemDetail,
              pe.startOriginalFlowCallback,
            ),
              window.EventTracker.fireEvent(
                qe.NEW_UPSELL_FROM_REACT_BUY_BUTTON,
              );
          } catch (e) {
            window.EventTracker.fireEvent(qe.NEW_UPSELL_FAILED_DUE_TO_ERROR),
              $();
          }
      else
        window.EventTracker.fireEvent(qe.NEW_UPSELL_FAILED_DUE_TO_LOADING), $();
    }
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
      Q = e.customPurchaseVerificationModal,
      K = e.customPurchaseVerificationModalService,
      J = he().userRobuxBalance,
      e = De((0, M.createSystemFeedback)(), 2),
      Z = e[0],
      ee = e[1],
      e = De((0, M.createSystemFeedback)(), 2),
      te = e[0],
      re = e[1],
      e = De(V(), 2),
      ne = e[0],
      ae = e[1],
      e = De(R(), 2),
      ie = e[0],
      oe = e[1],
      e = De(ve(), 2),
      se = e[0],
      ce = e[1],
      e = De(B(), 2),
      le = e[0],
      ue = e[1],
      e = De(u(), 2),
      de = e[0],
      me = e[1],
      pe = {
        errorObject: {},
        itemDetail: {},
        startOriginalFlowCallback: function () {
          return null;
        },
      };
    function t(e) {
      function c() {
        return k(!0);
      }
      var l = e.translate,
        i = e.assetName,
        o = e.assetType,
        s = e.assetTypeDisplayName,
        u = e.productId,
        d = e.expectedCurrency,
        t = e.expectedPrice,
        m = e.expectedSellerId,
        p = e.expectedPromoId,
        f = e.userAssetId,
        r = e.thumbnail,
        n = e.sellerName,
        b = e.sellerType,
        y = e.showSuccessBanner,
        g = e.isPlace,
        h = e.isPrivateServer,
        v = e.handlePurchase,
        S = e.onPurchaseSuccess,
        P = e.collectibleItemId,
        E = e.collectibleItemInstanceId,
        I = e.collectibleProductId,
        w = e.isLimited,
        a = e.customProps,
        A = e.saleLocationId,
        R = void 0 === A ? null : A,
        T = De((0, fe.useState)(!1), 2),
        x = T[0],
        M = T[1],
        N = De((0, fe.useState)(null), 2),
        F = N[0],
        C = N[1],
        D = De((0, fe.useState)(null), 2),
        U = D[0],
        O = D[1],
        e = De((0, fe.useState)(t - J), 2),
        A = e[0],
        B = e[1],
        T = De((0, fe.useState)(null), 2),
        N = T[0],
        L = T[1],
        D = De((0, fe.useState)(J), 2),
        e = D[0],
        q = D[1],
        T = De((0, fe.useState)(!1), 2),
        _ = T[0],
        k = T[1],
        D = De((0, fe.useState)(!1), 2),
        T = D[0],
        j = D[1];
      (0, fe.useEffect)(
        function () {
          ge.CurrentUser.isAuthenticated && void 0 === he().userRobuxBalance
            ? Pe(ge.CurrentUser.userId)
                .then(function (e) {
                  q(e.data.robux), B(t - e.data.robux);
                })
                .catch(function () {
                  q(void 0);
                })
            : (q(he().userRobuxBalance), B(t - he().userRobuxBalance));
        },
        [u, t, m],
      ),
        (0, fe.useEffect)(
          function () {
            _ && j(!0);
          },
          [_],
        );
      function H() {
        (K || ae).close(), ue.close();
      }
      function V(e, t) {
        var r,
          n,
          a = {
            assetType: o,
            assetTypeDisplayName: s,
            expectedCurrency: d,
            expectedPrice: t,
            expectedSellerId: m,
            itemName: i,
            itemType: o,
            productId: u,
            userassetId: f,
            placeproductpromotionId: p,
            isPrivateServer: h,
            isPlace: g,
            collectibleItemId: P,
            collectibleItemInstanceId: E,
            collectibleProductId: I,
          };
        pe = {
          errorObject: { shortfallPrice: e, currentCurrency: d, isPlace: g },
          itemDetail: {
            expectedItemPrice: t,
            assetName: i,
            isLimited: w,
            buyButtonElementDataset: a,
          },
          startOriginalFlowCallback:
            ((r = e),
            (n = a),
            function () {
              ge.ItemPurchaseUpsellService &&
              ge.ItemPurchaseUpsellService
                .showExceedLargestInsufficientRobuxModal
                ? ge.ItemPurchaseUpsellService.showExceedLargestInsufficientRobuxModal(
                    r,
                    n,
                    $,
                  )
                : $();
            }),
        };
      }
      function G(e) {
        var t = e.showDivId,
          r = e.title,
          n = e.errorMsg,
          a = e.price,
          i = e.shortfallPrice,
          e = e.onDecline;
        t === Be.transactionFailure
          ? (C({ title: r, message: n, onDecline: e }), me.open())
          : t === Be.insufficientFunds
            ? (B(i), V(i, a), Y())
            : t === Be.priceChanged && (O(a), ue.open());
      }
      function W(e) {
        L(e), ce.open();
      }
      function z(e) {
        var t;
        P
          ? X(e)
          : "Product" === o
            ? ((t = {
                expectedPrice: (t = e),
                saleLocationType: "Website",
                saleLocationId: R,
              }),
              M(!0),
              Se.purchaseDeveloperProduct(u, t)
                .then(function (e) {
                  e = e.data;
                  e.purchased || "TwoStepVerificationRequired" !== e.reason
                    ? e.purchased
                      ? (S(),
                        y
                          ? ee.success(l(Oe.purchaseCompleteHeading))
                          : W({
                              assetIsWearable: !1,
                              transactionVerb: "",
                              onDecline: function () {
                                window.location.reload();
                              },
                            }))
                      : G({
                          title: l(Oe.errorOccuredHeading),
                          errorMsg: l(Oe.generalPurchaseErrorMessage),
                          showDivId: Be.transactionFailure,
                        })
                    : c();
                })
                .catch(function (e) {
                  console.debug(e), M(!1), H();
                  var t =
                    null === (t = e.data) || void 0 === t
                      ? void 0
                      : t.errorCode;
                  e && 500 === e.status && t === Be.pendingProductsLimitExceeded
                    ? G({
                        title: l(Oe.pendingDeveloperProductLimitReachedHeading),
                        errorMsg: l(
                          Oe.pendingDeveloperProductLimitReachedMessage,
                        ),
                        showDivId: Be.transactionFailure,
                      })
                    : e && 400 !== (null == e ? void 0 : e.status)
                      ? 429 === e.status
                        ? G({
                            title: l(Oe.errorOccuredHeading),
                            errorMsg: l(Oe.floodcheckFailureMessage, {
                              throttleTime: 1,
                            }),
                            showDivId: Be.transactionFailure,
                          })
                        : G({
                            title: l(Oe.errorOccuredHeading),
                            errorMsg: l(Oe.generalPurchaseErrorMessage),
                            showDivId: Be.transactionFailure,
                          })
                      : G({
                          title: l(Oe.errorOccuredHeading),
                          errorMsg: l(Oe.purchasingUnavailableMessage),
                          showDivId: Be.transactionFailure,
                        });
                }))
            : ((e = {
                expectedCurrency: d,
                expectedPrice: (e = e),
                expectedSellerId: m,
              }),
              0 < p && (e.expectedPromoId = p),
              0 < f && (e.userAssetId = f),
              v
                ? v({
                    params: e,
                    handleError: G,
                    setLoading: M,
                    openConfirmation: W,
                    closeAll: H,
                  })
                : (M(!0),
                  Se.purchaseItem(u, e)
                    .then(function (e) {
                      var t = e.data;
                      console.debug(t);
                      var r = t.statusCode,
                        n = t.assetIsWearable,
                        e = t.transactionVerb;
                      M(!1),
                        H(),
                        t.purchased ||
                        "TwoStepVerificationRequired" !== t.reason
                          ? 500 === r
                            ? G(t)
                            : (S(),
                              y
                                ? ee.success(l(Oe.purchaseCompleteHeading))
                                : W({
                                    assetIsWearable: n,
                                    transactionVerb: e,
                                    onDecline: function () {
                                      window.location.reload();
                                    },
                                  }))
                          : c();
                    })
                    .catch(function (t) {
                      if (
                        (console.debug(t),
                        M(!1),
                        H(),
                        t &&
                          (null == t ? void 0 : t.statusText) !== Le.badRequest)
                      ) {
                        429 === t.status &&
                          G({
                            title: l(Oe.errorOccuredHeading),
                            errorMsg: l(Oe.floodcheckFailureMessage, {
                              throttleTime: 1,
                            }),
                            showDivId: Be.transactionFailure,
                          });
                        try {
                          G(JSON.parse(null == t ? void 0 : t.statusText));
                        } catch (e) {
                          G({ errorMsg: null == t ? void 0 : t.statusText });
                        }
                      } else
                        G({
                          title: l(Oe.errorOccuredHeading),
                          errorMsg: l(Oe.purchasingUnavailableMessage),
                          showDivId: Be.transactionFailure,
                        });
                    })));
      }
      var X = (function () {
          var s,
            e =
              ((s = regeneratorRuntime.mark(function e(r) {
                var n, a, i, o;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((n = {
                              collectibleItemId: P,
                              expectedCurrency: d,
                              expectedPrice: r,
                              expectedPurchaserId: ge.CurrentUser.userId,
                              expectedPurchaserType: "User",
                              expectedSellerId: m,
                              expectedSellerType: b,
                              idempotencyKey:
                                ye.uuidService.generateRandomUuid(),
                            }),
                            E && (n.collectibleItemInstanceId = E),
                            I && (n.collectibleProductId = I),
                            v)
                          )
                            return (
                              v({
                                params: n,
                                handleError: G,
                                setLoading: M,
                                openConfirmation: W,
                                closeAll: H,
                              }),
                              t.abrupt("return")
                            );
                          t.next = 6;
                          break;
                        case 6:
                          return (
                            M(!0),
                            (o = E
                              ? Se.purchaseCollectibleItemInstance
                              : Se.purchaseCollectibleItem),
                            (t.prev = 8),
                            (t.next = 11),
                            o(P, n)
                          );
                        case 11:
                          if (
                            ((o = t.sent),
                            (a = o.data),
                            (i = a.transactionVerb),
                            M(!1),
                            H(),
                            !(
                              ("number" ==
                                typeof (o =
                                  null !== (o = a.statusCode) && void 0 !== o
                                    ? o
                                    : a.status) &&
                                400 <= o) ||
                              !1 === (null == a ? void 0 : a.purchased)
                            ))
                          ) {
                            t.next = 21;
                            break;
                          }
                          !1 === (null == a ? void 0 : a.purchased) &&
                          "TwoStepVerificationRequired" ===
                            (null == a ? void 0 : a.reason)
                            ? c()
                            : !1 === (null == a ? void 0 : a.purchased) &&
                                "Flooded" ===
                                  (null == a ? void 0 : a.purchaseResult)
                              ? G({
                                  title: l(Oe.errorOccuredHeading),
                                  errorMsg: l(Oe.floodcheckFailureMessage, {
                                    throttleTime: 1,
                                  }),
                                  showDivId: Be.transactionFailure,
                                })
                              : "InsufficientBalance" === a.errorMessage
                                ? oe.open()
                                : G({
                                    title: l(Oe.errorOccuredHeading),
                                    errorMsg: l(
                                      Oe.purchasingUnavailableMessage,
                                    ),
                                    showDivId: Be.transactionFailure,
                                    onDecline: function () {
                                      window.location.reload();
                                    },
                                  }),
                            (t.next = 26);
                          break;
                        case 21:
                          if ((S(), y))
                            return (
                              ee.success(l(Oe.purchaseCompleteHeading)),
                              t.abrupt("return")
                            );
                          t.next = 25;
                          break;
                        case 25:
                          W({
                            assetIsWearable: !0,
                            transactionVerb: i,
                            itemDelayed: null == a ? void 0 : a.pending,
                            onDecline: function () {
                              window.location.reload();
                            },
                          });
                        case 26:
                          t.next = 37;
                          break;
                        case 28:
                          if (
                            ((t.prev = 28),
                            (t.t0 = t.catch(8)),
                            console.debug(t.t0),
                            ge.AccountIntegrityChallengeService.Generic.ChallengeError.matchAbandoned(
                              F,
                            ))
                          )
                            return M(!1), t.abrupt("return");
                          t.next = 34;
                          break;
                        case 34:
                          if (
                            (M(!1),
                            H(),
                            t.t0 &&
                              (null === t.t0 || void 0 === t.t0
                                ? void 0
                                : t.t0.statusText) !== Le.badRequest)
                          ) {
                            429 === t.t0.status &&
                              G({
                                title: l(Oe.errorOccuredHeading),
                                errorMsg: l(Oe.floodcheckFailureMessage, {
                                  throttleTime: 1,
                                }),
                                showDivId: Be.transactionFailure,
                              });
                            try {
                              G(
                                JSON.parse(
                                  null === t.t0 || void 0 === t.t0
                                    ? void 0
                                    : t.t0.statusText,
                                ),
                              );
                            } catch (e) {
                              G({
                                errorMsg:
                                  null === t.t0 || void 0 === t.t0
                                    ? void 0
                                    : t.t0.statusText,
                              });
                            }
                          } else
                            G({
                              title: l(Oe.errorOccuredHeading),
                              errorMsg: l(Oe.purchasingUnavailableMessage),
                              showDivId: Be.transactionFailure,
                            });
                        case 37:
                        case "end":
                          return t.stop();
                      }
                  },
                  e,
                  null,
                  [[8, 28]],
                );
              })),
              function () {
                var e = this,
                  o = arguments;
                return new Promise(function (t, r) {
                  var n = s.apply(e, o);
                  function a(e) {
                    Ce(n, t, r, a, i, "next", e);
                  }
                  function i(e) {
                    Ce(n, t, r, a, i, "throw", e);
                  }
                  a(void 0);
                });
              });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        a = Q
          ? be().createElement(
              Q,
              Fe(
                {},
                Fe(
                  {
                    assetName: i,
                    assetType: o,
                    expectedPrice: t,
                    thumbnail: r,
                    sellerName: n,
                    loading: x,
                    onAction: function () {
                      return z(t);
                    },
                  },
                  a,
                ),
              ),
            )
          : be().createElement(ne, {
              expectedPrice: t,
              thumbnail: r,
              assetName: i,
              assetType: o,
              assetTypeDisplayName: s,
              sellerName: n,
              isPlace: g,
              loading: x,
              collectibleItemId: P,
              collectibleItemInstanceId: E,
              currentRobuxBalance: e,
              onAction: function () {
                return z(t), !1;
              },
            });
      return (
        0 < A && ge.ItemPurchaseUpsellService && V(A, null != U ? U : t),
        be().createElement(
          be().Fragment,
          null,
          be().createElement(Me, {
            isTwoStepVerificationActive: _,
            stopTwoStepVerification: function () {
              return k(!1);
            },
            systemFeedbackService: re,
          }),
          be().createElement(ie, { robuxNeeded: A }),
          (!A || A <= 0) && a,
          F &&
            be().createElement(de, {
              title: F.title,
              message: F.message,
              onDecline: F.onDecline,
            }),
          null != U &&
            be().createElement(le, {
              expectedPrice: t,
              currentPrice: U,
              loading: x,
              onAction: function () {
                return z(U), !1;
              },
            }),
          N &&
            be().createElement(
              se,
              Fe(
                {
                  thumbnail: r,
                  assetName: i,
                  assetType: o,
                  assetTypeDisplayName: s,
                  sellerName: n,
                  isPlace: g,
                  isPrivateServer: h,
                  expectedPrice: U || t,
                  currentRobuxBalance: e,
                },
                N,
              ),
            ),
          y && be().createElement(Z, null),
          T && be().createElement(te, null),
        )
      );
    }
    return (
      (t.defaultProps = {
        isPlace: !1,
        isPrivateServer: !1,
        productId: null,
        assetTypeDisplayName: "",
        expectedPromoId: 0,
        userAssetId: 0,
        showSuccessBanner: !1,
        handlePurchase: null,
        onPurchaseSuccess: function () {
          return null;
        },
        customProps: {},
        collectibleItemId: null,
        collectibleItemInstanceId: null,
        collectibleProductId: null,
        sellerType: null,
        isLimited: !1,
        saleLocationId: null,
      }),
      (t.propTypes = {
        translate: r().func.isRequired,
        productId: function (e, t, r) {
          var n = e.collectibleItemId,
            a = e.productId;
          return n || "number" == typeof a
            ? null
            : new Error(
                "Invalid prop "
                  .concat(t, " supplied to ")
                  .concat(r, ". Validation failed."),
              );
        },
        expectedCurrency: r().number.isRequired,
        expectedPrice: r().number.isRequired,
        thumbnail: r().node.isRequired,
        assetName: r().string.isRequired,
        assetType: r().string.isRequired,
        assetTypeDisplayName: r().string,
        expectedSellerId: r().number.isRequired,
        sellerName: r().string.isRequired,
        sellerType: r().string,
        isPlace: r().bool,
        isPrivateServer: r().bool,
        expectedPromoId: r().number,
        userAssetId: r().number,
        showSuccessBanner: r().bool,
        handlePurchase: r().func,
        onPurchaseSuccess: r().func,
        customProps: r().func,
        collectibleItemId: r().string,
        collectibleItemInstanceId: r().string,
        collectibleProductId: r().string,
        isLimited: r().bool,
        saleLocationId: r().number,
      }),
      [
        (0, o.withTranslations)(t, s.purchasingResources),
        {
          start: function () {
            (K || ae).open(), Y();
          },
        },
      ]
    );
  }
  var ke = HeaderScripts;
  function je(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return He(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return He(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function He(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var Ve = a.errorMessages,
    Ge = function (e, t, r) {
      function n() {
        o({ loading: !1, loadFailure: !0 });
      }
      var a = je(
          (0, fe.useState)({
            expectedSellerId: 0,
            owned: !1,
            isPurchasable: !1,
            id: 0,
            itemType: "",
            assetType: "",
            name: "",
            description: "",
            productId: 0,
            creatorTargetId: 0,
            creatorName: "",
            price: null,
            loading: !0,
            loadFailure: !1,
            premiumPricing: null,
            premiumDiscountPercentage: null,
            hasLimitedPrivateSales: !1,
            isPublicDomain: !1,
            premiumPriceInRobux: null,
            assetTypeDisplayName: "",
            offSaleDeadline: null,
            unitsAvailableForConsumption: 0,
            isLimited: !1,
            resellerAvailable: !1,
            firstReseller: {},
            priceStatus: "",
            isMarketPlaceEnabled: !0,
          }),
          2,
        ),
        i = a[0],
        o = a[1],
        s = (0, fe.useCallback)(
          function () {
            e(t, r)
              .then(function (e) {
                var e = e.data,
                  t = {
                    expectedSellerId: e.expectedSellerId,
                    owned: e.owned,
                    id: e.id,
                    itemType: e.itemType,
                    assetType: e.assetType,
                    name: e.name,
                    description: e.description,
                    productId: e.productId,
                    price: e.price,
                    lowestPrice: e.lowestPrice,
                    creatorTargetId: e.creatorTargetId,
                    creatorName: e.creatorName,
                    hasLimitedPrivateSales: void 0 !== e.lowestPrice,
                    isPublicDomain: 0 === e.price,
                    offSaleDeadline: e.offSaleDeadline,
                    isLimited:
                      e.itemRestrictions.includes("Limited") ||
                      e.itemRestrictions.includes("LimitedUnique"),
                    unitsAvailableForConsumption:
                      void 0 !== e.unitsAvailableForConsumption
                        ? e.unitsAvailableForConsumption
                        : 0,
                    priceStatus: void 0 !== e.priceStatus ? e.priceStatus : "",
                    itemRestrictions: e.itemRestrictions,
                  };
                void 0 !== e.premiumPricing &&
                  ((t.premiumPriceInRobux =
                    e.premiumPricing.premiumPriceInRobux),
                  (t.premiumDiscountPercentage =
                    e.premiumPricing.premiumDiscountPercentage)),
                  t.isLimited &&
                    ((t.price =
                      void 0 !== t.lowestPrice ? t.lowestPrice : t.price),
                    se(t.id).then(function (e) {
                      (t.resellerAvailable = 0 < e.data.data.length),
                        t.resellerAvailable &&
                          ((e = je(e.data.data, 1)[0]),
                          (t.price = e.price),
                          (t.firstReseller = e));
                    })),
                  oe(e.productId)
                    .then(function (e) {
                      !e.data.purchasable &&
                      e.data.reason &&
                      e.data.reason !== Ve.insufficientFunds
                        ? (t.isPurchasable = e.data.purchasable)
                        : (t.isPurchasable = !0),
                        (t.assetTypeDisplayName = e.data.assetTypeDisplayName),
                        (t.loading = !1),
                        (t.loadFailure = !1),
                        ce()
                          .then(function (e) {
                            (t.isMarketPlaceEnabled =
                              e.data.isMarketPlaceEnabled &&
                              e.data.isItemsXchangeEnabled),
                              o(t);
                          })
                          .catch(function () {
                            n();
                          });
                    })
                    .catch(function (e) {
                      e.statusText === Ve.unauthorizedMessage
                        ? ((t.loading = !1), (t.loadFailure = !1), o(t))
                        : n();
                    });
              })
              .catch(function () {
                n();
              });
          },
          [t, r, e],
        );
      return (
        (0, fe.useEffect)(function () {
          s();
        }, []),
        { itemDetail: i, loadItemDetail: s }
      );
    },
    We = function () {
      var e = document.getElementById("item-container");
      return e
        ? {
            itemDetailItemId: parseInt(e.getAttribute("data-item-id"), 10),
            itemDetailItemType: e.getAttribute("data-item-type"),
          }
        : null;
    },
    ze = RobloxThumbnails;
  function Xe(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var $e = _e(),
    Ye = (Ft =
      ((Ft = 2),
      (function (e) {
        if (Array.isArray(e)) return e;
      })(($e = $e)) ||
        (function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var r = [],
            n = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(n = (o = s.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              n = !0
            );
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              n || null == s.return || s.return();
            } finally {
              if (a) throw i;
            }
          }
          return r;
        })($e, Ft) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return Xe(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return Xe(e, t);
        })($e, Ft) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()))[0],
    Qe = Ft[1],
    Ke = a.resources,
    Je = N.getPremiumConversionUrl;
  function Ze(e) {
    var t = e.translate,
      r = e.productId,
      n = e.price,
      a = e.itemName,
      i = e.itemType,
      o = e.assetTypeDisplayName,
      s = e.sellerName,
      c = e.expectedSellerId,
      l = e.isPurchasable,
      u = e.isOwned,
      d = e.isPlugin,
      m = e.itemDetailItemId,
      p = e.loading,
      f = e.userQualifiesForPremiumPrices,
      b = e.premiumPriceInRobux,
      y = e.isAuthenticated,
      g = e.resellerAvailable,
      h = e.firstReseller,
      g = e.isMarketPlaceEnabled && (g || l),
      l = function () {
        return t(0 === n ? Ke.getAction : Ke.buyAction);
      };
    if (p) return be().createElement(M.Loading, null);
    if (!y)
      return null != b
        ? be().createElement(
            M.Button,
            {
              id: "upgrade-button",
              className: "btn-fixed-width-lg btn-primary-lg",
              onClick: function () {
                P.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
                  P.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                    .WEB_PREMIUM_PURCHASE,
                  !1,
                  P.paymentFlowAnalyticsService.ENUM_VIEW_NAME.PREMIUM_UPSELL,
                  P.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE
                    .USER_INPUT,
                  P.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.GET_PREMIUM,
                ),
                  window.open(Je(m, i));
              },
            },
            t(Ke.getPremiumAction),
          )
        : be().createElement(
            M.Button,
            {
              className: "btn-fixed-width-lg btn-growth-lg PurchaseButton",
              onClick: function () {
                window.location = "/login";
              },
            },
            l(),
          );
    y = be().createElement(ze.Thumbnail2d, {
      type:
        "bundle" === i
          ? ze.ThumbnailTypes.bundleThumbnail
          : ze.ThumbnailTypes.assetThumbnail,
      size: ze.DefaultThumbnailSize,
      targetId: m,
      format: ze.ThumbnailFormat.webp,
      altName: a,
    });
    return d && (u || 0 === n)
      ? be().createElement(
          be().Fragment,
          null,
          be().createElement(
            M.Button,
            {
              className: "btn-fixed-width-lg btn-primary-lg InstallButton",
              onClick: function () {
                var e;
                (e = m), ge.GameLauncher.openPluginInStudio(e);
              },
            },
            be().createElement("span", null, t(Ke.installAction)),
          ),
        )
      : be().createElement(
          be().Fragment,
          null,
          be().createElement(
            M.Button,
            {
              className: "btn-fixed-width-lg btn-growth-lg PurchaseButton",
              onClick: Qe.start,
              isDisabled: !g,
            },
            l(),
          ),
          be().createElement(Ye, {
            productId: r,
            expectedPrice: f && null != b ? b : n,
            thumbnail: y,
            assetTypeDisplayName: o,
            assetName: a,
            sellerName: h ? h.seller.name : s,
            expectedSellerId: h ? h.seller.id : c,
            userAssetId: h ? h.userAssetId : 0,
            showSuccessBanner: !0,
          }),
        );
  }
  Ze.propTypes = {
    translate: r().func.isRequired,
    productId: r().number.isRequired,
    price: r().number.isRequired,
    itemName: r().string.isRequired,
    itemType: r().string.isRequired,
    assetTypeDisplayName: r().string.isRequired,
    sellerName: r().string.isRequired,
    expectedSellerId: r().number.isRequired,
    isPurchasable: r().bool.isRequired,
    isOwned: r().bool.isRequired,
    isPlugin: r().bool.isRequired,
    itemDetailItemId: r().number.isRequired,
    loading: r().bool.isRequired,
    userQualifiesForPremiumPrices: r().bool.isRequired,
    premiumPriceInRobux: r().number.isRequired,
    isAuthenticated: r().bool.isRequired,
    resellerAvailable: r().bool.isRequired,
    firstReseller: r().shape({
      seller: { name: r().string.isRequired, id: r().number.isRequired },
      userAssetId: r().number.isRequired,
    }).isRequired,
    isMarketPlaceEnabled: r().bool.isRequired,
  };
  var et = (0, o.withTranslations)(Ze, s.itemResources),
    tt = a.resources;
  function rt(e) {
    var t = e.translate,
      r = e.isLimited,
      e = e.resellerAvailable,
      e = r && e;
    return be().createElement(
      "div",
      { className: "text-label field-label price-label" },
      be().createElement(
        "span",
        null,
        t(e ? tt.bestPriceLabel : tt.priceLabel),
      ),
    );
  }
  rt.propTypes = {
    translate: r().func.isRequired,
    isLimited: r().bool.isRequired,
    resellerAvailable: r().bool.isRequired,
  };
  var nt = (0, o.withTranslations)(rt, s.itemResources),
    at = a.resources,
    it = a.errorMessages,
    ot = N.getPremiumConversionUrl;
  function st(e) {
    function t(e) {
      P.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
        P.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
          .WEB_PREMIUM_PURCHASE,
        !1,
        P.paymentFlowAnalyticsService.ENUM_VIEW_NAME.PREMIUM_UPSELL,
        P.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT,
        e.target.innerText,
      );
    }
    var r = e.translate,
      n = e.price,
      a = e.itemType,
      i = e.itemDetailItemId,
      o = e.premiumPriceInRobux,
      s = e.premiumDiscountPercentage,
      c = e.userQualifiesForPremiumPrices,
      l = e.isOwned,
      u = e.loading,
      d = e.loadFailure,
      m = e.unitsAvailableForConsumption,
      p = e.isLimited,
      f = e.isPlugin,
      b = e.resellerAvailable,
      y = e.priceStatus,
      g = e.offSaleDeadline,
      h = e.isMarketPlaceEnabled,
      v = null == o && null == n,
      S = !0,
      e = "";
    return u
      ? be().createElement(M.Loading, null)
      : (!u && d
          ? (e = it.retryErrorMessage)
          : y === at.offSale && null === g
            ? (e = r(at.itemNoLongerForSaleLabel))
            : h || l
              ? f || !l || p
                ? p && 0 === m && !b
                  ? (e = r(at.noOneCurrentlySellingLabel))
                  : (S = !1)
                : (e = r(at.itemAvailableInventoryLabel))
              : (e = r(at.purchasingTemporarilyUnavailableLabel)),
        0 === n
          ? null
          : S && !l
            ? be().createElement(
                "div",
                { className: "price-container-text" },
                be().createElement(
                  "div",
                  { className: "item-first-line" },
                  " ",
                  e,
                  " ",
                ),
              )
            : be().createElement(
                be().Fragment,
                null,
                be().createElement(
                  "div",
                  { className: "price-container-text" },
                  S
                    ? be().createElement(
                        "div",
                        { className: "item-first-line" },
                        " ",
                        e,
                        " ",
                      )
                    : null,
                  be().createElement(nt, {
                    translate: r,
                    isLimited: p,
                    resellerAvailable: b,
                  }),
                  be().createElement(
                    "div",
                    { className: "price-info" },
                    be().createElement(
                      "div",
                      {
                        className:
                          "icon-text-wrapper clearfix icon-robux-price-container",
                      },
                      v
                        ? be().createElement("span", {
                            className:
                              "icon-robux-16x16 icon-robux-gray-16x16 wait-for-i18n-format-render",
                          })
                        : be().createElement("span", {
                            className:
                              "icon-robux-16x16 wait-for-i18n-format-render",
                          }),
                      be().createElement(
                        "span",
                        {
                          className:
                            "text-robux-lg wait-for-i18n-format-render",
                        },
                        c && null != o
                          ? ye.numberFormat.getNumberFormat(o)
                          : ye.numberFormat.getNumberFormat(n),
                      ),
                    ),
                  ),
                  (function () {
                    if (null == o || l) return null;
                    if (null == n)
                      return c
                        ? be().createElement(
                            "span",
                            {
                              className:
                                "small text field-content empty-label wait-for-i18n-format-render",
                            },
                            r(at.premiumExclusiveEligiblePromptLabel),
                          )
                        : be().createElement(
                            "span",
                            {
                              className:
                                "small text field-content empty-label wait-for-i18n-format-render",
                            },
                            r(at.premiumExclusiveIneligiblePromptLabel),
                          );
                    var e = {
                      originalPrice: (0, w.renderToString)(
                        be().createElement(A, { price: n }),
                      ),
                      discountPercentage: s,
                      premiumDiscountedPrice: (0, w.renderToString)(
                        be().createElement(A, { price: o }),
                      ),
                    };
                    return be().createElement(
                      be().Fragment,
                      null,
                      be().createElement(
                        "div",
                        { className: "text-label field-label empty-label" },
                        " ",
                      ),
                      be().createElement(
                        "span",
                        {
                          className:
                            "premium-prompt small text field-content empty-label wait-for-i18n-format-render",
                        },
                        c
                          ? be().createElement("a", {
                              "aria-label": " ",
                              href: ot(i, a),
                              dangerouslySetInnerHTML: {
                                __html: r(at.premiumDiscountSavingsLabel, e),
                              },
                              onClick: function (e) {
                                t(e), window.open(ot(i, a));
                              },
                            })
                          : be().createElement("a", {
                              "aria-label": " ",
                              href: ot(i, a),
                              dangerouslySetInnerHTML: {
                                __html: r(
                                  at.premiumDiscountOpportunityPromptLabel,
                                  e,
                                ),
                              },
                              onClick: function (e) {
                                t(e), window.open(ot(i, a));
                              },
                            }),
                      ),
                    );
                  })(),
                ),
              ));
  }
  st.propTypes = {
    translate: r().func.isRequired,
    price: r().number.isRequired,
    itemType: r().string.isRequired,
    itemDetailItemId: r().number.isRequired,
    premiumPriceInRobux: r().number.isRequired,
    premiumDiscountPercentage: r().number.isRequired,
    userQualifiesForPremiumPrices: r().bool.isRequired,
    loading: r().bool.isRequired,
    isOwned: r().bool.isRequired,
    loadFailure: r().bool.isRequired,
    unitsAvailableForConsumption: r().number.isRequired,
    isLimited: r().bool.isRequired,
    isPlugin: r().bool.isRequired,
    resellerAvailable: r().bool.isRequired,
    priceStatus: r().string.isRequired,
    offSaleDeadline: r().string.isRequired,
    isMarketPlaceEnabled: r().bool.isRequired,
  };
  var ct = (0, o.withTranslations)(st, s.itemModelResources);
  function lt(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return ut(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return ut(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function ut(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var dt = a.resources;
  function mt(e) {
    var t = e.translate,
      r = e.offSaleDeadline,
      e = lt((0, fe.useState)(0), 2),
      n = e[0],
      a = e[1],
      e = lt((0, fe.useState)(0), 2),
      i = e[0],
      o = e[1],
      e = lt((0, fe.useState)(0), 2),
      s = e[0],
      c = e[1],
      e = lt((0, fe.useState)(0), 2),
      l = e[0],
      u = e[1];
    (0, fe.useEffect)(
      function () {
        function e() {
          var e;
          new Date() < new Date(r) &&
            ((e = +new Date()),
            (e = (new Date(r).getTime() - e) / 1e3),
            a(Math.floor(e / 86400)),
            o(Math.floor((e / 3600) % 24)),
            c(Math.floor((e / 60) % 60)),
            u(Math.floor(e % 60)));
        }
        var t;
        return (
          e(),
          (t = setInterval(e, 1e3)),
          function () {
            return clearInterval(t);
          }
        );
      },
      [a, o, c, u],
    );
    return be().createElement(
      "div",
      {
        id: "sale-clock",
        className: "text-error sale-clock desktop-sale-clock",
      },
      (function () {
        if (n < 1) {
          var e = { numberOfHours: i, numberOfMinutes: s, numberOfSeconds: l };
          return be().createElement("div", {
            className: "text",
            dangerouslySetInnerHTML: {
              __html: t(dt.OffsaleCountdownHourMinuteSecondLabel, e),
            },
          });
        }
        if (l < 1) return window.location.reload(), null;
        e = { numberOfDays: n, numberOfHours: i, numberOfMinutes: s };
        return be().createElement("div", {
          className: "text",
          dangerouslySetInnerHTML: {
            __html: t(dt.CountdownTimerDayHourMinute, e),
          },
        });
      })(),
    );
  }
  mt.propTypes = {
    translate: r().func.isRequired,
    offSaleDeadline: r().string.isRequired,
  };
  var pt = (0, o.withTranslations)(mt, s.itemResources),
    ft = a.resources,
    bt = a.assetTypes,
    yt = a.assetCategory,
    gt = N.getInventoryUrl;
  function ht(e) {
    var t = e.translate,
      r = e.assetType,
      n = ke.deviceMeta.getDeviceMeta(),
      a = "phone" === n.deviceType,
      e = gt(ke.authenticatedUser.id),
      i =
        r === bt.Plugin ||
        r === bt.Decal ||
        r === bt.Model ||
        r === bt.Video ||
        r === bt.Animation
          ? yt.Library
          : r === bt.Place ||
              r === bt.Badge ||
              r === bt.GamePass ||
              r === bt.Animation
            ? null
            : yt.Catalog;
    return i !== yt.Catalog ||
      n.isInApp ||
      (!ke.deviceMeta.isAndroidApp && !ke.deviceMeta.isIosApp) ||
      (!ke.deviceMeta.isPhone && !ke.deviceMeta.isTablet)
      ? i !== yt.Catalog || a
        ? be().createElement(
            "a",
            {
              id: "inventory-button",
              href: e,
              className: "btn-fixed-width-lg btn-control-md",
            },
            t(ft.inventoryAction),
          )
        : be().createElement(
            "a",
            {
              id: "edit-avatar-button",
              href: "/my/avatar",
              className: "btn-control-md",
            },
            be().createElement("span", {
              className: "icon-nav-charactercustomizer",
            }),
          )
      : be().createElement(
          "a",
          {
            id: "open-in-avatar-editor-button",
            href: "/#",
            className: "btn-fixed-width-lg btn-control-md",
          },
          be().createElement("span", {
            className: "icon-nav-charactercustomizer",
          }),
        );
  }
  ht.propTypes = {
    translate: r().func.isRequired,
    assetType: r().number.isRequired,
  };
  var vt = (0, o.withTranslations)(ht, s.itemResources),
    St = We,
    Pt = a.assetTypes;
  function Et(e) {
    var t = e.translate,
      e = St(),
      r = e.itemDetailItemId,
      e = e.itemDetailItemType,
      n = Ge(ie, r, e).itemDetail;
    return be().createElement(
      be().Fragment,
      null,
      be().createElement(ct, {
        translate: t,
        price: n.price,
        itemType: n.itemType,
        itemDetailItemId: r,
        premiumPriceInRobux: n.premiumPriceInRobux,
        premiumDiscountPercentage: n.premiumDiscountPercentage,
        userQualifiesForPremiumPrices: ke.authenticatedUser.isPremiumUser,
        isOwned: n.owned,
        loading: n.loading,
        loadFailure: n.loadFailure,
        unitsAvailableForConsumption: n.unitsAvailableForConsumption,
        isLimited: n.isLimited,
        isPlugin: n.assetType === Pt.Plugin,
        resellerAvailable: n.resellerAvailable,
        priceStatus: n.priceStatus,
        offSaleDeadline: n.offSaleDeadline,
        isMarketPlaceEnabled: n.isMarketPlaceEnabled,
      }),
      !n.loadFailure &&
        (n.owned && (!n.isLimited || 0 < n.unitsAvailableForConsumption)
          ? be().createElement(
              "div",
              { className: "action-button" },
              be().createElement(vt, { translate: t, assetType: n.assetType }),
            )
          : be().createElement(
              "div",
              { className: "action-button" },
              be().createElement(et, {
                translate: t,
                productId: n.productId,
                price: n.price,
                itemType: n.itemType,
                assetTypeDisplayName: n.assetTypeDisplayName,
                itemName: n.name,
                sellerName: n.creatorName,
                expectedSellerId: n.expectedSellerId,
                isPurchasable: n.isPurchasable,
                isOwned: n.owned,
                isInstallable: n.assetType === Pt.Plugin,
                itemDetailItemId: r,
                loading: n.loading,
                hasLimitedPrivateSales: n.hasLimitedPrivateSales,
                userQualifiesForPremiumPrices:
                  ke.authenticatedUser.isPremiumUser,
                premiumPriceInRobux: n.premiumPriceInRobux,
                isAuthenticated: ke.authenticatedUser.isAuthenticated,
                unitsAvailableForConsumption: n.unitsAvailableForConsumption,
                isLimited: n.isLimited,
                resellerAvailable: n.resellerAvailable,
                firstReseller: n.firstReseller,
                isMarketPlaceEnabled: n.isMarketPlaceEnabled,
              }),
              null !== n.offSaleDeadline &&
                be().createElement(pt, {
                  translate: t,
                  offSaleDeadline: n.offSaleDeadline,
                }),
            )),
    );
  }
  Et.propTypes = { translate: r().func.isRequired };
  var It = Et;
  function wt(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return At(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return At(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function At(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function Rt(t, e) {
    var r,
      n = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((r = Object.getOwnPropertySymbols(t)),
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        n.push.apply(n, r)),
      n
    );
  }
  function Tt(n) {
    for (var e = 1; e < arguments.length; e++) {
      var a = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Rt(Object(a), !0).forEach(function (e) {
            var t, r;
            (t = n),
              (e = a[(r = e)]),
              r in t
                ? Object.defineProperty(t, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[r] = e);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
          : Rt(Object(a)).forEach(function (e) {
              Object.defineProperty(
                n,
                e,
                Object.getOwnPropertyDescriptor(a, e),
              );
            });
    }
    return n;
  }
  var xt,
    e = function (e, t) {
      e = Tt(
        Tt({}, e),
        {},
        {
          expectedSellerId: t.expectedSellerId,
          owned: t.owned,
          id: t.id,
          itemType: t.itemType,
          assetType: t.assetType,
          name: t.name,
          description: t.description,
          productId: t.productId,
          price: t.price,
          lowestPrice: t.lowestPrice,
          creatorTargetId: t.creatorTargetId,
          creatorName: t.creatorName,
          hasLimitedPrivateSales: void 0 !== t.lowestPrice,
          isPublicDomain: 0 === t.price,
          offSaleDeadline: t.offSaleDeadline,
          isLimited:
            t.itemRestrictions.includes("Limited") ||
            t.itemRestrictions.includes("LimitedUnique"),
          collectibleItemId: t.collectibleItemId,
          collectibleItemDetails: t.collectibleItemDetails,
          unitsAvailableForConsumption:
            void 0 !== t.unitsAvailableForConsumption
              ? t.unitsAvailableForConsumption
              : 0,
          priceStatus:
            null !== (e = t.priceStatus) && void 0 !== e ? e : t.priceStatus,
          itemRestrictions: t.itemRestrictions,
        },
      );
      return (
        void 0 !== t.premiumPricing &&
          ((e.premiumPriceInRobux = t.premiumPricing.premiumPriceInRobux),
          (e.premiumDiscountPercentage =
            t.premiumPricing.premiumDiscountPercentage)),
        e.isLimited &&
          (e.price = void 0 !== e.lowestPrice ? e.lowestPrice : e.price),
        void 0 !== e.collectibleItemId &&
          ((e.resellerAvailable = t.hasResellers),
          (e.isPurchasable = void 0 !== t.lowestPrice),
          (e.isMarketPlaceEnabled =
            "ShopAndAllExperiences" === t.saleLocationType ||
            "ShopOnly" === t.saleLocationType)),
        e
      );
    },
    Mt = function (e, t) {
      e = Tt({}, e);
      return (
        (e.resellerAvailable = 0 < t.data.data.length),
        e.resellerAvailable &&
          ((t = wt(t.data.data, 1)[0]),
          (e.price = t.price),
          (e.firstReseller = t)),
        e
      );
    },
    Nt = function (e, t, r) {
      var n = a.errorMessages,
        e = Tt({}, e);
      return (
        !t.purchasable &&
        t.reason &&
        t.reason !== n.insufficientFunds &&
        t.reason !== n.twoStepVerificationRequired
          ? (e.isPurchasable = t.purchasable)
          : (!t.purchasable &&
              t.reason &&
              t.reason === n.twoStepVerificationRequired &&
              (e.twoStepVerificationRequired = !0),
            (e.isPurchasable = !0)),
        (e.assetTypeDisplayName = t.assetTypeDisplayName),
        (e.loading = !1),
        (e.loadFailure = !1),
        (e.isMarketPlaceEnabled =
          r.data.isMarketPlaceEnabled && r.data.isItemsXchangeEnabled),
        e
      );
    },
    Ft = function (e) {
      e = Tt({}, e);
      return (e.isPurchasable = !1), e;
    };
  ((We = xt = xt || {}).Asset = "asset"), (We.Bundle = "bundle");
  var Ct = xt;
  function Dt(e, t, r, n, a, i, o) {
    try {
      var s = e[i](o),
        c = s.value;
    } catch (e) {
      return void r(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(n, a);
  }
  function Ut(s) {
    return function () {
      var e = this,
        o = arguments;
      return new Promise(function (t, r) {
        var n = s.apply(e, o);
        function a(e) {
          Dt(n, t, r, a, i, "next", e);
        }
        function i(e) {
          Dt(n, t, r, a, i, "throw", e);
        }
        a(void 0);
      });
    };
  }
  function Ot(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Bt(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return Bt(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function Bt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var Lt = a.maxBatchLoadRetries,
    qt = e,
    _t = Mt,
    kt = Nt,
    jt = Ft,
    Ht = function (i) {
      var a = (r = Ot((0, fe.useState)(), 2))[0],
        t = r[1],
        e = Ot((0, fe.useState)([]), 2),
        r = e[0],
        o = e[1],
        s = (e = Ot((0, fe.useState)({}), 2))[0],
        c = e[1],
        n = 0,
        l = function () {
          n < Lt ? (b(), (n += 1)) : o([{ loading: !1, loadFailure: !0 }]);
        },
        u = (0, fe.useCallback)(function () {
          ke.authenticatedUser.isAuthenticated
            ? ce()
                .then(function (e) {
                  t(e);
                })
                .catch(function () {
                  l();
                })
            : t({
                data: { isMarketplaceEnabled: !1, isItemsXchangeEnabled: !1 },
              });
        }, []);
      function d(e) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = Ut(
          regeneratorRuntime.mark(function e(t) {
            var r, n;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t.inCache)
                        return e.abrupt(
                          "return",
                          s[t.itemType.toLowerCase()][t.id],
                        );
                      e.next = 2;
                      break;
                    case 2:
                      if ((r = qt({}, t)).isLimited)
                        return (e.prev = 4), (e.next = 7), se(r.id);
                      e.next = 14;
                      break;
                    case 7:
                      (n = e.sent), (r = _t(r, n)), (e.next = 14);
                      break;
                    case 11:
                      (e.prev = 11),
                        (e.t0 = e.catch(4)),
                        (r.resellerAvailable = !1);
                    case 14:
                      if (void 0 === t.productId) {
                        e.next = 24;
                        break;
                      }
                      if (!ke.authenticatedUser.isAuthenticated) {
                        e.next = 23;
                        break;
                      }
                      if (void 0 === r.collectibleItemId)
                        return (e.next = 19), oe(t.productId);
                      e.next = 21;
                      break;
                    case 19:
                      (n = e.sent), (r = kt(r, n.data, a));
                    case 21:
                      e.next = 24;
                      break;
                    case 23:
                      r = jt(r);
                    case 24:
                      return e.abrupt("return", r);
                    case 25:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 11]],
            );
          }),
        )).apply(this, arguments);
      }
      function p() {
        return (p = Ut(
          regeneratorRuntime.mark(function e(t) {
            var r, n;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Promise.all(
                          t.map(function (e) {
                            return d(e);
                          }),
                        )
                      );
                    case 3:
                      (r = e.sent),
                        o(r),
                        (n = s),
                        r.forEach(function (e) {
                          e.isLimited ||
                            s[e.itemType.toLowerCase()][e.id] ||
                            (n[e.itemType.toLowerCase()][e.id] = e);
                        }),
                        c(n),
                        (e.next = 13);
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), l();
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]],
            );
          }),
        )).apply(this, arguments);
      }
      function f() {
        return (f = Ut(
          regeneratorRuntime.mark(function e() {
            var t, r, n, a;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((t = []),
                      i.forEach(function (e) {
                        void 0 === s[e.itemType.toLowerCase()][e.id] &&
                          t.push(e);
                      }),
                      0 < t.length)
                    )
                      return (
                        (n = []),
                        t.map(function (e) {
                          return n.push({ itemType: e.itemType, id: e.id });
                        }),
                        (e.next = 7),
                        ge.ItemDetailsHydrationService.getItemDetails(n, !1, !0)
                      );
                    e.next = 8;
                    break;
                  case 7:
                    r = e.sent;
                  case 8:
                    return (
                      (a = []),
                      i.forEach(function (t) {
                        var e;
                        void 0 === s[t.itemType.toLowerCase()][t.id]
                          ? (e = r.find(function (e) {
                              return (
                                e.id === t.id &&
                                e.itemType.toLowerCase() ===
                                  t.itemType.toLowerCase()
                              );
                            })) && a.push(e)
                          : a.push({
                              id: t.id,
                              itemType: t.itemType,
                              inCache: !0,
                            });
                      }),
                      e.abrupt("return", a)
                    );
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var b = (0, fe.useCallback)(
        function () {
          (function () {
            return f.apply(this, arguments);
          })()
            .then(function (e) {
              try {
                !(function () {
                  p.apply(this, arguments);
                })(e);
              } catch (e) {
                l();
              }
            })
            .catch(function () {
              l();
            });
        },
        [a, i, d],
      );
      return (
        (0, fe.useEffect)(function () {
          var e = {};
          (e[Ct.Asset] = {}), (e[Ct.Bundle] = {}), c(e), u();
        }, []),
        (0, fe.useEffect)(
          function () {
            void 0 !== a && b();
          },
          [a, i],
        ),
        { itemDetails: r, batchLoadItemDetails: b }
      );
    };
  ((Ft = dr = dr || {}).Success = "Success"),
    (Ft.AlreadyOwned = "ALREADY_OWNED"),
    (Ft.InsufficientFunds = "INSUFFICIENT_ROBUX"),
    (Ft.ExceptionOccured = "INTERNAL"),
    (Ft.TooManyPurchases = "QUOTA_EXCEEDED"),
    (Ft.CaughtError = "CaughtError"),
    (Ft.PremiumNeeded = "INSUFFICIENT_MEMBERSHIP"),
    (Ft.NoSellers = "NOT_FOR_SALE"),
    (Ft.TwoStepVerificationRequired = "TwoStepVerificationRequired"),
    (Ft.InExperienceOnly = "PURCHASE_PLACE_INVALID");
  var Vt = dr;
  function Gt(e, t, r, n, a, i, o) {
    try {
      var s = e[i](o),
        c = s.value;
    } catch (e) {
      return void r(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(n, a);
  }
  function Wt(s) {
    return function () {
      var e = this,
        o = arguments;
      return new Promise(function (t, r) {
        var n = s.apply(e, o);
        function a(e) {
          Gt(n, t, r, a, i, "next", e);
        }
        function i(e) {
          Gt(n, t, r, a, i, "throw", e);
        }
        a(void 0);
      });
    };
  }
  function zt(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Xt(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return Xt(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function Xt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var $t = a.resources,
    Yt = a.batchBuyMaxThumbnails,
    Qt = a.purchaseMetadataKeys,
    Kt = a.floodcheckTime;
  function Jt(e) {
    var t = e.itemsCount,
      r = e.item,
      n = e.index,
      a = r.name,
      e = t - Yt,
      n = Yt < t && n === Yt - 1;
    return be().createElement(
      "div",
      { className: "modal-multi-item-image-container" },
      be().createElement(ze.Thumbnail2d, {
        type:
          r.itemType.toLowerCase() === Ct.Bundle
            ? ze.ThumbnailTypes.bundleThumbnail
            : ze.ThumbnailTypes.assetThumbnail,
        size: ze.DefaultThumbnailSize,
        targetId: r.id,
        containerClass: "batch-buy-thumbnail",
        format: ze.ThumbnailFormat.webp,
        altName: a,
      }),
      n &&
        be().createElement(
          "div",
          { className: "thumb-overlay" },
          be().createElement("div", { className: "font-header-1" }, "＋", e),
        ),
    );
  }
  function Zt() {
    return (Zt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n = arguments[t];
          for (r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
  }
  function er(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return tr(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return tr(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function tr(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var rr = a.resources,
    nr = N.getVngBuyRobuxBehaviorUrl,
    ar = function () {
      var e = { url: nr(), retryable: !0, withCredentials: !0 };
      return ye.httpService.get(e);
    };
  function ir(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return or(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return or(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function or(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var sr,
    cr = a.resources,
    lr = (Ft = ir(R(), 2))[0],
    ur = Ft[1],
    dr = ir(
      ((sr = (Nt = zt((0, M.createModal)(), 2))[0]),
      (Nt = Nt[1]),
      (fr.defaultProps = { title: "", loading: !1 }),
      (fr.propTypes = {
        translate: r().func.isRequired,
        title: r().string,
        expectedTotalPrice: r().number.isRequired,
        currentRobuxBalance: r().number.isRequired,
        purchaseMetadata: r().instanceOf(Map).isRequired,
        itemDetails: r().arrayOf(
          r().shape({
            productId: r().number.isRequired,
            price: r().number.isRequired,
            itemName: r().string.isRequired,
            itemType: r().string.isRequired,
            assetTypeDisplayName: r().string.isRequired,
            sellerName: r().string.isRequired,
            expectedSellerId: r().number.isRequired,
            isPurchasable: r().bool.isRequired,
            isOwned: r().bool.isRequired,
            isPlugin: r().bool.isRequired,
            itemDetailItemId: r().number.isRequired,
            loading: r().bool.isRequired,
            userQualifiesForPremiumPrices: r().bool.isRequired,
            premiumPriceInRobux: r().number.isRequired,
            isAuthenticated: r().bool.isRequired,
            resellerAvailable: r().bool.isRequired,
            firstReseller: r().shape({
              seller: {
                name: r().string.isRequired,
                id: r().number.isRequired,
              },
              userAssetId: r().number.isRequired,
            }).isRequired,
            isMarketPlaceEnabled: r().bool.isRequired,
          }),
        ).isRequired,
        onCancel: r().func.isRequired,
        onTransactionComplete: r().func.isRequired,
        onAction: r().func.isRequired,
        loading: r().bool,
        productSurface: r().string.isRequired,
        systemFeedbackService: r().func.isRequired,
      }),
      [(0, o.withTranslations)(fr, s.purchasingResources), Nt]),
      2,
    ),
    mr = dr[0],
    pr = dr[1];
  function fr(e) {
    var t,
      r = e.translate,
      n = e.title,
      a = e.expectedTotalPrice,
      l = e.itemDetails,
      i = e.currentRobuxBalance,
      u = e.purchaseMetadata,
      o = e.onCancel,
      d = e.onTransactionComplete,
      s = e.onAction,
      c = e.loading,
      m = e.productSurface,
      p = e.systemFeedbackService,
      f = zt((0, fe.useState)(!1), 2),
      b = f[0],
      y = f[1],
      g = function () {
        p.loading(r("Message.TwoStepVerificationBatchPurchase")), y(!0);
      },
      h = zt((0, fe.useState)(!1), 2),
      v = h[0],
      S = h[1],
      P = {
        itemCount: l.length,
        robux: (0, w.renderToString)(
          be().createElement(
            "span",
            { className: "robux-price" },
            be().createElement(A, { price: a }),
          ),
        ),
      },
      e = $t.batchBuyPromptMessage,
      f =
        0 === a
          ? ((t = r($t.getItemHeading)), r($t.getNowAction))
          : ((t = r($t.buyItemHeading)), r($t.buyNowAction)),
      h = null == l ? void 0 : l.slice(0, Yt);
    function E(e) {
      var t = (function (e, t) {
          var r = 0,
            n = [];
          if (!e)
            return { success: !1, message: $t.purchaseErrorFailureMessage };
          if (200 === e.status) {
            if (
              (e.data.fulfillmentGroups[0].lineItems.forEach(function (t) {
                var e;
                "SUCCEEDED" === t.status
                  ? (r += 1)
                  : (e = n.find(function (e) {
                        return e.error === t.errorReason;
                      }))
                    ? (e.count += 1)
                    : n.push({ error: t.errorReason, count: 1 });
              }),
              r === e.data.fulfillmentGroups[0].lineItems.length)
            )
              return { success: !0, message: $t.purchaseCompleteHeading };
            var a = { error: "", count: 0 };
            if (
              (n.forEach(function (e) {
                e.count > a.count && (a = e);
              }),
              0 < r)
            )
              switch (a.error) {
                case Vt.AlreadyOwned:
                  return {
                    success: !1,
                    message: $t.batchBuyPartialSuccessItemsOwnedFailureMessage,
                    params: { itemCountSuccess: r, itemCountFailure: a.count },
                  };
                case Vt.InsufficientFunds:
                  return {
                    success: !1,
                    message:
                      $t.batchBuyPartialSuccessInsufficientFundsFailureMessage,
                    params: { itemCountSuccess: r, itemCountFailure: a.count },
                  };
                case Vt.ExceptionOccured:
                  return {
                    success: !1,
                    message:
                      $t.batchBuyPartialSuccessNetworkErrorFailureMessage,
                    params: { itemCountSuccess: r, itemCountFailure: a.count },
                  };
                case Vt.TooManyPurchases:
                  return {
                    success: !1,
                    message: $t.batchBuyPartialSuccessFloodcheckFailureMessage,
                    params: { itemCountSuccess: r, itemCountFailure: a.count },
                  };
                case Vt.PremiumNeeded:
                  return {
                    success: !1,
                    message:
                      $t.batchBuyPartialSuccessPremiumNeededFailureMessage,
                    params: { itemCountSuccess: r, itemCountFailure: a.count },
                  };
                case Vt.NoSellers:
                  return {
                    success: !1,
                    message: $t.batchBuyPartialSuccessNoSellersFailureMessage,
                    params: { itemCountSuccess: r, itemCountFailure: a.count },
                  };
                case Vt.InExperienceOnly:
                  return {
                    success: !1,
                    message:
                      $t.batchBuyPartialSuccessInExperienceOnlyFailureMessage,
                    params: { itemCountSuccess: r, itemCountFailure: a.count },
                  };
                default:
                  return {
                    success: !1,
                    message: $t.batchBuyPartialSuccessGeneralFailureMessage,
                    params: { itemCountSuccess: r, itemCountFailure: a.count },
                  };
              }
            else
              switch (a.error) {
                case Vt.AlreadyOwned:
                  return {
                    success: !1,
                    message: $t.batchBuyItemsOwnedFailureMessage,
                  };
                case Vt.InsufficientFunds:
                  return {
                    success: !1,
                    message: $t.insufficientFundsFailureMessage,
                  };
                case Vt.ExceptionOccured:
                  return {
                    success: !1,
                    message: $t.networkErrroFailureMessage,
                  };
                case Vt.TooManyPurchases:
                  return {
                    success: !1,
                    message: $t.floodcheckFailureMessage,
                    params: { throttleTime: Kt },
                  };
                case Vt.PremiumNeeded:
                  return {
                    success: !1,
                    message: $t.premiumNeededFailureMessage,
                  };
                case Vt.NoSellers:
                  return { success: !1, message: $t.noSellersFailureMessage };
                case Vt.InExperienceOnly:
                  return {
                    success: !1,
                    message: $t.inExperienceOnlyFailureMessage,
                  };
                default:
                  return {
                    success: !1,
                    message: $t.purchaseErrorFailureMessage,
                  };
              }
          } else if (403 === e.status && e.data.message.includes("2sv")) t();
          else if (
            400 === e.status &&
            e.data.message.includes("InsufficientTotalBalance")
          )
            return { success: !1, message: $t.insufficientFundsFailureMessage };
          return { success: !1, message: $t.purchaseErrorFailureMessage };
        })(e, g),
        e = t.params ? r(t.message, t.params) : r(t.message);
      t.success ? p.success(e) : p.warning(e);
    }
    function I() {
      return (I = Wt(
        regeneratorRuntime.mark(function e() {
          var t, r, n, a, i, o, s, c;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = { strategy: "BEST_EFFORT", lineItems: [] }),
                      (r = []),
                      (n = []),
                      l.forEach(function (e) {
                        var t = {};
                        void 0 !== e.collectibleItemId
                          ? (!(
                              "ExperiencesDevApiOnly" !==
                                e.collectibleItemDetails.saleLocationType &&
                              (!e.itemRestrictions.includes("Collectible") ||
                                (0 <
                                  e.collectibleItemDetails
                                    .unitsAvailableForConsumption &&
                                  (!e.collectibleItemDetails.hasResellers ||
                                    e.collectibleItemDetails.price <
                                      e.collectibleItemDetails
                                        .lowestResalePrice)))
                            ) &&
                            e.collectibleItemDetails
                              .lowestAvailableResaleProductId
                              ? (t.collectibleProductId =
                                  e.collectibleItemDetails.lowestAvailableResaleProductId)
                              : (t.collectibleProductId =
                                  e.collectibleItemDetails.collectibleProductId),
                            (t.agreedPriceRobux =
                              e.collectibleItemDetails.lowestPrice))
                          : void 0 !== e.firstReseller
                            ? ((t.limitedV1InstanceId = "".concat(
                                e.firstReseller.userAssetId,
                              )),
                              (t.agreedPriceRobux = e.firstReseller.price))
                            : ((t.virtualEconomyProductId = "".concat(
                                e.productId,
                              )),
                              (t.agreedPriceRobux =
                                e.premiumPriceInRobux &&
                                ke.authenticatedUser.isPremiumUser
                                  ? e.premiumPriceInRobux
                                  : e.price)),
                          r.push(t);
                        t = { data: { itemData: {}, reason: "" } };
                        "Asset" === e.itemType
                          ? (t.data.itemData.assetId = e.id)
                          : (t.data.itemData.bundleId = e.id),
                          n.push(t);
                      }),
                      (t.lineItems = r),
                      (a = u.has(Qt.LookId) ? u.get(Qt.LookId) : ""),
                      (i = ye.uuidService.generateRandomUuid()),
                      (i =
                        void 0 !== a && "" !== a
                          ? "web_looks_purchase-".concat(a, "-").concat(i)
                          : i),
                      (e.prev = 8),
                      (e.next = 11),
                      Se.bulkPurchaseItem(ge.CurrentUser.userId, m, t, i)
                    );
                  case 11:
                    (o = e.sent),
                      (s = 0),
                      o.data.fulfillmentGroups[0].lineItems.forEach(
                        function (e) {
                          (n[s].data.reason =
                            "SUCCEEDED" === e.status
                              ? "Success"
                              : e.errorReason),
                            (s += 1);
                        },
                      ),
                      (e.next = 21);
                    break;
                  case 16:
                    (e.prev = 16),
                      (e.t0 = e.catch(8)),
                      (o = e.t0),
                      (c = 0),
                      n.forEach(function (e) {
                        o &&
                          (n[c].data.reason =
                            null === o || void 0 === o
                              ? void 0
                              : o.data.message),
                          (c += 1);
                      });
                  case 21:
                    E(o), d(n);
                  case 23:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[8, 16]],
          );
        }),
      )).apply(this, arguments);
    }
    h = be().createElement(
      fe.Fragment,
      null,
      be().createElement("div", {
        className: "modal-message multi-item",
        dangerouslySetInnerHTML: { __html: r(e, P) },
      }),
      void 0 !== l &&
        0 < l.length &&
        be().createElement(
          "div",
          { className: "modal-multi-item-images-container" },
          h.map(function (e, t) {
            return be().createElement(Jt, {
              key: e.itemId,
              itemsCount: l.length,
              item: e,
              index: t,
            });
          }),
        ),
    );
    return be().createElement(
      be().Fragment,
      null,
      be().createElement(Me, {
        isTwoStepVerificationActive: b,
        stopTwoStepVerification: function () {
          S(!0), y(!1);
        },
        systemFeedbackService: p,
      }),
      be().createElement(sr, {
        title: n || t,
        body: h,
        neutralButtonText: r($t.cancelAction),
        actionButtonText: f,
        onAction: function () {
          var t = !1;
          l.forEach(function (e) {
            t = t || e.twoStepVerificationRequired;
          }),
            t && !v
              ? g()
              : ((function () {
                  I.apply(this, arguments);
                })(),
                s());
        },
        onNeutral: function () {
          o();
        },
        footerText: be().createElement(F, {
          expectedPrice: a,
          currentRobuxBalance: i,
        }),
        loading: c,
        actionButtonShow: l,
      }),
    );
  }
  var br,
    yr = (Ft = ir(
      ((br = (Nt = er((0, M.createModal)(), 2))[0]),
      (Nt = Nt[1]),
      (hr.defaultProps = { onContinueToPayment: null }),
      (hr.propTypes = {
        translate: r().func.isRequired,
        onContinueToPayment: r().func,
      }),
      [(0, o.withTranslations)(hr, s.purchasingResources), Nt]),
      2,
    ))[0],
    gr = Ft[1];
  function hr(e) {
    var t = e.translate,
      r = e.onContinueToPayment,
      e =
        t(rr.redirectToPartnerWebsiteMessage, { linebreak: "\n\n" }) ||
        "This purchase must be completed on our partner’s website. You will be returned to Roblox after the purchase is completed.\n\n Proceed to partner website for payment?",
      e = be().createElement("p", { className: "modal-body" }, e);
    return be().createElement(
      br,
      Zt(
        {
          title: t(rr.leavingRobloxHeading) || "Leaving Roblox",
          body: e,
          neutralButtonText: t(rr.cancelAction),
          actionButtonText:
            t(rr.continueToPaymentAction) || "Continue To Payment",
          onAction: function () {
            P.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
              P.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                .WEB_CATALOG_ROBUX_UPSELL,
              !0,
              P.paymentFlowAnalyticsService.ENUM_VIEW_NAME.LEAVE_ROBLOX_WARNING,
              P.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT,
              P.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CONTINUE_TO_VNG,
            ),
              r();
          },
          onClose: function () {
            P.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(
              P.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT
                .WEB_CATALOG_ROBUX_UPSELL,
              !0,
              P.paymentFlowAnalyticsService.ENUM_VIEW_NAME.LEAVE_ROBLOX_WARNING,
              P.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT,
              P.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CANCEL,
            );
          },
        },
        { actionButtonShow: !0 },
      ),
    );
  }
  function vr(e) {
    var t = e.currentUserBalance,
      r = e.items,
      n = e.itemDetails,
      a = e.purchaseMetadata,
      i = e.onBuyButtonClick,
      o = e.onConfirm,
      s = e.onCancel,
      c = e.onTransactionComplete,
      l = e.productSurface,
      u = e.displayPriceOnButton,
      d = e.systemFeedbackService,
      m = e.translate,
      p = e.variant,
      f = void 0 === p ? M.Button.variants.growth : p,
      b = e.size,
      y = void 0 === b ? M.Button.sizes.large : b,
      g = !1,
      h = 0,
      v = 0,
      S = [],
      P = ir((0, fe.useState)(!1), 2),
      p = P[0],
      E = P[1],
      e = ir((0, fe.useState)(!1), 2),
      I = e[0],
      w = e[1],
      b = ir((0, fe.useState)(null), 2),
      P = b[0],
      A = b[1],
      e = ir((0, fe.useState)(null), 2),
      b = e[0],
      R = e[1];
    (0, fe.useEffect)(function () {
      ar()
        .then(function (e) {
          e = e.data.shouldShowVng;
          w(e);
        })
        .catch(function (e) {
          console.debug(e), w(!1);
        });
    }, []);
    if (!ke.authenticatedUser.isAuthenticated)
      return be().createElement(
        "div",
        { className: "sign-in" },
        be().createElement(
          M.Button,
          {
            className: "action-button batch-buy-purchase-button sign-in-button",
            variant: f,
            size: y,
            onClick: function () {
              var e;
              window.location =
                ((e = { ReturnUrl: window.location.pathname }),
                ye.urlService.getUrlWithQueries("/login", e));
            },
          },
          m(cr.buyAction),
        ),
      );
    if (void 0 === n || (0 < n.length && n[0] && n[0].loading) || void 0 === t)
      return be().createElement(
        "div",
        { className: "loading" },
        be().createElement(
          M.Button,
          {
            className: "action-button batch-buy-purchase-button",
            variant: f,
            size: y,
            isDisabled: !0,
          },
          be().createElement(M.Loading, null),
        ),
      );
    if (0 === n.length || (n[0] && n[0].loadFailure))
      return be().createElement(
        M.Button,
        {
          className: "action-button batch-buy-purchase-button",
          variant: f,
          size: y,
          isDisabled: !0,
        },
        u
          ? be().createElement(
              "div",
              { className: "purchase-price" },
              be().createElement("span", {
                className: "icon-robux-white-28x28",
              }),
              be().createElement(
                "span",
                { className: "purchase-price-text text-robux-lg" },
                ye.numberFormat.getNumberFormat(h),
              ),
            )
          : be().createElement("div", null, m(cr.buyAction)),
      );
    n.forEach(function (e) {
      var t;
      (void 0 !== (t = e).collectibleItemId
        ? (t.isMarketPlaceEnabled && t.isPurchasable) || t.resellerAvailable
        : t.isMarketPlaceEnabled && (t.resellerAvailable || t.isPurchasable)) &&
        (g = !0),
        void 0 !== e.collectibleItemDetails
          ? e.collectibleItemDetails.lowestPrice
            ? (h += e.collectibleItemDetails.lowestPrice)
            : e.collectibleItemId.price && (h += e.collectibleItemDetails.price)
          : e.premiumPriceInRobux && ke.authenticatedUser.isPremiumUser
            ? (v += e.premiumPriceInRobux)
            : e.lowestPrice
              ? (h += e.lowestPrice)
              : e.price && (h += e.price),
        e.resellerAvailable && S.push(e);
    });
    var T = h + v - t,
      e = be().createElement(M.Loading, null);
    p ||
      (e = u
        ? be().createElement(
            "div",
            { className: "purchase-price" },
            be().createElement("span", { className: "icon-robux-white-28x28" }),
            be().createElement(
              "span",
              { className: "purchase-price-text text-robux-lg" },
              ye.numberFormat.getNumberFormat(h),
            ),
          )
        : be().createElement("div", null, m(cr.buyAction)));
    var x = function () {
      I ? gr.open() : (window.location = N.getRobuxUpgradesUrl(""));
    };
    return be().createElement(
      be().Fragment,
      null,
      be().createElement(
        "div",
        { className: "batch-buy-purchase-button-container" },
        be().createElement(
          M.Button,
          {
            className: "action-button batch-buy-purchase-button",
            variant: f,
            size: y,
            onClick: function () {
              var e;
              0 < T
                ? (R(be().createElement(lr, { robuxNeeded: T, onAccept: x })),
                  ur.open())
                : ((e = be().createElement(mr, {
                    title: m(cr.buyNowAction),
                    expectedTotalPrice: h + v,
                    items: r,
                    purchaseMetadata: a,
                    itemDetails: n,
                    resaleItems: S,
                    currentRobuxBalance: t,
                    onCancel: function () {
                      var e;
                      null == pr ||
                        (null !== (e = pr.close) && void 0 !== e && e.call(pr)),
                        s();
                    },
                    onTransactionComplete: function (e) {
                      E(!1), c(e);
                    },
                    onAction: function () {
                      var e;
                      null == pr ||
                        (null !== (e = pr.close) && void 0 !== e && e.call(pr)),
                        E(!0),
                        o();
                    },
                    loading: !1,
                    productSurface: l,
                    systemFeedbackService: d,
                  })),
                  A(e),
                  pr.open()),
                i();
            },
            isDisabled: !g,
          },
          e,
        ),
      ),
      0 < T && be().createElement("div", { id: "insufficient-funds-modal" }, b),
      I &&
        be().createElement(
          "div",
          { id: "leave-roblox-warning-modal" },
          be().createElement(yr, {
            onContinueToPayment: function () {
              var e = { url: N.getVngShopUrl(), withCredentials: !0 };
              ye.httpService
                .get(e)
                .then(function (e) {
                  e = e.data.vngShopRedirectUrl;
                  window.open(e, "_blank").focus();
                })
                .catch(function () {
                  window.open(N.getVngShopFallbackUrl, "_blank").focus();
                }),
                gr.close();
            },
          }),
        ),
      P && be().createElement("div", { id: "multi-item-purchase-modal" }, P),
    );
  }
  (vr.propTypes = {
    currentUserBalance: r().number.isRequired,
    items: r().arrayOf(
      r().shape({ id: r().number.isRequired, itemType: r().string.isRequired }),
    ).isRequired,
    purchaseMetadata: r().instanceOf(Map).isRequired,
    itemDetails: r().arrayOf(
      r().shape({
        productId: r().number.isRequired,
        price: r().number.isRequired,
        itemName: r().string.isRequired,
        itemType: r().string.isRequired,
        assetTypeDisplayName: r().string.isRequired,
        sellerName: r().string.isRequired,
        expectedSellerId: r().number.isRequired,
        isPurchasable: r().bool.isRequired,
        isOwned: r().bool.isRequired,
        isPlugin: r().bool.isRequired,
        itemDetailItemId: r().number.isRequired,
        loading: r().bool.isRequired,
        loadFailure: r().bool,
        userQualifiesForPremiumPrices: r().bool.isRequired,
        premiumPriceInRobux: r().number,
        isAuthenticated: r().bool.isRequired,
        resellerAvailable: r().bool.isRequired,
        firstReseller: r().shape({
          seller: { name: r().string.isRequired, id: r().number.isRequired },
          userAssetId: r().number.isRequired,
        }),
        isMarketPlaceEnabled: r().bool.isRequired,
      }),
    ).isRequired,
    onBuyButtonClick: r().func.isRequired,
    onConfirm: r().func.isRequired,
    onCancel: r().func.isRequired,
    onTransactionComplete: r().func.isRequired,
    productSurface: r().string.isRequired,
    displayPriceOnButton: r().bool.isRequired,
    systemFeedbackService: r().func.isRequired,
    translate: r().func.isRequired,
    variant: r().string,
    size: r().string,
  }),
    (vr.defaultProps = {
      variant: M.Button.variants.growth,
      size: M.Button.sizes.large,
    });
  var Sr = (0, o.withTranslations)(vr, s.purchasingResources);
  function Pr(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(n = (o = s.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Er(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return Er(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function Er(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function Ir(e) {
    var t = e.items,
      r = e.purchaseMetadata,
      n = e.onBuyButtonClick,
      a = e.systemFeedbackService,
      i = e.onConfirm,
      o = e.onCancel,
      s = e.onTransactionComplete,
      c = e.productSurface,
      l = e.displayPriceOnButton,
      u = e.translate,
      d = e.variant,
      m = e.size,
      p = Pr((0, fe.useState)(void 0), 2),
      e = p[0],
      f = p[1];
    (0, fe.useEffect)(function () {
      ke.authenticatedUser.isAuthenticated &&
        Pe(ke.authenticatedUser.id)
          .then(function (e) {
            f(e.data.robux);
          })
          .catch(function () {
            f(void 0);
          });
    }, []);
    p = Ht(t).itemDetails;
    return be().createElement(Sr, {
      currentUserBalance: e,
      items: t,
      itemDetails: p,
      purchaseMetadata: r,
      systemFeedbackService: a,
      onBuyButtonClick: n,
      onConfirm: i,
      onCancel: o,
      onTransactionComplete: s,
      productSurface: c,
      displayPriceOnButton: l,
      translate: u,
      variant: d,
      size: m,
    });
  }
  (Ir.propTypes = {
    items: r().arrayOf(r().object).isRequired,
    purchaseMetadata: r().instanceOf(Map).isRequired,
    onBuyButtonClick: r().func,
    onConfirm: r().func,
    onCancel: r().func,
    onTransactionComplete: r().func,
    systemFeedbackService: r().func.isRequired,
    productSurface: r().string,
    displayPriceOnButton: r().bool,
    translate: r().func.isRequired,
    variant: r().string,
    size: r().string,
  }),
    (Ir.defaultProps = {
      onBuyButtonClick: function () {},
      onConfirm: function () {},
      onCancel: function () {},
      onTransactionComplete: function () {},
      productSurface: "SHOPPING_CART_WEB",
      displayPriceOnButton: !1,
      variant: M.Button.variants.growth,
      size: M.Button.sizes.large,
    }),
    (dr = (0, o.withTranslations)(Ir, s.purchasingResources)),
    (Ft = a.errorTypeIds),
    (window.RobloxItemPurchase = {
      createTransactionFailureModal: u,
      createInsufficientFundsModal: R,
      createPriceChangedModal: B,
      createPurchaseVerificationModal: V,
      createPurchaseConfirmationModal: ve,
      createItemPurchase: _e,
      errorTypeIds: Ft,
      getMetaData: he,
      BalanceAfterSaleText: F,
      PriceLabel: A,
      AssetName: q,
      TransactionVerb: G,
      BatchBuyPriceContainer: dr,
      ASSET_TYPE_ENUM: {
        GAME_PASS: "Game Pass",
        BUNDLE: "Bundle",
        BUNDLE_ALIAS: "Package",
        PRIVATE_SERVER: "Private Server",
      },
    }),
    (0, ye.ready)(function () {
      var e = document.getElementById("display-price-container");
      e && (0, t.render)(be().createElement(It, null), e);
    });
})();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/2e2f13334443b8921471835342b0df52-itemPurchase.bundle.min.js.map

/* Bundle detector */
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("ItemPurchase");
