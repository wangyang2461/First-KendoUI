(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Base class that acts as a  component messages container
	 *
	 * For internal use.
	 * @hidden
	 */
	var ComponentMessages = (function () {
	    function ComponentMessages() {
	    }
	    Object.defineProperty(ComponentMessages.prototype, "override", {
	        get: function () {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ComponentMessages.prototype.ngOnChanges = function (changes) {
	        var _this = this;
	        var keys = Object.keys(changes);
	        keys.forEach(function (key) { return _this.service.register(key, _this[key], _this.override); });
	    };
	    return ComponentMessages;
	}());
	exports.ComponentMessages = ComponentMessages;


/***/ }
/******/ ])));
//# sourceMappingURL=component-messages.js.map