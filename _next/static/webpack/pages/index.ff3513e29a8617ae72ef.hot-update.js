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
                maxLength: "255",
                "aria-labelledby": "labelFirstName",
                "aria-required": "true",
                role: "",
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
              lineNumber: 100,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('btn', 'btn-primary', !valid && 'btn-disabled'),
            type: "submit",
            disabled: !valid,
            children: "Request a demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbFNpZ251cC5qc3giXSwibmFtZXMiOlsiZW1haWxSZWdleCIsInZhbGlkYXRlRW1haWwiLCJlbWFpbCIsInRlc3QiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIkVtYWlsU2lnbnVwIiwidXNlU3RhdGUiLCJzZXRFbWFpbCIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJvcmdhbml6YXRpb24iLCJzZXRPcmdhbml6YXRpb24iLCJ2YWxpZCIsInN0eWxlcyIsImJvb2tEZW1vRm9ybSIsImZsb2F0aW5nUGFuZWwiLCJmb3JtV3JhcHBlciIsImZvcm1Db250ZW50IiwiZmllbGRSb3ciLCJ0ZXh0SW5wdXRIYWxmIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dElucHV0RnVsbCIsImNsYXNzTmFtZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsd0pBQW5COztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSztBQUFBLFNBQUlGLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQkMsTUFBTSxDQUFDRixLQUFELENBQU4sQ0FBY0csV0FBZCxFQUFoQixDQUFKO0FBQUEsQ0FBM0I7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEVBQUQsQ0FEVjtBQUFBLE1BQ2pCTCxLQURpQjtBQUFBLE1BQ1ZNLFFBRFU7O0FBQUEsbUJBRVVELHNEQUFRLENBQUMsRUFBRCxDQUZsQjtBQUFBLE1BRWpCRSxTQUZpQjtBQUFBLE1BRU5DLFlBRk07O0FBQUEsbUJBR1FILHNEQUFRLENBQUMsRUFBRCxDQUhoQjtBQUFBLE1BR2pCSSxRQUhpQjtBQUFBLE1BR1BDLFdBSE87O0FBQUEsbUJBSWdCTCxz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QUFSLEVBQXVCLENBQUNaLEtBQUQsSUFBVSxjQUFqQyxDQUE3QjtBQUErRSxnQkFBSSxFQUFDLFFBQXBGO0FBQTZGLG9CQUFRLEVBQUUsQ0FBQ0EsS0FBeEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvR0QsQ0ExR0Q7O0dBQU1ULFc7O0tBQUFBLFc7QUE0R1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZmMzUxM2UyOWE4NjE3YWU3MmVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9FbWFpbFNpZ251cC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IGVtYWlsUmVnZXggPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblxuY29uc3QgdmFsaWRhdGVFbWFpbCA9IGVtYWlsID0+IGVtYWlsUmVnZXgudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpO1xuXG5jb25zdCBFbWFpbFNpZ251cCA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmaXJzdE5hbWUsIHNldEZpcnN0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbb3JnYW5pemF0aW9uLCBzZXRPcmdhbml6YXRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCB2YWxpZCA9ICEhKHZhbGlkYXRlRW1haWwoZW1haWwpICYmIGZpcnN0TmFtZSAmJiBsYXN0TmFtZSAmJiBvcmdhbml6YXRpb24pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9va0RlbW9Gb3JtfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxvYXRpbmdQYW5lbH0+XG4gICAgICAgIDxoNT5UcnkgUHJvc3ByIHRvZGF5PC9oNT5cbiAgICAgICAgPHA+Qm9vayBhIGRlbW8gd2l0aCB1cyB0byBsZWFybiBtb3JlLjwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtV3JhcHBlcn0+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Db250ZW50fVxuICAgICAgICAgICAgbm9WYWxpZGF0ZT1cIm5vdmFsaWRhdGVcIlxuICAgICAgICAgICAgYWN0aW9uPVwiaHR0cHM6Ly9wcm9zcHIudXMyMC5saXN0LW1hbmFnZS5jb20vc3Vic2NyaWJlL3Bvc3Q/dT05ZGFiNTdkZWNmMWY0MDNhMzk4MDJkNDkzJmFtcDtpZD1mMTQ0NzU0MGJmXCJcbiAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkUm93fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5wdXRIYWxmfT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1jZS1GTkFNRVwiPlxuICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZSAqXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJGTkFNRVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm1jZS1GTkFNRVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YWN5XCJcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJsYWJlbEZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICByb2xlPVwiXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dEhhbGZ9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWNlLUxOQU1FXCI+XG4gICAgICAgICAgICAgICAgICBMYXN0IE5hbWUgKlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiTE5BTUVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtY2UtTE5BTUVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCYXJ0bGV0dFwiXG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIyNTVcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibGFiZWxMYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGRSb3d9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dEZ1bGx9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWNlLUVNQUlMXCI+XG4gICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzICpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibWNlLUVNQUlMXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJFTUFJTFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsQGFkZHJlc3MuY29tXCJcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJsYWJlbEVtYWlsQWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGRSb3d9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dEZ1bGx9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWNlLU9SR1wiPlxuICAgICAgICAgICAgICAgICAgT3JnYW5pemF0aW9uIE5hbWUgKlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm1jZS1PUkdcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIk9SR1wiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFDTUUgSW5jXCJcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJsYWJlbE9yZ2FuaXphdGlvbk5hbWVcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e29yZ2FuaXphdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE9yZ2FuaXphdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IC01MDAwcHg7XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYl85ZGFiNTdkZWNmMWY0MDNhMzk4MDJkNDkzX2YxNDQ3NTQwYmZcIlxuICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2J0bicsICdidG4tcHJpbWFyeScsICF2YWxpZCAmJiAnYnRuLWRpc2FibGVkJyl9IHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IXZhbGlkfT5cbiAgICAgICAgICAgICAgUmVxdWVzdCBhIGRlbW9cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVtYWlsU2lnbnVwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==