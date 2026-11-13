"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1872],
  {
    8311: (e, t, n) => {
      n.d(t, { A: () => a });
      var r = n(14232),
        i = n(45615);
      let a = (e) => {
        let { ownedCampaignIds: t } = (0, r.useContext)(i.A);
        return t && void 0 !== e ? t.includes(Number(e)) : void 0;
      };
    },
    24296: (e, t, n) => {
      n.d(t, { A: () => l });
      var r,
        i = n(14232);
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      let l = function (e) {
        return i.createElement(
          "svg",
          a(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 11,
              height: 10,
              fill: "none",
              viewBox: "0 0 11 10",
            },
            e,
          ),
          r ||
            (r = i.createElement("path", {
              fill: "#fff",
              d: "M9.224.009c.775.08 1.385.739 1.385 1.535v5.593q0 .036-.002.071v2.65L8.604 8.68H1.543A1.55 1.55 0 0 1 0 7.137V1.544C0 .694.695 0 1.543 0zM5.382 2.14a.46.46 0 0 0-.394.154l-.002.004-2.435 2.84H2.55a.62.62 0 0 0-.064.71l.164.285c.13.229.39.35.649.303l.045-.008q.036.095.088.182a1.332 1.332 0 0 0 2.496-.669l1.048-.197h.003a.462.462 0 0 0 .308-.688L5.737 2.37a.46.46 0 0 0-.355-.23m-.08 3.92a.711.711 0 0 1-1.33.25V6.31zm2.522-2.21a.387.387 0 0 0-.175.754l.479.113a.39.39 0 0 0 .44-.216l.025-.074a.387.387 0 0 0-.29-.465zm.447-1.504a.39.39 0 0 0-.527-.15l-.03.02-.418.26a.387.387 0 1 0 .41.657l.417-.26a.387.387 0 0 0 .148-.527M6.526 1.108a.39.39 0 0 0-.465.29l-.112.48a.388.388 0 0 0 .756.175l.111-.479a.39.39 0 0 0-.29-.466",
            })),
        );
      };
    },
    25665: (e, t, n) => {
      n.d(t, { A: () => s });
      var r = n(37876),
        i = n(64137),
        a = n(27415),
        l = n(24296);
      let o = (0, n(95329).default)(i.wn).withConfig({
          componentId: "sc-23d36f50-0",
        })([
          "display:inline-flex;align-self:flex-start;flex-shrink:0;white-space:nowrap;",
        ]),
        s = (e) => {
          let { text: t } = e;
          return (0, r.jsxs)(o, {
            borderRadius: 16,
            backgroundColor: "orange450",
            flex: !0,
            alignItems: "center",
            columnGap: 4,
            padding: [4, 8],
            children: [
              (0, r.jsx)(l.A, { width: 12, height: 12 }),
              (0, r.jsx)(i.o5, {
                fontSize: 10,
                color: "white",
                weight: 700,
                fontFamily: a.f,
                as: "span",
                children: t,
              }),
            ],
          });
        };
    },
    26491: (e, t, n) => {
      n.d(t, { A: () => l });
      var r,
        i = n(14232);
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      let l = function (e) {
        return i.createElement(
          "svg",
          a(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 10,
              height: 9,
              fill: "none",
              viewBox: "0 0 10 9",
            },
            e,
          ),
          r ||
            (r = i.createElement("path", {
              fill: "#8C5E00",
              d: "M9.803 1.844A3.075 3.075 0 0 0 8.164.236a3.106 3.106 0 0 0-3.141.451A3.106 3.106 0 0 0 1.883.236 3.07 3.07 0 0 0 .245 1.844 3 3 0 0 0 0 3.03q.001.584.236 1.202c.131.343.32.699.56 1.058.382.569.906 1.162 1.558 1.763a17.4 17.4 0 0 0 2.193 1.713l.276.177c.122.077.279.077.4 0l.276-.177a17.6 17.6 0 0 0 2.194-1.713c.65-.601 1.175-1.194 1.557-1.763.24-.36.43-.715.56-1.058.157-.41.236-.814.236-1.202a3 3 0 0 0-.243-1.185",
            })),
        );
      };
    },
    46769: (e, t, n) => {
      n.d(t, { A: () => a });
      var r = n(14232),
        i = n(46545);
      let a = (e) => {
        let { id: t, onVisible: n } = e,
          a = (0, r.useCallback)(() => {
            t && n && n([t]);
          }, [t, n]),
          { ref: l } = (0, i.Ay)({ onVisible: a, requireForeground: !1 });
        return { elementRef: l };
      };
    },
    75600: (e, t, n) => {
      n.d(t, { A: () => f });
      var r = n(14232),
        i = n(17666),
        a = n(36445);
      let l = (e) => {
        let { surface: t, intervalMs: n = 2e3, spotlight: l = !1 } = e,
          o = (0, r.useRef)(new Set()),
          s = (0, r.useRef)(new Set()),
          c = (0, r.useRef)(!1),
          { page: d, zone: u } = t,
          h = (0, r.useMemo)(() => (l ? { spotlight: !0 } : {}), [l]),
          { trackImpressionEvent: f } = (0, a.z)(),
          g = (0, r.useCallback)((e) => {
            e.filter(Boolean).forEach((e) => {
              s.current.has(e) || o.current.add(e);
            });
          }, []),
          p = (0, r.useCallback)(async () => {
            if (c.current || 0 === o.current.size) return;
            c.current = !0;
            let e = Array.from(o.current);
            try {
              (await (0, i.i)({
                vakinhasIds: e,
                page: d,
                zone: u,
                properties: h,
              }),
                e.forEach((e) => {
                  (s.current.add(e), o.current.delete(e));
                }));
            } catch (e) {
            } finally {
              c.current = !1;
            }
          }, [d, u, h]);
        return (
          (0, r.useEffect)(() => {
            let e = window.setInterval(() => {
              p();
            }, n);
            return () => {
              (window.clearInterval(e),
                o.current.size > 0 &&
                  f({
                    vakinhasIds: Array.from(o.current),
                    page: d,
                    zone: u,
                    properties: h,
                  }));
            };
          }, [p, n]),
          { registerImpressions: g, sendImpressions: p }
        );
      };
      var o = n(94416),
        s = n(48720),
        c = n(4924);
      let d = (e) => {
          let {
            surface: t,
            vakinhaId: n,
            position: r,
            spotlight: i = !1,
            experiment: a,
            variant: l,
          } = e;
          return (0, s.omitBy)(s.isUndefined, {
            event_id: (0, c.$C)(),
            distinct_id: (0, c._V)(),
            vakinha_id: n,
            page: t.page,
            zone: t.zone,
            position: r,
            spotlight: i,
            experiment: a,
            variant: l,
          });
        },
        u = ["impressions", "viewed", "clicked"],
        h = () => void 0,
        f = (e) => {
          let {
              surface: t,
              cards: n,
              trackers: i = [...u],
              experiment: s,
              variant: c,
            } = e,
            f = (0, r.useRef)(n);
          f.current = n;
          let { registerImpressions: g } = l({ surface: t }),
            { registerImpressions: p } = l({ surface: t, spotlight: !0 }),
            { registerViewedCards: w } = ((e) => {
              let { surface: t, cards: n, experiment: i, variant: a } = e,
                l = (0, r.useRef)(n);
              l.current = n;
              let s = (0, r.useRef)(new Set());
              return {
                registerViewedCards: (0, r.useCallback)(
                  (e) => {
                    e.filter(Boolean).forEach((e) => {
                      if (s.current.has(e)) return;
                      let n = l.current.find((t) => t.id === e);
                      if (!n) return;
                      s.current.add(e);
                      let r = d({
                        surface: t,
                        vakinhaId: n.id,
                        position: n.position,
                        spotlight: n.spotlight,
                        experiment: i,
                        variant: a,
                      });
                      (0, o.$)({
                        eventName: "vakinha-card-viewed",
                        properties: r,
                      });
                    });
                  },
                  [t, i, a],
                ),
              };
            })({ surface: t, cards: n, experiment: s, variant: c }),
            { registerClickedCard: m } = ((e) => {
              let { surface: t, cards: n, experiment: i, variant: l } = e,
                o = (0, r.useRef)(n);
              o.current = n;
              let { trackPostHogEvent: s } = (0, a.z)();
              return {
                registerClickedCard: (0, r.useCallback)(
                  (e) => {
                    if (!e) return;
                    let n = o.current.find((t) => t.id === e);
                    n &&
                      s(
                        "vakinha-card-clicked",
                        d({
                          surface: t,
                          vakinhaId: n.id,
                          position: n.position,
                          spotlight: n.spotlight,
                          experiment: i,
                          variant: l,
                        }),
                      );
                  },
                  [t, i, l, s],
                ),
              };
            })({ surface: t, cards: n, experiment: s, variant: c }),
            x = i.includes("impressions"),
            v = i.includes("viewed"),
            j = i.includes("clicked"),
            C = (0, r.useCallback)(
              (e) => {
                let t = e.filter((e) => {
                    var t;
                    return null == (t = f.current.find((t) => t.id === e))
                      ? void 0
                      : t.billable;
                  }),
                  n = e.filter((e) => !t.includes(e));
                (n.length > 0 && g(n), t.length > 0 && p(t));
              },
              [g, p],
            ),
            b = (0, r.useCallback)(
              (e) => {
                (x && C(e), v && w(e));
              },
              [x, v, C, w],
            );
          return {
            cardTracking: (0, r.useMemo)(
              () => ({ surface: t, onVisible: b, onClick: j ? m : h }),
              [t, b, j, m],
            ),
          };
        };
    },
    86145: (e, t, n) => {
      n.d(t, { A: () => E });
      var r = n(37876),
        i = n(14232),
        a = n(64137),
        l = n(12503),
        o = n(33563),
        s = n(92649),
        c = n(2756),
        d = n(27415),
        u = n(10656),
        h = n(56581),
        f = n(19931),
        g = n(85426),
        p = n(81522),
        w = n(53091),
        m = n(46769),
        x = n(8311),
        v = n(26491),
        j = n(25665),
        C = n(4380),
        b = n(95329);
      let k = (0, b.default)(a.wn).withConfig({ componentId: "sc-8887aa45-0" })(
          ["width:", ";"],
          (e) => {
            let { mini: t } = e;
            return t ? "216px" : "100%";
          },
        ),
        y = b.default.div.withConfig({ componentId: "sc-8887aa45-1" })([
          "position:relative;",
        ]),
        A = b.default.div.withConfig({ componentId: "sc-8887aa45-2" })(
          ["position:absolute;top:", ";left:", ";right:", ";"],
          (e) => {
            let { top: t } = e;
            return "number" == typeof t ? "".concat(t, "px") : "8px";
          },
          (e) => {
            let { left: t } = e;
            return "number" == typeof t ? "".concat(t, "px") : "auto";
          },
          (e) => {
            let { right: t } = e;
            return "number" == typeof t ? "".concat(t, "px") : "auto";
          },
        ),
        z = (0, b.default)(a.wn).withConfig({ componentId: "sc-8887aa45-3" })([
          "padding:0 6px;",
        ]),
        S = (0, b.default)(a.wn).withConfig({ componentId: "sc-8887aa45-4" })([
          "min-height:48px;",
        ]),
        I = b.default.div.withConfig({ componentId: "sc-8887aa45-5" })([
          "position:absolute;bottom:8px;right:8px;",
        ]),
        E = (e) => {
          let {
              image: t,
              title: n,
              goal: b,
              collectedValue: E,
              collectedPercentValue: F,
              donorStickerAvatars: R,
              stickerReceived: _,
              slug: O,
              id: V,
              isSpotlight: B,
              sensitiveContent: G = !1,
            } = e,
            { isOngProfile: M = !1 } = e,
            {
              mini: q,
              position: L,
              loggedUserAvatar: P,
              products: H,
              userHadGivenSticker: N,
              utmInternalSource: T,
              headingTag: $,
              cardTracking: D,
              hideStickerButton: J,
              routeQuery: Q,
            } = e,
            U = { slug: O, utm_internal_source: T, ...Q },
            [W, Y] = (0, i.useState)(N),
            [K, X] = (0, i.useState)(_),
            [Z, ee] = (0, i.useState)(G),
            { elementRef: et } = (0, m.A)({ id: V, onVisible: D.onVisible }),
            en = (0, x.A)(V),
            er = () => {
              V && D.onClick(V);
            };
          (0, i.useEffect)(() => {
            Y(N);
          }, [N]);
          let ei = q ? 12 : 16,
            ea = q ? 12 : 16,
            el = q ? 4 : 8,
            eo = q ? 10 : 14;
          return (0, r.jsx)("div", {
            ref: et,
            children: (0, r.jsxs)(k, {
              backgroundColor: "white",
              borderRadius: 8,
              padding: q ? [12] : [16],
              shadow: !0,
              mini: q,
              children: [
                (0, r.jsx)(y, {
                  children: (0, r.jsxs)(p.A, {
                    sensitiveContent: Z,
                    setShowContent: ee,
                    variant: "miniCard",
                    routeParams: { route: "showCampaign", params: U },
                    children: [
                      (0, r.jsx)(o.A, {
                        route: "showCampaign",
                        params: U,
                        passHref: !0,
                        onClick: er,
                        children: (0, r.jsx)(a.FW, {
                          src: t,
                          height: q ? "114" : "152",
                          width: q ? "192" : "100%",
                          borderRadius: !0,
                          objectFit: "cover",
                          alt: n,
                        }),
                      }),
                      !J &&
                        (0, r.jsx)(A, {
                          right: el,
                          top: el,
                          children: (0, r.jsx)(w.A, {
                            onGiveSticker: (e) => {
                              (Y(!0), X((t) => t + e));
                            },
                            stickerGiven: W,
                            slug: O,
                            products: H,
                            stickerModalSource: {
                              origin: "card",
                              ...D.surface,
                            },
                            isCampaignOwner: en,
                            campaignTitle: n,
                            campaignStickersCount: K,
                          }),
                        }),
                      L &&
                        (0, r.jsx)(A, {
                          left: el,
                          top: el,
                          children: (0, r.jsxs)(z, {
                            flex: !0,
                            backgroundColor: "white",
                            borderRadius: 8,
                            justifyContent: "center",
                            alignItems: "center",
                            padding: [0, 4],
                            children: [
                              (() => {
                                switch (L) {
                                  case 1:
                                    return (0, r.jsx)(c.A, { height: 20 });
                                  case 2:
                                    return (0, r.jsx)(u.A, { height: 20 });
                                  case 3:
                                    return (0, r.jsx)(s.A, { height: 20 });
                                  default:
                                    return null;
                                }
                              })(),
                              (0, r.jsx)(a.o5, {
                                fontSize: 14,
                                color: "gray600",
                                weight: 700,
                                fontFamily: d.f,
                                as: "span",
                                children: L,
                              }),
                            ],
                          }),
                        }),
                      B &&
                        (0, r.jsx)(I, {
                          children: (0, r.jsx)(j.A, {
                            text: "Vaquinha Patrocinada",
                          }),
                        }),
                    ],
                  }),
                }),
                (0, r.jsxs)(o.A, {
                  route: "showCampaign",
                  params: U,
                  passHref: !0,
                  onClick: er,
                  children: [
                    (0, r.jsxs)(a.wn, {
                      flex: !0,
                      flexDirection: "column",
                      rowGap: 4,
                      padding: [12, 0],
                      children: [
                        q
                          ? (0, r.jsx)(a.o5, {
                              color: "gray600",
                              fontSize: ei,
                              weight: 700,
                              numberOfLines: 1,
                              fontFamily: d.a,
                              ...($ ? { as: $ } : {}),
                              children: n,
                            })
                          : (0, r.jsx)(S, {
                              children: (0, r.jsx)(a.o5, {
                                color: "gray600",
                                fontSize: ei,
                                weight: 700,
                                numberOfLines: 2,
                                fontFamily: d.a,
                                ...($ ? { as: $ } : {}),
                                children: n,
                              }),
                            }),
                        (0, r.jsxs)(a.wn, {
                          flex: !0,
                          alignItems: "center",
                          columnGap: 4,
                          children: [
                            M &&
                              (0, r.jsx)(a.o5, {
                                fontSize: ea,
                                fontFamily: d.f,
                                color: "gray400",
                                as: "span",
                                children: C.Be,
                              }),
                            (0, r.jsx)(a.o5, {
                              fontSize: ea,
                              weight: 700,
                              fontFamily: d.f,
                              color: B ? "orange450" : "green400",
                              as: "span",
                              children: (0, g.Ay)(E),
                            }),
                            !M &&
                              (0, r.jsx)(a.o5, {
                                fontSize: ea,
                                fontFamily: d.f,
                                color: "gray400",
                                as: "span",
                                children: " de ".concat((0, g.aL)(b)),
                              }),
                          ],
                        }),
                        (0, r.jsx)(f.A, {
                          progress: (0, C.GJ)({
                            ongProfile: M,
                            collectedValue: E,
                            collectedPercentValue: F,
                          }),
                          color: B ? "#FF7822" : void 0,
                        }),
                      ],
                    }),
                    (0, r.jsxs)(a.wn, {
                      flex: !0,
                      columnGap: 4,
                      alignItems: "center",
                      children: [
                        (null == R ? void 0 : R.length) > 0 &&
                          (0, r.jsx)(h.A, {
                            size: "sm",
                            avatars: (() => {
                              let e = R;
                              return (W && (e = [...R.slice(0, -1), P]), e);
                            })(),
                            withExtraBalloon: !0,
                            children: "+",
                          }),
                        (0, r.jsx)(a.o5, {
                          fontSize: eo,
                          color: "gray400",
                          fontFamily: d.f,
                          children: "".concat(K, " cora\xe7\xf5es recebidos "),
                        }),
                        B
                          ? (0, r.jsx)(v.A, {
                              width: eo,
                              height: eo,
                              id: "heart",
                            })
                          : (0, r.jsx)(l.QY, {
                              width: eo,
                              height: eo,
                              id: "heart",
                            }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=1872-29c2fe03cd9d584e.js.map
