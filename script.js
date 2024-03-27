const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const handleCellClick = (index) => {
  if (gameState[index] || !gameActive) return;
  
  gameState[index] = currentPlayer;
  cells[index].textContent = currentPlayer;

  if (checkWin()) {
    gameActive = false;
    alert(`Player ${currentPlayer} wins!`);
    return;
  }

  if (!gameState.includes('')) {
    gameActive = false;
    alert('It\'s a draw!');
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const checkWin = () => {
  return winningConditions.some((condition) => {
    return condition.every((index) => {
      return gameState[index] === currentPlayer;
    });
  });
};

const resetGame = () => {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.textContent = '');
};

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
});

resetButton.addEventListener('click', resetGame);
