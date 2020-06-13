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
        //player.style.transform = `translate('${this.x}px','${this.y}px')`;
    };
    Ball.prototype.init = function () {
        var game = this.game;
        this.x = game.width / 2 - this.width; // center ball horizontally
        this.y = game.height / 2 - this.height; // center ball vertically
        // Set random values if ball goes offscreen
        var min = -7, max = 7;
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

/***/ "./src/blocks/paddle.ts":
/*!******************************!*\
  !*** ./src/blocks/paddle.ts ***!
  \******************************/
/*! exports provided: Paddle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paddle", function() { return Paddle; });
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
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/blocks/player.ts":
/*!******************************!*\
  !*** ./src/blocks/player.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle */ "./src/blocks/paddle.ts");
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iYWNrZ3JvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmFsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2JyaWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3BhZGRsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3dhbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xG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QUUsQ0FBQztBQUVSLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ25CLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL2VudGl0eVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIEVudGl0eSB7XHJcbiAgc2NvcmVfcGxheWVyMTogSFRNTEVsZW1lbnQ7XHJcbiAgc2NvcmVfcGxheWVyMjogSFRNTEVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSlcclxuICAgIHRoaXMuc2NvcmVfcGxheWVyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVfcGxheWVyMVwiKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLnNjb3JlX3BsYXllcjEuaW5uZXJUZXh0ID0gdGhpcy5nYW1lLnNjb3JlMTtcclxuICB9XHJcbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwgZXh0ZW5kcyBFbnRpdHkge1xyXG4gIHdpZHRoOiBhbnlcclxuICBoZWlnaHQ6IGFueVxyXG4gIGF4OiBhbnlcclxuICBuYW1lOiBhbnlcclxuICBnYW1lOiBHYW1lXHJcbiAgeFZlbG9jaXR5OiBhbnlcclxuICB5VmVsb2NpdHk6IGFueVxyXG4gIHg6IGFueVxyXG4gIHk6IGFueVxyXG4gIHBsYXllcjogYW55XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgdGhpcy53aWR0aCA9IDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcclxuICAgIHRoaXMuYXggPSAwO1xyXG4gICAgdGhpcy5uYW1lID0gXCJiYWxsXCI7XHJcblxyXG4gICAgdmFyIHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwbGF5ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBwbGF5ZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcclxuICAgIHBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhbGxcIik7XHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICBnYW1lLmNhbnZhcy5hcHBlbmQocGxheWVyKTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIG1vdmVUbyhiYWxsKSB7XHJcbiAgICB0aGlzLnggPSBiYWxsLng7XHJcbiAgICB0aGlzLnkgPSBiYWxsLnk7XHJcbiAgICB0aGlzLnhWZWxvY2l0eSA9IGJhbGwueFZlbG9jaXR5O1xyXG4gICAgdGhpcy55VmVsb2NpdHkgPSBiYWxsLnlWZWxvY2l0eTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgICBcclxuICAgIHBsYXllci5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xyXG4gICAgLy9wbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgnJHt0aGlzLnh9cHgnLCcke3RoaXMueX1weCcpYDtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcclxuICAgIHRoaXMueCA9IGdhbWUud2lkdGggLyAyIC0gdGhpcy53aWR0aDsgLy8gY2VudGVyIGJhbGwgaG9yaXpvbnRhbGx5XHJcbiAgICB0aGlzLnkgPSBnYW1lLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodDsgLy8gY2VudGVyIGJhbGwgdmVydGljYWxseVxyXG5cclxuICAgIC8vIFNldCByYW5kb20gdmFsdWVzIGlmIGJhbGwgZ29lcyBvZmZzY3JlZW5cclxuICAgIHZhciBtaW4gPSAtNyxcclxuICAgICAgbWF4ID0gNztcclxuXHJcbiAgICB0aGlzLnlWZWxvY2l0eSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgICAvL3RoaXMueFZlbG9jaXR5ID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDUgOiAtNTsgLy8gNTAlIGNoYW5jZSBvZiBzdGFydGluZyBmcm9tIGxlZnQgb3IgcmlnaHRcclxuICAgIHRoaXMueFZlbG9jaXR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBzdXBlci51cGRhdGUoKTtcclxuICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xyXG5cclxuICAgIC8vIElmIHRoZSBiYWxsIGhpdHMgdGhlIHRvcCBwb3N0aW9uIG1vdmUgaXQgZG93biBhbmQgdmljZSB2ZXJzYVxyXG4gICAgaWYgKHRoaXMueSA+IGdhbWUuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgfHwgdGhpcy55IDwgMCkge1xyXG4gICAgICB0aGlzLnlWZWxvY2l0eSAqPSAtMTsgLy8gc3dpdGNoIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGJhbGxcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGUgYmxsIHRoaXRzIHRoZSBzaWRlIHdhbGxcclxuICAgIGlmICh0aGlzLnggPiBnYW1lLndpZHRoIC0gdGhpcy53aWR0aCB8fCB0aGlzLnggPCAwKSB7XHJcbiAgICAgIHRoaXMueFZlbG9jaXR5ICo9IC0xOyAvLyBzd2l0Y2ggdGhlIGRpcmVjdGlvbiBvZiB0aGUgYmFsbFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBoaXR0ZXI7XHJcblxyXG4gICAgaWYgKHRoaXMuaW50ZXJzZWN0KGdhbWUucGxheWVyKSkge1xyXG4gICAgICBoaXR0ZXIgPSBnYW1lLnBsYXllcjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKGhpdHRlcikge1xyXG4gICAgICAvL3RoaXMueFZlbG9jaXR5ICo9IC0xLjE7IC8vIHN3aXRjaCB0aGUgbW92ZW1lbnQgLyByZWJvdW5kIGFuZCBhbHNvIGluY3JlYXNlIHRoZSBzcGVlZC5cclxuICAgICAgdGhpcy55VmVsb2NpdHkgKj0gLTEuMTtcclxuICAgICAgLy8gbWFrZSB0aGUgZ2FtZSBpbnRlcmVzdGluZyBieSBnYWluaW5nIHZlbG9jaXR5LiBcclxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgZG9uZSwgdGhlIGJhbGwgbW92ZW1lbnQgYWZ0ZXIgaGl0IHdpbGwgYmUgcHJlZGljdGFibGVcclxuICAgICAgLy90aGlzLnlWZWxvY2l0eSArPSBoaXR0ZXIueFZlbG9jaXR5IC8gMjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBpZiBiYWxsIGludGVyc2VjdHMgd2l0aCBicmlja3NcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdhbWUud2FsbC5icmlja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGIgPSBnYW1lLndhbGwuYnJpY2tzW2ldO1xyXG4gICAgICBpZiAoYi5zaG93ID09IHRydWUgJiYgdGhpcy5pbnRlcnNlY3QoYikpIHtcclxuICAgICAgICBiLnNob3cgPSBmYWxzZTtcclxuICAgICAgICBnYW1lLnNjb3JlMSsrO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiOjpicmljay5pbnRlcnNlY3RcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vZW50aXR5XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyaWNrIGV4dGVuZHMgRW50aXR5IHtcclxuICB5OiBhbnlcclxuICB4OiBhbnlcclxuICB3aWR0aDogYW55XHJcbiAgaGVpZ2h0OiBhbnlcclxuICBwbGF5ZXI6IGFueVxyXG4gIHNob3c6IGJvb2xlYW5cclxuICB5VmVsb2NpdHk6IGFueVxyXG4gIHhWZWxvY2l0eTogYW55XHJcbiAgc2NvcmU6IGFueVxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLndpZHRoID0gNjA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDIwO1xyXG4gICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICB0aGlzLnhWZWxvY2l0eSA9IDA7XHJcbiAgICB0aGlzLnlWZWxvY2l0eSA9IDA7XHJcblxyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnNob3cgPSB0cnVlO1xyXG5cclxuICAgIHZhciBwbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGxheWVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgcGxheWVyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLmxlZnQgPSB0aGlzLnggKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XHJcbiAgICBwbGF5ZXIuY2xhc3NOYW1lICs9IFwiIGJyaWNrXCI7XHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICBnYW1lLmNhbnZhcy5hcHBlbmQocGxheWVyKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgICBwbGF5ZXIuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgICBwbGF5ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufSIsIi8vIFRoZSBnYW1lIGlzIGNvbXBvc2VkIG9mIGFjdG9yc1xyXG5jbGFzcyBFbnRpdHkge1xyXG4gIC8vIEEgcG9zaXRpb25cclxuICB4OiBudW1iZXIgPSAwXHJcbiAgeTogbnVtYmVyID0gMFxyXG4gIHB4OiBudW1iZXIgPSAwXHJcbiAgcHk6IG51bWJlciA9IDBcclxuICBnYW1lOiBhbnlcclxuXHJcbiAgLy8gRGltZW5zaW9uc1xyXG4gIHdpZHRoOiBudW1iZXIgPSAwXHJcbiAgaGVpZ2h0OiBudW1iZXIgPSAwXHJcblxyXG4gIC8vIEEgdmVsb2NpdHk6IHNwZWVkIHdpdGggZGlyZWN0aW9uXHJcbiAgeFZlbG9jaXR5OiBudW1iZXIgPSAwO1xyXG4gIHlWZWxvY2l0eTogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICB9XHJcblxyXG4gIC8vIE9uIGVhY2ggdXBkYXRlLCB3ZSBhcHBseSB0aGUgdmVsb2NpdHkgdG8gdGhlIGN1cnJlbnQgcG9zaXRpb24uXHJcbiAgLy8gVGhpcyBtYWtlcyB0aGUgZW50aXR5IG1vdmUuXHJcbiAgLy8gRW50aXRpZXMgYXJlIGV4cGVjdGVkIHRvIG92ZXJyaWRlIHRoaXMgbWV0aG9kXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5weCA9IHRoaXMueDsgIC8vIHByZXYgdmFsdWVzXHJcbiAgICB0aGlzLnB5ID0gdGhpcy55O1xyXG5cclxuICAgIHRoaXMueCArPSB0aGlzLnhWZWxvY2l0eTtcclxuICAgIHRoaXMueSArPSB0aGlzLnlWZWxvY2l0eTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gVGhlIGFjdG9yICBrbm93cyBob3cgdG8gZHJhdyBpdHNlbGYuXHJcbiAgLy8gQWxsIGFjdG9ycyBvZiBvdXIgZ2FtZSB3aWxsIGJlIHdoaXRlIHJlY3RhbmdsZXMuXHJcblxyXG4gIC8vIEJhc2ljIGJvdW5kaW5nIGJveCBjb2xsaXNvbiBkZXRlY3Rpb24uXHJcbiAgLy8gUmV0dXJucyAndHJ1ZScgaWYgdGhlIGFjdG9yIGludGVyc2VjdCB3aXRoIGFub3RoZXIgb25lXHJcbiAgaW50ZXJzZWN0KG90aGVyKSB7XHJcbiAgICBpZiAob3RoZXIgPT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBvdGhlci55ICYmXHJcbiAgICAgIHRoaXMueSA8IG90aGVyLnkgKyBvdGhlci5oZWlnaHQgJiZcclxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IG90aGVyLnggJiZcclxuICAgICAgdGhpcy54IDwgb3RoZXIueCArIG90aGVyLndpZHRoO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW50aXR5O1xyXG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIGVudGl0aWVzOiBFbnRpdHlbXVxyXG4gIGJhbGw6IGFueVxyXG4gIGhlaWdodDogYW55XHJcbiAgd2lkdGg6IGFueVxyXG4gIGNhbnZhczogYW55XHJcbiAgd2FsbDogYW55XHJcbiAgcGxheWVyOiBhbnlcclxuICBiYWNrZ3JvdW5kOiBhbnlcclxuICBzY29yZTE6IG51bWJlclxyXG4gIHNjb3JlMjogbnVtYmVyXHJcbiAgYW5pbUlkOiBhbnlcclxuXHJcbiAgc3RhdGljIGtleXMgPSB7XHJcbiAgICAzMjogJ3NwYWNlJyxcclxuICAgIDM3OiAnbGVmdCcsXHJcbiAgICAzODogJ3VwJyxcclxuICAgIDM5OiAncmlnaHQnLFxyXG4gICAgNDA6ICdkb3duJ1xyXG4gIH07XHJcbiAga2V5UHJlc3NlZDoge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLndpZHRoID0gY2FudmFzLm9mZnNldFdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBjYW52YXMub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGhpcy5zY29yZTEgPSAwO1xyXG4gICAgdGhpcy5zY29yZTIgPSAwO1xyXG5cclxuICAgIHRoaXMua2V5UHJlc3NlZCA9IHt9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXZlbnQoZSk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLmhhbmRsZUV2ZW50KGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFdmVudChlKSB7XHJcbiAgICAvLyBDb252ZXJ0IHRoZSBrZXkgY29kZSB0byBrZXkgbmFtZVxyXG4gICAgdmFyIGtleU5hbWUgPSBHYW1lLmtleXNbZS53aGljaF07XHJcblxyXG4gICAgaWYgKGtleU5hbWUpIHtcclxuICAgICAgLy8gZS5nOiAnc2VsZi5rZXlQcmVzc2VkLnVwID0gdHJ1ZScgb24ga2V5ZG93blxyXG4gICAgICAvLyBXaWxsIGJlIHNldCB0byBmYWxzZSBvbiBrZXl1cFxyXG4gICAgICB0aGlzLmtleVByZXNzZWRba2V5TmFtZV0gPSAoZS50eXBlID09PSBcImtleWRvd25cIik7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiS0VZOiBcIiwgdGhpcy5rZXlQcmVzc2VkKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIGxldCBmcHM6IG51bWJlciA9IDYwLFxyXG4gICAgICBpbnRlcnZhbDogbnVtYmVyID0gMTAwMCAvIGZwcztcclxuXHJcbiAgICBsZXQgbG9vcCA9ICh0aW1lKSA9PiB7XHJcbiAgICAgIHRoaXMuYW5pbUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgdGhpcy5kcmF3KCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5zY29yZTEgPT0gMTApIHtcclxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltSWQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xyXG4gICAgICBpZiAoZW50aXR5LnVwZGF0ZSkgZW50aXR5LnVwZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgaWYgKGVudGl0eS5kcmF3KSBlbnRpdHkuZHJhdygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL2VudGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZGRsZSBleHRlbmRzIEVudGl0eSB7XHJcbiAgd2lkdGg6IG51bWJlclxyXG4gIGhlaWdodDogbnVtYmVyXHJcbiAgc2NvcmU6IG51bWJlclxyXG4gIHk6IG51bWJlclxyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKVxyXG4gICAgdGhpcy53aWR0aCA9IDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAxMDA7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuXHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgc3VwZXIudXBkYXRlKClcclxuICAgIC8vIHggd2lsbCBhbHdheXMgc3RheSBiZWxvdyBvciBlcXVhbCB0byAwXHJcbiAgICB0aGlzLnggPSBNYXRoLm1pbihNYXRoLm1heCh0aGlzLngsIDApLFxyXG4gICAgICB0aGlzLmdhbWUud2lkdGggLSB0aGlzLndpZHRoKTtcclxuICB9XHJcblxyXG4gIG1vdmVUbyhwbGF5ZXIpIHtcclxuICAgIHRoaXMueCA9IHBsYXllci54O1xyXG4gICAgdGhpcy55ID0gcGxheWVyLnk7XHJcbiAgICB0aGlzLnhWZWxvY2l0eSA9IHBsYXllci54VmVsb2NpdHk7XHJcbiAgICB0aGlzLnlWZWxvY2l0eSA9IHBsYXllci55VmVsb2NpdHk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGFkZGxlIH0gZnJvbSBcIi4vcGFkZGxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQYWRkbGUge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwbGF5ZXI6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMud2lkdGggPSAxMDA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDIwO1xyXG4gICAgdGhpcy54ID0gMjA7XHJcbiAgICB0aGlzLnkgPSBnYW1lLmhlaWdodCAtIDIwO1xyXG4gICAgdGhpcy5uYW1lID0gXCJwbGF5ZXJcIjtcclxuXHJcbiAgICB2YXIgcGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBsYXllci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIHBsYXllci5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xyXG4gICAgcGxheWVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyXCIpO1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgZ2FtZS5jYW52YXMuYXBwZW5kKHBsYXllcik7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gICAgcGxheWVyLnN0eWxlLmxlZnQgPSB0aGlzLnggKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUgPSAoKSA9PiB7XHJcbiAgICB2YXIgc3BlZWQgPSAxMDtcclxuICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xyXG5cclxuICAgIGlmIChnYW1lLmtleVByZXNzZWQubGVmdCkge1xyXG4gICAgICB0aGlzLnhWZWxvY2l0eSA9IC1zcGVlZDtcclxuICAgIH0gZWxzZSBpZiAoZ2FtZS5rZXlQcmVzc2VkLnJpZ2h0KSB7XHJcbiAgICAgIHRoaXMueFZlbG9jaXR5ID0gc3BlZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnhWZWxvY2l0eSA9IDA7IC8vIHN0b3AgbW92aW5nIGlmIG5vIGtleXMgcHJlc3NlZFxyXG4gICAgfVxyXG4gICAgc3VwZXIudXBkYXRlKCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9lbnRpdHlcIjtcclxuaW1wb3J0IEJyaWNrIGZyb20gXCIuL2JyaWNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsIGV4dGVuZHMgRW50aXR5IHtcclxuICBicmlja3M6IGFueVxyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMuYnJpY2tzID0gW107XHJcbiAgICB0aGlzLmluaXQoZ2FtZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW5pdChnYW1lKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgdmFyIGIgPSBuZXcgQnJpY2soZ2FtZSk7XHJcbiAgICAgIGIucGxheWVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnJpY2tfXCIgKyBpKTtcclxuICAgICAgYi54ICs9IGIud2lkdGggKiBpO1xyXG4gICAgICBiLnkgPSAwO1xyXG5cclxuICAgICAgdGhpcy5icmlja3MucHVzaChiKTtcclxuICAgIH1cclxuICB9XHJcbiAgdXBkYXRlKCkge1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5icmlja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGIgPSB0aGlzLmJyaWNrc1tpXTtcclxuICAgICAgaWYgKGIuc2hvdykge1xyXG4gICAgICAgIGIuZHJhdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGIuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vYmxvY2tzL2dhbWUnO1xyXG5pbXBvcnQgQmFsbCBmcm9tICcuL2Jsb2Nrcy9iYWxsJztcclxuaW1wb3J0IFdhbGwgZnJvbSAnLi9ibG9ja3Mvd2FsbCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9ibG9ja3MvcGxheWVyJztcclxuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9ibG9ja3MvYmFja2dyb3VuZCc7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7IGdhbWU6IGFueTsgc3RhcnRHYW1lOiBhbnkgfVxyXG59XHJcblxyXG5cclxudmFyIHNjZW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lXCIpLFxyXG4gIGdhbWUgPSBuZXcgR2FtZShzY2VuZSk7XHJcblxyXG5mdW5jdGlvbiBzdGFydCgpIHtcclxuICBzY2VuZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShnYW1lLmFuaW1JZCk7XHJcbiAgZ2FtZS5lbnRpdGllcyA9IFtcclxuICAgIGdhbWUuYmFsbCA9IG5ldyBCYWxsKGdhbWUpLFxyXG4gICAgZ2FtZS53YWxsID0gbmV3IFdhbGwoZ2FtZSksXHJcbiAgICBnYW1lLnBsYXllciA9IG5ldyBQbGF5ZXIoZ2FtZSksXHJcbiAgICBnYW1lLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZChnYW1lKVxyXG4gIF1cclxuICBnYW1lLnNjb3JlMSA9IDA7XHJcblxyXG4gIGdhbWUuc3RhcnQoKTtcclxufVxyXG5cclxuc3RhcnQoKTtcclxuXHJcbndpbmRvdy5nYW1lID0gZ2FtZTtcclxud2luZG93LnN0YXJ0R2FtZSA9IHN0YXJ0O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==