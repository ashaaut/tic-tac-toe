let game = new Game();
let getMove = function() {
  let cell = event.target.id;
  return +cell;
};


let updateMoveOnDisplay = function(position, player) {
  document.getElementById(position).innerText = player.symbol;
};

let createPlayer = function() {
  game.players.push(new Player('Player 1', 'X'));
  game.players.push(new Player('Player 2', 'O'));
};


let displayTurn = function() {
  let player = game.players[game.playerTurn];
  document.getElementById('display').innerText = `${player.name} turn`;
};

let stopGame = function() {
  let table = document.getElementById("tic-tac-toe");
  table.onclick = null;
};

let actionOnClick = function() {
  let move = getMove();
  let player = game.players[game.playerTurn];
  if (game.isMoveAlreadyPresent(move)) {
    return;
  };
  game.updateMove(move);
  updateMoveOnDisplay(move, player);
  displayTurn();
  if (player.hasPlayerWon()) {
    document.getElementById('display').innerText = `${player.name} won`;
    stopGame();
  } else if (game.checkGameIsDrawn()) {
    document.getElementById('display').innerText = `match drawn`;
    stopGame();
  }
};

let startGame = function() {
  let table = document.getElementById('tic-tac-toe');
  table.onclick = actionOnClick;
  createPlayer();
  displayTurn();
};

window.onload = startGame;
