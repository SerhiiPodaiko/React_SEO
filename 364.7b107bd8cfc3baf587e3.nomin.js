"use strict";
(self["webpackChunkproxy_seller_test_task_seo"] = self["webpackChunkproxy_seller_test_task_seo"] || []).push([[364],{

/***/ 243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(861);

var _baseUrl = 'https://jsonplaceholder.typicode.com/';
var API = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
  baseURL: "".concat((_baseUrl || '').replace(/\/$/, '')),
  headers: {
    'Content-Type': 'application/json'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);

/***/ }),

/***/ 364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Users_UsersPage)
});

// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(593);
;// CONCATENATED MODULE: ./src/components/Users/Users.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Users_module = ({"users":"OjZrL82WkVNP_eM5mTEm","title":"SgMdknyx0aKUATn23LS_","column":"ROGq3778wVqcaR9gwO7s","fullName":"e3GHe1kfRqPIPvzVs8Sd","emailTitle":"EEe9z4mxHYOOTTtNu3tQ","email":"buUNJqX5JSg1sOgvkASA"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./src/lib/API.js
var API = __webpack_require__(243);
;// CONCATENATED MODULE: ./src/lib/users/fetchGetAllUsers.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchGetAllUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", API/* default */.Z.get("/users?q=".concat(query)).then(function (response) {
            console.log('fetchGetAllUsers SUCCESSFUL', response);
            return response.data;
          })["catch"](function (error) {
            console.log('getAllProducts ERROR', error);
            throw new Error(error);
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchGetAllUsers(_x) {
    return _ref.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ./src/hooks/users/useUsers.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var sortUsers = function sortUsers(users, searchQuery, sortOrder) {
  if (!searchQuery && sortOrder !== 'desc') {
    return users;
  }
  var filtered = users.filter(function (user) {
    return user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.username.toLowerCase().includes(searchQuery.toLowerCase());
  });
  if (sortOrder === 'asc') {
    filtered.sort(function (a, b) {
      return a.username.localeCompare(b.username);
    });
  } else if (sortOrder === 'desc') {
    filtered.sort(function (a, b) {
      return b.username.localeCompare(a.username);
    });
  }
  return filtered;
};
var useUsers = function useUsers() {
  var _useState = (0,react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    users = _useState2[0],
    setUsers = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchQuery = _useState4[0],
    setSearchQuery = _useState4[1];
  var _useState5 = (0,react.useState)('ask'),
    _useState6 = _slicedToArray(_useState5, 2),
    sortOrder = _useState6[0],
    setSortOrder = _useState6[1];
  var _useState7 = (0,react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    filteredUsers = _useState8[0],
    setFilteredUsers = _useState8[1];
  (0,react.useEffect)(function () {
    fetchGetAllUsers('').then(function (data) {
      return setUsers(data);
    });
  }, []);
  (0,react.useEffect)(function () {
    var filtered = sortUsers(users, searchQuery, sortOrder);
    var debaunce = setTimeout(function () {
      return setFilteredUsers(filtered);
    }, 300);
    return function () {
      return clearTimeout(debaunce);
    };
  }, [searchQuery, sortOrder, users]);
  return {
    users: users,
    filteredUsers: filteredUsers,
    searchQuery: searchQuery,
    setSearchQuery: setSearchQuery,
    sortOrder: sortOrder,
    setSortOrder: setSortOrder
  };
};
/* harmony default export */ const users_useUsers = (useUsers);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/Search/Search.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Search_module = ({"searchInput":"FzsyyeKe0_EkTbC4hHzg"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
;// CONCATENATED MODULE: ./src/components/Search/Search.jsx



var Search = function Search(_ref) {
  var searchQuery = _ref.searchQuery,
    setSearchQuery = _ref.setSearchQuery;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("section", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
      value: searchQuery,
      onChange: function onChange(e) {
        return setSearchQuery(e.target.value);
      },
      className: classnames_default()('p-2', Search_module.searchInput),
      placeholder: "Seacrh username or name"
    })
  });
};
/* harmony default export */ const Search_Search = (Search);
;// CONCATENATED MODULE: ./src/components/Sort/Sort.jsx


var Sort = function Sort(_ref) {
  var sortOrder = _ref.sortOrder,
    setSortOrder = _ref.setSortOrder;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("select", {
    className: "form-select",
    value: sortOrder,
    onChange: function onChange(e) {
      return setSortOrder(e.target.value);
    },
    "aria-label": "Default select example",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("option", {
      value: "asc",
      children: "ASC (username)"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
      value: "desc",
      children: "DESC (username)"
    })]
  });
};
/* harmony default export */ const Sort_Sort = (Sort);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(655);
// EXTERNAL MODULE: ./src/constants/pages.js
var pages = __webpack_require__(348);
;// CONCATENATED MODULE: ./src/components/Users/User.jsx






var User = function User(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: 'col-lg-4 col-xxl-3 col-md-6 col-12 col my-2 ml-1 mr-1',
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()('p-3 rounded', Users_module.column),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        className: Users_module.fullName,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: "First name:"
          }), " ", user.name]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: "Last name:"
          }), " ", user.username]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        className: "d-flex flex-column",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: Users_module.emailTitle,
          children: "Email:"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: Users_module.email,
          children: user.email
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex align-items-center justify-content-between",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.rU, {
          to: "".concat(pages/* PAGE_SLUGS */.k.user, "/").concat(user.id, "/posts"),
          state: {
            id: user.id
          },
          className: "btn btn-outline-primary",
          children: "Posts"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.rU, {
          to: "".concat(pages/* PAGE_SLUGS */.k.user, "/").concat(user.id, "/albums"),
          state: {
            id: user.id
          },
          className: "btn btn-outline-primary",
          children: "Albums"
        })]
      })]
    })
  }, user.id);
};
/* harmony default export */ const Users_User = (User);
// EXTERNAL MODULE: ./src/ui/Preloader/Preloader.jsx
var Preloader = __webpack_require__(551);
// EXTERNAL MODULE: ./src/ui/Alert/Alert.jsx
var Alert = __webpack_require__(472);
;// CONCATENATED MODULE: ./src/components/Users/Users.js









