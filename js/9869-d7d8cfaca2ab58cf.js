"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9869],
  {
    11625: (e, t, n) => {
      n.d(t, { A: () => l });
      var a = n(37876),
        o = n(14232),
        r = n(64137),
        i = n(33391),
        s = n(27415);
      let c = n(95329).default.div.withConfig({ componentId: "sc-d46ef183-0" })(
          [
            "border-bottom:2px solid ",
            ";padding:8px;text-align:center;cursor:pointer;",
            ";",
          ],
          (e) => {
            let { active: t, activeColor: n } = e;
            return t ? r.Tj[n] : r.Tj.gray250;
          },
          (e) => {
            let { fullWidth: t } = e;
            return t && "width: 100%;";
          },
        ),
        l = (e) => {
          let {
              children: t,
              activeTab: n,
              tabSelector: l,
              onClick: d,
              colorTab: h,
              fullWidth: u,
              fontSizeDesktop: p = 18,
              fontSizeMobile: g = 16,
            } = e,
            v = n === l,
            m = (0, o.useRef)(),
            f = v && h ? h : "green400";
          return (
            (0, i.A)(() => {
              v &&
                m.current &&
                m.current.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
            }, [v]),
            (0, a.jsx)(c, {
              ref: m,
              active: v,
              onClick: () => {
                (m.current.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                }),
                  d(l));
              },
              activeColor: f,
              fullWidth: u,
              children: (0, a.jsx)(r.o5, {
                whiteSpace: "nowrap",
                fontSizeDesktop: p,
                fontSizeMobile: g,
                fontFamily: s.a,
                color: v ? f : "gray600",
                weight: v ? 700 : 400,
                children: t,
              }),
            })
          );
        };
    },
    20221: (e, t, n) => {
      n.d(t, { BV: () => o, bS: () => r, qT: () => a });
      let a = ["pendingValidation", "validationRetry"],
        o = "https://reportaproblem.apple.com",
        r =
          "Como a compra foi feita pela App Store, o reembolso deve ser solicitado \xe0 Apple";
    },
    20554: (e, t, n) => {
      n.d(t, { A: () => a });
      let a = { UI: 100, overlay: 101, dropdown: 102, topOverlay: 200 };
    },
    27679: (e, t, n) => {
      n.d(t, { A: () => r });
      var a = n(37876),
        o = n(14232);
      let r = (e) => {
        let { component: t, ...n } = e,
          [r, i] = (0, o.useState)(!1),
          s = (0, o.useRef)();
        return (
          (0, o.useEffect)(() => {
            let e = new IntersectionObserver(
              (t) => {
                let [n] = t;
                n.isIntersecting && (i(!0), e.unobserve(n.target));
              },
              { threshold: 0.1 },
            );
            return (
              s.current && e.observe(s.current),
              () => {
                s.current && e.unobserve(s.current);
              }
            );
          }, []),
          (0, a.jsx)("div", { ref: s, children: r && (0, a.jsx)(t, { ...n }) })
        );
      };
    },
    35463: (e, t, n) => {
      n.d(t, { A: () => s });
      var a,
        o,
        r = n(14232);
      function i() {
        return (i = Object.assign
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
      let s = function (e) {
        return r.createElement(
          "svg",
          i(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 16,
              height: 16,
              fill: "none",
              viewBox: "0 0 16 16",
            },
            e,
          ),
          a ||
            (a = r.createElement(
              "g",
              { fill: "#fff", clipPath: "url(#insights_svg__a)" },
              r.createElement("path", {
                d: "M14 5.334c-.966 0-1.506.96-1.286 1.673L10.347 9.38c-.2-.06-.493-.06-.693 0l-1.7-1.7C8.18 6.967 7.64 6 6.667 6 5.7 6 5.154 6.96 5.38 7.68l-3.04 3.034c-.713-.22-1.673.32-1.673 1.286 0 .733.6 1.334 1.333 1.334.967 0 1.507-.96 1.287-1.674L6.32 8.62c.2.06.494.06.694 0l1.7 1.7C8.487 11.033 9.027 12 10 12c.967 0 1.514-.96 1.287-1.68l2.373-2.367c.714.22 1.674-.32 1.674-1.286 0-.733-.6-1.333-1.334-1.333",
              }),
              r.createElement("path", {
                d: "m10 6 .627-1.38L12 4l-1.373-.62L10 2l-.613 1.38L8 4l1.387.62zM2.334 7.333 2.667 6 4 5.667l-1.333-.334L2.334 4 2 5.333l-1.333.334L2 6z",
              }),
            )),
          o ||
            (o = r.createElement(
              "defs",
              null,
              r.createElement(
                "clipPath",
                { id: "insights_svg__a" },
                r.createElement("path", { fill: "#fff", d: "M0 0h16v16H0z" }),
              ),
            )),
        );
      };
    },
    46472: (e, t, n) => {
      n.d(t, { A: () => d });
      var a = n(37876),
        o = n(95329),
        r = n(64137);
      let i = o.default.div.withConfig({ componentId: "sc-b725d2f2-0" })(
        [
          "display:flex;width:100%;overflow-y:hidden;overflow-x:scroll;scrollbar-color:transparent transparent;> div{margin:0 8px;width:",
          ";}> div:first-child{margin:0 8px 0 0;}> div:last-child{margin:0 0 0 8px;}@media ",
          "{padding-bottom:16px;}",
        ],
        (e) => {
          let { fluid: t } = e;
          return t ? "100%" : "auto";
        },
        r.HP.phone,
      );
      var s = n(11625);
      let c = o.default.div.withConfig({ componentId: "sc-4f89e842-0" })(
          ["display:", ";"],
          (e) => {
            let { active: t } = e;
            return t ? "block" : "none";
          },
        ),
        l = (e) => {
          let { children: t, fluid: n } = e;
          return (0, a.jsx)(i, { fluid: n, children: t });
        };
      ((l.Tab = s.A),
        (l.TabContent = (e) => {
          let { tabSelector: t, activeTab: n, children: o } = e;
          return t === n && (0, a.jsx)("div", { children: o });
        }),
        (l.DisplayTabContent = (e) => {
          let { tabSelector: t, activeTab: n, children: o } = e;
          return (0, a.jsx)(c, { active: t === n, children: o });
        }));
      let d = l;
    },
    53929: (e, t, n) => {
      n.d(t, {
        $9: () => O,
        $P: () => k,
        $T: () => C,
        AX: () => h,
        B0: () => S,
        Be: () => s,
        Br: () => $,
        Cw: () => V,
        Dr: () => j,
        Dz: () => x,
        En: () => z,
        Fj: () => u,
        Gc: () => v,
        Hi: () => P,
        IN: () => H,
        Ir: () => R,
        Jv: () => B,
        L5: () => Z,
        LV: () => W,
        MX: () => i,
        Nf: () => D,
        PR: () => X,
        Q3: () => p,
        Rg: () => c,
        S6: () => K,
        Tc: () => E,
        Td: () => G,
        WP: () => U,
        Wf: () => y,
        _F: () => b,
        aE: () => d,
        dg: () => w,
        dx: () => T,
        eP: () => M,
        ed: () => ee,
        g8: () => _,
        gS: () => l,
        h2: () => f,
        i6: () => L,
        id: () => Y,
        m7: () => m,
        rD: () => g,
        rM: () => N,
        tS: () => F,
        tm: () => o,
        um: () => J,
        wS: () => I,
        xn: () => q,
        yI: () => r,
        ys: () => A,
        zP: () => Q,
      });
      var a = n(34016);
      let o = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e),
            headers: {
              ...((n && { CampaignAuthorizeToken: n }) || {}),
              ...((t && { Authorization: t }) || {}),
            },
          }),
        r = async (e) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/corporate_contributions"),
          }),
        i = async (e) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/adopters_contributions"),
          }),
        s = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/totals"),
            query: { perPage: n, page: t },
          }),
        c = async (e, t, n, o, r) =>
          (0, a.A)({
            endpoint: "authenticated/vakinhas/".concat(e, "/contributions"),
            query: { page: t, status: o, ...r },
            method: "get",
            headers: { Authorization: n },
          }),
        l = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/indications"),
            query: { perPage: n, page: t },
          }),
        d = async (e, t) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/news"),
            query: { page: t },
          }),
        h = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/feed_news"),
            query: { page: n },
            headers: { Authorization: t },
          }),
        u = async (e, t) =>
          (0, a.A)({
            endpoint: "users/vakinhas/".concat(e, "/send_csv_report"),
            headers: { Authorization: t },
          }),
        p = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/news"),
            method: "post",
            data: n,
            headers: { Authorization: t },
          }),
        g = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/news/").concat(n),
            method: "delete",
            headers: { Authorization: t },
          }),
        v = async (e, t, n) =>
          (0, a.A)({
            endpoint: "v1/authenticated/vakinhas/".concat(e, "/complaints"),
            method: "post",
            data: t,
            headers: { Authorization: n },
          }),
        m = async (e, t, n) =>
          (0, a.A)({
            endpoint: "v1/authenticated/vakinhas/".concat(
              e,
              "/complaints/options",
            ),
            query: { step: t },
            headers: { Authorization: n },
          }),
        f = async (e, t) =>
          (0, a.A)({
            endpoint: "vakinhas",
            method: "post",
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: t,
            },
            data: e,
          }),
        y = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/authorize"),
            method: "post",
            data: { password: t, recaptcha: n },
          }),
        w = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(n, "/close"),
            method: "patch",
            headers: { Authorization: t },
            data: e,
          }),
        A = async (e) => {
          let { page: t, itemsPerPage: n, filters: o } = e;
          return (0, a.A)({
            endpoint: "vakinhas/explore",
            query: { page: t, itemsPerPage: n, ...o },
          });
        },
        b = async (e, t, n, o, r) =>
          (0, a.A)({
            endpoint: "vakinhas/by_tag/".concat(e),
            query: { page: n, orderType: t, state: o, perPage: r },
          }),
        k = async (e) => {
          let { page: t, filters: n } = e;
          return (0, a.A)({
            endpoint: "vakinhas/search",
            query: { page: t, ...n },
          });
        },
        x = async (e) => {
          let { page: t, filters: n, deviceDistinctId: o, token: r } = e;
          return (0, a.A)({
            endpoint: "vakinhas/recommendations",
            query: { page: t, ...n, device_distinct_id: o },
            headers: { Authorization: r },
          });
        },
        _ = async (e, t) => {
          let n = { endpoint: "vakinhas/search-by-id?term=".concat(e) };
          return (t && (n.headers = { Authorization: t }), (0, a.A)(n));
        },
        z = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(n),
            method: "put",
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: t,
            },
            data: e,
          }),
        j = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/send_campaign_suggest",
            method: "POST",
            data: e,
            query: { slug: t },
            headers: { Authorization: n },
          }),
        C = async (e) => {
          let {
            page: t = 1,
            perPage: n = 6,
            token: o,
            category: r,
            periodValue: i,
            periodType: s,
            limit: c,
          } = e;
          return (0, a.A)({
            endpoint: "vakinhas/received_more_stickers",
            query: {
              page: t,
              perPage: n,
              category: r,
              periodValue: i,
              periodType: s,
              limit: c,
            },
            headers: { Authorization: o },
          });
        },
        E = async (e) => {
          let {
            page: t = 1,
            perPage: n = 6,
            token: o,
            category: r,
            period: i,
            location: s,
            limit: c,
          } = e;
          return (0, a.A)({
            endpoint: "vakinhas/most_loved_campaigns",
            query: {
              page: t,
              perPage: n,
              category: r,
              period: i,
              location: s,
              limit: c,
            },
            headers: { Authorization: o },
          });
        },
        q = async (e, t, n, o) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/received_stickers_authenticated"),
            query: { page: t, cardPerPage: n },
            headers: { Authorization: o },
          }),
        T = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/adopt"),
            method: "post",
            headers: { Authorization: t },
            data: n,
          }),
        V = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/events"),
            query: { perPage: n, page: t },
          }),
        S = async (e, t) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(
              e,
              "/transfer_balance_between_campaigns",
            ),
            method: "post",
            headers: { Authorization: t },
            data: {},
          }),
        P = async (e, t, n) =>
          (0, a.A)({
            endpoint: "users/vakinhas/"
              .concat(e, "/remove_co_owner/")
              .concat(t),
            method: "delete",
            headers: { Authorization: n },
          }),
        R = async (e, t) =>
          (0, a.A)({
            endpoint: "users/vakinhas/".concat(e, "/can_accept_co_owner"),
            method: "get",
            headers: { Authorization: t },
          }),
        O = async (e, t, n) =>
          (0, a.A)({
            endpoint: "users/vakinhas/"
              .concat(e, "/remove_pending_co_owner/")
              .concat(t),
            method: "delete",
            headers: { Authorization: n },
          }),
        I = async (e, t, n) =>
          (0, a.A)({
            endpoint: "users/vakinhas/".concat(e, "/invite_co_owners"),
            method: "post",
            headers: { Authorization: n },
            data: t,
          }),
        F = async (e, t) =>
          (0, a.A)({
            endpoint: "users/vakinhas/".concat(e, "/co_owners"),
            method: "get",
            headers: { Authorization: t },
          }),
        L = async (e, t) =>
          (0, a.A)({
            endpoint: "users/vakinhas/".concat(e, "/pending_co_owners"),
            method: "get",
            headers: { Authorization: t },
          }),
        B = async (e, t, n) =>
          (0, a.A)({
            endpoint: "users/vakinhas/"
              .concat(e, "/accept_co_owner_request/")
              .concat(t),
            method: "post",
            headers: { Authorization: n },
            data: {},
          }),
        M = async (e, t) =>
          (0, a.A)({
            endpoint: "users/vakinhas/".concat(e, "/generate_co_owner_invite"),
            method: "post",
            headers: { Authorization: t },
            data: {},
          }),
        D = async (e, t, n) =>
          (0, a.A)({
            endpoint: "users/vakinhas/"
              .concat(e, "/accept_co_owner_invite/")
              .concat(t),
            method: "post",
            headers: { Authorization: n },
            data: {},
          }),
        H = async (e, t) =>
          (0, a.A)({
            endpoint: "/users/static_pix_contributors",
            query: { page: t },
            headers: { Authorization: e },
          }),
        K = async (e, t, n) =>
          (0, a.A)({
            endpoint: "users/vakinhas/".concat(
              n,
              "/no_financial_movements_campaign",
            ),
            method: "delete",
            headers: { Authorization: t },
            data: e,
          }),
        U = async (e, t) =>
          (0, a.A)({
            endpoint: "/users/vakinhas/".concat(e, "/switch_campaign_owner"),
            method: "put",
            headers: { Authorization: t },
            data: {},
          }),
        G = async (e) =>
          (0, a.A)({
            endpoint: "vakinhas/report_campaign",
            method: "post",
            data: e,
          }),
        N = async (e) =>
          (0, a.A)({
            endpoint: "vakinha_interactions",
            method: "post",
            data: e,
          }),
        W = async (e, t) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/share_url"),
            method: "get",
            headers: { Authorization: t },
          }),
        $ = async (e, t) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/lucky_number_informations"),
            method: "get",
            headers: { Authorization: t },
          }),
        Q = async (e, t) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/build_ai_description"),
            method: "get",
            headers: { Authorization: t },
          }),
        J = async (e, t) =>
          (0, a.A)({
            endpoint: "authenticated/vakinhas/".concat(
              e,
              "/redeem_free_va_offer",
            ),
            method: "post",
            headers: { Authorization: t },
          }),
        X = async (e, t) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/gallery"),
            headers: { Authorization: t },
          }),
        Z = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/gallery"),
            method: "post",
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: n,
            },
            data: t,
          }),
        Y = async (e, t, n) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/gallery/").concat(t),
            method: "delete",
            headers: { Authorization: n },
          }),
        ee = async (e, t, n, o) =>
          (0, a.A)({
            endpoint: "vakinhas/".concat(e, "/gallery/").concat(t),
            method: "put",
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: o,
            },
            data: n,
          });
    },
    59280: (e, t, n) => {
      n.d(t, { A: () => i });
      var a,
        o = n(14232);
      function r() {
        return (r = Object.assign
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
      let i = function (e) {
        return o.createElement(
          "svg",
          r(
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
            (a = o.createElement("path", {
              fill: "#009D4E",
              d: "M8 12v-2h8v2zm0-4V6h8v2zm-2 6h7.5q.724 0 1.35.313.626.312 1.05.887l2.1 2.75V4H6zm0 6h11.05l-2.725-3.575q-.15-.2-.362-.312A1 1 0 0 0 13.5 16H6zm12 2H6q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h12q.824 0 1.413.587Q20 3.176 20 4v16q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22",
            })),
        );
      };
    },
    60265: (e, t, n) => {
      n.d(t, { A: () => s });
      var a,
        o,
        r = n(14232);
      function i() {
        return (i = Object.assign
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
      let s = function (e) {
        return r.createElement(
          "svg",
          i(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 30,
              height: 29,
              fill: "none",
              viewBox: "0 0 30 29",
            },
            e,
          ),
          a ||
            (a = r.createElement("path", {
              fill: "#EE7526",
              fillRule: "evenodd",
              d: "M25.637 0C28.037 0 30 1.98 30 4.404v15.959q0 .104-.005.204v7.558l-5.665-3.358H4.362C1.964 24.767 0 22.787 0 20.363V4.403C0 1.982 1.964 0 4.362 0",
              clipRule: "evenodd",
            })),
          o ||
            (o = r.createElement("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M19.274 4.49a1.107 1.107 0 0 0-.82-1.327 1.097 1.097 0 0 0-1.316.827l-.316 1.366c-.137.595.23 1.19.82 1.329.59.138 1.18-.233 1.317-.828zm-4.057 1.616a1.3 1.3 0 0 0-1.113.442l-.005.01-6.887 8.105H7.21a1.77 1.77 0 0 0-.18 2.027l.464.81c.367.654 1.104 1.001 1.834.864h.002l.123-.023q.104.27.249.523a3.75 3.75 0 0 0 5.117 1.484 3.8 3.8 0 0 0 1.941-3.393l2.966-.562h.009a1.32 1.32 0 0 0 .87-1.967L16.22 6.763a1.3 1.3 0 0 0-1.003-.654v-.003m-3.984 11.897 3.759-.712a2.015 2.015 0 0 1-2.254 1.75 2.01 2.01 0 0 1-1.505-1.035zm13.065-5.37a1.095 1.095 0 0 1-1.315.826l-1.354-.318a1.107 1.107 0 0 1-.78-1.351 1.095 1.095 0 0 1 1.276-.802l1.354.319c.59.137.957.73.821 1.327zM22.97 8.199c.527-.299.716-.973.42-1.505a1.09 1.09 0 0 0-1.577-.37l-1.183.74c-.528.3-.716.974-.42 1.506a1.09 1.09 0 0 0 1.577.37z",
              clipRule: "evenodd",
            })),
        );
      };
    },
    87098: (e, t, n) => {
      n.d(t, { A: () => i });
      var a = n(37876),
        o = n(95329);
      let r = o.default.div.withConfig({ componentId: "sc-2e1a19e2-0" })(
          ["", ";", ";"],
          (e) => {
            let { numberOfLines: t } = e;
            return (
              t &&
              (0, o.css)(
                [
                  "-webkit-line-clamp:",
                  ";-webkit-box-orient:vertical;display:-webkit-box;color:inherit;font-size:inherit;overflow:hidden;",
                ],
                t,
              )
            );
          },
          (e) => {
            let { height: t } = e;
            return t && (0, o.css)(["height:", "px;"], t);
          },
        ),
        i = (e) => {
          let { height: t, numberOfLines: n, children: o } = e;
          return (0, a.jsx)(r, { height: t, numberOfLines: n, children: o });
        };
    },
    98377: (e, t, n) => {
      n.d(t, { A: () => I });
      var a,
        o,
        r,
        i,
        s,
        c,
        l,
        d = n(37876),
        h = n(86649),
        u = n(64137),
        p = n(33563),
        g = n(92667),
        v = n(27415),
        m = n(95959),
        f = n(95329),
        y = n(15722);
      let w = (0, f.default)(u.wn).withConfig({ componentId: "sc-37dc54e8-0" })(
          ["flex-shrink:0;line-height:0;display:flex;"],
        ),
        A = (0, f.default)(u.wn).withConfig({ componentId: "sc-37dc54e8-1" })(
          ["@media ", "{align-items:center;}"],
          y.A.desktop,
        ),
        b = (0, f.default)(u.wn).withConfig({ componentId: "sc-37dc54e8-2" })([
          "flex:1 1 auto;min-width:0;word-break:break-word;",
        ]),
        k = (0, f.default)(u.wn).withConfig({ componentId: "sc-37dc54e8-3" })(
          [
            "flex-shrink:0;padding-left:28px;@media ",
            "{padding-left:0;margin-left:auto;}",
          ],
          y.A.desktop,
        ),
        x = (0, f.default)(u.$n).withConfig({ componentId: "sc-37dc54e8-4" })(
          ["", ""],
          (e) => {
            let { $background: t } = e;
            return (
              t &&
              (0, f.css)(
                ["background-color:", ";&:hover{background-color:", ";}"],
                u.Tj[t],
                u.Tj[t],
              )
            );
          },
        );
      var _ = n(60265),
        z = n(14232);
      function j() {
        return (j = Object.assign
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
      let C = function (e) {
        return z.createElement(
          "svg",
          j(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 20,
              height: 20,
              fill: "none",
              viewBox: "0 0 20 20",
            },
            e,
          ),
          a ||
            (a = z.createElement("path", {
              fill: "#025432",
              fillRule: "evenodd",
              d: "M13.602 2.806a1.063 1.063 0 0 0-2.071-.48l-.306 1.312a1.063 1.063 0 0 0 2.071.481zM9.669 4.358a1.26 1.26 0 0 0-1.079.425l-.005.009-6.676 7.787h-.002a1.69 1.69 0 0 0-.175 1.948l.45.778c.356.628 1.07.962 1.779.83h.002l.119-.022q.101.26.24.502a3.65 3.65 0 0 0 6.843-1.834l2.875-.54h.009a1.267 1.267 0 0 0 .843-1.89l-4.25-7.361a1.27 1.27 0 0 0-.973-.629V4.36m-3.862 11.43 3.644-.684a1.95 1.95 0 0 1-3.644.686zm12.665-5.16a1.06 1.06 0 0 1-1.275.795l-1.312-.306a1.062 1.062 0 0 1 .48-2.069l1.313.306c.572.132.928.703.796 1.276h-.002zM17.184 6.37a1.063 1.063 0 1 0-1.121-1.802l-1.146.712a1.063 1.063 0 1 0 1.121 1.803z",
              clipRule: "evenodd",
            })),
        );
      };
      function E() {
        return (E = Object.assign
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
      let q = function (e) {
        return z.createElement(
          "svg",
          E(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 20,
              height: 20,
              fill: "none",
              viewBox: "0 0 20 20",
            },
            e,
          ),
          o ||
            (o = z.createElement("circle", {
              cx: 10,
              cy: 10,
              r: 9,
              fill: "#8C5E00",
            })),
          r ||
            (r = z.createElement("rect", {
              width: 2,
              height: 6,
              x: 9,
              y: 5,
              fill: "#FFF",
              rx: 1,
            })),
          i ||
            (i = z.createElement("circle", {
              cx: 10,
              cy: 14,
              r: 1,
              fill: "#FFF",
            })),
        );
      };
      function T() {
        return (T = Object.assign
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
      let V = function (e) {
          return z.createElement(
            "svg",
            T(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 20,
                height: 20,
                fill: "none",
                viewBox: "0 0 20 20",
              },
              e,
            ),
            s ||
              (s = z.createElement("path", {
                fill: "#DC3545",
                d: "m10 2 9 16H1Z",
              })),
            c ||
              (c = z.createElement("rect", {
                width: 2,
                height: 6,
                x: 9,
                y: 7,
                fill: "#FFF",
                rx: 1,
              })),
            l ||
              (l = z.createElement("circle", {
                cx: 10,
                cy: 16,
                r: 1,
                fill: "#FFF",
              })),
          );
        },
        S = (e) => {
          let { iconKey: t } = e;
          return "megaphoneGreen" === t
            ? (0, d.jsx)(C, { width: 20, height: 20 })
            : "alertCircle" === t
              ? (0, d.jsx)(q, { width: 20, height: 20 })
              : "alertTriangle" === t
                ? (0, d.jsx)(V, { width: 20, height: 20 })
                : (0, d.jsx)(_.A, { width: 20, height: 20 });
        };
      var P = n(20221);
      let R = ""
          .concat(P.bS, ' <a href="')
          .concat(
            P.BV,
            '" target="_blank" rel="noopener noreferrer">neste link</a>.',
          ),
        O = {
          orange: {
            background: "orange300",
            border: "orange350",
            text: "gray600",
            buttonVariant: "spotlight",
          },
          green: {
            background: "green50",
            border: "green200",
            text: "gray600",
            buttonVariant: "vakinha",
          },
          yellow: {
            background: "yellow300",
            border: "yellow350",
            text: "gray600",
            buttonVariant: "dark",
            buttonBackground: "yellow700",
          },
          red: {
            background: "red300",
            border: "red350",
            text: "gray600",
            buttonVariant: "danger",
          },
        },
        I = (e) => {
          var t;
          let { toastData: n } = e,
            { trackPostHogEvent: a } = (0, g.z)(),
            o = n
              ? ((e) => {
                  let {
                      campaignId: t,
                      vakinhaSlug: n,
                      spotlightsStatus: a,
                    } = e,
                    o = (n) => ({
                      vakinha_id: Number(t),
                      page: e.page,
                      zone: "status-toast",
                      offer_kind: n,
                    }),
                    r = new Set([
                      ...((null == a ? void 0 : a.metaSpotlights) || []).map(
                        (e) => e.statusToUser,
                      ),
                      ...((null == a ? void 0 : a.vakinhaSpotlights) || []).map(
                        (e) => e.statusToUser,
                      ),
                    ]),
                    i = (e, t) => {
                      let n =
                        null == a
                          ? void 0
                          : a.metaSpotlights.find((t) => t.statusToUser === e);
                      return (null == n ? void 0 : n.appStorePurchase) ? R : t;
                    },
                    s =
                      null == a
                        ? void 0
                        : a.metaSpotlights.find(
                            (e) => "validationRetry" === e.statusToUser,
                          );
                  if (s)
                    return {
                      variant: "validationRetry",
                      palette: "yellow",
                      iconKey: "alertCircle",
                      text: "<strong>N\xe3o foi poss\xedvel validar sua foto.</strong> Tente novamente para que seu an\xfancio comece a ser exibido.",
                      ctaLabel: "Tentar novamente",
                      ctaRoute: "identityVerification",
                      ctaParams: { meta_spotlight_id: s.id },
                    };
                  let c =
                    null == a
                      ? void 0
                      : a.metaSpotlights.find(
                          (e) => "pendingValidation" === e.statusToUser,
                        );
                  if (c)
                    return {
                      variant: "pendingValidation",
                      palette: "yellow",
                      iconKey: "alertCircle",
                      text: "Para liberarmos a divulga\xe7\xe3o da sua vaquinha, precisamos <strong>validar seus dados</strong>. Envie uma <strong>foto do seu rosto</strong> em <strong>at\xe9 48 horas.</strong>",
                      ctaLabel: "Enviar foto",
                      ctaRoute: "identityVerification",
                      ctaParams: { meta_spotlight_id: c.id },
                    };
                  if (r.has("cancelledWithoutValidation"))
                    return {
                      variant: "cancelledWithoutValidation",
                      palette: "red",
                      iconKey: "alertTriangle",
                      text:
                        "Voc\xea <strong>n\xe3o enviou a foto do seu rosto h\xe1 tempo</strong> e o pacote de an\xfancios <strong>foi cancelado.</strong> " +
                        "".concat(
                          i(
                            "cancelledWithoutValidation",
                            "Para sua seguran\xe7a, o valor ser\xe1 devolvido no mesmo meio de pagamento utilizado na compra.",
                          ),
                        ),
                      ctaLabel: "Falar com o atendimento",
                      ctaRoute: "contactUs",
                    };
                  if (r.has("cancelledByAdmin"))
                    return {
                      variant: "cancelledByAdmin",
                      palette: "red",
                      iconKey: "alertTriangle",
                      text:
                        "Seu an\xfancio <strong>n\xe3o passou pelos crit\xe9rios de aceite do Vakinha</strong> e <strong>foi encerrado de forma definitiva.</strong> " +
                        "".concat(
                          i(
                            "cancelledByAdmin",
                            "O valor pago ser\xe1 estornado no mesmo meio de pagamento utilizado na compra.",
                          ),
                        ),
                      ctaLabel: "Falar com o suporte",
                      ctaRoute: "contactUs",
                    };
                  if (r.has("approved") || r.has("running"))
                    return {
                      variant: "running",
                      palette: "green",
                      iconKey: "megaphoneGreen",
                      text: "<strong>J\xe1 come\xe7amos a divulgar sua vaquinha para novas pessoas.</strong> Acompanhe o desempenho na tela de estat\xedsticas.",
                      ctaLabel: "Ver estat\xedsticas",
                      ctaRoute: "statistics",
                      ctaParams: { slug: n },
                    };
                  let l =
                    null == a
                      ? void 0
                      : a.metaSpotlights.find(
                          (e) => "underReview" === e.statusToUser,
                        );
                  return l
                    ? {
                        variant: "underReview",
                        palette: "yellow",
                        iconKey: "alertCircle",
                        text: "Sua compra <strong>foi aprovada</strong> e nossa equipe est\xe1 analisando sua campanha de acordo com os crit\xe9rios de aceite do Vakinha.",
                        ctaRoute: "spotlightStatus",
                        ctaParams: { id: l.id },
                      }
                    : r.has("archived") || r.has("finished")
                      ? {
                          variant: "repurchase",
                          palette: "orange",
                          iconKey: "megaphoneOrange",
                          text: "<strong>Seu pacote chegou ao fim.</strong> Ative novamente o Vakinha An\xfancios para continuar levando sua vaquinha a novas pessoas.",
                          ctaLabel: "Quero mais divulga\xe7\xe3o",
                          ctaRoute: "spotlightPreCheckout",
                          ctaParams: { campaignId: t },
                          offer: o("repurchase"),
                        }
                      : (null == a ? void 0 : a.eligible) === !1
                        ? null
                        : {
                            variant: "eligibleBoth",
                            palette: "orange",
                            iconKey: "megaphoneOrange",
                            text: "Voc\xea divulga para seus contatos e a gente alcan\xe7a novas pessoas nas <strong>redes sociais ou no site do Vakinha.</strong>",
                            ctaLabel: "Quero mais divulga\xe7\xe3o",
                            ctaRoute: "spotlightPreCheckout",
                            ctaParams: { campaignId: t },
                            offer: o("first-purchase"),
                          };
                })(n)
              : null,
            {
              ref: r,
              onClick: i,
              spotlightUtmInternalSource: s,
            } = (0, m.UM)(
              null != (t = null == o ? void 0 : o.offer) ? t : null,
            );
          if (!n || !o) return null;
          let c = s ? { ...o.ctaParams, utm_internal_source: s } : o.ctaParams,
            l = O[o.palette],
            f = !o.ctaLabel,
            y = (0, d.jsxs)(A, {
              flex: !0,
              flexDirectionMobile: "column",
              flexDirectionDesktop: "row",
              rowGap: 8,
              columnGap: 8,
              children: [
                (0, d.jsxs)(b, {
                  flex: !0,
                  alignItems: "center",
                  columnGap: 8,
                  children: [
                    (0, d.jsx)(w, {
                      children: (0, d.jsx)(S, { iconKey: o.iconKey }),
                    }),
                    (0, d.jsx)(u.o5, {
                      fontFamily: v.f,
                      fontSize: 12,
                      color: l.text,
                      children: (0, h.Ay)(o.text),
                    }),
                  ],
                }),
                o.ctaLabel &&
                  l.buttonVariant &&
                  (0, d.jsx)(k, {
                    children: (0, d.jsx)(p.A, {
                      route: o.ctaRoute,
                      params: c,
                      onClick: () => {
                        if ("running" === o.variant)
                          return void a("meta-ads-status-banner-stats-click", {
                            vakinha_id: n.campaignId,
                          });
                        ("eligibleBoth" === o.variant ||
                          "repurchase" === o.variant) &&
                          (i(),
                          a("meta-ads-status-banner-cta-click", {
                            variant: o.variant,
                            vakinha_id: n.campaignId,
                          }));
                      },
                      passHref: !0,
                      children: (0, d.jsx)(x, {
                        variant: l.buttonVariant,
                        $background: l.buttonBackground,
                        size: "tiny",
                        children: (0, d.jsx)(u.o5, {
                          fontFamily: v.a,
                          fontSize: 12,
                          weight: 700,
                          color: "white",
                          whiteSpace: "nowrap",
                          children: o.ctaLabel,
                        }),
                      }),
                    }),
                  }),
              ],
            }),
            _ = (0, d.jsx)(u.wn, {
              padding: [8],
              backgroundColor: l.background,
              borderColor: l.border,
              borderStyle: "solid",
              border: !0,
              borderRadius: 8,
              children: y,
            });
          return f
            ? (0, d.jsx)("div", {
                ref: r,
                children: (0, d.jsx)(p.A, {
                  route: o.ctaRoute,
                  params: c,
                  passHref: !0,
                  children: _,
                }),
              })
            : (0, d.jsx)("div", { ref: r, children: _ });
        };
    },
    99689: (e, t, n) => {
      n.d(t, { A: () => l });
      var a = n(37876),
        o = n(64137),
        r = n(34018),
        i = n(8295),
        s = n(27415);
      let c = (0, n(95329).default)(o.wn).withConfig({
          componentId: "sc-6fed4170-0",
        })(
          [
            "background-color:",
            ";border-radius:8px;svg{fill:",
            ";color:",
            ";width:",
            ";height:",
            ";path{fill:",
            ";}}",
          ],
          (e) => e.backgroundColor || o.Tj.green500,
          (e) => e.color || o.Tj.white,
          (e) => e.color || o.Tj.white,
          (e) => (e.size ? "".concat(e.size, "px") : "16px"),
          (e) => (e.size ? "".concat(e.size, "px") : "16px"),
          (e) => e.color || o.Tj.white,
        ),
        l = (e) => {
          let {
            iconBackgroundColor: t,
            icon: n,
            onClick: l,
            title: d,
            description: h,
            shadow: u,
            color: p,
            iconSize: g,
            fontSize: v = 14,
            fontFamily: m = "lato",
            checked: f,
          } = e;
          return (0, a.jsxs)(o.wn, {
            onClick: l,
            padding: [16],
            backgroundColor: "white",
            borderRadius: 8,
            shadow: u,
            flex: !0,
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            borderColor: f ? "green400" : "transparent",
            border: f,
            children: [
              (0, a.jsxs)(o.wn, {
                flex: !0,
                alignItems: "center",
                children: [
                  (0, a.jsx)(c, {
                    backgroundColor: t,
                    color: p,
                    size: g,
                    flex: !0,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: [8],
                    children: n,
                  }),
                  (0, a.jsxs)(o.wn, {
                    paddingDesktop: [0, 8],
                    paddingMobile: [0, 8],
                    flex: !0,
                    flexDirection: "column",
                    children: [
                      (0, a.jsx)(o.wn, {
                        padding: [0, 0, 8 * !!h],
                        children: (0, a.jsx)(o.o5, {
                          fontFamily: "lato" === m ? s.f : s.a,
                          fontSize: v,
                          color: "gray600",
                          weight: 700,
                          children: d,
                        }),
                      }),
                      h &&
                        (0, a.jsx)(o.o5, {
                          fontFamily: "lato" === m ? s.f : s.a,
                          fontSize: v,
                          color: "gray400",
                          children: h,
                        }),
                    ],
                  }),
                ],
              }),
              f
                ? (0, a.jsx)(o.hh, {
                    color: "green400",
                    children: (0, a.jsx)(i.A, {}),
                  })
                : (0, a.jsx)(r.A, {}),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=9869-d7d8cfaca2ab58cf.js.map
