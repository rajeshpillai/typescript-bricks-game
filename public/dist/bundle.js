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
        var _this = _super.call(this, game) || this;
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

/***/ "./src/blocks/brick.ts":
/*!*****************************!*\
  !*** ./src/blocks/brick.ts ***!
  \*****************************/
/*! exports provided: Brick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brick", function() { return Brick; });
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

var Brick = /** @class */ (function (_super) {
    __extends(Brick, _super);
    function Brick(game) {
        var _this = _super.call(this, game) || this;
        _this.width = 60;
        _this.height = 20;
        _this.score = 0;
        _this.xVelocity = 0;
        _this.yVelocity = 0;
        _this.y = 0;
        _this.x = 0;
        _this.show = true;
        var player = document.createElement("div");
        player.style.position = "absolute";
        player.style.width = _this.width + 'px';
        player.style.height = _this.height + 'px';
        player.style.left = _this.x + 'px';
        player.style.top = _this.y + 'px';
        player.className += " brick";
        _this.player = player;
        game.canvas.append(player);
        return _this;
    }
    Brick.prototype.draw = function () {
        var player = this.player;
        player.style.left = this.x + 'px';
        player.style.top = this.y + 'px';
    };
    Brick.prototype.hide = function () {
        var player = this.player;
        player.style.display = "none";
    };
    return Brick;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]));



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
    function Entity(game) {
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

/***/ "./src/blocks/wall.ts":
/*!****************************!*\
  !*** ./src/blocks/wall.ts ***!
  \****************************/
/*! exports provided: Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return Wall; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/blocks/entity.ts");
/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brick */ "./src/blocks/brick.ts");
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


var Wall = /** @class */ (function (_super) {
    __extends(Wall, _super);
    function Wall(game) {
        var _this = _super.call(this, game) || this;
        _this.bricks = [];
        _this.init(game);
        return _this;
    }
    Wall.prototype.init = function (game) {
        for (var i = 0; i < 10; i++) {
            var b = new _brick__WEBPACK_IMPORTED_MODULE_1__["Brick"](game);
            b.player.setAttribute("id", "brick_" + i);
            b.x += b.width * i;
            b.y = 0;
            this.bricks.push(b);
        }
    };
    Wall.prototype.update = function () {
    };
    Wall.prototype.draw = function () {
        for (var i = 0; i < this.bricks.length; i++) {
            var b = this.bricks[i];
            if (b.show) {
                b.draw();
            }
            else {
                b.hide();
            }
        }
    };
    return Wall;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]));



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
/* harmony import */ var _blocks_wall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/wall */ "./src/blocks/wall.ts");



