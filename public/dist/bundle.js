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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/ball.ts":
/*!****************************!*\
  !*** ./src/blocks/ball.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/blocks/entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball(game) {
        var _this = _super.call(this) || this;
        _this.update = function () {
            var game = this.game;
            //Entity.prototype.update.apply(this, arguments); // call parent update()
            // If the ball hits the top postion move it down and vice versa
            if (this.y > game.height - this.height || this.y < 0) {
                this.yVelocity *= -1; // switch the direction of the ball
            }
            if (this.x > game.width - this.width || this.x < 0) {
                this.xVelocity *= -1; // switch the direction of the ball
            }
            var hitter;
            if (this.intersect(game.player)) {
                hitter = game.player;
            }
            if (hitter) {
                //this.xVelocity *= -1.1; // switch the movement / rebound and also increase the speed.
                this.yVelocity *= -1.1;
                // make the game interesting by gaining velocity. 
                // If this is not done, the ball movement after hit will be predictable
                //this.yVelocity += hitter.xVelocity / 2;
            }
            // check if ball intersects with bricks
            for (var i = 0; i < game.wall.bricks.length; i++) {
                var b = game.wall.bricks[i];
                if (this.intersect(b)) {
                    b.show = false;
                    console.log("::brick.intersect");
                }
            }
        };
        _this.game = game;
        _this.width = 20;
        _this.height = 20;
        _this.ax = 0;
        _this.name = "ball";
        var player = document.createElement("div");
        player.style.position = "absolute";
        player.style.width = _this.width + 'px';
        player.style.height = _this.height + 'px';
        player.style.left = _this.x + 'px';
        player.style.top = _this.y + 'px';
        player.setAttribute("id", "ball");
        _this.player = player;
        game.canvas.append(player);
        _this.reset();
        return _this;
    }
    Ball.prototype.moveTo = function (ball) {
        this.x = ball.x;
        this.y = ball.y;
        this.xVelocity = ball.xVelocity;
        this.yVelocity = ball.yVelocity;
    };
    Ball.prototype.draw = function () {
        var player = this.player;
        player.style.left = this.x + 'px';
        player.style.top = this.y + 'px';
    };
    Ball.prototype.reset = function () {
        var game = this.game;
        this.x = game.width / 2 - this.width; // center ball horizontally
        this.y = game.height / 2 - this.height; // center ball vertically
        // Set random values if ball goes offscreen
        var min = -5, max = 5;
        this.yVelocity = Math.floor(Math.random() * (max - min + 1) + min);
        this.xVelocity = Math.random() > 0.5 ? 5 : -5; // 50% chance of starting from left or right
    };
    return Ball;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Ball);


/***/ }),

/***/ "./src/blocks/entity.ts":
/*!******************************!*\
  !*** ./src/blocks/entity.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// The game is composed of actors
var Entity = /** @class */ (function () {
    function Entity() {
        // A position
        this.x = 0;
        this.y = 0;
        this.px = 0;
        this.py = 0;
        // Dimensions
        this.width = 0;
        this.height = 0;
        // A velocity: speed with direction
        this.xVelocity = 0;
        this.yVelocity = 0;
    }
    // On each update, we apply the velocity to the current position.
    // This makes the entity move.
    // Entities are expected to override this method
    Entity.prototype.update = function () {
        this.px = this.x; // prev values
        this.py = this.y;
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    };
    Entity.prototype.draw = function () {
    };
    // The actor  knows how to draw itself.
    // All actors of our game will be white rectangles.
    // Basic bounding box collison detection.
    // Returns 'true' if the actor intersect with another one
    Entity.prototype.intersect = function (other) {
        if (other == undefined)
            return false;
        return this.y + this.height > other.y &&
            this.y < other.y + other.height &&
            this.x + this.width > other.x &&
            this.x < other.x + other.width;
    };
    return Entity;
}());
/* harmony default export */ __webpack_exports__["default"] = (Entity);


/***/ }),

/***/ "./src/blocks/game.ts":
/*!****************************!*\
  !*** ./src/blocks/game.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Game = /** @class */ (function () {
    function Game(canvas) {
        this.canvas = canvas;
    }
    Game.prototype.start = function () {
        var _this = this;
        var fps = 60, interval = 1000 / fps;
        var loop = function () {
            window.requestAnimationFrame(loop);
            _this.update();
            _this.draw();
        };
        loop();
    };
    Game.prototype.update = function () {
        this.entities.forEach(function (entity) {
            if (entity.update)
                entity.update();
        });
    };
    Game.prototype.draw = function () {
        this.entities.forEach(function (entity) {
            if (entity.draw)
                entity.draw();
        });
    };
    return Game;
}());
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/game */ "./src/blocks/game.ts");
/* harmony import */ var _blocks_ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/ball */ "./src/blocks/ball.ts");


