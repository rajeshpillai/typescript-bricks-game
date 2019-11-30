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

/***/ "./src/blocks/background.ts":
/*!**********************************!*\
  !*** ./src/blocks/background.ts ***!
  \**********************************/
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

var Background = /** @class */ (function (_super) {
    __extends(Background, _super);
    function Background(game) {
        var _this = _super.call(this, game) || this;
        _this.score_player1 = document.getElementById("score_player1");
        return _this;
    }
    Background.prototype.draw = function () {
        this.score_player1.innerText = this.game.score1;
    };
    return Background;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Background);


/***/ }),

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
        _this.init();
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
    Ball.prototype.init = function () {
        var game = this.game;
        this.x = game.width / 2 - this.width; // center ball horizontally
        this.y = game.height / 2 - this.height; // center ball vertically
        // Set random values if ball goes offscreen
        var min = -5, max = 5;
        this.yVelocity = Math.floor(Math.random() * (max - min + 1) + min);
        //this.xVelocity = Math.random() > 0.5 ? 5 : -5; // 50% chance of starting from left or right
        this.xVelocity = Math.floor(Math.random() * (max - min + 1) + min);
    };
    Ball.prototype.update = function () {
        _super.prototype.update.call(this);
        var game = this.game;
        // If the ball hits the top postion move it down and vice versa
        if (this.y > game.height - this.height || this.y < 0) {
            this.yVelocity *= -1; // switch the direction of the ball
        }
        // If the bll thits the side wall
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
            if (b.show == true && this.intersect(b)) {
                b.show = false;
                game.score1++;
                console.log("::brick.intersect");
            }
        }
    };
    return Ball;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Ball);


/***/ }),

/***/ "./src/blocks/brick.ts":
/*!*****************************!*\
  !*** ./src/blocks/brick.ts ***!
  \*****************************/
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
/* harmony default export */ __webpack_exports__["default"] = (Brick);


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
        this.score1 = 0;
        this.score2 = 0;
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
        var loop = function (time) {
            _this.animId = window.requestAnimationFrame(loop);
            _this.update();
            _this.draw();
            if (_this.score1 == 10) {
                window.cancelAnimationFrame(_this.animId);
            }
        };
        window.requestAnimationFrame(loop);
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "./src/blocks/wall.ts":
/*!****************************!*\
  !*** ./src/blocks/wall.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
            var b = new _brick__WEBPACK_IMPORTED_MODULE_1__["default"](game);
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
/* harmony default export */ __webpack_exports__["default"] = (Wall);


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
/* harmony import */ var _blocks_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/background */ "./src/blocks/background.ts");





