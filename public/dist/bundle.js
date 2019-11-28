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
        var _this = this;
        this.canvas = canvas;
        this.width = canvas.offsetWidth;
        this.height = canvas.offsetHeight;
        this.keyPressed = {};
        document.addEventListener("keydown", function (e) {
            _this.handleEvent(e);
        });
        document.addEventListener("keyup", function (e) {
            _this.handleEvent(e);
        });
    }
    Game.prototype.handleEvent = function (e) {
        // Convert the key code to key name
        var keyName = Game.keys[e.which];
        if (keyName) {
            // e.g: 'self.keyPressed.up = true' on keydown
            // Will be set to false on keyup
            this.keyPressed[keyName] = (e.type === "keydown");
            e.preventDefault();
            console.log("KEY: ", this.keyPressed);
        }
    };
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
    Game.keys = {
        32: 'space',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    return Game;
}());
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/blocks/player.ts":
/*!******************************!*\
  !*** ./src/blocks/player.ts ***!
  \******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../paddle */ "./src/paddle.ts");
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

var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(game) {
        var _this = _super.call(this, game) || this;
        _this.update = function () {
            var speed = 10;
            var game = _this.game;
            if (game.keyPressed.left) {
                _this.xVelocity = -speed;
            }
            else if (game.keyPressed.right) {
                _this.xVelocity = speed;
            }
            else {
                _this.xVelocity = 0; // stop moving if no keys pressed
            }
            _super.prototype.update.call(_this);
        };
        _this.width = 100;
        _this.height = 20;
        _this.x = 20;
        _this.y = game.height - 20;
        _this.name = "player";
        var player = document.createElement("div");
        player.style.position = "absolute";
        player.style.width = _this.width + 'px';
        player.style.height = _this.height + 'px';
        player.style.left = _this.x + 'px';
        player.style.top = _this.y + 'px';
        player.setAttribute("id", "player");
        _this.player = player;
        game.canvas.append(player);
        return _this;
    }
    Player.prototype.draw = function () {
        var player = this.player;
        player.style.left = this.x + 'px';
        player.style.top = this.y + 'px';
    };
    return Player;
}(_paddle__WEBPACK_IMPORTED_MODULE_0__["Paddle"]));



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
/* harmony import */ var _blocks_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/player */ "./src/blocks/player.ts");




var scene = document.querySelector("#game"), game = new _blocks_game__WEBPACK_IMPORTED_MODULE_0__["default"](scene);
game.entities = [
    game.ball = new _blocks_ball__WEBPACK_IMPORTED_MODULE_1__["default"](game),
    game.wall = new _blocks_wall__WEBPACK_IMPORTED_MODULE_2__["Wall"](game),
    game.player = new _blocks_player__WEBPACK_IMPORTED_MODULE_3__["Player"](game)
];
game.start();


/***/ }),

/***/ "./src/paddle.ts":
/*!***********************!*\
  !*** ./src/paddle.ts ***!
  \***********************/
/*! exports provided: Paddle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paddle", function() { return Paddle; });
/* harmony import */ var _blocks_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/entity */ "./src/blocks/entity.ts");
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

