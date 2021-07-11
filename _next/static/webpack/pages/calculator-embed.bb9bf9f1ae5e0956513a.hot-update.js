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
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Button */ "./components/Button.jsx");




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
        lineNumber: 25,
        columnNumber: 9
      }, _this), "How much do you want to fundraise?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        value: amount,
        min: 1,
        required: true,
        inputMode: "decimal",
        type: "number",
        step: 0.01,
        onChange: function onChange(e) {
          return setAmount(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        onClick: function onClick() {
          return setTargetAmount(amount);
        },
        children: "Next Step"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
        step: 0.01,
        onChange: onChangeAmount,
        onBlur: handleAmountBlur
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
        lineNumber: 98,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: formatDollars(row.amount * row.giftCount)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: row.giftCount * 5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(targetAmount),
      localTargetAmount = _useState5[0],
      setLocalTargetAmount = _useState5[1];

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
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.GiftTableStep,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
      children: "Your gift table"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
      children: "Based on your fundraising goals, we've calculated this optimal breakdown for your organization's fundraising initiatives. You can edit this to fit your requirements."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TableContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TargetAmountUpdate,
        children: ["How much do you want to fundraise?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          value: localTargetAmount,
          onChange: function onChange(e) {
            return setLocalTargetAmount(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onClick: function onClick() {
            return setTargetAmount(localTargetAmount);
          },
          intent: "primary",
          children: "Update Table"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Gift Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Number of Gifts"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Row Total"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Prospects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
          children: [rows.map(function (row) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTableRow, {
              row: row,
              updateRow: updateRow
            }, row.id, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FooterRow,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "Totals"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: formatDollars(sum(rows, function (r) {
                return r.amount * r.giftCount;
              }))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount') * 5
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }, _this);
};

_s3(GiftTable, "QTJyNA3fJQ/G2nTPnI9UiORgOpM=");

_c3 = GiftTable;

var FundraisingCalculator = function FundraisingCalculator() {
  _s4();

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1000),
      targetAmount = _useState6[0],
      setTargetAmount = _useState6[1]; // Create a new table whenever the target amount changes


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      tableKey = _useState7[0],
      setTableKey = _useState7[1];

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
      lineNumber: 187,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTable, {
      targetAmount: targetAmount,
      setTargetAmount: handleTargetAmount
    }, "table_".concat(tableKey), false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 185,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbImdlbmVyYXRlRGVmYXVsdFJvd3MiLCJ0b3RhbEFtb3VudCIsInJvd3MiLCJpIiwicHVzaCIsImFtb3VudCIsIk1hdGgiLCJwb3ciLCJnaWZ0Q291bnQiLCJpZCIsIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJ1c2VTdGF0ZSIsInNldEFtb3VudCIsInN0eWxlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1bSIsImFyciIsInByb3BlcnR5IiwicmVkdWNlIiwiYWNjIiwidmFsIiwiZG9sbGFyRm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXREb2xsYXJzIiwiZm9ybWF0IiwiR2lmdFRhYmxlUm93Iiwicm93IiwidXBkYXRlUm93IiwidG9GaXhlZCIsImxvY2FsQW1vdW50Iiwic2V0TG9jYWxBbW91bnQiLCJsb2NhbEdpZnRDb3VudCIsInNldExvY2FsR2lmdENvdW50IiwiaGFuZGxlQW1vdW50Qmx1ciIsInVzZUNhbGxiYWNrIiwibmV3QW1vdW50IiwicGFyc2VGbG9hdCIsImlzTmFOIiwib25DaGFuZ2VBbW91bnQiLCJvbkNoYW5nZUdpZnRDb3VudCIsIm5ld0dpZnRDb3VudCIsInBhcnNlSW50IiwiR2lmdFRhYmxlIiwidGFyZ2V0QW1vdW50Iiwic2V0Um93cyIsImxvY2FsVGFyZ2V0QW1vdW50Iiwic2V0TG9jYWxUYXJnZXRBbW91bnQiLCJwcmV2Um93cyIsImluZGV4IiwiZmluZEluZGV4IiwiciIsIm5ld1Jvd3MiLCJHaWZ0VGFibGVTdGVwIiwiVGFibGVDb250YWluZXIiLCJUYXJnZXRBbW91bnRVcGRhdGUiLCJtYXAiLCJGb290ZXJSb3ciLCJGdW5kcmFpc2luZ0NhbGN1bGF0b3IiLCJ0YWJsZUtleSIsInNldFRhYmxlS2V5IiwiaGFuZGxlVGFyZ2V0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QixLQUFLLENBQUN0QyxNQUFELENBQVQsRUFBbUIsT0FBTzRDLFlBQVA7QUFDbkIsUUFBSTVDLE1BQU0sSUFBSSxDQUFkLEVBQWlCLE9BQU80QyxZQUFQO0FBQ2pCdEMsbUJBQWUsQ0FBQ04sTUFBRCxDQUFmO0FBQ0E0RCxlQUFXLENBQUMsVUFBQUcsQ0FBQztBQUFBLGFBQUlBLENBQUMsR0FBRyxDQUFSO0FBQUEsS0FBRixDQUFYO0FBQ0EsV0FBTy9ELE1BQVA7QUFDRCxHQVBxQyxFQU9uQyxDQUFDNEMsWUFBRCxDQVBtQyxDQUF0QztBQVNBLHNCQUNFO0FBQUssYUFBUyxFQUFFbkMseUVBQU0sQ0FBQ2lELHFCQUF2QjtBQUFBLGNBQ0ksQ0FBQ2QsWUFBRCxnQkFDQSxxRUFBQyxnQkFBRDtBQUFrQixxQkFBZSxFQUFFaUI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGdCQUdBLHFFQUFDLFNBQUQ7QUFDRSxrQkFBWSxFQUFFakIsWUFEaEI7QUFFRSxxQkFBZSxFQUFFaUI7QUFGbkIsdUJBR2dCRixRQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0ExQkQ7O0lBQU1ELHFCOztNQUFBQSxxQjtBQTRCU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FsY3VsYXRvci1lbWJlZC5iYjliZjlmMWFlNWUwOTU2NTEzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Z1bmRyYWlzaW5nQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9CdXR0b24nO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVEZWZhdWx0Um93cyA9ICh0b3RhbEFtb3VudCkgPT4ge1xyXG4gIGNvbnN0IHJvd3MgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIHJvd3MucHVzaCh7XHJcbiAgICAgIGFtb3VudDogKHRvdGFsQW1vdW50IC8gNSkgLyAoTWF0aC5wb3coMiwgaSkpLFxyXG4gICAgICBnaWZ0Q291bnQ6IE1hdGgucG93KDIsIGkpLFxyXG4gICAgICBpZDogYHJvd18ke2l9YCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvd3M7XHJcbn07XHJcblxyXG5jb25zdCBUYXJnZXRBbW91bnRTdGVwID0gKHsgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYXJnZXRBbW91bnRTdGVwfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+RW50ZXIgeW91ciBmdW5kcmFpc2luZyBnb2FsPC9oMj5cclxuICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFyZ2V0QW1vdW50KGFtb3VudCl9Pk5leHQgU3RlcDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmNvbnN0IHN1bSA9IChhcnIsIHByb3BlcnR5KSA9PiBhcnIucmVkdWNlKFxyXG4gIChhY2MsIHZhbCkgPT4gYWNjICsgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BlcnR5KHZhbCkgOiB2YWxbcHJvcGVydHldKSxcclxuICAwLFxyXG4pO1xyXG5cclxuY29uc3QgZG9sbGFyRm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcclxuICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICBjdXJyZW5jeTogJ1VTRCcsXHJcbn0pO1xyXG5cclxuY29uc3QgZm9ybWF0RG9sbGFycyA9IHZhbCA9PiBkb2xsYXJGb3JtYXR0ZXIuZm9ybWF0KHZhbCk7XHJcblxyXG5jb25zdCBHaWZ0VGFibGVSb3cgPSAoeyByb3csIHVwZGF0ZVJvdyB9KSA9PiB7XHJcbiAgY29uc3QgW2xvY2FsQW1vdW50LCBzZXRMb2NhbEFtb3VudF0gPSB1c2VTdGF0ZShyb3cuYW1vdW50ICUgMSA9PT0gMCA/IHJvdy5hbW91bnQgOiByb3cuYW1vdW50LnRvRml4ZWQoMikpO1xyXG4gIGNvbnN0IFtsb2NhbEdpZnRDb3VudCwgc2V0TG9jYWxHaWZ0Q291bnRdID0gdXNlU3RhdGUocm93LmdpZnRDb3VudCAlIDEgPT09IDAgPyByb3cuZ2lmdENvdW50IDogcm93LmdpZnRDb3VudC50b0ZpeGVkKDIpKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW1vdW50Qmx1ciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IG5ld0Ftb3VudCA9IHBhcnNlRmxvYXQobG9jYWxBbW91bnQpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0Ftb3VudCkgfHwgbmV3QW1vdW50IDw9IDApIHJldHVybjtcclxuXHJcbiAgICBpZiAobmV3QW1vdW50ICUgMSAhPT0gMCkgc2V0TG9jYWxBbW91bnQobmV3QW1vdW50LnRvRml4ZWQoMikpO1xyXG4gIH0sIFtsb2NhbEFtb3VudF0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUFtb3VudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRMb2NhbEFtb3VudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zdCBuZXdBbW91bnQgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChpc05hTihuZXdBbW91bnQpIHx8IG5ld0Ftb3VudCA8PSAwKSByZXR1cm47XHJcbiAgICB1cGRhdGVSb3coe1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGFtb3VudDogbmV3QW1vdW50LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Jvd10pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlR2lmdENvdW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldExvY2FsR2lmdENvdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0dpZnRDb3VudCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChpc05hTihuZXdHaWZ0Q291bnQpIHx8IG5ld0dpZnRDb3VudCA8PSAwKSByZXR1cm47XHJcbiAgICB1cGRhdGVSb3coe1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGdpZnRDb3VudDogbmV3R2lmdENvdW50LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Jvd10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtsb2NhbEFtb3VudH1cclxuICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJkZWNpbWFsXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgc3RlcD17MC4wMX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUFtb3VudH1cclxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlQW1vdW50Qmx1cn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17bG9jYWxHaWZ0Q291bnR9XHJcbiAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgaW5wdXRNb2RlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUdpZnRDb3VudH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+e2Zvcm1hdERvbGxhcnMocm93LmFtb3VudCAqIHJvdy5naWZ0Q291bnQpfTwvdGQ+XHJcbiAgICAgIDx0ZD57cm93LmdpZnRDb3VudCAqIDV9PC90ZD5cclxuICAgIDwvdHI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdpZnRUYWJsZSA9ICh7IHRhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZURlZmF1bHRSb3dzKHRhcmdldEFtb3VudCkpO1xyXG4gIGNvbnN0IFtsb2NhbFRhcmdldEFtb3VudCwgc2V0TG9jYWxUYXJnZXRBbW91bnRdID0gdXNlU3RhdGUodGFyZ2V0QW1vdW50KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUm93ID0gdXNlQ2FsbGJhY2soKHJvdykgPT4ge1xyXG4gICAgc2V0Um93cygocHJldlJvd3MpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBwcmV2Um93cy5maW5kSW5kZXgociA9PiByLmlkID09PSByb3cuaWQpO1xyXG4gICAgICBjb25zdCBuZXdSb3dzID0gWy4uLnByZXZSb3dzXTtcclxuICAgICAgbmV3Um93c1tpbmRleF0gPSByb3c7XHJcbiAgICAgIHJldHVybiBuZXdSb3dzO1xyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdpZnRUYWJsZVN0ZXB9PlxyXG4gICAgICA8aDI+WW91ciBnaWZ0IHRhYmxlPC9oMj5cclxuICAgICAgPGg2PlxyXG4gICAgICAgIEJhc2VkIG9uIHlvdXIgZnVuZHJhaXNpbmcgZ29hbHMsIHdlJ3ZlIGNhbGN1bGF0ZWQgdGhpcyBvcHRpbWFsIGJyZWFrZG93biBmb3IgeW91clxyXG4gICAgICAgIG9yZ2FuaXphdGlvbidzIGZ1bmRyYWlzaW5nIGluaXRpYXRpdmVzLiBZb3UgY2FuIGVkaXQgdGhpcyB0byBmaXQgeW91ciByZXF1aXJlbWVudHMuXHJcbiAgICAgIDwvaDY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYmxlQ29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhcmdldEFtb3VudFVwZGF0ZX0+XHJcbiAgICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2xvY2FsVGFyZ2V0QW1vdW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRMb2NhbFRhcmdldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXRBbW91bnQobG9jYWxUYXJnZXRBbW91bnQpfSBpbnRlbnQ9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIFVwZGF0ZSBUYWJsZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPkdpZnQgQW1vdW50PC90aD5cclxuICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIEdpZnRzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Um93IFRvdGFsPC90aD5cclxuICAgICAgICAgICAgICA8dGg+UHJvc3BlY3RzPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHsgcm93cy5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgICA8R2lmdFRhYmxlUm93IHJvdz17cm93fSB1cGRhdGVSb3c9e3VwZGF0ZVJvd30ga2V5PXtyb3cuaWR9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtzdHlsZXMuRm9vdGVyUm93fT5cclxuICAgICAgICAgICAgICA8dGQ+VG90YWxzPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3N1bShyb3dzLCAnZ2lmdENvdW50Jyl9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2Zvcm1hdERvbGxhcnMoc3VtKHJvd3MsIHIgPT4gci5hbW91bnQgKiByLmdpZnRDb3VudCkpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntzdW0ocm93cywgJ2dpZnRDb3VudCcpICogNX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmNvbnN0IEZ1bmRyYWlzaW5nQ2FsY3VsYXRvciA9ICgpID0+IHtcclxuICBjb25zdCBbdGFyZ2V0QW1vdW50LCBzZXRUYXJnZXRBbW91bnRdID0gdXNlU3RhdGUoMTAwMCk7XHJcbiAgLy8gQ3JlYXRlIGEgbmV3IHRhYmxlIHdoZW5ldmVyIHRoZSB0YXJnZXQgYW1vdW50IGNoYW5nZXNcclxuICBjb25zdCBbdGFibGVLZXksIHNldFRhYmxlS2V5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGhhbmRsZVRhcmdldEFtb3VudCA9IHVzZUNhbGxiYWNrKChyYXdBbW91bnQpID0+IHtcclxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQocmF3QW1vdW50KTtcclxuICAgIGlmIChpc05hTihhbW91bnQpKSByZXR1cm4gdGFyZ2V0QW1vdW50O1xyXG4gICAgaWYgKGFtb3VudCA8PSAwKSByZXR1cm4gdGFyZ2V0QW1vdW50O1xyXG4gICAgc2V0VGFyZ2V0QW1vdW50KGFtb3VudCk7XHJcbiAgICBzZXRUYWJsZUtleShrID0+IGsgKyAxKTtcclxuICAgIHJldHVybiBhbW91bnQ7XHJcbiAgfSwgW3RhcmdldEFtb3VudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GdW5kcmFpc2luZ0NhbGN1bGF0b3J9PlxyXG4gICAgICB7ICF0YXJnZXRBbW91bnQgPyAoXHJcbiAgICAgICAgPFRhcmdldEFtb3VudFN0ZXAgc2V0VGFyZ2V0QW1vdW50PXtoYW5kbGVUYXJnZXRBbW91bnR9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEdpZnRUYWJsZVxyXG4gICAgICAgICAgdGFyZ2V0QW1vdW50PXt0YXJnZXRBbW91bnR9XHJcbiAgICAgICAgICBzZXRUYXJnZXRBbW91bnQ9e2hhbmRsZVRhcmdldEFtb3VudH1cclxuICAgICAgICAgIGtleT17YHRhYmxlXyR7dGFibGVLZXl9YH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmRyYWlzaW5nQ2FsY3VsYXRvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==