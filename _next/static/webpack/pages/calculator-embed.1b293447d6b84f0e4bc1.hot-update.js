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
/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Input */ "./components/Input.jsx");




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
        lineNumber: 26,
        columnNumber: 9
      }, _this), "How much do you want to fundraise?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        onClick: function onClick() {
          return setTargetAmount(amount);
        },
        children: "Next Step"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 87,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        value: localGiftCount,
        min: 1,
        required: true,
        inputMode: "numeric",
        type: "number",
        onChange: onChangeGiftCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: formatDollars(row.amount * row.giftCount)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: row.giftCount * 5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, _this);
};

_s2(GiftTableRow, "XFqo03ys6EZuPuQ4vNS2yVtz/kY=");

_c2 = GiftTableRow;

var downloadCsv = function downloadCsv(data) {
  var headers = ['Gift Amount', 'Number of Gifts', 'Row Total', 'Prospects'];
  var rows = data.map(function (d) {
    return [d.amount, d.giftCount, d.amount * d.giftCount, d.giftCount * 5];
  });
  var csv = [headers.join(',')].concat(Object(B_workspace_prospr_landing_page_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(rows.map(function (row) {
    return row.join(',');
  }))).join('\n');
  var a = document.createElement('a');
  var mimeType = 'text/csv;encoding:utf-8';
  var fileName = 'gift_table.csv';

  if (navigator.msSaveBlob) {
    // IE10
    navigator.msSaveBlob(new Blob([csv], {
      type: mimeType
    }), fileName);
  } else if (URL && 'download' in a) {
    //html5 A[download]
    a.href = URL.createObjectURL(new Blob([csv], {
      type: mimeType
    }));
    a.setAttribute('download', fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    location.href = 'data:application/octet-stream,' + encodeURIComponent(csv); // only this mime type is supported
  }
};

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.GiftTableTitle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Your gift table"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.DownloadCsv,
        onClick: function onClick() {
          return downloadCsv(rows);
        },
        children: "Download Results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
      children: "Based on your fundraising goals, we've calculated this optimal breakdown for your organization's fundraising initiatives. You can edit this to fit your requirements."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TableContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TargetAmountUpdate,
        children: ["How much do you want to fundraise?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.InputRow,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            value: localTargetAmount,
            min: 1,
            required: true,
            inputMode: "decimal",
            type: "number",
            step: 0.01,
            onChange: function onChange(e) {
              return setLocalTargetAmount(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            onClick: function onClick() {
              return setTargetAmount(localTargetAmount);
            },
            intent: "primary",
            children: "Update Table"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Gift Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Number of Gifts"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Row Total"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Prospects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
          children: [rows.map(function (row) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTableRow, {
              row: row,
              updateRow: updateRow
            }, row.id, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FooterRow,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "Totals"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: formatDollars(sum(rows, function (r) {
                return r.amount * r.giftCount;
              }))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount') * 5
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 155,
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
      lineNumber: 225,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTable, {
      targetAmount: targetAmount,
      setTargetAmount: handleTargetAmount
    }, "table_".concat(tableKey), false, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 223,
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
___CSS_LOADER_EXPORT___.push([module.i, ".FundraisingCalculator_FundraisingCalculator__2pKM- {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-align: center;\n       align-items: center;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TargetAmountStep__34Kmd {\n  max-width: 640px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TargetAmountStep__34Kmd h2 {\n  margin: 0;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_GiftTableStep__3WfFz {\n  max-width: 640px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_GiftTableStep__3WfFz .FundraisingCalculator_GiftTableTitle__37zu0 h2 {\n  margin: 0;\n  display: inline-block;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_GiftTableStep__3WfFz .FundraisingCalculator_GiftTableTitle__37zu0 .FundraisingCalculator_DownloadCsv__MAYdR {\n  display: inline-block;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_GiftTableStep__3WfFz h6 {\n  font-weight: 400;\n  color: #627183;\n  margin: 4px 0 16px 0;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru {\n  border-radius: 8px;\n  border: 1px solid #D3D8DE;\n  max-width: 640px;\n  overflow: hidden;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru .FundraisingCalculator_TargetAmountUpdate__3mnXI {\n  border-bottom: 1px solid #D3D8DE;\n  padding: 16px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru .FundraisingCalculator_TargetAmountUpdate__3mnXI .FundraisingCalculator_InputRow__34T_o {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n       flex-direction: row;\n  margin-top: 8px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru .FundraisingCalculator_TargetAmountUpdate__3mnXI .FundraisingCalculator_InputRow__34T_o input {\n  -moz-box-flex: 1;\n       flex-grow: 1;\n  margin-right: 8px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table {\n  table-layout: fixed;\n  width: 100%;\n  max-width: 640px;\n  border-collapse: collapse;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table th {\n  text-align: start;\n  font-size: 14px;\n  font-weight: 500;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table th, .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr:not(:last-of-type) {\n  border-bottom: 1px solid #D3D8DE;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td, .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th {\n  padding: 8px 16px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td input, .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th input {\n  max-width: 100%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:nth-of-type(1), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:nth-of-type(1) {\n  width: 30%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:nth-of-type(2), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:nth-of-type(2) {\n  width: 25%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:nth-of-type(3), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:nth-of-type(3) {\n  width: 25%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:nth-of-type(4), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:nth-of-type(4) {\n  width: 20%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:not(:last-of-type), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:not(:last-of-type) {\n  border-right: 1px solid #D3D8DE;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table .FundraisingCalculator_FooterRow___Gveg td {\n  background-color: #F2F2F2;\n}", "",{"version":3,"sources":["webpack://FundraisingCalculator.module.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,sBAAA;OAAA,mBAAA;AACF;AACE;EACE,gBAAA;AACJ;AAAI;EACE,SAAA;AAEN;AAKE;EACE,gBAAA;AAHJ;AAMM;EACE,SAAA;EACA,qBAAA;AAJR;AAOM;EACE,qBAAA;AALR;AASI;EACE,gBAAA;EACA,cAAA;EACA,oBAAA;AAPN;AAWE;EACE,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,gBAAA;AATJ;AAWI;EACE,gCAAA;EACA,aAAA;AATN;AAWM;EACE,iBAAA;EAAA,aAAA;EACA,2BAAA;EAAA,0BAAA;OAAA,mBAAA;EACA,eAAA;AATR;AAWQ;EACG,gBAAA;OAAA,YAAA;EACD,iBAAA;AATV;AAcI;EACE,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,yBAAA;AAZN;AAcM;EACE,iBAAA;EACA,eAAA;EACA,gBAAA;AAZR;AAeM;EACE,gCAAA;AAbR;AAiBQ;EACE,iBAAA;AAfV;AAgBU;EACE,eAAA;AAdZ;AAiBU;EACE,UAAA;AAfZ;AAkBU;EACE,UAAA;AAhBZ;AAmBU;EACE,UAAA;AAjBZ;AAoBU;EACE,UAAA;AAlBZ;AAqBU;EACE,+BAAA;AAnBZ;AAyBQ;EACE,yBAAA;AAvBV","sourcesContent":[".FundraisingCalculator {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  .TargetAmountStep {\r\n    max-width: 640px;\r\n    h2 {\r\n      margin: 0;\r\n    }\r\n    .TargetAmountContainer {\r\n\r\n    }\r\n  }\r\n\r\n  .GiftTableStep {\r\n    max-width: 640px;\r\n\r\n    .GiftTableTitle {\r\n      h2 {\r\n        margin: 0;\r\n        display: inline-block;\r\n      }\r\n\r\n      .DownloadCsv {\r\n        display: inline-block;\r\n      }\r\n    }\r\n\r\n    h6 {\r\n      font-weight: 400;\r\n      color: #627183;\r\n      margin: 4px 0 16px 0;\r\n    }\r\n  }\r\n\r\n  .TableContainer {\r\n    border-radius: 8px;\r\n    border: 1px solid #D3D8DE;\r\n    max-width: 640px;\r\n    overflow: hidden;\r\n\r\n    .TargetAmountUpdate {\r\n      border-bottom: 1px solid #D3D8DE;\r\n      padding: 16px;\r\n\r\n      .InputRow {\r\n        display: flex;\r\n        flex-direction: row;\r\n        margin-top: 8px;\r\n\r\n        input {\r\n           flex-grow: 1;\r\n          margin-right: 8px;\r\n        }\r\n      }\r\n    }\r\n\r\n    table {\r\n      table-layout: fixed;\r\n      width: 100%;\r\n      max-width: 640px;\r\n      border-collapse: collapse;\r\n\r\n      th {\r\n        text-align: start;\r\n        font-size: 14px;\r\n        font-weight: 500;\r\n      }\r\n\r\n      th, tr:not(:last-of-type) {\r\n        border-bottom: 1px solid #D3D8DE;\r\n      }\r\n\r\n      tr {\r\n        td, th {\r\n          padding: 8px 16px;\r\n          input {\r\n            max-width: 100%;\r\n          }\r\n\r\n          &:nth-of-type(1) {\r\n            width: 30%;\r\n          }\r\n\r\n          &:nth-of-type(2) {\r\n            width: 25%;\r\n          }\r\n\r\n          &:nth-of-type(3) {\r\n            width: 25%;\r\n          }\r\n\r\n          &:nth-of-type(4) {\r\n            width: 20%;\r\n          }\r\n\r\n          &:not(:last-of-type) {\r\n            border-right: 1px solid #D3D8DE;\r\n          }\r\n        }\r\n      }\r\n\r\n      .FooterRow {\r\n        td {\r\n          background-color: #F2F2F2;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"FundraisingCalculator": "FundraisingCalculator_FundraisingCalculator__2pKM-",
	"TargetAmountStep": "FundraisingCalculator_TargetAmountStep__34Kmd",
	"GiftTableStep": "FundraisingCalculator_GiftTableStep__3WfFz",
	"GiftTableTitle": "FundraisingCalculator_GiftTableTitle__37zu0",
	"DownloadCsv": "FundraisingCalculator_DownloadCsv__MAYdR",
	"TableContainer": "FundraisingCalculator_TableContainer__3Quru",
	"TargetAmountUpdate": "FundraisingCalculator_TargetAmountUpdate__3mnXI",
	"InputRow": "FundraisingCalculator_InputRow__34T_o",
	"FooterRow": "FundraisingCalculator_FooterRow___Gveg"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Z1bmRyYWlzaW5nQ2FsY3VsYXRvci5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZURlZmF1bHRSb3dzIiwidG90YWxBbW91bnQiLCJyb3dzIiwiaSIsInB1c2giLCJhbW91bnQiLCJNYXRoIiwicG93IiwiZ2lmdENvdW50IiwiaWQiLCJUYXJnZXRBbW91bnRTdGVwIiwic2V0VGFyZ2V0QW1vdW50IiwidXNlU3RhdGUiLCJzZXRBbW91bnQiLCJzdHlsZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdW0iLCJhcnIiLCJwcm9wZXJ0eSIsInJlZHVjZSIsImFjYyIsInZhbCIsImRvbGxhckZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0RG9sbGFycyIsImZvcm1hdCIsIkdpZnRUYWJsZVJvdyIsInJvdyIsInVwZGF0ZVJvdyIsInRvRml4ZWQiLCJsb2NhbEFtb3VudCIsInNldExvY2FsQW1vdW50IiwibG9jYWxHaWZ0Q291bnQiLCJzZXRMb2NhbEdpZnRDb3VudCIsImhhbmRsZUFtb3VudEJsdXIiLCJ1c2VDYWxsYmFjayIsIm5ld0Ftb3VudCIsInBhcnNlRmxvYXQiLCJpc05hTiIsIm9uQ2hhbmdlQW1vdW50Iiwib25DaGFuZ2VHaWZ0Q291bnQiLCJuZXdHaWZ0Q291bnQiLCJwYXJzZUludCIsImRvd25sb2FkQ3N2IiwiZGF0YSIsImhlYWRlcnMiLCJtYXAiLCJkIiwiY3N2Iiwiam9pbiIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtaW1lVHlwZSIsImZpbGVOYW1lIiwibmF2aWdhdG9yIiwibXNTYXZlQmxvYiIsIkJsb2IiLCJ0eXBlIiwiVVJMIiwiaHJlZiIsImNyZWF0ZU9iamVjdFVSTCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJsb2NhdGlvbiIsImVuY29kZVVSSUNvbXBvbmVudCIsIkdpZnRUYWJsZSIsInRhcmdldEFtb3VudCIsInNldFJvd3MiLCJsb2NhbFRhcmdldEFtb3VudCIsInNldExvY2FsVGFyZ2V0QW1vdW50IiwicHJldlJvd3MiLCJpbmRleCIsImZpbmRJbmRleCIsInIiLCJuZXdSb3dzIiwiR2lmdFRhYmxlU3RlcCIsIkdpZnRUYWJsZVRpdGxlIiwiRG93bmxvYWRDc3YiLCJUYWJsZUNvbnRhaW5lciIsIlRhcmdldEFtb3VudFVwZGF0ZSIsIklucHV0Um93IiwiRm9vdGVyUm93IiwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yIiwidGFibGVLZXkiLCJzZXRUYWJsZUtleSIsImhhbmRsZVRhcmdldEFtb3VudCIsInJhd0Ftb3VudCIsImsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsV0FBRCxFQUFpQjtBQUMzQyxNQUFNQyxJQUFJLEdBQUcsRUFBYjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJELFFBQUksQ0FBQ0UsSUFBTCxDQUFVO0FBQ1JDLFlBQU0sRUFBR0osV0FBVyxHQUFHLENBQWYsR0FBcUJLLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWUosQ0FBWixDQURyQjtBQUVSSyxlQUFTLEVBQUVGLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWUosQ0FBWixDQUZIO0FBR1JNLFFBQUUsZ0JBQVNOLENBQVQ7QUFITSxLQUFWO0FBS0Q7O0FBRUQsU0FBT0QsSUFBUDtBQUNELENBWkQ7O0FBY0EsSUFBTVEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUF5QjtB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ZC4xYjI5MzQ0N2Q2Yjg0ZjBlNGJjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Z1bmRyYWlzaW5nQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnY29tcG9uZW50cy9JbnB1dCc7XHJcblxyXG5jb25zdCBnZW5lcmF0ZURlZmF1bHRSb3dzID0gKHRvdGFsQW1vdW50KSA9PiB7XHJcbiAgY29uc3Qgcm93cyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgcm93cy5wdXNoKHtcclxuICAgICAgYW1vdW50OiAodG90YWxBbW91bnQgLyA1KSAvIChNYXRoLnBvdygyLCBpKSksXHJcbiAgICAgIGdpZnRDb3VudDogTWF0aC5wb3coMiwgaSksXHJcbiAgICAgIGlkOiBgcm93XyR7aX1gLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm93cztcclxufTtcclxuXHJcbmNvbnN0IFRhcmdldEFtb3VudFN0ZXAgPSAoeyBzZXRUYXJnZXRBbW91bnQgfSkgPT4ge1xyXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhcmdldEFtb3VudFN0ZXB9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5FbnRlciB5b3VyIGZ1bmRyYWlzaW5nIGdvYWw8L2gyPlxyXG4gICAgICAgIEhvdyBtdWNoIGRvIHlvdSB3YW50IHRvIGZ1bmRyYWlzZT9cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXthbW91bnR9XHJcbiAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgaW5wdXRNb2RlPVwiZGVjaW1hbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHN0ZXA9ezAuMDF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXRBbW91bnQoYW1vdW50KX0+TmV4dCBTdGVwPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuY29uc3Qgc3VtID0gKGFyciwgcHJvcGVydHkpID0+IGFyci5yZWR1Y2UoXHJcbiAgKGFjYywgdmFsKSA9PiBhY2MgKyAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nID8gcHJvcGVydHkodmFsKSA6IHZhbFtwcm9wZXJ0eV0pLFxyXG4gIDAsXHJcbik7XHJcblxyXG5jb25zdCBkb2xsYXJGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xyXG4gIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gIGN1cnJlbmN5OiAnVVNEJyxcclxufSk7XHJcblxyXG5jb25zdCBmb3JtYXREb2xsYXJzID0gdmFsID0+IGRvbGxhckZvcm1hdHRlci5mb3JtYXQodmFsKTtcclxuXHJcbmNvbnN0IEdpZnRUYWJsZVJvdyA9ICh7IHJvdywgdXBkYXRlUm93IH0pID0+IHtcclxuICBjb25zdCBbbG9jYWxBbW91bnQsIHNldExvY2FsQW1vdW50XSA9IHVzZVN0YXRlKHJvdy5hbW91bnQgJSAxID09PSAwID8gcm93LmFtb3VudCA6IHJvdy5hbW91bnQudG9GaXhlZCgyKSk7XHJcbiAgY29uc3QgW2xvY2FsR2lmdENvdW50LCBzZXRMb2NhbEdpZnRDb3VudF0gPSB1c2VTdGF0ZShyb3cuZ2lmdENvdW50ICUgMSA9PT0gMCA/IHJvdy5naWZ0Q291bnQgOiByb3cuZ2lmdENvdW50LnRvRml4ZWQoMikpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBbW91bnRCbHVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3QW1vdW50ID0gcGFyc2VGbG9hdChsb2NhbEFtb3VudCk7XHJcbiAgICBpZiAoaXNOYU4obmV3QW1vdW50KSB8fCBuZXdBbW91bnQgPD0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChuZXdBbW91bnQgJSAxICE9PSAwKSBzZXRMb2NhbEFtb3VudChuZXdBbW91bnQudG9GaXhlZCgyKSk7XHJcbiAgfSwgW2xvY2FsQW1vdW50XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQW1vdW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldExvY2FsQW1vdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0Ftb3VudCA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0Ftb3VudCkgfHwgbmV3QW1vdW50IDw9IDApIHJldHVybjtcclxuICAgIHVwZGF0ZVJvdyh7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgYW1vdW50OiBuZXdBbW91bnQsXHJcbiAgICB9KTtcclxuICB9LCBbcm93XSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VHaWZ0Q291bnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0TG9jYWxHaWZ0Q291bnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgbmV3R2lmdENvdW50ID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0dpZnRDb3VudCkgfHwgbmV3R2lmdENvdW50IDw9IDApIHJldHVybjtcclxuICAgIHVwZGF0ZVJvdyh7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgZ2lmdENvdW50OiBuZXdHaWZ0Q291bnQsXHJcbiAgICB9KTtcclxuICB9LCBbcm93XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0cj5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2xvY2FsQW1vdW50fVxyXG4gICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQW1vdW50fVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVBbW91bnRCbHVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtsb2NhbEdpZnRDb3VudH1cclxuICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJudW1lcmljXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlR2lmdENvdW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD57Zm9ybWF0RG9sbGFycyhyb3cuYW1vdW50ICogcm93LmdpZnRDb3VudCl9PC90ZD5cclxuICAgICAgPHRkPntyb3cuZ2lmdENvdW50ICogNX08L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZG93bmxvYWRDc3YgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlcnMgPSBbJ0dpZnQgQW1vdW50JywgJ051bWJlciBvZiBHaWZ0cycsICdSb3cgVG90YWwnLCAnUHJvc3BlY3RzJ107XHJcbiAgY29uc3Qgcm93cyA9IGRhdGEubWFwKGQgPT4gW2QuYW1vdW50LCBkLmdpZnRDb3VudCwgZC5hbW91bnQgKiBkLmdpZnRDb3VudCwgZC5naWZ0Q291bnQgKiA1XSk7XHJcblxyXG4gIGNvbnN0IGNzdiA9IFtoZWFkZXJzLmpvaW4oJywnKSwgLi4ucm93cy5tYXAocm93ID0+IHJvdy5qb2luKCcsJykpXS5qb2luKCdcXG4nKTtcclxuXHJcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjb25zdCBtaW1lVHlwZSA9ICd0ZXh0L2NzdjtlbmNvZGluZzp1dGYtOCc7XHJcbiAgY29uc3QgZmlsZU5hbWUgPSAnZ2lmdF90YWJsZS5jc3YnO1xyXG5cclxuICBpZiAobmF2aWdhdG9yLm1zU2F2ZUJsb2IpIHsgLy8gSUUxMFxyXG4gICAgbmF2aWdhdG9yLm1zU2F2ZUJsb2IobmV3IEJsb2IoW2Nzdl0sIHtcclxuICAgICAgdHlwZTogbWltZVR5cGVcclxuICAgIH0pLCBmaWxlTmFtZSk7XHJcbiAgfSBlbHNlIGlmIChVUkwgJiYgJ2Rvd25sb2FkJyBpbiBhKSB7IC8vaHRtbDUgQVtkb3dubG9hZF1cclxuICAgIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2Nzdl0sIHtcclxuICAgICAgdHlwZTogbWltZVR5cGVcclxuICAgIH0pKTtcclxuICAgIGEuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGZpbGVOYW1lKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2NhdGlvbi5ocmVmID0gJ2RhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLCcgKyBlbmNvZGVVUklDb21wb25lbnQoY3N2KTsgLy8gb25seSB0aGlzIG1pbWUgdHlwZSBpcyBzdXBwb3J0ZWRcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEdpZnRUYWJsZSA9ICh7IHRhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZURlZmF1bHRSb3dzKHRhcmdldEFtb3VudCkpO1xyXG4gIGNvbnN0IFtsb2NhbFRhcmdldEFtb3VudCwgc2V0TG9jYWxUYXJnZXRBbW91bnRdID0gdXNlU3RhdGUodGFyZ2V0QW1vdW50KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUm93ID0gdXNlQ2FsbGJhY2soKHJvdykgPT4ge1xyXG4gICAgc2V0Um93cygocHJldlJvd3MpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBwcmV2Um93cy5maW5kSW5kZXgociA9PiByLmlkID09PSByb3cuaWQpO1xyXG4gICAgICBjb25zdCBuZXdSb3dzID0gWy4uLnByZXZSb3dzXTtcclxuICAgICAgbmV3Um93c1tpbmRleF0gPSByb3c7XHJcbiAgICAgIHJldHVybiBuZXdSb3dzO1xyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdpZnRUYWJsZVN0ZXB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdpZnRUYWJsZVRpdGxlfT5cclxuICAgICAgICA8aDI+WW91ciBnaWZ0IHRhYmxlPC9oMj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5Eb3dubG9hZENzdn0gb25DbGljaz17KCkgPT4gZG93bmxvYWRDc3Yocm93cyl9PkRvd25sb2FkIFJlc3VsdHM8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aDY+XHJcbiAgICAgICAgQmFzZWQgb24geW91ciBmdW5kcmFpc2luZyBnb2Fscywgd2UndmUgY2FsY3VsYXRlZCB0aGlzIG9wdGltYWwgYnJlYWtkb3duIGZvciB5b3VyXHJcbiAgICAgICAgb3JnYW5pemF0aW9uJ3MgZnVuZHJhaXNpbmcgaW5pdGlhdGl2ZXMuIFlvdSBjYW4gZWRpdCB0aGlzIHRvIGZpdCB5b3VyIHJlcXVpcmVtZW50cy5cclxuICAgICAgPC9oNj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFibGVDb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFyZ2V0QW1vdW50VXBkYXRlfT5cclxuICAgICAgICAgIEhvdyBtdWNoIGRvIHlvdSB3YW50IHRvIGZ1bmRyYWlzZT9cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRSb3d9PlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17bG9jYWxUYXJnZXRBbW91bnR9XHJcbiAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgaW5wdXRNb2RlPVwiZGVjaW1hbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgc3RlcD17MC4wMX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRMb2NhbFRhcmdldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFyZ2V0QW1vdW50KGxvY2FsVGFyZ2V0QW1vdW50KX0gaW50ZW50PVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIFVwZGF0ZSBUYWJsZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5HaWZ0IEFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk51bWJlciBvZiBHaWZ0czwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJvdyBUb3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlByb3NwZWN0czwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7IHJvd3MubWFwKHJvdyA9PiAoXHJcbiAgICAgICAgICAgICAgPEdpZnRUYWJsZVJvdyByb3c9e3Jvd30gdXBkYXRlUm93PXt1cGRhdGVSb3d9IGtleT17cm93LmlkfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLkZvb3RlclJvd30+XHJcbiAgICAgICAgICAgICAgPHRkPlRvdGFsczwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntzdW0ocm93cywgJ2dpZnRDb3VudCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntmb3JtYXREb2xsYXJzKHN1bShyb3dzLCByID0+IHIuYW1vdW50ICogci5naWZ0Q291bnQpKX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57c3VtKHJvd3MsICdnaWZ0Q291bnQnKSAqIDV9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5jb25zdCBGdW5kcmFpc2luZ0NhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50XSA9IHVzZVN0YXRlKDEwMDApO1xyXG4gIC8vIENyZWF0ZSBhIG5ldyB0YWJsZSB3aGVuZXZlciB0aGUgdGFyZ2V0IGFtb3VudCBjaGFuZ2VzXHJcbiAgY29uc3QgW3RhYmxlS2V5LCBzZXRUYWJsZUtleV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBoYW5kbGVUYXJnZXRBbW91bnQgPSB1c2VDYWxsYmFjaygocmF3QW1vdW50KSA9PiB7XHJcbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KHJhd0Ftb3VudCk7XHJcbiAgICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIHRhcmdldEFtb3VudDtcclxuICAgIGlmIChhbW91bnQgPD0gMCkgcmV0dXJuIHRhcmdldEFtb3VudDtcclxuICAgIHNldFRhcmdldEFtb3VudChhbW91bnQpO1xyXG4gICAgc2V0VGFibGVLZXkoayA9PiBrICsgMSk7XHJcbiAgICByZXR1cm4gYW1vdW50O1xyXG4gIH0sIFt0YXJnZXRBbW91bnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRnVuZHJhaXNpbmdDYWxjdWxhdG9yfT5cclxuICAgICAgeyAhdGFyZ2V0QW1vdW50ID8gKFxyXG4gICAgICAgIDxUYXJnZXRBbW91bnRTdGVwIHNldFRhcmdldEFtb3VudD17aGFuZGxlVGFyZ2V0QW1vdW50fSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxHaWZ0VGFibGVcclxuICAgICAgICAgIHRhcmdldEFtb3VudD17dGFyZ2V0QW1vdW50fVxyXG4gICAgICAgICAgc2V0VGFyZ2V0QW1vdW50PXtoYW5kbGVUYXJnZXRBbW91bnR9XHJcbiAgICAgICAgICBrZXk9e2B0YWJsZV8ke3RhYmxlS2V5fWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5kcmFpc2luZ0NhbGN1bGF0b3I7XHJcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYXJnZXRBbW91bnRTdGVwX18zNEttZCB7XFxuICBtYXgtd2lkdGg6IDY0MHB4O1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYXJnZXRBbW91bnRTdGVwX18zNEttZCBoMiB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0dpZnRUYWJsZVN0ZXBfXzNXZkZ6IHtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0dpZnRUYWJsZVN0ZXBfXzNXZkZ6IC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfR2lmdFRhYmxlVGl0bGVfXzM3enUwIGgyIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfR2lmdFRhYmxlU3RlcF9fM1dmRnogLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9HaWZ0VGFibGVUaXRsZV9fMzd6dTAgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9Eb3dubG9hZENzdl9fTUFZZFIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9HaWZ0VGFibGVTdGVwX18zV2ZGeiBoNiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICM2MjcxODM7XFxuICBtYXJnaW46IDRweCAwIDE2cHggMDtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEM0Q4REU7XFxuICBtYXgtd2lkdGg6IDY0MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFyZ2V0QW1vdW50VXBkYXRlX18zbW5YSSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0QzRDhERTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhcmdldEFtb3VudFVwZGF0ZV9fM21uWEkgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9JbnB1dFJvd19fMzRUX28ge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhcmdldEFtb3VudFVwZGF0ZV9fM21uWEkgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9JbnB1dFJvd19fMzRUX28gaW5wdXQge1xcbiAgLW1vei1ib3gtZmxleDogMTtcXG4gICAgICAgZmxleC1ncm93OiAxO1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB7XFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDY0MHB4O1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRoIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRoLCAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHI6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDNEOERFO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGQsIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0aCB7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRkIGlucHV0LCAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGggaW5wdXQge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGQ6bnRoLW9mLXR5cGUoMSksIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0aDpudGgtb2YtdHlwZSgxKSB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGQ6bnRoLW9mLXR5cGUoMiksIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0aDpudGgtb2YtdHlwZSgyKSB7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGQ6bnRoLW9mLXR5cGUoMyksIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0aDpudGgtb2YtdHlwZSgzKSB7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGQ6bnRoLW9mLXR5cGUoNCksIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0aDpudGgtb2YtdHlwZSg0KSB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGQ6bm90KDpsYXN0LW9mLXR5cGUpLCAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGg6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNEM0Q4REU7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Zvb3RlclJvd19fX0d2ZWcgdGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0Z1bmRyYWlzaW5nQ2FsY3VsYXRvci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO0VBQUEsMEJBQUE7T0FBQSxzQkFBQTtFQUNBLHNCQUFBO09BQUEsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUFJO0VBQ0UsU0FBQTtBQUVOO0FBS0U7RUFDRSxnQkFBQTtBQUhKO0FBTU07RUFDRSxTQUFBO0VBQ0EscUJBQUE7QUFKUjtBQU9NO0VBQ0UscUJBQUE7QUFMUjtBQVNJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFQTjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFUSjtBQVdJO0VBQ0UsZ0NBQUE7RUFDQSxhQUFBO0FBVE47QUFXTTtFQUNFLGlCQUFBO0VBQUEsYUFBQTtFQUNBLDJCQUFBO0VBQUEsMEJBQUE7T0FBQSxtQkFBQTtFQUNBLGVBQUE7QUFUUjtBQVdRO0VBQ0csZ0JBQUE7T0FBQSxZQUFBO0VBQ0QsaUJBQUE7QUFUVjtBQWNJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVpOO0FBY007RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVpSO0FBZU07RUFDRSxnQ0FBQTtBQWJSO0FBaUJRO0VBQ0UsaUJBQUE7QUFmVjtBQWdCVTtFQUNFLGVBQUE7QUFkWjtBQWlCVTtFQUNFLFVBQUE7QUFmWjtBQWtCVTtFQUNFLFVBQUE7QUFoQlo7QUFtQlU7RUFDRSxVQUFBO0FBakJaO0FBb0JVO0VBQ0UsVUFBQTtBQWxCWjtBQXFCVTtFQUNFLCtCQUFBO0FBbkJaO0FBeUJRO0VBQ0UseUJBQUE7QUF2QlZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAuVGFyZ2V0QW1vdW50U3RlcCB7XFxyXFxuICAgIG1heC13aWR0aDogNjQwcHg7XFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLlRhcmdldEFtb3VudENvbnRhaW5lciB7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5HaWZ0VGFibGVTdGVwIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcXHJcXG5cXHJcXG4gICAgLkdpZnRUYWJsZVRpdGxlIHtcXHJcXG4gICAgICBoMiB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5Eb3dubG9hZENzdiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGg2IHtcXHJcXG4gICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgIGNvbG9yOiAjNjI3MTgzO1xcclxcbiAgICAgIG1hcmdpbjogNHB4IDAgMTZweCAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuVGFibGVDb250YWluZXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEM0Q4REU7XFxyXFxuICAgIG1heC13aWR0aDogNjQwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgIC5UYXJnZXRBbW91bnRVcGRhdGUge1xcclxcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDNEOERFO1xcclxcbiAgICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuXFxyXFxuICAgICAgLklucHV0Um93IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xcclxcblxcclxcbiAgICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdGFibGUge1xcclxcbiAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgbWF4LXdpZHRoOiA2NDBweDtcXHJcXG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcclxcbiAgICAgIHRoIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgdGgsIHRyOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0QzRDhERTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgdHIge1xcclxcbiAgICAgICAgdGQsIHRoIHtcXHJcXG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICAgICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoMykge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSg0KSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAmOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0QzRDhERTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuRm9vdGVyUm93IHtcXHJcXG4gICAgICAgIHRkIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yXCI6IFwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS1cIixcblx0XCJUYXJnZXRBbW91bnRTdGVwXCI6IFwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhcmdldEFtb3VudFN0ZXBfXzM0S21kXCIsXG5cdFwiR2lmdFRhYmxlU3RlcFwiOiBcIkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9HaWZ0VGFibGVTdGVwX18zV2ZGelwiLFxuXHRcIkdpZnRUYWJsZVRpdGxlXCI6IFwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0dpZnRUYWJsZVRpdGxlX18zN3p1MFwiLFxuXHRcIkRvd25sb2FkQ3N2XCI6IFwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Rvd25sb2FkQ3N2X19NQVlkUlwiLFxuXHRcIlRhYmxlQ29udGFpbmVyXCI6IFwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydVwiLFxuXHRcIlRhcmdldEFtb3VudFVwZGF0ZVwiOiBcIkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYXJnZXRBbW91bnRVcGRhdGVfXzNtblhJXCIsXG5cdFwiSW5wdXRSb3dcIjogXCJGdW5kcmFpc2luZ0NhbGN1bGF0b3JfSW5wdXRSb3dfXzM0VF9vXCIsXG5cdFwiRm9vdGVyUm93XCI6IFwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Zvb3RlclJvd19fX0d2ZWdcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9