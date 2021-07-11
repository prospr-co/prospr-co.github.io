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
      }, _this), "How much do you want to fundraise?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Next Step"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)]
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
      lineNumber: 29,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJzdHlsZXMiLCJGdW5kcmFpc2luZ0NhbGN1bGF0b3IiLCJ1c2VTdGF0ZSIsInRhcmdldEFtb3VudCIsImhhbmRsZVRhcmdldEFtb3VudCIsInVzZUNhbGxiYWNrIiwicmF3QW1vdW50IiwiYW1vdW50IiwicGFyc2VGbG9hdCIsImlzTmFOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUF5QjtBQUFBLE1BQXRCQyxlQUFzQixRQUF0QkEsZUFBc0I7QUFFaEQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHlFQUFNLENBQUNGLGdCQUF2QjtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixxREFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWkQ7O0tBQU1BLGdCOztBQWNOLElBQU1HLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLElBQUQsQ0FEZDtBQUFBLE1BQzNCQyxZQUQyQjtBQUFBLE1BQ2JKLGVBRGE7O0FBRWxDLE1BQU1LLGtCQUFrQixHQUFHQyx5REFBVyxDQUFDLFVBQUNDLFNBQUQsRUFBZTtBQUNwRCxRQUFNQyxNQUFNLEdBQUdDLFVBQVUsQ0FBQ0YsU0FBRCxDQUF6QjtBQUNBLFFBQUlHLEtBQUssQ0FBQ0YsTUFBRCxDQUFULEVBQW1CO0FBQ25CLFFBQUlBLE1BQU0sSUFBSSxDQUFkLEVBQWlCO0FBQ2pCUixtQkFBZSxDQUFDUSxNQUFELENBQWY7QUFDRCxHQUxxQyxFQUtuQyxFQUxtQyxDQUF0QztBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFUCx5RUFBTSxDQUFDQyxxQkFBdkI7QUFBQSxjQUNJLENBQUNFLFlBQUQsaUJBQ0EscUVBQUMsZ0JBQUQ7QUFBa0IscUJBQWUsRUFBRUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBZkQ7O0dBQU1ILHFCOztNQUFBQSxxQjtBQWlCU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FsY3VsYXRvci1lbWJlZC5jOGFiZDYzZTVlYmU3OGNkNjUzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Z1bmRyYWlzaW5nQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBUYXJnZXRBbW91bnRTdGVwID0gKHsgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFyZ2V0QW1vdW50U3RlcH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPkVudGVyIHlvdXIgZnVuZHJhaXNpbmcgZ29hbDwvaDI+XHJcbiAgICAgICAgSG93IG11Y2ggZG8geW91IHdhbnQgdG8gZnVuZHJhaXNlP1xyXG4gICAgICAgIDxpbnB1dCAvPlxyXG4gICAgICAgIDxidXR0b24+TmV4dCBTdGVwPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBGdW5kcmFpc2luZ0NhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGhhbmRsZVRhcmdldEFtb3VudCA9IHVzZUNhbGxiYWNrKChyYXdBbW91bnQpID0+IHtcclxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQocmF3QW1vdW50KTtcclxuICAgIGlmIChpc05hTihhbW91bnQpKSByZXR1cm47XHJcbiAgICBpZiAoYW1vdW50IDw9IDApIHJldHVybjtcclxuICAgIHNldFRhcmdldEFtb3VudChhbW91bnQpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GdW5kcmFpc2luZ0NhbGN1bGF0b3J9PlxyXG4gICAgICB7ICF0YXJnZXRBbW91bnQgJiYgKFxyXG4gICAgICAgIDxUYXJnZXRBbW91bnRTdGVwIHNldFRhcmdldEFtb3VudD17aGFuZGxlVGFyZ2V0QW1vdW50fSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmRyYWlzaW5nQ2FsY3VsYXRvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==