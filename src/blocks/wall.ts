import Entity from "./entity";
import Brick from "./brick";

export default class Wall extends Entity {
  bricks: any

  constructor(game) {
    super(game);
    this.bricks = [];
    this.init(game);
  }


  init(game) {
    for (var i = 0; i < 10; i++) {
      var b = new Brick(game);
      b.player.setAttribute("id", "brick_" + i);
      b.x += b.width * i;
      b.y = 0;

      this.bricks.push(b);
    }
  }
  update() {
  }

  draw() {
    for (var i = 0; i < this.bricks.length; i++) {
      var b = this.bricks[i];
      if (b.show) {
        b.draw();
      } else {
        b.hide();
      }
    }
  }
}



