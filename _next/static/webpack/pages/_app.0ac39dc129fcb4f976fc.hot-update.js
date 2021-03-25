webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/Header.module.scss */ "./styles/Header.module.scss");
/* harmony import */ var styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "B:\\workspace\\prospr-landing-page\\components\\Header.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var Header = function Header() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      scrolled = _useState[0],
      setScrolled = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var onScrollHandler = function onScrollHandler() {
      setScrolled(window.scrollY > 10);
    };

    document.addEventListener('scroll', onScrollHandler);
    return function () {
      return document.removeEventListener('scroll', onScrollHandler);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header, scrolled && styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.scrolled),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/prospr_logo.png",
        alt: "Prospr Logo",
        className: styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.headerLogo,
        width: 122,
        height: 31
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tempSpacer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.links,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/product",
        children: "Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/pricing",
        children: "Pricing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/#bookDemo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "btn btn-primary",
        children: "Get demo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(Header, "tQtW9FyKD+Ut/6k+f0BCbABprL4=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsSGFuZGxlciIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsImhlYWRlciIsImhlYWRlckxvZ28iLCJ0ZW1wU3BhY2VyIiwibGlua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxLQUFELENBRHJCO0FBQUEsTUFDWkMsUUFEWTtBQUFBLE1BQ0ZDLFdBREU7O0FBRW5CQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJGLGlCQUFXLENBQUNHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUFsQixDQUFYO0FBQ0QsS0FGRDs7QUFHQUMsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ0osZUFBcEM7QUFDQSxXQUFPO0FBQUEsYUFBTUcsUUFBUSxDQUFDRSxtQkFBVCxDQUE2QixRQUE3QixFQUF1Q0wsZUFBdkMsQ0FBTjtBQUFBLEtBQVA7QUFDRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0Esc0JBQ0U7QUFBUSxhQUFTLEVBQUVNLGlEQUFVLENBQUNDLGdFQUFNLENBQUNDLE1BQVIsRUFBZ0JYLFFBQVEsSUFBSVUsZ0VBQU0sQ0FBQ1YsUUFBbkMsQ0FBN0I7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUMsa0JBQVQ7QUFBNEIsV0FBRyxFQUFDLGFBQWhDO0FBQThDLGlCQUFTLEVBQUVVLGdFQUFNLENBQUNFLFVBQWhFO0FBQTRFLGFBQUssRUFBRSxHQUFuRjtBQUF3RixjQUFNLEVBQUU7QUFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQU0sZUFBUyxFQUFFRixnRUFBTSxDQUFDRztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsb0JBS0U7QUFBSyxlQUFTLEVBQUVILGdFQUFNLENBQUNJLEtBQXZCO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBU0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsWUFBWDtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0ExQkQ7O0dBQU1oQixNOztLQUFBQSxNO0FBNEJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjBhYzM5ZGMxMjlmY2I0Zjk3NmZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL0hlYWRlci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25TY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiAxMCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbEhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbEhhbmRsZXIpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmhlYWRlciwgc2Nyb2xsZWQgJiYgc3R5bGVzLnNjcm9sbGVkKX0+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8aW1nIHNyYz1cIi9wcm9zcHJfbG9nby5wbmdcIiBhbHQ9XCJQcm9zcHIgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckxvZ299IHdpZHRoPXsxMjJ9IGhlaWdodD17MzF9IC8+XG4gICAgICA8L0xpbms+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wU3BhY2VyfSAvPiB7LyogVGVtcG9yYXJ5IHNwYWNlciovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdFwiPlByb2R1Y3Q8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpY2luZ1wiPlByaWNpbmc8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvI2Jvb2tEZW1vXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgR2V0IGRlbW9cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==