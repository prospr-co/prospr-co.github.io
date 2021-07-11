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
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Button */ "./components/Button.jsx");
/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Input */ "./components/Input.jsx");
/* harmony import */ var _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FundraisingCalculator.module.scss */ "./components/FundraisingCalculator.module.scss");
/* harmony import */ var _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6__);




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

  var parsedAmount = parseFloat(amount);
  var isValid = !isNaN(parsedAmount) && parsedAmount > 0;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.TargetAmountStep,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.TargetAmountContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Enter your fundraising goal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), "How much do you want to fundraise?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: function onClick() {
          return setTargetAmount(amount);
        },
        intent: "primary",
        fill: true,
        disabled: !isValid,
        children: "Next Step"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        lineNumber: 97,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: localGiftCount,
        min: 1,
        required: true,
        inputMode: "numeric",
        type: "number",
        onChange: onChangeGiftCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: formatDollars(row.amount * row.giftCount)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: row.giftCount * 5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
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
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.GiftTableStep,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.GiftTableTitle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Your gift table"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.DownloadCsv,
        onClick: function onClick() {
          return downloadCsv(rows);
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: "icons/download.svg",
          width: 14,
          height: 14,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this), "Download Results"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
      children: "Based on your fundraising goals, we've calculated this optimal breakdown for your organization's fundraising initiatives. You can edit this to fit your requirements."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.TableContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.TargetAmountUpdate,
        children: ["How much do you want to fundraise?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.InputRow,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
            value: localTargetAmount,
            min: 1,
            required: true,
            inputMode: "decimal",
            type: "number",
            step: 0.01,
            onChange: function onChange(e) {
              return setLocalTargetAmount(e.target.value);
            },
            autoFocus: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            onClick: function onClick() {
              return setTargetAmount(localTargetAmount);
            },
            intent: "primary",
            children: "Update Table"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Gift Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Number of Gifts"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Row Total"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Prospects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
          children: [rows.map(function (row) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTableRow, {
              row: row,
              updateRow: updateRow
            }, row.id, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.FooterRow,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: "Totals"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: formatDollars(sum(rows, function (r) {
                return r.amount * r.giftCount;
              }))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount') * 5
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 165,
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
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.FundraisingCalculator,
    children: !targetAmount ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TargetAmountStep, {
      setTargetAmount: handleTargetAmount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTable, {
      targetAmount: targetAmount,
      setTargetAmount: handleTargetAmount
    }, "table_".concat(tableKey), false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 237,
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input.module.scss */ "./components/Input.module.scss");
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Input_module_scss__WEBPACK_IMPORTED_MODULE_3__);


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
      placeholder = _ref.placeholder,
      autoFocus = _ref.autoFocus;
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
    autoFocus: autoFocus,
    className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Input
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Input;
Input.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  inputMode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  min: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  required: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  step: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0lucHV0LmpzeCJdLCJuYW1lcyI6WyJnZW5lcmF0ZURlZmF1bHRSb3dzIiwidG90YWxBbW91bnQiLCJyb3dzIiwiaSIsInB1c2giLCJhbW91bnQiLCJNYXRoIiwicG93IiwiZ2lmdENvdW50IiwiaWQiLCJUYXJnZXRBbW91bnRTdGVwIiwic2V0VGFyZ2V0QW1vdW50IiwidXNlU3RhdGUiLCJzZXRBbW91bnQiLCJwYXJzZWRBbW91bnQiLCJwYXJzZUZsb2F0IiwiaXNWYWxpZCIsImlzTmFOIiwic3R5bGVzIiwiVGFyZ2V0QW1vdW50Q29udGFpbmVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwic3VtIiwiYXJyIiwicHJvcGVydHkiLCJyZWR1Y2UiLCJhY2MiLCJ2YWwiLCJkb2xsYXJGb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdERvbGxhcnMiLCJmb3JtYXQiLCJHaWZ0VGFibGVSb3ciLCJyb3ciLCJ1cGRhdGVSb3ciLCJ0b0ZpeGVkIiwibG9jYWxBbW91bnQiLCJzZXRMb2NhbEFtb3VudCIsImxvY2FsR2lmdENvdW50Iiwic2V0TG9jYWxHaWZ0Q291bnQiLCJoYW5kbGVBbW91bnRCbHVyIiwidXNlQ2FsbGJhY2siLCJuZXdBbW91bnQiLCJvbkNoYW5nZUFtb3VudCIsIm9uQ2hhbmdlR2lmdENvdW50IiwibmV3R2lmdENvdW50IiwicGFyc2VJbnQiLCJkb3dubG9hZENzdiIsImRhdGEiLCJoZWFkZXJzIiwibWFwIiwiZCIsImNzdiIsImpvaW4iLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibWltZVR5cGUiLCJmaWxlTmFtZSIsIm5hdmlnYXRvciIsIm1zU2F2ZUJsb2IiLCJCbG9iIiwidHlwZSIsIlVSTCIsImhyZWYiLCJjcmVhdGVPYmplY3RVUkwiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwibG9jYXRpb24iLCJlbmNvZGVVUklDb21wb25lbnQiLCJHaWZ0VGFibGUiLCJ0YXJnZXRBbW91bnQiLCJzZXRSb3dzIiwibG9jYWxUYXJnZXRBbW91bnQiLCJzZXRMb2NhbFRhcmdldEFtb3VudCIsInByZXZSb3dzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJyIiwibmV3Um93cyIsIkdpZnRUYWJsZVN0ZXAiLCJHaWZ0VGFibGVUaXRsZSIsIkRvd25sb2FkQ3N2IiwiVGFibGVDb250YWluZXIiLCJUYXJnZXRBbW91bnRVcGRhdGUiLCJJbnB1dFJvdyIsIkZvb3RlclJvdyIsIkZ1bmRyYWlzaW5nQ2FsY3VsYXRvciIsInRhYmxlS2V5Iiwic2V0VGFibGVLZXkiLCJoYW5kbGVUYXJnZXRBbW91bnQiLCJyYXdBbW91bnQiLCJrIiwiSW5wdXQiLCJpbnB1dE1vZGUiLCJtaW4iLCJvbkNoYW5nZSIsIm9uQmx1ciIsInJlcXVpcmVkIiwic3RlcCIsInBsYWNlaG9sZGVyIiwiYXV0b0ZvY3VzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55Iiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsV0FBRCxFQUFpQjtBQUMzQyxNQUFNQyxJQUFJLEdBQUcsRUFBYjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJELFFBQUksQ0FBQ0UsSUFBTCxDQUFVO0FBQ1JDLFlBQU0sRUFBR0osV0FBVyxHQUFHLENBQWYsR0FBcUJLLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWUosQ0FB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QkEsV0FBNkI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzNHLHNCQUNFO0FBQ0UsU0FBSyxFQUFFdEYsS0FEVDtBQUVFLGFBQVMsRUFBRStFLFNBRmI7QUFHRSxPQUFHLEVBQUVDLEdBSFA7QUFJRSxZQUFRLEVBQUVDLFFBSlo7QUFLRSxVQUFNLEVBQUVDLE1BTFY7QUFNRSxZQUFRLEVBQUVDLFFBTlo7QUFPRSxRQUFJLEVBQUVDLElBUFI7QUFRRSxRQUFJLEVBQUV4QyxJQVJSO0FBU0UsZUFBVyxFQUFFeUMsV0FUZjtBQVVFLGFBQVMsRUFBRUMsU0FWYjtBQVdFLGFBQVMsRUFBRTFGLHlEQUFNLENBQUNrRjtBQVhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQWhCRDs7S0FBTUEsSztBQWtCTkEsS0FBSyxDQUFDUyxTQUFOLEdBQWtCO0FBQ2hCdkYsT0FBSyxFQUFFd0YsaURBQVMsQ0FBQ0MsR0FERDtBQUVoQlYsV0FBUyxFQUFFUyxpREFBUyxDQUFDRSxNQUZMO0FBR2hCVixLQUFHLEVBQUVRLGlEQUFTLENBQUNHLE1BSEM7QUFJaEJWLFVBQVEsRUFBRU8saURBQVMsQ0FBQ0ksSUFKSjtBQUtoQlYsUUFBTSxFQUFFTSxpREFBUyxDQUFDSSxJQUxGO0FBTWhCVCxVQUFRLEVBQUVLLGlEQUFTLENBQUNLLElBTko7QUFPaEJULE1BQUksRUFBRUksaURBQVMsQ0FBQ0csTUFQQTtBQVFoQi9DLE1BQUksRUFBRTRDLGlEQUFTLENBQUNFLE1BUkE7QUFTaEJMLGFBQVcsRUFBRUcsaURBQVMsQ0FBQ0UsTUFUUDtBQVVoQkosV0FBUyxFQUFFRSxpREFBUyxDQUFDSztBQVZMLENBQWxCO0FBYWVmLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbGN1bGF0b3ItZW1iZWQuZTMxNzNhNGE5ZmNjODg0YzRkODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnY29tcG9uZW50cy9JbnB1dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GdW5kcmFpc2luZ0NhbGN1bGF0b3IubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVEZWZhdWx0Um93cyA9ICh0b3RhbEFtb3VudCkgPT4ge1xyXG4gIGNvbnN0IHJvd3MgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIHJvd3MucHVzaCh7XHJcbiAgICAgIGFtb3VudDogKHRvdGFsQW1vdW50IC8gNSkgLyAoTWF0aC5wb3coMiwgaSkpLFxyXG4gICAgICBnaWZ0Q291bnQ6IE1hdGgucG93KDIsIGkpLFxyXG4gICAgICBpZDogYHJvd18ke2l9YCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvd3M7XHJcbn07XHJcblxyXG5jb25zdCBUYXJnZXRBbW91bnRTdGVwID0gKHsgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHBhcnNlZEFtb3VudCA9IHBhcnNlRmxvYXQoYW1vdW50KTtcclxuICBjb25zdCBpc1ZhbGlkID0gIWlzTmFOKHBhcnNlZEFtb3VudCkgJiYgcGFyc2VkQW1vdW50ID4gMDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFyZ2V0QW1vdW50U3RlcH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFyZ2V0QW1vdW50Q29udGFpbmVyfT5cclxuICAgICAgICA8aDI+RW50ZXIgeW91ciBmdW5kcmFpc2luZyBnb2FsPC9oMj5cclxuICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYW4gYW1vdW50XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhcmdldEFtb3VudChhbW91bnQpfVxyXG4gICAgICAgICAgaW50ZW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICBkaXNhYmxlZD17IWlzVmFsaWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTmV4dCBTdGVwXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuY29uc3Qgc3VtID0gKGFyciwgcHJvcGVydHkpID0+IGFyci5yZWR1Y2UoXHJcbiAgKGFjYywgdmFsKSA9PiBhY2MgKyAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nID8gcHJvcGVydHkodmFsKSA6IHZhbFtwcm9wZXJ0eV0pLFxyXG4gIDAsXHJcbik7XHJcblxyXG5jb25zdCBkb2xsYXJGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xyXG4gIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gIGN1cnJlbmN5OiAnVVNEJyxcclxufSk7XHJcblxyXG5jb25zdCBmb3JtYXREb2xsYXJzID0gdmFsID0+IGRvbGxhckZvcm1hdHRlci5mb3JtYXQodmFsKTtcclxuXHJcbmNvbnN0IEdpZnRUYWJsZVJvdyA9ICh7IHJvdywgdXBkYXRlUm93IH0pID0+IHtcclxuICBjb25zdCBbbG9jYWxBbW91bnQsIHNldExvY2FsQW1vdW50XSA9IHVzZVN0YXRlKHJvdy5hbW91bnQgJSAxID09PSAwID8gcm93LmFtb3VudCA6IHJvdy5hbW91bnQudG9GaXhlZCgyKSk7XHJcbiAgY29uc3QgW2xvY2FsR2lmdENvdW50LCBzZXRMb2NhbEdpZnRDb3VudF0gPSB1c2VTdGF0ZShyb3cuZ2lmdENvdW50ICUgMSA9PT0gMCA/IHJvdy5naWZ0Q291bnQgOiByb3cuZ2lmdENvdW50LnRvRml4ZWQoMikpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBbW91bnRCbHVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3QW1vdW50ID0gcGFyc2VGbG9hdChsb2NhbEFtb3VudCk7XHJcbiAgICBpZiAoaXNOYU4obmV3QW1vdW50KSB8fCBuZXdBbW91bnQgPD0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChuZXdBbW91bnQgJSAxICE9PSAwKSBzZXRMb2NhbEFtb3VudChuZXdBbW91bnQudG9GaXhlZCgyKSk7XHJcbiAgfSwgW2xvY2FsQW1vdW50XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQW1vdW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldExvY2FsQW1vdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0Ftb3VudCA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0Ftb3VudCkgfHwgbmV3QW1vdW50IDw9IDApIHJldHVybjtcclxuICAgIHVwZGF0ZVJvdyh7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgYW1vdW50OiBuZXdBbW91bnQsXHJcbiAgICB9KTtcclxuICB9LCBbcm93XSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VHaWZ0Q291bnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0TG9jYWxHaWZ0Q291bnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgbmV3R2lmdENvdW50ID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0dpZnRDb3VudCkgfHwgbmV3R2lmdENvdW50IDw9IDApIHJldHVybjtcclxuICAgIHVwZGF0ZVJvdyh7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgZ2lmdENvdW50OiBuZXdHaWZ0Q291bnQsXHJcbiAgICB9KTtcclxuICB9LCBbcm93XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0cj5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2xvY2FsQW1vdW50fVxyXG4gICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQW1vdW50fVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVBbW91bnRCbHVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtsb2NhbEdpZnRDb3VudH1cclxuICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJudW1lcmljXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlR2lmdENvdW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD57Zm9ybWF0RG9sbGFycyhyb3cuYW1vdW50ICogcm93LmdpZnRDb3VudCl9PC90ZD5cclxuICAgICAgPHRkPntyb3cuZ2lmdENvdW50ICogNX08L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZG93bmxvYWRDc3YgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlcnMgPSBbJ0dpZnQgQW1vdW50JywgJ051bWJlciBvZiBHaWZ0cycsICdSb3cgVG90YWwnLCAnUHJvc3BlY3RzJ107XHJcbiAgY29uc3Qgcm93cyA9IGRhdGEubWFwKGQgPT4gW2QuYW1vdW50LCBkLmdpZnRDb3VudCwgZC5hbW91bnQgKiBkLmdpZnRDb3VudCwgZC5naWZ0Q291bnQgKiA1XSk7XHJcblxyXG4gIGNvbnN0IGNzdiA9IFtoZWFkZXJzLmpvaW4oJywnKSwgLi4ucm93cy5tYXAocm93ID0+IHJvdy5qb2luKCcsJykpXS5qb2luKCdcXG4nKTtcclxuXHJcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjb25zdCBtaW1lVHlwZSA9ICd0ZXh0L2NzdjtlbmNvZGluZzp1dGYtOCc7XHJcbiAgY29uc3QgZmlsZU5hbWUgPSAnZ2lmdF90YWJsZS5jc3YnO1xyXG5cclxuICBpZiAobmF2aWdhdG9yLm1zU2F2ZUJsb2IpIHsgLy8gSUUxMFxyXG4gICAgbmF2aWdhdG9yLm1zU2F2ZUJsb2IobmV3IEJsb2IoW2Nzdl0sIHtcclxuICAgICAgdHlwZTogbWltZVR5cGVcclxuICAgIH0pLCBmaWxlTmFtZSk7XHJcbiAgfSBlbHNlIGlmIChVUkwgJiYgJ2Rvd25sb2FkJyBpbiBhKSB7IC8vaHRtbDUgQVtkb3dubG9hZF1cclxuICAgIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2Nzdl0sIHtcclxuICAgICAgdHlwZTogbWltZVR5cGVcclxuICAgIH0pKTtcclxuICAgIGEuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGZpbGVOYW1lKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2NhdGlvbi5ocmVmID0gJ2RhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLCcgKyBlbmNvZGVVUklDb21wb25lbnQoY3N2KTsgLy8gb25seSB0aGlzIG1pbWUgdHlwZSBpcyBzdXBwb3J0ZWRcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEdpZnRUYWJsZSA9ICh7IHRhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZURlZmF1bHRSb3dzKHRhcmdldEFtb3VudCkpO1xyXG4gIGNvbnN0IFtsb2NhbFRhcmdldEFtb3VudCwgc2V0TG9jYWxUYXJnZXRBbW91bnRdID0gdXNlU3RhdGUodGFyZ2V0QW1vdW50KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUm93ID0gdXNlQ2FsbGJhY2soKHJvdykgPT4ge1xyXG4gICAgc2V0Um93cygocHJldlJvd3MpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBwcmV2Um93cy5maW5kSW5kZXgociA9PiByLmlkID09PSByb3cuaWQpO1xyXG4gICAgICBjb25zdCBuZXdSb3dzID0gWy4uLnByZXZSb3dzXTtcclxuICAgICAgbmV3Um93c1tpbmRleF0gPSByb3c7XHJcbiAgICAgIHJldHVybiBuZXdSb3dzO1xyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdpZnRUYWJsZVN0ZXB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdpZnRUYWJsZVRpdGxlfT5cclxuICAgICAgICA8aDI+WW91ciBnaWZ0IHRhYmxlPC9oMj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5Eb3dubG9hZENzdn0gb25DbGljaz17KCkgPT4gZG93bmxvYWRDc3Yocm93cyl9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9kb3dubG9hZC5zdmdcIiB3aWR0aD17MTR9IGhlaWdodD17MTR9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICBEb3dubG9hZCBSZXN1bHRzXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGg2PlxyXG4gICAgICAgIEJhc2VkIG9uIHlvdXIgZnVuZHJhaXNpbmcgZ29hbHMsIHdlJ3ZlIGNhbGN1bGF0ZWQgdGhpcyBvcHRpbWFsIGJyZWFrZG93biBmb3IgeW91clxyXG4gICAgICAgIG9yZ2FuaXphdGlvbidzIGZ1bmRyYWlzaW5nIGluaXRpYXRpdmVzLiBZb3UgY2FuIGVkaXQgdGhpcyB0byBmaXQgeW91ciByZXF1aXJlbWVudHMuXHJcbiAgICAgIDwvaDY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYmxlQ29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhcmdldEFtb3VudFVwZGF0ZX0+XHJcbiAgICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0Um93fT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2xvY2FsVGFyZ2V0QW1vdW50fVxyXG4gICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIHN0ZXA9ezAuMDF9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TG9jYWxUYXJnZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRhcmdldEFtb3VudChsb2NhbFRhcmdldEFtb3VudCl9IGludGVudD1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICBVcGRhdGUgVGFibGVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+R2lmdCBBbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5OdW1iZXIgb2YgR2lmdHM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Sb3cgVG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Qcm9zcGVjdHM8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgeyByb3dzLm1hcChyb3cgPT4gKFxyXG4gICAgICAgICAgICAgIDxHaWZ0VGFibGVSb3cgcm93PXtyb3d9IHVwZGF0ZVJvdz17dXBkYXRlUm93fSBrZXk9e3Jvdy5pZH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJSb3d9PlxyXG4gICAgICAgICAgICAgIDx0ZD5Ub3RhbHM8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57c3VtKHJvd3MsICdnaWZ0Q291bnQnKX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57Zm9ybWF0RG9sbGFycyhzdW0ocm93cywgciA9PiByLmFtb3VudCAqIHIuZ2lmdENvdW50KSl9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3N1bShyb3dzLCAnZ2lmdENvdW50JykgKiA1fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuY29uc3QgRnVuZHJhaXNpbmdDYWxjdWxhdG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0YXJnZXRBbW91bnQsIHNldFRhcmdldEFtb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAvLyBDcmVhdGUgYSBuZXcgdGFibGUgd2hlbmV2ZXIgdGhlIHRhcmdldCBhbW91bnQgY2hhbmdlc1xyXG4gIGNvbnN0IFt0YWJsZUtleSwgc2V0VGFibGVLZXldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlVGFyZ2V0QW1vdW50ID0gdXNlQ2FsbGJhY2soKHJhd0Ftb3VudCkgPT4ge1xyXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChyYXdBbW91bnQpO1xyXG4gICAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiB0YXJnZXRBbW91bnQ7XHJcbiAgICBpZiAoYW1vdW50IDw9IDApIHJldHVybiB0YXJnZXRBbW91bnQ7XHJcbiAgICBzZXRUYXJnZXRBbW91bnQoYW1vdW50KTtcclxuICAgIHNldFRhYmxlS2V5KGsgPT4gayArIDEpO1xyXG4gICAgcmV0dXJuIGFtb3VudDtcclxuICB9LCBbdGFyZ2V0QW1vdW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcn0+XHJcbiAgICAgIHsgIXRhcmdldEFtb3VudCA/IChcclxuICAgICAgICA8VGFyZ2V0QW1vdW50U3RlcCBzZXRUYXJnZXRBbW91bnQ9e2hhbmRsZVRhcmdldEFtb3VudH0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8R2lmdFRhYmxlXHJcbiAgICAgICAgICB0YXJnZXRBbW91bnQ9e3RhcmdldEFtb3VudH1cclxuICAgICAgICAgIHNldFRhcmdldEFtb3VudD17aGFuZGxlVGFyZ2V0QW1vdW50fVxyXG4gICAgICAgICAga2V5PXtgdGFibGVfJHt0YWJsZUtleX1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVuZHJhaXNpbmdDYWxjdWxhdG9yO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5wdXQubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgSW5wdXQgPSAoeyB2YWx1ZSwgaW5wdXRNb2RlLCBtaW4sIG9uQ2hhbmdlLCBvbkJsdXIsIHJlcXVpcmVkLCBzdGVwLCB0eXBlLCBwbGFjZWhvbGRlciwgYXV0b0ZvY3VzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0XHJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgaW5wdXRNb2RlPXtpbnB1dE1vZGV9XHJcbiAgICAgIG1pbj17bWlufVxyXG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgIG9uQmx1cj17b25CbHVyfVxyXG4gICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgIHN0ZXA9e3N0ZXB9XHJcbiAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgYXV0b0ZvY3VzPXthdXRvRm9jdXN9XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLklucHV0fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuSW5wdXQucHJvcFR5cGVzID0ge1xyXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxyXG4gIGlucHV0TW9kZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBtaW46IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=