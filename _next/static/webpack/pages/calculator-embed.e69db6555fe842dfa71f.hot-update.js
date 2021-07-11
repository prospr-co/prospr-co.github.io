webpackHotUpdate_N_E("pages/calculator-embed",{

/***/ "./components/FundraisingCalculator.jsx":
/*!**********************************************!*\
  !*** ./components/FundraisingCalculator.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var B_workspace_prospr_landing_page_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var B_workspace_prospr_landing_page_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FundraisingCalculator.module.scss */ "./components/FundraisingCalculator.module.scss");
/* harmony import */ var _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "B:\\workspace\\prospr-landing-page\\components\\FundraisingCalculator.jsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(B_workspace_prospr_landing_page_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      amount = _useState[0],
      setAmount = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TargetAmountStep,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Enter your fundraising goal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), "How much do you want to fundraise?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
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
    return acc + (typeof property === 'function' ? property(val) : val[property]);
  }, 0);
};

var dollarFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

var formatDollars = function formatDollars(val) {
  return dollarFormatter.format(val);
};

var GiftTableRow = function GiftTableRow(_ref2) {
  _s2();

  var row = _ref2.row,
      updateRow = _ref2.updateRow;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(row.amount % 1 === 0 ? row.amount : row.amount.toFixed(2)),
      localAmount = _useState2[0],
      setLocalAmount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(row.giftCount % 1 === 0 ? row.giftCount : row.giftCount.toFixed(2)),
      localGiftCount = _useState3[0],
      setLocalGiftCount = _useState3[1];

  var handleAmountBlur = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    var newAmount = parseFloat(localAmount);
    if (isNaN(newAmount) || newAmount <= 0) return;
    if (newAmount % 1 !== 0) setLocalAmount(newAmount.toFixed(2));
  }, [localAmount]);
  var onChangeAmount = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    setLocalAmount(e.target.value);
    var newAmount = parseFloat(e.target.value);
    if (isNaN(newAmount) || newAmount <= 0) return;
    updateRow(_objectSpread(_objectSpread({}, row), {}, {
      amount: newAmount
    }));
  }, [row]);
  var onChangeGiftCount = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    setLocalGiftCount(e.target.value);
    var newGiftCount = parseInt(e.target.value);
    if (isNaN(newGiftCount) || newGiftCount <= 0) return;
    updateRow(_objectSpread(_objectSpread({}, row), {}, {
      giftCount: newGiftCount
    }));
  }, [row]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        value: localAmount,
        min: 0,
        required: true,
        inputMode: "decimal",
        type: "number",
        onChange: onChangeAmount,
        step: 0.01,
        onBlur: handleAmountBlur
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        value: localGiftCount,
        min: 1,
        required: true,
        inputMode: "numeric",
        type: "number",
        onChange: onChangeGiftCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: formatDollars(row.amount * row.giftCount)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: row.giftCount * 5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, _this);
};

_s2(GiftTableRow, "XFqo03ys6EZuPuQ4vNS2yVtz/kY=");

_c2 = GiftTableRow;

