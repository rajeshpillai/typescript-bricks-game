import Entity from './entity';

export default class Game {
  entities: Entity[]
  ball: any
  height: any
  width: any
  canvas: any
  wall: any

  constructor(canvas) {
    this.canvas = canvas;
  }

  start() {
    let fps: number = 60,
      interval: number = 1000 / fps;

    let loop = () => {
      window.requestAnimationFrame(loop);
      this.update();
      this.draw();
    };

    loop();
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