var scene = document.querySelector("#game"), game = new _blocks_game__WEBPACK_IMPORTED_MODULE_0__["default"](scene);
game.entities = [
    game.ball = new _blocks_ball__WEBPACK_IMPORTED_MODULE_1__["default"](game),
    game.wall = new _blocks_wall__WEBPACK_IMPORTED_MODULE_2__["Wall"](game)
];
game.start();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYnJpY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvd2FsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEY4QjtBQUc5QjtJQUFrQyx3QkFBTTtJQVl0QyxjQUFZLElBQUk7UUFBaEIsWUFDRSxrQkFBTSxJQUFJLENBQUMsU0FtQlo7UUE0QkQsWUFBTSxHQUFHO1lBQ1AsSUFBSSxJQUFJLEdBQUcsSUFBSSxD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Q0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUNWLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNMLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNWO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQ0FqQ3lCLCtDQUFNLEdBaUMvQjs7Ozs7Ozs7Ozs7Ozs7QUNwQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDQTtBQUNJO0FBRXJDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQ3pDLElBQUksR0FBRyxJQUFJLG9EQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFekIsSUFBSSxDQUFDLFFBQVEsR0FBRztJQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxvREFBSSxDQUFDLElBQUksQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaURBQUksQ0FBQyxJQUFJLENBQUM7Q0FDM0I7QUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIEVudGl0eSB7XHJcbiAgd2lkdGg6IGFueVxyXG4gIGhlaWdodDogYW55XHJcbiAgYXg6IGFueVxyXG4gIG5hbWU6IGFueVxyXG4gIGdhbWU6IEdhbWVcclxuICB4VmVsb2NpdHk6IGFueVxyXG4gIHlWZWxvY2l0eTogYW55XHJcbiAgeDogYW55XHJcbiAgeTogYW55XHJcbiAgcGxheWVyOiBhbnlcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgdGhpcy53aWR0aCA9IDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcclxuICAgIHRoaXMuYXggPSAwO1xyXG4gICAgdGhpcy5uYW1lID0gXCJiYWxsXCI7XHJcblxyXG4gICAgdmFyIHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwbGF5ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBwbGF5ZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcclxuICAgIHBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhbGxcIik7XHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICBnYW1lLmNhbnZhcy5hcHBlbmQocGxheWVyKTtcclxuXHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG8oYmFsbCkge1xyXG4gICAgdGhpcy54ID0gYmFsbC54O1xyXG4gICAgdGhpcy55ID0gYmFsbC55O1xyXG4gICAgdGhpcy54VmVsb2NpdHkgPSBiYWxsLnhWZWxvY2l0eTtcclxuICAgIHRoaXMueVZlbG9jaXR5ID0gYmFsbC55VmVsb2NpdHk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gICAgcGxheWVyLnN0eWxlLmxlZnQgPSB0aGlzLnggKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgdGhpcy54ID0gZ2FtZS53aWR0aCAvIDIgLSB0aGlzLndpZHRoOyAvLyBjZW50ZXIgYmFsbCBob3Jpem9udGFsbHlcclxuICAgIHRoaXMueSA9IGdhbWUuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0OyAvLyBjZW50ZXIgYmFsbCB2ZXJ0aWNhbGx5XHJcblxyXG4gICAgLy8gU2V0IHJhbmRvbSB2YWx1ZXMgaWYgYmFsbCBnb2VzIG9mZnNjcmVlblxyXG4gICAgdmFyIG1pbiA9IC01LFxyXG4gICAgICBtYXggPSA1O1xyXG5cclxuICAgIHRoaXMueVZlbG9jaXR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIHRoaXMueFZlbG9jaXR5ID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDUgOiAtNTsgLy8gNTAlIGNoYW5jZSBvZiBzdGFydGluZyBmcm9tIGxlZnQgb3IgcmlnaHRcclxuICB9XHJcblxyXG4gIHVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgLy9FbnRpdHkucHJvdG90eXBlLnVwZGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBjYWxsIHBhcmVudCB1cGRhdGUoKVxyXG5cclxuICAgIC8vIElmIHRoZSBiYWxsIGhpdHMgdGhlIHRvcCBwb3N0aW9uIG1vdmUgaXQgZG93biBhbmQgdmljZSB2ZXJzYVxyXG4gICAgaWYgKHRoaXMueSA+IGdhbWUuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgfHwgdGhpcy55IDwgMCkge1xyXG4gICAgICB0aGlzLnlWZWxvY2l0eSAqPSAtMTsgLy8gc3dpdGNoIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGJhbGxcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy54ID4gZ2FtZS53aWR0aCAtIHRoaXMud2lkdGggfHwgdGhpcy54IDwgMCkge1xyXG4gICAgICB0aGlzLnhWZWxvY2l0eSAqPSAtMTsgLy8gc3dpdGNoIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGJhbGxcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGl0dGVyO1xyXG5cclxuICAgIGlmICh0aGlzLmludGVyc2VjdChnYW1lLnBsYXllcikpIHtcclxuICAgICAgaGl0dGVyID0gZ2FtZS5wbGF5ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChoaXR0ZXIpIHtcclxuICAgICAgLy90aGlzLnhWZWxvY2l0eSAqPSAtMS4xOyAvLyBzd2l0Y2ggdGhlIG1vdmVtZW50IC8gcmVib3VuZCBhbmQgYWxzbyBpbmNyZWFzZSB0aGUgc3BlZWQuXHJcbiAgICAgIHRoaXMueVZlbG9jaXR5ICo9IC0xLjE7XHJcbiAgICAgIC8vIG1ha2UgdGhlIGdhbWUgaW50ZXJlc3RpbmcgYnkgZ2FpbmluZyB2ZWxvY2l0eS4gXHJcbiAgICAgIC8vIElmIHRoaXMgaXMgbm90IGRvbmUsIHRoZSBiYWxsIG1vdmVtZW50IGFmdGVyIGhpdCB3aWxsIGJlIHByZWRpY3RhYmxlXHJcbiAgICAgIC8vdGhpcy55VmVsb2NpdHkgKz0gaGl0dGVyLnhWZWxvY2l0eSAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgYmFsbCBpbnRlcnNlY3RzIHdpdGggYnJpY2tzXHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnYW1lLndhbGwuYnJpY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBiID0gZ2FtZS53YWxsLmJyaWNrc1tpXTtcclxuICAgICAgaWYgKHRoaXMuaW50ZXJzZWN0KGIpKSB7XHJcbiAgICAgICAgYi5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI6OmJyaWNrLmludGVyc2VjdFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9lbnRpdHlcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEJyaWNrIGV4dGVuZHMgRW50aXR5IHtcclxuICB5OiBhbnlcclxuICB4OiBhbnlcclxuICB3aWR0aDogYW55XHJcbiAgaGVpZ2h0OmFueVxyXG4gIHBsYXllcjogYW55XHJcbiAgc2hvdzogYm9vbGVhblxyXG4gIHlWZWxvY2l0eTogYW55XHJcbiAgeFZlbG9jaXR5OiBhbnlcclxuICBzY29yZTogYW55XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMud2lkdGggPSA2MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIHRoaXMueFZlbG9jaXR5ID0gMDtcclxuICAgIHRoaXMueVZlbG9jaXR5ID0gMDtcclxuXHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMuc2hvdyA9IHRydWU7XHJcblxyXG4gICAgdmFyIHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwbGF5ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBwbGF5ZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcclxuICAgIHBsYXllci5jbGFzc05hbWUgKz0gXCIgYnJpY2tcIjtcclxuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuICAgIGdhbWUuY2FudmFzLmFwcGVuZChwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgZHJhdyAgKCkge1xyXG4gICAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gICAgcGxheWVyLnN0eWxlLmxlZnQgPSB0aGlzLnggKydweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsncHgnO1xyXG4gIH1cclxuICBcclxuICBoaWRlICgpIHtcclxuICAgIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICAgIHBsYXllci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gIH1cclxufSIsIi8vIFRoZSBnYW1lIGlzIGNvbXBvc2VkIG9mIGFjdG9yc1xyXG5jbGFzcyBFbnRpdHkge1xyXG4gIC8vIEEgcG9zaXRpb25cclxuICB4OiBudW1iZXIgPSAwXHJcbiAgeTogbnVtYmVyID0gMFxyXG4gIHB4OiBudW1iZXIgPSAwXHJcbiAgcHk6IG51bWJlciA9IDBcclxuICBnYW1lOiBhbnlcclxuXHJcbiAgLy8gRGltZW5zaW9uc1xyXG4gIHdpZHRoOiBudW1iZXIgPSAwXHJcbiAgaGVpZ2h0OiBudW1iZXIgPSAwXHJcblxyXG4gIC8vIEEgdmVsb2NpdHk6IHNwZWVkIHdpdGggZGlyZWN0aW9uXHJcbiAgeFZlbG9jaXR5OiBudW1iZXIgPSAwO1xyXG4gIHlWZWxvY2l0eTogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG5cclxuICB9XHJcblxyXG4gIC8vIE9uIGVhY2ggdXBkYXRlLCB3ZSBhcHBseSB0aGUgdmVsb2NpdHkgdG8gdGhlIGN1cnJlbnQgcG9zaXRpb24uXHJcbiAgLy8gVGhpcyBtYWtlcyB0aGUgZW50aXR5IG1vdmUuXHJcbiAgLy8gRW50aXRpZXMgYXJlIGV4cGVjdGVkIHRvIG92ZXJyaWRlIHRoaXMgbWV0aG9kXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5weCA9IHRoaXMueDsgIC8vIHByZXYgdmFsdWVzXHJcbiAgICB0aGlzLnB5ID0gdGhpcy55O1xyXG5cclxuICAgIHRoaXMueCArPSB0aGlzLnhWZWxvY2l0eTtcclxuICAgIHRoaXMueSArPSB0aGlzLnlWZWxvY2l0eTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gVGhlIGFjdG9yICBrbm93cyBob3cgdG8gZHJhdyBpdHNlbGYuXHJcbiAgLy8gQWxsIGFjdG9ycyBvZiBvdXIgZ2FtZSB3aWxsIGJlIHdoaXRlIHJlY3RhbmdsZXMuXHJcblxyXG4gIC8vIEJhc2ljIGJvdW5kaW5nIGJveCBjb2xsaXNvbiBkZXRlY3Rpb24uXHJcbiAgLy8gUmV0dXJucyAndHJ1ZScgaWYgdGhlIGFjdG9yIGludGVyc2VjdCB3aXRoIGFub3RoZXIgb25lXHJcbiAgaW50ZXJzZWN0KG90aGVyKSB7XHJcbiAgICBpZiAob3RoZXIgPT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBvdGhlci55ICYmXHJcbiAgICAgIHRoaXMueSA8IG90aGVyLnkgKyBvdGhlci5oZWlnaHQgJiZcclxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IG90aGVyLnggJiZcclxuICAgICAgdGhpcy54IDwgb3RoZXIueCArIG90aGVyLndpZHRoO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW50aXR5O1xyXG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIGVudGl0aWVzOiBFbnRpdHlbXVxyXG4gIGJhbGw6IGFueVxyXG4gIGhlaWdodDogYW55XHJcbiAgd2lkdGg6IGFueVxyXG4gIGNhbnZhczogYW55XHJcbiAgd2FsbDogYW55XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIGxldCBmcHM6IG51bWJlciA9IDYwLFxyXG4gICAgICBpbnRlcnZhbDogbnVtYmVyID0gMTAwMCAvIGZwcztcclxuXHJcbiAgICBsZXQgbG9vcCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvb3AoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcbiAgICAgIGlmIChlbnRpdHkudXBkYXRlKSBlbnRpdHkudXBkYXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xyXG4gICAgICBpZiAoZW50aXR5LmRyYXcpIGVudGl0eS5kcmF3KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL2VudGl0eVwiO1xyXG5pbXBvcnQgeyBCcmljayB9IGZyb20gXCIuL2JyaWNrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2FsbCBleHRlbmRzIEVudGl0eSB7XHJcbiAgYnJpY2tzOiBhbnlcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLmJyaWNrcyA9IFtdO1xyXG4gICAgdGhpcy5pbml0KGdhbWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIGluaXQoZ2FtZSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIHZhciBiID0gbmV3IEJyaWNrKGdhbWUpO1xyXG4gICAgICBiLnBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJyaWNrX1wiICsgaSk7XHJcbiAgICAgIGIueCArPSBiLndpZHRoICogaTtcclxuICAgICAgYi55ID0gMDtcclxuXHJcbiAgICAgIHRoaXMuYnJpY2tzLnB1c2goYik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVwZGF0ZSgpIHtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYnJpY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBiID0gdGhpcy5icmlja3NbaV07XHJcbiAgICAgIGlmIChiLnNob3cpIHtcclxuICAgICAgICBiLmRyYXcoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBiLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2Jsb2Nrcy9nYW1lJztcclxuaW1wb3J0IEJhbGwgZnJvbSAnLi9ibG9ja3MvYmFsbCc7XHJcbmltcG9ydCB7IFdhbGwgfSBmcm9tICcuL2Jsb2Nrcy93YWxsJztcclxuXHJcbnZhciBzY2VuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZVwiKSxcclxuICBnYW1lID0gbmV3IEdhbWUoc2NlbmUpO1xyXG5cclxuZ2FtZS5lbnRpdGllcyA9IFtcclxuICBnYW1lLmJhbGwgPSBuZXcgQmFsbChnYW1lKSxcclxuICBnYW1lLndhbGwgPSBuZXcgV2FsbChnYW1lKVxyXG5dXHJcblxyXG5nYW1lLnN0YXJ0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=