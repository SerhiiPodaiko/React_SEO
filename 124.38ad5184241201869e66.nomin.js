"use strict";
(self["webpackChunkproxy_seller_test_task_seo"] = self["webpackChunkproxy_seller_test_task_seo"] || []).push([[124],{

/***/ 124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Settings_SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(593);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(655);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/Settings/Settings.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Settings_module = ({"settings":"AbaWFnfwItP36q2gdULK","settingsTitle":"ejVPRLtKweACeDxbvqPz","settingsHead":"x21siphHNKf0plzlyf78"});
// EXTERNAL MODULE: ./src/constants/pages.js
var pages = __webpack_require__(348);
;// CONCATENATED MODULE: ./src/assets/images/desktop-full-dark.jpg
/* harmony default export */ const desktop_full_dark = (__webpack_require__.p + "793214be50d727634d8a9ccf492292bd.jpg");
;// CONCATENATED MODULE: ./src/assets/images/desktop-short-light.jpg
/* harmony default export */ const desktop_short_light = (__webpack_require__.p + "e30bc50fbbce76aa81b3f44f081936d6.jpg");
;// CONCATENATED MODULE: ./src/assets/images/laptop-dark.jpg
/* harmony default export */ const laptop_dark = (__webpack_require__.p + "a4987c6e809f46a92d0d90c0d45833db.jpg");
;// CONCATENATED MODULE: ./src/assets/images/laptop-light.jpg
/* harmony default export */ const laptop_light = (__webpack_require__.p + "8e0de0629ed6cd7dcd382849bc9770ac.jpg");
;// CONCATENATED MODULE: ./src/assets/images/mobile-dark.jpg
/* harmony default export */ const mobile_dark = (__webpack_require__.p + "a482cad89e8c9f312d2323415ec782d3.jpg");
;// CONCATENATED MODULE: ./src/assets/images/mobile-light.jpg
/* harmony default export */ const mobile_light = (__webpack_require__.p + "5fea2075d7755132a7a8a8a7ed7717d0.jpg");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
;// CONCATENATED MODULE: ./src/components/Settings/Settings.jsx












var Settings = function Settings() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("section", {
    className: classnames_default()('p-2', Settings_module.settings),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
        className: "d-flex flex-column gap-2",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.rU, {
          to: pages/* PAGE_SLUGS */.k.home,
          className: "d-flex align-self-start btn btn-outline-primary",
          children: "Back to home"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
          className: classnames_default()('mb-4', Settings_module.settingsTitle),
          children: "Settings"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "col-12",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
            className: Settings_module.settingsHead,
            children: "Desktop version"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "pt-3 border rounded position-relative",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "col-12 col-md-6",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  className: "img-fluid",
                  src: desktop_full_dark,
                  alt: "Desktop Full Dark"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "col-12 col-md-6 mt-4 mt-md-0",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  className: "img-fluid",
                  src: desktop_short_light,
                  alt: "Desktop Short Light"
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {
          className: "border-3 my-4"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "col-12",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
            className: Settings_module.settingsHead,
            children: "Laptop version"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "pt-3 border rounded position-relative",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "col-12 col-md-6",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  className: "img-fluid",
                  src: laptop_dark,
                  alt: "Laptop Full"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "col-12 col-md-6 mt-4 mt-md-0",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  className: "img-fluid",
                  src: laptop_light,
                  alt: "Laptop Short"
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {
          className: "border-3 my-4"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "col-12",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
            className: Settings_module.settingsHead,
            children: "Mobile version"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "pt-3 border rounded position-relative",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "col-12 col-md-6 text-center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  className: "img-fluid",
                  src: mobile_dark,
                  alt: "Mobile dark"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "col-12 col-md-6 mt-4 mt-md-0 text-center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  className: "img-fluid",
                  src: mobile_light,
                  alt: "Mobile light"
                })
              })]
            })
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const Settings_Settings = (Settings);
;// CONCATENATED MODULE: ./src/assets/favicons/favicon-settings.png
/* harmony default export */ const favicon_settings = (__webpack_require__.p + "ccaeb05bd96e609cf78a3eb2e7b4b8ac.png");
;// CONCATENATED MODULE: ./src/pages/Settings/SettingsPage.jsx






var SettingsPage = function SettingsPage() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Helmet/* Helmet */.q, {
      title: "Settings",
      meta: [{
        'name': 'description',
        'content': 'Settings, versions website'
      }],
      link: [{
        'rel': 'icon',
        'href': favicon_settings
      }, {
        'rel': 'icon',
        'sizes': '32x32',
        'href': favicon_settings
      }]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Settings_Settings, {})]
  });
};
/* harmony default export */ const Settings_SettingsPage = (SettingsPage);

/***/ })

}]);