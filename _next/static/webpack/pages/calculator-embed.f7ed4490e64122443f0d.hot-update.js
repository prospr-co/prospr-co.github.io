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
    if (e.keyCode || e.which === 13) {
      onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter();
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
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onPressEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC5qc3giXSwibmFtZXMiOlsiSW5wdXQiLCJ2YWx1ZSIsImlucHV0TW9kZSIsIm1pbiIsIm9uQ2hhbmdlIiwib25CbHVyIiwicmVxdWlyZWQiLCJzdGVwIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0b0ZvY3VzIiwib25QcmVzc0VudGVyIiwiaGFuZGxlS2V5UHJlc3MiLCJ1c2VDYWxsYmFjayIsImUiLCJrZXlDb2RlIiwid2hpY2giLCJzdHlsZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJzdHJpbmciLCJudW1iZXIiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUdSO0FBQUE7O0FBQUEsTUFGSkMsS0FFSSxRQUZKQSxLQUVJO0FBQUEsTUFGR0MsU0FFSCxRQUZHQSxTQUVIO0FBQUEsTUFGY0MsR0FFZCxRQUZjQSxHQUVkO0FBQUEsTUFGbUJDLFFBRW5CLFFBRm1CQSxRQUVuQjtBQUFBLE1BRjZCQyxNQUU3QixRQUY2QkEsTUFFN0I7QUFBQSxNQUZxQ0MsUUFFckMsUUFGcUNBLFFBRXJDO0FBQUEsTUFGK0NDLElBRS9DLFFBRitDQSxJQUUvQztBQUFBLE1BRnFEQyxJQUVyRCxRQUZxREEsSUFFckQ7QUFBQSxNQUYyREMsV0FFM0QsUUFGMkRBLFdBRTNEO0FBQUEsTUFGd0VDLFNBRXhFLFFBRndFQSxTQUV4RTtBQUFBLE1BREpDLFlBQ0ksUUFESkEsWUFDSTtBQUNKLE1BQU1DLGNBQWMsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87QUFDeEMsUUFBSUEsQ0FBQyxDQUFDQyxPQUFGLElBQWFELENBQUMsQ0FBQ0UsS0FBRixLQUFZLEVBQTdCLEVBQWlDO0FBQy9CTCxrQkFBWSxTQUFaLElBQUFBLFlBQVksV0FBWixZQUFBQSxZQUFZO0FBQ2I7QUFDRixHQUppQyxFQUkvQixDQUFDQSxZQUFELENBSitCLENBQWxDO0FBS0Esc0JBQ0U7QUFDRSxTQUFLLEVBQUVWLEtBRFQ7QUFFRSxhQUFTLEVBQUVDLFNBRmI7QUFHRSxPQUFHLEVBQUVDLEdBSFA7QUFJRSxZQUFRLEVBQUVDLFFBSlo7QUFLRSxVQUFNLEVBQUVDLE1BTFY7QUFNRSxZQUFRLEVBQUVDLFFBTlo7QUFPRSxRQUFJLEVBQUVDLElBUFI7QUFRRSxRQUFJLEVBQUVDLElBUlI7QUFTRSxlQUFXLEVBQUVDLFdBVGY7QUFVRSxhQUFTLEVBQUVDLFNBVmI7QUFXRSxhQUFTLEVBQUVPLHlEQUFNLENBQUNqQixLQVhwQjtBQVlFLGNBQVUsRUFBRVk7QUFaZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0F6QkQ7O0dBQU1aLEs7O0tBQUFBLEs7QUEyQk5BLEtBQUssQ0FBQ2tCLFNBQU4sR0FBa0I7QUFDaEJqQixPQUFLLEVBQUVrQixpREFBUyxDQUFDQyxHQUREO0FBRWhCbEIsV0FBUyxFQUFFaUIsaURBQVMsQ0FBQ0UsTUFGTDtBQUdoQmxCLEtBQUcsRUFBRWdCLGlEQUFTLENBQUNHLE1BSEM7QUFJaEJsQixVQUFRLEVBQUVlLGlEQUFTLENBQUNJLElBSko7QUFLaEJsQixRQUFNLEVBQUVjLGlEQUFTLENBQUNJLElBTEY7QUFNaEJqQixVQUFRLEVBQUVhLGlEQUFTLENBQUNLLElBTko7QUFPaEJqQixNQUFJLEVBQUVZLGlEQUFTLENBQUNHLE1BUEE7QUFRaEJkLE1BQUksRUFBRVcsaURBQVMsQ0FBQ0UsTUFSQTtBQVNoQlosYUFBVyxFQUFFVSxpREFBUyxDQUFDRSxNQVRQO0FBVWhCWCxXQUFTLEVBQUVTLGlEQUFTLENBQUNLLElBVkw7QUFXaEJiLGNBQVksRUFBRVEsaURBQVMsQ0FBQ0k7QUFYUixDQUFsQjtBQWNldkIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FsY3VsYXRvci1lbWJlZC5mN2VkNDQ5MGU2NDEyMjQ0M2YwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5wdXQubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgSW5wdXQgPSAoe1xyXG4gIHZhbHVlLCBpbnB1dE1vZGUsIG1pbiwgb25DaGFuZ2UsIG9uQmx1ciwgcmVxdWlyZWQsIHN0ZXAsIHR5cGUsIHBsYWNlaG9sZGVyLCBhdXRvRm9jdXMsXHJcbiAgb25QcmVzc0VudGVyLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSB8fCBlLndoaWNoID09PSAxMykge1xyXG4gICAgICBvblByZXNzRW50ZXI/LigpO1xyXG4gICAgfVxyXG4gIH0sIFtvblByZXNzRW50ZXJdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0XHJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgaW5wdXRNb2RlPXtpbnB1dE1vZGV9XHJcbiAgICAgIG1pbj17bWlufVxyXG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgIG9uQmx1cj17b25CbHVyfVxyXG4gICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgIHN0ZXA9e3N0ZXB9XHJcbiAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgYXV0b0ZvY3VzPXthdXRvRm9jdXN9XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLklucHV0fVxyXG4gICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbklucHV0LnByb3BUeXBlcyA9IHtcclxuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcclxuICBpbnB1dE1vZGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvblByZXNzRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=