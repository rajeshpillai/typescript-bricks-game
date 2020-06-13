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
        //player.style.left = this.x + 'px';
        //player.style.top = this.y + 'px';
        player.style.transform = "translate(" + this.x + "px," + this.y + "px)";
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
        var elem = document.createElement("img");
        elem.setAttribute("src", "dist/sprites/brick.png");
        elem.style.width = _this.width + "px";
        var player = document.createElement("div");
        player.style.position = "absolute";
        player.style.width = _this.width + 'px';
        player.style.height = _this.height + 'px';
        player.style.left = _this.x + 'px';
        player.style.top = _this.y + 'px';
        player.className += " brick";
        player.appendChild(elem);
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
        _this.y = game.height - 50;
        _this.name = "player";
        // Image
        var elem = document.createElement("img");
        elem.setAttribute("src", "dist/sprites/paddle.png");
        var player = document.createElement("div");
        player.style.position = "absolute";
        player.style.width = _this.width + 'px';
        player.style.height = _this.height + 'px';
        player.style.left = _this.x + 'px';
        player.style.top = _this.y + 'px';
        player.setAttribute("id", "player");
        player.appendChild(elem);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iYWNrZ3JvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmFsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2JyaWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3BhZGRsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3dhbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xG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LE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUc7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksb0RBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLG9EQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxzREFBTSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksMERBQVUsQ0FBQyxJQUFJLENBQUM7S0FDdkM7SUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVoQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDZixDQUFDO0FBRUQsS0FBSyxFQUFFLENBQUM7QUFFUixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNuQixNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9lbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBFbnRpdHkge1xyXG4gIHNjb3JlX3BsYXllcjE6IEhUTUxFbGVtZW50O1xyXG4gIHNjb3JlX3BsYXllcjI6IEhUTUxFbGVtZW50O1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpXHJcbiAgICB0aGlzLnNjb3JlX3BsYXllcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlX3BsYXllcjFcIik7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5zY29yZV9wbGF5ZXIxLmlubmVyVGV4dCA9IHRoaXMuZ2FtZS5zY29yZTE7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIGV4dGVuZHMgRW50aXR5IHtcclxuICB3aWR0aDogYW55XHJcbiAgaGVpZ2h0OiBhbnlcclxuICBheDogYW55XHJcbiAgbmFtZTogYW55XHJcbiAgZ2FtZTogR2FtZVxyXG4gIHhWZWxvY2l0eTogYW55XHJcbiAgeVZlbG9jaXR5OiBhbnlcclxuICB4OiBhbnlcclxuICB5OiBhbnlcclxuICBwbGF5ZXI6IGFueVxyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMud2lkdGggPSAyMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XHJcbiAgICB0aGlzLmF4ID0gMDtcclxuICAgIHRoaXMubmFtZSA9IFwiYmFsbFwiO1xyXG5cclxuICAgIHZhciBwbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGxheWVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgcGxheWVyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLmxlZnQgPSB0aGlzLnggKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XHJcbiAgICBwbGF5ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJiYWxsXCIpO1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgZ2FtZS5jYW52YXMuYXBwZW5kKHBsYXllcik7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG8oYmFsbCkge1xyXG4gICAgdGhpcy54ID0gYmFsbC54O1xyXG4gICAgdGhpcy55ID0gYmFsbC55O1xyXG4gICAgdGhpcy54VmVsb2NpdHkgPSBiYWxsLnhWZWxvY2l0eTtcclxuICAgIHRoaXMueVZlbG9jaXR5ID0gYmFsbC55VmVsb2NpdHk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gICAgXHJcbiAgICAvL3BsYXllci5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcclxuICAgIC8vcGxheWVyLnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RoaXMueH1weCwke3RoaXMueX1weClgO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgdGhpcy54ID0gZ2FtZS53aWR0aCAvIDIgLSB0aGlzLndpZHRoOyAvLyBjZW50ZXIgYmFsbCBob3Jpem9udGFsbHlcclxuICAgIHRoaXMueSA9IGdhbWUuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0OyAvLyBjZW50ZXIgYmFsbCB2ZXJ0aWNhbGx5XHJcblxyXG4gICAgLy8gU2V0IHJhbmRvbSB2YWx1ZXMgaWYgYmFsbCBnb2VzIG9mZnNjcmVlblxyXG4gICAgdmFyIG1pbiA9IC03LFxyXG4gICAgICBtYXggPSA3O1xyXG5cclxuICAgIHRoaXMueVZlbG9jaXR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIC8vdGhpcy54VmVsb2NpdHkgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gNSA6IC01OyAvLyA1MCUgY2hhbmNlIG9mIHN0YXJ0aW5nIGZyb20gbGVmdCBvciByaWdodFxyXG4gICAgdGhpcy54VmVsb2NpdHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG5cclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XHJcblxyXG4gICAgLy8gSWYgdGhlIGJhbGwgaGl0cyB0aGUgdG9wIHBvc3Rpb24gbW92ZSBpdCBkb3duIGFuZCB2aWNlIHZlcnNhXHJcbiAgICBpZiAodGhpcy55ID4gZ2FtZS5oZWlnaHQgLSB0aGlzLmhlaWdodCB8fCB0aGlzLnkgPCAwKSB7XHJcbiAgICAgIHRoaXMueVZlbG9jaXR5ICo9IC0xOyAvLyBzd2l0Y2ggdGhlIGRpcmVjdGlvbiBvZiB0aGUgYmFsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSBibGwgdGhpdHMgdGhlIHNpZGUgd2FsbFxyXG4gICAgaWYgKHRoaXMueCA+IGdhbWUud2lkdGggLSB0aGlzLndpZHRoIHx8IHRoaXMueCA8IDApIHtcclxuICAgICAgdGhpcy54VmVsb2NpdHkgKj0gLTE7IC8vIHN3aXRjaCB0aGUgZGlyZWN0aW9uIG9mIHRoZSBiYWxsXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhpdHRlcjtcclxuXHJcbiAgICBpZiAodGhpcy5pbnRlcnNlY3QoZ2FtZS5wbGF5ZXIpKSB7XHJcbiAgICAgIGhpdHRlciA9IGdhbWUucGxheWVyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoaGl0dGVyKSB7XHJcbiAgICAgIC8vdGhpcy54VmVsb2NpdHkgKj0gLTEuMTsgLy8gc3dpdGNoIHRoZSBtb3ZlbWVudCAvIHJlYm91bmQgYW5kIGFsc28gaW5jcmVhc2UgdGhlIHNwZWVkLlxyXG4gICAgICB0aGlzLnlWZWxvY2l0eSAqPSAtMS4xO1xyXG4gICAgICAvLyBtYWtlIHRoZSBnYW1lIGludGVyZXN0aW5nIGJ5IGdhaW5pbmcgdmVsb2NpdHkuIFxyXG4gICAgICAvLyBJZiB0aGlzIGlzIG5vdCBkb25lLCB0aGUgYmFsbCBtb3ZlbWVudCBhZnRlciBoaXQgd2lsbCBiZSBwcmVkaWN0YWJsZVxyXG4gICAgICAvL3RoaXMueVZlbG9jaXR5ICs9IGhpdHRlci54VmVsb2NpdHkgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGlmIGJhbGwgaW50ZXJzZWN0cyB3aXRoIGJyaWNrc1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2FtZS53YWxsLmJyaWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgYiA9IGdhbWUud2FsbC5icmlja3NbaV07XHJcbiAgICAgIGlmIChiLnNob3cgPT0gdHJ1ZSAmJiB0aGlzLmludGVyc2VjdChiKSkge1xyXG4gICAgICAgIGIuc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIGdhbWUuc2NvcmUxKys7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI6OmJyaWNrLmludGVyc2VjdFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9lbnRpdHlcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJpY2sgZXh0ZW5kcyBFbnRpdHkge1xyXG4gIHk6IGFueVxyXG4gIHg6IGFueVxyXG4gIHdpZHRoOiBhbnlcclxuICBoZWlnaHQ6IGFueVxyXG4gIHBsYXllcjogYW55XHJcbiAgc2hvdzogYm9vbGVhblxyXG4gIHlWZWxvY2l0eTogYW55XHJcbiAgeFZlbG9jaXR5OiBhbnlcclxuICBzY29yZTogYW55XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMud2lkdGggPSA2MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIHRoaXMueFZlbG9jaXR5ID0gMDtcclxuICAgIHRoaXMueVZlbG9jaXR5ID0gMDtcclxuXHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMuc2hvdyA9IHRydWU7XHJcblxyXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJkaXN0L3Nwcml0ZXMvYnJpY2sucG5nXCIpO1xyXG4gICAgZWxlbS5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyBcInB4XCI7XHJcblxyXG4gICAgdmFyIHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwbGF5ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBwbGF5ZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcclxuICAgIHBsYXllci5jbGFzc05hbWUgKz0gXCIgYnJpY2tcIjtcclxuICAgIHBsYXllci5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuICAgIGdhbWUuY2FudmFzLmFwcGVuZChwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICAgIHBsYXllci5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICAgIHBsYXllci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG59IiwiLy8gVGhlIGdhbWUgaXMgY29tcG9zZWQgb2YgYWN0b3JzXHJcbmNsYXNzIEVudGl0eSB7XHJcbiAgLy8gQSBwb3NpdGlvblxyXG4gIHg6IG51bWJlciA9IDBcclxuICB5OiBudW1iZXIgPSAwXHJcbiAgcHg6IG51bWJlciA9IDBcclxuICBweTogbnVtYmVyID0gMFxyXG4gIGdhbWU6IGFueVxyXG5cclxuICAvLyBEaW1lbnNpb25zXHJcbiAgd2lkdGg6IG51bWJlciA9IDBcclxuICBoZWlnaHQ6IG51bWJlciA9IDBcclxuXHJcbiAgLy8gQSB2ZWxvY2l0eTogc3BlZWQgd2l0aCBkaXJlY3Rpb25cclxuICB4VmVsb2NpdHk6IG51bWJlciA9IDA7XHJcbiAgeVZlbG9jaXR5OiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gIH1cclxuXHJcbiAgLy8gT24gZWFjaCB1cGRhdGUsIHdlIGFwcGx5IHRoZSB2ZWxvY2l0eSB0byB0aGUgY3VycmVudCBwb3NpdGlvbi5cclxuICAvLyBUaGlzIG1ha2VzIHRoZSBlbnRpdHkgbW92ZS5cclxuICAvLyBFbnRpdGllcyBhcmUgZXhwZWN0ZWQgdG8gb3ZlcnJpZGUgdGhpcyBtZXRob2RcclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnB4ID0gdGhpcy54OyAgLy8gcHJldiB2YWx1ZXNcclxuICAgIHRoaXMucHkgPSB0aGlzLnk7XHJcblxyXG4gICAgdGhpcy54ICs9IHRoaXMueFZlbG9jaXR5O1xyXG4gICAgdGhpcy55ICs9IHRoaXMueVZlbG9jaXR5O1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvLyBUaGUgYWN0b3IgIGtub3dzIGhvdyB0byBkcmF3IGl0c2VsZi5cclxuICAvLyBBbGwgYWN0b3JzIG9mIG91ciBnYW1lIHdpbGwgYmUgd2hpdGUgcmVjdGFuZ2xlcy5cclxuXHJcbiAgLy8gQmFzaWMgYm91bmRpbmcgYm94IGNvbGxpc29uIGRldGVjdGlvbi5cclxuICAvLyBSZXR1cm5zICd0cnVlJyBpZiB0aGUgYWN0b3IgaW50ZXJzZWN0IHdpdGggYW5vdGhlciBvbmVcclxuICBpbnRlcnNlY3Qob3RoZXIpIHtcclxuICAgIGlmIChvdGhlciA9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IG90aGVyLnkgJiZcclxuICAgICAgdGhpcy55IDwgb3RoZXIueSArIG90aGVyLmhlaWdodCAmJlxyXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gb3RoZXIueCAmJlxyXG4gICAgICB0aGlzLnggPCBvdGhlci54ICsgb3RoZXIud2lkdGg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XHJcbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgZW50aXRpZXM6IEVudGl0eVtdXHJcbiAgYmFsbDogYW55XHJcbiAgaGVpZ2h0OiBhbnlcclxuICB3aWR0aDogYW55XHJcbiAgY2FudmFzOiBhbnlcclxuICB3YWxsOiBhbnlcclxuICBwbGF5ZXI6IGFueVxyXG4gIGJhY2tncm91bmQ6IGFueVxyXG4gIHNjb3JlMTogbnVtYmVyXHJcbiAgc2NvcmUyOiBudW1iZXJcclxuICBhbmltSWQ6IGFueVxyXG5cclxuICBzdGF0aWMga2V5cyA9IHtcclxuICAgIDMyOiAnc3BhY2UnLFxyXG4gICAgMzc6ICdsZWZ0JyxcclxuICAgIDM4OiAndXAnLFxyXG4gICAgMzk6ICdyaWdodCcsXHJcbiAgICA0MDogJ2Rvd24nXHJcbiAgfTtcclxuICBrZXlQcmVzc2VkOiB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMud2lkdGggPSBjYW52YXMub2Zmc2V0V2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0aGlzLnNjb3JlMSA9IDA7XHJcbiAgICB0aGlzLnNjb3JlMiA9IDA7XHJcblxyXG4gICAgdGhpcy5rZXlQcmVzc2VkID0ge307XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVFdmVudChlKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXZlbnQoZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUV2ZW50KGUpIHtcclxuICAgIC8vIENvbnZlcnQgdGhlIGtleSBjb2RlIHRvIGtleSBuYW1lXHJcbiAgICB2YXIga2V5TmFtZSA9IEdhbWUua2V5c1tlLndoaWNoXTtcclxuXHJcbiAgICBpZiAoa2V5TmFtZSkge1xyXG4gICAgICAvLyBlLmc6ICdzZWxmLmtleVByZXNzZWQudXAgPSB0cnVlJyBvbiBrZXlkb3duXHJcbiAgICAgIC8vIFdpbGwgYmUgc2V0IHRvIGZhbHNlIG9uIGtleXVwXHJcbiAgICAgIHRoaXMua2V5UHJlc3NlZFtrZXlOYW1lXSA9IChlLnR5cGUgPT09IFwia2V5ZG93blwiKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJLRVk6IFwiLCB0aGlzLmtleVByZXNzZWQpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgbGV0IGZwczogbnVtYmVyID0gNjAsXHJcbiAgICAgIGludGVydmFsOiBudW1iZXIgPSAxMDAwIC8gZnBzO1xyXG5cclxuICAgIGxldCBsb29wID0gKHRpbWUpID0+IHtcclxuICAgICAgdGhpcy5hbmltSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLmRyYXcoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNjb3JlMSA9PSAxMCkge1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1JZCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcbiAgICAgIGlmIChlbnRpdHkudXBkYXRlKSBlbnRpdHkudXBkYXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xyXG4gICAgICBpZiAoZW50aXR5LmRyYXcpIGVudGl0eS5kcmF3KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vZW50aXR5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFkZGxlIGV4dGVuZHMgRW50aXR5IHtcclxuICB3aWR0aDogbnVtYmVyXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxuICBzY29yZTogbnVtYmVyXHJcbiAgeTogbnVtYmVyXHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpXHJcbiAgICB0aGlzLndpZHRoID0gMjA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDEwMDtcclxuICAgIHRoaXMuc2NvcmUgPSAwO1xyXG5cclxuICAgIHRoaXMueSA9IDA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBzdXBlci51cGRhdGUoKVxyXG4gICAgLy8geCB3aWxsIGFsd2F5cyBzdGF5IGJlbG93IG9yIGVxdWFsIHRvIDBcclxuICAgIHRoaXMueCA9IE1hdGgubWluKE1hdGgubWF4KHRoaXMueCwgMCksXHJcbiAgICAgIHRoaXMuZ2FtZS53aWR0aCAtIHRoaXMud2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgbW92ZVRvKHBsYXllcikge1xyXG4gICAgdGhpcy54ID0gcGxheWVyLng7XHJcbiAgICB0aGlzLnkgPSBwbGF5ZXIueTtcclxuICAgIHRoaXMueFZlbG9jaXR5ID0gcGxheWVyLnhWZWxvY2l0eTtcclxuICAgIHRoaXMueVZlbG9jaXR5ID0gcGxheWVyLnlWZWxvY2l0eTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQYWRkbGUgfSBmcm9tIFwiLi9wYWRkbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFBhZGRsZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBsYXllcjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgdGhpcy53aWR0aCA9IDEwMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XHJcbiAgICB0aGlzLnggPSAyMDtcclxuICAgIHRoaXMueSA9IGdhbWUuaGVpZ2h0IC0gNTA7XHJcbiAgICB0aGlzLm5hbWUgPSBcInBsYXllclwiO1xyXG5cclxuICAgIC8vIEltYWdlXHJcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBlbGVtLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImRpc3Qvc3ByaXRlcy9wYWRkbGUucG5nXCIpO1xyXG5cclxuICAgIHZhciBwbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGxheWVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgcGxheWVyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XHJcbiAgICBwbGF5ZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLmxlZnQgPSB0aGlzLnggKyAncHgnO1xyXG4gICAgcGxheWVyLnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XHJcbiAgICBwbGF5ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXJcIik7XHJcbiAgICBwbGF5ZXIuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcblxyXG5cclxuICAgIGdhbWUuY2FudmFzLmFwcGVuZChwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICAgIHBsYXllci5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcclxuICAgIHBsYXllci5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlID0gKCkgPT4ge1xyXG4gICAgdmFyIHNwZWVkID0gMTA7XHJcbiAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcclxuXHJcbiAgICBpZiAoZ2FtZS5rZXlQcmVzc2VkLmxlZnQpIHtcclxuICAgICAgdGhpcy54VmVsb2NpdHkgPSAtc3BlZWQ7XHJcbiAgICB9IGVsc2UgaWYgKGdhbWUua2V5UHJlc3NlZC5yaWdodCkge1xyXG4gICAgICB0aGlzLnhWZWxvY2l0eSA9IHNwZWVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy54VmVsb2NpdHkgPSAwOyAvLyBzdG9wIG1vdmluZyBpZiBubyBrZXlzIHByZXNzZWRcclxuICAgIH1cclxuICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gIH1cclxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vZW50aXR5XCI7XHJcbmltcG9ydCBCcmljayBmcm9tIFwiLi9icmlja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbCBleHRlbmRzIEVudGl0eSB7XHJcbiAgYnJpY2tzOiBhbnlcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLmJyaWNrcyA9IFtdO1xyXG4gICAgdGhpcy5pbml0KGdhbWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIGluaXQoZ2FtZSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIHZhciBiID0gbmV3IEJyaWNrKGdhbWUpO1xyXG4gICAgICBiLnBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJyaWNrX1wiICsgaSk7XHJcbiAgICAgIGIueCArPSBiLndpZHRoICogaTtcclxuICAgICAgYi55ID0gMDtcclxuXHJcbiAgICAgIHRoaXMuYnJpY2tzLnB1c2goYik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVwZGF0ZSgpIHtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYnJpY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBiID0gdGhpcy5icmlja3NbaV07XHJcbiAgICAgIGlmIChiLnNob3cpIHtcclxuICAgICAgICBiLmRyYXcoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBiLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2Jsb2Nrcy9nYW1lJztcclxuaW1wb3J0IEJhbGwgZnJvbSAnLi9ibG9ja3MvYmFsbCc7XHJcbmltcG9ydCBXYWxsIGZyb20gJy4vYmxvY2tzL3dhbGwnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vYmxvY2tzL3BsYXllcic7XHJcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vYmxvY2tzL2JhY2tncm91bmQnO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cgeyBnYW1lOiBhbnk7IHN0YXJ0R2FtZTogYW55IH1cclxufVxyXG5cclxuXHJcbnZhciBzY2VuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZVwiKSxcclxuICBnYW1lID0gbmV3IEdhbWUoc2NlbmUpO1xyXG5cclxuZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgc2NlbmUuaW5uZXJIVE1MID0gXCJcIjtcclxuICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2FtZS5hbmltSWQpO1xyXG4gIGdhbWUuZW50aXRpZXMgPSBbXHJcbiAgICBnYW1lLmJhbGwgPSBuZXcgQmFsbChnYW1lKSxcclxuICAgIGdhbWUud2FsbCA9IG5ldyBXYWxsKGdhbWUpLFxyXG4gICAgZ2FtZS5wbGF5ZXIgPSBuZXcgUGxheWVyKGdhbWUpLFxyXG4gICAgZ2FtZS5iYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQoZ2FtZSlcclxuICBdXHJcbiAgZ2FtZS5zY29yZTEgPSAwO1xyXG5cclxuICBnYW1lLnN0YXJ0KCk7XHJcbn1cclxuXHJcbnN0YXJ0KCk7XHJcblxyXG53aW5kb3cuZ2FtZSA9IGdhbWU7XHJcbndpbmRvdy5zdGFydEdhbWUgPSBzdGFydDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=