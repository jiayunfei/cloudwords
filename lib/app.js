(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cloudWords"] = factory();
	else
		root["cloudWords"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wordMove = __webpack_require__(1);

var _wordMove2 = _interopRequireDefault(_wordMove);

var _eventHandler = __webpack_require__(3);

var _eventHandler2 = _interopRequireDefault(_eventHandler);

var _defaultColors = __webpack_require__(4);

var _defaultColors2 = _interopRequireDefault(_defaultColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CloudWords = function () {
  function CloudWords() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CloudWords);

    this.$el = this.getElement(options.el);
    this.$words = options.words || [];
    this.$colors = options.colors || (0, _defaultColors2.default)();
    // 是否设置触摸停止
    this.$touchStop = options.touchStop || true;
    this.minSize = parseInt(options.minSize || 14);
    this.maxSize = parseInt(options.maxSize || 26);
    if (typeof options.onClick === 'function') {
      this.onClick = options.onClick;
    }
    this.elems = [];
    this.container = null;
    this.createWordDoms();
  }

  _createClass(CloudWords, [{
    key: 'getElement',
    value: function getElement(el) {
      return el.nodeType === 1 ? el : document.querySelector(el);
    }
  }, {
    key: 'createWordDoms',
    value: function createWordDoms() {
      var _this = this;

      this.container = document.createElement('div');
      this.container.classList.add('cloud-word-container');
      this.$words.forEach(function (word) {
        _this.addWord(word, true);
      });
      this.$el.appendChild(this.container);
      this.setDomsMove();
    }
    // 让文本动起来

  }, {
    key: 'setDomsMove',
    value: function setDomsMove() {
      var _this2 = this;

      this.elems.forEach(function (elem) {
        _this2.setElemMove(elem);
      });
    }
  }, {
    key: 'setElemMove',
    value: function setElemMove(elem) {
      var dom = elem.el;
      elem.move = new _wordMove2.default(dom, this.$el);
      if (this.$touchStop) {
        elem.events = new _eventHandler2.default(elem, this);
      }
    }
  }, {
    key: 'getCssText',
    value: function getCssText() {
      var curColor = this.getColor();
      var curSize = this.getSize();
      return 'display: inline-block; color: ' + curColor + '; font-size: ' + curSize + 'px';
    }
  }, {
    key: 'getColor',
    value: function getColor() {
      var len = this.$colors.length;
      var index = Math.floor(Math.random() * len);
      return this.$colors[index];
    }
  }, {
    key: 'getSize',
    value: function getSize() {
      var diff = this.maxSize - this.minSize;
      var size = Math.floor(Math.random() * diff) + this.minSize;
      return size;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      this.$el.removeChild(this.container);
      this.elems = [];
      this.createWordDoms();
    }
  }, {
    key: 'addWord',
    value: function addWord(word, isInit) {
      var dom = document.createElement('span');
      dom.textContent = word;
      dom.style.cssText = this.getCssText();
      var elem = {
        el: dom,
        word: word
      };
      this.container.appendChild(dom);
      this.elems.push(elem);
      if (!isInit) {
        this.setElemMove(elem);
        this.$words.push(word);
      }
    }
  }, {
    key: 'removeWord',
    value: function removeWord(index) {
      var elem = this.elems[index];
      this.container.removeChild(elem.el);
      this.elems.splice(index, 1);
      this.$words.splice(index, 1);
      elem = null;
    }
  }, {
    key: 'updateWord',
    value: function updateWord(index, word) {
      this.$words[index] = word;
      var elem = this.elems[index];
      elem.dom.textContent = word;
      elem.word = word;
    }
  }]);

  return CloudWords;
}();

exports.default = CloudWords;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WordMove = function () {
  function WordMove(dom, container) {
    _classCallCheck(this, WordMove);

    this.times = 0;
    this.$el = dom;
    this.$container = container;
    this.isMoveOver = false;

    var _getBoundary = (0, _util.getBoundary)(dom, container),
        randomX = _getBoundary.randomX,
        randomY = _getBoundary.randomY;

    this.randomX = randomX;
    this.randomY = randomY;
    this.speedX = this.getSpeed();
    this.speedY = this.getSpeed();
    this.model = {
      x: 0,
      y: 0
    };
    this.animation = null;
    this.registeMove();
  }

  _createClass(WordMove, [{
    key: 'registeMove',
    value: function registeMove() {
      if (this.isMoveOver) {
        return;
      }
      this.model.x += this.speedX;
      this.model.y += this.speedY;
      this.isInnerContainer();
      if (this.times < 100) {
        this.animation = window.requestAnimationFrame(this.registeMove.bind(this));
        this.times = 0;
        this.$el.style.transform = 'translate(' + this.model.x + 'px, ' + this.model.y + 'px)';
      }
    }
  }, {
    key: 'getSpeed',
    value: function getSpeed() {
      return Math.random() * 2 - 1;
    }
  }, {
    key: 'isInnerContainer',
    value: function isInnerContainer() {
      if (this.model.x < this.randomX[0] || this.model.x > this.randomX[1]) {
        this.speedX = -this.speedX;
      }
      if (this.model.y < this.randomY[0] || this.model.y > this.randomY[1]) {
        this.speedY = -this.speedY;
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.isMoveOver = true;
      window.cancelAnimationFrame(this.animation);
      var scale = 26 / parseInt(this.$el.style.fontSize);
      this.$el.style.transform = 'translate3d(' + this.model.x + 'px, ' + this.model.y + 'px,5px) scale(' + scale + ')';
      if (this.model.x < this.randomX[0] + 50 || this.model.y < this.randomY[0] + 50) {
        this.$el.style.transformOrigin = 'left top';
      }
      if (this.model.x > this.randomX[1] - 50 || this.model.y > this.randomY[1] - 50) {
        this.$el.style.transformOrigin = 'right bottom';
      }
    }
  }, {
    key: 'restart',
    value: function restart() {
      this.isMoveOver = false;
      this.registeMove();
    }
  }]);

  return WordMove;
}();

exports.default = WordMove;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoundary = getBoundary;
// 得到边界
function getBoundary(dom, container) {
  var boundaryLeft = dom.offsetLeft - container.offsetLeft;
  var boundaryRight = container.offsetWidth - dom.offsetWidth - boundaryLeft;
  var boundaryTop = dom.offsetTop - container.offsetTop;
  var boundaryBottom = container.offsetHeight - dom.offsetHeight - boundaryTop;
  return {
    randomX: [-boundaryLeft, boundaryRight],
    randomY: [-boundaryTop, boundaryBottom]
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventHandler = function () {
  function EventHandler(elem, ctx) {
    _classCallCheck(this, EventHandler);

    this.el = elem.el;
    this.elem = elem;
    this.ctx = ctx;
    this.registHandler();
  }

  _createClass(EventHandler, [{
    key: 'registHandler',
    value: function registHandler() {
      var _this = this;

      this.el.onmouseover = function () {
        _this.el.style.cursor = 'pointer';
        _this.elem.move.stop();
      };
      this.el.onclick = function () {
        _this.el.style.cursor = 'default';
        _this.ctx.onClick && _this.ctx.onClick(_this.elem);
      };
      this.el.onmouseleave = function () {
        _this.elem.move.restart();
      };
    }
  }]);

  return EventHandler;
}();

exports.default = EventHandler;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDefaultColors;
function getDefaultColors() {
  var colors = new Array(5);
  colors.map(function () {
    var str = '#';
    for (var i = 0; i < 6; i++) {
      var num = Math.floor(Math.random() * 16);
      str += num.toString(16);
    }
    return str;
  });
  return colors;
}

/***/ })
/******/ ])["default"];
});