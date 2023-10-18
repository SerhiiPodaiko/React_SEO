"use strict";
(self["webpackChunkproxy_seller_test_task_seo"] = self["webpackChunkproxy_seller_test_task_seo"] || []).push([[508],{

/***/ 508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NotFoundPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(250);
// EXTERNAL MODULE: ./src/constants/pages.js
var pages = __webpack_require__(348);
;// CONCATENATED MODULE: ./src/assets/icons/not-found.svg
/* harmony default export */ const not_found = (__webpack_require__.p + "573da0181b41d1e01052b280e5e80d5e.svg");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
;// CONCATENATED MODULE: ./src/pages/404/NotFoundPage.js






var ErrorPage = function ErrorPage() {
  var navigate = (0,dist/* useNavigate */.s0)();
  (0,react.useEffect)(function () {
    var timeout = setTimeout(function () {
      return navigate(pages/* PAGE_SLUGS */.k.home);
    }, 3000);
    return function () {
      return clearTimeout(timeout);
    };
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
    className: "d-flex flex-column p-5 rounded",
    style: {
      background: '#F4DEDE',
      border: '2px solid #DA7987',
      color: '#DA7987'
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      className: "align-self-start btn btn-danger",
      onClick: function onClick() {
        return navigate(pages/* PAGE_SLUGS */.k.home);
      },
      children: "Back to Home"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: not_found,
      className: "w-25 align-self-center img-fluid",
      alt: "Not Found | 404"
    })]
  });
};
/* harmony default export */ const NotFoundPage = (ErrorPage);

/***/ })

}]);