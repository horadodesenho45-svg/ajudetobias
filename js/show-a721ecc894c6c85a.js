(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2921, 5102, 5302, 5970, 7739],
  {
    745: (e, a, t) => {
      "use strict";
      t.d(a, { pt: () => d });
      let n = {
        lessThanXSeconds: {
          one: "menos de um segundo",
          other: "menos de {{count}} segundos",
        },
        xSeconds: { one: "1 segundo", other: "{{count}} segundos" },
        halfAMinute: "meio minuto",
        lessThanXMinutes: {
          one: "menos de um minuto",
          other: "menos de {{count}} minutos",
        },
        xMinutes: { one: "1 minuto", other: "{{count}} minutos" },
        aboutXHours: {
          one: "aproximadamente 1 hora",
          other: "aproximadamente {{count}} horas",
        },
        xHours: { one: "1 hora", other: "{{count}} horas" },
        xDays: { one: "1 dia", other: "{{count}} dias" },
        aboutXWeeks: {
          one: "aproximadamente 1 semana",
          other: "aproximadamente {{count}} semanas",
        },
        xWeeks: { one: "1 semana", other: "{{count}} semanas" },
        aboutXMonths: {
          one: "aproximadamente 1 m\xeas",
          other: "aproximadamente {{count}} meses",
        },
        xMonths: { one: "1 m\xeas", other: "{{count}} meses" },
        aboutXYears: {
          one: "aproximadamente 1 ano",
          other: "aproximadamente {{count}} anos",
        },
        xYears: { one: "1 ano", other: "{{count}} anos" },
        overXYears: { one: "mais de 1 ano", other: "mais de {{count}} anos" },
        almostXYears: { one: "quase 1 ano", other: "quase {{count}} anos" },
      };
      var i = t(59834);
      let o = {
          date: (0, i.k)({
            formats: {
              full: "EEEE, d 'de' MMMM 'de' y",
              long: "d 'de' MMMM 'de' y",
              medium: "d 'de' MMM 'de' y",
              short: "dd/MM/y",
            },
            defaultWidth: "full",
          }),
          time: (0, i.k)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm",
            },
            defaultWidth: "full",
          }),
          dateTime: (0, i.k)({
            formats: {
              full: "{{date}} '\xe0s' {{time}}",
              long: "{{date}} '\xe0s' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        r = {
          lastWeek: (e) => {
            let a = e.getDay();
            return (
              "'" +
              (0 === a || 6 === a ? "\xfaltimo" : "\xfaltima") +
              "' eeee '\xe0s' p"
            );
          },
          yesterday: "'ontem \xe0s' p",
          today: "'hoje \xe0s' p",
          tomorrow: "'amanh\xe3 \xe0s' p",
          nextWeek: "eeee '\xe0s' p",
          other: "P",
        };
      var s = t(6576);
      let l = {
        ordinalNumber: (e, a) => Number(e) + "\xba",
        era: (0, s.o)({
          values: {
            narrow: ["aC", "dC"],
            abbreviated: ["a.C.", "d.C."],
            wide: ["antes de Cristo", "depois de Cristo"],
          },
          defaultWidth: "wide",
        }),
        quarter: (0, s.o)({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["T1", "T2", "T3", "T4"],
            wide: [
              "1\xba trimestre",
              "2\xba trimestre",
              "3\xba trimestre",
              "4\xba trimestre",
            ],
          },
          defaultWidth: "wide",
          argumentCallback: (e) => e - 1,
        }),
        month: (0, s.o)({
          values: {
            narrow: [
              "j",
              "f",
              "m",
              "a",
              "m",
              "j",
              "j",
              "a",
              "s",
              "o",
              "n",
              "d",
            ],
            abbreviated: [
              "jan",
              "fev",
              "mar",
              "abr",
              "mai",
              "jun",
              "jul",
              "ago",
              "set",
              "out",
              "nov",
              "dez",
            ],
            wide: [
              "janeiro",
              "fevereiro",
              "mar\xe7o",
              "abril",
              "maio",
              "junho",
              "julho",
              "agosto",
              "setembro",
              "outubro",
              "novembro",
              "dezembro",
            ],
          },
          defaultWidth: "wide",
        }),
        day: (0, s.o)({
          values: {
            narrow: ["d", "s", "t", "q", "q", "s", "s"],
            short: ["dom", "seg", "ter", "qua", "qui", "sex", "s\xe1b"],
            abbreviated: ["dom", "seg", "ter", "qua", "qui", "sex", "s\xe1b"],
            wide: [
              "domingo",
              "segunda-feira",
              "ter\xe7a-feira",
              "quarta-feira",
              "quinta-feira",
              "sexta-feira",
              "s\xe1bado",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: (0, s.o)({
          values: {
            narrow: {
              am: "AM",
              pm: "PM",
              midnight: "meia-noite",
              noon: "meio-dia",
              morning: "manh\xe3",
              afternoon: "tarde",
              evening: "noite",
              night: "madrugada",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "meia-noite",
              noon: "meio-dia",
              morning: "manh\xe3",
              afternoon: "tarde",
              evening: "noite",
              night: "madrugada",
            },
            wide: {
              am: "AM",
              pm: "PM",
              midnight: "meia-noite",
              noon: "meio-dia",
              morning: "manh\xe3",
              afternoon: "tarde",
              evening: "noite",
              night: "madrugada",
            },
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "AM",
              pm: "PM",
              midnight: "meia-noite",
              noon: "meio-dia",
              morning: "da manh\xe3",
              afternoon: "da tarde",
              evening: "da noite",
              night: "da madrugada",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "meia-noite",
              noon: "meio-dia",
              morning: "da manh\xe3",
              afternoon: "da tarde",
              evening: "da noite",
              night: "da madrugada",
            },
            wide: {
              am: "AM",
              pm: "PM",
              midnight: "meia-noite",
              noon: "meio-dia",
              morning: "da manh\xe3",
              afternoon: "da tarde",
              evening: "da noite",
              night: "da madrugada",
            },
          },
          defaultFormattingWidth: "wide",
        }),
      };
      var c = t(85542);
      let d = {
        code: "pt",
        formatDistance: (e, a, t) => {
          let i,
            o = n[e];
          if (
            ((i =
              "string" == typeof o
                ? o
                : 1 === a
                  ? o.one
                  : o.other.replace("{{count}}", String(a))),
            null == t ? void 0 : t.addSuffix)
          )
            if (t.comparison && t.comparison > 0) return "daqui a " + i;
            else return "h\xe1 " + i;
          return i;
        },
        formatLong: o,
        formatRelative: (e, a, t, n) => {
          let i = r[e];
          return "function" == typeof i ? i(a) : i;
        },
        localize: l,
        match: {
          ordinalNumber: (0, t(81798).K)({
            matchPattern: /^(\d+)(º|ª)?/i,
            parsePattern: /\d+/i,
            valueCallback: (e) => parseInt(e, 10),
          }),
          era: (0, c.A)({
            matchPatterns: {
              narrow: /^(ac|dc|a|d)/i,
              abbreviated:
                /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
              wide: /^(antes de cristo|antes da era comum|depois de cristo|era comum)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^ac/i, /^dc/i],
              wide: [
                /^(antes de cristo|antes da era comum)/i,
                /^(depois de cristo|era comum)/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          quarter: (0, c.A)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^T[1234]/i,
              wide: /^[1234](º|ª)? trimestre/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: (e) => e + 1,
          }),
          month: (0, c.A)({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
              wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ab/i,
                /^mai/i,
                /^jun/i,
                /^jul/i,
                /^ag/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: (0, c.A)({
            matchPatterns: {
              narrow: /^[dstq]/i,
              short: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
              abbreviated: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
              wide: /^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^d/i, /^s/i, /^t/i, /^q/i, /^q/i, /^s/i, /^s/i],
              any: [
                /^d/i,
                /^seg/i,
                /^t/i,
                /^qua/i,
                /^qui/i,
                /^sex/i,
                /^s[áa]/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, c.A)({
            matchPatterns: {
              narrow:
                /^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,
              any: /^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^meia/i,
                noon: /^meio/i,
                morning: /manh[ãa]/i,
                afternoon: /tarde/i,
                evening: /noite/i,
                night: /madrugada/i,
              },
            },
            defaultParseWidth: "any",
          }),
        },
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      };
    },
    1410: function (e) {
      ("undefined" != typeof self && self,
        (e.exports = (function () {
          var e = [
              function (e, a, t) {
                "use strict";
                e.exports = function (e) {
                  if ("string" != typeof e) throw Error("Invalid CPF number");
                  var a = e.replace(/\D/g, "");
                  if (11 !== a.length) throw Error("Invalid CPF number");
                  return a.replace(
                    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
                    "$1.$2.$3-$4",
                  );
                };
              },
              function (e, a, t) {
                "use strict";
                var n = t(5),
                  i = function (e) {
                    return /^\d$/.test(e);
                  },
                  o = function (e, a) {
                    return e + a;
                  },
                  r = function (e) {
                    return e
                      .map(function (e, a) {
                        return e * (9 - (a % 10));
                      })
                      .reduce(o);
                  };
                e.exports = function () {
                  var e =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    a = Array.from(e || []);
                  if (!a.every(i) || 9 !== e.length)
                    throw Error("Invalid digits");
                  var t = n(a),
                    o = [];
                  return (
                    (o[0] = (r(t) % 11) % 10),
                    (o[1] =
                      ((r(
                        [0].concat(
                          (function (e) {
                            if (Array.isArray(e)) {
                              for (
                                var a = 0, t = Array(e.length);
                                a < e.length;
                                a++
                              )
                                t[a] = e[a];
                              return t;
                            }
                            return Array.from(e);
                          })(t),
                        ),
                      ) +
                        9 * o[0]) %
                        11) %
                      10),
                    o
                  );
                };
              },
              function (e, a, t) {
                "use strict";
                ((e.exports.format = t(0)),
                  (e.exports.generate = t(3)),
                  (e.exports.isValid = t(6)));
              },
              function (e, a, t) {
                "use strict";
                function n(e) {
                  if (Array.isArray(e)) {
                    for (var a = 0, t = Array(e.length); a < e.length; a++)
                      t[a] = e[a];
                    return t;
                  }
                  return Array.from(e);
                }
                var i = t(4),
                  o = t(1),
                  r = t(0);
                e.exports = function () {
                  var e =
                      !(0 < arguments.length && void 0 !== arguments[0]) ||
                      arguments[0],
                    a =
                      1 < arguments.length &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    t = i(0, 9).oned(9, { round: !0 }),
                    s = a ? i(0, 9).oned(2, { round: !0 }) : o(t),
                    l = [].concat(n(t), n(s)).join("");
                  return e ? r(l) : l;
                };
              },
              function (e, a, t) {
                "use strict";
                var n = function (e, a, t, n) {
                  var i = (n || {}).round;
                  return Array.apply(null, { length: e }).map(function () {
                    var e = Math.random() * (t - a) + a;
                    return !0 === i ? Math.round(e) : e;
                  });
                };
                e.exports = function (e, a) {
                  return {
                    oned: function (t, i) {
                      return n(t, e, a, i);
                    },
                    twod: function (t, i, o) {
                      return Array.apply(null, { length: t }).map(function () {
                        return n(i, e, a, o);
                      });
                    },
                    genWhile: function (t, n) {
                      for (
                        var i = [], o = (n || {}).limit || 1e4, r = 0;
                        r !== o;

                      ) {
                        var s = Math.random() * (a - e) + e;
                        if ((i.push(s), t(s))) break;
                        r += 1;
                      }
                      return i;
                    },
                  };
                };
              },
              function (e, a, t) {
                "use strict";
                e.exports = function (e) {
                  if (!Array.isArray(e)) throw TypeError("Expected an array");
                  return e.reverse();
                };
              },
              function (e, a, t) {
                "use strict";
                var n = function (e, a) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                      return (function (e, a) {
                        var t = [],
                          n = !0,
                          i = !1,
                          o = void 0;
                        try {
                          for (
                            var r, s = e[Symbol.iterator]();
                            !(n = (r = s.next()).done) &&
                            (t.push(r.value), !a || t.length !== a);
                            n = !0
                          );
                        } catch (e) {
                          ((i = !0), (o = e));
                        } finally {
                          try {
                            !n && s.return && s.return();
                          } finally {
                            if (i) throw o;
                          }
                        }
                        return t;
                      })(e, a);
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance",
                    );
                  },
                  i = t(1);
                e.exports = function (e) {
                  var a =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if ("string" != typeof e) return !1;
                  var t = e.replace(/\D/g, "");
                  if (
                    !t ||
                    RegExp("^" + t.charAt(0) + "+$").test(t) ||
                    11 !== t.length
                  )
                    return !1;
                  if (a && 11 === t.length) return !0;
                  var o = n(t.match(/^(\d{9})(\d{2})$/), 3),
                    r = o[1];
                  return o[2] === i(r).join("");
                };
              },
            ],
            a = {};
          function t(n) {
            if (a[n]) return a[n].exports;
            var i = (a[n] = { i: n, l: !1, exports: {} });
            return (
              e[n].call(i.exports, i, i.exports, t),
              (i.l = !0),
              i.exports
            );
          }
          return (
            (t.m = e),
            (t.c = a),
            (t.d = function (e, a, n) {
              t.o(e, a) ||
                Object.defineProperty(e, a, { enumerable: !0, get: n });
            }),
            (t.r = function (e) {
              ("undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 }));
            }),
            (t.t = function (e, a) {
              if (
                (1 & a && (e = t(e)),
                8 & a || (4 & a && "object" == typeof e && e && e.__esModule))
              )
                return e;
              var n = Object.create(null);
              if (
                (t.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & a && "string" != typeof e)
              )
                for (var i in e)
                  t.d(
                    n,
                    i,
                    function (a) {
                      return e[a];
                    }.bind(null, i),
                  );
              return n;
            }),
            (t.n = function (e) {
              var a =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return (t.d(a, "a", a), a);
            }),
            (t.o = function (e, a) {
              return Object.prototype.hasOwnProperty.call(e, a);
            }),
            (t.p = ""),
            t((t.s = 2))
          );
        })()));
    },
    1602: (e, a, t) => {
      var n = t(19031);
      e.exports = function () {
        return n.Date.now();
      };
    },
    3029: (e, a, t) => {
      "use strict";
      t.d(a, {
        Bs: () => d,
        Bv: () => c,
        Fw: () => p,
        cw: () => u,
        jl: () => m,
        mH: () => l,
        rQ: () => h,
      });
      var n = t(95329),
        i = t(64137),
        o = t(98922),
        r = t(15722),
        s = t(20554);
      let l = n.default.div.withConfig({ componentId: "sc-71d5c73c-0" })(
          [
            "z-index:",
            ";background-color:rgba(203,203,203,0.6);width:100%;height:100%;top:0;left:0;position:fixed;display:flex;align-items:center;justify-content:center;overflow:auto;padding:0 10px;",
          ],
          s.A.topOverlay,
        ),
        c = (0, n.createGlobalStyle)(["body{overflow:hidden;}"]),
        d = n.default.div.withConfig({ componentId: "sc-71d5c73c-1" })(
          [
            "background-color:",
            ";border-radius:5px;border:",
            ";padding:",
            ";max-height:100%;overflow-y:",
            ";margin-top:20px;@media ",
            "{width:",
            ";}@media ",
            "{",
            ";max-width:320px;padding:",
            ";}",
          ],
          o.ON,
          (e) => {
            let { noBorder: a } = e;
            return a ? "none" : "1px solid ".concat(i.Tj.gray350);
          },
          (e) => {
            let { noPadding: a } = e;
            return a ? 0 : "30px";
          },
          (e) => {
            let { noOverlay: a } = e;
            return a ? "hidden" : "overlay";
          },
          r.A.tabletAndDesktop,
          (e) => {
            let { size: a } = e;
            return "small" === a ? "560px" : "850px";
          },
          r.A.phone,
          (e) => {
            let { size: a } = e;
            return "large" === a && (0, n.css)(["width:100%;"]);
          },
          (e) => {
            let { noPadding: a } = e;
            return a ? 0 : "30px 15px";
          },
        ),
        h = n.default.div.withConfig({ componentId: "sc-71d5c73c-2" })(
          [
            "font-size:20px;text-transform:uppercase;font-weight:900;width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;div#divCloseSvg{align-self:flex-start;position:absolute;right:0;> svg{cursor:pointer;}}",
            ";",
            ";",
          ],
          (e) => {
            let { variant: a } = e;
            return "primary" === a && (0, n.css)(["color:", ";"], o.eU);
          },
          (e) => {
            let { variant: a } = e;
            return "danger" === a && (0, n.css)(["color:", ";"], o.YP);
          },
        ),
        u = n.default.div.withConfig({ componentId: "sc-71d5c73c-3" })(
          [
            "overflow:auto;",
            ";max-height:70vh;margin:30px 0;@media ",
            "{max-height:60vh;}",
          ],
          (e) => {
            let { hideScroll: a } = e;
            return a && (0, n.css)(["::-webkit-scrollbar{display:none;}"]);
          },
          r.A.phone,
        ),
        m = n.default.div.withConfig({ componentId: "sc-71d5c73c-4" })([
          "display:flex;justify-content:flex-end;",
        ]),
        p = n.default.div.withConfig({ componentId: "sc-71d5c73c-5" })(
          [
            "display:flex;width:100%;justify-content:flex-end;flex-direction:row;> *{margin-left:10px;}",
            ";",
          ],
          (e) => {
            let { isCloseCampaign: a } = e;
            return (
              a &&
              (0, n.css)(
                [
                  "@media ",
                  "{flex-direction:column-reverse;button:nth-child(1){margin-left:0;}button:nth-child(2){margin:0 0 10px;}}",
                ],
                r.A.phone,
              )
            );
          },
        );
    },
    3572: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7m11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77",
        }),
        "Loyalty",
      );
    },
    4118: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => u });
      var n = t(37876),
        i = t(11639),
        o = t(73567),
        r = t(57542),
        s = t(12503),
        l = t(95329),
        c = t(98922);
      let d = l.default.div.withConfig({ componentId: "sc-3f581608-0" })(
          [
            "border-radius:5px;background-color:",
            ";width:100%;box-shadow:1px 1px 3px ",
            ";height:",
            ";display:flex;align-items:center;justify-content:center;",
          ],
          c.ON,
          c.r7,
          (e) => {
            let { height: a } = e;
            return "".concat(a, "px");
          },
        ),
        h = (e) => {
          let { height: a } = e;
          return (0, n.jsx)(r.A, {
            spacingSize: "md",
            spacingPosition: "both",
            children: (0, n.jsx)(d, {
              height: a,
              children: (0, n.jsx)(s.y$, { height: 40, width: 40 }),
            }),
          });
        },
        u = (e) => {
          let {
            count: a,
            height: t,
            children: r,
            loading: s,
            md: l = 12,
            xs: c = 12,
          } = e;
          return s
            ? (0, n.jsx)(
                () =>
                  (0, n.jsx)(n.Fragment, {
                    children: [...Array(a)].map(() =>
                      (0, n.jsx)(
                        i.Col,
                        {
                          md: l,
                          xs: c,
                          children: (0, n.jsx)(h, { height: t }),
                        },
                        (0, o.L)(),
                      ),
                    ),
                  }),
                {},
              )
            : r;
        };
    },
    4917: (e, a, t) => {
      var n = t(98825),
        i = t(1602),
        o = t(52782),
        r = Math.max,
        s = Math.min;
      e.exports = function (e, a, t) {
        var l,
          c,
          d,
          h,
          u,
          m,
          p = 0,
          g = !1,
          f = !1,
          x = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function j(a) {
          var t = l,
            n = c;
          return ((l = c = void 0), (p = a), (h = e.apply(n, t)));
        }
        function v(e) {
          var t = e - m,
            n = e - p;
          return void 0 === m || t >= a || t < 0 || (f && n >= d);
        }
        function w() {
          var e,
            t,
            n,
            o = i();
          if (v(o)) return b(o);
          u = setTimeout(
            w,
            ((e = o - m), (t = o - p), (n = a - e), f ? s(n, d - t) : n),
          );
        }
        function b(e) {
          return ((u = void 0), x && l) ? j(e) : ((l = c = void 0), h);
        }
        function y() {
          var e,
            t = i(),
            n = v(t);
          if (((l = arguments), (c = this), (m = t), n)) {
            if (void 0 === u)
              return ((p = e = m), (u = setTimeout(w, a)), g ? j(e) : h);
            if (f) return (clearTimeout(u), (u = setTimeout(w, a)), j(m));
          }
          return (void 0 === u && (u = setTimeout(w, a)), h);
        }
        return (
          (a = o(a) || 0),
          n(t) &&
            ((g = !!t.leading),
            (d = (f = "maxWait" in t) ? r(o(t.maxWait) || 0, a) : d),
            (x = "trailing" in t ? !!t.trailing : x)),
          (y.cancel = function () {
            (void 0 !== u && clearTimeout(u),
              (p = 0),
              (l = m = c = u = void 0));
          }),
          (y.flush = function () {
            return void 0 === u ? h : b(i());
          }),
          y
        );
      };
    },
    8146: (e, a, t) => {
      "use strict";
      t.d(a, { U0: () => i, km: () => o, xP: () => n });
      let n = [
        { abbreviation: "AC", name: "Acre", slug: "acre" },
        { abbreviation: "AL", name: "Alagoas", slug: "alagoas" },
        { abbreviation: "AP", name: "Amap\xe1", slug: "amapa" },
        { abbreviation: "AM", name: "Amazonas", slug: "amazonas" },
        { abbreviation: "BA", name: "Bahia", slug: "bahia" },
        { abbreviation: "CE", name: "Cear\xe1", slug: "ceara" },
        {
          abbreviation: "DF",
          name: "Distrito Federal",
          slug: "distrito-federal",
        },
        {
          abbreviation: "ES",
          name: "Esp\xedrito Santo",
          slug: "espirito-santo",
        },
        { abbreviation: "GO", name: "Goi\xe1s", slug: "goias" },
        { abbreviation: "MA", name: "Maranh\xe3o", slug: "maranhao" },
        { abbreviation: "MT", name: "Mato Grosso", slug: "mato-grosso" },
        {
          abbreviation: "MS",
          name: "Mato Grosso do Sul",
          slug: "mato-grosso-do-sul",
        },
        { abbreviation: "MG", name: "Minas Gerais", slug: "minas-gerais" },
        { abbreviation: "PA", name: "Par\xe1", slug: "para" },
        { abbreviation: "PB", name: "Para\xedba", slug: "paraiba" },
        { abbreviation: "PR", name: "Paran\xe1", slug: "parana" },
        { abbreviation: "PE", name: "Pernambuco", slug: "pernambuco" },
        { abbreviation: "PI", name: "Piau\xed", slug: "piaui" },
        { abbreviation: "RJ", name: "Rio de Janeiro", slug: "rio-de-janeiro" },
        {
          abbreviation: "RN",
          name: "Rio Grande do Norte",
          slug: "rio-grande-do-norte",
        },
        {
          abbreviation: "RS",
          name: "Rio Grande do Sul",
          slug: "rio-grande-do-sul",
        },
        { abbreviation: "RO", name: "Rond\xf4nia", slug: "rondonia" },
        { abbreviation: "RR", name: "Roraima", slug: "roraima" },
        { abbreviation: "SC", name: "Santa Catarina", slug: "santa-catarina" },
        { abbreviation: "SP", name: "S\xe3o Paulo", slug: "sao-paulo" },
        { abbreviation: "SE", name: "Sergipe", slug: "sergipe" },
        { abbreviation: "TO", name: "Tocantins", slug: "tocantins" },
      ];
      n.map((e) => {
        let { abbreviation: a } = e;
        return { value: a, label: a };
      });
      let i = [
          { value: "next_to_me", label: "Pr\xf3ximas a mim" },
          ...n.map((e) => {
            let { name: a } = e;
            return { value: a, label: a };
          }),
        ],
        o = (e) => n.find((a) => a.name === e);
    },
    10371: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => C });
      var n = t(37876);
      t(21396);
      var i = t(65867),
        o = t(14232),
        r = t(95329),
        s = t(54684),
        l = t(99052),
        c = t(64137),
        d = t(15722);
      let h = r.default.div.withConfig({ componentId: "sc-331bb723-0" })([
          "display:flex;padding:15px 0 5px;justify-content:center;",
        ]),
        u = r.default.button.withConfig({ componentId: "sc-331bb723-1" })(
          [
            "border:none;background:",
            ";width:8px;height:4px;border-radius:8px;margin:0 5px;cursor:",
            ";:focus{outline:none;}",
          ],
          (e) => {
            let { active: a } = e;
            return a ? c.Tj.gray350 : c.Tj.gray300;
          },
          (e) => {
            let { isCursorDefault: a } = e;
            return a ? "default" : "pointer";
          },
        ),
        m = r.default.div.withConfig({ componentId: "sc-331bb723-2" })(
          [
            "position:relative;padding:",
            ";height:",
            ";@media ",
            "{padding:0;}",
          ],
          (e) => {
            let { arrow: a } = e;
            return a ? "0 20px" : "0";
          },
          (e) => {
            let { height: a } = e;
            return a || "auto";
          },
          d.A.phone,
        ),
        p = (0, r.default)(c.wn).withConfig({ componentId: "sc-331bb723-3" })([
          "border-radius:50%;",
        ]),
        g = (0, r.default)(s.A).withConfig({ componentId: "sc-331bb723-4" })(
          ["&&&{path{fill:", ";}}"],
          (e) => {
            let { disabled: a } = e;
            return a ? c.Tj.green600 : c.Tj.white;
          },
        ),
        f = (0, r.default)(l.A).withConfig({ componentId: "sc-331bb723-5" })(
          ["&&&{path{fill:", ";}}"],
          (e) => {
            let { disabled: a } = e;
            return a ? c.Tj.green600 : c.Tj.white;
          },
        ),
        x = r.default.div.withConfig({ componentId: "sc-331bb723-6" })(
          [
            "position:absolute;top:",
            ";transform:translateY(-50%);-webkit-transform:translateY(-50%);left:",
            ";right:",
            ";cursor:pointer;@media ",
            "{top:50%;}",
          ],
          (e) => {
            let { percentPositionY: a } = e;
            return a ? "".concat(a, "%") : "50%";
          },
          (e) => {
            let { left: a } = e;
            return a ? "0px" : "auto";
          },
          (e) => {
            let { left: a } = e;
            return a ? "auto" : "0px";
          },
          d.A.tabletAndDesktop,
        ),
        j = (0, r.css)(["&&&{path{fill:", ";}}"], (e) => {
          let { disabled: a } = e;
          return a ? c.Tj.green600 : c.Tj.white;
        }),
        v = (0, r.default)(s.A).withConfig({ componentId: "sc-71d082df-0" })(
          ["", ""],
          j,
        ),
        w = (0, r.default)(l.A).withConfig({ componentId: "sc-71d082df-1" })(
          ["", ""],
          j,
        ),
        b = r.default.div.withConfig({ componentId: "sc-71d082df-2" })(
          [
            "border-radius:50%;background-color:",
            ";width:",
            "px;height:",
            "px;display:flex;justify-content:center;align-items:center;cursor:pointer;@media ",
            "{width:",
            "px;height:",
            "px;}",
          ],
          (e) => {
            let { disabled: a } = e;
            return a ? c.Tj.white : c.Tj.green600;
          },
          (e) => {
            let { desktopSize: a } = e;
            return a;
          },
          (e) => {
            let { desktopSize: a } = e;
            return a;
          },
          c.HP.phone,
          (e) => {
            let { mobileSize: a } = e;
            return a;
          },
          (e) => {
            let { mobileSize: a } = e;
            return a;
          },
        ),
        y = (e) => {
          var a, t, r, s;
          let {
              spacing: l,
              children: c,
              withDots: d,
              perView: j,
              loop: v,
              automaticSlide: w,
              millisecondsToSlide: b,
              arrow: y,
              height: C,
              currentIndex: A,
              getInstanceRef: S,
              arrowPercentPositionY: k,
              setActiveSlide: z,
              origin: q,
              mode: M = "snap",
              breakpoints: I,
            } = e,
            [F, T] = (0, o.useState)(0),
            [D, P] = (0, o.useState)(!1);
          (0, o.useEffect)(() => {
            A && A(F);
          }, [F]);
          let [E, _] = (0, i.E)(
              {
                initial: 0,
                loop: v,
                breakpoints: I,
                slideChanged: (e) => {
                  (T(e.track.details.rel), z && z(e.track.details.rel));
                },
                mode: M,
                slides: { spacing: l, perView: j, origin: q },
                created: () => {
                  P(!0);
                },
                defaultAnimation: { duration: 2e3 },
              },
              [
                (e) => {
                  let a,
                    t = !1,
                    n = () => clearTimeout(a),
                    i = () => {
                      (clearTimeout(a),
                        t ||
                          (a = setTimeout(() => {
                            e.next();
                          }, b)));
                    };
                  w &&
                    (e.on("created", () => {
                      (e.container.addEventListener("mouseover", () => {
                        ((t = !0), n());
                      }),
                        e.container.addEventListener("mouseout", () => {
                          ((t = !1), i());
                        }),
                        i());
                    }),
                    e.on("dragStarted", n),
                    e.on("animationEnded", i),
                    e.on("updated", i));
                },
              ],
            ),
            V = Math.ceil(
              ((null == (s = _.current) ||
              null == (r = s.track) ||
              null == (t = r.details) ||
              null == (a = t.slides)
                ? void 0
                : a.length) || 0) / Number(j || 1),
            );
          if (
            ((0, o.useEffect)(() => {
              _ && (null == S || S(_));
            }, [_]),
            0 === o.Children.count(c))
          )
            return null;
          let O = (e) => {
            let { left: a, click: t, disabled: i } = e;
            return (0, n.jsxs)(x, {
              left: a,
              onClick: t,
              percentPositionY: k,
              children: [
                a &&
                  (0, n.jsx)(p, {
                    alignItems: "center",
                    justifyContent: "center",
                    flex: !0,
                    backgroundColor: i ? "white" : "green600",
                    padding: [8],
                    cursor: "pointer",
                    children: (0, n.jsx)(g, {
                      fontSize: "medium",
                      disabled: i,
                    }),
                  }),
                !a &&
                  (0, n.jsx)(p, {
                    alignItems: "center",
                    justifyContent: "center",
                    flex: !0,
                    backgroundColor: i ? "white" : "green600",
                    padding: [8],
                    cursor: "pointer",
                    children: (0, n.jsx)(f, {
                      fontSize: "medium",
                      disabled: i,
                    }),
                  }),
              ],
            });
          };
          return (0, n.jsxs)(m, {
            arrow: y,
            height: C,
            children: [
              (0, n.jsx)("div", {
                ref: E,
                className: "keen-slider",
                children: o.Children.map(c, (e, a) =>
                  (0, n.jsx)("div", {
                    children: (0, n.jsx)(
                      "div",
                      {
                        className: "keen-slider__slide",
                        children: D && (null == _ ? void 0 : _.current) && e,
                      },
                      a,
                    ),
                  }),
                ),
              }),
              D &&
                _.current &&
                d &&
                (0, n.jsx)(h, {
                  children: [...Array(V).keys()].map((e) =>
                    (0, n.jsx)(
                      u,
                      {
                        onClick: w
                          ? void 0
                          : () =>
                              ((e) => {
                                var a;
                                null == (a = _.current) || a.moveToIdx(e);
                              })(e),
                        active: F === e,
                        isCursorDefault: w,
                      },
                      e,
                    ),
                  ),
                }),
              D &&
                _.current &&
                y &&
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(O, {
                      left: !0,
                      click: (e) => {
                        var a;
                        return (
                          e.stopPropagation() ||
                          (null == (a = _.current) ? void 0 : a.prev())
                        );
                      },
                      disabled: !w && 0 === F,
                    }),
                    (0, n.jsx)(O, {
                      click: (e) => {
                        var a;
                        return (
                          e.stopPropagation() ||
                          (null == (a = _.current) ? void 0 : a.next())
                        );
                      },
                      disabled:
                        !w &&
                        F ===
                          Math.floor(_.current.track.details.slides.length / 2),
                    }),
                  ],
                }),
            ],
          });
        };
      y.Arrow = (e) => {
        let {
            left: a = !1,
            sliderRef: t,
            desktopSize: i = 40,
            mobileSize: o = 32,
            currentIndex: r,
            className: s,
            neverDisabled: l,
          } = e,
          c = () =>
            !l &&
            (a
              ? 0 === r
              : t.current.track.details.slides.length - 1 ===
                t.current.track.details.abs);
        return t
          ? (0, n.jsx)(b, {
              onClick: (e) => {
                var n, i;
                (e.stopPropagation(),
                  a
                    ? null == (n = t.current) || n.prev()
                    : null == (i = t.current) || i.next());
              },
              className: s,
              desktopSize: i,
              mobileSize: o,
              disabled: c(),
              children: a
                ? (0, n.jsx)(v, { disabled: c() })
                : (0, n.jsx)(w, { disabled: c() }),
            })
          : null;
      };
      let C = y;
    },
    12194: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => r });
      var n,
        i = t(14232);
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var n in t)
                  ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      let r = function (e) {
        return i.createElement(
          "svg",
          o(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 92.417,
              height: 85.863,
              viewBox: "0 0 92.417 85.863",
            },
            e,
          ),
          n ||
            (n = i.createElement("path", {
              fill: "#24ca68",
              fillRule: "evenodd",
              d: "M13.438 0h65.541a13.476 13.476 0 0 1 13.438 13.443v48.723c0 .214 0 .42-.012.622v23.075L74.954 75.612H13.45A13.48 13.48 0 0 1 0 62.167V13.443A13.48 13.48 0 0 1 13.438 0m33.279 46.306a11 11 0 0 0-1.487.1l-12.348-21.4a8.513 8.513 0 1 0-7.618 4.054l12.572 21.776a10.976 10.976 0 1 0 17.831.081L68.284 29.07a8.511 8.511 0 1 0-7.62-4.054L48.3 46.432a10 10 0 0 0-1.582-.124Z",
              "data-name": "Caminho 697",
            })),
        );
      };
    },
    15535: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        [
          (0, o.jsx)(
            "path",
            {
              d: "m15.45 16.52-3.01-3.01c-.11-.11-.24-.13-.31-.13s-.2.02-.31.13L8.8 16.53c-.34.34-.87.89-2.64.89l3.71 3.7c1.17 1.17 3.07 1.17 4.24 0l3.72-3.71c-.91 0-1.67-.18-2.38-.89M8.8 7.47l3.02 3.02c.08.08.2.13.31.13s.23-.05.31-.13l2.99-2.99c.71-.74 1.52-.91 2.43-.91l-3.72-3.71c-1.17-1.17-3.07-1.17-4.24 0l-3.71 3.7c1.76 0 2.3.58 2.61.89",
            },
            "0",
          ),
          (0, o.jsx)(
            "path",
            {
              d: "m21.11 9.85-2.25-2.26H17.6c-.54 0-1.08.22-1.45.61l-3 3c-.28.28-.65.42-1.02.42-.36 0-.74-.15-1.02-.42L8.09 8.17c-.38-.38-.9-.6-1.45-.6H5.17l-2.29 2.3c-1.17 1.17-1.17 3.07 0 4.24l2.29 2.3h1.48c.54 0 1.06-.22 1.45-.6l3.02-3.02c.28-.28.65-.42 1.02-.42s.74.14 1.02.42l3.01 3.01c.38.38.9.6 1.45.6h1.26l2.25-2.26c1.17-1.18 1.17-3.1-.02-4.29",
            },
            "1",
          ),
        ],
        "Pix",
      );
    },
    15928: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2m-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69z",
        }),
        "LocalActivity",
      );
    },
    19203: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => r });
      var n,
        i = t(14232);
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var n in t)
                  ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      let r = function (e) {
        return i.createElement(
          "svg",
          o(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 8 5",
            },
            e,
          ),
          n ||
            (n = i.createElement("path", {
              fill: "#282828",
              d: "M1.413.693 4 3.28 6.586.693a.664.664 0 1 1 .94.94l-3.06 3.06c-.26.26-.68.26-.94 0l-3.06-3.06a.664.664 0 0 1 0-.94.68.68 0 0 1 .947 0",
            })),
        );
      };
    },
    19870: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "M18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61M20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4M4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9zm5.03 1.71L11 9.53v4.94l-1.97-1.18-.48-.29H4v-2h4.55zM15.5 12c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34",
        }),
        "CampaignOutlined",
      );
    },
    24977: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z",
        }),
        "InsertChart",
      );
    },
    27052: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => o });
      var n = t(37876),
        i = t(49577);
      let o = (e) => {
        let { width: a, height: t, className: o } = e;
        return (0, n.jsx)(i.Hg, {
          className: o,
          width: a,
          height: t,
          viewBox: "0 -1 18 18",
          children: (0, n.jsx)("path", {
            d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z",
          }),
        });
      };
    },
    28249: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21",
        }),
        "Bolt",
      );
    },
    29655: (e, a, t) => {
      "use strict";
      t.d(a, {
        J9: () => k,
        gj: () => z,
        Ox: () => A,
        G8: () => j,
        pH: () => v,
        ao: () => x,
        Me: () => w,
        vm: () => f,
        mS: () => C,
        xW: () => u,
        ir: () => d,
        RE: () => m,
        w2: () => p,
        LN: () => g,
        yB: () => q,
        y4: () => h,
        Pj: () => S,
      });
      var n = t(11639),
        i = t(95329),
        o = t(64137),
        r = t(15722),
        s = t(14232);
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var n in t)
                  ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      var c = t(42040);
      let d = (0, i.default)(o.wn).withConfig({ componentId: "sc-84a1bdb1-0" })(
          ["@media ", "{margin-top:12px;border-radius:8px 8px 0 0;}"],
          r.A.phone,
        ),
        h = (0, i.default)(o.wn).withConfig({ componentId: "sc-84a1bdb1-1" })(
          ["position:sticky;top:15px;@media ", "{border-radius:0 0 8px 8px;}"],
          r.A.phone,
        ),
        u = i.default.figure.withConfig({ componentId: "sc-84a1bdb1-2" })(
          [
            "position:relative;padding-bottom:58.5%;margin:0;@media ",
            "{padding-bottom:50%;}",
          ],
          r.A.phone,
        ),
        m = i.default.img.withConfig({ componentId: "sc-84a1bdb1-3" })([
          "position:absolute;top:0;left:0;width:100%;height:100%;border-radius:8px;object-fit:cover;",
        ]),
        p = (0, i.default)(function (e) {
          return s.createElement(
            "svg",
            l(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 700,
                height: 350,
                viewBox: "0 0 700 350",
              },
              e,
            ),
            s.createElement("path", {
              d: "M0 370c0-5.5.186-10 .413-10 .228 0 1.762 1.833 3.41 4.074l2.996 4.074-2.001 5.926L2.816 380H0Zm19.066 4.832c1.12-2.843 2.929-6.42 4.018-7.95 1.09-1.53 3.843-4.375 6.119-6.324s6.649-4.49 9.718-5.647l5.579-2.105 8 .495 8 .495 35 12.452c19.25 6.848 35.675 12.708 36.5 13.023s-24.706.607-56.735.65l-58.236.08zM210 378.862c1.925-.528 17.9-4.96 35.5-9.85s50.9-14.142 74-20.561l42-11.672 7.5.447 7.5.447 5.284 2.697c2.906 1.484 7.05 4.464 9.209 6.623s4.897 5.832 6.087 8.163 3.163 7.863 4.386 12.292 2.549 9.065 2.946 10.302l.723 2.25-22.818-.004-22.817-.004-4.92-2.496-4.919-2.496h-11.363l-4.702 2.5-4.702 2.5-61.197-.09-61.197-.09zm207.958-3.112c-.615-2.337-2.264-8.3-3.665-13.25-1.4-4.95-3.39-10.67-4.42-12.71S408 345.382 408 344.53s3.6-6.068 8-11.59c4.4-5.524 8-10.92 8-11.991V319h-19.1l-2.801 1.449c-1.541.797-4.205 3.047-5.92 5s-3.434 3.551-3.82 3.551-3.662-1.19-7.28-2.643l-6.579-2.643-9.5-.475-9.5-.476-2.11-1.924-2.11-1.924-8.39.292-8.39.293v8.785l-2 .834c-1.1.46-13.7 4.037-28 7.952s-29.803 8.199-34.452 9.521-8.797 2.059-9.22 1.636.152-6.102 1.279-12.62 1.78-12.921 1.452-14.23l-.597-2.378-10.731-.118c-5.902-.065-12.081-.435-13.731-.82l-3-.703 28.5-.713c15.675-.392 62.972-.566 105.105-.386l76.605.326 15.566 9.28c8.562 5.105 15.835 9.98 16.162 10.834.328.855.163 2.075-.366 2.713s-2.414 10.03-4.189 20.873L473.656 380h-54.579zM486 379.544c0-.251 1.125-7.427 2.5-15.947s2.5-16.688 2.5-18.152v-2.662l2.366.594c1.301.327 9.201 4.65 17.555 9.608S526.76 362 527.555 362H529l.015-8.75c.008-4.812.376-9.318.817-10.012l.8-1.262 3.434 1.17c1.889.644 4.879 2.42 6.644 3.947s5.14 3.892 7.5 5.256 6.734 3.194 9.721 4.066l5.432 1.585h48.519l.55.89c.303.49-.518 1.592-1.825 2.448s-3.553 3.919-4.991 6.806c-1.439 2.887-2.616 6.735-2.616 8.552V380h-81.577l-3.923-2-3.923-2h-12.674l-4.14 2c-2.276 1.1-5.63 2-7.45 2-1.823 0-3.313-.205-3.313-.456m165.595-3.677c-.364-2.274-.445-4.35-.18-4.615.264-.265 2.579.691 5.143 2.124s5.1 2.336 5.634 2.005l.973-.6-.31-8.14-.309-8.141 16.249-.275 16.249-.275.358 1.275c.197.701.89 4.875 1.54 9.275.649 4.4 1.408 8.788 1.687 9.75l.506 1.75h-46.88zM145.5 369.852c-13.75-4.924-27.7-9.965-31-11.202l-6-2.248V343.5l29.915-1.184 29.916-1.183 11.084 6.03c6.097 3.318 11.872 6.733 12.835 7.59.962.856 1.75 2.266 1.75 3.133 0 .866-.98 3.938-2.176 6.825l-2.176 5.25-3.353 1.107c-1.844.608-5.635 2.642-8.424 4.52-2.79 1.876-5.59 3.368-6.222 3.315s-12.399-4.126-26.149-9.05zm93.5-14.807c0-.612 2.96-6.268 6.577-12.568s6.992-11.71 7.5-12.024l.923-.571-.018 2.309c-.01 1.27-.682 6.059-1.493 10.642-.81 4.583-1.745 8.773-2.078 9.311s-1.574 1.344-2.758 1.79-3.615 1.13-5.403 1.518l-3.25.707zM193.66 338.9l-21.84-11.934-27.16 1.041c-14.938.573-37.735 1.463-50.66 1.978s-38.596 1.487-57.048 2.16c-18.451.673-34.314.93-35.25.571L0 332.063l.052-74.782.053-74.781 1.697 2.476c.934 1.362 3.048 4.027 4.698 5.922s7.038 6.08 11.972 9.3c4.935 3.22 10.665 6.362 12.734 6.982s4.384 1.845 5.145 2.723c.76.879 8.643 13.237 17.516 27.463S70 263.758 70 264.401s-.948 3.853-2.107 7.134l-2.107 5.965.51 5.736c.282 3.154 1.519 7.816 2.75 10.358 1.23 2.542 3.764 6.149 5.63 8.014 1.865 1.866 5.61 4.517 8.324 5.892l4.934 2.5 7.283-.022 7.283-.022 4.5-2.033c2.475-1.118 6.226-3.695 8.335-5.728s4.801-5.495 5.983-7.695l2.148-4 .017-9 .017-9-2.389-4.853-2.389-4.852 8.694-16.648c4.782-9.156 11.441-22.16 14.8-28.897L148.32 205h27.944l3.618 2.197c1.99 1.209 3.949 2.671 4.353 3.25s.741 12.32.75 26.093l.015 25.04 1.532 5.96c.842 3.278 3.02 9.11 4.841 12.96s5.52 9.578 8.219 12.729c2.7 3.15 7.927 8 11.617 10.776l6.71 5.047.29 19.724c.16 10.848.13 20.286-.066 20.974s-.871 1.212-1.5 1.167c-.629-.046-10.97-5.454-22.983-12.017M.333 347.333a.946.946 0 0 1 1.334 0c.366.367.066.667-.667.667s-1.033-.3-.667-.667M562 345.065c-1.375-.42-4.3-1.693-6.5-2.83-2.2-1.136-5.664-3.791-7.698-5.9-2.033-2.11-4.859-6.378-6.278-9.487l-2.581-5.652.278-63.848.279-63.848 2.293-4.295c1.262-2.362 3.89-6.061 5.84-8.22s6.093-5.176 9.206-6.705l5.661-2.78 68.75-.295 68.75-.295v28.604l-4.397-.35-4.396-.349-4.535 2.006-4.534 2.005-3.02 4.17-3.02 4.17-.655 4.365-.654 4.365 1.28 4.995 1.28 4.996-13.796 24.056L649.757 278h-6.447l-1.513-1.75c-.833-.962-7.257-11.818-14.276-24.124l-12.763-22.375 1.12-3.741c.618-2.058 1.112-5.49 1.1-7.626s-.853-5.684-1.868-7.884-2.924-4.991-4.242-6.202c-1.317-1.212-4.062-2.899-6.1-3.75-2.037-.852-5.406-1.538-7.486-1.526s-5.6.848-7.823 1.858-5.222 3.238-6.664 4.952c-1.443 1.715-3.164 4.756-3.825 6.76l-1.202 3.641.467 4.866.468 4.865 2.662 3.842c1.464 2.112 4.344 4.763 6.399 5.889s4.93 2.328 6.39 2.671l2.654.624 12.47 21.755c6.859 11.965 13.195 23.183 14.082 24.928l1.611 3.172-1.963 4.328-1.964 4.327v12l2.037 4.5c1.12 2.475 3.248 5.794 4.728 7.376s4.94 3.94 7.69 5.24l5 2.364 5.5-.012 5.5-.012 4.5-2.037c2.476-1.12 5.795-3.248 7.377-4.728 1.583-1.48 3.94-4.941 5.24-7.691l2.364-5-.012-6-.012-6-2.006-4.423-2.007-4.423 13.586-23.812c7.471-13.097 14.266-24.494 15.1-25.327s2.157-1.515 2.943-1.515H700v108l-67.75-.086c-37.262-.047-68.875-.43-70.25-.85zm-81-30.588-27.5-16.42-105.54-.029L242.42 298l-5.905-1.538c-3.247-.846-8.218-2.862-11.045-4.48-2.827-1.617-7.486-5.42-10.354-8.453l-5.213-5.512-3.202-6.759-3.201-6.758-.302-91-.303-91 1.672-6.279c.919-3.453 3.345-8.869 5.39-12.034 2.046-3.165 5.705-7.483 8.131-9.595s7.163-5.148 10.525-6.746 8.762-3.34 12-3.87l5.887-.964 111.114-.006L468.727 43l5.382 1.02c2.96.562 8.165 2.323 11.566 3.915 3.401 1.591 8.216 4.766 10.7 7.056s5.937 6.378 7.675 9.087c1.739 2.709 4.013 7.664 5.055 11.012L511 81.178V331l-1.25-.052c-.688-.028-13.625-7.44-28.75-16.472zm-106.5-44.7c2.75-1.43 6.832-4.18 9.07-6.112s5.476-6.15 7.193-9.373l3.124-5.86.942-5.966.942-5.966-.794-5.71c-.436-3.14-1.917-8.164-3.29-11.165l-2.498-5.455 20.65-36.112 20.65-36.113 4.006-.977c2.203-.538 5.949-1.955 8.325-3.149s6.055-4.142 8.175-6.55c2.12-2.41 4.564-6.46 5.43-9.003.866-2.542 1.575-6.937 1.575-9.766s-.709-7.224-1.575-9.766c-.866-2.543-3.437-6.738-5.712-9.323l-4.137-4.7-5.038-2.345-5.038-2.346-7 .012-7 .012-4.065 1.846c-2.236 1.016-5.753 3.328-7.815 5.138-2.061 1.81-4.905 5.574-6.318 8.363l-2.57 5.07-.473 6.02-.474 6.019 2.03 5.745 2.03 5.746-20.172 35.254L364.5 198.5l-5.147.299-5.147.298-1.947-2.798c-1.071-1.54-10.37-17.561-20.665-35.604l-18.718-32.805 1.812-4.695 1.812-4.695-.055-6.679-.056-6.679-2.962-5.792-2.963-5.793-4.827-3.649c-2.656-2.007-6.525-4.157-8.599-4.778-2.073-.622-6.418-1.126-9.654-1.12l-5.884.01-5 2.37c-2.75 1.304-6.663 4.112-8.695 6.24s-4.61 5.895-5.728 8.37l-2.033 4.5v14l2.033 4.5c1.118 2.475 3.695 6.226 5.728 8.335s5.29 4.659 7.241 5.666 5.184 2.14 7.185 2.515 4.286 1.425 5.079 2.333c.792.908 10.271 17.082 21.065 35.941S328 213.456 328 213.916s-1.21 3.479-2.69 6.71l-2.692 5.874-.059 9.5-.059 9.5 2.901 6.282 2.9 6.282 5.819 5.387 5.818 5.386 5.281 2.086 5.281 2.086 9.5-.316 9.5-.316zM231.504 321.75c-.238-.687-.562-2.6-.719-4.25l-.285-3 2.527.84c1.693.562 3.18 1.285 3.963 1.451l1.8.382-3.283 2.575c-1.873 1.47-2.627 3.252-2.961 3.252s-.804-.562-1.042-1.25M90.395 251.235c-.607-.404-7.245-10.558-14.75-22.564S62 206.428 62 205.921V205h30c16.5 0 30 .361 30 .803s-2.743 5.954-6.095 12.25-8.502 16.227-11.444 22.069-6.086 10.904-6.987 11.25c-.9.345-2.613.621-3.806.613-1.192-.008-2.665-.346-3.273-.75m16.082-58.203-75.022-.532-6.671-3.285-6.671-3.285-3.078-3.885c-1.692-2.137-4.08-6.06-5.306-8.715L7.5 168.5v-127l3.182-6.087c1.75-3.347 4.877-7.575 6.95-9.394 2.071-1.82 5.814-4.255 8.317-5.413L30.5 18.5h166l4.695 2.313c2.582 1.271 6.52 4.137 8.75 6.367S214 32.044 214 33.032v1.798l-5.036 3.696c-2.77 2.034-7.082 6.21-9.584 9.28s-5.904 8.27-7.561 11.553-3.737 8.033-4.622 10.555l-1.609 4.586-.544 59.487-.544 59.487-1.5.045c-.825.025-35.26-.194-76.523-.487m19.164-19.849c2.197-1.12 5.627-3.844 7.62-6.051l3.626-4.013 1.557-5.24c.856-2.883 1.556-6.509 1.556-8.056 0-1.548-.926-5.49-2.057-8.759l-2.057-5.943 1.501-2.903c.826-1.596 6.742-12.086 13.148-23.31 6.406-11.225 12.394-21.125 13.306-22 .913-.877 3.793-2.375 6.402-3.33l4.743-1.738 3.032-3.67c1.667-2.019 3.51-5.438 4.093-7.599l1.062-3.929-.635-4.238-.636-4.239-2.938-4.055c-1.615-2.23-4.725-4.968-6.91-6.083L168.08 46h-10.404l-4.312 2.527-4.31 2.526-2.527 4.311L144 59.676v5.615c0 3.088.508 6.73 1.129 8.093l1.129 2.477-13.912 24.32-13.912 24.319h-7.626L97.344 101C89.94 88.075 83.84 76.825 83.79 76s.435-3.381 1.08-5.68l1.17-4.18-1.075-4.799c-.59-2.638-2.2-6.274-3.577-8.078-1.377-1.805-4.259-4.177-6.405-5.272L71.08 46H60.9l-3.2 1.62c-1.76.892-4.035 2.354-5.056 3.25-1.021.897-2.773 3.425-3.892 5.618l-2.035 3.988-.044 5.012-.043 5.012 2.157 4.155c1.187 2.286 3.32 5.07 4.742 6.189 1.421 1.118 4.715 2.74 7.318 3.605l4.735 1.573 1.556 2.739c.856 1.506 7.072 12.329 13.814 24.05l12.258 21.31-.523 2.19c-.288 1.204-1.278 4.214-2.2 6.689l-1.678 4.5.614 5.336c.338 2.935 1.332 6.76 2.208 8.5s3.005 4.665 4.731 6.5 4.485 4.04 6.132 4.9c1.646.862 4.12 1.937 5.5 2.39 1.378.451 5.014.658 8.078.459l5.573-.363zm403.04 10.418c.018-1.27.203-24.951.052-54.101l-.275-53-2.31-7c-1.27-3.85-4.032-9.935-6.138-13.522s-6.214-8.946-9.13-11.908c-2.917-2.963-7.952-7.1-11.19-9.193-3.24-2.093-6.745-4.077-7.79-4.409s-1.9-1.052-1.9-1.6v-.999l23.75.316 23.75.315 4.222 2.256c2.322 1.241 5.827 3.665 7.788 5.387s4.63 4.982 5.929 7.244 2.857 6.498 3.462 9.412L560 58.1l-.015 49.7c-.008 27.336-.346 50.22-.75 50.854s-3.21 2.265-6.235 3.625-7.434 3.897-9.798 5.639c-2.364 1.74-5.621 5.251-7.238 7.8-1.617 2.55-5.47 5.885-5.588 7.888-.168.097-1.253 1.665-1.696-.004zm43.999-25.255c-.374-.373-.68-10.954-.68-23.513V112l23.75.083 23.75.083 10.981 6.667 10.981 6.667 2.403 4.357 2.403 4.358-1.811 3.642-1.812 3.643-.572 8.5-.573 8.5-34.07.263c-18.74.145-34.377-.043-34.75-.417m119.241-.596c-.043-.687-.013-4.042.067-7.454l.146-6.204-2.078-4.698-2.078-4.698 5.994-10.598 5.995-10.598.016 22.75.016 22.75h-8l-.08-1.25zm-50.75-46.78-18.33-10.936-25.17-.267L572.5 99.5l-.285-10.817-.284-10.816 3.043-2.842c1.673-1.563 3.929-4.796 5.012-7.184l1.97-4.341.022-5.74.022-5.739-1.905-5.013-1.905-5.014 14.155-24.67L606.5-7.347l4.385-1.262 4.384-1.26 3.485-3.316c1.916-1.824 4.106-4.764 4.865-6.534s1.38-4.807 1.38-6.75V-30h37.014l-.257 75.667-.256 75.666-1 .287c-.55.157-9.248-4.635-19.33-10.65zm33.045-7.125L674.5 92.5l6.41-.79 6.41-.79.842.842.842.842-6.511 10.948c-3.581 6.021-6.972 11.103-7.536 11.293l-1.024.344zm24.117-12.512a.946.946 0 0 1 1.334 0c.366.367.067.667-.667.667-.733 0-1.033-.3-.667-.667m-23.981-14.858c-.241-.628-.306-4.882-.145-9.453l.293-8.311 1.5-.808c.825-.444 3.285-1.602 5.467-2.572s5.714-3.512 7.85-5.649c2.137-2.136 4.788-5.925 5.891-8.42 1.104-2.494 2.231-7.061 2.506-10.149l.5-5.613-2.17-6c-1.193-3.3-2.406-6.946-2.695-8.103l-.526-2.103 3.338-6.397L699.5-3.5l.262 39.905c.143 21.948.143 40.008 0 40.134-.144.126-5.822.42-12.617.653l-12.355.425zM558.997 27.496c-.686-.827-3.943-3.264-7.236-5.416l-5.988-3.912L535.841.834 525.908-16.5l.62-2c.341-1.1.87-4.138 1.173-6.75l.553-4.75h57.312l1.289 6.97 1.289 6.968L577.447 2.72c-5.884 10.33-11.773 20.468-13.086 22.531s-2.778 3.75-3.253 3.75-1.425-.677-2.111-1.504zM224.145 24.75c-1.11-1.788-3.735-4.891-5.832-6.897s-6.407-5.286-9.577-7.29l-5.764-3.642 1.034-1.932c.568-1.062 2.712-3.565 4.764-5.562s5.383-4.477 7.404-5.51l3.674-1.88 49.795-11.019L319.437-30h82.164l2.273 4.678c1.25 2.573 4.005 12.36 6.122 21.75s3.514 17.42 3.104 17.845c-.41.426-9.039.65-19.173.5L375.5 14.5l-.619-5.757-.618-5.756-2.743-3.958-2.743-3.959-4.204-2.035L360.369-9h-4.62c-2.54 0-5.886.479-7.434 1.064s-4.11 2.272-5.691 3.75c-1.582 1.477-3.71 4.486-4.728 6.686-1.019 2.2-1.852 5.8-1.852 8s.89 5.962 1.978 8.36S340 23.62 340 24.11V25h-59.904l-3.028-4.401-3.028-4.401-4.336-2.1L265.37 12h-9.449l-3.902 1.99c-2.146 1.096-5.14 3.683-6.655 5.75-1.514 2.068-3.051 4.124-3.416 4.568-.365.445-3.764 1.457-7.555 2.25S227.201 28 226.833 28s-1.577-1.462-2.687-3.25zM.607 22.418C.273 21.548 0 9.398 0-4.582V-30h98.733l-.493 6.889-.493 6.889 1.218 5.075 1.218 5.076 3.943 5.508 3.944 5.507-2.66.668c-1.463.367-12.391.384-24.285.037s-29.115-.27-38.269.17l-16.644.802-6.686 3.292-6.687 3.292-5.398 5.397C4.472 21.571 1.857 24 1.63 24c-.23 0-.69-.712-1.023-1.582m425.886-8.668c-.244-.687-2.24-9.395-4.437-19.351s-4.457-19.323-5.024-20.815-1.032-2.91-1.032-3.15c0-.238 4.712-.434 10.471-.434h10.47l.28 13.25c.153 7.287-.244 16.942-.884 21.454-.639 4.512-1.453 8.675-1.809 9.25S432.319 15 430.41 15h-3.473zM450-7.5V-30h39l.022 3.25c.012 1.788.848 5.069 1.858 7.291s3.27 5.249 5.023 6.724 4.972 3.217 7.154 3.87c2.182.654 4.52 1.856 5.197 2.671.677.816 3.56 5.57 6.406 10.567 2.847 4.996 4.961 9.431 4.699 9.855S503.384 15 484.441 15H450ZM152.524 5.038c-.327-.529.971-3.341 2.886-6.25 1.914-2.908 4.017-7.46 4.674-10.116l1.193-4.829-.58-6.921-.58-6.922h74.573l1.831 2.024 1.832 2.023-.927.862c-.51.474-5.651 1.853-11.426 3.065l-10.5 2.203-5.627 2.985c-3.095 1.642-7.536 4.865-9.868 7.162s-5.548 6.481-7.147 9.299l-2.906 5.123-3.726.616c-2.05.339-10.337.62-18.417.627L153.118 6ZM674.667-8.667c-.367-.366-.667-5.316-.667-11V-30h6.5c3.575 0 6.5.148 6.5.33 0 .18-2.508 5.13-5.572 11-3.065 5.868-5.69 10.67-5.834 10.67s-.56-.3-.927-.667",
              style: { fill: "#44b768" },
            }),
          );
        }).withConfig({ componentId: "sc-84a1bdb1-4" })([
          "position:absolute;top:0;left:0;width:100%;height:100%;border-radius:8px;",
        ]),
        g = (0, i.default)(n.Container).withConfig({
          componentId: "sc-84a1bdb1-5",
        })(["@media ", "{padding-top:20px;}"], r.A.tabletAndDesktop),
        f = (0, i.default)(o.wn).withConfig({ componentId: "sc-84a1bdb1-6" })([
          "margin-left:-16px;margin-right:-16px;padding-left:16px;padding-right:16px;",
        ]),
        x = i.default.div.withConfig({ componentId: "sc-84a1bdb1-7" })([
          "margin-top:30px;",
        ]),
        j = (0, i.default)(o.wn).withConfig({ componentId: "sc-84a1bdb1-8" })(
          [
            "button{display:flex;align-items:center;background-color:",
            ";border:0;padding:0;cursor:pointer;}",
          ],
          o.Tj.gray250,
        ),
        v = (0, i.default)(o.wn).withConfig({ componentId: "sc-84a1bdb1-9" })([
          "overflow-y:auto;scrollbar-width:thin;max-height:40vh;",
        ]),
        w = i.default.div.withConfig({ componentId: "sc-84a1bdb1-10" })([
          "position:absolute;top:12px;right:12px;",
        ]),
        { perView: b, spacing: y } = c.Lt,
        C = i.default.div.withConfig({ componentId: "sc-84a1bdb1-11" })(
          [
            "position:relative;@media ",
            "{",
            "{right:calc(100% - (100% - ",
            "px) / ",
            " + 12px);}}",
          ],
          r.A.phone,
          w,
          (y * (b - 1)).toFixed(2),
          b,
        ),
        A = i.default.div.withConfig({ componentId: "sc-84a1bdb1-12" })([
          "width:256px;",
        ]),
        S = (0, i.default)(o.wn).withConfig({ componentId: "sc-84a1bdb1-13" })([
          "width:48px;height:48px;border-radius:50%;",
        ]),
        k = (0, i.default)(o.wn).withConfig({ componentId: "sc-84a1bdb1-14" })([
          "width:25%;",
        ]),
        z = (0, i.default)(o.wn).withConfig({ componentId: "sc-84a1bdb1-15" })([
          "width:75%;",
        ]);
      ((0, i.default)(o.wn).withConfig({ componentId: "sc-84a1bdb1-16" })([
        "position:absolute;bottom:10000px;left:10000px;",
      ]),
        i.default.div.withConfig({ componentId: "sc-84a1bdb1-17" })(
          ["svg{width:16px;height:16px;path{fill:", ";}}"],
          o.Tj.green700,
        ));
      let q = i.default.div.withConfig({ componentId: "sc-84a1bdb1-18" })(
        [
          "scroll-margin-top:112px;scroll-margin-bottom:40px;@media ",
          "{scroll-margin-top:80px;}",
        ],
        r.A.phone,
      );
    },
    31098: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "M1 11h4v11H1zm15-7.75C16.65 2.49 17.66 2 18.7 2 20.55 2 22 3.45 22 5.3c0 2.27-2.91 4.9-6 7.7-3.09-2.81-6-5.44-6-7.7C10 3.45 11.45 2 13.3 2c1.04 0 2.05.49 2.7 1.25M20 17h-7l-2.09-.73.33-.94L13 16h2.82c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L8.97 11H7v9.02L14 22l8.01-3c-.01-1.1-.9-2-2.01-2",
        }),
        "VolunteerActivism",
      );
    },
    31256: (e, a, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/campaign/show/show",
        function () {
          return t(46653);
        },
      ]);
    },
    31370: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z",
        }),
        "Favorite",
      );
    },
    31914: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", { d: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z" }),
        "Warning",
      );
    },
    42040: (e, a, t) => {
      "use strict";
      t.d(a, {
        KU: () => i,
        Lt: () => r,
        QO: () => c,
        VL: () => d,
        h_: () => h,
        nm: () => f,
        wZ: () => x,
        z1: () => u,
      });
      var n = t(29454);
      let i = "show-campaign-gallery-exposed",
        o = { mobile: "340x170", desktop: "700x410" },
        r = { perView: 1.08, spacing: 8 },
        s = ["variant", "control"],
        l = "vk_gallery_exposure",
        c = (e) => (e.gallery || []).filter((e) => !!e.original),
        d = (e, a) =>
          "".concat(e.split("?")[0], "?ims=").concat(a ? o.mobile : o.desktop),
        h = (e) => Math.max(0, e - 1),
        u = (e) => {
          var a;
          return !!(
            (null == (a = e.image) ? void 0 : a.original) &&
            !e.image.original.includes("vaquinha_default")
          );
        },
        m = (e) => {
          let a;
          return (
            !!e &&
            s.includes(e.variant) &&
            ((a = e.exposedAt), Date.now() - Date.parse(a) <= 864e5)
          );
        },
        p = () => {
          try {
            let e = JSON.parse(n.A.get(l) || "{}");
            return e && "object" == typeof e ? e : {};
          } catch (e) {
            return {};
          }
        },
        g = (e, a) => {
          let [, t] = e,
            [, n] = a;
          return Date.parse(n.exposedAt) - Date.parse(t.exposedAt);
        },
        f = (e, a) => {
          let t = Object.entries(p())
              .filter((a) => {
                let [t, n] = a;
                return t !== String(e) && m(n);
              })
              .sort(g)
              .slice(0, 9),
            i = Object.fromEntries([
              [String(e), { variant: a, exposedAt: new Date().toISOString() }],
              ...t,
            ]);
          n.A.set(l, JSON.stringify(i), { path: "/", expires: 1 });
        },
        x = (e) => {
          let a = p()[e];
          return m(a) ? a : null;
        };
    },
    43422: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3",
        }),
        "Groups",
      );
    },
    44111: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => r });
      var n = t(37876),
        i = t(34846),
        o = t(49577);
      let r = (e) => {
        let { width: a, height: t, id: r, className: s } = e,
          { t: l } = (0, i.Bd)();
        return (0, n.jsxs)(o.Ik, {
          className: s,
          viewBox: "350 0 766 758",
          width: a,
          height: t,
          id: r,
          children: [
            (0, n.jsx)("title", { children: l("campaign.copyLink") }),
            (0, n.jsx)("path", {
              className: "cls-2",
              d: "M806.32,188.44H597.7a34.87,34.87,0,0,0-34.84,34.73V466.71H597.7V223.17H806.32Z",
            }),
            (0, n.jsx)("path", {
              className: "cls-2",
              d: "M858.56,258v0H667.25a35,35,0,0,0-34.84,34.83V536.28a35,35,0,0,0,34.84,34.83H858.56a34.9,34.9,0,0,0,34.72-34.83V292.8A34.9,34.9,0,0,0,858.56,258Zm0,278.29H667.25V292.8H858.56Z",
            }),
          ],
        });
      };
    },
    44121: (e, a, t) => {
      "use strict";
      t.d(a, { C: () => i });
      var n = t(34016);
      let i = async (e, a) =>
        (0, n.A)({
          endpoint: "v1/public/vakinha_spotlights/draw",
          query: { section: e, exclude_vakinha_id: a },
        });
    },
    46653: (e, a, t) => {
      "use strict";
      (t.r(a), t.d(a, { __N_SSP: () => nn, default: () => ni }));
      var n,
        i,
        o,
        r,
        s,
        l,
        c,
        d,
        h,
        u,
        m,
        p,
        g,
        f,
        x,
        j,
        v,
        w,
        b,
        y,
        C,
        A,
        S,
        k,
        z = t(37876),
        q = t(77328),
        M = t.n(q),
        I = t(29454),
        F = t(89099),
        T = t.n(F),
        D = t(18847),
        P = t.n(D),
        E = t(15558),
        _ = t.n(E),
        V = t(76586),
        O = t(86649),
        L = t(88889),
        G = t.n(L),
        H = t(78226),
        R = t(84268),
        N = t(80572),
        B = t(11639),
        W = t(14232),
        $ = t(64137),
        U = t(33563),
        K = t(27415),
        Q = t(36445),
        Y = t(95329),
        X = t(19203);
      let Z = (0, Y.default)(X.A).withConfig({ componentId: "sc-a9c8eb20-0" })(
          ["width:12px;height:8px;transform:rotate(90deg);path{fill:", ";}"],
          $.Tj.orange450,
        ),
        J = (e) => {
          let { vakinhaId: a, slug: t } = e,
            { query: n } = (0, F.useRouter)(),
            { trackPostHogEvent: i } = (0, Q.z)();
          return "spotlight_view" !== n.origin
            ? null
            : (0, z.jsx)($.wn, {
                flex: !0,
                padding: [0, 0, 16],
                children: (0, z.jsx)(U.A, {
                  route: "statistics",
                  params: { slug: t },
                  onClick: () => {
                    i("spotlight_view_back_clicked", { vakinha_id: a });
                  },
                  children: (0, z.jsxs)($.wn, {
                    flex: !0,
                    alignItems: "center",
                    columnGap: 8,
                    padding: [4, 12],
                    borderRadius: 24,
                    backgroundColor: "orange300",
                    children: [
                      (0, z.jsx)(Z, { "aria-hidden": !0 }),
                      (0, z.jsx)($.o5, {
                        fontFamily: K.a,
                        fontSize: 12,
                        weight: 700,
                        color: "orange450",
                        children: "Voltar para estat\xedsticas",
                      }),
                    ],
                  }),
                }),
              });
        };
      var ee = t(44879),
        ea = t(62874),
        et = t(1410),
        en = t(84610),
        ei = t(71802),
        eo = t(45615),
        er = t(94416);
      let es = (0, Y.keyframes)([
          "0%{transform:scale(1);opacity:0.8;}100%{transform:scale(1.8);opacity:0;}",
        ]),
        el = Y.default.span.withConfig({ componentId: "sc-b455c074-0" })(
          [
            "position:absolute;inset:0;border-radius:50%;border:3px solid ",
            ";pointer-events:none;animation:",
            " 1.5s ease-out infinite;@media (prefers-reduced-motion:reduce){animation:none;}",
          ],
          $.Tj.green400,
          es,
        ),
        ec = Y.default.span.withConfig({ componentId: "sc-b455c074-1" })([
          "display:contents;",
        ]),
        ed = (e) => {
          let { vakinhaId: a, freeStickersClaimState: t, children: n } = e,
            [i, o] = (0, W.useState)(!1),
            r = (null == t ? void 0 : t.status) === "stickersGranted",
            s = {
              vakinha_id: a,
              contribution_id: null == t ? void 0 : t.contributionId,
              placement: "campaign_show_sticker_button",
            };
          return ((0, W.useEffect)(() => {
            r &&
              (0, er.$)({
                eventName: "free_stickers_hint_viewed",
                properties: s,
              });
          }, [r]),
          r)
            ? (0, z.jsxs)(ec, {
                onClickCapture: () => {
                  i ||
                    ((0, er.$)({
                      eventName: "free_stickers_hint_clicked",
                      properties: s,
                    }),
                    o(!0));
                },
                children: [
                  n,
                  !i && (0, z.jsx)(el, { "data-cy": "sticker-hint-ring" }),
                ],
              })
            : n;
        };
      var eh = t(31370);
      let eu = (e) => {
        let { freeStickersClaimState: a } = e,
          { setUserStickersQuantity: t } = (0, W.useContext)(eo.A);
        return ((0, W.useEffect)(() => {
          a && t(a.userStickersBalance);
        }, [a]),
        (null == a ? void 0 : a.status) !== "stickersGranted")
          ? null
          : (0, z.jsx)($.wn, {
              paddingDesktop: [0, 0, 24],
              paddingMobile: [16, 0, 12],
              children: (0, z.jsxs)($.wn, {
                flex: !0,
                alignItems: "center",
                columnGap: 8,
                padding: [8],
                borderRadius: 8,
                backgroundColor: "green50",
                border: !0,
                borderColor: "green200",
                borderStyle: "solid",
                children: [
                  (0, z.jsx)($.hh, {
                    color: "green700",
                    size: 20,
                    children: (0, z.jsx)(eh.A, {}),
                  }),
                  (0, z.jsxs)($.o5, {
                    fontFamily: K.f,
                    fontSize: 12,
                    color: "black",
                    children: [
                      "Voc\xea recebeu",
                      " ",
                      (0, z.jsx)("strong", { children: "15 cora\xe7\xf5es" }),
                      " ",
                      "para doar em vaquinhas do site.",
                    ],
                  }),
                ],
              }),
            });
      };
      var em = t(8146),
        ep = t(53928),
        eg = t(21052),
        ef = t(32636),
        ex = t(44111);
      function ej() {
        return (ej = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var n in t)
                  ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      let ev = function (e) {
        return W.createElement(
          "svg",
          ej(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 26,
              height: 24,
              fill: "none",
              viewBox: "0 0 26 24",
            },
            e,
          ),
          n ||
            (n = W.createElement("path", {
              fill: "#fff",
              d: "M3.188 11.366c1.76 0 3.187-1.414 3.187-3.157S4.948 5.05 3.188 5.05 0 6.465 0 8.21s1.427 3.157 3.188 3.157M8.925 6.314c1.76 0 3.188-1.413 3.188-3.157S10.686 0 8.925 0c-1.76 0-3.187 1.414-3.187 3.157s1.427 3.157 3.187 3.157M16.575 6.314c1.76 0 3.187-1.413 3.187-3.157S18.335 0 16.575 0s-3.188 1.414-3.188 3.157 1.427 3.157 3.188 3.157M22.313 11.366c1.76 0 3.187-1.414 3.187-3.157S24.073 5.05 22.313 5.05s-3.188 1.414-3.188 3.158 1.427 3.157 3.188 3.157M19.558 14.978c-1.109-1.288-2.04-2.387-3.162-3.675-.586-.682-1.339-1.364-2.231-1.667a2.6 2.6 0 0 0-.42-.114c-.32-.05-.664-.05-.995-.05-.332 0-.676 0-1.008.063a2.6 2.6 0 0 0-.42.113c-.893.303-1.632.985-2.231 1.667-1.11 1.288-2.04 2.387-3.162 3.675-1.67 1.655-3.723 3.486-3.341 6.05.37 1.288 1.3 2.563 2.97 2.93.932.189 3.902-.556 7.064-.556h.23c3.162 0 6.133.732 7.063.555 1.67-.366 2.601-1.654 2.971-2.93.395-2.576-1.657-4.407-3.328-6.061",
            })),
        );
      };
      var ew = t(4924),
        eb = t(98922);
      let ey = Y.default.div.withConfig({ componentId: "sc-c9fdcb0d-0" })(
          ["min-height:", ";width:100%;display:flex;"],
          (e) => {
            let { isLarger: a } = e;
            return a ? "70px" : "45px";
          },
        ),
        eC = Y.default.div.withConfig({ componentId: "sc-c9fdcb0d-1" })(
          [
            "min-width:100px;width:100px;min-height:100%;background-color:",
            ";border-radius:5px 0 0 5px;padding:5px;",
          ],
          eb.Rg,
        ),
        eA = (0, Y.css)(["&&{background-color:", ";}"], eb.s5),
        eS = (0, Y.css)(["&&{background-color:", ";}"], eb.fV),
        ek = Y.default.div.withConfig({ componentId: "sc-c9fdcb0d-2" })(
          [
            "min-height:100%;width:100%;border-radius:0 5px 5px 0;padding-right:5px;",
            " ",
            " ",
            ";",
            ";",
          ],
          (e) => e.rounded && (0, Y.css)(["border-radius:5px;padding:0;"]),
          (e) => e.noBorder && (0, Y.css)(["border-radius:0;padding:0;"]),
          (e) => {
            let { variant: a } = e;
            return "primary" === a && (0, Y.css)(["", ";"], eA);
          },
          (e) => {
            let { variant: a } = e;
            return "light" === a && (0, Y.css)(["", ";"], eS);
          },
        ),
        ez = (e) => {
          let { children: a, isLarger: t } = e;
          return (0, z.jsx)(ey, { isLarger: t, children: a });
        };
      ((ez.ContentDescription = (e) => {
        let { children: a } = e;
        return (0, z.jsx)(eC, { children: a });
      }),
        (ez.InfoDescription = (e) => {
          let {
            children: a,
            rounded: t,
            variant: n = "primary",
            noBorder: i,
          } = e;
          return (0, z.jsx)(ek, {
            rounded: t,
            variant: n,
            noBorder: i,
            children: a,
          });
        }));
      var eq = t(56581),
        eM = t(89786),
        eI = t(847),
        eF = t(15722);
      let eT = (0, Y.default)($.wn).withConfig({
          componentId: "sc-bf13f7ff-0",
        })(["width:fit-content;@media ", "{width:100%;}"], eF.A.phone),
        eD = (e) => {
          let { badges: a, openBadgesTab: t } = e;
          return (0, z.jsxs)(eT, {
            backgroundColor: "gray100",
            padding: [8],
            flex: !0,
            columnGap: 12,
            alignItems: "center",
            borderRadius: 8,
            children: [
              (0, z.jsx)($.wn, {
                flex: !0,
                columnGap: 8,
                children: a.slice(0, 5).map((e) =>
                  (0, z.jsx)(
                    eM.A,
                    {
                      placement: "top",
                      trigger: "click",
                      overlay: e.name,
                      overlayStyle: { opacity: 1 },
                      overlayInnerStyle: {
                        fontFamily: K.f,
                        fontSize: 10,
                        color: $.Tj.gray600,
                        background: $.Tj.gray200,
                        borderRadius: 8,
                        padding: "8px 12px",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                        textAlign: "center",
                        opacity: 1,
                      },
                      showArrow: !1,
                      children: (0, z.jsx)($.wn, {
                        flex: !0,
                        flexDirection: "column",
                        justifyContent: "center",
                        children: (0, z.jsx)(eI.Ay, {
                          height: 32,
                          offset: 100,
                          children: (0, z.jsx)($.FW, {
                            width: "24",
                            height: "24",
                            ims: "24x24",
                            objectFit: "contain",
                            alt: e.name,
                            src: e.image,
                          }),
                        }),
                      }),
                    },
                    e.id,
                  ),
                ),
              }),
              (0, z.jsx)($.o5, {
                textDecoration: "underline",
                fontFamily: K.a,
                fontSize: 12,
                weight: 700,
                onClick: t,
                children: "Ver selos",
              }),
            ],
          });
        };
      var eP = t(88406),
        eE = t(31914),
        e_ = t(34016);
      let eV = async (e) =>
          (0, e_.A)({
            endpoint: "v1/public/vakinhas/keep_alive",
            method: "post",
            data: { token: e },
          }),
        eO = (e) => {
          let { token: a, slug: t } = e,
            [n, i] = (0, W.useState)(null),
            [o, r] = (0, W.useState)(!1),
            [s, l] = (0, W.useState)(!1),
            { trackPostHogEvent: c } = (0, Q.z)(),
            d = (0, W.useCallback)(async () => {
              r(!1);
              try {
                let { data: e } = await eV(a);
                (i(e),
                  l(!0),
                  c("show-campaign-keep-alive-modal", {
                    campaign_slug: t,
                    status: e.status,
                  }));
              } catch (e) {
                (r(!0),
                  l(!0),
                  c("show-campaign-keep-alive-modal", {
                    campaign_slug: t,
                    status: "error",
                  }));
              }
            }, [a, t, c]);
          (0, W.useEffect)(() => {
            ((() => {
              let e = new URL(window.location.href);
              (e.searchParams.delete("keep_alive_token"),
                window.history.replaceState(
                  window.history.state,
                  "",
                  "".concat(e.pathname).concat(e.search).concat(e.hash),
                ));
            })(),
              d());
          }, [d]);
          let h = (e) => () =>
            c("show-campaign-keep-alive-".concat(e), { campaign_slug: t });
          if (!n && !o) return null;
          let u = (null == n ? void 0 : n.status) === "closed",
            m = u || o;
          return (0, z.jsxs)($.dW, {
            isOpen: s,
            onClose: () => l(!1),
            padding: 20,
            width: 534,
            borderRadius: 16,
            children: [
              (0, z.jsxs)($.wn, {
                flex: !0,
                flexDirection: "column",
                alignItems: "center",
                rowGap: 16,
                children: [
                  (0, z.jsx)($.hh, {
                    backgroundColor: m ? "green700" : "green400",
                    color: "white",
                    size: 32,
                    borderRadius: "50%",
                    children: m ? (0, z.jsx)(eE.A, {}) : (0, z.jsx)(eP.A, {}),
                  }),
                  (0, z.jsxs)($.wn, {
                    flex: !0,
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: 8,
                    children: [
                      (0, z.jsx)($.o5, {
                        fontFamily: K.a,
                        fontSize: 20,
                        weight: 700,
                        align: "center",
                        color: "gray600",
                        children: o
                          ? "N\xe3o foi poss\xedvel confirmar"
                          : u
                            ? "Sua vaquinha foi encerrada!"
                            : "Sua vaquinha segue ativa!",
                      }),
                      (0, z.jsx)($.o5, {
                        fontFamily: K.f,
                        fontSize: 14,
                        align: "center",
                        color: "gray400",
                        children: o
                          ? "Erro ao confirmar sua vaquinha. Tente novamente."
                          : u
                            ? "Voc\xea pode criar uma nova vaquinha contando a sua hist\xf3ria ou entrar em contato com nosso time."
                            : n.closingDate
                              ? "Para continuar ativa, ela precisa receber ao menos uma doa\xe7\xe3o at\xe9 ".concat(
                                  (0, eg.Ay)(n.closingDate),
                                  ".",
                                )
                              : "Para continuar ativa, ela precisa receber ao menos uma doa\xe7\xe3o. Compartilhe agora e engaje suas redes!",
                      }),
                    ],
                  }),
                ],
              }),
              o
                ? (0, z.jsx)($.wn, {
                    padding: [24, 0, 8],
                    children: (0, z.jsx)($.$n, {
                      block: !0,
                      variant: "vakinha",
                      onClick: d,
                      children: (0, z.jsx)($.o5, {
                        fontFamily: K.a,
                        fontSize: 14,
                        weight: 700,
                        color: "white",
                        children: "Tentar novamente",
                      }),
                    }),
                  })
                : u
                  ? (0, z.jsxs)($.wn, {
                      flex: !0,
                      flexDirection: "column",
                      rowGap: 8,
                      padding: [24, 0, 8],
                      children: [
                        (0, z.jsx)(U.A, {
                          route: "campaignCreationInitialCreation",
                          params: {
                            utm_internal_source: "campaign_closed_modal",
                          },
                          children: (0, z.jsx)($.$n, {
                            block: !0,
                            variant: "vakinha",
                            onClick: h("create-campaign"),
                            children: (0, z.jsx)($.o5, {
                              fontFamily: K.a,
                              fontSize: 14,
                              weight: 700,
                              color: "white",
                              children: "Criar vaquinha",
                            }),
                          }),
                        }),
                        (0, z.jsx)(U.A, {
                          route: "contactUs",
                          children: (0, z.jsx)($.$n, {
                            block: !0,
                            link: !0,
                            variant: "dark",
                            onClick: h("contact"),
                            children: (0, z.jsx)($.o5, {
                              fontFamily: K.a,
                              fontSize: 14,
                              weight: 700,
                              color: "gray400",
                              children: "Falar com o Vakinha",
                            }),
                          }),
                        }),
                      ],
                    })
                  : (0, z.jsx)($.wn, {
                      padding: [24, 0, 8],
                      children: (0, z.jsx)(U.A, {
                        route: "shareImages",
                        params: { slug: t },
                        children: (0, z.jsx)($.$n, {
                          block: !0,
                          variant: "vakinha",
                          onClick: h("share"),
                          children: (0, z.jsx)($.o5, {
                            fontFamily: K.a,
                            fontSize: 14,
                            weight: 700,
                            color: "white",
                            children: "Compartilhar vaquinha",
                          }),
                        }),
                      }),
                    }),
            ],
          });
        };
      var eL = t(7584);
      let eG = (0, Y.default)(ee.A).withConfig({
        componentId: "sc-fd8687cd-0",
      })(
        [
          "border:",
          ";margin-right:5px;width:45px;height:45px;align-self:flex-start;",
        ],
        (e) => {
          let { smallBorder: a } = e;
          return a ? "1px solid ".concat(eb.s5) : "3px solid ".concat(eb.s5);
        },
      );
      ((0, Y.default)($.wn).withConfig({ componentId: "sc-fd8687cd-1" })([
        "div:nth-child(2):before{content:'•';margin:0 5px;}",
      ]),
        Y.default.p.withConfig({ componentId: "sc-fd8687cd-2" })([
          "word-wrap:break-word;font-size:10px;line-height:14px;",
        ]),
        Y.default.span.withConfig({ componentId: "sc-fd8687cd-3" })(
          [
            "font-size:10px;white-space:nowrap;text-decoration:underline;color:",
            ";margin-left:4px;",
          ],
          eb.Cl,
        ));
      let eH = (0, Y.default)(U.A).withConfig({ componentId: "sc-fd8687cd-4" })(
          ["align-self:flex-start;"],
        ),
        eR = (0, Y.default)(U.A).withConfig({ componentId: "sc-fd8687cd-5" })([
          "overflow:auto;",
        ]),
        eN = (e) => {
          let {
              id: a,
              slug: t,
              ong: n,
              name: i,
              photo: o,
              verified: r,
              createdAt: s,
              adopterUserKind: l,
              hasAcceptedTerms: c,
            } = e,
            isGestosDeBondade = 994790 === a || "ketelen-am" === t,
            d = () =>
              (0, z.jsxs)($.wn, {
                flex: !0,
                flexDirection: "column",
                children: [
                  (0, z.jsxs)($.wn, {
                    flex: !0,
                    alignItems: "center",
                    columnGap: 8,
                    children: [
                      (0, z.jsx)($.o5, {
                        fontSizeDesktop: 16,
                        fontSizeMobile: 12,
                        fontFamily: "lato",
                        weight: 700,
                        children: i,
                      }),
                      (r || n) && (0, z.jsx)(eL.A, { width: 12, height: 12 }),
                    ],
                  }),
                  l &&
                    "creator" === l &&
                    (0, z.jsx)($.o5, {
                      fontSize: 12,
                      fontFamily: "lato",
                      children: "Criador(a) da vaquinha",
                    }),
                  l &&
                    "beneficiary" === l &&
                    (0, z.jsx)($.o5, {
                      fontSize: 12,
                      fontFamily: "lato",
                      children: "Beneficiada(o) pela vaquinha",
                    }),
                  s &&
                    !l &&
                    (0, z.jsxs)($.o5, {
                      fontSize: 12,
                      fontFamily: "lato",
                      children: ["Ativo(a) desde ", (0, eg.N0)(s)],
                    }),
                ],
              }),
            h = () =>
              (0, z.jsx)(eG, {
                lazyLoad: !0,
                width: 45,
                height: 45,
                src: o,
                smallBorder: !!l,
                altImage: i,
              });
          return (0, z.jsxs)($.wn, {
            flex: !0,
            alignItems: "center",
            children: [
              !isGestosDeBondade && (t || a)
                ? (0, z.jsx)(eH, {
                    route: "showUser",
                    passHref: !0,
                    params: { id: t || a },
                    style: { pointerEvents: c ? "auto" : "none" },
                    children: h(),
                  })
                : isGestosDeBondade
                  ? (0, z.jsx)(eH, { as: "div", children: h() })
                  : h(),
              !isGestosDeBondade && (t || a)
                ? (0, z.jsx)(eR, {
                    route: "showUser",
                    passHref: !0,
                    params: { id: t || a },
                    style: { pointerEvents: c ? "auto" : "none" },
                    children: d(),
                  })
                : isGestosDeBondade
                  ? (0, z.jsx)(eR, { as: "div", children: d() })
                  : d(),
            ],
          });
        };
      var eB = t(87848),
        eW = t(46738),
        e$ = t(46472),
        eU = t(53929),
        eK = t(34272),
        eQ = t(70471),
        eY = t(59124);
      let eX = Y.default.div.withConfig({ componentId: "sc-5e05c7ac-0" })(
          [
            "display:flex;flex-direction:",
            ";align-items:",
            ";padding:15px 0;width:100%;column-gap:4px;@media ",
            "{display:inline-block;}",
          ],
          (e) => {
            let { isCampaignOwner: a } = e;
            return a ? "column" : "row";
          },
          (e) => {
            let { isCampaignOwner: a } = e;
            return a ? "flex-start" : "center";
          },
          $.HP.phone,
        ),
        eZ = Y.default.div.withConfig({ componentId: "sc-5e05c7ac-1" })(
          [
            "display:flow-root;margin-top:16px;word-break:break-word;p,span,li,a,p i{font-size:14px !important;font-weight:normal;}p strong{font-size:14px !important;}p,ul,ol{margin:0 0 16px;}h1,h2,h3{margin:24px 0 8px;}> :first-child{margin-top:0;}img{max-width:100%;height:auto;}figure.image{display:table;margin:12px auto;}figure.image.image-align-left{float:left;margin:12px 16px 12px 0;}figure.image.image-align-right{float:right;margin:12px 0 12px 16px;}figure.image.image-align-center{margin:12px auto;}figure.image.image-align-full{width:100%;}figure.image.image-align-full img{width:100%;}a,a i{font-size:14px !important;font-weight:normal;color:",
            " !important;text-decoration:underline !important;}a strong{font-size:14px !important;color:",
            " !important;text-decoration:underline !important;}h1,h1 i{font-size:24px;font-family:montserrat;}h2,h2 i{font-size:20px;font-family:montserrat;}h3,h3 i{font-size:16px;font-family:montserrat;}",
          ],
          $.Tj.blue300,
          $.Tj.blue300,
        ),
        eJ = P()(() => t.e(845).then(t.t.bind(t, 20845, 23)), {
          loadableGenerated: { webpack: () => [20845] },
          ssr: !1,
        }),
        e0 = (e) => {
          let {
              distinctId: a,
              pixKey: t,
              video: n,
              description: i,
              rewardDescription: o,
              campaignCreatedAt: r,
              endingDate: s,
              slug: l,
              isCampaignOwner: c,
              loggedUser: d,
              campaignStatus: h,
              adoptedCampaign: u,
              user: m,
              toggleOpenPixKeyModal: p,
              isInstagramVideo: g = !1,
            } = e,
            [f, x] = (0, W.useState)(!1),
            { trackPostHogEvent: j, trackAnalyticsEvent: v } = (0, Q.z)();
          (0, W.useEffect)(() => {
            let e = setTimeout(() => x(!1), 1e3);
            return () => clearTimeout(e);
          }, [f]);
          let w = () => {
            (j("show-campaign-copy-pix-key", {
              distinctId: a,
              campaign_slug: l,
            }),
              v("Interactions", "[Campaign Page] Pix Key Copy"));
          };
          return (0, z.jsxs)(z.Fragment, {
            children: [
              t &&
                "closed" !== h &&
                (0, z.jsxs)(z.Fragment, {
                  children: [
                    (0, z.jsxs)(eX, {
                      isCampaignOwner: c,
                      children: [
                        (0, z.jsx)($.wn, {
                          padding: [8, 0],
                          children: (0, z.jsx)($.o5, {
                            fontFamily: K.f,
                            color: "gray400",
                            children: c
                              ? (0, O.Ay)(
                                  "<strong>".concat(
                                    d.name,
                                    ", sua vaquinha tem uma chave Pix exclusiva!</strong> Divulgue para centralizar suas doa\xe7\xf5es no Vakinha:",
                                  ),
                                )
                              : "Voc\xea pode ajudar via Pix usando a chave:",
                          }),
                        }),
                        d
                          ? (0, z.jsx)(G(), {
                              component: "span",
                              "data-clipboard-text": t,
                              onClick: w,
                              children: (0, z.jsx)($.wn, {
                                flex: !0,
                                alignItems: "center",
                                children: (0, z.jsx)(eQ.default, {
                                  open: f,
                                  content: "Chave copiada!",
                                  children: (0, z.jsxs)($.wn, {
                                    flex: !0,
                                    alignItems: "center",
                                    children: [
                                      (0, z.jsx)($.o5, {
                                        fontFamily: K.f,
                                        weight: 700,
                                        dataCy: "copy-pix-key-top",
                                        children: t,
                                      }),
                                      (0, z.jsx)(ex.A, {
                                        width: 25,
                                        height: 25,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            })
                          : (0, z.jsx)(G(), {
                              component: "span",
                              "data-clipboard-text": t,
                              onClick: () => {
                                (w(), d || null == p || p());
                              },
                              children: (0, z.jsxs)($.wn, {
                                cursor: "pointer",
                                flex: !0,
                                alignItems: "center",
                                children: [
                                  (0, z.jsx)($.o5, {
                                    fontFamily: K.f,
                                    weight: 700,
                                    as: "span",
                                    children: t,
                                  }),
                                  (0, z.jsx)(ex.A, { width: 25, height: 25 }),
                                ],
                              }),
                            }),
                        c &&
                          (0, z.jsx)($.wn, {
                            padding: [16, 0],
                            children: (0, z.jsx)(U.A, {
                              href: "/vaquinha/".concat(
                                l,
                                "/compartilhe-chave-pix",
                              ),
                              onClick: () => {
                                j("show-campaign-share-pix-key", {
                                  distinctId: a,
                                });
                              },
                              children: (0, z.jsx)($.o5, {
                                fontFamily: K.f,
                                color: "blue300",
                                textDecoration: "underline",
                                fontSize: 14,
                                children: "Vantagens da chave Pix Vakinha",
                              }),
                            }),
                          }),
                      ],
                    }),
                    (0, z.jsx)($.cG, {}),
                  ],
                }),
              (0, z.jsxs)($.wn, {
                padding: t && [16, 0, 0],
                children: [
                  (0, z.jsxs)($.o5, {
                    fontSize: 14,
                    fontFamily: K.f,
                    children: [
                      (0, z.jsx)("strong", { children: "Vaquinha criada em:" }),
                      " ",
                      (0, eg.Ay)(r),
                    ],
                  }),
                  s &&
                    o &&
                    (0, z.jsx)($.wn, {
                      padding: [8, 0, 0],
                      children: (0, z.jsxs)($.o5, {
                        fontSize: 14,
                        fontFamily: K.f,
                        children: [
                          (0, z.jsx)("strong", {
                            children: "Vaquinha encerra em:",
                          }),
                          " ",
                          (0, eg.Ay)(s),
                        ],
                      }),
                    }),
                ],
              }),
              u &&
                (0, z.jsxs)(z.Fragment, {
                  children: [
                    (0, z.jsx)($.wn, {
                      padding: [16, 0],
                      children: (0, z.jsx)(eN, {
                        id: m.id,
                        slug: m.slug,
                        ong: m.ong,
                        name: m.name,
                        photo: m.avatar,
                        verified: m.verified,
                        createdAt: m.createdAt,
                        hasAcceptedTerms: m.hasAcceptedTerms,
                      }),
                    }),
                    (0, z.jsx)(eN, {
                      adopterUserKind: "beneficiary",
                      id: u.user.id,
                      slug: u.user.slug,
                      name: u.user.name,
                      photo: u.user.avatar,
                      verified: !!u.user.verified,
                      hasAcceptedTerms: u.user.hasAcceptedTerms,
                    }),
                  ],
                }),
              n &&
                (g
                  ? (0, z.jsx)($.wn, {
                      padding: [16, 0],
                      children: (0, z.jsx)(eK.A, {
                        url: n,
                        clientAccessToken: ""
                          .concat("384822005017520", "|")
                          .concat("439f5401a7b5fa246c1eabf59c263db6"),
                        maxWidth: 320,
                        hideCaption: !0,
                        containerTagName: "div",
                      }),
                    })
                  : (0, z.jsx)($.wn, {
                      padding: [16, 0],
                      children: (0, z.jsx)(eJ, {
                        url: n,
                        config: { facebook: { attributes: { height: 370 } } },
                        width: "100%",
                        controls: !0,
                      }),
                    })),
              (0, z.jsxs)(eZ, {
                children: [
                  (0, O.Ay)(i || ""),
                  o &&
                    (0, z.jsxs)(z.Fragment, {
                      children: [
                        (0, z.jsxs)($.wn, {
                          padding: [8, 0, 24],
                          children: [
                            (0, z.jsx)($.wn, {
                              padding: [0, 0, 12],
                              children: (0, z.jsx)($.o5, {
                                fontFamily: K.f,
                                fontSize: 16,
                                weight: 700,
                                children: "Recompensa para quem doar mais:",
                              }),
                            }),
                            (0, O.Ay)(o || ""),
                          ],
                        }),
                        (0, z.jsx)($.o5, {
                          fontFamily: K.f,
                          fontSize: 16,
                          weight: 700,
                          children:
                            "Acompanhe o ranking completo de doadores no aplicativo do Vakinha:",
                        }),
                        (0, z.jsxs)($.wn, {
                          flex: !0,
                          rowGap: 8,
                          columnGap: 8,
                          padding: [24, 0, 0],
                          children: [
                            (0, z.jsx)(U.A, {
                              route:
                                "https://play.google.com/store/apps/details?id=br.com.aioria.vakinha&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
                              children: (0, z.jsx)("img", {
                                alt: "Logo da loja de aplicativos android - Google Play",
                                src: (0, eY.A)("GooglePlay.png"),
                                width: 130,
                                height: 40,
                              }),
                            }),
                            (0, z.jsx)(U.A, {
                              route:
                                "https://apps.apple.com/br/app/vakinha-online/id1491536867?mt=8",
                              children: (0, z.jsx)("img", {
                                alt: "Logo da loja de aplicativos ios - Apple Play",
                                src: (0, eY.A)("AppleStore.png"),
                                width: 130,
                                height: 40,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        };
      var e1 = t(15928),
        e2 = t(28249),
        e4 = t(31098),
        e3 = t(3572),
        e5 = t(74753),
        e6 = t(48230),
        e8 = t.n(e6);
      let e7 = (0, Y.default)($.wn).withConfig({
          componentId: "sc-fa4cc7d0-0",
        })(
          [
            "@media (min-width:1024px) and (max-width:1279px){height:",
            ";}@media (min-width:1280px){height:",
            ";}",
          ],
          (e) => e.heightLaptop,
          (e) => e.heightUltraWide,
        ),
        e9 = (e) => {
          let { campaignId: a, luckyNumberInformations: t } = e,
            {
              numberUsersReceivedLuckyNumber: n,
              numberOfContributorsWithBundle: i,
              numberUsersGaveSticker: o,
              numberUserLuckyNumberUnclaimed: r,
              winnersFromVakinha: s,
            } = t,
            l =
              1 === n
                ? "".concat(
                    n,
                    " pessoa j\xe1 doou e recebeu n\xfameros da sorte",
                  )
                : "".concat(
                    n,
                    " pessoas j\xe1 doaram e receberam n\xfameros da sorte",
                  ),
            c =
              1 === n
                ? "".concat(
                    n,
                    " doador, al\xe9m de ajudar e concorrer, garantiu n\xfameros da sorte extra para quem criou a vaquinha",
                  )
                : "".concat(
                    n,
                    " doadores, al\xe9m de ajudar e concorrer, garantiram n\xfameros da sorte extra para quem criou a vaquinha",
                  );
          return (0, z.jsxs)($.wn, {
            flex: !0,
            flexDirection: "column",
            padding: [8, 0],
            children: [
              (0, z.jsx)($.o5, {
                fontSize: 14,
                fontFamily: K.f,
                color: "gray600",
                children:
                  "Cada a\xe7\xe3o no Vakinha pode garantir n\xfameros da sorte para concorrer todos os meses a R$ 15 MIL nos sorteios do Vakinha Premiada",
              }),
              (0, z.jsxs)(B.Row, {
                children: [
                  (0, z.jsx)(B.Col, {
                    lg: 6,
                    children: (0, z.jsx)($.wn, {
                      padding: [16, 0, 0],
                      children: (0, z.jsxs)($.wn, {
                        flex: !0,
                        borderRadius: 8,
                        backgroundColor: "gray100",
                        padding: [12],
                        shadow: !0,
                        columnGap: 12,
                        alignItems: "center",
                        children: [
                          (0, z.jsxs)($.wn, {
                            flex: !0,
                            rowGap: 8,
                            flexDirection: "column",
                            children: [
                              (0, z.jsx)($.o5, {
                                fontSize: 12,
                                fontFamily: K.a,
                                color: "gray600",
                                weight: 700,
                                children: l,
                              }),
                              (0, z.jsx)(U.A, {
                                route: "newContribution",
                                params: {
                                  slug: a,
                                  utm_internal_source: "lucky_number_tab",
                                },
                                children: (0, z.jsx)($.o5, {
                                  fontSize: 12,
                                  fontFamily: K.a,
                                  color: "blue450",
                                  textDecoration: "underline",
                                  children: "Quero doar e participar",
                                }),
                              }),
                            ],
                          }),
                          (0, z.jsx)($.hh, {
                            size: 32,
                            color: "green500",
                            children: (0, z.jsx)(e1.A, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, z.jsx)(B.Col, {
                    lg: 6,
                    children: (0, z.jsx)($.wn, {
                      padding: [16, 0, 0],
                      children: (0, z.jsxs)(e7, {
                        flex: !0,
                        borderRadius: 8,
                        backgroundColor: "green100",
                        padding: [12],
                        shadow: !0,
                        columnGap: 12,
                        alignItems: "center",
                        heightLaptop: "86px",
                        heightUltraWide: "86px",
                        children: [
                          (0, z.jsx)($.o5, {
                            fontSize: 14,
                            fontFamily: K.f,
                            color: "gray600",
                            weight: 700,
                            children:
                              1 === i
                                ? "".concat(
                                    i,
                                    " doador turbinou sua doa\xe7\xe3o e recebeu n\xfameros da sorte extra",
                                  )
                                : "".concat(
                                    i,
                                    " doadores turbinaram sua doa\xe7\xe3o e receberam n\xfameros da sorte extra",
                                  ),
                          }),
                          (0, z.jsx)($.hh, {
                            size: 32,
                            color: "green500",
                            children: (0, z.jsx)(e2.A, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, z.jsxs)(B.Row, {
                children: [
                  (0, z.jsx)(B.Col, {
                    lg: 6,
                    children: (0, z.jsx)($.wn, {
                      padding: [16, 0, 0],
                      children: (0, z.jsxs)(e7, {
                        flex: !0,
                        borderRadius: 8,
                        backgroundColor: "beige400",
                        padding: [12],
                        shadow: !0,
                        flexDirection: "row",
                        columnGap: 12,
                        alignItems: "center",
                        heightLaptop: "113px",
                        heightUltraWide: "113px",
                        children: [
                          (0, z.jsxs)($.wn, {
                            flex: !0,
                            rowGap: 8,
                            flexDirection: "column",
                            children: [
                              (0, z.jsx)($.o5, {
                                fontSize: 14,
                                fontFamily: K.f,
                                color: "gray600",
                                weight: 700,
                                children:
                                  1 === o
                                    ? "".concat(
                                        o,
                                        " pessoa comprou cora\xe7\xf5es para destacar essa vaquinha e recebeu n\xfameros da sorte",
                                      )
                                    : "".concat(
                                        o,
                                        " pessoas compraram cora\xe7\xf5es para destacar essa vaquinha e receberam n\xfameros da sorte",
                                      ),
                              }),
                              (0, z.jsx)(e8(), {
                                href: {
                                  pathname: "/loja/[slug]",
                                  query: {
                                    slug: "adesivo-digital",
                                    utm_internal_source: "lucky_number_tab",
                                  },
                                },
                                passHref: !0,
                                children: (0, z.jsx)($.o5, {
                                  fontSize: 12,
                                  fontFamily: K.a,
                                  color: "blue450",
                                  textDecoration: "underline",
                                  children: "Comprar cora\xe7\xf5es",
                                }),
                              }),
                            ],
                          }),
                          (0, z.jsx)($.hh, {
                            size: 32,
                            color: "green500",
                            children: (0, z.jsx)(e4.A, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, z.jsx)(B.Col, {
                    lg: 6,
                    children: (0, z.jsx)($.wn, {
                      padding: [16, 0, 0],
                      children: (0, z.jsxs)(e7, {
                        flex: !0,
                        borderRadius: 8,
                        backgroundColor: "green600",
                        padding: [12],
                        shadow: !0,
                        columnGap: 12,
                        alignItems: "center",
                        heightLaptop: "113px",
                        heightUltraWide: "113px",
                        children: [
                          (0, z.jsx)($.o5, {
                            fontSize: 14,
                            fontFamily: K.f,
                            color: "white",
                            weight: 700,
                            children: c,
                          }),
                          (0, z.jsx)($.hh, {
                            size: 32,
                            color: "yellow450",
                            children: (0, z.jsx)(e3.A, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, z.jsxs)(B.Row, {
                children: [
                  (0, z.jsx)(B.Col, {
                    lg: 6,
                    children: (0, z.jsx)($.wn, {
                      padding: [16, 0, 0],
                      children: (0, z.jsxs)($.wn, {
                        flex: !0,
                        borderRadius: 8,
                        backgroundColor: "gray100",
                        padding: [12],
                        shadow: !0,
                        columnGap: 12,
                        alignItems: "center",
                        children: [
                          (0, z.jsxs)($.wn, {
                            flex: !0,
                            rowGap: 8,
                            flexDirection: "column",
                            children: [
                              (0, z.jsx)($.o5, {
                                fontSize: 14,
                                fontFamily: K.f,
                                color: "gray600",
                                weight: 700,
                                children:
                                  1 === r
                                    ? "".concat(
                                        r,
                                        " pessoa doou para essa vaquinha e ainda n\xe3o resgatou seu n\xfamero",
                                      )
                                    : "".concat(
                                        r,
                                        " pessoas doaram para essa vaquinha e ainda n\xe3o resgataram seus n\xfameros",
                                      ),
                              }),
                              (0, z.jsx)(U.A, {
                                route: "redeemLuckyNumbers",
                                children: (0, z.jsx)($.o5, {
                                  fontSize: 12,
                                  fontFamily: K.a,
                                  color: "blue450",
                                  textDecoration: "underline",
                                  children: "Verificar n\xfameros para resgate",
                                }),
                              }),
                            ],
                          }),
                          (0, z.jsx)($.hh, {
                            size: 32,
                            color: "green500",
                            children: (0, z.jsx)(e4.A, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, z.jsx)(B.Col, {
                    lg: 6,
                    children: (0, z.jsx)($.wn, {
                      padding: [16, 0, 0],
                      children: (0, z.jsxs)(e7, {
                        flex: !0,
                        borderRadius: 8,
                        backgroundColor: "yellow450",
                        padding: [12],
                        shadow: !0,
                        columnGap: 12,
                        alignItems: "center",
                        heightLaptop: "113px",
                        heightUltraWide: "92px",
                        children: [
                          (0, z.jsx)($.o5, {
                            fontSize: 14,
                            fontFamily: K.f,
                            color: "gray600",
                            weight: 700,
                            children:
                              1 === s
                                ? "".concat(
                                    s,
                                    " pessoa j\xe1 ganhou o pr\xeamio com n\xfameros gerados nessa vaquinha",
                                  )
                                : "".concat(
                                    s,
                                    " pessoas j\xe1 ganharam o pr\xeamio com n\xfameros gerados nessa vaquinha",
                                  ),
                          }),
                          (0, z.jsx)($.hh, {
                            size: 32,
                            color: "white",
                            backgroundColor: "green700",
                            borderRadius: "50%",
                            children: (0, z.jsx)(e5.A, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ae = (0, t(85887).A)(
          (0, z.jsx)("path", {
            d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
          }),
          "Check",
        );
      var aa = t(4118),
        at = t(34846),
        an = t(36955),
        ai = t(27351);
      let ao = Y.default.div.withConfig({ componentId: "sc-99dc5c9c-0" })([
          "display:flex;align-items:center;> div:first-child{margin-right:10px;}",
        ]),
        ar = (e) => {
          let { svg: a, children: t } = e;
          return (0, z.jsxs)(ao, {
            children: [(0, z.jsx)("div", { children: a }), t],
          });
        };
      var as = t(57542);
      let al = (e) => {
        let { title: a, content: t, extraContent: n, svg: i } = e;
        return (0, z.jsx)(ar, {
          svg: i,
          children: (0, z.jsxs)(as.A, {
            children: [
              (0, z.jsx)(ai.A, {
                size: "large",
                children: (0, z.jsx)("strong", { children: a }),
              }),
              (0, z.jsxs)(ai.A, { size: "large", children: [t, n] }),
            ],
          }),
        });
      };
      var ac = t(12503),
        ad = t(85426);
      let ah = (e) => {
        let {
            totalWithdrawn: a,
            totalDonors: t,
            promotersCount: n,
            corporatesCount: i,
            adoptersCount: o,
            stickersCount: r,
            mostLovedRankCount: s,
            adoptedCampaign: l,
            slug: c,
            userCampaign: d,
            loggedUser: h,
            campaignStatus: u,
          } = e,
          { t: m } = (0, at.Bd)();
        return (0, z.jsxs)(an.A, {
          children: [
            a >= 1 &&
              l &&
              (0, z.jsx)(as.A, {
                spacingSize: "xl",
                spacingPosition: "onlyBottom",
                justifyContent: "flex-start",
                flex: !0,
                children: (0, z.jsx)(al, {
                  title: m("components.resumeCard.totalAdopterTitle"),
                  content: (0, ad.Ay)(a),
                  extraContent: m("components.resumeCard.totalAdopterContent"),
                  svg: (0, z.jsx)(ac.X2, { height: 40, width: 40 }),
                }),
              }),
            (0, z.jsx)(as.A, {
              spacingSize: "xl",
              spacingPosition: "onlyBottom",
              justifyContent: "flex-start",
              flex: !0,
              children: (0, z.jsx)(al, {
                title: m("components.resumeCard.contributionsTitle"),
                content:
                  c || 0 !== t
                    ? (0, O.Ay)(
                        m("components.resumeCard.contributionsContent", {
                          count: t || 0,
                        }),
                      )
                    : m(
                        "components.resumeCard.contributionsContentWithoutContributions",
                      ),
                svg: (0, z.jsx)(ac.U9, { height: 40, width: 40 }),
              }),
            }),
            ((null == d ? void 0 : d.id) !== (null == h ? void 0 : h.id) ||
              o >= 1) &&
              "closed" !== u &&
              (0, z.jsx)(as.A, {
                spacingSize: "xl",
                spacingPosition: "onlyBottom",
                justifyContent: "flex-start",
                flex: !0,
                alignItems: "center",
                children: (0, z.jsx)(al, {
                  title: m("components.resumeCard.adoptersTitle"),
                  content: (0, O.Ay)(
                    m("components.resumeCard.adoptersContent", {
                      count: o || 0,
                      url: "/vaquinha/".concat(c, "/adotar-vaquinha"),
                    }),
                  ),
                  svg: (0, z.jsx)(ac.NV, { height: 40, width: 40 }),
                }),
              }),
            ((null == d ? void 0 : d.id) !== (null == h ? void 0 : h.id) ||
              n >= 1) &&
              (0, z.jsx)(as.A, {
                spacingSize: "xl",
                spacingPosition: "onlyBottom",
                justifyContent: "flex-start",
                flex: !0,
                children: (0, z.jsx)(al, {
                  title: m("components.resumeCard.promotersTitle"),
                  content: (0, O.Ay)(
                    m("components.resumeCard.promotersContent", {
                      count: n || 0,
                    }),
                  ),
                  svg: (0, z.jsx)(ac.__, { height: 40, width: 40 }),
                }),
              }),
            i >= 1 &&
              (0, z.jsx)(as.A, {
                spacingSize: "xl",
                spacingPosition: "onlyBottom",
                justifyContent: "flex-start",
                flex: !0,
                children: (0, z.jsx)(al, {
                  title: m("components.resumeCard.corporatesTitle"),
                  content: (0, O.Ay)(
                    m("components.resumeCard.corporatesContent", { count: i }),
                  ),
                  svg: (0, z.jsx)(ac.QF, { height: 40, width: 40 }),
                }),
              }),
            (0, z.jsx)(as.A, {
              spacingSize: "none",
              justifyContent: "flex-start",
              flex: !0,
              children: (0, z.jsx)(al, {
                title: m("components.resumeCard.heartsTitle"),
                content: (0, O.Ay)(
                  m("components.resumeCard.heartsContent", { count: r || 0 }),
                ),
                extraContent:
                  s >= 1 &&
                  m("components.resumeCard.weeksContent", { count: s }),
                svg: (0, z.jsx)(ac.iK, { height: 40, width: 40 }),
              }),
            }),
          ],
        });
      };
      var au = t(10371),
        am = t(86249);
      let ap = (e) => {
        let { user: a, contributions: t, corporate: n } = e,
          { t: i } = (0, at.Bd)();
        return (0, z.jsxs)(an.A, {
          backgroundColor: n ? "dark" : "primary",
          children: [
            (0, z.jsxs)(am.A, {
              photo: a.avatar,
              badge: n ? (0, z.jsx)(ac.QF, {}) : (0, z.jsx)(ac.NV, {}),
              altImage: a.name,
              children: [
                (0, z.jsxs)(ai.A, {
                  children: [
                    (0, z.jsx)("strong", { children: a.name }),
                    " ",
                    a.verified && (0, z.jsx)(eL.A, { width: 17, height: 17 }),
                  ],
                }),
                (0, z.jsx)(ai.A, {
                  variant: "secondary",
                  size: "small",
                  children: a.cityAndState,
                }),
              ],
            }),
            (0, z.jsx)(as.A, {
              spacingSize: "xl",
              children: (0, z.jsx)(an.A.Divider, {}),
            }),
            n
              ? (0, z.jsx)(ai.A, {
                  size: "large",
                  children: i("components.donorCard.donatedByCorporate", {
                    value: (0, ad.Ay)(t.donatedValue),
                  }),
                })
              : (0, z.jsxs)(z.Fragment, {
                  children: [
                    (0, z.jsx)(ai.A, {
                      size: "large",
                      children: i("components.donorCard.donated", {
                        value: (0, ad.Ay)(t.donatedValue),
                      }),
                    }),
                    (0, z.jsx)(ai.A, {
                      variant: "secondary",
                      children: i("components.donorCard.peopleDonated", {
                        count: t.donationsCount,
                      }),
                    }),
                  ],
                }),
          ],
        });
      };
      var ag = t(63795);
      let af = (e) => {
        let { children: a, title: t, isOpen: n, onClose: i, hideScroll: o } = e,
          { t: r } = (0, at.Bd)();
        return (0, z.jsxs)($.dW, {
          isOpen: n,
          onClose: i,
          width: 850,
          padding: 32,
          children: [
            (0, z.jsx)($.o5, {
              fontFamily: K.f,
              fontSize: 20,
              weight: 900,
              children: r(t).toUpperCase(),
            }),
            (0, z.jsx)(ag.A.Body, { hideScroll: o, children: a }),
          ],
        });
      };
      var ax = t(23852),
        aj = t(27052);
      let av = (e) => {
          let { indications: a } = e,
            { t } = (0, at.Bd)();
          return (0, z.jsx)(z.Fragment, {
            children: a.map((e) =>
              (0, z.jsx)(as.A, {
                spacingSize: "xl",
                spacingPosition: "onlyTop",
                children: (0, z.jsx)(am.A, {
                  photo: e.user.avatar.url,
                  altImage: e.user.name,
                  children: (0, z.jsx)(as.A, {
                    spacingPosition: "onlyTop",
                    spacingSize: "lg",
                    children: (0, z.jsx)(ai.A, {
                      children: (0, z.jsx)("strong", {
                        children: t("pages.campaign.show.promoters", {
                          name: e.user.name,
                          count: e.totalCount,
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ),
          });
        },
        aw = Y.default.div.withConfig({ componentId: "sc-f645117c-0" })(
          [
            "display:flex;width:300px;align-items:baseline;svg{margin-right:5px;min-width:12px;min-height:12px;}div{font-size:12px;color:",
            ";}@media ",
            "{max-width:230px;}",
          ],
          $.Tj.gray600,
          $.HP.phone,
        ),
        ab = Y.default.span.withConfig({ componentId: "sc-f645117c-1" })(
          ["svg{position:relative;top:3px;left:5px;}svg path{fill:", ";}"],
          $.Tj.gray600,
        );
      var ay = t(95090),
        aC = t(99117),
        aA = t(745),
        aS = t(48720),
        ak = t(87098);
      let az = Y.default.div.withConfig({ componentId: "sc-a0267211-0" })([
          "width:100%;padding-left:10px;",
        ]),
        aq = Y.default.div.withConfig({ componentId: "sc-a0267211-1" })(
          [
            "> div{padding:15px 0;margin-right:10px;}> div:not(:last-child){border-bottom:1px solid ",
            ";}",
          ],
          eb.Nd,
        ),
        aM = Y.default.div.withConfig({ componentId: "sc-a0267211-2" })(
          [
            "font-size:10px;line-height:14px;text-align:right;width:100%;color:",
            "",
          ],
          eb.$0,
        ),
        aI = (e) => {
          let { events: a } = e,
            { t } = (0, at.Bd)(),
            n = (0, aS.cond)([
              [
                (0, aS.matches)({ message: !0 }),
                (0, aS.constant)(
                  (0, z.jsx)(z.Fragment, {
                    children: t(
                      "components.donationMessageList.contributedAndMessage",
                    ),
                  }),
                ),
              ],
              [
                (0, aS.matches)({ entityType: "StickerVakinha" }),
                (0, aS.constant)(
                  (0, z.jsx)(z.Fragment, {
                    children: t("components.donationMessageList.gaveHearts"),
                  }),
                ),
              ],
              [
                aS.stubTrue,
                (0, aS.constant)(
                  (0, z.jsx)(z.Fragment, {
                    children: t("components.donationMessageList.contributed"),
                  }),
                ),
              ],
            ]);
          return (0, z.jsx)(aq, {
            children: a.map((e) => {
              let {
                id: a,
                userId: t,
                userAvatar: i,
                userName: o,
                userMessage: r,
                createdAt: s,
                entityType: l,
                hasAcceptedTerms: c,
              } = e;
              return (0, z.jsxs)(
                "div",
                {
                  children: [
                    (0, z.jsxs)(as.A, {
                      flex: !0,
                      alignItems: "flex-start",
                      spacingSize: "sm",
                      spacingPosition: "onlyTop",
                      children: [
                        (0, z.jsx)(U.A, {
                          route: "showUser",
                          passHref: !0,
                          params: { id: t },
                          style: { pointerEvents: c ? "auto" : "none" },
                          children: (0, z.jsx)(ee.A, {
                            width: 50,
                            height: 50,
                            src: i,
                            altImage: o,
                          }),
                        }),
                        (0, z.jsxs)(az, {
                          children: [
                            (0, z.jsxs)(as.A, {
                              spacingSize: "sm",
                              spacingPosition: "onlyBottom",
                              flex: !0,
                              justifyContent: "space-between",
                              children: [
                                (0, z.jsx)(ai.A, {
                                  size: "small",
                                  children: (0, z.jsx)("strong", {
                                    children: (0, z.jsx)(ak.A, {
                                      numberOfLines: 1,
                                      children: o,
                                    }),
                                  }),
                                }),
                                (0, z.jsx)(aM, {
                                  children: (0, ay.k)(
                                    (0, aC.H)(s),
                                    new Date(),
                                    { locale: aA.pt },
                                  ),
                                }),
                              ],
                            }),
                            (0, z.jsx)(as.A, {
                              spacingSize: "none",
                              children: (0, z.jsx)(ai.A, {
                                size: "small",
                                children: n({ entityType: l, message: !!r }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    r &&
                      (0, z.jsx)(as.A, {
                        spacingSize: "lg",
                        spacingPosition: "onlyTop",
                        children: (0, z.jsx)(ai.A, {
                          size: "small",
                          children: r.message,
                        }),
                      }),
                  ],
                },
                a,
              );
            }),
          });
        },
        aF = (e) => {
          let {
              slug: a,
              campaignTitle: t,
              adoptedCampaign: n,
              user: i,
              loggedUser: o,
              campaignStatus: r,
              initialLoading: s,
              summary: l,
              corporateContributions: c = [],
              adopterContributions: d = [],
              initialIndications: h = [],
              indicationTotal: u = 0,
              initialEvents: m = [],
              eventsTotals: p = 0,
            } = e,
            [g, f] = (0, W.useState)(!1),
            [x, j] = (0, W.useState)([]),
            [v, w] = (0, W.useState)(1),
            [b, y] = (0, W.useState)(!0),
            [C, A] = (0, W.useState)(!1),
            [S, k] = (0, W.useState)([]),
            [q, M] = (0, W.useState)(1),
            [I, F] = (0, W.useState)(!0),
            T = async () => {
              y(!0);
              let { data: e } = await (0, eU.gS)(a, v, 10);
              (j((a) => [...a, ...e.indications]), y(!1));
            },
            D = async () => {
              F(!0);
              let { data: e } = await (0, eU.Cw)(a, q, 10);
              (k((a) => [...a, ...e.events]), F(!1));
            },
            P = async () => {
              (0, W.startTransition)(() => {
                (0 === S.length && D(), A(!0));
              });
            },
            E = async () => {
              (0 === x.length && (await T()), f(!0));
            };
          ((0, W.useEffect)(() => {
            v > 1 && T();
          }, [v]),
            (0, W.useEffect)(() => {
              q > 1 && D();
            }, [q]));
          let _ = (0, z.jsxs)(aw, {
              children: [
                (0, z.jsx)(ae, { width: 12, height: 12 }),
                (0, z.jsx)($.o5, {
                  fontFamily: K.f,
                  fontSize: 12,
                  children:
                    "Promotores divulgam seu link exclusivo para sua rede de contatos e fazem uma corrente do bem!",
                }),
              ],
            }),
            V = (0, z.jsxs)(aw, {
              children: [
                (0, z.jsx)(ae, { width: 12, height: 12 }),
                (0, z.jsxs)($.o5, {
                  fontFamily: K.f,
                  fontSize: 12,
                  children: [
                    "Adotantes s\xe3o pessoas que criaram uma vaquinha em benef\xedcio da ",
                    t,
                    ", que receber\xe1 automaticamente o valor arrecadado.",
                  ],
                }),
              ],
            });
          return (0, z.jsxs)(z.Fragment, {
            children: [
              (0, z.jsx)(aa.A, {
                count: 1,
                height: 200,
                loading: s,
                children: (0, z.jsx)(ah, {
                  totalDonors: l.totalDonors,
                  promotersCount: l.indicationsCount,
                  corporatesCount: l.corporateContributionsCount,
                  adoptersCount: l.adoptersCount,
                  stickersCount: l.stickersCount,
                  mostLovedRankCount: l.mostLovedRankCount,
                  adoptedCampaign: !!n,
                  slug: a,
                  userCampaign: i,
                  loggedUser: o,
                  campaignStatus: r,
                }),
              }),
              (0, z.jsx)(aa.A, {
                count: 1,
                height: 100,
                loading: s,
                children: (0, z.jsx)($.wn, {
                  padding: [32, 0, 0],
                  children: (0, z.jsx)(au.A, {
                    spacing: 10,
                    perView: (0, ax.F)() ? 1 : 2.5,
                    children:
                      c &&
                      c.map((e) =>
                        (0, z.jsx)(
                          $.wn,
                          {
                            flex: !0,
                            children: (0, z.jsx)(ap, {
                              user: e,
                              contributions: { donatedValue: e.total },
                              corporate: !0,
                            }),
                          },
                          e.userId,
                        ),
                      ),
                  }),
                }),
              }),
              (0, z.jsx)(aa.A, {
                count: 1,
                height: 100,
                loading: s,
                children: (0, z.jsxs)(z.Fragment, {
                  children: [
                    d.length > 0 &&
                      (0, z.jsx)($.wn, {
                        padding: [32, 0],
                        children: (0, z.jsxs)($.o5, {
                          fontFamily: K.f,
                          fontSize: 20,
                          align: "center",
                          children: [
                            (0, z.jsx)("strong", { children: "Adotantes" }),
                            (0, z.jsx)(eQ.default, {
                              place: "bottom",
                              type: "secondary",
                              content: V,
                              children: (0, z.jsx)(ab, {
                                children: (0, z.jsx)(aj.A, {
                                  width: 15,
                                  height: 15,
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    (0, z.jsx)($.wn, {
                      padding: [0, 0, 8],
                      children: (0, z.jsx)(au.A, {
                        spacing: 10,
                        perView: (0, ax.F)() ? 1 : 2.5,
                        children:
                          d &&
                          d.map((e) =>
                            (0, z.jsx)(
                              $.wn,
                              {
                                flex: !0,
                                padding: [0, 4, 8],
                                children: (0, z.jsx)(ap, {
                                  user: e,
                                  contributions: {
                                    donatedValue: e.total,
                                    donationsCount: e.donationsCount,
                                  },
                                }),
                              },
                              e.userId,
                            ),
                          ),
                      }),
                    }),
                  ],
                }),
              }),
              (0, z.jsx)(aa.A, {
                count: 1,
                height: 200,
                loading: s,
                children:
                  u > 0 &&
                  (0, z.jsxs)($.wn, {
                    padding: [32, 0],
                    children: [
                      (0, z.jsxs)($.o5, {
                        fontFamily: K.f,
                        fontSize: 20,
                        align: "center",
                        children: [
                          (0, z.jsx)("strong", {
                            children: "Promotores do Bem",
                          }),
                          (0, z.jsx)(eQ.default, {
                            place: "bottom",
                            type: "secondary",
                            content: _,
                            children: (0, z.jsx)(ab, {
                              children: (0, z.jsx)(aj.A, {
                                width: 15,
                                height: 15,
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, z.jsx)(av, { indications: h }),
                      u > 4 &&
                        (0, z.jsx)($.wn, {
                          flex: !0,
                          justifyContent: "center",
                          children: (0, z.jsx)($.o5, {
                            fontFamily: K.f,
                            fontSize: 12,
                            color: "blue300",
                            onClick: E,
                            children: "Ver todos os Promotores do Bem",
                          }),
                        }),
                      (0, z.jsxs)(af, {
                        title: "Promotores do Bem",
                        isOpen: g,
                        onClose: () => {
                          f(!1);
                        },
                        children: [
                          (0, z.jsx)(av, { indications: x }),
                          x.length < u &&
                            (0, z.jsx)($.wn, {
                              flex: !0,
                              padding: [16, 0, 0],
                              justifyContent: "center",
                              children: b
                                ? (0, z.jsx)($.o5, {
                                    fontFamily: K.f,
                                    fontSize: 14,
                                    color: "blue300",
                                    children: "Carregando...",
                                  })
                                : (0, z.jsx)($.o5, {
                                    fontFamily: K.f,
                                    fontSize: 14,
                                    color: "blue300",
                                    onClick: () => {
                                      w((e) => e + 1);
                                    },
                                    children: "Mostrar mais promotores",
                                  }),
                            }),
                        ],
                      }),
                    ],
                  }),
              }),
              (0, z.jsx)(aa.A, {
                count: 1,
                height: 600,
                loading: s,
                children:
                  p > 0 &&
                  (0, z.jsxs)($.wn, {
                    padding: [32, 0],
                    children: [
                      (0, z.jsx)($.o5, {
                        fontFamily: K.f,
                        fontSize: 20,
                        align: "center",
                        weight: 700,
                        children: "Todos os apoios",
                      }),
                      (0, z.jsx)(aI, { events: m }),
                      p > 6 &&
                        (0, z.jsx)($.wn, {
                          flex: !0,
                          justifyContent: "center",
                          children: (0, z.jsx)($.o5, {
                            fontFamily: K.f,
                            fontSize: 12,
                            color: "blue300",
                            onClick: P,
                            children: "Ver todos os apoios",
                          }),
                        }),
                      (0, z.jsxs)(af, {
                        title: "Ver todos os apoios",
                        isOpen: C,
                        onClose: () => {
                          (0, W.startTransition)(() => {
                            A(!1);
                          });
                        },
                        children: [
                          (0, z.jsx)(aI, { events: S }),
                          S.length < p &&
                            (0, z.jsx)($.wn, {
                              flex: !0,
                              padding: [16, 0, 0],
                              justifyContent: "center",
                              children: I
                                ? (0, z.jsx)($.o5, {
                                    fontFamily: K.f,
                                    fontSize: 14,
                                    color: "blue300",
                                    children: "Carregando...",
                                  })
                                : (0, z.jsx)($.o5, {
                                    fontFamily: K.f,
                                    fontSize: 14,
                                    color: "blue300",
                                    onClick: () => {
                                      M((e) => e + 1);
                                    },
                                    children: "Mostrar mais apoios",
                                  }),
                            }),
                        ],
                      }),
                    ],
                  }),
              }),
            ],
          });
        };
      var aT = t(27679),
        aD = t(89980);
      let aP = (0, Y.default)($.wn).withConfig({
          componentId: "sc-77c3c68b-0",
        })([
          "min-height:300px;pre{white-space:pre-wrap;}p{line-height:1.5em;}> img{height:auto !important;max-width:100%;}figure{margin:unset;> img{height:auto !important;max-width:100%;}}iframe{width:100%;}",
        ]),
        aE = (0, Y.default)(aD.A).withConfig({ componentId: "sc-77c3c68b-1" })(
          [
            "._loading_overlay_content{color:",
            ";}&&&{._loading_overlay_overlay{background:",
            ";}}&&&{._loading_overlay_spinner svg circle{stroke:",
            ";}}",
          ],
          $.Tj.gray350,
          $.Tj.shadow,
          $.Tj.gray350,
        ),
        a_ = Y.default.span.withConfig({ componentId: "sc-77c3c68b-2" })(
          [
            "display:inline;font-size:12px;padding:3px 7px;margin-left:10px;line-height:16px;border-radius:10px;color:",
            ";background-color:",
            ";",
          ],
          $.Tj.white,
          (e) => {
            let { actived: a } = e;
            return a ? $.Tj.green400 : $.Tj.gray600;
          },
        ),
        aV = ({ news: e, isActive: a }) =>
          a
            ? (0, z.jsx)("p", { children: "Carregando atualizações..." })
            : e.length
              ? (0, z.jsx)("div", {
                  children: e.map((e) =>
                    (0, z.jsxs)(
                      "article",
                      {
                        style: {
                          padding: "16px 0",
                          borderBottom: "1px solid #eee",
                        },
                        children: [
                          (0, z.jsx)("h3", { children: e.title }),
                          e.createdAt &&
                            (0, z.jsx)("time", {
                              dateTime: e.createdAt,
                              children: new Date(
                                e.createdAt,
                              ).toLocaleDateString("pt-BR"),
                            }),
                          (0, z.jsx)("p", {
                            style: { whiteSpace: "pre-wrap" },
                            children: e.sanitizedText,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                })
              : (0, z.jsx)("p", {
                  children: "Nenhuma atualização disponível.",
                }),
        aO = ({
          itemsCountPerPage: e,
          page: a,
          totalCount: t,
          onPageChange: n,
        }) => {
          let i = Math.ceil(t / e);
          return i > 1
            ? (0, z.jsxs)("nav", {
                "aria-label": "Páginas de atualizações",
                style: {
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  padding: "16px 0",
                },
                children: [
                  (0, z.jsx)("button", {
                    type: "button",
                    disabled: a <= 1,
                    onClick: () => n(a - 1),
                    children: "Anterior",
                  }),
                  (0, z.jsxs)("span", { children: ["Página ", a, " de ", i] }),
                  (0, z.jsx)("button", {
                    type: "button",
                    disabled: a >= i,
                    onClick: () => n(a + 1),
                    children: "Próxima",
                  }),
                ],
              })
            : null;
        },
        aL = (e) => {
          let {
              slug: a,
              distinctId: t,
              description: n,
              campaignTitle: i,
              campaignId: o,
              campaignCreatedAt: r,
              video: s,
              defaultTab: l,
              pixKey: c,
              onTabChange: d,
              user: h,
              adoptedCampaign: u,
              campaignStatus: m,
              loggedUser: p,
              isCampaignOwner: g,
              rewardDescription: f,
              endingDate: x,
              luckyNumberInformations: j,
              badges: v,
              activeTab: w,
              setActiveTab: b,
              toggleOpenPixKeyModal: y,
              initialNews: C,
              initialTotalNews: A,
              showNewsTotalCount: S = !0,
              faq: k,
            } = e,
            [q, M] = (0, W.useState)({}),
            [I, F] = (0, W.useState)([]),
            [T, D] = (0, W.useState)([]),
            [P, E] = (0, W.useState)(!0),
            [_, V] = (0, W.useState)([]),
            [L, G] = (0, W.useState)(0),
            [H, R] = (0, W.useState)([]),
            [N, U] = (0, W.useState)(0),
            [Q, Y] = (0, W.useState)(1),
            [X, Z] = (0, W.useState)(A),
            [J, ee] = (0, W.useState)(C),
            [ea, et] = (0, W.useState)(!0),
            [newsError, setNewsError] = (0, W.useState)(!1),
            [helpError, setHelpError] = (0, W.useState)(!1),
            [en, eo] = (0, W.useState)(!1),
            [es, el] = (0, W.useState)(!1),
            [ec, ed] = (0, W.useState)(!1),
            [eh, eu] = (0, W.useState)(!1),
            [em, ep] = (0, W.useState)(!1),
            [ef, ex] = (0, W.useState)(!1),
            [ej, ev] = (0, W.useState)(!1),
            ew = (e) => {
              (0, W.startTransition)(() => {
                b(e);
              });
            };
          ((0, W.useEffect)(() => {
            b(l || w);
          }, [l]),
            (0, W.useEffect)(() => ee(C), [C]),
            (0, W.useEffect)(() => Z(A), [A]));
          let eb = async () => {
              if (ef) return;
              let { data: e } = await (0, eU.Cw)(a, 1, 6);
              (ex(!0), U(e.eventsTotals), R(e.events));
            },
            ey = async () => {
              if (eh) return;
              let { data: e } = await (0, eU.gS)(a, 1, 4);
              (eu(!0), G(e.totalIndications), V(e.indications));
            },
            eC = async () => {
              if (ec) return;
              let { data: e } = await (0, eU.Be)(a);
              (ed(!0), M(e));
            },
            eA = async () => {
              if (em) return;
              let { data: e } = await (0, eU.yI)(a);
              (ep(!0), F(e.contributions));
            },
            eS = async () => {
              if (ej) return;
              let { data: e } = await (0, eU.MX)(o);
              (ev(!0), D(e.contributions));
            },
            ek = async (e) => {
              et(!0);
              setNewsError(!1);
              try {
                let {
                  data: { news: t, totalCount: n },
                } = await (0, eU.aE)(a, e);
                (Y(e), ee(t), Z(n));
              } catch (e) {
                (console.error("Erro ao carregar atualizações:", e),
                  setNewsError(!0));
              } finally {
                et(!1);
              }
            },
            ez = async () => {
              E(!0);
              setHelpError(!1);
              try {
                (await eC(),
                  await ey(),
                  await eA(),
                  await eb(),
                  u || (await eS()));
              } catch (e) {
                (console.error("Erro ao carregar quem ajudou:", e),
                  setHelpError(!0));
              } finally {
                E(!1);
              }
            };
          ((0, W.useEffect)(() => {
            switch (
              (d(w),
              (0, er.$)({
                eventName: "show-campaign-change-tab",
                properties: { campaignId: o, tab: w },
              }),
              w)
            ) {
              case "whoHelped":
                ez();
                break;
              case "news":
                ek(1);
            }
          }, [w]),
            (0, W.useEffect)(() => {
              let e = setTimeout(() => eo(!1), 1e3);
              return () => clearTimeout(e);
            }, [en]));
          let eq = async (e) => {
            await ek(e);
          };
          return (
            (0, W.useEffect)(() => {
              s && el(ei.q9.test(s));
            }, [s]),
            (0, z.jsxs)(z.Fragment, {
              children: [
                (0, z.jsx)($.wn, {
                  padding: [24, 0, 0],
                  children: (0, z.jsxs)(e$.A, {
                    children: [
                      (0, z.jsx)(e$.A.Tab, {
                        activeTab: w,
                        tabSelector: "description",
                        onClick: ew,
                        children: "Sobre",
                      }),
                      h.ong &&
                        (0, z.jsx)(e$.A.Tab, {
                          activeTab: w,
                          tabSelector: "ong",
                          onClick: ew,
                          children: "Sobre a ONG",
                        }),
                      (0, z.jsxs)(e$.A.Tab, {
                        activeTab: w,
                        tabSelector: "news",
                        onClick: ew,
                        children: [
                          "Atualiza\xe7\xf5es",
                          S &&
                            (0, z.jsx)(a_, {
                              actived: "news" === w,
                              children: X,
                            }),
                        ],
                      }),
                      (0, z.jsx)(e$.A.Tab, {
                        activeTab: w,
                        tabSelector: "whoHelped",
                        onClick: ew,
                        children: "Quem ajudou",
                      }),
                      4712837 !== o &&
                        (0, z.jsx)(e$.A.Tab, {
                          activeTab: w,
                          tabSelector: "campaignAwarded",
                          onClick: ew,
                          children: "Vakinha Premiada",
                        }),
                      (0, z.jsx)(e$.A.Tab, {
                        activeTab: w,
                        tabSelector: "badges",
                        onClick: ew,
                        children: "Selos recebidos",
                      }),
                      (0, z.jsx)(e$.A.Tab, {
                        activeTab: w,
                        tabSelector: "faq",
                        onClick: ew,
                        children: "Perguntas e Respostas",
                      }),
                    ],
                  }),
                }),
                (0, z.jsxs)(aP, {
                  backgroundColor: "faq" === w ? void 0 : "white",
                  borderRadius: 8,
                  padding: "faq" === w ? [0] : [16],
                  children: [
                    (0, z.jsx)(e$.A.TabContent, {
                      tabSelector: "description",
                      activeTab: w,
                      children: (0, z.jsx)(e0, {
                        pixKey: c,
                        distinctId: t,
                        campaignStatus: m,
                        isCampaignOwner: g,
                        loggedUser: p,
                        slug: a,
                        video: s,
                        campaignCreatedAt: r,
                        endingDate: x,
                        rewardDescription: f,
                        adoptedCampaign: u,
                        user: h,
                        description: n,
                        toggleOpenPixKeyModal: y,
                        isInstagramVideo: es,
                      }),
                    }),
                    (0, z.jsx)(e$.A.TabContent, {
                      tabSelector: "faq",
                      activeTab: w,
                      children: (0, z.jsx)($.wn, {
                        padding: [8, 0, 32],
                        children: (0, z.jsx)(aT.A, { component: eW.A, faq: k }),
                      }),
                    }),
                    (0, z.jsxs)(e$.A.TabContent, {
                      tabSelector: "ong",
                      activeTab: w,
                      children: [
                        (0, z.jsx)($.wn, {
                          flex: !0,
                          paddingDesktop: [0, 0, 32],
                          paddingMobile: [0, 0, 24],
                          children: (0, z.jsxs)($.wn, {
                            flex: !0,
                            alignItems: "center",
                            backgroundColor: "gray100",
                            borderRadius: 8,
                            padding: [0, 8, 0, 0],
                            children: [
                              (0, z.jsx)($.wn, {
                                padding: [8],
                                children: (0, z.jsx)($.hh, {
                                  color: "green600",
                                  desktopSize: 16,
                                  mobileSize: 16,
                                  children: (0, z.jsx)(eB.A, {}),
                                }),
                              }),
                              (0, z.jsx)($.o5, {
                                fontFamily: K.f,
                                color: "gray500",
                                children: (0, O.Ay)(
                                  "Ativa no Vakinha desde <strong>".concat(
                                    (0, eg.N0)(h.createdAt),
                                    "</strong>",
                                  ),
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, z.jsx)($.o5, {
                          fontFamily: K.f,
                          color: "gray400",
                          fontSizeDesktop: 20,
                          fontSizeMobile: 14,
                          children: h.description && (0, O.Ay)(h.description),
                        }),
                      ],
                    }),
                    (0, z.jsxs)(e$.A.TabContent, {
                      tabSelector: "news",
                      activeTab: w,
                      children: [
                        newsError
                          ? (0, z.jsxs)("div", {
                              role: "alert",
                              children: [
                                (0, z.jsx)("p", {
                                  children:
                                    "Não foi possível carregar as atualizações.",
                                }),
                                (0, z.jsx)("button", {
                                  type: "button",
                                  onClick: () => ek(Q),
                                  children: "Tentar novamente",
                                }),
                              ],
                            })
                          : (0, z.jsxs)(z.Fragment, {
                              children: [
                                (0, z.jsx)(aV, { news: J, isActive: ea }),
                                !ea &&
                                  (0, z.jsx)(aO, {
                                    itemsCountPerPage: 10,
                                    page: Q,
                                    totalCount: X,
                                    onPageChange: eq,
                                  }),
                              ],
                            }),
                      ],
                    }),
                    (0, z.jsx)(e$.A.TabContent, {
                      tabSelector: "whoHelped",
                      activeTab: w,
                      children: helpError
                        ? (0, z.jsxs)("div", {
                            role: "alert",
                            children: [
                              (0, z.jsx)("p", {
                                children:
                                  "Não foi possível carregar quem ajudou.",
                              }),
                              (0, z.jsx)("button", {
                                type: "button",
                                onClick: ez,
                                children: "Tentar novamente",
                              }),
                            ],
                          })
                        : (0, z.jsx)(aF, {
                            campaignId: o,
                            campaignTitle: i,
                            adoptedCampaign: u,
                            slug: a,
                            user: h,
                            loggedUser: p,
                            campaignStatus: m,
                            activeTab: w,
                            initialLoading: P,
                            summary: q,
                            corporateContributions: I,
                            adopterContributions: T,
                            initialIndications: _,
                            indicationTotal: L,
                            initialEvents: H,
                            eventsTotals: N,
                          }),
                    }),
                    4712837 !== o &&
                      (0, z.jsx)(e$.A.TabContent, {
                        tabSelector: "campaignAwarded",
                        activeTab: w,
                        children: (0, z.jsx)(aE, {
                          active: !j,
                          spinner: !0,
                          text: "Carregando atualiza\xe7\xf5es",
                          children:
                            j &&
                            (0, z.jsx)(e9, {
                              campaignId: o,
                              luckyNumberInformations: j,
                            }),
                        }),
                      }),
                    (0, z.jsx)(e$.A.TabContent, {
                      tabSelector: "badges",
                      activeTab: w,
                      children: (0, z.jsx)($.wn, {
                        padding: [8, 0],
                        children:
                          v && v.length > 0
                            ? (0, z.jsx)(B.Row, {
                                children: v.map((e) =>
                                  (0, z.jsx)(
                                    B.Col,
                                    {
                                      xs: 6,
                                      md: 3,
                                      children: (0, z.jsxs)($.wn, {
                                        flex: !0,
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        padding: [0, 0, 16],
                                        children: [
                                          (0, z.jsx)($.wn, {
                                            flex: !0,
                                            justifyContent: "center",
                                            padding: [0, 0, 8],
                                            children: (0, z.jsx)($.FW, {
                                              loading: "lazy",
                                              width: "40",
                                              height: "40",
                                              ims: "40x40",
                                              objectFit: "contain",
                                              alt: e.name,
                                              src: e.image,
                                            }),
                                          }),
                                          (0, z.jsx)($.o5, {
                                            fontFamily: K.f,
                                            fontSizeMobile: 12,
                                            fontSizeDesktop: 14,
                                            weight: 700,
                                            align: "center",
                                            color: "gray600",
                                            children: e.name,
                                          }),
                                          e.count > 1 &&
                                            (0, z.jsxs)($.o5, {
                                              fontFamily: K.f,
                                              fontSizeMobile: 12,
                                              fontSizeDesktop: 14,
                                              align: "center",
                                              color: "gray600",
                                              children: [
                                                "Selo recebido ",
                                                e.count,
                                                "x",
                                              ],
                                            }),
                                        ],
                                      }),
                                    },
                                    e.id,
                                  ),
                                ),
                              })
                            : (0, z.jsxs)($.wn, {
                                flex: !0,
                                flexDirection: "column",
                                rowGap: 12,
                                justifyContent: "center",
                                children: [
                                  (0, z.jsx)($.o5, {
                                    fontFamily: K.f,
                                    fontSize: 14,
                                    color: "gray400",
                                    children:
                                      "Agora as vaquinhas mais engajadas ganham selos especiais!",
                                  }),
                                  (0, z.jsxs)($.o5, {
                                    fontFamily: K.f,
                                    fontSize: 14,
                                    color: "gray400",
                                    children: [
                                      (0, z.jsx)("strong", {
                                        children:
                                          "Esta vaquinha ainda n\xe3o desbloqueou selos",
                                      }),
                                      ", mas cada nova doa\xe7\xe3o, compartilhamento ou cora\xe7\xe3o pode ajudar a conquist\xe1-los!",
                                    ],
                                  }),
                                ],
                              }),
                      }),
                    }),
                    (0, z.jsx)("button", {
                      type: "button",
                      className: "back-to-campaign",
                      onClick: () =>
                        window.scrollTo({ top: 0, behavior: "smooth" }),
                      children: "Ajude Tobias",
                    }),
                  ],
                }),
              ],
            })
          );
        };
      var aG = t(41639),
        aH = t(66681),
        aR = t(40399);
      function aN() {
        return (aN = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var n in t)
                  ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      let aB = function (e) {
          return W.createElement(
            "svg",
            aN(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 40,
                height: 40,
                fill: "none",
                viewBox: "0 0 40 40",
              },
              e,
            ),
            i ||
              (i = W.createElement("rect", {
                width: 40,
                height: 40,
                fill: "#009D4E",
                rx: 20,
              })),
            o ||
              (o = W.createElement("path", {
                fill: "#fff",
                d: "m20 25.906 4.244 2.685c.777.492 1.728-.235 1.523-1.155l-1.125-5.05 3.753-3.403c.685-.62.317-1.797-.583-1.872l-4.939-.439-1.932-4.772a1.006 1.006 0 0 0-1.882 0l-1.932 4.761-4.94.439c-.9.075-1.267 1.252-.582 1.872l3.753 3.403-1.125 5.05c-.205.92.746 1.648 1.523 1.156z",
              })),
          );
        },
        aW = Y.default.div.withConfig({ componentId: "sc-735e7222-0" })([
          "svg{width:50px;height:50px;}",
        ]),
        a$ = (e) => {
          let {
              offers: a,
              openOffers: t,
              closeOffers: n,
              campaignId: i,
              userName: o,
            } = e,
            { trackAnalyticsEvent: r } = (0, Q.z)(),
            [s, l] = (0, W.useState)(a[0]),
            c = aG.A.stringify({
              campaign_id: i,
              utm_internal_source: "stickers-click-show",
            }),
            d = (e) => {
              l(e);
            };
          return (0, z.jsxs)(aH.A, {
            isOpen: t,
            onClose: n,
            children: [
              (0, z.jsx)($.wn, {
                flex: !0,
                justifyContent: "center",
                alignItems: "center",
                paddingDesktop: [0, 0, 16],
                paddingMobile: [0, 0, 8],
                children: (0, z.jsx)(aW, { children: (0, z.jsx)(aB, {}) }),
              }),
              (0, z.jsx)($.o5, {
                fontFamily: K.a,
                fontSize: 18,
                color: "gray600",
                weight: 700,
                align: "center",
                children: "Oi, ".concat(
                  o.split(" ")[0],
                  ". Destaque a sua vaquinha!",
                ),
              }),
              (0, z.jsx)($.wn, {
                paddingDesktop: [16, 0, 24],
                paddingMobile: [8, 0, 24],
                children: (0, z.jsx)($.o5, {
                  fontFamily: K.f,
                  align: "center",
                  fontSize: 14,
                  color: "gray600",
                  children:
                    "Destaque sua vaquinha com cora\xe7\xf5es e leve ela para novas pessoas com o Vakinha An\xfancios.",
                }),
              }),
              (0, z.jsxs)(z.Fragment, {
                children: [
                  a.map((e) =>
                    (0, z.jsx)(
                      $.wn,
                      {
                        padding: [0, 0, 16],
                        children: (0, z.jsx)(aR.A, {
                          product: e,
                          isBestOffer: !!e.cashbackValue,
                          onSelectProduct: d,
                          selected: e.id === s.id,
                          isSpotlight: "vakinha-spotlight" === e.identifier,
                        }),
                      },
                      e.id,
                    ),
                  ),
                  (0, z.jsx)($.wn, {
                    padding: [8, 0, 16],
                    children: (0, z.jsx)(U.A, {
                      route: "/loja/checkout/".concat(s.slug, "?").concat(c),
                      onClick: () => {
                        r("Interactions", "stickers-click-show");
                      },
                      children: (0, z.jsx)($.$n, {
                        variant: "vakinha",
                        size: "small",
                        block: !0,
                        children: (0, z.jsx)($.o5, {
                          fontFamily: K.a,
                          fontSize: 14,
                          weight: 700,
                          color: "white",
                          children: "Quero destacar",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, z.jsx)($.o5, {
                fontFamily: K.a,
                fontSize: 12,
                weight: 700,
                align: "center",
                color: "gray400",
                onClick: n,
                children: "N\xe3o quero destacar",
              }),
            ],
          });
        };
      var aU = t(29655);
      let aK = (e) => {
        let a,
          t,
          n = new Date(),
          i = (0, aC.H)(e);
        i.setHours(23, 59, 59, 999);
        let o = Math.floor((i.getTime() - n.getTime()) / 1e3);
        if (o < 0) return { primaryUnit: "0m", secondaryUnit: "0s" };
        let r = Math.floor(o / 86400),
          s = Math.floor((o % 86400) / 3600),
          l = Math.floor((o % 3600) / 60);
        return (
          r > 0
            ? ((a = "".concat(String(r).padStart(2, "0"), "d")),
              (t = "".concat(String(s).padStart(2, "0"), "h")))
            : s > 0
              ? ((a = "".concat(String(s).padStart(2, "0"), "h")),
                (t = "".concat(String(l).padStart(2, "0"), "m")))
              : ((a =
                  l > 0 ? "".concat(String(l).padStart(2, "0"), "m") : "0m"),
                (t = "".concat(String(o % 60).padStart(2, "0"), "s"))),
          { primaryUnit: a, secondaryUnit: t }
        );
      };
      var aQ = t(2158),
        aY = t(62748);
      function aX() {
        return (aX = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var n in t)
                  ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      let aZ = function (e) {
        return W.createElement(
          "svg",
          aX(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 130,
              height: 28,
              fill: "none",
              viewBox: "0 0 130 28",
            },
            e,
          ),
          r ||
            (r = W.createElement("path", {
              fill: "#EEFFE6",
              stroke: "#009D4E",
              strokeWidth: 0.75,
              d: "M122.398 3.375a7.227 7.227 0 0 1 7.227 7.227v6.796a7.227 7.227 0 0 1-7.227 7.227H8.375V3.375z",
            })),
          s ||
            (s = W.createElement("path", {
              fill: "#009D4E",
              d: "M14.087.236a.7.7 0 0 1 .748 0l.515.326a.7.7 0 0 0 .636.057l.564-.228a.7.7 0 0 1 .736.133l.449.412a.7.7 0 0 0 .616.17l.596-.123a.7.7 0 0 1 .7.262l.368.486a.7.7 0 0 0 .575.277l.61-.015a.7.7 0 0 1 .641.383l.275.544a.7.7 0 0 0 .517.375l.602.094a.7.7 0 0 1 .563.492l.174.584a.7.7 0 0 0 .441.462l.576.2a.7.7 0 0 1 .466.584l.067.605a.7.7 0 0 0 .352.533l.53.3a.7.7 0 0 1 .354.658l-.042.608a.7.7 0 0 0 .25.587l.47.39a.7.7 0 0 1 .23.71l-.15.59a.7.7 0 0 0 .142.624l.392.466a.7.7 0 0 1 .1.741l-.253.554a.7.7 0 0 0 .029.638l.302.529a.7.7 0 0 1-.034.747l-.348.5a.7.7 0 0 0-.086.633l.203.574a.7.7 0 0 1-.167.73l-.431.429a.7.7 0 0 0-.198.607l.097.602a.7.7 0 0 1-.294.687l-.502.346a.7.7 0 0 0-.302.562l-.012.61a.7.7 0 0 1-.412.624l-.555.25a.7.7 0 0 0-.399.5l-.12.596a.7.7 0 0 1-.517.54l-.591.148a.7.7 0 0 0-.481.42l-.225.566a.7.7 0 0 1-.606.44l-.607.04a.7.7 0 0 0-.549.327l-.322.516a.7.7 0 0 1-.674.325l-.605-.07a.7.7 0 0 0-.598.225l-.41.45a.7.7 0 0 1-.721.2l-.583-.178a.7.7 0 0 0-.628.114l-.484.37a.7.7 0 0 1-.745.068l-.542-.278a.7.7 0 0 0-.638 0l-.542.278a.7.7 0 0 1-.745-.067l-.484-.37a.7.7 0 0 0-.628-.115l-.583.177a.7.7 0 0 1-.721-.199l-.41-.45a.7.7 0 0 0-.598-.225l-.605.07a.7.7 0 0 1-.674-.325l-.322-.516a.7.7 0 0 0-.549-.328l-.608-.04a.7.7 0 0 1-.605-.439l-.225-.566a.7.7 0 0 0-.481-.42l-.59-.147a.7.7 0 0 1-.518-.54l-.12-.598a.7.7 0 0 0-.399-.5l-.555-.25a.7.7 0 0 1-.412-.624l-.012-.609a.7.7 0 0 0-.303-.562l-.501-.346a.7.7 0 0 1-.294-.687l.097-.602a.7.7 0 0 0-.198-.607l-.431-.43a.7.7 0 0 1-.167-.729l.203-.574a.7.7 0 0 0-.086-.633l-.348-.5a.7.7 0 0 1-.034-.747l.302-.529a.7.7 0 0 0 .029-.638l-.253-.554a.7.7 0 0 1 .1-.741l.392-.466a.7.7 0 0 0 .142-.623l-.15-.59a.7.7 0 0 1 .23-.712l.469-.389a.7.7 0 0 0 .251-.587l-.042-.608a.7.7 0 0 1 .354-.658l.53-.3a.7.7 0 0 0 .352-.533l.067-.605a.7.7 0 0 1 .466-.585l.576-.2a.7.7 0 0 0 .441-.461l.174-.584a.7.7 0 0 1 .563-.492l.602-.094a.7.7 0 0 0 .517-.375l.275-.544a.7.7 0 0 1 .642-.383l.608.015a.7.7 0 0 0 .576-.277l.368-.486a.7.7 0 0 1 .7-.262l.596.123a.7.7 0 0 0 .616-.17l.448-.412a.7.7 0 0 1 .736-.133l.565.228a.7.7 0 0 0 .636-.057z",
            })),
          l ||
            (l = W.createElement("path", {
              fill: "#025432",
              stroke: "#fff",
              strokeWidth: 0.35,
              d: "M14.46 3.675c5.702 0 10.325 4.623 10.325 10.325S20.162 24.325 14.46 24.325 4.135 19.702 4.135 14 8.758 3.675 14.46 3.675Z",
            })),
          c ||
            (c = W.createElement("path", {
              fill: "#EEFFE6",
              d: "M14.46 7.583 9.21 9.917v3.5c0 3.237 2.24 6.265 5.25 7 3.01-.735 5.25-3.763 5.25-7v-3.5zm0 6.411h4.084c-.309 2.404-1.913 4.544-4.083 5.215V14h-4.083v-3.325l4.083-1.814z",
            })),
          d ||
            (d = W.createElement("path", {
              fill: "#025432",
              d: "M40.24 14.108q0 .636-.211 1.168-.212.532-.596.916a2.7 2.7 0 0 1-.924.596q-.54.212-1.2.212h-2.204v-5.784h2.204q.66 0 1.2.216.54.212.924.596.384.38.596.912t.212 1.168m-1.103 0q0-.476-.128-.852a1.7 1.7 0 0 0-.364-.64 1.55 1.55 0 0 0-.576-.404 2 2 0 0 0-.76-.14h-1.124v4.072h1.124q.424 0 .76-.14.34-.14.576-.4.24-.264.364-.64.128-.38.128-.856m7.97 0q0 .636-.212 1.18-.208.54-.592.936-.384.395-.924.62-.54.22-1.2.22-.656 0-1.196-.22-.54-.224-.928-.62a2.8 2.8 0 0 1-.596-.936 3.2 3.2 0 0 1-.212-1.18q0-.636.212-1.176.212-.544.596-.94.388-.396.928-.616.54-.225 1.196-.224.44 0 .828.104.388.1.712.288.325.184.58.452.26.264.44.592t.272.712q.096.384.096.808m-1.1 0q0-.476-.128-.852a1.8 1.8 0 0 0-.364-.644 1.56 1.56 0 0 0-.576-.404 2 2 0 0 0-.76-.14 2 2 0 0 0-.764.14 1.6 1.6 0 0 0-.576.404q-.236.264-.364.644-.129.376-.128.852 0 .476.128.856.127.376.364.64.24.26.576.4.34.14.764.14t.76-.14q.34-.14.576-.4.236-.264.364-.64.128-.38.128-.856m5.321.708-.704-1.924a4 4 0 0 1-.108-.304 10 10 0 0 1-.112-.38q-.052.204-.108.384-.055.176-.108.308l-.7 1.916zm1.9 2.184h-.832a.36.36 0 0 1-.228-.068.45.45 0 0 1-.132-.176l-.432-1.18h-2.396l-.432 1.18a.4.4 0 0 1-.124.168.35.35 0 0 1-.228.076h-.84l2.276-5.784h1.096zm5.379-.836a2.3 2.3 0 0 1-.768.624q-.452.225-1.068.268l-.052.188q.376.088.528.236a.5.5 0 0 1 .152.36.43.43 0 0 1-.072.244.56.56 0 0 1-.2.184q-.128.076-.308.116t-.396.04q-.165 0-.308-.024a2 2 0 0 1-.28-.064l.092-.308q.024-.092.116-.092a.3.3 0 0 1 .12.028q.067.032.196.032.132 0 .196-.052.068-.048.068-.12 0-.116-.144-.168a3 3 0 0 0-.444-.092l.176-.512a2.8 2.8 0 0 1-1.04-.288 2.5 2.5 0 0 1-.784-.628 2.8 2.8 0 0 1-.496-.904 3.5 3.5 0 0 1-.172-1.124q0-.652.208-1.192.208-.544.584-.936a2.65 2.65 0 0 1 .904-.608q.524-.22 1.16-.22.632 0 1.12.208.492.208.836.544l-.36.5a.3.3 0 0 1-.084.084.22.22 0 0 1-.136.036.3.3 0 0 1-.124-.032 3 3 0 0 1-.14-.084 4 4 0 0 0-.176-.112 1.642 1.642 0 0 0-.54-.192 2 2 0 0 0-.4-.036q-.388 0-.712.14-.32.135-.552.4a1.8 1.8 0 0 0-.36.64q-.128.375-.128.86 0 .488.136.868.14.38.376.64a1.62 1.62 0 0 0 1.244.536q.22 0 .396-.024.18-.024.328-.076.152-.053.284-.132.136-.084.268-.204a.3.3 0 0 1 .084-.056.2.2 0 0 1 .092-.024q.088 0 .156.068zm4.193-1.348-.704-1.924a4 4 0 0 1-.108-.304 10 10 0 0 1-.112-.38q-.052.204-.108.384-.055.176-.108.308l-.7 1.916zM64.7 17h-.832a.36.36 0 0 1-.228-.068.45.45 0 0 1-.132-.176l-.432-1.18H60.68l-.432 1.18a.4.4 0 0 1-.124.168.35.35 0 0 1-.228.076h-.84l2.276-5.784h1.096zm-2.324-6.796q.089 0 .152-.036a.3.3 0 0 0 .108-.088.4.4 0 0 0 .064-.12.5.5 0 0 0 .02-.132h.604q0 .2-.056.384a1 1 0 0 1-.16.324.8.8 0 0 1-.26.224.7.7 0 0 1-.352.084.9.9 0 0 1-.356-.064 3 3 0 0 1-.272-.136l-.228-.14a.4.4 0 0 0-.208-.064.3.3 0 0 0-.156.036.3.3 0 0 0-.104.092.468.468 0 0 0-.08.256h-.612q0-.195.056-.38.055-.188.16-.328a.8.8 0 0 1 .26-.228.7.7 0 0 1 .356-.088q.204 0 .356.064.152.065.272.14l.224.136a.4.4 0 0 0 .212.064m8.667 3.904q0 .636-.212 1.18-.208.54-.592.936-.384.395-.924.62-.54.22-1.2.22-.656 0-1.196-.22-.54-.224-.928-.62a2.8 2.8 0 0 1-.596-.936 3.2 3.2 0 0 1-.212-1.18q0-.636.212-1.176.212-.544.596-.94.387-.396.928-.616.54-.225 1.196-.224.44 0 .828.104.387.1.712.288.325.184.58.452.26.264.44.592t.272.712q.096.384.096.808m-1.1 0q0-.476-.128-.852a1.8 1.8 0 0 0-.364-.644 1.55 1.55 0 0 0-.576-.404 2 2 0 0 0-.76-.14q-.424 0-.764.14a1.6 1.6 0 0 0-.576.404q-.236.264-.364.644-.128.376-.128.852t.128.856q.128.376.364.64.24.26.576.4.34.14.764.14t.76-.14q.34-.14.576-.4.236-.264.364-.64.128-.38.128-.856m6.67.016q.296 0 .516-.072a1 1 0 0 0 .364-.212.9.9 0 0 0 .22-.336q.072-.2.072-.444 0-.232-.072-.42a.8.8 0 0 0-.216-.32.94.94 0 0 0-.364-.2 1.7 1.7 0 0 0-.52-.072h-.804v2.076zm0-2.908a3.3 3.3 0 0 1 1.004.136q.424.135.7.38.276.244.408.584.136.34.136.744 0 .42-.14.772a1.6 1.6 0 0 1-.42.6 1.95 1.95 0 0 1-.704.392q-.42.14-.984.14h-.804V17h-1.076v-5.784zm5.221 2.752q.305 0 .528-.076.228-.075.372-.208a.85.85 0 0 0 .22-.32 1.1 1.1 0 0 0 .072-.404q0-.44-.292-.676-.288-.236-.884-.236h-.688v1.92zM84.602 17h-.972q-.276 0-.4-.216l-1.216-1.852a.4.4 0 0 0-.152-.148.5.5 0 0 0-.24-.044h-.46V17h-1.076v-5.784h1.764q.588 0 1.008.124.424.12.692.34.272.22.4.528.128.304.128.672 0 .292-.088.552-.084.26-.248.472-.16.212-.4.372-.235.16-.54.252.104.06.192.144a1 1 0 0 1 .16.192zm6.463-2.892q0 .636-.212 1.18-.208.54-.592.936-.384.395-.924.62-.54.22-1.2.22-.657 0-1.196-.22-.54-.224-.928-.62a2.8 2.8 0 0 1-.596-.936 3.2 3.2 0 0 1-.212-1.18q0-.636.212-1.176.212-.544.596-.94.388-.396.928-.616.54-.225 1.196-.224.44 0 .828.104.388.1.712.288.324.184.58.452.26.264.44.592t.272.712q.096.384.096.808m-1.1 0q0-.476-.128-.852a1.8 1.8 0 0 0-.364-.644 1.55 1.55 0 0 0-.576-.404 2 2 0 0 0-.76-.14 2 2 0 0 0-.764.14 1.6 1.6 0 0 0-.576.404q-.237.264-.364.644-.129.376-.128.852 0 .476.128.856.127.376.364.64.24.26.576.4.34.14.764.14.423 0 .76-.14.339-.14.576-.4.235-.264.364-.64.128-.38.128-.856m6.29-2.008H94.51V17h-1.076v-4.9H91.69v-.884h4.564zm2.236-.028v1.604h2.024v.828h-2.024v1.636h2.568V17h-3.648v-5.784h3.648v.856zm8.565 2.028v2.34a3.1 3.1 0 0 1-.94.476 3.7 3.7 0 0 1-1.064.148q-.708 0-1.284-.22a2.9 2.9 0 0 1-.98-.612 2.7 2.7 0 0 1-.624-.936 3.1 3.1 0 0 1-.22-1.188q0-.652.212-1.196t.6-.936q.392-.392.948-.608t1.248-.216q.351 0 .656.056.307.056.568.156.264.096.48.236t.396.308l-.308.488a.3.3 0 0 1-.188.144.34.34 0 0 1-.252-.06l-.264-.152a1.7 1.7 0 0 0-.296-.132 2.4 2.4 0 0 0-.364-.092 2.7 2.7 0 0 0-.464-.036 2 2 0 0 0-.776.144 1.6 1.6 0 0 0-.588.412 1.9 1.9 0 0 0-.376.644q-.132.375-.132.84 0 .496.14.888.144.388.4.66.26.268.624.412.363.14.812.14.32 0 .572-.068t.492-.184v-1.048h-.728a.23.23 0 0 1-.164-.056.2.2 0 0 1-.056-.144V14.1zm2.516 2.9h-1.08v-5.784h1.08zm6.831-2.892q0 .636-.212 1.168t-.596.916a2.7 2.7 0 0 1-.924.596q-.54.212-1.2.212h-2.204v-5.784h2.204q.66 0 1.2.216.54.212.924.596.384.38.596.912.213.532.212 1.168m-1.104 0q0-.476-.128-.852a1.7 1.7 0 0 0-.364-.64 1.55 1.55 0 0 0-.576-.404 2 2 0 0 0-.76-.14h-1.124v4.072h1.124q.424 0 .76-.14.34-.14.576-.4.24-.264.364-.64.129-.38.128-.856m5.331.708-.704-1.924a4 4 0 0 1-.108-.304 8 8 0 0 1-.112-.38 5.972 5.972 0 0 1-.216.692l-.7 1.916zm1.9 2.184h-.832a.36.36 0 0 1-.228-.068.45.45 0 0 1-.132-.176l-.432-1.18h-2.396l-.432 1.18a.4.4 0 0 1-.124.168.35.35 0 0 1-.228.076h-.84l2.276-5.784h1.096z",
            })),
        );
      };
      var aJ = t(98344),
        a0 = t(77798),
        a1 = t(86145),
        a2 = t(20340),
        a4 = t(49526);
      function a3() {
        return (a3 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var n in t)
                  ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      let a5 = function (e) {
        return W.createElement(
          "svg",
          a3(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 52,
              height: 52,
              fill: "none",
              viewBox: "0 0 52 52",
            },
            e,
          ),
          h ||
            (h = W.createElement(
              "g",
              { clipPath: "url(#CoOwnersIcon_svg__a)" },
              W.createElement("rect", {
                width: 52,
                height: 52,
                fill: "#B52230",
                rx: 26,
              }),
              W.createElement("path", {
                fill: "#fff",
                d: "M26 17.622a4.044 4.044 0 1 1 0 8.089 4.044 4.044 0 0 1 0-8.089m-8.089 2.89c.647 0 1.248.172 1.768.485a6.4 6.4 0 0 0 1.306 4.576 3.464 3.464 0 0 1-6.54-1.595 3.467 3.467 0 0 1 3.466-3.467m16.178 0a3.467 3.467 0 1 1 0 6.933 3.46 3.46 0 0 1-3.074-1.872 6.4 6.4 0 0 0 1.306-4.576 3.4 3.4 0 0 1 1.768-.486m-15.6 11.844c0-2.392 3.363-4.334 7.511-4.334s7.511 1.942 7.511 4.334v2.022H18.49zm-6.356 2.022v-1.733c0-1.607 2.184-2.959 5.143-3.352-.682.786-1.098 1.872-1.098 3.063v2.022zm27.734 0h-4.045v-2.022c0-1.19-.416-2.277-1.098-3.063 2.959.393 5.143 1.745 5.143 3.352z",
              }),
            )),
          u ||
            (u = W.createElement(
              "defs",
              null,
              W.createElement(
                "clipPath",
                { id: "CoOwnersIcon_svg__a" },
                W.createElement("rect", {
                  width: 52,
                  height: 52,
                  fill: "#fff",
                  rx: 26,
                }),
              ),
            )),
        );
      };
      var a6 = t(20818);
      let a8 = (e) => {
        let { indicator: a, toggleIndicationContent: t } = e;
        return (0, z.jsx)($.wn, {
          padding: [16, 0, 0],
          children: (0, z.jsxs)($.wn, {
            flex: !0,
            padding: [12, 8],
            backgroundColor: "green100",
            columnGap: 8,
            cursor: "pointer",
            children: [
              (0, z.jsx)(ee.A, {
                src: a.avatar,
                altImage: a.name,
                width: 24,
                height: 24,
              }),
              (0, z.jsxs)($.o5, {
                fontFamily: K.f,
                fontSize: 12,
                children: [
                  (0, z.jsx)("strong", { children: a.name }),
                  " compartilhou essa vaquinha com voc\xea. ",
                  (0, z.jsx)("strong", {
                    children: "Sua ajuda pode fazer a diferen\xe7a!",
                  }),
                ],
              }),
              (0, z.jsx)($.wn, {
                onClick: t,
                children: (0, z.jsx)($.hh, {
                  color: "gray300",
                  children: (0, z.jsx)(a6.A, {}),
                }),
              }),
            ],
          }),
        });
      };
      function a7() {
        return (a7 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var n in t)
                  ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      let a9 = function (e) {
        return W.createElement(
          "svg",
          a7(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 138,
              height: 48,
              fill: "none",
              viewBox: "0 0 138 48",
            },
            e,
          ),
          m ||
            (m = W.createElement("path", {
              fill: "#282828",
              stroke: "#009D4E",
              strokeWidth: 0.6,
              d: "M128.4 3.9a9.3 9.3 0 0 1 9.3 9.3v21.6a9.3 9.3 0 0 1-9.3 9.3H20.186V3.9z",
            })),
          p ||
            (p = W.createElement("path", {
              fill: "#009D4E",
              d: "M23.466.402a1.2 1.2 0 0 1 1.278 0l.895.563a1.2 1.2 0 0 0 1.087.098l.982-.395a1.2 1.2 0 0 1 1.258.228l.778.712a1.2 1.2 0 0 0 1.053.29l1.037-.215a1.2 1.2 0 0 1 1.198.45l.637.836c.233.307.6.483.985.474l1.057-.027a1.2 1.2 0 0 1 1.1.656l.475.935a1.2 1.2 0 0 0 .886.642l1.043.161a1.2 1.2 0 0 1 .966.843l.3 1c.11.371.392.666.757.792l.995.343a1.2 1.2 0 0 1 .801 1.003l.114 1.036a1.2 1.2 0 0 0 .606.914l.914.514a1.2 1.2 0 0 1 .61 1.13l-.073 1.038a1.2 1.2 0 0 0 .432 1.01l.806.666a1.2 1.2 0 0 1 .398 1.222l-.258 1.007a1.2 1.2 0 0 0 .245 1.07l.672.798c.3.355.368.852.173 1.274l-.434.945a1.2 1.2 0 0 0 .05 1.098l.517.903a1.2 1.2 0 0 1-.057 1.285l-.598.853a1.2 1.2 0 0 0-.147 1.09l.347.979a1.2 1.2 0 0 1-.287 1.253l-.742.735a1.2 1.2 0 0 0-.34 1.044l.166 1.027a1.2 1.2 0 0 1-.506 1.18l-.863.593a1.2 1.2 0 0 0-.521.966l-.02 1.04a1.2 1.2 0 0 1-.71 1.072l-.958.43a1.2 1.2 0 0 0-.684.856l-.208 1.023a1.2 1.2 0 0 1-.887.926l-1.023.254a1.2 1.2 0 0 0-.825.72l-.389.971a1.2 1.2 0 0 1-1.037.752l-1.054.068a1.2 1.2 0 0 0-.94.56l-.558.89a1.2 1.2 0 0 1-1.153.554l-1.051-.12a1.2 1.2 0 0 0-1.024.382l-.71.778a1.2 1.2 0 0 1-1.233.34l-1.014-.306a1.2 1.2 0 0 0-1.074.194l-.84.64a1.2 1.2 0 0 1-1.273.115l-.942-.481a1.2 1.2 0 0 0-1.092 0l-.942.48a1.2 1.2 0 0 1-1.274-.113l-.84-.64a1.2 1.2 0 0 0-1.074-.195l-1.014.306a1.2 1.2 0 0 1-1.232-.34l-.71-.778a1.2 1.2 0 0 0-1.024-.383l-1.051.12a1.2 1.2 0 0 1-1.154-.553l-.558-.89a1.2 1.2 0 0 0-.94-.56l-1.054-.068a1.2 1.2 0 0 1-1.037-.752l-.388-.972a1.2 1.2 0 0 0-.826-.72l-1.023-.253a1.2 1.2 0 0 1-.887-.926l-.207-1.023a1.2 1.2 0 0 0-.685-.856l-.958-.43a1.2 1.2 0 0 1-.709-1.071l-.02-1.041a1.2 1.2 0 0 0-.521-.966l-.864-.592a1.2 1.2 0 0 1-.506-1.181l.166-1.027a1.2 1.2 0 0 0-.34-1.044l-.742-.735a1.2 1.2 0 0 1-.286-1.253l.347-.98a1.2 1.2 0 0 0-.148-1.089l-.597-.853a1.2 1.2 0 0 1-.058-1.285l.518-.903a1.2 1.2 0 0 0 .05-1.098l-.435-.944a1.2 1.2 0 0 1 .173-1.275l.672-.797a1.2 1.2 0 0 0 .245-1.071l-.258-1.007a1.2 1.2 0 0 1 .398-1.222l.806-.667a1.2 1.2 0 0 0 .433-1.009l-.073-1.037a1.2 1.2 0 0 1 .61-1.131l.914-.514a1.2 1.2 0 0 0 .605-.914l.115-1.036a1.2 1.2 0 0 1 .8-1.003l.995-.343a1.2 1.2 0 0 0 .758-.791l.3-1.001a1.2 1.2 0 0 1 .965-.843l1.043-.161a1.2 1.2 0 0 0 .886-.642l.475-.935a1.2 1.2 0 0 1 1.1-.656l1.058.027a1.2 1.2 0 0 0 .985-.474l.636-.837a1.2 1.2 0 0 1 1.198-.449l1.037.215a1.2 1.2 0 0 0 1.053-.29l.778-.712a1.2 1.2 0 0 1 1.259-.228l.982.395A1.2 1.2 0 0 0 22.57.965z",
            })),
          g ||
            (g = W.createElement("path", {
              fill: "#025432",
              stroke: "#fff",
              strokeWidth: 0.6,
              d: "M24.104 6.3c9.82 0 17.779 7.926 17.779 17.7s-7.96 17.7-17.78 17.7S6.326 33.774 6.326 24 14.284 6.3 24.104 6.3Z",
            })),
          f ||
            (f = W.createElement("path", {
              fill: "#fff",
              d: "M60.491 15.212a.5.5 0 0 1-.14.167.3.3 0 0 1-.18.049.5.5 0 0 1-.25-.081 5 5 0 0 0-.314-.19 2.5 2.5 0 0 0-.434-.183 1.7 1.7 0 0 0-.58-.086q-.304 0-.532.075-.227.07-.385.2a.8.8 0 0 0-.227.313 1 1 0 0 0-.076.394q0 .276.152.46.157.183.412.313.255.129.58.232.326.102.667.221.342.114.667.27.325.15.58.39a1.7 1.7 0 0 1 .407.572q.158.34.158.826 0 .529-.185.993a2.3 2.3 0 0 1-.531.805 2.5 2.5 0 0 1-.852.54q-.504.194-1.155.194-.374 0-.738-.075a4 4 0 0 1-.7-.206 4 4 0 0 1-.623-.324 3 3 0 0 1-.52-.42l.428-.697a.4.4 0 0 1 .14-.124.34.34 0 0 1 .185-.055q.135 0 .293.114.158.108.374.243.217.135.505.248.292.108.7.108.623 0 .965-.291.342-.297.342-.848a.77.77 0 0 0-.158-.502 1.2 1.2 0 0 0-.407-.324 3 3 0 0 0-.58-.227 19 19 0 0 1-.662-.2 6 6 0 0 1-.661-.26q-.325-.15-.58-.393a1.8 1.8 0 0 1-.413-.605q-.152-.368-.152-.902 0-.427.168-.832.174-.405.5-.718.325-.313.802-.502a3 3 0 0 1 1.096-.189q.695 0 1.28.216t.998.605zM64.6 14.947v2.166h2.745v1.117H64.6v2.209h3.482v1.16h-4.946v-7.808h4.946v1.156zM74.837 20.401V21.6h-4.594V13.79h1.46v6.61zM83.95 17.696q0 .858-.287 1.593a3.7 3.7 0 0 1-.803 1.263 3.7 3.7 0 0 1-1.253.837 4.3 4.3 0 0 1-1.627.297 4.3 4.3 0 0 1-1.622-.297 3.75 3.75 0 0 1-1.258-.837 3.8 3.8 0 0 1-.808-1.263 4.3 4.3 0 0 1-.288-1.593q0-.86.288-1.588a3.8 3.8 0 0 1 .808-1.269q.525-.534 1.258-.832a4.2 4.2 0 0 1 1.622-.302q.597 0 1.123.14.525.135.965.39.44.247.787.61.351.355.596.799.244.442.369.96.13.52.13 1.092m-1.491 0q0-.643-.174-1.15a2.5 2.5 0 0 0-.493-.87 2.1 2.1 0 0 0-.782-.545 2.7 2.7 0 0 0-1.03-.19q-.575 0-1.036.19a2.2 2.2 0 0 0-.78.545 2.5 2.5 0 0 0-.495.87 3.6 3.6 0 0 0-.173 1.15q0 .642.174 1.155.173.509.493.864a2.2 2.2 0 0 0 .781.54q.461.19 1.036.19t1.03-.19a2.14 2.14 0 0 0 .781-.54q.32-.355.494-.864.174-.513.174-1.155M96.568 17.696q0 .858-.287 1.576a3.6 3.6 0 0 1-.808 1.237 3.6 3.6 0 0 1-1.253.805q-.732.286-1.627.286h-2.989V13.79h2.989q.895 0 1.627.292.732.286 1.253.805.52.513.808 1.23.287.72.287 1.578m-1.497 0q0-.643-.173-1.15a2.3 2.3 0 0 0-.494-.864 2.1 2.1 0 0 0-.78-.546 2.7 2.7 0 0 0-1.031-.189h-1.524v5.497h1.524q.575 0 1.03-.189.462-.189.781-.54.326-.355.494-.864.174-.513.173-1.155M100.188 14.947v2.166h2.745v1.117h-2.745v2.209h3.482v1.16h-4.946v-7.808h4.946v1.156zM60.491 28.412a.5.5 0 0 1-.14.167.3.3 0 0 1-.18.049.5.5 0 0 1-.25-.081 5 5 0 0 0-.314-.19 2.5 2.5 0 0 0-.434-.183 1.7 1.7 0 0 0-.58-.086q-.304 0-.532.075-.227.07-.385.2a.8.8 0 0 0-.227.313 1 1 0 0 0-.076.395q0 .275.152.458.157.184.412.314.255.129.58.232.326.102.667.221.342.114.667.27.325.15.58.39a1.7 1.7 0 0 1 .407.572q.158.34.158.826 0 .529-.185.993a2.3 2.3 0 0 1-.531.805 2.5 2.5 0 0 1-.852.54q-.504.195-1.155.194-.374 0-.738-.075a4 4 0 0 1-.7-.206 4 4 0 0 1-.623-.323 3 3 0 0 1-.52-.422l.428-.696a.4.4 0 0 1 .14-.125.34.34 0 0 1 .185-.053q.135 0 .293.113.158.108.374.243.217.135.505.248.292.108.7.108.623 0 .965-.291.342-.296.342-.848a.77.77 0 0 0-.158-.502 1.2 1.2 0 0 0-.407-.324 3 3 0 0 0-.58-.227 19 19 0 0 1-.662-.2 6 6 0 0 1-.661-.26q-.325-.15-.58-.393a1.8 1.8 0 0 1-.413-.605q-.152-.367-.152-.902 0-.427.168-.832.174-.405.5-.718.325-.313.802-.502a3 3 0 0 1 1.096-.189q.695 0 1.28.216t.998.605zM64.6 28.147v2.166h2.745v1.117H64.6v2.209h3.482v1.16h-4.946v-7.808h4.946v1.156zM76.539 30.885v3.159a4.2 4.2 0 0 1-1.275.643q-.673.2-1.443.2-.96 0-1.74-.298a3.9 3.9 0 0 1-1.33-.826 3.6 3.6 0 0 1-.846-1.264 4.2 4.2 0 0 1-.298-1.603q0-.88.288-1.615.287-.734.813-1.264a3.7 3.7 0 0 1 1.286-.82 4.7 4.7 0 0 1 1.692-.292q.477 0 .89.076.417.075.77.21.357.13.65.319.292.189.537.416l-.418.659a.4.4 0 0 1-.254.194q-.158.032-.342-.081l-.358-.205a2.3 2.3 0 0 0-.401-.178 3 3 0 0 0-.494-.125 3.6 3.6 0 0 0-.63-.048q-.58 0-1.051.194-.467.195-.797.556-.332.362-.51.87-.18.507-.18 1.134 0 .67.19 1.198.196.525.543.892.353.36.846.556.494.189 1.1.189.435 0 .776-.092t.668-.248v-1.415h-.987a.31.31 0 0 1-.223-.076.27.27 0 0 1-.076-.194v-.821zM81.969 33.628q.423 0 .753-.14.337-.14.564-.395.228-.253.347-.615.126-.361.125-.81V26.99h1.46v4.677q0 .697-.229 1.29a2.9 2.9 0 0 1-.645 1.021 2.95 2.95 0 0 1-1.02.67 3.7 3.7 0 0 1-1.355.237q-.76 0-1.362-.237a3 3 0 0 1-1.025-.67 3 3 0 0 1-.645-1.02 3.7 3.7 0 0 1-.223-1.291V26.99h1.46v4.672q0 .447.119.81.124.361.352.62.234.255.564.395.336.14.76.14M90.1 30.707q.413 0 .716-.103.31-.103.505-.28.2-.184.298-.433.098-.248.098-.545 0-.594-.396-.913-.39-.318-1.199-.318h-.933v2.592zm3.754 4.093h-1.318q-.374 0-.543-.292l-1.648-2.5a.57.57 0 0 0-.207-.2.7.7 0 0 0-.325-.06h-.624V34.8H87.73v-7.808h2.392q.797 0 1.367.167.575.161.938.459.37.297.542.713.174.41.174.907a2.3 2.3 0 0 1-.12.745 2.1 2.1 0 0 1-.335.637q-.217.286-.543.502a2.7 2.7 0 0 1-.732.34q.14.082.26.195.12.108.217.26zM99.712 31.852l-.955-2.598a6 6 0 0 1-.146-.41q-.075-.238-.152-.513-.07.275-.146.518-.076.238-.147.416l-.949 2.587zm2.576 2.948h-1.128a.5.5 0 0 1-.309-.092.6.6 0 0 1-.179-.237l-.586-1.593h-3.249l-.585 1.593a.5.5 0 0 1-.168.226.47.47 0 0 1-.31.103h-1.139l3.086-7.808h1.486zM110.579 26.992V34.8h-.748a.7.7 0 0 1-.293-.054.7.7 0 0 1-.223-.195l-4.095-5.205q.033.357.033.659V34.8h-1.285v-7.808h.764q.093 0 .158.01a.3.3 0 0 1 .119.033q.054.022.103.07a1 1 0 0 1 .108.119l4.112 5.227q-.016-.189-.028-.373a6 6 0 0 1-.01-.34v-4.747zM119.365 33.671a3.1 3.1 0 0 1-1.041.843q-.613.302-1.448.361l-.071.254q.51.12.716.319a.66.66 0 0 1 .206.486.6.6 0 0 1-.097.33.76.76 0 0 1-.271.248q-.174.102-.418.156a2.5 2.5 0 0 1-.537.054q-.222 0-.418-.032a2.4 2.4 0 0 1-.379-.087l.124-.415q.033-.125.158-.125.076 0 .162.038a.65.65 0 0 0 .266.044q.18 0 .266-.07.092-.066.092-.163 0-.156-.195-.227a4 4 0 0 0-.602-.124l.239-.69a3.9 3.9 0 0 1-1.411-.39 3.5 3.5 0 0 1-1.063-.848 3.7 3.7 0 0 1-.672-1.22 4.7 4.7 0 0 1-.233-1.517q0-.88.282-1.61.282-.734.792-1.263a3.6 3.6 0 0 1 1.225-.82 4 4 0 0 1 1.573-.298q.857 0 1.519.28.666.282 1.133.735l-.488.675a.4.4 0 0 1-.114.114.3.3 0 0 1-.184.048.4.4 0 0 1-.168-.043 5 5 0 0 1-.19-.113 5 5 0 0 0-.239-.151 2.265 2.265 0 0 0-.732-.26 2.7 2.7 0 0 0-.542-.048 2.4 2.4 0 0 0-.966.189 2.06 2.06 0 0 0-.748.54q-.315.351-.488.864a3.6 3.6 0 0 0-.174 1.16q0 .66.185 1.173.19.513.509.864.32.35.754.54.433.183.933.183.299 0 .537-.032a2.2 2.2 0 0 0 .445-.103q.206-.07.385-.178.184-.113.363-.276a.4.4 0 0 1 .114-.075.26.26 0 0 1 .125-.032q.119 0 .211.091zM125.376 31.852l-.955-2.598a6 6 0 0 1-.146-.41q-.076-.238-.152-.513-.07.275-.146.518-.076.238-.147.416l-.949 2.587zm2.576 2.948h-1.128a.5.5 0 0 1-.309-.092.6.6 0 0 1-.179-.237l-.586-1.593h-3.248l-.586 1.593a.5.5 0 0 1-.168.226.47.47 0 0 1-.309.103H120.3l3.086-7.808h1.486z",
            })),
          x ||
            (x = W.createElement("path", {
              fill: "#FFC107",
              d: "M16.272 21.6a1.8 1.8 0 0 1 1.8-1.8H30.14a1.8 1.8 0 0 1 1.8 1.8v4.766a7.834 7.834 0 0 1-15.669 0z",
            })),
          j ||
            (j = W.createElement("path", {
              fill: "#FFC107",
              d: "M30.14 19.8a1.8 1.8 0 0 1 1.8 1.8v4.766a7.834 7.834 0 0 1-15.669 0V21.6a1.8 1.8 0 0 1 1.8-1.8z",
            })),
          v ||
            (v = W.createElement("path", {
              stroke: "#fff",
              strokeLinecap: "round",
              strokeWidth: 1.8,
              d: "M27.722 17.4c0-.955-.381-1.87-1.06-2.546a3.624 3.624 0 0 0-5.113 0A3.6 3.6 0 0 0 20.49 17.4",
            })),
          w ||
            (w = W.createElement("path", {
              fill: "#fff",
              d: "M24.105 23.4c.998 0 1.807.806 1.807 1.8 0 .48-.188.914-.496 1.236-.177.186-.288.441-.225.69l.534 2.127a.6.6 0 0 1-.582.747h-2.077a.6.6 0 0 1-.582-.747l.534-2.125c.063-.25-.048-.505-.225-.691a1.8 1.8 0 0 1-.496-1.237c0-.994.81-1.8 1.808-1.8",
            })),
        );
      };
      var te = t(19931);
      let ta = (0, Y.default)($.o5).withConfig({
          componentId: "sc-a407dab4-0",
        })(["@media ", "{display:none;}"], eF.A.phoneAndTablet),
        tt = (0, Y.default)($.wn).withConfig({ componentId: "sc-a407dab4-1" })(
          ["@media ", "{align-items:center;}"],
          eF.A.phoneAndTablet,
        ),
        tn = (e) => {
          let { pledged: a, goal: t, progress: n } = e;
          return (0, z.jsxs)($.wn, {
            flex: !0,
            flexDirection: "column",
            rowGap: 16,
            children: [
              (0, z.jsx)($.wn, { children: (0, z.jsx)(te.A, { progress: n }) }),
              (0, z.jsxs)(tt, {
                flex: !0,
                flexDirectionDesktop: "column",
                flexDirectionMobile: "row",
                rowGap: 4,
                columnGap: 8,
                children: [
                  (0, z.jsxs)($.wn, {
                    flex: !0,
                    flexDirectionDesktop: "column",
                    flexDirectionMobile: "row",
                    rowGap: 8,
                    children: [
                      (0, z.jsx)(ta, {
                        fontFamily: K.f,
                        fontSize: 20,
                        color: "gray600",
                        weight: 700,
                        children: "Arrecadado",
                      }),
                      (0, z.jsx)($.o5, {
                        fontFamily: K.f,
                        fontSizeDesktop: 40,
                        fontSizeMobile: 20,
                        color: "green400",
                        weight: 700,
                        children: (0, ad.Ay)(a),
                      }),
                    ],
                  }),
                  (0, z.jsx)($.o5, {
                    fontFamily: K.f,
                    fontSizeDesktop: 20,
                    fontSizeMobile: 16,
                    color: "gray350",
                    children: t ? "de ".concat((0, ad.Ay)(t)) : "Sem meta",
                  }),
                ],
              }),
            ],
          });
        };
      function ti() {
        return (ti = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var n in t)
                  ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      let to = function (e) {
        return W.createElement(
          "svg",
          ti(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e,
          ),
          b ||
            (b = W.createElement(
              "g",
              { clipPath: "url(#first_position_svg__a)" },
              W.createElement("path", {
                fill: "#FFC107",
                d: "M0 0h24l-4 12 4 12H0z",
              }),
              W.createElement("rect", {
                width: 4,
                height: 38,
                x: -7.879,
                y: 2.197,
                fill: "#FFCB2E",
                rx: 2,
                transform: "rotate(-45 -7.879 2.197)",
              }),
              W.createElement("rect", {
                width: 4,
                height: 38,
                x: -10,
                y: -11.238,
                fill: "#FFCB2E",
                rx: 2,
                transform: "rotate(-45 -10 -11.238)",
              }),
              W.createElement("path", {
                fill: "#fff",
                d: "M11.84 8.656H10V7.408q.752 0 1.2-.128.465-.128.736-.416.271-.304.48-.864H13.6v11.2h-1.76z",
              }),
            )),
          y ||
            (y = W.createElement(
              "defs",
              null,
              W.createElement(
                "clipPath",
                { id: "first_position_svg__a" },
                W.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
              ),
            )),
        );
      };
      function tr() {
        return (tr = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var n in t)
                  ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      let ts = function (e) {
        return W.createElement(
          "svg",
          tr(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e,
          ),
          C ||
            (C = W.createElement(
              "g",
              { clipPath: "url(#third_position_svg__a)" },
              W.createElement("path", {
                fill: "#FF7822",
                d: "M0 0h24l-4 12 4 12H0z",
              }),
              W.createElement("rect", {
                width: 4,
                height: 38,
                x: -7.879,
                y: 2.197,
                fill: "#FF8D4B",
                rx: 2,
                transform: "rotate(-45 -7.879 2.197)",
              }),
              W.createElement("rect", {
                width: 4,
                height: 38,
                x: -10,
                y: -11.238,
                fill: "#FF8D4B",
                rx: 2,
                transform: "rotate(-45 -10 -11.238)",
              }),
              W.createElement("path", {
                fill: "#fff",
                d: "M11.624 17.52q-1.296 0-1.968-.72Q9 16.08 9 14.736v-.912h1.664v.992q0 1.104.912 1.104.448 0 .672-.272.24-.288.24-.992v-.912q0-.768-.272-1.088-.272-.336-.88-.336h-.592v-1.6h.64q.528 0 .784-.272.272-.271.272-.912V8.72q0-.576-.24-.848a.81.81 0 0 0-.64-.272q-.848 0-.848 1.04v.736H9.048v-.592q0-1.344.656-2.064.672-.72 1.92-.72 1.265 0 1.92.72.656.705.656 2.048v.4q0 .912-.304 1.472-.304.544-.944.784v.032q.689.256.992.832t.304 1.472v.992q0 1.344-.672 2.064-.656.704-1.952.704",
              }),
            )),
          A ||
            (A = W.createElement(
              "defs",
              null,
              W.createElement(
                "clipPath",
                { id: "third_position_svg__a" },
                W.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
              ),
            )),
        );
      };
      function tl() {
        return (tl = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var n in t)
                  ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      let tc = function (e) {
          return W.createElement(
            "svg",
            tl(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                fill: "none",
                viewBox: "0 0 24 24",
              },
              e,
            ),
            S ||
              (S = W.createElement(
                "g",
                { clipPath: "url(#second_position_svg__a)" },
                W.createElement("path", {
                  fill: "#8A8A8A",
                  d: "M0 0h24l-4 12 4 12H0z",
                }),
                W.createElement("rect", {
                  width: 4,
                  height: 38,
                  x: -7.879,
                  y: 2.197,
                  fill: "#B9B9B9",
                  rx: 2,
                  transform: "rotate(-45 -7.879 2.197)",
                }),
                W.createElement("rect", {
                  width: 4,
                  height: 38,
                  x: -10,
                  y: -11.238,
                  fill: "#B9B9B9",
                  rx: 2,
                  transform: "rotate(-45 -10 -11.238)",
                }),
                W.createElement("path", {
                  fill: "#fff",
                  d: "M9 16.144q0-1.2.384-2.048.384-.863 1.376-1.904.976-1.04 1.344-1.776.384-.736.384-1.536 0-.72-.24-.992-.224-.288-.672-.288-.912 0-.912 1.104v1.2H9V8.816q0-1.36.672-2.08.672-.735 1.952-.736 1.28 0 1.952.736.672.72.672 2.08 0 1.025-.496 2-.48.975-1.68 2.24-.785.832-1.056 1.36-.272.512-.272 1.104v.24h3.344v1.6H9z",
                }),
              )),
            k ||
              (k = W.createElement(
                "defs",
                null,
                W.createElement(
                  "clipPath",
                  { id: "second_position_svg__a" },
                  W.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }),
                ),
              )),
          );
        },
        td = (e) => {
          let {
              position: a,
              avatarSrc: t,
              title: n,
              value: i,
              altImage: o,
            } = e,
            r = {
              1: (0, z.jsx)(to, { width: 24, height: 24 }),
              2: (0, z.jsx)(tc, { width: 24, height: 24 }),
              3: (0, z.jsx)(ts, { width: 24, height: 24 }),
            };
          return (0, z.jsxs)($.wn, {
            borderRadius: 8,
            backgroundColor: 1 === a ? "beige400" : "gray200",
            padding: [8, 8, 8, 0],
            flex: !0,
            alignItems: "center",
            columnGap: 8,
            children: [
              (0, z.jsx)($.wn, { padding: [4, 0, 0], children: r[a] || null }),
              (0, z.jsx)(ee.A, {
                altImage: o,
                src: t,
                borderSize: 1,
                width: 40,
                height: 40,
              }),
              (0, z.jsx)($.wn, {
                flex: !0,
                flexCssProp: 1,
                children: (0, z.jsx)($.o5, {
                  fontFamily: K.a,
                  fontSize: 14,
                  weight: 700,
                  color: "gray600",
                  numberOfLines: 1,
                  children: n,
                }),
              }),
              (0, z.jsx)($.wn, {
                borderRadius: 16,
                backgroundColor: "gray600",
                padding: [4, 8],
                flex: !0,
                alignItems: "center",
                justifyContent: "center",
                children: (0, z.jsx)($.o5, {
                  fontFamily: K.a,
                  fontSize: 12,
                  weight: 700,
                  color: "white",
                  children: (0, ad.Ay)(i),
                }),
              }),
            ],
          });
        };
      var th = t(28646),
        tu = t(99221);
      let tm = Y.default.button.withConfig({ componentId: "sc-d0b160fb-0" })(
          [
            "position:relative;display:flex;flex:1;min-width:0;align-items:center;justify-content:center;height:48px;padding:12px 4px;border-radius:8px;white-space:nowrap;cursor:pointer;background-color:",
            ";border:1.5px solid ",
            ";box-shadow:0px 1px 2px rgba(0,0,0,0.05);transition:background-color 0.15s ease,border-color 0.15s ease;&:hover{background-color:",
            ";border-color:",
            ";}&:active{background-color:",
            ";border-color:",
            ";}&:focus-visible{outline:2px solid ",
            ";outline-offset:2px;}&:disabled{cursor:default;}",
          ],
          $.Tj.white,
          $.Tj.gray250,
          $.Tj.gray100,
          $.Tj.gray300,
          $.Tj.gray200,
          $.Tj.gray300,
          $.Tj.green600,
        ),
        tp = Y.default.div.withConfig({ componentId: "sc-d0b160fb-1" })(
          [
            "position:absolute;top:-10.5px;left:50%;transform:translateX(-50%);display:flex;align-items:center;justify-content:center;padding:2px 6px;border-radius:16px;white-space:nowrap;background-color:",
            ";",
          ],
          $.Tj.green250,
        ),
        tg = (0, Y.css)(
          [
            "display:flex;align-items:center;justify-content:center;width:100%;height:48px;padding:12px 16px;border:0;border-radius:8px;cursor:pointer;transition:background-color 0.15s ease;&:focus-visible{outline:2px solid ",
            ";outline-offset:2px;}&:disabled{cursor:default;}",
          ],
          $.Tj.green600,
        ),
        tf = Y.default.button.withConfig({ componentId: "sc-d0b160fb-2" })(
          ["", " background-color:", ";&:hover{background-color:", ";}"],
          tg,
          $.Tj.green200,
          $.Tj.green250,
        ),
        tx = (e) => {
          let {
              amounts: a,
              onPick: t,
              onShare: n,
              locked: i,
              compact: o = !1,
            } = e,
            r = (e) => t(Number(e.currentTarget.value));
          return (0, z.jsxs)($.wn, {
            flex: !0,
            flexDirection: "column",
            rowGap: o ? 8 : 16,
            padding: o ? [0] : [12, 16, 16],
            borderRadius: 8 * !o,
            backgroundColor: o ? void 0 : "gray100",
            children: [
              (0, z.jsxs)($.wn, {
                flex: !0,
                flexDirection: "column",
                rowGap: o ? 8 : 12,
                children: [
                  (0, z.jsxs)($.wn, {
                    flex: !0,
                    flexDirection: "column",
                    rowGap: 16,
                    children: [
                      (0, z.jsx)($.o5, {
                        fontFamily: K.a,
                        fontSize: o ? 12 : 14,
                        weight: 700,
                        color: "gray500",
                        children: "Ajude doando para a causa:",
                      }),
                      (0, z.jsx)($.wn, {
                        flex: !0,
                        columnGap: 4,
                        children: a.map((e) =>
                          (0, z.jsxs)(
                            tm,
                            {
                              type: "button",
                              value: e,
                              onClick: r,
                              disabled: i,
                              children: [
                                (0, z.jsx)($.o5, {
                                  fontFamily: K.a,
                                  fontSize: 12,
                                  weight: 700,
                                  color: "gray600",
                                  children: "R$ ".concat(e),
                                }),
                                e === tu.X6 &&
                                  (0, z.jsx)(tp, {
                                    children: (0, z.jsx)($.o5, {
                                      fontFamily: K.a,
                                      fontSize: 10,
                                      weight: 700,
                                      color: "green600",
                                      children: "Sugerido",
                                    }),
                                  }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, z.jsx)($.$n, {
                    variant: "vakinha",
                    onClick: () => t(tu.Ys),
                    size: "medium",
                    block: !0,
                    disabled: i,
                    children: (0, z.jsx)($.o5, {
                      color: "white",
                      fontFamily: K.a,
                      fontSize: 20,
                      weight: 700,
                      children: "Ajudar com outro valor",
                    }),
                  }),
                ],
              }),
              !o && (0, z.jsx)($.cG, { color: "gray200" }),
              (0, z.jsxs)($.wn, {
                flex: !0,
                flexDirection: "column",
                rowGap: 16,
                children: [
                  !o &&
                    (0, z.jsx)($.o5, {
                      fontFamily: K.a,
                      fontSize: 14,
                      weight: 700,
                      color: "gray500",
                      children: "Ou voc\xea pode ajudar compartilhando:",
                    }),
                  (0, z.jsx)(tf, {
                    type: "button",
                    onClick: n,
                    children: (0, z.jsx)($.o5, {
                      fontFamily: K.a,
                      fontSize: 20,
                      weight: 700,
                      color: "green700",
                      children: "Compartilhar",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        tj = (e) => {
          var a, t;
          let {
              slug: n,
              status: i,
              dataCy: o,
              topDonors: r,
              loggedUser: s,
              rewardCampaign: l,
              totalAmountUser: c,
              campaignType: d = "normal",
              openShareModal: h,
              distinctId: u,
              campaignId: m,
              suggestedAmountsVariant: p,
              compact: g,
            } = e,
            f =
              (null == r ? void 0 : r.length) > 0 &&
              (null == (a = r[0]) ? void 0 : a.totalDonated) > 0 &&
              "closed" === i,
            x = null == s || null == (t = s.name) ? void 0 : t.split(" ")[0],
            j = (0, F.useRouter)(),
            v = (0, tu.WZ)(p),
            [w, b] = (0, W.useState)(null);
          (0, W.useEffect)(() => {
            let e = (e) => {
              e.persisted && b(null);
            };
            return (
              window.addEventListener("pageshow", e),
              () => window.removeEventListener("pageshow", e)
            );
          }, []);
          let y = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              (0, th.D)({
                eventName: "show-suggested-amounts-click",
                distinctId: (0, ew.xQ)(),
                properties: {
                  $feature_flag: tu.nJ,
                  $feature_flag_response: p,
                  campaignId: m,
                  ...e,
                },
              });
            },
            C = 0,
            A = !1;
          (null == r ? void 0 : r.length) > 0 &&
            s &&
            (A = r[0].id !== s.id && c > 0) &&
            (C = r[0].totalDonated - c + 1);
          let S = async () => {
              if (p && null !== w) return;
              (p && b(tu.Ys),
                u &&
                  (0, er.$)({
                    eventName: "show-campaign-contribute",
                    properties: { campaignType: d, totalAmountUser: c },
                  }),
                p && y());
              let e = "/vaquinha/".concat(n, "/contribua"),
                a = e;
              if (A) {
                let t = r[0].totalDonated - c + 1;
                a = "".concat(e, "?planValue=").concat(t > 25 ? t : 25);
              }
              (j.push(a),
                (0, ep.$s)(
                  "Interactions",
                  "contribution",
                  "Contribution Button",
                ));
            },
            k = () => {
              (u &&
                (0, er.$)({
                  eventName: "show-campaign-share-button",
                  properties: { campaign_id: m },
                }),
                h());
            };
          return (0, z.jsxs)($.wn, {
            flex: !0,
            flexDirection: "column",
            rowGap: 8,
            children: [
              l &&
                (0, z.jsxs)(z.Fragment, {
                  children: [
                    f &&
                      (0, z.jsx)($.wn, {
                        children: (0, z.jsx)($.o5, {
                          fontFamily: K.f,
                          fontSize: 14,
                          weight: 700,
                          color: "gray600",
                          alignMobile: "center",
                          children: "Conhe\xe7a o ganhador:",
                        }),
                      }),
                    (0, z.jsx)($.wn, {
                      flex: !0,
                      flexDirection: "column",
                      rowGap: 8,
                      paddingDesktop: [8, 0, 0],
                      paddingMobile: [0],
                      children:
                        null == r
                          ? void 0
                          : r.slice(0, f ? 1 : 3).map((e, a) =>
                              (0, z.jsx)(
                                td,
                                {
                                  position: a + 1,
                                  avatarSrc: e.avatar,
                                  value: e.totalDonated,
                                  title: e.name,
                                  altImage: "Imagem do doador",
                                },
                                e.name,
                              ),
                            ),
                    }),
                    A &&
                      !f &&
                      (0, z.jsx)($.wn, {
                        children: (0, z.jsxs)($.o5, {
                          fontFamily: K.f,
                          fontSize: 14,
                          weight: 700,
                          color: "gray600",
                          as: "span",
                          children: [
                            x,
                            ", faltam ",
                            (0, ad.Ay)(C),
                            " para voc\xea ser o 1\xba lugar!",
                            (0, z.jsx)($.o5, {
                              fontFamily: K.f,
                              fontSize: 14,
                              color: "gray600",
                              as: "span",
                              children:
                                " Fa\xe7a um novo lance e tome a posi\xe7\xe3o.",
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
              v &&
                (0, z.jsx)(tx, {
                  amounts: v,
                  onPick: (e) => {
                    if (null !== w) return;
                    b(e);
                    let a =
                      e === tu.Ys
                        ? { otherAmount: !0 }
                        : { suggestedAmount: e };
                    (u &&
                      (0, er.$)({
                        eventName: "show-campaign-contribute",
                        properties: {
                          campaignType: d,
                          totalAmountUser: c,
                          ...a,
                        },
                      }),
                      y(a));
                    let t = "/vaquinha/".concat(n, "/contribua");
                    (j.push(
                      e === tu.Ys ? t : "".concat(t, "?planValue=").concat(e),
                    ),
                      (0, ep.$s)(
                        "Interactions",
                        "contribution",
                        "Contribution Button",
                      ));
                  },
                  onShare: k,
                  locked: null !== w,
                  compact: g,
                }),
              !v &&
                (0, z.jsxs)(z.Fragment, {
                  children: [
                    (0, z.jsx)($.$n, {
                      variant: "vakinha",
                      onClick: S,
                      size: "medium",
                      block: !0,
                      disabled: "active" !== i,
                      children: (0, z.jsx)($.o5, {
                        color: "white",
                        fontFamily: K.a,
                        fontSize: 20,
                        weight: 700,
                        dataCy: o,
                        children:
                          "active" !== i
                            ? "Encerrada"
                            : l
                              ? "auction" === d
                                ? 0 === c
                                  ? "Dar Lance"
                                  : "Dar novo lance agora"
                                : 0 !== c && s
                                  ? "Doar novamente"
                                  : "Quero participar"
                              : "Quero Ajudar",
                      }),
                    }),
                    (0, z.jsx)($.$n, {
                      variant: "dark",
                      outline: !0,
                      onClick: k,
                      size: "medium",
                      block: !0,
                      disabled: "active" !== i,
                      children: (0, z.jsx)($.o5, {
                        fontFamily: K.a,
                        fontSize: 20,
                        weight: 700,
                        dataCy: o,
                        children: "Compartilhar",
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        tv = (0, Y.default)($.wn).withConfig({ componentId: "sc-caf488c7-0" })(
          [
            "position:relative;max-width:fit-content;margin:0 auto;@media ",
            "{max-width:100%;margin:0 0 0 16px;}",
          ],
          $.HP.phoneAndTablet,
        ),
        tw = Y.default.div.withConfig({ componentId: "sc-caf488c7-1" })(
          [
            "position:absolute;top:0;left:-30px;@keyframes shake{0%{transform:rotate(0deg);}25%{transform:rotate(5deg);}50%{transform:rotate(0deg);}75%{transform:rotate(-5deg);}100%{transform:rotate(0deg);}}img{animation:shake 0.5s ease-in-out infinite;}@media ",
            "{top:50%;transform:translateY(-50%);left:-15px;img{width:40px;height:40px;object-fit:contain;}};",
          ],
          $.HP.phoneAndTablet,
        ),
        tb = Y.default.button.withConfig({ componentId: "sc-caf488c7-2" })(
          [
            "position:absolute;top:4px;right:8px;background:none;border:none;cursor:pointer;padding:4px;display:none;@media ",
            "{display:block;}&:hover{opacity:0.7;}",
          ],
          $.HP.phoneAndTablet,
        ),
        ty = (0, Y.default)($.wn).withConfig({ componentId: "sc-caf488c7-3" })(
          ["@media ", "{max-width:240px;}"],
          $.HP.phoneAndTablet,
        ),
        tC = (e) => {
          let { primaryUnit: a, secondaryUnit: t } = e;
          return (0, z.jsxs)($.wn, {
            flex: !0,
            alignItems: "center",
            paddingDesktop: [0, 0, 0, 32],
            paddingMobile: [0, 0, 0, 8],
            children: [
              (0, z.jsx)($.wn, {
                backgroundColor: "gray600",
                paddingMobile: [4],
                paddingDesktop: [8],
                borderRadius: 8,
                flex: !0,
                alignItems: "center",
                justifyContent: "center",
                children: (0, z.jsx)($.o5, {
                  fontFamily: K.f,
                  weight: 700,
                  fontSizeMobile: 12,
                  fontSizeDesktop: 16,
                  color: "white",
                  children: a,
                }),
              }),
              (0, z.jsx)($.wn, {
                padding: [0, 4, 0],
                children: (0, z.jsx)($.o5, {
                  fontFamily: K.f,
                  fontSizeMobile: 14,
                  fontSizeDesktop: 18,
                  children: ":",
                }),
              }),
              (0, z.jsx)($.wn, {
                backgroundColor: "white",
                paddingMobile: [4],
                paddingDesktop: [8],
                borderRadius: 8,
                flex: !0,
                alignItems: "center",
                justifyContent: "center",
                children: (0, z.jsx)($.o5, {
                  fontFamily: K.f,
                  weight: 700,
                  fontSizeMobile: 12,
                  fontSizeDesktop: 16,
                  color: "gray600",
                  children: t,
                }),
              }),
            ],
          });
        },
        tA = (e) => {
          let { timeRemaining: a, onClose: t, shadow: n = !1 } = e;
          return (0, z.jsxs)(tv, {
            flex: !0,
            shadow: n,
            borderRadius: 8,
            paddingMobile: [8],
            alignItems: "center",
            paddingDesktop: [12, 16],
            backgroundColor: "green100",
            justifyContent: "space-between",
            children: [
              (0, z.jsx)(tw, {
                children: (0, z.jsx)($.FW, {
                  loading: "lazy",
                  alt: "Imagem de caixa de presente",
                  src: (0, eY.A)("Gift.png"),
                }),
              }),
              (0, z.jsx)(ty, {
                paddingDesktop: [0, 0, 0, 40],
                paddingMobile: [0, 0, 0, 24],
                children: (0, z.jsx)($.o5, {
                  fontFamily: K.f,
                  weight: 700,
                  fontSizeMobile: 14,
                  fontSizeDesktop: 16,
                  color: "gray600",
                  children:
                    "Quem criou a vaquinha vai dar uma recompensa para quem doar mais!",
                }),
              }),
              (0, z.jsx)(tC, {
                primaryUnit: a.primaryUnit,
                secondaryUnit: a.secondaryUnit,
              }),
              t &&
                (0, z.jsx)(tb, {
                  onClick: t,
                  children: (0, z.jsx)($.hh, {
                    size: 16,
                    color: "gray350",
                    children: (0, z.jsx)(a6.A, {}),
                  }),
                }),
            ],
          });
        };
      var tS = t(15535),
        tk = t(43422),
        tz = t(92381),
        tq = t(24977),
        tM = t(51675),
        tI = t(98103),
        tF = t(70872),
        tT = t(83113),
        tD = t(19870),
        tP = t(99689),
        tE = t(59280),
        t_ = t(35463),
        tV = t(20554);
      let tO = (0, Y.default)($.wn).withConfig({
          componentId: "sc-8986cb08-0",
        })(
          ["svg{fill:", ";margin-left:8px;}border-radius:8px 8px 0 0;", ";"],
          $.Tj.white,
          (e) => {
            let { isMobile: a } = e;
            return !a && (0, Y.css)(["@media ", "{display:none;}"], $.HP.phone);
          },
        ),
        tL = (0, Y.default)($.wn).withConfig({ componentId: "sc-8986cb08-1" })(
          [
            "position:absolute;left:0;z-index:",
            ";max-height:500px;overflow:auto;::-webkit-scrollbar{width:4px;}::-webkit-scrollbar-thumb{background-color:",
            ";border-radius:4px;}::-webkit-scrollbar-track{background-color:",
            ";}@media ",
            "{display:none;}",
          ],
          tV.A.dropdown,
          $.Tj.gray250,
          $.Tj.white,
          $.HP.phone,
        ),
        tG = Y.default.div.withConfig({ componentId: "sc-8986cb08-2" })(
          [
            "width:100%;background-color:",
            ";position:fixed;top:94px;right:",
            ";height:calc(100% - 94px);overflow-y:auto;transition:right 0.4s ease-in-out;",
          ],
          $.Tj.white,
          (e) => {
            let { open: a } = e;
            return a ? "0" : "-100%";
          },
        ),
        tH = (0, Y.default)($.wn).withConfig({ componentId: "sc-8986cb08-3" })(
          [
            "> a > div{> div > span{&:first-child{border-radius:8px;padding:16px;width:32px;height:32px;justify-content:center;align-items:center;}}&:nth-child(odd) > div > span:first-child{background-color:",
            ";}&:nth-child(even) > div > span:first-child{background-color:",
            ";}}",
          ],
          $.Tj.green500,
          $.Tj.green400,
        ),
        tR = Y.default.div.withConfig({ componentId: "sc-8986cb08-4" })([
          "height:16px;",
        ]),
        tN = (e) => {
          let {
              slug: a,
              isMobile: t,
              pixKey: n,
              status: i,
              isCoOwner: o,
              closureRequest: r,
              missionsExperiment: s,
              managerCoOwner: l,
            } = e,
            [c, d] = (0, W.useState)(!1),
            h = !0 !== r && "closed" !== i,
            u = () => {
              d(!c);
            },
            m = () =>
              (0, z.jsxs)($.wn, {
                padding: [16],
                children: [
                  (0, z.jsxs)($.wn, {
                    flex: !0,
                    justifyContent: "space-between",
                    children: [
                      (0, z.jsx)($.o5, {
                        fontFamily: K.a,
                        fontSize: 16,
                        weight: 700,
                        color: "gray600",
                        children: "Op\xe7\xf5es da sua vaquinha",
                      }),
                      (0, z.jsx)($.hh, {
                        color: "gray350",
                        size: 24,
                        children: (0, z.jsx)($.wn, {
                          cursor: "pointer",
                          children: (0, z.jsx)(tM.A, { onClick: u }),
                        }),
                      }),
                    ],
                  }),
                  (0, z.jsxs)(tH, {
                    flex: !0,
                    flexDirection: "column",
                    rowGap: 16,
                    padding: [24, 0, 0],
                    children: [
                      (0, z.jsx)(U.A, {
                        route: "statistics",
                        params: { slug: a },
                        children: (0, z.jsx)(tP.A, {
                          title: "Acompanhe estat\xedsticas",
                          description:
                            "Dados e gr\xe1ficos detalhados da sua arrecada\xe7\xe3o",
                          icon: (0, z.jsx)(tq.A, {}),
                          color: "white",
                          shadow: !0,
                          iconSize: 16,
                          fontSize: 12,
                          fontFamily: "montserrat",
                        }),
                      }),
                      (0, z.jsx)(U.A, {
                        route: "shareImages",
                        params: { slug: a },
                        children: (0, z.jsx)(tP.A, {
                          title: "Divulgue sua vaquinha",
                          description:
                            "Dicas para que mais gente saiba sobre ela e voc\xea arrecade mais",
                          icon: (0, z.jsx)(tI.A, {}),
                          color: "white",
                          shadow: !0,
                          iconBackgroundColor: "green500",
                          iconSize: 16,
                          fontSize: 12,
                          fontFamily: "montserrat",
                        }),
                      }),
                      (0, z.jsx)(U.A, {
                        route: "campaignBalance",
                        params: { slug: a },
                        children: (0, z.jsx)(tP.A, {
                          title: "Entenda seu saldo",
                          description:
                            "Veja os detalhes do seu saldo, contribui\xe7\xf5es recebidas na vaquinha e saques",
                          icon: (0, z.jsx)(tz.A, {}),
                          color: "white",
                          shadow: !0,
                          "data-card": "open",
                          iconSize: 16,
                          fontSize: 12,
                          fontFamily: "montserrat",
                        }),
                      }),
                      !o &&
                        h &&
                        (0, z.jsx)(U.A, {
                          route: "campaignEdit",
                          params: { slug: a },
                          children: (0, z.jsx)(tP.A, {
                            title: "Edite sua vaquinha",
                            description:
                              "Modifique as informa\xe7\xf5es gerais da sua vaquinha",
                            icon: (0, z.jsx)(tF.A, {}),
                            color: "white",
                            shadow: !0,
                            "data-card": "open",
                            iconSize: 16,
                            fontSize: 12,
                            fontFamily: "montserrat",
                          }),
                        }),
                      s &&
                        (0, z.jsx)(U.A, {
                          route: "completeCampaignActions",
                          params: { slug: a },
                          children: (0, z.jsx)(tP.A, {
                            title: "A\xe7\xf5es para o sucesso",
                            description:
                              "Fa\xe7a a\xe7\xf5es que aumentem suas chances de sucesso.",
                            icon: (0, z.jsx)(t_.A, {}),
                            color: "white",
                            shadow: !0,
                            "data-card": "open",
                            iconSize: 16,
                            fontSize: 12,
                            fontFamily: "montserrat",
                          }),
                        }),
                      l &&
                        (0, z.jsx)(U.A, {
                          route: "coOwners",
                          params: { slug: a },
                          children: (0, z.jsx)(tP.A, {
                            title: "Gerencie sua equipe",
                            description:
                              "Voc\xea pode adicionar at\xe9 10 pessoas a equipe da vaquinha para que elas te ajudem nessa jornada",
                            icon: (0, z.jsx)(tk.A, {}),
                            color: "white",
                            shadow: !0,
                            iconSize: 16,
                            fontSize: 12,
                            fontFamily: "montserrat",
                          }),
                        }),
                      (0, z.jsx)(U.A, {
                        route: "createNews",
                        params: { slug: a },
                        children: (0, z.jsx)(tP.A, {
                          title: "Poste atualiza\xe7\xf5es",
                          description:
                            "As pessoas querem saber o que est\xe1 acontecendo com a sua campanha. Atualize e incentive doadores.",
                          icon: (0, z.jsx)(tD.A, {}),
                          color: "white",
                          shadow: !0,
                          iconSize: 16,
                          fontSize: 12,
                          fontFamily: "montserrat",
                        }),
                      }),
                      n &&
                        "closed" !== i &&
                        (0, z.jsx)(U.A, {
                          route: "sharePixKey",
                          params: { slug: a },
                          children: (0, z.jsx)(tP.A, {
                            title: "Compartilhe a chave Pix exclusiva",
                            description:
                              "Organiza\xe7\xe3o e seguran\xe7a atrav\xe9s da chave Pix criada apenas para sua vaquinha",
                            icon: (0, z.jsx)(tS.A, {}),
                            color: "white",
                            shadow: !0,
                            iconSize: 16,
                            fontSize: 12,
                            fontFamily: "montserrat",
                          }),
                        }),
                      r &&
                        (0, z.jsx)(U.A, {
                          route: "campaignEdit",
                          params: { slug: a },
                          children: (0, z.jsx)(tP.A, {
                            title: "Ver solicita\xe7\xe3o",
                            description:
                              "Veja os detalhes da sua solicita\xe7\xe3o para encerrar essa vaquinha",
                            icon: (0, z.jsx)(tR, {
                              children: (0, z.jsx)(tE.A, {
                                width: 16,
                                height: 16,
                              }),
                            }),
                            color: "white",
                            shadow: !0,
                            "data-card": "open",
                            iconSize: 16,
                            fontSize: 12,
                            fontFamily: "montserrat",
                          }),
                        }),
                    ],
                  }),
                ],
              });
          return (
            (0, W.useEffect)(
              () => (
                c && t
                  ? ((document.body.style.overflow = "hidden"),
                    (document.body.style.position = "fixed"),
                    (document.body.style.width = "100%"))
                  : ((document.body.style.overflow = ""),
                    (document.body.style.position = ""),
                    (document.body.style.width = "")),
                () => {
                  ((document.body.style.overflow = ""),
                    (document.body.style.position = ""),
                    (document.body.style.width = ""));
                }
              ),
              [c],
            ),
            (0, z.jsxs)(z.Fragment, {
              children: [
                (0, z.jsxs)(tO, {
                  flex: !0,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: [8],
                  backgroundColor: "green600",
                  onClick: u,
                  cursor: "pointer",
                  "data-cy": "manage-campaign-dropdown-mobile",
                  isMobile: t,
                  children: [
                    (0, z.jsx)($.o5, {
                      fontFamily: K.f,
                      fontSize: 14,
                      weight: 700,
                      align: "center",
                      color: "white",
                      children: "Op\xe7\xf5es da sua vaquinha",
                    }),
                    (0, z.jsx)(tT.A, {}),
                  ],
                }),
                t && (0, z.jsx)(tG, { open: c, children: m() }),
                c &&
                  !t &&
                  (0, z.jsx)(tL, {
                    borderRadius: 8,
                    backgroundColor: "white",
                    children: m(),
                  }),
              ],
            })
          );
        };
      var tB = t(81522),
        tW = t(42040),
        t$ = t(53091),
        tU = t(64613);
      let tK = (e) => [
          {
            title: "Como ajudar ".concat(e.user.name, "?"),
            content: (0, O.Ay)(
              [
                'Fazendo uma doa\xe7\xe3o na <a href="queroajudar.html">p\xe1gina de ajuda</a>.',
                "Compartilhando a campanha nas suas redes sociais.",
                "Divulgando para amigos e familiares que possam se sensibilizar com a causa.",
                ...(e.pixKey
                  ? [
                      "Doando via PIX: ".concat(e.pixKey, "."),
                    ]
                  : []),
              ].join("<br>"),
            ),
          },
          {
            title: "Quando a vaquinha foi criada?",
            content: "A vaquinha "
              .concat(e.title, " foi criada em ")
              .concat((0, eg.Ay)(e.createdAt), "."),
          },
          {
            title: "Qual a meta da vaquinha ".concat(e.title, "?"),
            content: "Meta: ".concat((0, ad.Ay)(e.goal), "."),
          },
          {
            title: "Como posso ajudar via chave PIX?",
            content: (0, O.Ay)(
              [
                ...(e.pixKey
                  ? [
                      "Chave PIX: ".concat(e.pixKey, "."),
                    ]
                  : []),
                "Tipo de chave: E-mail.",
                "Importante: Ao fazer uma doa\xe7\xe3o via PIX, entre em contato com o criador da vaquinha para informar sobre a doa\xe7\xe3o, assim podemos agradecer e manter o controle das contribui\xe7\xf5es.",
              ].join("<br>"),
            ),
          },
          {
            title: "Quanto a vaquinha j\xe1 arrecadou?",
            content: (0, O.Ay)(
              [
                "Valor arrecadado: ".concat((0, ad.Ay)(e.collectedValue), "."),
                "Percentual da meta: ".concat(
                  Math.round(e.collectedPercentValue),
                  "%.",
                ),
                "N\xfamero de doadores: ".concat(
                  e.approvedContributionsCount,
                  ".",
                ),
                "\xdaltima atualiza\xe7\xe3o: ".concat(
                  (0, eg.Ay)(e.updatedAt),
                  ".",
                ),
              ].join("<br>"),
            ),
          },
        ],
        tQ = (0, Y.default)($.wn).withConfig({ componentId: "sc-19bcb7f7-0" })([
          "border-radius:16px 16px 0 0;",
        ]),
        tY = (0, Y.default)(tQ).withConfig({ componentId: "sc-19bcb7f7-1" })(
          [
            "position:sticky;bottom:0;width:100%;background-color:",
            ";box-shadow:0px -3px 9px 2px rgba(214,214,214,0.62);z-index:2;",
          ],
          eb.ON,
        ),
        tX = (e) => {
          let {
            id: a,
            slug: t,
            status: n,
            pixKey: i,
            topDonors: o,
            loggedUser: r,
            campaignType: s,
            isCampaignOwner: l,
            totalAmountUser: c,
            rewardDescription: d,
            openShareModal: h,
            distinctId: u,
            missionsExperiment: m,
            suggestedAmountsVariant: p,
          } = e;
          return (0, z.jsx)(tY, {
            children: (0, z.jsxs)(tQ, {
              backgroundColor: l ? "green600" : "green200",
              padding: [0],
              children: [
                l &&
                  (0, z.jsx)(tN, {
                    id: a,
                    slug: t,
                    isMobile: !0,
                    pixKey: i,
                    status: n,
                    distinctId: u,
                    missionsExperiment: m,
                  }),
                !l &&
                  (0, z.jsx)(tQ, {
                    backgroundColor: "green200",
                    padding: [8, 16],
                    flex: !0,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 16,
                    children: (0, z.jsx)(aZ, {}),
                  }),
                (0, z.jsx)(tQ, {
                  backgroundColor: "white",
                  padding: [16],
                  children: (0, z.jsx)(tj, {
                    dataCy: "campaign-toolbar-mobile",
                    slug: t,
                    status: n,
                    rewardCampaign: !!d,
                    topDonors: o,
                    totalAmountUser: c,
                    loggedUser: r,
                    campaignType: s,
                    openShareModal: h,
                    distinctId: u,
                    campaignId: a,
                    suggestedAmountsVariant: p,
                    compact: !0,
                  }),
                }),
              ],
            }),
          });
        };
      var tZ = t(94825),
        tJ = t(90283),
        t0 = t(45826),
        t1 = t(98377),
        t2 = t(75600),
        t4 = t(90228);
      let t3 = P()(
          () =>
            Promise.all([t.e(1170), t.e(4164), t.e(5692)]).then(
              t.bind(t, 55692),
            ),
          { loadableGenerated: { webpack: () => [55692] } },
        ),
        t5 = P()(() => t.e(3070).then(t.bind(t, 23070)), {
          loadableGenerated: { webpack: () => [23070] },
        }),
        t6 = P()(() => Promise.resolve().then(t.bind(t, 70471)), {
          loadableGenerated: { webpack: () => [70471] },
          ssr: !1,
        }),
        t8 = P()(() => t.e(8843).then(t.bind(t, 58843)), {
          loadableGenerated: { webpack: () => [58843] },
          ssr: !1,
        }),
        t7 = P()(() => t.e(3391).then(t.bind(t, 55772)), {
          loadableGenerated: { webpack: () => [55772] },
        }),
        t9 = P()(() => t.e(101).then(t.bind(t, 20101)), {
          loadableGenerated: { webpack: () => [20101] },
          ssr: !1,
        }),
        useTobiasCarousel = (enabled, paused) => {
          let cover = "images/18647470-8B9A-47F5-B164-B3F94A402473.jpg",
            [photos, setPhotos] = (0, W.useState)([cover]),
            [index, setIndex] = (0, W.useState)(0);
          (0, W.useEffect)(() => {
            if (!enabled) return;
            let active = !0,
              images = Array.from({ length: 5 }, (_, i) =>
                "images/foto-".concat(i + 2, ".png"),
              );
            Promise.all(
              images.map(
                (src) =>
                  new Promise((resolve) => {
                    let image = new Image();
                    image.onload = () => resolve(src);
                    image.onerror = () => {
                      console.warn("Imagem do carrossel indisponível:", src);
                      resolve(null);
                    };
                    image.src = src;
                  }),
              ),
            ).then((available) => {
              active && setPhotos([cover, ...available.filter(Boolean)]);
            });
            return () => {
              active = !1;
            };
          }, [enabled]);
          (0, W.useEffect)(() => {
            if (!enabled || paused || photos.length < 2) return;
            let motion = window.matchMedia("(prefers-reduced-motion: reduce)"),
              timer = window.setInterval(() => {
                if (!motion.matches && !document.hidden)
                  setIndex((current) => (current + 1) % photos.length);
              }, 5000);
            return () => window.clearInterval(timer);
          }, [enabled, paused, photos]);
          return photos[index];
        },
        ne = (e) => {
          let {
              token: a,
              indication: t,
              keepAliveToken: n,
              storyArm: i,
              storyIneligibleReason: o,
              freeStickersClaimState: r,
              suggestedAmountsVariant: s,
              visitorGalleryVariant: l,
            } = e,
            {
              campaign: c,
              badges: d,
              endingTime: h,
              campaignAuthorizeToken: u,
              approvedValue: m,
              spotlightsStatus: p,
            } = e,
            {
              articleMicrodata: g,
              donateActionMicrodata: f,
              microdataFaqShowCampaign: x,
            } = e,
            {
              source: j,
              isMobile: initialMobile,
              coOwners: w,
              topDonors: b,
              loggedUser: y,
              sharePixKey: C,
              totalAmountUser: A,
            } = e,
            {
              id: S,
              user: k,
              goal: q,
              slug: F,
              city: D,
              title: P,
              image: E,
              video: L,
              state: Q,
              status: Y,
              pixKey: X,
              shortUrl: Z,
              isCoOwner: es,
              createdAt: el,
              supporters: ec,
              originalId: eh,
              endingDate: ej,
              description: eb,
              categoryName: ey,
              campaignType: eC,
              collectedValue: eA,
              closureRequest: eS,
              beneficiaryName: ek,
              shortDescription: eM,
              sensitiveContent: eI,
              rewardDescription: eF,
              collectedPercentValue: eT,
              allStickersReceivedCount: eP,
              managerCoOwner: eE,
              ogPreview: e_,
            } = c,
            [v, setMobile] = (0, W.useState)(initialMobile),
            eV = "/vaquinha/".concat(F),
            eL = (0, em.km)(Q.name),
            eG = k.id === (null == y ? void 0 : y.id),
            eH = E.original.includes("vaquinha_default"),
            eR = v ? E.mobile : E.desktop,
            eB = w.map((e) => e.avatar),
            eW =
              Q &&
              [D.name || null, null == eL ? void 0 : eL.abbreviation]
                .filter(Boolean)
                .join(" / "),
            e$ = "A vaquinha "
              .concat(P, " foi criada no dia ")
              .concat((0, eg.Ay)(el), " na categoria ")
              .concat(ey, " com meta de ")
              .concat((0, ad.Ay)(q), "."),
            eK =
              0 === ec
                ? "Seja o primeiro a ajudar!"
                : "Ela j\xe1 recebeu "
                    .concat(ec, " ")
                    .concat(
                      (0, ef.t)(ec, "doa\xe7\xe3o"),
                      ". Ajude voc\xea tamb\xe9m!",
                    ),
            eQ = window.location.href.split(/[?#]/)[0],
            eY = (null == e_ ? void 0 : e_.imageUrl) ? e_ : null,
            eX =
              (null == eY ? void 0 : eY.imageUrl) ||
              "".concat(E.mobile.split("?")[0], "?ims=1200x630"),
            eZ = (null == eY ? void 0 : eY.title) || P,
            eJ =
              (null == eY ? void 0 : eY.description) ||
              "Doar faz bem e voc\xea faz a diferen\xe7a! Conhe\xe7a minha vaquinha: ".concat(
                P,
              ),
            e0 = [{ id: S, position: 0 }],
            { cardTracking: e1 } = (0, t2.A)({
              surface: { page: "show", zone: "indication_modal" },
              cards: e0,
              trackers: ["viewed", "clicked"],
            }),
            [e2, e4] = (0, W.useState)(!1),
            carouselImage = useTobiasCarousel(6183652 === S, e2),
            [e3, e5] = (0, W.useState)({
              avatar: "",
              name: "",
              indicationsCount: 0,
            }),
            [e6, e8] = (0, W.useState)(),
            [e7, e9] = (0, W.useState)(!1),
            [ae, aa] = (0, W.useState)(!1),
            [at, an] = (0, W.useState)(eI),
            ai = ((e) => {
              let {
                  campaign: a,
                  visitorGalleryVariant: t,
                  isCampaignOwner: n,
                  isMobile: i,
                  coverSrc: o,
                  sensitiveCover: r,
                  onRevealCover: s,
                } = e,
                [l, c] = (0, W.useState)(0),
                [d, h] = (0, W.useState)([]),
                u = (0, tW.QO)(a),
                m = u.length > 0 && (n || "variant" === t),
                p = u.length + 1,
                g = [
                  { src: o, hidden: r },
                  ...(m
                    ? u.map((e) => ({
                        src: (0, tW.VL)(e.original, i),
                        hidden: e.sensitive && !d.includes(e.id),
                      }))
                    : []),
                ],
                f = m
                  ? [
                      {
                        url: a.image.original,
                        caption: "Foto 1 de ".concat(p),
                      },
                      ...u.map((e, a) => ({
                        url: e.original,
                        caption: "Foto ".concat(a + 2, " de ").concat(p),
                        date: (0, eg.Ay)(e.createdAt),
                      })),
                    ]
                  : [{ url: a.image.original }],
                x = g
                  .map((e, a) => (e.hidden ? null : a))
                  .filter((e) => null !== e),
                j = x.map((e) => f[e]);
              return (
                (0, W.useEffect)(() => {
                  t &&
                    !n &&
                    ((0, tW.nm)(a.id, t),
                    (0, er.$)({
                      eventName: tW.KU,
                      properties: {
                        vakinha_id: a.id,
                        photos: u.length,
                        variant: t,
                      },
                    }));
                }, [a.id]),
                {
                  showGallery: m,
                  slides: g,
                  lightboxImages: j,
                  lightboxIndex: l,
                  setLightboxIndex: c,
                  isHidden: (e) => {
                    var a;
                    return !!(null == (a = g[e]) ? void 0 : a.hidden);
                  },
                  revealSlide: (e) => {
                    if (0 === e) return void s();
                    h((a) => [...a, u[e - 1].id]);
                  },
                  onSlideChange: (e, t) => {
                    (0, er.$)({
                      eventName: "show-campaign-gallery-swipe",
                      properties: { vakinha_id: a.id, index: e, nav: t },
                    });
                  },
                  openAt: (e) => {
                    c(Math.max(0, x.indexOf(e)));
                  },
                  trackOpen: (e) => {
                    m &&
                      (0, er.$)({
                        eventName: "show-campaign-gallery-open",
                        properties: { vakinha_id: a.id, index: e },
                      });
                  },
                }
              );
            })({
              campaign: c,
              visitorGalleryVariant: l,
              isCampaignOwner: eG,
              isMobile: v,
              coverSrc: eH && v ? null : eR,
              sensitiveCover: at,
              onRevealCover: () => an(!1),
            }),
            [ao, ar] = (0, W.useState)(!1),
            [as, al] = (0, W.useState)(!!y),
            [ah, au] = (0, V.A)(!1),
            [am, ap] = (0, W.useState)(!1),
            [ag, af] = (0, W.useState)(
              h && eF ? aK(h) : { primaryUnit: "00", secondaryUnit: "00" },
            ),
            [ax, aj] = (0, W.useState)(!1),
            [av, aw] = (0, V.A)(!1),
            [ab, ay] = (0, W.useState)(
              (null == t ? void 0 : t.vakinhaId) === S.toString(),
            ),
            [aC, aA] = (0, W.useState)([]),
            { campaignsUserGaveSticker: aS } = (0, W.useContext)(eo.A),
            ak = (0, W.useRef)(null),
            [az, aq] = (0, W.useState)(eP),
            [aM, aI] = (0, V.A)(
              (null == t ? void 0 : t.vakinhaId) === S.toString(),
            ),
            [aF, aD] = (0, V.A)("vakinha-pet" === j),
            [aP, aE] = (0, W.useState)("description"),
            [a_, aV] = (0, W.useState)(!!eF && !!h),
            [aO, aG] = (0, W.useState)(null),
            [aH, aR] = (0, W.useState)([]),
            [aN, aB] = (0, W.useState)([]),
            [aW, aX] = (0, W.useState)(0),
            [a3, a6] = (0, W.useState)((null == y ? void 0 : y.id) ? "" : Z),
            [a7, te] = (0, W.useState)([]),
            [ta, tt] = (0, W.useState)(null),
            [ti, to] = (0, V.A)(!1),
            [tr, ts] = (0, W.useState)(""),
            tl =
              e3.name.split(" ").length > 1
                ? ""
                    .concat(e3.name.split(" ")[0], " ")
                    .concat(e3.name.split(" ").pop())
                : e3.name,
            tc = async () => {
              if (a) {
                let {
                  data: { shareUrl: e },
                } = await (0, eU.LV)(S, a);
                a6(k.id !== (null == y ? void 0 : y.id) ? e : Z);
              }
            },
            td = async () => {
              aA(await (0, a0.c)("sticker_offers_shop"));
            },
            th = () => {
              (0, W.startTransition)(() => {
                let e = v ? "campaignTabsMobile" : "campaignTabsDesktop";
                H.XG.scrollTo(e, {
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuart",
                });
              });
            },
            tu = () => {
              (aE("badges"), th());
            },
            tm = async () => {
              if (eh) {
                var e;
                let { data: t } = await (0, eU.tm)(eh, a, u);
                (aG(t),
                  aR([
                    k.avatar,
                    null == (e = t.adoptedUser) ? void 0 : e.avatar,
                  ]));
              }
            };
          ((0, W.useEffect)(() => {
            const media = window.matchMedia("(max-width: 576px)");
            const updateMobile = () => setMobile(media.matches);
            updateMobile();
            media.addEventListener("change", updateMobile);
            return () => media.removeEventListener("change", updateMobile);
          }, []),
            (0, W.useEffect)(() => {
              (td(),
                tc(),
                ts((0, ew._V)()),
                i &&
                  (0, er.$)({
                    eventName: t0.Nr,
                    properties: {
                      arm: i,
                      ineligible_reason: o,
                      vakinha_id: c.id,
                      campaign_slug: c.slug,
                    },
                  }));
            }, []),
            (0, W.useEffect)(() => {
              ah && as && navigator.clipboard.writeText(X);
            }, [ah]),
            (0, W.useEffect)(() => {
              (0, a4.z$)({ id: S, title: P, categoryName: ey });
            }, [S]),
            (0, W.useEffect)(() => {
              let e = new URLSearchParams(window.location.search);
              if (
                (e.has("openModal") && aa(!0),
                "active" === e.get("recurrence") && ar(!0),
                "1" === e.get("sr"))
              ) {
                let e = (0, a2.vY)();
                (0, a2.Wg)({
                  ...e,
                  source: "transacional",
                  utm_campaign: "recuperacao",
                  utm_medium: "sms",
                });
              }
            }, []),
            (0, W.useEffect)(() => {
              let e = [],
                a = () => {
                  "spotlight-ads" ===
                    new URLSearchParams(window.location.search).get(
                      "scrollTo",
                    ) &&
                    [0, 250, 600].forEach((a) => {
                      e.push(
                        window.setTimeout(() => {
                          var e;
                          null == (e = ak.current) ||
                            e.scrollIntoView({
                              behavior: "smooth",
                              block: v ? "start" : "end",
                            });
                        }, a),
                      );
                    });
                };
              return (
                a(),
                T().events.on("routeChangeComplete", a),
                () => {
                  (T().events.off("routeChangeComplete", a),
                    e.forEach((e) => window.clearTimeout(e)));
                }
              );
            }, [v]),
            (0, W.useEffect)(() => {
              C &&
                X &&
                (ap(!0),
                (0, er.$)({ eventName: "show-campaign-share-pix-key-modal" }));
            }, [X]),
            (0, W.useEffect)(() => {
              let e = async () => {
                  if (t) {
                    let { userId: e, vakinhaId: a } = t,
                      { data: n } = await (0, aJ.wb)(e, a);
                    e5(n);
                  }
                },
                a = new (_())("#copy_short_url", {
                  target: () => document.getElementById("short_url"),
                });
              return (e(), () => a.destroy());
            }, []));
          let tp = () => {
            ((0, er.$)({
              eventName: "show-campaign-open-share-modal",
              properties: { campaign_id: S },
            }),
              (0, W.startTransition)(() => {
                aa(!0);
              }));
          };
          ((0, W.useEffect)(() => {
            let e = setTimeout(() => e9(!1), 1e3);
            return () => clearTimeout(e);
          }, [e7]),
            (0, W.useEffect)(() => {
              eh && tm();
            }, [eh]));
          let tg = (e) => e8(null),
            tf = (e) => {
              !e2 &&
                ((0, er.$)({ eventName: "show-campaign-click-image" }),
                ai.isHidden(e) || (ai.openAt(e), e4(!0), ai.trackOpen(e)));
            },
            tx = () => tf(0),
            tv = () => {
              ((0, er.$)({ eventName: "show-campaign-open-coowners-modal" }),
                aw());
            },
            tw = () => {
              (0, er.$)({ eventName: "show-campaign-report-campaign" });
            },
            tb = async (e) => {
              ((e.email = e.email.trim().toLowerCase()),
                (e.payerName = e.payerName.trim()),
                201 ===
                  (
                    await (0, tU.z2)({
                      ...e,
                      vakinhaId: S,
                      amount: 0,
                      paymentMethod: "PIX",
                    })
                  ).status && al(!0));
            };
          ((0, W.useEffect)(() => {
            if (h) {
              let e = setInterval(
                () => {
                  af(aK(h));
                },
                "0m" === ag.primaryUnit ? 1e3 : 6e4,
              );
              return () => clearInterval(e);
            }
            return () => {};
          }, [ag.primaryUnit, h]),
            (0, W.useEffect)(() => {
              a &&
                (async () => {
                  await (0, aJ.KW)(S, a);
                })();
            }, [S, a]),
            (0, W.useEffect)(() => {
              let e = async () => {
                te(await (0, a0.c)("showOffer"));
                let e = setTimeout(() => {
                  aj(!0);
                }, 3e3);
                return () => clearTimeout(e);
              };
              return (
                eG && !I.A.get("stickers-offers-dismiss-".concat(S)) && e(),
                () => {}
              );
            }, []));
          let ty = async (e) => {
              (aq((a) => a + e),
                (0, er.$)({ eventName: "show-campaign-give-sticker" }));
            },
            tC = async () => {
              if (4712837 !== S) {
                let { data: e } = await (0, eU.Br)(S, a);
                tt(e);
              }
            };
          (0, W.useEffect)(() => {
            "campaignAwarded" !== aP || ta || tC();
          }, [aP]);
          let tS = () => {
              (0, W.startTransition)(() => {
                to();
              });
            },
            tk = () => {
              (I.A.remove("indication", { path: "/vaquinha/".concat(F) }),
                ay(!1));
            },
            tz =
              (null == y ? void 0 : y.id) === c.user.id
                ? "Ol\xe1! Criei essa vaquinha “".concat(
                    P,
                    "” e agrade\xe7o muito se puder me ajudar, doando ou mesmo divulgando para seus amigos e familiares!",
                  )
                : "Ol\xe1! A vaquinha “".concat(
                    P,
                    "” precisa do seu apoio. Contribua fazendo uma doa\xe7\xe3o ou compartilhando com seus contatos. Toda ajuda faz a diferen\xe7a!",
                  ),
            tq =
              eM &&
              (0, z.jsx)($.wn, {
                paddingDesktop: [4, 0, 0],
                paddingMobile: [0],
                children: (0, z.jsxs)($.o5, {
                  fontFamily: K.a,
                  fontSizeDesktop: 14,
                  fontSizeMobile: 12,
                  children: [
                    eM.length > 240
                      ? "".concat(eM, "... ")
                      : "".concat(eM, " "),
                    (0, z.jsx)($.o5, {
                      as: "span",
                      fontFamily: K.a,
                      fontSizeDesktop: 14,
                      fontSizeMobile: 12,
                      color: "blue400",
                      weight: 700,
                      onClick: () => {
                        ((0, er.$)({
                          eventName: "show-campaign-open-description-tab",
                        }),
                          aE("description"),
                          th());
                      },
                      children: "ver tudo",
                    }),
                  ],
                }),
              }),
            tM = (0, z.jsx)(aU.G8, {
              flex: !0,
              justifyContent: "center",
              children: (0, z.jsxs)(G(), {
                "data-clipboard-text": X,
                onSuccess: () => {
                  ((0, ep.$s)("Interactions", "[Campaign Page] Pix Key Copy"),
                    y || au());
                },
                "data-cy": "copy-pix-key-bottom",
                children: [
                  (0, z.jsx)($.o5, {
                    fontFamily: K.f,
                    fontSize: 14,
                    textDecoration: "underline",
                    weight: 700,
                    children: "Copiar",
                  }),
                  (0, z.jsx)(ex.A, { width: 25, height: 25 }),
                ],
              }),
            }),
            tI = (0, z.jsx)(ez, {
              isLarger: !1,
              children: (0, z.jsx)(ez.InfoDescription, {
                variant: "light",
                noBorder: !0,
                children: (0, z.jsxs)($.wn, {
                  flex: v,
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: [16],
                  children: [
                    (0, z.jsxs)($.wn, {
                      flex: !0,
                      justifyContent: "center",
                      alignItems: "center",
                      paddingMobile: [0, 0, 16],
                      paddingDesktop: [0],
                      children: [
                        (0, z.jsx)($.wn, {
                          padding: [0, 16, 0, 0],
                          children: (0, z.jsx)(ea.A, { width: 25, height: 25 }),
                        }),
                        (0, z.jsx)($.o5, {
                          fontFamily: K.f,
                          children: (0, O.Ay)(
                            "Voc\xea tamb\xe9m pode <strong>contribuir via Pix usando a chave:</strong> ".concat(
                              X,
                            ),
                          ),
                        }),
                      ],
                    }),
                    y
                      ? (0, z.jsx)(t6, {
                          open: e7,
                          content: "Chave copiada!",
                          children: tM,
                        })
                      : tM,
                  ],
                }),
              }),
            }),
            tF =
              eH && v
                ? (0, z.jsx)(aU.w2, {})
                : (0, z.jsx)(aU.RE, {
                    src: 6183652 === S ? carouselImage : eR,
                    alt: P,
                    decoding: "sync",
                    loading: "eager",
                    fetchPriority: "high",
                  }),
            tT =
              "active" === Y &&
              (0, z.jsx)(aU.Me, {
                children: (0, z.jsx)(ed, {
                  vakinhaId: c.id,
                  freeStickersClaimState: r,
                  children: (0, z.jsx)(t$.A, {
                    slug: F,
                    stickerGiven: aS.includes(F),
                    products: aC,
                    onGiveSticker: ty,
                    onStickerClick: () => {
                      (0, er.$)({
                        eventName: "show-campaign-sticker-button-click",
                        properties: { vakinha_id: c.id },
                      });
                    },
                    freeStickersGuestClaim: null == r ? void 0 : r.guestClaim,
                    stickerModalSource: { origin: "campaign_show" },
                    isCampaignOwner: eG,
                    campaignTitle: P,
                    campaignStickersCount: az,
                  }),
                }),
              });
          return (0, z.jsxs)(z.Fragment, {
            children: [
              (0, z.jsxs)(t3, {
                title: ek ? "".concat(P, " para ").concat(ek) : P,
                subtitle: "Organizada por ".concat(c.user.name),
                metaDescription: "".concat(e$, " ").concat(eK),
                canonicalUrlPath: "/vaquinha/".concat(F),
                redirectRoute: eV,
                grayBackground: !0,
                children: [
                  (0, z.jsxs)(M(), {
                    children: [
                      !eH &&
                        (0, z.jsx)("link", {
                          rel: "preload",
                          fetchPriority: "high",
                          href: v ? E.mobile : E.desktop,
                          as: "image",
                        }),
                      (0, z.jsx)("meta", {
                        name: "robots",
                        content: "index, follow, max-image-preview:large",
                      }),
                      (0, z.jsx)("meta", {
                        property: "fb:app_id",
                        content: "".concat("384822005017520"),
                      }),
                      (0, z.jsx)(
                        "meta",
                        { property: "og:type", content: "website" },
                        "og:type",
                      ),
                      (0, z.jsx)(
                        "meta",
                        { property: "og:url", content: eQ },
                        "og:url",
                      ),
                      (0, z.jsx)(
                        "meta",
                        { property: "og:title", content: eZ },
                        "og:title",
                      ),
                      (0, z.jsx)(
                        "meta",
                        { property: "og:description", content: eJ },
                        "og:description",
                      ),
                      (0, z.jsx)(
                        "meta",
                        { property: "og:image", content: eX },
                        "og:image",
                      ),
                      (0, z.jsx)(
                        "meta",
                        { property: "og:image:secure_url", content: eX },
                        "og:image:secure_url",
                      ),
                      (0, z.jsx)(
                        "meta",
                        { property: "og:image:width", content: "1200" },
                        "og:image:width",
                      ),
                      (0, z.jsx)(
                        "meta",
                        { property: "og:image:height", content: "630" },
                        "og:image:height",
                      ),
                      (0, z.jsx)(
                        "meta",
                        { property: "og:image:alt", content: eZ },
                        "og:image:alt",
                      ),
                      (0, z.jsx)(
                        "meta",
                        { property: "og:locale", content: "pt_BR" },
                        "og:locale",
                      ),
                      (0, z.jsx)(
                        "meta",
                        {
                          property: "og:site_name",
                          content: "Vaquinhas online | Vakinha.com.br",
                        },
                        "og:site_name",
                      ),
                      (0, z.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image",
                      }),
                      (0, z.jsx)("meta", {
                        name: "twitter:title",
                        content: eZ,
                      }),
                      (0, z.jsx)("meta", {
                        name: "twitter:description",
                        content: eJ,
                      }),
                      (0, z.jsx)("meta", {
                        name: "twitter:image",
                        content: eX,
                      }),
                      (0, z.jsx)("meta", {
                        name: "twitter:image:alt",
                        content: eZ,
                      }),
                      (0, z.jsx)(
                        "script",
                        {
                          type: "application/ld+json",
                          dangerouslySetInnerHTML: { __html: (0, t4.n)(g) },
                        },
                        "articleMicrodata",
                      ),
                      (0, z.jsx)(
                        "script",
                        {
                          type: "application/ld+json",
                          dangerouslySetInnerHTML: { __html: (0, t4.n)(f) },
                        },
                        "donateActionMicrodata",
                      ),
                      (0, z.jsx)(
                        "script",
                        {
                          type: "application/ld+json",
                          dangerouslySetInnerHTML: { __html: (0, t4.n)(x) },
                        },
                        "faqMicrodata",
                      ),
                    ],
                  }),
                  (0, z.jsxs)(aU.LN, {
                    children: [
                      eF &&
                        !v &&
                        (0, z.jsx)($.wn, {
                          padding: [0, 0, 12],
                          children: (0, z.jsx)(tA, { timeRemaining: ag }),
                        }),
                      ao &&
                        (0, z.jsx)($.wn, {
                          padding: [16, 0],
                          children: (0, z.jsx)(B.Row, {
                            children: (0, z.jsx)(B.Col, {
                              children: (0, z.jsx)(aQ.A, {
                                variant: ao ? "success" : "info",
                                title: ao
                                  ? "Recorr\xeancia ativa com sucesso na vaquinha!"
                                  : "Voc\xea est\xe1 em uma vaquinha privada",
                                closeable: !0,
                                children:
                                  !ao &&
                                  "Acess\xedvel com senha ou por usu\xe1rio criador da vaquinha.",
                              }),
                            }),
                          }),
                        }),
                      (0, z.jsxs)(B.Row, {
                        children: [
                          (0, z.jsxs)(B.Col, {
                            lg: 8,
                            children: [
                              eG &&
                                (0, z.jsx)($.wn, {
                                  paddingDesktop: [0, 0, 16],
                                  paddingMobile: [16, 0, 4],
                                  children: (0, z.jsx)(t1.A, {
                                    toastData: {
                                      campaignId: c.id,
                                      vakinhaSlug: F,
                                      spotlightsStatus: p,
                                      page: "campaign-show",
                                    },
                                  }),
                                }),
                              (0, z.jsx)(eu, { freeStickersClaimState: r }),
                              (0, z.jsxs)(aU.ir, {
                                flex: !0,
                                flexDirection: "column",
                                mobileRowGap: 16,
                                desktopRowGap: 24,
                                backgroundColor: "white",
                                padding: [16],
                                borderRadius: 8,
                                children: [
                                  (0, z.jsxs)($.wn, {
                                    cursor: at ? "auto" : "pointer",
                                    children: [
                                      ai.showGallery
                                        ? (0, z.jsxs)(aU.mS, {
                                            children: [
                                              (0, z.jsx)(
                                                t7,
                                                {
                                                  title: P,
                                                  slides: ai.slides,
                                                  onReveal: ai.revealSlide,
                                                  onOpen: tf,
                                                  onSlideChange:
                                                    ai.onSlideChange,
                                                },
                                                S,
                                              ),
                                              tT,
                                            ],
                                          })
                                        : (0, z.jsxs)(tB.A, {
                                            sensitiveContent: at,
                                            setShowContent: an,
                                            variant: "show",
                                            children: [
                                              (0, z.jsx)(aU.xW, {
                                                className:
                                                  6183652 === S
                                                    ? "campaign-carousel"
                                                    : void 0,
                                                onClick: tx,
                                                role: "button",
                                                tabIndex: 0,
                                                onKeyDown: tx,
                                                children: tF,
                                              }),
                                              tT,
                                            ],
                                          }),
                                      (0, z.jsx)(t8, {
                                        isOpen: e2,
                                        onClose: () => e4(!1),
                                        images:
                                          6183652 === S && !ai.showGallery
                                            ? [{ url: carouselImage }]
                                            : ai.lightboxImages,
                                        zoomable: ai.showGallery,
                                        index: ai.lightboxIndex,
                                        onIndexChange: ai.setLightboxIndex,
                                      }),
                                    ],
                                  }),
                                  a_ &&
                                    (0, z.jsx)($.wn, {
                                      children: (0, z.jsx)(tA, {
                                        timeRemaining: ag,
                                        shadow: !0,
                                        onClose: () => {
                                          aV(!1);
                                        },
                                      }),
                                    }),
                                  (0, z.jsxs)($.wn, {
                                    flex: !0,
                                    flexDirection: "column",
                                    rowGap: 8,
                                    children: [
                                      (0, z.jsxs)($.wn, {
                                        flex: !0,
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        children: [
                                          (0, z.jsx)($.o5, {
                                            fontFamily: K.f,
                                            fontSizeDesktop: 14,
                                            fontSizeMobile: 10,
                                            color: "gray350",
                                            textTransform: "uppercase",
                                            children: ey,
                                          }),
                                          eW &&
                                            (0, z.jsxs)($.wn, {
                                              flex: !0,
                                              columnGap: 4,
                                              alignItems: "center",
                                              children: [
                                                (0, z.jsx)($.hh, {
                                                  size: 18,
                                                  color: "gray350",
                                                  children: (0, z.jsx)(R.A, {}),
                                                }),
                                                (0, z.jsx)($.o5, {
                                                  fontFamily: K.f,
                                                  fontSizeDesktop: 14,
                                                  fontSizeMobile: 10,
                                                  color: "gray350",
                                                  textTransform: "uppercase",
                                                  children: eW,
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, z.jsx)($.o5, {
                                        fontFamily: K.a,
                                        fontSizeDesktop: 32,
                                        fontSizeMobile: 24,
                                        weight: 700,
                                        color: "gray600",
                                        as: "h1",
                                        children: P,
                                      }),
                                      (0, z.jsx)($.o5, {
                                        fontSizeDesktop: 16,
                                        fontSizeMobile: 14,
                                        fontFamily: K.f,
                                        weight: 700,
                                        children: "ID: ".concat(S),
                                      }),
                                      (0, z.jsx)($.wn, {
                                        flex: !0,
                                        alignItems: "center",
                                        padding: [8, 0, 0],
                                        children: !v && tq,
                                      }),
                                    ],
                                  }),
                                  !v &&
                                    (0, z.jsx)($.wn, {
                                      flex: !0,
                                      justifyContent: "space-between",
                                      fluid: !0,
                                      children:
                                        d &&
                                        d.length > 0 &&
                                        (0, z.jsx)(eD, {
                                          badges: d,
                                          openBadgesTab: tu,
                                        }),
                                    }),
                                ],
                              }),
                              !v &&
                                (0, z.jsxs)(z.Fragment, {
                                  children: [
                                    (0, z.jsx)(H.Hg, {
                                      name: "campaignTabsDesktop",
                                      children: (0, z.jsx)(aL, {
                                        distinctId: tr,
                                        campaignId: S,
                                        campaignTitle: P,
                                        slug: F,
                                        campaignStatus: Y,
                                        campaignCreatedAt: el,
                                        description: eb,
                                        video: L,
                                        status: Y,
                                        defaultTab: e6,
                                        onTabChange: tg,
                                        pixKey: X,
                                        user: k,
                                        adoptedCampaign: aO,
                                        loggedUser: y,
                                        isCampaignOwner: eG,
                                        rewardDescription: eF,
                                        endingDate: ej,
                                        luckyNumberInformations: ta,
                                        badges: d,
                                        activeTab: aP,
                                        setActiveTab: aE,
                                        initialNews: aN,
                                        initialTotalNews: aW,
                                        showNewsTotalCount: !1,
                                        toggleOpenPixKeyModal: au,
                                        faq: tK(c),
                                      }),
                                    }),
                                    X &&
                                      "closed" !== Y &&
                                      (0, z.jsx)($.wn, {
                                        padding: [0, 0, 16],
                                        children: tI,
                                      }),
                                    !!t && (0, z.jsx)(t9, { url: a3 }),
                                  ],
                                }),
                            ],
                          }),
                          (0, z.jsx)(B.Col, {
                            lg: 4,
                            children: (0, z.jsxs)(aU.y4, {
                              backgroundColor: "white",
                              paddingDesktop: [0],
                              paddingMobile: [0, 0, 16],
                              borderRadius: 8,
                              children: [
                                (eG || es) &&
                                  (0, z.jsx)(tN, {
                                    id: S,
                                    slug: F,
                                    pixKey: X,
                                    status: Y,
                                    isCoOwner: es,
                                    managerCoOwner: eE,
                                    closureRequest: eS,
                                    distinctId: tr,
                                    missionsExperiment: c.missionsExperiment,
                                  }),
                                (0, z.jsxs)($.wn, {
                                  flex: !0,
                                  flexDirection: "column",
                                  rowGap: 16,
                                  paddingDesktop: [16],
                                  paddingMobile: [0, 16],
                                  children: [
                                    v &&
                                      (0, z.jsxs)(z.Fragment, {
                                        children: [
                                          tq,
                                          (0, z.jsx)($.cG, {
                                            color: "gray200",
                                          }),
                                          d &&
                                            d.length > 0 &&
                                            (0, z.jsx)(eD, {
                                              badges: d,
                                              openBadgesTab: tu,
                                            }),
                                        ],
                                      }),
                                    (0, z.jsxs)($.wn, {
                                      flex: !0,
                                      flexDirection: "column",
                                      rowGap: 32,
                                      children: [
                                        (0, z.jsxs)($.wn, {
                                          flex: !0,
                                          flexDirection: "column",
                                          rowGap: 24,
                                          children: [
                                            (0, z.jsx)(tn, {
                                              pledged: m,
                                              goal: q,
                                              progress: eT,
                                            }),
                                            (0, z.jsxs)($.wn, {
                                              backgroundColor: "green100",
                                              padding: [12],
                                              borderRadius: 8,
                                              flex: !0,
                                              flexDirection: "column",
                                              rowGap: 8,
                                              children: [
                                                (0, z.jsxs)($.wn, {
                                                  flex: !0,
                                                  alignItems: "center",
                                                  justifyContent:
                                                    "space-between",
                                                  children: [
                                                    (0, z.jsxs)($.wn, {
                                                      flex: !0,
                                                      alignItems: "center",
                                                      justifyContent:
                                                        "space-between",
                                                      columnGap: 4,
                                                      children: [
                                                        (0, z.jsx)($.o5, {
                                                          fontFamily: K.f,
                                                          fontSizeDesktop: 14,
                                                          fontSizeMobile: 12,
                                                          as: "span",
                                                          children: az
                                                            ? "Cora\xe7\xf5es Recebidos"
                                                            : "D\xea o primeiro cora\xe7\xe3o",
                                                        }),
                                                        (0, z.jsx)(ac.QY, {
                                                          width: 16,
                                                          height: 16,
                                                          id: "heart",
                                                        }),
                                                      ],
                                                    }),
                                                    az > 0
                                                      ? (0, z.jsx)($.o5, {
                                                          fontFamily: K.f,
                                                          fontSizeDesktop: 14,
                                                          fontSizeMobile: 12,
                                                          as: "span",
                                                          weight: 700,
                                                          children: az,
                                                        })
                                                      : (0, z.jsx)(U.A, {
                                                          href: "/loja/adesivo-digital?reference=".concat(
                                                            S,
                                                            "&utm_internal_source=tooltip-heart-show-campaign",
                                                          ),
                                                          onClick: () => {
                                                            (0, er.$)({
                                                              eventName:
                                                                "show-campaign-buy-stickers",
                                                            });
                                                          },
                                                          children: (0, z.jsx)(
                                                            $.o5,
                                                            {
                                                              fontFamily: K.f,
                                                              fontSizeDesktop: 14,
                                                              fontSizeMobile: 12,
                                                              as: "span",
                                                              weight: 700,
                                                              color: "blue300",
                                                              textDecoration:
                                                                "underline",
                                                              children:
                                                                "Comprar",
                                                            },
                                                          ),
                                                        }),
                                                  ],
                                                }),
                                                (0, z.jsxs)($.wn, {
                                                  flex: !0,
                                                  alignItems: "center",
                                                  justifyContent:
                                                    "space-between",
                                                  children: [
                                                    (0, z.jsx)($.o5, {
                                                      fontFamily: K.f,
                                                      fontSizeDesktop: 14,
                                                      fontSizeMobile: 12,
                                                      as: "span",
                                                      children: "Apoiadores",
                                                    }),
                                                    (0, z.jsx)($.o5, {
                                                      fontFamily: K.f,
                                                      fontSizeDesktop: 14,
                                                      fontSizeMobile: 12,
                                                      as: "span",
                                                      weight: 700,
                                                      children: ec,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, z.jsx)(tj, {
                                          status: Y,
                                          slug: F,
                                          dataCy: "campaign-toolbar",
                                          topDonors: b,
                                          loggedUser: y,
                                          totalAmountUser: A,
                                          rewardCampaign: !!eF,
                                          campaignType: eC,
                                          openShareModal: tp,
                                          distinctId: tr,
                                          campaignId: S,
                                          suggestedAmountsVariant: s,
                                        }),
                                      ],
                                    }),
                                    !v &&
                                      (0, z.jsxs)(z.Fragment, {
                                        children: [
                                          (0, z.jsx)($.cG, {
                                            color: "gray200",
                                          }),
                                          (0, z.jsx)(aZ, {}),
                                          (0, z.jsx)($.cG, {
                                            color: "gray200",
                                          }),
                                        ],
                                      }),
                                    (0, z.jsxs)($.wn, {
                                      padding: [12],
                                      backgroundColor: "gray100",
                                      borderRadius: 8,
                                      children: [
                                        !ek &&
                                          !aO &&
                                          "active" === k.status &&
                                          (0, z.jsx)(eN, {
                                            id: k.id,
                                            slug: k.slug,
                                            ong: k.ong,
                                            name: k.name,
                                            photo: k.avatar,
                                            verified: k.verified,
                                            createdAt: k.createdAt,
                                            hasAcceptedTerms:
                                              k.hasAcceptedTerms,
                                          }),
                                        !ek &&
                                          aO &&
                                          (0, z.jsxs)($.wn, {
                                            flex: !0,
                                            columnGap: 4,
                                            children: [
                                              (0, z.jsx)(aU.J9, {
                                                flex: !0,
                                                alignItems: "center",
                                                children: (0, z.jsx)(eq.A, {
                                                  avatars: aH,
                                                  numberOfAvatars: 2,
                                                  darker: !0,
                                                  size: "ml",
                                                  spaced: !0,
                                                }),
                                              }),
                                              (0, z.jsx)(aU.gj, {
                                                children: (0, z.jsx)($.o5, {
                                                  fontFamily: K.a,
                                                  fontSize: 12,
                                                  color: "gray600",
                                                  children: (0, O.Ay)(
                                                    "<strong>"
                                                      .concat(
                                                        k.name,
                                                        "</strong> criou essa vaquinha para beneficiar a(o) <strong>",
                                                      )
                                                      .concat(
                                                        null == aO
                                                          ? void 0
                                                          : aO.user.name,
                                                        "</strong>",
                                                      ),
                                                  ),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ek &&
                                          !aO &&
                                          (0, z.jsxs)($.wn, {
                                            flex: !0,
                                            flexDirection: "column",
                                            rowGap: 12,
                                            children: [
                                              (0, z.jsxs)($.o5, {
                                                fontFamily: K.a,
                                                fontSize: 10,
                                                children: [
                                                  (0, z.jsxs)("strong", {
                                                    children: [
                                                      "Vaquinha em benef\xedcio de ",
                                                      ek,
                                                    ],
                                                  }),
                                                  ", criada por:",
                                                ],
                                              }),
                                              (0, z.jsx)(eN, {
                                                id: k.id,
                                                slug: k.slug,
                                                ong: k.ong,
                                                name: k.name,
                                                photo: k.avatar,
                                                verified: k.verified,
                                                createdAt: k.createdAt,
                                                hasAcceptedTerms:
                                                  k.hasAcceptedTerms,
                                              }),
                                            ],
                                          }),
                                        w &&
                                          w.length > 0 &&
                                          (0, z.jsxs)(z.Fragment, {
                                            children: [
                                              (0, z.jsx)($.cG, {
                                                color: "gray250",
                                                margin: [16, 0],
                                              }),
                                              (0, z.jsx)($.wn, {
                                                onClick: tv,
                                                cursor: "pointer",
                                                children: (0, z.jsxs)($.wn, {
                                                  flex: !0,
                                                  flexDirection: "column",
                                                  rowGap: 8,
                                                  backgroundColor: "gray100",
                                                  borderRadius: 8,
                                                  children: [
                                                    (0, z.jsx)($.o5, {
                                                      fontFamily: K.f,
                                                      fontSize: 12,
                                                      color: "gray600",
                                                      weight: 700,
                                                      children:
                                                        "Esta vaquinha possui uma equipe",
                                                    }),
                                                    (0, z.jsxs)($.wn, {
                                                      flex: !0,
                                                      columnGap: 8,
                                                      alignItems: "center",
                                                      children: [
                                                        (0, z.jsx)(eq.A, {
                                                          avatars: eB,
                                                          numberOfAvatars: 10,
                                                          size: "sm",
                                                          darker: !0,
                                                        }),
                                                        (0, z.jsx)($.o5, {
                                                          fontFamily: K.a,
                                                          fontSize: 10,
                                                          weight: 700,
                                                          color: "blue400",
                                                          textDecoration:
                                                            "underline",
                                                          children:
                                                            "Ver equipe",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, z.jsx)($.o5, {
                                                      fontFamily: K.f,
                                                      fontSize: 12,
                                                      color: "gray400",
                                                      children:
                                                        "Os integrantes da equipe auxiliam ".concat(
                                                          k.name,
                                                          " a divulgar a vaquinha, postar atualiza\xe7\xf5es e agradecer doadores.",
                                                        ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                aM &&
                                  !v &&
                                  (0, z.jsx)(a8, {
                                    indicator: e3,
                                    toggleIndicationContent: aI,
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      v &&
                        (0, z.jsxs)(z.Fragment, {
                          children: [
                            aM &&
                              (0, z.jsx)(a8, {
                                indicator: e3,
                                toggleIndicationContent: aI,
                              }),
                            (0, z.jsx)(H.Hg, {
                              name: "campaignTabsMobile",
                              children: (0, z.jsx)(aL, {
                                campaignId: S,
                                campaignTitle: P,
                                slug: F,
                                campaignStatus: Y,
                                campaignCreatedAt: el,
                                description: eb,
                                video: L,
                                status: Y,
                                defaultTab: e6,
                                onTabChange: tg,
                                pixKey: X,
                                user: k,
                                adoptedCampaign: aO,
                                loggedUser: y,
                                isCampaignOwner: eG,
                                rewardDescription: eF,
                                endingDate: ej,
                                luckyNumberInformations: ta,
                                badges: d,
                                activeTab: aP,
                                setActiveTab: aE,
                                initialNews: aN,
                                initialTotalNews: aW,
                                showNewsTotalCount: !1,
                                toggleOpenPixKeyModal: au,
                                faq: tK(c),
                              }),
                            }),
                            X &&
                              "closed" !== Y &&
                              (0, z.jsx)($.wn, {
                                padding: [0, 0, 16],
                                children: (0, z.jsx)(B.Row, {
                                  children: (0, z.jsx)(B.Col, {
                                    lg: 8,
                                    children: tI,
                                  }),
                                }),
                              }),
                            (0, z.jsx)(B.Row, {
                              id: "content-section",
                              children: (0, z.jsx)(B.Col, {
                                lg: 8,
                                children: !!t && (0, z.jsx)(t9, { url: a3 }),
                              }),
                            }),
                            eG &&
                              (0, z.jsx)(aU.vm, {
                                backgroundColor: "white",
                                padding: [24, 16],
                                children: (0, z.jsx)(aU.yB, {
                                  ref: ak,
                                  children: (0, z.jsx)(J, {
                                    vakinhaId: c.id,
                                    slug: c.slug,
                                  }),
                                }),
                              }),
                          ],
                        }),
                    ],
                  }),
                  (0, z.jsxs)(B.Container, {
                    children: [
                      (0, z.jsxs)($.dW, {
                        isOpen: ah,
                        onClose: au,
                        padding: 32,
                        width: 600,
                        children: [
                          (0, z.jsx)($.wn, {
                            flex: !0,
                            flexDirection: "column",
                            children: (0, z.jsx)($.wn, {
                              flex: !0,
                              justifyContent: "center",
                              children: (0, z.jsx)(ac.SR, {}, "pixKeyRounded"),
                            }),
                          }),
                          (0, z.jsx)($.wn, {
                            padding: [32, 0],
                            children: (0, z.jsx)($.o5, {
                              fontFamily: K.f,
                              fontSize: 20,
                              align: "center",
                              weight: 700,
                              children: as
                                ? "Dados enviados!"
                                : "Chave Pix copiada",
                            }),
                          }),
                          (0, z.jsx)($.wn, {
                            padding: [0, 0, 32],
                            children: (0, z.jsx)($.o5, {
                              fontFamily: K.f,
                              fontSize: 14,
                              align: "center",
                              children: as
                                ? (0, O.Ay)(
                                    "<strong>Fa\xe7a sua doa\xe7\xe3o, de R$ 25,00 ou mais,</strong> usando a chave Pix para garantir os n\xfameros!",
                                  )
                                : (0, O.Ay)(
                                    "<strong>Para concorrer a 15 MIL REAIS</strong> ap\xf3s doar, informe seus dados abaixo:",
                                  ),
                            }),
                          }),
                          as
                            ? (0, z.jsx)(aY.A, { url: X })
                            : (0, z.jsxs)($.lV, {
                                onSubmit: tb,
                                defaultValues: {
                                  email: "",
                                  payerDocument: "",
                                  payerName: "",
                                },
                                validationSchema: en.Ik().shape({
                                  payerName: en
                                    .Yj()
                                    .required(
                                      "Nome completo \xe9 obrigat\xf3rio",
                                    ),
                                  email: en
                                    .Yj()
                                    .trim()
                                    .required("E-mail \xe9 obrigat\xf3rio")
                                    .matches(ei.Rp, "E-mail inv\xe1lido"),
                                  payerDocument: en
                                    .Yj()
                                    .required("CPF \xe9 obrigat\xf3rio")
                                    .test(
                                      "cpf-validation",
                                      "CPF inv\xe1lido",
                                      (e) => (0, et.isValid)(e),
                                    ),
                                }),
                                children: [
                                  (0, z.jsx)($.lV.TextField, {
                                    name: "payerName",
                                    label: "Nome completo",
                                    placeholder: "Insira seu nome completo",
                                  }),
                                  (0, z.jsx)($.lV.TextField, {
                                    name: "email",
                                    label: "Email",
                                    placeholder: "Insira seu e-mail",
                                  }),
                                  (0, z.jsx)($.lV.TextField, {
                                    name: "payerDocument",
                                    type: "tel",
                                    label: "CPF",
                                    placeholder: "Insira seu CPF",
                                    mask: "cpf",
                                  }),
                                  (0, z.jsx)($.wn, {
                                    padding: [16, 0],
                                    children: (0, z.jsx)($.$n, {
                                      variant: "vakinha",
                                      type: "submit",
                                      block: !0,
                                      children: (0, z.jsx)($.o5, {
                                        fontFamily: K.a,
                                        fontSize: 16,
                                        weight: 700,
                                        color: "white",
                                        children: "Enviar",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                          as &&
                            (0, z.jsx)($.wn, {
                              padding: [32, 0, 0],
                              children: (0, z.jsx)($.o5, {
                                fontFamily: K.f,
                                fontSize: 14,
                                align: "center",
                                color: "gray350",
                                children:
                                  "Caso j\xe1 tenha doado logo antes de enviar seus dados, aguarde que enviaremos seus n\xfameros em breve",
                              }),
                            }),
                        ],
                      }),
                      (0, z.jsxs)($.dW, {
                        padding: 32,
                        width: 600,
                        isOpen: am,
                        onClose: () => {
                          ap(!1);
                        },
                        children: [
                          (0, z.jsx)($.wn, {
                            flex: !0,
                            flexDirection: "column",
                            children: (0, z.jsx)($.wn, {
                              flex: !0,
                              justifyContent: "center",
                              children: (0, z.jsx)(ac.SR, {}, "pixKeyRounded"),
                            }),
                          }),
                          (0, z.jsx)($.wn, {
                            padding: [16, 0],
                            children: (0, z.jsx)($.o5, {
                              fontFamily: K.f,
                              fontSize: 20,
                              align: "center",
                              weight: 700,
                              children:
                                (null == y ? void 0 : y.id) === k.id
                                  ? "Compartilhe sua chave Pix!"
                                  : "Doe usando Pix",
                            }),
                          }),
                          (0, z.jsx)($.wn, {
                            padding: [0, 0, 24],
                            children: (0, z.jsx)($.o5, {
                              fontFamily: K.f,
                              children:
                                (null == y ? void 0 : y.id) === k.id
                                  ? (0, O.Ay)(
                                      "<strong>Copie a chave Pix e divulgue</strong> nas suas redes sociais, e-mails e onde mais voc\xea quiser. Quanto mais visibilidade, maior ser\xe1 o alcance de potenciais doadores.",
                                    )
                                  : (0, O.Ay)(
                                      "<strong>Copie a chave Pix</strong> exclusiva da vaquinha e transfira o valor via Pix, usando o <strong>aplicativo do seu banco.</strong>",
                                    ),
                            }),
                          }),
                          (0, z.jsx)(aY.A, {
                            url: X,
                            content: "Chave Pix copiada!",
                          }),
                        ],
                      }),
                      n && (0, z.jsx)(eO, { token: n, slug: F }),
                      (0, z.jsx)(tZ.A, {
                        user: k,
                        campaign: c,
                        isMobile: v,
                        distinctId: tr,
                        isOpenModalSocialMedia: ae,
                        setIsOpenModalSocialMedia: aa,
                        shareDescription: tz,
                        screen: "campaign-show",
                      }),
                      (0, z.jsxs)($.dW, {
                        padding: 32,
                        isOpen: av,
                        onClose: tv,
                        width: 600,
                        children: [
                          (0, z.jsx)($.wn, {
                            flex: !0,
                            justifyContent: "center",
                            padding: [16, 0, 0],
                            children: (0, z.jsx)(a5, { width: 52 }),
                          }),
                          (0, z.jsxs)($.wn, {
                            flex: !0,
                            flexDirection: "column",
                            rowGap: 16,
                            padding: [16, 0, 24],
                            children: [
                              (0, z.jsx)($.o5, {
                                fontFamily: K.f,
                                fontSize: 16,
                                weight: 700,
                                align: "center",
                                color: "gray600",
                                children: "Equipe da vaquinha",
                              }),
                              (0, z.jsx)($.o5, {
                                fontFamily: K.f,
                                fontSize: 16,
                                color: "gray600",
                                children:
                                  "Os integrantes da equipe auxiliam ".concat(
                                    k.name,
                                    " a divulgar a vaquinha, postar atualiza\xe7\xf5es e agradecer doadores.",
                                  ),
                              }),
                            ],
                          }),
                          (0, z.jsx)(aU.pH, {
                            children:
                              w.length > 0 &&
                              w.map((e) =>
                                (0, z.jsxs)(
                                  $.wn,
                                  {
                                    flex: !0,
                                    alignItems: "center",
                                    padding: [0, 0, 12],
                                    children: [
                                      (0, z.jsx)(ee.A, {
                                        src: e.avatar,
                                        altImage: e.name,
                                        width: 40,
                                        height: 40,
                                        lazyLoad: !0,
                                      }),
                                      (0, z.jsxs)($.wn, {
                                        padding: [0, 0, 0, 8],
                                        children: [
                                          (0, z.jsx)($.o5, {
                                            fontSize: 14,
                                            fontFamily: K.a,
                                            color: "gray600",
                                            weight: 700,
                                            children: e.name,
                                          }),
                                          (0, z.jsx)($.o5, {
                                            fontSize: 12,
                                            fontFamily: K.f,
                                            color: "gray400",
                                            children: "Integrante da equipe",
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.name,
                                ),
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  !v &&
                    eG &&
                    (0, z.jsx)(J, {
                      vakinhaId: c.id,
                      slug: c.slug,
                    }),
                ],
              }),
              ax &&
                "closed" !== Y &&
                (0, z.jsx)(a$, {
                  offers: a7,
                  openOffers: ax,
                  closeOffers: () => {
                    ((0, ep.$s)("Interactions", "stickers-dismiss-show"),
                      I.A.set("stickers-offers-dismiss-".concat(S), "true"),
                      aj(!1));
                  },
                  campaignId: S,
                  userName: k.name,
                }),
              (null == t ? void 0 : t.vakinhaId) === S.toString() &&
                (0, z.jsx)($.dW, {
                  padding: 16,
                  isOpen: ab,
                  onClose: tk,
                  width: 440,
                  children: (0, z.jsxs)($.wn, {
                    flex: !0,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    rowGap: 16,
                    padding: [16, 0, 0],
                    children: [
                      (0, z.jsx)(ee.A, {
                        src: e3.avatar,
                        lazyLoad: !0,
                        altImage: e3.name,
                        width: 52,
                        height: 52,
                      }),
                      (0, z.jsx)($.o5, {
                        fontFamily: K.f,
                        fontSize: 16,
                        align: "center",
                        color: "gray600",
                        children: y
                          ? (0, O.Ay)(
                              "Oi, "
                                .concat(y.name.split(" ")[0], "! <strong>")
                                .concat(
                                  tl,
                                  "</strong> compartilhou essa vaquinha com voc\xea. Que tal dar uma olhada?",
                                ),
                            )
                          : (0, O.Ay)(
                              "<strong>".concat(
                                tl,
                                "</strong> compartilhou essa vaquinha com voc\xea. Que tal dar uma olhada?",
                              ),
                            ),
                      }),
                      (0, z.jsx)($.o5, {
                        fontFamily: K.f,
                        fontSize: 16,
                        color: "gray600",
                        align: "center",
                        weight: 700,
                        children: "Sua ajuda pode fazer a diferen\xe7a!",
                      }),
                      (0, z.jsx)(aU.Ox, {
                        children: (0, z.jsx)(a1.A, {
                          cardTracking: e1,
                          image: E.mobile,
                          title: P,
                          goal: q,
                          collectedValue: eA,
                          collectedPercentValue: eT,
                          stickerReceived: az,
                          slug: F,
                          products: aC,
                          userHadGivenSticker: aS.includes(F),
                          utmInternalSource: "indication_show_modal",
                        }),
                      }),
                      (0, z.jsx)($.$n, {
                        variant: "vakinha",
                        onClick: tk,
                        block: !0,
                        size: "small",
                        children: (0, z.jsx)($.o5, {
                          fontFamily: K.a,
                          color: "white",
                          weight: 700,
                          fontSize: 14,
                          children: "Ver vaquinha",
                        }),
                      }),
                    ],
                  }),
                }),
              (0, z.jsxs)($.dW, {
                padding: 32,
                width: 600,
                isOpen: aF,
                onClose: aD,
                children: [
                  (0, z.jsx)($.wn, {
                    flex: !0,
                    flexDirection: "column",
                    alignItems: "center",
                    children: (0, z.jsx)(aU.Pj, {
                      backgroundColor: "green600",
                      flex: !0,
                      justifyContent: "center",
                      alignItems: "center",
                      children: (0, z.jsx)(ev, {}, "pawIcon"),
                    }),
                  }),
                  (0, z.jsx)($.wn, {
                    padding: [16, 0],
                    children: (0, z.jsx)($.o5, {
                      fontFamily: K.f,
                      fontSize: 20,
                      align: "center",
                      weight: 700,
                      children: "Agradecemos sua presen\xe7a no Vakinha Pet!",
                    }),
                  }),
                  (0, z.jsx)($.wn, {
                    padding: [0, 0, 24],
                    children: (0, z.jsx)($.o5, {
                      fontFamily: K.f,
                      align: "center",
                      children:
                        "Seu checkin contribuiu para ajudar a ONG. Quer ajudar mais projetos e hist\xf3rias da causa animal?",
                    }),
                  }),
                  (0, z.jsx)(U.A, {
                    route: "signUp",
                    passHref: !0,
                    children: (0, z.jsx)($.$n, {
                      variant: "vakinha",
                      block: !0,
                      size: "small",
                      children: (0, z.jsx)($.o5, {
                        fontFamily: K.a,
                        fontSize: 14,
                        weight: 700,
                        color: "white",
                        children: "Crie sua conta no Vakinha",
                      }),
                    }),
                  }),
                ],
              }),
              (0, z.jsx)($.dW, {
                isOpen: ti,
                onClose: tS,
                width: 358,
                padding: 16,
                children: (0, z.jsxs)($.wn, {
                  padding: [16, 0, 0],
                  rowGap: 24,
                  alignItems: "center",
                  flexDirection: "column",
                  flex: !0,
                  children: [
                    (0, z.jsx)(a9, {}),
                    (0, z.jsxs)($.wn, {
                      rowGap: 8,
                      flexDirection: "column",
                      flex: !0,
                      children: [
                        (0, z.jsx)($.o5, {
                          fontFamily: K.f,
                          weight: 700,
                          fontSize: 18,
                          align: "center",
                          children: "Doa\xe7\xe3o segura garantida!",
                        }),
                        (0, z.jsx)($.o5, {
                          fontFamily: K.f,
                          align: "center",
                          fontSize: 14,
                          children:
                            "Esta vaquinha faz parte da base de campanhas do Vakinha e est\xe1 protegida pelos nossos processos de seguran\xe7a.",
                        }),
                      ],
                    }),
                    (0, z.jsxs)($.wn, {
                      padding: [12],
                      rowGap: 8,
                      flexDirection: "column",
                      backgroundColor: "green100",
                      flex: !0,
                      children: [
                        (0, z.jsxs)($.wn, {
                          columnGap: 8,
                          alignItems: "center",
                          justifyContent: "center",
                          flex: !0,
                          children: [
                            (0, z.jsx)($.hh, {
                              size: 18,
                              color: "green700",
                              children: (0, z.jsx)(N.A, {}),
                            }),
                            (0, z.jsx)($.o5, {
                              fontFamily: K.f,
                              weight: 700,
                              fontSize: 14,
                              color: "green700",
                              align: "center",
                              children: "Nossa seguran\xe7a e transpar\xeancia",
                            }),
                          ],
                        }),
                        (0, z.jsx)($.o5, {
                          fontFamily: K.f,
                          align: "center",
                          fontSize: 12,
                          children:
                            "No Vakinha, seguran\xe7a e transpar\xeancia s\xe3o prioridade. Por isso, protegemos seus dados com tecnologia de ponta e protocolos rigorosos de seguran\xe7a.",
                        }),
                        (0, z.jsx)($.o5, {
                          fontFamily: K.f,
                          align: "center",
                          fontSize: 12,
                          children:
                            "Tamb\xe9m assumimos a responsabilidade por reembolsos em vaquinhas que n\xe3o seguirem nossas diretrizes.",
                        }),
                      ],
                    }),
                    (0, z.jsxs)($.wn, {
                      rowGap: 8,
                      flexDirection: "column",
                      flex: !0,
                      children: [
                        (0, z.jsx)($.o5, {
                          fontFamily: K.f,
                          fontSize: 14,
                          align: "center",
                          children:
                            "Estamos aqui para fazer da solidariedade algo maior, dentro de um ambiente seguro e eficaz.",
                        }),
                        (0, z.jsxs)($.wn, {
                          alignItems: "center",
                          justifyContent: "center",
                          columnGap: 8,
                          flex: !0,
                          children: [
                            (0, z.jsx)($.o5, {
                              fontFamily: K.f,
                              fontSize: 14,
                              align: "center",
                              weight: 700,
                              children: "Juntos, podemos transformar vidas",
                            }),
                            (0, z.jsx)(ac.QY, {
                              width: 18,
                              height: 18,
                              id: "heart",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, z.jsxs)($.wn, {
                      rowGap: 12,
                      flexDirection: "column",
                      flex: !0,
                      children: [
                        (0, z.jsx)($.$n, {
                          variant: "vakinha",
                          onClick: tS,
                          block: !0,
                          children: (0, z.jsx)($.o5, {
                            fontFamily: K.a,
                            fontSize: 20,
                            weight: 700,
                            color: "white",
                            children: "Ok",
                          }),
                        }),
                        (0, z.jsx)(U.A, {
                          route: "transparencyAndSecurity",
                          passHref: !0,
                          children: (0, z.jsx)($.o5, {
                            fontFamily: K.f,
                            weight: 700,
                            fontSize: 12,
                            color: "gray400",
                            align: "center",
                            children:
                              "Saiba mais sobre seguran\xe7a e transpar\xeancia",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      ne.pageViewProperties = (e) => {
        var a, t, n, i;
        return {
          is_creator:
            (null == (t = e.campaign) || null == (a = t.user)
              ? void 0
              : a.id) === (null == (n = e.loggedUser) ? void 0 : n.id),
          approvedValue: e.approvedValue,
          page: "show",
          vakinha_id: null == (i = e.campaign) ? void 0 : i.id,
        };
      };
      let na = () =>
          (0, z.jsx)(t3, {
            withFooter: !1,
            children: (0, z.jsx)(t5, {
              title: "Vaquinha removida",
              description: (0, z.jsxs)(z.Fragment, {
                children: [
                  (0, z.jsxs)($.o5, {
                    fontFamily: K.f,
                    fontSizeMobile: 20,
                    fontSizeDesktop: 24,
                    color: "white",
                    children: [
                      "Esta vaquinha ",
                      (0, z.jsx)("strong", {
                        children: "n\xe3o est\xe1 mais dispon\xedvel",
                      }),
                      " no Vakinha.",
                    ],
                  }),
                  (0, z.jsxs)($.o5, {
                    fontFamily: K.f,
                    fontSizeMobile: 20,
                    fontSizeDesktop: 24,
                    color: "white",
                    children: [
                      "Use a barra acima para buscar outra vaquinha ou ",
                      (0, z.jsx)("strong", {
                        children: "v\xe1 para o in\xedcio",
                      }),
                      " e explore as se\xe7\xf5es do Vakinha",
                    ],
                  }),
                ],
              }),
            }),
          }),
        nt = (e) => {
          let { removedCampaign: a, ...t } = e;
          return a ? (0, z.jsx)(na, {}) : (0, z.jsx)(ne, { ...t });
        };
      nt.pageViewProperties = ne.pageViewProperties;
      var nn = !0;
      let ni = nt;
    },
    46738: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => v });
      var n = t(37876),
        i = t(14232),
        o = t(11639),
        r = t(64137),
        s = t(69911),
        l = t(35519),
        c = t(27415),
        d = t(5976),
        h = t(95329);
      let u = d.Ay.div({
          closed: { height: 0, transition: { duration: 500 } },
          open: { height: "auto", transition: { duration: 500 } },
        }),
        m = (0, h.default)(u).withConfig({ componentId: "sc-bd86aa7b-0" })([
          "overflow:hidden;",
        ]),
        p = (e) => {
          let { open: a = !1, children: t } = e;
          return (0, n.jsx)(m, {
            className: "content",
            pose: a ? "open" : "closed",
            children: t,
          });
        },
        g = (0, h.default)(r.wn).withConfig({ componentId: "sc-1dc038ca-0" })([
          "margin-left:auto;",
        ]),
        f = (0, h.default)(r.wn).withConfig({ componentId: "sc-1dc038ca-1" })(
          ["min-height:", ";"],
          (e) =>
            void 0 !== e.minHeight ? "".concat(e.minHeight, "px") : "unset",
        ),
        x = (0, h.default)(o.Row).withConfig({ componentId: "sc-1dc038ca-2" })([
          "row-gap:16px;",
        ]),
        j = (e) => {
          let {
              title: a,
              content: t,
              index: i,
              itemOpen: o,
              setItemOpen: d,
              minHeight: h,
            } = e,
            u = o === i;
          return (0, n.jsx)(r.wn, {
            children: (0, n.jsxs)(r.wn, {
              borderRadius: 8,
              shadow: !0,
              backgroundColor: "white",
              children: [
                (0, n.jsxs)(f, {
                  flex: !0,
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: [16],
                  cursor: "pointer",
                  onClick: () => {
                    d(u ? null : i);
                  },
                  minHeight: h,
                  children: [
                    (0, n.jsx)(r.o5, {
                      fontFamily: c.a,
                      fontSizeDesktop: 16,
                      fontSizeMobile: 14,
                      weight: 700,
                      as: "h3",
                      children: a,
                    }),
                    (0, n.jsx)(g, {
                      children: u
                        ? (0, n.jsx)(r.o5, {
                            fontFamily: c.f,
                            color: "green400",
                            fontSize: 24,
                            children: (0, n.jsx)(s.A, {}),
                          })
                        : (0, n.jsx)(r.o5, {
                            fontFamily: c.f,
                            fontSize: 24,
                            children: (0, n.jsx)(l.A, {}),
                          }),
                    }),
                  ],
                }),
                (0, n.jsx)(p, {
                  open: u,
                  children: (0, n.jsx)(r.wn, {
                    padding: [8, 16, 16],
                    children: (0, n.jsx)(r.o5, {
                      fontSize: 14,
                      fontFamily: c.f,
                      color: "gray350",
                      children: t,
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        v = (e) => {
          let { faq: a, twoColumns: t, minHeight: r } = e,
            [s, l] = (0, i.useState)(null),
            c = t ? 6 : 12;
          return (0, n.jsx)(x, {
            children: a.map((e, a) =>
              (0, n.jsx)(
                o.Col,
                {
                  lg: c,
                  children: (0, n.jsx)(j, {
                    title: e.title,
                    content: e.content,
                    index: a,
                    itemOpen: s,
                    setItemOpen: l,
                    minHeight: r,
                  }),
                },
                e.title,
              ),
            ),
          });
        };
    },
    51675: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4",
        }),
        "CloseRounded",
      );
    },
    62874: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => i });
      var n = t(37876);
      let i = (e) => {
        let { id: a, width: t, height: i } = e;
        return (0, n.jsxs)("svg", {
          id: a,
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          viewBox: "0 0 25.403 25.403",
          children: [
            (0, n.jsx)("defs", {
              children: (0, n.jsx)("clipPath", {
                id: "clip-path",
                children: (0, n.jsx)("rect", {
                  id: "Ret\xe2ngulo_767",
                  "data-name": "Ret\xe2ngulo 767",
                  width: "25.403",
                  height: "25.403",
                  fill: "#000",
                }),
              }),
            }),
            (0, n.jsxs)("g", {
              id: "Grupo_1383",
              "data-name": "Grupo 1383",
              clipPath: "url(#clip-path)",
              children: [
                (0, n.jsx)("path", {
                  id: "Caminho_3622",
                  "data-name": "Caminho 3622",
                  d: "M78.682,183.135a3.708,3.708,0,0,1-2.638-1.089l-3.811-3.813a.724.724,0,0,0-1,0l-3.824,3.824a3.709,3.709,0,0,1-2.638,1.092h-.746l4.829,4.829a3.863,3.863,0,0,0,5.458,0l4.839-4.84Z",
                  transform: "translate(-58.87 -163.703)",
                  fill: "#000",
                }),
                (0, n.jsx)("path", {
                  id: "Caminho_3623",
                  "data-name": "Caminho 3623",
                  d: "M64.77,5.955a3.709,3.709,0,0,1,2.638,1.092l3.824,3.825a.709.709,0,0,0,1,0l3.81-3.81a3.7,3.7,0,0,1,2.638-1.093h.459L74.3,1.13a3.858,3.858,0,0,0-5.457,0h0L64.023,5.955Z",
                  transform: "translate(-58.87 0.001)",
                  fill: "#000",
                }),
                (0, n.jsx)("path", {
                  id: "Caminho_3624",
                  "data-name": "Caminho 3624",
                  d: "M24.273,90.354,21.349,87.43a.564.564,0,0,1-.208.042h-1.33a2.626,2.626,0,0,0-1.846.765l-3.81,3.808a1.83,1.83,0,0,1-2.586,0L7.745,88.222A2.625,2.625,0,0,0,5.9,87.456H4.268a.574.574,0,0,1-.2-.039L1.129,90.354a3.863,3.863,0,0,0,0,5.458l2.936,2.936a.552.552,0,0,1,.2-.039H5.9a2.626,2.626,0,0,0,1.846-.765l3.824-3.824a1.874,1.874,0,0,1,2.587,0l3.81,3.809a2.626,2.626,0,0,0,1.846.765h1.33a.555.555,0,0,1,.208.042l2.924-2.924a3.858,3.858,0,0,0,0-5.457h0",
                  transform: "translate(0 -80.381)",
                  fill: "#000",
                }),
              ],
            }),
          ],
        });
      };
    },
    63795: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => l });
      var n = t(37876),
        i = t(14232),
        o = t(98477),
        r = t(3029);
      let s = (e) => {
        let {
            isOpen: a,
            children: t,
            onClose: s,
            size: l,
            noPadding: c = !1,
            noOverlay: d = !1,
            noBorder: h = !1,
            escKeyClose: u = !0,
          } = e,
          m = (0, i.useRef)(null),
          p = (e) => {
            27 === e.keyCode && u && s();
          };
        (0, i.useEffect)(
          () => (
            document.addEventListener("keydown", p, !1),
            () => window.removeEventListener("keydown", p, !1)
          ),
          [],
        );
        let g = a
          ? (0, n.jsx)(r.mH, {
              ref: m,
              onClick: (e) => {
                e.target === m.current && s();
              },
              children: (0, n.jsxs)(r.Bs, {
                size: l,
                noPadding: c,
                noOverlay: d,
                noBorder: h,
                children: [(0, n.jsx)(r.Bv, {}), t],
              }),
            })
          : null;
        if ("undefined" != typeof document) {
          let e = document.getElementById("modal-root");
          return null == e ? null : o.createPortal(g, e);
        }
        return g;
      };
      ((s.Header = (e) => {
        let { children: a, variant: t } = e;
        return (0, n.jsx)(r.rQ, { variant: t, children: a });
      }),
        (s.Body = r.cw),
        (s.Footer = r.jl));
      let l = s;
    },
    66681: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => h });
      var n = t(37876),
        i = t(64137),
        o = t(20818),
        r = t(14232),
        s = t(95329);
      let l = (0, s.default)(i.wn).withConfig({ componentId: "sc-1b9f8a74-0" })(
          [
            "position:fixed;top:50%;right:",
            ";width:510px;height:",
            ";padding:32px;background-color:",
            ";transition:right 1s ease-in-out;transform:translateY(-50%);border-radius:16px 0 0 16px;z-index:1000;overflow-y:auto;@media ",
            "{width:100%;right:auto;left:0;padding:16px;height:",
            ";top:auto;bottom:",
            ";transition:bottom 1s ease-in-out;transform:none;border-radius:16px 16px 0 0;}",
          ],
          (e) => {
            let { open: a } = e;
            return a ? "0" : "-50vw";
          },
          (e) => {
            let { heightVh: a } = e;
            return a ? "".concat(a, "vh") : "auto";
          },
          i.Tj.white,
          i.HP.phoneAndTablet,
          (e) => {
            let { heightVh: a } = e;
            return a ? "".concat(a, "vh") : "auto";
          },
          (e) => {
            let { open: a } = e;
            return a ? "0" : "-100vh";
          },
        ),
        c = s.default.div.withConfig({ componentId: "sc-1b9f8a74-1" })(
          [
            "position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);z-index:999;opacity:",
            ";visibility:",
            ";transition:opacity 1s ease-in-out ",
            ";",
          ],
          (e) => {
            let { open: a } = e;
            return +!!a;
          },
          (e) => {
            let { open: a } = e;
            return a ? "visible" : "hidden";
          },
          (e) => {
            let { open: a } = e;
            return a ? "0s" : "0.5s";
          },
        ),
        d = (0, s.createGlobalStyle)(["body{overflow:hidden;}"]),
        h = (e) => {
          let { isOpen: a, onClose: t, children: s, heightVh: h } = e,
            u = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              let e = (e) => {
                u.current && !u.current.contains(e.target) && t();
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [t]),
            a
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(c, { open: a }),
                    (0, n.jsx)(d, {}),
                    (0, n.jsx)("div", {
                      ref: u,
                      children: (0, n.jsxs)(l, {
                        open: a,
                        heightVh: h,
                        children: [
                          (0, n.jsx)(i.wn, {
                            flex: !0,
                            justifyContent: "flex-end",
                            onClick: t,
                            cursor: "pointer",
                            children: (0, n.jsx)(i.hh, {
                              size: 24,
                              color: "gray350",
                              children: (0, n.jsx)(o.A, {}),
                            }),
                          }),
                          s,
                        ],
                      }),
                    }),
                  ],
                })
              : null
          );
        };
    },
    70872: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06.92.92zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41",
        }),
        "CreateOutlined",
      );
    },
    73567: (e, a, t) => {
      "use strict";
      t.d(a, { L: () => r });
      for (var n, i = 256, o = []; i--; )
        o[i] = (i + 256).toString(16).substring(1);
      function r(e) {
        var a = 0,
          t = e || 11;
        if (!n || i + t > 512)
          for (n = "", i = 0; a < 256; a++) n += o[(256 * Math.random()) | 0];
        return n.substring(i, i++ + t);
      }
    },
    74753: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z",
        }),
        "EmojiEvents",
      );
    },
    75005: (e, a, t) => {
      "use strict";
      t.d(a, { z: () => i });
      var n = t(91870);
      function i(e, a) {
        let t = (0, n.a)(e),
          i = (0, n.a)(a),
          o = t.getTime() - i.getTime();
        return o < 0 ? -1 : o > 0 ? 1 : o;
      }
    },
    80572: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z",
        }),
        "Security",
      );
    },
    83113: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        [
          (0, o.jsx)("circle", { cx: "10", cy: "8", r: "4" }, "0"),
          (0, o.jsx)(
            "path",
            {
              d: "M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98M20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63M17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2",
            },
            "1",
          ),
        ],
        "ManageAccounts",
      );
    },
    84268: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => o });
      var n = t(85887),
        i = t(37876);
      let o = (0, n.A)(
        (0, i.jsx)("path", {
          d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5",
        }),
        "LocationOn",
      );
    },
    86249: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => h });
      var n = t(37876),
        i = t(33563),
        o = t(95329),
        r = t(44879),
        s = t(98922);
      let l = o.default.div.withConfig({ componentId: "sc-94ef190a-0" })(
          [
            "display:flex;>:nth-child(2){",
            ";}> div{display:flex;flex-direction:column;}",
          ],
          (e) => {
            let { centerText: a } = e;
            return a && (0, o.css)(["justify-content:center;"]);
          },
        ),
        c = (0, o.default)(r.A).withConfig({ componentId: "sc-94ef190a-1" })(
          [
            "border:",
            ";margin-right:10px;width:45px;height:45px;align-self:flex-start;",
          ],
          (e) => {
            let { smallBorder: a } = e;
            return a ? "1px solid ".concat(s.s5) : "3px solid ".concat(s.s5);
          },
        ),
        d = o.default.div.withConfig({ componentId: "sc-94ef190a-2" })([
          "position:relative;>:nth-child(2){position:absolute;padding:2px;width:20px;height:20px;right:5px;}",
        ]),
        h = (e) => {
          let {
              photo: a,
              children: t,
              centerText: o,
              slug: r,
              badge: s,
              smallBorder: h = !1,
              hasAcceptedTerms: u,
              altImage: m,
            } = e,
            p = () =>
              s
                ? (0, n.jsxs)(d, {
                    children: [
                      (0, n.jsx)(c, { src: a, smallBorder: !0, altImage: m }),
                      s,
                    ],
                  })
                : (0, n.jsx)(c, { src: a, smallBorder: h, altImage: m });
          return (0, n.jsxs)(l, {
            centerText: o,
            children: [
              r
                ? (0, n.jsx)(i.A, {
                    route: "showUser",
                    passHref: !0,
                    params: { id: r },
                    style: { pointerEvents: u ? "auto" : "none" },
                    children: p(),
                  })
                : p(),
              (0, n.jsx)("div", { children: t }),
            ],
          });
        };
    },
    87848: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", { d: "M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z" }),
        "Flag",
      );
    },
    90283: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => j });
      var n = t(37876);
      t(34652);
      var i = t(64137),
        o = t(14232),
        r = t(27888),
        s = t(53929),
        l = t(45615),
        c = t(34016);
      let d = async (e) =>
        (0, c.A)({
          endpoint: "v1/authenticated/users/me/vakinha_spotlights",
          headers: { Authorization: e },
        });
      var h = t(86145),
        u = t(77798),
        m = t(75600),
        p = t(44121),
        g = t(95329);
      let f = (0, g.default)(i.wn).withConfig({ componentId: "sc-7a89627d-0" })(
          ["width:100%;max-width:400px;"],
        ),
        x = (0, g.default)(r.RC).withConfig({ componentId: "sc-7a89627d-1" })([
          "width:100%;",
        ]),
        j = (e) => {
          let {
              productPacks: a,
              category: t,
              campaignId: c,
              campaignStateName: g,
              isMobile: j = !1,
              useSwiperOnMobile: v = !1,
              utmInternalSource: w,
              spotlightUtmInternalSource: b,
              cardsQuantity: y = 4,
              columnGap: C = 32,
              section: A,
              surface: S = { page: "show", zone: "recommended" },
              token: k,
              experiment: z,
              variant: q,
            } = e,
            [M, I] = (0, o.useState)(!0),
            [F, T] = (0, o.useState)(a || []),
            [D, P] = (0, o.useState)([]),
            E = D.map((e, a) => ({
              id: e.id,
              position: a,
              spotlight: !!e.isSpotlight,
              billable: !!(e.isSpotlight && !e.isOwner),
            })),
            { cardTracking: _ } = (0, m.A)({
              surface: S,
              cards: E,
              experiment: z,
              variant: q,
            }),
            { campaignsUserGaveSticker: V } = (0, o.useContext)(l.A),
            O = async (e) => {
              try {
                let a = [];
                try {
                  let { data: e } = await (0, p.C)(A, c);
                  a = e;
                } catch (e) {
                  a = [];
                }
                if (k) {
                  let { data: e } = await d(k);
                  if (e.length > 0) {
                    let t = e.find((e) => e.id === c),
                      n = {
                        ...(null != t
                          ? t
                          : e[Math.floor(Math.random() * e.length)]),
                        isOwner: !0,
                      },
                      i = a.length || 1,
                      o = a.filter((e) => e.id !== n.id);
                    a = [n, ...o].slice(0, i);
                  }
                }
                if (0 === a.length) return e;
                return [...a.map((e) => ({ ...e, isSpotlight: !0 })), ...e];
              } catch (a) {
                return e;
              }
            };
          (0, o.useEffect)(() => {
            let e = async () => {
              let { data: e } = await (0, s.$P)({
                page: 1,
                filters: {
                  perPage: y,
                  category: t,
                  location: g,
                  mustNotId: c,
                  sortBy: "approved_value",
                  period: "last_30_days",
                },
              });
              (P((await O(e.campaigns)).slice(0, y)),
                (F && 0 !== F.length) ||
                  T(await (0, u.c)("sticker_offers_shop")));
            };
            (async () => {
              I(!0);
              try {
                await e();
              } finally {
                I(!1);
              }
            })();
          }, [c, k]);
          let L = Array.from({ length: y }, (e, a) =>
            "recommended-skeleton-".concat(a),
          );
          return (0, n.jsx)(i.wn, {
            children:
              j && v
                ? (0, n.jsx)(i.wn, {
                    fluid: !0,
                    children: M
                      ? (0, n.jsx)(x, {
                          slidesPerView: 1.2,
                          spaceBetween: 16,
                          children: L.map((e) =>
                            (0, n.jsx)(
                              r.qr,
                              {
                                children: (0, n.jsx)(i.wn, {
                                  padding: [4, 4, 4, 0],
                                  children: (0, n.jsx)(i.EA, { height: 300 }),
                                }),
                              },
                              e,
                            ),
                          ),
                        })
                      : (0, n.jsx)(x, {
                          slidesPerView: 1.2,
                          spaceBetween: 16,
                          children:
                            D &&
                            D.map((e) =>
                              (0, n.jsx)(
                                r.qr,
                                {
                                  children: (0, n.jsx)(i.wn, {
                                    padding: [4, 4, 4, 0],
                                    children: (0, n.jsx)(h.A, {
                                      slug: e.slug,
                                      goal: e.goal,
                                      isOngProfile: e.ongProfile,
                                      title: e.title,
                                      products: F,
                                      image: e.image.mobile,
                                      collectedValue: e.collectedValue,
                                      utmInternalSource: e.isSpotlight ? b : w,
                                      stickerReceived: e.stickersReceivedCount,
                                      collectedPercentValue:
                                        e.collectedPercentValue,
                                      userHadGivenSticker: V.includes(e.slug),
                                      cardTracking: _,
                                      id: e.id,
                                      isSpotlight: e.isSpotlight,
                                      sensitiveContent: e.sensitiveContent,
                                    }),
                                  }),
                                },
                                e.slug,
                              ),
                            ),
                        }),
                  })
                : (0, n.jsx)(i.wn, {
                    flex: !0,
                    justifyContent: "center",
                    flexDirection: "column",
                    fluid: !0,
                    children: M
                      ? (0, n.jsx)(i.wn, {
                          flex: !0,
                          flexDirectionDesktop: "row",
                          flexDirectionMobile: "column",
                          rowGap: 32,
                          alignItems: "center",
                          justifyContent: "center",
                          columnGap: C,
                          children: L.map((e) =>
                            (0, n.jsx)(
                              f,
                              {
                                flexCssProp: 1,
                                children: (0, n.jsx)(i.EA, { height: 300 }),
                              },
                              e,
                            ),
                          ),
                        })
                      : (0, n.jsx)(i.wn, {
                          flex: !0,
                          flexDirectionDesktop: "row",
                          flexDirectionMobile: "column",
                          rowGap: 32,
                          alignItems: "center",
                          justifyContent: "center",
                          columnGap: C,
                          children:
                            D &&
                            D.map((e) =>
                              (0, n.jsx)(
                                f,
                                {
                                  flexCssProp: 1,
                                  children: (0, n.jsx)(h.A, {
                                    slug: e.slug,
                                    goal: e.goal,
                                    isOngProfile: e.ongProfile,
                                    title: e.title,
                                    products: F,
                                    image: e.image.mobile,
                                    collectedValue: e.collectedValue,
                                    utmInternalSource: e.isSpotlight ? b : w,
                                    stickerReceived: e.stickersReceivedCount,
                                    collectedPercentValue:
                                      e.collectedPercentValue,
                                    userHadGivenSticker: V.includes(e.slug),
                                    cardTracking: _,
                                    id: e.id,
                                    isSpotlight: e.isSpotlight,
                                    sensitiveContent: e.sensitiveContent,
                                  }),
                                },
                                e.slug,
                              ),
                            ),
                        }),
                  }),
          });
        };
    },
    92381: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m.88 15.76v.36c0 .48-.39.88-.88.88-.48 0-.88-.39-.88-.88v-.42c-.63-.15-1.93-.61-2.69-2.1-.23-.44-.01-.99.45-1.18l.07-.03c.41-.17.87 0 1.08.39.32.61.95 1.37 2.12 1.37.93 0 1.98-.48 1.98-1.61 0-.96-.7-1.46-2.28-2.03-1.1-.39-3.35-1.03-3.35-3.31 0-.1.01-2.4 2.62-2.96v-.36c0-.49.4-.88.88-.88s.88.39.88.88v.37c1.07.19 1.75.76 2.16 1.3.34.44.16 1.08-.36 1.3-.36.15-.78.03-1.02-.28-.28-.38-.78-.77-1.6-.77-.7 0-1.81.37-1.81 1.39 0 .95.86 1.31 2.64 1.9 2.4.83 3.01 2.05 3.01 3.45 0 2.63-2.5 3.13-3.02 3.22",
        }),
        "PaidRounded",
      );
    },
    95090: (e, a, t) => {
      "use strict";
      t.d(a, { k: () => d });
      var n = t(1799),
        i = t(45417),
        o = t(96715),
        r = t(31339),
        s = t(75005),
        l = t(85174),
        c = t(91870);
      function d(e, a, t) {
        var d, h, u;
        let m,
          p,
          g,
          f = (0, i.q)(),
          x =
            null !=
            (h = null != (d = null == t ? void 0 : t.locale) ? d : f.locale)
              ? h
              : n.c,
          j = (0, s.z)(e, a);
        if (isNaN(j)) throw RangeError("Invalid time value");
        let v = Object.assign({}, t, {
          addSuffix: null == t ? void 0 : t.addSuffix,
          comparison: j,
        });
        j > 0
          ? ((m = (0, c.a)(a)), (p = (0, c.a)(e)))
          : ((m = (0, c.a)(e)), (p = (0, c.a)(a)));
        let w = (0, o.u)(
            null != (u = null == t ? void 0 : t.roundingMethod) ? u : "round",
          ),
          b = p.getTime() - m.getTime(),
          y = b / l.Cg,
          C = (b - ((0, r.G)(p) - (0, r.G)(m))) / l.Cg,
          A = null == t ? void 0 : t.unit;
        if (
          "second" ===
          (g =
            A ||
            (y < 1
              ? "second"
              : y < 60
                ? "minute"
                : y < l.F6
                  ? "hour"
                  : C < l.Nw
                    ? "day"
                    : C < l.Ks
                      ? "month"
                      : "year"))
        ) {
          let e = w(b / 1e3);
          return x.formatDistance("xSeconds", e, v);
        }
        if ("minute" === g) {
          let e = w(y);
          return x.formatDistance("xMinutes", e, v);
        }
        if ("hour" === g) {
          let e = w(y / 60);
          return x.formatDistance("xHours", e, v);
        }
        if ("day" === g) {
          let e = w(C / l.F6);
          return x.formatDistance("xDays", e, v);
        }
        if ("month" === g) {
          let e = w(C / l.Nw);
          return 12 === e && "month" !== A
            ? x.formatDistance("xYears", 1, v)
            : x.formatDistance("xMonths", e, v);
        } else {
          let e = w(C / l.Ks);
          return x.formatDistance("xYears", e, v);
        }
      }
    },
    96715: (e, a, t) => {
      "use strict";
      function n(e) {
        return (a) => {
          let t = (e ? Math[e] : Math.trunc)(a);
          return 0 === t ? 0 : t;
        };
      }
      t.d(a, { u: () => n });
    },
    98103: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92M18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1",
        }),
        "ShareOutlined",
      );
    },
    99052: (e, a, t) => {
      "use strict";
      var n = t(29563);
      a.A = void 0;
      var i = n(t(73231)),
        o = t(37876);
      a.A = (0, i.default)(
        (0, o.jsx)("path", {
          d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
        }),
        "ArrowForward",
      );
    },
    99221: (e, a, t) => {
      "use strict";
      (t.d(a, {
        X6: () => o,
        Ys: () => r,
        nJ: () => n,
        CG: () => l,
        WZ: () => s,
      }),
        RegExp(
          "(".concat(
            "crawler|spider|crawling|googlebot|bingbot|yandexbot|baiduspider|duckduckbot|facebookexternalhit|facebot|linkedinbot|twitterbot|slackbot|discordbot|telegrambot|ahrefsbot|semrush|majestic|mj12bot|pinterestbot|headless|phantomjs|lighthouse|pagespeed|chrome-lighthouse|uptime|pingdom|newrelic|datadog|cloudflare",
            ")",
          ),
          "i",
        ));
      let n = "show-suggested-amounts-v2",
        i = {
          "top500-floor25": [500, 200, 100, 25],
          "top500-floor30": [500, 200, 100, 30],
        },
        o = 100,
        r = "other";
      (""
        .concat("vk_show_suggested_amounts", "=1; path=/; max-age=")
        .concat(31536e3),
        [...Object.keys(i)]);
      let s = (e) => (Object.keys(i).includes(e) ? i[e] : null),
        l = (e, a) => {
          var t;
          let n = Number(a);
          return (null == (t = s(e)) ? void 0 : t.includes(n)) ? n : null;
        };
    },
  },
  (e) => {
    (e.O(
      0,
      [
        4928, 7044, 8787, 5222, 8226, 5558, 3078, 8823, 8459, 9980, 8889, 7152,
        1472, 6660, 4208, 2832, 2503, 4117, 5284, 3457, 6955, 1872, 1541, 4825,
        9869, 636, 6593, 8792,
      ],
      () => e((e.s = 31256)),
    ),
      (_N_E = e.O()));
  },
]);
//# sourceMappingURL=show-a721ecc894c6c85a.js.map
