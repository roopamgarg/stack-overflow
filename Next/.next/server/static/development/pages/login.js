module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Nav/Nav.js":
/*!*******************************!*\
  !*** ./components/Nav/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.scss */ "./components/Nav/Nav.scss");
/* harmony import */ var _Nav_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Nav_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _askQuestion_AskQuestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../askQuestion/AskQuestion */ "./components/askQuestion/AskQuestion.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/index */ "./redux/index.js");
var _jsxFileName = "/home/roopam/Videos/test/ntest/Next/components/Nav/Nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function Nav(props) {
  const renderButtons = () => {
    if (react_cookies__WEBPACK_IMPORTED_MODULE_4___default.a.load("token")) {
      console.log(props);
      return __jsx("div", {
        className: "nav__buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx(_askQuestion_AskQuestion__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), "Ask Question"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: () => props.logoutUser(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Logout"));
    }

    return __jsx("div", {
      className: "nav__buttons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Sign In")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/register",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Register")));
  };

  return __jsx("div", {
    className: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Stack Overflow Clone"))), renderButtons());
}

const mapStateToProps = state => ({
  questions: state.question.questions,
  questionsLoader: state.question.questionsLoader
});

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(Object(_redux_index__WEBPACK_IMPORTED_MODULE_7__["logoutUser"])())
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Nav));

/***/ }),

/***/ "./components/Nav/Nav.scss":
/*!*********************************!*\
  !*** ./components/Nav/Nav.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/askQuestion/AskQuestion.js":
/*!***********************************************!*\
  !*** ./components/askQuestion/AskQuestion.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/TextArea */ "antd/lib/input/TextArea");
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/index */ "./redux/index.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/roopam/Videos/test/ntest/Next/components/askQuestion/AskQuestion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function AskQuestion(props) {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: tags,
    1: setTags
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const showModal = () => {
    if (!react_cookies__WEBPACK_IMPORTED_MODULE_6___default.a.load('token')) {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/login');
      return setVisible(false);
    }

    setVisible(true);
  };

  const handleOk = async e => {
    console.log(e);
    await props.askQuestion({
      title,
      description,
      tags
    });
    setDescription("");
    setTitle("");
    setTags([]);
    setVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

  const handleTagChange = val => {
    setTags(val);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    onClick: showModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, props.children), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "Ask A Question",
    visible: visible,
    onOk: handleOk,
    onCancel: handleCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "login-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: title,
    onChange: e => setTitle(e.target.value),
    placeholder: "Title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_2___default.a, {
    placeholder: "Enter Your Question Description( Mark Down Supported)",
    autoSize: {
      minRows: 2
    },
    value: description,
    onChange: e => setDescription(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mode: "tags",
    style: {
      width: "100%"
    },
    tokenSeparators: [","],
    value: tags,
    onChange: handleTagChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })))));
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    askQuestion: data => Object(_redux_index__WEBPACK_IMPORTED_MODULE_4__["askQuestion"])(data)(dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(AskQuestion));

/***/ }),

/***/ "./components/forms/LoginForm.js":
/*!***************************************!*\
  !*** ./components/forms/LoginForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/roopam/Videos/test/ntest/Next/components/forms/LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function LoginForm(props) {
  const {
    handleSubmit,
    getFieldDecorator,
    loginLoader
  } = props;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit,
    className: "login-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, getFieldDecorator("email", {
    rules: [{
      required: true,
      message: "Please input your username!"
    }]
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    prefix: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "user",
      style: {
        color: "rgba(0,0,0,.25)"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }),
    placeholder: "Username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, getFieldDecorator("password", {
    rules: [{
      required: true,
      message: "Please input your Password!"
    }]
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    prefix: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "lock",
      style: {
        color: "rgba(0,0,0,.25)"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }),
    type: "password",
    placeholder: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    loading: loginLoader,
    htmlType: "submit",
    className: "login-form-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Log in"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), "Or ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "register now!"))));
}

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Nav/Nav */ "./components/Nav/Nav.js");
var _jsxFileName = "/home/roopam/Videos/test/ntest/Next/components/layout/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Layout(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_Nav_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/forms/LoginForm */ "./components/forms/LoginForm.js");
/* harmony import */ var _redux_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/index */ "./redux/index.js");
var _jsxFileName = "/home/roopam/Videos/test/ntest/Next/pages/login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function LoginPage(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (react_cookies__WEBPACK_IMPORTED_MODULE_4___default.a.load('token')) {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/', '/', {
        shallow: true
      });
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          console.log("Received values of form: ", values);
          await props.loginUser(values, antd__WEBPACK_IMPORTED_MODULE_1__["message"]);
        } catch (err) {}
      }
    });
  };

  const {
    getFieldDecorator
  } = props.form;
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "login__form-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    getFieldDecorator: getFieldDecorator,
    loginLoader: props.loginLoader,
    handleSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })));
}

