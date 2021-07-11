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
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();




var generateDefaultRows = function generateDefaultRows(totalAmount) {
  var rows = [];

  for (var i = 0; i < 5; i++) {
    rows.push({
      amount: totalAmount / 5 / Math.pow(2, i),
      giftCount: Math.pow(2, i),
      id: "row_".concat(i)
    });
  }

  return rows;
};

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
        lineNumber: 24,
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
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return setTargetAmount(amount);
        },
        children: "Next Step"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(TargetAmountStep, "bZHaZdBRaKnkQpBOPbUIgu3hW48=");

_c = TargetAmountStep;

var sum = function sum(arr, property) {
  return arr.reduce(function (acc, val) {
    return acc + val[property];
  }, 0);
};

var GiftTableRow = function GiftTableRow(_ref2) {
  var row = _ref2.row;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        value: row.amount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        value: row.giftCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: row.amount * row.giftCount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: row.giftCount * 5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_c2 = GiftTableRow;

var GiftTable = function GiftTable(_ref3) {
  _s2();

  var targetAmount = _ref3.targetAmount,
      setTargetAmount = _ref3.setTargetAmount;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    return generateDefaultRows(targetAmount);
  }),
      rows = _useState2[0],
      setRows = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Your gift table"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
      children: "Based on your fundraising goals, we've calculated this optimal breakdown for your organization's fundraising initiatives. You can edit this to fit your requirements."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Gift Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Number of Gifts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Row Total"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Prospects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: [rows.map(function (row) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GiftTableRow, {
              row: row
            }, row.id, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "Totals"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: sum(rows, 'amount')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount') * 5
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
};

_s2(GiftTable, "VDB7A0tWhZq8n3/lNr74vJeLdGU=");

_c3 = GiftTable;

var FundraisingCalculator = function FundraisingCalculator() {
  _s3();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1000),
      targetAmount = _useState3[0],
      setTargetAmount = _useState3[1];

  var handleTargetAmount = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (rawAmount) {
    var amount = parseFloat(rawAmount);
    if (isNaN(amount)) return targetAmount;
    if (amount <= 0) return targetAmount;
    setTargetAmount(amount);
    return amount;
  }, [targetAmount]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.FundraisingCalculator,
    children: !targetAmount ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TargetAmountStep, {
      setTargetAmount: handleTargetAmount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GiftTable, {
      targetAmount: targetAmount,
      setTargetAmount: handleTargetAmount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, _this);
};

_s3(FundraisingCalculator, "qjEWiM5rH1gcMY8m5xkeCOo8ybY=");

