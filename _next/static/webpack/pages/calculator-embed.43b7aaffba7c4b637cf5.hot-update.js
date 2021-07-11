webpackHotUpdate_N_E("pages/calculator-embed",{

/***/ "./components/Input.jsx":
/*!******************************!*\
  !*** ./components/Input.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input.module.scss */ "./components/Input.module.scss");
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Input_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "B:\\workspace\\prospr-landing-page\\components\\Input.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var Input = function Input(_ref) {
  _s();

  var value = _ref.value,
      inputMode = _ref.inputMode,
      min = _ref.min,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      required = _ref.required,
      step = _ref.step,
      type = _ref.type,
      placeholder = _ref.placeholder,
      autoFocus = _ref.autoFocus,
      onPressEnter = _ref.onPressEnter;
  var handleKeyPress = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    if (e.keyCode === 13) {
      onPressEnter();
    }
  }, [onPressEnter]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
    value: value,
    inputMode: inputMode,
    min: min,
    onChange: onChange,
    onBlur: onBlur,
    required: required,
    step: step,
    type: type,
    placeholder: placeholder,
    autoFocus: autoFocus,
    className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Input,
    onKeyPress: handleKeyPress
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(Input, "wy5hJ4nnpyg1xJvG7kUhUmSSK6c=");

_c = Input;
Input.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  inputMode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  min: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  required: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  step: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

var _c;

$RefreshReg$(_c, "Input");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC5qc3giXSwibmFtZXMiOlsiSW5wdXQiLCJ2YWx1ZSIsImlucHV0TW9kZSIsIm1pbiIsIm9uQ2hhbmdlIiwib25CbHVyIiwicmVxdWlyZWQiLCJzdGVwIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0b0ZvY3VzIiwib25QcmVzc0VudGVyIiwiaGFuZGxlS2V5UHJlc3MiLCJ1c2VDYWxsYmFjayIsImUiLCJrZXlDb2RlIiwic3R5bGVzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55Iiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FHUjtBQUFBOztBQUFBLE1BRkpDLEtBRUksUUFGSkEsS0FFSTtBQUFBLE1BRkdDLFNBRUgsUUFGR0EsU0FFSDtBQUFBLE1BRmNDLEdBRWQsUUFGY0EsR0FFZDtBQUFBLE1BRm1CQyxRQUVuQixRQUZtQkEsUUFFbkI7QUFBQSxNQUY2QkMsTUFFN0IsUUFGNkJBLE1BRTdCO0FBQUEsTUFGcUNDLFFBRXJDLFFBRnFDQSxRQUVyQztBQUFBLE1BRitDQyxJQUUvQyxRQUYrQ0EsSUFFL0M7QUFBQSxNQUZxREMsSUFFckQsUUFGcURBLElBRXJEO0FBQUEsTUFGMkRDLFdBRTNELFFBRjJEQSxXQUUzRDtBQUFBLE1BRndFQyxTQUV4RSxRQUZ3RUEsU0FFeEU7QUFBQSxNQURKQyxZQUNJLFFBREpBLFlBQ0k7QUFDSixNQUFNQyxjQUFjLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hDLFFBQUlBLENBQUMsQ0FBQ0MsT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQ3BCSixrQkFBWTtBQUNiO0FBQ0YsR0FKaUMsRUFJL0IsQ0FBQ0EsWUFBRCxDQUorQixDQUFsQztBQUtBLHNCQUNFO0FBQ0UsU0FBSyxFQUFFVixLQURUO0FBRUUsYUFBUyxFQUFFQyxTQUZiO0FBR0UsT0FBRyxFQUFFQyxHQUhQO0FBSUUsWUFBUSxFQUFFQyxRQUpaO0FBS0UsVUFBTSxFQUFFQyxNQUxWO0FBTUUsWUFBUSxFQUFFQyxRQU5aO0FBT0UsUUFBSSxFQUFFQyxJQVBSO0FBUUUsUUFBSSxFQUFFQyxJQVJSO0FBU0UsZUFBVyxFQUFFQyxXQVRmO0FBVUUsYUFBUyxFQUFFQyxTQVZiO0FBV0UsYUFBUyxFQUFFTSx5REFBTSxDQUFDaEIsS0FYcEI7QUFZRSxjQUFVLEVBQUVZO0FBWmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBekJEOztHQUFNWixLOztLQUFBQSxLO0FBMkJOQSxLQUFLLENBQUNpQixTQUFOLEdBQWtCO0FBQ2hCaEIsT0FBSyxFQUFFaUIsaURBQVMsQ0FBQ0MsR0FERDtBQUVoQmpCLFdBQVMsRUFBRWdCLGlEQUFTLENBQUNFLE1BRkw7QUFHaEJqQixLQUFHLEVBQUVlLGlEQUFTLENBQUNHLE1BSEM7QUFJaEJqQixVQUFRLEVBQUVjLGlEQUFTLENBQUNJLElBSko7QUFLaEJqQixRQUFNLEVBQUVhLGlEQUFTLENBQUNJLElBTEY7QUFNaEJoQixVQUFRLEVBQUVZLGlEQUFTLENBQUNLLElBTko7QUFPaEJoQixNQUFJLEVBQUVXLGlEQUFTLENBQUNHLE1BUEE7QUFRaEJiLE1BQUksRUFBRVUsaURBQVMsQ0FBQ0UsTUFSQTtBQVNoQlgsYUFBVyxFQUFFUyxpREFBUyxDQUFDRSxNQVRQO0FBVWhCVixXQUFTLEVBQUVRLGlEQUFTLENBQUNLO0FBVkwsQ0FBbEI7QUFhZXZCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbGN1bGF0b3ItZW1iZWQuNDNiN2FhZmZiYTdjNGI2MzdjZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IElucHV0ID0gKHtcclxuICB2YWx1ZSwgaW5wdXRNb2RlLCBtaW4sIG9uQ2hhbmdlLCBvbkJsdXIsIHJlcXVpcmVkLCBzdGVwLCB0eXBlLCBwbGFjZWhvbGRlciwgYXV0b0ZvY3VzLFxyXG4gIG9uUHJlc3NFbnRlcixcclxufSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIG9uUHJlc3NFbnRlcigpO1xyXG4gICAgfVxyXG4gIH0sIFtvblByZXNzRW50ZXJdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0XHJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgaW5wdXRNb2RlPXtpbnB1dE1vZGV9XHJcbiAgICAgIG1pbj17bWlufVxyXG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgIG9uQmx1cj17b25CbHVyfVxyXG4gICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgIHN0ZXA9e3N0ZXB9XHJcbiAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgYXV0b0ZvY3VzPXthdXRvRm9jdXN9XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLklucHV0fVxyXG4gICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbklucHV0LnByb3BUeXBlcyA9IHtcclxuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcclxuICBpbnB1dE1vZGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9