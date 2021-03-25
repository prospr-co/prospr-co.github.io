_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

/***/ "./components/EmailSignup.jsx":
/*!************************************!*\
  !*** ./components/EmailSignup.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmailSignup.module.scss */ "./components/EmailSignup.module.scss");
/* harmony import */ var _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "B:\\workspace\\prospr-landing-page\\components\\EmailSignup.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var validateEmail = function validateEmail(email) {
  return emailRegex.test(String(email).toLowerCase());
};

var EmailSignup = function EmailSignup() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      firstName = _useState2[0],
      setFirstName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      lastName = _useState3[0],
      setLastName = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      organization = _useState4[0],
      setOrganization = _useState4[1];

  var valid = !!(validateEmail(email) && firstName && lastName && organization);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bookDemoForm,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.floatingPanel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        children: "Try Prospr today"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Book a demo with us to learn more."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.formWrapper,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.formContent,
          noValidate: "novalidate",
          action: "https://prospr.us20.list-manage.com/subscribe/post?u=9dab57decf1f403a39802d493&id=f1447540bf",
          method: "post",
          target: "_blank",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fieldRow,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInputHalf,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "mce-FNAME",
                id: "labelFirstName",
                children: "First Name *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "FNAME",
                id: "mce-FNAME",
                placeholder: "Stacy",
                maxLength: 255,
                minLength: 1,
                "aria-labelledby": "labelFirstName",
                "aria-required": "true",
                required: true,
                value: firstName,
                onChange: function onChange(e) {
                  return setFirstName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInputHalf,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "mce-LNAME",
                id: "labelLastName",
                children: "Last Name *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "LNAME",
                id: "mce-LNAME",
                placeholder: "Bartlett",
                maxLength: 255,
                minLength: 1,
                "aria-labelledby": "labelLastName",
                "aria-required": "true",
                required: true,
                value: lastName,
                onChange: function onChange(e) {
                  return setLastName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fieldRow,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInputFull,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "mce-EMAIL",
                id: "labelEmailAddress",
                children: "Email Address *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "email",
                id: "mce-EMAIL",
                name: "EMAIL",
                placeholder: "email@address.com",
                maxLength: 255,
                minLength: 1,
                "aria-labelledby": "labelEmailAddress",
                "aria-required": "true",
                required: true,
                value: email,
                onChange: function onChange(e) {
                  return setEmail(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fieldRow,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInputFull,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "mce-ORG",
                id: "labelOrganizationName",
                children: "Organization Name *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "mce-ORG",
                name: "ORG",
                placeholder: "ACME Inc",
                maxLength: 255,
                minLength: 1,
                "aria-labelledby": "labelOrganizationName",
                "aria-required": "true",
                required: true,
                value: organization,
                onChange: function onChange(e) {
                  return setOrganization(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              position: 'absolute',
              left: -5001
            },
            "aria-hidden": "true",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "b_9dab57decf1f403a39802d493_f1447540bf",
              tabIndex: "-1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('btn', 'btn-primary', !valid && 'btn-disabled'),
            type: "submit",
            disabled: !valid,
            children: "Request a demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(EmailSignup, "AeO+/p4SCMGEVY4RkemSSPdH21k=");

_c = EmailSignup;
/* harmony default export */ __webpack_exports__["default"] = (EmailSignup);

var _c;

$RefreshReg$(_c, "EmailSignup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/EmailSignup.module.scss":
/*!********************************************!*\
  !*** ./components/EmailSignup.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./EmailSignup.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/EmailSignup.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./EmailSignup.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/EmailSignup.module.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./EmailSignup.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/EmailSignup.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/Footer.module.scss */ "./styles/Footer.module.scss");
/* harmony import */ var styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "B:\\workspace\\prospr-landing-page\\components\\Footer.jsx",
    _this = undefined;




var Footer = function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footerContent,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footerLogo,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footerLogoImage,
          src: "/prospr_logo_vector.svg",
          width: 16,
          height: 16,
          alt: "Prospr Logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "Prospr - Designed in Canada."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footerLinks,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.linkedin.com/company/getprospr/",
          children: "LinkedIn"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "mailto:hello@prospr.cc",
          children: "Contact us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=B%3A%5Cworkspace%5Cprospr-landing-page%5Cpages%5Cindex.js!./":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=B%3A%5Cworkspace%5Cprospr-landing-page%5Cpages%5Cindex.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=`${id} ${count}`;idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(key=>{style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?`@media ${obj.media} {${obj.css}}`:obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+=`\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=()=>{removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=(list,options)=>{options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************!*\
  !*** (webpack)/css-loader/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/EmailSignup.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/EmailSignup.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".EmailSignup_btn__1ScSb {\n  transition: background-color 0.3s ease-in-out;\n  border-radius: 6px;\n  min-width: 120px;\n  padding: 16px 24px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 500;\n  color: #fff;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.EmailSignup_btn-large__39pco {\n  border-radius: 8px;\n  padding: 21px 32px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.EmailSignup_btn-primary__2HhjF {\n  background-color: #0070f0;\n}\n.EmailSignup_btn-primary__2HhjF:hover {\n  background-color: #005dd6;\n}\n\n.EmailSignup_btn-disabled__1ztqa {\n  background-color: #f2f2f2;\n  color: #a6a6a6;\n}\n.EmailSignup_btn-disabled__1ztqa:hover {\n  background-color: #f2f2f2;\n}\n\n.EmailSignup_dividerHorizontal__2kLmV {\n  border-radius: 50%;\n  width: 100%;\n  height: 1px;\n  background-color: #e5e5e5;\n}\n\n.EmailSignup_formContent__3sTBZ {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.EmailSignup_formContent__3sTBZ .EmailSignup_fieldRow__6Byn8 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  width: 100%;\n}\n.EmailSignup_formContent__3sTBZ .EmailSignup_fieldRow__6Byn8 .EmailSignup_textInputHalf__1BPQV:first-child {\n  margin-right: 12px;\n}\n.EmailSignup_formContent__3sTBZ .EmailSignup_fieldRow__6Byn8 .EmailSignup_textInputHalf__1BPQV:last-child {\n  margin-left: 12px;\n}\n.EmailSignup_formContent__3sTBZ button {\n  outline: 0;\n  border: 0;\n  width: 100%;\n  max-width: 392px;\n}\n\n.EmailSignup_textInputHalf__1BPQV {\n  max-width: 184px;\n}\n\n.EmailSignup_textInputFull__JCqRK {\n  width: 100%;\n}\n\n.EmailSignup_textInputHalf__1BPQV label,\n.EmailSignup_textInputFull__JCqRK label {\n  color: #666;\n  padding-top: 0;\n  font-size: 14px;\n  line-height: 1.3;\n  font-weight: 500;\n}\n.EmailSignup_textInputHalf__1BPQV input,\n.EmailSignup_textInputFull__JCqRK input {\n  transition: all 0.3s ease-in-out;\n  margin-top: 6px;\n  border: solid 1px #d9d9d9;\n  border-radius: 4px;\n  width: 100%;\n  padding: 10px 16px;\n  font-size: 16px;\n  line-height: 1.25;\n  color: #0d0d0d;\n}\n.EmailSignup_textInputHalf__1BPQV input:hover,\n.EmailSignup_textInputFull__JCqRK input:hover {\n  border-color: #0070f0;\n}\n.EmailSignup_textInputHalf__1BPQV input:focus,\n.EmailSignup_textInputFull__JCqRK input:focus {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(0, 112, 240, 0.2);\n  border-color: #0070f0;\n}\n.EmailSignup_textInputHalf__1BPQV input:-ms-input-placeholder, .EmailSignup_textInputFull__JCqRK input:-ms-input-placeholder {\n  color: #a6a6a6;\n}\n.EmailSignup_textInputHalf__1BPQV input::placeholder,\n.EmailSignup_textInputFull__JCqRK input::placeholder {\n  color: #a6a6a6;\n}\n\n.EmailSignup_bookDemoForm__bXP2f {\n  display: flex;\n  justify-content: center;\n  margin-top: 160px;\n}\n.EmailSignup_bookDemoForm__bXP2f .EmailSignup_floatingPanel__X8p5- {\n  flex-grow: 1;\n  margin: 0 auto;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n  border: solid 1px #d9d9d9;\n  border-radius: 6px;\n  max-width: 100vw;\n  padding: 64px 40px;\n  background-color: #fff;\n}\n.EmailSignup_bookDemoForm__bXP2f .EmailSignup_floatingPanel__X8p5- h5 {\n  margin-top: 0;\n  margin-bottom: 16px;\n  text-align: center;\n  font-size: 28px;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.EmailSignup_bookDemoForm__bXP2f .EmailSignup_floatingPanel__X8p5- p {\n  margin-top: 0;\n  margin-bottom: 24px;\n  text-align: center;\n  color: #666;\n}", "",{"version":3,"sources":["webpack://../styles/buttons.scss","webpack://EmailSignup.module.scss","webpack://../styles/variables.scss","webpack://../styles/components.scss"],"names":[],"mappings":"AAIA;EACE,6CAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;EAEA,yBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,eAAA;ACJF;;ADSA;EACE,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;ACNF;;ADWA;EACE,yBE7Ba;ADqBf;ADUE;EACE,yBE/BQ;ADuBZ;;ADYA;EACE,yBAAA;EACA,cAAA;ACTF;ADWE;EACE,yBAAA;ACTJ;;AE9BA;EACE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,yBAAA;AFiCF;;AAtCA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAyCF;AAvCE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;AAyCJ;AAvCI;EACE,kBAAA;AAyCN;AAtCI;EACE,iBAAA;AAwCN;AApCE;EACE,UAAA;EACA,SAAA;EACA,WAAA;EACA,gBAAA;AAsCJ;;AAlCA;EACE,gBAAA;AAqCF;;AAlCA;EACE,WAAA;AAqCF;;AAhCE;;EACE,WCtCG;EDuCH,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AAoCJ;AAjCE;;EACE,gCAAA;EACA,eAAA;EACA,yBAAA;EACA,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,cCvDI;AD2FR;AAlCI;;EACE,qBC5DS;ADiGf;AAlCI;;EACE,aAAA;EACA,4CAAA;EACA,qBClES;ADuGf;AAlCI;EACE,cAAA;AAqCN;AAtCI;;EACE,cAAA;AAqCN;;AAhCA;EACE,aAAA;EACA,uBAAA;EACA,iBAAA;AAmCF;AAjCE;EACE,YAAA;EACA,cAAA;EACA,0CAAA;EACA,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sBAAA;AAmCJ;AAjCI;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AAmCN;AAhCI;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,WCpGC;ADsIP","sourcesContent":["@import 'index';\n\n// Base\n\n.btn {\n  transition: background-color 0.3s ease-in-out;\n  border-radius: 6px;\n  min-width: 120px;\n  padding: 16px 24px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 500;\n  color: #fff;\n\n  user-select: none;\n  cursor: pointer;\n}\n\n// Size\n\n.btn-large {\n  border-radius: 8px;\n  padding: 21px 32px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n// Primary\n\n.btn-primary {\n  background-color: $primary-blue;\n\n  &:hover {\n    background-color: $dark-blue;\n  }\n}\n\n.btn-disabled {\n  background-color: #f2f2f2;\n  color: #a6a6a6;\n\n  &:hover {\n    background-color: #f2f2f2;\n  }\n}\n",".btn {\n  transition: background-color 0.3s ease-in-out;\n  border-radius: 6px;\n  min-width: 120px;\n  padding: 16px 24px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 500;\n  color: #fff;\n  user-select: none;\n  cursor: pointer;\n}\n\n.btn-large {\n  border-radius: 8px;\n  padding: 21px 32px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.btn-primary {\n  background-color: #0070f0;\n}\n.btn-primary:hover {\n  background-color: #005dd6;\n}\n\n.btn-disabled {\n  background-color: #f2f2f2;\n  color: #a6a6a6;\n}\n.btn-disabled:hover {\n  background-color: #f2f2f2;\n}\n\n.dividerHorizontal {\n  border-radius: 50%;\n  width: 100%;\n  height: 1px;\n  background-color: #e5e5e5;\n}\n\n.formContent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.formContent .fieldRow {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  width: 100%;\n}\n.formContent .fieldRow .textInputHalf:first-child {\n  margin-right: 12px;\n}\n.formContent .fieldRow .textInputHalf:last-child {\n  margin-left: 12px;\n}\n.formContent button {\n  outline: 0;\n  border: 0;\n  width: 100%;\n  max-width: 392px;\n}\n\n.textInputHalf {\n  max-width: 184px;\n}\n\n.textInputFull {\n  width: 100%;\n}\n\n.textInputHalf label,\n.textInputFull label {\n  color: #666;\n  padding-top: 0;\n  font-size: 14px;\n  line-height: 1.3;\n  font-weight: 500;\n}\n.textInputHalf input,\n.textInputFull input {\n  transition: all 0.3s ease-in-out;\n  margin-top: 6px;\n  border: solid 1px #d9d9d9;\n  border-radius: 4px;\n  width: 100%;\n  padding: 10px 16px;\n  font-size: 16px;\n  line-height: 1.25;\n  color: #0d0d0d;\n}\n.textInputHalf input:hover,\n.textInputFull input:hover {\n  border-color: #0070f0;\n}\n.textInputHalf input:focus,\n.textInputFull input:focus {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(0, 112, 240, 0.2);\n  border-color: #0070f0;\n}\n.textInputHalf input::placeholder,\n.textInputFull input::placeholder {\n  color: #a6a6a6;\n}\n\n.bookDemoForm {\n  display: flex;\n  justify-content: center;\n  margin-top: 160px;\n}\n.bookDemoForm .floatingPanel {\n  flex-grow: 1;\n  margin: 0 auto;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n  border: solid 1px #d9d9d9;\n  border-radius: 6px;\n  max-width: 100vw;\n  padding: 64px 40px;\n  background-color: #fff;\n}\n.bookDemoForm .floatingPanel h5 {\n  margin-top: 0;\n  margin-bottom: 16px;\n  text-align: center;\n  font-size: 28px;\n  line-height: 1.3;\n  font-weight: 600;\n}\n.bookDemoForm .floatingPanel p {\n  margin-top: 0;\n  margin-bottom: 24px;\n  text-align: center;\n  color: #666;\n}","$pt-divider-black: rgba(206, 212, 224, 0.8);\n\n$primary-blue: #0070f0;\n$dark-blue: #005dd6;\n$black: #0d0d0d;\n$grey: #666;\n","@import 'buttons';\n\n// Dividers\n\n.dividerHorizontal {\n  border-radius: 50%;\n  width: 100%;\n  height: 1px;\n  background-color: #e5e5e5;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"btn": "EmailSignup_btn__1ScSb",
	"btn-large": "EmailSignup_btn-large__39pco",
	"btn-primary": "EmailSignup_btn-primary__2HhjF",
	"btn-disabled": "EmailSignup_btn-disabled__1ztqa",
	"dividerHorizontal": "EmailSignup_dividerHorizontal__2kLmV",
	"formContent": "EmailSignup_formContent__3sTBZ",
	"fieldRow": "EmailSignup_fieldRow__6Byn8",
	"textInputHalf": "EmailSignup_textInputHalf__1BPQV",
	"textInputFull": "EmailSignup_textInputFull__JCqRK",
	"bookDemoForm": "EmailSignup_bookDemoForm__bXP2f",
	"floatingPanel": "EmailSignup_floatingPanel__X8p5-"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Footer.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/Footer.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Footer_btn__2iPkI {\n  transition: background-color 0.3s ease-in-out;\n  border-radius: 6px;\n  min-width: 120px;\n  padding: 16px 24px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 500;\n  color: #fff;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.Footer_btn-large__8PfjE {\n  border-radius: 8px;\n  padding: 21px 32px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.Footer_btn-primary__11kuj {\n  background-color: #0070f0;\n}\n.Footer_btn-primary__11kuj:hover {\n  background-color: #005dd6;\n}\n\n.Footer_btn-disabled__26VXy {\n  background-color: #f2f2f2;\n  color: #a6a6a6;\n}\n.Footer_btn-disabled__26VXy:hover {\n  background-color: #f2f2f2;\n}\n\n.Footer_dividerHorizontal__1rl1H {\n  border-radius: 50%;\n  width: 100%;\n  height: 1px;\n  background-color: #e5e5e5;\n}\n\n.Footer_footer__1KW17 {\n  width: 100%;\n  border-top: 1px solid rgba(206, 212, 224, 0.8);\n}\n@media (min-width: 1280px) {\n  .Footer_footer__1KW17 {\n    padding: 0 10%;\n  }\n}\n@media (max-width: 1279px) {\n  .Footer_footer__1KW17 {\n    padding: 0 0.5rem;\n  }\n}\n.Footer_footer__1KW17 .Footer_footerContent__36IUS {\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #666;\n}\n@media (max-width: 767px) {\n  .Footer_footer__1KW17 .Footer_footerContent__36IUS {\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n}\n.Footer_footer__1KW17 .Footer_footerContent__36IUS .Footer_footerLogo__1yol0 {\n  display: flex;\n  align-items: center;\n}\n.Footer_footer__1KW17 .Footer_footerContent__36IUS .Footer_footerLogo__1yol0 .Footer_footerLogoImage__27mKe {\n  margin-right: 12px;\n  width: 16px;\n  height: 16px;\n}\n.Footer_footer__1KW17 .Footer_footerLinks__cjn77 a {\n  margin: 0 8px;\n  transition: color 0.2s ease-in-out;\n}\n.Footer_footer__1KW17 .Footer_footerLinks__cjn77 a:hover {\n  color: #0d0d0d;\n}", "",{"version":3,"sources":["webpack://buttons.scss","webpack://Footer.module.scss","webpack://variables.scss","webpack://components.scss","webpack://../node_modules/include-media/dist/_include-media.scss","webpack://mixins.scss"],"names":[],"mappings":"AAIA;EACE,6CAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;EAEA,yBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,eAAA;ACJF;;ADSA;EACE,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;ACNF;;ADWA;EACE,yBE7Ba;ADqBf;ADUE;EACE,yBE/BQ;ADuBZ;;ADYA;EACE,yBAAA;EACA,cAAA;ACTF;ADWE;EACE,yBAAA;ACTJ;;AE9BA;EACE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,yBAAA;AFiCF;;AAtCA;EACE,WAAA;EACA,8CAAA;AAyCF;AGmgBI;EH9iBJ;IICI,cAAA;EJ8CF;AACF;AG8fI;EH9iBJ;IIKI,iBAAA;EJ+CF;AACF;AA/CE;EACE,aAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WCTG;AD0DP;AGkfI;EHxiBF;IAQI,sBAAA;IACA,6BAAA;EAkDJ;AACF;AAhDI;EACE,aAAA;EACA,mBAAA;AAkDN;AAhDM;EACE,kBAAA;EACA,WAAA;EACA,YAAA;AAkDR;AA7CI;EACE,aAAA;EACA,kCAAA;AA+CN;AA7CM;EACE,cClCA;ADiFR","sourcesContent":["@import 'index';\n\n// Base\n\n.btn {\n  transition: background-color 0.3s ease-in-out;\n  border-radius: 6px;\n  min-width: 120px;\n  padding: 16px 24px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 500;\n  color: #fff;\n\n  user-select: none;\n  cursor: pointer;\n}\n\n// Size\n\n.btn-large {\n  border-radius: 8px;\n  padding: 21px 32px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n// Primary\n\n.btn-primary {\n  background-color: $primary-blue;\n\n  &:hover {\n    background-color: $dark-blue;\n  }\n}\n\n.btn-disabled {\n  background-color: #f2f2f2;\n  color: #a6a6a6;\n\n  &:hover {\n    background-color: #f2f2f2;\n  }\n}\n",".btn {\n  transition: background-color 0.3s ease-in-out;\n  border-radius: 6px;\n  min-width: 120px;\n  padding: 16px 24px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 500;\n  color: #fff;\n  user-select: none;\n  cursor: pointer;\n}\n\n.btn-large {\n  border-radius: 8px;\n  padding: 21px 32px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.btn-primary {\n  background-color: #0070f0;\n}\n.btn-primary:hover {\n  background-color: #005dd6;\n}\n\n.btn-disabled {\n  background-color: #f2f2f2;\n  color: #a6a6a6;\n}\n.btn-disabled:hover {\n  background-color: #f2f2f2;\n}\n\n.dividerHorizontal {\n  border-radius: 50%;\n  width: 100%;\n  height: 1px;\n  background-color: #e5e5e5;\n}\n\n.footer {\n  width: 100%;\n  border-top: 1px solid rgba(206, 212, 224, 0.8);\n}\n@media (min-width: 1280px) {\n  .footer {\n    padding: 0 10%;\n  }\n}\n@media (max-width: 1279px) {\n  .footer {\n    padding: 0 0.5rem;\n  }\n}\n.footer .footerContent {\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #666;\n}\n@media (max-width: 767px) {\n  .footer .footerContent {\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n}\n.footer .footerContent .footerLogo {\n  display: flex;\n  align-items: center;\n}\n.footer .footerContent .footerLogo .footerLogoImage {\n  margin-right: 12px;\n  width: 16px;\n  height: 16px;\n}\n.footer .footerLinks a {\n  margin: 0 8px;\n  transition: color 0.2s ease-in-out;\n}\n.footer .footerLinks a:hover {\n  color: #0d0d0d;\n}","$pt-divider-black: rgba(206, 212, 224, 0.8);\n\n$primary-blue: #0070f0;\n$dark-blue: #005dd6;\n$black: #0d0d0d;\n$grey: #666;\n","@import 'buttons';\n\n// Dividers\n\n.dividerHorizontal {\n  border-radius: 50%;\n  width: 100%;\n  height: 1px;\n  background-color: #e5e5e5;\n}\n","@charset \"UTF-8\";\n\n//     _            _           _                           _ _\n//    (_)          | |         | |                         | (_)\n//     _ _ __   ___| |_   _  __| | ___   _ __ ___   ___  __| |_  __ _\n//    | | '_ \\ / __| | | | |/ _` |/ _ \\ | '_ ` _ \\ / _ \\/ _` | |/ _` |\n//    | | | | | (__| | |_| | (_| |  __/ | | | | | |  __/ (_| | | (_| |\n//    |_|_| |_|\\___|_|\\__,_|\\__,_|\\___| |_| |_| |_|\\___|\\__,_|_|\\__,_|\n//\n//      Simple, elegant and maintainable media queries in Sass\n//                        v1.4.9\n//\n//                http://include-media.com\n//\n//         Authors: Eduardo Boucas (@eduardoboucas)\n//                  Hugo Giraudel (@hugogiraudel)\n//\n//      This project is licensed under the terms of the MIT license\n\n\n////\n/// include-media library public configuration\n/// @author Eduardo Boucas\n/// @access public\n////\n\n\n///\n/// Creates a list of global breakpoints\n///\n/// @example scss - Creates a single breakpoint with the label `phone`\n///  $breakpoints: ('phone': 320px);\n///\n$breakpoints: (\n  'phone': 320px,\n  'tablet': 768px,\n  'desktop': 1024px\n) !default;\n\n\n///\n/// Creates a list of static expressions or media types\n///\n/// @example scss - Creates a single media type (screen)\n///  $media-expressions: ('screen': 'screen');\n///\n/// @example scss - Creates a static expression with logical disjunction (OR operator)\n///  $media-expressions: (\n///    'retina2x': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'\n///  );\n///\n$media-expressions: (\n  'screen': 'screen',\n  'print': 'print',\n  'handheld': 'handheld',\n  'landscape': '(orientation: landscape)',\n  'portrait': '(orientation: portrait)',\n  'retina2x': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)',\n  'retina3x': '(-webkit-min-device-pixel-ratio: 3), (min-resolution: 350dpi), (min-resolution: 3dppx)'\n) !default;\n\n\n///\n/// Defines a number to be added or subtracted from each unit when declaring breakpoints with exclusive intervals\n///\n/// @example scss - Interval for pixels is defined as `1` by default\n///  @include media('>128px') {}\n///\n///  /* Generates: */\n///  @media (min-width: 129px) {}\n///\n/// @example scss - Interval for ems is defined as `0.01` by default\n///  @include media('>20em') {}\n///\n///  /* Generates: */\n///  @media (min-width: 20.01em) {}\n///\n/// @example scss - Interval for rems is defined as `0.1` by default, to be used with `font-size: 62.5%;`\n///  @include media('>2.0rem') {}\n///\n///  /* Generates: */\n///  @media (min-width: 2.1rem) {}\n///\n$unit-intervals: (\n  'px': 1,\n  'em': 0.01,\n  'rem': 0.1,\n  '': 0\n) !default;\n\n///\n/// Defines whether support for media queries is available, useful for creating separate stylesheets\n/// for browsers that don't support media queries.\n///\n/// @example scss - Disables support for media queries\n///  $im-media-support: false;\n///  @include media('>=tablet') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* Generates: */\n///  .foo {\n///    color: tomato;\n///  }\n///\n$im-media-support: true !default;\n\n///\n/// Selects which breakpoint to emulate when support for media queries is disabled. Media queries that start at or\n/// intercept the breakpoint will be displayed, any others will be ignored.\n///\n/// @example scss - This media query will show because it intercepts the static breakpoint\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  @include media('>=tablet') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* Generates: */\n///  .foo {\n///    color: tomato;\n///  }\n///\n/// @example scss - This media query will NOT show because it does not intercept the desktop breakpoint\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'tablet';\n///  @include media('>=desktop') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* No output */\n///\n$im-no-media-breakpoint: 'desktop' !default;\n\n///\n/// Selects which media expressions are allowed in an expression for it to be used when media queries\n/// are not supported.\n///\n/// @example scss - This media query will show because it intercepts the static breakpoint and contains only accepted media expressions\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  $im-no-media-expressions: ('screen');\n///  @include media('>=tablet', 'screen') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///   /* Generates: */\n///   .foo {\n///     color: tomato;\n///   }\n///\n/// @example scss - This media query will NOT show because it intercepts the static breakpoint but contains a media expression that is not accepted\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  $im-no-media-expressions: ('screen');\n///  @include media('>=tablet', 'retina2x') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* No output */\n///\n$im-no-media-expressions: ('screen', 'portrait', 'landscape') !default;\n\n////\n/// Cross-engine logging engine\n/// @author Hugo Giraudel\n/// @access private\n////\n\n\n///\n/// Log a message either with `@error` if supported\n/// else with `@warn`, using `feature-exists('at-error')`\n/// to detect support.\n///\n/// @param {String} $message - Message to log\n///\n@function im-log($message) {\n  @if feature-exists('at-error') {\n    @error $message;\n  } @else {\n    @warn $message;\n    $_: noop();\n  }\n\n  @return $message;\n}\n\n\n///\n/// Wrapper mixin for the log function so it can be used with a more friendly\n/// API than `@if im-log('..') {}` or `$_: im-log('..')`. Basically, use the function\n/// within functions because it is not possible to include a mixin in a function\n/// and use the mixin everywhere else because it's much more elegant.\n///\n/// @param {String} $message - Message to log\n///\n@mixin log($message) {\n  @if im-log($message) {}\n}\n\n\n///\n/// Function with no `@return` called next to `@warn` in Sass 3.3\n/// to trigger a compiling error and stop the process.\n///\n@function noop() {}\n\n///\n/// Determines whether a list of conditions is intercepted by the static breakpoint.\n///\n/// @param {Arglist}   $conditions  - Media query conditions\n///\n/// @return {Boolean} - Returns true if the conditions are intercepted by the static breakpoint\n///\n@function im-intercepts-static-breakpoint($conditions...) {\n  $no-media-breakpoint-value: map-get($breakpoints, $im-no-media-breakpoint);\n\n  @if not $no-media-breakpoint-value {\n    @if im-log('`#{$im-no-media-breakpoint}` is not a valid breakpoint.') {}\n  }\n\n  @each $condition in $conditions {\n    @if not map-has-key($media-expressions, $condition) {\n      $operator: get-expression-operator($condition);\n      $prefix: get-expression-prefix($operator);\n      $value: get-expression-value($condition, $operator);\n\n      // scss-lint:disable SpaceAroundOperator\n      @if ($prefix == 'max' and $value <= $no-media-breakpoint-value) or\n          ($prefix == 'min' and $value > $no-media-breakpoint-value) {\n        @return false;\n      }\n    } @else if not index($im-no-media-expressions, $condition) {\n      @return false;\n    }\n  }\n\n  @return true;\n}\n\n////\n/// Parsing engine\n/// @author Hugo Giraudel\n/// @access private\n////\n\n\n///\n/// Get operator of an expression\n///\n/// @param {String} $expression - Expression to extract operator from\n///\n/// @return {String} - Any of `>=`, `>`, `<=`, `<`, `≥`, `≤`\n///\n@function get-expression-operator($expression) {\n  @each $operator in ('>=', '>', '<=', '<', '≥', '≤') {\n    @if str-index($expression, $operator) {\n      @return $operator;\n    }\n  }\n\n  // It is not possible to include a mixin inside a function, so we have to\n  // rely on the `im-log(..)` function rather than the `log(..)` mixin. Because\n  // functions cannot be called anywhere in Sass, we need to hack the call in\n  // a dummy variable, such as `$_`. If anybody ever raise a scoping issue with\n  // Sass 3.3, change this line in `@if im-log(..) {}` instead.\n  $_: im-log('No operator found in `#{$expression}`.');\n}\n\n\n///\n/// Get dimension of an expression, based on a found operator\n///\n/// @param {String} $expression - Expression to extract dimension from\n/// @param {String} $operator - Operator from `$expression`\n///\n/// @return {String} - `width` or `height` (or potentially anything else)\n///\n@function get-expression-dimension($expression, $operator) {\n  $operator-index: str-index($expression, $operator);\n  $parsed-dimension: str-slice($expression, 0, $operator-index - 1);\n  $dimension: 'width';\n\n  @if str-length($parsed-dimension) > 0 {\n    $dimension: $parsed-dimension;\n  }\n\n  @return $dimension;\n}\n\n\n///\n/// Get dimension prefix based on an operator\n///\n/// @param {String} $operator - Operator\n///\n/// @return {String} - `min` or `max`\n///\n@function get-expression-prefix($operator) {\n  @return if(index(('<', '<=', '≤'), $operator), 'max', 'min');\n}\n\n\n///\n/// Get value of an expression, based on a found operator\n///\n/// @param {String} $expression - Expression to extract value from\n/// @param {String} $operator - Operator from `$expression`\n///\n/// @return {Number} - A numeric value\n///\n@function get-expression-value($expression, $operator) {\n  $operator-index: str-index($expression, $operator);\n  $value: str-slice($expression, $operator-index + str-length($operator));\n\n  @if map-has-key($breakpoints, $value) {\n    $value: map-get($breakpoints, $value);\n  } @else {\n    $value: to-number($value);\n  }\n\n  $interval: map-get($unit-intervals, unit($value));\n\n  @if not $interval {\n    // It is not possible to include a mixin inside a function, so we have to\n    // rely on the `im-log(..)` function rather than the `log(..)` mixin. Because\n    // functions cannot be called anywhere in Sass, we need to hack the call in\n    // a dummy variable, such as `$_`. If anybody ever raise a scoping issue with\n    // Sass 3.3, change this line in `@if im-log(..) {}` instead.\n    $_: im-log('Unknown unit `#{unit($value)}`.');\n  }\n\n  @if $operator == '>' {\n    $value: $value + $interval;\n  } @else if $operator == '<' {\n    $value: $value - $interval;\n  }\n\n  @return $value;\n}\n\n\n///\n/// Parse an expression to return a valid media-query expression\n///\n/// @param {String} $expression - Expression to parse\n///\n/// @return {String} - Valid media query\n///\n@function parse-expression($expression) {\n  // If it is part of $media-expressions, it has no operator\n  // then there is no need to go any further, just return the value\n  @if map-has-key($media-expressions, $expression) {\n    @return map-get($media-expressions, $expression);\n  }\n\n  $operator: get-expression-operator($expression);\n  $dimension: get-expression-dimension($expression, $operator);\n  $prefix: get-expression-prefix($operator);\n  $value: get-expression-value($expression, $operator);\n\n  @return '(#{$prefix}-#{$dimension}: #{$value})';\n}\n\n///\n/// Slice `$list` between `$start` and `$end` indexes\n///\n/// @access private\n///\n/// @param {List} $list - List to slice\n/// @param {Number} $start [1] - Start index\n/// @param {Number} $end [length($list)] - End index\n///\n/// @return {List} Sliced list\n///\n@function slice($list, $start: 1, $end: length($list)) {\n  @if length($list) < 1 or $start > $end {\n    @return ();\n  }\n\n  $result: ();\n\n  @for $i from $start through $end {\n    $result: append($result, nth($list, $i));\n  }\n\n  @return $result;\n}\n\n////\n/// String to number converter\n/// @author Hugo Giraudel\n/// @access private\n////\n\n\n///\n/// Casts a string into a number\n///\n/// @param {String | Number} $value - Value to be parsed\n///\n/// @return {Number}\n///\n@function to-number($value) {\n  @if type-of($value) == 'number' {\n    @return $value;\n  } @else if type-of($value) != 'string' {\n    $_: im-log('Value for `to-number` should be a number or a string.');\n  }\n\n  $first-character: str-slice($value, 1, 1);\n  $result: 0;\n  $digits: 0;\n  $minus: ($first-character == '-');\n  $numbers: ('0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9);\n\n  // Remove +/- sign if present at first character\n  @if ($first-character == '+' or $first-character == '-') {\n    $value: str-slice($value, 2);\n  }\n\n  @for $i from 1 through str-length($value) {\n    $character: str-slice($value, $i, $i);\n\n    @if not (index(map-keys($numbers), $character) or $character == '.') {\n      @return to-length(if($minus, -$result, $result), str-slice($value, $i))\n    }\n\n    @if $character == '.' {\n      $digits: 1;\n    } @else if $digits == 0 {\n      $result: $result * 10 + map-get($numbers, $character);\n    } @else {\n      $digits: $digits * 10;\n      $result: $result + map-get($numbers, $character) / $digits;\n    }\n  }\n\n  @return if($minus, -$result, $result);\n}\n\n\n///\n/// Add `$unit` to `$value`\n///\n/// @param {Number} $value - Value to add unit to\n/// @param {String} $unit - String representation of the unit\n///\n/// @return {Number} - `$value` expressed in `$unit`\n///\n@function to-length($value, $unit) {\n  $units: ('px': 1px, 'cm': 1cm, 'mm': 1mm, '%': 1%, 'ch': 1ch, 'pc': 1pc, 'in': 1in, 'em': 1em, 'rem': 1rem, 'pt': 1pt, 'ex': 1ex, 'vw': 1vw, 'vh': 1vh, 'vmin': 1vmin, 'vmax': 1vmax);\n\n  @if not index(map-keys($units), $unit) {\n    $_: im-log('Invalid unit `#{$unit}`.');\n  }\n\n  @return $value * map-get($units, $unit);\n}\n\n///\n/// This mixin aims at redefining the configuration just for the scope of\n/// the call. It is helpful when having a component needing an extended\n/// configuration such as custom breakpoints (referred to as tweakpoints)\n/// for instance.\n///\n/// @author Hugo Giraudel\n///\n/// @param {Map} $tweakpoints [()] - Map of tweakpoints to be merged with `$breakpoints`\n/// @param {Map} $tweak-media-expressions [()] - Map of tweaked media expressions to be merged with `$media-expression`\n///\n/// @example scss - Extend the global breakpoints with a tweakpoint\n///  @include media-context(('custom': 678px)) {\n///    .foo {\n///      @include media('>phone', '<=custom') {\n///       // ...\n///      }\n///    }\n///  }\n///\n/// @example scss - Extend the global media expressions with a custom one\n///  @include media-context($tweak-media-expressions: ('all': 'all')) {\n///    .foo {\n///      @include media('all', '>phone') {\n///       // ...\n///      }\n///    }\n///  }\n///\n/// @example scss - Extend both configuration maps\n///  @include media-context(('custom': 678px), ('all': 'all')) {\n///    .foo {\n///      @include media('all', '>phone', '<=custom') {\n///       // ...\n///      }\n///    }\n///  }\n///\n@mixin media-context($tweakpoints: (), $tweak-media-expressions: ()) {\n  // Save global configuration\n  $global-breakpoints: $breakpoints;\n  $global-media-expressions: $media-expressions;\n\n  // Update global configuration\n  $breakpoints: map-merge($breakpoints, $tweakpoints) !global;\n  $media-expressions: map-merge($media-expressions, $tweak-media-expressions) !global;\n\n  @content;\n\n  // Restore global configuration\n  $breakpoints: $global-breakpoints !global;\n  $media-expressions: $global-media-expressions !global;\n}\n\n////\n/// include-media public exposed API\n/// @author Eduardo Boucas\n/// @access public\n////\n\n\n///\n/// Generates a media query based on a list of conditions\n///\n/// @param {Arglist}   $conditions  - Media query conditions\n///\n/// @example scss - With a single set breakpoint\n///  @include media('>phone') { }\n///\n/// @example scss - With two set breakpoints\n///  @include media('>phone', '<=tablet') { }\n///\n/// @example scss - With custom values\n///  @include media('>=358px', '<850px') { }\n///\n/// @example scss - With set breakpoints with custom values\n///  @include media('>desktop', '<=1350px') { }\n///\n/// @example scss - With a static expression\n///  @include media('retina2x') { }\n///\n/// @example scss - Mixing everything\n///  @include media('>=350px', '<tablet', 'retina3x') { }\n///\n@mixin media($conditions...) {\n  // scss-lint:disable SpaceAroundOperator\n  @if ($im-media-support and length($conditions) == 0) or\n      (not $im-media-support and im-intercepts-static-breakpoint($conditions...)) {\n    @content;\n  } @else if ($im-media-support and length($conditions) > 0) {\n    @media #{unquote(parse-expression(nth($conditions, 1)))} {\n      // Recursive call\n      @include media(slice($conditions, 2)...) {\n        @content;\n      }\n    }\n  }\n}\n","@import \"media\";\n\n@mixin header-footer-padding {\n  @include media(\">=desktop\") {\n    padding: 0 10%;\n  }\n\n  @include media(\"<desktop\") {\n    padding: 0 0.5rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"btn": "Footer_btn__2iPkI",
	"btn-large": "Footer_btn-large__8PfjE",
	"btn-primary": "Footer_btn-primary__11kuj",
	"btn-disabled": "Footer_btn-disabled__26VXy",
	"dividerHorizontal": "Footer_dividerHorizontal__1rl1H",
	"footer": "Footer_footer__1KW17",
	"footerContent": "Footer_footerContent__36IUS",
	"footerLogo": "Footer_footerLogo__1yol0",
	"footerLogoImage": "Footer_footerLogoImage__27mKe",
	"footerLinks": "Footer_footerLinks__cjn77"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Home.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/Home.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Home_btn__2viaW {\n  transition: background-color 0.3s ease-in-out;\n  border-radius: 6px;\n  min-width: 120px;\n  padding: 16px 24px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 500;\n  color: #fff;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.Home_btn-large__2qQnB {\n  border-radius: 8px;\n  padding: 21px 32px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.Home_btn-primary__174-s {\n  background-color: #0070f0;\n}\n.Home_btn-primary__174-s:hover {\n  background-color: #005dd6;\n}\n\n.Home_btn-disabled__2vBkK {\n  background-color: #f2f2f2;\n  color: #a6a6a6;\n}\n.Home_btn-disabled__2vBkK:hover {\n  background-color: #f2f2f2;\n}\n\n.Home_dividerHorizontal__1piUG {\n  border-radius: 50%;\n  width: 100%;\n  height: 1px;\n  background-color: #e5e5e5;\n}\n\n.Home_container__3sao- {\n  height: 100vh;\n  display: grid;\n  grid-template-areas: \"top-bar\" \"content\";\n  grid-template-rows: 72px 1fr;\n  color: #0d0d0d;\n}\n\n.Home_bodyContainer__P-ML5 {\n  grid-area: content;\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.Home_main__1Z1aG {\n  padding: 5rem 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 1279px) {\n  .Home_main__1Z1aG {\n    padding: 0;\n  }\n}\n\n.Home_hero__1g6Kc {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 40px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .Home_hero__1g6Kc {\n    text-align: left;\n    padding: 0 24px;\n  }\n}\n@media (min-width: 1280px) {\n  .Home_hero__1g6Kc .Home_heroTextContainer__3iGGE {\n    width: 80vw;\n    max-width: 800px;\n  }\n}\n@media (min-width: 1280px) {\n  .Home_hero__1g6Kc .Home_heroTitle__219xQ {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 60px;\n    line-height: 1.2;\n    font-weight: 700;\n  }\n}\n.Home_hero__1g6Kc .Home_heroSubtitle__1X9BC {\n  margin-top: 28px;\n  font-size: 24px;\n  line-height: 1.5;\n}\n@media (max-width: 767px) {\n  .Home_hero__1g6Kc .Home_heroSubtitle__1X9BC {\n    font-size: 16px;\n  }\n}\n.Home_hero__1g6Kc a {\n  margin-top: 32px;\n}\n\n.Home_productImageContainer__2uzT_ {\n  margin-top: 80px;\n  max-width: 100vw;\n}\n@media (min-width: 1280px) {\n  .Home_productImageContainer__2uzT_ {\n    max-width: 80vw;\n  }\n}\n@media (max-width: 767px) {\n  .Home_productImageContainer__2uzT_ {\n    margin-top: 32px;\n  }\n}\n.Home_productImageContainer__2uzT_ .Home_productImage__1LfiL {\n  height: auto;\n  width: 100%;\n  border-radius: 8px;\n}\n\n.Home_usersBanner__1iL1L {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.Home_usersBanner__1iL1L .Home_usersBannerText__2w5B7 {\n  font-size: 20px;\n  color: #666;\n}\n.Home_usersBanner__1iL1L .Home_usersList__3JCOW {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  margin-top: 64px;\n  margin-bottom: 64px;\n  width: 100%;\n}\n.Home_usersBanner__1iL1L .Home_usersList__3JCOW .Home_usersLogoWrapper__yxHeY {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 32px;\n  max-height: 72px;\n}\n\n.Home_sectionHeader__15exL {\n  margin-top: 0;\n  margin-bottom: 24px;\n  font-size: 40px;\n  line-height: 1.3;\n}\n@media (max-width: 767px) {\n  .Home_sectionHeader__15exL {\n    font-size: 24px;\n  }\n}\n.Home_sectionHeader__15exL.Home_centered__3BjO0 {\n  text-align: center;\n}\n\n.Home_featuresSection__kXWHT {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f2f2f2;\n  width: 100%;\n  padding: 80px 0;\n}\n.Home_featuresSection__kXWHT .Home_featuresTitleContainer__3VADA {\n  text-align: center;\n}\n@media (min-width: 1280px) {\n  .Home_featuresSection__kXWHT .Home_featuresTitleContainer__3VADA {\n    width: 60vw;\n    max-width: 540px;\n  }\n}\n.Home_featuresSection__kXWHT .Home_featuresTitleContainer__3VADA .Home_featuresSubTitle__1LaMy {\n  font-size: 20px;\n  line-height: 1.3;\n}\n.Home_featuresSection__kXWHT .Home_featuresGrid__RBkNS {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 40px;\n  max-width: 1188px;\n}\n\n.Home_featureCard__1ETE6 {\n  transition: all 0.1s ease-in-out;\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 16px;\n  margin: 16px;\n  width: 344px;\n  max-width: calc(100vw - 32px);\n  padding: 40px;\n  background-color: #ffffff;\n}\n@media (max-width: 767px) {\n  .Home_featureCard__1ETE6 {\n    padding: 24px;\n  }\n}\n.Home_featureCard__1ETE6:hover {\n  background-color: #0070f0;\n}\n.Home_featureCard__1ETE6:hover img {\n  filter: brightness(0) invert(1);\n}\n.Home_featureCard__1ETE6:hover h5,\n.Home_featureCard__1ETE6:hover p {\n  color: white;\n}\n.Home_featureCard__1ETE6 .Home_featureCardImage__2fc4Z {\n  margin-bottom: 8px;\n  width: 36px;\n  height: 36px;\n}\n.Home_featureCard__1ETE6 h5 {\n  margin: 0 auto 16px auto;\n  font-size: 20px;\n  line-height: 1.3;\n  font-weight: 600;\n  text-transform: none;\n}\n.Home_featureCard__1ETE6 p {\n  margin: 0;\n  font-size: 16px;\n  line-height: 1.5;\n  font-weight: 400;\n  text-transform: none;\n}\n\n.Home_featuresTagline__ByeBA {\n  margin-top: 160px;\n  margin-bottom: 160px;\n  max-width: 840px;\n}\n@media (max-width: 767px) {\n  .Home_featuresTagline__ByeBA .Home_sectionHeader__15exL {\n    font-size: 32px;\n  }\n}\n\n.Home_valueSection__3mWlk {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: 160px;\n  width: 100%;\n  max-width: 1440px;\n  height: 100%;\n}\n@media (max-width: 1279px) {\n  .Home_valueSection__3mWlk {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n  }\n}\n.Home_valueSection__3mWlk .Home_infoPanel__H7S9j {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  line-height: 1.5;\n}\n.Home_valueSection__3mWlk .Home_infoPanel__H7S9j div {\n  max-width: 480px;\n}\n@media (max-width: 1279px) {\n  .Home_valueSection__3mWlk .Home_infoPanel__H7S9j {\n    margin-left: 0;\n    padding: 0 24px;\n    grid-row: 1;\n  }\n}\n.Home_valueSection__3mWlk .Home_infoPanel__H7S9j p {\n  max-width: 440px;\n  margin-top: 0;\n}\n.Home_valueSection__3mWlk .Home_infoPanel__H7S9j a {\n  color: #0070f0;\n  font-weight: 600;\n}\n.Home_valueSection__3mWlk .Home_imagePanel__36_Gn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 1279px) {\n  .Home_valueSection__3mWlk .Home_imagePanel__36_Gn {\n    grid-row: 2;\n  }\n}\n.Home_valueSection__3mWlk .Home_imagePanel__36_Gn .Home_imageContainer__3kfsc {\n  width: 800px;\n  max-width: 90vw;\n}\n.Home_valueSection__3mWlk .Home_imagePanel__36_Gn .Home_imageContainer__3kfsc img {\n  height: auto;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://buttons.scss","webpack://Home.module.scss","webpack://variables.scss","webpack://components.scss","webpack://../node_modules/include-media/dist/_include-media.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'index';\n\n// Base\n\n.btn {\n  transition: background-color 0.3s ease-in-out;\n  border-radius: 6px;\n  min-width: 120px;\n  padding: 16px 24px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 500;\n  color: #fff;\n\n  user-select: none;\n  cursor: pointer;\n}\n\n// Size\n\n.btn-large {\n  border-radius: 8px;\n  padding: 21px 32px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n// Primary\n\n.btn-primary {\n  background-color: $primary-blue;\n\n  &:hover {\n    background-color: $dark-blue;\n  }\n}\n\n.btn-disabled {\n  background-color: #f2f2f2;\n  color: #a6a6a6;\n\n  &:hover {\n    background-color: #f2f2f2;\n  }\n}\n",".btn {\n  transition: background-color 0.3s ease-in-out;\n  border-radius: 6px;\n  min-width: 120px;\n  padding: 16px 24px;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 500;\n  color: #fff;\n  user-select: none;\n  cursor: pointer;\n}\n\n.btn-large {\n  border-radius: 8px;\n  padding: 21px 32px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.btn-primary {\n  background-color: #0070f0;\n}\n.btn-primary:hover {\n  background-color: #005dd6;\n}\n\n.btn-disabled {\n  background-color: #f2f2f2;\n  color: #a6a6a6;\n}\n.btn-disabled:hover {\n  background-color: #f2f2f2;\n}\n\n.dividerHorizontal {\n  border-radius: 50%;\n  width: 100%;\n  height: 1px;\n  background-color: #e5e5e5;\n}\n\n.container {\n  height: 100vh;\n  display: grid;\n  grid-template-areas: \"top-bar\" \"content\";\n  grid-template-rows: 72px 1fr;\n  color: #0d0d0d;\n}\n\n.bodyContainer {\n  grid-area: content;\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main {\n  padding: 5rem 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 1279px) {\n  .main {\n    padding: 0;\n  }\n}\n\n.hero {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 40px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .hero {\n    text-align: left;\n    padding: 0 24px;\n  }\n}\n@media (min-width: 1280px) {\n  .hero .heroTextContainer {\n    width: 80vw;\n    max-width: 800px;\n  }\n}\n@media (min-width: 1280px) {\n  .hero .heroTitle {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 60px;\n    line-height: 1.2;\n    font-weight: 700;\n  }\n}\n.hero .heroSubtitle {\n  margin-top: 28px;\n  font-size: 24px;\n  line-height: 1.5;\n}\n@media (max-width: 767px) {\n  .hero .heroSubtitle {\n    font-size: 16px;\n  }\n}\n.hero a {\n  margin-top: 32px;\n}\n\n.productImageContainer {\n  margin-top: 80px;\n  max-width: 100vw;\n}\n@media (min-width: 1280px) {\n  .productImageContainer {\n    max-width: 80vw;\n  }\n}\n@media (max-width: 767px) {\n  .productImageContainer {\n    margin-top: 32px;\n  }\n}\n.productImageContainer .productImage {\n  height: auto;\n  width: 100%;\n  border-radius: 8px;\n}\n\n.usersBanner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.usersBanner .usersBannerText {\n  font-size: 20px;\n  color: #666;\n}\n.usersBanner .usersList {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  margin-top: 64px;\n  margin-bottom: 64px;\n  width: 100%;\n}\n.usersBanner .usersList .usersLogoWrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 32px;\n  max-height: 72px;\n}\n\n.sectionHeader {\n  margin-top: 0;\n  margin-bottom: 24px;\n  font-size: 40px;\n  line-height: 1.3;\n}\n@media (max-width: 767px) {\n  .sectionHeader {\n    font-size: 24px;\n  }\n}\n.sectionHeader.centered {\n  text-align: center;\n}\n\n.featuresSection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f2f2f2;\n  width: 100%;\n  padding: 80px 0;\n}\n.featuresSection .featuresTitleContainer {\n  text-align: center;\n}\n@media (min-width: 1280px) {\n  .featuresSection .featuresTitleContainer {\n    width: 60vw;\n    max-width: 540px;\n  }\n}\n.featuresSection .featuresTitleContainer .featuresSubTitle {\n  font-size: 20px;\n  line-height: 1.3;\n}\n.featuresSection .featuresGrid {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 40px;\n  max-width: 1188px;\n}\n\n.featureCard {\n  transition: all 0.1s ease-in-out;\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 16px;\n  margin: 16px;\n  width: 344px;\n  max-width: calc(100vw - 32px);\n  padding: 40px;\n  background-color: #ffffff;\n}\n@media (max-width: 767px) {\n  .featureCard {\n    padding: 24px;\n  }\n}\n.featureCard:hover {\n  background-color: #0070f0;\n}\n.featureCard:hover img {\n  filter: brightness(0) invert(1);\n}\n.featureCard:hover h5,\n.featureCard:hover p {\n  color: white;\n}\n.featureCard .featureCardImage {\n  margin-bottom: 8px;\n  width: 36px;\n  height: 36px;\n}\n.featureCard h5 {\n  margin: 0 auto 16px auto;\n  font-size: 20px;\n  line-height: 1.3;\n  font-weight: 600;\n  text-transform: none;\n}\n.featureCard p {\n  margin: 0;\n  font-size: 16px;\n  line-height: 1.5;\n  font-weight: 400;\n  text-transform: none;\n}\n\n.featuresTagline {\n  margin-top: 160px;\n  margin-bottom: 160px;\n  max-width: 840px;\n}\n@media (max-width: 767px) {\n  .featuresTagline .sectionHeader {\n    font-size: 32px;\n  }\n}\n\n.valueSection {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: 160px;\n  width: 100%;\n  max-width: 1440px;\n  height: 100%;\n}\n@media (max-width: 1279px) {\n  .valueSection {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n  }\n}\n.valueSection .infoPanel {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  line-height: 1.5;\n}\n.valueSection .infoPanel div {\n  max-width: 480px;\n}\n@media (max-width: 1279px) {\n  .valueSection .infoPanel {\n    margin-left: 0;\n    padding: 0 24px;\n    grid-row: 1;\n  }\n}\n.valueSection .infoPanel p {\n  max-width: 440px;\n  margin-top: 0;\n}\n.valueSection .infoPanel a {\n  color: #0070f0;\n  font-weight: 600;\n}\n.valueSection .imagePanel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 1279px) {\n  .valueSection .imagePanel {\n    grid-row: 2;\n  }\n}\n.valueSection .imagePanel .imageContainer {\n  width: 800px;\n  max-width: 90vw;\n}\n.valueSection .imagePanel .imageContainer img {\n  height: auto;\n  width: 100%;\n}","$pt-divider-black: rgba(206, 212, 224, 0.8);\n\n$primary-blue: #0070f0;\n$dark-blue: #005dd6;\n$black: #0d0d0d;\n$grey: #666;\n","@import 'buttons';\n\n// Dividers\n\n.dividerHorizontal {\n  border-radius: 50%;\n  width: 100%;\n  height: 1px;\n  background-color: #e5e5e5;\n}\n","@charset \"UTF-8\";\n\n//     _            _           _                           _ _\n//    (_)          | |         | |                         | (_)\n//     _ _ __   ___| |_   _  __| | ___   _ __ ___   ___  __| |_  __ _\n//    | | '_ \\ / __| | | | |/ _` |/ _ \\ | '_ ` _ \\ / _ \\/ _` | |/ _` |\n//    | | | | | (__| | |_| | (_| |  __/ | | | | | |  __/ (_| | | (_| |\n//    |_|_| |_|\\___|_|\\__,_|\\__,_|\\___| |_| |_| |_|\\___|\\__,_|_|\\__,_|\n//\n//      Simple, elegant and maintainable media queries in Sass\n//                        v1.4.9\n//\n//                http://include-media.com\n//\n//         Authors: Eduardo Boucas (@eduardoboucas)\n//                  Hugo Giraudel (@hugogiraudel)\n//\n//      This project is licensed under the terms of the MIT license\n\n\n////\n/// include-media library public configuration\n/// @author Eduardo Boucas\n/// @access public\n////\n\n\n///\n/// Creates a list of global breakpoints\n///\n/// @example scss - Creates a single breakpoint with the label `phone`\n///  $breakpoints: ('phone': 320px);\n///\n$breakpoints: (\n  'phone': 320px,\n  'tablet': 768px,\n  'desktop': 1024px\n) !default;\n\n\n///\n/// Creates a list of static expressions or media types\n///\n/// @example scss - Creates a single media type (screen)\n///  $media-expressions: ('screen': 'screen');\n///\n/// @example scss - Creates a static expression with logical disjunction (OR operator)\n///  $media-expressions: (\n///    'retina2x': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'\n///  );\n///\n$media-expressions: (\n  'screen': 'screen',\n  'print': 'print',\n  'handheld': 'handheld',\n  'landscape': '(orientation: landscape)',\n  'portrait': '(orientation: portrait)',\n  'retina2x': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)',\n  'retina3x': '(-webkit-min-device-pixel-ratio: 3), (min-resolution: 350dpi), (min-resolution: 3dppx)'\n) !default;\n\n\n///\n/// Defines a number to be added or subtracted from each unit when declaring breakpoints with exclusive intervals\n///\n/// @example scss - Interval for pixels is defined as `1` by default\n///  @include media('>128px') {}\n///\n///  /* Generates: */\n///  @media (min-width: 129px) {}\n///\n/// @example scss - Interval for ems is defined as `0.01` by default\n///  @include media('>20em') {}\n///\n///  /* Generates: */\n///  @media (min-width: 20.01em) {}\n///\n/// @example scss - Interval for rems is defined as `0.1` by default, to be used with `font-size: 62.5%;`\n///  @include media('>2.0rem') {}\n///\n///  /* Generates: */\n///  @media (min-width: 2.1rem) {}\n///\n$unit-intervals: (\n  'px': 1,\n  'em': 0.01,\n  'rem': 0.1,\n  '': 0\n) !default;\n\n///\n/// Defines whether support for media queries is available, useful for creating separate stylesheets\n/// for browsers that don't support media queries.\n///\n/// @example scss - Disables support for media queries\n///  $im-media-support: false;\n///  @include media('>=tablet') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* Generates: */\n///  .foo {\n///    color: tomato;\n///  }\n///\n$im-media-support: true !default;\n\n///\n/// Selects which breakpoint to emulate when support for media queries is disabled. Media queries that start at or\n/// intercept the breakpoint will be displayed, any others will be ignored.\n///\n/// @example scss - This media query will show because it intercepts the static breakpoint\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  @include media('>=tablet') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* Generates: */\n///  .foo {\n///    color: tomato;\n///  }\n///\n/// @example scss - This media query will NOT show because it does not intercept the desktop breakpoint\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'tablet';\n///  @include media('>=desktop') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* No output */\n///\n$im-no-media-breakpoint: 'desktop' !default;\n\n///\n/// Selects which media expressions are allowed in an expression for it to be used when media queries\n/// are not supported.\n///\n/// @example scss - This media query will show because it intercepts the static breakpoint and contains only accepted media expressions\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  $im-no-media-expressions: ('screen');\n///  @include media('>=tablet', 'screen') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///   /* Generates: */\n///   .foo {\n///     color: tomato;\n///   }\n///\n/// @example scss - This media query will NOT show because it intercepts the static breakpoint but contains a media expression that is not accepted\n///  $im-media-support: false;\n///  $im-no-media-breakpoint: 'desktop';\n///  $im-no-media-expressions: ('screen');\n///  @include media('>=tablet', 'retina2x') {\n///    .foo {\n///      color: tomato;\n///    }\n///  }\n///\n///  /* No output */\n///\n$im-no-media-expressions: ('screen', 'portrait', 'landscape') !default;\n\n////\n/// Cross-engine logging engine\n/// @author Hugo Giraudel\n/// @access private\n////\n\n\n///\n/// Log a message either with `@error` if supported\n/// else with `@warn`, using `feature-exists('at-error')`\n/// to detect support.\n///\n/// @param {String} $message - Message to log\n///\n@function im-log($message) {\n  @if feature-exists('at-error') {\n    @error $message;\n  } @else {\n    @warn $message;\n    $_: noop();\n  }\n\n  @return $message;\n}\n\n\n///\n/// Wrapper mixin for the log function so it can be used with a more friendly\n/// API than `@if im-log('..') {}` or `$_: im-log('..')`. Basically, use the function\n/// within functions because it is not possible to include a mixin in a function\n/// and use the mixin everywhere else because it's much more elegant.\n///\n/// @param {String} $message - Message to log\n///\n@mixin log($message) {\n  @if im-log($message) {}\n}\n\n\n///\n/// Function with no `@return` called next to `@warn` in Sass 3.3\n/// to trigger a compiling error and stop the process.\n///\n@function noop() {}\n\n///\n/// Determines whether a list of conditions is intercepted by the static breakpoint.\n///\n/// @param {Arglist}   $conditions  - Media query conditions\n///\n/// @return {Boolean} - Returns true if the conditions are intercepted by the static breakpoint\n///\n@function im-intercepts-static-breakpoint($conditions...) {\n  $no-media-breakpoint-value: map-get($breakpoints, $im-no-media-breakpoint);\n\n  @if not $no-media-breakpoint-value {\n    @if im-log('`#{$im-no-media-breakpoint}` is not a valid breakpoint.') {}\n  }\n\n  @each $condition in $conditions {\n    @if not map-has-key($media-expressions, $condition) {\n      $operator: get-expression-operator($condition);\n      $prefix: get-expression-prefix($operator);\n      $value: get-expression-value($condition, $operator);\n\n      // scss-lint:disable SpaceAroundOperator\n      @if ($prefix == 'max' and $value <= $no-media-breakpoint-value) or\n          ($prefix == 'min' and $value > $no-media-breakpoint-value) {\n        @return false;\n      }\n    } @else if not index($im-no-media-expressions, $condition) {\n      @return false;\n    }\n  }\n\n  @return true;\n}\n\n////\n/// Parsing engine\n/// @author Hugo Giraudel\n/// @access private\n////\n\n\n///\n/// Get operator of an expression\n///\n/// @param {String} $expression - Expression to extract operator from\n///\n/// @return {String} - Any of `>=`, `>`, `<=`, `<`, `≥`, `≤`\n///\n@function get-expression-operator($expression) {\n  @each $operator in ('>=', '>', '<=', '<', '≥', '≤') {\n    @if str-index($expression, $operator) {\n      @return $operator;\n    }\n  }\n\n  // It is not possible to include a mixin inside a function, so we have to\n  // rely on the `im-log(..)` function rather than the `log(..)` mixin. Because\n  // functions cannot be called anywhere in Sass, we need to hack the call in\n  // a dummy variable, such as `$_`. If anybody ever raise a scoping issue with\n  // Sass 3.3, change this line in `@if im-log(..) {}` instead.\n  $_: im-log('No operator found in `#{$expression}`.');\n}\n\n\n///\n/// Get dimension of an expression, based on a found operator\n///\n/// @param {String} $expression - Expression to extract dimension from\n/// @param {String} $operator - Operator from `$expression`\n///\n/// @return {String} - `width` or `height` (or potentially anything else)\n///\n@function get-expression-dimension($expression, $operator) {\n  $operator-index: str-index($expression, $operator);\n  $parsed-dimension: str-slice($expression, 0, $operator-index - 1);\n  $dimension: 'width';\n\n  @if str-length($parsed-dimension) > 0 {\n    $dimension: $parsed-dimension;\n  }\n\n  @return $dimension;\n}\n\n\n///\n/// Get dimension prefix based on an operator\n///\n/// @param {String} $operator - Operator\n///\n/// @return {String} - `min` or `max`\n///\n@function get-expression-prefix($operator) {\n  @return if(index(('<', '<=', '≤'), $operator), 'max', 'min');\n}\n\n\n///\n/// Get value of an expression, based on a found operator\n///\n/// @param {String} $expression - Expression to extract value from\n/// @param {String} $operator - Operator from `$expression`\n///\n/// @return {Number} - A numeric value\n///\n@function get-expression-value($expression, $operator) {\n  $operator-index: str-index($expression, $operator);\n  $value: str-slice($expression, $operator-index + str-length($operator));\n\n  @if map-has-key($breakpoints, $value) {\n    $value: map-get($breakpoints, $value);\n  } @else {\n    $value: to-number($value);\n  }\n\n  $interval: map-get($unit-intervals, unit($value));\n\n  @if not $interval {\n    // It is not possible to include a mixin inside a function, so we have to\n    // rely on the `im-log(..)` function rather than the `log(..)` mixin. Because\n    // functions cannot be called anywhere in Sass, we need to hack the call in\n    // a dummy variable, such as `$_`. If anybody ever raise a scoping issue with\n    // Sass 3.3, change this line in `@if im-log(..) {}` instead.\n    $_: im-log('Unknown unit `#{unit($value)}`.');\n  }\n\n  @if $operator == '>' {\n    $value: $value + $interval;\n  } @else if $operator == '<' {\n    $value: $value - $interval;\n  }\n\n  @return $value;\n}\n\n\n///\n/// Parse an expression to return a valid media-query expression\n///\n/// @param {String} $expression - Expression to parse\n///\n/// @return {String} - Valid media query\n///\n@function parse-expression($expression) {\n  // If it is part of $media-expressions, it has no operator\n  // then there is no need to go any further, just return the value\n  @if map-has-key($media-expressions, $expression) {\n    @return map-get($media-expressions, $expression);\n  }\n\n  $operator: get-expression-operator($expression);\n  $dimension: get-expression-dimension($expression, $operator);\n  $prefix: get-expression-prefix($operator);\n  $value: get-expression-value($expression, $operator);\n\n  @return '(#{$prefix}-#{$dimension}: #{$value})';\n}\n\n///\n/// Slice `$list` between `$start` and `$end` indexes\n///\n/// @access private\n///\n/// @param {List} $list - List to slice\n/// @param {Number} $start [1] - Start index\n/// @param {Number} $end [length($list)] - End index\n///\n/// @return {List} Sliced list\n///\n@function slice($list, $start: 1, $end: length($list)) {\n  @if length($list) < 1 or $start > $end {\n    @return ();\n  }\n\n  $result: ();\n\n  @for $i from $start through $end {\n    $result: append($result, nth($list, $i));\n  }\n\n  @return $result;\n}\n\n////\n/// String to number converter\n/// @author Hugo Giraudel\n/// @access private\n////\n\n\n///\n/// Casts a string into a number\n///\n/// @param {String | Number} $value - Value to be parsed\n///\n/// @return {Number}\n///\n@function to-number($value) {\n  @if type-of($value) == 'number' {\n    @return $value;\n  } @else if type-of($value) != 'string' {\n    $_: im-log('Value for `to-number` should be a number or a string.');\n  }\n\n  $first-character: str-slice($value, 1, 1);\n  $result: 0;\n  $digits: 0;\n  $minus: ($first-character == '-');\n  $numbers: ('0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9);\n\n  // Remove +/- sign if present at first character\n  @if ($first-character == '+' or $first-character == '-') {\n    $value: str-slice($value, 2);\n  }\n\n  @for $i from 1 through str-length($value) {\n    $character: str-slice($value, $i, $i);\n\n    @if not (index(map-keys($numbers), $character) or $character == '.') {\n      @return to-length(if($minus, -$result, $result), str-slice($value, $i))\n    }\n\n    @if $character == '.' {\n      $digits: 1;\n    } @else if $digits == 0 {\n      $result: $result * 10 + map-get($numbers, $character);\n    } @else {\n      $digits: $digits * 10;\n      $result: $result + map-get($numbers, $character) / $digits;\n    }\n  }\n\n  @return if($minus, -$result, $result);\n}\n\n\n///\n/// Add `$unit` to `$value`\n///\n/// @param {Number} $value - Value to add unit to\n/// @param {String} $unit - String representation of the unit\n///\n/// @return {Number} - `$value` expressed in `$unit`\n///\n@function to-length($value, $unit) {\n  $units: ('px': 1px, 'cm': 1cm, 'mm': 1mm, '%': 1%, 'ch': 1ch, 'pc': 1pc, 'in': 1in, 'em': 1em, 'rem': 1rem, 'pt': 1pt, 'ex': 1ex, 'vw': 1vw, 'vh': 1vh, 'vmin': 1vmin, 'vmax': 1vmax);\n\n  @if not index(map-keys($units), $unit) {\n    $_: im-log('Invalid unit `#{$unit}`.');\n  }\n\n  @return $value * map-get($units, $unit);\n}\n\n///\n/// This mixin aims at redefining the configuration just for the scope of\n/// the call. It is helpful when having a component needing an extended\n/// configuration such as custom breakpoints (referred to as tweakpoints)\n/// for instance.\n///\n/// @author Hugo Giraudel\n///\n/// @param {Map} $tweakpoints [()] - Map of tweakpoints to be merged with `$breakpoints`\n/// @param {Map} $tweak-media-expressions [()] - Map of tweaked media expressions to be merged with `$media-expression`\n///\n/// @example scss - Extend the global breakpoints with a tweakpoint\n///  @include media-context(('custom': 678px)) {\n///    .foo {\n///      @include media('>phone', '<=custom') {\n///       // ...\n///      }\n///    }\n///  }\n///\n/// @example scss - Extend the global media expressions with a custom one\n///  @include media-context($tweak-media-expressions: ('all': 'all')) {\n///    .foo {\n///      @include media('all', '>phone') {\n///       // ...\n///      }\n///    }\n///  }\n///\n/// @example scss - Extend both configuration maps\n///  @include media-context(('custom': 678px), ('all': 'all')) {\n///    .foo {\n///      @include media('all', '>phone', '<=custom') {\n///       // ...\n///      }\n///    }\n///  }\n///\n@mixin media-context($tweakpoints: (), $tweak-media-expressions: ()) {\n  // Save global configuration\n  $global-breakpoints: $breakpoints;\n  $global-media-expressions: $media-expressions;\n\n  // Update global configuration\n  $breakpoints: map-merge($breakpoints, $tweakpoints) !global;\n  $media-expressions: map-merge($media-expressions, $tweak-media-expressions) !global;\n\n  @content;\n\n  // Restore global configuration\n  $breakpoints: $global-breakpoints !global;\n  $media-expressions: $global-media-expressions !global;\n}\n\n////\n/// include-media public exposed API\n/// @author Eduardo Boucas\n/// @access public\n////\n\n\n///\n/// Generates a media query based on a list of conditions\n///\n/// @param {Arglist}   $conditions  - Media query conditions\n///\n/// @example scss - With a single set breakpoint\n///  @include media('>phone') { }\n///\n/// @example scss - With two set breakpoints\n///  @include media('>phone', '<=tablet') { }\n///\n/// @example scss - With custom values\n///  @include media('>=358px', '<850px') { }\n///\n/// @example scss - With set breakpoints with custom values\n///  @include media('>desktop', '<=1350px') { }\n///\n/// @example scss - With a static expression\n///  @include media('retina2x') { }\n///\n/// @example scss - Mixing everything\n///  @include media('>=350px', '<tablet', 'retina3x') { }\n///\n@mixin media($conditions...) {\n  // scss-lint:disable SpaceAroundOperator\n  @if ($im-media-support and length($conditions) == 0) or\n      (not $im-media-support and im-intercepts-static-breakpoint($conditions...)) {\n    @content;\n  } @else if ($im-media-support and length($conditions) > 0) {\n    @media #{unquote(parse-expression(nth($conditions, 1)))} {\n      // Recursive call\n      @include media(slice($conditions, 2)...) {\n        @content;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"btn": "Home_btn__2viaW",
	"btn-large": "Home_btn-large__2qQnB",
	"btn-primary": "Home_btn-primary__174-s",
	"btn-disabled": "Home_btn-disabled__2vBkK",
	"dividerHorizontal": "Home_dividerHorizontal__1piUG",
	"container": "Home_container__3sao-",
	"bodyContainer": "Home_bodyContainer__P-ML5",
	"main": "Home_main__1Z1aG",
	"hero": "Home_hero__1g6Kc",
	"heroTextContainer": "Home_heroTextContainer__3iGGE",
	"heroTitle": "Home_heroTitle__219xQ",
	"heroSubtitle": "Home_heroSubtitle__1X9BC",
	"productImageContainer": "Home_productImageContainer__2uzT_",
	"productImage": "Home_productImage__1LfiL",
	"usersBanner": "Home_usersBanner__1iL1L",
	"usersBannerText": "Home_usersBannerText__2w5B7",
	"usersList": "Home_usersList__3JCOW",
	"usersLogoWrapper": "Home_usersLogoWrapper__yxHeY",
	"sectionHeader": "Home_sectionHeader__15exL",
	"centered": "Home_centered__3BjO0",
	"featuresSection": "Home_featuresSection__kXWHT",
	"featuresTitleContainer": "Home_featuresTitleContainer__3VADA",
	"featuresSubTitle": "Home_featuresSubTitle__1LaMy",
	"featuresGrid": "Home_featuresGrid__RBkNS",
	"featureCard": "Home_featureCard__1ETE6",
	"featureCardImage": "Home_featureCardImage__2fc4Z",
	"featuresTagline": "Home_featuresTagline__ByeBA",
	"valueSection": "Home_valueSection__3mWlk",
	"infoPanel": "Home_infoPanel__H7S9j",
	"imagePanel": "Home_imagePanel__36_Gn",
	"imageContainer": "Home_imageContainer__3kfsc"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
/*!***********************************!*\
  !*** (webpack)/webpack/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 880:
/***/ (function(module) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(880);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = function () {};

var _default = Head;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Footer */ "./components/Footer.jsx");
/* harmony import */ var components_EmailSignup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/EmailSignup */ "./components/EmailSignup.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "B:\\workspace\\prospr-landing-page\\pages\\index.js",
    _this = undefined;








var FeatureCard = function FeatureCard(_ref) {
  var title = _ref.title,
      children = _ref.children,
      icon = _ref.icon;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featureCard,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featureCardImage,
      src: icon,
      width: 36,
      height: 36
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, _this);
};

_c = FeatureCard;

var SectionHeader = function SectionHeader(_ref2) {
  var children = _ref2.children,
      _ref2$center = _ref2.center,
      center = _ref2$center === void 0 ? false : _ref2$center;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.sectionHeader, center && styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.centered),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, _this);
};

_c2 = SectionHeader;

var FeatureSection = function FeatureSection(_ref3) {
  var title = _ref3.title,
      className = _ref3.className,
      children = _ref3.children,
      imageSrc = _ref3.imageSrc,
      imageAlt = _ref3.imageAlt,
      _ref3$left = _ref3.left,
      left = _ref3$left === void 0 ? false : _ref3$left,
      width = _ref3.width,
      height = _ref3.height;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.valueSection),
    children: [!left && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imagePanel,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: imageSrc,
          alt: imageAlt,
          width: width,
          height: height
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.infoPanel, styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.left),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SectionHeader, {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }, _this), left && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imagePanel,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: imageSrc,
          alt: imageAlt,
          width: width,
          height: height
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, _this);
};

_c3 = FeatureSection;

var Home = function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Prospr"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bodyContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.hero,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroTextContainer,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroTitle,
              children: "The donor management tool you'll love using"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroSubtitle,
              children: "From the first contact to the final donation, Prospr helps you engage your donors, all without making it feel like a chore."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "btn btn-primary btn-large",
            href: "#bookDemo",
            children: "Book a demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.productImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/hero_img.png",
            alt: "Prospr Product Image",
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.productImage,
            width: 1189,
            height: 963
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBanner,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBannerText,
            children: "Trusted by professionals from these organizations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersList,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersLogoWrapper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/logos_orgs/tourette_canada.png",
                alt: "Tourette Canada",
                width: 181,
                height: 74
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersLogoWrapper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/logos_orgs/cof.png",
                alt: "Company of Fools",
                width: 158,
                height: 72
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersLogoWrapper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/logos_orgs/our_place.png",
                alt: "Our Place",
                width: 259,
                height: 72
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersLogoWrapper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/logos_orgs/mr.png",
                alt: "Manuels River",
                width: 200,
                height: 72
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dividerHorizontal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: "features",
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresTagline,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SectionHeader, {
            center: true,
            children: "Use Prospr to build better relationships with donors"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureSection, {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.strengthenRelationshipsPanel,
          title: "Strengthen donor relationships",
          imageSrc: "/donor_profile.png",
          alt: "Sample donor profile",
          width: 1000,
          height: 571,
          children: "It can be challenging to build relationships with donors. Cut through the hassle and create informative donor profiles to guide your fundraising process."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureSection, {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.engagePanel,
          title: "Effectively engage with your donors",
          imageSrc: "/journey_builder.png",
          alt: "Journey Builder Demo Image",
          width: 1084,
          height: 619,
          left: true,
          children: "Missing out on opportunities with donors can be frustrating. Plan your donor interactions in advance so you can make the most of every opportunity."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureSection, {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.onlineDonationsPanel,
          title: "Improve online giving",
          imageSrc: "/donations.png",
          alt: "Sample donation form",
          width: 1084,
          height: 619,
          children: "Don't risk losing your donors at the finish line. Use our customizeable donation forms to provide a better donor experience and convert more often."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresTitleContainer,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SectionHeader, {
              center: true,
              children: "All your favorite features in a single tool"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresSubTitle,
              children: "Designed and optimized for better fundraising."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresGrid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Cloud hosted",
              icon: "icons/cloud.svg",
              children: "No software updates, no maintenance. All you need is an modern web browser."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Simple setup",
              icon: "icons/settings.svg",
              children: "Start managing your data and building donor journeys with a few simple clicks."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Countless integrations",
              icon: "icons/grid.svg",
              children: "Simplify your processes. Connect to existing tools that you use and reduce manual work."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Security first",
              icon: "icons/lock.svg",
              children: "Keep your data secure with a reliable database (hosted with MongoDB Atlas\u2122)."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Better collaboration",
              icon: "icons/collaboration.svg",
              children: "Reduce miscommunication. Instantly sync your work across your organization."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Easy-to-use",
              icon: "icons/checkmark.svg",
              children: "With our software, you don\u2019t need to worry about additional training to get the job done."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: "bookDemo",
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.finalCtaPanel,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.background
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_EmailSignup__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
};

_c4 = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "FeatureCard");
$RefreshReg$(_c2, "SectionHeader");
$RefreshReg$(_c3, "FeatureSection");
$RefreshReg$(_c4, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./styles/Footer.module.scss":
/*!***********************************!*\
  !*** ./styles/Footer.module.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Footer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Footer.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Footer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Footer.module.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Footer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Footer.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/Home.module.scss":
/*!*********************************!*\
  !*** ./styles/Home.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Home.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Home.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Home.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Home.module.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Home.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Home.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=B%3A%5Cworkspace%5Cprospr-landing-page%5Cpages%5Cindex.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbFNpZ251cC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRW1haWxTaWdudXAubW9kdWxlLnNjc3M/ZTQyMCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRW1haWxTaWdudXAubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9Gb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL3dlYnBhY2svaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvYW1wLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvYW1wLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQudHN4Iiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3NpZGUtZWZmZWN0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9Gb290ZXIubW9kdWxlLnNjc3M/NTlhMSIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3M/NjI4YiJdLCJuYW1lcyI6WyJlbWFpbFJlZ2V4IiwidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwidGVzdCIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwiRW1haWxTaWdudXAiLCJ1c2VTdGF0ZSIsInNldEVtYWlsIiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsIm9yZ2FuaXphdGlvbiIsInNldE9yZ2FuaXphdGlvbiIsInZhbGlkIiwic3R5bGVzIiwiYm9va0RlbW9Gb3JtIiwiZmxvYXRpbmdQYW5lbCIsImZvcm1XcmFwcGVyIiwiZm9ybUNvbnRlbnQiLCJmaWVsZFJvdyIsInRleHRJbnB1dEhhbGYiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0SW5wdXRGdWxsIiwicG9zaXRpb24iLCJsZWZ0IiwiY2xhc3NOYW1lcyIsIkZvb3RlciIsImZvb3RlciIsImZvb3RlckNvbnRlbnQiLCJmb290ZXJMb2dvIiwiZm9vdGVyTG9nb0ltYWdlIiwiZm9vdGVyTGlua3MiLCJBbXBTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJpc0luQW1wTW9kZSIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsImluQW1wTW9kZSIsImhlYWQiLCJjaGlsZCIsImxpc3QiLCJmcmFnbWVudExpc3QiLCJNRVRBVFlQRVMiLCJrZXlzIiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5Iiwia2V5IiwiaSIsImxlbiIsIm1ldGF0eXBlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiaGVhZEVsZW1lbnRzIiwiaGVhZEVsZW1lbnRDaGlsZHJlbiIsImhlYWRFbGVtZW50IiwiZGVmYXVsdEhlYWQiLCJwcm9wcyIsInVuaXF1ZSIsImMiLCJwcm9jZXNzIiwiYW1wU3RhdGUiLCJoZWFkTWFuYWdlciIsIkhlYWQiLCJpc1NlcnZlciIsImNvbnN0cnVjdG9yIiwiX2hhc0hlYWRNYW5hZ2VyIiwiZW1pdENoYW5nZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJGZWF0dXJlQ2FyZCIsInRpdGxlIiwiY2hpbGRyZW4iLCJpY29uIiwiZmVhdHVyZUNhcmQiLCJmZWF0dXJlQ2FyZEltYWdlIiwiU2VjdGlvbkhlYWRlciIsImNlbnRlciIsInNlY3Rpb25IZWFkZXIiLCJjZW50ZXJlZCIsIkZlYXR1cmVTZWN0aW9uIiwiY2xhc3NOYW1lIiwiaW1hZ2VTcmMiLCJpbWFnZUFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidmFsdWVTZWN0aW9uIiwiaW1hZ2VQYW5lbCIsImltYWdlQ29udGFpbmVyIiwiaW5mb1BhbmVsIiwiSG9tZSIsImNvbnRhaW5lciIsImJvZHlDb250YWluZXIiLCJtYWluIiwiaGVybyIsImhlcm9UZXh0Q29udGFpbmVyIiwiaGVyb1RpdGxlIiwiaGVyb1N1YnRpdGxlIiwicHJvZHVjdEltYWdlQ29udGFpbmVyIiwicHJvZHVjdEltYWdlIiwidXNlcnNCYW5uZXIiLCJ1c2Vyc0Jhbm5lclRleHQiLCJ1c2Vyc0xpc3QiLCJ1c2Vyc0xvZ29XcmFwcGVyIiwiZGl2aWRlckhvcml6b250YWwiLCJmZWF0dXJlc1RhZ2xpbmUiLCJzdHJlbmd0aGVuUmVsYXRpb25zaGlwc1BhbmVsIiwiZW5nYWdlUGFuZWwiLCJvbmxpbmVEb25hdGlvbnNQYW5lbCIsImZlYXR1cmVzU2VjdGlvbiIsImZlYXR1cmVzVGl0bGVDb250YWluZXIiLCJmZWF0dXJlc1N1YlRpdGxlIiwiZmVhdHVyZXNHcmlkIiwiZmluYWxDdGFQYW5lbCIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLHdKQUFuQjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUs7QUFBQSxTQUFJRixVQUFVLENBQUNHLElBQVgsQ0FBZ0JDLE1BQU0sQ0FBQ0YsS0FBRCxDQUFOLENBQWNHLFdBQWQsRUFBaEIsQ0FBSjtBQUFBLENBQTNCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUNqQkwsS0FEaUI7QUFBQSxNQUNWTSxRQURVOztBQUFBLG1CQUVVRCxzREFBUSxDQUFDLEVBQUQsQ0FGbEI7QUFBQSxNQUVqQkUsU0FGaUI7QUFBQSxNQUVOQyxZQUZNOztBQUFBLG1CQUdRSCxzREFBUSxDQUFDLEVBQUQsQ0FIaEI7QUFBQSxNQUdqQkksUUFIaUI7QUFBQSxNQUdQQyxXQUhPOztBQUFBLG1CQUlnQkwsc0RBQVEsQ0FBQyxFQUFELENBSnhCO0FBQUEsTUFJakJNLFlBSmlCO0FBQUEsTUFJSEMsZUFKRzs7QUFLeEIsTUFBTUMsS0FBSyxHQUFHLENBQUMsRUFBRWQsYUFBYSxDQUFDQyxLQUFELENBQWIsSUFBd0JPLFNBQXhCLElBQXFDRSxRQUFyQyxJQUFpREUsWUFBbkQsQ0FBZjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFRywrREFBTSxDQUFDQyxZQUF2QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCwrREFBTSxDQUFDRSxhQUF2QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBSyxpQkFBUyxFQUFFRiwrREFBTSxDQUFDRyxXQUF2QjtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBRUgsK0RBQU0sQ0FBQ0ksV0FEcEI7QUFFRSxvQkFBVSxFQUFDLFlBRmI7QUFHRSxnQkFBTSxFQUFDLDhGQUhUO0FBSUUsZ0JBQU0sRUFBQyxNQUpUO0FBS0UsZ0JBQU0sRUFBQyxRQUxUO0FBQUEsa0NBT0U7QUFBSyxxQkFBUyxFQUFFSiwrREFBTSxDQUFDSyxRQUF2QjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBRUwsK0RBQU0sQ0FBQ00sYUFBdkI7QUFBQSxzQ0FDRTtBQUFPLHVCQUFPLEVBQUMsV0FBZjtBQUEyQixrQkFBRSxFQUFDLGdCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQ0Usb0JBQUksRUFBQyxNQURQO0FBRUUsb0JBQUksRUFBQyxPQUZQO0FBR0Usa0JBQUUsRUFBQyxXQUhMO0FBSUUsMkJBQVcsRUFBQyxPQUpkO0FBS0UseUJBQVMsRUFBRSxHQUxiO0FBTUUseUJBQVMsRUFBRSxDQU5iO0FBT0UsbUNBQWdCLGdCQVBsQjtBQVFFLGlDQUFjLE1BUmhCO0FBU0Usd0JBQVEsTUFUVjtBQVVFLHFCQUFLLEVBQUViLFNBVlQ7QUFXRSx3QkFBUSxFQUFFLGtCQUFBYyxDQUFDO0FBQUEseUJBQUliLFlBQVksQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQTtBQVhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBbUJFO0FBQUssdUJBQVMsRUFBRVQsK0RBQU0sQ0FBQ00sYUFBdkI7QUFBQSxzQ0FDRTtBQUFPLHVCQUFPLEVBQUMsV0FBZjtBQUEyQixrQkFBRSxFQUFDLGVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFDRSxvQkFBSSxFQUFDLE1BRFA7QUFFRSxvQkFBSSxFQUFDLE9BRlA7QUFHRSxrQkFBRSxFQUFDLFdBSEw7QUFJRSwyQkFBVyxFQUFDLFVBSmQ7QUFLRSx5QkFBUyxFQUFFLEdBTGI7QUFNRSx5QkFBUyxFQUFFLENBTmI7QUFPRSxtQ0FBZ0IsZUFQbEI7QUFRRSxpQ0FBYyxNQVJoQjtBQVNFLHdCQUFRLE1BVFY7QUFVRSxxQkFBSyxFQUFFWCxRQVZUO0FBV0Usd0JBQVEsRUFBRSxrQkFBQVksQ0FBQztBQUFBLHlCQUFJWCxXQUFXLENBQUNXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQVhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUE2Q0U7QUFBSyxxQkFBUyxFQUFFVCwrREFBTSxDQUFDSyxRQUF2QjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBRUwsK0RBQU0sQ0FBQ1UsYUFBdkI7QUFBQSxzQ0FDRTtBQUFPLHVCQUFPLEVBQUMsV0FBZjtBQUEyQixrQkFBRSxFQUFDLG1CQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQ0Usb0JBQUksRUFBQyxPQURQO0FBRUUsa0JBQUUsRUFBQyxXQUZMO0FBR0Usb0JBQUksRUFBQyxPQUhQO0FBSUUsMkJBQVcsRUFBQyxtQkFKZDtBQUtFLHlCQUFTLEVBQUUsR0FMYjtBQU1FLHlCQUFTLEVBQUUsQ0FOYjtBQU9FLG1DQUFnQixtQkFQbEI7QUFRRSxpQ0FBYyxNQVJoQjtBQVNFLHdCQUFRLE1BVFY7QUFVRSxxQkFBSyxFQUFFeEIsS0FWVDtBQVdFLHdCQUFRLEVBQUUsa0JBQUFxQixDQUFDO0FBQUEseUJBQUlmLFFBQVEsQ0FBQ2UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWjtBQUFBO0FBWGI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdDRixlQWlFRTtBQUFLLHFCQUFTLEVBQUVULCtEQUFNLENBQUNLLFFBQXZCO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFFTCwrREFBTSxDQUFDVSxhQUF2QjtBQUFBLHNDQUNFO0FBQU8sdUJBQU8sRUFBQyxTQUFmO0FBQXlCLGtCQUFFLEVBQUMsdUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFDRSxvQkFBSSxFQUFDLE1BRFA7QUFFRSxrQkFBRSxFQUFDLFNBRkw7QUFHRSxvQkFBSSxFQUFDLEtBSFA7QUFJRSwyQkFBVyxFQUFDLFVBSmQ7QUFLRSx5QkFBUyxFQUFFLEdBTGI7QUFNRSx5QkFBUyxFQUFFLENBTmI7QUFPRSxtQ0FBZ0IsdUJBUGxCO0FBUUUsaUNBQWMsTUFSaEI7QUFTRSx3QkFBUSxNQVRWO0FBVUUscUJBQUssRUFBRWIsWUFWVDtBQVdFLHdCQUFRLEVBQUUsa0JBQUFVLENBQUM7QUFBQSx5QkFBSVQsZUFBZSxDQUFDUyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUFBO0FBWGI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpFRixlQXFGRTtBQUFLLGlCQUFLLEVBQUU7QUFBRUUsc0JBQVEsRUFBRSxVQUFaO0FBQXdCQyxrQkFBSSxFQUFFLENBQUM7QUFBL0IsYUFBWjtBQUFtRCwyQkFBWSxNQUEvRDtBQUFBLG1DQUNFO0FBQ0Usa0JBQUksRUFBQyxNQURQO0FBRUUsa0JBQUksRUFBQyx3Q0FGUDtBQUdFLHNCQUFRLEVBQUM7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyRkYsZUE0RkU7QUFBUSxxQkFBUyxFQUFFQyxpREFBVSxDQUFDLEtBQUQsRUFBUSxhQUFSLEVBQXVCLENBQUNkLEtBQUQsSUFBVSxjQUFqQyxDQUE3QjtBQUErRSxnQkFBSSxFQUFDLFFBQXBGO0FBQTZGLG9CQUFRLEVBQUUsQ0FBQ0EsS0FBeEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwR0QsQ0FoSEQ7O0dBQU1ULFc7O0tBQUFBLFc7QUFrSFNBLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSEEsVUFBVSxtQkFBTyxDQUFDLG1OQUF3RztBQUMxSCwwQkFBMEIsbUJBQU8sQ0FBQyw2a0JBQXdVOztBQUUxVzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSw2a0JBQXdVO0FBQzlVO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsNmtCQUF3VTs7QUFFbFc7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7O0FBRUEsSUFBTXdCLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsc0JBQ0U7QUFBUSxhQUFTLEVBQUVkLGdFQUFNLENBQUNlLE1BQTFCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVmLGdFQUFNLENBQUNnQixhQUF2QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRWhCLGdFQUFNLENBQUNpQixVQUF2QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRWpCLGdFQUFNLENBQUNrQixlQUF2QjtBQUF3QyxhQUFHLEVBQUMseUJBQTVDO0FBQXNFLGVBQUssRUFBRSxFQUE3RTtBQUFpRixnQkFBTSxFQUFFLEVBQXpGO0FBQTZGLGFBQUcsRUFBQztBQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFLLGlCQUFTLEVBQUVsQixnRUFBTSxDQUFDbUIsV0FBdkI7QUFBQSxnQ0FDRTtBQUFHLGNBQUksRUFBQyw2Q0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUcsY0FBSSxFQUFDLHdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBZkQ7O0tBQU1MLE07QUFpQlNBLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7O0FDVkEsdUJBQXVCLG1CQUFPLENBQUMscUZBQW9COztBQUVuRDtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNQQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDJCOzs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7O0FBRUEsa0M7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7OztBQ0pBLGNBQWMsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXJELDRCQUE0QixtQkFBTyxDQUFDLCtGQUF5Qjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0Qzs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDVEEsd0JBQXdCLG1CQUFPLENBQUMsdUZBQXFCOztBQUVyRCxzQkFBc0IsbUJBQU8sQ0FBQyxtRkFBbUI7O0FBRWpELGlDQUFpQyxtQkFBTyxDQUFDLHlHQUE4Qjs7QUFFdkUsd0JBQXdCLG1CQUFPLENBQUMsdUZBQXFCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7OztBQ2hCQSx1QkFBdUIsbUJBQU8sQ0FBQyxxRkFBb0I7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkM7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSyxLQUE2QjtBQUNsQztBQUNBO0FBQ0EsRUFBRSxVQUFVLElBQTRFO0FBQ3hGO0FBQ0EsRUFBRSxpQ0FBcUIsRUFBRSxtQ0FBRTtBQUMzQjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLEVBQUUsTUFBTSxFQUVOO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ25EWSxzQ0FBc0Msc0JBQXNCO0FBQ3pFLHlDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsMENBQXFEO0FBQzVFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYSxpQ0FBaUMsU0FBUywyQkFBMkIsOEJBQThCO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGVBQWUsR0FBRyxxQ0FBcUMsY0FBYyxpQ0FBaUMsc0NBQXNDLCtDQUErQztBQUN2UCw4RUFBOEUsSUFBSTtBQUNsRjtBQUNBLDhDQUE4QyxTQUFTO0FBQ3ZELG1CQUFtQiwwQkFBMEIsdUJBQXVCLEdBQUcscUJBQXFCLDBDQUEwQyxjQUFjLFlBQVkscUJBQXFCLEtBQUssMkNBQTJDLFNBQVMsUUFBUSxlQUFlLG9DQUFvQyxvQkFBb0IscUJBQXFCLFlBQVksY0FBYyxLQUFLLG1CQUFtQixtREFBbUQsOEJBQThCLG9CQUFvQixHQUFHLEdBQUcsTUFBTSxFQUFFLHVCQUF1Qiw2Q0FBNkMsV0FBVyw2Q0FBNkMsZUFBZSxnQ0FBZ0MsaUNBQWlDLEtBQUssa0JBQWtCLHNEQUFzRCxHQUFHLDhCQUE4QixvQkFBb0IscUNBQXFDLDRDQUE0Qyx3Q0FBd0MsMENBQTBDO0FBQ3grQixLQUFzQyxDQUFDLHNCQUFpQixDQUFDLFNBQUksQ0FBQyxVQUFVLHlCQUF5QixzQ0FBc0MseUNBQXlDLEVBQUUsdUNBQXVDLHVCQUF1QixLQUFLLCtDQUErQyxZQUFZLDRIQUE0SCwyQkFBMkIsY0FBYyxtQ0FBbUM7QUFDeGYsNEJBQTRCLGNBQWMscUNBQXFDLG9FQUFvRSxtQkFBbUIsMkNBQTJDLDZCQUE2QiwrQ0FBK0MsR0FBRyxxREFBcUQsd0NBQXdDLFVBQVUsRUFBRSxFQUFFLFNBQVMsVUFBVTtBQUM5Wiw4Q0FBOEMsaURBQWlELEtBQUssMkNBQTJDLGtDQUFrQyxzQkFBc0Isc0NBQXNDLHNCQUFzQiwrQ0FBK0MsS0FBSyw4QkFBOEIsdUNBQXVDLGdCQUFnQixzQkFBc0IsOEJBQThCLFVBQVUsbUNBQW1DLEtBQUssZ0NBQWdDLHlDQUF5QyxtREFBbUQsU0FBUyw4REFBOEQsTUFBTTtBQUMzckIsOENBQThDLDhCQUE4QixLQUFLLHdCQUF3QixxQ0FBcUMsa0RBQWtELG1CQUFtQix1QkFBdUIsK0JBQStCLFVBQVUsV0FBVyxXQUFXLHNCQUFzQixvQ0FBb0MseURBQXlELDZEQUE2RCw2REFBNkQsS0FBSyxrQ0FBa0MsMkNBQTJDLFlBQVksNkJBQTZCLFlBQVksb0NBQW9DLFdBQVcscUZBQXFGLFFBQVEsb0JBQW9CLEtBQUssYUFBYSxnQ0FBZ0Msb0JBQW9CO0FBQ240QjtBQUNBLDZEQUE2RCw2QkFBNkIsY0FBYywrQ0FBK0MsZ0NBQWdDLG9CQUFvQiwrREFBK0QsUUFBUSxZQUFZLHlCQUF5QixLQUFLLG9DQUFvQyw2Q0FBNkMsaUNBQWlDLHVEQUF1RCxZQUFZLHlCQUF5QixLQUFLLG9DQUFvQyw2Q0FBNkMsc0NBQXNDLDZCQUE2Qiw4QkFBOEI7QUFDanNCLG9EOzs7Ozs7Ozs7OztBQ2hCQSwyRUFBMEIsYUFBYSxPQUFPLGdCQUFnQixzQkFBc0IsU0FBUywrQkFBK0IsNEJBQTRCLGtDQUFrQyxTQUFTLCtCQUErQixjQUFjLEdBQUcsU0FBUyxZQUFZLG9CQUFvQix3QkFBd0IsZ0JBQWdCLFNBQVMsTUFBTSxZQUFZLGNBQWMsS0FBSyxpQkFBaUIsWUFBWSxZQUFZLFlBQVksV0FBVyxLQUFLLHNCQUFzQixlQUFlLFNBQVMsTUFBTSxVQUFVLE9BQU8sS0FBSyx3Q0FBd0MsWUFBWSxVQUFVLHFDQUFxQyxlQUFlLFdBQVcsT0FBTyxTQUFTLGdDQUFnQyxtQkFBbUIsZ0NBQWdDLGdFQUFnRSxFQUFFLDJDQUEyQyxxQkFBcUIsc0JBQXNCLDREQUE0RCw4Q0FBOEMsY0FBYyxtQkFBbUIsZ0NBQWdDLFNBQVMsZ0NBQWdDLFNBQVMsb0JBQW9CLFlBQVksWUFBWSxXQUFXLElBQUksc0NBQXNDLFFBQVEsUUFBUSxpQkFBaUIsaUJBQWlCLHFDQUFxQyxnQ0FBZ0MsRzs7Ozs7Ozs7Ozs7O0FDQTl5QztBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNEJBQTRCLGtEQUFrRCx1QkFBdUIscUJBQXFCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLG1CQUFtQixxQkFBcUIsZ0JBQWdCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLG9CQUFvQixHQUFHLG1DQUFtQyx1QkFBdUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsR0FBRyxxQ0FBcUMsOEJBQThCLEdBQUcseUNBQXlDLDhCQUE4QixHQUFHLHNDQUFzQyw4QkFBOEIsbUJBQW1CLEdBQUcsMENBQTBDLDhCQUE4QixHQUFHLDJDQUEyQyx1QkFBdUIsZ0JBQWdCLGdCQUFnQiw4QkFBOEIsR0FBRyxxQ0FBcUMsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsZ0VBQWdFLGtCQUFrQixtQ0FBbUMsd0JBQXdCLGdCQUFnQixHQUFHLDhHQUE4Ryx1QkFBdUIsR0FBRyw2R0FBNkcsc0JBQXNCLEdBQUcsMENBQTBDLGVBQWUsY0FBYyxnQkFBZ0IscUJBQXFCLEdBQUcsdUNBQXVDLHFCQUFxQixHQUFHLHVDQUF1QyxnQkFBZ0IsR0FBRyx1RkFBdUYsZ0JBQWdCLG1CQUFtQixvQkFBb0IscUJBQXFCLHFCQUFxQixHQUFHLHFGQUFxRixxQ0FBcUMsb0JBQW9CLDhCQUE4Qix1QkFBdUIsZ0JBQWdCLHVCQUF1QixvQkFBb0Isc0JBQXNCLG1CQUFtQixHQUFHLGlHQUFpRywwQkFBMEIsR0FBRyxpR0FBaUcsa0JBQWtCLGlEQUFpRCwwQkFBMEIsR0FBRyxnSUFBZ0ksbUJBQW1CLEdBQUcsK0dBQStHLG1CQUFtQixHQUFHLHNDQUFzQyxrQkFBa0IsNEJBQTRCLHNCQUFzQixHQUFHLHNFQUFzRSxpQkFBaUIsbUJBQW1CLCtDQUErQyw4QkFBOEIsdUJBQXVCLHFCQUFxQix1QkFBdUIsMkJBQTJCLEdBQUcseUVBQXlFLGtCQUFrQix3QkFBd0IsdUJBQXVCLG9CQUFvQixxQkFBcUIscUJBQXFCLEdBQUcsd0VBQXdFLGtCQUFrQix3QkFBd0IsdUJBQXVCLGdCQUFnQixHQUFHLE9BQU8sc01BQXNNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sVUFBVSxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLDBDQUEwQyxxQkFBcUIsa0RBQWtELHVCQUF1QixxQkFBcUIsdUJBQXVCLHVCQUF1QixvQkFBb0IsbUJBQW1CLHFCQUFxQixnQkFBZ0Isd0JBQXdCLG9CQUFvQixHQUFHLDJCQUEyQix1QkFBdUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsR0FBRyxnQ0FBZ0Msb0NBQW9DLGVBQWUsbUNBQW1DLEtBQUssR0FBRyxtQkFBbUIsOEJBQThCLG1CQUFtQixlQUFlLGdDQUFnQyxLQUFLLEdBQUcsV0FBVyxrREFBa0QsdUJBQXVCLHFCQUFxQix1QkFBdUIsdUJBQXVCLG9CQUFvQixtQkFBbUIscUJBQXFCLGdCQUFnQixzQkFBc0Isb0JBQW9CLEdBQUcsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLHFCQUFxQixHQUFHLGtCQUFrQiw4QkFBOEIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsbUJBQW1CLDhCQUE4QixtQkFBbUIsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUcsd0JBQXdCLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLDhCQUE4QixHQUFHLGtCQUFrQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRywwQkFBMEIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsZ0JBQWdCLEdBQUcscURBQXFELHVCQUF1QixHQUFHLG9EQUFvRCxzQkFBc0IsR0FBRyx1QkFBdUIsZUFBZSxjQUFjLGdCQUFnQixxQkFBcUIsR0FBRyxvQkFBb0IscUJBQXFCLEdBQUcsb0JBQW9CLGdCQUFnQixHQUFHLGlEQUFpRCxnQkFBZ0IsbUJBQW1CLG9CQUFvQixxQkFBcUIscUJBQXFCLEdBQUcsK0NBQStDLHFDQUFxQyxvQkFBb0IsOEJBQThCLHVCQUF1QixnQkFBZ0IsdUJBQXVCLG9CQUFvQixzQkFBc0IsbUJBQW1CLEdBQUcsMkRBQTJELDBCQUEwQixHQUFHLDJEQUEyRCxrQkFBa0IsaURBQWlELDBCQUEwQixHQUFHLHlFQUF5RSxtQkFBbUIsR0FBRyxtQkFBbUIsa0JBQWtCLDRCQUE0QixzQkFBc0IsR0FBRyxnQ0FBZ0MsaUJBQWlCLG1CQUFtQiwrQ0FBK0MsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDJCQUEyQixHQUFHLG1DQUFtQyxrQkFBa0Isd0JBQXdCLHVCQUF1QixvQkFBb0IscUJBQXFCLHFCQUFxQixHQUFHLGtDQUFrQyxrQkFBa0Isd0JBQXdCLHVCQUF1QixnQkFBZ0IsR0FBRywrQ0FBK0MsMkJBQTJCLHNCQUFzQixrQkFBa0IsY0FBYyx1QkFBdUIsdUNBQXVDLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLDhCQUE4QixHQUFHLHFCQUFxQjtBQUN6NlE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHVCQUF1QixrREFBa0QsdUJBQXVCLHFCQUFxQix1QkFBdUIsdUJBQXVCLG9CQUFvQixtQkFBbUIscUJBQXFCLGdCQUFnQiw4QkFBOEIsOEJBQThCLDhCQUE4QixvQkFBb0IsR0FBRyw4QkFBOEIsdUJBQXVCLHVCQUF1QixvQkFBb0IscUJBQXFCLEdBQUcsZ0NBQWdDLDhCQUE4QixHQUFHLG9DQUFvQyw4QkFBOEIsR0FBRyxpQ0FBaUMsOEJBQThCLG1CQUFtQixHQUFHLHFDQUFxQyw4QkFBOEIsR0FBRyxzQ0FBc0MsdUJBQXVCLGdCQUFnQixnQkFBZ0IsOEJBQThCLEdBQUcsMkJBQTJCLGdCQUFnQixtREFBbUQsR0FBRyw4QkFBOEIsMkJBQTJCLHFCQUFxQixLQUFLLEdBQUcsOEJBQThCLDJCQUEyQix3QkFBd0IsS0FBSyxHQUFHLHNEQUFzRCxrQkFBa0Isa0JBQWtCLG1DQUFtQyx3QkFBd0IsZ0JBQWdCLEdBQUcsNkJBQTZCLHdEQUF3RCw2QkFBNkIsb0NBQW9DLEtBQUssR0FBRyxnRkFBZ0Ysa0JBQWtCLHdCQUF3QixHQUFHLCtHQUErRyx1QkFBdUIsZ0JBQWdCLGlCQUFpQixHQUFHLHNEQUFzRCxrQkFBa0IsdUNBQXVDLEdBQUcsNERBQTRELG1CQUFtQixHQUFHLE9BQU8sOFBBQThQLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sT0FBTyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLDBDQUEwQyxxQkFBcUIsa0RBQWtELHVCQUF1QixxQkFBcUIsdUJBQXVCLHVCQUF1QixvQkFBb0IsbUJBQW1CLHFCQUFxQixnQkFBZ0Isd0JBQXdCLG9CQUFvQixHQUFHLDJCQUEyQix1QkFBdUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsR0FBRyxnQ0FBZ0Msb0NBQW9DLGVBQWUsbUNBQW1DLEtBQUssR0FBRyxtQkFBbUIsOEJBQThCLG1CQUFtQixlQUFlLGdDQUFnQyxLQUFLLEdBQUcsV0FBVyxrREFBa0QsdUJBQXVCLHFCQUFxQix1QkFBdUIsdUJBQXVCLG9CQUFvQixtQkFBbUIscUJBQXFCLGdCQUFnQixzQkFBc0Isb0JBQW9CLEdBQUcsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLHFCQUFxQixHQUFHLGtCQUFrQiw4QkFBOEIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsbUJBQW1CLDhCQUE4QixtQkFBbUIsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUcsd0JBQXdCLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLDhCQUE4QixHQUFHLGFBQWEsZ0JBQWdCLG1EQUFtRCxHQUFHLDhCQUE4QixhQUFhLHFCQUFxQixLQUFLLEdBQUcsOEJBQThCLGFBQWEsd0JBQXdCLEtBQUssR0FBRywwQkFBMEIsa0JBQWtCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLGdCQUFnQixHQUFHLDZCQUE2Qiw0QkFBNEIsNkJBQTZCLG9DQUFvQyxLQUFLLEdBQUcsc0NBQXNDLGtCQUFrQix3QkFBd0IsR0FBRyx1REFBdUQsdUJBQXVCLGdCQUFnQixpQkFBaUIsR0FBRywwQkFBMEIsa0JBQWtCLHVDQUF1QyxHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRywrQ0FBK0MsMkJBQTJCLHNCQUFzQixrQkFBa0IsY0FBYyx1QkFBdUIsdUNBQXVDLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLDhCQUE4QixHQUFHLHdCQUF3QixnaENBQWdoQywrRkFBK0YsaUxBQWlMLHNOQUFzTix1WkFBdVoseU9BQXlPLCtEQUErRCw0R0FBNEcsaUVBQWlFLCtHQUErRyxvQ0FBb0MsZ0VBQWdFLHlGQUF5Riw4UEFBOFAsbUNBQW1DLGVBQWUseUJBQXlCLFVBQVUsUUFBUSx5Q0FBeUMsdUJBQXVCLFFBQVEsd0NBQXdDLHlVQUF5VSwwQ0FBMEMsbUNBQW1DLGVBQWUseUJBQXlCLFVBQVUsUUFBUSx5Q0FBeUMsdUJBQXVCLFFBQVEsOElBQThJLHlDQUF5QyxvQ0FBb0MsZUFBZSx5QkFBeUIsVUFBVSxRQUFRLDhFQUE4RSxvVEFBb1QsMENBQTBDLDRDQUE0Qyw2Q0FBNkMsZUFBZSx5QkFBeUIsVUFBVSxRQUFRLDJDQUEyQyx3QkFBd0IsU0FBUywwTEFBMEwsMENBQTBDLDRDQUE0QywrQ0FBK0MsZUFBZSx5QkFBeUIsVUFBVSxRQUFRLHlHQUF5RyxtUUFBbVEsT0FBTyw2REFBNkQsb0NBQW9DLHNCQUFzQixLQUFLLFFBQVEscUJBQXFCLGlCQUFpQixLQUFLLHVCQUF1QixHQUFHLDJIQUEySCxnT0FBZ08sT0FBTyx1REFBdUQsMkJBQTJCLEdBQUcsOEpBQThKLGdIQUFnSCxRQUFRLDREQUE0RCxRQUFRLDRJQUE0SSwrRUFBK0UsMENBQTBDLHFCQUFxQix3QkFBd0IsaUNBQWlDLEtBQUssdUNBQXVDLDJEQUEyRCx1REFBdUQsa0RBQWtELDREQUE0RCxvTUFBb00sd0JBQXdCLFNBQVMsT0FBTywyREFBMkQsc0JBQXNCLE9BQU8sS0FBSyxtQkFBbUIsR0FBRyxpSkFBaUosT0FBTyxzRUFBc0UsT0FBTywrRkFBK0YseURBQXlELDZDQUE2QywwQkFBMEIsT0FBTyxLQUFLLHVYQUF1WCxrREFBa0QsWUFBWSxLQUFLLEdBQUcsMkZBQTJGLE9BQU8saUVBQWlFLE9BQU8sNERBQTRELE9BQU8sd0hBQXdILHVEQUF1RCxzRUFBc0Usd0JBQXdCLDZDQUE2QyxvQ0FBb0MsS0FBSyx5QkFBeUIsR0FBRywyRUFBMkUsT0FBTyx5Q0FBeUMsT0FBTyxvRUFBb0UsaUVBQWlFLEdBQUcsdUZBQXVGLE9BQU8sNkRBQTZELE9BQU8sNERBQTRELE9BQU8saUZBQWlGLHVEQUF1RCw0RUFBNEUsNkNBQTZDLDRDQUE0QyxLQUFLLFFBQVEsZ0NBQWdDLEtBQUssd0RBQXdELHlCQUF5QiwrWEFBK1gsNENBQTRDLGFBQWEsS0FBSyxLQUFLLDRCQUE0QixpQ0FBaUMsS0FBSyw0QkFBNEIsaUNBQWlDLEtBQUsscUJBQXFCLEdBQUcsOEZBQThGLE9BQU8sc0RBQXNELE9BQU8sb0VBQW9FLHlMQUF5TCx1REFBdUQsS0FBSyxzREFBc0QsaUVBQWlFLDhDQUE4Qyx5REFBeUQsa0JBQWtCLFFBQVEsR0FBRyxXQUFXLElBQUksT0FBTyxHQUFHLEdBQUcsMkdBQTJHLEtBQUssb0NBQW9DLE9BQU8sdUNBQXVDLE9BQU8scURBQXFELEtBQUssMkVBQTJFLDRDQUE0QyxpQkFBaUIsS0FBSyxrQkFBa0Isd0NBQXdDLCtDQUErQyxLQUFLLHNCQUFzQixHQUFHLDRKQUE0SixnQkFBZ0IsZ0RBQWdELE9BQU8sb0NBQW9DLHFDQUFxQyxxQkFBcUIsS0FBSyx1Q0FBdUMsMEVBQTBFLEtBQUssZ0RBQWdELGVBQWUsZUFBZSxzQ0FBc0MsK0ZBQStGLG9IQUFvSCxtQ0FBbUMsS0FBSyxpREFBaUQsNENBQTRDLDhFQUE4RSxzRkFBc0YsK0JBQStCLG1CQUFtQixPQUFPLHdCQUF3Qiw4REFBOEQsT0FBTyxRQUFRLDhCQUE4QixtRUFBbUUsT0FBTyxLQUFLLDRDQUE0QyxHQUFHLHlEQUF5RCxPQUFPLDRDQUE0QyxPQUFPLDhEQUE4RCxPQUFPLDJFQUEyRSwwTEFBMEwsOENBQThDLGtDQUFrQyxNQUFNLEtBQUssS0FBSyw4Q0FBOEMsR0FBRyw0U0FBNFMsSUFBSSxzRkFBc0YsSUFBSSxtT0FBbU8sZUFBZSxpREFBaUQsOEJBQThCLFVBQVUsUUFBUSx5SkFBeUosZUFBZSw0Q0FBNEMsOEJBQThCLFVBQVUsUUFBUSwySEFBMkgsZUFBZSx3REFBd0QsOEJBQThCLFVBQVUsUUFBUSw2RUFBNkUsc0VBQXNFLGtEQUFrRCxvR0FBb0csd0ZBQXdGLGVBQWUsbUZBQW1GLDBEQUEwRCxHQUFHLDJMQUEyTCxRQUFRLGdJQUFnSSxFQUFFLGdHQUFnRyxFQUFFLHlGQUF5RixFQUFFLGlIQUFpSCxFQUFFLHNGQUFzRixFQUFFLHFHQUFxRyxFQUFFLHFDQUFxQyw0TEFBNEwsZUFBZSxLQUFLLDJEQUEyRCxlQUFlLCtDQUErQyxFQUFFLDJFQUEyRSxtQkFBbUIsU0FBUyxPQUFPLEtBQUssR0FBRyx1QkFBdUIsa0NBQWtDLG1DQUFtQyxxQkFBcUIsS0FBSyxvQ0FBb0Msd0JBQXdCLEtBQUssR0FBRyxxQkFBcUI7QUFDdjdyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHFCQUFxQixrREFBa0QsdUJBQXVCLHFCQUFxQix1QkFBdUIsdUJBQXVCLG9CQUFvQixtQkFBbUIscUJBQXFCLGdCQUFnQiw4QkFBOEIsOEJBQThCLDhCQUE4QixvQkFBb0IsR0FBRyw0QkFBNEIsdUJBQXVCLHVCQUF1QixvQkFBb0IscUJBQXFCLEdBQUcsOEJBQThCLDhCQUE4QixHQUFHLGtDQUFrQyw4QkFBOEIsR0FBRywrQkFBK0IsOEJBQThCLG1CQUFtQixHQUFHLG1DQUFtQyw4QkFBOEIsR0FBRyxvQ0FBb0MsdUJBQXVCLGdCQUFnQixnQkFBZ0IsOEJBQThCLEdBQUcsNEJBQTRCLGtCQUFrQixrQkFBa0IsaURBQWlELGlDQUFpQyxtQkFBbUIsR0FBRyxnQ0FBZ0MsdUJBQXVCLGVBQWUsa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyx1QkFBdUIsb0JBQW9CLGdCQUFnQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRyw4QkFBOEIsdUJBQXVCLGlCQUFpQixLQUFLLEdBQUcsdUJBQXVCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLHFCQUFxQix1QkFBdUIsR0FBRyw2QkFBNkIsdUJBQXVCLHVCQUF1QixzQkFBc0IsS0FBSyxHQUFHLDhCQUE4QixzREFBc0Qsa0JBQWtCLHVCQUF1QixLQUFLLEdBQUcsOEJBQThCLDhDQUE4QyxvQkFBb0IsdUJBQXVCLHNCQUFzQix1QkFBdUIsdUJBQXVCLEtBQUssR0FBRywrQ0FBK0MscUJBQXFCLG9CQUFvQixxQkFBcUIsR0FBRyw2QkFBNkIsaURBQWlELHNCQUFzQixLQUFLLEdBQUcsdUJBQXVCLHFCQUFxQixHQUFHLHdDQUF3QyxxQkFBcUIscUJBQXFCLEdBQUcsOEJBQThCLHdDQUF3QyxzQkFBc0IsS0FBSyxHQUFHLDZCQUE2Qix3Q0FBd0MsdUJBQXVCLEtBQUssR0FBRyxnRUFBZ0UsaUJBQWlCLGdCQUFnQix1QkFBdUIsR0FBRyw4QkFBOEIsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLEdBQUcseURBQXlELG9CQUFvQixnQkFBZ0IsR0FBRyxtREFBbUQsa0JBQWtCLHdCQUF3QixvQkFBb0Isa0NBQWtDLHFCQUFxQix3QkFBd0IsZ0JBQWdCLEdBQUcsaUZBQWlGLGtCQUFrQix3QkFBd0IsNEJBQTRCLG1CQUFtQixxQkFBcUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLHdCQUF3QixvQkFBb0IscUJBQXFCLEdBQUcsNkJBQTZCLGdDQUFnQyxzQkFBc0IsS0FBSyxHQUFHLG1EQUFtRCx1QkFBdUIsR0FBRyxrQ0FBa0Msa0JBQWtCLDJCQUEyQix3QkFBd0IsOEJBQThCLGdCQUFnQixvQkFBb0IsR0FBRyxvRUFBb0UsdUJBQXVCLEdBQUcsOEJBQThCLHNFQUFzRSxrQkFBa0IsdUJBQXVCLEtBQUssR0FBRyxrR0FBa0csb0JBQW9CLHFCQUFxQixHQUFHLDBEQUEwRCxrQkFBa0Isb0JBQW9CLDRCQUE0QixxQkFBcUIsc0JBQXNCLEdBQUcsOEJBQThCLHFDQUFxQyxrREFBa0Qsd0JBQXdCLGlCQUFpQixpQkFBaUIsa0NBQWtDLGtCQUFrQiw4QkFBOEIsR0FBRyw2QkFBNkIsOEJBQThCLG9CQUFvQixLQUFLLEdBQUcsa0NBQWtDLDhCQUE4QixHQUFHLHNDQUFzQyxvQ0FBb0MsR0FBRyx3RUFBd0UsaUJBQWlCLEdBQUcsMERBQTBELHVCQUF1QixnQkFBZ0IsaUJBQWlCLEdBQUcsK0JBQStCLDZCQUE2QixvQkFBb0IscUJBQXFCLHFCQUFxQix5QkFBeUIsR0FBRyw4QkFBOEIsY0FBYyxvQkFBb0IscUJBQXFCLHFCQUFxQix5QkFBeUIsR0FBRyxrQ0FBa0Msc0JBQXNCLHlCQUF5QixxQkFBcUIsR0FBRyw2QkFBNkIsNkRBQTZELHNCQUFzQixLQUFLLEdBQUcsK0JBQStCLGtCQUFrQixtQ0FBbUMseUJBQXlCLGdCQUFnQixzQkFBc0IsaUJBQWlCLEdBQUcsOEJBQThCLCtCQUErQixpQ0FBaUMsOEJBQThCLEtBQUssR0FBRyxvREFBb0Qsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixxQkFBcUIsR0FBRyx3REFBd0QscUJBQXFCLEdBQUcsOEJBQThCLHNEQUFzRCxxQkFBcUIsc0JBQXNCLGtCQUFrQixLQUFLLEdBQUcsc0RBQXNELHFCQUFxQixrQkFBa0IsR0FBRyxzREFBc0QsbUJBQW1CLHFCQUFxQixHQUFHLHFEQUFxRCxrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLDhCQUE4Qix1REFBdUQsa0JBQWtCLEtBQUssR0FBRyxpRkFBaUYsaUJBQWlCLG9CQUFvQixHQUFHLHFGQUFxRixpQkFBaUIsZ0JBQWdCLEdBQUcsT0FBTyxvT0FBb08sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE9BQU8sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLE9BQU8sVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1EOztBQUVuRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFH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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0MiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0VtYWlsU2lnbnVwLm1vZHVsZS5zY3NzJztcblxuY29uc3QgZW1haWxSZWdleCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXG5jb25zdCB2YWxpZGF0ZUVtYWlsID0gZW1haWwgPT4gZW1haWxSZWdleC50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSk7XG5cbmNvbnN0IEVtYWlsU2lnbnVwID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtvcmdhbml6YXRpb24sIHNldE9yZ2FuaXphdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHZhbGlkID0gISEodmFsaWRhdGVFbWFpbChlbWFpbCkgJiYgZmlyc3ROYW1lICYmIGxhc3ROYW1lICYmIG9yZ2FuaXphdGlvbik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rRGVtb0Zvcm19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbG9hdGluZ1BhbmVsfT5cbiAgICAgICAgPGg1PlRyeSBQcm9zcHIgdG9kYXk8L2g1PlxuICAgICAgICA8cD5Cb29rIGEgZGVtbyB3aXRoIHVzIHRvIGxlYXJuIG1vcmUuPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1XcmFwcGVyfT5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRlbnR9XG4gICAgICAgICAgICBub1ZhbGlkYXRlPVwibm92YWxpZGF0ZVwiXG4gICAgICAgICAgICBhY3Rpb249XCJodHRwczovL3Byb3Nwci51czIwLmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PTlkYWI1N2RlY2YxZjQwM2EzOTgwMmQ0OTMmYW1wO2lkPWYxNDQ3NTQwYmZcIlxuICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGRSb3d9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dEhhbGZ9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWNlLUZOQU1FXCIgaWQ9XCJsYWJlbEZpcnN0TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZSAqXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJGTkFNRVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm1jZS1GTkFNRVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YWN5XCJcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjU1fVxuICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPXsxfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibGFiZWxGaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dEhhbGZ9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWNlLUxOQU1FXCIgaWQ9XCJsYWJlbExhc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICBMYXN0IE5hbWUgKlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiTE5BTUVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtY2UtTE5BTUVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCYXJ0bGV0dFwiXG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezI1NX1cbiAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17MX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImxhYmVsTGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldExhc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWVsZFJvd30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dElucHV0RnVsbH0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtY2UtRU1BSUxcIiBpZD1cImxhYmVsRW1haWxBZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzICpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibWNlLUVNQUlMXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJFTUFJTFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsQGFkZHJlc3MuY29tXCJcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjU1fVxuICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPXsxfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibGFiZWxFbWFpbEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWVsZFJvd30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dElucHV0RnVsbH0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtY2UtT1JHXCIgaWQ9XCJsYWJlbE9yZ2FuaXphdGlvbk5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIE9yZ2FuaXphdGlvbiBOYW1lICpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtY2UtT1JHXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJPUkdcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBQ01FIEluY1wiXG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezI1NX1cbiAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17MX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImxhYmVsT3JnYW5pemF0aW9uTmFtZVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e29yZ2FuaXphdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE9yZ2FuaXphdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IC01MDAxIH19IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImJfOWRhYjU3ZGVjZjFmNDAzYTM5ODAyZDQ5M19mMTQ0NzU0MGJmXCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2J0bicsICdidG4tcHJpbWFyeScsICF2YWxpZCAmJiAnYnRuLWRpc2FibGVkJyl9IHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IXZhbGlkfT5cbiAgICAgICAgICAgICAgUmVxdWVzdCBhIGRlbW9cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVtYWlsU2lnbnVwO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9FbWFpbFNpZ251cC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRW1haWxTaWdudXAubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9FbWFpbFNpZ251cC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvRm9vdGVyLm1vZHVsZS5zY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQ29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyTG9nb30+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJMb2dvSW1hZ2V9IHNyYz1cIi9wcm9zcHJfbG9nb192ZWN0b3Iuc3ZnXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBhbHQ9XCJQcm9zcHIgTG9nb1wiLz5cbiAgICAgICAgICA8ZGl2PlByb3NwciAtIERlc2lnbmVkIGluIENhbmFkYS48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyTGlua3N9PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9nZXRwcm9zcHIvXCI+TGlua2VkSW48L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpoZWxsb0Bwcm9zcHIuY2NcIj5Db250YWN0IHVzPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJCOlxcXFx3b3Jrc3BhY2VcXFxccHJvc3ByLWxhbmRpbmctcGFnZVxcXFxwYWdlc1xcXFxpbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9YCR7aWR9ICR7Y291bnR9YDtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goa2V5PT57c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhP2BAbWVkaWEgJHtvYmoubWVkaWF9IHske29iai5jc3N9fWA6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz1gXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwke2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSl9ICovYDt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT0oKT0+e3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPShsaXN0LG9wdGlvbnMpPT57b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5FbWFpbFNpZ251cF9idG5fXzFTY1NiIHtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLkVtYWlsU2lnbnVwX2J0bi1sYXJnZV9fMzlwY28ge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMjFweCAzMnB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLkVtYWlsU2lnbnVwX2J0bi1wcmltYXJ5X18ySGhqRiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MGYwO1xcbn1cXG4uRW1haWxTaWdudXBfYnRuLXByaW1hcnlfXzJIaGpGOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkZDY7XFxufVxcblxcbi5FbWFpbFNpZ251cF9idG4tZGlzYWJsZWRfXzF6dHFhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBjb2xvcjogI2E2YTZhNjtcXG59XFxuLkVtYWlsU2lnbnVwX2J0bi1kaXNhYmxlZF9fMXp0cWE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuLkVtYWlsU2lnbnVwX2RpdmlkZXJIb3Jpem9udGFsX18ya0xtViB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXG59XFxuXFxuLkVtYWlsU2lnbnVwX2Zvcm1Db250ZW50X18zc1RCWiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLkVtYWlsU2lnbnVwX2Zvcm1Db250ZW50X18zc1RCWiAuRW1haWxTaWdudXBfZmllbGRSb3dfXzZCeW44IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5FbWFpbFNpZ251cF9mb3JtQ29udGVudF9fM3NUQlogLkVtYWlsU2lnbnVwX2ZpZWxkUm93X182QnluOCAuRW1haWxTaWdudXBfdGV4dElucHV0SGFsZl9fMUJQUVY6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG4uRW1haWxTaWdudXBfZm9ybUNvbnRlbnRfXzNzVEJaIC5FbWFpbFNpZ251cF9maWVsZFJvd19fNkJ5bjggLkVtYWlsU2lnbnVwX3RleHRJbnB1dEhhbGZfXzFCUFFWOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxufVxcbi5FbWFpbFNpZ251cF9mb3JtQ29udGVudF9fM3NUQlogYnV0dG9uIHtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMzkycHg7XFxufVxcblxcbi5FbWFpbFNpZ251cF90ZXh0SW5wdXRIYWxmX18xQlBRViB7XFxuICBtYXgtd2lkdGg6IDE4NHB4O1xcbn1cXG5cXG4uRW1haWxTaWdudXBfdGV4dElucHV0RnVsbF9fSkNxUksge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5FbWFpbFNpZ251cF90ZXh0SW5wdXRIYWxmX18xQlBRViBsYWJlbCxcXG4uRW1haWxTaWdudXBfdGV4dElucHV0RnVsbF9fSkNxUksgbGFiZWwge1xcbiAgY29sb3I6ICM2NjY7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uRW1haWxTaWdudXBfdGV4dElucHV0SGFsZl9fMUJQUVYgaW5wdXQsXFxuLkVtYWlsU2lnbnVwX3RleHRJbnB1dEZ1bGxfX0pDcVJLIGlucHV0IHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2Q5ZDlkOTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBjb2xvcjogIzBkMGQwZDtcXG59XFxuLkVtYWlsU2lnbnVwX3RleHRJbnB1dEhhbGZfXzFCUFFWIGlucHV0OmhvdmVyLFxcbi5FbWFpbFNpZ251cF90ZXh0SW5wdXRGdWxsX19KQ3FSSyBpbnB1dDpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICMwMDcwZjA7XFxufVxcbi5FbWFpbFNpZ251cF90ZXh0SW5wdXRIYWxmX18xQlBRViBpbnB1dDpmb2N1cyxcXG4uRW1haWxTaWdudXBfdGV4dElucHV0RnVsbF9fSkNxUksgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDAsIDExMiwgMjQwLCAwLjIpO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3MGYwO1xcbn1cXG4uRW1haWxTaWdudXBfdGV4dElucHV0SGFsZl9fMUJQUVYgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCAuRW1haWxTaWdudXBfdGV4dElucHV0RnVsbF9fSkNxUksgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjYTZhNmE2O1xcbn1cXG4uRW1haWxTaWdudXBfdGV4dElucHV0SGFsZl9fMUJQUVYgaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbi5FbWFpbFNpZ251cF90ZXh0SW5wdXRGdWxsX19KQ3FSSyBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNhNmE2YTY7XFxufVxcblxcbi5FbWFpbFNpZ251cF9ib29rRGVtb0Zvcm1fX2JYUDJmIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDE2MHB4O1xcbn1cXG4uRW1haWxTaWdudXBfYm9va0RlbW9Gb3JtX19iWFAyZiAuRW1haWxTaWdudXBfZmxvYXRpbmdQYW5lbF9fWDhwNS0ge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjZDlkOWQ5O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmc6IDY0cHggNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5FbWFpbFNpZ251cF9ib29rRGVtb0Zvcm1fX2JYUDJmIC5FbWFpbFNpZ251cF9mbG9hdGluZ1BhbmVsX19YOHA1LSBoNSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uRW1haWxTaWdudXBfYm9va0RlbW9Gb3JtX19iWFAyZiAuRW1haWxTaWdudXBfZmxvYXRpbmdQYW5lbF9fWDhwNS0gcCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vc3R5bGVzL2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovL0VtYWlsU2lnbnVwLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vc3R5bGVzL2NvbXBvbmVudHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNFLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUNKRjs7QURTQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURXQTtFQUNFLHlCRTdCYTtBRHFCZjtBRFVFO0VBQ0UseUJFL0JRO0FEdUJaOztBRFlBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDVEY7QURXRTtFQUNFLHlCQUFBO0FDVEo7O0FFOUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FGaUNGOztBQXRDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF5Q0Y7QUF2Q0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUF5Q0o7QUF2Q0k7RUFDRSxrQkFBQTtBQXlDTjtBQXRDSTtFQUNFLGlCQUFBO0FBd0NOO0FBcENFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFzQ0o7O0FBbENBO0VBQ0UsZ0JBQUE7QUFxQ0Y7O0FBbENBO0VBQ0UsV0FBQTtBQXFDRjs7QUFoQ0U7O0VBQ0UsV0N0Q0c7RUR1Q0gsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBb0NKO0FBakNFOztFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ3ZESTtBRDJGUjtBQWxDSTs7RUFDRSxxQkM1RFM7QURpR2Y7QUFsQ0k7O0VBQ0UsYUFBQTtFQUNBLDRDQUFBO0VBQ0EscUJDbEVTO0FEdUdmO0FBbENJO0VBQ0UsY0FBQTtBQXFDTjtBQXRDSTs7RUFDRSxjQUFBO0FBcUNOOztBQWhDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBbUNGO0FBakNFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFtQ0o7QUFqQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBbUNOO0FBaENJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQ3BHQztBRHNJUFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdpbmRleCc7XFxuXFxuLy8gQmFzZVxcblxcbi5idG4ge1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjZmZmO1xcblxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8vIFNpemVcXG5cXG4uYnRuLWxhcmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDIxcHggMzJweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi8vIFByaW1hcnlcXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmx1ZTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ibHVlO1xcbiAgfVxcbn1cXG5cXG4uYnRuLWRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBjb2xvcjogI2E2YTZhNjtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgfVxcbn1cXG5cIixcIi5idG4ge1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tbGFyZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMjFweCAzMnB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDcwZjA7XFxufVxcbi5idG4tcHJpbWFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGQ2O1xcbn1cXG5cXG4uYnRuLWRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBjb2xvcjogI2E2YTZhNjtcXG59XFxuLmJ0bi1kaXNhYmxlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbn1cXG5cXG4uZGl2aWRlckhvcml6b250YWwge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxufVxcblxcbi5mb3JtQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcm1Db250ZW50IC5maWVsZFJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uZm9ybUNvbnRlbnQgLmZpZWxkUm93IC50ZXh0SW5wdXRIYWxmOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuLmZvcm1Db250ZW50IC5maWVsZFJvdyAudGV4dElucHV0SGFsZjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbn1cXG4uZm9ybUNvbnRlbnQgYnV0dG9uIHtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMzkycHg7XFxufVxcblxcbi50ZXh0SW5wdXRIYWxmIHtcXG4gIG1heC13aWR0aDogMTg0cHg7XFxufVxcblxcbi50ZXh0SW5wdXRGdWxsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGV4dElucHV0SGFsZiBsYWJlbCxcXG4udGV4dElucHV0RnVsbCBsYWJlbCB7XFxuICBjb2xvcjogIzY2NjtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi50ZXh0SW5wdXRIYWxmIGlucHV0LFxcbi50ZXh0SW5wdXRGdWxsIGlucHV0IHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2Q5ZDlkOTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBjb2xvcjogIzBkMGQwZDtcXG59XFxuLnRleHRJbnB1dEhhbGYgaW5wdXQ6aG92ZXIsXFxuLnRleHRJbnB1dEZ1bGwgaW5wdXQ6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3MGYwO1xcbn1cXG4udGV4dElucHV0SGFsZiBpbnB1dDpmb2N1cyxcXG4udGV4dElucHV0RnVsbCBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMCwgMTEyLCAyNDAsIDAuMik7XFxuICBib3JkZXItY29sb3I6ICMwMDcwZjA7XFxufVxcbi50ZXh0SW5wdXRIYWxmIGlucHV0OjpwbGFjZWhvbGRlcixcXG4udGV4dElucHV0RnVsbCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNhNmE2YTY7XFxufVxcblxcbi5ib29rRGVtb0Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTYwcHg7XFxufVxcbi5ib29rRGVtb0Zvcm0gLmZsb2F0aW5nUGFuZWwge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjZDlkOWQ5O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmc6IDY0cHggNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5ib29rRGVtb0Zvcm0gLmZsb2F0aW5nUGFuZWwgaDUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmJvb2tEZW1vRm9ybSAuZmxvYXRpbmdQYW5lbCBwIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM2NjY7XFxufVwiLFwiJHB0LWRpdmlkZXItYmxhY2s6IHJnYmEoMjA2LCAyMTIsIDIyNCwgMC44KTtcXG5cXG4kcHJpbWFyeS1ibHVlOiAjMDA3MGYwO1xcbiRkYXJrLWJsdWU6ICMwMDVkZDY7XFxuJGJsYWNrOiAjMGQwZDBkO1xcbiRncmV5OiAjNjY2O1xcblwiLFwiQGltcG9ydCAnYnV0dG9ucyc7XFxuXFxuLy8gRGl2aWRlcnNcXG5cXG4uZGl2aWRlckhvcml6b250YWwge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJ0blwiOiBcIkVtYWlsU2lnbnVwX2J0bl9fMVNjU2JcIixcblx0XCJidG4tbGFyZ2VcIjogXCJFbWFpbFNpZ251cF9idG4tbGFyZ2VfXzM5cGNvXCIsXG5cdFwiYnRuLXByaW1hcnlcIjogXCJFbWFpbFNpZ251cF9idG4tcHJpbWFyeV9fMkhoakZcIixcblx0XCJidG4tZGlzYWJsZWRcIjogXCJFbWFpbFNpZ251cF9idG4tZGlzYWJsZWRfXzF6dHFhXCIsXG5cdFwiZGl2aWRlckhvcml6b250YWxcIjogXCJFbWFpbFNpZ251cF9kaXZpZGVySG9yaXpvbnRhbF9fMmtMbVZcIixcblx0XCJmb3JtQ29udGVudFwiOiBcIkVtYWlsU2lnbnVwX2Zvcm1Db250ZW50X18zc1RCWlwiLFxuXHRcImZpZWxkUm93XCI6IFwiRW1haWxTaWdudXBfZmllbGRSb3dfXzZCeW44XCIsXG5cdFwidGV4dElucHV0SGFsZlwiOiBcIkVtYWlsU2lnbnVwX3RleHRJbnB1dEhhbGZfXzFCUFFWXCIsXG5cdFwidGV4dElucHV0RnVsbFwiOiBcIkVtYWlsU2lnbnVwX3RleHRJbnB1dEZ1bGxfX0pDcVJLXCIsXG5cdFwiYm9va0RlbW9Gb3JtXCI6IFwiRW1haWxTaWdudXBfYm9va0RlbW9Gb3JtX19iWFAyZlwiLFxuXHRcImZsb2F0aW5nUGFuZWxcIjogXCJFbWFpbFNpZ251cF9mbG9hdGluZ1BhbmVsX19YOHA1LVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Gb290ZXJfYnRuX18yaVBrSSB7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5Gb290ZXJfYnRuLWxhcmdlX184UGZqRSB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAyMXB4IDMycHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uRm9vdGVyX2J0bi1wcmltYXJ5X18xMWt1aiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MGYwO1xcbn1cXG4uRm9vdGVyX2J0bi1wcmltYXJ5X18xMWt1ajpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGQ2O1xcbn1cXG5cXG4uRm9vdGVyX2J0bi1kaXNhYmxlZF9fMjZWWHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIGNvbG9yOiAjYTZhNmE2O1xcbn1cXG4uRm9vdGVyX2J0bi1kaXNhYmxlZF9fMjZWWHk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuLkZvb3Rlcl9kaXZpZGVySG9yaXpvbnRhbF9fMXJsMUgge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxufVxcblxcbi5Gb290ZXJfZm9vdGVyX18xS1cxNyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIwNiwgMjEyLCAyMjQsIDAuOCk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5Gb290ZXJfZm9vdGVyX18xS1cxNyB7XFxuICAgIHBhZGRpbmc6IDAgMTAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTI3OXB4KSB7XFxuICAuRm9vdGVyX2Zvb3Rlcl9fMUtXMTcge1xcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIH1cXG59XFxuLkZvb3Rlcl9mb290ZXJfXzFLVzE3IC5Gb290ZXJfZm9vdGVyQ29udGVudF9fMzZJVVMge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICM2NjY7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLkZvb3Rlcl9mb290ZXJfXzFLVzE3IC5Gb290ZXJfZm9vdGVyQ29udGVudF9fMzZJVVMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG59XFxuLkZvb3Rlcl9mb290ZXJfXzFLVzE3IC5Gb290ZXJfZm9vdGVyQ29udGVudF9fMzZJVVMgLkZvb3Rlcl9mb290ZXJMb2dvX18xeW9sMCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLkZvb3Rlcl9mb290ZXJfXzFLVzE3IC5Gb290ZXJfZm9vdGVyQ29udGVudF9fMzZJVVMgLkZvb3Rlcl9mb290ZXJMb2dvX18xeW9sMCAuRm9vdGVyX2Zvb3RlckxvZ29JbWFnZV9fMjdtS2Uge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcbi5Gb290ZXJfZm9vdGVyX18xS1cxNyAuRm9vdGVyX2Zvb3RlckxpbmtzX19jam43NyBhIHtcXG4gIG1hcmdpbjogMCA4cHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4uRm9vdGVyX2Zvb3Rlcl9fMUtXMTcgLkZvb3Rlcl9mb290ZXJMaW5rc19fY2puNzcgYTpob3ZlciB7XFxuICBjb2xvcjogIzBkMGQwZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovL0Zvb3Rlci5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vbm9kZV9tb2R1bGVzL2luY2x1ZGUtbWVkaWEvZGlzdC9faW5jbHVkZS1tZWRpYS5zY3NzXCIsXCJ3ZWJwYWNrOi8vbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFFQSx5QkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FDSkY7O0FEU0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTkY7O0FEV0E7RUFDRSx5QkU3QmE7QURxQmY7QURVRTtFQUNFLHlCRS9CUTtBRHVCWjs7QURZQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ1RGO0FEV0U7RUFDRSx5QkFBQTtBQ1RKOztBRTlCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBRmlDRjs7QUF0Q0E7RUFDRSxXQUFBO0VBQ0EsOENBQUE7QUF5Q0Y7QUdtZ0JJO0VIOWlCSjtJSUNJLGNBQUE7RUo4Q0Y7QUFDRjtBRzhmSTtFSDlpQko7SUlLSSxpQkFBQTtFSitDRjtBQUNGO0FBL0NFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0NURztBRDBEUDtBR2tmSTtFSHhpQkY7SUFRSSxzQkFBQTtJQUNBLDZCQUFBO0VBa0RKO0FBQ0Y7QUFoREk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFrRE47QUFoRE07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBa0RSO0FBN0NJO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0FBK0NOO0FBN0NNO0VBQ0UsY0NsQ0E7QURpRlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnaW5kZXgnO1xcblxcbi8vIEJhc2VcXG5cXG4uYnRuIHtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG5cXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vLyBTaXplXFxuXFxuLmJ0bi1sYXJnZSB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAyMXB4IDMycHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4vLyBQcmltYXJ5XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJsdWU7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZTtcXG4gIH1cXG59XFxuXFxuLmJ0bi1kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgY29sb3I6ICNhNmE2YTY7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIH1cXG59XFxuXCIsXCIuYnRuIHtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLWxhcmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDIxcHggMzJweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MGYwO1xcbn1cXG4uYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWRkNjtcXG59XFxuXFxuLmJ0bi1kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgY29sb3I6ICNhNmE2YTY7XFxufVxcbi5idG4tZGlzYWJsZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuLmRpdmlkZXJIb3Jpem9udGFsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjA2LCAyMTIsIDIyNCwgMC44KTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDAgMTAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTI3OXB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMCAwLjVyZW07XFxuICB9XFxufVxcbi5mb290ZXIgLmZvb3RlckNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICM2NjY7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmZvb3RlciAuZm9vdGVyQ29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcbn1cXG4uZm9vdGVyIC5mb290ZXJDb250ZW50IC5mb290ZXJMb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyIC5mb290ZXJDb250ZW50IC5mb290ZXJMb2dvIC5mb290ZXJMb2dvSW1hZ2Uge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcbi5mb290ZXIgLmZvb3RlckxpbmtzIGEge1xcbiAgbWFyZ2luOiAwIDhweDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5mb290ZXIgLmZvb3RlckxpbmtzIGE6aG92ZXIge1xcbiAgY29sb3I6ICMwZDBkMGQ7XFxufVwiLFwiJHB0LWRpdmlkZXItYmxhY2s6IHJnYmEoMjA2LCAyMTIsIDIyNCwgMC44KTtcXG5cXG4kcHJpbWFyeS1ibHVlOiAjMDA3MGYwO1xcbiRkYXJrLWJsdWU6ICMwMDVkZDY7XFxuJGJsYWNrOiAjMGQwZDBkO1xcbiRncmV5OiAjNjY2O1xcblwiLFwiQGltcG9ydCAnYnV0dG9ucyc7XFxuXFxuLy8gRGl2aWRlcnNcXG5cXG4uZGl2aWRlckhvcml6b250YWwge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxufVxcblwiLFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5cXG4vLyAgICAgXyAgICAgICAgICAgIF8gICAgICAgICAgIF8gICAgICAgICAgICAgICAgICAgICAgICAgICBfIF9cXG4vLyAgICAoXykgICAgICAgICAgfCB8ICAgICAgICAgfCB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgKF8pXFxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXFxuLy8gICAgfCB8ICdfIFxcXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXFxcIHwgJ18gYCBfIFxcXFwgLyBfIFxcXFwvIF9gIHwgfC8gX2AgfFxcbi8vICAgIHwgfCB8IHwgfCAoX198IHwgfF98IHwgKF98IHwgIF9fLyB8IHwgfCB8IHwgfCAgX18vIChffCB8IHwgKF98IHxcXG4vLyAgICB8X3xffCB8X3xcXFxcX19ffF98XFxcXF9fLF98XFxcXF9fLF98XFxcXF9fX3wgfF98IHxffCB8X3xcXFxcX19ffFxcXFxfXyxffF98XFxcXF9fLF98XFxuLy9cXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xcbi8vICAgICAgICAgICAgICAgICAgICAgICAgdjEuNC45XFxuLy9cXG4vLyAgICAgICAgICAgICAgICBodHRwOi8vaW5jbHVkZS1tZWRpYS5jb21cXG4vL1xcbi8vICAgICAgICAgQXV0aG9yczogRWR1YXJkbyBCb3VjYXMgKEBlZHVhcmRvYm91Y2FzKVxcbi8vICAgICAgICAgICAgICAgICAgSHVnbyBHaXJhdWRlbCAoQGh1Z29naXJhdWRlbClcXG4vL1xcbi8vICAgICAgVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2VcXG5cXG5cXG4vLy8vXFxuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXFxuLy8vIEBhY2Nlc3MgcHVibGljXFxuLy8vL1xcblxcblxcbi8vL1xcbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBnbG9iYWwgYnJlYWtwb2ludHNcXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXFxuLy8vICAkYnJlYWtwb2ludHM6ICgncGhvbmUnOiAzMjBweCk7XFxuLy8vXFxuJGJyZWFrcG9pbnRzOiAoXFxuICAncGhvbmUnOiAzMjBweCxcXG4gICd0YWJsZXQnOiA3NjhweCxcXG4gICdkZXNrdG9wJzogMTAyNHB4XFxuKSAhZGVmYXVsdDtcXG5cXG5cXG4vLy9cXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2Ygc3RhdGljIGV4cHJlc3Npb25zIG9yIG1lZGlhIHR5cGVzXFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIG1lZGlhIHR5cGUgKHNjcmVlbilcXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nOiAnc2NyZWVuJyk7XFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc3RhdGljIGV4cHJlc3Npb24gd2l0aCBsb2dpY2FsIGRpc2p1bmN0aW9uIChPUiBvcGVyYXRvcilcXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKFxcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcXG4vLy8gICk7XFxuLy8vXFxuJG1lZGlhLWV4cHJlc3Npb25zOiAoXFxuICAnc2NyZWVuJzogJ3NjcmVlbicsXFxuICAncHJpbnQnOiAncHJpbnQnLFxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcXG4gICdsYW5kc2NhcGUnOiAnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcXG4gICdwb3J0cmFpdCc6ICcob3JpZW50YXRpb246IHBvcnRyYWl0KScsXFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxcbiAgJ3JldGluYTN4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLCAobWluLXJlc29sdXRpb246IDM1MGRwaSksIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpJ1xcbikgIWRlZmF1bHQ7XFxuXFxuXFxuLy8vXFxuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBwaXhlbHMgaXMgZGVmaW5lZCBhcyBgMWAgYnkgZGVmYXVsdFxcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XFxuLy8vXFxuLy8vICAvKiBHZW5lcmF0ZXM6ICovXFxuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgZW1zIGlzIGRlZmluZWQgYXMgYDAuMDFgIGJ5IGRlZmF1bHRcXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XFxuLy8vXFxuLy8vICAvKiBHZW5lcmF0ZXM6ICovXFxuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciByZW1zIGlzIGRlZmluZWQgYXMgYDAuMWAgYnkgZGVmYXVsdCwgdG8gYmUgdXNlZCB3aXRoIGBmb250LXNpemU6IDYyLjUlO2BcXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cXG4vLy9cXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XFxuLy8vXFxuJHVuaXQtaW50ZXJ2YWxzOiAoXFxuICAncHgnOiAxLFxcbiAgJ2VtJzogMC4wMSxcXG4gICdyZW0nOiAwLjEsXFxuICAnJzogMFxcbikgIWRlZmF1bHQ7XFxuXFxuLy8vXFxuLy8vIERlZmluZXMgd2hldGhlciBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGF2YWlsYWJsZSwgdXNlZnVsIGZvciBjcmVhdGluZyBzZXBhcmF0ZSBzdHlsZXNoZWV0c1xcbi8vLyBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG1lZGlhIHF1ZXJpZXMuXFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBEaXNhYmxlcyBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzXFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XFxuLy8vICAgIC5mb28ge1xcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XFxuLy8vICAgIH1cXG4vLy8gIH1cXG4vLy9cXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cXG4vLy8gIC5mb28ge1xcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xcbi8vLyAgfVxcbi8vL1xcbiRpbS1tZWRpYS1zdXBwb3J0OiB0cnVlICFkZWZhdWx0O1xcblxcbi8vL1xcbi8vLyBTZWxlY3RzIHdoaWNoIGJyZWFrcG9pbnQgdG8gZW11bGF0ZSB3aGVuIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgZGlzYWJsZWQuIE1lZGlhIHF1ZXJpZXMgdGhhdCBzdGFydCBhdCBvclxcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxcbi8vL1xcbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludFxcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcXG4vLy8gICAgLmZvbyB7XFxuLy8vICAgICAgY29sb3I6IHRvbWF0bztcXG4vLy8gICAgfVxcbi8vLyAgfVxcbi8vL1xcbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xcbi8vLyAgLmZvbyB7XFxuLy8vICAgIGNvbG9yOiB0b21hdG87XFxuLy8vICB9XFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBkb2VzIG5vdCBpbnRlcmNlcHQgdGhlIGRlc2t0b3AgYnJlYWtwb2ludFxcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49ZGVza3RvcCcpIHtcXG4vLy8gICAgLmZvbyB7XFxuLy8vICAgICAgY29sb3I6IHRvbWF0bztcXG4vLy8gICAgfVxcbi8vLyAgfVxcbi8vL1xcbi8vLyAgLyogTm8gb3V0cHV0ICovXFxuLy8vXFxuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcXG5cXG4vLy9cXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xcbi8vLyBhcmUgbm90IHN1cHBvcnRlZC5cXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcXG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XFxuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAnc2NyZWVuJykge1xcbi8vLyAgICAuZm9vIHtcXG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xcbi8vLyAgICB9XFxuLy8vICB9XFxuLy8vXFxuLy8vICAgLyogR2VuZXJhdGVzOiAqL1xcbi8vLyAgIC5mb28ge1xcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcXG4vLy8gICB9XFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XFxuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3JldGluYTJ4Jykge1xcbi8vLyAgICAuZm9vIHtcXG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xcbi8vLyAgICB9XFxuLy8vICB9XFxuLy8vXFxuLy8vICAvKiBObyBvdXRwdXQgKi9cXG4vLy9cXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xcblxcbi8vLy9cXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXFxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxcbi8vLyBAYWNjZXNzIHByaXZhdGVcXG4vLy8vXFxuXFxuXFxuLy8vXFxuLy8vIExvZyBhIG1lc3NhZ2UgZWl0aGVyIHdpdGggYEBlcnJvcmAgaWYgc3VwcG9ydGVkXFxuLy8vIGVsc2Ugd2l0aCBgQHdhcm5gLCB1c2luZyBgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJylgXFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0Llxcbi8vL1xcbi8vLyBAcGFyYW0ge1N0cmluZ30gJG1lc3NhZ2UgLSBNZXNzYWdlIHRvIGxvZ1xcbi8vL1xcbkBmdW5jdGlvbiBpbS1sb2coJG1lc3NhZ2UpIHtcXG4gIEBpZiBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKSB7XFxuICAgIEBlcnJvciAkbWVzc2FnZTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAd2FybiAkbWVzc2FnZTtcXG4gICAgJF86IG5vb3AoKTtcXG4gIH1cXG5cXG4gIEByZXR1cm4gJG1lc3NhZ2U7XFxufVxcblxcblxcbi8vL1xcbi8vLyBXcmFwcGVyIG1peGluIGZvciB0aGUgbG9nIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIHdpdGggYSBtb3JlIGZyaWVuZGx5XFxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxcbi8vLyB3aXRoaW4gZnVuY3Rpb25zIGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbiBhIGZ1bmN0aW9uXFxuLy8vIGFuZCB1c2UgdGhlIG1peGluIGV2ZXJ5d2hlcmUgZWxzZSBiZWNhdXNlIGl0J3MgbXVjaCBtb3JlIGVsZWdhbnQuXFxuLy8vXFxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXFxuLy8vXFxuQG1peGluIGxvZygkbWVzc2FnZSkge1xcbiAgQGlmIGltLWxvZygkbWVzc2FnZSkge31cXG59XFxuXFxuXFxuLy8vXFxuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcXG4vLy8gdG8gdHJpZ2dlciBhIGNvbXBpbGluZyBlcnJvciBhbmQgc3RvcCB0aGUgcHJvY2Vzcy5cXG4vLy9cXG5AZnVuY3Rpb24gbm9vcCgpIHt9XFxuXFxuLy8vXFxuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXFxuLy8vXFxuLy8vIEBwYXJhbSB7QXJnbGlzdH0gICAkY29uZGl0aW9ucyAgLSBNZWRpYSBxdWVyeSBjb25kaXRpb25zXFxuLy8vXFxuLy8vIEByZXR1cm4ge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjb25kaXRpb25zIGFyZSBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnRcXG4vLy9cXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xcbiAgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludCk7XFxuXFxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcXG4gICAgQGlmIGltLWxvZygnYCN7JGltLW5vLW1lZGlhLWJyZWFrcG9pbnR9YCBpcyBub3QgYSB2YWxpZCBicmVha3BvaW50LicpIHt9XFxuICB9XFxuXFxuICBAZWFjaCAkY29uZGl0aW9uIGluICRjb25kaXRpb25zIHtcXG4gICAgQGlmIG5vdCBtYXAtaGFzLWtleSgkbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcXG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xcbiAgICAgICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xcbiAgICAgICR2YWx1ZTogZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGNvbmRpdGlvbiwgJG9wZXJhdG9yKTtcXG5cXG4gICAgICAvLyBzY3NzLWxpbnQ6ZGlzYWJsZSBTcGFjZUFyb3VuZE9wZXJhdG9yXFxuICAgICAgQGlmICgkcHJlZml4ID09ICdtYXgnIGFuZCAkdmFsdWUgPD0gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIG9yXFxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xcbiAgICAgICAgQHJldHVybiBmYWxzZTtcXG4gICAgICB9XFxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xcbiAgICAgIEByZXR1cm4gZmFsc2U7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEByZXR1cm4gdHJ1ZTtcXG59XFxuXFxuLy8vL1xcbi8vLyBQYXJzaW5nIGVuZ2luZVxcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcXG4vLy8gQGFjY2VzcyBwcml2YXRlXFxuLy8vL1xcblxcblxcbi8vL1xcbi8vLyBHZXQgb3BlcmF0b3Igb2YgYW4gZXhwcmVzc2lvblxcbi8vL1xcbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3Qgb3BlcmF0b3IgZnJvbVxcbi8vL1xcbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gQW55IG9mIGA+PWAsIGA+YCwgYDw9YCwgYDxgLCBg4omlYCwgYOKJpGBcXG4vLy9cXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pIHtcXG4gIEBlYWNoICRvcGVyYXRvciBpbiAoJz49JywgJz4nLCAnPD0nLCAnPCcsICfiiaUnLCAn4omkJykge1xcbiAgICBAaWYgc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcXG4gICAgICBAcmV0dXJuICRvcGVyYXRvcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xcbiAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcXG4gIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxcbiAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcXG4gIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cXG4gICRfOiBpbS1sb2coJ05vIG9wZXJhdG9yIGZvdW5kIGluIGAjeyRleHByZXNzaW9ufWAuJyk7XFxufVxcblxcblxcbi8vL1xcbi8vLyBHZXQgZGltZW5zaW9uIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3JcXG4vLy9cXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IGRpbWVuc2lvbiBmcm9tXFxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcXG4vLy9cXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGB3aWR0aGAgb3IgYGhlaWdodGAgKG9yIHBvdGVudGlhbGx5IGFueXRoaW5nIGVsc2UpXFxuLy8vXFxuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XFxuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcXG4gICRwYXJzZWQtZGltZW5zaW9uOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDAsICRvcGVyYXRvci1pbmRleCAtIDEpO1xcbiAgJGRpbWVuc2lvbjogJ3dpZHRoJztcXG5cXG4gIEBpZiBzdHItbGVuZ3RoKCRwYXJzZWQtZGltZW5zaW9uKSA+IDAge1xcbiAgICAkZGltZW5zaW9uOiAkcGFyc2VkLWRpbWVuc2lvbjtcXG4gIH1cXG5cXG4gIEByZXR1cm4gJGRpbWVuc2lvbjtcXG59XFxuXFxuXFxuLy8vXFxuLy8vIEdldCBkaW1lbnNpb24gcHJlZml4IGJhc2VkIG9uIGFuIG9wZXJhdG9yXFxuLy8vXFxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvclxcbi8vL1xcbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYG1pbmAgb3IgYG1heGBcXG4vLy9cXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcikge1xcbiAgQHJldHVybiBpZihpbmRleCgoJzwnLCAnPD0nLCAn4omkJyksICRvcGVyYXRvciksICdtYXgnLCAnbWluJyk7XFxufVxcblxcblxcbi8vL1xcbi8vLyBHZXQgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxcbi8vL1xcbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgdmFsdWUgZnJvbVxcbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXFxuLy8vXFxuLy8vIEByZXR1cm4ge051bWJlcn0gLSBBIG51bWVyaWMgdmFsdWVcXG4vLy9cXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XFxuICAkdmFsdWU6IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yLWluZGV4ICsgc3RyLWxlbmd0aCgkb3BlcmF0b3IpKTtcXG5cXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR2YWx1ZSkge1xcbiAgICAkdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xcbiAgfSBAZWxzZSB7XFxuICAgICR2YWx1ZTogdG8tbnVtYmVyKCR2YWx1ZSk7XFxuICB9XFxuXFxuICAkaW50ZXJ2YWw6IG1hcC1nZXQoJHVuaXQtaW50ZXJ2YWxzLCB1bml0KCR2YWx1ZSkpO1xcblxcbiAgQGlmIG5vdCAkaW50ZXJ2YWwge1xcbiAgICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXFxuICAgIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXFxuICAgIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxcbiAgICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxcbiAgICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXFxuICAgICRfOiBpbS1sb2coJ1Vua25vd24gdW5pdCBgI3t1bml0KCR2YWx1ZSl9YC4nKTtcXG4gIH1cXG5cXG4gIEBpZiAkb3BlcmF0b3IgPT0gJz4nIHtcXG4gICAgJHZhbHVlOiAkdmFsdWUgKyAkaW50ZXJ2YWw7XFxuICB9IEBlbHNlIGlmICRvcGVyYXRvciA9PSAnPCcge1xcbiAgICAkdmFsdWU6ICR2YWx1ZSAtICRpbnRlcnZhbDtcXG4gIH1cXG5cXG4gIEByZXR1cm4gJHZhbHVlO1xcbn1cXG5cXG5cXG4vLy9cXG4vLy8gUGFyc2UgYW4gZXhwcmVzc2lvbiB0byByZXR1cm4gYSB2YWxpZCBtZWRpYS1xdWVyeSBleHByZXNzaW9uXFxuLy8vXFxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gcGFyc2VcXG4vLy9cXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIFZhbGlkIG1lZGlhIHF1ZXJ5XFxuLy8vXFxuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcXG4gIC8vIElmIGl0IGlzIHBhcnQgb2YgJG1lZGlhLWV4cHJlc3Npb25zLCBpdCBoYXMgbm8gb3BlcmF0b3JcXG4gIC8vIHRoZW4gdGhlcmUgaXMgbm8gbmVlZCB0byBnbyBhbnkgZnVydGhlciwganVzdCByZXR1cm4gdGhlIHZhbHVlXFxuICBAaWYgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbikge1xcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbik7XFxuICB9XFxuXFxuICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKTtcXG4gICRkaW1lbnNpb246IGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcXG4gICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xcbiAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcXG5cXG4gIEByZXR1cm4gJygjeyRwcmVmaXh9LSN7JGRpbWVuc2lvbn06ICN7JHZhbHVlfSknO1xcbn1cXG5cXG4vLy9cXG4vLy8gU2xpY2UgYCRsaXN0YCBiZXR3ZWVuIGAkc3RhcnRgIGFuZCBgJGVuZGAgaW5kZXhlc1xcbi8vL1xcbi8vLyBAYWNjZXNzIHByaXZhdGVcXG4vLy9cXG4vLy8gQHBhcmFtIHtMaXN0fSAkbGlzdCAtIExpc3QgdG8gc2xpY2VcXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRzdGFydCBbMV0gLSBTdGFydCBpbmRleFxcbi8vLyBAcGFyYW0ge051bWJlcn0gJGVuZCBbbGVuZ3RoKCRsaXN0KV0gLSBFbmQgaW5kZXhcXG4vLy9cXG4vLy8gQHJldHVybiB7TGlzdH0gU2xpY2VkIGxpc3RcXG4vLy9cXG5AZnVuY3Rpb24gc2xpY2UoJGxpc3QsICRzdGFydDogMSwgJGVuZDogbGVuZ3RoKCRsaXN0KSkge1xcbiAgQGlmIGxlbmd0aCgkbGlzdCkgPCAxIG9yICRzdGFydCA+ICRlbmQge1xcbiAgICBAcmV0dXJuICgpO1xcbiAgfVxcblxcbiAgJHJlc3VsdDogKCk7XFxuXFxuICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XFxuICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCBudGgoJGxpc3QsICRpKSk7XFxuICB9XFxuXFxuICBAcmV0dXJuICRyZXN1bHQ7XFxufVxcblxcbi8vLy9cXG4vLy8gU3RyaW5nIHRvIG51bWJlciBjb252ZXJ0ZXJcXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxcbi8vLy9cXG5cXG5cXG4vLy9cXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxcbi8vL1xcbi8vLyBAcGFyYW0ge1N0cmluZyB8IE51bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYmUgcGFyc2VkXFxuLy8vXFxuLy8vIEByZXR1cm4ge051bWJlcn1cXG4vLy9cXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSAnbnVtYmVyJyB7XFxuICAgIEByZXR1cm4gJHZhbHVlO1xcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xcbiAgICAkXzogaW0tbG9nKCdWYWx1ZSBmb3IgYHRvLW51bWJlcmAgc2hvdWxkIGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nLicpO1xcbiAgfVxcblxcbiAgJGZpcnN0LWNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgMSwgMSk7XFxuICAkcmVzdWx0OiAwO1xcbiAgJGRpZ2l0czogMDtcXG4gICRtaW51czogKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKTtcXG4gICRudW1iZXJzOiAoJzAnOiAwLCAnMSc6IDEsICcyJzogMiwgJzMnOiAzLCAnNCc6IDQsICc1JzogNSwgJzYnOiA2LCAnNyc6IDcsICc4JzogOCwgJzknOiA5KTtcXG5cXG4gIC8vIFJlbW92ZSArLy0gc2lnbiBpZiBwcmVzZW50IGF0IGZpcnN0IGNoYXJhY3RlclxcbiAgQGlmICgkZmlyc3QtY2hhcmFjdGVyID09ICcrJyBvciAkZmlyc3QtY2hhcmFjdGVyID09ICctJykge1xcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xcbiAgfVxcblxcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xcbiAgICAkY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAkaSwgJGkpO1xcblxcbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XFxuICAgICAgQHJldHVybiB0by1sZW5ndGgoaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCksIHN0ci1zbGljZSgkdmFsdWUsICRpKSlcXG4gICAgfVxcblxcbiAgICBAaWYgJGNoYXJhY3RlciA9PSAnLicge1xcbiAgICAgICRkaWdpdHM6IDE7XFxuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcXG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICogMTAgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKTtcXG4gICAgfSBAZWxzZSB7XFxuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKSAvICRkaWdpdHM7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEByZXR1cm4gaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCk7XFxufVxcblxcblxcbi8vL1xcbi8vLyBBZGQgYCR1bml0YCB0byBgJHZhbHVlYFxcbi8vL1xcbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR1bml0IC0gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB1bml0XFxuLy8vXFxuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxcbi8vL1xcbkBmdW5jdGlvbiB0by1sZW5ndGgoJHZhbHVlLCAkdW5pdCkge1xcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcXG5cXG4gIEBpZiBub3QgaW5kZXgobWFwLWtleXMoJHVuaXRzKSwgJHVuaXQpIHtcXG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XFxuICB9XFxuXFxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XFxufVxcblxcbi8vL1xcbi8vLyBUaGlzIG1peGluIGFpbXMgYXQgcmVkZWZpbmluZyB0aGUgY29uZmlndXJhdGlvbiBqdXN0IGZvciB0aGUgc2NvcGUgb2ZcXG4vLy8gdGhlIGNhbGwuIEl0IGlzIGhlbHBmdWwgd2hlbiBoYXZpbmcgYSBjb21wb25lbnQgbmVlZGluZyBhbiBleHRlbmRlZFxcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcXG4vLy8gZm9yIGluc3RhbmNlLlxcbi8vL1xcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcXG4vLy9cXG4vLy8gQHBhcmFtIHtNYXB9ICR0d2Vha3BvaW50cyBbKCldIC0gTWFwIG9mIHR3ZWFrcG9pbnRzIHRvIGJlIG1lcmdlZCB3aXRoIGAkYnJlYWtwb2ludHNgXFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIGJyZWFrcG9pbnRzIHdpdGggYSB0d2Vha3BvaW50XFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XFxuLy8vICAgIC5mb28ge1xcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XFxuLy8vICAgICAgIC8vIC4uLlxcbi8vLyAgICAgIH1cXG4vLy8gICAgfVxcbi8vLyAgfVxcbi8vL1xcbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgbWVkaWEgZXhwcmVzc2lvbnMgd2l0aCBhIGN1c3RvbSBvbmVcXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xcbi8vLyAgICAuZm9vIHtcXG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScpIHtcXG4vLy8gICAgICAgLy8gLi4uXFxuLy8vICAgICAgfVxcbi8vLyAgICB9XFxuLy8vICB9XFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgYm90aCBjb25maWd1cmF0aW9uIG1hcHNcXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XFxuLy8vICAgIC5mb28ge1xcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJywgJzw9Y3VzdG9tJykge1xcbi8vLyAgICAgICAvLyAuLi5cXG4vLy8gICAgICB9XFxuLy8vICAgIH1cXG4vLy8gIH1cXG4vLy9cXG5AbWl4aW4gbWVkaWEtY29udGV4dCgkdHdlYWtwb2ludHM6ICgpLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnM6ICgpKSB7XFxuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXFxuICAkZ2xvYmFsLWJyZWFrcG9pbnRzOiAkYnJlYWtwb2ludHM7XFxuICAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zOiAkbWVkaWEtZXhwcmVzc2lvbnM7XFxuXFxuICAvLyBVcGRhdGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cXG4gICRicmVha3BvaW50czogbWFwLW1lcmdlKCRicmVha3BvaW50cywgJHR3ZWFrcG9pbnRzKSAhZ2xvYmFsO1xcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XFxuXFxuICBAY29udGVudDtcXG5cXG4gIC8vIFJlc3RvcmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cXG4gICRicmVha3BvaW50czogJGdsb2JhbC1icmVha3BvaW50cyAhZ2xvYmFsO1xcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XFxufVxcblxcbi8vLy9cXG4vLy8gaW5jbHVkZS1tZWRpYSBwdWJsaWMgZXhwb3NlZCBBUElcXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xcbi8vLyBAYWNjZXNzIHB1YmxpY1xcbi8vLy9cXG5cXG5cXG4vLy9cXG4vLy8gR2VuZXJhdGVzIGEgbWVkaWEgcXVlcnkgYmFzZWQgb24gYSBsaXN0IG9mIGNvbmRpdGlvbnNcXG4vLy9cXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnKSB7IH1cXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PXRhYmxldCcpIHsgfVxcbi8vL1xcbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNThweCcsICc8ODUwcHgnKSB7IH1cXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5kZXNrdG9wJywgJzw9MTM1MHB4JykgeyB9XFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCdyZXRpbmEyeCcpIHsgfVxcbi8vL1xcbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1MHB4JywgJzx0YWJsZXQnLCAncmV0aW5hM3gnKSB7IH1cXG4vLy9cXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcXG4gIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcXG4gIEBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPT0gMCkgb3JcXG4gICAgICAobm90ICRpbS1tZWRpYS1zdXBwb3J0IGFuZCBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSkge1xcbiAgICBAY29udGVudDtcXG4gIH0gQGVsc2UgaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID4gMCkge1xcbiAgICBAbWVkaWEgI3t1bnF1b3RlKHBhcnNlLWV4cHJlc3Npb24obnRoKCRjb25kaXRpb25zLCAxKSkpfSB7XFxuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxcXG4gICAgICBAaW5jbHVkZSBtZWRpYShzbGljZSgkY29uZGl0aW9ucywgMikuLi4pIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgXFxcIm1lZGlhXFxcIjtcXG5cXG5AbWl4aW4gaGVhZGVyLWZvb3Rlci1wYWRkaW5nIHtcXG4gIEBpbmNsdWRlIG1lZGlhKFxcXCI+PWRlc2t0b3BcXFwiKSB7XFxuICAgIHBhZGRpbmc6IDAgMTAlO1xcbiAgfVxcblxcbiAgQGluY2x1ZGUgbWVkaWEoXFxcIjxkZXNrdG9wXFxcIikge1xcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYnRuXCI6IFwiRm9vdGVyX2J0bl9fMmlQa0lcIixcblx0XCJidG4tbGFyZ2VcIjogXCJGb290ZXJfYnRuLWxhcmdlX184UGZqRVwiLFxuXHRcImJ0bi1wcmltYXJ5XCI6IFwiRm9vdGVyX2J0bi1wcmltYXJ5X18xMWt1alwiLFxuXHRcImJ0bi1kaXNhYmxlZFwiOiBcIkZvb3Rlcl9idG4tZGlzYWJsZWRfXzI2Vlh5XCIsXG5cdFwiZGl2aWRlckhvcml6b250YWxcIjogXCJGb290ZXJfZGl2aWRlckhvcml6b250YWxfXzFybDFIXCIsXG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fMUtXMTdcIixcblx0XCJmb290ZXJDb250ZW50XCI6IFwiRm9vdGVyX2Zvb3RlckNvbnRlbnRfXzM2SVVTXCIsXG5cdFwiZm9vdGVyTG9nb1wiOiBcIkZvb3Rlcl9mb290ZXJMb2dvX18xeW9sMFwiLFxuXHRcImZvb3RlckxvZ29JbWFnZVwiOiBcIkZvb3Rlcl9mb290ZXJMb2dvSW1hZ2VfXzI3bUtlXCIsXG5cdFwiZm9vdGVyTGlua3NcIjogXCJGb290ZXJfZm9vdGVyTGlua3NfX2Nqbjc3XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhvbWVfYnRuX18ydmlhVyB7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5Ib21lX2J0bi1sYXJnZV9fMnFRbkIge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMjFweCAzMnB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLkhvbWVfYnRuLXByaW1hcnlfXzE3NC1zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDcwZjA7XFxufVxcbi5Ib21lX2J0bi1wcmltYXJ5X18xNzQtczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGQ2O1xcbn1cXG5cXG4uSG9tZV9idG4tZGlzYWJsZWRfXzJ2QmtLIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBjb2xvcjogI2E2YTZhNjtcXG59XFxuLkhvbWVfYnRuLWRpc2FibGVkX18ydkJrSzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbn1cXG5cXG4uSG9tZV9kaXZpZGVySG9yaXpvbnRhbF9fMXBpVUcge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxufVxcblxcbi5Ib21lX2NvbnRhaW5lcl9fM3Nhby0ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwidG9wLWJhclxcXCIgXFxcImNvbnRlbnRcXFwiO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MnB4IDFmcjtcXG4gIGNvbG9yOiAjMGQwZDBkO1xcbn1cXG5cXG4uSG9tZV9ib2R5Q29udGFpbmVyX19QLU1MNSB7XFxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICB6LWluZGV4OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uSG9tZV9tYWluX18xWjFhRyB7XFxuICBwYWRkaW5nOiA1cmVtIDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTI3OXB4KSB7XFxuICAuSG9tZV9tYWluX18xWjFhRyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcblxcbi5Ib21lX2hlcm9fXzFnNktjIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLkhvbWVfaGVyb19fMWc2S2Mge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAwIDI0cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5Ib21lX2hlcm9fXzFnNktjIC5Ib21lX2hlcm9UZXh0Q29udGFpbmVyX18zaUdHRSB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuICAuSG9tZV9oZXJvX18xZzZLYyAuSG9tZV9oZXJvVGl0bGVfXzIxOXhRIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgfVxcbn1cXG4uSG9tZV9oZXJvX18xZzZLYyAuSG9tZV9oZXJvU3VidGl0bGVfXzFYOUJDIHtcXG4gIG1hcmdpbi10b3A6IDI4cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5Ib21lX2hlcm9fXzFnNktjIC5Ib21lX2hlcm9TdWJ0aXRsZV9fMVg5QkMge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxufVxcbi5Ib21lX2hlcm9fXzFnNktjIGEge1xcbiAgbWFyZ2luLXRvcDogMzJweDtcXG59XFxuXFxuLkhvbWVfcHJvZHVjdEltYWdlQ29udGFpbmVyX18ydXpUXyB7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcbiAgLkhvbWVfcHJvZHVjdEltYWdlQ29udGFpbmVyX18ydXpUXyB7XFxuICAgIG1heC13aWR0aDogODB2dztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuSG9tZV9wcm9kdWN0SW1hZ2VDb250YWluZXJfXzJ1elRfIHtcXG4gICAgbWFyZ2luLXRvcDogMzJweDtcXG4gIH1cXG59XFxuLkhvbWVfcHJvZHVjdEltYWdlQ29udGFpbmVyX18ydXpUXyAuSG9tZV9wcm9kdWN0SW1hZ2VfXzFMZmlMIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uSG9tZV91c2Vyc0Jhbm5lcl9fMWlMMUwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5Ib21lX3VzZXJzQmFubmVyX18xaUwxTCAuSG9tZV91c2Vyc0Jhbm5lclRleHRfXzJ3NUI3IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG4uSG9tZV91c2Vyc0Jhbm5lcl9fMWlMMUwgLkhvbWVfdXNlcnNMaXN0X18zSkNPVyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luLXRvcDogNjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLkhvbWVfdXNlcnNCYW5uZXJfXzFpTDFMIC5Ib21lX3VzZXJzTGlzdF9fM0pDT1cgLkhvbWVfdXNlcnNMb2dvV3JhcHBlcl9feXhIZVkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAzMnB4O1xcbiAgbWF4LWhlaWdodDogNzJweDtcXG59XFxuXFxuLkhvbWVfc2VjdGlvbkhlYWRlcl9fMTVleEwge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5Ib21lX3NlY3Rpb25IZWFkZXJfXzE1ZXhMIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcbn1cXG4uSG9tZV9zZWN0aW9uSGVhZGVyX18xNWV4TC5Ib21lX2NlbnRlcmVkX18zQmpPMCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5Ib21lX2ZlYXR1cmVzU2VjdGlvbl9fa1hXSFQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogODBweCAwO1xcbn1cXG4uSG9tZV9mZWF0dXJlc1NlY3Rpb25fX2tYV0hUIC5Ib21lX2ZlYXR1cmVzVGl0bGVDb250YWluZXJfXzNWQURBIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcbiAgLkhvbWVfZmVhdHVyZXNTZWN0aW9uX19rWFdIVCAuSG9tZV9mZWF0dXJlc1RpdGxlQ29udGFpbmVyX18zVkFEQSB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xcbiAgfVxcbn1cXG4uSG9tZV9mZWF0dXJlc1NlY3Rpb25fX2tYV0hUIC5Ib21lX2ZlYXR1cmVzVGl0bGVDb250YWluZXJfXzNWQURBIC5Ib21lX2ZlYXR1cmVzU3ViVGl0bGVfXzFMYU15IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcbi5Ib21lX2ZlYXR1cmVzU2VjdGlvbl9fa1hXSFQgLkhvbWVfZmVhdHVyZXNHcmlkX19SQmtOUyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgbWF4LXdpZHRoOiAxMTg4cHg7XFxufVxcblxcbi5Ib21lX2ZlYXR1cmVDYXJkX18xRVRFNiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBtYXJnaW46IDE2cHg7XFxuICB3aWR0aDogMzQ0cHg7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5Ib21lX2ZlYXR1cmVDYXJkX18xRVRFNiB7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICB9XFxufVxcbi5Ib21lX2ZlYXR1cmVDYXJkX18xRVRFNjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MGYwO1xcbn1cXG4uSG9tZV9mZWF0dXJlQ2FyZF9fMUVURTY6aG92ZXIgaW1nIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxufVxcbi5Ib21lX2ZlYXR1cmVDYXJkX18xRVRFNjpob3ZlciBoNSxcXG4uSG9tZV9mZWF0dXJlQ2FyZF9fMUVURTY6aG92ZXIgcCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5Ib21lX2ZlYXR1cmVDYXJkX18xRVRFNiAuSG9tZV9mZWF0dXJlQ2FyZEltYWdlX18yZmM0WiB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMzZweDtcXG59XFxuLkhvbWVfZmVhdHVyZUNhcmRfXzFFVEU2IGg1IHtcXG4gIG1hcmdpbjogMCBhdXRvIDE2cHggYXV0bztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcbi5Ib21lX2ZlYXR1cmVDYXJkX18xRVRFNiBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi5Ib21lX2ZlYXR1cmVzVGFnbGluZV9fQnllQkEge1xcbiAgbWFyZ2luLXRvcDogMTYwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNjBweDtcXG4gIG1heC13aWR0aDogODQwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLkhvbWVfZmVhdHVyZXNUYWdsaW5lX19CeWVCQSAuSG9tZV9zZWN0aW9uSGVhZGVyX18xNWV4TCB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gIH1cXG59XFxuXFxuLkhvbWVfdmFsdWVTZWN0aW9uX18zbVdsayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTYwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTI3OXB4KSB7XFxuICAuSG9tZV92YWx1ZVNlY3Rpb25fXzNtV2xrIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgfVxcbn1cXG4uSG9tZV92YWx1ZVNlY3Rpb25fXzNtV2xrIC5Ib21lX2luZm9QYW5lbF9fSDdTOWoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG4uSG9tZV92YWx1ZVNlY3Rpb25fXzNtV2xrIC5Ib21lX2luZm9QYW5lbF9fSDdTOWogZGl2IHtcXG4gIG1heC13aWR0aDogNDgwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gIC5Ib21lX3ZhbHVlU2VjdGlvbl9fM21XbGsgLkhvbWVfaW5mb1BhbmVsX19IN1M5aiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nOiAwIDI0cHg7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgfVxcbn1cXG4uSG9tZV92YWx1ZVNlY3Rpb25fXzNtV2xrIC5Ib21lX2luZm9QYW5lbF9fSDdTOWogcCB7XFxuICBtYXgtd2lkdGg6IDQ0MHB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuLkhvbWVfdmFsdWVTZWN0aW9uX18zbVdsayAuSG9tZV9pbmZvUGFuZWxfX0g3UzlqIGEge1xcbiAgY29sb3I6ICMwMDcwZjA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uSG9tZV92YWx1ZVNlY3Rpb25fXzNtV2xrIC5Ib21lX2ltYWdlUGFuZWxfXzM2X0duIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gIC5Ib21lX3ZhbHVlU2VjdGlvbl9fM21XbGsgLkhvbWVfaW1hZ2VQYW5lbF9fMzZfR24ge1xcbiAgICBncmlkLXJvdzogMjtcXG4gIH1cXG59XFxuLkhvbWVfdmFsdWVTZWN0aW9uX18zbVdsayAuSG9tZV9pbWFnZVBhbmVsX18zNl9HbiAuSG9tZV9pbWFnZUNvbnRhaW5lcl9fM2tmc2Mge1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcbn1cXG4uSG9tZV92YWx1ZVNlY3Rpb25fXzNtV2xrIC5Ib21lX2ltYWdlUGFuZWxfXzM2X0duIC5Ib21lX2ltYWdlQ29udGFpbmVyX18za2ZzYyBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly9Ib21lLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9jb21wb25lbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi9ub2RlX21vZHVsZXMvaW5jbHVkZS1tZWRpYS9kaXN0L19pbmNsdWRlLW1lZGlhLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFFQSx5QkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FDSkY7O0FEU0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTkY7O0FEV0E7RUFDRSx5QkU3QmE7QURxQmY7QURVRTtFQUNFLHlCRS9CUTtBRHVCWjs7QURZQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ1RGO0FEV0U7RUFDRSx5QkFBQTtBQ1RKOztBRTlCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBRmlDRjs7QUF0Q0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUNFO0VBRUYsNEJBQUE7RUFDQSxjQ05NO0FENkNSOztBQXBDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBc0NGOztBQW5DQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBS0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWtDRjtBRytlSTtFSDNoQko7SUFJSSxVQUFBO0VB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O0FBQ0Y7QUF6Qkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUEyQk47QUF4Qkk7RUFDRSxjQ2hSUztFRGlSVCxnQkFBQTtBQTBCTjtBQXRCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBd0JKO0FHK1BJO0VIMVJGO0lBTUksV0FBQTtFQXlCSjtBQUNGO0FBdkJJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUF5Qk47QUF4Qk07RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQTBCUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdpbmRleCc7XFxuXFxuLy8gQmFzZVxcblxcbi5idG4ge1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjZmZmO1xcblxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8vIFNpemVcXG5cXG4uYnRuLWxhcmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDIxcHggMzJweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi8vIFByaW1hcnlcXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmx1ZTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ibHVlO1xcbiAgfVxcbn1cXG5cXG4uYnRuLWRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBjb2xvcjogI2E2YTZhNjtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgfVxcbn1cXG5cIixcIi5idG4ge1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tbGFyZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMjFweCAzMnB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDcwZjA7XFxufVxcbi5idG4tcHJpbWFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGQ2O1xcbn1cXG5cXG4uYnRuLWRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBjb2xvcjogI2E2YTZhNjtcXG59XFxuLmJ0bi1kaXNhYmxlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbn1cXG5cXG4uZGl2aWRlckhvcml6b250YWwge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwidG9wLWJhclxcXCIgXFxcImNvbnRlbnRcXFwiO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MnB4IDFmcjtcXG4gIGNvbG9yOiAjMGQwZDBkO1xcbn1cXG5cXG4uYm9keUNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICB6LWluZGV4OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBwYWRkaW5nOiA1cmVtIDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTI3OXB4KSB7XFxuICAubWFpbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcblxcbi5oZXJvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmhlcm8ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAwIDI0cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5oZXJvIC5oZXJvVGV4dENvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuICAuaGVybyAuaGVyb1RpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgfVxcbn1cXG4uaGVybyAuaGVyb1N1YnRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDI4cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5oZXJvIC5oZXJvU3VidGl0bGUge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxufVxcbi5oZXJvIGEge1xcbiAgbWFyZ2luLXRvcDogMzJweDtcXG59XFxuXFxuLnByb2R1Y3RJbWFnZUNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcbiAgLnByb2R1Y3RJbWFnZUNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogODB2dztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAucHJvZHVjdEltYWdlQ29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMzJweDtcXG4gIH1cXG59XFxuLnByb2R1Y3RJbWFnZUNvbnRhaW5lciAucHJvZHVjdEltYWdlIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4udXNlcnNCYW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi51c2Vyc0Jhbm5lciAudXNlcnNCYW5uZXJUZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG4udXNlcnNCYW5uZXIgLnVzZXJzTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luLXRvcDogNjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnVzZXJzQmFubmVyIC51c2Vyc0xpc3QgLnVzZXJzTG9nb1dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAzMnB4O1xcbiAgbWF4LWhlaWdodDogNzJweDtcXG59XFxuXFxuLnNlY3Rpb25IZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5zZWN0aW9uSGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcbn1cXG4uc2VjdGlvbkhlYWRlci5jZW50ZXJlZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mZWF0dXJlc1NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogODBweCAwO1xcbn1cXG4uZmVhdHVyZXNTZWN0aW9uIC5mZWF0dXJlc1RpdGxlQ29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcbiAgLmZlYXR1cmVzU2VjdGlvbiAuZmVhdHVyZXNUaXRsZUNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xcbiAgfVxcbn1cXG4uZmVhdHVyZXNTZWN0aW9uIC5mZWF0dXJlc1RpdGxlQ29udGFpbmVyIC5mZWF0dXJlc1N1YlRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcbi5mZWF0dXJlc1NlY3Rpb24gLmZlYXR1cmVzR3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgbWF4LXdpZHRoOiAxMTg4cHg7XFxufVxcblxcbi5mZWF0dXJlQ2FyZCB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBtYXJnaW46IDE2cHg7XFxuICB3aWR0aDogMzQ0cHg7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5mZWF0dXJlQ2FyZCB7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICB9XFxufVxcbi5mZWF0dXJlQ2FyZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MGYwO1xcbn1cXG4uZmVhdHVyZUNhcmQ6aG92ZXIgaW1nIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxufVxcbi5mZWF0dXJlQ2FyZDpob3ZlciBoNSxcXG4uZmVhdHVyZUNhcmQ6aG92ZXIgcCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5mZWF0dXJlQ2FyZCAuZmVhdHVyZUNhcmRJbWFnZSB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMzZweDtcXG59XFxuLmZlYXR1cmVDYXJkIGg1IHtcXG4gIG1hcmdpbjogMCBhdXRvIDE2cHggYXV0bztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcbi5mZWF0dXJlQ2FyZCBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi5mZWF0dXJlc1RhZ2xpbmUge1xcbiAgbWFyZ2luLXRvcDogMTYwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNjBweDtcXG4gIG1heC13aWR0aDogODQwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmZlYXR1cmVzVGFnbGluZSAuc2VjdGlvbkhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gIH1cXG59XFxuXFxuLnZhbHVlU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTYwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTI3OXB4KSB7XFxuICAudmFsdWVTZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgfVxcbn1cXG4udmFsdWVTZWN0aW9uIC5pbmZvUGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG4udmFsdWVTZWN0aW9uIC5pbmZvUGFuZWwgZGl2IHtcXG4gIG1heC13aWR0aDogNDgwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gIC52YWx1ZVNlY3Rpb24gLmluZm9QYW5lbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nOiAwIDI0cHg7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgfVxcbn1cXG4udmFsdWVTZWN0aW9uIC5pbmZvUGFuZWwgcCB7XFxuICBtYXgtd2lkdGg6IDQ0MHB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuLnZhbHVlU2VjdGlvbiAuaW5mb1BhbmVsIGEge1xcbiAgY29sb3I6ICMwMDcwZjA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4udmFsdWVTZWN0aW9uIC5pbWFnZVBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gIC52YWx1ZVNlY3Rpb24gLmltYWdlUGFuZWwge1xcbiAgICBncmlkLXJvdzogMjtcXG4gIH1cXG59XFxuLnZhbHVlU2VjdGlvbiAuaW1hZ2VQYW5lbCAuaW1hZ2VDb250YWluZXIge1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcbn1cXG4udmFsdWVTZWN0aW9uIC5pbWFnZVBhbmVsIC5pbWFnZUNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVwiLFwiJHB0LWRpdmlkZXItYmxhY2s6IHJnYmEoMjA2LCAyMTIsIDIyNCwgMC44KTtcXG5cXG4kcHJpbWFyeS1ibHVlOiAjMDA3MGYwO1xcbiRkYXJrLWJsdWU6ICMwMDVkZDY7XFxuJGJsYWNrOiAjMGQwZDBkO1xcbiRncmV5OiAjNjY2O1xcblwiLFwiQGltcG9ydCAnYnV0dG9ucyc7XFxuXFxuLy8gRGl2aWRlcnNcXG5cXG4uZGl2aWRlckhvcml6b250YWwge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxufVxcblwiLFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5cXG4vLyAgICAgXyAgICAgICAgICAgIF8gICAgICAgICAgIF8gICAgICAgICAgICAgICAgICAgICAgICAgICBfIF9cXG4vLyAgICAoXykgICAgICAgICAgfCB8ICAgICAgICAgfCB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgKF8pXFxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXFxuLy8gICAgfCB8ICdfIFxcXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXFxcIHwgJ18gYCBfIFxcXFwgLyBfIFxcXFwvIF9gIHwgfC8gX2AgfFxcbi8vICAgIHwgfCB8IHwgfCAoX198IHwgfF98IHwgKF98IHwgIF9fLyB8IHwgfCB8IHwgfCAgX18vIChffCB8IHwgKF98IHxcXG4vLyAgICB8X3xffCB8X3xcXFxcX19ffF98XFxcXF9fLF98XFxcXF9fLF98XFxcXF9fX3wgfF98IHxffCB8X3xcXFxcX19ffFxcXFxfXyxffF98XFxcXF9fLF98XFxuLy9cXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xcbi8vICAgICAgICAgICAgICAgICAgICAgICAgdjEuNC45XFxuLy9cXG4vLyAgICAgICAgICAgICAgICBodHRwOi8vaW5jbHVkZS1tZWRpYS5jb21cXG4vL1xcbi8vICAgICAgICAgQXV0aG9yczogRWR1YXJkbyBCb3VjYXMgKEBlZHVhcmRvYm91Y2FzKVxcbi8vICAgICAgICAgICAgICAgICAgSHVnbyBHaXJhdWRlbCAoQGh1Z29naXJhdWRlbClcXG4vL1xcbi8vICAgICAgVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2VcXG5cXG5cXG4vLy8vXFxuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXFxuLy8vIEBhY2Nlc3MgcHVibGljXFxuLy8vL1xcblxcblxcbi8vL1xcbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBnbG9iYWwgYnJlYWtwb2ludHNcXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXFxuLy8vICAkYnJlYWtwb2ludHM6ICgncGhvbmUnOiAzMjBweCk7XFxuLy8vXFxuJGJyZWFrcG9pbnRzOiAoXFxuICAncGhvbmUnOiAzMjBweCxcXG4gICd0YWJsZXQnOiA3NjhweCxcXG4gICdkZXNrdG9wJzogMTAyNHB4XFxuKSAhZGVmYXVsdDtcXG5cXG5cXG4vLy9cXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2Ygc3RhdGljIGV4cHJlc3Npb25zIG9yIG1lZGlhIHR5cGVzXFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIG1lZGlhIHR5cGUgKHNjcmVlbilcXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nOiAnc2NyZWVuJyk7XFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc3RhdGljIGV4cHJlc3Npb24gd2l0aCBsb2dpY2FsIGRpc2p1bmN0aW9uIChPUiBvcGVyYXRvcilcXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKFxcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcXG4vLy8gICk7XFxuLy8vXFxuJG1lZGlhLWV4cHJlc3Npb25zOiAoXFxuICAnc2NyZWVuJzogJ3NjcmVlbicsXFxuICAncHJpbnQnOiAncHJpbnQnLFxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcXG4gICdsYW5kc2NhcGUnOiAnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcXG4gICdwb3J0cmFpdCc6ICcob3JpZW50YXRpb246IHBvcnRyYWl0KScsXFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxcbiAgJ3JldGluYTN4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLCAobWluLXJlc29sdXRpb246IDM1MGRwaSksIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpJ1xcbikgIWRlZmF1bHQ7XFxuXFxuXFxuLy8vXFxuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBwaXhlbHMgaXMgZGVmaW5lZCBhcyBgMWAgYnkgZGVmYXVsdFxcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XFxuLy8vXFxuLy8vICAvKiBHZW5lcmF0ZXM6ICovXFxuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgZW1zIGlzIGRlZmluZWQgYXMgYDAuMDFgIGJ5IGRlZmF1bHRcXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XFxuLy8vXFxuLy8vICAvKiBHZW5lcmF0ZXM6ICovXFxuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciByZW1zIGlzIGRlZmluZWQgYXMgYDAuMWAgYnkgZGVmYXVsdCwgdG8gYmUgdXNlZCB3aXRoIGBmb250LXNpemU6IDYyLjUlO2BcXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cXG4vLy9cXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XFxuLy8vXFxuJHVuaXQtaW50ZXJ2YWxzOiAoXFxuICAncHgnOiAxLFxcbiAgJ2VtJzogMC4wMSxcXG4gICdyZW0nOiAwLjEsXFxuICAnJzogMFxcbikgIWRlZmF1bHQ7XFxuXFxuLy8vXFxuLy8vIERlZmluZXMgd2hldGhlciBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGF2YWlsYWJsZSwgdXNlZnVsIGZvciBjcmVhdGluZyBzZXBhcmF0ZSBzdHlsZXNoZWV0c1xcbi8vLyBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG1lZGlhIHF1ZXJpZXMuXFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBEaXNhYmxlcyBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzXFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XFxuLy8vICAgIC5mb28ge1xcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XFxuLy8vICAgIH1cXG4vLy8gIH1cXG4vLy9cXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cXG4vLy8gIC5mb28ge1xcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xcbi8vLyAgfVxcbi8vL1xcbiRpbS1tZWRpYS1zdXBwb3J0OiB0cnVlICFkZWZhdWx0O1xcblxcbi8vL1xcbi8vLyBTZWxlY3RzIHdoaWNoIGJyZWFrcG9pbnQgdG8gZW11bGF0ZSB3aGVuIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgZGlzYWJsZWQuIE1lZGlhIHF1ZXJpZXMgdGhhdCBzdGFydCBhdCBvclxcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxcbi8vL1xcbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludFxcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcXG4vLy8gICAgLmZvbyB7XFxuLy8vICAgICAgY29sb3I6IHRvbWF0bztcXG4vLy8gICAgfVxcbi8vLyAgfVxcbi8vL1xcbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xcbi8vLyAgLmZvbyB7XFxuLy8vICAgIGNvbG9yOiB0b21hdG87XFxuLy8vICB9XFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBkb2VzIG5vdCBpbnRlcmNlcHQgdGhlIGRlc2t0b3AgYnJlYWtwb2ludFxcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49ZGVza3RvcCcpIHtcXG4vLy8gICAgLmZvbyB7XFxuLy8vICAgICAgY29sb3I6IHRvbWF0bztcXG4vLy8gICAgfVxcbi8vLyAgfVxcbi8vL1xcbi8vLyAgLyogTm8gb3V0cHV0ICovXFxuLy8vXFxuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcXG5cXG4vLy9cXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xcbi8vLyBhcmUgbm90IHN1cHBvcnRlZC5cXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcXG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XFxuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAnc2NyZWVuJykge1xcbi8vLyAgICAuZm9vIHtcXG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xcbi8vLyAgICB9XFxuLy8vICB9XFxuLy8vXFxuLy8vICAgLyogR2VuZXJhdGVzOiAqL1xcbi8vLyAgIC5mb28ge1xcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcXG4vLy8gICB9XFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XFxuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3JldGluYTJ4Jykge1xcbi8vLyAgICAuZm9vIHtcXG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xcbi8vLyAgICB9XFxuLy8vICB9XFxuLy8vXFxuLy8vICAvKiBObyBvdXRwdXQgKi9cXG4vLy9cXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xcblxcbi8vLy9cXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXFxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxcbi8vLyBAYWNjZXNzIHByaXZhdGVcXG4vLy8vXFxuXFxuXFxuLy8vXFxuLy8vIExvZyBhIG1lc3NhZ2UgZWl0aGVyIHdpdGggYEBlcnJvcmAgaWYgc3VwcG9ydGVkXFxuLy8vIGVsc2Ugd2l0aCBgQHdhcm5gLCB1c2luZyBgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJylgXFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0Llxcbi8vL1xcbi8vLyBAcGFyYW0ge1N0cmluZ30gJG1lc3NhZ2UgLSBNZXNzYWdlIHRvIGxvZ1xcbi8vL1xcbkBmdW5jdGlvbiBpbS1sb2coJG1lc3NhZ2UpIHtcXG4gIEBpZiBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKSB7XFxuICAgIEBlcnJvciAkbWVzc2FnZTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAd2FybiAkbWVzc2FnZTtcXG4gICAgJF86IG5vb3AoKTtcXG4gIH1cXG5cXG4gIEByZXR1cm4gJG1lc3NhZ2U7XFxufVxcblxcblxcbi8vL1xcbi8vLyBXcmFwcGVyIG1peGluIGZvciB0aGUgbG9nIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIHdpdGggYSBtb3JlIGZyaWVuZGx5XFxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxcbi8vLyB3aXRoaW4gZnVuY3Rpb25zIGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbiBhIGZ1bmN0aW9uXFxuLy8vIGFuZCB1c2UgdGhlIG1peGluIGV2ZXJ5d2hlcmUgZWxzZSBiZWNhdXNlIGl0J3MgbXVjaCBtb3JlIGVsZWdhbnQuXFxuLy8vXFxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXFxuLy8vXFxuQG1peGluIGxvZygkbWVzc2FnZSkge1xcbiAgQGlmIGltLWxvZygkbWVzc2FnZSkge31cXG59XFxuXFxuXFxuLy8vXFxuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcXG4vLy8gdG8gdHJpZ2dlciBhIGNvbXBpbGluZyBlcnJvciBhbmQgc3RvcCB0aGUgcHJvY2Vzcy5cXG4vLy9cXG5AZnVuY3Rpb24gbm9vcCgpIHt9XFxuXFxuLy8vXFxuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXFxuLy8vXFxuLy8vIEBwYXJhbSB7QXJnbGlzdH0gICAkY29uZGl0aW9ucyAgLSBNZWRpYSBxdWVyeSBjb25kaXRpb25zXFxuLy8vXFxuLy8vIEByZXR1cm4ge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjb25kaXRpb25zIGFyZSBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnRcXG4vLy9cXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xcbiAgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludCk7XFxuXFxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcXG4gICAgQGlmIGltLWxvZygnYCN7JGltLW5vLW1lZGlhLWJyZWFrcG9pbnR9YCBpcyBub3QgYSB2YWxpZCBicmVha3BvaW50LicpIHt9XFxuICB9XFxuXFxuICBAZWFjaCAkY29uZGl0aW9uIGluICRjb25kaXRpb25zIHtcXG4gICAgQGlmIG5vdCBtYXAtaGFzLWtleSgkbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcXG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xcbiAgICAgICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xcbiAgICAgICR2YWx1ZTogZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGNvbmRpdGlvbiwgJG9wZXJhdG9yKTtcXG5cXG4gICAgICAvLyBzY3NzLWxpbnQ6ZGlzYWJsZSBTcGFjZUFyb3VuZE9wZXJhdG9yXFxuICAgICAgQGlmICgkcHJlZml4ID09ICdtYXgnIGFuZCAkdmFsdWUgPD0gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIG9yXFxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xcbiAgICAgICAgQHJldHVybiBmYWxzZTtcXG4gICAgICB9XFxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xcbiAgICAgIEByZXR1cm4gZmFsc2U7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEByZXR1cm4gdHJ1ZTtcXG59XFxuXFxuLy8vL1xcbi8vLyBQYXJzaW5nIGVuZ2luZVxcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcXG4vLy8gQGFjY2VzcyBwcml2YXRlXFxuLy8vL1xcblxcblxcbi8vL1xcbi8vLyBHZXQgb3BlcmF0b3Igb2YgYW4gZXhwcmVzc2lvblxcbi8vL1xcbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3Qgb3BlcmF0b3IgZnJvbVxcbi8vL1xcbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gQW55IG9mIGA+PWAsIGA+YCwgYDw9YCwgYDxgLCBg4omlYCwgYOKJpGBcXG4vLy9cXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pIHtcXG4gIEBlYWNoICRvcGVyYXRvciBpbiAoJz49JywgJz4nLCAnPD0nLCAnPCcsICfiiaUnLCAn4omkJykge1xcbiAgICBAaWYgc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcXG4gICAgICBAcmV0dXJuICRvcGVyYXRvcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xcbiAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcXG4gIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxcbiAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcXG4gIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cXG4gICRfOiBpbS1sb2coJ05vIG9wZXJhdG9yIGZvdW5kIGluIGAjeyRleHByZXNzaW9ufWAuJyk7XFxufVxcblxcblxcbi8vL1xcbi8vLyBHZXQgZGltZW5zaW9uIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3JcXG4vLy9cXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IGRpbWVuc2lvbiBmcm9tXFxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcXG4vLy9cXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGB3aWR0aGAgb3IgYGhlaWdodGAgKG9yIHBvdGVudGlhbGx5IGFueXRoaW5nIGVsc2UpXFxuLy8vXFxuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XFxuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcXG4gICRwYXJzZWQtZGltZW5zaW9uOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDAsICRvcGVyYXRvci1pbmRleCAtIDEpO1xcbiAgJGRpbWVuc2lvbjogJ3dpZHRoJztcXG5cXG4gIEBpZiBzdHItbGVuZ3RoKCRwYXJzZWQtZGltZW5zaW9uKSA+IDAge1xcbiAgICAkZGltZW5zaW9uOiAkcGFyc2VkLWRpbWVuc2lvbjtcXG4gIH1cXG5cXG4gIEByZXR1cm4gJGRpbWVuc2lvbjtcXG59XFxuXFxuXFxuLy8vXFxuLy8vIEdldCBkaW1lbnNpb24gcHJlZml4IGJhc2VkIG9uIGFuIG9wZXJhdG9yXFxuLy8vXFxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvclxcbi8vL1xcbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYG1pbmAgb3IgYG1heGBcXG4vLy9cXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcikge1xcbiAgQHJldHVybiBpZihpbmRleCgoJzwnLCAnPD0nLCAn4omkJyksICRvcGVyYXRvciksICdtYXgnLCAnbWluJyk7XFxufVxcblxcblxcbi8vL1xcbi8vLyBHZXQgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxcbi8vL1xcbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgdmFsdWUgZnJvbVxcbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXFxuLy8vXFxuLy8vIEByZXR1cm4ge051bWJlcn0gLSBBIG51bWVyaWMgdmFsdWVcXG4vLy9cXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XFxuICAkdmFsdWU6IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yLWluZGV4ICsgc3RyLWxlbmd0aCgkb3BlcmF0b3IpKTtcXG5cXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR2YWx1ZSkge1xcbiAgICAkdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xcbiAgfSBAZWxzZSB7XFxuICAgICR2YWx1ZTogdG8tbnVtYmVyKCR2YWx1ZSk7XFxuICB9XFxuXFxuICAkaW50ZXJ2YWw6IG1hcC1nZXQoJHVuaXQtaW50ZXJ2YWxzLCB1bml0KCR2YWx1ZSkpO1xcblxcbiAgQGlmIG5vdCAkaW50ZXJ2YWwge1xcbiAgICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXFxuICAgIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXFxuICAgIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxcbiAgICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxcbiAgICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXFxuICAgICRfOiBpbS1sb2coJ1Vua25vd24gdW5pdCBgI3t1bml0KCR2YWx1ZSl9YC4nKTtcXG4gIH1cXG5cXG4gIEBpZiAkb3BlcmF0b3IgPT0gJz4nIHtcXG4gICAgJHZhbHVlOiAkdmFsdWUgKyAkaW50ZXJ2YWw7XFxuICB9IEBlbHNlIGlmICRvcGVyYXRvciA9PSAnPCcge1xcbiAgICAkdmFsdWU6ICR2YWx1ZSAtICRpbnRlcnZhbDtcXG4gIH1cXG5cXG4gIEByZXR1cm4gJHZhbHVlO1xcbn1cXG5cXG5cXG4vLy9cXG4vLy8gUGFyc2UgYW4gZXhwcmVzc2lvbiB0byByZXR1cm4gYSB2YWxpZCBtZWRpYS1xdWVyeSBleHByZXNzaW9uXFxuLy8vXFxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gcGFyc2VcXG4vLy9cXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIFZhbGlkIG1lZGlhIHF1ZXJ5XFxuLy8vXFxuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcXG4gIC8vIElmIGl0IGlzIHBhcnQgb2YgJG1lZGlhLWV4cHJlc3Npb25zLCBpdCBoYXMgbm8gb3BlcmF0b3JcXG4gIC8vIHRoZW4gdGhlcmUgaXMgbm8gbmVlZCB0byBnbyBhbnkgZnVydGhlciwganVzdCByZXR1cm4gdGhlIHZhbHVlXFxuICBAaWYgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbikge1xcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbik7XFxuICB9XFxuXFxuICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKTtcXG4gICRkaW1lbnNpb246IGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcXG4gICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xcbiAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcXG5cXG4gIEByZXR1cm4gJygjeyRwcmVmaXh9LSN7JGRpbWVuc2lvbn06ICN7JHZhbHVlfSknO1xcbn1cXG5cXG4vLy9cXG4vLy8gU2xpY2UgYCRsaXN0YCBiZXR3ZWVuIGAkc3RhcnRgIGFuZCBgJGVuZGAgaW5kZXhlc1xcbi8vL1xcbi8vLyBAYWNjZXNzIHByaXZhdGVcXG4vLy9cXG4vLy8gQHBhcmFtIHtMaXN0fSAkbGlzdCAtIExpc3QgdG8gc2xpY2VcXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRzdGFydCBbMV0gLSBTdGFydCBpbmRleFxcbi8vLyBAcGFyYW0ge051bWJlcn0gJGVuZCBbbGVuZ3RoKCRsaXN0KV0gLSBFbmQgaW5kZXhcXG4vLy9cXG4vLy8gQHJldHVybiB7TGlzdH0gU2xpY2VkIGxpc3RcXG4vLy9cXG5AZnVuY3Rpb24gc2xpY2UoJGxpc3QsICRzdGFydDogMSwgJGVuZDogbGVuZ3RoKCRsaXN0KSkge1xcbiAgQGlmIGxlbmd0aCgkbGlzdCkgPCAxIG9yICRzdGFydCA+ICRlbmQge1xcbiAgICBAcmV0dXJuICgpO1xcbiAgfVxcblxcbiAgJHJlc3VsdDogKCk7XFxuXFxuICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XFxuICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCBudGgoJGxpc3QsICRpKSk7XFxuICB9XFxuXFxuICBAcmV0dXJuICRyZXN1bHQ7XFxufVxcblxcbi8vLy9cXG4vLy8gU3RyaW5nIHRvIG51bWJlciBjb252ZXJ0ZXJcXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxcbi8vLy9cXG5cXG5cXG4vLy9cXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxcbi8vL1xcbi8vLyBAcGFyYW0ge1N0cmluZyB8IE51bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYmUgcGFyc2VkXFxuLy8vXFxuLy8vIEByZXR1cm4ge051bWJlcn1cXG4vLy9cXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSAnbnVtYmVyJyB7XFxuICAgIEByZXR1cm4gJHZhbHVlO1xcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xcbiAgICAkXzogaW0tbG9nKCdWYWx1ZSBmb3IgYHRvLW51bWJlcmAgc2hvdWxkIGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nLicpO1xcbiAgfVxcblxcbiAgJGZpcnN0LWNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgMSwgMSk7XFxuICAkcmVzdWx0OiAwO1xcbiAgJGRpZ2l0czogMDtcXG4gICRtaW51czogKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKTtcXG4gICRudW1iZXJzOiAoJzAnOiAwLCAnMSc6IDEsICcyJzogMiwgJzMnOiAzLCAnNCc6IDQsICc1JzogNSwgJzYnOiA2LCAnNyc6IDcsICc4JzogOCwgJzknOiA5KTtcXG5cXG4gIC8vIFJlbW92ZSArLy0gc2lnbiBpZiBwcmVzZW50IGF0IGZpcnN0IGNoYXJhY3RlclxcbiAgQGlmICgkZmlyc3QtY2hhcmFjdGVyID09ICcrJyBvciAkZmlyc3QtY2hhcmFjdGVyID09ICctJykge1xcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xcbiAgfVxcblxcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xcbiAgICAkY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAkaSwgJGkpO1xcblxcbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XFxuICAgICAgQHJldHVybiB0by1sZW5ndGgoaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCksIHN0ci1zbGljZSgkdmFsdWUsICRpKSlcXG4gICAgfVxcblxcbiAgICBAaWYgJGNoYXJhY3RlciA9PSAnLicge1xcbiAgICAgICRkaWdpdHM6IDE7XFxuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcXG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICogMTAgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKTtcXG4gICAgfSBAZWxzZSB7XFxuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKSAvICRkaWdpdHM7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEByZXR1cm4gaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCk7XFxufVxcblxcblxcbi8vL1xcbi8vLyBBZGQgYCR1bml0YCB0byBgJHZhbHVlYFxcbi8vL1xcbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR1bml0IC0gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB1bml0XFxuLy8vXFxuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxcbi8vL1xcbkBmdW5jdGlvbiB0by1sZW5ndGgoJHZhbHVlLCAkdW5pdCkge1xcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcXG5cXG4gIEBpZiBub3QgaW5kZXgobWFwLWtleXMoJHVuaXRzKSwgJHVuaXQpIHtcXG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XFxuICB9XFxuXFxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XFxufVxcblxcbi8vL1xcbi8vLyBUaGlzIG1peGluIGFpbXMgYXQgcmVkZWZpbmluZyB0aGUgY29uZmlndXJhdGlvbiBqdXN0IGZvciB0aGUgc2NvcGUgb2ZcXG4vLy8gdGhlIGNhbGwuIEl0IGlzIGhlbHBmdWwgd2hlbiBoYXZpbmcgYSBjb21wb25lbnQgbmVlZGluZyBhbiBleHRlbmRlZFxcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcXG4vLy8gZm9yIGluc3RhbmNlLlxcbi8vL1xcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcXG4vLy9cXG4vLy8gQHBhcmFtIHtNYXB9ICR0d2Vha3BvaW50cyBbKCldIC0gTWFwIG9mIHR3ZWFrcG9pbnRzIHRvIGJlIG1lcmdlZCB3aXRoIGAkYnJlYWtwb2ludHNgXFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIGJyZWFrcG9pbnRzIHdpdGggYSB0d2Vha3BvaW50XFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XFxuLy8vICAgIC5mb28ge1xcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XFxuLy8vICAgICAgIC8vIC4uLlxcbi8vLyAgICAgIH1cXG4vLy8gICAgfVxcbi8vLyAgfVxcbi8vL1xcbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgbWVkaWEgZXhwcmVzc2lvbnMgd2l0aCBhIGN1c3RvbSBvbmVcXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xcbi8vLyAgICAuZm9vIHtcXG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScpIHtcXG4vLy8gICAgICAgLy8gLi4uXFxuLy8vICAgICAgfVxcbi8vLyAgICB9XFxuLy8vICB9XFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgYm90aCBjb25maWd1cmF0aW9uIG1hcHNcXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XFxuLy8vICAgIC5mb28ge1xcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJywgJzw9Y3VzdG9tJykge1xcbi8vLyAgICAgICAvLyAuLi5cXG4vLy8gICAgICB9XFxuLy8vICAgIH1cXG4vLy8gIH1cXG4vLy9cXG5AbWl4aW4gbWVkaWEtY29udGV4dCgkdHdlYWtwb2ludHM6ICgpLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnM6ICgpKSB7XFxuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXFxuICAkZ2xvYmFsLWJyZWFrcG9pbnRzOiAkYnJlYWtwb2ludHM7XFxuICAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zOiAkbWVkaWEtZXhwcmVzc2lvbnM7XFxuXFxuICAvLyBVcGRhdGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cXG4gICRicmVha3BvaW50czogbWFwLW1lcmdlKCRicmVha3BvaW50cywgJHR3ZWFrcG9pbnRzKSAhZ2xvYmFsO1xcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XFxuXFxuICBAY29udGVudDtcXG5cXG4gIC8vIFJlc3RvcmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cXG4gICRicmVha3BvaW50czogJGdsb2JhbC1icmVha3BvaW50cyAhZ2xvYmFsO1xcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XFxufVxcblxcbi8vLy9cXG4vLy8gaW5jbHVkZS1tZWRpYSBwdWJsaWMgZXhwb3NlZCBBUElcXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xcbi8vLyBAYWNjZXNzIHB1YmxpY1xcbi8vLy9cXG5cXG5cXG4vLy9cXG4vLy8gR2VuZXJhdGVzIGEgbWVkaWEgcXVlcnkgYmFzZWQgb24gYSBsaXN0IG9mIGNvbmRpdGlvbnNcXG4vLy9cXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnKSB7IH1cXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PXRhYmxldCcpIHsgfVxcbi8vL1xcbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNThweCcsICc8ODUwcHgnKSB7IH1cXG4vLy9cXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5kZXNrdG9wJywgJzw9MTM1MHB4JykgeyB9XFxuLy8vXFxuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCdyZXRpbmEyeCcpIHsgfVxcbi8vL1xcbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1MHB4JywgJzx0YWJsZXQnLCAncmV0aW5hM3gnKSB7IH1cXG4vLy9cXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcXG4gIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcXG4gIEBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPT0gMCkgb3JcXG4gICAgICAobm90ICRpbS1tZWRpYS1zdXBwb3J0IGFuZCBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSkge1xcbiAgICBAY29udGVudDtcXG4gIH0gQGVsc2UgaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID4gMCkge1xcbiAgICBAbWVkaWEgI3t1bnF1b3RlKHBhcnNlLWV4cHJlc3Npb24obnRoKCRjb25kaXRpb25zLCAxKSkpfSB7XFxuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxcXG4gICAgICBAaW5jbHVkZSBtZWRpYShzbGljZSgkY29uZGl0aW9ucywgMikuLi4pIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJidG5cIjogXCJIb21lX2J0bl9fMnZpYVdcIixcblx0XCJidG4tbGFyZ2VcIjogXCJIb21lX2J0bi1sYXJnZV9fMnFRbkJcIixcblx0XCJidG4tcHJpbWFyeVwiOiBcIkhvbWVfYnRuLXByaW1hcnlfXzE3NC1zXCIsXG5cdFwiYnRuLWRpc2FibGVkXCI6IFwiSG9tZV9idG4tZGlzYWJsZWRfXzJ2QmtLXCIsXG5cdFwiZGl2aWRlckhvcml6b250YWxcIjogXCJIb21lX2RpdmlkZXJIb3Jpem9udGFsX18xcGlVR1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18zc2FvLVwiLFxuXHRcImJvZHlDb250YWluZXJcIjogXCJIb21lX2JvZHlDb250YWluZXJfX1AtTUw1XCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMVoxYUdcIixcblx0XCJoZXJvXCI6IFwiSG9tZV9oZXJvX18xZzZLY1wiLFxuXHRcImhlcm9UZXh0Q29udGFpbmVyXCI6IFwiSG9tZV9oZXJvVGV4dENvbnRhaW5lcl9fM2lHR0VcIixcblx0XCJoZXJvVGl0bGVcIjogXCJIb21lX2hlcm9UaXRsZV9fMjE5eFFcIixcblx0XCJoZXJvU3VidGl0bGVcIjogXCJIb21lX2hlcm9TdWJ0aXRsZV9fMVg5QkNcIixcblx0XCJwcm9kdWN0SW1hZ2VDb250YWluZXJcIjogXCJIb21lX3Byb2R1Y3RJbWFnZUNvbnRhaW5lcl9fMnV6VF9cIixcblx0XCJwcm9kdWN0SW1hZ2VcIjogXCJIb21lX3Byb2R1Y3RJbWFnZV9fMUxmaUxcIixcblx0XCJ1c2Vyc0Jhbm5lclwiOiBcIkhvbWVfdXNlcnNCYW5uZXJfXzFpTDFMXCIsXG5cdFwidXNlcnNCYW5uZXJUZXh0XCI6IFwiSG9tZV91c2Vyc0Jhbm5lclRleHRfXzJ3NUI3XCIsXG5cdFwidXNlcnNMaXN0XCI6IFwiSG9tZV91c2Vyc0xpc3RfXzNKQ09XXCIsXG5cdFwidXNlcnNMb2dvV3JhcHBlclwiOiBcIkhvbWVfdXNlcnNMb2dvV3JhcHBlcl9feXhIZVlcIixcblx0XCJzZWN0aW9uSGVhZGVyXCI6IFwiSG9tZV9zZWN0aW9uSGVhZGVyX18xNWV4TFwiLFxuXHRcImNlbnRlcmVkXCI6IFwiSG9tZV9jZW50ZXJlZF9fM0JqTzBcIixcblx0XCJmZWF0dXJlc1NlY3Rpb25cIjogXCJIb21lX2ZlYXR1cmVzU2VjdGlvbl9fa1hXSFRcIixcblx0XCJmZWF0dXJlc1RpdGxlQ29udGFpbmVyXCI6IFwiSG9tZV9mZWF0dXJlc1RpdGxlQ29udGFpbmVyX18zVkFEQVwiLFxuXHRcImZlYXR1cmVzU3ViVGl0bGVcIjogXCJIb21lX2ZlYXR1cmVzU3ViVGl0bGVfXzFMYU15XCIsXG5cdFwiZmVhdHVyZXNHcmlkXCI6IFwiSG9tZV9mZWF0dXJlc0dyaWRfX1JCa05TXCIsXG5cdFwiZmVhdHVyZUNhcmRcIjogXCJIb21lX2ZlYXR1cmVDYXJkX18xRVRFNlwiLFxuXHRcImZlYXR1cmVDYXJkSW1hZ2VcIjogXCJIb21lX2ZlYXR1cmVDYXJkSW1hZ2VfXzJmYzRaXCIsXG5cdFwiZmVhdHVyZXNUYWdsaW5lXCI6IFwiSG9tZV9mZWF0dXJlc1RhZ2xpbmVfX0J5ZUJBXCIsXG5cdFwidmFsdWVTZWN0aW9uXCI6IFwiSG9tZV92YWx1ZVNlY3Rpb25fXzNtV2xrXCIsXG5cdFwiaW5mb1BhbmVsXCI6IFwiSG9tZV9pbmZvUGFuZWxfX0g3UzlqXCIsXG5cdFwiaW1hZ2VQYW5lbFwiOiBcIkhvbWVfaW1hZ2VQYW5lbF9fMzZfR25cIixcblx0XCJpbWFnZUNvbnRhaW5lclwiOiBcIkhvbWVfaW1hZ2VDb250YWluZXJfXzNrZnNjXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gOTMxOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX19uY2N3cGNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFx0XHR0aHJldyA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdH0gZmluYWxseSB7XG4vKioqKioqLyBcdFx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdF9fbmNjd3Bja19yZXF1aXJlX18uYWIgPSBfX2Rpcm5hbWUgKyBcIi9cIjsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg5MzEpO1xuLyoqKioqKi8gfSkoKVxuOyIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDg4MDpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX19uY2N3cGNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFx0XHR0aHJldyA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdH0gZmluYWxseSB7XG4vKioqKioqLyBcdFx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdF9fbmNjd3Bja19yZXF1aXJlX18uYWIgPSBfX2Rpcm5hbWUgKyBcIi9cIjsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg4ODApO1xuLyoqKioqKi8gfSkoKVxuOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEFtcFN0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxhbnk+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgQW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0FtcFN0YXRlQ29udGV4dCdcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luQW1wTW9kZSh7XG4gIGFtcEZpcnN0ID0gZmFsc2UsXG4gIGh5YnJpZCA9IGZhbHNlLFxuICBoYXNRdWVyeSA9IGZhbHNlLFxufSA9IHt9KTogYm9vbGVhbiB7XG4gIHJldHVybiBhbXBGaXJzdCB8fCAoaHlicmlkICYmIGhhc1F1ZXJ5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQW1wKCk6IGJvb2xlYW4ge1xuICAvLyBEb24ndCBhc3NpZ24gdGhlIGNvbnRleHQgdmFsdWUgdG8gYSB2YXJpYWJsZSB0byBzYXZlIGJ5dGVzXG4gIHJldHVybiBpc0luQW1wTW9kZShSZWFjdC51c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dCkpXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBIZWFkTWFuYWdlckNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8e1xuICB1cGRhdGVIZWFkPzogKHN0YXRlOiBhbnkpID0+IHZvaWRcbiAgbW91bnRlZEluc3RhbmNlcz86IGFueVxuICB1cGRhdGVTY3JpcHRzPzogKHN0YXRlOiBhbnkpID0+IHZvaWRcbiAgc2NyaXB0cz86IGFueVxufT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBIZWFkTWFuYWdlckNvbnRleHQuZGlzcGxheU5hbWUgPSAnSGVhZE1hbmFnZXJDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFZmZlY3QgZnJvbSAnLi9zaWRlLWVmZmVjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5pbXBvcnQgeyBIZWFkTWFuYWdlckNvbnRleHQgfSBmcm9tICcuL2hlYWQtbWFuYWdlci1jb250ZXh0J1xuaW1wb3J0IHsgaXNJbkFtcE1vZGUgfSBmcm9tICcuL2FtcCdcblxudHlwZSBXaXRoSW5BbXBNb2RlID0ge1xuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGUgPSBmYWxzZSk6IEpTWC5FbGVtZW50W10ge1xuICBjb25zdCBoZWFkID0gWzxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XVxuICBpZiAoIWluQW1wTW9kZSkge1xuICAgIGhlYWQucHVzaCg8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz4pXG4gIH1cbiAgcmV0dXJuIGhlYWRcbn1cblxuZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChcbiAgbGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBjaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+IHtcbiAgLy8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBsaXN0XG4gIH1cbiAgLy8gQWRkcyBzdXBwb3J0IGZvciBSZWFjdC5GcmFnbWVudFxuICBpZiAoY2hpbGQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQoXG4gICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoXG4gICAgICAgIChcbiAgICAgICAgICBmcmFnbWVudExpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICAgICAgICBmcmFnbWVudENoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4gICAgICAgICk6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ251bWJlcidcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3RcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZClcbiAgICAgICAgfSxcbiAgICAgICAgW11cbiAgICAgIClcbiAgICApXG4gIH1cbiAgcmV0dXJuIGxpc3QuY29uY2F0KGNoaWxkKVxufVxuXG5jb25zdCBNRVRBVFlQRVMgPSBbJ25hbWUnLCAnaHR0cEVxdWl2JywgJ2NoYXJTZXQnLCAnaXRlbVByb3AnXVxuXG4vKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi9cbmZ1bmN0aW9uIHVuaXF1ZSgpIHtcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKVxuICBjb25zdCB0YWdzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFUeXBlcyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhQ2F0ZWdvcmllczogeyBbbWV0YXR5cGU6IHN0cmluZ106IFNldDxzdHJpbmc+IH0gPSB7fVxuXG4gIHJldHVybiAoaDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICBsZXQgaXNVbmlxdWUgPSB0cnVlXG4gICAgbGV0IGhhc0tleSA9IGZhbHNlXG5cbiAgICBpZiAoaC5rZXkgJiYgdHlwZW9mIGgua2V5ICE9PSAnbnVtYmVyJyAmJiBoLmtleS5pbmRleE9mKCckJykgPiAwKSB7XG4gICAgICBoYXNLZXkgPSB0cnVlXG4gICAgICBjb25zdCBrZXkgPSBoLmtleS5zbGljZShoLmtleS5pbmRleE9mKCckJykgKyAxKVxuICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cy5hZGQoa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICBzd2l0Y2ggKGgudHlwZSkge1xuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgY2FzZSAnYmFzZSc6XG4gICAgICAgIGlmICh0YWdzLmhhcyhoLnR5cGUpKSB7XG4gICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZ3MuYWRkKGgudHlwZSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWV0YSc6XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNRVRBVFlQRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtZXRhdHlwZSA9IE1FVEFUWVBFU1tpXVxuICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpIGNvbnRpbnVlXG5cbiAgICAgICAgICBpZiAobWV0YXR5cGUgPT09ICdjaGFyU2V0Jykge1xuICAgICAgICAgICAgaWYgKG1ldGFUeXBlcy5oYXMobWV0YXR5cGUpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1ldGFUeXBlcy5hZGQobWV0YXR5cGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaC5wcm9wc1ttZXRhdHlwZV1cbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gfHwgbmV3IFNldCgpXG4gICAgICAgICAgICBpZiAoKG1ldGF0eXBlICE9PSAnbmFtZScgfHwgIWhhc0tleSkgJiYgY2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KVxuICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVW5pcXVlXG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqL1xuZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhcbiAgaGVhZEVsZW1lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIHByb3BzOiBXaXRoSW5BbXBNb2RlXG4pIHtcbiAgcmV0dXJuIGhlYWRFbGVtZW50c1xuICAgIC5yZWR1Y2UoXG4gICAgICAobGlzdDogUmVhY3QuUmVhY3RDaGlsZFtdLCBoZWFkRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICAgICAgY29uc3QgaGVhZEVsZW1lbnRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoXG4gICAgICAgICAgaGVhZEVsZW1lbnQucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gbGlzdC5jb25jYXQoaGVhZEVsZW1lbnRDaGlsZHJlbilcbiAgICAgIH0sXG4gICAgICBbXVxuICAgIClcbiAgICAucmVkdWNlKG9ubHlSZWFjdEVsZW1lbnQsIFtdKVxuICAgIC5yZXZlcnNlKClcbiAgICAuY29uY2F0KGRlZmF1bHRIZWFkKHByb3BzLmluQW1wTW9kZSkpXG4gICAgLmZpbHRlcih1bmlxdWUoKSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLm1hcCgoYzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYy5rZXkgfHwgaVxuICAgICAgaWYgKFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgICBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiZcbiAgICAgICAgIXByb3BzLmluQW1wTW9kZVxuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ2hyZWYnXSAmJlxuICAgICAgICAgIC8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuICAgICAgICAgIFsnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MnXS5zb21lKCh1cmwpID0+XG4gICAgICAgICAgICBjLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddXG4gICAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgeyBrZXkgfSlcbiAgICB9KVxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovXG5mdW5jdGlvbiBIZWFkKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgYW1wU3RhdGUgPSB1c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dClcbiAgY29uc3QgaGVhZE1hbmFnZXIgPSB1c2VDb250ZXh0KEhlYWRNYW5hZ2VyQ29udGV4dClcbiAgcmV0dXJuIChcbiAgICA8RWZmZWN0XG4gICAgICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZT17cmVkdWNlQ29tcG9uZW50c31cbiAgICAgIGhlYWRNYW5hZ2VyPXtoZWFkTWFuYWdlcn1cbiAgICAgIGluQW1wTW9kZT17aXNJbkFtcE1vZGUoYW1wU3RhdGUpfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0VmZmVjdD5cbiAgKVxufVxuXG4vLyBUT0RPOiBSZW1vdmUgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZVxuSGVhZC5yZXdpbmQgPSAoKSA9PiB7fVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxudHlwZSBTdGF0ZSA9IEpTWC5FbGVtZW50W10gfCB1bmRlZmluZWRcblxudHlwZSBTaWRlRWZmZWN0UHJvcHMgPSB7XG4gIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlOiA8VD4oXG4gICAgY29tcG9uZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgIHByb3BzOiBUXG4gICkgPT4gU3RhdGVcbiAgaGFuZGxlU3RhdGVDaGFuZ2U/OiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkXG4gIGhlYWRNYW5hZ2VyOiBhbnlcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudDxTaWRlRWZmZWN0UHJvcHM+IHtcbiAgcHJpdmF0ZSBfaGFzSGVhZE1hbmFnZXI6IGJvb2xlYW5cblxuICBlbWl0Q2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci51cGRhdGVIZWFkKFxuICAgICAgICB0aGlzLnByb3BzLnJlZHVjZUNvbXBvbmVudHNUb1N0YXRlKFxuICAgICAgICAgIFsuLi50aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNdLFxuICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLl9oYXNIZWFkTWFuYWdlciA9XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyICYmIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc1xuXG4gICAgaWYgKGlzU2VydmVyICYmIHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5kZWxldGUodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE3LjAuMic7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gMHhlYWNjO1xuZXhwb3J0cy5Qcm9maWxlciA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xuZXhwb3J0cy5TdXNwZW5zZSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIGV4cG9ydHMuU3RyaWN0TW9kZSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgZXhwb3J0cy5Qcm9maWxlciA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIGV4cG9ydHMuU3VzcGVuc2UgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IDBcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGFjdCgpIHRvIHRyYWNrIHdoZXRoZXIgeW91J3JlIGluc2lkZSBhbiBhY3QoKSBzY29wZS5cbiAqL1xudmFyIElzU29tZVJlbmRlcmVyQWN0aW5nID0ge1xuICBjdXJyZW50OiBmYWxzZVxufTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgSXNTb21lUmVuZGVyZXJBY3Rpbmc6IElzU29tZVJlbmRlcmVyQWN0aW5nLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBleHBvcnRzLlByb2ZpbGVyOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3RyaWN0TW9kZTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGNvbXBvbmVudE5hbWUsIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKCEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBlc2NhcGVkUHJlZml4ICsgKCAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgbWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIGV4aXN0aW5nIGVsZW1lbnQncyBrZXkgY2FuIGJlIGEgbnVtYmVyXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSBpbnN0ZWFkLlwiICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gbnVsbCAmJiB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXJyb3IoJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlOYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpc3BsYXlOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIpIHtcbiAgICAgICAgICAgIHdhcm4oJ1NldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiBDb250ZXh0LkNvbnN1bWVyIGhhcyBubyBlZmZlY3QuICcgKyBcIllvdSBzaG91bGQgc2V0IGl0IGRpcmVjdGx5IG9uIHRoZSBjb250ZXh0IHdpdGggQ29udGV4dC5kaXNwbGF5TmFtZSA9ICclcycuXCIsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBVbmluaXRpYWxpemVkID0gLTE7XG52YXIgUGVuZGluZyA9IDA7XG52YXIgUmVzb2x2ZWQgPSAxO1xudmFyIFJlamVjdGVkID0gMjtcblxuZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTsgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICBwZW5kaW5nLl9zdGF0dXMgPSBQZW5kaW5nO1xuICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICB2YXIgZGVmYXVsdEV4cG9ydCA9IG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGVmYXVsdEV4cG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IGRlZmF1bHRFeHBvcnQ7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZC5fcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IGN0b3JcbiAgfTtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX3BheWxvYWQ6IHBheWxvYWQsXG4gICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHJlbmRlci5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBleHBvcnRzLlByb2ZpbGVyIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IGV4cG9ydHMuU3RyaWN0TW9kZSB8fCB0eXBlID09PSBleHBvcnRzLlN1c3BlbnNlIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmICh0eXBlLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAgaWYgKCEoZGlzcGF0Y2hlciAhPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIGlmICh1bnN0YWJsZV9vYnNlcnZlZEJpdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IoJ3VzZUNvbnRleHQoKSBzZWNvbmQgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSAnICsgJ3VzZSBpbiBSZWFjdC4gUGFzc2luZyBpdCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1lvdSBwYXNzZWQ6ICVzLiVzJywgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzLCB0eXBlb2YgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSAnbnVtYmVyJyAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPyAnXFxuXFxuRGlkIHlvdSBjYWxsIGFycmF5Lm1hcCh1c2VDb250ZXh0KT8gJyArICdDYWxsaW5nIEhvb2tzIGluc2lkZSBhIGxvb3AgaXMgbm90IHN1cHBvcnRlZC4gJyArICdMZWFybiBtb3JlIGF0IGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cblxuICAgIG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgbmV3IFNldChbZnJvemVuT2JqZWN0XSk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXcgKi9cbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgRW1haWxTaWdudXAgZnJvbSAnY29tcG9uZW50cy9FbWFpbFNpZ251cCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgRmVhdHVyZUNhcmQgPSAoeyB0aXRsZSwgY2hpbGRyZW4sIGljb24gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVDYXJkfT5cbiAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVDYXJkSW1hZ2V9IHNyYz17aWNvbn0gd2lkdGg9ezM2fSBoZWlnaHQ9ezM2fSAvPlxuICAgIDxoNT57dGl0bGV9PC9oNT5cbiAgICA8cD57Y2hpbGRyZW59PC9wPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSAoeyBjaGlsZHJlbiwgY2VudGVyID0gZmFsc2UgfSkgPT4gKFxuICA8aDIgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5zZWN0aW9uSGVhZGVyLCBjZW50ZXIgJiYgc3R5bGVzLmNlbnRlcmVkKX0+e2NoaWxkcmVufTwvaDI+XG4pO1xuXG5jb25zdCBGZWF0dXJlU2VjdGlvbiA9ICh7IHRpdGxlLCBjbGFzc05hbWUsIGNoaWxkcmVuLCBpbWFnZVNyYywgaW1hZ2VBbHQsIGxlZnQgPSBmYWxzZSwgd2lkdGgsIGhlaWdodCB9KSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIHN0eWxlcy52YWx1ZVNlY3Rpb24pfT5cbiAgICB7ICFsZWZ0ICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VQYW5lbH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVNyY30gYWx0PXtpbWFnZUFsdH0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5pbmZvUGFuZWwsIHN0eWxlcy5sZWZ0KX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VjdGlvbkhlYWRlcj57dGl0bGV9PC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIHsgbGVmdCAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlUGFuZWx9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VTcmN9IGFsdD17aW1hZ2VBbHR9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9zZWN0aW9uPlxuKTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlByb3NwcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5Q29udGFpbmVyfT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RleHRDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RpdGxlfT5cbiAgICAgICAgICAgICAgICBUaGUgZG9ub3IgbWFuYWdlbWVudCB0b29sIHlvdSdsbCBsb3ZlIHVzaW5nXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1N1YnRpdGxlfT5cbiAgICAgICAgICAgICAgICBGcm9tIHRoZSBmaXJzdCBjb250YWN0IHRvIHRoZSBmaW5hbCBkb25hdGlvbiwgUHJvc3ByIGhlbHBzIHlvdVxuICAgICAgICAgICAgICAgIGVuZ2FnZSB5b3VyIGRvbm9ycywgYWxsIHdpdGhvdXQgbWFraW5nIGl0IGZlZWwgbGlrZSBhIGNob3JlLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sYXJnZVwiIGhyZWY9XCIjYm9va0RlbW9cIj5cbiAgICAgICAgICAgICAgQm9vayBhIGRlbW9cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2hlcm9faW1nLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlByb3NwciBQcm9kdWN0IEltYWdlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlfVxuICAgICAgICAgICAgICB3aWR0aD17MTE4OX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs5NjN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNCYW5uZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0Jhbm5lclRleHR9PlRydXN0ZWQgYnkgcHJvZmVzc2lvbmFscyBmcm9tIHRoZXNlIG9yZ2FuaXphdGlvbnM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMaXN0fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy90b3VyZXR0ZV9jYW5hZGEucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlRvdXJldHRlIENhbmFkYVwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTgxfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3NH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy9jb2YucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkNvbXBhbnkgb2YgRm9vbHNcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1OH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMb2dvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ29zX29yZ3Mvb3VyX3BsYWNlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJPdXIgUGxhY2VcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezI1OX1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMb2dvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ29zX29yZ3MvbXIucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIk1hbnVlbHMgUml2ZXJcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlckhvcml6b250YWx9IC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJmZWF0dXJlc1wiIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzVGFnbGluZX0+XG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlciBjZW50ZXI+VXNlIFByb3NwciB0byBidWlsZCBiZXR0ZXIgcmVsYXRpb25zaGlwcyB3aXRoIGRvbm9yczwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8RmVhdHVyZVNlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN0cmVuZ3RoZW5SZWxhdGlvbnNoaXBzUGFuZWx9XG4gICAgICAgICAgICB0aXRsZT1cIlN0cmVuZ3RoZW4gZG9ub3IgcmVsYXRpb25zaGlwc1wiXG4gICAgICAgICAgICBpbWFnZVNyYz1cIi9kb25vcl9wcm9maWxlLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJTYW1wbGUgZG9ub3IgcHJvZmlsZVwiXG4gICAgICAgICAgICB3aWR0aD17MTAwMH1cbiAgICAgICAgICAgIGhlaWdodD17NTcxfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEl0IGNhbiBiZSBjaGFsbGVuZ2luZyB0byBidWlsZCByZWxhdGlvbnNoaXBzIHdpdGggZG9ub3JzLiBDdXRcbiAgICAgICAgICAgIHRocm91Z2ggdGhlIGhhc3NsZSBhbmQgY3JlYXRlIGluZm9ybWF0aXZlIGRvbm9yIHByb2ZpbGVzIHRvXG4gICAgICAgICAgICBndWlkZSB5b3VyIGZ1bmRyYWlzaW5nIHByb2Nlc3MuXG4gICAgICAgICAgPC9GZWF0dXJlU2VjdGlvbj5cblxuICAgICAgICAgIDxGZWF0dXJlU2VjdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZW5nYWdlUGFuZWx9XG4gICAgICAgICAgICB0aXRsZT1cIkVmZmVjdGl2ZWx5IGVuZ2FnZSB3aXRoIHlvdXIgZG9ub3JzXCJcbiAgICAgICAgICAgIGltYWdlU3JjPVwiL2pvdXJuZXlfYnVpbGRlci5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiSm91cm5leSBCdWlsZGVyIERlbW8gSW1hZ2VcIlxuICAgICAgICAgICAgd2lkdGg9ezEwODR9XG4gICAgICAgICAgICBoZWlnaHQ9ezYxOX1cbiAgICAgICAgICAgIGxlZnRcbiAgICAgICAgICA+XG4gICAgICAgICAgICBNaXNzaW5nIG91dCBvbiBvcHBvcnR1bml0aWVzIHdpdGggZG9ub3JzIGNhbiBiZSBmcnVzdHJhdGluZy5cbiAgICAgICAgICAgIFBsYW4geW91ciBkb25vciBpbnRlcmFjdGlvbnMgaW4gYWR2YW5jZSBzbyB5b3UgY2FuIG1ha2UgdGhlIG1vc3RcbiAgICAgICAgICAgIG9mIGV2ZXJ5IG9wcG9ydHVuaXR5LlxuICAgICAgICAgIDwvRmVhdHVyZVNlY3Rpb24+XG5cbiAgICAgICAgICA8RmVhdHVyZVNlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm9ubGluZURvbmF0aW9uc1BhbmVsfVxuICAgICAgICAgICAgdGl0bGU9XCJJbXByb3ZlIG9ubGluZSBnaXZpbmdcIlxuICAgICAgICAgICAgaW1hZ2VTcmM9XCIvZG9uYXRpb25zLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJTYW1wbGUgZG9uYXRpb24gZm9ybVwiXG4gICAgICAgICAgICB3aWR0aD17MTA4NH1cbiAgICAgICAgICAgIGhlaWdodD17NjE5fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIERvbid0IHJpc2sgbG9zaW5nIHlvdXIgZG9ub3JzIGF0IHRoZSBmaW5pc2ggbGluZS4gVXNlIG91clxuICAgICAgICAgICAgY3VzdG9taXplYWJsZSBkb25hdGlvbiBmb3JtcyB0byBwcm92aWRlIGEgYmV0dGVyIGRvbm9yXG4gICAgICAgICAgICBleHBlcmllbmNlIGFuZCBjb252ZXJ0IG1vcmUgb2Z0ZW4uXG4gICAgICAgICAgPC9GZWF0dXJlU2VjdGlvbj5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzU2VjdGlvbn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzVGl0bGVDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8U2VjdGlvbkhlYWRlciBjZW50ZXI+QWxsIHlvdXIgZmF2b3JpdGUgZmVhdHVyZXMgaW4gYSBzaW5nbGUgdG9vbDwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc1N1YlRpdGxlfT5cbiAgICAgICAgICAgICAgICBEZXNpZ25lZCBhbmQgb3B0aW1pemVkIGZvciBiZXR0ZXIgZnVuZHJhaXNpbmcuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzR3JpZH0+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIkNsb3VkIGhvc3RlZFwiIGljb249XCJpY29ucy9jbG91ZC5zdmdcIj5cbiAgICAgICAgICAgICAgICBObyBzb2Z0d2FyZSB1cGRhdGVzLCBubyBtYWludGVuYW5jZS4gQWxsIHlvdSBuZWVkIGlzIGFuIG1vZGVyblxuICAgICAgICAgICAgICAgIHdlYiBicm93c2VyLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJTaW1wbGUgc2V0dXBcIiBpY29uPVwiaWNvbnMvc2V0dGluZ3Muc3ZnXCI+XG4gICAgICAgICAgICAgICAgU3RhcnQgbWFuYWdpbmcgeW91ciBkYXRhIGFuZCBidWlsZGluZyBkb25vciBqb3VybmV5cyB3aXRoIGEgZmV3XG4gICAgICAgICAgICAgICAgc2ltcGxlIGNsaWNrcy5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiQ291bnRsZXNzIGludGVncmF0aW9uc1wiIGljb249XCJpY29ucy9ncmlkLnN2Z1wiPlxuICAgICAgICAgICAgICAgIFNpbXBsaWZ5IHlvdXIgcHJvY2Vzc2VzLiBDb25uZWN0IHRvIGV4aXN0aW5nIHRvb2xzIHRoYXQgeW91IHVzZVxuICAgICAgICAgICAgICAgIGFuZCByZWR1Y2UgbWFudWFsIHdvcmsuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIlNlY3VyaXR5IGZpcnN0XCIgaWNvbj1cImljb25zL2xvY2suc3ZnXCI+XG4gICAgICAgICAgICAgICAgS2VlcCB5b3VyIGRhdGEgc2VjdXJlIHdpdGggYSByZWxpYWJsZSBkYXRhYmFzZSAoaG9zdGVkIHdpdGhcbiAgICAgICAgICAgICAgICBNb25nb0RCIEF0bGFz4oSiKS5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiQmV0dGVyIGNvbGxhYm9yYXRpb25cIiBpY29uPVwiaWNvbnMvY29sbGFib3JhdGlvbi5zdmdcIj5cbiAgICAgICAgICAgICAgICBSZWR1Y2UgbWlzY29tbXVuaWNhdGlvbi4gSW5zdGFudGx5IHN5bmMgeW91ciB3b3JrIGFjcm9zcyB5b3VyXG4gICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJFYXN5LXRvLXVzZVwiIGljb249XCJpY29ucy9jaGVja21hcmsuc3ZnXCI+XG4gICAgICAgICAgICAgICAgV2l0aCBvdXIgc29mdHdhcmUsIHlvdSBkb27igJl0IG5lZWQgdG8gd29ycnkgYWJvdXQgYWRkaXRpb25hbFxuICAgICAgICAgICAgICAgIHRyYWluaW5nIHRvIGdldCB0aGUgam9iIGRvbmUuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImJvb2tEZW1vXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmluYWxDdGFQYW5lbH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9IC8+XG4gICAgICAgICAgICA8RW1haWxTaWdudXAgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvbWFpbj5cblxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0Zvb3Rlci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRm9vdGVyLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRm9vdGVyLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vSG9tZS5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vSG9tZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0hvbWUubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==