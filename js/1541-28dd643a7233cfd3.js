"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1541],
  {
    18857: (e, t, r) => {
      r.d(t, { B: () => i });
      var n = r(14232);
      let a = (e, t) =>
          "".concat(e, ":").concat(t.templateId, ":").concat(t.url),
        i = function (e, t) {
          let r =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            i = (0, n.useRef)(new Map()),
            o = (0, n.useRef)(new Map()),
            l = (0, n.useRef)(new Set()),
            s = (0, n.useRef)(new Map()),
            c = (0, n.useRef)(!0),
            [, d] = (0, n.useState)(0),
            u = (0, n.useCallback)(() => {
              c.current && d((e) => e + 1);
            }, []),
            g = (0, n.useCallback)(
              (t) => {
                let r = a(e, t);
                if (i.current.has(r) || o.current.has(r)) return;
                let n = "vakinha-".concat(e, "-").concat(t.templateId),
                  c = "/api/share-card?url="
                    .concat(encodeURIComponent(t.url), "&filename=")
                    .concat(encodeURIComponent(n)),
                  d = new AbortController();
                (s.current.set(r, d), l.current.delete(r));
                let g = fetch(c, { signal: d.signal })
                  .then((e) => {
                    if (!e.ok)
                      throw Error(
                        "Unable to prepare share card: ".concat(e.status),
                      );
                    return e.blob();
                  })
                  .then((e) => {
                    let t = new File([e], "".concat(n, ".png"), {
                        type: e.type || "image/png",
                      }),
                      a = !1;
                    try {
                      var o, l;
                      a =
                        "function" == typeof navigator.share &&
                        (null == (o = (l = navigator).canShare)
                          ? void 0
                          : o.call(l, { files: [t] })) === !0;
                    } catch (e) {
                      a = !1;
                    }
                    i.current.set(r, { file: t, filename: n, canShare: a });
                  })
                  .catch((e) => {
                    (e instanceof Error && "AbortError" === e.name) ||
                      l.current.add(r);
                  })
                  .finally(() => {
                    (s.current.delete(r), o.current.delete(r), u());
                  });
                (o.current.set(r, g), u());
              },
              [e, u],
            ),
            h = (0, n.useCallback)((t) => i.current.get(a(e, t)), [e]),
            f = (0, n.useCallback)((t) => o.current.has(a(e, t)), [e]),
            A = (0, n.useCallback)((t) => l.current.has(a(e, t)), [e]),
            p = (0, n.useCallback)(
              (t) => {
                let r = a(e, t);
                (l.current.delete(r), i.current.delete(r), g(t));
              },
              [e, g],
            );
          return (
            (0, n.useEffect)(() => {
              r && t.forEach(g);
            }, [r, g, t]),
            (0, n.useEffect)(
              () => (
                (c.current = !0),
                () => {
                  ((c.current = !1), s.current.forEach((e) => e.abort()));
                }
              ),
              [],
            ),
            {
              getPreparedCard: h,
              isPreparingCard: f,
              hasPreparationError: A,
              retryPreparation: p,
            }
          );
        };
    },
    42409: (e, t, r) => {
      r.d(t, { A: () => v });
      var n = r(37876),
        a = r(15558),
        i = r.n(a),
        o = r(14232),
        l = r(64137),
        s = r(76082),
        c = r(88406),
        d = r(53928),
        u = r(27415),
        g = r(95329);
      let h = g.default.div.withConfig({ componentId: "sc-2d7fc218-0" })([
          "position:relative;display:flex;",
        ]),
        f = (0, g.default)(l.hh).withConfig({ componentId: "sc-2d7fc218-1" })([
          "position:absolute;right:16px;bottom:50%;transform:translateY(50%);",
        ]),
        A = (0, g.keyframes)(["0%{opacity:1;}70%{opacity:1;}100%{opacity:0;}"]),
        p = (0, g.default)(l.wn).withConfig({ componentId: "sc-2d7fc218-2" })(
          ["position:absolute;right:46px;bottom:8px;", ""],
          (e) => {
            let { isFading: t } = e;
            return t && (0, g.css)(["animation:", " 2s ease-in-out;"], A);
          },
        ),
        m = g.default.textarea.withConfig({ componentId: "sc-2d7fc218-3" })(
          [
            "padding:12px 50px 12px 12px;height:100px;width:100%;resize:none;border:1px solid ",
            ";border-radius:8px;",
            "",
          ],
          l.Tj.gray300,
          (e) => {
            let { disabled: t } = e;
            return (
              t &&
              (0, g.css)(
                ["background-color:", ";color:", ";pointer-events:none;"],
                l.Tj.gray200,
                l.Tj.gray350,
              )
            );
          },
        ),
        v = (e) => {
          let {
              text: t,
              category: r,
              action: a,
              label: g,
              onCopied: A,
              content: v,
              iconHighlight: x,
              disabled: C,
              hiddenUrlToCopy: E,
            } = e,
            w = (0, o.useRef)(),
            [b, I] = (0, o.useState)(!1),
            j = () => {
              C || (null == A || A(), I(!0), setTimeout(() => I(!1), 2e3));
            };
          return (
            (0, o.useEffect)(() => {
              if (C) return;
              let e = new (i())(w.current, { text: () => E || t });
              return (
                e.on("success", (e) => {
                  ((0, d.$s)(r, a, g), e.clearSelection());
                }),
                () => e.destroy()
              );
            }, [t]),
            (0, n.jsxs)(h, {
              ref: w,
              children: [
                (0, n.jsx)(m, { value: t, disabled: C, readOnly: !0 }),
                (0, n.jsx)(f, {
                  color: C ? "gray300" : x || b ? "green400" : "gray400",
                  children: b
                    ? (0, n.jsx)(c.A, { onClick: j })
                    : (0, n.jsx)(s.A, { onClick: j }),
                }),
                b && !C
                  ? (0, n.jsx)(p, {
                      backgroundColor: "gray600",
                      padding: [8, 16],
                      borderRadius: 8,
                      isFading: b,
                      children: (0, n.jsx)(l.o5, {
                        fontFamily: u.f,
                        fontSize: 12,
                        color: "white",
                        children: v || "Copiado com sucesso",
                      }),
                    })
                  : null,
              ],
            })
          );
        };
    },
    57355: (e, t, r) => {
      r.d(t, { V: () => o });
      var n = r(94416);
      let a = {
          "campaign-show": "show-page",
          "campaign-statistics": "statistics",
          "prize-vakinha-show": "prize-vakinha",
          "post-checkout-spotlight": "post-checkout",
          "post-checkout-meta-spotlight": "post-checkout",
        },
        i = /^\d+$/,
        o = (e, t, r) => {
          var o;
          let l = i.test(String(e)) ? Number(e) : e;
          (0, n.$)({
            eventName: "campaign-share",
            properties: {
              vakinha_id: l,
              channel: t,
              screen: null != (o = a[r]) ? o : r,
            },
          });
        };
    },
    62748: (e, t, r) => {
      r.d(t, { A: () => v });
      var n = r(37876),
        a = r(15558),
        i = r.n(a),
        o = r(14232),
        l = r(64137),
        s = r(76082),
        c = r(88406),
        d = r(53928),
        u = r(27415),
        g = r(95329);
      let h = (0, g.default)(l.hh).withConfig({ componentId: "sc-8488198c-0" })(
          ["position:absolute;right:16px;bottom:12px;"],
        ),
        f = (0, g.keyframes)(["0%{opacity:1;}70%{opacity:1;}100%{opacity:0;}"]),
        A = (0, g.default)(l.wn).withConfig({ componentId: "sc-8488198c-1" })(
          ["position:absolute;right:46px;bottom:8px;", ""],
          (e) => {
            let { isFading: t } = e;
            return t && (0, g.css)(["animation:", " 2s ease-in-out;"], f);
          },
        ),
        p = g.default.div.withConfig({ componentId: "sc-8488198c-2" })([
          "position:relative;display:flex;",
        ]),
        m = (0, g.default)(l.pd).withConfig({ componentId: "sc-8488198c-3" })(
          [
            "padding-right:50px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",
            "",
          ],
          (e) => {
            let { disabled: t } = e;
            return (
              t &&
              (0, g.css)(
                ["background-color:", ";color:", ";pointer-events:none;"],
                l.Tj.gray200,
                l.Tj.gray350,
              )
            );
          },
        ),
        v = (e) => {
          let {
              url: t,
              category: r,
              action: a,
              label: g,
              onCopied: f,
              content: v,
              iconHighlight: x,
              disabled: C,
              hiddenUrlToCopy: E,
            } = e,
            w = (0, o.useRef)(),
            [b, I] = (0, o.useState)(!1),
            j = () => {
              C || (null == f || f(), I(!0), setTimeout(() => I(!1), 2e3));
            };
          return (
            (0, o.useEffect)(() => {
              if (C) return;
              let e = new (i())(w.current, { text: () => E || t });
              return (
                e.on("success", (e) => {
                  ((0, d.$s)(r, a, g), e.clearSelection());
                }),
                () => e.destroy()
              );
            }, [t]),
            (0, n.jsxs)(p, {
              ref: w,
              children: [
                (0, n.jsx)(m, { value: t, disabled: C, readOnly: !0 }),
                (0, n.jsx)(h, {
                  color: C ? "gray300" : x || b ? "green400" : "gray400",
                  children: b
                    ? (0, n.jsx)(c.A, { onClick: j })
                    : (0, n.jsx)(s.A, { onClick: j }),
                }),
                b && !C
                  ? (0, n.jsx)(A, {
                      backgroundColor: "gray600",
                      padding: [8, 16],
                      borderRadius: 8,
                      isFading: b,
                      children: (0, n.jsx)(l.o5, {
                        fontFamily: u.f,
                        fontSize: 12,
                        color: "white",
                        children: v || "Copiado com sucesso",
                      }),
                    })
                  : null,
              ],
            })
          );
        };
    },
    67980: (e, t, r) => {
      r.d(t, { A: () => b });
      var n = r(37876);
      r(34652);
      var a = r(14232),
        i = r(27888),
        o = r(64137),
        l = r(27415),
        s = r(65992),
        c = r(18857),
        d = r(95329),
        u = r(21040),
        g = r(1917);
      let h = d.default.button.withConfig({ componentId: "sc-b030839b-0" })(
          [
            "display:flex;flex-shrink:0;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:none;border-radius:50%;background-color:",
            ";cursor:",
            ";opacity:",
            ";:focus{outline:none;}",
          ],
          o.Tj.gray200,
          (e) => {
            let { disabled: t } = e;
            return t ? "default" : "pointer";
          },
          (e) => {
            let { disabled: t } = e;
            return t ? 0.4 : 1;
          },
        ),
        f = (0, d.default)(u.A).withConfig({ componentId: "sc-b030839b-1" })(
          ["&&&{font-size:20px;color:", ";}"],
          o.Tj.gray350,
        ),
        A = (0, d.default)(g.A).withConfig({ componentId: "sc-b030839b-2" })(
          ["&&&{font-size:20px;color:", ";}"],
          o.Tj.gray350,
        ),
        p = (0, d.default)(o.wn).withConfig({ componentId: "sc-b030839b-3" })([
          "width:100%;max-width:320px;align-self:center;position:relative;",
        ]),
        m = d.default.img.withConfig({ componentId: "sc-b030839b-4" })(
          [
            "display:block;width:100%;height:",
            "px;object-fit:contain;border-radius:12px;opacity:",
            ";transition:opacity 0.3s ease;",
          ],
          (e) => {
            let { compact: t, hasSingleSlide: r } = e;
            return t ? (r ? 340 : 320) : r ? 420 : 400;
          },
          (e) => {
            let { loaded: t } = e;
            return +!!t;
          },
        ),
        v = d.default.div.withConfig({ componentId: "sc-b030839b-5" })([
          "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;",
        ]),
        x = d.default.button.withConfig({ componentId: "sc-b030839b-6" })(
          [
            "border:none;background:",
            ";width:8px;height:4px;border-radius:8px;margin:0 4px;cursor:",
            ";:focus{outline:none;}",
          ],
          (e) => {
            let { active: t } = e;
            return t ? o.Tj.gray350 : o.Tj.gray300;
          },
          (e) => {
            let { isCursorDefault: t } = e;
            return t ? "default" : "pointer";
          },
        ),
        C = (e) => {
          let { slideIndex: t, active: r, onSelect: a } = e;
          return (0, n.jsx)(x, {
            active: r,
            isCursorDefault: r,
            onClick: () => a(t),
            "aria-label": "Selecionar card ".concat(t + 1),
          });
        },
        E = (e) => {
          let { direction: t, disabled: r, onSelect: a } = e,
            i = "previous" === t;
          return (0, n.jsx)(h, {
            type: "button",
            disabled: r,
            onClick: () => a(t),
            "aria-label": i ? "Card anterior" : "Pr\xf3ximo card",
            children: i ? (0, n.jsx)(f, {}) : (0, n.jsx)(A, {}),
          });
        },
        w = (e) => {
          let {
              card: t,
              loaded: r,
              hasSingleSlide: a,
              compact: i,
              onImageLoaded: o,
            } = e,
            l = () => o(t.templateId);
          return (0, n.jsx)(m, {
            ref: (e) => {
              (null == e ? void 0 : e.complete) && l();
            },
            src: t.url,
            alt: "Card da sua vaquinha",
            loaded: r,
            hasSingleSlide: a,
            compact: i,
            onLoad: l,
            onError: l,
          });
        },
        b = (e) => {
          let {
              shareCards: t,
              campaignId: r,
              nativeActionLabel: d = "Compartilhar imagem",
              downloadActionLabel: u = "Baixar imagem",
              shareTitle: g = "Compartilhar imagem",
              shareText: h,
              header: f,
              children: A,
              preparation: m,
              showArrows: x = !1,
              allowNativeShare: b = !0,
              compact: I = !1,
              onAction: j,
              onNativeShare: B,
            } = e,
            [y, F] = (0, a.useState)(0),
            [R, S] = (0, a.useState)(null),
            [k, z] = (0, a.useState)(new Set()),
            Q = (0, a.useRef)(),
            T = (0, c.B)(r, t, !m),
            M = m || T,
            P = t[y],
            q = P ? M.getPreparedCard(P) : void 0,
            Y = !!P && M.isPreparingCard(P),
            X = !!P && M.hasPreparationError(P),
            Z = k.size >= t.length,
            O = 1 === t.length,
            G = b && (null == q ? void 0 : q.canShare) === !0,
            V = x && !O,
            L = (e) => {
              z((t) => (t.has(e) ? t : new Set(t).add(e)));
            },
            D = (e) => {
              var t;
              return null == (t = Q.current) ? void 0 : t.slideTo(e);
            },
            U = (e) => {
              var t, r;
              if ("previous" === e) {
                null == (r = Q.current) || r.slidePrev();
                return;
              }
              null == (t = Q.current) || t.slideNext();
            },
            H = async () => {
              if (P && !Y) {
                if (!q) {
                  X && M.retryPreparation(P);
                  return;
                }
                if ((null == j || j(P), G))
                  try {
                    (null == B || B(P),
                      await navigator.share({
                        title: g,
                        text: h,
                        files: [q.file],
                      }));
                    return;
                  } catch (e) {
                    if (e instanceof Error && "AbortError" === e.name) return;
                  }
                ((e) => {
                  let t = URL.createObjectURL(e.file),
                    r = document.createElement("a");
                  ((r.href = t),
                    (r.download = "".concat(e.filename, ".png")),
                    document.body.appendChild(r),
                    r.click(),
                    r.remove(),
                    setTimeout(() => URL.revokeObjectURL(t), 0));
                })(q);
              }
            },
            K = (0, n.jsxs)(p, {
              children: [
                !Z &&
                  (0, n.jsx)(v, {
                    children: (0, n.jsx)(s.A, { color: o.Tj.green400 }),
                  }),
                (0, n.jsx)(i.RC, {
                  slidesPerView: 1,
                  spaceBetween: 16,
                  centeredSlides: !0,
                  onSwiper: (e) => {
                    ((Q.current = e), S(e));
                  },
                  onSlideChange: (e) => {
                    F(e.activeIndex);
                  },
                  children: t.map((e) =>
                    (0, n.jsx)(
                      i.qr,
                      {
                        children: (0, n.jsx)(w, {
                          card: e,
                          loaded: Z,
                          hasSingleSlide: O,
                          compact: I,
                          onImageLoaded: L,
                        }),
                      },
                      e.templateId,
                    ),
                  ),
                }),
              ],
            });
          return (0, n.jsxs)(o.wn, {
            flex: !0,
            flexDirection: "column",
            rowGap: 16,
            alignItems: "center",
            children: [
              f,
              V
                ? (0, n.jsxs)(o.wn, {
                    flex: !0,
                    fluid: !0,
                    alignItems: "center",
                    justifyContent: "center",
                    columnGap: 56,
                    children: [
                      (0, n.jsx)(E, {
                        direction: "previous",
                        disabled: 0 === y,
                        onSelect: U,
                      }),
                      K,
                      (0, n.jsx)(E, {
                        direction: "next",
                        disabled: y >= t.length - 1,
                        onSelect: U,
                      }),
                    ],
                  })
                : K,
              !O &&
                !V &&
                (0, n.jsx)(o.wn, {
                  flex: !0,
                  justifyContent: "center",
                  children:
                    R &&
                    Array.from({ length: R.snapGrid.length }).map((e, t) =>
                      (0, n.jsx)(
                        C,
                        { slideIndex: t, active: y === t, onSelect: D },
                        "dot-".concat(t + 1),
                      ),
                    ),
                }),
              A,
              (0, n.jsx)(o.$n, {
                variant: "vakinha",
                block: !0,
                size: "small",
                disabled: (!q && !X) || Y,
                onClick: H,
                children: (0, n.jsx)(o.o5, {
                  fontFamily: l.a,
                  fontSize: 14,
                  weight: 700,
                  color: "white",
                  children: X
                    ? "Tentar novamente"
                    : q
                      ? G
                        ? d
                        : u
                      : "Preparando imagem",
                }),
              }),
            ],
          });
        };
    },
    68239: (e, t, r) => {
      r.d(t, { A: () => i });
      var n = r(37876),
        a = r(64137);
      let i = (e) => {
        let { isMobile: t, isOpen: r, onClose: i, children: o } = e;
        return t
          ? (0, n.jsx)(a.Co, {
              onClick: i,
              onClose: i,
              isVisible: r,
              size: 90,
              children: o,
            })
          : (0, n.jsx)(a.dW, {
              onClose: i,
              isOpen: r,
              width: 600,
              padding: 16,
              closeOnOverlayClick: !1,
              children: o,
            });
      };
    },
    72787: (e, t, r) => {
      r.d(t, { A: () => h });
      var n = r(37876),
        a = r(64137),
        i = r(27415),
        o = r(67980),
        l = r(42409),
        s = r(94094),
        c = r(94411),
        d = r(18857),
        u = r(18847);
      let g = r.n(u)()(
          () =>
            Promise.all([r.e(8069), r.e(2503), r.e(3722), r.e(7607)]).then(
              r.bind(r, 48684),
            ),
          { loadableGenerated: { webpack: () => [48684] }, ssr: !1 },
        ),
        h = (e) => {
          let {
              format: t,
              user: r,
              campaign: u,
              app: h = "Vakinha",
              title: f,
              isMobile: A,
              shareUrl: p,
              shareDescription: m,
              shareAssets: v,
              preparation: x,
              defaultBackgroundIndex: C,
              nativeActionLabel: E = "Abrir Instagram",
              onShare: w,
              onCopyLink: b,
            } = e,
            I = "post" === t ? v.postCards : v.storyCards,
            j = (0, s.c)(h, v.status, I),
            B = (0, d.B)(u.id, I, !x && "assets" === j),
            y = x || B,
            F = (0, n.jsxs)(a.wn, {
              flex: !0,
              fluid: !0,
              flexDirection: "column",
              rowGap: 12,
              children: [
                (0, n.jsx)(a.o5, {
                  fontFamily: i.a,
                  fontSizeDesktop: 18,
                  fontSizeMobile: 16,
                  weight: 700,
                  children:
                    "Criamos uma mensagem para voc\xea compartilhar no Instagram",
                }),
                (0, n.jsx)(a.o5, {
                  fontFamily: i.f,
                  fontSizeDesktop: 18,
                  fontSizeMobile: 16,
                  color: "gray400",
                  children: A
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          "V\xe1 para o Instagram e ",
                          (0, n.jsx)("strong", {
                            children:
                              "cole o texto na legenda da sua postagem.",
                          }),
                        ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("strong", { children: "Baixe a imagem" }),
                          " e ",
                          (0, n.jsx)("strong", { children: "copie o texto" }),
                          ". Depois \xe9 s\xf3 abrir o Instagram e compartilhar.",
                        ],
                      }),
                }),
              ],
            }),
            R = (0, n.jsxs)(a.wn, {
              flex: !0,
              fluid: !0,
              flexDirection: "column",
              rowGap: 12,
              children: [
                (0, n.jsx)(a.o5, {
                  fontFamily: i.a,
                  fontSizeDesktop: 18,
                  fontSizeMobile: 16,
                  weight: 700,
                  children:
                    "Criamos um story para voc\xea compartilhar no Instagram",
                }),
                (0, n.jsx)(a.o5, {
                  fontFamily: i.f,
                  fontSizeDesktop: 18,
                  fontSizeMobile: 16,
                  color: "gray400",
                  children: A
                    ? "Adicione um adesivo de link da vaquinha ao seu story."
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("strong", { children: "Baixe a imagem" }),
                          " e ",
                          (0, n.jsx)("strong", { children: "copie o link" }),
                          ". Depois \xe9 s\xf3 adicionar um adesivo de link ao seu story e colar o link copiado.",
                        ],
                      }),
                }),
              ],
            }),
            S = (0, n.jsx)(a.wn, {
              flex: !0,
              flexDirection: "column",
              rowGap: 16,
              padding: [24, 0, 0],
              children: (0, n.jsx)(a.EA, { width: 600, height: 600 }),
            }),
            k = (0, n.jsx)(a.wn, {
              padding: [24, 0, 0],
              children: (0, n.jsx)(o.A, {
                shareCards: I,
                campaignId: u.id,
                nativeActionLabel: E,
                shareText: m,
                preparation: y,
                showArrows: !A,
                allowNativeShare: A,
                compact: !0,
                header: "post" === t ? F : R,
                onAction: (e) => w(e.templateId, !0),
                children:
                  "post" === t
                    ? (0, n.jsx)(a.wn, {
                        fluid: !0,
                        children: (0, n.jsx)(l.A, { text: m }),
                      })
                    : (0, n.jsx)(c.A, { shareUrl: p, onCopyLink: b }),
              }),
            }),
            z = (0, n.jsx)(g, {
              format: t,
              user: r,
              campaign: u,
              app: h,
              title: f,
              shareDescription: m,
              shareUrl: p,
              defaultBackgroundIndex: C,
              onAction: () => w("legacy", !1),
              onCopyLink: b,
            });
          return "loading" === j
            ? S
            : "assets" === j
              ? I.every((e) => y.getPreparedCard(e)) ||
                I.every((e) => y.getPreparedCard(e) || y.hasPreparationError(e))
                ? k
                : S
              : z;
        };
    },
    76622: (e, t, r) => {
      r.d(t, { O: () => l });
      var n = r(14232),
        a = r(34016);
      let i = async (e) =>
          (0, a.A)({
            endpoint: "v1/public/vakinhas/".concat(e, "/share_cards"),
          }),
        o = { status: "idle", cards: [] },
        l = (e, t) => {
          let [r, a] = (0, n.useState)(o),
            l = (0, n.useRef)(new Map()),
            s = (0, n.useRef)(new Set()),
            c = (0, n.useRef)(String(e)),
            d = (0, n.useRef)(!0);
          ((0, n.useEffect)(
            () => (
              (d.current = !0),
              () => {
                d.current = !1;
              }
            ),
            [],
          ),
            (0, n.useEffect)(() => {
              let t = String(e);
              ((c.current = t), a(l.current.get(t) || o));
            }, [e]),
            (0, n.useEffect)(() => {
              if (!t) return;
              let r = String(e),
                n = l.current.get(r);
              if (n) return void a(n);
              s.current.has(r) ||
                (s.current.add(r),
                a({ status: "loading", cards: [] }),
                i(e)
                  .then((e) => {
                    let { data: t } = e,
                      n = t.length
                        ? { status: "ready", cards: t }
                        : { status: "empty", cards: [] };
                    if (!d.current || c.current !== r)
                      return void s.current.delete(r);
                    (l.current.set(r, n), a(n));
                  })
                  .catch(() => {
                    let e = { status: "error", cards: [] };
                    if (!d.current || c.current !== r)
                      return void s.current.delete(r);
                    (l.current.set(r, e), a(e));
                  }));
            }, [e, t]));
          let u = (0, n.useMemo)(
              () =>
                r.cards.filter((e) => {
                  let { templateId: t } = e;
                  return t.toLowerCase().includes("post");
                }),
              [r.cards],
            ),
            g = (0, n.useMemo)(
              () =>
                r.cards.filter((e) => {
                  let { templateId: t } = e;
                  return t.toLowerCase().includes("story");
                }),
              [r.cards],
            );
          return {
            status: r.status,
            cards: r.cards,
            postCards: u,
            storyCards: g,
          };
        };
    },
    94094: (e, t, r) => {
      r.d(t, { c: () => n });
      let n = (e, t, r) =>
        "Vakinha" !== e
          ? "legacy"
          : "idle" === t || "loading" === t
            ? "loading"
            : "ready" === t && r.length > 0
              ? "assets"
              : "legacy";
    },
    94411: (e, t, r) => {
      r.d(t, { A: () => w });
      var n,
        a,
        i,
        o,
        l,
        s,
        c,
        d,
        u,
        g = r(37876),
        h = r(64137),
        f = r(27415),
        A = r(62748),
        p = r(14232);
      function m() {
        return (m = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function v() {
        return (v = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function x() {
        return (x = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      let C = (0, r(95329).default)(h.wn).withConfig({
          componentId: "sc-96858363-0",
        })(["width:fit-content;"]),
        E = [
          {
            label: "Passo 1",
            description: "Clique no \xedcone de adesivo",
            Icon: function (e) {
              return p.createElement(
                "svg",
                m(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 79,
                    height: 66,
                    fill: "none",
                    viewBox: "0 0 79 66",
                  },
                  e,
                ),
                n ||
                  (n = p.createElement("path", {
                    fill: "#F1F0F0",
                    d: "M0 .778h71a8 8 0 0 1 8 8v49a8 8 0 0 1-8 8H0z",
                  })),
                a ||
                  (a = p.createElement("rect", {
                    width: 32,
                    height: 32,
                    x: 23.5,
                    y: 17.278,
                    fill: "#007A48",
                    rx: 16,
                  })),
                i ||
                  (i = p.createElement("path", {
                    fill: "#fff",
                    d: "M43.29 25.278a4.21 4.21 0 0 1 4.21 4.21v5.474h-.001a.84.84 0 0 1-.244.522l-5.636 5.637c-.19.19-.988.157-1.277.157H35.71a4.21 4.21 0 0 1-4.211-4.21v-7.58a4.21 4.21 0 0 1 4.21-4.21zm-7.58 1.684a2.526 2.526 0 0 0-2.525 2.527v7.579a2.527 2.527 0 0 0 2.526 2.526H39.5v-1.263q.002-.658.16-1.267-.081.004-.162.004c-1.25 0-2.388-.52-3.15-1.361a.843.843 0 0 1 1.25-1.13c.435.48 1.115.806 1.9.806.346 0 .672-.063.965-.175q.075-.029.151-.042a5.04 5.04 0 0 1 3.939-1.888h1.263v-3.79a2.527 2.527 0 0 0-2.526-2.526zm8.843 8a3.37 3.37 0 0 0-3.368 3.369v.841l4.21-4.21zm-8-4.631a1.053 1.053 0 1 1 0 2.105 1.053 1.053 0 0 1 0-2.105m5.894 0a1.053 1.053 0 1 1 0 2.105 1.053 1.053 0 0 1 0-2.105",
                  })),
              );
            },
          },
          {
            label: "Passo 2",
            description: "Clique no adesivo de link",
            Icon: function (e) {
              return p.createElement(
                "svg",
                v(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 79,
                    height: 66,
                    fill: "none",
                    viewBox: "0 0 79 66",
                  },
                  e,
                ),
                o ||
                  (o = p.createElement("path", {
                    fill: "#F1F0F0",
                    d: "M0 .778h71a8 8 0 0 1 8 8v49a8 8 0 0 1-8 8H0z",
                  })),
                l ||
                  (l = p.createElement(
                    "g",
                    { filter: "url(#instagram_share_step_2_svg__a)" },
                    p.createElement("rect", {
                      width: 63,
                      height: 28,
                      x: 8,
                      y: 19.278,
                      fill: "#fff",
                      rx: 8,
                      shapeRendering: "crispEdges",
                    }),
                    p.createElement("path", {
                      fill: "#17A2B8",
                      d: "M24.521 33.65a3.44 3.44 0 1 0-4.865-4.864l-.593.592a.75.75 0 0 1-1.06-1.06l.592-.593a4.94 4.94 0 1 1 6.987 6.986l-.593.593a.75.75 0 1 1-1.06-1.06zM15.508 32.934a3.44 3.44 0 0 0 4.865 4.865l.592-.592a.75.75 0 1 1 1.061 1.06l-.593.593a4.94 4.94 0 1 1-6.986-6.987l.593-.592a.75.75 0 0 1 1.06 1.06z",
                    }),
                    p.createElement("path", {
                      fill: "#17A2B8",
                      d: "M17.072 35.09a.75.75 0 0 0 1.06 1.06l4.74-4.74a.75.75 0 1 0-1.06-1.06z",
                    }),
                    p.createElement("path", {
                      fill: "#282828",
                      d: "M31.504 39.278v-11.2h2.08v9.44h5.856v1.76zm8.618 0v-11.2h2.08v11.2zm4.15 0v-11.2h1.712l7.023 8.624h-.847v-8.624h2.064v11.2h-1.712l-7.025-8.624h.849v8.624zm13.849-2.64-.112-2.464 5.872-6.096h2.336l-4.88 5.184-1.152 1.264zm-1.856 2.64v-11.2h2.08v11.2zm7.808 0-4.288-5.104 1.376-1.52 5.344 6.624z",
                    }),
                  )),
                s ||
                  (s = p.createElement(
                    "defs",
                    null,
                    p.createElement(
                      "filter",
                      {
                        id: "instagram_share_step_2_svg__a",
                        width: 69,
                        height: 34,
                        x: 6,
                        y: 17.278,
                        colorInterpolationFilters: "sRGB",
                        filterUnits: "userSpaceOnUse",
                      },
                      p.createElement("feFlood", {
                        floodOpacity: 0,
                        result: "BackgroundImageFix",
                      }),
                      p.createElement("feColorMatrix", {
                        in: "SourceAlpha",
                        result: "hardAlpha",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                      }),
                      p.createElement("feOffset", { dx: 1, dy: 1 }),
                      p.createElement("feGaussianBlur", { stdDeviation: 1.5 }),
                      p.createElement("feComposite", {
                        in2: "hardAlpha",
                        operator: "out",
                      }),
                      p.createElement("feColorMatrix", {
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0",
                      }),
                      p.createElement("feBlend", {
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_2015_9287",
                      }),
                      p.createElement("feBlend", {
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow_2015_9287",
                        result: "shape",
                      }),
                    ),
                  )),
              );
            },
          },
          {
            label: "Passo 3",
            description: "Insira o adesivo de link no seu story",
            Icon: function (e) {
              return p.createElement(
                "svg",
                x(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: 85,
                    height: 87,
                    fill: "none",
                    viewBox: "0 0 85 87",
                  },
                  e,
                ),
                c ||
                  (c = p.createElement("path", {
                    fill: "url(#instagram_share_step_3_svg__a)",
                    d: "M.9.778H77a8 8 0 0 1 8 8v70a8 8 0 0 1-8 8H.9z",
                  })),
                d ||
                  (d = p.createElement(
                    "g",
                    { filter: "url(#instagram_share_step_3_svg__b)" },
                    p.createElement("rect", {
                      width: 63,
                      height: 28,
                      x: 16.146,
                      y: 22.102,
                      fill: "#fff",
                      rx: 8,
                      shapeRendering: "crispEdges",
                      transform: "rotate(15 16.146 22.102)",
                    }),
                    p.createElement(
                      "g",
                      {
                        fill: "#17A2B8",
                        clipPath: "url(#instagram_share_step_3_svg__c)",
                      },
                      p.createElement("path", {
                        d: "M28.384 40.261a3.44 3.44 0 1 0-3.44-5.959l-.726.42a.75.75 0 1 1-.75-1.3l.726-.419a4.94 4.94 0 0 1 4.94 8.557l-.726.42a.75.75 0 1 1-.75-1.3zM19.864 37.236a3.44 3.44 0 0 0 3.44 5.959l.726-.42a.75.75 0 1 1 .75 1.3l-.726.419a4.94 4.94 0 0 1-4.94-8.557l.725-.42a.75.75 0 1 1 .75 1.3z",
                      }),
                      p.createElement("path", {
                        d: "M20.816 39.723a.75.75 0 0 0 .75 1.3l5.806-3.353a.75.75 0 0 0-.75-1.299z",
                      }),
                    ),
                    p.createElement("path", {
                      fill: "#282828",
                      d: "m33.673 47.504 2.899-10.818 2.009.538-2.443 9.118 5.656 1.516-.455 1.7zm8.324 2.23 2.9-10.818 2.008.538-2.898 10.819zm4.008 1.074 2.9-10.818 1.653.443 4.552 10.148-.819-.22 2.232-8.33 1.994.535-2.899 10.818-1.653-.443-4.553-10.148.82.22-2.233 8.33zm14.06 1.035.53-2.41 7.25-4.368 2.257.605-6.056 3.744-1.44.923zm-2.475 2.07 2.899-10.819 2.009.538-2.899 10.819zm7.542 2.02-2.821-6.04 1.722-1.112 3.448 7.782z",
                    }),
                  )),
                u ||
                  (u = p.createElement(
                    "defs",
                    null,
                    p.createElement(
                      "clipPath",
                      { id: "instagram_share_step_3_svg__c" },
                      p.createElement("path", {
                        fill: "#fff",
                        d: "m18.457 28.933 15.455 4.141-4.141 15.455-15.455-4.141z",
                      }),
                    ),
                    p.createElement(
                      "pattern",
                      {
                        id: "instagram_share_step_3_svg__a",
                        width: 1,
                        height: 1,
                        patternContentUnits: "objectBoundingBox",
                      },
                      p.createElement("use", {
                        xlinkHref: "#instagram_share_step_3_svg__d",
                        transform: "matrix(.00347 0 0 .0034 0 -.37)",
                      }),
                    ),
                    p.createElement(
                      "filter",
                      {
                        id: "instagram_share_step_3_svg__b",
                        width: 74.101,
                        height: 49.352,
                        x: 6.899,
                        y: 20.102,
                        colorInterpolationFilters: "sRGB",
                        filterUnits: "userSpaceOnUse",
                      },
                      p.createElement("feFlood", {
                        floodOpacity: 0,
                        result: "BackgroundImageFix",
                      }),
                      p.createElement("feColorMatrix", {
                        in: "SourceAlpha",
                        result: "hardAlpha",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                      }),
                      p.createElement("feOffset", { dx: 1, dy: 1 }),
                      p.createElement("feGaussianBlur", { stdDeviation: 1.5 }),
                      p.createElement("feComposite", {
                        in2: "hardAlpha",
                        operator: "out",
                      }),
                      p.createElement("feColorMatrix", {
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0",
                      }),
                      p.createElement("feBlend", {
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_2015_9296",
                      }),
                      p.createElement("feBlend", {
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow_2015_9296",
                        result: "shape",
                      }),
                    ),
                    p.createElement("image", {
                      xlinkHref:
                        "data:image/png;base64,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",
                      id: "instagram_share_step_3_svg__d",
                      width: 288,
                      height: 512,
                      preserveAspectRatio: "none",
                    }),
                  )),
              );
            },
          },
        ],
        w = (e) => {
          let { shareUrl: t, onCopyLink: r } = e;
          return (0, g.jsxs)(h.wn, {
            flex: !0,
            fluid: !0,
            flexDirection: "column",
            rowGap: 12,
            children: [
              E.map((e) => {
                let { label: t, description: r, Icon: n } = e;
                return (0, g.jsxs)(
                  h.wn,
                  {
                    flex: !0,
                    justifyContent: "space-between",
                    borderRadius: 8,
                    border: !0,
                    borderColor: "gray200",
                    children: [
                      (0, g.jsxs)(h.wn, {
                        flex: !0,
                        flexDirection: "column",
                        padding: [8],
                        rowGap: 4,
                        children: [
                          (0, g.jsx)(C, {
                            borderRadius: 32,
                            backgroundColor: "green400",
                            padding: [4, 8],
                            children: (0, g.jsx)(h.o5, {
                              fontFamily: f.f,
                              fontSize: 10,
                              weight: 700,
                              color: "white",
                              children: t,
                            }),
                          }),
                          (0, g.jsx)(h.o5, {
                            fontFamily: f.f,
                            fontSize: 14,
                            children: r,
                          }),
                        ],
                      }),
                      (0, g.jsx)(n, {}),
                    ],
                  },
                  t,
                );
              }),
              (0, g.jsx)(h.wn, {
                fluid: !0,
                padding: [4, 0, 0],
                children: (0, g.jsx)(A.A, { url: t, onCopied: r }),
              }),
            ],
          });
        };
    },
    97468: (e, t, r) => {
      r.d(t, {
        Fr: () => l,
        Hr: () => d,
        ij: () => o,
        k_: () => s,
        kh: () => c,
      });
      let n = () => navigator.userAgent.toLowerCase(),
        a = () => {
          let e = n();
          return [
            /wv/,
            /fbav|fban/,
            /instagram/,
            /twitter/,
            /linkedinapp/,
          ].some((t) => t.test(e));
        },
        i = () => n().includes("android"),
        o = () => n().includes("samsungbrowser"),
        l = () =>
          i() ||
          (() => {
            let e = n();
            return (
              (e.includes("iphone") || e.includes("ipad")) &&
              !e.includes("safari")
            );
          })(),
        s = () => {
          let e = n();
          return e.includes("android")
            ? "android"
            : /iphone|ipad|ipod/.test(e) ||
                (e.includes("macintosh") && navigator.maxTouchPoints > 1)
              ? "ios"
              : /windows|macintosh|linux|cros/.test(e)
                ? "desktop"
                : "unknown";
        },
        c = () =>
          !(
            (a() && i()) ||
            (() => {
              let e = n();
              return e.includes("linux") && !e.includes("android");
            })() ||
            ((() => {
              let e = n();
              return e.includes("mac os") || e.includes("macintosh");
            })() &&
              (() => {
                let e = n();
                return (
                  e.includes("chrome") &&
                  !e.includes("edg") &&
                  !e.includes("opr")
                );
              })())
          ) && "function" == typeof navigator.share,
        d = () => !a();
    },
  },
]);
//# sourceMappingURL=1541-28dd643a7233cfd3.js.map
