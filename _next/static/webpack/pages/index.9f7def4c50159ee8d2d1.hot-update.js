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
            style: "position: absolute; left: -5000px;",
            "aria-hidden": "true",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "b_9dab57decf1f403a39802d493_f1447540bf",
              tabIndex: "-1",
              value: ""
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
            lineNumber: 114,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbFNpZ251cC5qc3giXSwibmFtZXMiOlsiZW1haWxSZWdleCIsInZhbGlkYXRlRW1haWwiLCJlbWFpbCIsInRlc3QiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIkVtYWlsU2lnbnVwIiwidXNlU3RhdGUiLCJzZXRFbWFpbCIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJvcmdhbml6YXRpb24iLCJzZXRPcmdhbml6YXRpb24iLCJ2YWxpZCIsInN0eWxlcyIsImJvb2tEZW1vRm9ybSIsImZsb2F0aW5nUGFuZWwiLCJmb3JtV3JhcHBlciIsImZvcm1Db250ZW50IiwiZmllbGRSb3ciLCJ0ZXh0SW5wdXRIYWxmIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dElucHV0RnVsbCIsImNsYXNzTmFtZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsd0pBQW5COztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSztBQUFBLFNBQUlGLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQkMsTUFBTSxDQUFDRixLQUFELENBQU4sQ0FBY0csV0FBZCxFQUFoQixDQUFKO0FBQUEsQ0FBM0I7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEVBQUQsQ0FEVjtBQUFBLE1BQ2pCTCxLQURpQjtBQUFBLE1BQ1ZNLFFBRFU7O0FBQUEsbUJBRVVELHNEQUFRLENBQUMsRUFBRCxDQUZsQjtBQUFBLE1BRWpCRSxTQUZpQjtBQUFBLE1BRU5DLFlBRk07O0FBQUEsbUJBR1FILHNEQUFRLENBQUMsRUFBRCxDQUhoQjtBQUFBLE1BR2pCSSxRQUhpQjtBQUFBLE1BR1BDLFdBSE87O0FBQUEsbUJBSWdCTCxz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QUFDLElBSFg7QUFJRSxtQkFBSyxFQUFDO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckZGLGVBNkZFO0FBQVEscUJBQVMsRUFBRUUsaURBQVUsQ0FBQyxLQUFELEVBQVEsYUFBUixFQUF1QixDQUFDWixLQUFELElBQVUsY0FBakMsQ0FBN0I7QUFBK0UsZ0JBQUksRUFBQyxRQUFwRjtBQUE2RixvQkFBUSxFQUFFLENBQUNBLEtBQXhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkdELENBakhEOztHQUFNVCxXOztLQUFBQSxXO0FBbUhTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZjdkZWY0YzUwMTU5ZWU4ZDJkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRW1haWxTaWdudXAubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBlbWFpbFJlZ2V4ID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cbmNvbnN0IHZhbGlkYXRlRW1haWwgPSBlbWFpbCA9PiBlbWFpbFJlZ2V4LnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcblxuY29uc3QgRW1haWxTaWdudXAgPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW29yZ2FuaXphdGlvbiwgc2V0T3JnYW5pemF0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgdmFsaWQgPSAhISh2YWxpZGF0ZUVtYWlsKGVtYWlsKSAmJiBmaXJzdE5hbWUgJiYgbGFzdE5hbWUgJiYgb3JnYW5pemF0aW9uKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvb2tEZW1vRm9ybX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsb2F0aW5nUGFuZWx9PlxuICAgICAgICA8aDU+VHJ5IFByb3NwciB0b2RheTwvaDU+XG4gICAgICAgIDxwPkJvb2sgYSBkZW1vIHdpdGggdXMgdG8gbGVhcm4gbW9yZS48L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybVdyYXBwZXJ9PlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udGVudH1cbiAgICAgICAgICAgIG5vVmFsaWRhdGU9XCJub3ZhbGlkYXRlXCJcbiAgICAgICAgICAgIGFjdGlvbj1cImh0dHBzOi8vcHJvc3ByLnVzMjAubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9OWRhYjU3ZGVjZjFmNDAzYTM5ODAyZDQ5MyZhbXA7aWQ9ZjE0NDc1NDBiZlwiXG4gICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWVsZFJvd30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dElucHV0SGFsZn0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtY2UtRk5BTUVcIj5cbiAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgKlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiRk5BTUVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtY2UtRk5BTUVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFjeVwiXG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezI1NX1cbiAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17MX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImxhYmVsRmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Rmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5wdXRIYWxmfT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1jZS1MTkFNRVwiPlxuICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lICpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIkxOQU1FXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibWNlLUxOQU1FXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmFydGxldHRcIlxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyNTV9XG4gICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9ezF9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJsYWJlbExhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGRSb3d9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dEZ1bGx9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWNlLUVNQUlMXCI+XG4gICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzICpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibWNlLUVNQUlMXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJFTUFJTFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsQGFkZHJlc3MuY29tXCJcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjU1fVxuICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPXsxfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibGFiZWxFbWFpbEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWVsZFJvd30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dElucHV0RnVsbH0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtY2UtT1JHXCI+XG4gICAgICAgICAgICAgICAgICBPcmdhbml6YXRpb24gTmFtZSAqXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibWNlLU9SR1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiT1JHXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQUNNRSBJbmNcIlxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyNTV9XG4gICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9ezF9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJsYWJlbE9yZ2FuaXphdGlvbk5hbWVcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcmdhbml6YXRpb259XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRPcmdhbml6YXRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAtNTAwMHB4O1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImJfOWRhYjU3ZGVjZjFmNDAzYTM5ODAyZDQ5M19mMTQ0NzU0MGJmXCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdidG4nLCAnYnRuLXByaW1hcnknLCAhdmFsaWQgJiYgJ2J0bi1kaXNhYmxlZCcpfSB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyF2YWxpZH0+XG4gICAgICAgICAgICAgIFJlcXVlc3QgYSBkZW1vXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWFpbFNpZ251cDtcbiJdLCJzb3VyY2VSb290IjoiIn0=