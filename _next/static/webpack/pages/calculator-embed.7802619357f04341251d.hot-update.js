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
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




var TargetAmountStep = function TargetAmountStep(_ref) {
  _s();

  var setTargetAmount = _ref.setTargetAmount;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      amount = _useState[0],
      setAmount = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TargetAmountStep,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Enter your fundraising goal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this), "How much do you want to fundraise?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        value: amount,
        inputMode: "decimal",
        min: 0,
        onChange: function onChange(e) {
          return setAmount(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return setTargetAmount(amount);
        },
        children: "Next Step"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_s(TargetAmountStep, "bZHaZdBRaKnkQpBOPbUIgu3hW48=");

_c = TargetAmountStep;

var FundraisingCalculator = function FundraisingCalculator() {
  _s2();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      targetAmount = _useState2[0],
      setTargetAmount = _useState2[1];

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
      lineNumber: 35,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_s2(FundraisingCalculator, "rJ/spLy+4M6Or4I3CRSEMQnGyPQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJ1c2VTdGF0ZSIsImFtb3VudCIsInNldEFtb3VudCIsInN0eWxlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkZ1bmRyYWlzaW5nQ2FsY3VsYXRvciIsInRhcmdldEFtb3VudCIsImhhbmRsZVRhcmdldEFtb3VudCIsInVzZUNhbGxiYWNrIiwicmF3QW1vdW50IiwicGFyc2VGbG9hdCIsImlzTmFOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsZUFBc0IsUUFBdEJBLGVBQXNCOztBQUFBLGtCQUNwQkMsc0RBQVEsQ0FBQyxFQUFELENBRFk7QUFBQSxNQUN6Q0MsTUFEeUM7QUFBQSxNQUNqQ0MsU0FEaUM7O0FBR2hELHNCQUNFO0FBQUssYUFBUyxFQUFFQyx5RUFBTSxDQUFDTCxnQkFBdkI7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYscURBR0U7QUFDRSxhQUFLLEVBQUVHLE1BRFQ7QUFFRSxpQkFBUyxFQUFDLFNBRlo7QUFHRSxXQUFHLEVBQUUsQ0FIUDtBQUlFLGdCQUFRLEVBQUUsa0JBQUFHLENBQUM7QUFBQSxpQkFBSUYsU0FBUyxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQUE7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFTRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNUCxlQUFlLENBQUNFLE1BQUQsQ0FBckI7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBbEJEOztHQUFNSCxnQjs7S0FBQUEsZ0I7O0FBb0JOLElBQU1TLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUFBOztBQUFBLG1CQUNNUCxzREFBUSxDQUFDLElBQUQsQ0FEZDtBQUFBLE1BQzNCUSxZQUQyQjtBQUFBLE1BQ2JULGVBRGE7O0FBRWxDLE1BQU1VLGtCQUFrQixHQUFHQyx5REFBVyxDQUFDLFVBQUNDLFNBQUQsRUFBZTtBQUNwRCxRQUFNVixNQUFNLEdBQUdXLFVBQVUsQ0FBQ0QsU0FBRCxDQUF6QjtBQUNBLFFBQUlFLEtBQUssQ0FBQ1osTUFBRCxDQUFULEVBQW1CO0FBQ25CLFFBQUlBLE1BQU0sSUFBSSxDQUFkLEVBQWlCO0FBQ2pCRixtQkFBZSxDQUFDRSxNQUFELENBQWY7QUFDRCxHQUxxQyxFQUtuQyxFQUxtQyxDQUF0QztBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFRSx5RUFBTSxDQUFDSSxxQkFBdkI7QUFBQSxjQUNJLENBQUNDLFlBQUQsaUJBQ0EscUVBQUMsZ0JBQUQ7QUFBa0IscUJBQWUsRUFBRUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBZkQ7O0lBQU1GLHFCOztNQUFBQSxxQjtBQWlCU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FsY3VsYXRvci1lbWJlZC43ODAyNjE5MzU3ZjA0MzQxMjUxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Z1bmRyYWlzaW5nQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBUYXJnZXRBbW91bnRTdGVwID0gKHsgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYXJnZXRBbW91bnRTdGVwfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+RW50ZXIgeW91ciBmdW5kcmFpc2luZyBnb2FsPC9oMj5cclxuICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgaW5wdXRNb2RlPVwiZGVjaW1hbFwiXHJcbiAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXRBbW91bnQoYW1vdW50KX0+TmV4dCBTdGVwPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBGdW5kcmFpc2luZ0NhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGhhbmRsZVRhcmdldEFtb3VudCA9IHVzZUNhbGxiYWNrKChyYXdBbW91bnQpID0+IHtcclxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQocmF3QW1vdW50KTtcclxuICAgIGlmIChpc05hTihhbW91bnQpKSByZXR1cm47XHJcbiAgICBpZiAoYW1vdW50IDw9IDApIHJldHVybjtcclxuICAgIHNldFRhcmdldEFtb3VudChhbW91bnQpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GdW5kcmFpc2luZ0NhbGN1bGF0b3J9PlxyXG4gICAgICB7ICF0YXJnZXRBbW91bnQgJiYgKFxyXG4gICAgICAgIDxUYXJnZXRBbW91bnRTdGVwIHNldFRhcmdldEFtb3VudD17aGFuZGxlVGFyZ2V0QW1vdW50fSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmRyYWlzaW5nQ2FsY3VsYXRvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==