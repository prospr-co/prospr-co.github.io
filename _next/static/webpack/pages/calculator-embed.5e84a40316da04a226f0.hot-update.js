webpackHotUpdate_N_E("pages/calculator-embed",{

/***/ "./components/FundraisingCalculator.jsx":
/*!**********************************************!*\
  !*** ./components/FundraisingCalculator.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FundraisingCalculator.module.scss */ "./components/FundraisingCalculator.module.scss");
/* harmony import */ var _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "B:\\workspace\\prospr-landing-page\\components\\FundraisingCalculator.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var TargetAmountStep = function TargetAmountStep(_ref) {
  var setTargetAmount = _ref.setTargetAmount;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TargetAmountStep,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Enter your fundraising goal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), "How much do you want to fundraise?"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = TargetAmountStep;

var FundraisingCalculator = function FundraisingCalculator() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      targetAmount = _useState[0],
      setTargetAmount = _useState[1];

  var handleTargetAmount = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (rawAmount) {
    var amount = parseFloat(rawAmount);
    if (isNaN(amount)) return;
    if (amount <= 0) return;
    setTargetAmount(amount);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.FundraisingCalculator,
    children: !targetAmount && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TargetAmountStep, {
      setTargetAmount: handleTargetAmount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(FundraisingCalculator, "rJ/spLy+4M6Or4I3CRSEMQnGyPQ=");

_c2 = FundraisingCalculator;
/* harmony default export */ __webpack_exports__["default"] = (FundraisingCalculator);

var _c, _c2;

$RefreshReg$(_c, "TargetAmountStep");
$RefreshReg$(_c2, "FundraisingCalculator");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJzdHlsZXMiLCJGdW5kcmFpc2luZ0NhbGN1bGF0b3IiLCJ1c2VTdGF0ZSIsInRhcmdldEFtb3VudCIsImhhbmRsZVRhcmdldEFtb3VudCIsInVzZUNhbGxiYWNrIiwicmF3QW1vdW50IiwiYW1vdW50IiwicGFyc2VGbG9hdCIsImlzTmFOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUF5QjtBQUFBLE1BQXRCQyxlQUFzQixRQUF0QkEsZUFBc0I7QUFFaEQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHlFQUFNLENBQUNGLGdCQUF2QjtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVZEOztLQUFNQSxnQjs7QUFZTixJQUFNRyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxJQUFELENBRGQ7QUFBQSxNQUMzQkMsWUFEMkI7QUFBQSxNQUNiSixlQURhOztBQUVsQyxNQUFNSyxrQkFBa0IsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxTQUFELEVBQWU7QUFDcEQsUUFBTUMsTUFBTSxHQUFHQyxVQUFVLENBQUNGLFNBQUQsQ0FBekI7QUFDQSxRQUFJRyxLQUFLLENBQUNGLE1BQUQsQ0FBVCxFQUFtQjtBQUNuQixRQUFJQSxNQUFNLElBQUksQ0FBZCxFQUFpQjtBQUNqQlIsbUJBQWUsQ0FBQ1EsTUFBRCxDQUFmO0FBQ0QsR0FMcUMsRUFLbkMsRUFMbUMsQ0FBdEM7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVAseUVBQU0sQ0FBQ0MscUJBQXZCO0FBQUEsY0FDSSxDQUFDRSxZQUFELGlCQUNBLHFFQUFDLGdCQUFEO0FBQWtCLHFCQUFlLEVBQUVDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQWZEOztHQUFNSCxxQjs7TUFBQUEscUI7QUFpQlNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbGN1bGF0b3ItZW1iZWQuNWU4NGE0MDMxNmRhMDRhMjI2ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GdW5kcmFpc2luZ0NhbGN1bGF0b3IubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgVGFyZ2V0QW1vdW50U3RlcCA9ICh7IHNldFRhcmdldEFtb3VudCB9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhcmdldEFtb3VudFN0ZXB9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5FbnRlciB5b3VyIGZ1bmRyYWlzaW5nIGdvYWw8L2gyPlxyXG4gICAgICAgIEhvdyBtdWNoIGRvIHlvdSB3YW50IHRvIGZ1bmRyYWlzZT9cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEZ1bmRyYWlzaW5nQ2FsY3VsYXRvciA9ICgpID0+IHtcclxuICBjb25zdCBbdGFyZ2V0QW1vdW50LCBzZXRUYXJnZXRBbW91bnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgaGFuZGxlVGFyZ2V0QW1vdW50ID0gdXNlQ2FsbGJhY2soKHJhd0Ftb3VudCkgPT4ge1xyXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChyYXdBbW91bnQpO1xyXG4gICAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybjtcclxuICAgIGlmIChhbW91bnQgPD0gMCkgcmV0dXJuO1xyXG4gICAgc2V0VGFyZ2V0QW1vdW50KGFtb3VudCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcn0+XHJcbiAgICAgIHsgIXRhcmdldEFtb3VudCAmJiAoXHJcbiAgICAgICAgPFRhcmdldEFtb3VudFN0ZXAgc2V0VGFyZ2V0QW1vdW50PXtoYW5kbGVUYXJnZXRBbW91bnR9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVuZHJhaXNpbmdDYWxjdWxhdG9yO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9