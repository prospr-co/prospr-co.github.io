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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FundraisingCalculator.module.scss */ "./components/FundraisingCalculator.module.scss");
/* harmony import */ var _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "B:\\workspace\\prospr-landing-page\\components\\FundraisingCalculator.jsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();




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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      amount = _useState[0],
      setAmount = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TargetAmountStep,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
        children: "Enter your fundraising goal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), "How much do you want to fundraise?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
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
  var onChangeAmount = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (amount) {}, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        value: row.amount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        value: row.giftCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
      children: row.amount * row.giftCount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
      children: row.giftCount * 5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, _this);
};

_s2(GiftTableRow, "Gb7pEeOO+3CHqjP1sY7+G4HTJ9s=");

_c2 = GiftTableRow;

var GiftTable = function GiftTable(_ref3) {
  _s3();

  var targetAmount = _ref3.targetAmount,
      setTargetAmount = _ref3.setTargetAmount;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    return generateDefaultRows(targetAmount);
  }),
      rows = _useState2[0],
      setRows = _useState2[1];

  var updateRow = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (row) {
    setRows(function (prevRows) {
      var index = prevRows.find(function (r) {
        return r.id === row.id;
      });

      var newRows = Object(B_workspace_prospr_landing_page_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevRows);

      newRows[index] = row;
      return newRows;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: "Your gift table"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
      children: "Based on your fundraising goals, we've calculated this optimal breakdown for your organization's fundraising initiatives. You can edit this to fit your requirements."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("thead", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            children: "Gift Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            children: "Number of Gifts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            children: "Row Total"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            children: "Prospects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tbody", {
          children: [rows.map(function (row) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GiftTableRow, {
              row: row,
              updateRow: updateRow
            }, row.id, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
              children: "Totals"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
              children: sum(rows, function (r) {
                return r.amount * r.giftCount;
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
              children: sum(rows, 'giftCount') * 5
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, _this);
};

_s3(GiftTable, "0Ptn0qjfyNuc6yrIWfs4zDrJbWc=");

_c3 = GiftTable;

var FundraisingCalculator = function FundraisingCalculator() {
  _s4();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1000),
      targetAmount = _useState3[0],
      setTargetAmount = _useState3[1];

  var handleTargetAmount = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (rawAmount) {
    var amount = parseFloat(rawAmount);
    if (isNaN(amount)) return targetAmount;
    if (amount <= 0) return targetAmount;
    setTargetAmount(amount);
    return amount;
  }, [targetAmount]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: _FundraisingCalculator_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.FundraisingCalculator,
    children: !targetAmount ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(TargetAmountStep, {
      setTargetAmount: handleTargetAmount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GiftTable, {
      targetAmount: targetAmount,
      setTargetAmount: handleTargetAmount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 112,
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

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5kcmFpc2luZ0NhbGN1bGF0b3IuanN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIl0sIm5hbWVzIjpbImdlbmVyYXRlRGVmYXVsdFJvd3MiLCJ0b3RhbEFtb3VudCIsInJvd3MiLCJpIiwicHVzaCIsImFtb3VudCIsIk1hdGgiLCJwb3ciLCJnaWZ0Q291bnQiLCJpZCIsIlRhcmdldEFtb3VudFN0ZXAiLCJzZXRUYXJnZXRBbW91bnQiLCJ1c2VTdGF0ZSIsInNldEFtb3VudCIsInN0eWxlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1bSIsImFyciIsInByb3BlcnR5IiwicmVkdWNlIiwiYWNjIiwidmFsIiwiR2lmdFRhYmxlUm93Iiwicm93IiwidXBkYXRlUm93Iiwib25DaGFuZ2VBbW91bnQiLCJ1c2VDYWxsYmFjayIsIkdpZnRUYWJsZSIsInRhcmdldEFtb3VudCIsInNldFJvd3MiLCJwcmV2Um93cyIsImluZGV4IiwiZmluZCIsInIiLCJuZXdSb3dzIiwibWFwIiwiRnVuZHJhaXNpbmdDYWxjdWxhdG9yIiwiaGFuZGxlVGFyZ2V0QW1vdW50IiwicmF3QW1vdW50IiwicGFyc2VGbG9hdCIsImlzTmFOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLFdBQUQsRUFBaUI7QUFDM0MsTUFBTUMsSUFBSSxHQUFHLEVBQWI7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCRCxRQUFJLENBQUNFLElBQUwsQ0FBVTtBQUNSQyxZQUFNLEVBQUdKLFdBQVcsR0FBRyxDQUFmLEdBQXFCSyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlKLENBQVosQ0FEckI7QUFFUkssZUFBUyxFQUFFRixJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlKLENBQVosQ0FGSDtBQUdSTSxRQUFFLGdCQUFTTixDQUFUO0FBSE0sS0FBVjtBQUtEOztBQUVELFNBQU9ELElBQVA7QUFDRCxDQVpEOztBQWNBLElBQU1RLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsZUFBc0IsUUFBdEJBLGVBQXNCOztBQUFBLGtCQUNwQkMsc0RBQVEsQ0FBQyxFQUFELENBRFk7QUFBQSxNQUN6Q1AsTUFEeUM7QUFBQSxNQUNqQ1EsU0FEaUM7O0FBR2hELHNCQUNFO0FBQUssYUFBUyxFQUFFQyx5RUFBTSxDQUFDSixnQkFBdkI7QUFBQSwyQkFDRTtBQUFBLDhC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QUFvQlNBLG9GQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekhBO0FBQUE7QUFBZTtBQUNmOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBMkU7QUFDNUQ7QUFDZixpQ0FBaUMsMkZBQWdCO0FBQ2pELEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkU7QUFDSjtBQUNzQjtBQUNsQjtBQUM5RDtBQUNmLFNBQVMsNEZBQWlCLFNBQVMsMEZBQWUsU0FBUyxxR0FBMEIsU0FBUyw0RkFBaUI7QUFDL0csQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQTJFO0FBQzVEO0FBQ2Y7QUFDQSxvQ0FBb0MsMkZBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRiwyRkFBZ0I7QUFDdEcsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWxjdWxhdG9yLWVtYmVkLjg4YmZjNGE0NTlhM2Y2MGM0YjI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRnVuZHJhaXNpbmdDYWxjdWxhdG9yLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IGdlbmVyYXRlRGVmYXVsdFJvd3MgPSAodG90YWxBbW91bnQpID0+IHtcclxuICBjb25zdCByb3dzID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICByb3dzLnB1c2goe1xyXG4gICAgICBhbW91bnQ6ICh0b3RhbEFtb3VudCAvIDUpIC8gKE1hdGgucG93KDIsIGkpKSxcclxuICAgICAgZ2lmdENvdW50OiBNYXRoLnBvdygyLCBpKSxcclxuICAgICAgaWQ6IGByb3dfJHtpfWAsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb3dzO1xyXG59O1xyXG5cclxuY29uc3QgVGFyZ2V0QW1vdW50U3RlcCA9ICh7IHNldFRhcmdldEFtb3VudCB9KSA9PiB7XHJcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGFyZ2V0QW1vdW50U3RlcH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPkVudGVyIHlvdXIgZnVuZHJhaXNpbmcgZ29hbDwvaDI+XHJcbiAgICAgICAgSG93IG11Y2ggZG8geW91IHdhbnQgdG8gZnVuZHJhaXNlP1xyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2Ftb3VudH1cclxuICAgICAgICAgIGlucHV0TW9kZT1cImRlY2ltYWxcIlxyXG4gICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFyZ2V0QW1vdW50KGFtb3VudCl9Pk5leHQgU3RlcDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmNvbnN0IHN1bSA9IChhcnIsIHByb3BlcnR5KSA9PiBhcnIucmVkdWNlKFxyXG4gIChhY2MsIHZhbCkgPT4gYWNjICsgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BlcnR5KHZhbCkgOiB2YWxbcHJvcGVydHldKSxcclxuICAwLFxyXG4pO1xyXG5cclxuY29uc3QgR2lmdFRhYmxlUm93ID0gKHsgcm93LCB1cGRhdGVSb3cgfSkgPT4ge1xyXG4gIGNvbnN0IG9uQ2hhbmdlQW1vdW50ID0gdXNlQ2FsbGJhY2soKGFtb3VudCkgPT4ge1xyXG4gICAgXHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD48aW5wdXQgdmFsdWU9e3Jvdy5hbW91bnR9IC8+PC90ZD5cclxuICAgICAgPHRkPjxpbnB1dCB2YWx1ZT17cm93LmdpZnRDb3VudH0gLz48L3RkPlxyXG4gICAgICA8dGQ+e3Jvdy5hbW91bnQgKiByb3cuZ2lmdENvdW50fTwvdGQ+XHJcbiAgICAgIDx0ZD57cm93LmdpZnRDb3VudCAqIDV9PC90ZD5cclxuICAgIDwvdHI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdpZnRUYWJsZSA9ICh7IHRhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50IH0pID0+IHtcclxuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZURlZmF1bHRSb3dzKHRhcmdldEFtb3VudCkpO1xyXG5cclxuICBjb25zdCB1cGRhdGVSb3cgPSB1c2VDYWxsYmFjaygocm93KSA9PiB7XHJcbiAgICBzZXRSb3dzKChwcmV2Um93cykgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHByZXZSb3dzLmZpbmQociA9PiByLmlkID09PSByb3cuaWQpO1xyXG4gICAgICBjb25zdCBuZXdSb3dzID0gWy4uLnByZXZSb3dzXTtcclxuICAgICAgbmV3Um93c1tpbmRleF0gPSByb3c7XHJcbiAgICAgIHJldHVybiBuZXdSb3dzO1xyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+WW91ciBnaWZ0IHRhYmxlPC9oMj5cclxuICAgICAgPGg2PlxyXG4gICAgICAgIEJhc2VkIG9uIHlvdXIgZnVuZHJhaXNpbmcgZ29hbHMsIHdlJ3ZlIGNhbGN1bGF0ZWQgdGhpcyBvcHRpbWFsIGJyZWFrZG93biBmb3IgeW91clxyXG4gICAgICAgIG9yZ2FuaXphdGlvbidzIGZ1bmRyYWlzaW5nIGluaXRpYXRpdmVzLiBZb3UgY2FuIGVkaXQgdGhpcyB0byBmaXQgeW91ciByZXF1aXJlbWVudHMuXHJcbiAgICAgIDwvaDY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRoPkdpZnQgQW1vdW50PC90aD5cclxuICAgICAgICAgICAgPHRoPk51bWJlciBvZiBHaWZ0czwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Sb3cgVG90YWw8L3RoPlxyXG4gICAgICAgICAgICA8dGg+UHJvc3BlY3RzPC90aD5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHsgcm93cy5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgICA8R2lmdFRhYmxlUm93IHJvdz17cm93fSB1cGRhdGVSb3c9e3VwZGF0ZVJvd30ga2V5PXtyb3cuaWR9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPlRvdGFsczwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntzdW0ocm93cywgJ2dpZnRDb3VudCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntzdW0ocm93cywgciA9PiByLmFtb3VudCAqIHIuZ2lmdENvdW50KX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57c3VtKHJvd3MsICdnaWZ0Q291bnQnKSAqIDV9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5jb25zdCBGdW5kcmFpc2luZ0NhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RhcmdldEFtb3VudCwgc2V0VGFyZ2V0QW1vdW50XSA9IHVzZVN0YXRlKDEwMDApO1xyXG4gIGNvbnN0IGhhbmRsZVRhcmdldEFtb3VudCA9IHVzZUNhbGxiYWNrKChyYXdBbW91bnQpID0+IHtcclxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQocmF3QW1vdW50KTtcclxuICAgIGlmIChpc05hTihhbW91bnQpKSByZXR1cm4gdGFyZ2V0QW1vdW50O1xyXG4gICAgaWYgKGFtb3VudCA8PSAwKSByZXR1cm4gdGFyZ2V0QW1vdW50O1xyXG4gICAgc2V0VGFyZ2V0QW1vdW50KGFtb3VudCk7XHJcbiAgICByZXR1cm4gYW1vdW50O1xyXG4gIH0sIFt0YXJnZXRBbW91bnRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GdW5kcmFpc2luZ0NhbGN1bGF0b3J9PlxyXG4gICAgICB7ICF0YXJnZXRBbW91bnQgPyAoXHJcbiAgICAgICAgPFRhcmdldEFtb3VudFN0ZXAgc2V0VGFyZ2V0QW1vdW50PXtoYW5kbGVUYXJnZXRBbW91bnR9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEdpZnRUYWJsZSB0YXJnZXRBbW91bnQ9e3RhcmdldEFtb3VudH0gc2V0VGFyZ2V0QW1vdW50PXtoYW5kbGVUYXJnZXRBbW91bnR9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVuZHJhaXNpbmdDYWxjdWxhdG9yO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=