const WrappedLoginForm = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].create({
  name: "login_form"
})(LoginPage);

const mapStateToProps = state => ({
  loginLoader: state.user.loginLoader
});

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (data, message) => Object(_redux_index__WEBPACK_IMPORTED_MODULE_8__["loginUser"])(data, message)(dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(WrappedLoginForm));

/***/ }),

/***/ "./redux/helpers/API_URL.js":
/*!**********************************!*\
  !*** ./redux/helpers/API_URL.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("http://localhost:7000/");

/***/ }),

/***/ "./redux/helpers/getHeaders.js":
/*!*************************************!*\
  !*** ./redux/helpers/getHeaders.js ***!
  \*************************************/
/*! exports provided: getHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaders", function() { return getHeaders; });
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_0__);

const getHeaders = () => ({
  headers: {
    "Content-Type": "application/json",
    "token": react_cookies__WEBPACK_IMPORTED_MODULE_0___default.a.load("token")
  }
});

/***/ }),

/***/ "./redux/helpers/validateEmail.js":
/*!****************************************!*\
  !*** ./redux/helpers/validateEmail.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const validateEmail = email => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

/* harmony default export */ __webpack_exports__["default"] = (validateEmail);

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: loginUser, logoutUser, registerUser, getQuestions, getQuestionById, voteQuestion, askQuestion, voteReply, addReply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_userActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/userActions */ "./redux/user/userActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return _user_userActions__WEBPACK_IMPORTED_MODULE_0__["loginUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return _user_userActions__WEBPACK_IMPORTED_MODULE_0__["logoutUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return _user_userActions__WEBPACK_IMPORTED_MODULE_0__["registerUser"]; });

/* harmony import */ var _question_questionActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question/questionActions */ "./redux/question/questionActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQuestions", function() { return _question_questionActions__WEBPACK_IMPORTED_MODULE_1__["getQuestions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQuestionById", function() { return _question_questionActions__WEBPACK_IMPORTED_MODULE_1__["getQuestionById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "voteQuestion", function() { return _question_questionActions__WEBPACK_IMPORTED_MODULE_1__["voteQuestion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "askQuestion", function() { return _question_questionActions__WEBPACK_IMPORTED_MODULE_1__["askQuestion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "voteReply", function() { return _question_questionActions__WEBPACK_IMPORTED_MODULE_1__["voteReply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addReply", function() { return _question_questionActions__WEBPACK_IMPORTED_MODULE_1__["addReply"]; });




/***/ }),

/***/ "./redux/question/questionActions.js":
/*!*******************************************!*\
  !*** ./redux/question/questionActions.js ***!
  \*******************************************/
/*! exports provided: getQuestions, getQuestionById, voteQuestion, askQuestion, voteReply, addReply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestions", function() { return getQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestionById", function() { return getQuestionById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteQuestion", function() { return voteQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "askQuestion", function() { return askQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteReply", function() { return voteReply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReply", function() { return addReply; });
/* harmony import */ var _questionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionTypes */ "./redux/question/questionTypes.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_API_URL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/API_URL */ "./redux/helpers/API_URL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_getHeaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/getHeaders */ "./redux/helpers/getHeaders.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);








const getQuestionRequest = () => ({
  type: _questionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_QUESTIONS_REQUEST"]
});

const getQuestionSuccess = res => ({
  type: _questionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_QUESTIONS_SUCCESS"],
  payload: res
});

const getQuestionFailure = err => ({
  type: _questionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_QUESTIONS_FAILURE"],
  payload: err
});

const getCurrentQuestionReq = () => ({
  type: _questionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_QUESTION_DESCRIPTION_REQUEST"]
});

const getCurrentQuestionSuccess = res => ({
  type: _questionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_QUESTION_DESCRIPTION_SUCCESS"],
  payload: res
});

const getCurrentQuestionFailure = err => ({
  type: _questionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_QUESTION_DESCRIPTION_FAILURE"],
  payload: err
});

const askQuestionRequest = () => ({
  type: _questionTypes__WEBPACK_IMPORTED_MODULE_0__["ASK_QUESTION_REQUEST"]
});

const askQuestionSuccess = () => ({
  type: _questionTypes__WEBPACK_IMPORTED_MODULE_0__["ASK_QUESTION_SUCCESS"]
});

const askQuestionFailure = () => ({
  type: _questionTypes__WEBPACK_IMPORTED_MODULE_0__["ASK_QUESTION_FAILURE"]
});

const addReplyRequest = () => ({
  type: _questionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_REPLY_REQUEST"]
});

const addReplySuccess = () => ({
  type: _questionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_REPLY_SUCCESS"]
});

const addReplyFailure = () => ({
  type: _questionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_REPLY_FAILURE"]
});

const editReply = res => ({
  type: _questionTypes__WEBPACK_IMPORTED_MODULE_0__["EDIT_REPLY"],
  payload: res
});

const getQuestions = (search, pageNo, pageSize) => {
  search = typeof search === "string" ? search : "";
  return async function (dispatch) {
    dispatch(getQuestionRequest());

    try {
      let response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${_helpers_API_URL__WEBPACK_IMPORTED_MODULE_2__["default"]}question/search?search=${search}`);
      response = response.data;
      return dispatch(getQuestionSuccess(response));
    } catch (error) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error.response.data.message);
      return dispatch(getQuestionFailure(error.message));
    }
  };
};
const getQuestionById = id => {
  console.log("hii");
  id = typeof id === "string" && id.length > 0 ? id : false;

  if (!id) {
    return function (dispatch) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Invalid ID");
      dispatch(getCurrentQuestionFailure("Invalid ID"));
    };
  }

  return async function (dispatch) {
    try {
      dispatch(getCurrentQuestionReq());
      let response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${_helpers_API_URL__WEBPACK_IMPORTED_MODULE_2__["default"]}question/search/${id}`);
      response = response.data;
      return dispatch(getCurrentQuestionSuccess(response));
    } catch (error) {
      console.log(error);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error.response.data.message);
      dispatch(getCurrentQuestionFailure(error.message));
      return response;
    }
  };
};
const voteQuestion = (id, type, history) => {
  console.log(id, type);
  id = typeof id === "string" && id.length > 0 ? id : false;
  type = typeof type === "boolean" ? type.toString() : false;

  if (!id || !type) {
    return function (dispatch) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Missing Required Fields"); // dispatch(getCurrentQuestionFailure("Missing Required Fields"));
    };
  }

  const types = {
    true: "upvote",
    false: "downvote"
  };
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${_helpers_API_URL__WEBPACK_IMPORTED_MODULE_2__["default"]}question/${types[type]}/${id}`, {}, Object(_helpers_getHeaders__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])()).then(response => {
      const res = response.data;
      dispatch(getCurrentQuestionSuccess(res));
    }).catch(error => {
      console.log(error);

      if (error.response.status === 401) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/login");
      }

      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error.response.data.message);
    });
  };
};
const askQuestion = data => {
  data.title = typeof data.title === "string" && data.title.trim().length > 0 ? data.title.trim() : false;
  data.description = typeof data.description === "string" && data.description.trim().length > 0 ? data.description.trim() : false;
  data.tags = Array.isArray(data.tags) && data.tags.length > 0 ? data.tags : false;

  if (!(data.title && data.description && data.tags)) {
    return function (dispatch) {
      dispatch(askQuestionFailure());
    };
  }

  const body = {
    title: data.title,
    description: data.description,
    tags: data.tags
  };
  return async function (dispatch) {
    try {
      dispatch(askQuestionRequest());
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${_helpers_API_URL__WEBPACK_IMPORTED_MODULE_2__["default"]}question/ask`, body, Object(_helpers_getHeaders__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])());
      dispatch(askQuestionSuccess());
      await getQuestions()(dispatch);
    } catch (error) {
      console.log(error);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error.response.data.message);
      dispatch(askQuestionFailure());
    }
  };
};
const voteReply = (id, type, history) => {
  id = typeof id === "string" && id.length > 0 ? id : false;
  type = typeof type === "boolean" ? type.toString() : false;

  if (!id || !type) {
    return function (dispatch) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Missing Required Fields"); // dispatch(getCurrentQuestionFailure("Missing Required Fields"));
    };
  }

  const types = {
    true: "upvote",
    false: "downvote"
  };
  return async function (dispatch) {
    try {
      let response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${_helpers_API_URL__WEBPACK_IMPORTED_MODULE_2__["default"]}reply/${types[type]}/${id}`, {}, Object(_helpers_getHeaders__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])());
      response = response.data;
      dispatch(editReply(response));
    } catch (error) {
      console.log(error);

      if (error.response.status === 401) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/login");
      }

      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error.response.data.message);
    }
  };
};
const addReply = data => {
  data.text = typeof data.text === "string" && data.text.trim().length > 0 ? data.text.trim() : false;
  data.questionId = typeof data.questionId === "string" && data.questionId.trim().length > 0 ? data.questionId.trim() : false;

  if (!(data.text && data.questionId)) {
    return function (dispatch) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Missing Required Fields");
      dispatch(askReplyFailure());
    };
  }

  const body = {
    text: data.text,
    questionId: data.questionId
  };
  return async function (dispatch) {
    try {
      dispatch(addReplyRequest());
      await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${_helpers_API_URL__WEBPACK_IMPORTED_MODULE_2__["default"]}reply/`, body, Object(_helpers_getHeaders__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])());
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Reply Added Successfully");
      dispatch(addReplySuccess());
      getQuestionById(data.questionId)(dispatch);
    } catch (error) {
      console.log(error);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error.response.data.message);
      dispatch(addReplyFailure());
    }
  };
};

