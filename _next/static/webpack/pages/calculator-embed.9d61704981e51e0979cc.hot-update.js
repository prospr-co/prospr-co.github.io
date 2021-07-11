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

var GiftTableRow = function GiftTableRow(_ref2) {
  _s2();

  var row = _ref2.row,
      updateRow = _ref2.updateRow;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(row.amount),
      localAmount = _useState2[0],
      setLocalAmount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(row.giftCount),
      localGiftCount = _useState3[0],
      setLocalGiftCount = _useState3[1];

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
        min: 1,
        required: true,
        inputMode: "decimal",
        onChange: onChangeAmount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        value: localGiftCount,
        min: 1,
        required: true,
        inputMode: "numeric",
        onChange: onChangeGiftCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: row.amount * row.giftCount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: row.giftCount * 5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, _this);
};

_s2(GiftTableRow, "sW8eZKpeUDhBjYDdPZSgkcxD3vw=");

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
      lineNumber: 88,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
      children: "Based on your fundraising goals, we've calculated this optimal breakdown for your organization's fundraising initiatives. You can edit this to fit your requirements."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
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
                lineNumber: 99,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                children: "Number of Gifts"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                children: "Row Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                children: "Prospects"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
            children: [rows.map(function (row) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTableRow, {
                row: row,
                updateRow: updateRow
              }, row.id, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: "Totals"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: sum(rows, 'giftCount')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: sum(rows, function (r) {
                  return r.amount * r.giftCount;
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: sum(rows, 'giftCount') * 5
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
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
      lineNumber: 135,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTable, {
      targetAmount: targetAmount,
      setTargetAmount: handleTargetAmount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbImdlbmVyYXRlRGVmYXVsdFJvd3MiLCJ0b3RhbEFtb3VudCIsInJvd3MiLCJpIiwicHVzaCIsImFtb3VudCIsIk1hdGgiLCJwb3ciLCJnaWZ0Q291bnQiLCJpZCIsIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJ1c2VTdGF0ZSIsInNldEFtb3VudCIsInN0eWxlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1bSIsImFyciIsInByb3BlcnR5IiwicmVkdWNlIiwiYWNjIiwidmFsIiwiR2lmdFRhYmxlUm93Iiwicm93IiwidXBkYXRlUm93IiwibG9jYWxBbW91bnQiLCJzZXRMb2NhbEFtb3VudCIsImxvY2FsR2lmdENvdW50Iiwic2V0TG9jYWxHaWZ0Q291bnQiLCJvbkNoYW5nZUFtb3VudCIsInVzZUNhbGxiYWNrIiwibmV3QW1vdW50IiwicGFyc2VGbG9hdCIsImlzTmFOIiwib25DaGFuZ2VHaWZ0Q291bnQiLCJuZXdHaWZ0Q291bnQiLCJwYXJzZUludCIsIkdpZnRUYWJsZSIsInRhcmdldEFtb3VudCIsInNldFJvd3MiLCJwcmV2Um93cyIsImluZGV4IiwiZmluZEluZGV4IiwiciIsIm5ld1Jvd3MiLCJtYXAiLCJGdW5kcmFpc2luZ0NhbGN1bGF0b3IiLCJoYW5kbGVUYXJnZXRBbW91bnQiLCJyYXdBbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsV0FBRCxFQUFpQjtBQUMzQyxNQUFNQyxJQUFJLEdBQUcsRUFBYjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJELFFB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QWU7QUFDcEQsUUFBTTdDLE1BQU0sR0FBRzZCLFVBQVUsQ0FBQ2dCLFNBQUQsQ0FBekI7QUFDQSxRQUFJZixLQUFLLENBQUM5QixNQUFELENBQVQsRUFBbUIsT0FBT21DLFlBQVA7QUFDbkIsUUFBSW5DLE1BQU0sSUFBSSxDQUFkLEVBQWlCLE9BQU9tQyxZQUFQO0FBQ2pCN0IsbUJBQWUsQ0FBQ04sTUFBRCxDQUFmO0FBQ0EsV0FBT0EsTUFBUDtBQUNELEdBTnFDLEVBTW5DLENBQUNtQyxZQUFELENBTm1DLENBQXRDO0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUUxQix5RUFBTSxDQUFDa0MscUJBQXZCO0FBQUEsY0FDSSxDQUFDUixZQUFELGdCQUNBLHFFQUFDLGdCQUFEO0FBQWtCLHFCQUFlLEVBQUVTO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxnQkFHQSxxRUFBQyxTQUFEO0FBQVcsa0JBQVksRUFBRVQsWUFBekI7QUFBdUMscUJBQWUsRUFBRVM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBbEJEOztJQUFNRCxxQjs7TUFBQUEscUI7QUFvQlNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbGN1bGF0b3ItZW1iZWQuOWQ2MTcwNDk4MWU1MWUwOTc5Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GdW5kcmFpc2luZ0NhbGN1bGF0b3IubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVEZWZhdWx0Um93cyA9ICh0b3RhbEFtb3VudCkgPT4ge1xyXG4gIGNvbnN0IHJvd3MgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIHJvd3MucHVzaCh7XHJcbiAgICAgIGFtb3VudDogKHRvdGFsQW1vdW50IC8gNSkgLyAoTWF0aC5wb3coMiwgaSkpLFxyXG4gICAgICBnaWZ0Q291bnQ6IE1hdGgucG93KDIsIGkpLFxyXG4gICAgICBpZDogYHJvd18ke2l9YCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvd3M7XHJcbn07XHJcblxyXG5jb25zdCBUYXJnZXRBbW91bnRTdGVwID0gKHsgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYXJnZXRBbW91bnRTdGVwfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+RW50ZXIgeW91ciBmdW5kcmFpc2luZyBnb2FsPC9oMj5cclxuICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgaW5wdXRNb2RlPVwiZGVjaW1hbFwiXHJcbiAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXRBbW91bnQoYW1vdW50KX0+TmV4dCBTdGVwPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuY29uc3Qgc3VtID0gKGFyciwgcHJvcGVydHkpID0+IGFyci5yZWR1Y2UoXHJcbiAgKGFjYywgdmFsKSA9PiBhY2MgKyAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nID8gcHJvcGVydHkodmFsKSA6IHZhbFtwcm9wZXJ0eV0pLFxyXG4gIDAsXHJcbik7XHJcblxyXG5jb25zdCBHaWZ0VGFibGVSb3cgPSAoeyByb3csIHVwZGF0ZVJvdyB9KSA9PiB7XHJcbiAgY29uc3QgW2xvY2FsQW1vdW50LCBzZXRMb2NhbEFtb3VudF0gPSB1c2VTdGF0ZShyb3cuYW1vdW50KTtcclxuICBjb25zdCBbbG9jYWxHaWZ0Q291bnQsIHNldExvY2FsR2lmdENvdW50XSA9IHVzZVN0YXRlKHJvdy5naWZ0Q291bnQpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlQW1vdW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldExvY2FsQW1vdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0Ftb3VudCA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0Ftb3VudCkgfHwgbmV3QW1vdW50IDw9IDApIHJldHVybjtcclxuICAgIHVwZGF0ZVJvdyh7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgYW1vdW50OiBuZXdBbW91bnQsXHJcbiAgICB9KTtcclxuICB9LCBbcm93XSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VHaWZ0Q291bnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0TG9jYWxHaWZ0Q291bnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgbmV3R2lmdENvdW50ID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0dpZnRDb3VudCkgfHwgbmV3R2lmdENvdW50IDw9IDApIHJldHVybjtcclxuICAgIHVwZGF0ZVJvdyh7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgZ2lmdENvdW50OiBuZXdHaWZ0Q291bnQsXHJcbiAgICB9KTtcclxuICB9LCBbcm93XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0cj5cclxuICAgICAgPHRkPjxpbnB1dCB2YWx1ZT17bG9jYWxBbW91bnR9IG1pbj17MX0gcmVxdWlyZWQgaW5wdXRNb2RlPVwiZGVjaW1hbFwiIG9uQ2hhbmdlPXtvbkNoYW5nZUFtb3VudH0gLz48L3RkPlxyXG4gICAgICA8dGQ+PGlucHV0IHZhbHVlPXtsb2NhbEdpZnRDb3VudH0gbWluPXsxfSByZXF1aXJlZCBpbnB1dE1vZGU9XCJudW1lcmljXCIgb25DaGFuZ2U9e29uQ2hhbmdlR2lmdENvdW50fSAvPjwvdGQ+XHJcbiAgICAgIDx0ZD57cm93LmFtb3VudCAqIHJvdy5naWZ0Q291bnR9PC90ZD5cclxuICAgICAgPHRkPntyb3cuZ2lmdENvdW50ICogNX08L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR2lmdFRhYmxlID0gKHsgdGFyZ2V0QW1vdW50LCBzZXRUYXJnZXRBbW91bnQgfSkgPT4ge1xyXG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlRGVmYXVsdFJvd3ModGFyZ2V0QW1vdW50KSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVJvdyA9IHVzZUNhbGxiYWNrKChyb3cpID0+IHtcclxuICAgIHNldFJvd3MoKHByZXZSb3dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gcHJldlJvd3MuZmluZEluZGV4KHIgPT4gci5pZCA9PT0gcm93LmlkKTtcclxuICAgICAgY29uc3QgbmV3Um93cyA9IFsuLi5wcmV2Um93c107XHJcbiAgICAgIG5ld1Jvd3NbaW5kZXhdID0gcm93O1xyXG4gICAgICByZXR1cm4gbmV3Um93cztcclxuICAgIH0pXHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPllvdXIgZ2lmdCB0YWJsZTwvaDI+XHJcbiAgICAgIDxoNj5cclxuICAgICAgICBCYXNlZCBvbiB5b3VyIGZ1bmRyYWlzaW5nIGdvYWxzLCB3ZSd2ZSBjYWxjdWxhdGVkIHRoaXMgb3B0aW1hbCBicmVha2Rvd24gZm9yIHlvdXJcclxuICAgICAgICBvcmdhbml6YXRpb24ncyBmdW5kcmFpc2luZyBpbml0aWF0aXZlcy4gWW91IGNhbiBlZGl0IHRoaXMgdG8gZml0IHlvdXIgcmVxdWlyZW1lbnRzLlxyXG4gICAgICA8L2g2PlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5HaWZ0IEFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIEdpZnRzPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Sb3cgVG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlByb3NwZWN0czwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHsgcm93cy5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgICAgIDxHaWZ0VGFibGVSb3cgcm93PXtyb3d9IHVwZGF0ZVJvdz17dXBkYXRlUm93fSBrZXk9e3Jvdy5pZH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+VG90YWxzPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57c3VtKHJvd3MsICdnaWZ0Q291bnQnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntzdW0ocm93cywgciA9PiByLmFtb3VudCAqIHIuZ2lmdENvdW50KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntzdW0ocm93cywgJ2dpZnRDb3VudCcpICogNX08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5jb25zdCBGdW5kcmFpc2luZ0NhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50XSA9IHVzZVN0YXRlKDEwMDApO1xyXG4gIGNvbnN0IGhhbmRsZVRhcmdldEFtb3VudCA9IHVzZUNhbGxiYWNrKChyYXdBbW91bnQpID0+IHtcclxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQocmF3QW1vdW50KTtcclxuICAgIGlmIChpc05hTihhbW91bnQpKSByZXR1cm4gdGFyZ2V0QW1vdW50O1xyXG4gICAgaWYgKGFtb3VudCA8PSAwKSByZXR1cm4gdGFyZ2V0QW1vdW50O1xyXG4gICAgc2V0VGFyZ2V0QW1vdW50KGFtb3VudCk7XHJcbiAgICByZXR1cm4gYW1vdW50O1xyXG4gIH0sIFt0YXJnZXRBbW91bnRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GdW5kcmFpc2luZ0NhbGN1bGF0b3J9PlxyXG4gICAgICB7ICF0YXJnZXRBbW91bnQgPyAoXHJcbiAgICAgICAgPFRhcmdldEFtb3VudFN0ZXAgc2V0VGFyZ2V0QW1vdW50PXtoYW5kbGVUYXJnZXRBbW91bnR9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEdpZnRUYWJsZSB0YXJnZXRBbW91bnQ9e3RhcmdldEFtb3VudH0gc2V0VGFyZ2V0QW1vdW50PXtoYW5kbGVUYXJnZXRBbW91bnR9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVuZHJhaXNpbmdDYWxjdWxhdG9yO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9