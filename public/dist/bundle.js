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
        this.game = game;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYnJpY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvd2FsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEY4QjtBQUc5QjtJQUFrQyx3QkFBTTtJQVl0QyxjQUFZLElBQUk7UUFBaEIsWUFDRSxrQkFBTSxJQUFJLENBQUMsU0FrQlo7UUE0QkQsWUFBTSxHQUFHO1lBQ1AsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQix5RUFBeUU7WUFFekUsK0RBQStEO1lBQy9ELElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7YUFDMUQ7WUFFRCxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNsRCxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUNBQW1DO2FBQzFEO1lBRUQsSUFBSSxNQUFNLENBQUM7WUFFWCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMvQixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN0QjtZQUdELElBQUksTUFBTSxFQUFFO2dCQUNWLHVGQUF1RjtnQkFDdkYsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkIsa0RBQWtEO2dCQUNsRCx1RUFBdUU7Z0JBQ3ZFLHlDQUF5QzthQUMxQztZQUVELHVDQUF1QztZQUV2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNoRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNyQixDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztvQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7UUFDSCxDQUFDO1FBbEZDLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFFbkIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDakMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0IsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztJQUNmLENBQUM7SUFFRCxxQkFBTSxHQUFOLFVBQU8sSUFBSTtRQUNULElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsbUJBQUksR0FBSjtRQUNFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLDJCQUEyQjtRQUNqRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyx5QkFBeUI7UUFFakUsMkNBQTJDO1FBQzNDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUNWLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyw0Q0FBNEM7SUFDN0YsQ0FBQztJQXdDSCxXQUFDO0FBQUQsQ0FBQyxDQWpHaUMsK0NBQU0sR0FpR3ZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRzRCO0FBRTdCO0lBQTJCLHlCQUFNO0lBWS9CLGVBQVksSUFBSTtRQUFoQixZQUNFLGtCQUFNLElBQUksQ0FBQyxTQXFCWjtRQXBCQyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsS0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN2QyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN6QyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNqQyxNQUFNLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQztRQUM3QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFDN0IsQ0FBQztJQUVELG9CQUFJLEdBQUo7UUFDRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxvQkFBSSxHQUFKO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBQyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLENBOUMwQiwrQ0FBTSxHQThDaEM7Ozs7Ozs7Ozs7Ozs7O0FDaEREO0FBQUEsaUNBQWlDO0FBQ2pDO0lBZ0JFLGdCQUFZLElBQUk7UUFmaEIsYUFBYTtRQUNiLE1BQUMsR0FBVyxDQUFDO1FBQ2IsTUFBQyxHQUFXLENBQUM7UUFDYixPQUFFLEdBQVcsQ0FBQztRQUNkLE9BQUUsR0FBVyxDQUFDO1FBR2QsYUFBYTtRQUNiLFVBQUssR0FBVyxDQUFDO1FBQ2pCLFdBQU0sR0FBVyxDQUFDO1FBRWxCLG1DQUFtQztRQUNuQyxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFHcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELGlFQUFpRTtJQUNqRSw4QkFBOEI7SUFDOUIsZ0RBQWdEO0lBQ2hELHVCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSxjQUFjO1FBQ2pDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQkFBSSxHQUFKO0lBRUEsQ0FBQztJQUVELHVDQUF1QztJQUN2QyxtREFBbUQ7SUFFbkQseUNBQXlDO0lBQ3pDLHlEQUF5RDtJQUN6RCwwQkFBUyxHQUFULFVBQVUsS0FBSztRQUNiLElBQUksS0FBSyxJQUFJLFNBQVM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU07WUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQztBQUVjLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNoRHRCO0FBQUE7SUFRRSxjQUFZLE1BQU07UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFBQSxpQkFXQztRQVZDLElBQUksR0FBRyxHQUFXLEVBQUUsRUFDbEIsUUFBUSxHQUFXLElBQUksR0FBRyxHQUFHLENBQUM7UUFFaEMsSUFBSSxJQUFJLEdBQUc7WUFDVCxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBRUYsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQscUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUMzQixJQUFJLE1BQU0sQ0FBQyxNQUFNO2dCQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQzNCLElBQUksTUFBTSxDQUFDLElBQUk7Z0JBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEM2QjtBQUNFO0FBRWhDO0lBQTBCLHdCQUFNO0lBRzlCLGNBQVksSUFBSTtRQUFoQixZQUNFLGtCQUFNLElBQUksQ0FBQyxTQUdaO1FBRkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFDbEIsQ0FBQztJQUdELG1CQUFJLEdBQUosVUFBSyxJQUFJO1FBQ1AsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLDRDQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRVIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBQ0QscUJBQU0sR0FBTjtJQUNBLENBQUM7SUFFRCxtQkFBSSxHQUFKO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUNWLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNMLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNWO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQ0FqQ3lCLCtDQUFNLEdBaUMvQjs7Ozs7Ozs7Ozs7Ozs7QUNwQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDQTtBQUNJO0FBRXJDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQ3pDLElBQUksR0FBRyxJQUFJLG9EQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFekIsSUFBSSxDQUFDLFFBQVEsR0FBRztJQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxvREFBSSxDQUFDLElBQUksQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaURBQUksQ0FBQyxJQUFJLENBQUM7Q0FDM0I7QUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIEVudGl0eSB7XHJcbiAgd2lkdGg6IGFueVxyXG4gIGhlaWdodDogYW55XHJcbiAgYXg6IGFueVxyXG4gIG5hbWU6IGFueVxyXG4gIGdhbWU6IEdhbWVcclxuICB4VmVsb2NpdHk6IGFueVxyXG4gIHlWZWxvY2l0eTogYW55XHJcbiAgeDogYW55XHJcbiAgeTogYW55XHJcbiAgcGxheWVyOiBhbnlcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLndpZHRoID0gMjA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDIwO1xyXG4gICAgdGhpcy5heCA9IDA7XHJcbiAgICB0aGlzLm5hbWUgPSBcImJhbGxcIjtcclxuXHJcbiAgICB2YXIgcGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBsYXllci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIHBsYXllci5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xyXG4gICAgcGxheWVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmFsbFwiKTtcclxuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuICAgIGdhbWUuY2FudmFzLmFwcGVuZChwbGF5ZXIpO1xyXG5cclxuICAgIHRoaXMucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIG1vdmVUbyhiYWxsKSB7XHJcbiAgICB0aGlzLnggPSBiYWxsLng7XHJcbiAgICB0aGlzLnkgPSBiYWxsLnk7XHJcbiAgICB0aGlzLnhWZWxvY2l0eSA9IGJhbGwueFZlbG9jaXR5O1xyXG4gICAgdGhpcy55VmVsb2NpdHkgPSBiYWxsLnlWZWxvY2l0eTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgICBwbGF5ZXIuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcclxuICB9XHJcblxyXG4gIHJlc2V0KCkge1xyXG4gICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XHJcbiAgICB0aGlzLnggPSBnYW1lLndpZHRoIC8gMiAtIHRoaXMud2lkdGg7IC8vIGNlbnRlciBiYWxsIGhvcml6b250YWxseVxyXG4gICAgdGhpcy55ID0gZ2FtZS5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQ7IC8vIGNlbnRlciBiYWxsIHZlcnRpY2FsbHlcclxuXHJcbiAgICAvLyBTZXQgcmFuZG9tIHZhbHVlcyBpZiBiYWxsIGdvZXMgb2Zmc2NyZWVuXHJcbiAgICB2YXIgbWluID0gLTUsXHJcbiAgICAgIG1heCA9IDU7XHJcblxyXG4gICAgdGhpcy55VmVsb2NpdHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgdGhpcy54VmVsb2NpdHkgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gNSA6IC01OyAvLyA1MCUgY2hhbmNlIG9mIHN0YXJ0aW5nIGZyb20gbGVmdCBvciByaWdodFxyXG4gIH1cclxuXHJcbiAgdXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XHJcbiAgICAvL0VudGl0eS5wcm90b3R5cGUudXBkYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIGNhbGwgcGFyZW50IHVwZGF0ZSgpXHJcblxyXG4gICAgLy8gSWYgdGhlIGJhbGwgaGl0cyB0aGUgdG9wIHBvc3Rpb24gbW92ZSBpdCBkb3duIGFuZCB2aWNlIHZlcnNhXHJcbiAgICBpZiAodGhpcy55ID4gZ2FtZS5oZWlnaHQgLSB0aGlzLmhlaWdodCB8fCB0aGlzLnkgPCAwKSB7XHJcbiAgICAgIHRoaXMueVZlbG9jaXR5ICo9IC0xOyAvLyBzd2l0Y2ggdGhlIGRpcmVjdGlvbiBvZiB0aGUgYmFsbFxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnggPiBnYW1lLndpZHRoIC0gdGhpcy53aWR0aCB8fCB0aGlzLnggPCAwKSB7XHJcbiAgICAgIHRoaXMueFZlbG9jaXR5ICo9IC0xOyAvLyBzd2l0Y2ggdGhlIGRpcmVjdGlvbiBvZiB0aGUgYmFsbFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaXR0ZXI7XHJcblxyXG4gICAgaWYgKHRoaXMuaW50ZXJzZWN0KGdhbWUucGxheWVyKSkge1xyXG4gICAgICBoaXR0ZXIgPSBnYW1lLnBsYXllcjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKGhpdHRlcikge1xyXG4gICAgICAvL3RoaXMueFZlbG9jaXR5ICo9IC0xLjE7IC8vIHN3aXRjaCB0aGUgbW92ZW1lbnQgLyByZWJvdW5kIGFuZCBhbHNvIGluY3JlYXNlIHRoZSBzcGVlZC5cclxuICAgICAgdGhpcy55VmVsb2NpdHkgKj0gLTEuMTtcclxuICAgICAgLy8gbWFrZSB0aGUgZ2FtZSBpbnRlcmVzdGluZyBieSBnYWluaW5nIHZlbG9jaXR5LiBcclxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgZG9uZSwgdGhlIGJhbGwgbW92ZW1lbnQgYWZ0ZXIgaGl0IHdpbGwgYmUgcHJlZGljdGFibGVcclxuICAgICAgLy90aGlzLnlWZWxvY2l0eSArPSBoaXR0ZXIueFZlbG9jaXR5IC8gMjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBpZiBiYWxsIGludGVyc2VjdHMgd2l0aCBicmlja3NcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdhbWUud2FsbC5icmlja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGIgPSBnYW1lLndhbGwuYnJpY2tzW2ldO1xyXG4gICAgICBpZiAodGhpcy5pbnRlcnNlY3QoYikpIHtcclxuICAgICAgICBiLnNob3cgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjo6YnJpY2suaW50ZXJzZWN0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL2VudGl0eVwiXHJcblxyXG5leHBvcnQgY2xhc3MgQnJpY2sgZXh0ZW5kcyBFbnRpdHkge1xyXG4gIHk6IGFueVxyXG4gIHg6IGFueVxyXG4gIHdpZHRoOiBhbnlcclxuICBoZWlnaHQ6YW55XHJcbiAgcGxheWVyOiBhbnlcclxuICBzaG93OiBib29sZWFuXHJcbiAgeVZlbG9jaXR5OiBhbnlcclxuICB4VmVsb2NpdHk6IGFueVxyXG4gIHNjb3JlOiBhbnlcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgdGhpcy53aWR0aCA9IDYwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcclxuICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgdGhpcy54VmVsb2NpdHkgPSAwO1xyXG4gICAgdGhpcy55VmVsb2NpdHkgPSAwO1xyXG5cclxuICAgIHRoaXMueSA9IDA7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy5zaG93ID0gdHJ1ZTtcclxuXHJcbiAgICB2YXIgcGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBsYXllci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIHBsYXllci5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xyXG4gICAgcGxheWVyLmNsYXNzTmFtZSArPSBcIiBicmlja1wiO1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgZ2FtZS5jYW52YXMuYXBwZW5kKHBsYXllcik7XHJcbiAgfVxyXG5cclxuICBkcmF3ICAoKSB7XHJcbiAgICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgICBwbGF5ZXIuc3R5bGUubGVmdCA9IHRoaXMueCArJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS50b3AgPSB0aGlzLnkgKydweCc7XHJcbiAgfVxyXG4gIFxyXG4gIGhpZGUgKCkge1xyXG4gICAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gICAgcGxheWVyLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcbiAgfVxyXG59IiwiLy8gVGhlIGdhbWUgaXMgY29tcG9zZWQgb2YgYWN0b3JzXHJcbmNsYXNzIEVudGl0eSB7XHJcbiAgLy8gQSBwb3NpdGlvblxyXG4gIHg6IG51bWJlciA9IDBcclxuICB5OiBudW1iZXIgPSAwXHJcbiAgcHg6IG51bWJlciA9IDBcclxuICBweTogbnVtYmVyID0gMFxyXG4gIGdhbWU6IGFueVxyXG5cclxuICAvLyBEaW1lbnNpb25zXHJcbiAgd2lkdGg6IG51bWJlciA9IDBcclxuICBoZWlnaHQ6IG51bWJlciA9IDBcclxuXHJcbiAgLy8gQSB2ZWxvY2l0eTogc3BlZWQgd2l0aCBkaXJlY3Rpb25cclxuICB4VmVsb2NpdHk6IG51bWJlciA9IDA7XHJcbiAgeVZlbG9jaXR5OiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gIH1cclxuXHJcbiAgLy8gT24gZWFjaCB1cGRhdGUsIHdlIGFwcGx5IHRoZSB2ZWxvY2l0eSB0byB0aGUgY3VycmVudCBwb3NpdGlvbi5cclxuICAvLyBUaGlzIG1ha2VzIHRoZSBlbnRpdHkgbW92ZS5cclxuICAvLyBFbnRpdGllcyBhcmUgZXhwZWN0ZWQgdG8gb3ZlcnJpZGUgdGhpcyBtZXRob2RcclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnB4ID0gdGhpcy54OyAgLy8gcHJldiB2YWx1ZXNcclxuICAgIHRoaXMucHkgPSB0aGlzLnk7XHJcblxyXG4gICAgdGhpcy54ICs9IHRoaXMueFZlbG9jaXR5O1xyXG4gICAgdGhpcy55ICs9IHRoaXMueVZlbG9jaXR5O1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvLyBUaGUgYWN0b3IgIGtub3dzIGhvdyB0byBkcmF3IGl0c2VsZi5cclxuICAvLyBBbGwgYWN0b3JzIG9mIG91ciBnYW1lIHdpbGwgYmUgd2hpdGUgcmVjdGFuZ2xlcy5cclxuXHJcbiAgLy8gQmFzaWMgYm91bmRpbmcgYm94IGNvbGxpc29uIGRldGVjdGlvbi5cclxuICAvLyBSZXR1cm5zICd0cnVlJyBpZiB0aGUgYWN0b3IgaW50ZXJzZWN0IHdpdGggYW5vdGhlciBvbmVcclxuICBpbnRlcnNlY3Qob3RoZXIpIHtcclxuICAgIGlmIChvdGhlciA9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IG90aGVyLnkgJiZcclxuICAgICAgdGhpcy55IDwgb3RoZXIueSArIG90aGVyLmhlaWdodCAmJlxyXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gb3RoZXIueCAmJlxyXG4gICAgICB0aGlzLnggPCBvdGhlci54ICsgb3RoZXIud2lkdGg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XHJcbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgZW50aXRpZXM6IEVudGl0eVtdXHJcbiAgYmFsbDogYW55XHJcbiAgaGVpZ2h0OiBhbnlcclxuICB3aWR0aDogYW55XHJcbiAgY2FudmFzOiBhbnlcclxuICB3YWxsOiBhbnlcclxuXHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgbGV0IGZwczogbnVtYmVyID0gNjAsXHJcbiAgICAgIGludGVydmFsOiBudW1iZXIgPSAxMDAwIC8gZnBzO1xyXG5cclxuICAgIGxldCBsb29wID0gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9vcCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgaWYgKGVudGl0eS51cGRhdGUpIGVudGl0eS51cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcbiAgICAgIGlmIChlbnRpdHkuZHJhdykgZW50aXR5LmRyYXcoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vZW50aXR5XCI7XHJcbmltcG9ydCB7IEJyaWNrIH0gZnJvbSBcIi4vYnJpY2tcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXYWxsIGV4dGVuZHMgRW50aXR5IHtcclxuICBicmlja3M6IGFueVxyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMuYnJpY2tzID0gW107XHJcbiAgICB0aGlzLmluaXQoZ2FtZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW5pdChnYW1lKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgdmFyIGIgPSBuZXcgQnJpY2soZ2FtZSk7XHJcbiAgICAgIGIucGxheWVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnJpY2tfXCIgKyBpKTtcclxuICAgICAgYi54ICs9IGIud2lkdGggKiBpO1xyXG4gICAgICBiLnkgPSAwO1xyXG5cclxuICAgICAgdGhpcy5icmlja3MucHVzaChiKTtcclxuICAgIH1cclxuICB9XHJcbiAgdXBkYXRlKCkge1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5icmlja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGIgPSB0aGlzLmJyaWNrc1tpXTtcclxuICAgICAgaWYgKGIuc2hvdykge1xyXG4gICAgICAgIGIuZHJhdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGIuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vYmxvY2tzL2dhbWUnO1xyXG5pbXBvcnQgQmFsbCBmcm9tICcuL2Jsb2Nrcy9iYWxsJztcclxuaW1wb3J0IHsgV2FsbCB9IGZyb20gJy4vYmxvY2tzL3dhbGwnO1xyXG5cclxudmFyIHNjZW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lXCIpLFxyXG4gIGdhbWUgPSBuZXcgR2FtZShzY2VuZSk7XHJcblxyXG5nYW1lLmVudGl0aWVzID0gW1xyXG4gIGdhbWUuYmFsbCA9IG5ldyBCYWxsKGdhbWUpLFxyXG4gIGdhbWUud2FsbCA9IG5ldyBXYWxsKGdhbWUpXHJcbl1cclxuXHJcbmdhbWUuc3RhcnQoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==