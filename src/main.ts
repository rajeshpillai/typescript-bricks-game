import Game from './blocks/game';
import Ball from './blocks/ball';
import Wall from './blocks/wall';
import Player from './blocks/player';
import Background from './blocks/background';

declare global {
  interface Window { game: any; setup: any }
}


var scene = document.querySelector("#game"),
  game = new Game(scene);

function setup() {
  scene.innerHTML = "";
  window.cancelAnimationFrame(game.animId);
  game.entities = [
    game.ball = new Ball(game),
    game.wall = new Wall(game),
    game.player = new Player(game),
    game.background = new Background(game)
  ]
  game.score1 = 0;
}

setup();
game.start();

window.game = game;
window.setup = setup;