/***/ }),

/***/ "./redux/question/questionTypes.js":
/*!*****************************************!*\
  !*** ./redux/question/questionTypes.js ***!
  \*****************************************/
/*! exports provided: GET_QUESTIONS_REQUEST, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAILURE, GET_QUESTION_DESCRIPTION_REQUEST, GET_QUESTION_DESCRIPTION_SUCCESS, GET_QUESTION_DESCRIPTION_FAILURE, ASK_QUESTION_REQUEST, ASK_QUESTION_SUCCESS, ASK_QUESTION_FAILURE, EDIT_REPLY, ADD_REPLY_REQUEST, ADD_REPLY_SUCCESS, ADD_REPLY_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_QUESTIONS_REQUEST", function() { return GET_QUESTIONS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_QUESTIONS_SUCCESS", function() { return GET_QUESTIONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_QUESTIONS_FAILURE", function() { return GET_QUESTIONS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_QUESTION_DESCRIPTION_REQUEST", function() { return GET_QUESTION_DESCRIPTION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_QUESTION_DESCRIPTION_SUCCESS", function() { return GET_QUESTION_DESCRIPTION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_QUESTION_DESCRIPTION_FAILURE", function() { return GET_QUESTION_DESCRIPTION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASK_QUESTION_REQUEST", function() { return ASK_QUESTION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASK_QUESTION_SUCCESS", function() { return ASK_QUESTION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASK_QUESTION_FAILURE", function() { return ASK_QUESTION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_REPLY", function() { return EDIT_REPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REPLY_REQUEST", function() { return ADD_REPLY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REPLY_SUCCESS", function() { return ADD_REPLY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REPLY_FAILURE", function() { return ADD_REPLY_FAILURE; });
const GET_QUESTIONS_REQUEST = "GET_QUESTION_REQUEST";
const GET_QUESTIONS_SUCCESS = "GET_QUESTION_SUCCESS";
const GET_QUESTIONS_FAILURE = "GET_QUESTION_FAILURE";
const GET_QUESTION_DESCRIPTION_REQUEST = "GET_QUESTION_DESCRIPTION_REQUEST";
const GET_QUESTION_DESCRIPTION_SUCCESS = "GET_QUESTION_DESCRIPTION_SUCCESS";
const GET_QUESTION_DESCRIPTION_FAILURE = "GET_QUESTION_DESCRIPTION_FAILURE";
const ASK_QUESTION_REQUEST = "ASK_QUESTION_REQUEST";
const ASK_QUESTION_SUCCESS = "ASK_QUESTION_SUCCESS";
const ASK_QUESTION_FAILURE = "ASK_QUESTION_FAILURE";
const EDIT_REPLY = "EDIT_REPLY";
const ADD_REPLY_REQUEST = "ADD_REPLY_REQUEST";
const ADD_REPLY_SUCCESS = "ADD_REPLY_SUCCESS";
const ADD_REPLY_FAILURE = "ADD_REPLY_FAILURE";

/***/ }),

