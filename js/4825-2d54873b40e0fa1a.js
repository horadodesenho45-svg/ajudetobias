"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4825],
  {
    2449: (e, t, n) => {
      n.d(t, { A: () => u });
      var o = n(37876),
        i = n(89893),
        r = n(14232),
        a = n(64137),
        l = n(27415),
        s = n(53928),
        c = n(4924),
        d = n(97468),
        p = n(94416),
        f = n(57355),
        h = n(42409),
        m = n(33346);
      let u = (e) => {
        let {
            isMobile: t,
            shareUrl: n,
            isOpen: u,
            onClose: x,
            openShareModal: g,
            title: w,
            shareDescription: j,
            campaignId: v,
            screen: b,
          } = e,
          [k, C] = (0, r.useState)(""),
          [_, y] = (0, r.useState)(!0);
        (0, r.useEffect)(() => {
          (C((0, c._V)()),
            y(!0),
            setTimeout(() => {
              y(!1);
            }, 3e3));
        }, [u]);
        let S = (0, o.jsxs)(m.FQ, {
          flex: !0,
          flexDirection: "column",
          justifyContent: "space-between",
          rowGap: 24,
          padding: [48, 0, 8],
          children: [
            (0, o.jsxs)(a.wn, {
              flex: !0,
              flexDirection: "column",
              rowGap: 24,
              children: [
                (0, o.jsxs)(a.wn, {
                  flex: !0,
                  justifyContent: "space-between",
                  flexDirection: "column",
                  rowGap: 16,
                  children: [
                    (0, o.jsx)(a.o5, {
                      fontFamily: l.a,
                      fontSizeDesktop: 20,
                      fontSizeMobile: 16,
                      weight: 700,
                      align: "center",
                      children: "Criamos uma mensagem pronta para suas redes",
                    }),
                    (0, o.jsx)(a.o5, {
                      fontFamily: l.f,
                      fontSizeMobile: 16,
                      fontSizeDesktop: 18,
                      align: "center",
                      children:
                        "Copie o texto e compartilhe com seus contatos.",
                    }),
                  ],
                }),
                (0, o.jsx)(h.A, {
                  text: "".concat(j, "\n\n").concat(n),
                  onCopied: () => (0, f.V)(v, "copy_link", b),
                }),
              ],
            }),
            (0, o.jsxs)(a.wn, {
              flex: !0,
              flexDirection: "column",
              rowGap: 12,
              children: [
                (0, d.kh)() &&
                  (0, o.jsx)(a.$n, {
                    variant: "dark",
                    onClick: () => {
                      (0, d.kh)() &&
                        (navigator.share({ title: w, text: j, url: n }),
                        (0, s.$s)("share-modal", "Normal Share", b),
                        k &&
                          (0, p.$)({
                            eventName: "show-page-normal-share",
                            properties: { campaign_id: v, screen: b },
                          }),
                        (0, f.V)(v, "native", b));
                    },
                    "data-tooltip-id": "share-normal-tooltip",
                    children: (0, o.jsx)(a.o5, {
                      fontFamily: l.a,
                      fontSize: 14,
                      weight: 700,
                      align: "center",
                      color: "white",
                      children: "Compartilhar",
                    }),
                  }),
                (0, o.jsx)(i.m_, {
                  id: "share-normal-tooltip",
                  place: "top",
                  isOpen: _,
                  content: "Texto copiado com sucesso!",
                  style: {
                    fontFamily: l.f,
                    fontSize: 12,
                    color: a.Tj.white,
                    background: a.Tj.gray400,
                    borderRadius: 8,
                    padding: "8px 12px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    textAlign: "center",
                    opacity: 1,
                  },
                }),
              ],
            }),
          ],
        });
        return t
          ? (0, o.jsx)(a.Co, {
              onClick: x,
              onClose: x,
              isVisible: u,
              children: S,
            })
          : (0, o.jsx)(a.dW, {
              onClose: () => {
                (x(), null == g || g());
              },
              isOpen: u,
              width: 600,
              padding: 16,
              children: S,
            });
      };
    },
    18613: (e, t, n) => {
      n.d(t, { A: () => m });
      var o = n(37876),
        i = n(89893),
        r = n(14232),
        a = n(28823),
        l = n(64137),
        s = n(27415),
        c = n(53928),
        d = n(4924),
        p = n(94416),
        f = n(57355),
        h = n(33346);
      let m = (e) => {
        let {
            isMobile: t,
            facebookUrl: n,
            isOpen: m,
            onClose: u,
            openShareModal: x,
            campaignId: g,
            screen: w,
          } = e,
          [j, v] = (0, r.useState)(""),
          [b, k] = (0, r.useState)(!0);
        (0, r.useEffect)(() => {
          (v((0, d._V)()),
            k(!0),
            setTimeout(() => {
              k(!1);
            }, 3e3));
        }, [m]);
        let C = (0, o.jsxs)(h.FQ, {
          flex: !0,
          flexDirection: "column",
          justifyContent: "space-between",
          rowGap: 24,
          padding: [48, 0, 8],
          children: [
            (0, o.jsxs)(l.wn, {
              flex: !0,
              justifyContent: "space-between",
              flexDirection: "column",
              rowGap: 16,
              children: [
                (0, o.jsx)(l.o5, {
                  fontFamily: s.a,
                  fontSizeDesktop: 20,
                  fontSizeMobile: 16,
                  weight: 700,
                  align: "center",
                  children:
                    "Criamos uma mensagem para voc\xea compartilhar no Facebook",
                }),
                (0, o.jsxs)(l.o5, {
                  fontFamily: s.f,
                  fontSizeMobile: 16,
                  fontSizeDesktop: 18,
                  align: "center",
                  children: [
                    "V\xe1 para o Facebook e ",
                    (0, o.jsx)("strong", {
                      children: "cole o texto na legenda da sua postagem",
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)(l.wn, {
              flex: !0,
              flexDirection: "column",
              rowGap: 12,
              children: [
                (0, o.jsx)(a.uI, {
                  url: n,
                  onClick: () => {
                    ((0, c.$s)("share-modal", "FB Share", w),
                      j &&
                        (0, p.$)({
                          eventName: "show-page-fb-share",
                          properties: { campaign_id: g, screen: w },
                        }),
                      (0, f.V)(g, "facebook", w));
                  },
                  "data-tooltip-id": "share-facebook-tooltip",
                  children: (0, o.jsx)(l.$n, {
                    variant: "vakinha",
                    block: !0,
                    children: (0, o.jsx)(l.o5, {
                      fontFamily: s.a,
                      fontSize: 14,
                      weight: 700,
                      color: "white",
                      align: "center",
                      children: "Abrir o Facebook",
                    }),
                  }),
                }),
                (0, o.jsx)(i.m_, {
                  id: "share-facebook-tooltip",
                  place: "top",
                  isOpen: b,
                  content: "Texto copiado com sucesso!",
                  style: {
                    fontFamily: s.f,
                    fontSize: 12,
                    color: l.Tj.white,
                    background: l.Tj.gray400,
                    borderRadius: 8,
                    padding: "8px 12px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    textAlign: "center",
                    opacity: 1,
                  },
                }),
              ],
            }),
          ],
        });
        return t
          ? (0, o.jsx)(l.Co, {
              onClick: u,
              onClose: u,
              isVisible: m,
              children: C,
            })
          : (0, o.jsx)(l.dW, {
              onClose: () => {
                (u(), null == x || x());
              },
              isOpen: m,
              width: 600,
              padding: 16,
              children: C,
            });
      };
    },
    33346: (e, t, n) => {
      n.d(t, { FQ: () => l, Q: () => d, e_: () => s, v4: () => c });
      var o = n(95329),
        i = n(64137),
        r = n(28823),
        a = n(15722);
      let l = (0, o.default)(i.wn).withConfig({ componentId: "sc-d9db48e2-0" })(
          ["height:100%;"],
        ),
        s = (0, o.default)(i.wn).withConfig({ componentId: "sc-d9db48e2-1" })(
          [
            "display:grid;grid-template-columns:repeat(3,1fr);row-gap:24px;column-gap:16px;@media ",
            "{grid-template-columns:",
            ";}> svg{margin:auto;}",
          ],
          a.A.phone,
          (e) => {
            let { canShare: t } = e;
            return t ? "repeat(4, 1fr)" : "repeat(3, 1fr)";
          },
        ),
        c = (0, o.default)(r.Kz).withConfig({ componentId: "sc-d9db48e2-2" })([
          "display:block !important;",
        ]),
        d = (0, o.default)(r.r6).withConfig({ componentId: "sc-d9db48e2-3" })([
          "display:block !important;",
        ]);
    },
    64986: (e, t, n) => {
      n.d(t, { A: () => l });
      var o,
        i,
        r = n(14232);
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      let l = function (e) {
        return r.createElement(
          "svg",
          a(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 32,
              height: 32,
              fill: "none",
              viewBox: "0 0 32 32",
            },
            e,
          ),
          o ||
            (o = r.createElement("rect", {
              width: 32,
              height: 32,
              fill: "#0A7F91",
              rx: 16,
            })),
          i ||
            (i = r.createElement("path", {
              fill: "#fff",
              d: "M8.266 23.965h3.318v-10.67H8.266zM8 9.92a1.922 1.922 0 1 0 3.844-.001A1.922 1.922 0 0 0 8 9.92M20.687 23.965H24v-5.854c0-2.873-.62-5.082-3.977-5.082-1.611 0-2.694.886-3.135 1.725h-.043v-1.458h-3.178v10.67h3.309V18.69c0-1.392.262-2.741 1.986-2.741 1.703 0 1.724 1.593 1.724 2.829z",
            })),
        );
      };
    },
    86438: (e, t, n) => {
      n.d(t, { A: () => c });
      var o,
        i,
        r,
        a,
        l = n(14232);
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      let c = function (e) {
        return l.createElement(
          "svg",
          s(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 32,
              height: 32,
              fill: "none",
              viewBox: "0 0 32 32",
            },
            e,
          ),
          o ||
            (o = l.createElement("rect", {
              width: 32,
              height: 32,
              fill: "url(#icon_share_instagram_svg__a)",
              rx: 16,
            })),
          i ||
            (i = l.createElement("rect", {
              width: 32,
              height: 32,
              fill: "url(#icon_share_instagram_svg__b)",
              rx: 16,
            })),
          r ||
            (r = l.createElement("path", {
              fill: "#fff",
              d: "M12.444 8A4.45 4.45 0 0 0 8 12.444v7.112A4.45 4.45 0 0 0 12.444 24h7.112A4.45 4.45 0 0 0 24 19.556v-7.112A4.45 4.45 0 0 0 19.556 8zm0 1.778h7.112a2.67 2.67 0 0 1 2.666 2.666v7.112a2.67 2.67 0 0 1-2.666 2.666h-7.112a2.67 2.67 0 0 1-2.666-2.666v-7.112a2.67 2.67 0 0 1 2.666-2.666m8 .889a.889.889 0 1 0 0 1.777.889.889 0 0 0 0-1.777M16 11.556A4.45 4.45 0 0 0 11.556 16 4.45 4.45 0 0 0 16 20.444 4.45 4.45 0 0 0 20.444 16 4.45 4.45 0 0 0 16 11.556m0 1.777A2.67 2.67 0 0 1 18.667 16 2.67 2.67 0 0 1 16 18.667 2.67 2.67 0 0 1 13.333 16 2.67 2.67 0 0 1 16 13.333",
            })),
          a ||
            (a = l.createElement(
              "defs",
              null,
              l.createElement(
                "radialGradient",
                {
                  id: "icon_share_instagram_svg__a",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientTransform:
                    "matrix(-18.97611 -39.29597 58.44828 -28.2248 27.04 36.32)",
                  gradientUnits: "userSpaceOnUse",
                },
                l.createElement("stop", {
                  offset: 0.244,
                  stopColor: "#FF1B90",
                }),
                l.createElement("stop", {
                  offset: 0.437,
                  stopColor: "#F80261",
                }),
                l.createElement("stop", {
                  offset: 0.688,
                  stopColor: "#ED00C0",
                }),
                l.createElement("stop", {
                  offset: 0.777,
                  stopColor: "#C500E9",
                }),
                l.createElement("stop", {
                  offset: 0.893,
                  stopColor: "#7017FF",
                }),
              ),
              l.createElement(
                "radialGradient",
                {
                  id: "icon_share_instagram_svg__b",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientTransform:
                    "matrix(10.17601 -15.93604 16.57575 10.5845 11.6 30.896)",
                  gradientUnits: "userSpaceOnUse",
                },
                l.createElement("stop", { stopColor: "#FFD600" }),
                l.createElement("stop", {
                  offset: 0.484,
                  stopColor: "#FF6930",
                }),
                l.createElement("stop", {
                  offset: 0.734,
                  stopColor: "#FE3B36",
                }),
                l.createElement("stop", {
                  offset: 1,
                  stopColor: "#FE3B36",
                  stopOpacity: 0,
                }),
              ),
            )),
        );
      };
    },
    91848: (e, t, n) => {
      n.d(t, { A: () => l });
      var o,
        i,
        r = n(14232);
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      let l = function (e) {
        return r.createElement(
          "svg",
          a(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 32,
              height: 32,
              fill: "none",
              viewBox: "0 0 32 32",
            },
            e,
          ),
          o ||
            (o = r.createElement("rect", {
              width: 32,
              height: 32,
              fill: "#3B5998",
              rx: 16,
            })),
          i ||
            (i = r.createElement("path", {
              fill: "#fff",
              d: "m19.476 17.438.415-2.715h-2.594v-1.762a1.36 1.36 0 0 1 .926-1.411c.193-.063.397-.082.598-.056H20v-2.31A14 14 0 0 0 17.907 9c-2.136 0-3.532 1.3-3.532 3.654v2.069H12v2.714h2.375V24h2.922v-6.562z",
            })),
        );
      };
    },
    94825: (e, t, n) => {
      n.d(t, { A: () => W });
      var o,
        i,
        r,
        a,
        l,
        s,
        c,
        d,
        p = n(37876),
        f = n(11639),
        h = n(14232),
        m = n(64137),
        u = n(94416),
        x = n(20340),
        g = n(76622),
        w = n(18857),
        j = n(18613),
        v = n(89893),
        b = n(28823),
        k = n(27415),
        C = n(53928),
        _ = n(4924),
        y = n(57355),
        S = n(33346);
      let E = (e) => {
        let {
            isMobile: t,
            shareUrl: n,
            isOpen: o,
            onClose: i,
            openShareModal: r,
            campaignId: a,
            screen: l,
          } = e,
          [s, c] = (0, h.useState)(""),
          [d, f] = (0, h.useState)(!0);
        (0, h.useEffect)(() => {
          (c((0, _._V)()),
            f(!0),
            setTimeout(() => {
              f(!1);
            }, 3e3));
        }, [o]);
        let x = (0, p.jsxs)(S.FQ, {
          flex: !0,
          justifyContent: "space-between",
          flexDirection: "column",
          rowGap: 24,
          padding: [48, 0, 8],
          children: [
            (0, p.jsxs)(m.wn, {
              flex: !0,
              justifyContent: "space-between",
              flexDirection: "column",
              rowGap: 24,
              children: [
                (0, p.jsx)(m.o5, {
                  fontFamily: k.a,
                  fontSizeDesktop: 20,
                  fontSizeMobile: 16,
                  weight: 700,
                  align: "center",
                  children:
                    "Criamos uma mensagem para voc\xea compartilhar no Messenger",
                }),
                (0, p.jsxs)(m.o5, {
                  fontFamily: k.f,
                  fontSizeMobile: 16,
                  fontSizeDesktop: 18,
                  align: "center",
                  children: [
                    "V\xe1 para o Messenger e ",
                    (0, p.jsx)("strong", {
                      children: "cole o texto na sua conversa",
                    }),
                  ],
                }),
              ],
            }),
            (0, p.jsxs)(m.wn, {
              flex: !0,
              flexDirection: "column",
              rowGap: 12,
              children: [
                (0, p.jsx)(b.tD, {
                  url: n,
                  appId: "384822005017520",
                  onClick: () => {
                    ((0, C.$s)("share-modal", "Messenger Share", l),
                      s &&
                        (0, u.$)({
                          eventName: "show-page-messenger-share",
                          properties: { campaign_id: a, screen: l },
                        }),
                      (0, y.V)(a, "messenger", l));
                  },
                  "data-tooltip-id": "share-messenger-tooltip",
                  children: (0, p.jsx)(m.$n, {
                    variant: "vakinha",
                    block: !0,
                    children: (0, p.jsx)(m.o5, {
                      fontFamily: k.a,
                      fontSize: 14,
                      weight: 700,
                      color: "white",
                      align: "center",
                      children: "Abrir o Messenger",
                    }),
                  }),
                }),
                (0, p.jsx)(v.m_, {
                  id: "share-messenger-tooltip",
                  place: "top",
                  isOpen: d,
                  content: "Texto copiado com sucesso!",
                  style: {
                    fontFamily: k.f,
                    fontSize: 12,
                    color: m.Tj.white,
                    background: m.Tj.gray400,
                    borderRadius: 8,
                    padding: "8px 12px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    textAlign: "center",
                    opacity: 1,
                  },
                }),
              ],
            }),
          ],
        });
        return t
          ? (0, p.jsx)(m.Co, {
              onClick: i,
              onClose: i,
              isVisible: o,
              children: x,
            })
          : (0, p.jsx)(m.dW, {
              onClose: () => {
                (i(), null == r || r());
              },
              isOpen: o,
              width: 600,
              padding: 16,
              children: x,
            });
      };
      var F = n(2449);
      let D = (e) => {
        let {
            isMobile: t,
            shareUrl: n,
            isOpen: o,
            onClose: i,
            openShareModal: r,
            title: a,
            campaignId: l,
            screen: s,
          } = e,
          [c, d] = (0, h.useState)(""),
          [f, x] = (0, h.useState)(!0);
        (0, h.useEffect)(() => {
          (d((0, _._V)()),
            x(!0),
            setTimeout(() => {
              x(!1);
            }, 3e3));
        }, [o]);
        let g = (0, p.jsxs)(S.FQ, {
          flex: !0,
          flexDirection: "column",
          justifyContent: "space-between",
          rowGap: 24,
          padding: [48, 0, 8],
          children: [
            (0, p.jsxs)(m.wn, {
              flex: !0,
              justifyContent: "space-between",
              flexDirection: "column",
              rowGap: 16,
              children: [
                (0, p.jsx)(m.o5, {
                  fontFamily: k.a,
                  fontSizeDesktop: 20,
                  fontSizeMobile: 16,
                  weight: 700,
                  align: "center",
                  children:
                    "Criamos uma mensagem para voc\xea compartilhar no LinkedIn",
                }),
                (0, p.jsxs)(m.o5, {
                  fontFamily: k.f,
                  fontSizeMobile: 16,
                  fontSizeDesktop: 18,
                  align: "center",
                  children: [
                    "V\xe1 para o Linkedin e ",
                    (0, p.jsx)("strong", {
                      children: "cole o texto na legenda da sua postagem",
                    }),
                  ],
                }),
              ],
            }),
            (0, p.jsxs)(m.wn, {
              flex: !0,
              flexDirection: "column",
              rowGap: 12,
              children: [
                (0, p.jsx)(b.wk, {
                  url: n,
                  beforeOnClick: () => {
                    ((0, C.$s)("share-modal", "LinkedIn Share", s),
                      c &&
                        (0, u.$)({
                          eventName: "show-page-linkedin-share",
                          properties: { campaign_id: l, screen: s },
                        }),
                      (0, y.V)(l, "linkedin", s));
                  },
                  title: a,
                  children: (0, p.jsx)(m.$n, {
                    variant: "vakinha",
                    block: !0,
                    "data-tooltip-id": "share-linkedin-tooltip",
                    children: (0, p.jsx)(m.o5, {
                      fontFamily: k.a,
                      fontSize: 14,
                      weight: 700,
                      color: "white",
                      align: "center",
                      children: "Abrir o LinkedIn",
                    }),
                  }),
                }),
                (0, p.jsx)(v.m_, {
                  id: "share-linkedin-tooltip",
                  place: "top",
                  isOpen: f,
                  content: "Texto copiado com sucesso!",
                  style: {
                    fontFamily: k.f,
                    fontSize: 12,
                    color: m.Tj.white,
                    background: m.Tj.gray400,
                    borderRadius: 8,
                    padding: "8px 12px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    textAlign: "center",
                    opacity: 1,
                  },
                }),
              ],
            }),
          ],
        });
        return t
          ? (0, p.jsx)(m.Co, {
              onClick: i,
              onClose: i,
              isVisible: o,
              children: g,
            })
          : (0, p.jsx)(m.dW, {
              onClose: () => {
                (i(), null == r || r());
              },
              isOpen: o,
              width: 600,
              padding: 16,
              children: g,
            });
      };
      function A() {
        return (A = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      let O = function (e) {
        return h.createElement(
          "svg",
          A(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 32,
              height: 32,
              fill: "none",
              viewBox: "0 0 32 32",
            },
            e,
          ),
          o ||
            (o = h.createElement(
              "g",
              { clipPath: "url(#icon_share_x_svg__a)" },
              h.createElement("rect", {
                width: 32,
                height: 32,
                fill: "#282828",
                rx: 16,
              }),
              h.createElement("path", {
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m11 11 7.333 10H21l-7.333-10zM11 21l4.23-4.23m1.537-1.537L21 11",
              }),
            )),
          i ||
            (i = h.createElement(
              "defs",
              null,
              h.createElement(
                "clipPath",
                { id: "icon_share_x_svg__a" },
                h.createElement("rect", {
                  width: 32,
                  height: 32,
                  fill: "#fff",
                  rx: 16,
                }),
              ),
            )),
        );
      };
      var z = n(97468),
        M = n(62748);
      function G() {
        return (G = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      let I = function (e) {
        return h.createElement(
          "svg",
          G(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 32,
              height: 32,
              fill: "none",
              viewBox: "0 0 32 32",
            },
            e,
          ),
          r ||
            (r = h.createElement("rect", {
              width: 32,
              height: 32,
              fill: "#17A2B8",
              rx: 16,
            })),
          a ||
            (a = h.createElement("path", {
              fill: "#fff",
              d: "M22.827 8.533H9.173c-.938 0-1.698.8-1.698 1.778l-.008 10.667c0 .977.768 1.777 1.706 1.777h13.654c.938 0 1.706-.8 1.706-1.777V10.31c0-.978-.768-1.778-1.706-1.778m0 12.445H9.173v-8.89L16 16.534l6.827-4.444zM16 14.755l-6.827-4.444h13.654z",
            })),
        );
      };
      var V = n(91848),
        B = n(64986);
      function T() {
        return (T = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      let U = function (e) {
        return h.createElement(
          "svg",
          T(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 32,
              height: 32,
              fill: "none",
              viewBox: "0 0 32 32",
            },
            e,
          ),
          l ||
            (l = h.createElement("rect", {
              width: 32,
              height: 32,
              fill: "#24CA68",
              rx: 16,
            })),
          s ||
            (s = h.createElement("path", {
              fill: "#fff",
              d: "M20.954 11.05A6.95 6.95 0 0 0 16.008 9c-3.854 0-6.991 3.135-6.993 6.99 0 1.231.322 2.434.933 3.494L9 23l3.663-.866c1.021.557 2.17.85 3.341.851h.003c3.853 0 6.99-3.136 6.992-6.99a6.95 6.95 0 0 0-2.045-4.945m-1.525 7.438c-.146.408-.86.801-1.18.83-.32.03-.62.145-2.096-.437-1.776-.7-2.898-2.52-2.984-2.637-.088-.117-.714-.947-.714-1.806s.452-1.283.612-1.457a.64.64 0 0 1 .466-.219c.116 0 .233 0 .335.005.124.005.262.01.393.301.156.346.495 1.21.539 1.298.043.087.072.19.014.305-.058.117-.087.19-.174.292-.088.102-.184.227-.262.306-.087.086-.178.181-.077.356.102.175.452.747.972 1.21.668.594 1.23.778 1.405.867.175.087.276.072.378-.044a10 10 0 0 0 .553-.685c.116-.175.233-.146.394-.087.16.058 1.019.48 1.193.568s.291.13.335.204c.043.072.043.422-.102.83",
            })),
        );
      };
      var L = n(86438),
        $ = n(94094),
        P = n(68239);
      function R() {
        return (R = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      let H = function (e) {
        return h.createElement(
          "svg",
          R(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 32,
              height: 32,
              fill: "none",
              viewBox: "0 0 32 32",
            },
            e,
          ),
          c ||
            (c = h.createElement(
              "g",
              { filter: "url(#icon_share_facebook_messenger_svg__a)" },
              h.createElement("rect", {
                width: 32,
                height: 32,
                fill: "url(#icon_share_facebook_messenger_svg__b)",
                rx: 16,
              }),
              h.createElement("path", {
                fill: "#fff",
                d: "M16 8c-4.512 0-8 3.304-8 7.76 0 2.328.952 4.352 2.512 5.736.128.104.208.28.216.456l.04 1.424c.032.456.488.752.904.568l1.584-.696c.136-.048.288-.072.424-.048.72.216 1.52.32 2.32.32 4.512 0 8-3.304 8-7.76S20.512 8 16 8m4.8 5.968-2.344 3.736A1.19 1.19 0 0 1 16.72 18l-1.872-1.384a.48.48 0 0 0-.576 0l-2.528 1.92c-.336.264-.776-.136-.544-.504l2.344-3.736a1.21 1.21 0 0 1 1.736-.32l1.872 1.408a.48.48 0 0 0 .576 0l2.528-1.92c.336-.264.776.136.544.504",
              }),
            )),
          d ||
            (d = h.createElement(
              "defs",
              null,
              h.createElement(
                "linearGradient",
                {
                  id: "icon_share_facebook_messenger_svg__b",
                  x1: 5,
                  x2: 27.5,
                  y1: 32,
                  y2: 1.5,
                  gradientUnits: "userSpaceOnUse",
                },
                h.createElement("stop", { stopColor: "#2771E9" }),
                h.createElement("stop", {
                  offset: 0.341,
                  stopColor: "#792EE7",
                }),
                h.createElement("stop", { offset: 0.69, stopColor: "#A82ACC" }),
                h.createElement("stop", { offset: 1, stopColor: "#D5504B" }),
              ),
              h.createElement(
                "filter",
                {
                  id: "icon_share_facebook_messenger_svg__a",
                  width: 32,
                  height: 32,
                  x: 0,
                  y: 0,
                  colorInterpolationFilters: "sRGB",
                  filterUnits: "userSpaceOnUse",
                },
                h.createElement("feFlood", {
                  floodOpacity: 0,
                  result: "BackgroundImageFix",
                }),
                h.createElement("feBlend", {
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                h.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  result: "hardAlpha",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                }),
                h.createElement("feOffset", null),
                h.createElement("feGaussianBlur", { stdDeviation: 4 }),
                h.createElement("feComposite", {
                  in2: "hardAlpha",
                  k2: -1,
                  k3: 1,
                  operator: "arithmetic",
                }),
                h.createElement("feColorMatrix", {
                  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0",
                }),
                h.createElement("feBlend", {
                  in2: "shape",
                  result: "effect1_innerShadow_2011_5380",
                }),
              ),
            )),
        );
      };
      var N = n(72787);
      let Q = (e) => {
          let {
              user: t,
              shareUrl: n,
              twitterUrl: o,
              whatsappUrl: i,
              isMobile: r,
              shareAssets: a,
              preparedShareCards: l,
              title: s,
              campaign: c,
              openFacebook: d,
              openMessenger: f,
              openGeneral: x,
              openLinkedin: g,
              onClose: w,
              shareDescription: j,
              app: v,
              defaultBackgroundIndex: E,
              screen: F,
            } = e,
            [D, A] = (0, h.useState)(!1),
            [G, T] = (0, h.useState)(!1),
            [R, Q] = (0, h.useState)(""),
            [W] = (0, h.useState)((0, z.kh)()),
            [q] = (0, h.useState)((0, z.Hr)()),
            X = (0, h.useRef)(!1),
            K = (0, h.useRef)(!1),
            Y = (0, h.useRef)(0),
            J = (0, h.useRef)(0),
            { status: Z, postCards: ee, storyCards: et } = a,
            en = (e) => (0, C.$s)("share-modal", e, F),
            eo = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              R &&
                (0, u.$)({
                  eventName: e,
                  properties: { campaign_id: c.id, screen: F, ...t },
                });
            },
            ei = (0, $.c)(v, Z, ee),
            er = (0, $.c)(v, Z, et),
            ea = W || q,
            el = async () => {
              (navigator.clipboard.writeText(j), x(), w());
            },
            es = () => A(!1),
            ec = () => T(!1);
          return (
            (0, h.useEffect)(() => {
              let e = (e) => {
                "Escape" === e.key &&
                  (D || G) &&
                  (e.preventDefault(),
                  e.stopImmediatePropagation(),
                  es(),
                  ec());
              };
              return (
                window.addEventListener("keydown", e, !0),
                () => window.removeEventListener("keydown", e, !0)
              );
            }, [G, D]),
            (0, h.useEffect)(() => {
              Q((0, _._V)());
            }, []),
            (0, h.useEffect)(() => {
              if (
                (G && !X.current && (Y.current += 1),
                (X.current = G),
                R && "loading" !== ei && 0 !== Y.current)
              )
                for (; Y.current > 0; )
                  (eo("show-page-ig-feed-open", {
                    has_assets: "assets" === ei,
                  }),
                    (Y.current -= 1));
            }, [R, ei, G]),
            (0, h.useEffect)(() => {
              if (
                (D && !K.current && (J.current += 1),
                (K.current = D),
                R && "loading" !== er && 0 !== J.current)
              )
                for (; J.current > 0; )
                  (eo("show-page-ig-story-open", {
                    has_assets: "assets" === er,
                  }),
                    (J.current -= 1));
            }, [R, D, er]),
            (0, p.jsxs)(S.FQ, {
              flex: !0,
              flexDirection: "column",
              justifyContent: "space-between",
              rowGap: 24,
              padding: [0, 0, 8],
              children: [
                (0, p.jsxs)(m.wn, {
                  flex: !0,
                  flexDirection: "column",
                  rowGap: 24,
                  children: [
                    (0, p.jsxs)(m.wn, {
                      flex: !0,
                      flexDirection: "column",
                      rowGap: 12,
                      children: [
                        (0, p.jsx)(m.o5, {
                          fontFamily: k.a,
                          fontSizeDesktop: 18,
                          fontSizeMobile: 16,
                          weight: 700,
                          children: "Compartilhamento r\xe1pido",
                        }),
                        (0, p.jsxs)(m.wn, {
                          flex: !0,
                          flexDirection: "column",
                          rowGap: 4,
                          children: [
                            (0, p.jsx)(m.o5, {
                              fontFamily: k.f,
                              weight: 700,
                              children: "Link da vaquinha:",
                            }),
                            (0, p.jsx)(M.A, {
                              url: n,
                              onCopied: () => (0, y.V)(c.id, "copy_link", F),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, p.jsxs)(m.wn, {
                      flex: !0,
                      flexDirection: "column",
                      rowGap: 16,
                      children: [
                        (0, p.jsx)(m.o5, {
                          fontFamily: k.a,
                          fontSizeDesktop: 18,
                          fontSizeMobile: 16,
                          weight: 700,
                          children:
                            "Compartilhe tamb\xe9m nas redes sociais e alcance ainda mais doadores",
                        }),
                        (0, p.jsx)(m.o5, {
                          fontFamily: k.f,
                          fontSizeDesktop: 18,
                          fontSizeMobile: 16,
                          children: j,
                        }),
                      ],
                    }),
                    (0, p.jsxs)(S.e_, {
                      canShare: ea,
                      justifyContent: "center",
                      alignItems: "center",
                      flex: !0,
                      flexDirection: "column",
                      padding: [16, 0, 0],
                      children: [
                        (0, p.jsxs)(m.wn, {
                          flex: !0,
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                          rowGap: 4,
                          onClick: () => {
                            (navigator.clipboard.writeText(j), d(), w());
                          },
                          cursor: "pointer",
                          children: [
                            (0, p.jsx)(V.A, {}),
                            (0, p.jsx)(m.o5, {
                              fontFamily: k.f,
                              fontSize: 16,
                              children: "Facebook",
                            }),
                          ],
                        }),
                        ea &&
                          (0, p.jsxs)(m.wn, {
                            flex: !0,
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            rowGap: 4,
                            onClick: () => {
                              (T(!1), A(!0));
                            },
                            cursor: "pointer",
                            children: [
                              (0, p.jsx)(L.A, {}),
                              (0, p.jsx)(m.o5, {
                                fontFamily: k.f,
                                fontSize: 16,
                                children: "Story",
                              }),
                            ],
                          }),
                        (0, p.jsx)(S.v4, {
                          url: i,
                          beforeOnClick: () => {
                            (en("WPP Share"),
                              eo("show-page-wpp-share"),
                              (0, y.V)(c.id, "whatsapp", F));
                          },
                          title: j,
                          children: (0, p.jsxs)(m.wn, {
                            flex: !0,
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            rowGap: 4,
                            children: [
                              (0, p.jsx)(U, {}),
                              (0, p.jsx)(m.o5, {
                                fontFamily: k.f,
                                fontSize: 16,
                                children: "Whatsapp",
                              }),
                            ],
                          }),
                        }),
                        (0, p.jsx)(S.Q, {
                          url: o,
                          beforeOnClick: () => {
                            (en("X Share"),
                              eo("show-page-x-share"),
                              (0, y.V)(c.id, "x", F));
                          },
                          title: j,
                          children: (0, p.jsxs)(m.wn, {
                            flex: !0,
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            rowGap: 4,
                            children: [
                              (0, p.jsx)(O, {}),
                              (0, p.jsx)(m.o5, {
                                fontFamily: k.f,
                                fontSize: 16,
                                children: "X",
                              }),
                            ],
                          }),
                        }),
                        (0, p.jsxs)(m.wn, {
                          flex: !0,
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                          rowGap: 4,
                          onClick: () => {
                            (navigator.clipboard.writeText(j), f(), w());
                          },
                          children: [
                            (0, p.jsx)(H, {}),
                            (0, p.jsx)(m.o5, {
                              fontFamily: k.f,
                              fontSize: 16,
                              children: "Messenger",
                            }),
                          ],
                        }),
                        ea &&
                          (0, p.jsxs)(m.wn, {
                            flex: !0,
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            rowGap: 4,
                            onClick: () => {
                              (A(!1), T(!0));
                            },
                            cursor: "pointer",
                            children: [
                              (0, p.jsx)(L.A, {}),
                              (0, p.jsx)(m.o5, {
                                fontFamily: k.f,
                                fontSize: 16,
                                children: "Feed",
                              }),
                            ],
                          }),
                        (0, p.jsxs)(m.wn, {
                          flex: !0,
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                          rowGap: 4,
                          onClick: () => {
                            (navigator.clipboard.writeText(j), g(), w());
                          },
                          cursor: "pointer",
                          children: [
                            (0, p.jsx)(B.A, {}),
                            (0, p.jsx)(m.o5, {
                              fontFamily: k.f,
                              fontSize: 16,
                              children: "LinkedIn",
                            }),
                          ],
                        }),
                        (0, p.jsx)(m.wn, {
                          onClick: () => {
                            (en("Email Share"),
                              eo("show-page-email-share"),
                              (0, y.V)(c.id, "email", F));
                          },
                          flex: !0,
                          justifyContent: "center",
                          children: (0, p.jsx)(b.Ot, {
                            url: n,
                            subject: s,
                            body: j,
                            children: (0, p.jsxs)(m.wn, {
                              flex: !0,
                              justifyContent: "center",
                              flexDirection: "column",
                              alignItems: "center",
                              rowGap: 4,
                              children: [
                                (0, p.jsx)(I, {}),
                                (0, p.jsx)(m.o5, {
                                  fontFamily: k.f,
                                  fontSize: 16,
                                  children: "E-mail",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, p.jsx)(m.wn, {
                  flex: !0,
                  fluid: !0,
                  flexDirection: "column",
                  rowGap: 12,
                  children:
                    r &&
                    W &&
                    (0, p.jsx)(m.$n, {
                      variant: "dark",
                      onClick: el,
                      block: !0,
                      children: (0, p.jsx)(m.o5, {
                        fontFamily: k.a,
                        fontSize: 14,
                        weight: 700,
                        align: "center",
                        color: "white",
                        children: "Compartilhar",
                      }),
                    }),
                }),
                (0, p.jsx)(P.A, {
                  isMobile: r,
                  isOpen: D,
                  onClose: es,
                  children:
                    D &&
                    (0, p.jsx)(N.A, {
                      format: "story",
                      user: t,
                      campaign: c,
                      app: v,
                      title: s,
                      isMobile: r,
                      shareUrl: n,
                      shareDescription: j,
                      shareAssets: a,
                      preparation: l,
                      defaultBackgroundIndex: E,
                      onShare: (e, t) => {
                        (en("IG Story Share"),
                          eo("show-page-ig-story-share", {
                            template_id: e,
                            has_assets: t,
                          }),
                          (0, y.V)(c.id, "instagram_story", F));
                      },
                    }),
                }),
                (0, p.jsx)(P.A, {
                  isMobile: r,
                  isOpen: G,
                  onClose: ec,
                  children:
                    G &&
                    (0, p.jsx)(N.A, {
                      format: "post",
                      user: t,
                      campaign: c,
                      app: v,
                      title: s,
                      isMobile: r,
                      shareUrl: n,
                      shareDescription: j,
                      shareAssets: a,
                      preparation: l,
                      defaultBackgroundIndex: E,
                      onShare: (e, t) => {
                        (en("IG Feed Share"),
                          eo("show-page-ig-feed-share", {
                            template_id: e,
                            has_assets: t,
                          }),
                          (0, y.V)(c.id, "instagram_feed", F));
                      },
                    }),
                }),
              ],
            })
          );
        },
        W = (e) => {
          let {
              user: t,
              campaign: n,
              isMobile: o,
              isOpenModalSocialMedia: i,
              setIsOpenModalSocialMedia: r,
              app: a = "Vakinha",
              shareDescription: l,
              defaultBackgroundIndex: s,
              screen: c,
              onClosePrimaryModal: d,
            } = e,
            {
              slug: v,
              title: b,
              facebookUrl: k,
              whatsappUrl: C,
              twitterUrl: _,
            } = n,
            [y, S] = (0, h.useState)(!1),
            [A, O] = (0, h.useState)(!1),
            [z, M] = (0, h.useState)(!1),
            [G, I] = (0, h.useState)(!1),
            V = (0, g.O)(n.id, i && "Vakinha" === a),
            B = (0, w.B)(n.id, V.cards),
            T = () => {
              let e = (0, x.vY)(),
                t = new URLSearchParams();
              return (
                (null == e ? void 0 : e.source) &&
                  t.set("utm_source", e.source),
                (null == e ? void 0 : e.utm_medium) &&
                  t.set("utm_medium", e.utm_medium),
                (null == e ? void 0 : e.utm_campaign) &&
                  t.set("utm_campaign", e.utm_campaign),
                (null == e ? void 0 : e.utm_campaign_id) &&
                  t.set("utm_campaign_id", e.utm_campaign_id),
                t.toString() ? "?".concat(t) : ""
              );
            },
            U = () =>
              "Vakinha" === a
                ? (() => {
                    let e = ""
                        .concat("https://www.vakinha.com.br", "/vaquinha/")
                        .concat(v),
                      t = T();
                    return "".concat(e).concat(t);
                  })()
                : (() => {
                    let e = ""
                        .concat("https://vakinhadasorte.com.br", "/")
                        .concat(v),
                      t = T();
                    return "".concat(e).concat(t);
                  })();
          (0, h.useEffect)(() => {
            new URLSearchParams(window.location.search).has("openModal") &&
              r(!0);
          }, []);
          let L = () => {
              (0, h.startTransition)(() => {
                r(!0);
              });
            },
            $ = () => {
              (d && d(),
                (0, h.startTransition)(() => {
                  r(!1);
                }));
            },
            P = () => S(!0),
            R = () => S(!1),
            H = () => O(!0),
            N = () => O(!1),
            W = () => M(!0),
            q = () => M(!1),
            X = () => I(!0),
            K = () => I(!1),
            Y = y || A || z || G;
          return (
            (0, h.useEffect)(() => {
              let e = (e) => {
                if ("Escape" === e.key && (Y || i)) {
                  if ((e.preventDefault(), e.stopImmediatePropagation(), Y)) {
                    (R(), N(), q(), K(), L());
                    return;
                  }
                  $();
                }
              };
              return (
                document.addEventListener("keydown", e, !0),
                () => document.removeEventListener("keydown", e, !0)
              );
            }, [Y, i]),
            (0, p.jsxs)(f.Container, {
              children: [
                o
                  ? (0, p.jsx)(m.Co, {
                      onClose: $,
                      onClick: () => {
                        ((0, u.$)({
                          eventName: "show-campaign-open-share-modal",
                          properties: { campaign_id: n.id, screen: c },
                        }),
                          (0, h.startTransition)(() => {
                            r(!0);
                          }));
                      },
                      isVisible: i,
                      children: (0, p.jsx)(Q, {
                        shareUrl: U(),
                        openFacebook: P,
                        openMessenger: H,
                        openLinkedin: W,
                        openGeneral: X,
                        shareDescription: l,
                        onClose: $,
                        facebookUrl: k,
                        whatsappUrl: C,
                        twitterUrl: _,
                        isMobile: o,
                        shareAssets: V,
                        preparedShareCards: B,
                        campaign: n,
                        defaultBackgroundIndex: s,
                        user: t,
                        title: b,
                        app: a,
                        screen: c,
                      }),
                    })
                  : (0, p.jsx)(m.dW, {
                      isOpen: i,
                      onClose: $,
                      width: 600,
                      padding: 16,
                      children: (0, p.jsx)(Q, {
                        shareUrl: U(),
                        openFacebook: P,
                        openMessenger: H,
                        openLinkedin: W,
                        openGeneral: X,
                        shareDescription: l,
                        onClose: $,
                        facebookUrl: k,
                        whatsappUrl: C,
                        twitterUrl: _,
                        isMobile: o,
                        shareAssets: V,
                        preparedShareCards: B,
                        campaign: n,
                        defaultBackgroundIndex: s,
                        user: t,
                        title: b,
                        app: a,
                        screen: c,
                      }),
                    }),
                (0, p.jsx)(j.A, {
                  isMobile: o,
                  facebookUrl: k,
                  isOpen: y,
                  onClose: R,
                  openShareModal: L,
                  campaignId: n.id,
                  screen: c,
                }),
                (0, p.jsx)(E, {
                  isMobile: o,
                  shareUrl: U(),
                  isOpen: A,
                  onClose: N,
                  openShareModal: L,
                  campaignId: n.id,
                  screen: c,
                }),
                (0, p.jsx)(D, {
                  isMobile: o,
                  shareUrl: U(),
                  isOpen: z,
                  onClose: q,
                  openShareModal: L,
                  title: b,
                  campaignId: n.id,
                  screen: c,
                }),
                (0, p.jsx)(F.A, {
                  isMobile: o,
                  shareUrl: U(),
                  isOpen: G,
                  onClose: K,
                  openShareModal: L,
                  title: b,
                  shareDescription: l,
                  campaignId: n.id,
                  screen: c,
                }),
              ],
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=4825-2d54873b40e0fa1a.js.map
