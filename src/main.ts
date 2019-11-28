import Game from './blocks/game';
import Ball from './blocks/ball';

var scene = document.querySelector("#game"),
  game = new Game(scene);

game.entities = [
  game.ball = new Ball(game)
]

game.start();
