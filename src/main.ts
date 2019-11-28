import Game from './blocks/game';
import Ball from './blocks/ball';
import { Wall } from './blocks/wall';

var scene = document.querySelector("#game"),
  game = new Game(scene);

game.entities = [
  game.ball = new Ball(game),
  game.wall = new Wall(game)
]

game.start();
