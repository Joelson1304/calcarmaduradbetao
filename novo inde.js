(function() {
    const y = document.createElement("link").relList;
    if (y && y.supports && y.supports("modulepreload")) return;
    for (const R of document.querySelectorAll('link[rel="modulepreload"]')) D(R);
    new MutationObserver(R => {
        for (const E of R)
            if (E.type === "childList")
                for (const V of E.addedNodes) V.tagName === "LINK" && V.rel === "modulepreload" && D(V)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function m(R) {
        const E = {};
        return R.integrity && (E.integrity = R.integrity), R.referrerPolicy && (E.referrerPolicy = R.referrerPolicy), R.crossOrigin === "use-credentials" ? E.credentials = "include" : R.crossOrigin === "anonymous" ? E.credentials = "omit" : E.credentials = "same-origin", E
    }

    function D(R) {
        if (R.ep) return;
        R.ep = !0;
        const E = m(R);
        fetch(R.href, E)
    }
})();
var Yo = {
        exports: {}
    },
    tl = {},
    Go = {
        exports: {}
    },
    xe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fu;

function Ad() {
    if (Fu) return xe;
    Fu = 1;
    var N = Symbol.for("react.element"),
        y = Symbol.for("react.portal"),
        m = Symbol.for("react.fragment"),
        D = Symbol.for("react.strict_mode"),
        R = Symbol.for("react.profiler"),
        E = Symbol.for("react.provider"),
        V = Symbol.for("react.context"),
        A = Symbol.for("react.forward_ref"),
        B = Symbol.for("react.suspense"),
        _ = Symbol.for("react.memo"),
        T = Symbol.for("react.lazy"),
        M = Symbol.iterator;

    function L(f) {
        return f === null || typeof f != "object" ? null : (f = M && f[M] || f["@@iterator"], typeof f == "function" ? f : null)
    }
    var O = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        ue = Object.assign,
        Y = {};

    function Z(f, j, pe) {
        this.props = f, this.context = j, this.refs = Y, this.updater = pe || O
    }
    Z.prototype.isReactComponent = {}, Z.prototype.setState = function(f, j) {
        if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, f, j, "setState")
    }, Z.prototype.forceUpdate = function(f) {
        this.updater.enqueueForceUpdate(this, f, "forceUpdate")
    };

    function ce() {}
    ce.prototype = Z.prototype;

    function he(f, j, pe) {
        this.props = f, this.context = j, this.refs = Y, this.updater = pe || O
    }
    var de = he.prototype = new ce;
    de.constructor = he, ue(de, Z.prototype), de.isPureReactComponent = !0;
    var ve = Array.isArray,
        _e = Object.prototype.hasOwnProperty,
        Re = {
            current: null
        },
        fe = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function me(f, j, pe) {
        var ee, Ne = {},
            te = null,
            Ce = null;
        if (j != null)
            for (ee in j.ref !== void 0 && (Ce = j.ref), j.key !== void 0 && (te = "" + j.key), j) _e.call(j, ee) && !fe.hasOwnProperty(ee) && (Ne[ee] = j[ee]);
        var je = arguments.length - 2;
        if (je === 1) Ne.children = pe;
        else if (1 < je) {
            for (var Me = Array(je), De = 0; De < je; De++) Me[De] = arguments[De + 2];
            Ne.children = Me
        }
        if (f && f.defaultProps)
            for (ee in je = f.defaultProps, je) Ne[ee] === void 0 && (Ne[ee] = je[ee]);
        return {
            $$typeof: N,
            type: f,
            key: te,
            ref: Ce,
            props: Ne,
            _owner: Re.current
        }
    }

    function se(f, j) {
        return {
            $$typeof: N,
            type: f.type,
            key: j,
            ref: f.ref,
            props: f.props,
            _owner: f._owner
        }
    }

    function ke(f) {
        return typeof f == "object" && f !== null && f.$$typeof === N
    }

    function Ae(f) {
        var j = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + f.replace(/[=:]/g, function(pe) {
            return j[pe]
        })
    }
    var be = /\/+/g;

    function z(f, j) {
        return typeof f == "object" && f !== null && f.key != null ? Ae("" + f.key) : j.toString(36)
    }

    function J(f, j, pe, ee, Ne) {
        var te = typeof f;
        (te === "undefined" || te === "boolean") && (f = null);
        var Ce = !1;
        if (f === null) Ce = !0;
        else switch (te) {
            case "string":
            case "number":
                Ce = !0;
                break;
            case "object":
                switch (f.$$typeof) {
                    case N:
                    case y:
                        Ce = !0
                }
        }
        if (Ce) return Ce = f, Ne = Ne(Ce), f = ee === "" ? "." + z(Ce, 0) : ee, ve(Ne) ? (pe = "", f != null && (pe = f.replace(be, "$&/") + "/"), J(Ne, j, pe, "", function(De) {
            return De
        })) : Ne != null && (ke(Ne) && (Ne = se(Ne, pe + (!Ne.key || Ce && Ce.key === Ne.key ? "" : ("" + Ne.key).replace(be, "$&/") + "/") + f)), j.push(Ne)), 1;
        if (Ce = 0, ee = ee === "" ? "." : ee + ":", ve(f))
            for (var je = 0; je < f.length; je++) {
                te = f[je];
                var Me = ee + z(te, je);
                Ce += J(te, j, pe, Me, Ne)
            } else if (Me = L(f), typeof Me == "function")
                for (f = Me.call(f), je = 0; !(te = f.next()).done;) te = te.value, Me = ee + z(te, je++), Ce += J(te, j, pe, Me, Ne);
            else if (te === "object") throw j = String(f), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
        return Ce
    }

    function Q(f, j, pe) {
        if (f == null) return f;
        var ee = [],
            Ne = 0;
        return J(f, ee, "", "", function(te) {
            return j.call(pe, te, Ne++)
        }), ee
    }

    function le(f) {
        if (f._status === -1) {
            var j = f._result;
            j = j(), j.then(function(pe) {
                (f._status === 0 || f._status === -1) && (f._status = 1, f._result = pe)
            }, function(pe) {
                (f._status === 0 || f._status === -1) && (f._status = 2, f._result = pe)
            }), f._status === -1 && (f._status = 0, f._result = j)
        }
        if (f._status === 1) return f._result.default;
        throw f._result
    }
    var U = {
            current: null
        },
        x = {
            transition: null
        },
        b = {
            ReactCurrentDispatcher: U,
            ReactCurrentBatchConfig: x,
            ReactCurrentOwner: Re
        };

    function F() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return xe.Children = {
        map: Q,
        forEach: function(f, j, pe) {
            Q(f, function() {
                j.apply(this, arguments)
            }, pe)
        },
        count: function(f) {
            var j = 0;
            return Q(f, function() {
                j++
            }), j
        },
        toArray: function(f) {
            return Q(f, function(j) {
                return j
            }) || []
        },
        only: function(f) {
            if (!ke(f)) throw Error("React.Children.only expected to receive a single React element child.");
            return f
        }
    }, xe.Component = Z, xe.Fragment = m, xe.Profiler = R, xe.PureComponent = he, xe.StrictMode = D, xe.Suspense = B, xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b, xe.act = F, xe.cloneElement = function(f, j, pe) {
        if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
        var ee = ue({}, f.props),
            Ne = f.key,
            te = f.ref,
            Ce = f._owner;
        if (j != null) {
            if (j.ref !== void 0 && (te = j.ref, Ce = Re.current), j.key !== void 0 && (Ne = "" + j.key), f.type && f.type.defaultProps) var je = f.type.defaultProps;
            for (Me in j) _e.call(j, Me) && !fe.hasOwnProperty(Me) && (ee[Me] = j[Me] === void 0 && je !== void 0 ? je[Me] : j[Me])
        }
        var Me = arguments.length - 2;
        if (Me === 1) ee.children = pe;
        else if (1 < Me) {
            je = Array(Me);
            for (var De = 0; De < Me; De++) je[De] = arguments[De + 2];
            ee.children = je
        }
        return {
            $$typeof: N,
            type: f.type,
            key: Ne,
            ref: te,
            props: ee,
            _owner: Ce
        }
    }, xe.createContext = function(f) {
        return f = {
            $$typeof: V,
            _currentValue: f,
            _currentValue2: f,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, f.Provider = {
            $$typeof: E,
            _context: f
        }, f.Consumer = f
    }, xe.createElement = me, xe.createFactory = function(f) {
        var j = me.bind(null, f);
        return j.type = f, j
    }, xe.createRef = function() {
        return {
            current: null
        }
    }, xe.forwardRef = function(f) {
        return {
            $$typeof: A,
            render: f
        }
    }, xe.isValidElement = ke, xe.lazy = function(f) {
        return {
            $$typeof: T,
            _payload: {
                _status: -1,
                _result: f
            },
            _init: le
        }
    }, xe.memo = function(f, j) {
        return {
            $$typeof: _,
            type: f,
            compare: j === void 0 ? null : j
        }
    }, xe.startTransition = function(f) {
        var j = x.transition;
        x.transition = {};
        try {
            f()
        } finally {
            x.transition = j
        }
    }, xe.unstable_act = F, xe.useCallback = function(f, j) {
        return U.current.useCallback(f, j)
    }, xe.useContext = function(f) {
        return U.current.useContext(f)
    }, xe.useDebugValue = function() {}, xe.useDeferredValue = function(f) {
        return U.current.useDeferredValue(f)
    }, xe.useEffect = function(f, j) {
        return U.current.useEffect(f, j)
    }, xe.useId = function() {
        return U.current.useId()
    }, xe.useImperativeHandle = function(f, j, pe) {
        return U.current.useImperativeHandle(f, j, pe)
    }, xe.useInsertionEffect = function(f, j) {
        return U.current.useInsertionEffect(f, j)
    }, xe.useLayoutEffect = function(f, j) {
        return U.current.useLayoutEffect(f, j)
    }, xe.useMemo = function(f, j) {
        return U.current.useMemo(f, j)
    }, xe.useReducer = function(f, j, pe) {
        return U.current.useReducer(f, j, pe)
    }, xe.useRef = function(f) {
        return U.current.useRef(f)
    }, xe.useState = function(f) {
        return U.current.useState(f)
    }, xe.useSyncExternalStore = function(f, j, pe) {
        return U.current.useSyncExternalStore(f, j, pe)
    }, xe.useTransition = function() {
        return U.current.useTransition()
    }, xe.version = "18.3.1", xe
}
var Ru;

function ti() {
    return Ru || (Ru = 1, Go.exports = Ad()), Go.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Au;

function Dd() {
    if (Au) return tl;
    Au = 1;
    var N = ti(),
        y = Symbol.for("react.element"),
        m = Symbol.for("react.fragment"),
        D = Object.prototype.hasOwnProperty,
        R = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        E = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function V(A, B, _) {
        var T, M = {},
            L = null,
            O = null;
        _ !== void 0 && (L = "" + _), B.key !== void 0 && (L = "" + B.key), B.ref !== void 0 && (O = B.ref);
        for (T in B) D.call(B, T) && !E.hasOwnProperty(T) && (M[T] = B[T]);
        if (A && A.defaultProps)
            for (T in B = A.defaultProps, B) M[T] === void 0 && (M[T] = B[T]);
        return {
            $$typeof: y,
            type: A,
            key: L,
            ref: O,
            props: M,
            _owner: R.current
        }
    }
    return tl.Fragment = m, tl.jsx = V, tl.jsxs = V, tl
}
var Du;

function Od() {
    return Du || (Du = 1, Yo.exports = Dd()), Yo.exports
}
var o = Od(),
    G = ti(),
    ds = {},
    Zo = {
        exports: {}
    },
    dt = {},
    Jo = {
        exports: {}
    },
    ei = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ou;

function Ud() {
    return Ou || (Ou = 1, function(N) {
        function y(x, b) {
            var F = x.length;
            x.push(b);
            e: for (; 0 < F;) {
                var f = F - 1 >>> 1,
                    j = x[f];
                if (0 < R(j, b)) x[f] = b, x[F] = j, F = f;
                else break e
            }
        }

        function m(x) {
            return x.length === 0 ? null : x[0]
        }

        function D(x) {
            if (x.length === 0) return null;
            var b = x[0],
                F = x.pop();
            if (F !== b) {
                x[0] = F;
                e: for (var f = 0, j = x.length, pe = j >>> 1; f < pe;) {
                    var ee = 2 * (f + 1) - 1,
                        Ne = x[ee],
                        te = ee + 1,
                        Ce = x[te];
                    if (0 > R(Ne, F)) te < j && 0 > R(Ce, Ne) ? (x[f] = Ce, x[te] = F, f = te) : (x[f] = Ne, x[ee] = F, f = ee);
                    else if (te < j && 0 > R(Ce, F)) x[f] = Ce, x[te] = F, f = te;
                    else break e
                }
            }
            return b
        }

        function R(x, b) {
            var F = x.sortIndex - b.sortIndex;
            return F !== 0 ? F : x.id - b.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var E = performance;
            N.unstable_now = function() {
                return E.now()
            }
        } else {
            var V = Date,
                A = V.now();
            N.unstable_now = function() {
                return V.now() - A
            }
        }
        var B = [],
            _ = [],
            T = 1,
            M = null,
            L = 3,
            O = !1,
            ue = !1,
            Y = !1,
            Z = typeof setTimeout == "function" ? setTimeout : null,
            ce = typeof clearTimeout == "function" ? clearTimeout : null,
            he = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function de(x) {
            for (var b = m(_); b !== null;) {
                if (b.callback === null) D(_);
                else if (b.startTime <= x) D(_), b.sortIndex = b.expirationTime, y(B, b);
                else break;
                b = m(_)
            }
        }

        function ve(x) {
            if (Y = !1, de(x), !ue)
                if (m(B) !== null) ue = !0, le(_e);
                else {
                    var b = m(_);
                    b !== null && U(ve, b.startTime - x)
                }
        }

        function _e(x, b) {
            ue = !1, Y && (Y = !1, ce(me), me = -1), O = !0;
            var F = L;
            try {
                for (de(b), M = m(B); M !== null && (!(M.expirationTime > b) || x && !Ae());) {
                    var f = M.callback;
                    if (typeof f == "function") {
                        M.callback = null, L = M.priorityLevel;
                        var j = f(M.expirationTime <= b);
                        b = N.unstable_now(), typeof j == "function" ? M.callback = j : M === m(B) && D(B), de(b)
                    } else D(B);
                    M = m(B)
                }
                if (M !== null) var pe = !0;
                else {
                    var ee = m(_);
                    ee !== null && U(ve, ee.startTime - b), pe = !1
                }
                return pe
            } finally {
                M = null, L = F, O = !1
            }
        }
        var Re = !1,
            fe = null,
            me = -1,
            se = 5,
            ke = -1;

        function Ae() {
            return !(N.unstable_now() - ke < se)
        }

        function be() {
            if (fe !== null) {
                var x = N.unstable_now();
                ke = x;
                var b = !0;
                try {
                    b = fe(!0, x)
                } finally {
                    b ? z() : (Re = !1, fe = null)
                }
            } else Re = !1
        }
        var z;
        if (typeof he == "function") z = function() {
            he(be)
        };
        else if (typeof MessageChannel < "u") {
            var J = new MessageChannel,
                Q = J.port2;
            J.port1.onmessage = be, z = function() {
                Q.postMessage(null)
            }
        } else z = function() {
            Z(be, 0)
        };

        function le(x) {
            fe = x, Re || (Re = !0, z())
        }

        function U(x, b) {
            me = Z(function() {
                x(N.unstable_now())
            }, b)
        }
        N.unstable_IdlePriority = 5, N.unstable_ImmediatePriority = 1, N.unstable_LowPriority = 4, N.unstable_NormalPriority = 3, N.unstable_Profiling = null, N.unstable_UserBlockingPriority = 2, N.unstable_cancelCallback = function(x) {
            x.callback = null
        }, N.unstable_continueExecution = function() {
            ue || O || (ue = !0, le(_e))
        }, N.unstable_forceFrameRate = function(x) {
            0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < x ? Math.floor(1e3 / x) : 5
        }, N.unstable_getCurrentPriorityLevel = function() {
            return L
        }, N.unstable_getFirstCallbackNode = function() {
            return m(B)
        }, N.unstable_next = function(x) {
            switch (L) {
                case 1:
                case 2:
                case 3:
                    var b = 3;
                    break;
                default:
                    b = L
            }
            var F = L;
            L = b;
            try {
                return x()
            } finally {
                L = F
            }
        }, N.unstable_pauseExecution = function() {}, N.unstable_requestPaint = function() {}, N.unstable_runWithPriority = function(x, b) {
            switch (x) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    x = 3
            }
            var F = L;
            L = x;
            try {
                return b()
            } finally {
                L = F
            }
        }, N.unstable_scheduleCallback = function(x, b, F) {
            var f = N.unstable_now();
            switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? f + F : f) : F = f, x) {
                case 1:
                    var j = -1;
                    break;
                case 2:
                    j = 250;
                    break;
                case 5:
                    j = 1073741823;
                    break;
                case 4:
                    j = 1e4;
                    break;
                default:
                    j = 5e3
            }
            return j = F + j, x = {
                id: T++,
                callback: b,
                priorityLevel: x,
                startTime: F,
                expirationTime: j,
                sortIndex: -1
            }, F > f ? (x.sortIndex = F, y(_, x), m(B) === null && x === m(_) && (Y ? (ce(me), me = -1) : Y = !0, U(ve, F - f))) : (x.sortIndex = j, y(B, x), ue || O || (ue = !0, le(_e))), x
        }, N.unstable_shouldYield = Ae, N.unstable_wrapCallback = function(x) {
            var b = L;
            return function() {
                var F = L;
                L = b;
                try {
                    return x.apply(this, arguments)
                } finally {
                    L = F
                }
            }
        }
    }(ei)), ei
}
var Uu;

