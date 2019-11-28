import Entity from './entity';
import Game from './game';

export default class Ball extends Entity {
  width: any
  height: any
  ax: any
  name: any
  game: Game
  xVelocity: any
  yVelocity: any
  x: any
  y: any
  player: any

  constructor(game) {
    super(game);
    this.width = 20;
    this.height = 20;
    this.ax = 0;
    this.name = "ball";

    var player = document.createElement("div");
    player.style.position = "absolute";
    player.style.width = this.width + 'px';
    player.style.height = this.height + 'px';
    player.style.left = this.x + 'px';
    player.style.top = this.y + 'px';
    player.setAttribute("id", "ball");
    this.player = player;

    game.canvas.append(player);

    this.reset();
  }

  moveTo(ball) {
    this.x = ball.x;
    this.y = ball.y;
    this.xVelocity = ball.xVelocity;
    this.yVelocity = ball.yVelocity;
  }

  draw() {
    var player = this.player;
    player.style.left = this.x + 'px';
    player.style.top = this.y + 'px';
  }

  reset() {
    let game = this.game;
    this.x = game.width / 2 - this.width; // center ball horizontally
    this.y = game.height / 2 - this.height; // center ball vertically

    // Set random values if ball goes offscreen
    var min = -5,
      max = 5;

    this.yVelocity = Math.floor(Math.random() * (max - min + 1) + min);
    this.xVelocity = Math.random() > 0.5 ? 5 : -5; // 50% chance of starting from left or right
  }

  update() {
    let game = this.game;
    //Entity.prototype.update.apply(this, arguments); // call parent update()
    super.update();
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
      if (b.show == true &&  this.intersect(b)) {
        b.show = false;
        game.score1++;
        console.log("::brick.intersect");
      }
    }
  }
}







