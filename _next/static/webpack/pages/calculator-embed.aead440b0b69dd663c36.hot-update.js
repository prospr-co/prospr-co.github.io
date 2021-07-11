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
    console.log(e, e.keyCode);

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
    lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC5qc3giXSwibmFtZXMiOlsiSW5wdXQiLCJ2YWx1ZSIsImlucHV0TW9kZSIsIm1pbiIsIm9uQ2hhbmdlIiwib25CbHVyIiwicmVxdWlyZWQiLCJzdGVwIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0b0ZvY3VzIiwib25QcmVzc0VudGVyIiwiaGFuZGxlS2V5UHJlc3MiLCJ1c2VDYWxsYmFjayIsImUiLCJjb25zb2xlIiwibG9nIiwia2V5Q29kZSIsInN0eWxlcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BR1I7QUFBQTs7QUFBQSxNQUZKQyxLQUVJLFFBRkpBLEtBRUk7QUFBQSxNQUZHQyxTQUVILFFBRkdBLFNBRUg7QUFBQSxNQUZjQyxHQUVkLFFBRmNBLEdBRWQ7QUFBQSxNQUZtQkMsUUFFbkIsUUFGbUJBLFFBRW5CO0FBQUEsTUFGNkJDLE1BRTdCLFFBRjZCQSxNQUU3QjtBQUFBLE1BRnFDQyxRQUVyQyxRQUZxQ0EsUUFFckM7QUFBQSxNQUYrQ0MsSUFFL0MsUUFGK0NBLElBRS9DO0FBQUEsTUFGcURDLElBRXJELFFBRnFEQSxJQUVyRDtBQUFBLE1BRjJEQyxXQUUzRCxRQUYyREEsV0FFM0Q7QUFBQSxNQUZ3RUMsU0FFeEUsUUFGd0VBLFNBRXhFO0FBQUEsTUFESkMsWUFDSSxRQURKQSxZQUNJO0FBQ0osTUFBTUMsY0FBYyxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUN4Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVosRUFBZUEsQ0FBQyxDQUFDRyxPQUFqQjs7QUFDQSxRQUFJSCxDQUFDLENBQUNHLE9BQUYsS0FBYyxFQUFsQixFQUFzQjtBQUNwQk4sa0JBQVk7QUFDYjtBQUNGLEdBTGlDLEVBSy9CLENBQUNBLFlBQUQsQ0FMK0IsQ0FBbEM7QUFNQSxzQkFDRTtBQUNFLFNBQUssRUFBRVYsS0FEVDtBQUVFLGFBQVMsRUFBRUMsU0FGYjtBQUdFLE9BQUcsRUFBRUMsR0FIUDtBQUlFLFlBQVEsRUFBRUMsUUFKWjtBQUtFLFVBQU0sRUFBRUMsTUFMVjtBQU1FLFlBQVEsRUFBRUMsUUFOWjtBQU9FLFFBQUksRUFBRUMsSUFQUjtBQVFFLFFBQUksRUFBRUMsSUFSUjtBQVNFLGVBQVcsRUFBRUMsV0FUZjtBQVVFLGFBQVMsRUFBRUMsU0FWYjtBQVdFLGFBQVMsRUFBRVEseURBQU0sQ0FBQ2xCLEtBWHBCO0FBWUUsY0FBVSxFQUFFWTtBQVpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQTFCRDs7R0FBTVosSzs7S0FBQUEsSztBQTRCTkEsS0FBSyxDQUFDbUIsU0FBTixHQUFrQjtBQUNoQmxCLE9BQUssRUFBRW1CLGlEQUFTLENBQUNDLEdBREQ7QUFFaEJuQixXQUFTLEVBQUVrQixpREFBUyxDQUFDRSxNQUZMO0FBR2hCbkIsS0FBRyxFQUFFaUIsaURBQVMsQ0FBQ0csTUFIQztBQUloQm5CLFVBQVEsRUFBRWdCLGlEQUFTLENBQUNJLElBSko7QUFLaEJuQixRQUFNLEVBQUVlLGlEQUFTLENBQUNJLElBTEY7QUFNaEJsQixVQUFRLEVBQUVjLGlEQUFTLENBQUNLLElBTko7QUFPaEJsQixNQUFJLEVBQUVhLGlEQUFTLENBQUNHLE1BUEE7QUFRaEJmLE1BQUksRUFBRVksaURBQVMsQ0FBQ0UsTUFSQTtBQVNoQmIsYUFBVyxFQUFFVyxpREFBUyxDQUFDRSxNQVRQO0FBVWhCWixXQUFTLEVBQUVVLGlEQUFTLENBQUNLO0FBVkwsQ0FBbEI7QUFhZXpCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbGN1bGF0b3ItZW1iZWQuYWVhZDQ0MGIwYjY5ZGQ2NjNjMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IElucHV0ID0gKHtcclxuICB2YWx1ZSwgaW5wdXRNb2RlLCBtaW4sIG9uQ2hhbmdlLCBvbkJsdXIsIHJlcXVpcmVkLCBzdGVwLCB0eXBlLCBwbGFjZWhvbGRlciwgYXV0b0ZvY3VzLFxyXG4gIG9uUHJlc3NFbnRlcixcclxufSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUsIGUua2V5Q29kZSk7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBvblByZXNzRW50ZXIoKTtcclxuICAgIH1cclxuICB9LCBbb25QcmVzc0VudGVyXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxpbnB1dFxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgIGlucHV0TW9kZT17aW5wdXRNb2RlfVxyXG4gICAgICBtaW49e21pbn1cclxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgIGF1dG9Gb2N1cz17YXV0b0ZvY3VzfVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dH1cclxuICAgICAgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5JbnB1dC5wcm9wVHlwZXMgPSB7XHJcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXHJcbiAgaW5wdXRNb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG1pbjogUHJvcFR5cGVzLm51bWJlcixcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc3RlcDogUHJvcFR5cGVzLm51bWJlcixcclxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==