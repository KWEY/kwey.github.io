var t,e;t=window,e=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";var r,i="object"==typeof Reflect?Reflect:null,o=i&&"function"==typeof i.apply?i.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var s=Number.isNaN||function(t){return t!=t};function a(){a.init.call(this)}t.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var u=10;function c(t){return void 0===t._maxListeners?a.defaultMaxListeners:t._maxListeners}function f(t,e,n,r){var i,o,s;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),s=o[e]),void 0===s)s=o[e]=n,++t._eventsCount;else if("function"==typeof s?s=o[e]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=c(t))>0&&s.length>i&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=s.length,console&&console.warn}return t}function h(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,o(this.listener,this.target,t))}function p(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=h.bind(r);return i.listener=n,r.wrapFn=i,i}function l(t,e,n){var r=t._events;if(void 0===r)return[];var i=r[e];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(i):v(i,i.length)}function y(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");u=t}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},a.prototype.getMaxListeners=function(){return c(this)},a.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r="error"===t,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var s;if(e.length>0&&(s=e[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var u=i[t];if(void 0===u)return!1;if("function"==typeof u)o(u,this,e);else{var c=u.length,f=v(u,c);for(n=0;n<c;++n)o(f[n],this,e)}return!0},a.prototype.addListener=function(t,e){return f(this,t,e,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(t,e){return f(this,t,e,!0)},a.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.on(t,p(this,t,e)),this},a.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.prependListener(t,p(this,t,e)),this},a.prototype.removeListener=function(t,e){var n,r,i,o,s;if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);if(void 0===(r=this._events))return this;if(void 0===(n=r[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,i),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,s||e)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(t){var e,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},a.prototype.listeners=function(t){return l(this,t,!0)},a.prototype.rawListeners=function(t){return l(this,t,!1)},a.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):y.call(t,e)},a.prototype.listenerCount=y,a.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(t,e,n){"use strict";n.r(e);var r,i=n(0),o={yyj:[[-22,-40,-100,-54,-130,0,0,0],[-156,54,-192,176,-96,188,-130,0],[0,194,24,184,20,114,-96,188],[24,26,8,16,0,0,20,114],[-32,42,18,0,360,"#222827"],[-32,42,18,0,360,"#fff",!0],[-32,42,9,0,360,"#222827"],[-32,42,9,0,360,"#222827",!0],[-90,42,18,0,360,"#222827"],[-90,42,18,0,360,"#fff",!0],[-90,42,9,0,360,"#222827"],[-90,42,9,0,360,"#222827",!0],[-68,68,20,20,8,"#222827",!1],[-66,70,16,16,6,"rgba(225,106,125,0.8)",!0],[-14,96,28,0,360,!0,"rgba(225,106,125,0.6)"],[-104,96,28,0,360,!0,"rgba(225,106,125,0.6)"],[-140,110,-135,146,-124,152,-140,100],[14,110,10,146,0,152,14,100],[-34,180,-34,204],[-94,180,-94,204]],hy:[[-9,-19.5,-40.5,-22.5,-57,-15],[-75,-6,-78,9,-81,33],[-84,61.5,-97.5,69,-87,93],[-75,117,-54,117,-42,117],[-27,117,10.5,120,12,75],[15,30,9,19.5,0,0],[-15,24,15,0,360,"#222827"],[-60,24,15,0,360,"#222827"],[-60,24,15,0,360,"#fff",!0],[-15,24,15,0,360,"#fff",!0],[-15,24,15,-90,45,"#222827",!0,!0],[-60,24,15,-90,45,"#222827",!0,!0],[-54,3,7.5,200,340,"#222827"],[-18,12,15,252,288,"#222827"],[-39,42,7.5,40,150,"#222827"],[-82,56,-92,102,-56,94,-82,60],[-10.5,99,7.5,102,12,69,-27,100],[-60,109,-60,130],[-15,109,-15,130],[-75,45,-60,48,-72,51,-57,54],[-15,45,0,42,-9,51,4.5,48]]},s={YYJ_RELOAD:"yyj_reload",YYJ_DESTORY:"yyj_destory",YYJ_START:"yyj_start",YYJ_STOP:"yyj_stop",YYJ_FPS:"yyj_fps",YYJ_RESIZE:"yyj_resize"},a=function(){function t(t){this.yyj=t,this.currentDraw=1,this.paused=!0,this.fps=5,this.range=[-180,74],this.container=this.yyj.container,this.init(),this.events()}return t.prototype.init=function(){this.rect=this.container.getBoundingClientRect(),this.container.innerHTML=this.tpl(this.rect),this.postion={startX:this.rect.width/2-100,startY:this.rect.height/2-60},this.canvas=document.getElementById(this.yyj.prefix+"-wrap"),this.ctx=this.canvas.getContext("2d")},t.prototype.stop=function(){this.paused=!0},t.prototype.start=function(){this.paused&&(this.paused=!1,this.draw(this.postion.startX,this.postion.startY))},t.prototype.reload=function(){this.clear(),this.currentDraw=1,this.paused=!0,this.start()},t.prototype.setFps=function(t){void 0===t&&(t=5),this.fps=t},t.prototype.events=function(){var t=this;this.yyj.on(s.YYJ_START,this.start.bind(this)),this.yyj.on(s.YYJ_STOP,this.stop.bind(this)),this.yyj.on(s.YYJ_RELOAD,this.reload.bind(this)),this.yyj.on(s.YYJ_FPS,(function(e){t.setFps(e)})),this.yyj.on(s.YYJ_RESIZE,(function(){t.stop(),t.init(),t.start()})),this.yyj.on(s.YYJ_DESTORY,(function(){t.clear()}))},t.prototype.clear=function(){this.timer&&clearTimeout(this.timer),this.ctx.clearRect(0,0,this.rect.width,this.rect.height)},t.prototype.draw=function(t,e){var n=this;if(!this.paused){this.clear();var r=this.ctx;r.beginPath(),r.moveTo(t,e),r.strokeStyle="#222827",r.lineWidth=4;for(var i=0;i<this.currentDraw;i++)i<20?this.drawYYJ(t,e,i):this.drawDou(t+this.range[0],e+this.range[1],i-20);this.currentDraw>40||(this.timer=window.setTimeout((function(){n.timer=0,n.currentDraw++,n.draw(t,e)}),1e3/this.fps))}},t.prototype.drawYYJ=function(t,e,n){var r=this.ctx,i=o.yyj[n];switch(!0){case n<4:this.drawBezier(t,e,i),r.stroke(),3===n&&(r.fillStyle="rgba(0,255,0,0.2)",r.fill(),r.closePath());break;case n<12:r.beginPath(),this.drawArc(t+i[0],e+i[1],i[2],i[3],i[4],i[5],i[6]);break;case n<14:this.roundRect(t+i[0],e+i[1],i[2],i[3],i[4],i[5],i[6]);break;case n<16:this.drawArc(t+i[0],e+i[1],i[2],i[3],i[4],i[5],i[6]);break;case n<18:r.beginPath(),r.moveTo(t+i[6],e+i[7]),this.drawBezier(t,e,i),r.strokeStyle="#222827",r.stroke();break;case n<20:this.drawLine(t,e,i)}},t.prototype.drawDou=function(t,e,n){var r=this.ctx,i=o.hy[n];switch(n||(r.beginPath(),r.moveTo(t,e)),!0){case n<6:this.drawBezier(t,e,i),r.stroke(),5===n&&(r.fillStyle="rgba(225,106,125,0.9)",r.fill(),r.closePath());break;case n<15:r.beginPath(),this.drawArc(t+i[0],e+i[1],i[2],i[3],i[4],i[5],i[6]);break;case n<17:r.beginPath(),r.moveTo(t+i[6],e+i[7]),this.drawBezier(t,e,i),r.stroke();break;case n<19:this.drawLine(t,e,i);break;case n<21:this.drawZ(t,e,i)}},t.prototype.drawLine=function(t,e,n){var r=this.ctx;r.beginPath(),r.lineCap="round",r.moveTo(t+n[0],e+n[1]),r.lineTo(t+n[2],e+n[3]),r.stroke()},t.prototype.drawZ=function(t,e,n){var r=this.ctx;r.beginPath(),r.lineCap="round",r.lineJoin="round",r.strokeStyle="#f0b447",r.lineWidth=2,r.moveTo(t+n[0],e+n[1]),r.lineTo(t+n[2],e+n[3]),r.lineTo(t+n[4],e+n[5]),r.lineTo(t+n[6],e+n[7]),r.stroke()},t.prototype.drawBezier=function(t,e,n){this.ctx.bezierCurveTo(t+n[0],e+n[1],t+n[2],e+n[3],t+n[4],e+n[5])},t.prototype.drawArc=function(t,e,n,r,i,o,s,a,u){void 0===o&&(o="#222827"),void 0===s&&(s=!1),void 0===a&&(a=!1),void 0===u&&(u=!1);var c=this.ctx;s?(c.beginPath(),c.fillStyle=o,c.arc(t,e,n,this.getAngle(r),this.getAngle(i),u),c.closePath(),c.fill()):(c.beginPath(),c.strokeStyle=o,c.arc(t,e,n,this.getAngle(r),this.getAngle(i),u),a&&c.closePath(),c.stroke())},t.prototype.roundRect=function(t,e,n,r,i,o,s){void 0===o&&(o="#222827"),void 0===s&&(s=!1);var a=this.ctx,u=i;n<2*u&&(u=n/2),r<2*u&&(u=r/2),a.beginPath(),a.moveTo(t+u,e),a.arcTo(t+n,e,t+n,e+r,u),a.arcTo(t+n,e+r,t,e+r,u),a.arcTo(t,e+r,t,e,u),a.arcTo(t,e,t+n,e,u),a.closePath(),s?(a.fillStyle=o,a.fill()):(a.strokeStyle=o,a.stroke())},t.prototype.getAngle=function(t){return Math.PI*(t/180)},t.prototype.tpl=function(t){return'<canvas id="'+this.yyj.prefix+'-wrap" width="'+t.width+'" height="'+t.height+'">你的版本不支持canvas</canvas>'},t}(),u=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t){function e(e){var n=t.call(this)||this;return n.config=e,n.prefix="yyj",n.container=document.querySelector(""+e.container)||document.createElement("div"),n.animate=new a(n),n}return u(e,t),e.prototype.start=function(){this.emit(s.YYJ_START)},e.prototype.stop=function(){this.emit(s.YYJ_STOP)},e.prototype.setFps=function(t){this.emit(s.YYJ_FPS,t)},e.prototype.reload=function(){this.emit(s.YYJ_RELOAD)},e.prototype.resize=function(){this.emit(s.YYJ_RESIZE)},e.prototype.destory=function(){this.emit(s.YYJ_DESTORY)},e}(i.EventEmitter);e.default=c}]).default},"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("YYJ",[],e):"object"==typeof exports?exports.YYJ=e():t.YYJ=e();
//# sourceMappingURL=yyj.js.map