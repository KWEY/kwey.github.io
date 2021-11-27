window["Brcode"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(1);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"attributes":{"data-injector":"super-video"},"injectType":"singletonStyleTag"}

options.insert = "head";
options.singleton = true;

var update = __webpack_require__(3)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, "body,div,html,input,li,ol,p,textarea,ul{margin:0;padding:0}img{border:0}li{list-style:none outside none}a,a:active,a:hover,a:link,a:link:hover,a:visited{text-decoration:none}.gsl-progress{height:10px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.gsl-progress-wrap{position:relative;width:100%;height:2px;border-radius:1px;padding:0 3px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:hsla(0,0%,100%,.2)}.gsl-progress-bar{position:relative;height:100%;width:0;border-radius:1px;background-color:#00a1d6;z-index:1}.gsl-progress-bar:before{content:\"\";display:block;left:-3px;width:3px;height:2px;z-index:1}.gsl-progress-bar:before,.gsl-progress-dot{position:absolute;top:0;background-color:#00a1d6}.gsl-progress-dot{right:0;width:6px;height:6px;-webkit-transform:translate3d(3px,-2px,0);transform:translate3d(3px,-2px,0);border-radius:50%}.gsl-qrcode-btn{position:absolute;top:0;left:0;width:20%;height:0;padding-top:20%;cursor:pointer;display:none;pointer-events:auto}.gsl-qrcode-btn:after{content:\"\";position:absolute;left:50%;top:50%;width:2px;height:2px;border-radius:50%;-webkit-animation:ripple 1.6s linear .8s infinite;animation:ripple 1.6s linear .8s infinite}.gsl-qrcode-btn-img{width:50%;position:absolute;left:50%;top:50%;margin:-3px 0 0 -3px;z-index:1;-webkit-animation:mouse .8s infinite alternate;animation:mouse .8s infinite alternate}.gsl-qrcode-btn.gsl-show{display:block}@-webkit-keyframes mouse{0%{-webkit-transform:translateX(22px) rotate(10deg);transform:translateX(22px) rotate(10deg)}to{-webkit-transform:translateX(0) rotate(-10deg);transform:translateX(0) rotate(-10deg)}}@keyframes mouse{0%{-webkit-transform:translateX(22px) rotate(10deg);transform:translateX(22px) rotate(10deg)}to{-webkit-transform:translateX(0) rotate(-10deg);transform:translateX(0) rotate(-10deg)}}@-webkit-keyframes ripple{0%{-webkit-box-shadow:0 0 0 8px hsla(0,0%,100%,.2),0 0 0 18px hsla(0,0%,100%,.2),0 0 0 48px hsla(0,0%,100%,.2);box-shadow:0 0 0 8px hsla(0,0%,100%,.2),0 0 0 18px hsla(0,0%,100%,.2),0 0 0 48px hsla(0,0%,100%,.2)}to{-webkit-box-shadow:0 0 0 18px hsla(0,0%,100%,.2),0 0 0 48px hsla(0,0%,100%,.2),0 0 0 84px hsla(0,0%,100%,0);box-shadow:0 0 0 18px hsla(0,0%,100%,.2),0 0 0 48px hsla(0,0%,100%,.2),0 0 0 84px hsla(0,0%,100%,0)}}@keyframes ripple{0%{-webkit-box-shadow:0 0 0 8px hsla(0,0%,100%,.2),0 0 0 18px hsla(0,0%,100%,.2),0 0 0 48px hsla(0,0%,100%,.2);box-shadow:0 0 0 8px hsla(0,0%,100%,.2),0 0 0 18px hsla(0,0%,100%,.2),0 0 0 48px hsla(0,0%,100%,.2)}to{-webkit-box-shadow:0 0 0 18px hsla(0,0%,100%,.2),0 0 0 48px hsla(0,0%,100%,.2),0 0 0 84px hsla(0,0%,100%,0);box-shadow:0 0 0 18px hsla(0,0%,100%,.2),0 0 0 48px hsla(0,0%,100%,.2),0 0 0 84px hsla(0,0%,100%,0)}}.gsl{position:relative;max-width:600px;width:100%;height:100%;overflow:hidden;cursor:pointer;-webkit-tap-highlight-color:transparent}.gsl-event{top:0;height:100%;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:2}.gsl-event,.gsl-event-time{position:absolute;left:0;width:100%}.gsl-event-time{bottom:0;height:10px}.gsl-text{position:absolute;top:0;left:0;pointer-events:none;word-break:break-all;font-size:20px}.gsl-video{background-color:#000;pointer-events:none;z-index:1}.gsl-first,.gsl-sec,.gsl-three,.gsl-video{position:absolute;top:0;left:0;width:100%;height:100%}.gsl-first,.gsl-sec,.gsl-three{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-shadow:none!important;box-shadow:none!important;background-color:#000!important}.gsl-first .player-mobile,.gsl-sec .player-mobile,.gsl-three .player-mobile{position:absolute;top:0;left:0;height:100%;width:100%;pointer-events:none}.gsl-first.gsl-top,.gsl-sec.gsl-top,.gsl-three.gsl-top{top:-100%}.gsl-first.gsl-bottom,.gsl-sec.gsl-bottom,.gsl-three.gsl-bottom{top:100%}.gsl-first{background-color:#0ff}.gsl-three{background-color:red}", ""]);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/static/index.less
var src_static = __webpack_require__(0);

