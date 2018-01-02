let winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

let isSubset = function(superSet, subSet) {
  return subSet.every(function(element) {
    return superSet.includes(element);
  });
};

let Player = function(name, symbol) {
  this.name = name;
  this.symbol = symbol;
  this.moves = [];
};

Player.prototype.isMove=function(move) {
  return this.moves.includes(move);
}

Player.prototype.hasPlayerWon = function() {
  let playerMoves = this.moves;
  return winningCombinations.some(function(combination) {
    return isSubset(playerMoves, combination);
  })
};
