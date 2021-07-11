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

  var targetAmount = _ref3.targetAmount;

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
          children: "Gift Amount"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
          children: "Number of Gifts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
          children: "Row Total"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
          children: "Prospects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
      children: [rows.map(function (row) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTableRow, {
          row: row,
          updateRow: updateRow
        }, row.id, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
        className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.FooterRow,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: "Totals"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: sum(rows, 'giftCount')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: formatDollars(sum(rows, function (r) {
            return r.amount * r.giftCount;
          }))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: sum(rows, 'giftCount') * 5
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 5
  }, _this);
};

_s3(GiftTable, "0Ptn0qjfyNuc6yrIWfs4zDrJbWc=");

_c3 = GiftTable;

var GiftTableStep = function GiftTableStep(_ref4) {
  _s4();

  var targetAmount = _ref4.targetAmount,
      setTargetAmount = _ref4.setTargetAmount,
      tableKey = _ref4.tableKey;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(targetAmount),
      localTargetAmount = _useState5[0],
      setLocalTargetAmount = _useState5[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.GiftTableStep,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.GiftTableTitle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Your gift table"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
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
          lineNumber: 198,
          columnNumber: 11
        }, _this), "Download Results"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
      children: "Based on your fundraising goals, we've calculated this optimal breakdown for your organization's fundraising initiatives. You can edit this to fit your requirements."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
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
            lineNumber: 211,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            onClick: function onClick() {
              return setTargetAmount(localTargetAmount);
            },
            intent: "primary",
            children: "Update Table"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTable, {
        targetAmount: targetAmount
      }, tableKey, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 194,
    columnNumber: 5
  }, _this);
};

_s4(GiftTableStep, "fOQGaL/O+zzvlMTKNd+3VoZ0hFo=");

_c4 = GiftTableStep;

var FundraisingCalculator = function FundraisingCalculator() {
  _s5();

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
      lineNumber: 249,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GiftTableStep, {
      targetAmount: targetAmount,
      setTargetAmount: handleTargetAmount,
      tableKey: "table_".concat(tableKey)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 247,
    columnNumber: 5
  }, _this);
};

