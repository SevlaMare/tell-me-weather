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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/form.css":
/*!**************************!*\
  !*** ./src/css/form.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: createContent, createContainer, sel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContent", function() { return createContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContainer", function() { return createContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sel", function() { return sel; });
const sel = (selector) => document.querySelector(selector);

const createContent = (tag, className, text) => {
  const element = document.createElement(tag);

  if (text) { element.innerHTML = text; }
  if (className) { element.className = className; }

  return element;
};

const createContainer = (tag, className, idName) => {
  const element = document.createElement(tag);

  if (className) { element.className = className; }
  if (idName) { element.id = idName; }

  return element;
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/form.css */ "./src/css/form.css");
/* harmony import */ var _css_form_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_form_css__WEBPACK_IMPORTED_MODULE_3__);





const api = '6ca8aaad293b0b0a3ad93f29e82425f8';

const fetchData = async (url) => {
  const response = await fetch(url, { mode: 'cors' });
  if (response.status === 401) { return console.error('BAD REQUEST | Access not allowed'); }
  if (response.status === 404) { return console.error('BAD REQUEST | City not found'); }
  const data = await response.json();

  return {
    name: data.name,
    temperature: data.main.temp,
    weather: data.weather[0].main,
    icon: data.weather[0].icon
  };
};

const safeFetch = (url) => {
  try { return fetchData(url); } catch (err) { return console.warn('Bad request |', err); }
};

Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('#btnSend').addEventListener('click', (event) => {
  const cityInput = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('#city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${api}`;

  safeFetch(url)
    .then((info) => { Object(_render__WEBPACK_IMPORTED_MODULE_0__["default"])(info.name, info.temperature, info.weather, info.icon); })
    .catch(err => console.warn('City not found |', err));

  event.preventDefault();
});


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");


const render = (city, temp, weather, ico) => {
  const icon = `https://openweathermap.org/img/wn/${ico}@4x.png`;
  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["sel"])('#cityDisplay').innerHTML = `${city}`;
  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["sel"])('#tempDisplay').innerHTML = `${Math.trunc(temp)} °C`;
  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["sel"])('#weatherDisplay').innerHTML = `${weather}`;
  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["sel"])('#bg-weather').setAttribute('src', icon);

  const bg = document.querySelector('main')
  if (weather === 'Rain') {
    bg.style.background = "blue";
  } else if (weather === 'Snow') {
    bg.style.background = "white";
  } else if (weather === 'Clear') {
    bg.style.background = "orange";
  } else {
    bg.style.background = "gray";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (render);


/***/ })

/******/ });