_c4 = FundraisingCalculator;
/* harmony default export */ __webpack_exports__["default"] = (FundraisingCalculator);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "TargetAmountStep");
$RefreshReg$(_c2, "GiftTableRow");
$RefreshReg$(_c3, "GiftTable");
$RefreshReg$(_c4, "FundraisingCalculator");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbImdlbmVyYXRlRGVmYXVsdFJvd3MiLCJ0b3RhbEFtb3VudCIsInJvd3MiLCJpIiwicHVzaCIsImFtb3VudCIsIk1hdGgiLCJwb3ciLCJnaWZ0Q291bnQiLCJpZCIsIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJ1c2VTdGF0ZSIsInNldEFtb3VudCIsInN0eWxlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1bSIsImFyciIsInByb3BlcnR5IiwicmVkdWNlIiwiYWNjIiwidmFsIiwiR2lmdFRhYmxlUm93Iiwicm93IiwiR2lmdFRhYmxlIiwidGFyZ2V0QW1vdW50Iiwic2V0Um93cyIsIm1hcCIsIkZ1bmRyYWlzaW5nQ2FsY3VsYXRvciIsImhhbmRsZVRhcmdldEFtb3VudCIsInVzZUNhbGxiYWNrIiwicmF3QW1vdW50IiwicGFyc2VGbG9hdCIsImlzTmFOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLFdBQUQsRUFBaUI7QUFDM0MsTUFBTUMsSUFBSSxHQUFHLEVBQWI7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCRCxRQUFJLENBQUNFLElBQUwsQ0FBVTtBQUNSQyxZQUFNLEVBQUdKLFdBQVcsR0FBRyxDQUFmLEdBQXFCSyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlKLENBQVosQ0FEckI7QUFFUkssZUFBUyxFQUFFRixJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlKLENBQVosQ0FGSDtBQUdSTSxRQUFFLGdCQUFTTixDQUFUO0FBSE0sS0FBVjtBQUtEOztBQUVELFNBQU9E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LEdBQUc2QixVQUFVLENBQUNELFNBQUQsQ0FBekI7QUFDQSxRQUFJRSxLQUFLLENBQUM5QixNQUFELENBQVQsRUFBbUIsT0FBT3NCLFlBQVA7QUFDbkIsUUFBSXRCLE1BQU0sSUFBSSxDQUFkLEVBQWlCLE9BQU9zQixZQUFQO0FBQ2pCaEIsbUJBQWUsQ0FBQ04sTUFBRCxDQUFmO0FBQ0EsV0FBT0EsTUFBUDtBQUNELEdBTnFDLEVBTW5DLENBQUNzQixZQUFELENBTm1DLENBQXRDO0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUViLHlFQUFNLENBQUNnQixxQkFBdkI7QUFBQSxjQUNJLENBQUNILFlBQUQsZ0JBQ0EscUVBQUMsZ0JBQUQ7QUFBa0IscUJBQWUsRUFBRUk7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGdCQUdBLHFFQUFDLFNBQUQ7QUFBVyxrQkFBWSxFQUFFSixZQUF6QjtBQUF1QyxxQkFBZSxFQUFFSTtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FsQkQ7O0lBQU1ELHFCOztNQUFBQSxxQjtBQW9CU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FsY3VsYXRvci1lbWJlZC44MDgwNTFkN2FlNTM3NzQwYTc3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Z1bmRyYWlzaW5nQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBnZW5lcmF0ZURlZmF1bHRSb3dzID0gKHRvdGFsQW1vdW50KSA9PiB7XHJcbiAgY29uc3Qgcm93cyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgcm93cy5wdXNoKHtcclxuICAgICAgYW1vdW50OiAodG90YWxBbW91bnQgLyA1KSAvIChNYXRoLnBvdygyLCBpKSksXHJcbiAgICAgIGdpZnRDb3VudDogTWF0aC5wb3coMiwgaSksXHJcbiAgICAgIGlkOiBgcm93XyR7aX1gLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm93cztcclxufTtcclxuXHJcbmNvbnN0IFRhcmdldEFtb3VudFN0ZXAgPSAoeyBzZXRUYXJnZXRBbW91bnQgfSkgPT4ge1xyXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhcmdldEFtb3VudFN0ZXB9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5FbnRlciB5b3VyIGZ1bmRyYWlzaW5nIGdvYWw8L2gyPlxyXG4gICAgICAgIEhvdyBtdWNoIGRvIHlvdSB3YW50IHRvIGZ1bmRyYWlzZT9cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXthbW91bnR9XHJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJkZWNpbWFsXCJcclxuICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRhcmdldEFtb3VudChhbW91bnQpfT5OZXh0IFN0ZXA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5jb25zdCBzdW0gPSAoYXJyLCBwcm9wZXJ0eSkgPT4gYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYyArIHZhbFtwcm9wZXJ0eV0sIDApO1xyXG5cclxuY29uc3QgR2lmdFRhYmxlUm93ID0gKHsgcm93IH0pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx0cj5cclxuICAgICAgPHRkPjxpbnB1dCB2YWx1ZT17cm93LmFtb3VudH0gLz48L3RkPlxyXG4gICAgICA8dGQ+PGlucHV0IHZhbHVlPXtyb3cuZ2lmdENvdW50fSAvPjwvdGQ+XHJcbiAgICAgIDx0ZD57cm93LmFtb3VudCAqIHJvdy5naWZ0Q291bnR9PC90ZD5cclxuICAgICAgPHRkPntyb3cuZ2lmdENvdW50ICogNX08L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR2lmdFRhYmxlID0gKHsgdGFyZ2V0QW1vdW50LCBzZXRUYXJnZXRBbW91bnQgfSkgPT4ge1xyXG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlRGVmYXVsdFJvd3ModGFyZ2V0QW1vdW50KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+WW91ciBnaWZ0IHRhYmxlPC9oMj5cclxuICAgICAgPGg2PlxyXG4gICAgICAgIEJhc2VkIG9uIHlvdXIgZnVuZHJhaXNpbmcgZ29hbHMsIHdlJ3ZlIGNhbGN1bGF0ZWQgdGhpcyBvcHRpbWFsIGJyZWFrZG93biBmb3IgeW91clxyXG4gICAgICAgIG9yZ2FuaXphdGlvbidzIGZ1bmRyYWlzaW5nIGluaXRpYXRpdmVzLiBZb3UgY2FuIGVkaXQgdGhpcyB0byBmaXQgeW91ciByZXF1aXJlbWVudHMuXHJcbiAgICAgIDwvaDY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRoPkdpZnQgQW1vdW50PC90aD5cclxuICAgICAgICAgICAgPHRoPk51bWJlciBvZiBHaWZ0czwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Sb3cgVG90YWw8L3RoPlxyXG4gICAgICAgICAgICA8dGg+UHJvc3BlY3RzPC90aD5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHsgcm93cy5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgICA8R2lmdFRhYmxlUm93IHJvdz17cm93fSBrZXk9e3Jvdy5pZH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+VG90YWxzPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3N1bShyb3dzLCAnZ2lmdENvdW50Jyl9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3N1bShyb3dzLCAnYW1vdW50Jyl9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3N1bShyb3dzLCAnZ2lmdENvdW50JykgKiA1fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuY29uc3QgRnVuZHJhaXNpbmdDYWxjdWxhdG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0YXJnZXRBbW91bnQsIHNldFRhcmdldEFtb3VudF0gPSB1c2VTdGF0ZSgxMDAwKTtcclxuICBjb25zdCBoYW5kbGVUYXJnZXRBbW91bnQgPSB1c2VDYWxsYmFjaygocmF3QW1vdW50KSA9PiB7XHJcbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KHJhd0Ftb3VudCk7XHJcbiAgICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIHRhcmdldEFtb3VudDtcclxuICAgIGlmIChhbW91bnQgPD0gMCkgcmV0dXJuIHRhcmdldEFtb3VudDtcclxuICAgIHNldFRhcmdldEFtb3VudChhbW91bnQpO1xyXG4gICAgcmV0dXJuIGFtb3VudDtcclxuICB9LCBbdGFyZ2V0QW1vdW50XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRnVuZHJhaXNpbmdDYWxjdWxhdG9yfT5cclxuICAgICAgeyAhdGFyZ2V0QW1vdW50ID8gKFxyXG4gICAgICAgIDxUYXJnZXRBbW91bnRTdGVwIHNldFRhcmdldEFtb3VudD17aGFuZGxlVGFyZ2V0QW1vdW50fSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxHaWZ0VGFibGUgdGFyZ2V0QW1vdW50PXt0YXJnZXRBbW91bnR9IHNldFRhcmdldEFtb3VudD17aGFuZGxlVGFyZ2V0QW1vdW50fSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmRyYWlzaW5nQ2FsY3VsYXRvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==