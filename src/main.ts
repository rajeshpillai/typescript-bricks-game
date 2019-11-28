import Game from './blocks/game';
import Ball from './blocks/ball';
import { Wall } from './blocks/wall';
import { Player } from './blocks/player';

var scene = document.querySelector("#game"),
  game = new Game(scene);

game.entities = [
  game.ball = new Ball(game),
  game.wall = new Wall(game),
  game.player = new Player(game)
]

game.start();
