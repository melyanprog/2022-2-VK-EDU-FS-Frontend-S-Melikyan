/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/dialog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/dialog/dialog_body.css":
/*!****************************************!*\
  !*** ./src/css/dialog/dialog_body.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/dialog/dialog_body.css?");

/***/ }),

/***/ "./src/css/dialog/dialog_container.css":
/*!*********************************************!*\
  !*** ./src/css/dialog/dialog_container.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/dialog/dialog_container.css?");

/***/ }),

/***/ "./src/css/dialog/dialog_form.css":
/*!****************************************!*\
  !*** ./src/css/dialog/dialog_form.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/dialog/dialog_form.css?");

/***/ }),

/***/ "./src/css/dialog/dialog_header.css":
/*!******************************************!*\
  !*** ./src/css/dialog/dialog_header.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/dialog/dialog_header.css?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/js/dialog.js":
/*!**************************!*\
  !*** ./src/js/dialog.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_dialog_dialog_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/dialog/dialog_header.css */ \"./src/css/dialog/dialog_header.css\");\n/* harmony import */ var _css_dialog_dialog_header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_dialog_dialog_header_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_dialog_dialog_container_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/dialog/dialog_container.css */ \"./src/css/dialog/dialog_container.css\");\n/* harmony import */ var _css_dialog_dialog_container_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_dialog_dialog_container_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_dialog_dialog_body_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/dialog/dialog_body.css */ \"./src/css/dialog/dialog_body.css\");\n/* harmony import */ var _css_dialog_dialog_body_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_dialog_dialog_body_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_dialog_dialog_form_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/dialog/dialog_form.css */ \"./src/css/dialog/dialog_form.css\");\n/* harmony import */ var _css_dialog_dialog_form_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_dialog_dialog_form_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar form = document.querySelector(\"form\");\nvar input = document.querySelector(\".form-input\");\nvar chat = document.querySelector(\".chat-body\");\nvar back_button = document.querySelector(\".back-button\");\nform.addEventListener(\"submit\", handleSubmit.bind(undefined));\ndocument.addEventListener(\"DOMContentLoaded\", getMesagesFromLocalStorage.bind(undefined));\nback_button.addEventListener(\"click\", goToChats.bind(undefined));\nfunction goToChats(event) {\n  window.location.href = \"./chats.html\";\n}\nfunction handleSubmit(event) {\n  event.preventDefault();\n  if (!input.value) return;\n  var message = {\n    text: input.value,\n    time: new Date().toTimeString().replace(/:[0-9]{2,2} .*/, \"\")\n  };\n  createMessage(message);\n  saveMessageToLocalStorage(message);\n  input.value = \"\";\n}\nfunction createMessage(message) {\n  var messageContainer = document.createElement(\"div\");\n  messageContainer.className = \"message right\";\n  var text = document.createElement(\"span\");\n  text.className = \"text\";\n  text.innerText = message.text;\n  var time = document.createElement(\"span\");\n  time.className = \"time\";\n  time.innerText = message.time;\n  var done_all = document.createElement(\"div\");\n  done_all.className = \"done-all\";\n  done_all.innerHTML = '<span class=\"material-icons\">done_all</span>';\n  var data = document.createElement(\"div\");\n  data.className = \"data\";\n  data.append.apply(data, [time, done_all]);\n  messageContainer.append.apply(messageContainer, [text, data]);\n  chat.prepend(messageContainer);\n}\nfunction getMesagesFromLocalStorage() {\n  var count = Number(localStorage.getItem(\"count\"));\n  if (!count) return;\n  for (var i = 1; i <= count; i++) {\n    var message = localStorage.getItem(i);\n    createMessage(JSON.parse(message));\n  }\n}\nfunction saveMessageToLocalStorage(message) {\n  var count = Number(localStorage.getItem(\"count\")) || 0;\n  count++;\n  localStorage.setItem(count, JSON.stringify(message));\n  localStorage.setItem(\"count\", count);\n}\n\n//# sourceURL=webpack:///./src/js/dialog.js?");

/***/ })

/******/ });