var Users = function Users() {
  var _useUsers = users_useUsers(),
    users = _useUsers.users,
    filteredUsers = _useUsers.filteredUsers,
    searchQuery = _useUsers.searchQuery,
    setSearchQuery = _useUsers.setSearchQuery,
    sortOrder = _useUsers.sortOrder,
    setSortOrder = _useUsers.setSortOrder;
  if (users.length === 0) return /*#__PURE__*/(0,jsx_runtime.jsx)(Preloader/* default */.Z, {});
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
    className: Users_module.users,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("header", {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "container d-flex flex-column flex-md-row align-items-md-center align-items-start justify-content-between",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("h4", {
          className: Users_module.title,
          children: ["Users: ", filteredUsers.length]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "d-flex flex-column flex-sm-row align-self-stretch align-self-md-start align-items-center gap-2",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Sort_Sort, {
            sortOrder: sortOrder,
            setSortOrder: setSortOrder
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Search_Search, {
            searchQuery: searchQuery,
            setSearchQuery: setSearchQuery
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "container pt-3",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "row",
        children: filteredUsers.length === 0 && searchQuery ? /*#__PURE__*/(0,jsx_runtime.jsx)(Alert/* default */.Z, {
          children: "No users found!"
        }) : filteredUsers === null || filteredUsers === void 0 ? void 0 : filteredUsers.map(function (user) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Users_User, {
            user: user
          }, user.id);
        })
      })
    })]
  });
};
/* harmony default export */ const Users_Users = (Users);
// EXTERNAL MODULE: ./src/assets/favicons/favicon-home.png
var favicon_home = __webpack_require__(645);
;// CONCATENATED MODULE: ./src/pages/Users/UsersPage.jsx






var UsersPage = function UsersPage() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Helmet/* Helmet */.q, {
      title: "Home | Users",
      meta: [{
        'name': 'description',
        'content': 'All users'
      }],
      link: [{
        'rel': 'icon',
        'href': favicon_home/* default */.Z
      }, {
        'rel': 'icon',
        'sizes': '32x32',
        'href': favicon_home/* default */.Z
      }]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Users_Users, {})]
  });
};
/* harmony default export */ const Users_UsersPage = (UsersPage);

/***/ }),

/***/ 472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["children", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Alert = function Alert(_ref) {
  var children = _ref.children,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", _objectSpread(_objectSpread({
    className: "my-2 alert alert-warning text-center",
    role: "alert"
  }, props), {}, {
    children: children
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ }),

/***/ 645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "62864931a663e3f36c28fab8b237219b.png");

/***/ })

}]);