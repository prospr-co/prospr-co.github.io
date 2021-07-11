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
        },
        placeholder: "Enter an amount"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: function onClick() {
          return setTargetAmount(amount);
        },
        intent: "primary",
        fill: true,
        children: "Next Step"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
        lineNumber: 88,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
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
        lineNumber: 100,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: formatDollars(row.amount * row.giftCount)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: row.giftCount * 5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
        lineNumber: 158,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.DownloadCsv,
        onClick: function onClick() {
          return downloadCsv(rows);
        },
        children: "Download Results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
      children: "Based on your fundraising goals, we've calculated this optimal breakdown for your organization's fundraising initiatives. You can edit this to fit your requirements."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
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
            lineNumber: 170,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            onClick: function onClick() {
              return setTargetAmount(localTargetAmount);
            },
            intent: "primary",
            children: "Update Table"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Gift Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Number of Gifts"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Row Total"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Prospects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
          children: [rows.map(function (row) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTableRow, {
              row: row,
              updateRow: updateRow
            }, row.id, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FooterRow,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "Totals"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: formatDollars(sum(rows, function (r) {
                return r.amount * r.giftCount;
              }))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount') * 5
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 156,
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
      lineNumber: 226,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTable, {
      targetAmount: targetAmount,
      setTargetAmount: handleTargetAmount
    }, "table_".concat(tableKey), false, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 224,
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

/***/ "./components/Input.jsx":
/*!******************************!*\
  !*** ./components/Input.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.module.scss */ "./components/Input.module.scss");
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Input_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "B:\\workspace\\prospr-landing-page\\components\\Input.jsx",
    _this = undefined;




var Input = function Input(_ref) {
  var value = _ref.value,
      inputMode = _ref.inputMode,
      min = _ref.min,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      required = _ref.required,
      step = _ref.step,
      type = _ref.type,
      placeholder = _ref.placeholder;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
    value: value,
    inputMode: inputMode,
    min: min,
    onChange: onChange,
    onBlur: onBlur,
    required: required,
    step: step,
    type: type,
    placeholder: placeholder,
    className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Input
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = Input;
/* harmony default export */ __webpack_exports__["default"] = (Input);

var _c;

$RefreshReg$(_c, "Input");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0lucHV0LmpzeCJdLCJuYW1lcyI6WyJnZW5lcmF0ZURlZmF1bHRSb3dzIiwidG90YWxBbW91bnQiLCJyb3dzIiwiaSIsInB1c2giLCJhbW91bnQiLCJNYXRoIiwicG93IiwiZ2lmdENvdW50IiwiaWQiLCJUYXJnZXRBbW91bnRTdGVwIiwic2V0VGFyZ2V0QW1vdW50IiwidXNlU3RhdGUiLCJzZXRBbW91bnQiLCJzdHlsZXMiLCJUYXJnZXRBbW91bnRDb250YWluZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdW0iLCJhcnIiLCJwcm9wZXJ0eSIsInJlZHVjZSIsImFjYyIsInZhbCIsImRvbGxhckZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0RG9sbGFycyIsImZvcm1hdCIsIkdpZnRUYWJsZVJvdyIsInJvdyIsInVwZGF0ZVJvdyIsInRvRml4ZWQiLCJsb2NhbEFtb3VudCIsInNldExvY2FsQW1vdW50IiwibG9jYWxHaWZ0Q291bnQiLCJzZXRMb2NhbEdpZnRDb3VudCIsImhhbmRsZUFtb3VudEJsdXIiLCJ1c2VDYWxsYmFjayIsIm5ld0Ftb3VudCIsInBhcnNlRmxvYXQiLCJpc05hTiIsIm9uQ2hhbmdlQW1vdW50Iiwib25DaGFuZ2VHaWZ0Q291bnQiLCJuZXdHaWZ0Q291bnQiLCJwYXJzZUludCIsImRvd25sb2FkQ3N2IiwiZGF0YSIsImhlYWRlcnMiLCJtYXAiLCJkIiwiY3N2Iiwiam9pbiIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtaW1lVHlwZSIsImZpbGVOYW1lIiwibmF2aWdhdG9yIiwibXNTYXZlQmxvYiIsIkJsb2IiLCJ0eXBlIiwiVVJMIiwiaHJlZiIsImNyZWF0ZU9iamVjdFVSTCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJsb2NhdGlvbiIsImVuY29kZVVSSUNvbXBvbmVudCIsIkdpZnRUYWJsZSIsInRhcmdldEFtb3VudCIsInNldFJvd3MiLCJsb2NhbFRhcmdldEFtb3VudCIsInNldExvY2FsVGFyZ2V0QW1vdW50IiwicHJldlJvd3MiLCJpbmRleCIsImZpbmRJbmRleCIsInIiLCJuZXdSb3dzIiwiR2lmdFRhYmxlU3RlcCIsIkdpZnRUYWJsZVRpdGxlIiwiRG93bmxvYWRDc3YiLCJUYWJsZUNvbnRhaW5lciIsIlRhcmdldEFtb3VudFVwZGF0ZSIsIklucHV0Um93IiwiRm9vdGVyUm93IiwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yIiwidGFibGVLZXkiLCJzZXRUYWJsZUtleSIsImhhbmRsZVRhcmdldEFtb3VudCIsInJhd0Ftb3VudCIsImsiLCJJbnB1dCIsImlucHV0TW9kZSIsIm1pbiIsIm9uQ2hhbmdlIiwib25CbHVyIiwicmVxdWlyZWQiLCJzdGVwIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsV0FBRCxFQUFpQjtBQUMzQyxNQUFNQyxJQUFJLEdBQUcsRUFBYjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJELFFBQUksQ0FBQ0UsSUFBTCxDQUFVO0FBQ1JDLFlBQU0sRUFBR0osV0FBVyxHQUFHLENBQWYsR0FBcUJLLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWUosQ0FBWixDQURyQjtBQUVSSyxlQUFTLEVBQUVGLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWUosQ0FBWixDQUZIO0FBR1JNLFFBQUUsZ0JBQVNOLENBQVQ7QUFITSxLQUFW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LHVCQUdnQkYsUUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBMUJEOztJQUFNRCxxQjs7TUFBQUEscUI7QUE0QlNBLG9GQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN09BO0FBQ0E7O0FBRUEsSUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBb0Y7QUFBQSxNQUFqRmhGLEtBQWlGLFFBQWpGQSxLQUFpRjtBQUFBLE1BQTFFaUYsU0FBMEUsUUFBMUVBLFNBQTBFO0FBQUEsTUFBL0RDLEdBQStELFFBQS9EQSxHQUErRDtBQUFBLE1BQTFEQyxRQUEwRCxRQUExREEsUUFBMEQ7QUFBQSxNQUFoREMsTUFBZ0QsUUFBaERBLE1BQWdEO0FBQUEsTUFBeENDLFFBQXdDLFFBQXhDQSxRQUF3QztBQUFBLE1BQTlCQyxJQUE4QixRQUE5QkEsSUFBOEI7QUFBQSxNQUF4QnhDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLE1BQWxCeUMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ2hHLHNCQUNFO0FBQ0UsU0FBSyxFQUFFdkYsS0FEVDtBQUVFLGFBQVMsRUFBRWlGLFNBRmI7QUFHRSxPQUFHLEVBQUVDLEdBSFA7QUFJRSxZQUFRLEVBQUVDLFFBSlo7QUFLRSxVQUFNLEVBQUVDLE1BTFY7QUFNRSxZQUFRLEVBQUVDLFFBTlo7QUFPRSxRQUFJLEVBQUVDLElBUFI7QUFRRSxRQUFJLEVBQUV4QyxJQVJSO0FBU0UsZUFBVyxFQUFFeUMsV0FUZjtBQVVFLGFBQVMsRUFBRTNGLHlEQUFNLENBQUNvRjtBQVZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQWZEOztLQUFNQSxLO0FBaUJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWxjdWxhdG9yLWVtYmVkLjM2MDQ0MTZlMDFmZmFmOTMzMjBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRnVuZHJhaXNpbmdDYWxjdWxhdG9yLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBJbnB1dCBmcm9tICdjb21wb25lbnRzL0lucHV0JztcclxuXHJcbmNvbnN0IGdlbmVyYXRlRGVmYXVsdFJvd3MgPSAodG90YWxBbW91bnQpID0+IHtcclxuICBjb25zdCByb3dzID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICByb3dzLnB1c2goe1xyXG4gICAgICBhbW91bnQ6ICh0b3RhbEFtb3VudCAvIDUpIC8gKE1hdGgucG93KDIsIGkpKSxcclxuICAgICAgZ2lmdENvdW50OiBNYXRoLnBvdygyLCBpKSxcclxuICAgICAgaWQ6IGByb3dfJHtpfWAsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb3dzO1xyXG59O1xyXG5cclxuY29uc3QgVGFyZ2V0QW1vdW50U3RlcCA9ICh7IHNldFRhcmdldEFtb3VudCB9KSA9PiB7XHJcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFyZ2V0QW1vdW50U3RlcH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFyZ2V0QW1vdW50Q29udGFpbmVyfT5cclxuICAgICAgICA8aDI+RW50ZXIgeW91ciBmdW5kcmFpc2luZyBnb2FsPC9oMj5cclxuICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYW4gYW1vdW50XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFyZ2V0QW1vdW50KGFtb3VudCl9IGludGVudD1cInByaW1hcnlcIiBmaWxsPk5leHQgU3RlcDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmNvbnN0IHN1bSA9IChhcnIsIHByb3BlcnR5KSA9PiBhcnIucmVkdWNlKFxyXG4gIChhY2MsIHZhbCkgPT4gYWNjICsgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BlcnR5KHZhbCkgOiB2YWxbcHJvcGVydHldKSxcclxuICAwLFxyXG4pO1xyXG5cclxuY29uc3QgZG9sbGFyRm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcclxuICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICBjdXJyZW5jeTogJ1VTRCcsXHJcbn0pO1xyXG5cclxuY29uc3QgZm9ybWF0RG9sbGFycyA9IHZhbCA9PiBkb2xsYXJGb3JtYXR0ZXIuZm9ybWF0KHZhbCk7XHJcblxyXG5jb25zdCBHaWZ0VGFibGVSb3cgPSAoeyByb3csIHVwZGF0ZVJvdyB9KSA9PiB7XHJcbiAgY29uc3QgW2xvY2FsQW1vdW50LCBzZXRMb2NhbEFtb3VudF0gPSB1c2VTdGF0ZShyb3cuYW1vdW50ICUgMSA9PT0gMCA/IHJvdy5hbW91bnQgOiByb3cuYW1vdW50LnRvRml4ZWQoMikpO1xyXG4gIGNvbnN0IFtsb2NhbEdpZnRDb3VudCwgc2V0TG9jYWxHaWZ0Q291bnRdID0gdXNlU3RhdGUocm93LmdpZnRDb3VudCAlIDEgPT09IDAgPyByb3cuZ2lmdENvdW50IDogcm93LmdpZnRDb3VudC50b0ZpeGVkKDIpKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW1vdW50Qmx1ciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IG5ld0Ftb3VudCA9IHBhcnNlRmxvYXQobG9jYWxBbW91bnQpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0Ftb3VudCkgfHwgbmV3QW1vdW50IDw9IDApIHJldHVybjtcclxuXHJcbiAgICBpZiAobmV3QW1vdW50ICUgMSAhPT0gMCkgc2V0TG9jYWxBbW91bnQobmV3QW1vdW50LnRvRml4ZWQoMikpO1xyXG4gIH0sIFtsb2NhbEFtb3VudF0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUFtb3VudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRMb2NhbEFtb3VudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zdCBuZXdBbW91bnQgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChpc05hTihuZXdBbW91bnQpIHx8IG5ld0Ftb3VudCA8PSAwKSByZXR1cm47XHJcbiAgICB1cGRhdGVSb3coe1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGFtb3VudDogbmV3QW1vdW50LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Jvd10pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlR2lmdENvdW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldExvY2FsR2lmdENvdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0dpZnRDb3VudCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChpc05hTihuZXdHaWZ0Q291bnQpIHx8IG5ld0dpZnRDb3VudCA8PSAwKSByZXR1cm47XHJcbiAgICB1cGRhdGVSb3coe1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGdpZnRDb3VudDogbmV3R2lmdENvdW50LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Jvd10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtsb2NhbEFtb3VudH1cclxuICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJkZWNpbWFsXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgc3RlcD17MC4wMX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUFtb3VudH1cclxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlQW1vdW50Qmx1cn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB2YWx1ZT17bG9jYWxHaWZ0Q291bnR9XHJcbiAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgaW5wdXRNb2RlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUdpZnRDb3VudH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+e2Zvcm1hdERvbGxhcnMocm93LmFtb3VudCAqIHJvdy5naWZ0Q291bnQpfTwvdGQ+XHJcbiAgICAgIDx0ZD57cm93LmdpZnRDb3VudCAqIDV9PC90ZD5cclxuICAgIDwvdHI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGRvd25sb2FkQ3N2ID0gKGRhdGEpID0+IHtcclxuICBjb25zdCBoZWFkZXJzID0gWydHaWZ0IEFtb3VudCcsICdOdW1iZXIgb2YgR2lmdHMnLCAnUm93IFRvdGFsJywgJ1Byb3NwZWN0cyddO1xyXG4gIGNvbnN0IHJvd3MgPSBkYXRhLm1hcChkID0+IFtkLmFtb3VudCwgZC5naWZ0Q291bnQsIGQuYW1vdW50ICogZC5naWZ0Q291bnQsIGQuZ2lmdENvdW50ICogNV0pO1xyXG5cclxuICBjb25zdCBjc3YgPSBbaGVhZGVycy5qb2luKCcsJyksIC4uLnJvd3MubWFwKHJvdyA9PiByb3cuam9pbignLCcpKV0uam9pbignXFxuJyk7XHJcblxyXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgY29uc3QgbWltZVR5cGUgPSAndGV4dC9jc3Y7ZW5jb2Rpbmc6dXRmLTgnO1xyXG4gIGNvbnN0IGZpbGVOYW1lID0gJ2dpZnRfdGFibGUuY3N2JztcclxuXHJcbiAgaWYgKG5hdmlnYXRvci5tc1NhdmVCbG9iKSB7IC8vIElFMTBcclxuICAgIG5hdmlnYXRvci5tc1NhdmVCbG9iKG5ldyBCbG9iKFtjc3ZdLCB7XHJcbiAgICAgIHR5cGU6IG1pbWVUeXBlXHJcbiAgICB9KSwgZmlsZU5hbWUpO1xyXG4gIH0gZWxzZSBpZiAoVVJMICYmICdkb3dubG9hZCcgaW4gYSkgeyAvL2h0bWw1IEFbZG93bmxvYWRdXHJcbiAgICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtjc3ZdLCB7XHJcbiAgICAgIHR5cGU6IG1pbWVUeXBlXHJcbiAgICB9KSk7XHJcbiAgICBhLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlTmFtZSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gICAgYS5jbGljaygpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbG9jYXRpb24uaHJlZiA9ICdkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGNzdik7IC8vIG9ubHkgdGhpcyBtaW1lIHR5cGUgaXMgc3VwcG9ydGVkXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBHaWZ0VGFibGUgPSAoeyB0YXJnZXRBbW91bnQsIHNldFRhcmdldEFtb3VudCB9KSA9PiB7XHJcbiAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVEZWZhdWx0Um93cyh0YXJnZXRBbW91bnQpKTtcclxuICBjb25zdCBbbG9jYWxUYXJnZXRBbW91bnQsIHNldExvY2FsVGFyZ2V0QW1vdW50XSA9IHVzZVN0YXRlKHRhcmdldEFtb3VudCk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVJvdyA9IHVzZUNhbGxiYWNrKChyb3cpID0+IHtcclxuICAgIHNldFJvd3MoKHByZXZSb3dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gcHJldlJvd3MuZmluZEluZGV4KHIgPT4gci5pZCA9PT0gcm93LmlkKTtcclxuICAgICAgY29uc3QgbmV3Um93cyA9IFsuLi5wcmV2Um93c107XHJcbiAgICAgIG5ld1Jvd3NbaW5kZXhdID0gcm93O1xyXG4gICAgICByZXR1cm4gbmV3Um93cztcclxuICAgIH0pXHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5HaWZ0VGFibGVTdGVwfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5HaWZ0VGFibGVUaXRsZX0+XHJcbiAgICAgICAgPGgyPllvdXIgZ2lmdCB0YWJsZTwvaDI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuRG93bmxvYWRDc3Z9IG9uQ2xpY2s9eygpID0+IGRvd25sb2FkQ3N2KHJvd3MpfT5Eb3dubG9hZCBSZXN1bHRzPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGg2PlxyXG4gICAgICAgIEJhc2VkIG9uIHlvdXIgZnVuZHJhaXNpbmcgZ29hbHMsIHdlJ3ZlIGNhbGN1bGF0ZWQgdGhpcyBvcHRpbWFsIGJyZWFrZG93biBmb3IgeW91clxyXG4gICAgICAgIG9yZ2FuaXphdGlvbidzIGZ1bmRyYWlzaW5nIGluaXRpYXRpdmVzLiBZb3UgY2FuIGVkaXQgdGhpcyB0byBmaXQgeW91ciByZXF1aXJlbWVudHMuXHJcbiAgICAgIDwvaDY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYmxlQ29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhcmdldEFtb3VudFVwZGF0ZX0+XHJcbiAgICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0Um93fT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2xvY2FsVGFyZ2V0QW1vdW50fVxyXG4gICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIHN0ZXA9ezAuMDF9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TG9jYWxUYXJnZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRhcmdldEFtb3VudChsb2NhbFRhcmdldEFtb3VudCl9IGludGVudD1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICBVcGRhdGUgVGFibGVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+R2lmdCBBbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5OdW1iZXIgb2YgR2lmdHM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Sb3cgVG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Qcm9zcGVjdHM8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgeyByb3dzLm1hcChyb3cgPT4gKFxyXG4gICAgICAgICAgICAgIDxHaWZ0VGFibGVSb3cgcm93PXtyb3d9IHVwZGF0ZVJvdz17dXBkYXRlUm93fSBrZXk9e3Jvdy5pZH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJSb3d9PlxyXG4gICAgICAgICAgICAgIDx0ZD5Ub3RhbHM8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57c3VtKHJvd3MsICdnaWZ0Q291bnQnKX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57Zm9ybWF0RG9sbGFycyhzdW0ocm93cywgciA9PiByLmFtb3VudCAqIHIuZ2lmdENvdW50KSl9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3N1bShyb3dzLCAnZ2lmdENvdW50JykgKiA1fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuY29uc3QgRnVuZHJhaXNpbmdDYWxjdWxhdG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0YXJnZXRBbW91bnQsIHNldFRhcmdldEFtb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAvLyBDcmVhdGUgYSBuZXcgdGFibGUgd2hlbmV2ZXIgdGhlIHRhcmdldCBhbW91bnQgY2hhbmdlc1xyXG4gIGNvbnN0IFt0YWJsZUtleSwgc2V0VGFibGVLZXldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlVGFyZ2V0QW1vdW50ID0gdXNlQ2FsbGJhY2soKHJhd0Ftb3VudCkgPT4ge1xyXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChyYXdBbW91bnQpO1xyXG4gICAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiB0YXJnZXRBbW91bnQ7XHJcbiAgICBpZiAoYW1vdW50IDw9IDApIHJldHVybiB0YXJnZXRBbW91bnQ7XHJcbiAgICBzZXRUYXJnZXRBbW91bnQoYW1vdW50KTtcclxuICAgIHNldFRhYmxlS2V5KGsgPT4gayArIDEpO1xyXG4gICAgcmV0dXJuIGFtb3VudDtcclxuICB9LCBbdGFyZ2V0QW1vdW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcn0+XHJcbiAgICAgIHsgIXRhcmdldEFtb3VudCA/IChcclxuICAgICAgICA8VGFyZ2V0QW1vdW50U3RlcCBzZXRUYXJnZXRBbW91bnQ9e2hhbmRsZVRhcmdldEFtb3VudH0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8R2lmdFRhYmxlXHJcbiAgICAgICAgICB0YXJnZXRBbW91bnQ9e3RhcmdldEFtb3VudH1cclxuICAgICAgICAgIHNldFRhcmdldEFtb3VudD17aGFuZGxlVGFyZ2V0QW1vdW50fVxyXG4gICAgICAgICAga2V5PXtgdGFibGVfJHt0YWJsZUtleX1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVuZHJhaXNpbmdDYWxjdWxhdG9yO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5wdXQubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgSW5wdXQgPSAoeyB2YWx1ZSwgaW5wdXRNb2RlLCBtaW4sIG9uQ2hhbmdlLCBvbkJsdXIsIHJlcXVpcmVkLCBzdGVwLCB0eXBlLCBwbGFjZWhvbGRlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxpbnB1dFxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgIGlucHV0TW9kZT17aW5wdXRNb2RlfVxyXG4gICAgICBtaW49e21pbn1cclxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLklucHV0fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=