// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": []
        ,
        "blob": {
            "1": "1"
        }

    };

    var ba, fa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ia = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    , ja = function(a) {
        for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d && d.Math == Math)
                return d
        }
        throw Error("Cannot find global object");
    }, ka = ja(this), la = function(a, b) {
        if (b)
            a: {
                for (var c = ka, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    if (!(f in c))
                        break a;
                    c = c[f]
                }
                var h = d[d.length - 1]
                  , l = c[h]
                  , m = b(l);
                m != l && m != null && ia(c, h, {
                    configurable: !0,
                    writable: !0,
                    value: m
                })
            }
    }, ma = function(a) {
        var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if (typeof a.length == "number")
            return {
                next: fa(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }, na = function(a) {
        for (var b, c = []; !(b = a.next()).done; )
            c.push(b.value);
        return c
    }, oa = function(a) {
        return a instanceof Array ? a : na(ma(a))
    }, pa = typeof Object.assign == "function" ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    la("Object.assign", function(a) {
        return a || pa
    });
    var qa = typeof Object.create == "function" ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ra;
    if (typeof Object.setPrototypeOf == "function")
        ra = Object.setPrototypeOf;
    else {
        var sa;
        a: {
            var ta = {
                a: !0
            }
              , ua = {};
            try {
                ua.__proto__ = ta;
                sa = ua.a;
                break a
            } catch (a) {}
            sa = !1
        }
        ra = sa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var wa = ra
      , xa = function(a, b) {
        a.prototype = qa(b.prototype);
        a.prototype.constructor = a;
        if (wa)
            wa(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.gn = b.prototype
    }
      , ya = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    };
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var za = this || self
      , Aa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
      , Ba = function(a, b, c) {
        if (!a)
            throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
      , Fa = function(a, b, c) {
        Fa = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Aa : Ba;
        return Fa.apply(null, arguments)
    }
      , Ga = function(a) {
        return a
    };
    /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
    var Ha = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , Ia = function(a) {
        if (a == null)
            return String(a);
        var b = Ha.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , Ja = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , Ka = function(a) {
        if (!a || Ia(a) != "object" || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !Ja(a, "constructor") && !Ja(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return b === void 0 || Ja(a, b)
    }
      , g = function(a, b) {
        var c = b || (Ia(a) == "array" ? [] : {}), d;
        for (d in a)
            if (Ja(a, d)) {
                var e = a[d];
                Ia(e) == "array" ? (Ia(c[d]) != "array" && (c[d] = []),
                c[d] = g(e, c[d])) : Ka(e) ? (Ka(c[d]) || (c[d] = {}),
                c[d] = g(e, c[d])) : c[d] = e
            }
        return c
    };
    function La() {
        for (var a = Ma, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function Na() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Ma, Oa;
    function Pa(a) {
        Ma = Ma || Na();
        Oa = Oa || La();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length
              , e = c + 2 < a.length
              , f = a.charCodeAt(c)
              , h = d ? a.charCodeAt(c + 1) : 0
              , l = e ? a.charCodeAt(c + 2) : 0
              , m = f >> 2
              , n = (f & 3) << 4 | h >> 4
              , p = (h & 15) << 2 | l >> 6
              , q = l & 63;
            e || (q = 64,
            d || (p = 64));
            b.push(Ma[m], Ma[n], Ma[p], Ma[q])
        }
        return b.join("")
    }
    function Qa(a) {
        function b(m) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , p = Oa[n];
                if (p != null)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Ma = Ma || Na();
        Oa = Oa || La();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , h = b(64)
              , l = b(64);
            if (l === 64 && e === -1)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            h !== 64 && (c += String.fromCharCode(f << 4 & 240 | h >> 2),
            l !== 64 && (c += String.fromCharCode(h << 6 & 192 | l)))
        }
    }
    ;var Ra = {};
    function Sa(a, b) {
        Ra[a] = Ra[a] || [];
        Ra[a][b] = !0
    }
    function Ta(a) {
        var b = Ra[a];
        if (!b || b.length === 0)
            return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++)
            e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)),
            d = 0),
            b[e] && (d |= 1 << e % 8);
        d > 0 && c.push(String.fromCharCode(d));
        return Pa(c.join("")).replace(/\.+$/, "")
    }
    function Ua() {
        for (var a = [], b = Ra.fdr || [], c = 0; c < b.length; c++)
            b[c] && a.push(c);
        return a.length > 0 ? a : void 0
    }
    ;function Va() {}
    function Wa(a) {
        return typeof a === "function"
    }
    function k(a) {
        return typeof a === "string"
    }
    function Xa(a) {
        return typeof a === "number" && !isNaN(a)
    }
    function Ya(a) {
        return Array.isArray(a) ? a : [a]
    }
    function Za(a, b) {
        if (a && Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
    function $a(a, b) {
        if (!Xa(a) || !Xa(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
    function ab(a, b) {
        for (var c = new bb, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
    function A(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
    function cb(a) {
        return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
    function db(a) {
        return Math.round(Number(a)) || 0
    }
    function eb(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }
    function fb(a) {
        var b = [];
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
    function gb(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
    function hb() {
        return new Date(Date.now())
    }
    function ib() {
        return hb().getTime()
    }
    var bb = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    bb.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    bb.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    function jb(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
    function kb(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
    function lb(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
    function mb(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
    function nb(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
    var ob = /^\w{1,9}$/;
    function pb(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        A(a, function(d, e) {
            ob.test(d) && e && c.push(d)
        });
        return c.join(b)
    }
    function qb(a, b) {
        function c() {
            e && ++d === b && (e(),
            e = null,
            c.done = !0)
        }
        var d = 0
          , e = a;
        c.done = !1;
        return c
    }
    function rb(a) {
        if (a) {
            var b = a.split(",");
            if (b.length === 2 && b[0] === b[1])
                return b[0]
        }
        return a
    }
    ;var sb, tb = function() {
        if (sb === void 0) {
            var a = null
              , b = za.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ga,
                        createScript: Ga,
                        createScriptURL: Ga
                    })
                } catch (c) {
                    za.console && za.console.error(c.message)
                }
                sb = a
            } else
                sb = a
        }
        return sb
    };
    var ub = function(a) {
        this.D = a
    };
    ub.prototype.toString = function() {
        return this.D + ""
    }
    ;
    var vb = {};
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var wb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    var xb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if (typeof a === "string")
            return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    var yb = {}
      , zb = function(a) {
        this.D = a
    };
    zb.prototype.toString = function() {
        return this.D.toString()
    }
    ;
    function Ab(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    }
    ;var F = window
      , H = document
      , Bb = navigator
      , Cb = function() {
        var a;
        try {
            a = Bb.serviceWorker
        } catch (b) {
            return
        }
        return a
    }
      , Db = H.currentScript
      , Eb = Db && Db.src
      , Fb = function(a, b) {
        var c = F[a];
        F[a] = c === void 0 ? b : c;
        return F[a]
    }
      , Gb = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , Hb = {
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    }
      , Ib = {
        onload: 1,
        src: 1,
        width: 1,
        height: 1,
        style: 1
    };
    function Jb(a, b, c) {
        b && A(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Kb = function(a, b, c, d, e) {
        var f = H.createElement("script");
        Jb(f, d, Hb);
        f.type = "text/javascript";
        f.async = d && d.async === !1 ? !1 : !0;
        var h, l = Ab(a), m = tb(), n = m ? m.createScriptURL(l) : l;
        h = new ub(n,vb);
        f.src = h instanceof ub && h.constructor === ub ? h.D : "type_error:TrustedResourceUrl";
        var p, q, r, t = (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) == null ? void 0 : r.call(q, "script[nonce]");
        (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
        Gb(f, b);
        c && (f.onerror = c);
        if (e)
            e.appendChild(f);
        else {
            var v = H.getElementsByTagName("script")[0] || H.body || H.head;
            v.parentNode.insertBefore(f, v)
        }
        return f
    }
      , Lb = function() {
        if (Eb) {
            var a = Eb.toLowerCase();
            if (a.indexOf("https://") === 0)
                return 2;
            if (a.indexOf("http://") === 0)
                return 3
        }
        return 1
    }
      , Mb = function(a, b, c, d, e) {
        var f;
        f = f === void 0 ? !0 : f;
        var h = e
          , l = !1;
        h || (h = H.createElement("iframe"),
        l = !0);
        Jb(h, c, Ib);
        d && A(d, function(n, p) {
            h.dataset[n] = p
        });
        f && (h.height = "0",
        h.width = "0",
        h.style.display = "none",
        h.style.visibility = "hidden");
        a !== void 0 && (h.src = a);
        if (l) {
            var m = H.body && H.body.lastChild || H.body || H.head;
            m.parentNode.insertBefore(h, m)
        }
        Gb(h, b);
        return h
    }
      , Nb = function(a, b, c, d) {
        var e = new Image(1,1);
        Jb(e, d, {});
        e.onload = function() {
            e.onload = null;
            b && b()
        }
        ;
        e.onerror = function() {
            e.onerror = null;
            c && c()
        }
        ;
        e.src = a;
        return e
    }
      , Ob = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , Pb = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , I = function(a) {
        F.setTimeout(a, 0)
    }
      , Qb = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , Rb = function(a) {
        var b = a.innerText || a.textContent || "";
        b && b != " " && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , Sb = function(a) {
        var b = H.createElement("div"), c = b, d, e = Ab("A<div>" + a + "</div>"), f = tb(), h = f ? f.createHTML(e) : e;
        d = new zb(h,yb);
        if (c.nodeType === 1) {
            var l = c.tagName;
            if (l === "SCRIPT" || l === "STYLE")
                throw Error("");
        }
        c.innerHTML = d instanceof zb && d.constructor === zb ? d.D : "type_error:SafeHtml";
        b = b.lastChild;
        for (var m = []; b.firstChild; )
            m.push(b.removeChild(b.firstChild));
        return m
    }
      , Tb = function(a, b) {
        for (var c = {}, d = 0; d < b.length; d++)
            c[b[d]] = !0;
        for (var e = a, f = 0; e && f <= 100; f++) {
            if (c[String(e.tagName).toLowerCase()])
                return e;
            e = e.parentElement
        }
        return null
    }
      , Ub = function(a) {
        var b;
        try {
            b = Bb.sendBeacon && Bb.sendBeacon(a)
        } catch (c) {
            Sa("TAGGING", 15)
        }
        b || Nb(a)
    }
      , Vb = function(a, b) {
        try {
            if (Bb.sendBeacon)
                return Bb.sendBeacon(a, b)
        } catch (c) {
            Sa("TAGGING", 15)
        }
        return !1
    }
      , Wb = {
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow"
    }
      , Xb = function(a, b, c) {
        if ("fetch"in F) {
            var d = Object.assign({}, Wb);
            b && (d.body = b);
            c && (c.attributionReporting && (d.attributionReporting = c.attributionReporting),
            c.browsingTopics && (d.browsingTopics = c.browsingTopics));
            try {
                return F.fetch(a, d),
                !0
            } catch (e) {}
        }
        if (c && c.noFallback)
            return !1;
        if (b)
            return Vb(a, b);
        Ub(a);
        return !0
    }
      , Yb = function(a, b) {
        var c = a[b];
        c && typeof c.animVal === "string" && (c = c.animVal);
        return c
    }
      , Zb = function() {
        var a = F.performance;
        if (a && Wa(a.now))
            return a.now()
    }
      , $b = function() {
        return F.performance || void 0
    };
    var ac = function(a) {
        this.message = a
    };
    function bc(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a];
        return b === void 0 ? new ac("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    }
    ;function cc(a) {
        switch (a) {
        case 1:
            return "1";
        case 2:
        case 4:
            return "0";
        default:
            return "-"
        }
    }
    ;var dc = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
    function ec(a, b) {
        for (var c = "", d = !0; a > 7; ) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "" + bc(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "" + bc(a | b) + c
    }
    ;var fc = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Ti: a("consent"),
            Bg: a("convert_case_to"),
            Cg: a("convert_false_to"),
            Dg: a("convert_null_to"),
            Eg: a("convert_true_to"),
            Fg: a("convert_undefined_to"),
            gm: a("debug_mode_metadata"),
            na: a("function"),
            Af: a("instance_name"),
            Pj: a("live_only"),
            Qj: a("malware_disabled"),
            Rj: a("metadata"),
            Uj: a("original_activity_id"),
            Bm: a("original_vendor_template_id"),
            Am: a("once_on_load"),
            Tj: a("once_per_event"),
            Rh: a("once_per_load"),
            Fm: a("priority_override"),
            Gm: a("respected_consent_types"),
            Zh: a("setup_tags"),
            ud: a("tag_id"),
            hi: a("teardown_tags")
        }
    }();
    var Bc;
    var Cc = [], Dc = [], Ec = [], Fc = [], Hc = [], Ic = {}, Jc, Kc;
    function Lc(a) {
        Kc = Kc || a
    }
    function Mc(a) {}
    var Nc, Oc = [], Pc = [];
    function Qc(a, b, c) {
        try {
            return Jc(Rc(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }
    function Sc(a) {
        var b = a[fc.na];
        if (!b)
            throw Error("Error: No function name given for function call.");
        return !!Ic[b]
    }
    var Rc = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = Tc(a[e], b, c));
        return d
    }
      , Tc = function(a, b, c) {
        if (Array.isArray(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(Tc(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var h = Cc[f];
                if (!h || b.isBlocked(h))
                    return;
                c[f] = !0;
                var l = String(h[fc.Af]);
                try {
                    var m = Rc(h, b, c);
                    m.vtp_gtmEventId = b.id;
                    b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                    d = Uc(m, {
                        event: b,
                        index: f,
                        type: 2,
                        name: l
                    });
                    Nc && (d = Nc.qk(d, m))
                } catch (x) {
                    b.logMacroError && b.logMacroError(x, Number(f), l),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var n = 1; n < a.length; n += 2)
                    d[Tc(a[n], b, c)] = Tc(a[n + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var p = !1, q = 1; q < a.length; q++) {
                    var r = Tc(a[q], b, c);
                    Kc && (p = p || Kc.bl(r));
                    d.push(r)
                }
                return Kc && p ? Kc.tk(d) : d.join("");
            case "escape":
                d = Tc(a[1], b, c);
                if (Kc && Array.isArray(a[1]) && a[1][0] === "macro" && Kc.fl(a))
                    return Kc.Al(d);
                d = String(d);
                for (var t = 2; t < a.length; t++)
                    gc[a[t]] && (d = gc[a[t]](d));
                return d;
            case "tag":
                var v = a[1];
                if (!Fc[v])
                    throw Error("Unable to resolve tag reference " + v + ".");
                return {
                    ri: a[2],
                    index: v
                };
            case "zb":
                var u = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                u[fc.na] = a[1];
                var w = Qc(u, b, c)
                  , y = !!a[4];
                return y || w !== 2 ? y !== (w === 1) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }
      , Uc = function(a, b) {
        var c = a[fc.na]
          , d = b && b.event;
        if (!c)
            throw Error("Error: No function name given for function call.");
        var e = Ic[c], f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) && e && Oc.indexOf(c) !== -1, h = {}, l;
        for (l in a)
            a.hasOwnProperty(l) && l.indexOf("vtp_") === 0 && e && (h[l] = a[l]);
        e && d && d.cachedModelValues && (h.vtp_gtmCachedValues = d.cachedModelValues);
        if (b) {
            if (b.name == null) {
                var m;
                a: {
                    var n = b.type
                      , p = b.index;
                    if (p == null)
                        m = "";
                    else {
                        var q;
                        switch (n) {
                        case 2:
                            q = Cc[p];
                            break;
                        case 1:
                            q = Fc[p];
                            break;
                        default:
                            m = "";
                            break a
                        }
                        var r = q && q[fc.Af];
                        m = r ? String(r) : ""
                    }
                }
                b.name = m
            }
            e && (h.vtp_gtmEntityIndex = b.index,
            h.vtp_gtmEntityName = b.name)
        }
        var t, v, u;
        if (f && Pc.indexOf(c) === -1) {
            Pc.push(c);
            var w = ib();
            t = e(h);
            var y = ib() - w
              , x = ib();
            v = Bc(c, b);
            u = y - (ib() - x)
        } else if (e && (t = e(h)),
        !e || f)
            v = Bc(c, b);
        if (f && d) {
            d.reportMacroDiscrepancy(d.id, c, void 0, !0);
            var B;
            a: {
                var z = t;
                if (z == void 0 || Array.isArray(z) || Ka(z))
                    B = !0;
                else {
                    switch (typeof z) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "function":
                        B = !0;
                        break a
                    }
                    B = !1
                }
            }
            B ? (Array.isArray(t) ? Array.isArray(v) : Ka(t) ? Ka(v) : typeof t === "function" ? typeof v === "function" : t === v) || d.reportMacroDiscrepancy(d.id, c) : t !== v && d.reportMacroDiscrepancy(d.id, c);
            u !== void 0 && d.reportMacroDiscrepancy(d.id, c, u)
        }
        return e ? t : v
    };
    var Xc = function(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++)
                d[r[t]] = !0
        }
        for (var c = [], d = [], e = Vc(a), f = 0; f < Dc.length; f++) {
            var h = Dc[f]
              , l = Wc(h, e);
            if (l) {
                for (var m = h.add || [], n = 0; n < m.length; n++)
                    c[m[n]] = !0;
                b(h.block || [])
            } else
                l === null && b(h.block || []);
        }
        for (var p = [], q = 0; q < Fc.length; q++)
            c[q] && !d[q] && (p[q] = !0);
        return p
    }
      , Wc = function(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (e === 0)
                return !1;
            if (e === 2)
                return null
        }
        for (var f = a.unless || [], h = 0; h < f.length; h++) {
            var l = b(f[h]);
            if (l === 2)
                return null;
            if (l === 1)
                return !1
        }
        return !0
    }
      , Vc = function(a) {
        var b = [];
        return function(c) {
            b[c] === void 0 && (b[c] = Qc(Ec[c], a));
            return b[c]
        }
    };
    var Yc = {
        qk: function(a, b) {
            b[fc.Bg] && typeof a === "string" && (a = b[fc.Bg] == 1 ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(fc.Dg) && a === null && (a = b[fc.Dg]);
            b.hasOwnProperty(fc.Fg) && a === void 0 && (a = b[fc.Fg]);
            b.hasOwnProperty(fc.Eg) && a === !0 && (a = b[fc.Eg]);
            b.hasOwnProperty(fc.Cg) && a === !1 && (a = b[fc.Cg]);
            return a
        }
    };
    var fd = {}
      , gd = (fd.uaa = !0,
    fd.uab = !0,
    fd.uafvl = !0,
    fd.uamb = !0,
    fd.uam = !0,
    fd.uap = !0,
    fd.uapv = !0,
    fd.uaw = !0,
    fd);
    var nd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"]
      , od = new bb;
    function vd(a) {
        return wd ? H.querySelectorAll(a) : null
    }
    function xd(a, b) {
        if (!wd)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!H.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (d !== null && d.nodeType === 1);
        return null
    }
    var yd = !1;
    if (H.querySelectorAll)
        try {
            var zd = H.querySelectorAll(":root");
            zd && zd.length == 1 && zd[0] == H.documentElement && (yd = !0)
        } catch (a) {}
    var wd = yd;
    var Ad = /^[0-9A-Fa-f]{64}$/;
    function Bd(a) {
        try {
            return (new TextEncoder).encode(a)
        } catch (e) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                d < 128 ? b.push(d) : d < 2048 ? b.push(192 | d >> 6, 128 | d & 63) : d < 55296 || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | a.charCodeAt(++c) & 1023),
                b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63))
            }
            return new Uint8Array(b)
        }
    }
    function Cd(a) {
        if (a === "" || a === "e0")
            return Promise.resolve(a);
        var b;
        if ((b = F.crypto) == null ? 0 : b.subtle) {
            if (Ad.test(a))
                return Promise.resolve(a);
            try {
                var c = Bd(a);
                return F.crypto.subtle.digest("SHA-256", c).then(function(d) {
                    var e = Array.from(new Uint8Array(d)).map(function(f) {
                        return String.fromCharCode(f)
                    }).join("");
                    return F.btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (d) {
                return Promise.resolve("e2")
            }
        } else
            return Promise.resolve("e1")
    }
    ;function L(a) {
        Sa("GTM", a)
    }
    ;var M = {
        g: {
            oa: "ad_personalization",
            O: "ad_storage",
            N: "ad_user_data",
            R: "analytics_storage",
            Pd: "region",
            Jb: "consent_updated",
            wg: "wait_for_update",
            Wi: "app_remove",
            Xi: "app_store_refund",
            Yi: "app_store_subscription_cancel",
            Zi: "app_store_subscription_convert",
            aj: "app_store_subscription_renew",
            bj: "consent_update",
            Hg: "add_payment_info",
            Ig: "add_shipping_info",
            kc: "add_to_cart",
            mc: "remove_from_cart",
            Jg: "view_cart",
            Kb: "begin_checkout",
            nc: "select_item",
            cb: "view_item_list",
            ub: "select_promotion",
            eb: "view_promotion",
            Ha: "purchase",
            oc: "refund",
            Ka: "view_item",
            Kg: "add_to_wishlist",
            cj: "exception",
            dj: "first_open",
            ej: "first_visit",
            Z: "gtag.config",
            Pa: "gtag.get",
            fj: "in_app_purchase",
            Lb: "page_view",
            gj: "screen_view",
            ij: "session_start",
            jj: "timing_complete",
            kj: "track_social",
            qc: "user_engagement",
            lj: "user_id_update",
            fb: "gclgb",
            Qa: "gclid",
            Lg: "gclgs",
            Mg: "gclst",
            ba: "ads_data_redaction",
            Ng: "gad_source",
            Oc: "gclid_url",
            Og: "gclsrc",
            Xe: "gbraid",
            Qd: "wbraid",
            ka: "allow_ad_personalization_signals",
            Ye: "allow_custom_scripts",
            Ze: "allow_display_features",
            Rd: "allow_enhanced_conversions",
            hb: "allow_google_signals",
            Ba: "allow_interest_groups",
            mj: "app_id",
            nj: "app_installer_id",
            oj: "app_name",
            pj: "app_version",
            vb: "auid",
            qj: "auto_detection_enabled",
            Mb: "aw_remarketing",
            af: "aw_remarketing_only",
            Sd: "discount",
            Td: "aw_feed_country",
            Ud: "aw_feed_language",
            aa: "items",
            Vd: "aw_merchant_id",
            Pg: "aw_basket_type",
            Pc: "campaign_content",
            Qc: "campaign_id",
            Rc: "campaign_medium",
            Sc: "campaign_name",
            Tc: "campaign",
            Uc: "campaign_source",
            Vc: "campaign_term",
            ib: "client_id",
            Qg: "rnd",
            bf: "consent_update_type",
            rj: "content_group",
            sj: "content_type",
            Va: "conversion_cookie_prefix",
            Wc: "conversion_id",
            qa: "conversion_linker",
            Rg: "conversion_linker_disabled",
            Nb: "conversion_api",
            Wd: "cookie_deprecation",
            Ra: "cookie_domain",
            Sa: "cookie_expires",
            Wa: "cookie_flags",
            rc: "cookie_name",
            wb: "cookie_path",
            La: "cookie_prefix",
            sc: "cookie_update",
            uc: "country",
            xa: "currency",
            Xd: "customer_lifetime_value",
            Xc: "custom_map",
            cf: "gcldc",
            Yc: "dclid",
            tj: "debug_mode",
            ja: "developer_id",
            uj: "disable_merchant_reported_purchases",
            Zc: "dc_custom_params",
            vj: "dc_natural_search",
            Sg: "dynamic_event_settings",
            Tg: "affiliation",
            Yd: "checkout_option",
            df: "checkout_step",
            Ug: "coupon",
            bd: "item_list_name",
            ef: "list_name",
            wj: "promotions",
            dd: "shipping",
            ff: "tax",
            Zd: "engagement_time_msec",
            ae: "enhanced_client_id",
            be: "enhanced_conversions",
            Vg: "enhanced_conversions_automatic_settings",
            ce: "estimated_delivery_date",
            hf: "euid_logged_in_state",
            ed: "event_callback",
            xj: "event_category",
            kb: "event_developer_id_string",
            yj: "event_label",
            vc: "event",
            de: "event_settings",
            ee: "event_timeout",
            zj: "description",
            Aj: "fatal",
            Bj: "experiments",
            jf: "firebase_id",
            wc: "first_party_collection",
            fe: "_x_20",
            lb: "_x_19",
            Wg: "fledge_drop_reason",
            Xg: "fledge",
            Yg: "flight_error_code",
            Zg: "flight_error_message",
            ah: "fl_activity_category",
            bh: "fl_activity_group",
            kf: "fl_advertiser_id",
            eh: "fl_ar_dedupe",
            lf: "match_id",
            fh: "fl_random_number",
            gh: "tran",
            hh: "u",
            he: "gac_gclid",
            xc: "gac_wbraid",
            ih: "gac_wbraid_multiple_conversions",
            jh: "ga_restrict_domain",
            nf: "ga_temp_client_id",
            yc: "gdpr_applies",
            kh: "geo_granularity",
            xb: "value_callback",
            nb: "value_key",
            jm: "google_ng",
            km: "google_ono",
            Ob: "google_signals",
            lh: "google_tld",
            ie: "groups",
            mh: "gsa_experiment_id",
            nh: "gtm_up",
            yb: "iframe_state",
            fd: "ignore_referrer",
            pf: "internal_traffic_results",
            zb: "is_legacy_converted",
            Ab: "is_legacy_loaded",
            je: "is_passthrough",
            zc: "_lps",
            Ma: "language",
            ke: "legacy_developer_id_string",
            ra: "linker",
            Ac: "accept_incoming",
            pb: "decorate_forms",
            T: "domains",
            Bb: "url_position",
            oh: "method",
            Cj: "name",
            gd: "new_customer",
            qh: "non_interaction",
            Dj: "optimize_id",
            Ej: "page_hostname",
            hd: "page_path",
            Ca: "page_referrer",
            Cb: "page_title",
            rh: "passengers",
            sh: "phone_conversion_callback",
            Fj: "phone_conversion_country_code",
            th: "phone_conversion_css_class",
            Gj: "phone_conversion_ids",
            uh: "phone_conversion_number",
            vh: "phone_conversion_options",
            qf: "_protected_audience_enabled",
            jd: "quantity",
            me: "redact_device_info",
            rf: "referral_exclusion_definition",
            Pb: "restricted_data_processing",
            Hj: "retoken",
            Ij: "sample_rate",
            tf: "screen_name",
            Db: "screen_resolution",
            Jj: "search_term",
            Ia: "send_page_view",
            Qb: "send_to",
            Bc: "server_container_url",
            kd: "session_duration",
            ne: "session_engaged",
            uf: "session_engaged_time",
            qb: "session_id",
            oe: "session_number",
            pe: "_shared_user_id",
            ld: "delivery_postal_code",
            lm: "temporary_client_id",
            vf: "topmost_url",
            Kj: "tracking_id",
            wf: "traffic_type",
            ya: "transaction_id",
            Eb: "transport_url",
            wh: "trip_type",
            Rb: "update",
            Ta: "url_passthrough",
            qe: "_user_agent_architecture",
            se: "_user_agent_bitness",
            te: "_user_agent_full_version_list",
            ue: "_user_agent_mobile",
            ve: "_user_agent_model",
            we: "_user_agent_platform",
            xe: "_user_agent_platform_version",
            ye: "_user_agent_wow64",
            Da: "user_data",
            xh: "user_data_auto_latency",
            yh: "user_data_auto_meta",
            zh: "user_data_auto_multi",
            Ah: "user_data_auto_selectors",
            Bh: "user_data_auto_status",
            md: "user_data_mode",
            ze: "user_data_settings",
            za: "user_id",
            Xa: "user_properties",
            Ch: "_user_region",
            Ae: "us_privacy_string",
            la: "value",
            Dh: "wbraid_multiple_conversions",
            Lh: "_host_name",
            Mh: "_in_page_command",
            Nh: "_is_passthrough_cid",
            rb: "non_personalized_ads",
            sd: "_sst_parameters",
            jb: "conversion_label",
            sa: "page_location",
            ob: "global_developer_id_string",
            Cc: "tc_privacy_string"
        }
    }
      , ae = {}
      , be = Object.freeze((ae[M.g.ka] = 1,
    ae[M.g.Ze] = 1,
    ae[M.g.Rd] = 1,
    ae[M.g.hb] = 1,
    ae[M.g.aa] = 1,
    ae[M.g.Ra] = 1,
    ae[M.g.Sa] = 1,
    ae[M.g.Wa] = 1,
    ae[M.g.rc] = 1,
    ae[M.g.wb] = 1,
    ae[M.g.La] = 1,
    ae[M.g.sc] = 1,
    ae[M.g.Xc] = 1,
    ae[M.g.ja] = 1,
    ae[M.g.Sg] = 1,
    ae[M.g.ed] = 1,
    ae[M.g.de] = 1,
    ae[M.g.ee] = 1,
    ae[M.g.wc] = 1,
    ae[M.g.jh] = 1,
    ae[M.g.Ob] = 1,
    ae[M.g.lh] = 1,
    ae[M.g.ie] = 1,
    ae[M.g.pf] = 1,
    ae[M.g.zb] = 1,
    ae[M.g.Ab] = 1,
    ae[M.g.ra] = 1,
    ae[M.g.rf] = 1,
    ae[M.g.Pb] = 1,
    ae[M.g.Ia] = 1,
    ae[M.g.Qb] = 1,
    ae[M.g.Bc] = 1,
    ae[M.g.kd] = 1,
    ae[M.g.uf] = 1,
    ae[M.g.ld] = 1,
    ae[M.g.Eb] = 1,
    ae[M.g.Rb] = 1,
    ae[M.g.ze] = 1,
    ae[M.g.Xa] = 1,
    ae[M.g.sd] = 1,
    ae));
    Object.freeze([M.g.sa, M.g.Ca, M.g.Cb, M.g.Ma, M.g.tf, M.g.za, M.g.jf, M.g.rj]);
    var ce = {}
      , de = Object.freeze((ce[M.g.Wi] = 1,
    ce[M.g.Xi] = 1,
    ce[M.g.Yi] = 1,
    ce[M.g.Zi] = 1,
    ce[M.g.aj] = 1,
    ce[M.g.dj] = 1,
    ce[M.g.ej] = 1,
    ce[M.g.fj] = 1,
    ce[M.g.ij] = 1,
    ce[M.g.qc] = 1,
    ce))
      , ee = {}
      , fe = Object.freeze((ee[M.g.Hg] = 1,
    ee[M.g.Ig] = 1,
    ee[M.g.kc] = 1,
    ee[M.g.mc] = 1,
    ee[M.g.Jg] = 1,
    ee[M.g.Kb] = 1,
    ee[M.g.nc] = 1,
    ee[M.g.cb] = 1,
    ee[M.g.ub] = 1,
    ee[M.g.eb] = 1,
    ee[M.g.Ha] = 1,
    ee[M.g.oc] = 1,
    ee[M.g.Ka] = 1,
    ee[M.g.Kg] = 1,
    ee))
      , ge = Object.freeze([M.g.ka, M.g.hb, M.g.sc, M.g.wc, M.g.fd, M.g.Ia, M.g.Rb])
      , he = Object.freeze([].concat(oa(ge)))
      , ie = Object.freeze([M.g.Sa, M.g.ee, M.g.kd, M.g.uf, M.g.Zd])
      , je = Object.freeze([].concat(oa(ie)))
      , ke = {}
      , le = (ke[M.g.O] = "1",
    ke[M.g.R] = "2",
    ke[M.g.N] = "3",
    ke[M.g.oa] = "4",
    ke)
      , me = {}
      , ne = Object.freeze((me[M.g.ka] = 1,
    me[M.g.Rd] = 1,
    me[M.g.Ba] = 1,
    me[M.g.Mb] = 1,
    me[M.g.af] = 1,
    me[M.g.Sd] = 1,
    me[M.g.Td] = 1,
    me[M.g.Ud] = 1,
    me[M.g.aa] = 1,
    me[M.g.Vd] = 1,
    me[M.g.Va] = 1,
    me[M.g.qa] = 1,
    me[M.g.Ra] = 1,
    me[M.g.Sa] = 1,
    me[M.g.Wa] = 1,
    me[M.g.La] = 1,
    me[M.g.xa] = 1,
    me[M.g.Xd] = 1,
    me[M.g.ja] = 1,
    me[M.g.uj] = 1,
    me[M.g.be] = 1,
    me[M.g.ce] = 1,
    me[M.g.jf] = 1,
    me[M.g.wc] = 1,
    me[M.g.zb] = 1,
    me[M.g.Ab] = 1,
    me[M.g.Ma] = 1,
    me[M.g.gd] = 1,
    me[M.g.sa] = 1,
    me[M.g.Ca] = 1,
    me[M.g.sh] = 1,
    me[M.g.th] = 1,
    me[M.g.uh] = 1,
    me[M.g.vh] = 1,
    me[M.g.Pb] = 1,
    me[M.g.Ia] = 1,
    me[M.g.Qb] = 1,
    me[M.g.Bc] = 1,
    me[M.g.ld] = 1,
    me[M.g.ya] = 1,
    me[M.g.Eb] = 1,
    me[M.g.Rb] = 1,
    me[M.g.Ta] = 1,
    me[M.g.Da] = 1,
    me[M.g.za] = 1,
    me[M.g.la] = 1,
    me))
      , oe = {}
      , pe = Object.freeze((oe.search = "s",
    oe.youtube = "y",
    oe.playstore = "p",
    oe.shopping = "h",
    oe.ads = "a",
    oe.maps = "m",
    oe));
    Object.freeze(M.g);
    var qe = {}
      , re = F.google_tag_manager = F.google_tag_manager || {};
    qe.Bf = "4650";
    qe.rd = Number("0") || 0;
    qe.Ga = "dataLayer";
    qe.dm = "ChEI8OufswYQ0J/xnvL8gY3QARIfACtLRnYuw11BZ/ilgr3Zqsl82b2Dh5/NlCQAN+Nm7RoCVUc\x3d";
    var se = {
        __cl: 1,
        __ecl: 1,
        __ehl: 1,
        __evl: 1,
        __fal: 1,
        __fil: 1,
        __fsl: 1,
        __hl: 1,
        __jel: 1,
        __lcl: 1,
        __sdl: 1,
        __tl: 1,
        __ytl: 1
    }, te = {
        __paused: 1,
        __tg: 1
    }, ue;
    for (ue in se)
        se.hasOwnProperty(ue) && (te[ue] = 1);
    var ve = eb(""), we, xe = !1;
    xe = !0;
    we = xe;
    var ye, ze = !1;
    ye = ze;
    var Ae, Be = !1;
    Ae = Be;
    qe.Nc = "www.googletagmanager.com";
    var Ce = "" + qe.Nc + (we ? "/gtag/js" : "/gtm.js")
      , De = null
      , Ee = null
      , Fe = {}
      , Ge = {};
    function He() {
        var a = re.sequence || 1;
        re.sequence = a + 1;
        return a
    }
    qe.Ui = "";
    var Ie = "";
    qe.Fe = Ie;
    var Je = new function() {
        this.D = "";
        this.K = this.F = !1;
        this.Na = this.P = this.X = this.H = ""
    }
    ;
    function Ke() {
        var a = Je.H.length;
        return Je.H[a - 1] === "/" ? Je.H.substring(0, a - 1) : Je.H
    }
    function Le(a) {
        for (var b = {}, c = ma(a.split("|")), d = c.next(); !d.done; d = c.next())
            b[d.value] = !0;
        return b
    }
    var Me = new bb
      , Ne = {}
      , Oe = {}
      , Te = {
        name: qe.Ga,
        set: function(a, b) {
            g(nb(a, b), Ne);
            Pe()
        },
        get: function(a) {
            return Qe(a, 2)
        },
        reset: function() {
            Me = new bb;
            Ne = {};
            Pe()
        }
    };
    function Qe(a, b) {
        return b != 2 ? Me.get(a) : Ue(a)
    }
    function Ue(a) {
        var b, c = a.split(".");
        b = b || [];
        for (var d = Ne, e = 0; e < c.length; e++) {
            if (d === null)
                return !1;
            if (d === void 0)
                break;
            d = d[c[e]];
            if (b.indexOf(d) !== -1)
                return
        }
        return d
    }
    function Ve(a, b) {
        Oe.hasOwnProperty(a) || (Me.set(a, b),
        g(nb(a, b), Ne),
        Pe())
    }
    function Pe(a) {
        A(Oe, function(b, c) {
            Me.set(b, c);
            g(nb(b), Ne);
            g(nb(b, c), Ne);
            a && delete Oe[b]
        })
    }
    function We(a, b) {
        var c, d = (b === void 0 ? 2 : b) !== 1 ? Ue(a) : Me.get(a);
        Ia(d) === "array" || Ia(d) === "object" ? c = g(d) : c = d;
        return c
    }
    ;function $e(a, b) {
        if (a === "")
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;var af = []
      , bf = {};
    function cf(a) {
        return af[a] === void 0 ? !1 : af[a]
    }
    ;var df = [];
    function ef(a) {
        switch (a) {
        case 0:
            return 0;
        case 29:
            return 7;
        case 37:
            return 1;
        case 38:
            return 2;
        case 50:
            return 3;
        case 59:
            return 6;
        case 62:
            return 9;
        case 71:
            return 4;
        case 79:
            return 5;
        case 84:
            return 8
        }
    }
    function P(a) {
        df[a] = !0;
        var b = ef(a);
        b !== void 0 && (af[b] = !0)
    }
    P(26);
    P(22);
    P(23);
    P(24);
    P(25);
    P(39);
    P(65);
    P(48);
    P(61);
    P(28);
    P(14);
    P(87);
    P(13);
    P(94);
    P(86);
    P(51);
    P(73);
    P(35);
    P(6);
    P(40);
    P(4);
    P(69);
    P(82);
    P(57);
    P(54);
    P(77);
    P(92);
    P(72);
    P(91);
    P(70);
    P(97);
    P(95);
    P(71);
    P(5);
    P(79);
    bf[1] = $e('1', 6E4);
    bf[3] = $e('10', 1);
    bf[2] = $e('', 50);
    P(11);
    P(44);
    P(78);
    P(90);
    P(83);
    P(29);
    P(58);

    function Q(a) {
        return !!df[a]
    }
    var jf = /:[0-9]+$/
      , kf = /^\d+\.fls\.doubleclick\.net$/
      , lf = function(a, b, c) {
        for (var d = ma(a.split("&")), e = d.next(); !e.done; e = d.next()) {
            var f = ma(e.value.split("="))
              , h = f.next().value
              , l = na(f);
            if (decodeURIComponent(h.replace(/\+/g, " ")) === b) {
                var m = l.join("=");
                return c ? m : decodeURIComponent(m.replace(/\+/g, " "))
            }
        }
    }
      , of = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port")
            a.protocol = mf(a.protocol) || mf(F.location.protocol);
        b === "port" ? a.port = String(Number(a.hostname ? a.port : F.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || F.location.hostname).replace(jf, "").toLowerCase());
        return nf(a, b, c, d, e)
    }
      , nf = function(a, b, c, d, e) {
        var f, h = mf(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = pf(a);
            break;
        case "protocol":
            f = h;
            break;
        case "host":
            f = a.hostname.replace(jf, "").toLowerCase();
            if (c) {
                var l = /^www\d*\./.exec(f);
                l && l[0] && (f = f.substr(l[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || (h === "http" ? 80 : h === "https" ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || Sa("TAGGING", 1);
            f = a.pathname.substr(0, 1) === "/" ? a.pathname : "/" + a.pathname;
            var m = f.split("/");
            (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
            f = m.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = lf(f, e));
            break;
        case "extension":
            var n = a.pathname.split(".");
            f = n.length > 1 ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , mf = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , pf = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = c < 0 ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , qf = {}
      , rf = 0
      , sf = function(a) {
        var b = qf[a];
        if (!b) {
            var c = H.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            d[0] !== "/" && (a || Sa("TAGGING", 1),
            d = "/" + d);
            var e = c.hostname.replace(jf, "");
            b = {
                href: c.href,
                protocol: c.protocol,
                host: c.host,
                hostname: e,
                pathname: d,
                search: c.search,
                hash: c.hash,
                port: c.port
            };
            rf < 5 && (qf[a] = b,
            rf++)
        }
        return b
    }
      , tf = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return d.indexOf(p) < 0 ? n : p + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return p !== void 0
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = sf(a)
          , f = a.split(/[?#]/)[0]
          , h = e.search
          , l = e.hash;
        h[0] === "?" && (h = h.substring(1));
        l[0] === "#" && (l = l.substring(1));
        h = c(h);
        l = c(l);
        h !== "" && (h = "?" + h);
        l !== "" && (l = "#" + l);
        var m = "" + f + h + l;
        m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
        return m
    }
      , uf = function(a) {
        var b = sf(F.location.href)
          , c = of(b, "host", !1);
        if (c && c.match(kf)) {
            var d = of(b, "path").split(a + "=");
            if (d.length > 1)
                return d[1].split(";")[0].split("?")[0]
        }
    };
    var vf = {
        "https://www.google.com": "/g",
        "https://www.googleadservices.com": "/as",
        "https://pagead2.googlesyndication.com": "/gs"
    };
    function wf(a, b) {
        if (a) {
            var c = "" + a;
            c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
            c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
            return sf("" + c + b).href
        }
    }
    function xf() {
        return !!qe.Fe && qe.Fe.split("@@").join("") !== "SGTM_TOKEN"
    }
    function yf(a) {
        for (var b = ma([M.g.Bc, M.g.Eb]), c = b.next(); !c.done; c = b.next()) {
            var d = S(a, c.value);
            if (d)
                return d
        }
    }
    function zf(a, b) {
        return Je.F ? "" + Ke() + (b ? vf[a] || "" : "") : a
    }
    ;function Af(a) {
        var b = String(a[fc.na] || "").replace(/_/g, "");
        b.indexOf("cvt") === 0 && (b = "cvt");
        return b
    }
    var Bf = F.location.search.indexOf("?gtm_latency=") >= 0 || F.location.search.indexOf("&gtm_latency=") >= 0;
    var Cf = {
        sampleRate: "0.005000",
        Qi: "",
        am: ""
    };
    function Df() {
        var a = Cf.sampleRate;
        return Number(a)
    }
    var Ef = Math.random()
      , Ff = Bf || Ef < Df()
      , Gf = Bf || !Q(42) && Ff || Q(42) && !Ff && Ef < Df() + Number(Cf.am);
    function Hf(a) {
        var b = If();
        b.pending || (b.pending = []);
        Za(b.pending, function(c) {
            return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
        }) || b.pending.push({
            target: a,
            onLoad: void 0
        })
    }
    var Jf = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = []
    };
    function If() {
        var a = Fb("google_tag_data", {})
          , b = a.tidr;
        b || (b = new Jf,
        a.tidr = b);
        return b
    }
    ;var Kf = {}
      , Lf = !1
      , Mf = {
        ctid: "TAG_ID",
        canonicalContainerId: "",
        Bi: "TAG_ID",
        Ci: "TAG_ID"
    };
    Kf.od = eb("");
    function Nf() {
        var a = Of();
        return Lf ? a.map(Pf) : a
    }
    function Qf() {
        var a = Rf();
        return Lf ? a.map(Pf) : a
    }
    function Sf() {
        return Tf(Mf.ctid)
    }
    function Uf() {
        return Tf(Mf.canonicalContainerId || "_" + Mf.ctid)
    }
    function Of() {
        return Mf.Bi ? Mf.Bi.split("|") : [Mf.ctid]
    }
    function Rf() {
        return Mf.Ci ? Mf.Ci.split("|") : []
    }
    function Vf() {
        var a = Wf(Xf())
          , b = a && a.parent;
        if (b)
            return Wf(b)
    }
    function Yf() {
        var a = Wf(Xf());
        if (a) {
            for (; a.parent; ) {
                var b = Wf(a.parent);
                if (!b)
                    break;
                a = b
            }
            return a
        }
    }
    function Wf(a) {
        var b = If();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }
    function Tf(a) {
        return Lf ? Pf(a) : a
    }
    function Pf(a) {
        return "siloed_" + a
    }
    function Zf(a) {
        return Lf ? $f(a) : a
    }
    function $f(a) {
        a = String(a);
        return a.indexOf("siloed_") === 0 ? a.substring(7) : a
    }
    function ag() {
        var a = !1;
        if (a) {
            var b = If();
            if (b.siloed) {
                for (var c = [], d = Of().map(Pf), e = Rf().map(Pf), f = {}, h = 0; h < b.siloed.length; f = {
                    Je: void 0
                },
                h++)
                    f.Je = b.siloed[h],
                    !Lf && Za(f.Je.isDestination ? e : d, function(l) {
                        return function(m) {
                            return m === l.Je.ctid
                        }
                    }(f)) ? Lf = !0 : c.push(f.Je);
                b.siloed = c
            }
        }
    }
    function bg() {
        var a = If();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Nf(), f = Qf(), h = {}, l = 0; l < a.pending.length; h = {
                Md: void 0
            },
            l++)
                h.Md = a.pending[l],
                Za(h.Md.target.isDestination ? f : e, function(m) {
                    return function(n) {
                        return n === m.Md.target.ctid
                    }
                }(h)) ? d || (b = h.Md.onLoad,
                d = !0) : c.push(h.Md);
            a.pending = c;
            if (b)
                try {
                    b(Uf())
                } catch (m) {}
        }
    }
    function cg() {
        for (var a = Mf.ctid, b = Nf(), c = Qf(), d = function(n, p) {
            var q = {
                canonicalContainerId: Mf.canonicalContainerId,
                scriptContainerId: a,
                state: 2,
                containers: b.slice(),
                destinations: c.slice()
            };
            Db && (q.scriptElement = Db);
            Eb && (q.scriptSource = Eb);
            var r = p ? e.destination : e.container
              , t = r[n];
            t ? (p && t.state === 0 && L(93),
            Object.assign(t, q)) : r[n] = q
        }, e = If(), f = ma(b), h = f.next(); !h.done; h = f.next())
            d(h.value, !1);
        for (var l = ma(c), m = l.next(); !m.done; m = l.next())
            d(m.value, !0);
        e.canonical[Uf()] = {};
        bg()
    }
    function Xf() {
        return {
            ctid: Sf(),
            isDestination: Kf.od
        }
    }
    function dg(a) {
        var b = If();
        (b.siloed = b.siloed || []).push(a)
    }
    function eg() {
        var a = If().container, b;
        for (b in a)
            if (a.hasOwnProperty(b) && a[b].state === 1)
                return !0;
        return !1
    }
    function fg() {
        var a = {};
        A(If().destination, function(b, c) {
            c.state === 0 && (a[$f(b)] = c)
        });
        return a
    }
    function gg(a) {
        return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0)
    }
    var kg = {
        Pi: Number("5"),
        hn: Number("")
    }
      , lg = []
      , mg = [];
    function ng(a) {
        lg.push(a)
    }
    var og = !1
      , pg = "?id=" + Mf.ctid
      , qg = void 0
      , rg = {}
      , sg = void 0
      , tg = new function() {
        var a = 5;
        kg.Pi > 0 && (a = kg.Pi);
        this.F = a;
        this.D = 0;
        this.H = []
    }
      , ug = 1E3;
    function vg(a, b, c, d) {
        var e = qg;
        if (e === void 0)
            if (a)
                e = 0;
            else if (c)
                e = He();
            else
                return "";
        for (var f = [zf("https://www.googletagmanager.com"), a ? "/td" : "/a", pg], h = ma(a ? mg : lg), l = h.next(); !l.done; l = h.next())
            for (var m = l.value, n = m({
                eventId: e,
                Oa: !!b,
                oi: !!d,
                fc: function() {
                    og = !0
                }
            }), p = ma(n), q = p.next(); !q.done; q = p.next()) {
                var r = ma(q.value)
                  , t = r.next().value
                  , v = r.next().value;
                f.push("&" + t + "=" + v)
            }
        f.push("&z=0");
        return f.join("")
    }
    function wg() {
        if (Gf) {
            var a = vg(!0, !0);
            og && (Nb(a),
            og = !1)
        }
    }
    function xg() {
        sg && (F.clearTimeout(sg),
        sg = void 0);
        if (qg !== void 0 && yg) {
            Q(43) || wg();
            var a;
            (a = rg[qg]) || (a = tg.D < tg.F ? !1 : ib() - tg.H[tg.D % tg.F] < 1E3);
            if (a || ug-- <= 0)
                L(1),
                rg[qg] = !0;
            else {
                var b = tg.D++ % tg.F;
                tg.H[b] = ib();
                var c = vg(!1, !0);
                Nb(c);
                yg = og = !1
            }
        }
    }
    function zg() {
        if (Gf) {
            var a = vg(!0, !0, !0, !0);
            og && (Xb(a),
            og = !1)
        }
    }
    var yg = !1;
    function Ag(a) {
        rg[a] && !Q(43) ? wg() : (a !== qg && (xg(),
        qg = a),
        yg = !0,
        sg || (sg = F.setTimeout(xg, 500)),
        vg(!1).length >= 2022 && xg())
    }
    var Bg = $a();
    function Cg() {
        Bg = $a()
    }
    function Dg() {
        return [["v", "3"], ["t", "t"], ["pid", String(Bg)]]
    }
    var Eg = "https://www.googletagmanager.com/td?id=" + Mf.ctid
      , Fg = ["v", "t", "pid", "dl", "tdp"]
      , Gg = {}
      , Hg = {};
    function Ig(a, b) {
        Hg[a] = b;
        Gg[a] === void 0 && (Gg[a] = !0)
    }
    function Jg() {
        var a = Object.keys(Gg).filter(function(b) {
            return Gg[b] === !0 && Hg[b] !== void 0
        }).map(function(b) {
            var c = Hg[b];
            typeof c === "function" && (c = c());
            return c ? "&" + b + "=" + c : ""
        }).join("");
        return "" + Eg + a + "&z=0"
    }
    function Kg() {
        Object.keys(Gg).forEach(function(a) {
            Fg.indexOf(a) < 0 && (Gg[a] = !1)
        })
    }
    function Lg() {
        Gf && Q(43) && (Q(41) ? (Nb(Jg()),
        Kg()) : wg())
    }
    var Mg = $a();
    function Ng() {
        Mg = $a()
    }
    function Og() {
        Gf && (Q(41) ? (Ig("v", "3"),
        Ig("t", "t"),
        Ig("pid", function() {
            return String(Mg)
        }),
        F.setInterval(Ng, 864E5)) : mg.push(Dg))
    }
    var Pg = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , Qg = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    var Rg = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var Sg, Tg;
    a: {
        for (var Ug = ["CLOSURE_FLAGS"], Vg = za, Wg = 0; Wg < Ug.length; Wg++)
            if (Vg = Vg[Ug[Wg]],
            Vg == null) {
                Tg = null;
                break a
            }
        Tg = Vg
    }
    var Xg = Tg && Tg[610401301];
    Sg = Xg != null ? Xg : !1;
    var Yg, Zg = za.navigator;
    Yg = Zg ? Zg.userAgentData || null : null;
    function $g(a) {
        return Sg ? Yg ? Yg.brands.some(function(b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1
        }) : !1 : !1
    }
    function ah(a) {
        var b;
        a: {
            var c = za.navigator;
            if (c) {
                var d = c.userAgent;
                if (d) {
                    b = d;
                    break a
                }
            }
            b = ""
        }
        return b.indexOf(a) != -1
    }
    ;function bh() {
        return Sg ? !!Yg && Yg.brands.length > 0 : !1
    }
    function ch() {
        return bh() ? $g("Chromium") : (ah("Chrome") || ah("CriOS")) && !(bh() ? 0 : ah("Edge")) || ah("Silk")
    }
    ;var dh = function(a) {
        dh[" "](a);
        return a
    };
    dh[" "] = function() {}
    ;
    var eh = function(a, b, c, d) {
        for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
            var h = a.charCodeAt(e - 1);
            if (h == 38 || h == 63) {
                var l = a.charCodeAt(e + f);
                if (!l || l == 61 || l == 38 || l == 35)
                    return e
            }
            e += f + 1
        }
        return -1
    }
      , fh = /#|$/
      , gh = function(a, b) {
        var c = a.search(fh)
          , d = eh(a, 0, b, c);
        if (d < 0)
            return null;
        var e = a.indexOf("&", d);
        if (e < 0 || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
    }
      , hh = /[?&]($|#)/
      , ih = function(a, b, c) {
        for (var d, e = a.search(fh), f = 0, h, l = []; (h = eh(a, f, b, e)) >= 0; )
            l.push(a.substring(f, h)),
            f = Math.min(a.indexOf("&", h) + 1 || e, e);
        l.push(a.slice(f));
        d = l.join("").replace(hh, "$1");
        var m, n = c != null ? "=" + encodeURIComponent(String(c)) : "";
        var p = b + n;
        if (p) {
            var q, r = d.indexOf("#");
            r < 0 && (r = d.length);
            var t = d.indexOf("?"), v;
            t < 0 || t > r ? (t = r,
            v = "") : v = d.substring(t + 1, r);
            q = [d.slice(0, t), v, d.slice(r)];
            var u = q[1];
            q[1] = p ? u ? u + "&" + p : p : u;
            m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
        } else
            m = d;
        return m
    };
    var jh = function(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null)
                a: {
                    try {
                        dh(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch (c) {
            return !1
        }
    }
      , kh = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    function lh(a) {
        if (!a || !H.head)
            return null;
        var b = mh("META");
        H.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var nh = function(a) {
        if (F.top == F)
            return 0;
        if (a === void 0 ? 0 : a) {
            var b = F.location.ancestorOrigins;
            if (b)
                return b[b.length - 1] == F.location.origin ? 1 : 2
        }
        return jh(F.top) ? 1 : 2
    }
      , mh = function(a, b) {
        b = b === void 0 ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var oh = "", ph, qh = [], rh = !1;
    function sh() {
        var a = sf(F.location.href);
        return a.hostname + a.pathname
    }
    function th() {
        var a = [];
        oh && a.push(["dl", encodeURIComponent(oh)]);
        qh.length > 0 && a.push(["tdp", qh.join(".")]);
        ph !== void 0 && a.push(["frm", String(ph)]);
        return a
    }
    var uh = function(a) {
        var b = rh ? [] : th();
        !rh && a.Oa && (rh = !0,
        b.length && a.fc());
        return b
    };
    function vh() {
        if (Q(41)) {
            var a = sh();
            a && Ig("dl", encodeURIComponent(a));
            Ig("tdp", function() {
                return qh.length > 0 ? qh.join(".") : void 0
            });
            var b = nh(!0);
            b !== void 0 && Ig("frm", String(b))
        } else
            mg.push(uh)
    }
    ;var wh = []
      , xh = [];
    function yh(a) {
        xh.indexOf(a) === -1 && (wh.push(a),
        xh.push(a),
        Lg())
    }
    function zh(a) {
        if (!wh.length)
            return [];
        for (var b = th(), c = ma(wh), d = c.next(); !d.done; d = c.next())
            b.push([d.value, "1"]);
        a.Oa && (a.fc(),
        wh.length = 0);
        return b
    }
    ;function Ah(a) {
        Sa("HEALTH", a)
    }
    ;var Bh;
    try {
        Bh = JSON.parse(Qa("eyIwIjoiVVMiLCIxIjoiVVMtQUsiLCIyIjpmYWxzZSwiMyI6IiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"))
    } catch (a) {
        L(123),
        Ah(2),
        Bh = {}
    }
    function Ch() {
        var a = !1;
        return a
    }
    function Dh() {
        var a = "";
        return a
    }
    function Eh() {
        var a = !1;
        return a
    }
    function Fh() {
        var a = "";
        return a
    }
    var Gh = new function(a, b) {
        this.D = a;
        this.defaultValue = b === void 0 ? !1 : b
    }
    (1933);
    function Hh() {
        var a = Fb("google_tag_data", {});
        return a.ics = a.ics || new Ih
    }
    var Ih = function() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.D = []
    };
    Ih.prototype.default = function(a, b, c, d, e, f, h) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        Sa("TAGGING", 19);
        b == null ? Sa("TAGGING", 18) : Jh(this, a, b === "granted", c, d, e, f, h)
    }
    ;
    Ih.prototype.waitForUpdate = function(a, b, c) {
        for (var d = 0; d < a.length; d++)
            Jh(this, a[d], void 0, void 0, "", "", b, c)
    }
    ;
    var Jh = function(a, b, c, d, e, f, h, l) {
        var m = a.entries
          , n = m[b] || {}
          , p = n.region
          , q = d && k(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
            var r = !!(h && h > 0 && n.update === void 0)
              , t = {
                region: q,
                declare_region: n.declare_region,
                implicit: n.implicit,
                default: c !== void 0 ? c : n.default,
                declare: n.declare,
                update: n.update,
                quiet: r
            };
            if (e !== "" || n.default !== !1)
                m[b] = t;
            r && F.setTimeout(function() {
                m[b] === t && t.quiet && (Sa("TAGGING", 2),
                a.waitPeriodTimedOut = !0,
                a.clearTimeout(b, void 0, l),
                a.notifyListeners())
            }, h)
        }
    };
    ba = Ih.prototype;
    ba.clearTimeout = function(a, b, c) {
        var d = [a], e = (c == null ? void 0 : c.delegatedConsentTypes) || {}, f;
        for (f in e)
            e.hasOwnProperty(f) && e[f] === a && d.push(f);
        var h = this.entries[a] || {}
          , l = this.getConsentState(a, c);
        if (h.quiet) {
            h.quiet = !1;
            for (var m = ma(d), n = m.next(); !n.done; n = m.next())
                Kh(this, n.value)
        } else if (b !== void 0 && l !== b)
            for (var p = ma(d), q = p.next(); !q.done; q = p.next())
                Kh(this, q.value)
    }
    ;
    ba.update = function(a, b, c) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (b != null) {
            var d = this.getConsentState(a, c)
              , e = this.entries;
            (e[a] = e[a] || {}).update = b === "granted";
            this.clearTimeout(a, d, c)
        }
    }
    ;
    ba.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries
          , h = f[a] || {}
          , l = h.declare_region
          , m = c && k(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (d === "" || m === e || (m === d ? l !== e : !m && !l)) {
            var n = {
                region: h.region,
                declare_region: m,
                declare: b === "granted",
                implicit: h.implicit,
                default: h.default,
                update: h.update,
                quiet: h.quiet
            };
            if (d !== "" || h.declare !== !1)
                f[a] = n
        }
    }
    ;
    ba.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries
          , d = c[a] = c[a] || {};
        d.implicit !== !1 && (d.implicit = b === "granted")
    }
    ;
    ba.getConsentState = function(a, b) {
        var c = this.entries
          , d = c[a] || {}
          , e = d.update;
        if (e !== void 0)
            return e ? 1 : 2;
        e = d.default;
        if (e !== void 0)
            return e ? 1 : 2;
        if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
            var f = c[b.delegatedConsentTypes[a]] || {};
            e = f.update;
            if (e !== void 0)
                return e ? 1 : 2;
            e = f.default;
            if (e !== void 0)
                return e ? 1 : 2
        }
        e = d.declare;
        if (e !== void 0)
            return e ? 1 : 2;
        e = d.implicit;
        return e !== void 0 ? e ? 3 : 4 : 0
    }
    ;
    ba.addListener = function(a, b) {
        this.D.push({
            consentTypes: a,
            Bk: b
        })
    }
    ;
    var Kh = function(a, b) {
        for (var c = 0; c < a.D.length; ++c) {
            var d = a.D[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.Di = !0)
        }
    };
    Ih.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.D.length; ++c) {
            var d = this.D[c];
            if (d.Di) {
                d.Di = !1;
                try {
                    d.Bk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }
    ;
    var Mh = function() {
        var a = Lh
          , b = "Wf";
        if (a.Wf && a.hasOwnProperty(b))
            return a.Wf;
        var c = new a;
        return a.Wf = c
    };
    var Lh = function() {
        var a = {};
        this.D = function() {
            var b = Gh.D
              , c = Gh.defaultValue;
            return a[b] != null ? a[b] : c
        }
        ;
        this.F = function() {
            a[Gh.D] = !0
        }
    };
    var Nh = !1
      , Oh = !1
      , Ph = {
        delegatedConsentTypes: {},
        corePlatformServices: {},
        usedCorePlatformServices: !1
    }
      , Qh = function(a) {
        var b = Hh();
        b.accessedAny = !0;
        return (k(a) ? [a] : a).every(function(c) {
            switch (b.getConsentState(c, Ph)) {
            case 1:
            case 3:
                return !0;
            case 2:
            case 4:
                return !1;
            default:
                return !0
            }
        })
    }
      , Rh = function(a) {
        var b = Hh();
        b.accessedAny = !0;
        return b.getConsentState(a, Ph)
    }
      , Sh = function(a) {
        for (var b = {}, c = ma(a), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            b[e] = Ph.corePlatformServices[e] !== !1
        }
        return b
    }
      , Th = function(a) {
        var b = Hh();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }
      , Uh = function() {
        if (!Mh().D())
            return !1;
        var a = Hh();
        a.accessedAny = !0;
        return a.active
    }
      , Vh = function(a, b) {
        Hh().addListener(a, b)
    }
      , Wh = function(a, b) {
        Hh().notifyListeners(a, b)
    }
      , ci = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Th(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Vh(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , di = function(a, b) {
        function c() {
            for (var l = [], m = 0; m < e.length; m++) {
                var n = e[m];
                Qh(n) && !f[n] && l.push(n)
            }
            return l
        }
        function d(l) {
            for (var m = 0; m < l.length; m++)
                f[l[m]] = !0
        }
        var e = k(b) ? [b] : b
          , f = {}
          , h = c();
        h.length !== e.length && (d(h),
        Vh(e, function(l) {
            function m(q) {
                q.length !== 0 && (d(q),
                l.consentTypes = q,
                a(l))
            }
            var n = c();
            if (n.length !== 0) {
                var p = Object.keys(f).length;
                n.length + p >= e.length ? m(n) : F.setTimeout(function() {
                    m(c())
                }, 500)
            }
        }))
    };
    var ei = [M.g.O, M.g.R, M.g.N, M.g.oa], fi, gi;
    function hi(a) {
        for (var b = a[M.g.Pd], c = Array.isArray(b) ? b : [b], d = {
            Bd: 0
        }; d.Bd < c.length; d = {
            Bd: d.Bd
        },
        ++d.Bd)
            A(a, function(e) {
                return function(f, h) {
                    if (f !== M.g.Pd) {
                        var l = c[e.Bd]
                          , m = Bh["0"] || ""
                          , n = Bh["1"] || "";
                        Oh = !0;
                        Nh && Sa("TAGGING", 20);
                        Hh().declare(f, h, l, m, n)
                    }
                }
            }(d))
    }
    function ii(a) {
        !gi && fi && yh("crc");
        gi = !0;
        var b = a[M.g.Pd];
        b && L(40);
        var c = a[M.g.wg];
        c && L(41);
        for (var d = Array.isArray(b) ? b : [b], e = {
            Cd: 0
        }; e.Cd < d.length; e = {
            Cd: e.Cd
        },
        ++e.Cd)
            A(a, function(f) {
                return function(h, l) {
                    if (h !== M.g.Pd && h !== M.g.wg) {
                        var m = d[f.Cd]
                          , n = Number(c)
                          , p = Bh["0"] || ""
                          , q = Bh["1"] || "";
                        n = n === void 0 ? 0 : n;
                        Nh = !0;
                        Oh && Sa("TAGGING", 20);
                        Hh().default(h, l, m, p, q, n, Ph)
                    }
                }
            }(e))
    }
    function ji(a, b) {
        fi = !0;
        A(a, function(c, d) {
            Nh = !0;
            Oh && Sa("TAGGING", 20);
            Hh().update(c, d, Ph)
        });
        Wh(b.eventId, b.priorityId)
    }
    function T(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return Qh(b)
        })
    }
    function ki(a, b) {
        Vh(a, b)
    }
    function li(a, b) {
        di(a, b)
    }
    function mi(a, b) {
        ci(a, b)
    }
    function ni() {
        var a = [M.g.O, M.g.oa, M.g.N];
        Hh().waitForUpdate(a, 500, Ph)
    }
    function oi(a) {
        for (var b = ma(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            Hh().clearTimeout(d, void 0, Ph)
        }
        Wh()
    }
    var pi = function() {
        if (re.pscdl === void 0) {
            var a = function(b) {
                re.pscdl = b
            };
            try {
                "cookieDeprecationLabel"in Bb ? (a("pending"),
                Bb.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
            } catch (b) {
                a("error")
            }
        }
    };
    var qi = /[A-Z]+/
      , ri = /\s/;
    function si(a, b) {
        if (k(a)) {
            a = gb(a);
            var c = a.indexOf("-");
            if (!(c < 0)) {
                var d = a.substring(0, c);
                if (qi.test(d)) {
                    var e = a.substring(c + 1), f;
                    if (b) {
                        var h = function(n) {
                            var p = n.indexOf("/");
                            return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = h(e);
                        if (d === "DC" && f.length === 2) {
                            var l = h(f[1]);
                            l.length === 2 && (f[1] = l[0],
                            f.push(l[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var m = 0; m < f.length; m++)
                            if (!f[m] || ri.test(f[m]) && (d !== "AW" || m !== 1))
                                return
                    }
                    return {
                        id: a,
                        prefix: d,
                        da: d + "-" + f[0],
                        fa: f
                    }
                }
            }
        }
    }
    function ti(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = si(a[d], b);
            e && (c[e.id] = e)
        }
        ui(c);
        var f = [];
        A(c, function(h, l) {
            f.push(l)
        });
        return f
    }
    function ui(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                d.prefix === "AW" && d.fa[vi[2]] && b.push(d.da)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    var wi = {}
      , vi = (wi[0] = 0,
    wi[1] = 0,
    wi[2] = 1,
    wi[3] = 0,
    wi[4] = 1,
    wi[5] = 2,
    wi[6] = 0,
    wi[7] = 0,
    wi[8] = 0,
    wi);
    var xi = Number('') || 500
      , yi = []
      , zi = {}
      , Ai = {
        initialized: 11,
        complete: 12,
        interactive: 13
    }
      , Bi = {}
      , Ci = Object.freeze((Bi[M.g.Ia] = !0,
    Bi))
      , Di = H.location.search.indexOf("?gtm_diagnostics=") >= 0 || H.location.search.indexOf("&gtm_diagnostics=") >= 0
      , Ei = void 0;
    function Fi(a, b) {
        b.length && Gf && (Q(43) ? (zi[a] ? b.forEach(function(c) {
            zi[a].indexOf(c) < 0 && zi[a].push(c)
        }) : zi[a] = b,
        Ei || (Ei = F.setTimeout(function() {
            Lg();
            yi.length = 0;
            zi = {};
            Ei = void 0
        }, xi))) : yi.push(a + "*" + b.join(".")))
    }
    function Gi(a, b, c) {
        if (Gf && a === "config") {
            var d, e = (d = si(b)) == null ? void 0 : d.fa;
            if (!(e && e.length > 1)) {
                var f, h = Fb("google_tag_data", {});
                h.td || (h.td = {});
                f = h.td;
                var l = g(c.K);
                g(c.D, l);
                var m = [], n;
                for (n in f)
                    if (f.hasOwnProperty(n)) {
                        var p = Hi(f[n], l);
                        p.length && (Di && console.log(p),
                        m.push(n))
                    }
                m.length && (Fi(b, m),
                Sa("TAGGING", Ai[H.readyState] || 14));
                f[b] = l
            }
        }
    }
    function Ii(a, b) {
        var c = {}, d;
        for (d in b)
            b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a)
            a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }
    function Hi(a, b, c, d) {
        c = c === void 0 ? {} : c;
        d = d === void 0 ? "" : d;
        if (a === b)
            return [];
        var e = function(r, t) {
            var v;
            Ia(t) === "object" ? v = t[r] : Ia(t) === "array" && (v = t[r]);
            return v === void 0 ? Ci[r] : v
        }, f = Ii(a, b), h;
        for (h in f)
            if (f.hasOwnProperty(h)) {
                var l = (d ? d + "." : "") + h
                  , m = e(h, a)
                  , n = e(h, b)
                  , p = Ia(m) === "object" || Ia(m) === "array"
                  , q = Ia(n) === "object" || Ia(n) === "array";
                if (p && q)
                    Hi(m, n, c, l);
                else if (p || q || m !== n)
                    c[l] = !0
            }
        return Object.keys(c)
    }
    function Ji(a) {
        var b = [];
        if (Q(43)) {
            if (Object.keys(zi).length === 0)
                return [];
            for (var c in zi)
                zi.hasOwnProperty(c) && b.push(c + "*" + zi[c].join("."))
        } else {
            if (!yi.length)
                return [];
            b = yi
        }
        var d = [["tdc", b.join("!")]];
        a.Oa && (a.fc(),
        zi = {},
        yi.length = 0);
        return d
    }
    function Ki() {
        Object.keys(zi).length !== 0 && (F.clearTimeout(Ei),
        zg())
    }
    ;var Li = function(a, b, c, d, e, f, h, l, m, n, p) {
        this.eventId = a;
        this.priorityId = b;
        this.D = c;
        this.P = d;
        this.H = e;
        this.K = f;
        this.F = h;
        this.eventMetadata = l;
        this.onSuccess = m;
        this.onFailure = n;
        this.isGtmEvent = p
    }
      , Mi = function(a, b) {
        var c = [];
        switch (b) {
        case 3:
            c.push(a.D);
            c.push(a.P);
            c.push(a.H);
            c.push(a.K);
            c.push(a.F);
            break;
        case 2:
            c.push(a.D);
            break;
        case 1:
            c.push(a.P);
            c.push(a.H);
            c.push(a.K);
            c.push(a.F);
            break;
        case 4:
            c.push(a.D),
            c.push(a.P),
            c.push(a.H),
            c.push(a.K)
        }
        return c
    }
      , S = function(a, b, c, d) {
        for (var e = ma(Mi(a, d === void 0 ? 3 : d)), f = e.next(); !f.done; f = e.next()) {
            var h = f.value;
            if (h[b] !== void 0)
                return h[b]
        }
        return c
    }
      , Ni = function(a) {
        for (var b = {}, c = Mi(a, 4), d = ma(c), e = d.next(); !e.done; e = d.next())
            for (var f = Object.keys(e.value), h = ma(f), l = h.next(); !l.done; l = h.next())
                b[l.value] = 1;
        return Object.keys(b)
    }
      , Oi = function(a, b, c) {
        function d(n) {
            Ka(n) && A(n, function(p, q) {
                f = !0;
                e[p] = q
            })
        }
        var e = {}
          , f = !1
          , h = Mi(a, c === void 0 ? 3 : c);
        h.reverse();
        for (var l = ma(h), m = l.next(); !m.done; m = l.next())
            d(m.value[b]);
        return f ? e : void 0
    }
      , Pi = function(a) {
        for (var b = [M.g.Tc, M.g.Pc, M.g.Qc, M.g.Rc, M.g.Sc, M.g.Uc, M.g.Vc], c = Mi(a, 3), d = ma(c), e = d.next(); !e.done; e = d.next()) {
            for (var f = e.value, h = {}, l = !1, m = ma(b), n = m.next(); !n.done; n = m.next()) {
                var p = n.value;
                f[p] !== void 0 && (h[p] = f[p],
                l = !0)
            }
            var q = l ? h : void 0;
            if (q)
                return q
        }
        return {}
    }
      , Qi = function(a, b) {
        this.eventId = a;
        this.priorityId = b;
        this.F = {};
        this.P = {};
        this.D = {};
        this.H = {};
        this.X = {};
        this.K = {};
        this.eventMetadata = {};
        this.isGtmEvent = !1;
        this.onSuccess = function() {}
        ;
        this.onFailure = function() {}
    }
      , Ri = function(a, b) {
        a.F = b;
        return a
    }
      , Si = function(a, b) {
        a.P = b;
        return a
    }
      , Ti = function(a, b) {
        a.D = b;
        return a
    }
      , Ui = function(a, b) {
        a.H = b;
        return a
    }
      , Vi = function(a, b) {
        a.X = b;
        return a
    }
      , Wi = function(a, b) {
        a.K = b;
        return a
    }
      , Xi = function(a, b) {
        a.eventMetadata = b || {};
        return a
    }
      , Yi = function(a, b) {
        a.onSuccess = b;
        return a
    }
      , Zi = function(a, b) {
        a.onFailure = b;
        return a
    }
      , $i = function(a, b) {
        a.isGtmEvent = b;
        return a
    }
      , aj = function(a) {
        return new Li(a.eventId,a.priorityId,a.F,a.P,a.D,a.H,a.K,a.eventMetadata,a.onSuccess,a.onFailure,a.isGtmEvent)
    };
    var bj = {};
    function cj(a, b, c) {
        Ff && a !== void 0 && (bj[a] = bj[a] || [],
        bj[a].push(c + b),
        Ag(a))
    }
    function dj(a) {
        var b = a.eventId
          , c = a.Oa
          , d = []
          , e = bj[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete bj[b];
        return d
    }
    ;function ej(a, b, c, d) {
        var e = si(c, d.isGtmEvent);
        e && fj.push("event", [b, a], e, d)
    }
    function gj(a, b, c, d) {
        var e = si(c, d.isGtmEvent);
        e && fj.push("get", [a, b], e, d)
    }
    var hj = function() {
        this.K = {};
        this.D = {};
        this.P = {};
        this.X = null;
        this.H = {};
        this.F = !1;
        this.status = 1
    }
      , ij = function(a, b, c, d) {
        this.F = ib();
        this.D = b;
        this.args = c;
        this.messageContext = d;
        this.type = a
    }
      , jj = function() {
        this.destinations = {};
        this.F = {};
        this.D = []
    }
      , kj = function(a, b) {
        var c = b.da;
        return a.destinations[c] = a.destinations[c] || new hj
    }
      , lj = function(a, b, c, d) {
        if (d.D) {
            var e = kj(a, d.D)
              , f = e.X;
            if (f) {
                var h = g(c, null)
                  , l = g(e.K[d.D.id], null)
                  , m = g(e.H, null)
                  , n = g(e.D, null)
                  , p = g(a.F, null)
                  , q = {};
                if (Ff)
                    try {
                        q = g(Ne)
                    } catch (u) {
                        L(72)
                    }
                var r = d.D.prefix
                  , t = function(u) {
                    cj(d.messageContext.eventId, r, u)
                }
                  , v = aj($i(Zi(Yi(Xi(Vi(Ui(Wi(Ti(Si(Ri(new Qi(d.messageContext.eventId,d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                    if (t) {
                        var u = t;
                        t = void 0;
                        u("2");
                        if (d.messageContext.onSuccess)
                            d.messageContext.onSuccess()
                    }
                }), function() {
                    if (t) {
                        var u = t;
                        t = void 0;
                        u("3");
                        if (d.messageContext.onFailure)
                            d.messageContext.onFailure()
                    }
                }), !!d.messageContext.isGtmEvent));
                try {
                    cj(d.messageContext.eventId, r, "1"),
                    Gi(d.type, d.D.id, v),
                    f(d.D.id, b, d.F, v)
                } catch (u) {
                    cj(d.messageContext.eventId, r, "4")
                }
            }
        }
    };
    jj.prototype.register = function(a, b, c) {
        var d = kj(this, a);
        d.status !== 3 && (d.X = b,
        d.status = 3,
        c && (g(d.D, c),
        d.D = c),
        this.flush())
    }
    ;
    jj.prototype.push = function(a, b, c, d) {
        c !== void 0 && (kj(this, c).status === 1 && (kj(this, c).status = 2,
        this.push("require", [{}], c, {})),
        kj(this, c).F && (d.deferrable = !1));
        this.D.push(new ij(a,c,b,d));
        d.deferrable || this.flush()
    }
    ;
    jj.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.D.length; e = {
            Ub: void 0,
            Nf: void 0
        }) {
            var f = this.D[0]
              , h = f.D;
            if (f.messageContext.deferrable)
                !h || kj(this, h).F ? (f.messageContext.deferrable = !1,
                this.D.push(f)) : c.push(f),
                this.D.shift();
            else {
                switch (f.type) {
                case "require":
                    if (kj(this, h).status !== 3 && !a) {
                        this.D.push.apply(this.D, c);
                        return
                    }
                    break;
                case "set":
                    A(f.args[0], function(r, t) {
                        g(nb(r, t), b.F)
                    });
                    break;
                case "config":
                    var l = kj(this, h);
                    e.Ub = {};
                    A(f.args[0], function(r) {
                        return function(t, v) {
                            g(nb(t, v), r.Ub)
                        }
                    }(e));
                    var m = !!e.Ub[M.g.Rb];
                    delete e.Ub[M.g.Rb];
                    var n = h.da === h.id;
                    m || (n ? l.H = {} : l.K[h.id] = {});
                    l.F && m || lj(this, M.g.Z, e.Ub, f);
                    l.F = !0;
                    n ? g(e.Ub, l.H) : (g(e.Ub, l.K[h.id]),
                    L(70));
                    d = !0;
                    break;
                case "event":
                    e.Nf = {};
                    A(f.args[0], function(r) {
                        return function(t, v) {
                            g(nb(t, v), r.Nf)
                        }
                    }(e));
                    lj(this, f.args[1], e.Nf, f);
                    break;
                case "get":
                    var p = {}
                      , q = (p[M.g.nb] = f.args[0],
                    p[M.g.xb] = f.args[1],
                    p);
                    lj(this, M.g.Pa, q, f)
                }
                this.D.shift();
                mj(this, f)
            }
        }
        this.D.push.apply(this.D, c);
        d && this.flush()
    }
    ;
    var mj = function(a, b) {
        if (b.type !== "require")
            if (b.D)
                for (var c = kj(a, b.D).P[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.destinations)
                    if (a.destinations.hasOwnProperty(e)) {
                        var f = a.destinations[e];
                        if (f && f.P)
                            for (var h = f.P[b.type] || [], l = 0; l < h.length; l++)
                                h[l]()
                    }
    }
      , nj = function(a, b) {
        var c = fj
          , d = g(b, null);
        g(kj(c, a).D, d);
        kj(c, a).D = d
    }
      , fj = new jj;
    function oj(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = mh("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var h = a.google_image_requests
                      , l = xb(h, e);
                    l >= 0 && Array.prototype.splice.call(h, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Rg(e, "load", f);
            Rg(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var qj = function(a) {
        var b;
        b = b === void 0 ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        kh(a, function(d, e) {
            if (d || d === 0)
                c += "&" + e + "=" + encodeURIComponent("" + d)
        });
        pj(c, b)
    }
      , pj = function(a, b) {
        var c = window, d;
        b = b === void 0 ? !1 : b;
        d = d === void 0 ? !1 : d;
        if (c.fetch) {
            var e = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            };
            d && (e.mode = "cors",
            "setAttributionReporting"in XMLHttpRequest.prototype ? e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false"
            } : e.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            });
            c.fetch(a, e)
        } else
            oj(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
    };
    var rj = function() {
        this.P = this.P;
        this.H = this.H
    };
    rj.prototype.P = !1;
    rj.prototype.addOnDisposeCallback = function(a, b) {
        this.P ? b !== void 0 ? a.call(b) : a() : (this.H || (this.H = []),
        this.H.push(b !== void 0 ? Fa(a, b) : a))
    }
    ;
    var sj = function(a) {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    }
      , tj = function(a, b) {
        b = b === void 0 ? {} : b;
        rj.call(this);
        this.F = a;
        this.D = null;
        this.Na = {};
        this.Sb = 0;
        var c;
        this.Fb = (c = b.Vl) != null ? c : 500;
        var d;
        this.X = (d = b.Om) != null ? d : !1;
        this.K = null
    };
    xa(tj, rj);
    var vj = function(a) {
        return typeof a.F.__tcfapi === "function" || uj(a) != null
    };
    tj.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.X
        }
          , d = Qg(function() {
            return a(c)
        })
          , e = 0;
        this.Fb !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.Fb));
        var f = function(h, l) {
            clearTimeout(e);
            h ? (c = h,
            c.internalErrorState = sj(c),
            c.internalBlockOnErrors = b.X,
            l && c.internalErrorState === 0 || (c.tcString = "tcunavailable",
            l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            wj(this, "addEventListener", f)
        } catch (h) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    tj.prototype.removeEventListener = function(a) {
        a && a.listenerId && wj(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var yj = function(a, b, c) {
        var d;
        d = d === void 0 ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (f !== void 0) {
                    e = f[d === void 0 ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var h = e;
        if (h === 0)
            return !1;
        var l = c;
        c === 2 ? (l = 0,
        h === 2 && (l = 1)) : c === 3 && (l = 1,
        h === 1 && (l = 0));
        var m;
        if (l === 0)
            if (a.purpose && a.vendor) {
                var n = xj(a.vendor.consents, d === void 0 ? "755" : d);
                m = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && xj(a.purpose.consents, b)
            } else
                m = !0;
        else
            m = l === 1 ? a.purpose && a.vendor ? xj(a.purpose.legitimateInterests, b) && xj(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
        return m
    }
      , xj = function(a, b) {
        return !(!a || !a[b])
    }
      , wj = function(a, b, c, d) {
        c || (c = function() {}
        );
        if (typeof a.F.__tcfapi === "function") {
            var e = a.F.__tcfapi;
            e(b, 2, c, d)
        } else if (uj(a)) {
            zj(a);
            var f = ++a.Sb;
            a.Na[f] = c;
            if (a.D) {
                var h = {};
                a.D.postMessage((h.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                h), "*")
            }
        } else
            c({}, !1)
    }
      , uj = function(a) {
        if (a.D)
            return a.D;
        var b;
        a: {
            for (var c = a.F, d = 0; d < 50; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (l) {
                    e = !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b: {
                    try {
                        var h = c.parent;
                        if (h && h != c) {
                            f = h;
                            break b
                        }
                    } catch (l) {}
                    f = null
                }
                if (!(c = f))
                    break
            }
            b = null
        }
        a.D = b;
        return a.D
    }
      , zj = function(a) {
        a.K || (a.K = function(b) {
            try {
                var c;
                c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.Na[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Rg(a.F, "message", a.K))
    }
      , Aj = function(a) {
        if (a.gdprApplies === !1)
            return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = sj(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (qj({
            e: String(a.internalErrorState)
        }),
        !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    };
    var Bj = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };
    function Cj() {
        var a = re.tcf || {};
        return re.tcf = a
    }
    var Dj = function() {
        return new tj(F,{
            Vl: -1
        })
    }
      , Jj = function() {
        var a = Cj()
          , b = Dj();
        vj(b) && !Ej() && !Fj() && L(124);
        if (!a.active && vj(b)) {
            Ej() && (a.active = !0,
            a.Ib = {},
            a.cmpId = 0,
            a.tcfPolicyVersion = 0,
            Hh().active = !0,
            a.tcString = "tcunavailable");
            ni();
            try {
                b.addEventListener(function(c) {
                    if (c.internalErrorState !== 0)
                        Gj(a),
                        oi([M.g.O, M.g.oa, M.g.N]),
                        Hh().active = !0;
                    else if (a.gdprApplies = c.gdprApplies,
                    a.cmpId = c.cmpId,
                    a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode,
                    Fj() && (a.active = !0),
                    !Hj(c) || Ej() || Fj()) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (c.gdprApplies === !1) {
                            var e = {}, f;
                            for (f in Bj)
                                Bj.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if (Hj(c)) {
                            var h = {}, l;
                            for (l in Bj)
                                if (Bj.hasOwnProperty(l))
                                    if (l === "1") {
                                        var m, n = c, p = {
                                            Fk: !0
                                        };
                                        p = p === void 0 ? {} : p;
                                        m = Aj(n) ? n.gdprApplies === !1 ? !0 : n.tcString === "tcunavailable" ? !p.ui : (p.ui || n.gdprApplies !== void 0 || p.Fk) && (p.ui || typeof n.tcString === "string" && n.tcString.length) ? yj(n, "1", 0) : !0 : !1;
                                        h["1"] = m
                                    } else
                                        h[l] = yj(c, l, Bj[l]);
                            d = h
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.Ib = d;
                            var q = {}
                              , r = (q[M.g.O] = a.Ib["1"] ? "granted" : "denied",
                            q);
                            a.gdprApplies !== !0 ? (oi([M.g.O, M.g.oa, M.g.N]),
                            Hh().active = !0) : (r[M.g.oa] = a.Ib["3"] && a.Ib["4"] ? "granted" : "denied",
                            typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? r[M.g.N] = a.Ib["1"] && a.Ib["7"] ? "granted" : "denied" : oi([M.g.N]),
                            ji(r, {
                                eventId: 0
                            }, {
                                gdprApplies: a ? a.gdprApplies : void 0,
                                tcString: Ij() || ""
                            }))
                        }
                    } else
                        oi([M.g.O, M.g.oa, M.g.N])
                })
            } catch (c) {
                Gj(a),
                oi([M.g.O, M.g.oa, M.g.N]),
                Hh().active = !0
            }
        }
    };
    function Gj(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }
    function Hj(a) {
        return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown"
    }
    var Ej = function() {
        return F.gtag_enable_tcf_support === !0
    };
    function Fj() {
        return Cj().enableAdvertiserConsentMode === !0
    }
    var Ij = function() {
        var a = Cj();
        if (a.active)
            return a.tcString
    }
      , Kj = function() {
        var a = Cj();
        if (a.active && a.gdprApplies !== void 0)
            return a.gdprApplies ? "1" : "0"
    }
      , Lj = function(a) {
        if (!Bj.hasOwnProperty(String(a)))
            return !0;
        var b = Cj();
        return b.active && b.Ib ? !!b.Ib[String(a)] : !0
    };
    var Mj = [M.g.O, M.g.R, M.g.N, M.g.oa]
      , Nj = {}
      , Oj = (Nj[M.g.O] = 1,
    Nj[M.g.R] = 2,
    Nj);
    function Pj(a) {
        if (a === void 0)
            return 0;
        switch (S(a, M.g.ka)) {
        case void 0:
            return 1;
        case !1:
            return 3;
        default:
            return 2
        }
    }
    var Qj = function(a) {
        var b = Pj(a);
        if (b === 3)
            return !1;
        switch (Rh(M.g.oa)) {
        case 1:
        case 3:
            return !0;
        case 2:
            return !1;
        case 4:
            return b === 2;
        case 0:
            return !0;
        default:
            return !1
        }
    }
      , Rj = function() {
        return Uh() || !Qh(M.g.O) || !Qh(M.g.R)
    }
      , Sj = function() {
        var a = {}, b;
        for (b in Oj)
            Oj.hasOwnProperty(b) && (a[Oj[b]] = Rh(b));
        return "G1" + cc(a[1] || 0) + cc(a[2] || 0)
    }
      , Tj = {}
      , Uj = (Tj[M.g.O] = 0,
    Tj[M.g.R] = 1,
    Tj[M.g.N] = 2,
    Tj[M.g.oa] = 3,
    Tj);
    function Vj(a) {
        switch (a) {
        case void 0:
            return 1;
        case !0:
            return 3;
        case !1:
            return 2;
        default:
            return 0
        }
    }
    var Wj = function(a) {
        for (var b = "1", c = 0; c < Mj.length; c++) {
            var d = b, e, f = Mj[c], h = Ph.delegatedConsentTypes[f];
            e = h === void 0 ? 0 : Uj.hasOwnProperty(h) ? 12 | Uj[h] : 8;
            var l = Hh();
            l.accessedAny = !0;
            var m = l.entries[f] || {};
            e = e << 2 | Vj(m.implicit);
            b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[Vj(m.declare) << 4 | Vj(m.default) << 2 | Vj(m.update)])
        }
        var n = b, p;
        p = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[(Uh() ? 1 : 0) << 2 | Pj(a)];
        return n + p
    }
      , Xj = function() {
        if (!Qh(M.g.N))
            return "-";
        for (var a = Object.keys(pe), b = Sh(a), c = "", d = ma(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            b[f] && (c += pe[f])
        }
        return c || "-"
    }
      , Yj = function() {
        return Bh["6"] !== !1 || (Ej() || Fj()) && Kj() === "1" ? "1" : "0"
    }
      , Zj = function() {
        return (Bh["6"] !== !1 ? !0 : !(!Ej() && !Fj()) && Kj() === "1") || !Qh(M.g.N)
    }
      , ak = function() {
        var a = "0", b = "0", c;
        var d = Cj();
        c = d.active ? d.cmpId : void 0;
        typeof c === "number" && c >= 0 && c <= 4095 && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c >> 6 & 63],
        b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]);
        var e = "0", f;
        var h = Cj();
        f = h.active ? h.tcfPolicyVersion : void 0;
        typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
        var l = 0;
        Bh["6"] !== !1 && (l |= 1);
        Kj() === "1" && (l |= 2);
        Ej() && (l |= 4);
        var m;
        var n = Cj();
        m = n.enableAdvertiserConsentMode !== void 0 ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
        m === "1" && (l |= 8);
        Hh().waitPeriodTimedOut && (l |= 16);
        return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[l]
    };
    function bk() {
        var a = !1;
        return a
    }
    ;var ck = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    };
    function dk(a) {
        a = a === void 0 ? {} : a;
        var b = Mf.ctid.split("-")[0].toUpperCase()
          , c = {};
        c.ctid = Mf.ctid;
        c.Hl = qe.rd;
        c.Ll = qe.Bf;
        c.jl = Kf.od ? 2 : 1;
        c.Ql = a.Ki;
        c.li = Mf.canonicalContainerId;
        c.li !== a.wa && (c.wa = a.wa);
        if (Q(72)) {
            var d = Vf();
            c.tl = d ? d.canonicalContainerId : void 0
        }
        we ? (c.Qe = ck[b],
        c.Qe || (c.Qe = 0)) : c.Qe = Ae ? 13 : 10;
        Je.K ? (c.Pe = 0,
        c.ik = 2) : ye ? c.Pe = 1 : bk() ? c.Pe = 2 : c.Pe = 3;
        var e = {};
        e[6] = Lf;
        c.pk = e;
        var f = a.Ef, h;
        var l = c.Qe
          , m = c.Pe;
        l === void 0 ? h = "" : (m || (m = 0),
        h = "" + ec(1, 1) + bc(l << 2 | m));
        var n = c.ik, p = "4" + h + (n ? "" + ec(2, 1) + bc(n) : ""), q, r = c.Ll;
        q = r && dc.test(r) ? "" + ec(3, 2) + r : "";
        var t, v = c.Hl;
        t = v ? "" + ec(4, 1) + bc(v) : "";
        var u;
        var w = c.ctid;
        if (w && f) {
            var y = w.split("-")
              , x = y[0].toUpperCase();
            if (x !== "GTM" && x !== "OPT")
                u = "";
            else {
                var B = y[1];
                u = "" + ec(5, 3) + bc(1 + B.length) + (c.jl || 0) + B
            }
        } else
            u = "";
        var z = c.Ql, C = c.li, G = c.wa, D = c.fn, E = p + q + t + u + (z ? "" + ec(6, 1) + bc(z) : "") + (C ? "" + ec(7, 3) + bc(C.length) + C : "") + (G ? "" + ec(8, 3) + bc(G.length) + G : "") + (D ? "" + ec(9, 3) + bc(D.length) + D : ""), K;
        var J = c.pk;
        J = J === void 0 ? {} : J;
        for (var N = [], R = ma(Object.keys(J)), aa = R.next(); !aa.done; aa = R.next()) {
            var W = aa.value;
            N[Number(W)] = J[W]
        }
        if (N.length) {
            var O = ec(10, 3), ha;
            if (N.length === 0)
                ha = bc(0);
            else {
                for (var ea = [], ca = 0, da = !1, Ca = 0; Ca < N.length; Ca++) {
                    da = !0;
                    var va = Ca % 6;
                    N[Ca] && (ca |= 1 << va);
                    va === 5 && (ea.push(bc(ca)),
                    ca = 0,
                    da = !1)
                }
                da && ea.push(bc(ca));
                ha = ea.join("")
            }
            var Da = ha;
            K = "" + O + bc(Da.length) + Da
        } else
            K = "";
        var Ea = c.tl;
        return E + K + (Ea ? "" + ec(11, 3) + bc(Ea.length) + Ea : "")
    }
    ;var ek = {
        Yh: "service_worker_endpoint",
        ai: "shared_user_id",
        Wj: "shared_user_id_requested",
        Ge: "shared_user_id_source"
    }, fk;
    function gk(a) {
        if (!fk) {
            fk = {};
            for (var b = ma(Object.keys(ek)), c = b.next(); !c.done; c = b.next())
                fk[ek[c.value]] = !0
        }
        return !!fk[a]
    }
    function hk(a, b) {
        b = b === void 0 ? !1 : b;
        if (gk(a)) {
            var c, d, e = (d = (c = Fb("google_tag_data", {})).xcd) != null ? d : c.xcd = {};
            if (e[a])
                return e[a];
            if (b) {
                var f = void 0
                  , h = 1
                  , l = {}
                  , m = {
                    set: function(n) {
                        f = n;
                        m.notify()
                    },
                    get: function() {
                        return f
                    },
                    subscribe: function(n) {
                        l[String(h)] = n;
                        return h++
                    },
                    unsubscribe: function(n) {
                        var p = String(n);
                        return l.hasOwnProperty(p) ? (delete l[p],
                        !0) : !1
                    },
                    notify: function() {
                        for (var n = ma(Object.keys(l)), p = n.next(); !p.done; p = n.next()) {
                            var q = p.value;
                            try {
                                l[q](a, f)
                            } catch (r) {}
                        }
                    }
                };
                return e[a] = m
            }
        }
    }
    function ik() {
        var a = hk(ek.Wj, !0);
        a && a.set(!0)
    }
    function jk(a) {
        var b;
        return (b = hk(a)) == null ? void 0 : b.get()
    }
    function kk(a) {
        var b = ek.Ge;
        if (typeof a === "function") {
            var c;
            return (c = hk(b, !0)) == null ? void 0 : c.subscribe(a)
        }
    }
    function lk(a) {
        var b = hk(ek.Ge);
        b && b.unsubscribe(a)
    }
    ;function mk(a) {
        return a.origin !== "null"
    }
    ;function nk(a, b, c, d) {
        var e;
        if (ok(d)) {
            for (var f = [], h = String(b || pk()).split(";"), l = 0; l < h.length; l++) {
                var m = h[l].split("=")
                  , n = m[0].replace(/^\s*|\s*$/g, "");
                if (n && n === a) {
                    var p = m.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    p && c && (p = decodeURIComponent(p));
                    f.push(p)
                }
            }
            e = f
        } else
            e = [];
        return e
    }
    function qk(a, b, c, d, e) {
        if (ok(e)) {
            var f = rk(a, d, e);
            if (f.length === 1)
                return f[0].id;
            if (f.length !== 0) {
                f = sk(f, function(h) {
                    return h.yk
                }, b);
                if (f.length === 1)
                    return f[0].id;
                f = sk(f, function(h) {
                    return h.wl
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    }
    function tk(a, b, c, d) {
        var e = pk()
          , f = window;
        mk(f) && (f.document.cookie = a);
        var h = pk();
        return e !== h || c !== void 0 && nk(b, h, !1, d).indexOf(c) >= 0
    }
    function uk(a, b, c) {
        function d(t, v, u) {
            if (u == null)
                return delete h[v],
                t;
            h[v] = u;
            return t + "; " + v + "=" + u
        }
        function e(t, v) {
            if (v == null)
                return t;
            h[v] = !0;
            return t + "; " + v
        }
        if (!ok(c.ab))
            return 2;
        var f;
        b == null ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = vk(b),
        f = a + "=" + b);
        var h = {};
        f = d(f, "path", c.path);
        var l;
        c.expires instanceof Date ? l = c.expires.toUTCString() : c.expires != null && (l = "" + c.expires);
        f = d(f, "expires", l);
        f = d(f, "max-age", c.Vm);
        f = d(f, "samesite", c.bn);
        c.dn && (f = e(f, "secure"));
        var m = c.domain;
        if (m && m.toLowerCase() === "auto") {
            for (var n = wk(), p = 0; p < n.length; ++p) {
                var q = n[p] !== "none" ? n[p] : void 0
                  , r = d(f, "domain", q);
                r = e(r, c.flags);
                if (!xk(q, c.path) && tk(r, a, b, c.ab))
                    return 0
            }
            return 1
        }
        m && m.toLowerCase() !== "none" && (f = d(f, "domain", m));
        f = e(f, c.flags);
        return xk(m, c.path) ? 1 : tk(f, a, b, c.ab) ? 0 : 1
    }
    function yk(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        return uk(a, b, c)
    }
    function sk(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var l = a[h]
              , m = b(l);
            m === c ? d.push(l) : f === void 0 || m < f ? (e = [l],
            f = m) : m === f && e.push(l)
        }
        return d.length > 0 ? d : e
    }
    function rk(a, b, c) {
        for (var d = [], e = nk(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split(".")
              , l = h.shift();
            if (!b || !l || b.indexOf(l) !== -1) {
                var m = h.shift();
                if (m) {
                    var n = m.split("-");
                    d.push({
                        id: h.join("."),
                        yk: Number(n[0]) || 1,
                        wl: Number(n[1]) || 1
                    })
                }
            }
        }
        return d
    }
    function vk(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a
    }
    var zk = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , Ak = /(^|\.)doubleclick\.net$/i;
    function xk(a, b) {
        return a !== void 0 && (Ak.test(window.document.location.hostname) || b === "/" && zk.test(a))
    }
    function Bk(a) {
        if (!a)
            return 1;
        a = a.indexOf(".") === 0 ? a.substring(1) : a;
        return a.split(".").length
    }
    function Ck(a) {
        if (!a || a === "/")
            return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1
    }
    function Dk(a, b) {
        var c = "" + Bk(a)
          , d = Ck(b);
        d > 1 && (c += "-" + d);
        return c
    }
    var pk = function() {
        return mk(window) ? window.document.cookie : ""
    }
      , ok = function(a) {
        return a && Mh().D() ? (Array.isArray(a) ? a : [a]).every(function(b) {
            return Th(b) && Qh(b)
        }) : !0
    }
      , wk = function() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (b.length === 4) {
            var c = b[b.length - 1];
            if (Number(c).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; d >= 0; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        Ak.test(e) || zk.test(e) || a.push("none");
        return a
    };
    function Ek(a) {
        var b = Math.round(Math.random() * 2147483647), c;
        if (a) {
            var d = 1, e, f, h;
            if (a)
                for (d = 0,
                f = a.length - 1; f >= 0; f--)
                    h = a.charCodeAt(f),
                    d = (d << 6 & 268435455) + h + (h << 14),
                    e = d & 266338304,
                    d = e !== 0 ? d ^ e >> 21 : d;
            c = String(b ^ d & 2147483647)
        } else
            c = String(b);
        return c
    }
    function Fk(a) {
        return [Ek(a), Math.round(ib() / 1E3)].join(".")
    }
    ;function Gk(a, b, c, d) {
        var e, f = Number(a.Za != null ? a.Za : void 0);
        f !== 0 && (e = new Date((b || ib()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            ab: d
        }
    }
    ;var Hk;
    function Ik() {
        function a(h) {
            c(h.target || h.srcElement || {})
        }
        function b(h) {
            d(h.target || h.srcElement || {})
        }
        var c = Jk
          , d = Kk
          , e = Lk();
        if (!e.init) {
            Ob(H, "mousedown", a);
            Ob(H, "keyup", a);
            Ob(H, "submit", b);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                d(this);
                f.call(this)
            }
            ;
            e.init = !0
        }
    }
    function Mk(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: c === 2,
            placement: c,
            forms: d,
            sameHost: e
        };
        Lk().decorators.push(f)
    }
    function Nk(a, b, c) {
        for (var d = Lk().decorators, e = {}, f = 0; f < d.length; ++f) {
            var h = d[f], l;
            if (l = !c || h.forms)
                a: {
                    var m = h.domains
                      , n = a
                      , p = !!h.sameHost;
                    if (m && (p || n !== H.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q]instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (n.indexOf(m[q]) >= 0 || p && m[q].indexOf(n) >= 0) {
                                l = !0;
                                break a
                            }
                    l = !1
                }
            if (l) {
                var r = h.placement;
                r === void 0 && (r = h.fragment ? 2 : 1);
                r === b && lb(e, h.callback())
            }
        }
        return e
    }
    function Lk() {
        var a = Fb("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    }
    ;var Ok = /(.*?)\*(.*?)\*(.*)/
      , Pk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , Qk = /^(?:www\.|m\.|amp\.)+/
      , Rk = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function Sk(a) {
        var b = Rk.exec(a);
        if (b)
            return {
                ig: b[1],
                query: b[2],
                fragment: b[3]
            }
    }
    function Tk(a, b) {
        var c = [Bb.userAgent, (new Date).getTimezoneOffset(), Bb.userLanguage || Bb.language, Math.floor(ib() / 60 / 1E3) - (b === void 0 ? 0 : b), a].join("*"), d;
        if (!(d = Hk)) {
            for (var e = Array(256), f = 0; f < 256; f++) {
                for (var h = f, l = 0; l < 8; l++)
                    h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[f] = h
            }
            d = e
        }
        Hk = d;
        for (var m = 4294967295, n = 0; n < c.length; n++)
            m = m >>> 8 ^ Hk[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }
    function Uk() {
        return function(a) {
            var b = sf(F.location.href)
              , c = b.search.replace("?", "")
              , d = lf(c, "_gl", !0) || "";
            a.query = Vk(d) || {};
            var e = of(b, "fragment"), f;
            var h = -1;
            if (e.substring(0, 4) === "_gl=")
                h = 4;
            else {
                var l = e.indexOf("&_gl=");
                l > 0 && (h = l + 3 + 2)
            }
            if (h < 0)
                f = void 0;
            else {
                var m = e.indexOf("&", h);
                f = m < 0 ? e.substring(h) : e.substring(h, m)
            }
            a.fragment = Vk(f || "") || {}
        }
    }
    function Wk(a) {
        var b = Uk()
          , c = Lk();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (lb(d, e.query),
        a && lb(d, e.fragment));
        return d
    }
    var Vk = function(a) {
        try {
            var b = Xk(a, 3);
            if (b !== void 0) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e]
                      , h = Qa(d[e + 1]);
                    c[f] = h
                }
                Sa("TAGGING", 6);
                return c
            }
        } catch (l) {
            Sa("TAGGING", 8)
        }
    };
    function Xk(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; e < 3; ++e) {
                    var f = Ok.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var h = c;
            if (h && h[1] === "1") {
                var l = h[3], m;
                a: {
                    for (var n = h[2], p = 0; p < b; ++p)
                        if (n === Tk(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m)
                    return l;
                Sa("TAGGING", 7)
            }
        }
    }
    function Yk(a, b, c, d, e) {
        function f(p) {
            var q = p
              , r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q)
              , t = q;
            if (r) {
                var v = r[2]
                  , u = r[4];
                t = r[1];
                u && (t = t + v + u)
            }
            p = t;
            var w = p.charAt(p.length - 1);
            p && w !== "&" && (p += "&");
            return p + n
        }
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var h = Sk(c);
        if (!h)
            return "";
        var l = h.query || ""
          , m = h.fragment || ""
          , n = a + "=" + b;
        d ? m.substring(1).length !== 0 && e || (m = "#" + f(m.substring(1))) : l = "?" + f(l.substring(1));
        return "" + h.ig + l + m
    }
    function Zk(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var v, u = [], w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var y = n[w];
                        y !== void 0 && y === y && y !== null && y.toString() !== "[object Object]" && (u.push(w),
                        u.push(Pa(String(y))))
                    }
                var x = u.join("*");
                v = ["1", Tk(x), x].join("*");
                d ? (cf(3) || cf(1) || !p) && $k("_gl", v, a, p, q) : al("_gl", v, a, p, q)
            }
        }
        var d = (a.tagName || "").toUpperCase() === "FORM"
          , e = Nk(b, 1, d)
          , f = Nk(b, 2, d)
          , h = Nk(b, 4, d)
          , l = Nk(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        cf(1) && c(h, !0, !0);
        for (var m in l)
            l.hasOwnProperty(m) && bl(m, l[m], a)
    }
    function bl(a, b, c) {
        c.tagName.toLowerCase() === "a" ? al(a, b, c) : c.tagName.toLowerCase() === "form" && $k(a, b, c)
    }
    function al(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var f;
        if (f = c.href) {
            var h;
            if (!(h = !cf(4) || d)) {
                var l = F.location.href
                  , m = Sk(c.href)
                  , n = Sk(l);
                h = !(m && n && m.ig === n.ig && m.query === n.query && m.fragment)
            }
            f = h
        }
        if (f) {
            var p = Yk(a, b, c.href, d, e);
            wb.test(p) && (c.href = p)
        }
    }
    function $k(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if (f !== "get" || d) {
                if (f === "get" || f === "post") {
                    var h = Yk(a, b, c.action, d, e);
                    wb.test(h) && (c.action = h)
                }
            } else {
                for (var l = c.childNodes || [], m = !1, n = 0; n < l.length; n++) {
                    var p = l[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = H.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }
    function Jk(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && d > 0; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                f !== "http:" && f !== "https:" || Zk(e, e.hostname)
            }
        } catch (h) {}
    }
    function Kk(a) {
        try {
            if (a.action) {
                var b = of(sf(a.action), "host");
                Zk(a, b)
            }
        } catch (c) {}
    }
    function cl(a, b, c, d) {
        Ik();
        var e = c === "fragment" ? 2 : 1;
        d = !!d;
        Mk(a, b, e, d, !1);
        e === 2 && Sa("TAGGING", 23);
        d && Sa("TAGGING", 24)
    }
    function dl(a, b) {
        Ik();
        Mk(a, [nf(F.location, "host", !0)], b, !0, !0)
    }
    function el() {
        var a = H.location.hostname
          , b = Pk.exec(H.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , h = f[1];
            e = h === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(h)
        } else if (d) {
            if (d.indexOf("xn--") === 0)
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var l = a.replace(Qk, ""), m = e.replace(Qk, ""), n;
        if (!(n = l === m)) {
            var p = "." + m;
            n = l.substring(l.length - p.length, l.length) === p
        }
        return n
    }
    function fl(a, b) {
        return a === !1 ? !1 : a || b || el()
    }
    ;var gl = ["1"]
      , hl = {}
      , il = {};
    function jl(a, b) {
        b = b === void 0 ? !0 : b;
        var c = kl(a.prefix);
        if (!hl[c])
            if (vl(c, a.path, a.domain)) {
                var d = il[kl(a.prefix)];
                wl(a, d ? d.id : void 0, d ? d.eg : void 0)
            } else {
                var e = uf("auiddc");
                e ? (Sa("TAGGING", 17),
                hl[c] = e) : b && (xl(kl(a.prefix), Fk(), a),
                vl(c, a.path, a.domain))
            }
    }
    function wl(a, b, c) {
        var d = kl(a.prefix)
          , e = hl[d];
        if (e) {
            var f = e.split(".");
            if (f.length === 2) {
                var h = Number(f[1]) || 0;
                if (h) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(ib() / 1E3)));
                    xl(d, l, a, h * 1E3)
                }
            }
        }
    }
    function xl(a, b, c, d) {
        var e = ["1", Dk(c.domain, c.path), b].join(".")
          , f = Gk(c, d);
        f.ab = yl();
        yk(a, e, f)
    }
    function vl(a, b, c) {
        var d = qk(a, Bk(b), Ck(c), gl, yl());
        if (!d)
            return !1;
        zl(a, d);
        return !0
    }
    function zl(a, b) {
        var c = b.split(".");
        c.length === 5 ? (hl[a] = c.slice(0, 2).join("."),
        il[a] = {
            id: c.slice(2, 4).join("."),
            eg: Number(c[4]) || 0
        }) : c.length === 3 ? il[a] = {
            id: c.slice(0, 2).join("."),
            eg: Number(c[2]) || 0
        } : hl[a] = b
    }
    function kl(a) {
        return (a || "_gcl") + "_au"
    }
    function Al(a) {
        function b() {
            Qh(c) && a()
        }
        var c = yl();
        ci(function() {
            b();
            Qh(c) || di(b, c)
        }, c)
    }
    function Bl(a) {
        var b = Wk(!0)
          , c = kl(a.prefix);
        Al(function() {
            var d = b[c];
            if (d) {
                zl(c, d);
                var e = Number(hl[c].split(".")[1]) * 1E3;
                if (e) {
                    Sa("TAGGING", 16);
                    var f = Gk(a, e);
                    f.ab = yl();
                    yk(c, ["1", Dk(a.domain, a.path), d].join("."), f)
                }
            }
        })
    }
    function Cl(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var h = {}
              , l = qk(a, Bk(e.path), Ck(e.domain), gl, yl());
            l && (h[a] = l);
            return h
        };
        Al(function() {
            cl(f, b, c, d)
        })
    }
    function yl() {
        return ["ad_storage", "ad_user_data"]
    }
    ;function Dl(a) {
        for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                sg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(h, l) {
            return l.timestamp - h.timestamp
        });
        return b
    }
    function El(a, b) {
        var c = Dl(a)
          , d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!(f[0] !== "1" || b && f.length < 3 || !b && f.length !== 3) && Number(f[1])) {
                d[c[e].sg] || (d[c[e].sg] = []);
                var h = {
                    version: f[0],
                    timestamp: Number(f[1]) * 1E3,
                    W: f[2]
                };
                b && f.length > 3 && (h.labels = f.slice(3));
                d[c[e].sg].push(h)
            }
        }
        return d
    }
    ;var Fl = {}
      , Gl = (Fl.k = {
        Fa: /^[\w-]+$/
    },
    Fl.b = {
        Fa: /^[\w-]+$/,
        ng: !0
    },
    Fl.i = {
        Fa: /^[1-9]\d*$/
    },
    Fl);
    var Hl = {}
      , Kl = (Hl[5] = {
        Ri: {
            2: Il
        },
        Hf: ["k", "i", "b"]
    },
    Hl[4] = {
        Ri: {
            2: Il,
            GCL: Jl
        },
        Hf: ["k", "i", "b"]
    },
    Hl);
    function Ll(a) {
        var b = Kl[5];
        if (b) {
            var c = a.split(".")[0];
            if (c) {
                var d = b.Ri[c];
                if (d)
                    return d(a, 5)
            }
        }
    }
    function Il(a, b) {
        var c = a.split(".");
        if (c.length === 3) {
            var d = {}
              , e = Kl[b];
            if (e) {
                for (var f = e.Hf, h = ma(c[2].split("$")), l = h.next(); !l.done; l = h.next()) {
                    var m = l.value
                      , n = m[0];
                    if (f.indexOf(n) !== -1)
                        try {
                            var p = decodeURIComponent(m.substring(1))
                              , q = Gl[n];
                            q && (q.ng ? (d[n] = d[n] || [],
                            d[n].push(p)) : d[n] = p)
                        } catch (r) {}
                }
                return d
            }
        }
    }
    function Ml(a, b) {
        var c = Kl[5];
        if (c) {
            for (var d = [], e = ma(c.Hf), f = e.next(); !f.done; f = e.next()) {
                var h = f.value
                  , l = Gl[h];
                if (l) {
                    var m = a[h];
                    if (m !== void 0)
                        if (l.ng && Array.isArray(m))
                            for (var n = ma(m), p = n.next(); !p.done; p = n.next())
                                d.push(encodeURIComponent("" + h + p.value));
                        else
                            d.push(encodeURIComponent("" + h + m))
                }
            }
            return ["2", b || "1", d.join("$")].join(".")
        }
    }
    function Jl(a) {
        var b = a.split(".");
        b.shift();
        var c = b.shift()
          , d = b.shift()
          , e = {};
        return e.k = d,
        e.i = c,
        e.b = b,
        e
    }
    ;var Nl = new Map([[5, "ad_storage"], [4, ["ad_storage", "ad_user_data"]]]);
    function Ol(a) {
        if (Kl[5]) {
            for (var b = [], c = nk(a, void 0, void 0, Nl.get(5)), d = ma(c), e = d.next(); !e.done; e = d.next()) {
                var f = Ll(e.value);
                f && (Pl(f),
                b.push(f))
            }
            return b
        }
    }
    function Ql(a, b, c, d) {
        c = c || {};
        var e = Ml(b, Dk(c.domain, c.path));
        if (e) {
            var f = Gk(c, d, void 0, Nl.get(5));
            yk(a, e, f)
        }
    }
    function Rl(a, b) {
        var c = b.Fa;
        return typeof c === "function" ? c(a) : c.test(a)
    }
    function Pl(a) {
        for (var b = ma(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
            xd: void 0
        },
        c = b.next()) {
            var e = c.value
              , f = a[e];
            d.xd = Gl[e];
            d.xd ? d.xd.ng ? a[e] = Array.isArray(f) ? f.filter(function(h) {
                return function(l) {
                    return Rl(l, h.xd)
                }
            }(d)) : void 0 : typeof f === "string" && Rl(f, d.xd) || (a[e] = void 0) : a[e] = void 0
        }
    }
    ;var Sl = /^\w+$/
      , Tl = /^[\w-]+$/
      , Ul = {}
      , Vl = (Ul.aw = "_aw",
    Ul.dc = "_dc",
    Ul.gf = "_gf",
    Ul.gp = "_gp",
    Ul.gs = "_gs",
    Ul.ha = "_ha",
    Ul.ag = "_ag",
    Ul.gb = "_gb",
    Ul);
    function Wl() {
        return ["ad_storage", "ad_user_data"]
    }
    function Xl(a) {
        return !Mh().D() || Qh(a)
    }
    function Yl(a, b) {
        function c() {
            var d = Xl(b);
            d && a();
            return d
        }
        ci(function() {
            c() || di(c, b)
        }, b)
    }
    function Zl(a) {
        return $l(a).map(function(b) {
            return b.W
        })
    }
    function am(a) {
        return bm(a).filter(function(b) {
            return b.W
        }).map(function(b) {
            return b.W
        })
    }
    function bm(a) {
        var b = cm(a.prefix)
          , c = dm("gb", b)
          , d = dm("ag", b);
        if (!d || !c)
            return [];
        var e = function(l) {
            return function(m) {
                m.type = l;
                return m
            }
        }
          , f = $l(c).map(e("gb"))
          , h = (cf(6) ? em(d) : []).map(e("ag"));
        return f.concat(h).sort(function(l, m) {
            return m.timestamp - l.timestamp
        })
    }
    function fm(a, b, c, d, e) {
        var f = Za(a, function(h) {
            return h.W === c
        });
        f ? (f.timestamp = Math.max(f.timestamp, d),
        f.labels = gm(f.labels || [], e || [])) : a.push({
            version: b,
            W: c,
            timestamp: d,
            labels: e
        })
    }
    function em(a) {
        for (var b = Ol(a) || [], c = [], d = ma(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value
              , h = f
              , l = hm(f);
            l && fm(c, "2", h.k, l, h.b || [])
        }
        return c.sort(function(m, n) {
            return n.timestamp - m.timestamp
        })
    }
    function $l(a) {
        for (var b = [], c = nk(a, H.cookie, void 0, Wl()), d = ma(c), e = d.next(); !e.done; e = d.next()) {
            var f = im(e.value);
            if (f != null) {
                var h = f;
                fm(b, h.version, h.W, h.timestamp, h.labels)
            }
        }
        b.sort(function(l, m) {
            return m.timestamp - l.timestamp
        });
        return jm(b)
    }
    function gm(a, b) {
        if (!a.length)
            return b;
        if (!b.length)
            return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }
    function cm(a) {
        return a && typeof a === "string" && a.match(Sl) ? a : "_gcl"
    }
    function km(a, b) {
        var c = cf(6)
          , d = cf(7)
          , e = sf(a)
          , f = of(e, "query", !1, void 0, "gclid")
          , h = of(e, "query", !1, void 0, "gclsrc")
          , l = of(e, "query", !1, void 0, "wbraid");
        cf(8) && (l = rb(l));
        var m;
        c && (m = of(e, "query", !1, void 0, "gbraid"));
        var n;
        d && (n = of(e, "query", !1, void 0, "gad_source"));
        var p = of(e, "query", !1, void 0, "dclid");
        if (b && (!f || !h || !l || c && !m)) {
            var q = e.hash.replace("#", "");
            f = f || lf(q, "gclid");
            h = h || lf(q, "gclsrc");
            l = l || lf(q, "wbraid");
            c && (m = m || lf(q, "gbraid"));
            d && (n = n || lf(q, "gad_source"))
        }
        return lm(f, h, p, l, m, n)
    }
    function mm() {
        return km(F.location.href, !0)
    }
    function lm(a, b, c, d, e, f) {
        var h = {}
          , l = function(m, n) {
            h[n] || (h[n] = []);
            h[n].push(m)
        };
        h.gclid = a;
        h.gclsrc = b;
        h.dclid = c;
        if (a !== void 0 && a.match(Tl))
            switch (b) {
            case void 0:
                l(a, "aw");
                break;
            case "aw.ds":
                l(a, "aw");
                l(a, "dc");
                break;
            case "ds":
                l(a, "dc");
                break;
            case "3p.ds":
                l(a, "dc");
                break;
            case "gf":
                l(a, "gf");
                break;
            case "ha":
                l(a, "ha")
            }
        c && l(c, "dc");
        d !== void 0 && Tl.test(d) && (h.wbraid = d,
        l(d, "gb"));
        cf(6) && e !== void 0 && Tl.test(e) && (h.gbraid = e,
        l(e, "ag"));
        cf(7) && f !== void 0 && Tl.test(f) && (h.gad_source = f,
        l(f, "gs"));
        return h
    }
    function nm(a) {
        var b = mm();
        if (cf(5)) {
            for (var c = !0, d = ma(Object.keys(b)), e = d.next(); !e.done; e = d.next())
                if (b[e.value] !== void 0) {
                    c = !1;
                    break
                }
            c && (b = km(F.document.referrer, !1))
        }
        om(b, !1, a)
    }
    function om(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = cm(c.prefix)
          , h = d || ib()
          , l = Math.round(h / 1E3)
          , m = Wl()
          , n = !1
          , p = !1
          , q = function() {
            if (Xl(m)) {
                var r = Gk(c, h, !0);
                r.ab = m;
                for (var t = function(E, K) {
                    var J = dm(E, f);
                    J && (yk(J, K, r),
                    E !== "gb" && (n = !0))
                }, v = function(E) {
                    var K = ["GCL", l, E];
                    e.length > 0 && K.push(e.join("."));
                    return K.join(".")
                }, u = ma(["aw", "dc", "gf", "ha", "gp"]), w = u.next(); !w.done; w = u.next()) {
                    var y = w.value;
                    a[y] && t(y, v(a[y][0]))
                }
                if (!n && a.gb) {
                    var x = a.gb[0]
                      , B = dm("gb", f);
                    !b && $l(B).some(function(E) {
                        return E.W === x && E.labels && E.labels.length > 0
                    }) || t("gb", v(x))
                }
            }
            if (!p && cf(6) && a.gbraid && Xl("ad_storage") && (p = !0,
            !n)) {
                var z = a.gbraid
                  , C = dm("ag", f);
                if (b || !(cf(6) ? em(C) : []).some(function(E) {
                    return E.W === z && E.labels && E.labels.length > 0
                })) {
                    var G = {}
                      , D = (G.k = z,
                    G.i = "" + l,
                    G.b = e,
                    G);
                    Ql(C, D, c, h)
                }
            }
            pm(a, f, h, c)
        };
        ci(function() {
            q();
            Xl(m) || di(q, m)
        }, m)
    }
    function pm(a, b, c, d) {
        if (cf(7) && a.gad_source !== void 0 && Xl("ad_storage")) {
            var e = dm("gs", b);
            if (e) {
                var f = Math.round((ib() - (Zb() || 0)) / 1E3)
                  , h = {}
                  , l = (h.k = a.gad_source,
                h.i = "" + f,
                h);
                Ql(e, l, d, c)
            }
        }
    }
    function qm(a, b) {
        var c = Wk(!0);
        Yl(function() {
            for (var d = cm(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (Vl[f] !== void 0) {
                    var h = dm(f, d)
                      , l = c[h];
                    if (l) {
                        var m = Math.min(rm(l), ib()), n;
                        b: {
                            for (var p = m, q = nk(h, H.cookie, void 0, Wl()), r = 0; r < q.length; ++r)
                                if (rm(q[r]) > p) {
                                    n = !0;
                                    break b
                                }
                            n = !1
                        }
                        if (!n) {
                            var t = Gk(b, m, !0);
                            t.ab = Wl();
                            yk(h, l, t)
                        }
                    }
                }
            }
            om(lm(c.gclid, c.gclsrc), !1, b)
        }, Wl())
    }
    function sm(a) {
        var b = [];
        cf(6) && b.push("ag");
        if (b.length !== 0) {
            var c = Wk(!0)
              , d = cm(a.prefix);
            Yl(function() {
                for (var e = 0; e < b.length; ++e) {
                    var f = dm(b[e], d);
                    if (f) {
                        var h = c[f];
                        if (h) {
                            var l = Ll(h);
                            if (l) {
                                var m = hm(l);
                                m || (m = ib());
                                var n;
                                a: {
                                    for (var p = m, q = Ol(f), r = 0; r < q.length; ++r)
                                        if (hm(q[r]) > p) {
                                            n = !0;
                                            break a
                                        }
                                    n = !1
                                }
                                if (n)
                                    break;
                                l.i = "" + Math.round(m / 1E3);
                                Ql(f, l, a, m)
                            }
                        }
                    }
                }
            }, ["ad_storage"])
        }
    }
    function dm(a, b) {
        var c = Vl[a];
        if (c !== void 0)
            return b + c
    }
    function rm(a) {
        return tm(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
    }
    function hm(a) {
        return a ? (Number(a.i) || 0) * 1E3 : 0
    }
    function im(a) {
        var b = tm(a.split("."));
        return b.length === 0 ? null : {
            version: b[0],
            W: b[2],
            timestamp: (Number(b[1]) || 0) * 1E3,
            labels: b.slice(3)
        }
    }
    function tm(a) {
        return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !Tl.test(a[2]) ? [] : a
    }
    function um(a, b, c, d, e) {
        if (Array.isArray(b) && mk(F)) {
            var f = cm(e)
              , h = function() {
                for (var l = {}, m = 0; m < a.length; ++m) {
                    var n = dm(a[m], f);
                    if (n) {
                        var p = nk(n, H.cookie, void 0, Wl());
                        p.length && (l[n] = p.sort()[p.length - 1])
                    }
                }
                return l
            };
            Yl(function() {
                cl(h, b, c, d)
            }, Wl())
        }
    }
    function vm(a, b, c, d) {
        if (Array.isArray(a) && mk(F)) {
            var e = [];
            cf(6) && e.push("ag");
            if (e.length !== 0) {
                var f = cm(d)
                  , h = function() {
                    for (var l = {}, m = 0; m < e.length; ++m) {
                        var n = dm(e[m], f);
                        if (!n)
                            return {};
                        var p = Ol(n);
                        if (p.length) {
                            var q = p.sort(function(r, t) {
                                return hm(t) - hm(r)
                            })[0];
                            l[n] = Ml(q)
                        }
                    }
                    return l
                };
                Yl(function() {
                    cl(h, a, b, c)
                }, ["ad_storage"])
            }
        }
    }
    function jm(a) {
        return a.filter(function(b) {
            return Tl.test(b.W)
        })
    }
    function wm(a, b) {
        if (mk(F)) {
            for (var c = cm(b.prefix), d = {}, e = 0; e < a.length; e++)
                Vl[a[e]] && (d[a[e]] = Vl[a[e]]);
            Yl(function() {
                A(d, function(f, h) {
                    var l = nk(c + h, H.cookie, void 0, Wl());
                    l.sort(function(t, v) {
                        return rm(v) - rm(t)
                    });
                    if (l.length) {
                        var m = l[0], n = rm(m), p = tm(m.split(".")).length !== 0 ? m.split(".").slice(3) : [], q = {}, r;
                        r = tm(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        om(q, !0, b, n, p)
                    }
                })
            }, Wl())
        }
    }
    function xm(a) {
        var b = []
          , c = [];
        cf(6) && (b.push("ag"),
        c.push("gbraid"));
        b.length !== 0 && Yl(function() {
            for (var d = cm(a.prefix), e = 0; e < b.length; ++e) {
                var f = dm(b[e], d);
                if (!f)
                    break;
                var h = Ol(f);
                if (h.length) {
                    var l = h.sort(function(q, r) {
                        return hm(r) - hm(q)
                    })[0]
                      , m = hm(l)
                      , n = l.b
                      , p = {};
                    p[c[e]] = l.k;
                    om(p, !0, a, m, n)
                }
            }
        }, ["ad_storage"])
    }
    function ym(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    function zm(a) {
        function b(e, f, h) {
            h && (e[f] = h)
        }
        if (Uh()) {
            var c = mm();
            if (ym(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.wbraid);
                cf(6) && b(d, "gbraid", c.gbraid);
                dl(function() {
                    return d
                }, 3);
                dl(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    }
    function Am(a) {
        if (!cf(1))
            return null;
        var b = Wk(!0).gad_source;
        if (b != null)
            return F.location.hash = "",
            b;
        if (cf(2)) {
            var c = sf(F.location.href);
            b = of(c, "query", !1, void 0, "gad_source");
            if (b != null)
                return b;
            var d = mm();
            if (ym(d, a))
                return "0"
        }
        return null
    }
    function Bm(a) {
        var b = Am(a);
        b != null && dl(function() {
            var c = {};
            return c.gad_source = b,
            c
        }, 4)
    }
    function Cm(a, b, c) {
        var d = [];
        if (b.length === 0)
            return d;
        for (var e = {}, f = 0; f < b.length; f++) {
            var h = b[f]
              , l = h.type ? h.type : "gcl";
            (h.labels || []).indexOf(c) === -1 ? (a.push(0),
            e[l] || d.push(h)) : a.push(1);
            e[l] = !0
        }
        return d
    }
    function Dm(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Xl(Wl()))
            return e;
        var f = $l(a)
          , h = Cm(e, f, b);
        if (h.length && !d)
            for (var l = ma(h), m = l.next(); !m.done; m = l.next()) {
                var n = m.value
                  , p = n.timestamp
                  , q = [n.version, Math.round(p / 1E3), n.W].concat(n.labels || [], [b]).join(".")
                  , r = Gk(c, p, !0);
                r.ab = Wl();
                yk(a, q, r)
            }
        return e
    }
    function Em(a, b) {
        var c = [];
        b = b || {};
        var d = bm(b)
          , e = Cm(c, d, a);
        if (e.length)
            for (var f = ma(e), h = f.next(); !h.done; h = f.next()) {
                var l = h.value
                  , m = cm(b.prefix)
                  , n = dm(l.type, m);
                if (!n)
                    break;
                var p = l
                  , q = p.version
                  , r = p.W
                  , t = p.labels
                  , v = p.timestamp
                  , u = Math.round(v / 1E3);
                if (l.type === "ag") {
                    var w = {}
                      , y = (w.k = r,
                    w.i = "" + u,
                    w.b = (t || []).concat([a]),
                    w);
                    Ql(n, y, b, v)
                } else if (l.type === "gb") {
                    var x = [q, u, r].concat(t || [], [a]).join(".")
                      , B = Gk(b, v, !0);
                    B.ab = Wl();
                    yk(n, x, B)
                }
            }
        return c
    }
    function Fm(a, b) {
        var c = cm(b)
          , d = dm(a, c);
        if (!d)
            return 0;
        var e;
        e = a === "ag" ? cf(6) ? em(d) : [] : $l(d);
        for (var f = 0, h = 0; h < e.length; h++)
            f = Math.max(f, e[h].timestamp);
        return f
    }
    function Gm(a) {
        for (var b = 0, c = ma(Object.keys(a)), d = c.next(); !d.done; d = c.next())
            for (var e = a[d.value], f = 0; f < e.length; f++)
                b = Math.max(b, Number(e[f].timestamp));
        return b
    }
    function Hm(a, b) {
        var c = Math.max(Fm("aw", a), Gm(Xl(Wl()) ? El() : {}))
          , d = Math.max(Fm("gb", a), Gm(Xl(Wl()) ? El("_gac_gb", !0) : {}));
        cf(6) && b && (d = Math.max(d, Fm("ag", a)));
        return d > c
    }
    ;var Vm, Wm = !1;
    function Xm(a) {
        if (!Wm) {
            Wm = !0;
            Vm = Vm || {}
        }
        return Vm[a]
    }
    var Ym = function(a, b, c) {
        this.eventName = b;
        this.m = c;
        this.o = {};
        this.isAborted = !1;
        this.target = a;
        this.metadata = g(c.eventMetadata || {}, {})
    };
    Ym.prototype.copyToHitData = function(a, b, c) {
        var d = S(this.m, a);
        d === void 0 && (d = b);
        if (d !== void 0 && c !== void 0 && k(d) && Q(54))
            try {
                d = c(d)
            } catch (e) {}
        d !== void 0 && (this.o[a] = d)
    }
    ;
    var Zm = function(a, b, c) {
        var d = Xm(a.target.da);
        return d && d[b] !== void 0 ? d[b] : c
    };
    function $m() {
        re.dedupe_gclid || (re.dedupe_gclid = Fk());
        return re.dedupe_gclid
    }
    ;var an = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/
      , bn = /^www.googleadservices.com$/;
    function cn(a) {
        a || (a = dn());
        return a.Yl ? !1 : a.Pk || a.Qk || a.Sk || a.Rk || a.Uf || a.Pf || a.Ek || a.Hk ? !0 : !1
    }
    function dn() {
        var a = {}
          , b = Wk(!0);
        a.Yl = !!b._up;
        var c = mm();
        a.Pk = c.aw !== void 0;
        a.Qk = c.dc !== void 0;
        a.Sk = c.wbraid !== void 0;
        a.Rk = c.gbraid !== void 0;
        var d = sf(F.location.href)
          , e = of(d, "query", !1, void 0, "gad");
        a.Uf = e !== void 0;
        if (!a.Uf) {
            var f = d.hash.replace("#", "")
              , h = lf(f, "gad");
            a.Uf = h !== void 0
        }
        a.Pf = of(d, "query", !1, void 0, "gad_source");
        if (a.Pf === void 0) {
            var l = d.hash.replace("#", "")
              , m = lf(l, "gad_source");
            a.Pf = m
        }
        var n = H.referrer ? of(sf(H.referrer), "host") : "";
        a.Hk = an.test(n);
        a.Ek = bn.test(n);
        return a
    }
    ;var en = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$")
      , fn = /^~?[\w-]+(?:\.~?[\w-]+)*$/
      , gn = /^\d+\.fls\.doubleclick\.net$/
      , hn = /;gac=([^;?]+)/
      , jn = /;gacgb=([^;?]+)/;
    function kn(a, b) {
        if (gn.test(H.location.host)) {
            var c = H.location.href.match(b);
            return c && c.length === 2 && c[1].match(en) ? decodeURIComponent(c[1]) : ""
        }
        for (var d = [], e = ma(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
            for (var h = f.value, l = [], m = a[h], n = 0; n < m.length; n++)
                l.push(m[n].W);
            d.push(h + ":" + l.join(","))
        }
        return d.length > 0 ? d.join(";") : ""
    }
    function ln(a, b, c) {
        for (var d = Xl(Wl()) ? El("_gac_gb", !0) : {}, e = [], f = !1, h = ma(Object.keys(d)), l = h.next(); !l.done; l = h.next()) {
            var m = l.value
              , n = Dm("_gac_gb_" + m, a, b, c);
            f = f || n.length !== 0 && n.some(function(p) {
                return p === 1
            });
            e.push(m + ":" + n.join(","))
        }
        return {
            Dk: f ? e.join(";") : "",
            Ck: kn(d, jn)
        }
    }
    function mn(a) {
        var b = H.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
        return b && b.length === 2 && b[1].match(fn) ? b[1] : void 0
    }
    function nn(a) {
        var b = {
            Qf: void 0,
            Rf: void 0
        }, c, d;
        gn.test(H.location.host) && (c = mn("gclgs"),
        d = mn("gclst"));
        if (c && d)
            b.Qf = c,
            b.Rf = d;
        else {
            var e = ib()
              , f = em((a || "_gcl") + "_gs")
              , h = f.map(function(m) {
                return m.W
            })
              , l = f.map(function(m) {
                return e - m.timestamp
            });
            h.length > 0 && l.length > 0 && (b.Qf = h.join("."),
            b.Rf = l.join("."))
        }
        return b
    }
    function on(a, b, c) {
        if (gn.test(H.location.host)) {
            var d = mn(c);
            if (d)
                return [{
                    W: d
                }]
        } else {
            if (b === "gclid")
                return $l((a || "_gcl") + "_aw");
            if (b === "wbraid")
                return $l((a || "_gcl") + "_gb");
            if (b === "braids")
                return bm({
                    prefix: a
                })
        }
        return []
    }
    function pn(a) {
        return on(a, "gclid", "gclaw").map(function(b) {
            return b.W
        }).join(".")
    }
    function qn(a) {
        return on(a, "wbraid", "gclgb").map(function(b) {
            return b.W
        }).join(".")
    }
    function rn(a) {
        return on(a, "braids", "gclgb").map(function(b) {
            return b.W
        }).join(".")
    }
    function sn(a, b) {
        return gn.test(H.location.host) ? !(mn("gclaw") || mn("gac")) : Hm(a, b)
    }
    function tn(a, b, c) {
        var d;
        d = c ? Em(a, b) : Dm((b && b.prefix || "_gcl") + "_gb", a, b);
        return d.length === 0 || d.every(function(e) {
            return e === 0
        }) ? "" : d.join(".")
    }
    ;var un = function() {
        if (Wa(F.__uspapi)) {
            var a = "";
            try {
                F.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    function Cn(a) {
        var b = S(a.m, M.g.Ab)
          , c = S(a.m, M.g.zb);
        b && !c ? (a.eventName !== M.g.Z && a.eventName !== M.g.qc && L(131),
        a.isAborted = !0) : !b && c && (L(132),
        a.isAborted = !0)
    }
    function Dn(a) {
        var b = T(M.g.O) ? re.pscdl : "denied";
        b != null && (a.o[M.g.Wd] = b)
    }
    function En(a) {
        var b = nh(!0);
        a.o[M.g.yb] = b
    }
    ;function Ln(a, b, c, d) {
        var e = Lb(), f;
        if (e === 1)
            a: {
                var h = Ce;
                h = h.toLowerCase();
                for (var l = "https://" + h, m = "http://" + h, n = 1, p = H.getElementsByTagName("script"), q = 0; q < p.length && q < 100; q++) {
                    var r = p[q].src;
                    if (r) {
                        r = r.toLowerCase();
                        if (r.indexOf(m) === 0) {
                            f = 3;
                            break a
                        }
                        n === 1 && r.indexOf(l) === 0 && (n = 2)
                    }
                }
                f = n
            }
        else
            f = e;
        return (f === 2 || d || "http:" != F.location.protocol ? a : b) + c
    }
    ;function Yn(a) {
        return {
            getDestinationId: function() {
                return a.target.da
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.o[b]
            },
            setHitData: function(b, c) {
                a.o[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                a.o[b] === void 0 && (a.o[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return S(a.m, b)
            },
            Um: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.o)
            }
        }
    }
    ;function eo() {
        var a = F.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }
    function fo(a) {
        if (H.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top === b.bottom || b.left === b.right || !F.getComputedStyle)
            return !0;
        var c = F.getComputedStyle(a, null);
        if (c.visibility === "hidden")
            return !0;
        for (var d = a, e = c; d; ) {
            if (e.display === "none")
                return !0;
            var f = e.opacity
              , h = e.filter;
            if (h) {
                var l = h.indexOf("opacity(");
                l >= 0 && (h = h.substring(l + 8, h.indexOf(")", l)),
                h.charAt(h.length - 1) === "%" && (h = h.substring(0, h.length - 1)),
                f = String(Math.min(Number(h), Number(f))))
            }
            if (f !== void 0 && Number(f) <= 0)
                return !0;
            (d = d.parentElement) && (e = F.getComputedStyle(d, null))
        }
        return !1
    }
    var fp = Number('') || 5
      , gp = Number('') || 50
      , hp = $a();
    var mp = {
        Yj: Number('') || 500,
        Mj: Number('') || 5E3,
        Oh: Number('20') || 10,
        Vi: Number('') || 5E3
    };
    function np(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var op = function(a, b) {
        var c;
        return c
    };
    var pp = "https://" + qe.Nc + "/gtm/static/", qp;
    function vp(a, b) {}
    function wp(a, b, c, d) {}
    function xp(a, b, c, d) {}
    function yp(a, b, c, d) {}
    var zp = void 0;
    function Ap(a) {
        var b = [];
        return b
    }
    ;!ah("Android") || ch();
    ch();
    ah("Safari") && (ch() || (bh() ? 0 : ah("Coast")) || (bh() ? 0 : ah("Opera")) || (bh() ? 0 : ah("Edge")) || (bh() ? $g("Microsoft Edge") : ah("Edg/")) || bh() && $g("Opera"));
    var Bp = {}
      , Cp = null
      , Dp = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        var f = 4;
        f === void 0 && (f = 0);
        if (!Cp) {
            Cp = {};
            for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; m < 5; m++) {
                var n = h.concat(l[m].split(""));
                Bp[m] = n;
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    Cp[q] === void 0 && (Cp[q] = p)
                }
            }
        }
        for (var r = Bp[f], t = Array(Math.floor(b.length / 3)), v = r[64] || "", u = 0, w = 0; u < b.length - 2; u += 3) {
            var y = b[u]
              , x = b[u + 1]
              , B = b[u + 2]
              , z = r[y >> 2]
              , C = r[(y & 3) << 4 | x >> 4]
              , G = r[(x & 15) << 2 | B >> 6]
              , D = r[B & 63];
            t[w++] = "" + z + C + G + D
        }
        var E = 0
          , K = v;
        switch (b.length - u) {
        case 2:
            E = b[u + 1],
            K = r[(E & 15) << 2] || v;
        case 1:
            var J = b[u];
            t[w] = "" + r[J >> 2] + r[(J & 3) << 4 | E >> 4] + K + v
        }
        return t.join("")
    };
    var Ep = function() {};
    Object.freeze(new function() {}
    );
    Object.freeze(new Ep);
    Object.freeze(new Ep);
    var Fp = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function Gp() {
        var a;
        return (a = F.google_tag_data) != null ? a : F.google_tag_data = {}
    }
    function Hp() {
        var a = F.google_tag_data, b;
        if (a != null && a.uach) {
            var c = a.uach
              , d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else
            b = null;
        return b
    }
    function Ip() {
        var a, b;
        return (b = (a = F.google_tag_data) == null ? void 0 : a.uach_promise) != null ? b : null
    }
    function Jp() {
        var a, b;
        return typeof ((a = F.navigator) == null ? void 0 : (b = a.userAgentData) == null ? void 0 : b.getHighEntropyValues) === "function"
    }
    function Kp() {
        if (!Jp())
            return null;
        var a = Gp();
        if (a.uach_promise)
            return a.uach_promise;
        var b = F.navigator.userAgentData.getHighEntropyValues(Fp).then(function(c) {
            a.uach != null || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    }
    ;function Qp(a) {
        var b;
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    }
    ;var Rp = !1;
    function Sp() {
        if (Qp("join-ad-interest-group") && Wa(Bb.joinAdInterestGroup))
            return !0;
        Rp || (lh(''),
        Rp = !0);
        return Qp("join-ad-interest-group") && Wa(Bb.joinAdInterestGroup)
    }
    function Tp(a, b) {
        var c = bf[3] === void 0 ? 1 : bf[3]
          , d = 'iframe[data-tagging-id="' + b + '"]'
          , e = [];
        try {
            if (c === 1) {
                var f = H.querySelector(d);
                f && (e = [f])
            } else
                e = Array.from(H.querySelectorAll(d))
        } catch (q) {}
        var h;
        a: {
            try {
                h = H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]');
                break a
            } catch (q) {}
            h = void 0
        }
        var l = h, m = ((l == null ? void 0 : l.length) || 0) >= (bf[2] === void 0 ? 50 : bf[2]), n;
        if (n = e.length >= 1) {
            var p = Number(e[e.length - 1].dataset.loadTime);
            p !== void 0 && ib() - p < (bf[1] === void 0 ? 6E4 : bf[1]) ? (Sa("TAGGING", 9),
            n = !0) : n = !1
        }
        if (!n) {
            if (c === 1)
                if (e.length >= 1)
                    Up(e[0]);
                else {
                    if (m) {
                        Sa("TAGGING", 10);
                        return
                    }
                }
            else
                e.length >= c ? Up(e[0]) : m && Up(l[0]);
            Mb(a, void 0, {
                allow: "join-ad-interest-group"
            }, {
                taggingId: b,
                loadTime: ib()
            })
        }
    }
    function Up(a) {
        try {
            a.parentNode.removeChild(a)
        } catch (b) {}
    }
    function Vp() {
        return "https://td.doubleclick.net"
    }
    ;var Qq = {
        J: {
            vg: "ads_conversion_hit",
            Mc: "container_execute_start",
            zg: "container_setup_end",
            Ue: "container_setup_start",
            xg: "container_blocking_end",
            yg: "container_execute_end",
            Ag: "container_yield_end",
            Ve: "container_yield_start",
            Fh: "event_execute_end",
            Eh: "event_evaluation_end",
            xf: "event_evaluation_start",
            Gh: "event_setup_end",
            nd: "event_setup_start",
            Ih: "ga4_conversion_hit",
            pd: "page_load",
            Cm: "pageview",
            Gb: "snippet_load",
            di: "tag_callback_error",
            ei: "tag_callback_failure",
            fi: "tag_callback_success",
            gi: "tag_execute_end",
            Ec: "tag_execute_start"
        }
    };
    function Rq() {
        function a(c, d) {
            var e = Ta(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    }
    ;var Sq = !1;
    var cs = function(a, b) {}
      , ds = function(a, b) {}
      , es = function(a, b) {}
      , fs = function(a, b) {}
      , gs = function() {
        var a = {};
        return a
    }
      , Ur = function(a) {
        a = a === void 0 ? !0 : a;
        var b = {};
        return b
    }
      , hs = function() {}
      , is = function(a, b) {}
      , js = function(a, b, c) {};
    function ks(a, b) {
        var c, d = F.GooglebQhCsO;
        d || (d = {},
        F.GooglebQhCsO = d);
        c = d;
        if (c[a])
            return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    }
    ;var ls = function(a, b, c) {
        var d = gh(a, "fmt");
        if (b) {
            var e = gh(a, "random")
              , f = gh(a, "label") || "";
            if (!e)
                return !1;
            var h = Dp(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!ks(h, b))
                return !1
        }
        d && d != 4 && (a = ih(a, "rfmt", d));
        var l = ih(a, "fmt", 4);
        Kb(l, function() {
            F.google_noFurtherRedirects && b && b.call && (F.google_noFurtherRedirects = null,
            b())
        }, void 0, c, H.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    function Cs(a, b) {
        if (data.entities) {
            var c = data.entities[a];
            if (c)
                return c[b]
        }
    }
    ;function Ds(a) {
        var b = Uf(), c;
        c = c === void 0 ? !1 : c;
        Es().addRestriction(0, b, a, c)
    }
    function Fs(a) {
        var b = Uf(), c;
        c = c === void 0 ? !1 : c;
        Es().addRestriction(1, b, a, c)
    }
    function Gs() {
        var a = Uf();
        return Es().getRestrictions(1, a)
    }
    var Hs = function() {
        this.D = {};
        this.F = {}
    }
      , Is = function(a, b) {
        var c = a.D[b];
        c || (c = {
            _entity: {
                internal: [],
                external: []
            },
            _event: {
                internal: [],
                external: []
            }
        },
        a.D[b] = c);
        return c
    };
    Hs.prototype.addRestriction = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (!d || !this.F[b]) {
            var e = Is(this, b);
            a === 0 ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    }
    ;
    Hs.prototype.getRestrictions = function(a, b) {
        var c = Is(this, b);
        if (a === 0) {
            var d, e;
            return [].concat(oa((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), oa((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []))
        }
        if (a === 1) {
            var f, h;
            return [].concat(oa((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), oa((c == null ? void 0 : (h = c._event) == null ? void 0 : h.external) || []))
        }
        return []
    }
    ;
    Hs.prototype.getExternalRestrictions = function(a, b) {
        var c = Is(this, b), d, e;
        return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || []
    }
    ;
    Hs.prototype.removeExternalRestrictions = function(a) {
        var b = Is(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.F[a] = !0
    }
    ;
    function Es() {
        var a = re.r;
        a || (a = new Hs,
        re.r = a);
        return a
    }
    ;var Js = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , Ks = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        gaawc: ["googtag"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , Ls = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        gaawc: ["googtag"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , Ms = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    function Ns() {
        var a = Qe("gtm.allowlist") || Qe("gtm.whitelist");
        a && L(9);
        we && (a = ["google", "gtagfl", "lcl", "zone"]);
        Js.test(F.location && F.location.hostname) && (we ? L(116) : (L(117),
        Os && (a = [],
        window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var b = a && mb(fb(a), Ks)
          , c = Qe("gtm.blocklist") || Qe("gtm.blacklist");
        c || (c = Qe("tagTypeBlacklist")) && L(3);
        c ? L(8) : c = [];
        Js.test(F.location && F.location.hostname) && (c = fb(c),
        c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        fb(c).indexOf("google") >= 0 && L(2);
        var d = c && mb(fb(c), Ls)
          , e = {};
        return function(f) {
            var h = f && f[fc.na];
            if (!h || typeof h !== "string")
                return !0;
            h = h.replace(/^_*/, "");
            if (e[h] !== void 0)
                return e[h];
            var l = Ge[h] || []
              , m = !0;
            if (a) {
                var n;
                if (n = m)
                    a: {
                        if (b.indexOf(h) < 0)
                            if (l && l.length > 0)
                                for (var p = 0; p < l.length; p++) {
                                    if (b.indexOf(l[p]) < 0) {
                                        L(11);
                                        n = !1;
                                        break a
                                    }
                                }
                            else {
                                n = !1;
                                break a
                            }
                        n = !0
                    }
                m = n
            }
            var q = !1;
            if (c) {
                var r = d.indexOf(h) >= 0;
                if (r)
                    q = r;
                else {
                    var t = ab(d, l || []);
                    t && L(10);
                    q = t
                }
            }
            var v = !m || q;
            v || !(l.indexOf("sandboxedScripts") >= 0) || b && b.indexOf("sandboxedScripts") !== -1 || (v = ab(d, Ms));
            return e[h] = v
        }
    }
    var Os = !1;
    Os = !0;
    function Ps() {
        Lf && Ds(function(a) {
            var b = {};
            b[fc.na] = "__" + a.entityId;
            for (var c in void 0)
                (void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
            var d;
            if (Sc(b)) {
                var e = b[fc.na];
                if (!e)
                    throw Error("Error: No function name given for function call.");
                var f = Ic[e];
                d = !!f && !!f.runInSiloedMode
            } else
                d = !!Cs(b[fc.na], 4);
            return d
        })
    }
    var Rs = function(a, b, c, d) {
        if (!Qs()) {
            var e = d.siloed ? Pf(a) : a;
            if (!If().container[e]) {
                var f = "?id=" + encodeURIComponent(a) + "&l=" + qe.Ga
                  , h = a.indexOf("GTM-") === 0;
                h || (f += "&cx=c");
                Q(63) && (f += "&gtm=" + dk());
                var l = xf();
                l && (f += "&sign=" + qe.Fe);
                var m = c ? "/gtag/js" : "/gtm.js"
                  , n = Je.F || ye ? wf(b, m + f) : void 0;
                if (!n) {
                    var p = qe.Nc + m;
                    l && Eb && h ? (p = Eb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0],
                    n = Ln("https://", "http://", p + f)) : n = Je.F ? Ke() + m + f : Ln("https://", "http://", p + f)
                }
                d.siloed && dg({
                    ctid: e,
                    isDestination: !1
                });
                var q = Xf();
                If().container[e] = {
                    state: 1,
                    context: d,
                    parent: q
                };
                Hf({
                    ctid: e,
                    isDestination: !1
                });
                Kb(n)
            }
        }
    }
      , Ss = function(a, b, c) {
        if (!Qs()) {
            var d = c.siloed ? Pf(a) : a
              , e = If().destination[d];
            if (!e || !e.state)
                if (!c.siloed && eg())
                    If().destination[d] = {
                        state: 0,
                        transportUrl: b,
                        context: c,
                        parent: Xf()
                    },
                    Hf({
                        ctid: d,
                        isDestination: !0
                    }),
                    L(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + qe.Ga + "&cx=c";
                    Q(63) && (f += "&gtm=" + dk());
                    xf() && (f += "&sign=" + qe.Fe);
                    var h = Je.F || ye ? wf(b, f) : void 0;
                    h || (h = Je.F ? Ke() + f : Ln("https://", "http://", qe.Nc + f));
                    c.siloed && dg({
                        ctid: d,
                        isDestination: !0
                    });
                    If().destination[d] = {
                        state: 1,
                        context: c,
                        parent: Xf()
                    };
                    Hf({
                        ctid: d,
                        isDestination: !0
                    });
                    Kb(h)
                }
        }
    };
    function Qs() {
        if (bk()) {
            return !0
        }
        return !1
    }
    ;var Ts = !1
      , Us = 0
      , Vs = [];
    function Ws(a) {
        if (!Ts) {
            var b = H.createEventObject
              , c = H.readyState === "complete"
              , d = H.readyState === "interactive";
            if (!a || a.type !== "readystatechange" || c || !b && d) {
                Ts = !0;
                for (var e = 0; e < Vs.length; e++)
                    I(Vs[e])
            }
            Vs.push = function() {
                for (var f = ya.apply(0, arguments), h = 0; h < f.length; h++)
                    I(f[h]);
                return 0
            }
        }
    }
    function Xs() {
        if (!Ts && Us < 140) {
            Us++;
            try {
                var a, b;
                (b = (a = H.documentElement).doScroll) == null || b.call(a, "left");
                Ws()
            } catch (c) {
                F.setTimeout(Xs, 50)
            }
        }
    }
    function Ys(a) {
        Ts ? a() : Vs.push(a)
    }
    ;function Zs(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: Sf()
        }
    }
    ;var at = function(a, b) {
        this.D = !1;
        this.K = [];
        this.eventData = {
            tags: []
        };
        this.P = !1;
        this.F = this.H = 0;
        $s(this, a, b)
    }
      , bt = function(a, b, c, d) {
        if (te.hasOwnProperty(b) || b === "__zone")
            return -1;
        var e = {};
        Ka(d) && (e = g(d, e));
        e.id = c;
        e.status = "timeout";
        return a.eventData.tags.push(e) - 1
    }
      , ct = function(a, b, c, d) {
        var e = a.eventData.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , dt = function(a) {
        if (!a.D) {
            for (var b = a.K, c = 0; c < b.length; c++)
                b[c]();
            a.D = !0;
            a.K.length = 0
        }
    }
      , $s = function(a, b, c) {
        b !== void 0 && et(a, b);
        c && F.setTimeout(function() {
            dt(a)
        }, Number(c))
    }
      , et = function(a, b) {
        var c = kb(function() {
            I(function() {
                b(Sf(), a.eventData)
            })
        });
        a.D ? c() : a.K.push(c)
    }
      , ft = function(a) {
        a.H++;
        return kb(function() {
            a.F++;
            a.P && a.F >= a.H && dt(a)
        })
    }
      , gt = function(a) {
        a.P = !0;
        a.F >= a.H && dt(a)
    };
    var ht = {}
      , jt = function() {
        return F[it()]
    };
    function it() {
        return F.GoogleAnalyticsObject || "ga"
    }
    var mt = function() {
        var a = Sf();
    }
      , nt = function(a, b) {
        return function() {
            var c = jt()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var h = f.get("hitPayload")
                      , l = f.get("hitCallback")
                      , m = h.indexOf("&tid=" + b) < 0;
                    m && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", h, !0),
                    f.set("hitCallback", l, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    var st = ["es", "1"]
      , tt = {}
      , ut = {};
    function vt(a, b) {
        if (Ff) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            tt[a] = [["e", c], ["eid", a]];
            Ag(a)
        }
    }
    function wt(a) {
        var b = a.eventId
          , c = a.Oa;
        if (!tt[b])
            return [];
        var d = [];
        ut[b] || d.push(st);
        d.push.apply(d, oa(tt[b]));
        c && (ut[b] = !0);
        return d
    }
    ;var xt = {}
      , zt = {}
      , At = {};
    function Bt(a, b, c, d) {
        Ff && Q(73) && ((d === void 0 ? 0 : d) ? (At[b] = At[b] || 0,
        ++At[b]) : c !== void 0 ? (zt[a] = zt[a] || {},
        zt[a][b] = Math.round(c)) : (xt[a] = xt[a] || {},
        xt[a][b] = (xt[a][b] || 0) + 1))
    }
    function Ct(a) {
        var b = a.eventId, c = a.Oa, d = xt[b] || {}, e = [], f;
        for (f in d)
            d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete xt[b];
        return e.length ? [["md", e.join(".")]] : []
    }
    function Dt(a) {
        var b = a.eventId, c = a.Oa, d = zt[b] || {}, e = [], f;
        for (f in d)
            d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete zt[b];
        return e.length ? [["mtd", e.join(".")]] : []
    }
    function Et() {
        for (var a = [], b = ma(Object.keys(At)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + At[d])
        }
        return a.length ? [["mec", a.join(".")]] : []
    }
    ;var Ft = {}
      , Gt = {};
    function Ht(a, b, c) {
        if (Ff && b) {
            var d = Af(b);
            Ft[a] = Ft[a] || [];
            Ft[a].push(c + d);
            var e = (Sc(b) ? "1" : "2") + d;
            Gt[a] = Gt[a] || [];
            Gt[a].push(e);
            Ag(a)
        }
    }
    function It(a) {
        var b = a.eventId
          , c = a.Oa
          , d = []
          , e = Ft[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = Gt[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete Ft[b],
        delete Gt[b]);
        return d
    }
    ;function Jt(a, b, c, d) {
        var e = Fc[a]
          , f = Kt(a, b, c, d);
        if (!f)
            return null;
        var h = Tc(e[fc.Zh], c, []);
        if (h && h.length) {
            var l = h[0];
            f = Jt(l.index, {
                onSuccess: f,
                onFailure: l.ri === 1 ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function Kt(a, b, c, d) {
        function e() {
            if (f[fc.Qj])
                l();
            else {
                var w = Rc(f, c, [])
                  , y = w[fc.Ti];
                if (y != null)
                    for (var x = 0; x < y.length; x++)
                        if (!T(y[x])) {
                            l();
                            return
                        }
                var B = bt(c.Tb, String(f[fc.na]), Number(f[fc.ud]), w[fc.Rj])
                  , z = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!z) {
                        z = !0;
                        var D = ib() - G;
                        Ht(c.id, Fc[a], "5");
                        ct(c.Tb, B, "success", D);
                        Q(64) && js(c, f, Qq.J.fi);
                        h()
                    }
                }
                ;
                w.vtp_gtmOnFailure = function() {
                    if (!z) {
                        z = !0;
                        var D = ib() - G;
                        Ht(c.id, Fc[a], "6");
                        ct(c.Tb, B, "failure", D);
                        Q(64) && js(c, f, Qq.J.ei);
                        l()
                    }
                }
                ;
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Ht(c.id, f, "1");
                var C = function() {
                    Ah(3);
                    var D = ib() - G;
                    Ht(c.id, f, "7");
                    ct(c.Tb, B, "exception", D);
                    Q(64) && js(c, f, Qq.J.di);
                    z || (z = !0,
                    l())
                };
                Q(64) && is(c, f);
                var G = ib();
                try {
                    Uc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    C(D)
                }
                Q(64) && js(c, f, Qq.J.gi)
            }
        }
        var f = Fc[a]
          , h = b.onSuccess
          , l = b.onFailure
          , m = b.terminate;
        if (c.isBlocked(f))
            return null;
        var n = Tc(f[fc.hi], c, []);
        if (n && n.length) {
            var p = n[0]
              , q = Jt(p.index, {
                onSuccess: h,
                onFailure: l,
                terminate: m
            }, c, d);
            if (!q)
                return null;
            h = q;
            l = p.ri === 2 ? m : q
        }
        if (f[fc.Rh] || f[fc.Tj]) {
            var r = f[fc.Rh] ? Hc : c.Rl
              , t = h
              , v = l;
            if (!r[a]) {
                e = kb(e);
                var u = Lt(a, r, e);
                h = u.onSuccess;
                l = u.onFailure
            }
            return function() {
                r[a](t, v)
            }
        }
        return e
    }
    function Lt(a, b, c) {
        var d = []
          , e = [];
        b[a] = Mt(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Nt;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            onFailure: function() {
                b[a] = Ot;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function Mt(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function Nt(a) {
        a()
    }
    function Ot(a, b) {
        b()
    }
    ;var Rt = function(a, b) {
        for (var c = [], d = 0; d < Fc.length; d++)
            if (a[d]) {
                var e = Fc[d];
                var f = ft(b.Tb);
                try {
                    var h = Jt(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (h) {
                        var l = e[fc.na];
                        if (!l)
                            throw Error("Error: No function name given for function call.");
                        var m = Ic[l];
                        c.push({
                            Li: d,
                            Ei: (m ? m.priorityOverride || 0 : 0) || Cs(e[fc.na], 1) || 0,
                            execute: h
                        })
                    } else
                        Pt(d, b),
                        f()
                } catch (p) {
                    f()
                }
            }
        c.sort(Qt);
        for (var n = 0; n < c.length; n++)
            c[n].execute();
        return c.length > 0
    };
    function Qt(a, b) {
        var c, d = b.Ei, e = a.Ei;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (c !== 0)
            f = c;
        else {
            var h = a.Li
              , l = b.Li;
            f = h > l ? 1 : h < l ? -1 : 0
        }
        return f
    }
    function Pt(a, b) {
        if (Ff) {
            var c = function(d) {
                var e = b.isBlocked(Fc[d]) ? "3" : "4"
                  , f = Tc(Fc[d][fc.Zh], b, []);
                f && f.length && c(f[0].index);
                Ht(b.id, Fc[d], e);
                var h = Tc(Fc[d][fc.hi], b, []);
                h && h.length && c(h[0].index)
            };
            c(a)
        }
    }
    var Ut = !1, St;
    var Zt = function(a) {
        var b = a["gtm.uniqueEventId"]
          , c = a["gtm.priorityId"]
          , d = a.event;
        if (Q(64)) {}
        if (d === "gtm.js") {
            if (Ut)
                return !1;
            Ut = !0
        }
        var e = !1
          , f = Gs()
          , h = g(a);
        if (!f.every(function(t) {
            return t({
                originalEventData: h
            })
        })) {
            if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
                return !1;
            e = !0
        }
        vt(b, d);
        var l = a.eventCallback
          , m = a.eventTimeout
          , n = {
            id: b,
            priorityId: c,
            name: d,
            isBlocked: Vt(h, e),
            Rl: [],
            logMacroError: function() {
                L(6);
                Ah(0)
            },
            cachedModelValues: Wt(),
            Tb: new at(function() {
                if (Q(64)) {}
                l && l.apply(l, [].slice.call(arguments, 0))
            }
            ,m),
            originalEventData: h
        };
        Q(73) && Ff && (n.reportMacroDiscrepancy = Bt);
        Q(64) && es(n.id, n.name);
        var p = Xc(n);
        Q(64) && fs(n.id, n.name);
        e && (p = Xt(p));
        if (Q(64)) {}
        var q = Rt(p, n)
          , r = !1;
        gt(n.Tb);
        d !== "gtm.js" && d !== "gtm.sync" || mt();
        return Yt(p, q) || r
    };
    function Wt() {
        var a = {};
        a.event = We("event", 1);
        a.ecommerce = We("ecommerce", 1);
        a.gtm = We("gtm");
        a.eventModel = We("eventModel");
        return a
    }
    function Vt(a, b) {
        var c = Ns();
        return function(d) {
            if (c(d))
                return !0;
            var e = d && d[fc.na];
            if (!e || typeof e != "string")
                return !0;
            e = e.replace(/^_*/, "");
            var f, h = Uf();
            f = Es().getRestrictions(0, h);
            var l = a;
            b && (l = g(a),
            l["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var m = Ge[e] || [], n = ma(f), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                try {
                    if (!q({
                        entityId: e,
                        securityGroups: m,
                        originalEventData: l
                    }))
                        return !0
                } catch (r) {
                    return !0
                }
            }
            return !1
        }
    }
    function Xt(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Fc[c][fc.na]);
                if (se[d] || Fc[c][fc.Uj] !== void 0 || Cs(d, 2))
                    b[c] = !0
            }
        return b
    }
    function Yt(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Fc[c] && !te[String(Fc[c][fc.na])])
                return !0;
        return !1
    }
    var $t = 0;
    function au() {
        $t === 1 && zg()
    }
    var bu = function(a) {
        if (!a.oi || $t !== 1)
            return [];
        a.fc();
        var b = th();
        b.push(["mcc", "1"]);
        $t = 3;
        return b
    };
    function cu(a, b) {
        return arguments.length === 1 ? du("config", a) : du("config", a, b)
    }
    function eu(a, b, c) {
        c = c || {};
        c[M.g.Qb] = a;
        return du("event", b, c)
    }
    function du() {
        return arguments
    }
    ;var fu = function() {
        this.messages = [];
        this.D = []
    };
    fu.prototype.enqueue = function(a, b, c) {
        var d = this.messages.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        var e = Object.assign({}, c, {
            eventId: b,
            priorityId: d,
            fromContainerExecution: !0
        })
          , f = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: e
        };
        this.messages.push(f);
        for (var h = 0; h < this.D.length; h++)
            try {
                this.D[h](f)
            } catch (l) {}
    }
    ;
    fu.prototype.listen = function(a) {
        this.D.push(a)
    }
    ;
    fu.prototype.get = function() {
        for (var a = {}, b = 0; b < this.messages.length; b++) {
            var c = this.messages[b]
              , d = a[c.notBeforeEventId];
            d || (d = [],
            a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    }
    ;
    fu.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
            var e = this.messages[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.messages = c;
        return b
    }
    ;
    function gu(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata.source_canonical_id = Mf.canonicalContainerId;
        hu().enqueue(a, b, c)
    }
    function iu() {
        var a = ju;
        hu().listen(a)
    }
    function hu() {
        var a = re.mb;
        a || (a = new fu,
        re.mb = a);
        return a
    }
    ;var ku = {}
      , lu = {};
    function mu(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
            kg: void 0,
            Tf: void 0
        },
        f++) {
            var h = a[f];
            if (h.indexOf("-") >= 0) {
                if (e.kg = si(h, b),
                e.kg) {
                    var l = Qf();
                    Za(l, function(r) {
                        return function(t) {
                            return r.kg.da === t
                        }
                    }(e)) ? c.push(h) : d.push(h)
                }
            } else {
                var m = ku[h] || [];
                e.Tf = {};
                m.forEach(function(r) {
                    return function(t) {
                        r.Tf[t] = !0
                    }
                }(e));
                for (var n = Nf(), p = 0; p < n.length; p++)
                    if (e.Tf[n[p]]) {
                        c = c.concat(Qf());
                        break
                    }
                var q = lu[h] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            ml: c,
            ol: d
        }
    }
    function nu(a) {
        A(ku, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }
    function ou(a) {
        A(lu, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }
    var pu = "HA GF G UA AW DC MC".split(" ")
      , qu = !1
      , ru = !1
      , su = !1
      , tu = !1;
    function uu(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: He()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var vu = void 0
      , wu = void 0;
    function xu(a, b, c) {
        var d = g(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return b[f] !== void 0
        }) && L(136);
        var e = g(b);
        g(c, e);
        gu(cu(Nf()[0], e), a.eventId, d)
    }
    function yu(a) {
        for (var b = ma([M.g.Bc, M.g.Eb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value
              , e = a && a[d] || fj.F[d];
            if (e)
                return e
        }
    }
    var zu = [M.g.Bc, M.g.Eb, M.g.wc, M.g.ib, M.g.qb, M.g.za, M.g.ra, M.g.La, M.g.Ra, M.g.wb]
      , Au = {
        config: function(a, b) {
            var c = uu(a, b);
            if (!(a.length < 2) && k(a[1])) {
                var d = {};
                if (a.length > 2) {
                    if (a[2] != void 0 && !Ka(a[2]) || a.length > 3)
                        return;
                    d = a[2]
                }
                var e = si(a[1], b.isGtmEvent);
                if (e) {
                    var f, h, l;
                    a: {
                        if (!Kf.od) {
                            var m = Wf(Xf());
                            if (gg(m)) {
                                var n = m.parent
                                  , p = n.isDestination;
                                l = {
                                    vl: Wf(n),
                                    kl: p
                                };
                                break a
                            }
                        }
                        l = void 0
                    }
                    var q = l;
                    q && (f = q.vl,
                    h = q.kl);
                    vt(c.eventId, "gtag.config");
                    var r = e.da
                      , t = e.id !== r;
                    if (t ? Qf().indexOf(r) === -1 : Nf().indexOf(r) === -1) {
                        if (!b.inheritParentConfig && !d[M.g.Ab]) {
                            var v = yu(d);
                            if (t)
                                Ss(r, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                            else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                                var u = d;
                                vu ? xu(b, u, vu) : wu || (wu = g(u))
                            } else
                                Rs(r, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                        }
                    } else {
                        if (f && (L(128),
                        h && L(130),
                        b.inheritParentConfig)) {
                            var w = d;
                            wu ? xu(b, wu, w) : !w[M.g.Rb] && ve && vu || (vu = g(w));
                            return
                        }
                        var y = d;
                        if (!su && (su = !0,
                        ru))
                            for (var x = ma(zu), B = x.next(); !B.done; B = x.next())
                                if (y.hasOwnProperty(B.value)) {
                                    yh("erc");
                                    break
                                }
                        Gf && !Lf && ($t === 1 && Pb(F, "pagehide", au),
                        $t = 2);
                        if (ve && !t && !d[M.g.Rb]) {
                            var z = tu;
                            tu = !0;
                            if (z)
                                return
                        }
                        qu || L(43);
                        if (!b.noTargetGroup)
                            if (t) {
                                ou(e.id);
                                var C = e.id
                                  , G = d[M.g.ie] || "default";
                                G = String(G).split(",");
                                for (var D = 0; D < G.length; D++) {
                                    var E = lu[G[D]] || [];
                                    lu[G[D]] = E;
                                    E.indexOf(C) < 0 && E.push(C)
                                }
                            } else {
                                nu(e.id);
                                var K = e.id
                                  , J = d[M.g.ie] || "default";
                                J = J.toString().split(",");
                                for (var N = 0; N < J.length; N++) {
                                    var R = ku[J[N]] || [];
                                    ku[J[N]] = R;
                                    R.indexOf(K) < 0 && R.push(K)
                                }
                            }
                        delete d[M.g.ie];
                        var aa = b.eventMetadata || {};
                        aa.hasOwnProperty("is_external_event") || (aa.is_external_event = !b.fromContainerExecution);
                        b.eventMetadata = aa;
                        delete d[M.g.ed];
                        for (var W = t ? [e.id] : Qf(), O = 0; O < W.length; O++) {
                            var ha = d
                              , ea = W[O]
                              , ca = g(b)
                              , da = si(ea, ca.isGtmEvent);
                            da && fj.push("config", [ha], da, ca)
                        }
                    }
                }
            }
        },
        consent: function(a, b) {
            if (a.length === 3) {
                L(39);
                var c = uu(a, b)
                  , d = a[1]
                  , e = a[2];
                b.fromContainerExecution || (e[M.g.N] && L(139),
                e[M.g.oa] && L(140));
                d === "default" ? ii(e) : d === "update" ? ji(e, c) : d === "declare" && b.fromContainerExecution && hi(e)
            }
        },
        event: function(a, b) {
            var c = a[1];
            if (!(a.length < 2) && k(c)) {
                var d;
                if (a.length > 2) {
                    if (!Ka(a[2]) && a[2] != void 0 || a.length > 3)
                        return;
                    d = a[2]
                }
                var e = d
                  , f = {}
                  , h = (f.event = c,
                f);
                e && (h.eventModel = g(e),
                e[M.g.ed] && (h.eventCallback = e[M.g.ed]),
                e[M.g.ee] && (h.eventTimeout = e[M.g.ee]));
                var l = uu(a, b)
                  , m = l.eventId
                  , n = l.priorityId;
                h["gtm.uniqueEventId"] = m;
                n && (h["gtm.priorityId"] = n);
                if (c === "optimize.callback")
                    return h.eventModel = h.eventModel || {},
                    h;
                var p;
                var q = d
                  , r = q && q[M.g.Qb];
                r === void 0 && (r = Qe(M.g.Qb, 2),
                r === void 0 && (r = "default"));
                if (k(r) || Array.isArray(r)) {
                    var t;
                    t = b.isGtmEvent ? k(r) ? [r] : r : r.toString().replace(/\s+/g, "").split(",");
                    var v = mu(t, b.isGtmEvent)
                      , u = v.ml
                      , w = v.ol;
                    if (w.length)
                        for (var y = yu(q), x = 0; x < w.length; x++) {
                            var B = si(w[x], b.isGtmEvent);
                            B && Ss(B.da, y, {
                                source: 3,
                                fromContainerExecution: b.fromContainerExecution
                            })
                        }
                    p = ti(u, b.isGtmEvent)
                } else
                    p = void 0;
                var z = p;
                if (z) {
                    var C;
                    !z.length || ((C = b.eventMetadata) == null ? 0 : C.em_event) || (ru = !0);
                    vt(m, c);
                    for (var G = [], D = 0; D < z.length; D++) {
                        var E = z[D]
                          , K = g(b);
                        if (pu.indexOf(Zf(E.prefix)) !== -1) {
                            var J = g(d)
                              , N = K.eventMetadata || {};
                            N.hasOwnProperty("is_external_event") || (N.is_external_event = !K.fromContainerExecution);
                            K.eventMetadata = N;
                            delete J[M.g.ed];
                            ej(c, J, E.id, K);
                            Gf && !Lf && $t === 0 && (Ob(F, "pagehide", au),
                            $t = 1)
                        }
                        G.push(E.id)
                    }
                    h.eventModel = h.eventModel || {};
                    z.length > 0 ? h.eventModel[M.g.Qb] = G.join() : delete h.eventModel[M.g.Qb];
                    qu || L(43);
                    b.noGtmEvent === void 0 && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                    h.eventModel[M.g.zb] && (b.noGtmEvent = !0);
                    return b.noGtmEvent ? void 0 : h
                }
            }
        },
        get: function(a, b) {
            L(53);
            if (a.length === 4 && k(a[1]) && k(a[2]) && Wa(a[3])) {
                var c = si(a[1], b.isGtmEvent)
                  , d = String(a[2])
                  , e = a[3];
                if (c) {
                    qu || L(43);
                    var f = yu();
                    if (!Za(Qf(), function(l) {
                        return c.da === l
                    }))
                        Ss(c.da, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                    else if (pu.indexOf(Zf(c.prefix)) !== -1) {
                        uu(a, b);
                        var h = {};
                        g((h[M.g.nb] = d,
                        h[M.g.xb] = e,
                        h));
                        gj(d, function(l) {
                            I(function() {
                                return e(l)
                            })
                        }, c.id, b)
                    }
                }
            }
        },
        js: function(a, b) {
            if (a.length == 2 && a[1].getTime) {
                qu = !0;
                var c = uu(a, b)
                  , d = c.eventId
                  , e = c.priorityId
                  , f = {};
                return f.event = "gtm.js",
                f["gtm.start"] = a[1].getTime(),
                f["gtm.uniqueEventId"] = d,
                f["gtm.priorityId"] = e,
                f
            }
        },
        policy: function() {},
        set: function(a, b) {
            var c;
            a.length == 2 && Ka(a[1]) ? c = g(a[1]) : a.length == 3 && k(a[1]) && (c = {},
            Ka(a[2]) || Array.isArray(a[2]) ? c[a[1]] = g(a[2]) : c[a[1]] = a[2]);
            if (c) {
                var d = uu(a, b)
                  , e = d.eventId
                  , f = d.priorityId;
                g(c);
                var h = g(c);
                fj.push("set", [h], void 0, b);
                c["gtm.uniqueEventId"] = e;
                f && (c["gtm.priorityId"] = f);
                delete c.event;
                b.overwriteModelFields = !0;
                return c
            }
        }
    }
      , Bu = {
        policy: !0
    };
    var Du = function(a) {
        if (Cu(a))
            return a;
        this.value = a
    };
    Du.prototype.getUntrustedMessageValue = function() {
        return this.value
    }
    ;
    var Cu = function(a) {
        return !a || Ia(a) !== "object" || Ka(a) ? !1 : "getUntrustedMessageValue"in a
    };
    Du.prototype.getUntrustedMessageValue = Du.prototype.getUntrustedMessageValue;
    var Eu = !1
      , Fu = [];
    function Gu() {
        if (!Eu) {
            Eu = !0;
            for (var a = 0; a < Fu.length; a++)
                I(Fu[a])
        }
    }
    function Hu(a) {
        Eu ? I(a) : Fu.push(a)
    }
    ;var Iu = 0
      , Ju = {}
      , Ku = []
      , Lu = []
      , Mu = !1
      , Nu = !1;
    function Ou(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Pu = function(a, b) {
        if (!Xa(b) || b < 0)
            b = 0;
        var c = re[qe.Ga]
          , d = 0
          , e = !1
          , f = void 0;
        f = F.setTimeout(function() {
            e || (e = !0,
            a());
            f = void 0
        }, b);
        return function() {
            var h = c ? c.subscribers : 1;
            ++d === h && (f && (F.clearTimeout(f),
            f = void 0),
            e || (a(),
            e = !0))
        }
    };
    function Qu(a, b) {
        var c = a._clear || b.overwriteModelFields;
        A(a, function(e, f) {
            e !== "_clear" && (c && Ve(e),
            Ve(e, f))
        });
        De || (De = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        typeof d !== "number" && (d = He(),
        a["gtm.uniqueEventId"] = d,
        Ve("gtm.uniqueEventId", d));
        return Zt(a)
    }
    function Ru(a) {
        if (a == null || typeof a !== "object")
            return !1;
        if (a.event)
            return !0;
        if (cb(a)) {
            var b = a[0];
            if (b === "config" || b === "event" || b === "js" || b === "get")
                return !0
        }
        return !1
    }
    function Su() {
        var a;
        if (Lu.length)
            a = Lu.shift();
        else if (Ku.length)
            a = Ku.shift();
        else
            return;
        var b;
        var c = a;
        if (Mu || !Ru(c.message))
            b = c;
        else {
            Mu = !0;
            var d = c.message["gtm.uniqueEventId"];
            typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = He());
            var e = {}
              , f = {
                message: (e.event = "gtm.init_consent",
                e["gtm.uniqueEventId"] = d - 2,
                e),
                messageContext: {
                    eventId: d - 2
                }
            }
              , h = {}
              , l = {
                message: (h.event = "gtm.init",
                h["gtm.uniqueEventId"] = d - 1,
                h),
                messageContext: {
                    eventId: d - 1
                }
            };
            Ku.unshift(l, c);
            if (Gf) {
                var m = Mf.ctid;
                if (m) {
                    var n, p = Wf(Xf());
                    n = p && p.context;
                    var q = nh(!0)
                      , r = Mf.canonicalContainerId
                      , t = sh()
                      , v = n && n.fromContainerExecution
                      , u = Kf.od
                      , w = n && n.source;
                    oh || (oh = t);
                    qh.push(m + ";" + r + ";" + (v ? 1 : 0) + ";" + (w || 0) + ";" + (u ? 1 : 0));
                    ph = q;
                    Lg()
                }
            }
            b = f
        }
        return b
    }
    function Tu() {
        for (var a = !1, b; !Nu && (b = Su()); ) {
            Nu = !0;
            delete Ne.eventModel;
            Pe();
            var c = b
              , d = c.message
              , e = c.messageContext;
            if (d == null)
                Nu = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
                        var l = f[h]
                          , m = Qe(l, 1);
                        if (Array.isArray(m) || Ka(m))
                            m = g(m);
                        Oe[l] = m
                    }
                try {
                    if (Wa(d))
                        try {
                            d.call(Te)
                        } catch (B) {}
                    else if (Array.isArray(d)) {
                        var n = d;
                        if (k(n[0])) {
                            var p = n[0].split(".")
                              , q = p.pop()
                              , r = n.slice(1)
                              , t = Qe(p.join("."), 2);
                            if (t != null)
                                try {
                                    t[q].apply(t, r)
                                } catch (B) {}
                        }
                    } else {
                        var v = void 0;
                        if (cb(d))
                            a: {
                                if (d.length && k(d[0])) {
                                    var u = Au[d[0]];
                                    if (u && (!e.fromContainerExecution || !Bu[d[0]])) {
                                        v = u(d, e);
                                        break a
                                    }
                                }
                                v = void 0
                            }
                        else
                            v = d;
                        v && (a = Qu(v, e) || a)
                    }
                } finally {
                    e.fromContainerExecution && Pe(!0);
                    var w = d["gtm.uniqueEventId"];
                    if (typeof w === "number") {
                        for (var y = Ju[String(w)] || [], x = 0; x < y.length; x++)
                            Lu.push(Uu(y[x]));
                        y.length && Lu.sort(Ou);
                        delete Ju[String(w)];
                        w > Iu && (Iu = w)
                    }
                    Nu = !1
                }
            }
        }
        return !a
    }
    function Vu() {
        if (Q(64)) {
            var a = Wu();
        }
        var b = Tu();
        if (Q(64)) {}
        try {
            var c = Sf()
              , d = F[qe.Ga].hide;
            if (d && d[c] !== void 0 && d.end) {
                d[c] = !1;
                var e = !0, f;
                for (f in d)
                    if (d.hasOwnProperty(f) && d[f] === !0) {
                        e = !1;
                        break
                    }
                e && (d.end(),
                d.end = null)
            }
        } catch (h) {}
        return b
    }
    function ju(a) {
        if (Iu < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Ju[b] = Ju[b] || [];
            Ju[b].push(a)
        } else
            Lu.push(Uu(a)),
            Lu.sort(Ou),
            I(function() {
                Nu || Tu()
            })
    }
    function Uu(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Xu = function() {
        function a(f) {
            var h = {};
            if (Cu(f)) {
                var l = f;
                f = Cu(l) ? l.getUntrustedMessageValue() : void 0;
                h.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: h
            }
        }
        var b = Fb(qe.Ga, [])
          , c = re[qe.Ga] = re[qe.Ga] || {};
        c.pruned === !0 && L(83);
        Ju = hu().get();
        iu();
        Ys(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom",
                f))
            }
        });
        Hu(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load",
                f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (re.SANDBOXED_JS_SEMAPHORE > 0) {
                f = [];
                for (var h = 0; h < arguments.length; h++)
                    f[h] = new Du(arguments[h])
            } else
                f = [].slice.call(arguments, 0);
            var l = f.map(function(q) {
                return a(q)
            });
            Ku.push.apply(Ku, l);
            var m = d.apply(b, f)
              , n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (L(4),
                c.pruned = !0; this.length > n; )
                    this.shift();
            var p = typeof m !== "boolean" || m;
            return Tu() && p
        }
        ;
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        Ku.push.apply(Ku, e);
        if (Wu()) {
            if (Q(64)) {}
            I(Vu)
        }
    }
      , Wu = function() {
        var a = !0;
        return a
    };
    function Yu(a) {
        if (a == null || a.length === 0)
            return !1;
        var b = Number(a)
          , c = ib();
        return b < c + 3E5 && b > c - 9E5
    }
    ;var Zu = !1;
    function $u() {
        var a = Vf();
        if (a) {
            var b;
            return a.canonicalContainerId || "_" + (a.scriptContainerId || ((b = a.destinations) == null ? void 0 : b[0]))
        }
    }
    var av = function(a) {
        if (Zu)
            return [];
        var b = []
          , c = $u();
        c && b.push(["pcid", c]);
        a.Oa && (Zu = !0,
        b.length && a.fc());
        return b
    };
    var bv = /gtag[.\/]js/
      , cv = /gtm[.\/]js/;
    function dv(a) {
        if (a.scriptSource) {
            var b;
            try {
                var c;
                b = (c = $b()) == null ? void 0 : c.getEntriesByType("resource")
            } catch (l) {}
            if (b) {
                for (var d = {}, e = 0; e < b.length; ++e) {
                    var f = b[e]
                      , h = f.initiatorType;
                    if (h === "script" && f.name === a.scriptSource)
                        return {
                            Jl: e,
                            Kl: d
                        };
                    d[h] = 1 + (d[h] || 0)
                }
                L(146)
            } else
                L(145)
        }
    }
    function ev() {
        if (Gf) {
            var a = Yf();
            if (!a)
                L(144);
            else if (a.canonicalContainerId) {
                var b = dv(a);
                if (b) {
                    var c = !1;
                    mg.push(function(d) {
                        if (c)
                            return [];
                        d.Oa && (c = !0);
                        d.fc();
                        var e = [["rtg", String(a.canonicalContainerId)], ["rlo", String(b.Jl)], ["slo", String(b.Kl.script || "0")]];
                        if (Q(68)) {
                            var f = e.push, h;
                            a: {
                                var l = a.scriptSource;
                                if (l) {
                                    if (bv.test(l)) {
                                        h = "3";
                                        break a
                                    }
                                    if (cv.test(l)) {
                                        h = "2";
                                        break a
                                    }
                                }
                                h = "0"
                            }
                            f.call(e, ["lst", h])
                        }
                        return e
                    })
                }
            }
        }
    }
    ;var zv = function() {};
    var Av = function() {};
    Av.prototype.toString = function() {
        return "undefined"
    }
    ;
    var Bv = new Av;
    function Iv(a, b) {
        function c(h) {
            var l = sf(h)
              , m = of(l, "protocol")
              , n = of(l, "host", !0)
              , p = of(l, "port")
              , q = of(l, "path").toLowerCase().replace(/\/$/, "");
            if (m === void 0 || m === "http" && p === "80" || m === "https" && p === "443")
                m = "web",
                p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function Jv(a) {
        return Kv(a) ? 1 : 0
    }
    function Kv(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = g(a, {});
                g({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Jv(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return String(b).indexOf(String(c)) >= 0;
        case "_css":
            var f;
            a: {
                if (b)
                    try {
                        for (var h = 0; h < nd.length; h++) {
                            var l = nd[h];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (u) {}
                f = !1
            }
            return f;
        case "_ew":
            var m, n;
            m = String(b);
            n = String(c);
            var p = m.length - n.length;
            return p >= 0 && m.indexOf(n, p) === p;
        case "_eq":
            return String(b) === String(c);
        case "_ge":
            return Number(b) >= Number(c);
        case "_gt":
            return Number(b) > Number(c);
        case "_lc":
            return String(b).split(",").indexOf(String(c)) >= 0;
        case "_le":
            return Number(b) <= Number(c);
        case "_lt":
            return Number(b) < Number(c);
        case "_re":
            var q;
            a: {
                var r = a.ignore_case ? "i" : void 0;
                try {
                    var t = String(c) + r
                      , v = od.get(t);
                    v || (v = new RegExp(c,r),
                    od.set(t, v));
                    q = v.test(b);
                    break a
                } catch (u) {
                    q = !1;
                    break a
                }
            }
            return q;
        case "_sw":
            return String(b).indexOf(String(c)) === 0;
        case "_um":
            return Iv(b, c)
        }
        return !1
    }
    ;function Lv() {
        var a;
        a = a === void 0 ? "" : a;
        var b, c;
        return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)) ? String(data.blob[1]) : a
    }
    ;function Mv() {
        var a = [["cv", Q(83) ? Lv() : "1"], ["rv", qe.Bf], ["tc", Fc.filter(function(b) {
            return b
        }).length]];
        qe.rd && a.push(["x", qe.rd]);
        Je.D && a.push(["tag_exp", Je.D]);
        return a
    }
    ;function Nv() {
        var a = Bh["0"] || "";
        return a.length ? [["exp_geo", a]] : []
    }
    var Ov;
    function Pv() {
        try {
            Ov != null || (Ov = (new Intl.DateTimeFormat).resolvedOptions().timeZone)
        } catch (b) {}
        var a;
        return ((a = Ov) == null ? 0 : a.length) ? [["exp_tz", Ov]] : []
    }
    ;function cw(a) {
        var b = re.zones;
        return b ? b.getIsAllowedFn(Nf(), a) : function() {
            return !0
        }
    }
    function dw() {
        Fs(function(a) {
            var b = a.originalEventData["gtm.uniqueEventId"]
              , c = re.zones;
            return c ? c.isActive(Nf(), b) : !0
        });
        Ds(function(a) {
            var b, c;
            b = a.entityId;
            c = a.securityGroups;
            return cw(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
        })
    }
    ;var Qw = function() {
        var a = !0;
        Lj(7) && Lj(9) && Lj(10) || (a = !1);
        return a
    };
    Eh();
    function Rx() {
        return F.gaGlobal = F.gaGlobal || {}
    }
    var Sx = function() {
        var a = Rx();
        a.hid = a.hid || $a();
        return a.hid
    }
      , Tx = function(a, b) {
        var c = Rx();
        if (c.vid == void 0 || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var Ay = function(a) {
        this.F = a;
        this.H = "";
        this.D = this.F
    }
      , By = function(a, b) {
        a.D = b;
        return a
    }
      , Cy = function(a, b) {
        a.K = b;
        return a
    };
    function Dy(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }
    function Ey(a, b, c) {
        if (a) {
            var d = a || [];
            if (Array.isArray(d))
                for (var e = Ka(b) ? b : {}, f = ma(d), h = f.next(); !h.done; h = f.next())
                    c(h.value, e)
        }
    }
    ;var Uy = window
      , Vy = document
      , Wy = function(a) {
        var b = Uy._gaUserPrefs;
        if (b && b.ioo && b.ioo() || Vy.documentElement.hasAttribute("data-google-analytics-opt-out") || a && Uy["ga-disable-" + a] === !0)
            return !0;
        try {
            var c = Uy.external;
            if (c && c._gaUserPrefs && c._gaUserPrefs == "oo")
                return !0
        } catch (p) {}
        for (var d = [], e = String(Vy.cookie).split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("=")
              , l = h[0].replace(/^\s*|\s*$/g, "");
            if (l && l == "AMP_TOKEN") {
                var m = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        for (var n = 0; n < d.length; n++)
            if (d[n] == "$OPT_OUT")
                return !0;
        return Vy.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    function gz(a) {
        A(a, function(c) {
            c.charAt(0) === "_" && delete a[c]
        });
        var b = a[M.g.Xa] || {};
        A(b, function(c) {
            c.charAt(0) === "_" && delete b[c]
        })
    }
    ;var oz = function(a, b) {};
    function nz(a, b) {
        var c = function() {};
        return c
    }
    function pz(a, b, c) {}
    ;var qz = nz;
    var sz = encodeURI
      , V = encodeURIComponent
      , tz = Array.isArray
      , uz = function(a, b, c) {
        Nb(a, b, c)
    }
      , vz = function(a, b) {
        if (!a)
            return !1;
        var c = of(sf(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                f > 0 && e.charAt(0) != "." && (f--,
                e = "." + e);
                if (f >= 0 && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    }
      , wz = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    var Fz = F.clearTimeout
      , Gz = F.setTimeout
      , X = function(a, b, c) {
        if (bk()) {
            b && I(b)
        } else
            return Kb(a, b, c)
    }
      , Hz = function() {
        return F.location.href
    }
      , Nz = function(a) {
        return of(sf(a), "fragment")
    }
      , Yz = function(a, b) {
        return Qe(a, b || 2)
    }
      , Zz = function(a, b, c) {
        var d;
        b ? (a.eventCallback = b,
        c && (a.eventTimeout = c),
        d = F[qe.Ga].push(a)) : d = F[qe.Ga].push(a);
        return d
    }
      , $z = function(a, b) {
        F[a] = b
    }
      , Y = function(a, b, c) {
        b && (F[a] === void 0 || c && !F[a]) && (F[a] = b);
        return F[a]
    }
      , aA = function(a, b) {
        if (bk()) {
            b && I(b)
        } else
            Mb(a, b)
    }
      , bA = function(a) {
        return !!Rv(a, "init", !1)
    }
      , cA = function(a) {
        Qv(a).init = !0
    };
    var dA = {};
    var Z = {
        securityGroups: {}
    };

    Z.securityGroups.v = ["google"],
    Z.__v = function(a) {
        var b = a.vtp_name;
        if (!b || !b.replace)
            return !1;
        var c = Yz(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return c !== void 0 ? c : a.vtp_defaultValue
    }
    ,
    Z.__v.C = "v",
    Z.__v.isVendorTemplate = !0,
    Z.__v.priorityOverride = 0,
    Z.__v.isInfrastructure = !0,
    Z.__v.runInSiloedMode = !1;

    Z.securityGroups.get = ["google"],
    Z.__get = function(a) {
        var b = a.vtp_settings
          , c = b.eventParameters || {}
          , d = String(a.vtp_eventName)
          , e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = eu(String(b.streamId), d, c);
        gu(f, e.eventId, e);
        a.vtp_gtmOnSuccess()
    }
    ,
    Z.__get.C = "get",
    Z.__get.isVendorTemplate = !0,
    Z.__get.priorityOverride = 0,
    Z.__get.isInfrastructure = !1,
    Z.__get.runInSiloedMode = !1;

    var eA = {};
    eA.dataLayer = Te;
    eA.callback = function(a) {
        Fe.hasOwnProperty(a) && Wa(Fe[a]) && Fe[a]();
        delete Fe[a]
    }
    ;
    eA.bootstrap = 0;
    eA._spx = !1;
    function fA() {
        re[Sf()] = re[Sf()] || eA;
        cg();
        eg() || A(fg(), function(d, e) {
            Ss(d, e.transportUrl, e.context);
            L(92)
        });
        lb(Ge, Z.securityGroups);
        var a = Wf(Xf()), b, c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
        c !== 2 && c !== 4 && c !== 3 || L(142);
        Nc = Yc
    }
    (function(a) {
        function b() {
            n = H.documentElement.getAttribute("data-tag-assistant-present");
            Yu(n) && (m = l.Hh)
        }
        function c() {
            m && Eb ? h(m) : a()
        }
        if (!F["__TAGGY_INSTALLED"]) {
            var d = !1;
            if (H.referrer) {
                var e = sf(H.referrer);
                d = nf(e, "host") === "cct.google"
            }
            if (!d) {
                var f = nk("googTaggyReferrer");
                d = !(!f.length || !f[0].length)
            }
            d && (F["__TAGGY_INSTALLED"] = !0,
            Kb("https://cct.google/taggy/agent.js"))
        }
        var h = function(v) {
            var u = "GTM"
              , w = "GTM";
            we && (u = "OGT",
            w = "GTAG");
            var y = F["google.tagmanager.debugui2.queue"];
            y || (y = [],
            F["google.tagmanager.debugui2.queue"] = y,
            Kb("https://" + qe.Nc + "/debug/bootstrap?id=" + Mf.ctid + "&src=" + w + "&cond=" + v + "&gtm=" + dk()));
            var x = {
                messageType: "CONTAINER_STARTING",
                data: {
                    scriptSource: Eb,
                    containerProduct: u,
                    debug: !1,
                    id: Mf.ctid,
                    targetRef: {
                        ctid: Mf.ctid,
                        isDestination: Kf.od
                    },
                    aliases: Of(),
                    destinations: Rf()
                }
            };
            x.data.resume = function() {
                a()
            }
            ;
            qe.Ui && (x.data.initialPublish = !0);
            y.push(x)
        }
          , l = {
            Lj: 1,
            Jh: 2,
            Wh: 3,
            Gg: 4,
            Hh: 5
        };
        l[l.Lj] = "GTM_DEBUG_LEGACY_PARAM";
        l[l.Jh] = "GTM_DEBUG_PARAM";
        l[l.Wh] = "REFERRER";
        l[l.Gg] = "COOKIE";
        l[l.Hh] = "EXTENSION_PARAM";
        var m = void 0
          , n = void 0
          , p = of(F.location, "query", !1, void 0, "gtm_debug");
        Yu(p) && (m = l.Jh);
        if (!m && H.referrer) {
            var q = sf(H.referrer);
            nf(q, "host") === "tagassistant.google.com" && (m = l.Wh)
        }
        if (!m) {
            var r = nk("__TAG_ASSISTANT");
            r.length && r[0].length && (m = l.Gg)
        }
        m || b();
        if (!m && n && n.indexOf("pending:") === 0 && Yu(n.substr(8))) {
            var t = !1;
            Ob(H, "TADebugSignal", function() {
                t || (t = !0,
                b(),
                c())
            }, !1);
            F.setTimeout(function() {
                t || (t = !0,
                b(),
                c())
            }, 200)
        } else
            c()
    }
    )(function() {
        try {
            ag();
            if (Q(64)) {}
            Mh().F();
            Jj();
            pi();
            var a = Uf();
            if (If().canonical[a]) {
                var b = re.zones;
                b && b.unregisterChild(Nf());
                Es().removeExternalRestrictions(Uf());
            } else {
                a: {}
                Je.D = "0";
                Je.F = Je.K;
                Je.H = "";
                Je.X = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                Je.P = "ad_storage|analytics_storage|ad_user_data";
                Je.Na = "";
                Ps();
                for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++)
                    Cc.push(d[e]);
                for (var f = c.tags || [], h = 0; h < f.length; h++)
                    Fc.push(f[h]);
                for (var l = c.predicates || [], m = 0; m < l.length; m++)
                    Ec.push(l[m]);
                for (var n = c.rules || [], p = 0; p < n.length; p++) {
                    for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
                        var v = q[t][0];
                        r[v] = Array.prototype.slice.call(q[t], 1);
                        v !== "if" && v !== "unless" || Mc(r[v])
                    }
                    Dc.push(r)
                }
                Ic = Z;
                Jc = Jv;
                fA();
                if (!Ae)
                    for (var u = Bh["6"] !== !1 ? Le(Je.P) : Le(Je.X), w = 0; w < ei.length; w++) {
                        var y = ei[w]
                          , x = y
                          , B = u[y] ? "granted" : "denied";
                        Hh().implicit(x, B)
                    }
                Xu();
                Ts = !1;
                Us = 0;
                if (H.readyState === "interactive" && !H.createEventObject || H.readyState === "complete")
                    Ws();
                else {
                    Ob(H, "DOMContentLoaded", Ws);
                    Ob(H, "readystatechange", Ws);
                    if (H.createEventObject && H.documentElement.doScroll) {
                        var z = !0;
                        try {
                            z = !F.frameElement
                        } catch (E) {}
                        z && Xs()
                    }
                    Ob(F, "load", Ws)
                }
                Eu = !1;
                H.readyState === "complete" ? Gu() : Ob(F, "load", Gu);
                Ff && (ng(Dg),
                F.setInterval(Cg, 864E5));
                Og();
                ng(Mv);
                ng(wt);
                ng(Rq);
                ng(dj);
                ng(It);
                mg.push(Ji);
                Q(43) && Ob(F, "pagehide", Ki);
                ng(Ap);
                vh();
                Q(73) && (ng(Ct),
                ng(Dt),
                ng(Et));
                Ff && Q(60) && (ng(Nv),
                ng(Pv));
                ev();
                mg.push(zh);
                mg.push(bu);
                if (Q(72))
                    if (Q(41)) {
                        var G = $u();
                        G && Ig("pcid", G)
                    } else
                        mg.push(av);
                zv();
                Ah(1);
                dw();
                Ee = ib();
                eA.bootstrap = Ee;
                if (Q(64)) {}
            }
        } catch (E) {
            if (Ah(4),
            Ff) {
                var D = vg(!1, !0, !0);
                Nb(D)
            }
        }
    });

}
)()
