/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/404.scss"
/*!***************************!*\
  !*** ./src/scss/404.scss ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/scss/vendors/_bootstrap.scss"
/*!******************************************!*\
  !*** ./src/scss/vendors/_bootstrap.scss ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/scss/vendors/_normalize.scss"
/*!******************************************!*\
  !*** ./src/scss/vendors/_normalize.scss ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/404.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_vendors_bootstrap_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/vendors/_bootstrap.scss */ "./src/scss/vendors/_bootstrap.scss");
/* harmony import */ var _scss_vendors_normalize_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/vendors/_normalize.scss */ "./src/scss/vendors/_normalize.scss");
/* harmony import */ var _scss_404_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/404.scss */ "./src/scss/404.scss");



document.addEventListener('DOMContentLoaded', () => {
  console.log('404 page loaded with its styles');
});

// const boxMap = "000X000"

/* Redirect to main page after some interval, variant1: */
// Start the timer: every 5 seconds, check if it's time to make a redirect:
// const redirectTimer = setInterval(() => {
//   // After 5 seconds, stop the timer and perform the redirect:
//   clearInterval(redirectTimer);
//   window.location.href = './index.html';
// }, 5000);

/* Redirect to main page after some interval, variant2: */
// setTimeout(() => {
//   window.location.href = './index.html';
// }, 5000); // redirect after 5 seconds (this is the maximum for user's comfort)
})();

/******/ })()
;
//# sourceMappingURL=404.js.map