var Paddle = /** @class */ (function (_super) {
    __extends(Paddle, _super);
    function Paddle(game) {
        var _this = _super.call(this, game) || this;
        _this.width = 20;
        _this.height = 100;
        _this.score = 0;
        _this.y = 0;
        return _this;
    }
    Paddle.prototype.update = function () {
        _super.prototype.update.call(this);
        // x will always stay below or equal to 0
        this.x = Math.min(Math.max(this.x, 0), this.game.width - this.width);
    };
    Paddle.prototype.moveTo = function (player) {
        this.x = player.x;
        this.y = player.y;
        this.xVelocity = player.xVelocity;
        this.yVelocity = player.yVelocity;
    };
    return Paddle;
}(_blocks_entity__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYnJpY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvd2FsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFkZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRjhCO0FBRzlCO0lBQWtDLHdCQUFNO0lBWXRDLGNBQVksSUFBSTtRQUFoQixZQUNF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ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwgZXh0ZW5kcyBFbnRpdHkge1xyXG4gIHdpZHRoOiBhbnlcclxuICBoZWlnaHQ6IGFueVxyXG4gIGF4OiBhbnlcclxuICBuYW1lOiBhbnlcclxuICBnYW1lOiBHYW1lXHJcbiAgeFZlbG9jaXR5OiBhbnlcclxuICB5VmVsb2NpdHk6IGFueVxyXG4gIHg6IGFueVxyXG4gIHk6IGFueVxyXG4gIHBsYXllcjogYW55XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgdGhpcy53aWR0aCA9IDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcclxuICAgIHRoaXMuYXggPSAwO1xyXG4gICAgdGhpcy5uYW1lID0gXCJiYWxsXCI7XHJcblxyXG4gICAgdmFyIHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwbGF5ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBwbGF5ZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcclxuICAgIHBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhbGxcIik7XHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICBnYW1lLmNhbnZhcy5hcHBlbmQocGxheWVyKTtcclxuXHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG8oYmFsbCkge1xyXG4gICAgdGhpcy54ID0gYmFsbC54O1xyXG4gICAgdGhpcy55ID0gYmFsbC55O1xyXG4gICAgdGhpcy54VmVsb2NpdHkgPSBiYWxsLnhWZWxvY2l0eTtcclxuICAgIHRoaXMueVZlbG9jaXR5ID0gYmFsbC55VmVsb2NpdHk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gICAgcGxheWVyLnN0eWxlLmxlZnQgPSB0aGlzLnggKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgdGhpcy54ID0gZ2FtZS53aWR0aCAvIDIgLSB0aGlzLndpZHRoOyAvLyBjZW50ZXIgYmFsbCBob3Jpem9udGFsbHlcclxuICAgIHRoaXMueSA9IGdhbWUuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0OyAvLyBjZW50ZXIgYmFsbCB2ZXJ0aWNhbGx5XHJcblxyXG4gICAgLy8gU2V0IHJhbmRvbSB2YWx1ZXMgaWYgYmFsbCBnb2VzIG9mZnNjcmVlblxyXG4gICAgdmFyIG1pbiA9IC01LFxyXG4gICAgICBtYXggPSA1O1xyXG5cclxuICAgIHRoaXMueVZlbG9jaXR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIHRoaXMueFZlbG9jaXR5ID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDUgOiAtNTsgLy8gNTAlIGNoYW5jZSBvZiBzdGFydGluZyBmcm9tIGxlZnQgb3IgcmlnaHRcclxuICB9XHJcblxyXG4gIHVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgLy9FbnRpdHkucHJvdG90eXBlLnVwZGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBjYWxsIHBhcmVudCB1cGRhdGUoKVxyXG5cclxuICAgIC8vIElmIHRoZSBiYWxsIGhpdHMgdGhlIHRvcCBwb3N0aW9uIG1vdmUgaXQgZG93biBhbmQgdmljZSB2ZXJzYVxyXG4gICAgaWYgKHRoaXMueSA+IGdhbWUuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgfHwgdGhpcy55IDwgMCkge1xyXG4gICAgICB0aGlzLnlWZWxvY2l0eSAqPSAtMTsgLy8gc3dpdGNoIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGJhbGxcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy54ID4gZ2FtZS53aWR0aCAtIHRoaXMud2lkdGggfHwgdGhpcy54IDwgMCkge1xyXG4gICAgICB0aGlzLnhWZWxvY2l0eSAqPSAtMTsgLy8gc3dpdGNoIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGJhbGxcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGl0dGVyO1xyXG5cclxuICAgIGlmICh0aGlzLmludGVyc2VjdChnYW1lLnBsYXllcikpIHtcclxuICAgICAgaGl0dGVyID0gZ2FtZS5wbGF5ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChoaXR0ZXIpIHtcclxuICAgICAgLy90aGlzLnhWZWxvY2l0eSAqPSAtMS4xOyAvLyBzd2l0Y2ggdGhlIG1vdmVtZW50IC8gcmVib3VuZCBhbmQgYWxzbyBpbmNyZWFzZSB0aGUgc3BlZWQuXHJcbiAgICAgIHRoaXMueVZlbG9jaXR5ICo9IC0xLjE7XHJcbiAgICAgIC8vIG1ha2UgdGhlIGdhbWUgaW50ZXJlc3RpbmcgYnkgZ2FpbmluZyB2ZWxvY2l0eS4gXHJcbiAgICAgIC8vIElmIHRoaXMgaXMgbm90IGRvbmUsIHRoZSBiYWxsIG1vdmVtZW50IGFmdGVyIGhpdCB3aWxsIGJlIHByZWRpY3RhYmxlXHJcbiAgICAgIC8vdGhpcy55VmVsb2NpdHkgKz0gaGl0dGVyLnhWZWxvY2l0eSAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgYmFsbCBpbnRlcnNlY3RzIHdpdGggYnJpY2tzXHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnYW1lLndhbGwuYnJpY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBiID0gZ2FtZS53YWxsLmJyaWNrc1tpXTtcclxuICAgICAgaWYgKHRoaXMuaW50ZXJzZWN0KGIpKSB7XHJcbiAgICAgICAgYi5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI6OmJyaWNrLmludGVyc2VjdFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9lbnRpdHlcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEJyaWNrIGV4dGVuZHMgRW50aXR5IHtcclxuICB5OiBhbnlcclxuICB4OiBhbnlcclxuICB3aWR0aDogYW55XHJcbiAgaGVpZ2h0OmFueVxyXG4gIHBsYXllcjogYW55XHJcbiAgc2hvdzogYm9vbGVhblxyXG4gIHlWZWxvY2l0eTogYW55XHJcbiAgeFZlbG9jaXR5OiBhbnlcclxuICBzY29yZTogYW55XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMud2lkdGggPSA2MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIHRoaXMueFZlbG9jaXR5ID0gMDtcclxuICAgIHRoaXMueVZlbG9jaXR5ID0gMDtcclxuXHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMuc2hvdyA9IHRydWU7XHJcblxyXG4gICAgdmFyIHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwbGF5ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBwbGF5ZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcclxuICAgIHBsYXllci5jbGFzc05hbWUgKz0gXCIgYnJpY2tcIjtcclxuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuICAgIGdhbWUuY2FudmFzLmFwcGVuZChwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgZHJhdyAgKCkge1xyXG4gICAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gICAgcGxheWVyLnN0eWxlLmxlZnQgPSB0aGlzLnggKydweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsncHgnO1xyXG4gIH1cclxuICBcclxuICBoaWRlICgpIHtcclxuICAgIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICAgIHBsYXllci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gIH1cclxufSIsIi8vIFRoZSBnYW1lIGlzIGNvbXBvc2VkIG9mIGFjdG9yc1xyXG5jbGFzcyBFbnRpdHkge1xyXG4gIC8vIEEgcG9zaXRpb25cclxuICB4OiBudW1iZXIgPSAwXHJcbiAgeTogbnVtYmVyID0gMFxyXG4gIHB4OiBudW1iZXIgPSAwXHJcbiAgcHk6IG51bWJlciA9IDBcclxuICBnYW1lOiBhbnlcclxuXHJcbiAgLy8gRGltZW5zaW9uc1xyXG4gIHdpZHRoOiBudW1iZXIgPSAwXHJcbiAgaGVpZ2h0OiBudW1iZXIgPSAwXHJcblxyXG4gIC8vIEEgdmVsb2NpdHk6IHNwZWVkIHdpdGggZGlyZWN0aW9uXHJcbiAgeFZlbG9jaXR5OiBudW1iZXIgPSAwO1xyXG4gIHlWZWxvY2l0eTogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICB9XHJcblxyXG4gIC8vIE9uIGVhY2ggdXBkYXRlLCB3ZSBhcHBseSB0aGUgdmVsb2NpdHkgdG8gdGhlIGN1cnJlbnQgcG9zaXRpb24uXHJcbiAgLy8gVGhpcyBtYWtlcyB0aGUgZW50aXR5IG1vdmUuXHJcbiAgLy8gRW50aXRpZXMgYXJlIGV4cGVjdGVkIHRvIG92ZXJyaWRlIHRoaXMgbWV0aG9kXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5weCA9IHRoaXMueDsgIC8vIHByZXYgdmFsdWVzXHJcbiAgICB0aGlzLnB5ID0gdGhpcy55O1xyXG5cclxuICAgIHRoaXMueCArPSB0aGlzLnhWZWxvY2l0eTtcclxuICAgIHRoaXMueSArPSB0aGlzLnlWZWxvY2l0eTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gVGhlIGFjdG9yICBrbm93cyBob3cgdG8gZHJhdyBpdHNlbGYuXHJcbiAgLy8gQWxsIGFjdG9ycyBvZiBvdXIgZ2FtZSB3aWxsIGJlIHdoaXRlIHJlY3RhbmdsZXMuXHJcblxyXG4gIC8vIEJhc2ljIGJvdW5kaW5nIGJveCBjb2xsaXNvbiBkZXRlY3Rpb24uXHJcbiAgLy8gUmV0dXJucyAndHJ1ZScgaWYgdGhlIGFjdG9yIGludGVyc2VjdCB3aXRoIGFub3RoZXIgb25lXHJcbiAgaW50ZXJzZWN0KG90aGVyKSB7XHJcbiAgICBpZiAob3RoZXIgPT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBvdGhlci55ICYmXHJcbiAgICAgIHRoaXMueSA8IG90aGVyLnkgKyBvdGhlci5oZWlnaHQgJiZcclxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IG90aGVyLnggJiZcclxuICAgICAgdGhpcy54IDwgb3RoZXIueCArIG90aGVyLndpZHRoO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW50aXR5O1xyXG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIGVudGl0aWVzOiBFbnRpdHlbXVxyXG4gIGJhbGw6IGFueVxyXG4gIGhlaWdodDogYW55XHJcbiAgd2lkdGg6IGFueVxyXG4gIGNhbnZhczogYW55XHJcbiAgd2FsbDogYW55XHJcbiAgcGxheWVyOiBhbnlcclxuXHJcbiAgc3RhdGljIGtleXMgPSB7XHJcbiAgICAzMjogJ3NwYWNlJyxcclxuICAgIDM3OiAnbGVmdCcsXHJcbiAgICAzODogJ3VwJyxcclxuICAgIDM5OiAncmlnaHQnLFxyXG4gICAgNDA6ICdkb3duJ1xyXG4gIH07XHJcbiAga2V5UHJlc3NlZDoge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLndpZHRoID0gY2FudmFzLm9mZnNldFdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBjYW52YXMub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIHRoaXMua2V5UHJlc3NlZCA9IHt9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PntcclxuICAgICAgdGhpcy5oYW5kbGVFdmVudChlKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXZlbnQoZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUV2ZW50KGUpIHtcclxuICAgIC8vIENvbnZlcnQgdGhlIGtleSBjb2RlIHRvIGtleSBuYW1lXHJcbiAgICB2YXIga2V5TmFtZSA9IEdhbWUua2V5c1tlLndoaWNoXTtcclxuXHJcbiAgICBpZiAoa2V5TmFtZSkge1xyXG4gICAgICAvLyBlLmc6ICdzZWxmLmtleVByZXNzZWQudXAgPSB0cnVlJyBvbiBrZXlkb3duXHJcbiAgICAgIC8vIFdpbGwgYmUgc2V0IHRvIGZhbHNlIG9uIGtleXVwXHJcbiAgICAgIHRoaXMua2V5UHJlc3NlZFtrZXlOYW1lXSA9IChlLnR5cGUgPT09IFwia2V5ZG93blwiKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJLRVk6IFwiLCB0aGlzLmtleVByZXNzZWQpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgbGV0IGZwczogbnVtYmVyID0gNjAsXHJcbiAgICAgIGludGVydmFsOiBudW1iZXIgPSAxMDAwIC8gZnBzO1xyXG5cclxuICAgIGxldCBsb29wID0gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9vcCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgaWYgKGVudGl0eS51cGRhdGUpIGVudGl0eS51cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcbiAgICAgIGlmIChlbnRpdHkuZHJhdykgZW50aXR5LmRyYXcoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgUGFkZGxlIH0gZnJvbSBcIi4uL3BhZGRsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFBhZGRsZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBsYXllcjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgdGhpcy53aWR0aCA9IDEwMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XHJcbiAgICB0aGlzLnggPSAyMDtcclxuICAgIHRoaXMueSA9IGdhbWUuaGVpZ2h0IC0gMjA7XHJcbiAgICB0aGlzLm5hbWUgPSBcInBsYXllclwiO1xyXG5cclxuICAgIHZhciBwbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGxheWVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgcGxheWVyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLmxlZnQgPSB0aGlzLnggKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XHJcbiAgICBwbGF5ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXJcIik7XHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICBnYW1lLmNhbnZhcy5hcHBlbmQocGxheWVyKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgICBwbGF5ZXIuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcclxuICB9XHJcblxyXG4gIHVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHZhciBzcGVlZCA9IDEwO1xyXG4gICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XHJcblxyXG4gICAgaWYgKGdhbWUua2V5UHJlc3NlZC5sZWZ0KSB7XHJcbiAgICAgIHRoaXMueFZlbG9jaXR5ID0gLXNwZWVkO1xyXG4gICAgfSBlbHNlIGlmIChnYW1lLmtleVByZXNzZWQucmlnaHQpIHtcclxuICAgICAgdGhpcy54VmVsb2NpdHkgPSBzcGVlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMueFZlbG9jaXR5ID0gMDsgLy8gc3RvcCBtb3ZpbmcgaWYgbm8ga2V5cyBwcmVzc2VkXHJcbiAgICB9XHJcbiAgICBzdXBlci51cGRhdGUoKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL2VudGl0eVwiO1xyXG5pbXBvcnQgeyBCcmljayB9IGZyb20gXCIuL2JyaWNrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2FsbCBleHRlbmRzIEVudGl0eSB7XHJcbiAgYnJpY2tzOiBhbnlcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLmJyaWNrcyA9IFtdO1xyXG4gICAgdGhpcy5pbml0KGdhbWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIGluaXQoZ2FtZSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIHZhciBiID0gbmV3IEJyaWNrKGdhbWUpO1xyXG4gICAgICBiLnBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJyaWNrX1wiICsgaSk7XHJcbiAgICAgIGIueCArPSBiLndpZHRoICogaTtcclxuICAgICAgYi55ID0gMDtcclxuXHJcbiAgICAgIHRoaXMuYnJpY2tzLnB1c2goYik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVwZGF0ZSgpIHtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYnJpY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBiID0gdGhpcy5icmlja3NbaV07XHJcbiAgICAgIGlmIChiLnNob3cpIHtcclxuICAgICAgICBiLmRyYXcoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBiLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2Jsb2Nrcy9nYW1lJztcclxuaW1wb3J0IEJhbGwgZnJvbSAnLi9ibG9ja3MvYmFsbCc7XHJcbmltcG9ydCB7IFdhbGwgfSBmcm9tICcuL2Jsb2Nrcy93YWxsJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9ibG9ja3MvcGxheWVyJztcclxuXHJcbnZhciBzY2VuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZVwiKSxcclxuICBnYW1lID0gbmV3IEdhbWUoc2NlbmUpO1xyXG5cclxuZ2FtZS5lbnRpdGllcyA9IFtcclxuICBnYW1lLmJhbGwgPSBuZXcgQmFsbChnYW1lKSxcclxuICBnYW1lLndhbGwgPSBuZXcgV2FsbChnYW1lKSxcclxuICBnYW1lLnBsYXllciA9IG5ldyBQbGF5ZXIoZ2FtZSlcclxuXVxyXG5cclxuZ2FtZS5zdGFydCgpO1xyXG4iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL2Jsb2Nrcy9lbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWRkbGUgZXh0ZW5kcyBFbnRpdHkge1xyXG4gIHdpZHRoOiBudW1iZXJcclxuICBoZWlnaHQ6IG51bWJlclxyXG4gIHNjb3JlOiBudW1iZXJcclxuICB5OiBudW1iZXJcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSlcclxuICAgIHRoaXMud2lkdGggPSAyMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xyXG4gICAgdGhpcy5zY29yZSA9IDA7XHJcblxyXG4gICAgdGhpcy55ID0gMDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHN1cGVyLnVwZGF0ZSgpXHJcbiAgICAvLyB4IHdpbGwgYWx3YXlzIHN0YXkgYmVsb3cgb3IgZXF1YWwgdG8gMFxyXG4gICAgdGhpcy54ID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy54LCAwKSxcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC0gdGhpcy53aWR0aCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG8ocGxheWVyKSB7XHJcbiAgICB0aGlzLnggPSBwbGF5ZXIueDtcclxuICAgIHRoaXMueSA9IHBsYXllci55O1xyXG4gICAgdGhpcy54VmVsb2NpdHkgPSBwbGF5ZXIueFZlbG9jaXR5O1xyXG4gICAgdGhpcy55VmVsb2NpdHkgPSBwbGF5ZXIueVZlbG9jaXR5O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=