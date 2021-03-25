webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);


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
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Book a demo with us to learn more."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
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
                children: "First Name *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "FNAME",
                id: "mce-FNAME",
                placeholder: "Stacy",
                maxLength: "255",
                "aria-labelledby": "labelFirstName",
                "aria-required": "true",
                value: firstName,
                onChange: function onChange(e) {
                  return setFirstName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInputHalf,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "mce-LNAME",
                children: "Last Name *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "LNAME",
                id: "mce-LNAME",
                placeholder: "Bartlett",
                maxLength: "255",
                "aria-labelledby": "labelLastName",
                "aria-required": "true",
                value: lastName,
                onChange: function onChange(e) {
                  return setLastName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fieldRow,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInputFull,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "mce-EMAIL",
                children: "Email Address *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "email",
                id: "mce-EMAIL",
                name: "EMAIL",
                placeholder: "email@address.com",
                maxLength: "255",
                "aria-labelledby": "labelEmailAddress",
                "aria-required": "true",
                value: email,
                onChange: function onChange(e) {
                  return setEmail(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fieldRow,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _EmailSignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textInputFull,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "mce-ORG",
                children: "Organization Name *"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "mce-ORG",
                name: "ORG",
                placeholder: "ACME Inc",
                maxLength: "255",
                "aria-labelledby": "labelOrganizationName",
                "aria-required": "true",
                value: organization,
                onChange: function onChange(e) {
                  return setOrganization(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('btn', 'btn-primary', !valid && 'btn-disabled'),
            type: "submit",
            disabled: !valid,
            children: "Request a demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbFNpZ251cC5qc3giXSwibmFtZXMiOlsiZW1haWxSZWdleCIsInZhbGlkYXRlRW1haWwiLCJlbWFpbCIsInRlc3QiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIkVtYWlsU2lnbnVwIiwidXNlU3RhdGUiLCJzZXRFbWFpbCIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJvcmdhbml6YXRpb24iLCJzZXRPcmdhbml6YXRpb24iLCJ2YWxpZCIsInN0eWxlcyIsImJvb2tEZW1vRm9ybSIsImZsb2F0aW5nUGFuZWwiLCJmb3JtV3JhcHBlciIsImZvcm1Db250ZW50IiwiZmllbGRSb3ciLCJ0ZXh0SW5wdXRIYWxmIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dElucHV0RnVsbCIsImNsYXNzTmFtZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLHdKQUFuQjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUs7QUFBQSxTQUFJRixVQUFVLENBQUNHLElBQVgsQ0FBZ0JDLE1BQU0sQ0FBQ0YsS0FBRCxDQUFOLENBQWNHLFdBQWQsRUFBaEIsQ0FBSjtBQUFBLENBQTNCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUNqQkwsS0FEaUI7QUFBQSxNQUNWTSxRQURVOztBQUFBLG1CQUVVRCxzREFBUSxDQUFDLEVBQUQsQ0FGbEI7QUFBQSxNQUVqQkUsU0FGaUI7QUFBQSxNQUVOQyxZQUZNOztBQUFBLG1CQUdRSCxzREFBUSxDQUFDLEVBQUQsQ0FIaEI7QUFBQSxNQUdqQkksUUFIaUI7QUFBQSxNQUdQQyxXQUhPOztBQUFBLG1C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QURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJGRCxDQWpHRDs7R0FBTVQsVzs7S0FBQUEsVztBQW1HU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGVjMWMxMTIyNWI0MWJiZmRhMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0VtYWlsU2lnbnVwLm1vZHVsZS5zY3NzJztcbmltcG9ydCBNYWluU3R5bGVzIGZyb20gJ3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJztcblxuY29uc3QgZW1haWxSZWdleCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXG5jb25zdCB2YWxpZGF0ZUVtYWlsID0gZW1haWwgPT4gZW1haWxSZWdleC50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSk7XG5cbmNvbnN0IEVtYWlsU2lnbnVwID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtvcmdhbml6YXRpb24sIHNldE9yZ2FuaXphdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHZhbGlkID0gISEodmFsaWRhdGVFbWFpbChlbWFpbCkgJiYgZmlyc3ROYW1lICYmIGxhc3ROYW1lICYmIG9yZ2FuaXphdGlvbik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rRGVtb0Zvcm19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbG9hdGluZ1BhbmVsfT5cbiAgICAgICAgPGg1PlRyeSBQcm9zcHIgdG9kYXk8L2g1PlxuICAgICAgICA8cD5Cb29rIGEgZGVtbyB3aXRoIHVzIHRvIGxlYXJuIG1vcmUuPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1XcmFwcGVyfT5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRlbnR9XG4gICAgICAgICAgICBub1ZhbGlkYXRlPVwibm92YWxpZGF0ZVwiXG4gICAgICAgICAgICBhY3Rpb249XCJodHRwczovL3Byb3Nwci51czIwLmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PTlkYWI1N2RlY2YxZjQwM2EzOTgwMmQ0OTMmYW1wO2lkPWYxNDQ3NTQwYmZcIlxuICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGRSb3d9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dEhhbGZ9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWNlLUZOQU1FXCI+XG4gICAgICAgICAgICAgICAgICBGaXJzdCBOYW1lICpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIkZOQU1FXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibWNlLUZOQU1FXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhY3lcIlxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMjU1XCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImxhYmVsRmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dEhhbGZ9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWNlLUxOQU1FXCI+XG4gICAgICAgICAgICAgICAgICBMYXN0IE5hbWUgKlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiTE5BTUVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtY2UtTE5BTUVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCYXJ0bGV0dFwiXG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIyNTVcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibGFiZWxMYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGRSb3d9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dEZ1bGx9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWNlLUVNQUlMXCI+XG4gICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzICpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibWNlLUVNQUlMXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJFTUFJTFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsQGFkZHJlc3MuY29tXCJcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJsYWJlbEVtYWlsQWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGRSb3d9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dEZ1bGx9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWNlLU9SR1wiPlxuICAgICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uIE5hbWUgKlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm1jZS1PUkdcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIk9SR1wiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFDTUUgSW5jXCJcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJsYWJlbE9yZ2FuaXphdGlvbk5hbWVcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e29yZ2FuaXphdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE9yZ2FuaXphdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdidG4nLCAnYnRuLXByaW1hcnknLCAhdmFsaWQgJiYgJ2J0bi1kaXNhYmxlZCcpfSB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyF2YWxpZH0+XG4gICAgICAgICAgICAgIFJlcXVlc3QgYSBkZW1vXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWFpbFNpZ251cDtcbiJdLCJzb3VyY2VSb290IjoiIn0=