function bd() {
    return Uu || (Uu = 1, Jo.exports = Ud()), Jo.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bu;

function Bd() {
    if (bu) return dt;
    bu = 1;
    var N = ti(),
        y = bd();

    function m(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var D = new Set,
        R = {};

    function E(e, t) {
        V(e, t), V(e + "Capture", t)
    }

    function V(e, t) {
        for (R[e] = t, e = 0; e < t.length; e++) D.add(t[e])
    }
    var A = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        B = Object.prototype.hasOwnProperty,
        _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        T = {},
        M = {};

    function L(e) {
        return B.call(M, e) ? !0 : B.call(T, e) ? !1 : _.test(e) ? M[e] = !0 : (T[e] = !0, !1)
    }

    function O(e, t, n, r) {
        if (n !== null && n.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }

    function ue(e, t, n, r) {
        if (t === null || typeof t > "u" || O(e, t, n, r)) return !0;
        if (r) return !1;
        if (n !== null) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function Y(e, t, n, r, l, s, i) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i
    }
    var Z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        Z[e] = new Y(e, 0, !1, e, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var t = e[0];
        Z[t] = new Y(t, 1, !1, e[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        Z[e] = new Y(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        Z[e] = new Y(e, 2, !1, e, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        Z[e] = new Y(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        Z[e] = new Y(e, 3, !0, e, null, !1, !1)
    }), ["capture", "download"].forEach(function(e) {
        Z[e] = new Y(e, 4, !1, e, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
        Z[e] = new Y(e, 6, !1, e, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(e) {
        Z[e] = new Y(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var ce = /[\-:]([a-z])/g;

    function he(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(ce, he);
        Z[t] = new Y(t, 1, !1, e, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(ce, he);
        Z[t] = new Y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(ce, he);
        Z[t] = new Y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
        Z[e] = new Y(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }), Z.xlinkHref = new Y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
        Z[e] = new Y(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function de(e, t, n, r) {
        var l = Z.hasOwnProperty(t) ? Z[t] : null;
        (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ue(t, n, l, r) && (n = null), r || l === null ? L(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    var ve = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        _e = Symbol.for("react.element"),
        Re = Symbol.for("react.portal"),
        fe = Symbol.for("react.fragment"),
        me = Symbol.for("react.strict_mode"),
        se = Symbol.for("react.profiler"),
        ke = Symbol.for("react.provider"),
        Ae = Symbol.for("react.context"),
        be = Symbol.for("react.forward_ref"),
        z = Symbol.for("react.suspense"),
        J = Symbol.for("react.suspense_list"),
        Q = Symbol.for("react.memo"),
        le = Symbol.for("react.lazy"),
        U = Symbol.for("react.offscreen"),
        x = Symbol.iterator;

    function b(e) {
        return e === null || typeof e != "object" ? null : (e = x && e[x] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var F = Object.assign,
        f;

    function j(e) {
        if (f === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            f = t && t[1] || ""
        }
        return `
` + f + e
    }
    var pe = !1;

    function ee(e, t) {
        if (!e || pe) return "";
        pe = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (g) {
                        var r = g
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (g) {
                        r = g
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (g) {
                    r = g
                }
                e()
            }
        } catch (g) {
            if (g && r && typeof g.stack == "string") {
                for (var l = g.stack.split(`
`), s = r.stack.split(`
`), i = l.length - 1, a = s.length - 1; 1 <= i && 0 <= a && l[i] !== s[a];) a--;
                for (; 1 <= i && 0 <= a; i--, a--)
                    if (l[i] !== s[a]) {
                        if (i !== 1 || a !== 1)
                            do
                                if (i--, a--, 0 > a || l[i] !== s[a]) {
                                    var u = `
` + l[i].replace(" at new ", " at ");
                                    return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                                } while (1 <= i && 0 <= a);
                        break
                    }
            }
        } finally {
            pe = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? j(e) : ""
    }

    function Ne(e) {
        switch (e.tag) {
            case 5:
                return j(e.type);
            case 16:
                return j("Lazy");
            case 13:
                return j("Suspense");
            case 19:
                return j("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = ee(e.type, !1), e;
            case 11:
                return e = ee(e.type.render, !1), e;
            case 1:
                return e = ee(e.type, !0), e;
            default:
                return ""
        }
    }

    function te(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case fe:
                return "Fragment";
            case Re:
                return "Portal";
            case se:
                return "Profiler";
            case me:
                return "StrictMode";
            case z:
                return "Suspense";
            case J:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case Ae:
                return (e.displayName || "Context") + ".Consumer";
            case ke:
                return (e._context.displayName || "Context") + ".Provider";
            case be:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Q:
                return t = e.displayName || null, t !== null ? t : te(e.type) || "Memo";
            case le:
                t = e._payload, e = e._init;
                try {
                    return te(e(t))
                } catch {}
        }
        return null
    }

    function Ce(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return te(t);
            case 8:
                return t === me ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t
        }
        return null
    }

    function je(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function Me(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function De(e) {
        var t = Me(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var l = n.get,
                s = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return l.call(this)
                },
                set: function(i) {
                    r = "" + i, s.call(this, i)
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return r
                },
                setValue: function(i) {
                    r = "" + i
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function St(e) {
        e._valueTracker || (e._valueTracker = De(e))
    }

    function vt(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = Me(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
    }

    function Ct(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }

    function Wt(e, t) {
        var n = t.checked;
        return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        })
    }

    function Hn(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue,
            r = t.checked != null ? t.checked : t.defaultChecked;
        n = je(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }

    function Et(e, t) {
        t = t.checked, t != null && de(e, "checked", t, !1)
    }

    function en(e, t) {
        Et(e, t);
        var n = je(t.value),
            r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? tn(e, t.type, n) : t.hasOwnProperty("defaultValue") && tn(e, t.type, je(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }

    function _t(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
    }

    function tn(e, t, n) {
        (t !== "number" || Ct(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var Mt = Array.isArray;

    function Pt(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
            for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + je(n), t = null, l = 0; l < e.length; l++) {
                if (e[l].value === n) {
                    e[l].selected = !0, r && (e[l].defaultSelected = !0);
                    return
                }
                t !== null || e[l].disabled || (t = e[l])
            }
            t !== null && (t.selected = !0)
        }
    }

    function gt(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
        return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function En(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(m(92));
                if (Mt(n)) {
                    if (1 < n.length) throw Error(m(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""), n = t
        }
        e._wrapperState = {
            initialValue: je(n)
        }
    }

    function _n(e, t) {
        var n = je(t.value),
            r = je(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
    }

    function Tt(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }

    function hr(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function vr(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? hr(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Wn, ll = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, l)
            })
        } : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (Wn = Wn || document.createElement("div"), Wn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Wn.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    });

    function Mn(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Pn = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        ms = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Pn).forEach(function(e) {
        ms.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Pn[t] = Pn[e]
        })
    });

    function sl(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pn.hasOwnProperty(e) && Pn[e] ? ("" + t).trim() : t + "px"
    }

    function gr(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = n.indexOf("--") === 0,
                    l = sl(n, t[n], r);
                n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
            }
    }
    var yr = F({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function xr(e, t) {
        if (t) {
            if (yr[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(m(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(m(61))
            }
            if (t.style != null && typeof t.style != "object") throw Error(m(62))
        }
    }

    function Nr(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var jr = null;

    function nn(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var Qn = null,
        bt = null,
        c = null;

    function p(e) {
        if (e = Br(e)) {
            if (typeof Qn != "function") throw Error(m(280));
            var t = e.stateNode;
            t && (t = El(t), Qn(e.stateNode, e.type, t))
        }
    }

    function w(e) {
        bt ? c ? c.push(e) : c = [e] : bt = e
    }

    function q() {
        if (bt) {
            var e = bt,
                t = c;
            if (c = bt = null, p(e), t)
                for (e = 0; e < t.length; e++) p(t[e])
        }
    }

    function H(e, t) {
        return e(t)
    }

    function oe() {}
    var we = !1;

    function ye(e, t, n) {
        if (we) return e(t, n);
        we = !0;
        try {
            return H(e, t, n)
        } finally {
            we = !1, (bt !== null || c !== null) && (oe(), q())
        }
    }

    function ae(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = El(n);
        if (r === null) return null;
        n = r[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(m(231, t, typeof n));
        return n
    }
    var rt = !1;
    if (A) try {
        var Lt = {};
        Object.defineProperty(Lt, "passive", {
            get: function() {
                rt = !0
            }
        }), window.addEventListener("test", Lt, Lt), window.removeEventListener("test", Lt, Lt)
    } catch {
        rt = !1
    }

    function He(e, t, n, r, l, s, i, a, u) {
        var g = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, g)
        } catch (S) {
            this.onError(S)
        }
    }
    var rn = !1,
        Tn = null,
        ln = !1,
        ps = null,
        Iu = {
            onError: function(e) {
                rn = !0, Tn = e
            }
        };

    function Vu(e, t, n, r, l, s, i, a, u) {
        rn = !1, Tn = null, He.apply(Iu, arguments)
    }

    function Hu(e, t, n, r, l, s, i, a, u) {
        if (Vu.apply(this, arguments), rn) {
            if (rn) {
                var g = Tn;
                rn = !1, Tn = null
            } else throw Error(m(198));
            ln || (ln = !0, ps = g)
        }
    }

    function Ln(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function ni(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function ri(e) {
        if (Ln(e) !== e) throw Error(m(188))
    }

    function Wu(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Ln(e), t === null) throw Error(m(188));
            return t !== e ? null : e
        }
        for (var n = e, r = t;;) {
            var l = n.return;
            if (l === null) break;
            var s = l.alternate;
            if (s === null) {
                if (r = l.return, r !== null) {
                    n = r;
                    continue
                }
                break
            }
            if (l.child === s.child) {
                for (s = l.child; s;) {
                    if (s === n) return ri(l), e;
                    if (s === r) return ri(l), t;
                    s = s.sibling
                }
                throw Error(m(188))
            }
            if (n.return !== r.return) n = l, r = s;
            else {
                for (var i = !1, a = l.child; a;) {
                    if (a === n) {
                        i = !0, n = l, r = s;
                        break
                    }
                    if (a === r) {
                        i = !0, r = l, n = s;
                        break
                    }
                    a = a.sibling
                }
                if (!i) {
                    for (a = s.child; a;) {
                        if (a === n) {
                            i = !0, n = s, r = l;
                            break
                        }
                        if (a === r) {
                            i = !0, r = s, n = l;
                            break
                        }
                        a = a.sibling
                    }
                    if (!i) throw Error(m(189))
                }
            }
            if (n.alternate !== r) throw Error(m(190))
        }
        if (n.tag !== 3) throw Error(m(188));
        return n.stateNode.current === n ? e : t
    }

    function li(e) {
        return e = Wu(e), e !== null ? si(e) : null
    }

    function si(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var t = si(e);
            if (t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var oi = y.unstable_scheduleCallback,
        ii = y.unstable_cancelCallback,
        Qu = y.unstable_shouldYield,
        qu = y.unstable_requestPaint,
        $e = y.unstable_now,
        Ku = y.unstable_getCurrentPriorityLevel,
        hs = y.unstable_ImmediatePriority,
        ai = y.unstable_UserBlockingPriority,
        ol = y.unstable_NormalPriority,
        Xu = y.unstable_LowPriority,
        ui = y.unstable_IdlePriority,
        il = null,
        Bt = null;

    function Yu(e) {
        if (Bt && typeof Bt.onCommitFiberRoot == "function") try {
            Bt.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
    }
    var zt = Math.clz32 ? Math.clz32 : Ju,
        Gu = Math.log,
        Zu = Math.LN2;

    function Ju(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Gu(e) / Zu | 0) | 0
    }
    var al = 64,
        ul = 4194304;

    function wr(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }

    function cl(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0,
            l = e.suspendedLanes,
            s = e.pingedLanes,
            i = n & 268435455;
        if (i !== 0) {
            var a = i & ~l;
            a !== 0 ? r = wr(a) : (s &= i, s !== 0 && (r = wr(s)))
        } else i = n & ~l, i !== 0 ? r = wr(i) : s !== 0 && (r = wr(s));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, s = t & -t, l >= s || l === 16 && (s & 4194240) !== 0)) return t;
        if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0)
            for (e = e.entanglements, t &= r; 0 < t;) n = 31 - zt(t), l = 1 << n, r |= e[n], t &= ~l;
        return r
    }

    function ec(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function tc(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
            var i = 31 - zt(s),
                a = 1 << i,
                u = l[i];
            u === -1 ? ((a & n) === 0 || (a & r) !== 0) && (l[i] = ec(a, t)) : u <= t && (e.expiredLanes |= a), s &= ~a
        }
    }

    function vs(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function ci() {
        var e = al;
        return al <<= 1, (al & 4194240) === 0 && (al = 64), e
    }

    function gs(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function kr(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - zt(t), e[t] = n
    }

    function nc(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n;) {
            var l = 31 - zt(n),
                s = 1 << l;
            t[l] = 0, r[l] = -1, e[l] = -1, n &= ~s
        }
    }

    function ys(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var r = 31 - zt(n),
                l = 1 << r;
            l & t | e[r] & t && (e[r] |= t), n &= ~l
        }
    }
    var Pe = 0;

    function di(e) {
        return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var fi, xs, mi, pi, hi, Ns = !1,
        dl = [],
        sn = null,
        on = null,
        an = null,
        Sr = new Map,
        Cr = new Map,
        un = [],
        rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function vi(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                sn = null;
                break;
            case "dragenter":
            case "dragleave":
                on = null;
                break;
            case "mouseover":
            case "mouseout":
                an = null;
                break;
            case "pointerover":
            case "pointerout":
                Sr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Cr.delete(t.pointerId)
        }
    }

    function Er(e, t, n, r, l, s) {
        return e === null || e.nativeEvent !== s ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: s,
            targetContainers: [l]
        }, t !== null && (t = Br(t), t !== null && xs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
    }

    function lc(e, t, n, r, l) {
        switch (t) {
            case "focusin":
                return sn = Er(sn, e, t, n, r, l), !0;
            case "dragenter":
                return on = Er(on, e, t, n, r, l), !0;
            case "mouseover":
                return an = Er(an, e, t, n, r, l), !0;
            case "pointerover":
                var s = l.pointerId;
                return Sr.set(s, Er(Sr.get(s) || null, e, t, n, r, l)), !0;
            case "gotpointercapture":
                return s = l.pointerId, Cr.set(s, Er(Cr.get(s) || null, e, t, n, r, l)), !0
        }
        return !1
    }

    function gi(e) {
        var t = zn(e.target);
        if (t !== null) {
            var n = Ln(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = ni(n), t !== null) {
                        e.blockedOn = t, hi(e.priority, function() {
                            mi(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function fl(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                jr = r, n.target.dispatchEvent(r), jr = null
            } else return t = Br(n), t !== null && xs(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function yi(e, t, n) {
        fl(e) && n.delete(t)
    }

    function sc() {
        Ns = !1, sn !== null && fl(sn) && (sn = null), on !== null && fl(on) && (on = null), an !== null && fl(an) && (an = null), Sr.forEach(yi), Cr.forEach(yi)
    }

    function _r(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Ns || (Ns = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, sc)))
    }

    function Mr(e) {
        function t(l) {
            return _r(l, e)
        }
        if (0 < dl.length) {
            _r(dl[0], e);
            for (var n = 1; n < dl.length; n++) {
                var r = dl[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (sn !== null && _r(sn, e), on !== null && _r(on, e), an !== null && _r(an, e), Sr.forEach(t), Cr.forEach(t), n = 0; n < un.length; n++) r = un[n], r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < un.length && (n = un[0], n.blockedOn === null);) gi(n), n.blockedOn === null && un.shift()
    }
    var qn = ve.ReactCurrentBatchConfig,
        ml = !0;

    function oc(e, t, n, r) {
        var l = Pe,
            s = qn.transition;
        qn.transition = null;
        try {
            Pe = 1, js(e, t, n, r)
        } finally {
            Pe = l, qn.transition = s
        }
    }

    function ic(e, t, n, r) {
        var l = Pe,
            s = qn.transition;
        qn.transition = null;
        try {
            Pe = 4, js(e, t, n, r)
        } finally {
            Pe = l, qn.transition = s
        }
    }

    function js(e, t, n, r) {
        if (ml) {
            var l = ws(e, t, n, r);
            if (l === null) bs(e, t, r, pl, n), vi(e, r);
            else if (lc(l, e, t, n, r)) r.stopPropagation();
            else if (vi(e, r), t & 4 && -1 < rc.indexOf(e)) {
                for (; l !== null;) {
                    var s = Br(l);
                    if (s !== null && fi(s), s = ws(e, t, n, r), s === null && bs(e, t, r, pl, n), s === l) break;
                    l = s
                }
                l !== null && r.stopPropagation()
            } else bs(e, t, r, null, n)
        }
    }
    var pl = null;

    function ws(e, t, n, r) {
        if (pl = null, e = nn(r), e = zn(e), e !== null)
            if (t = Ln(e), t === null) e = null;
            else if (n = t.tag, n === 13) {
            if (e = ni(t), e !== null) return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
        return pl = e, null
    }

    function xi(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (Ku()) {
                    case hs:
                        return 1;
                    case ai:
                        return 4;
                    case ol:
                    case Xu:
                        return 16;
                    case ui:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var cn = null,
        ks = null,
        hl = null;

    function Ni() {
        if (hl) return hl;
        var e, t = ks,
            n = t.length,
            r, l = "value" in cn ? cn.value : cn.textContent,
            s = l.length;
        for (e = 0; e < n && t[e] === l[e]; e++);
        var i = n - e;
        for (r = 1; r <= i && t[n - r] === l[s - r]; r++);
        return hl = l.slice(e, 1 < r ? 1 - r : void 0)
    }

    function vl(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function gl() {
        return !0
    }

    function ji() {
        return !1
    }

    function ft(e) {
        function t(n, r, l, s, i) {
            this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
            for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
            return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? gl : ji, this.isPropagationStopped = ji, this
        }
        return F(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gl)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gl)
            },
            persist: function() {},
            isPersistent: gl
        }), t
    }
    var Kn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Ss = ft(Kn),
        Pr = F({}, Kn, {
            view: 0,
            detail: 0
        }),
        ac = ft(Pr),
        Cs, Es, Tr, yl = F({}, Pr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Ms,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Tr && (Tr && e.type === "mousemove" ? (Cs = e.screenX - Tr.screenX, Es = e.screenY - Tr.screenY) : Es = Cs = 0, Tr = e), Cs)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Es
            }
        }),
        wi = ft(yl),
        uc = F({}, yl, {
            dataTransfer: 0
        }),
        cc = ft(uc),
        dc = F({}, Pr, {
            relatedTarget: 0
        }),
        _s = ft(dc),
        fc = F({}, Kn, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        mc = ft(fc),
        pc = F({}, Kn, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        hc = ft(pc),
        vc = F({}, Kn, {
            data: 0
        }),
        ki = ft(vc),
        gc = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        yc = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        xc = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Nc(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = xc[e]) ? !!t[e] : !1
    }

    function Ms() {
        return Nc
    }
    var jc = F({}, Pr, {
            key: function(e) {
                if (e.key) {
                    var t = gc[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = vl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yc[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Ms,
            charCode: function(e) {
                return e.type === "keypress" ? vl(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? vl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        wc = ft(jc),
        kc = F({}, yl, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Si = ft(kc),
        Sc = F({}, Pr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Ms
        }),
        Cc = ft(Sc),
        Ec = F({}, Kn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        _c = ft(Ec),
        Mc = F({}, yl, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Pc = ft(Mc),
        Tc = [9, 13, 27, 32],
        Ps = A && "CompositionEvent" in window,
        Lr = null;
    A && "documentMode" in document && (Lr = document.documentMode);
    var Lc = A && "TextEvent" in window && !Lr,
        Ci = A && (!Ps || Lr && 8 < Lr && 11 >= Lr),
        Ei = " ",
        _i = !1;

    function Mi(e, t) {
        switch (e) {
            case "keyup":
                return Tc.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Pi(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var Xn = !1;

    function zc(e, t) {
        switch (e) {
            case "compositionend":
                return Pi(t);
            case "keypress":
                return t.which !== 32 ? null : (_i = !0, Ei);
            case "textInput":
                return e = t.data, e === Ei && _i ? null : e;
            default:
                return null
        }
    }

    function Fc(e, t) {
        if (Xn) return e === "compositionend" || !Ps && Mi(e, t) ? (e = Ni(), hl = ks = cn = null, Xn = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Ci && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Rc = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Ti(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Rc[e.type] : t === "textarea"
    }

    function Li(e, t, n, r) {
        w(r), t = kl(t, "onChange"), 0 < t.length && (n = new Ss("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }))
    }
    var zr = null,
        Fr = null;

    function Ac(e) {
        Xi(e, 0)
    }

    function xl(e) {
        var t = er(e);
        if (vt(t)) return e
    }

    function Dc(e, t) {
        if (e === "change") return t
    }
    var zi = !1;
    if (A) {
        var Ts;
        if (A) {
            var Ls = "oninput" in document;
            if (!Ls) {
                var Fi = document.createElement("div");
                Fi.setAttribute("oninput", "return;"), Ls = typeof Fi.oninput == "function"
            }
            Ts = Ls
        } else Ts = !1;
        zi = Ts && (!document.documentMode || 9 < document.documentMode)
    }

    function Ri() {
        zr && (zr.detachEvent("onpropertychange", Ai), Fr = zr = null)
    }

    function Ai(e) {
        if (e.propertyName === "value" && xl(Fr)) {
            var t = [];
            Li(t, Fr, e, nn(e)), ye(Ac, t)
        }
    }

    function Oc(e, t, n) {
        e === "focusin" ? (Ri(), zr = t, Fr = n, zr.attachEvent("onpropertychange", Ai)) : e === "focusout" && Ri()
    }

    function Uc(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return xl(Fr)
    }

    function bc(e, t) {
        if (e === "click") return xl(t)
    }

    function Bc(e, t) {
        if (e === "input" || e === "change") return xl(t)
    }

    function $c(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Ft = typeof Object.is == "function" ? Object.is : $c;

    function Rr(e, t) {
        if (Ft(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var l = n[r];
            if (!B.call(t, l) || !Ft(e[l], t[l])) return !1
        }
        return !0
    }

    function Di(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Oi(e, t) {
        var n = Di(e);
        e = 0;
        for (var r; n;) {
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length, e <= t && r >= t) return {
                    node: n,
                    offset: t - e
                };
                e = r
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Di(n)
        }
    }

    function Ui(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ui(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function bi() {
        for (var e = window, t = Ct(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) e = t.contentWindow;
            else break;
            t = Ct(e.document)
        }
        return t
    }

    function zs(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function Ic(e) {
        var t = bi(),
            n = e.focusedElem,
            r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && Ui(n.ownerDocument.documentElement, n)) {
            if (r !== null && zs(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var l = n.textContent.length,
                        s = Math.min(r.start, l);
                    r = r.end === void 0 ? s : Math.min(r.end, l), !e.extend && s > r && (l = r, r = s, s = l), l = Oi(n, s);
                    var i = Oi(n, r);
                    l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
                }
            }
            for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }
    var Vc = A && "documentMode" in document && 11 >= document.documentMode,
        Yn = null,
        Fs = null,
        Ar = null,
        Rs = !1;

    function Bi(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Rs || Yn == null || Yn !== Ct(r) || (r = Yn, "selectionStart" in r && zs(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Ar && Rr(Ar, r) || (Ar = r, r = kl(Fs, "onSelect"), 0 < r.length && (t = new Ss("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Yn)))
    }

    function Nl(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var Gn = {
            animationend: Nl("Animation", "AnimationEnd"),
            animationiteration: Nl("Animation", "AnimationIteration"),
            animationstart: Nl("Animation", "AnimationStart"),
            transitionend: Nl("Transition", "TransitionEnd")
        },
        As = {},
        $i = {};
    A && ($i = document.createElement("div").style, "AnimationEvent" in window || (delete Gn.animationend.animation, delete Gn.animationiteration.animation, delete Gn.animationstart.animation), "TransitionEvent" in window || delete Gn.transitionend.transition);

    function jl(e) {
        if (As[e]) return As[e];
        if (!Gn[e]) return e;
        var t = Gn[e],
            n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in $i) return As[e] = t[n];
        return e
    }
    var Ii = jl("animationend"),
        Vi = jl("animationiteration"),
        Hi = jl("animationstart"),
        Wi = jl("transitionend"),
        Qi = new Map,
        qi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function dn(e, t) {
        Qi.set(e, t), E(t, [e])
    }
    for (var Ds = 0; Ds < qi.length; Ds++) {
        var Os = qi[Ds],
            Hc = Os.toLowerCase(),
            Wc = Os[0].toUpperCase() + Os.slice(1);
        dn(Hc, "on" + Wc)
    }
    dn(Ii, "onAnimationEnd"), dn(Vi, "onAnimationIteration"), dn(Hi, "onAnimationStart"), dn("dblclick", "onDoubleClick"), dn("focusin", "onFocus"), dn("focusout", "onBlur"), dn(Wi, "onTransitionEnd"), V("onMouseEnter", ["mouseout", "mouseover"]), V("onMouseLeave", ["mouseout", "mouseover"]), V("onPointerEnter", ["pointerout", "pointerover"]), V("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Qc = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));

    function Ki(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Hu(r, t, void 0, e), e.currentTarget = null
    }

    function Xi(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                l = r.event;
            r = r.listeners;
            e: {
                var s = void 0;
                if (t)
                    for (var i = r.length - 1; 0 <= i; i--) {
                        var a = r[i],
                            u = a.instance,
                            g = a.currentTarget;
                        if (a = a.listener, u !== s && l.isPropagationStopped()) break e;
                        Ki(l, a, g), s = u
                    } else
                        for (i = 0; i < r.length; i++) {
                            if (a = r[i], u = a.instance, g = a.currentTarget, a = a.listener, u !== s && l.isPropagationStopped()) break e;
                            Ki(l, a, g), s = u
                        }
            }
        }
        if (ln) throw e = ps, ln = !1, ps = null, e
    }

    function Le(e, t) {
        var n = t[Ws];
        n === void 0 && (n = t[Ws] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Yi(t, e, 2, !1), n.add(r))
    }

    function Us(e, t, n) {
        var r = 0;
        t && (r |= 4), Yi(n, e, r, t)
    }
    var wl = "_reactListening" + Math.random().toString(36).slice(2);

    function Or(e) {
        if (!e[wl]) {
            e[wl] = !0, D.forEach(function(n) {
                n !== "selectionchange" && (Qc.has(n) || Us(n, !1, e), Us(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[wl] || (t[wl] = !0, Us("selectionchange", !1, t))
        }
    }

    function Yi(e, t, n, r) {
        switch (xi(t)) {
            case 1:
                var l = oc;
                break;
            case 4:
                l = ic;
                break;
            default:
                l = js
        }
        n = l.bind(null, t, n, e), l = void 0, !rt || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: l
        }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
            passive: l
        }) : e.addEventListener(t, n, !1)
    }

    function bs(e, t, n, r, l) {
        var s = r;
        if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (;;) {
            if (r === null) return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === l || a.nodeType === 8 && a.parentNode === l) break;
                if (i === 4)
                    for (i = r.return; i !== null;) {
                        var u = i.tag;
                        if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
                        i = i.return
                    }
                for (; a !== null;) {
                    if (i = zn(a), i === null) return;
                    if (u = i.tag, u === 5 || u === 6) {
                        r = s = i;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
        ye(function() {
            var g = s,
                S = nn(n),
                C = [];
            e: {
                var k = Qi.get(e);
                if (k !== void 0) {
                    var $ = Ss,
                        W = e;
                    switch (e) {
                        case "keypress":
                            if (vl(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            $ = wc;
                            break;
                        case "focusin":
                            W = "focus", $ = _s;
                            break;
                        case "focusout":
                            W = "blur", $ = _s;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            $ = _s;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            $ = wi;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            $ = cc;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            $ = Cc;
                            break;
                        case Ii:
                        case Vi:
                        case Hi:
                            $ = mc;
                            break;
                        case Wi:
                            $ = _c;
                            break;
                        case "scroll":
                            $ = ac;
                            break;
                        case "wheel":
                            $ = Pc;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            $ = hc;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            $ = Si
                    }
                    var K = (t & 4) !== 0,
                        Ie = !K && e === "scroll",
                        h = K ? k !== null ? k + "Capture" : null : k;
                    K = [];
                    for (var d = g, v; d !== null;) {
                        v = d;
                        var P = v.stateNode;
                        if (v.tag === 5 && P !== null && (v = P, h !== null && (P = ae(d, h), P != null && K.push(Ur(d, P, v)))), Ie) break;
                        d = d.return
                    }
                    0 < K.length && (k = new $(k, W, null, n, S), C.push({
                        event: k,
                        listeners: K
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (k = e === "mouseover" || e === "pointerover", $ = e === "mouseout" || e === "pointerout", k && n !== jr && (W = n.relatedTarget || n.fromElement) && (zn(W) || W[Qt])) break e;
                    if (($ || k) && (k = S.window === S ? S : (k = S.ownerDocument) ? k.defaultView || k.parentWindow : window, $ ? (W = n.relatedTarget || n.toElement, $ = g, W = W ? zn(W) : null, W !== null && (Ie = Ln(W), W !== Ie || W.tag !== 5 && W.tag !== 6) && (W = null)) : ($ = null, W = g), $ !== W)) {
                        if (K = wi, P = "onMouseLeave", h = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (K = Si, P = "onPointerLeave", h = "onPointerEnter", d = "pointer"), Ie = $ == null ? k : er($), v = W == null ? k : er(W), k = new K(P, d + "leave", $, n, S), k.target = Ie, k.relatedTarget = v, P = null, zn(S) === g && (K = new K(h, d + "enter", W, n, S), K.target = v, K.relatedTarget = Ie, P = K), Ie = P, $ && W) t: {
                            for (K = $, h = W, d = 0, v = K; v; v = Zn(v)) d++;
                            for (v = 0, P = h; P; P = Zn(P)) v++;
                            for (; 0 < d - v;) K = Zn(K),
                            d--;
                            for (; 0 < v - d;) h = Zn(h),
                            v--;
                            for (; d--;) {
                                if (K === h || h !== null && K === h.alternate) break t;
                                K = Zn(K), h = Zn(h)
                            }
                            K = null
                        }
                        else K = null;
                        $ !== null && Gi(C, k, $, K, !1), W !== null && Ie !== null && Gi(C, Ie, W, K, !0)
                    }
                }
                e: {
                    if (k = g ? er(g) : window, $ = k.nodeName && k.nodeName.toLowerCase(), $ === "select" || $ === "input" && k.type === "file") var X = Dc;
                    else if (Ti(k))
                        if (zi) X = Bc;
                        else {
                            X = Uc;
                            var ne = Oc
                        }
                    else($ = k.nodeName) && $.toLowerCase() === "input" && (k.type === "checkbox" || k.type === "radio") && (X = bc);
                    if (X && (X = X(e, g))) {
                        Li(C, X, n, S);
                        break e
                    }
                    ne && ne(e, k, g),
                    e === "focusout" && (ne = k._wrapperState) && ne.controlled && k.type === "number" && tn(k, "number", k.value)
                }
                switch (ne = g ? er(g) : window, e) {
                    case "focusin":
                        (Ti(ne) || ne.contentEditable === "true") && (Yn = ne, Fs = g, Ar = null);
                        break;
                    case "focusout":
                        Ar = Fs = Yn = null;
                        break;
                    case "mousedown":
                        Rs = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Rs = !1, Bi(C, n, S);
                        break;
                    case "selectionchange":
                        if (Vc) break;
                    case "keydown":
                    case "keyup":
                        Bi(C, n, S)
                }
                var re;
                if (Ps) e: {
                    switch (e) {
                        case "compositionstart":
                            var ie = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ie = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ie = "onCompositionUpdate";
                            break e
                    }
                    ie = void 0
                }
                else Xn ? Mi(e, n) && (ie = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ie = "onCompositionStart");ie && (Ci && n.locale !== "ko" && (Xn || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && Xn && (re = Ni()) : (cn = S, ks = "value" in cn ? cn.value : cn.textContent, Xn = !0)), ne = kl(g, ie), 0 < ne.length && (ie = new ki(ie, e, null, n, S), C.push({
                    event: ie,
                    listeners: ne
                }), re ? ie.data = re : (re = Pi(n), re !== null && (ie.data = re)))),
                (re = Lc ? zc(e, n) : Fc(e, n)) && (g = kl(g, "onBeforeInput"), 0 < g.length && (S = new ki("onBeforeInput", "beforeinput", null, n, S), C.push({
                    event: S,
                    listeners: g
                }), S.data = re))
            }
            Xi(C, t)
        })
    }

    function Ur(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function kl(e, t) {
        for (var n = t + "Capture", r = []; e !== null;) {
            var l = e,
                s = l.stateNode;
            l.tag === 5 && s !== null && (l = s, s = ae(e, n), s != null && r.unshift(Ur(e, s, l)), s = ae(e, t), s != null && r.push(Ur(e, s, l))), e = e.return
        }
        return r
    }

    function Zn(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function Gi(e, t, n, r, l) {
        for (var s = t._reactName, i = []; n !== null && n !== r;) {
            var a = n,
                u = a.alternate,
                g = a.stateNode;
            if (u !== null && u === r) break;
            a.tag === 5 && g !== null && (a = g, l ? (u = ae(n, s), u != null && i.unshift(Ur(n, u, a))) : l || (u = ae(n, s), u != null && i.push(Ur(n, u, a)))), n = n.return
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        })
    }
    var qc = /\r\n?/g,
        Kc = /\u0000|\uFFFD/g;

    function Zi(e) {
        return (typeof e == "string" ? e : "" + e).replace(qc, `
`).replace(Kc, "")
    }

    function Sl(e, t, n) {
        if (t = Zi(t), Zi(e) !== t && n) throw Error(m(425))
    }

    function Cl() {}
    var Bs = null,
        $s = null;

    function Is(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Vs = typeof setTimeout == "function" ? setTimeout : void 0,
        Xc = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Ji = typeof Promise == "function" ? Promise : void 0,
        Yc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ji < "u" ? function(e) {
            return Ji.resolve(null).then(e).catch(Gc)
        } : Vs;

    function Gc(e) {
        setTimeout(function() {
            throw e
        })
    }

    function Hs(e, t) {
        var n = t,
            r = 0;
        do {
            var l = n.nextSibling;
            if (e.removeChild(n), l && l.nodeType === 8)
                if (n = l.data, n === "/$") {
                    if (r === 0) {
                        e.removeChild(l), Mr(t);
                        return
                    }
                    r--
                } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = l
        } while (n);
        Mr(t)
    }

    function fn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    function ea(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--
                } else n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Jn = Math.random().toString(36).slice(2),
        $t = "__reactFiber$" + Jn,
        br = "__reactProps$" + Jn,
        Qt = "__reactContainer$" + Jn,
        Ws = "__reactEvents$" + Jn,
        Zc = "__reactListeners$" + Jn,
        Jc = "__reactHandles$" + Jn;

    function zn(e) {
        var t = e[$t];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[Qt] || n[$t]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                    for (e = ea(e); e !== null;) {
                        if (n = e[$t]) return n;
                        e = ea(e)
                    }
                return t
            }
            e = n, n = e.parentNode
        }
        return null
    }

    function Br(e) {
        return e = e[$t] || e[Qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function er(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(m(33))
    }

    function El(e) {
        return e[br] || null
    }
    var Qs = [],
        tr = -1;

    function mn(e) {
        return {
            current: e
        }
    }

    function ze(e) {
        0 > tr || (e.current = Qs[tr], Qs[tr] = null, tr--)
    }

    function Te(e, t) {
        tr++, Qs[tr] = e.current, e.current = t
    }
    var pn = {},
        Je = mn(pn),
        ot = mn(!1),
        Fn = pn;

    function nr(e, t) {
        var n = e.type.contextTypes;
        if (!n) return pn;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var l = {},
            s;
        for (s in n) l[s] = t[s];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
    }

    function it(e) {
        return e = e.childContextTypes, e != null
    }

    function _l() {
        ze(ot), ze(Je)
    }

    function ta(e, t, n) {
        if (Je.current !== pn) throw Error(m(168));
        Te(Je, t), Te(ot, n)
    }

    function na(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for (var l in r)
            if (!(l in t)) throw Error(m(108, Ce(e) || "Unknown", l));
        return F({}, n, r)
    }

    function Ml(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pn, Fn = Je.current, Te(Je, e), Te(ot, ot.current), !0
    }

    function ra(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(m(169));
        n ? (e = na(e, t, Fn), r.__reactInternalMemoizedMergedChildContext = e, ze(ot), ze(Je), Te(Je, e)) : ze(ot), Te(ot, n)
    }
    var qt = null,
        Pl = !1,
        qs = !1;

    function la(e) {
        qt === null ? qt = [e] : qt.push(e)
    }

    function ed(e) {
        Pl = !0, la(e)
    }

    function hn() {
        if (!qs && qt !== null) {
            qs = !0;
            var e = 0,
                t = Pe;
            try {
                var n = qt;
                for (Pe = 1; e < n.length; e++) {
                    var r = n[e];
                    do r = r(!0); while (r !== null)
                }
                qt = null, Pl = !1
            } catch (l) {
                throw qt !== null && (qt = qt.slice(e + 1)), oi(hs, hn), l
            } finally {
                Pe = t, qs = !1
            }
        }
        return null
    }
    var rr = [],
        lr = 0,
        Tl = null,
        Ll = 0,
        yt = [],
        xt = 0,
        Rn = null,
        Kt = 1,
        Xt = "";

    function An(e, t) {
        rr[lr++] = Ll, rr[lr++] = Tl, Tl = e, Ll = t
    }

    function sa(e, t, n) {
        yt[xt++] = Kt, yt[xt++] = Xt, yt[xt++] = Rn, Rn = e;
        var r = Kt;
        e = Xt;
        var l = 32 - zt(r) - 1;
        r &= ~(1 << l), n += 1;
        var s = 32 - zt(t) + l;
        if (30 < s) {
            var i = l - l % 5;
            s = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Kt = 1 << 32 - zt(t) + l | n << l | r, Xt = s + e
        } else Kt = 1 << s | n << l | r, Xt = e
    }

    function Ks(e) {
        e.return !== null && (An(e, 1), sa(e, 1, 0))
    }

    function Xs(e) {
        for (; e === Tl;) Tl = rr[--lr], rr[lr] = null, Ll = rr[--lr], rr[lr] = null;
        for (; e === Rn;) Rn = yt[--xt], yt[xt] = null, Xt = yt[--xt], yt[xt] = null, Kt = yt[--xt], yt[xt] = null
    }
    var mt = null,
        pt = null,
        Fe = !1,
        Rt = null;

    function oa(e, t) {
        var n = kt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
    }

    function ia(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, mt = e, pt = fn(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, mt = e, pt = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Rn !== null ? {
                    id: Kt,
                    overflow: Xt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = kt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, mt = e, pt = null, !0) : !1;
            default:
                return !1
        }
    }

    function Ys(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function Gs(e) {
        if (Fe) {
            var t = pt;
            if (t) {
                var n = t;
                if (!ia(e, t)) {
                    if (Ys(e)) throw Error(m(418));
                    t = fn(n.nextSibling);
                    var r = mt;
                    t && ia(e, t) ? oa(r, n) : (e.flags = e.flags & -4097 | 2, Fe = !1, mt = e)
                }
            } else {
                if (Ys(e)) throw Error(m(418));
                e.flags = e.flags & -4097 | 2, Fe = !1, mt = e
            }
        }
    }

    function aa(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        mt = e
    }

    function zl(e) {
        if (e !== mt) return !1;
        if (!Fe) return aa(e), Fe = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Is(e.type, e.memoizedProps)), t && (t = pt)) {
            if (Ys(e)) throw ua(), Error(m(418));
            for (; t;) oa(e, t), t = fn(t.nextSibling)
        }
        if (aa(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                pt = fn(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                pt = null
            }
        } else pt = mt ? fn(e.stateNode.nextSibling) : null;
        return !0
    }

    function ua() {
        for (var e = pt; e;) e = fn(e.nextSibling)
    }

    function sr() {
        pt = mt = null, Fe = !1
    }

    function Zs(e) {
        Rt === null ? Rt = [e] : Rt.push(e)
    }
    var td = ve.ReactCurrentBatchConfig;

    function $r(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(m(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(m(147, e));
                var l = r,
                    s = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
                    var a = l.refs;
                    i === null ? delete a[s] : a[s] = i
                }, t._stringRef = s, t)
            }
            if (typeof e != "string") throw Error(m(284));
            if (!n._owner) throw Error(m(290, e))
        }
        return e
    }

    function Fl(e, t) {
        throw e = Object.prototype.toString.call(t), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function ca(e) {
        var t = e._init;
        return t(e._payload)
    }

    function da(e) {
        function t(h, d) {
            if (e) {
                var v = h.deletions;
                v === null ? (h.deletions = [d], h.flags |= 16) : v.push(d)
            }
        }

        function n(h, d) {
            if (!e) return null;
            for (; d !== null;) t(h, d), d = d.sibling;
            return null
        }

        function r(h, d) {
            for (h = new Map; d !== null;) d.key !== null ? h.set(d.key, d) : h.set(d.index, d), d = d.sibling;
            return h
        }

        function l(h, d) {
            return h = kn(h, d), h.index = 0, h.sibling = null, h
        }

        function s(h, d, v) {
            return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < d ? (h.flags |= 2, d) : v) : (h.flags |= 2, d)) : (h.flags |= 1048576, d)
        }

        function i(h) {
            return e && h.alternate === null && (h.flags |= 2), h
        }

        function a(h, d, v, P) {
            return d === null || d.tag !== 6 ? (d = Ho(v, h.mode, P), d.return = h, d) : (d = l(d, v), d.return = h, d)
        }

        function u(h, d, v, P) {
            var X = v.type;
            return X === fe ? S(h, d, v.props.children, P, v.key) : d !== null && (d.elementType === X || typeof X == "object" && X !== null && X.$$typeof === le && ca(X) === d.type) ? (P = l(d, v.props), P.ref = $r(h, d, v), P.return = h, P) : (P = rs(v.type, v.key, v.props, null, h.mode, P), P.ref = $r(h, d, v), P.return = h, P)
        }

        function g(h, d, v, P) {
            return d === null || d.tag !== 4 || d.stateNode.containerInfo !== v.containerInfo || d.stateNode.implementation !== v.implementation ? (d = Wo(v, h.mode, P), d.return = h, d) : (d = l(d, v.children || []), d.return = h, d)
        }

        function S(h, d, v, P, X) {
            return d === null || d.tag !== 7 ? (d = Vn(v, h.mode, P, X), d.return = h, d) : (d = l(d, v), d.return = h, d)
        }

        function C(h, d, v) {
            if (typeof d == "string" && d !== "" || typeof d == "number") return d = Ho("" + d, h.mode, v), d.return = h, d;
            if (typeof d == "object" && d !== null) {
                switch (d.$$typeof) {
                    case _e:
                        return v = rs(d.type, d.key, d.props, null, h.mode, v), v.ref = $r(h, null, d), v.return = h, v;
                    case Re:
                        return d = Wo(d, h.mode, v), d.return = h, d;
                    case le:
                        var P = d._init;
                        return C(h, P(d._payload), v)
                }
                if (Mt(d) || b(d)) return d = Vn(d, h.mode, v, null), d.return = h, d;
                Fl(h, d)
            }
            return null
        }

        function k(h, d, v, P) {
            var X = d !== null ? d.key : null;
            if (typeof v == "string" && v !== "" || typeof v == "number") return X !== null ? null : a(h, d, "" + v, P);
            if (typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                    case _e:
                        return v.key === X ? u(h, d, v, P) : null;
                    case Re:
                        return v.key === X ? g(h, d, v, P) : null;
                    case le:
                        return X = v._init, k(h, d, X(v._payload), P)
                }
                if (Mt(v) || b(v)) return X !== null ? null : S(h, d, v, P, null);
                Fl(h, v)
            }
            return null
        }

        function $(h, d, v, P, X) {
            if (typeof P == "string" && P !== "" || typeof P == "number") return h = h.get(v) || null, a(d, h, "" + P, X);
            if (typeof P == "object" && P !== null) {
                switch (P.$$typeof) {
                    case _e:
                        return h = h.get(P.key === null ? v : P.key) || null, u(d, h, P, X);
                    case Re:
                        return h = h.get(P.key === null ? v : P.key) || null, g(d, h, P, X);
                    case le:
                        var ne = P._init;
                        return $(h, d, v, ne(P._payload), X)
                }
                if (Mt(P) || b(P)) return h = h.get(v) || null, S(d, h, P, X, null);
                Fl(d, P)
            }
            return null
        }

        function W(h, d, v, P) {
            for (var X = null, ne = null, re = d, ie = d = 0, Ye = null; re !== null && ie < v.length; ie++) {
                re.index > ie ? (Ye = re, re = null) : Ye = re.sibling;
                var Ee = k(h, re, v[ie], P);
                if (Ee === null) {
                    re === null && (re = Ye);
                    break
                }
                e && re && Ee.alternate === null && t(h, re), d = s(Ee, d, ie), ne === null ? X = Ee : ne.sibling = Ee, ne = Ee, re = Ye
            }
            if (ie === v.length) return n(h, re), Fe && An(h, ie), X;
            if (re === null) {
                for (; ie < v.length; ie++) re = C(h, v[ie], P), re !== null && (d = s(re, d, ie), ne === null ? X = re : ne.sibling = re, ne = re);
                return Fe && An(h, ie), X
            }
            for (re = r(h, re); ie < v.length; ie++) Ye = $(re, h, ie, v[ie], P), Ye !== null && (e && Ye.alternate !== null && re.delete(Ye.key === null ? ie : Ye.key), d = s(Ye, d, ie), ne === null ? X = Ye : ne.sibling = Ye, ne = Ye);
            return e && re.forEach(function(Sn) {
                return t(h, Sn)
            }), Fe && An(h, ie), X
        }

        function K(h, d, v, P) {
            var X = b(v);
            if (typeof X != "function") throw Error(m(150));
            if (v = X.call(v), v == null) throw Error(m(151));
            for (var ne = X = null, re = d, ie = d = 0, Ye = null, Ee = v.next(); re !== null && !Ee.done; ie++, Ee = v.next()) {
                re.index > ie ? (Ye = re, re = null) : Ye = re.sibling;
                var Sn = k(h, re, Ee.value, P);
                if (Sn === null) {
                    re === null && (re = Ye);
                    break
                }
                e && re && Sn.alternate === null && t(h, re), d = s(Sn, d, ie), ne === null ? X = Sn : ne.sibling = Sn, ne = Sn, re = Ye
            }
            if (Ee.done) return n(h, re), Fe && An(h, ie), X;
            if (re === null) {
                for (; !Ee.done; ie++, Ee = v.next()) Ee = C(h, Ee.value, P), Ee !== null && (d = s(Ee, d, ie), ne === null ? X = Ee : ne.sibling = Ee, ne = Ee);
                return Fe && An(h, ie), X
            }
            for (re = r(h, re); !Ee.done; ie++, Ee = v.next()) Ee = $(re, h, ie, Ee.value, P), Ee !== null && (e && Ee.alternate !== null && re.delete(Ee.key === null ? ie : Ee.key), d = s(Ee, d, ie), ne === null ? X = Ee : ne.sibling = Ee, ne = Ee);
            return e && re.forEach(function(Rd) {
                return t(h, Rd)
            }), Fe && An(h, ie), X
        }

        function Ie(h, d, v, P) {
            if (typeof v == "object" && v !== null && v.type === fe && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                    case _e:
                        e: {
                            for (var X = v.key, ne = d; ne !== null;) {
                                if (ne.key === X) {
                                    if (X = v.type, X === fe) {
                                        if (ne.tag === 7) {
                                            n(h, ne.sibling), d = l(ne, v.props.children), d.return = h, h = d;
                                            break e
                                        }
                                    } else if (ne.elementType === X || typeof X == "object" && X !== null && X.$$typeof === le && ca(X) === ne.type) {
                                        n(h, ne.sibling), d = l(ne, v.props), d.ref = $r(h, ne, v), d.return = h, h = d;
                                        break e
                                    }
                                    n(h, ne);
                                    break
                                } else t(h, ne);
                                ne = ne.sibling
                            }
                            v.type === fe ? (d = Vn(v.props.children, h.mode, P, v.key), d.return = h, h = d) : (P = rs(v.type, v.key, v.props, null, h.mode, P), P.ref = $r(h, d, v), P.return = h, h = P)
                        }
                        return i(h);
                    case Re:
                        e: {
                            for (ne = v.key; d !== null;) {
                                if (d.key === ne)
                                    if (d.tag === 4 && d.stateNode.containerInfo === v.containerInfo && d.stateNode.implementation === v.implementation) {
                                        n(h, d.sibling), d = l(d, v.children || []), d.return = h, h = d;
                                        break e
                                    } else {
                                        n(h, d);
                                        break
                                    }
                                else t(h, d);
                                d = d.sibling
                            }
                            d = Wo(v, h.mode, P),
                            d.return = h,
                            h = d
                        }
                        return i(h);
                    case le:
                        return ne = v._init, Ie(h, d, ne(v._payload), P)
                }
                if (Mt(v)) return W(h, d, v, P);
                if (b(v)) return K(h, d, v, P);
                Fl(h, v)
            }
            return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, d !== null && d.tag === 6 ? (n(h, d.sibling), d = l(d, v), d.return = h, h = d) : (n(h, d), d = Ho(v, h.mode, P), d.return = h, h = d), i(h)) : n(h, d)
        }
        return Ie
    }
    var or = da(!0),
        fa = da(!1),
        Rl = mn(null),
        Al = null,
        ir = null,
        Js = null;

    function eo() {
        Js = ir = Al = null
    }

    function to(e) {
        var t = Rl.current;
        ze(Rl), e._currentValue = t
    }

    function no(e, t, n) {
        for (; e !== null;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function ar(e, t) {
        Al = e, Js = ir = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (at = !0), e.firstContext = null)
    }

    function Nt(e) {
        var t = e._currentValue;
        if (Js !== e)
            if (e = {
                    context: e,
                    memoizedValue: t,
                    next: null
                }, ir === null) {
                if (Al === null) throw Error(m(308));
                ir = e, Al.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else ir = ir.next = e;
        return t
    }
    var Dn = null;

    function ro(e) {
        Dn === null ? Dn = [e] : Dn.push(e)
    }

    function ma(e, t, n, r) {
        var l = t.interleaved;
        return l === null ? (n.next = n, ro(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Yt(e, r)
    }

    function Yt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }
    var vn = !1;

    function lo(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function pa(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function Gt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function gn(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, (Se & 2) !== 0) {
            var l = r.pending;
            return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Yt(e, n)
        }
        return l = r.interleaved, l === null ? (t.next = t, ro(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Yt(e, n)
    }

    function Dl(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, ys(e, n)
        }
    }

    function ha(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (r !== null && (r = r.updateQueue, n === r)) {
            var l = null,
                s = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var i = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    s === null ? l = s = i : s = s.next = i, n = n.next
                } while (n !== null);
                s === null ? l = s = t : s = s.next = t
            } else l = s = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: s,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }

    function Ol(e, t, n, r) {
        var l = e.updateQueue;
        vn = !1;
        var s = l.firstBaseUpdate,
            i = l.lastBaseUpdate,
            a = l.shared.pending;
        if (a !== null) {
            l.shared.pending = null;
            var u = a,
                g = u.next;
            u.next = null, i === null ? s = g : i.next = g, i = u;
            var S = e.alternate;
            S !== null && (S = S.updateQueue, a = S.lastBaseUpdate, a !== i && (a === null ? S.firstBaseUpdate = g : a.next = g, S.lastBaseUpdate = u))
        }
        if (s !== null) {
            var C = l.baseState;
            i = 0, S = g = u = null, a = s;
            do {
                var k = a.lane,
                    $ = a.eventTime;
                if ((r & k) === k) {
                    S !== null && (S = S.next = {
                        eventTime: $,
                        lane: 0,
                        tag: a.tag,
                        payload: a.payload,
                        callback: a.callback,
                        next: null
                    });
                    e: {
                        var W = e,
                            K = a;
                        switch (k = t, $ = n, K.tag) {
                            case 1:
                                if (W = K.payload, typeof W == "function") {
                                    C = W.call($, C, k);
                                    break e
                                }
                                C = W;
                                break e;
                            case 3:
                                W.flags = W.flags & -65537 | 128;
                            case 0:
                                if (W = K.payload, k = typeof W == "function" ? W.call($, C, k) : W, k == null) break e;
                                C = F({}, C, k);
                                break e;
                            case 2:
                                vn = !0
                        }
                    }
                    a.callback !== null && a.lane !== 0 && (e.flags |= 64, k = l.effects, k === null ? l.effects = [a] : k.push(a))
                } else $ = {
                    eventTime: $,
                    lane: k,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                }, S === null ? (g = S = $, u = C) : S = S.next = $, i |= k;
                if (a = a.next, a === null) {
                    if (a = l.shared.pending, a === null) break;
                    k = a, a = k.next, k.next = null, l.lastBaseUpdate = k, l.shared.pending = null
                }
            } while (!0);
            if (S === null && (u = C), l.baseState = u, l.firstBaseUpdate = g, l.lastBaseUpdate = S, t = l.shared.interleaved, t !== null) {
                l = t;
                do i |= l.lane, l = l.next; while (l !== t)
            } else s === null && (l.shared.lanes = 0);
            bn |= i, e.lanes = i, e.memoizedState = C
        }
    }

    function va(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null)
            for (t = 0; t < e.length; t++) {
                var r = e[t],
                    l = r.callback;
                if (l !== null) {
                    if (r.callback = null, r = n, typeof l != "function") throw Error(m(191, l));
                    l.call(r)
                }
            }
    }
    var Ir = {},
        It = mn(Ir),
        Vr = mn(Ir),
        Hr = mn(Ir);

    function On(e) {
        if (e === Ir) throw Error(m(174));
        return e
    }

    function so(e, t) {
        switch (Te(Hr, t), Te(Vr, e), Te(It, Ir), e = t.nodeType, e) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : vr(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = vr(t, e)
        }
        ze(It), Te(It, t)
    }

    function ur() {
        ze(It), ze(Vr), ze(Hr)
    }

    function ga(e) {
        On(Hr.current);
        var t = On(It.current),
            n = vr(t, e.type);
        t !== n && (Te(Vr, e), Te(It, n))
    }

    function oo(e) {
        Vr.current === e && (ze(It), ze(Vr))
    }
    var Oe = mn(0);

    function Ul(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var io = [];

    function ao() {
        for (var e = 0; e < io.length; e++) io[e]._workInProgressVersionPrimary = null;
        io.length = 0
    }
    var bl = ve.ReactCurrentDispatcher,
        uo = ve.ReactCurrentBatchConfig,
        Un = 0,
        Ue = null,
        Qe = null,
        Ke = null,
        Bl = !1,
        Wr = !1,
        Qr = 0,
        nd = 0;

    function et() {
        throw Error(m(321))
    }

    function co(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!Ft(e[n], t[n])) return !1;
        return !0
    }

    function fo(e, t, n, r, l, s) {
        if (Un = s, Ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, bl.current = e === null || e.memoizedState === null ? od : id, e = n(r, l), Wr) {
            s = 0;
            do {
                if (Wr = !1, Qr = 0, 25 <= s) throw Error(m(301));
                s += 1, Ke = Qe = null, t.updateQueue = null, bl.current = ad, e = n(r, l)
            } while (Wr)
        }
        if (bl.current = Vl, t = Qe !== null && Qe.next !== null, Un = 0, Ke = Qe = Ue = null, Bl = !1, t) throw Error(m(300));
        return e
    }

    function mo() {
        var e = Qr !== 0;
        return Qr = 0, e
    }

    function Vt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ke === null ? Ue.memoizedState = Ke = e : Ke = Ke.next = e, Ke
    }

    function jt() {
        if (Qe === null) {
            var e = Ue.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = Qe.next;
        var t = Ke === null ? Ue.memoizedState : Ke.next;
        if (t !== null) Ke = t, Qe = e;
        else {
            if (e === null) throw Error(m(310));
            Qe = e, e = {
                memoizedState: Qe.memoizedState,
                baseState: Qe.baseState,
                baseQueue: Qe.baseQueue,
                queue: Qe.queue,
                next: null
            }, Ke === null ? Ue.memoizedState = Ke = e : Ke = Ke.next = e
        }
        return Ke
    }

    function qr(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function po(e) {
        var t = jt(),
            n = t.queue;
        if (n === null) throw Error(m(311));
        n.lastRenderedReducer = e;
        var r = Qe,
            l = r.baseQueue,
            s = n.pending;
        if (s !== null) {
            if (l !== null) {
                var i = l.next;
                l.next = s.next, s.next = i
            }
            r.baseQueue = l = s, n.pending = null
        }
        if (l !== null) {
            s = l.next, r = r.baseState;
            var a = i = null,
                u = null,
                g = s;
            do {
                var S = g.lane;
                if ((Un & S) === S) u !== null && (u = u.next = {
                    lane: 0,
                    action: g.action,
                    hasEagerState: g.hasEagerState,
                    eagerState: g.eagerState,
                    next: null
                }), r = g.hasEagerState ? g.eagerState : e(r, g.action);
                else {
                    var C = {
                        lane: S,
                        action: g.action,
                        hasEagerState: g.hasEagerState,
                        eagerState: g.eagerState,
                        next: null
                    };
                    u === null ? (a = u = C, i = r) : u = u.next = C, Ue.lanes |= S, bn |= S
                }
                g = g.next
            } while (g !== null && g !== s);
            u === null ? i = r : u.next = a, Ft(r, t.memoizedState) || (at = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
        }
        if (e = n.interleaved, e !== null) {
            l = e;
            do s = l.lane, Ue.lanes |= s, bn |= s, l = l.next; while (l !== e)
        } else l === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }

    function ho(e) {
        var t = jt(),
            n = t.queue;
        if (n === null) throw Error(m(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            l = n.pending,
            s = t.memoizedState;
        if (l !== null) {
            n.pending = null;
            var i = l = l.next;
            do s = e(s, i.action), i = i.next; while (i !== l);
            Ft(s, t.memoizedState) || (at = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
        }
        return [s, r]
    }

    function ya() {}

    function xa(e, t) {
        var n = Ue,
            r = jt(),
            l = t(),
            s = !Ft(r.memoizedState, l);
        if (s && (r.memoizedState = l, at = !0), r = r.queue, vo(wa.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Ke !== null && Ke.memoizedState.tag & 1) {
            if (n.flags |= 2048, Kr(9, ja.bind(null, n, r, l, t), void 0, null), Xe === null) throw Error(m(349));
            (Un & 30) !== 0 || Na(n, t, l)
        }
        return l
    }

    function Na(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = Ue.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function ja(e, t, n, r) {
        t.value = n, t.getSnapshot = r, ka(t) && Sa(e)
    }

    function wa(e, t, n) {
        return n(function() {
            ka(t) && Sa(e)
        })
    }

    function ka(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !Ft(e, n)
        } catch {
            return !0
        }
    }

    function Sa(e) {
        var t = Yt(e, 1);
        t !== null && Ut(t, e, 1, -1)
    }

    function Ca(e) {
        var t = Vt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: qr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = sd.bind(null, Ue, e), [t.memoizedState, e]
    }

    function Kr(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = Ue.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
    }

    function Ea() {
        return jt().memoizedState
    }

    function $l(e, t, n, r) {
        var l = Vt();
        Ue.flags |= e, l.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r)
    }

    function Il(e, t, n, r) {
        var l = jt();
        r = r === void 0 ? null : r;
        var s = void 0;
        if (Qe !== null) {
            var i = Qe.memoizedState;
            if (s = i.destroy, r !== null && co(r, i.deps)) {
                l.memoizedState = Kr(t, n, s, r);
                return
            }
        }
        Ue.flags |= e, l.memoizedState = Kr(1 | t, n, s, r)
    }

    function _a(e, t) {
        return $l(8390656, 8, e, t)
    }

    function vo(e, t) {
        return Il(2048, 8, e, t)
    }

    function Ma(e, t) {
        return Il(4, 2, e, t)
    }

    function Pa(e, t) {
        return Il(4, 4, e, t)
    }

    function Ta(e, t) {
        if (typeof t == "function") return e = e(), t(e),
            function() {
                t(null)
            };
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function La(e, t, n) {
        return n = n != null ? n.concat([e]) : null, Il(4, 4, Ta.bind(null, t, e), n)
    }

    function go() {}

    function za(e, t) {
        var n = jt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && co(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function Fa(e, t) {
        var n = jt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && co(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
    }

    function Ra(e, t, n) {
        return (Un & 21) === 0 ? (e.baseState && (e.baseState = !1, at = !0), e.memoizedState = n) : (Ft(n, t) || (n = ci(), Ue.lanes |= n, bn |= n, e.baseState = !0), t)
    }

    function rd(e, t) {
        var n = Pe;
        Pe = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = uo.transition;
        uo.transition = {};
        try {
            e(!1), t()
        } finally {
            Pe = n, uo.transition = r
        }
    }

    function Aa() {
        return jt().memoizedState
    }

    function ld(e, t, n) {
        var r = jn(e);
        if (n = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Da(e)) Oa(t, n);
        else if (n = ma(e, t, n, r), n !== null) {
            var l = st();
            Ut(n, e, r, l), Ua(n, t, r)
        }
    }

    function sd(e, t, n) {
        var r = jn(e),
            l = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (Da(e)) Oa(t, l);
        else {
            var s = e.alternate;
            if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
                var i = t.lastRenderedState,
                    a = s(i, n);
                if (l.hasEagerState = !0, l.eagerState = a, Ft(a, i)) {
                    var u = t.interleaved;
                    u === null ? (l.next = l, ro(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
                    return
                }
            } catch {} finally {}
            n = ma(e, t, l, r), n !== null && (l = st(), Ut(n, e, r, l), Ua(n, t, r))
        }
    }

    function Da(e) {
        var t = e.alternate;
        return e === Ue || t !== null && t === Ue
    }

    function Oa(e, t) {
        Wr = Bl = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function Ua(e, t, n) {
        if ((n & 4194240) !== 0) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, ys(e, n)
        }
    }
    var Vl = {
            readContext: Nt,
            useCallback: et,
            useContext: et,
            useEffect: et,
            useImperativeHandle: et,
            useInsertionEffect: et,
            useLayoutEffect: et,
            useMemo: et,
            useReducer: et,
            useRef: et,
            useState: et,
            useDebugValue: et,
            useDeferredValue: et,
            useTransition: et,
            useMutableSource: et,
            useSyncExternalStore: et,
            useId: et,
            unstable_isNewReconciler: !1
        },
        od = {
            readContext: Nt,
            useCallback: function(e, t) {
                return Vt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: Nt,
            useEffect: _a,
            useImperativeHandle: function(e, t, n) {
                return n = n != null ? n.concat([e]) : null, $l(4194308, 4, Ta.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return $l(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                return $l(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = Vt();
                return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function(e, t, n) {
                var r = Vt();
                return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }, r.queue = e, e = e.dispatch = ld.bind(null, Ue, e), [r.memoizedState, e]
            },
            useRef: function(e) {
                var t = Vt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: Ca,
            useDebugValue: go,
            useDeferredValue: function(e) {
                return Vt().memoizedState = e
            },
            useTransition: function() {
                var e = Ca(!1),
                    t = e[0];
                return e = rd.bind(null, e[1]), Vt().memoizedState = e, [t, e]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(e, t, n) {
                var r = Ue,
                    l = Vt();
                if (Fe) {
                    if (n === void 0) throw Error(m(407));
                    n = n()
                } else {
                    if (n = t(), Xe === null) throw Error(m(349));
                    (Un & 30) !== 0 || Na(r, t, n)
                }
                l.memoizedState = n;
                var s = {
                    value: n,
                    getSnapshot: t
                };
                return l.queue = s, _a(wa.bind(null, r, s, e), [e]), r.flags |= 2048, Kr(9, ja.bind(null, r, s, n, t), void 0, null), n
            },
            useId: function() {
                var e = Vt(),
                    t = Xe.identifierPrefix;
                if (Fe) {
                    var n = Xt,
                        r = Kt;
                    n = (r & ~(1 << 32 - zt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
                } else n = nd++, t = ":" + t + "r" + n.toString(32) + ":";
                return e.memoizedState = t
            },
            unstable_isNewReconciler: !1
        },
        id = {
            readContext: Nt,
            useCallback: za,
            useContext: Nt,
            useEffect: vo,
            useImperativeHandle: La,
            useInsertionEffect: Ma,
            useLayoutEffect: Pa,
            useMemo: Fa,
            useReducer: po,
            useRef: Ea,
            useState: function() {
                return po(qr)
            },
            useDebugValue: go,
            useDeferredValue: function(e) {
                var t = jt();
                return Ra(t, Qe.memoizedState, e)
            },
            useTransition: function() {
                var e = po(qr)[0],
                    t = jt().memoizedState;
                return [e, t]
            },
            useMutableSource: ya,
            useSyncExternalStore: xa,
            useId: Aa,
            unstable_isNewReconciler: !1
        },
        ad = {
            readContext: Nt,
            useCallback: za,
            useContext: Nt,
            useEffect: vo,
            useImperativeHandle: La,
            useInsertionEffect: Ma,
            useLayoutEffect: Pa,
            useMemo: Fa,
            useReducer: ho,
            useRef: Ea,
            useState: function() {
                return ho(qr)
            },
            useDebugValue: go,
            useDeferredValue: function(e) {
                var t = jt();
                return Qe === null ? t.memoizedState = e : Ra(t, Qe.memoizedState, e)
            },
            useTransition: function() {
                var e = ho(qr)[0],
                    t = jt().memoizedState;
                return [e, t]
            },
            useMutableSource: ya,
            useSyncExternalStore: xa,
            useId: Aa,
            unstable_isNewReconciler: !1
        };

    function At(e, t) {
        if (e && e.defaultProps) {
            t = F({}, t), e = e.defaultProps;
            for (var n in e) t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }

    function yo(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : F({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Hl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Ln(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = st(),
                l = jn(e),
                s = Gt(r, l);
            s.payload = t, n != null && (s.callback = n), t = gn(e, s, l), t !== null && (Ut(t, e, l, r), Dl(t, e, l))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = st(),
                l = jn(e),
                s = Gt(r, l);
            s.tag = 1, s.payload = t, n != null && (s.callback = n), t = gn(e, s, l), t !== null && (Ut(t, e, l, r), Dl(t, e, l))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = st(),
                r = jn(e),
                l = Gt(n, r);
            l.tag = 2, t != null && (l.callback = t), t = gn(e, l, r), t !== null && (Ut(t, e, r, n), Dl(t, e, r))
        }
    };

    function ba(e, t, n, r, l, s, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !Rr(n, r) || !Rr(l, s) : !0
    }

    function Ba(e, t, n) {
        var r = !1,
            l = pn,
            s = t.contextType;
        return typeof s == "object" && s !== null ? s = Nt(s) : (l = it(t) ? Fn : Je.current, r = t.contextTypes, s = (r = r != null) ? nr(e, l) : pn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = s), t
    }

    function $a(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Hl.enqueueReplaceState(t, t.state, null)
    }

    function xo(e, t, n, r) {
        var l = e.stateNode;
        l.props = n, l.state = e.memoizedState, l.refs = {}, lo(e);
        var s = t.contextType;
        typeof s == "object" && s !== null ? l.context = Nt(s) : (s = it(t) ? Fn : Je.current, l.context = nr(e, s)), l.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (yo(e, t, s, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Hl.enqueueReplaceState(l, l.state, null), Ol(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function cr(e, t) {
        try {
            var n = "",
                r = t;
            do n += Ne(r), r = r.return; while (r);
            var l = n
        } catch (s) {
            l = `
Error generating stack: ` + s.message + `
` + s.stack
        }
        return {
            value: e,
            source: t,
            stack: l,
            digest: null
        }
    }

    function No(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        }
    }

    function jo(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var ud = typeof WeakMap == "function" ? WeakMap : Map;

    function Ia(e, t, n) {
        n = Gt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Gl || (Gl = !0, Do = r), jo(e, t)
        }, n
    }

    function Va(e, t, n) {
        n = Gt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = t.value;
            n.payload = function() {
                return r(l)
            }, n.callback = function() {
                jo(e, t)
            }
        }
        var s = e.stateNode;
        return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
            jo(e, t), typeof r != "function" && (xn === null ? xn = new Set([this]) : xn.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            })
        }), n
    }

    function Ha(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new ud;
            var l = new Set;
            r.set(t, l)
        } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
        l.has(n) || (l.add(n), e = kd.bind(null, e, t, n), t.then(e, e))
    }

    function Wa(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function Qa(e, t, n, r, l) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Gt(-1, 1), t.tag = 2, gn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e)
    }
    var cd = ve.ReactCurrentOwner,
        at = !1;

    function lt(e, t, n, r) {
        t.child = e === null ? fa(t, null, n, r) : or(t, e.child, n, r)
    }

    function qa(e, t, n, r, l) {
        n = n.render;
        var s = t.ref;
        return ar(t, l), r = fo(e, t, n, r, s, l), n = mo(), e !== null && !at ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Zt(e, t, l)) : (Fe && n && Ks(t), t.flags |= 1, lt(e, t, r, l), t.child)
    }

    function Ka(e, t, n, r, l) {
        if (e === null) {
            var s = n.type;
            return typeof s == "function" && !Vo(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Xa(e, t, s, r, l)) : (e = rs(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (s = e.child, (e.lanes & l) === 0) {
            var i = s.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Rr, n(i, r) && e.ref === t.ref) return Zt(e, t, l)
        }
        return t.flags |= 1, e = kn(s, r), e.ref = t.ref, e.return = t, t.child = e
    }

    function Xa(e, t, n, r, l) {
        if (e !== null) {
            var s = e.memoizedProps;
            if (Rr(s, r) && e.ref === t.ref)
                if (at = !1, t.pendingProps = r = s, (e.lanes & l) !== 0)(e.flags & 131072) !== 0 && (at = !0);
                else return t.lanes = e.lanes, Zt(e, t, l)
        }
        return wo(e, t, n, r, l)
    }

    function Ya(e, t, n) {
        var r = t.pendingProps,
            l = r.children,
            s = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if ((t.mode & 1) === 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, Te(fr, ht), ht |= n;
            else {
                if ((n & 1073741824) === 0) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }, t.updateQueue = null, Te(fr, ht), ht |= e, null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, r = s !== null ? s.baseLanes : n, Te(fr, ht), ht |= r
            }
        else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, Te(fr, ht), ht |= r;
        return lt(e, t, l, n), t.child
    }

    function Ga(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
    }

    function wo(e, t, n, r, l) {
        var s = it(n) ? Fn : Je.current;
        return s = nr(t, s), ar(t, l), n = fo(e, t, n, r, s, l), r = mo(), e !== null && !at ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Zt(e, t, l)) : (Fe && r && Ks(t), t.flags |= 1, lt(e, t, n, l), t.child)
    }

    function Za(e, t, n, r, l) {
        if (it(n)) {
            var s = !0;
            Ml(t)
        } else s = !1;
        if (ar(t, l), t.stateNode === null) Ql(e, t), Ba(t, n, r), xo(t, n, r, l), r = !0;
        else if (e === null) {
            var i = t.stateNode,
                a = t.memoizedProps;
            i.props = a;
            var u = i.context,
                g = n.contextType;
            typeof g == "object" && g !== null ? g = Nt(g) : (g = it(n) ? Fn : Je.current, g = nr(t, g));
            var S = n.getDerivedStateFromProps,
                C = typeof S == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            C || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || u !== g) && $a(t, i, r, g), vn = !1;
            var k = t.memoizedState;
            i.state = k, Ol(t, r, i, l), u = t.memoizedState, a !== r || k !== u || ot.current || vn ? (typeof S == "function" && (yo(t, n, S, r), u = t.memoizedState), (a = vn || ba(t, n, a, r, k, u, g)) ? (C || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = g, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
        } else {
            i = t.stateNode, pa(e, t), a = t.memoizedProps, g = t.type === t.elementType ? a : At(t.type, a), i.props = g, C = t.pendingProps, k = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = Nt(u) : (u = it(n) ? Fn : Je.current, u = nr(t, u));
            var $ = n.getDerivedStateFromProps;
            (S = typeof $ == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== C || k !== u) && $a(t, i, r, u), vn = !1, k = t.memoizedState, i.state = k, Ol(t, r, i, l);
            var W = t.memoizedState;
            a !== C || k !== W || ot.current || vn ? (typeof $ == "function" && (yo(t, n, $, r), W = t.memoizedState), (g = vn || ba(t, n, g, r, k, W, u) || !1) ? (S || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, W, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, W, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = W), i.props = r, i.state = W, i.context = u, r = g) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return ko(e, t, n, r, s, l)
    }

    function ko(e, t, n, r, l, s) {
        Ga(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return l && ra(t, n, !1), Zt(e, t, s);
        r = t.stateNode, cd.current = t;
        var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = or(t, e.child, null, s), t.child = or(t, null, a, s)) : lt(e, t, a, s), t.memoizedState = r.state, l && ra(t, n, !0), t.child
    }

    function Ja(e) {
        var t = e.stateNode;
        t.pendingContext ? ta(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ta(e, t.context, !1), so(e, t.containerInfo)
    }

    function eu(e, t, n, r, l) {
        return sr(), Zs(l), t.flags |= 256, lt(e, t, n, r), t.child
    }
    var So = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function Co(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }

    function tu(e, t, n) {
        var r = t.pendingProps,
            l = Oe.current,
            s = !1,
            i = (t.flags & 128) !== 0,
            a;
        if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Te(Oe, l & 1), e === null) return Gs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = {
            mode: "hidden",
            children: i
        }, (r & 1) === 0 && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = ls(i, r, 0, null), e = Vn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Co(n), t.memoizedState = So, e) : Eo(t, i));
        if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return dd(e, t, i, r, a, l, n);
        if (s) {
            s = r.fallback, i = t.mode, l = e.child, a = l.sibling;
            var u = {
                mode: "hidden",
                children: r.children
            };
            return (i & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = kn(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? s = kn(a, s) : (s = Vn(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Co(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = So, r
        }
        return s = e.child, e = s.sibling, r = kn(s, {
            mode: "visible",
            children: r.children
        }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
    }

    function Eo(e, t) {
        return t = ls({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t
    }

    function Wl(e, t, n, r) {
        return r !== null && Zs(r), or(t, e.child, null, n), e = Eo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function dd(e, t, n, r, l, s, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = No(Error(m(422))), Wl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, l = t.mode, r = ls({
            mode: "visible",
            children: r.children
        }, l, 0, null), s = Vn(s, l, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, (t.mode & 1) !== 0 && or(t, e.child, null, i), t.child.memoizedState = Co(i), t.memoizedState = So, s);
        if ((t.mode & 1) === 0) return Wl(e, t, i, null);
        if (l.data === "$!") {
            if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
            return r = a, s = Error(m(419)), r = No(s, r, void 0), Wl(e, t, i, r)
        }
        if (a = (i & e.childLanes) !== 0, at || a) {
            if (r = Xe, r !== null) {
                switch (i & -i) {
                    case 4:
                        l = 2;
                        break;
                    case 16:
                        l = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        l = 32;
                        break;
                    case 536870912:
                        l = 268435456;
                        break;
                    default:
                        l = 0
                }
                l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l, l !== 0 && l !== s.retryLane && (s.retryLane = l, Yt(e, l), Ut(r, e, l, -1))
            }
            return Io(), r = No(Error(m(421))), Wl(e, t, i, r)
        }
        return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Sd.bind(null, e), l._reactRetry = t, null) : (e = s.treeContext, pt = fn(l.nextSibling), mt = t, Fe = !0, Rt = null, e !== null && (yt[xt++] = Kt, yt[xt++] = Xt, yt[xt++] = Rn, Kt = e.id, Xt = e.overflow, Rn = t), t = Eo(t, r.children), t.flags |= 4096, t)
    }

    function nu(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), no(e.return, t, n)
    }

    function _o(e, t, n, r, l) {
        var s = e.memoizedState;
        s === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: l
        } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = l)
    }

    function ru(e, t, n) {
        var r = t.pendingProps,
            l = r.revealOrder,
            s = r.tail;
        if (lt(e, t, r.children, n), r = Oe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && nu(e, n, t);
                else if (e.tag === 19) nu(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        if (Te(Oe, r), (t.mode & 1) === 0) t.memoizedState = null;
        else switch (l) {
            case "forwards":
                for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && Ul(e) === null && (l = n), n = n.sibling;
                n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), _o(t, !1, l, n, s);
                break;
            case "backwards":
                for (n = null, l = t.child, t.child = null; l !== null;) {
                    if (e = l.alternate, e !== null && Ul(e) === null) {
                        t.child = l;
                        break
                    }
                    e = l.sibling, l.sibling = n, n = l, l = e
                }
                _o(t, !0, n, null, s);
                break;
            case "together":
                _o(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function Ql(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
    }

    function Zt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), bn |= t.lanes, (n & t.childLanes) === 0) return null;
        if (e !== null && t.child !== e.child) throw Error(m(153));
        if (t.child !== null) {
            for (e = t.child, n = kn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = kn(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function fd(e, t, n) {
        switch (t.tag) {
            case 3:
                Ja(t), sr();
                break;
            case 5:
                ga(t);
                break;
            case 1:
                it(t.type) && Ml(t);
                break;
            case 4:
                so(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context,
                    l = t.memoizedProps.value;
                Te(Rl, r._currentValue), r._currentValue = l;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Te(Oe, Oe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? tu(e, t, n) : (Te(Oe, Oe.current & 1), e = Zt(e, t, n), e !== null ? e.sibling : null);
                Te(Oe, Oe.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
                    if (r) return ru(e, t, n);
                    t.flags |= 128
                }
                if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Te(Oe, Oe.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Ya(e, t, n)
        }
        return Zt(e, t, n)
    }
    var lu, Mo, su, ou;
    lu = function(e, t) {
        for (var n = t.child; n !== null;) {
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, Mo = function() {}, su = function(e, t, n, r) {
        var l = e.memoizedProps;
        if (l !== r) {
            e = t.stateNode, On(It.current);
            var s = null;
            switch (n) {
                case "input":
                    l = Wt(e, l), r = Wt(e, r), s = [];
                    break;
                case "select":
                    l = F({}, l, {
                        value: void 0
                    }), r = F({}, r, {
                        value: void 0
                    }), s = [];
                    break;
                case "textarea":
                    l = gt(e, l), r = gt(e, r), s = [];
                    break;
                default:
                    typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Cl)
            }
            xr(n, r);
            var i;
            n = null;
            for (g in l)
                if (!r.hasOwnProperty(g) && l.hasOwnProperty(g) && l[g] != null)
                    if (g === "style") {
                        var a = l[g];
                        for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                    } else g !== "dangerouslySetInnerHTML" && g !== "children" && g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (R.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
            for (g in r) {
                var u = r[g];
                if (a = l != null ? l[g] : void 0, r.hasOwnProperty(g) && u !== a && (u != null || a != null))
                    if (g === "style")
                        if (a) {
                            for (i in a) !a.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                            for (i in u) u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), n[i] = u[i])
                        } else n || (s || (s = []), s.push(g, n)), n = u;
                else g === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (s = s || []).push(g, u)) : g === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(g, "" + u) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && (R.hasOwnProperty(g) ? (u != null && g === "onScroll" && Le("scroll", e), s || a === u || (s = [])) : (s = s || []).push(g, u))
            }
            n && (s = s || []).push("style", n);
            var g = s;
            (t.updateQueue = g) && (t.flags |= 4)
        }
    }, ou = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
    };

    function Xr(e, t) {
        if (!Fe) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function tt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
        else
            for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
    }

    function md(e, t, n) {
        var r = t.pendingProps;
        switch (Xs(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return tt(t), null;
            case 1:
                return it(t.type) && _l(), tt(t), null;
            case 3:
                return r = t.stateNode, ur(), ze(ot), ze(Je), ao(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (zl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Rt !== null && (bo(Rt), Rt = null))), Mo(e, t), tt(t), null;
            case 5:
                oo(t);
                var l = On(Hr.current);
                if (n = t.type, e !== null && t.stateNode != null) su(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(m(166));
                        return tt(t), null
                    }
                    if (e = On(It.current), zl(t)) {
                        r = t.stateNode, n = t.type;
                        var s = t.memoizedProps;
                        switch (r[$t] = t, r[br] = s, e = (t.mode & 1) !== 0, n) {
                            case "dialog":
                                Le("cancel", r), Le("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Le("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Dr.length; l++) Le(Dr[l], r);
                                break;
                            case "source":
                                Le("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Le("error", r), Le("load", r);
                                break;
                            case "details":
                                Le("toggle", r);
                                break;
                            case "input":
                                Hn(r, s), Le("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!s.multiple
                                }, Le("invalid", r);
                                break;
                            case "textarea":
                                En(r, s), Le("invalid", r)
                        }
                        xr(n, s), l = null;
                        for (var i in s)
                            if (s.hasOwnProperty(i)) {
                                var a = s[i];
                                i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Sl(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Sl(r.textContent, a, e), l = ["children", "" + a]) : R.hasOwnProperty(i) && a != null && i === "onScroll" && Le("scroll", r)
                            } switch (n) {
                            case "input":
                                St(r), _t(r, s, !0);
                                break;
                            case "textarea":
                                St(r), Tt(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof s.onClick == "function" && (r.onclick = Cl)
                        }
                        r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                    } else {
                        i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = hr(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[$t] = t, e[br] = r, lu(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (i = Nr(n, r), n) {
                                case "dialog":
                                    Le("cancel", e), Le("close", e), l = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Le("load", e), l = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (l = 0; l < Dr.length; l++) Le(Dr[l], e);
                                    l = r;
                                    break;
                                case "source":
                                    Le("error", e), l = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Le("error", e), Le("load", e), l = r;
                                    break;
                                case "details":
                                    Le("toggle", e), l = r;
                                    break;
                                case "input":
                                    Hn(e, r), l = Wt(e, r), Le("invalid", e);
                                    break;
                                case "option":
                                    l = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, l = F({}, r, {
                                        value: void 0
                                    }), Le("invalid", e);
                                    break;
                                case "textarea":
                                    En(e, r), l = gt(e, r), Le("invalid", e);
                                    break;
                                default:
                                    l = r
                            }
                            xr(n, l),
                            a = l;
                            for (s in a)
                                if (a.hasOwnProperty(s)) {
                                    var u = a[s];
                                    s === "style" ? gr(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && ll(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Mn(e, u) : typeof u == "number" && Mn(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (R.hasOwnProperty(s) ? u != null && s === "onScroll" && Le("scroll", e) : u != null && de(e, s, u, i))
                                } switch (n) {
                                case "input":
                                    St(e), _t(e, r, !1);
                                    break;
                                case "textarea":
                                    St(e), Tt(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + je(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, s = r.value, s != null ? Pt(e, !!r.multiple, s, !1) : r.defaultValue != null && Pt(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof l.onClick == "function" && (e.onclick = Cl)
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1
                            }
                        }
                        r && (t.flags |= 4)
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                }
                return tt(t), null;
            case 6:
                if (e && t.stateNode != null) ou(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
                    if (n = On(Hr.current), On(It.current), zl(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[$t] = t, (s = r.nodeValue !== n) && (e = mt, e !== null)) switch (e.tag) {
                            case 3:
                                Sl(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Sl(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                        s && (t.flags |= 4)
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$t] = t, t.stateNode = r
                }
                return tt(t), null;
            case 13:
                if (ze(Oe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (Fe && pt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ua(), sr(), t.flags |= 98560, s = !1;
                    else if (s = zl(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!s) throw Error(m(318));
                            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(m(317));
                            s[$t] = t
                        } else sr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        tt(t), s = !1
                    } else Rt !== null && (bo(Rt), Rt = null), s = !0;
                    if (!s) return t.flags & 65536 ? t : null
                }
                return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Oe.current & 1) !== 0 ? qe === 0 && (qe = 3) : Io())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
            case 4:
                return ur(), Mo(e, t), e === null && Or(t.stateNode.containerInfo), tt(t), null;
            case 10:
                return to(t.type._context), tt(t), null;
            case 17:
                return it(t.type) && _l(), tt(t), null;
            case 19:
                if (ze(Oe), s = t.memoizedState, s === null) return tt(t), null;
                if (r = (t.flags & 128) !== 0, i = s.rendering, i === null)
                    if (r) Xr(s, !1);
                    else {
                        if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (i = Ul(e), i !== null) {
                                    for (t.flags |= 128, Xr(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), n = n.sibling;
                                    return Te(Oe, Oe.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        s.tail !== null && $e() > mr && (t.flags |= 128, r = !0, Xr(s, !1), t.lanes = 4194304)
                    }
                else {
                    if (!r)
                        if (e = Ul(i), e !== null) {
                            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Xr(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !Fe) return tt(t), null
                        } else 2 * $e() - s.renderingStartTime > mr && n !== 1073741824 && (t.flags |= 128, r = !0, Xr(s, !1), t.lanes = 4194304);
                    s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i)
                }
                return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = $e(), t.sibling = null, n = Oe.current, Te(Oe, r ? n & 1 | 2 : n & 1), t) : (tt(t), null);
            case 22:
            case 23:
                return $o(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (ht & 1073741824) !== 0 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(m(156, t.tag))
    }

    function pd(e, t) {
        switch (Xs(t), t.tag) {
            case 1:
                return it(t.type) && _l(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return ur(), ze(ot), ze(Je), ao(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return oo(t), null;
            case 13:
                if (ze(Oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(m(340));
                    sr()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return ze(Oe), null;
            case 4:
                return ur(), null;
            case 10:
                return to(t.type._context), null;
            case 22:
            case 23:
                return $o(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var ql = !1,
        nt = !1,
        hd = typeof WeakSet == "function" ? WeakSet : Set,
        I = null;

    function dr(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function") try {
                n(null)
            } catch (r) {
                Be(e, t, r)
            } else n.current = null
    }

    function Po(e, t, n) {
        try {
            n()
        } catch (r) {
            Be(e, t, r)
        }
    }
    var iu = !1;

    function vd(e, t) {
        if (Bs = ml, e = bi(), zs(e)) {
            if ("selectionStart" in e) var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset,
                        s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0,
                        a = -1,
                        u = -1,
                        g = 0,
                        S = 0,
                        C = e,
                        k = null;
                    t: for (;;) {
                        for (var $; C !== n || l !== 0 && C.nodeType !== 3 || (a = i + l), C !== s || r !== 0 && C.nodeType !== 3 || (u = i + r), C.nodeType === 3 && (i += C.nodeValue.length), ($ = C.firstChild) !== null;) k = C, C = $;
                        for (;;) {
                            if (C === e) break t;
                            if (k === n && ++g === l && (a = i), k === s && ++S === r && (u = i), ($ = C.nextSibling) !== null) break;
                            C = k, k = C.parentNode
                        }
                        C = $
                    }
                    n = a === -1 || u === -1 ? null : {
                        start: a,
                        end: u
                    }
                } else n = null
            }
            n = n || {
                start: 0,
                end: 0
            }
        } else n = null;
        for ($s = {
                focusedElem: e,
                selectionRange: n
            }, ml = !1, I = t; I !== null;)
            if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
            else
                for (; I !== null;) {
                    t = I;
                    try {
                        var W = t.alternate;
                        if ((t.flags & 1024) !== 0) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (W !== null) {
                                    var K = W.memoizedProps,
                                        Ie = W.memoizedState,
                                        h = t.stateNode,
                                        d = h.getSnapshotBeforeUpdate(t.elementType === t.type ? K : At(t.type, K), Ie);
                                    h.__reactInternalSnapshotBeforeUpdate = d
                                }
                                break;
                            case 3:
                                var v = t.stateNode.containerInfo;
                                v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(m(163))
                        }
                    } catch (P) {
                        Be(t, t.return, P)
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, I = e;
                        break
                    }
                    I = t.return
                }
        return W = iu, iu = !1, W
    }

    function Yr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var l = r = r.next;
            do {
                if ((l.tag & e) === e) {
                    var s = l.destroy;
                    l.destroy = void 0, s !== void 0 && Po(t, n, s)
                }
                l = l.next
            } while (l !== r)
        }
    }

    function Kl(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }

    function To(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = n;
                    break;
                default:
                    e = n
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }

    function au(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, au(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$t], delete t[br], delete t[Ws], delete t[Zc], delete t[Jc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function uu(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function cu(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || uu(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function Lo(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Cl));
        else if (r !== 4 && (e = e.child, e !== null))
            for (Lo(e, t, n), e = e.sibling; e !== null;) Lo(e, t, n), e = e.sibling
    }

    function zo(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null))
            for (zo(e, t, n), e = e.sibling; e !== null;) zo(e, t, n), e = e.sibling
    }
    var Ge = null,
        Dt = !1;

    function yn(e, t, n) {
        for (n = n.child; n !== null;) du(e, t, n), n = n.sibling
    }

    function du(e, t, n) {
        if (Bt && typeof Bt.onCommitFiberUnmount == "function") try {
            Bt.onCommitFiberUnmount(il, n)
        } catch {}
        switch (n.tag) {
            case 5:
                nt || dr(n, t);
            case 6:
                var r = Ge,
                    l = Dt;
                Ge = null, yn(e, t, n), Ge = r, Dt = l, Ge !== null && (Dt ? (e = Ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ge.removeChild(n.stateNode));
                break;
            case 18:
                Ge !== null && (Dt ? (e = Ge, n = n.stateNode, e.nodeType === 8 ? Hs(e.parentNode, n) : e.nodeType === 1 && Hs(e, n), Mr(e)) : Hs(Ge, n.stateNode));
                break;
            case 4:
                r = Ge, l = Dt, Ge = n.stateNode.containerInfo, Dt = !0, yn(e, t, n), Ge = r, Dt = l;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!nt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    l = r = r.next;
                    do {
                        var s = l,
                            i = s.destroy;
                        s = s.tag, i !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && Po(n, t, i), l = l.next
                    } while (l !== r)
                }
                yn(e, t, n);
                break;
            case 1:
                if (!nt && (dr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                } catch (a) {
                    Be(n, t, a)
                }
                yn(e, t, n);
                break;
            case 21:
                yn(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (nt = (r = nt) || n.memoizedState !== null, yn(e, t, n), nt = r) : yn(e, t, n);
                break;
            default:
                yn(e, t, n)
        }
    }

    function fu(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new hd), t.forEach(function(r) {
                var l = Cd.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l))
            })
        }
    }

    function Ot(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var l = n[r];
                try {
                    var s = e,
                        i = t,
                        a = i;
                    e: for (; a !== null;) {
                        switch (a.tag) {
                            case 5:
                                Ge = a.stateNode, Dt = !1;
                                break e;
                            case 3:
                                Ge = a.stateNode.containerInfo, Dt = !0;
                                break e;
                            case 4:
                                Ge = a.stateNode.containerInfo, Dt = !0;
                                break e
                        }
                        a = a.return
                    }
                    if (Ge === null) throw Error(m(160));
                    du(s, i, l), Ge = null, Dt = !1;
                    var u = l.alternate;
                    u !== null && (u.return = null), l.return = null
                } catch (g) {
                    Be(l, t, g)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null;) mu(t, e), t = t.sibling
    }

    function mu(e, t) {
        var n = e.alternate,
            r = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (Ot(t, e), Ht(e), r & 4) {
                    try {
                        Yr(3, e, e.return), Kl(3, e)
                    } catch (K) {
                        Be(e, e.return, K)
                    }
                    try {
                        Yr(5, e, e.return)
                    } catch (K) {
                        Be(e, e.return, K)
                    }
                }
                break;
            case 1:
                Ot(t, e), Ht(e), r & 512 && n !== null && dr(n, n.return);
                break;
            case 5:
                if (Ot(t, e), Ht(e), r & 512 && n !== null && dr(n, n.return), e.flags & 32) {
                    var l = e.stateNode;
                    try {
                        Mn(l, "")
                    } catch (K) {
                        Be(e, e.return, K)
                    }
                }
                if (r & 4 && (l = e.stateNode, l != null)) {
                    var s = e.memoizedProps,
                        i = n !== null ? n.memoizedProps : s,
                        a = e.type,
                        u = e.updateQueue;
                    if (e.updateQueue = null, u !== null) try {
                        a === "input" && s.type === "radio" && s.name != null && Et(l, s), Nr(a, i);
                        var g = Nr(a, s);
                        for (i = 0; i < u.length; i += 2) {
                            var S = u[i],
                                C = u[i + 1];
                            S === "style" ? gr(l, C) : S === "dangerouslySetInnerHTML" ? ll(l, C) : S === "children" ? Mn(l, C) : de(l, S, C, g)
                        }
                        switch (a) {
                            case "input":
                                en(l, s);
                                break;
                            case "textarea":
                                _n(l, s);
                                break;
                            case "select":
                                var k = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!s.multiple;
                                var $ = s.value;
                                $ != null ? Pt(l, !!s.multiple, $, !1) : k !== !!s.multiple && (s.defaultValue != null ? Pt(l, !!s.multiple, s.defaultValue, !0) : Pt(l, !!s.multiple, s.multiple ? [] : "", !1))
                        }
                        l[br] = s
                    } catch (K) {
                        Be(e, e.return, K)
                    }
                }
                break;
            case 6:
                if (Ot(t, e), Ht(e), r & 4) {
                    if (e.stateNode === null) throw Error(m(162));
                    l = e.stateNode, s = e.memoizedProps;
                    try {
                        l.nodeValue = s
                    } catch (K) {
                        Be(e, e.return, K)
                    }
                }
                break;
            case 3:
                if (Ot(t, e), Ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Mr(t.containerInfo)
                } catch (K) {
                    Be(e, e.return, K)
                }
                break;
            case 4:
                Ot(t, e), Ht(e);
                break;
            case 13:
                Ot(t, e), Ht(e), l = e.child, l.flags & 8192 && (s = l.memoizedState !== null, l.stateNode.isHidden = s, !s || l.alternate !== null && l.alternate.memoizedState !== null || (Ao = $e())), r & 4 && fu(e);
                break;
            case 22:
                if (S = n !== null && n.memoizedState !== null, e.mode & 1 ? (nt = (g = nt) || S, Ot(t, e), nt = g) : Ot(t, e), Ht(e), r & 8192) {
                    if (g = e.memoizedState !== null, (e.stateNode.isHidden = g) && !S && (e.mode & 1) !== 0)
                        for (I = e, S = e.child; S !== null;) {
                            for (C = I = S; I !== null;) {
                                switch (k = I, $ = k.child, k.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        Yr(4, k, k.return);
                                        break;
                                    case 1:
                                        dr(k, k.return);
                                        var W = k.stateNode;
                                        if (typeof W.componentWillUnmount == "function") {
                                            r = k, n = k.return;
                                            try {
                                                t = r, W.props = t.memoizedProps, W.state = t.memoizedState, W.componentWillUnmount()
                                            } catch (K) {
                                                Be(r, n, K)
                                            }
                                        }
                                        break;
                                    case 5:
                                        dr(k, k.return);
                                        break;
                                    case 22:
                                        if (k.memoizedState !== null) {
                                            vu(C);
                                            continue
                                        }
                                }
                                $ !== null ? ($.return = k, I = $) : vu(C)
                            }
                            S = S.sibling
                        }
                    e: for (S = null, C = e;;) {
                        if (C.tag === 5) {
                            if (S === null) {
                                S = C;
                                try {
                                    l = C.stateNode, g ? (s = l.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = C.stateNode, u = C.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = sl("display", i))
                                } catch (K) {
                                    Be(e, e.return, K)
                                }
                            }
                        } else if (C.tag === 6) {
                            if (S === null) try {
                                C.stateNode.nodeValue = g ? "" : C.memoizedProps
                            } catch (K) {
                                Be(e, e.return, K)
                            }
                        } else if ((C.tag !== 22 && C.tag !== 23 || C.memoizedState === null || C === e) && C.child !== null) {
                            C.child.return = C, C = C.child;
                            continue
                        }
                        if (C === e) break e;
                        for (; C.sibling === null;) {
                            if (C.return === null || C.return === e) break e;
                            S === C && (S = null), C = C.return
                        }
                        S === C && (S = null), C.sibling.return = C.return, C = C.sibling
                    }
                }
                break;
            case 19:
                Ot(t, e), Ht(e), r & 4 && fu(e);
                break;
            case 21:
                break;
            default:
                Ot(t, e), Ht(e)
        }
    }

    function Ht(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null;) {
                        if (uu(n)) {
                            var r = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(m(160))
                }
                switch (r.tag) {
                    case 5:
                        var l = r.stateNode;
                        r.flags & 32 && (Mn(l, ""), r.flags &= -33);
                        var s = cu(e);
                        zo(e, s, l);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo,
                            a = cu(e);
                        Lo(e, a, i);
                        break;
                    default:
                        throw Error(m(161))
                }
            }
            catch (u) {
                Be(e, e.return, u)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function gd(e, t, n) {
        I = e, pu(e)
    }

    function pu(e, t, n) {
        for (var r = (e.mode & 1) !== 0; I !== null;) {
            var l = I,
                s = l.child;
            if (l.tag === 22 && r) {
                var i = l.memoizedState !== null || ql;
                if (!i) {
                    var a = l.alternate,
                        u = a !== null && a.memoizedState !== null || nt;
                    a = ql;
                    var g = nt;
                    if (ql = i, (nt = u) && !g)
                        for (I = l; I !== null;) i = I, u = i.child, i.tag === 22 && i.memoizedState !== null ? gu(l) : u !== null ? (u.return = i, I = u) : gu(l);
                    for (; s !== null;) I = s, pu(s), s = s.sibling;
                    I = l, ql = a, nt = g
                }
                hu(e)
            } else(l.subtreeFlags & 8772) !== 0 && s !== null ? (s.return = l, I = s) : hu(e)
        }
    }

    function hu(e) {
        for (; I !== null;) {
            var t = I;
            if ((t.flags & 8772) !== 0) {
                var n = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            nt || Kl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !nt)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l = t.elementType === t.type ? n.memoizedProps : At(t.type, n.memoizedProps);
                                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                } var s = t.updateQueue;
                            s !== null && va(t, s, r);
                            break;
                        case 3:
                            var i = t.updateQueue;
                            if (i !== null) {
                                if (n = null, t.child !== null) switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                }
                                va(t, i, n)
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var u = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        u.src && (n.src = u.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var g = t.alternate;
                                if (g !== null) {
                                    var S = g.memoizedState;
                                    if (S !== null) {
                                        var C = S.dehydrated;
                                        C !== null && Mr(C)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(m(163))
                    }
                    nt || t.flags & 512 && To(t)
                } catch (k) {
                    Be(t, t.return, k)
                }
            }
            if (t === e) {
                I = null;
                break
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, I = n;
                break
            }
            I = t.return
        }
    }

    function vu(e) {
        for (; I !== null;) {
            var t = I;
            if (t === e) {
                I = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, I = n;
                break
            }
            I = t.return
        }
    }

    function gu(e) {
        for (; I !== null;) {
            var t = I;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Kl(4, t)
                        } catch (u) {
                            Be(t, n, u)
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var l = t.return;
                            try {
                                r.componentDidMount()
                            } catch (u) {
                                Be(t, l, u)
                            }
                        }
                        var s = t.return;
                        try {
                            To(t)
                        } catch (u) {
                            Be(t, s, u)
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            To(t)
                        } catch (u) {
                            Be(t, i, u)
                        }
                }
            } catch (u) {
                Be(t, t.return, u)
            }
            if (t === e) {
                I = null;
                break
            }
            var a = t.sibling;
            if (a !== null) {
                a.return = t.return, I = a;
                break
            }
            I = t.return
        }
    }
    var yd = Math.ceil,
        Xl = ve.ReactCurrentDispatcher,
        Fo = ve.ReactCurrentOwner,
        wt = ve.ReactCurrentBatchConfig,
        Se = 0,
        Xe = null,
        We = null,
        Ze = 0,
        ht = 0,
        fr = mn(0),
        qe = 0,
        Gr = null,
        bn = 0,
        Yl = 0,
        Ro = 0,
        Zr = null,
        ut = null,
        Ao = 0,
        mr = 1 / 0,
        Jt = null,
        Gl = !1,
        Do = null,
        xn = null,
        Zl = !1,
        Nn = null,
        Jl = 0,
        Jr = 0,
        Oo = null,
        es = -1,
        ts = 0;

    function st() {
        return (Se & 6) !== 0 ? $e() : es !== -1 ? es : es = $e()
    }

    function jn(e) {
        return (e.mode & 1) === 0 ? 1 : (Se & 2) !== 0 && Ze !== 0 ? Ze & -Ze : td.transition !== null ? (ts === 0 && (ts = ci()), ts) : (e = Pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : xi(e.type)), e)
    }

    function Ut(e, t, n, r) {
        if (50 < Jr) throw Jr = 0, Oo = null, Error(m(185));
        kr(e, n, r), ((Se & 2) === 0 || e !== Xe) && (e === Xe && ((Se & 2) === 0 && (Yl |= n), qe === 4 && wn(e, Ze)), ct(e, r), n === 1 && Se === 0 && (t.mode & 1) === 0 && (mr = $e() + 500, Pl && hn()))
    }

    function ct(e, t) {
        var n = e.callbackNode;
        tc(e, t);
        var r = cl(e, e === Xe ? Ze : 0);
        if (r === 0) n !== null && ii(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && ii(n), t === 1) e.tag === 0 ? ed(xu.bind(null, e)) : la(xu.bind(null, e)), Yc(function() {
                (Se & 6) === 0 && hn()
            }), n = null;
            else {
                switch (di(r)) {
                    case 1:
                        n = hs;
                        break;
                    case 4:
                        n = ai;
                        break;
                    case 16:
                        n = ol;
                        break;
                    case 536870912:
                        n = ui;
                        break;
                    default:
                        n = ol
                }
                n = _u(n, yu.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = n
        }
    }

    function yu(e, t) {
        if (es = -1, ts = 0, (Se & 6) !== 0) throw Error(m(327));
        var n = e.callbackNode;
        if (pr() && e.callbackNode !== n) return null;
        var r = cl(e, e === Xe ? Ze : 0);
        if (r === 0) return null;
        if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ns(e, r);
        else {
            t = r;
            var l = Se;
            Se |= 2;
            var s = ju();
            (Xe !== e || Ze !== t) && (Jt = null, mr = $e() + 500, $n(e, t));
            do try {
                jd();
                break
            } catch (a) {
                Nu(e, a)
            }
            while (!0);
            eo(), Xl.current = s, Se = l, We !== null ? t = 0 : (Xe = null, Ze = 0, t = qe)
        }
        if (t !== 0) {
            if (t === 2 && (l = vs(e), l !== 0 && (r = l, t = Uo(e, l))), t === 1) throw n = Gr, $n(e, 0), wn(e, r), ct(e, $e()), n;
            if (t === 6) wn(e, r);
            else {
                if (l = e.current.alternate, (r & 30) === 0 && !xd(l) && (t = ns(e, r), t === 2 && (s = vs(e), s !== 0 && (r = s, t = Uo(e, s))), t === 1)) throw n = Gr, $n(e, 0), wn(e, r), ct(e, $e()), n;
                switch (e.finishedWork = l, e.finishedLanes = r, t) {
                    case 0:
                    case 1:
                        throw Error(m(345));
                    case 2:
                        In(e, ut, Jt);
                        break;
                    case 3:
                        if (wn(e, r), (r & 130023424) === r && (t = Ao + 500 - $e(), 10 < t)) {
                            if (cl(e, 0) !== 0) break;
                            if (l = e.suspendedLanes, (l & r) !== r) {
                                st(), e.pingedLanes |= e.suspendedLanes & l;
                                break
                            }
                            e.timeoutHandle = Vs(In.bind(null, e, ut, Jt), t);
                            break
                        }
                        In(e, ut, Jt);
                        break;
                    case 4:
                        if (wn(e, r), (r & 4194240) === r) break;
                        for (t = e.eventTimes, l = -1; 0 < r;) {
                            var i = 31 - zt(r);
                            s = 1 << i, i = t[i], i > l && (l = i), r &= ~s
                        }
                        if (r = l, r = $e() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yd(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = Vs(In.bind(null, e, ut, Jt), r);
                            break
                        }
                        In(e, ut, Jt);
                        break;
                    case 5:
                        In(e, ut, Jt);
                        break;
                    default:
                        throw Error(m(329))
                }
            }
        }
        return ct(e, $e()), e.callbackNode === n ? yu.bind(null, e) : null
    }

    function Uo(e, t) {
        var n = Zr;
        return e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256), e = ns(e, t), e !== 2 && (t = ut, ut = n, t !== null && bo(t)), e
    }

    function bo(e) {
        ut === null ? ut = e : ut.push.apply(ut, e)
    }

    function xd(e) {
        for (var t = e;;) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var l = n[r],
                            s = l.getSnapshot;
                        l = l.value;
                        try {
                            if (!Ft(s(), l)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function wn(e, t) {
        for (t &= ~Ro, t &= ~Yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - zt(t),
                r = 1 << n;
            e[n] = -1, t &= ~r
        }
    }

    function xu(e) {
        if ((Se & 6) !== 0) throw Error(m(327));
        pr();
        var t = cl(e, 0);
        if ((t & 1) === 0) return ct(e, $e()), null;
        var n = ns(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = vs(e);
            r !== 0 && (t = r, n = Uo(e, r))
        }
        if (n === 1) throw n = Gr, $n(e, 0), wn(e, t), ct(e, $e()), n;
        if (n === 6) throw Error(m(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, In(e, ut, Jt), ct(e, $e()), null
    }

    function Bo(e, t) {
        var n = Se;
        Se |= 1;
        try {
            return e(t)
        } finally {
            Se = n, Se === 0 && (mr = $e() + 500, Pl && hn())
        }
    }

    function Bn(e) {
        Nn !== null && Nn.tag === 0 && (Se & 6) === 0 && pr();
        var t = Se;
        Se |= 1;
        var n = wt.transition,
            r = Pe;
        try {
            if (wt.transition = null, Pe = 1, e) return e()
        } finally {
            Pe = r, wt.transition = n, Se = t, (Se & 6) === 0 && hn()
        }
    }

    function $o() {
        ht = fr.current, ze(fr)
    }

    function $n(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Xc(n)), We !== null)
            for (n = We.return; n !== null;) {
                var r = n;
                switch (Xs(r), r.tag) {
                    case 1:
                        r = r.type.childContextTypes, r != null && _l();
                        break;
                    case 3:
                        ur(), ze(ot), ze(Je), ao();
                        break;
                    case 5:
                        oo(r);
                        break;
                    case 4:
                        ur();
                        break;
                    case 13:
                        ze(Oe);
                        break;
                    case 19:
                        ze(Oe);
                        break;
                    case 10:
                        to(r.type._context);
                        break;
                    case 22:
                    case 23:
                        $o()
                }
                n = n.return
            }
        if (Xe = e, We = e = kn(e.current, null), Ze = ht = t, qe = 0, Gr = null, Ro = Yl = bn = 0, ut = Zr = null, Dn !== null) {
            for (t = 0; t < Dn.length; t++)
                if (n = Dn[t], r = n.interleaved, r !== null) {
                    n.interleaved = null;
                    var l = r.next,
                        s = n.pending;
                    if (s !== null) {
                        var i = s.next;
                        s.next = l, r.next = i
                    }
                    n.pending = r
                } Dn = null
        }
        return e
    }

    function Nu(e, t) {
        do {
            var n = We;
            try {
                if (eo(), bl.current = Vl, Bl) {
                    for (var r = Ue.memoizedState; r !== null;) {
                        var l = r.queue;
                        l !== null && (l.pending = null), r = r.next
                    }
                    Bl = !1
                }
                if (Un = 0, Ke = Qe = Ue = null, Wr = !1, Qr = 0, Fo.current = null, n === null || n.return === null) {
                    qe = 1, Gr = t, We = null;
                    break
                }
                e: {
                    var s = e,
                        i = n.return,
                        a = n,
                        u = t;
                    if (t = Ze, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                        var g = u,
                            S = a,
                            C = S.tag;
                        if ((S.mode & 1) === 0 && (C === 0 || C === 11 || C === 15)) {
                            var k = S.alternate;
                            k ? (S.updateQueue = k.updateQueue, S.memoizedState = k.memoizedState, S.lanes = k.lanes) : (S.updateQueue = null, S.memoizedState = null)
                        }
                        var $ = Wa(i);
                        if ($ !== null) {
                            $.flags &= -257, Qa($, i, a, s, t), $.mode & 1 && Ha(s, g, t), t = $, u = g;
                            var W = t.updateQueue;
                            if (W === null) {
                                var K = new Set;
                                K.add(u), t.updateQueue = K
                            } else W.add(u);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                Ha(s, g, t), Io();
                                break e
                            }
                            u = Error(m(426))
                        }
                    } else if (Fe && a.mode & 1) {
                        var Ie = Wa(i);
                        if (Ie !== null) {
                            (Ie.flags & 65536) === 0 && (Ie.flags |= 256), Qa(Ie, i, a, s, t), Zs(cr(u, a));
                            break e
                        }
                    }
                    s = u = cr(u, a),
                    qe !== 4 && (qe = 2),
                    Zr === null ? Zr = [s] : Zr.push(s),
                    s = i;do {
                        switch (s.tag) {
                            case 3:
                                s.flags |= 65536, t &= -t, s.lanes |= t;
                                var h = Ia(s, u, t);
                                ha(s, h);
                                break e;
                            case 1:
                                a = u;
                                var d = s.type,
                                    v = s.stateNode;
                                if ((s.flags & 128) === 0 && (typeof d.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (xn === null || !xn.has(v)))) {
                                    s.flags |= 65536, t &= -t, s.lanes |= t;
                                    var P = Va(s, a, t);
                                    ha(s, P);
                                    break e
                                }
                        }
                        s = s.return
                    } while (s !== null)
                }
                ku(n)
            } catch (X) {
                t = X, We === n && n !== null && (We = n = n.return);
                continue
            }
            break
        } while (!0)
    }

    function ju() {
        var e = Xl.current;
        return Xl.current = Vl, e === null ? Vl : e
    }

    function Io() {
        (qe === 0 || qe === 3 || qe === 2) && (qe = 4), Xe === null || (bn & 268435455) === 0 && (Yl & 268435455) === 0 || wn(Xe, Ze)
    }

    function ns(e, t) {
        var n = Se;
        Se |= 2;
        var r = ju();
        (Xe !== e || Ze !== t) && (Jt = null, $n(e, t));
        do try {
            Nd();
            break
        } catch (l) {
            Nu(e, l)
        }
        while (!0);
        if (eo(), Se = n, Xl.current = r, We !== null) throw Error(m(261));
        return Xe = null, Ze = 0, qe
    }

    function Nd() {
        for (; We !== null;) wu(We)
    }

    function jd() {
        for (; We !== null && !Qu();) wu(We)
    }

    function wu(e) {
        var t = Eu(e.alternate, e, ht);
        e.memoizedProps = e.pendingProps, t === null ? ku(e) : We = t, Fo.current = null
    }

    function ku(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, (t.flags & 32768) === 0) {
                if (n = md(n, t, ht), n !== null) {
                    We = n;
                    return
                }
            } else {
                if (n = pd(n, t), n !== null) {
                    n.flags &= 32767, We = n;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    qe = 6, We = null;
                    return
                }
            }
            if (t = t.sibling, t !== null) {
                We = t;
                return
            }
            We = t = e
        } while (t !== null);
        qe === 0 && (qe = 5)
    }

    function In(e, t, n) {
        var r = Pe,
            l = wt.transition;
        try {
            wt.transition = null, Pe = 1, wd(e, t, n, r)
        } finally {
            wt.transition = l, Pe = r
        }
        return null
    }

    function wd(e, t, n, r) {
        do pr(); while (Nn !== null);
        if ((Se & 6) !== 0) throw Error(m(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(m(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var s = n.lanes | n.childLanes;
        if (nc(e, s), e === Xe && (We = Xe = null, Ze = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Zl || (Zl = !0, _u(ol, function() {
                return pr(), null
            })), s = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || s) {
            s = wt.transition, wt.transition = null;
            var i = Pe;
            Pe = 1;
            var a = Se;
            Se |= 4, Fo.current = null, vd(e, n), mu(n, e), Ic($s), ml = !!Bs, $s = Bs = null, e.current = n, gd(n), qu(), Se = a, Pe = i, wt.transition = s
        } else e.current = n;
        if (Zl && (Zl = !1, Nn = e, Jl = l), s = e.pendingLanes, s === 0 && (xn = null), Yu(n.stateNode), ct(e, $e()), t !== null)
            for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
        if (Gl) throw Gl = !1, e = Do, Do = null, e;
        return (Jl & 1) !== 0 && e.tag !== 0 && pr(), s = e.pendingLanes, (s & 1) !== 0 ? e === Oo ? Jr++ : (Jr = 0, Oo = e) : Jr = 0, hn(), null
    }

    function pr() {
        if (Nn !== null) {
            var e = di(Jl),
                t = wt.transition,
                n = Pe;
            try {
                if (wt.transition = null, Pe = 16 > e ? 16 : e, Nn === null) var r = !1;
                else {
                    if (e = Nn, Nn = null, Jl = 0, (Se & 6) !== 0) throw Error(m(331));
                    var l = Se;
                    for (Se |= 4, I = e.current; I !== null;) {
                        var s = I,
                            i = s.child;
                        if ((I.flags & 16) !== 0) {
                            var a = s.deletions;
                            if (a !== null) {
                                for (var u = 0; u < a.length; u++) {
                                    var g = a[u];
                                    for (I = g; I !== null;) {
                                        var S = I;
                                        switch (S.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Yr(8, S, s)
                                        }
                                        var C = S.child;
                                        if (C !== null) C.return = S, I = C;
                                        else
                                            for (; I !== null;) {
                                                S = I;
                                                var k = S.sibling,
                                                    $ = S.return;
                                                if (au(S), S === g) {
                                                    I = null;
                                                    break
                                                }
                                                if (k !== null) {
                                                    k.return = $, I = k;
                                                    break
                                                }
                                                I = $
                                            }
                                    }
                                }
                                var W = s.alternate;
                                if (W !== null) {
                                    var K = W.child;
                                    if (K !== null) {
                                        W.child = null;
                                        do {
                                            var Ie = K.sibling;
                                            K.sibling = null, K = Ie
                                        } while (K !== null)
                                    }
                                }
                                I = s
                            }
                        }
                        if ((s.subtreeFlags & 2064) !== 0 && i !== null) i.return = s, I = i;
                        else e: for (; I !== null;) {
                            if (s = I, (s.flags & 2048) !== 0) switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Yr(9, s, s.return)
                            }
                            var h = s.sibling;
                            if (h !== null) {
                                h.return = s.return, I = h;
                                break e
                            }
                            I = s.return
                        }
                    }
                    var d = e.current;
                    for (I = d; I !== null;) {
                        i = I;
                        var v = i.child;
                        if ((i.subtreeFlags & 2064) !== 0 && v !== null) v.return = i, I = v;
                        else e: for (i = d; I !== null;) {
                            if (a = I, (a.flags & 2048) !== 0) try {
                                switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Kl(9, a)
                                }
                            } catch (X) {
                                Be(a, a.return, X)
                            }
                            if (a === i) {
                                I = null;
                                break e
                            }
                            var P = a.sibling;
                            if (P !== null) {
                                P.return = a.return, I = P;
                                break e
                            }
                            I = a.return
                        }
                    }
                    if (Se = l, hn(), Bt && typeof Bt.onPostCommitFiberRoot == "function") try {
                        Bt.onPostCommitFiberRoot(il, e)
                    } catch {}
                    r = !0
                }
                return r
            } finally {
                Pe = n, wt.transition = t
            }
        }
        return !1
    }

    function Su(e, t, n) {
        t = cr(n, t), t = Ia(e, t, 1), e = gn(e, t, 1), t = st(), e !== null && (kr(e, 1, t), ct(e, t))
    }

    function Be(e, t, n) {
        if (e.tag === 3) Su(e, e, n);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Su(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xn === null || !xn.has(r))) {
                        e = cr(n, e), e = Va(t, e, 1), t = gn(t, e, 1), e = st(), t !== null && (kr(t, 1, e), ct(t, e));
                        break
                    }
                }
                t = t.return
            }
    }

    function kd(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = st(), e.pingedLanes |= e.suspendedLanes & n, Xe === e && (Ze & n) === n && (qe === 4 || qe === 3 && (Ze & 130023424) === Ze && 500 > $e() - Ao ? $n(e, 0) : Ro |= n), ct(e, t)
    }

    function Cu(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ul, ul <<= 1, (ul & 130023424) === 0 && (ul = 4194304)));
        var n = st();
        e = Yt(e, t), e !== null && (kr(e, t, n), ct(e, n))
    }

    function Sd(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), Cu(e, n)
    }

    function Cd(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var r = e.stateNode,
                    l = e.memoizedState;
                l !== null && (n = l.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(m(314))
        }
        r !== null && r.delete(t), Cu(e, n)
    }
    var Eu;
    Eu = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || ot.current) at = !0;
            else {
                if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return at = !1, fd(e, t, n);
                at = (e.flags & 131072) !== 0
            }
        else at = !1, Fe && (t.flags & 1048576) !== 0 && sa(t, Ll, t.index);
        switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                Ql(e, t), e = t.pendingProps;
                var l = nr(t, Je.current);
                ar(t, n), l = fo(null, t, r, e, l, n);
                var s = mo();
                return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, it(r) ? (s = !0, Ml(t)) : s = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, lo(t), l.updater = Hl, t.stateNode = l, l._reactInternals = t, xo(t, r, e, n), t = ko(null, t, r, !0, s, n)) : (t.tag = 0, Fe && s && Ks(t), lt(null, t, l, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (Ql(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = _d(r), e = At(r, e), l) {
                        case 0:
                            t = wo(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Za(null, t, r, e, n);
                            break e;
                        case 11:
                            t = qa(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Ka(null, t, r, At(r.type, e), n);
                            break e
                    }
                    throw Error(m(306, r, ""))
                }
                return t;
            case 0:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : At(r, l), wo(e, t, r, l, n);
            case 1:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : At(r, l), Za(e, t, r, l, n);
            case 3:
                e: {
                    if (Ja(t), e === null) throw Error(m(387));r = t.pendingProps,
                    s = t.memoizedState,
                    l = s.element,
                    pa(e, t),
                    Ol(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, s.isDehydrated)
                        if (s = {
                                element: r,
                                isDehydrated: !1,
                                cache: i.cache,
                                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                                transitions: i.transitions
                            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                            l = cr(Error(m(423)), t), t = eu(e, t, r, n, l);
                            break e
                        } else if (r !== l) {
                        l = cr(Error(m(424)), t), t = eu(e, t, r, n, l);
                        break e
                    } else
                        for (pt = fn(t.stateNode.containerInfo.firstChild), mt = t, Fe = !0, Rt = null, n = fa(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (sr(), r === l) {
                            t = Zt(e, t, n);
                            break e
                        }
                        lt(e, t, r, n)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return ga(t), e === null && Gs(t), r = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = l.children, Is(r, l) ? i = null : s !== null && Is(r, s) && (t.flags |= 32), Ga(e, t), lt(e, t, i, n), t.child;
            case 6:
                return e === null && Gs(t), null;
            case 13:
                return tu(e, t, n);
            case 4:
                return so(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = or(t, null, r, n) : lt(e, t, r, n), t.child;
            case 11:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : At(r, l), qa(e, t, r, l, n);
            case 7:
                return lt(e, t, t.pendingProps, n), t.child;
            case 8:
                return lt(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return lt(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, l = t.pendingProps, s = t.memoizedProps, i = l.value, Te(Rl, r._currentValue), r._currentValue = i, s !== null)
                        if (Ft(s.value, i)) {
                            if (s.children === l.children && !ot.current) {
                                t = Zt(e, t, n);
                                break e
                            }
                        } else
                            for (s = t.child, s !== null && (s.return = t); s !== null;) {
                                var a = s.dependencies;
                                if (a !== null) {
                                    i = s.child;
                                    for (var u = a.firstContext; u !== null;) {
                                        if (u.context === r) {
                                            if (s.tag === 1) {
                                                u = Gt(-1, n & -n), u.tag = 2;
                                                var g = s.updateQueue;
                                                if (g !== null) {
                                                    g = g.shared;
                                                    var S = g.pending;
                                                    S === null ? u.next = u : (u.next = S.next, S.next = u), g.pending = u
                                                }
                                            }
                                            s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), no(s.return, n, t), a.lanes |= n;
                                            break
                                        }
                                        u = u.next
                                    }
                                } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
                                else if (s.tag === 18) {
                                    if (i = s.return, i === null) throw Error(m(341));
                                    i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), no(i, n, t), i = s.sibling
                                } else i = s.child;
                                if (i !== null) i.return = s;
                                else
                                    for (i = s; i !== null;) {
                                        if (i === t) {
                                            i = null;
                                            break
                                        }
                                        if (s = i.sibling, s !== null) {
                                            s.return = i.return, i = s;
                                            break
                                        }
                                        i = i.return
                                    }
                                s = i
                            }
                    lt(e, t, l.children, n),
                    t = t.child
                }
                return t;
            case 9:
                return l = t.type, r = t.pendingProps.children, ar(t, n), l = Nt(l), r = r(l), t.flags |= 1, lt(e, t, r, n), t.child;
            case 14:
                return r = t.type, l = At(r, t.pendingProps), l = At(r.type, l), Ka(e, t, r, l, n);
            case 15:
                return Xa(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : At(r, l), Ql(e, t), t.tag = 1, it(r) ? (e = !0, Ml(t)) : e = !1, ar(t, n), Ba(t, r, l), xo(t, r, l, n), ko(null, t, r, !0, e, n);
            case 19:
                return ru(e, t, n);
            case 22:
                return Ya(e, t, n)
        }
        throw Error(m(156, t.tag))
    };

    function _u(e, t) {
        return oi(e, t)
    }

    function Ed(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function kt(e, t, n, r) {
        return new Ed(e, t, n, r)
    }

    function Vo(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function _d(e) {
        if (typeof e == "function") return Vo(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === be) return 11;
            if (e === Q) return 14
        }
        return 2
    }

    function kn(e, t) {
        var n = e.alternate;
        return n === null ? (n = kt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function rs(e, t, n, r, l, s) {
        var i = 2;
        if (r = e, typeof e == "function") Vo(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch (e) {
            case fe:
                return Vn(n.children, l, s, t);
            case me:
                i = 8, l |= 8;
                break;
            case se:
                return e = kt(12, n, t, l | 2), e.elementType = se, e.lanes = s, e;
            case z:
                return e = kt(13, n, t, l), e.elementType = z, e.lanes = s, e;
            case J:
                return e = kt(19, n, t, l), e.elementType = J, e.lanes = s, e;
            case U:
                return ls(n, l, s, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case ke:
                        i = 10;
                        break e;
                    case Ae:
                        i = 9;
                        break e;
                    case be:
                        i = 11;
                        break e;
                    case Q:
                        i = 14;
                        break e;
                    case le:
                        i = 16, r = null;
                        break e
                }
                throw Error(m(130, e == null ? e : typeof e, ""))
        }
        return t = kt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = s, t
    }

    function Vn(e, t, n, r) {
        return e = kt(7, e, r, t), e.lanes = n, e
    }

    function ls(e, t, n, r) {
        return e = kt(22, e, r, t), e.elementType = U, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e
    }

    function Ho(e, t, n) {
        return e = kt(6, e, null, t), e.lanes = n, e
    }

    function Wo(e, t, n) {
        return t = kt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Md(e, t, n, r, l) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gs(0), this.expirationTimes = gs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gs(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
    }

    function Qo(e, t, n, r, l, s, i, a, u) {
        return e = new Md(e, t, n, a, u), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = kt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, lo(s), e
    }

    function Pd(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Re,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }

    function Mu(e) {
        if (!e) return pn;
        e = e._reactInternals;
        e: {
            if (Ln(e) !== e || e.tag !== 1) throw Error(m(170));
            var t = e;do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (it(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(m(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (it(n)) return na(e, n, t)
        }
        return t
    }

    function Pu(e, t, n, r, l, s, i, a, u) {
        return e = Qo(n, r, !0, e, l, s, i, a, u), e.context = Mu(null), n = e.current, r = st(), l = jn(n), s = Gt(r, l), s.callback = t ?? null, gn(n, s, l), e.current.lanes = l, kr(e, l, r), ct(e, r), e
    }

    function ss(e, t, n, r) {
        var l = t.current,
            s = st(),
            i = jn(l);
        return n = Mu(n), t.context === null ? t.context = n : t.pendingContext = n, t = Gt(s, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = gn(l, t, i), e !== null && (Ut(e, l, i, s), Dl(e, l, i)), i
    }

    function os(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }

    function Tu(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function qo(e, t) {
        Tu(e, t), (e = e.alternate) && Tu(e, t)
    }

    function Td() {
        return null
    }
    var Lu = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    };

    function Ko(e) {
        this._internalRoot = e
    }
    is.prototype.render = Ko.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(m(409));
        ss(e, t, null, null)
    }, is.prototype.unmount = Ko.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Bn(function() {
                ss(null, e, null, null)
            }), t[Qt] = null
        }
    };

    function is(e) {
        this._internalRoot = e
    }
    is.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = pi();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++);
            un.splice(n, 0, e), n === 0 && gi(e)
        }
    };

    function Xo(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function as(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function zu() {}

    function Ld(e, t, n, r, l) {
        if (l) {
            if (typeof r == "function") {
                var s = r;
                r = function() {
                    var g = os(i);
                    s.call(g)
                }
            }
            var i = Pu(t, r, e, 0, null, !1, !1, "", zu);
            return e._reactRootContainer = i, e[Qt] = i.current, Or(e.nodeType === 8 ? e.parentNode : e), Bn(), i
        }
        for (; l = e.lastChild;) e.removeChild(l);
        if (typeof r == "function") {
            var a = r;
            r = function() {
                var g = os(u);
                a.call(g)
            }
        }
        var u = Qo(e, 0, !1, null, null, !1, !1, "", zu);
        return e._reactRootContainer = u, e[Qt] = u.current, Or(e.nodeType === 8 ? e.parentNode : e), Bn(function() {
            ss(t, u, n, r)
        }), u
    }

    function us(e, t, n, r, l) {
        var s = n._reactRootContainer;
        if (s) {
            var i = s;
            if (typeof l == "function") {
                var a = l;
                l = function() {
                    var u = os(i);
                    a.call(u)
                }
            }
            ss(t, i, e, l)
        } else i = Ld(n, t, e, l, r);
        return os(i)
    }
    fi = function(e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = wr(t.pendingLanes);
                    n !== 0 && (ys(t, n | 1), ct(t, $e()), (Se & 6) === 0 && (mr = $e() + 500, hn()))
                }
                break;
            case 13:
                Bn(function() {
                    var r = Yt(e, 1);
                    if (r !== null) {
                        var l = st();
                        Ut(r, e, 1, l)
                    }
                }), qo(e, 1)
        }
    }, xs = function(e) {
        if (e.tag === 13) {
            var t = Yt(e, 134217728);
            if (t !== null) {
                var n = st();
                Ut(t, e, 134217728, n)
            }
            qo(e, 134217728)
        }
    }, mi = function(e) {
        if (e.tag === 13) {
            var t = jn(e),
                n = Yt(e, t);
            if (n !== null) {
                var r = st();
                Ut(n, e, t, r)
            }
            qo(e, t)
        }
    }, pi = function() {
        return Pe
    }, hi = function(e, t) {
        var n = Pe;
        try {
            return Pe = e, t()
        } finally {
            Pe = n
        }
    }, Qn = function(e, t, n) {
        switch (t) {
            case "input":
                if (en(e, n), t = n.name, n.type === "radio" && t != null) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var l = El(r);
                            if (!l) throw Error(m(90));
                            vt(r), en(r, l)
                        }
                    }
                }
                break;
            case "textarea":
                _n(e, n);
                break;
            case "select":
                t = n.value, t != null && Pt(e, !!n.multiple, t, !1)
        }
    }, H = Bo, oe = Bn;
    var zd = {
            usingClientEntryPoint: !1,
            Events: [Br, er, El, w, q, Bo]
        },
        el = {
            findFiberByHostInstance: zn,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        Fd = {
            bundleType: el.bundleType,
            version: el.version,
            rendererPackageName: el.rendererPackageName,
            rendererConfig: el.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: ve.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return e = li(e), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: el.findFiberByHostInstance || Td,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!cs.isDisabled && cs.supportsFiber) try {
            il = cs.inject(Fd), Bt = cs
        } catch {}
    }
    return dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd, dt.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Xo(t)) throw Error(m(200));
        return Pd(e, t, null, n)
    }, dt.createRoot = function(e, t) {
        if (!Xo(e)) throw Error(m(299));
        var n = !1,
            r = "",
            l = Lu;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Qo(e, 1, !1, null, null, n, !1, r, l), e[Qt] = t.current, Or(e.nodeType === 8 ? e.parentNode : e), new Ko(t)
    }, dt.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
        return e = li(t), e = e === null ? null : e.stateNode, e
    }, dt.flushSync = function(e) {
        return Bn(e)
    }, dt.hydrate = function(e, t, n) {
        if (!as(t)) throw Error(m(200));
        return us(null, e, t, !0, n)
    }, dt.hydrateRoot = function(e, t, n) {
        if (!Xo(e)) throw Error(m(405));
        var r = n != null && n.hydratedSources || null,
            l = !1,
            s = "",
            i = Lu;
        if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Pu(t, null, e, 1, n ?? null, l, !1, s, i), e[Qt] = t.current, Or(e), r)
            for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
        return new is(t)
    }, dt.render = function(e, t, n) {
        if (!as(t)) throw Error(m(200));
        return us(null, e, t, !1, n)
    }, dt.unmountComponentAtNode = function(e) {
        if (!as(e)) throw Error(m(40));
        return e._reactRootContainer ? (Bn(function() {
            us(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Qt] = null
            })
        }), !0) : !1
    }, dt.unstable_batchedUpdates = Bo, dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!as(n)) throw Error(m(200));
        if (e == null || e._reactInternals === void 0) throw Error(m(38));
        return us(e, t, n, !1, r)
    }, dt.version = "18.3.1-next-f1338f8080-20240426", dt
}
var Bu;

function $d() {
    if (Bu) return Zo.exports;
    Bu = 1;

    function N() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N)
        } catch (y) {
            console.error(y)
        }
    }
    return N(), Zo.exports = Bd(), Zo.exports
}
var $u;

function Id() {
    if ($u) return ds;
    $u = 1;
    var N = $d();
    return ds.createRoot = N.createRoot, ds.hydrateRoot = N.hydrateRoot, ds
}
var Vd = Id();
const nl = [{
        rotulo: "C8/10",
        fck: 8,
        fcd: 5.3,
        fctm: 1.2
    }, {
        rotulo: "C12/15",
        fck: 12,
        fcd: 8,
        fctm: 1.6
    }, {
        rotulo: "C16/20",
        fck: 16,
        fcd: 10.7,
        fctm: 1.9
    }, {
        rotulo: "C20/25",
        fck: 20,
        fcd: 13.3,
        fctm: 2.2
    }, {
        rotulo: "C25/30",
        fck: 25,
        fcd: 16.7,
        fctm: 2.6
    }, {
        rotulo: "C30/37",
        fck: 30,
        fcd: 20,
        fctm: 2.9
    }, {
        rotulo: "C35/45",
        fck: 35,
        fcd: 23.3,
        fctm: 3.2
    }, {
        rotulo: "C40/50",
        fck: 40,
        fcd: 26.7,
        fctm: 3.5
    }, {
        rotulo: "C45/55",
        fck: 45,
        fcd: 30,
        fctm: 3.8
    }, {
        rotulo: "C50/60",
        fck: 50,
        fcd: 33.3,
        fctm: 4.1
    }, {
        rotulo: "C55/67",
        fck: 55,
        fcd: 36.7,
        fctm: 4.3
    }, {
        rotulo: "C60/75",
        fck: 60,
        fcd: 40,
        fctm: 4.6
    }, {
        rotulo: "C70/85",
        fck: 70,
        fcd: 46.7,
        fctm: 5
    }, {
        rotulo: "C80/95",
        fck: 80,
        fcd: 53.3,
        fctm: 5.6
    }, {
        rotulo: "C90/105",
        fck: 90,
        fcd: 60,
        fctm: 6
    }, {
        rotulo: "C100/115",
        fck: 100,
        fcd: 66.7,
        fctm: 6.5
    }],
    fs = [{
        rotulo: "A220",
        fyk: 220,
        fyd: 191
    }, {
        rotulo: "A235",
        fyk: 235,
        fyd: 204
    }, {
        rotulo: "A400",
        fyk: 400,
        fyd: 348
    }, {
        rotulo: "A500",
        fyk: 500,
        fyd: 435
    }, {
        rotulo: "A580",
        fyk: 580,
        fyd: 504
    }, {
        rotulo: "A600",
        fyk: 600,
        fyd: 522
    }, {
        rotulo: "A630",
        fyk: 630,
        fyd: 548
    }, {
        rotulo: "A615[Grau 40]",
        fyk: 280,
        fyd: 244
    }, {
        rotulo: "A615[Grau 60]",
        fyk: 420,
        fyd: 365
    }, {
        rotulo: "A615[Grau 75]",
        fyk: 520,
        fyd: 452
    }, {
        rotulo: "A615[Grau 80]",
        fyk: 550,
        fyd: 478
    }, {
        rotulo: "A615[Grau 100]",
        fyk: 690,
        fyd: 600
    }];

function Hd(N, y, m) {
    const {
        fcd: D,
        fyd: R
    } = y, {
        base: E,
        alturaUtil: V
    } = m, A = N * 100 / (E * Math.pow(V, 2) * D);
    let B = 0,
        _ = 0,
        T = 0,
        M = "",
        L = !1;
    if (A > .308) {
        L = !0;
        const O = m.altura,
            ue = (A - .308) / (1 - (O - V) / V),
            Y = .38 + ue;
        _ = ue * E * V * D / R, B = Y * E * V * D / R, T = (V - N * 100 / (R * B)) / .4, T > .259 * V && T < 3.5 / (3.5 + R / 21) * V ? M = "Domínio 3" : T < .259 * V ? M = "Domínio 2" : M = "Situação não favorável, acima do Domínio 3"
    } else B = (1 - Math.sqrt(1 - 2 * A)) * E * V * D / R, T = (V - N * 100 / (R * B)) / .4, T > .259 * V && T < 3.5 / (3.5 + R / 21) * V ? M = "Domínio 3" : T < .259 * V ? M = "Domínio 2" : M = "Situação não favorável, acima do Domínio 3";
    return {
        momento: N,
        momentoReduzido: A,
        linhaNeutra: T,
        dominio: M,
        duplamenteArmado: L,
        areaTracao: B,
        areaCompressao: L ? _ : void 0,
        sugestoesTracao: [],
        sugestoesCompressao: L ? [] : void 0
    }
}

function rl(N, y) {
    const m = [6, 8, 10, 12, 16, 20, 25, 32],
        D = [
            [.28, .5, .79, 1.13, 2.01, 3.14, 4.91, 8.04],
            [.57, 1.01, 1.57, 2.26, 4.02, 6.28, 9.82, 16.08],
            [.85, 1.51, 2.36, 3.39, 6.03, 9.42, 14.73, 24.13],
            [1.13, 2.01, 3.14, 4.52, 8.04, 12.57, 19.63, 32.17],
            [1.41, 2.51, 3.93, 5.65, 10.05, 15.71, 24.54, 40.21],
            [1.7, 3.02, 4.71, 6.79, 12.06, 18.85, 29.45, 48.25],
            [1.98, 3.52, 5.5, 7.92, 14.07, 21.99, 34.36, 56.3],
            [2.26, 4.02, 6.28, 9.04, 16.08, 25.13, 39.27, 64.34],
            [2.54, 4.52, 7.07, 10.17, 18.1, 28.27, 44.18, 72.38],
            [2.83, 5.03, 7.85, 11.31, 20.11, 31.42, 49.09, 80.42],
            [3.11, 5.53, 8.64, 12.44, 22.12, 34.56, 54, 88.47],
            [3.39, 6.03, 9.42, 13.57, 24.13, 37.7, 58.9, 96.51]
        ],
        {
            diametroMinimo: R,
            diametroMaximo: E,
            limiteDesperdicio: V
        } = y,
        A = N * (1 + V / 100),
        B = [];
    for (let _ = 0; _ < 6; _++) {
        const T = _ + 1;
        for (let M = 0; M < m.length; M++) {
            const L = m[M];
            if (L < R || L > E) continue;
            const O = D[_][M];
            O >= N && O <= A && B.push({
                tipo: "simples",
                diametro: L,
                quantidade: T,
                area: O
            })
        }
    }
    for (let _ = 0; _ < 6; _++) {
        const T = _ + 1;
        for (let M = 0; M < m.length; M++) {
            const L = m[M];
            if (!(L < R || L > E))
                for (let O = _; O < 6; O++) {
                    const ue = O + 1;
                    if (!(T + ue > 6))
                        for (let Y = 0; Y < m.length; Y++) {
                            const Z = m[Y];
                            if (Z < R || Z > E || M === Y) continue;
                            const ce = D[_][M] + D[O][Y];
                            ce >= N && ce <= A && B.push({
                                tipo: "composta",
                                diametro: L,
                                quantidade: T,
                                diametro2: Z,
                                quantidade2: ue,
                                area: ce
                            })
                        }
                }
        }
    }
    return B
}

function Ve(N, y = 3) {
    return Number.isInteger(N) ? N.toString() : N.toFixed(y).replace(/\.?0+$/, "")
}

function Wd({
    onNext: N
}) {
    const [y, m] = G.useState(3), [D, R] = G.useState(3), [E, V] = G.useState(nl[3].fcd), [A, B] = G.useState(fs[3].fyd), [_, T] = G.useState(nl[3].fctm);
    G.useEffect(() => {
        const L = nl[y];
        V(L.fcd / 10), T(L.fctm)
    }, [y]), G.useEffect(() => {
        const L = fs[D];
        B(L.fyd / 10)
    }, [D]);
    const M = L => {
        L.preventDefault();
        const O = {
            classeBetao: nl[y].fck,
            tipoAco: fs[D].fyk,
            fcd: E,
            fyd: A,
            fctm: _
        };
        N(O)
    };
    return o.jsxs("div", {
        className: "max-w-5xl mx-auto",
        children: [o.jsx("h2", {
            className: "text-2xl font-bold mb-6 text-center",
            children: "Características da Viga e Tipo de Secção"
        }), o.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
            children: [o.jsxs("div", {
                children: [o.jsxs("div", {
                    className: "mb-6 p-4 bg-blue-50 rounded-md",
                    children: [o.jsx("p", {
                        className: "text-blue-800 text-center",
                        children: "Bem-vindo! Vamos calcular?"
                    }), o.jsx("p", {
                        className: "text-blue-600 text-sm mt-2 text-center",
                        children: "Todos os números com casas decimais devem ser separados por ponto (.) e não vírgula (,)"
                    }), o.jsx("div", {
                        className: "flex justify-center mt-2",
                        children: o.jsxs("div", {
                            className: "bg-white p-2 rounded text-sm",
                            children: [o.jsx("p", {
                                className: "text-red-500",
                                children: "Ex: 1,3 → Erro"
                            }), o.jsx("p", {
                                className: "text-green-500",
                                children: "Ex: 1.3 → Correto"
                            })]
                        })
                    })]
                }), o.jsxs("form", {
                    onSubmit: M,
                    children: [o.jsxs("div", {
                        className: "mb-6",
                        children: [o.jsx("label", {
                            htmlFor: "classeBetao",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Classe de Betão:"
                        }), o.jsx("select", {
                            id: "classeBetao",
                            value: y,
                            onChange: L => m(parseInt(L.target.value)),
                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                            required: !0,
                            children: nl.map((L, O) => o.jsx("option", {
                                value: O,
                                children: L.rotulo
                            }, O))
                        })]
                    }), o.jsxs("div", {
                        className: "mb-6",
                        children: [o.jsx("label", {
                            htmlFor: "tipoAco",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Tipo de Aço:"
                        }), o.jsx("select", {
                            id: "tipoAco",
                            value: D,
                            onChange: L => R(parseInt(L.target.value)),
                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                            required: !0,
                            children: fs.map((L, O) => o.jsx("option", {
                                value: O,
                                children: L.rotulo
                            }, O))
                        })]
                    }), o.jsxs("div", {
                        className: "mb-6 p-4 bg-gray-50 rounded-md",
                        children: [o.jsx("h3", {
                            className: "font-medium mb-2",
                            children: "Resistências Características Minoradas:"
                        }), o.jsxs("p", {
                            children: [o.jsx("i", {
                                children: "fcd"
                            }), ": ", Ve(E * 10), " MPa"]
                        }), o.jsxs("p", {
                            children: [o.jsx("i", {
                                children: "fyd"
                            }), ": ", Ve(A * 10), " MPa"]
                        })]
                    }), o.jsx("div", {
                        className: "flex justify-end",
                        children: o.jsx("button", {
                            type: "submit",
                            className: "bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                            children: "Avançar"
                        })
                    })]
                })]
            }), o.jsxs("div", {
                children: [o.jsxs("div", {
                    className: "mb-6 p-4 bg-blue-50 rounded-md",
                    children: [o.jsx("p", {
                        className: "text-blue-800 text-center",
                        children: "Atualmente, apenas secções retangulares são suportadas."
                    }), o.jsx("p", {
                        className: "text-blue-600 text-sm mt-2 text-center",
                        children: "Futuras versões incluirão secções circulares, T, U, L e outras."
                    })]
                }), o.jsx("div", {
                    className: "mb-6",
                    children: o.jsxs("div", {
                        className: "p-4 border border-gray-200 rounded-lg flex items-center space-x-4",
                        children: [o.jsx("input", {
                            type: "radio",
                            id: "secaoRetangular",
                            name: "tipoSecao",
                            value: "1",
                            checked: !0,
                            className: "form-radio h-5 w-5 text-blue-600",
                            readOnly: !0
                        }), o.jsxs("label", {
                            htmlFor: "secaoRetangular",
                            className: "flex-1",
                            children: [o.jsx("div", {
                                className: "font-medium",
                                children: "Secção Retangular"
                            }), o.jsx("div", {
                                className: "text-sm text-gray-500",
                                children: "Secção padrão para vigas e pilares"
                            })]
                        }), o.jsx("div", {
                            className: "w-16 h-16 bg-gray-200 flex items-center justify-center",
                            children: o.jsx("div", {
                                className: "w-12 h-8 bg-gray-400"
                            })
                        })]
                    })
                }), o.jsx("div", {
                    className: "mb-6",
                    children: o.jsxs("div", {
                        className: "p-4 border border-gray-200 rounded-lg flex items-center space-x-4 opacity-50",
                        children: [o.jsx("input", {
                            type: "radio",
                            id: "secaoCircular",
                            name: "tipoSecao",
                            value: "2",
                            disabled: !0,
                            className: "form-radio h-5 w-5 text-blue-600"
                        }), o.jsxs("label", {
                            htmlFor: "secaoCircular",
                            className: "flex-1",
                            children: [o.jsx("div", {
                                className: "font-medium",
                                children: "Secção Circular"
                            }), o.jsx("div", {
                                className: "text-sm text-gray-500",
                                children: "Em desenvolvimento"
                            })]
                        }), o.jsx("div", {
                            className: "w-16 h-16 bg-gray-200 flex items-center justify-center",
                            children: o.jsx("div", {
                                className: "w-10 h-10 rounded-full bg-gray-400"
                            })
                        })]
                    })
                }), o.jsx("div", {
                    className: "mb-6",
                    children: o.jsxs("div", {
                        className: "p-4 border border-gray-200 rounded-lg flex items-center space-x-4 opacity-50",
                        children: [o.jsx("input", {
                            type: "radio",
                            id: "secaoT",
                            name: "tipoSecao",
                            value: "3",
                            disabled: !0,
                            className: "form-radio h-5 w-5 text-blue-600"
                        }), o.jsxs("label", {
                            htmlFor: "secaoT",
                            className: "flex-1",
                            children: [o.jsx("div", {
                                className: "font-medium",
                                children: "Secção T"
                            }), o.jsx("div", {
                                className: "text-sm text-gray-500",
                                children: "Em desenvolvimento"
                            })]
                        }), o.jsx("div", {
                            className: "w-16 h-16 bg-gray-200 flex items-center justify-center",
                            children: o.jsxs("div", {
                                className: "w-12 h-10 relative",
                                children: [o.jsx("div", {
                                    className: "absolute top-0 left-0 right-0 h-3 bg-gray-400"
                                }), o.jsx("div", {
                                    className: "absolute top-3 left-4 right-4 bottom-0 bg-gray-400"
                                })]
                            })
                        })]
                    })
                })]
            })]
        }), o.jsx("div", {
            className: "mt-4 text-xs text-center text-gray-500",
            children: o.jsx("p", {
                children: "© UTALE"
            })
        })]
    })
}

function Qd({
    onNext: N
}) {
    const [y, m] = G.useState(""), [D, R] = G.useState(""), [E, V] = G.useState(""), [A, B] = G.useState(""), [_, T] = G.useState(0), [M, L] = G.useState(""), [O, ue] = G.useState(""), [Y, Z] = G.useState(""), [ce, he] = G.useState("");
    G.useEffect(() => {
        if (y && !M && E && !Y) {
            const me = parseFloat(y),
                se = parseFloat(E);
            !isNaN(me) && !isNaN(se) && T(me - se)
        } else T(0)
    }, [y, E, M, Y]);
    const de = me => {
            const se = me.target.value;
            if (m(se), se === "") {
                L("");
                return
            }
            const ke = parseFloat(se);
            isNaN(ke) ? L("Valor inválido") : ke <= 0 ? L("A altura deve ser maior que zero") : L("")
        },
        ve = me => {
            const se = me.target.value;
            if (R(se), se === "") {
                ue("");
                return
            }
            const ke = parseFloat(se);
            isNaN(ke) ? ue("Valor inválido") : ke <= 0 ? ue("A base deve ser maior que zero") : ue("")
        },
        _e = me => {
            const se = me.target.value;
            if (V(se), se === "") {
                Z("");
                return
            }
            const ke = parseFloat(se);
            if (isNaN(ke)) Z("Valor inválido");
            else if (ke < 0) Z("O recobrimento não pode ser negativo");
            else if (y && !M) {
                const Ae = parseFloat(y);
                ke >= Ae ? Z("O recobrimento deve ser menor que a altura") : Z("")
            } else Z("")
        },
        Re = me => {
            const se = me.target.value;
            if (B(se), se === "") {
                he("");
                return
            }
            const ke = parseFloat(se);
            isNaN(ke) ? he("Valor inválido") : ke < 0 ? he("A largura do apoio não pode ser negativa") : he("")
        },
        fe = me => {
            if (me.preventDefault(), M || O || Y || ce) return;
            const se = {
                altura: parseFloat(y),
                base: parseFloat(D),
                recobrimento: parseFloat(E || "0"),
                alturaUtil: _,
                larguraApoio: parseFloat(A || "0")
            };
            N(se)
        };
    return o.jsxs("div", {
        className: "max-w-5xl mx-auto",
        children: [o.jsx("h2", {
            className: "text-2xl font-bold mb-6 text-center",
            children: "Parâmetros da Secção"
        }), o.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
            children: [o.jsx("div", {
                children: o.jsxs("form", {
                    onSubmit: fe,
                    children: [o.jsxs("div", {
                        className: "mb-4",
                        children: [o.jsx("label", {
                            htmlFor: "altura",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Altura da secção (h) em cm:"
                        }), o.jsx("input", {
                            type: "text",
                            id: "altura",
                            value: y,
                            onChange: de,
                            placeholder: "Ex: 60",
                            className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${M?"border-red-500":"border-gray-300"}`,
                            required: !0
                        }), M && o.jsx("p", {
                            className: "mt-1 text-sm text-red-600",
                            children: M
                        })]
                    }), o.jsxs("div", {
                        className: "mb-4",
                        children: [o.jsx("label", {
                            htmlFor: "base",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Base da secção (b) em cm:"
                        }), o.jsx("input", {
                            type: "text",
                            id: "base",
                            value: D,
                            onChange: ve,
                            placeholder: "Ex: 25",
                            className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${O?"border-red-500":"border-gray-300"}`,
                            required: !0
                        }), O && o.jsx("p", {
                            className: "mt-1 text-sm text-red-600",
                            children: O
                        })]
                    }), o.jsxs("div", {
                        className: "mb-4",
                        children: [o.jsx("label", {
                            htmlFor: "recobrimento",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Recobrimento (c) em cm:"
                        }), o.jsx("input", {
                            type: "text",
                            id: "recobrimento",
                            value: E,
                            onChange: _e,
                            placeholder: "Ex: 2.5",
                            className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${Y?"border-red-500":"border-gray-300"}`,
                            required: !0
                        }), Y && o.jsx("p", {
                            className: "mt-1 text-sm text-red-600",
                            children: Y
                        })]
                    }), o.jsxs("div", {
                        className: "mb-4",
                        children: [o.jsx("label", {
                            htmlFor: "larguraApoio",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Largura do apoio ou pilar em m:"
                        }), o.jsx("input", {
                            type: "text",
                            id: "larguraApoio",
                            value: A,
                            onChange: Re,
                            placeholder: "Ex: 0.2",
                            className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${ce?"border-red-500":"border-gray-300"}`,
                            required: !0
                        }), ce && o.jsx("p", {
                            className: "mt-1 text-sm text-red-600",
                            children: ce
                        }), o.jsx("p", {
                            className: "mt-1 text-sm text-gray-500",
                            children: "Nota: Se deixada como 0, será considerado um apoio pontual."
                        })]
                    }), o.jsxs("div", {
                        className: "mb-6 p-4 bg-blue-50 rounded-md",
                        children: [o.jsx("h3", {
                            className: "font-medium mb-2",
                            children: "Altura útil calculada:"
                        }), o.jsxs("p", {
                            children: ["d = h - c = ", y && E ? `${Ve(_)} cm` : "..."]
                        })]
                    }), o.jsx("div", {
                        className: "flex justify-end",
                        children: o.jsx("button", {
                            type: "submit",
                            className: "bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                            disabled: !y || !D || M !== "" || O !== "" || Y !== "" || ce !== "",
                            children: "Avançar"
                        })
                    })]
                })
            }), o.jsxs("div", {
                children: [o.jsx("h3", {
                    className: "text-lg font-medium mb-4",
                    children: "Visualização da secção"
                }), o.jsx("div", {
                    className: "relative border border-gray-300 rounded-md p-4 h-80 flex items-center justify-center",
                    children: y && D && !M && !O ? o.jsxs("div", {
                        className: "relative",
                        children: [o.jsx("div", {
                            className: "bg-gray-200 border-2 border-gray-400",
                            style: {
                                width: `${Math.min(200,parseFloat(D)*2)}px`,
                                height: `${Math.min(240,parseFloat(y)*2)}px`
                            },
                            children: o.jsx("div", {
                                className: "absolute border-t-2 border-red-500 border-dashed w-full",
                                style: {
                                    bottom: `${Math.min(240,parseFloat(E||"0")*2)}px`,
                                    left: 0
                                }
                            })
                        }), o.jsxs("div", {
                            className: "absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm",
                            children: ["b = ", D, " cm"]
                        }), o.jsxs("div", {
                            className: "absolute -left-8 top-1/2 transform -translate-y-1/2 text-sm",
                            style: {
                                writingMode: "vertical-rl",
                                textOrientation: "mixed"
                            },
                            children: ["h = ", y, " cm"]
                        }), o.jsxs("div", {
                            className: "absolute -right-8 bottom-0 transform translate-y-1/2 text-sm text-red-500",
                            style: {
                                writingMode: "vertical-rl",
                                textOrientation: "mixed"
                            },
                            children: ["d = ", Ve(_), " cm"]
                        }), o.jsxs("div", {
                            className: "absolute -right-8 top-1/2 transform -translate-y-1/2 text-sm text-blue-500",
                            style: {
                                writingMode: "vertical-rl",
                                textOrientation: "mixed"
                            },
                            children: ["c = ", E, " cm"]
                        })]
                    }) : o.jsx("div", {
                        className: "text-gray-400 text-center",
                        children: o.jsx("p", {
                            children: "Insira as dimensões da secção para visualizar"
                        })
                    })
                }), o.jsxs("div", {
                    className: "mt-4 p-4 bg-gray-50 rounded-md",
                    children: [o.jsx("h4", {
                        className: "font-medium mb-2",
                        children: "Informações:"
                    }), o.jsxs("ul", {
                        className: "list-disc list-inside text-sm text-gray-600 space-y-1",
                        children: [o.jsx("li", {
                            children: "A altura útil (d) é a distância da face superior até o centro de gravidade da armadura longitudinal"
                        }), o.jsx("li", {
                            children: "O recobrimento (c) é a distância da face até a armadura"
                        }), o.jsx("li", {
                            children: "A linha tracejada vermelha representa a altura útil (d)"
                        })]
                    })]
                })]
            })]
        }), o.jsx("div", {
            className: "mt-4 text-xs text-center text-gray-500",
            children: o.jsx("p", {
                children: "© UTALE"
            })
        })]
    })
}

function qd({
    parametrosViga: N,
    parametrosSecao: y,
    onSelectELU: m,
    onVoltar: D,
    onTemTorcao: R
}) {
    const [E, V] = G.useState(!1), A = _ => {
        const T = _.target.value === "sim";
        V(T), R(T)
    }, B = _ => {
        m(_)
    };
    return o.jsxs("div", {
        className: "max-w-md mx-auto",
        children: [o.jsx("h2", {
            className: "text-2xl font-bold mb-6 text-center",
            children: "Escolha o Tipo de ELU"
        }), o.jsxs("div", {
            className: "mb-6 p-4 bg-blue-50 rounded-md",
            children: [o.jsx("h3", {
                className: "font-medium text-blue-800 mb-2",
                children: "Parâmetros da Viga:"
            }), o.jsxs("p", {
                className: "text-blue-700",
                children: ["Classe de Betão: C", N.classeBetao]
            }), o.jsxs("p", {
                className: "text-blue-700",
                children: ["Tipo de Aço: A", N.tipoAco]
            }), o.jsxs("p", {
                className: "text-blue-700",
                children: [o.jsx("i", {
                    children: "fcd"
                }), ": ", Ve(N.fcd * 10), " MPa"]
            }), o.jsxs("p", {
                className: "text-blue-700",
                children: [o.jsx("i", {
                    children: "fyd"
                }), ": ", Ve(N.fyd * 10), " MPa"]
            })]
        }), o.jsxs("div", {
            className: "mb-6 p-4 bg-green-50 rounded-md",
            children: [o.jsx("h3", {
                className: "font-medium text-green-800 mb-2",
                children: "Parâmetros da Secção:"
            }), o.jsxs("p", {
                className: "text-green-700",
                children: ["Altura: ", Ve(y.altura), " cm"]
            }), o.jsxs("p", {
                className: "text-green-700",
                children: ["Base: ", Ve(y.base), " cm"]
            }), o.jsxs("p", {
                className: "text-green-700",
                children: ["Altura Útil (d): ", Ve(y.alturaUtil), " cm"]
            }), o.jsxs("p", {
                className: "text-green-700",
                children: ["Largura do Apoio: ", Ve(y.larguraApoio), " m"]
            })]
        }), o.jsxs("div", {
            className: "mb-6 p-4 bg-amber-50 rounded-md",
            children: [o.jsx("h3", {
                className: "font-medium text-amber-800 mb-2",
                children: "A viga sofre torção?"
            }), o.jsxs("div", {
                className: "flex space-x-4",
                children: [o.jsxs("label", {
                    className: "inline-flex items-center",
                    children: [o.jsx("input", {
                        type: "radio",
                        name: "temTorcao",
                        value: "sim",
                        checked: E,
                        onChange: A,
                        className: "form-radio h-4 w-4 text-amber-600"
                    }), o.jsx("span", {
                        className: "ml-2",
                        children: "Sim"
                    })]
                }), o.jsxs("label", {
                    className: "inline-flex items-center",
                    children: [o.jsx("input", {
                        type: "radio",
                        name: "temTorcao",
                        value: "nao",
                        checked: !E,
                        onChange: A,
                        className: "form-radio h-4 w-4 text-amber-600"
                    }), o.jsx("span", {
                        className: "ml-2",
                        children: "Não"
                    })]
                })]
            })]
        }), o.jsxs("div", {
            className: "mb-6 grid grid-cols-1 gap-6",
            children: [o.jsxs("div", {
                className: "p-4 bg-blue-50 rounded-md",
                children: [o.jsx("h3", {
                    className: "font-medium text-blue-800 mb-2",
                    children: "ELU de Flexão"
                }), o.jsx("p", {
                    className: "text-blue-700 mb-4 text-sm",
                    children: "O Estado Limite Último de Flexão verifica a capacidade da viga de resistir a momentos fletores, calculando a armadura longitudinal necessária para evitar a ruptura por flexão."
                }), o.jsx("button", {
                    onClick: () => B("flexao"),
                    className: "w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors text-center",
                    children: "Selecionar ELU de Flexão"
                })]
            }), o.jsxs("div", {
                className: "p-4 bg-green-50 rounded-md",
                children: [o.jsx("h3", {
                    className: "font-medium text-green-800 mb-2",
                    children: "ELU Transverso"
                }), o.jsx("p", {
                    className: "text-green-700 mb-4 text-sm",
                    children: "O Estado Limite Último Transverso verifica a capacidade da viga de resistir a esforços cortantes e torção, calculando a armadura transversal (estribos) necessária para evitar a ruptura por cisalhamento."
                }), o.jsx("button", {
                    onClick: () => B("transverso"),
                    className: "w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors text-center",
                    children: "Selecionar ELU Transverso"
                })]
            })]
        }), o.jsx("div", {
            className: "flex justify-start",
            children: o.jsx("button", {
                onClick: D,
                className: "bg-gray-300 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-400 transition-colors",
                children: "Voltar"
            })
        }), o.jsx("div", {
            className: "mt-4 text-xs text-center text-gray-500",
            children: o.jsx("p", {
                children: "© UTALE"
            })
        })]
    })
}

function Kd({
    parametrosViga: N,
    parametrosSecao: y,
    onMaiorArea: m,
    onVoltar: D,
    onSeguirParaTransverso: R
}) {
    const [E, V] = G.useState(""), [A, B] = G.useState([]), [_, T] = G.useState([]), [M, L] = G.useState(0), [O, ue] = G.useState({
        diametroMinimo: 6,
        diametroMaximo: 32,
        limiteDesperdicio: 35
    }), [Y, Z] = G.useState("eficiencia"), ce = [6, 8, 10, 12, 16, 20, 25, 32], [he, de] = G.useState(""), [ve, _e] = G.useState([]), Re = z => {
        const J = z.target.value;
        if (V(J), J === "") {
            de(""), B([]), _e([]);
            return
        }
        const Q = parseInt(J);
        if (isNaN(Q) || Q <= 0 || Q > 1e3) de("O número de momentos deve ser entre 1 e 1000");
        else {
            de("");
            const le = [...A],
                U = [...ve];
            if (Q > A.length)
                for (let x = A.length; x < Q; x++) le.push(""), U.push("");
            else Q < A.length && (le.splice(Q), U.splice(Q));
            B(le), _e(U)
        }
    }, fe = (z, J) => {
        const Q = [...A];
        if (Q[z] = J, B(Q), J === "") {
            const x = [...ve];
            x[z] = "", _e(x);
            return
        }
        const le = [...ve],
            U = parseFloat(J);
        isNaN(U) ? le[z] = "Valor inválido" : le[z] = "", _e(le)
    }, me = (z, J) => {
        const Q = typeof J == "string" ? parseInt(J) : J;
        if (!isNaN(Q) && Q > 0 && (ue({
                ...O,
                [z]: Q
            }), _.length > 0)) {
            const le = [..._];
            le.forEach(U => {
                U.duplamenteArmado ? (U.sugestoesTracao = rl(U.areaTracao, {
                    diametroMinimo: z === "diametroMinimo" ? Q : O.diametroMinimo,
                    diametroMaximo: z === "diametroMaximo" ? Q : O.diametroMaximo,
                    limiteDesperdicio: z === "limiteDesperdicio" ? Q : O.limiteDesperdicio
                }), U.areaCompressao && (U.sugestoesCompressao = rl(U.areaCompressao, {
                    diametroMinimo: z === "diametroMinimo" ? Q : O.diametroMinimo,
                    diametroMaximo: z === "diametroMaximo" ? Q : O.diametroMaximo,
                    limiteDesperdicio: z === "limiteDesperdicio" ? Q : O.limiteDesperdicio
                }))) : U.sugestoesTracao = rl(U.areaTracao, {
                    diametroMinimo: z === "diametroMinimo" ? Q : O.diametroMinimo,
                    diametroMaximo: z === "diametroMaximo" ? Q : O.diametroMaximo,
                    limiteDesperdicio: z === "limiteDesperdicio" ? Q : O.limiteDesperdicio
                })
            }), T(le)
        }
    }, se = z => {
        const J = z.target.value;
        if (J === "") {
            ue({
                ...O,
                limiteDesperdicio: 0
            });
            return
        }
        const Q = parseInt(J);
        !isNaN(Q) && Q >= 0 && me("limiteDesperdicio", Q)
    }, ke = z => {
        if (Z(z), _.length > 0) {
            const J = [..._];
            J.forEach(Q => {
                z === "eficiencia" ? (Q.sugestoesTracao.sort((le, U) => {
                    const x = le.tipo === "simples" ? le.quantidade : le.quantidade + (le.quantidade2 || 0),
                        b = U.tipo === "simples" ? U.quantidade : U.quantidade + (U.quantidade2 || 0);
                    return x - b
                }), Q.sugestoesCompressao && Q.sugestoesCompressao.sort((le, U) => {
                    const x = le.tipo === "simples" ? le.quantidade : le.quantidade + (le.quantidade2 || 0),
                        b = U.tipo === "simples" ? U.quantidade : U.quantidade + (U.quantidade2 || 0);
                    return x - b
                })) : (Q.sugestoesTracao.sort((le, U) => le.area - U.area), Q.sugestoesCompressao && Q.sugestoesCompressao.sort((le, U) => le.area - U.area))
            }), T(J)
        }
    }, Ae = () => {
        if (he || ve.some(le => le)) return;
        const z = A.map(le => parseFloat(le)),
            J = [];
        let Q = M;
        z.forEach(le => {
            const U = Hd(le, N, y);
            U.sugestoesTracao = rl(U.areaTracao, O), U.duplamenteArmado && U.areaCompressao && (U.sugestoesCompressao = rl(U.areaCompressao, O)), Y === "eficiencia" ? (U.sugestoesTracao.sort((x, b) => {
                const F = x.tipo === "simples" ? x.quantidade : x.quantidade + (x.quantidade2 || 0),
                    f = b.tipo === "simples" ? b.quantidade : b.quantidade + (b.quantidade2 || 0);
                return F - f
            }), U.sugestoesCompressao && U.sugestoesCompressao.sort((x, b) => {
                const F = x.tipo === "simples" ? x.quantidade : x.quantidade + (x.quantidade2 || 0),
                    f = b.tipo === "simples" ? b.quantidade : b.quantidade + (b.quantidade2 || 0);
                return F - f
            })) : (U.sugestoesTracao.sort((x, b) => x.area - b.area), U.sugestoesCompressao && U.sugestoesCompressao.sort((x, b) => x.area - b.area)), J.push(U), U.areaTracao > Q && (Q = U.areaTracao)
        }), T(J), L(Q), m(Q)
    }, be = z => o.jsxs("div", {
        className: "mt-2",
        children: [o.jsxs("p", {
            className: "font-medium",
            children: ["Total de ", z.length, " sugestões encontradas:"]
        }), o.jsx("div", {
            className: "mt-1 space-y-1",
            children: z.map((J, Q) => o.jsx("div", {
                className: "p-2 bg-gray-50 rounded",
                children: J.tipo === "simples" ? o.jsxs("span", {
                    children: [J.quantidade, "×Ø", J.diametro, " = ", Ve(J.area, 2), " cm²"]
                }) : o.jsxs("span", {
                    children: [J.quantidade, "Ø", J.diametro, " + ", J.quantidade2, "Ø", J.diametro2, " = ", Ve(J.area, 2), " cm²"]
                })
            }, Q))
        })]
    });
    return o.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [o.jsx("h2", {
            className: "text-2xl font-bold mb-6 text-center",
            children: "ELU de Flexão"
        }), o.jsxs("div", {
            className: "mb-6",
            children: [o.jsxs("div", {
                className: "mb-4",
                children: [o.jsx("label", {
                    htmlFor: "numMomentos",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "Número de momentos máximos (máx. 1000):"
                }), o.jsx("input", {
                    type: "text",
                    id: "numMomentos",
                    value: E,
                    onChange: Re,
                    placeholder: "Ex: 1",
                    className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${he?"border-red-500":"border-gray-300"}`,
                    required: !0
                }), he && o.jsx("p", {
                    className: "mt-1 text-sm text-red-600",
                    children: he
                })]
            }), A.length > 0 && o.jsx("div", {
                className: "space-y-4 mb-6",
                children: A.map((z, J) => o.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [o.jsxs("label", {
                        className: "text-sm font-medium text-gray-700 w-64",
                        children: [J + 1, "º momento máximo majorado (KN.m):"]
                    }), o.jsx("input", {
                        type: "text",
                        value: z,
                        onChange: Q => fe(J, Q.target.value),
                        placeholder: "Ex: 200",
                        className: `flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${ve[J]?"border-red-500":"border-gray-300"}`,
                        required: !0
                    }), ve[J] && o.jsx("p", {
                        className: "text-sm text-red-600",
                        children: ve[J]
                    })]
                }, J))
            }), o.jsxs("div", {
                className: "mb-6 p-4 bg-blue-50 rounded-md",
                children: [o.jsx("h3", {
                    className: "font-medium text-blue-800 mb-2",
                    children: "Parâmetros para Sugestões de Bitolas:"
                }), o.jsxs("div", {
                    className: "grid grid-cols-3 gap-4",
                    children: [o.jsxs("div", {
                        children: [o.jsx("label", {
                            htmlFor: "diametroMinimo",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Diâmetro Mínimo (mm):"
                        }), o.jsx("select", {
                            id: "diametroMinimo",
                            value: O.diametroMinimo,
                            onChange: z => me("diametroMinimo", parseInt(z.target.value)),
                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                            children: ce.map(z => o.jsxs("option", {
                                value: z,
                                children: [z, " mm"]
                            }, z))
                        })]
                    }), o.jsxs("div", {
                        children: [o.jsx("label", {
                            htmlFor: "diametroMaximo",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Diâmetro Máximo (mm):"
                        }), o.jsx("select", {
                            id: "diametroMaximo",
                            value: O.diametroMaximo,
                            onChange: z => me("diametroMaximo", parseInt(z.target.value)),
                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                            children: ce.map(z => o.jsxs("option", {
                                value: z,
                                children: [z, " mm"]
                            }, z))
                        })]
                    }), o.jsxs("div", {
                        children: [o.jsx("label", {
                            htmlFor: "limiteDesperdicio",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Limite de Desperdício (%):"
                        }), o.jsx("input", {
                            type: "text",
                            id: "limiteDesperdicio",
                            value: O.limiteDesperdicio === 0 ? "" : O.limiteDesperdicio,
                            onChange: se,
                            placeholder: "Ex: 35",
                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        })]
                    })]
                })]
            }), o.jsxs("div", {
                className: "flex justify-between mb-6",
                children: [o.jsx("button", {
                    type: "button",
                    onClick: Ae,
                    className: "bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                    disabled: !E || A.some(z => !z),
                    children: "Calcular"
                }), _.length > 0 && o.jsxs("div", {
                    className: "flex space-x-2",
                    children: [o.jsx("button", {
                        type: "button",
                        onClick: () => ke("eficiencia"),
                        className: `px-4 py-2 rounded-md transition-colors ${Y==="eficiencia"?"bg-green-600 text-white":"bg-gray-200 text-gray-800 hover:bg-gray-300"}`,
                        children: "Eficiência"
                    }), o.jsx("button", {
                        type: "button",
                        onClick: () => ke("area"),
                        className: `px-4 py-2 rounded-md transition-colors ${Y==="area"?"bg-green-600 text-white":"bg-gray-200 text-gray-800 hover:bg-gray-300"}`,
                        children: "Área"
                    })]
                })]
            })]
        }), _.length > 0 && o.jsxs("div", {
            className: "mb-6",
            children: [o.jsx("h3", {
                className: "text-xl font-bold mb-4",
                children: "Resultados:"
            }), o.jsx("div", {
                className: "space-y-6",
                children: _.map((z, J) => o.jsxs("div", {
                    className: "p-4 border border-gray-200 rounded-lg",
                    children: [o.jsxs("h4", {
                        className: "text-lg font-semibold mb-2",
                        children: ["Momento ", J + 1, ": ", Ve(z.momento), " KN.m"]
                    }), o.jsxs("div", {
                        className: "grid grid-cols-2 gap-4 mb-4",
                        children: [o.jsxs("div", {
                            children: [o.jsxs("p", {
                                children: [o.jsx("strong", {
                                    children: "Momento Reduzido:"
                                }), " ", Ve(z.momentoReduzido)]
                            }), o.jsxs("p", {
                                children: [o.jsx("strong", {
                                    children: "Linha Neutra:"
                                }), " ", Ve(z.linhaNeutra), " cm"]
                            }), o.jsxs("p", {
                                children: [o.jsx("strong", {
                                    children: "Domínio:"
                                }), " ", z.dominio]
                            })]
                        }), o.jsx("div", {
                            children: z.duplamenteArmado ? o.jsxs(o.Fragment, {
                                children: [o.jsx("p", {
                                    className: "text-red-600 font-bold",
                                    children: "Duplamente Armado!"
                                }), o.jsxs("p", {
                                    children: [o.jsx("strong", {
                                        children: "Área Tracionada:"
                                    }), " ", Ve(z.areaTracao), " cm²"]
                                }), o.jsxs("p", {
                                    children: [o.jsx("strong", {
                                        children: "Área Comprimida:"
                                    }), " ", Ve(z.areaCompressao || 0), " cm²"]
                                })]
                            }) : o.jsxs(o.Fragment, {
                                children: [o.jsx("p", {
                                    className: "text-green-600 font-bold",
                                    children: "Simplesmente Armado"
                                }), o.jsxs("p", {
                                    children: [o.jsx("strong", {
                                        children: "Área de Aço:"
                                    }), " ", Ve(z.areaTracao), " cm²"]
                                })]
                            })
                        })]
                    }), o.jsxs("div", {
                        className: "mt-4",
                        children: [o.jsxs("h5", {
                            className: "font-semibold mb-2",
                            children: ["Sugestões para Área Tracionada (", Ve(z.areaTracao), " cm²):"]
                        }), be(z.sugestoesTracao)]
                    }), z.duplamenteArmado && z.sugestoesCompressao && o.jsxs("div", {
                        className: "mt-4",
                        children: [o.jsxs("h5", {
                            className: "font-semibold mb-2",
                            children: ["Sugestões para Área Comprimida (", Ve(z.areaCompressao || 0), " cm²):"]
                        }), be(z.sugestoesCompressao)]
                    })]
                }, J))
            })]
        }), o.jsxs("div", {
            className: "flex justify-between",
            children: [o.jsx("button", {
                onClick: D,
                className: "bg-gray-300 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-400 transition-colors",
                children: "Voltar ao Menu"
            }), M > 0 && o.jsxs("div", {
                className: "flex space-x-4 items-center",
                children: [o.jsx("div", {
                    className: "p-2 bg-green-100 rounded-md",
                    children: o.jsxs("p", {
                        className: "text-green-800",
                        children: [o.jsx("strong", {
                            children: "Maior Área:"
                        }), " ", Ve(M), " cm²"]
                    })
                }), o.jsx("button", {
                    onClick: R,
                    className: "bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                    children: "Seguir para ELU Transverso"
                })]
            })]
        }), o.jsx("div", {
            className: "mt-4 text-xs text-center text-gray-500",
            children: o.jsx("p", {
                children: "© UTALE"
            })
        })]
    })
}

function Xd(N, y, m, D, R, E, V, A) {
    const {
        fcd: B,
        fctm: _
    } = N, {
        base: T,
        alturaUtil: M,
        larguraApoio: L
    } = y, O = D !== null ? D : 1 / Math.tan(m * Math.PI / 180), ue = .9 * (M / 100), Y = ue * O + L / 2, Z = Math.min(2, 1 + Math.sqrt(M / 25)), ce = Math.min(.02, R / (T * M)), he = .12 * Z * Math.pow(100 * ce * N.classeBetao, 1 / 3) * T * M * .1, de = 6e3 * (1 - N.classeBetao / 250) * B;
    let ve;
    if (A) {
        const fe = y.area || T * y.altura,
            me = y.perimetro || 2 * T + 2 * y.altura,
            se = fe / me;
        ve = 2 * (y.areaEfetiva || fe) / 1e4 * (se / 100) * _
    }
    const _e = [];
    for (let fe = 0; fe < E.length; fe++) {
        const me = E[fe],
            se = A && fe < V.length ? V[fe] : void 0;
        let ke = 0,
            Ae = 0;
        if (A) {
            if (R > 0 && me <= he && se !== void 0 && se <= (ve || 0)) {
                const be = 20 * _ * T * .1 / N.tipoAco,
                    z = .8 * Math.sqrt(N.classeBetao) * T / (N.tipoAco / 10);
                Ae = be + z / 2
            } else if (y.altura && y.base) {
                const be = m * Math.PI / 180,
                    z = y.area || T * y.altura,
                    J = y.perimetro || 2 * T + 2 * y.altura,
                    Q = z / J,
                    le = y.altura - Q,
                    U = y.base - Q,
                    x = y.areaEfetiva || U * le;
                if (y.altura > y.base) {
                    const F = (se !== void 0 ? se / (2 * (U / 100)) : 0) / (2 * (x / 1e4) * (1 / Math.tan(be)) * N.fyd),
                        f = me / (Y * N.fyd);
                    Ae = F + f / 2
                } else {
                    const F = (se !== void 0 ? se / (2 * (le / 100)) : 0) / (2 * (x / 1e4) * (1 / Math.tan(be))) * N.fyd,
                        f = me / (Y * N.fyd);
                    Ae = F + f / 2
                }
            }
            ke = Ae
        } else R > 0 && me <= he ? ke = .8 * Math.sqrt(N.classeBetao) * T / (N.tipoAco / 10) : ke = me / (.9 * N.fyd * ue * (1 / Math.tan(m * Math.PI / 180)));
        _e.push({
            valor: me,
            torcao: se,
            area: ke,
            areaTotal: A ? Ae : void 0,
            sugestoes: []
        })
    }
    const Re = _e.every(fe => A && fe.torcao !== void 0 ? fe.valor <= de && fe.torcao <= de : fe.valor <= de);
    return {
        angulo: m,
        cotangente: O,
        distanciaEfetiva: Y,
        vrdc: he,
        trdc: A ? ve : void 0,
        tensaoMaxima: de,
        tensaoOk: Re,
        cortantes: _e
    }
}

function Yd(N, y, m, D, R, E, V, A) {
    let B = 0,
        _ = 0,
        T = 0,
        M = 0;
    if (m ? B = N / (2.5 * E * R) : B = N / (E * R), A && V) {
        const {
            altura: L,
            base: O
        } = V, ue = V.perimetro || 2 * O + 2 * L, Z = (V.area || O * L) / ue, ce = L - Z, he = O - Z, de = V.areaEfetiva || he * ce, ve = V.perimetroEfetivo || 2 * he + 2 * ce, _e = 1.2 * y * (ve / 100) / (2 * (de / 1e4) * E);
        _ = _e * (he / 100 / (ve / 100)) + B, T = _e * (he / 100 / (ve / 100)), M = _e * (ce / 100 / (ve / 100))
    }
    return {
        reacao: N,
        torcao: A ? y : void 0,
        consideraLargura: m,
        area: B,
        areaFaceInferior: A ? _ : void 0,
        areaFaceSuperior: A ? T : void 0,
        areaFacesLaterais: A ? M : void 0,
        sugestoes: []
    }
}

function Cn(N, y) {
    const m = [6, 8, 10, 12, 16, 20, 25, 32],
        D = [
            [.28, .5, .79, 1.13, 2.01, 3.14, 4.91, 8.04],
            [.57, 1.01, 1.57, 2.26, 4.02, 6.28, 9.82, 16.08],
            [.85, 1.51, 2.36, 3.39, 6.03, 9.42, 14.73, 24.13],
            [1.13, 2.01, 3.14, 4.52, 8.04, 12.57, 19.63, 32.17],
            [1.41, 2.51, 3.93, 5.65, 10.05, 15.71, 24.54, 40.21],
            [1.7, 3.02, 4.71, 6.79, 12.06, 18.85, 29.45, 48.25],
            [1.98, 3.52, 5.5, 7.92, 14.07, 21.99, 34.36, 56.3],
            [2.26, 4.02, 6.28, 9.04, 16.08, 25.13, 39.27, 64.34],
            [2.54, 4.52, 7.07, 10.17, 18.1, 28.27, 44.18, 72.38],
            [2.83, 5.03, 7.85, 11.31, 20.11, 31.42, 49.09, 80.42],
            [3.11, 5.53, 8.64, 12.44, 22.12, 34.56, 54, 88.47],
            [3.39, 6.03, 9.42, 13.57, 24.13, 37.7, 58.9, 96.51]
        ],
        {
            diametroMinimo: R,
            diametroMaximo: E,
            limiteDesperdicio: V
        } = y,
        A = N * (1 + V / 100),
        B = [];
    let _ = 0;
    for (let T = 0; T < 6; T++) {
        const M = T + 1;
        for (let L = 0; L < m.length; L++) {
            const O = m[L];
            if (O < R || O > E) continue;
            const ue = D[T][L];
            ue >= N && ue <= A && (_++, B.push({
                tipo: "simples",
                diametro: O,
                quantidade: M,
                area: ue,
                id: `${_}`
            }))
        }
    }
    for (let T = 0; T < 6; T++) {
        const M = T + 1;
        for (let L = 0; L < m.length; L++) {
            const O = m[L];
            if (!(O < R || O > E))
                for (let ue = T; ue < 6; ue++) {
                    const Y = ue + 1;
                    if (!(M + Y > 6))
                        for (let Z = 0; Z < m.length; Z++) {
                            const ce = m[Z];
                            if (ce < R || ce > E || L === Z) continue;
                            const he = D[T][L] + D[ue][Z];
                            he >= N && he <= A && (_++, B.push({
                                tipo: "composta",
                                diametro: O,
                                quantidade: M,
                                diametro2: ce,
                                quantidade2: Y,
                                area: he,
                                id: `${_}`
                            }))
                        }
                }
        }
    }
    return Object.defineProperty(B, "totalEncontradas", {
        value: _,
        enumerable: !1
    }), B
}

function Gd(N, y = !1) {
    const m = [6, 8, 10, 12, 16, 20, 25],
        D = [.05, .075, .1, .125, .15, .175, .2, .25, .3, .35],
        R = [
            [5.65, 3.77, 2.83, 2.26, 1.88, 1.62, 1.41, 1.13, .94, .81],
            [10.05, 6.7, 5.03, 4.02, 3.35, 2.87, 2.51, 2.01, 1.68, 1.44],
            [15.71, 10.47, 7.85, 6.28, 5.24, 4.49, 3.93, 3.14, 2.62, 2.24],
            [22.62, 15.08, 11.31, 9.05, 7.54, 6.46, 5.65, 4.52, 3.77, 3.23],
            [40.21, 26.81, 20.11, 16.08, 13.4, 11.49, 10.05, 8.04, 6.7, 5.74],
            [62.83, 41.89, 31.42, 25.13, 20.94, 17.95, 15.71, 12.57, 10.47, 8.98],
            [98.17, 65.45, 49.09, 39.27, 32.72, 28.05, 24.54, 19.63, 16.36, 14.02]
        ],
        E = Math.max(.01, N),
        V = E * 1.35,
        A = [];
    let B = 0;
    for (let _ = 0; _ < m.length; _++)
        for (let T = 0; T < D.length; T++) {
            let M = R[_][T];
            y && (M = M * 2), M >= E && M <= V && (B++, A.push({
                diametro: m[_],
                espacamento: D[T],
                area: M,
                doisRamos: y
            }))
        }
    if (A.length === 0 && E < R[0][9]) {
        let _ = y ? R[0][9] * 2 : R[0][9];
        B++, A.push({
            diametro: m[0],
            espacamento: D[9],
            area: _,
            doisRamos: y
        })
    }
    return Object.defineProperty(A, "totalEncontradas", {
        value: B,
        enumerable: !1
    }), A
}

function ge(N, y = 3) {
    return Number.isInteger(N) ? N.toString() : N.toFixed(y).replace(/\.?0+$/, "")
}

function Zd({
    parametrosViga: N,
    parametrosSecao: y,
    maiorAreaFlexao: m,
    temTorcao: D,
    onVoltar: R
}) {
    const [E, V] = G.useState(null), [A, B] = G.useState(""), [_, T] = G.useState([]), [M, L] = G.useState([]), [O, ue] = G.useState(null), [Y, Z] = G.useState([]), [ce, he] = G.useState([]), [de, ve] = G.useState([]), [_e, Re] = G.useState(""), [fe, me] = G.useState([]), [se, ke] = G.useState([]), [Ae, be] = G.useState([]), [z, J] = G.useState([]), [Q, le] = G.useState([]), U = [6, 8, 10, 12, 16, 20, 25, 32], [x, b] = G.useState({
        diametroMinimo: 6,
        diametroMaximo: 32,
        limiteDesperdicio: 35
    }), [F, f] = G.useState(null), [j, pe] = G.useState(""), [ee, Ne] = G.useState(""), [te, Ce] = G.useState([]), [je, Me] = G.useState([]), [De, St] = G.useState([]), [vt, Ct] = G.useState([]), [Wt, Hn] = G.useState(""), [Et, en] = G.useState([]), [_t, tn] = G.useState([]), [Mt, Pt] = G.useState(""), gt = c => {
        const p = c.target.value === "sim";
        V(p), p ? (ue(null), L([])) : (ue(2), L([]), B(""), T([]), Ce([]), Ne(""))
    }, En = c => {
        const p = c.target.value;
        if (B(p), p === "") {
            Ne(""), T([]), Ce([]);
            return
        }
        const w = parseInt(p);
        if (isNaN(w) || w <= 0) Ne("O número de ângulos deve ser maior que zero");
        else {
            Ne("");
            const q = [..._],
                H = [...te];
            if (w > _.length)
                for (let oe = _.length; oe < w; oe++) q.push(""), H.push("");
            else w < _.length && (q.splice(w), H.splice(w));
            T(q), Ce(H)
        }
    }, _n = (c, p) => {
        const w = [..._];
        if (w[c] = p, T(w), p === "") {
            const oe = [...te];
            oe[c] = "", Ce(oe);
            return
        }
        const q = [...te],
            H = parseFloat(p);
        isNaN(H) || H <= 0 || H >= 90 ? q[c] = "Ângulo deve estar entre 0° e 90°" : q[c] = "", Ce(q)
    }, Tt = () => {
        if (E === !0) {
            if (ee || te.some(ye => ye) || _.some(ye => ye === "")) return;
            const c = _.map(ye => parseFloat(ye));
            L(c);
            const p = c.map(() => ""),
                w = c.map(() => []),
                q = c.map(() => []),
                H = c.map(() => []),
                oe = c.map(() => []),
                we = c.map(() => "");
            Z(p), he(w), St(q), ve(H), Ct(oe), Me(we)
        } else if (E === !1) {
            L([Math.atan(1 / 2) * (180 / Math.PI)]);
            const c = [""],
                p = [
                    []
                ],
                w = [
                    []
                ],
                q = [
                    []
                ],
                H = [
                    []
                ],
                oe = [""];
            Z(c), he(p), St(w), ve(q), Ct(H), Me(oe)
        }
    }, hr = c => {
        f(c), c || (pe(""), Pt(""))
    }, vr = c => {
        const p = c.target.value;
        if (pe(p), p === "") {
            Pt("");
            return
        }
        const w = parseFloat(p);
        isNaN(w) || w <= 0 ? Pt("A área deve ser maior que zero") : Pt("")
    }, Wn = (c, p) => {
        const w = [...Y];
        if (w[c] = p, Z(w), p === "") {
            const oe = [...je];
            oe[c] = "", Me(oe);
            const we = [...ce],
                ye = [...De],
                ae = [...de],
                rt = [...vt];
            we[c] = [], ye[c] = [], ae[c] = [], rt[c] = [], he(we), St(ye), ve(ae), Ct(rt);
            return
        }
        const q = [...je],
            H = parseInt(p);
        if (isNaN(H) || H <= 0 || H > 1e3) q[c] = "O número de cortantes deve ser entre 1 e 1000";
        else {
            q[c] = "";
            const oe = [...ce],
                we = [...De],
                ye = [...de],
                ae = [...vt];
            if (oe[c] || (oe[c] = []), we[c] || (we[c] = []), ye[c] || (ye[c] = []), ae[c] || (ae[c] = []), H > oe[c].length)
                for (let rt = oe[c].length; rt < H; rt++) oe[c].push(""), we[c].push(""), ye[c].push(""), ae[c].push("");
            else H < oe[c].length && (oe[c].splice(H), we[c].splice(H), ye[c].splice(H), ae[c].splice(H));
            he(oe), St(we), ve(ye), Ct(ae)
        }
        Me(q)
    }, ll = (c, p, w) => {
        const q = [...ce];
        if (q[c] || (q[c] = []), q[c][p] = w, he(q), w === "") {
            const we = [...De];
            we[c] || (we[c] = []), we[c][p] = "", St(we);
            return
        }
        const H = [...De];
        H[c] || (H[c] = []);
        const oe = parseFloat(w);
        isNaN(oe) ? H[c][p] = "Valor inválido" : H[c][p] = "", St(H)
    }, Mn = (c, p, w) => {
        const q = [...de];
        if (q[c] || (q[c] = []), q[c][p] = w, ve(q), w === "") {
            const we = [...vt];
            we[c] || (we[c] = []), we[c][p] = "", Ct(we);
            return
        }
        const H = [...vt];
        H[c] || (H[c] = []);
        const oe = parseFloat(w);
        isNaN(oe) ? H[c][p] = "Valor inválido" : H[c][p] = "", Ct(H)
    }, Pn = c => {
        const p = c.target.value;
        if (Re(p), p === "") {
            Hn(""), me([]), en([]), ke([]), tn([]), be([]);
            return
        }
        const w = parseInt(p);
        if (isNaN(w) || w <= 0) Hn("O número de reações deve ser maior que zero");
        else {
            Hn("");
            const q = [...fe],
                H = [...Et],
                oe = [...se],
                we = [..._t],
                ye = [...Ae];
            if (w > fe.length)
                for (let ae = fe.length; ae < w; ae++) q.push(""), H.push(""), oe.push(""), we.push(""), ye.push(!1);
            else w < fe.length && (q.splice(w), H.splice(w), oe.splice(w), we.splice(w), ye.splice(w));
            me(q), en(H), ke(oe), tn(we), be(ye)
        }
    }, ms = (c, p) => {
        const w = [...fe];
        if (w[c] = p, me(w), p === "") {
            const oe = [...Et];
            oe[c] = "", en(oe);
            return
        }
        const q = [...Et],
            H = parseFloat(p);
        isNaN(H) ? q[c] = "Valor inválido" : q[c] = "", en(q)
    }, sl = (c, p) => {
        const w = [...se];
        if (w[c] = p, ke(w), p === "") {
            const oe = [..._t];
            oe[c] = "", tn(oe);
            return
        }
        const q = [..._t],
            H = parseFloat(p);
        isNaN(H) ? q[c] = "Valor inválido" : q[c] = "", tn(q)
    }, gr = (c, p) => {
        const w = [...Ae];
        w[c] = p, be(w)
    }, yr = (c, p) => {
        if (b({
                ...x,
                [c]: p
            }), Q.length > 0) {
            const w = [...Q];
            w.forEach(q => {
                q.sugestoes = Cn(q.area, {
                    diametroMinimo: c === "diametroMinimo" ? p : x.diametroMinimo,
                    diametroMaximo: c === "diametroMaximo" ? p : x.diametroMaximo,
                    limiteDesperdicio: c === "limiteDesperdicio" ? p : x.limiteDesperdicio
                }), D && (q.areaFaceInferior && (q.sugestoesFaceInferior = Cn(q.areaFaceInferior, {
                    diametroMinimo: c === "diametroMinimo" ? p : x.diametroMinimo,
                    diametroMaximo: c === "diametroMaximo" ? p : x.diametroMaximo,
                    limiteDesperdicio: c === "limiteDesperdicio" ? p : x.limiteDesperdicio
                })), q.areaFaceSuperior && (q.sugestoesFaceSuperior = Cn(q.areaFaceSuperior, {
                    diametroMinimo: c === "diametroMinimo" ? p : x.diametroMinimo,
                    diametroMaximo: c === "diametroMaximo" ? p : x.diametroMaximo,
                    limiteDesperdicio: c === "limiteDesperdicio" ? p : x.limiteDesperdicio
                })), q.areaFacesLaterais && (q.sugestoesFacesLaterais = Cn(q.areaFacesLaterais, {
                    diametroMinimo: c === "diametroMinimo" ? p : x.diametroMinimo,
                    diametroMaximo: c === "diametroMaximo" ? p : x.diametroMaximo,
                    limiteDesperdicio: c === "limiteDesperdicio" ? p : x.limiteDesperdicio
                })))
            }), le(w)
        }
    }, xr = c => {
        const p = c.target.value;
        if (p === "") {
            b({
                ...x,
                limiteDesperdicio: 0
            });
            return
        }
        const w = parseInt(p);
        !isNaN(w) && w >= 0 && yr("limiteDesperdicio", w)
    }, Nr = c => {
        var ye, ae, rt, Lt;
        if (je[c] || (ye = De[c]) != null && ye.some(He => He) || D && ((ae = vt[c]) != null && ae.some(He => He)) || (rt = ce[c]) != null && rt.some(He => He === "") || D && ((Lt = de[c]) != null && Lt.some(He => He === ""))) return;
        const p = F === !0 ? parseFloat(j) : m,
            w = ce[c].map(He => parseFloat(He)),
            q = D ? de[c].map(He => parseFloat(He) || 0) : [],
            H = M[c],
            oe = Xd(N, y, H, O, p, w, q, D);
        oe.cortantes.forEach(He => {
            He.sugestoes = Gd(He.areaTotal || He.area, D)
        });
        const we = [...z];
        we[c] = oe, J(we)
    }, jr = () => {
        if (Wt || Et.some(H => H) || D && _t.some(H => H) || fe.some(H => H === "") || D && se.some(H => H === "") || z.length === 0) return;
        const c = z[0],
            p = fe.map(H => parseFloat(H)),
            w = D ? se.map(H => parseFloat(H) || 0) : [],
            q = [];
        p.forEach((H, oe) => {
            const we = D ? w[oe] : 0,
                ye = Ae[oe],
                ae = Yd(H, we, ye, c.distanciaEfetiva, .9 * (y.alturaUtil / 100), N.fyd, D ? y : void 0, D);
            ae.sugestoes = Cn(ae.area, x), D && (ae.areaFaceInferior && (ae.sugestoesFaceInferior = Cn(ae.areaFaceInferior, x)), ae.areaFaceSuperior && (ae.sugestoesFaceSuperior = Cn(ae.areaFaceSuperior, x)), ae.areaFacesLaterais && (ae.sugestoesFacesLaterais = Cn(ae.areaFacesLaterais, x))), q.push(ae)
        }), le(q)
    }, nn = c => o.jsxs("div", {
        className: "mt-2",
        children: [o.jsxs("p", {
            className: "font-medium",
            children: ["Total de ", c.length, " sugestões encontradas:"]
        }), o.jsx("div", {
            className: "mt-1 space-y-1",
            children: c.map((p, w) => o.jsx("div", {
                className: "p-2 bg-gray-50 rounded",
                children: p.tipo === "simples" ? o.jsxs("span", {
                    children: [p.quantidade, "×Ø", p.diametro, " = ", ge(p.area, 2), " cm²"]
                }) : o.jsxs("span", {
                    children: [p.quantidade, "Ø", p.diametro, " + ", p.quantidade2, "Ø", p.diametro2, " = ", ge(p.area, 2), " cm²"]
                })
            }, w))
        })]
    }), Qn = c => o.jsx("div", {
        className: "mt-2",
        children: o.jsx("div", {
            className: "mt-1 space-y-1",
            children: c.map((p, w) => o.jsx("div", {
                className: "p-2 bg-gray-50 rounded",
                children: o.jsxs("span", {
                    children: [p.doisRamos ? "2R" : "Est.", " Ø", p.diametro, " // ", ge(p.espacamento), " ⇒ ", ge(p.area, 2), " cm²/m"]
                })
            }, w))
        })
    }), bt = c => .12 * Math.min(2, 1 + Math.sqrt(y.alturaUtil / 25)) * Math.pow(100 * Math.min(.02, c / (y.base * y.alturaUtil)) * N.classeBetao, 1 / 3) * y.base * y.alturaUtil * .1;
    return o.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [o.jsx("h2", {
            className: "text-2xl font-bold mb-6 text-center",
            children: "ELU Transverso"
        }), o.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
            children: [o.jsxs("div", {
                className: "p-4 bg-blue-50 rounded-md",
                children: [o.jsx("h3", {
                    className: "font-medium text-blue-800 mb-2",
                    children: "Parâmetros da Viga:"
                }), o.jsxs("p", {
                    className: "text-blue-700",
                    children: ["Classe de Betão: C", N.classeBetao]
                }), o.jsxs("p", {
                    className: "text-blue-700",
                    children: ["Tipo de Aço: A", N.tipoAco]
                }), o.jsxs("p", {
                    className: "text-blue-700",
                    children: [o.jsx("i", {
                        children: "fcd"
                    }), ": ", ge(N.fcd * 10), " MPa"]
                }), o.jsxs("p", {
                    className: "text-blue-700",
                    children: [o.jsx("i", {
                        children: "fyd"
                    }), ": ", ge(N.fyd * 10), " MPa"]
                })]
            }), o.jsxs("div", {
                className: "p-4 bg-green-50 rounded-md",
                children: [o.jsx("h3", {
                    className: "font-medium text-green-800 mb-2",
                    children: "Parâmetros da Secção:"
                }), o.jsxs("p", {
                    className: "text-green-700",
                    children: ["Altura: ", ge(y.altura), " cm"]
                }), o.jsxs("p", {
                    className: "text-green-700",
                    children: ["Base: ", ge(y.base), " cm"]
                }), o.jsxs("p", {
                    className: "text-green-700",
                    children: ["Altura Útil (d): ", ge(y.alturaUtil), " cm"]
                }), o.jsxs("p", {
                    className: "text-green-700",
                    children: ["Largura do Apoio: ", ge(y.larguraApoio), " m"]
                })]
            })]
        }), m === 0 && F === null && o.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
            children: [o.jsxs("div", {
                children: [D && o.jsxs("div", {
                    className: "mb-4 p-4 bg-amber-50 rounded-md",
                    children: [o.jsx("h3", {
                        className: "font-medium text-amber-800 mb-2",
                        children: "Cálculos com Torção Ativados"
                    }), o.jsx("p", {
                        className: "text-amber-700",
                        children: "Os cálculos serão realizados considerando os efeitos de torção na viga."
                    })]
                }), o.jsx("div", {
                    className: "mb-4",
                    children: o.jsxs("div", {
                        className: "p-4 bg-yellow-50 rounded-md",
                        children: [o.jsx("h3", {
                            className: "font-medium text-yellow-800 mb-2",
                            children: "INFORMAÇÃO:"
                        }), o.jsx("p", {
                            className: "text-yellow-700",
                            children: "Para o cálculo de Resistência mínima ao corte do betão sem armadura transversal. Notei que não temos área de flexão, pretende inserir manualmente?"
                        }), o.jsxs("div", {
                            className: "mt-4 flex space-x-4",
                            children: [o.jsx("button", {
                                type: "button",
                                onClick: () => hr(!0),
                                className: "bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                                children: "Sim"
                            }), o.jsx("button", {
                                type: "button",
                                onClick: () => hr(!1),
                                className: "bg-gray-300 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-400 transition-colors",
                                children: "Não"
                            })]
                        })]
                    })
                })]
            }), o.jsxs("div", {
                children: [o.jsx("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "Ângulo das Bielas de Compressão"
                }), o.jsxs("div", {
                    className: "mb-4 p-4 bg-gray-50 rounded-md",
                    children: [o.jsx("p", {
                        className: "mb-2",
                        children: "Tem algum ângulo em específico para as bielas de compressão?"
                    }), o.jsxs("div", {
                        className: "flex space-x-4",
                        children: [o.jsxs("label", {
                            className: "inline-flex items-center",
                            children: [o.jsx("input", {
                                type: "radio",
                                name: "temAnguloEspecifico",
                                value: "sim",
                                checked: E === !0,
                                onChange: gt,
                                className: "form-radio h-4 w-4 text-blue-600"
                            }), o.jsx("span", {
                                className: "ml-2",
                                children: "Sim"
                            })]
                        }), o.jsxs("label", {
                            className: "inline-flex items-center",
                            children: [o.jsx("input", {
                                type: "radio",
                                name: "temAnguloEspecifico",
                                value: "nao",
                                checked: E === !1,
                                onChange: gt,
                                className: "form-radio h-4 w-4 text-blue-600"
                            }), o.jsx("span", {
                                className: "ml-2",
                                children: "Não"
                            })]
                        })]
                    })]
                }), E === !0 && o.jsxs("div", {
                    className: "mb-4",
                    children: [o.jsxs("div", {
                        className: "mb-4",
                        children: [o.jsx("label", {
                            htmlFor: "numAngulos",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Número de ângulos:"
                        }), o.jsx("input", {
                            type: "text",
                            id: "numAngulos",
                            value: A,
                            onChange: En,
                            placeholder: "Ex: 1",
                            className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${ee?"border-red-500":"border-gray-300"}`,
                            required: !0
                        }), ee && o.jsx("p", {
                            className: "mt-1 text-sm text-red-600",
                            children: ee
                        })]
                    }), _.length > 0 && o.jsx("div", {
                        className: "space-y-4 mb-4",
                        children: _.map((c, p) => o.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [o.jsxs("label", {
                                className: "text-sm font-medium text-gray-700 w-64",
                                children: [p + 1, "º ângulo em graus:"]
                            }), o.jsx("input", {
                                type: "text",
                                value: c,
                                onChange: w => _n(p, w.target.value),
                                placeholder: "Ex: 45",
                                className: `flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${te[p]?"border-red-500":"border-gray-300"}`,
                                required: !0
                            }), te[p] && o.jsx("p", {
                                className: "text-sm text-red-600",
                                children: te[p]
                            })]
                        }, p))
                    }), o.jsx("button", {
                        type: "button",
                        onClick: Tt,
                        className: "bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                        disabled: !A || _.some(c => !c) || ee !== "" || te.some(c => c !== ""),
                        children: "Confirmar Ângulos"
                    })]
                }), E === !1 && o.jsxs("div", {
                    className: "mb-4",
                    children: [o.jsxs("div", {
                        className: "p-4 bg-blue-50 rounded-md",
                        children: [o.jsx("p", {
                            className: "text-blue-800",
                            children: "Será utilizada a cotangente do ângulo como 2 (ângulo ≈ 26.57°)"
                        }), o.jsxs("p", {
                            className: "mt-2 text-blue-700",
                            children: ["Distância efetiva X = ", ge(.9 * (y.alturaUtil / 100) * 2 + y.larguraApoio / 2), " m"]
                        })]
                    }), o.jsx("button", {
                        type: "button",
                        onClick: Tt,
                        className: "mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                        children: "Confirmar"
                    })]
                })]
            })]
        }), F === !0 && o.jsxs("div", {
            className: "mb-6 p-4 border border-gray-200 rounded-lg",
            children: [o.jsx("h3", {
                className: "text-lg font-semibold mb-4",
                children: "Inserção Manual de Área"
            }), o.jsxs("div", {
                className: "mb-4",
                children: [o.jsx("label", {
                    htmlFor: "areaManual",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "Digite a maior área de flexão em cm²:"
                }), o.jsx("input", {
                    type: "text",
                    id: "areaManual",
                    value: j,
                    onChange: vr,
                    placeholder: "Ex: 10.5",
                    className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${Mt?"border-red-500":"border-gray-300"}`,
                    required: !0
                }), Mt && o.jsx("p", {
                    className: "mt-1 text-sm text-red-600",
                    children: Mt
                })]
            }), j && !Mt && o.jsxs("div", {
                className: "p-4 bg-green-50 rounded-md mb-4",
                children: [o.jsx("h4", {
                    className: "font-medium text-green-800 mb-2",
                    children: "Informação sobre Área de Flexão:"
                }), o.jsxs("p", {
                    className: "text-green-700",
                    children: [o.jsx("strong", {
                        children: "Área inserida:"
                    }), " ", ge(parseFloat(j)), " cm²"]
                }), o.jsxs("p", {
                    className: "mt-1 text-green-700",
                    children: [o.jsx("strong", {
                        children: "Vrdc:"
                    }), " ", ge(bt(parseFloat(j))), " KN"]
                })]
            }), M.length === 0 && o.jsxs("div", {
                children: [o.jsx("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "Ângulo das Bielas de Compressão"
                }), o.jsxs("div", {
                    className: "mb-4 p-4 bg-gray-50 rounded-md",
                    children: [o.jsx("p", {
                        className: "mb-2",
                        children: "Tem algum ângulo em específico para as bielas de compressão?"
                    }), o.jsxs("div", {
                        className: "flex space-x-4",
                        children: [o.jsxs("label", {
                            className: "inline-flex items-center",
                            children: [o.jsx("input", {
                                type: "radio",
                                name: "temAnguloEspecifico",
                                value: "sim",
                                checked: E === !0,
                                onChange: gt,
                                className: "form-radio h-4 w-4 text-blue-600"
                            }), o.jsx("span", {
                                className: "ml-2",
                                children: "Sim"
                            })]
                        }), o.jsxs("label", {
                            className: "inline-flex items-center",
                            children: [o.jsx("input", {
                                type: "radio",
                                name: "temAnguloEspecifico",
                                value: "nao",
                                checked: E === !1,
                                onChange: gt,
                                className: "form-radio h-4 w-4 text-blue-600"
                            }), o.jsx("span", {
                                className: "ml-2",
                                children: "Não"
                            })]
                        })]
                    })]
                }), E === !0 && o.jsxs("div", {
                    className: "mb-4",
                    children: [o.jsxs("div", {
                        className: "mb-4",
                        children: [o.jsx("label", {
                            htmlFor: "numAngulos",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Número de ângulos:"
                        }), o.jsx("input", {
                            type: "text",
                            id: "numAngulos",
                            value: A,
                            onChange: En,
                            placeholder: "Ex: 1",
                            className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${ee?"border-red-500":"border-gray-300"}`,
                            required: !0
                        }), ee && o.jsx("p", {
                            className: "mt-1 text-sm text-red-600",
                            children: ee
                        })]
                    }), _.length > 0 && o.jsx("div", {
                        className: "space-y-4 mb-4",
                        children: _.map((c, p) => o.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [o.jsxs("label", {
                                className: "text-sm font-medium text-gray-700 w-64",
                                children: [p + 1, "º ângulo em graus:"]
                            }), o.jsx("input", {
                                type: "text",
                                value: c,
                                onChange: w => _n(p, w.target.value),
                                placeholder: "Ex: 45",
                                className: `flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${te[p]?"border-red-500":"border-gray-300"}`,
                                required: !0
                            }), te[p] && o.jsx("p", {
                                className: "text-sm text-red-600",
                                children: te[p]
                            })]
                        }, p))
                    }), o.jsx("button", {
                        type: "button",
                        onClick: Tt,
                        className: "bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                        disabled: !A || _.some(c => !c) || ee !== "" || te.some(c => c !== ""),
                        children: "Confirmar Ângulos"
                    })]
                }), E === !1 && o.jsxs("div", {
                    className: "mb-4",
                    children: [o.jsxs("div", {
                        className: "p-4 bg-blue-50 rounded-md",
                        children: [o.jsx("p", {
                            className: "text-blue-800",
                            children: "Será utilizada a cotangente do ângulo como 2 (ângulo ≈ 26.57°)"
                        }), o.jsxs("p", {
                            className: "mt-2 text-blue-700",
                            children: ["Distância efetiva X = ", ge(.9 * (y.alturaUtil / 100) * 2 + y.larguraApoio / 2), " m"]
                        })]
                    }), o.jsx("button", {
                        type: "button",
                        onClick: Tt,
                        className: "mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                        children: "Confirmar"
                    })]
                })]
            })]
        }), F === !1 && M.length === 0 && o.jsxs("div", {
            className: "mb-6",
            children: [o.jsxs("div", {
                className: "p-4 bg-blue-50 rounded-md mb-4",
                children: [o.jsx("h4", {
                    className: "font-medium text-blue-800 mb-2",
                    children: "Informação:"
                }), o.jsx("p", {
                    className: "text-blue-700",
                    children: "Prosseguindo sem verificação da resistência mínima ao corte do betão."
                })]
            }), o.jsx("h3", {
                className: "text-lg font-semibold mb-4",
                children: "Ângulo das Bielas de Compressão"
            }), o.jsxs("div", {
                className: "mb-4 p-4 bg-gray-50 rounded-md",
                children: [o.jsx("p", {
                    className: "mb-2",
                    children: "Tem algum ângulo em específico para as bielas de compressão?"
                }), o.jsxs("div", {
                    className: "flex space-x-4",
                    children: [o.jsxs("label", {
                        className: "inline-flex items-center",
                        children: [o.jsx("input", {
                            type: "radio",
                            name: "temAnguloEspecifico",
                            value: "sim",
                            checked: E === !0,
                            onChange: gt,
                            className: "form-radio h-4 w-4 text-blue-600"
                        }), o.jsx("span", {
                            className: "ml-2",
                            children: "Sim"
                        })]
                    }), o.jsxs("label", {
                        className: "inline-flex items-center",
                        children: [o.jsx("input", {
                            type: "radio",
                            name: "temAnguloEspecifico",
                            value: "nao",
                            checked: E === !1,
                            onChange: gt,
                            className: "form-radio h-4 w-4 text-blue-600"
                        }), o.jsx("span", {
                            className: "ml-2",
                            children: "Não"
                        })]
                    })]
                })]
            }), E === !0 && o.jsxs("div", {
                className: "mb-4",
                children: [o.jsxs("div", {
                    className: "mb-4",
                    children: [o.jsx("label", {
                        htmlFor: "numAngulos",
                        className: "block text-sm font-medium text-gray-700 mb-1",
                        children: "Número de ângulos:"
                    }), o.jsx("input", {
                        type: "text",
                        id: "numAngulos",
                        value: A,
                        onChange: En,
                        placeholder: "Ex: 1",
                        className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${ee?"border-red-500":"border-gray-300"}`,
                        required: !0
                    }), ee && o.jsx("p", {
                        className: "mt-1 text-sm text-red-600",
                        children: ee
                    })]
                }), _.length > 0 && o.jsx("div", {
                    className: "space-y-4 mb-4",
                    children: _.map((c, p) => o.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [o.jsxs("label", {
                            className: "text-sm font-medium text-gray-700 w-64",
                            children: [p + 1, "º ângulo em graus:"]
                        }), o.jsx("input", {
                            type: "text",
                            value: c,
                            onChange: w => _n(p, w.target.value),
                            placeholder: "Ex: 45",
                            className: `flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${te[p]?"border-red-500":"border-gray-300"}`,
                            required: !0
                        }), te[p] && o.jsx("p", {
                            className: "text-sm text-red-600",
                            children: te[p]
                        })]
                    }, p))
                }), o.jsx("button", {
                    type: "button",
                    onClick: Tt,
                    className: "bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                    disabled: !A || _.some(c => !c) || ee !== "" || te.some(c => c !== ""),
                    children: "Confirmar Ângulos"
                })]
            }), E === !1 && o.jsxs("div", {
                className: "mb-4",
                children: [o.jsxs("div", {
                    className: "p-4 bg-blue-50 rounded-md",
                    children: [o.jsx("p", {
                        className: "text-blue-800",
                        children: "Será utilizada a cotangente do ângulo como 2 (ângulo ≈ 26.57°)"
                    }), o.jsxs("p", {
                        className: "mt-2 text-blue-700",
                        children: ["Distância efetiva X = ", ge(.9 * (y.alturaUtil / 100) * 2 + y.larguraApoio / 2), " m"]
                    })]
                }), o.jsx("button", {
                    type: "button",
                    onClick: Tt,
                    className: "mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                    children: "Confirmar"
                })]
            })]
        }), m > 0 && M.length === 0 && o.jsxs("div", {
            className: "mb-6",
            children: [o.jsxs("div", {
                className: "p-4 bg-green-50 rounded-md mb-4",
                children: [o.jsx("h4", {
                    className: "font-medium text-green-800 mb-2",
                    children: "Informação sobre Área de Flexão:"
                }), o.jsxs("p", {
                    className: "text-green-700",
                    children: [o.jsx("strong", {
                        children: "Maior área:"
                    }), " ", ge(m), " cm²"]
                }), o.jsxs("p", {
                    className: "mt-1 text-green-700",
                    children: [o.jsx("strong", {
                        children: "Vrdc:"
                    }), " ", ge(bt(m)), " KN"]
                })]
            }), o.jsx("h3", {
                className: "text-lg font-semibold mb-4",
                children: "Ângulo das Bielas de Compressão"
            }), o.jsxs("div", {
                className: "mb-4 p-4 bg-gray-50 rounded-md",
                children: [o.jsx("p", {
                    className: "mb-2",
                    children: "Tem algum ângulo em específico para as bielas de compressão?"
                }), o.jsxs("div", {
                    className: "flex space-x-4",
                    children: [o.jsxs("label", {
                        className: "inline-flex items-center",
                        children: [o.jsx("input", {
                            type: "radio",
                            name: "temAnguloEspecifico",
                            value: "sim",
                            checked: E === !0,
                            onChange: gt,
                            className: "form-radio h-4 w-4 text-blue-600"
                        }), o.jsx("span", {
                            className: "ml-2",
                            children: "Sim"
                        })]
                    }), o.jsxs("label", {
                        className: "inline-flex items-center",
                        children: [o.jsx("input", {
                            type: "radio",
                            name: "temAnguloEspecifico",
                            value: "nao",
                            checked: E === !1,
                            onChange: gt,
                            className: "form-radio h-4 w-4 text-blue-600"
                        }), o.jsx("span", {
                            className: "ml-2",
                            children: "Não"
                        })]
                    })]
                })]
            }), E === !0 && o.jsxs("div", {
                className: "mb-4",
                children: [o.jsxs("div", {
                    className: "mb-4",
                    children: [o.jsx("label", {
                        htmlFor: "numAngulos",
                        className: "block text-sm font-medium text-gray-700 mb-1",
                        children: "Número de ângulos:"
                    }), o.jsx("input", {
                        type: "text",
                        id: "numAngulos",
                        value: A,
                        onChange: En,
                        placeholder: "Ex: 1",
                        className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${ee?"border-red-500":"border-gray-300"}`,
                        required: !0
                    }), ee && o.jsx("p", {
                        className: "mt-1 text-sm text-red-600",
                        children: ee
                    })]
                }), _.length > 0 && o.jsx("div", {
                    className: "space-y-4 mb-4",
                    children: _.map((c, p) => o.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [o.jsxs("label", {
                            className: "text-sm font-medium text-gray-700 w-64",
                            children: [p + 1, "º ângulo em graus:"]
                        }), o.jsx("input", {
                            type: "text",
                            value: c,
                            onChange: w => _n(p, w.target.value),
                            placeholder: "Ex: 45",
                            className: `flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${te[p]?"border-red-500":"border-gray-300"}`,
                            required: !0
                        }), te[p] && o.jsx("p", {
                            className: "text-sm text-red-600",
                            children: te[p]
                        })]
                    }, p))
                }), o.jsx("button", {
                    type: "button",
                    onClick: Tt,
                    className: "bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                    disabled: !A || _.some(c => !c) || ee !== "" || te.some(c => c !== ""),
                    children: "Confirmar Ângulos"
                })]
            }), E === !1 && o.jsxs("div", {
                className: "mb-4",
                children: [o.jsxs("div", {
                    className: "p-4 bg-blue-50 rounded-md",
                    children: [o.jsx("p", {
                        className: "text-blue-800",
                        children: "Será utilizada a cotangente do ângulo como 2 (ângulo ≈ 26.57°)"
                    }), o.jsxs("p", {
                        className: "mt-2 text-blue-700",
                        children: ["Distância efetiva X = ", ge(.9 * (y.alturaUtil / 100) * 2 + y.larguraApoio / 2), " m"]
                    })]
                }), o.jsx("button", {
                    type: "button",
                    onClick: Tt,
                    className: "mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                    children: "Confirmar"
                })]
            })]
        }), M.length > 0 && o.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
            children: [o.jsx("div", {
                children: M.map((c, p) => {
                    var w, q, H, oe, we;
                    return o.jsxs("div", {
                        className: "mb-6 p-4 border border-gray-200 rounded-lg",
                        children: [o.jsxs("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: ["Ângulo ", p + 1, ": ", ge(c), "°"]
                        }), o.jsxs("div", {
                            className: "mb-4 p-4 bg-blue-50 rounded-md",
                            children: [o.jsxs("p", {
                                className: "text-blue-800",
                                children: ["Distância efetiva X = ", ge(.9 * (y.alturaUtil / 100) * (1 / Math.tan(c * Math.PI / 180)) + y.larguraApoio / 2), " m"]
                            }), (m > 0 || F === !0 && j && !Mt) && o.jsxs(o.Fragment, {
                                children: [o.jsxs("p", {
                                    className: "mt-2 text-blue-700",
                                    children: [o.jsx("strong", {
                                        children: "Maior área:"
                                    }), " ", ge(F === !0 ? parseFloat(j) : m), " cm²"]
                                }), o.jsxs("p", {
                                    className: "mt-1 text-blue-700",
                                    children: [o.jsx("strong", {
                                        children: "Vrdc:"
                                    }), " ", ge(bt(F === !0 ? parseFloat(j) : m)), " KN"]
                                })]
                            })]
                        }), o.jsxs("div", {
                            className: "mb-4",
                            children: [o.jsx("label", {
                                htmlFor: `numCortantes-${p}`,
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Número de cortantes máximas efetivas (máx. 1000):"
                            }), o.jsx("input", {
                                type: "text",
                                id: `numCortantes-${p}`,
                                value: Y[p] || "",
                                onChange: ye => Wn(p, ye.target.value),
                                placeholder: "Ex: 1",
                                className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${je[p]?"border-red-500":"border-gray-300"}`,
                                required: !0
                            }), je[p] && o.jsx("p", {
                                className: "mt-1 text-sm text-red-600",
                                children: je[p]
                            })]
                        }), ((w = ce[p]) == null ? void 0 : w.length) > 0 && o.jsx("div", {
                            className: "space-y-4 mb-4",
                            children: ce[p].map((ye, ae) => {
                                var rt, Lt, He, rn, Tn;
                                return o.jsxs("div", {
                                    className: "grid grid-cols-1 gap-4",
                                    children: [o.jsxs("div", {
                                        children: [o.jsxs("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: [ae + 1, "ª cortante máxima efetiva majorada (KN):"]
                                        }), o.jsx("input", {
                                            type: "text",
                                            value: ye,
                                            onChange: ln => ll(p, ae, ln.target.value),
                                            placeholder: "Ex: 150",
                                            className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${(rt=De[p])!=null&&rt[ae]?"border-red-500":"border-gray-300"}`,
                                            required: !0
                                        }), ((Lt = De[p]) == null ? void 0 : Lt[ae]) && o.jsx("p", {
                                            className: "mt-1 text-sm text-red-600",
                                            children: De[p][ae]
                                        })]
                                    }), D && o.jsxs("div", {
                                        children: [o.jsxs("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: [ae + 1, "ª Torção máxima efetiva majorada (KN.m):"]
                                        }), o.jsx("input", {
                                            type: "text",
                                            value: ((He = de[p]) == null ? void 0 : He[ae]) || "",
                                            onChange: ln => Mn(p, ae, ln.target.value),
                                            placeholder: "Ex: 50",
                                            className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${(rn=vt[p])!=null&&rn[ae]?"border-red-500":"border-gray-300"}`,
                                            required: !0
                                        }), ((Tn = vt[p]) == null ? void 0 : Tn[ae]) && o.jsx("p", {
                                            className: "mt-1 text-sm text-red-600",
                                            children: vt[p][ae]
                                        })]
                                    })]
                                }, ae)
                            })
                        }), o.jsx("button", {
                            type: "button",
                            onClick: () => Nr(p),
                            className: "bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                            disabled: !Y[p] || ((q = ce[p]) == null ? void 0 : q.some(ye => !ye)) || je[p] !== "" || ((H = De[p]) == null ? void 0 : H.some(ye => ye !== "")) || D && ((oe = de[p]) == null ? void 0 : oe.some(ye => ye === "")) || D && ((we = vt[p]) == null ? void 0 : we.some(ye => ye !== "")),
                            children: "Calcular Armadura Distribuída"
                        })]
                    }, p)
                })
            }), o.jsx("div", {
                children: o.jsxs("div", {
                    className: "mb-6 p-4 border border-gray-200 rounded-lg",
                    children: [o.jsx("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "Armadura longitudinal adicional no apoio"
                    }), o.jsxs("div", {
                        className: "mb-4",
                        children: [o.jsx("label", {
                            htmlFor: "numReacoes",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Há quantas reações de apoios na vertical consideráveis?"
                        }), o.jsx("input", {
                            type: "text",
                            id: "numReacoes",
                            value: _e,
                            onChange: Pn,
                            placeholder: "Ex: 1",
                            className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${Wt?"border-red-500":"border-gray-300"}`,
                            required: !0
                        }), Wt && o.jsx("p", {
                            className: "mt-1 text-sm text-red-600",
                            children: Wt
                        })]
                    }), fe.length > 0 && o.jsx("div", {
                        className: "space-y-4 mb-4",
                        children: fe.map((c, p) => o.jsxs("div", {
                            className: "p-4 border border-gray-200 rounded-lg",
                            children: [o.jsxs("div", {
                                className: "grid grid-cols-1 gap-4 mb-4",
                                children: [o.jsxs("div", {
                                    children: [o.jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: [p + 1, "º valor da reação majorada em KN:"]
                                    }), o.jsx("input", {
                                        type: "text",
                                        value: c,
                                        onChange: w => ms(p, w.target.value),
                                        placeholder: "Ex: 300",
                                        className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${Et[p]?"border-red-500":"border-gray-300"}`,
                                        required: !0
                                    }), Et[p] && o.jsx("p", {
                                        className: "mt-1 text-sm text-red-600",
                                        children: Et[p]
                                    })]
                                }), D && o.jsxs("div", {
                                    children: [o.jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: [p + 1, "º valor de Torção majorado correspondente em KN.m:"]
                                    }), o.jsx("input", {
                                        type: "text",
                                        value: se[p] || "",
                                        onChange: w => sl(p, w.target.value),
                                        placeholder: "Ex: 70",
                                        className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${_t[p]?"border-red-500":"border-gray-300"}`,
                                        required: !0
                                    }), _t[p] && o.jsx("p", {
                                        className: "mt-1 text-sm text-red-600",
                                        children: _t[p]
                                    })]
                                })]
                            }), o.jsxs("div", {
                                className: "mb-4 p-4 bg-gray-50 rounded-md",
                                children: [o.jsx("p", {
                                    className: "mb-2",
                                    children: "Considerar a largura do apoio? (s/n)"
                                }), o.jsxs("div", {
                                    className: "flex space-x-4",
                                    children: [o.jsxs("label", {
                                        className: "inline-flex items-center",
                                        children: [o.jsx("input", {
                                            type: "radio",
                                            name: `considerarLargura-${p}`,
                                            value: "sim",
                                            checked: Ae[p],
                                            onChange: () => gr(p, !0),
                                            className: "form-radio h-4 w-4 text-blue-600"
                                        }), o.jsx("span", {
                                            className: "ml-2",
                                            children: "Sim"
                                        })]
                                    }), o.jsxs("label", {
                                        className: "inline-flex items-center",
                                        children: [o.jsx("input", {
                                            type: "radio",
                                            name: `considerarLargura-${p}`,
                                            value: "nao",
                                            checked: !Ae[p],
                                            onChange: () => gr(p, !1),
                                            className: "form-radio h-4 w-4 text-blue-600"
                                        }), o.jsx("span", {
                                            className: "ml-2",
                                            children: "Não"
                                        })]
                                    })]
                                })]
                            })]
                        }, p))
                    }), o.jsxs("div", {
                        className: "mb-4 p-4 bg-blue-50 rounded-md",
                        children: [o.jsx("h3", {
                            className: "font-medium text-blue-800 mb-2",
                            children: "Parâmetros para Sugestões de Bitolas:"
                        }), o.jsxs("div", {
                            className: "grid grid-cols-3 gap-4",
                            children: [o.jsxs("div", {
                                children: [o.jsx("label", {
                                    htmlFor: "diametroMinimoAdicional",
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Diâmetro Mínimo (mm):"
                                }), o.jsx("select", {
                                    id: "diametroMinimoAdicional",
                                    value: x.diametroMinimo,
                                    onChange: c => yr("diametroMinimo", parseInt(c.target.value)),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    children: U.map(c => o.jsxs("option", {
                                        value: c,
                                        children: [c, " mm"]
                                    }, c))
                                })]
                            }), o.jsxs("div", {
                                children: [o.jsx("label", {
                                    htmlFor: "diametroMaximoAdicional",
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Diâmetro Máximo (mm):"
                                }), o.jsx("select", {
                                    id: "diametroMaximoAdicional",
                                    value: x.diametroMaximo,
                                    onChange: c => yr("diametroMaximo", parseInt(c.target.value)),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    children: U.map(c => o.jsxs("option", {
                                        value: c,
                                        children: [c, " mm"]
                                    }, c))
                                })]
                            }), o.jsxs("div", {
                                children: [o.jsx("label", {
                                    htmlFor: "limiteDesperdicioAdicional",
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Limite de Desperdício (%):"
                                }), o.jsx("input", {
                                    type: "text",
                                    id: "limiteDesperdicioAdicional",
                                    value: x.limiteDesperdicio === 0 ? "" : x.limiteDesperdicio,
                                    onChange: xr,
                                    placeholder: "Ex: 35",
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                })]
                            })]
                        })]
                    }), o.jsx("button", {
                        type: "button",
                        onClick: jr,
                        className: "bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors",
                        disabled: !_e || fe.some(c => !c) || Wt !== "" || Et.some(c => c !== "") || D && se.some(c => c === "") || D && _t.some(c => c !== "") || z.length === 0,
                        children: "Calcular Armadura Adicional"
                    })]
                })
           })]
        }), z.length > 0 && o.jsxs("div", {
            className: "mb-6",
            children: [o.jsx("h3", {
                className: "text-xl font-bold mb-4",
                children: "Resultados da Armadura Distribuída:"
            }), o.jsx("div", {
                className: "space-y-6",
                children: z.map((c, p) => o.jsxs("div", {
                    className: "p-4 border border-gray-200 rounded-lg",
                    children: [o.jsxs("h4", {
                        className: "text-lg font-semibold mb-2",
                        children: ["Ângulo ", p + 1, ": ", ge(M[p]), "°"]
                    }), o.jsxs("div", {
                        className: "mb-4 p-4 bg-gray-50 rounded-md",
                        children: [o.jsx("h5", {
                            className: "font-medium mb-2",
                            children: "Verificação da Tensão máxima de compressão nas bielas"
                        }), c.tensaoOk ? o.jsx("p", {
                            className: "text-green-600",
                            children: "Todas as Tensões de compressão de cálculo obedecem a tensão máxima ⇒ Tá OK!"
                        }) : o.jsxs("div", {
                            children: [o.jsx("p", {
                                className: "text-red-600",
                                children: "A Tensão de compressão de cálculo é maior que a tensão máxima ⇒ Situação não favorável."
                            }), o.jsx("p", {
                                className: "mt-2 font-medium",
                                children: "Possíveis Soluções:"
                            }), o.jsxs("ul", {
                                className: "list-disc list-inside",
                                children: [o.jsx("li", {
                                    children: "Mudar o tamanho da secção."
                                }), o.jsx("li", {
                                    children: "Mudar a classe do betão."
                                })]
                            })]
                        })]
                    }), c.tensaoOk && o.jsx("div", {
                        className: "space-y-4",
                        children: c.cortantes.map((w, q) => o.jsxs("div", {
                            className: "p-4 border border-gray-200 rounded-lg",
                            children: [o.jsxs("h5", {
                                className: "font-semibold mb-2",
                                children: ["Cortante ", q + 1, ": ", ge(w.valor), " KN", w.torcao !== void 0 && ` + Torção: ${ge(w.torcao)} KN.m`]
                            }), D ? o.jsxs("div", {
                                children: [(m > 0 || F === !0 && j) && w.valor <= c.vrdc && (w.torcao === void 0 || w.torcao <= (c.trdc || 0)) ? o.jsxs("p", {
                                    className: "mb-2",
                                    children: ["Área mínima para cortante ", ge(w.valor), " KN", w.torcao !== void 0 && ` + torção ${ge(w.torcao)} KN.m`, ": ", ge(w.areaTotal || 0), " cm²"]
                                }) : o.jsxs("p", {
                                    className: "mb-2",
                                    children: ["Área requerida para cortante ", ge(w.valor), " KN", w.torcao !== void 0 && ` + torção ${ge(w.torcao)} KN.m`, ": ", ge(w.areaTotal || 0), " cm²"]
                                }), Qn(w.sugestoes)]
                            }) : o.jsxs("div", {
                                children: [(m > 0 || F === !0 && j) && w.valor <= c.vrdc ? o.jsxs("p", {
                                    className: "mb-2",
                                    children: ["Área mínima para cortante ", ge(w.valor), " KN: ", ge(w.area), " cm²"]
                                }) : o.jsxs("p", {
                                    className: "mb-2",
                                    children: ["Área requerida para cortante ", ge(w.valor), " KN: ", ge(w.area), " cm²"]
                                }), Qn(w.sugestoes)]
                            })]
                        }, q))
                    })]
                }, p))
            })]
        }), Q.length > 0 && o.jsxs("div", {
            className: "mb-6",
            children: [o.jsx("h3", {
                className: "text-xl font-bold mb-4",
                children: "Resultados da Armadura Adicional:"
            }), o.jsx("div", {
                className: "space-y-6",
                children: Q.map((c, p) => o.jsxs("div", {
                    className: "p-4 border border-gray-200 rounded-lg",
                    children: [o.jsxs("h4", {
                        className: "font-semibold mb-2",
                        children: ["Reação ", p + 1, ": ", ge(c.reacao), " KN", c.torcao !== void 0 && ` + Torção: ${ge(c.torcao)} KN.m`]
                    }), !c.consideraLargura && o.jsx("p", {
                        className: "mb-2 text-gray-600",
                        children: "Apenas considerando apoio pontual (largura do apoio = 0)."
                    }), D ? o.jsxs("div", {
                        className: "space-y-4",
                        children: [o.jsxs("div", {
                            children: [o.jsxs("h5", {
                                className: "font-medium mb-2",
                                children: ["Área da armadura longitudinal adicional (+Torção) para a face Inferior: ", ge(c.areaFaceInferior || 0), " cm²"]
                            }), c.sugestoesFaceInferior && nn(c.sugestoesFaceInferior)]
                        }), o.jsxs("div", {
                            children: [o.jsxs("h5", {
                                className: "font-medium mb-2",
                                children: ["Área da armadura longitudinal adicional (+Torção) para a face Superior: ", ge(c.areaFaceSuperior || 0), " cm²"]
                            }), c.sugestoesFaceSuperior && nn(c.sugestoesFaceSuperior)]
                        }), o.jsxs("div", {
                            children: [o.jsxs("h5", {
                                className: "font-medium mb-2",
                                children: ["Área da armadura longitudinal adicional (+Torção) para as faces laterais: ", ge(c.areaFacesLaterais || 0), " cm²"]
                            }), c.sugestoesFacesLaterais && nn(c.sugestoesFacesLaterais)]
                        })]
                    }) : o.jsxs("div", {
                        children: [o.jsxs("h5", {
                            className: "font-medium mb-2",
                            children: ["Área da armadura longitudinal adicional: ", ge(c.area), " cm²"]
                        }), nn(c.sugestoes)]
                    })]
                }, p))
            })]
        }), o.jsx("div", {
            className: "flex justify-between",
            children: o.jsx("button", {
                onClick: R,
                className: "bg-gray-300 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-400 transition-colors",
                children: "Voltar ao Menu"
            })
        }), o.jsx("div", {
            className: "mt-4 text-xs text-center text-gray-500",
            children: o.jsx("p", {
                children: "© UTALE"
            })
        })]
    })
}

function Jd({
    activeTab: N,
    setActiveTab: y,
    parametrosViga: m,
    setParametrosViga: D,
    parametrosSecao: R,
    setParametrosSecao: E,
    maiorAreaFlexao: V,
    setMaiorAreaFlexao: A,
    temTorcao: B,
    setTemTorcao: _,
    tipoELU: T,
    setTipoELU: M
}) {
    const L = de => {
            D(de), y(1)
        },
        O = de => {
            E(de), y(2)
        },
        ue = de => {
            M(de), y(3)
        },
        Y = () => {
            y(2)
        },
        Z = de => {
            de > V && A(de)
        },
        ce = de => {
            _(de)
        },
        he = () => {
            M("transverso"), y(3)
        };
    return o.jsxs("div", {
        className: "container mx-auto",
        children: [o.jsx("div", {
            className: "flex justify-center mb-6",
            children: o.jsxs("div", {
                className: "flex space-x-1 bg-gray-200 p-1 rounded-lg",
                children: [o.jsx("button", {
                    onClick: () => y(0),
                    className: `px-4 py-2 rounded-md transition-colors ${N===0?"bg-white text-blue-600 shadow-sm":"text-gray-600 hover:bg-gray-300"}`,
                    children: "Características"
                }), o.jsx("button", {
                    onClick: () => m && y(1),
                    className: `px-4 py-2 rounded-md transition-colors ${N===1?"bg-white text-blue-600 shadow-sm":m?"text-gray-600 hover:bg-gray-300":"text-gray-400 cursor-not-allowed"}`,
                    disabled: !m,
                    children: "Parâmetros"
                }), o.jsx("button", {
                    onClick: () => R && y(2),
                    className: `px-4 py-2 rounded-md transition-colors ${N===2?"bg-white text-blue-600 shadow-sm":R?"text-gray-600 hover:bg-gray-300":"text-gray-400 cursor-not-allowed"}`,
                    disabled: !R,
                    children: "Menu ELU"
                }), o.jsx("button", {
                    onClick: () => T && y(3),
                    className: `px-4 py-2 rounded-md transition-colors ${N===3?"bg-white text-blue-600 shadow-sm":T?"text-gray-600 hover:bg-gray-300":"text-gray-400 cursor-not-allowed"}`,
                    disabled: !T,
                    children: "Cálculos"
                })]
            })
        }), o.jsxs("div", {
            className: "bg-white rounded-lg shadow-md p-6",
            children: [N === 0 && o.jsx(Wd, {
                onNext: L
            }), N === 1 && o.jsx(Qd, {
                onNext: O
            }), N === 2 && m && R && o.jsx(qd, {
                parametrosViga: m,
                parametrosSecao: R,
                onSelectELU: ue,
                onVoltar: () => y(1),
                onTemTorcao: ce
            }), N === 3 && m && R && T === "flexao" && o.jsx(Kd, {
                parametrosViga: m,
                parametrosSecao: R,
                onMaiorArea: Z,
                onVoltar: Y,
                onSeguirParaTransverso: he
            }), N === 3 && m && R && T === "transverso" && o.jsx(Zd, {
                parametrosViga: m,
                parametrosSecao: R,
                maiorAreaFlexao: V,
                temTorcao: B,
                onVoltar: Y
            })]
        })]
    })
}

function ef() {
    const [N, y] = G.useState(0), [m, D] = G.useState(null), [R, E] = G.useState(null), [V, A] = G.useState(0), [B, _] = G.useState(!1), [T, M] = G.useState(null);
    return o.jsxs("div", {
        className: "min-h-screen bg-gray-100 py-8 px-4",
        children: [o.jsx("header", {
            className: "mb-8",
            children: o.jsx("h1", {
                className: "text-3xl font-bold text-center text-blue-800",
                children: "Cálculo de Betão - ELU de Flexão e Transverso"
            })
        }), o.jsx("main", {
            children: o.jsx(Jd, {
                activeTab: N,
                setActiveTab: y,
                parametrosViga: m,
                setParametrosViga: D,
                parametrosSecao: R,
                setParametrosSecao: E,
                maiorAreaFlexao: V,
                setMaiorAreaFlexao: A,
                temTorcao: B,
                setTemTorcao: _,
                tipoELU: T,
                setTipoELU: M
            })
        }), o.jsx("footer", {
            className: "mt-8 text-center text-gray-500 text-sm",
            children: o.jsx("p", {
                children: "© UTALE 2025"
            })
        })]
    })
}
Vd.createRoot(document.getElementById("root")).render(o.jsx(G.StrictMode, {
    children: o.jsx(ef, {})
}));