var scene = document.querySelector("#game"), game = new _blocks_game__WEBPACK_IMPORTED_MODULE_0__["default"](scene);
function start() {
    scene.innerHTML = "";
    window.cancelAnimationFrame(game.animId);
    game.entities = [
        game.ball = new _blocks_ball__WEBPACK_IMPORTED_MODULE_1__["default"](game),
        game.wall = new _blocks_wall__WEBPACK_IMPORTED_MODULE_2__["default"](game),
        game.player = new _blocks_player__WEBPACK_IMPORTED_MODULE_3__["default"](game),
        game.background = new _blocks_background__WEBPACK_IMPORTED_MODULE_4__["default"](game)
    ];
    game.score1 = 0;
    game.start();
}
start();
window.game = game;
window.startGame = start;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iYWNrZ3JvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmFsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2JyaWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3dhbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZGRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEY4QjtBQUU5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LENBQUM7SUFDcEMsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLENBNUIyQixzREFBTSxHQTRCakMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vZW50aXR5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgRW50aXR5IHtcclxuICBzY29yZV9wbGF5ZXIxOiBIVE1MRWxlbWVudDtcclxuICBzY29yZV9wbGF5ZXIyOiBIVE1MRWxlbWVudDtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKVxyXG4gICAgdGhpcy5zY29yZV9wbGF5ZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZV9wbGF5ZXIxXCIpO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuc2NvcmVfcGxheWVyMS5pbm5lclRleHQgPSB0aGlzLmdhbWUuc2NvcmUxO1xyXG4gIH1cclxufSIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIEVudGl0eSB7XHJcbiAgd2lkdGg6IGFueVxyXG4gIGhlaWdodDogYW55XHJcbiAgYXg6IGFueVxyXG4gIG5hbWU6IGFueVxyXG4gIGdhbWU6IEdhbWVcclxuICB4VmVsb2NpdHk6IGFueVxyXG4gIHlWZWxvY2l0eTogYW55XHJcbiAgeDogYW55XHJcbiAgeTogYW55XHJcbiAgcGxheWVyOiBhbnlcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLndpZHRoID0gMjA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDIwO1xyXG4gICAgdGhpcy5heCA9IDA7XHJcbiAgICB0aGlzLm5hbWUgPSBcImJhbGxcIjtcclxuXHJcbiAgICB2YXIgcGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBsYXllci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIHBsYXllci5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xyXG4gICAgcGxheWVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmFsbFwiKTtcclxuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuICAgIGdhbWUuY2FudmFzLmFwcGVuZChwbGF5ZXIpO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbW92ZVRvKGJhbGwpIHtcclxuICAgIHRoaXMueCA9IGJhbGwueDtcclxuICAgIHRoaXMueSA9IGJhbGwueTtcclxuICAgIHRoaXMueFZlbG9jaXR5ID0gYmFsbC54VmVsb2NpdHk7XHJcbiAgICB0aGlzLnlWZWxvY2l0eSA9IGJhbGwueVZlbG9jaXR5O1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICAgIHBsYXllci5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgdGhpcy54ID0gZ2FtZS53aWR0aCAvIDIgLSB0aGlzLndpZHRoOyAvLyBjZW50ZXIgYmFsbCBob3Jpem9udGFsbHlcclxuICAgIHRoaXMueSA9IGdhbWUuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0OyAvLyBjZW50ZXIgYmFsbCB2ZXJ0aWNhbGx5XHJcblxyXG4gICAgLy8gU2V0IHJhbmRvbSB2YWx1ZXMgaWYgYmFsbCBnb2VzIG9mZnNjcmVlblxyXG4gICAgdmFyIG1pbiA9IC01LFxyXG4gICAgICBtYXggPSA1O1xyXG5cclxuICAgIHRoaXMueVZlbG9jaXR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIC8vdGhpcy54VmVsb2NpdHkgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gNSA6IC01OyAvLyA1MCUgY2hhbmNlIG9mIHN0YXJ0aW5nIGZyb20gbGVmdCBvciByaWdodFxyXG4gICAgdGhpcy54VmVsb2NpdHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG5cclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XHJcblxyXG4gICAgLy8gSWYgdGhlIGJhbGwgaGl0cyB0aGUgdG9wIHBvc3Rpb24gbW92ZSBpdCBkb3duIGFuZCB2aWNlIHZlcnNhXHJcbiAgICBpZiAodGhpcy55ID4gZ2FtZS5oZWlnaHQgLSB0aGlzLmhlaWdodCB8fCB0aGlzLnkgPCAwKSB7XHJcbiAgICAgIHRoaXMueVZlbG9jaXR5ICo9IC0xOyAvLyBzd2l0Y2ggdGhlIGRpcmVjdGlvbiBvZiB0aGUgYmFsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSBibGwgdGhpdHMgdGhlIHNpZGUgd2FsbFxyXG4gICAgaWYgKHRoaXMueCA+IGdhbWUud2lkdGggLSB0aGlzLndpZHRoIHx8IHRoaXMueCA8IDApIHtcclxuICAgICAgdGhpcy54VmVsb2NpdHkgKj0gLTE7IC8vIHN3aXRjaCB0aGUgZGlyZWN0aW9uIG9mIHRoZSBiYWxsXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpdHRlcjtcclxuXHJcbiAgICBpZiAodGhpcy5pbnRlcnNlY3QoZ2FtZS5wbGF5ZXIpKSB7XHJcbiAgICAgIGhpdHRlciA9IGdhbWUucGxheWVyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoaGl0dGVyKSB7XHJcbiAgICAgIC8vdGhpcy54VmVsb2NpdHkgKj0gLTEuMTsgLy8gc3dpdGNoIHRoZSBtb3ZlbWVudCAvIHJlYm91bmQgYW5kIGFsc28gaW5jcmVhc2UgdGhlIHNwZWVkLlxyXG4gICAgICB0aGlzLnlWZWxvY2l0eSAqPSAtMS4xO1xyXG4gICAgICAvLyBtYWtlIHRoZSBnYW1lIGludGVyZXN0aW5nIGJ5IGdhaW5pbmcgdmVsb2NpdHkuIFxyXG4gICAgICAvLyBJZiB0aGlzIGlzIG5vdCBkb25lLCB0aGUgYmFsbCBtb3ZlbWVudCBhZnRlciBoaXQgd2lsbCBiZSBwcmVkaWN0YWJsZVxyXG4gICAgICAvL3RoaXMueVZlbG9jaXR5ICs9IGhpdHRlci54VmVsb2NpdHkgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGlmIGJhbGwgaW50ZXJzZWN0cyB3aXRoIGJyaWNrc1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2FtZS53YWxsLmJyaWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgYiA9IGdhbWUud2FsbC5icmlja3NbaV07XHJcbiAgICAgIGlmIChiLnNob3cgPT0gdHJ1ZSAmJiB0aGlzLmludGVyc2VjdChiKSkge1xyXG4gICAgICAgIGIuc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIGdhbWUuc2NvcmUxKys7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI6OmJyaWNrLmludGVyc2VjdFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9lbnRpdHlcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJpY2sgZXh0ZW5kcyBFbnRpdHkge1xyXG4gIHk6IGFueVxyXG4gIHg6IGFueVxyXG4gIHdpZHRoOiBhbnlcclxuICBoZWlnaHQ6IGFueVxyXG4gIHBsYXllcjogYW55XHJcbiAgc2hvdzogYm9vbGVhblxyXG4gIHlWZWxvY2l0eTogYW55XHJcbiAgeFZlbG9jaXR5OiBhbnlcclxuICBzY29yZTogYW55XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMud2lkdGggPSA2MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIHRoaXMueFZlbG9jaXR5ID0gMDtcclxuICAgIHRoaXMueVZlbG9jaXR5ID0gMDtcclxuXHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMuc2hvdyA9IHRydWU7XHJcblxyXG4gICAgdmFyIHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwbGF5ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBwbGF5ZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcclxuICAgIHBsYXllci5jbGFzc05hbWUgKz0gXCIgYnJpY2tcIjtcclxuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuICAgIGdhbWUuY2FudmFzLmFwcGVuZChwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICAgIHBsYXllci5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICAgIHBsYXllci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG59IiwiLy8gVGhlIGdhbWUgaXMgY29tcG9zZWQgb2YgYWN0b3JzXHJcbmNsYXNzIEVudGl0eSB7XHJcbiAgLy8gQSBwb3NpdGlvblxyXG4gIHg6IG51bWJlciA9IDBcclxuICB5OiBudW1iZXIgPSAwXHJcbiAgcHg6IG51bWJlciA9IDBcclxuICBweTogbnVtYmVyID0gMFxyXG4gIGdhbWU6IGFueVxyXG5cclxuICAvLyBEaW1lbnNpb25zXHJcbiAgd2lkdGg6IG51bWJlciA9IDBcclxuICBoZWlnaHQ6IG51bWJlciA9IDBcclxuXHJcbiAgLy8gQSB2ZWxvY2l0eTogc3BlZWQgd2l0aCBkaXJlY3Rpb25cclxuICB4VmVsb2NpdHk6IG51bWJlciA9IDA7XHJcbiAgeVZlbG9jaXR5OiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gIH1cclxuXHJcbiAgLy8gT24gZWFjaCB1cGRhdGUsIHdlIGFwcGx5IHRoZSB2ZWxvY2l0eSB0byB0aGUgY3VycmVudCBwb3NpdGlvbi5cclxuICAvLyBUaGlzIG1ha2VzIHRoZSBlbnRpdHkgbW92ZS5cclxuICAvLyBFbnRpdGllcyBhcmUgZXhwZWN0ZWQgdG8gb3ZlcnJpZGUgdGhpcyBtZXRob2RcclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnB4ID0gdGhpcy54OyAgLy8gcHJldiB2YWx1ZXNcclxuICAgIHRoaXMucHkgPSB0aGlzLnk7XHJcblxyXG4gICAgdGhpcy54ICs9IHRoaXMueFZlbG9jaXR5O1xyXG4gICAgdGhpcy55ICs9IHRoaXMueVZlbG9jaXR5O1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvLyBUaGUgYWN0b3IgIGtub3dzIGhvdyB0byBkcmF3IGl0c2VsZi5cclxuICAvLyBBbGwgYWN0b3JzIG9mIG91ciBnYW1lIHdpbGwgYmUgd2hpdGUgcmVjdGFuZ2xlcy5cclxuXHJcbiAgLy8gQmFzaWMgYm91bmRpbmcgYm94IGNvbGxpc29uIGRldGVjdGlvbi5cclxuICAvLyBSZXR1cm5zICd0cnVlJyBpZiB0aGUgYWN0b3IgaW50ZXJzZWN0IHdpdGggYW5vdGhlciBvbmVcclxuICBpbnRlcnNlY3Qob3RoZXIpIHtcclxuICAgIGlmIChvdGhlciA9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IG90aGVyLnkgJiZcclxuICAgICAgdGhpcy55IDwgb3RoZXIueSArIG90aGVyLmhlaWdodCAmJlxyXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gb3RoZXIueCAmJlxyXG4gICAgICB0aGlzLnggPCBvdGhlci54ICsgb3RoZXIud2lkdGg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XHJcbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgZW50aXRpZXM6IEVudGl0eVtdXHJcbiAgYmFsbDogYW55XHJcbiAgaGVpZ2h0OiBhbnlcclxuICB3aWR0aDogYW55XHJcbiAgY2FudmFzOiBhbnlcclxuICB3YWxsOiBhbnlcclxuICBwbGF5ZXI6IGFueVxyXG4gIGJhY2tncm91bmQ6IGFueVxyXG4gIHNjb3JlMTogbnVtYmVyXHJcbiAgc2NvcmUyOiBudW1iZXJcclxuICBhbmltSWQ6IGFueVxyXG5cclxuICBzdGF0aWMga2V5cyA9IHtcclxuICAgIDMyOiAnc3BhY2UnLFxyXG4gICAgMzc6ICdsZWZ0JyxcclxuICAgIDM4OiAndXAnLFxyXG4gICAgMzk6ICdyaWdodCcsXHJcbiAgICA0MDogJ2Rvd24nXHJcbiAgfTtcclxuICBrZXlQcmVzc2VkOiB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMud2lkdGggPSBjYW52YXMub2Zmc2V0V2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0aGlzLnNjb3JlMSA9IDA7XHJcbiAgICB0aGlzLnNjb3JlMiA9IDA7XHJcblxyXG4gICAgdGhpcy5rZXlQcmVzc2VkID0ge307XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVFdmVudChlKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXZlbnQoZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUV2ZW50KGUpIHtcclxuICAgIC8vIENvbnZlcnQgdGhlIGtleSBjb2RlIHRvIGtleSBuYW1lXHJcbiAgICB2YXIga2V5TmFtZSA9IEdhbWUua2V5c1tlLndoaWNoXTtcclxuXHJcbiAgICBpZiAoa2V5TmFtZSkge1xyXG4gICAgICAvLyBlLmc6ICdzZWxmLmtleVByZXNzZWQudXAgPSB0cnVlJyBvbiBrZXlkb3duXHJcbiAgICAgIC8vIFdpbGwgYmUgc2V0IHRvIGZhbHNlIG9uIGtleXVwXHJcbiAgICAgIHRoaXMua2V5UHJlc3NlZFtrZXlOYW1lXSA9IChlLnR5cGUgPT09IFwia2V5ZG93blwiKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJLRVk6IFwiLCB0aGlzLmtleVByZXNzZWQpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgbGV0IGZwczogbnVtYmVyID0gNjAsXHJcbiAgICAgIGludGVydmFsOiBudW1iZXIgPSAxMDAwIC8gZnBzO1xyXG5cclxuICAgIGxldCBsb29wID0gKHRpbWUpID0+IHtcclxuICAgICAgdGhpcy5hbmltSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLmRyYXcoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNjb3JlMSA9PSAxMCkge1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1JZCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcbiAgICAgIGlmIChlbnRpdHkudXBkYXRlKSBlbnRpdHkudXBkYXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xyXG4gICAgICBpZiAoZW50aXR5LmRyYXcpIGVudGl0eS5kcmF3KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFBhZGRsZSB9IGZyb20gXCIuLi9wYWRkbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFBhZGRsZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBsYXllcjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgdGhpcy53aWR0aCA9IDEwMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XHJcbiAgICB0aGlzLnggPSAyMDtcclxuICAgIHRoaXMueSA9IGdhbWUuaGVpZ2h0IC0gMjA7XHJcbiAgICB0aGlzLm5hbWUgPSBcInBsYXllclwiO1xyXG5cclxuICAgIHZhciBwbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGxheWVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgcGxheWVyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLmxlZnQgPSB0aGlzLnggKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XHJcbiAgICBwbGF5ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXJcIik7XHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICBnYW1lLmNhbnZhcy5hcHBlbmQocGxheWVyKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgICBwbGF5ZXIuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcclxuICB9XHJcblxyXG4gIHVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHZhciBzcGVlZCA9IDEwO1xyXG4gICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XHJcblxyXG4gICAgaWYgKGdhbWUua2V5UHJlc3NlZC5sZWZ0KSB7XHJcbiAgICAgIHRoaXMueFZlbG9jaXR5ID0gLXNwZWVkO1xyXG4gICAgfSBlbHNlIGlmIChnYW1lLmtleVByZXNzZWQucmlnaHQpIHtcclxuICAgICAgdGhpcy54VmVsb2NpdHkgPSBzcGVlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMueFZlbG9jaXR5ID0gMDsgLy8gc3RvcCBtb3ZpbmcgaWYgbm8ga2V5cyBwcmVzc2VkXHJcbiAgICB9XHJcbiAgICBzdXBlci51cGRhdGUoKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL2VudGl0eVwiO1xyXG5pbXBvcnQgQnJpY2sgZnJvbSBcIi4vYnJpY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGwgZXh0ZW5kcyBFbnRpdHkge1xyXG4gIGJyaWNrczogYW55XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgdGhpcy5icmlja3MgPSBbXTtcclxuICAgIHRoaXMuaW5pdChnYW1lKTtcclxuICB9XHJcblxyXG5cclxuICBpbml0KGdhbWUpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICB2YXIgYiA9IG5ldyBCcmljayhnYW1lKTtcclxuICAgICAgYi5wbGF5ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJicmlja19cIiArIGkpO1xyXG4gICAgICBiLnggKz0gYi53aWR0aCAqIGk7XHJcbiAgICAgIGIueSA9IDA7XHJcblxyXG4gICAgICB0aGlzLmJyaWNrcy5wdXNoKGIpO1xyXG4gICAgfVxyXG4gIH1cclxuICB1cGRhdGUoKSB7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJyaWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgYiA9IHRoaXMuYnJpY2tzW2ldO1xyXG4gICAgICBpZiAoYi5zaG93KSB7XHJcbiAgICAgICAgYi5kcmF3KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYi5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9ibG9ja3MvZ2FtZSc7XHJcbmltcG9ydCBCYWxsIGZyb20gJy4vYmxvY2tzL2JhbGwnO1xyXG5pbXBvcnQgV2FsbCBmcm9tICcuL2Jsb2Nrcy93YWxsJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL2Jsb2Nrcy9wbGF5ZXInO1xyXG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2Jsb2Nrcy9iYWNrZ3JvdW5kJztcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHsgZ2FtZTogYW55OyBzdGFydEdhbWU6IGFueSB9XHJcbn1cclxuXHJcblxyXG52YXIgc2NlbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWVcIiksXHJcbiAgZ2FtZSA9IG5ldyBHYW1lKHNjZW5lKTtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gIHNjZW5lLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGdhbWUuYW5pbUlkKTtcclxuICBnYW1lLmVudGl0aWVzID0gW1xyXG4gICAgZ2FtZS5iYWxsID0gbmV3IEJhbGwoZ2FtZSksXHJcbiAgICBnYW1lLndhbGwgPSBuZXcgV2FsbChnYW1lKSxcclxuICAgIGdhbWUucGxheWVyID0gbmV3IFBsYXllcihnYW1lKSxcclxuICAgIGdhbWUuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKGdhbWUpXHJcbiAgXVxyXG4gIGdhbWUuc2NvcmUxID0gMDtcclxuXHJcbiAgZ2FtZS5zdGFydCgpO1xyXG59XHJcblxyXG5zdGFydCgpO1xyXG5cclxud2luZG93LmdhbWUgPSBnYW1lO1xyXG53aW5kb3cuc3RhcnRHYW1lID0gc3RhcnQ7XHJcblxyXG4iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL2Jsb2Nrcy9lbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWRkbGUgZXh0ZW5kcyBFbnRpdHkge1xyXG4gIHdpZHRoOiBudW1iZXJcclxuICBoZWlnaHQ6IG51bWJlclxyXG4gIHNjb3JlOiBudW1iZXJcclxuICB5OiBudW1iZXJcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSlcclxuICAgIHRoaXMud2lkdGggPSAyMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xyXG4gICAgdGhpcy5zY29yZSA9IDA7XHJcblxyXG4gICAgdGhpcy55ID0gMDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHN1cGVyLnVwZGF0ZSgpXHJcbiAgICAvLyB4IHdpbGwgYWx3YXlzIHN0YXkgYmVsb3cgb3IgZXF1YWwgdG8gMFxyXG4gICAgdGhpcy54ID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy54LCAwKSxcclxuICAgICAgdGhpcy5nYW1lLndpZHRoIC0gdGhpcy53aWR0aCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG8ocGxheWVyKSB7XHJcbiAgICB0aGlzLnggPSBwbGF5ZXIueDtcclxuICAgIHRoaXMueSA9IHBsYXllci55O1xyXG4gICAgdGhpcy54VmVsb2NpdHkgPSBwbGF5ZXIueFZlbG9jaXR5O1xyXG4gICAgdGhpcy55VmVsb2NpdHkgPSBwbGF5ZXIueVZlbG9jaXR5O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=