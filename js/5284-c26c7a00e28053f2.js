"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5284],
  {
    4380: (e, t, n) => {
      n.d(t, { Be: () => r, GJ: () => l, iO: () => i, tW: () => o });
      var a = n(85426);
      let r = "J\xe1 arrecadou",
        i = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return "".concat(r, " ").concat((0, a.Ay)(e));
        },
        o = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return e <= 0
            ? 0
            : Math.min(90, Math.max(5, Math.round(15 + 15 * Math.log10(e))));
        },
        l = (e) => {
          let {
            ongProfile: t,
            collectedValue: n,
            collectedPercentValue: a = 0,
          } = e;
          return t ? o(n) : Math.round(a);
        };
    },
    19931: (e, t, n) => {
      n.d(t, { A: () => c });
      var a = n(37876),
        r = n(48720),
        i = n(95329),
        o = n(64137);
      let l = (0, i.default)(o.wn).withConfig({ componentId: "sc-52357e3b-0" })(
          ["width:100%;overflow:hidden;height:4px;"],
        ),
        s = i.default.div.withConfig({ componentId: "sc-52357e3b-1" })(
          [
            "overflow:hidden;background:",
            ";height:100%;border-radius:16px;width:",
            "",
          ],
          (e) => {
            let { color: t } = e;
            return null != t ? t : o.Tj.green400;
          },
          (e) => {
            let { progress: t } = e;
            return "".concat(t, "%");
          },
        ),
        c = (e) => {
          let { progress: t, color: n } = e;
          return (0, a.jsx)(l, {
            backgroundColor: "gray200",
            children: (0, a.jsx)(s, {
              progress: (0, r.isNumber)(t) ? Math.min(t, 100) : 100,
              color: n,
            }),
          });
        };
    },
    23813: (e, t, n) => {
      n.d(t, { Wy: () => s, _V: () => i, qf: () => l, vw: () => o });
      var a = n(95329),
        r = n(64137);
      let i = a.default.img.withConfig({ componentId: "sc-62ccd8aa-0" })([
          "border-radius:8px;width:64px;height:64px;",
        ]),
        o = a.default.div.withConfig({ componentId: "sc-62ccd8aa-1" })(
          [
            "background-color:",
            ";border-radius:16px;color:",
            ";font-size:10px;font-weight:700;padding:4px 8px;text-align:center;",
          ],
          r.Tj.blue450,
          r.Tj.white,
        ),
        l = (0, a.default)(r.wn).withConfig({ componentId: "sc-62ccd8aa-2" })(
          ["&:hover{border:1px solid ", ";}"],
          (e) => {
            let { isSpotlight: t } = e;
            return t ? r.Tj.orange450 : r.Tj.green500;
          },
        ),
        s = (0, a.default)(r.wn).withConfig({ componentId: "sc-62ccd8aa-3" })(
          ["width:80%;@media ", "{width:75%;}"],
          r.HP.phone,
        );
    },
    32100: (e, t, n) => {
      n.d(t, { Bw: () => f, a9: () => o, mM: () => h, ym: () => i });
      var a = n(4924),
        r = n(28646);
      let i = {
          "benefit-copy-new-pricing": {
            flow: "sticker_modal_new_pricing",
            swaps: { "new-individual-sticker": "pacote-5-coracoes-loja" },
          },
          "benefit-copy-three-pack": {
            flow: "sticker_modal_three_pack",
            swaps: { "new-individual-sticker": "pacote-3-coracoes-loja" },
          },
        },
        o = "sticker_modal_variant",
        l = [
          "control",
          "benefit-copy",
          "benefit-copy-new-pricing",
          "benefit-copy-three-pack",
        ],
        s = null,
        c = (e) => (l.includes(e) ? e : null),
        d = (e) => {
          let t = c(e("sticker-modal-benefit-copy"));
          if ("control" !== t) return t;
          let n = c(e("sticker-modal-control-split"));
          return "control" === n ? null : n;
        },
        u = async () => {
          let e = (0, r.e)({ distinctId: (0, a.xQ)(), read: d });
          return c(
            await Promise.race([
              e,
              new Promise((e) => {
                setTimeout(() => e(null), 2e3);
              }),
            ]),
          );
        },
        h = () => (null != s || (s = u()), s),
        f = (e) => (e ? i[e] : void 0);
    },
    32636: (e, t, n) => {
      n.d(t, { t: () => o });
      let a = new Set(["b\xf4nus"]),
        r = { cidadão: "cidad\xe3os" },
        i = (e) => {
          let t = e.toLowerCase();
          if (a.has(t)) return e;
          if (r[t]) return r[t];
          if (/[aeiou]$/.test(t) && !t.endsWith("\xe3o"))
            return "".concat(e, "s");
          if (/m$/.test(t)) return "".concat(e.slice(0, -1), "ns");
          if (/[rsz]$/.test(t)) return "".concat(e, "es");
          if (/(al|el|ol|ul)$/.test(t)) return "".concat(e.slice(0, -1), "is");
          if (/il$/.test(t))
            return /[áéíóúâêôãõ].*il$/.test(t)
              ? "".concat(e.slice(0, -2), "eis")
              : "".concat(e.slice(0, -2), "is");
          if (/n$/.test(t) && !t.endsWith("en")) return "".concat(e, "s");
          if (/x$/.test(t)) return e;
          if (/ão$/.test(t)) return "".concat(e.slice(0, -2), "\xf5es");
          if (e.includes("-")) {
            let t = e.split("-"),
              n = i(t[t.length - 1]);
            return ((t[t.length - 1] = n), t.join("-"));
          }
          return "".concat(e, "s");
        },
        o = (e, t, n) => {
          if (
            !((e, t) =>
              "number" != typeof e || Number.isNaN(e)
                ? {
                    isValid: !1,
                    error: "Count deve ser um n\xfamero v\xe1lido",
                  }
                : "string" != typeof t
                  ? { isValid: !1, error: "Word deve ser uma string" }
                  : 0 === t.trim().length
                    ? {
                        isValid: !1,
                        error: "Word n\xe3o pode ser uma string vazia",
                      }
                    : { isValid: !0 })(e, t).isValid ||
            1 === Math.abs(e)
          )
            return t;
          let a = t.toLowerCase();
          if (null == n ? void 0 : n.overrides) {
            let e = n.overrides.find((e) => e.singular.toLowerCase() === a);
            if (e) return e.plural;
          }
          return i(t);
        };
    },
    40399: (e, t, n) => {
      n.d(t, { A: () => c });
      var a = n(37876),
        r = n(64137),
        i = n(86649),
        o = n(85426),
        l = n(27415),
        s = n(23813);
      let c = (e) => {
        let {
            product: t,
            isBestOffer: n,
            onSelectProduct: c,
            selected: d,
            dataCy: u,
            limitedOffer: h,
            isSpotlight: f,
          } = e,
          { image: p, value: g, title: m, description: x } = t,
          w = f ? "orange450" : "green500";
        return (0, a.jsx)(s.qf, {
          borderRadius: 8,
          shadow: !0,
          padding: [8],
          onClick: () => {
            null == c || c(t);
          },
          cursor: "pointer",
          borderColor: d ? w : "transparent",
          border: !0,
          isSpotlight: f,
          children: (0, a.jsxs)(r.wn, {
            flex: !0,
            justifyContent: "space-between",
            alignItems: "flex-start",
            children: [
              (0, a.jsxs)(s.Wy, {
                flex: !0,
                children: [
                  (0, a.jsx)(s._V, { src: p, alt: "Imagem do produto" }),
                  (0, a.jsxs)(r.wn, {
                    padding: [0, 0, 0, 8],
                    children: [
                      (0, a.jsx)(r.o5, {
                        fontSize: 14,
                        weight: 700,
                        fontFamily: l.a,
                        dataCy: u,
                        children: m,
                      }),
                      x &&
                        (0, a.jsx)(r.o5, {
                          fontSize: 12,
                          color: "gray400",
                          fontFamily: l.f,
                          children: (0, i.Ay)(x),
                        }),
                      n &&
                        (0, a.jsxs)(r.wn, {
                          padding: [8, 0, 0],
                          flex: !0,
                          children: [
                            (0, a.jsx)(r.vw, {
                              fontSize: 10,
                              fontFamily: l.f,
                              fillColor: "blue450",
                              textColor: "white",
                              fontWeight: 700,
                              children: "Melhor oferta",
                            }),
                            h &&
                              (0, a.jsx)(r.wn, {
                                padding: [0, 0, 0, 8],
                                flex: !0,
                                children: (0, a.jsx)(r.vw, {
                                  fontSize: 10,
                                  fontFamily: l.f,
                                  fillColor: "orange450",
                                  textColor: "white",
                                  fontWeight: 700,
                                  children: "Oferta limitada",
                                }),
                              }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(r.wn, {
                flex: !0,
                backgroundColor: w,
                padding: [4, 8],
                borderRadius: 8,
                children: (0, a.jsx)(r.o5, {
                  fontSize: 12,
                  weight: 700,
                  fontFamily: l.a,
                  color: "white",
                  dataCy: "".concat(u, "-value"),
                  children: (0, o.Ay)(g),
                }),
              }),
            ],
          }),
        });
      };
    },
    53091: (e, t, n) => {
      n.d(t, { A: () => W });
      var a = n(37876),
        r = n(4917),
        i = n.n(r),
        o = n(76586),
        l = n(33391),
        s = n(14232),
        c = n(98344),
        d = n(64613),
        u = n(51158),
        h = n(45615),
        f = n(48230),
        p = n.n(f),
        g = n(40761),
        m = n(52966),
        x = n(64137),
        w = n(27415),
        v = n(95959),
        y = n(32636),
        j = n(32100),
        k = n(40399),
        b = n(83432),
        _ = n(95329);
      let C = (0, _.default)(x.dW).withConfig({ componentId: "sc-d8728b8b-0" })(
          ["overflow-y:auto;max-height:80%;"],
        ),
        S = (0, _.default)(x.$n).withConfig({ componentId: "sc-d8728b8b-1" })([
          "width:32px;height:32px;svg{margin:0;}",
        ]),
        z = (0, _.default)(x.pt.Input).withConfig({
          componentId: "sc-d8728b8b-2",
        })(
          [
            "text-align:center;width:120px;font-size:32px;font-weight:bold;padding:6px 12px;border-radius:8px;border:none;outline-style:none;-moz-appearance:textfield;appearance:textfield;color:",
            ";&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}&:focus-visible,&:focus{box-shadow:0 0 4px rgba(90,90,90,0.5);border-color:",
            ";}",
          ],
          (e) => {
            let { exceededValue: t } = e;
            return t ? x.Tj.red450 : x.Tj.gray600;
          },
          x.Tj.gray400,
        );
      var E = n(77798);
      let F = { variant: null, products: [] },
        M = async () => {
          try {
            return await (0, j.mM)();
          } catch (e) {
            return null;
          }
        },
        R = async (e) => {
          let { flow: t, swaps: n } = e;
          try {
            let e = await (0, E.c)(t);
            return Object.values(n).every((t) =>
              e.some((e) => {
                let { slug: n } = e;
                return n === t;
              }),
            )
              ? e
              : null;
          } catch (e) {
            return null;
          }
        },
        q = async (e) => {
          if (e.length) return e;
          try {
            return await (0, E.c)("sticker_offers_shop");
          } catch (e) {
            return [];
          }
        },
        T = async (e) => {
          let t = await M(),
            n = (0, j.Bw)(t);
          if (n) {
            let e = await R(n);
            if (e) return { variant: t, products: e };
          }
          let a = await q(e);
          return a.length ? { variant: n ? null : t, products: a } : F;
        },
        A = (e) => {
          let { productOffers: t } = e;
          return (null != t ? t : []).reduce((e, t) => {
            let { quantity: n } = t;
            return e + n;
          }, 0);
        },
        O = (e) => e.value / A(e),
        I = (e) => {
          var t, n;
          let {
              isOpen: r,
              max: i,
              onClose: o,
              onSubmit: l,
              products: c,
              campaignSlug: d,
              startView: u,
              loading: h,
              source: f,
              isCampaignOwner: _,
            } = e,
            { campaignTitle: E, campaignStickersCount: M = 0 } = e,
            [R, q] = (0, s.useState)(1),
            [I, U] = (0, s.useState)(u),
            [V, $] = (0, s.useState)(!1),
            H = "noStickers" === u,
            W = ((e, t) => {
              let [n, a] = (0, s.useState)(e ? null : F),
                r = (0, s.useRef)(t);
              return (
                (r.current = t),
                (0, s.useEffect)(() => {
                  if (!e) return () => void 0;
                  let t = !0;
                  return (
                    (async () => {
                      let e = await T(r.current);
                      t && a(e);
                    })(),
                    () => {
                      t = !1;
                    }
                  );
                }, [e]),
                n
              );
            })(H, c),
            { ref: B, onClickTarget: N } = (0, v.eC)(
              W && {
                ...f,
                campaign_slug: d,
                is_campaign_owner: null != _ ? _ : null,
                sticker_count: i,
                view: H ? "buy" : "give",
                ...(H && { experiment_variant: W.variant }),
              },
            ),
            D = null != (n = null == W ? void 0 : W.products) ? n : [],
            L = null == (t = D[0]) ? void 0 : t.slug,
            P = _
              ? "Cora\xe7\xf5es para destacar sua vaquinha."
              : "Cora\xe7\xf5es para destacar esta vaquinha.",
            G = [...D].reverse().map((e) => ({ ...e, description: P })),
            J = ((e) => {
              let t = e
                .filter((e) => e.value > 0 && A(e) > 0)
                .reduce((e, t) => (!e || O(t) < O(e) ? t : e), void 0);
              return null == t ? void 0 : t.slug;
            })(D),
            Q = (null == W ? void 0 : W.variant) ? { [j.a9]: W.variant } : {},
            K = () => N({ target: "buy_more" });
          return (0, a.jsx)(C, {
            isOpen: r,
            onClose: o,
            width: 560,
            padding: 16,
            children: (0, a.jsxs)("div", {
              ref: W ? B : void 0,
              children: [
                (0, a.jsx)(x.wn, {
                  padding: [16, 16, 8],
                  flex: !0,
                  justifyContent: "center",
                  children: (0, a.jsx)(b.A, { width: 50, height: 50 }),
                }),
                "default" === I &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(x.wn, {
                        padding: [8, 16],
                        flex: !0,
                        justifyContent: "center",
                        children: (0, a.jsx)(x.o5, {
                          fontFamily: w.f,
                          fontSize: 16,
                          align: "center",
                          weight: 700,
                          children: "Quantos cora\xe7\xf5es deseja distribuir?",
                        }),
                      }),
                      (0, a.jsxs)(x.wn, {
                        flex: !0,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: [16, 0, 8],
                        columnGap: 16,
                        children: [
                          (0, a.jsx)(S, {
                            onClick: () => {
                              q((e) => e - 1);
                            },
                            disabled: R <= 1 || h,
                            size: "small",
                            variant: "dark",
                            children: (0, a.jsx)(x.hh, {
                              size: 16,
                              color: "white",
                              children: (0, a.jsx)(m.A, {}),
                            }),
                          }),
                          (0, a.jsx)(z, {
                            type: "number",
                            value: R,
                            min: 1,
                            max: 1e4,
                            onChange: (e) => {
                              let t = Number(e.target.value);
                              Number.isInteger(t) && t > 0 && q(t);
                            },
                            exceededValue: R > i,
                          }),
                          (0, a.jsx)(S, {
                            onClick: () => {
                              q((e) => e + 1);
                            },
                            disabled: R >= i || h,
                            size: "small",
                            variant: "dark",
                            children: (0, a.jsx)(x.hh, {
                              size: 16,
                              color: "white",
                              children: (0, a.jsx)(g.A, {}),
                            }),
                          }),
                        ],
                      }),
                      R > i &&
                        (0, a.jsx)(x.wn, {
                          padding: [16, 0],
                          children: (0, a.jsx)(x.o5, {
                            fontFamily: w.f,
                            fontSize: 14,
                            color: "red450",
                            align: "center",
                            children:
                              "Voc\xea n\xe3o possui cora\xe7\xf5es suficientes.",
                          }),
                        }),
                      (0, a.jsx)(x.wn, {
                        justifyContent: "center",
                        children: (0, a.jsx)(x.o5, {
                          fontFamily: w.f,
                          fontSize: 12,
                          align: "center",
                          color: "gray400",
                          children: h
                            ? "Carregando..."
                            : (0, a.jsxs)(a.Fragment, {
                                children: [
                                  " Voc\xea tem: ",
                                  (0, a.jsxs)("strong", {
                                    children: [
                                      i.toLocaleString(),
                                      " cora\xe7\xf5es",
                                    ],
                                  }),
                                  " ",
                                ],
                              }),
                        }),
                      }),
                      R > i &&
                        (0, a.jsx)(p(), {
                          href: {
                            pathname: "/loja/[slug]",
                            query: {
                              slug: "adesivo-digital",
                              utm_internal_source: "sticker-modal",
                            },
                          },
                          passHref: !0,
                          onClick: K,
                          children: (0, a.jsx)(x.wn, {
                            justifyContent: "center",
                            cursor: "pointer",
                            children: (0, a.jsx)(x.o5, {
                              fontFamily: w.f,
                              fontSize: 12,
                              align: "center",
                              weight: 700,
                              color: "gray400",
                              textDecoration: "underline",
                              children: "Comprar mais cora\xe7\xf5es",
                            }),
                          }),
                        }),
                      (0, a.jsx)(x.wn, {
                        padding: [24, 0, 16],
                        children: (0, a.jsx)(x.$n, {
                          onClick: () => {
                            ($(!0), U("success"), l(R), $(!1));
                          },
                          disabled: R > i || V,
                          block: !0,
                          variant: "vakinha",
                          children: (0, a.jsx)(x.o5, {
                            fontFamily: "montserrat",
                            fontSize: 14,
                            weight: 700,
                            color: "white",
                            children: "Confirmar",
                          }),
                        }),
                      }),
                      (0, a.jsx)(x.$n, {
                        onClick: () => {
                          q(i);
                        },
                        link: !0,
                        size: "small",
                        block: !0,
                        variant: "dark",
                        children: (0, a.jsx)(x.o5, {
                          fontFamily: w.f,
                          fontSize: 14,
                          color: "gray400",
                          weight: 700,
                          children: "Distribuir todos os cora\xe7\xf5es",
                        }),
                      }),
                    ],
                  }),
                "noStickers" === I &&
                  !W &&
                  (0, a.jsx)(x.wn, {
                    padding: [8, 16, 24],
                    flex: !0,
                    justifyContent: "center",
                    children: (0, a.jsx)(x.o5, {
                      fontFamily: w.f,
                      fontSize: 14,
                      align: "center",
                      color: "gray400",
                      children: "Carregando...",
                    }),
                  }),
                "noStickers" === I &&
                  W &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(x.wn, {
                        padding: [8, 16],
                        flex: !0,
                        justifyContent: "center",
                        children: (0, a.jsx)(x.o5, {
                          fontFamily: w.f,
                          fontSize: 18,
                          align: "center",
                          weight: 700,
                          children: _
                            ? "Destaque sua vaquinha"
                            : E
                              ? "D\xea cora\xe7\xf5es para ".concat(E)
                              : "D\xea cora\xe7\xf5es para esta vaquinha",
                        }),
                      }),
                      (0, a.jsx)(x.o5, {
                        fontFamily: w.f,
                        fontSize: 16,
                        align: "center",
                        children: "Cora\xe7\xf5es levam ".concat(
                          _ ? "sua vaquinha" : "a vaquinha",
                          " para a lista das Mais Amadas, onde mais pessoas podem conhec\xea-la e apoiar.",
                        ),
                      }),
                      M > 0 &&
                        (0, a.jsx)(x.wn, {
                          padding: [8, 0, 0],
                          children: (0, a.jsxs)(x.o5, {
                            fontFamily: w.f,
                            fontSize: 14,
                            align: "center",
                            color: "gray400",
                            children: [
                              _ ? "Sua vaquinha" : "Esta vaquinha",
                              " j\xe1 recebeu ",
                              (0, a.jsx)("strong", {
                                children: ""
                                  .concat(M.toLocaleString("pt-BR"), " ")
                                  .concat((0, y.t)(M, "cora\xe7\xe3o")),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                "noStickers" === I &&
                  W &&
                  !!G.length &&
                  (0, a.jsx)(x.wn, {
                    padding: [16, 0, 24],
                    children: G.map((e, t) =>
                      (0, a.jsx)(
                        p(),
                        {
                          href: {
                            pathname: "/loja/checkout/".concat(e.slug),
                            query: {
                              reference: d,
                              utm_internal_source: "sticker-modal",
                              ...Q,
                            },
                          },
                          passHref: !0,
                          onClick: (
                            (e, t) => () =>
                              N({
                                target: "pack",
                                pack_slug: e.slug,
                                pack_value: e.value,
                                pack_position: t,
                              })
                          )(e, t),
                          children: (0, a.jsx)(k.A, {
                            product: e,
                            isBestOffer: e.slug === J,
                            dataCy:
                              e.slug === L
                                ? "product-pack-default"
                                : "product-pack-promotional",
                          }),
                        },
                        e.slug,
                      ),
                    ),
                  }),
                "success" === I &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(x.wn, {
                        padding: [8, 16],
                        flex: !0,
                        justifyContent: "center",
                        children: (0, a.jsx)(x.o5, {
                          fontFamily: w.f,
                          fontSize: 16,
                          align: "center",
                          weight: 700,
                          children: "Cora\xe7\xf5es distribu\xeddos!",
                        }),
                      }),
                      (0, a.jsx)(x.wn, {
                        padding: [8, 16],
                        flex: !0,
                        justifyContent: "center",
                        children: (0, a.jsxs)(x.o5, {
                          fontFamily: w.f,
                          fontSize: 16,
                          align: "center",
                          children: [
                            "Pronto, voc\xea destacou a vaquinha com ",
                            (0, a.jsxs)("strong", {
                              children: [R, " cora\xe7\xf5es!"],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        };
      var U = n(32043),
        V = n(50671);
      let $ = _.default.button.withConfig({ componentId: "sc-dc56edc8-0" })(
          [
            "cursor:pointer;box-shadow:1px 1px 3px ",
            ";height:40px;width:40px;bottom:0;display:block;border:unset;padding:0;border-radius:50%;position:relative;transition-duration:0.4s;opacity:1;&:active:after{box-shadow:0 0 0 0 ",
            ';opacity:1;transition:0s;}&:after{content:"";display:block;position:absolute;border-radius:50%;top:0;left:0;bottom:0;width:40px;height:40px;opacity:0;transition:all 0.5s;transition-duration:0.4s;box-shadow:0 0 10px 40px ',
            ";}&:active{bottom:10px;transition-duration:0.2s;}",
          ],
          x.Tj.gray600,
          x.Tj.white,
          x.Tj.white,
        ),
        H = _.default.span.withConfig({ componentId: "sc-dc56edc8-1" })(
          [
            "border:2px solid ",
            ";position:relative;padding:3px;border-radius:50%;background-color:",
            ";font-size:12px;font-weight:bold;width:20px;height:20px;white-space:nowrap;display:flex;justify-content:center;align-items:center;left:5px;top:5px;box-sizing:unset;",
          ],
          x.Tj.green400,
          x.Tj.white,
        );
      _.default.div.withConfig({ componentId: "sc-dc56edc8-2" })(
        [
          "width:max-content;color:",
          ";text-align:center;font-size:10px;cursor:pointer;a{font-size:12px;}",
        ],
        x.Tj.white,
      );
      let W = (e) => {
        let {
            stickerGiven: t,
            slug: n,
            onGiveSticker: r,
            onStickerClick: f,
            products: p,
            renderCustomButton: g,
            openModalOnFirstClick: m,
            freeStickersGuestClaim: x,
            stickerModalSource: w,
            isCampaignOwner: v,
            campaignTitle: y,
            campaignStickersCount: j,
          } = e,
          [k, b] = (0, s.useState)(0),
          [_, C] = (0, s.useState)(t),
          [S, z] = (0, s.useState)(m),
          [E, F] = (0, o.A)(!1),
          [M, R] = (0, s.useState)(!1),
          { token: q } = (0, s.useContext)(u.A),
          {
            stickerCount: T,
            setUserStickersQuantity: A,
            setCampaignsUserGaveSticker: O,
          } = (0, s.useContext)(h.A),
          W = () => {
            null == f || f();
            let e = T < 1 || k + 1 > T;
            (R(e),
              (0, s.startTransition)(() => {
                ((S || e) && (z(!0), F()), e || S || b((e) => e + 1));
              }));
          },
          B = async (e) => {
            (O(n),
              b(0),
              x ? await (0, d.ev)(x, n, e) : await (0, c.H)(n, e, q),
              A((t) => t - e),
              null == r || r(e));
          };
        return (
          (0, s.useEffect)(() => {
            C(t);
          }, [t]),
          (0, l.A)(() => {
            k >= 5 && z(!0);
            let e = i()(() => {
              k > 0 && !S && B(k);
            }, 1500);
            return (
              e(),
              () => {
                e.cancel();
              }
            );
          }, [k]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              g
                ? g(W)
                : (0, a.jsx)($, {
                    onClick: W,
                    type: "button",
                    "data-cy": "give-sticker-button",
                    children: _
                      ? (0, a.jsx)(U.A, {
                          width: 40,
                          height: 40,
                          id: "heartCoreOn",
                        })
                      : (0, a.jsx)(V.A, {
                          width: 40,
                          height: 40,
                          id: "heartCoreOff",
                        }),
                  }),
              k > 0 && (0, a.jsx)(H, { children: "+ ".concat(k) }),
              E &&
                (0, a.jsx)(I, {
                  isOpen: E,
                  max: T,
                  onClose: () => {
                    (0, s.startTransition)(() => {
                      F();
                    });
                  },
                  onSubmit: B,
                  products: p,
                  campaignSlug: n,
                  loading: k > 0,
                  startView: M ? "noStickers" : "default",
                  source: w,
                  isCampaignOwner: v,
                  campaignTitle: y,
                  campaignStickersCount: j,
                }),
            ],
          })
        );
      };
    },
    77798: (e, t, n) => {
      n.d(t, { c: () => d });
      var a,
        r,
        i = n(92598),
        o = n(32100);
      let l = [
          "new-individual-sticker",
          "pacote-15-coracoes-loja",
          "pacote-50-coracoes",
        ],
        s = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return l.map((t) => {
            var n;
            return null != (n = e[t]) ? n : t;
          });
        },
        c = {
          campaign_creation: [
            "15-coracoes-suporte-premium-cashback-criacao-vaquinha",
            "15-coracoes-criacao-vaquinha",
          ],
          showOffer: [
            "15-coracoes-criacao-vaquinha",
            "15-coracoes-suporte-premium-cashback-criacao-vaquinha",
            "vakinha-anuncios",
          ],
          individual_sticker_offer: ["new-individual-sticker"],
          sticker_offers_shop: l,
          sticker_modal_new_pricing: s(
            null == (a = o.ym["benefit-copy-new-pricing"]) ? void 0 : a.swaps,
          ),
          sticker_modal_three_pack: s(
            null == (r = o.ym["benefit-copy-three-pack"]) ? void 0 : r.swaps,
          ),
        },
        d = async (e) => {
          let t = c[e] || [],
            {
              data: { productPacks: n },
            } = await (0, i.y)(t);
          return ((e, t) => {
            let n = new Map(e.map((e) => [e.slug, e]));
            return t.map((e) => n.get(e)).filter(Boolean);
          })(n, t);
        };
    },
    83432: (e, t, n) => {
      n.d(t, { A: () => x });
      var a,
        r,
        i,
        o,
        l,
        s,
        c,
        d,
        u,
        h,
        f,
        p,
        g = n(14232);
      function m() {
        return (m = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      let x = function (e) {
        return g.createElement(
          "svg",
          m(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e,
          ),
          a ||
            (a = g.createElement("rect", {
              width: 24,
              height: 24,
              fill: "#F1F0F0",
              rx: 12,
            })),
          r ||
            (r = g.createElement("path", {
              fill: "url(#heartRound_svg__a)",
              d: "M11.998 8.108a4.44 4.44 0 0 0-2.12-1.472 4.46 4.46 0 0 0-2.584-.047c-1.948.61-2.753 2.747-2.422 4.633.524 2.993 3.807 5.977 6.647 7.083q.227.09.47.094h.024a1.3 1.3 0 0 0 .463-.094c2.868-1.133 6.123-4.09 6.648-7.083q.068-.393.071-.79v-.084c.04-.81-.18-1.61-.628-2.287A3.82 3.82 0 0 0 16.7 6.59a4 4 0 0 0-1.217-.189A4.62 4.62 0 0 0 12 8.108",
            })),
          g.createElement(
            "g",
            { opacity: 0.28 },
            g.createElement(
              "mask",
              {
                id: "heartRound_svg__b",
                width: 4,
                height: 3,
                x: 12,
                y: 7,
                maskUnits: "userSpaceOnUse",
                style: { maskType: "luminance" },
              },
              i ||
                (i = g.createElement("path", {
                  fill: "#fff",
                  d: "M15.386 7.263h-2.814V9.02h2.814z",
                })),
            ),
            g.createElement(
              "g",
              { mask: "url(#heartRound_svg__b)" },
              g.createElement(
                "mask",
                {
                  id: "heartRound_svg__c",
                  width: 4,
                  height: 3,
                  x: 12,
                  y: 7,
                  maskUnits: "userSpaceOnUse",
                  style: { maskType: "luminance" },
                },
                o ||
                  (o = g.createElement("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M14.524 7.305a2.83 2.83 0 0 0-1.856 1.293c-.1.162-.123.323-.067.388.055.064.179.034.362-.06.268-.142.687-.393 1.072-.587q.39-.2.809-.328c.748-.2.787-.928-.322-.706",
                    clipRule: "evenodd",
                  })),
              ),
              l ||
                (l = g.createElement(
                  "g",
                  { mask: "url(#heartRound_svg__c)" },
                  g.createElement("path", {
                    fill: "#fff",
                    d: "M15.634 7.083h-3.089v1.965h3.089z",
                  }),
                )),
            ),
          ),
          g.createElement(
            "g",
            { opacity: 0.28 },
            g.createElement(
              "mask",
              {
                id: "heartRound_svg__d",
                width: 4,
                height: 4,
                x: 5,
                y: 7,
                maskUnits: "userSpaceOnUse",
                style: { maskType: "luminance" },
              },
              s ||
                (s = g.createElement("path", {
                  fill: "#fff",
                  d: "M8.58 7.263H5.26v3.36H8.58z",
                })),
            ),
            g.createElement(
              "g",
              { mask: "url(#heartRound_svg__d)" },
              g.createElement(
                "mask",
                {
                  id: "heartRound_svg__e",
                  width: 4,
                  height: 4,
                  x: 5,
                  y: 7,
                  maskUnits: "userSpaceOnUse",
                  style: { maskType: "luminance" },
                },
                c ||
                  (c = g.createElement("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M7.571 7.309a2.35 2.35 0 0 0-1.74 1.424.42.42 0 0 0 .015.427c.072.066.204.038.384-.067.262-.154.666-.43 1.047-.645a4.3 4.3 0 0 1 .815-.36c.774-.223.65-1.023-.52-.78M5.27 9.943c-.057.318.116.954.401.548q.162-.238.259-.507a.45.45 0 0 0-.134-.494c-.326-.21-.487.231-.526.453",
                    clipRule: "evenodd",
                  })),
              ),
              d ||
                (d = g.createElement(
                  "g",
                  { mask: "url(#heartRound_svg__e)" },
                  g.createElement("path", {
                    fill: "#fff",
                    d: "M8.866 7.065H5.213v3.833h3.653z",
                  }),
                )),
            ),
          ),
          g.createElement("path", {
            fill: "#000",
            fillRule: "evenodd",
            d: "M12.538 7.543c1.674-1.243 3.833-.358 4.808 1.058a4.75 4.75 0 0 1 .494 4.115c-.722 2.339-3.888 4.643-5.842 4.758-1.496.088-3.207-.901-4.859-2.196a12.6 12.6 0 0 0 4.38 3.028c.306.125.65.125.955 0 2.868-1.133 6.123-4.09 6.648-7.083.33-1.886-.474-4.019-2.423-4.634a4.37 4.37 0 0 0-4.16.954",
            clipRule: "evenodd",
            opacity: 0.1,
            style: { mixBlendMode: "multiply" },
          }),
          g.createElement(
            "g",
            { opacity: 0.1, style: { mixBlendMode: "multiply" } },
            g.createElement(
              "mask",
              {
                id: "heartRound_svg__f",
                width: 7,
                height: 4,
                x: 5,
                y: 6,
                maskUnits: "userSpaceOnUse",
                style: { maskType: "luminance" },
              },
              u ||
                (u = g.createElement("path", {
                  fill: "#fff",
                  d: "M11.993 6.4H5.167v3.343h6.826z",
                })),
            ),
            g.createElement(
              "g",
              { mask: "url(#heartRound_svg__f)" },
              g.createElement(
                "mask",
                {
                  id: "heartRound_svg__g",
                  width: 7,
                  height: 4,
                  x: 5,
                  y: 6,
                  maskUnits: "userSpaceOnUse",
                  style: { maskType: "luminance" },
                },
                h ||
                  (h = g.createElement("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M10.923 9.597q.483-.782 1.071-1.488a4.44 4.44 0 0 0-2.12-1.473 4.46 4.46 0 0 0-2.584-.047 3.44 3.44 0 0 0-2.123 1.966c1.428-2.594 5.696-1.71 5.565.516a3 3 0 0 1-.039.406c-.03.15-.035.237.022.26.056.025.139-.022.209-.14",
                    clipRule: "evenodd",
                  })),
              ),
              f ||
                (f = g.createElement(
                  "g",
                  { mask: "url(#heartRound_svg__g)" },
                  g.createElement("path", {
                    fill: "#000",
                    d: "M11.994 5.95H5.167v3.81h6.827z",
                  }),
                )),
            ),
          ),
          p ||
            (p = g.createElement(
              "defs",
              null,
              g.createElement(
                "radialGradient",
                {
                  id: "heartRound_svg__a",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientTransform: "matrix(12.5657 0 0 12.2752 8.462 1.734)",
                  gradientUnits: "userSpaceOnUse",
                },
                g.createElement("stop", { stopColor: "#24CA68" }),
                g.createElement("stop", {
                  offset: 0.704,
                  stopColor: "#0A8F51",
                }),
                g.createElement("stop", { offset: 1, stopColor: "#007A48" }),
              ),
            )),
        );
      };
    },
    92598: (e, t, n) => {
      n.d(t, { y: () => r });
      var a = n(34016);
      let r = async (e) =>
        (0, a.A)({ endpoint: "product_packs", query: { slug: e } });
    },
  },
]);
//# sourceMappingURL=5284-c26c7a00e28053f2.js.map
