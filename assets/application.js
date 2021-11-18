window.onload = function () {
if (localStorage.getItem("hasCodeRunBefore") === null) {
if (
    ((function (t, e) {
        "object" == typeof module && "object" == typeof module.exports
            ? (module.exports = t.document
                  ? e(t, !0)
                  : function (t) {
                        if (!t.document) throw new Error("jQuery requires a window with a document");
                        return e(t);
                    })
            : e(t);
    })("undefined" != typeof window ? window : this, function (t, e) {
        function n(t) {
            var e = t.length,
                n = oe.type(t);
            return "function" === n || oe.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t);
        }
        function i(t, e, n) {
            if (oe.isFunction(e))
                return oe.grep(t, function (t, i) {
                    return !!e.call(t, i, t) !== n;
                });
            if (e.nodeType)
                return oe.grep(t, function (t) {
                    return (t === e) !== n;
                });
            if ("string" == typeof e) {
                if (he.test(e)) return oe.filter(e, t, n);
                e = oe.filter(e, t);
            }
            return oe.grep(t, function (t) {
                return oe.inArray(t, e) >= 0 !== n;
            });
        }
        function o(t, e) {
            do t = t[e];
            while (t && 1 !== t.nodeType);
            return t;
        }
        function r(t) {
            var e = (we[t] = {});
            return (
                oe.each(t.match(be) || [], function (t, n) {
                    e[n] = !0;
                }),
                e
            );
        }
        function s() {
            fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), t.detachEvent("onload", a));
        }
        function a() {
            (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (s(), oe.ready());
        }
        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace($e, "-$1").toLowerCase();
                if (((n = t.getAttribute(i)), "string" == typeof n)) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? oe.parseJSON(n) : n;
                    } catch (o) {}
                    oe.data(t, e, n);
                } else n = void 0;
            }
            return n;
        }
        function c(t) {
            var e;
            for (e in t) if (("data" !== e || !oe.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0;
        }
        function u(t, e, n, i) {
            if (oe.acceptData(t)) {
                var o,
                    r,
                    s = oe.expando,
                    a = t.nodeType,
                    l = a ? oe.cache : t,
                    c = a ? t[s] : t[s] && s;
                if ((c && l[c] && (i || l[c].data)) || void 0 !== n || "string" != typeof e)
                    return (
                        c || (c = a ? (t[s] = Q.pop() || oe.guid++) : s),
                        l[c] || (l[c] = a ? {} : { toJSON: oe.noop }),
                        ("object" == typeof e || "function" == typeof e) && (i ? (l[c] = oe.extend(l[c], e)) : (l[c].data = oe.extend(l[c].data, e))),
                        (r = l[c]),
                        i || (r.data || (r.data = {}), (r = r.data)),
                        void 0 !== n && (r[oe.camelCase(e)] = n),
                        "string" == typeof e ? ((o = r[e]), null == o && (o = r[oe.camelCase(e)])) : (o = r),
                        o
                    );
            }
        }
        function d(t, e, n) {
            if (oe.acceptData(t)) {
                var i,
                    o,
                    r = t.nodeType,
                    s = r ? oe.cache : t,
                    a = r ? t[oe.expando] : oe.expando;
                if (s[a]) {
                    if (e && (i = n ? s[a] : s[a].data)) {
                        oe.isArray(e) ? (e = e.concat(oe.map(e, oe.camelCase))) : e in i ? (e = [e]) : ((e = oe.camelCase(e)), (e = e in i ? [e] : e.split(" "))), (o = e.length);
                        for (; o--; ) delete i[e[o]];
                        if (n ? !c(i) : !oe.isEmptyObject(i)) return;
                    }
                    (n || (delete s[a].data, c(s[a]))) && (r ? oe.cleanData([t], !0) : ne.deleteExpando || s != s.window ? delete s[a] : (s[a] = null));
                }
            }
        }
        function h() {
            return !0;
        }
        function p() {
            return !1;
        }
        function f() {
            try {
                return fe.activeElement;
            } catch (t) {}
        }
        function m(t) {
            var e = _e.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement) for (; e.length; ) n.createElement(e.pop());
            return n;
        }
        function g(t, e) {
            var n,
                i,
                o = 0,
                r = typeof t.getElementsByTagName !== Ce ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ce ? t.querySelectorAll(e || "*") : void 0;
            if (!r) for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || oe.nodeName(i, e) ? r.push(i) : oe.merge(r, g(i, e));
            return void 0 === e || (e && oe.nodeName(t, e)) ? oe.merge([t], r) : r;
        }
        function v(t) {
            je.test(t.type) && (t.defaultChecked = t.checked);
        }
        function y(t, e) {
            return oe.nodeName(t, "table") && oe.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
        }
        function b(t) {
            return (t.type = (null !== oe.find.attr(t, "type")) + "/" + t.type), t;
        }
        function w(t) {
            var e = Ve.exec(t.type);
            return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
        }
        function x(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) oe._data(n, "globalEval", !e || oe._data(e[i], "globalEval"));
        }
        function T(t, e) {
            if (1 === e.nodeType && oe.hasData(t)) {
                var n,
                    i,
                    o,
                    r = oe._data(t),
                    s = oe._data(e, r),
                    a = r.events;
                if (a) {
                    delete s.handle, (s.events = {});
                    for (n in a) for (i = 0, o = a[n].length; o > i; i++) oe.event.add(e, n, a[n][i]);
                }
                s.data && (s.data = oe.extend({}, s.data));
            }
        }
        function C(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (((n = e.nodeName.toLowerCase()), !ne.noCloneEvent && e[oe.expando])) {
                    o = oe._data(e);
                    for (i in o.events) oe.removeEvent(e, i, o.handle);
                    e.removeAttribute(oe.expando);
                }
                "script" === n && e.text !== t.text
                    ? ((b(e).text = t.text), w(e))
                    : "object" === n
                    ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !oe.trim(e.innerHTML) && (e.innerHTML = t.innerHTML))
                    : "input" === n && je.test(t.type)
                    ? ((e.defaultChecked = e.checked = t.checked), e.value !== t.value && (e.value = t.value))
                    : "option" === n
                    ? (e.defaultSelected = e.selected = t.defaultSelected)
                    : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue);
            }
        }
        function E(e, n) {
            var i,
                o = oe(n.createElement(e)).appendTo(n.body),
                r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : oe.css(o[0], "display");
            return o.detach(), r;
        }
        function $(t) {
            var e = fe,
                n = Ze[t];
            return (
                n ||
                    ((n = E(t, e)),
                    ("none" !== n && n) ||
                        ((Ke = (Ke || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement)), (e = (Ke[0].contentWindow || Ke[0].contentDocument).document), e.write(), e.close(), (n = E(t, e)), Ke.detach()),
                    (Ze[t] = n)),
                n
            );
        }
        function k(t, e) {
            return {
                get: function () {
                    var n = t();
                    if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments);
                },
            };
        }
        function S(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = pn.length; o--; ) if (((e = pn[o] + n), e in t)) return e;
            return i;
        }
        function N(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)
                (i = t[s]),
                    i.style &&
                        ((r[s] = oe._data(i, "olddisplay")),
                        (n = i.style.display),
                        e
                            ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ne(i) && (r[s] = oe._data(i, "olddisplay", $(i.nodeName))))
                            : ((o = Ne(i)), ((n && "none" !== n) || !o) && oe._data(i, "olddisplay", o ? n : oe.css(i, "display"))));
            for (s = 0; a > s; s++) (i = t[s]), i.style && ((e && "none" !== i.style.display && "" !== i.style.display) || (i.style.display = e ? r[s] || "" : "none"));
            return t;
        }
        function D(t, e, n) {
            var i = cn.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e;
        }
        function j(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2)
                "margin" === n && (s += oe.css(t, n + Se[r], !0, o)),
                    i
                        ? ("content" === n && (s -= oe.css(t, "padding" + Se[r], !0, o)), "margin" !== n && (s -= oe.css(t, "border" + Se[r] + "Width", !0, o)))
                        : ((s += oe.css(t, "padding" + Se[r], !0, o)), "padding" !== n && (s += oe.css(t, "border" + Se[r] + "Width", !0, o)));
            return s;
        }
        function A(t, e, n) {
            var i = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = tn(t),
                s = ne.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (((o = en(t, e, r)), (0 > o || null == o) && (o = t.style[e]), on.test(o))) return o;
                (i = s && (ne.boxSizingReliable() || o === t.style[e])), (o = parseFloat(o) || 0);
            }
            return o + j(t, e, n || (s ? "border" : "content"), i, r) + "px";
        }
        function L(t, e, n, i, o) {
            return new L.prototype.init(t, e, n, i, o);
        }
        function H() {
            return (
                setTimeout(function () {
                    fn = void 0;
                }),
                (fn = oe.now())
            );
        }
        function O(t, e) {
            var n,
                i = { height: t },
                o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) (n = Se[o]), (i["margin" + n] = i["padding" + n] = t);
            return e && (i.opacity = i.width = t), i;
        }
        function F(t, e, n) {
            for (var i, o = (wn[e] || []).concat(wn["*"]), r = 0, s = o.length; s > r; r++) if ((i = o[r].call(n, e, t))) return i;
        }
        function _(t, e, n) {
            var i,
                o,
                r,
                s,
                a,
                l,
                c,
                u,
                d = this,
                h = {},
                p = t.style,
                f = t.nodeType && Ne(t),
                m = oe._data(t, "fxshow");
            n.queue ||
                ((a = oe._queueHooks(t, "fx")),
                null == a.unqueued &&
                    ((a.unqueued = 0),
                    (l = a.empty.fire),
                    (a.empty.fire = function () {
                        a.unqueued || l();
                    })),
                a.unqueued++,
                d.always(function () {
                    d.always(function () {
                        a.unqueued--, oe.queue(t, "fx").length || a.empty.fire();
                    });
                })),
                1 === t.nodeType &&
                    ("height" in e || "width" in e) &&
                    ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                    (c = oe.css(t, "display")),
                    (u = "none" === c ? oe._data(t, "olddisplay") || $(t.nodeName) : c),
                    "inline" === u && "none" === oe.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== $(t.nodeName) ? (p.zoom = 1) : (p.display = "inline-block"))),
                n.overflow &&
                    ((p.overflow = "hidden"),
                    ne.shrinkWrapBlocks() ||
                        d.always(function () {
                            (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                        }));
            for (i in e)
                if (((o = e[i]), gn.exec(o))) {
                    if ((delete e[i], (r = r || "toggle" === o), o === (f ? "hide" : "show"))) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        f = !0;
                    }
                    h[i] = (m && m[i]) || oe.style(t, i);
                } else c = void 0;
            if (oe.isEmptyObject(h)) "inline" === ("none" === c ? $(t.nodeName) : c) && (p.display = c);
            else {
                m ? "hidden" in m && (f = m.hidden) : (m = oe._data(t, "fxshow", {})),
                    r && (m.hidden = !f),
                    f
                        ? oe(t).show()
                        : d.done(function () {
                              oe(t).hide();
                          }),
                    d.done(function () {
                        var e;
                        oe._removeData(t, "fxshow");
                        for (e in h) oe.style(t, e, h[e]);
                    });
                for (i in h) (s = F(f ? m[i] : 0, i, d)), i in m || ((m[i] = s.start), f && ((s.end = s.start), (s.start = "width" === i || "height" === i ? 1 : 0)));
            }
        }
        function P(t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (((i = oe.camelCase(n)), (o = e[i]), (r = t[n]), oe.isArray(r) && ((o = r[1]), (r = t[n] = r[0])), n !== i && ((t[i] = r), delete t[n]), (s = oe.cssHooks[i]), s && "expand" in s)) {
                    (r = s.expand(r)), delete t[i];
                    for (n in r) n in t || ((t[n] = r[n]), (e[n] = o));
                } else e[i] = o;
        }
        function R(t, e, n) {
            var i,
                o,
                r = 0,
                s = bn.length,
                a = oe.Deferred().always(function () {
                    delete l.elem;
                }),
                l = function () {
                    if (o) return !1;
                    for (var e = fn || H(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                    return a.notifyWith(t, [c, r, n]), 1 > r && l ? n : (a.resolveWith(t, [c]), !1);
                },
                c = a.promise({
                    elem: t,
                    props: oe.extend({}, e),
                    opts: oe.extend(!0, { specialEasing: {} }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: fn || H(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var i = oe.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i;
                    },
                    stop: function (e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) c.tweens[n].run(1);
                        return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this;
                    },
                }),
                u = c.props;
            for (P(u, c.opts.specialEasing); s > r; r++) if ((i = bn[r].call(c, t, u, c.opts))) return i;
            return (
                oe.map(u, F, c),
                oe.isFunction(c.opts.start) && c.opts.start.call(t, c),
                oe.fx.timer(oe.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
                c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            );
        }
        function I(t) {
            return function (e, n) {
                "string" != typeof e && ((n = e), (e = "*"));
                var i,
                    o = 0,
                    r = e.toLowerCase().match(be) || [];
                if (oe.isFunction(n)) for (; (i = r[o++]); ) "+" === i.charAt(0) ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
            };
        }
        function q(t, e, n, i) {
            function o(a) {
                var l;
                return (
                    (r[a] = !0),
                    oe.each(t[a] || [], function (t, a) {
                        var c = a(e, n, i);
                        return "string" != typeof c || s || r[c] ? (s ? !(l = c) : void 0) : (e.dataTypes.unshift(c), o(c), !1);
                    }),
                    l
                );
            }
            var r = {},
                s = t === Un;
            return o(e.dataTypes[0]) || (!r["*"] && o("*"));
        }
        function M(t, e) {
            var n,
                i,
                o = oe.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && oe.extend(!0, t, n), t;
        }
        function W(t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o)
                for (s in a)
                    if (a[s] && a[s].test(o)) {
                        l.unshift(s);
                        break;
                    }
            if (l[0] in n) r = l[0];
            else {
                for (s in n) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        r = s;
                        break;
                    }
                    i || (i = s);
                }
                r = r || i;
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0;
        }
        function B(t, e, n, i) {
            var o,
                r,
                s,
                a,
                l,
                c = {},
                u = t.dataTypes.slice();
            if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (r = u.shift(); r; )
                if ((t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = r), (r = u.shift())))
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                        if (((s = c[l + " " + r] || c["* " + r]), !s))
                            for (o in c)
                                if (((a = o.split(" ")), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]]))) {
                                    s === !0 ? (s = c[o]) : c[o] !== !0 && ((r = a[0]), u.unshift(a[1]));
                                    break;
                                }
                        if (s !== !0)
                            if (s && t["throws"]) e = s(e);
                            else
                                try {
                                    e = s(e);
                                } catch (d) {
                                    return { state: "parsererror", error: s ? d : "No conversion from " + l + " to " + r };
                                }
                    }
            return { state: "success", data: e };
        }
        function U(t, e, n, i) {
            var o;
            if (oe.isArray(e))
                oe.each(e, function (e, o) {
                    n || Qn.test(t) ? i(t, o) : U(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i);
                });
            else if (n || "object" !== oe.type(e)) i(t, e);
            else for (o in e) U(t + "[" + o + "]", e[o], n, i);
        }
        function z() {
            try {
                return new t.XMLHttpRequest();
            } catch (e) {}
        }
        function X() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
        function V(t) {
            return oe.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1;
        }
        var Q = [],
            G = Q.slice,
            J = Q.concat,
            Y = Q.push,
            K = Q.indexOf,
            Z = {},
            te = Z.toString,
            ee = Z.hasOwnProperty,
            ne = {},
            ie = "1.11.1",
            oe = function (t, e) {
                return new oe.fn.init(t, e);
            },
            re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            se = /^-ms-/,
            ae = /-([\da-z])/gi,
            le = function (t, e) {
                return e.toUpperCase();
            };
        (oe.fn = oe.prototype = {
            jquery: ie,
            constructor: oe,
            selector: "",
            length: 0,
            toArray: function () {
                return G.call(this);
            },
            get: function (t) {
                return null != t ? (0 > t ? this[t + this.length] : this[t]) : G.call(this);
            },
            pushStack: function (t) {
                var e = oe.merge(this.constructor(), t);
                return (e.prevObject = this), (e.context = this.context), e;
            },
            each: function (t, e) {
                return oe.each(this, t, e);
            },
            map: function (t) {
                return this.pushStack(
                    oe.map(this, function (e, n) {
                        return t.call(e, n, e);
                    })
                );
            },
            slice: function () {
                return this.pushStack(G.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor(null);
            },
            push: Y,
            sort: Q.sort,
            splice: Q.splice,
        }),
            (oe.extend = oe.fn.extend = function () {
                var t,
                    e,
                    n,
                    i,
                    o,
                    r,
                    s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === l && ((s = this), a--); l > a; a++)
                    if (null != (o = arguments[a]))
                        for (i in o)
                            (t = s[i]),
                                (n = o[i]),
                                s !== n &&
                                    (c && n && (oe.isPlainObject(n) || (e = oe.isArray(n)))
                                        ? (e ? ((e = !1), (r = t && oe.isArray(t) ? t : [])) : (r = t && oe.isPlainObject(t) ? t : {}), (s[i] = oe.extend(c, r, n)))
                                        : void 0 !== n && (s[i] = n));
                return s;
            }),
            oe.extend({
                expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                    throw new Error(t);
                },
                noop: function () {},
                isFunction: function (t) {
                    return "function" === oe.type(t);
                },
                isArray:
                    Array.isArray ||
                    function (t) {
                        return "array" === oe.type(t);
                    },
                isWindow: function (t) {
                    return null != t && t == t.window;
                },
                isNumeric: function (t) {
                    return !oe.isArray(t) && t - parseFloat(t) >= 0;
                },
                isEmptyObject: function (t) {
                    var e;
                    for (e in t) return !1;
                    return !0;
                },
                isPlainObject: function (t) {
                    var e;
                    if (!t || "object" !== oe.type(t) || t.nodeType || oe.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1;
                    } catch (n) {
                        return !1;
                    }
                    if (ne.ownLast) for (e in t) return ee.call(t, e);
                    for (e in t);
                    return void 0 === e || ee.call(t, e);
                },
                type: function (t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t;
                },
                globalEval: function (e) {
                    e &&
                        oe.trim(e) &&
                        (
                            t.execScript ||
                            function (e) {
                                t.eval.call(t, e);
                            }
                        )(e);
                },
                camelCase: function (t) {
                    return t.replace(se, "ms-").replace(ae, le);
                },
                nodeName: function (t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
                },
                each: function (t, e, i) {
                    var o,
                        r = 0,
                        s = t.length,
                        a = n(t);
                    if (i) {
                        if (a) for (; s > r && ((o = e.apply(t[r], i)), o !== !1); r++);
                        else for (r in t) if (((o = e.apply(t[r], i)), o === !1)) break;
                    } else if (a) for (; s > r && ((o = e.call(t[r], r, t[r])), o !== !1); r++);
                    else for (r in t) if (((o = e.call(t[r], r, t[r])), o === !1)) break;
                    return t;
                },
                trim: function (t) {
                    return null == t ? "" : (t + "").replace(re, "");
                },
                makeArray: function (t, e) {
                    var i = e || [];
                    return null != t && (n(Object(t)) ? oe.merge(i, "string" == typeof t ? [t] : t) : Y.call(i, t)), i;
                },
                inArray: function (t, e, n) {
                    var i;
                    if (e) {
                        if (K) return K.call(e, t, n);
                        for (i = e.length, n = n ? (0 > n ? Math.max(0, i + n) : n) : 0; i > n; n++) if (n in e && e[n] === t) return n;
                    }
                    return -1;
                },
                merge: function (t, e) {
                    for (var n = +e.length, i = 0, o = t.length; n > i; ) t[o++] = e[i++];
                    if (n !== n) for (; void 0 !== e[i]; ) t[o++] = e[i++];
                    return (t.length = o), t;
                },
                grep: function (t, e, n) {
                    for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++) (i = !e(t[r], r)), i !== a && o.push(t[r]);
                    return o;
                },
                map: function (t, e, i) {
                    var o,
                        r = 0,
                        s = t.length,
                        a = n(t),
                        l = [];
                    if (a) for (; s > r; r++) (o = e(t[r], r, i)), null != o && l.push(o);
                    else for (r in t) (o = e(t[r], r, i)), null != o && l.push(o);
                    return J.apply([], l);
                },
                guid: 1,
                proxy: function (t, e) {
                    var n, i, o;
                    return (
                        "string" == typeof e && ((o = t[e]), (e = t), (t = o)),
                        oe.isFunction(t)
                            ? ((n = G.call(arguments, 2)),
                              (i = function () {
                                  return t.apply(e || this, n.concat(G.call(arguments)));
                              }),
                              (i.guid = t.guid = t.guid || oe.guid++),
                              i)
                            : void 0
                    );
                },
                now: function () {
                    return +new Date();
                },
                support: ne,
            }),
            oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                Z["[object " + e + "]"] = e.toLowerCase();
            });
        var ce = (function (t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, c, d, p, f, m;
                if (((e ? e.ownerDocument || e : q) !== L && A(e), (e = e || L), (n = n || []), !t || "string" != typeof t)) return n;
                if (1 !== (a = e.nodeType) && 9 !== a) return [];
                if (O && !i) {
                    if ((o = ye.exec(t)))
                        if ((s = o[1])) {
                            if (9 === a) {
                                if (((r = e.getElementById(s)), !r || !r.parentNode)) return n;
                                if (r.id === s) return n.push(r), n;
                            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && R(e, r) && r.id === s) return n.push(r), n;
                        } else {
                            if (o[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = o[3]) && x.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(s)), n;
                        }
                    if (x.qsa && (!F || !F.test(t))) {
                        if (((p = d = I), (f = e), (m = 9 === a && t), 1 === a && "object" !== e.nodeName.toLowerCase())) {
                            for (c = $(t), (d = e.getAttribute("id")) ? (p = d.replace(we, "\\$&")) : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--; ) c[l] = p + h(c[l]);
                            (f = (be.test(t) && u(e.parentNode)) || e), (m = c.join(","));
                        }
                        if (m)
                            try {
                                return Z.apply(n, f.querySelectorAll(m)), n;
                            } catch (g) {
                            } finally {
                                d || e.removeAttribute("id");
                            }
                    }
                }
                return S(t.replace(le, "$1"), e, n, i);
            }
            function n() {
                function t(n, i) {
                    return e.push(n + " ") > T.cacheLength && delete t[e.shift()], (t[n + " "] = i);
                }
                var e = [];
                return t;
            }
            function i(t) {
                return (t[I] = !0), t;
            }
            function o(t) {
                var e = L.createElement("div");
                try {
                    return !!t(e);
                } catch (n) {
                    return !1;
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), (e = null);
                }
            }
            function r(t, e) {
                for (var n = t.split("|"), i = t.length; i--; ) T.attrHandle[n[i]] = e;
            }
            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
                if (i) return i;
                if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
                return t ? 1 : -1;
            }
            function a(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t;
                };
            }
            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t;
                };
            }
            function c(t) {
                return i(function (e) {
                    return (
                        (e = +e),
                        i(function (n, i) {
                            for (var o, r = t([], n.length, e), s = r.length; s--; ) n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
                        })
                    );
                });
            }
            function u(t) {
                return t && typeof t.getElementsByTagName !== V && t;
            }
            function d() {}
            function h(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i;
            }
            function p(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = W++;
                return e.first
                    ? function (e, n, r) {
                          for (; (e = e[i]); ) if (1 === e.nodeType || o) return t(e, n, r);
                      }
                    : function (e, n, s) {
                          var a,
                              l,
                              c = [M, r];
                          if (s) {
                              for (; (e = e[i]); ) if ((1 === e.nodeType || o) && t(e, n, s)) return !0;
                          } else
                              for (; (e = e[i]); )
                                  if (1 === e.nodeType || o) {
                                      if (((l = e[I] || (e[I] = {})), (a = l[i]) && a[0] === M && a[1] === r)) return (c[2] = a[2]);
                                      if (((l[i] = c), (c[2] = t(e, n, s)))) return !0;
                                  }
                      };
            }
            function f(t) {
                return t.length > 1
                    ? function (e, n, i) {
                          for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
                          return !0;
                      }
                    : t[0];
            }
            function m(t, n, i) {
                for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
                return i;
            }
            function g(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++) (r = t[a]) && (!n || n(r, i, o)) && (s.push(r), c && e.push(a));
                return s;
            }
            function v(t, e, n, o, r, s) {
                return (
                    o && !o[I] && (o = v(o)),
                    r && !r[I] && (r = v(r, s)),
                    i(function (i, s, a, l) {
                        var c,
                            u,
                            d,
                            h = [],
                            p = [],
                            f = s.length,
                            v = i || m(e || "*", a.nodeType ? [a] : a, []),
                            y = !t || (!i && e) ? v : g(v, h, t, a, l),
                            b = n ? (r || (i ? t : f || o) ? [] : s) : y;
                        if ((n && n(y, b, a, l), o)) for (c = g(b, p), o(c, [], a, l), u = c.length; u--; ) (d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                        if (i) {
                            if (r || t) {
                                if (r) {
                                    for (c = [], u = b.length; u--; ) (d = b[u]) && c.push((y[u] = d));
                                    r(null, (b = []), c, l);
                                }
                                for (u = b.length; u--; ) (d = b[u]) && (c = r ? ee.call(i, d) : h[u]) > -1 && (i[c] = !(s[c] = d));
                            }
                        } else (b = g(b === s ? b.splice(f, b.length) : b)), r ? r(null, s, b, l) : Z.apply(s, b);
                    })
                );
            }
            function y(t) {
                for (
                    var e,
                        n,
                        i,
                        o = t.length,
                        r = T.relative[t[0].type],
                        s = r || T.relative[" "],
                        a = r ? 1 : 0,
                        l = p(
                            function (t) {
                                return t === e;
                            },
                            s,
                            !0
                        ),
                        c = p(
                            function (t) {
                                return ee.call(e, t) > -1;
                            },
                            s,
                            !0
                        ),
                        u = [
                            function (t, n, i) {
                                return (!r && (i || n !== N)) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                            },
                        ];
                    o > a;
                    a++
                )
                    if ((n = T.relative[t[a].type])) u = [p(f(u), n)];
                    else {
                        if (((n = T.filter[t[a].type].apply(null, t[a].matches)), n[I])) {
                            for (i = ++a; o > i && !T.relative[t[i].type]; i++);
                            return v(a > 1 && f(u), a > 1 && h(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(le, "$1"), n, i > a && y(t.slice(a, i)), o > i && y((t = t.slice(i))), o > i && h(t));
                        }
                        u.push(n);
                    }
                return f(u);
            }
            function b(t, n) {
                var o = n.length > 0,
                    r = t.length > 0,
                    s = function (i, s, a, l, c) {
                        var u,
                            d,
                            h,
                            p = 0,
                            f = "0",
                            m = i && [],
                            v = [],
                            y = N,
                            b = i || (r && T.find.TAG("*", c)),
                            w = (M += null == y ? 1 : Math.random() || 0.1),
                            x = b.length;
                        for (c && (N = s !== L && s); f !== x && null != (u = b[f]); f++) {
                            if (r && u) {
                                for (d = 0; (h = t[d++]); )
                                    if (h(u, s, a)) {
                                        l.push(u);
                                        break;
                                    }
                                c && (M = w);
                            }
                            o && ((u = !h && u) && p--, i && m.push(u));
                        }
                        if (((p += f), o && f !== p)) {
                            for (d = 0; (h = n[d++]); ) h(m, v, s, a);
                            if (i) {
                                if (p > 0) for (; f--; ) m[f] || v[f] || (v[f] = Y.call(l));
                                v = g(v);
                            }
                            Z.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l);
                        }
                        return c && ((M = w), (N = y)), m;
                    };
                return o ? i(s) : s;
            }
            var w,
                x,
                T,
                C,
                E,
                $,
                k,
                S,
                N,
                D,
                j,
                A,
                L,
                H,
                O,
                F,
                _,
                P,
                R,
                I = "sizzle" + -new Date(),
                q = t.document,
                M = 0,
                W = 0,
                B = n(),
                U = n(),
                z = n(),
                X = function (t, e) {
                    return t === e && (j = !0), 0;
                },
                V = "undefined",
                Q = 1 << 31,
                G = {}.hasOwnProperty,
                J = [],
                Y = J.pop,
                K = J.push,
                Z = J.push,
                te = J.slice,
                ee =
                    J.indexOf ||
                    function (t) {
                        for (var e = 0, n = this.length; n > e; e++) if (this[e] === t) return e;
                        return -1;
                    },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ie = "[\\x20\\t\\r\\n\\f]",
                oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = oe.replace("w", "w#"),
                se = "\\[" + ie + "*(" + oe + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ie + "*\\]",
                ae = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
                le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                ce = new RegExp("^" + ie + "*," + ie + "*"),
                ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                he = new RegExp(ae),
                pe = new RegExp("^" + re + "$"),
                fe = {
                    ID: new RegExp("^#(" + oe + ")"),
                    CLASS: new RegExp("^\\.(" + oe + ")"),
                    TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + se),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i"),
                },
                me = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                we = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                Te = function (t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
                };
            try {
                Z.apply((J = te.call(q.childNodes)), q.childNodes), J[q.childNodes.length].nodeType;
            } catch (Ce) {
                Z = {
                    apply: J.length
                        ? function (t, e) {
                              K.apply(t, te.call(e));
                          }
                        : function (t, e) {
                              for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                              t.length = n - 1;
                          },
                };
            }
            (x = e.support = {}),
                (E = e.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1;
                }),
                (A = e.setDocument = function (t) {
                    var e,
                        n = t ? t.ownerDocument || t : q,
                        i = n.defaultView;
                    return n !== L && 9 === n.nodeType && n.documentElement
                        ? ((L = n),
                          (H = n.documentElement),
                          (O = !E(n)),
                          i &&
                              i !== i.top &&
                              (i.addEventListener
                                  ? i.addEventListener(
                                        "unload",
                                        function () {
                                            A();
                                        },
                                        !1
                                    )
                                  : i.attachEvent &&
                                    i.attachEvent("onunload", function () {
                                        A();
                                    })),
                          (x.attributes = o(function (t) {
                              return (t.className = "i"), !t.getAttribute("className");
                          })),
                          (x.getElementsByTagName = o(function (t) {
                              return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length;
                          })),
                          (x.getElementsByClassName =
                              ve.test(n.getElementsByClassName) &&
                              o(function (t) {
                                  return (t.innerHTML = "<div class='a'></div><div class='a i'></div>"), (t.firstChild.className = "i"), 2 === t.getElementsByClassName("i").length;
                              })),
                          (x.getById = o(function (t) {
                              return (H.appendChild(t).id = I), !n.getElementsByName || !n.getElementsByName(I).length;
                          })),
                          x.getById
                              ? ((T.find.ID = function (t, e) {
                                    if (typeof e.getElementById !== V && O) {
                                        var n = e.getElementById(t);
                                        return n && n.parentNode ? [n] : [];
                                    }
                                }),
                                (T.filter.ID = function (t) {
                                    var e = t.replace(xe, Te);
                                    return function (t) {
                                        return t.getAttribute("id") === e;
                                    };
                                }))
                              : (delete T.find.ID,
                                (T.filter.ID = function (t) {
                                    var e = t.replace(xe, Te);
                                    return function (t) {
                                        var n = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                                        return n && n.value === e;
                                    };
                                })),
                          (T.find.TAG = x.getElementsByTagName
                              ? function (t, e) {
                                    return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0;
                                }
                              : function (t, e) {
                                    var n,
                                        i = [],
                                        o = 0,
                                        r = e.getElementsByTagName(t);
                                    if ("*" === t) {
                                        for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                                        return i;
                                    }
                                    return r;
                                }),
                          (T.find.CLASS =
                              x.getElementsByClassName &&
                              function (t, e) {
                                  return typeof e.getElementsByClassName !== V && O ? e.getElementsByClassName(t) : void 0;
                              }),
                          (_ = []),
                          (F = []),
                          (x.qsa = ve.test(n.querySelectorAll)) &&
                              (o(function (t) {
                                  (t.innerHTML = "<select msallowclip=''><option selected=''></option></select>"),
                                      t.querySelectorAll("[msallowclip^='']").length && F.push("[*^$]=" + ie + "*(?:''|\"\")"),
                                      t.querySelectorAll("[selected]").length || F.push("\\[" + ie + "*(?:value|" + ne + ")"),
                                      t.querySelectorAll(":checked").length || F.push(":checked");
                              }),
                              o(function (t) {
                                  var e = n.createElement("input");
                                  e.setAttribute("type", "hidden"),
                                      t.appendChild(e).setAttribute("name", "D"),
                                      t.querySelectorAll("[name=d]").length && F.push("name" + ie + "*[*^$|!~]?="),
                                      t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                                      t.querySelectorAll("*,:x"),
                                      F.push(",.*:");
                              })),
                          (x.matchesSelector = ve.test((P = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector))) &&
                              o(function (t) {
                                  (x.disconnectedMatch = P.call(t, "div")), P.call(t, "[s!='']:x"), _.push("!=", ae);
                              }),
                          (F = F.length && new RegExp(F.join("|"))),
                          (_ = _.length && new RegExp(_.join("|"))),
                          (e = ve.test(H.compareDocumentPosition)),
                          (R =
                              e || ve.test(H.contains)
                                  ? function (t, e) {
                                        var n = 9 === t.nodeType ? t.documentElement : t,
                                            i = e && e.parentNode;
                                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
                                    }
                                  : function (t, e) {
                                        if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                        return !1;
                                    }),
                          (X = e
                              ? function (t, e) {
                                    if (t === e) return (j = !0), 0;
                                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                    return i
                                        ? i
                                        : ((i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1),
                                          1 & i || (!x.sortDetached && e.compareDocumentPosition(t) === i)
                                              ? t === n || (t.ownerDocument === q && R(q, t))
                                                  ? -1
                                                  : e === n || (e.ownerDocument === q && R(q, e))
                                                  ? 1
                                                  : D
                                                  ? ee.call(D, t) - ee.call(D, e)
                                                  : 0
                                              : 4 & i
                                              ? -1
                                              : 1);
                                }
                              : function (t, e) {
                                    if (t === e) return (j = !0), 0;
                                    var i,
                                        o = 0,
                                        r = t.parentNode,
                                        a = e.parentNode,
                                        l = [t],
                                        c = [e];
                                    if (!r || !a) return t === n ? -1 : e === n ? 1 : r ? -1 : a ? 1 : D ? ee.call(D, t) - ee.call(D, e) : 0;
                                    if (r === a) return s(t, e);
                                    for (i = t; (i = i.parentNode); ) l.unshift(i);
                                    for (i = e; (i = i.parentNode); ) c.unshift(i);
                                    for (; l[o] === c[o]; ) o++;
                                    return o ? s(l[o], c[o]) : l[o] === q ? -1 : c[o] === q ? 1 : 0;
                                }),
                          n)
                        : L;
                }),
                (e.matches = function (t, n) {
                    return e(t, null, null, n);
                }),
                (e.matchesSelector = function (t, n) {
                    if (((t.ownerDocument || t) !== L && A(t), (n = n.replace(de, "='$1']")), !(!x.matchesSelector || !O || (_ && _.test(n)) || (F && F.test(n)))))
                        try {
                            var i = P.call(t, n);
                            if (i || x.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return i;
                        } catch (o) {}
                    return e(n, L, null, [t]).length > 0;
                }),
                (e.contains = function (t, e) {
                    return (t.ownerDocument || t) !== L && A(t), R(t, e);
                }),
                (e.attr = function (t, e) {
                    (t.ownerDocument || t) !== L && A(t);
                    var n = T.attrHandle[e.toLowerCase()],
                        i = n && G.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !O) : void 0;
                    return void 0 !== i ? i : x.attributes || !O ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
                }),
                (e.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t);
                }),
                (e.uniqueSort = function (t) {
                    var e,
                        n = [],
                        i = 0,
                        o = 0;
                    if (((j = !x.detectDuplicates), (D = !x.sortStable && t.slice(0)), t.sort(X), j)) {
                        for (; (e = t[o++]); ) e === t[o] && (i = n.push(o));
                        for (; i--; ) t.splice(n[i], 1);
                    }
                    return (D = null), t;
                }),
                (C = e.getText = function (t) {
                    var e,
                        n = "",
                        i = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += C(t);
                        } else if (3 === o || 4 === o) return t.nodeValue;
                    } else for (; (e = t[i++]); ) n += C(e);
                    return n;
                }),
                (T = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        ATTR: function (t) {
                            return (t[1] = t[1].replace(xe, Te)), (t[3] = (t[3] || t[4] || t[5] || "").replace(xe, Te)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                        },
                        CHILD: function (t) {
                            return (
                                (t[1] = t[1].toLowerCase()),
                                "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && e.error(t[0]),
                                t
                            );
                        },
                        PSEUDO: function (t) {
                            var e,
                                n = !t[6] && t[2];
                            return fe.CHILD.test(t[0])
                                ? null
                                : (t[3] ? (t[2] = t[4] || t[5] || "") : n && he.test(n) && (e = $(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))), t.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(xe, Te).toLowerCase();
                            return "*" === t
                                ? function () {
                                      return !0;
                                  }
                                : function (t) {
                                      return t.nodeName && t.nodeName.toLowerCase() === e;
                                  };
                        },
                        CLASS: function (t) {
                            var e = B[t + " "];
                            return (
                                e ||
                                ((e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) &&
                                    B(t, function (t) {
                                        return e.test(("string" == typeof t.className && t.className) || (typeof t.getAttribute !== V && t.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function (t, n, i) {
                            return function (o) {
                                var r = e.attr(o, t);
                                return null == r
                                    ? "!=" === n
                                    : n
                                    ? ((r += ""),
                                      "=" === n
                                          ? r === i
                                          : "!=" === n
                                          ? r !== i
                                          : "^=" === n
                                          ? i && 0 === r.indexOf(i)
                                          : "*=" === n
                                          ? i && r.indexOf(i) > -1
                                          : "$=" === n
                                          ? i && r.slice(-i.length) === i
                                          : "~=" === n
                                          ? (" " + r + " ").indexOf(i) > -1
                                          : "|=" === n
                                          ? r === i || r.slice(0, i.length + 1) === i + "-"
                                          : !1)
                                    : !0;
                            };
                        },
                        CHILD: function (t, e, n, i, o) {
                            var r = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === o
                                ? function (t) {
                                      return !!t.parentNode;
                                  }
                                : function (e, n, l) {
                                      var c,
                                          u,
                                          d,
                                          h,
                                          p,
                                          f,
                                          m = r !== s ? "nextSibling" : "previousSibling",
                                          g = e.parentNode,
                                          v = a && e.nodeName.toLowerCase(),
                                          y = !l && !a;
                                      if (g) {
                                          if (r) {
                                              for (; m; ) {
                                                  for (d = e; (d = d[m]); ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                  f = m = "only" === t && !f && "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (((f = [s ? g.firstChild : g.lastChild]), s && y)) {
                                              for (u = g[I] || (g[I] = {}), c = u[t] || [], p = c[0] === M && c[1], h = c[0] === M && c[2], d = p && g.childNodes[p]; (d = (++p && d && d[m]) || (h = p = 0) || f.pop()); )
                                                  if (1 === d.nodeType && ++h && d === e) {
                                                      u[t] = [M, p, h];
                                                      break;
                                                  }
                                          } else if (y && (c = (e[I] || (e[I] = {}))[t]) && c[0] === M) h = c[1];
                                          else for (; (d = (++p && d && d[m]) || (h = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[I] || (d[I] = {}))[t] = [M, h]), d !== e)); );
                                          return (h -= o), h === i || (h % i === 0 && h / i >= 0);
                                      }
                                  };
                        },
                        PSEUDO: function (t, n) {
                            var o,
                                r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return r[I]
                                ? r(n)
                                : r.length > 1
                                ? ((o = [t, t, "", n]),
                                  T.setFilters.hasOwnProperty(t.toLowerCase())
                                      ? i(function (t, e) {
                                            for (var i, o = r(t, n), s = o.length; s--; ) (i = ee.call(t, o[s])), (t[i] = !(e[i] = o[s]));
                                        })
                                      : function (t) {
                                            return r(t, 0, o);
                                        })
                                : r;
                        },
                    },
                    pseudos: {
                        not: i(function (t) {
                            var e = [],
                                n = [],
                                o = k(t.replace(le, "$1"));
                            return o[I]
                                ? i(function (t, e, n, i) {
                                      for (var r, s = o(t, null, i, []), a = t.length; a--; ) (r = s[a]) && (t[a] = !(e[a] = r));
                                  })
                                : function (t, i, r) {
                                      return (e[0] = t), o(e, null, r, n), !n.pop();
                                  };
                        }),
                        has: i(function (t) {
                            return function (n) {
                                return e(t, n).length > 0;
                            };
                        }),
                        contains: i(function (t) {
                            return function (e) {
                                return (e.textContent || e.innerText || C(e)).indexOf(t) > -1;
                            };
                        }),
                        lang: i(function (t) {
                            return (
                                pe.test(t || "") || e.error("unsupported lang: " + t),
                                (t = t.replace(xe, Te).toLowerCase()),
                                function (e) {
                                    var n;
                                    do if ((n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (n = n.toLowerCase()), n === t || 0 === n.indexOf(t + "-");
                                    while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function (e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id;
                        },
                        root: function (t) {
                            return t === H;
                        },
                        focus: function (t) {
                            return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                        },
                        enabled: function (t) {
                            return t.disabled === !1;
                        },
                        disabled: function (t) {
                            return t.disabled === !0;
                        },
                        checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                        },
                        selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0;
                        },
                        empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (t) {
                            return !T.pseudos.empty(t);
                        },
                        header: function (t) {
                            return ge.test(t.nodeName);
                        },
                        input: function (t) {
                            return me.test(t.nodeName);
                        },
                        button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return ("input" === e && "button" === t.type) || "button" === e;
                        },
                        text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                        },
                        first: c(function () {
                            return [0];
                        }),
                        last: c(function (t, e) {
                            return [e - 1];
                        }),
                        eq: c(function (t, e, n) {
                            return [0 > n ? n + e : n];
                        }),
                        even: c(function (t, e) {
                            for (var n = 0; e > n; n += 2) t.push(n);
                            return t;
                        }),
                        odd: c(function (t, e) {
                            for (var n = 1; e > n; n += 2) t.push(n);
                            return t;
                        }),
                        lt: c(function (t, e, n) {
                            for (var i = 0 > n ? n + e : n; --i >= 0; ) t.push(i);
                            return t;
                        }),
                        gt: c(function (t, e, n) {
                            for (var i = 0 > n ? n + e : n; ++i < e; ) t.push(i);
                            return t;
                        }),
                    },
                }),
                (T.pseudos.nth = T.pseudos.eq);
            for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) T.pseudos[w] = a(w);
            for (w in { submit: !0, reset: !0 }) T.pseudos[w] = l(w);
            return (
                (d.prototype = T.filters = T.pseudos),
                (T.setFilters = new d()),
                ($ = e.tokenize = function (t, n) {
                    var i,
                        o,
                        r,
                        s,
                        a,
                        l,
                        c,
                        u = U[t + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (a = t, l = [], c = T.preFilter; a; ) {
                        (!i || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push((r = []))), (i = !1), (o = ue.exec(a)) && ((i = o.shift()), r.push({ value: i, type: o[0].replace(le, " ") }), (a = a.slice(i.length)));
                        for (s in T.filter) !(o = fe[s].exec(a)) || (c[s] && !(o = c[s](o))) || ((i = o.shift()), r.push({ value: i, type: s, matches: o }), (a = a.slice(i.length)));
                        if (!i) break;
                    }
                    return n ? a.length : a ? e.error(t) : U(t, l).slice(0);
                }),
                (k = e.compile = function (t, e) {
                    var n,
                        i = [],
                        o = [],
                        r = z[t + " "];
                    if (!r) {
                        for (e || (e = $(t)), n = e.length; n--; ) (r = y(e[n])), r[I] ? i.push(r) : o.push(r);
                        (r = z(t, b(o, i))), (r.selector = t);
                    }
                    return r;
                }),
                (S = e.select = function (t, e, n, i) {
                    var o,
                        r,
                        s,
                        a,
                        l,
                        c = "function" == typeof t && t,
                        d = !i && $((t = c.selector || t));
                    if (((n = n || []), 1 === d.length)) {
                        if (((r = d[0] = d[0].slice(0)), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && O && T.relative[r[1].type])) {
                            if (((e = (T.find.ID(s.matches[0].replace(xe, Te), e) || [])[0]), !e)) return n;
                            c && (e = e.parentNode), (t = t.slice(r.shift().value.length));
                        }
                        for (o = fe.needsContext.test(t) ? 0 : r.length; o-- && ((s = r[o]), !T.relative[(a = s.type)]); )
                            if ((l = T.find[a]) && (i = l(s.matches[0].replace(xe, Te), (be.test(r[0].type) && u(e.parentNode)) || e))) {
                                if ((r.splice(o, 1), (t = i.length && h(r)), !t)) return Z.apply(n, i), n;
                                break;
                            }
                    }
                    return (c || k(t, d))(i, e, !O, n, (be.test(t) && u(e.parentNode)) || e), n;
                }),
                (x.sortStable = I.split("").sort(X).join("") === I),
                (x.detectDuplicates = !!j),
                A(),
                (x.sortDetached = o(function (t) {
                    return 1 & t.compareDocumentPosition(L.createElement("div"));
                })),
                o(function (t) {
                    return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
                }) ||
                    r("type|href|height|width", function (t, e, n) {
                        return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                    }),
                (x.attributes &&
                    o(function (t) {
                        return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                    })) ||
                    r("value", function (t, e, n) {
                        return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue;
                    }),
                o(function (t) {
                    return null == t.getAttribute("disabled");
                }) ||
                    r(ne, function (t, e, n) {
                        var i;
                        return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
                    }),
                e
            );
        })(t);
        (oe.find = ce), (oe.expr = ce.selectors), (oe.expr[":"] = oe.expr.pseudos), (oe.unique = ce.uniqueSort), (oe.text = ce.getText), (oe.isXMLDoc = ce.isXML), (oe.contains = ce.contains);
        var ue = oe.expr.match.needsContext,
            de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            he = /^.[^:#\[\.,]*$/;
        (oe.filter = function (t, e, n) {
            var i = e[0];
            return (
                n && (t = ":not(" + t + ")"),
                1 === e.length && 1 === i.nodeType
                    ? oe.find.matchesSelector(i, t)
                        ? [i]
                        : []
                    : oe.find.matches(
                          t,
                          oe.grep(e, function (t) {
                              return 1 === t.nodeType;
                          })
                      )
            );
        }),
            oe.fn.extend({
                find: function (t) {
                    var e,
                        n = [],
                        i = this,
                        o = i.length;
                    if ("string" != typeof t)
                        return this.pushStack(
                            oe(t).filter(function () {
                                for (e = 0; o > e; e++) if (oe.contains(i[e], this)) return !0;
                            })
                        );
                    for (e = 0; o > e; e++) oe.find(t, i[e], n);
                    return (n = this.pushStack(o > 1 ? oe.unique(n) : n)), (n.selector = this.selector ? this.selector + " " + t : t), n;
                },
                filter: function (t) {
                    return this.pushStack(i(this, t || [], !1));
                },
                not: function (t) {
                    return this.pushStack(i(this, t || [], !0));
                },
                is: function (t) {
                    return !!i(this, "string" == typeof t && ue.test(t) ? oe(t) : t || [], !1).length;
                },
            });
        var pe,
            fe = t.document,
            me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ge = (oe.fn.init = function (t, e) {
                var n, i;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (((n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t)), !n || (!n[1] && e))) return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (((e = e instanceof oe ? e[0] : e), oe.merge(this, oe.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), de.test(n[1]) && oe.isPlainObject(e)))
                            for (n in e) oe.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this;
                    }
                    if (((i = fe.getElementById(n[2])), i && i.parentNode)) {
                        if (i.id !== n[2]) return pe.find(t);
                        (this.length = 1), (this[0] = i);
                    }
                    return (this.context = fe), (this.selector = t), this;
                }
                return t.nodeType
                    ? ((this.context = this[0] = t), (this.length = 1), this)
                    : oe.isFunction(t)
                    ? "undefined" != typeof pe.ready
                        ? pe.ready(t)
                        : t(oe)
                    : (void 0 !== t.selector && ((this.selector = t.selector), (this.context = t.context)), oe.makeArray(t, this));
            });
        (ge.prototype = oe.fn), (pe = oe(fe));
        var ve = /^(?:parents|prev(?:Until|All))/,
            ye = { children: !0, contents: !0, next: !0, prev: !0 };
        oe.extend({
            dir: function (t, e, n) {
                for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n)); ) 1 === o.nodeType && i.push(o), (o = o[e]);
                return i;
            },
            sibling: function (t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n;
            },
        }),
            oe.fn.extend({
                has: function (t) {
                    var e,
                        n = oe(t, this),
                        i = n.length;
                    return this.filter(function () {
                        for (e = 0; i > e; e++) if (oe.contains(this, n[e])) return !0;
                    });
                },
                closest: function (t, e) {
                    for (var n, i = 0, o = this.length, r = [], s = ue.test(t) || "string" != typeof t ? oe(t, e || this.context) : 0; o > i; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, t))) {
                                r.push(n);
                                break;
                            }
                    return this.pushStack(r.length > 1 ? oe.unique(r) : r);
                },
                index: function (t) {
                    return t ? ("string" == typeof t ? oe.inArray(this[0], oe(t)) : oe.inArray(t.jquery ? t[0] : t, this)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (t, e) {
                    return this.pushStack(oe.unique(oe.merge(this.get(), oe(t, e))));
                },
                addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                },
            }),
            oe.each(
                {
                    parent: function (t) {
                        var e = t.parentNode;
                        return e && 11 !== e.nodeType ? e : null;
                    },
                    parents: function (t) {
                        return oe.dir(t, "parentNode");
                    },
                    parentsUntil: function (t, e, n) {
                        return oe.dir(t, "parentNode", n);
                    },
                    next: function (t) {
                        return o(t, "nextSibling");
                    },
                    prev: function (t) {
                        return o(t, "previousSibling");
                    },
                    nextAll: function (t) {
                        return oe.dir(t, "nextSibling");
                    },
                    prevAll: function (t) {
                        return oe.dir(t, "previousSibling");
                    },
                    nextUntil: function (t, e, n) {
                        return oe.dir(t, "nextSibling", n);
                    },
                    prevUntil: function (t, e, n) {
                        return oe.dir(t, "previousSibling", n);
                    },
                    siblings: function (t) {
                        return oe.sibling((t.parentNode || {}).firstChild, t);
                    },
                    children: function (t) {
                        return oe.sibling(t.firstChild);
                    },
                    contents: function (t) {
                        return oe.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : oe.merge([], t.childNodes);
                    },
                },
                function (t, e) {
                    oe.fn[t] = function (n, i) {
                        var o = oe.map(this, e, n);
                        return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = oe.filter(i, o)), this.length > 1 && (ye[t] || (o = oe.unique(o)), ve.test(t) && (o = o.reverse())), this.pushStack(o);
                    };
                }
            );
        var be = /\S+/g,
            we = {};
        (oe.Callbacks = function (t) {
            t = "string" == typeof t ? we[t] || r(t) : oe.extend({}, t);
            var e,
                n,
                i,
                o,
                s,
                a,
                l = [],
                c = !t.once && [],
                u = function (r) {
                    for (n = t.memory && r, i = !0, s = a || 0, a = 0, o = l.length, e = !0; l && o > s; s++)
                        if (l[s].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                            n = !1;
                            break;
                        }
                    (e = !1), l && (c ? c.length && u(c.shift()) : n ? (l = []) : d.disable());
                },
                d = {
                    add: function () {
                        if (l) {
                            var i = l.length;
                            !(function r(e) {
                                oe.each(e, function (e, n) {
                                    var i = oe.type(n);
                                    "function" === i ? (t.unique && d.has(n)) || l.push(n) : n && n.length && "string" !== i && r(n);
                                });
                            })(arguments),
                                e ? (o = l.length) : n && ((a = i), u(n));
                        }
                        return this;
                    },
                    remove: function () {
                        return (
                            l &&
                                oe.each(arguments, function (t, n) {
                                    for (var i; (i = oe.inArray(n, l, i)) > -1; ) l.splice(i, 1), e && (o >= i && o--, s >= i && s--);
                                }),
                            this
                        );
                    },
                    has: function (t) {
                        return t ? oe.inArray(t, l) > -1 : !(!l || !l.length);
                    },
                    empty: function () {
                        return (l = []), (o = 0), this;
                    },
                    disable: function () {
                        return (l = c = n = void 0), this;
                    },
                    disabled: function () {
                        return !l;
                    },
                    lock: function () {
                        return (c = void 0), n || d.disable(), this;
                    },
                    locked: function () {
                        return !c;
                    },
                    fireWith: function (t, n) {
                        return !l || (i && !c) || ((n = n || []), (n = [t, n.slice ? n.slice() : n]), e ? c.push(n) : u(n)), this;
                    },
                    fire: function () {
                        return d.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!i;
                    },
                };
            return d;
        }),
            oe.extend({
                Deferred: function (t) {
                    var e = [
                            ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", oe.Callbacks("memory")],
                        ],
                        n = "pending",
                        i = {
                            state: function () {
                                return n;
                            },
                            always: function () {
                                return o.done(arguments).fail(arguments), this;
                            },
                            then: function () {
                                var t = arguments;
                                return oe
                                    .Deferred(function (n) {
                                        oe.each(e, function (e, r) {
                                            var s = oe.isFunction(t[e]) && t[e];
                                            o[r[1]](function () {
                                                var t = s && s.apply(this, arguments);
                                                t && oe.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments);
                                            });
                                        }),
                                            (t = null);
                                    })
                                    .promise();
                            },
                            promise: function (t) {
                                return null != t ? oe.extend(t, i) : i;
                            },
                        },
                        o = {};
                    return (
                        (i.pipe = i.then),
                        oe.each(e, function (t, r) {
                            var s = r[2],
                                a = r[3];
                            (i[r[1]] = s.add),
                                a &&
                                    s.add(
                                        function () {
                                            n = a;
                                        },
                                        e[1 ^ t][2].disable,
                                        e[2][2].lock
                                    ),
                                (o[r[0]] = function () {
                                    return o[r[0] + "With"](this === o ? i : this, arguments), this;
                                }),
                                (o[r[0] + "With"] = s.fireWith);
                        }),
                        i.promise(o),
                        t && t.call(o, o),
                        o
                    );
                },
                when: function (t) {
                    var e,
                        n,
                        i,
                        o = 0,
                        r = G.call(arguments),
                        s = r.length,
                        a = 1 !== s || (t && oe.isFunction(t.promise)) ? s : 0,
                        l = 1 === a ? t : oe.Deferred(),
                        c = function (t, n, i) {
                            return function (o) {
                                (n[t] = this), (i[t] = arguments.length > 1 ? G.call(arguments) : o), i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
                            };
                        };
                    if (s > 1) for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && oe.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, e)) : --a;
                    return a || l.resolveWith(i, r), l.promise();
                },
            });
        var xe;
        (oe.fn.ready = function (t) {
            return oe.ready.promise().done(t), this;
        }),
            oe.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (t) {
                    t ? oe.readyWait++ : oe.ready(!0);
                },
                ready: function (t) {
                    if (t === !0 ? !--oe.readyWait : !oe.isReady) {
                        if (!fe.body) return setTimeout(oe.ready);
                        (oe.isReady = !0), (t !== !0 && --oe.readyWait > 0) || (xe.resolveWith(fe, [oe]), oe.fn.triggerHandler && (oe(fe).triggerHandler("ready"), oe(fe).off("ready")));
                    }
                },
            }),
            (oe.ready.promise = function (e) {
                if (!xe)
                    if (((xe = oe.Deferred()), "complete" === fe.readyState)) setTimeout(oe.ready);
                    else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
                    else {
                        fe.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                        var n = !1;
                        try {
                            n = null == t.frameElement && fe.documentElement;
                        } catch (i) {}
                        n &&
                            n.doScroll &&
                            !(function o() {
                                if (!oe.isReady) {
                                    try {
                                        n.doScroll("left");
                                    } catch (t) {
                                        return setTimeout(o, 50);
                                    }
                                    s(), oe.ready();
                                }
                            })();
                    }
                return xe.promise(e);
            });
        var Te,
            Ce = "undefined";
        for (Te in oe(ne)) break;
        (ne.ownLast = "0" !== Te),
            (ne.inlineBlockNeedsLayout = !1),
            oe(function () {
                var t, e, n, i;
                (n = fe.getElementsByTagName("body")[0]),
                    n &&
                        n.style &&
                        ((e = fe.createElement("div")),
                        (i = fe.createElement("div")),
                        (i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                        n.appendChild(i).appendChild(e),
                        typeof e.style.zoom !== Ce && ((e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"), (ne.inlineBlockNeedsLayout = t = 3 === e.offsetWidth), t && (n.style.zoom = 1)),
                        n.removeChild(i));
            }),
            (function () {
                var t = fe.createElement("div");
                if (null == ne.deleteExpando) {
                    ne.deleteExpando = !0;
                    try {
                        delete t.test;
                    } catch (e) {
                        ne.deleteExpando = !1;
                    }
                }
                t = null;
            })(),
            (oe.acceptData = function (t) {
                var e = oe.noData[(t.nodeName + " ").toLowerCase()],
                    n = +t.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !e || (e !== !0 && t.getAttribute("classid") === e);
            });
        var Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            $e = /([A-Z])/g;
        oe.extend({
            cache: {},
            noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" },
            hasData: function (t) {
                return (t = t.nodeType ? oe.cache[t[oe.expando]] : t[oe.expando]), !!t && !c(t);
            },
            data: function (t, e, n) {
                return u(t, e, n);
            },
            removeData: function (t, e) {
                return d(t, e);
            },
            _data: function (t, e, n) {
                return u(t, e, n, !0);
            },
            _removeData: function (t, e) {
                return d(t, e, !0);
            },
        }),
            oe.fn.extend({
                data: function (t, e) {
                    var n,
                        i,
                        o,
                        r = this[0],
                        s = r && r.attributes;
                    if (void 0 === t) {
                        if (this.length && ((o = oe.data(r)), 1 === r.nodeType && !oe._data(r, "parsedAttrs"))) {
                            for (n = s.length; n--; ) s[n] && ((i = s[n].name), 0 === i.indexOf("data-") && ((i = oe.camelCase(i.slice(5))), l(r, i, o[i])));
                            oe._data(r, "parsedAttrs", !0);
                        }
                        return o;
                    }
                    return "object" == typeof t
                        ? this.each(function () {
                              oe.data(this, t);
                          })
                        : arguments.length > 1
                        ? this.each(function () {
                              oe.data(this, t, e);
                          })
                        : r
                        ? l(r, t, oe.data(r, t))
                        : void 0;
                },
                removeData: function (t) {
                    return this.each(function () {
                        oe.removeData(this, t);
                    });
                },
            }),
            oe.extend({
                queue: function (t, e, n) {
                    var i;
                    return t ? ((e = (e || "fx") + "queue"), (i = oe._data(t, e)), n && (!i || oe.isArray(n) ? (i = oe._data(t, e, oe.makeArray(n))) : i.push(n)), i || []) : void 0;
                },
                dequeue: function (t, e) {
                    e = e || "fx";
                    var n = oe.queue(t, e),
                        i = n.length,
                        o = n.shift(),
                        r = oe._queueHooks(t, e),
                        s = function () {
                            oe.dequeue(t, e);
                        };
                    "inprogress" === o && ((o = n.shift()), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire();
                },
                _queueHooks: function (t, e) {
                    var n = e + "queueHooks";
                    return (
                        oe._data(t, n) ||
                        oe._data(t, n, {
                            empty: oe.Callbacks("once memory").add(function () {
                                oe._removeData(t, e + "queue"), oe._removeData(t, n);
                            }),
                        })
                    );
                },
            }),
            oe.fn.extend({
                queue: function (t, e) {
                    var n = 2;
                    return (
                        "string" != typeof t && ((e = t), (t = "fx"), n--),
                        arguments.length < n
                            ? oe.queue(this[0], t)
                            : void 0 === e
                            ? this
                            : this.each(function () {
                                  var n = oe.queue(this, t, e);
                                  oe._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && oe.dequeue(this, t);
                              })
                    );
                },
                dequeue: function (t) {
                    return this.each(function () {
                        oe.dequeue(this, t);
                    });
                },
                clearQueue: function (t) {
                    return this.queue(t || "fx", []);
                },
                promise: function (t, e) {
                    var n,
                        i = 1,
                        o = oe.Deferred(),
                        r = this,
                        s = this.length,
                        a = function () {
                            --i || o.resolveWith(r, [r]);
                        };
                    for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; s--; ) (n = oe._data(r[s], t + "queueHooks")), n && n.empty && (i++, n.empty.add(a));
                    return a(), o.promise(e);
                },
            });
        var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Se = ["Top", "Right", "Bottom", "Left"],
            Ne = function (t, e) {
                return (t = e || t), "none" === oe.css(t, "display") || !oe.contains(t.ownerDocument, t);
            },
            De = (oe.access = function (t, e, n, i, o, r, s) {
                var a = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === oe.type(n)) {
                    o = !0;
                    for (a in n) oe.access(t, e, a, n[a], !0, r, s);
                } else if (
                    void 0 !== i &&
                    ((o = !0),
                    oe.isFunction(i) || (s = !0),
                    c &&
                        (s
                            ? (e.call(t, i), (e = null))
                            : ((c = e),
                              (e = function (t, e, n) {
                                  return c.call(oe(t), n);
                              }))),
                    e)
                )
                    for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : c ? e.call(t) : l ? e(t[0], n) : r;
            }),
            je = /^(?:checkbox|radio)$/i;
        !(function () {
            var t = fe.createElement("input"),
                e = fe.createElement("div"),
                n = fe.createDocumentFragment();
            if (
                ((e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (ne.leadingWhitespace = 3 === e.firstChild.nodeType),
                (ne.tbody = !e.getElementsByTagName("tbody").length),
                (ne.htmlSerialize = !!e.getElementsByTagName("link").length),
                (ne.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML),
                (t.type = "checkbox"),
                (t.checked = !0),
                n.appendChild(t),
                (ne.appendChecked = t.checked),
                (e.innerHTML = "<textarea>x</textarea>"),
                (ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
                n.appendChild(e),
                (e.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
                (ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (ne.noCloneEvent = !0),
                e.attachEvent &&
                    (e.attachEvent("onclick", function () {
                        ne.noCloneEvent = !1;
                    }),
                    e.cloneNode(!0).click()),
                null == ne.deleteExpando)
            ) {
                ne.deleteExpando = !0;
                try {
                    delete e.test;
                } catch (i) {
                    ne.deleteExpando = !1;
                }
            }
        })(),
            (function () {
                var e,
                    n,
                    i = fe.createElement("div");
                for (e in { submit: !0, change: !0, focusin: !0 }) (n = "on" + e), (ne[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), (ne[e + "Bubbles"] = i.attributes[n].expando === !1));
                i = null;
            })();
        var Ae = /^(?:input|select|textarea)$/i,
            Le = /^key/,
            He = /^(?:mouse|pointer|contextmenu)|click/,
            Oe = /^(?:focusinfocus|focusoutblur)$/,
            Fe = /^([^.]*)(?:\.(.+)|)$/;
        (oe.event = {
            global: {},
            add: function (t, e, n, i, o) {
                var r,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    h,
                    p,
                    f,
                    m,
                    g = oe._data(t);
                if (g) {
                    for (
                        n.handler && ((l = n), (n = l.handler), (o = l.selector)),
                            n.guid || (n.guid = oe.guid++),
                            (s = g.events) || (s = g.events = {}),
                            (u = g.handle) ||
                                ((u = g.handle = function (t) {
                                    return typeof oe === Ce || (t && oe.event.triggered === t.type) ? void 0 : oe.event.dispatch.apply(u.elem, arguments);
                                }),
                                (u.elem = t)),
                            e = (e || "").match(be) || [""],
                            a = e.length;
                        a--;

                    )
                        (r = Fe.exec(e[a]) || []),
                            (p = m = r[1]),
                            (f = (r[2] || "").split(".").sort()),
                            p &&
                                ((c = oe.event.special[p] || {}),
                                (p = (o ? c.delegateType : c.bindType) || p),
                                (c = oe.event.special[p] || {}),
                                (d = oe.extend({ type: p, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && oe.expr.match.needsContext.test(o), namespace: f.join(".") }, l)),
                                (h = s[p]) || ((h = s[p] = []), (h.delegateCount = 0), (c.setup && c.setup.call(t, i, f, u) !== !1) || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))),
                                c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)),
                                o ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                                (oe.event.global[p] = !0));
                    t = null;
                }
            },
            remove: function (t, e, n, i, o) {
                var r,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    h,
                    p,
                    f,
                    m,
                    g = oe.hasData(t) && oe._data(t);
                if (g && (u = g.events)) {
                    for (e = (e || "").match(be) || [""], c = e.length; c--; )
                        if (((a = Fe.exec(e[c]) || []), (p = m = a[1]), (f = (a[2] || "").split(".").sort()), p)) {
                            for (d = oe.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = h.length; r--; )
                                (s = h[r]),
                                    (!o && m !== s.origType) ||
                                        (n && n.guid !== s.guid) ||
                                        (a && !a.test(s.namespace)) ||
                                        (i && i !== s.selector && ("**" !== i || !s.selector)) ||
                                        (h.splice(r, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(t, s));
                            l && !h.length && ((d.teardown && d.teardown.call(t, f, g.handle) !== !1) || oe.removeEvent(t, p, g.handle), delete u[p]);
                        } else for (p in u) oe.event.remove(t, p + e[c], n, i, !0);
                    oe.isEmptyObject(u) && (delete g.handle, oe._removeData(t, "events"));
                }
            },
            trigger: function (e, n, i, o) {
                var r,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    h = [i || fe],
                    p = ee.call(e, "type") ? e.type : e,
                    f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
                if (
                    ((a = u = i = i || fe),
                    3 !== i.nodeType &&
                        8 !== i.nodeType &&
                        !Oe.test(p + oe.event.triggered) &&
                        (p.indexOf(".") >= 0 && ((f = p.split(".")), (p = f.shift()), f.sort()),
                        (s = p.indexOf(":") < 0 && "on" + p),
                        (e = e[oe.expando] ? e : new oe.Event(p, "object" == typeof e && e)),
                        (e.isTrigger = o ? 2 : 3),
                        (e.namespace = f.join(".")),
                        (e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                        (e.result = void 0),
                        e.target || (e.target = i),
                        (n = null == n ? [e] : oe.makeArray(n, [e])),
                        (c = oe.event.special[p] || {}),
                        o || !c.trigger || c.trigger.apply(i, n) !== !1))
                ) {
                    if (!o && !c.noBubble && !oe.isWindow(i)) {
                        for (l = c.delegateType || p, Oe.test(l + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), (u = a);
                        u === (i.ownerDocument || fe) && h.push(u.defaultView || u.parentWindow || t);
                    }
                    for (d = 0; (a = h[d++]) && !e.isPropagationStopped(); )
                        (e.type = d > 1 ? l : c.bindType || p),
                            (r = (oe._data(a, "events") || {})[e.type] && oe._data(a, "handle")),
                            r && r.apply(a, n),
                            (r = s && a[s]),
                            r && r.apply && oe.acceptData(a) && ((e.result = r.apply(a, n)), e.result === !1 && e.preventDefault());
                    if (((e.type = p), !o && !e.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && oe.acceptData(i) && s && i[p] && !oe.isWindow(i))) {
                        (u = i[s]), u && (i[s] = null), (oe.event.triggered = p);
                        try {
                            i[p]();
                        } catch (m) {}
                        (oe.event.triggered = void 0), u && (i[s] = u);
                    }
                    return e.result;
                }
            },
            dispatch: function (t) {
                t = oe.event.fix(t);
                var e,
                    n,
                    i,
                    o,
                    r,
                    s = [],
                    a = G.call(arguments),
                    l = (oe._data(this, "events") || {})[t.type] || [],
                    c = oe.event.special[t.type] || {};
                if (((a[0] = t), (t.delegateTarget = this), !c.preDispatch || c.preDispatch.call(this, t) !== !1)) {
                    for (s = oe.event.handlers.call(this, t, l), e = 0; (o = s[e++]) && !t.isPropagationStopped(); )
                        for (t.currentTarget = o.elem, r = 0; (i = o.handlers[r++]) && !t.isImmediatePropagationStopped(); )
                            (!t.namespace_re || t.namespace_re.test(i.namespace)) &&
                                ((t.handleObj = i), (t.data = i.data), (n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a)), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result;
                }
            },
            handlers: function (t, e) {
                var n,
                    i,
                    o,
                    r,
                    s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (o = [], r = 0; a > r; r++) (i = e[r]), (n = i.selector + " "), void 0 === o[n] && (o[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), o[n] && o.push(i);
                            o.length && s.push({ elem: l, handlers: o });
                        }
                return a < e.length && s.push({ elem: this, handlers: e.slice(a) }), s;
            },
            fix: function (t) {
                if (t[oe.expando]) return t;
                var e,
                    n,
                    i,
                    o = t.type,
                    r = t,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = He.test(o) ? this.mouseHooks : Le.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new oe.Event(r), e = i.length; e--; ) (n = i[e]), (t[n] = r[n]);
                return t.target || (t.target = r.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), (t.metaKey = !!t.metaKey), s.filter ? s.filter(t, r) : t;
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
                },
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var n,
                        i,
                        o,
                        r = e.button,
                        s = e.fromElement;
                    return (
                        null == t.pageX &&
                            null != e.clientX &&
                            ((i = t.target.ownerDocument || fe),
                            (o = i.documentElement),
                            (n = i.body),
                            (t.pageX = e.clientX + ((o && o.scrollLeft) || (n && n.scrollLeft) || 0) - ((o && o.clientLeft) || (n && n.clientLeft) || 0)),
                            (t.pageY = e.clientY + ((o && o.scrollTop) || (n && n.scrollTop) || 0) - ((o && o.clientTop) || (n && n.clientTop) || 0))),
                        !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s),
                        t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                        t
                    );
                },
            },
            special: {
                load: { noBubble: !0 },
                focus: {
                    trigger: function () {
                        if (this !== f() && this.focus)
                            try {
                                return this.focus(), !1;
                            } catch (t) {}
                    },
                    delegateType: "focusin",
                },
                blur: {
                    trigger: function () {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0;
                    },
                    delegateType: "focusout",
                },
                click: {
                    trigger: function () {
                        return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
                    },
                    _default: function (t) {
                        return oe.nodeName(t.target, "a");
                    },
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                    },
                },
            },
            simulate: function (t, e, n, i) {
                var o = oe.extend(new oe.Event(), n, { type: t, isSimulated: !0, originalEvent: {} });
                i ? oe.event.trigger(o, null, e) : oe.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault();
            },
        }),
            (oe.removeEvent = fe.removeEventListener
                ? function (t, e, n) {
                      t.removeEventListener && t.removeEventListener(e, n, !1);
                  }
                : function (t, e, n) {
                      var i = "on" + e;
                      t.detachEvent && (typeof t[i] === Ce && (t[i] = null), t.detachEvent(i, n));
                  }),
            (oe.Event = function (t, e) {
                return this instanceof oe.Event
                    ? (t && t.type ? ((this.originalEvent = t), (this.type = t.type), (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && t.returnValue === !1) ? h : p)) : (this.type = t),
                      e && oe.extend(this, e),
                      (this.timeStamp = (t && t.timeStamp) || oe.now()),
                      void (this[oe.expando] = !0))
                    : new oe.Event(t, e);
            }),
            (oe.Event.prototype = {
                isDefaultPrevented: p,
                isPropagationStopped: p,
                isImmediatePropagationStopped: p,
                preventDefault: function () {
                    var t = this.originalEvent;
                    (this.isDefaultPrevented = h), t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    (this.isPropagationStopped = h), t && (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    (this.isImmediatePropagationStopped = h), t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation();
                },
            }),
            oe.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
                oe.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function (t) {
                        var n,
                            i = this,
                            o = t.relatedTarget,
                            r = t.handleObj;
                        return (!o || (o !== i && !oe.contains(i, o))) && ((t.type = r.origType), (n = r.handler.apply(this, arguments)), (t.type = e)), n;
                    },
                };
            }),
            ne.submitBubbles ||
                (oe.event.special.submit = {
                    setup: function () {
                        return oe.nodeName(this, "form")
                            ? !1
                            : void oe.event.add(this, "click._submit keypress._submit", function (t) {
                                  var e = t.target,
                                      n = oe.nodeName(e, "input") || oe.nodeName(e, "button") ? e.form : void 0;
                                  n &&
                                      !oe._data(n, "submitBubbles") &&
                                      (oe.event.add(n, "submit._submit", function (t) {
                                          t._submit_bubble = !0;
                                      }),
                                      oe._data(n, "submitBubbles", !0));
                              });
                    },
                    postDispatch: function (t) {
                        t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && oe.event.simulate("submit", this.parentNode, t, !0));
                    },
                    teardown: function () {
                        return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit");
                    },
                }),
            ne.changeBubbles ||
                (oe.event.special.change = {
                    setup: function () {
                        return Ae.test(this.nodeName)
                            ? (("checkbox" === this.type || "radio" === this.type) &&
                                  (oe.event.add(this, "propertychange._change", function (t) {
                                      "checked" === t.originalEvent.propertyName && (this._just_changed = !0);
                                  }),
                                  oe.event.add(this, "click._change", function (t) {
                                      this._just_changed && !t.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, t, !0);
                                  })),
                              !1)
                            : void oe.event.add(this, "beforeactivate._change", function (t) {
                                  var e = t.target;
                                  Ae.test(e.nodeName) &&
                                      !oe._data(e, "changeBubbles") &&
                                      (oe.event.add(e, "change._change", function (t) {
                                          !this.parentNode || t.isSimulated || t.isTrigger || oe.event.simulate("change", this.parentNode, t, !0);
                                      }),
                                      oe._data(e, "changeBubbles", !0));
                              });
                    },
                    handle: function (t) {
                        var e = t.target;
                        return this !== e || t.isSimulated || t.isTrigger || ("radio" !== e.type && "checkbox" !== e.type) ? t.handleObj.handler.apply(this, arguments) : void 0;
                    },
                    teardown: function () {
                        return oe.event.remove(this, "._change"), !Ae.test(this.nodeName);
                    },
                }),
            ne.focusinBubbles ||
                oe.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                    var n = function (t) {
                        oe.event.simulate(e, t.target, oe.event.fix(t), !0);
                    };
                    oe.event.special[e] = {
                        setup: function () {
                            var i = this.ownerDocument || this,
                                o = oe._data(i, e);
                            o || i.addEventListener(t, n, !0), oe._data(i, e, (o || 0) + 1);
                        },
                        teardown: function () {
                            var i = this.ownerDocument || this,
                                o = oe._data(i, e) - 1;
                            o ? oe._data(i, e, o) : (i.removeEventListener(t, n, !0), oe._removeData(i, e));
                        },
                    };
                }),
            oe.fn.extend({
                on: function (t, e, n, i, o) {
                    var r, s;
                    if ("object" == typeof t) {
                        "string" != typeof e && ((n = n || e), (e = void 0));
                        for (r in t) this.on(r, e, n, t[r], o);
                        return this;
                    }
                    if ((null == n && null == i ? ((i = e), (n = e = void 0)) : null == i && ("string" == typeof e ? ((i = n), (n = void 0)) : ((i = n), (n = e), (e = void 0))), i === !1)) i = p;
                    else if (!i) return this;
                    return (
                        1 === o &&
                            ((s = i),
                            (i = function (t) {
                                return oe().off(t), s.apply(this, arguments);
                            }),
                            (i.guid = s.guid || (s.guid = oe.guid++))),
                        this.each(function () {
                            oe.event.add(this, t, i, n, e);
                        })
                    );
                },
                one: function (t, e, n, i) {
                    return this.on(t, e, n, i, 1);
                },
                off: function (t, e, n) {
                    var i, o;
                    if (t && t.preventDefault && t.handleObj) return (i = t.handleObj), oe(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof t) {
                        for (o in t) this.off(o, e, t[o]);
                        return this;
                    }
                    return (
                        (e === !1 || "function" == typeof e) && ((n = e), (e = void 0)),
                        n === !1 && (n = p),
                        this.each(function () {
                            oe.event.remove(this, t, n, e);
                        })
                    );
                },
                trigger: function (t, e) {
                    return this.each(function () {
                        oe.event.trigger(t, e, this);
                    });
                },
                triggerHandler: function (t, e) {
                    var n = this[0];
                    return n ? oe.event.trigger(t, e, n, !0) : void 0;
                },
            });
        var _e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Pe = / jQuery\d+="(?:null|\d+)"/g,
            Re = new RegExp("<(?:" + _e + ")[\\s/>]", "i"),
            Ie = /^\s+/,
            qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Me = /<([\w:]+)/,
            We = /<tbody/i,
            Be = /<|&#?\w+;/,
            Ue = /<(?:script|style|link)/i,
            ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Xe = /^$|\/(?:java|ecma)script/i,
            Ve = /^true\/(.*)/,
            Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
            },
            Je = m(fe),
            Ye = Je.appendChild(fe.createElement("div"));
        (Ge.optgroup = Ge.option),
            (Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead),
            (Ge.th = Ge.td),
            oe.extend({
                clone: function (t, e, n) {
                    var i,
                        o,
                        r,
                        s,
                        a,
                        l = oe.contains(t.ownerDocument, t);
                    if (
                        (ne.html5Clone || oe.isXMLDoc(t) || !Re.test("<" + t.nodeName + ">") ? (r = t.cloneNode(!0)) : ((Ye.innerHTML = t.outerHTML), Ye.removeChild((r = Ye.firstChild))),
                        !((ne.noCloneEvent && ne.noCloneChecked) || (1 !== t.nodeType && 11 !== t.nodeType) || oe.isXMLDoc(t)))
                    )
                        for (i = g(r), a = g(t), s = 0; null != (o = a[s]); ++s) i[s] && C(o, i[s]);
                    if (e)
                        if (n) for (a = a || g(t), i = i || g(r), s = 0; null != (o = a[s]); s++) T(o, i[s]);
                        else T(t, r);
                    return (i = g(r, "script")), i.length > 0 && x(i, !l && g(t, "script")), (i = a = o = null), r;
                },
                buildFragment: function (t, e, n, i) {
                    for (var o, r, s, a, l, c, u, d = t.length, h = m(e), p = [], f = 0; d > f; f++)
                        if (((r = t[f]), r || 0 === r))
                            if ("object" === oe.type(r)) oe.merge(p, r.nodeType ? [r] : r);
                            else if (Be.test(r)) {
                                for (a = a || h.appendChild(e.createElement("div")), l = (Me.exec(r) || ["", ""])[1].toLowerCase(), u = Ge[l] || Ge._default, a.innerHTML = u[1] + r.replace(qe, "<$1></$2>") + u[2], o = u[0]; o--; )
                                    a = a.lastChild;
                                if ((!ne.leadingWhitespace && Ie.test(r) && p.push(e.createTextNode(Ie.exec(r)[0])), !ne.tbody))
                                    for (r = "table" !== l || We.test(r) ? ("<table>" !== u[1] || We.test(r) ? 0 : a) : a.firstChild, o = r && r.childNodes.length; o--; )
                                        oe.nodeName((c = r.childNodes[o]), "tbody") && !c.childNodes.length && r.removeChild(c);
                                for (oe.merge(p, a.childNodes), a.textContent = ""; a.firstChild; ) a.removeChild(a.firstChild);
                                a = h.lastChild;
                            } else p.push(e.createTextNode(r));
                    for (a && h.removeChild(a), ne.appendChecked || oe.grep(g(p, "input"), v), f = 0; (r = p[f++]); )
                        if ((!i || -1 === oe.inArray(r, i)) && ((s = oe.contains(r.ownerDocument, r)), (a = g(h.appendChild(r), "script")), s && x(a), n)) for (o = 0; (r = a[o++]); ) Xe.test(r.type || "") && n.push(r);
                    return (a = null), h;
                },
                cleanData: function (t, e) {
                    for (var n, i, o, r, s = 0, a = oe.expando, l = oe.cache, c = ne.deleteExpando, u = oe.event.special; null != (n = t[s]); s++)
                        if ((e || oe.acceptData(n)) && ((o = n[a]), (r = o && l[o]))) {
                            if (r.events) for (i in r.events) u[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, r.handle);
                            l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== Ce ? n.removeAttribute(a) : (n[a] = null), Q.push(o));
                        }
                },
            }),
            oe.fn.extend({
                text: function (t) {
                    return De(
                        this,
                        function (t) {
                            return void 0 === t ? oe.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || fe).createTextNode(t));
                        },
                        null,
                        t,
                        arguments.length
                    );
                },
                append: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = y(this, t);
                            e.appendChild(t);
                        }
                    });
                },
                prepend: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = y(this, t);
                            e.insertBefore(t, e.firstChild);
                        }
                    });
                },
                before: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this);
                    });
                },
                after: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                    });
                },
                remove: function (t, e) {
                    for (var n, i = t ? oe.filter(t, this) : this, o = 0; null != (n = i[o]); o++)
                        e || 1 !== n.nodeType || oe.cleanData(g(n)), n.parentNode && (e && oe.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
                    return this;
                },
                empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++) {
                        for (1 === t.nodeType && oe.cleanData(g(t, !1)); t.firstChild; ) t.removeChild(t.firstChild);
                        t.options && oe.nodeName(t, "select") && (t.options.length = 0);
                    }
                    return this;
                },
                clone: function (t, e) {
                    return (
                        (t = null == t ? !1 : t),
                        (e = null == e ? t : e),
                        this.map(function () {
                            return oe.clone(this, t, e);
                        })
                    );
                },
                html: function (t) {
                    return De(
                        this,
                        function (t) {
                            var e = this[0] || {},
                                n = 0,
                                i = this.length;
                            if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Pe, "") : void 0;
                            if (!("string" != typeof t || Ue.test(t) || (!ne.htmlSerialize && Re.test(t)) || (!ne.leadingWhitespace && Ie.test(t)) || Ge[(Me.exec(t) || ["", ""])[1].toLowerCase()])) {
                                t = t.replace(qe, "<$1></$2>");
                                try {
                                    for (; i > n; n++) (e = this[n] || {}), 1 === e.nodeType && (oe.cleanData(g(e, !1)), (e.innerHTML = t));
                                    e = 0;
                                } catch (o) {}
                            }
                            e && this.empty().append(t);
                        },
                        null,
                        t,
                        arguments.length
                    );
                },
                replaceWith: function () {
                    var t = arguments[0];
                    return (
                        this.domManip(arguments, function (e) {
                            (t = this.parentNode), oe.cleanData(g(this)), t && t.replaceChild(e, this);
                        }),
                        t && (t.length || t.nodeType) ? this : this.remove()
                    );
                },
                detach: function (t) {
                    return this.remove(t, !0);
                },
                domManip: function (t, e) {
                    t = J.apply([], t);
                    var n,
                        i,
                        o,
                        r,
                        s,
                        a,
                        l = 0,
                        c = this.length,
                        u = this,
                        d = c - 1,
                        h = t[0],
                        p = oe.isFunction(h);
                    if (p || (c > 1 && "string" == typeof h && !ne.checkClone && ze.test(h)))
                        return this.each(function (n) {
                            var i = u.eq(n);
                            p && (t[0] = h.call(this, n, i.html())), i.domManip(t, e);
                        });
                    if (c && ((a = oe.buildFragment(t, this[0].ownerDocument, !1, this)), (n = a.firstChild), 1 === a.childNodes.length && (a = n), n)) {
                        for (r = oe.map(g(a, "script"), b), o = r.length; c > l; l++) (i = a), l !== d && ((i = oe.clone(i, !0, !0)), o && oe.merge(r, g(i, "script"))), e.call(this[l], i, l);
                        if (o)
                            for (s = r[r.length - 1].ownerDocument, oe.map(r, w), l = 0; o > l; l++)
                                (i = r[l]),
                                    Xe.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(s, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qe, "")));
                        a = n = null;
                    }
                    return this;
                },
            }),
            oe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
                oe.fn[t] = function (t) {
                    for (var n, i = 0, o = [], r = oe(t), s = r.length - 1; s >= i; i++) (n = i === s ? this : this.clone(!0)), oe(r[i])[e](n), Y.apply(o, n.get());
                    return this.pushStack(o);
                };
            });
        var Ke,
            Ze = {};
        !(function () {
            var t;
            ne.shrinkWrapBlocks = function () {
                if (null != t) return t;
                t = !1;
                var e, n, i;
                return (
                    (n = fe.getElementsByTagName("body")[0]),
                    n && n.style
                        ? ((e = fe.createElement("div")),
                          (i = fe.createElement("div")),
                          (i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                          n.appendChild(i).appendChild(e),
                          typeof e.style.zoom !== Ce &&
                              ((e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                              (e.appendChild(fe.createElement("div")).style.width = "5px"),
                              (t = 3 !== e.offsetWidth)),
                          n.removeChild(i),
                          t)
                        : void 0
                );
            };
        })();
        var tn,
            en,
            nn = /^margin/,
            on = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"),
            rn = /^(top|right|bottom|left)$/;
        t.getComputedStyle
            ? ((tn = function (t) {
                  return t.ownerDocument.defaultView.getComputedStyle(t, null);
              }),
              (en = function (t, e, n) {
                  var i,
                      o,
                      r,
                      s,
                      a = t.style;
                  return (
                      (n = n || tn(t)),
                      (s = n ? n.getPropertyValue(e) || n[e] : void 0),
                      n &&
                          ("" !== s || oe.contains(t.ownerDocument, t) || (s = oe.style(t, e)),
                          on.test(s) && nn.test(e) && ((i = a.width), (o = a.minWidth), (r = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = o), (a.maxWidth = r))),
                      void 0 === s ? s : s + ""
                  );
              }))
            : fe.documentElement.currentStyle &&
              ((tn = function (t) {
                  return t.currentStyle;
              }),
              (en = function (t, e, n) {
                  var i,
                      o,
                      r,
                      s,
                      a = t.style;
                  return (
                      (n = n || tn(t)),
                      (s = n ? n[e] : void 0),
                      null == s && a && a[e] && (s = a[e]),
                      on.test(s) &&
                          !rn.test(e) &&
                          ((i = a.left), (o = t.runtimeStyle), (r = o && o.left), r && (o.left = t.currentStyle.left), (a.left = "fontSize" === e ? "1em" : s), (s = a.pixelLeft + "px"), (a.left = i), r && (o.left = r)),
                      void 0 === s ? s : s + "" || "auto"
                  );
              })),
            (function () {
                function e() {
                    var e, n, i, o;
                    (n = fe.getElementsByTagName("body")[0]),
                        n &&
                            n.style &&
                            ((e = fe.createElement("div")),
                            (i = fe.createElement("div")),
                            (i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                            n.appendChild(i).appendChild(e),
                            (e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                            (r = s = !1),
                            (l = !0),
                            t.getComputedStyle &&
                                ((r = "1%" !== (t.getComputedStyle(e, null) || {}).top),
                                (s = "4px" === (t.getComputedStyle(e, null) || { width: "4px" }).width),
                                (o = e.appendChild(fe.createElement("div"))),
                                (o.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                                (o.style.marginRight = o.style.width = "0"),
                                (e.style.width = "1px"),
                                (l = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight))),
                            (e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                            (o = e.getElementsByTagName("td")),
                            (o[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
                            (a = 0 === o[0].offsetHeight),
                            a && ((o[0].style.display = ""), (o[1].style.display = "none"), (a = 0 === o[0].offsetHeight)),
                            n.removeChild(i));
                }
                var n, i, o, r, s, a, l;
                (n = fe.createElement("div")),
                    (n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                    (o = n.getElementsByTagName("a")[0]),
                    (i = o && o.style),
                    i &&
                        ((i.cssText = "float:left;opacity:.5"),
                        (ne.opacity = "0.5" === i.opacity),
                        (ne.cssFloat = !!i.cssFloat),
                        (n.style.backgroundClip = "content-box"),
                        (n.cloneNode(!0).style.backgroundClip = ""),
                        (ne.clearCloneStyle = "content-box" === n.style.backgroundClip),
                        (ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing),
                        oe.extend(ne, {
                            reliableHiddenOffsets: function () {
                                return null == a && e(), a;
                            },
                            boxSizingReliable: function () {
                                return null == s && e(), s;
                            },
                            pixelPosition: function () {
                                return null == r && e(), r;
                            },
                            reliableMarginRight: function () {
                                return null == l && e(), l;
                            },
                        }));
            })(),
            (oe.swap = function (t, e, n, i) {
                var o,
                    r,
                    s = {};
                for (r in e) (s[r] = t.style[r]), (t.style[r] = e[r]);
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = s[r];
                return o;
            });
        var sn = /alpha\([^)]*\)/i,
            an = /opacity\s*=\s*([^)]*)/,
            ln = /^(none|table(?!-c[ea]).+)/,
            cn = new RegExp("^(" + ke + ")(.*)$", "i"),
            un = new RegExp("^([+-])=(" + ke + ")", "i"),
            dn = { position: "absolute", visibility: "hidden", display: "block" },
            hn = { letterSpacing: "0", fontWeight: "400" },
            pn = ["Webkit", "O", "Moz", "ms"];
        oe.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = en(t, "opacity");
                            return "" === n ? "1" : n;
                        }
                    },
                },
            },
            cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { float: ne.cssFloat ? "cssFloat" : "styleFloat" },
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o,
                        r,
                        s,
                        a = oe.camelCase(e),
                        l = t.style;
                    if (((e = oe.cssProps[a] || (oe.cssProps[a] = S(l, a))), (s = oe.cssHooks[e] || oe.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                    if (
                        ((r = typeof n),
                        "string" === r && (o = un.exec(n)) && ((n = (o[1] + 1) * o[2] + parseFloat(oe.css(t, e))), (r = "number")),
                        null != n &&
                            n === n &&
                            ("number" !== r || oe.cssNumber[a] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i)))))
                    )
                        try {
                            l[e] = n;
                        } catch (c) {}
                }
            },
            css: function (t, e, n, i) {
                var o,
                    r,
                    s,
                    a = oe.camelCase(e);
                return (
                    (e = oe.cssProps[a] || (oe.cssProps[a] = S(t.style, a))),
                    (s = oe.cssHooks[e] || oe.cssHooks[a]),
                    s && "get" in s && (r = s.get(t, !0, n)),
                    void 0 === r && (r = en(t, e, i)),
                    "normal" === r && e in hn && (r = hn[e]),
                    "" === n || n ? ((o = parseFloat(r)), n === !0 || oe.isNumeric(o) ? o || 0 : r) : r
                );
            },
        }),
            oe.each(["height", "width"], function (t, e) {
                oe.cssHooks[e] = {
                    get: function (t, n, i) {
                        return n
                            ? ln.test(oe.css(t, "display")) && 0 === t.offsetWidth
                                ? oe.swap(t, dn, function () {
                                      return A(t, e, i);
                                  })
                                : A(t, e, i)
                            : void 0;
                    },
                    set: function (t, n, i) {
                        var o = i && tn(t);
                        return D(t, n, i ? j(t, e, i, ne.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, o), o) : 0);
                    },
                };
            }),
            ne.opacity ||
                (oe.cssHooks.opacity = {
                    get: function (t, e) {
                        return an.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : e ? "1" : "";
                    },
                    set: function (t, e) {
                        var n = t.style,
                            i = t.currentStyle,
                            o = oe.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                            r = (i && i.filter) || n.filter || "";
                        (n.zoom = 1),
                            ((e >= 1 || "" === e) && "" === oe.trim(r.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || (i && !i.filter))) || (n.filter = sn.test(r) ? r.replace(sn, o) : r + " " + o);
                    },
                }),
            (oe.cssHooks.marginRight = k(ne.reliableMarginRight, function (t, e) {
                return e ? oe.swap(t, { display: "inline-block" }, en, [t, "marginRight"]) : void 0;
            })),
            oe.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
                (oe.cssHooks[t + e] = {
                    expand: function (n) {
                        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Se[i] + e] = r[i] || r[i - 2] || r[0];
                        return o;
                    },
                }),
                    nn.test(t) || (oe.cssHooks[t + e].set = D);
            }),
            oe.fn.extend({
                css: function (t, e) {
                    return De(
                        this,
                        function (t, e, n) {
                            var i,
                                o,
                                r = {},
                                s = 0;
                            if (oe.isArray(e)) {
                                for (i = tn(t), o = e.length; o > s; s++) r[e[s]] = oe.css(t, e[s], !1, i);
                                return r;
                            }
                            return void 0 !== n ? oe.style(t, e, n) : oe.css(t, e);
                        },
                        t,
                        e,
                        arguments.length > 1
                    );
                },
                show: function () {
                    return N(this, !0);
                },
                hide: function () {
                    return N(this);
                },
                toggle: function (t) {
                    return "boolean" == typeof t
                        ? t
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              Ne(this) ? oe(this).show() : oe(this).hide();
                          });
                },
            }),
            (oe.Tween = L),
            (L.prototype = {
                constructor: L,
                init: function (t, e, n, i, o, r) {
                    (this.elem = t), (this.prop = n), (this.easing = o || "swing"), (this.options = e), (this.start = this.now = this.cur()), (this.end = i), (this.unit = r || (oe.cssNumber[n] ? "" : "px"));
                },
                cur: function () {
                    var t = L.propHooks[this.prop];
                    return t && t.get ? t.get(this) : L.propHooks._default.get(this);
                },
                run: function (t) {
                    var e,
                        n = L.propHooks[this.prop];
                    return (
                        (this.pos = e = this.options.duration ? oe.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t),
                        (this.now = (this.end - this.start) * e + this.start),
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : L.propHooks._default.set(this),
                        this
                    );
                },
            }),
            (L.prototype.init.prototype = L.prototype),
            (L.propHooks = {
                _default: {
                    get: function (t) {
                        var e;
                        return null == t.elem[t.prop] || (t.elem.style && null != t.elem.style[t.prop]) ? ((e = oe.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0) : t.elem[t.prop];
                    },
                    set: function (t) {
                        oe.fx.step[t.prop] ? oe.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[oe.cssProps[t.prop]] || oe.cssHooks[t.prop]) ? oe.style(t.elem, t.prop, t.now + t.unit) : (t.elem[t.prop] = t.now);
                    },
                },
            }),
            (L.propHooks.scrollTop = L.propHooks.scrollLeft = {
                set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
                },
            }),
            (oe.easing = {
                linear: function (t) {
                    return t;
                },
                swing: function (t) {
                    return 0.5 - Math.cos(t * Math.PI) / 2;
                },
            }),
            (oe.fx = L.prototype.init),
            (oe.fx.step = {});
        var fn,
            mn,
            gn = /^(?:toggle|show|hide)$/,
            vn = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"),
            yn = /queueHooks$/,
            bn = [_],
            wn = {
                "*": [
                    function (t, e) {
                        var n = this.createTween(t, e),
                            i = n.cur(),
                            o = vn.exec(e),
                            r = (o && o[3]) || (oe.cssNumber[t] ? "" : "px"),
                            s = (oe.cssNumber[t] || ("px" !== r && +i)) && vn.exec(oe.css(n.elem, t)),
                            a = 1,
                            l = 20;
                        if (s && s[3] !== r) {
                            (r = r || s[3]), (o = o || []), (s = +i || 1);
                            do (a = a || ".5"), (s /= a), oe.style(n.elem, t, s + r);
                            while (a !== (a = n.cur() / i) && 1 !== a && --l);
                        }
                        return o && ((s = n.start = +s || +i || 0), (n.unit = r), (n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2])), n;
                    },
                ],
            };
        (oe.Animation = oe.extend(R, {
            tweener: function (t, e) {
                oe.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
                for (var n, i = 0, o = t.length; o > i; i++) (n = t[i]), (wn[n] = wn[n] || []), wn[n].unshift(e);
            },
            prefilter: function (t, e) {
                e ? bn.unshift(t) : bn.push(t);
            },
        })),
            (oe.speed = function (t, e, n) {
                var i = t && "object" == typeof t ? oe.extend({}, t) : { complete: n || (!n && e) || (oe.isFunction(t) && t), duration: t, easing: (n && e) || (e && !oe.isFunction(e) && e) };
                return (
                    (i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default),
                    (null == i.queue || i.queue === !0) && (i.queue = "fx"),
                    (i.old = i.complete),
                    (i.complete = function () {
                        oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue);
                    }),
                    i
                );
            }),
            oe.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(Ne).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i);
                },
                animate: function (t, e, n, i) {
                    var o = oe.isEmptyObject(t),
                        r = oe.speed(e, n, i),
                        s = function () {
                            var e = R(this, oe.extend({}, t), r);
                            (o || oe._data(this, "finish")) && e.stop(!0);
                        };
                    return (s.finish = s), o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s);
                },
                stop: function (t, e, n) {
                    var i = function (t) {
                        var e = t.stop;
                        delete t.stop, e(n);
                    };
                    return (
                        "string" != typeof t && ((n = e), (e = t), (t = void 0)),
                        e && t !== !1 && this.queue(t || "fx", []),
                        this.each(function () {
                            var e = !0,
                                o = null != t && t + "queueHooks",
                                r = oe.timers,
                                s = oe._data(this);
                            if (o) s[o] && s[o].stop && i(s[o]);
                            else for (o in s) s[o] && s[o].stop && yn.test(o) && i(s[o]);
                            for (o = r.length; o--; ) r[o].elem !== this || (null != t && r[o].queue !== t) || (r[o].anim.stop(n), (e = !1), r.splice(o, 1));
                            (e || !n) && oe.dequeue(this, t);
                        })
                    );
                },
                finish: function (t) {
                    return (
                        t !== !1 && (t = t || "fx"),
                        this.each(function () {
                            var e,
                                n = oe._data(this),
                                i = n[t + "queue"],
                                o = n[t + "queueHooks"],
                                r = oe.timers,
                                s = i ? i.length : 0;
                            for (n.finish = !0, oe.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--; ) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                            for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                            delete n.finish;
                        })
                    );
                },
            }),
            oe.each(["toggle", "show", "hide"], function (t, e) {
                var n = oe.fn[e];
                oe.fn[e] = function (t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(O(e, !0), t, i, o);
                };
            }),
            oe.each({ slideDown: O("show"), slideUp: O("hide"), slideToggle: O("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
                oe.fn[t] = function (t, n, i) {
                    return this.animate(e, t, n, i);
                };
            }),
            (oe.timers = []),
            (oe.fx.tick = function () {
                var t,
                    e = oe.timers,
                    n = 0;
                for (fn = oe.now(); n < e.length; n++) (t = e[n]), t() || e[n] !== t || e.splice(n--, 1);
                e.length || oe.fx.stop(), (fn = void 0);
            }),
            (oe.fx.timer = function (t) {
                oe.timers.push(t), t() ? oe.fx.start() : oe.timers.pop();
            }),
            (oe.fx.interval = 13),
            (oe.fx.start = function () {
                mn || (mn = setInterval(oe.fx.tick, oe.fx.interval));
            }),
            (oe.fx.stop = function () {
                clearInterval(mn), (mn = null);
            }),
            (oe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (oe.fn.delay = function (t, e) {
                return (
                    (t = oe.fx ? oe.fx.speeds[t] || t : t),
                    (e = e || "fx"),
                    this.queue(e, function (e, n) {
                        var i = setTimeout(e, t);
                        n.stop = function () {
                            clearTimeout(i);
                        };
                    })
                );
            }),
            (function () {
                var t, e, n, i, o;
                (e = fe.createElement("div")),
                    e.setAttribute("className", "t"),
                    (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                    (i = e.getElementsByTagName("a")[0]),
                    (n = fe.createElement("select")),
                    (o = n.appendChild(fe.createElement("option"))),
                    (t = e.getElementsByTagName("input")[0]),
                    (i.style.cssText = "top:1px"),
                    (ne.getSetAttribute = "t" !== e.className),
                    (ne.style = /top/.test(i.getAttribute("style"))),
                    (ne.hrefNormalized = "/a" === i.getAttribute("href")),
                    (ne.checkOn = !!t.value),
                    (ne.optSelected = o.selected),
                    (ne.enctype = !!fe.createElement("form").enctype),
                    (n.disabled = !0),
                    (ne.optDisabled = !o.disabled),
                    (t = fe.createElement("input")),
                    t.setAttribute("value", ""),
                    (ne.input = "" === t.getAttribute("value")),
                    (t.value = "t"),
                    t.setAttribute("type", "radio"),
                    (ne.radioValue = "t" === t.value);
            })();
        var xn = /\r/g;
        oe.fn.extend({
            val: function (t) {
                var e,
                    n,
                    i,
                    o = this[0];
                {
                    if (arguments.length)
                        return (
                            (i = oe.isFunction(t)),
                            this.each(function (n) {
                                var o;
                                1 === this.nodeType &&
                                    ((o = i ? t.call(this, n, oe(this).val()) : t),
                                    null == o
                                        ? (o = "")
                                        : "number" == typeof o
                                        ? (o += "")
                                        : oe.isArray(o) &&
                                          (o = oe.map(o, function (t) {
                                              return null == t ? "" : t + "";
                                          })),
                                    (e = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]),
                                    (e && "set" in e && void 0 !== e.set(this, o, "value")) || (this.value = o));
                            })
                        );
                    if (o)
                        return (e = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()]), e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : ((n = o.value), "string" == typeof n ? n.replace(xn, "") : null == n ? "" : n);
                }
            },
        }),
            oe.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = oe.find.attr(t, "value");
                            return null != e ? e : oe.trim(oe.text(t));
                        },
                    },
                    select: {
                        get: function (t) {
                            for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                                if (((n = i[l]), !((!n.selected && l !== o) || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || (n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))))) {
                                    if (((e = oe(n).val()), r)) return e;
                                    s.push(e);
                                }
                            return s;
                        },
                        set: function (t, e) {
                            for (var n, i, o = t.options, r = oe.makeArray(e), s = o.length; s--; )
                                if (((i = o[s]), oe.inArray(oe.valHooks.option.get(i), r) >= 0))
                                    try {
                                        i.selected = n = !0;
                                    } catch (a) {
                                        i.scrollHeight;
                                    }
                                else i.selected = !1;
                            return n || (t.selectedIndex = -1), o;
                        },
                    },
                },
            }),
            oe.each(["radio", "checkbox"], function () {
                (oe.valHooks[this] = {
                    set: function (t, e) {
                        return oe.isArray(e) ? (t.checked = oe.inArray(oe(t).val(), e) >= 0) : void 0;
                    },
                }),
                    ne.checkOn ||
                        (oe.valHooks[this].get = function (t) {
                            return null === t.getAttribute("value") ? "on" : t.value;
                        });
            });
        var Tn,
            Cn,
            En = oe.expr.attrHandle,
            $n = /^(?:checked|selected)$/i,
            kn = ne.getSetAttribute,
            Sn = ne.input;
        oe.fn.extend({
            attr: function (t, e) {
                return De(this, oe.attr, t, e, arguments.length > 1);
            },
            removeAttr: function (t) {
                return this.each(function () {
                    oe.removeAttr(this, t);
                });
            },
        }),
            oe.extend({
                attr: function (t, e, n) {
                    var i,
                        o,
                        r = t.nodeType;
                    if (t && 3 !== r && 8 !== r && 2 !== r)
                        return typeof t.getAttribute === Ce
                            ? oe.prop(t, e, n)
                            : ((1 === r && oe.isXMLDoc(t)) || ((e = e.toLowerCase()), (i = oe.attrHooks[e] || (oe.expr.match.bool.test(e) ? Cn : Tn))),
                              void 0 === n
                                  ? i && "get" in i && null !== (o = i.get(t, e))
                                      ? o
                                      : ((o = oe.find.attr(t, e)), null == o ? void 0 : o)
                                  : null !== n
                                  ? i && "set" in i && void 0 !== (o = i.set(t, n, e))
                                      ? o
                                      : (t.setAttribute(e, n + ""), n)
                                  : void oe.removeAttr(t, e));
                },
                removeAttr: function (t, e) {
                    var n,
                        i,
                        o = 0,
                        r = e && e.match(be);
                    if (r && 1 === t.nodeType)
                        for (; (n = r[o++]); )
                            (i = oe.propFix[n] || n), oe.expr.match.bool.test(n) ? ((Sn && kn) || !$n.test(n) ? (t[i] = !1) : (t[oe.camelCase("default-" + n)] = t[i] = !1)) : oe.attr(t, n, ""), t.removeAttribute(kn ? n : i);
                },
                attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!ne.radioValue && "radio" === e && oe.nodeName(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e;
                            }
                        },
                    },
                },
            }),
            (Cn = {
                set: function (t, e, n) {
                    return e === !1 ? oe.removeAttr(t, n) : (Sn && kn) || !$n.test(n) ? t.setAttribute((!kn && oe.propFix[n]) || n, n) : (t[oe.camelCase("default-" + n)] = t[n] = !0), n;
                },
            }),
            oe.each(oe.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var n = En[e] || oe.find.attr;
                En[e] =
                    (Sn && kn) || !$n.test(e)
                        ? function (t, e, i) {
                              var o, r;
                              return i || ((r = En[e]), (En[e] = o), (o = null != n(t, e, i) ? e.toLowerCase() : null), (En[e] = r)), o;
                          }
                        : function (t, e, n) {
                              return n ? void 0 : t[oe.camelCase("default-" + e)] ? e.toLowerCase() : null;
                          };
            }),
            (Sn && kn) ||
                (oe.attrHooks.value = {
                    set: function (t, e, n) {
                        return oe.nodeName(t, "input") ? void (t.defaultValue = e) : Tn && Tn.set(t, e, n);
                    },
                }),
            kn ||
                ((Tn = {
                    set: function (t, e, n) {
                        var i = t.getAttributeNode(n);
                        return i || t.setAttributeNode((i = t.ownerDocument.createAttribute(n))), (i.value = e += ""), "value" === n || e === t.getAttribute(n) ? e : void 0;
                    },
                }),
                (En.id = En.name = En.coords = function (t, e, n) {
                    var i;
                    return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null;
                }),
                (oe.valHooks.button = {
                    get: function (t, e) {
                        var n = t.getAttributeNode(e);
                        return n && n.specified ? n.value : void 0;
                    },
                    set: Tn.set,
                }),
                (oe.attrHooks.contenteditable = {
                    set: function (t, e, n) {
                        Tn.set(t, "" === e ? !1 : e, n);
                    },
                }),
                oe.each(["width", "height"], function (t, e) {
                    oe.attrHooks[e] = {
                        set: function (t, n) {
                            return "" === n ? (t.setAttribute(e, "auto"), n) : void 0;
                        },
                    };
                })),
            ne.style ||
                (oe.attrHooks.style = {
                    get: function (t) {
                        return t.style.cssText || void 0;
                    },
                    set: function (t, e) {
                        return (t.style.cssText = e + "");
                    },
                });
        var Nn = /^(?:input|select|textarea|button|object)$/i,
            Dn = /^(?:a|area)$/i;
        oe.fn.extend({
            prop: function (t, e) {
                return De(this, oe.prop, t, e, arguments.length > 1);
            },
            removeProp: function (t) {
                return (
                    (t = oe.propFix[t] || t),
                    this.each(function () {
                        try {
                            (this[t] = void 0), delete this[t];
                        } catch (e) {}
                    })
                );
            },
        }),
            oe.extend({
                propFix: { for: "htmlFor", class: "className" },
                prop: function (t, e, n) {
                    var i,
                        o,
                        r,
                        s = t.nodeType;
                    if (t && 3 !== s && 8 !== s && 2 !== s)
                        return (
                            (r = 1 !== s || !oe.isXMLDoc(t)),
                            r && ((e = oe.propFix[e] || e), (o = oe.propHooks[e])),
                            void 0 !== n ? (o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t[e] = n)) : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
                        );
                },
                propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var e = oe.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : Nn.test(t.nodeName) || (Dn.test(t.nodeName) && t.href) ? 0 : -1;
                        },
                    },
                },
            }),
            ne.hrefNormalized ||
                oe.each(["href", "src"], function (t, e) {
                    oe.propHooks[e] = {
                        get: function (t) {
                            return t.getAttribute(e, 4);
                        },
                    };
                }),
            ne.optSelected ||
                (oe.propHooks.selected = {
                    get: function (t) {
                        var e = t.parentNode;
                        return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null;
                    },
                }),
            oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                oe.propFix[this.toLowerCase()] = this;
            }),
            ne.enctype || (oe.propFix.enctype = "encoding");
        var jn = /[\t\r\n\f]/g;
        oe.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a = 0,
                    l = this.length,
                    c = "string" == typeof t && t;
                if (oe.isFunction(t))
                    return this.each(function (e) {
                        oe(this).addClass(t.call(this, e, this.className));
                    });
                if (c)
                    for (e = (t || "").match(be) || []; l > a; a++)
                        if (((n = this[a]), (i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : " ")))) {
                            for (r = 0; (o = e[r++]); ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            (s = oe.trim(i)), n.className !== s && (n.className = s);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a = 0,
                    l = this.length,
                    c = 0 === arguments.length || ("string" == typeof t && t);
                if (oe.isFunction(t))
                    return this.each(function (e) {
                        oe(this).removeClass(t.call(this, e, this.className));
                    });
                if (c)
                    for (e = (t || "").match(be) || []; l > a; a++)
                        if (((n = this[a]), (i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : "")))) {
                            for (r = 0; (o = e[r++]); ) for (; i.indexOf(" " + o + " ") >= 0; ) i = i.replace(" " + o + " ", " ");
                            (s = t ? oe.trim(i) : ""), n.className !== s && (n.className = s);
                        }
                return this;
            },
            toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n
                    ? e
                        ? this.addClass(t)
                        : this.removeClass(t)
                    : this.each(
                          oe.isFunction(t)
                              ? function (n) {
                                    oe(this).toggleClass(t.call(this, n, this.className, e), e);
                                }
                              : function () {
                                    if ("string" === n) for (var e, i = 0, o = oe(this), r = t.match(be) || []; (e = r[i++]); ) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                                    else (n === Ce || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), (this.className = this.className || t === !1 ? "" : oe._data(this, "__className__") || ""));
                                }
                      );
            },
            hasClass: function (t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jn, " ").indexOf(e) >= 0) return !0;
                return !1;
            },
        }),
            oe.each(
                "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                function (t, e) {
                    oe.fn[e] = function (t, n) {
                        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
                    };
                }
            ),
            oe.fn.extend({
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t);
                },
                bind: function (t, e, n) {
                    return this.on(t, null, e, n);
                },
                unbind: function (t, e) {
                    return this.off(t, null, e);
                },
                delegate: function (t, e, n, i) {
                    return this.on(e, t, n, i);
                },
                undelegate: function (t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
                },
            });
        var An = oe.now(),
            Ln = /\?/,
            Hn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        (oe.parseJSON = function (e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var n,
                i = null,
                o = oe.trim(e + "");
            return o &&
                !oe.trim(
                    o.replace(Hn, function (t, e, o, r) {
                        return n && e && (i = 0), 0 === i ? t : ((n = o || e), (i += !r - !o), "");
                    })
                )
                ? Function("return " + o)()
                : oe.error("Invalid JSON: " + e);
        }),
            (oe.parseXML = function (e) {
                var n, i;
                if (!e || "string" != typeof e) return null;
                try {
                    t.DOMParser ? ((i = new DOMParser()), (n = i.parseFromString(e, "text/xml"))) : ((n = new ActiveXObject("Microsoft.XMLDOM")), (n.async = "false"), n.loadXML(e));
                } catch (o) {
                    n = void 0;
                }
                return (n && n.documentElement && !n.getElementsByTagName("parsererror").length) || oe.error("Invalid XML: " + e), n;
            });
        var On,
            Fn,
            _n = /#.*$/,
            Pn = /([?&])_=[^&]*/,
            Rn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            In = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            qn = /^(?:GET|HEAD)$/,
            Mn = /^\/\//,
            Wn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Bn = {},
            Un = {},
            zn = "*/".concat("*");
        try {
            Fn = location.href;
        } catch (Xn) {
            (Fn = fe.createElement("a")), (Fn.href = ""), (Fn = Fn.href);
        }
        (On = Wn.exec(Fn.toLowerCase()) || []),
            oe.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Fn,
                    type: "GET",
                    isLocal: In.test(On[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: { "*": zn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                    contents: { xml: /xml/, html: /html/, json: /json/ },
                    responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                    converters: { "* text": String, "text html": !0, "text json": oe.parseJSON, "text xml": oe.parseXML },
                    flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (t, e) {
                    return e ? M(M(t, oe.ajaxSettings), e) : M(oe.ajaxSettings, t);
                },
                ajaxPrefilter: I(Bn),
                ajaxTransport: I(Un),
                ajax: function (t, e) {
                    function n(t, e, n, i) {
                        var o,
                            u,
                            v,
                            y,
                            w,
                            T = e;
                        2 !== b &&
                            ((b = 2),
                            a && clearTimeout(a),
                            (c = void 0),
                            (s = i || ""),
                            (x.readyState = t > 0 ? 4 : 0),
                            (o = (t >= 200 && 300 > t) || 304 === t),
                            n && (y = W(d, x, n)),
                            (y = B(d, y, x, o)),
                            o
                                ? (d.ifModified && ((w = x.getResponseHeader("Last-Modified")), w && (oe.lastModified[r] = w), (w = x.getResponseHeader("etag")), w && (oe.etag[r] = w)),
                                  204 === t || "HEAD" === d.type ? (T = "nocontent") : 304 === t ? (T = "notmodified") : ((T = y.state), (u = y.data), (v = y.error), (o = !v)))
                                : ((v = T), (t || !T) && ((T = "error"), 0 > t && (t = 0))),
                            (x.status = t),
                            (x.statusText = (e || T) + ""),
                            o ? f.resolveWith(h, [u, T, x]) : f.rejectWith(h, [x, T, v]),
                            x.statusCode(g),
                            (g = void 0),
                            l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? u : v]),
                            m.fireWith(h, [x, T]),
                            l && (p.trigger("ajaxComplete", [x, d]), --oe.active || oe.event.trigger("ajaxStop")));
                    }
                    "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                    var i,
                        o,
                        r,
                        s,
                        a,
                        l,
                        c,
                        u,
                        d = oe.ajaxSetup({}, e),
                        h = d.context || d,
                        p = d.context && (h.nodeType || h.jquery) ? oe(h) : oe.event,
                        f = oe.Deferred(),
                        m = oe.Callbacks("once memory"),
                        g = d.statusCode || {},
                        v = {},
                        y = {},
                        b = 0,
                        w = "canceled",
                        x = {
                            readyState: 0,
                            getResponseHeader: function (t) {
                                var e;
                                if (2 === b) {
                                    if (!u) for (u = {}; (e = Rn.exec(s)); ) u[e[1].toLowerCase()] = e[2];
                                    e = u[t.toLowerCase()];
                                }
                                return null == e ? null : e;
                            },
                            getAllResponseHeaders: function () {
                                return 2 === b ? s : null;
                            },
                            setRequestHeader: function (t, e) {
                                var n = t.toLowerCase();
                                return b || ((t = y[n] = y[n] || t), (v[t] = e)), this;
                            },
                            overrideMimeType: function (t) {
                                return b || (d.mimeType = t), this;
                            },
                            statusCode: function (t) {
                                var e;
                                if (t)
                                    if (2 > b) for (e in t) g[e] = [g[e], t[e]];
                                    else x.always(t[x.status]);
                                return this;
                            },
                            abort: function (t) {
                                var e = t || w;
                                return c && c.abort(e), n(0, e), this;
                            },
                        };
                    if (
                        ((f.promise(x).complete = m.add),
                        (x.success = x.done),
                        (x.error = x.fail),
                        (d.url = ((t || d.url || Fn) + "").replace(_n, "").replace(Mn, On[1] + "//")),
                        (d.type = e.method || e.type || d.method || d.type),
                        (d.dataTypes = oe
                            .trim(d.dataType || "*")
                            .toLowerCase()
                            .match(be) || [""]),
                        null == d.crossDomain &&
                            ((i = Wn.exec(d.url.toLowerCase())), (d.crossDomain = !(!i || (i[1] === On[1] && i[2] === On[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (On[3] || ("http:" === On[1] ? "80" : "443")))))),
                        d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)),
                        q(Bn, d, e, x),
                        2 === b)
                    )
                        return x;
                    (l = d.global),
                        l && 0 === oe.active++ && oe.event.trigger("ajaxStart"),
                        (d.type = d.type.toUpperCase()),
                        (d.hasContent = !qn.test(d.type)),
                        (r = d.url),
                        d.hasContent || (d.data && ((r = d.url += (Ln.test(r) ? "&" : "?") + d.data), delete d.data), d.cache === !1 && (d.url = Pn.test(r) ? r.replace(Pn, "$1_=" + An++) : r + (Ln.test(r) ? "&" : "?") + "_=" + An++)),
                        d.ifModified && (oe.lastModified[r] && x.setRequestHeader("If-Modified-Since", oe.lastModified[r]), oe.etag[r] && x.setRequestHeader("If-None-Match", oe.etag[r])),
                        ((d.data && d.hasContent && d.contentType !== !1) || e.contentType) && x.setRequestHeader("Content-Type", d.contentType),
                        x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zn + "; q=0.01" : "") : d.accepts["*"]);
                    for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
                    if (d.beforeSend && (d.beforeSend.call(h, x, d) === !1 || 2 === b)) return x.abort();
                    w = "abort";
                    for (o in { success: 1, error: 1, complete: 1 }) x[o](d[o]);
                    if ((c = q(Un, d, e, x))) {
                        (x.readyState = 1),
                            l && p.trigger("ajaxSend", [x, d]),
                            d.async &&
                                d.timeout > 0 &&
                                (a = setTimeout(function () {
                                    x.abort("timeout");
                                }, d.timeout));
                        try {
                            (b = 1), c.send(v, n);
                        } catch (T) {
                            if (!(2 > b)) throw T;
                            n(-1, T);
                        }
                    } else n(-1, "No Transport");
                    return x;
                },
                getJSON: function (t, e, n) {
                    return oe.get(t, e, n, "json");
                },
                getScript: function (t, e) {
                    return oe.get(t, void 0, e, "script");
                },
            }),
            oe.each(["get", "post"], function (t, e) {
                oe[e] = function (t, n, i, o) {
                    return oe.isFunction(n) && ((o = o || i), (i = n), (n = void 0)), oe.ajax({ url: t, type: e, dataType: o, data: n, success: i });
                };
            }),
            oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                oe.fn[e] = function (t) {
                    return this.on(e, t);
                };
            }),
            (oe._evalUrl = function (t) {
                return oe.ajax({ url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
            }),
            oe.fn.extend({
                wrapAll: function (t) {
                    if (oe.isFunction(t))
                        return this.each(function (e) {
                            oe(this).wrapAll(t.call(this, e));
                        });
                    if (this[0]) {
                        var e = oe(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]),
                            e
                                .map(function () {
                                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; ) t = t.firstChild;
                                    return t;
                                })
                                .append(this);
                    }
                    return this;
                },
                wrapInner: function (t) {
                    return this.each(
                        oe.isFunction(t)
                            ? function (e) {
                                  oe(this).wrapInner(t.call(this, e));
                              }
                            : function () {
                                  var e = oe(this),
                                      n = e.contents();
                                  n.length ? n.wrapAll(t) : e.append(t);
                              }
                    );
                },
                wrap: function (t) {
                    var e = oe.isFunction(t);
                    return this.each(function (n) {
                        oe(this).wrapAll(e ? t.call(this, n) : t);
                    });
                },
                unwrap: function () {
                    return this.parent()
                        .each(function () {
                            oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes);
                        })
                        .end();
                },
            }),
            (oe.expr.filters.hidden = function (t) {
                return (t.offsetWidth <= 0 && t.offsetHeight <= 0) || (!ne.reliableHiddenOffsets() && "none" === ((t.style && t.style.display) || oe.css(t, "display")));
            }),
            (oe.expr.filters.visible = function (t) {
                return !oe.expr.filters.hidden(t);
            });
        var Vn = /%20/g,
            Qn = /\[\]$/,
            Gn = /\r?\n/g,
            Jn = /^(?:submit|button|image|reset|file)$/i,
            Yn = /^(?:input|select|textarea|keygen)/i;
        (oe.param = function (t, e) {
            var n,
                i = [],
                o = function (t, e) {
                    (e = oe.isFunction(e) ? e() : null == e ? "" : e), (i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
                };
            if ((void 0 === e && (e = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(t) || (t.jquery && !oe.isPlainObject(t))))
                oe.each(t, function () {
                    o(this.name, this.value);
                });
            else for (n in t) U(n, t[n], e, o);
            return i.join("&").replace(Vn, "+");
        }),
            oe.fn.extend({
                serialize: function () {
                    return oe.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                        var t = oe.prop(this, "elements");
                        return t ? oe.makeArray(t) : this;
                    })
                        .filter(function () {
                            var t = this.type;
                            return this.name && !oe(this).is(":disabled") && Yn.test(this.nodeName) && !Jn.test(t) && (this.checked || !je.test(t));
                        })
                        .map(function (t, e) {
                            var n = oe(this).val();
                            return null == n
                                ? null
                                : oe.isArray(n)
                                ? oe.map(n, function (t) {
                                      return { name: e.name, value: t.replace(Gn, "\r\n") };
                                  })
                                : { name: e.name, value: n.replace(Gn, "\r\n") };
                        })
                        .get();
                },
            }),
            (oe.ajaxSettings.xhr =
                void 0 !== t.ActiveXObject
                    ? function () {
                          return (!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && z()) || X();
                      }
                    : z);
        var Kn = 0,
            Zn = {},
            ti = oe.ajaxSettings.xhr();
			t.ActiveXObject &&
            oe(t).on("unload", function () {
                for (var t in Zn) Zn[t](void 0, !0);
            }),
            (ne.cors = !!ti && "withCredentials" in ti),
            (ti = ne.ajax = !!ti),
            ti &&
                oe.ajaxTransport(function (t) {
                    if (!t.crossDomain || ne.cors) {
                        var e;
                        return {
                            send: function (n, i) {
                                var o,
                                    r = t.xhr(),
                                    s = ++Kn;
                                if ((r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (o in t.xhrFields) r[o] = t.xhrFields[o];
                                t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                                for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
								let obj = Object.fromEntries(new URLSearchParams(t.data));
								for (const object in Object.keys(obj)) {
								let key = Object.keys(obj)[object];
								let value = Object.values(obj)[object]
								console.log(key + " " + value);
								if (key.includes("recipes")) {
								let test = key.substr(7).replace(/\[|]/g);
								let rec = document.getElementByName(key)[0];
								console.log("Recipes " + test));
								console.log(rec);
								}
								else
								{
								console.log("Challenges " + key.substr(10).replace(/\[|]/g, ""));	
								}
								}
                                    (e = function (n, o) {
                                        var a, l, c;
                                        if (e && (o || 4 === r.readyState))
                                            if ((delete Zn[s], (e = void 0), (r.onreadystatechange = oe.noop), o)) 4 !== r.readyState && r.abort();
                                            else {
                                                (c = {}), (a = r.status), "string" == typeof r.responseText && (c.text = r.responseText);
                                                try {
                                                    l = r.statusText;
                                                } catch (u) {
                                                    l = "";
                                                }
                                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : (a = c.text ? 200 : 404);
                                            }
                                        c && i(a, l, c, r.getAllResponseHeaders());
                                    }),
                                    t.async ? (4 === r.readyState ? setTimeout(e) : (r.onreadystatechange = Zn[s] = e)) : e();
                            },
                            abort: function () {
                                e && e(void 0, !0);
                            },
                        };
                    }
                }),
            oe.ajaxSetup({
                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                contents: { script: /(?:java|ecma)script/ },
                converters: {
                    "text script": function (t) {
                        return oe.globalEval(t), t;
                    },
                },
            }),
            oe.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && ((t.type = "GET"), (t.global = !1));
            }),
            oe.ajaxTransport("script", function (t) {
                if (t.crossDomain) {
                    var e,
                        n = fe.head || oe("head")[0] || fe.documentElement;
                    return {
                        send: function (i, o) {
                            (e = fe.createElement("script")),
                                (e.async = !0),
                                t.scriptCharset && (e.charset = t.scriptCharset),
                                (e.src = t.url),
                                (e.onload = e.onreadystatechange = function (t, n) {
                                    (n || !e.readyState || /loaded|complete/.test(e.readyState)) && ((e.onload = e.onreadystatechange = null), e.parentNode && e.parentNode.removeChild(e), (e = null), n || o(200, "success"));
                                }),
                                n.insertBefore(e, n.firstChild);
                        },
                        abort: function () {
                            e && e.onload(void 0, !0);
                        },
                    };
                }
            });
        var ei = [],
            ni = /(=)\?(?=&|$)|\?\?/;
        oe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = ei.pop() || oe.expando + "_" + An++;
                return (this[t] = !0), t;
            },
        }),
            oe.ajaxPrefilter("json jsonp", function (e, n, i) {
                var o,
                    r,
                    s,
                    a = e.jsonp !== !1 && (ni.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(e.data) && "data");
                return a || "jsonp" === e.dataTypes[0]
                    ? ((o = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                      a ? (e[a] = e[a].replace(ni, "$1" + o)) : e.jsonp !== !1 && (e.url += (Ln.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                      (e.converters["script json"] = function () {
                          return s || oe.error(o + " was not called"), s[0];
                      }),
                      (e.dataTypes[0] = "json"),
                      (r = t[o]),
                      (t[o] = function () {
                          s = arguments;
                      }),
                      i.always(function () {
                          (t[o] = r), e[o] && ((e.jsonpCallback = n.jsonpCallback), ei.push(o)), s && oe.isFunction(r) && r(s[0]), (s = r = void 0);
                      }),
                      "script")
                    : void 0;
            }),
            (oe.parseHTML = function (t, e, n) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && ((n = e), (e = !1)), (e = e || fe);
                var i = de.exec(t),
                    o = !n && [];
                return i ? [e.createElement(i[1])] : ((i = oe.buildFragment([t], e, o)), o && o.length && oe(o).remove(), oe.merge([], i.childNodes));
            });
        var ii = oe.fn.load;
        (oe.fn.load = function (t, e, n) {
            if ("string" != typeof t && ii) return ii.apply(this, arguments);
            var i,
                o,
                r,
                s = this,
                a = t.indexOf(" ");
            return (
                a >= 0 && ((i = oe.trim(t.slice(a, t.length))), (t = t.slice(0, a))),
                oe.isFunction(e) ? ((n = e), (e = void 0)) : e && "object" == typeof e && (r = "POST"),
                s.length > 0 &&
                    oe
                        .ajax({ url: t, type: r, dataType: "html", data: e })
                        .done(function (t) {
                            (o = arguments), s.html(i ? oe("<div>").append(oe.parseHTML(t)).find(i) : t);
                        })
                        .complete(
                            n &&
                                function (t, e) {
                                    s.each(n, o || [t.responseText, e, t]);
                                }
                        ),
                this
            );
        }),
            (oe.expr.filters.animated = function (t) {
                return oe.grep(oe.timers, function (e) {
                    return t === e.elem;
                }).length;
            });
        var oi = t.document.documentElement;
        (oe.offset = {
            setOffset: function (t, e, n) {
                var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    u = oe.css(t, "position"),
                    d = oe(t),
                    h = {};
                "static" === u && (t.style.position = "relative"),
                    (a = d.offset()),
                    (r = oe.css(t, "top")),
                    (l = oe.css(t, "left")),
                    (c = ("absolute" === u || "fixed" === u) && oe.inArray("auto", [r, l]) > -1),
                    c ? ((i = d.position()), (s = i.top), (o = i.left)) : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
                    oe.isFunction(e) && (e = e.call(t, n, a)),
                    null != e.top && (h.top = e.top - a.top + s),
                    null != e.left && (h.left = e.left - a.left + o),
                    "using" in e ? e.using.call(t, h) : d.css(h);
            },
        }),
            oe.fn.extend({
                offset: function (t) {
                    if (arguments.length)
                        return void 0 === t
                            ? this
                            : this.each(function (e) {
                                  oe.offset.setOffset(this, t, e);
                              });
                    var e,
                        n,
                        i = { top: 0, left: 0 },
                        o = this[0],
                        r = o && o.ownerDocument;
                    if (r)
                        return (
                            (e = r.documentElement),
                            oe.contains(e, o)
                                ? (typeof o.getBoundingClientRect !== Ce && (i = o.getBoundingClientRect()),
                                  (n = V(r)),
                                  { top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) })
                                : i
                        );
                },
                position: function () {
                    if (this[0]) {
                        var t,
                            e,
                            n = { top: 0, left: 0 },
                            i = this[0];
                        return (
                            "fixed" === oe.css(i, "position")
                                ? (e = i.getBoundingClientRect())
                                : ((t = this.offsetParent()), (e = this.offset()), oe.nodeName(t[0], "html") || (n = t.offset()), (n.top += oe.css(t[0], "borderTopWidth", !0)), (n.left += oe.css(t[0], "borderLeftWidth", !0))),
                            { top: e.top - n.top - oe.css(i, "marginTop", !0), left: e.left - n.left - oe.css(i, "marginLeft", !0) }
                        );
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent || oi; t && !oe.nodeName(t, "html") && "static" === oe.css(t, "position"); ) t = t.offsetParent;
                        return t || oi;
                    });
                },
            }),
            oe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
                var n = /Y/.test(e);
                oe.fn[t] = function (i) {
                    return De(
                        this,
                        function (t, i, o) {
                            var r = V(t);
                            return void 0 === o ? (r ? (e in r ? r[e] : r.document.documentElement[i]) : t[i]) : void (r ? r.scrollTo(n ? oe(r).scrollLeft() : o, n ? o : oe(r).scrollTop()) : (t[i] = o));
                        },
                        t,
                        i,
                        arguments.length,
                        null
                    );
                };
            }),
            oe.each(["top", "left"], function (t, e) {
                oe.cssHooks[e] = k(ne.pixelPosition, function (t, n) {
                    return n ? ((n = en(t, e)), on.test(n) ? oe(t).position()[e] + "px" : n) : void 0;
                });
            }),
            oe.each({ Height: "height", Width: "width" }, function (t, e) {
                oe.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (n, i) {
                    oe.fn[i] = function (i, o) {
                        var r = arguments.length && (n || "boolean" != typeof i),
                            s = n || (i === !0 || o === !0 ? "margin" : "border");
                        return De(
                            this,
                            function (e, n, i) {
                                var o;
                                return oe.isWindow(e)
                                    ? e.document.documentElement["client" + t]
                                    : 9 === e.nodeType
                                    ? ((o = e.documentElement), Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t]))
                                    : void 0 === i
                                    ? oe.css(e, n, s)
                                    : oe.style(e, n, i, s);
                            },
                            e,
                            r ? i : void 0,
                            r,
                            null
                        );
                    };
                });
            }),
            (oe.fn.size = function () {
                return this.length;
            }),
            (oe.fn.andSelf = oe.fn.addBack),
            "function" == typeof define &&
                define.amd &&
                define("jquery", [], function () {
                    return oe;
                });
        var ri = t.jQuery,
            si = t.$;
        return (
            (oe.noConflict = function (e) {
                return t.$ === oe && (t.$ = si), e && t.jQuery === oe && (t.jQuery = ri), oe;
            }),
            typeof e === Ce && (t.jQuery = t.$ = oe),
            oe
        );
    }),
    function () {
        var t, e;
        (t = window.jQuery || ("function" == typeof require ? require("jquery") : void 0)),
            (e = t(document)),
            (t.turbo = {
                version: "2.1.0",
                isReady: !1,
                use: function (t, n) {
                    return e
                        .off(".turbo")
                        .on("" + t + ".turbo", this.onLoad)
                        .on("" + n + ".turbo", this.onFetch);
                },
                addCallback: function (n) {
                    return (
                        t.turbo.isReady && n(t),
                        e.on("turbo:ready", function () {
                            return n(t);
                        })
                    );
                },
                onLoad: function () {
                    return (t.turbo.isReady = !0), e.trigger("turbo:ready");
                },
                onFetch: function () {
                    return (t.turbo.isReady = !1);
                },
                register: function () {
                    return t(this.onLoad), (t.fn.ready = this.addCallback);
                },
            }),
            t.turbo.register(),
            t.turbo.use("page:load", "page:fetch");
    }.call(this),
    (function (t, e) {
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var n,
            i = t(document);
        (t.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector:
                "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            CSRFProtection: function (e) {
                var n = t('meta[name="csrf-token"]').attr("content");
                n && e.setRequestHeader("X-CSRF-Token", n);
            },
            refreshCSRFTokens: function () {
                var e = t("meta[name=csrf-token]").attr("content"),
                    n = t("meta[name=csrf-param]").attr("content");
                t('form input[name="' + n + '"]').val(e);
            },
            fire: function (e, n, i) {
                var o = t.Event(n);
                return e.trigger(o, i), o.result !== !1;
            },
            confirm: function (t) {
                return confirm(t);
            },
            ajax: function (e) {
                return t.ajax(e);
            },
            href: function (t) {
                return t.attr("href");
            },
            handleRemote: function (i) {
                var o, r, s, a, l, c, u, d;
                if (n.fire(i, "ajax:before")) {
                    if (((a = i.data("cross-domain")), (l = a === e ? null : a), (c = i.data("with-credentials") || null), (u = i.data("type") || (t.ajaxSettings && t.ajaxSettings.dataType)), i.is("form"))) {
                        (o = i.attr("method")), (r = i.attr("action")), (s = i.serializeArray());
                        var h = i.data("ujs:submit-button");
                        h && (s.push(h), i.data("ujs:submit-button", null));
                    } else
                        i.is(n.inputChangeSelector)
                            ? ((o = i.data("method")), (r = i.data("url")), (s = i.serialize()), i.data("params") && (s = s + "&" + i.data("params")))
                            : i.is(n.buttonClickSelector)
                            ? ((o = i.data("method") || "get"), (r = i.data("url")), (s = i.serialize()), i.data("params") && (s = s + "&" + i.data("params")))
                            : ((o = i.data("method")), (r = n.href(i)), (s = i.data("params") || null));
                    return (
                        (d = {
                            type: o || "GET",
                            data: s,
                            dataType: u,
                            beforeSend: function (t, o) {
                                return o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [t, o]) ? void i.trigger("ajax:send", t) : !1;
                            },
                            success: function (t, e, n) {
                                i.trigger("ajax:success", [t, e, n]);
                            },
                            complete: function (t, e) {
                                i.trigger("ajax:complete", [t, e]);
                            },
                            error: function (t, e, n) {
                                i.trigger("ajax:error", [t, e, n]);
                            },
                            crossDomain: l,
                        }),
                        c && (d.xhrFields = { withCredentials: c }),
                        r && (d.url = r),
                        n.ajax(d)
                    );
                }
                return !1;
            },
            handleMethod: function (i) {
                var o = n.href(i),
                    r = i.data("method"),
                    s = i.attr("target"),
                    a = t("meta[name=csrf-token]").attr("content"),
                    l = t("meta[name=csrf-param]").attr("content"),
                    c = t('<form method="post" action="' + o + '"></form>'),
                    u = '<input name="_method" value="' + r + '" type="hidden" />';
                l !== e && a !== e && (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && c.attr("target", s), c.hide().append(u).appendTo("body"), c.submit();
            },
            formElements: function (e, n) {
                return e.is("form") ? t(e[0].elements).filter(n) : e.find(n);
            },
            disableFormElements: function (e) {
                n.formElements(e, n.disableSelector).each(function () {
                    n.disableFormElement(t(this));
                });
            },
            disableFormElement: function (t) {
                var n, i;
                (n = t.is("button") ? "html" : "val"), (i = t.data("disable-with")), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0);
            },
            enableFormElements: function (e) {
                n.formElements(e, n.enableSelector).each(function () {
                    n.enableFormElement(t(this));
                });
            },
            enableFormElement: function (t) {
                var e = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1);
            },
            allowAction: function (t) {
                var e,
                    i = t.data("confirm"),
                    o = !1;
                return i ? (n.fire(t, "confirm") && ((o = n.confirm(i)), (e = n.fire(t, "confirm:complete", [o]))), o && e) : !0;
            },
            blankInputs: function (e, n, i) {
                var o,
                    r,
                    s = t(),
                    a = n || "input,textarea",
                    l = e.find(a);
                return (
                    l.each(function () {
                        if (((o = t(this)), (r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val()), !r == !i)) {
                            if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length) return !0;
                            s = s.add(o);
                        }
                    }),
                    s.length ? s : !1
                );
            },
            nonBlankInputs: function (t, e) {
                return n.blankInputs(t, e, !0);
            },
            stopEverything: function (e) {
                return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1;
            },
            disableElement: function (t) {
                var i = t.data("disable-with");
                t.data("ujs:enable-with", t.html()),
                    i !== e && t.html(i),
                    t.bind("click.railsDisable", function (t) {
                        return n.stopEverything(t);
                    });
            },
            enableElement: function (t) {
                t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable");
            },
        }),
            n.fire(i, "rails:attachBindings") &&
                (t.ajaxPrefilter(function (t, e, i) {
                    t.crossDomain || n.CSRFProtection(i);
                }),
                i.delegate(n.linkDisableSelector, "ajax:complete", function () {
                    n.enableElement(t(this));
                }),
                i.delegate(n.buttonDisableSelector, "ajax:complete", function () {
                    n.enableFormElement(t(this));
                }),
                i.delegate(n.linkClickSelector, "click.rails", function (i) {
                    var o = t(this),
                        r = o.data("method"),
                        s = o.data("params"),
                        a = i.metaKey || i.ctrlKey;
                    if (!n.allowAction(o)) return n.stopEverything(i);
                    if ((!a && o.is(n.linkDisableSelector) && n.disableElement(o), o.data("remote") !== e)) {
                        if (a && (!r || "GET" === r) && !s) return !0;
                        var l = n.handleRemote(o);
                        return (
                            l === !1
                                ? n.enableElement(o)
                                : l.error(function () {
                                      n.enableElement(o);
                                  }),
                            !1
                        );
                    }
                    return o.data("method") ? (n.handleMethod(o), !1) : void 0;
                }),
                i.delegate(n.buttonClickSelector, "click.rails", function (e) {
                    var i = t(this);
                    if (!n.allowAction(i)) return n.stopEverything(e);
                    i.is(n.buttonDisableSelector) && n.disableFormElement(i);
                    var o = n.handleRemote(i);
                    return (
                        o === !1
                            ? n.enableFormElement(i)
                            : o.error(function () {
                                  n.enableFormElement(i);
                              }),
                        !1
                    );
                }),
                i.delegate(n.inputChangeSelector, "change.rails", function (e) {
                    var i = t(this);
                    return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e);
                }),
                i.delegate(n.formSubmitSelector, "submit.rails", function (i) {
                    var o,
                        r,
                        s = t(this),
                        a = s.data("remote") !== e;
                    if (!n.allowAction(s)) return n.stopEverything(i);
                    if (s.attr("novalidate") == e && ((o = n.blankInputs(s, n.requiredInputSelector)), o && n.fire(s, "ajax:aborted:required", [o]))) return n.stopEverything(i);
                    if (a) {
                        if ((r = n.nonBlankInputs(s, n.fileInputSelector))) {
                            setTimeout(function () {
                                n.disableFormElements(s);
                            }, 13);
                            var l = n.fire(s, "ajax:aborted:file", [r]);
                            return (
                                l ||
                                    setTimeout(function () {
                                        n.enableFormElements(s);
                                    }, 13),
                                l
                            );
                        }
                        return n.handleRemote(s), !1;
                    }
                    setTimeout(function () {
                        n.disableFormElements(s);
                    }, 13);
                }),
                i.delegate(n.formInputClickSelector, "click.rails", function (e) {
                    var i = t(this);
                    if (!n.allowAction(i)) return n.stopEverything(e);
                    var o = i.attr("name"),
                        r = o ? { name: o, value: i.val() } : null;
                    i.closest("form").data("ujs:submit-button", r);
                }),
                i.delegate(n.formSubmitSelector, "ajax:send.rails", function (e) {
                    this == e.target && n.disableFormElements(t(this));
                }),
                i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (e) {
                    this == e.target && n.enableFormElements(t(this));
                }),
                t(function () {
                    n.refreshCSRFTokens();
                }));
    })(jQuery),
    function () {
        var t,
            e,
            n,
            i,
            o,
            r,
            s,
            a,
            l,
            c,
            u,
            d,
            h,
            p,
            f,
            m,
            g,
            v,
            y,
            b,
            w,
            x,
            T,
            C,
            E,
            $,
            k,
            S,
            N,
            D,
            j,
            A,
            L,
            H,
            O,
            F,
            _,
            P,
            R,
            I,
            q,
            M,
            W,
            B,
            U,
            z,
            X,
            V,
            Q,
            G,
            J,
            Y,
            K,
            Z =
                [].indexOf ||
                function (t) {
                    for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
                    return -1;
                },
            te = {}.hasOwnProperty,
            ee = function (t, e) {
                function n() {
                    this.constructor = t;
                }
                for (var i in e) te.call(e, i) && (t[i] = e[i]);
                return (n.prototype = e.prototype), (t.prototype = new n()), (t.__super__ = e.prototype), t;
            },
            ne = [].slice;
        (A = {}),
            (h = 10),
            (V = !1),
            (v = null),
            (D = null),
            (P = null),
            (g = null),
            (Y = null),
            (i = {
                BEFORE_CHANGE: "page:before-change",
                FETCH: "page:fetch",
                RECEIVE: "page:receive",
                CHANGE: "page:change",
                UPDATE: "page:update",
                LOAD: "page:load",
                RESTORE: "page:restore",
                BEFORE_UNLOAD: "page:before-unload",
                EXPIRE: "page:expire",
            }),
            (x = function (t) {
                var e;
                return (t = new n(t)), W(), d(), V && (e = Q(t.absolute)) ? (T(e), C(t)) : C(t, z);
            }),
            (Q = function (t) {
                var e;
                return (e = A[t]), e && !e.transitionCacheDisabled ? e : void 0;
            }),
            (y = function (t) {
                return null == t && (t = !0), (V = t);
            }),
            (C = function (t, e) {
                return (
                    null == e &&
                        (e = (function () {
                            return function () {};
                        })(this)),
                    G(i.FETCH, { url: t.absolute }),
                    null != Y && Y.abort(),
                    (Y = new XMLHttpRequest()),
                    Y.open("GET", t.withoutHashForIE10compatibility(), !0),
                    Y.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"),
                    Y.setRequestHeader("X-XHR-Referer", P),
                    (Y.onload = function () {
                        var n;
                        return G(i.RECEIVE, { url: t.absolute }), (n = F()) ? (R(t), p.apply(null, w(n)), j(), I(), e(), G(i.LOAD)) : (document.location.href = t.absolute);
                    }),
                    (Y.onloadend = function () {
                        return (Y = null);
                    }),
                    (Y.onerror = function () {
                        return (document.location.href = t.absolute);
                    }),
                    Y.send()
                );
            }),
            (T = function (t) {
                return null != Y && Y.abort(), p(t.title, t.body), _(t), G(i.RESTORE);
            }),
            (d = function () {
                var t;
                return (
                    (t = new n(v.url)),
                    (A[t.absolute] = {
                        url: t.relative,
                        body: document.body,
                        title: document.title,
                        positionY: window.pageYOffset,
                        positionX: window.pageXOffset,
                        cachedAt: new Date().getTime(),
                        transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]"),
                    }),
                    m(h)
                );
            }),
            (H = function (t) {
                return null == t && (t = h), /^[\d]+$/.test(t) ? (h = parseInt(t)) : void 0;
            }),
            (m = function (t) {
                var e, n, o, r, s, a;
                for (
                    o = Object.keys(A),
                        e = o
                            .map(function (t) {
                                return A[t].cachedAt;
                            })
                            .sort(function (t, e) {
                                return e - t;
                            }),
                        a = [],
                        r = 0,
                        s = o.length;
                    s > r;
                    r++
                )
                    (n = o[r]), A[n].cachedAt <= e[t] && (G(i.EXPIRE, A[n]), a.push(delete A[n]));
                return a;
            }),
            (p = function (e, n, o, r) {
                return G(i.BEFORE_UNLOAD), (document.title = e), document.documentElement.replaceChild(n, document.body), null != o && t.update(o), X(), r && b(), (v = window.history.state), G(i.CHANGE), G(i.UPDATE);
            }),
            (b = function () {
                var t, e, n, i, o, r, s, a, l, c, u, d;
                for (r = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), s = 0, l = r.length; l > s; s++)
                    if (((o = r[s]), "" === (u = o.type) || "text/javascript" === u)) {
                        for (e = document.createElement("script"), d = o.attributes, a = 0, c = d.length; c > a; a++) (t = d[a]), e.setAttribute(t.name, t.value);
                        o.hasAttribute("async") || (e.async = !1), e.appendChild(document.createTextNode(o.innerHTML)), (i = o.parentNode), (n = o.nextSibling), i.removeChild(o), i.insertBefore(e, n);
                    }
            }),
            (B = function (t) {
                return (t.innerHTML = t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, "")), t;
            }),
            (X = function () {
                var t, e;
                return (t = (e = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length - 1]), t && document.activeElement !== t ? t.focus() : void 0;
            }),
            (R = function (t) {
                return (t = new n(t)).absolute !== P ? window.history.pushState({ turbolinks: !0, url: t.absolute }, "", t.absolute) : void 0;
            }),
            (I = function () {
                var t, e;
                return (t = Y.getResponseHeader("X-XHR-Redirected-To")) ? ((t = new n(t)), (e = t.hasNoHash() ? document.location.hash : ""), window.history.replaceState(v, "", t.href + e)) : void 0;
            }),
            (W = function () {
                return (P = document.location.href);
            }),
            (M = function () {
                return window.history.replaceState({ turbolinks: !0, url: document.location.href }, "", document.location.href);
            }),
            (q = function () {
                return (v = window.history.state);
            }),
            (j = function () {
                var t;
                return navigator.userAgent.match(/Firefox/) && !(t = new n()).hasNoHash() ? (window.history.replaceState(v, "", t.withoutHash()), (document.location.hash = t.hash)) : void 0;
            }),
            (_ = function (t) {
                return window.scrollTo(t.positionX, t.positionY);
            }),
            (z = function () {
                return document.location.hash ? (document.location.href = document.location.href) : window.scrollTo(0, 0);
            }),
            (f = function (t) {
                var e, n, i;
                if (null == t || "object" != typeof t) return t;
                e = new t.constructor();
                for (n in t) (i = t[n]), (e[n] = f(i));
                return e;
            }),
            (O = function (t) {
                var e, n;
                return (e = (null != (n = document.cookie.match(new RegExp(t + "=(\\w+)"))) ? n[1].toUpperCase() : void 0) || ""), (document.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/"), e;
            }),
            (G = function (t, e) {
                var n;
                return "undefined" != typeof Prototype && Event.fire(document, t, e, !0), (n = document.createEvent("Events")), e && (n.data = e), n.initEvent(t, !0, !0), document.dispatchEvent(n);
            }),
            (L = function (t) {
                return !G(i.BEFORE_CHANGE, { url: t });
            }),
            (F = function () {
                var t, e, n, i, o, r;
                return (
                    (e = function () {
                        var t;
                        return 400 <= (t = Y.status) && 600 > t;
                    }),
                    (r = function () {
                        var t;
                        return null != (t = Y.getResponseHeader("Content-Type")) && t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
                    }),
                    (i = function (t) {
                        var e, n, i, o, r;
                        for (o = t.querySelector("head").childNodes, r = [], n = 0, i = o.length; i > n; n++)
                            (e = o[n]), null != ("function" == typeof e.getAttribute ? e.getAttribute("data-turbolinks-track") : void 0) && r.push(e.getAttribute("src") || e.getAttribute("href"));
                        return r;
                    }),
                    (t = function (t) {
                        var e;
                        return D || (D = i(document)), (e = i(t)), e.length !== D.length || o(e, D).length !== D.length;
                    }),
                    (o = function (t, e) {
                        var n, i, o, r, s;
                        for (t.length > e.length && ((r = [e, t]), (t = r[0]), (e = r[1])), s = [], i = 0, o = t.length; o > i; i++) (n = t[i]), Z.call(e, n) >= 0 && s.push(n);
                        return s;
                    }),
                    !e() && r() && ((n = g(Y.responseText)), n && !t(n)) ? n : void 0
                );
            }),
            (w = function (e) {
                var n;
                return (n = e.querySelector("title")), [null != n ? n.textContent : void 0, B(e.querySelector("body")), t.get(e).token, "runScripts"];
            }),
            (t = {
                get: function (t) {
                    var e;
                    return null == t && (t = document), { node: (e = t.querySelector('meta[name="csrf-token"]')), token: null != e && "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0 };
                },
                update: function (t) {
                    var e;
                    return (e = this.get()), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0;
                },
            }),
            (r = function () {
                var t, e, n, i, o, r, s, a, l, c;
                (i = function (t) {
                    return new DOMParser().parseFromString(t, "text/html");
                }),
                    (e = function (t) {
                        var e;
                        return (e = document.implementation.createHTMLDocument("")), (e.documentElement.innerHTML = t), e;
                    }),
                    (o = function (t) {
                        var e;
                        return (e = document.implementation.createHTMLDocument("")), e.open("replace"), e.write(t), e.close(), e;
                    }),
                    (n = function (t) {
                        var e, n, i, o, r, s;
                        return (
                            (i = (null != (r = t.match(/<head[^>]*>([\s\S.]*)<\/head>/i)) ? r[0] : void 0) || "<head></head>"),
                            (e = (null != (s = t.match(/<body[^>]*>([\s\S.]*)<\/body>/i)) ? s[0] : void 0) || "<body></body>"),
                            (o = document.createElement("html")),
                            (o.innerHTML = i + e),
                            (n = document.createDocumentFragment()),
                            n.appendChild(o),
                            n
                        );
                    }),
                    (t = function (t) {
                        var e, i, r;
                        return (
                            (e = function (t, e) {
                                return { passes: e(), fallback: t };
                            }),
                            (r = e(
                                o,
                                (function () {
                                    return function () {
                                        var e, n;
                                        return 1 === (null != (e = t("<html><body><p>test")) && null != (n = e.body) ? n.childNodes.length : void 0);
                                    };
                                })(this)
                            )),
                            (i = e(
                                n,
                                (function () {
                                    return function () {
                                        var e, n;
                                        return 2 === (null != (e = t("<html><body><form></form><div></div></body></html>")) && null != (n = e.body) ? n.childNodes.length : void 0);
                                    };
                                })(this)
                            )),
                            [r, i]
                        );
                    });
                try {
                    if (window.DOMParser) return (s = t(i)), i;
                } catch (u) {
                    return (a = u), (s = t(e)), e;
                } finally {
                    for (l = 0, c = s.length; c > l; l++) if (((r = s[l]), !r.passes)) return r.fallback;
                }
            }),
            (n = (function () {
                function t(e) {
                    return (this.original = null != e ? e : document.location.href), this.original.constructor === t ? this.original : void this._parse();
                }
                return (
                    (t.prototype.withoutHash = function () {
                        return this.href.replace(this.hash, "").replace("#", "");
                    }),
                    (t.prototype.withoutHashForIE10compatibility = function () {
                        return this.withoutHash();
                    }),
                    (t.prototype.hasNoHash = function () {
                        return 0 === this.hash.length;
                    }),
                    (t.prototype._parse = function () {
                        var t;
                        return (
                            ((null != this.link ? this.link : (this.link = document.createElement("a"))).href = this.original),
                            (t = this.link),
                            (this.href = t.href),
                            (this.protocol = t.protocol),
                            (this.host = t.host),
                            (this.hostname = t.hostname),
                            (this.port = t.port),
                            (this.pathname = t.pathname),
                            (this.search = t.search),
                            (this.hash = t.hash),
                            (this.origin = [this.protocol, "//", this.hostname].join("")),
                            0 !== this.port.length && (this.origin += ":" + this.port),
                            (this.relative = [this.pathname, this.search, this.hash].join("")),
                            (this.absolute = this.href)
                        );
                    }),
                    t
                );
            })()),
            (o = (function (t) {
                function e(t) {
                    return (
                        (this.link = t),
                        this.link.constructor === e ? this.link : ((this.original = this.link.href), (this.originalElement = this.link), (this.link = this.link.cloneNode(!1)), void e.__super__.constructor.apply(this, arguments))
                    );
                }
                return (
                    ee(e, t),
                    (e.HTML_EXTENSIONS = ["html"]),
                    (e.allowExtensions = function () {
                        var t, n, i, o;
                        for (n = 1 <= arguments.length ? ne.call(arguments, 0) : [], i = 0, o = n.length; o > i; i++) (t = n[i]), e.HTML_EXTENSIONS.push(t);
                        return e.HTML_EXTENSIONS;
                    }),
                    (e.prototype.shouldIgnore = function () {
                        return this._crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
                    }),
                    (e.prototype._crossOrigin = function () {
                        return this.origin !== new n().origin;
                    }),
                    (e.prototype._anchored = function () {
                        return (this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === new n().withoutHash();
                    }),
                    (e.prototype._nonHtml = function () {
                        return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + e.HTML_EXTENSIONS.join("|") + ")?$", "g"));
                    }),
                    (e.prototype._optOut = function () {
                        var t, e;
                        for (e = this.originalElement; !t && e !== document; ) (t = null != e.getAttribute("data-no-turbolink")), (e = e.parentNode);
                        return t;
                    }),
                    (e.prototype._target = function () {
                        return 0 !== this.link.target.length;
                    }),
                    e
                );
            })(n)),
            (e = (function () {
                function t(t) {
                    (this.event = t), this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (L(this.link.absolute) || J(this.link.href), this.event.preventDefault()));
                }
                return (
                    (t.installHandlerLast = function (e) {
                        return e.defaultPrevented ? void 0 : (document.removeEventListener("click", t.handle, !1), document.addEventListener("click", t.handle, !1));
                    }),
                    (t.handle = function (e) {
                        return new t(e);
                    }),
                    (t.prototype._extractLink = function () {
                        var t;
                        for (t = this.event.target; t.parentNode && "A" !== t.nodeName; ) t = t.parentNode;
                        return "A" === t.nodeName && 0 !== t.href.length ? (this.link = new o(t)) : void 0;
                    }),
                    (t.prototype._validForTurbolinks = function () {
                        return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick());
                    }),
                    (t.prototype._nonStandardClick = function () {
                        return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
                    }),
                    t
                );
            })()),
            (u = function (t) {
                return setTimeout(t, 500);
            }),
            (k = function () {
                return document.addEventListener(
                    "DOMContentLoaded",
                    function () {
                        return G(i.CHANGE), G(i.UPDATE);
                    },
                    !0
                );
            }),
            (N = function () {
                return "undefined" != typeof jQuery
                    ? jQuery(document).on("ajaxSuccess", function (t, e) {
                          return jQuery.trim(e.responseText) ? G(i.UPDATE) : void 0;
                      })
                    : void 0;
            }),
            (S = function (t) {
                var e, i;
                return (null != (i = t.state) ? i.turbolinks : void 0) ? ((e = A[new n(t.state.url).absolute]) ? (d(), T(e)) : J(t.target.location.href)) : void 0;
            }),
            ($ = function () {
                return (
                    M(),
                    q(),
                    (g = r()),
                    document.addEventListener("click", e.installHandlerLast, !0),
                    window.addEventListener(
                        "hashchange",
                        function () {
                            return M(), q();
                        },
                        !1
                    ),
                    u(function () {
                        return window.addEventListener("popstate", S, !1);
                    })
                );
            }),
            (E = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/)),
            (l = window.history && window.history.pushState && window.history.replaceState && E),
            (s = !navigator.userAgent.match(/CriOS\//)),
            (U = "GET" === (K = O("request_method")) || "" === K),
            (c = l && s && U),
            (a = document.addEventListener && document.createEvent),
            a && (k(), N()),
            c
                ? ((J = x), $())
                : (J = function (t) {
                      return (document.location.href = t);
                  }),
            (this.Turbolinks = { visit: J, pagesCached: H, enableTransitionCache: y, allowLinkExtensions: o.allowExtensions, supported: c, EVENTS: f(i) });
    }.call(this),
    "undefined" == typeof jQuery)
)
    throw new Error("Bootstrap's JavaScript requires jQuery");
