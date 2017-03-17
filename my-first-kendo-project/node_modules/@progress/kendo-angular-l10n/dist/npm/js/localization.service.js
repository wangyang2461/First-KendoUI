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

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var message_service_1 = __webpack_require__(4);
	/**
	 * Localization prefix for the component messages.
	 *
	 * For internal use.
	 * @hidden
	 */
	exports.L10N_PREFIX = new core_1.OpaqueToken('Localization key prefix');
	/**
	 * Component localization service.
	 *
	 * For internal use.
	 * @hidden
	 */
	var LocalizationService = (function () {
	    function LocalizationService(prefix, messageService) {
	        this.prefix = prefix;
	        this.messageService = messageService;
	        this.dictionary = {};
	    }
	    LocalizationService.prototype.get = function (shortKey) {
	        var key = this.key(shortKey);
	        var message;
	        if (this.messageService) {
	            message = this.messageService.get(key);
	        }
	        return message || this.dictionary[key];
	    };
	    LocalizationService.prototype.register = function (shortKey, value, override) {
	        if (override === void 0) { override = false; }
	        var key = this.key(shortKey);
	        if (!override && this.dictionary[key]) {
	            return;
	        }
	        this.dictionary[key] = value;
	    };
	    LocalizationService.prototype.key = function (shortKey) {
	        return this.prefix + '.' + shortKey;
	    };
	    LocalizationService = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(exports.L10N_PREFIX)),
	        __param(1, core_1.Optional()), 
	        __metadata('design:paramtypes', [String, message_service_1.MessageService])
	    ], LocalizationService);
	    return LocalizationService;
	}());
	exports.LocalizationService = LocalizationService;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("./message.service");

/***/ }
/******/ ])));
//# sourceMappingURL=localization.service.js.map