_s5(FundraisingCalculator, "BLQO/8xum3aPGFH0jVGa5jhoYdw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbImdlbmVyYXRlRGVmYXVsdFJvd3MiLCJ0b3RhbEFtb3VudCIsInJvd3MiLCJpIiwicHVzaCIsImFtb3VudCIsIk1hdGgiLCJwb3ciLCJnaWZ0Q291bnQiLCJpZCIsIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJ1c2VTdGF0ZSIsInNldEFtb3VudCIsInBhcnNlZEFtb3VudCIsInBhcnNlRmxvYXQiLCJpc1ZhbGlkIiwiaXNOYU4iLCJzdHlsZXMiLCJUYXJnZXRBbW91bnRDb250YWluZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdW0iLCJhcnIiLCJwcm9wZXJ0eSIsInJlZHVjZSIsImFjYyIsInZhbCIsImRvbGxhckZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0RG9sbGFycyIsImZvcm1hdCIsIkdpZnRUYWJsZVJvdyIsInJvdyIsInVwZGF0ZVJvdyIsInRvRml4ZWQiLCJsb2NhbEFtb3VudCIsInNldExvY2FsQW1vdW50IiwibG9jYWxHaWZ0Q291bnQiLCJzZXRMb2NhbEdpZnRDb3VudCIsImhhbmRsZUFtb3VudEJsdXIiLCJ1c2VDYWxsYmFjayIsIm5ld0Ftb3VudCIsIm9uQ2hhbmdlQW1vdW50Iiwib25DaGFuZ2VHaWZ0Q291bnQiLCJuZXdHaWZ0Q291bnQiLCJwYXJzZUludCIsImRvd25sb2FkQ3N2IiwiZGF0YSIsImhlYWRlcnMiLCJtYXAiLCJkIiwiY3N2Iiwiam9pbiIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtaW1lVHlwZSIsImZpbGVOYW1lIiwibmF2aWdhdG9yIiwibXNTYXZlQmxvYiIsIkJsb2IiLCJ0eXBlIiwiVVJMIiwiaHJlZiIsImNyZWF0ZU9iamVjdFVSTCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJsb2NhdGlvbiIsImVuY29kZVVSSUNvbXBvbmVudCIsIkdpZnRUYWJsZSIsInRhcmdldEFtb3VudCIsInNldFJvd3MiLCJwcmV2Um93cyIsImluZGV4IiwiZmluZEluZGV4IiwiciIsIm5ld1Jvd3MiLCJGb290ZXJSb3ciLCJHaWZ0VGFibGVTdGVwIiwidGFibGVLZXkiLCJsb2NhbFRhcmdldEFtb3VudCIsInNldExvY2FsVGFyZ2V0QW1vdW50IiwiR2lmdFRhYmxlVGl0bGUiLCJEb3dubG9hZENzdiIsIlRhYmxlQ29udGFpbmVyIiwiVGFyZ2V0QW1vdW50VXBkYXRlIiwiSW5wdXRSb3ciLCJGdW5kcmFpc2luZ0NhbGN1bGF0b3IiLCJzZXRUYWJsZUtleSIsImhhbmRsZVRhcmdldEFtb3VudCIsInJhd0Ftb3VudCIsImsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLFdBQUQsRUFBaUI7QUFDM0MsTUFBTUMsSUFBSSxHQUFHLEVBQWI7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCRCxRQUFJLENBQUNFLElBQUwsQ0FBVTtBQUNSQyxZQUFNLEVBQUdKLFdBQVcsR0FBRyxDQUFmLEdBQXFCSyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlKLENBQVosQ0FEckI7QUFFUkssZUFBUyxFQUFFRixJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlKLENBQVosQ0FGSDtBQUdSTSxRQUFFLGdCQUFTTixDQUFUO0FBSE0sS0FBVjtBQUtEOztBQUVELFNBQU9ELElBQVA7QUFDRCxDQVpEOztBQWNBLElBQU1RLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBeUI7QUFBQTs7QUFBQSxNQUF0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a0IsR0FBR3BELHlEQUFXLENBQUMsVUFBQ3FELFNBQUQsRUFBZTtBQUNwRCxRQUFNN0YsTUFBTSxHQUFHVSxVQUFVLENBQUNtRixTQUFELENBQXpCO0FBQ0EsUUFBSWpGLEtBQUssQ0FBQ1osTUFBRCxDQUFULEVBQW1CLE9BQU95RSxZQUFQO0FBQ25CLFFBQUl6RSxNQUFNLElBQUksQ0FBZCxFQUFpQixPQUFPeUUsWUFBUDtBQUNqQm5FLG1CQUFlLENBQUNOLE1BQUQsQ0FBZjtBQUNBMkYsZUFBVyxDQUFDLFVBQUFHLENBQUM7QUFBQSxhQUFJQSxDQUFDLEdBQUcsQ0FBUjtBQUFBLEtBQUYsQ0FBWDtBQUNBLFdBQU85RixNQUFQO0FBQ0QsR0FQcUMsRUFPbkMsQ0FBQ3lFLFlBQUQsQ0FQbUMsQ0FBdEM7QUFTQSxzQkFDRTtBQUFLLGFBQVMsRUFBRTVELHlFQUFNLENBQUM2RSxxQkFBdkI7QUFBQSxjQUNJLENBQUNqQixZQUFELGdCQUNBLHFFQUFDLGdCQUFEO0FBQWtCLHFCQUFlLEVBQUVtQjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZ0JBR0EscUVBQUMsYUFBRDtBQUNFLGtCQUFZLEVBQUVuQixZQURoQjtBQUVFLHFCQUFlLEVBQUVtQixrQkFGbkI7QUFHRSxjQUFRLGtCQUFXVixRQUFYO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBMUJEOztJQUFNUSxxQjs7TUFBQUEscUI7QUE0QlNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbGN1bGF0b3ItZW1iZWQuNjIyNjk4NGJhMmQ2YTcwMWYxNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnY29tcG9uZW50cy9JbnB1dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GdW5kcmFpc2luZ0NhbGN1bGF0b3IubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVEZWZhdWx0Um93cyA9ICh0b3RhbEFtb3VudCkgPT4ge1xyXG4gIGNvbnN0IHJvd3MgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIHJvd3MucHVzaCh7XHJcbiAgICAgIGFtb3VudDogKHRvdGFsQW1vdW50IC8gNSkgLyAoTWF0aC5wb3coMiwgaSkpLFxyXG4gICAgICBnaWZ0Q291bnQ6IE1hdGgucG93KDIsIGkpLFxyXG4gICAgICBpZDogYHJvd18ke2l9YCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvd3M7XHJcbn07XHJcblxyXG5jb25zdCBUYXJnZXRBbW91bnRTdGVwID0gKHsgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHBhcnNlZEFtb3VudCA9IHBhcnNlRmxvYXQoYW1vdW50KTtcclxuICBjb25zdCBpc1ZhbGlkID0gIWlzTmFOKHBhcnNlZEFtb3VudCkgJiYgcGFyc2VkQW1vdW50ID4gMDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFyZ2V0QW1vdW50U3RlcH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFyZ2V0QW1vdW50Q29udGFpbmVyfT5cclxuICAgICAgICA8aDI+RW50ZXIgeW91ciBmdW5kcmFpc2luZyBnb2FsPC9oMj5cclxuICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYW4gYW1vdW50XCJcclxuICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgb25QcmVzc0VudGVyPXsoKSA9PiBzZXRUYXJnZXRBbW91bnQoYW1vdW50KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhcmdldEFtb3VudChhbW91bnQpfVxyXG4gICAgICAgICAgaW50ZW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICBkaXNhYmxlZD17IWlzVmFsaWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTmV4dCBTdGVwXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuY29uc3Qgc3VtID0gKGFyciwgcHJvcGVydHkpID0+IGFyci5yZWR1Y2UoXHJcbiAgKGFjYywgdmFsKSA9PiBhY2MgKyAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nID8gcHJvcGVydHkodmFsKSA6IHZhbFtwcm9wZXJ0eV0pLFxyXG4gIDAsXHJcbik7XHJcblxyXG5jb25zdCBkb2xsYXJGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xyXG4gIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gIGN1cnJlbmN5OiAnVVNEJyxcclxufSk7XHJcblxyXG5jb25zdCBmb3JtYXREb2xsYXJzID0gdmFsID0+IGRvbGxhckZvcm1hdHRlci5mb3JtYXQodmFsKTtcclxuXHJcbmNvbnN0IEdpZnRUYWJsZVJvdyA9ICh7IHJvdywgdXBkYXRlUm93IH0pID0+IHtcclxuICBjb25zdCBbbG9jYWxBbW91bnQsIHNldExvY2FsQW1vdW50XSA9IHVzZVN0YXRlKHJvdy5hbW91bnQgJSAxID09PSAwID8gcm93LmFtb3VudCA6IHJvdy5hbW91bnQudG9GaXhlZCgyKSk7XHJcbiAgY29uc3QgW2xvY2FsR2lmdENvdW50LCBzZXRMb2NhbEdpZnRDb3VudF0gPSB1c2VTdGF0ZShyb3cuZ2lmdENvdW50ICUgMSA9PT0gMCA/IHJvdy5naWZ0Q291bnQgOiByb3cuZ2lmdENvdW50LnRvRml4ZWQoMikpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBbW91bnRCbHVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3QW1vdW50ID0gcGFyc2VGbG9hdChsb2NhbEFtb3VudCk7XHJcbiAgICBpZiAoaXNOYU4obmV3QW1vdW50KSB8fCBuZXdBbW91bnQgPD0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChuZXdBbW91bnQgJSAxICE9PSAwKSBzZXRMb2NhbEFtb3VudChuZXdBbW91bnQudG9GaXhlZCgyKSk7XHJcbiAgfSwgW2xvY2FsQW1vdW50XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQW1vdW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldExvY2FsQW1vdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IG5ld0Ftb3VudCA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0Ftb3VudCkgfHwgbmV3QW1vdW50IDw9IDApIHJldHVybjtcclxuICAgIHVwZGF0ZVJvdyh7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgYW1vdW50OiBuZXdBbW91bnQsXHJcbiAgICB9KTtcclxuICB9LCBbcm93XSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VHaWZ0Q291bnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0TG9jYWxHaWZ0Q291bnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgbmV3R2lmdENvdW50ID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKGlzTmFOKG5ld0dpZnRDb3VudCkgfHwgbmV3R2lmdENvdW50IDw9IDApIHJldHVybjtcclxuICAgIHVwZGF0ZVJvdyh7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgZ2lmdENvdW50OiBuZXdHaWZ0Q291bnQsXHJcbiAgICB9KTtcclxuICB9LCBbcm93XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0cj5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2xvY2FsQW1vdW50fVxyXG4gICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQW1vdW50fVxyXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVBbW91bnRCbHVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtsb2NhbEdpZnRDb3VudH1cclxuICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBpbnB1dE1vZGU9XCJudW1lcmljXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlR2lmdENvdW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD57Zm9ybWF0RG9sbGFycyhyb3cuYW1vdW50ICogcm93LmdpZnRDb3VudCl9PC90ZD5cclxuICAgICAgPHRkPntyb3cuZ2lmdENvdW50ICogNX08L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZG93bmxvYWRDc3YgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlcnMgPSBbJ0dpZnQgQW1vdW50JywgJ051bWJlciBvZiBHaWZ0cycsICdSb3cgVG90YWwnLCAnUHJvc3BlY3RzJ107XHJcbiAgY29uc3Qgcm93cyA9IGRhdGEubWFwKGQgPT4gW2QuYW1vdW50LCBkLmdpZnRDb3VudCwgZC5hbW91bnQgKiBkLmdpZnRDb3VudCwgZC5naWZ0Q291bnQgKiA1XSk7XHJcblxyXG4gIGNvbnN0IGNzdiA9IFtoZWFkZXJzLmpvaW4oJywnKSwgLi4ucm93cy5tYXAocm93ID0+IHJvdy5qb2luKCcsJykpXS5qb2luKCdcXG4nKTtcclxuXHJcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjb25zdCBtaW1lVHlwZSA9ICd0ZXh0L2NzdjtlbmNvZGluZzp1dGYtOCc7XHJcbiAgY29uc3QgZmlsZU5hbWUgPSAnZ2lmdF90YWJsZS5jc3YnO1xyXG5cclxuICBpZiAobmF2aWdhdG9yLm1zU2F2ZUJsb2IpIHsgLy8gSUUxMFxyXG4gICAgbmF2aWdhdG9yLm1zU2F2ZUJsb2IobmV3IEJsb2IoW2Nzdl0sIHtcclxuICAgICAgdHlwZTogbWltZVR5cGVcclxuICAgIH0pLCBmaWxlTmFtZSk7XHJcbiAgfSBlbHNlIGlmIChVUkwgJiYgJ2Rvd25sb2FkJyBpbiBhKSB7IC8vaHRtbDUgQVtkb3dubG9hZF1cclxuICAgIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2Nzdl0sIHtcclxuICAgICAgdHlwZTogbWltZVR5cGVcclxuICAgIH0pKTtcclxuICAgIGEuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGZpbGVOYW1lKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2NhdGlvbi5ocmVmID0gJ2RhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLCcgKyBlbmNvZGVVUklDb21wb25lbnQoY3N2KTsgLy8gb25seSB0aGlzIG1pbWUgdHlwZSBpcyBzdXBwb3J0ZWRcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEdpZnRUYWJsZSA9ICh7IHRhcmdldEFtb3VudCB9KSA9PiB7XHJcbiAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVEZWZhdWx0Um93cyh0YXJnZXRBbW91bnQpKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUm93ID0gdXNlQ2FsbGJhY2soKHJvdykgPT4ge1xyXG4gICAgc2V0Um93cygocHJldlJvd3MpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBwcmV2Um93cy5maW5kSW5kZXgociA9PiByLmlkID09PSByb3cuaWQpO1xyXG4gICAgICBjb25zdCBuZXdSb3dzID0gWy4uLnByZXZSb3dzXTtcclxuICAgICAgbmV3Um93c1tpbmRleF0gPSByb3c7XHJcbiAgICAgIHJldHVybiBuZXdSb3dzO1xyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dGFibGU+XHJcbiAgICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+R2lmdCBBbW91bnQ8L3RoPlxyXG4gICAgICAgICAgPHRoPk51bWJlciBvZiBHaWZ0czwvdGg+XHJcbiAgICAgICAgICA8dGg+Um93IFRvdGFsPC90aD5cclxuICAgICAgICAgIDx0aD5Qcm9zcGVjdHM8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGhlYWQ+XHJcbiAgICAgIDx0Ym9keT5cclxuICAgICAgICB7IHJvd3MubWFwKHJvdyA9PiAoXHJcbiAgICAgICAgICA8R2lmdFRhYmxlUm93IHJvdz17cm93fSB1cGRhdGVSb3c9e3VwZGF0ZVJvd30ga2V5PXtyb3cuaWR9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLkZvb3RlclJvd30+XHJcbiAgICAgICAgICA8dGQ+VG90YWxzPC90ZD5cclxuICAgICAgICAgIDx0ZD57c3VtKHJvd3MsICdnaWZ0Q291bnQnKX08L3RkPlxyXG4gICAgICAgICAgPHRkPntmb3JtYXREb2xsYXJzKHN1bShyb3dzLCByID0+IHIuYW1vdW50ICogci5naWZ0Q291bnQpKX08L3RkPlxyXG4gICAgICAgICAgPHRkPntzdW0ocm93cywgJ2dpZnRDb3VudCcpICogNX08L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBHaWZ0VGFibGVTdGVwID0gKHsgdGFyZ2V0QW1vdW50LCBzZXRUYXJnZXRBbW91bnQsIHRhYmxlS2V5IH0pID0+IHtcclxuICBjb25zdCBbbG9jYWxUYXJnZXRBbW91bnQsIHNldExvY2FsVGFyZ2V0QW1vdW50XSA9IHVzZVN0YXRlKHRhcmdldEFtb3VudCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdpZnRUYWJsZVN0ZXB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdpZnRUYWJsZVRpdGxlfT5cclxuICAgICAgICA8aDI+WW91ciBnaWZ0IHRhYmxlPC9oMj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5Eb3dubG9hZENzdn0gb25DbGljaz17KCkgPT4gZG93bmxvYWRDc3Yocm93cyl9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9kb3dubG9hZC5zdmdcIiB3aWR0aD17MTR9IGhlaWdodD17MTR9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICBEb3dubG9hZCBSZXN1bHRzXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGg2PlxyXG4gICAgICAgIEJhc2VkIG9uIHlvdXIgZnVuZHJhaXNpbmcgZ29hbHMsIHdlJ3ZlIGNhbGN1bGF0ZWQgdGhpcyBvcHRpbWFsIGJyZWFrZG93biBmb3IgeW91clxyXG4gICAgICAgIG9yZ2FuaXphdGlvbidzIGZ1bmRyYWlzaW5nIGluaXRpYXRpdmVzLiBZb3UgY2FuIGVkaXQgdGhpcyB0byBmaXQgeW91ciByZXF1aXJlbWVudHMuXHJcbiAgICAgIDwvaDY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhYmxlQ29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRhcmdldEFtb3VudFVwZGF0ZX0+XHJcbiAgICAgICAgICBIb3cgbXVjaCBkbyB5b3Ugd2FudCB0byBmdW5kcmFpc2U/XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0Um93fT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2xvY2FsVGFyZ2V0QW1vdW50fVxyXG4gICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIHN0ZXA9ezAuMDF9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TG9jYWxUYXJnZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIG9uUHJlc3NFbnRlcj17KCkgPT4gc2V0VGFyZ2V0QW1vdW50KGxvY2FsVGFyZ2V0QW1vdW50KX1cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYXJnZXRBbW91bnQobG9jYWxUYXJnZXRBbW91bnQpfSBpbnRlbnQ9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgVXBkYXRlIFRhYmxlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEdpZnRUYWJsZSB0YXJnZXRBbW91bnQ9e3RhcmdldEFtb3VudH0ga2V5PXt0YWJsZUtleX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5jb25zdCBGdW5kcmFpc2luZ0NhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIC8vIENyZWF0ZSBhIG5ldyB0YWJsZSB3aGVuZXZlciB0aGUgdGFyZ2V0IGFtb3VudCBjaGFuZ2VzXHJcbiAgY29uc3QgW3RhYmxlS2V5LCBzZXRUYWJsZUtleV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBoYW5kbGVUYXJnZXRBbW91bnQgPSB1c2VDYWxsYmFjaygocmF3QW1vdW50KSA9PiB7XHJcbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KHJhd0Ftb3VudCk7XHJcbiAgICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIHRhcmdldEFtb3VudDtcclxuICAgIGlmIChhbW91bnQgPD0gMCkgcmV0dXJuIHRhcmdldEFtb3VudDtcclxuICAgIHNldFRhcmdldEFtb3VudChhbW91bnQpO1xyXG4gICAgc2V0VGFibGVLZXkoayA9PiBrICsgMSk7XHJcbiAgICByZXR1cm4gYW1vdW50O1xyXG4gIH0sIFt0YXJnZXRBbW91bnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRnVuZHJhaXNpbmdDYWxjdWxhdG9yfT5cclxuICAgICAgeyAhdGFyZ2V0QW1vdW50ID8gKFxyXG4gICAgICAgIDxUYXJnZXRBbW91bnRTdGVwIHNldFRhcmdldEFtb3VudD17aGFuZGxlVGFyZ2V0QW1vdW50fSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxHaWZ0VGFibGVTdGVwXHJcbiAgICAgICAgICB0YXJnZXRBbW91bnQ9e3RhcmdldEFtb3VudH1cclxuICAgICAgICAgIHNldFRhcmdldEFtb3VudD17aGFuZGxlVGFyZ2V0QW1vdW50fVxyXG4gICAgICAgICAgdGFibGVLZXk9e2B0YWJsZV8ke3RhYmxlS2V5fWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5kcmFpc2luZ0NhbGN1bGF0b3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=