if (
    (+(function (t) {
        "use strict";
        function e() {
            var t = document.createElement("bootstrap"),
                e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
            for (var n in e) if (void 0 !== t.style[n]) return { end: e[n] };
            return !1;
        }
        (t.fn.emulateTransitionEnd = function (e) {
            var n = !1,
                i = this;
            t(this).one("bsTransitionEnd", function () {
                n = !0;
            });
            var o = function () {
                n || t(i).trigger(t.support.transition.end);
            };
            return setTimeout(o, e), this;
        }),
            t(function () {
                (t.support.transition = e()),
                    t.support.transition &&
                        (t.event.special.bsTransitionEnd = {
                            bindType: t.support.transition.end,
                            delegateType: t.support.transition.end,
                            handle: function (e) {
                                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
                            },
                        });
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this),
                    o = n.data("bs.alert");
                o || n.data("bs.alert", (o = new i(this))), "string" == typeof e && o[e].call(n);
            });
        }
        var n = '[data-dismiss="alert"]',
            i = function (e) {
                t(e).on("click", n, this.close);
            };
        (i.VERSION = "3.2.0"),
            (i.prototype.close = function (e) {
                function n() {
                    r.detach().trigger("closed.bs.alert").remove();
                }
                var i = t(this),
                    o = i.attr("data-target");
                o || ((o = i.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, "")));
                var r = t(o);
                e && e.preventDefault(),
                    r.length || (r = i.hasClass("alert") ? i : i.parent()),
                    r.trigger((e = t.Event("close.bs.alert"))),
                    e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n());
            });
        var o = t.fn.alert;
        (t.fn.alert = e),
            (t.fn.alert.Constructor = i),
            (t.fn.alert.noConflict = function () {
                return (t.fn.alert = o), this;
            }),
            t(document).on("click.bs.alert.data-api", n, i.prototype.close);
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.button"),
                    r = "object" == typeof e && e;
                o || i.data("bs.button", (o = new n(this, r))), "toggle" == e ? o.toggle() : e && o.setState(e);
            });
        }
        var n = function (e, i) {
            (this.$element = t(e)), (this.options = t.extend({}, n.DEFAULTS, i)), (this.isLoading = !1);
        };
        (n.VERSION = "3.2.0"),
            (n.DEFAULTS = { loadingText: "loading..." }),
            (n.prototype.setState = function (e) {
                var n = "disabled",
                    i = this.$element,
                    o = i.is("input") ? "val" : "html",
                    r = i.data();
                (e += "Text"),
                    null == r.resetText && i.data("resetText", i[o]()),
                    i[o](null == r[e] ? this.options[e] : r[e]),
                    setTimeout(
                        t.proxy(function () {
                            "loadingText" == e ? ((this.isLoading = !0), i.addClass(n).attr(n, n)) : this.isLoading && ((this.isLoading = !1), i.removeClass(n).removeAttr(n));
                        }, this),
                        0
                    );
            }),
            (n.prototype.toggle = function () {
                var t = !0,
                    e = this.$element.closest('[data-toggle="buttons"]');
                if (e.length) {
                    var n = this.$element.find("input");
                    "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? (t = !1) : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change");
                }
                t && this.$element.toggleClass("active");
            });
        var i = t.fn.button;
        (t.fn.button = e),
            (t.fn.button.Constructor = n),
            (t.fn.button.noConflict = function () {
                return (t.fn.button = i), this;
            }),
            t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
                var i = t(n.target);
                i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault();
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.carousel"),
                    r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                    s = "string" == typeof e ? e : r.slide;
                o || i.data("bs.carousel", (o = new n(this, r))), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle();
            });
        }
        var n = function (e, n) {
            (this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this))),
                (this.$indicators = this.$element.find(".carousel-indicators")),
                (this.options = n),
                (this.paused = this.sliding = this.interval = this.$active = this.$items = null),
                "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
        };
        (n.VERSION = "3.2.0"),
            (n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }),
            (n.prototype.keydown = function (t) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return;
                }
                t.preventDefault();
            }),
            (n.prototype.cycle = function (e) {
                return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this;
            }),
            (n.prototype.getItemIndex = function (t) {
                return (this.$items = t.parent().children(".item")), this.$items.index(t || this.$active);
            }),
            (n.prototype.to = function (e) {
                var n = this,
                    i = this.getItemIndex((this.$active = this.$element.find(".item.active")));
                return e > this.$items.length - 1 || 0 > e
                    ? void 0
                    : this.sliding
                    ? this.$element.one("slid.bs.carousel", function () {
                          n.to(e);
                      })
                    : i == e
                    ? this.pause().cycle()
                    : this.slide(e > i ? "next" : "prev", t(this.$items[e]));
            }),
            (n.prototype.pause = function (e) {
                return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), (this.interval = clearInterval(this.interval)), this;
            }),
            (n.prototype.next = function () {
                return this.sliding ? void 0 : this.slide("next");
            }),
            (n.prototype.prev = function () {
                return this.sliding ? void 0 : this.slide("prev");
            }),
            (n.prototype.slide = function (e, n) {
                var i = this.$element.find(".item.active"),
                    o = n || i[e](),
                    r = this.interval,
                    s = "next" == e ? "left" : "right",
                    a = "next" == e ? "first" : "last",
                    l = this;
                if (!o.length) {
                    if (!this.options.wrap) return;
                    o = this.$element.find(".item")[a]();
                }
                if (o.hasClass("active")) return (this.sliding = !1);
                var c = o[0],
                    u = t.Event("slide.bs.carousel", { relatedTarget: c, direction: s });
                if ((this.$element.trigger(u), !u.isDefaultPrevented())) {
                    if (((this.sliding = !0), r && this.pause(), this.$indicators.length)) {
                        this.$indicators.find(".active").removeClass("active");
                        var d = t(this.$indicators.children()[this.getItemIndex(o)]);
                        d && d.addClass("active");
                    }
                    var h = t.Event("slid.bs.carousel", { relatedTarget: c, direction: s });
                    return (
                        t.support.transition && this.$element.hasClass("slide")
                            ? (o.addClass(e),
                              o[0].offsetWidth,
                              i.addClass(s),
                              o.addClass(s),
                              i
                                  .one("bsTransitionEnd", function () {
                                      o.removeClass([e, s].join(" ")).addClass("active"),
                                          i.removeClass(["active", s].join(" ")),
                                          (l.sliding = !1),
                                          setTimeout(function () {
                                              l.$element.trigger(h);
                                          }, 0);
                                  })
                                  .emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1)))
                            : (i.removeClass("active"), o.addClass("active"), (this.sliding = !1), this.$element.trigger(h)),
                        r && this.cycle(),
                        this
                    );
                }
            });
        var i = t.fn.carousel;
        (t.fn.carousel = e),
            (t.fn.carousel.Constructor = n),
            (t.fn.carousel.noConflict = function () {
                return (t.fn.carousel = i), this;
            }),
            t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (n) {
                var i,
                    o = t(this),
                    r = t(o.attr("data-target") || ((i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")));
                if (r.hasClass("carousel")) {
                    var s = t.extend({}, r.data(), o.data()),
                        a = o.attr("data-slide-to");
                    a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault();
                }
            }),
            t(window).on("load", function () {
                t('[data-ride="carousel"]').each(function () {
                    var n = t(this);
                    e.call(n, n.data());
                });
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.collapse"),
                    r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
                !o && r.toggle && "show" == e && (e = !e), o || i.data("bs.collapse", (o = new n(this, r))), "string" == typeof e && o[e]();
            });
        }
        var n = function (e, i) {
            (this.$element = t(e)), (this.options = t.extend({}, n.DEFAULTS, i)), (this.transitioning = null), this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle();
        };
        (n.VERSION = "3.2.0"),
            (n.DEFAULTS = { toggle: !0 }),
            (n.prototype.dimension = function () {
                var t = this.$element.hasClass("width");
                return t ? "width" : "height";
            }),
            (n.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var n = t.Event("show.bs.collapse");
                    if ((this.$element.trigger(n), !n.isDefaultPrevented())) {
                        var i = this.$parent && this.$parent.find("> .panel > .in");
                        if (i && i.length) {
                            var o = i.data("bs.collapse");
                            if (o && o.transitioning) return;
                            e.call(i, "hide"), o || i.data("bs.collapse", null);
                        }
                        var r = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[r](0), (this.transitioning = 1);
                        var s = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[r](""), (this.transitioning = 0), this.$element.trigger("shown.bs.collapse");
                        };
                        if (!t.support.transition) return s.call(this);
                        var a = t.camelCase(["scroll", r].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(350)[r](this.$element[0][a]);
                    }
                }
            }),
            (n.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var e = t.Event("hide.bs.collapse");
                    if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
                        var n = this.dimension();
                        this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), (this.transitioning = 1);
                        var i = function () {
                            (this.transitioning = 0), this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
                        };
                        return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this);
                    }
                }
            }),
            (n.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            });
        var i = t.fn.collapse;
        (t.fn.collapse = e),
            (t.fn.collapse.Constructor = n),
            (t.fn.collapse.noConflict = function () {
                return (t.fn.collapse = i), this;
            }),
            t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
                var i,
                    o = t(this),
                    r = o.attr("data-target") || n.preventDefault() || ((i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")),
                    s = t(r),
                    a = s.data("bs.collapse"),
                    l = a ? "toggle" : o.data(),
                    c = o.attr("data-parent"),
                    u = c && t(c);
                (a && a.transitioning) ||
                    (u &&
                        u
                            .find('[data-toggle="collapse"][data-parent="' + c + '"]')
                            .not(o)
                            .addClass("collapsed"),
                    o[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")),
                    e.call(s, l);
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            (e && 3 === e.which) ||
                (t(o).remove(),
                t(r).each(function () {
                    var i = n(t(this)),
                        o = { relatedTarget: this };
                    i.hasClass("open") && (i.trigger((e = t.Event("hide.bs.dropdown", o))), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", o));
                }));
        }
        function n(e) {
            var n = e.attr("data-target");
            n || ((n = e.attr("href")), (n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")));
            var i = n && t(n);
            return i && i.length ? i : e.parent();
        }
        function i(e) {
            return this.each(function () {
                var n = t(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", (i = new s(this))), "string" == typeof e && i[e].call(n);
            });
        }
        var o = ".dropdown-backdrop",
            r = '[data-toggle="dropdown"]',
            s = function (e) {
                t(e).on("click.bs.dropdown", this.toggle);
            };
        (s.VERSION = "3.2.0"),
            (s.prototype.toggle = function (i) {
                var o = t(this);
                if (!o.is(".disabled, :disabled")) {
                    var r = n(o),
                        s = r.hasClass("open");
                    if ((e(), !s)) {
                        "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                        var a = { relatedTarget: this };
                        if ((r.trigger((i = t.Event("show.bs.dropdown", a))), i.isDefaultPrevented())) return;
                        o.trigger("focus"), r.toggleClass("open").trigger("shown.bs.dropdown", a);
                    }
                    return !1;
                }
            }),
            (s.prototype.keydown = function (e) {
                if (/(38|40|27)/.test(e.keyCode)) {
                    var i = t(this);
                    if ((e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled"))) {
                        var o = n(i),
                            s = o.hasClass("open");
                        if (!s || (s && 27 == e.keyCode)) return 27 == e.which && o.find(r).trigger("focus"), i.trigger("click");
                        var a = " li:not(.divider):visible a",
                            l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                        if (l.length) {
                            var c = l.index(l.filter(":focus"));
                            38 == e.keyCode && c > 0 && c--, 40 == e.keyCode && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus");
                        }
                    }
                }
            });
        var a = t.fn.dropdown;
        (t.fn.dropdown = i),
            (t.fn.dropdown.Constructor = s),
            (t.fn.dropdown.noConflict = function () {
                return (t.fn.dropdown = a), this;
            }),
            t(document)
                .on("click.bs.dropdown.data-api", e)
                .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                    t.stopPropagation();
                })
                .on("click.bs.dropdown.data-api", r, s.prototype.toggle)
                .on("keydown.bs.dropdown.data-api", r + ', [role="menu"], [role="listbox"]', s.prototype.keydown);
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e, i) {
            return this.each(function () {
                var o = t(this),
                    r = o.data("bs.modal"),
                    s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
                r || o.data("bs.modal", (r = new n(this, s))), "string" == typeof e ? r[e](i) : s.show && r.show(i);
            });
        }
        var n = function (e, n) {
            (this.options = n),
                (this.$body = t(document.body)),
                (this.$element = t(e)),
                (this.$backdrop = this.isShown = null),
                (this.scrollbarWidth = 0),
                this.options.remote &&
                    this.$element.find(".modal-content").load(
                        this.options.remote,
                        t.proxy(function () {
                            this.$element.trigger("loaded.bs.modal");
                        }, this)
                    );
        };
        (n.VERSION = "3.2.0"),
            (n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
            (n.prototype.toggle = function (t) {
                return this.isShown ? this.hide() : this.show(t);
            }),
            (n.prototype.show = function (e) {
                var n = this,
                    i = t.Event("show.bs.modal", { relatedTarget: e });
                this.$element.trigger(i),
                    this.isShown ||
                        i.isDefaultPrevented() ||
                        ((this.isShown = !0),
                        this.checkScrollbar(),
                        this.$body.addClass("modal-open"),
                        this.setScrollbar(),
                        this.escape(),
                        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
                        this.backdrop(function () {
                            var i = t.support.transition && n.$element.hasClass("fade");
                            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
                            var o = t.Event("shown.bs.modal", { relatedTarget: e });
                            i
                                ? n.$element
                                      .find(".modal-dialog")
                                      .one("bsTransitionEnd", function () {
                                          n.$element.trigger("focus").trigger(o);
                                      })
                                      .emulateTransitionEnd(300)
                                : n.$element.trigger("focus").trigger(o);
                        }));
            }),
            (n.prototype.hide = function (e) {
                e && e.preventDefault(),
                    (e = t.Event("hide.bs.modal")),
                    this.$element.trigger(e),
                    this.isShown &&
                        !e.isDefaultPrevented() &&
                        ((this.isShown = !1),
                        this.$body.removeClass("modal-open"),
                        this.resetScrollbar(),
                        this.escape(),
                        t(document).off("focusin.bs.modal"),
                        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"),
                        t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
            }),
            (n.prototype.enforceFocus = function () {
                t(document)
                    .off("focusin.bs.modal")
                    .on(
                        "focusin.bs.modal",
                        t.proxy(function (t) {
                            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
                        }, this)
                    );
            }),
            (n.prototype.escape = function () {
                this.isShown && this.options.keyboard
                    ? this.$element.on(
                          "keyup.dismiss.bs.modal",
                          t.proxy(function (t) {
                              27 == t.which && this.hide();
                          }, this)
                      )
                    : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
            }),
            (n.prototype.hideModal = function () {
                var t = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        t.$element.trigger("hidden.bs.modal");
                    });
            }),
            (n.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
            }),
            (n.prototype.backdrop = function (e) {
                var n = this,
                    i = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var o = t.support.transition && i;
                    if (
                        ((this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body)),
                        this.$element.on(
                            "click.dismiss.bs.modal",
                            t.proxy(function (t) {
                                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
                            }, this)
                        ),
                        o && this.$backdrop[0].offsetWidth,
                        this.$backdrop.addClass("in"),
                        !e)
                    )
                        return;
                    o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e();
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var r = function () {
                        n.removeBackdrop(), e && e();
                    };
                    t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r();
                } else e && e();
            }),
            (n.prototype.checkScrollbar = function () {
                document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar());
            }),
            (n.prototype.setScrollbar = function () {
                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth);
            }),
            (n.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", "");
            }),
            (n.prototype.measureScrollbar = function () {
                var t = document.createElement("div");
                (t.className = "modal-scrollbar-measure"), this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t), e;
            });
        var i = t.fn.modal;
        (t.fn.modal = e),
            (t.fn.modal.Constructor = n),
            (t.fn.modal.noConflict = function () {
                return (t.fn.modal = i), this;
            }),
            t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
                var i = t(this),
                    o = i.attr("href"),
                    r = t(i.attr("data-target") || (o && o.replace(/.*(?=#[^\s]+$)/, ""))),
                    s = r.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(o) && o }, r.data(), i.data());
                i.is("a") && n.preventDefault(),
                    r.one("show.bs.modal", function (t) {
                        t.isDefaultPrevented() ||
                            r.one("hidden.bs.modal", function () {
                                i.is(":visible") && i.trigger("focus");
                            });
                    }),
                    e.call(r, s, this);
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.tooltip"),
                    r = "object" == typeof e && e;
                (o || "destroy" != e) && (o || i.data("bs.tooltip", (o = new n(this, r))), "string" == typeof e && o[e]());
            });
        }
        var n = function (t, e) {
            (this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null), this.init("tooltip", t, e);
        };
        (n.VERSION = "3.2.0"),
            (n.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: { selector: "body", padding: 0 },
            }),
            (n.prototype.init = function (e, n, i) {
                (this.enabled = !0), (this.type = e), (this.$element = t(n)), (this.options = this.getOptions(i)), (this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport));
                for (var o = this.options.trigger.split(" "), r = o.length; r--; ) {
                    var s = o[r];
                    if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                    else if ("manual" != s) {
                        var a = "hover" == s ? "mouseenter" : "focusin",
                            l = "hover" == s ? "mouseleave" : "focusout";
                        this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this));
                    }
                }
                this.options.selector ? (this._options = t.extend({}, this.options, { trigger: "manual", selector: "" })) : this.fixTitle();
            }),
            (n.prototype.getDefaults = function () {
                return n.DEFAULTS;
            }),
            (n.prototype.getOptions = function (e) {
                return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e;
            }),
            (n.prototype.getDelegateOptions = function () {
                var e = {},
                    n = this.getDefaults();
                return (
                    this._options &&
                        t.each(this._options, function (t, i) {
                            n[t] != i && (e[t] = i);
                        }),
                    e
                );
            }),
            (n.prototype.enter = function (e) {
                var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                return (
                    n || ((n = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, n)),
                    clearTimeout(n.timeout),
                    (n.hoverState = "in"),
                    n.options.delay && n.options.delay.show
                        ? void (n.timeout = setTimeout(function () {
                              "in" == n.hoverState && n.show();
                          }, n.options.delay.show))
                        : n.show()
                );
            }),
            (n.prototype.leave = function (e) {
                var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                return (
                    n || ((n = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, n)),
                    clearTimeout(n.timeout),
                    (n.hoverState = "out"),
                    n.options.delay && n.options.delay.hide
                        ? void (n.timeout = setTimeout(function () {
                              "out" == n.hoverState && n.hide();
                          }, n.options.delay.hide))
                        : n.hide()
                );
            }),
            (n.prototype.show = function () {
                var e = t.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e);
                    var n = t.contains(document.documentElement, this.$element[0]);
                    if (e.isDefaultPrevented() || !n) return;
                    var i = this,
                        o = this.tip(),
                        r = this.getUID(this.type);
                    this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
                    var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                        a = /\s?auto?\s?/i,
                        l = a.test(s);
                    l && (s = s.replace(a, "") || "top"),
                        o
                            .detach()
                            .css({ top: 0, left: 0, display: "block" })
                            .addClass(s)
                            .data("bs." + this.type, this),
                        this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
                    var c = this.getPosition(),
                        u = o[0].offsetWidth,
                        d = o[0].offsetHeight;
                    if (l) {
                        var h = s,
                            p = this.$element.parent(),
                            f = this.getPosition(p);
                        (s =
                            "bottom" == s && c.top + c.height + d - f.scroll > f.height
                                ? "top"
                                : "top" == s && c.top - f.scroll - d < 0
                                ? "bottom"
                                : "right" == s && c.right + u > f.width
                                ? "left"
                                : "left" == s && c.left - u < f.left
                                ? "right"
                                : s),
                            o.removeClass(h).addClass(s);
                    }
                    var m = this.getCalculatedOffset(s, c, u, d);
                    this.applyPlacement(m, s);
                    var g = function () {
                        i.$element.trigger("shown.bs." + i.type), (i.hoverState = null);
                    };
                    t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g();
                }
            }),
            (n.prototype.applyPlacement = function (e, n) {
                var i = this.tip(),
                    o = i[0].offsetWidth,
                    r = i[0].offsetHeight,
                    s = parseInt(i.css("margin-top"), 10),
                    a = parseInt(i.css("margin-left"), 10);
                isNaN(s) && (s = 0),
                    isNaN(a) && (a = 0),
                    (e.top = e.top + s),
                    (e.left = e.left + a),
                    t.offset.setOffset(
                        i[0],
                        t.extend(
                            {
                                using: function (t) {
                                    i.css({ top: Math.round(t.top), left: Math.round(t.left) });
                                },
                            },
                            e
                        ),
                        0
                    ),
                    i.addClass("in");
                var l = i[0].offsetWidth,
                    c = i[0].offsetHeight;
                "top" == n && c != r && (e.top = e.top + r - c);
                var u = this.getViewportAdjustedDelta(n, e, l, c);
                u.left ? (e.left += u.left) : (e.top += u.top);
                var d = u.left ? 2 * u.left - o + l : 2 * u.top - r + c,
                    h = u.left ? "left" : "top",
                    p = u.left ? "offsetWidth" : "offsetHeight";
                i.offset(e), this.replaceArrow(d, i[0][p], h);
            }),
            (n.prototype.replaceArrow = function (t, e, n) {
                this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "");
            }),
            (n.prototype.setContent = function () {
                var t = this.tip(),
                    e = this.getTitle();
                t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
            }),
            (n.prototype.hide = function () {
                function e() {
                    "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type);
                }
                var n = this,
                    i = this.tip(),
                    o = t.Event("hide.bs." + this.type);
                return (
                    this.$element.removeAttr("aria-describedby"),
                    this.$element.trigger(o),
                    o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), (this.hoverState = null), this)
                );
            }),
            (n.prototype.fixTitle = function () {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
            }),
            (n.prototype.hasContent = function () {
                return this.getTitle();
            }),
            (n.prototype.getPosition = function (e) {
                e = e || this.$element;
                var n = e[0],
                    i = "BODY" == n.tagName;
                return t.extend(
                    {},
                    "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null,
                    { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(), width: i ? t(window).width() : e.outerWidth(), height: i ? t(window).height() : e.outerHeight() },
                    i ? { top: 0, left: 0 } : e.offset()
                );
            }),
            (n.prototype.getCalculatedOffset = function (t, e, n, i) {
                return "bottom" == t
                    ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 }
                    : "top" == t
                    ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 }
                    : "left" == t
                    ? { top: e.top + e.height / 2 - i / 2, left: e.left - n }
                    : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width };
            }),
            (n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
                var o = { top: 0, left: 0 };
                if (!this.$viewport) return o;
                var r = (this.options.viewport && this.options.viewport.padding) || 0,
                    s = this.getPosition(this.$viewport);
                if (/right|left/.test(t)) {
                    var a = e.top - r - s.scroll,
                        l = e.top + r - s.scroll + i;
                    a < s.top ? (o.top = s.top - a) : l > s.top + s.height && (o.top = s.top + s.height - l);
                } else {
                    var c = e.left - r,
                        u = e.left + r + n;
                    c < s.left ? (o.left = s.left - c) : u > s.width && (o.left = s.left + s.width - u);
                }
                return o;
            }),
            (n.prototype.getTitle = function () {
                var t,
                    e = this.$element,
                    n = this.options;
                return (t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title));
            }),
            (n.prototype.getUID = function (t) {
                do t += ~~(1e6 * Math.random());
                while (document.getElementById(t));
                return t;
            }),
            (n.prototype.tip = function () {
                return (this.$tip = this.$tip || t(this.options.template));
            }),
            (n.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
            }),
            (n.prototype.validate = function () {
                this.$element[0].parentNode || (this.hide(), (this.$element = null), (this.options = null));
            }),
            (n.prototype.enable = function () {
                this.enabled = !0;
            }),
            (n.prototype.disable = function () {
                this.enabled = !1;
            }),
            (n.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled;
            }),
            (n.prototype.toggle = function (e) {
                var n = this;
                e && ((n = t(e.currentTarget).data("bs." + this.type)), n || ((n = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, n))),
                    n.tip().hasClass("in") ? n.leave(n) : n.enter(n);
            }),
            (n.prototype.destroy = function () {
                clearTimeout(this.timeout),
                    this.hide()
                        .$element.off("." + this.type)
                        .removeData("bs." + this.type);
            });
        var i = t.fn.tooltip;
        (t.fn.tooltip = e),
            (t.fn.tooltip.Constructor = n),
            (t.fn.tooltip.noConflict = function () {
                return (t.fn.tooltip = i), this;
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.popover"),
                    r = "object" == typeof e && e;
                (o || "destroy" != e) && (o || i.data("bs.popover", (o = new n(this, r))), "string" == typeof e && o[e]());
            });
        }
        var n = function (t, e) {
            this.init("popover", t, e);
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        (n.VERSION = "3.2.0"),
            (n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            })),
            (n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
            (n.prototype.constructor = n),
            (n.prototype.getDefaults = function () {
                return n.DEFAULTS;
            }),
            (n.prototype.setContent = function () {
                var t = this.tip(),
                    e = this.getTitle(),
                    n = this.getContent();
                t.find(".popover-title")[this.options.html ? "html" : "text"](e),
                    t.find(".popover-content").empty()[this.options.html ? ("string" == typeof n ? "html" : "append") : "text"](n),
                    t.removeClass("fade top bottom left right in"),
                    t.find(".popover-title").html() || t.find(".popover-title").hide();
            }),
            (n.prototype.hasContent = function () {
                return this.getTitle() || this.getContent();
            }),
            (n.prototype.getContent = function () {
                var t = this.$element,
                    e = this.options;
                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
            }),
            (n.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
            }),
            (n.prototype.tip = function () {
                return this.$tip || (this.$tip = t(this.options.template)), this.$tip;
            });
        var i = t.fn.popover;
        (t.fn.popover = e),
            (t.fn.popover.Constructor = n),
            (t.fn.popover.noConflict = function () {
                return (t.fn.popover = i), this;
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(n, i) {
            var o = t.proxy(this.process, this);
            (this.$body = t("body")),
                (this.$scrollElement = t(t(n).is("body") ? window : n)),
                (this.options = t.extend({}, e.DEFAULTS, i)),
                (this.selector = (this.options.target || "") + " .nav li > a"),
                (this.offsets = []),
                (this.targets = []),
                (this.activeTarget = null),
                (this.scrollHeight = 0),
                this.$scrollElement.on("scroll.bs.scrollspy", o),
                this.refresh(),
                this.process();
        }
        function n(n) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.scrollspy"),
                    r = "object" == typeof n && n;
                o || i.data("bs.scrollspy", (o = new e(this, r))), "string" == typeof n && o[n]();
            });
        }
        (e.VERSION = "3.2.0"),
            (e.DEFAULTS = { offset: 10 }),
            (e.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
            }),
            (e.prototype.refresh = function () {
                var e = "offset",
                    n = 0;
                t.isWindow(this.$scrollElement[0]) || ((e = "position"), (n = this.$scrollElement.scrollTop())), (this.offsets = []), (this.targets = []), (this.scrollHeight = this.getScrollHeight());
                var i = this;
                this.$body
                    .find(this.selector)
                    .map(function () {
                        var i = t(this),
                            o = i.data("target") || i.attr("href"),
                            r = /^#./.test(o) && t(o);
                        return (r && r.length && r.is(":visible") && [[r[e]().top + n, o]]) || null;
                    })
                    .sort(function (t, e) {
                        return t[0] - e[0];
                    })
                    .each(function () {
                        i.offsets.push(this[0]), i.targets.push(this[1]);
                    });
            }),
            (e.prototype.process = function () {
                var t,
                    e = this.$scrollElement.scrollTop() + this.options.offset,
                    n = this.getScrollHeight(),
                    i = this.options.offset + n - this.$scrollElement.height(),
                    o = this.offsets,
                    r = this.targets,
                    s = this.activeTarget;
                if ((this.scrollHeight != n && this.refresh(), e >= i)) return s != (t = r[r.length - 1]) && this.activate(t);
                if (s && e <= o[0]) return s != (t = r[0]) && this.activate(t);
                for (t = o.length; t--; ) s != r[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(r[t]);
            }),
            (e.prototype.activate = function (e) {
                (this.activeTarget = e), t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
                var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                    i = t(n).parents("li").addClass("active");
                i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy");
            });
        var i = t.fn.scrollspy;
        (t.fn.scrollspy = n),
            (t.fn.scrollspy.Constructor = e),
            (t.fn.scrollspy.noConflict = function () {
                return (t.fn.scrollspy = i), this;
            }),
            t(window).on("load.bs.scrollspy.data-api", function () {
                t('[data-spy="scroll"]').each(function () {
                    var e = t(this);
                    n.call(e, e.data());
                });
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.tab");
                o || i.data("bs.tab", (o = new n(this))), "string" == typeof e && o[e]();
            });
        }
        var n = function (e) {
            this.element = t(e);
        };
        (n.VERSION = "3.2.0"),
            (n.prototype.show = function () {
                var e = this.element,
                    n = e.closest("ul:not(.dropdown-menu)"),
                    i = e.data("target");
                if ((i || ((i = e.attr("href")), (i = i && i.replace(/.*(?=#[^\s]*$)/, ""))), !e.parent("li").hasClass("active"))) {
                    var o = n.find(".active:last a")[0],
                        r = t.Event("show.bs.tab", { relatedTarget: o });
                    if ((e.trigger(r), !r.isDefaultPrevented())) {
                        var s = t(i);
                        this.activate(e.closest("li"), n),
                            this.activate(s, s.parent(), function () {
                                e.trigger({ type: "shown.bs.tab", relatedTarget: o });
                            });
                    }
                }
            }),
            (n.prototype.activate = function (e, n, i) {
                function o() {
                    r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
                        e.addClass("active"),
                        s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
                        e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"),
                        i && i();
                }
                var r = n.find("> .active"),
                    s = i && t.support.transition && r.hasClass("fade");
                s ? r.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o(), r.removeClass("in");
            });
        var i = t.fn.tab;
        (t.fn.tab = e),
            (t.fn.tab.Constructor = n),
            (t.fn.tab.noConflict = function () {
                return (t.fn.tab = i), this;
            }),
            t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (n) {
                n.preventDefault(), e.call(t(this), "show");
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.affix"),
                    r = "object" == typeof e && e;
                o || i.data("bs.affix", (o = new n(this, r))), "string" == typeof e && o[e]();
            });
        }
        var n = function (e, i) {
            (this.options = t.extend({}, n.DEFAULTS, i)),
                (this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this))),
                (this.$element = t(e)),
                (this.affixed = this.unpin = this.pinnedOffset = null),
                this.checkPosition();
        };
        (n.VERSION = "3.2.0"),
            (n.RESET = "affix affix-top affix-bottom"),
            (n.DEFAULTS = { offset: 0, target: window }),
            (n.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(n.RESET).addClass("affix");
                var t = this.$target.scrollTop(),
                    e = this.$element.offset();
                return (this.pinnedOffset = e.top - t);
            }),
            (n.prototype.checkPositionWithEventLoop = function () {
                setTimeout(t.proxy(this.checkPosition, this), 1);
            }),
            (n.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var e = t(document).height(),
                        i = this.$target.scrollTop(),
                        o = this.$element.offset(),
                        r = this.options.offset,
                        s = r.top,
                        a = r.bottom;
                    "object" != typeof r && (a = s = r), "function" == typeof s && (s = r.top(this.$element)), "function" == typeof a && (a = r.bottom(this.$element));
                    var l = null != this.unpin && i + this.unpin <= o.top ? !1 : null != a && o.top + this.$element.height() >= e - a ? "bottom" : null != s && s >= i ? "top" : !1;
                    if (this.affixed !== l) {
                        null != this.unpin && this.$element.css("top", "");
                        var c = "affix" + (l ? "-" + l : ""),
                            u = t.Event(c + ".bs.affix");
                        this.$element.trigger(u),
                            u.isDefaultPrevented() ||
                                ((this.affixed = l),
                                (this.unpin = "bottom" == l ? this.getPinnedOffset() : null),
                                this.$element
                                    .removeClass(n.RESET)
                                    .addClass(c)
                                    .trigger(t.Event(c.replace("affix", "affixed"))),
                                "bottom" == l && this.$element.offset({ top: e - this.$element.height() - a }));
                    }
                }
            });
        var i = t.fn.affix;
        (t.fn.affix = e),
            (t.fn.affix.Constructor = n),
            (t.fn.affix.noConflict = function () {
                return (t.fn.affix = i), this;
            }),
            t(window).on("load", function () {
                t('[data-spy="affix"]').each(function () {
                    var n = t(this),
                        i = n.data();
                    (i.offset = i.offset || {}), i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i);
                });
            });
    })(jQuery),
    "undefined" == typeof jQuery)
)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"),
            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
        for (var n in e) if (void 0 !== t.style[n]) return { end: e[n] };
        return !1;
    }
    (t.fn.emulateTransitionEnd = function (e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0;
        });
        var o = function () {
            n || t(i).trigger(t.support.transition.end);
        };
        return setTimeout(o, e), this;
    }),
        t(function () {
            (t.support.transition = e()),
                t.support.transition &&
                    (t.event.special.bsTransitionEnd = {
                        bindType: t.support.transition.end,
                        delegateType: t.support.transition.end,
                        handle: function (e) {
                            return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
                        },
                    });
        });
})(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this),
                    o = n.data("bs.alert");
                o || n.data("bs.alert", (o = new i(this))), "string" == typeof e && o[e].call(n);
            });
        }
        var n = '[data-dismiss="alert"]',
            i = function (e) {
                t(e).on("click", n, this.close);
            };
        (i.VERSION = "3.2.0"),
            (i.prototype.close = function (e) {
                function n() {
                    r.detach().trigger("closed.bs.alert").remove();
                }
                var i = t(this),
                    o = i.attr("data-target");
                o || ((o = i.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, "")));
                var r = t(o);
                e && e.preventDefault(),
                    r.length || (r = i.hasClass("alert") ? i : i.parent()),
                    r.trigger((e = t.Event("close.bs.alert"))),
                    e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n());
            });
        var o = t.fn.alert;
        (t.fn.alert = e),
            (t.fn.alert.Constructor = i),
            (t.fn.alert.noConflict = function () {
                return (t.fn.alert = o), this;
            }),
            t(document).on("click.bs.alert.data-api", n, i.prototype.close);
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.button"),
                    r = "object" == typeof e && e;
                o || i.data("bs.button", (o = new n(this, r))), "toggle" == e ? o.toggle() : e && o.setState(e);
            });
        }
        var n = function (e, i) {
            (this.$element = t(e)), (this.options = t.extend({}, n.DEFAULTS, i)), (this.isLoading = !1);
        };
        (n.VERSION = "3.2.0"),
            (n.DEFAULTS = { loadingText: "loading..." }),
            (n.prototype.setState = function (e) {
                var n = "disabled",
                    i = this.$element,
                    o = i.is("input") ? "val" : "html",
                    r = i.data();
                (e += "Text"),
                    null == r.resetText && i.data("resetText", i[o]()),
                    i[o](null == r[e] ? this.options[e] : r[e]),
                    setTimeout(
                        t.proxy(function () {
                            "loadingText" == e ? ((this.isLoading = !0), i.addClass(n).attr(n, n)) : this.isLoading && ((this.isLoading = !1), i.removeClass(n).removeAttr(n));
                        }, this),
                        0
                    );
            }),
            (n.prototype.toggle = function () {
                var t = !0,
                    e = this.$element.closest('[data-toggle="buttons"]');
                if (e.length) {
                    var n = this.$element.find("input");
                    "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? (t = !1) : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change");
                }
                t && this.$element.toggleClass("active");
            });
        var i = t.fn.button;
        (t.fn.button = e),
            (t.fn.button.Constructor = n),
            (t.fn.button.noConflict = function () {
                return (t.fn.button = i), this;
            }),
            t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
                var i = t(n.target);
                i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault();
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.carousel"),
                    r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                    s = "string" == typeof e ? e : r.slide;
                o || i.data("bs.carousel", (o = new n(this, r))), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle();
            });
        }
        var n = function (e, n) {
            (this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this))),
                (this.$indicators = this.$element.find(".carousel-indicators")),
                (this.options = n),
                (this.paused = this.sliding = this.interval = this.$active = this.$items = null),
                "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
        };
        (n.VERSION = "3.2.0"),
            (n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }),
            (n.prototype.keydown = function (t) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return;
                }
                t.preventDefault();
            }),
            (n.prototype.cycle = function (e) {
                return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this;
            }),
            (n.prototype.getItemIndex = function (t) {
                return (this.$items = t.parent().children(".item")), this.$items.index(t || this.$active);
            }),
            (n.prototype.to = function (e) {
                var n = this,
                    i = this.getItemIndex((this.$active = this.$element.find(".item.active")));
                return e > this.$items.length - 1 || 0 > e
                    ? void 0
                    : this.sliding
                    ? this.$element.one("slid.bs.carousel", function () {
                          n.to(e);
                      })
                    : i == e
                    ? this.pause().cycle()
                    : this.slide(e > i ? "next" : "prev", t(this.$items[e]));
            }),
            (n.prototype.pause = function (e) {
                return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), (this.interval = clearInterval(this.interval)), this;
            }),
            (n.prototype.next = function () {
                return this.sliding ? void 0 : this.slide("next");
            }),
            (n.prototype.prev = function () {
                return this.sliding ? void 0 : this.slide("prev");
            }),
            (n.prototype.slide = function (e, n) {
                var i = this.$element.find(".item.active"),
                    o = n || i[e](),
                    r = this.interval,
                    s = "next" == e ? "left" : "right",
                    a = "next" == e ? "first" : "last",
                    l = this;
                if (!o.length) {
                    if (!this.options.wrap) return;
                    o = this.$element.find(".item")[a]();
                }
                if (o.hasClass("active")) return (this.sliding = !1);
                var c = o[0],
                    u = t.Event("slide.bs.carousel", { relatedTarget: c, direction: s });
                if ((this.$element.trigger(u), !u.isDefaultPrevented())) {
                    if (((this.sliding = !0), r && this.pause(), this.$indicators.length)) {
                        this.$indicators.find(".active").removeClass("active");
                        var d = t(this.$indicators.children()[this.getItemIndex(o)]);
                        d && d.addClass("active");
                    }
                    var h = t.Event("slid.bs.carousel", { relatedTarget: c, direction: s });
                    return (
                        t.support.transition && this.$element.hasClass("slide")
                            ? (o.addClass(e),
                              o[0].offsetWidth,
                              i.addClass(s),
                              o.addClass(s),
                              i
                                  .one("bsTransitionEnd", function () {
                                      o.removeClass([e, s].join(" ")).addClass("active"),
                                          i.removeClass(["active", s].join(" ")),
                                          (l.sliding = !1),
                                          setTimeout(function () {
                                              l.$element.trigger(h);
                                          }, 0);
                                  })
                                  .emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1)))
                            : (i.removeClass("active"), o.addClass("active"), (this.sliding = !1), this.$element.trigger(h)),
                        r && this.cycle(),
                        this
                    );
                }
            });
        var i = t.fn.carousel;
        (t.fn.carousel = e),
            (t.fn.carousel.Constructor = n),
            (t.fn.carousel.noConflict = function () {
                return (t.fn.carousel = i), this;
            }),
            t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (n) {
                var i,
                    o = t(this),
                    r = t(o.attr("data-target") || ((i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")));
                if (r.hasClass("carousel")) {
                    var s = t.extend({}, r.data(), o.data()),
                        a = o.attr("data-slide-to");
                    a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault();
                }
            }),
            t(window).on("load", function () {
                t('[data-ride="carousel"]').each(function () {
                    var n = t(this);
                    e.call(n, n.data());
                });
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.collapse"),
                    r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
                !o && r.toggle && "show" == e && (e = !e), o || i.data("bs.collapse", (o = new n(this, r))), "string" == typeof e && o[e]();
            });
        }
        var n = function (e, i) {
            (this.$element = t(e)), (this.options = t.extend({}, n.DEFAULTS, i)), (this.transitioning = null), this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle();
        };
        (n.VERSION = "3.2.0"),
            (n.DEFAULTS = { toggle: !0 }),
            (n.prototype.dimension = function () {
                var t = this.$element.hasClass("width");
                return t ? "width" : "height";
            }),
            (n.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var n = t.Event("show.bs.collapse");
                    if ((this.$element.trigger(n), !n.isDefaultPrevented())) {
                        var i = this.$parent && this.$parent.find("> .panel > .in");
                        if (i && i.length) {
                            var o = i.data("bs.collapse");
                            if (o && o.transitioning) return;
                            e.call(i, "hide"), o || i.data("bs.collapse", null);
                        }
                        var r = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[r](0), (this.transitioning = 1);
                        var s = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[r](""), (this.transitioning = 0), this.$element.trigger("shown.bs.collapse");
                        };
                        if (!t.support.transition) return s.call(this);
                        var a = t.camelCase(["scroll", r].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(350)[r](this.$element[0][a]);
                    }
                }
            }),
            (n.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var e = t.Event("hide.bs.collapse");
                    if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
                        var n = this.dimension();
                        this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), (this.transitioning = 1);
                        var i = function () {
                            (this.transitioning = 0), this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
                        };
                        return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this);
                    }
                }
            }),
            (n.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            });
        var i = t.fn.collapse;
        (t.fn.collapse = e),
            (t.fn.collapse.Constructor = n),
            (t.fn.collapse.noConflict = function () {
                return (t.fn.collapse = i), this;
            }),
            t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
                var i,
                    o = t(this),
                    r = o.attr("data-target") || n.preventDefault() || ((i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")),
                    s = t(r),
                    a = s.data("bs.collapse"),
                    l = a ? "toggle" : o.data(),
                    c = o.attr("data-parent"),
                    u = c && t(c);
                (a && a.transitioning) ||
                    (u &&
                        u
                            .find('[data-toggle="collapse"][data-parent="' + c + '"]')
                            .not(o)
                            .addClass("collapsed"),
                    o[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")),
                    e.call(s, l);
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            (e && 3 === e.which) ||
                (t(o).remove(),
                t(r).each(function () {
                    var i = n(t(this)),
                        o = { relatedTarget: this };
                    i.hasClass("open") && (i.trigger((e = t.Event("hide.bs.dropdown", o))), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", o));
                }));
        }
        function n(e) {
            var n = e.attr("data-target");
            n || ((n = e.attr("href")), (n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")));
            var i = n && t(n);
            return i && i.length ? i : e.parent();
        }
        function i(e) {
            return this.each(function () {
                var n = t(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", (i = new s(this))), "string" == typeof e && i[e].call(n);
            });
        }
        var o = ".dropdown-backdrop",
            r = '[data-toggle="dropdown"]',
            s = function (e) {
                t(e).on("click.bs.dropdown", this.toggle);
            };
        (s.VERSION = "3.2.0"),
            (s.prototype.toggle = function (i) {
                var o = t(this);
                if (!o.is(".disabled, :disabled")) {
                    var r = n(o),
                        s = r.hasClass("open");
                    if ((e(), !s)) {
                        "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                        var a = { relatedTarget: this };
                        if ((r.trigger((i = t.Event("show.bs.dropdown", a))), i.isDefaultPrevented())) return;
                        o.trigger("focus"), r.toggleClass("open").trigger("shown.bs.dropdown", a);
                    }
                    return !1;
                }
            }),
            (s.prototype.keydown = function (e) {
                if (/(38|40|27)/.test(e.keyCode)) {
                    var i = t(this);
                    if ((e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled"))) {
                        var o = n(i),
                            s = o.hasClass("open");
                        if (!s || (s && 27 == e.keyCode)) return 27 == e.which && o.find(r).trigger("focus"), i.trigger("click");
                        var a = " li:not(.divider):visible a",
                            l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                        if (l.length) {
                            var c = l.index(l.filter(":focus"));
                            38 == e.keyCode && c > 0 && c--, 40 == e.keyCode && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus");
                        }
                    }
                }
            });
        var a = t.fn.dropdown;
        (t.fn.dropdown = i),
            (t.fn.dropdown.Constructor = s),
            (t.fn.dropdown.noConflict = function () {
                return (t.fn.dropdown = a), this;
            }),
            t(document)
                .on("click.bs.dropdown.data-api", e)
                .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                    t.stopPropagation();
                })
                .on("click.bs.dropdown.data-api", r, s.prototype.toggle)
                .on("keydown.bs.dropdown.data-api", r + ', [role="menu"], [role="listbox"]', s.prototype.keydown);
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e, i) {
            return this.each(function () {
                var o = t(this),
                    r = o.data("bs.modal"),
                    s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
                r || o.data("bs.modal", (r = new n(this, s))), "string" == typeof e ? r[e](i) : s.show && r.show(i);
            });
        }
        var n = function (e, n) {
            (this.options = n),
                (this.$body = t(document.body)),
                (this.$element = t(e)),
                (this.$backdrop = this.isShown = null),
                (this.scrollbarWidth = 0),
                this.options.remote &&
                    this.$element.find(".modal-content").load(
                        this.options.remote,
                        t.proxy(function () {
                            this.$element.trigger("loaded.bs.modal");
                        }, this)
                    );
        };
        (n.VERSION = "3.2.0"),
            (n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
            (n.prototype.toggle = function (t) {
                return this.isShown ? this.hide() : this.show(t);
            }),
            (n.prototype.show = function (e) {
                var n = this,
                    i = t.Event("show.bs.modal", { relatedTarget: e });
                this.$element.trigger(i),
                    this.isShown ||
                        i.isDefaultPrevented() ||
                        ((this.isShown = !0),
                        this.checkScrollbar(),
                        this.$body.addClass("modal-open"),
                        this.setScrollbar(),
                        this.escape(),
                        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
                        this.backdrop(function () {
                            var i = t.support.transition && n.$element.hasClass("fade");
                            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
                            var o = t.Event("shown.bs.modal", { relatedTarget: e });
                            i
                                ? n.$element
                                      .find(".modal-dialog")
                                      .one("bsTransitionEnd", function () {
                                          n.$element.trigger("focus").trigger(o);
                                      })
                                      .emulateTransitionEnd(300)
                                : n.$element.trigger("focus").trigger(o);
                        }));
            }),
            (n.prototype.hide = function (e) {
                e && e.preventDefault(),
                    (e = t.Event("hide.bs.modal")),
                    this.$element.trigger(e),
                    this.isShown &&
                        !e.isDefaultPrevented() &&
                        ((this.isShown = !1),
                        this.$body.removeClass("modal-open"),
                        this.resetScrollbar(),
                        this.escape(),
                        t(document).off("focusin.bs.modal"),
                        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"),
                        t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
            }),
            (n.prototype.enforceFocus = function () {
                t(document)
                    .off("focusin.bs.modal")
                    .on(
                        "focusin.bs.modal",
                        t.proxy(function (t) {
                            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
                        }, this)
                    );
            }),
            (n.prototype.escape = function () {
                this.isShown && this.options.keyboard
                    ? this.$element.on(
                          "keyup.dismiss.bs.modal",
                          t.proxy(function (t) {
                              27 == t.which && this.hide();
                          }, this)
                      )
                    : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
            }),
            (n.prototype.hideModal = function () {
                var t = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        t.$element.trigger("hidden.bs.modal");
                    });
            }),
            (n.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
            }),
            (n.prototype.backdrop = function (e) {
                var n = this,
                    i = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var o = t.support.transition && i;
                    if (
                        ((this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body)),
                        this.$element.on(
                            "click.dismiss.bs.modal",
                            t.proxy(function (t) {
                                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
                            }, this)
                        ),
                        o && this.$backdrop[0].offsetWidth,
                        this.$backdrop.addClass("in"),
                        !e)
                    )
                        return;
                    o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e();
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var r = function () {
                        n.removeBackdrop(), e && e();
                    };
                    t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r();
                } else e && e();
            }),
            (n.prototype.checkScrollbar = function () {
                document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar());
            }),
            (n.prototype.setScrollbar = function () {
                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth);
            }),
            (n.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", "");
            }),
            (n.prototype.measureScrollbar = function () {
                var t = document.createElement("div");
                (t.className = "modal-scrollbar-measure"), this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t), e;
            });
        var i = t.fn.modal;
        (t.fn.modal = e),
            (t.fn.modal.Constructor = n),
            (t.fn.modal.noConflict = function () {
                return (t.fn.modal = i), this;
            }),
            t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
                var i = t(this),
                    o = i.attr("href"),
                    r = t(i.attr("data-target") || (o && o.replace(/.*(?=#[^\s]+$)/, ""))),
                    s = r.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(o) && o }, r.data(), i.data());
                i.is("a") && n.preventDefault(),
                    r.one("show.bs.modal", function (t) {
                        t.isDefaultPrevented() ||
                            r.one("hidden.bs.modal", function () {
                                i.is(":visible") && i.trigger("focus");
                            });
                    }),
                    e.call(r, s, this);
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.tooltip"),
                    r = "object" == typeof e && e;
                (o || "destroy" != e) && (o || i.data("bs.tooltip", (o = new n(this, r))), "string" == typeof e && o[e]());
            });
        }
        var n = function (t, e) {
            (this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null), this.init("tooltip", t, e);
        };
        (n.VERSION = "3.2.0"),
            (n.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: { selector: "body", padding: 0 },
            }),
            (n.prototype.init = function (e, n, i) {
                (this.enabled = !0), (this.type = e), (this.$element = t(n)), (this.options = this.getOptions(i)), (this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport));
                for (var o = this.options.trigger.split(" "), r = o.length; r--; ) {
                    var s = o[r];
                    if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                    else if ("manual" != s) {
                        var a = "hover" == s ? "mouseenter" : "focusin",
                            l = "hover" == s ? "mouseleave" : "focusout";
                        this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this));
                    }
                }
                this.options.selector ? (this._options = t.extend({}, this.options, { trigger: "manual", selector: "" })) : this.fixTitle();
            }),
            (n.prototype.getDefaults = function () {
                return n.DEFAULTS;
            }),
            (n.prototype.getOptions = function (e) {
                return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e;
            }),
            (n.prototype.getDelegateOptions = function () {
                var e = {},
                    n = this.getDefaults();
                return (
                    this._options &&
                        t.each(this._options, function (t, i) {
                            n[t] != i && (e[t] = i);
                        }),
                    e
                );
            }),
            (n.prototype.enter = function (e) {
                var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                return (
                    n || ((n = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, n)),
                    clearTimeout(n.timeout),
                    (n.hoverState = "in"),
                    n.options.delay && n.options.delay.show
                        ? void (n.timeout = setTimeout(function () {
                              "in" == n.hoverState && n.show();
                          }, n.options.delay.show))
                        : n.show()
                );
            }),
            (n.prototype.leave = function (e) {
                var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                return (
                    n || ((n = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, n)),
                    clearTimeout(n.timeout),
                    (n.hoverState = "out"),
                    n.options.delay && n.options.delay.hide
                        ? void (n.timeout = setTimeout(function () {
                              "out" == n.hoverState && n.hide();
                          }, n.options.delay.hide))
                        : n.hide()
                );
            }),
            (n.prototype.show = function () {
                var e = t.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e);
                    var n = t.contains(document.documentElement, this.$element[0]);
                    if (e.isDefaultPrevented() || !n) return;
                    var i = this,
                        o = this.tip(),
                        r = this.getUID(this.type);
                    this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
                    var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                        a = /\s?auto?\s?/i,
                        l = a.test(s);
                    l && (s = s.replace(a, "") || "top"),
                        o
                            .detach()
                            .css({ top: 0, left: 0, display: "block" })
                            .addClass(s)
                            .data("bs." + this.type, this),
                        this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
                    var c = this.getPosition(),
                        u = o[0].offsetWidth,
                        d = o[0].offsetHeight;
                    if (l) {
                        var h = s,
                            p = this.$element.parent(),
                            f = this.getPosition(p);
                        (s =
                            "bottom" == s && c.top + c.height + d - f.scroll > f.height
                                ? "top"
                                : "top" == s && c.top - f.scroll - d < 0
                                ? "bottom"
                                : "right" == s && c.right + u > f.width
                                ? "left"
                                : "left" == s && c.left - u < f.left
                                ? "right"
                                : s),
                            o.removeClass(h).addClass(s);
                    }
                    var m = this.getCalculatedOffset(s, c, u, d);
                    this.applyPlacement(m, s);
                    var g = function () {
                        i.$element.trigger("shown.bs." + i.type), (i.hoverState = null);
                    };
                    t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g();
                }
            }),
            (n.prototype.applyPlacement = function (e, n) {
                var i = this.tip(),
                    o = i[0].offsetWidth,
                    r = i[0].offsetHeight,
                    s = parseInt(i.css("margin-top"), 10),
                    a = parseInt(i.css("margin-left"), 10);
                isNaN(s) && (s = 0),
                    isNaN(a) && (a = 0),
                    (e.top = e.top + s),
                    (e.left = e.left + a),
                    t.offset.setOffset(
                        i[0],
                        t.extend(
                            {
                                using: function (t) {
                                    i.css({ top: Math.round(t.top), left: Math.round(t.left) });
                                },
                            },
                            e
                        ),
                        0
                    ),
                    i.addClass("in");
                var l = i[0].offsetWidth,
                    c = i[0].offsetHeight;
                "top" == n && c != r && (e.top = e.top + r - c);
                var u = this.getViewportAdjustedDelta(n, e, l, c);
                u.left ? (e.left += u.left) : (e.top += u.top);
                var d = u.left ? 2 * u.left - o + l : 2 * u.top - r + c,
                    h = u.left ? "left" : "top",
                    p = u.left ? "offsetWidth" : "offsetHeight";
                i.offset(e), this.replaceArrow(d, i[0][p], h);
            }),
            (n.prototype.replaceArrow = function (t, e, n) {
                this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "");
            }),
            (n.prototype.setContent = function () {
                var t = this.tip(),
                    e = this.getTitle();
                t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
            }),
            (n.prototype.hide = function () {
                function e() {
                    "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type);
                }
                var n = this,
                    i = this.tip(),
                    o = t.Event("hide.bs." + this.type);
                return (
                    this.$element.removeAttr("aria-describedby"),
                    this.$element.trigger(o),
                    o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), (this.hoverState = null), this)
                );
            }),
            (n.prototype.fixTitle = function () {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
            }),
            (n.prototype.hasContent = function () {
                return this.getTitle();
            }),
            (n.prototype.getPosition = function (e) {
                e = e || this.$element;
                var n = e[0],
                    i = "BODY" == n.tagName;
                return t.extend(
                    {},
                    "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null,
                    { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(), width: i ? t(window).width() : e.outerWidth(), height: i ? t(window).height() : e.outerHeight() },
                    i ? { top: 0, left: 0 } : e.offset()
                );
            }),
            (n.prototype.getCalculatedOffset = function (t, e, n, i) {
                return "bottom" == t
                    ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 }
                    : "top" == t
                    ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 }
                    : "left" == t
                    ? { top: e.top + e.height / 2 - i / 2, left: e.left - n }
                    : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width };
            }),
            (n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
                var o = { top: 0, left: 0 };
                if (!this.$viewport) return o;
                var r = (this.options.viewport && this.options.viewport.padding) || 0,
                    s = this.getPosition(this.$viewport);
                if (/right|left/.test(t)) {
                    var a = e.top - r - s.scroll,
                        l = e.top + r - s.scroll + i;
                    a < s.top ? (o.top = s.top - a) : l > s.top + s.height && (o.top = s.top + s.height - l);
                } else {
                    var c = e.left - r,
                        u = e.left + r + n;
                    c < s.left ? (o.left = s.left - c) : u > s.width && (o.left = s.left + s.width - u);
                }
                return o;
            }),
            (n.prototype.getTitle = function () {
                var t,
                    e = this.$element,
                    n = this.options;
                return (t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title));
            }),
            (n.prototype.getUID = function (t) {
                do t += ~~(1e6 * Math.random());
                while (document.getElementById(t));
                return t;
            }),
            (n.prototype.tip = function () {
                return (this.$tip = this.$tip || t(this.options.template));
            }),
            (n.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
            }),
            (n.prototype.validate = function () {
                this.$element[0].parentNode || (this.hide(), (this.$element = null), (this.options = null));
            }),
            (n.prototype.enable = function () {
                this.enabled = !0;
            }),
            (n.prototype.disable = function () {
                this.enabled = !1;
            }),
            (n.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled;
            }),
            (n.prototype.toggle = function (e) {
                var n = this;
                e && ((n = t(e.currentTarget).data("bs." + this.type)), n || ((n = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, n))),
                    n.tip().hasClass("in") ? n.leave(n) : n.enter(n);
            }),
            (n.prototype.destroy = function () {
                clearTimeout(this.timeout),
                    this.hide()
                        .$element.off("." + this.type)
                        .removeData("bs." + this.type);
            });
        var i = t.fn.tooltip;
        (t.fn.tooltip = e),
            (t.fn.tooltip.Constructor = n),
            (t.fn.tooltip.noConflict = function () {
                return (t.fn.tooltip = i), this;
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.popover"),
                    r = "object" == typeof e && e;
                (o || "destroy" != e) && (o || i.data("bs.popover", (o = new n(this, r))), "string" == typeof e && o[e]());
            });
        }
        var n = function (t, e) {
            this.init("popover", t, e);
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        (n.VERSION = "3.2.0"),
            (n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            })),
            (n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
            (n.prototype.constructor = n),
            (n.prototype.getDefaults = function () {
                return n.DEFAULTS;
            }),
            (n.prototype.setContent = function () {
                var t = this.tip(),
                    e = this.getTitle(),
                    n = this.getContent();
                t.find(".popover-title")[this.options.html ? "html" : "text"](e),
                    t.find(".popover-content").empty()[this.options.html ? ("string" == typeof n ? "html" : "append") : "text"](n),
                    t.removeClass("fade top bottom left right in"),
                    t.find(".popover-title").html() || t.find(".popover-title").hide();
            }),
            (n.prototype.hasContent = function () {
                return this.getTitle() || this.getContent();
            }),
            (n.prototype.getContent = function () {
                var t = this.$element,
                    e = this.options;
                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
            }),
            (n.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
            }),
            (n.prototype.tip = function () {
                return this.$tip || (this.$tip = t(this.options.template)), this.$tip;
            });
        var i = t.fn.popover;
        (t.fn.popover = e),
            (t.fn.popover.Constructor = n),
            (t.fn.popover.noConflict = function () {
                return (t.fn.popover = i), this;
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(n, i) {
            var o = t.proxy(this.process, this);
            (this.$body = t("body")),
                (this.$scrollElement = t(t(n).is("body") ? window : n)),
                (this.options = t.extend({}, e.DEFAULTS, i)),
                (this.selector = (this.options.target || "") + " .nav li > a"),
                (this.offsets = []),
                (this.targets = []),
                (this.activeTarget = null),
                (this.scrollHeight = 0),
                this.$scrollElement.on("scroll.bs.scrollspy", o),
                this.refresh(),
                this.process();
        }
        function n(n) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.scrollspy"),
                    r = "object" == typeof n && n;
                o || i.data("bs.scrollspy", (o = new e(this, r))), "string" == typeof n && o[n]();
            });
        }
        (e.VERSION = "3.2.0"),
            (e.DEFAULTS = { offset: 10 }),
            (e.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
            }),
            (e.prototype.refresh = function () {
                var e = "offset",
                    n = 0;
                t.isWindow(this.$scrollElement[0]) || ((e = "position"), (n = this.$scrollElement.scrollTop())), (this.offsets = []), (this.targets = []), (this.scrollHeight = this.getScrollHeight());
                var i = this;
                this.$body
                    .find(this.selector)
                    .map(function () {
                        var i = t(this),
                            o = i.data("target") || i.attr("href"),
                            r = /^#./.test(o) && t(o);
                        return (r && r.length && r.is(":visible") && [[r[e]().top + n, o]]) || null;
                    })
                    .sort(function (t, e) {
                        return t[0] - e[0];
                    })
                    .each(function () {
                        i.offsets.push(this[0]), i.targets.push(this[1]);
                    });
            }),
            (e.prototype.process = function () {
                var t,
                    e = this.$scrollElement.scrollTop() + this.options.offset,
                    n = this.getScrollHeight(),
                    i = this.options.offset + n - this.$scrollElement.height(),
                    o = this.offsets,
                    r = this.targets,
                    s = this.activeTarget;
                if ((this.scrollHeight != n && this.refresh(), e >= i)) return s != (t = r[r.length - 1]) && this.activate(t);
                if (s && e <= o[0]) return s != (t = r[0]) && this.activate(t);
                for (t = o.length; t--; ) s != r[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(r[t]);
            }),
            (e.prototype.activate = function (e) {
                (this.activeTarget = e), t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
                var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                    i = t(n).parents("li").addClass("active");
                i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy");
            });
        var i = t.fn.scrollspy;
        (t.fn.scrollspy = n),
            (t.fn.scrollspy.Constructor = e),
            (t.fn.scrollspy.noConflict = function () {
                return (t.fn.scrollspy = i), this;
            }),
            t(window).on("load.bs.scrollspy.data-api", function () {
                t('[data-spy="scroll"]').each(function () {
                    var e = t(this);
                    n.call(e, e.data());
                });
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.tab");
                o || i.data("bs.tab", (o = new n(this))), "string" == typeof e && o[e]();
            });
        }
        var n = function (e) {
            this.element = t(e);
        };
        (n.VERSION = "3.2.0"),
            (n.prototype.show = function () {
                var e = this.element,
                    n = e.closest("ul:not(.dropdown-menu)"),
                    i = e.data("target");
                if ((i || ((i = e.attr("href")), (i = i && i.replace(/.*(?=#[^\s]*$)/, ""))), !e.parent("li").hasClass("active"))) {
                    var o = n.find(".active:last a")[0],
                        r = t.Event("show.bs.tab", { relatedTarget: o });
                    if ((e.trigger(r), !r.isDefaultPrevented())) {
                        var s = t(i);
                        this.activate(e.closest("li"), n),
                            this.activate(s, s.parent(), function () {
                                e.trigger({ type: "shown.bs.tab", relatedTarget: o });
                            });
                    }
                }
            }),
            (n.prototype.activate = function (e, n, i) {
                function o() {
                    r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
                        e.addClass("active"),
                        s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
                        e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"),
                        i && i();
                }
                var r = n.find("> .active"),
                    s = i && t.support.transition && r.hasClass("fade");
                s ? r.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o(), r.removeClass("in");
            });
        var i = t.fn.tab;
        (t.fn.tab = e),
            (t.fn.tab.Constructor = n),
            (t.fn.tab.noConflict = function () {
                return (t.fn.tab = i), this;
            }),
            t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (n) {
                n.preventDefault(), e.call(t(this), "show");
            });
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.affix"),
                    r = "object" == typeof e && e;
                o || i.data("bs.affix", (o = new n(this, r))), "string" == typeof e && o[e]();
            });
        }
        var n = function (e, i) {
            (this.options = t.extend({}, n.DEFAULTS, i)),
                (this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this))),
                (this.$element = t(e)),
                (this.affixed = this.unpin = this.pinnedOffset = null),
                this.checkPosition();
        };
        (n.VERSION = "3.2.0"),
            (n.RESET = "affix affix-top affix-bottom"),
            (n.DEFAULTS = { offset: 0, target: window }),
            (n.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(n.RESET).addClass("affix");
                var t = this.$target.scrollTop(),
                    e = this.$element.offset();
                return (this.pinnedOffset = e.top - t);
            }),
            (n.prototype.checkPositionWithEventLoop = function () {
                setTimeout(t.proxy(this.checkPosition, this), 1);
            }),
            (n.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var e = t(document).height(),
                        i = this.$target.scrollTop(),
                        o = this.$element.offset(),
                        r = this.options.offset,
                        s = r.top,
                        a = r.bottom;
                    "object" != typeof r && (a = s = r), "function" == typeof s && (s = r.top(this.$element)), "function" == typeof a && (a = r.bottom(this.$element));
                    var l = null != this.unpin && i + this.unpin <= o.top ? !1 : null != a && o.top + this.$element.height() >= e - a ? "bottom" : null != s && s >= i ? "top" : !1;
                    if (this.affixed !== l) {
                        null != this.unpin && this.$element.css("top", "");
                        var c = "affix" + (l ? "-" + l : ""),
                            u = t.Event(c + ".bs.affix");
                        this.$element.trigger(u),
                            u.isDefaultPrevented() ||
                                ((this.affixed = l),
                                (this.unpin = "bottom" == l ? this.getPinnedOffset() : null),
                                this.$element
                                    .removeClass(n.RESET)
                                    .addClass(c)
                                    .trigger(t.Event(c.replace("affix", "affixed"))),
                                "bottom" == l && this.$element.offset({ top: e - this.$element.height() - a }));
                    }
                }
            });
        var i = t.fn.affix;
        (t.fn.affix = e),
            (t.fn.affix.Constructor = n),
            (t.fn.affix.noConflict = function () {
                return (t.fn.affix = i), this;
            }),
            t(window).on("load", function () {
                t('[data-spy="affix"]').each(function () {
                    var n = t(this),
                        i = n.data();
                    (i.offset = i.offset || {}), i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i);
                });
            });
    })(jQuery),
    function () {}.call(this),
    function () {
        var t;
        (t = function () {
            var t, e, n;
            for (n = [], t = e = 1; 50 >= e; t = ++e) n.push($("#crafting-challenge-add-row").click());
            return n;
        }),
            $(document).ready(t),
            $(document).on("page:load", t);
    }.call(this),
    function () {}.call(this),
    function () {}.call(this),
    function () {
        var t;
        (t = function () {
            return (
                $(".dropdown-toggle").dropdown(),
                $(document.body).on("click", ".add-row", function () {
                    var t, e, n;
                    return (
                        (e = new Date().getTime()),
                        (n = RegExp($(this).parent().children(".new-object-name").data("string"), "g")),
                        (t = $(this).parent().children(".row-data").data("string")),
                        console.log(t),
                        $(this).parent().children(".object-list").append(t.replace(n, e))
                    );
                })
            );
        }),
            $(document).ready(t),
            $(document).on("page:load", t);
    }.call(this),
    function () {}.call(this),
    function () {
        var t;
        (t = function () {
            var t, e, n, i, o;
            for (e = {}, e.masters = [], t = n = 1; 12 >= n; t = ++n) e.masters[t] = !1;
            if (
                ($("#add-row").on("click", function () {
                    var e, n, i, o, r;
                    for (r = [], t = o = 1; 10 >= o; t = ++o) (n = "" + new Date().getTime() + "_" + t), (i = RegExp("new_item", "g")), (e = $("#row_html").data("string")), r.push($("#items_list").append(e.replace(i, n)));
                    return r;
                }),
                $(".all-challenges-check").change(function () {
                    return this.checked ? $(this).closest(".tab-pane").find(".challenge-check").prop("checked", !0) : void 0;
                }),
                $(".challenge-check").change(function () {
                    return this.checked ? void 0 : $(this).closest(".tab-content").find(".all-challenges-check").prop("checked", !1);
                }),
                $("#unlock_everything").change(function () {
                    return this.checked ? ($(":checkbox.user-info").prop("checked", !0), $("#level").val(200), $("input[name=shopping]").filter("[value=4]").prop("checked", !0)) : void 0;
                }),
                $(":checkbox.user-info").change(function () {
                    return this.checked ? void 0 : $("#unlock_everything").prop("checked", !1);
                }),
                $(":radio.user-info").click(function () {
                    return "4" !== $("input[name=shopping]:checked").val() ? $("#unlock_everything").prop("checked", !1) : void 0;
                }),
                $(".recipe-quantity-minus").click(function () {
                    var t, e;
                    return (t = $(this).parent().parent().find(".recipe-quantity")), (e = parseInt(t.val())), t.val(e > 0 ? e - 1 : 0);
                }),
                $(".recipe-quantity-plus").click(function () {
                    var t, e;
                    return (t = $(this).parent().parent().find(".recipe-quantity")), (e = parseInt(t.val())), t.val(e >= 0 ? e + 1 : 0);
                }),
                $(".user-info").change(function () {
                    var n;
                    for (
                        console.log("Saving data..."),
                            e.unlockEverything = $("#unlock_everything").prop("checked"),
                            e.dlc = $("#dlc").prop("checked"),
                            e.story = $("#story").prop("checked"),
                            e.shopping = $("input[name=shopping]:checked").val(),
                            e.mysteryFairy = $("#mystery_fairy").prop("checked"),
                            e.level = $("#level").val(),
                            t = n = 1;
                        12 >= n;
                        t = ++n
                    )
                        e.masters[t] = $("#" + t).prop("checked");
                    return console.log(JSON.stringify(e, null, "	")), localStorage.setItem("gathererUserInfo", JSON.stringify(e));
                }),
                $("#recipesForm").on("ajax:success", function (t, e, n, i) {
                    return $("#items_list").prepend(i.responseText), $("#craftList").collapse("hide"), $("#itemList").collapse("show"), $("#challengeListPanel").hide();
                }),
                $("#challengesForm").on("ajax:success", function (t, e, n, i) {
                    return $("#items_list").prepend(i.responseText), $("#challengeList").collapse("hide"), $("#itemList").collapse("show"), $("#craftListPanel").hide();
                }),
                $(".recipe-checkbox").change(function () {
                    var t;
                    return (
                        console.log("in here"),
                        this.checked ? $(this).parent().children(".recipe-item-info").addClass("line-through") : $(this).parent().children(".recipe-item-info").removeClass("line-through"),
                        (t = /(.*)_gather/.exec($(this).attr("id"))),
                        $("#" + t[1] + "_shop").prop("checked") !== this.checked ? ($("#" + t[1] + "_shop").prop("checked", this.checked), $("#" + t[1] + "_shop").trigger("change")) : void 0
                    );
                }),
                $(".shop-item-checkbox").change(function () {
                    var t;
                    return (
                        this.checked ? $(this).parent().parent().children(".shop-item-cell").addClass("line-through") : $(this).parent().parent().children(".shop-item-cell").removeClass("line-through"),
                        (t = /(.*)_shop/.exec($(this).attr("id"))),
                        $("#" + t[1] + "_gather").prop("checked") !== this.checked ? ($("#" + t[1] + "_gather").prop("checked", this.checked), $("#" + t[1] + "_gather").trigger("change")) : void 0
                    );
                }),
                $(".shop-toggle-visibility").click(function () {
                    return $(this).closest(".shop").children(".shop-details").slideToggle(), $(this).text("[hide]" === $(this).text() ? "[show]" : "[hide]");
                }),
                $("#add-row").trigger("click"),
                localStorage.getItem("gathererUserInfo"))
            ) {
                for (
                    $("#itemList").collapse("show"),
                        console.log("Retrieving user data..."),
                        e = JSON.parse(localStorage.getItem("gathererUserInfo")),
                        $("#unlock_everything").prop("checked", e.unlockEverything),
                        $("#dlc").prop("checked", e.dlc),
                        $("#story").prop("checked", e.story),
                        $("input[name=shopping][value=" + e.shopping + "]").prop("checked", !0),
                        $("#mystery_fairy").prop("checked", e.mysteryFairy),
                        $("#level").val(e.level),
                        o = [],
                        t = i = 1;
                    12 >= i;
                    t = ++i
                )
                    o.push($("#" + t).prop("checked", e.masters[t]));
                return o;
            }
            return $("#userInfo").collapse("show");
        }),
            $(document).ready(t),
            $(document).on("turbolinks:load", t);
    }.call(this),
    function () {}.call(this),
    function () {
        var t;
        (t = function () {
            var t;
            return (
                (t = function (t, e) {
                    return setTimeout(e, t);
                }),
                t(10, function () {
                    return $(".category").trigger("change");
                }),
                $(".category").bind("change", function () {
                    var t, e;
                    return (
                        (t = $(this).val()),
                        (e = $(this).closest(".form-container")),
                        e.find(".armour-form, .tool-form, .weapon-form").hide(),
                        "Armour" === t ? e.find(".armour-form").show() : "Tool" === t ? e.find(".tool-form").show() : "Weapon" === t ? e.find(".weapon-form").show() : void 0
                    );
                })
            );
        }),
            $(document).ready(t),
            $(document).on("page:load", t);
    }.call(this),
    function () {}.call(this),
    function () {}.call(this),
    function () {}.call(this),
    function () {
        var t;
        (t = function () {
            var t, e, n;
            for (n = [], t = e = 1; 50 >= e; t = ++e) n.push($("#password-set-add-row").click());
            return n;
        }),
            $(document).ready(t),
            $(document).on("page:load", t);
    }.call(this),
    function () {
        var t;
        (t = function () {
            var t, e, n;
            for (n = [], t = e = 1; 50 >= e; t = ++e) n.push($("#recipe-add-row").click());
            return n;
        }),
            $(document).ready(t),
            $(document).on("page:load", t);
    }.call(this),
    function () {
        var t;
        (t = function () {
            return $("#regionForm").on("ajax:success", function () {
                return console.log("Reloading..."), location.reload(!0);
            });
        }),
            $(document).ready(t),
            $(document).on("page:load", t);
    }.call(this),
    function () {}.call(this),
    function () {
        var t;
        (t = function () {
            return $("#add-row").on("click", function () {
                var t, e, n;
                return (e = new Date().getTime()), (n = RegExp("new_shop_item", "g")), (t = $("#row_html").data("string")), console.log(t), $("#shop_items_list").append(t.replace(n, e));
            });
        }),
            $(document).ready(t),
            $(document).on("page:load", t);
    }.call(this),
    function () {}.call(this),
    function () {}.call(this),
    function () {}.call(this),
    function () {}.call(this);
	localStorage.setItem("hasCodeRunBefore", true);
    }
}