var GiftTable = function GiftTable(_ref3) {
  _s3();

  var targetAmount = _ref3.targetAmount,
      setTargetAmount = _ref3.setTargetAmount;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(function () {
    return generateDefaultRows(targetAmount);
  }),
      rows = _useState4[0],
      setRows = _useState4[1];

  var updateRow = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (row) {
    setRows(function (prevRows) {
      var index = prevRows.findIndex(function (r) {
        return r.id === row.id;
      });

      var newRows = Object(B_workspace_prospr_landing_page_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevRows);

      newRows[index] = row;
      return newRows;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
      children: "Your gift table"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
      children: "Based on your fundraising goals, we've calculated this optimal breakdown for your organization's fundraising initiatives. You can edit this to fit your requirements."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                children: "Gift Amount"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                children: "Number of Gifts"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                children: "Row Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                children: "Prospects"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
            children: [rows.map(function (row) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTableRow, {
                row: row,
                updateRow: updateRow
              }, row.id, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: "Totals"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: sum(rows, 'giftCount')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: formatDollars(sum(rows, function (r) {
                  return r.amount * r.giftCount;
                }))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: sum(rows, 'giftCount') * 5
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }, _this);
};

_s3(GiftTable, "0Ptn0qjfyNuc6yrIWfs4zDrJbWc=");

_c3 = GiftTable;

var FundraisingCalculator = function FundraisingCalculator() {
  _s4();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1000),
      targetAmount = _useState5[0],
      setTargetAmount = _useState5[1]; // Create a new table whenever the target amount changes


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      tableKey = _useState6[0],
      setTableKey = _useState6[1];

  var handleTargetAmount = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (rawAmount) {
    var amount = parseFloat(rawAmount);
    if (isNaN(amount)) return targetAmount;
    if (amount <= 0) return targetAmount;
    setTargetAmount(amount);
    setTableKey(function (k) {
      return k + 1;
    });
    return amount;
  }, [targetAmount]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FundraisingCalculator,
    children: !targetAmount ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TargetAmountStep, {
      setTargetAmount: handleTargetAmount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTable, {
      targetAmount: targetAmount,
      setTargetAmount: handleTargetAmount
    }, "table_".concat(tableKey), false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 172,
    columnNumber: 5
  }, _this);
};

_s4(FundraisingCalculator, "IIWb031vrg9Q7pqfVLM6GZw+Iio=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbImdlbmVyYXRlRGVmYXVsdFJvd3MiLCJ0b3RhbEFtb3VudCIsInJvd3MiLCJpIiwicHVzaCIsImFtb3VudCIsIk1hdGgiLCJwb3ciLCJnaWZ0Q291bnQiLCJpZCIsIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJ1c2VTdGF0ZSIsInNldEFtb3VudCIsInN0eWxlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1bSIsImFyciIsInByb3BlcnR5IiwicmVkdWNlIiwiYWNjIiwidmFsIiwiZG9sbGFyRm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXREb2xsYXJzIiwiZm9ybWF0IiwiR2lmdFRhYmxlUm93Iiwicm93IiwidXBkYXRlUm93IiwidG9GaXhlZCIsImxvY2FsQW1vdW50Iiwic2V0TG9jYWxBbW91bnQiLCJsb2NhbEdpZnRDb3VudCIsInNldExvY2FsR2lmdENvdW50IiwiaGFuZGxlQW1vdW50Qmx1ciIsInVzZUNhbGxiYWNrIiwibmV3QW1vdW50IiwicGFyc2VGbG9hdCIsImlzTmFOIiwib25DaGFuZ2VBbW91bnQiLCJvbkNoYW5nZUdpZnRDb3VudCIsIm5ld0dpZnRDb3VudCIsInBhcnNlSW50IiwiR2lmdFRhYmxlIiwidGFyZ2V0QW1vdW50Iiwic2V0Um93cyIsInByZXZSb3dzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJyIiwibmV3Um93cyIsIm1hcCIsIkZ1bmRyYWlzaW5nQ2FsY3VsYXRvciIsInRhYmxlS2V5Iiwic2V0VGFibGVLZXkiLCJoYW5kbGVUYXJnZXRBbW91bnQiLCJyYXdBbW91bnQiLCJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0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QSxNQUNidEMsZUFEYSxrQkFFbEM7OztBQUZrQyxtQkFHRkMsc0RBQVEsQ0FBQyxDQUFELENBSE47QUFBQSxNQUczQjhDLFFBSDJCO0FBQUEsTUFHakJDLFdBSGlCOztBQUlsQyxNQUFNQyxrQkFBa0IsR0FBR3BCLHlEQUFXLENBQUMsVUFBQ3FCLFNBQUQsRUFBZTtBQUNwRCxRQUFNeEQsTUFBTSxHQUFHcUMsVUFBVSxDQUFDbUIsU0FBRCxDQUF6QjtBQUNBLFFBQUlsQixLQUFLLENBQUN0QyxNQUFELENBQVQsRUFBbUIsT0FBTzRDLFlBQVA7QUFDbkIsUUFBSTVDLE1BQU0sSUFBSSxDQUFkLEVBQWlCLE9BQU80QyxZQUFQO0FBQ2pCdEMsbUJBQWUsQ0FBQ04sTUFBRCxDQUFmO0FBQ0FzRCxlQUFXLENBQUMsVUFBQUcsQ0FBQztBQUFBLGFBQUlBLENBQUMsR0FBRyxDQUFSO0FBQUEsS0FBRixDQUFYO0FBQ0EsV0FBT3pELE1BQVA7QUFDRCxHQVBxQyxFQU9uQyxDQUFDNEMsWUFBRCxDQVBtQyxDQUF0QztBQVNBLHNCQUNFO0FBQUssYUFBUyxFQUFFbkMseUVBQU0sQ0FBQzJDLHFCQUF2QjtBQUFBLGNBQ0ksQ0FBQ1IsWUFBRCxnQkFDQSxxRUFBQyxnQkFBRDtBQUFrQixxQkFBZSxFQUFFVztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZ0JBR0EscUVBQUMsU0FBRDtBQUNFLGtCQUFZLEVBQUVYLFlBRGhCO0FBRUUscUJBQWUsRUFBRVc7QUFGbkIsdUJBR2dCRixRQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0ExQkQ7O0lBQU1ELHFCOztNQUFBQSxxQjtBQTRCU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FsY3VsYXRvci1lbWJlZC5lNjlkYjY1NTVmZTg0MmRmYTcxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Z1bmRyYWlzaW5nQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBnZW5lcmF0ZURlZmF1bHRSb3dzID0gKHRvdGFsQW1vdW50KSA9PiB7XHJcbiAgY29uc3Qgcm93cyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgcm93cy5wdXNoKHtcclxuICAgICAgYW1vdW50OiAodG90YWxBbW91bnQgLyA1KSAvIChNYXRoLnBvdygyLCBpKSksXHJcbiAgICAgIGdpZnRDb3VudDogTWF0aC5wb3coMiwgaSksXHJcbiAgICAgIGlkOiBgcm93XyR7aX1gLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm93cztcclxufTtcclxuXHJcbmNvbnN0IFRhcmdldEFtb3VudFN0ZXAgPSAoeyBzZXRUYXJnZXRBbW91bnQgfSkgPT4ge1xyXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhcmdldEFtb3VudFN0ZXB9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5FbnRlciB5b3VyIGZ1bmRyYWlzaW5nIGdvYWw8L2gyPlxyXG4gICAgICAgIEhvdyBtdWNoIGRvIHlvdSB3YW50IHRvIGZ1bmRyYWlzZT9cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXthbW91bnR9XHJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJkZWNpbWFsXCJcclxuICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRhcmdldEFtb3VudChhbW91bnQpfT5OZXh0IFN0ZXA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5jb25zdCBzdW0gPSAoYXJyLCBwcm9wZXJ0eSkgPT4gYXJyLnJlZHVjZShcclxuICAoYWNjLCB2YWwpID0+IGFjYyArICh0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbicgPyBwcm9wZXJ0eSh2YWwpIDogdmFsW3Byb3BlcnR5XSksXHJcbiAgMCxcclxuKTtcclxuXHJcbmNvbnN0IGRvbGxhckZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XHJcbiAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgY3VycmVuY3k6ICdVU0QnLFxyXG59KTtcclxuXHJcbmNvbnN0IGZvcm1hdERvbGxhcnMgPSB2YWwgPT4gZG9sbGFyRm9ybWF0dGVyLmZvcm1hdCh2YWwpO1xyXG5cclxuY29uc3QgR2lmdFRhYmxlUm93ID0gKHsgcm93LCB1cGRhdGVSb3cgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbEFtb3VudCwgc2V0TG9jYWxBbW91bnRdID0gdXNlU3RhdGUocm93LmFtb3VudCAlIDEgPT09IDAgPyByb3cuYW1vdW50IDogcm93LmFtb3VudC50b0ZpeGVkKDIpKTtcclxuICBjb25zdCBbbG9jYWxHaWZ0Q291bnQsIHNldExvY2FsR2lmdENvdW50XSA9IHVzZVN0YXRlKHJvdy5naWZ0Q291bnQgJSAxID09PSAwID8gcm93LmdpZnRDb3VudCA6IHJvdy5naWZ0Q291bnQudG9GaXhlZCgyKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFtb3VudEJsdXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdBbW91bnQgPSBwYXJzZUZsb2F0KGxvY2FsQW1vdW50KTtcclxuICAgIGlmIChpc05hTihuZXdBbW91bnQpIHx8IG5ld0Ftb3VudCA8PSAwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKG5ld0Ftb3VudCAlIDEgIT09IDApIHNldExvY2FsQW1vdW50KG5ld0Ftb3VudC50b0ZpeGVkKDIpKTtcclxuICB9LCBbbG9jYWxBbW91bnRdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VBbW91bnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0TG9jYWxBbW91bnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgbmV3QW1vdW50ID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoaXNOYU4obmV3QW1vdW50KSB8fCBuZXdBbW91bnQgPD0gMCkgcmV0dXJuO1xyXG4gICAgdXBkYXRlUm93KHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBhbW91bnQ6IG5ld0Ftb3VudCxcclxuICAgIH0pO1xyXG4gIH0sIFtyb3ddKTtcclxuICBjb25zdCBvbkNoYW5nZUdpZnRDb3VudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRMb2NhbEdpZnRDb3VudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zdCBuZXdHaWZ0Q291bnQgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoaXNOYU4obmV3R2lmdENvdW50KSB8fCBuZXdHaWZ0Q291bnQgPD0gMCkgcmV0dXJuO1xyXG4gICAgdXBkYXRlUm93KHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBnaWZ0Q291bnQ6IG5ld0dpZnRDb3VudCxcclxuICAgIH0pO1xyXG4gIH0sIFtyb3ddKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHRyPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17bG9jYWxBbW91bnR9XHJcbiAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgaW5wdXRNb2RlPVwiZGVjaW1hbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUFtb3VudH1cclxuICAgICAgICAgIHN0ZXA9ezAuMDF9XHJcbiAgICAgICAgICBvbkJsdXI9e2hhbmRsZUFtb3VudEJsdXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2xvY2FsR2lmdENvdW50fVxyXG4gICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cIm51bWVyaWNcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VHaWZ0Q291bnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPntmb3JtYXREb2xsYXJzKHJvdy5hbW91bnQgKiByb3cuZ2lmdENvdW50KX08L3RkPlxyXG4gICAgICA8dGQ+e3Jvdy5naWZ0Q291bnQgKiA1fTwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHaWZ0VGFibGUgPSAoeyB0YXJnZXRBbW91bnQsIHNldFRhcmdldEFtb3VudCB9KSA9PiB7XHJcbiAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVEZWZhdWx0Um93cyh0YXJnZXRBbW91bnQpKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUm93ID0gdXNlQ2FsbGJhY2soKHJvdykgPT4ge1xyXG4gICAgc2V0Um93cygocHJldlJvd3MpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBwcmV2Um93cy5maW5kSW5kZXgociA9PiByLmlkID09PSByb3cuaWQpO1xyXG4gICAgICBjb25zdCBuZXdSb3dzID0gWy4uLnByZXZSb3dzXTtcclxuICAgICAgbmV3Um93c1tpbmRleF0gPSByb3c7XHJcbiAgICAgIHJldHVybiBuZXdSb3dzO1xyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+WW91ciBnaWZ0IHRhYmxlPC9oMj5cclxuICAgICAgPGg2PlxyXG4gICAgICAgIEJhc2VkIG9uIHlvdXIgZnVuZHJhaXNpbmcgZ29hbHMsIHdlJ3ZlIGNhbGN1bGF0ZWQgdGhpcyBvcHRpbWFsIGJyZWFrZG93biBmb3IgeW91clxyXG4gICAgICAgIG9yZ2FuaXphdGlvbidzIGZ1bmRyYWlzaW5nIGluaXRpYXRpdmVzLiBZb3UgY2FuIGVkaXQgdGhpcyB0byBmaXQgeW91ciByZXF1aXJlbWVudHMuXHJcbiAgICAgIDwvaDY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPkdpZnQgQW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5OdW1iZXIgb2YgR2lmdHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlJvdyBUb3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+UHJvc3BlY3RzPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgeyByb3dzLm1hcChyb3cgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEdpZnRUYWJsZVJvdyByb3c9e3Jvd30gdXBkYXRlUm93PXt1cGRhdGVSb3d9IGtleT17cm93LmlkfSAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5Ub3RhbHM8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntzdW0ocm93cywgJ2dpZnRDb3VudCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2Zvcm1hdERvbGxhcnMoc3VtKHJvd3MsIHIgPT4gci5hbW91bnQgKiByLmdpZnRDb3VudCkpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3N1bShyb3dzLCAnZ2lmdENvdW50JykgKiA1fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmNvbnN0IEZ1bmRyYWlzaW5nQ2FsY3VsYXRvciA9ICgpID0+IHtcclxuICBjb25zdCBbdGFyZ2V0QW1vdW50LCBzZXRUYXJnZXRBbW91bnRdID0gdXNlU3RhdGUoMTAwMCk7XHJcbiAgLy8gQ3JlYXRlIGEgbmV3IHRhYmxlIHdoZW5ldmVyIHRoZSB0YXJnZXQgYW1vdW50IGNoYW5nZXNcclxuICBjb25zdCBbdGFibGVLZXksIHNldFRhYmxlS2V5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGhhbmRsZVRhcmdldEFtb3VudCA9IHVzZUNhbGxiYWNrKChyYXdBbW91bnQpID0+IHtcclxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQocmF3QW1vdW50KTtcclxuICAgIGlmIChpc05hTihhbW91bnQpKSByZXR1cm4gdGFyZ2V0QW1vdW50O1xyXG4gICAgaWYgKGFtb3VudCA8PSAwKSByZXR1cm4gdGFyZ2V0QW1vdW50O1xyXG4gICAgc2V0VGFyZ2V0QW1vdW50KGFtb3VudCk7XHJcbiAgICBzZXRUYWJsZUtleShrID0+IGsgKyAxKTtcclxuICAgIHJldHVybiBhbW91bnQ7XHJcbiAgfSwgW3RhcmdldEFtb3VudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GdW5kcmFpc2luZ0NhbGN1bGF0b3J9PlxyXG4gICAgICB7ICF0YXJnZXRBbW91bnQgPyAoXHJcbiAgICAgICAgPFRhcmdldEFtb3VudFN0ZXAgc2V0VGFyZ2V0QW1vdW50PXtoYW5kbGVUYXJnZXRBbW91bnR9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEdpZnRUYWJsZVxyXG4gICAgICAgICAgdGFyZ2V0QW1vdW50PXt0YXJnZXRBbW91bnR9XHJcbiAgICAgICAgICBzZXRUYXJnZXRBbW91bnQ9e2hhbmRsZVRhcmdldEFtb3VudH1cclxuICAgICAgICAgIGtleT17YHRhYmxlXyR7dGFibGVLZXl9YH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmRyYWlzaW5nQ2FsY3VsYXRvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==