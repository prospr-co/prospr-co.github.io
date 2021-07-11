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
      className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TargetAmountContainer,
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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
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

_s4(FundraisingCalculator, "BLQO/8xum3aPGFH0jVGa5jhoYdw=");

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
___CSS_LOADER_EXPORT___.push([module.i, ".FundraisingCalculator_FundraisingCalculator__2pKM- {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-align: center;\n       align-items: center;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TargetAmountStep__34Kmd {\n  max-width: 640px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TargetAmountStep__34Kmd h2 {\n  margin: 0;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TargetAmountStep__34Kmd .FundraisingCalculator_TargetAmountContainer__2rpz6 {\n  border-radius: 8px;\n  border: 1px solid #D3D8DE;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_GiftTableStep__3WfFz {\n  max-width: 640px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_GiftTableStep__3WfFz .FundraisingCalculator_GiftTableTitle__37zu0 h2 {\n  margin: 0;\n  display: inline-block;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_GiftTableStep__3WfFz .FundraisingCalculator_GiftTableTitle__37zu0 .FundraisingCalculator_DownloadCsv__MAYdR {\n  display: inline-block;\n  color: #0070f0;\n  margin-left: 14px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_GiftTableStep__3WfFz h6 {\n  font-weight: 400;\n  color: #627183;\n  margin: 4px 0 16px 0;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru {\n  border-radius: 8px;\n  border: 1px solid #D3D8DE;\n  max-width: 640px;\n  overflow: hidden;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru .FundraisingCalculator_TargetAmountUpdate__3mnXI {\n  border-bottom: 1px solid #D3D8DE;\n  padding: 16px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru .FundraisingCalculator_TargetAmountUpdate__3mnXI .FundraisingCalculator_InputRow__34T_o {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n       flex-direction: row;\n  margin-top: 8px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru .FundraisingCalculator_TargetAmountUpdate__3mnXI .FundraisingCalculator_InputRow__34T_o input {\n  -moz-box-flex: 1;\n       flex-grow: 1;\n  margin-right: 8px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table {\n  table-layout: fixed;\n  width: 100%;\n  max-width: 640px;\n  border-collapse: collapse;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table th {\n  text-align: start;\n  font-size: 14px;\n  font-weight: 500;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table th, .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr:not(:last-of-type) {\n  border-bottom: 1px solid #D3D8DE;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td, .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th {\n  padding: 8px 16px;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td input, .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th input {\n  max-width: 100%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:nth-of-type(1), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:nth-of-type(1) {\n  width: 30%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:nth-of-type(2), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:nth-of-type(2) {\n  width: 25%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:nth-of-type(3), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:nth-of-type(3) {\n  width: 25%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:nth-of-type(4), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:nth-of-type(4) {\n  width: 20%;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr td:not(:last-of-type), .FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table tr th:not(:last-of-type) {\n  border-right: 1px solid #D3D8DE;\n}\n.FundraisingCalculator_FundraisingCalculator__2pKM- .FundraisingCalculator_TableContainer__3Quru table .FundraisingCalculator_FooterRow___Gveg td {\n  background-color: #F2F2F2;\n}", "",{"version":3,"sources":["webpack://FundraisingCalculator.module.scss","webpack://../styles/variables.scss"],"names":[],"mappings":"AAEA;EACE,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,sBAAA;OAAA,mBAAA;AADF;AAGE;EACE,gBAAA;AADJ;AAEI;EACE,SAAA;AAAN;AAGI;EACE,kBAAA;EACA,yBAAA;AADN;AAKE;EACE,gBAAA;AAHJ;AAMM;EACE,SAAA;EACA,qBAAA;AAJR;AAOM;EACE,qBAAA;EACA,cC5BO;ED6BP,iBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,eAAA;AALR;AASI;EACE,gBAAA;EACA,cAAA;EACA,oBAAA;AAPN;AAWE;EACE,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,gBAAA;AATJ;AAWI;EACE,gCAAA;EACA,aAAA;AATN;AAWM;EACE,iBAAA;EAAA,aAAA;EACA,2BAAA;EAAA,0BAAA;OAAA,mBAAA;EACA,eAAA;AATR;AAWQ;EACG,gBAAA;OAAA,YAAA;EACD,iBAAA;AATV;AAcI;EACE,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,yBAAA;AAZN;AAcM;EACE,iBAAA;EACA,eAAA;EACA,gBAAA;AAZR;AAeM;EACE,gCAAA;AAbR;AAiBQ;EACE,iBAAA;AAfV;AAgBU;EACE,eAAA;AAdZ;AAiBU;EACE,UAAA;AAfZ;AAkBU;EACE,UAAA;AAhBZ;AAmBU;EACE,UAAA;AAjBZ;AAoBU;EACE,UAAA;AAlBZ;AAqBU;EACE,+BAAA;AAnBZ;AAyBQ;EACE,yBAAA;AAvBV","sourcesContent":["@import 'index';\r\n\r\n.FundraisingCalculator {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  .TargetAmountStep {\r\n    max-width: 640px;\r\n    h2 {\r\n      margin: 0;\r\n    }\r\n\r\n    .TargetAmountContainer {\r\n      border-radius: 8px;\r\n      border: 1px solid #D3D8DE;\r\n    }\r\n  }\r\n\r\n  .GiftTableStep {\r\n    max-width: 640px;\r\n\r\n    .GiftTableTitle {\r\n      h2 {\r\n        margin: 0;\r\n        display: inline-block;\r\n      }\r\n\r\n      .DownloadCsv {\r\n        display: inline-block;\r\n        color: $primary-blue;\r\n        margin-left: 14px;\r\n        user-select: none;\r\n        cursor: pointer;\r\n      }\r\n    }\r\n\r\n    h6 {\r\n      font-weight: 400;\r\n      color: #627183;\r\n      margin: 4px 0 16px 0;\r\n    }\r\n  }\r\n\r\n  .TableContainer {\r\n    border-radius: 8px;\r\n    border: 1px solid #D3D8DE;\r\n    max-width: 640px;\r\n    overflow: hidden;\r\n\r\n    .TargetAmountUpdate {\r\n      border-bottom: 1px solid #D3D8DE;\r\n      padding: 16px;\r\n\r\n      .InputRow {\r\n        display: flex;\r\n        flex-direction: row;\r\n        margin-top: 8px;\r\n\r\n        input {\r\n           flex-grow: 1;\r\n          margin-right: 8px;\r\n        }\r\n      }\r\n    }\r\n\r\n    table {\r\n      table-layout: fixed;\r\n      width: 100%;\r\n      max-width: 640px;\r\n      border-collapse: collapse;\r\n\r\n      th {\r\n        text-align: start;\r\n        font-size: 14px;\r\n        font-weight: 500;\r\n      }\r\n\r\n      th, tr:not(:last-of-type) {\r\n        border-bottom: 1px solid #D3D8DE;\r\n      }\r\n\r\n      tr {\r\n        td, th {\r\n          padding: 8px 16px;\r\n          input {\r\n            max-width: 100%;\r\n          }\r\n\r\n          &:nth-of-type(1) {\r\n            width: 30%;\r\n          }\r\n\r\n          &:nth-of-type(2) {\r\n            width: 25%;\r\n          }\r\n\r\n          &:nth-of-type(3) {\r\n            width: 25%;\r\n          }\r\n\r\n          &:nth-of-type(4) {\r\n            width: 20%;\r\n          }\r\n\r\n          &:not(:last-of-type) {\r\n            border-right: 1px solid #D3D8DE;\r\n          }\r\n        }\r\n      }\r\n\r\n      .FooterRow {\r\n        td {\r\n          background-color: #F2F2F2;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n","$pt-divider-black: rgba(206, 212, 224, 0.8);\n\n$primary-blue: #0070f0;\n$dark-blue: #005dd6;\n$black: #0d0d0d;\n$grey: #666;\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"FundraisingCalculator": "FundraisingCalculator_FundraisingCalculator__2pKM-",
	"TargetAmountStep": "FundraisingCalculator_TargetAmountStep__34Kmd",
	"TargetAmountContainer": "FundraisingCalculator_TargetAmountContainer__2rpz6",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Z1bmRyYWlzaW5nQ2FsY3VsYXRvci5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZURlZmF1bHRSb3dzIiwidG90YWxBbW91bnQiLCJyb3dzIiwiaSIsInB1c2giLCJhbW91bnQiLCJNYXRoIiwicG93IiwiZ2lmdENvdW50IiwiaWQiLCJUYXJnZXRBbW91bnRTdGVwIiwic2V0VGFyZ2V0QW1vdW50IiwidXNlU3RhdGUiLCJzZXRBbW91bnQiLCJzdHlsZXMiLCJUYXJnZXRBbW91bnRDb250YWluZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdW0iLCJhcnIiLCJwcm9wZXJ0eSIsInJlZHVjZSIsImFjYyIsInZhbCIsImRvbGxhckZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0RG9sbGFycyIsImZvcm1hdCIsIkdpZnRUYWJsZVJvdyIsInJvdyIsInVwZGF0ZVJvdyIsInRvRml4ZWQiLCJsb2NhbEFtb3VudCIsInNldExvY2FsQW1vdW50IiwibG9jYWxHaWZ0Q291bnQiLCJzZXRMb2NhbEdpZnRDb3VudCIsImhhbmRsZUFtb3VudEJsdXIiLCJ1c2VDYWxsYmFjayIsIm5ld0Ftb3VudCIsInBhcnNlRmxvYXQiLCJpc05hTiIsIm9uQ2hhbmdlQW1vdW50Iiwib25DaGFuZ2VHaWZ0Q291bnQiLCJuZXdHaWZ0Q291bnQiLCJwYXJzZUludCIsImRvd25sb2FkQ3N2IiwiZGF0YSIsImhlYWRlcnMiLCJtYXAiLCJkIiwiY3N2Iiwiam9pbiIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtaW1lVHlwZSIsImZpbGVOYW1lIiwibmF2aWdhdG9yIiwibXNTYXZlQmxvYiIsIkJsb2IiLCJ0eXBlIiwiVVJMIiwiaHJlZiIsImNyZWF0ZU9iamVjdFVSTCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJsb2NhdGlvbiIsImVuY29kZVVSSUNvbXBvbmVudCIsIkdpZnRUYWJsZSIsInRhcmdldEFtb3VudCIsInNldFJvd3MiLCJsb2NhbFRhcmdldEFtb3VudCIsInNldExvY2FsVGFyZ2V0QW1vdW50IiwicHJldlJvd3MiLCJpbmRleCIsImZpbmRJbmRleCIsInIiLCJuZXdSb3dzIiwiR2lmdFRhYmxlU3RlcCIsIkdpZnRUYWJsZVRpdGxlIiwiRG93bmxvYWRDc3YiLCJUYWJsZUNvbnRhaW5lciIsIlRhcmdldEFtb3VudFVwZGF0ZSIsIklucHV0Um93IiwiRm9vdGVyUm93IiwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yIiwidGFibGVLZXkiLCJzZXRUYWJsZUtleSIsImhhbmRsZVRhcmdldEFtb3VudCIsInJhd0Ftb3VudCIsImsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsV0FBRCxFQUFpQjtBQUMzQyxNQUFNQyxJQUFJLEdBQUcsRUFBYjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJELFFBQUksQ0FBQ0UsSUFBTCxDQUFVO0FBQ1JDLFlBQU0sRUFBR0osV0FBVyxHQUFHLENBQWYsR0FBcUJLLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWUosQ0FBWixDQURyQjtBQUVSSyxlQUFTLEVBQUVGLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWUosQ0FBWixDQUZIO0FBR1JNLFFBQUUsZ0JBQVNOLENBQVQ7QUFITSxLQUFWO0FBS0Q7O0FBRUQsU0FBT0QsSUFBUDtBQUNELENBWkQ7O0FBY0EsSUFBTVEsZ0JBQWdCLEdB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LGVBQWUsb0NBQW9DLDJCQUEyQixlQUFlLG9DQUFvQywyQkFBMkIsZUFBZSx3Q0FBd0MsZ0RBQWdELGVBQWUsYUFBYSxXQUFXLDBCQUEwQixnQkFBZ0Isd0NBQXdDLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyxtREFBbUQsMkJBQTJCLHNCQUFzQixrQkFBa0IsY0FBYyxxQkFBcUI7QUFDam9SO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FsY3VsYXRvci1lbWJlZC40ZDVmZjk0NDc4MTk4MDRjMjdhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Z1bmRyYWlzaW5nQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnY29tcG9uZW50cy9JbnB1dCc7XHJcblxyXG5jb25zdCBnZW5lcmF0ZURlZmF1bHRSb3dzID0gKHRvdGFsQW1vdW50KSA9PiB7XHJcbiAgY29uc3Qgcm93cyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgcm93cy5wdXNoKHtcclxuICAgICAgYW1vdW50OiAodG90YWxBbW91bnQgLyA1KSAvIChNYXRoLnBvdygyLCBpKSksXHJcbiAgICAgIGdpZnRDb3VudDogTWF0aC5wb3coMiwgaSksXHJcbiAgICAgIGlkOiBgcm93XyR7aX1gLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm93cztcclxufTtcclxuXHJcbmNvbnN0IFRhcmdldEFtb3VudFN0ZXAgPSAoeyBzZXRUYXJnZXRBbW91bnQgfSkgPT4ge1xyXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhcmdldEFtb3VudFN0ZXB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhcmdldEFtb3VudENvbnRhaW5lcn0+XHJcbiAgICAgICAgPGgyPkVudGVyIHlvdXIgZnVuZHJhaXNpbmcgZ29hbDwvaDI+XHJcbiAgICAgICAgSG93IG11Y2ggZG8geW91IHdhbnQgdG8gZnVuZHJhaXNlP1xyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2Ftb3VudH1cclxuICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJkZWNpbWFsXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgc3RlcD17MC4wMX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRhcmdldEFtb3VudChhbW91bnQpfT5OZXh0IFN0ZXA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5jb25zdCBzdW0gPSAoYXJyLCBwcm9wZXJ0eSkgPT4gYXJyLnJlZHVjZShcclxuICAoYWNjLCB2YWwpID0+IGFjYyArICh0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbicgPyBwcm9wZXJ0eSh2YWwpIDogdmFsW3Byb3BlcnR5XSksXHJcbiAgMCxcclxuKTtcclxuXHJcbmNvbnN0IGRvbGxhckZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XHJcbiAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgY3VycmVuY3k6ICdVU0QnLFxyXG59KTtcclxuXHJcbmNvbnN0IGZvcm1hdERvbGxhcnMgPSB2YWwgPT4gZG9sbGFyRm9ybWF0dGVyLmZvcm1hdCh2YWwpO1xyXG5cclxuY29uc3QgR2lmdFRhYmxlUm93ID0gKHsgcm93LCB1cGRhdGVSb3cgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbEFtb3VudCwgc2V0TG9jYWxBbW91bnRdID0gdXNlU3RhdGUocm93LmFtb3VudCAlIDEgPT09IDAgPyByb3cuYW1vdW50IDogcm93LmFtb3VudC50b0ZpeGVkKDIpKTtcclxuICBjb25zdCBbbG9jYWxHaWZ0Q291bnQsIHNldExvY2FsR2lmdENvdW50XSA9IHVzZVN0YXRlKHJvdy5naWZ0Q291bnQgJSAxID09PSAwID8gcm93LmdpZnRDb3VudCA6IHJvdy5naWZ0Q291bnQudG9GaXhlZCgyKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFtb3VudEJsdXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdBbW91bnQgPSBwYXJzZUZsb2F0KGxvY2FsQW1vdW50KTtcclxuICAgIGlmIChpc05hTihuZXdBbW91bnQpIHx8IG5ld0Ftb3VudCA8PSAwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKG5ld0Ftb3VudCAlIDEgIT09IDApIHNldExvY2FsQW1vdW50KG5ld0Ftb3VudC50b0ZpeGVkKDIpKTtcclxuICB9LCBbbG9jYWxBbW91bnRdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VBbW91bnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0TG9jYWxBbW91bnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgbmV3QW1vdW50ID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoaXNOYU4obmV3QW1vdW50KSB8fCBuZXdBbW91bnQgPD0gMCkgcmV0dXJuO1xyXG4gICAgdXBkYXRlUm93KHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBhbW91bnQ6IG5ld0Ftb3VudCxcclxuICAgIH0pO1xyXG4gIH0sIFtyb3ddKTtcclxuICBjb25zdCBvbkNoYW5nZUdpZnRDb3VudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRMb2NhbEdpZnRDb3VudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zdCBuZXdHaWZ0Q291bnQgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoaXNOYU4obmV3R2lmdENvdW50KSB8fCBuZXdHaWZ0Q291bnQgPD0gMCkgcmV0dXJuO1xyXG4gICAgdXBkYXRlUm93KHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBnaWZ0Q291bnQ6IG5ld0dpZnRDb3VudCxcclxuICAgIH0pO1xyXG4gIH0sIFtyb3ddKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHRyPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB2YWx1ZT17bG9jYWxBbW91bnR9XHJcbiAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgaW5wdXRNb2RlPVwiZGVjaW1hbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHN0ZXA9ezAuMDF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VBbW91bnR9XHJcbiAgICAgICAgICBvbkJsdXI9e2hhbmRsZUFtb3VudEJsdXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2xvY2FsR2lmdENvdW50fVxyXG4gICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cIm51bWVyaWNcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VHaWZ0Q291bnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPntmb3JtYXREb2xsYXJzKHJvdy5hbW91bnQgKiByb3cuZ2lmdENvdW50KX08L3RkPlxyXG4gICAgICA8dGQ+e3Jvdy5naWZ0Q291bnQgKiA1fTwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBkb3dubG9hZENzdiA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVycyA9IFsnR2lmdCBBbW91bnQnLCAnTnVtYmVyIG9mIEdpZnRzJywgJ1JvdyBUb3RhbCcsICdQcm9zcGVjdHMnXTtcclxuICBjb25zdCByb3dzID0gZGF0YS5tYXAoZCA9PiBbZC5hbW91bnQsIGQuZ2lmdENvdW50LCBkLmFtb3VudCAqIGQuZ2lmdENvdW50LCBkLmdpZnRDb3VudCAqIDVdKTtcclxuXHJcbiAgY29uc3QgY3N2ID0gW2hlYWRlcnMuam9pbignLCcpLCAuLi5yb3dzLm1hcChyb3cgPT4gcm93LmpvaW4oJywnKSldLmpvaW4oJ1xcbicpO1xyXG5cclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGNvbnN0IG1pbWVUeXBlID0gJ3RleHQvY3N2O2VuY29kaW5nOnV0Zi04JztcclxuICBjb25zdCBmaWxlTmFtZSA9ICdnaWZ0X3RhYmxlLmNzdic7XHJcblxyXG4gIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikgeyAvLyBJRTEwXHJcbiAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihuZXcgQmxvYihbY3N2XSwge1xyXG4gICAgICB0eXBlOiBtaW1lVHlwZVxyXG4gICAgfSksIGZpbGVOYW1lKTtcclxuICB9IGVsc2UgaWYgKFVSTCAmJiAnZG93bmxvYWQnIGluIGEpIHsgLy9odG1sNSBBW2Rvd25sb2FkXVxyXG4gICAgYS5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbY3N2XSwge1xyXG4gICAgICB0eXBlOiBtaW1lVHlwZVxyXG4gICAgfSkpO1xyXG4gICAgYS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZmlsZU5hbWUpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgIGEuY2xpY2soKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvY2F0aW9uLmhyZWYgPSAnZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0sJyArIGVuY29kZVVSSUNvbXBvbmVudChjc3YpOyAvLyBvbmx5IHRoaXMgbWltZSB0eXBlIGlzIHN1cHBvcnRlZFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgR2lmdFRhYmxlID0gKHsgdGFyZ2V0QW1vdW50LCBzZXRUYXJnZXRBbW91bnQgfSkgPT4ge1xyXG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlRGVmYXVsdFJvd3ModGFyZ2V0QW1vdW50KSk7XHJcbiAgY29uc3QgW2xvY2FsVGFyZ2V0QW1vdW50LCBzZXRMb2NhbFRhcmdldEFtb3VudF0gPSB1c2VTdGF0ZSh0YXJnZXRBbW91bnQpO1xyXG5cclxuICBjb25zdCB1cGRhdGVSb3cgPSB1c2VDYWxsYmFjaygocm93KSA9PiB7XHJcbiAgICBzZXRSb3dzKChwcmV2Um93cykgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHByZXZSb3dzLmZpbmRJbmRleChyID0+IHIuaWQgPT09IHJvdy5pZCk7XHJcbiAgICAgIGNvbnN0IG5ld1Jvd3MgPSBbLi4ucHJldlJvd3NdO1xyXG4gICAgICBuZXdSb3dzW2luZGV4XSA9IHJvdztcclxuICAgICAgcmV0dXJuIG5ld1Jvd3M7XHJcbiAgICB9KVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuR2lmdFRhYmxlU3RlcH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuR2lmdFRhYmxlVGl0bGV9PlxyXG4gICAgICAgIDxoMj5Zb3VyIGdpZnQgdGFibGU8L2gyPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLkRvd25sb2FkQ3N2fSBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZENzdihyb3dzKX0+RG93bmxvYWQgUmVzdWx0czwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoNj5cclxuICAgICAgICBCYXNlZCBvbiB5b3VyIGZ1bmRyYWlzaW5nIGdvYWxzLCB3ZSd2ZSBjYWxjdWxhdGVkIHRoaXMgb3B0aW1hbCBicmVha2Rvd24gZm9yIHlvdXJcclxuICAgICAgICBvcmdhbml6YXRpb24ncyBmdW5kcmFpc2luZyBpbml0aWF0aXZlcy4gWW91IGNhbiBlZGl0IHRoaXMgdG8gZml0IHlvdXIgcmVxdWlyZW1lbnRzLlxyXG4gICAgICA8L2g2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYWJsZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYXJnZXRBbW91bnRVcGRhdGV9PlxyXG4gICAgICAgICAgSG93IG11Y2ggZG8geW91IHdhbnQgdG8gZnVuZHJhaXNlP1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dFJvd30+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtsb2NhbFRhcmdldEFtb3VudH1cclxuICAgICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBpbnB1dE1vZGU9XCJkZWNpbWFsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldExvY2FsVGFyZ2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXRBbW91bnQobG9jYWxUYXJnZXRBbW91bnQpfSBpbnRlbnQ9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgVXBkYXRlIFRhYmxlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPkdpZnQgQW1vdW50PC90aD5cclxuICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIEdpZnRzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Um93IFRvdGFsPC90aD5cclxuICAgICAgICAgICAgICA8dGg+UHJvc3BlY3RzPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHsgcm93cy5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgICA8R2lmdFRhYmxlUm93IHJvdz17cm93fSB1cGRhdGVSb3c9e3VwZGF0ZVJvd30ga2V5PXtyb3cuaWR9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtzdHlsZXMuRm9vdGVyUm93fT5cclxuICAgICAgICAgICAgICA8dGQ+VG90YWxzPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3N1bShyb3dzLCAnZ2lmdENvdW50Jyl9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2Zvcm1hdERvbGxhcnMoc3VtKHJvd3MsIHIgPT4gci5hbW91bnQgKiByLmdpZnRDb3VudCkpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntzdW0ocm93cywgJ2dpZnRDb3VudCcpICogNX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmNvbnN0IEZ1bmRyYWlzaW5nQ2FsY3VsYXRvciA9ICgpID0+IHtcclxuICBjb25zdCBbdGFyZ2V0QW1vdW50LCBzZXRUYXJnZXRBbW91bnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy8gQ3JlYXRlIGEgbmV3IHRhYmxlIHdoZW5ldmVyIHRoZSB0YXJnZXQgYW1vdW50IGNoYW5nZXNcclxuICBjb25zdCBbdGFibGVLZXksIHNldFRhYmxlS2V5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGhhbmRsZVRhcmdldEFtb3VudCA9IHVzZUNhbGxiYWNrKChyYXdBbW91bnQpID0+IHtcclxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQocmF3QW1vdW50KTtcclxuICAgIGlmIChpc05hTihhbW91bnQpKSByZXR1cm4gdGFyZ2V0QW1vdW50O1xyXG4gICAgaWYgKGFtb3VudCA8PSAwKSByZXR1cm4gdGFyZ2V0QW1vdW50O1xyXG4gICAgc2V0VGFyZ2V0QW1vdW50KGFtb3VudCk7XHJcbiAgICBzZXRUYWJsZUtleShrID0+IGsgKyAxKTtcclxuICAgIHJldHVybiBhbW91bnQ7XHJcbiAgfSwgW3RhcmdldEFtb3VudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GdW5kcmFpc2luZ0NhbGN1bGF0b3J9PlxyXG4gICAgICB7ICF0YXJnZXRBbW91bnQgPyAoXHJcbiAgICAgICAgPFRhcmdldEFtb3VudFN0ZXAgc2V0VGFyZ2V0QW1vdW50PXtoYW5kbGVUYXJnZXRBbW91bnR9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEdpZnRUYWJsZVxyXG4gICAgICAgICAgdGFyZ2V0QW1vdW50PXt0YXJnZXRBbW91bnR9XHJcbiAgICAgICAgICBzZXRUYXJnZXRBbW91bnQ9e2hhbmRsZVRhcmdldEFtb3VudH1cclxuICAgICAgICAgIGtleT17YHRhYmxlXyR7dGFibGVLZXl9YH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmRyYWlzaW5nQ2FsY3VsYXRvcjtcclxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhcmdldEFtb3VudFN0ZXBfXzM0S21kIHtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhcmdldEFtb3VudFN0ZXBfXzM0S21kIGgyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFyZ2V0QW1vdW50U3RlcF9fMzRLbWQgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYXJnZXRBbW91bnRDb250YWluZXJfXzJycHo2IHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEM0Q4REU7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0dpZnRUYWJsZVN0ZXBfXzNXZkZ6IHtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0dpZnRUYWJsZVN0ZXBfXzNXZkZ6IC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfR2lmdFRhYmxlVGl0bGVfXzM3enUwIGgyIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfR2lmdFRhYmxlU3RlcF9fM1dmRnogLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9HaWZ0VGFibGVUaXRsZV9fMzd6dTAgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9Eb3dubG9hZENzdl9fTUFZZFIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICMwMDcwZjA7XFxuICBtYXJnaW4tbGVmdDogMTRweDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0dpZnRUYWJsZVN0ZXBfXzNXZkZ6IGg2IHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzYyNzE4MztcXG4gIG1hcmdpbjogNHB4IDAgMTZweCAwO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0QzRDhERTtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYXJnZXRBbW91bnRVcGRhdGVfXzNtblhJIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDNEOERFO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFyZ2V0QW1vdW50VXBkYXRlX18zbW5YSSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0lucHV0Um93X18zNFRfbyB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFyZ2V0QW1vdW50VXBkYXRlX18zbW5YSSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0lucHV0Um93X18zNFRfbyBpbnB1dCB7XFxuICAtbW96LWJveC1mbGV4OiAxO1xcbiAgICAgICBmbGV4LWdyb3c6IDE7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHtcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdGgge1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdGgsIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0cjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEM0Q4REU7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0ZCwgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRoIHtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbn1cXG4uRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Z1bmRyYWlzaW5nQ2FsY3VsYXRvcl9fMnBLTS0gLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYWJsZUNvbnRhaW5lcl9fM1F1cnUgdGFibGUgdHIgdGQgaW5wdXQsIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0aCBpbnB1dCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0ZDpudGgtb2YtdHlwZSgxKSwgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDEpIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0ZDpudGgtb2YtdHlwZSgyKSwgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDIpIHtcXG4gIHdpZHRoOiAyNSU7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0ZDpudGgtb2YtdHlwZSgzKSwgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDMpIHtcXG4gIHdpZHRoOiAyNSU7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0ZDpudGgtb2YtdHlwZSg0KSwgLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDQpIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0ZDpub3QoOmxhc3Qtb2YtdHlwZSksIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRnVuZHJhaXNpbmdDYWxjdWxhdG9yX18ycEtNLSAuRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydSB0YWJsZSB0ciB0aDpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0QzRDhERTtcXG59XFxuLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfVGFibGVDb250YWluZXJfXzNRdXJ1IHRhYmxlIC5GdW5kcmFpc2luZ0NhbGN1bGF0b3JfRm9vdGVyUm93X19fR3ZlZyB0ZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vRnVuZHJhaXNpbmdDYWxjdWxhdG9yLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7RUFBQSwwQkFBQTtPQUFBLHNCQUFBO0VBQ0Esc0JBQUE7T0FBQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxnQkFBQTtBQURKO0FBRUk7RUFDRSxTQUFBO0FBQU47QUFHSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFETjtBQUtFO0VBQ0UsZ0JBQUE7QUFISjtBQU1NO0VBQ0UsU0FBQTtFQUNBLHFCQUFBO0FBSlI7QUFPTTtFQUNFLHFCQUFBO0VBQ0EsY0M1Qk87RUQ2QlAsaUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFMUjtBQVNJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFQTjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFUSjtBQVdJO0VBQ0UsZ0NBQUE7RUFDQSxhQUFBO0FBVE47QUFXTTtFQUNFLGlCQUFBO0VBQUEsYUFBQTtFQUNBLDJCQUFBO0VBQUEsMEJBQUE7T0FBQSxtQkFBQTtFQUNBLGVBQUE7QUFUUjtBQVdRO0VBQ0csZ0JBQUE7T0FBQSxZQUFBO0VBQ0QsaUJBQUE7QUFUVjtBQWNJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVpOO0FBY007RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVpSO0FBZU07RUFDRSxnQ0FBQTtBQWJSO0FBaUJRO0VBQ0UsaUJBQUE7QUFmVjtBQWdCVTtFQUNFLGVBQUE7QUFkWjtBQWlCVTtFQUNFLFVBQUE7QUFmWjtBQWtCVTtFQUNFLFVBQUE7QUFoQlo7QUFtQlU7RUFDRSxVQUFBO0FBakJaO0FBb0JVO0VBQ0UsVUFBQTtBQWxCWjtBQXFCVTtFQUNFLCtCQUFBO0FBbkJaO0FBeUJRO0VBQ0UseUJBQUE7QUF2QlZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnaW5kZXgnO1xcclxcblxcclxcbi5GdW5kcmFpc2luZ0NhbGN1bGF0b3Ige1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgLlRhcmdldEFtb3VudFN0ZXAge1xcclxcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xcclxcbiAgICBoMiB7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5UYXJnZXRBbW91bnRDb250YWluZXIge1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDNEOERFO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuR2lmdFRhYmxlU3RlcCB7XFxyXFxuICAgIG1heC13aWR0aDogNjQwcHg7XFxyXFxuXFxyXFxuICAgIC5HaWZ0VGFibGVUaXRsZSB7XFxyXFxuICAgICAgaDIge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuRG93bmxvYWRDc3Yge1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJsdWU7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcXHJcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoNiB7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICBjb2xvcjogIzYyNzE4MztcXHJcXG4gICAgICBtYXJnaW46IDRweCAwIDE2cHggMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLlRhYmxlQ29udGFpbmVyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDNEOERFO1xcclxcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAuVGFyZ2V0QW1vdW50VXBkYXRlIHtcXHJcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0QzRDhERTtcXHJcXG4gICAgICBwYWRkaW5nOiAxNnB4O1xcclxcblxcclxcbiAgICAgIC5JbnB1dFJvdyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG5cXHJcXG4gICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRhYmxlIHtcXHJcXG4gICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIG1heC13aWR0aDogNjQwcHg7XFxyXFxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHJcXG4gICAgICB0aCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHRoLCB0cjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEM0Q4REU7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHRyIHtcXHJcXG4gICAgICAgIHRkLCB0aCB7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAmOm50aC1vZi10eXBlKDMpIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoNCkge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNEM0Q4REU7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLkZvb3RlclJvdyB7XFxyXFxuICAgICAgICB0ZCB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiJHB0LWRpdmlkZXItYmxhY2s6IHJnYmEoMjA2LCAyMTIsIDIyNCwgMC44KTtcXG5cXG4kcHJpbWFyeS1ibHVlOiAjMDA3MGYwO1xcbiRkYXJrLWJsdWU6ICMwMDVkZDY7XFxuJGJsYWNrOiAjMGQwZDBkO1xcbiRncmV5OiAjNjY2O1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkZ1bmRyYWlzaW5nQ2FsY3VsYXRvclwiOiBcIkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9GdW5kcmFpc2luZ0NhbGN1bGF0b3JfXzJwS00tXCIsXG5cdFwiVGFyZ2V0QW1vdW50U3RlcFwiOiBcIkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYXJnZXRBbW91bnRTdGVwX18zNEttZFwiLFxuXHRcIlRhcmdldEFtb3VudENvbnRhaW5lclwiOiBcIkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYXJnZXRBbW91bnRDb250YWluZXJfXzJycHo2XCIsXG5cdFwiR2lmdFRhYmxlU3RlcFwiOiBcIkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9HaWZ0VGFibGVTdGVwX18zV2ZGelwiLFxuXHRcIkdpZnRUYWJsZVRpdGxlXCI6IFwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0dpZnRUYWJsZVRpdGxlX18zN3p1MFwiLFxuXHRcIkRvd25sb2FkQ3N2XCI6IFwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Rvd25sb2FkQ3N2X19NQVlkUlwiLFxuXHRcIlRhYmxlQ29udGFpbmVyXCI6IFwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yX1RhYmxlQ29udGFpbmVyX18zUXVydVwiLFxuXHRcIlRhcmdldEFtb3VudFVwZGF0ZVwiOiBcIkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcl9UYXJnZXRBbW91bnRVcGRhdGVfXzNtblhJXCIsXG5cdFwiSW5wdXRSb3dcIjogXCJGdW5kcmFpc2luZ0NhbGN1bGF0b3JfSW5wdXRSb3dfXzM0VF9vXCIsXG5cdFwiRm9vdGVyUm93XCI6IFwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yX0Zvb3RlclJvd19fX0d2ZWdcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9