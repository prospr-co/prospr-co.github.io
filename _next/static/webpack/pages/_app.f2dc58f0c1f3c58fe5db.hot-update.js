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
        width: 122
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsSGFuZGxlciIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsImhlYWRlciIsImhlYWRlckxvZ28iLCJ0ZW1wU3BhY2VyIiwibGlua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxLQUFELENBRHJCO0FBQUEsTUFDWkMsUUFEWTtBQUFBLE1BQ0ZDLFdBREU7O0FBRW5CQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJGLGlCQUFXLENBQUNHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUFsQixDQUFYO0FBQ0QsS0FGRDs7QUFHQUMsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ0osZUFBcEM7QUFDQSxXQUFPO0FBQUEsYUFBTUcsUUFBUSxDQUFDRSxtQkFBVCxDQUE2QixRQUE3QixFQUF1Q0wsZUFBdkMsQ0FBTjtBQUFBLEtBQVA7QUFDRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0Esc0JBQ0U7QUFBUSxhQUFTLEVBQUVNLGlEQUFVLENBQUNDLGdFQUFNLENBQUNDLE1BQVIsRUFBZ0JYLFFBQVEsSUFBSVUsZ0VBQU0sQ0FBQ1YsUUFBbkMsQ0FBN0I7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUMsa0JBQVQ7QUFBNEIsV0FBRyxFQUFDLGFBQWhDO0FBQThDLGlCQUFTLEVBQUVVLGdFQUFNLENBQUNFLFVBQWhFO0FBQTRFLGFBQUssRUFBRTtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBTSxlQUFTLEVBQUVGLGdFQUFNLENBQUNHO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixvQkFLRTtBQUFLLGVBQVMsRUFBRUgsZ0VBQU0sQ0FBQ0ksS0FBdkI7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFTRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxZQUFYO0FBQUEsNkJBQ0U7QUFBTSxpQkFBUyxFQUFDLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQTFCRDs7R0FBTWhCLE07O0tBQUFBLE07QUE0QlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjJkYzU4ZjBjMWYzYzU4ZmU1ZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvblNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBzZXRTY3JvbGxlZCh3aW5kb3cuc2Nyb2xsWSA+IDEwKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsSGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsSGFuZGxlcik7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuaGVhZGVyLCBzY3JvbGxlZCAmJiBzdHlsZXMuc2Nyb2xsZWQpfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3Byb3Nwcl9sb2dvLnBuZ1wiIGFsdD1cIlByb3NwciBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTG9nb30gd2lkdGg9ezEyMn0gLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRlbXBTcGFjZXJ9IC8+IHsvKiBUZW1wb3Jhcnkgc3BhY2VyKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0XCI+UHJvZHVjdDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcmljaW5nXCI+UHJpY2luZzwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPExpbmsgaHJlZj1cIi8jYm9va0RlbW9cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICBHZXQgZGVtb1xuICAgICAgICA8L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9