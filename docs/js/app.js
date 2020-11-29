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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sidebarBtn = document.querySelector('#sidebar-btn');\r\nconst body = document.querySelector('body');\r\n\r\nsidebarBtn.addEventListener('click', function() {\r\n    const sidebar = document.querySelector('#sidebar');\r\n    sidebar.classList.toggle('navigation__sidebar--hidden');\r\n\r\n    if(this.classList.contains('navigation__mobile-burger--active')) {\r\n        this.classList.remove('navigation__mobile-burger--active');\r\n        body.style.overflow = 'scroll';\r\n    } else {\r\n        this.classList.add('navigation__mobile-burger--active');\r\n        body.style.overflow = 'hidden';\r\n    }\r\n});\r\n\r\nwindow.onload = function () {\r\n    //ищем элемент по селектору\r\n    let megaLink = document.querySelector('#showNew');\r\n    let megaLinkItem = document.getElementById('showNewItem');\r\n    //вешаем на него события\r\n    megaLink.onmouseout = function(e) {\r\n        megaLinkItem.style.opacity='0';\r\n        megaLinkItem.style.transform='rotateX(-90deg)';\r\n    }\r\n  \r\n    megaLink.onmouseover = function(e) {\r\n        megaLinkItem.style.opacity='1';\r\n        megaLinkItem.style.transform='rotateX(0deg)';\r\n    };\r\n\r\n    megaLinkItem.onmouseover = function(e) { \r\n        megaLinkItem.style.opacity='1';\r\n        megaLinkItem.style.transform='rotateX(0deg)';\r\n    }\r\n  };\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function(){\r\n    $(\".header-carousel__wrapper\").owlCarousel({\r\n      items: 1,\r\n      nav:true,\r\n      navText : ['<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>', '<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>'],\r\n      dots: true,\r\n      autoplay: true,\r\n      autoplayTimeout: 30000,\r\n      smartSpeed:1800,\r\n      loop: true,\r\n      margin: 10,\r\n      onInitialized: progressBar,\r\n      onTranslated: moved,\r\n      onDrag: pauseOnDragging\r\n    });\r\n  });\r\n\r\nvar time = 30; // time in seconds\r\n \r\nvar $progressBar,\r\n    $bar, \r\n    $elem, \r\n    isPause, \r\n    tick,\r\n    percentTime;\r\n\r\n// Init progressBar where elem is $(\"#owl-demo\")\r\nfunction progressBar(){    \r\n    // build progress bar elements\r\n    buildProgressBar();\r\n    // start counting\r\n    start();\r\n}\r\n\r\n// create div#progressBar and div#bar then prepend to $(\"#owl-demo\")\r\nfunction buildProgressBar(){\r\n    $progressBar = $(\"<div>\",{\r\n        id:\"progress-bar\"\r\n    });\r\n    \r\n    $bar = $(\"<div>\",{\r\n        id:\"header__progress-bar\"\r\n    });\r\n    \r\n    $progressBar.append($bar).prependTo($(\"#header-carousel\"));\r\n}\r\n\r\nfunction start() {\r\n    // reset timer\r\n    percentTime = 0;\r\n    isPause = false;\r\n    \r\n    // run interval every 0.01 second\r\n    tick = setInterval(interval, 10);\r\n};\r\n\r\nfunction interval() {\r\n    if(isPause === false){\r\n        percentTime += 1 / time;\r\n        \r\n        $bar.css({\r\n            width: percentTime+\"%\"\r\n        });\r\n        \r\n        // if percentTime is equal or greater than 100\r\n        if(percentTime >= 100){\r\n            // slide to next item \r\n            $(\"#header-carousel\").trigger(\"next.owl.carousel\");\r\n            percentTime = 0; // give the carousel at least the animation time ;)\r\n        }\r\n    }\r\n}\r\n\r\n// pause while dragging \r\nfunction pauseOnDragging(){\r\n    isPause = true;\r\n}\r\n\r\n// moved callback\r\nfunction moved(){\r\n    // clear interval\r\n    clearTimeout(tick);\r\n    \r\n    // start again\r\n    start();\r\n}\r\n\r\nvar owl = $('.shop__carousel-wrap');\r\n// Go to the next item\r\n$('.customNextBtn').click(function() {\r\n    owl.trigger('next.owl.carousel');\r\n})\r\n// Go to the previous item\r\n$('.customPrevBtn').click(function() {\r\n    // With optional speed parameter\r\n    // Parameters has to be in square bracket '[]'\r\n    owl.trigger('prev.owl.carousel');\r\n})\r\n\r\n$(document).ready(function(){\r\n    $(\".shop__carousel-wrap\").owlCarousel({\r\n      nav:false,\r\n    //   navText : ['<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>', '<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>'],\r\n      dots: false,\r\n      autoplay: true,\r\n      autoplayTimeout: 30000,\r\n      autoplayHoverPause: true,\r\n      smartSpeed:2000,\r\n      loop: true,\r\n      autoWidth: true,\r\n      center: true,\r\n      responsive: {\r\n          0: {\r\n            margin: 35,\r\n          },\r\n          1000: {\r\n            margin: 30,\r\n          }\r\n      }\r\n    });\r\n  });\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/carousel.js?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/js/app.js ./src/js/carousel.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\sasha\\Desktop\\lookshop\\src\\js\\app.js */\"./src/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\sasha\\Desktop\\lookshop\\src\\js\\carousel.js */\"./src/js/carousel.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js_./src/js/carousel.js?");

/***/ })

/******/ });