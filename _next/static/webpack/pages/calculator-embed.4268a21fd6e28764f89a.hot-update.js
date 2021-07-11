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
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$();

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
        placeholder: "Enter an amount",
        autoFocus: true,
        onPressEnter: function onPressEnter() {
          return setTargetAmount(amount);
        }
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
        lineNumber: 42,
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
        lineNumber: 99,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
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
        lineNumber: 111,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: formatDollars(row.amount * row.giftCount)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
      children: row.giftCount * 5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
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

  var rows = _ref3.rows,
      setRows = _ref3.setRows;
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
          children: "Gift Amount"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
          children: "Number of Gifts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
          children: "Row Total"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
          children: "Prospects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
      children: [rows.map(function (row) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTableRow, {
          row: row,
          updateRow: updateRow
        }, row.id, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
        className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.FooterRow,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: "Totals"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: sum(rows, 'giftCount')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: formatDollars(sum(rows, function (r) {
            return r.amount * r.giftCount;
          }))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: sum(rows, 'giftCount') * 5
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 165,
    columnNumber: 5
  }, _this);
};

_s3(GiftTable, "nGnWFM7GnSKt8Gn11GntdOo0wD8=");

_c3 = GiftTable;

var GiftTableStep = function GiftTableStep(_ref4) {
  _s4();

  var targetAmount = _ref4.targetAmount,
      setTargetAmount = _ref4.setTargetAmount,
      rows = _ref4.rows,
      setRows = _ref4.setRows;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(targetAmount),
      localTargetAmount = _useState4[0],
      setLocalTargetAmount = _useState4[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.GiftTableStep,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.GiftTableTitle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Your gift table"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
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
          lineNumber: 197,
          columnNumber: 11
        }, _this), "Download Results"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
      children: "Based on your fundraising goals, we've calculated this optimal breakdown for your organization's fundraising initiatives. You can edit this to fit your requirements."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 201,
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
            onPressEnter: function onPressEnter() {
              return setTargetAmount(localTargetAmount);
            },
            autoFocus: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            onClick: function onClick() {
              return setTargetAmount(localTargetAmount);
            },
            intent: "primary",
            children: "Update Table"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTable, {
        targetAmount: targetAmount,
        rows: rows,
        setRows: setRows
      }, tableKey, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 193,
    columnNumber: 5
  }, _this);
};

_s4(GiftTableStep, "fOQGaL/O+zzvlMTKNd+3VoZ0hFo=");

_c4 = GiftTableStep;

var FundraisingCalculator = function FundraisingCalculator() {
  _s5();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      targetAmount = _useState5[0],
      setTargetAmount = _useState5[1]; // Create a new table whenever the target amount changes


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(function () {
    return generateDefaultRows(100);
  }),
      rows = _useState6[0],
      setRows = _useState6[1];

  var handleTargetAmount = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (rawAmount) {
    var amount = parseFloat(rawAmount);
    if (isNaN(amount)) return targetAmount;
    if (amount <= 0) return targetAmount;
    setTargetAmount(amount);
    setRows(generateDefaultRows(amount));
    return amount;
  }, [targetAmount]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.FundraisingCalculator,
    children: !targetAmount ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TargetAmountStep, {
      setTargetAmount: handleTargetAmount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTableStep, {
      targetAmount: targetAmount,
      setTargetAmount: handleTargetAmount,
      rows: rows,
      setRows: setRows
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 246,
    columnNumber: 5
  }, _this);
};

_s5(FundraisingCalculator, "7+S8/8IX9iq57Lhy3yd9Sr2P24Y=");