// CONCATENATED MODULE: ./src/static/mm.png
/* harmony default export */ var mm = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB6CAYAAAB0rJfZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Njc4RTUwOUJENUEyMTFFQkI4RURBNUM3NkJENzRFQUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Njc4RTUwOUFENUEyMTFFQkI4RURBNUM3NkJENzRFQUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIwMjAgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IjgxMTI1REVGQURGQTJCNjc0MzYwMUZFQjNGOTAyMzhBIiBzdFJlZjpkb2N1bWVudElEPSI4MTEyNURFRkFERkEyQjY3NDM2MDFGRUIzRjkwMjM4QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj0naq8AADlkSURBVHja7H0HYFTXlfa9973pM5rRqDeEGkii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");
// CONCATENATED MODULE: ./src/qrcode.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var qrcode_Qrcode = (function () {
    function Qrcode(opt) {
        this.list = [];
        this.hasCard = false;
        this.ppx = opt.ppx;
        this.config = __assign({}, opt);
        this.init();
        this.list = opt.list;
    }
    Qrcode.prototype.init = function () {
        var _this = this;
        var ppx = this.ppx;
        var ctr = this.config.container;
        ctr.insertAdjacentHTML('beforeend', this.tpl());
        this.template = {
            btn: ctr.querySelector("." + ppx + "-qrcode-btn")
        };
        this.template.btn.addEventListener('touchstart', function (e) {
            e.stopPropagation();
            e.preventDefault();
            _this.callApp();
        }, true);
        this.template.btn.addEventListener('mousedown', function (e) {
            e.stopPropagation();
            e.preventDefault();
            _this.callApp();
        }, true);
    };
    Qrcode.prototype.callApp = function () {
        try {
            if (this.card) {
                var val = JSON.parse(this.card.value);
                var ua = navigator.userAgent.toLowerCase();
                this.config.cb();
                if (/AppleWebKit.*Mobile.*/i.test(ua)) {
                    window.location = val.app;
                }
                else {
                    window.open(val.link);
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    Qrcode.prototype.timeUpdate = function (time) {
        for (var i = 0; i < this.list.length; i++) {
            var card = this.list[i];
            if (card.from <= time && time <= card.to) {
                if (this.hasCard && card === this.card) {
                    return;
                }
                this.card = card;
                this.posX = card.x * 100 + '%';
                this.posY = card.y * 100 + '%';
                this.width = card.width * 100 + '%';
                this.template.btn.style.cssText = "left:" + this.posX + ";top:" + this.posY + ";width:" + this.width + ";padding-top:" + this.width + ";";
                this.show();
                return;
            }
        }
        this.hide();
        this.card = null;
    };
    Qrcode.prototype.hide = function () {
        this.template.btn.classList.remove(this.ppx + "-show");
        this.hasCard = false;
    };
    Qrcode.prototype.show = function () {
        this.hasCard = true;
        this.template.btn.classList.add(this.ppx + "-show");
    };
    Qrcode.prototype.tpl = function () {
        var ppx = this.ppx;
        return "<div class=\"" + ppx + "-qrcode-btn\"><img class=\"" + ppx + "-qrcode-btn-img\" src=\"" + mm + "\"></div>";
    };
    return Qrcode;
}());
/* harmony default export */ var qrcode = (qrcode_Qrcode);

// CONCATENATED MODULE: ./src/load.ts
var list = [
    {
        width: 0.15390625,
        to: 21.9219,
        value: '{"link":"//www.bilibili.com/video/BV1BV411s7gh","app":"bilibili://video/BV1BV411s7gh"}',
        x: 0.72395833333333,
        from: 9.0423666666667,
        y: 0.11435185185185,
        height: 0.27361111111111,
    },
    {
        width: 0.15390625,
        to: 9.9219,
        value: JSON.stringify({ "link": "//item.taobao.com/item.htm?id=39308395877", "app": "taobao://id/39308395877" }),
        x: 0.32395833333333,
        from: 2.0423666666667,
        y: 0.11435185185185,
        height: 0.27361111111111,
    },
    {
        width: 0.15390625,
        to: 15.9219,
        value: '{"link":"//www.bilibili.com/video/BV1BV411s7gh","app":"bilibili://video/BV1BV411s7gh"}',
        x: 0.12395833333333,
        from: 3.0423666666667,
        y: 0.11435185185185,
        height: 0.27361111111111,
    },
    {
        width: 0.15390625,
        to: 14.9219,
        value: '{"link":"//www.bilibili.com/video/BV1BV411s7gh","app":"bilibili://video/BV1BV411s7gh"}',
        x: 0.52395833333333,
        from: 4.0423666666667,
        y: 0.11435185185185,
        height: 0.27361111111111,
    },
];
var Utils = (function () {
    function Utils() {
    }
    Utils.load = function (cid, i) {
        return Utils.ajax({
            method: 'get',
            url: "http://172.16.39.144:29980/marks?cid=" + cid,
        }, i);
    };
    Utils.ajax = function (obj, i) {
        return new Promise(function (resolve, reject) {
            resolve({
                data: [list[i]]
            });
        });
        return new Promise(function (resolve, reject) {
            var method = obj.method ? obj.method.toUpperCase() : 'GET';
            var async = obj.async ? true : false;
            var xhr = new XMLHttpRequest();
            var data = obj.data ? Utils.objToStr(obj.data) : '';
            xhr.withCredentials = obj.withCredentials || false;
            var url = obj.url + "?" + data;
            xhr.open(method, url, async);
            xhr.send();
            xhr.addEventListener('load', function () {
                resolve(xhr.response);
            });
            xhr.addEventListener('error', function () {
                reject();
            });
            xhr.addEventListener('abort', function () {
                reject();
            });
        });
    };
    Utils.objToStr = function (obj) {
        var oStr = '';
        for (var key in obj) {
            oStr += key + "=" + obj[key] + "&";
        }
        return oStr.slice(0, -1);
    };
    return Utils;
}());
/* harmony default export */ var load = (Utils);

// CONCATENATED MODULE: ./src/progress.ts
var progress_assign = (undefined && undefined.__assign) || function () {
    progress_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return progress_assign.apply(this, arguments);
};
var Progress = (function () {
    function Progress(container, options) {
        this.container = container;
        this.ppx = options.ppx;
        this.container.classList.add(this.ppx + "-progress");
        this.options = progress_assign({}, options);
        this.events = {};
        this.init();
    }
    Progress.prototype.init = function () {
        var _this = this;
        this.valueOut = this.options.value;
        this.container.innerHTML = this.tpl();
        this.elements = {
            wrap: this.container.querySelector("." + this.ppx + "-progress-wrap"),
            bar: this.container.querySelector("." + this.ppx + "-progress-bar"),
            thumb: this.container.querySelector("." + this.ppx + "-progress-dot"),
        };
        this.value(this.options.value);
        var thumbMove = function (e) {
            _this.move(_this.handleEvent(e).percent);
            _this.moved = true;
        };
        var thumbUp = function () {
            document.removeEventListener('mouseleave', thumbUp);
            window.removeEventListener('mouseup', thumbUp);
            window.removeEventListener('mousemove', thumbMove);
            window.removeEventListener('touchend', thumbUp);
            window.removeEventListener('touchmove', thumbMove);
            if (_this.valueOut !== _this.valueIn || _this.moved) {
                _this.valueOut = _this.valueIn;
                _this.trigger('change', {
                    value: _this.getAnalyzedValue(_this.options.val2show, _this.valueIn),
                    manual: true,
                });
            }
            _this.moved = false;
            _this.moving = false;
        };
        this.container.addEventListener('mousedown', function (e) {
            if (e.button === 0) {
                e.preventDefault();
                e.stopPropagation();
                _this.moving = true;
                window.addEventListener('mousemove', thumbMove);
                window.addEventListener('mouseup', thumbUp);
                document.addEventListener('mouseleave', thumbUp);
                _this.move(_this.handleEvent(e).percent);
            }
        });
        this.container.addEventListener('touchstart', function (e) {
            e.cancelable && e.preventDefault();
            e.stopPropagation();
            _this.moving = true;
            _this.container.addEventListener('touchmove', thumbMove);
            _this.container.addEventListener('touchend', thumbUp);
            _this.container.addEventListener('touchcancel', thumbUp);
            _this.move(_this.handleEvent(e).percent);
        });
        this.container.addEventListener('click', function (e) {
            e.stopPropagation();
        }, true);
    };
    Progress.prototype.handleEvent = function (e) {
        var percent;
        var distance;
        var parentL = 0;
        var clientD = 'clientX';
        distance =
            (e[clientD] ||
                (e.changedTouches && e.changedTouches[0][clientD]) ||
                0) -
                this.elements.wrap.getBoundingClientRect()['left'] -
                parentL;
        percent = distance / this.elements.wrap.clientWidth;
        percent = Math.max(percent, 0);
        percent = Math.min(percent, 1);
        return {
            percent: percent,
            distance: distance,
        };
    };
    Progress.prototype.getAnalyzedValue = function (fun, value) {
        if (fun) {
            return parseFloat(fun(value).toFixed(2));
        }
        else {
            return value;
        }
    };
    Progress.prototype.resize = function () { };
    Progress.prototype.value = function (percent, preventEvent) {
        if (preventEvent === void 0) { preventEvent = false; }
        if (typeof percent !== 'number' || this.moving) {
            return;
        }
        if (this.options.show2val) {
            percent = this.options.show2val(percent);
        }
        this.move(percent, preventEvent);
    };
    Progress.prototype.move = function (percent, preventEvent) {
        if (preventEvent === void 0) { preventEvent = false; }
        percent = Math.max(+percent, 0);
        percent = Math.min(percent, 1);
        if (this.valueIn !== percent) {
            this.valueIn = percent;
            if (this.elements.bar) {
                this.elements.bar.style.width = percent * 100 + "%";
            }
            var val = this.getAnalyzedValue(this.options.val2show, percent);
            this.trigger('change', {
                value: val,
                manual: preventEvent,
            });
        }
    };
    Progress.prototype.on = function (name, handler) {
        if (typeof name === 'string' && typeof handler === 'function') {
            if (!this.events[name]) {
                this.events[name] = [];
            }
            this.events[name].push(handler);
        }
        return this;
    };
    Progress.prototype.off = function (name, handler) {
        if (!handler) {
            this.events[name] = [];
        }
        else {
            var index = this.events[name].indexOf(handler);
            if (index > -1) {
                this.events[name].splice(index, 1);
            }
        }
        return this;
    };
    Progress.prototype.trigger = function (name, data) {
        if (this.events[name] && this.events[name].length) {
            this.events[name].forEach(function (item) {
                item(data);
            });
        }
    };
    Progress.prototype.tpl = function () {
        return "<div class=\"" + this.ppx + "-progress-wrap\">\n        <div class=\"" + this.ppx + "-progress-bar\">\n            <span class=\"" + this.ppx + "-progress-dot\"></span>\n        </div>\n    </div>";
    };
    Progress.prototype.dispose = function () {
        this.events = {};
        this.container.innerHTML = '';
    };
    return Progress;
}());
/* harmony default export */ var progress = (Progress);

// CONCATENATED MODULE: ./src/index.ts




var src_VidoePage = (function () {
    function VidoePage(cfg) {
        this.prefix = 'gsl';
        this.touchStart = 0;
        this.touchRange = 0;
        this.height = 0;
        this.width = 0;
        this.moved = false;
        this.moving = false;
        this.eventHtml = '';
        this.container = cfg.container;
        this.list = cfg.list;
        this.init();
    }
    VidoePage.prototype.init = function () {
        var _this = this;
        this.eventHtml = "<div class=\"" + this.prefix + "-event\"><div class=\"" + this.prefix + "-event-time\"></div></div>";
        this.container.innerHTML = this.tpl();
        this.templete = {
            wrap: this.container.querySelector("." + this.prefix),
            event: this.container.querySelector("." + this.prefix + "-event"),
            first: this.container.querySelector("." + this.prefix + "-first"),
            sec: this.container.querySelector("." + this.prefix + "-sec"),
            three: this.container.querySelector("." + this.prefix + "-three"),
        };
        this.resize();
        this.player2 = this.initPlayer(this.list[0], this.templete.sec);
        this.player2.index = 0;
        this.player2.play();
        var thumbMove = function (e) {
            _this.moved = true;
            var y = _this.handleEvent(e);
            _this.touchRange = y - _this.touchStart;
            _this.endPosition(_this.touchRange);
            if (_this.touchRange > 10) {
                if (_this.player1) {
                    return;
                }
                var index = _this.player2.index - 1;
                if (index < 0) {
                    index = _this.list.length - 1;
                }
                _this.player1 = _this.initPlayer(_this.list[index], _this.templete.first);
                _this.player1.index = index;
            }
            else if (_this.touchRange < -10) {
                if (_this.player3) {
                    return;
                }
                var index = _this.player2.index + 1;
                if (index > _this.list.length - 1) {
                    index = 0;
                }
                _this.player3 = _this.initPlayer(_this.list[index], _this.templete.three);
                _this.player3.index = index;
            }
        };
        var thumbUp = function () {
            console.log('touchend');
            _this.mouseEnd();
            _this.templete.wrap.removeEventListener('touchmove', thumbMove);
            _this.templete.wrap.removeEventListener('touchend', thumbUp);
            _this.templete.wrap.removeEventListener('mousemove', thumbMove);
            _this.templete.wrap.removeEventListener('mouseup', thumbUp);
            _this.templete.wrap.removeEventListener('mouseleave', thumbUp);
        };
        this.templete.wrap.addEventListener('touchstart', function (e) {
            e.stopPropagation();
            e.preventDefault();
            _this.moved = false;
            _this.moving = true;
            _this.touchStart = _this.handleEvent(e);
            _this.templete.wrap.addEventListener('touchmove', thumbMove);
            _this.templete.wrap.addEventListener('touchend', thumbUp);
        });
        this.templete.wrap.addEventListener('mousedown', function (e) {
            if (e.button === 0) {
                e.preventDefault();
                e.stopPropagation();
                _this.moved = false;
                _this.moving = true;
                _this.touchStart = _this.handleEvent(e);
                _this.templete.wrap.addEventListener('mousemove', thumbMove);
                _this.templete.wrap.addEventListener('mouseup', thumbUp);
                _this.templete.wrap.addEventListener('mouseleave', thumbUp);
            }
        });
    };
    VidoePage.prototype.mouseEnd = function () {
        var _this = this;
        if (!this.moved) {
            this.player2.toogle();
            return;
        }
        if (this.touchRange > 100) {
            this.endPosition(this.height);
        }
        else if (this.touchRange < -100) {
            this.endPosition(-this.height);
        }
        else {
            this.endPosition(0);
        }
        setTimeout(function () {
            var _a, _b;
            if (_this.touchRange > 100) {
                _this.endPosition(0);
                _this.player1.play();
                _this.player2.pause();
                _this.templete.first.classList.remove(_this.prefix + "-top");
                _this.templete.three.classList.remove(_this.prefix + "-bottom");
                _this.templete.sec.classList.add(_this.prefix + "-bottom");
                _this.templete.three.classList.add(_this.prefix + "-top");
                var cache = _this.templete.three;
                _this.templete.three = _this.templete.sec;
                _this.templete.sec = _this.templete.first;
                _this.templete.first = cache;
                (_a = _this.player3) === null || _a === void 0 ? void 0 : _a.destroy();
                _this.templete.first.innerHTML = _this.eventHtml;
                _this.player3 = _this.player2;
                _this.player2 = _this.player1;
                _this.player1 = null;
            }
            else if (_this.touchRange < -100) {
                _this.endPosition(0);
                _this.player3.play();
                _this.player2.pause();
                _this.templete.first.classList.remove(_this.prefix + "-top");
                _this.templete.three.classList.remove(_this.prefix + "-bottom");
                _this.templete.sec.classList.add(_this.prefix + "-top");
                _this.templete.first.classList.add(_this.prefix + "-bottom");
                var cache = _this.templete.first;
                _this.templete.first = _this.templete.sec;
                _this.templete.sec = _this.templete.three;
                _this.templete.three = cache;
                (_b = _this.player1) === null || _b === void 0 ? void 0 : _b.destroy();
                _this.templete.three.innerHTML = _this.eventHtml;
                _this.player1 = _this.player2;
                _this.player2 = _this.player3;
                _this.player3 = null;
            }
            _this.touchRange = 0;
        }, 0);
        this.moving = false;
    };
    VidoePage.prototype.resize = function () {
        var rect = this.templete.wrap.getBoundingClientRect();
        this.height = rect.height;
        this.width = rect.width;
    };
    VidoePage.prototype.endPosition = function (d) {
        var first = this.transform(d);
        this.templete.first.style.cssText = first;
        this.templete.sec.style.cssText = first;
        this.templete.three.style.cssText = first;
    };
    VidoePage.prototype.transform = function (val) {
        return "transform: translateY(" + val + "px);";
    };
    VidoePage.prototype.initPlayer = function (data, ele) {
        var _this = this;
        ele.insertAdjacentHTML('beforeend', "<video class=\"" + this.prefix + "-video\" src=\"" + data.url + "\" x5-playsinline=\"\" playsinline=\"true\" webkit-playsinline=\"true\" x-webkit-airplay=\"true\" x5-video-player-type=\"h5\" x5-video-player-fullscreen=\"\" x5-video-orientation=\"portraint\">< /video>");
        var video = ele.querySelector("." + this.prefix + "-video");
        video.volume = 0.8;
        video.toogle = function () {
            if (video.paused) {
                video.play();
            }
            else {
                video.pause();
            }
        };
        video.destroy = function () { };
        video.addEventListener('play', function () { });
        video.addEventListener('pause', function () { });
        video.addEventListener('canplay', function () {
            var event = ele.querySelector("." + _this.prefix + "-event");
            load.load(362896120, data.index).then(function (res) {
                video.list = res.data;
                video.qrcode = new qrcode({
                    container: event,
                    ppx: _this.prefix,
                    list: res.data,
                    cb: function () {
                        video.pause();
                    }
                });
            });
            video.progress = new progress(event.querySelector("." + _this.prefix + "-event-time"), {
                value: 0,
                ppx: _this.prefix
            });
            video.progress.on('change', function (e) {
                if (e.manual) {
                    video.currentTime = e.value * video.duration;
                }
            });
            _this.resizeInner(video, event);
        });
        video.addEventListener('ended', function () {
            video.currentTime = 0;
            video.play();
        });
        video.addEventListener('error', function () { });
        video.addEventListener('timeupdate', function () {
            var time = video.currentTime;
            if (video.qrcode) {
                video.qrcode.timeUpdate(time);
            }
            if (video.progress) {
                video.progress.value(time / video.duration);
            }
        });
        return video;
    };
    VidoePage.prototype.resizeInner = function (video, inner) {
        if (!video || !inner) {
            return;
        }
        var w = this.width || 1;
        var h = this.height || 1;
        var vw = video.videoWidth || 1;
        var vh = video.videoHeight || 1;
        var width = '';
        var height = '';
        if (w / h > vw / vh) {
            height = '100%';
            width = (vw * h) / vh + "px";
        }
        else {
            width = '100%';
            height = (vh * w) / vw + "px";
        }
        inner.style.cssText = "width:" + width + ";height:" + height + ";";
        inner.insertAdjacentHTML('beforeend', "<div class=\"" + this.prefix + "-text\">" + JSON.stringify({
            w: w,
            h: h,
            vw: vw,
            vh: vh,
            width: width,
            height: height
        }) + "</div>");
    };
    VidoePage.prototype.tpl = function () {
        return "<div class=\"" + this.prefix + "\">\n            <div class=\"" + this.prefix + "-first " + this.prefix + "-top\">" + this.eventHtml + "</div>\n            <div class=\"" + this.prefix + "-sec\">" + this.eventHtml + "</div>\n            <div class=\"" + this.prefix + "-three " + this.prefix + "-bottom\">" + this.eventHtml + "</div>\n        </div>";
    };
    VidoePage.prototype.handleEvent = function (e) {
        var clientD = 'clientY';
        var distance = e[clientD] ||
            (e.changedTouches && e.changedTouches[0][clientD]) ||
            0;
        return distance;
    };
    return VidoePage;
}());
/* harmony default export */ var src = __webpack_exports__["default"] = (src_VidoePage);


/***/ })
/******/ ])["default"];
//# sourceMappingURL=brcode.js.map