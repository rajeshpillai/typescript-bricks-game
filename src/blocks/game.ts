export default class Game {
  constructor(scene) {
  }

  start() {
    let fps = 60,
      interval = 1000 / fps;

    let loop = () => {
      window.requestAnimationFrame(loop);
      this.update();
      this.draw();
    };

    loop();
  }

  update() {
    console.log('Game: updating...')
  }

  draw() {
    console.log('Game: drawing...')
  }
}