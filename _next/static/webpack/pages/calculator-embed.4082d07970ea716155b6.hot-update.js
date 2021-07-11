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
        min: 0,
        required: true,
        inputMode: "decimal",
        type: "number",
        onChange: onChangeAmount,
        step: 0.01
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
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
        type: "number",
        onChange: onChangeGiftCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: row.amount * row.giftCount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: row.giftCount * 5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 107,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
      children: "Based on your fundraising goals, we've calculated this optimal breakdown for your organization's fundraising initiatives. You can edit this to fit your requirements."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
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
                lineNumber: 118,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                children: "Number of Gifts"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                children: "Row Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
                children: "Prospects"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
            children: [rows.map(function (row) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTableRow, {
                row: row,
                updateRow: updateRow
              }, row.id, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: "Totals"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: sum(rows, 'giftCount')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: sum(rows, function (r) {
                  return r.amount * r.giftCount;
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: sum(rows, 'giftCount') * 5
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
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
      lineNumber: 154,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTable, {
      targetAmount: targetAmount,
      setTargetAmount: handleTargetAmount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 152,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbImdlbmVyYXRlRGVmYXVsdFJvd3MiLCJ0b3RhbEFtb3VudCIsInJvd3MiLCJpIiwicHVzaCIsImFtb3VudCIsIk1hdGgiLCJwb3ciLCJnaWZ0Q291bnQiLCJpZCIsIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJ1c2VTdGF0ZSIsInNldEFtb3VudCIsInN0eWxlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1bSIsImFyciIsInByb3BlcnR5IiwicmVkdWNlIiwiYWNjIiwidmFsIiwiR2lmdFRhYmxlUm93Iiwicm93IiwidXBkYXRlUm93IiwibG9jYWxBbW91bnQiLCJzZXRMb2NhbEFtb3VudCIsImxvY2FsR2lmdENvdW50Iiwic2V0TG9jYWxHaWZ0Q291bnQiLCJvbkNoYW5nZUFtb3VudCIsInVzZUNhbGxiYWNrIiwibmV3QW1vdW50IiwicGFyc2VGbG9hdCIsImlzTmFOIiwib25DaGFuZ2VHaWZ0Q291bnQiLCJuZXdHaWZ0Q291bnQiLCJwYXJzZUludCIsIkdpZnRUYWJsZSIsInRhcmdldEFtb3VudCIsInNldFJvd3MiLCJwcmV2Um93cyIsImluZGV4IiwiZmluZEluZGV4IiwiciIsIm5ld1Jvd3MiLCJtYXAiLCJGdW5kcmFpc2luZ0NhbGN1bGF0b3IiLCJoYW5kbGVUYXJnZXRBbW91bnQiLCJyYXdBbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsV0FBRCxFQUFpQjtBQUMzQyxNQUFNQyxJQUFJLEdBQUcsRUFBYjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJELFFB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bEMsTUFBTXNDLGtCQUFrQixHQUFHakIseURBQVcsQ0FBQyxVQUFDa0IsU0FBRCxFQUFlO0FBQ3BELFFBQU03QyxNQUFNLEdBQUc2QixVQUFVLENBQUNnQixTQUFELENBQXpCO0FBQ0EsUUFBSWYsS0FBSyxDQUFDOUIsTUFBRCxDQUFULEVBQW1CLE9BQU9tQyxZQUFQO0FBQ25CLFFBQUluQyxNQUFNLElBQUksQ0FBZCxFQUFpQixPQUFPbUMsWUFBUDtBQUNqQjdCLG1CQUFlLENBQUNOLE1BQUQsQ0FBZjtBQUNBLFdBQU9BLE1BQVA7QUFDRCxHQU5xQyxFQU1uQyxDQUFDbUMsWUFBRCxDQU5tQyxDQUF0QztBQU9BLHNCQUNFO0FBQUssYUFBUyxFQUFFMUIseUVBQU0sQ0FBQ2tDLHFCQUF2QjtBQUFBLGNBQ0ksQ0FBQ1IsWUFBRCxnQkFDQSxxRUFBQyxnQkFBRDtBQUFrQixxQkFBZSxFQUFFUztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZ0JBR0EscUVBQUMsU0FBRDtBQUFXLGtCQUFZLEVBQUVULFlBQXpCO0FBQXVDLHFCQUFlLEVBQUVTO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQWxCRDs7SUFBTUQscUI7O01BQUFBLHFCO0FBb0JTQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWxjdWxhdG9yLWVtYmVkLjQwODJkMDc5NzBlYTcxNjE1NWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRnVuZHJhaXNpbmdDYWxjdWxhdG9yLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IGdlbmVyYXRlRGVmYXVsdFJvd3MgPSAodG90YWxBbW91bnQpID0+IHtcclxuICBjb25zdCByb3dzID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICByb3dzLnB1c2goe1xyXG4gICAgICBhbW91bnQ6ICh0b3RhbEFtb3VudCAvIDUpIC8gKE1hdGgucG93KDIsIGkpKSxcclxuICAgICAgZ2lmdENvdW50OiBNYXRoLnBvdygyLCBpKSxcclxuICAgICAgaWQ6IGByb3dfJHtpfWAsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb3dzO1xyXG59O1xyXG5cclxuY29uc3QgVGFyZ2V0QW1vdW50U3RlcCA9ICh7IHNldFRhcmdldEFtb3VudCB9KSA9PiB7XHJcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFyZ2V0QW1vdW50U3RlcH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPkVudGVyIHlvdXIgZnVuZHJhaXNpbmcgZ29hbDwvaDI+XHJcbiAgICAgICAgSG93IG11Y2ggZG8geW91IHdhbnQgdG8gZnVuZHJhaXNlP1xyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2Ftb3VudH1cclxuICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFyZ2V0QW1vdW50KGFtb3VudCl9Pk5leHQgU3RlcDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmNvbnN0IHN1bSA9IChhcnIsIHByb3BlcnR5KSA9PiBhcnIucmVkdWNlKFxyXG4gIChhY2MsIHZhbCkgPT4gYWNjICsgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BlcnR5KHZhbCkgOiB2YWxbcHJvcGVydHldKSxcclxuICAwLFxyXG4pO1xyXG5cclxuY29uc3QgR2lmdFRhYmxlUm93ID0gKHsgcm93LCB1cGRhdGVSb3cgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbEFtb3VudCwgc2V0TG9jYWxBbW91bnRdID0gdXNlU3RhdGUocm93LmFtb3VudCk7XHJcbiAgY29uc3QgW2xvY2FsR2lmdENvdW50LCBzZXRMb2NhbEdpZnRDb3VudF0gPSB1c2VTdGF0ZShyb3cuZ2lmdENvdW50KTtcclxuICBjb25zdCBvbkNoYW5nZUFtb3VudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRMb2NhbEFtb3VudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zdCBuZXdBbW91bnQgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChpc05hTihuZXdBbW91bnQpIHx8IG5ld0Ftb3VudCA8PSAwKSByZXR1cm47XHJcbiAgICB1cGRhdGVSb3coe1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGFtb3VudDogbmV3QW1vdW50LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Jvd10pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlR2lmdENvdW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldExvY2FsR2lmdENvdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0dpZnRDb3VudCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChpc05hTihuZXdHaWZ0Q291bnQpIHx8IG5ld0dpZnRDb3VudCA8PSAwKSByZXR1cm47XHJcbiAgICB1cGRhdGVSb3coe1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGdpZnRDb3VudDogbmV3R2lmdENvdW50LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Jvd10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtsb2NhbEFtb3VudH1cclxuICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJkZWNpbWFsXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQW1vdW50fVxyXG4gICAgICAgICAgc3RlcD17MC4wMX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17bG9jYWxHaWZ0Q291bnR9XHJcbiAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgaW5wdXRNb2RlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUdpZnRDb3VudH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+e3Jvdy5hbW91bnQgKiByb3cuZ2lmdENvdW50fTwvdGQ+XHJcbiAgICAgIDx0ZD57cm93LmdpZnRDb3VudCAqIDV9PC90ZD5cclxuICAgIDwvdHI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdpZnRUYWJsZSA9ICh7IHRhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZURlZmF1bHRSb3dzKHRhcmdldEFtb3VudCkpO1xyXG5cclxuICBjb25zdCB1cGRhdGVSb3cgPSB1c2VDYWxsYmFjaygocm93KSA9PiB7XHJcbiAgICBzZXRSb3dzKChwcmV2Um93cykgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHByZXZSb3dzLmZpbmRJbmRleChyID0+IHIuaWQgPT09IHJvdy5pZCk7XHJcbiAgICAgIGNvbnN0IG5ld1Jvd3MgPSBbLi4ucHJldlJvd3NdO1xyXG4gICAgICBuZXdSb3dzW2luZGV4XSA9IHJvdztcclxuICAgICAgcmV0dXJuIG5ld1Jvd3M7XHJcbiAgICB9KVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj5Zb3VyIGdpZnQgdGFibGU8L2gyPlxyXG4gICAgICA8aDY+XHJcbiAgICAgICAgQmFzZWQgb24geW91ciBmdW5kcmFpc2luZyBnb2Fscywgd2UndmUgY2FsY3VsYXRlZCB0aGlzIG9wdGltYWwgYnJlYWtkb3duIGZvciB5b3VyXHJcbiAgICAgICAgb3JnYW5pemF0aW9uJ3MgZnVuZHJhaXNpbmcgaW5pdGlhdGl2ZXMuIFlvdSBjYW4gZWRpdCB0aGlzIHRvIGZpdCB5b3VyIHJlcXVpcmVtZW50cy5cclxuICAgICAgPC9oNj5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+R2lmdCBBbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPk51bWJlciBvZiBHaWZ0czwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+Um93IFRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Qcm9zcGVjdHM8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7IHJvd3MubWFwKHJvdyA9PiAoXHJcbiAgICAgICAgICAgICAgICA8R2lmdFRhYmxlUm93IHJvdz17cm93fSB1cGRhdGVSb3c9e3VwZGF0ZVJvd30ga2V5PXtyb3cuaWR9IC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlRvdGFsczwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3N1bShyb3dzLCAnZ2lmdENvdW50Jyl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57c3VtKHJvd3MsIHIgPT4gci5hbW91bnQgKiByLmdpZnRDb3VudCl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57c3VtKHJvd3MsICdnaWZ0Q291bnQnKSAqIDV9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuY29uc3QgRnVuZHJhaXNpbmdDYWxjdWxhdG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0YXJnZXRBbW91bnQsIHNldFRhcmdldEFtb3VudF0gPSB1c2VTdGF0ZSgxMDAwKTtcclxuICBjb25zdCBoYW5kbGVUYXJnZXRBbW91bnQgPSB1c2VDYWxsYmFjaygocmF3QW1vdW50KSA9PiB7XHJcbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KHJhd0Ftb3VudCk7XHJcbiAgICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIHRhcmdldEFtb3VudDtcclxuICAgIGlmIChhbW91bnQgPD0gMCkgcmV0dXJuIHRhcmdldEFtb3VudDtcclxuICAgIHNldFRhcmdldEFtb3VudChhbW91bnQpO1xyXG4gICAgcmV0dXJuIGFtb3VudDtcclxuICB9LCBbdGFyZ2V0QW1vdW50XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRnVuZHJhaXNpbmdDYWxjdWxhdG9yfT5cclxuICAgICAgeyAhdGFyZ2V0QW1vdW50ID8gKFxyXG4gICAgICAgIDxUYXJnZXRBbW91bnRTdGVwIHNldFRhcmdldEFtb3VudD17aGFuZGxlVGFyZ2V0QW1vdW50fSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxHaWZ0VGFibGUgdGFyZ2V0QW1vdW50PXt0YXJnZXRBbW91bnR9IHNldFRhcmdldEFtb3VudD17aGFuZGxlVGFyZ2V0QW1vdW50fSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmRyYWlzaW5nQ2FsY3VsYXRvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==