_c5 = FundraisingCalculator;
/* harmony default export */ __webpack_exports__["default"] = (FundraisingCalculator);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "TargetAmountStep");
$RefreshReg$(_c2, "GiftTableRow");
$RefreshReg$(_c3, "GiftTable");
$RefreshReg$(_c4, "GiftTableStep");
$RefreshReg$(_c5, "FundraisingCalculator");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbImdlbmVyYXRlRGVmYXVsdFJvd3MiLCJ0b3RhbEFtb3VudCIsInJvd3MiLCJpIiwicHVzaCIsImFtb3VudCIsIk1hdGgiLCJwb3ciLCJnaWZ0Q291bnQiLCJpZCIsIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJ1c2VTdGF0ZSIsInNldEFtb3VudCIsInBhcnNlZEFtb3VudCIsInBhcnNlRmxvYXQiLCJpc1ZhbGlkIiwiaXNOYU4iLCJzdHlsZXMiLCJUYXJnZXRBbW91bnRDb250YWluZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdW0iLCJhcnIiLCJwcm9wZXJ0eSIsInJlZHVjZSIsImFjYyIsInZhbCIsImRvbGxhckZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0RG9sbGFycyIsImZvcm1hdCIsIkdpZnRUYWJsZVJvdyIsInJvdyIsInVwZGF0ZVJvdyIsInRvRml4ZWQiLCJsb2NhbEFtb3VudCIsInNldExvY2FsQW1vdW50IiwibG9jYWxHaWZ0Q291bnQiLCJzZXRMb2NhbEdpZnRDb3VudCIsImhhbmRsZUFtb3VudEJsdXIiLCJ1c2VDYWxsYmFjayIsIm5ld0Ftb3VudCIsIm9uQ2hhbmdlQW1vdW50Iiwib25DaGFuZ2VHaWZ0Q291bnQiLCJuZXdHaWZ0Q291bnQiLCJwYXJzZUludCIsImRvd25sb2FkQ3N2IiwiZGF0YSIsImhlYWRlcnMiLCJtYXAiLCJkIiwiY3N2Iiwiam9pbiIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtaW1lVHlwZSIsImZpbGVOYW1lIiwibmF2aWdhdG9yIiwibXNTYXZlQmxvYiIsIkJsb2IiLCJ0eXBlIiwiVVJMIiwiaHJlZiIsImNyZWF0ZU9iamVjdFVSTCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJsb2NhdGlvbiIsImVuY29kZVVSSUNvbXBvbmVudCIsIkdpZnRUYWJsZSIsInNldFJvd3MiLCJwcmV2Um93cyIsImluZGV4IiwiZmluZEluZGV4IiwiciIsIm5ld1Jvd3MiLCJGb290ZXJSb3ciLCJHaWZ0VGFibGVTdGVwIiwidGFyZ2V0QW1vdW50IiwibG9jYWxUYXJnZXRBbW91bnQiLCJzZXRMb2NhbFRhcmdldEFtb3VudCIsIkdpZnRUYWJsZVRpdGxlIiwiRG93bmxvYWRDc3YiLCJUYWJsZUNvbnRhaW5lciIsIlRhcmdldEFtb3VudFVwZGF0ZSIsIklucHV0Um93IiwidGFibGVLZXkiLCJGdW5kcmFpc2luZ0NhbGN1bGF0b3IiLCJoYW5kbGVUYXJnZXRBbW91bnQiLCJyYXdBbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLFdBQUQsRUFBaUI7QUFDM0MsTUFBTUMsSUFBSSxHQUFHLEVBQWI7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCRCxRQUFJLENBQUNFLElBQUwsQ0FBVTtBQUNSQyxZQUFNLEVBQUdKLFdBQVcsR0FBRyxDQUFmLEdBQXFCSyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlKLENBQVosQ0FEckI7QUFFUkssZUFBUyxFQUFFRixJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlKLENBQVosQ0FGSDtBQUdSTSxRQUFFLGdCQUFTTixDQUFUO0FBSE0sS0FBVjtBQUtEOztBQUVELFNBQU9ELElBQVA7QUFDRCxDQVpEOztBQWNBLElBQU1RLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsZUFBc0IsUUFBdEJBLGVB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QUFJbEMsTUFBTWtCLGtCQUFrQixHQUFHbkQseURBQVcsQ0FBQyxVQUFDb0QsU0FBRCxFQUFlO0FBQ3BELFFBQU01RixNQUFNLEdBQUdVLFVBQVUsQ0FBQ2tGLFNBQUQsQ0FBekI7QUFDQSxRQUFJaEYsS0FBSyxDQUFDWixNQUFELENBQVQsRUFBbUIsT0FBT2lGLFlBQVA7QUFDbkIsUUFBSWpGLE1BQU0sSUFBSSxDQUFkLEVBQWlCLE9BQU9pRixZQUFQO0FBQ2pCM0UsbUJBQWUsQ0FBQ04sTUFBRCxDQUFmO0FBQ0F5RSxXQUFPLENBQUM5RSxtQkFBbUIsQ0FBQ0ssTUFBRCxDQUFwQixDQUFQO0FBQ0EsV0FBT0EsTUFBUDtBQUNELEdBUHFDLEVBT25DLENBQUNpRixZQUFELENBUG1DLENBQXRDO0FBU0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVwRSx5RUFBTSxDQUFDNkUscUJBQXZCO0FBQUEsY0FDSSxDQUFDVCxZQUFELGdCQUNBLHFFQUFDLGdCQUFEO0FBQWtCLHFCQUFlLEVBQUVVO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxnQkFHQSxxRUFBQyxhQUFEO0FBQ0Usa0JBQVksRUFBRVYsWUFEaEI7QUFFRSxxQkFBZSxFQUFFVSxrQkFGbkI7QUFHRSxVQUFJLEVBQUU5RixJQUhSO0FBSUUsYUFBTyxFQUFFNEU7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0EzQkQ7O0lBQU1pQixxQjs7TUFBQUEscUI7QUE2QlNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbGN1bGF0b3ItZW1iZWQuNDI2OGEyMWZkNmUyODc2NGY4OWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnY29tcG9uZW50cy9JbnB1dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GdW5kcmFpc2luZ0NhbGN1bGF0b3IubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVEZWZhdWx0Um93cyA9ICh0b3RhbEFtb3VudCkgPT4ge1xyXG4gIGNvbnN0IHJvd3MgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIHJvd3MucHVzaCh7XHJcbiAgICAgIGFtb3VudDogKHRvdGFsQW1vdW50IC8gNSkgLyAoTWF0aC5wb3coMiwgaSkpLFxyXG4gICAgICBnaWZ0Q291bnQ6IE1hdGgucG93KDIsIGkpLFxyXG4gICAgICBpZDogYHJvd18ke2l9YCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvd3M7XHJcbn07XHJcblxyXG5jb25zdCBUYXJnZXRBbW91bnRTdGVwID0gKHsgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHBhcnNlZEFtb3VudCA9IHBhcnNlRmxvYXQoYW1vdW50KTtcclxuICBjb25zdCBpc1ZhbGlkID0gIWlzTmFOKHBhcnNlZEFtb3VudCkgJiYgcGFyc2VkQW1vdW50ID4gMDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFyZ2V0QW1vdW50U3RlcH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFyZ2V0QW1vdW50Q29udGFpbmVyfT5cclxuICAgICAgICA8aDI+RW50ZXIgeW91ciBmdW5kcmFpc2luZyBnb2FsPC9oMj5cclxuICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYW4gYW1vdW50XCJcclxuICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgb25QcmVzc0VudGVyPXsoKSA9PiBzZXRUYXJnZXRBbW91bnQoYW1vdW50KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhcmdldEFtb3VudChhbW91bnQpfVxyXG4gICAgICAgICAgaW50ZW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICBkaXNhYmxlZD17IWlzVmFsaWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTmV4dCBTdGVwXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuY29uc3Qgc3VtID0gKGFyciwgcHJvcGVydHkpID0+IGFyci5yZWR1Y2UoXHJcbiAgKGFjYywgdmFsKSA9PiBhY2MgKyAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nID8gcHJvcGVydHkodmFsKSA6IHZhbFtwcm9wZXJ0eV0pLFxyXG4gIDAsXHJcbik7XHJcblxyXG5jb25zdCBkb2xsYXJGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xyXG4gIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gIGN1cnJlbmN5OiAnVVNEJyxcclxufSk7XHJcblxyXG5jb25zdCBmb3JtYXREb2xsYXJzID0gdmFsID0+IGRvbGxhckZvcm1hdHRlci5mb3JtYXQodmFsKTtcclxuXHJcbmNvbnN0IEdpZnRUYWJsZVJvdyA9ICh7IHJvdywgdXBkYXRlUm93IH0pID0+IHtcclxuICBjb25zdCBbbG9jYWxBbW91bnQsIHNldExvY2FsQW1vdW50XSA9IHVzZVN0YXRlKHJvdy5hbW91bnQgJSAxID09PSAwID8gcm93LmFtb3VudCA6IHJvdy5hbW91bnQudG9GaXhlZCgyKSk7XHJcbiAgY29uc3QgW2xvY2FsR2lmdENvdW50LCBzZXRMb2NhbEdpZnRDb3VudF0gPSB1c2VTdGF0ZShyb3cuZ2lmdENvdW50ICUgMSA9PT0gMCA/IHJvdy5naWZ0Q291bnQgOiByb3cuZ2lmdENvdW50LnRvRml4ZWQoMikpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBbW91bnRCbHVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3QW1vdW50ID0gcGFyc2VGbG9hdChsb2NhbEFtb3VudCk7XHJcbiAgICBpZiAoaXNOYU4obmV3QW1vdW50KSB8fCBuZXdBbW91bnQgPD0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChuZXdBbW91bnQgJSAxICE9PSAwKSBzZXRMb2NhbEFtb3VudChuZXdBbW91bnQudG9GaXhlZCgyKSk7XHJcbiAgfSwgW2xvY2FsQW1vdW50XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQW1vdW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldExvY2FsQW1vdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0Ftb3VudCA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0Ftb3VudCkgfHwgbmV3QW1vdW50IDw9IDApIHJldHVybjtcclxuICAgIHVwZGF0ZVJvdyh7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgYW1vdW50OiBuZXdBbW91bnQsXHJcbiAgICB9KTtcclxuICB9LCBbcm93XSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VHaWZ0Q291bnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0TG9jYWxHaWZ0Q291bnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgbmV3R2lmdENvdW50ID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0dpZnRDb3VudCkgfHwgbmV3R2lmdENvdW50IDw9IDApIHJldHVybjtcclxuICAgIHVwZGF0ZVJvdyh7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgZ2lmdENvdW50OiBuZXdHaWZ0Q291bnQsXHJcbiAgICB9KTtcclxuICB9LCBbcm93XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0cj5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2xvY2FsQW1vdW50fVxyXG4gICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQW1vdW50fVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVBbW91bnRCbHVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtsb2NhbEdpZnRDb3VudH1cclxuICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJudW1lcmljXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlR2lmdENvdW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD57Zm9ybWF0RG9sbGFycyhyb3cuYW1vdW50ICogcm93LmdpZnRDb3VudCl9PC90ZD5cclxuICAgICAgPHRkPntyb3cuZ2lmdENvdW50ICogNX08L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZG93bmxvYWRDc3YgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlcnMgPSBbJ0dpZnQgQW1vdW50JywgJ051bWJlciBvZiBHaWZ0cycsICdSb3cgVG90YWwnLCAnUHJvc3BlY3RzJ107XHJcbiAgY29uc3Qgcm93cyA9IGRhdGEubWFwKGQgPT4gW2QuYW1vdW50LCBkLmdpZnRDb3VudCwgZC5hbW91bnQgKiBkLmdpZnRDb3VudCwgZC5naWZ0Q291bnQgKiA1XSk7XHJcblxyXG4gIGNvbnN0IGNzdiA9IFtoZWFkZXJzLmpvaW4oJywnKSwgLi4ucm93cy5tYXAocm93ID0+IHJvdy5qb2luKCcsJykpXS5qb2luKCdcXG4nKTtcclxuXHJcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjb25zdCBtaW1lVHlwZSA9ICd0ZXh0L2NzdjtlbmNvZGluZzp1dGYtOCc7XHJcbiAgY29uc3QgZmlsZU5hbWUgPSAnZ2lmdF90YWJsZS5jc3YnO1xyXG5cclxuICBpZiAobmF2aWdhdG9yLm1zU2F2ZUJsb2IpIHsgLy8gSUUxMFxyXG4gICAgbmF2aWdhdG9yLm1zU2F2ZUJsb2IobmV3IEJsb2IoW2Nzdl0sIHtcclxuICAgICAgdHlwZTogbWltZVR5cGVcclxuICAgIH0pLCBmaWxlTmFtZSk7XHJcbiAgfSBlbHNlIGlmIChVUkwgJiYgJ2Rvd25sb2FkJyBpbiBhKSB7IC8vaHRtbDUgQVtkb3dubG9hZF1cclxuICAgIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2Nzdl0sIHtcclxuICAgICAgdHlwZTogbWltZVR5cGVcclxuICAgIH0pKTtcclxuICAgIGEuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGZpbGVOYW1lKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2NhdGlvbi5ocmVmID0gJ2RhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLCcgKyBlbmNvZGVVUklDb21wb25lbnQoY3N2KTsgLy8gb25seSB0aGlzIG1pbWUgdHlwZSBpcyBzdXBwb3J0ZWRcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEdpZnRUYWJsZSA9ICh7IHJvd3MsIHNldFJvd3MgfSkgPT4ge1xyXG5cclxuICBjb25zdCB1cGRhdGVSb3cgPSB1c2VDYWxsYmFjaygocm93KSA9PiB7XHJcbiAgICBzZXRSb3dzKChwcmV2Um93cykgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHByZXZSb3dzLmZpbmRJbmRleChyID0+IHIuaWQgPT09IHJvdy5pZCk7XHJcbiAgICAgIGNvbnN0IG5ld1Jvd3MgPSBbLi4ucHJldlJvd3NdO1xyXG4gICAgICBuZXdSb3dzW2luZGV4XSA9IHJvdztcclxuICAgICAgcmV0dXJuIG5ld1Jvd3M7XHJcbiAgICB9KVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx0YWJsZT5cclxuICAgICAgPHRoZWFkPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0aD5HaWZ0IEFtb3VudDwvdGg+XHJcbiAgICAgICAgICA8dGg+TnVtYmVyIG9mIEdpZnRzPC90aD5cclxuICAgICAgICAgIDx0aD5Sb3cgVG90YWw8L3RoPlxyXG4gICAgICAgICAgPHRoPlByb3NwZWN0czwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIHsgcm93cy5tYXAocm93ID0+IChcclxuICAgICAgICAgIDxHaWZ0VGFibGVSb3cgcm93PXtyb3d9IHVwZGF0ZVJvdz17dXBkYXRlUm93fSBrZXk9e3Jvdy5pZH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8dHIgY2xhc3NOYW1lPXtzdHlsZXMuRm9vdGVyUm93fT5cclxuICAgICAgICAgIDx0ZD5Ub3RhbHM8L3RkPlxyXG4gICAgICAgICAgPHRkPntzdW0ocm93cywgJ2dpZnRDb3VudCcpfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2Zvcm1hdERvbGxhcnMoc3VtKHJvd3MsIHIgPT4gci5hbW91bnQgKiByLmdpZnRDb3VudCkpfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3N1bShyb3dzLCAnZ2lmdENvdW50JykgKiA1fTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdpZnRUYWJsZVN0ZXAgPSAoeyB0YXJnZXRBbW91bnQsIHNldFRhcmdldEFtb3VudCwgcm93cywgc2V0Um93cyB9KSA9PiB7XHJcbiAgY29uc3QgW2xvY2FsVGFyZ2V0QW1vdW50LCBzZXRMb2NhbFRhcmdldEFtb3VudF0gPSB1c2VTdGF0ZSh0YXJnZXRBbW91bnQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5HaWZ0VGFibGVTdGVwfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5HaWZ0VGFibGVUaXRsZX0+XHJcbiAgICAgICAgPGgyPllvdXIgZ2lmdCB0YWJsZTwvaDI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuRG93bmxvYWRDc3Z9IG9uQ2xpY2s9eygpID0+IGRvd25sb2FkQ3N2KHJvd3MpfT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvZG93bmxvYWQuc3ZnXCIgd2lkdGg9ezE0fSBoZWlnaHQ9ezE0fSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgRG93bmxvYWQgUmVzdWx0c1xyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoNj5cclxuICAgICAgICBCYXNlZCBvbiB5b3VyIGZ1bmRyYWlzaW5nIGdvYWxzLCB3ZSd2ZSBjYWxjdWxhdGVkIHRoaXMgb3B0aW1hbCBicmVha2Rvd24gZm9yIHlvdXJcclxuICAgICAgICBvcmdhbml6YXRpb24ncyBmdW5kcmFpc2luZyBpbml0aWF0aXZlcy4gWW91IGNhbiBlZGl0IHRoaXMgdG8gZml0IHlvdXIgcmVxdWlyZW1lbnRzLlxyXG4gICAgICA8L2g2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYWJsZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYXJnZXRBbW91bnRVcGRhdGV9PlxyXG4gICAgICAgICAgSG93IG11Y2ggZG8geW91IHdhbnQgdG8gZnVuZHJhaXNlP1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dFJvd30+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtsb2NhbFRhcmdldEFtb3VudH1cclxuICAgICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBpbnB1dE1vZGU9XCJkZWNpbWFsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldExvY2FsVGFyZ2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBvblByZXNzRW50ZXI9eygpID0+IHNldFRhcmdldEFtb3VudChsb2NhbFRhcmdldEFtb3VudCl9XHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFyZ2V0QW1vdW50KGxvY2FsVGFyZ2V0QW1vdW50KX0gaW50ZW50PVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIFVwZGF0ZSBUYWJsZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxHaWZ0VGFibGUgdGFyZ2V0QW1vdW50PXt0YXJnZXRBbW91bnR9IHJvd3M9e3Jvd3N9IHNldFJvd3M9e3NldFJvd3N9IGtleT17dGFibGVLZXl9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuY29uc3QgRnVuZHJhaXNpbmdDYWxjdWxhdG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0YXJnZXRBbW91bnQsIHNldFRhcmdldEFtb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAvLyBDcmVhdGUgYSBuZXcgdGFibGUgd2hlbmV2ZXIgdGhlIHRhcmdldCBhbW91bnQgY2hhbmdlc1xyXG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlRGVmYXVsdFJvd3MoMTAwKSk7XHJcbiAgY29uc3QgaGFuZGxlVGFyZ2V0QW1vdW50ID0gdXNlQ2FsbGJhY2soKHJhd0Ftb3VudCkgPT4ge1xyXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChyYXdBbW91bnQpO1xyXG4gICAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiB0YXJnZXRBbW91bnQ7XHJcbiAgICBpZiAoYW1vdW50IDw9IDApIHJldHVybiB0YXJnZXRBbW91bnQ7XHJcbiAgICBzZXRUYXJnZXRBbW91bnQoYW1vdW50KTtcclxuICAgIHNldFJvd3MoZ2VuZXJhdGVEZWZhdWx0Um93cyhhbW91bnQpKTtcclxuICAgIHJldHVybiBhbW91bnQ7XHJcbiAgfSwgW3RhcmdldEFtb3VudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GdW5kcmFpc2luZ0NhbGN1bGF0b3J9PlxyXG4gICAgICB7ICF0YXJnZXRBbW91bnQgPyAoXHJcbiAgICAgICAgPFRhcmdldEFtb3VudFN0ZXAgc2V0VGFyZ2V0QW1vdW50PXtoYW5kbGVUYXJnZXRBbW91bnR9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEdpZnRUYWJsZVN0ZXBcclxuICAgICAgICAgIHRhcmdldEFtb3VudD17dGFyZ2V0QW1vdW50fVxyXG4gICAgICAgICAgc2V0VGFyZ2V0QW1vdW50PXtoYW5kbGVUYXJnZXRBbW91bnR9XHJcbiAgICAgICAgICByb3dzPXtyb3dzfVxyXG4gICAgICAgICAgc2V0Um93cz17c2V0Um93c31cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmRyYWlzaW5nQ2FsY3VsYXRvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==