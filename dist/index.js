/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Brain.js"
/*!**********************!*\
  !*** ./src/Brain.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRestaurantHomePage: () => (/* binding */ createRestaurantHomePage)\n/* harmony export */ });\nfunction createRestaurantHomePage() {\n  const content = document.getElementById(\"content\");\n  const htmlCode =\n    \"<h1>Welcome to our restaurant</h1><p>Best food in town just for you!</p>\";\n\n  if (content) {\n    content.innerHTML = htmlCode;\n    console.log(\"Home page function executed\");\n  } else {\n    console.error(\"Element with ID 'content' not found\");\n  }\n}\n\n\n//# sourceURL=webpack://rest-page/./src/Brain.js?\n}");

/***/ },

/***/ "./src/InitialLoad.js"
/*!****************************!*\
  !*** ./src/InitialLoad.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   initialLoad: () => (/* binding */ initialLoad)\n/* harmony export */ });\n/* harmony import */ var _Brain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brain.js */ \"./src/Brain.js\");\n\n\nfunction initialLoad() {\n  // This function will be called when the page loads\n  console.log(\"Page has loaded. Initializing application...\");\n  // You can add any initialization code here, such as setting up event listeners,\n  // fetching initial data, or rendering the initial UI.\n  (0,_Brain_js__WEBPACK_IMPORTED_MODULE_0__.createRestaurantHomePage)();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n\n//# sourceURL=webpack://rest-page/./src/InitialLoad.js?\n}");

/***/ },

/***/ "./src/main.js"
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _InitialLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InitialLoad.js */ \"./src/InitialLoad.js\");\n// Main entry point for the application\n\n\n(0,_InitialLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://rest-page/./src/main.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;