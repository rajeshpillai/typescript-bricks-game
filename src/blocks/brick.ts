import Entity from "./entity"

export class Brick extends Entity {
  y: any
  x: any
  width: any
  height:any
  player: any
  show: boolean
  yVelocity: any
  xVelocity: any
  score: any


  constructor(game) {
    super(game);
    this.width = 60;
    this.height = 20;
    this.score = 0;
    this.xVelocity = 0;
    this.yVelocity = 0;

    this.y = 0;
    this.x = 0;
    this.show = true;

    var player = document.createElement("div");
    player.style.position = "absolute";
    player.style.width = this.width + 'px';
    player.style.height = this.height + 'px';
    player.style.left = this.x + 'px';
    player.style.top = this.y + 'px';
    player.className += " brick";
    this.player = player;

    game.canvas.append(player);
  }

  draw  () {
    var player = this.player;
    player.style.left = this.x +'px';
    player.style.top = this.y +'px';
  }
  
  hide () {
    var player = this.player;
    player.style.display="none";
  }
}