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
      setTargetAmount = _useState5[1];

  var handleTargetAmount = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (rawAmount) {
    var amount = parseFloat(rawAmount);
    if (isNaN(amount)) return targetAmount;
    if (amount <= 0) return targetAmount;
    setTargetAmount(amount);
    return amount;
  }, [targetAmount]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FundraisingCalculator,
    children: !targetAmount ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TargetAmountStep, {
      setTargetAmount: handleTargetAmount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTable, {
      targetAmount: targetAmount,
      setTargetAmount: handleTargetAmount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 5
  }, _this);
};

_s4(FundraisingCalculator, "qjEWiM5rH1gcMY8m5xkeCOo8ybY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbImdlbmVyYXRlRGVmYXVsdFJvd3MiLCJ0b3RhbEFtb3VudCIsInJvd3MiLCJpIiwicHVzaCIsImFtb3VudCIsIk1hdGgiLCJwb3ciLCJnaWZ0Q291bnQiLCJpZCIsIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJ1c2VTdGF0ZSIsInNldEFtb3VudCIsInN0eWxlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1bSIsImFyciIsInByb3BlcnR5IiwicmVkdWNlIiwiYWNjIiwidmFsIiwiZG9sbGFyRm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXREb2xsYXJzIiwiZm9ybWF0IiwiR2lmdFRhYmxlUm93Iiwicm93IiwidXBkYXRlUm93IiwidG9GaXhlZCIsImxvY2FsQW1vdW50Iiwic2V0TG9jYWxBbW91bnQiLCJsb2NhbEdpZnRDb3VudCIsInNldExvY2FsR2lmdENvdW50IiwiaGFuZGxlQW1vdW50Qmx1ciIsInVzZUNhbGxiYWNrIiwibmV3QW1vdW50IiwicGFyc2VGbG9hdCIsImlzTmFOIiwib25DaGFuZ2VBbW91bnQiLCJvbkNoYW5nZUdpZnRDb3VudCIsIm5ld0dpZnRDb3VudCIsInBhcnNlSW50IiwiR2lmdFRhYmxlIiwidGFyZ2V0QW1vdW50Iiwic2V0Um93cyIsInByZXZSb3dzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJyIiwibmV3Um93cyIsIm1hcCIsIkZ1bmRyYWlzaW5nQ2FsY3VsYXRvciIsImhhbmRsZVRhcmdldEFtb3VudCIsInJhd0Ftb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxXQUFELEVBQWlCO0FB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QkFBa0IsR0FBR2xCLHlEQUFXLENBQUMsVUFBQ21CLFNBQUQsRUFBZTtBQUNwRCxRQUFNdEQsTUFBTSxHQUFHcUMsVUFBVSxDQUFDaUIsU0FBRCxDQUF6QjtBQUNBLFFBQUloQixLQUFLLENBQUN0QyxNQUFELENBQVQsRUFBbUIsT0FBTzRDLFlBQVA7QUFDbkIsUUFBSTVDLE1BQU0sSUFBSSxDQUFkLEVBQWlCLE9BQU80QyxZQUFQO0FBQ2pCdEMsbUJBQWUsQ0FBQ04sTUFBRCxDQUFmO0FBQ0EsV0FBT0EsTUFBUDtBQUNELEdBTnFDLEVBTW5DLENBQUM0QyxZQUFELENBTm1DLENBQXRDO0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVuQyx5RUFBTSxDQUFDMkMscUJBQXZCO0FBQUEsY0FDSSxDQUFDUixZQUFELGdCQUNBLHFFQUFDLGdCQUFEO0FBQWtCLHFCQUFlLEVBQUVTO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxnQkFHQSxxRUFBQyxTQUFEO0FBQVcsa0JBQVksRUFBRVQsWUFBekI7QUFBdUMscUJBQWUsRUFBRVM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBbEJEOztJQUFNRCxxQjs7TUFBQUEscUI7QUFvQlNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbGN1bGF0b3ItZW1iZWQuYWRmZmUxNjk2M2VlYTY2OGRjNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GdW5kcmFpc2luZ0NhbGN1bGF0b3IubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVEZWZhdWx0Um93cyA9ICh0b3RhbEFtb3VudCkgPT4ge1xyXG4gIGNvbnN0IHJvd3MgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIHJvd3MucHVzaCh7XHJcbiAgICAgIGFtb3VudDogKHRvdGFsQW1vdW50IC8gNSkgLyAoTWF0aC5wb3coMiwgaSkpLFxyXG4gICAgICBnaWZ0Q291bnQ6IE1hdGgucG93KDIsIGkpLFxyXG4gICAgICBpZDogYHJvd18ke2l9YCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvd3M7XHJcbn07XHJcblxyXG5jb25zdCBUYXJnZXRBbW91bnRTdGVwID0gKHsgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYXJnZXRBbW91bnRTdGVwfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+RW50ZXIgeW91ciBmdW5kcmFpc2luZyBnb2FsPC9oMj5cclxuICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgaW5wdXRNb2RlPVwiZGVjaW1hbFwiXHJcbiAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXRBbW91bnQoYW1vdW50KX0+TmV4dCBTdGVwPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuY29uc3Qgc3VtID0gKGFyciwgcHJvcGVydHkpID0+IGFyci5yZWR1Y2UoXHJcbiAgKGFjYywgdmFsKSA9PiBhY2MgKyAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nID8gcHJvcGVydHkodmFsKSA6IHZhbFtwcm9wZXJ0eV0pLFxyXG4gIDAsXHJcbik7XHJcblxyXG5jb25zdCBkb2xsYXJGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xyXG4gIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gIGN1cnJlbmN5OiAnVVNEJyxcclxufSk7XHJcblxyXG5jb25zdCBmb3JtYXREb2xsYXJzID0gdmFsID0+IGRvbGxhckZvcm1hdHRlci5mb3JtYXQodmFsKTtcclxuXHJcbmNvbnN0IEdpZnRUYWJsZVJvdyA9ICh7IHJvdywgdXBkYXRlUm93IH0pID0+IHtcclxuICBjb25zdCBbbG9jYWxBbW91bnQsIHNldExvY2FsQW1vdW50XSA9IHVzZVN0YXRlKHJvdy5hbW91bnQgJSAxID09PSAwID8gcm93LmFtb3VudCA6IHJvdy5hbW91bnQudG9GaXhlZCgyKSk7XHJcbiAgY29uc3QgW2xvY2FsR2lmdENvdW50LCBzZXRMb2NhbEdpZnRDb3VudF0gPSB1c2VTdGF0ZShyb3cuZ2lmdENvdW50ICUgMSA9PT0gMCA/IHJvdy5naWZ0Q291bnQgOiByb3cuZ2lmdENvdW50LnRvRml4ZWQoMikpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBbW91bnRCbHVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3QW1vdW50ID0gcGFyc2VGbG9hdChsb2NhbEFtb3VudCk7XHJcbiAgICBpZiAoaXNOYU4obmV3QW1vdW50KSB8fCBuZXdBbW91bnQgPD0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChuZXdBbW91bnQgJSAxICE9PSAwKSBzZXRMb2NhbEFtb3VudChuZXdBbW91bnQudG9GaXhlZCgyKSk7XHJcbiAgfSwgW2xvY2FsQW1vdW50XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQW1vdW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldExvY2FsQW1vdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0Ftb3VudCA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0Ftb3VudCkgfHwgbmV3QW1vdW50IDw9IDApIHJldHVybjtcclxuICAgIHVwZGF0ZVJvdyh7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgYW1vdW50OiBuZXdBbW91bnQsXHJcbiAgICB9KTtcclxuICB9LCBbcm93XSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VHaWZ0Q291bnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0TG9jYWxHaWZ0Q291bnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgbmV3R2lmdENvdW50ID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0dpZnRDb3VudCkgfHwgbmV3R2lmdENvdW50IDw9IDApIHJldHVybjtcclxuICAgIHVwZGF0ZVJvdyh7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgZ2lmdENvdW50OiBuZXdHaWZ0Q291bnQsXHJcbiAgICB9KTtcclxuICB9LCBbcm93XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0cj5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2xvY2FsQW1vdW50fVxyXG4gICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VBbW91bnR9XHJcbiAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVBbW91bnRCbHVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtsb2NhbEdpZnRDb3VudH1cclxuICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJudW1lcmljXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlR2lmdENvdW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD57Zm9ybWF0RG9sbGFycyhyb3cuYW1vdW50ICogcm93LmdpZnRDb3VudCl9PC90ZD5cclxuICAgICAgPHRkPntyb3cuZ2lmdENvdW50ICogNX08L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR2lmdFRhYmxlID0gKHsgdGFyZ2V0QW1vdW50LCBzZXRUYXJnZXRBbW91bnQgfSkgPT4ge1xyXG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlRGVmYXVsdFJvd3ModGFyZ2V0QW1vdW50KSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVJvdyA9IHVzZUNhbGxiYWNrKChyb3cpID0+IHtcclxuICAgIHNldFJvd3MoKHByZXZSb3dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gcHJldlJvd3MuZmluZEluZGV4KHIgPT4gci5pZCA9PT0gcm93LmlkKTtcclxuICAgICAgY29uc3QgbmV3Um93cyA9IFsuLi5wcmV2Um93c107XHJcbiAgICAgIG5ld1Jvd3NbaW5kZXhdID0gcm93O1xyXG4gICAgICByZXR1cm4gbmV3Um93cztcclxuICAgIH0pXHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPllvdXIgZ2lmdCB0YWJsZTwvaDI+XHJcbiAgICAgIDxoNj5cclxuICAgICAgICBCYXNlZCBvbiB5b3VyIGZ1bmRyYWlzaW5nIGdvYWxzLCB3ZSd2ZSBjYWxjdWxhdGVkIHRoaXMgb3B0aW1hbCBicmVha2Rvd24gZm9yIHlvdXJcclxuICAgICAgICBvcmdhbml6YXRpb24ncyBmdW5kcmFpc2luZyBpbml0aWF0aXZlcy4gWW91IGNhbiBlZGl0IHRoaXMgdG8gZml0IHlvdXIgcmVxdWlyZW1lbnRzLlxyXG4gICAgICA8L2g2PlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5HaWZ0IEFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIEdpZnRzPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Sb3cgVG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlByb3NwZWN0czwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHsgcm93cy5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgICAgIDxHaWZ0VGFibGVSb3cgcm93PXtyb3d9IHVwZGF0ZVJvdz17dXBkYXRlUm93fSBrZXk9e3Jvdy5pZH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+VG90YWxzPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57c3VtKHJvd3MsICdnaWZ0Q291bnQnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntmb3JtYXREb2xsYXJzKHN1bShyb3dzLCByID0+IHIuYW1vdW50ICogci5naWZ0Q291bnQpKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntzdW0ocm93cywgJ2dpZnRDb3VudCcpICogNX08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5jb25zdCBGdW5kcmFpc2luZ0NhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50XSA9IHVzZVN0YXRlKDEwMDApO1xyXG4gIGNvbnN0IGhhbmRsZVRhcmdldEFtb3VudCA9IHVzZUNhbGxiYWNrKChyYXdBbW91bnQpID0+IHtcclxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQocmF3QW1vdW50KTtcclxuICAgIGlmIChpc05hTihhbW91bnQpKSByZXR1cm4gdGFyZ2V0QW1vdW50O1xyXG4gICAgaWYgKGFtb3VudCA8PSAwKSByZXR1cm4gdGFyZ2V0QW1vdW50O1xyXG4gICAgc2V0VGFyZ2V0QW1vdW50KGFtb3VudCk7XHJcbiAgICByZXR1cm4gYW1vdW50O1xyXG4gIH0sIFt0YXJnZXRBbW91bnRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GdW5kcmFpc2luZ0NhbGN1bGF0b3J9PlxyXG4gICAgICB7ICF0YXJnZXRBbW91bnQgPyAoXHJcbiAgICAgICAgPFRhcmdldEFtb3VudFN0ZXAgc2V0VGFyZ2V0QW1vdW50PXtoYW5kbGVUYXJnZXRBbW91bnR9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEdpZnRUYWJsZSB0YXJnZXRBbW91bnQ9e3RhcmdldEFtb3VudH0gc2V0VGFyZ2V0QW1vdW50PXtoYW5kbGVUYXJnZXRBbW91bnR9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVuZHJhaXNpbmdDYWxjdWxhdG9yO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9