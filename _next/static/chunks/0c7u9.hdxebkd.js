(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  52683,
  (e) => {
    "use strict";
    var t = e.i(43476),
      i = e.i(71645),
      a = e.i(46932),
      s = e.i(88653),
      n = e.i(75254);
    let r = (0, n.default)("external-link", [
      ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
      ["path", { d: "M10 14 21 3", key: "gplh6r" }],
      [
        "path",
        {
          d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
          key: "a6xqqp",
        },
      ],
    ]);
    var o = e.i(97625),
      l = e.i(22016);
    function c({
      title: e,
      description: i,
      tags: s,
      githubUrl: n,
      demoUrl: d,
      date: x,
    }) {
      return (0, t.jsxs)(a.motion.div, {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        className:
          "group relative flex flex-col p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 hover:border-green-500/20 transition-all",
        children: [
          (0, t.jsxs)("div", {
            className: "flex justify-between items-start mb-4",
            children: [
              (0, t.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, t.jsx)("span", {
                    className:
                      "text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1",
                    children: x,
                  }),
                  (0, t.jsx)("h3", {
                    className:
                      "text-lg font-bold text-zinc-200 group-hover:text-white transition-colors",
                    children: e,
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex gap-3",
                children: [
                  n &&
                    (0, t.jsxs)(l.default, {
                      href: n,
                      target: "_blank",
                      className:
                        "flex items-center gap-2 text-[10px] font-mono text-zinc-500 hover:text-white transition-colors",
                      children: [
                        (0, t.jsx)(o.Code2, { className: "w-3.5 h-3.5" }),
                        (0, t.jsx)("span", { children: "GitHub" }),
                      ],
                    }),
                  d &&
                    (0, t.jsxs)(l.default, {
                      href: d,
                      target: "_blank",
                      className:
                        "flex items-center gap-2 text-[10px] font-mono text-zinc-500 hover:text-white transition-colors",
                      children: [
                        (0, t.jsx)(r, { className: "w-3.5 h-3.5" }),
                        (0, t.jsx)("span", { children: "Live" }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          (0, t.jsx)("p", {
            className: "text-sm text-zinc-400 leading-relaxed mb-6",
            children: i,
          }),
          (0, t.jsx)("div", {
            className: "flex flex-wrap gap-2",
            children: s.map((e) =>
              (0, t.jsx)(
                "span",
                {
                  className:
                    "px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-zinc-500 border border-white/5",
                  children: e,
                },
                e,
              ),
            ),
          }),
        ],
      });
    }
    var d = e.i(47167);
    let x = "mrinnovator503",
      m = [
        { min: 0, color: "bg-zinc-800", glow: "" },
        {
          min: 1,
          color: "bg-[#0e4429]",
          glow: "shadow-[0_0_4px_rgba(14,68,41,0.15)]",
        },
        {
          min: 3,
          color: "bg-[#006d32]",
          glow: "shadow-[0_0_6px_rgba(0,109,50,0.25)]",
        },
        {
          min: 6,
          color: "bg-[#26a641]",
          glow: "shadow-[0_0_8px_rgba(38,166,65,0.4)]",
        },
        {
          min: 10,
          color: "bg-[#39d353]",
          glow: "shadow-[0_0_10px_rgba(57,211,83,0.6)]",
        },
      ];
    function h() {
      let [e, s] = (0, i.useState)([]),
        [n, r] = (0, i.useState)(0),
        [o, l] = (0, i.useState)(!0);
      return ((0, i.useEffect)(() => {
        !(async function () {
          try {
            let e = `
          {
            user(login: "${x}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `,
              t = await fetch("https://api.github.com/graphql", {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${d.default.env.NEXT_PUBLIC_GITHUB_TOKEN || ""}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ query: e }),
              });
            if (!t.ok) throw Error("Failed to fetch");
            let i = await t.json(),
              a = i?.data?.user?.contributionsCollection?.contributionCalendar;
            a && (s(a.weeks), r(a.totalContributions));
          } catch {
            let e = [],
              t = new Date();
            for (let i = 51; i >= 0; i--) {
              let a = [];
              for (let e = 0; e < 7; e++) {
                let s = new Date(t);
                (s.setDate(s.getDate() - (7 * i + (6 - e))),
                  s <= t &&
                    a.push({
                      date: s.toISOString().split("T")[0],
                      contributionCount:
                        Math.random() > 0.6
                          ? Math.floor(12 * Math.random())
                          : 0,
                    }));
              }
              e.push({ contributionDays: a });
            }
            (s(e),
              r(
                e.reduce(
                  (e, t) =>
                    e +
                    t.contributionDays.reduce(
                      (e, t) => e + t.contributionCount,
                      0,
                    ),
                  0,
                ),
              ));
          } finally {
            l(!1);
          }
        })();
      }, []),
      o)
        ? (0, t.jsx)("div", {
            className: "flex items-center gap-4 py-4",
            children: [void 0, void 0, void 0, void 0, void 0].map((e, i) =>
              (0, t.jsx)(
                "div",
                {
                  className: "flex gap-1",
                  children: [...Array(7)].map((e, i) =>
                    (0, t.jsx)(
                      "div",
                      {
                        className:
                          "w-3 h-3 rounded-sm bg-zinc-800 animate-pulse",
                      },
                      i,
                    ),
                  ),
                },
                i,
              ),
            ),
          })
        : (0, t.jsxs)(a.motion.div, {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            className: "space-y-4",
            children: [
              (0, t.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, t.jsx)("span", {
                        className:
                          "text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest leading-tight",
                        children: "GitHub Activity",
                      }),
                      (0, t.jsx)("span", {
                        className: "text-[10px] font-mono text-zinc-600",
                        children: "Coded 1 hr 38 mins today",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex items-center justify-between mt-3",
                    children: [
                      (0, t.jsxs)("span", {
                        className: "text-[11px] font-mono text-zinc-400",
                        children: [
                          n.toLocaleString(),
                          " contributions in the last year",
                        ],
                      }),
                      (0, t.jsxs)("a", {
                        href: `https://github.com/${x}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-[10px] font-mono text-zinc-600 hover:text-[#22c55e] transition-colors",
                        children: ["@", x, " →"],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "overflow-x-auto pb-2",
                children: (0, t.jsx)("div", {
                  className: "flex gap-[3px] min-w-max",
                  children: e.map((e, i) =>
                    (0, t.jsx)(
                      "div",
                      {
                        className: "flex flex-col gap-[3px]",
                        children: e.contributionDays.map((e, i) => {
                          let a = (function (e) {
                            for (let t = m.length - 1; t >= 0; t--)
                              if (e >= m[t].min) return m[t];
                            return m[0];
                          })(e.contributionCount);
                          return (0, t.jsx)(
                            "div",
                            {
                              className: `w-3 h-3 rounded-[3px] ${a.color} ${a.glow} transition-all cursor-default group relative`,
                              title: `${e.date}: ${e.contributionCount} contribution${1 !== e.contributionCount ? "s" : ""}`,
                            },
                            i,
                          );
                        }),
                      },
                      i,
                    ),
                  ),
                }),
              }),
              (0, t.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, t.jsx)("span", {
                    className: "text-[9px] font-mono text-zinc-600",
                    children: "Less",
                  }),
                  m.map((e, i) =>
                    (0, t.jsx)(
                      "div",
                      {
                        className: `w-3 h-3 rounded-[3px] ${e.color} ${e.glow}`,
                      },
                      i,
                    ),
                  ),
                  (0, t.jsx)("span", {
                    className: "text-[9px] font-mono text-zinc-600",
                    children: "More",
                  }),
                ],
              }),
            ],
          });
    }
    let p = (0, n.default)("music", [
        ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
        ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
        ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
      ]),
      u = [
        "Always Learning",
        "Trying to do better",
        "Building System OMNI v2",
        "Pushing to Production",
        "Exploring LLMs",
      ];
    function f() {
      let [e, n] = (0, i.useState)(0);
      return (
        (0, i.useEffect)(() => {
          let e = setInterval(() => {
            n((e) => (e + 1) % u.length);
          }, 4e3);
          return () => clearInterval(e);
        }, []),
        (0, t.jsxs)("div", {
          className: "flex flex-col sm:flex-row gap-4 w-full",
          children: [
            (0, t.jsxs)("div", {
              className:
                "flex items-center gap-3 p-3 px-4 rounded-xl border border-white/5 bg-zinc-900/30 group cursor-default flex-1 h-14",
              children: [
                (0, t.jsxs)("div", {
                  className: "relative flex h-2 w-2",
                  children: [
                    (0, t.jsx)("span", {
                      className:
                        "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75",
                    }),
                    (0, t.jsx)("span", {
                      className:
                        "relative inline-flex rounded-full h-2 w-2 bg-green-500",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "flex flex-col overflow-hidden",
                  children: [
                    (0, t.jsx)("span", {
                      className:
                        "text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest leading-tight",
                      children: "Status",
                    }),
                    (0, t.jsx)(s.AnimatePresence, {
                      mode: "wait",
                      children: (0, t.jsx)(
                        a.motion.span,
                        {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: -10 },
                          transition: { duration: 0.3 },
                          className:
                            "text-xs font-medium text-zinc-400 group-hover:text-white transition-colors",
                          children: u[e],
                        },
                        e,
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("a", {
              href: "https://open.spotify.com/track/1067S3Urq69T9X7L76XGSu",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "flex items-center gap-3 p-3 px-4 rounded-xl border border-white/5 bg-zinc-900/30 group hover:border-[#1DB954]/30 transition-all flex-1 h-14",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "relative flex h-5 w-5 items-center justify-center rounded bg-[#1DB954]/10",
                  children: (0, t.jsx)(p, {
                    className:
                      "w-3 h-3 text-[#1DB954] group-hover:animate-pulse",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, t.jsx)("span", {
                      className:
                        "text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest leading-tight",
                      children: "Last Played",
                    }),
                    (0, t.jsx)("span", {
                      className:
                        "text-xs font-medium text-zinc-400 group-hover:text-white transition-colors truncate max-w-[150px]",
                      children: "Strawberries & Cigarettes — Troye Sivan",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    }
    function g({ company: e, role: i, period: s, description: n, tags: r }) {
      return (0, t.jsxs)(a.motion.div, {
        initial: { opacity: 0, x: -10 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: !0 },
        className:
          "group relative pl-6 pb-12 border-l border-white/10 last:pb-0",
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-white/20 group-hover:bg-green-500 group-hover:border-green-500 transition-colors",
          }),
          (0, t.jsxs)("div", {
            className:
              "flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1",
            children: [
              (0, t.jsx)("h3", {
                className:
                  "text-sm font-bold text-zinc-100 uppercase tracking-tight",
                children: e,
              }),
              (0, t.jsx)("span", {
                className:
                  "text-[10px] font-mono text-zinc-500 uppercase tracking-widest",
                children: s,
              }),
            ],
          }),
          (0, t.jsx)("p", {
            className: "text-xs font-mono text-zinc-400 mb-3",
            children: i,
          }),
          n &&
            (0, t.jsx)("p", {
              className: "text-xs text-zinc-500 leading-relaxed mb-4 max-w-xl",
              children: n,
            }),
          r &&
            (0, t.jsx)("div", {
              className: "flex flex-wrap gap-2",
              children: r.map((e) =>
                (0, t.jsx)(
                  "span",
                  {
                    className:
                      "px-2 py-0.5 text-[9px] font-mono rounded bg-white/5 text-zinc-600 border border-white/5",
                    children: e,
                  },
                  e,
                ),
              ),
            }),
        ],
      });
    }
    function b({ institution: e, degree: i, period: s, grade: n }) {
      return (0, t.jsxs)(a.motion.div, {
        initial: { opacity: 0, x: -10 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: !0 },
        className: "group relative pl-6 pb-10 last:pb-0",
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-white/20 group-hover:bg-[#22c55e] group-hover:border-[#22c55e] transition-colors",
          }),
          (0, t.jsx)("div", {
            className:
              "absolute left-[-1px] top-3 bottom-0 w-px bg-white/5 group-last:hidden",
          }),
          (0, t.jsxs)("div", {
            className:
              "flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1.5 gap-1",
            children: [
              (0, t.jsx)("h3", {
                className:
                  "text-sm font-bold text-zinc-100 uppercase tracking-tight",
                children: e,
              }),
              (0, t.jsx)("span", {
                className:
                  "text-[10px] font-mono text-zinc-500 uppercase tracking-widest",
                children: s,
              }),
            ],
          }),
          (0, t.jsx)("p", {
            className: "text-xs font-mono text-zinc-400 mb-1.5",
            children: i,
          }),
          n &&
            (0, t.jsx)("p", {
              className: "text-[10px] font-mono text-zinc-500",
              children: n,
            }),
        ],
      });
    }
    function j() {
      return (0, t.jsxs)("div", {
        className: "ml-1",
        children: [
          (0, t.jsx)(b, {
            institution: "SJCET Palai",
            degree:
              "Bachelor of Technology · Electronics & Communication Engineering",
            period: "2021 — 2025",
            grade: "Pass out: 2025",
          }),
          (0, t.jsx)(b, {
            institution: "GHSS Kallooppara",
            degree: "Higher Secondary · Science",
            period: "2019 — 2021",
          }),
        ],
      });
    }
    var w = e.i(63488);
    let v = (0, n.default)("file-text", [
        [
          "path",
          {
            d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
            key: "1oefj6",
          },
        ],
        ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
        ["path", { d: "M10 9H8", key: "b1mrlr" }],
        ["path", { d: "M16 13H8", key: "t4e002" }],
        ["path", { d: "M16 17H8", key: "z1uh3a" }],
      ]),
      y = (0, n.default)("chevron-down", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    var N = e.i(37727);
    let k = (0, n.default)("refresh-cw", [
        [
          "path",
          {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc",
          },
        ],
        ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
        [
          "path",
          {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3",
          },
        ],
        ["path", { d: "M8 16H3v5", key: "1cv678" }],
      ]),
      z = [
        "Always Learning",
        "Building in Public",
        "Maker Mode",
        "Shipping Fast",
      ],
      S = [
        {
          icon: (0, t.jsx)(
            ({ className: e }) =>
              (0, t.jsx)("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: e,
                children: (0, t.jsx)("path", {
                  d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22",
                }),
              }),
            { className: "w-4 h-4" },
          ),
          label: "GitHub",
          href: "https://github.com/mrinnovator503",
          detail: "Check my code",
        },
        {
          icon: (0, t.jsx)(
            ({ className: e }) =>
              (0, t.jsxs)("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: e,
                children: [
                  (0, t.jsx)("path", {
                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                  }),
                  (0, t.jsx)("rect", {
                    x: "2",
                    y: "9",
                    width: "4",
                    height: "12",
                  }),
                  (0, t.jsx)("circle", { cx: "4", cy: "4", r: "2" }),
                ],
              }),
            { className: "w-4 h-4" },
          ),
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/psadithyan",
          detail: "Connect with me",
        },
        {
          icon: (0, t.jsx)(
            ({ className: e }) =>
              (0, t.jsx)("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: e,
                children: (0, t.jsx)("path", {
                  d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
                }),
              }),
            { className: "w-4 h-4" },
          ),
          label: "X",
          href: "https://x.com/im_psss",
          detail: "Follow my updates",
        },
        {
          icon: (0, t.jsx)(w.Mail, { className: "w-4 h-4" }),
          label: "Email",
          href: "mailto:psadithyan314@gmail.com",
          detail: "Send me a mail",
        },
        {
          icon: (0, t.jsx)(v, { className: "w-4 h-4" }),
          label: "Resume",
          href: "#",
          detail: "View my resume",
        },
      ],
      C = [
        {
          title: "Omni Claude",
          date: "MAR 2026",
          description:
            "AI-powered productivity system integrating Claude Code with custom automation workflows, task management, and knowledge organization.",
          tags: ["Python", "Claude API", "MCP", "CLI"],
          githubUrl: "https://github.com/mrinnovator503/omni-claude",
        },
        {
          title: "Keypo Signer",
          date: "FEB 2026",
          description:
            "macOS secret management tool with secure key storage, cryptographic signing, and environment variable handling for developers.",
          tags: ["Rust", "macOS", "Security", "CLI"],
          githubUrl: "https://github.com/mrinnovator503/keypo-signer",
        },
        {
          title: "Clawd Mochi",
          date: "JAN 2026",
          description:
            "XIAO ESP32S3 powered OLED animation controller with custom model support, sprite rendering, and real-time graphics.",
          tags: ["Arduino", "ESP32", "OLED", "C++"],
          githubUrl: "https://github.com/mrinnovator503/clawd-mochi",
        },
        {
          title: "Todoist MCP",
          date: "DEC 2025",
          description:
            "Model Context Protocol server for Todoist — bring AI agents into your task management workflow with full API coverage.",
          tags: ["Node.js", "MCP", "Todoist API"],
          githubUrl: "https://github.com/mrinnovator503/todoist-mcp",
        },
        {
          title: "Portfolio Site",
          date: "NOV 2025",
          description:
            "This portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Dark-first design with smooth animations.",
          tags: ["Next.js", "React", "Tailwind"],
          githubUrl: "https://github.com/mrinnovator503/portfolio",
          demoUrl: "https://mrinnovator503.github.io/portfolio/",
        },
        {
          title: "Tinkerfest 2026",
          date: "OCT 2025",
          description:
            "Six hands-on Arduino projects: LED cube, weather station, robot arm, gas leakage detector, flood alert, and fire extinguisher.",
          tags: ["Arduino", "Electronics", "IoT"],
          githubUrl: "https://github.com/mrinnovator503/tinkerfest2026",
        },
      ],
      M = [
        {
          title: "Building a Personal AI Assistant with Claude Code",
          date: "2026-03-10",
          read: "5 min",
        },
        {
          title: "Migrating from Termux to macOS for Development",
          date: "2026-03-08",
          read: "3 min",
        },
        {
          title: "Setting Up MCP Servers for AI Agents",
          date: "2026-03-05",
          read: "8 min",
        },
        {
          title: "My Fellowship Journey @ SSK Maker Ecosystem",
          date: "2026-02-28",
          read: "4 min",
        },
      ];
    function P({ onClick: e }) {
      let [n, r] = (0, i.useState)(0);
      (0, i.useEffect)(() => {
        r(Math.floor(9 * Math.random()));
      }, []);
      let o = (0, i.useCallback)(() => {
        r((e) => (e + 1) % 9);
      }, []);
      return (0, t.jsxs)("div", {
        className: "relative w-32 h-32 cursor-pointer group",
        onClick: o,
        title: "Click to rotate",
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute inset-[-8px] rounded-full animate-spin-slow bg-[conic-gradient(from_0deg,#d4af37,transparent_40%,#d4af37)] opacity-30 blur-[8px]",
          }),
          (0, t.jsx)("div", {
            className:
              "absolute inset-0 rounded-full border-2 border-[#d4af37]",
          }),
          (0, t.jsx)(s.AnimatePresence, {
            mode: "wait",
            children: (0, t.jsx)(
              a.motion.img,
              {
                src: `/avatars/avatar-${n + 1}.png`,
                alt: "P S Adithyan",
                className:
                  "absolute inset-0 w-full h-full rounded-full object-cover bg-black p-1",
                initial: { opacity: 0, rotate: -10, scale: 0.95 },
                animate: { opacity: 1, rotate: 0, scale: 1 },
                exit: { opacity: 0, rotate: 10, scale: 0.95 },
                transition: { duration: 0.3, ease: "easeInOut" },
              },
              n,
            ),
          }),
          (0, t.jsx)("div", {
            className:
              "absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#d4af37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
            children: (0, t.jsx)(k, { className: "w-3 h-3 text-black" }),
          }),
        ],
      });
    }
    function A() {
      let [e, n] = (0, i.useState)(0);
      return (
        (0, i.useEffect)(() => {
          let e = setInterval(() => {
            n((e) => (e + 1) % z.length);
          }, 3e3);
          return () => clearInterval(e);
        }, []),
        (0, t.jsx)(s.AnimatePresence, {
          mode: "wait",
          children: (0, t.jsx)(
            a.motion.span,
            {
              initial: { opacity: 0, y: 4 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -4 },
              transition: { duration: 0.4 },
              className:
                "text-xs font-mono text-zinc-500 px-3 py-1 rounded-full border border-white/5 bg-white/5",
              children: z[e],
            },
            e,
          ),
        })
      );
    }
    function E() {
      let [e, a] = (0, i.useState)(null),
        [s, n] = (0, i.useState)(!0);
      return ((0, i.useEffect)(() => {
        !(async function () {
          try {
            n(!1);
          } catch {
            n(!1);
          }
        })();
      }, []),
      s)
        ? (0, t.jsxs)("div", {
            className:
              "flex items-center gap-3 px-4 py-3 rounded-xl border border-white/5 bg-white/5",
            children: [
              (0, t.jsx)("div", {
                className:
                  "w-4 h-4 rounded-full border-2 border-zinc-600 border-t-zinc-300 animate-spin",
              }),
              (0, t.jsx)("span", {
                className: "text-xs font-mono text-zinc-500",
                children: "Connecting to Apple Music...",
              }),
            ],
          })
        : e
          ? (0, t.jsxs)("a", {
              href: e.url,
              target: "_blank",
              rel: "noopener",
              className:
                "flex items-center gap-3 px-4 py-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group",
              children: [
                (0, t.jsx)("img", {
                  src: e.artwork,
                  alt: e.album,
                  className: "w-10 h-10 rounded-lg object-cover",
                }),
                (0, t.jsxs)("div", {
                  className: "flex flex-col min-w-0",
                  children: [
                    (0, t.jsx)("span", {
                      className: "text-xs font-medium text-white truncate",
                      children: e.title,
                    }),
                    (0, t.jsx)("span", {
                      className: "text-[10px] font-mono text-zinc-500 truncate",
                      children: e.artist,
                    }),
                  ],
                }),
                (0, t.jsx)(p, {
                  className:
                    "w-4 h-4 text-zinc-600 ml-auto group-hover:text-[#d4af37] transition-colors",
                }),
              ],
            })
          : (0, t.jsxs)("div", {
              className:
                "flex items-center gap-3 px-4 py-3 rounded-xl border border-white/5 bg-white/5",
              children: [
                (0, t.jsx)(p, { className: "w-4 h-4 text-zinc-500" }),
                (0, t.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, t.jsx)("span", {
                      className: "text-xs font-mono text-zinc-400",
                      children: "Apple Music",
                    }),
                    (0, t.jsx)("span", {
                      className: "text-[10px] font-mono text-zinc-600",
                      children: "No track playing",
                    }),
                  ],
                }),
              ],
            });
    }
    function I({ link: e }) {
      let [n, r] = (0, i.useState)(!1);
      return (0, t.jsxs)(a.motion.a, {
        href: e.href,
        target: "_blank",
        rel: "noopener noreferrer",
        onMouseEnter: () => r(!0),
        onMouseLeave: () => r(!1),
        className:
          "relative flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all group overflow-hidden",
        children: [
          (0, t.jsx)(a.motion.span, {
            className: "relative z-10",
            initial: !1,
            animate: { scale: n ? 1.15 : 1 },
            transition: { duration: 0.2 },
            children: e.icon,
          }),
          (0, t.jsx)(s.AnimatePresence, {
            children:
              n &&
              (0, t.jsxs)(a.motion.div, {
                initial: { opacity: 0, y: 6, scale: 0.95 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, y: 6, scale: 0.95 },
                transition: { duration: 0.15 },
                className:
                  "absolute left-1/2 -translate-x-1/2 bottom-full mb-2 flex flex-col items-center pointer-events-none",
                children: [
                  (0, t.jsx)("span", {
                    className:
                      "text-[10px] font-mono font-medium text-white bg-zinc-800 px-2 py-1 rounded whitespace-nowrap border border-white/10",
                    children: e.label,
                  }),
                  (0, t.jsx)("span", {
                    className: "text-[9px] font-mono text-zinc-500 mt-0.5",
                    children: e.detail,
                  }),
                ],
              }),
          }),
        ],
      });
    }
    function L({ title: e, children: n, defaultOpen: r = !1 }) {
      let [o, l] = (0, i.useState)(r);
      return (0, t.jsxs)("div", {
        className: "border border-white/5 rounded-xl overflow-hidden",
        children: [
          (0, t.jsxs)("button", {
            onClick: () => l(!o),
            className:
              "w-full flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors",
            children: [
              (0, t.jsx)("span", {
                className: "text-sm font-medium text-zinc-300",
                children: e,
              }),
              (0, t.jsx)(a.motion.div, {
                animate: { rotate: 180 * !!o },
                transition: { duration: 0.2 },
                children: (0, t.jsx)(y, { className: "w-4 h-4 text-zinc-500" }),
              }),
            ],
          }),
          (0, t.jsx)(s.AnimatePresence, {
            initial: !1,
            children:
              o &&
              (0, t.jsx)(a.motion.div, {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.25, ease: "easeInOut" },
                className: "overflow-hidden",
                children: (0, t.jsx)("div", {
                  className: "px-6 pb-6",
                  children: n,
                }),
              }),
          }),
        ],
      });
    }
    function T({ index: e, onClose: i }) {
      return (0, t.jsx)(a.motion.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className:
          "fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md",
        onClick: i,
        children: (0, t.jsxs)(a.motion.div, {
          initial: { scale: 0.85, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.85, opacity: 0 },
          transition: { type: "spring", damping: 25, stiffness: 300 },
          className: "relative",
          onClick: (e) => e.stopPropagation(),
          children: [
            (0, t.jsxs)("button", {
              onClick: i,
              className:
                "absolute -top-10 right-0 flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-white transition-colors",
              children: [(0, t.jsx)(N.X, { className: "w-3 h-3" }), " close"],
            }),
            (0, t.jsx)("img", {
              src: `/avatars/avatar-${e + 1}.png`,
              alt: "P S Adithyan",
              className:
                "w-72 h-72 rounded-3xl object-cover border-2 border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.2)]",
            }),
          ],
        }),
      });
    }
    function _({ label: e }) {
      return (0, t.jsxs)("div", {
        className: "flex items-center gap-4 mb-10",
        children: [
          (0, t.jsx)("span", {
            className:
              "text-[10px] font-mono font-medium text-[#d4af37] uppercase tracking-widest whitespace-nowrap",
            children: e,
          }),
          (0, t.jsx)("div", { className: "h-px w-full bg-white/5" }),
        ],
      });
    }
    e.s(
      [
        "default",
        0,
        function () {
          let [e, n] = (0, i.useState)(0),
            [o, l] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              n(Math.floor(9 * Math.random()));
            }, []),
            (0, t.jsxs)("div", {
              className: "mx-auto max-w-3xl px-6 pt-24 pb-32",
              children: [
                (0, t.jsx)("header", {
                  className: "mb-24",
                  children: (0, t.jsxs)(a.motion.div, {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    className: "flex flex-col items-center text-center gap-8",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "relative",
                        children: [
                          (0, t.jsx)(P, { onClick: () => l(!0) }),
                          (0, t.jsx)(s.AnimatePresence, {
                            children:
                              o &&
                              (0, t.jsx)(T, { index: e, onClose: () => l(!1) }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-col items-center gap-1",
                        children: [
                          (0, t.jsx)("h1", {
                            className:
                              "text-4xl font-bold tracking-tight text-white",
                            children: "P S Adithyan",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-sm text-zinc-500 font-medium",
                            children: "22 · Electronics Engineer · Maker",
                          }),
                          (0, t.jsx)("div", {
                            className: "flex items-center gap-2 mt-2",
                            children: (0, t.jsx)(A, {}),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex items-center gap-3 mt-2",
                        children: [
                          (0, t.jsx)("a", {
                            href: "#projects",
                            className:
                              "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#d4af37] text-black text-sm font-medium hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,175,55,0.3)] transition-all",
                            children: "View Projects",
                          }),
                          (0, t.jsx)("a", {
                            href: "#contact",
                            className:
                              "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-sm font-medium text-zinc-300 hover:-translate-y-0.5 hover:border-white/20 transition-all",
                            children: "Get in Touch",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("section", {
                  id: "about",
                  className: "mb-24",
                  children: [
                    (0, t.jsx)(_, { label: "./about" }),
                    (0, t.jsxs)("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        (0, t.jsxs)("p", {
                          className: "text-sm text-zinc-400 leading-relaxed",
                          children: [
                            "Electronics & Communication Engineering graduate from",
                            " ",
                            (0, t.jsx)("span", {
                              className: "text-zinc-300",
                              children: "SJCET Palai",
                            }),
                            " (2019–2025 batch), currently deep in a 1-year fellowship at the",
                            " ",
                            (0, t.jsx)("span", {
                              className: "text-zinc-300",
                              children: "SSK Maker Ecosystem",
                            }),
                            " — building hardware, shipping code, and documenting everything.",
                          ],
                        }),
                        (0, t.jsx)("p", {
                          className: "text-sm text-zinc-400 leading-relaxed",
                          children:
                            "I build things that live at the intersection of electronics and software. From custom PCBs to AI-integrated embedded systems. If it has pins and needs firmware, I want to be the one writing it.",
                        }),
                        (0, t.jsx)("p", {
                          className: "text-sm text-zinc-400 leading-relaxed",
                          children:
                            "When I'm not tinkering with circuits or soldering, I'm probably exploring something new in the world of LLMs, automation, or building tools for my future self.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("section", {
                  id: "connect",
                  className: "mb-24",
                  children: [
                    (0, t.jsx)(_, { label: "./connect" }),
                    (0, t.jsx)("div", {
                      className: "flex flex-wrap gap-3",
                      children: S.map((e) =>
                        (0, t.jsx)(I, { link: e }, e.label),
                      ),
                    }),
                    (0, t.jsx)("div", {
                      className: "mt-10",
                      children: (0, t.jsx)(h, {}),
                    }),
                    (0, t.jsx)("div", {
                      className: "mt-6",
                      children: (0, t.jsx)(f, {}),
                    }),
                    (0, t.jsx)("div", {
                      className: "mt-6",
                      children: (0, t.jsx)(E, {}),
                    }),
                  ],
                }),
                (0, t.jsxs)("section", {
                  id: "experience",
                  className: "mb-24",
                  children: [
                    (0, t.jsx)(_, { label: "./experience" }),
                    (0, t.jsxs)("div", {
                      className: "space-y-3",
                      children: [
                        (0, t.jsx)(L, {
                          title: "SSK Maker Ecosystem — Maker Fellow",
                          defaultOpen: !0,
                          children: (0, t.jsx)(g, {
                            company: "SSK Maker Ecosystem",
                            role: "Maker Fellow",
                            period: "AUG 2025 — PRESENT",
                            description:
                              "Leading IoT research and mentoring student makers in embedded C++ and PCB design. Building the next generation of hardware startups in Kerala.",
                            tags: [
                              "Embedded C++",
                              "PCB Design",
                              "Mentorship",
                              "IoT",
                            ],
                          }),
                        }),
                        (0, t.jsx)(L, {
                          title: "CLAW Labs — Founder & Developer",
                          children: (0, t.jsx)(g, {
                            company: "CLAW Labs",
                            role: "Founder · Developer",
                            period: "2024 — 2025",
                            description:
                              "Developed high-performance firmware for custom portable hardware companion devices. Designed OLED animation libraries and ESP32-based systems.",
                            tags: ["Firmware", "Graphics", "ESP32", "OLED"],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("section", {
                  id: "education",
                  className: "mb-24",
                  children: [
                    (0, t.jsx)(_, { label: "./education" }),
                    (0, t.jsxs)("div", {
                      className: "space-y-3",
                      children: [
                        (0, t.jsx)(L, {
                          title: "SJCET Palai — B.Tech ECE",
                          defaultOpen: !0,
                          children: (0, t.jsx)(j, {}),
                        }),
                        (0, t.jsx)(L, {
                          title: "GHSS Kallooppara — Higher Secondary",
                          children: (0, t.jsx)("div", {
                            className: "ml-1",
                            children: (0, t.jsx)(g, {
                              company: "GHSS Kallooppara",
                              role: "Higher Secondary · Science",
                              period: "2019 — 2021",
                              tags: [
                                "Physics",
                                "Chemistry",
                                "Mathematics",
                                "Computer Science",
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("section", {
                  id: "projects",
                  className: "mb-24",
                  children: [
                    (0, t.jsx)(_, { label: "./projects" }),
                    (0, t.jsx)("div", {
                      className: "flex flex-col gap-5",
                      children: C.map((e) =>
                        (0, t.jsx)(
                          c,
                          {
                            title: e.title,
                            date: e.date,
                            description: e.description,
                            tags: e.tags,
                            githubUrl: e.githubUrl,
                            demoUrl: e.demoUrl,
                          },
                          e.title,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, t.jsxs)("section", {
                  id: "notes",
                  className: "mb-24",
                  children: [
                    (0, t.jsx)(_, { label: "./notes" }),
                    (0, t.jsx)("div", {
                      className: "flex flex-col",
                      children: M.map((e) =>
                        (0, t.jsxs)(
                          "a",
                          {
                            href: "#",
                            className:
                              "group flex items-center justify-between py-4 border-b border-white/5 hover:border-white/10 transition-all",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-sm font-medium text-zinc-300 group-hover:text-white transition-colors",
                                    children: e.title,
                                  }),
                                  (0, t.jsxs)("span", {
                                    className:
                                      "text-[11px] font-mono text-zinc-600",
                                    children: [e.date, " · ", e.read, " read"],
                                  }),
                                ],
                              }),
                              (0, t.jsx)("span", {
                                className:
                                  "text-zinc-600 group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all",
                                children: "→",
                              }),
                            ],
                          },
                          e.title,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, t.jsxs)("section", {
                  id: "contact",
                  className: "mb-24",
                  children: [
                    (0, t.jsx)(_, { label: "./contact" }),
                    (0, t.jsx)("p", {
                      className: "text-sm text-zinc-400 mb-8 leading-relaxed",
                      children:
                        "I'm always open to chatting about hardware, software, or new ideas. Whether it's a collaboration, a question, or just saying hi — my inbox is open.",
                    }),
                    (0, t.jsx)("div", {
                      className: "flex flex-wrap gap-3",
                      children: S.map((e) =>
                        (0, t.jsxs)(
                          "a",
                          {
                            href: e.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: `${e.label} - ${e.detail}`,
                            className:
                              "flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-all",
                            children: [
                              e.icon,
                              (0, t.jsx)("span", {
                                className: "text-xs font-medium",
                                children: e.label,
                              }),
                              (0, t.jsx)(r, {
                                className: "w-3 h-3 opacity-50",
                              }),
                            ],
                          },
                          e.label,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, t.jsx)("section", {
                  className: "mb-24",
                  children: (0, t.jsxs)("div", {
                    className:
                      "border border-white/5 rounded-2xl p-8 bg-white/5/30 text-center",
                    children: [
                      (0, t.jsx)("p", {
                        className:
                          "text-lg font-medium text-zinc-300 leading-relaxed italic mb-3",
                        children:
                          '"I was not born with a whole lot of natural talent... but I work hard and I never give up."',
                      }),
                      (0, t.jsx)("span", {
                        className: "text-xs font-mono text-zinc-600",
                        children: "— Rock Lee",
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
      ],
      52683,
    );
  },
]);
