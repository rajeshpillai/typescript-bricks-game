import Game from './blocks/game';


var scene = document.querySelector("#game"),
  game = new Game(scene);

game.start();
