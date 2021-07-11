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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prospr_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prospr-constants */ "./prospr-constants/index.js");


var _jsxFileName = "B:\\workspace\\prospr-landing-page\\components\\Header.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var Header = function Header() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

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

  if (prospr_constants__WEBPACK_IMPORTED_MODULE_6__["NO_HEADER_PAGES"].find(function (p) {
    return router.pathname.endsWith(p);
  })) {
    return null;
  }

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
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tempSpacer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/#bookDemo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "Button primary",
        style: {
          padding: '16px 24px '
        },
        children: "Get demo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(Header, "IRkcf1eSGYmhi/InYPYSklt7Ha4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsSGFuZGxlciIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTk9fSEVBREVSX1BBR0VTIiwiZmluZCIsInAiLCJwYXRobmFtZSIsImVuZHNXaXRoIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsImhlYWRlciIsImhlYWRlckxvZ28iLCJ0ZW1wU3BhY2VyIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEbUIsa0JBRWFDLHNEQUFRLENBQUMsS0FBRCxDQUZyQjtBQUFBLE1BRVpDLFFBRlk7QUFBQSxNQUVGQyxXQUZFOztBQUduQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCRixpQkFBVyxDQUFDRyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBbEIsQ0FBWDtBQUNELEtBRkQ7O0FBR0FDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NKLGVBQXBDO0FBQ0EsV0FBTztBQUFBLGFBQU1HLFFBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUNMLGVBQXZDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFPQSxNQUFJTSxnRUFBZSxDQUFDQyxJQUFoQixDQUFxQixVQUFBQyxDQUFDO0FBQUEsV0FBSWQsTUFBTSxDQUFDZSxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkYsQ0FBekIsQ0FBSjtBQUFBLEdBQXRCLENBQUosRUFBNEQ7QUFDMUQsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBUSxhQUFTLEVBQUVHLGlEQUFVLENBQUNDLGdFQUFNLENBQUNDLE1BQVIsRUFBZ0JoQixRQUFRLElBQUllLGdFQUFNLENBQUNmLFFBQW5DLENBQTdCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFDLGtCQUFUO0FBQTRCLFdBQUcsRUFBQyxhQUFoQztBQUE4QyxpQkFBUyxFQUFFZSxnRUFBTSxDQUFDRSxVQUFoRTtBQUE0RSxhQUFLLEVBQUUsR0FBbkY7QUFBd0YsY0FBTSxFQUFFO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFNLGVBQVMsRUFBRUYsZ0VBQU0sQ0FBQ0c7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLG9CQVNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFlBQVg7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUMsZ0JBQWhCO0FBQWlDLGFBQUssRUFBRTtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0E5QkQ7O0dBQU12QixNO1VBQ1dFLHFEOzs7S0FEWEYsTTtBQWdDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZDQ0NmZkMmVhMzExZmFmNjg2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ3N0eWxlcy9IZWFkZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgTk9fSEVBREVSX1BBR0VTIH0gZnJvbSAncHJvc3ByLWNvbnN0YW50cyc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9uU2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHNldFNjcm9sbGVkKHdpbmRvdy5zY3JvbGxZID4gMTApO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGxIYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGxIYW5kbGVyKTtcbiAgfSwgW10pO1xuICBpZiAoTk9fSEVBREVSX1BBR0VTLmZpbmQocCA9PiByb3V0ZXIucGF0aG5hbWUuZW5kc1dpdGgocCkpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuaGVhZGVyLCBzY3JvbGxlZCAmJiBzdHlsZXMuc2Nyb2xsZWQpfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3Byb3Nwcl9sb2dvLnBuZ1wiIGFsdD1cIlByb3NwciBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTG9nb30gd2lkdGg9ezEyMn0gaGVpZ2h0PXszMX0gLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRlbXBTcGFjZXJ9IC8+IHsvKiBUZW1wb3Jhcnkgc3BhY2VyKi99XG4gICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT4qL31cbiAgICAgIHsvKiAgPExpbmsgaHJlZj1cIi9wcm9kdWN0XCI+UHJvZHVjdDwvTGluaz4qL31cbiAgICAgIHsvKiAgPExpbmsgaHJlZj1cIi9wcmljaW5nXCI+UHJpY2luZzwvTGluaz4qL31cbiAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgPExpbmsgaHJlZj1cIi8jYm9va0RlbW9cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiQnV0dG9uIHByaW1hcnlcIiBzdHlsZT17eyBwYWRkaW5nOiAnMTZweCAyNHB4ICd9fT5cbiAgICAgICAgICAgIEdldCBkZW1vXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=