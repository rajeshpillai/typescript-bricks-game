import Entity from "./entity";

export class Paddle extends Entity {
  width: number
  height: number
  score: number
  y: number

  constructor(game) {
    super(game)
    this.width = 20;
    this.height = 100;
    this.score = 0;

    this.y = 0;
  }

  update() {
    super.update()
    // x will always stay below or equal to 0
    this.x = Math.min(Math.max(this.x, 0),
      this.game.width - this.width);
  }

  moveTo(player) {
    this.x = player.x;
    this.y = player.y;
    this.xVelocity = player.xVelocity;
    this.yVelocity = player.yVelocity;
  }
}