/***/ "./redux/user/userActions.js":
/*!***********************************!*\
  !*** ./redux/user/userActions.js ***!
  \***********************************/
/*! exports provided: logoutUser, loginUser, registerUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony import */ var _userTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userTypes */ "./redux/user/userTypes.js");
/* harmony import */ var _helpers_API_URL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/API_URL */ "./redux/helpers/API_URL.js");
/* harmony import */ var _helpers_validateEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/validateEmail */ "./redux/helpers/validateEmail.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);






const loginUserRequest = () => ({
  type: _userTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_USER_REQUEST"]
});

const loginUserSuccess = res => ({
  type: _userTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_USER_SUCCESS"],
  payload: res
});

const loginUserFailure = err => ({
  type: _userTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_USER_FAILURE"],
  payload: err
});

const logoutUser = () => {
  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
  return {
    type: _userTypes__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_USER"]
  };
};
const loginUser = (data, message) => {
  let {
    email,
    password
  } = data;
  email = typeof email === "string" && Object(_helpers_validateEmail__WEBPACK_IMPORTED_MODULE_2__["default"])(email) ? email.trim() : false;
  password = typeof password === "string" && password.trim().length > 0 ? password : false;

  if (!(email && password)) {
    return function (dispatch) {
      if (!email) {
        message.error("Invalid Email");
        dispatch(registerUserFailure("Invalid Email"));
      } else if (password) {
        message.error("Invalid Password must be more than 5 characters");
        dispatch(registerUserFailure("Invalid Password"));
      }
    };
  }

  return async function (dispatch) {
    try {
      dispatch(loginUserRequest());
      let res = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${_helpers_API_URL__WEBPACK_IMPORTED_MODULE_1__["default"]}user/login`, data);
      res = res.data;
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace("/");
      dispatch(loginUserSuccess(res));
    } catch (error) {
      console.log(error);
      message.error(error.response.data.message);
      dispatch(loginUserFailure(error.message));
    }
  };
};

const registerUserRequest = () => ({
  type: _userTypes__WEBPACK_IMPORTED_MODULE_0__["REGISTER_USER_REQUEST"]
});

const registerUserSuccess = res => ({
  type: _userTypes__WEBPACK_IMPORTED_MODULE_0__["REGISTER_USER_SUCCESS"],
  payload: res
});

const registerUserFailure = err => ({
  type: _userTypes__WEBPACK_IMPORTED_MODULE_0__["REGISTER_USER_FAILURE"],
  payload: err
});

const registerUser = (data, history, message) => {
  let {
    displayName,
    email,
    password
  } = data;
  displayName = typeof displayName === "string" && displayName.trim().length > 0 ? displayName.trim() : false;
  email = typeof email === "string" && Object(_helpers_validateEmail__WEBPACK_IMPORTED_MODULE_2__["default"])(email) ? email.trim() : false;
  password = typeof password === "string" && password.trim().length > 0 ? password : false;

  if (!(displayName && email && password)) {
    return function (dispatch) {
      if (!displayName) {
        message.error("Invalid Display Name");
        dispatch(registerUserFailure("Invalid Display Name"));
      } else if (!email) {
        message.error("Invalid Email");
        dispatch(registerUserFailure("Invalid Email"));
      } else if (password) {
        message.error("Invalid Password must be more than 5 characters");
        dispatch(registerUserFailure("Invalid Password"));
      }
    };
  }

  return async function (dispatch) {
    try {
      dispatch(registerUserRequest());
      let response = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${_helpers_API_URL__WEBPACK_IMPORTED_MODULE_1__["default"]}user/register`, {
        displayName,
        email,
        password
      });
      response = response.data;
      dispatch(registerUserSuccess(response));
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
    } catch (error) {
      message.error(error.response.data.message);
      dispatch(registerUserFailure(error.message));
    }
  };
};

/***/ }),

/***/ "./redux/user/userTypes.js":
/*!*********************************!*\
  !*** ./redux/user/userTypes.js ***!
  \*********************************/
/*! exports provided: LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER_REQUEST", function() { return LOGIN_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER_SUCCESS", function() { return LOGIN_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER_FAILURE", function() { return LOGIN_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_USER_REQUEST", function() { return REGISTER_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_USER_SUCCESS", function() { return REGISTER_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_USER_FAILURE", function() { return REGISTER_USER_FAILURE; });
const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
const LOGOUT_USER = "LOGOUT_USER";
const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/roopam/Videos/test/ntest/Next/pages/login.js */"./pages/login.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd/lib/input/TextArea":
/*!******************************************!*\
  !*** external "antd/lib/input/TextArea" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/TextArea");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookies":
/*!********************************!*\
  !*** external "react-cookies" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookies");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map