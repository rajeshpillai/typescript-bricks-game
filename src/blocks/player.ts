import { Paddle } from "./paddle";

export default class Player extends Paddle {
  name: string;
  player: HTMLDivElement;

  constructor(game) {
    super(game);
    this.width = 100;
    this.height = 20;
    this.x = 20;
    this.y = game.height - 50;
    this.name = "player";

    // Image
    var elem = document.createElement("img");
    elem.setAttribute("src", "dist/sprites/paddle.png");

    var player = document.createElement("div");
    player.style.position = "absolute";
    player.style.width = this.width + 'px';
    player.style.height = this.height + 'px';
    player.style.left = this.x + 'px';
    player.style.top = this.y + 'px';
    player.setAttribute("id", "player");
    player.appendChild(elem);
    this.player = player;



    game.canvas.append(player);
  }

  draw() {
    var player = this.player;
    player.style.left = this.x + 'px';
    player.style.top = this.y + 'px';
  }

  update = () => {
    var speed = 10;
    let game = this.game;

    if (game.keyPressed.left) {
      this.xVelocity = -speed;
    } else if (game.keyPressed.right) {
      this.xVelocity = speed;
    } else {
      this.xVelocity = 0; // stop moving if no keys pressed
    }
    super.update();
  }
}