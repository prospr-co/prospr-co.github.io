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
    }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsSGFuZGxlciIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsImhlYWRlciIsImhlYWRlckxvZ28iLCJ0ZW1wU3BhY2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsS0FBRCxDQURyQjtBQUFBLE1BQ1pDLFFBRFk7QUFBQSxNQUNGQyxXQURFOztBQUVuQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCRixpQkFBVyxDQUFDRyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBbEIsQ0FBWDtBQUNELEtBRkQ7O0FBR0FDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NKLGVBQXBDO0FBQ0EsV0FBTztBQUFBLGFBQU1HLFFBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUNMLGVBQXZDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQU9BLHNCQUNFO0FBQVEsYUFBUyxFQUFFTSxpREFBVSxDQUFDQyxnRUFBTSxDQUFDQyxNQUFSLEVBQWdCWCxRQUFRLElBQUlVLGdFQUFNLENBQUNWLFFBQW5DLENBQTdCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFDLGtCQUFUO0FBQTRCLFdBQUcsRUFBQyxhQUFoQztBQUE4QyxpQkFBUyxFQUFFVSxnRUFBTSxDQUFDRSxVQUFoRTtBQUE0RSxhQUFLLEVBQUUsR0FBbkY7QUFBd0YsY0FBTSxFQUFFO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFNLGVBQVMsRUFBRUYsZ0VBQU0sQ0FBQ0c7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLG9CQVNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFlBQVg7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBMUJEOztHQUFNZixNOztLQUFBQSxNO0FBNEJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQyMzgyN2NmMGI1NTE0OTRmMGZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL0hlYWRlci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25TY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiAxMCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbEhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbEhhbmRsZXIpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmhlYWRlciwgc2Nyb2xsZWQgJiYgc3R5bGVzLnNjcm9sbGVkKX0+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8aW1nIHNyYz1cIi9wcm9zcHJfbG9nby5wbmdcIiBhbHQ9XCJQcm9zcHIgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckxvZ299IHdpZHRoPXsxMjJ9IGhlaWdodD17MzF9IC8+XG4gICAgICA8L0xpbms+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wU3BhY2VyfSAvPiB7LyogVGVtcG9yYXJ5IHNwYWNlciovfVxuICAgICAgey8qPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+Ki99XG4gICAgICB7LyogIDxMaW5rIGhyZWY9XCIvcHJvZHVjdFwiPlByb2R1Y3Q8L0xpbms+Ki99XG4gICAgICB7LyogIDxMaW5rIGhyZWY9XCIvcHJpY2luZ1wiPlByaWNpbmc8L0xpbms+Ki99XG4gICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgIDxMaW5rIGhyZWY9XCIvI2Jvb2tEZW1vXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgR2V0IGRlbW9cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==