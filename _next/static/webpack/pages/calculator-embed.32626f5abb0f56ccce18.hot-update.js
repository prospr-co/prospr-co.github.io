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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Enter your fundraising goal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), "How much do you want to fundraise?"]
  }, void 0, true, {
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
      lineNumber: 25,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJGdW5kcmFpc2luZ0NhbGN1bGF0b3IiLCJ1c2VTdGF0ZSIsInRhcmdldEFtb3VudCIsImhhbmRsZVRhcmdldEFtb3VudCIsInVzZUNhbGxiYWNrIiwicmF3QW1vdW50IiwiYW1vdW50IiwicGFyc2VGbG9hdCIsImlzTmFOIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUF5QjtBQUFBLE1BQXRCQyxlQUFzQixRQUF0QkEsZUFBc0I7QUFFaEQsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FSRDs7S0FBTUQsZ0I7O0FBVU4sSUFBTUUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsSUFBRCxDQURkO0FBQUEsTUFDM0JDLFlBRDJCO0FBQUEsTUFDYkgsZUFEYTs7QUFFbEMsTUFBTUksa0JBQWtCLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsU0FBRCxFQUFlO0FBQ3BELFFBQU1DLE1BQU0sR0FBR0MsVUFBVSxDQUFDRixTQUFELENBQXpCO0FBQ0EsUUFBSUcsS0FBSyxDQUFDRixNQUFELENBQVQsRUFBbUI7QUFDbkIsUUFBSUEsTUFBTSxJQUFJLENBQWQsRUFBaUI7QUFDakJQLG1CQUFlLENBQUNPLE1BQUQsQ0FBZjtBQUNELEdBTHFDLEVBS25DLEVBTG1DLENBQXRDO0FBTUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVHLHlFQUFNLENBQUNULHFCQUF2QjtBQUFBLGNBQ0ksQ0FBQ0UsWUFBRCxpQkFDQSxxRUFBQyxnQkFBRDtBQUFrQixxQkFBZSxFQUFFQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FmRDs7R0FBTUgscUI7O01BQUFBLHFCO0FBaUJTQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWxjdWxhdG9yLWVtYmVkLjMyNjI2ZjVhYmIwZjU2Y2NjZTE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRnVuZHJhaXNpbmdDYWxjdWxhdG9yLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFRhcmdldEFtb3VudFN0ZXAgPSAoeyBzZXRUYXJnZXRBbW91bnQgfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPkVudGVyIHlvdXIgZnVuZHJhaXNpbmcgZ29hbDwvaDI+XHJcbiAgICAgIEhvdyBtdWNoIGRvIHlvdSB3YW50IHRvIGZ1bmRyYWlzZT9cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgRnVuZHJhaXNpbmdDYWxjdWxhdG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0YXJnZXRBbW91bnQsIHNldFRhcmdldEFtb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBoYW5kbGVUYXJnZXRBbW91bnQgPSB1c2VDYWxsYmFjaygocmF3QW1vdW50KSA9PiB7XHJcbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KHJhd0Ftb3VudCk7XHJcbiAgICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuO1xyXG4gICAgaWYgKGFtb3VudCA8PSAwKSByZXR1cm47XHJcbiAgICBzZXRUYXJnZXRBbW91bnQoYW1vdW50KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRnVuZHJhaXNpbmdDYWxjdWxhdG9yfT5cclxuICAgICAgeyAhdGFyZ2V0QW1vdW50ICYmIChcclxuICAgICAgICA8VGFyZ2V0QW1vdW50U3RlcCBzZXRUYXJnZXRBbW91bnQ9e2hhbmRsZVRhcmdldEFtb3VudH0gLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5kcmFpc2luZ0NhbGN1bGF0b3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=