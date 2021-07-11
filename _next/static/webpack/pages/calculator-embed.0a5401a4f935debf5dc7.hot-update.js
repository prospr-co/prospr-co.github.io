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
              lineNumber: 146,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Number of Gifts"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Row Total"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Prospects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
          children: [rows.map(function (row) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTableRow, {
              row: row,
              updateRow: updateRow
            }, row.id, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FooterRow,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "Totals"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: formatDollars(sum(rows, function (r) {
                return r.amount * r.giftCount;
              }))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount') * 5
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
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
      lineNumber: 185,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTable, {
      targetAmount: targetAmount,
      setTargetAmount: handleTargetAmount
    }, "table_".concat(tableKey), false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 183,
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

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/FundraisingCalculator.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/FundraisingCalculator.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".FundraisingCalculator_FundraisingCalculator__2pKM- input {\n  border: 1px solid #D3D8DE;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: 18px;\n  padding: 2px 8px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- input:invalid {\n  border-color: red;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TargetAmountStep__34Kmd {\n  max-width: 640px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_GiftTableStep__3WfFz {\n  max-width: 640px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru {\n  border-radius: 8px;\n  border: 1px solid #D3D8DE;\n  max-width: 640px;\n  overflow: hidden;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru .FundraisingCalculator_TargetAmountUpdate__3mnXI {\n  border-bottom: 1px solid #D3D8DE;\n  padding: 16px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru .FundraisingCalculator_TargetAmountUpdate__3mnXI input {\n  display: block;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table {\n  table-layout: fixed;\n  width: 100%;\n  max-width: 640px;\n  border-collapse: collapse;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table th {\n  text-align: start;\n  font-size: 14px;\n  font-weight: 500;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table th, .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr:not(:last-of-type) {\n  border-bottom: 1px solid #D3D8DE;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td, .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th {\n  padding: 8px 16px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td input, .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th input {\n  max-width: 100%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:nth-of-type(1), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:nth-of-type(1) {\n  width: 30%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:nth-of-type(2), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:nth-of-type(2) {\n  width: 25%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:nth-of-type(3), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:nth-of-type(3) {\n  width: 25%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:nth-of-type(4), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:nth-of-type(4) {\n  width: 20%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:not(:last-of-type), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:not(:last-of-type) {\n  border-right: 1px solid #D3D8DE;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table .FundraisingCalculator_FooterRow___Gveg td {\n  background-color: #F2F2F2;\n}", "",{"version":3,"sources":["webpack://FundraisingCalculator.module.scss"],"names":[],"mappings":"AACE;EACE,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAAJ;AAEI;EACE,iBAAA;AAAN;AAGE;EACE,gBAAA;AADJ;AAOE;EACE,gBAAA;AALJ;AAQE;EACE,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,gBAAA;AANJ;AAQI;EACE,gCAAA;EACA,aAAA;AANN;AAQM;EACE,cAAA;AANR;AAUI;EACE,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,yBAAA;AARN;AAUM;EACE,iBAAA;EACA,eAAA;EACA,gBAAA;AARR;AAWM;EACE,gCAAA;AATR;AAaQ;EACE,iBAAA;AAXV;AAYU;EACE,eAAA;AAVZ;AAaU;EACE,UAAA;AAXZ;AAcU;EACE,UAAA;AAZZ;AAeU;EACE,UAAA;AAbZ;AAgBU;EACE,UAAA;AAdZ;AAiBU;EACE,+BAAA;AAfZ;AAqBQ;EACE,yBAAA;AAnBV","sourcesContent":[".FundraisingCalculator {\r\n  input {\r\n    border: 1px solid #D3D8DE;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    padding: 2px 8px;\r\n\r\n    &:invalid {\r\n      border-color: red;\r\n    }\r\n  }\r\n  .TargetAmountStep {\r\n    max-width: 640px;\r\n    .TargetAmountContainer {\r\n\r\n    }\r\n  }\r\n\r\n  .GiftTableStep {\r\n    max-width: 640px;\r\n  }\r\n\r\n  .TableContainer {\r\n    border-radius: 8px;\r\n    border: 1px solid #D3D8DE;\r\n    max-width: 640px;\r\n    overflow: hidden;\r\n\r\n    .TargetAmountUpdate {\r\n      border-bottom: 1px solid #D3D8DE;\r\n      padding: 16px;\r\n\r\n      input {\r\n        display: block;\r\n      }\r\n    }\r\n\r\n    table {\r\n      table-layout: fixed;\r\n      width: 100%;\r\n      max-width: 640px;\r\n      border-collapse: collapse;\r\n\r\n      th {\r\n        text-align: start;\r\n        font-size: 14px;\r\n        font-weight: 500;\r\n      }\r\n\r\n      th, tr:not(:last-of-type) {\r\n        border-bottom: 1px solid #D3D8DE;\r\n      }\r\n\r\n      tr {\r\n        td, th {\r\n          padding: 8px 16px;\r\n          input {\r\n            max-width: 100%;\r\n          }\r\n\r\n          &:nth-of-type(1) {\r\n            width: 30%;\r\n          }\r\n\r\n          &:nth-of-type(2) {\r\n            width: 25%;\r\n          }\r\n\r\n          &:nth-of-type(3) {\r\n            width: 25%;\r\n          }\r\n\r\n          &:nth-of-type(4) {\r\n            width: 20%;\r\n          }\r\n\r\n          &:not(:last-of-type) {\r\n            border-right: 1px solid #D3D8DE;\r\n          }\r\n        }\r\n      }\r\n\r\n      .FooterRow {\r\n        td {\r\n          background-color: #F2F2F2;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"FundraisingCalculator": "FundraisingCalculator_FundraisingCalculator__2pKM-",
	"TargetAmountStep": "FundraisingCalculator_TargetAmountStep__34Kmd",
	"GiftTableStep": "FundraisingCalculator_GiftTableStep__3WfFz",
	"TableContainer": "FundraisingCalculator_TableContainer__3Quru",
	"TargetAmountUpdate": "FundraisingCalculator_TargetAmountUpdate__3mnXI",
	"FooterRow": "FundraisingCalculator_FooterRow___Gveg"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Z1bmRyYWlzaW5nQ2FsY3VsYXRvci5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZURlZmF1bHRSb3dzIiwidG90YWxBbW91bnQiLCJyb3dzIiwiaSIsInB1c2giLCJhbW91bnQiLCJNYXRoIiwicG93IiwiZ2lmdENvdW50IiwiaWQiLCJUYXJnZXRBbW91bnRTdGVwIiwic2V0VGFyZ2V0QW1vdW50IiwidXNlU3RhdGUiLCJzZXRBbW91bnQiLCJzdHlsZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdW0iLCJhcnIiLCJwcm9wZXJ0eSIsInJlZHVjZSIsImFjYyIsInZhbCIsImRvbGxhckZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0RG9sbGFycyIsImZvcm1hdCIsIkdpZnRUYWJsZVJvdyIsInJvdyIsInVwZGF0ZVJvdyIsInRvRml4ZWQiLCJsb2NhbEFtb3VudCIsInNldExvY2FsQW1vdW50IiwibG9jYWxHaWZ0Q291bnQiLCJzZXRMb2NhbEdpZnRDb3VudCIsImhhbmRsZUFtb3VudEJsdXIiLCJ1c2VDYWxsYmFjayIsIm5ld0Ftb3VudCIsInBhcnNlRmxvYXQiLCJpc05hTiIsIm9uQ2hhbmdlQW1vdW50Iiwib25DaGFuZ2VHaWZ0Q291bnQiLCJuZXdHaWZ0Q291bnQiLCJwYXJzZUludCIsIkdpZnRUYWJsZSIsInRhcmdldEFtb3VudCIsInNldFJvd3MiLCJsb2NhbFRhcmdldEFtb3VudCIsInNldExvY2FsVGFyZ2V0QW1vdW50IiwicHJldlJvd3MiLCJpbmRleCIsImZpbmRJbmRleCIsInIiLCJuZXdSb3dzIiwiR2lmdFRhYmxlU3RlcCIsIlRhYmxlQ29udGFpbmVyIiwiVGFyZ2V0QW1vdW50VXBkYXRlIiwibWFwIiwiRm9vdGVyUm93IiwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yIiwidGFibGVLZXkiLCJzZXRUYWJsZUtleSIsImhhbmRsZVRhcmdldEFtb3VudCIsInJhd0Ftb3VudCIsImsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsV0FBRCxFQUFpQjtBQUMzQyxNQUFNQyxJQUFJLEdBQUcsRUFBYjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJELFFBQUksQ0FBQ0UsSUFBTCxDQUFVO0FBQ1JDLFlBQU0sRUFBR0osV0FBVyxHQUFHLENBQWYsR0FBcUJLLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWUosQ0FBWixDQURyQjtBQUVSSyxlQUFTLEVBQUVGLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWUosQ0FBWixDQUZIO0FBR1JNLFFBQUUsZ0JBQVNOLENBQVQ7QUFITSxLQUFWO0FBS0Q7O0FBRUQsU0FBT0QsSUFBUDtBQUNELENBWkQ7O0FBY0EsSUFBTVEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxlQUFzQixRQUF0QkEsZUFBc0I7O0FBQUEsa0JBQ3BCQyxzREFBUSxDQUFDLEVBQUQsQ0FEWTtBQUFBLE1BQ3pDUCxNQUR5QztBQUFBLE1BQ2pDUSxTQURpQzs7QUFHaEQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHlFQUFNLENBQUNKLGdCQUF2QjtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixxREFHRTtBQUNFLGFBQUssRUFBRUwsTUFEVDtBQUVFLFdBQUcsRUFBRSxDQUZQO0FBR0UsZ0JBQVEsTUFIVjtBQUlFLGlCQUFTLEVBQUMsU0FKWjtBQUtFLFlBQUksRUFB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QUFnQyxxQkFBcUIsZ0NBQWdDLGVBQWUsb0NBQW9DLDJCQUEyQixlQUFlLG9DQUFvQywyQkFBMkIsZUFBZSxvQ0FBb0MsMkJBQTJCLGVBQWUsb0NBQW9DLDJCQUEyQixlQUFlLHdDQUF3QyxnREFBZ0QsZUFBZSxhQUFhLFdBQVcsMEJBQTBCLGdCQUFnQix3Q0FBd0MsYUFBYSxXQUFXLFNBQVMsT0FBTyxLQUFLLHVCQUF1QjtBQUNub007QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FsY3VsYXRvci1lbWJlZC4wYTU0MDFhNGY5MzVkZWJmNWRjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Z1bmRyYWlzaW5nQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9CdXR0b24nO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVEZWZhdWx0Um93cyA9ICh0b3RhbEFtb3VudCkgPT4ge1xyXG4gIGNvbnN0IHJvd3MgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIHJvd3MucHVzaCh7XHJcbiAgICAgIGFtb3VudDogKHRvdGFsQW1vdW50IC8gNSkgLyAoTWF0aC5wb3coMiwgaSkpLFxyXG4gICAgICBnaWZ0Q291bnQ6IE1hdGgucG93KDIsIGkpLFxyXG4gICAgICBpZDogYHJvd18ke2l9YCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvd3M7XHJcbn07XHJcblxyXG5jb25zdCBUYXJnZXRBbW91bnRTdGVwID0gKHsgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYXJnZXRBbW91bnRTdGVwfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+RW50ZXIgeW91ciBmdW5kcmFpc2luZyBnb2FsPC9oMj5cclxuICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFyZ2V0QW1vdW50KGFtb3VudCl9Pk5leHQgU3RlcDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmNvbnN0IHN1bSA9IChhcnIsIHByb3BlcnR5KSA9PiBhcnIucmVkdWNlKFxyXG4gIChhY2MsIHZhbCkgPT4gYWNjICsgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BlcnR5KHZhbCkgOiB2YWxbcHJvcGVydHldKSxcclxuICAwLFxyXG4pO1xyXG5cclxuY29uc3QgZG9sbGFyRm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcclxuICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICBjdXJyZW5jeTogJ1VTRCcsXHJcbn0pO1xyXG5cclxuY29uc3QgZm9ybWF0RG9sbGFycyA9IHZhbCA9PiBkb2xsYXJGb3JtYXR0ZXIuZm9ybWF0KHZhbCk7XHJcblxyXG5jb25zdCBHaWZ0VGFibGVSb3cgPSAoeyByb3csIHVwZGF0ZVJvdyB9KSA9PiB7XHJcbiAgY29uc3QgW2xvY2FsQW1vdW50LCBzZXRMb2NhbEFtb3VudF0gPSB1c2VTdGF0ZShyb3cuYW1vdW50ICUgMSA9PT0gMCA/IHJvdy5hbW91bnQgOiByb3cuYW1vdW50LnRvRml4ZWQoMikpO1xyXG4gIGNvbnN0IFtsb2NhbEdpZnRDb3VudCwgc2V0TG9jYWxHaWZ0Q291bnRdID0gdXNlU3RhdGUocm93LmdpZnRDb3VudCAlIDEgPT09IDAgPyByb3cuZ2lmdENvdW50IDogcm93LmdpZnRDb3VudC50b0ZpeGVkKDIpKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW1vdW50Qmx1ciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IG5ld0Ftb3VudCA9IHBhcnNlRmxvYXQobG9jYWxBbW91bnQpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0Ftb3VudCkgfHwgbmV3QW1vdW50IDw9IDApIHJldHVybjtcclxuXHJcbiAgICBpZiAobmV3QW1vdW50ICUgMSAhPT0gMCkgc2V0TG9jYWxBbW91bnQobmV3QW1vdW50LnRvRml4ZWQoMikpO1xyXG4gIH0sIFtsb2NhbEFtb3VudF0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUFtb3VudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRMb2NhbEFtb3VudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zdCBuZXdBbW91bnQgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChpc05hTihuZXdBbW91bnQpIHx8IG5ld0Ftb3VudCA8PSAwKSByZXR1cm47XHJcbiAgICB1cGRhdGVSb3coe1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGFtb3VudDogbmV3QW1vdW50LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Jvd10pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlR2lmdENvdW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldExvY2FsR2lmdENvdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0dpZnRDb3VudCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChpc05hTihuZXdHaWZ0Q291bnQpIHx8IG5ld0dpZnRDb3VudCA8PSAwKSByZXR1cm47XHJcbiAgICB1cGRhdGVSb3coe1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGdpZnRDb3VudDogbmV3R2lmdENvdW50LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Jvd10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtsb2NhbEFtb3VudH1cclxuICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJkZWNpbWFsXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgc3RlcD17MC4wMX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUFtb3VudH1cclxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlQW1vdW50Qmx1cn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17bG9jYWxHaWZ0Q291bnR9XHJcbiAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgaW5wdXRNb2RlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUdpZnRDb3VudH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+e2Zvcm1hdERvbGxhcnMocm93LmFtb3VudCAqIHJvdy5naWZ0Q291bnQpfTwvdGQ+XHJcbiAgICAgIDx0ZD57cm93LmdpZnRDb3VudCAqIDV9PC90ZD5cclxuICAgIDwvdHI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdpZnRUYWJsZSA9ICh7IHRhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZURlZmF1bHRSb3dzKHRhcmdldEFtb3VudCkpO1xyXG4gIGNvbnN0IFtsb2NhbFRhcmdldEFtb3VudCwgc2V0TG9jYWxUYXJnZXRBbW91bnRdID0gdXNlU3RhdGUodGFyZ2V0QW1vdW50KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUm93ID0gdXNlQ2FsbGJhY2soKHJvdykgPT4ge1xyXG4gICAgc2V0Um93cygocHJldlJvd3MpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBwcmV2Um93cy5maW5kSW5kZXgociA9PiByLmlkID09PSByb3cuaWQpO1xyXG4gICAgICBjb25zdCBuZXdSb3dzID0gWy4uLnByZXZSb3dzXTtcclxuICAgICAgbmV3Um93c1tpbmRleF0gPSByb3c7XHJcbiAgICAgIHJldHVybiBuZXdSb3dzO1xyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdpZnRUYWJsZVN0ZXB9PlxyXG4gICAgICA8aDI+WW91ciBnaWZ0IHRhYmxlPC9oMj5cclxuICAgICAgPGg2PlxyXG4gICAgICAgIEJhc2VkIG9uIHlvdXIgZnVuZHJhaXNpbmcgZ29hbHMsIHdlJ3ZlIGNhbGN1bGF0ZWQgdGhpcyBvcHRpbWFsIGJyZWFrZG93biBmb3IgeW91clxyXG4gICAgICAgIG9yZ2FuaXphdGlvbidzIGZ1bmRyYWlzaW5nIGluaXRpYXRpdmVzLiBZb3UgY2FuIGVkaXQgdGhpcyB0byBmaXQgeW91ciByZXF1aXJlbWVudHMuXHJcbiAgICAgIDwvaDY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYmxlQ29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhcmdldEFtb3VudFVwZGF0ZX0+XHJcbiAgICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2xvY2FsVGFyZ2V0QW1vdW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRMb2NhbFRhcmdldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXRBbW91bnQobG9jYWxUYXJnZXRBbW91bnQpfT5VcGRhdGUgVGFibGU8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+R2lmdCBBbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5OdW1iZXIgb2YgR2lmdHM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Sb3cgVG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Qcm9zcGVjdHM8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgeyByb3dzLm1hcChyb3cgPT4gKFxyXG4gICAgICAgICAgICAgIDxHaWZ0VGFibGVSb3cgcm93PXtyb3d9IHVwZGF0ZVJvdz17dXBkYXRlUm93fSBrZXk9e3Jvdy5pZH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJSb3d9PlxyXG4gICAgICAgICAgICAgIDx0ZD5Ub3RhbHM8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57c3VtKHJvd3MsICdnaWZ0Q291bnQnKX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57Zm9ybWF0RG9sbGFycyhzdW0ocm93cywgciA9PiByLmFtb3VudCAqIHIuZ2lmdENvdW50KSl9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3N1bShyb3dzLCAnZ2lmdENvdW50JykgKiA1fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuY29uc3QgRnVuZHJhaXNpbmdDYWxjdWxhdG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0YXJnZXRBbW91bnQsIHNldFRhcmdldEFtb3VudF0gPSB1c2VTdGF0ZSgxMDAwKTtcclxuICAvLyBDcmVhdGUgYSBuZXcgdGFibGUgd2hlbmV2ZXIgdGhlIHRhcmdldCBhbW91bnQgY2hhbmdlc1xyXG4gIGNvbnN0IFt0YWJsZUtleSwgc2V0VGFibGVLZXldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlVGFyZ2V0QW1vdW50ID0gdXNlQ2FsbGJhY2soKHJhd0Ftb3VudCkgPT4ge1xyXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChyYXdBbW91bnQpO1xyXG4gICAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiB0YXJnZXRBbW91bnQ7XHJcbiAgICBpZiAoYW1vdW50IDw9IDApIHJldHVybiB0YXJnZXRBbW91bnQ7XHJcbiAgICBzZXRUYXJnZXRBbW91bnQoYW1vdW50KTtcclxuICAgIHNldFRhYmxlS2V5KGsgPT4gayArIDEpO1xyXG4gICAgcmV0dXJuIGFtb3VudDtcclxuICB9LCBbdGFyZ2V0QW1vdW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcn0+XHJcbiAgICAgIHsgIXRhcmdldEFtb3VudCA/IChcclxuICAgICAgICA8VGFyZ2V0QW1vdW50U3RlcCBzZXRUYXJnZXRBbW91bnQ9e2hhbmRsZVRhcmdldEFtb3VudH0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8R2lmdFRhYmxlXHJcbiAgICAgICAgICB0YXJnZXRBbW91bnQ9e3RhcmdldEFtb3VudH1cclxuICAgICAgICAgIHNldFRhcmdldEFtb3VudD17aGFuZGxlVGFyZ2V0QW1vdW50fVxyXG4gICAgICAgICAga2V5PXtgdGFibGVfJHt0YWJsZUtleX1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVuZHJhaXNpbmdDYWxjdWxhdG9yO1xyXG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0QzRDhERTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgcGFkZGluZzogMnB4IDhweDtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIGlucHV0OmludmFsaWQge1xcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhcmdldEFtb3VudFN0ZXBfXzM0S21kIHtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0dpZnRUYWJsZVN0ZXBfXzNXZkZ6IHtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDNEOERFO1xcbiAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhcmdldEFtb3VudFVwZGF0ZV9fM21uWEkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEM0Q4REU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYXJnZXRBbW91bnRVcGRhdGVfXzNtblhJIGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUge1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0aCB7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0aCwgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0QzRDhERTtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRkLCAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGgge1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0ZCBpbnB1dCwgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRoIGlucHV0IHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRkOm50aC1vZi10eXBlKDEpLCAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGg6bnRoLW9mLXR5cGUoMSkge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRkOm50aC1vZi10eXBlKDIpLCAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGg6bnRoLW9mLXR5cGUoMikge1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRkOm50aC1vZi10eXBlKDMpLCAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGg6bnRoLW9mLXR5cGUoMykge1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRkOm50aC1vZi10eXBlKDQpLCAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGg6bnRoLW9mLXR5cGUoNCkge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRkOm5vdCg6bGFzdC1vZi10eXBlKSwgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRoOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRDNEOERFO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9Gb290ZXJSb3dfX19HdmVnIHRkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9GdW5kcmFpc2luZ0NhbGN1bGF0b3IubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0UsaUJBQUE7QUFBTjtBQUdFO0VBQ0UsZ0JBQUE7QUFESjtBQU9FO0VBQ0UsZ0JBQUE7QUFMSjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVFJO0VBQ0UsZ0NBQUE7RUFDQSxhQUFBO0FBTk47QUFRTTtFQUNFLGNBQUE7QUFOUjtBQVVJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVJOO0FBVU07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVJSO0FBV007RUFDRSxnQ0FBQTtBQVRSO0FBYVE7RUFDRSxpQkFBQTtBQVhWO0FBWVU7RUFDRSxlQUFBO0FBVlo7QUFhVTtFQUNFLFVBQUE7QUFYWjtBQWNVO0VBQ0UsVUFBQTtBQVpaO0FBZVU7RUFDRSxVQUFBO0FBYlo7QUFnQlU7RUFDRSxVQUFBO0FBZFo7QUFpQlU7RUFDRSwrQkFBQTtBQWZaO0FBcUJRO0VBQ0UseUJBQUE7QUFuQlZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvciB7XFxyXFxuICBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEM0Q4REU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDhweDtcXHJcXG5cXHJcXG4gICAgJjppbnZhbGlkIHtcXHJcXG4gICAgICBib3JkZXItY29sb3I6IHJlZDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLlRhcmdldEFtb3VudFN0ZXAge1xcclxcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xcclxcbiAgICAuVGFyZ2V0QW1vdW50Q29udGFpbmVyIHtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLkdpZnRUYWJsZVN0ZXAge1xcclxcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlRhYmxlQ29udGFpbmVyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDNEOERFO1xcclxcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAuVGFyZ2V0QW1vdW50VXBkYXRlIHtcXHJcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0QzRDhERTtcXHJcXG4gICAgICBwYWRkaW5nOiAxNnB4O1xcclxcblxcclxcbiAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0YWJsZSB7XFxyXFxuICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDY0MHB4O1xcclxcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFxyXFxuICAgICAgdGgge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICB0aCwgdHI6bm90KDpsYXN0LW9mLXR5cGUpIHtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDNEOERFO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICB0ciB7XFxyXFxuICAgICAgICB0ZCwgdGgge1xcclxcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG4gICAgICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAmOm50aC1vZi10eXBlKDQpIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICY6bm90KDpsYXN0LW9mLXR5cGUpIHtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRDNEOERFO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5Gb290ZXJSb3cge1xcclxcbiAgICAgICAgdGQge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJGdW5kcmFpc2luZ0NhbGN1bGF0b3JcIjogXCJGdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLVwiLFxuXHRcIlRhcmdldEFtb3VudFN0ZXBcIjogXCJGdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFyZ2V0QW1vdW50U3RlcF9fMzRLbWRcIixcblx0XCJHaWZ0VGFibGVTdGVwXCI6IFwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0dpZnRUYWJsZVN0ZXBfXzNXZkZ6XCIsXG5cdFwiVGFibGVDb250YWluZXJcIjogXCJGdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1XCIsXG5cdFwiVGFyZ2V0QW1vdW50VXBkYXRlXCI6IFwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhcmdldEFtb3VudFVwZGF0ZV9fM21uWElcIixcblx0XCJGb290ZXJSb3dcIjogXCJGdW5kcmFpc2luZ0NhbGN1bGF0b3JfRm9vdGVyUm93X19fR3ZlZ1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=