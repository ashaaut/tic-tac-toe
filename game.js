let Game = function() {
  this.players = [];
  this.playerTurn = 0;
};

Game.prototype.isMoveAlreadyPresent = function(move) {
  return this.players[0].isMove(move) || this.players[1].isMove(move)
};

Game.prototype.updateMove = function(position) {
  let player = this.players[this.playerTurn];
  player.moves.push(position);
  this.playerTurn = 1 - this.playerTurn;
  console.log(this.playerTurn);
};

Game.prototype.checkGameIsDrawn = function() {
  let player1Moves = this.players[0].moves;
  let player2Moves = this.players[1].moves;
  let totalMoves = player1Moves.concat(player2Moves);
  if (totalMoves.length == 9) {
    return !this.players[0].hasPlayerWon(player1Moves) && !this.players[1].hasPlayerWon(player2Moves);
  }
}
