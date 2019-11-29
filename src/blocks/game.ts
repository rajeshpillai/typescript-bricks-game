import Entity from './entity';

export default class Game {
  entities: Entity[]
  ball: any
  height: any
  width: any
  canvas: any
  wall: any
  player: any
  background: any
  score1: number
  score2: number
  animId: any

  static keys = {
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  keyPressed: {};

  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.offsetWidth;
    this.height = canvas.offsetHeight;
    this.score1 = 0;
    this.score2 = 0;

    this.keyPressed = {};

    document.addEventListener("keydown", (e) => {
      this.handleEvent(e);
    });
    document.addEventListener("keyup", (e) => {
      this.handleEvent(e);
    });
  }

  handleEvent(e) {
    // Convert the key code to key name
    var keyName = Game.keys[e.which];

    if (keyName) {
      // e.g: 'self.keyPressed.up = true' on keydown
      // Will be set to false on keyup
      this.keyPressed[keyName] = (e.type === "keydown");
      e.preventDefault();

      console.log("KEY: ", this.keyPressed);
    }

  }

  start() {
    let fps: number = 60,
      interval: number = 1000 / fps;

    let loop = (time) => {
      this.animId = window.requestAnimationFrame(loop);
      this.update();
      this.draw();

      if (this.score1 == 10) {
        window.cancelAnimationFrame(this.animId);
      }
    };

    window.requestAnimationFrame(loop);
  }

  update() {
    this.entities.forEach((entity) => {
      if (entity.update) entity.update();
    });
  }

  draw() {
    this.entities.forEach((entity) => {
      if (entity.draw) entity.draw();
    });
  }
}

