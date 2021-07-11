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
          padding: '16px 24px',
          fontSize: 16
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsSGFuZGxlciIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTk9fSEVBREVSX1BBR0VTIiwiZmluZCIsInAiLCJwYXRobmFtZSIsImVuZHNXaXRoIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsImhlYWRlciIsImhlYWRlckxvZ28iLCJ0ZW1wU3BhY2VyIiwicGFkZGluZyIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURtQixrQkFFYUMsc0RBQVEsQ0FBQyxLQUFELENBRnJCO0FBQUEsTUFFWkMsUUFGWTtBQUFBLE1BRUZDLFdBRkU7O0FBR25CQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJGLGlCQUFXLENBQUNHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUFsQixDQUFYO0FBQ0QsS0FGRDs7QUFHQUMsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ0osZUFBcEM7QUFDQSxXQUFPO0FBQUEsYUFBTUcsUUFBUSxDQUFDRSxtQkFBVCxDQUE2QixRQUE3QixFQUF1Q0wsZUFBdkMsQ0FBTjtBQUFBLEtBQVA7QUFDRCxHQU5RLEVBTU4sRUFOTSxDQUFUOztBQU9BLE1BQUlNLGdFQUFlLENBQUNDLElBQWhCLENBQXFCLFVBQUFDLENBQUM7QUFBQSxXQUFJZCxNQUFNLENBQUNlLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCRixDQUF6QixDQUFKO0FBQUEsR0FBdEIsQ0FBSixFQUE0RDtBQUMxRCxXQUFPLElBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFRLGFBQVMsRUFBRUcsaURBQVUsQ0FBQ0MsZ0VBQU0sQ0FBQ0MsTUFBUixFQUFnQmhCLFFBQVEsSUFBSWUsZ0VBQU0sQ0FBQ2YsUUFBbkMsQ0FBN0I7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUMsa0JBQVQ7QUFBNEIsV0FBRyxFQUFDLGFBQWhDO0FBQThDLGlCQUFTLEVBQUVlLGdFQUFNLENBQUNFLFVBQWhFO0FBQTRFLGFBQUssRUFBRSxHQUFuRjtBQUF3RixjQUFNLEVBQUU7QUFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQU0sZUFBUyxFQUFFRixnRUFBTSxDQUFDRztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsb0JBU0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsWUFBWDtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQyxnQkFBaEI7QUFBaUMsYUFBSyxFQUFFO0FBQUVDLGlCQUFPLEVBQUUsV0FBWDtBQUF3QkMsa0JBQVEsRUFBRTtBQUFsQyxTQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQTlCRDs7R0FBTXhCLE07VUFDV0UscUQ7OztLQURYRixNO0FBZ0NTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIyNWYzY2U3Yzk1YWRkNTMyNDU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL0hlYWRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBOT19IRUFERVJfUEFHRVMgfSBmcm9tICdwcm9zcHItY29uc3RhbnRzJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25TY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiAxMCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbEhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbEhhbmRsZXIpO1xuICB9LCBbXSk7XG4gIGlmIChOT19IRUFERVJfUEFHRVMuZmluZChwID0+IHJvdXRlci5wYXRobmFtZS5lbmRzV2l0aChwKSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5oZWFkZXIsIHNjcm9sbGVkICYmIHN0eWxlcy5zY3JvbGxlZCl9PlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGltZyBzcmM9XCIvcHJvc3ByX2xvZ28ucG5nXCIgYWx0PVwiUHJvc3ByIExvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJMb2dvfSB3aWR0aD17MTIyfSBoZWlnaHQ9ezMxfSAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGVtcFNwYWNlcn0gLz4gey8qIFRlbXBvcmFyeSBzcGFjZXIqL31cbiAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PiovfVxuICAgICAgey8qICA8TGluayBocmVmPVwiL3Byb2R1Y3RcIj5Qcm9kdWN0PC9MaW5rPiovfVxuICAgICAgey8qICA8TGluayBocmVmPVwiL3ByaWNpbmdcIj5QcmljaW5nPC9MaW5rPiovfVxuICAgICAgey8qPC9kaXY+Ki99XG4gICAgICA8TGluayBocmVmPVwiLyNib29rRGVtb1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJCdXR0b24gcHJpbWFyeVwiIHN0eWxlPXt7IHBhZGRpbmc6ICcxNnB4IDI0cHgnLCBmb250U2l6ZTogMTYgfX0+XG4gICAgICAgICAgICBHZXQgZGVtb1xuICAgICAgICA8L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9