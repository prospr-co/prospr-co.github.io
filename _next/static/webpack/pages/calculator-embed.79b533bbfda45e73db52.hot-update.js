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
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbImdlbmVyYXRlRGVmYXVsdFJvd3MiLCJ0b3RhbEFtb3VudCIsInJvd3MiLCJpIiwicHVzaCIsImFtb3VudCIsIk1hdGgiLCJwb3ciLCJnaWZ0Q291bnQiLCJpZCIsIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJ1c2VTdGF0ZSIsInNldEFtb3VudCIsInBhcnNlZEFtb3VudCIsInBhcnNlRmxvYXQiLCJpc1ZhbGlkIiwiaXNOYU4iLCJzdHlsZXMiLCJUYXJnZXRBbW91bnRDb250YWluZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdW0iLCJhcnIiLCJwcm9wZXJ0eSIsInJlZHVjZSIsImFjYyIsInZhbCIsImRvbGxhckZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0RG9sbGFycyIsImZvcm1hdCIsIkdpZnRUYWJsZVJvdyIsInJvdyIsInVwZGF0ZVJvdyIsInRvRml4ZWQiLCJsb2NhbEFtb3VudCIsInNldExvY2FsQW1vdW50IiwibG9jYWxHaWZ0Q291bnQiLCJzZXRMb2NhbEdpZnRDb3VudCIsImhhbmRsZUFtb3VudEJsdXIiLCJ1c2VDYWxsYmFjayIsIm5ld0Ftb3VudCIsIm9uQ2hhbmdlQW1vdW50Iiwib25DaGFuZ2VHaWZ0Q291bnQiLCJuZXdHaWZ0Q291bnQiLCJwYXJzZUludCIsImRvd25sb2FkQ3N2IiwiZGF0YSIsImhlYWRlcnMiLCJtYXAiLCJkIiwiY3N2Iiwiam9pbiIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtaW1lVHlwZSIsImZpbGVOYW1lIiwibmF2aWdhdG9yIiwibXNTYXZlQmxvYiIsIkJsb2IiLCJ0eXBlIiwiVVJMIiwiaHJlZiIsImNyZWF0ZU9iamVjdFVSTCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJsb2NhdGlvbiIsImVuY29kZVVSSUNvbXBvbmVudCIsIkdpZnRUYWJsZSIsInNldFJvd3MiLCJwcmV2Um93cyIsImluZGV4IiwiZmluZEluZGV4IiwiciIsIm5ld1Jvd3MiLCJGb290ZXJSb3ciLCJHaWZ0VGFibGVTdGVwIiwidGFyZ2V0QW1vdW50IiwibG9jYWxUYXJnZXRBbW91bnQiLCJzZXRMb2NhbFRhcmdldEFtb3VudCIsIkdpZnRUYWJsZVRpdGxlIiwiRG93bmxvYWRDc3YiLCJUYWJsZUNvbnRhaW5lciIsIlRhcmdldEFtb3VudFVwZGF0ZSIsIklucHV0Um93IiwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yIiwiaGFuZGxlVGFyZ2V0QW1vdW50IiwicmF3QW1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxXQUFELEVBQWlCO0FBQzNDLE1BQU1DLElBQUksR0FBRyxFQUFiOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQkQsUUFBSSxDQUFDRSxJQUFMLENBQVU7QUFDUkMsWUFBTSxFQUFHSixXQUFXLEdBQUcsQ0FBZixHQUFxQkssSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZSixDQUFaLENBRHJCO0FBRVJLLGVBQVMsRUFBRUYsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZSixDQUFaLENBRkg7QUFHUk0sUUFBRSxnQkFBU04sQ0FBVDtBQUhNLEtBQVY7QUFLRDs7QUFFRCxTQUFPRCxJQUFQO0FBQ0QsQ0FaRDs7QUFjQSxJQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLGVBQXNCLFFBQXRCQSxlQUFzQjs7QUFBQSxr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RCx5REFBVyxDQUFDLFVBQUNtRCxTQUFELEVBQWU7QUFDcEQsUUFBTTNGLE1BQU0sR0FBR1UsVUFBVSxDQUFDaUYsU0FBRCxDQUF6QjtBQUNBLFFBQUkvRSxLQUFLLENBQUNaLE1BQUQsQ0FBVCxFQUFtQixPQUFPaUYsWUFBUDtBQUNuQixRQUFJakYsTUFBTSxJQUFJLENBQWQsRUFBaUIsT0FBT2lGLFlBQVA7QUFDakIzRSxtQkFBZSxDQUFDTixNQUFELENBQWY7QUFDQXlFLFdBQU8sQ0FBQzlFLG1CQUFtQixDQUFDSyxNQUFELENBQXBCLENBQVA7QUFDQSxXQUFPQSxNQUFQO0FBQ0QsR0FQcUMsRUFPbkMsQ0FBQ2lGLFlBQUQsQ0FQbUMsQ0FBdEM7QUFTQSxzQkFDRTtBQUFLLGFBQVMsRUFBRXBFLHlFQUFNLENBQUM0RSxxQkFBdkI7QUFBQSxjQUNJLENBQUNSLFlBQUQsZ0JBQ0EscUVBQUMsZ0JBQUQ7QUFBa0IscUJBQWUsRUFBRVM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGdCQUdBLHFFQUFDLGFBQUQ7QUFDRSxrQkFBWSxFQUFFVCxZQURoQjtBQUVFLHFCQUFlLEVBQUVTLGtCQUZuQjtBQUdFLFVBQUksRUFBRTdGLElBSFI7QUFJRSxhQUFPLEVBQUU0RTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQTNCRDs7SUFBTWdCLHFCOztNQUFBQSxxQjtBQTZCU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FsY3VsYXRvci1lbWJlZC43OWI1MzNiYmZkYTQ1ZTczZGI1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBJbnB1dCBmcm9tICdjb21wb25lbnRzL0lucHV0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Z1bmRyYWlzaW5nQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBnZW5lcmF0ZURlZmF1bHRSb3dzID0gKHRvdGFsQW1vdW50KSA9PiB7XHJcbiAgY29uc3Qgcm93cyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgcm93cy5wdXNoKHtcclxuICAgICAgYW1vdW50OiAodG90YWxBbW91bnQgLyA1KSAvIChNYXRoLnBvdygyLCBpKSksXHJcbiAgICAgIGdpZnRDb3VudDogTWF0aC5wb3coMiwgaSksXHJcbiAgICAgIGlkOiBgcm93XyR7aX1gLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm93cztcclxufTtcclxuXHJcbmNvbnN0IFRhcmdldEFtb3VudFN0ZXAgPSAoeyBzZXRUYXJnZXRBbW91bnQgfSkgPT4ge1xyXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgcGFyc2VkQW1vdW50ID0gcGFyc2VGbG9hdChhbW91bnQpO1xyXG4gIGNvbnN0IGlzVmFsaWQgPSAhaXNOYU4ocGFyc2VkQW1vdW50KSAmJiBwYXJzZWRBbW91bnQgPiAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYXJnZXRBbW91bnRTdGVwfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYXJnZXRBbW91bnRDb250YWluZXJ9PlxyXG4gICAgICAgIDxoMj5FbnRlciB5b3VyIGZ1bmRyYWlzaW5nIGdvYWw8L2gyPlxyXG4gICAgICAgIEhvdyBtdWNoIGRvIHlvdSB3YW50IHRvIGZ1bmRyYWlzZT9cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXthbW91bnR9XHJcbiAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgaW5wdXRNb2RlPVwiZGVjaW1hbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHN0ZXA9ezAuMDF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhbiBhbW91bnRcIlxyXG4gICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICBvblByZXNzRW50ZXI9eygpID0+IHNldFRhcmdldEFtb3VudChhbW91bnQpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFyZ2V0QW1vdW50KGFtb3VudCl9XHJcbiAgICAgICAgICBpbnRlbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIGZpbGxcclxuICAgICAgICAgIGRpc2FibGVkPXshaXNWYWxpZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBOZXh0IFN0ZXBcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5jb25zdCBzdW0gPSAoYXJyLCBwcm9wZXJ0eSkgPT4gYXJyLnJlZHVjZShcclxuICAoYWNjLCB2YWwpID0+IGFjYyArICh0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbicgPyBwcm9wZXJ0eSh2YWwpIDogdmFsW3Byb3BlcnR5XSksXHJcbiAgMCxcclxuKTtcclxuXHJcbmNvbnN0IGRvbGxhckZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XHJcbiAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgY3VycmVuY3k6ICdVU0QnLFxyXG59KTtcclxuXHJcbmNvbnN0IGZvcm1hdERvbGxhcnMgPSB2YWwgPT4gZG9sbGFyRm9ybWF0dGVyLmZvcm1hdCh2YWwpO1xyXG5cclxuY29uc3QgR2lmdFRhYmxlUm93ID0gKHsgcm93LCB1cGRhdGVSb3cgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbEFtb3VudCwgc2V0TG9jYWxBbW91bnRdID0gdXNlU3RhdGUocm93LmFtb3VudCAlIDEgPT09IDAgPyByb3cuYW1vdW50IDogcm93LmFtb3VudC50b0ZpeGVkKDIpKTtcclxuICBjb25zdCBbbG9jYWxHaWZ0Q291bnQsIHNldExvY2FsR2lmdENvdW50XSA9IHVzZVN0YXRlKHJvdy5naWZ0Q291bnQgJSAxID09PSAwID8gcm93LmdpZnRDb3VudCA6IHJvdy5naWZ0Q291bnQudG9GaXhlZCgyKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFtb3VudEJsdXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdBbW91bnQgPSBwYXJzZUZsb2F0KGxvY2FsQW1vdW50KTtcclxuICAgIGlmIChpc05hTihuZXdBbW91bnQpIHx8IG5ld0Ftb3VudCA8PSAwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKG5ld0Ftb3VudCAlIDEgIT09IDApIHNldExvY2FsQW1vdW50KG5ld0Ftb3VudC50b0ZpeGVkKDIpKTtcclxuICB9LCBbbG9jYWxBbW91bnRdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VBbW91bnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0TG9jYWxBbW91bnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgbmV3QW1vdW50ID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoaXNOYU4obmV3QW1vdW50KSB8fCBuZXdBbW91bnQgPD0gMCkgcmV0dXJuO1xyXG4gICAgdXBkYXRlUm93KHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBhbW91bnQ6IG5ld0Ftb3VudCxcclxuICAgIH0pO1xyXG4gIH0sIFtyb3ddKTtcclxuICBjb25zdCBvbkNoYW5nZUdpZnRDb3VudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRMb2NhbEdpZnRDb3VudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zdCBuZXdHaWZ0Q291bnQgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoaXNOYU4obmV3R2lmdENvdW50KSB8fCBuZXdHaWZ0Q291bnQgPD0gMCkgcmV0dXJuO1xyXG4gICAgdXBkYXRlUm93KHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBnaWZ0Q291bnQ6IG5ld0dpZnRDb3VudCxcclxuICAgIH0pO1xyXG4gIH0sIFtyb3ddKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHRyPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB2YWx1ZT17bG9jYWxBbW91bnR9XHJcbiAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgaW5wdXRNb2RlPVwiZGVjaW1hbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHN0ZXA9ezAuMDF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VBbW91bnR9XHJcbiAgICAgICAgICBvbkJsdXI9e2hhbmRsZUFtb3VudEJsdXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2xvY2FsR2lmdENvdW50fVxyXG4gICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cIm51bWVyaWNcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VHaWZ0Q291bnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPntmb3JtYXREb2xsYXJzKHJvdy5hbW91bnQgKiByb3cuZ2lmdENvdW50KX08L3RkPlxyXG4gICAgICA8dGQ+e3Jvdy5naWZ0Q291bnQgKiA1fTwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBkb3dubG9hZENzdiA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVycyA9IFsnR2lmdCBBbW91bnQnLCAnTnVtYmVyIG9mIEdpZnRzJywgJ1JvdyBUb3RhbCcsICdQcm9zcGVjdHMnXTtcclxuICBjb25zdCByb3dzID0gZGF0YS5tYXAoZCA9PiBbZC5hbW91bnQsIGQuZ2lmdENvdW50LCBkLmFtb3VudCAqIGQuZ2lmdENvdW50LCBkLmdpZnRDb3VudCAqIDVdKTtcclxuXHJcbiAgY29uc3QgY3N2ID0gW2hlYWRlcnMuam9pbignLCcpLCAuLi5yb3dzLm1hcChyb3cgPT4gcm93LmpvaW4oJywnKSldLmpvaW4oJ1xcbicpO1xyXG5cclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGNvbnN0IG1pbWVUeXBlID0gJ3RleHQvY3N2O2VuY29kaW5nOnV0Zi04JztcclxuICBjb25zdCBmaWxlTmFtZSA9ICdnaWZ0X3RhYmxlLmNzdic7XHJcblxyXG4gIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikgeyAvLyBJRTEwXHJcbiAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihuZXcgQmxvYihbY3N2XSwge1xyXG4gICAgICB0eXBlOiBtaW1lVHlwZVxyXG4gICAgfSksIGZpbGVOYW1lKTtcclxuICB9IGVsc2UgaWYgKFVSTCAmJiAnZG93bmxvYWQnIGluIGEpIHsgLy9odG1sNSBBW2Rvd25sb2FkXVxyXG4gICAgYS5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbY3N2XSwge1xyXG4gICAgICB0eXBlOiBtaW1lVHlwZVxyXG4gICAgfSkpO1xyXG4gICAgYS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZmlsZU5hbWUpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgIGEuY2xpY2soKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvY2F0aW9uLmhyZWYgPSAnZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0sJyArIGVuY29kZVVSSUNvbXBvbmVudChjc3YpOyAvLyBvbmx5IHRoaXMgbWltZSB0eXBlIGlzIHN1cHBvcnRlZFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgR2lmdFRhYmxlID0gKHsgcm93cywgc2V0Um93cyB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVJvdyA9IHVzZUNhbGxiYWNrKChyb3cpID0+IHtcclxuICAgIHNldFJvd3MoKHByZXZSb3dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gcHJldlJvd3MuZmluZEluZGV4KHIgPT4gci5pZCA9PT0gcm93LmlkKTtcclxuICAgICAgY29uc3QgbmV3Um93cyA9IFsuLi5wcmV2Um93c107XHJcbiAgICAgIG5ld1Jvd3NbaW5kZXhdID0gcm93O1xyXG4gICAgICByZXR1cm4gbmV3Um93cztcclxuICAgIH0pXHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHRhYmxlPlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPkdpZnQgQW1vdW50PC90aD5cclxuICAgICAgICAgIDx0aD5OdW1iZXIgb2YgR2lmdHM8L3RoPlxyXG4gICAgICAgICAgPHRoPlJvdyBUb3RhbDwvdGg+XHJcbiAgICAgICAgICA8dGg+UHJvc3BlY3RzPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgICAgeyByb3dzLm1hcChyb3cgPT4gKFxyXG4gICAgICAgICAgPEdpZnRUYWJsZVJvdyByb3c9e3Jvd30gdXBkYXRlUm93PXt1cGRhdGVSb3d9IGtleT17cm93LmlkfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDx0ciBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJSb3d9PlxyXG4gICAgICAgICAgPHRkPlRvdGFsczwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3N1bShyb3dzLCAnZ2lmdENvdW50Jyl9PC90ZD5cclxuICAgICAgICAgIDx0ZD57Zm9ybWF0RG9sbGFycyhzdW0ocm93cywgciA9PiByLmFtb3VudCAqIHIuZ2lmdENvdW50KSl9PC90ZD5cclxuICAgICAgICAgIDx0ZD57c3VtKHJvd3MsICdnaWZ0Q291bnQnKSAqIDV9PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR2lmdFRhYmxlU3RlcCA9ICh7IHRhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50LCByb3dzLCBzZXRSb3dzIH0pID0+IHtcclxuICBjb25zdCBbbG9jYWxUYXJnZXRBbW91bnQsIHNldExvY2FsVGFyZ2V0QW1vdW50XSA9IHVzZVN0YXRlKHRhcmdldEFtb3VudCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdpZnRUYWJsZVN0ZXB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdpZnRUYWJsZVRpdGxlfT5cclxuICAgICAgICA8aDI+WW91ciBnaWZ0IHRhYmxlPC9oMj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5Eb3dubG9hZENzdn0gb25DbGljaz17KCkgPT4gZG93bmxvYWRDc3Yocm93cyl9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9kb3dubG9hZC5zdmdcIiB3aWR0aD17MTR9IGhlaWdodD17MTR9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICBEb3dubG9hZCBSZXN1bHRzXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGg2PlxyXG4gICAgICAgIEJhc2VkIG9uIHlvdXIgZnVuZHJhaXNpbmcgZ29hbHMsIHdlJ3ZlIGNhbGN1bGF0ZWQgdGhpcyBvcHRpbWFsIGJyZWFrZG93biBmb3IgeW91clxyXG4gICAgICAgIG9yZ2FuaXphdGlvbidzIGZ1bmRyYWlzaW5nIGluaXRpYXRpdmVzLiBZb3UgY2FuIGVkaXQgdGhpcyB0byBmaXQgeW91ciByZXF1aXJlbWVudHMuXHJcbiAgICAgIDwvaDY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYmxlQ29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhcmdldEFtb3VudFVwZGF0ZX0+XHJcbiAgICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0Um93fT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2xvY2FsVGFyZ2V0QW1vdW50fVxyXG4gICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIHN0ZXA9ezAuMDF9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TG9jYWxUYXJnZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIG9uUHJlc3NFbnRlcj17KCkgPT4gc2V0VGFyZ2V0QW1vdW50KGxvY2FsVGFyZ2V0QW1vdW50KX1cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXRBbW91bnQobG9jYWxUYXJnZXRBbW91bnQpfSBpbnRlbnQ9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgVXBkYXRlIFRhYmxlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEdpZnRUYWJsZSB0YXJnZXRBbW91bnQ9e3RhcmdldEFtb3VudH0gcm93cz17cm93c30gc2V0Um93cz17c2V0Um93c30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5jb25zdCBGdW5kcmFpc2luZ0NhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIC8vIENyZWF0ZSBhIG5ldyB0YWJsZSB3aGVuZXZlciB0aGUgdGFyZ2V0IGFtb3VudCBjaGFuZ2VzXHJcbiAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVEZWZhdWx0Um93cygxMDApKTtcclxuICBjb25zdCBoYW5kbGVUYXJnZXRBbW91bnQgPSB1c2VDYWxsYmFjaygocmF3QW1vdW50KSA9PiB7XHJcbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KHJhd0Ftb3VudCk7XHJcbiAgICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIHRhcmdldEFtb3VudDtcclxuICAgIGlmIChhbW91bnQgPD0gMCkgcmV0dXJuIHRhcmdldEFtb3VudDtcclxuICAgIHNldFRhcmdldEFtb3VudChhbW91bnQpO1xyXG4gICAgc2V0Um93cyhnZW5lcmF0ZURlZmF1bHRSb3dzKGFtb3VudCkpO1xyXG4gICAgcmV0dXJuIGFtb3VudDtcclxuICB9LCBbdGFyZ2V0QW1vdW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZ1bmRyYWlzaW5nQ2FsY3VsYXRvcn0+XHJcbiAgICAgIHsgIXRhcmdldEFtb3VudCA/IChcclxuICAgICAgICA8VGFyZ2V0QW1vdW50U3RlcCBzZXRUYXJnZXRBbW91bnQ9e2hhbmRsZVRhcmdldEFtb3VudH0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8R2lmdFRhYmxlU3RlcFxyXG4gICAgICAgICAgdGFyZ2V0QW1vdW50PXt0YXJnZXRBbW91bnR9XHJcbiAgICAgICAgICBzZXRUYXJnZXRBbW91bnQ9e2hhbmRsZVRhcmdldEFtb3VudH1cclxuICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgICBzZXRSb3dzPXtzZXRSb3dzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVuZHJhaXNpbmdDYWxjdWxhdG9yO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9