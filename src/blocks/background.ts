import Entity from "./entity";

export default class Background extends Entity {
  score_player1: HTMLElement;
  score_player2: HTMLElement;
  constructor(game) {
    super(game)
    this.score_player1 = document.getElementById("score_player1");
    this.score_player2 = document.getElementById("score_player2");
  }
}