var scene = document.querySelector("#game"), game = new _blocks_game__WEBPACK_IMPORTED_MODULE_0__["default"](scene);
game.entities = [
    game.ball = new _blocks_ball__WEBPACK_IMPORTED_MODULE_1__["default"](game)
];
game.start();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEY4QjtBQUc5QjtJQUFrQyx3QkFBTTtJQVl0QyxjQUFZLElBQUk7UUFBaEIsWUFDRSxpQkFBTyxTQW1CUjtRQTRCRCxZQUFNLEdBQUc7WUFDUCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JCLHlFQUF5RTtZQUV6RSwrREFBK0Q7WUFDL0QsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FB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ZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwgZXh0ZW5kcyBFbnRpdHkge1xyXG4gIHdpZHRoOiBhbnlcclxuICBoZWlnaHQ6IGFueVxyXG4gIGF4OiBhbnlcclxuICBuYW1lOiBhbnlcclxuICBnYW1lOiBHYW1lXHJcbiAgeFZlbG9jaXR5OiBhbnlcclxuICB5VmVsb2NpdHk6IGFueVxyXG4gIHg6IGFueVxyXG4gIHk6IGFueVxyXG4gIHBsYXllcjogYW55XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgdGhpcy53aWR0aCA9IDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcclxuICAgIHRoaXMuYXggPSAwO1xyXG4gICAgdGhpcy5uYW1lID0gXCJiYWxsXCI7XHJcblxyXG4gICAgdmFyIHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwbGF5ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBwbGF5ZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcclxuICAgIHBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhbGxcIik7XHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICBnYW1lLmNhbnZhcy5hcHBlbmQocGxheWVyKTtcclxuXHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG8oYmFsbCkge1xyXG4gICAgdGhpcy54ID0gYmFsbC54O1xyXG4gICAgdGhpcy55ID0gYmFsbC55O1xyXG4gICAgdGhpcy54VmVsb2NpdHkgPSBiYWxsLnhWZWxvY2l0eTtcclxuICAgIHRoaXMueVZlbG9jaXR5ID0gYmFsbC55VmVsb2NpdHk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gICAgcGxheWVyLnN0eWxlLmxlZnQgPSB0aGlzLnggKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgdGhpcy54ID0gZ2FtZS53aWR0aCAvIDIgLSB0aGlzLndpZHRoOyAvLyBjZW50ZXIgYmFsbCBob3Jpem9udGFsbHlcclxuICAgIHRoaXMueSA9IGdhbWUuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0OyAvLyBjZW50ZXIgYmFsbCB2ZXJ0aWNhbGx5XHJcblxyXG4gICAgLy8gU2V0IHJhbmRvbSB2YWx1ZXMgaWYgYmFsbCBnb2VzIG9mZnNjcmVlblxyXG4gICAgdmFyIG1pbiA9IC01LFxyXG4gICAgICBtYXggPSA1O1xyXG5cclxuICAgIHRoaXMueVZlbG9jaXR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIHRoaXMueFZlbG9jaXR5ID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDUgOiAtNTsgLy8gNTAlIGNoYW5jZSBvZiBzdGFydGluZyBmcm9tIGxlZnQgb3IgcmlnaHRcclxuICB9XHJcblxyXG4gIHVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgLy9FbnRpdHkucHJvdG90eXBlLnVwZGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBjYWxsIHBhcmVudCB1cGRhdGUoKVxyXG5cclxuICAgIC8vIElmIHRoZSBiYWxsIGhpdHMgdGhlIHRvcCBwb3N0aW9uIG1vdmUgaXQgZG93biBhbmQgdmljZSB2ZXJzYVxyXG4gICAgaWYgKHRoaXMueSA+IGdhbWUuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgfHwgdGhpcy55IDwgMCkge1xyXG4gICAgICB0aGlzLnlWZWxvY2l0eSAqPSAtMTsgLy8gc3dpdGNoIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGJhbGxcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy54ID4gZ2FtZS53aWR0aCAtIHRoaXMud2lkdGggfHwgdGhpcy54IDwgMCkge1xyXG4gICAgICB0aGlzLnhWZWxvY2l0eSAqPSAtMTsgLy8gc3dpdGNoIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGJhbGxcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGl0dGVyO1xyXG5cclxuICAgIGlmICh0aGlzLmludGVyc2VjdChnYW1lLnBsYXllcikpIHtcclxuICAgICAgaGl0dGVyID0gZ2FtZS5wbGF5ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChoaXR0ZXIpIHtcclxuICAgICAgLy90aGlzLnhWZWxvY2l0eSAqPSAtMS4xOyAvLyBzd2l0Y2ggdGhlIG1vdmVtZW50IC8gcmVib3VuZCBhbmQgYWxzbyBpbmNyZWFzZSB0aGUgc3BlZWQuXHJcbiAgICAgIHRoaXMueVZlbG9jaXR5ICo9IC0xLjE7XHJcbiAgICAgIC8vIG1ha2UgdGhlIGdhbWUgaW50ZXJlc3RpbmcgYnkgZ2FpbmluZyB2ZWxvY2l0eS4gXHJcbiAgICAgIC8vIElmIHRoaXMgaXMgbm90IGRvbmUsIHRoZSBiYWxsIG1vdmVtZW50IGFmdGVyIGhpdCB3aWxsIGJlIHByZWRpY3RhYmxlXHJcbiAgICAgIC8vdGhpcy55VmVsb2NpdHkgKz0gaGl0dGVyLnhWZWxvY2l0eSAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgYmFsbCBpbnRlcnNlY3RzIHdpdGggYnJpY2tzXHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnYW1lLndhbGwuYnJpY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBiID0gZ2FtZS53YWxsLmJyaWNrc1tpXTtcclxuICAgICAgaWYgKHRoaXMuaW50ZXJzZWN0KGIpKSB7XHJcbiAgICAgICAgYi5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI6OmJyaWNrLmludGVyc2VjdFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIGdhbWUgaXMgY29tcG9zZWQgb2YgYWN0b3JzXHJcbmNsYXNzIEVudGl0eSB7XHJcbiAgLy8gQSBwb3NpdGlvblxyXG4gIHg6IG51bWJlciA9IDBcclxuICB5OiBudW1iZXIgPSAwXHJcbiAgcHg6IG51bWJlciA9IDBcclxuICBweTogbnVtYmVyID0gMFxyXG5cclxuICAvLyBEaW1lbnNpb25zXHJcbiAgd2lkdGg6IG51bWJlciA9IDBcclxuICBoZWlnaHQ6IG51bWJlciA9IDBcclxuXHJcbiAgLy8gQSB2ZWxvY2l0eTogc3BlZWQgd2l0aCBkaXJlY3Rpb25cclxuICB4VmVsb2NpdHk6IG51bWJlciA9IDA7XHJcbiAgeVZlbG9jaXR5OiBudW1iZXIgPSAwO1xyXG5cclxuICAvLyBPbiBlYWNoIHVwZGF0ZSwgd2UgYXBwbHkgdGhlIHZlbG9jaXR5IHRvIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxyXG4gIC8vIFRoaXMgbWFrZXMgdGhlIGVudGl0eSBtb3ZlLlxyXG4gIC8vIEVudGl0aWVzIGFyZSBleHBlY3RlZCB0byBvdmVycmlkZSB0aGlzIG1ldGhvZFxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMucHggPSB0aGlzLng7ICAvLyBwcmV2IHZhbHVlc1xyXG4gICAgdGhpcy5weSA9IHRoaXMueTtcclxuXHJcbiAgICB0aGlzLnggKz0gdGhpcy54VmVsb2NpdHk7XHJcbiAgICB0aGlzLnkgKz0gdGhpcy55VmVsb2NpdHk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG5cclxuICB9XHJcblxyXG4gIC8vIFRoZSBhY3RvciAga25vd3MgaG93IHRvIGRyYXcgaXRzZWxmLlxyXG4gIC8vIEFsbCBhY3RvcnMgb2Ygb3VyIGdhbWUgd2lsbCBiZSB3aGl0ZSByZWN0YW5nbGVzLlxyXG5cclxuICAvLyBCYXNpYyBib3VuZGluZyBib3ggY29sbGlzb24gZGV0ZWN0aW9uLlxyXG4gIC8vIFJldHVybnMgJ3RydWUnIGlmIHRoZSBhY3RvciBpbnRlcnNlY3Qgd2l0aCBhbm90aGVyIG9uZVxyXG4gIGludGVyc2VjdChvdGhlcikge1xyXG4gICAgaWYgKG90aGVyID09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gb3RoZXIueSAmJlxyXG4gICAgICB0aGlzLnkgPCBvdGhlci55ICsgb3RoZXIuaGVpZ2h0ICYmXHJcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBvdGhlci54ICYmXHJcbiAgICAgIHRoaXMueCA8IG90aGVyLnggKyBvdGhlci53aWR0aDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudGl0eTtcclxuIiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICBlbnRpdGllczogRW50aXR5W11cclxuICBiYWxsOiBhbnlcclxuICBoZWlnaHQ6IGFueVxyXG4gIHdpZHRoOiBhbnlcclxuICBjYW52YXM6IGFueVxyXG5cclxuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBsZXQgZnBzOiBudW1iZXIgPSA2MCxcclxuICAgICAgaW50ZXJ2YWw6IG51bWJlciA9IDEwMDAgLyBmcHM7XHJcblxyXG4gICAgbGV0IGxvb3AgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsb29wKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xyXG4gICAgICBpZiAoZW50aXR5LnVwZGF0ZSkgZW50aXR5LnVwZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgaWYgKGVudGl0eS5kcmF3KSBlbnRpdHkuZHJhdygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9ibG9ja3MvZ2FtZSc7XHJcbmltcG9ydCBCYWxsIGZyb20gJy4vYmxvY2tzL2JhbGwnO1xyXG5cclxudmFyIHNjZW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lXCIpLFxyXG4gIGdhbWUgPSBuZXcgR2FtZShzY2VuZSk7XHJcblxyXG5nYW1lLmVudGl0aWVzID0gW1xyXG4gIGdhbWUuYmFsbCA9IG5ldyBCYWxsKGdhbWUpXHJcbl1cclxuXHJcbmdhbWUuc3RhcnQoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==