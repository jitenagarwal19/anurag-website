!function(e, t) {
	function n(e) {
		var t = e.length,
			n = le.type(e);
		return !le.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
	}

	function i(e) {
		var t = Se[e] = {};
		return le.each(e.match(ue) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function r(e, n, i, r) {
		if (le.acceptData(e)) {
			var s, o, a = le.expando,
				l = "string" == typeof n,
				c = e.nodeType,
				u = c ? le.cache : e,
				p = c ? e[a] : e[a] && a;
			if (p && u[p] && (r || u[p].data) || !l || i !== t) return p || (c ? e[a] = p = Z.pop() || le.guid++ : p = a), u[p] || (u[p] = {}, c || (u[p].toJSON = le.noop)), ("object" == typeof n || "function" == typeof n) && (r ? u[p] = le.extend(u[p], n) : u[p].data = le.extend(u[p].data, n)), s = u[p], r || (s.data || (s.data = {}), s = s.data), i !== t && (s[le.camelCase(n)] = i), l ? null == (o = s[n]) && (o = s[le.camelCase(n)]) : o = s, o
		}
	}

	function s(e, t, n) {
		if (le.acceptData(e)) {
			var i, r, s, o = e.nodeType,
				a = o ? le.cache : e,
				l = o ? e[le.expando] : le.expando;
			if (a[l]) {
				if (t && (s = n ? a[l] : a[l].data)) {
					le.isArray(t) ? t = t.concat(le.map(t, le.camelCase)) : t in s ? t = [t] : (t = le.camelCase(t), t = t in s ? [t] : t.split(" "));
					for (i = 0, r = t.length; r > i; i++) delete s[t[i]];
					if (!(n ? $ : le.isEmptyObject)(s)) return
				}(n || (delete a[l].data, $(a[l]))) && (o ? le.cleanData([e], !0) : le.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
			}
		}
	}

	function o(e, n, i) {
		if (i === t && 1 === e.nodeType) {
			var r = "data-" + n.replace(Ne, "-$1").toLowerCase();
			if ("string" == typeof(i = e.getAttribute(r))) {
				try {
					i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Ce.test(i) ? le.parseJSON(i) : i)
				} catch (e) {}
				le.data(e, n, i)
			} else i = t
		}
		return i
	}

	function $(e) {
		var t;
		for (t in e)
			if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function a() {
		return !0
	}

	function l() {
		return !1
	}

	function c(e, t) {
		do {
			e = e[t]
		} while (e && 1 !== e.nodeType);
		return e
	}

	function u(e, t, n) {
		if (t = t || 0, le.isFunction(t)) return le.grep(e, function(e, i) {
			return !!t.call(e, i, e) === n
		});
		if (t.nodeType) return le.grep(e, function(e) {
			return e === t === n
		});
		if ("string" == typeof t) {
			var i = le.grep(e, function(e) {
				return 1 === e.nodeType
			});
			if (We.test(t)) return le.filter(t, i, !n);
			t = le.filter(t, i)
		}
		return le.grep(e, function(e) {
			return le.inArray(e, t) >= 0 === n
		})
	}

	function p(e) {
		var t = Xe.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length;) n.createElement(t.pop());
		return n
	}

	function h(e, t) {
		return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
	}

	function f(e) {
		var t = e.getAttributeNode("type");
		return e.type = (t && t.specified) + "/" + e.type, e
	}

	function d(e) {
		var t = rt.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function m(e, t) {
		for (var n, i = 0; null != (n = e[i]); i++) le._data(n, "globalEval", !t || le._data(t[i], "globalEval"))
	}

	function g(e, t) {
		if (1 === t.nodeType && le.hasData(e)) {
			var n, i, r, s = le._data(e),
				o = le._data(t, s),
				a = s.events;
			if (a) {
				delete o.handle, o.events = {};
				for (n in a)
					for (i = 0, r = a[n].length; r > i; i++) le.event.add(t, n, a[n][i])
			}
			o.data && (o.data = le.extend({}, o.data))
		}
	}

	function y(e, t) {
		var n, i, r;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !le.support.noCloneEvent && t[le.expando]) {
				r = le._data(t);
				for (i in r.events) le.removeEvent(t, i, r.handle);
				t.removeAttribute(le.expando)
			}
			"script" === n && t.text !== e.text ? (f(t).text = e.text, d(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), le.support.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}

	function v(e, n) {
		var i, r, s = 0,
			o = typeof e.getElementsByTagName !== U ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== U ? e.querySelectorAll(n || "*") : t;
		if (!o)
			for (o = [], i = e.childNodes || e; null != (r = i[s]); s++) !n || le.nodeName(r, n) ? o.push(r) : le.merge(o, v(r, n));
		return n === t || n && le.nodeName(e, n) ? le.merge([e], o) : o
	}

	function b(e) {
		tt.test(e.type) && (e.defaultChecked = e.checked)
	}

	function x(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = Ct.length; r--;)
			if ((t = Ct[r] + n) in e) return t;
		return i
	}

	function k(e, t) {
		return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
	}

	function w(e, t) {
		for (var n, i, r, s = [], o = 0, a = e.length; a > o; o++) i = e[o], i.style && (s[o] = le._data(i, "olddisplay"), n = i.style.display, t ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && k(i) && (s[o] = le._data(i, "olddisplay", E(i.nodeName)))) : s[o] || (r = k(i), (n && "none" !== n || !r) && le._data(i, "olddisplay", r ? n : le.css(i, "display"))));
		for (o = 0; a > o; o++) i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[o] || "" : "none"));
		return e
	}

	function S(e, t, n) {
		var i = yt.exec(t);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
	}

	function C(e, t, n, i, r) {
		for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += le.css(e, n + St[s], !0, r)), i ? ("content" === n && (o -= le.css(e, "padding" + St[s], !0, r)), "margin" !== n && (o -= le.css(e, "border" + St[s] + "Width", !0, r))) : (o += le.css(e, "padding" + St[s], !0, r), "padding" !== n && (o += le.css(e, "border" + St[s] + "Width", !0, r)));
		return o
	}

	function N(e, t, n) {
		var i = !0,
			r = "width" === t ? e.offsetWidth : e.offsetHeight,
			s = ut(e),
			o = le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, s);
		if (0 >= r || null == r) {
			if (r = pt(e, t, s), (0 > r || null == r) && (r = e.style[t]), vt.test(r)) return r;
			i = o && (le.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
		}
		return r + C(e, t, n || (o ? "border" : "content"), i, s) + "px"
	}

	function E(e) {
		var t = Y,
			n = xt[e];
		return n || (n = T(e, t), "none" !== n && n || (ct = (ct || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = T(e, t), ct.detach()), xt[e] = n), n
	}

	function T(e, t) {
		var n = le(t.createElement(e)).appendTo(t.body),
			i = le.css(n[0], "display");
		return n.remove(), i
	}

	function A(e, t, n, i) {
		var r;
		if (le.isArray(t)) le.each(t, function(t, r) {
			n || Et.test(e) ? i(e, r) : A(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
		});
		else if (n || "object" !== le.type(t)) i(e, t);
		else
			for (r in t) A(e + "[" + r + "]", t[r], n, i)
	}

	function _(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, r = 0,
				s = t.toLowerCase().match(ue) || [];
			if (le.isFunction(n))
				for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function L(e, n, i, r) {
		function s(l) {
			var c;
			return o[l] = !0, le.each(e[l] || [], function(e, l) {
				var u = l(n, i, r);
				return "string" != typeof u || a || o[u] ? a ? !(c = u) : t : (n.dataTypes.unshift(u), s(u), !1)
			}), c
		}
		var o = {},
			a = e === Wt;
		return s(n.dataTypes[0]) || !o["*"] && s("*")
	}

	function P(e, n) {
		var i, r, s = le.ajaxSettings.flatOptions || {};
		for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
		return i && le.extend(!0, e, i), e
	}

	function D(e, n, i) {
		var r, s, o, a, l = e.contents,
			c = e.dataTypes,
			u = e.responseFields;
		for (a in u) a in i && (n[u[a]] = i[a]);
		for (;
			"*" === c[0];) c.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
		if (s)
			for (a in l)
				if (l[a] && l[a].test(s)) {
					c.unshift(a);
					break
				}
		if (c[0] in i) o = c[0];
		else {
			for (a in i) {
				if (!c[0] || e.converters[a + " " + c[0]]) {
					o = a;
					break
				}
				r || (r = a)
			}
			o = o || r
		}
		return o ? (o !== c[0] && c.unshift(o), i[o]) : t
	}

	function H(e, t) {
		var n, i, r, s, o = {},
			a = 0,
			l = e.dataTypes.slice(),
			c = l[0];
		if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1])
			for (r in e.converters) o[r.toLowerCase()] = e.converters[r];
		for (; i = l[++a];)
			if ("*" !== i) {
				if ("*" !== c && c !== i) {
					if (!(r = o[c + " " + i] || o["* " + i]))
						for (n in o)
							if (s = n.split(" "), s[1] === i && (r = o[c + " " + s[0]] || o["* " + s[0]])) {
								!0 === r ? r = o[n] : !0 !== o[n] && (i = s[0], l.splice(a--, 0, i));
								break
							}
					if (!0 !== r)
						if (r && e.throws) t = r(t);
						else try {
							t = r(t)
						} catch (e) {
							return {
								state: "parsererror",
								error: r ? e : "No conversion from " + c + " to " + i
							}
						}
				}
				c = i
			}
		return {
			state: "success",
			data: t
		}
	}

	function O() {
		try {
			return new e.XMLHttpRequest
		} catch (e) {}
	}

	function j() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (e) {}
	}

	function M() {
		return setTimeout(function() {
			Gt = t
		}), Gt = le.now()
	}

	function I(e, t) {
		le.each(t, function(t, n) {
			for (var i = (rn[t] || []).concat(rn["*"]), r = 0, s = i.length; s > r; r++)
				if (i[r].call(e, t, n)) return
		})
	}

	function B(e, t, n) {
		var i, r, s = 0,
			o = nn.length,
			a = le.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (r) return !1;
				for (var t = Gt || M(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, s = 1 - i, o = 0, l = c.tweens.length; l > o; o++) c.tweens[o].run(s);
				return a.notifyWith(e, [c, s, n]), 1 > s && l ? n : (a.resolveWith(e, [c]), !1)
			},
			c = a.promise({
				elem: e,
				props: le.extend({}, t),
				opts: le.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Gt || M(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var i = le.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function(t) {
					var n = 0,
						i = t ? c.tweens.length : 0;
					if (r) return this;
					for (r = !0; i > n; n++) c.tweens[n].run(1);
					return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
				}
			}),
			u = c.props;
		for (R(u, c.opts.specialEasing); o > s; s++)
			if (i = nn[s].call(c, e, u, c.opts)) return i;
		return I(c, u), le.isFunction(c.opts.start) && c.opts.start.call(e, c), le.fx.timer(le.extend(l, {
			elem: e,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}

	function R(e, t) {
		var n, i, r, s, o;
		for (r in e)
			if (i = le.camelCase(r), s = t[i], n = e[r], le.isArray(n) && (s = n[1], n = e[r] = n[0]), r !== i && (e[i] = n, delete e[r]), (o = le.cssHooks[i]) && "expand" in o) {
				n = o.expand(n), delete e[i];
				for (r in n) r in e || (e[r] = n[r], t[r] = s)
			} else t[i] = s
	}

	function F(e, t, n) {
		var i, r, s, o, a, l, c, u, p, h = this,
			f = e.style,
			d = {},
			m = [],
			g = e.nodeType && k(e);
		n.queue || (u = le._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, p = u.empty.fire, u.empty.fire = function() {
			u.unqueued || p()
		}), u.unqueued++, h.always(function() {
			h.always(function() {
				u.unqueued--, le.queue(e, "fx").length || u.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === le.css(e, "display") && "none" === le.css(e, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", le.support.shrinkWrapBlocks || h.always(function() {
			f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
		}));
		for (r in t)
			if (o = t[r], Zt.exec(o)) {
				if (delete t[r], l = l || "toggle" === o, o === (g ? "hide" : "show")) continue;
				m.push(r)
			}
		if (s = m.length) {
			a = le._data(e, "fxshow") || le._data(e, "fxshow", {}), "hidden" in a && (g = a.hidden), l && (a.hidden = !g), g ? le(e).show() : h.done(function() {
				le(e).hide()
			}), h.done(function() {
				var t;
				le._removeData(e, "fxshow");
				for (t in d) le.style(e, t, d[t])
			});
			for (r = 0; s > r; r++) i = m[r], c = h.createTween(i, g ? a[i] : 0), d[i] = a[i] || le.style(e, i), i in a || (a[i] = c.start, g && (c.end = c.start, c.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function q(e, t, n, i, r) {
		return new q.prototype.init(e, t, n, i, r)
	}

	function W(e, t) {
		var n, i = {
				height: e
			},
			r = 0;
		for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = St[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function V(e) {
		return le.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
	}
	var z, X, U = typeof t,
		Y = e.document,
		K = e.location,
		J = e.jQuery,
		G = e.$,
		Q = {},
		Z = [],
		ee = "1.9.1",
		te = Z.concat,
		ne = Z.push,
		ie = Z.slice,
		re = Z.indexOf,
		se = Q.toString,
		oe = Q.hasOwnProperty,
		ae = ee.trim,
		le = function(e, t) {
			return new le.fn.init(e, t, X)
		},
		ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ue = /\S+/g,
		pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		he = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		de = /^[\],:{}\s]*$/,
		me = /(?:^|:|,)(?:\s*\[)+/g,
		ge = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		ye = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		ve = /^-ms-/,
		be = /-([\da-z])/gi,
		xe = function(e, t) {
			return t.toUpperCase()
		},
		ke = function(e) {
			(Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (we(), le.ready())
		},
		we = function() {
			Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", ke, !1), e.removeEventListener("load", ke, !1)) : (Y.detachEvent("onreadystatechange", ke), e.detachEvent("onload", ke))
		};
	le.fn = le.prototype = {
		jquery: ee,
		constructor: le,
		init: function(e, n, i) {
			var r, s;
			if (!e) return this;
			if ("string" == typeof e) {
				if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : he.exec(e)) || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
				if (r[1]) {
					if (n = n instanceof le ? n[0] : n, le.merge(this, le.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : Y, !0)), fe.test(r[1]) && le.isPlainObject(n))
						for (r in n) le.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
					return this
				}
				if ((s = Y.getElementById(r[2])) && s.parentNode) {
					if (s.id !== r[2]) return i.find(e);
					this.length = 1, this[0] = s
				}
				return this.context = Y, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
		},
		selector: "",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return ie.call(this)
		},
		get: function(e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function(e) {
			var t = le.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return le.each(this, e, t)
		},
		ready: function(e) {
			return le.ready.promise().done(e), this
		},
		slice: function() {
			return this.pushStack(ie.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map: function(e) {
			return this.pushStack(le.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: ne,
		sort: [].sort,
		splice: [].splice
	}, le.fn.init.prototype = le.fn, le.extend = le.fn.extend = function() {
		var e, n, i, r, s, o, a = arguments[0] || {},
			l = 1,
			c = arguments.length,
			u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || le.isFunction(a) || (a = {}), c === l && (a = this, --l); c > l; l++)
			if (null != (s = arguments[l]))
				for (r in s) e = a[r], i = s[r], a !== i && (u && i && (le.isPlainObject(i) || (n = le.isArray(i))) ? (n ? (n = !1, o = e && le.isArray(e) ? e : []) : o = e && le.isPlainObject(e) ? e : {}, a[r] = le.extend(u, o, i)) : i !== t && (a[r] = i));
		return a
	}, le.extend({
		noConflict: function(t) {
			return e.$ === le && (e.$ = G), t && e.jQuery === le && (e.jQuery = J), le
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? le.readyWait++ : le.ready(!0)
		},
		ready: function(e) {
			if (!0 === e ? !--le.readyWait : !le.isReady) {
				if (!Y.body) return setTimeout(le.ready);
				le.isReady = !0, !0 !== e && --le.readyWait > 0 || (z.resolveWith(Y, [le]), le.fn.trigger && le(Y).trigger("ready").off("ready"))
			}
		},
		isFunction: function(e) {
			return "function" === le.type(e)
		},
		isArray: Array.isArray || function(e) {
			return "array" === le.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[se.call(e)] || "object" : typeof e
		},
		isPlainObject: function(e) {
			if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e)) return !1;
			try {
				if (e.constructor && !oe.call(e, "constructor") && !oe.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (e) {
				return !1
			}
			var n;
			for (n in e);
			return n === t || oe.call(e, n)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		error: function(e) {
			throw Error(e)
		},
		parseHTML: function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || Y;
			var i = fe.exec(e),
				r = !n && [];
			return i ? [t.createElement(i[1])] : (i = le.buildFragment([e], t, r), r && le(r).remove(), le.merge([], i.childNodes))
		},
		parseJSON: function(n) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = le.trim(n)) && de.test(n.replace(ge, "@").replace(ye, "]").replace(me, "")) ? Function("return " + n)() : (le.error("Invalid JSON: " + n), t)
		},
		parseXML: function(n) {
			var i, r;
			if (!n || "string" != typeof n) return null;
			try {
				e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
			} catch (e) {
				i = t
			}
			return i && i.documentElement && !i.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + n), i
		},
		noop: function() {},
		globalEval: function(t) {
			t && le.trim(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(ve, "ms-").replace(be, xe)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, i) {
			var r, s = 0,
				o = e.length,
				a = n(e);
			if (i) {
				if (a)
					for (; o > s && !1 !== (r = t.apply(e[s], i)); s++);
				else
					for (s in e)
						if (!1 === (r = t.apply(e[s], i))) break
			} else if (a)
				for (; o > s && !1 !== (r = t.call(e[s], s, e[s])); s++);
			else
				for (s in e)
					if (!1 === (r = t.call(e[s], s, e[s]))) break;
			return e
		},
		trim: ae && !ae.call("\ufeff ") ? function(e) {
			return null == e ? "" : ae.call(e)
		} : function(e) {
			return null == e ? "" : (e + "").replace(pe, "")
		},
		makeArray: function(e, t) {
			var i = t || [];
			return null != e && (n(Object(e)) ? le.merge(i, "string" == typeof e ? [e] : e) : ne.call(i, e)), i
		},
		inArray: function(e, t, n) {
			var i;
			if (t) {
				if (re) return re.call(t, e, n);
				for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, n) {
			var i = n.length,
				r = e.length,
				s = 0;
			if ("number" == typeof i)
				for (; i > s; s++) e[r++] = n[s];
			else
				for (; n[s] !== t;) e[r++] = n[s++];
			return e.length = r, e
		},
		grep: function(e, t, n) {
			var i, r = [],
				s = 0,
				o = e.length;
			for (n = !!n; o > s; s++) i = !!t(e[s], s), n !== i && r.push(e[s]);
			return r
		},
		map: function(e, t, i) {
			var r, s = 0,
				o = e.length,
				a = n(e),
				l = [];
			if (a)
				for (; o > s; s++) null != (r = t(e[s], s, i)) && (l[l.length] = r);
			else
				for (s in e) null != (r = t(e[s], s, i)) && (l[l.length] = r);
			return te.apply([], l)
		},
		guid: 1,
		proxy: function(e, n) {
			var i, r, s;
			return "string" == typeof n && (s = e[n], n = e, e = s), le.isFunction(e) ? (i = ie.call(arguments, 2), r = function() {
				return e.apply(n || this, i.concat(ie.call(arguments)))
			}, r.guid = e.guid = e.guid || le.guid++, r) : t
		},
		access: function(e, n, i, r, s, o, a) {
			var l = 0,
				c = e.length,
				u = null == i;
			if ("object" === le.type(i)) {
				s = !0;
				for (l in i) le.access(e, n, l, i[l], !0, o, a)
			} else if (r !== t && (s = !0, le.isFunction(r) || (a = !0), u && (a ? (n.call(e, r), n = null) : (u = n, n = function(e, t, n) {
					return u.call(le(e), n)
				})), n))
				for (; c > l; l++) n(e[l], i, a ? r : r.call(e[l], l, n(e[l], i)));
			return s ? e : u ? n.call(e) : c ? n(e[0], i) : o
		},
		now: function() {
			return (new Date).getTime()
		}
	}), le.ready.promise = function(t) {
		if (!z)
			if (z = le.Deferred(), "complete" === Y.readyState) setTimeout(le.ready);
			else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", ke, !1), e.addEventListener("load", ke, !1);
		else {
			Y.attachEvent("onreadystatechange", ke), e.attachEvent("onload", ke);
			var n = !1;
			try {
				n = null == e.frameElement && Y.documentElement
			} catch (e) {}
			n && n.doScroll && function e() {
				if (!le.isReady) {
					try {
						n.doScroll("left")
					} catch (t) {
						return setTimeout(e, 50)
					}
					we(), le.ready()
				}
			}()
		}
		return z.promise(t)
	}, le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		Q["[object " + t + "]"] = t.toLowerCase()
	}), X = le(Y);
	var Se = {};
	le.Callbacks = function(e) {
		e = "string" == typeof e ? Se[e] || i(e) : le.extend({}, e);
		var n, r, s, o, a, l, c = [],
			u = !e.once && [],
			p = function(t) {
				for (r = e.memory && t, s = !0, a = l || 0, l = 0, o = c.length, n = !0; c && o > a; a++)
					if (!1 === c[a].apply(t[0], t[1]) && e.stopOnFalse) {
						r = !1;
						break
					}
				n = !1, c && (u ? u.length && p(u.shift()) : r ? c = [] : h.disable())
			},
			h = {
				add: function() {
					if (c) {
						var t = c.length;
						(function t(n) {
							le.each(n, function(n, i) {
								var r = le.type(i);
								"function" === r ? e.unique && h.has(i) || c.push(i) : i && i.length && "string" !== r && t(i)
							})
						})(arguments), n ? o = c.length : r && (l = t, p(r))
					}
					return this
				},
				remove: function() {
					return c && le.each(arguments, function(e, t) {
						for (var i;
							(i = le.inArray(t, c, i)) > -1;) c.splice(i, 1), n && (o >= i && o--, a >= i && a--)
					}), this
				},
				has: function(e) {
					return e ? le.inArray(e, c) > -1 : !(!c || !c.length)
				},
				empty: function() {
					return c = [], this
				},
				disable: function() {
					return c = u = r = t, this
				},
				disabled: function() {
					return !c
				},
				lock: function() {
					return u = t, r || h.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(e, t) {
					return t = t || [], t = [e, t.slice ? t.slice() : t], !c || s && !u || (n ? u.push(t) : p(t)), this
				},
				fire: function() {
					return h.fireWith(this, arguments), this
				},
				fired: function() {
					return !!s
				}
			};
		return h
	}, le.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", le.Callbacks("once memory"), "resolved"],
					["reject", "fail", le.Callbacks("once memory"), "rejected"],
					["notify", "progress", le.Callbacks("memory")]
				],
				n = "pending",
				i = {
					state: function() {
						return n
					},
					always: function() {
						return r.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return le.Deferred(function(n) {
							le.each(t, function(t, s) {
								var o = s[0],
									a = le.isFunction(e[t]) && e[t];
								r[s[1]](function() {
									var e = a && a.apply(this, arguments);
									e && le.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? le.extend(e, i) : i
					}
				},
				r = {};
			return i.pipe = i.then, le.each(t, function(e, s) {
				var o = s[2],
					a = s[3];
				i[s[1]] = o.add, a && o.add(function() {
					n = a
				}, t[1 ^ e][2].disable, t[2][2].lock), r[s[0]] = function() {
					return r[s[0] + "With"](this === r ? i : this, arguments), this
				}, r[s[0] + "With"] = o.fireWith
			}), i.promise(r), e && e.call(r, r), r
		},
		when: function(e) {
			var t = 0,
				n = ie.call(arguments),
				i = n.length,
				r = 1 !== i || e && le.isFunction(e.promise) ? i : 0,
				s = 1 === r ? e : le.Deferred(),
				o = function(e, t, n) {
					return function(i) {
						t[e] = this, n[e] = arguments.length > 1 ? ie.call(arguments) : i, n === a ? s.notifyWith(t, n) : --r || s.resolveWith(t, n)
					}
				},
				a, l, c;
			if (i > 1)
				for (a = Array(i), l = Array(i), c = Array(i); i > t; t++) n[t] && le.isFunction(n[t].promise) ? n[t].promise().done(o(t, c, n)).fail(s.reject).progress(o(t, l, a)) : --r;
			return r || s.resolveWith(c, n), s.promise()
		}
	}), le.support = function() {
		var t, n, i, r, s, o, a, l, c, u, p = Y.createElement("div");
		if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), i = p.getElementsByTagName("a")[0], !n || !i || !n.length) return {};
		s = Y.createElement("select"), a = s.appendChild(Y.createElement("option")), r = p.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t = {
			getSetAttribute: "t" !== p.className,
			leadingWhitespace: 3 === p.firstChild.nodeType,
			tbody: !p.getElementsByTagName("tbody").length,
			htmlSerialize: !!p.getElementsByTagName("link").length,
			style: /top/.test(i.getAttribute("style")),
			hrefNormalized: "/a" === i.getAttribute("href"),
			opacity: /^0.5/.test(i.style.opacity),
			cssFloat: !!i.style.cssFloat,
			checkOn: !!r.value,
			optSelected: a.selected,
			enctype: !!Y.createElement("form").enctype,
			html5Clone: "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML,
			boxModel: "CSS1Compat" === Y.compatMode,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		}, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled;
		try {
			delete p.test
		} catch (e) {
			t.deleteExpando = !1
		}
		r = Y.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), o = Y.createDocumentFragment(), o.appendChild(r), t.appendChecked = r.checked, t.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), p.cloneNode(!0).click());
		for (u in {
				submit: !0,
				change: !0,
				focusin: !0
			}) p.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || !1 === p.attributes[l].expando;
		return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip, le(function() {
			var n, i, r, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				o = Y.getElementsByTagName("body")[0];
			o && (n = Y.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = p.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === p.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
				width: "4px"
			}).width, i = p.appendChild(Y.createElement("div")), i.style.cssText = p.style.cssText = s, i.style.marginRight = i.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof p.style.zoom !== U && (p.innerHTML = "", p.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(n), n = p = r = i = null)
		}), n = s = o = a = i = r = null, t
	}();
	var Ce = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		Ne = /([A-Z])/g;
	le.extend({
		cache: {},
		expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(e) {
			return !!(e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando]) && !$(e)
		},
		data: function(e, t, n) {
			return r(e, t, n)
		},
		removeData: function(e, t) {
			return s(e, t)
		},
		_data: function(e, t, n) {
			return r(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return s(e, t, !0)
		},
		acceptData: function(e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
			var t = e.nodeName && le.noData[e.nodeName.toLowerCase()];
			return !t || !0 !== t && e.getAttribute("classid") === t
		}
	}), le.fn.extend({
		data: function(e, n) {
			var i, r, s = this[0],
				a = 0,
				l = null;
			if (e === t) {
				if (this.length && (l = le.data(s), 1 === s.nodeType && !le._data(s, "parsedAttrs"))) {
					for (i = s.attributes; i.length > a; a++) r = i[a].name, r.indexOf("data-") || (r = le.camelCase(r.slice(5)), o(s, r, l[r]));
					le._data(s, "parsedAttrs", !0)
				}
				return l
			}
			return "object" == typeof e ? this.each(function() {
				le.data(this, e)
			}) : le.access(this, function(n) {
				return n === t ? s ? o(s, e, le.data(s, e)) : null : (this.each(function() {
					le.data(this, e, n)
				}), t)
			}, null, n, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				le.removeData(this, e)
			})
		}
	}), le.extend({
		queue: function(e, n, i) {
			var r;
			return e ? (n = (n || "fx") + "queue", r = le._data(e, n), i && (!r || le.isArray(i) ? r = le._data(e, n, le.makeArray(i)) : r.push(i)), r || []) : t
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = le.queue(e, t),
				i = n.length,
				r = n.shift(),
				s = le._queueHooks(e, t),
				o = function() {
					le.dequeue(e, t)
				};
			"inprogress" === r && (r = n.shift(), i--), s.cur = r, r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, o, s)), !i && s && s.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return le._data(e, n) || le._data(e, n, {
				empty: le.Callbacks("once memory").add(function() {
					le._removeData(e, t + "queue"), le._removeData(e, n)
				})
			})
		}
	}), le.fn.extend({
		queue: function(e, n) {
			var i = 2;
			return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? le.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = le.queue(this, e, n);
				le._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && le.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				le.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var i = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(i)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var i, r = 1,
				s = le.Deferred(),
				o = this,
				a = this.length,
				l = function() {
					--r || s.resolveWith(o, [o])
				};
			for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;)(i = le._data(o[a], e + "queueHooks")) && i.empty && (r++, i.empty.add(l));
			return l(), s.promise(n)
		}
	});
	var Ee, Te, Ae = /[\t\r\n]/g,
		_e = /\r/g,
		Le = /^(?:input|select|textarea|button|object)$/i,
		$e = /^(?:a|area)$/i,
		Pe = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
		De = /^(?:checked|selected)$/i,
		He = le.support.getSetAttribute,
		Oe = le.support.input;
	le.fn.extend({
		attr: function(e, t) {
			return le.access(this, le.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				le.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return le.access(this, le.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = le.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch (e) {}
			})
		},
		addClass: function(e) {
			var t, n, i, r, s, o = 0,
				a = this.length,
				l = "string" == typeof e && e;
			if (le.isFunction(e)) return this.each(function(t) {
				le(this).addClass(e.call(this, t, this.className))
			});
			if (l)
				for (t = (e || "").match(ue) || []; a > o; o++)
					if (n = this[o], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")) {
						for (s = 0; r = t[s++];) 0 > i.indexOf(" " + r + " ") && (i += r + " ");
						n.className = le.trim(i)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, i, r, s, o = 0,
				a = this.length,
				l = 0 === arguments.length || "string" == typeof e && e;
			if (le.isFunction(e)) return this.each(function(t) {
				le(this).removeClass(e.call(this, t, this.className))
			});
			if (l)
				for (t = (e || "").match(ue) || []; a > o; o++)
					if (n = this[o], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")) {
						for (s = 0; r = t[s++];)
							for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
						n.className = e ? le.trim(i) : ""
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
				i = "boolean" == typeof t;
			return le.isFunction(e) ? this.each(function(n) {
				le(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n)
					for (var r, s = 0, o = le(this), a = t, l = e.match(ue) || []; r = l[s++];) a = i ? a : !o.hasClass(r), o[a ? "addClass" : "removeClass"](r);
				else(n === U || "boolean" === n) && (this.className && le._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : le._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function(e) {
			var n, i, r, s = this[0];
			return arguments.length ? (r = le.isFunction(e), this.each(function(n) {
				var s, o = le(this);
				1 === this.nodeType && (s = r ? e.call(this, n, o.val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : le.isArray(s) && (s = le.map(s, function(e) {
					return null == e ? "" : e + ""
				})), (i = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, s, "value") !== t || (this.value = s))
			})) : s ? (i = le.valHooks[s.type] || le.valHooks[s.nodeName.toLowerCase()], i && "get" in i && (n = i.get(s, "value")) !== t ? n : (n = s.value, "string" == typeof n ? n.replace(_e, "") : null == n ? "" : n)) : void 0
		}
	}), le.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select: {
				get: function(e) {
					for (var t, n, i = e.options, r = e.selectedIndex, s = "select-one" === e.type || 0 > r, o = s ? null : [], a = s ? r + 1 : i.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
						if (n = i[l], !(!n.selected && l !== r || (le.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && le.nodeName(n.parentNode, "optgroup"))) {
							if (t = le(n).val(), s) return t;
							o.push(t)
						}
					return o
				},
				set: function(e, t) {
					var n = le.makeArray(t);
					return le(e).find("option").each(function() {
						this.selected = le.inArray(le(this).val(), n) >= 0
					}), n.length || (e.selectedIndex = -1), n
				}
			}
		},
		attr: function(e, n, i) {
			var r, s, o, a = e.nodeType;
			if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === U ? le.prop(e, n, i) : (s = 1 !== a || !le.isXMLDoc(e), s && (n = n.toLowerCase(), r = le.attrHooks[n] || (Pe.test(n) ? Te : Ee)), i === t ? r && s && "get" in r && null !== (o = r.get(e, n)) ? o : (typeof e.getAttribute !== U && (o = e.getAttribute(n)), null == o ? t : o) : null !== i ? r && s && "set" in r && (o = r.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : (le.removeAttr(e, n), t))
		},
		removeAttr: function(e, t) {
			var n, i, r = 0,
				s = t && t.match(ue);
			if (s && 1 === e.nodeType)
				for (; n = s[r++];) i = le.propFix[n] || n, Pe.test(n) ? !He && De.test(n) ? e[le.camelCase("default-" + n)] = e[i] = !1 : e[i] = !1 : le.attr(e, n, ""), e.removeAttribute(He ? n : i)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!le.support.radioValue && "radio" === t && le.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			for: "htmlFor",
			class: "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(e, n, i) {
			var r, s, o, a = e.nodeType;
			if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !le.isXMLDoc(e), o && (n = le.propFix[n] || n, s = le.propHooks[n]), i !== t ? s && "set" in s && (r = s.set(e, i, n)) !== t ? r : e[n] = i : s && "get" in s && null !== (r = s.get(e, n)) ? r : e[n]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var n = e.getAttributeNode("tabindex");
					return n && n.specified ? parseInt(n.value, 10) : Le.test(e.nodeName) || $e.test(e.nodeName) && e.href ? 0 : t
				}
			}
		}
	}), Te = {
		get: function(e, n) {
			var i = le.prop(e, n),
				r = "boolean" == typeof i && e.getAttribute(n),
				s = "boolean" == typeof i ? Oe && He ? null != r : De.test(n) ? e[le.camelCase("default-" + n)] : !!r : e.getAttributeNode(n);
			return s && !1 !== s.value ? n.toLowerCase() : t
		},
		set: function(e, t, n) {
			return !1 === t ? le.removeAttr(e, n) : Oe && He || !De.test(n) ? e.setAttribute(!He && le.propFix[n] || n, n) : e[le.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, Oe && He || (le.attrHooks.value = {
		get: function(e, n) {
			var i = e.getAttributeNode(n);
			return le.nodeName(e, "input") ? e.defaultValue : i && i.specified ? i.value : t
		},
		set: function(e, n, i) {
			return le.nodeName(e, "input") ? (e.defaultValue = n, t) : Ee && Ee.set(e, n, i)
		}
	}), He || (Ee = le.valHooks.button = {
		get: function(e, n) {
			var i = e.getAttributeNode(n);
			return i && ("id" === n || "name" === n || "coords" === n ? "" !== i.value : i.specified) ? i.value : t
		},
		set: function(e, n, i) {
			var r = e.getAttributeNode(i);
			return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
		}
	}, le.attrHooks.contenteditable = {
		get: Ee.get,
		set: function(e, t, n) {
			Ee.set(e, "" !== t && t, n)
		}
	}, le.each(["width", "height"], function(e, n) {
		le.attrHooks[n] = le.extend(le.attrHooks[n], {
			set: function(e, i) {
				return "" === i ? (e.setAttribute(n, "auto"), i) : t
			}
		})
	})), le.support.hrefNormalized || (le.each(["href", "src", "width", "height"], function(e, n) {
		le.attrHooks[n] = le.extend(le.attrHooks[n], {
			get: function(e) {
				var i = e.getAttribute(n, 2);
				return null == i ? t : i
			}
		})
	}), le.each(["href", "src"], function(e, t) {
		le.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	})), le.support.style || (le.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}), le.support.optSelected || (le.propHooks.selected = le.extend(le.propHooks.selected, {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	})), le.support.enctype || (le.propFix.enctype = "encoding"), le.support.checkOn || le.each(["radio", "checkbox"], function() {
		le.valHooks[this] = {
			get: function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			}
		}
	}), le.each(["radio", "checkbox"], function() {
		le.valHooks[this] = le.extend(le.valHooks[this], {
			set: function(e, n) {
				return le.isArray(n) ? e.checked = le.inArray(le(e).val(), n) >= 0 : t
			}
		})
	});
	var je = /^(?:input|select|textarea)$/i,
		Me = /^key/,
		Ie = /^(?:mouse|contextmenu)|click/,
		Be = /^(?:focusinfocus|focusoutblur)$/,
		Re = /^([^.]*)(?:\.(.+)|)$/;
	le.event = {
			global: {},
			add: function(e, n, i, r, s) {
				var o, a, l, c, u, p, h, f, d, m, g, y = le._data(e);
				if (y) {
					for (i.handler && (c = i, i = c.handler, s = c.selector), i.guid || (i.guid = le.guid++), (a = y.events) || (a = y.events = {}), (p = y.handle) || (p = y.handle = function(e) {
							return typeof le === U || e && le.event.triggered === e.type ? t : le.event.dispatch.apply(p.elem, arguments)
						}, p.elem = e), n = (n || "").match(ue) || [""], l = n.length; l--;) o = Re.exec(n[l]) || [], d = g = o[1], m = (o[2] || "").split(".").sort(), u = le.event.special[d] || {}, d = (s ? u.delegateType : u.bindType) || d, u = le.event.special[d] || {}, h = le.extend({
						type: d,
						origType: g,
						data: r,
						handler: i,
						guid: i.guid,
						selector: s,
						needsContext: s && le.expr.match.needsContext.test(s),
						namespace: m.join(".")
					}, c), (f = a[d]) || (f = a[d] = [], f.delegateCount = 0, u.setup && !1 !== u.setup.call(e, r, m, p) || (e.addEventListener ? e.addEventListener(d, p, !1) : e.attachEvent && e.attachEvent("on" + d, p))), u.add && (u.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)), s ? f.splice(f.delegateCount++, 0, h) : f.push(h), le.event.global[d] = !0;
					e = null
				}
			},
			remove: function(e, t, n, i, r) {
				var s, o, a, l, c, u, p, h, f, d, m, g = le.hasData(e) && le._data(e);
				if (g && (u = g.events)) {
					for (t = (t || "").match(ue) || [""], c = t.length; c--;)
						if (a = Re.exec(t[c]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f) {
							for (p = le.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, h = u[f] || [], a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;) o = h[s], !r && m !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, p.remove && p.remove.call(e, o));
							l && !h.length && (p.teardown && !1 !== p.teardown.call(e, d, g.handle) || le.removeEvent(e, f, g.handle), delete u[f])
						} else
							for (f in u) le.event.remove(e, f + t[c], n, i, !0);
					le.isEmptyObject(u) && (delete g.handle, le._removeData(e, "events"))
				}
			},
			trigger: function(n, i, r, s) {
				var o, a, l, c, u, p, h, f = [r || Y],
					d = oe.call(n, "type") ? n.type : n,
					m = oe.call(n, "namespace") ? n.namespace.split(".") : [];
				if (l = p = r = r || Y, 3 !== r.nodeType && 8 !== r.nodeType && !Be.test(d + le.event.triggered) && (d.indexOf(".") >= 0 && (m = d.split("."), d = m.shift(), m.sort()), a = 0 > d.indexOf(":") && "on" + d, n = n[le.expando] ? n : new le.Event(d, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : le.makeArray(i, [n]), u = le.event.special[d] || {}, s || !u.trigger || !1 !== u.trigger.apply(r, i))) {
					if (!s && !u.noBubble && !le.isWindow(r)) {
						for (c = u.delegateType || d, Be.test(c + d) || (l = l.parentNode); l; l = l.parentNode) f.push(l), p = l;
						p === (r.ownerDocument || Y) && f.push(p.defaultView || p.parentWindow || e)
					}
					for (h = 0;
						(l = f[h++]) && !n.isPropagationStopped();) n.type = h > 1 ? c : u.bindType || d, o = (le._data(l, "events") || {})[n.type] && le._data(l, "handle"), o && o.apply(l, i), (o = a && l[a]) && le.acceptData(l) && o.apply && !1 === o.apply(l, i) && n.preventDefault();
					if (n.type = d, !(s || n.isDefaultPrevented() || u._default && !1 !== u._default.apply(r.ownerDocument, i) || "click" === d && le.nodeName(r, "a") || !le.acceptData(r) || !a || !r[d] || le.isWindow(r))) {
						p = r[a], p && (r[a] = null), le.event.triggered = d;
						try {
							r[d]()
						} catch (e) {}
						le.event.triggered = t, p && (r[a] = p)
					}
					return n.result
				}
			},
			dispatch: function(e) {
				e = le.event.fix(e);
				var n, i, r, s, o, a = [],
					l = ie.call(arguments),
					c = (le._data(this, "events") || {})[e.type] || [],
					u = le.event.special[e.type] || {};
				if (l[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
					for (a = le.event.handlers.call(this, e, c), n = 0;
						(s = a[n++]) && !e.isPropagationStopped();)
						for (e.currentTarget = s.elem, o = 0;
							(r = s.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, (i = ((le.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) !== t && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
					return u.postDispatch && u.postDispatch.call(this, e), e.result
				}
			},
			handlers: function(e, n) {
				var i, r, s, o, a = [],
					l = n.delegateCount,
					c = e.target;
				if (l && c.nodeType && (!e.button || "click" !== e.type))
					for (; c != this; c = c.parentNode || this)
						if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
							for (s = [], o = 0; l > o; o++) r = n[o], i = r.selector + " ", s[i] === t && (s[i] = r.needsContext ? le(i, this).index(c) >= 0 : le.find(i, this, null, [c]).length), s[i] && s.push(r);
							s.length && a.push({
								elem: c,
								handlers: s
							})
						}
				return n.length > l && a.push({
					elem: this,
					handlers: n.slice(l)
				}), a
			},
			fix: function(e) {
				if (e[le.expando]) return e;
				var t, n, i, r = e.type,
					s = e,
					o = this.fixHooks[r];
				for (o || (this.fixHooks[r] = o = Ie.test(r) ? this.mouseHooks : Me.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new le.Event(s), t = i.length; t--;) n = i[t], e[n] = s[n];
				return e.target || (e.target = s.srcElement || Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(e, t) {
					return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(e, n) {
					var i, r, s, o = n.button,
						a = n.fromElement;
					return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || Y, s = r.documentElement, i = r.body, e.pageX = n.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || o === t || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
				}
			},
			special: {
				load: {
					noBubble: !0
				},
				click: {
					trigger: function() {
						return le.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
					}
				},
				focus: {
					trigger: function() {
						if (this !== Y.activeElement && this.focus) try {
							return this.focus(), !1
						} catch (e) {}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						return this === Y.activeElement && this.blur ? (this.blur(), !1) : t
					},
					delegateType: "focusout"
				},
				beforeunload: {
					postDispatch: function(e) {
						e.result !== t && (e.originalEvent.returnValue = e.result)
					}
				}
			},
			simulate: function(e, t, n, i) {
				var r = le.extend(new le.Event, n, {
					type: e,
					isSimulated: !0,
					originalEvent: {}
				});
				i ? le.event.trigger(r, null, t) : le.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
			}
		}, le.removeEvent = Y.removeEventListener ? function(e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n, !1)
		} : function(e, t, n) {
			var i = "on" + t;
			e.detachEvent && (typeof e[i] === U && (e[i] = null), e.detachEvent(i, n))
		}, le.Event = function(e, n) {
			return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? a : l) : this.type = e, n && le.extend(this, n), this.timeStamp = e && e.timeStamp || le.now(), this[le.expando] = !0, t) : new le.Event(e, n)
		}, le.Event.prototype = {
			isDefaultPrevented: l,
			isPropagationStopped: l,
			isImmediatePropagationStopped: l,
			preventDefault: function() {
				var e = this.originalEvent;
				this.isDefaultPrevented = a, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
			},
			stopPropagation: function() {
				var e = this.originalEvent;
				this.isPropagationStopped = a, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
			},
			stopImmediatePropagation: function() {
				this.isImmediatePropagationStopped = a, this.stopPropagation()
			}
		}, le.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function(e, t) {
			le.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function(e) {
					var n, i = this,
						r = e.relatedTarget,
						s = e.handleObj;
					return (!r || r !== i && !le.contains(i, r)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), le.support.submitBubbles || (le.event.special.submit = {
			setup: function() {
				return !le.nodeName(this, "form") && (le.event.add(this, "click._submit keypress._submit", function(e) {
					var n = e.target,
						i = le.nodeName(n, "input") || le.nodeName(n, "button") ? n.form : t;
					i && !le._data(i, "submitBubbles") && (le.event.add(i, "submit._submit", function(e) {
						e._submit_bubble = !0
					}), le._data(i, "submitBubbles", !0))
				}), t)
			},
			postDispatch: function(e) {
				e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0))
			},
			teardown: function() {
				return !le.nodeName(this, "form") && (le.event.remove(this, "._submit"), t)
			}
		}), le.support.changeBubbles || (le.event.special.change = {
			setup: function() {
				return je.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (le.event.add(this, "propertychange._change", function(e) {
					"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
				}), le.event.add(this, "click._change", function(e) {
					this._just_changed && !e.isTrigger && (this._just_changed = !1), le.event.simulate("change", this, e, !0)
				})), !1) : (le.event.add(this, "beforeactivate._change", function(e) {
					var t = e.target;
					je.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change", function(e) {
						!this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0)
					}), le._data(t, "changeBubbles", !0))
				}), t)
			},
			handle: function(e) {
				var n = e.target;
				return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
			},
			teardown: function() {
				return le.event.remove(this, "._change"), !je.test(this.nodeName)
			}
		}), le.support.focusinBubbles || le.each({
			focus: "focusin",
			blur: "focusout"
		}, function(e, t) {
			var n = 0,
				i = function(e) {
					le.event.simulate(t, e.target, le.event.fix(e), !0)
				};
			le.event.special[t] = {
				setup: function() {
					0 == n++ && Y.addEventListener(e, i, !0)
				},
				teardown: function() {
					0 == --n && Y.removeEventListener(e, i, !0)
				}
			}
		}), le.fn.extend({
			on: function(e, n, i, r, s) {
				var o, a;
				if ("object" == typeof e) {
					"string" != typeof n && (i = i || n, n = t);
					for (o in e) this.on(o, n, i, e[o], s);
					return this
				}
				if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), !1 === r) r = l;
				else if (!r) return this;
				return 1 === s && (a = r, r = function(e) {
					return le().off(e), a.apply(this, arguments)
				}, r.guid = a.guid || (a.guid = le.guid++)), this.each(function() {
					le.event.add(this, e, r, i, n)
				})
			},
			one: function(e, t, n, i) {
				return this.on(e, t, n, i, 1)
			},
			off: function(e, n, i) {
				var r, s;
				if (e && e.preventDefault && e.handleObj) return r = e.handleObj, le(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if ("object" == typeof e) {
					for (s in e) this.off(s, n, e[s]);
					return this
				}
				return (!1 === n || "function" == typeof n) && (i = n, n = t), !1 === i && (i = l), this.each(function() {
					le.event.remove(this, e, i, n)
				})
			},
			bind: function(e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function(e, t) {
				return this.off(e, null, t)
			},
			delegate: function(e, t, n, i) {
				return this.on(t, e, n, i)
			},
			undelegate: function(e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			},
			trigger: function(e, t) {
				return this.each(function() {
					le.event.trigger(e, t, this)
				})
			},
			triggerHandler: function(e, n) {
				var i = this[0];
				return i ? le.event.trigger(e, n, i, !0) : t
			}
		}),
		function(e, t) {
			function n(e) {
				return de.test(e + "")
			}

			function i() {
				var e, t = [];
				return e = function(n, i) {
					return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = i
				}
			}

			function r(e) {
				return e[R] = !0, e
			}

			function s(e) {
				var t = P.createElement("div");
				try {
					return e(t)
				} catch (e) {
					return !1
				} finally {
					t = null
				}
			}

			function o(e, t, n, i) {
				var r, s, o, a, l, c, u, f, d, m;
				if ((t ? t.ownerDocument || t : F) !== P && L(t), t = t || P, n = n || [], !e || "string" != typeof e) return n;
				if (1 !== (a = t.nodeType) && 9 !== a) return [];
				if (!H && !i) {
					if (r = me.exec(e))
						if (o = r[1]) {
							if (9 === a) {
								if (!(s = t.getElementById(o)) || !s.parentNode) return n;
								if (s.id === o) return n.push(s), n
							} else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && I(t, s) && s.id === o) return n.push(s), n
						} else {
							if (r[2]) return Q.apply(n, Z.call(t.getElementsByTagName(e), 0)), n;
							if ((o = r[3]) && q.getByClassName && t.getElementsByClassName) return Q.apply(n, Z.call(t.getElementsByClassName(o), 0)), n
						}
					if (q.qsa && !O.test(e)) {
						if (u = !0, f = R, d = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
							for (c = p(e), (u = t.getAttribute("id")) ? f = u.replace(ve, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + h(c[l]);
							d = fe.test(e) && t.parentNode || t, m = c.join(",")
						}
						if (m) try {
							return Q.apply(n, Z.call(d.querySelectorAll(m), 0)), n
						} catch (e) {} finally {
							u || t.removeAttribute("id")
						}
					}
				}
				return x(e.replace(ae, "$1"), t, n, i)
			}

			function a(e, t) {
				var n = t && e,
					i = n && (~t.sourceIndex || K) - (~e.sourceIndex || K);
				if (i) return i;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function l(e) {
				return function(t) {
					return "input" === t.nodeName.toLowerCase() && t.type === e
				}
			}

			function c(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function u(e) {
				return r(function(t) {
					return t = +t, r(function(n, i) {
						for (var r, s = e([], n.length, t), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
					})
				})
			}

			function p(e, t) {
				var n, i, r, s, a, l, c, u = X[e + " "];
				if (u) return t ? 0 : u.slice(0);
				for (a = e, l = [], c = C.preFilter; a;) {
					(!n || (i = $.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(r = [])), n = !1, (i = ce.exec(a)) && (n = i.shift(), r.push({
						value: n,
						type: i[0].replace(ae, " ")
					}), a = a.slice(n.length));
					for (s in C.filter) !(i = he[s].exec(a)) || c[s] && !(i = c[s](i)) || (n = i.shift(), r.push({
						value: n,
						type: s,
						matches: i
					}), a = a.slice(n.length));
					if (!n) break
				}
				return t ? a.length : a ? o.error(e) : X(e, l).slice(0)
			}

			function h(e) {
				for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
				return i
			}

			function f(e, t, n) {
				var i = t.dir,
					r = n && "parentNode" === i,
					s = V++;
				return t.first ? function(t, n, s) {
					for (; t = t[i];)
						if (1 === t.nodeType || r) return e(t, n, s)
				} : function(t, n, o) {
					var a, l, c, u = W + " " + s;
					if (o) {
						for (; t = t[i];)
							if ((1 === t.nodeType || r) && e(t, n, o)) return !0
					} else
						for (; t = t[i];)
							if (1 === t.nodeType || r)
								if (c = t[R] || (t[R] = {}), (l = c[i]) && l[0] === u) {
									if (!0 === (a = l[1]) || a === S) return !0 === a
								} else if (l = c[i] = [u], l[1] = e(t, n, o) || S, !0 === l[1]) return !0
				}
			}

			function d(e) {
				return e.length > 1 ? function(t, n, i) {
					for (var r = e.length; r--;)
						if (!e[r](t, n, i)) return !1;
					return !0
				} : e[0]
			}

			function m(e, t, n, i, r) {
				for (var s, o = [], a = 0, l = e.length, c = null != t; l > a; a++)(s = e[a]) && (!n || n(s, i, r)) && (o.push(s), c && t.push(a));
				return o
			}

			function g(e, t, n, i, s, o) {
				return i && !i[R] && (i = g(i)), s && !s[R] && (s = g(s, o)), r(function(r, o, a, l) {
					var c, u, p, h = [],
						f = [],
						d = o.length,
						g = r || b(t || "*", a.nodeType ? [a] : a, []),
						y = !e || !r && t ? g : m(g, h, e, a, l),
						v = n ? s || (r ? e : d || i) ? [] : o : y;
					if (n && n(y, v, a, l), i)
						for (c = m(v, f), i(c, [], a, l), u = c.length; u--;)(p = c[u]) && (v[f[u]] = !(y[f[u]] = p));
					if (r) {
						if (s || e) {
							if (s) {
								for (c = [], u = v.length; u--;)(p = v[u]) && c.push(y[u] = p);
								s(null, v = [], c, l)
							}
							for (u = v.length; u--;)(p = v[u]) && (c = s ? ee.call(r, p) : h[u]) > -1 && (r[c] = !(o[c] = p))
						}
					} else v = m(v === o ? v.splice(d, v.length) : v), s ? s(null, o, v, l) : Q.apply(o, v)
				})
			}

			function y(e) {
				for (var t, n, i, r = e.length, s = C.relative[e[0].type], o = s || C.relative[" "], a = s ? 1 : 0, l = f(function(e) {
						return e === t
					}, o, !0), c = f(function(e) {
						return ee.call(t, e) > -1
					}, o, !0), u = [function(e, n, i) {
						return !s && (i || n !== _) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
					}]; r > a; a++)
					if (n = C.relative[e[a].type]) u = [f(d(u), n)];
					else {
						if (n = C.filter[e[a].type].apply(null, e[a].matches), n[R]) {
							for (i = ++a; r > i && !C.relative[e[i].type]; i++);
							return g(a > 1 && d(u), a > 1 && h(e.slice(0, a - 1)).replace(ae, "$1"), n, i > a && y(e.slice(a, i)), r > i && y(e = e.slice(i)), r > i && h(e))
						}
						u.push(n)
					}
				return d(u)
			}

			function v(e, t) {
				var n = 0,
					i = t.length > 0,
					s = e.length > 0,
					a = function(r, a, l, c, u) {
						var p, h, f, d = [],
							g = 0,
							y = "0",
							v = r && [],
							b = null != u,
							x = _,
							k = r || s && C.find.TAG("*", u && a.parentNode || a),
							w = W += null == x ? 1 : Math.random() || .1;
						for (b && (_ = a !== P && a, S = n); null != (p = k[y]); y++) {
							if (s && p) {
								for (h = 0; f = e[h++];)
									if (f(p, a, l)) {
										c.push(p);
										break
									}
								b && (W = w, S = ++n)
							}
							i && ((p = !f && p) && g--, r && v.push(p))
						}
						if (g += y, i && y !== g) {
							for (h = 0; f = t[h++];) f(v, d, a, l);
							if (r) {
								if (g > 0)
									for (; y--;) v[y] || d[y] || (d[y] = G.call(c));
								d = m(d)
							}
							Q.apply(c, d), b && !r && d.length > 0 && g + t.length > 1 && o.uniqueSort(c)
						}
						return b && (W = w, _ = x), v
					};
				return i ? r(a) : a
			}

			function b(e, t, n) {
				for (var i = 0, r = t.length; r > i; i++) o(e, t[i], n);
				return n
			}

			function x(e, t, n, i) {
				var r, s, o, a, l, c = p(e);
				if (!i && 1 === c.length) {
					if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && 9 === t.nodeType && !H && C.relative[s[1].type]) {
						if (!(t = C.find.ID(o.matches[0].replace(xe, ke), t)[0])) return n;
						e = e.slice(s.shift().value.length)
					}
					for (r = he.needsContext.test(e) ? 0 : s.length; r-- && (o = s[r], !C.relative[a = o.type]);)
						if ((l = C.find[a]) && (i = l(o.matches[0].replace(xe, ke), fe.test(s[0].type) && t.parentNode || t))) {
							if (s.splice(r, 1), !(e = i.length && h(s))) return Q.apply(n, Z.call(i, 0)), n;
							break
						}
				}
				return T(e, c)(i, t, H, n, fe.test(e)), n
			}

			function k() {}
			var w, S, C, N, E, T, A, _, L, P, D, H, O, j, M, I, B, R = "sizzle" + -new Date,
				F = e.document,
				q = {},
				W = 0,
				V = 0,
				z = i(),
				X = i(),
				U = i(),
				Y = typeof t,
				K = 1 << 31,
				J = [],
				G = J.pop,
				Q = J.push,
				Z = J.slice,
				ee = J.indexOf || function(e) {
					for (var t = 0, n = this.length; n > t; t++)
						if (this[t] === e) return t;
					return -1
				},
				te = "[\\x20\\t\\r\\n\\f]",
				ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				ie = ne.replace("w", "w#"),
				re = "([*^$|!~]?=)",
				se = "\\[" + te + "*(" + ne + ")" + te + "*(?:" + re + te + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ie + ")|)|)" + te + "*\\]",
				oe = ":(" + ne + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)",
				ae = RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
				$ = RegExp("^" + te + "*," + te + "*"),
				ce = RegExp("^" + te + "*([\\x20\\t\\r\\n\\f>+~])" + te + "*"),
				ue = RegExp(oe),
				pe = RegExp("^" + ie + "$"),
				he = {
					ID: RegExp("^#(" + ne + ")"),
					CLASS: RegExp("^\\.(" + ne + ")"),
					NAME: RegExp("^\\[name=['\"]?(" + ne + ")['\"]?\\]"),
					TAG: RegExp("^(" + ne.replace("w", "w*") + ")"),
					ATTR: RegExp("^" + se),
					PSEUDO: RegExp("^" + oe),
					CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
					needsContext: RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
				},
				fe = /[\x20\t\r\n\f]*[+~]/,
				de = /^[^{]+\{\s*\[native code/,
				me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ge = /^(?:input|select|textarea|button)$/i,
				ye = /^h\d$/i,
				ve = /'|\\/g,
				be = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
				xe = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
				ke = function(e, t) {
					var n = "0x" + t - 65536;
					return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
				};
			try {
				Z.call(F.documentElement.childNodes, 0)[0].nodeType
			} catch (e) {
				Z = function(e) {
					for (var t, n = []; t = this[e++];) n.push(t);
					return n
				}
			}
			E = o.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, L = o.setDocument = function(e) {
				var i = e ? e.ownerDocument || e : F;
				return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, D = i.documentElement, H = E(i), q.tagNameNoComments = s(function(e) {
					return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
				}), q.attributes = s(function(e) {
					e.innerHTML = "<select></select>";
					var t = typeof e.lastChild.getAttribute("multiple");
					return "boolean" !== t && "string" !== t
				}), q.getByClassName = s(function(e) {
					return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length)
				}), q.getByName = s(function(e) {
					e.id = R + 0, e.innerHTML = "<a name='" + R + "'></a><div name='" + R + "'></div>", D.insertBefore(e, D.firstChild);
					var t = i.getElementsByName && i.getElementsByName(R).length === 2 + i.getElementsByName(R + 0).length;
					return q.getIdNotName = !i.getElementById(R), D.removeChild(e), t
				}), C.attrHandle = s(function(e) {
					return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== Y && "#" === e.firstChild.getAttribute("href")
				}) ? {} : {
					href: function(e) {
						return e.getAttribute("href", 2)
					},
					type: function(e) {
						return e.getAttribute("type")
					}
				}, q.getIdNotName ? (C.find.ID = function(e, t) {
					if (typeof t.getElementById !== Y && !H) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, C.filter.ID = function(e) {
					var t = e.replace(xe, ke);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (C.find.ID = function(e, n) {
					if (typeof n.getElementById !== Y && !H) {
						var i = n.getElementById(e);
						return i ? i.id === e || typeof i.getAttributeNode !== Y && i.getAttributeNode("id").value === e ? [i] : t : []
					}
				}, C.filter.ID = function(e) {
					var t = e.replace(xe, ke);
					return function(e) {
						var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), C.find.TAG = q.tagNameNoComments ? function(e, n) {
					return typeof n.getElementsByTagName !== Y ? n.getElementsByTagName(e) : t
				} : function(e, t) {
					var n, i = [],
						r = 0,
						s = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = s[r++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return s
				}, C.find.NAME = q.getByName && function(e, n) {
					return typeof n.getElementsByName !== Y ? n.getElementsByName(name) : t
				}, C.find.CLASS = q.getByClassName && function(e, n) {
					return typeof n.getElementsByClassName === Y || H ? t : n.getElementsByClassName(e)
				}, j = [], O = [":focus"], (q.qsa = n(i.querySelectorAll)) && (s(function(e) {
					e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || O.push("\\[" + te + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || O.push(":checked")
				}), s(function(e) {
					e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && O.push("[*^$]=" + te + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
				})), (q.matchesSelector = n(M = D.matchesSelector || D.mozMatchesSelector || D.webkitMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && s(function(e) {
					q.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), j.push("!=", oe)
				}), O = RegExp(O.join("|")), j = RegExp(j.join("|")), I = n(D.contains) || D.compareDocumentPosition ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						i = t && t.parentNode;
					return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
				} : function(e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, B = D.compareDocumentPosition ? function(e, t) {
					var n;
					return e === t ? (A = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === i || I(F, e) ? -1 : t === i || I(F, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
				} : function(e, t) {
					var n, r = 0,
						s = e.parentNode,
						o = t.parentNode,
						l = [e],
						c = [t];
					if (e === t) return A = !0, 0;
					if (!s || !o) return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : 0;
					if (s === o) return a(e, t);
					for (n = e; n = n.parentNode;) l.unshift(n);
					for (n = t; n = n.parentNode;) c.unshift(n);
					for (; l[r] === c[r];) r++;
					return r ? a(l[r], c[r]) : l[r] === F ? -1 : c[r] === F ? 1 : 0
				}, A = !1, [0, 0].sort(B), q.detectDuplicates = A, P) : P
			}, o.matches = function(e, t) {
				return o(e, null, null, t)
			}, o.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== P && L(e), t = t.replace(be, "='$1']"), !(!q.matchesSelector || H || j && j.test(t) || O.test(t))) try {
					var n = M.call(e, t);
					if (n || q.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (e) {}
				return o(t, P, null, [e]).length > 0
			}, o.contains = function(e, t) {
				return (e.ownerDocument || e) !== P && L(e), I(e, t)
			}, o.attr = function(e, t) {
				var n;
				return (e.ownerDocument || e) !== P && L(e), H || (t = t.toLowerCase()), (n = C.attrHandle[t]) ? n(e) : H || q.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && !0 === e[t] ? t : n && n.specified ? n.value : null
			}, o.error = function(e) {
				throw Error("Syntax error, unrecognized expression: " + e)
			}, o.uniqueSort = function(e) {
				var t, n = [],
					i = 1,
					r = 0;
				if (A = !q.detectDuplicates, e.sort(B), A) {
					for (; t = e[i]; i++) t === e[i - 1] && (r = n.push(i));
					for (; r--;) e.splice(n[r], 1)
				}
				return e
			}, N = o.getText = function(e) {
				var t, n = "",
					i = 0,
					r = e.nodeType;
				if (r) {
					if (1 === r || 9 === r || 11 === r) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += N(e)
					} else if (3 === r || 4 === r) return e.nodeValue
				} else
					for (; t = e[i]; i++) n += N(t);
				return n
			}, C = o.selectors = {
				cacheLength: 50,
				createPseudo: r,
				match: he,
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(xe, ke), e[3] = (e[4] || e[5] || "").replace(xe, ke), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || o.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && o.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[5] && e[2];
						return he.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ue.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						return "*" === e ? function() {
							return !0
						} : (e = e.replace(xe, ke).toLowerCase(), function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						})
					},
					CLASS: function(e) {
						var t = z[e + " "];
						return t || (t = RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && z(e, function(e) {
							return t.test(e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, t, n) {
						return function(i) {
							var r = o.attr(i, e);
							return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
						}
					},
					CHILD: function(e, t, n, i, r) {
						var s = "nth" !== e.slice(0, 3),
							o = "last" !== e.slice(-4),
							a = "of-type" === t;
						return 1 === i && 0 === r ? function(e) {
							return !!e.parentNode
						} : function(t, n, l) {
							var c, u, p, h, f, d, m = s !== o ? "nextSibling" : "previousSibling",
								g = t.parentNode,
								y = a && t.nodeName.toLowerCase(),
								v = !l && !a;
							if (g) {
								if (s) {
									for (; m;) {
										for (p = t; p = p[m];)
											if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
										d = m = "only" === e && !d && "nextSibling"
									}
									return !0
								}
								if (d = [o ? g.firstChild : g.lastChild], o && v) {
									for (u = g[R] || (g[R] = {}), c = u[e] || [], f = c[0] === W && c[1], h = c[0] === W && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (h = f = 0) || d.pop();)
										if (1 === p.nodeType && ++h && p === t) {
											u[e] = [W, f, h];
											break
										}
								} else if (v && (c = (t[R] || (t[R] = {}))[e]) && c[0] === W) h = c[1];
								else
									for (;
										(p = ++f && p && p[m] || (h = f = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++h || (v && ((p[R] || (p[R] = {}))[e] = [W, h]), p !== t)););
								return (h -= r) === i || 0 == h % i && h / i >= 0
							}
						}
					},
					PSEUDO: function(e, t) {
						var n, i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e);
						return i[R] ? i(t) : i.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, n) {
							for (var r, s = i(e, t), o = s.length; o--;) r = ee.call(e, s[o]), e[r] = !(n[r] = s[o])
						}) : function(e) {
							return i(e, 0, n)
						}) : i
					}
				},
				pseudos: {
					not: r(function(e) {
						var t = [],
							n = [],
							i = T(e.replace(ae, "$1"));
						return i[R] ? r(function(e, t, n, r) {
							for (var s, o = i(e, null, r, []), a = e.length; a--;)(s = o[a]) && (e[a] = !(t[a] = s))
						}) : function(e, r, s) {
							return t[0] = e, i(t, null, s, n), !n.pop()
						}
					}),
					has: r(function(e) {
						return function(t) {
							return o(e, t).length > 0
						}
					}),
					contains: r(function(e) {
						return function(t) {
							return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
						}
					}),
					lang: r(function(e) {
						return pe.test(e || "") || o.error("unsupported lang: " + e), e = e.replace(xe, ke).toLowerCase(),
							function(t) {
								var n;
								do {
									if (n = H ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === D
					},
					focus: function(e) {
						return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return !1 === e.disabled
					},
					disabled: function(e) {
						return !0 === e.disabled
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
						return !0
					},
					parent: function(e) {
						return !C.pseudos.empty(e)
					},
					header: function(e) {
						return ye.test(e.nodeName)
					},
					input: function(e) {
						return ge.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
					},
					first: u(function() {
						return [0]
					}),
					last: u(function(e, t) {
						return [t - 1]
					}),
					eq: u(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: u(function(e, t) {
						for (var n = 0; t > n; n += 2) e.push(n);
						return e
					}),
					odd: u(function(e, t) {
						for (var n = 1; t > n; n += 2) e.push(n);
						return e
					}),
					lt: u(function(e, t, n) {
						for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
						return e
					}),
					gt: u(function(e, t, n) {
						for (var i = 0 > n ? n + t : n; t > ++i;) e.push(i);
						return e
					})
				}
			};
			for (w in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) C.pseudos[w] = l(w);
			for (w in {
					submit: !0,
					reset: !0
				}) C.pseudos[w] = c(w);
			T = o.compile = function(e, t) {
				var n, i = [],
					r = [],
					s = U[e + " "];
				if (!s) {
					for (t || (t = p(e)), n = t.length; n--;) s = y(t[n]), s[R] ? i.push(s) : r.push(s);
					s = U(e, v(r, i))
				}
				return s
			}, C.pseudos.nth = C.pseudos.eq, C.filters = k.prototype = C.pseudos, C.setFilters = new k, L(), o.attr = le.attr, le.find = o, le.expr = o.selectors, le.expr[":"] = le.expr.pseudos, le.unique = o.uniqueSort, le.text = o.getText, le.isXMLDoc = o.isXML, le.contains = o.contains
		}(e);
	var Fe = /Until$/,
		qe = /^(?:parents|prev(?:Until|All))/,
		We = /^.[^:#\[\.,]*$/,
		Ve = le.expr.match.needsContext,
		ze = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	le.fn.extend({
		find: function(e) {
			var t, n, i, r = this.length;
			if ("string" != typeof e) return i = this, this.pushStack(le(e).filter(function() {
				for (t = 0; r > t; t++)
					if (le.contains(i[t], this)) return !0
			}));
			for (n = [], t = 0; r > t; t++) le.find(e, this[t], n);
			return n = this.pushStack(r > 1 ? le.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
		},
		has: function(e) {
			var t, n = le(e, this),
				i = n.length;
			return this.filter(function() {
				for (t = 0; i > t; t++)
					if (le.contains(this, n[t])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(u(this, e, !1))
		},
		filter: function(e) {
			return this.pushStack(u(this, e, !0))
		},
		is: function(e) {
			return !!e && ("string" == typeof e ? Ve.test(e) ? le(e, this.context).index(this[0]) >= 0 : le.filter(e, this).length > 0 : this.filter(e).length > 0)
		},
		closest: function(e, t) {
			for (var n, i = 0, r = this.length, s = [], o = Ve.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; r > i; i++)
				for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
					if (o ? o.index(n) > -1 : le.find.matchesSelector(n, e)) {
						s.push(n);
						break
					}
					n = n.parentNode
				}
			return this.pushStack(s.length > 1 ? le.unique(s) : s)
		},
		index: function(e) {
			return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? le(e, t) : le.makeArray(e && e.nodeType ? [e] : e),
				i = le.merge(this.get(), n);
			return this.pushStack(le.unique(i))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), le.fn.andSelf = le.fn.addBack, le.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return le.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return le.dir(e, "parentNode", n)
		},
		next: function(e) {
			return c(e, "nextSibling")
		},
		prev: function(e) {
			return c(e, "previousSibling")
		},
		nextAll: function(e) {
			return le.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return le.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return le.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return le.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return le.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return le.sibling(e.firstChild)
		},
		contents: function(e) {
			return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : le.merge([], e.childNodes)
		}
	}, function(e, t) {
		le.fn[e] = function(n, i) {
			var r = le.map(this, t, n);
			return Fe.test(e) || (i = n), i && "string" == typeof i && (r = le.filter(i, r)), r = this.length > 1 && !ze[e] ? le.unique(r) : r, this.length > 1 && qe.test(e) && (r = r.reverse()), this.pushStack(r)
		}
	}), le.extend({
		filter: function(e, t, n) {
			return n && (e = ":not(" + e + ")"), 1 === t.length ? le.find.matchesSelector(t[0], e) ? [t[0]] : [] : le.find.matches(e, t)
		},
		dir: function(e, n, i) {
			for (var r = [], s = e[n]; s && 9 !== s.nodeType && (i === t || 1 !== s.nodeType || !le(s).is(i));) 1 === s.nodeType && r.push(s), s = s[n];
			return r
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});
	var Xe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Ue = / jQuery\d+="(?:null|\d+)"/g,
		Ye = RegExp("<(?:" + Xe + ")[\\s/>]", "i"),
		Ke = /^\s+/,
		Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Ge = /<([\w:]+)/,
		Qe = /<tbody/i,
		Ze = /<|&#?\w+;/,
		et = /<(?:script|style|link)/i,
		tt = /^(?:checkbox|radio)$/i,
		nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		it = /^$|\/(?:java|ecma)script/i,
		rt = /^true\/(.*)/,
		st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		ot = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: le.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		at = p(Y),
		lt = at.appendChild(Y.createElement("div"));
	ot.optgroup = ot.option, ot.tbody = ot.tfoot = ot.colgroup = ot.caption = ot.thead, ot.th = ot.td, le.fn.extend({
		text: function(e) {
			return le.access(this, function(e) {
				return e === t ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
			}, null, e, arguments.length)
		},
		wrapAll: function(e) {
			if (le.isFunction(e)) return this.each(function(t) {
				le(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return le.isFunction(e) ? this.each(function(t) {
				le(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = le(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = le.isFunction(e);
			return this.each(function(n) {
				le(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(e) {
				(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(e) {
				(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
			})
		},
		before: function() {
			return this.domManip(arguments, !1, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, !1, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, i = 0; null != (n = this[i]); i++)(!e || le.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || le.cleanData(v(n)), n.parentNode && (t && le.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n)));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && le.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && le.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return le.clone(this, e, t)
			})
		},
		html: function(e) {
			return le.access(this, function(e) {
				var n = this[0] || {},
					i = 0,
					r = this.length;
				if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ue, "") : t;
				if (!("string" != typeof e || et.test(e) || !le.support.htmlSerialize && Ye.test(e) || !le.support.leadingWhitespace && Ke.test(e) || ot[(Ge.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(Je, "<$1></$2>");
					try {
						for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (le.cleanData(v(n, !1)), n.innerHTML = e);
						n = 0
					} catch (e) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function(e) {
			return le.isFunction(e) || "string" == typeof e || (e = le(e).not(this).detach()), this.domManip([e], !0, function(e) {
				var t = this.nextSibling,
					n = this.parentNode;
				n && (le(this).remove(), n.insertBefore(e, t))
			})
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, n, i) {
			e = te.apply([], e);
			var r, s, o, a, l, c, u = 0,
				p = this.length,
				m = this,
				g = p - 1,
				y = e[0],
				b = le.isFunction(y);
			if (b || !(1 >= p || "string" != typeof y || le.support.checkClone) && nt.test(y)) return this.each(function(r) {
				var s = m.eq(r);
				b && (e[0] = y.call(this, r, n ? s.html() : t)), s.domManip(e, n, i)
			});
			if (p && (c = le.buildFragment(e, this[0].ownerDocument, !1, this), r = c.firstChild, 1 === c.childNodes.length && (c = r), r)) {
				for (n = n && le.nodeName(r, "tr"), a = le.map(v(c, "script"), f), o = a.length; p > u; u++) s = c, u !== g && (s = le.clone(s, !0, !0), o && le.merge(a, v(s, "script"))), i.call(n && le.nodeName(this[u], "table") ? h(this[u], "tbody") : this[u], s, u);
				if (o)
					for (l = a[a.length - 1].ownerDocument, le.map(a, d), u = 0; o > u; u++) s = a[u], it.test(s.type || "") && !le._data(s, "globalEval") && le.contains(l, s) && (s.src ? le.ajax({
						url: s.src,
						type: "GET",
						dataType: "script",
						async: !1,
						global: !1,
						throws: !0
					}) : le.globalEval((s.text || s.textContent || s.innerHTML || "").replace(st, "")));
				c = r = null
			}
			return this
		}
	}), le.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		le.fn[e] = function(e) {
			for (var n, i = 0, r = [], s = le(e), o = s.length - 1; o >= i; i++) n = i === o ? this : this.clone(!0), le(s[i])[t](n), ne.apply(r, n.get());
			return this.pushStack(r)
		}
	}), le.extend({
		clone: function(e, t, n) {
			var i, r, s, o, a, l = le.contains(e.ownerDocument, e);
			if (le.support.html5Clone || le.isXMLDoc(e) || !Ye.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(s = lt.firstChild)), !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
				for (i = v(s), a = v(e), o = 0; null != (r = a[o]); ++o) i[o] && y(r, i[o]);
			if (t)
				if (n)
					for (a = a || v(e), i = i || v(s), o = 0; null != (r = a[o]); o++) g(r, i[o]);
				else g(e, s);
			return i = v(s, "script"), i.length > 0 && m(i, !l && v(e, "script")), i = a = r = null, s
		},
		buildFragment: function(e, t, n, i) {
			for (var r, s, o, a, l, c, u, h = e.length, f = p(t), d = [], g = 0; h > g; g++)
				if ((s = e[g]) || 0 === s)
					if ("object" === le.type(s)) le.merge(d, s.nodeType ? [s] : s);
					else if (Ze.test(s)) {
				for (a = a || f.appendChild(t.createElement("div")), l = (Ge.exec(s) || ["", ""])[1].toLowerCase(), u = ot[l] || ot._default, a.innerHTML = u[1] + s.replace(Je, "<$1></$2>") + u[2], r = u[0]; r--;) a = a.lastChild;
				if (!le.support.leadingWhitespace && Ke.test(s) && d.push(t.createTextNode(Ke.exec(s)[0])), !le.support.tbody)
					for (s = "table" !== l || Qe.test(s) ? "<table>" !== u[1] || Qe.test(s) ? 0 : a : a.firstChild, r = s && s.childNodes.length; r--;) le.nodeName(c = s.childNodes[r], "tbody") && !c.childNodes.length && s.removeChild(c);
				for (le.merge(d, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
				a = f.lastChild
			} else d.push(t.createTextNode(s));
			for (a && f.removeChild(a), le.support.appendChecked || le.grep(v(d, "input"), b), g = 0; s = d[g++];)
				if ((!i || -1 === le.inArray(s, i)) && (o = le.contains(s.ownerDocument, s), a = v(f.appendChild(s), "script"), o && m(a), n))
					for (r = 0; s = a[r++];) it.test(s.type || "") && n.push(s);
			return a = null, f
		},
		cleanData: function(e, t) {
			for (var n, i, r, s, o = 0, a = le.expando, l = le.cache, c = le.support.deleteExpando, u = le.event.special; null != (n = e[o]); o++)
				if ((t || le.acceptData(n)) && (r = n[a], s = r && l[r])) {
					if (s.events)
						for (i in s.events) u[i] ? le.event.remove(n, i) : le.removeEvent(n, i, s.handle);
					l[r] && (delete l[r], c ? delete n[a] : typeof n.removeAttribute !== U ? n.removeAttribute(a) : n[a] = null, Z.push(r))
				}
		}
	});
	var ct, ut, pt, ht = /alpha\([^)]*\)/i,
		ft = /opacity\s*=\s*([^)]*)/,
		dt = /^(top|right|bottom|left)$/,
		mt = /^(none|table(?!-c[ea]).+)/,
		gt = /^margin/,
		yt = RegExp("^(" + ce + ")(.*)$", "i"),
		vt = RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
		bt = RegExp("^([+-])=(" + ce + ")", "i"),
		xt = {
			BODY: "block"
		},
		kt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		wt = {
			letterSpacing: 0,
			fontWeight: 400
		},
		St = ["Top", "Right", "Bottom", "Left"],
		Ct = ["Webkit", "O", "Moz", "ms"];
	le.fn.extend({
		css: function(e, n) {
			return le.access(this, function(e, n, i) {
				var r, s, o = {},
					a = 0;
				if (le.isArray(n)) {
					for (s = ut(e), r = n.length; r > a; a++) o[n[a]] = le.css(e, n[a], !1, s);
					return o
				}
				return i !== t ? le.style(e, n, i) : le.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function() {
			return w(this, !0)
		},
		hide: function() {
			return w(this)
		},
		toggle: function(e) {
			var t = "boolean" == typeof e;
			return this.each(function() {
				(t ? e : k(this)) ? le(this).show(): le(this).hide()
			})
		}
	}), le.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = pt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: le.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, i, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var s, o, a, l = le.camelCase(n),
					c = e.style;
				if (n = le.cssProps[l] || (le.cssProps[l] = x(c, l)), a = le.cssHooks[n] || le.cssHooks[l], i === t) return a && "get" in a && (s = a.get(e, !1, r)) !== t ? s : c[n];
				if (o = typeof i, "string" === o && (s = bt.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(le.css(e, n)), o = "number"), !(null == i || "number" === o && isNaN(i) || ("number" !== o || le.cssNumber[l] || (i += "px"), le.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), a && "set" in a && (i = a.set(e, i, r)) === t))) try {
					c[n] = i
				} catch (e) {}
			}
		},
		css: function(e, n, i, r) {
			var s, o, a, l = le.camelCase(n);
			return n = le.cssProps[l] || (le.cssProps[l] = x(e.style, l)), a = le.cssHooks[n] || le.cssHooks[l], a && "get" in a && (o = a.get(e, !0, i)), o === t && (o = pt(e, n, r)), "normal" === o && n in wt && (o = wt[n]), "" === i || i ? (s = parseFloat(o), !0 === i || le.isNumeric(s) ? s || 0 : o) : o
		},
		swap: function(e, t, n, i) {
			var r, s, o = {};
			for (s in t) o[s] = e.style[s], e.style[s] = t[s];
			r = n.apply(e, i || []);
			for (s in t) e.style[s] = o[s];
			return r
		}
	}), e.getComputedStyle ? (ut = function(t) {
		return e.getComputedStyle(t, null)
	}, pt = function(e, n, i) {
		var r, s, o, a = i || ut(e),
			l = a ? a.getPropertyValue(n) || a[n] : t,
			c = e.style;
		return a && ("" !== l || le.contains(e.ownerDocument, e) || (l = le.style(e, n)), vt.test(l) && gt.test(n) && (r = c.width, s = c.minWidth, o = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = r, c.minWidth = s, c.maxWidth = o)), l
	}) : Y.documentElement.currentStyle && (ut = function(e) {
		return e.currentStyle
	}, pt = function(e, n, i) {
		var r, s, o, a = i || ut(e),
			l = a ? a[n] : t,
			c = e.style;
		return null == l && c && c[n] && (l = c[n]), vt.test(l) && !dt.test(n) && (r = c.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = r, o && (s.left = o)), "" === l ? "auto" : l
	}), le.each(["height", "width"], function(e, n) {
		le.cssHooks[n] = {
			get: function(e, i, r) {
				return i ? 0 === e.offsetWidth && mt.test(le.css(e, "display")) ? le.swap(e, kt, function() {
					return N(e, n, r)
				}) : N(e, n, r) : t
			},
			set: function(e, t, i) {
				var r = i && ut(e);
				return S(e, t, i ? C(e, n, i, le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, r), r) : 0)
			}
		}
	}), le.support.opacity || (le.cssHooks.opacity = {
		get: function(e, t) {
			return ft.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				i = e.currentStyle,
				r = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				s = i && i.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === le.trim(s.replace(ht, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ht.test(s) ? s.replace(ht, r) : s + " " + r)
		}
	}), le(function() {
		le.support.reliableMarginRight || (le.cssHooks.marginRight = {
			get: function(e, n) {
				return n ? le.swap(e, {
					display: "inline-block"
				}, pt, [e, "marginRight"]) : t
			}
		}), !le.support.pixelPosition && le.fn.position && le.each(["top", "left"], function(e, n) {
			le.cssHooks[n] = {
				get: function(e, i) {
					return i ? (i = pt(e, n), vt.test(i) ? le(e).position()[n] + "px" : i) : t
				}
			}
		})
	}), le.expr && le.expr.filters && (le.expr.filters.hidden = function(e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !le.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || le.css(e, "display"))
	}, le.expr.filters.visible = function(e) {
		return !le.expr.filters.hidden(e)
	}), le.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		le.cssHooks[e + t] = {
			expand: function(n) {
				for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + St[i] + t] = s[i] || s[i - 2] || s[0];
				return r
			}
		}, gt.test(e) || (le.cssHooks[e + t].set = S)
	});
	var Nt = /%20/g,
		Et = /\[\]$/,
		Tt = /\r?\n/g,
		At = /^(?:submit|button|image|reset|file)$/i,
		_t = /^(?:input|select|textarea|keygen)/i;
	le.fn.extend({
		serialize: function() {
			return le.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = le.prop(this, "elements");
				return e ? le.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !le(this).is(":disabled") && _t.test(this.nodeName) && !At.test(e) && (this.checked || !tt.test(e))
			}).map(function(e, t) {
				var n = le(this).val();
				return null == n ? null : le.isArray(n) ? le.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Tt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Tt, "\r\n")
				}
			}).get()
		}
	}), le.param = function(e, n) {
		var i, r = [],
			s = function(e, t) {
				t = le.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e, function() {
			s(this.name, this.value)
		});
		else
			for (i in e) A(i, e[i], n, s);
		return r.join("&").replace(Nt, "+")
	}, le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		le.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), le.fn.hover = function(e, t) {
		return this.mouseenter(e).mouseleave(t || e)
	};
	var Lt, $t, Pt = le.now(),
		Dt = /\?/,
		Ht = /#.*$/,
		Ot = /([?&])_=[^&]*/,
		jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		It = /^(?:GET|HEAD)$/,
		Bt = /^\/\//,
		Rt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Ft = le.fn.load,
		qt = {},
		Wt = {},
		Vt = "*/".concat("*");
	try {
		$t = K.href
	} catch (e) {
		$t = Y.createElement("a"), $t.href = "", $t = $t.href
	}
	Lt = Rt.exec($t.toLowerCase()) || [], le.fn.load = function(e, n, i) {
		if ("string" != typeof e && Ft) return Ft.apply(this, arguments);
		var r, s, o, a = this,
			l = e.indexOf(" ");
		return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), le.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (o = "POST"), a.length > 0 && le.ajax({
			url: e,
			type: o,
			dataType: "html",
			data: n
		}).done(function(e) {
			s = arguments, a.html(r ? le("<div>").append(le.parseHTML(e)).find(r) : e)
		}).complete(i && function(e, t) {
			a.each(i, s || [e.responseText, t, e])
		}), this
	}, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		le.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), le.each(["get", "post"], function(e, n) {
		le[n] = function(e, i, r, s) {
			return le.isFunction(i) && (s = s || r, r = i, i = t), le.ajax({
				url: e,
				type: n,
				dataType: s,
				data: i,
				success: r
			})
		}
	}), le.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: $t,
			type: "GET",
			isLocal: Mt.test(Lt[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Vt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": e.String,
				"text html": !0,
				"text json": le.parseJSON,
				"text xml": le.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? P(P(e, le.ajaxSettings), t) : P(le.ajaxSettings, e)
		},
		ajaxPrefilter: _(qt),
		ajaxTransport: _(Wt),
		ajax: function(e, n) {
			function i(e, n, i, r) {
				var s, p, v, b, k, S = n;
				2 !== x && (x = 2, l && clearTimeout(l), u = t, a = r || "", w.readyState = e > 0 ? 4 : 0, i && (b = D(h, w, i)), e >= 200 && 300 > e || 304 === e ? (h.ifModified && (k = w.getResponseHeader("Last-Modified"), k && (le.lastModified[o] = k), (k = w.getResponseHeader("etag")) && (le.etag[o] = k)), 204 === e ? (s = !0, S = "nocontent") : 304 === e ? (s = !0, S = "notmodified") : (s = H(h, b), S = s.state, p = s.data, v = s.error, s = !v)) : (v = S, (e || !S) && (S = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || S) + "", s ? m.resolveWith(f, [p, S, w]) : m.rejectWith(f, [w, S, v]), w.statusCode(y), y = t, c && d.trigger(s ? "ajaxSuccess" : "ajaxError", [w, h, s ? p : v]), g.fireWith(f, [w, S]), c && (d.trigger("ajaxComplete", [w, h]), --le.active || le.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, s, o, a, l, c, u, p, h = le.ajaxSetup({}, n),
				f = h.context || h,
				d = h.context && (f.nodeType || f.jquery) ? le(f) : le.event,
				m = le.Deferred(),
				g = le.Callbacks("once memory"),
				y = h.statusCode || {},
				v = {},
				b = {},
				x = 0,
				k = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === x) {
							if (!p)
								for (p = {}; t = jt.exec(a);) p[t[1].toLowerCase()] = t[2];
							t = p[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === x ? a : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return x || (e = b[n] = b[n] || e, v[e] = t), this
					},
					overrideMimeType: function(e) {
						return x || (h.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > x)
								for (t in e) y[t] = [y[t], e[t]];
							else w.always(e[w.status]);
						return this
					},
					abort: function(e) {
						var t = e || k;
						return u && u.abort(t), i(0, t), this
					}
				};
			if (m.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, h.url = ((e || h.url || $t) + "").replace(Ht, "").replace(Bt, Lt[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = le.trim(h.dataType || "*").toLowerCase().match(ue) || [""], null == h.crossDomain && (r = Rt.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === Lt[1] && r[2] === Lt[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (Lt[3] || ("http:" === Lt[1] ? 80 : 443)))), h.data && h.processData && "string" != typeof h.data && (h.data = le.param(h.data, h.traditional)), L(qt, h, n, w), 2 === x) return w;
			c = h.global, c && 0 == le.active++ && le.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !It.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (Dt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = Ot.test(o) ? o.replace(Ot, "$1_=" + Pt++) : o + (Dt.test(o) ? "&" : "?") + "_=" + Pt++)), h.ifModified && (le.lastModified[o] && w.setRequestHeader("If-Modified-Since", le.lastModified[o]), le.etag[o] && w.setRequestHeader("If-None-Match", le.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : h.accepts["*"]);
			for (s in h.headers) w.setRequestHeader(s, h.headers[s]);
			if (h.beforeSend && (!1 === h.beforeSend.call(f, w, h) || 2 === x)) return w.abort();
			k = "abort";
			for (s in {
					success: 1,
					error: 1,
					complete: 1
				}) w[s](h[s]);
			if (u = L(Wt, h, n, w)) {
				w.readyState = 1, c && d.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (l = setTimeout(function() {
					w.abort("timeout")
				}, h.timeout));
				try {
					x = 1, u.send(v, i)
				} catch (e) {
					if (!(2 > x)) throw e;
					i(-1, e)
				}
			} else i(-1, "No Transport");
			return w
		},
		getScript: function(e, n) {
			return le.get(e, t, n, "script")
		},
		getJSON: function(e, t, n) {
			return le.get(e, t, n, "json")
		}
	}), le.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return le.globalEval(e), e
			}
		}
	}), le.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), le.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var n, i = Y.head || le("head")[0] || Y.documentElement;
			return {
				send: function(t, r) {
					n = Y.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
					}, i.insertBefore(n, i.firstChild)
				},
				abort: function() {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var zt = [],
		Xt = /(=)\?(?=&|$)|\?\?/;
	le.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = zt.pop() || le.expando + "_" + Pt++;
			return this[e] = !0, e
		}
	}), le.ajaxPrefilter("json jsonp", function(n, i, r) {
		var s, o, a, l = !1 !== n.jsonp && (Xt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (s = n.jsonpCallback = le.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Xt, "$1" + s) : !1 !== n.jsonp && (n.url += (Dt.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
			return a || le.error(s + " was not called"), a[0]
		}, n.dataTypes[0] = "json", o = e[s], e[s] = function() {
			a = arguments
		}, r.always(function() {
			e[s] = o, n[s] && (n.jsonpCallback = i.jsonpCallback, zt.push(s)), a && le.isFunction(o) && o(a[0]), a = o = t
		}), "script") : t
	});
	var Ut, Yt, Kt = 0,
		Jt = e.ActiveXObject && function() {
			var e;
			for (e in Ut) Ut[e](t, !0)
		};
	le.ajaxSettings.xhr = e.ActiveXObject ? function() {
		return !this.isLocal && O() || j()
	} : O, Yt = le.ajaxSettings.xhr(), le.support.cors = !!Yt && "withCredentials" in Yt, (Yt = le.support.ajax = !!Yt) && le.ajaxTransport(function(n) {
		if (!n.crossDomain || le.support.cors) {
			var i;
			return {
				send: function(r, s) {
					var o, a, l = n.xhr();
					if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
						for (a in n.xhrFields) l[a] = n.xhrFields[a];
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (a in r) l.setRequestHeader(a, r[a])
					} catch (e) {}
					l.send(n.hasContent && n.data || null), i = function(e, r) {
						var a, c, u, p;
						try {
							if (i && (r || 4 === l.readyState))
								if (i = t, o && (l.onreadystatechange = le.noop, Jt && delete Ut[o]), r) 4 !== l.readyState && l.abort();
								else {
									p = {}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
									try {
										u = l.statusText
									} catch (e) {
										u = ""
									}
									a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = p.text ? 200 : 404
								}
						} catch (e) {
							r || s(-1, e)
						}
						p && s(a, u, p, c)
					}, n.async ? 4 === l.readyState ? setTimeout(i) : (o = ++Kt, Jt && (Ut || (Ut = {}, le(e).unload(Jt)), Ut[o] = i), l.onreadystatechange = i) : i()
				},
				abort: function() {
					i && i(t, !0)
				}
			}
		}
	});
	var Gt, Qt, Zt = /^(?:toggle|show|hide)$/,
		en = RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
		tn = /queueHooks$/,
		nn = [F],
		rn = {
			"*": [function(e, t) {
				var n, i, r = this.createTween(e, t),
					s = en.exec(t),
					o = r.cur(),
					a = +o || 0,
					l = 1,
					c = 20;
				if (s) {
					if (n = +s[2], "px" !== (i = s[3] || (le.cssNumber[e] ? "" : "px")) && a) {
						a = le.css(r.elem, e, !0) || n || 1;
						do {
							l = l || ".5", a /= l, le.style(r.elem, e, a + i)
						} while (l !== (l = r.cur() / o) && 1 !== l && --c)
					}
					r.unit = i, r.start = a, r.end = s[1] ? a + (s[1] + 1) * n : n
				}
				return r
			}]
		};
	le.Animation = le.extend(B, {
		tweener: function(e, t) {
			le.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, i = 0, r = e.length; r > i; i++) n = e[i], rn[n] = rn[n] || [], rn[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? nn.unshift(e) : nn.push(e)
		}
	}), le.Tween = q, q.prototype = {
		constructor: q,
		init: function(e, t, n, i, r, s) {
			this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (le.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = q.propHooks[this.prop];
			return e && e.get ? e.get(this) : q.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = q.propHooks[this.prop];
			return this.pos = t = this.options.duration ? le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
		}
	}, q.prototype.init.prototype = q.prototype, q.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, le.each(["toggle", "show", "hide"], function(e, t) {
		var n = le.fn[t];
		le.fn[t] = function(e, i, r) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, r)
		}
	}), le.fn.extend({
		fadeTo: function(e, t, n, i) {
			return this.filter(k).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, i)
		},
		animate: function(e, t, n, i) {
			var r = le.isEmptyObject(e),
				s = le.speed(t, n, i),
				o = function() {
					var t = B(this, le.extend({}, e), s);
					o.finish = function() {
						t.stop(!0)
					}, (r || le._data(this, "finish")) && t.stop(!0)
				};
			return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
		},
		stop: function(e, n, i) {
			var r = function(e) {
				var t = e.stop;
				delete e.stop, t(i)
			};
			return "string" != typeof e && (i = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					s = le.timers,
					o = le._data(this);
				if (n) o[n] && o[n].stop && r(o[n]);
				else
					for (n in o) o[n] && o[n].stop && tn.test(n) && r(o[n]);
				for (n = s.length; n--;) s[n].elem !== this || null != e && s[n].queue !== e || (s[n].anim.stop(i), t = !1, s.splice(n, 1));
				(t || !i) && le.dequeue(this, e)
			})
		},
		finish: function(e) {
			return !1 !== e && (e = e || "fx"), this.each(function() {
				var t, n = le._data(this),
					i = n[e + "queue"],
					r = n[e + "queueHooks"],
					s = le.timers,
					o = i ? i.length : 0;
				for (n.finish = !0, le.queue(this, e, []), r && r.cur && r.cur.finish && r.cur.finish.call(this), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
				for (t = 0; o > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
				delete n.finish
			})
		}
	}), le.each({
		slideDown: W("show"),
		slideUp: W("hide"),
		slideToggle: W("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		le.fn[e] = function(e, n, i) {
			return this.animate(t, e, n, i)
		}
	}), le.speed = function(e, t, n) {
		var i = e && "object" == typeof e ? le.extend({}, e) : {
			complete: n || !n && t || le.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !le.isFunction(t) && t
		};
		return i.duration = le.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in le.fx.speeds ? le.fx.speeds[i.duration] : le.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
			le.isFunction(i.old) && i.old.call(this), i.queue && le.dequeue(this, i.queue)
		}, i
	}, le.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, le.timers = [], le.fx = q.prototype.init, le.fx.tick = function() {
		var e, n = le.timers,
			i = 0;
		for (Gt = le.now(); n.length > i; i++)(e = n[i])() || n[i] !== e || n.splice(i--, 1);
		n.length || le.fx.stop(), Gt = t
	}, le.fx.timer = function(e) {
		e() && le.timers.push(e) && le.fx.start()
	}, le.fx.interval = 13, le.fx.start = function() {
		Qt || (Qt = setInterval(le.fx.tick, le.fx.interval))
	}, le.fx.stop = function() {
		clearInterval(Qt), Qt = null
	}, le.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, le.fx.step = {}, le.expr && le.expr.filters && (le.expr.filters.animated = function(e) {
		return le.grep(le.timers, function(t) {
			return e === t.elem
		}).length
	}), le.fn.offset = function(e) {
		if (arguments.length) return e === t ? this : this.each(function(t) {
			le.offset.setOffset(this, e, t)
		});
		var n, i, r = {
				top: 0,
				left: 0
			},
			s = this[0],
			o = s && s.ownerDocument;
		return o ? (n = o.documentElement, le.contains(n, s) ? (typeof s.getBoundingClientRect !== U && (r = s.getBoundingClientRect()), i = V(o), {
			top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : r) : void 0
	}, le.offset = {
		setOffset: function(e, t, n) {
			var i = le.css(e, "position");
			"static" === i && (e.style.position = "relative");
			var r = le(e),
				s = r.offset(),
				o = le.css(e, "top"),
				a = le.css(e, "left"),
				l = ("absolute" === i || "fixed" === i) && le.inArray("auto", [o, a]) > -1,
				c = {},
				u = {},
				p, h;
			l ? (u = r.position(), p = u.top, h = u.left) : (p = parseFloat(o) || 0, h = parseFloat(a) || 0), le.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (c.top = t.top - s.top + p), null != t.left && (c.left = t.left - s.left + h), "using" in t ? t.using.call(e, c) : r.css(c)
		}
	}, le.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					i = this[0];
				return "fixed" === le.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (n = e.offset()), n.top += le.css(e[0], "borderTopWidth", !0), n.left += le.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - le.css(i, "marginTop", !0),
					left: t.left - n.left - le.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || Y.documentElement; e && !le.nodeName(e, "html") && "static" === le.css(e, "position");) e = e.offsetParent;
				return e || Y.documentElement
			})
		}
	}), le.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, n) {
		var i = /Y/.test(n);
		le.fn[e] = function(r) {
			return le.access(this, function(e, r, s) {
				var o = V(e);
				return s === t ? o ? n in o ? o[n] : o.document.documentElement[r] : e[r] : (o ? o.scrollTo(i ? le(o).scrollLeft() : s, i ? s : le(o).scrollTop()) : e[r] = s, t)
			}, e, r, arguments.length, null)
		}
	}), le.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		le.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(i, r) {
			le.fn[r] = function(r, s) {
				var o = arguments.length && (i || "boolean" != typeof r),
					a = i || (!0 === r || !0 === s ? "margin" : "border");
				return le.access(this, function(n, i, r) {
					var s;
					return le.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : r === t ? le.css(n, i, a) : le.style(n, i, r, a)
				}, n, o ? r : t, o, null)
			}
		})
	}), e.jQuery = e.$ = le, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return le
	})
}(window),
/*!

 handlebars v2.0.0

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
function(e, t) {
	"function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.Handlebars = e.Handlebars || t()
}(this, function() {
	var e = function() {
			"use strict";

			function e(e) {
				this.string = e
			}
			var t;
			return e.prototype.toString = function() {
				return "" + this.string
			}, t = e
		}(),
		t = function(e) {
			"use strict";

			function t(e) {
				return l[e]
			}

			function n(e) {
				for (var t = 1; t < arguments.length; t++)
					for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
				return e
			}

			function i(e) {
				return e instanceof a ? e.toString() : null == e ? "" : e ? (e = "" + e, u.test(e) ? e.replace(c, t) : e) : e + ""
			}

			function r(e) {
				return !e && 0 !== e || !(!f(e) || 0 !== e.length)
			}

			function s(e, t) {
				return (e ? e + "." : "") + t
			}
			var o = {},
				a = e,
				l = {
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#x27;",
					"`": "&#x60;"
				},
				c = /[&<>"'`]/g,
				u = /[&<>"'`]/;
			o.extend = n;
			var p = Object.prototype.toString;
			o.toString = p;
			var h = function(e) {
				return "function" == typeof e
			};
			h(/x/) && (h = function(e) {
				return "function" == typeof e && "[object Function]" === p.call(e)
			});
			var h;
			o.isFunction = h;
			var f = Array.isArray || function(e) {
				return !(!e || "object" != typeof e) && "[object Array]" === p.call(e)
			};
			return o.isArray = f, o.escapeExpression = i, o.isEmpty = r, o.appendContextPath = s, o
		}(e),
		n = function() {
			"use strict";

			function e(e, t) {
				var i;
				t && t.firstLine && (i = t.firstLine, e += " - " + i + ":" + t.firstColumn);
				for (var r = Error.prototype.constructor.call(this, e), s = 0; s < n.length; s++) this[n[s]] = r[n[s]];
				i && (this.lineNumber = i, this.column = t.firstColumn)
			}
			var t, n = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
			return e.prototype = new Error, t = e
		}(),
		i = function(e, t) {
			"use strict";

			function n(e, t) {
				this.helpers = e || {}, this.partials = t || {}, i(this)
			}

			function i(e) {
				e.registerHelper("helperMissing", function() {
					if (1 !== arguments.length) throw new o("Missing helper: '" + arguments[arguments.length - 1].name + "'")
				}), e.registerHelper("blockHelperMissing", function(t, n) {
					var i = n.inverse,
						r = n.fn;
					if (!0 === t) return r(this);
					if (!1 === t || null == t) return i(this);
					if (u(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : i(this);
					if (n.data && n.ids) {
						var o = g(n.data);
						o.contextPath = s.appendContextPath(n.data.contextPath, n.name), n = {
							data: o
						}
					}
					return r(t, n)
				}), e.registerHelper("each", function(e, t) {
					if (!t) throw new o("Must pass iterator to #each");
					var n = t.fn,
						i = t.inverse,
						r = 0,
						a = "",
						l, c;
					if (t.data && t.ids && (c = s.appendContextPath(t.data.contextPath, t.ids[0]) + "."), p(e) && (e = e.call(this)), t.data && (l = g(t.data)), e && "object" == typeof e)
						if (u(e))
							for (var h = e.length; r < h; r++) l && (l.index = r, l.first = 0 === r, l.last = r === e.length - 1, c && (l.contextPath = c + r)), a += n(e[r], {
								data: l
							});
						else
							for (var f in e) e.hasOwnProperty(f) && (l && (l.key = f, l.index = r, l.first = 0 === r, c && (l.contextPath = c + f)), a += n(e[f], {
								data: l
							}), r++);
					return 0 === r && (a = i(this)), a
				}), e.registerHelper("if", function(e, t) {
					return p(e) && (e = e.call(this)), !t.hash.includeZero && !e || s.isEmpty(e) ? t.inverse(this) : t.fn(this)
				}), e.registerHelper("unless", function(t, n) {
					return e.helpers.if.call(this, t, {
						fn: n.inverse,
						inverse: n.fn,
						hash: n.hash
					})
				}), e.registerHelper("with", function(e, t) {
					p(e) && (e = e.call(this));
					var n = t.fn;
					if (s.isEmpty(e)) return t.inverse(this);
					if (t.data && t.ids) {
						var i = g(t.data);
						i.contextPath = s.appendContextPath(t.data.contextPath, t.ids[0]), t = {
							data: i
						}
					}
					return n(e, t)
				}), e.registerHelper("log", function(t, n) {
					var i = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
					e.log(i, t)
				}), e.registerHelper("lookup", function(e, t) {
					return e && e[t]
				})
			}
			var r = {},
				s = e,
				o = t,
				a = "2.0.0";
			r.VERSION = "2.0.0";
			var l = 6;
			r.COMPILER_REVISION = 6;
			var c = {
				1: "<= 1.0.rc.2",
				2: "== 1.0.0-rc.3",
				3: "== 1.0.0-rc.4",
				4: "== 1.x.x",
				5: "== 2.0.0-alpha.x",
				6: ">= 2.0.0-beta.1"
			};
			r.REVISION_CHANGES = c;
			var u = s.isArray,
				p = s.isFunction,
				h = s.toString,
				f = "[object Object]";
			r.HandlebarsEnvironment = n, n.prototype = {
				constructor: n,
				logger: d,
				log: m,
				registerHelper: function(e, t) {
					if (h.call(e) === f) {
						if (t) throw new o("Arg not supported with multiple helpers");
						s.extend(this.helpers, e)
					} else this.helpers[e] = t
				},
				unregisterHelper: function(e) {
					delete this.helpers[e]
				},
				registerPartial: function(e, t) {
					h.call(e) === f ? s.extend(this.partials, e) : this.partials[e] = t
				},
				unregisterPartial: function(e) {
					delete this.partials[e]
				}
			};
			var d = {
				methodMap: {
					0: "debug",
					1: "info",
					2: "warn",
					3: "error"
				},
				DEBUG: 0,
				INFO: 1,
				WARN: 2,
				ERROR: 3,
				level: 3,
				log: function(e, t) {
					if (d.level <= e) {
						var n = d.methodMap[e];
						"undefined" != typeof console && console[n] && console[n].call(console, t)
					}
				}
			};
			r.logger = d;
			var m = d.log;
			r.log = m;
			var g = function(e) {
				var t = s.extend({}, e);
				return t._parent = e, t
			};
			return r.createFrame = g, r
		}(t, n),
		r = function(e, t, n) {
			"use strict";

			function i(e) {
				var t = e && e[0] || 1,
					n = h;
				if (t !== n) {
					if (t < n) {
						var i = f[n],
							r = f[t];
						throw new p("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + r + ").")
					}
					throw new p("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
				}
			}

			function r(e, t) {
				if (!t) throw new p("No environment passed to template");
				if (!e || !e.main) throw new p("Unknown template object: " + typeof e);
				t.VM.checkRevision(e.compiler);
				var n = function(n, i, r, s, o, a, l, c, h) {
						o && (s = u.extend({}, s, o));
						var f = t.VM.invokePartial.call(this, n, r, s, a, l, c, h);
						if (null == f && t.compile) {
							var d = {
								helpers: a,
								partials: l,
								data: c,
								depths: h
							};
							l[r] = t.compile(n, {
								data: void 0 !== c,
								compat: e.compat
							}, t), f = l[r](s, d)
						}
						if (null != f) {
							if (i) {
								for (var m = f.split("\n"), g = 0, y = m.length; g < y && (m[g] || g + 1 !== y); g++) m[g] = i + m[g];
								f = m.join("\n")
							}
							return f
						}
						throw new p("The partial " + r + " could not be compiled when running in runtime-only mode")
					},
					i = {
						lookup: function(e, t) {
							for (var n = e.length, i = 0; i < n; i++)
								if (e[i] && null != e[i][t]) return e[i][t]
						},
						lambda: function(e, t) {
							return "function" == typeof e ? e.call(t) : e
						},
						escapeExpression: u.escapeExpression,
						invokePartial: n,
						fn: function(t) {
							return e[t]
						},
						programs: [],
						program: function(e, t, n) {
							var i = this.programs[e],
								r = this.fn(e);
							return t || n ? i = s(this, e, r, t, n) : i || (i = this.programs[e] = s(this, e, r)), i
						},
						data: function(e, t) {
							for (; e && t--;) e = e._parent;
							return e
						},
						merge: function(e, t) {
							var n = e || t;
							return e && t && e !== t && (n = u.extend({}, t, e)), n
						},
						noop: t.VM.noop,
						compilerInfo: e.compiler
					},
					r = function(t, n) {
						n = n || {};
						var s = n.data;
						r._setup(n), !n.partial && e.useData && (s = l(t, s));
						var o;
						return e.useDepths && (o = n.depths ? [t].concat(n.depths) : [t]), e.main.call(i, t, i.helpers, i.partials, s, o)
					};
				return r.isTop = !0, r._setup = function(n) {
					n.partial ? (i.helpers = n.helpers, i.partials = n.partials) : (i.helpers = i.merge(n.helpers, t.helpers), e.usePartial && (i.partials = i.merge(n.partials, t.partials)))
				}, r._child = function(t, n, r) {
					if (e.useDepths && !r) throw new p("must pass parent depths");
					return s(i, t, e[t], n, r)
				}, r
			}

			function s(e, t, n, i, r) {
				var s = function(t, s) {
					return s = s || {}, n.call(e, t, e.helpers, e.partials, s.data || i, r && [t].concat(r))
				};
				return s.program = t, s.depth = r ? r.length : 0, s
			}

			function o(e, t, n, i, r, s, o) {
				var a = {
					partial: !0,
					helpers: i,
					partials: r,
					data: s,
					depths: o
				};
				if (void 0 === e) throw new p("The partial " + t + " could not be found");
				if (e instanceof Function) return e(n, a)
			}

			function a() {
				return ""
			}

			function l(e, t) {
				return t && "root" in t || (t = t ? d(t) : {}, t.root = e), t
			}
			var c = {},
				u = e,
				p = t,
				h = n.COMPILER_REVISION,
				f = n.REVISION_CHANGES,
				d = n.createFrame;
			return c.checkRevision = i, c.template = r, c.program = s, c.invokePartial = o, c.noop = a, c
		}(t, n, i),
		s = function(e, t, n, i, r) {
			"use strict";
			var s, o = e,
				a = t,
				l = n,
				c = i,
				u = r,
				p = function() {
					var e = new o.HandlebarsEnvironment;
					return c.extend(e, o), e.SafeString = a, e.Exception = l, e.Utils = c, e.escapeExpression = c.escapeExpression, e.VM = u, e.template = function(t) {
						return u.template(t, e)
					}, e
				},
				h = p();
			return h.create = p, h.default = h, s = h
		}(i, e, n, t, r),
		o = function(e) {
			"use strict";

			function t(e) {
				e = e || {}, this.firstLine = e.first_line, this.firstColumn = e.first_column, this.lastColumn = e.last_column, this.lastLine = e.last_line
			}
			var n, i = e,
				r = {
					ProgramNode: function(e, n, i) {
						t.call(this, i), this.type = "program", this.statements = e, this.strip = n
					},
					MustacheNode: function(e, n, i, s, o) {
						if (t.call(this, o), this.type = "mustache", this.strip = s, null != i && i.charAt) {
							var a = i.charAt(3) || i.charAt(2);
							this.escaped = "{" !== a && "&" !== a
						} else this.escaped = !!i;
						e instanceof r.SexprNode ? this.sexpr = e : this.sexpr = new r.SexprNode(e, n), this.id = this.sexpr.id, this.params = this.sexpr.params, this.hash = this.sexpr.hash, this.eligibleHelper = this.sexpr.eligibleHelper, this.isHelper = this.sexpr.isHelper
					},
					SexprNode: function(e, n, i) {
						t.call(this, i), this.type = "sexpr", this.hash = n;
						var r = this.id = e[0],
							s = this.params = e.slice(1);
						this.isHelper = !(!s.length && !n), this.eligibleHelper = this.isHelper || r.isSimple
					},
					PartialNode: function(e, n, i, r, s) {
						t.call(this, s), this.type = "partial", this.partialName = e, this.context = n, this.hash = i, this.strip = r, this.strip.inlineStandalone = !0
					},
					BlockNode: function(e, n, i, r, s) {
						t.call(this, s), this.type = "block", this.mustache = e, this.program = n, this.inverse = i, this.strip = r, i && !n && (this.isInverse = !0)
					},
					RawBlockNode: function(e, n, s, o) {
						if (t.call(this, o), e.sexpr.id.original !== s) throw new i(e.sexpr.id.original + " doesn't match " + s, this);
						n = new r.ContentNode(n, o), this.type = "block", this.mustache = e, this.program = new r.ProgramNode([n], {}, o)
					},
					ContentNode: function(e, n) {
						t.call(this, n), this.type = "content", this.original = this.string = e
					},
					HashNode: function(e, n) {
						t.call(this, n), this.type = "hash", this.pairs = e
					},
					IdNode: function(e, n) {
						t.call(this, n), this.type = "ID";
						for (var r = "", s = [], o = 0, a = "", l = 0, c = e.length; l < c; l++) {
							var u = e[l].part;
							if (r += (e[l].separator || "") + u, ".." === u || "." === u || "this" === u) {
								if (s.length > 0) throw new i("Invalid path: " + r, this);
								".." === u ? (o++, a += "../") : this.isScoped = !0
							} else s.push(u)
						}
						this.original = r, this.parts = s, this.string = s.join("."), this.depth = o, this.idName = a + this.string, this.isSimple = 1 === e.length && !this.isScoped && 0 === o, this.stringModeValue = this.string
					},
					PartialNameNode: function(e, n) {
						t.call(this, n), this.type = "PARTIAL_NAME", this.name = e.original
					},
					DataNode: function(e, n) {
						t.call(this, n), this.type = "DATA", this.id = e, this.stringModeValue = e.stringModeValue, this.idName = "@" + e.stringModeValue
					},
					StringNode: function(e, n) {
						t.call(this, n), this.type = "STRING", this.original = this.string = this.stringModeValue = e
					},
					NumberNode: function(e, n) {
						t.call(this, n), this.type = "NUMBER", this.original = this.number = e, this.stringModeValue = Number(e)
					},
					BooleanNode: function(e, n) {
						t.call(this, n), this.type = "BOOLEAN", this.bool = e, this.stringModeValue = "true" === e
					},
					CommentNode: function(e, n) {
						t.call(this, n), this.type = "comment", this.comment = e, this.strip = {
							inlineStandalone: !0
						}
					}
				};
			return n = r
		}(n),
		a = function() {
			"use strict";
			var e;
			return e = function() {
				function e() {
					this.yy = {}
				}
				var t = {
						trace: function e() {},
						yy: {},
						symbols_: {
							error: 2,
							root: 3,
							program: 4,
							EOF: 5,
							program_repetition0: 6,
							statement: 7,
							mustache: 8,
							block: 9,
							rawBlock: 10,
							partial: 11,
							CONTENT: 12,
							COMMENT: 13,
							openRawBlock: 14,
							END_RAW_BLOCK: 15,
							OPEN_RAW_BLOCK: 16,
							sexpr: 17,
							CLOSE_RAW_BLOCK: 18,
							openBlock: 19,
							block_option0: 20,
							closeBlock: 21,
							openInverse: 22,
							block_option1: 23,
							OPEN_BLOCK: 24,
							CLOSE: 25,
							OPEN_INVERSE: 26,
							inverseAndProgram: 27,
							INVERSE: 28,
							OPEN_ENDBLOCK: 29,
							path: 30,
							OPEN: 31,
							OPEN_UNESCAPED: 32,
							CLOSE_UNESCAPED: 33,
							OPEN_PARTIAL: 34,
							partialName: 35,
							param: 36,
							partial_option0: 37,
							partial_option1: 38,
							sexpr_repetition0: 39,
							sexpr_option0: 40,
							dataName: 41,
							STRING: 42,
							NUMBER: 43,
							BOOLEAN: 44,
							OPEN_SEXPR: 45,
							CLOSE_SEXPR: 46,
							hash: 47,
							hash_repetition_plus0: 48,
							hashSegment: 49,
							ID: 50,
							EQUALS: 51,
							DATA: 52,
							pathSegments: 53,
							SEP: 54,
							$accept: 0,
							$end: 1
						},
						terminals_: {
							2: "error",
							5: "EOF",
							12: "CONTENT",
							13: "COMMENT",
							15: "END_RAW_BLOCK",
							16: "OPEN_RAW_BLOCK",
							18: "CLOSE_RAW_BLOCK",
							24: "OPEN_BLOCK",
							25: "CLOSE",
							26: "OPEN_INVERSE",
							28: "INVERSE",
							29: "OPEN_ENDBLOCK",
							31: "OPEN",
							32: "OPEN_UNESCAPED",
							33: "CLOSE_UNESCAPED",
							34: "OPEN_PARTIAL",
							42: "STRING",
							43: "NUMBER",
							44: "BOOLEAN",
							45: "OPEN_SEXPR",
							46: "CLOSE_SEXPR",
							50: "ID",
							51: "EQUALS",
							52: "DATA",
							54: "SEP"
						},
						productions_: [0, [3, 2],
							[4, 1],
							[7, 1],
							[7, 1],
							[7, 1],
							[7, 1],
							[7, 1],
							[7, 1],
							[10, 3],
							[14, 3],
							[9, 4],
							[9, 4],
							[19, 3],
							[22, 3],
							[27, 2],
							[21, 3],
							[8, 3],
							[8, 3],
							[11, 5],
							[11, 4],
							[17, 3],
							[17, 1],
							[36, 1],
							[36, 1],
							[36, 1],
							[36, 1],
							[36, 1],
							[36, 3],
							[47, 1],
							[49, 3],
							[35, 1],
							[35, 1],
							[35, 1],
							[41, 2],
							[30, 1],
							[53, 3],
							[53, 1],
							[6, 0],
							[6, 2],
							[20, 0],
							[20, 1],
							[23, 0],
							[23, 1],
							[37, 0],
							[37, 1],
							[38, 0],
							[38, 1],
							[39, 0],
							[39, 2],
							[40, 0],
							[40, 1],
							[48, 1],
							[48, 2]
						],
						performAction: function e(t, n, i, r, s, o, a) {
							var l = o.length - 1;
							switch (s) {
								case 1:
									return r.prepareProgram(o[l - 1].statements, !0), o[l - 1];
									break;
								case 2:
									this.$ = new r.ProgramNode(r.prepareProgram(o[l]), {}, this._$);
									break;
								case 3:
									this.$ = o[l];
									break;
								case 4:
									this.$ = o[l];
									break;
								case 5:
									this.$ = o[l];
									break;
								case 6:
									this.$ = o[l];
									break;
								case 7:
									this.$ = new r.ContentNode(o[l], this._$);
									break;
								case 8:
									this.$ = new r.CommentNode(o[l], this._$);
									break;
								case 9:
									this.$ = new r.RawBlockNode(o[l - 2], o[l - 1], o[l], this._$);
									break;
								case 10:
									this.$ = new r.MustacheNode(o[l - 1], null, "", "", this._$);
									break;
								case 11:
									this.$ = r.prepareBlock(o[l - 3], o[l - 2], o[l - 1], o[l], !1, this._$);
									break;
								case 12:
									this.$ = r.prepareBlock(o[l - 3], o[l - 2], o[l - 1], o[l], !0, this._$);
									break;
								case 13:
									this.$ = new r.MustacheNode(o[l - 1], null, o[l - 2], r.stripFlags(o[l - 2], o[l]), this._$);
									break;
								case 14:
									this.$ = new r.MustacheNode(o[l - 1], null, o[l - 2], r.stripFlags(o[l - 2], o[l]), this._$);
									break;
								case 15:
									this.$ = {
										strip: r.stripFlags(o[l - 1], o[l - 1]),
										program: o[l]
									};
									break;
								case 16:
									this.$ = {
										path: o[l - 1],
										strip: r.stripFlags(o[l - 2], o[l])
									};
									break;
								case 17:
									this.$ = new r.MustacheNode(o[l - 1], null, o[l - 2], r.stripFlags(o[l - 2], o[l]), this._$);
									break;
								case 18:
									this.$ = new r.MustacheNode(o[l - 1], null, o[l - 2], r.stripFlags(o[l - 2], o[l]), this._$);
									break;
								case 19:
									this.$ = new r.PartialNode(o[l - 3], o[l - 2], o[l - 1], r.stripFlags(o[l - 4], o[l]), this._$);
									break;
								case 20:
									this.$ = new r.PartialNode(o[l - 2], void 0, o[l - 1], r.stripFlags(o[l - 3], o[l]), this._$);
									break;
								case 21:
									this.$ = new r.SexprNode([o[l - 2]].concat(o[l - 1]), o[l], this._$);
									break;
								case 22:
									this.$ = new r.SexprNode([o[l]], null, this._$);
									break;
								case 23:
									this.$ = o[l];
									break;
								case 24:
									this.$ = new r.StringNode(o[l], this._$);
									break;
								case 25:
									this.$ = new r.NumberNode(o[l], this._$);
									break;
								case 26:
									this.$ = new r.BooleanNode(o[l], this._$);
									break;
								case 27:
									this.$ = o[l];
									break;
								case 28:
									o[l - 1].isHelper = !0, this.$ = o[l - 1];
									break;
								case 29:
									this.$ = new r.HashNode(o[l], this._$);
									break;
								case 30:
									this.$ = [o[l - 2], o[l]];
									break;
								case 31:
									this.$ = new r.PartialNameNode(o[l], this._$);
									break;
								case 32:
									this.$ = new r.PartialNameNode(new r.StringNode(o[l], this._$), this._$);
									break;
								case 33:
									this.$ = new r.PartialNameNode(new r.NumberNode(o[l], this._$));
									break;
								case 34:
									this.$ = new r.DataNode(o[l], this._$);
									break;
								case 35:
									this.$ = new r.IdNode(o[l], this._$);
									break;
								case 36:
									o[l - 2].push({
										part: o[l],
										separator: o[l - 1]
									}), this.$ = o[l - 2];
									break;
								case 37:
									this.$ = [{
										part: o[l]
									}];
									break;
								case 38:
									this.$ = [];
									break;
								case 39:
									o[l - 1].push(o[l]);
									break;
								case 48:
									this.$ = [];
									break;
								case 49:
									o[l - 1].push(o[l]);
									break;
								case 52:
									this.$ = [o[l]];
									break;
								case 53:
									o[l - 1].push(o[l]);
									break
							}
						},
						table: [{
							3: 1,
							4: 2,
							5: [2, 38],
							6: 3,
							12: [2, 38],
							13: [2, 38],
							16: [2, 38],
							24: [2, 38],
							26: [2, 38],
							31: [2, 38],
							32: [2, 38],
							34: [2, 38]
						}, {
							1: [3]
						}, {
							5: [1, 4]
						}, {
							5: [2, 2],
							7: 5,
							8: 6,
							9: 7,
							10: 8,
							11: 9,
							12: [1, 10],
							13: [1, 11],
							14: 16,
							16: [1, 20],
							19: 14,
							22: 15,
							24: [1, 18],
							26: [1, 19],
							28: [2, 2],
							29: [2, 2],
							31: [1, 12],
							32: [1, 13],
							34: [1, 17]
						}, {
							1: [2, 1]
						}, {
							5: [2, 39],
							12: [2, 39],
							13: [2, 39],
							16: [2, 39],
							24: [2, 39],
							26: [2, 39],
							28: [2, 39],
							29: [2, 39],
							31: [2, 39],
							32: [2, 39],
							34: [2, 39]
						}, {
							5: [2, 3],
							12: [2, 3],
							13: [2, 3],
							16: [2, 3],
							24: [2, 3],
							26: [2, 3],
							28: [2, 3],
							29: [2, 3],
							31: [2, 3],
							32: [2, 3],
							34: [2, 3]
						}, {
							5: [2, 4],
							12: [2, 4],
							13: [2, 4],
							16: [2, 4],
							24: [2, 4],
							26: [2, 4],
							28: [2, 4],
							29: [2, 4],
							31: [2, 4],
							32: [2, 4],
							34: [2, 4]
						}, {
							5: [2, 5],
							12: [2, 5],
							13: [2, 5],
							16: [2, 5],
							24: [2, 5],
							26: [2, 5],
							28: [2, 5],
							29: [2, 5],
							31: [2, 5],
							32: [2, 5],
							34: [2, 5]
						}, {
							5: [2, 6],
							12: [2, 6],
							13: [2, 6],
							16: [2, 6],
							24: [2, 6],
							26: [2, 6],
							28: [2, 6],
							29: [2, 6],
							31: [2, 6],
							32: [2, 6],
							34: [2, 6]
						}, {
							5: [2, 7],
							12: [2, 7],
							13: [2, 7],
							16: [2, 7],
							24: [2, 7],
							26: [2, 7],
							28: [2, 7],
							29: [2, 7],
							31: [2, 7],
							32: [2, 7],
							34: [2, 7]
						}, {
							5: [2, 8],
							12: [2, 8],
							13: [2, 8],
							16: [2, 8],
							24: [2, 8],
							26: [2, 8],
							28: [2, 8],
							29: [2, 8],
							31: [2, 8],
							32: [2, 8],
							34: [2, 8]
						}, {
							17: 21,
							30: 22,
							41: 23,
							50: [1, 26],
							52: [1, 25],
							53: 24
						}, {
							17: 27,
							30: 22,
							41: 23,
							50: [1, 26],
							52: [1, 25],
							53: 24
						}, {
							4: 28,
							6: 3,
							12: [2, 38],
							13: [2, 38],
							16: [2, 38],
							24: [2, 38],
							26: [2, 38],
							28: [2, 38],
							29: [2, 38],
							31: [2, 38],
							32: [2, 38],
							34: [2, 38]
						}, {
							4: 29,
							6: 3,
							12: [2, 38],
							13: [2, 38],
							16: [2, 38],
							24: [2, 38],
							26: [2, 38],
							28: [2, 38],
							29: [2, 38],
							31: [2, 38],
							32: [2, 38],
							34: [2, 38]
						}, {
							12: [1, 30]
						}, {
							30: 32,
							35: 31,
							42: [1, 33],
							43: [1, 34],
							50: [1, 26],
							53: 24
						}, {
							17: 35,
							30: 22,
							41: 23,
							50: [1, 26],
							52: [1, 25],
							53: 24
						}, {
							17: 36,
							30: 22,
							41: 23,
							50: [1, 26],
							52: [1, 25],
							53: 24
						}, {
							17: 37,
							30: 22,
							41: 23,
							50: [1, 26],
							52: [1, 25],
							53: 24
						}, {
							25: [1, 38]
						}, {
							18: [2, 48],
							25: [2, 48],
							33: [2, 48],
							39: 39,
							42: [2, 48],
							43: [2, 48],
							44: [2, 48],
							45: [2, 48],
							46: [2, 48],
							50: [2, 48],
							52: [2, 48]
						}, {
							18: [2, 22],
							25: [2, 22],
							33: [2, 22],
							46: [2, 22]
						}, {
							18: [2, 35],
							25: [2, 35],
							33: [2, 35],
							42: [2, 35],
							43: [2, 35],
							44: [2, 35],
							45: [2, 35],
							46: [2, 35],
							50: [2, 35],
							52: [2, 35],
							54: [1, 40]
						}, {
							30: 41,
							50: [1, 26],
							53: 24
						}, {
							18: [2, 37],
							25: [2, 37],
							33: [2, 37],
							42: [2, 37],
							43: [2, 37],
							44: [2, 37],
							45: [2, 37],
							46: [2, 37],
							50: [2, 37],
							52: [2, 37],
							54: [2, 37]
						}, {
							33: [1, 42]
						}, {
							20: 43,
							27: 44,
							28: [1, 45],
							29: [2, 40]
						}, {
							23: 46,
							27: 47,
							28: [1, 45],
							29: [2, 42]
						}, {
							15: [1, 48]
						}, {
							25: [2, 46],
							30: 51,
							36: 49,
							38: 50,
							41: 55,
							42: [1, 52],
							43: [1, 53],
							44: [1, 54],
							45: [1, 56],
							47: 57,
							48: 58,
							49: 60,
							50: [1, 59],
							52: [1, 25],
							53: 24
						}, {
							25: [2, 31],
							42: [2, 31],
							43: [2, 31],
							44: [2, 31],
							45: [2, 31],
							50: [2, 31],
							52: [2, 31]
						}, {
							25: [2, 32],
							42: [2, 32],
							43: [2, 32],
							44: [2, 32],
							45: [2, 32],
							50: [2, 32],
							52: [2, 32]
						}, {
							25: [2, 33],
							42: [2, 33],
							43: [2, 33],
							44: [2, 33],
							45: [2, 33],
							50: [2, 33],
							52: [2, 33]
						}, {
							25: [1, 61]
						}, {
							25: [1, 62]
						}, {
							18: [1, 63]
						}, {
							5: [2, 17],
							12: [2, 17],
							13: [2, 17],
							16: [2, 17],
							24: [2, 17],
							26: [2, 17],
							28: [2, 17],
							29: [2, 17],
							31: [2, 17],
							32: [2, 17],
							34: [2, 17]
						}, {
							18: [2, 50],
							25: [2, 50],
							30: 51,
							33: [2, 50],
							36: 65,
							40: 64,
							41: 55,
							42: [1, 52],
							43: [1, 53],
							44: [1, 54],
							45: [1, 56],
							46: [2, 50],
							47: 66,
							48: 58,
							49: 60,
							50: [1, 59],
							52: [1, 25],
							53: 24
						}, {
							50: [1, 67]
						}, {
							18: [2, 34],
							25: [2, 34],
							33: [2, 34],
							42: [2, 34],
							43: [2, 34],
							44: [2, 34],
							45: [2, 34],
							46: [2, 34],
							50: [2, 34],
							52: [2, 34]
						}, {
							5: [2, 18],
							12: [2, 18],
							13: [2, 18],
							16: [2, 18],
							24: [2, 18],
							26: [2, 18],
							28: [2, 18],
							29: [2, 18],
							31: [2, 18],
							32: [2, 18],
							34: [2, 18]
						}, {
							21: 68,
							29: [1, 69]
						}, {
							29: [2, 41]
						}, {
							4: 70,
							6: 3,
							12: [2, 38],
							13: [2, 38],
							16: [2, 38],
							24: [2, 38],
							26: [2, 38],
							29: [2, 38],
							31: [2, 38],
							32: [2, 38],
							34: [2, 38]
						}, {
							21: 71,
							29: [1, 69]
						}, {
							29: [2, 43]
						}, {
							5: [2, 9],
							12: [2, 9],
							13: [2, 9],
							16: [2, 9],
							24: [2, 9],
							26: [2, 9],
							28: [2, 9],
							29: [2, 9],
							31: [2, 9],
							32: [2, 9],
							34: [2, 9]
						}, {
							25: [2, 44],
							37: 72,
							47: 73,
							48: 58,
							49: 60,
							50: [1, 74]
						}, {
							25: [1, 75]
						}, {
							18: [2, 23],
							25: [2, 23],
							33: [2, 23],
							42: [2, 23],
							43: [2, 23],
							44: [2, 23],
							45: [2, 23],
							46: [2, 23],
							50: [2, 23],
							52: [2, 23]
						}, {
							18: [2, 24],
							25: [2, 24],
							33: [2, 24],
							42: [2, 24],
							43: [2, 24],
							44: [2, 24],
							45: [2, 24],
							46: [2, 24],
							50: [2, 24],
							52: [2, 24]
						}, {
							18: [2, 25],
							25: [2, 25],
							33: [2, 25],
							42: [2, 25],
							43: [2, 25],
							44: [2, 25],
							45: [2, 25],
							46: [2, 25],
							50: [2, 25],
							52: [2, 25]
						}, {
							18: [2, 26],
							25: [2, 26],
							33: [2, 26],
							42: [2, 26],
							43: [2, 26],
							44: [2, 26],
							45: [2, 26],
							46: [2, 26],
							50: [2, 26],
							52: [2, 26]
						}, {
							18: [2, 27],
							25: [2, 27],
							33: [2, 27],
							42: [2, 27],
							43: [2, 27],
							44: [2, 27],
							45: [2, 27],
							46: [2, 27],
							50: [2, 27],
							52: [2, 27]
						}, {
							17: 76,
							30: 22,
							41: 23,
							50: [1, 26],
							52: [1, 25],
							53: 24
						}, {
							25: [2, 47]
						}, {
							18: [2, 29],
							25: [2, 29],
							33: [2, 29],
							46: [2, 29],
							49: 77,
							50: [1, 74]
						}, {
							18: [2, 37],
							25: [2, 37],
							33: [2, 37],
							42: [2, 37],
							43: [2, 37],
							44: [2, 37],
							45: [2, 37],
							46: [2, 37],
							50: [2, 37],
							51: [1, 78],
							52: [2, 37],
							54: [2, 37]
						}, {
							18: [2, 52],
							25: [2, 52],
							33: [2, 52],
							46: [2, 52],
							50: [2, 52]
						}, {
							12: [2, 13],
							13: [2, 13],
							16: [2, 13],
							24: [2, 13],
							26: [2, 13],
							28: [2, 13],
							29: [2, 13],
							31: [2, 13],
							32: [2, 13],
							34: [2, 13]
						}, {
							12: [2, 14],
							13: [2, 14],
							16: [2, 14],
							24: [2, 14],
							26: [2, 14],
							28: [2, 14],
							29: [2, 14],
							31: [2, 14],
							32: [2, 14],
							34: [2, 14]
						}, {
							12: [2, 10]
						}, {
							18: [2, 21],
							25: [2, 21],
							33: [2, 21],
							46: [2, 21]
						}, {
							18: [2, 49],
							25: [2, 49],
							33: [2, 49],
							42: [2, 49],
							43: [2, 49],
							44: [2, 49],
							45: [2, 49],
							46: [2, 49],
							50: [2, 49],
							52: [2, 49]
						}, {
							18: [2, 51],
							25: [2, 51],
							33: [2, 51],
							46: [2, 51]
						}, {
							18: [2, 36],
							25: [2, 36],
							33: [2, 36],
							42: [2, 36],
							43: [2, 36],
							44: [2, 36],
							45: [2, 36],
							46: [2, 36],
							50: [2, 36],
							52: [2, 36],
							54: [2, 36]
						}, {
							5: [2, 11],
							12: [2, 11],
							13: [2, 11],
							16: [2, 11],
							24: [2, 11],
							26: [2, 11],
							28: [2, 11],
							29: [2, 11],
							31: [2, 11],
							32: [2, 11],
							34: [2, 11]
						}, {
							30: 79,
							50: [1, 26],
							53: 24
						}, {
							29: [2, 15]
						}, {
							5: [2, 12],
							12: [2, 12],
							13: [2, 12],
							16: [2, 12],
							24: [2, 12],
							26: [2, 12],
							28: [2, 12],
							29: [2, 12],
							31: [2, 12],
							32: [2, 12],
							34: [2, 12]
						}, {
							25: [1, 80]
						}, {
							25: [2, 45]
						}, {
							51: [1, 78]
						}, {
							5: [2, 20],
							12: [2, 20],
							13: [2, 20],
							16: [2, 20],
							24: [2, 20],
							26: [2, 20],
							28: [2, 20],
							29: [2, 20],
							31: [2, 20],
							32: [2, 20],
							34: [2, 20]
						}, {
							46: [1, 81]
						}, {
							18: [2, 53],
							25: [2, 53],
							33: [2, 53],
							46: [2, 53],
							50: [2, 53]
						}, {
							30: 51,
							36: 82,
							41: 55,
							42: [1, 52],
							43: [1, 53],
							44: [1, 54],
							45: [1, 56],
							50: [1, 26],
							52: [1, 25],
							53: 24
						}, {
							25: [1, 83]
						}, {
							5: [2, 19],
							12: [2, 19],
							13: [2, 19],
							16: [2, 19],
							24: [2, 19],
							26: [2, 19],
							28: [2, 19],
							29: [2, 19],
							31: [2, 19],
							32: [2, 19],
							34: [2, 19]
						}, {
							18: [2, 28],
							25: [2, 28],
							33: [2, 28],
							42: [2, 28],
							43: [2, 28],
							44: [2, 28],
							45: [2, 28],
							46: [2, 28],
							50: [2, 28],
							52: [2, 28]
						}, {
							18: [2, 30],
							25: [2, 30],
							33: [2, 30],
							46: [2, 30],
							50: [2, 30]
						}, {
							5: [2, 16],
							12: [2, 16],
							13: [2, 16],
							16: [2, 16],
							24: [2, 16],
							26: [2, 16],
							28: [2, 16],
							29: [2, 16],
							31: [2, 16],
							32: [2, 16],
							34: [2, 16]
						}],
						defaultActions: {
							4: [2, 1],
							44: [2, 41],
							47: [2, 43],
							57: [2, 47],
							63: [2, 10],
							70: [2, 15],
							73: [2, 45]
						},
						parseError: function e(t, n) {
							throw new Error(t)
						},
						parse: function e(t) {
							function n(e) {
								s.length = s.length - 2 * e, o.length = o.length - e, a.length = a.length - e
							}

							function i() {
								var e;
								return e = r.lexer.lex() || 1, "number" != typeof e && (e = r.symbols_[e] || e), e
							}
							var r = this,
								s = [0],
								o = [null],
								a = [],
								l = this.table,
								c = "",
								u = 0,
								p = 0,
								h = 0,
								f = 2,
								d = 1;
							this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
							var m = this.lexer.yylloc;
							a.push(m);
							var g = this.lexer.options && this.lexer.options.ranges;
							"function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
							for (var y, v, b, x, k, w, S = {}, C, N, E, T;;) {
								if (b = s[s.length - 1], this.defaultActions[b] ? x = this.defaultActions[b] : (null !== y && void 0 !== y || (y = i()), x = l[b] && l[b][y]), void 0 === x || !x.length || !x[0]) {
									var A = "";
									if (!h) {
										T = [];
										for (C in l[b]) this.terminals_[C] && C > 2 && T.push("'" + this.terminals_[C] + "'");
										A = this.lexer.showPosition ? "Parse error on line " + (u + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + T.join(", ") + ", got '" + (this.terminals_[y] || y) + "'" : "Parse error on line " + (u + 1) + ": Unexpected " + (1 == y ? "end of input" : "'" + (this.terminals_[y] || y) + "'"), this.parseError(A, {
											text: this.lexer.match,
											token: this.terminals_[y] || y,
											line: this.lexer.yylineno,
											loc: m,
											expected: T
										})
									}
								}
								if (x[0] instanceof Array && x.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + y);
								switch (x[0]) {
									case 1:
										s.push(y), o.push(this.lexer.yytext), a.push(this.lexer.yylloc), s.push(x[1]), y = null, v ? (y = v, v = null) : (p = this.lexer.yyleng, c = this.lexer.yytext, u = this.lexer.yylineno, m = this.lexer.yylloc, h > 0 && h--);
										break;
									case 2:
										if (N = this.productions_[x[1]][1], S.$ = o[o.length - N], S._$ = {
												first_line: a[a.length - (N || 1)].first_line,
												last_line: a[a.length - 1].last_line,
												first_column: a[a.length - (N || 1)].first_column,
												last_column: a[a.length - 1].last_column
											}, g && (S._$.range = [a[a.length - (N || 1)].range[0], a[a.length - 1].range[1]]), void 0 !== (w = this.performAction.call(S, c, p, u, this.yy, x[1], o, a))) return w;
										N && (s = s.slice(0, -1 * N * 2), o = o.slice(0, -1 * N), a = a.slice(0, -1 * N)), s.push(this.productions_[x[1]][0]), o.push(S.$), a.push(S._$), E = l[s[s.length - 2]][s[s.length - 1]], s.push(E);
										break;
									case 3:
										return !0
								}
							}
							return !0
						}
					},
					n = function() {
						var e = {
							EOF: 1,
							parseError: function e(t, n) {
								if (!this.yy.parser) throw new Error(t);
								this.yy.parser.parseError(t, n)
							},
							setInput: function(e) {
								return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
									first_line: 1,
									first_column: 0,
									last_line: 1,
									last_column: 0
								}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
							},
							input: function() {
								var e = this._input[0];
								return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
							},
							unput: function(e) {
								var t = e.length,
									n = e.split(/(?:\r\n?|\n)/g);
								this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
								var i = this.match.split(/(?:\r\n?|\n)/g);
								this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
								var r = this.yylloc.range;
								return this.yylloc = {
									first_line: this.yylloc.first_line,
									last_line: this.yylineno + 1,
									first_column: this.yylloc.first_column,
									last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - t
								}, this.options.ranges && (this.yylloc.range = [r[0], r[0] + this.yyleng - t]), this
							},
							more: function() {
								return this._more = !0, this
							},
							less: function(e) {
								this.unput(this.match.slice(e))
							},
							pastInput: function() {
								var e = this.matched.substr(0, this.matched.length - this.match.length);
								return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
							},
							upcomingInput: function() {
								var e = this.match;
								return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
							},
							showPosition: function() {
								var e = this.pastInput(),
									t = new Array(e.length + 1).join("-");
								return e + this.upcomingInput() + "\n" + t + "^"
							},
							next: function() {
								if (this.done) return this.EOF;
								this._input || (this.done = !0);
								var e, t, n, i, r, s;
								this._more || (this.yytext = "", this.match = "");
								for (var o = this._currentRules(), a = 0; a < o.length && (!(n = this._input.match(this.rules[o[a]])) || t && !(n[0].length > t[0].length) || (t = n, i = a, this.options.flex)); a++);
								return t ? (s = t[0].match(/(?:\r\n?|\n).*/g), s && (this.yylineno += s.length), this.yylloc = {
									first_line: this.yylloc.last_line,
									last_line: this.yylineno + 1,
									first_column: this.yylloc.last_column,
									last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
								}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, o[i], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), e || void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
									text: "",
									token: null,
									line: this.yylineno
								})
							},
							lex: function e() {
								var t = this.next();
								return void 0 !== t ? t : this.lex()
							},
							begin: function e(t) {
								this.conditionStack.push(t)
							},
							popState: function e() {
								return this.conditionStack.pop()
							},
							_currentRules: function e() {
								return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
							},
							topState: function() {
								return this.conditionStack[this.conditionStack.length - 2]
							},
							pushState: function e(t) {
								this.begin(t)
							}
						};
						return e.options = {}, e.performAction = function e(t, n, i, r) {
							function s(e, t) {
								return n.yytext = n.yytext.substr(e, n.yyleng - t)
							}
							var o = r;
							switch (i) {
								case 0:
									if ("\\\\" === n.yytext.slice(-2) ? (s(0, 1), this.begin("mu")) : "\\" === n.yytext.slice(-1) ? (s(0, 1), this.begin("emu")) : this.begin("mu"), n.yytext) return 12;
									break;
								case 1:
									return 12;
									break;
								case 2:
									return this.popState(), 12;
									break;
								case 3:
									return n.yytext = n.yytext.substr(5, n.yyleng - 9), this.popState(), 15;
									break;
								case 4:
									return 12;
									break;
								case 5:
									return s(0, 4), this.popState(), 13;
									break;
								case 6:
									return 45;
									break;
								case 7:
									return 46;
									break;
								case 8:
									return 16;
									break;
								case 9:
									return this.popState(), this.begin("raw"), 18;
									break;
								case 10:
									return 34;
									break;
								case 11:
									return 24;
									break;
								case 12:
									return 29;
									break;
								case 13:
									return this.popState(), 28;
									break;
								case 14:
									return this.popState(), 28;
									break;
								case 15:
									return 26;
									break;
								case 16:
									return 26;
									break;
								case 17:
									return 32;
									break;
								case 18:
									return 31;
									break;
								case 19:
									this.popState(), this.begin("com");
									break;
								case 20:
									return s(3, 5), this.popState(), 13;
									break;
								case 21:
									return 31;
									break;
								case 22:
									return 51;
									break;
								case 23:
									return 50;
									break;
								case 24:
									return 50;
									break;
								case 25:
									return 54;
									break;
								case 26:
									break;
								case 27:
									return this.popState(), 33;
									break;
								case 28:
									return this.popState(), 25;
									break;
								case 29:
									return n.yytext = s(1, 2).replace(/\\"/g, '"'), 42;
									break;
								case 30:
									return n.yytext = s(1, 2).replace(/\\'/g, "'"), 42;
									break;
								case 31:
									return 52;
									break;
								case 32:
									return 44;
									break;
								case 33:
									return 44;
									break;
								case 34:
									return 43;
									break;
								case 35:
									return 50;
									break;
								case 36:
									return n.yytext = s(1, 2), 50;
									break;
								case 37:
									return "INVALID";
									break;
								case 38:
									return 5;
									break
							}
						}, e.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], e.conditions = {
							mu: {
								rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
								inclusive: !1
							},
							emu: {
								rules: [2],
								inclusive: !1
							},
							com: {
								rules: [5],
								inclusive: !1
							},
							raw: {
								rules: [3, 4],
								inclusive: !1
							},
							INITIAL: {
								rules: [0, 1, 38],
								inclusive: !0
							}
						}, e
					}();
				return t.lexer = n, e.prototype = t, t.Parser = e, new e
			}()
		}(),
		l = function(e) {
			"use strict";

			function t(e, t) {
				return {
					left: "~" === e.charAt(2),
					right: "~" === t.charAt(t.length - 3)
				}
			}

			function n(e, t, n, i, l, u) {
				if (e.sexpr.id.original !== i.path.original) throw new c(e.sexpr.id.original + " doesn't match " + i.path.original, e);
				var p = n && n.program,
					h = {
						left: e.strip.left,
						right: i.strip.right,
						openStandalone: s(t.statements),
						closeStandalone: r((p || t).statements)
					};
				if (e.strip.right && o(t.statements, null, !0), p) {
					var f = n.strip;
					f.left && a(t.statements, null, !0), f.right && o(p.statements, null, !0), i.strip.left && a(p.statements, null, !0), r(t.statements) && s(p.statements) && (a(t.statements), o(p.statements))
				} else i.strip.left && a(t.statements, null, !0);
				return l ? new this.BlockNode(e, p, t, h, u) : new this.BlockNode(e, t, p, h, u)
			}

			function i(e, t) {
				for (var n = 0, i = e.length; n < i; n++) {
					var l = e[n],
						c = l.strip;
					if (c) {
						var u = r(e, n, t, "partial" === l.type),
							p = s(e, n, t),
							h = c.openStandalone && u,
							f = c.closeStandalone && p,
							d = c.inlineStandalone && u && p;
						c.right && o(e, n, !0), c.left && a(e, n, !0), d && (o(e, n), a(e, n) && "partial" === l.type && (l.indent = /([ \t]+$)/.exec(e[n - 1].original) ? RegExp.$1 : "")), h && (o((l.program || l.inverse).statements), a(e, n)), f && (o(e, n), a((l.inverse || l.program).statements))
					}
				}
				return e
			}

			function r(e, t, n) {
				void 0 === t && (t = e.length);
				var i = e[t - 1],
					r = e[t - 2];
				return i ? "content" === i.type ? (r || !n ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(i.original) : void 0 : n
			}

			function s(e, t, n) {
				void 0 === t && (t = -1);
				var i = e[t + 1],
					r = e[t + 2];
				return i ? "content" === i.type ? (r || !n ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(i.original) : void 0 : n
			}

			function o(e, t, n) {
				var i = e[null == t ? 0 : t + 1];
				if (i && "content" === i.type && (n || !i.rightStripped)) {
					var r = i.string;
					i.string = i.string.replace(n ? /^\s+/ : /^[ \t]*\r?\n?/, ""), i.rightStripped = i.string !== r
				}
			}

			function a(e, t, n) {
				var i = e[null == t ? e.length - 1 : t - 1];
				if (i && "content" === i.type && (n || !i.leftStripped)) {
					var r = i.string;
					return i.string = i.string.replace(n ? /\s+$/ : /[ \t]+$/, ""), i.leftStripped = i.string !== r, i.leftStripped
				}
			}
			var l = {},
				c = e;
			return l.stripFlags = t, l.prepareBlock = n, l.prepareProgram = i, l
		}(n),
		c = function(e, t, n, i) {
			"use strict";

			function r(e) {
				return e.constructor === a.ProgramNode ? e : (o.yy = u, o.parse(e))
			}
			var s = {},
				o = e,
				a = t,
				l = n,
				c = i.extend;
			s.parser = o;
			var u = {};
			return c(u, l, a), s.parse = r, s
		}(a, o, l, t),
		u = function(e, t) {
			"use strict";

			function n() {}

			function i(e, t, n) {
				if (null == e || "string" != typeof e && e.constructor !== n.AST.ProgramNode) throw new a("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
				t = t || {}, "data" in t || (t.data = !0), t.compat && (t.useDepths = !0);
				var i = n.parse(e),
					r = (new n.Compiler).compile(i, t);
				return (new n.JavaScriptCompiler).compile(r, t)
			}

			function r(e, t, n) {
				function i() {
					var i = n.parse(e),
						r = (new n.Compiler).compile(i, t),
						s = (new n.JavaScriptCompiler).compile(r, t, void 0, !0);
					return n.template(s)
				}
				if (null == e || "string" != typeof e && e.constructor !== n.AST.ProgramNode) throw new a("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
				t = t || {}, "data" in t || (t.data = !0), t.compat && (t.useDepths = !0);
				var r, s = function(e, t) {
					return r || (r = i()), r.call(this, e, t)
				};
				return s._setup = function(e) {
					return r || (r = i()), r._setup(e)
				}, s._child = function(e, t, n) {
					return r || (r = i()), r._child(e, t, n)
				}, s
			}

			function s(e, t) {
				if (e === t) return !0;
				if (l(e) && l(t) && e.length === t.length) {
					for (var n = 0; n < e.length; n++)
						if (!s(e[n], t[n])) return !1;
					return !0
				}
			}
			var o = {},
				a = e,
				l = t.isArray,
				c = [].slice;
			return o.Compiler = n, n.prototype = {
				compiler: n,
				equals: function(e) {
					var t = this.opcodes.length;
					if (e.opcodes.length !== t) return !1;
					for (var n = 0; n < t; n++) {
						var i = this.opcodes[n],
							r = e.opcodes[n];
						if (i.opcode !== r.opcode || !s(i.args, r.args)) return !1
					}
					for (t = this.children.length, n = 0; n < t; n++)
						if (!this.children[n].equals(e.children[n])) return !1;
					return !0
				},
				guid: 0,
				compile: function(e, t) {
					this.opcodes = [], this.children = [], this.depths = {
						list: []
					}, this.options = t, this.stringParams = t.stringParams, this.trackIds = t.trackIds;
					var n = this.options.knownHelpers;
					if (this.options.knownHelpers = {
							helperMissing: !0,
							blockHelperMissing: !0,
							each: !0,
							if: !0,
							unless: !0,
							with: !0,
							log: !0,
							lookup: !0
						},
						n)
						for (var i in n) this.options.knownHelpers[i] = n[i];
					return this.accept(e)
				},
				accept: function(e) {
					return this[e.type](e)
				},
				program: function(e) {
					for (var t = e.statements, n = 0, i = t.length; n < i; n++) this.accept(t[n]);
					return this.isSimple = 1 === i, this.depths.list = this.depths.list.sort(function(e, t) {
						return e - t
					}), this
				},
				compileProgram: function(e) {
					var t = (new this.compiler).compile(e, this.options),
						n = this.guid++,
						i;
					this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
					for (var r = 0, s = t.depths.list.length; r < s; r++)(i = t.depths.list[r]) < 2 || this.addDepth(i - 1);
					return n
				},
				block: function(e) {
					var t = e.mustache,
						n = e.program,
						i = e.inverse;
					n && (n = this.compileProgram(n)), i && (i = this.compileProgram(i));
					var r = t.sexpr,
						s = this.classifySexpr(r);
					"helper" === s ? this.helperSexpr(r, n, i) : "simple" === s ? (this.simpleSexpr(r), this.opcode("pushProgram", n), this.opcode("pushProgram", i), this.opcode("emptyHash"), this.opcode("blockValue", r.id.original)) : (this.ambiguousSexpr(r, n, i), this.opcode("pushProgram", n), this.opcode("pushProgram", i), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
				},
				hash: function(e) {
					var t = e.pairs,
						n, i;
					for (this.opcode("pushHash"), n = 0, i = t.length; n < i; n++) this.pushParam(t[n][1]);
					for (; n--;) this.opcode("assignToHash", t[n][0]);
					this.opcode("popHash")
				},
				partial: function(e) {
					var t = e.partialName;
					this.usePartial = !0, e.hash ? this.accept(e.hash) : this.opcode("push", "undefined"), e.context ? this.accept(e.context) : (this.opcode("getContext", 0), this.opcode("pushContext")), this.opcode("invokePartial", t.name, e.indent || ""), this.opcode("append")
				},
				content: function(e) {
					e.string && this.opcode("appendContent", e.string)
				},
				mustache: function(e) {
					this.sexpr(e.sexpr), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
				},
				ambiguousSexpr: function(e, t, n) {
					var i = e.id,
						r = i.parts[0],
						s = null != t || null != n;
					this.opcode("getContext", i.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.ID(i), this.opcode("invokeAmbiguous", r, s)
				},
				simpleSexpr: function(e) {
					var t = e.id;
					"DATA" === t.type ? this.DATA(t) : t.parts.length ? this.ID(t) : (this.addDepth(t.depth), this.opcode("getContext", t.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
				},
				helperSexpr: function(e, t, n) {
					var i = this.setupFullMustacheParams(e, t, n),
						r = e.id,
						s = r.parts[0];
					if (this.options.knownHelpers[s]) this.opcode("invokeKnownHelper", i.length, s);
					else {
						if (this.options.knownHelpersOnly) throw new a("You specified knownHelpersOnly, but used the unknown helper " + s, e);
						r.falsy = !0, this.ID(r), this.opcode("invokeHelper", i.length, r.original, r.isSimple)
					}
				},
				sexpr: function(e) {
					var t = this.classifySexpr(e);
					"simple" === t ? this.simpleSexpr(e) : "helper" === t ? this.helperSexpr(e) : this.ambiguousSexpr(e)
				},
				ID: function(e) {
					this.addDepth(e.depth), this.opcode("getContext", e.depth), e.parts[0] ? this.opcode("lookupOnContext", e.parts, e.falsy, e.isScoped) : this.opcode("pushContext")
				},
				DATA: function(e) {
					this.options.data = !0, this.opcode("lookupData", e.id.depth, e.id.parts)
				},
				STRING: function(e) {
					this.opcode("pushString", e.string)
				},
				NUMBER: function(e) {
					this.opcode("pushLiteral", e.number)
				},
				BOOLEAN: function(e) {
					this.opcode("pushLiteral", e.bool)
				},
				comment: function() {},
				opcode: function(e) {
					this.opcodes.push({
						opcode: e,
						args: c.call(arguments, 1)
					})
				},
				addDepth: function(e) {
					0 !== e && (this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e)))
				},
				classifySexpr: function(e) {
					var t = e.isHelper,
						n = e.eligibleHelper,
						i = this.options;
					if (n && !t) {
						var r = e.id.parts[0];
						i.knownHelpers[r] ? t = !0 : i.knownHelpersOnly && (n = !1)
					}
					return t ? "helper" : n ? "ambiguous" : "simple"
				},
				pushParams: function(e) {
					for (var t = 0, n = e.length; t < n; t++) this.pushParam(e[t])
				},
				pushParam: function(e) {
					this.stringParams ? (e.depth && this.addDepth(e.depth), this.opcode("getContext", e.depth || 0), this.opcode("pushStringParam", e.stringModeValue, e.type), "sexpr" === e.type && this.sexpr(e)) : (this.trackIds && this.opcode("pushId", e.type, e.idName || e.stringModeValue), this.accept(e))
				},
				setupFullMustacheParams: function(e, t, n) {
					var i = e.params;
					return this.pushParams(i), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.hash(e.hash) : this.opcode("emptyHash"), i
				}
			}, o.precompile = i, o.compile = r, o
		}(n, t),
		p = function(e, t) {
			"use strict";

			function n(e) {
				this.value = e
			}

			function i() {}
			var r, s = e.COMPILER_REVISION,
				o = e.REVISION_CHANGES,
				a = t;
			i.prototype = {
				nameLookup: function(e, t) {
					return i.isValidJavaScriptVariableName(t) ? e + "." + t : e + "['" + t + "']"
				},
				depthedLookup: function(e) {
					return this.aliases.lookup = "this.lookup", 'lookup(depths, "' + e + '")'
				},
				compilerInfo: function() {
					var e = s;
					return [e, o[e]]
				},
				appendToBuffer: function(e) {
					return this.environment.isSimple ? "return " + e + ";" : {
						appendToBuffer: !0,
						content: e,
						toString: function() {
							return "buffer += " + e + ";"
						}
					}
				},
				initializeBuffer: function() {
					return this.quotedString("")
				},
				namespace: "Handlebars",
				compile: function(e, t, n, i) {
					this.environment = e, this.options = t, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !i, this.name = this.environment.name, this.isChild = !!n, this.context = n || {
						programs: [],
						environments: []
					}, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
						list: []
					}, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.compileChildren(e, t), this.useDepths = this.useDepths || e.depths.list.length || this.options.compat;
					var r = e.opcodes,
						s, o, l;
					for (o = 0, l = r.length; o < l; o++) s = r[o], this[s.opcode].apply(this, s.args);
					if (this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new a("Compile completed with content left on stack");
					var c = this.createFunctionContext(i);
					if (this.isChild) return c;
					var u = {
							compiler: this.compilerInfo(),
							main: c
						},
						p = this.context.programs;
					for (o = 0, l = p.length; o < l; o++) p[o] && (u[o] = p[o]);
					return this.environment.usePartial && (u.usePartial = !0), this.options.data && (u.useData = !0), this.useDepths && (u.useDepths = !0), this.options.compat && (u.compat = !0), i || (u.compiler = JSON.stringify(u.compiler), u = this.objectLiteral(u)), u
				},
				preamble: function() {
					this.lastContext = 0, this.source = []
				},
				createFunctionContext: function(e) {
					var t = "",
						n = this.stackVars.concat(this.registers.list);
					n.length > 0 && (t += ", " + n.join(", "));
					for (var i in this.aliases) this.aliases.hasOwnProperty(i) && (t += ", " + i + "=" + this.aliases[i]);
					var r = ["depth0", "helpers", "partials", "data"];
					this.useDepths && r.push("depths");
					var s = this.mergeSource(t);
					return e ? (r.push(s), Function.apply(this, r)) : "function(" + r.join(",") + ") {\n  " + s + "}"
				},
				mergeSource: function(e) {
					for (var t = "", n, i = !this.forceBuffer, r, s = 0, o = this.source.length; s < o; s++) {
						var a = this.source[s];
						a.appendToBuffer ? n = n ? n + "\n    + " + a.content : a.content : (n && (t ? t += "buffer += " + n + ";\n  " : (r = !0, t = n + ";\n  "), n = void 0), t += a + "\n  ", this.environment.isSimple || (i = !1))
					}
					return i ? !n && t || (t += "return " + (n || '""') + ";\n") : (e += ", buffer = " + (r ? "" : this.initializeBuffer()), t += n ? "return buffer + " + n + ";\n" : "return buffer;\n"), e && (t = "var " + e.substring(2) + (r ? "" : ";\n  ") + t), t
				},
				blockValue: function(e) {
					this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
					var t = [this.contextName(0)];
					this.setupParams(e, 0, t);
					var n = this.popStack();
					t.splice(1, 0, n), this.push("blockHelperMissing.call(" + t.join(", ") + ")")
				},
				ambiguousBlockValue: function() {
					this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
					var e = [this.contextName(0)];
					this.setupParams("", 0, e, !0), this.flushInline();
					var t = this.topStack();
					e.splice(1, 0, t), this.pushSource("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
				},
				appendContent: function(e) {
					this.pendingContent && (e = this.pendingContent + e), this.pendingContent = e
				},
				append: function() {
					this.flushInline();
					var e = this.popStack();
					this.pushSource("if (" + e + " != null) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
				},
				appendEscaped: function() {
					this.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
				},
				getContext: function(e) {
					this.lastContext = e
				},
				pushContext: function() {
					this.pushStackLiteral(this.contextName(this.lastContext))
				},
				lookupOnContext: function(e, t, n) {
					var i = 0,
						r = e.length;
					for (n || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(e[i++])); i < r; i++) this.replaceStack(function(n) {
						var r = this.nameLookup(n, e[i], "context");
						return t ? " && " + r : " != null ? " + r + " : " + n
					})
				},
				lookupData: function(e, t) {
					e ? this.pushStackLiteral("this.data(data, " + e + ")") : this.pushStackLiteral("data");
					for (var n = t.length, i = 0; i < n; i++) this.replaceStack(function(e) {
						return " && " + this.nameLookup(e, t[i], "data")
					})
				},
				resolvePossibleLambda: function() {
					this.aliases.lambda = "this.lambda", this.push("lambda(" + this.popStack() + ", " + this.contextName(0) + ")")
				},
				pushStringParam: function(e, t) {
					this.pushContext(), this.pushString(t), "sexpr" !== t && ("string" == typeof e ? this.pushString(e) : this.pushStackLiteral(e))
				},
				emptyHash: function() {
					this.pushStackLiteral("{}"), this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}"))
				},
				pushHash: function() {
					this.hash && this.hashes.push(this.hash), this.hash = {
						values: [],
						types: [],
						contexts: [],
						ids: []
					}
				},
				popHash: function() {
					var e = this.hash;
					this.hash = this.hashes.pop(), this.trackIds && this.push("{" + e.ids.join(",") + "}"), this.stringParams && (this.push("{" + e.contexts.join(",") + "}"), this.push("{" + e.types.join(",") + "}")), this.push("{\n    " + e.values.join(",\n    ") + "\n  }")
				},
				pushString: function(e) {
					this.pushStackLiteral(this.quotedString(e))
				},
				push: function(e) {
					return this.inlineStack.push(e), e
				},
				pushLiteral: function(e) {
					this.pushStackLiteral(e)
				},
				pushProgram: function(e) {
					null != e ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
				},
				invokeHelper: function(e, t, n) {
					this.aliases.helperMissing = "helpers.helperMissing";
					var i = this.popStack(),
						r = this.setupHelper(e, t),
						s = (n ? r.name + " || " : "") + i + " || helperMissing";
					this.push("((" + s + ").call(" + r.callParams + "))")
				},
				invokeKnownHelper: function(e, t) {
					var n = this.setupHelper(e, t);
					this.push(n.name + ".call(" + n.callParams + ")")
				},
				invokeAmbiguous: function(e, t) {
					this.aliases.functionType = '"function"', this.aliases.helperMissing = "helpers.helperMissing", this.useRegister("helper");
					var n = this.popStack();
					this.emptyHash();
					var i = this.setupHelper(0, e, t),
						r = this.lastHelper = this.nameLookup("helpers", e, "helper");
					this.push("((helper = (helper = " + r + " || " + n + ") != null ? helper : helperMissing" + (i.paramsInit ? "),(" + i.paramsInit : "") + "),(typeof helper === functionType ? helper.call(" + i.callParams + ") : helper))")
				},
				invokePartial: function(e, t) {
					var n = [this.nameLookup("partials", e, "partial"), "'" + t + "'", "'" + e + "'", this.popStack(), this.popStack(), "helpers", "partials"];
					this.options.data ? n.push("data") : this.options.compat && n.push("undefined"), this.options.compat && n.push("depths"), this.push("this.invokePartial(" + n.join(", ") + ")")
				},
				assignToHash: function(e) {
					var t = this.popStack(),
						n, i, r;
					this.trackIds && (r = this.popStack()), this.stringParams && (i = this.popStack(), n = this.popStack());
					var s = this.hash;
					n && s.contexts.push("'" + e + "': " + n), i && s.types.push("'" + e + "': " + i), r && s.ids.push("'" + e + "': " + r), s.values.push("'" + e + "': (" + t + ")")
				},
				pushId: function(e, t) {
					"ID" === e || "DATA" === e ? this.pushString(t) : "sexpr" === e ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
				},
				compiler: i,
				compileChildren: function(e, t) {
					for (var n = e.children, i, r, s = 0, o = n.length; s < o; s++) {
						i = n[s], r = new this.compiler;
						var a = this.matchExistingProgram(i);
						null == a ? (this.context.programs.push(""), a = this.context.programs.length, i.index = a, i.name = "program" + a, this.context.programs[a] = r.compile(i, t, this.context, !this.precompile), this.context.environments[a] = i, this.useDepths = this.useDepths || r.useDepths) : (i.index = a, i.name = "program" + a)
					}
				},
				matchExistingProgram: function(e) {
					for (var t = 0, n = this.context.environments.length; t < n; t++) {
						var i = this.context.environments[t];
						if (i && i.equals(e)) return t
					}
				},
				programExpression: function(e) {
					var t = this.environment.children[e],
						n = t.depths.list,
						i = this.useDepths,
						r, s = [t.index, "data"];
					return i && s.push("depths"), "this.program(" + s.join(", ") + ")"
				},
				useRegister: function(e) {
					this.registers[e] || (this.registers[e] = !0, this.registers.list.push(e))
				},
				pushStackLiteral: function(e) {
					return this.push(new n(e))
				},
				pushSource: function(e) {
					this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = void 0), e && this.source.push(e)
				},
				pushStack: function(e) {
					this.flushInline();
					var t = this.incrStack();
					return this.pushSource(t + " = " + e + ";"), this.compileStack.push(t), t
				},
				replaceStack: function(e) {
					var t = "",
						i = this.isInline(),
						r, s, o;
					if (!this.isInline()) throw new a("replaceStack on non-inline");
					var l = this.popStack(!0);
					if (l instanceof n) t = r = l.value, o = !0;
					else {
						s = !this.stackSlot;
						var c = s ? this.incrStack() : this.topStackName();
						t = "(" + this.push(c) + " = " + l + ")", r = this.topStack()
					}
					var u = e.call(this, r);
					o || this.popStack(), s && this.stackSlot--, this.push("(" + t + u + ")")
				},
				incrStack: function() {
					return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
				},
				topStackName: function() {
					return "stack" + this.stackSlot
				},
				flushInline: function() {
					var e = this.inlineStack;
					if (e.length) {
						this.inlineStack = [];
						for (var t = 0, i = e.length; t < i; t++) {
							var r = e[t];
							r instanceof n ? this.compileStack.push(r) : this.pushStack(r)
						}
					}
				},
				isInline: function() {
					return this.inlineStack.length
				},
				popStack: function(e) {
					var t = this.isInline(),
						i = (t ? this.inlineStack : this.compileStack).pop();
					if (!e && i instanceof n) return i.value;
					if (!t) {
						if (!this.stackSlot) throw new a("Invalid stack pop");
						this.stackSlot--
					}
					return i
				},
				topStack: function() {
					var e = this.isInline() ? this.inlineStack : this.compileStack,
						t = e[e.length - 1];
					return t instanceof n ? t.value : t
				},
				contextName: function(e) {
					return this.useDepths && e ? "depths[" + e + "]" : "depth" + e
				},
				quotedString: function(e) {
					return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
				},
				objectLiteral: function(e) {
					var t = [];
					for (var n in e) e.hasOwnProperty(n) && t.push(this.quotedString(n) + ":" + e[n]);
					return "{" + t.join(",") + "}"
				},
				setupHelper: function(e, t, n) {
					var i = [];
					return {
						params: i,
						paramsInit: this.setupParams(t, e, i, n),
						name: this.nameLookup("helpers", t, "helper"),
						callParams: [this.contextName(0)].concat(i).join(", ")
					}
				},
				setupOptions: function(e, t, n) {
					var i = {},
						r = [],
						s = [],
						o = [],
						a, l, c;
					i.name = this.quotedString(e), i.hash = this.popStack(), this.trackIds && (i.hashIds = this.popStack()), this.stringParams && (i.hashTypes = this.popStack(), i.hashContexts = this.popStack()), l = this.popStack(), ((c = this.popStack()) || l) && (c || (c = "this.noop"), l || (l = "this.noop"), i.fn = c, i.inverse = l);
					for (var u = t; u--;) a = this.popStack(), n[u] = a, this.trackIds && (o[u] = this.popStack()), this.stringParams && (s[u] = this.popStack(), r[u] = this.popStack());
					return this.trackIds && (i.ids = "[" + o.join(",") + "]"), this.stringParams && (i.types = "[" + s.join(",") + "]", i.contexts = "[" + r.join(",") + "]"), this.options.data && (i.data = "data"), i
				},
				setupParams: function(e, t, n, i) {
					var r = this.objectLiteral(this.setupOptions(e, t, n));
					return i ? (this.useRegister("options"), n.push("options"), "options=" + r) : (n.push(r), "")
				}
			};
			for (var l = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), c = i.RESERVED_WORDS = {}, u = 0, p = l.length; u < p; u++) c[l[u]] = !0;
			return i.isValidJavaScriptVariableName = function(e) {
				return !i.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)
			}, r = i
		}(i, n);
	return function(e, t, n, i, r) {
		"use strict";
		var s, o = e,
			a = t,
			l = n.parser,
			c = n.parse,
			u = i.Compiler,
			p = i.compile,
			h = i.precompile,
			f = r,
			d = o.create,
			m = function() {
				var e = d();
				return e.compile = function(t, n) {
					return p(t, n, e)
				}, e.precompile = function(t, n) {
					return h(t, n, e)
				}, e.AST = a, e.Compiler = u, e.JavaScriptCompiler = f, e.Parser = l, e.parse = c, e
			};
		return o = m(), o.create = m, o.default = o, s = o
	}(s, o, c, u, p)
}),
function() {
	"use strict";
	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
	function e(t, i) {
		function r(e, t) {
			return function() {
				return e.apply(t, arguments)
			}
		}
		var s;
		if (i = i || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = i.touchBoundary || 10, this.layer = t, this.tapDelay = i.tapDelay || 200, this.tapTimeout = i.tapTimeout || 700, !e.notNeeded(t)) {
			for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, c = o.length; l < c; l++) a[o[l]] = r(a[o[l]], a);
			n && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, i) {
				var r = Node.prototype.removeEventListener;
				"click" === e ? r.call(t, e, n.hijacked || n, i) : r.call(t, e, n, i)
			}, t.addEventListener = function(e, n, i) {
				var r = Node.prototype.addEventListener;
				"click" === e ? r.call(t, e, n.hijacked || (n.hijacked = function(e) {
					e.propagationStopped || n(e)
				}), i) : r.call(t, e, n, i)
			}), "function" == typeof t.onclick && (s = t.onclick, t.addEventListener("click", function(e) {
				s(e)
			}, !1), t.onclick = null)
		}
	}
	var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
		n = navigator.userAgent.indexOf("Android") > 0 && !t,
		i = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
		r = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
		s = i && /OS [6-7]_\d/.test(navigator.userAgent),
		o = navigator.userAgent.indexOf("BB10") > 0;
	e.prototype.needsClick = function(e) {
		switch (e.nodeName.toLowerCase()) {
			case "button":
			case "select":
			case "textarea":
				if (e.disabled) return !0;
				break;
			case "input":
				if (i && "file" === e.type || e.disabled) return !0;
				break;
			case "label":
			case "iframe":
			case "video":
				return !0
		}
		return /\bneedsclick\b/.test(e.className)
	}, e.prototype.needsFocus = function(e) {
		switch (e.nodeName.toLowerCase()) {
			case "textarea":
				return !0;
			case "select":
				return !n;
			case "input":
				switch (e.type) {
					case "button":
					case "checkbox":
					case "file":
					case "image":
					case "radio":
					case "submit":
						return !1
				}
				return !e.disabled && !e.readOnly;
			default:
				return /\bneedsfocus\b/.test(e.className)
		}
	}, e.prototype.sendClick = function(e, t) {
		var n, i;
		document.activeElement && document.activeElement !== e && document.activeElement.blur(), i = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
	}, e.prototype.determineEventType = function(e) {
		return n && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
	}, e.prototype.focus = function(e) {
		var t;
		i && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type && "email" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
	}, e.prototype.updateScrollParent = function(e) {
		var t, n;
		if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
			n = e;
			do {
				if (n.scrollHeight > n.offsetHeight) {
					t = n, e.fastClickScrollParent = n;
					break
				}
				n = n.parentElement
			} while (n)
		}
		t && (t.fastClickLastScrollTop = t.scrollTop)
	}, e.prototype.getTargetElementFromEventTarget = function(e) {
		return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
	}, e.prototype.onTouchStart = function(e) {
		var t, n, s;
		if (e.targetTouches.length > 1) return !0;
		if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], i) {
			if (s = window.getSelection(), s.rangeCount && !s.isCollapsed) return !0;
			if (!r) {
				if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
				this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
			}
		}
		return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
	}, e.prototype.touchHasMoved = function(e) {
		var t = e.changedTouches[0],
			n = this.touchBoundary;
		return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
	}, e.prototype.onTouchMove = function(e) {
		return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
	}, e.prototype.findControl = function(e) {
		return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
	}, e.prototype.onTouchEnd = function(e) {
		var t, o, a, l, c, u = this.targetElement;
		if (!this.trackingClick) return !0;
		if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
		if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
		if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, o = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (c = e.changedTouches[0], u = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (a = u.tagName.toLowerCase())) {
			if (t = this.findControl(u)) {
				if (this.focus(u), n) return !1;
				u = t
			}
		} else if (this.needsFocus(u)) return e.timeStamp - o > 100 || i && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, e), i && "select" === a || (this.targetElement = null, e.preventDefault()), !1);
		return !(!i || r || !(l = u.fastClickScrollParent) || l.fastClickLastScrollTop === l.scrollTop) || (this.needsClick(u) || (e.preventDefault(), this.sendClick(u, e)), !1)
	}, e.prototype.onTouchCancel = function() {
		this.trackingClick = !1, this.targetElement = null
	}, e.prototype.onMouse = function(e) {
		return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
	}, e.prototype.onClick = function(e) {
		var t;
		return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
	}, e.prototype.destroy = function() {
		var e = this.layer;
		n && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
	}, e.notNeeded = function(e) {
		var t, i, r, s;
		if (void 0 === window.ontouchstart) return !0;
		if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
			if (!n) return !0;
			if (t = document.querySelector("meta[name=viewport]")) {
				if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
				if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
			}
		}
		if (o && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
			if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
			if (document.documentElement.scrollWidth <= window.outerWidth) return !0
		}
		return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (!!((s = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) >= 27 && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
	}, e.attach = function(t, n) {
		return new e(t, n)
	}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
		return e
	}) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
}(), $(function() {
	function e() {
		FastClick.attach(document.body), document.addEventListener("touchstart", function() {}, !0), $(".links ul li").each(function() {
			var e = $(this).find("a").outerWidth();
			$(this).find("a .title").outerWidth() + $(this).find("a .date").outerWidth() > e && $(this).find("a .title h4").addClass("overflow")
		}), $("header .logo").click(function() {
			$("html, body").animate({
				scrollTop: $("#wrapper").offset().top
			}, 800), $(".type").removeClass("article-overwrite video-overwrite book-overwrite movie-overwrite podcast-overwrite other-overwrite"), $(".links ul li").removeClass("hidden"), $(".filter li h2").removeClass("active"), $(".filter li.all h2").toggleClass("active"), $(".type").addClass("all-overwrite")
		}), $("header .about").click(function() {
			$("html, body").animate({
				scrollTop: $("section.about").offset().top + 100
			}, 800)
		}), $(window).scroll(function() {
			$(document).scrollTop() > 30 ? $("header .logo").addClass("scroll") : $("header .logo").removeClass("scroll");
			var e = $(window).scrollTop() / 4e3 % Math.PI;
			$("header .logo span").css({
				"-moz-transform": "rotate(" + e + "rad)",
				"-webkit-transform": "rotate(" + e + "rad)"
			})
		}), $("header .day-night").on("click", function() {
			$(this).toggleClass("active"), $(".overlay").fadeIn(600).fadeOut(1400), $("#wrapper").delay(600).queue(function(e) {
				$(this).toggleClass("night"), e()
			})
		});
		var e = "video article book movie podcast other";
		$(".links ul li").on("mouseover", function() {
			$(".links ul li").removeClass("highlight");
			var t = $(this).attr("class");
			$(".type").removeClass(e), $(".type").addClass(t), $(window).width() > 500 && ($(".links ul li").addClass("hide"), $(".links ul li." + t).addClass("highlight"))
		}), $(".links ul li").on("mouseleave", function() {
			$(".type").removeClass(e), $(".links ul li").removeClass("hide highlight")
		}), $(".filter li").on("mouseover", function() {
			$(".links ul li").removeClass("highlight"), $(".type").removeClass(e);
			var t = $(this).attr("class");
			$(".type").addClass(t), $(".links ul li." + t).addClass("highlight"), $(".links ul li:not(.highlight)").addClass("hide")
		}), $(".filter li").on("mouseleave", function() {
			$(".links ul li").removeClass("highlight"), $(".type").removeClass(e), $(".links ul li").removeClass("hide")
		}), $(".filter li").on("click", function() {
			$("html, body").animate({
				scrollTop: $("#wrapper").offset().top
			}, 800), $(".type").removeClass("article-overwrite video-overwrite book-overwrite movie-overwrite podcast-overwrite other-overwrite"), $(".links ul li").removeClass("hidden"), $(".filter li h2").removeClass("active"), $(".filter").addClass("active"), $(this).find("h2").toggleClass("active");
			var e = $(this).attr("class");
			$(".links ul li:not(." + e + ")").addClass("hidden"), $(".type").addClass(e + "-overwrite")
		}), $(".filter li.all").on("mouseover", function() {
			$(".links ul li").removeClass("hide")
		}), $(".filter li.all").on("mouseleave", function() {
			$(".links ul li").addClass("hide")
		}), $(".filter li.all").on("click", function() {
			$(".links ul li").removeClass("hidden")
		}), $("form input").on("focus", function() {
			$("form").addClass("active"), $(this).parent().addClass("active")
		}), $("form input").on("blur", function() {
			"" === $.trim($(this).val()) ? ($("form").removeClass("active"), $(this).parent().removeClass("active")) : $("form").addClass("active")
		})
	}! function(t, n, i) {
		$.getJSON(t, function(t) {
			var r = $(n).html(),
				s = Handlebars.compile(r)(t);
			$(i).append(s), e()
		})
	}("links.json", "#template", "#wrapper")
});