webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");


var _this = undefined,
    _jsxFileName = "D:\\todolist-4.17\\components\\Container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Container = function Container(props) {
  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  var bgColor = {
    light: 'gray.50',
    dark: 'gray.900'
  };
  var color = {
    light: 'black',
    dark: 'white'
  };
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    direction: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    p: {
      sm: 0,
      md: 10
    },
    ml: {
      sm: 0,
      md: '15%'
    },
    mr: {
      sm: 0,
      md: '15%'
    },
    bg: bgColor[colorMode],
    color: color[colorMode]
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.09a6d9761bd87b11f242.hot-update.js.map