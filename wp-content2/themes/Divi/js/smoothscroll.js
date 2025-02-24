/*! For license information please see smoothscroll.js.LICENSE.txt */
!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 94)
}({
    94: function(e, t) {
        !function() {
            var e, t = {
                frameRate: 150,
                animationTime: 400,
                stepSize: 80,
                pulseAlgorithm: !0,
                pulseScale: 8,
                pulseNormalize: 1,
                accelerationDelta: 20,
                accelerationMax: 1,
                keyboardSupport: !0,
                arrowScroll: 50,
                touchpadSupport: !0,
                fixedBackground: !0,
                excluded: ""
            }, n = t, r = !1, o = {
                x: 0,
                y: 0
            }, a = !1, i = document.documentElement, l = [120, 120, 120], u = 37, c = 38, s = 39, d = 40, f = 32, m = 33, p = 34, h = 35, w = 36;
            n = t;
            function v() {
                if (document.body) {
                    var t, o = document.body, l = document.documentElement, u = window.innerHeight, c = o.scrollHeight;
                    if (i = document.compatMode.indexOf("CSS") >= 0 ? l : o,
                    e = o,
                    (t = document.body.classList.contains("et-fb")) && C("keydown", k),
                    n.keyboardSupport && !t && E("keydown", k),
                    a = !0,
                    top != self)
                        r = !0;
                    else if (c > u && (o.offsetHeight <= u || l.offsetHeight <= u)) {
                        var s = !1;
                        if (l.style.height = "auto",
                        setTimeout((function() {
                            s || l.scrollHeight == document.height || (s = !0,
                            setTimeout((function() {
                                l.style.height = document.height + "px",
                                s = !1
                            }
                            ), 500))
                        }
                        ), 10),
                        i.offsetHeight <= u) {
                            var d = document.createElement("div");
                            d.style.clear = "both",
                            o.appendChild(d)
                        }
                    }
                    n.fixedBackground || (o.style.backgroundAttachment = "scroll",
                    l.style.backgroundAttachment = "scroll")
                }
            }
            var b = []
              , y = !1
              , g = +new Date;
            function S(e, t, r, a) {
                var i, l;
                if (a || (a = 1e3),
                i = (i = t) > 0 ? 1 : -1,
                l = (l = r) > 0 ? 1 : -1,
                (o.x !== i || o.y !== l) && (o.x = i,
                o.y = l,
                b = [],
                g = 0),
                1 != n.accelerationMax) {
                    var u = +new Date - g;
                    if (u < n.accelerationDelta) {
                        var c = (1 + 30 / u) / 2;
                        c > 1 && (c = Math.min(c, n.accelerationMax),
                        t *= c,
                        r *= c)
                    }
                    g = +new Date
                }
                if (b.push({
                    x: t,
                    y: r,
                    lastX: t < 0 ? .99 : -.99,
                    lastY: r < 0 ? .99 : -.99,
                    start: +new Date
                }),
                !y) {
                    var s = e === document.body;
                    _((function o(i) {
                        for (var l = +new Date, u = 0, c = 0, d = 0; d < b.length; d++) {
                            var f = b[d]
                              , m = l - f.start
                              , p = m >= n.animationTime
                              , h = p ? 1 : m / n.animationTime;
                            n.pulseAlgorithm && (h = P(h));
                            var w = f.x * h - f.lastX >> 0
                              , v = f.y * h - f.lastY >> 0;
                            u += w,
                            c += v,
                            f.lastX += w,
                            f.lastY += v,
                            p && (b.splice(d, 1),
                            d--)
                        }
                        s ? window.scrollBy(u, c) : (u && (e.scrollLeft += u),
                        c && (e.scrollTop += c)),
                        t || r || (b = []),
                        b.length ? _(o, e, a / n.frameRate + 1) : y = !1
                    }
                    ), e, 0),
                    y = !0
                }
            }
            function k(t) {
                var r = t.target
                  , o = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== f;
                if (/input|textarea|select|embed/i.test(r.nodeName) || r.isContentEditable || t.defaultPrevented || o)
                    return !0;
                if (N(r, "button") && t.keyCode === f)
                    return !0;
                var a = 0
                  , i = 0
                  , l = T(e)
                  , v = l.clientHeight;
                switch (l == document.body && (v = window.innerHeight),
                t.keyCode) {
                case c:
                    i = -n.arrowScroll;
                    break;
                case d:
                    i = n.arrowScroll;
                    break;
                case f:
                    i = -(t.shiftKey ? 1 : -1) * v * .9;
                    break;
                case m:
                    i = .9 * -v;
                    break;
                case p:
                    i = .9 * v;
                    break;
                case w:
                    i = -window.pageYOffset;
                    break;
                case h:
                    var b = l.scrollHeight - l.scrollTop - v;
                    i = b > 0 ? b + 10 : 0;
                    break;
                case u:
                    a = -n.arrowScroll;
                    break;
                case s:
                    a = n.arrowScroll;
                    break;
                default:
                    return !0
                }
                S(l, a, i),
                t.preventDefault()
            }
            var x = {};
            setInterval((function() {
                x = {}
            }
            ), 1e4);
            var M, D = (M = 0,
            function(e) {
                return e.uniqueID || (e.uniqueID = M++)
            }
            );
            function H(e, t) {
                for (var n = e.length; n--; )
                    x[D(e[n])] = t;
                return t
            }
            function T(e) {
                var t = []
                  , n = i.scrollHeight;
                do {
                    var o = x[D(e)];
                    if (o)
                        return H(t, o);
                    if (t.push(e),
                    n === e.scrollHeight) {
                        if (!r || i.clientHeight + 10 < n)
                            return H(t, document.body)
                    } else if (e.clientHeight + 10 < e.scrollHeight) {
                        var a = getComputedStyle(e, "").getPropertyValue("overflow-y");
                        if ("scroll" === a || "auto" === a)
                            return H(t, e)
                    }
                } while (e = e.parentNode)
            }
            function E(e, t, n) {
                window.addEventListener(e, t, n || !1)
            }
            function C(e, t, n) {
                window.removeEventListener(e, t, n || !1)
            }
            function N(e, t) {
                return (e.nodeName || "").toLowerCase() === t.toLowerCase()
            }
            function O(e, t) {
                return Math.floor(e / t) == e / t
            }
            var _ = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e, t, n) {
                window.setTimeout(e, n || 1e3 / 60)
            }
            ;
            function z(e) {
                var t, r;
                return (e *= n.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1,
                t = (r = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - r)),
                t * n.pulseNormalize
            }
            function P(e) {
                return e >= 1 ? 1 : e <= 0 ? 0 : (1 == n.pulseNormalize && (n.pulseNormalize /= z(1)),
                z(e))
            }
            var j = /chrome/i.test(window.navigator.userAgent)
              , A = null;
            "onwheel"in document.createElement("div") ? A = "wheel" : "onmousewheel"in document.createElement("div") && (A = "mousewheel");
            var L = document.body.className.split(" ").filter((function(e) {
                return "et_smooth_scroll" === e
            }
            )).length > 0;
            A && j && L && (window.addEventListener(A, (function(t) {
                a || v();
                var r = t.target
                  , o = T(r)
                  , i = document.documentElement.className.split(" ").filter((function(e) {
                    return "et-fb-preview--tablet" === e || "et-fb-preview--phone" === e || "et-fb-preview--zoom" === e || "et-fb-preview--wireframe" === e
                }
                )).length > 0;
                if (!o || t.defaultPrevented || N(e, "embed") || N(r, "embed") && /\.pdf/i.test(r.src) || i)
                    return !0;
                var u = t.wheelDeltaX || 0
                  , c = t.wheelDeltaY || 0;
                if (u || c || (c = t.wheelDelta || 0),
                !n.touchpadSupport && function(e) {
                    if (!e)
                        return;
                    return e = Math.abs(e),
                    l.push(e),
                    l.shift(),
                    clearTimeout(void 0),
                    !(O(l[0], 120) && O(l[1], 120) && O(l[2], 120))
                }(c))
                    return !0;
                Math.abs(u) > 1.2 && (u *= n.stepSize / 120),
                Math.abs(c) > 1.2 && (c *= n.stepSize / 120),
                S(o, -u, -c),
                t.preventDefault()
            }
            ), {
                passive: !1
            }),
            E("mousedown", (function(t) {
                e = t.target
            }
            )),
            E("load", v)),
            window.ET_SmoothScroll = {
                toggleKeydown: function(e) {
                    e ? E("keydown", k) : C("keydown", k)
                }
            }
        }()
    }
});
